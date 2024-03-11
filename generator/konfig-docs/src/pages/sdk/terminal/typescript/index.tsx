import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import Description from "./_description.mdx";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
import { Sdk } from "@site/src/components/Sdk";

export default function TerminalTypeScriptSdk() {
  return (
    <Sdk
      sdkName="terminal-typescript-sdk"
      metaDescription="Terminal is Plaid for Telematics in commercial trucking. Companies building the next generation of insurance products, financial services and fleet software for trucking use our Universal API to access GPS data, speeding data and vehicle stats.

We are a fast growing, venture-backed startup supported by top investors including Y Combinator, Golden Ventures and Wayfinder Ventures (+ latest investors to be announced soon!). Our exceptionally talented team spans across San Francisco, Toronto and Vancouver.

For more details, check us out at https://withterminal.com"
      company="Terminal"
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/terminal/logo.png"
      clientNameCamelCase="terminal"
      homepage="withterminal.com"
      lastUpdated={new Date("2024-03-11T19:23:56.542Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/terminal/favicon.png"
      // Missing contactUrl
      // Missing contactEmail
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/terminal/imagePreview.png"
      GettingStarted={GettingStarted}
      Description={Description}
      methods={[
  {
    "url": "/public-token/exchange",
    "method": "exchangeToken",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Authentication",
    "typeScriptTag": "authentication",
    "description": "Public Token Exchange",
    "parameters": [
      {
        "name": "publicToken",
        "schema": "string",
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
    "url": "/connections",
    "method": "listAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Connections",
    "typeScriptTag": "connections",
    "description": "List All Connections",
    "parameters": [
      {
        "name": "cursor",
        "schema": "string",
        "description": "Pagination cursor to start requests from"
      },
      {
        "name": "limit",
        "schema": "string",
        "description": "The maximum number of results to return in a page."
      },
      {
        "name": "externalId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "dotNumber",
        "schema": "string",
        "description": ""
      },
      {
        "name": "tag",
        "schema": "string",
        "description": "Filter connections by tag"
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
    "url": "/connections",
    "method": "createCustomConnection",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Connections",
    "typeScriptTag": "connections",
    "description": "Create Connection",
    "parameters": [
      {
        "name": "tags",
        "schema": "array",
        "description": ""
      },
      {
        "name": "backfill",
        "schema": "object",
        "description": ""
      },
      {
        "name": "company",
        "schema": "object",
        "description": ""
      },
      {
        "name": "credentials",
        "schema": "object",
        "description": ""
      },
      {
        "name": "externalId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "provider",
        "schema": "string",
        "description": ""
      },
      {
        "name": "syncMode",
        "schema": "string",
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
    "url": "/connections/current",
    "method": "getCurrentDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Connections",
    "typeScriptTag": "connections",
    "description": "Get Current Connection",
    "parameters": [
      {
        "name": "connectionToken",
        "schema": "string",
        "description": "(Required) The token returned when a user authenticated their account. This authorizes access to a specific account."
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
    "url": "/connections/current",
    "method": "updateCurrentConnectionDetails",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Connections",
    "typeScriptTag": "connections",
    "description": "Update Current Connection",
    "parameters": [
      {
        "name": "connectionToken",
        "schema": "string",
        "description": "(Required) The token returned when a user authenticated their account. This authorizes access to a specific account."
      },
      {
        "name": "tags",
        "schema": "array",
        "description": ""
      },
      {
        "name": "company",
        "schema": "object",
        "description": ""
      },
      {
        "name": "externalId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "status",
        "schema": "string",
        "description": ""
      },
      {
        "name": "syncMode",
        "schema": "string",
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
    "url": "/syncs",
    "method": "listSyncHistory",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Data Management",
    "typeScriptTag": "dataManagement",
    "description": "List Sync History",
    "parameters": [
      {
        "name": "limit",
        "schema": "string",
        "description": "The maximum number of results to return in a page."
      },
      {
        "name": "cursor",
        "schema": "string",
        "description": "Pagination cursor to start requests from"
      },
      {
        "name": "status",
        "schema": "string",
        "description": ""
      },
      {
        "name": "expand",
        "schema": "string",
        "description": "Expand related resources in the response to reduce requests."
      },
      {
        "name": "connectionToken",
        "schema": "string",
        "description": "(Required) The token returned when a user authenticated their account. This authorizes access to a specific account."
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
    "url": "/syncs",
    "method": "requestSyncManual",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Data Management",
    "typeScriptTag": "dataManagement",
    "description": "Request Sync",
    "parameters": [
      {
        "name": "connectionToken",
        "schema": "string",
        "description": "(Required) The token returned when a user authenticated their account. This authorizes access to a specific account."
      },
      {
        "name": "days",
        "schema": "number",
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
    "url": "/syncs/{id}",
    "method": "getSyncStatus",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Data Management",
    "typeScriptTag": "dataManagement",
    "description": "Get Sync Job Status",
    "parameters": [
      {
        "name": "expand",
        "schema": "string",
        "description": "Expand related resources in the response to reduce requests."
      },
      {
        "name": "connectionToken",
        "schema": "string",
        "description": "(Required) The token returned when a user authenticated their account. This authorizes access to a specific account."
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
    "url": "/passthrough",
    "method": "makePassthroughRequest",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Data Management",
    "typeScriptTag": "dataManagement",
    "description": "Passthrough",
    "parameters": [
      {
        "name": "connectionToken",
        "schema": "string",
        "description": "(Required) The token returned when a user authenticated their account. This authorizes access to a specific account."
      },
      {
        "name": "body",
        "schema": "string",
        "description": ""
      },
      {
        "name": "headers",
        "schema": "object",
        "description": ""
      },
      {
        "name": "method",
        "schema": "string",
        "description": ""
      },
      {
        "name": "path",
        "schema": "string",
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
    "url": "/drivers",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Drivers",
    "typeScriptTag": "drivers",
    "description": "List Drivers",
    "parameters": [
      {
        "name": "cursor",
        "schema": "string",
        "description": "Pagination cursor to start requests from"
      },
      {
        "name": "limit",
        "schema": "string",
        "description": "The maximum number of results to return in a page."
      },
      {
        "name": "modifiedAfter",
        "schema": "string",
        "description": "Only include records that were last modified after a provided date."
      },
      {
        "name": "modifiedBefore",
        "schema": "string",
        "description": "Only include records that were last modified before a provided date."
      },
      {
        "name": "raw",
        "schema": "string",
        "description": "Include raw responses used to normalize model. Used for debugging or accessing unique properties that are not unified."
      },
      {
        "name": "expand",
        "schema": "string",
        "description": "Expand resources in the returned response"
      },
      {
        "name": "connectionToken",
        "schema": "string",
        "description": "(Required) The token returned when a user authenticated their account. This authorizes access to a specific account."
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
    "url": "/drivers/{id}",
    "method": "getDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Drivers",
    "typeScriptTag": "drivers",
    "description": "Get Driver",
    "parameters": [
      {
        "name": "raw",
        "schema": "string",
        "description": "Include raw responses used to normalize model. Used for debugging or accessing unique properties that are not unified."
      },
      {
        "name": "expand",
        "schema": "string",
        "description": "Expand resources in the returned response"
      },
      {
        "name": "connectionToken",
        "schema": "string",
        "description": "(Required) The token returned when a user authenticated their account. This authorizes access to a specific account."
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
    "url": "/groups",
    "method": "getAllGroups",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Groups",
    "typeScriptTag": "groups",
    "description": "List Groups",
    "parameters": [
      {
        "name": "limit",
        "schema": "string",
        "description": "The maximum number of results to return in a page."
      },
      {
        "name": "cursor",
        "schema": "string",
        "description": "Pagination cursor to start requests from"
      },
      {
        "name": "expand",
        "schema": "string",
        "description": "Expand resources in the returned response"
      },
      {
        "name": "raw",
        "schema": "string",
        "description": "Include raw responses used to normalize model. Used for debugging or accessing unique properties that are not unified."
      },
      {
        "name": "modifiedAfter",
        "schema": "string",
        "description": "Only include records that were last modified after a provided date."
      },
      {
        "name": "modifiedBefore",
        "schema": "string",
        "description": "Only include records that were last modified before a provided date."
      },
      {
        "name": "connectionToken",
        "schema": "string",
        "description": "(Required) The token returned when a user authenticated their account. This authorizes access to a specific account."
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
    "url": "/hos/available-time",
    "method": "getAvailableTime",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Hours of Service",
    "typeScriptTag": "hoursOfService",
    "description": "Available Time for Drivers",
    "parameters": [
      {
        "name": "cursor",
        "schema": "string",
        "description": "Pagination cursor to start requests from"
      },
      {
        "name": "limit",
        "schema": "string",
        "description": "The maximum number of results to return in a page."
      },
      {
        "name": "driverIds",
        "schema": "string",
        "description": "Comma separated list of driver IDs to filter for"
      },
      {
        "name": "expand",
        "schema": "string",
        "description": "Expand resources in the returned response"
      },
      {
        "name": "raw",
        "schema": "string",
        "description": "Include raw responses used to normalize model. Used for debugging or accessing unique properties that are not unified."
      },
      {
        "name": "connectionToken",
        "schema": "string",
        "description": "(Required) The token returned when a user authenticated their account. This authorizes access to a specific account."
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
    "url": "/hos/logs",
    "method": "listHosLogs",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Hours of Service",
    "typeScriptTag": "hoursOfService",
    "description": "List HOS Logs",
    "parameters": [
      {
        "name": "cursor",
        "schema": "string",
        "description": "Pagination cursor to start requests from"
      },
      {
        "name": "limit",
        "schema": "string",
        "description": "The maximum number of results to return in a page."
      },
      {
        "name": "startedAfter",
        "schema": "string",
        "description": "Only include records of statuses that started after a provided date."
      },
      {
        "name": "startedBefore",
        "schema": "string",
        "description": "Only include records of statuses that started before a provided date."
      },
      {
        "name": "modifiedAfter",
        "schema": "string",
        "description": "Only include records that were last modified after a provided date."
      },
      {
        "name": "modifiedBefore",
        "schema": "string",
        "description": "Only include records that were last modified before a provided date."
      },
      {
        "name": "driverIds",
        "schema": "string",
        "description": "Comma separated list of driver IDs to filter for"
      },
      {
        "name": "expand",
        "schema": "string",
        "description": "Expand resources in the returned response"
      },
      {
        "name": "raw",
        "schema": "string",
        "description": "Include raw responses used to normalize model. Used for debugging or accessing unique properties that are not unified."
      },
      {
        "name": "connectionToken",
        "schema": "string",
        "description": "(Required) The token returned when a user authenticated their account. This authorizes access to a specific account."
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
    "url": "/hos/daily-logs",
    "method": "getDailyLogs",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Hours of Service",
    "typeScriptTag": "hoursOfService",
    "description": "List HOS Daily Logs",
    "parameters": [
      {
        "name": "cursor",
        "schema": "string",
        "description": "Pagination cursor to start requests from"
      },
      {
        "name": "limit",
        "schema": "string",
        "description": "The maximum number of results to return in a page."
      },
      {
        "name": "startDate",
        "schema": "string",
        "description": "Only include daily logs from on or after a specific date"
      },
      {
        "name": "endDate",
        "schema": "string",
        "description": "Only include daily logs from on or before a specific date"
      },
      {
        "name": "modifiedAfter",
        "schema": "string",
        "description": "Only include records that were last modified after a provided date."
      },
      {
        "name": "modifiedBefore",
        "schema": "string",
        "description": "Only include records that were last modified before a provided date."
      },
      {
        "name": "driverIds",
        "schema": "string",
        "description": "Comma separated list of driver IDs to filter for"
      },
      {
        "name": "raw",
        "schema": "string",
        "description": "Include raw responses used to normalize model. Used for debugging or accessing unique properties that are not unified."
      },
      {
        "name": "expand",
        "schema": "string",
        "description": "Expand resources in the returned response"
      },
      {
        "name": "connectionToken",
        "schema": "string",
        "description": "(Required) The token returned when a user authenticated their account. This authorizes access to a specific account."
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
    "url": "/ifta/summary",
    "method": "getMonthlyReports",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "IFTA",
    "typeScriptTag": "ifta",
    "description": "Get IFTA Summary",
    "parameters": [
      {
        "name": "cursor",
        "schema": "string",
        "description": "Pagination cursor to start requests from"
      },
      {
        "name": "expand",
        "schema": "string",
        "description": "Expand resources in the returned response"
      },
      {
        "name": "raw",
        "schema": "string",
        "description": "Include raw responses used to normalize model. Used for debugging or accessing unique properties that are not unified."
      },
      {
        "name": "startMonth",
        "schema": "string",
        "description": "(Required) The month from which to start including vehicle reports"
      },
      {
        "name": "endMonth",
        "schema": "string",
        "description": "(Required) Include vehicle reports up to and including this month"
      },
      {
        "name": "groupBy",
        "schema": "string",
        "description": "Computes the total distance traversed within a specified month range, with the results grouped by either jurisdiction, vehicle, or both. If no grouping parameter is provided, the default grouping is `vehicle,jurisdiction`."
      },
      {
        "name": "connectionToken",
        "schema": "string",
        "description": "(Required) The token returned when a user authenticated their account. This authorizes access to a specific account."
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
    "url": "/issues",
    "method": "listObservedEvents",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Issues",
    "typeScriptTag": "issues",
    "description": "List Issues",
    "parameters": [
      {
        "name": "limit",
        "schema": "string",
        "description": "The maximum number of results to return in a page."
      },
      {
        "name": "cursor",
        "schema": "string",
        "description": "Pagination cursor to start requests from"
      },
      {
        "name": "lastReportedAfter",
        "schema": "string",
        "description": "Timestamp to start when the issue was last observed"
      },
      {
        "name": "lastReportedBefore",
        "schema": "string",
        "description": "Timestamp to end when the issue was last observed"
      },
      {
        "name": "expand",
        "schema": "string",
        "description": "Expand related resources to see all details"
      },
      {
        "name": "connectionId",
        "schema": "string",
        "description": "Filter issues to a specific connection"
      },
      {
        "name": "errorCode",
        "schema": "string",
        "description": "Filter issues to a specific error code"
      },
      {
        "name": "status",
        "schema": "string",
        "description": "Filter issues to a specific status"
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
    "url": "/issues/{issueId}/resolve",
    "method": "markResolved",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Issues",
    "typeScriptTag": "issues",
    "description": "Resolve Issue",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/providers",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Providers",
    "typeScriptTag": "providers",
    "description": "List Providers",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/safety/events",
    "method": "getEvents",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Safety",
    "typeScriptTag": "safety",
    "description": "List Safety Events",
    "parameters": [
      {
        "name": "cursor",
        "schema": "string",
        "description": "Pagination cursor to start requests from"
      },
      {
        "name": "limit",
        "schema": "string",
        "description": "The maximum number of results to return in a page."
      },
      {
        "name": "modifiedAfter",
        "schema": "string",
        "description": "Only include records that were last modified after a provided date."
      },
      {
        "name": "modifiedBefore",
        "schema": "string",
        "description": "Only include records that were last modified before a provided date."
      },
      {
        "name": "startedAfter",
        "schema": "string",
        "description": "Only include records of statuses that started after a provided date."
      },
      {
        "name": "startedBefore",
        "schema": "string",
        "description": "Only include records of statuses that started before a provided date."
      },
      {
        "name": "driverIds",
        "schema": "string",
        "description": "Comma separated list of driver IDs to filter for"
      },
      {
        "name": "vehicleIds",
        "schema": "string",
        "description": "Comma separated list of vehicle IDs to filter for"
      },
      {
        "name": "expand",
        "schema": "string",
        "description": "Expand resources in the returned response"
      },
      {
        "name": "raw",
        "schema": "string",
        "description": "Include raw responses used to normalize model. Used for debugging or accessing unique properties that are not unified."
      },
      {
        "name": "connectionToken",
        "schema": "string",
        "description": "(Required) The token returned when a user authenticated their account. This authorizes access to a specific account."
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
    "url": "/trailers",
    "method": "getAllTrailers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Trailers",
    "typeScriptTag": "trailers",
    "description": "List Trailers",
    "parameters": [
      {
        "name": "limit",
        "schema": "string",
        "description": "The maximum number of results to return in a page."
      },
      {
        "name": "cursor",
        "schema": "string",
        "description": "Pagination cursor to start requests from"
      },
      {
        "name": "expand",
        "schema": "string",
        "description": "Expand resources in the returned response"
      },
      {
        "name": "raw",
        "schema": "string",
        "description": "Include raw responses used to normalize model. Used for debugging or accessing unique properties that are not unified."
      },
      {
        "name": "modifiedAfter",
        "schema": "string",
        "description": "Only include records that were last modified after a provided date."
      },
      {
        "name": "modifiedBefore",
        "schema": "string",
        "description": "Only include records that were last modified before a provided date."
      },
      {
        "name": "connectionToken",
        "schema": "string",
        "description": "(Required) The token returned when a user authenticated their account. This authorizes access to a specific account."
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
    "url": "/trailers/locations",
    "method": "listLatestLocations",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Trailers",
    "typeScriptTag": "trailers",
    "description": "Latest Trailer Locations",
    "parameters": [
      {
        "name": "limit",
        "schema": "string",
        "description": "The maximum number of results to return in a page."
      },
      {
        "name": "cursor",
        "schema": "string",
        "description": "Pagination cursor to start requests from"
      },
      {
        "name": "expand",
        "schema": "string",
        "description": "Expand resources in the returned response"
      },
      {
        "name": "raw",
        "schema": "string",
        "description": "Include raw responses used to normalize model. Used for debugging or accessing unique properties that are not unified."
      },
      {
        "name": "connectionToken",
        "schema": "string",
        "description": "(Required) The token returned when a user authenticated their account. This authorizes access to a specific account."
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
    "url": "/vehicles",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Vehicles",
    "typeScriptTag": "vehicles",
    "description": "List Vehicles",
    "parameters": [
      {
        "name": "cursor",
        "schema": "string",
        "description": "Pagination cursor to start requests from"
      },
      {
        "name": "limit",
        "schema": "string",
        "description": "The maximum number of results to return in a page."
      },
      {
        "name": "modifiedAfter",
        "schema": "string",
        "description": "Only include records that were last modified after a provided date."
      },
      {
        "name": "modifiedBefore",
        "schema": "string",
        "description": "Only include records that were last modified before a provided date."
      },
      {
        "name": "raw",
        "schema": "string",
        "description": "Include raw responses used to normalize model. Used for debugging or accessing unique properties that are not unified."
      },
      {
        "name": "expand",
        "schema": "string",
        "description": "Expand resources in the returned response"
      },
      {
        "name": "connectionToken",
        "schema": "string",
        "description": "(Required) The token returned when a user authenticated their account. This authorizes access to a specific account."
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
    "url": "/vehicles/{id}",
    "method": "getDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Vehicles",
    "typeScriptTag": "vehicles",
    "description": "Get Vehicle",
    "parameters": [
      {
        "name": "raw",
        "schema": "string",
        "description": "Include raw responses used to normalize model. Used for debugging or accessing unique properties that are not unified."
      },
      {
        "name": "expand",
        "schema": "string",
        "description": "Expand resources in the returned response"
      },
      {
        "name": "connectionToken",
        "schema": "string",
        "description": "(Required) The token returned when a user authenticated their account. This authorizes access to a specific account."
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
    "url": "/vehicles/locations",
    "method": "getLatestLocations",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Vehicles",
    "typeScriptTag": "vehicles",
    "description": "Latest Vehicle Locations",
    "parameters": [
      {
        "name": "cursor",
        "schema": "string",
        "description": "Pagination cursor to start requests from"
      },
      {
        "name": "limit",
        "schema": "string",
        "description": "The maximum number of results to return in a page."
      },
      {
        "name": "raw",
        "schema": "string",
        "description": "Include raw responses used to normalize model. Used for debugging or accessing unique properties that are not unified."
      },
      {
        "name": "vehicleIds",
        "schema": "string",
        "description": "Comma separated list of vehicle IDs to filter for"
      },
      {
        "name": "expand",
        "schema": "string",
        "description": "Expand resources in the returned response"
      },
      {
        "name": "connectionToken",
        "schema": "string",
        "description": "(Required) The token returned when a user authenticated their account. This authorizes access to a specific account."
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
    "url": "/vehicles/{vehicleId}/locations",
    "method": "listHistoricalLocations",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Vehicles",
    "typeScriptTag": "vehicles",
    "description": "Historical Vehicle Locations",
    "parameters": [
      {
        "name": "cursor",
        "schema": "string",
        "description": "Pagination cursor to start requests from"
      },
      {
        "name": "limit",
        "schema": "string",
        "description": "The maximum number of results to return in a page."
      },
      {
        "name": "startAt",
        "schema": "string",
        "description": "Timestamp to start from - defaults to `TODAY - 1 MONTH`"
      },
      {
        "name": "endAt",
        "schema": "string",
        "description": "Timestamp to end at - defaults to `TODAY`"
      },
      {
        "name": "raw",
        "schema": "string",
        "description": "Include raw responses used to normalize model. Used for debugging or accessing unique properties that are not unified."
      },
      {
        "name": "connectionToken",
        "schema": "string",
        "description": "(Required) The token returned when a user authenticated their account. This authorizes access to a specific account."
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
    "url": "/vehicles/{vehicleId}/stats/historical",
    "method": "getHistoricalStats",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Vehicles",
    "typeScriptTag": "vehicles",
    "description": "Historical Vehicle Stats",
    "parameters": [
      {
        "name": "cursor",
        "schema": "string",
        "description": "Pagination cursor to start requests from"
      },
      {
        "name": "limit",
        "schema": "string",
        "description": "The maximum number of results to return in a page."
      },
      {
        "name": "expand",
        "schema": "string",
        "description": "Expand resources in the returned response"
      },
      {
        "name": "startAt",
        "schema": "string",
        "description": "Timestamp to start from - defaults to `TODAY - 1 MONTH`"
      },
      {
        "name": "endAt",
        "schema": "string",
        "description": "Timestamp to end at - defaults to `TODAY`"
      },
      {
        "name": "types",
        "schema": "string",
        "description": "Comma separated list of vehicle stats to filter for"
      },
      {
        "name": "raw",
        "schema": "string",
        "description": "Include raw responses used to normalize model. Used for debugging or accessing unique properties that are not unified."
      },
      {
        "name": "connectionToken",
        "schema": "string",
        "description": "(Required) The token returned when a user authenticated their account. This authorizes access to a specific account."
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
    "url": "/trips",
    "method": "getAllTrips",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Trips",
    "typeScriptTag": "trips",
    "description": "List Trips",
    "parameters": [
      {
        "name": "cursor",
        "schema": "string",
        "description": "Pagination cursor to start requests from"
      },
      {
        "name": "limit",
        "schema": "string",
        "description": "The maximum number of results to return in a page."
      },
      {
        "name": "modifiedAfter",
        "schema": "string",
        "description": "Only include records that were last modified after a provided date."
      },
      {
        "name": "modifiedBefore",
        "schema": "string",
        "description": "Only include records that were last modified before a provided date."
      },
      {
        "name": "startedAfter",
        "schema": "string",
        "description": "Only include trips that started after a provided date."
      },
      {
        "name": "startedBefore",
        "schema": "string",
        "description": "Only include trips that started before a provided date."
      },
      {
        "name": "endedAfter",
        "schema": "string",
        "description": "Only include trips that ended after a provided date."
      },
      {
        "name": "endedBefore",
        "schema": "string",
        "description": "Only include trips that ended before a provided date."
      },
      {
        "name": "driverIds",
        "schema": "string",
        "description": "Comma separated list of driver IDs to filter for"
      },
      {
        "name": "vehicleIds",
        "schema": "string",
        "description": "Comma separated list of vehicle IDs to filter for"
      },
      {
        "name": "raw",
        "schema": "string",
        "description": "Include raw responses used to normalize model. Used for debugging or accessing unique properties that are not unified."
      },
      {
        "name": "expand",
        "schema": "string",
        "description": "Expand resources in the returned response"
      },
      {
        "name": "connectionToken",
        "schema": "string",
        "description": "(Required) The token returned when a user authenticated their account. This authorizes access to a specific account."
      }
    ],
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
      apiTitle="Terminal API"
      apiBaseUrl="https://api.sandbox.withterminal.com/tsp/v1/"
      apiVersion="1.0.0"
      endpoints={25}
      sdkMethods={34}
      schemas={6}
      parameters={158}
      difficulty="Easy"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/terminal/openapi.yaml"
    />
  );
}
  