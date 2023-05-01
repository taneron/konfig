import boxen from 'boxen'
import { OperationObject, OperationParameter } from 'konfig-lib'

export function logOperationDetails({
  parameter,
}: {
  parameter: OperationParameter
}) {
  if (parameter.name)
    console.log(
      boxen(parameter.name, {
        title: 'Parameter - name',
        titleAlignment: 'center',
        padding: 1,
      })
    )
  if (parameter.in)
    console.log(
      boxen(parameter.in, {
        title: 'Parameter - in',
        titleAlignment: 'center',
        padding: 1,
      })
    )
  if (parameter.description)
    console.log(
      boxen(parameter.description, {
        title: 'Parameter - description',
        titleAlignment: 'center',
        padding: 1,
      })
    )
  if (parameter.schema)
    console.log(
      boxen(JSON.stringify(parameter.schema, undefined, 2), {
        title: 'Parameter - schema',
        padding: 1,
      })
    )
}
