import { makeAutoObservable, observable } from "mobx";
import ReactMarkdown from "react-markdown";
import remarkDirective from "remark-directive";
import remarkDirectiveRehype from "remark-directive-rehype";
import { Anchor, Stack, Text } from "@mantine/core";
import { createContext } from "react";
import { api } from "@/utils/api";
import { observer } from "mobx-react";
import { CellState, DemoForm, FormContext } from "./DemoForm";
import { DemoButton } from "./DemoButton";
import { DemoCode } from "./DemoCode";
import { getCellTitlesFromMarkdown } from "@/utils/get-cell-titles-from-markdown";
import { DemoInput } from "./DemoInput";
import { PortalState } from "./DemoPortal";
import { DemoInfo } from "./DemoInfo";
import { DemoDateInput } from "./DemoDateInput";
import { DemoNumberInput } from "./DemoNumberInput";
import { DemoTitle } from "./DemoTitle";
import { DemoEnum } from "./DemoEnum";
import { v4 as uuid } from "uuid";

export class DemoState {
  id: string;
  name: string;
  sessionId: string | null = null;
  cells: CellState[] = [];
  markdown: string = "";
  uuid = uuid();
  portal: PortalState;
  savedData: Record<string, string[] | undefined> = {};

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

  setSavedData({ label, values }: { label: string; values: string[] }) {
    this.savedData[label] = values;
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
    return getCellTitlesFromMarkdown({ markdown: this.markdown });
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
            h1: DemoTitle,
            h2: DemoTitle,
            h3: DemoTitle,
            h4: DemoTitle,
            h5: DemoTitle,
            h6: DemoTitle,
            // Make TypeScript happy by moving this into its own object
            ...{
              info: DemoInfo,
              date: DemoDateInput,
              number: DemoNumberInput,
              enum: DemoEnum,
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
