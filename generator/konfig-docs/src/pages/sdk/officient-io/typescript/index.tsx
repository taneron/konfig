import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function OfficientIoTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="officient-io-typescript-sdk"
      metaDescription={`Officient offers an intuitive HRIS which helps manage all personnel administration through our HR platform & personalized employee self-services. Manage payroll, company assets, contracts, days off, fleet, performance reviews and all employee data in one HR system. HR deserves great software and we're here to provide it. 

We support our customers in transforming HR towards paperless administration and automating tedious workforce management tasks in the process. Our goal? Transform HR from an administrative, processing role, to a controlling role which fuels HR strategy across the organization.`}
      company="Officient.io"
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/officient-io/logo.png"
      companyKebabCase="officient-io"
      clientNameCamelCase="officientIo"
      homepage="officient.io"
      lastUpdated={new Date("2024-03-26T20:26:03.770Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/officient-io/favicon.png"
      // Missing contactUrl
      // Missing contactEmail
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/officient-io/imagePreview.jpg"
      GettingStarted={GettingStarted}
      FirstRequest={FirstRequest}
      categories={["hr"]}
      methods={[
  {
    "url": "/1.0/people/list",
    "method": "listPeople",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Person",
    "typeScriptTag": "person",
    "description": "List people",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "required": true,
        "description": "Controls pagination (0, 1, 2, ..) to view all results. 30 items per page.",
        "example": 0,
        "default": 0
      },
      {
        "name": "includeArchived",
        "schema": "integer",
        "description": "Include archived people in response",
        "default": 0
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
    "url": "/1.0/token",
    "method": "getAccessToken",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Authentication",
    "typeScriptTag": "authentication",
    "description": "Get access token",
    "parameters": [
      {
        "name": "code",
        "schema": "string",
        "description": ""
      },
      {
        "name": "client_id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "client_secret",
        "schema": "string",
        "description": ""
      },
      {
        "name": "grant_type",
        "schema": "string",
        "description": ""
      },
      {
        "name": "refresh_token",
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
      }
    ]
  },
  {
    "url": "/1.0/wages/{person_id}/current",
    "method": "getCurrentWageDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Person",
    "typeScriptTag": "person",
    "description": "Current wage",
    "parameters": [
      {
        "name": "personId",
        "schema": "string",
        "required": true,
        "description": "The person you would like to receive wage information on",
        "example": "PERSON_ID"
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
      }
    ]
  },
  {
    "url": "/1.0/people/selfservice/invite_link",
    "method": "generateSecretUrl",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Invitation",
    "typeScriptTag": "invitation",
    "description": "Self-service invitation",
    "parameters": [
      {
        "name": "person_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PERSON_ID"
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
      }
    ]
  },
  {
    "url": "/1.0/wages/{person_id}/history",
    "method": "getWageHistory",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Person",
    "typeScriptTag": "person",
    "description": "Wage history",
    "parameters": [
      {
        "name": "personId",
        "schema": "string",
        "required": true,
        "description": "The person you need the wage history for",
        "example": "PERSON_ID"
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
      }
    ]
  },
  {
    "url": "/1.0/assets/list",
    "method": "listAssets",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Asset",
    "typeScriptTag": "asset",
    "description": "List assets",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "description": "Controls pagination (0, 1, 2, ..) to view all results. 30 items per page.",
        "default": 0
      },
      {
        "name": "personId",
        "schema": "integer",
        "description": "view only assets that belong to a specific person"
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
      }
    ]
  },
  {
    "url": "/1.0/assets/{asset_id}/detail",
    "method": "getDetail",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Asset",
    "typeScriptTag": "asset",
    "description": "Asset detail",
    "parameters": [
      {
        "name": "assetId",
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
      }
    ]
  },
  {
    "url": "/1.0/fleet/{vehicle_id}/detail",
    "method": "getDetail",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Vehicle",
    "typeScriptTag": "vehicle",
    "description": "Vehicle detail",
    "parameters": [
      {
        "name": "vehicleId",
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
      }
    ]
  },
  {
    "url": "/1.0/fleet/list",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Vehicle",
    "typeScriptTag": "vehicle",
    "description": "List vehicles",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "required": true,
        "description": "Controls pagination (0, 1, 2, ..) to view all results. 30 items per page.",
        "example": 0,
        "default": 0
      },
      {
        "name": "personId",
        "schema": "integer",
        "description": "view only vehicles that belong to a specific person"
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
      }
    ]
  },
  {
    "url": "/1.0/contracts/list",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Contract",
    "typeScriptTag": "contract",
    "description": "List contracts",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "required": true,
        "description": "Controls pagination (0, 1, 2, ..) to view all results. 30 items per page.",
        "example": 0,
        "default": 0
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
      }
    ]
  },
  {
    "url": "/1.0/contracts/{contract_id}/detail",
    "method": "getDetail",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Contract",
    "typeScriptTag": "contract",
    "description": "Contract detail",
    "parameters": [
      {
        "name": "contractId",
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
      }
    ]
  },
  {
    "url": "/1.0/contracts/{contract_id}/pdf",
    "method": "getPdfLink",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Contract",
    "typeScriptTag": "contract",
    "description": "Contract PDF",
    "parameters": [
      {
        "name": "contractId",
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
      }
    ]
  },
  {
    "url": "/1.0/calendar/{person_id}/{year}/{month}",
    "method": "getMonthlyCalendar",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Person",
    "typeScriptTag": "person",
    "description": "Monthly calendar",
    "parameters": [
      {
        "name": "personId",
        "schema": "integer",
        "required": true,
        "description": "The person you would like to receive calender information on",
        "example": 0
      },
      {
        "name": "year",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "month",
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
      }
    ]
  },
  {
    "url": "/1.0/teams/list",
    "method": "getAllTeams",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Team",
    "typeScriptTag": "team",
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
      }
    ]
  },
  {
    "url": "/1.0/people/add",
    "method": "addNew",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Person",
    "typeScriptTag": "person",
    "description": "Add person",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/1.0/calendar/events/types/{year}",
    "method": "getCustomEventTypesByYear",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Calendar",
    "typeScriptTag": "calendar",
    "description": "Custom event types",
    "parameters": [
      {
        "name": "year",
        "schema": "integer",
        "required": true,
        "description": "the year you want custom event type to be returned for",
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
      }
    ]
  },
  {
    "url": "/1.0/calendar/{person_id}/events/add",
    "method": "addEventToCalendar",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Person",
    "typeScriptTag": "person",
    "description": "Add event",
    "parameters": [
      {
        "name": "personId",
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
      }
    ]
  },
  {
    "url": "/1.0/calendar/{person_id}/events/{event_id}",
    "method": "removeEvent",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Person",
    "typeScriptTag": "person",
    "description": "Delete event",
    "parameters": [
      {
        "name": "personId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "eventId",
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
      }
    ]
  },
  {
    "url": "/1.0/calendar/{person_id}/{year}/{month}/{day}/work",
    "method": "overwriteTimeWorked",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Person",
    "typeScriptTag": "person",
    "description": "Update time worked",
    "parameters": [
      {
        "name": "personId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "year",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "month",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "day",
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
      }
    ]
  },
  {
    "url": "/1.0/calendar/{person_id}/{year}/{month}/{day}/work/reset",
    "method": "resetTimeWorked",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Person",
    "typeScriptTag": "person",
    "description": "Reset time worked",
    "parameters": [
      {
        "name": "personId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "year",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "month",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "day",
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
      }
    ]
  },
  {
    "url": "/1.0/people/{person_id}/detail",
    "method": "getDetail",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Person",
    "typeScriptTag": "person",
    "description": "Person detail",
    "parameters": [
      {
        "name": "personId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PERSON_ID"
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
      }
    ]
  },
  {
    "url": "/1.0/people/{person_id}/detail",
    "method": "editDetail",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Person",
    "typeScriptTag": "person",
    "description": "Edit person",
    "parameters": [
      {
        "name": "personId",
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
      }
    ]
  },
  {
    "url": "/1.0/documents/{object_type}/{object_id}/list",
    "method": "getByObject",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Document",
    "typeScriptTag": "document",
    "description": "List documents",
    "parameters": [
      {
        "name": "objectType",
        "schema": "string",
        "required": true,
        "description": "pick one: employee, asset, car",
        "example": "OBJECT_TYPE"
      },
      {
        "name": "objectId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "Controls pagination (0, 1, 2, ..) to view all results. 30 items per page.",
        "default": 0
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
      }
    ]
  },
  {
    "url": "/1.0/documents/{file_id}/download",
    "method": "getDownloadUrl",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Document",
    "typeScriptTag": "document",
    "description": "Download document",
    "parameters": [
      {
        "name": "fileId",
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
      }
    ]
  },
  {
    "url": "/1.0/documents/{object_type}/{object_id}/add",
    "method": "uploadDocument",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Document",
    "typeScriptTag": "document",
    "description": "Upload document",
    "parameters": [
      {
        "name": "objectType",
        "schema": "string",
        "required": true,
        "description": "pick one: employee, asset, car",
        "example": "OBJECT_TYPE"
      },
      {
        "name": "objectId",
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
      }
    ]
  },
  {
    "url": "/1.0/webhooks/add",
    "method": "subscribeNotifications",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Webhook",
    "typeScriptTag": "webhook",
    "description": "Add webhook",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/1.0/webhooks/{webhook_id}",
    "method": "unsubscribeNotifications",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Webhook",
    "typeScriptTag": "webhook",
    "description": "Delete webhook",
    "parameters": [
      {
        "name": "webhookId",
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
      }
    ]
  },
  {
    "url": "/1.0/webhooks/list",
    "method": "getActiveNotifications",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Webhook",
    "typeScriptTag": "webhook",
    "description": "List webhooks",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/1.0/account",
    "method": "informationGet",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Account",
    "typeScriptTag": "account",
    "description": "Your account",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/1.0/contracts/add",
    "method": "addNew",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Contract",
    "typeScriptTag": "contract",
    "description": "Add contract",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/1.0/contracts/signature/request",
    "method": "requestSignature",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Contract",
    "typeScriptTag": "contract",
    "description": "Request contract signature",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/1.0/calendar/{person_id}/events/types/{year}/limits",
    "method": "getEventTypeLimits",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Person",
    "typeScriptTag": "person",
    "description": "Event type limits",
    "parameters": [
      {
        "name": "personId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "year",
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
      }
    ]
  },
  {
    "url": "/1.0/calendar/{person_id}/events/types/{year}/limits/{type_id}/set",
    "method": "updateEventTypeLimit",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Person",
    "typeScriptTag": "person",
    "description": "Set event type limit",
    "parameters": [
      {
        "name": "personId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "year",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "typeId",
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
      }
    ]
  },
  {
    "url": "/1.0/people/search",
    "method": "searchByNameEmailNationalNumber",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Person",
    "typeScriptTag": "person",
    "description": "Search people",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "description": "eg John Doe"
      },
      {
        "name": "email",
        "schema": "string",
        "description": "eg john@doe.net"
      },
      {
        "name": "nationalNumber",
        "schema": "string",
        "description": "eg 82146126684"
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
      }
    ]
  },
  {
    "url": "/1.0/calendar/{person_id}/{year}/work/bulk",
    "method": "bulkUpdateTimeWorked",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Person",
    "typeScriptTag": "person",
    "description": "Update time worked in bulk",
    "parameters": [
      {
        "name": "personId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "year",
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
      }
    ]
  },
  {
    "url": "/1.0/people/{person_id}/manager",
    "method": "getManager",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Person",
    "typeScriptTag": "person",
    "description": "Person manager",
    "parameters": [
      {
        "name": "personId",
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
      }
    ]
  },
  {
    "url": "/1.0/people/{person_id}/manager",
    "method": "updateManager",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Person",
    "typeScriptTag": "person",
    "description": "Update manager",
    "parameters": [
      {
        "name": "personId",
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
      }
    ]
  },
  {
    "url": "/1.0/calendar/{person_id}/{year}/{month}/{day}/events/set",
    "method": "setEvent",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Person",
    "typeScriptTag": "person",
    "description": "Overwrite event",
    "parameters": [
      {
        "name": "personId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PERSON_ID"
      },
      {
        "name": "year",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "YEAR"
      },
      {
        "name": "month",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "MONTH"
      },
      {
        "name": "day",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DAY"
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
      }
    ]
  },
  {
    "url": "/1.0/calendar/{person_id}/{year}/{month}/{day}",
    "method": "getDailyCalendar",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Person",
    "typeScriptTag": "person",
    "description": "Daily calendar",
    "parameters": [
      {
        "name": "personId",
        "schema": "integer",
        "required": true,
        "description": "The person you would like to receive calender information on",
        "example": 0
      },
      {
        "name": "year",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "month",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "day",
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
      }
    ]
  },
  {
    "url": "/1.0/people/{person_id}/role",
    "method": "setFunctionDescription",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Person",
    "typeScriptTag": "person",
    "description": "Update role",
    "parameters": [
      {
        "name": "personId",
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
      }
    ]
  },
  {
    "url": "/1.0/teams/{team_id}",
    "method": "editTeam",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Team",
    "typeScriptTag": "team",
    "description": "Edit team",
    "parameters": [
      {
        "name": "teamId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the team you'd like to update",
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
      }
    ]
  },
  {
    "url": "/1.0/teams/add",
    "method": "createNew",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Team",
    "typeScriptTag": "team",
    "description": "Add team",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/1.0/assets/types/list",
    "method": "listCustomAssetTypes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Asset",
    "typeScriptTag": "asset",
    "description": "List custom asset types",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/1.0/assets/types/add",
    "method": "addCustomType",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Asset",
    "typeScriptTag": "asset",
    "description": "Add custom asset type",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/1.0/assets/types/{asset_type_id}",
    "method": "deleteCustomType",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Asset",
    "typeScriptTag": "asset",
    "description": "Delete custom asset type",
    "parameters": [
      {
        "name": "assetTypeId",
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
      }
    ]
  },
  {
    "url": "/1.0/assets/add",
    "method": "addAsset",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Asset",
    "typeScriptTag": "asset",
    "description": "Add asset",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/1.0/assets/{asset_id}",
    "method": "delete",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Asset",
    "typeScriptTag": "asset",
    "description": "Delete asset",
    "parameters": [
      {
        "name": "assetId",
        "schema": "integer",
        "required": true,
        "description": "The id of the asset that will be deleted",
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
      }
    ]
  },
  {
    "url": "/1.0/assets/{asset_id}",
    "method": "updateAssetInformation",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Asset",
    "typeScriptTag": "asset",
    "description": "Edit asset",
    "parameters": [
      {
        "name": "assetId",
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
      }
    ]
  },
  {
    "url": "/1.0/fleet/add",
    "method": "createNew",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Vehicle",
    "typeScriptTag": "vehicle",
    "description": "Add vehicle",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/1.0/fleet/{vehicle_id}",
    "method": "updateInformation",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Vehicle",
    "typeScriptTag": "vehicle",
    "description": "Edit vehicle",
    "parameters": [
      {
        "name": "vehicleId",
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
      }
    ]
  },
  {
    "url": "/1.0/calendar/{person_id}/{year}",
    "method": "getScheduledYearly",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Person",
    "typeScriptTag": "person",
    "description": "Yearly calendar",
    "parameters": [
      {
        "name": "personId",
        "schema": "integer",
        "required": true,
        "description": "The person you would like to receive calender information on",
        "example": 0
      },
      {
        "name": "year",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "filter",
        "schema": "string",
        "description": "can be either 'all' or 'days_with_events' to return only days containing events",
        "default": "all"
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
      }
    ]
  },
  {
    "url": "/1.0/calendar/requests/list",
    "method": "listRequests",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Calendar",
    "typeScriptTag": "calendar",
    "description": "List calendar requests",
    "parameters": [
      {
        "name": "page",
        "schema": "string",
        "description": "",
        "default": "0"
      },
      {
        "name": "status",
        "schema": "string",
        "description": "Can be either \"all\", \"pending\" or \"closed\"",
        "default": "all"
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
    "url": "/1.0/calendar/requests/{request_id}/detail",
    "method": "getRequestDetail",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Calendar",
    "typeScriptTag": "calendar",
    "description": "Calendar request detail",
    "parameters": [
      {
        "name": "requestId",
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
      }
    ]
  },
  {
    "url": "/1.0/custom_fields/{custom_field_id}/{object_type}/{object_id}",
    "method": "updateValueForObject",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "CustomField",
    "typeScriptTag": "customField",
    "description": "Edit custom field value",
    "parameters": [
      {
        "name": "customFieldId",
        "schema": "integer",
        "required": true,
        "description": "Id of the custom field",
        "example": 0
      },
      {
        "name": "objectType",
        "schema": "string",
        "required": true,
        "description": "type of object to be edited. It can be: employee, asset, car, contract, software_license, training_participant, training",
        "example": "OBJECT_TYPE"
      },
      {
        "name": "objectId",
        "schema": "integer",
        "required": true,
        "description": "ID of the object to be edited",
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
      }
    ]
  },
  {
    "url": "/1.0/custom_fields/list",
    "method": "listFields",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "CustomField",
    "typeScriptTag": "customField",
    "description": "List custom fields",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/1.0/people/{person_id}/photo",
    "method": "uploadPhoto",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Person",
    "typeScriptTag": "person",
    "description": "Upload avatar",
    "parameters": [
      {
        "name": "personId",
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
      }
    ]
  },
  {
    "url": "/1.0/documents/{file_id}",
    "method": "remove",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Document",
    "typeScriptTag": "document",
    "description": "Delete document",
    "parameters": [
      {
        "name": "fileId",
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
      }
    ]
  },
  {
    "url": "/1.0/wages/one_off/components/{person_id}/options/list",
    "method": "listOneOffComponents",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Person",
    "typeScriptTag": "person",
    "description": "List available components",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/1.0/wages/one_off/components/{person_id}/{year}/{month}/list",
    "method": "getOneOffWageComponentsByMonth",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Person",
    "typeScriptTag": "person",
    "description": "Components by person by month",
    "parameters": [
      {
        "name": "personId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "year",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "month",
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
      }
    ]
  },
  {
    "url": "/1.0/wages/one_off/components/add",
    "method": "grantOneOffWage",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Component",
    "typeScriptTag": "component",
    "description": "Grant one-off wage component",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/1.0/wages/one_off/components/{granted_component_id}",
    "method": "removeOneOffWage",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Component",
    "typeScriptTag": "component",
    "description": "Remove one-off wage component",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/1.0/performance_reviews/{person_id}/list",
    "method": "getPerformanceReviews",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Person",
    "typeScriptTag": "person",
    "description": "List performance reviews",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "required": true,
        "description": "Controls pagination (0, 1, 2, ..) to view all results. 30 items per page.",
        "example": 0,
        "default": 0
      },
      {
        "name": "personId",
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
      }
    ]
  },
  {
    "url": "/1.0/legal/dimonas/{person_id}/list",
    "method": "getDimonaByPerson",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Person",
    "typeScriptTag": "person",
    "description": "List dimonas by person",
    "parameters": [
      {
        "name": "personId",
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
      }
    ]
  },
  {
    "url": "/1.0/calendar/state/lock",
    "method": "unlockMonthCorrections",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Calendar",
    "typeScriptTag": "calendar",
    "description": "Unlock calendar",
    "parameters": [
      {
        "name": "disable_lock",
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
      }
    ]
  },
  {
    "url": "/1.0/budgets/{budget_id}",
    "method": "removeBudget",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Budget",
    "typeScriptTag": "budget",
    "description": "Delete budget",
    "parameters": [
      {
        "name": "budgetId",
        "schema": "integer",
        "required": true,
        "description": "The id of the budget that will be deleted",
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
      }
    ]
  },
  {
    "url": "/1.0/budgets/{budget_id}",
    "method": "updateBudgetDetails",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Budget",
    "typeScriptTag": "budget",
    "description": "Edit budget",
    "parameters": [
      {
        "name": "budgetId",
        "schema": "integer",
        "required": true,
        "description": "The id of the budget that will be edited.",
        "example": 0
      },
      {
        "name": "maximum",
        "schema": "integer",
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
      }
    ]
  },
  {
    "url": "/1.0/budgets/add",
    "method": "createNewBudget",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Budget",
    "typeScriptTag": "budget",
    "description": "Add budget",
    "parameters": [
      {
        "name": "budget_type",
        "schema": "string",
        "description": ""
      },
      {
        "name": "maximum",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "year",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "employee_id",
        "schema": "integer",
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
      }
    ]
  },
  {
    "url": "/1.0/budgets/{budget_id}/items/{item_id}",
    "method": "removeItem",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Budget",
    "typeScriptTag": "budget",
    "description": "Delete budget item",
    "parameters": [
      {
        "name": "budgetId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "itemId",
        "schema": "integer",
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
      }
    ]
  },
  {
    "url": "/1.0/budgets/{budget_id}/items/add",
    "method": "addItem",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Budget",
    "typeScriptTag": "budget",
    "description": "Add budget item",
    "parameters": [
      {
        "name": "budgetId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "item_name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "cost",
        "schema": "number",
        "description": ""
      },
      {
        "name": "employee_id",
        "schema": "integer",
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
      }
    ]
  },
  {
    "url": "/1.0/budgets/people/{person_id}/{year}/list",
    "method": "getBudgetsByYear",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Person",
    "typeScriptTag": "person",
    "description": "List budgets",
    "parameters": [
      {
        "name": "personId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "year",
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
      }
    ]
  },
  {
    "url": "/1.0/budgets/people/{person_id}/{budget_id}/items/list",
    "method": "getBudgetItems",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Person",
    "typeScriptTag": "person",
    "description": "List budget items",
    "parameters": [
      {
        "name": "personId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "budgetId",
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
      }
    ]
  },
  {
    "url": "/1.0/calendar/events/priorityschemes/{year}",
    "method": "listPrioritySchemesByYear",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Calendar",
    "typeScriptTag": "calendar",
    "description": "List priority schemes",
    "parameters": [
      {
        "name": "year",
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
      }
    ]
  },
  {
    "url": "/1.0/calendar/{person_id}/priorityschemes/events/add",
    "method": "addToCalendarBasedOnPriorityScheme",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Person",
    "typeScriptTag": "person",
    "description": "Use priority scheme",
    "parameters": [
      {
        "name": "personId",
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
      }
    ]
  },
  {
    "url": "/1.0/roles/{person_id}/history",
    "method": "viewRoleHistory",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Person",
    "typeScriptTag": "person",
    "description": "Role History",
    "parameters": [
      {
        "name": "personId",
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
      }
    ]
  },
  {
    "url": "/1.0/people/change_history",
    "method": "getLatestDeltaChangesToPersonalData",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Person",
    "typeScriptTag": "person",
    "description": "Personal data audit log",
    "parameters": [
      {
        "name": "sinceTimestamp",
        "schema": "string",
        "description": "Defaults to 1 week ago"
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
      }
    ]
  },
  {
    "url": "/1.0/calendar/{person_id}/verzuim/{year}",
    "method": "listVerzuimPeriods",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Person",
    "typeScriptTag": "person",
    "description": "List verzuim periods",
    "parameters": [
      {
        "name": "personId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "year",
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
      }
    ]
  },
  {
    "url": "/1.0/people/{person_id}/custom_fields",
    "method": "getCustomFields",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Person",
    "typeScriptTag": "person",
    "description": "Person custom fields",
    "parameters": [
      {
        "name": "personId",
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
      }
    ]
  },
  {
    "url": "/1.0/people/{person_id}/weekly_schedule/current",
    "method": "getCurrentWeeklySchedule",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Person",
    "typeScriptTag": "person",
    "description": "Weekly schedule",
    "parameters": [
      {
        "name": "personId",
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
      }
    ]
  },
  {
    "url": "/1.0/expenses/list/{year}/{month}",
    "method": "listByMonth",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Expense",
    "typeScriptTag": "expense",
    "description": "List expenses by month",
    "parameters": [
      {
        "name": "year",
        "schema": "string",
        "required": true,
        "description": "the specific year we want to filter",
        "example": "YEAR"
      },
      {
        "name": "month",
        "schema": "string",
        "required": true,
        "description": "the specific month we want to filter this is optional",
        "example": "MONTH"
      },
      {
        "name": "page",
        "schema": "string",
        "description": "optional to filter pages",
        "default": "0"
      },
      {
        "name": "includeDeleted",
        "schema": "integer",
        "description": "this is so you can exclude any deleted expense, by default we show them (0 - 1)",
        "default": 1
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
      }
    ]
  },
  {
    "url": "/1.0/expenses/categories/list",
    "method": "listCategories",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Expense",
    "typeScriptTag": "expense",
    "description": "List expense categories",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/1.0/expenses/{expense_id}/detail",
    "method": "detailList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Expense",
    "typeScriptTag": "expense",
    "description": "Expense detail",
    "parameters": [
      {
        "name": "expenseId",
        "schema": "integer",
        "required": true,
        "description": "the specific id we want to see the details about",
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
      }
    ]
  },
  {
    "url": "/1.0/expenses/add",
    "method": "addExpense",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Expense",
    "typeScriptTag": "expense",
    "description": "Add expense",
    "parameters": [
      {
        "name": "description",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DESCRIPTION"
      },
      {
        "name": "employee_id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0,
        "default": null
      },
      {
        "name": "category_id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0,
        "default": 0
      },
      {
        "name": "amount",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "extra_information",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "date",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "filename",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "file_base64",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "dates",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "distance",
        "schema": "integer",
        "required": false,
        "description": "",
        "default": 0
      },
      {
        "name": "ride",
        "schema": "string",
        "required": false,
        "description": "",
        "default": "single"
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
      }
    ]
  },
  {
    "url": "/1.0/expenses/{expense_id}",
    "method": "removeExpense",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Expense",
    "typeScriptTag": "expense",
    "description": "Delete expense",
    "parameters": [
      {
        "name": "expenseId",
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
      }
    ]
  },
  {
    "url": "/1.0/expenses/{expense_id}",
    "method": "updateDetails",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Expense",
    "typeScriptTag": "expense",
    "description": "Edit expense",
    "parameters": [
      {
        "name": "expenseId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "category_id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0,
        "default": 0
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
      }
    ]
  },
  {
    "url": "/1.0/expenses/categories/{category_id}",
    "method": "deleteCategory",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Expense",
    "typeScriptTag": "expense",
    "description": "Delete expense category",
    "parameters": [
      {
        "name": "categoryId",
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
      }
    ]
  },
  {
    "url": "/1.0/expenses/categories/{category_id}",
    "method": "updateCategoryName",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Expense",
    "typeScriptTag": "expense",
    "description": "Edit expense category name",
    "parameters": [
      {
        "name": "categoryId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
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
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/1.0/expenses/{expense_id}/updatePayout",
    "method": "updatePayoutMethodStatus",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Expense",
    "typeScriptTag": "expense",
    "description": "Set payout method and status",
    "parameters": [
      {
        "name": "expenseId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "new_payout_method",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NEW_PAYOUT_METHOD"
      },
      {
        "name": "payout_other_reason",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "payout_status",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "period",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "year",
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
      }
    ]
  },
  {
    "url": "/1.0/expenses/categories/add",
    "method": "addCategory",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Expense",
    "typeScriptTag": "expense",
    "description": "Add expense category",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TYPE",
        "default": "total"
      },
      {
        "name": "price-per-kilometer",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "price-per-day",
        "schema": "number",
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
      }
    ]
  },
  {
    "url": "/1.0/expenses/categories/{category_id}/detail",
    "method": "categoryDetailList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Expense",
    "typeScriptTag": "expense",
    "description": "Expense category detail",
    "parameters": [
      {
        "name": "categoryId",
        "schema": "integer",
        "required": true,
        "description": "the specific id we want to see the details about",
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
      }
    ]
  },
  {
    "url": "/1.0/expenses/list/{year}",
    "method": "listByYear",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Expense",
    "typeScriptTag": "expense",
    "description": "List expenses by year",
    "parameters": [
      {
        "name": "year",
        "schema": "string",
        "required": true,
        "description": "the specific year we want to filter",
        "example": "YEAR"
      },
      {
        "name": "month",
        "schema": "string",
        "required": true,
        "description": "the specific month we want to filter this is optional",
        "example": "MONTH"
      },
      {
        "name": "page",
        "schema": "string",
        "description": "optional to filter pages",
        "default": "0"
      },
      {
        "name": "includeDeleted",
        "schema": "integer",
        "description": "this is so you can exclude any deleted expense, by default we show them (0 - 1)",
        "default": 1
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
      }
    ]
  },
  {
    "url": "/1.0/wages/functions/list",
    "method": "getAllFunctions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Function",
    "typeScriptTag": "function",
    "description": "List functions",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/1.0/wages/functions/detail/{internal_code}",
    "method": "getDetail",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Function",
    "typeScriptTag": "function",
    "description": "Function detail",
    "parameters": [
      {
        "name": "internalCode",
        "schema": "string",
        "required": true,
        "description": "The internal code / GUID of the function you would like to receive information on",
        "example": "INTERNAL_CODE"
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
      }
    ]
  },
  {
    "url": "/1.0/wages/departments/list",
    "method": "getAllDepartments",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Department",
    "typeScriptTag": "department",
    "description": "List departments",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/1.0/wages/departments/detail/{internal_code}",
    "method": "getDetail",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Department",
    "typeScriptTag": "department",
    "description": "Department detail",
    "parameters": [
      {
        "name": "internalCode",
        "schema": "string",
        "required": true,
        "description": "The internal code / GUID of the function you would like to receive information on",
        "example": "INTERNAL_CODE"
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
      }
    ]
  },
  {
    "url": "/1.0/wages/cost_units/list",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "CostUnit",
    "typeScriptTag": "costUnit",
    "description": "List cost units",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/1.0/wages/cost_units/detail/{internal_code}",
    "method": "getDetail",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "CostUnit",
    "typeScriptTag": "costUnit",
    "description": "Cost unit detail",
    "parameters": [
      {
        "name": "internalCode",
        "schema": "string",
        "required": true,
        "description": "The internal code / GUID of the function you would like to receive information on",
        "example": "INTERNAL_CODE"
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
      }
    ]
  },
  {
    "url": "/1.0/wages/cost_centers/list",
    "method": "getAllCostCenters",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "CostCenter",
    "typeScriptTag": "costCenter",
    "description": "List cost centers",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/1.0/wages/cost_centers/detail/{internal_code}",
    "method": "getDetailAllFunctionsOrSingleOne",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "CostCenter",
    "typeScriptTag": "costCenter",
    "description": "Cost center detail",
    "parameters": [
      {
        "name": "internalCode",
        "schema": "string",
        "required": true,
        "description": "The internal code / GUID of the function you would like to receive information on",
        "example": "INTERNAL_CODE"
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
      }
    ]
  }
]
    }
      language="TypeScript"
      apiTitle="Officient API"
      apiBaseUrl="https://api.officient.io"
      apiVersion="1.0"
      endpoints={92}
      sdkMethods={98}
      schemas={203}
      parameters={153}
      difficulty="Medium"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/officient-io/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/officient-io/openapi.yaml"
      developerDocumentation="apidocs.officient.io/"
    />
  );
}
  