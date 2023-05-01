import { Paper } from '@mantine/core'
import { MetaTags } from '@redwoodjs/web'
import PublishConfiguration from 'src/components/PublishConfiguration/PublishConfiguration'
import PublishConfigurationCell from 'src/components/PublishConfigurationCell'

interface Props {
  configId?: string
}

const PublishPage = ({ configId }: Props) => {
  return (
    <>
      <MetaTags title="Publish" description="Configure" />
      <Paper p="xl" shadow="sm">
        {configId ? <PublishConfigurationCell configId={configId} /> : 'TODO'}
      </Paper>
    </>
  )
}

export default PublishPage
