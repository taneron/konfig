import type { ComponentMeta } from '@storybook/react'

import PublishPage from './PublishPage'

export const generated = () => {
  return <PublishPage />
}

export default {
  title: 'Pages/PublishPage',
  component: PublishPage,
} as ComponentMeta<typeof PublishPage>
