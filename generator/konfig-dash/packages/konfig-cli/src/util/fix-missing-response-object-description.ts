import { getOperations, resolveRef, Spec } from 'konfig-lib'
import * as inquirer from 'inquirer'
import { descriptionSchema, Progress } from './fix-progress'
import { logOperationDetails } from './log-operation-details'
import boxen from 'boxen'
import { inquirerConfirm } from './inquirer-confirm'

export async function fixMissingResponseObjectDescription({
  spec,
  progress,
  alwaysYes,
}: {
  spec: Spec
  progress: Progress
  alwaysYes: boolean
}): Promise<number> {
  const operations = getOperations({ spec: spec.spec })

  let numberOfResponseDescriptionsAdded = 0

  for (const { operation, path, method } of operations) {
    for (const statusCode of Object.keys(operation.responses)) {
      const responseObjectOrRef = operation.responses[statusCode]
      const responseObject = resolveRef({
        refOrObject: responseObjectOrRef,
        $ref: spec.$ref,
      })
      if (responseObject.description === undefined) {
        logOperationDetails({ operation: { operation, path, method } })
        if (responseObject.content)
          console.log(
            boxen(JSON.stringify(responseObject.content, undefined, 2), {
              title: 'Content',
              titleAlignment: 'center',
              padding: 1,
            })
          )

        const savedDescription = progress.getOperationResponseDescription({
          path,
          method,
          statusCode,
        })
        if (savedDescription !== undefined) {
          const confirm = await inquirerConfirm({
            message: `Use saved operation response description "${savedDescription}"?`,
            alwaysYes,
          })
          if (confirm) {
            responseObject.description = savedDescription
            numberOfResponseDescriptionsAdded++
            continue
          }
        }

        const { description } = await inquirer.prompt<{ description: string }>([
          {
            type: 'input',
            name: 'description',
            message:
              'Missing Response "description" field. Enter description (what does this response mean?):',
            validate(input: string) {
              return descriptionSchema.safeParse(input).success
            },
          },
        ])

        responseObject.description = description
        progress.saveOperationResponseDescription({
          path,
          method,
          statusCode,
          description,
        })
        numberOfResponseDescriptionsAdded++
      }
    }
  }

  return numberOfResponseDescriptionsAdded
}
