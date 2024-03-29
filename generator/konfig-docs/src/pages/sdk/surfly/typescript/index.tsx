import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function SurflyTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="surfly-typescript-sdk"
      metaDescription={`Surfly is a high-growth interaction middleware player that can share, secure, and transform web experiences. We're on a mission to create (and be) the next wave of online interactions, currently powering online in-person experiences for 200,000+ users worldwide.

Our solution enables anyone to add a collaborative layer to any web application without having to modify or change the original application. Leading organizations use Surfly to accelerate remote deal-closing, collaborate better with seamless functionality, and engage with their own customers in a more efficient and meaningful way. 

Backed by powerful technology and API-first approach, Surfly's industry-leading Co-browsing product recreates an in-person experience as part of a digital customer journey, and helps companies thrive in the era of digital transformation and remote service distribution. With Surfly, you can innovate online interactions in real-time, however you want, without creating cumbersome integrations or continually adding complex and costly technology.

A Surfly Session is equipped with co-browsing, video & voice chat, secure e-signing, responsive document annotation and completion, file sharing, and more. Our customers can use the technology on its own, integrate with their own tool stack, or even build on top of it to gain a competitive advantage, innovate faster, and elevate their customers' experiences.

Surfly is built to meet the highest security standards and regulations— it's compliant by design. The entire Surfly Session has been developed to act as infrastructure, with information only passing through but never stored. And when no data is stored, no data can be lost. This enables us to be ISO 27001, HIPAA, PCI DSS, AICPA SOC, and GDPR compliant.

We are hiring: https://jobs.surfly.com`}
      company="Surfly"
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/surfly/logo.png"
      companyKebabCase="surfly"
      clientNameCamelCase="surfly"
      homepage="www.surfly.com/"
      lastUpdated={new Date("2024-03-29T18:25:18.531Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/surfly/favicon.png"
      // Missing contactUrl
      // Missing contactEmail
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/surfly/imagePreview.png"
      GettingStarted={GettingStarted}
      FirstRequest={FirstRequest}
      categories={["customer_communication","video","collaboration","esignature","document_management","communication","remote","real_time_collaboration"]}
      methods={[
  {
    "url": "/agents/?api_key={API_KEY}",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Agents",
    "typeScriptTag": "agents",
    "description": "List",
    "parameters": [
      {
        "name": "free",
        "schema": "boolean",
        "description": "Agents that are ready to take a call. Depends on `available` field value and online status.",
        "example": true
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/agents/?api_key={API_KEY}",
    "method": "registerNewAgent",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Agents",
    "typeScriptTag": "agents",
    "description": "Create",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/agents/{AGENT_ID}/?api_key={API_KEY}",
    "method": "removeAgent",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Agents",
    "typeScriptTag": "agents",
    "description": "Delete",
    "parameters": [
      {
        "name": "agentId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "2"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/agents/{AGENT_ID}/?api_key={API_KEY}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Agents",
    "typeScriptTag": "agents",
    "description": "Get by id",
    "parameters": [
      {
        "name": "apiKey",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "3b57bd2db21c46d2875508b982968d26"
      },
      {
        "name": "agentId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "2"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/agents/{AGENT_ID}/?api_key={API_KEY}",
    "method": "updateAgent",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Agents",
    "typeScriptTag": "agents",
    "description": "Update",
    "parameters": [
      {
        "name": "agentId",
        "schema": "string",
        "required": true,
        "description": "Id of the agent to update",
        "example": "2"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/agents/access-token/?api_key={API_KEY}",
    "method": "generateAccessToken",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Agents",
    "typeScriptTag": "agents",
    "description": "Generate an access token",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/sessions/?api_key={API_KEY}",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Sessions",
    "typeScriptTag": "sessions",
    "description": "List",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/sessions/?api_key={API_KEY}",
    "method": "generateNewSession",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Sessions",
    "typeScriptTag": "sessions",
    "description": "Create",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/sessions/?api_key={api_key}&active_session={active_session}&agent_id={agent_id}&year={year}&month={month}&pin={pin}&tags={tags}",
    "method": "filter",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Sessions",
    "typeScriptTag": "sessions",
    "description": "Filter",
    "parameters": [
      {
        "name": "activeSession",
        "schema": "boolean",
        "required": true,
        "description": "Filter active or inactive sessions",
        "example": true
      },
      {
        "name": "agentId",
        "schema": "number",
        "required": true,
        "description": "Filter by ID of the agent who joined/started a session",
        "example": 1
      },
      {
        "name": "year",
        "schema": "number",
        "required": true,
        "description": "Filter by year",
        "example": 2020
      },
      {
        "name": "month",
        "schema": "number",
        "required": true,
        "description": "Filter by month",
        "example": 10
      },
      {
        "name": "pin",
        "schema": "number",
        "required": true,
        "description": "Filter by PIN number (useful in combination with `active_session`)",
        "example": 1234
      },
      {
        "name": "tags",
        "schema": "string",
        "required": true,
        "description": "Filter by tag. Supports multiple comma separated tags at once",
        "example": "tag1,tag2"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/sessions/{ID}/?api_key={API_KEY}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Sessions",
    "typeScriptTag": "sessions",
    "description": "Get by id",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Id of the session. Can be a formatted ID (e.g. 123-123-123), or an unformatted ID (e.g. fuSHr0sRQ1usugvheahwQ)",
        "example": "fuSHr0sRQ1usugvheahwQ"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/sessions/{ID}/end/?api_key={API_KEY}",
    "method": "endById",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Sessions",
    "typeScriptTag": "sessions",
    "description": "End",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "fuSHr0sRQ1usugvheahwQ"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/company/options/?api_key={api_key}",
    "method": "resetDefaultOptions",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Company",
    "typeScriptTag": "company",
    "description": "Reset default options",
    "parameters": [],
    "responses": []
  },
  {
    "url": "/company/options/?api_key={api_key}",
    "method": "getDefaultOptions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Company",
    "typeScriptTag": "company",
    "description": "Get default options",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/company/options/?api_key={api_key}",
    "method": "updateDefaultOptions",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Company",
    "typeScriptTag": "company",
    "description": "Update default options",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/company/options/?api_key={api_key}",
    "method": "postOptions",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Company",
    "typeScriptTag": "company",
    "description": "Post options",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/sessions/{ID}/screenshots/latest/?api_key={API_KEY}",
    "method": "getLatest",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Screenshots",
    "typeScriptTag": "screenshots",
    "description": "Latest Screenshot",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "fuSHr0sRQ1usugvheahwQ"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/sessions/{ID}/screenshots/create/?api_key={API_KEY}",
    "method": "startGeneration",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Screenshots",
    "typeScriptTag": "screenshots",
    "description": "Create Screenshot",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "fEapBPiwxSouiLcAgb2OXQ1"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/clients/all/?api_key={API_KEY}",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Clients",
    "typeScriptTag": "clients",
    "description": "List",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/clients/all/?api_key={API_KEY}",
    "method": "addNewClient",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Clients",
    "typeScriptTag": "clients",
    "description": "Create",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/clients/all/{CLIENT_KEY}/?api_key={API_KEY}",
    "method": "deleteClient",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Clients",
    "typeScriptTag": "clients",
    "description": "Delete",
    "parameters": [
      {
        "name": "clientKey",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "63668234b4aa19dd436e6a76ab8ae000"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/clients/all/{CLIENT_KEY}/?api_key={API_KEY}",
    "method": "infoById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Clients",
    "typeScriptTag": "clients",
    "description": "Get by Id",
    "parameters": [
      {
        "name": "clientKey",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "63668234b4aa19dd436e6a76ab8ae000"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/clients/all/{CLIENT_KEY}/?api_key={API_KEY}",
    "method": "setDomainList",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Clients",
    "typeScriptTag": "clients",
    "description": "Set Client Domain List",
    "parameters": [
      {
        "name": "clientKey",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "63668234b4aa19dd436e6a76ab8ae000"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/clients/all/{CLIENT_KEY}/?api_key={API_KEY}",
    "method": "updateClient",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Clients",
    "typeScriptTag": "clients",
    "description": "Update",
    "parameters": [
      {
        "name": "clientKey",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "63668234b4aa19dd436e6a76ab8ae000"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/sessions/?api_key={API_KEY}&clientkey={CLIENT_KEY}&active_session=true&year=2015&month=01",
    "method": "listActiveSessionsForResellerClient",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Clients",
    "typeScriptTag": "clients",
    "description": "List Active Sessions for Reseller's Client",
    "parameters": [
      {
        "name": "clientKey",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "00063668234b4aa19dd436e6a76ab8ae"
      },
      {
        "name": "activeSession",
        "schema": "boolean",
        "description": "",
        "default": false
      },
      {
        "name": "year",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "month",
        "schema": "integer",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/history/?api_key={API_KEY}",
    "method": "getAllSessions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "History",
    "typeScriptTag": "history",
    "description": "List",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/history/?api_key={api_key}&active_session={active_session}&agent_id={agent_id}&pin={pin}&tags={tags}&min_duration={min_duration}&max_duration={max_duration}&min_date={min_date}&max_date={max_date}",
    "method": "filterSessionHistory",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "History",
    "typeScriptTag": "history",
    "description": "Filter session history",
    "parameters": [
      {
        "name": "activeSession",
        "schema": "boolean",
        "required": true,
        "description": "Filter active or inactive sessions. Takes `true` or `false`.",
        "example": false
      },
      {
        "name": "agentId",
        "schema": "string",
        "required": true,
        "description": "Filter by ID of the agent who joined/started a session. Can take `null` as a value.",
        "example": "null"
      },
      {
        "name": "pin",
        "schema": "string",
        "required": true,
        "description": "Filter by session pin. Can take `null` as a value.",
        "example": "1234"
      },
      {
        "name": "tags",
        "schema": "string",
        "required": true,
        "description": "Filter by session tag. Can take `null` as a value.",
        "example": "tag1"
      },
      {
        "name": "minDuration",
        "schema": "number",
        "required": true,
        "description": "Filter by minimum duration of a session.",
        "example": 120
      },
      {
        "name": "maxDuration",
        "schema": "number",
        "required": true,
        "description": "Filter by maximum duration of a session.",
        "example": 120
      },
      {
        "name": "minDate",
        "schema": "string",
        "required": true,
        "description": "Filter by earlist start date/time. Accepts a timestamp in iso8601 format. Make sure to take the timezone into account",
        "example": "2020-05-06T00:00:00.000000Z"
      },
      {
        "name": "maxDate",
        "schema": "string",
        "required": true,
        "description": "Filter by latest start date/time. Accepts a timestamp in iso8601 format. Make sure to take the timezone into account",
        "example": "2020-05-06T00:00:00.000000Z"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/webhooks/?api_key={API_KEY}",
    "method": "listAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Webhooks",
    "typeScriptTag": "webhooks",
    "description": "List",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/webhooks/?api_key={API_KEY}",
    "method": "createWebhook",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Webhooks",
    "typeScriptTag": "webhooks",
    "description": "Create",
    "parameters": [],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/webhooks/{WEBHOOK_ID}/?api_key={API_KEY}",
    "method": "removeWebhook",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Webhooks",
    "typeScriptTag": "webhooks",
    "description": "Delete an Webhook",
    "parameters": [
      {
        "name": "webhookId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "1"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "This response has no content."
      }
    ]
  },
  {
    "url": "/webhooks/{WEBHOOK_ID}/?api_key={API_KEY}",
    "method": "getWebhookInformation",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Webhooks",
    "typeScriptTag": "webhooks",
    "description": "Get by Id",
    "parameters": [
      {
        "name": "webhookId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "1"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/webhooks/{WEBHOOK_ID}/?api_key={API_KEY}",
    "method": "updateWebhook",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Webhooks",
    "typeScriptTag": "webhooks",
    "description": "Update",
    "parameters": [
      {
        "name": "webhookId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "1"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/servers",
    "method": "listAvailable",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Servers",
    "typeScriptTag": "servers",
    "description": "List",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  }
]
    }
      language="TypeScript"
      apiTitle="REST API Reference"
      apiBaseUrl="https://surfly.com/v2"
      apiVersion="2.0"
      endpoints={18}
      sdkMethods={32}
      schemas={88}
      parameters={64}
      difficulty="Easy"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/surfly/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/surfly/openapi.yaml"
      developerDocumentation="docs.surfly.com/api/v2/"
    />
  );
}
  