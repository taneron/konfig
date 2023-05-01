import {
  generateSchemaObjectFromJson,
  getExampleJsonsFromMediaObject,
  getIgnore,
  isObjectTypeSchemaWithNoProperties,
  mergeSchemaObject,
  OBJECT_WITH_NO_PROPERTIES_RULE_NAME,
  resolveRef,
  SchemaOrReference,
  Spec,
} from 'konfig-lib'
import { getOasVersion } from 'konfig-lib/dist/util/get-oas-version'
import { findMediaObjects } from './find-media-objects'

export async function fixObjectWithNoProperties({
  spec,
}: {
  spec: Spec
}): Promise<number> {
  let numberOfObjectsWithNoPropertiesFixed = 0

  // Object with no properties
  // Check ignore rule first
  // Note:
  // Looks like using resolveRefStoplight is problematic because it doesn't
  // allow you to edit in-place objects
  const objectWithNoPropertiesIgnored = getIgnore({ spec: spec.spec })[
    OBJECT_WITH_NO_PROPERTIES_RULE_NAME
  ]

  const mediaObjectsOrRefs = findMediaObjects({ spec })
  for (const { media, type } of mediaObjectsOrRefs) {
    const mediaObject = resolveRef({
      refOrObject: media,
      $ref: spec.$ref,
    })
    if (mediaObject.schema === undefined) continue

    // Its much more common for responses to have incorrect values so lets skip
    // if spec is ignoring objects with no properties
    if (objectWithNoPropertiesIgnored && type === 'response') continue

    const schema = resolveRef({
      refOrObject: mediaObject.schema,
      $ref: spec.$ref,
    })
    if (!isObjectTypeSchemaWithNoProperties({ schema })) continue
    const examples = await getExampleJsonsFromMediaObject({
      mediaObject,
      spec: spec,
    })
    if (examples === undefined) continue
    numberOfObjectsWithNoPropertiesFixed++
    const exampleSchemaObjects: SchemaOrReference[] = examples.map((example) =>
      generateSchemaObjectFromJson({
        json: example,
        version: getOasVersion({ spec: spec.spec }),
      })
    )
    const mergedSchemaObject = exampleSchemaObjects.reduce((a, b) =>
      mergeSchemaObject({ a, b })
    )
    Object.assign(schema, mergedSchemaObject)
  }
  return numberOfObjectsWithNoPropertiesFixed
}
