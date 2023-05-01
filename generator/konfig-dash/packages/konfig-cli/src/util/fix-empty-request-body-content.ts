import { getOperations, resolveRef, Spec } from 'konfig-lib'

export async function fixEmptyRequestBodyContent({
  spec,
}: {
  spec: Spec
}): Promise<number> {
  let numberOfEmptyRequestBodyContents = 0

  const operations = getOperations({ spec: spec.spec })
  for (const { operation } of operations) {
    if (operation.requestBody === undefined) continue
    const requestBody = resolveRef({
      refOrObject: operation.requestBody,
      $ref: spec.$ref,
    })
    if (Object.keys(requestBody.content).length !== 0) continue
    delete operation['requestBody']
    numberOfEmptyRequestBodyContents++
  }

  return numberOfEmptyRequestBodyContents
}
