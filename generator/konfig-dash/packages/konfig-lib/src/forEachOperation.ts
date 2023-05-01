import { OpenAPIV3 } from 'openapi-types'
import { httpMethods } from './http-methods'
import { OpenAPIV3_XDocument } from './parseSpec'

export type Operation = NonNullable<
  NonNullable<
    NonNullable<OpenAPIV3_XDocument['paths']>[string]
  >[OpenAPIV3.HttpMethods]
>

export type HttpMethods = OpenAPIV3.HttpMethods
export const HttpMethodsEnum = OpenAPIV3.HttpMethods

export type OperationObject = {
  operation: Operation
  path: string
  method: OpenAPIV3.HttpMethods
}

export function forEachOperation(
  spec: OpenAPIV3_XDocument,
  handler: (operation: OperationObject) => void
) {
  if (spec.paths) {
    for (const path in spec.paths) {
      const pathObject = spec.paths[path]
      if (!pathObject) throw Error('Path with missing PathObject')
      for (const method of httpMethods) {
        const operation = pathObject[method]
        if (operation) {
          handler({ operation, path, method })
        }
      }
    }
  }
}
