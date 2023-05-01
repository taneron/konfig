import { test } from '@oclif/test'
import { isJsonString, KonfigYamlInputType, KONFIG_YAML_NAME } from 'konfig-lib'
import { KONFIG_FOLDER_NAME } from '../../src/util/get-konfig-folder'
import { oasJsonDump } from '../../src/util/oas-json-dump'
import { PROGRESS_YAML_FILE_NAME } from '../../src/util/fix-progress'

import yaml from 'js-yaml'
import * as fs from 'fs-extra'
import * as os from 'os'
import * as path from 'path'

describe('fix', () => {
  describe('info description must be non-empty in progress.yaml to confirm using existing', () => {
    describe('splitit', () => {
      const { specAbsolutePath: jsonPath, testDir } = setup({
        specPath: 'splitit-swagger.json',
        progressPath: 'splitit-progress.yaml',
      })
      test
        .stdout()
        .stdin('Test Description\n', 1000)
        .command(['fix', '-k', testDir, '-Y'])
        .skip()
        .it('test', () => {
          const spec = fs.readFileSync(jsonPath, 'utf-8')
          expect(spec).toMatchSnapshot()
        })
    })
  })
  describe('fix redundant security requirements', () => {
    describe('splitit', () => {
      const { specAbsolutePath: jsonPath, testDir } = setup({
        specPath: 'splitit-swagger.json',
        progressPath: 'splitit-progress-with-description.yaml',
      })
      test
        .stdout()
        .command(['fix', '-k', testDir, '-Y'])
        .it('test', () => {
          const spec = fs.readFileSync(jsonPath, 'utf-8')
          expect(spec).toMatchSnapshot()
        })
    })
  })
  describe('writes same file type', () => {
    describe('json', () => {
      const { specAbsolutePath: jsonPath, testDir } = setup({
        specPath: 'same-file-type.json',
        progressPath: 'same-file-type-progress.yaml',
      })
      test
        .stdout()
        .command(['fix', '-k', testDir, '-Y'])
        .it('test', () => {
          const spec = fs.readFileSync(jsonPath, 'utf-8')
          expect(isJsonString(spec)).toBe(true)
          expect(typeof JSON.parse(spec)).toBe('object')
          expect(spec).toMatchSnapshot()
          expect(oasJsonDump(spec)).toMatchSnapshot()
        })
    })
    describe('yaml', () => {
      const { specAbsolutePath: yamlPath, testDir } = setup({
        specPath: 'same-file-type.yaml',
        progressPath: 'same-file-type-progress.yaml',
      })
      test
        .stdout()
        .command(['fix', '-k', testDir, '-Y'])
        .it('test', () => {
          const spec = fs.readFileSync(yamlPath, 'utf-8')
          expect(() => yaml.load(spec)).not.toThrow()
        })
    })
  })
  describe('empty object as example ignores object-with-no-properties', () => {
    const { specAbsolutePath, testDir } = setup({
      specPath: 'empty-object-ignore-object-with-no-properties.json',
      progressPath:
        'empty-object-ignore-object-with-no-properties-progress.yaml',
    })
    test
      .stdout()
      .command(['fix', '-k', testDir, '-Y'])
      .it('test', () => {
        const spec = fs.readFileSync(specAbsolutePath, 'utf-8')
        expect(spec).toMatchSnapshot()
      })
  })
})

function setup({
  specPath,
  progressPath,
}: {
  specPath: string
  progressPath: string
}): {
  specAbsolutePath: string
  testDir: string
} {
  const testDir = path.join(
    os.tmpdir(),
    'konfig-cli-fix-test-dir',
    new Date().getTime().toString()
  )

  // Reset
  fs.rmSync(testDir, { recursive: true, force: true })
  fs.ensureDirSync(testDir)

  const konfigYaml: KonfigYamlInputType = {
    specPath,
    generators: {
      typescript: {
        outputDirectory: 'typescript',
        npmName: 'acme-test-sdk',
        clientName: 'Acme',
        version: '1.0.0',
        git: {
          userId: 'konfig-dev',
          repoId: 'acme-sdks',
        },
      },
    },
  }
  const konfigYamlPath = path.join(testDir, KONFIG_YAML_NAME)

  fs.writeFileSync(konfigYamlPath, yaml.dump(konfigYaml))
  const hiddenKonfigFolderPath = path.join(testDir, KONFIG_FOLDER_NAME)
  fs.ensureDirSync(hiddenKonfigFolderPath)
  fs.writeFileSync(
    path.join(hiddenKonfigFolderPath, PROGRESS_YAML_FILE_NAME),
    fs.readFileSync(path.join(__dirname, 'fix', progressPath), 'utf-8')
  )

  // Write OAS
  const inputPath = path.join(__dirname, 'fix', specPath)
  const oas = fs.readFileSync(inputPath, 'utf-8')
  const outputPath = path.join(testDir, specPath)
  fs.writeFileSync(outputPath, oas)
  return { specAbsolutePath: outputPath, testDir }
}
