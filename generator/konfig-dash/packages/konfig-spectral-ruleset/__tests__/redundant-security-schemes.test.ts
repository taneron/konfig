import { DiagnosticSeverity } from "@stoplight/types";
import testRule from "./__helpers__/helper";

testRule("redundant-security-schemes", [
  {
    name: "valid case",
    document: {
      openapi: "3.0.0",
      info: { title: "Example API", version: "1.0.0" },
      paths: {
        "/": {
          get: {
            operationId: "rootGet",
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
    name: "invalid case simple",
    document: {
      openapi: "3.0.0",
      info: { title: "Example API", version: "1.0.0" },
      paths: {
        "/": {
          get: {
            parameters: [{ name: "client_id", in: "query" }],
            responses: {},
            security: [{ client_id: [] }],
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
        message: "Remove redundant security schemes from operation object.",
        path: ["paths", "/", "get"],
        severity: DiagnosticSeverity.Warning,
      },
    ],
  },
  {
    name: "invalid case complex",
    document: {
      openapi: "3.0.0",
      info: { title: "Example API", version: "1.0.0" },
      paths: {
        "/": {
          get: {
            parameters: [{ name: "client_id", in: "query" }],
            responses: {},
            security: [{ jwt: [] }, { client_id: [], petstore_auth: [] }],
          },
        },
      },
      security: [{ client_id: [], petstore_auth: [] }, { jwt: [] }],
      components: {
        securitySchemes: {
          jwt: {
            name: "jwt",
            type: "apiKey",
            in: "query",
          },
          client_id: {
            name: "client_id",
            type: "apiKey",
            in: "query",
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
    errors: [
      {
        message: "Remove redundant security schemes from operation object.",
        path: ["paths", "/", "get"],
        severity: DiagnosticSeverity.Warning,
      },
    ],
  },
]);
