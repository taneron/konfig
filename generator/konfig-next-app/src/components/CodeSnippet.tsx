import { Collapse } from '@mantine/core'
import { Prism } from '@mantine/prism'
import { observer } from 'mobx-react'

const CodeSnippet = observer(
  ({
    open,
    language,
    onTabChange,
    python,
    typescript,
  }: {
    open: boolean
    language: string
    onTabChange: (value: string) => void
    python: string
    typescript?: string
  }) => {
    return (
      <Collapse in={open}>
        <Prism.Tabs onTabChange={onTabChange} value={language}>
          <Prism.TabsList>
            <Prism.Tab value="python">Python</Prism.Tab>
            {typescript !== undefined && (
              <Prism.Tab value="typescript">TypeScript</Prism.Tab>
            )}
          </Prism.TabsList>
          <Prism.Panel value="python" language="python">
            {python}
          </Prism.Panel>
          {typescript !== undefined && (
            <Prism.Panel value="typescript" language="typescript">
              {typescript}
            </Prism.Panel>
          )}
        </Prism.Tabs>
      </Collapse>
    )
  }
)

export default CodeSnippet
