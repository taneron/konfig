import * as shell from 'shelljs'

export function isGitDirectoryClean() {
  return shell.exec('git diff --quiet HEAD').code === 0
}
