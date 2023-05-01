import { Operation } from '../forEachOperation'
import { SchemaObject, Spec } from '../parseSpec'
import { resolveRef } from '../resolveRef'
import { getSomeOperationMediaType } from './get-some-operation-media-type'

export function getSomeOperationRequestBodySchema({
  operation,
  spec,
}: {
  operation: Operation
  spec: Spec
}): SchemaObject | undefined {
  const mediaTypeObject = getSomeOperationMediaType({ operation, spec })
  if (mediaTypeObject === undefined) return
  if (mediaTypeObject.schema === undefined) return
  const schema = resolveRef({
    refOrObject: mediaTypeObject.schema,
    $ref: spec.$ref,
  })
  return schema
}
