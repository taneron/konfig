import { Command, Flags } from '@oclif/core'
import { parseKonfigYaml } from '../util/parse-konfig-yaml'
import { detectReleaseType } from '../util/detect-release-type'

export default class DetectBreakingChange extends Command {
  static description =
    'Automatically finds base branch and detects if there is a breaking change.'

  static examples = ['<%= config.bin %> <%= command.id %>']

  static flags = {
    mainBranch: Flags.string({
      char: 'm',
      name: 'mainBranch',
      required: true,
    }),

    specPath: Flags.file({
      char: 's',
      name: 'specPath',
      exists: true,
      required: true,
    }),
  }

  static args = []

  public async run(): Promise<void> {
    const { flags } = await this.parse(DetectBreakingChange)

    const result = await detectReleaseType({
      cwd: this.config.root,
      specPath: flags.specPath,
      baseBranchName: flags.mainBranch,
    })

    if (result === 'major') {
      this.error('Breaking change detected', { exit: 1 })
    }
    this.log('No breaking change detected')
  }
}
