import { observer } from "mobx-react";
import { CellState } from "./DemoForm";
import { Code, Collapse, Tabs, useMantineColorScheme } from "@mantine/core";
import { useEffect, useState } from "react";
const ReactJson = dynamic(() => import("react-json-view"), {
  ssr: false,
});
import dynamic from "next/dynamic";

export const DemoOutput = observer(({ cell }: { cell: CellState }) => {
  const [activeTab, setActiveTab] = useState<string | null>("raw");
  useEffect(() => {
    const newTab = cell.jsonOutput !== null ? "json" : "raw";
    setActiveTab(newTab);
  }, [cell.jsonOutput]);
  const { colorScheme } = useMantineColorScheme();
  return (
    <Collapse in={cell.show}>
      <Tabs value={activeTab} onTabChange={setActiveTab}>
        <Tabs.List>
          <Tabs.Tab value="raw">Raw</Tabs.Tab>
          <Tabs.Tab disabled={cell.jsonOutput === null} value="json">
            JSON
          </Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="raw" pt="xs">
          <Code mah={500} sx={{ overflowY: "scroll" }} color="gray" block>
            {cell.processedOutput}
          </Code>
        </Tabs.Panel>

        <Tabs.Panel value="json" pt="xs">
          {cell.jsonOutput && (
            <ReactJson
              displayObjectSize
              displayDataTypes={false}
              theme={colorScheme === "dark" ? "tomorrow" : undefined}
              style={{
                fontSize: "0.85rem",
                padding: "0.75rem",
                maxHeight: "500px",
                overflowY: "scroll",
              }}
              src={cell.jsonOutput}
            />
          )}
        </Tabs.Panel>
      </Tabs>
    </Collapse>
  );
});
