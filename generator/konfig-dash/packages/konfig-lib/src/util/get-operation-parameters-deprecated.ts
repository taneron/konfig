import { OpenAPI, OpenAPIV2, OpenAPIV3 } from 'openapi-types'
import { resolveRef } from '../resolveRef'
import type { Spec } from '../parseSpec'

export type OperationParameter =
  | OpenAPIV3.ParameterObject
  | OpenAPIV2.InBodyParameterObject
  | OpenAPIV2.GeneralParameterObject
export const getOperationParametersDeprecated = async ({
  operation,
  $ref,
}: {
  operation: OpenAPI.Operation
  $ref: Spec['$ref']
}): Promise<OperationParameter[] | undefined> => {
  const parameters = operation.parameters?.map((refOrObject) =>
    resolveRef({ refOrObject, $ref })
  )
  if (parameters === undefined) return
  return await Promise.all(parameters)
}
