import {
  canSchemaObjectBeStructured,
  generateSchemaObjectFromJson,
  getOperations,
  resolveRef,
  SchemaObject,
  Spec,
} from 'konfig-lib'
import { getOasVersion } from 'konfig-lib/dist/util/get-oas-version'

export async function fixUnstructuredRequestBody({
  spec: { spec, $ref },
}: {
  spec: Spec
}): Promise<number> {
  let numberOfUnstructuredRequestBodiesFixed = 0
  const version = getOasVersion({ spec })
  const operations = getOperations({ spec })

  // Request Body
  for (const { operation } of operations) {
    if (operation.requestBody === undefined) continue
    const requestBody = resolveRef({
      refOrObject: operation.requestBody,
      $ref,
    })

    for (const media of Object.keys(requestBody.content)) {
      const mediaObjectOrRef = requestBody.content[media]
      const mediaObject = resolveRef({
        refOrObject: mediaObjectOrRef,
        $ref,
      })
      if (mediaObject.schema === undefined) continue
      const schemaObject = resolveRef({
        refOrObject: mediaObject.schema,
        $ref,
      })
      if (!canSchemaObjectBeStructured({ schemaObject })) continue
      numberOfUnstructuredRequestBodiesFixed++
      if (media !== '*/*' && media !== 'application/json')
        throw Error(
          `Media type of ${media} not implemented for fixing unstructured request body`
        )

      // 1st JSON.parse is to parse escaped string to JSON string
      // 2nd JSON.parse is to parse JSON string to JSON
      const json = JSON.parse(JSON.parse(schemaObject.example))
      const generatedSchema = generateSchemaObjectFromJson({ json, version })

      // Overwrite existing schema object with all properties that were generated
      updateSchemaObject({ schemaObject, generatedSchema })
    }
  }

  return numberOfUnstructuredRequestBodiesFixed
}

function updateSchemaObject({
  schemaObject,
  generatedSchema,
}: {
  schemaObject: SchemaObject
  generatedSchema: SchemaObject
}) {
  schemaObject.type = generatedSchema.type
  schemaObject.oneOf = generatedSchema.oneOf
  if ('items' in schemaObject && 'items' in generatedSchema)
    schemaObject.items = generatedSchema.items
  if ('nullable' in schemaObject && 'nullable' in generatedSchema)
    schemaObject.nullable = generatedSchema.nullable
  schemaObject.properties = generatedSchema.properties
  schemaObject.example = generatedSchema.example
}
