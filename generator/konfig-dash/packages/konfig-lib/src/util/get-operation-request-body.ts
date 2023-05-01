import { Operation } from '../forEachOperation'
import { RequestBodyObject, Spec } from '../parseSpec'
import { resolveRef } from '../resolveRef'

export function getOperationRequestBody({
  operation,
  spec,
}: {
  operation: Operation
  spec: Spec
}): RequestBodyObject | undefined {
  if (operation.requestBody === undefined) return
  const requestBody = resolveRef({
    refOrObject: operation.requestBody,
    $ref: spec.$ref,
  })
  return requestBody
}
