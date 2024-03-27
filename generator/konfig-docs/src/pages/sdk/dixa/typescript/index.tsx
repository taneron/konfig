import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function DixaTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="dixa-typescript-sdk"
      metaDescription={`Dixa enables companies to deliver customer service as it is meant to be. We help customer service leaders to create effortless experiences for customers and teams that unlock loyalty.
Dixa's Conversational Customer Service Platform combines powerful AI with a human touch to deliver a highly-personalized service experience that scales. Our dedicated customer success team ensures you are up and running quickly. Dixa powers more than 30 million conversations a year and is trusted by leading brands such as Interflora, On, Wise, Deezer, Rapha, Too Good to Go, Hello Print, and Wistia. Learn more by visiting dixa.com.`}
      company="Dixa"
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/dixa/logo.png"
      companyKebabCase="dixa"
      clientNameCamelCase="dixa"
      homepage="dixa.com"
      lastUpdated={new Date("2024-03-27T21:38:40.500Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/dixa/favicon.png"
      // Missing contactUrl
      // Missing contactEmail
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/dixa/imagePreview.jpg"
      GettingStarted={GettingStarted}
      FirstRequest={FirstRequest}
      categories={["customer_service","conversational_ai","customer_support"]}
      methods={[
  {
    "url": "/v1/analytics/metrics",
    "method": "listMetrics",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Analytics",
    "typeScriptTag": "analytics",
    "description": "Metrics Catalogue",
    "parameters": [
      {
        "name": "pageLimit",
        "schema": "integer",
        "required": false,
        "description": "Maximum number of results per page. May be used in combination with pageKey to change the number of results in between page requests."
      },
      {
        "name": "pageKey",
        "schema": "string",
        "required": false,
        "description": "Base64 encoded form of pagination query parameters. Do not try to construct or change programmatically as the internal structure may change without notice."
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/analytics/metrics",
    "method": "getMetricData",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Analytics",
    "typeScriptTag": "analytics",
    "description": "Get Metric Data",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "periodFilter",
        "schema": "undefined",
        "required": true,
        "description": ""
      },
      {
        "name": "filters",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "aggregations",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "timezone",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TIMEZONE"
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/analytics/metrics/{metricId}",
    "method": "getMetricDescription",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Analytics",
    "typeScriptTag": "analytics",
    "description": "Metric Description",
    "parameters": [
      {
        "name": "metricId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "METRICID"
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/analytics/filter/{filterAttribute}",
    "method": "filterValues",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Analytics",
    "typeScriptTag": "analytics",
    "description": "Filter values",
    "parameters": [
      {
        "name": "filterAttribute",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FILTERATTRIBUTE"
      },
      {
        "name": "pageLimit",
        "schema": "integer",
        "required": false,
        "description": "Maximum number of results per page. May be used in combination with pageKey to change the number of results in between page requests."
      },
      {
        "name": "pageKey",
        "schema": "string",
        "required": false,
        "description": "Base64 encoded form of pagination query parameters. Do not try to construct or change programmatically as the internal structure may change without notice."
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/analytics/records",
    "method": "listRecords",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Analytics",
    "typeScriptTag": "analytics",
    "description": "Metric Records Catalogue",
    "parameters": [
      {
        "name": "pageLimit",
        "schema": "integer",
        "required": false,
        "description": "Maximum number of results per page. May be used in combination with pageKey to change the number of results in between page requests."
      },
      {
        "name": "pageKey",
        "schema": "string",
        "required": false,
        "description": "Base64 encoded form of pagination query parameters. Do not try to construct or change programmatically as the internal structure may change without notice."
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/analytics/records",
    "method": "getMetricRecordsData",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Analytics",
    "typeScriptTag": "analytics",
    "description": "Get Metric Records Data",
    "parameters": [
      {
        "name": "pageLimit",
        "schema": "integer",
        "required": false,
        "description": "Maximum number of results per page. May be used in combination with pageKey to change the number of results in between page requests."
      },
      {
        "name": "pageKey",
        "schema": "string",
        "required": false,
        "description": "Base64 encoded form of pagination query parameters. Do not try to construct or change programmatically as the internal structure may change without notice."
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "periodFilter",
        "schema": "undefined",
        "required": true,
        "description": ""
      },
      {
        "name": "filters",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "timezone",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TIMEZONE"
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/analytics/records/{recordId}",
    "method": "getRecordProperties",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Analytics",
    "typeScriptTag": "analytics",
    "description": "Metric Record Description",
    "parameters": [
      {
        "name": "recordId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "RECORDID"
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/agents/presence",
    "method": "listPresence",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Agents",
    "typeScriptTag": "agents",
    "description": "List presence",
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/agents",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Agents",
    "typeScriptTag": "agents",
    "description": "List agents",
    "parameters": [
      {
        "name": "pageLimit",
        "schema": "integer",
        "required": false,
        "description": "Maximum number of results per page. May be used in combination with pageKey to change the number of results in between page requests."
      },
      {
        "name": "pageKey",
        "schema": "string",
        "required": false,
        "description": "Base64 encoded form of pagination query parameters. Do not try to construct or change programmatically as the internal structure may change without notice."
      },
      {
        "name": "email",
        "schema": "string",
        "required": false,
        "description": "The agent/admin email filter"
      },
      {
        "name": "phone",
        "schema": "string",
        "required": false,
        "description": "The agent/admin phone number filter"
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
    "url": "/v1/agents",
    "method": "bulkPatch",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Agents",
    "typeScriptTag": "agents",
    "description": "Patch agents",
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/agents",
    "method": "createAgent",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Agents",
    "typeScriptTag": "agents",
    "description": "Create agent",
    "parameters": [
      {
        "name": "displayName",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DISPLAYNAME"
      },
      {
        "name": "email",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EMAIL"
      },
      {
        "name": "phoneNumber",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "additionalEmails",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "additionalPhoneNumbers",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "firstName",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "lastName",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "middleNames",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "avatarUrl",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/agents",
    "method": "updateBulk",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Agents",
    "typeScriptTag": "agents",
    "description": "Update agents",
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/agents/{agentId}/teams",
    "method": "listTeams",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Agents",
    "typeScriptTag": "agents",
    "description": "List teams",
    "parameters": [
      {
        "name": "agentId",
        "schema": "string",
        "required": true,
        "description": "The agent/admin id",
        "example": "AGENTID"
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
    "url": "/v1/agents/{agentId}/presence",
    "method": "getPresence",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Agents",
    "typeScriptTag": "agents",
    "description": "Get presence",
    "parameters": [
      {
        "name": "agentId",
        "schema": "string",
        "required": true,
        "description": "The agent/admin id",
        "example": "AGENTID"
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
    "url": "/v1/agents/bulk",
    "method": "createBulk",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Agents",
    "typeScriptTag": "agents",
    "description": "Create agents",
    "parameters": [
      {
        "name": "data",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/agents/{agentId}",
    "method": "downgradeAgent",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Agents",
    "typeScriptTag": "agents",
    "description": "Delete agent",
    "parameters": [
      {
        "name": "agentId",
        "schema": "string",
        "required": true,
        "description": "The agent/admin id",
        "example": "AGENTID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "The agent/admin was successfully downgraded to end user"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/agents/{agentId}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Agents",
    "typeScriptTag": "agents",
    "description": "Get agent",
    "parameters": [
      {
        "name": "agentId",
        "schema": "string",
        "required": true,
        "description": "The agent/admin id",
        "example": "AGENTID"
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
    "url": "/v1/agents/{agentId}",
    "method": "updateAdmin",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Agents",
    "typeScriptTag": "agents",
    "description": "Patch agent",
    "parameters": [
      {
        "name": "agentId",
        "schema": "string",
        "required": true,
        "description": "The agent/admin id",
        "example": "AGENTID"
      },
      {
        "name": "displayName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "phoneNumber",
        "schema": "string",
        "description": ""
      },
      {
        "name": "additionalEmails",
        "schema": "array",
        "description": ""
      },
      {
        "name": "additionalPhoneNumbers",
        "schema": "array",
        "description": ""
      },
      {
        "name": "firstName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lastName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "middleNames",
        "schema": "array",
        "description": ""
      },
      {
        "name": "avatarUrl",
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
    "url": "/v1/agents/{agentId}",
    "method": "updateAgentAdmin",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Agents",
    "typeScriptTag": "agents",
    "description": "Update agent",
    "parameters": [
      {
        "name": "agentId",
        "schema": "string",
        "required": true,
        "description": "The agent id",
        "example": "AGENTID"
      },
      {
        "name": "displayName",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DISPLAYNAME"
      },
      {
        "name": "phoneNumber",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "additionalEmails",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "additionalPhoneNumbers",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "firstName",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "lastName",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "middleNames",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "avatarUrl",
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
    "url": "/v1/endusers",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "End Users",
    "typeScriptTag": "endUsers",
    "description": "List end users",
    "parameters": [
      {
        "name": "pageLimit",
        "schema": "integer",
        "required": false,
        "description": "Maximum number of results per page. May be used in combination with pageKey to change the number of results in between page requests."
      },
      {
        "name": "pageKey",
        "schema": "string",
        "required": false,
        "description": "Base64 encoded form of pagination query parameters. Do not try to construct or change programmatically as the internal structure may change without notice."
      },
      {
        "name": "email",
        "schema": "string",
        "required": false,
        "description": "Filter by the contact's email"
      },
      {
        "name": "phone",
        "schema": "string",
        "required": false,
        "description": "Filter by the contact's phone number"
      },
      {
        "name": "externalId",
        "schema": "string",
        "required": false,
        "description": "Filter by the contact's external id"
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
    "url": "/v1/endusers",
    "method": "bulkPatch",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "End Users",
    "typeScriptTag": "endUsers",
    "description": "Patch end users",
    "parameters": [
      {
        "name": "data",
        "schema": "array",
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/endusers",
    "method": "createUser",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "End Users",
    "typeScriptTag": "endUsers",
    "description": "Create end user",
    "parameters": [
      {
        "name": "displayName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "email",
        "schema": "string",
        "description": ""
      },
      {
        "name": "phoneNumber",
        "schema": "string",
        "description": ""
      },
      {
        "name": "additionalEmails",
        "schema": "array",
        "description": ""
      },
      {
        "name": "additionalPhoneNumbers",
        "schema": "array",
        "description": ""
      },
      {
        "name": "firstName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lastName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "middleNames",
        "schema": "array",
        "description": ""
      },
      {
        "name": "avatarUrl",
        "schema": "string",
        "description": ""
      },
      {
        "name": "externalId",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/endusers",
    "method": "bulkUpdate",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "End Users",
    "typeScriptTag": "endUsers",
    "description": "Update end users",
    "parameters": [
      {
        "name": "data",
        "schema": "array",
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/endusers/bulk",
    "method": "createBulkUser",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "End Users",
    "typeScriptTag": "endUsers",
    "description": "Create end users",
    "parameters": [
      {
        "name": "data",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/endusers/{userId}",
    "method": "getUserById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "End Users",
    "typeScriptTag": "endUsers",
    "description": "Get end user",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "The end user id",
        "example": "USERID"
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
    "url": "/v1/endusers/{userId}",
    "method": "updateUser",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "End Users",
    "typeScriptTag": "endUsers",
    "description": "Patch end user",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "The end user id to be patched",
        "example": "USERID"
      },
      {
        "name": "displayName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "email",
        "schema": "string",
        "description": ""
      },
      {
        "name": "phoneNumber",
        "schema": "string",
        "description": ""
      },
      {
        "name": "additionalEmails",
        "schema": "array",
        "description": ""
      },
      {
        "name": "additionalPhoneNumbers",
        "schema": "array",
        "description": ""
      },
      {
        "name": "firstName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lastName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "middleNames",
        "schema": "array",
        "description": ""
      },
      {
        "name": "avatarUrl",
        "schema": "string",
        "description": ""
      },
      {
        "name": "externalId",
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
    "url": "/v1/endusers/{userId}",
    "method": "updateUserById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "End Users",
    "typeScriptTag": "endUsers",
    "description": "Update end user",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "The end user id",
        "example": "USERID"
      },
      {
        "name": "displayName",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DISPLAYNAME"
      },
      {
        "name": "email",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "phoneNumber",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "additionalEmails",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "additionalPhoneNumbers",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "firstName",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "lastName",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "middleNames",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "avatarUrl",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "externalId",
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
    "url": "/v1/endusers/{userId}/anonymize",
    "method": "anonymizeUser",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "End Users",
    "typeScriptTag": "endUsers",
    "description": "Anonymize end user",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "The id of the end user to anonymize",
        "example": "USERID"
      },
      {
        "name": "force",
        "schema": "boolean",
        "required": false,
        "description": "Whether to force close all the conversations initiated by the end user, if any are found in a non closed state."
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "409",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/endusers/{userId}/custom-attributes",
    "method": "updateCustomAttributes",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "End Users",
    "typeScriptTag": "endUsers",
    "description": "Patch end user custom attributes",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERID"
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
    "url": "/v1/endusers/{userId}/conversations",
    "method": "listConversations",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "End Users",
    "typeScriptTag": "endUsers",
    "description": "List end user conversations",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERID"
      },
      {
        "name": "pageLimit",
        "schema": "integer",
        "required": false,
        "description": "Maximum number of results per page. May be used in combination with pageKey to change the number of results in between page requests."
      },
      {
        "name": "pageKey",
        "schema": "string",
        "required": false,
        "description": "Base64 encoded form of pagination query parameters. Do not try to construct or change programmatically as the internal structure may change without notice."
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
    "url": "/v1/teams",
    "method": "listAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Teams",
    "typeScriptTag": "teams",
    "description": "List teams",
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/teams",
    "method": "createTeam",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Teams",
    "typeScriptTag": "teams",
    "description": "Create team",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/teams/{teamId}/agents",
    "method": "removeMembers",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Teams",
    "typeScriptTag": "teams",
    "description": "Remove members",
    "parameters": [
      {
        "name": "teamId",
        "schema": "string",
        "required": true,
        "description": "The team id",
        "example": "TEAMID"
      },
      {
        "name": "agentIds",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "The agents/admins were successfully removed from the team"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/teams/{teamId}/agents",
    "method": "listMembers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Teams",
    "typeScriptTag": "teams",
    "description": "List members",
    "parameters": [
      {
        "name": "teamId",
        "schema": "string",
        "required": true,
        "description": "The team id",
        "example": "TEAMID"
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/teams/{teamId}/agents",
    "method": "addMembers",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Teams",
    "typeScriptTag": "teams",
    "description": "Add members",
    "parameters": [
      {
        "name": "teamId",
        "schema": "string",
        "required": true,
        "description": "The team id",
        "example": "TEAMID"
      },
      {
        "name": "agentIds",
        "schema": "array",
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/teams/{teamId}/presence",
    "method": "listPresenceStatus",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Teams",
    "typeScriptTag": "teams",
    "description": "List presence",
    "parameters": [
      {
        "name": "teamId",
        "schema": "string",
        "required": true,
        "description": "The team id",
        "example": "TEAMID"
      },
      {
        "name": "pageLimit",
        "schema": "integer",
        "required": false,
        "description": "Maximum number of results per page. May be used in combination with pageKey to change the number of results in between page requests."
      },
      {
        "name": "pageKey",
        "schema": "string",
        "required": false,
        "description": "Base64 encoded form of pagination query parameters. Do not try to construct or change programmatically as the internal structure may change without notice."
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
    "url": "/v1/teams/{teamId}",
    "method": "removeTeam",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Teams",
    "typeScriptTag": "teams",
    "description": "Delete team",
    "parameters": [
      {
        "name": "teamId",
        "schema": "string",
        "required": true,
        "description": "The team id",
        "example": "TEAMID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "The team was successfully deleted"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/teams/{teamId}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Teams",
    "typeScriptTag": "teams",
    "description": "Get team",
    "parameters": [
      {
        "name": "teamId",
        "schema": "string",
        "required": true,
        "description": "The team id",
        "example": "TEAMID"
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/conversations/{conversationId}/anonymize",
    "method": "anonymizeConversation",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Conversations",
    "typeScriptTag": "conversations",
    "description": "Anonymize conversation",
    "parameters": [
      {
        "name": "conversationId",
        "schema": "integer",
        "required": true,
        "description": "the id of the conversation to anonymize",
        "example": 0
      },
      {
        "name": "force",
        "schema": "boolean",
        "required": false,
        "description": "Whether to force close the conversation if it is found in a non closed state."
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "409",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/conversations/{conversationId}/messages/{messageId}/anonymize",
    "method": "anonymizeMessage",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Conversations",
    "typeScriptTag": "conversations",
    "description": "Anonymize message",
    "parameters": [
      {
        "name": "conversationId",
        "schema": "integer",
        "required": true,
        "description": "the id of the conversation in which the message belongs",
        "example": 0
      },
      {
        "name": "messageId",
        "schema": "string",
        "required": true,
        "description": "the id of the message to anonymize",
        "example": "MESSAGEID"
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "409",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/conversations/{conversationId}/close",
    "method": "markClosed",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Conversations",
    "typeScriptTag": "conversations",
    "description": "Close conversation",
    "parameters": [
      {
        "name": "conversationId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "userId",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "The conversation was successfully closed"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/conversations/{conversationId}/reopen",
    "method": "reopenConversation",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Conversations",
    "typeScriptTag": "conversations",
    "description": "Reopen conversation",
    "parameters": [
      {
        "name": "conversationId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "userId",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "The conversation was successfully reopened and offered in the same queue"
      },
      {
        "statusCode": "400",
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
    "url": "/v1/conversations/{conversationId}/transfer/queue",
    "method": "transferQueue",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Conversations",
    "typeScriptTag": "conversations",
    "description": "Transfer conversation",
    "parameters": [
      {
        "name": "conversationId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "queueId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "QUEUEID"
      },
      {
        "name": "userId",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "The conversation was successfully transferred to the target queue"
      },
      {
        "statusCode": "400",
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
    "url": "/v1/conversations/{conversationId}/notes/bulk",
    "method": "addInternalNotes",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Conversations",
    "typeScriptTag": "conversations",
    "description": "Add internal notes",
    "parameters": [
      {
        "name": "conversationId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "data",
        "schema": "array",
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
    "url": "/v1/conversations/{conversationId}/notes",
    "method": "listInternalNotes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Conversations",
    "typeScriptTag": "conversations",
    "description": "List internal notes",
    "parameters": [
      {
        "name": "conversationId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
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
    "url": "/v1/conversations/{conversationId}/notes",
    "method": "addInternalNote",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Conversations",
    "typeScriptTag": "conversations",
    "description": "Add internal note",
    "parameters": [
      {
        "name": "conversationId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "message",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "MESSAGE"
      },
      {
        "name": "agentId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "createdAt",
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
    "url": "/v1/conversations/{conversationId}/rating",
    "method": "listRating",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Conversations",
    "typeScriptTag": "conversations",
    "description": "List rating",
    "parameters": [
      {
        "name": "conversationId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
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
    "url": "/v1/conversations/activitylog",
    "method": "listOrganizationActivityLog",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Conversations",
    "typeScriptTag": "conversations",
    "description": "List organization activity log",
    "parameters": [
      {
        "name": "pageLimit",
        "schema": "integer",
        "required": false,
        "description": "Maximum number of results per page. May be used in combination with pageKey to change the number of results in between page requests."
      },
      {
        "name": "pageKey",
        "schema": "string",
        "required": false,
        "description": "Base64 encoded form of pagination query parameters. Do not try to construct or change programmatically as the internal structure may change without notice."
      },
      {
        "name": "fromDatetime",
        "schema": "string",
        "required": false,
        "description": "Starting date-time filter with ISO 8601 format: yyyy-MM-dd'T'HH:mm:sss'Z'"
      },
      {
        "name": "toDatetime",
        "schema": "string",
        "required": false,
        "description": "Ending date-time filter with ISO 8601 format: yyyy-MM-dd'T'HH:mm:sss'Z'"
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/conversations/flows",
    "method": "listFlows",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Conversations",
    "typeScriptTag": "conversations",
    "description": "List flows",
    "parameters": [
      {
        "name": "channel",
        "schema": "string",
        "required": false,
        "description": "An optional ConversationChannel can be specified to filter the flows. If not provided, the default channel is PstnPhone. Possible values: [WhatsApp, Voicemail, WidgetChat, FacebookMessenger, Email, ContactForm, Callback, PstnPhone, Messenger]"
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/conversations/{conversationId}/tags/{tagId}",
    "method": "untagConversation",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Conversations",
    "typeScriptTag": "conversations",
    "description": "Untag conversation",
    "parameters": [
      {
        "name": "conversationId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "tagId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TAGID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "The conversation was successfully untagged"
      },
      {
        "statusCode": "400",
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
    "url": "/v1/conversations/{conversationId}/tags/{tagId}",
    "method": "tagConversation",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Conversations",
    "typeScriptTag": "conversations",
    "description": "Tag conversation",
    "parameters": [
      {
        "name": "conversationId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "tagId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TAGID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "The conversation was successfully tagged"
      },
      {
        "statusCode": "400",
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
    "url": "/v1/conversations/{conversationId}/tags",
    "method": "listTags",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Conversations",
    "typeScriptTag": "conversations",
    "description": "List tags",
    "parameters": [
      {
        "name": "conversationId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
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
    "url": "/v1/conversations/{conversationId}/messages",
    "method": "listMessages",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Conversations",
    "typeScriptTag": "conversations",
    "description": "List messages",
    "parameters": [
      {
        "name": "conversationId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/conversations/{conversationId}/messages",
    "method": "addMessage",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Conversations",
    "typeScriptTag": "conversations",
    "description": "Add message",
    "parameters": [
      {
        "name": "conversationId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
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
    "url": "/v1/conversations",
    "method": "createNewConversation",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Conversations",
    "typeScriptTag": "conversations",
    "description": "Create conversation",
    "parameters": [],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
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
    "url": "/v1/conversations/{conversationId}/custom-attributes",
    "method": "updateCustomAttributes",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Conversations",
    "typeScriptTag": "conversations",
    "description": "Patch conversation custom attributes",
    "parameters": [
      {
        "name": "conversationId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
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
    "url": "/v1/conversations/{conversationId}/claim",
    "method": "claimConversation",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Conversations",
    "typeScriptTag": "conversations",
    "description": "Claim conversation",
    "parameters": [
      {
        "name": "conversationId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "agentId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "AGENTID"
      },
      {
        "name": "force",
        "schema": "boolean",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "The conversation was successfully claimed"
      },
      {
        "statusCode": "400",
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
    "url": "/v1/conversations/{conversationId}/activitylog",
    "method": "getActivityLog",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Conversations",
    "typeScriptTag": "conversations",
    "description": "List activity log",
    "parameters": [
      {
        "name": "conversationId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/conversations/{conversationId}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Conversations",
    "typeScriptTag": "conversations",
    "description": "Get conversation",
    "parameters": [
      {
        "name": "conversationId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
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
    "url": "/v1/conversations/{conversationId}/linked",
    "method": "listLinked",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Conversations",
    "typeScriptTag": "conversations",
    "description": "List linked conversations",
    "parameters": [
      {
        "name": "conversationId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
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
    "url": "/v1/queues",
    "method": "listAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Queues",
    "typeScriptTag": "queues",
    "description": "List queues",
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/queues",
    "method": "createQueue",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Queues",
    "typeScriptTag": "queues",
    "description": "Create queue",
    "parameters": [
      {
        "name": "request",
        "schema": "object",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/queues/{queueId}/members",
    "method": "removeMembersBulk",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Queues",
    "typeScriptTag": "queues",
    "description": "Remove agents",
    "parameters": [
      {
        "name": "queueId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "QUEUEID"
      },
      {
        "name": "agentIds",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "The bulk operation succeeded"
      },
      {
        "statusCode": "400",
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
    "url": "/v1/queues/{queueId}/members",
    "method": "listMembers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Queues",
    "typeScriptTag": "queues",
    "description": "List agents",
    "parameters": [
      {
        "name": "queueId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "QUEUEID"
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
    "url": "/v1/queues/{queueId}/members",
    "method": "assignMembers",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Queues",
    "typeScriptTag": "queues",
    "description": "Assign agents",
    "parameters": [
      {
        "name": "queueId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "QUEUEID"
      },
      {
        "name": "agentIds",
        "schema": "array",
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
    "url": "/v1/queues/{queueId}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Queues",
    "typeScriptTag": "queues",
    "description": "Get queue",
    "parameters": [
      {
        "name": "queueId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "QUEUEID"
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
    "url": "/v1/tags",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Tags",
    "typeScriptTag": "tags",
    "description": "List tags",
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/tags",
    "method": "createTag",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Tags",
    "typeScriptTag": "tags",
    "description": "Create tag",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "color",
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/tags/{tagId}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Tags",
    "typeScriptTag": "tags",
    "description": "Get tag",
    "parameters": [
      {
        "name": "tagId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TAGID"
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
    "url": "/v1/tags/{tagId}/deactivate",
    "method": "deactivateTag",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Tags",
    "typeScriptTag": "tags",
    "description": "Deactivate tag",
    "parameters": [
      {
        "name": "tagId",
        "schema": "string",
        "required": true,
        "description": "The tag id",
        "example": "TAGID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "The tag was successfully deactivated"
      },
      {
        "statusCode": "400",
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
    "url": "/v1/tags/{tagId}/activate",
    "method": "activateTag",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Tags",
    "typeScriptTag": "tags",
    "description": "Activate tag",
    "parameters": [
      {
        "name": "tagId",
        "schema": "string",
        "required": true,
        "description": "The tag id",
        "example": "TAGID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "The tag was successfully activated"
      },
      {
        "statusCode": "400",
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
    "url": "/v1/anonymization/request/{requestId}",
    "method": "getStatus",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Anonymization",
    "typeScriptTag": "anonymization",
    "description": "Get anonymization status",
    "parameters": [
      {
        "name": "requestId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "REQUESTID"
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
    "url": "/v1/anonymization",
    "method": "entityAnonymize",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Anonymization",
    "typeScriptTag": "anonymization",
    "description": "Anonymize entity",
    "parameters": [
      {
        "name": "entityId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ENTITYID"
      },
      {
        "name": "entityType",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "forceAnonymization",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "_type",
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/contact-endpoints/{contactEndpointId}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Contact Endpoints",
    "typeScriptTag": "contactEndpoints",
    "description": "Get contact endpoint",
    "parameters": [
      {
        "name": "contactEndpointId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CONTACTENDPOINTID"
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/contact-endpoints",
    "method": "listAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Contact Endpoints",
    "typeScriptTag": "contactEndpoints",
    "description": "List contact endpoints",
    "parameters": [
      {
        "name": "type",
        "schema": "string",
        "required": false,
        "description": "An optional contact type can be specified to filter the contact endpoints. If not provided, all types are listed. Possible values: [EmailEndpoint, TelephonyEndpoint]"
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/custom-attributes",
    "method": "listDefinitions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Custom Attributes",
    "typeScriptTag": "customAttributes",
    "description": "List custom attributes definitions",
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/search/conversations",
    "method": "conversationsContainingText",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Search",
    "typeScriptTag": "search",
    "description": "Search conversations",
    "parameters": [
      {
        "name": "pageLimit",
        "schema": "integer",
        "required": false,
        "description": "Maximum number of results per page. May be used in combination with pageKey to change the number of results in between page requests."
      },
      {
        "name": "pageKey",
        "schema": "string",
        "required": false,
        "description": "Base64 encoded form of pagination query parameters. Do not try to construct or change programmatically as the internal structure may change without notice."
      },
      {
        "name": "query",
        "schema": "string",
        "required": true,
        "description": "The text by which to search conversations",
        "example": "cancel my order"
      },
      {
        "name": "exactMatch",
        "schema": "boolean",
        "required": false,
        "description": "Return only exact matches. This value is false by default."
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/webhooks/{webhookSubscriptionId}",
    "method": "deleteSubscription",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Webhooks",
    "typeScriptTag": "webhooks",
    "description": "Delete Webhook Subscription",
    "parameters": [
      {
        "name": "webhookSubscriptionId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "WEBHOOKSUBSCRIPTIONID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "The Webhook Subscription was successfully deleted"
      },
      {
        "statusCode": "400",
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
    "url": "/v1/webhooks/{webhookSubscriptionId}",
    "method": "getSubscriptionById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Webhooks",
    "typeScriptTag": "webhooks",
    "description": "Webhook Subscription",
    "parameters": [
      {
        "name": "webhookSubscriptionId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "WEBHOOKSUBSCRIPTIONID"
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
    "url": "/v1/webhooks/{webhookSubscriptionId}",
    "method": "updateSubscription",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Webhooks",
    "typeScriptTag": "webhooks",
    "description": "Patch Webhook Subscription",
    "parameters": [
      {
        "name": "webhookSubscriptionId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "WEBHOOKSUBSCRIPTIONID"
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "events",
        "schema": "array",
        "description": ""
      },
      {
        "name": "url",
        "schema": "string",
        "description": ""
      },
      {
        "name": "authorization",
        "schema": "undefined",
        "description": ""
      },
      {
        "name": "enabled",
        "schema": "boolean",
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/webhooks",
    "method": "listSubscriptions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Webhooks",
    "typeScriptTag": "webhooks",
    "description": "List all Webhook Subscriptions",
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/webhooks",
    "method": "createSubscription",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Webhooks",
    "typeScriptTag": "webhooks",
    "description": "Create Webhook Subscription",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "events",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "url",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "URL"
      },
      {
        "name": "authorization",
        "schema": "undefined",
        "required": true,
        "description": ""
      },
      {
        "name": "enabled",
        "schema": "boolean",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/webhooks/{webhookSubscriptionId}/delivery-status",
    "method": "getDeliveryStatus",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Webhooks",
    "typeScriptTag": "webhooks",
    "description": "Webhook Subscription Last Delivery Statuses",
    "parameters": [
      {
        "name": "webhookSubscriptionId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "WEBHOOKSUBSCRIPTIONID"
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
    "url": "/v1/webhooks/{webhookSubscriptionId}/delivery-status/logs/{event}",
    "method": "getDeliveryStatusLogs",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Webhooks",
    "typeScriptTag": "webhooks",
    "description": "Webhook Subscription Event Logs",
    "parameters": [
      {
        "name": "webhookSubscriptionId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "WEBHOOKSUBSCRIPTIONID"
      },
      {
        "name": "event",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EVENT"
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
      apiTitle="Dixa API"
      apiBaseUrl="https://dev.dixa.io"
      apiVersion="v1"
      endpoints={57}
      sdkMethods={84}
      schemas={299}
      parameters={191}
      difficulty="Hard"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/dixa/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/dixa/openapi.yaml"
      developerDocumentation="docs.dixa.io/docs/"
    />
  );
}
  