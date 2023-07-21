import { operationIdSchema } from './operation-id-schema'

describe('operation-id-schema', () => {
  it('valid', () => {
    expect(operationIdSchema.safeParse('Hello_world').success).toBe(true)
  })
  it('invalid - no underscore', () => {
    expect(operationIdSchema.safeParse('Helloworld').success).toBe(false)
  })
  it('invalid - two underscores', () => {
    expect(operationIdSchema.safeParse('Hello_there_world').success).toBe(false)
  })
  it('invalid - no suffix', () => {
    expect(operationIdSchema.safeParse('Hello_').success).toBe(false)
  })
  it('invalid - no prefix', () => {
    expect(operationIdSchema.safeParse('_World').success).toBe(false)
  })
  it('invalid - three underscroes', () => {
    expect(operationIdSchema.safeParse('hello_there_my_world').success).toBe(
      false
    )
  })
  it('invalid - numerical method name', () => {
    expect(operationIdSchema.safeParse('emailReporting_1').success).toBe(false)
  })
})
