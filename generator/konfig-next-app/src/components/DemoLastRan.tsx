import { Group, Text, rem } from "@mantine/core";
import { useContext } from "react";
import { SandboxContext } from "./DemoPortal";
import { observer } from "mobx-react";
import { DemoState } from "./DemoMarkdown";

export const DemoLastRan = observer(({ demo }: { demo: DemoState }) => {
  const sandbox = useContext(SandboxContext);
  if (sandbox) return null;
  return (
    <Group mx={rem(5)} position="right">
      {demo.howLongAgoLastSuccessfulExecution && (
        <Text mt={rem(5)} pos="absolute" color="gray" size={rem(12)}>
          Ran {demo.howLongAgoLastSuccessfulExecution}
        </Text>
      )}
    </Group>
  );
});
