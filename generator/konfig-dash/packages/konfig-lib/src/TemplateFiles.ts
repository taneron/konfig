import { z } from './zod'

export const TemplateFiles = z
  .record(
    z.string(),
    z.object({ source: z.string(), destinationFilename: z.string() })
  )
  .optional()

export type TemplateFilesType = z.infer<typeof TemplateFiles>
