import type { Prisma, Space } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.SpaceCreateArgs>({
  space: {
    one: {
      data: {
        name: 'String',
        updated: '2022-11-07T03:33:53.082Z',
        organization: {
          create: { name: 'String', updated: '2022-11-07T03:33:53.082Z' },
        },
      },
    },
    two: {
      data: {
        name: 'String',
        updated: '2022-11-07T03:33:53.082Z',
        organization: {
          create: { name: 'String', updated: '2022-11-07T03:33:53.082Z' },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<Space, 'space'>
