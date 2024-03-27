import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function OysterTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="oyster-typescript-sdk"
      metaDescription={`Our mission is to create a more equal world by making it possible for companies everywhere to hire people anywhere. We believe it should be easy for any company to hire any person, no matter where they are located in the world.`}
      company="Oyster"
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/oyster/logo.webp"
      companyKebabCase="oyster"
      clientNameCamelCase="oyster"
      homepage="oysterhr.com"
      lastUpdated={new Date("2024-03-27T01:23:25.425Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/oyster/favicon.png"
      // Missing contactUrl
      // Missing contactEmail
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/oyster/imagePreview.jpg"
      GettingStarted={GettingStarted}
      FirstRequest={FirstRequest}
      categories={["hr","talent_management","global_payments","remote_work","global_employment"]}
      methods={[
  {
    "url": "/oauth2/token",
    "method": "createAccessToken",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Authentication",
    "typeScriptTag": "authentication",
    "description": "Create an access token",
    "parameters": [
      {
        "name": "client_id",
        "schema": "string",
        "description": "",
        "example": "1234ABCD"
      },
      {
        "name": "client_secret",
        "schema": "string",
        "description": "",
        "example": "1234ABCD"
      },
      {
        "name": "grant_type",
        "schema": "string",
        "description": "",
        "example": "authorization_code"
      },
      {
        "name": "code",
        "schema": "string",
        "description": "",
        "example": "1234ABCD"
      },
      {
        "name": "redirect_uri",
        "schema": "string",
        "description": "",
        "example": "https://example.com/inbound"
      },
      {
        "name": "refresh_token",
        "schema": "string",
        "description": "",
        "example": "https://example.com/inbound"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/expenses/{id}/approve",
    "method": "approveExpense",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Expenses",
    "typeScriptTag": "expenses",
    "description": "Approve expense",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Expense ID",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Successful"
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Resource does not exist, or no permission to access resource"
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/expenses/{id}/decline",
    "method": "declineExpense",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Expenses",
    "typeScriptTag": "expenses",
    "description": "Decline expense",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Expense ID",
        "example": "ID"
      },
      {
        "name": "reason",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Successful"
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Resource does not exist, or no permission to access resource"
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/expenses/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Expenses",
    "typeScriptTag": "expenses",
    "description": "Retrieve an individual expense",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Expense ID",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Resource does not exist, or no permission to access resource"
      }
    ]
  },
  {
    "url": "/v1/expenses",
    "method": "createOperationKey",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Expenses",
    "typeScriptTag": "expenses",
    "description": "Create expense",
    "parameters": [
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "engagementId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ENGAGEMENTID"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "incurredOn",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "INCURREDON"
      },
      {
        "name": "category",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CATEGORY"
      },
      {
        "name": "receiptUrl",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "RECEIPTURL"
      },
      {
        "name": "receiptAmount",
        "schema": "object",
        "required": true,
        "description": ""
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/company",
    "method": "detailsRetrieve",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Company",
    "typeScriptTag": "company",
    "description": "Retrieve company details",
    "parameters": [],
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
    "url": "/v1/departments",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Departments",
    "typeScriptTag": "departments",
    "description": "Retrieve all departments",
    "parameters": [
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "page",
        "schema": "integer",
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
        "statusCode": "401",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/engagements/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Engagements",
    "typeScriptTag": "engagements",
    "description": "Retrieve an individual engagement",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Engagement ID",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Resource does not exist, or no permission to access resource"
      }
    ]
  },
  {
    "url": "/v1/engagements",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Engagements",
    "typeScriptTag": "engagements",
    "description": "Retrieve all engagements",
    "parameters": [
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "page",
        "schema": "integer",
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
        "statusCode": "401",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/meta/operations/{operation_key}",
    "method": "getByOperationKey",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Operations",
    "typeScriptTag": "operations",
    "description": "Retrieve an operation",
    "parameters": [
      {
        "name": "operationKey",
        "schema": "string",
        "required": true,
        "description": "Operation key",
        "example": "OPERATION_KEY"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Resource does not exist, or no permission to access resource"
      }
    ]
  },
  {
    "url": "/v1/payroll/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Payroll",
    "typeScriptTag": "payroll",
    "description": "Retrieve an individual payroll",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Payroll ID",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Resource does not exist, or no permission to access resource"
      }
    ]
  },
  {
    "url": "/v1/payroll",
    "method": "getAllPayrolls",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Payroll",
    "typeScriptTag": "payroll",
    "description": "Retrieve all payroll",
    "parameters": [
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "from",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "to",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "includeRecords",
        "schema": "boolean",
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
        "statusCode": "401",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/time_off/entitlements",
    "method": "getEntitlements",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Time Off",
    "typeScriptTag": "timeOff",
    "description": "Retrieve entitlements",
    "parameters": [
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "page",
        "schema": "integer",
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
        "statusCode": "401",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/time_off/requests/{id}/approve",
    "method": "approveRequest",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Time Off",
    "typeScriptTag": "timeOff",
    "description": "Approve request",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Time Off Request ID",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Successful"
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
        "description": "Resource does not exist, or no permission to access resource"
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/time_off/requests/{id}/reject",
    "method": "rejectRequest",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Time Off",
    "typeScriptTag": "timeOff",
    "description": "Reject request",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Time Off Request ID",
        "example": "ID"
      },
      {
        "name": "reason",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "REASON"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Successful"
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
        "description": "Resource does not exist, or no permission to access resource"
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/time_off/requests/{id}",
    "method": "getRequest",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Time Off",
    "typeScriptTag": "timeOff",
    "description": "Retrieve an individual request",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Time Off Request ID",
        "example": "ID"
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
      },
      {
        "statusCode": "404",
        "description": "Resource does not exist, or no permission to access resource"
      }
    ]
  },
  {
    "url": "/v1/time_off/requests",
    "method": "getAllRequests",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Time Off",
    "typeScriptTag": "timeOff",
    "description": "Retrieve all requests",
    "parameters": [
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "page",
        "schema": "integer",
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
        "statusCode": "401",
        "description": ""
      }
    ]
  }
]
    }
      language="TypeScript"
      apiTitle="Endpoints"
      apiBaseUrl="https://api.oysterhr.com"
      apiVersion="v1"
      endpoints={18}
      sdkMethods={18}
      schemas={39}
      parameters={38}
      difficulty="Easy"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/oyster/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/oyster/openapi.yaml"
      developerDocumentation="docs.oysterhr.com/reference"
    />
  );
}
  