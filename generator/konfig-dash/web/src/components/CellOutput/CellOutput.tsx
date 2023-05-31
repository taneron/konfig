import { Collapse } from '@mantine/core'
import AnsiEscapeSequence from '../AnsiEscapeSequence/AnsiEscapeSequence'
import { CellState } from '../SnapTradeDemo/SnapTradeDemo'

const CellOutput = ({ cell }: { cell: CellState }) => {
  return (
    <Collapse in={cell.show}>
      <AnsiEscapeSequence text={cell.output} />
    </Collapse>
  )
}

export default CellOutput
