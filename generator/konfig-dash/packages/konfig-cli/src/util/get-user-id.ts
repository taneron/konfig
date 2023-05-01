import * as fs from 'node:fs'
import { HomeDirParams } from './ensure-config-setup'
import { getUserIdPath } from './get-user-id-path'

export function getUserId(params: HomeDirParams): string | null {
  if (!fs.existsSync(getUserIdPath(params))) return null
  return fs.readFileSync(getUserIdPath(params), 'utf-8')
}
