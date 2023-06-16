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
  Header,
  Group,
  Burger,
  Title,
  SegmentedControl,
  ActionIcon,
  useMantineColorScheme,
  useMantineTheme,
  Box,
  Button,
} from "@mantine/core";
import {
  IconBug,
  IconChevronRight,
  IconSun,
  IconMoonStars,
  IconRefresh,
  IconBrandGithub,
} from "@tabler/icons-react";
import { observer } from "mobx-react";
import { useState, createContext } from "react";
import DemoMarkdown, { DemoState } from "./DemoMarkdown";
import { makeAutoObservable } from "mobx";
import { useRouter } from "next/router";
import { DemoPortalAside } from "./DemoPortalAside";
import { api } from "@/utils/api";
import { v4 as uuid } from "uuid";
import { Demo } from "@/utils/demos";

type DemosInput = Demo[];

type Demos = DemoState[];

export class PortalState {
  demos: Demos;
  showCode = false;
  id: string;
  uuid = uuid();
  portalName: string;
  currentDemoIndex: number;
  organizationId: string;
  portalId: string;
  currentDemo: DemoState;

  constructor({
    demos,
    portalName,
    id,
    organizationId,
    portalId,
    demoId,
  }: {
    demos: DemosInput;
    portalName: string;
    id: string;
    organizationId: string;
    portalId: string;
    demoId: string;
  }) {
    makeAutoObservable(this);
    this.id = id;
    this.portalId = portalId;
    this.organizationId = organizationId;
    this.demos = demos.map(
      ({ name, markdown, id, showCode }) =>
        new DemoState({ markdown, name, portal: this, id, showCode })
    );

    this.currentDemoIndex = this.demos.findIndex((demo) => demo.id === demoId);
    if (this.currentDemoIndex === -1)
      throw Error(`Could not find demo with id ${demoId}`);
    this.currentDemo = this.demos[this.currentDemoIndex];
    this.portalName = portalName;

    // Only start intervals in browser
    if (typeof window !== "undefined") {
      setInterval(async () => {
        const sessionIds = this.demos
          .map((demo) => demo.sessionId as string)
          .filter((sessionId) => sessionId !== null);
        if (sessionIds.length === 0) return;
        await api.pingSessions.query({ sessionIds });
      }, 30000);
    }
  }

  setShowCode(value: boolean) {
    this.showCode = value;
  }

  setCurrentDemoIndex(index: number) {
    this.currentDemoIndex = index;
    this.currentDemo = this.demos[this.currentDemoIndex];
  }
}

export const SandboxContext = createContext<boolean>(false);

export const DemoPortal = observer(
  ({
    state,
    sandbox,
    refreshSandbox,
  }: {
    state: PortalState;
    sandbox?: boolean;
    refreshSandbox?: () => void;
  }) => {
    const theme = useMantineTheme();
    const { colorScheme, toggleColorScheme } = useMantineColorScheme();
    const [opened, setOpened] = useState(false);
    const router = useRouter();

    return (
      <SandboxContext.Provider value={!!sandbox}>
        <Affix position={{ bottom: "0.5rem", right: "1rem" }}>
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
                    sessionId: demo.sessionId,
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
                colorScheme === "dark" ? theme.colors.dark[8] : undefined,
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
                    const isCurrentlySelected = state.currentDemoIndex === i;
                    return (
                      <NavLink
                        key={name}
                        onClick={() => {
                          setOpened(false);
                          state.setCurrentDemoIndex(i);
                          if (!sandbox) {
                            router.replace(
                              `/${state.organizationId}/${state.id}/${state.demos[i].id}`,
                              undefined,
                              { shallow: true }
                            );
                          } else {
                            // NOTE: this triggers a re-render so when we
                            // navigate through demos the page actually changes
                            router.replace("/sandbox", undefined, {
                              shallow: true,
                            });
                          }
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
                    );
                  })}
                </Stack>
              </Navbar.Section>
            </Navbar>
          }
          aside={<DemoPortalAside currentDemo={state.currentDemo} />}
          header={
            <Header height={{ base: 50, md: 70 }} p="md">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  height: "100%",
                }}
              >
                <Group spacing={0}>
                  <MediaQuery largerThan="sm" styles={{ display: "none" }}>
                    <Burger
                      opened={opened}
                      onClick={() => setOpened((o) => !o)}
                      size="sm"
                      color={theme.colors.gray[6]}
                      mr="md"
                    />
                  </MediaQuery>
                  <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
                    <Title order={5}>{state.portalName}</Title>
                  </MediaQuery>
                </Group>
                <Group>
                  <SegmentedControl
                    size="xs"
                    color="blue"
                    value={state.showCode ? "show-code" : "hide-code"}
                    data={[
                      { label: "Show Code", value: "show-code" },
                      { label: "Hide Code", value: "hide-code" },
                    ]}
                    onChange={(value) => {
                      state.setShowCode(value === "show-code");
                    }}
                  />
                  <ActionIcon
                    variant="default"
                    onClick={() => toggleColorScheme()}
                    size={30}
                  >
                    {colorScheme === "dark" ? (
                      <IconSun size="1rem" />
                    ) : (
                      <IconMoonStars size="1rem" />
                    )}
                  </ActionIcon>
                  {!sandbox && (
                    <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
                      <Button
                        component="a"
                        target="_blank"
                        size="xs"
                        leftIcon={<IconBrandGithub size="1rem" />}
                        href={`https://github.com/${state.organizationId}/${state.portalId}/tree/HEAD/demos`}
                        color="gray"
                        variant="default"
                      >
                        Source
                      </Button>
                    </MediaQuery>
                  )}
                  {refreshSandbox && (
                    <ActionIcon
                      onClick={refreshSandbox}
                      color="green"
                      variant="light"
                    >
                      <IconRefresh size="1rem" />
                    </ActionIcon>
                  )}
                </Group>
              </div>
            </Header>
          }
        >
          {/* We have to render all demos states at the start so they can each initialize their cells */}
          {state.demos.map((demo, i) => {
            return (
              <Box
                key={demo.name}
                display={state.currentDemoIndex !== i ? "none" : undefined}
              >
                <DemoMarkdown state={demo} />
              </Box>
            );
          })}
        </AppShell>
      </SandboxContext.Provider>
    );
  }
);
