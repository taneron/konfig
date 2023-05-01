import { DiagnosticSeverity } from "@stoplight/types";
import testRule from "./__helpers__/helper";

testRule("limited-oas3_1-support", [
  {
    name: "valid case",
    document: {
      openapi: "3.0.0",
      info: { title: "Example API", version: "1.0.0" },
      paths: {
        "/": {
          get: {
            description: "",
            parameters: [
              {
                name: "example",
                in: "header",
                schema: { $ref: "#/components/schemas/object" },
              },
            ],
            responses: {},
          },
        },
      },
      components: {
        schemas: {
          object: {
            type: "object",
            properties: {
              stringField: {
                type: "string",
                example: "hello world",
              },
              numberField: {
                type: "number",
                example: 1.0,
              },
              integerField: {
                type: "integer",
                example: 1,
              },
              booleanField: {
                type: "boolean",
                example: false,
              },
              arrayField: {
                type: "array",
                items: {
                  type: "string",
                  example: "hello world",
                },
              },
            },
            example: {
              stringField: "hello world",
              numberField: 1.0,
              integerField: 1,
              booleanField: false,
              arrayField: ["hello world"],
            },
          },
        },
      },
    },
    errors: [],
  },
  {
    name: "invalid case",
    document: {
      openapi: "3.1.0",
      info: { title: "Example API", version: "1.0.0" },
      paths: {},
    },
    errors: [
      {
        message: "Konfig has limited support for OAS 3.1",
        path: ["openapi"],
        severity: DiagnosticSeverity.Error,
      },
    ],
  },
]);
