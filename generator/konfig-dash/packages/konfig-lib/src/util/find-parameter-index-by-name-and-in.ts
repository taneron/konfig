import { Operation } from '../forEachOperation'
import type { Spec } from '../parseSpec'
import { resolveRef } from '../resolveRef'

export async function findParameterIndexByNameAndIn({
  name,
  parameterIn,
  operation,
  spec,
  caseInsensitive,
}: {
  name: string
  parameterIn: string
  operation: Operation
  spec: Spec
  caseInsensitive?: boolean
}): Promise<number> {
  const parameterPromises = operation.parameters?.map(async (refOrObject) =>
    resolveRef({
      refOrObject,
      $ref: spec.$ref,
    })
  )
  if (parameterPromises === undefined) return -1
  caseInsensitive = caseInsensitive ?? true
  const parameters = await Promise.all(parameterPromises)
  if (caseInsensitive)
    return parameters.findIndex(
      (p) => p.name.toLowerCase() === name.toLowerCase() && p.in === parameterIn
    )
  return parameters.findIndex((p) => p.name === name && p.in === parameterIn)
}
