import { api } from '@/utils/api'
import { EnvironmentVariables } from '@/utils/schemas'
import { Stack } from '@mantine/core'
import { createFormContext } from '@mantine/form'
import { observer } from 'mobx-react'
import { useState, useContext, createContext, useEffect } from 'react'
import { Components } from 'react-markdown'
import { DemoState, DemoStateContext } from './DemoMarkdown'
import { makeAutoObservable } from 'mobx'
import { Position } from 'unist-util-position/lib'
import { v4 as uuid } from 'uuid'

export const FormContext = createContext<
  ReturnType<typeof createFormContext>[1] | null
>(null)

export const CellContext = createContext<CellState | null>(null)

type RunState = 'Success' | 'Error' | 'N/A'
export class CellState {
  show = false
  running = false
  runState: RunState = 'N/A'
  output: string = ''
  demoState: DemoState | null
  id = uuid()

  constructor({ demoState }: { demoState: DemoState | null }) {
    makeAutoObservable(this)
    this.demoState = demoState
  }

  get ranSuccessfully() {
    return this.runState === 'Success'
  }

  get failed() {
    return this.runState === 'Error'
  }

  setRunning(value: boolean) {
    this.running = value
  }

  setShow(value: boolean) {
    this.show = value
  }

  setOutput(value: string) {
    this.output = value
  }

  setRunState(value: RunState) {
    this.runState = value
  }

  async run({
    position,
    environmentVariables,
  }: {
    position: Position
    environmentVariables: unknown
  }) {
    if (!this.demoState?.sessionId) return
    this.setRunning(true)
    this.setShow(false)

    const response = await api.executeCode.query({
      demoId: `${this.demoState.portal.portalName}:${this.demoState.name}`,
      sessionId: this.demoState?.sessionId,
      codePosition: position,
      environmentVariables: EnvironmentVariables.parse(environmentVariables),
    })

    this.setRunning(false)

    if (response.result === 'Could not find demo') {
      this.setRunState('Error')
      return
    }

    if (response.result === 'Could not find code') {
      this.setRunState('Error')
      return
    }
    this.setOutput(response.output)
    this.setRunning(false)
    this.setShow(true)
    this.setRunState(response.error === '' ? 'Success' : 'Error')
  }
}

const _Form: Components['form'] = ({
  node,
  children,
  siblingCount,
  ...props
}) => {
  const [[FormProvider, useFormContext, useForm]] = useState(
    createFormContext()
  )

  // Initialize values
  const initialValues = node.children.reduce((initialValues, child) => {
    if (child.type === 'element' && child.tagName === 'input') {
      const name = child.properties?.['name']
      if (typeof name === 'string') {
        initialValues[name] = ''
      }
    }
    return initialValues
  }, {} as { [key: string]: string })

  // Ensure all inputs are non-empty
  const validate = node.children.reduce((validate, child) => {
    if (child.type === 'element' && child.tagName === 'input') {
      const name = child.properties?.['name']
      const label = child.properties?.['label']
      if (typeof name === 'string') {
        validate[name] = (value) =>
          value === '' ? `${label} is required` : null
      }
    }
    return validate
  }, {} as { [key: string]: (value: string) => string | null })

  // Find the first section of code that is a Python snippet
  const firstPreNode = node.children.find((child) => {
    return child.type === 'element' && child.tagName === 'pre'
  })

  const form = useForm({ initialValues, validate })

  const demoState = useContext(DemoStateContext)

  // Turns out if you want to do something once for a component this is the
  // pattern you should follow to actually ensure that child components can
  // react to state updates
  const [cell] = useState(new CellState({ demoState }))
  useEffect(() => {
    if (demoState === null) return
    if (demoState.cells.includes(cell)) return
    demoState.pushCell({ cell })
  }, [])

  return (
    <FormContext.Provider value={useFormContext}>
      <CellContext.Provider value={cell}>
        <FormProvider form={form}>
          <form
            onSubmit={form.onSubmit(async (values) => {
              if (demoState === null) {
                return
              }
              if (demoState === null) {
                return
              }
              if (firstPreNode === undefined) {
                return
              }
              if (firstPreNode.position === undefined) {
                return
              }
              cell?.run({
                position: firstPreNode.position,
                environmentVariables: values,
              })
            })}
            {...props}
          >
            <Stack spacing="xs">{children}</Stack>
          </form>
        </FormProvider>
      </CellContext.Provider>
    </FormContext.Provider>
  )
}

export const DemoForm = observer(_Form)
