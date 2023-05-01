import { z } from './zod'

import {
  csharpConfig,
  goConfig,
  javaConfig,
  kotlinConfig,
  objcConfig,
  phpConfig,
  pythonConfig,
  rubyConfig,
  swiftConfig,
  typescriptConfig,
  konfigTypeScriptConfig,
  generatorCommonOptional,
  genericGeneratorConfig,
  generatorCommonGitRequired,
  androidConfig,
} from './KonfigYaml'
import { KonfigYamlCommon } from './KonfigYamlCommon'
import { TemplateFiles } from './TemplateFiles'

const generatorCommon = z
  .object({
    files: TemplateFiles,
    version: z.string(),
  })
  .merge(generatorCommonGitRequired)
  .merge(generatorCommonOptional)

export const GenerateRequestBody = z
  .object({
    spec: z.string(),
    konfigYaml: z.string(),
    outputSpec: z.boolean().optional(),
    generators: z.object({
      android: generatorCommon.merge(androidConfig).strict().optional(),
      java: generatorCommon.merge(javaConfig).strict().optional(),
      ruby: generatorCommon.merge(rubyConfig).strict().optional(),
      python: generatorCommon.merge(pythonConfig).strict().optional(),
      typescript: generatorCommon
        .merge(typescriptConfig)
        .strict()
        .or(konfigTypeScriptConfig)
        .optional(),
      csharp: generatorCommon.merge(csharpConfig).strict().optional(),
      php: generatorCommon.merge(phpConfig).strict().optional(),
      kotlin: generatorCommon.merge(kotlinConfig).strict().optional(),
      objc: generatorCommon.merge(objcConfig).strict().optional(),
      go: generatorCommon.merge(goConfig).strict().optional(),
      swift: generatorCommon.merge(swiftConfig).strict().optional(),
    }),
    additionalGenerators: z.record(genericGeneratorConfig).optional(),
  })
  .merge(KonfigYamlCommon)

export type GenerateRequestBodyType = z.infer<typeof GenerateRequestBody>
export type GenerateRequestBodyInputType = z.input<typeof GenerateRequestBody>
