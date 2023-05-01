import * as inquirer from 'inquirer'
import boxen from 'boxen'
import { Operation, HttpMethods, Spec, getOperations } from 'konfig-lib'
import { Progress } from './fix-progress'
import { operationIdSchema } from 'konfig-lib'
import { inquirerConfirm } from './inquirer-confirm'
import { logOperationDetails } from './log-operation-details'
import camelcase from 'camelcase'

function updateOperationId({
  operation,
  operationId,
  method,
  path,
  progress,
}: {
  operation: Operation
  path: string
  method: HttpMethods
  operationId: string
  progress: Progress
}) {
  operation.operationId = operationId
  progress.saveOperationId({ path, method, operationId })
}

async function updateOperationTag({
  spec,
  operation,
  progress,
  path,
  method,
}: {
  spec: Spec['spec']
  operation: Operation
  path: string
  method: HttpMethods
  progress: Progress
}) {
  const { tag } = await inquirer.prompt<{ tag: string }>([
    {
      type: 'list',
      name: 'tag',
      choices: spec.tags,
      message: 'Choose an existing tag',
    },
  ])
  operation.tags = [tag]
  progress.saveOperationTag({ path, method, operationTag: tag })
}

function generatePrefix({ operation }: { operation: Operation }) {
  if (operation.tags === undefined) throw Error('Tags is empty')
  const tag = operation.tags[0]
  const prefix = `${camelcase(tag, { pascalCase: true })}_`
  return {
    prefix,
    generateOperationId: (suffix: string) => `${prefix}${suffix}`,
  }
}

export async function fixOperationIds({
  spec,
  progress,
  alwaysYes,
}: {
  spec: Spec['spec']
  progress: Progress
  alwaysYes: boolean
}): Promise<number> {
  let numberOfUpdatedOperationIds = 0
  if (spec.paths === undefined) return numberOfUpdatedOperationIds
  if (spec.tags === undefined || spec.tags.length === 0) {
    throw Error('TODO')
  }
  const operations = getOperations({ spec })
  for (const { operation, path, method } of operations) {
    if (operation.operationId !== undefined) {
      const result = operationIdSchema.safeParse(operation.operationId)
      if (result.success) continue
      console.log(
        boxen(
          `Detected improperly named operation ID.\nReason:\n - ${result.error.issues
            .map((issue) => issue.message)
            .join('\n - ')}`,
          {
            title: 'Improper OperationID Detected',
            padding: 1,
            borderColor: 'red',
          }
        )
      )
    }
    if (operation.tags === undefined || operation.tags.length === 0) {
      updateOperationTag({ spec, operation, progress, path, method })
    }
    numberOfUpdatedOperationIds++
    const { generateOperationId } = generatePrefix({ operation })
    const operationsWithId = operations
      .map((o) => o.operation)
      .filter((operation) => operation.operationId !== undefined)
    if (operationsWithId.length > 5) {
      console.log(
        boxen(
          operationsWithId
            .map((operation) => operation.operationId)
            .slice(operationsWithId.length - 5)
            .join('\n'),
          {
            title: 'Existing Operation IDs',
            titleAlignment: 'center',
            padding: 1,
          }
        )
      )
    }

    logOperationDetails({ operation: { operation, path, method } })

    const savedOperationId = progress.getOperationId({ path, method })
    if (savedOperationId !== undefined) {
      const confirm = await inquirerConfirm({
        message: `Use saved operation ID "${savedOperationId}"?`,
        alwaysYes,
      })
      if (confirm) {
        updateOperationId({
          operation,
          operationId: savedOperationId,
          path,
          method,
          progress,
        })
        continue
      }
    }
    const { suffix } = await inquirer.prompt<{ suffix: string }>([
      {
        type: 'input',
        name: 'suffix',
        message: `Enter operation ID:`,
        validate(suffix: string) {
          if (suffix === '') return 'Please specify a non-empty string'
          if (suffix.length < 3)
            return 'Please enter a suffix longer than 2 characters'
          const conflictingOperationId = operations
            .map((o) => o.operation.operationId)
            .find((operationId) => operationId === generateOperationId(suffix))
          if (conflictingOperationId !== undefined)
            return `Operation ID must be unique (conflicts with "${conflictingOperationId}")`
          return true
        },
        transformer(suffix: string) {
          return generateOperationId(suffix)
        },
      },
    ])
    updateOperationId({
      operation,
      operationId: generateOperationId(suffix),
      path,
      method,
      progress,
    })
  }
  return numberOfUpdatedOperationIds
}
