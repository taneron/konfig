import type { GenerateExecution } from '@prisma/client'

import {
  generateExecutions,
  generateExecution,
  createGenerateExecution,
  updateGenerateExecution,
  deleteGenerateExecution,
} from './generateExecutions'
import type { StandardScenario } from './generateExecutions.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('generateExecutions', () => {
  scenario(
    'returns all generateExecutions',
    async (scenario: StandardScenario) => {
      const result = await generateExecutions()

      expect(result.length).toEqual(
        Object.keys(scenario.generateExecution).length
      )
    }
  )

  scenario(
    'returns a single generateExecution',
    async (scenario: StandardScenario) => {
      const result = await generateExecution({
        id: scenario.generateExecution.one.id,
      })

      expect(result).toEqual(scenario.generateExecution.one)
    }
  )

  scenario(
    'creates a generateExecution',
    async (scenario: StandardScenario) => {
      const result = await createGenerateExecution({
        input: {
          updated: '2022-11-07T03:34:03.975Z',
          s3Key: 'String',
          spaceId: scenario.generateExecution.two.spaceId,
          userId: scenario.generateExecution.two.userId,
        },
      })

      expect(result.updated).toEqual(new Date('2022-11-07T03:34:03.975Z'))
      expect(result.s3Key).toEqual('String')
      expect(result.spaceId).toEqual(scenario.generateExecution.two.spaceId)
      expect(result.userId).toEqual(scenario.generateExecution.two.userId)
    }
  )

  scenario(
    'updates a generateExecution',
    async (scenario: StandardScenario) => {
      const original = (await generateExecution({
        id: scenario.generateExecution.one.id,
      })) as GenerateExecution
      const result = await updateGenerateExecution({
        id: original.id,
        input: { updated: '2022-11-08T03:34:03.975Z' },
      })

      expect(result.updated).toEqual(new Date('2022-11-08T03:34:03.975Z'))
    }
  )

  scenario(
    'deletes a generateExecution',
    async (scenario: StandardScenario) => {
      const original = (await deleteGenerateExecution({
        id: scenario.generateExecution.one.id,
      })) as GenerateExecution
      const result = await generateExecution({ id: original.id })

      expect(result).toEqual(null)
    }
  )
})
