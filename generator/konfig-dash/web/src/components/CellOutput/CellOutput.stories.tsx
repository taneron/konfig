// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof CellOutput> = (args) => {
//   return <CellOutput {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import CellOutput from './CellOutput'

export const generated = () => {
  return <CellOutput />
}

export default {
  title: 'Components/CellOutput',
  component: CellOutput,
} as ComponentMeta<typeof CellOutput>
