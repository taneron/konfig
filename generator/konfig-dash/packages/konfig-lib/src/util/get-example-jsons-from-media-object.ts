import { Spec } from '../parseSpec'
import { Json } from './json-schema'
import { MediaObject } from './get-example-json-from-media-object'
import { resolveRef } from '../resolveRef'

/**
 * Get example JSONs from a media object
 * @param mediaObject
 * @param spec
 * @returns example JSONs
 */
export async function getExampleJsonsFromMediaObject({
  mediaObject,
  spec: { spec, $ref },
}: {
  mediaObject: MediaObject
  spec: Spec
}): Promise<Json[] | undefined> {
  const examples: any[] = []
  if (mediaObject.schema !== undefined) {
    const schemaObject = resolveRef({ refOrObject: mediaObject.schema, $ref })
    if ('example' in schemaObject && schemaObject.example !== undefined)
      examples.push(schemaObject.example)
  }
  if (mediaObject.example) examples.push(mediaObject.example)
  if (mediaObject.examples)
    examples.push(
      ...(await Promise.all(
        Object.values(mediaObject.examples)
          .map((ex) =>
            resolveRef({
              refOrObject: ex,
              $ref,
            })
          )
          .map((ex) => ex.value)
      ))
    )
  if (examples.length === 0) return
  return examples
}
