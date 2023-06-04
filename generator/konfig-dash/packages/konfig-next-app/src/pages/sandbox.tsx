import DemoMarkdown, { DemoState } from '@/components/DemoMarkdown'
import { snapTradeGettingStartedMarkdown } from '@/utils/snaptrade-demo'
import { Container, Textarea, Paper, SegmentedControl } from '@mantine/core'
import { observer } from 'mobx-react'
import { useState } from 'react'

const state = new DemoState()

const MarkdownSandboxPage = observer(() => {
  const [markdown, setMarkdown] = useState(snapTradeGettingStartedMarkdown)
  return (
    <>
      <Container pt="xl" size="lg">
        <SegmentedControl
          size="xs"
          color="blue"
          value={state.showCode ? 'show-code' : 'hide-code'}
          data={[
            { label: 'Show Code', value: 'show-code' },
            { label: 'Hide Code', value: 'hide-code' },
          ]}
          onChange={(value) => {
            state.setShowCode(value === 'show-code' ? true : false)
          }}
        />
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
