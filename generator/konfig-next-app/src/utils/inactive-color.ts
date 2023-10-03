import { MantineTheme } from '@mantine/core'

export function inactiveColor(theme: MantineTheme) {
  return theme.colorScheme === 'dark'
    ? theme.colors.dark[2]
    : theme.colors.gray[6]
}
