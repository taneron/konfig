import type { Prisma, Membership } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.MembershipCreateArgs>({
  membership: {
    one: {
      data: {
        role: 'Owner',
        updated: '2022-11-07T03:33:44.210Z',
        organization: {
          create: { name: 'String', updated: '2022-11-07T03:33:44.210Z' },
        },
      },
    },
    two: {
      data: {
        role: 'Owner',
        updated: '2022-11-07T03:33:44.210Z',
        organization: {
          create: { name: 'String', updated: '2022-11-07T03:33:44.210Z' },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<Membership, 'membership'>
