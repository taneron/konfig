import { z } from './zod'

const testScript = z.string().array()
const requiredEnvironmentVariables = z.string().array()

export const requiredEnvironmentVariablesConfig = z.object({
  requiredEnvironmentVariables: requiredEnvironmentVariables.optional(),
})

export const testConfig = z.object({
  test: z
    .object({
      script: testScript,
    })
    .merge(requiredEnvironmentVariablesConfig)
    .optional(),
})

export type RequiredEnvironmentVariablesConfig = z.infer<
  typeof requiredEnvironmentVariablesConfig
>
