import {
  isSchemaExamplePossibleIncorrectDataType,
  recurseObject,
  Spec,
} from 'konfig-lib'

export function hasSchemaWithPossibleIncorrectDataType({
  spec,
}: {
  spec: Spec['spec']
}): {
  type: 'string'
  example: string
} | null {
  let foundSchemaWithPotentiallyIncorrectType = null
  recurseObject(spec, ({ value }) => {
    if (
      isSchemaExamplePossibleIncorrectDataType({ schema: value }).length === 0
    )
      return
    foundSchemaWithPotentiallyIncorrectType = value
  })
  return foundSchemaWithPotentiallyIncorrectType
}
