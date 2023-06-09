import { api } from "@/utils/api";
import { LocalVariables, LocalVariablesType } from "@/utils/schemas";
import { Stack } from "@mantine/core";
import { createFormContext } from "@mantine/form";
import { observer } from "mobx-react";
import { useState, useContext, createContext, useEffect } from "react";
import { Components } from "react-markdown";
import { DemoState, DemoStateContext } from "./DemoMarkdown";
import { makeAutoObservable } from "mobx";
import { Position } from "unist-util-position/lib";
import { v4 as uuid } from "uuid";
import dayjs from "dayjs";

export const FormContext = createContext<
  ReturnType<typeof createFormContext>[1] | null
>(null);

export const CellContext = createContext<CellState | null>(null);

type RunState = "Success" | "Error" | "N/A";
export class CellState {
  show = false;
  running = false;
  runState: RunState = "N/A";
  output: string = "";
  demoState: DemoState | null;
  id = uuid();

  constructor({ demoState }: { demoState: DemoState | null }) {
    makeAutoObservable(this);
    this.demoState = demoState;
  }

  get ranSuccessfully() {
    return this.runState === "Success";
  }

  get failed() {
    return this.runState === "Error";
  }

  setRunning(value: boolean) {
    this.running = value;
  }

  setShow(value: boolean) {
    this.show = value;
  }

  setOutput(value: string) {
    this.output = value;
  }

  setRunState(value: RunState) {
    this.runState = value;
  }

  async run({
    position,
    environmentVariables,
    localVariables,
  }: {
    position: Position;
    environmentVariables?: unknown;
    localVariables: unknown;
  }) {
    if (!this.demoState?.sessionId) return;
    this.setRunning(true);
    this.setShow(false);

    const response = await api.executeCode.query({
      organizationId: this.demoState.portal.organizationId,
      portalId: this.demoState.portal.id,
      demoId: this.demoState.id,
      sessionId: this.demoState?.sessionId,
      codePosition: position,
      localVariables: LocalVariables.parse(localVariables),
    });

    this.setRunning(false);

    if (response.result === "Could not find demo") {
      this.setRunState("Error");
      return;
    }

    if (response.result === "Could not find code") {
      this.setRunState("Error");
      return;
    }
    this.setOutput(response.output);
    this.setRunning(false);
    this.setShow(true);
    this.setRunState(response.error === "" ? "Success" : "Error");
  }
}

const _Form: Components["form"] = ({
  node,
  children,
  siblingCount,
  ...props
}) => {
  const [[FormProvider, useFormContext, useForm]] = useState(
    createFormContext()
  );

  // collect all optional inputs
  const optionals = node.children.reduce((optionals, child) => {
    if (child.type === "element") {
      const name = child.properties?.["name"];
      const optional = child.properties?.["optional"];
      if (
        typeof name === "string" &&
        optional !== undefined &&
        optional !== null
      ) {
        optionals.push(name);
      }
    }
    return optionals;
  }, [] as string[]);

  // collect all precision attributes formats from number inputs
  const precisions = node.children.reduce((precisions, child) => {
    if (child.type === "element" && child.tagName === "number") {
      const name = child.properties?.["name"];
      const precision = child.properties?.["precision"];
      if (typeof name === "string" && typeof precision === "string") {
        precisions[name] = parseInt(precision);
      }
    }
    return precisions;
  }, {} as { [key: string]: number });

  // collect any value formats from date inputs
  const valueFormats = node.children.reduce((valueFormats, child) => {
    if (child.type === "element" && child.tagName === "date") {
      const name = child.properties?.["name"];
      const valueFormat = child.properties?.["valueFormat"];
      if (typeof name === "string" && typeof valueFormat === "string") {
        valueFormats[name] = valueFormat;
      }
    }
    return valueFormats;
  }, {} as { [key: string]: string });

  // Initialize values
  const initialValues = node.children.reduce((initialValues, child) => {
    if (child.type === "element") {
      if (child.tagName === "input") {
        const name = child.properties?.["name"];
        const type = child.properties?.["type"];
        const defaultValue = child.properties?.["defaultValue"];
        if (typeof name === "string") {
          initialValues[name] =
            type === "checkbox"
              ? defaultValue === "true"
              : defaultValue !== undefined && typeof defaultValue === "string"
              ? defaultValue
              : "";
        }
      } else if (child.tagName === "number") {
        const name = child.properties?.["name"];
        const defaultValue = child.properties?.["defaultValue"];
        if (typeof name === "string") {
          initialValues[name] =
            typeof defaultValue === "string" ? parseFloat(defaultValue) : "";
        }
      }
    }
    return initialValues;
  }, {} as { [key: string]: string | boolean | number });

  // Ensure all non-optional inputs are non-empty
  const validate = node.children.reduce((validate, child) => {
    if (child.type === "element" && child.tagName === "input") {
      const name = child.properties?.["name"];
      const label = child.properties?.["label"];
      const optional = child.properties?.["optional"];
      if (typeof name === "string" && optional === undefined) {
        validate[name] = (value) =>
          value === "" ? `${label} is required` : null;
      }
    }
    return validate;
  }, {} as { [key: string]: (value: string) => string | null });

  // Find the first section of code that is a Python snippet
  const firstPreNode = node.children.find((child) => {
    return child.type === "element" && child.tagName === "pre";
  });

  const form = useForm({ initialValues, validate });

  useEffect(() => {
    node.children.forEach((child) => {
      if (child.type === "element") {
        if (child.tagName === "input") {
          const name = child.properties?.["name"];
          if (typeof name === "string") {
            const stored = localStorage.getItem(name);
            if (stored !== null && stored !== "null") {
              if (stored === "true") form.setFieldValue(name, true);
              else if (stored === "false") form.setFieldValue(name, false);
              else form.setFieldValue(name, stored);
            }
          }
        } else if (child.tagName === "date") {
          const name = child.properties?.["name"];
          if (typeof name === "string") {
            const stored = localStorage.getItem(name);
            if (
              stored !== null &&
              stored !== "null" &&
              !isNaN(new Date(stored).getTime())
            ) {
              form.setFieldValue(name, new Date(stored));
            }
          }
        }
      }
      return initialValues;
    });
  }, [form, initialValues, node.children]);

  const demoState = useContext(DemoStateContext);

  // Turns out if you want to do something once for a component this is the
  // pattern you should follow to actually ensure that child components can
  // react to state updates
  const [cell] = useState(new CellState({ demoState }));
  useEffect(() => {
    if (demoState === null) return;
    if (demoState.cells.includes(cell)) return;
    demoState.pushCell({ cell });
  }, [cell, demoState]);

  return (
    <FormContext.Provider value={useFormContext}>
      <CellContext.Provider value={cell}>
        <FormProvider form={form}>
          <form
            onSubmit={form.onSubmit(async (values) => {
              if (demoState === null) {
                return;
              }
              if (demoState === null) {
                return;
              }
              if (firstPreNode === undefined) {
                return;
              }
              if (firstPreNode.position === undefined) {
                return;
              }

              // copy existing values object to new object
              const newValues: LocalVariablesType = {};
              for (const [key, value] of Object.entries(values as object)) {
                newValues[key] = value;
              }

              // convert precision floats to BoxedFloats based on "precision" attribute
              for (const [key, value] of Object.entries(values as object)) {
                if (!(typeof value === "number")) continue;
                if (!(key in precisions)) continue;
                newValues[key] = {
                  type: "float",
                  data: value.toFixed(precisions[key]),
                  precision: precisions[key],
                };
              }

              // convert Dates to strings based on "valueFormat" attribute
              for (const [key, value] of Object.entries(values as object)) {
                if (!(value instanceof Date)) continue;
                if (!(key in valueFormats)) {
                  newValues[key] = value.toISOString();
                  continue;
                }
                newValues[key] = dayjs(value).format(valueFormats[key]);
              }

              // remove null values
              for (const [key, value] of Object.entries(values as object)) {
                if (value === null) {
                  delete newValues[key];
                }
              }

              // remove optional empty string values
              for (const [key, value] of Object.entries(values as object)) {
                if (value === "" && optionals.includes(key)) {
                  delete newValues[key];
                }
              }

              await cell?.run({
                position: firstPreNode.position,
                localVariables: newValues,
              });

              if (cell?.ranSuccessfully) {
                for (const [key, value] of Object.entries(values as object)) {
                  localStorage.setItem(key, value);
                }
              }
            })}
            {...props}
          >
            <Stack spacing="xs">{children}</Stack>
          </form>
        </FormProvider>
      </CellContext.Provider>
    </FormContext.Provider>
  );
};

export const DemoForm = observer(_Form);
