import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function BrowserCatTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="browser-cat-typescript-sdk"
      metaDescription={`The purr-fect headless browser API for busy businesses! Easy, fast, and affordable web automation, scraping, e2e testing, image/video/pdf generation, and more. 🐾`}
      company="BrowserCat"
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/browsercat/logo.svg"
      companyKebabCase="browser-cat"
      clientNameCamelCase="browserCat"
      homepage="browsercat.com"
      lastUpdated={new Date("2024-03-25T06:05:28.168Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/browsercat/favicon.png"
      contactUrl="https://www.browsercat.com/contact"
      contactEmail="support@browsercat.com"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/browsercat/imagePreview.png"
      GettingStarted={GettingStarted}
      FirstRequest={FirstRequest}
      categories={["automation","developer_tools","headless_browsers","browser_automation","web_scraping"]}
      methods={[
  {
    "url": "/health",
    "method": "checkHealthStatus",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Server",
    "typeScriptTag": "server",
    "description": "Show server health",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/metrics",
    "method": "showMetrics",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Server",
    "typeScriptTag": "server",
    "description": "Show server metrics",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/openapi",
    "method": "exploreFunctionality",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "OpenAPI",
    "typeScriptTag": "openApi",
    "description": "Open OpenAPI docs",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "OpenAPI HTML"
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/openapi.json",
    "method": "getSpecJson",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "OpenAPI",
    "typeScriptTag": "openApi",
    "description": "Retrieve API spec as JSON",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "OpenAPI JSON"
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/openapi.yaml",
    "method": "getYamlSpec",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "OpenAPI",
    "typeScriptTag": "openApi",
    "description": "Retrieve API spec as YAML",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "OpenAPI YAML"
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/connect",
    "method": "establishConnection",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Browsers",
    "typeScriptTag": "browsers",
    "description": "Connect to a browser",
    "parameters": [
      {
        "name": "region",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/auth/keys",
    "method": "listAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "API Keys",
    "typeScriptTag": "apiKeys",
    "description": "List API keys",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/auth/keys",
    "method": "createApiKey",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "API Keys",
    "typeScriptTag": "apiKeys",
    "description": "Create an API key",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "role",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "expiredAt",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/auth/keys/{keyId}",
    "method": "revokeKey",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "API Keys",
    "typeScriptTag": "apiKeys",
    "description": "Revoke an API key",
    "parameters": [
      {
        "name": "keyId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "KEYID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/auth/keys/{keyId}",
    "method": "getKey",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "API Keys",
    "typeScriptTag": "apiKeys",
    "description": "Retrieve an API key",
    "parameters": [
      {
        "name": "keyId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "KEYID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/auth/keys/{keyId}",
    "method": "updateKey",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "API Keys",
    "typeScriptTag": "apiKeys",
    "description": "Patch an API key",
    "parameters": [
      {
        "name": "keyId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "KEYID"
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "role",
        "schema": "string",
        "description": ""
      },
      {
        "name": "expiredAt",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/auth/keys/{keyId}",
    "method": "updateApiKey",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "API Keys",
    "typeScriptTag": "apiKeys",
    "description": "Update an API key",
    "parameters": [
      {
        "name": "keyId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "KEYID"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "role",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ROLE"
      },
      {
        "name": "expiredAt",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EXPIREDAT"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/usage/buckets",
    "method": "listAggregateAccountUsage",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Usage",
    "typeScriptTag": "usage",
    "description": "List aggregate account usage",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "",
        "default": 100
      },
      {
        "name": "offset",
        "schema": [
          "integer",
          "null"
        ],
        "required": false,
        "description": "",
        "default": 0
      },
      {
        "name": "afterDate",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "beforeDate",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "unit",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "userId",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "keyId",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "method",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "endpoint",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/usage/sessions",
    "method": "getSessionRange",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Usage",
    "typeScriptTag": "usage",
    "description": "List sessions within range",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "",
        "default": 100
      },
      {
        "name": "offset",
        "schema": [
          "integer",
          "null"
        ],
        "required": false,
        "description": "",
        "default": 0
      },
      {
        "name": "afterDate",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "beforeDate",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/usage/sessions/{sessionId}",
    "method": "getRequestData",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Usage",
    "typeScriptTag": "usage",
    "description": "Retrieve data for a request",
    "parameters": [
      {
        "name": "sessionId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SESSIONID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/usage/sessions/{sessionId}/events",
    "method": "listRequestEvents",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Usage",
    "typeScriptTag": "usage",
    "description": "List events for a request",
    "parameters": [
      {
        "name": "sessionId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SESSIONID"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "",
        "default": 100
      },
      {
        "name": "offset",
        "schema": [
          "integer",
          "null"
        ],
        "required": false,
        "description": "",
        "default": 0
      },
      {
        "name": "afterDate",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "beforeDate",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/usage/sessions/{sessionId}/events/{eventId}",
    "method": "getEventData",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Usage",
    "typeScriptTag": "usage",
    "description": "Retrieve data for an event",
    "parameters": [
      {
        "name": "sessionId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SESSIONID"
      },
      {
        "name": "eventId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EVENTID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/billing/subscriptions",
    "method": "listSubscriptionsWithinRange",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Billing",
    "typeScriptTag": "billing",
    "description": "List subscriptions within range",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "",
        "default": 100
      },
      {
        "name": "offset",
        "schema": [
          "integer",
          "null"
        ],
        "required": false,
        "description": "",
        "default": 0
      },
      {
        "name": "afterDate",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "beforeDate",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/billing/subscriptions/current",
    "method": "getActiveSubscription",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Billing",
    "typeScriptTag": "billing",
    "description": "Get active subscription",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/billing/subscriptions/{subId}",
    "method": "getSpecificSubscription",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Billing",
    "typeScriptTag": "billing",
    "description": "Get specific subscription",
    "parameters": [
      {
        "name": "subId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SUBID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/billing/invoices",
    "method": "listInvoicesRange",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Billing",
    "typeScriptTag": "billing",
    "description": "List invoices within range",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "",
        "default": 100
      },
      {
        "name": "offset",
        "schema": [
          "integer",
          "null"
        ],
        "required": false,
        "description": "",
        "default": 0
      },
      {
        "name": "afterDate",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "beforeDate",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/billing/invoices/{invId}",
    "method": "getSpecificInvoice",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Billing",
    "typeScriptTag": "billing",
    "description": "Get specific invoice",
    "parameters": [
      {
        "name": "invId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "INVID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/billing/invoices/{invId}.pdf",
    "method": "getInvoicePdf",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Billing",
    "typeScriptTag": "billing",
    "description": "Get PDF receipt for specific invoice",
    "parameters": [
      {
        "name": "invId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "INVID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Invoice PDF"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  }
]
    }
      language="TypeScript"
      apiTitle="BrowserCat API"
      apiBaseUrl="https://api.browsercat.com"
      apiVersion="1.0.0"
      endpoints={19}
      sdkMethods={23}
      schemas={126}
      parameters={46}
      difficulty="Easy"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/browsercat/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/browsercat/openapi.yaml"
      developerDocumentation="www.browsercat.com/docs"
    />
  );
}
  