import { IFunctionResult, RulesetFunction } from '@stoplight/spectral-core'
import camelcase from 'konfig-lib/dist/util/camelcase'
export const noParameterNamedRequestBody: RulesetFunction<string> = async (
  parameterName
): Promise<IFunctionResult[]> => {
  const parameterNameCamelCased = camelcase(parameterName)
  if (/^requestBody$/.test(parameterNameCamelCased))
    return [
      {
        message: 'requestBody is not allowed',
      },
    ]
  return []
}
