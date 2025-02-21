import { z } from './zod'
import { requiredEnvironmentVariablesConfig } from './TestConfig'
import { jsonSchema } from './util/json-schema'
import chroma from 'chroma-js'

const propertyName = z.string().min(1)
const typeName = z.string().min(1)

export const filterPaths = z
  .object({
    path: z.string(),
    method: z.string().optional(),
  })
  .array()
  .describe(
    "Filter operations from OpenAPI spec by path and method. Filtered operations won't be generated in SDKs. Omitting method will filter all methods for the path."
  )

export const fixConfig = z.object({
  inheritMetadataSpecPath: z
    .string()
    .optional()
    .describe(
      'Path to OAS to inherit metadata such as examples, descriptions, summaries, and tags. This is useful if you have multiple OpenAPI Specifications. One that includes extra metadata (usually hand-written) and one that is used to generate SDKs (usually generated from code).'
    ),
  updateProperty: z
    .record(propertyName, z.record(typeName, z.record(z.string(), jsonSchema)))
    .optional(),
  // modify entire value
  modify: z
    .record(z.string().min(1), jsonSchema)
    .optional()
    .describe(
      'A JSON where the key is a JSON Path pointing to a location in the OAS and the value is the JSON value to be placed at the location.'
    ),
  // update object properties
  update: z
    .record(z.string().min(1), z.record(z.string(), jsonSchema))
    .optional()
    .describe(
      'A JSON where the key is a JSON Path pointing to a location in the OAS and the value is a JSON Object that is merged with the existing JSON Object at that location.'
    ),
})

export const tagPrioritySchema = z
  .string()
  .describe('Name of tag')
  .array()
  .describe(
    'Order of tags to be processed by Konfig. This can be used to configure which operation is used when generated the getting started documentation in the generated README for an SDK.'
  )

export const optionalParameters = z
  .object({
    name: z.string().describe(`"name" field of parameter`),
    in: z.string().describe(`"in" field of parameter`),
  })
  .array()
  .describe(`Can be configured to make specified parameters optional in the
  SDKs. This can be useful if you have a set of parameters you would rather
  instantiate on the top-level client to avoid redundant passing of this
  parameter. For example if you have a "version" parameter that you repeatedly
  pass throughout the operations, you can instead make it optional, add it as a
  client state, and implement a request hook to attach the "version" client
  state to the operation.`)

export const primaryColor = z
  .string()
  .refine(
    (value) => {
      try {
        chroma(value)
        return true
      } catch (e) {
        return false
      }
    },
    {
      message: `"primaryColor" must be a valid color string representation (as supported in CSS)`,
    }
  )
  .optional()
  .describe("Primary color to be used in Konfig's API Portal")

const socialObjectSchema = z.object({
  website: z.string().optional(),
  documentation: z.string().optional(),
})

export type SocialObject = z.infer<typeof socialObjectSchema>

export const demo = z.object({
  id: z.string(),
  path: z.string(),
  showCode: z.boolean().optional(),
})

export const demos = demo.array().optional()

export type Demo = z.infer<typeof demo>
export type Demos = z.infer<typeof demos>

export const linkSchema = z.object({
  type: z.literal('link').default('link'),
  label: z.string().optional(),
  id: z.string(),
  path: z.string(),
})

export type Link = z.infer<typeof linkSchema>

export const documentation = z.object({
  sidebar: z
    .object({
      sections: z
        .object({
          label: z.string(),
          links: z
            .union([
              linkSchema,
              z.object({
                type: z.literal('group').default('group'),
                label: z.string(),
                links: linkSchema.array(),
              }),
            ])
            .array(),
        })
        .array(),
    })
    .describe(
      'Configuration of sidebar to navigate the documentation. Supports sections, links, and grouped links.'
    ),
})

const logoSchema = z
  .object({
    light: z.string(),
    dark: z.string(),
  })
  .describe("Light and dark logos for Konfig's API Portal")

export const defaultChangesetBumpType = z
  .enum(['major', 'minor', 'patch', 'prerelease'])
  .optional()
  .describe("Default changeset bump type for 'konfig changeset' command")

export const portal = z
  .object({
    primaryColor,
    customSnippet: z
      .string()
      .optional()
      .describe(
        'Path to file containing HTML to be added in the <head> of the docs. This is useful if you want to include a custom snippets in the docs.'
      ),
    googleAnalyticsId: z
      .string()
      .optional()
      .describe(
        "Google Analytics ID. If provided, Konfig's API Portal will include Google Analytics tracking."
      ),
    favicon: z
      .string()
      .optional()
      .describe("Relative path to favicon image used for Konfig's API Portal"),
    logo: z
      .string()
      .or(logoSchema)
      .optional()
      .describe(
        "Relative path to logo image used for Konfig's API Portal. If an object is provided, the light logo will be used for light mode and the dark logo will be used for dark mode."
      ),
    socials: socialObjectSchema.optional(),
    hideNonSdkSnippets: z
      .boolean()
      .optional()
      .describe(
        'Do not show non-SDK snippets in the API Reference page of the API Portal. This is useful if your API is not easily usable without an SDK or if you do not want developers to use your API without an SDK.'
      ),
    title: z.string().describe("Title to be used in Konfig's API Portal"),
    documentation: documentation
      .optional()
      .describe(
        "Markdown-based Documentation to be uploaded to Konfig's API Portal"
      ),
    demos,
    hideOperations: z
      .record(z.record(z.literal(true).optional()).optional())
      .optional()
      .describe(
        "List of operations to hide in Konfig's API Portal. The first key is the path and the second is the HTTP method."
      ),
    cta: z
      .object({
        url: z.string(),
        label: z.string(),
      })
      .optional()
      .describe('Adds a call-to-action button at the top-right of the docs.'),
    hideSecurity: z
      .object({
        name: z.string(),
      })
      .array()
      .optional()
      .describe("List of security names to hide in Konfig's API Portal"),
  })
  .optional()
  .describe('Configuration for API portal generated by Konfig')

export type Portal = z.infer<typeof portal>

export const readmeHeader = z
  .object({
    image: z.string().describe('Relative path from konfig.yaml to image'),
    title: z.string().describe('Title to be displayed in SDKs README.md'),
    url: z.string().describe('URL to redirect to when clicking on the image'),
  })
  .optional()
  .describe('Call to action to be displayed in SDKs README.md')

const apiKeySecurityScheme = z
  .object({
    type: z.literal('apiKey'),
    name: z.string(),
    in: z.string(),
    description: z.string().optional(),
  })
  .passthrough() // to allow x-konfig-prefix

// TODO: add additional security scheme types as necessary
const securitySchemeOverride = z
  .object({
    security: z.array(z.record(z.string(), z.array(z.string()))),
    securitySchemes: z.record(z.string(), apiKeySecurityScheme),
  })
  .optional()

export type SecuritySchemeOverride = z.infer<typeof securitySchemeOverride>

// Define an operation, which can be either an operationId or a combination of subpath and HTTP method
const Operation = z.union([
  z
    .string()
    .describe(
      'This represents the operationId from the OpenAPI specification.'
    ),
  z
    .object({
      path: z.string().describe("This represents the operation's subpath."),
      method: z
        .string()
        .describe("This represents the operation's HTTP method."),
    })
    .describe("This represents the operation's subpath and HTTP method."),
])

// Define a schema for a tag along with its associated operations
const TagWithOperations = z
  .object({
    tag: z
      .string()
      .describe('This represents the tag name from the OpenAPI specification.'),
    operations: z
      .array(Operation)
      .optional()
      .describe(
        'An ordered list of operations associated with the tag. Each operation can be an operationId or a combination of subpath and HTTP method.'
      ),
  })
  .describe(
    'A schema that represents a tag and its associated operations in a user-defined order.'
  )

// Define the main schema for the API order configuration
const ApiOrderConfigurationSchema = z
  .array(TagWithOperations)
  .describe(
    'An ordered list of tags, where each tag has its associated operations. This represents the user-defined order for displaying tags and operations in the API documentation.'
  )

export type ApiOrderConfiguration = z.infer<typeof ApiOrderConfigurationSchema>

const _useSecurityKeyNameDescription = `Instead of using the security scheme's key, use the security scheme's name in the OpenAPI specification.

For example take the following OAS security scheme:

components:
  securitySchemes:
    apiKey: # <- security name
      type: apiKey
      in: header
      name: X-API-Key # <- security key

If this field is true then "X-API-Key" will be used instead of "apiKey" in the generated SDKs.
`

export const useSecurityKeyName = z
  .boolean()
  .optional()
  .describe(_useSecurityKeyNameDescription)

export const KonfigYamlCommon = z
  .object({
    primaryColor,
    portal,
    order: ApiOrderConfigurationSchema.optional(),
    readmeHeader,
    securitySchemeOverride,
    useSecurityKeyName,
    omitSecurityRequirementsFromTopLevelClient: z.array(z.string()).optional(),
    readmeOperation: z
      .object({
        operationId: z.string(),
      })
      .optional()
      .describe(
        `Operation to be displayed in "Getting Started" section of SDKs README.md`
      ),
    portalTitle: z
      .string()
      .optional()
      .describe("Title to be used in Konfig's API Portal"),
    defaultChangesetBumpType: defaultChangesetBumpType.default('patch'),
    overrideTopLevelReadme: z.string().optional(),
    fixConfig: fixConfig.optional(),
    filterQueryParams: z.string().array().optional(),
    filterTags: z.array(z.string()).optional(),
    filterModels: z
      .array(z.string())
      .optional()
      .describe(
        "List of model names to filter out. This is useful if you don't want to generate a model for a specific schema."
      ),
    filterRequestBodies: z.array(z.string()).optional(),
    attachNullabletoAllResponseSchemas: z.boolean().optional(),
    validateRequiredPropertiesAndParametersAreNonEmpty: z.boolean().optional(),
    stripRequiredStringProperties: z.boolean().optional(),
    optionalParameters: optionalParameters.optional(),
    doNotValidateGloballyRequiredSecurity: z.boolean().optional(),
    infoContactEmail: z.string().optional(),
    infoContactName: z.string().optional(),
    omitInfoDescription: z.boolean().optional(),
    validateSpec: z.boolean().optional(),
    infoContactUrl: z.string().url().optional(),
    progressYamlPath: z
      .string()
      .optional()
      .describe(
        'Overrides the path of progress.yaml which is used in the "konfig fix" CLI command. This is helpful if you have a staging and production OpenAPI Specification and you want to host two different SDK repos for staging and production releases but want to share the same progress for "konfig fix".'
      ),
    filterPaths: filterPaths.optional(),
    doNotAutoMergeBumpPr: z.boolean().optional(),
    disableAutomationLinter: z.boolean().optional(),
    tagPriority: tagPrioritySchema.optional(),
    takeFirstTag: z
      .boolean()
      .default(true)
      .optional()
      .describe('Multiple tags can cause conflicts for TypeScript SDK'),
    removeDefaultArrayValues: z
      .boolean()
      .default(true)
      .optional()
      .describe('Default array value is not supported in Java SDK'),
    convertArrayDataTypesToAny: z
      .boolean()
      .default(false)
      .optional()
      .describe(
        'Array data type is not supported in TypeScript SDK for OAS 3.1'
      ),
    allObjectsHaveAdditionalProperties: z
      .boolean()
      .or(
        z
          .object({
            requestBody: z.boolean().optional(),
            exclude: z.string().array().optional(),
            include: z.string().array().optional(),
            excludeGenerators: z.string().array().optional(),
          })
          .refine(
            (config) => {
              if (config.exclude)
                return (
                  config.exclude.filter(
                    (ex) => config.include && config.include.includes(ex)
                  ).length === 0
                )
              return true
            },
            { message: 'Exclude and include must not overlap' }
          )
      )
      .optional(),
  })
  .passthrough()
  .merge(requiredEnvironmentVariablesConfig)

export type KonfigYamlCommonType = z.infer<typeof KonfigYamlCommon>
export type FixConfig = z.infer<typeof fixConfig>
export type Logo = z.infer<typeof logoSchema>
export type DocumentationConfig = z.infer<typeof documentation>
