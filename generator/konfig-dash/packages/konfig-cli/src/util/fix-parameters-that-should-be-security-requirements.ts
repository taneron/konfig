import {
  findParameterIndexByNameAndIn,
  findSecuritySchemesForParameters,
  getSecurityIn,
  getSecurityParameterName,
  getOperations,
  Spec,
} from 'konfig-lib'

export async function fixParametersThatShouldBeSecurityRequirements({
  spec,
}: {
  spec: Spec
}): Promise<number> {
  let numberOfParametersConvertedToSecurityRequirements = 0

  const operations = getOperations({ spec: spec.spec })

  for (const { operation } of operations) {
    const securitySchemes = await findSecuritySchemesForParameters({
      spec,
      operation,
    })
    if (securitySchemes === undefined) continue

    if (operation.parameters === undefined)
      throw Error(
        'Parameters should have existed for security schemes to be found'
      )

    // Remove parameters from operation that have case insensitive match to any of the security scheme
    for (const { name: securityName, scheme } of securitySchemes) {
      const securityParameterName = getSecurityParameterName({
        security: scheme,
      })
      const parameterIn = getSecurityIn({ security: scheme })
      const index = await findParameterIndexByNameAndIn({
        name: securityParameterName,
        parameterIn,
        operation,
        spec,
      })
      if (index === -1) throw Error('Every security should match a parameter')
      operation.parameters.splice(index, 1)
      const securityRequirements = operation.security ?? []

      // Add new SecurityRequirement object
      if (securityRequirements.length === 0)
        securityRequirements.push({ [securityName]: [] })
      // Update existing SecurityRequirement object
      else securityRequirements[0][securityName] = []

      operation.security = securityRequirements
      numberOfParametersConvertedToSecurityRequirements++
    }
  }

  return numberOfParametersConvertedToSecurityRequirements
}
