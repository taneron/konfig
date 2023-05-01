import { OpenAPI, OpenAPIV2, OpenAPIV3 } from 'openapi-types'
import { resolveRefStoplight } from './resolve-ref-stoplight'

export type OperationParameter =
  | OpenAPIV3.ParameterObject
  | OpenAPIV2.InBodyParameterObject
  | OpenAPIV2.GeneralParameterObject
/**
 * @deprecated uses resolveRefStoplight which is deprecated in favor of
 * "resolveRef" method which allows in-place mutations
 */
export const getOperationParametersDeprecated = async ({
  operation,
  document,
}: {
  operation: OpenAPI.Operation
  document: OpenAPI.Document
}): Promise<OperationParameter[] | undefined> => {
  const parameters = operation.parameters?.map(
    async (refOrObject) =>
      await resolveRefStoplight({ refOrObject, source: document })
  )
  if (parameters === undefined) return
  return await Promise.all(parameters)
}
