import { observer } from 'mobx-react'
import { Components } from 'react-markdown'
import { Alert } from '@mantine/core'
import { IconInfoCircleFilled } from '@tabler/icons-react'

const _DemoInfo: Components['div'] = ({
  node,
  className,
  children,
  siblingCount,
  ...props
}) => {
  return (
    <Alert title={props.title} icon={<IconInfoCircleFilled size="1rem" />}>
      {children}
    </Alert>
  )
}

export const DemoInfo = observer(_DemoInfo)
