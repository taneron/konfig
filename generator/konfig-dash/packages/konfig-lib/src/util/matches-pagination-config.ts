import { PaginationConfig } from '../KonfigYaml'
import {
  MediaTypeObject,
  ParameterObject,
  RequestBodyObject,
  ResponseObject,
  SchemaObject,
  Spec,
} from '../parseSpec'
import { resolveRef } from '../resolveRef'

/**
 * Determine whether we want to export a method that can be paginated
 */
export const matchesPaginationConfig = ({
  parameters,
  pagination,
  responses,
  spec,
  requestBody,
}: {
  parameters: ParameterObject[]
  requestBody?: RequestBodyObject
  responses: ResponseObject[]
  pagination: PaginationConfig
  spec: Spec
}): boolean => {
  if (pagination === undefined) return false

  /**
   * Compute parameter name list and match
   */
  const opParamNames = parameters.map((p) => p.name)
  const paramNamesMatch = pagination.parameters.every((param) =>
    opParamNames.includes(param)
  )

  /**
   * Compare against request body properties
   */
  const requestBodyPropertyNames =
    requestBody === undefined
      ? []
      : collectPropertyNameSet({ mediaTypes: requestBody.content, spec })
  const requestBodyPropertiesMatch = anyPropertyNameSetMatches({
    propertyNameSet: requestBodyPropertyNames,
    namesToMatch: pagination.parameters,
  })

  /**
   * Gather list of property name sets
   */
  const responseFieldNames = responses.flatMap((res): string[][] => {
    if (res.content === undefined) return []
    return collectPropertyNameSet({ mediaTypes: res.content, spec })
  })

  const responsePropertiesMatch = anyPropertyNameSetMatches({
    propertyNameSet: responseFieldNames,
    namesToMatch: pagination.response,
  })
  return (
    (paramNamesMatch || requestBodyPropertiesMatch) && responsePropertiesMatch
  )
}

export function anyPropertyNameSetMatches({
  propertyNameSet,
  namesToMatch,
}: {
  propertyNameSet: string[][]
  namesToMatch: string[]
}) {
  return (
    propertyNameSet.findIndex((fieldNames) =>
      namesToMatch.every((resField) => fieldNames.includes(resField))
    ) !== -1
  )
}

export function collectPropertyNameSet({
  mediaTypes,
  spec,
}: {
  mediaTypes: { [media: string]: MediaTypeObject }
  spec: Spec
}): string[][] {
  return Object.keys(mediaTypes).map((mediaType): string[] => {
    // Find object type schema
    const mediaTypeObject = mediaTypes[mediaType]
    if (mediaTypeObject.schema === undefined) return []
    const schema = resolveRef({
      refOrObject: mediaTypeObject.schema,
      $ref: spec.$ref,
    })
    if (schema.type !== 'object') return []
    if (schema.properties === undefined) return []

    // return its property names
    return Object.keys(schema.properties)
  })
}
