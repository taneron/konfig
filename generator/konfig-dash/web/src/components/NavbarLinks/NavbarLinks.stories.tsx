// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof NavbarLinks> = (args) => {
//   return <NavbarLinks {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import NavbarLinks from './NavbarLinks'

export const generated = () => {
  return <NavbarLinks />
}

export default {
  title: 'Components/NavbarLinks',
  component: NavbarLinks,
} as ComponentMeta<typeof NavbarLinks>
