import { observer } from "mobx-react";
import { useContext } from "react";
import { Components } from "react-markdown";
import { DemoStateContext } from "./DemoMarkdown";
import { Transition } from "@mantine/core";

const _DemoPre: Components["pre"] = ({
  node,
  children,
  siblingCount,
  ...props
}) => {
  const demoState = useContext(DemoStateContext);
  return (
    <Transition
      mounted={demoState?.portal.showCode ?? false}
      transition="pop"
      duration={400}
      timingFunction="ease"
    >
      {(styles) => {
        return (
          <pre style={styles} {...props}>
            {children}
          </pre>
        );
      }}
    </Transition>
  );
};

export const DemoPre = observer(_DemoPre);
