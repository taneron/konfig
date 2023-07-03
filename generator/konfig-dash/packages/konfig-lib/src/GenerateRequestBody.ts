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
  generatorCommonOptional,
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

const android = generatorCommon.merge(androidConfig).strict()
const java = generatorCommon.merge(javaConfig).strict()
const ruby = generatorCommon.merge(rubyConfig).strict()
const python = generatorCommon.merge(pythonConfig).strict()
const typescript = generatorCommon.merge(typescriptConfig).strict()
const csharp = generatorCommon.merge(csharpConfig).strict()
const php = generatorCommon.merge(phpConfig).strict()
const kotlin = generatorCommon.merge(kotlinConfig).strict()
const objc = generatorCommon.merge(objcConfig).strict()
const go = generatorCommon.merge(goConfig).strict()
const swift = generatorCommon.merge(swiftConfig).strict()

const genericGeneratorConfig = z.union([
  z
    .object({
      generator: z.literal('java'),
    })
    .merge(java),
  z
    .object({
      generator: z.literal('ruby'),
    })
    .merge(ruby),
  z
    .object({
      generator: z.literal('android'),
    })
    .merge(android),
  z
    .object({
      generator: z.literal('python'),
    })
    .merge(python),
  z
    .object({
      generator: z.literal('typescript'),
    })
    .merge(typescript),
  z
    .object({
      generator: z.literal('csharp'),
    })
    .merge(csharp),
  z
    .object({
      generator: z.literal('php'),
    })
    .merge(php),
  z
    .object({
      generator: z.literal('kotlin'),
    })
    .merge(kotlin),
  z
    .object({
      generator: z.literal('objc'),
    })
    .merge(objc),
  z
    .object({
      generator: z.literal('go'),
    })
    .merge(go),
  z
    .object({
      generator: z.literal('swift'),
    })
    .merge(swift),
])

export const GenerateRequestBody = z
  .object({
    spec: z.string(),
    konfigYaml: z.string(),
    outputSpec: z.boolean().optional(),
    generators: z.object({
      android: android.optional(),
      java: java.optional(),
      ruby: ruby.optional(),
      python: python.optional(),
      typescript: typescript.optional(),
      csharp: csharp.optional(),
      php: php.optional(),
      kotlin: kotlin.optional(),
      objc: objc.optional(),
      go: go.optional(),
      swift: swift.optional(),
    }),
    additionalGenerators: z.record(genericGeneratorConfig).optional(),
  })
  .merge(KonfigYamlCommon)

export type GenerateRequestBodyType = z.infer<typeof GenerateRequestBody>
export type GenerateRequestBodyInputType = z.input<typeof GenerateRequestBody>
