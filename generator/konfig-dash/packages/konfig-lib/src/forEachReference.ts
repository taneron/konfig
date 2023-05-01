import SwaggerParser from '@apidevtools/swagger-parser'
import { OpenAPIV3, OpenAPIV3_1 } from 'openapi-types'
import { Schema } from 'yaml'
import { Operation } from './forEachOperation'
import { ReferenceObject, resolveRef } from './resolveRef'

/**
 * Iterating over all references for any given OpenAPI Object is helpful when
 * trying to resolve imports for a particular api/model in generated SDK
 */

type ReferenceHandler = (reference: ReferenceObject) => void
type ResponsesObject = OpenAPIV3.ResponsesObject | OpenAPIV3_1.ResponsesObject
type ResponseObject = OpenAPIV3.ResponseObject | OpenAPIV3_1.ResponseObject
type SchemaObject = OpenAPIV3.SchemaObject | OpenAPIV3_1.SchemaObject
type ParameterBaseObject =
  | OpenAPIV3.ParameterBaseObject
  | OpenAPIV3_1.ParameterBaseObject

namespace handleReference {
  export const schema = ({
    schemaOrReference,
    $ref,
    handler,
  }: {
    schemaOrReference: SchemaObject | ReferenceObject
    $ref: SwaggerParser.$Refs
    handler: ReferenceHandler
  }) => {
    if ('$ref' in schemaOrReference) handler(schemaOrReference)
    const schema = resolveRef({ refOrObject: schemaOrReference, $ref })
    forEachReference(
      {
        type: 'schema',
        schema,
        $ref,
      },
      handler
    )
  }

  export const parameter = ({
    parameterOrReference,
    $ref,
    handler,
  }: {
    parameterOrReference: ParameterBaseObject | ReferenceObject
    $ref: SwaggerParser.$Refs
    handler: ReferenceHandler
  }) => {
    if ('$ref' in parameterOrReference) handler(parameterOrReference)
    const parameter = resolveRef({ refOrObject: parameterOrReference, $ref })
    forEachReference(
      {
        type: 'parameterObject',
        parameter,
        $ref,
      },
      handler
    )
  }
}

const handleParameterSchema = (
  { parameter, $ref }: ParameterWithRef,
  handler: ReferenceHandler
) => {
  if (!parameter.schema) return
  if ('$ref' in parameter.schema) handler(parameter.schema)
  handleReference.schema({
    schemaOrReference: parameter.schema,
    $ref,
    handler,
  })
}

const handleParameter = (
  parameter: ParameterWithRef,
  handler: ReferenceHandler
) => {
  handleParameterSchema(parameter, handler)
}

const handleRequestBody = (operation: Operation, handler: ReferenceHandler) => {
  if (!operation.requestBody) return
  if ('$ref' in operation.requestBody) handler(operation.requestBody)
  else operation.requestBody
}

const handleOperationResponses = (
  { operation }: OperationWithRef,
  handler: ReferenceHandler
) => {
  if (!operation.responses) return
  const responseObjects = Object.values(operation.responses)
  for (const responseOrReferenceObject of responseObjects) {
  }
}

const handleOperationParameters = (
  { operation, $ref }: OperationWithRef,
  handler: ReferenceHandler
) => {
  if (!operation.parameters) return
  for (const parameterOrReference of operation.parameters) {
    handleReference.parameter({
      parameterOrReference,
      $ref,
      handler,
    })
  }
}

const handleOperation = (
  operation: OperationWithRef,
  handler: ReferenceHandler
) => {
  handleOperationParameters(operation, handler)
  // handleResponses(operation, handler)
}

type WithRef = { $ref: SwaggerParser.$Refs }
type OperationWithRef = { type: 'operation'; operation: Operation } & WithRef
type SchemaWithRef = { type: 'schema'; schema: SchemaObject } & WithRef
type ResponsesWithRef = {
  type: 'responsesObject'
  responses: ResponsesObject
} & WithRef
type ParameterWithRef = {
  type: 'parameterObject'
  parameter: ParameterBaseObject
} & WithRef
type Object =
  | OperationWithRef
  | ParameterWithRef
  | ResponsesWithRef
  | SchemaWithRef

export const forEachReference = (object: Object, handler: ReferenceHandler) => {
  switch (object.type) {
    case 'operation':
      handleOperation(object, handler)
      break
    case 'parameterObject':
      handleParameter(object, handler)
      break
  }
}
