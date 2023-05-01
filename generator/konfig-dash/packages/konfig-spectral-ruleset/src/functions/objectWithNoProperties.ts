import type { RulesetFunction } from '@stoplight/spectral-core'
import { SchemaObject } from 'konfig-lib'
import {
  getIgnore,
  OBJECT_WITH_NO_PROPERTIES_RULE_NAME,
} from 'konfig-lib/dist/util/get-ignore'
import { isObjectTypeSchemaWithNoProperties } from 'konfig-lib/dist/util/is-object-type-schema-with-no-properties'
import { OpenAPI } from 'openapi-types'
export const objectWithNoProperties: RulesetFunction<SchemaObject> = (
  schemaObject,
  _opts,
  context
) => {
  const ignore = getIgnore({ spec: context.document.data as OpenAPI.Document })
  if (ignore[OBJECT_WITH_NO_PROPERTIES_RULE_NAME]) return []
  if (!isObjectTypeSchemaWithNoProperties({ schema: schemaObject })) return []
  return [{ message: 'Error found' }]
}
