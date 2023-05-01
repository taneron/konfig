import { Operation } from '../forEachOperation'
import { OpenAPIV3_XDocument } from '../parseSpec'
import { resolveRefStoplight } from './resolve-ref-stoplight'

export async function findParameterIndexByNameAndIn({
  name,
  parameterIn,
  operation,
  document,
  caseInsensitive,
}: {
  name: string
  parameterIn: string
  operation: Operation
  document: OpenAPIV3_XDocument
  caseInsensitive?: boolean
}): Promise<number> {
  const parameterPromises = operation.parameters?.map(
    async (refOrObject) =>
      await resolveRefStoplight({
        refOrObject,
        source: document,
      })
  )
  if (parameterPromises === undefined) return -1
  caseInsensitive = caseInsensitive ?? true
  const parameters = await Promise.all(parameterPromises)
  if (caseInsensitive)
    return parameters.findIndex(
      (p) => p.name.toLowerCase() === name.toLowerCase() && p.in === parameterIn
    )
  return parameters.findIndex((p) => p.name === name && p.in === parameterIn)
}
