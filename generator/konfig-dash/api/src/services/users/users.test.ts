import type { User } from '@prisma/client'

import { users, user, createUser, updateUser, deleteUser } from './users'
import type { StandardScenario } from './users.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('users', () => {
  scenario('returns all users', async (scenario: StandardScenario) => {
    const result = await users()

    expect(result.length).toEqual(Object.keys(scenario.user).length)
  })

  scenario('returns a single user', async (scenario: StandardScenario) => {
    const result = await user({ id: scenario.user.one.id })

    expect(result).toEqual(scenario.user.one)
  })

  scenario('creates a user', async (scenario: StandardScenario) => {
    const result = await createUser({
      input: {
        updated: '2022-11-07T03:33:35.318Z',
        email: 'String9931722',
        hashedPassword: 'String',
        salt: 'String',
        currentSpaceId: scenario.user.two.currentSpaceId,
        currentOrganizationId: scenario.user.two.currentOrganizationId,
      },
    })

    expect(result.updated).toEqual(new Date('2022-11-07T03:33:35.318Z'))
    expect(result.email).toEqual('String9931722')
    expect(result.hashedPassword).toEqual('String')
    expect(result.salt).toEqual('String')
    expect(result.currentSpaceId).toEqual(scenario.user.two.currentSpaceId)
    expect(result.currentOrganizationId).toEqual(
      scenario.user.two.currentOrganizationId
    )
  })

  scenario('updates a user', async (scenario: StandardScenario) => {
    const original = (await user({ id: scenario.user.one.id })) as User
    const result = await updateUser({
      id: original.id,
      input: { updated: '2022-11-08T03:33:35.318Z' },
    })

    expect(result.updated).toEqual(new Date('2022-11-08T03:33:35.318Z'))
  })

  scenario('deletes a user', async (scenario: StandardScenario) => {
    const original = (await deleteUser({ id: scenario.user.one.id })) as User
    const result = await user({ id: original.id })

    expect(result).toEqual(null)
  })
})
