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
  return (generatorConfig.version = version)
}
