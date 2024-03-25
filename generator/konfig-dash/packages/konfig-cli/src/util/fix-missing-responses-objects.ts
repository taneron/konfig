import { getOperations, Spec } from 'konfig-lib'

export async function fixMissingResponsesObject({
  spec,
}: {
  spec: Spec
}): Promise<number> {
  const operations = getOperations({ spec: spec.spec })

  let numberOfResponseDescriptionsAdded = 0

  for (const { operation } of operations) {
    if (operation.responses === undefined || operation.responses === null) {
      operation.responses = {}
      numberOfResponseDescriptionsAdded++
    }
  }

  return numberOfResponseDescriptionsAdded
}
