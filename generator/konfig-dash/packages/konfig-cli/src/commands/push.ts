import { CliUx, Command, Flags } from '@oclif/core'
import axios from 'axios'
import * as fs from 'fs-extra'
import { PushRequestBodyType, PushResponseBody } from 'konfig-openapi-spec'

export default class Push extends Command {
  static description = 'Pushes an OpenAPI Spec to an SDK repository'

  static examples = ['<%= config.bin %> <%= command.id %>']

  static flags = {
    owner: Flags.string({
      name: 'owner',
      char: 'o',
      description: 'GitHub Owner of SDK Repository',
      required: true,
    }),
    repo: Flags.string({
      name: 'repo',
      char: 'r',
      description: 'Name of GitHub SDK Repository',
      required: true,
    }),
    spec: Flags.file({
      name: 'spec',
      char: 's',
      description: 'Path to OpenAPI Specification file',
      exists: true,
      required: true,
    }),
    directory: Flags.directory({
      exists: true,
      name: 'directory',
      char: 'x',
    }),
    dev: Flags.boolean({ char: 'd', hidden: true }),
  }

  public async run(): Promise<void> {
    const { flags } = await this.parse(Push)

    const spec = fs.readFileSync(flags.spec, 'utf-8')

    const url = flags.dev
      ? 'http://localhost:8911/push'
      : 'https://api.konfigthis.com/push'

    const body: PushRequestBodyType = {
      spec,
      gitHub: {
        owner: flags.owner,
        repo: flags.repo,
      },
      directory: flags.directory,
    }

    const suffix = `${flags.spec} to https://github.com/${flags.owner}/${flags.repo}`

    CliUx.ux.action.start(`Pushing ${suffix}`)
    const result = await axios.post(url, body)
    CliUx.ux.action.stop()

    if (result.status === 200) {
      const response = PushResponseBody.parse(result.data)
      if (response.status === 'created-pr') {
        CliUx.ux.info(`✅ Successfully pushed ${suffix}`)
        CliUx.ux.info(`🔗 Pull Request ${response.link}`)
      }
      if (response.status === 'no-diff') {
        CliUx.ux.info(`👍 No difference detected`)
      }
    }
  }
}
