import { test } from '@oclif/test'
import {
  KonfigYamlInputType,
  KONFIG_API_TEST_ENVIRONMENT_NAME,
  KONFIG_YAML_NAME,
} from 'konfig-lib'
import { getKonfigHomeDirectoryPath } from '../../src/util/ensure-config-setup'

import yaml from 'js-yaml'
import * as fs from 'fs-extra'
import * as os from 'os'
import * as path from 'path'

describe('generate', () => {
  const testDir = path.join(os.tmpdir(), 'konfig-cli-generate-test-dir')
  fs.ensureDirSync(testDir)

  const outputPath = path.join(testDir, 'works-for-large-OAS-files.yaml')

  // Reset konfig test directory
  const konfigHomePath = getKonfigHomeDirectoryPath({ mode: 'test' })
  fs.rmSync(konfigHomePath, { recursive: true, force: true })

  // Write konfig.yaml
  setupKonfigYaml({ testDir })

  // Write big OAS file to temp path
  setup({ testDir })

  let testCommand = test
    .stdout()
    .command(['generate', '-t', '-s', outputPath, '-c', testDir])

  if (!process.env[KONFIG_API_TEST_ENVIRONMENT_NAME])
    testCommand = testCommand.skip()
  testCommand.it('works for large OAS files', () => {})
})

function setupKonfigYaml({ testDir }: { testDir: string }) {
  const konfigYaml: KonfigYamlInputType = {
    specPath: 'big-oas.yaml',
    generators: {
      typescript: {
        outputDirectory: 'typescript',
        npmName: 'acme-test-sdk',
        version: '1.0.0',
        clientName: 'Acme',
        git: {
          userId: 'konfig-dev',
          repoId: 'acme-sdks',
        },
      },
    },
  }
  const konfigYamlPath = path.join(testDir, KONFIG_YAML_NAME)
  fs.writeFileSync(konfigYamlPath, yaml.dump(konfigYaml))
}

function setup({ testDir }: { testDir: string }) {
  const bigOasInputPath = path.join(__dirname, 'generate', 'nuitee-oas.yaml')
  const bigOas = fs.readFileSync(bigOasInputPath, 'utf-8')
  const bigOasOutputPath = path.join(testDir, 'big-oas.yaml')
  fs.writeFileSync(bigOasOutputPath, bigOas)
  return { bigOasOutputPath }
}
