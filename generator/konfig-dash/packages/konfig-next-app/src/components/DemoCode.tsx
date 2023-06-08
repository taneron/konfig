import { Box, Code, Collapse, Transition } from '@mantine/core'
import { Prism } from '@mantine/prism'
import { observer } from 'mobx-react'
import { useContext, useEffect, useState } from 'react'
import { Components } from 'react-markdown'
import { DemoStateContext } from './DemoMarkdown'

const langDisplayName = {
  python: 'Python',
  typescript: 'TypeScript',
} as const

const _DemoCode: Components['code'] = ({
  node,
  inline,
  className,
  children,
  siblingCount,
  ...props
}) => {
  if (inline) return <Code>{children}</Code>
  const match = /language-(\w+)/.exec(className || '')
  if (match === null || inline)
    return (
      <code {...props} className={className}>
        {children}
      </code>
    )
  const language = match[1]
  if (language !== 'python' && language !== 'typescript')
    return (
      <code {...props} className={className}>
        {children}
      </code>
    )
  const demoState = useContext(DemoStateContext)

  return (
    <Transition
      mounted={demoState?.portal.showCode ?? false}
      transition="pop"
      duration={400}
      timingFunction="ease"
    >
      {(styles) => {
        return (
          <div style={styles}>
            <Prism.Tabs value={language}>
              <Prism.TabsList>
                <Prism.Tab value={language}>
                  {langDisplayName[language]}
                </Prism.Tab>
              </Prism.TabsList>
              <Prism.Panel value={language} language={language}>
                {String(children).replace(/\n$/, '')}
              </Prism.Panel>
            </Prism.Tabs>
          </div>
        )
      }}
    </Transition>
  )
}

export const DemoCode = observer(_DemoCode)
