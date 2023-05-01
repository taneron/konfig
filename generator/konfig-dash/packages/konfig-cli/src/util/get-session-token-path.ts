import {
  ensureConfigSetup,
  getKonfigHomeDirectoryPath,
  HomeDirParams,
} from './ensure-config-setup'

export function getSessionTokenPath(params: HomeDirParams): string {
  return `${getKonfigHomeDirectoryPath(params)}/session.txt`
}
