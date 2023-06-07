import { DemoPortal, PortalState } from '@/components/DemoPortal'
import { observer } from 'mobx-react'
import { snapTradeGettingStartedMarkdown } from '@/utils/snaptrade-demo'

const state = new PortalState({
  portalName: 'SnapTrade Demo',
  demos: [
    {
      name: 'Getting Started',
      markdown: snapTradeGettingStartedMarkdown,
    },
  ],
})

const Snaptrade = observer(() => {
  return <DemoPortal state={state} />
})

export default Snaptrade
