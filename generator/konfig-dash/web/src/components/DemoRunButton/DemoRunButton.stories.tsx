// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof DemoRunButton> = (args) => {
//   return <DemoRunButton {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import DemoRunButton from './DemoRunButton'

export const generated = () => {
  return <DemoRunButton />
}

export default {
  title: 'Components/DemoRunButton',
  component: DemoRunButton,
} as ComponentMeta<typeof DemoRunButton>
