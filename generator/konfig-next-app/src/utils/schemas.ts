import { z } from "zod";

export const PingSessionRequest = z.object({
  sessions: z
    .object({
      sessionId: z.string(),
      organizationId: z.string(),
      portalId: z.string(),
      demoId: z.string(),
    })
    .array(),
});

export const PingSessionResponse = z.object({
  session_infos: z.object({ session_id: z.string() }).array(),
  lastSuccessfulExecutions: z
    .object({
      organizationId: z.string(),
      portalId: z.string(),
      demoId: z.string(),
      when: z.date().optional(),
    })
    .array(),
});

export type PingSessionResponseType = z.infer<typeof PingSessionResponse>;

export const StartSessionRequest = z.object({
  organizationId: z.string(),
  portalId: z.string(),
  demoId: z.string(),
});

export const StartSessionResponse = z.object({
  session_id: z.string(),
  lastSuccessfulExecution: z.object({
    when: z.date().optional(),
  }),
});

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
});

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
});

export const EnvironmentVariables = z.record(z.string(), z.string());
export const BoxedFloat = z.object({
  type: z.literal("float"),
  data: z.string(),
  precision: z.number(),
});
export const LocalVariables = z.record(
  z.string(),
  z.union([z.string(), z.boolean(), z.number(), BoxedFloat])
);

export type LocalVariablesType = z.infer<typeof LocalVariables>;

export const ExecuteCodeRequest = z.object({
  organizationId: z.string(),
  portalId: z.string(),
  demoId: z.string(),
  sessionId: z.string(),
  codePosition: Position,
  environmentVariables: EnvironmentVariables.optional(),
  localVariables: LocalVariables,
});

export const ExecuteSandboxCodeRequest = z.object({
  sessionId: z.string(),
  code: z.string(),
  localVariables: LocalVariables,
});

export const ExecuteCodeResponse = z
  .object({
    result: z.union([z.literal("Success"), z.literal("Error")]),
    output: z.string(),
    error: z.string(),
  })
  .or(
    z.object({
      result: z.literal("Could not find code"),
    })
  )
  .or(
    z.object({
      result: z.literal("Could not find demo"),
    })
  );
