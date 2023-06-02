import { Container, Textarea, Paper } from '@mantine/core'
import { useState } from 'react'
import DemoMarkdown, {
  DemoState,
} from 'src/components/DemoMarkdown/DemoMarkdown'

const state = new DemoState()

const initialValue = `# Getting Started
:::form

::input{label="Client ID" required placeholder="YOUR_CLIENT_ID" type="password"}

::input{label="Consumer Key" required placeholder="YOUR_CONSUMER_KEY" type="password"}

::button

:::
`

const MarkdownSandboxPage = () => {
  const [markdown, setMarkdown] = useState(initialValue)
  return (
    <>
      <Container pt="xl" size="lg">
        <Textarea
          value={markdown}
          onChange={(event) => setMarkdown(event.target.value)}
          label="Markdown"
          mb="xl"
          minRows={10}
        />
        <Paper withBorder shadow="xs" p="md">
          <DemoMarkdown markdown={markdown} state={state} />
        </Paper>
      </Container>
    </>
  )
}

export default MarkdownSandboxPage
