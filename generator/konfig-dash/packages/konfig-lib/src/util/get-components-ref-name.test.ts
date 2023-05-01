import { getComponentRefName } from './get-components-ref-name'

describe('get-components-ref-name', () => {
  it('schema', () => {
    expect(getComponentRefName({ ref: '#/components/schemas/Test' })).toBe(
      'Test'
    )
  })
  it('requestBodies', () => {
    expect(
      getComponentRefName({ ref: '#/components/requestBodies/Test' })
    ).toBe('Test')
  })
})
