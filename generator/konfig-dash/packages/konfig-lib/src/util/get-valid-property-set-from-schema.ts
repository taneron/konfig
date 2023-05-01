import { SchemaObject, Spec } from '../parseSpec'
import { ReferenceObject, resolveRef } from '../resolveRef'

type Merged = {
  properties: {
    name: string
    schema: SchemaObject | ReferenceObject
  }[]
  required: string[]
}

/**
 * Gathers "valid" top-level property names from a SchemaObject. Handles anyOf /
 * allOf / oneOf.
 * "Valid" means it will randomly choose some set of properties based on anyOf/allOf/oneOf
 */
export function getValidPropertySetFromSchema({
  schema: schemaOrRef,
  spec,
  merged,
}: {
  schema: SchemaObject | ReferenceObject
  spec: Spec
  merged?: Merged
}): Merged {
  const schema = resolveRef({ refOrObject: schemaOrRef, $ref: spec.$ref })
  if (merged === undefined) merged = { properties: [], required: [] }
  if (schema.properties) {
    const properties = Object.keys(schema.properties).map((name) => {
      if (schema.properties === undefined) throw Error()
      return { name, schema: schema.properties[name] }
    })
    merged.properties.push(...properties)
    if (schema.required) {
      merged.required.push(...schema.required)
      // remove duplicates
      merged.required = Array.from(new Set(merged.required))
    }
    return merged
  }

  // anyOf means just choose the one that has the largest property set
  if (schema.anyOf) {
    let largestNumberOfProperties = -1
    let maxIndex = -1
    for (let index = 0; index < schema.anyOf.length; index++) {
      const merged = getValidPropertySetFromSchema({
        schema: schema.anyOf[index],
        spec,
      })
      if (merged.properties.length > largestNumberOfProperties) {
        maxIndex = index
        largestNumberOfProperties = merged.properties.length
      }
    }
    getValidPropertySetFromSchema({
      schema: schema.anyOf[maxIndex],
      spec,
      merged,
    })
  }
  // allOf means all schemas must apply at the same time so stack them
  if (schema.allOf)
    schema.allOf.forEach((schema) =>
      getValidPropertySetFromSchema({ schema, spec, merged })
    )
  // oneOf means just choose a random one so lets just pick the first one
  if (schema.oneOf) {
    let largestNumberOfProperties = -1
    let maxIndex = -1
    for (let index = 0; index < schema.oneOf.length; index++) {
      const merged = getValidPropertySetFromSchema({
        schema: schema.oneOf[index],
        spec,
      })
      if (merged.properties.length > largestNumberOfProperties) {
        maxIndex = index
        largestNumberOfProperties = merged.properties.length
      }
    }
    getValidPropertySetFromSchema({
      schema: schema.oneOf[maxIndex],
      spec,
      merged,
    })
  }
  return merged
}
