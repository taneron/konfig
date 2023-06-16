import { NumberInput } from "@mantine/core";
import { Components } from "react-markdown";
import { observer } from "mobx-react";
import { useContext } from "react";
import { FormContext } from "./DemoForm";

const _DemoNumberInput: Components["input"] = ({
  node,
  children,
  size,
  type,
  siblingCount,
  defaultValue,
  max,
  min,
  step,
  ...props
}) => {
  const useFormContext = useContext(FormContext);
  const form = useFormContext?.();
  const name = node.properties?.name;
  const inputProps =
    form !== undefined && typeof name === "string"
      ? form.getInputProps(name)
      : undefined;
  const { precision, ...extractedProps } = props as any;
  const optional = node.properties?.optional !== undefined;

  return (
    <NumberInput
      withAsterisk={!optional ? true : undefined}
      defaultValue={defaultValue}
      step={step ? parseFloat(step.toString()) : undefined}
      precision={precision ? parseFloat(precision.toString()) : undefined}
      {...extractedProps}
      {...inputProps}
    />
  );
};

export const DemoNumberInput = observer(_DemoNumberInput);
