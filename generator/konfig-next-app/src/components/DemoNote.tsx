import { observer } from 'mobx-react'
import { Components } from 'react-markdown'
import { Alert, createStyles } from '@mantine/core'
import { IconNote } from '@tabler/icons-react'

const useStyles = createStyles((theme) => ({
  alert: {
    '.mantine-Text-root': {
      margin: 0,
    },
  },
}))

const _DemoNote: Components['div'] = ({
  node,
  className,
  children,
  siblingCount,
  ...props
}) => {
  const { classes } = useStyles()
  return (
    <Alert
      className={classes.alert}
      title={props.title}
      icon={<IconNote size="1rem" />}
      radius="md"
      mb="xl"
      color="gray"
    >
      {children}
    </Alert>
  )
}

export const DemoNote = observer(_DemoNote)
