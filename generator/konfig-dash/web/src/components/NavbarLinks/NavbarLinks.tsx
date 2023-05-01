import React from 'react'
import {
  IconChartBar,
  IconChevronRight,
  IconFileCode,
  IconFileSettings,
  IconUpload,
} from '@tabler/icons'
import { ThemeIcon, Stack, NavLink } from '@mantine/core'
import { navigate, useLocation } from '@redwoodjs/router'

interface NavbarLinkProps {
  icon: React.ReactNode
  color: string
  label: string
  isActive: (pathname: string) => boolean
  to: string
  closeNavbar: () => void
}

function NavbarLink({
  icon,
  color,
  label,
  isActive,
  to,
  closeNavbar,
}: NavbarLinkProps) {
  const { pathname } = useLocation()
  return (
    <NavLink
      onClick={() => {
        navigate(to)
        closeNavbar()
      }}
      variant="filled"
      p="xs"
      sx={(theme) => ({ borderRadius: theme.radius.sm })}
      rightSection={
        isActive(pathname) ? (
          <IconChevronRight size={12} stroke={1.5} />
        ) : undefined
      }
      icon={<ThemeIcon color={color}>{icon}</ThemeIcon>}
      label={label}
      active={isActive(pathname)}
    />
  )
}

const data: Omit<NavbarLinkProps, 'closeNavbar'>[] = [
  {
    icon: <IconChartBar size={16} />,
    color: 'teal',
    label: 'Dashboard',
    isActive: (pathname) => pathname === '/',
    to: '/',
  },
  {
    icon: <IconFileSettings size={16} />,
    color: 'lime',
    label: 'Configs',
    isActive: () => false,
    to: '',
  },
  {
    icon: <IconFileCode size={16} />,
    color: 'blue',
    label: 'SDKs',
    isActive: () => false,
    to: '',
  },
  {
    icon: <IconUpload size={16} />,
    color: 'green',
    label: 'Publish',
    isActive: (pathname) => pathname.includes('publish'),
    to: '/publish',
  },
]

function NavbarLinks({ closeNavbar }: { closeNavbar: () => void }) {
  const links = data.map((link) => (
    <NavbarLink {...link} key={link.label} closeNavbar={closeNavbar} />
  ))
  return <Stack spacing="xs">{links}</Stack>
}

export default NavbarLinks
