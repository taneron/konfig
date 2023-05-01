import { RulesetFunction } from '@stoplight/spectral-core'
import { SchemaObject } from 'konfig-lib'
export const missingDateFormat: RulesetFunction<SchemaObject> = (input) => {
  if (input.type !== 'string') return []
  if (input.format === 'date') return []
  if (!/^(\d{4})-(\d{2})-(\d{2})$/.test(input.example)) return []
  return [
    {
      message: input.example,
    },
  ]
}
