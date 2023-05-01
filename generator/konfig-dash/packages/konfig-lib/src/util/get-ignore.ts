import { z } from '../zod'
import { OpenAPI } from 'openapi-types'

export const IGNORE_NAME = 'x-konfig-ignore'
export const NO_ADDITIONAL_PROPERTIES_RULE_NAME = 'no-additional-properties'
export const KONFIG_OAS2_SCHEMA_NAME = 'konfig-oas2-schema'
export const OBJECT_WITH_NO_PROPERTIES_RULE_NAME = 'object-with-no-properties'
export const POTENTIAL_INCORRECT_DATA_TYPE_RULE_NAME =
  'potential-incorrect-type'

const ignoreSchema = z.object({
  [NO_ADDITIONAL_PROPERTIES_RULE_NAME]: z.boolean().optional(),
  [KONFIG_OAS2_SCHEMA_NAME]: z.object({ paths: z.string().array() }).optional(),
  [POTENTIAL_INCORRECT_DATA_TYPE_RULE_NAME]: z.boolean().optional(),
  [OBJECT_WITH_NO_PROPERTIES_RULE_NAME]: z.boolean().optional(),
})

export type Ignore = z.infer<typeof ignoreSchema>

export const getIgnore = ({ spec }: { spec: OpenAPI.Document }): Ignore => {
  const info = spec.info as unknown as Record<string, unknown>
  if (IGNORE_NAME in info) {
    const ignored = info[IGNORE_NAME]
    const result = ignoreSchema.safeParse(ignored)
    if (result.success === true) return result.data
    return {}
  }
  return {}
}
