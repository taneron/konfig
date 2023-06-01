import { Container, Paper } from '@mantine/core'
import { observer } from 'mobx-react'
import { PropsWithChildren } from 'react'

const DemoWrapper = observer(({ children }: PropsWithChildren<{}>) => {
  return (
    <Container size="xl">
      <Paper shadow="md" p="md" withBorder>
        {children}
      </Paper>
    </Container>
  )
})

export default DemoWrapper
