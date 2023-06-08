import {
  Affix,
  HoverCard,
  ThemeIcon,
  AppShell,
  Text,
  Navbar,
  Stack,
  NavLink,
  MediaQuery,
  Aside,
  Header,
  Group,
  Burger,
  Title,
  SegmentedControl,
  ActionIcon,
  useMantineColorScheme,
  useMantineTheme,
} from '@mantine/core'
import {
  IconBug,
  IconChevronRight,
  IconSun,
  IconMoonStars,
} from '@tabler/icons-react'
import { observer } from 'mobx-react'
import { useState } from 'react'
import DemoMarkdown, { DemoState } from './DemoMarkdown'
import { makeAutoObservable } from 'mobx'

type DemosInput = { name: string; markdown: string }[]

type Demos = { name: string; state: DemoState }[]

export class PortalState {
  demos: Demos
  showCode = false
  portalName: string
  currentDemoIndex = 0

  constructor({
    demos,
    portalName,
  }: {
    demos: DemosInput
    portalName: string
  }) {
    makeAutoObservable(this)
    this.demos = demos.map(({ name, markdown }) => ({
      name,
      state: new DemoState({ markdown }),
    }))
    this.portalName = portalName
  }

  setShowCode(value: boolean) {
    this.showCode = value
  }

  get currentDemo() {
    return this.demos[this.currentDemoIndex]
  }
}

export const DemoPortal = observer(({ state }: { state: PortalState }) => {
  const theme = useMantineTheme()
  const { colorScheme, toggleColorScheme } = useMantineColorScheme()
  const [opened, setOpened] = useState(false)
  return (
    <>
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
                state.demos.map((demo) => ({
                  name: demo.name,
                  sessionId: demo.state.sessionId,
                })),
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
                {state.demos.map(({ name }, i) => {
                  const isCurrentlySelected = state.currentDemoIndex === i
                  return (
                    <NavLink
                      key={name}
                      onClick={() => {
                        setOpened(false)
                      }}
                      p="xs"
                      variant="filled"
                      sx={(theme) => ({ borderRadius: theme.radius.sm })}
                      rightSection={
                        isCurrentlySelected ? (
                          <IconChevronRight size="0.8rem" stroke={1.5} />
                        ) : undefined
                      }
                      label={name}
                      active={isCurrentlySelected}
                    />
                  )
                })}
              </Stack>
            </Navbar.Section>
          </Navbar>
        }
        aside={
          <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
            <Aside p="md" hiddenBreakpoint="sm" width={{ sm: 200, lg: 300 }}>
              <Stack spacing={2}>
                {state.currentDemo.state.titles.map((title, i) => {
                  const cell = state.currentDemo.state.cells[i]
                  if (cell === undefined)
                    return <NavLink key={title} label={title} variant="light" />
                  return (
                    <NavLink
                      key={title}
                      active={cell.runState !== 'N/A'}
                      color={
                        cell.ranSuccessfully
                          ? 'blue'
                          : cell.failed
                          ? 'red'
                          : undefined
                      }
                      variant="light"
                      label={title}
                      onClick={() => {
                        const element = document.getElementById(title)
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
                <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
                  <Title order={5}>{state.portalName}</Title>
                </MediaQuery>
              </Group>
              <Group>
                <SegmentedControl
                  size="xs"
                  color="blue"
                  value={state.showCode ? 'show-code' : 'hide-code'}
                  data={[
                    { label: 'Show Code', value: 'show-code' },
                    { label: 'Hide Code', value: 'hide-code' },
                  ]}
                  onChange={(value) => {
                    state.setShowCode(value === 'show-code')
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
        <DemoMarkdown
          state={state.currentDemo.state}
          showCode={state.showCode}
        />
      </AppShell>
    </>
  )
})
