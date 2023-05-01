import { IFunctionResult, RulesetFunction } from '@stoplight/spectral-core'
import type { TagObject } from 'konfig-lib'
export const duplicateTagNames: RulesetFunction<TagObject[]> = (
  input,
  _options,
  context
) => {
  const result: IFunctionResult[] = []
  const names = input.map((tag) => tag.name)
  for (let i = 0; i < names.length; i++) {
    for (let j = 0; j < names.length; j++) {
      if (i === j) continue
      const a = names[i]
      const b = names[j]
      if (a === undefined)
        throw Error('We should only be indexing into the size of schemaNames')
      if (b === undefined)
        throw Error('We should only be indexing into the size of schemaNames')
      if (a.toLowerCase() !== b.toLowerCase()) continue
      result.push({
        message: `Duplicate case-insensitive tag name "${a}"`,
        path: [...context.path, j, 'name'],
      })
    }
  }
  return result
}
