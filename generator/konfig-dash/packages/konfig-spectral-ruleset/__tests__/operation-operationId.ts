import { DiagnosticSeverity } from "@stoplight/types";
import testRule from "./__helpers__/helper";

testRule("operation-operationId", [
  {
    name: "valid case",
    document: {
      openapi: "3.0.0",
      info: { title: "Example API", version: "1.0.0" },
      paths: {
        "/": {
          get: {
            operationId: "rootGet",
            responses: {},
          },
        },
      },
    },
    errors: [],
  },
  {
    name: "invalid case",
    document: {
      openapi: "3.0.0",
      info: { title: "Example API", version: "1.0.0" },
      paths: {
        "/": {
          get: {
            responses: {},
          },
        },
      },
    },
    errors: [
      {
        message:
          "Assign Operation#operationId to create better SDK method names.",
        path: ["paths", "/", "get"],
        severity: DiagnosticSeverity.Warning,
      },
    ],
  },
]);
