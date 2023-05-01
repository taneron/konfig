import { Operation } from '../forEachOperation'
import { Spec } from '../parseSpec'
import { getOperationParameters } from './get-operation-parameters'
import { getSomeOperationRequestBodySchema } from './get-some-operation-request-body-schema'
import { getValidPropertySetFromSchema } from './get-valid-property-set-from-schema'
import { isRequestBodyAnObject } from './is-request-body-an-object'

// if body is non-Object (or anyOf / allOf / oneOf includes non-Object)
//    if any parameters
//        false
//    else
//        true
// else
//    if parameter names conflict with body properties
//      false
//    else
//      true
export function canOperationHaveSingleParameter({
  operation,
  spec,
}: {
  operation: Operation
  spec: Spec
}): boolean {
  const isObject = isRequestBodyAnObject({ operation, spec })
  // If no request body exists then we can always have single request
  if (isObject === null) return true

  if (!isObject)
    if (operation.parameters === undefined || operation.parameters.length === 0)
      return true
    else return false
  else {
    const parameters = getOperationParameters({ operation, spec })
    if (parameters === undefined) return true
    const schema = getSomeOperationRequestBodySchema({ operation, spec })
    if (schema === undefined) return true
    const allRequestBodyProperties = getValidPropertySetFromSchema({
      schema,
      spec,
    })
    const parameterNames = parameters.map((parameter) => parameter.name)
    const doesAnyBodyPropertyConflictWithParameterName =
      parameterNames.filter((parameterName) =>
        allRequestBodyProperties.properties
          .map((property) => property.name)
          .includes(parameterName)
      ).length > 0
    return !doesAnyBodyPropertyConflictWithParameterName
  }
}
