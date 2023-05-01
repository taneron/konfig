// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof NavbarUser> = (args) => {
//   return <NavbarUser {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import NavbarUser from './NavbarUser'

export const generated = () => {
  return <NavbarUser />
}

export default {
  title: 'Components/NavbarUser',
  component: NavbarUser,
} as ComponentMeta<typeof NavbarUser>
