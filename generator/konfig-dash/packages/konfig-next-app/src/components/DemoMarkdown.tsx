import { makeAutoObservable } from 'mobx'
import ReactMarkdown, { Components } from 'react-markdown'
import remarkDirective from 'remark-directive'
import remarkDirectiveRehype from 'remark-directive-rehype'
import {
  Anchor,
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
import { DemoCode } from './DemoCode'
import { getTitlesFromMarkdown } from '@/utils/get-titles-from-markdown'

export class DemoState {
  sessionId: string | null = null
  cells: CellState[] = []
  markdown: string = ''
  constructor(parameters?: { markdown?: string }) {
    makeAutoObservable(this)
    if (parameters && parameters.markdown !== undefined) {
      this.markdown = parameters.markdown
    }
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

  setMarkdown(markdown: string) {
    this.markdown = markdown
  }

  get titles() {
    return getTitlesFromMarkdown({ markdown: this.markdown })
  }
}

export const DemoStateContext = createContext<DemoState | null>(null)
export const ShowCodeContext = createContext<boolean>(false)

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
  ({ state, showCode }: { state: DemoState; showCode: boolean }) => {
    return (
      <ShowCodeContext.Provider value={showCode}>
        <DemoStateContext.Provider value={state}>
          <Stack spacing="xs">
            <ReactMarkdown
              children={state.markdown}
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
                code: DemoCode,
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
              }}
            />
          </Stack>
        </DemoStateContext.Provider>
      </ShowCodeContext.Provider>
    )
  }
)

export default DemoMarkdown
