import DemoMarkdown, { DemoState } from '@/components/DemoMarkdown'
import { snapTradeGettingStartedMarkdown } from '@/utils/snaptrade-demo'
import { Container, Textarea, Paper, SegmentedControl } from '@mantine/core'
import { observer } from 'mobx-react'
import { useState } from 'react'

const state = new DemoState({ markdown: snapTradeGettingStartedMarkdown })

const MarkdownSandboxPage = observer(() => {
  const [showCode, setShowCode] = useState(false)
  return (
    <>
      <Container pt="xl" size="lg">
        <SegmentedControl
          size="xs"
          color="blue"
          value={showCode ? 'show-code' : 'hide-code'}
          data={[
            { label: 'Show Code', value: 'show-code' },
            { label: 'Hide Code', value: 'hide-code' },
          ]}
          onChange={(value) => {
            setShowCode(value === 'show-code' ? true : false)
          }}
        />
        <Textarea
          value={state.markdown}
          onChange={(event) => state.setMarkdown(event.target.value)}
          label="Markdown"
          mb="xl"
          minRows={10}
        />
        <Paper withBorder shadow="xs" p="md">
          <DemoMarkdown state={state} showCode={showCode} />
        </Paper>
      </Container>
    </>
  )
})

export default MarkdownSandboxPage
