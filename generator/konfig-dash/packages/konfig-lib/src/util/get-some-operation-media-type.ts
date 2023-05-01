import { Operation } from '../forEachOperation'
import { MediaTypeObject, RequestBodyObject, Spec } from '../parseSpec'
import { resolveRef } from '../resolveRef'
import { getOperationRequestBody } from './get-operation-request-body'

export function getSomeOperationMediaType({
  operation,
  spec,
}: {
  operation: Operation
  spec: Spec
}): MediaTypeObject | undefined {
  const requestBody = getOperationRequestBody({ operation, spec })
  if (requestBody === undefined) return
  for (const key in requestBody.content) {
    if (requestBody.content[key]) return requestBody.content[key]
  }
}
