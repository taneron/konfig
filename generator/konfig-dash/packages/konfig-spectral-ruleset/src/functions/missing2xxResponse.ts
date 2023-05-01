import type { RulesetFunction } from '@stoplight/spectral-core'
import { ResponsesObject } from 'konfig-lib/dist/parseSpec'
import { isMissing2xxResponse } from 'konfig-lib/dist/util/is-missing-2xx-response'
export const missing2xxResponse: RulesetFunction<ResponsesObject> = (
  responses,
  _opts
) => {
  if (!isMissing2xxResponse({ responseCodes: Object.keys(responses) }))
    return []
  return [{ message: 'Missing 2xx response detected' }]
}
