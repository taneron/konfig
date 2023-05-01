import type { GenerateConfig } from '@prisma/client'

import {
  generateConfigs,
  generateConfig,
  createGenerateConfig,
  updateGenerateConfig,
  deleteGenerateConfig,
} from './generateConfigs'
import type { StandardScenario } from './generateConfigs.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('generateConfigs', () => {
  scenario(
    'returns all generateConfigs',
    async (scenario: StandardScenario) => {
      const result = await generateConfigs()

      expect(result.length).toEqual(Object.keys(scenario.generateConfig).length)
    }
  )

  scenario(
    'returns a single generateConfig',
    async (scenario: StandardScenario) => {
      const result = await generateConfig({
        id: scenario.generateConfig.one.id,
      })

      expect(result).toEqual(scenario.generateConfig.one)
    }
  )

  scenario('creates a generateConfig', async (scenario: StandardScenario) => {
    const result = await createGenerateConfig({
      input: {
        updated: '2022-11-21T05:32:02.389Z',
        konfigyaml: 'String',
        spaceId: scenario.generateConfig.two.spaceId,
        userId: scenario.generateConfig.two.userId,
      },
    })

    expect(result.updated).toEqual(new Date('2022-11-21T05:32:02.389Z'))
    expect(result.konfigyaml).toEqual('String')
    expect(result.spaceId).toEqual(scenario.generateConfig.two.spaceId)
    expect(result.userId).toEqual(scenario.generateConfig.two.userId)
  })

  scenario('updates a generateConfig', async (scenario: StandardScenario) => {
    const original = (await generateConfig({
      id: scenario.generateConfig.one.id,
    })) as GenerateConfig
    const result = await updateGenerateConfig({
      id: original.id,
      input: { updated: '2022-11-22T05:32:02.390Z' },
    })

    expect(result.updated).toEqual(new Date('2022-11-22T05:32:02.390Z'))
  })

  scenario('deletes a generateConfig', async (scenario: StandardScenario) => {
    const original = (await deleteGenerateConfig({
      id: scenario.generateConfig.one.id,
    })) as GenerateConfig
    const result = await generateConfig({ id: original.id })

    expect(result).toEqual(null)
  })
})
