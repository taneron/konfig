import { z } from './zod'

export const KonfigYamlFiles = z
  .record(z.string(), z.object({ destinationFilename: z.string() }))
  .optional()

export type KonfigYamlFilesType = z.infer<typeof KonfigYamlFiles>
