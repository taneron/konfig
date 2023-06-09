import { Checkbox, PasswordInput, TextInput } from '@mantine/core'
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
  defaultValue,
  ...props
}) => {
  let Component = TextInput
  if (type === 'password') Component = PasswordInput
  if (type === 'checkbox') Component = Checkbox as any
  const useFormContext = useContext(FormContext)
  const form = useFormContext?.()
  const name = node.properties?.name
  const inputProps =
    form !== undefined && typeof name === 'string'
      ? form.getInputProps(name, {
          type: type === 'checkbox' ? 'checkbox' : 'input',
        })
      : undefined
  const optional = node.properties?.optional !== undefined
  return (
    <Component
      withAsterisk={!optional ? true : undefined}
      autoComplete="off"
      {...props}
      {...inputProps}
    />
  )
}

export const DemoInput = observer(_DemoInput)
