import {
  AppShell,
  Navbar,
  Header,
  Burger,
  Group,
  MediaQuery,
  NavLink,
  useMantineTheme,
  Title,
  useMantineColorScheme,
  ActionIcon,
  SegmentedControl,
  Aside,
  Stack,
} from '@mantine/core'
import { MetaTags } from '@redwoodjs/web'
import {
  IconChevronRight,
  IconMoonStars,
  IconRocket,
  IconSun,
} from '@tabler/icons'
import { KonfigYamlGeneratorNames } from 'konfig-lib'
import { makeAutoObservable } from 'mobx'
import { observer } from 'mobx-react'
import { useState } from 'react'
import SnapTradeDemo from 'src/components/SnapTradeDemo/SnapTradeDemo'

type ShowCodeState = 'show-code' | 'hide-code'
class DemoState {
  showCode: ShowCodeState = 'hide-code'
  language: KonfigYamlGeneratorNames = 'python'

  constructor() {
    makeAutoObservable(this)
  }

  setShowCode(state: ShowCodeState) {
    this.showCode = state
  }

  setLanguage(language: KonfigYamlGeneratorNames) {
    this.language = language
  }

  get in() {
    return this.showCode === 'show-code'
  }
}

export const demoState = new DemoState()

const SnaptradePage = observer(() => {
  const theme = useMantineTheme()
  const { colorScheme, toggleColorScheme } = useMantineColorScheme()
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
              <Stack spacing="xs">
                <NavLink
                  onClick={() => {
                    setOpened(false)
                  }}
                  p="xs"
                  variant="filled"
                  sx={(theme) => ({ borderRadius: theme.radius.sm })}
                  rightSection={<IconChevronRight size="0.8rem" stroke={1.5} />}
                  label="Getting Started"
                  active
                />
                <NavLink
                  onClick={() => {
                    setOpened(false)
                  }}
                  p="xs"
                  variant="filled"
                  sx={(theme) => ({ borderRadius: theme.radius.sm })}
                  label="Getting Started with Trades"
                />
                <NavLink
                  onClick={() => {
                    setOpened(false)
                  }}
                  p="xs"
                  variant="filled"
                  sx={(theme) => ({ borderRadius: theme.radius.sm })}
                  label="Managing Portfolios"
                />
              </Stack>
            </Navbar.Section>
          </Navbar>
        }
        aside={
          <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
            <Aside p="md" hiddenBreakpoint="sm" width={{ sm: 200, lg: 300 }}>
              <NavLink label="1) Initialize a client with your clientId and consumerKey" />
              <NavLink label="2) Check that the client is able to make a request to the API server" />
              <NavLink label="3) Create a new user on SnapTrade" />
              <NavLink label="4) Get a redirect URI" />
              <NavLink label="5) Get account holdings data" />
              <NavLink label="6) Deleting a user" />
            </Aside>
          </MediaQuery>
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
                <Title order={4}>SnapTrade Demo</Title>
              </Group>
              <Group>
                <SegmentedControl
                  size="xs"
                  color="blue"
                  value={demoState.showCode}
                  data={[
                    { label: 'Show Code', value: 'show-code' },
                    { label: 'Hide Code', value: 'hide-code' },
                  ]}
                  onChange={(value) => {
                    demoState.setShowCode(value as ShowCodeState)
                  }}
                />
                <ActionIcon
                  variant="default"
                  onClick={() => toggleColorScheme()}
                  size={30}
                >
                  {colorScheme === 'dark' ? (
                    <IconSun size="1rem" />
                  ) : (
                    <IconMoonStars size="1rem" />
                  )}
                </ActionIcon>
              </Group>
            </div>
          </Header>
        }
      >
        <SnapTradeDemo />
      </AppShell>
    </>
  )
})

export default SnaptradePage
