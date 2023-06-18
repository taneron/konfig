import { observer } from "mobx-react";
import { CellState } from "./DemoForm";
import { Code, Collapse, Tabs, useMantineColorScheme } from "@mantine/core";
import { useEffect, useState } from "react";
const ReactJson = dynamic(() => import("react-json-view"), {
  ssr: false,
});
import dynamic from "next/dynamic";
import { DemoTable } from "./DemoTable";

export const DemoOutput = observer(({ cell }: { cell: CellState }) => {
  const [activeTab, setActiveTab] = useState<string | null>("raw");
  const [haveClickedTab, setHaveClickedTab] = useState<boolean>(false);
  useEffect(() => {
    if (haveClickedTab) return;
    const newTab =
      cell.tableOutput !== null
        ? "table"
        : cell.jsonOutput !== null
        ? "json"
        : "raw";
    setActiveTab(newTab);
  }, [cell.jsonOutput, cell.tableOutput, haveClickedTab]);
  const { colorScheme } = useMantineColorScheme();
  return (
    <Collapse in={cell.show}>
      <Tabs
        value={activeTab}
        onTabChange={(tab) => {
          setHaveClickedTab(true);
          setActiveTab(tab);
        }}
      >
        <Tabs.List>
          <Tabs.Tab value="raw">Raw</Tabs.Tab>
          <Tabs.Tab disabled={cell.jsonOutput === null} value="json">
            JSON
          </Tabs.Tab>
          <Tabs.Tab disabled={cell.tableOutput === null} value="table">
            Table
          </Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="raw">
          <Code mah={500} sx={{ overflowY: "scroll" }} color="gray" block>
            {cell.processedOutput}
          </Code>
        </Tabs.Panel>

        <Tabs.Panel value="json">
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
        <Tabs.Panel pt="xs" value="table">
          {cell.tableOutput && (
            <DemoTable
              data={cell.tableOutput.data}
              columns={cell.tableOutput.columns}
            />
          )}
        </Tabs.Panel>
      </Tabs>
    </Collapse>
  );
});
