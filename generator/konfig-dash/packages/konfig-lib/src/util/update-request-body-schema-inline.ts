import { OpenAPIV3 } from 'openapi-types'
import { SchemaObject, Spec } from '../parseSpec'

export function updateRequestBodySchemaInline({
  spec,
  path,
  method,
  media,
  schemaObject,
}: {
  spec: Spec['spec']
  path: string
  method: OpenAPIV3.HttpMethods
  media: string
  schemaObject: SchemaObject
}) {
  if (!spec.paths) throw Error()
  const pathObject = spec.paths[path]
  if (!pathObject) throw Error()
  const operation = pathObject[method]
  if (!operation) throw Error()
  const requestBody = operation.requestBody
  if (!requestBody) throw Error()
}
