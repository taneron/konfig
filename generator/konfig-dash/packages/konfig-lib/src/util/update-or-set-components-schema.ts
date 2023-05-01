import { Spec, SchemaObject } from '../parseSpec'

export function updateOrSetComponentsSchema({
  schemaObject,
  spec,
  schemaName,
}: {
  spec: Spec['spec']
  schemaObject: SchemaObject
  schemaName: string
}) {
  if (spec.components === undefined) spec.components = {}
  if (spec.components.schemas === undefined) spec.components.schemas = {}
  spec.components.schemas[schemaName] = schemaObject
}
