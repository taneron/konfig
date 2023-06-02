import { makeAutoObservable } from 'mobx'
import ReactMarkdown from 'react-markdown'
import remarkDirective from 'remark-directive'
import remarkDirectiveRehype from 'remark-directive-rehype'
import { Prism } from '@mantine/prism'
import { observer } from 'mobx-react'
import { Code, Collapse, PasswordInput, TextInput, Title } from '@mantine/core'
import { toText } from 'hast-util-to-text'

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

const DemoMarkdown = observer(
  ({ markdown, state }: { markdown: string; state: DemoState }) => {
    return (
      <ReactMarkdown
        children={markdown}
        remarkPlugins={[remarkDirective, remarkDirectiveRehype]}
        components={{
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
          input({ node, children, size, type, ...props }) {
            const Component = type === 'password' ? PasswordInput : TextInput
            return <Component type={type} autoComplete="off" {...props} />
          },
          code({ node, inline, className, children, ...props }) {
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
    )
  }
)

export default DemoMarkdown
