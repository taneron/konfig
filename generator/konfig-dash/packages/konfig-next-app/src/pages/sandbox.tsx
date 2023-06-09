import DemoMarkdown from '@/components/DemoMarkdown'
import { snapTradeGettingStartedMarkdown } from '@/utils/demos'
import { Container, Textarea, Paper, SegmentedControl } from '@mantine/core'
import { observer } from 'mobx-react'
import { useState } from 'react'
import Head from 'next/head'
import { PortalState } from '@/components/DemoPortal'

const MarkdownSandboxPage = observer(() => {
  const [state] = useState(
    new PortalState({
      demos: [
        {
          id: 'getting-started',
          name: 'Sandbox',
          markdown: snapTradeGettingStartedMarkdown,
        },
      ],
      portalName: 'Sandbox',
      id: 'snaptrade-demos',
      organizationId: 'snaptrade',
      demoId: 'getting-started',
    })
  )
  return (
    <>
      <Head>
        <title>Demo Sandbox | Konfig</title>
      </Head>
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
          value={state.currentDemo.markdown}
          onChange={(event) =>
            state.currentDemo.setMarkdown(event.target.value)
          }
          label="Markdown"
          mb="xl"
          minRows={10}
        />
        <Paper withBorder shadow="xs" p="md">
          <DemoMarkdown state={state.currentDemo} />
        </Paper>
      </Container>
    </>
  )
})

export default MarkdownSandboxPage
