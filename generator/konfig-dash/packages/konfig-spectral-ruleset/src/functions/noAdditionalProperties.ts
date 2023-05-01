import { IFunctionResult, RulesetFunction } from '@stoplight/spectral-core'
import { OpenAPI, OpenAPIV3, OpenAPIV3_1 } from 'openapi-types'
import { recurseObject } from './util/lib'
import { getIgnore, NO_ADDITIONAL_PROPERTIES_RULE_NAME } from './util/getIgnore'

/**
 * This rule is deprecated. It was created based on a confusion of how JSON
 * Schema actually handles additional properties. I had the misnotion that
 * ommitting additionalProperties means additional properties were not allowed.
 * But JSON Schema actually says omitting it sets it to default which means
 * additional properties are allowed by default.
 *
 * So this is valid:
 * JSON Schema:
 * {
 *  "type": "object",
 *  "properties": {
 *    "hello": {}
 *  },
 *  "required": [
 *    "hello"
 *  ]
 * }
 *
 * JSON:
 * {
 *  "hello": "hello",
 *  "1": "2"
 * }
 */

export const noAdditionalProperties: RulesetFunction<
  OpenAPIV3.SchemaObject | OpenAPIV3_1.SchemaObject
> = (_input, _options, context) => {
  const result: IFunctionResult[] = []
  const spec = context.document.data as OpenAPI.Document

  const ignored = getIgnore({ spec })
  if (ignored[NO_ADDITIONAL_PROPERTIES_RULE_NAME]) return

  let schemaObjectCount = 0
  let additionalPropertiesCount = 0
  recurseObject(spec, (_key, value, path) => {
    if (
      typeof value === 'object' &&
      value !== null &&
      'type' in value &&
      value['type'] === 'object' &&
      (path.includes('responses') || path.includes('schemas'))
    ) {
      schemaObjectCount++
      additionalPropertiesCount += value['additionalProperties'] ? 1 : 0
    }
  })

  if (schemaObjectCount > 0 && additionalPropertiesCount === 0) {
    result.push({ message: 'Detected potential problem with object types' })
  }

  return result
}

export const message = `No 'additionalProperties: true' detected on response
bodies throughout spec. Is your spec is 100% compliant with your production API?
If yes, ignore this rule in .spectral.yaml and move on. If no, ignore this rule
in .spectral.yaml by adding "x-konfig-ignore: 'no-additional-properties'" to
top-level OpenAPI Info object and configure your konfig.yaml to intelligently
attach 'additionalProperties: true' to response bodies.`

/**
 * Archived test can be found below
 */

// import { DiagnosticSeverity } from "@stoplight/types";
// import { message } from "../src/functions/noAdditionalProperties";
// import testRule from "./__helpers__/helper";

// testRule("no-additional-properties", [
//   {
//     name: "no object case",
//     document: {
//       openapi: "3.0.0",
//       info: { title: "Example API", version: "1.0.0" },
//       paths: {
//         "/": {
//           get: {
//             operationId: "rootGet",
//             responses: {},
//           },
//         },
//       },
//       components: {},
//     },
//     errors: [],
//   },
//   {
//     name: "invalid additional properties - ignored",
//     document: {
//       openapi: "3.0.0",
//       info: {
//         title: "Example API",
//         version: "1.0.0",
//         "x-konfig-ignore": { "no-additional-properties": true },
//       } as any,
//       paths: {
//         "/": {
//           get: {
//             responses: {
//               "200": {
//                 description: "OK",
//                 content: {
//                   "application/json": {
//                     schema: {
//                       type: "object",
//                       properties: {
//                         someField: {
//                           type: "number",
//                         },
//                       },
//                     },
//                   },
//                 },
//               },
//             },
//           },
//         },
//       },
//       components: {},
//     },
//     errors: [],
//   },
//   {
//     name: "detected case inline",
//     document: {
//       openapi: "3.0.0",
//       info: { title: "Example API", version: "1.0.0" },
//       paths: {
//         "/": {
//           get: {
//             responses: {
//               "200": {
//                 description: "OK",
//                 content: {
//                   "application/json": {
//                     schema: {
//                       type: "object",
//                       properties: {
//                         someField: {
//                           type: "number",
//                         },
//                       },
//                     },
//                   },
//                 },
//               },
//             },
//           },
//         },
//       },
//       components: {},
//     },
//     errors: [
//       {
//         message,
//         path: [
//           "paths",
//           "/",
//           "get",
//           "responses",
//           "200",
//           "content",
//           "application/json",
//           "schema",
//         ],
//         severity: DiagnosticSeverity.Error,
//       },
//     ],
//   },
//   {
//     name: "detected case ref",
//     document: {
//       openapi: "3.0.0",
//       info: { title: "Example API", version: "1.0.0" },
//       paths: {
//         "/": {
//           get: {
//             responses: {
//               "200": {
//                 description: "OK",
//                 content: {
//                   "application/json": {
//                     schema: {
//                       $ref: "#/components/schemas/example",
//                     },
//                   },
//                 },
//               },
//             },
//           },
//         },
//       },
//       components: {
//         schemas: {
//           example: {
//             type: "object",
//             properties: {
//               someField: {
//                 type: "number",
//               },
//             },
//           },
//         },
//       },
//     },
//     errors: [
//       {
//         message,
//         path: [
//           "paths",
//           "/",
//           "get",
//           "responses",
//           "200",
//           "content",
//           "application/json",
//           "schema",
//         ],
//         severity: DiagnosticSeverity.Error,
//       },
//     ],
//   },
// ]);
