import { CliUx, Command, Flags } from '@oclif/core'
import * as fs from 'node:fs'
import {
  getKonfigHomeDirectoryPath,
  HomeDirParams,
} from '../util/ensure-config-setup'
import { getSessionTokenPath } from '../util/get-session-token-path'
import { getUserIdPath } from '../util/get-user-id-path'

export default class Logout extends Command {
  static description = 'Logout of Konfig'

  static examples = ['<%= config.bin %> <%= command.id %>']

  static flags = {
    dev: Flags.boolean({ char: 'd', hidden: true }),
  }

  public async run(): Promise<void> {
    const { flags } = await this.parse(Logout)
    const homeParams: HomeDirParams = { mode: flags.dev ? 'dev' : 'prod' }

    if (!fs.existsSync(getKonfigHomeDirectoryPath(homeParams)))
      CliUx.ux.error('Not logged in')
    fs.rmSync(getSessionTokenPath(homeParams))
    fs.rmSync(getUserIdPath(homeParams))
    CliUx.ux.info('Successfully logged out')
  }
}
