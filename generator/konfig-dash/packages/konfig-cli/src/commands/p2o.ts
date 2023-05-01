import { Command, Flags } from '@oclif/core'
import p2o from 'konfig-postman-to-openapi'

export default class P2O extends Command {
  static description = 'Convert Postman Collection to OpenAPI Spec'

  static examples = ['<%= config.bin %> <%= command.id %>']
  static strict = false

  static flags = {
    p: Flags.file({
      name: 'postman',
      char: 'p',
      description: 'Path to Postman Collection',
      exists: true,
      required: true,
    }),
    o: Flags.file({
      name: 'openapi',
      char: 'o',
      description: 'Path to output OpenAPI Specification',
      required: true,
    }),
  }
  public async run(): Promise<void> {
    const { flags } = await this.parse(P2O)
    await p2o(flags.p, flags.o)
  }
}
