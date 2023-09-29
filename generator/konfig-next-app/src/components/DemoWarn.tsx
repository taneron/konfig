import { observer } from 'mobx-react'
import { Components } from 'react-markdown'
import { Alert, createStyles } from '@mantine/core'
import { IconTrafficCone } from '@tabler/icons-react'

const useStyles = createStyles((theme) => ({
  alert: {
    '.mantine-Text-root': {
      margin: 0,
    },
  },
}))

const _DemoWarn: Components['div'] = ({
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
      color="yellow"
      radius="md"
      title={props.title}
      mb="xl"
      icon={<IconTrafficCone size="1rem" />}
    >
      {children}
    </Alert>
  )
}

export const DemoWarn = observer(_DemoWarn)
