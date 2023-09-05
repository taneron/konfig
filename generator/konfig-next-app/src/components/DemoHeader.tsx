import {
  Header,
  Group,
  SegmentedControl,
  ActionIcon,
  Box,
  useMantineTheme,
  rem,
} from '@mantine/core'
import { IconRefresh } from '@tabler/icons-react'
import { TITLE_OFFSET_PX } from './DemoTitle'
import { Dispatch, SetStateAction } from 'react'
import { PortalState } from './DemoPortal'
import { observer } from 'mobx-react'
import { LayoutHeader } from './LayoutHeader'
import { HeaderTabs, TABS } from './HeaderTabs'

export const DemoHeader = observer(
  ({
    opened,
    setOpened,
    state,
    refreshSandbox,
    sandbox,
    demos,
  }: {
    opened: boolean
    setOpened: Dispatch<SetStateAction<boolean>>
    state: PortalState
    refreshSandbox?: () => void
    sandbox?: boolean
    demos: string[]
  }) => {
    const theme = useMantineTheme()
    return (
      <Header
        style={{
          color: 'white',
          background:
            theme.colorScheme === 'dark'
              ? theme.colors.brand[9]
              : theme.colors.brand[7],
        }}
        height={TITLE_OFFSET_PX}
      >
        <LayoutHeader
          breakpoint="sm"
          opened={opened}
          setOpened={setOpened}
          title={state.portalTitle ? state.portalTitle : state.portalName}
        />
        <Box
          px="md"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            height: '45%',
          }}
        >
          <HeaderTabs
            demos={demos}
            currentTab={TABS.demos}
            isSandbox={sandbox}
          />
          <Group h="100%">
            <SegmentedControl
              size="xs"
              color="brand"
              value={state.showCode ? 'show-code' : 'hide-code'}
              styles={{
                label: {
                  fontSize: `${rem(11)} !important`,
                },
              }}
              data={[
                { label: 'Show Code', value: 'show-code' },
                { label: 'Hide Code', value: 'hide-code' },
              ]}
              onChange={(value) => {
                state.setShowCode(value === 'show-code')
              }}
            />
            {/* {!sandbox && (
              <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
                <Button
                  component="a"
                  target="_blank"
                  size="xs"
                  leftIcon={<IconBrandGithub size="1rem" />}
                  href={`https://github.com/${state.organizationId}/${state.portalId}/tree/${state.mainBranch}/demos`}
                  color="gray"
                  variant="default"
                >
                  Source
                </Button>
              </MediaQuery>
            )} */}
            {refreshSandbox && (
              <ActionIcon
                onClick={refreshSandbox}
                color="green"
                variant="filled"
              >
                <IconRefresh size="1rem" />
              </ActionIcon>
            )}
          </Group>
        </Box>
      </Header>
    )
  }
)
