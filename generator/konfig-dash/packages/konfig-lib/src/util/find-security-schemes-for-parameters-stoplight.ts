import { OpenAPI } from 'openapi-types'
import { Operation } from '../forEachOperation'
import { getSecurityIn } from './get-security-in'
import { getSecurityParameterName } from './get-security-parameter-name'
import { SecurityScheme } from './get-security-schemes'
import { getOperationParametersDeprecatedStoplight } from './get-operation-parameters-deprecated-stoplight'
import { getSecuritySchemesStoplight } from './get-security-schemes-stoplight'

export async function findSecuritySchemesForParametersStoplight({
  document,
  operation,
  caseInsensitive,
}: {
  document: OpenAPI.Document
  operation: Operation
  caseInsensitive?: boolean
}): Promise<{ name: string; scheme: SecurityScheme }[] | undefined> {
  caseInsensitive = caseInsensitive ?? true
  const securitySchemes = await getSecuritySchemesStoplight({ document })
  if (securitySchemes === undefined) return
  const parameters = await getOperationParametersDeprecatedStoplight({
    operation,
    document,
  })
  if (parameters === undefined) return
  const matchingSecuritySchemes = Object.entries(securitySchemes).filter(
    ([_name, security]) => {
      const securityName = getSecurityParameterName({ security })
      const securityIn = getSecurityIn({ security })
      const filteredByIn = parameters.filter((p) => p.in === securityIn)
      if (caseInsensitive)
        return !!filteredByIn.find(
          (parameter) =>
            parameter.name.toLowerCase() === securityName.toLowerCase()
        )
      return !!filteredByIn.find((parameter) => parameter.name === securityName)
    }
  )
  if (matchingSecuritySchemes.length === 0) return
  return matchingSecuritySchemes.map(([name, scheme]) => ({ name, scheme }))
}
