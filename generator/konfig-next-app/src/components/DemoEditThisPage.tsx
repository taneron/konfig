import { Anchor, Group, Text, rem } from "@mantine/core";
import { useContext } from "react";
import { useSubtleLinkStyles } from "./DemoSocials";
import { IconEdit } from "@tabler/icons-react";
import { PortalState, SandboxContext } from "./DemoPortal";
import { observer } from "mobx-react";

export const DemoEditThisPage = observer(
  ({ portalState }: { portalState: PortalState }) => {
    const styles = useSubtleLinkStyles();
    const sandbox = useContext(SandboxContext);
    if (sandbox) return null;
    return (
      <Group mx={rem(5)} position="apart">
        <Anchor
          target="_blank"
          className={styles.classes.subtleLink}
          unstyled
          href={`https://github.com/${portalState.organizationId}/${portalState.portalId}/tree/${portalState.mainBranch}/demos/${portalState.currentDemo.id}.md`}
        >
          <Group spacing={rem(5)}>
            <IconEdit size={rem(14)} />
            <Text>Edit this page</Text>
          </Group>
        </Anchor>
        {portalState.currentDemo.howLongAgoLastSuccessfulExecution && (
          <Text color="gray" size={rem(14)}>
            Last ran {portalState.currentDemo.howLongAgoLastSuccessfulExecution}
          </Text>
        )}
      </Group>
    );
  }
);
