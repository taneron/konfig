// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof SnapTradeDemo> = (args) => {
//   return <SnapTradeDemo {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import SnapTradeDemo from './SnapTradeDemo'

export const generated = () => {
  return <SnapTradeDemo />
}

export default {
  title: 'Components/SnapTradeDemo',
  component: SnapTradeDemo,
} as ComponentMeta<typeof SnapTradeDemo>
