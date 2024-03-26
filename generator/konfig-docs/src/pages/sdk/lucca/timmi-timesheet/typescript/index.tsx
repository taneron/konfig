import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function LuccaTimmiTimesheetTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="lucca-timmi-timesheet-typescript-sdk"
      metaDescription={`Nereo est un éditeur de logiciels de gestion des ressources humaines, basé à Saint Etienne, qui propose à ses clients des solutions accessibles en ligne pour faciliter des tâches chronophages et sans réelle valeur ajoutée telles que la gestion des congés, des temps et activités ou encore des notes de frais.

Créée en décembre 2011, Nereo propose déjà une solution complète de gestion de congés et absences en mode SaaS baptisée Nereo Congés.`}
      company="Lucca"
      serviceName="Timmi Timesheet"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/lucca/timmi-timesheet/logo.svg"
      companyKebabCase="lucca"
      clientNameCamelCase="luccaTimmiTimesheet"
      homepage="lucca-hr.com"
      lastUpdated={new Date("2024-03-26T19:55:14.920Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/lucca/timmi-timesheet/favicon.png"
      contactUrl="https://www.lucca.fr"
      contactEmail="developers@lucca.fr"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/lucca/timmi-timesheet/imagePreview.jpg"
      GettingStarted={GettingStarted}
      FirstRequest={FirstRequest}
      categories={["hr","hr_management","resource_management","human_resources","scheduling","time_management","attendance_management","hr_automation"]}
      methods={[
  {
    "url": "/api/v3/timeentries",
    "method": "deleteMultiple",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "TimeEntries",
    "typeScriptTag": "timeEntries",
    "description": "Delete multiple TimeEntries",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
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
    "url": "/api/v3/timeentries",
    "method": "listTimeEntries",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "TimeEntries",
    "typeScriptTag": "timeEntries",
    "description": "List TimeEntries",
    "parameters": [
      {
        "name": "paging",
        "schema": "string",
        "required": true,
        "description": "{offset},{limit}. Defaults to 0,1000.",
        "example": "100,0"
      },
      {
        "name": "ownerId",
        "schema": "array",
        "description": "User's identifier"
      },
      {
        "name": "startsAt",
        "schema": "string",
        "description": "{comparator},{date-time}",
        "example": "between,2021-01-01,2021-02-01"
      },
      {
        "name": "axisSectionsId",
        "schema": "array",
        "description": "Filter on a comma-separated list of AxisSections identifiers."
      },
      {
        "name": "axisSectionsCode",
        "schema": "array",
        "description": "Filter on a comma-separated list of AxisSections codes."
      },
      {
        "name": "modifiedAt",
        "schema": "string",
        "description": "{comparator},{date-time}",
        "example": "since,2021-01-01T08:45:23Z"
      },
      {
        "name": "archivedAt",
        "schema": "string",
        "description": "{comparator},{date-time}",
        "example": "since,2021-01-01T08:45:23Z"
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
    "url": "/api/v3/timeentries",
    "method": "createMultiple",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "TimeEntries",
    "typeScriptTag": "timeEntries",
    "description": "Create new TimeEntries",
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
    "url": "/api/v3/timeentries",
    "method": "updateMultiple",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "TimeEntries",
    "typeScriptTag": "timeEntries",
    "description": "Update multiple TimeEntries",
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
    "url": "/api/v3/timeentries/{timeEntryId}",
    "method": "removeById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "TimeEntries",
    "typeScriptTag": "timeEntries",
    "description": "Delete a TimeEntry by id",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
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
    "url": "/api/v3/timeentries/{timeEntryId}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "TimeEntries",
    "typeScriptTag": "timeEntries",
    "description": "Get a TimeEntry by id",
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
    "url": "/api/v3/timeentries/{timeEntryId}",
    "method": "updateById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "TimeEntries",
    "typeScriptTag": "timeEntries",
    "description": "Update a TimeEntry by id",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "startsAt",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "2022-01-01T08:00:00"
      },
      {
        "name": "duration",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "03:45:00",
        "default": "00:00:00"
      },
      {
        "name": "unit",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "endsAt",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "ownerId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "authorId",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "createdAt",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "creationSource",
        "schema": "integer",
        "required": false,
        "description": "",
        "default": 2
      },
      {
        "name": "modifierId",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "modifiedAt",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "layer",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "axisSections",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "comment",
        "schema": "null",
        "required": false,
        "description": ""
      },
      {
        "name": "timeTypeId",
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
    "url": "/api/v3/timmitimesheets",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Timesheets",
    "typeScriptTag": "timesheets",
    "description": "List timesheets",
    "parameters": [
      {
        "name": "ownerId",
        "schema": "array",
        "description": "User's identifier."
      },
      {
        "name": "startsOn",
        "schema": "string",
        "description": "Filter on the start date of the timesheet.",
        "example": "between,2022-01-01,2022-02-01"
      },
      {
        "name": "status",
        "schema": "array",
        "description": "Filter on the timesheet workflow status."
      },
      {
        "name": "endsOn",
        "schema": "string",
        "description": "Filter on the end date of the timesheet.",
        "example": "until,2022-01-01"
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
    "url": "/api/v3/timmitimesheets/remindable",
    "method": "listDue",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Timesheets",
    "typeScriptTag": "timesheets",
    "description": "List due timesheets",
    "parameters": [
      {
        "name": "ownerIds",
        "schema": "array",
        "description": "List unique identifier of submitters."
      },
      {
        "name": "legalEntityIds",
        "schema": "array",
        "description": "List unique identifier of submitters' legal establishments."
      },
      {
        "name": "managerIds",
        "schema": "array",
        "description": "List unique identifier of submitters' manager."
      },
      {
        "name": "start",
        "schema": "string",
        "description": "Prevent older timesheets to be returned."
      },
      {
        "name": "end",
        "schema": "string",
        "description": "Prevent earlier timesheets to be returned (date excluded). Defaults to today when not sent."
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
    "url": "/timmi/services/workflow/remind",
    "method": "sendReminderEmail",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Workflow",
    "typeScriptTag": "workflow",
    "description": "Remind Timesheets",
    "parameters": [
      {
        "name": "timesheets",
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
    "url": "/timmi/services/workflow/submit",
    "method": "submitTimesheet",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Workflow",
    "typeScriptTag": "workflow",
    "description": "Submit Timesheets",
    "parameters": [
      {
        "name": "timesheets",
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
    "url": "/timmi/services/workflow/cancel",
    "method": "cancelTimesheetById",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Workflow",
    "typeScriptTag": "workflow",
    "description": "Cancel Timesheets by id",
    "parameters": [
      {
        "name": "timesheets",
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
    "url": "/timmi/services/workflow/approve",
    "method": "approveTimesheetsById",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Workflow",
    "typeScriptTag": "workflow",
    "description": "Approve Timesheets by id",
    "parameters": [
      {
        "name": "timesheets",
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
    "url": "/timmi/services/workflow/deny",
    "method": "denyTimesheetById",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Workflow",
    "typeScriptTag": "workflow",
    "description": "Deny Timesheets by id",
    "parameters": [
      {
        "name": "timesheets",
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
    "url": "/timmi/services/workflow/invalidate",
    "method": "invalidateTimesheetById",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Workflow",
    "typeScriptTag": "workflow",
    "description": "Invalidate Timesheets by id",
    "parameters": [
      {
        "name": "timesheets",
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
    "url": "/timmi-timesheet/api/reports",
    "method": "createBasedOnTemplate",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Reports",
    "typeScriptTag": "reports",
    "description": "Create a new Report",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "status",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "templateId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TEMPLATEID"
      },
      {
        "name": "startsOn",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "endsOn",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "filters",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "columns",
        "schema": "array",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "## Status\n\nThe generation of a report content is a background process. As long as this process is not complete, the report status stays `pending`. Once the report is complete, its status is set to `done`. May an error be encountered while generating its content, then its status is set to `error`.\n\nThe report content can only be viewed and downloaded once it is `done`.\n\n## Start & end dates\n\nStart `startsOn` and end `endsOn` dates can be left `null`. In this case, default dates from the report-template are applied.\n\n## Filters\n\nFilters are usually set in the report-template. But these can be overriden for a given report.\n\n## Fields"
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "500",
        "description": "Internal Server Error"
      }
    ]
  },
  {
    "url": "/timmi-timesheet/api/reports/{reportId}/download-csv",
    "method": "downloadCsvReport",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Reports",
    "typeScriptTag": "reports",
    "description": "Download Report as CSV",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
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
    "url": "/timmi-timesheet/api/reports/{reportId}/download-excel",
    "method": "downloadExcelReport",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Reports",
    "typeScriptTag": "reports",
    "description": "Download Report as Excel",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
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
  }
]
    }
      language="TypeScript"
      apiTitle="Timmi Timesheet API"
      apiBaseUrl="https://example.ilucca.net"
      apiVersion="1.0"
      endpoints={13}
      sdkMethods={29}
      schemas={26}
      parameters={45}
      difficulty="Easy"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/lucca/timmi-timesheet/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/lucca/timmi-timesheet/openapi.yaml"
      developerDocumentation="developers.lucca.fr/"
    />
  );
}
  