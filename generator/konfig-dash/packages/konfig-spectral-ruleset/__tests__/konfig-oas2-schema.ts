import { DiagnosticSeverity } from "@stoplight/types";
import testRule from "./__helpers__/helper";

testRule("konfig-oas2-schema", [
  {
    name: "oas2 - invalid case",
    document: {
      swagger: "2.0.0",
      info: { title: "Example API", version: "1.0.0" },
      paths: {
        "/": {
          get: {
            parameters: [
              {
                type: "object",
                name: "extendedParams",
                in: "query",
                "x-nullable": true,
                additionalProperties: {
                  type: "string",
                },
              },
            ],
            responses: {
              default: {
                description: "a response",
              },
            },
          },
        },
      },
    },
    errors: [
      {
        severity: DiagnosticSeverity.Error,
        message: `"0" property must have required property "schema".`,
        path: ["paths", "/", "get", "parameters", "0"],
      },
      {
        severity: DiagnosticSeverity.Error,
        message: `"0" property must have required property "required".`,
        path: ["paths", "/", "get", "parameters", "0"],
      },
      {
        severity: DiagnosticSeverity.Error,
        message: `Property "type" is not expected to be here.`,
        path: ["paths", "/", "get", "parameters", "0", "type"],
      },
      {
        severity: DiagnosticSeverity.Error,
        message: `"type" property must be equal to one of the allowed values.`,
        path: ["paths", "/", "get", "parameters", "0", "type"],
      },
      {
        severity: DiagnosticSeverity.Error,
        message: `Property "name" is not expected to be here.`,
        path: ["paths", "/", "get", "parameters", "0", "name"],
      },
      {
        severity: DiagnosticSeverity.Error,
        message: `"in" property must be equal to one of the allowed values.`,
        path: ["paths", "/", "get", "parameters", "0", "in"],
      },
      {
        severity: DiagnosticSeverity.Error,
        message: `Property "in" is not expected to be here.`,
        path: ["paths", "/", "get", "parameters", "0", "in"],
      },
      {
        severity: DiagnosticSeverity.Error,
        message: `Property "x-nullable" is not expected to be here.`,
        path: ["paths", "/", "get", "parameters", "0", "x-nullable"],
      },
      {
        severity: DiagnosticSeverity.Error,
        message: `Property "additionalProperties" is not expected to be here.`,
        path: ["paths", "/", "get", "parameters", "0", "additionalProperties"],
      },
    ],
  },
  {
    name: "oas2 - invalid case - ignored",
    document: {
      swagger: "2.0.0",
      info: {
        title: "Example API",
        version: "1.0.0",
        "x-konfig-ignore": {
          "konfig-oas2-schema": {
            paths: ["paths./.get.parameters.0"],
          },
        },
      } as unknown as any,
      paths: {
        "/": {
          get: {
            parameters: [
              {
                type: "object",
                name: "extendedParams",
                in: "query",
                "x-nullable": true,
                additionalProperties: {
                  type: "string",
                },
              },
            ],
            responses: {
              default: {
                description: "a response",
              },
            },
          },
        },
      },
    },
    errors: [],
  },
]);
