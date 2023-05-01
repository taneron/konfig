import camelcase from 'camelcase'
import { Spec } from 'konfig-lib'
import { nameSchema } from './fix-progress'

export function validateSchemaName({
  name,
  spec,
}: {
  name: string
  spec: Spec['spec']
}) {
  const isCamelcase = camelcase(name, { pascalCase: true }) === name
  const isNonEmpty = nameSchema.safeParse(name).success
  const isUnique =
    spec.components === undefined ||
    spec.components.schemas === undefined ||
    !(name in spec.components.schemas)
  return isCamelcase && isNonEmpty && isUnique
}
