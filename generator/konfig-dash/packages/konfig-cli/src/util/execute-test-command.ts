import { CliUx } from '@oclif/core'
import execa, { ExecaSyncReturnValue, SyncOptions } from 'execa'
import { RequiredEnvironmentVariablesConfig, TestConfig } from 'konfig-lib'
import path from 'path'
import { parseKonfigYaml } from './parse-konfig-yaml'
import { parseFilterFlag } from './parseFilterFlag'

const validateRequiredEnvironmentVariables = (
  config: RequiredEnvironmentVariablesConfig
) => {
  if (config.requiredEnvironmentVariables === undefined) return
  for (const environmentVariable of config.requiredEnvironmentVariables) {
    if (!(environmentVariable in process.env))
      CliUx.ux.error(
        `Missing required environment variable: ${environmentVariable}`
      )
  }
}

export async function executeTestCommand({
  filterInput,
  sequence,
}: {
  filterInput?: string
  sequence: boolean
}) {
  const filter = parseFilterFlag(filterInput)
  const configDir = process.cwd()
  const { generators, common, additionalGenerators } = parseKonfigYaml({
    configDir,
  })
  validateRequiredEnvironmentVariables(common)
  const results: {
    generatorName: string
    result: ExecaSyncReturnValue<string>
  }[] = []
  const asyncResults: Promise<{
    generatorName: string
    result: ExecaSyncReturnValue<string>
  }>[] = []

  if (!sequence) CliUx.ux.log('Running tests in parallel')
  else CliUx.ux.log('Running tests sequentially')

  function runTest({
    test,
    outputDirectory,
    disabled,
    generatorName,
  }: {
    test?: TestConfig['test']
    outputDirectory?: string
    disabled?: boolean
    generatorName: string
  }) {
    if (filter !== null && !filter.includes(generatorName)) return
    if (disabled) return
    if (test === undefined) return
    if (outputDirectory === undefined)
      throw Error(
        `Generator "${generatorName}" must provide "outputDirectory" for "testScript" to work`
      )
    if (sequence)
      CliUx.ux.action.start(`Running tests for ${generatorName} SDK`)

    // verify environment variables are set if specified
    validateRequiredEnvironmentVariables(test)

    const commandOptions: SyncOptions = {
      cwd: path.join(configDir, outputDirectory),
      stdio: 'inherit',
      shell: true,
    }

    if (sequence) {
      // Sequential
      for (const idx in test.script) {
        const result = execa.commandSync(test.script[idx], commandOptions)
        if (parseInt(idx) == test.script.length - 1) {
          results.push({
            generatorName,
            result,
          })
        }
      }
    } else {
      // Parallel
      asyncResults.push(
        new Promise(async (resolve) => {
          for (const idx in test.script) {
            const result = await execa.command(test.script[idx], commandOptions)
            if (parseInt(idx) === test.script.length - 1) {
              resolve({ generatorName, result })
            }
          }
        })
      )
    }
    if (sequence) CliUx.ux.action.stop()
  }

  for (const [generatorName, generatorConfig] of [
    ...Object.entries(generators),
    ...(additionalGenerators ? Object.entries(additionalGenerators) : []),
  ]) {
    runTest({ ...generatorConfig, generatorName })
  }

  results.push(...(await Promise.all(asyncResults)))

  if (results.length === 0) {
    CliUx.ux.error('No tests were run')
  }

  let anyFailed: boolean = false
  for (const { result, generatorName } of results) {
    if (!result.failed) continue
    CliUx.ux.warn(`tests for ${generatorName} failed`)
  }
  if (anyFailed) CliUx.ux.error('Test failure occurred')

  // If we made it here then we successfully ran all tests
  CliUx.ux.info('Successfully ran all tests!')
}
