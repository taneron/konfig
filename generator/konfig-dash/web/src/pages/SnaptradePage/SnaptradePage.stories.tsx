import type { ComponentMeta } from '@storybook/react'

import SnaptradePage from './SnaptradePage'

export const generated = () => {
  return <SnaptradePage />
}

export default {
  title: 'Pages/SnaptradePage',
  component: SnaptradePage,
} as ComponentMeta<typeof SnaptradePage>
