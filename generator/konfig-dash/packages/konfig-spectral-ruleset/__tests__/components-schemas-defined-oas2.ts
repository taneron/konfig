import { DiagnosticSeverity } from "@stoplight/types";
import testRule from "./__helpers__/helper";

testRule("components-schemas-defined-oas2", [
  {
    name: "valid case",
    document: {
      swagger: "2.0",
      info: { title: "Example API", version: "1.0.0" },
      paths: {},
      definitions: {
        User: {
          type: "object",
          properties: {
            id: {
              type: "string",
            },
          },
        },
      },
    },
    errors: [],
  },
  {
    name: "invalid case - empty",
    document: {
      swagger: "2.0",
      info: { title: "Example API", version: "1.0.0" },
      paths: {},
      definitions: {},
    },
    errors: [
      {
        message:
          "APIs should define definitions for developer friendly SDK generation.",
        path: ["definitions"],
        severity: DiagnosticSeverity.Warning,
      },
    ],
  },
  {
    name: "invalid case - undefined",
    document: {
      swagger: "2.0",
      info: { title: "Example API", version: "1.0.0" },
      paths: {},
    },
    errors: [
      {
        message:
          "APIs should define definitions for developer friendly SDK generation.",
        path: [],
        severity: DiagnosticSeverity.Warning,
      },
    ],
  },
]);
