import { yamlDump } from 'konfig-lib'
export const order = [
  'openapi',
  'info',
  'servers',
  'tags',
  'paths',
  'components',
  'summary',
  'operationId',
  'security',
  'title',
  'description',
  'version',
  'parameters',
  'requestBody',
  'responses',
]
export function oasYamlDump(obj: any) {
  return yamlDump({ obj, order })
}
