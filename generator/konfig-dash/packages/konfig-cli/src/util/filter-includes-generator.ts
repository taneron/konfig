import { KonfigYamlType } from 'konfig-lib'

export const filterIncludesGenerator = (
  filter: string[] | null,
  generator: keyof KonfigYamlType['generators']
) => {
  if (filter === null) return true
  return filter.includes(generator)
}
