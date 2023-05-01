import { Operation } from '../forEachOperation'
import { SchemaObject, Spec } from '../parseSpec'
import { ReferenceObject, resolveRef } from '../resolveRef'
import { getSomeOperationRequestBodySchema } from './get-some-operation-request-body-schema'
import { isObjectTypeSchema } from './is-object-type-schema'

/**
 * @returns tri-state result where null means there is no request body
 */
export function isRequestBodyAnObject({
  operation,
  spec,
}: {
  operation: Operation
  spec: Spec
}): boolean | null {
  const schema = getSomeOperationRequestBodySchema({ operation, spec })
  if (schema === undefined) return null
  return isObjectTypeSchema({ schema, spec })
}
