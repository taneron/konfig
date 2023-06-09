// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof DemoWrapper> = (args) => {
//   return <DemoWrapper {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import DemoWrapper from './DemoWrapper'

export const generated = () => {
  return <DemoWrapper />
}

export default {
  title: 'Components/DemoWrapper',
  component: DemoWrapper,
} as ComponentMeta<typeof DemoWrapper>
