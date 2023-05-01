import { OpenAPIV3, OpenAPIV3_1 } from 'openapi-types'
import { Spec } from '../parseSpec'
import { merge } from 'merge-anything'
import { Json } from './json-schema'
import { getExampleJsonsFromMediaObject } from './get-example-jsons-from-media-object'

export type MediaObject =
  | OpenAPIV3.MediaTypeObject
  | OpenAPIV3_1.MediaTypeObject

export type ExampleObject = OpenAPIV3.ExampleObject | OpenAPIV3_1.ExampleObject
export async function getExampleJsonFromMediaObject({
  mediaObject,
  spec,
}: {
  mediaObject: MediaObject
  spec: Spec
}): Promise<Json | undefined> {
  const examples = await getExampleJsonsFromMediaObject({ mediaObject, spec })
  if (examples === undefined) return
  const mergedExample = examples.reduce((a, b) => merge(a, b))
  return mergedExample
}
