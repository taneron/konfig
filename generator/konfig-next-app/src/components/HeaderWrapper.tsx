import { Header, useMantineTheme } from '@mantine/core'
import { PropsWithChildren } from 'react'
import { TITLE_OFFSET_PX } from './DemoTitle'

export function HeaderWrapper({
  children,
  hasLightAndDarkLogo,
}: PropsWithChildren<{ hasLightAndDarkLogo: boolean }>) {
  const theme = useMantineTheme()
  return (
    <Header
      style={{
        background: hasLightAndDarkLogo
          ? theme.colorScheme === 'dark'
            ? theme.colors.dark[8]
            : theme.white
          : theme.colorScheme === 'dark'
          ? `${theme.colors.brand[9]}`
          : `${theme.colors.brand[7]}`,
        borderBottom: hasLightAndDarkLogo ? undefined : 'none',
      }}
      height={TITLE_OFFSET_PX}
    >
      {children}
    </Header>
  )
}
