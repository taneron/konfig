import SwaggerParser from '@apidevtools/swagger-parser'
import { OpenAPIV3, OpenAPIV3_1 } from 'openapi-types'

export type ReferenceObject =
  | OpenAPIV3.ReferenceObject
  | OpenAPIV3_1.ReferenceObject

export const resolveRef = <O extends object>({
  refOrObject,
  $ref,
}: {
  refOrObject: ReferenceObject | O
  $ref: SwaggerParser.$Refs
}): O => {
  return '$ref' in refOrObject ? $ref.get(refOrObject.$ref) : refOrObject
}
