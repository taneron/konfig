import { KonfigYamlGeneratorNames, KonfigYamlType } from '../KonfigYaml'

export const getPackageVersion = ({
  generatorConfig,
}: {
  generatorConfig: NonNullable<
    KonfigYamlType['generators'][KonfigYamlGeneratorNames]
  >
}): string => {
  return generatorConfig.version
}
