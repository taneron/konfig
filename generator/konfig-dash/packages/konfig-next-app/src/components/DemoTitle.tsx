import { Indicator, Title } from '@mantine/core'

const DemoTitle = ({
  title,
  focused,
}: {
  title: string
  focused?: boolean
}) => {
  return (
    <Indicator
      disabled={!focused}
      position="top-start"
      color="green"
      processing
      size={12}
    >
      <Title id={title} order={3}>
        {title}
      </Title>
    </Indicator>
  )
}

export default DemoTitle
