import { Indicator, Title, TitleOrder } from "@mantine/core";
import { observer } from "mobx-react";
import { useContext } from "react";
import { Components } from "react-markdown/lib/ast-to-react";
import { DemoState, DemoStateContext } from "./DemoMarkdown";
import { toText } from "hast-util-to-text";

const _DemoTitle: Components["h1"] = ({
  children,
  node,
  siblingCount,
  level,
}) => {
  const demoState = useContext(DemoStateContext);
  return (
    <Title
      id={generateHeaderTitle({
        demoId: demoState?.id,
        title: toText(node),
      })}
      order={level as TitleOrder}
    >
      {children}
    </Title>
  );
};

export function generateHeaderTitle({
  demoId,
  title,
}: {
  demoId?: string;
  title: string;
}) {
  return `${demoId}:${title}`;
}

export const DemoTitle = observer(_DemoTitle);
