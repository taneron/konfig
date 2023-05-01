import { getOperations, Spec } from 'konfig-lib'
import merge from 'lodash.merge'

export type SecurityRequirementObject = NonNullable<
  Spec['spec']['security']
>[number]

export function fixListUsageOfSecurity({
  spec,
}: {
  spec: Spec['spec']
}): number {
  let numberOfListUsagesOfSecurity = 0

  // Global Security Requirements
  if (spec.security !== undefined && spec.security.length > 1) {
    spec.security = mergeSecurityRequirements({
      securityRequirements: spec.security,
    })
    numberOfListUsagesOfSecurity++
  }

  // Operation-level Security Requirements
  const operations = getOperations({ spec })
  for (const { operation } of operations) {
    if (operation.security === undefined || operation.security.length <= 1)
      continue
    operation.security = mergeSecurityRequirements({
      securityRequirements: operation.security,
    })
    numberOfListUsagesOfSecurity++
  }

  return numberOfListUsagesOfSecurity
}

function mergeSecurityRequirements({
  securityRequirements,
}: {
  securityRequirements: SecurityRequirementObject[]
}): [SecurityRequirementObject] {
  return [
    securityRequirements.reduce((securityRequirement, next) => {
      for (const [securityName, sr] of Object.entries(next)) {
        securityRequirement[securityName] = sr
      }
      return securityRequirement
    }),
  ]
}
