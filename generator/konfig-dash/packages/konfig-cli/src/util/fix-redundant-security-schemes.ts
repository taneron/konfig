import {
  findParameterIndexByNameAndIn,
  findRedundantSecuritySchemes,
  getOperations,
  OpenAPIV3_XDocument,
  Operation,
} from 'konfig-lib'

export async function fixRedundantSecuritySchemes({
  spec,
}: {
  spec: OpenAPIV3_XDocument
}): Promise<number> {
  let numberOfRedundantSecuritySchemesRemoved = 0
  if (spec.paths === undefined) return 0
  const operations = getOperations({ spec })
  for (const { operation } of operations) {
    if (operation.security === undefined) continue

    let numRemoved = await removeRedundant({
      document: spec,
      operation,
    })
    while (numRemoved > 0) {
      numberOfRedundantSecuritySchemesRemoved += numRemoved
      numRemoved = await removeRedundant({
        document: spec,
        operation,
      })
      // if we removed all redundant security schemes and there are none left
      // then we have to remove the empty aray as an empty array is used to
      // remove any top-level security declaration
      if (operation.security.length === 0) delete operation['security']
    }
  }
  return numberOfRedundantSecuritySchemesRemoved
}

async function removeRedundant({
  document,
  operation,
}: {
  document: OpenAPIV3_XDocument
  operation: Operation
}) {
  let findResult = findRedundantSecuritySchemes({
    document,
    operation,
  })
  let numSecurityRequirementsRemoved = 0
  while (findResult.length > 0) {
    if (operation.security === undefined)
      throw Error(
        'How was a redundancy found but there are no security requirements?'
      )
    operation.security.splice(findResult[0], 1)
    findResult = findRedundantSecuritySchemes({
      document,
      operation,
    })
    numSecurityRequirementsRemoved++
  }
  return numSecurityRequirementsRemoved
}
