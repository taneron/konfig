import { Text, useMantineTheme } from '@mantine/core'
import { PropsWithChildren } from 'react'

export function BreadcrumbHighlighted({ children }: PropsWithChildren<{}>) {
  const theme = useMantineTheme()
  const lastBreadcrumbColor =
    theme.colorScheme === 'dark' ? theme.colors.brand[6] : theme.colors.brand[8]
  return (
    <Text fw={'bold'} color={lastBreadcrumbColor}>
      {children}
    </Text>
  )
}
