import { DiagnosticSeverity } from "@stoplight/types";
import testRule from "./__helpers__/helper";

testRule("adv-security-schemes-defined-oas2", [
  {
    name: "valid case",
    document: {
      swagger: "2.0.0",
      info: {
        title: "api",
        version: "1.0.0",
      },
      paths: {},
      securityDefinitions: {
        api_key: {
          type: "basic",
        },
      },
    },
    errors: [],
  },
  {
    name: "invalid case - empty",
    document: {
      swagger: "2.0.0",
      info: {
        title: "api",
        version: "1.0.0",
      },
      paths: {},
      securityDefinitions: {},
    },
    errors: [
      {
        message:
          "This API definition does not have any security scheme defined.",
        path: ["securityDefinitions"],
        severity: DiagnosticSeverity.Error,
      },
    ],
  },
  {
    name: "invalid case - undefined",
    document: {
      swagger: "2.0.0",
      info: {
        title: "api",
        version: "1.0.0",
      },
      paths: {},
    },
    errors: [
      {
        message:
          "This API definition does not have any security scheme defined.",
        path: [],
        severity: DiagnosticSeverity.Error,
      },
    ],
  },
]);
