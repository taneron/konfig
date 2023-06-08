import { PasswordInput, TextInput } from '@mantine/core'
import { useContext } from 'react'
import { Components } from 'react-markdown'
import { FormContext } from './DemoForm'
import { observer } from 'mobx-react'

const _DemoInput: Components['input'] = ({
  node,
  children,
  size,
  type,
  siblingCount,
  ...props
}) => {
  const Component = type === 'password' ? PasswordInput : TextInput
  const useFormContext = useContext(FormContext)
  const form = useFormContext?.()
  const name = node.properties?.name
  const inputProps =
    form !== undefined && typeof name === 'string'
      ? form.getInputProps(name)
      : undefined
  return <Component type={type} autoComplete="off" {...props} {...inputProps} />
}

export const DemoInput = observer(_DemoInput)
