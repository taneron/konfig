import { JSONPath } from 'jsonpath-plus'
import { KonfigYamlType } from '../KonfigYaml'
import { Spec } from '../parseSpec'
import { recurseObject } from '../recurseObject'

export function fixCustomModifications({
  fixConfig,
  spec,
}: {
  fixConfig?: KonfigYamlType['fixConfig']
  spec: Spec['spec']
}): number {
  let updates = 0
  if (fixConfig?.modify) {
    for (const path in fixConfig.modify) {
      const results = JSONPath({ path, json: spec, resultType: 'all' })
      for (const { parent, parentProperty } of results) {
        parent[parentProperty] = fixConfig.modify[path]
        updates++
      }
    }
  }

  // Apply updates to all properties that match the property name and type
  if (fixConfig?.updateProperty) {
    recurseObject(spec, ({ value: schema }) => {
      // return if schema is not an object with the "type" property
      if (schema === null) return
      if (typeof schema !== 'object') return
      if (schema.type !== 'object') return
      if (schema.properties === undefined) return
      if (schema.properties === null) return
      if (typeof schema.properties !== 'object') return

      for (const propertyName in fixConfig.updateProperty) {
        const propertySchema = schema.properties[propertyName]
        if (propertySchema === undefined) continue
        if (propertySchema === null) continue
        if (typeof propertySchema !== 'object') continue
        for (const typeName in fixConfig.updateProperty[propertyName]) {
          if (propertySchema.type !== typeName) continue
          for (const property in fixConfig.updateProperty[propertyName][
            typeName
          ]) {
            propertySchema[property] =
              fixConfig.updateProperty[propertyName][typeName][property]
            updates++
          }
        }
      }
    })
  }

  if (fixConfig?.update) {
    for (const path in fixConfig.update) {
      const results = JSONPath({ path, json: spec })
      for (const value of results) {
        for (const property of Object.keys(fixConfig.update[path])) {
          value[property] = fixConfig.update[path][property]
          updates++
        }
      }
    }
  }
  return updates
}
