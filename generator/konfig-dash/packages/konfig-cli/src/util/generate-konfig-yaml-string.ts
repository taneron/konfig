import { KonfigYamlInputType, yamlLanguageServerComment } from 'konfig-lib'
import * as yaml from 'js-yaml'

export function generateKonfigYamlString(value: KonfigYamlInputType) {
  const stringified = yaml.dump(value)
  return `${yamlLanguageServerComment}\n\n${stringified}`
}
