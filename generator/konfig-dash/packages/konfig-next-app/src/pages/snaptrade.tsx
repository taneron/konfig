import { DemoPortal, PortalState } from '@/components/DemoPortal'
import { observer } from 'mobx-react'
import {
  snapTradeGettingStartedMarkdown,
  snapTradeRegisteringUsersMarkdown,
} from '@/utils/demos'
import Head from 'next/head'

const state = new PortalState({
  portalName: 'SnapTrade Demos',
  demos: [
    {
      name: 'Getting Started',
      markdown: snapTradeGettingStartedMarkdown,
    },
    {
      name: 'Registering Users',
      markdown: snapTradeRegisteringUsersMarkdown,
    },
  ],
})

const Snaptrade = observer(() => {
  return (
    <>
      <Head>
        <title>SnapTrade | Konfig</title>
      </Head>
      <DemoPortal state={state} />
    </>
  )
})

export default Snaptrade
