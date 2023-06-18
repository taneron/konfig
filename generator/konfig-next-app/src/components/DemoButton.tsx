import { observer } from "mobx-react";
import { Components } from "react-markdown";
import { Button as MantineButton } from "@mantine/core";
import { useContext } from "react";
import { CellContext } from "./DemoForm";
import { IconCheck, IconAlertCircle } from "@tabler/icons-react";
import { DemoOutput } from "./DemoOutput";

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
      <DemoOutput cell={cell} />
      <MantineButton
        loading={cell.running}
        color={cell.ranSuccessfully ? "blue" : cell.failed ? "red" : "cyan"}
        disabled={cell.canRunCell === "no"}
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
