import { IFunctionResult, RulesetFunction } from '@stoplight/spectral-core'
import { OpenAPI } from 'openapi-types'

/**
 * We have to import from dist to avoid importing unnecessary code that causes:
 * ❯ konfig lint api.yaml
 * 'path' is imported by path?commonjs-external, but could not be resolved – treating it as an external dependency
 * 'url' is imported by url?commonjs-external, but could not be resolved – treating it as an external dependency
 * 'util' is imported by util?commonjs-external, but could not be resolved – treating it as an external dependency
 * 'fs' is imported by fs?commonjs-external, but could not be resolved – treating it as an external dependency
 * 'http' is imported by http?commonjs-external, but could not be resolved – treating it as an external dependency
 * 'https' is imported by https?commonjs-external, but could not be resolved – treating it as an external dependency
 * 'events' is imported by events?commonjs-external, but could not be resolved – treating it as an external dependency
 * 'stream' is imported by stream?commonjs-external, but could not be resolved – treating it as an external dependency
 * 'tls' is imported by tls?commonjs-external, but could not be resolved – treating it as an external dependency
 * 'net' is imported by net?commonjs-external, but could not be resolved – treating it as an external dependency
 * 'buffer' is imported by buffer?commonjs-external, but could not be resolved – treating it as an external dependency
 * 'string_decoder' is imported by string_decoder?commonjs-external, but could not be resolved – treating it as an external dependency
 * 'zlib' is imported by zlib?commonjs-external, but could not be resolved – treating it as an external dependency
 * Error running Spectral!
 * Use --verbose flag to print the error stack.
 * Error #1: Cannot convert undefined or null to object
 */
import { findRedundantSecurityRequirementAndParameter } from 'konfig-lib/dist/util/find-redundant-security-requirement-and-parameter'

export const redundantSecurityAndParameter: RulesetFunction<
  OpenAPI.Operation
> = async (operation, _options, context) => {
  const result: IFunctionResult[] = []
  const document = context.document.data as OpenAPI.Document
  const findResult = await findRedundantSecurityRequirementAndParameter({
    document,
    operation,
  })
  if (findResult.found) result.push({ message: findResult.name })
  return result
}
