import * as os from 'node:os'
import * as path from 'node:path'
import * as fs from 'node:fs'

const ARCHIVE_DIR_NAME = 'archive'

export const PROGRESS_PATH = path.join(
  getKonfigHomeDirectoryPath({}),
  'progress.json'
)

export type HomeDirParams = {
  mode?: 'dev' | 'prod' | 'test'
}

function homeDirName({ mode }: HomeDirParams) {
  if (mode === undefined || mode === 'prod') return '.konfig'
  if (mode === 'dev') return '.konfig-dev'
  if (mode === 'test') return '.konfig-test'
  throw Error(`Unexpected mode: ${mode}`)
}

export function getKonfigHomeDirectoryPath(params: HomeDirParams): string {
  return path.join(os.homedir(), homeDirName(params))
}

export function getArchiveDirectoryPath(params: HomeDirParams): string {
  return path.join(getKonfigHomeDirectoryPath(params), ARCHIVE_DIR_NAME)
}

export function ensureConfigSetup(params: HomeDirParams): void {
  if (!fs.existsSync(getKonfigHomeDirectoryPath(params)))
    fs.mkdirSync(getKonfigHomeDirectoryPath(params), { recursive: true })
}
