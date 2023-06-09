import {
  AppShell,
  Navbar,
  Header,
  Text,
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
  Affix,
  ThemeIcon,
  HoverCard,
} from '@mantine/core'
import { MetaTags } from '@redwoodjs/web'
import {
  IconBug,
  IconChevronRight,
  IconMoonStars,
  IconRocket,
  IconSun,
} from '@tabler/icons'
import axios from 'axios'
import { KonfigYamlGeneratorNames } from 'konfig-lib'
import { snapTradeGettingStarted } from 'konfig-lib/dist/snaptrade-demo'
import { makeAutoObservable } from 'mobx'
import { observer } from 'mobx-react'
import { useState } from 'react'
import SnapTradeDemo, {
  demoRunState,
} from 'src/components/SnapTradeDemo/SnapTradeDemo'

type ShowCodeState = 'show-code' | 'hide-code'
class DemoState {
  showCode: ShowCodeState = 'hide-code'
  language: KonfigYamlGeneratorNames = 'python'
  sessionId: string | null = null

  constructor() {
    makeAutoObservable(this)

    this.startSession()
  }

  setShowCode(state: ShowCodeState) {
    this.showCode = state
  }

  setLanguage(language: KonfigYamlGeneratorNames) {
    this.language = language
  }

  async startSession() {
    const { data } = await axios.get('/.redwood/functions/startSession')
    this.sessionId = data.session_id
  }

  get sessionStarted() {
    return this.sessionId !== null
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

      <Affix position={{ bottom: '0.5rem', right: '1rem' }}>
        <HoverCard width={280} shadow="md">
          <HoverCard.Target>
            <ThemeIcon size="xs" color="gray">
              <IconBug />
            </ThemeIcon>
          </HoverCard.Target>
          <HoverCard.Dropdown>
            <Text size="sm">
              {JSON.stringify(
                {
                  sessionId: demoState.sessionId,
                  sessionStarted: demoState.sessionStarted,
                },
                undefined,
                2
              )}
            </Text>
          </HoverCard.Dropdown>
        </HoverCard>
      </Affix>
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
                  label="Registering Users"
                />
                <NavLink
                  onClick={() => {
                    setOpened(false)
                  }}
                  p="xs"
                  variant="filled"
                  sx={(theme) => ({ borderRadius: theme.radius.sm })}
                  label="Handling User Data"
                />
                <NavLink
                  onClick={() => {
                    setOpened(false)
                  }}
                  p="xs"
                  variant="filled"
                  sx={(theme) => ({ borderRadius: theme.radius.sm })}
                  label="Placing Trades"
                />
              </Stack>
            </Navbar.Section>
          </Navbar>
        }
        aside={
          <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
            <Aside p="md" hiddenBreakpoint="sm" width={{ sm: 200, lg: 300 }}>
              <Stack spacing={2}>
                {snapTradeGettingStarted.map(({ title }, i) => {
                  return (
                    <NavLink
                      key={title}
                      active={demoRunState.cells[i].state !== 'N/A'}
                      color={
                        demoRunState.cells[i].ranSuccessfully
                          ? 'blue'
                          : demoRunState.cells[i].failed
                          ? 'red'
                          : undefined
                      }
                      variant="light"
                      label={title}
                      onClick={() => {
                        const element = document.getElementById(title)
                        demoRunState.cells[i].focus()
                        element?.scrollIntoView({
                          behavior: 'smooth',
                          block: 'center',
                        })
                      }}
                    />
                  )
                })}
              </Stack>
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
                <Title order={5}>SnapTrade Demo</Title>
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
