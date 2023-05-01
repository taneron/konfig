import {
  getKonfigHomeDirectoryPath,
  HomeDirParams,
} from './ensure-config-setup'

export function getUserIdPath(params: HomeDirParams): string {
  return `${getKonfigHomeDirectoryPath(params)}/user.txt`
}
