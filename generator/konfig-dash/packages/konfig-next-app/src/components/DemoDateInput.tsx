import { observer } from 'mobx-react'
import { DatePickerInput } from '@mantine/dates'
import { useContext } from 'react'
import { FormContext } from './DemoForm'

const _DemoDateInput = ({
  node,
  className,
  children,
  siblingCount,
  ...props
}: any) => {
  const useFormContext = useContext(FormContext)
  const form = useFormContext?.()
  const name = node.properties?.name
  const inputProps =
    form !== undefined && typeof name === 'string'
      ? form.getInputProps(name)
      : undefined
  return <DatePickerInput clearable {...props} {...inputProps} />
}

export const DemoDateInput = observer(_DemoDateInput)
