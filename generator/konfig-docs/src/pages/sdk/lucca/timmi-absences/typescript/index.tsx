import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function LuccaTimmiAbsencesTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="lucca-timmi-absences-typescript-sdk"
      metaDescription={`Nereo est un éditeur de logiciels de gestion des ressources humaines, basé à Saint Etienne, qui propose à ses clients des solutions accessibles en ligne pour faciliter des tâches chronophages et sans réelle valeur ajoutée telles que la gestion des congés, des temps et activités ou encore des notes de frais.

Créée en décembre 2011, Nereo propose déjà une solution complète de gestion de congés et absences en mode SaaS baptisée Nereo Congés.`}
      company="Lucca"
      serviceName="Timmi Absences"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/lucca/timmi-absences/logo.svg"
      companyKebabCase="lucca"
      clientNameCamelCase="luccaTimmiAbsences"
      homepage="lucca-hr.com"
      lastUpdated={new Date("2024-03-26T19:55:14.920Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/lucca/timmi-absences/favicon.png"
      contactUrl="https://www.lucca.fr"
      contactEmail="developers@lucca.fr"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/lucca/timmi-absences/imagePreview.jpg"
      GettingStarted={GettingStarted}
      FirstRequest={FirstRequest}
      categories={["hr","hr_management","resource_management","human_resources","scheduling","time_management","attendance_management","hr_automation"]}
      methods={[
  {
    "url": "/api/v3/leaves",
    "method": "getApprovedList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Leaves",
    "typeScriptTag": "leaves",
    "description": "List leaves",
    "parameters": [
      {
        "name": "paging",
        "schema": "string",
        "required": true,
        "description": "{offset},{limit}. Defaults to 0,1000.",
        "example": "100,0"
      },
      {
        "name": "leaveAccountId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "leavePeriodOwnerId",
        "schema": "array",
        "required": true,
        "description": "Employee's identifier"
      },
      {
        "name": "date",
        "schema": "string",
        "required": true,
        "description": "{comparator},{date-time}",
        "example": "DATE"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad Request"
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      },
      {
        "statusCode": "500",
        "description": "Internal Server Error"
      }
    ]
  },
  {
    "url": "/api/v3/leaves/{leaveId}",
    "method": "cancelLeaveById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Leaves",
    "typeScriptTag": "leaves",
    "description": "Cancellation of a leave",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      }
    ]
  },
  {
    "url": "/api/v3/leaves/{leaveId}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Leaves",
    "typeScriptTag": "leaves",
    "description": "Get a leave by id",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad Request"
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      },
      {
        "statusCode": "500",
        "description": "Internal Server Error"
      }
    ]
  },
  {
    "url": "/api/v3/leaveRequests",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Leave Requests",
    "typeScriptTag": "leaveRequests",
    "description": "List leave requests",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad Request"
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      },
      {
        "statusCode": "500",
        "description": "Internal Server Error"
      }
    ]
  },
  {
    "url": "/api/v3/leaveRequests/{leaveRequestId}",
    "method": "cancelRequest",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Leave Requests",
    "typeScriptTag": "leaveRequests",
    "description": "Request to cancel a leave request",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      }
    ]
  },
  {
    "url": "/api/v3/leaveRequests/{leaveRequestId}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Leave Requests",
    "typeScriptTag": "leaveRequests",
    "description": "Get a leave request by id",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad Request"
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      },
      {
        "statusCode": "500",
        "description": "Internal Server Error"
      }
    ]
  },
  {
    "url": "/api/v3/leaveRequests/{leaveRequestId}/approvals",
    "method": "approveDeny",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Leave Requests",
    "typeScriptTag": "leaveRequests",
    "description": "Approve or deny a leave request",
    "parameters": [
      {
        "name": "approved",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "comment",
        "schema": "null",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      }
    ]
  },
  {
    "url": "/figgo/api/public/services/v1.0/leaveEntitlementsImport",
    "method": "entitlementsBatchImport",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Imports",
    "typeScriptTag": "imports",
    "description": "Import entitlements (deprecated)",
    "parameters": [
      {
        "name": "strict",
        "schema": "boolean",
        "description": "In strict mode, if the import has errors, nothing is imported. Without strict mode, the lines in error are ignored and those in success are imported.",
        "default": false
      },
      {
        "name": "simulate",
        "schema": "boolean",
        "description": "Allows you to simulate the import. In this case, the response indicates the theoretical result of the import without any data being recorded.",
        "default": false
      },
      {
        "name": "File",
        "schema": "string",
        "description": ""
      },
      {
        "name": "Description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "ReferenceDate",
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
    "url": "/timmi-absences/api/public/services/v1.0/leaveEntitlementsImport",
    "method": "importLeaveEntitlements",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Imports",
    "typeScriptTag": "imports",
    "description": "Import entitlements",
    "parameters": [
      {
        "name": "strict",
        "schema": "boolean",
        "description": "In strict mode, if the import has errors, nothing is imported. Without strict mode, the lines in error are ignored and those in success are imported.",
        "default": false
      },
      {
        "name": "simulate",
        "schema": "boolean",
        "description": "Allows you to simulate the import. In this case, the response indicates the theoretical result of the import without any data being recorded.",
        "default": false
      },
      {
        "name": "File",
        "schema": "string",
        "description": ""
      },
      {
        "name": "Description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "ReferenceDate",
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
    "url": "/figgo/api/public/services/v1.0/leaveEntitlementsReplace",
    "method": "replaceEntitlements",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Imports",
    "typeScriptTag": "imports",
    "description": "Replace entitlements (deprecated)",
    "parameters": [
      {
        "name": "strict",
        "schema": "boolean",
        "description": "In strict mode, if the import has errors, nothing is imported. Without strict mode, the lines in error are ignored and those in success are imported.",
        "default": false
      },
      {
        "name": "simulate",
        "schema": "boolean",
        "description": "Allows you to simulate the import. In this case, the response indicates the theoretical result of the import without any data being recorded.",
        "default": false
      },
      {
        "name": "File",
        "schema": "string",
        "description": ""
      },
      {
        "name": "Description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "ReferenceDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "EntryTypes",
        "schema": "string",
        "description": "",
        "default": "AutoAccruals,ManualAccruals,Regularizations"
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
    "url": "/timmi-absences/api/public/services/v1.0/leaveEntitlementsReplace",
    "method": "replaceEntitlements",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Imports",
    "typeScriptTag": "imports",
    "description": "Replace entitlements",
    "parameters": [
      {
        "name": "strict",
        "schema": "boolean",
        "description": "In strict mode, if the import has errors, nothing is imported. Without strict mode, the lines in error are ignored and those in success are imported.",
        "default": false
      },
      {
        "name": "simulate",
        "schema": "boolean",
        "description": "Allows you to simulate the import. In this case, the response indicates the theoretical result of the import without any data being recorded.",
        "default": false
      },
      {
        "name": "File",
        "schema": "string",
        "description": ""
      },
      {
        "name": "Description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "ReferenceDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "EntryTypes",
        "schema": "string",
        "description": "",
        "default": "AutoAccruals,ManualAccruals,Regularizations"
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
    "url": "/api/v3/services/importLeavePeriods",
    "method": "absenceBatchCreate",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Imports",
    "typeScriptTag": "imports",
    "description": "Import leaves (deprecated)",
    "parameters": [
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "Support CSV files only",
        "example": "TYPE",
        "default": "csv"
      },
      {
        "name": "create",
        "schema": "boolean",
        "description": "Use `false` to simulate the import.",
        "default": false
      },
      {
        "name": "recredit",
        "schema": "boolean",
        "description": "Use `true` if absences should **not** be deducted from the user balance. Use `false` if absences should be deducted from the user balance. Note: if the absence type doesn’t have balance management, absence won’t impact the balance in any case."
      },
      {
        "name": "originalFileName",
        "schema": "string",
        "required": true,
        "description": "Filename",
        "example": "import.csv"
      },
      {
        "name": "synchronize",
        "schema": "boolean",
        "description": "Use `true` to force synchronization of the absences in the sync webservice (sync to Exchange/0365, Google Calendar, Webhook or ADP GXP, depending on configuration). Use `false` to import absences without synchronizing absences."
      },
      {
        "name": "overrideLeaves",
        "schema": "boolean",
        "description": "Use `true` to allow replacing existing absences"
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
    "url": "/timmi-absences/api/imports/v1.0/leavePeriods",
    "method": "createAbsencesBatch",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Imports",
    "typeScriptTag": "imports",
    "description": "Import leaves",
    "parameters": [
      {
        "name": "create",
        "schema": "boolean",
        "description": "Use `false` to simulate the import."
      },
      {
        "name": "recredit",
        "schema": "boolean",
        "description": "Use `true` if absences should **not** be deducted from the user balance. Use `false` if absences should be deducted from the user balance. Note: if the absence type doesn’t have balance management, absence won’t impact the balance in any case."
      },
      {
        "name": "originalFileName",
        "schema": "string",
        "description": "Filename",
        "default": "import.csv"
      },
      {
        "name": "synchronize",
        "schema": "boolean",
        "description": "Use `true` to force synchronization of the absences in the sync webservice (sync to Exchange/0365, Google Calendar, Webhook or ADP GXP, depending on configuration). Use `false` to import absences without synchronizing absences."
      },
      {
        "name": "async",
        "schema": "boolean",
        "description": "Use `true` if you want to import absences with the asynchronous processing (you have to request figgo/api/imports/v1.0/leavePeriods/{summaryId}/progress API to track the status). Use `false` if you want import absences with the synchronous processing (the response is sent when the file is fully imported)."
      },
      {
        "name": "files",
        "schema": "array",
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
    "url": "/timmi-absences/api/imports/v1.0/leavePeriods/{summaryId}/progress",
    "method": "getProgress",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Imports",
    "typeScriptTag": "imports",
    "description": "Get import leaves progress",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "0:not started, 1-99:in progress, 100:success, -1:error"
      }
    ]
  }
]
    }
      language="TypeScript"
      apiTitle="Timmi Absences API"
      apiBaseUrl="https://example.ilucca.net"
      apiVersion="1.0"
      endpoints={12}
      sdkMethods={24}
      schemas={22}
      parameters={41}
      difficulty="Easy"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/lucca/timmi-absences/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/lucca/timmi-absences/openapi.yaml"
      developerDocumentation="developers.lucca.fr/"
    />
  );
}
  