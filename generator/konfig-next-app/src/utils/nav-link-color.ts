import { MantineTheme } from '@mantine/core'
import { inactiveColor } from './inactive-color'
import { linkColor } from './link-color'

export function navLinkColor({
  active,
  theme,
}: {
  active?: boolean
  theme: MantineTheme
}) {
  return active ? linkColor({ theme }) : inactiveColor(theme)
}
