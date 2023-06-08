import { MediaQuery, Aside, Stack, NavLink } from '@mantine/core'
import { observer } from 'mobx-react'
import { PortalState } from './DemoPortal'

const _DemoPortalAside = ({ state }: { state: PortalState }) => {
  return (
    <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
      <Aside p="md" hiddenBreakpoint="sm" width={{ sm: 200, lg: 300 }}>
        <Stack spacing={2}>
          {state.currentDemo.titles.map((title, i) => {
            const cell = state.currentDemo.cells[i]
            if (cell === undefined)
              return <NavLink key={title} label={title} variant="light" />
            return (
              <NavLink
                key={title}
                active={cell.runState !== 'N/A'}
                color={
                  cell.ranSuccessfully
                    ? 'blue'
                    : cell.failed
                    ? 'red'
                    : undefined
                }
                variant="light"
                label={title}
                onClick={() => {
                  const element = document.getElementById(title)
                  element?.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center',
                  })
                }}
              />
            )
          })}
        </Stack>
      </Aside>
    </MediaQuery>
  )
}

export const DemoPortalAside = observer(_DemoPortalAside)
