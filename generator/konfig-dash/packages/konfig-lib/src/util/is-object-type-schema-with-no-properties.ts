import { SchemaObject } from '../parseSpec'

export function isObjectTypeSchemaWithNoProperties({
  schema,
}: {
  schema: SchemaObject
}) {
  return (
    schema.type === 'object' &&
    schema.additionalProperties === undefined &&
    (schema.properties === undefined ||
      Object.keys(schema.properties).length === 0)
  )
}
