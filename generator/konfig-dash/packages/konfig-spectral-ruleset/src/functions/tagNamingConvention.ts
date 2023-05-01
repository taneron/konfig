import { IFunctionResult, RulesetFunction } from '@stoplight/spectral-core'
import { tagSchema } from 'konfig-lib/dist/util/tag-schema'
export const tagNamingConvention: RulesetFunction<string> = async (
  tag
): Promise<IFunctionResult[]> => {
  const parseResult = tagSchema.safeParse(tag)
  if (parseResult.success) return []
  if (!parseResult.error.issues[0])
    throw Error('At least one issue should exist')
  return [{ message: parseResult.error.issues[0].message }]
}
