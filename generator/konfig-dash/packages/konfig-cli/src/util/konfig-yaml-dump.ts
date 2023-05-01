import { yamlDump } from 'konfig-lib'
const order = [
  'outputDirectory',
  'specPath',
  'requiredEnvironmentVariables',
  'generators',
  'disabled',
  'version',
  'outputDirectory',
]
export function konfigYamlDump(obj: any) {
  return yamlDump({ obj, order })
}
