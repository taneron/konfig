import { KonfigYamlGeneratorNames, KonfigYamlType } from '../KonfigYaml'

export const getPackageVersion = ({
  generatorConfig,
}: {
  generatorConfig: NonNullable<
    KonfigYamlType['generators'][KonfigYamlGeneratorNames]
  >
}): string => {
  if ('packageVersion' in generatorConfig) {
    return generatorConfig.packageVersion
  }
  return generatorConfig.version
}
