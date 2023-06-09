import { makeAutoObservable } from "mobx";
import ReactMarkdown from "react-markdown";
import remarkDirective from "remark-directive";
import remarkDirectiveRehype from "remark-directive-rehype";
import { Anchor, Stack, Title, Text } from "@mantine/core";
import { toText } from "hast-util-to-text";
import { createContext } from "react";
import { api } from "@/utils/api";
import { observer } from "mobx-react";
import { CellState, DemoForm, FormContext } from "./DemoForm";
import { DemoButton } from "./DemoButton";
import { DemoCode } from "./DemoCode";
import { getTitlesFromMarkdown } from "@/utils/get-titles-from-markdown";
import { DemoInput } from "./DemoInput";
import { PortalState } from "./DemoPortal";
import { DemoInfo } from "./DemoInfo";
import { DemoDateInput } from "./DemoDateInput";
import { DemoNumberInput } from "./DemoNumberInput";

export class DemoState {
  id: string;
  name: string;
  sessionId: string | null = null;
  cells: CellState[] = [];
  markdown: string = "";
  portal: PortalState;
  constructor(parameters: {
    markdown: string;
    name: string;
    portal: PortalState;
    id: string;
  }) {
    makeAutoObservable(this);
    if (parameters && parameters.markdown !== undefined) {
      this.markdown = parameters.markdown;
    }
    this.id = parameters.id;
    this.name = parameters.name;
    this.portal = parameters.portal;
    this.init();
  }

  pushCell({ cell }: { cell: CellState }) {
    this.cells.push(cell);
    return cell;
  }

  async init() {
    // Only initialize sessions in browser
    if (typeof window !== "undefined") {
      const { session_id } = await api.startSession.query();
      this.setSessionId(session_id);
    }
  }

  setSessionId(sessionId: string) {
    this.sessionId = sessionId;
  }

  setMarkdown(markdown: string) {
    this.markdown = markdown;
  }

  get titles() {
    return getTitlesFromMarkdown({ markdown: this.markdown });
  }
}

export const DemoStateContext = createContext<DemoState | null>(null);

const DemoMarkdown = observer(({ state }: { state: DemoState }) => {
  return (
    <DemoStateContext.Provider value={state}>
      <Stack spacing="xs">
        <ReactMarkdown
          remarkPlugins={[remarkDirective, remarkDirectiveRehype]}
          components={{
            a({ children, node, siblingCount, ...props }) {
              return <Anchor {...props}>{children}</Anchor>;
            },
            p({ node, children, siblingCount, ...props }) {
              return <Text {...props}>{children}</Text>;
            },
            form: DemoForm,
            input: DemoInput,
            button: DemoButton,
            code: DemoCode,
            h1(props) {
              return (
                <Title id={toText(props.node)} order={1}>
                  {props.children}
                </Title>
              );
            },
            h2(props) {
              return (
                <Title id={toText(props.node)} order={2}>
                  {props.children}
                </Title>
              );
            },
            h3(props) {
              return (
                <Title id={toText(props.node)} order={3}>
                  {props.children}
                </Title>
              );
            },
            h4(props) {
              return (
                <Title id={toText(props.node)} order={4}>
                  {props.children}
                </Title>
              );
            },
            h5(props) {
              return (
                <Title id={toText(props.node)} order={5}>
                  {props.children}
                </Title>
              );
            },
            h6(props) {
              return (
                <Title id={toText(props.node)} order={6}>
                  {props.children}
                </Title>
              );
            },
            // Make TypeScript happy by moving this into its own object
            ...{
              info: DemoInfo,
              date: DemoDateInput,
              number: DemoNumberInput,
            },
          }}
        >
          {state.markdown}
        </ReactMarkdown>
      </Stack>
    </DemoStateContext.Provider>
  );
});

export default DemoMarkdown;
