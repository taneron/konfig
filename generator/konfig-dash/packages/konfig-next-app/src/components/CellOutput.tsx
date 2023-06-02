import { Code, Collapse } from '@mantine/core'
import { CellState } from './SnapTradeDemo'
import { observer } from 'mobx-react'

const CellOutput = observer(({ cell }: { cell: CellState }) => {
  return (
    <Collapse in={cell.show}>
      <Code color="gray" block>
        {cell.output}
      </Code>
    </Collapse>
  )
})

export default CellOutput
