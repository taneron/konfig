import { SchemaObject, Spec } from '../parseSpec'
import { ReferenceObject, resolveRef } from '../resolveRef'

/**
 * @returns true if schema is object type or only includes object type schema through anyOf/allOf/oneOf
 */
export function isObjectTypeSchema({
  schema,
  spec,
}: {
  schema: SchemaObject | ReferenceObject
  spec: Spec
}): boolean {
  const resolved = resolveRef({ refOrObject: schema, $ref: spec.$ref })
  if (resolved.type !== undefined) {
    return resolved.type === 'object'
  }
  const anyOf = resolved.anyOf ? resolved.anyOf : []
  const allOf = resolved.allOf ? resolved.allOf : []
  const oneOf = resolved.oneOf ? resolved.oneOf : []
  const allSchemas = [...anyOf, ...allOf, ...oneOf]
  return allSchemas.every((schema) => isObjectTypeSchema({ schema, spec }))
}
