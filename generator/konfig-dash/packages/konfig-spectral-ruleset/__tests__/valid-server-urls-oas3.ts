import { DiagnosticSeverity } from "@stoplight/types";
import testRule from "./__helpers__/helper";

testRule("valid-server-urls-oas3", [
  {
    name: "valid case",
    document: {
      openapi: "3.0.0",
      info: { title: "Example API", version: "1.0.0" },
      servers: [
        { url: "https://valid.url" },
        { url: "http://anothervalid.url" },
      ],
      paths: {},
    },
    errors: [],
  },
  {
    name: "invalid case - localhost",
    document: {
      openapi: "3.0.0",
      info: { title: "Example API", version: "1.0.0" },
      servers: [
        { url: "http://localhost:3000" },
        { url: "https://localhost:3000" },
      ],
      paths: {},
    },
    errors: [
      {
        message: `"http://localhost:3000" is not a valid URL`,
        path: ["servers", "0", "url"],
        severity: DiagnosticSeverity.Error,
      },
      {
        message: `"https://localhost:3000" is not a valid URL`,
        path: ["servers", "1", "url"],
        severity: DiagnosticSeverity.Error,
      },
    ],
  },
  {
    name: "invalid case - invalid first server",
    document: {
      openapi: "3.0.0",
      info: { title: "Example API", version: "1.0.0" },
      servers: [{ url: "invalid url" }, { url: "https://myapi.com" }],
      paths: {},
    },
    errors: [
      {
        message: `"invalid url" is not a valid URL`,
        path: ["servers", "0", "url"],
        severity: DiagnosticSeverity.Error,
      },
    ],
  },
]);
