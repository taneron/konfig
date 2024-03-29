import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function BrowseAiTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="browse-ai-typescript-sdk"
      metaDescription={`We're creating the easiest way to scrape and monitor any website with no code.

Our mission is to give every individual and business equal opportunity to benefit from information on the internet.`}
      company="Browse AI"
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/browse-ai/logo.png"
      companyKebabCase="browse-ai"
      clientNameCamelCase="browseAi"
      homepage="browse.ai"
      lastUpdated={new Date("2024-03-29T21:02:06.014Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/browse-ai/favicon.png"
      // Missing contactUrl
      // Missing contactEmail
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/browse-ai/imagePreview.png"
      GettingStarted={GettingStarted}
      FirstRequest={FirstRequest}
      categories={["ai","web_scraping"]}
      methods={[
  {
    "url": "/status",
    "method": "checkInfrastructureStatus",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "system",
    "typeScriptTag": "system",
    "description": "Endpoint for checking the status of Browse AI infrastructure",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/teams",
    "method": "getTeamsByAuth0AccessToken",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "internal",
    "typeScriptTag": "internal",
    "description": "Retrieve list of teams under user account",
    "parameters": [
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "You can generate a new API key on [your dashboard](https://dashboard.browse.ai/api) if you do not have one.\n",
        "example": "Bearer YOUR_SECRET_API_KEY"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      }
    ]
  },
  {
    "url": "/robots",
    "method": "listRetrieval",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "robots",
    "typeScriptTag": "robots",
    "description": "Retrieve list of robots under your account",
    "parameters": [
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "You can generate a new API key on [your dashboard](https://dashboard.browse.ai/api) if you do not have one.\n",
        "example": "Bearer YOUR_SECRET_API_KEY"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      }
    ]
  },
  {
    "url": "/robots/{robotId}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "robots",
    "typeScriptTag": "robots",
    "description": "Retrieve single robot by ID",
    "parameters": [
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "You can generate a new API key on [your dashboard](https://dashboard.browse.ai/api) if you do not have one.\n",
        "example": "Bearer YOUR_SECRET_API_KEY"
      },
      {
        "name": "robotId",
        "schema": "string",
        "required": true,
        "description": "Unique robot ID You can find a robot's ID by opening it on the dashboard and copying its ID in the browser address bar.\n",
        "example": "c3689adb-50aa-44af-b265-a7e0d4e5846e"
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
    "url": "/robots/{robotId}/cookies",
    "method": "updateCookies",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "robots",
    "typeScriptTag": "robots",
    "description": "Update a robot's cookies",
    "parameters": [
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "You can generate a new API key on [your dashboard](https://dashboard.browse.ai/api) if you do not have one.\n",
        "example": "Bearer YOUR_SECRET_API_KEY"
      },
      {
        "name": "robotId",
        "schema": "string",
        "required": true,
        "description": "Unique robot ID\n\nYou can find a robot's ID by opening it on the dashboard and copying its ID in the browser address bar.\n",
        "example": "c3689adb-50aa-44af-b265-a7e0d4e5846e"
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
    "url": "/robots/{robotId}/tasks",
    "method": "getAllByRobot",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "tasks",
    "typeScriptTag": "tasks",
    "description": "Get all tasks by a robot",
    "parameters": [
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "You can generate a new API key on [your dashboard](https://dashboard.browse.ai/api) if you do not have one.\n",
        "example": "Bearer YOUR_SECRET_API_KEY"
      },
      {
        "name": "robotId",
        "schema": "string",
        "required": true,
        "description": "Unique robot ID\n\nYou can find a robot's ID by opening it on the dashboard and copying its ID in the browser address bar.\n",
        "example": "c3689adb-50aa-44af-b265-a7e0d4e5846e"
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Page number",
        "example": 1
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "required": false,
        "description": "Page size",
        "example": 10,
        "default": 10
      },
      {
        "name": "status",
        "schema": "string",
        "required": false,
        "description": "Task status",
        "example": "successful"
      },
      {
        "name": "robotBulkRunId",
        "schema": "string",
        "required": false,
        "description": "filter the result based on robot bulk run ID",
        "example": "f6fb62b6-f06a-4bf7-a623-c6a35c2e70b0"
      },
      {
        "name": "sort",
        "schema": "string",
        "required": false,
        "description": "A comma separated list of fields to sort by. Default sorting is ascending and prefixing field names with a hyphen '-' yields a descending order.",
        "example": "-createdAt,finishedAt"
      },
      {
        "name": "includeRetried",
        "schema": "boolean",
        "required": false,
        "description": "by passing false you can exclude the retried tasks",
        "example": false
      },
      {
        "name": "fromDate",
        "schema": "integer",
        "required": false,
        "description": "From task creation date and time in the form of a Unix timestamp",
        "example": 1678795867879
      },
      {
        "name": "toDate",
        "schema": "integer",
        "required": false,
        "description": "To task creation date and time in the form of a Unix timestamp",
        "example": 1678795867879
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
      }
    ]
  },
  {
    "url": "/robots/{robotId}/tasks",
    "method": "runRobotTask",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "tasks",
    "typeScriptTag": "tasks",
    "description": "Run a robot",
    "parameters": [
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "You can generate a new API key on [your dashboard](https://dashboard.browse.ai/api) if you do not have one.\n",
        "example": "Bearer YOUR_SECRET_API_KEY"
      },
      {
        "name": "robotId",
        "schema": "string",
        "required": true,
        "description": "Unique robot ID\n\nYou can find a robot's ID by opening it on the dashboard and copying its ID in the browser address bar.\n",
        "example": "c3689adb-50aa-44af-b265-a7e0d4e5846e"
      },
      {
        "name": "recordVideo",
        "schema": "boolean",
        "description": "",
        "example": false
      },
      {
        "name": "inputParameters",
        "schema": "object",
        "description": "",
        "example": {
          "originUrl": "https://www.ycombinator.com/companies/airbnb",
          "companies_skip": 0,
          "companies_limit": 10
        }
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
      },
      {
        "statusCode": "503",
        "description": ""
      }
    ]
  },
  {
    "url": "/robots/{robotId}/tasks/{taskId}",
    "method": "getTaskDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "tasks",
    "typeScriptTag": "tasks",
    "description": "Retrieve a task",
    "parameters": [
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "You can generate a new API key on [your dashboard](https://dashboard.browse.ai/api) if you do not have one.\n",
        "example": "Bearer YOUR_SECRET_API_KEY"
      },
      {
        "name": "robotId",
        "schema": "string",
        "required": true,
        "description": "Unique robot ID\n\nYou can find a robot's ID by opening it on the dashboard and copying its ID in the browser address bar.\n",
        "example": "c3689adb-50aa-44af-b265-a7e0d4e5846e"
      },
      {
        "name": "taskId",
        "schema": "string",
        "required": true,
        "description": "Unique task ID",
        "example": "f3672790-4561-424b-8a7b-7b7df182b236"
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/robots/{robotId}/monitors",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "monitors",
    "typeScriptTag": "monitors",
    "description": "Retrieve a robot's monitors",
    "parameters": [
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "You can generate a new API key on [your dashboard](https://dashboard.browse.ai/api) if you do not have one.\n",
        "example": "Bearer YOUR_SECRET_API_KEY"
      },
      {
        "name": "robotId",
        "schema": "string",
        "required": true,
        "description": "Unique robot ID\n\nYou can find a robot's ID by opening it on the dashboard and copying its ID in the browser address bar.\n",
        "example": "c3689adb-50aa-44af-b265-a7e0d4e5846e"
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
    "url": "/robots/{robotId}/monitors",
    "method": "createNew",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "monitors",
    "typeScriptTag": "monitors",
    "description": "Create a new monitor on a robot",
    "parameters": [
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "You can generate a new API key on [your dashboard](https://dashboard.browse.ai/api) if you do not have one.\n",
        "example": "Bearer YOUR_SECRET_API_KEY"
      },
      {
        "name": "robotId",
        "schema": "string",
        "required": true,
        "description": "Unique robot ID\n\nYou can find a robot's ID by opening it on the dashboard and copying its ID in the browser address bar.\n",
        "example": "c3689adb-50aa-44af-b265-a7e0d4e5846e"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Monitor Products"
      },
      {
        "name": "inputParameters",
        "schema": "object",
        "required": true,
        "description": "",
        "example": {
          "originUrl": "https://www.ycombinator.com/companies/airbnb",
          "companies_skip": 0,
          "companies_limit": 10
        }
      },
      {
        "name": "schedules",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          {
            "type": "FIXED_INTERVAL",
            "everyMinutes": 60
          }
        ]
      },
      {
        "name": "schedule",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "FREQ=HOURLY;INTERVAL=1;BYWEEKDAY=MO,TU,WE,TH,FR"
      },
      {
        "name": "notifyOnCapturedScreenshotChange",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "notifyOnCapturedTextChange",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "capturedScreenshotNotificationThreshold",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 15
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
    "url": "/robots/{robotId}/monitors/{monitorId}",
    "method": "deleteRobotMonitor",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "monitors",
    "typeScriptTag": "monitors",
    "description": "Delete a robot's monitor",
    "parameters": [
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "You can generate a new API key on [your dashboard](https://dashboard.browse.ai/api) if you do not have one.\n",
        "example": "Bearer YOUR_SECRET_API_KEY"
      },
      {
        "name": "robotId",
        "schema": "string",
        "required": true,
        "description": "Unique robot ID\n\nYou can find a robot's ID by opening it on the dashboard and copying its ID in the browser address bar.\n",
        "example": "c3689adb-50aa-44af-b265-a7e0d4e5846e"
      },
      {
        "name": "monitorId",
        "schema": "string",
        "required": true,
        "description": "Unique monitor ID\n\nYou can find a monitor's ID by opening it on the dashboard and copying its ID in the browser address bar.\n",
        "example": "e524ab69-4269-4d9d-b3d8-678112a10d29"
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
    "url": "/robots/{robotId}/monitors/{monitorId}",
    "method": "getRobotMonitor",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "monitors",
    "typeScriptTag": "monitors",
    "description": "Retrieve a robot's monitor",
    "parameters": [
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "You can generate a new API key on [your dashboard](https://dashboard.browse.ai/api) if you do not have one.\n",
        "example": "Bearer YOUR_SECRET_API_KEY"
      },
      {
        "name": "robotId",
        "schema": "string",
        "required": true,
        "description": "Unique robot ID\n\nYou can find a robot's ID by opening it on the dashboard and copying its ID in the browser address bar.\n",
        "example": "c3689adb-50aa-44af-b265-a7e0d4e5846e"
      },
      {
        "name": "monitorId",
        "schema": "string",
        "required": true,
        "description": "Unique monitor ID\n\nYou can find a monitor's ID by opening it on the dashboard and copying its ID in the browser address bar.\n",
        "example": "e524ab69-4269-4d9d-b3d8-678112a10d29"
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
    "url": "/robots/{robotId}/monitors/{monitorId}",
    "method": "updateRobotMonitor",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "monitors",
    "typeScriptTag": "monitors",
    "description": "Update a robot's monitor",
    "parameters": [
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "You can generate a new API key on [your dashboard](https://dashboard.browse.ai/api) if you do not have one.\n",
        "example": "Bearer YOUR_SECRET_API_KEY"
      },
      {
        "name": "robotId",
        "schema": "string",
        "required": true,
        "description": "Unique robot ID\n\nYou can find a robot's ID by opening it on the dashboard and copying its ID in the browser address bar.\n",
        "example": "c3689adb-50aa-44af-b265-a7e0d4e5846e"
      },
      {
        "name": "monitorId",
        "schema": "string",
        "required": true,
        "description": "Unique monitor ID\n\nYou can find a monitor's ID by opening it on the dashboard and copying its ID in the browser address bar.\n",
        "example": "e524ab69-4269-4d9d-b3d8-678112a10d29"
      },
      {
        "name": "name",
        "schema": "string",
        "description": "",
        "example": "Monitor Products"
      },
      {
        "name": "status",
        "schema": "string",
        "description": "",
        "example": "active"
      },
      {
        "name": "inputParameters",
        "schema": "object",
        "description": "",
        "example": {
          "originUrl": "https://www.ycombinator.com/companies/airbnb",
          "companies_skip": 0,
          "companies_limit": 10
        }
      },
      {
        "name": "schedules",
        "schema": "array",
        "description": "",
        "example": [
          {
            "type": "FIXED_INTERVAL",
            "everyMinutes": 60
          }
        ]
      },
      {
        "name": "schedule",
        "schema": "string",
        "description": "",
        "example": "FREQ=HOURLY;INTERVAL=1;BYWEEKDAY=MO,TU,WE,TH,FR"
      },
      {
        "name": "notifyOnCapturedScreenshotChange",
        "schema": "boolean",
        "description": "",
        "example": true
      },
      {
        "name": "notifyOnCapturedTextChange",
        "schema": "boolean",
        "description": "",
        "example": true
      },
      {
        "name": "capturedScreenshotNotificationThreshold",
        "schema": "number",
        "description": "",
        "example": 15
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
    "url": "/robots/{robotId}/bulk-runs",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "bulk runs",
    "typeScriptTag": "bulkRuns",
    "description": "Retrieve a robot's bulk runs list",
    "parameters": [
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "You can generate a new API key on [your dashboard](https://dashboard.browse.ai/api) if you do not have one.\n",
        "example": "Bearer YOUR_SECRET_API_KEY"
      },
      {
        "name": "robotId",
        "schema": "string",
        "required": true,
        "description": "Unique robot ID\n\nYou can find a robot's ID by opening it on the dashboard and copying its ID in the browser address bar.\n",
        "example": "c3689adb-50aa-44af-b265-a7e0d4e5846e"
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Page number",
        "example": 1
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/robots/{robotId}/bulk-runs",
    "method": "executeTasks",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "bulk runs",
    "typeScriptTag": "bulkRuns",
    "description": "Bulk run tasks",
    "parameters": [
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "You can generate a new API key on [your dashboard](https://dashboard.browse.ai/api) if you do not have one.\n",
        "example": "Bearer YOUR_SECRET_API_KEY"
      },
      {
        "name": "robotId",
        "schema": "string",
        "required": true,
        "description": "Unique robot ID\n\nYou can find a robot's ID by opening it on the dashboard and copying its ID in the browser address bar.\n",
        "example": "c3689adb-50aa-44af-b265-a7e0d4e5846e"
      },
      {
        "name": "title",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Bulk Run Title"
      },
      {
        "name": "inputParameters",
        "schema": "array",
        "required": true,
        "description": "",
        "example": [
          {
            "originUrl": "https://www.ycombinator.com/companies/airbnb",
            "companies_skip": 0,
            "companies_limit": 10
          },
          {
            "originUrl": "https://www.ycombinator.com/companies/coinbase",
            "companies_skip": 0,
            "companies_limit": 20
          }
        ]
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
      },
      {
        "statusCode": "503",
        "description": ""
      }
    ]
  },
  {
    "url": "/robots/{robotId}/bulk-runs/{bulkRunId}",
    "method": "getRobotBulkRun",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "bulk runs",
    "typeScriptTag": "bulkRuns",
    "description": "Retrieve a robot's bulk run",
    "parameters": [
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "You can generate a new API key on [your dashboard](https://dashboard.browse.ai/api) if you do not have one.\n",
        "example": "Bearer YOUR_SECRET_API_KEY"
      },
      {
        "name": "robotId",
        "schema": "string",
        "required": true,
        "description": "Unique robot ID\n\nYou can find a robot's ID by opening it on the dashboard and copying its ID in the browser address bar.\n",
        "example": "c3689adb-50aa-44af-b265-a7e0d4e5846e"
      },
      {
        "name": "bulkRunId",
        "schema": "string",
        "required": true,
        "description": "Unique bulk run ID\n",
        "example": "5aa4df52-25bb-48da-bf38-ce4f2bd98dd5"
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Page number",
        "example": 1
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/robots/{robotId}/webhooks",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "webhooks",
    "typeScriptTag": "webhooks",
    "description": "Retrieve a robot's webhooks",
    "parameters": [
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "You can generate a new API key on [your dashboard](https://dashboard.browse.ai/api) if you do not have one.\n",
        "example": "Bearer YOUR_SECRET_API_KEY"
      },
      {
        "name": "robotId",
        "schema": "string",
        "required": true,
        "description": "Unique robot ID\n\nYou can find a robot's ID by opening it on the dashboard and copying its ID in the browser address bar.\n",
        "example": "c3689adb-50aa-44af-b265-a7e0d4e5846e"
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
    "url": "/robots/{robotId}/webhooks",
    "method": "createNewOnRobot",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "webhooks",
    "typeScriptTag": "webhooks",
    "description": "Create a new webhook on a robot",
    "parameters": [
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "You can generate a new API key on [your dashboard](https://dashboard.browse.ai/api) if you do not have one.\n",
        "example": "Bearer YOUR_SECRET_API_KEY"
      },
      {
        "name": "robotId",
        "schema": "string",
        "required": true,
        "description": "Unique robot ID\n\nYou can find a robot's ID by opening it on the dashboard and copying its ID in the browser address bar.\n",
        "example": "c3689adb-50aa-44af-b265-a7e0d4e5846e"
      },
      {
        "name": "hookUrl",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "https://example.com/v2/webhooks/callback/events"
      },
      {
        "name": "eventType",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "taskFinished"
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
    "url": "/robots/{robotId}/webhooks/{webhookId}",
    "method": "deleteRobotWebhook",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "webhooks",
    "typeScriptTag": "webhooks",
    "description": "Delete a robot's webhook",
    "parameters": [
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "You can generate a new API key on [your dashboard](https://dashboard.browse.ai/api) if you do not have one.\n",
        "example": "Bearer YOUR_SECRET_API_KEY"
      },
      {
        "name": "robotId",
        "schema": "string",
        "required": true,
        "description": "Unique robot ID\n\nYou can find a robot's ID by opening it on the dashboard and copying its ID in the browser address bar.\n",
        "example": "c3689adb-50aa-44af-b265-a7e0d4e5846e"
      },
      {
        "name": "webhookId",
        "schema": "string",
        "required": true,
        "description": "Unique webhookId ID\n",
        "example": "6d7f1218-43fb-4735-ac71-21e81b1ab23e"
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
      apiTitle="Browse AI API Documentation"
      apiBaseUrl="https://api.browse.ai/v2"
      apiVersion="v2"
      endpoints={13}
      sdkMethods={19}
      schemas={72}
      parameters={71}
      difficulty="Easy"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/browse-ai/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/browse-ai/openapi.yaml"
      developerDocumentation="www.browse.ai/docs/api/v2"
    />
  );
}
  