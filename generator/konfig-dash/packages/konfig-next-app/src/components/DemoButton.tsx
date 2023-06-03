import { observer } from 'mobx-react'
import { Components } from 'react-markdown'
import { Code, Collapse, Button as MantineButton } from '@mantine/core'
import { useContext } from 'react'
import { CellContext } from './DemoForm'

const _DemoButton: Components['button'] = ({
  node,
  children,
  siblingCount,
  ...props
}) => {
  const cell = useContext(CellContext)
  if (cell === null) {
    return <MantineButton {...props}>{children}</MantineButton>
  }
  return (
    <>
      <Collapse in={cell.show}>
        <Code color="gray" block>
          {cell.output}
        </Code>
      </Collapse>
      <MantineButton
        type="submit"
        color="cyan"
        compact
        variant="light"
        {...props}
      >
        {children}
      </MantineButton>
    </>
  )
}

export const DemoButton = observer(_DemoButton)
