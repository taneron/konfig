import { Header, useMantineTheme } from '@mantine/core'
import { PropsWithChildren } from 'react'
import { TITLE_OFFSET_PX } from './DemoTitle'

export function HeaderWrapper({ children }: PropsWithChildren<{}>) {
  const theme = useMantineTheme()
  return (
    <Header
      style={{
        color: theme.white,
        background:
          theme.colorScheme === 'dark'
            ? `${theme.colors.brand[9]}e6`
            : `${theme.colors.brand[7]}e6`,
        backdropFilter: 'blur(4px)',
        WebkitBackdropFilter: 'blur(4px)',
      }}
      height={TITLE_OFFSET_PX}
    >
      {children}
    </Header>
  )
}
