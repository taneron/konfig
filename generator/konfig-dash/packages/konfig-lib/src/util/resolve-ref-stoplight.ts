import { Resolver } from '@stoplight/json-ref-resolver'
import { OpenAPI } from 'openapi-types'
import { ReferenceObject } from '../resolveRef'

const resolver = new Resolver()
/**
 * @deprecated Use resolveRef instead as this version does not allow you to
 * modify spec in-place
 */
export const resolveRefStoplight = async <O extends object>({
  refOrObject,
  source,
}: {
  refOrObject: ReferenceObject | O
  source: OpenAPI.Document
}): Promise<O> => {
  if ('$ref' in refOrObject) {
    return (await resolver.resolve(source, { jsonPointer: refOrObject.$ref }))
      .result
  }
  return refOrObject
}
