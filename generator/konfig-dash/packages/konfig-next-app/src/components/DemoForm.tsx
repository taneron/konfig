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

export const FormContext = createContext<
  ReturnType<typeof createFormContext>[1] | null
>(null)

export const CellContext = createContext<CellState | null>(null)

export class CellState {
  show = false
  running = false
  state: 'Success' | 'Error' | 'N/A' = 'N/A'
  output: string = ''
  demoState: DemoState | null

  constructor({ demoState }: { demoState: DemoState | null }) {
    makeAutoObservable(this)
    this.demoState = demoState
  }

  get ranSuccessfully() {
    return this.state === 'Success'
  }

  get failed() {
    return this.state === 'Error'
  }

  async run({
    position,
    environmentVariables,
  }: {
    position: Position
    environmentVariables: unknown
  }) {
    if (!this.demoState?.sessionId) return
    this.running = true
    this.show = false

    const response = await api.executeCode.query({
      demoId: 'snaptrade',
      sessionId: this.demoState?.sessionId,
      codePosition: position,
      environmentVariables: EnvironmentVariables.parse(environmentVariables),
    })

    if (response.result === 'Could not find code') return
    this.output = response.output
    this.running = false
    this.show = true
    this.state = response.error === '' ? 'Success' : 'Error'
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
      const id = child.properties?.['id']
      if (typeof id === 'string') {
        initialValues[id] = ''
      }
    }
    return initialValues
  }, {} as { [key: string]: string })

  // Ensure all inputs are non-empty
  const validate = node.children.reduce((validate, child) => {
    if (child.type === 'element' && child.tagName === 'input') {
      const id = child.properties?.['id']
      const label = child.properties?.['label']
      if (typeof id === 'string') {
        validate[id] = (value) => (value === '' ? `${label} is required` : null)
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
    console.log(demoState)
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
              console.log(cell)
              cell?.run({
                position: firstPreNode.position,
                environmentVariables: values,
              })
            })}
            {...props}
          >
            <Stack spacing="xs">
              <>{children}</>
            </Stack>
          </form>
        </FormProvider>
      </CellContext.Provider>
    </FormContext.Provider>
  )
}

export const DemoForm = observer(_Form)
