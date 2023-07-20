import { IFunctionResult, RulesetFunction } from '@stoplight/spectral-core'
import type { Operation } from 'konfig-lib/dist/forEachOperation'
import { findSecuritySchemesForParametersStoplight } from 'konfig-lib/dist/util/find-security-schemes-for-parameters-stoplight'
import { getSecurityParameterName } from 'konfig-lib/dist/util/get-security-parameter-name'
import { OAS3Doc } from './util/OAS3Doc'
export const useSecurityInstead: RulesetFunction<Operation> = async (
  operation,
  _options,
  context
): Promise<IFunctionResult[]> => {
  const document = context.document.data as OAS3Doc
  // Find all parameters from security of operation
  const securitySchemes = await findSecuritySchemesForParametersStoplight({
    document,
    operation,
  })
  if (securitySchemes === undefined) return []
  if (securitySchemes.length === 1) {
    const securityScheme = securitySchemes[0]
    if (securityScheme === undefined) throw Error('this makes no sense')
    return [
      {
        message: `Use security requirement "${
          securityScheme.name
        }" instead of parameter with name "${getSecurityParameterName({
          security: securityScheme.scheme,
        })}"`,
      },
    ]
  }
  return [
    {
      message: `Use security requirements ${securitySchemes
        .map((scheme) => `"${scheme.name}"`)
        .join(', ')} instead of parameters with names ${securitySchemes
        .map((s) => `"${getSecurityParameterName({ security: s.scheme })}"`)
        .join(', ')}`,
    },
  ]
}
