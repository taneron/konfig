import type { Prisma, User } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.UserCreateArgs>({
  user: {
    one: {
      data: {
        updated: '2022-11-07T03:33:35.327Z',
        email: 'String3984307',
        hashedPassword: 'String',
        salt: 'String',
        currentSpace: {
          create: {
            name: 'String',
            updated: '2022-11-07T03:33:35.327Z',
            organization: {
              create: { name: 'String', updated: '2022-11-07T03:33:35.327Z' },
            },
          },
        },
        currentOrganization: {
          create: { name: 'String', updated: '2022-11-07T03:33:35.327Z' },
        },
      },
    },
    two: {
      data: {
        updated: '2022-11-07T03:33:35.327Z',
        email: 'String4781821',
        hashedPassword: 'String',
        salt: 'String',
        currentSpace: {
          create: {
            name: 'String',
            updated: '2022-11-07T03:33:35.327Z',
            organization: {
              create: { name: 'String', updated: '2022-11-07T03:33:35.327Z' },
            },
          },
        },
        currentOrganization: {
          create: { name: 'String', updated: '2022-11-07T03:33:35.327Z' },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<User, 'user'>
