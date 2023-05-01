import type { Prisma, GenerateConfig } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.GenerateConfigCreateArgs>({
  generateConfig: {
    one: {
      data: {
        updated: '2022-11-21T05:32:02.399Z',
        konfigyaml: 'String',
        space: {
          create: {
            name: 'String',
            updated: '2022-11-21T05:32:02.399Z',
            organization: {
              create: { name: 'String', updated: '2022-11-21T05:32:02.399Z' },
            },
          },
        },
        user: {
          create: {
            updated: '2022-11-21T05:32:02.399Z',
            email: 'String1210377',
            hashedPassword: 'String',
            salt: 'String',
            currentSpace: {
              create: {
                name: 'String',
                updated: '2022-11-21T05:32:02.399Z',
                organization: {
                  create: {
                    name: 'String',
                    updated: '2022-11-21T05:32:02.399Z',
                  },
                },
              },
            },
            currentOrganization: {
              create: { name: 'String', updated: '2022-11-21T05:32:02.399Z' },
            },
          },
        },
      },
    },
    two: {
      data: {
        updated: '2022-11-21T05:32:02.399Z',
        konfigyaml: 'String',
        space: {
          create: {
            name: 'String',
            updated: '2022-11-21T05:32:02.399Z',
            organization: {
              create: { name: 'String', updated: '2022-11-21T05:32:02.399Z' },
            },
          },
        },
        user: {
          create: {
            updated: '2022-11-21T05:32:02.399Z',
            email: 'String6101781',
            hashedPassword: 'String',
            salt: 'String',
            currentSpace: {
              create: {
                name: 'String',
                updated: '2022-11-21T05:32:02.399Z',
                organization: {
                  create: {
                    name: 'String',
                    updated: '2022-11-21T05:32:02.399Z',
                  },
                },
              },
            },
            currentOrganization: {
              create: { name: 'String', updated: '2022-11-21T05:32:02.399Z' },
            },
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<GenerateConfig, 'generateConfig'>
