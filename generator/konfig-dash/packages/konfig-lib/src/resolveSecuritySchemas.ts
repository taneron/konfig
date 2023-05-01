import { OpenAPIV3 } from 'openapi-types'
import { Spec } from './parseSpec'
import { resolveRef } from './resolveRef'

export const resolveSecuritySchemas = ({
  schemas,
  spec,
}: {
  schemas: OpenAPIV3.ComponentsObject['securitySchemes']
  spec: Spec
}) => {
  if (schemas === undefined) return null
  const securitySchemas = Object.fromEntries(
    Object.entries(schemas).map(([securityName, schema]) => [
      securityName,
      resolveRef({ refOrObject: schema, $ref: spec.$ref }),
    ])
  )
  return securitySchemas
}
