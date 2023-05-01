import {
  findParameterIndexByNameAndIn,
  findRedundantSecurityRequirementAndParameter,
  getOperations,
  OpenAPIV3_XDocument,
  Operation,
} from 'konfig-lib'

export async function fixRedundantSecurityAndParameter({
  spec,
}: {
  spec: OpenAPIV3_XDocument
}): Promise<number> {
  let numberOfRedundantSecurityAndParametersFixed = 0
  if (spec.paths === undefined) return 0
  const operations = getOperations({ spec })
  for (const { operation } of operations) {
    if (operation.parameters === undefined) continue
    if (operation.security === undefined) continue

    let numberOfParametersRemoved = await removeRedundant({
      document: spec,
      operation,
    })
    while (numberOfParametersRemoved > 0) {
      numberOfRedundantSecurityAndParametersFixed += numberOfParametersRemoved
      numberOfParametersRemoved = await removeRedundant({
        document: spec,
        operation,
      })
    }
  }
  return numberOfRedundantSecurityAndParametersFixed
}

async function removeRedundant({
  document,
  operation,
}: {
  document: OpenAPIV3_XDocument
  operation: Operation
}) {
  const findResult = await findRedundantSecurityRequirementAndParameter({
    document,
    operation,
  })
  if (!findResult.found) return 0
  if (operation.parameters === undefined)
    throw Error('How was a redundancy found but there are no parameters?')
  const index = await findParameterIndexByNameAndIn({
    name: findResult.name,
    parameterIn: findResult.parameter.in,
    operation,
    document,
  })
  if (index === -1)
    throw Error(
      'There should have been a found parameter index since a redundancy was detected'
    )
  operation.parameters.splice(index, 1)
  return 1
}
