import type { Prisma, Organization } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.OrganizationCreateArgs>({
  organization: {
    one: { data: { name: 'String', updated: '2022-11-07T03:33:48.806Z' } },
    two: { data: { name: 'String', updated: '2022-11-07T03:33:48.806Z' } },
  },
})

export type StandardScenario = ScenarioData<Organization, 'organization'>
