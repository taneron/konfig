import { z } from '../zod'

/**
 * Copied from Zod README: https://github.com/colinhacks/zod#json-type
 */

export const literalSchema = z.union([
  z.string(),
  z.number(),
  z.boolean(),
  z.null(),
])
export type Object = { [key: string]: Json }
export type Literal = z.infer<typeof literalSchema>
export type Json = Literal | { [key: string]: Json } | Json[]
export const objectSchema: z.ZodType<Object> = z.lazy(() =>
  z.record(jsonSchema)
)
export const jsonSchema: z.ZodType<Json> = z
  .lazy(() => z.union([literalSchema, z.array(jsonSchema), objectSchema]))
  .openapi({
    oneOf: [
      { type: 'string' },
      { type: 'boolean' },
      { type: 'number' },
      { type: 'object' },
    ],
    nullable: true,
  })
