import { DiagnosticSeverity } from "@stoplight/types";
import testRule from "./__helpers__/helper";

testRule("multiple-tags", [
  {
    name: "valid case",
    document: {
      openapi: "3.0.0",
      info: { title: "Example API", version: "1.0.0" },
      paths: {
        "/": {
          get: {
            tags: ["Example"],
            description: "",
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
            tags: ["Some Tag", "Another Tag"],
            description: "",
            responses: {},
          },
        },
      },
    },
    errors: [
      {
        message:
          "Having more than 1 tag can be confusing as generated SDKs will only show up under one tag.",
        path: ["paths", "/", "get", "tags"],
        severity: DiagnosticSeverity.Warning,
      },
    ],
  },
]);
