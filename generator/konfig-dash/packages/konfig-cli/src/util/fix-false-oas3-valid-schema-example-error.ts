import { recurseObject, Spec } from 'konfig-lib'

// Global cache for checking if we've seen the value for this id
const idFieldCache: Record<string, boolean> = {}

// Handle annoying issue where oas3-valid-schema-example throws false error if
// you have an "id" field with the same value in any examples in the OAS.
// We handle this by essentially finding all cases and makin them unique
// https://github.com/stoplightio/spectral/issues/2081
export function fixFalseOas3ValidSchemaExample({
  spec,
}: {
  spec: Spec['spec']
}): void {
  recurseObject(spec, ({ value, path }) => {
    if (typeof value !== 'object' || Array.isArray(value)) return
    if (!path.includes('example') && !path.includes('examples')) return
    if (!('id' in value)) return
    const id = value['id']
    if (typeof id !== 'string') return
    if (!idFieldCache[id]) {
      idFieldCache[id] = true
    } else {
      // Detected "id" field with same value as another id field so we have to replace it

      // Find a new ID
      let newId = `${id}X`
      while (idFieldCache[newId]) newId = `${newId}X`

      value['id'] = newId
    }
  })
}
