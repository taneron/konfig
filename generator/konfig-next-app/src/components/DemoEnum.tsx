import { Select } from "@mantine/core";
import { Components } from "react-markdown";
import { observer } from "mobx-react";
import { useContext } from "react";
import { FormContext } from "./DemoForm";

const _DemoEnum: Components["select"] = ({
  node,
  children,
  size,
  siblingCount,
  ...props
}) => {
  const useFormContext = useContext(FormContext);
  const form = useFormContext?.();
  const name = node.properties?.name;
  const inputProps =
    form !== undefined && typeof name === "string"
      ? form.getInputProps(name)
      : undefined;
  const { data, ...extractedProps } = props as any;

  const unknownData: unknown = data;

  const parsedData =
    typeof unknownData === "string" ? unknownData.split(",") : [];

  return (
    <Select clearable data={parsedData} {...extractedProps} {...inputProps} />
  );
};

export const DemoEnum = observer(_DemoEnum);
