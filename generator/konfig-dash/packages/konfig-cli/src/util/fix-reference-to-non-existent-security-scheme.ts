import { getOperations, getSecuritySchemes, Spec } from 'konfig-lib'

export async function fixReferenceToNonExistentSecurityScheme({
  spec,
}: {
  spec: Spec
}): Promise<number> {
  let numberOfReferencesToNonExistentSecuritySchemesRemoved = 0
  if (spec.spec.paths === undefined) return 0
  const operations = getOperations({ spec: spec.spec })
  const securitySchemes = await getSecuritySchemes(spec)
  if (securitySchemes === undefined) return 0
  for (const { operation } of operations) {
    if (operation.security === undefined) continue
    const securityRequirements = operation.security
    const filteredSecurityRequirements = securityRequirements.filter(
      (requirement) => {
        return Object.keys(requirement).every((name) => {
          return securitySchemes[name] !== undefined
        })
      }
    )
    operation.security = filteredSecurityRequirements
    numberOfReferencesToNonExistentSecuritySchemesRemoved++
  }
  return numberOfReferencesToNonExistentSecuritySchemesRemoved
}
