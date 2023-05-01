import * as shell from 'shelljs'

export function getGitRepositoryName(): string {
  const repoName = shell.exec(
    'basename -s .git `git config --get remote.origin.url`'
  )
  return repoName.stdout
}
