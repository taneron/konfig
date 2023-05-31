// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof AnsiEscapeSequence> = (args) => {
//   return <AnsiEscapeSequence {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import AnsiEscapeSequence from './AnsiEscapeSequence'

export const generated = () => {
  return <AnsiEscapeSequence />
}

export default {
  title: 'Components/AnsiEscapeSequence',
  component: AnsiEscapeSequence,
} as ComponentMeta<typeof AnsiEscapeSequence>
