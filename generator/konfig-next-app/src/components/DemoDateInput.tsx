import { observer } from "mobx-react";
import { DatePickerInput } from "@mantine/dates";
import { useContext } from "react";
import { FormContext } from "./DemoForm";
import { IconCalendar } from "@tabler/icons-react";

const _DemoDateInput = ({
  node,
  className,
  children,
  siblingCount,
  ...props
}: any) => {
  const useFormContext = useContext(FormContext);
  const form = useFormContext?.();
  const name = node.properties?.name;
  const inputProps =
    form !== undefined && typeof name === "string"
      ? form.getInputProps(name)
      : undefined;
  const optional = node.properties?.optional !== undefined;
  return (
    <DatePickerInput
      withAsterisk={!optional ? true : undefined}
      icon={<IconCalendar size="1.1rem" stroke={1.5} />}
      clearable
      {...props}
      {...inputProps}
    />
  );
};

export const DemoDateInput = observer(_DemoDateInput);
