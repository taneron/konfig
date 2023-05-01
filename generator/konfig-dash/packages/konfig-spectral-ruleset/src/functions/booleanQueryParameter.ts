import { IFunctionResult, RulesetFunction } from '@stoplight/spectral-core'
import { ParameterObject } from 'konfig-lib'
import { deref } from './util/lib'
export const booleanQueryParameter: RulesetFunction<ParameterObject> = (
  input
): IFunctionResult[] => {
  if (input.in !== 'query') return []
  if (input.schema === undefined) return []
  if (deref(input.schema).type !== 'boolean') return []
  return [{ message: 'Found boolean query parameter' }]
}
