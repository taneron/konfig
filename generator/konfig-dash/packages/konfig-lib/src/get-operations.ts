import { forEachOperation, OperationObject } from './forEachOperation'
import { OpenAPIV3_XDocument } from './parseSpec'

export function getOperations({
  spec,
}: {
  spec: OpenAPIV3_XDocument
}): OperationObject[] {
  const operations: OperationObject[] = []
  forEachOperation(spec, (operation) => operations.push(operation))
  return operations
}
