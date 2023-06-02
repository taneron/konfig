// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof DemoMarkdown> = (args) => {
//   return <DemoMarkdown {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import DemoMarkdown from './DemoMarkdown'

export const generated = () => {
  return <DemoMarkdown />
}

export default {
  title: 'Components/DemoMarkdown',
  component: DemoMarkdown,
} as ComponentMeta<typeof DemoMarkdown>
