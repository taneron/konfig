import { Button } from '@mantine/core'
import { IconAlertCircle, IconCheck } from '@tabler/icons'
import { CellState, RunCellParams } from '../SnapTradeDemo/SnapTradeDemo'
import { observer } from 'mobx-react'

const DemoRunButton = observer(
  ({ cell, runParams }: { cell: CellState; runParams?: RunCellParams }) => {
    return (
      <Button
        onClick={() => cell.run(runParams)}
        loading={cell.running}
        color={cell.ranSuccessfully ? 'blue' : cell.failed ? 'red' : 'cyan'}
        leftIcon={
          cell.ranSuccessfully ? (
            <IconCheck size="1rem" />
          ) : cell.failed ? (
            <IconAlertCircle size="1rem" />
          ) : undefined
        }
        compact
        disabled={cell.disabled}
        variant="light"
      >
        Run
      </Button>
    )
  }
)

export default DemoRunButton
