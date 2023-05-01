import { Operation } from '../forEachOperation'
import { Spec } from '../parseSpec'
import { resolveRef } from '../resolveRef'

export function getOperationParameters({
  operation,
  spec,
}: {
  operation: Operation
  spec: Spec
}) {
  if (operation.parameters === undefined) return
  return operation.parameters.map((parameter) =>
    resolveRef({ refOrObject: parameter, $ref: spec.$ref })
  )
}
