import { Select } from "@mantine/core";
import { Components } from "react-markdown";
import { observer } from "mobx-react";
import { useContext } from "react";
import { FormContext } from "./DemoForm";
import { DemoStateContext } from "./DemoMarkdown";

const _DemoEnum: Components["select"] = ({
  node,
  children,
  size,
  siblingCount,
  ...props
}) => {
  const useFormContext = useContext(FormContext);
  const form = useFormContext?.();
  const demoState = useContext(DemoStateContext);
  const name = node.properties?.name;
  const inputProps =
    form !== undefined && typeof name === "string"
      ? form.getInputProps(name)
      : undefined;
  const { data, searchable, savedData, ...extractedProps } = props as any;

  const optional = node.properties?.optional !== undefined;

  const unknownData: unknown = data;

  const parsedData =
    typeof unknownData === "string" ? unknownData.split(",") : [];

  const savedDataValues =
    typeof savedData === "string" && demoState !== null
      ? demoState.savedData[savedData]
      : [];

  return (
    <Select
      withAsterisk={!optional ? true : undefined}
      clearable
      searchable={searchable !== undefined}
      data={
        parsedData.length > 0
          ? parsedData
          : savedDataValues !== undefined
          ? savedDataValues
          : []
      }
      {...extractedProps}
      {...inputProps}
    />
  );
};

export const DemoEnum = observer(_DemoEnum);
