import { PropsWithChildren } from 'react'
import { Flex, FlexProps } from '@mantine/core'

export function FlexCenter({
  children,
  ...props
}: PropsWithChildren<FlexProps & React.RefAttributes<HTMLDivElement>>) {
  return (
    <Flex {...props} justify="center">
      {children}
    </Flex>
  )
}
