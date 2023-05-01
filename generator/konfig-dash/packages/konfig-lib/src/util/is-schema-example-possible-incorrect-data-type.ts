import type { IFunctionResult } from '@stoplight/spectral-core'

export function isSchemaExamplePossibleIncorrectDataType({
  schema,
}: {
  schema: Record<string, unknown>
}): IFunctionResult[] {
  if (
    typeof schema !== 'object' ||
    schema === null ||
    !('type' in schema) ||
    !('example' in schema)
  )
    return []
  const type = schema['type']
  if (typeof type !== 'string') return []
  const example = schema['example']
  return checkExample(type, example)
}

const checkExample = (type: string, example: unknown): IFunctionResult[] => {
  if (type === 'string' && typeof example === 'string')
    return checkString(example)
  return []
}

function checkString(example: string): IFunctionResult[] {
  if (isInt(example))
    return [{ message: 'Could be integer type based on example' }]
  if (isFloat(example))
    return [{ message: 'Could be number type based on example' }]
  if (isBoolean(example))
    return [{ message: 'Could be boolean type based on example' }]
  return []
}

function isBoolean(example: string) {
  return example === 'true' || example === 'false'
}

function isInt(example: string) {
  return /^[-+]?\d+$/.test(example)
}

function isFloat(example: string) {
  var floatRegex = /^-?\d+(?:[.,]\d*?)?$/
  if (!floatRegex.test(example)) return false

  const parsed = parseFloat(example)
  if (isNaN(parsed)) return false
  return true
}
