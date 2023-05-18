import { Command, Flags } from '@oclif/core'
import { parseFilterFlag } from '../util/parseFilterFlag'
import { parseKonfigYaml } from '../util/parse-konfig-yaml'
import * as fs from 'fs'
import { KonfigYamlGeneratorNames, parseSpec } from 'konfig-lib'
import {
  generatorNameAsDisplayName,
  getPublishedPackageUrl,
} from '../util/generate-readme'
import clipboard from 'clipboardy'

export default class SlackMsg extends Command {
  static description = 'Generates a slack message '

  static examples = ['<%= config.bin %> <%= command.id %>']

  static flags = {
    generator: Flags.string({ name: 'generator', char: 'g', required: true }),
  }

  static args = [{ name: 'file' }]

  public async run(): Promise<void> {
    const { flags } = await this.parse(SlackMsg)
    const filter = parseFilterFlag(flags.generator)
    if (filter === null) this.error('Generator flag is required')
    const { generators, parsedKonfigYaml } = parseKonfigYaml({
      configDir: process.cwd(),
    })
    const specString = fs.readFileSync(parsedKonfigYaml.specPath, 'utf-8')
    const { spec } = await parseSpec(specString)
    const title = spec.info.title

    const firstLine = `@here ${title}'s ${filter
      .map((generatorName) => generatorNameAsDisplayName({ generatorName }))
      .join(', ')} ${filter.length > 1 ? 'SDKs' : 'SDK'} ${
      filter.length > 1 ? 'have' : 'has'
    } been published :tada:`

    const linksToSdks = filter
      .map((generatorName) => {
        const pkg = getPublishedPackageUrl({
          generatorName,
          konfigYaml: parsedKonfigYaml,
        })
        const version: string = (generators as any)[generatorName as any]
          .version
        return `- ${generatorNameAsDisplayName({
          generatorName,
        })} - ${version} (${pkg.packageManagerName}): ${pkg.url}`
      })
      .join('\n')
    const msg = firstLine + '\n\n' + linksToSdks
    this.log(msg)
    this.log('\n------------------------------------\n')
    clipboard.writeSync(msg)
    this.log('Copied to clipboard 📋')
  }
}
