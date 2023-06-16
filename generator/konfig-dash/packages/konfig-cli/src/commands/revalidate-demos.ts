import { Command, Flags } from '@oclif/core'
import axios from 'axios'

function getDemoApiUrl({ dev }: { dev: boolean }) {
  if (dev) return 'http://localhost:3000/api/revalidate-demos'
  return 'https://demo.konfigthis.com/api/revalidate-demos'
}

export default class RevalidateDemos extends Command {
  static description =
    'Revalidates demos for a particular organization and portal ID. This is required to ensure that the demo portal renders the latest demos from the demo repository.'

  static examples = ['<%= config.bin %> <%= command.id %>']

  static flags = {
    organizationId: Flags.string({
      char: 'o',
      required: true,
      description: 'Organization ID',
    }),
    portalId: Flags.string({
      char: 'p',
      required: true,
      description: 'Portal ID',
    }),
    dev: Flags.boolean({
      char: 'd',
      hidden: true,
      description: 'Set true to target localhost',
    }),
  }

  static args = [{ name: 'file' }]

  public async run(): Promise<void> {
    const { flags } = await this.parse(RevalidateDemos)
    const url = getDemoApiUrl({ dev: flags.dev })
    this.log(`Revalidating Demos at ${url}`)
    const result = await axios.post(url, {
      organizationId: flags.organizationId,
      portalId: flags.portalId,
    })
    if (result.data['revalidated']) {
      this.log(
        `Successfully revalidated demos at ${flags.organizationId}/${flags.portalId}`
      )
      this.log('Paths Revalidated:')
      this.log(result.data['pathsRevalidated'].join('\n'))
    } else {
      this.error(
        `Failed to revalidate ${flags.organizationId}/${flags.portalId}: "${result.data}"`
      )
    }
  }
}
