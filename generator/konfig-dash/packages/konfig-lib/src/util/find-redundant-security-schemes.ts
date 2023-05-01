import { OpenAPIV3_XDocument } from '../parseSpec'
import { Operation } from '../forEachOperation'
import stringify from 'json-stable-stringify'

type SecurityIndex = number

export function findRedundantSecuritySchemes({
  operation,
  document,
}: {
  operation: Operation
  document: OpenAPIV3_XDocument
}): SecurityIndex[] {
  if (!document.security || !operation.security) return []
  const securityIndices: SecurityIndex[] = []
  const operationSecurityRequirements: string[] = []
  for (const security in operation.security) {
    operationSecurityRequirements.push(stringify(operation.security[security]))
  }
  const documentSecurityRequirements: Set<string> = new Set()
  for (const security in document.security) {
    documentSecurityRequirements.add(stringify(document.security[security]))
  }

  for (let i = 0; i < operationSecurityRequirements.length; i++) {
    if (!documentSecurityRequirements.has(operationSecurityRequirements[i]))
      continue
    securityIndices.push(i)
  }

  return securityIndices
}
