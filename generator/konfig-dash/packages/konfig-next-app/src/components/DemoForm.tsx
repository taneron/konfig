import { api } from '@/utils/api'
import { EnvironmentVariables } from '@/utils/schemas'
import { Stack } from '@mantine/core'
import { createFormContext } from '@mantine/form'
import { observer } from 'mobx-react'
import { useState, useContext, createContext } from 'react'
import { Components } from 'react-markdown'
import { SessionIdContext } from './DemoMarkdown'

export const FormContext = createContext<
  ReturnType<typeof createFormContext>[1] | null
>(null)

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

  const sessionId = useContext(SessionIdContext)

  return (
    <FormContext.Provider value={useFormContext}>
      <FormProvider form={form}>
        <form
          onSubmit={form.onSubmit(async (values) => {
            if (sessionId === null) {
              return
            }
            if (firstPreNode === undefined) {
              return
            }
            if (firstPreNode.position === undefined) {
              return
            }
            const result = await api.executeCode.query({
              demoId: 'snaptrade',
              sessionId,
              codePosition: firstPreNode.position,
              environmentVariables: EnvironmentVariables.parse(values),
            })
            console.log(result)
          })}
          {...props}
        >
          <Stack spacing="xs">{children}</Stack>
        </form>
      </FormProvider>
    </FormContext.Provider>
  )
}

export const DemoForm = observer(_Form)
