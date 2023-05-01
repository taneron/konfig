import { KonfigYamlGeneratorNames, KonfigYamlType } from '../KonfigYaml'

export const setPackageVersion = ({
  generatorConfig,
  version,
}: {
  generatorConfig: NonNullable<
    KonfigYamlType['generators'][KonfigYamlGeneratorNames]
  >
  version: string
}): string => {
  if ('packageVersion' in generatorConfig) {
    return (generatorConfig.packageVersion = version)
  }
  return (generatorConfig.version = version)
}
