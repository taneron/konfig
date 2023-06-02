import { Button } from '@mantine/core'
import { IconAlertCircle, IconCheck } from '@tabler/icons-react'
import { CellState } from './SnapTradeDemo'
import { observer } from 'mobx-react'

const DemoRunButton = observer(({ cell }: { cell: CellState }) => {
  return (
    <Button
      type="submit"
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
})

export default DemoRunButton
