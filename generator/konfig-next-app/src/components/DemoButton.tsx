import { observer } from "mobx-react";
import { Components } from "react-markdown";
import {
  Code,
  Collapse,
  Button as MantineButton,
  ScrollArea,
} from "@mantine/core";
import { useContext } from "react";
import { CellContext } from "./DemoForm";
import { IconCheck, IconAlertCircle } from "@tabler/icons-react";

const _DemoButton: Components["button"] = ({
  node,
  children,
  siblingCount,
  ...props
}) => {
  const cell = useContext(CellContext);
  if (cell === null) {
    return <MantineButton {...props}>{children}</MantineButton>;
  }
  return (
    <>
      <Collapse in={cell.show}>
        <Code mah={500} sx={{ overflowY: "scroll" }} color="gray" block>
          {cell.output}
        </Code>
      </Collapse>
      <MantineButton
        loading={cell.running}
        color={cell.ranSuccessfully ? "blue" : cell.failed ? "red" : "cyan"}
        disabled={cell.previousCellRanSuccessfully === "no"}
        leftIcon={
          cell.ranSuccessfully ? (
            <IconCheck size="1rem" />
          ) : cell.failed ? (
            <IconAlertCircle size="1rem" />
          ) : undefined
        }
        type="submit"
        compact
        variant="light"
        {...props}
      >
        {children}
      </MantineButton>
    </>
  );
};

export const DemoButton = observer(_DemoButton);
