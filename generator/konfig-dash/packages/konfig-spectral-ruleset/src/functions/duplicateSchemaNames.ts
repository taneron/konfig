import { IFunctionResult, RulesetFunction } from '@stoplight/spectral-core'
import type { ComponentsObject } from 'konfig-lib/dist/parseSpec'
export const duplicateSchemaNames: RulesetFunction<ComponentsObject> = (
  input,
  _options,
  context
) => {
  const result: IFunctionResult[] = []
  const schemaNames = Object.keys(input)
  for (let i = 0; i < schemaNames.length; i++) {
    for (let j = 0; j < schemaNames.length; j++) {
      if (i === j) continue
      const a = schemaNames[i]
      const b = schemaNames[j]
      if (a === undefined)
        throw Error('We should only be indexing into the size of schemaNames')
      if (b === undefined)
        throw Error('We should only be indexing into the size of schemaNames')
      if (a.toLowerCase() !== b.toLowerCase()) continue
      result.push({
        message: `Duplicate case-insensitive schema name "${b}"`,
        path: [...context.path, a],
      })
    }
  }
  return result
}
