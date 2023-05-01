import { SchemaObject } from '../parseSpec'
import { isJsonString } from './is-json-string'
import { objectSchema } from './json-schema'

/**
 * Checks if a schema object can be structured.
 * @param schemaObject
 * @returns true if schema object can be structured
 * @example
 * const schemaObject = {
 *  type: 'string',
 * example: '{"foo": "bar"}',
 * }
 * canSchemaObjectBeStructured({ schemaObject }) // true
 * @example
 * const schemaObject = {
 * type: 'string',
 * example: 'foo',
 * }
 * canSchemaObjectBeStructured({ schemaObject }) // false
 */
export function canSchemaObjectBeStructured({
  schemaObject,
}: {
  schemaObject: SchemaObject
}): boolean {
  if (schemaObject.type !== 'string') return false
  if (schemaObject.example === undefined) return false
  if (!isJsonString(schemaObject.example)) return false
  if (!objectSchema.safeParse(JSON.parse(schemaObject.example)).success)
    return false
  return true
}
