import { CliUx } from '@oclif/core'
import { KonfigYamlType } from 'konfig-lib'
import { findNodeModulesBinPath } from './find-node-modules-bin-path'
import { getParentBranch } from './get-parent-branch'
import { simpleGit } from 'simple-git'
import * as shell from 'shelljs'
import semver from 'semver'

export async function detectReleaseType({
  cwd,
  specPath,
  baseBranchName,
}: {
  cwd: string
  specPath: string
  baseBranchName?: string
}): Promise<semver.ReleaseType> {
  const base = baseBranchName ? baseBranchName : getParentBranch()
  if (base === '')
    CliUx.ux.error(
      'Must be in Git repository and branched off of another branch to perform a diff.'
    )
  CliUx.ux.info(`Detected base branch: ${base}`)

  const isInGitHubAction = process.env['GITHUB_ACTIONS'] === 'true'
  if (isInGitHubAction) {
    CliUx.ux.info('Detected GitHub Action environment')
  }

  const opticPath = await findNodeModulesBinPath({
    name: 'optic',
    cwd,
  })

  if (specPath === undefined) CliUx.ux.error('Specify specPath konfig.yaml')
  CliUx.ux.info(
    `Picked up path to OpenAPI Spec at "./${specPath}" from konfig.yaml`
  )

  CliUx.ux.info(`Fetching and checking out "${base}" locally`)
  const git = simpleGit()
  await git.fetch()
  const currentBranch = isInGitHubAction
    ? (await git.log()).latest?.hash
    : await git.revparse(['--abbrev-ref', 'HEAD'])
  if (currentBranch === undefined)
    throw Error("Couldn't detect current branch name")
  CliUx.ux.info(`Detected current ref to be "${currentBranch}"`)
  CliUx.ux.action.start(`Checking out "${base}"`)
  await git.checkout(base)
  CliUx.ux.action.stop()
  CliUx.ux.action.start(`Checking out "${currentBranch}"`)
  await git.checkout(currentBranch)
  CliUx.ux.action.stop()

  // Detect breaking change
  CliUx.ux.action.start('Detecting potential breaking change')
  const command = `${opticPath} diff ${specPath} --check --base ${base}`
  const result = shell.exec(command)
  const releaseType: semver.ReleaseType = result.code === 1 ? 'major' : 'minor'
  CliUx.ux.action.stop()
  return releaseType
}
