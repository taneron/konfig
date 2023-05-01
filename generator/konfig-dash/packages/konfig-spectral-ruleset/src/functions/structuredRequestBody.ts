import { IFunctionResult, RulesetFunction } from '@stoplight/spectral-core'
import { canSchemaObjectBeStructured } from 'konfig-lib/dist/util/can-schema-be-structured'
import type { SchemaObject } from 'konfig-lib/dist/parseSpec'
export const structuredRequestBody: RulesetFunction<SchemaObject> = async (
  schemaObject
): Promise<IFunctionResult[]> => {
  if (!canSchemaObjectBeStructured({ schemaObject })) return []
  return [
    {
      message: `Detected JSON example '${schemaObject.example}'. Request body schemas should be structured to generate helpful method parameters and classes.`,
    },
  ]
}
