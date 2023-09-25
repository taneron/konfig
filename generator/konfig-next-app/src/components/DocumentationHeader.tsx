import { HeaderTabs, TABS } from './HeaderTabs'
import { LayoutHeader } from './LayoutHeader'
import { Dispatch, SetStateAction } from 'react'
import { HeaderWrapper } from './HeaderWrapper'

export function DocumentationHeader({
  opened,
  setOpened,
  demos,
  title,
  omitOwnerAndRepo,
  owner,
  repo,
  logo,
}: {
  opened: boolean
  setOpened: Dispatch<SetStateAction<boolean>>
  demos: string[]
  title: string
  omitOwnerAndRepo?: boolean
  owner: string
  repo: string
  logo: string | null
}) {
  return (
    <HeaderWrapper>
      <LayoutHeader
        breakpoint="lg"
        opened={opened}
        setOpened={setOpened}
        title={title}
        logo={logo}
      />
      <HeaderTabs
        owner={owner}
        repo={repo}
        hasDocumentation={true}
        demos={demos}
        currentTab={TABS.documentation}
        omitOwnerAndRepo={omitOwnerAndRepo}
      />
    </HeaderWrapper>
  )
}
