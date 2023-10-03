import { MantineTheme } from '@mantine/core'

export function linkColor({ theme }: { theme: MantineTheme }) {
  return theme.colorScheme === 'dark'
    ? theme.colors.gray[2]
    : theme.colors.dark[5]
}
