import { inactiveColor } from '@/utils/inactive-color'
import {
  MantineTheme,
  NavLink,
  NavLinkProps,
  useMantineTheme,
} from '@mantine/core'
import Link, { LinkProps } from 'next/link'
import { RefObject } from 'react'

export function NavbarLink(
  props: NavLinkProps & LinkProps & { ref?: RefObject<HTMLAnchorElement> }
) {
  const theme = useMantineTheme()
  return (
    <NavLink<typeof Link>
      {...props}
      component={Link}
      styles={{
        label: {
          color: navbarLinkColor({ theme, active: props.active }),
        },
      }}
    />
  )
}

export function navbarLinkColor({
  theme,
  active,
}: {
  theme: MantineTheme
  active?: boolean
}) {
  return active
    ? theme.colorScheme === 'dark'
      ? theme.colors.brand[4]
      : theme.colors.brand[8]
    : inactiveColor(theme)
}
