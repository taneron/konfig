import boxen from 'boxen'
import { OperationObject } from 'konfig-lib'

export function logOperationDetails({
  operation: { operation, path, method },
  media,
}: {
  operation: OperationObject
  media?: string
}) {
  if (media) {
    console.log(
      boxen(media, {
        title: 'Media',
        titleAlignment: 'center',
        padding: 1,
      })
    )
  }
  if (operation.summary)
    console.log(
      boxen(operation.summary, {
        title: 'Summary',
        titleAlignment: 'center',
        padding: 1,
      })
    )
  if (operation.operationId)
    console.log(
      boxen(operation.operationId, {
        title: 'Operation ID',
        titleAlignment: 'center',
        padding: 1,
      })
    )
  if (operation.description)
    console.log(
      boxen(operation.description, {
        title: 'Description',
        titleAlignment: 'center',
        padding: 1,
      })
    )
  console.log(
    boxen(`${path} - ${method.toUpperCase()}`, {
      title: 'Path - Method',
      titleAlignment: 'center',
      padding: 1,
    })
  )
}
