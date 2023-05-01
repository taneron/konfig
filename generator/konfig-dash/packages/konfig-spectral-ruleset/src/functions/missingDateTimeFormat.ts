import { RulesetFunction } from '@stoplight/spectral-core'
import { SchemaObject } from 'konfig-lib'
export const missingDataTimeFormat: RulesetFunction<SchemaObject> = (input) => {
  if (input.type !== 'string') return []
  if (input.format === 'date-time') return []
  if (
    !/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})(\+|-)(\d{2}):(\d{2})$/.test(
      input.example
    )
  )
    return []
  return [
    {
      message: input.example,
    },
  ]
}
