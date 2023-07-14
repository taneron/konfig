import {
  Paper,
  Stack,
  SegmentedControl,
  Button,
  Group,
  Text,
  rem,
} from "@mantine/core";
import { Prism } from "@mantine/prism";
import { IconExternalLink } from "@tabler/icons-react";
import { useState } from "react";

const npm = `npm install -g konfig-cli`;
const yarn = `yarn global add konfig-cli`;

export function InstallCli() {
  const [packageManager, setPackageManager] = useState("yarn");
  return (
    <Paper withBorder shadow="sm" radius="md" p="xl">
      <Stack>
        <SegmentedControl
          size="xs"
          value={packageManager}
          data={[
            { label: "yarn", value: "yarn" },
            { label: "npm", value: "npm" },
          ]}
          onChange={(value) => {
            setPackageManager(value);
          }}
        />
        <Prism
          onClick={(e) => e.preventDefault()}
          colorScheme="dark"
          language="bash"
        >
          {packageManager === "yarn" ? yarn : npm}
        </Prism>
        <Button
          component="a"
          href="https://konfigthis.com/docs"
          leftIcon={<IconExternalLink size="0.9rem" />}
          color="dark"
        >
          Documentation
        </Button>
      </Stack>
    </Paper>
  );
}
