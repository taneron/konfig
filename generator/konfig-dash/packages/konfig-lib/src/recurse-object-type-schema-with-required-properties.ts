import { recurseObject } from './recurseObject'

export const recurseObjectTypeSchemaWithRequiredProperties: typeof recurseObject =
  (obj, options) => {
    recurseObject(obj, ({ value: schema, key, path }) => {
      // object type schema with required properties
      if (typeof schema !== 'object') return
      if (!('type' in schema)) return
      if (schema['type'] !== 'object') return
      if (!('required' in schema)) return
      if (schema['required'] === undefined) return
      if (!('properties' in schema)) return
      if (schema['properties'] === undefined) return
      options({ key, path, value: schema })
    })
  }
