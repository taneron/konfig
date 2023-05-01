import type { Space } from '@prisma/client'

import { spaces, space, createSpace, updateSpace, deleteSpace } from './spaces'
import type { StandardScenario } from './spaces.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('spaces', () => {
  scenario('returns all spaces', async (scenario: StandardScenario) => {
    const result = await spaces()

    expect(result.length).toEqual(Object.keys(scenario.space).length)
  })

  scenario('returns a single space', async (scenario: StandardScenario) => {
    const result = await space({ id: scenario.space.one.id })

    expect(result).toEqual(scenario.space.one)
  })

  scenario('creates a space', async (scenario: StandardScenario) => {
    const result = await createSpace({
      input: {
        name: 'String',
        updated: '2022-11-07T03:33:53.074Z',
        organizationId: scenario.space.two.organizationId,
      },
    })

    expect(result.name).toEqual('String')
    expect(result.updated).toEqual(new Date('2022-11-07T03:33:53.074Z'))
    expect(result.organizationId).toEqual(scenario.space.two.organizationId)
  })

  scenario('updates a space', async (scenario: StandardScenario) => {
    const original = (await space({ id: scenario.space.one.id })) as Space
    const result = await updateSpace({
      id: original.id,
      input: { name: 'String2' },
    })

    expect(result.name).toEqual('String2')
  })

  scenario('deletes a space', async (scenario: StandardScenario) => {
    const original = (await deleteSpace({ id: scenario.space.one.id })) as Space
    const result = await space({ id: original.id })

    expect(result).toEqual(null)
  })
})
