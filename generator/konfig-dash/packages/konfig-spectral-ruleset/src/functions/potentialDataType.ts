import type { RulesetFunction } from '@stoplight/spectral-core'
import { OpenAPI } from 'openapi-types'
import {
  getIgnore,
  POTENTIAL_INCORRECT_DATA_TYPE_RULE_NAME,
} from 'konfig-lib/dist/util/get-ignore'
import { isSchemaExamplePossibleIncorrectDataType } from 'konfig-lib/dist/util/is-schema-example-possible-incorrect-data-type'
export const potentialDataType: RulesetFunction<Record<string, unknown>> = (
  input,
  _opts,
  context
) => {
  const ignored = getIgnore({
    spec: context.document.data as OpenAPI.Document,
  })
  if (ignored[POTENTIAL_INCORRECT_DATA_TYPE_RULE_NAME]) return []
  return isSchemaExamplePossibleIncorrectDataType({ schema: input })
}
