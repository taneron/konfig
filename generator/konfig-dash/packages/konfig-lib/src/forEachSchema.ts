import { OpenAPIV3 } from 'openapi-types'
import { OpenAPIV3_XDocument, Spec } from './parseSpec'
import { resolveRef } from './resolveRef'

export type Schema = Exclude<
  NonNullable<
    NonNullable<OpenAPIV3_XDocument['components']>['schemas']
  >[string],
  OpenAPIV3.ReferenceObject
>

export const forEachSchema = (
  spec: Spec,
  handler: (schema: { schema: Schema; name: string }) => void
) => {
  if (!spec.spec.components) return
  if (!spec.spec.components.schemas) return
  for (const name in spec.spec.components.schemas) {
    const schema = spec.spec.components.schemas[name]
    if (!schema) throw Error('Schema with missing SchemaObject')
    const schemaObject = resolveRef({ refOrObject: schema, $ref: spec.$ref })
    handler({ schema: schemaObject, name })
  }
}
