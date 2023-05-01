import {
  SchemaOrReference,
  generateSchemaObjectFromJson,
  mergeSchemaObject,
} from './generate-schema-object-from-json'
import { OpenApiVersion } from './get-oas-version'
import { Json } from './json-schema'

export function generateAndMergeSchemaObjects({
  examples,
  version,
}: {
  examples: Json[]
  version: OpenApiVersion
}) {
  const exampleSchemaObjects: SchemaOrReference[] = examples.map((example) =>
    generateSchemaObjectFromJson({
      json: example,
      version,
    })
  )
  const mergedSchemaObject = exampleSchemaObjects.reduce((a, b) =>
    mergeSchemaObject({ a, b })
  )
  return mergedSchemaObject
}
