import { z } from 'zod'

export const StartSessionResponse = z.object({ session_id: z.string() })

export const Point = z.object({
  /**
   * Line in a source file (1-indexed integer).
   */
  line: z.number(),

  /**
   * Column in a source file (1-indexed integer).
   */
  column: z.number(),
  /**
   * Character in a source file (0-indexed integer).
   */
  offset: z.number().optional(),
})

export const Position = z.object({
  /**
   * Place of the first character of the parsed source region.
   */
  start: Point,

  /**
   * Place of the first character after the parsed source region.
   */
  end: Point,

  /**
   * Start column at each index (plus start line) in the source region,
   * for elements that span multiple lines.
   */
  indent: z.number().array().optional(),
})

export const EnvironmentVariables = z.record(z.string(), z.string())
export const LocalVariables = z.record(z.string(), z.string())

export const ExecuteCodeRequest = z.object({
  organizationId: z.string(),
  portalId: z.string(),
  demoId: z.string(),
  sessionId: z.string(),
  codePosition: Position,
  environmentVariables: EnvironmentVariables.optional(),
  localVariables: LocalVariables,
})

export const ExecuteCodeResponse = z
  .object({
    result: z.union([z.literal('Success'), z.literal('Error')]),
    output: z.string(),
    error: z.string(),
  })
  .or(
    z.object({
      result: z.literal('Could not find code'),
    })
  )
  .or(
    z.object({
      result: z.literal('Could not find demo'),
    })
  )
