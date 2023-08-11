import { Command } from '@oclif/core'
import axios from 'axios'
import { parseKonfigYaml } from '../util/parse-konfig-yaml'
import z from 'zod'
import { getPublishedPackageUrl } from '../util/generate-readme'
import semver from 'semver'
import { Transform } from 'stream'
import { Console } from 'console'

const npmPackageSchema = z.object({
  name: z.string(),
  versions: z.record(
    z.object({
      name: z.string(),
      version: z.string(),
      description: z.string(),
    })
  ),
})

const packageSchema = z.object({
  generator: z.string(),
  registryName: z.string(),
  packageName: z.string(),
  packageUrl: z.string(),
  versions: z
    .object({
      name: z.string(),
      version: z.string(),
      description: z.string(),
    })
    .array(),
})

type Package = z.infer<typeof packageSchema>

class TableRow {
  generatorName: string
  registryName: string
  packageName: string
  packageUrl: string
  version: string

  constructor({
    generatorName,
    registryName,
    packageName,
    packageUrl,
    version,
  }: {
    generatorName: string
    registryName: string
    packageName: string
    packageUrl: string
    version: string
  }) {
    this.generatorName = generatorName
    this.registryName = registryName
    this.packageName = packageName
    this.packageUrl = packageUrl
    this.version = version
  }
}

export default class Published extends Command {
  static description = 'Queries public package managers for published packages'

  static examples = ['<%= config.bin %> <%= command.id %>']

  static flags = {}

  static args = []

  public async run(): Promise<void> {
    await this.parse(Published)
    const { allGenerators, parsedKonfigYaml } = parseKonfigYaml({
      configDir: process.cwd(),
    })

    const packages: Package[] = []
    for (const [name, config] of allGenerators) {
      if (config.language === 'typescript') {
        const metadata = npmPackageSchema.parse(
          (await axios.get(`https://registry.npmjs.org/${config.npmName}`)).data
        )
        const versionsOrdered = Object.keys(metadata.versions).sort(
          semver.rcompare
        )
        packages.push({
          generator: name,
          packageName: metadata.name,
          registryName: 'npm',
          packageUrl: getPublishedPackageUrl({
            generatorName: config.language,
            generatorConfig: config,
            konfigYaml: parsedKonfigYaml,
          }).url,
          versions: versionsOrdered.map(
            (version) => metadata.versions[version]
          ),
        })
      } else if (config.language === 'python') {
        config.projectName
      }
    }

    const rows = packages.map((pkg) => {
      return new TableRow({
        generatorName: pkg.generator,
        registryName: pkg.registryName,
        packageName: pkg.packageName,
        packageUrl: pkg.packageUrl,
        version: pkg.versions[0].version,
      })
    })

    printTable(rows)
  }
}

function printTable(input: any[]) {
  // @see https://stackoverflow.com/a/67859384
  const ts = new Transform({
    transform(chunk, enc, cb) {
      cb(null, chunk)
    },
  })
  const logger = new Console({ stdout: ts })
  logger.table(input)
  const table = (ts.read() || '').toString()
  let result = ''
  for (let row of table.split(/[\r\n]+/)) {
    let r = row.replace(/[^┬]*┬/, '┌')
    r = r.replace(/^├─*┼/, '├')
    r = r.replace(/│[^│]*/, '')
    r = r.replace(/^└─*┴/, '└')
    r = r.replace(/'/g, ' ')
    result += `${r}\n`
  }
  console.log(result)
}
