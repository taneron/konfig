import { IFunctionResult, RulesetFunction } from '@stoplight/spectral-core'
import { OAS3Doc } from './util/OAS3Doc'
import { findRedundantSecuritySchemes } from 'konfig-lib/dist/util/find-redundant-security-schemes'
import { Operation } from 'konfig-lib/dist/forEachOperation'
export const redundantSecuritySchemes: RulesetFunction<Operation> = (
  input,
  _options,
  context
) => {
  const result: IFunctionResult[] = []
  const spec = context.document.data as OAS3Doc
  const redundantSecurities = findRedundantSecuritySchemes({
    operation: input,
    document: spec,
  })
  if (redundantSecurities.length > 0)
    result.push({ message: 'Detected redundant security schemes.' })
  return result
}
