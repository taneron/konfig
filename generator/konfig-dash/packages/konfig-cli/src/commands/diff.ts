import { Command } from '@oclif/core'
import execa from 'execa'
import { findNodeModulesBinPath } from '../util/find-node-modules-bin-path'

export default class Diff extends Command {
  static description =
    'Generate diff between OAS specs (https://github.com/opticdev/optic)'
  static examples = ['<%= config.bin %> <%= command.id %>']
  static strict = false

  public async run(): Promise<void> {
    const { argv } = await this.parse(Diff)
    const pathToOptic = await findNodeModulesBinPath({
      name: 'optic',
      cwd: this.config.root,
    })
    try {
      execa.sync(pathToOptic, ['diff', ...argv], {
        stdio: 'inherit',
      })
    } catch {
      process.exit(1)
    }
  }
}
