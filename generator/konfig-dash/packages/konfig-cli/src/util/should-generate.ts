import { KonfigYamlType, KonfigYamlInputType } from 'konfig-lib'
import { filterIncludesGenerator } from './filter-includes-generator'

export const shouldGenerate = <
  Generator extends keyof KonfigYamlInputType['generators']
>({
  generatorName,
  generators,
  generatorFilter,
}: {
  generators: KonfigYamlType['generators']
  generatorFilter: string[] | null
  generatorName: Generator
}): NonNullable<KonfigYamlType['generators'][Generator]> | undefined => {
  const generatorConfig = generators[generatorName]
  if (
    generatorConfig !== undefined &&
    filterIncludesGenerator(generatorFilter, generatorName)
  ) {
    return generatorConfig
  }
}
