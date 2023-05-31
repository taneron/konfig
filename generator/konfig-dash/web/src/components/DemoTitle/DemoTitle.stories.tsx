// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof DemoTitle> = (args) => {
//   return <DemoTitle {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import DemoTitle from './DemoTitle'

export const generated = () => {
  return <DemoTitle />
}

export default {
  title: 'Components/DemoTitle',
  component: DemoTitle,
} as ComponentMeta<typeof DemoTitle>
