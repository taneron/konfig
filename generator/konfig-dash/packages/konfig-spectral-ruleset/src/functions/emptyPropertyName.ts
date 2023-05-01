import { RulesetFunction } from '@stoplight/spectral-core'
export const emptyPropertyName: RulesetFunction<unknown> = (input) => {
  if (typeof input !== 'object') return []
  if (Array.isArray(input)) return []
  if (input === null) return []
  if (!('type' in input)) return []
  if (input.type !== 'object') return []
  if (!('properties' in input)) return []
  if (typeof input.properties !== 'object') return []
  if (Array.isArray(input.properties)) return []
  if (input.properties === null) return []
  const emptyName = Object.keys(input.properties).find((name) => name === '')
  if (emptyName === undefined) return []
  return [{ message: 'Empty name found' }]
}
