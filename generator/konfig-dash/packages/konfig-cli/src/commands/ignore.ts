import { CliUx, Command, Flags } from '@oclif/core'
import * as fs from 'fs-extra'
import globby from 'globby'
import path from 'path'
import { parseKonfigYaml } from '../util/parse-konfig-yaml'

export default class Ignore extends Command {
  static description = 'Helper command for adding to .konfigignore'

  static examples = ['<%= config.bin %> <%= command.id %>']

  static flags = {
    glob: Flags.string({
      char: 'g',
      name: 'glob',
      description: 'Glob of paths to add to .konfigignore',
      required: true,
    }),
  }

  public async run(): Promise<void> {
    const { flags } = await this.parse(Ignore)

    const entries = await globby(flags.glob, { cwd: process.cwd() })
    const { parsedKonfigYaml } = parseKonfigYaml({ configDir: process.cwd() })
    const outputDirectories = Object.values(parsedKonfigYaml.generators).map(
      (config) => config.outputDirectory
    )
    for (const entry of entries) {
      const outputDirectory = outputDirectories.find(
        (outputDirectory) =>
          outputDirectory && entry.startsWith(outputDirectory)
      )
      if (outputDirectory === undefined) {
        CliUx.ux.warn(
          `Ignoring ${entry} because it does not exist any output directory`
        )
        continue
      }
      const konfigIgnorePath = path.join(outputDirectory, '.konfigignore')
      const konfigIgnore = readKonfigIgnore({ konfigIgnorePath })
      const ignoreLine = entry.replace(`${outputDirectory}/`, '')
      if (konfigIgnore.includes(ignoreLine)) {
        CliUx.ux.warn(
          `Ignoring ${entry} because it already exists in ${konfigIgnorePath}`
        )
        continue
      }
      konfigIgnore.push(ignoreLine)
      CliUx.ux.info(`Adding ${ignoreLine} to ${konfigIgnorePath}`)
      fs.writeFileSync(konfigIgnorePath, konfigIgnore.join('\n'))
    }
  }
}

function readKonfigIgnore({
  konfigIgnorePath,
}: {
  konfigIgnorePath: string
}): string[] {
  if (fs.existsSync(konfigIgnorePath))
    return fs.readFileSync(konfigIgnorePath, 'utf-8').split('\n')
  return []
}
