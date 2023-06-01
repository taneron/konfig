// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof CodeSnippet> = (args) => {
//   return <CodeSnippet {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import CodeSnippet from './CodeSnippet'

export const generated = () => {
  return <CodeSnippet />
}

export default {
  title: 'Components/CodeSnippet',
  component: CodeSnippet,
} as ComponentMeta<typeof CodeSnippet>
