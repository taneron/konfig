import type { Prisma, GenerateExecution } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.GenerateExecutionCreateArgs>({
  generateExecution: {
    one: {
      data: {
        updated: '2022-11-07T03:34:03.983Z',
        s3Key: 'String',
        space: {
          create: {
            name: 'String',
            updated: '2022-11-07T03:34:03.983Z',
            organization: {
              create: { name: 'String', updated: '2022-11-07T03:34:03.983Z' },
            },
          },
        },
        user: {
          create: {
            updated: '2022-11-07T03:34:03.983Z',
            email: 'String8643440',
            hashedPassword: 'String',
            salt: 'String',
            currentSpace: {
              create: {
                name: 'String',
                updated: '2022-11-07T03:34:03.983Z',
                organization: {
                  create: {
                    name: 'String',
                    updated: '2022-11-07T03:34:03.983Z',
                  },
                },
              },
            },
            currentOrganization: {
              create: { name: 'String', updated: '2022-11-07T03:34:03.983Z' },
            },
          },
        },
      },
    },
    two: {
      data: {
        updated: '2022-11-07T03:34:03.983Z',
        s3Key: 'String',
        space: {
          create: {
            name: 'String',
            updated: '2022-11-07T03:34:03.983Z',
            organization: {
              create: { name: 'String', updated: '2022-11-07T03:34:03.983Z' },
            },
          },
        },
        user: {
          create: {
            updated: '2022-11-07T03:34:03.983Z',
            email: 'String393205',
            hashedPassword: 'String',
            salt: 'String',
            currentSpace: {
              create: {
                name: 'String',
                updated: '2022-11-07T03:34:03.983Z',
                organization: {
                  create: {
                    name: 'String',
                    updated: '2022-11-07T03:34:03.983Z',
                  },
                },
              },
            },
            currentOrganization: {
              create: { name: 'String', updated: '2022-11-07T03:34:03.983Z' },
            },
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<
  GenerateExecution,
  'generateExecution'
>
