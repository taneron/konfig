import { OpenAPI, OpenAPIV2, OpenAPIV3, OpenAPIV3_1 } from 'openapi-types'
import { resolveRefStoplight } from './resolve-ref-stoplight'

export type SecurityScheme =
  | OpenAPIV2.SecuritySchemeObject
  | OpenAPIV3.SecuritySchemeObject
  | OpenAPIV3_1.SecuritySchemeObject
export type SecuritySchemes = Record<string, SecurityScheme>
export const getSecuritySchemesStoplight = async ({
  document,
}: {
  document: OpenAPI.Document
}): Promise<SecuritySchemes | undefined> => {
  if ('securityDefinitions' in document) {
    return document.securityDefinitions
  }
  if ('components' in document) {
    const securitySchemes = document.components?.securitySchemes
    if (securitySchemes === undefined) return
    const resolved = await Promise.all(
      Object.entries(securitySchemes).map(
        async ([name, refOrObject]): Promise<
          [string, OpenAPIV3.SecuritySchemeObject]
        > => {
          return [
            name,
            await resolveRefStoplight({ refOrObject, source: document }),
          ]
        }
      )
    )
    return Object.fromEntries(resolved)
  }
  return
}
