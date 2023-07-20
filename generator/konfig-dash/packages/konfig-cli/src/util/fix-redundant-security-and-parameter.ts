import {
  findParameterIndexByNameAndIn,
  findRedundantSecurityRequirementAndParameter,
  getOperations,
  Operation,
  Spec,
} from 'konfig-lib'

export async function fixRedundantSecurityAndParameter({
  spec,
}: {
  spec: Spec
}): Promise<number> {
  let numberOfRedundantSecurityAndParametersFixed = 0
  if (spec.spec.paths === undefined) return 0
  const operations = getOperations({ spec: spec.spec })
  for (const { operation } of operations) {
    if (operation.parameters === undefined) continue
    if (operation.security === undefined) continue

    let numberOfParametersRemoved = await removeRedundant({
      spec,
      operation,
    })
    while (numberOfParametersRemoved > 0) {
      numberOfRedundantSecurityAndParametersFixed += numberOfParametersRemoved
      numberOfParametersRemoved = await removeRedundant({
        spec,
        operation,
      })
    }
  }
  return numberOfRedundantSecurityAndParametersFixed
}

async function removeRedundant({
  spec,
  operation,
}: {
  spec: Spec
  operation: Operation
}) {
  const findResult = await findRedundantSecurityRequirementAndParameter({
    spec: spec.spec,
    $ref: spec.$ref,
    operation,
  })
  if (!findResult.found) return 0
  if (operation.parameters === undefined)
    throw Error('How was a redundancy found but there are no parameters?')
  const index = await findParameterIndexByNameAndIn({
    name: findResult.name,
    parameterIn: findResult.parameter.in,
    operation,
    spec,
  })
  if (index === -1)
    throw Error(
      'There should have been a found parameter index since a redundancy was detected'
    )
  operation.parameters.splice(index, 1)
  return 1
}
