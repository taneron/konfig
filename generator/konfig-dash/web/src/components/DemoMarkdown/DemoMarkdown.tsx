import { makeAutoObservable } from 'mobx'
import ReactMarkdown, { Components } from 'react-markdown'
import remarkDirective from 'remark-directive'
import remarkDirectiveRehype from 'remark-directive-rehype'
import { Prism } from '@mantine/prism'
import {
  Anchor,
  Button as MantineButton,
  Code,
  Collapse,
  PasswordInput,
  Stack,
  TextInput,
  Title,
  Text,
} from '@mantine/core'
import { toText } from 'hast-util-to-text'
import { createFormContext } from '@mantine/form'
import { useContext, useState } from 'react'

export class DemoState {
  showCode = true
  constructor() {
    makeAutoObservable(this)
  }
}

const langDisplayName = {
  python: 'Python',
  typescript: 'TypeScript',
} as const

const FormContext = React.createContext<
  ReturnType<typeof createFormContext>[1] | null
>(null)

const Form: Components['form'] = ({
  node,
  children,
  siblingCount,
  ...props
}) => {
  const [[FormProvider, useFormContext, useForm]] = useState(
    createFormContext()
  )

  const initialValues = node.children.reduce((initialValues, child) => {
    if (child.type === 'element' && child.tagName === 'input') {
      const id = child.properties?.['id']
      if (typeof id === 'string') {
        initialValues[id] = ''
      }
    }
    return initialValues
  }, {} as { [key: string]: string })

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

  const firstPreNode = node.children.find((child) => {
    return child.type === 'element' && child.tagName === 'pre'
  })

  const firstCodeSnippet = firstPreNode ? toText(firstPreNode) : undefined

  const form = useForm({ initialValues, validate })

  return (
    <FormContext.Provider value={useFormContext}>
      <FormProvider form={form}>
        <form
          onSubmit={form.onSubmit((values) => {
            console.log(firstCodeSnippet)
          })}
          {...props}
        >
          <Stack spacing="xs">{children}</Stack>
        </form>
      </FormProvider>
    </FormContext.Provider>
  )
}

const Input: Components['input'] = ({
  node,
  children,
  size,
  type,
  siblingCount,
  ...props
}) => {
  const Component = type === 'password' ? PasswordInput : TextInput
  const useFormContext = useContext(FormContext)
  const form = useFormContext?.()
  const id = node.properties?.id
  const inputProps =
    form !== undefined && typeof id === 'string'
      ? form.getInputProps(id)
      : undefined
  return <Component type={type} autoComplete="off" {...props} {...inputProps} />
}

const Button: Components['button'] = ({
  node,
  children,
  siblingCount,
  ...props
}) => {
  return (
    <MantineButton
      color="cyan"
      type="submit"
      compact
      variant="light"
      {...props}
    >
      Run
    </MantineButton>
  )
}

const DemoMarkdown = ({
  markdown,
  state,
}: {
  markdown: string
  state: DemoState
}) => {
  return (
    <Stack spacing="xs">
      <ReactMarkdown
        children={markdown}
        remarkPlugins={[remarkDirective, remarkDirectiveRehype]}
        components={{
          a({ children, node, siblingCount, ...props }) {
            return <Anchor {...props}>{children}</Anchor>
          },
          p({ node, children, siblingCount, ...props }) {
            return <Text {...props}>{children}</Text>
          },
          form: Form,
          input: Input,
          button: Button,
          h1(props) {
            return (
              <Title id={toText(props.node)} order={1}>
                {props.children}
              </Title>
            )
          },
          h2(props) {
            return (
              <Title id={toText(props.node)} order={2}>
                {props.children}
              </Title>
            )
          },
          h3(props) {
            return (
              <Title id={toText(props.node)} order={3}>
                {props.children}
              </Title>
            )
          },
          h4(props) {
            return (
              <Title id={toText(props.node)} order={4}>
                {props.children}
              </Title>
            )
          },
          h5(props) {
            return (
              <Title id={toText(props.node)} order={5}>
                {props.children}
              </Title>
            )
          },
          h6(props) {
            return (
              <Title id={toText(props.node)} order={6}>
                {props.children}
              </Title>
            )
          },
          code({ node, inline, className, children, siblingCount, ...props }) {
            if (inline) return <Code>{children}</Code>
            const match = /language-(\w+)/.exec(className || '')
            if (match === null || inline)
              return (
                <code {...props} className={className}>
                  {children}
                </code>
              )
            const language = match[1]
            if (language !== 'python' && language !== 'typescript')
              return (
                <code {...props} className={className}>
                  {children}
                </code>
              )
            return (
              <Collapse in={state.showCode}>
                <Prism.Tabs value={language}>
                  <Prism.TabsList>
                    <Prism.Tab value={language}>
                      {langDisplayName[language]}
                    </Prism.Tab>
                  </Prism.TabsList>
                  <Prism.Panel value={language} language={language}>
                    {String(children).replace(/\n$/, '')}
                  </Prism.Panel>
                </Prism.Tabs>
              </Collapse>
            )
          },
        }}
      />
    </Stack>
  )
}

export default DemoMarkdown
