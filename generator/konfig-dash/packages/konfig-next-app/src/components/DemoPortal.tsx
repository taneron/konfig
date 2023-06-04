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

type Demos = { name: string; markdown: string }[]
class PortalState {
  demos: Demos
  showCode = false

  constructor({ demos }: { demos: Demos }) {
    this.demos = demos
  }

  setShowCode(value: boolean) {
    this.showCode = value
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
            <Text size="sm">{JSON.stringify(state, undefined, 2)}</Text>
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
              <Stack spacing={2}>TODO LINK WITH HEADERS</Stack>
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
        TODO PASS IN DEMOMARKDOWN OF CURRENTLY SELECTED DEMO
      </AppShell>
    </>
  )
})
