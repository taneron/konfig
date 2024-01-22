import { Octokit } from '@octokit/rest'
import { githubGetKonfigYamlsSafe } from './github-get-konfig-yamls-safe'
import { githubGetRepository } from './github-get-repository'

export async function githubGetKonfigYaml({
  owner,
  repo,
  octokit,
}: {
  owner: string
  repo: string
  octokit: Octokit
}) {
  const { data: repoData } = await githubGetRepository({
    owner,
    repo,
    octokit,
  })
  const defaultBranch = repoData.default_branch
  const konfigYamls = await githubGetKonfigYamlsSafe({
    owner,
    repo,
    octokit,
    defaultBranch,
  })

  // TODO: handle multiple konfig.yaml
  const konfigYaml = konfigYamls[0]

  if (konfigYaml === undefined) throw Error("Couldn't find konfig.yaml")
  return konfigYaml
}
