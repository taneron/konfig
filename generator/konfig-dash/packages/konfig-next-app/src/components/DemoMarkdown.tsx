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
import { createContext, useContext, useState } from 'react'
import { api } from '@/utils/api'
import { observer } from 'mobx-react'
import { CellState, DemoForm, FormContext } from './DemoForm'
import { DemoButton } from './DemoButton'

export class DemoState {
  showCode = true
  sessionId: string | null = null
  cells: CellState[] = []
  constructor() {
    makeAutoObservable(this)
    this.init()
  }

  pushCell({ cell }: { cell: CellState }) {
    this.cells.push(cell)
    return cell
  }

  async init() {
    const { session_id } = await api.startSession.query()
    this.setSessionId(session_id)
  }

  setSessionId(sessionId: string) {
    this.sessionId = sessionId
  }
}

const langDisplayName = {
  python: 'Python',
  typescript: 'TypeScript',
} as const

export const DemoStateContext = createContext<DemoState | null>(null)

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

const DemoMarkdown = observer(
  ({ markdown, state }: { markdown: string; state: DemoState }) => {
    return (
      <DemoStateContext.Provider value={state}>
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
              form: DemoForm,
              input: Input,
              button: DemoButton,
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
              code({
                node,
                inline,
                className,
                children,
                siblingCount,
                ...props
              }) {
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
      </DemoStateContext.Provider>
    )
  }
)

export default DemoMarkdown
