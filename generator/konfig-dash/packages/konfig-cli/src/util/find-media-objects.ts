import {
  getOperations,
  MediaObject,
  ReferenceObject,
  resolveRef,
  Spec,
} from 'konfig-lib'

export function findMediaObjects({ spec }: { spec: Spec }) {
  const mediaObjectOrRefs: {
    media: MediaObject
    type: 'request' | 'response'
  }[] = []
  const operations = getOperations({ spec: spec.spec })

  // Request Body
  for (const { operation } of operations) {
    if (operation.requestBody === undefined) continue
    const requestBody = resolveRef({
      refOrObject: operation.requestBody,
      $ref: spec.$ref,
    })
    for (const media of Object.keys(requestBody.content)) {
      const mediaObjectOrRef = requestBody.content[media]
      mediaObjectOrRefs.push({ media: mediaObjectOrRef, type: 'request' })
    }
  }

  // Responses
  for (const { operation, path, method } of operations) {
    for (const statusCode of Object.keys(operation.responses)) {
      const responseObjectOrRef = operation.responses[statusCode]
      const responseObject = resolveRef({
        refOrObject: responseObjectOrRef,
        $ref: spec.$ref,
      })
      if (responseObject.content === undefined) continue
      for (const media of Object.keys(responseObject.content)) {
        const mediaObjectOrRef = responseObject.content[media]
        mediaObjectOrRefs.push({ media: mediaObjectOrRef, type: 'response' })
      }
    }
  }
  return mediaObjectOrRefs
}
