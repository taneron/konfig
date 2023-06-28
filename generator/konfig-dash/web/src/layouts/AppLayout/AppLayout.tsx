import {
  AppShell,
  Burger,
  Header,
  MediaQuery,
  Navbar,
  Image,
  Title,
  useMantineTheme,
  NavLink,
  ThemeIcon,
  Anchor,
  Group,
} from '@mantine/core'
import { useAuth } from '@redwoodjs/auth'
import { MetaTags } from '@redwoodjs/web'
import { Toaster } from '@redwoodjs/web/toast'
import { IconLogout } from '@tabler/icons'
import { useState } from 'react'
import NavbarLinks from 'src/components/NavbarLinks/NavbarLinks'
import NavbarUser from 'src/components/NavbarUser/NavbarUser'

interface Props {
  children?: React.ReactNode
}
const AppLayout = ({ children }: Props) => {
  const theme = useMantineTheme()
  const [opened, setOpened] = useState(false)
  const { logOut } = useAuth()
  return (
    <>
      <MetaTags title="Publish" description="Configure" />
      <Toaster />
      <AppShell
        styles={{
          main: {
            background:
              theme.colorScheme === 'dark'
                ? theme.colors.dark[8]
                : theme.colors.gray[0],
          },
        }}
        navbarOffsetBreakpoint="sm"
        asideOffsetBreakpoint="sm"
        navbar={
          <Navbar
            p="md"
            hiddenBreakpoint="sm"
            hidden={!opened}
            width={{ sm: 225, lg: 325 }}
          >
            <Navbar.Section>
              <NavbarUser />
            </Navbar.Section>
            <Navbar.Section grow mt="xs">
              <NavbarLinks closeNavbar={() => setOpened(false)} />
            </Navbar.Section>
            <Navbar.Section>
              <NavLink
                onClick={() => {
                  logOut()
                }}
                variant="filled"
                p="xs"
                sx={(theme) => ({ borderRadius: theme.radius.sm })}
                icon={
                  <ThemeIcon variant="light" color="gray">
                    <IconLogout />
                  </ThemeIcon>
                }
                label="Log out"
              />
            </Navbar.Section>
          </Navbar>
        }
        header={
          <Header height={{ base: 50, md: 70 }} p="md">
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                height: '100%',
              }}
            >
              <Group spacing={0}>
                <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
                  <Burger
                    opened={opened}
                    onClick={() => setOpened((o) => !o)}
                    size="sm"
                    color={theme.colors.gray[6]}
                    mr="xl"
                  />
                </MediaQuery>
                <Image width={40} src="/favicon.png" />
              </Group>
              <Anchor href="https://konfigthis.com/docs" target="_blank">
                Documentation
              </Anchor>
            </div>
          </Header>
        }
      >
        {children}
      </AppShell>
    </>
  )
}

export default AppLayout
