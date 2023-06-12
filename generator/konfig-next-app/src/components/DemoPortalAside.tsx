import { MediaQuery, Aside, Stack, NavLink } from "@mantine/core";
import { observer } from "mobx-react";
import { DemoState } from "./DemoMarkdown";
import { generateHeaderTitle } from "./DemoTitle";

const _DemoPortalAside = ({ currentDemo }: { currentDemo: DemoState }) => {
  return (
    <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
      <Aside p="md" hiddenBreakpoint="sm" width={{ sm: 200, lg: 300 }}>
        <Stack spacing={2}>
          {currentDemo.titles.map((title, i) => {
            const cell = currentDemo.cells[i];
            if (cell === undefined)
              return <NavLink key={title} label={title} variant="light" />;
            return (
              <NavLink
                key={title}
                active={cell.runState !== "N/A"}
                color={
                  cell.ranSuccessfully
                    ? "blue"
                    : cell.failed
                    ? "red"
                    : undefined
                }
                variant="light"
                label={title}
                onClick={() => {
                  const id = generateHeaderTitle({
                    demoId: currentDemo.id,
                    title,
                  });
                  const element = document.getElementById(id);
                  element?.scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                  });
                }}
              />
            );
          })}
        </Stack>
      </Aside>
    </MediaQuery>
  );
};

export const DemoPortalAside = observer(_DemoPortalAside);
