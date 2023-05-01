import { DiagnosticSeverity } from "@stoplight/types";
import testRule from "./__helpers__/helper";

testRule("redundant-security-and-parameter", [
  {
    name: "valid case simple - global - oas2",
    document: {
      swagger: "2.0.0",
      info: { title: "Example API", version: "1.0.0" },
      security: [{ apiKey: [] }],
      paths: {
        "/": {
          get: {
            parameters: [],
            responses: {},
          },
        },
      },
      securityDefinitions: {
        apiKey: {
          name: "Authorization",
          type: "apiKey",
          in: "header",
        },
      },
    },
    errors: [],
  },
  {
    name: "invalid case - global - ref - oas3",
    document: {
      openapi: "3.0.0",
      info: { title: "Example API", version: "1.0.0" },
      paths: {
        "/": {
          get: {
            parameters: [{ name: "Authorization", in: "header" }],
            responses: {},
          },
        },
      },
      security: [{ apiKey: [] }],
      components: {
        securitySchemes: {
          apiKeyRef: {
            name: "Authorization",
            type: "apiKey",
            in: "header",
          },
          apiKey: {
            $ref: "#/components/securitySchemes/apiKeyRef",
          },
        },
      },
    },
    errors: [
      {
        message:
          'Detected security requirement and parameter with the same name "Authorization".',
        path: ["paths", "/", "get"],
        severity: DiagnosticSeverity.Error,
      },
    ],
  },
  {
    name: "invalid case - global - oas3",
    document: {
      openapi: "3.0.0",
      info: { title: "Example API", version: "1.0.0" },
      paths: {
        "/": {
          get: {
            parameters: [{ name: "Authorization", in: "header" }],
            responses: {},
          },
        },
      },
      security: [{ apiKey: [] }],
      components: {
        securitySchemes: {
          apiKey: {
            name: "Authorization",
            type: "apiKey",
            in: "header",
          },
        },
      },
    },
    errors: [
      {
        message:
          'Detected security requirement and parameter with the same name "Authorization".',
        path: ["paths", "/", "get"],
        severity: DiagnosticSeverity.Error,
      },
    ],
  },
  {
    name: "invalid case - local - oas3",
    document: {
      openapi: "3.0.0",
      info: { title: "Example API", version: "1.0.0" },
      paths: {
        "/": {
          get: {
            parameters: [{ name: "Authorization", in: "header" }],
            responses: {},
            security: [{ apiKey: [] }],
          },
        },
      },
      components: {
        securitySchemes: {
          apiKey: {
            name: "Authorization",
            type: "apiKey",
            in: "header",
          },
        },
      },
    },
    errors: [
      {
        message:
          'Detected security requirement and parameter with the same name "Authorization".',
        path: ["paths", "/", "get"],
        severity: DiagnosticSeverity.Error,
      },
    ],
  },
  {
    name: "invalid case - global - oas2",
    document: {
      swagger: "2.0.0",
      info: { title: "Example API", version: "1.0.0" },
      security: [{ apiKey: [] }],
      paths: {
        "/": {
          get: {
            parameters: [
              { name: "Authorization", in: "header", type: "string" },
            ],
            responses: {},
          },
        },
      },
      securityDefinitions: {
        apiKey: {
          name: "Authorization",
          type: "apiKey",
          in: "header",
        },
      },
    },
    errors: [
      {
        message:
          'Detected security requirement and parameter with the same name "Authorization".',
        path: ["paths", "/", "get"],
        severity: DiagnosticSeverity.Error,
      },
    ],
  },
  {
    name: "invalid case - operation - oas2",
    document: {
      swagger: "2.0.0",
      info: { title: "Example API", version: "1.0.0" },
      paths: {
        "/": {
          get: {
            parameters: [
              { name: "Authorization", in: "header", type: "string" },
            ],
            responses: {},
            security: [{ apiKey: [] }],
          },
        },
      },
      securityDefinitions: {
        apiKey: {
          name: "Authorization",
          type: "apiKey",
          in: "header",
        },
      },
    },
    errors: [
      {
        message:
          'Detected security requirement and parameter with the same name "Authorization".',
        path: ["paths", "/", "get"],
        severity: DiagnosticSeverity.Error,
      },
    ],
  },
  {
    name: "invalid case - operation - oauth2 - oas2",
    document: {
      swagger: "2.0.0",
      info: { title: "Example API", version: "1.0.0" },
      paths: {
        "/": {
          get: {
            parameters: [
              { name: "Authorization", in: "header", type: "string" },
            ],
            responses: {},
            security: [{ oauth: [] }],
          },
        },
      },
      securityDefinitions: {
        oauth: {
          type: "oauth2",
          authorizationUrl: "https://myapi.com/oauth/authorize",
          flow: "implicit",
          scopes: {},
        },
      },
    },
    errors: [
      {
        message:
          'Detected security requirement and parameter with the same name "Authorization".',
        path: ["paths", "/", "get"],
        severity: DiagnosticSeverity.Error,
      },
    ],
  },
  {
    name: "valid case - oauth2",
    document: {
      openapi: "3.0.0",
      info: { title: "Example API", version: "1.0.0" },
      paths: {
        "/": {
          get: {
            security: [
              {
                petstore_auth: ["write:pets", "read:pets"],
              },
            ],
            responses: {},
          },
        },
      },
      security: [{ bearerAuth: [] }],
      components: {
        securitySchemes: {
          bearerAuth: {
            type: "http",
            scheme: "bearer",
          },
          petstore_auth: {
            type: "oauth2",
            flows: {
              implicit: {
                authorizationUrl: "http://api.example.com/api/oauth/dialog",
                scopes: {
                  "write:pets": "modify pets in your account",
                  "read:pets": "read your pets",
                },
              },
            },
          },
        },
      },
    },
    errors: [],
  },
  {
    name: "invalid duplicate query param case top-level security",
    document: {
      openapi: "3.0.0",
      info: { title: "Example API", version: "1.0.0" },
      paths: {
        "/": {
          get: {
            parameters: [{ name: "client_id", in: "query" }],
            responses: {},
          },
        },
      },
      security: [{ client_id: [] }],
      components: {
        securitySchemes: {
          client_id: {
            name: "client_id",
            type: "apiKey",
            in: "query",
          },
        },
      },
    },
    errors: [
      {
        message:
          'Detected security requirement and parameter with the same name "client_id".',
        path: ["paths", "/", "get"],
        severity: DiagnosticSeverity.Error,
      },
    ],
  },
  {
    name: "invalid duplicate query param case operation-level security",
    document: {
      openapi: "3.0.0",
      info: { title: "Example API", version: "1.0.0" },
      paths: {
        "/": {
          get: {
            parameters: [{ name: "client_id", in: "query" }],
            security: [{ client_id: [] }],
            responses: {},
          },
        },
      },
      components: {
        securitySchemes: {
          client_id: {
            name: "client_id",
            type: "apiKey",
            in: "query",
          },
        },
      },
    },
    errors: [
      {
        message:
          'Detected security requirement and parameter with the same name "client_id".',
        path: ["paths", "/", "get"],
        severity: DiagnosticSeverity.Error,
      },
    ],
  },
  {
    name: "invalid duplicate header case operation-level security",
    document: {
      openapi: "3.0.0",
      info: { title: "Example API", version: "1.0.0" },
      paths: {
        "/": {
          get: {
            parameters: [{ name: "Authorization", in: "header" }],
            security: [{ api_key: [] }],
            responses: {},
          },
        },
      },
      components: {
        securitySchemes: {
          api_key: {
            type: "http",
            scheme: "bearer",
          },
        },
      },
    },
    errors: [
      {
        message:
          'Detected security requirement and parameter with the same name "Authorization".',
        path: ["paths", "/", "get"],
        severity: DiagnosticSeverity.Error,
      },
    ],
  },
  {
    name: "invalid duplicate header case top-level security",
    document: {
      openapi: "3.0.0",
      info: { title: "Example API", version: "1.0.0" },
      security: [{ api_key: [] }],
      paths: {
        "/": {
          get: {
            parameters: [{ name: "Authorization", in: "header" }],
            responses: {},
          },
        },
      },
      components: {
        securitySchemes: {
          api_key: {
            type: "http",
            scheme: "bearer",
          },
        },
      },
    },
    errors: [
      {
        message:
          'Detected security requirement and parameter with the same name "Authorization".',
        path: ["paths", "/", "get"],
        severity: DiagnosticSeverity.Error,
      },
    ],
  },
]);
