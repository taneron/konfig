import type { IFunctionResult, RulesetFunction } from '@stoplight/spectral-core'
import type { ParameterObject } from '../parseSpec'

export const disallowedHeadersRegex = /^(Content-Type|Accept)$/

export async function isParameterDisallowed({
  parameter,
}: {
  parameter: ParameterObject
}) {
  const result = await disallowedHeaderNamesRequest(parameter, null, {} as any)
  if (!Array.isArray(result)) return false
  return result.length > 0
}

export const disallowedHeaderNamesRequest: RulesetFunction<ParameterObject> = (
  input
): IFunctionResult[] => {
  if (input.in !== 'header') return []
  if (!disallowedHeadersRegex.test(input.name)) return []
  return [{ message: 'Error' }]
}
