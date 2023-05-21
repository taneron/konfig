import {
  AppShell,
  Navbar,
  Header,
  Text,
  Burger,
  Group,
  MediaQuery,
  NavLink,
  ThemeIcon,
  useMantineTheme,
  ActionIcon,
  useMantineColorScheme,
  Box,
  Title,
} from '@mantine/core'
import { MetaTags } from '@redwoodjs/web'
import {
  IconChevronRight,
  IconLogout,
  IconMoonStars,
  IconRocket,
  IconSun,
} from '@tabler/icons'
import { useState } from 'react'
import SnapTradeDemo from 'src/components/SnapTradeDemo/SnapTradeDemo'

const SnaptradePage = () => {
  const theme = useMantineTheme()
  const colorScheme = 'dark'
  const [opened, setOpened] = useState(false)
  return (
    <>
      <MetaTags title="Snaptrade" description="Snaptrade page" />
      <AppShell
        styles={{
          main: {
            background:
              colorScheme === 'dark'
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
            <Navbar.Section mt="xs">
              <NavLink
                onClick={() => {
                  setOpened(false)
                }}
                p="xs"
                variant="filled"
                sx={(theme) => ({ borderRadius: theme.radius.sm })}
                rightSection={<IconChevronRight size="0.8rem" stroke={1.5} />}
                icon={<IconRocket />}
                label="Getting Started"
                active
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
                    mr="md"
                  />
                </MediaQuery>
                <Title order={3}>SnapTrade Demo</Title>
              </Group>
            </div>
          </Header>
        }
      >
        <SnapTradeDemo />
      </AppShell>
    </>
  )
}

export default SnaptradePage
