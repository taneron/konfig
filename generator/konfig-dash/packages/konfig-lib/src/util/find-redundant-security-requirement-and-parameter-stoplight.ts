import { OpenAPI } from 'openapi-types'
import { OperationParameter } from './get-operation-parameters-deprecated'
import { getSecurityParameterName } from './get-security-parameter-name'
import { hasAny } from './has-any'
import { getOperationParametersDeprecatedStoplight } from './get-operation-parameters-deprecated-stoplight'
import { getSecuritySchemesStoplight } from './get-security-schemes-stoplight'

export async function findRedundantSecurityRequirementAndParameterStoplight({
  document,
  operation,
}: {
  document: OpenAPI.Document
  operation: OpenAPI.Operation
}): Promise<
  | {
      name: string
      parameter: OperationParameter
      found: true
      parameters: OperationParameter[]
    }
  | { found: false }
> {
  const securityRequirements = document.security ?? operation.security
  if (securityRequirements === undefined) return { found: false }
  const securitySchemes = await getSecuritySchemesStoplight({ document })
  if (securitySchemes === undefined) return { found: false }
  const parameters = await getOperationParametersDeprecatedStoplight({
    operation: operation,
    document,
  })
  if (parameters === undefined) return { found: false }

  // filter security schemes based on required security
  const requiredSecuritySchemes = securityRequirements.flatMap((requirement) =>
    Object.keys(requirement).map((name) => {
      const scheme = securitySchemes[name]
      if (scheme === undefined)
        throw Error(
          `Found security requirement ${name} referring to non-existent security scheme`
        )
      return scheme
    })
  )

  let name: string | undefined
  let foundParameter: OperationParameter | undefined
  const anyRedundantSecurityAndParameterNames = hasAny({
    a: parameters,
    b: requiredSecuritySchemes,
    comparator: (parameter, security) => {
      const isSameName =
        parameter.name === getSecurityParameterName({ security })
      if (!isSameName) return false
      name = parameter.name
      foundParameter = parameter
      return isSameName
    },
  })
  if (anyRedundantSecurityAndParameterNames) {
    if (name === undefined)
      throw Error(
        'Name should have been assigned when redundancy was detected.'
      )
    if (foundParameter === undefined)
      throw Error(
        'Parameter should have been assigned when redundancy was detected.'
      )
    return { found: true, name, parameter: foundParameter, parameters }
  }
  return { found: false }
}
