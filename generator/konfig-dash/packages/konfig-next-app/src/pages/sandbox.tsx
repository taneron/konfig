import DemoMarkdown, { DemoState } from '@/components/DemoMarkdown'
import { snapTradeGettingStartedMarkdown } from '@/utils/snaptrade-demo'
import { Container, Textarea, Paper } from '@mantine/core'
import { observer } from 'mobx-react'
import { useState } from 'react'

const state = new DemoState()

const MarkdownSandboxPage = observer(() => {
  const [markdown, setMarkdown] = useState(snapTradeGettingStartedMarkdown)
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
})

export default MarkdownSandboxPage
