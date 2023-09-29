import { observer } from 'mobx-react'
import { Components } from 'react-markdown'
import { Alert, createStyles } from '@mantine/core'
import { IconInfoCircleFilled } from '@tabler/icons-react'

const useStyles = createStyles((theme) => ({
  alert: {
    '.mantine-Text-root': {
      margin: 0,
    },
  },
}))

const _DemoInfo: Components['div'] = ({
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
      color="blue"
      title={props.title}
      mb="xl"
      radius="md"
      icon={<IconInfoCircleFilled size="1rem" />}
    >
      {children}
    </Alert>
  )
}

export const DemoInfo = observer(_DemoInfo)
