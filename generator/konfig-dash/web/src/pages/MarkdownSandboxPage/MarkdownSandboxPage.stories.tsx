import type { ComponentMeta } from '@storybook/react'

import MarkdownSandboxPage from './MarkdownSandboxPage'

export const generated = () => {
  return <MarkdownSandboxPage />
}

export default {
  title: 'Pages/MarkdownSandboxPage',
  component: MarkdownSandboxPage,
} as ComponentMeta<typeof MarkdownSandboxPage>
