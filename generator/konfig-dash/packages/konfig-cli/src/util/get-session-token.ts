import * as fs from 'node:fs'
import { HomeDirParams } from './ensure-config-setup'
import { getSessionTokenPath } from './get-session-token-path'
export function getSessionToken(params: HomeDirParams): string | null {
  if (!fs.existsSync(getSessionTokenPath(params))) return null
  return fs.readFileSync(getSessionTokenPath(params), 'utf-8')
}
