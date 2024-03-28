import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function OnnaTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="onna-typescript-sdk"
      metaDescription={`Onna enables enterprises to quickly gain business value from their unstructured data. Onna's Data Management Platform provides a central workflow that spans across today's workplace applications like Slack, Google Workspace, Microsoft 365, and more, producing a unified set of actionable data. By connecting and unifying disparate data sources, legal and IT teams enhance key use cases like eDiscovery, internal investigations, and information governance. With teams across North America and Europe, Onna supports some of the world's leading companies, including Dropbox, Electronic Arts, Lyft, Carvana, and NewsCorp.
For more information, please visit us at www.onna.com.`}
      company="Onna"
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/onna/logo.png"
      companyKebabCase="onna"
      clientNameCamelCase="onna"
      homepage="onna.com/"
      lastUpdated={new Date("2024-03-28T22:45:59.842Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/onna/favicon.png"
      contactUrl="https://dev.onna.com/help"
      // Missing contactEmail
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/onna/imagePreview.png"
      GettingStarted={GettingStarted}
      FirstRequest={FirstRequest}
      categories={["data_management","processing","data_integration","unstructured_data"]}
      methods={[
  {
    "url": "/customFields",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "CustomFields",
    "typeScriptTag": "customFields",
    "description": "List Custom Fields",
    "parameters": [
      {
        "name": "cursor",
        "schema": "string",
        "required": false,
        "description": "The API uses [cursoring for pagination.](https://dev.onna.com/fundamentals/api-basics/#pagination)",
        "example": "2022-02-22T11:11:11.12345"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "JSON:API \"error object\": https://jsonapi.org/format/#errors"
      },
      {
        "statusCode": "403",
        "description": "JSON:API \"error object\": https://jsonapi.org/format/#errors"
      },
      {
        "statusCode": "404",
        "description": "JSON:API \"error object\": https://jsonapi.org/format/#errors"
      },
      {
        "statusCode": "422",
        "description": "JSON:API \"error object\": https://jsonapi.org/format/#errors"
      },
      {
        "statusCode": "500",
        "description": "JSON:API \"error object\": https://jsonapi.org/format/#errors"
      }
    ]
  },
  {
    "url": "/customFields",
    "method": "createField",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "CustomFields",
    "typeScriptTag": "customFields",
    "description": "Create Custom Field",
    "parameters": [
      {
        "name": "description",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DESCRIPTION"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "required",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TYPE"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "JSON:API \"error object\": https://jsonapi.org/format/#errors"
      },
      {
        "statusCode": "403",
        "description": "JSON:API \"error object\": https://jsonapi.org/format/#errors"
      },
      {
        "statusCode": "404",
        "description": "JSON:API \"error object\": https://jsonapi.org/format/#errors"
      },
      {
        "statusCode": "422",
        "description": "JSON:API \"error object\": https://jsonapi.org/format/#errors"
      },
      {
        "statusCode": "500",
        "description": "JSON:API \"error object\": https://jsonapi.org/format/#errors"
      }
    ]
  },
  {
    "url": "/folders",
    "method": "createNewFolder",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Folders",
    "typeScriptTag": "folders",
    "description": "Create Folder",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "onna_parent_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ONNA_PARENT_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "JSON:API \"error object\": https://jsonapi.org/format/#errors"
      },
      {
        "statusCode": "403",
        "description": "JSON:API \"error object\": https://jsonapi.org/format/#errors"
      },
      {
        "statusCode": "404",
        "description": "JSON:API \"error object\": https://jsonapi.org/format/#errors"
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "JSON:API \"error object\": https://jsonapi.org/format/#errors"
      }
    ]
  },
  {
    "url": "/folders/{onna_id}",
    "method": "deleteFolder",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Folders",
    "typeScriptTag": "folders",
    "description": "Delete Folder",
    "parameters": [
      {
        "name": "onnaId",
        "schema": "string",
        "required": true,
        "description": "Unique ID of the folder.",
        "example": "ONNA_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Successful Response"
      },
      {
        "statusCode": "401",
        "description": "JSON:API \"error object\": https://jsonapi.org/format/#errors"
      },
      {
        "statusCode": "403",
        "description": "JSON:API \"error object\": https://jsonapi.org/format/#errors"
      },
      {
        "statusCode": "404",
        "description": "JSON:API \"error object\": https://jsonapi.org/format/#errors"
      },
      {
        "statusCode": "422",
        "description": "JSON:API \"error object\": https://jsonapi.org/format/#errors"
      },
      {
        "statusCode": "500",
        "description": "JSON:API \"error object\": https://jsonapi.org/format/#errors"
      }
    ]
  },
  {
    "url": "/folders/{onna_id}",
    "method": "getInfo",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Folders",
    "typeScriptTag": "folders",
    "description": "Retrieve Folder Info",
    "parameters": [
      {
        "name": "onnaId",
        "schema": "string",
        "required": true,
        "description": "Unique ID of the folder.",
        "example": "ONNA_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "JSON:API \"error object\": https://jsonapi.org/format/#errors"
      },
      {
        "statusCode": "403",
        "description": "JSON:API \"error object\": https://jsonapi.org/format/#errors"
      },
      {
        "statusCode": "404",
        "description": "JSON:API \"error object\": https://jsonapi.org/format/#errors"
      },
      {
        "statusCode": "422",
        "description": "JSON:API \"error object\": https://jsonapi.org/format/#errors"
      },
      {
        "statusCode": "500",
        "description": "JSON:API \"error object\": https://jsonapi.org/format/#errors"
      }
    ]
  },
  {
    "url": "/folders/{onna_id}",
    "method": "updateFolderName",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Folders",
    "typeScriptTag": "folders",
    "description": "Update Folder",
    "parameters": [
      {
        "name": "onnaId",
        "schema": "string",
        "required": true,
        "description": "Unique ID of the folder.",
        "example": "ONNA_ID"
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
        "statusCode": "204",
        "description": "Successful Response"
      },
      {
        "statusCode": "401",
        "description": "JSON:API \"error object\": https://jsonapi.org/format/#errors"
      },
      {
        "statusCode": "403",
        "description": "JSON:API \"error object\": https://jsonapi.org/format/#errors"
      },
      {
        "statusCode": "404",
        "description": "JSON:API \"error object\": https://jsonapi.org/format/#errors"
      },
      {
        "statusCode": "422",
        "description": "JSON:API \"error object\": https://jsonapi.org/format/#errors"
      },
      {
        "statusCode": "500",
        "description": "JSON:API \"error object\": https://jsonapi.org/format/#errors"
      }
    ]
  },
  {
    "url": "/health",
    "method": "checkServiceStatus",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Utils",
    "typeScriptTag": "utils",
    "description": "Health Check",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "JSON:API \"error object\": https://jsonapi.org/format/#errors"
      }
    ]
  },
  {
    "url": "/oauth/token",
    "method": "exchangeCredentials",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Authentication",
    "typeScriptTag": "authentication",
    "description": "Login",
    "parameters": [
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
        "description": "",
        "default": "client_credentials"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "JSON:API \"error object\": https://jsonapi.org/format/#errors"
      }
    ]
  },
  {
    "url": "/oauth/user",
    "method": "currentUserInfo",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Authentication",
    "typeScriptTag": "authentication",
    "description": "Current User",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "JSON:API \"error object\": https://jsonapi.org/format/#errors"
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "JSON:API \"error object\": https://jsonapi.org/format/#errors"
      }
    ]
  },
  {
    "url": "/resources/files",
    "method": "createNewFile",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Resources: Files",
    "typeScriptTag": "resources:Files",
    "description": "Create File",
    "parameters": [
      {
        "name": "tags",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "version",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "comment",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "creation_date",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "creator",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "deleter",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "deletion_date",
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
        "name": "onna_parent_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ONNA_PARENT_ID"
      },
      {
        "name": "path",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "ref",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "REF"
      },
      {
        "name": "share_url",
        "schema": "string",
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
        "name": "type",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "update_date",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "updater",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "url",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "URL"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "JSON:API \"error object\": https://jsonapi.org/format/#errors"
      },
      {
        "statusCode": "403",
        "description": "JSON:API \"error object\": https://jsonapi.org/format/#errors"
      },
      {
        "statusCode": "422",
        "description": "JSON:API \"error object\": https://jsonapi.org/format/#errors"
      }
    ]
  },
  {
    "url": "/resources/files/{onna_id}",
    "method": "deleteFile",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Resources: Files",
    "typeScriptTag": "resources:Files",
    "description": "Delete File",
    "parameters": [
      {
        "name": "onnaId",
        "schema": "string",
        "required": true,
        "description": "Unique ID of the file.",
        "example": "ONNA_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Successful Response"
      },
      {
        "statusCode": "401",
        "description": "JSON:API \"error object\": https://jsonapi.org/format/#errors"
      },
      {
        "statusCode": "403",
        "description": "JSON:API \"error object\": https://jsonapi.org/format/#errors"
      },
      {
        "statusCode": "404",
        "description": "JSON:API \"error object\": https://jsonapi.org/format/#errors"
      },
      {
        "statusCode": "422",
        "description": "JSON:API \"error object\": https://jsonapi.org/format/#errors"
      },
      {
        "statusCode": "500",
        "description": "JSON:API \"error object\": https://jsonapi.org/format/#errors"
      }
    ]
  },
  {
    "url": "/resources/files/{onna_id}",
    "method": "getFile",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Resources: Files",
    "typeScriptTag": "resources:Files",
    "description": "Read File",
    "parameters": [
      {
        "name": "onnaId",
        "schema": "string",
        "required": true,
        "description": "Unique ID of the file.",
        "example": "ONNA_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "JSON:API \"error object\": https://jsonapi.org/format/#errors"
      },
      {
        "statusCode": "403",
        "description": "JSON:API \"error object\": https://jsonapi.org/format/#errors"
      },
      {
        "statusCode": "404",
        "description": "JSON:API \"error object\": https://jsonapi.org/format/#errors"
      },
      {
        "statusCode": "422",
        "description": "JSON:API \"error object\": https://jsonapi.org/format/#errors"
      },
      {
        "statusCode": "500",
        "description": "JSON:API \"error object\": https://jsonapi.org/format/#errors"
      }
    ]
  },
  {
    "url": "/resources/tickets",
    "method": "createNewTicket",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Resources: Tickets",
    "typeScriptTag": "resources:Tickets",
    "description": "Create Ticket",
    "parameters": [
      {
        "name": "tags",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "assignee_group",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "assignees",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "author",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "category",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "comments",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "creation_date",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "followers",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "onna_parent_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ONNA_PARENT_ID"
      },
      {
        "name": "priority",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "reactions",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "ref",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "REF"
      },
      {
        "name": "requester",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "severity",
        "schema": "string",
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
        "name": "subcategory",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "type",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "update_date",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "updater",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "url",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "URL"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "JSON:API \"error object\": https://jsonapi.org/format/#errors"
      },
      {
        "statusCode": "403",
        "description": "JSON:API \"error object\": https://jsonapi.org/format/#errors"
      },
      {
        "statusCode": "422",
        "description": "JSON:API \"error object\": https://jsonapi.org/format/#errors"
      },
      {
        "statusCode": "500",
        "description": "JSON:API \"error object\": https://jsonapi.org/format/#errors"
      }
    ]
  },
  {
    "url": "/resources/tickets/{onna_id}",
    "method": "removeTicket",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Resources: Tickets",
    "typeScriptTag": "resources:Tickets",
    "description": "Delete Ticket",
    "parameters": [
      {
        "name": "onnaId",
        "schema": "string",
        "required": true,
        "description": "Unique ID of the ticket.",
        "example": "ONNA_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Successful Response"
      },
      {
        "statusCode": "401",
        "description": "JSON:API \"error object\": https://jsonapi.org/format/#errors"
      },
      {
        "statusCode": "403",
        "description": "JSON:API \"error object\": https://jsonapi.org/format/#errors"
      },
      {
        "statusCode": "404",
        "description": "JSON:API \"error object\": https://jsonapi.org/format/#errors"
      },
      {
        "statusCode": "422",
        "description": "JSON:API \"error object\": https://jsonapi.org/format/#errors"
      },
      {
        "statusCode": "500",
        "description": "JSON:API \"error object\": https://jsonapi.org/format/#errors"
      }
    ]
  },
  {
    "url": "/resources/tickets/{onna_id}",
    "method": "getTicket",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Resources: Tickets",
    "typeScriptTag": "resources:Tickets",
    "description": "Read Ticket",
    "parameters": [
      {
        "name": "onnaId",
        "schema": "string",
        "required": true,
        "description": "Unique ID of the ticket.",
        "example": "ONNA_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "JSON:API \"error object\": https://jsonapi.org/format/#errors"
      },
      {
        "statusCode": "403",
        "description": "JSON:API \"error object\": https://jsonapi.org/format/#errors"
      },
      {
        "statusCode": "404",
        "description": "JSON:API \"error object\": https://jsonapi.org/format/#errors"
      },
      {
        "statusCode": "422",
        "description": "JSON:API \"error object\": https://jsonapi.org/format/#errors"
      },
      {
        "statusCode": "500",
        "description": "JSON:API \"error object\": https://jsonapi.org/format/#errors"
      }
    ]
  },
  {
    "url": "/upload/{id}/tus",
    "method": "headResourceFileResumable",
    "httpMethod": HttpMethodsEnum.HEAD,
    "tag": "Upload",
    "typeScriptTag": "upload",
    "description": "Head Resource File Resumable Upload",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "tusResumable",
        "schema": "string",
        "required": false,
        "description": "The `Tus-Resumable` header is included in every request and response.\n\n```bash\nTus-Resumable: 1.0.0\n```\n\nFor more information on the headers used by TUS, see [\"the protocol specification\"](https://tus.io/protocols/resumable-upload.html)."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Successful Response"
      },
      {
        "statusCode": "401",
        "description": "JSON:API \"error object\": https://jsonapi.org/format/#errors"
      },
      {
        "statusCode": "403",
        "description": "JSON:API \"error object\": https://jsonapi.org/format/#errors"
      },
      {
        "statusCode": "404",
        "description": "JSON:API \"error object\": https://jsonapi.org/format/#errors"
      },
      {
        "statusCode": "405",
        "description": "JSON:API \"error object\": https://jsonapi.org/format/#errors"
      },
      {
        "statusCode": "412",
        "description": "JSON:API \"error object\": https://jsonapi.org/format/#errors"
      },
      {
        "statusCode": "422",
        "description": "JSON:API \"error object\": https://jsonapi.org/format/#errors"
      },
      {
        "statusCode": "500",
        "description": "JSON:API \"error object\": https://jsonapi.org/format/#errors"
      }
    ]
  },
  {
    "url": "/upload/{id}/tus",
    "method": "optionsResourceFile",
    "httpMethod": HttpMethodsEnum.OPTIONS,
    "tag": "Upload",
    "typeScriptTag": "upload",
    "description": "Options Resource File",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Successful Response"
      },
      {
        "statusCode": "401",
        "description": "JSON:API \"error object\": https://jsonapi.org/format/#errors"
      },
      {
        "statusCode": "403",
        "description": "JSON:API \"error object\": https://jsonapi.org/format/#errors"
      },
      {
        "statusCode": "404",
        "description": "JSON:API \"error object\": https://jsonapi.org/format/#errors"
      },
      {
        "statusCode": "422",
        "description": "JSON:API \"error object\": https://jsonapi.org/format/#errors"
      },
      {
        "statusCode": "500",
        "description": "JSON:API \"error object\": https://jsonapi.org/format/#errors"
      }
    ]
  },
  {
    "url": "/upload/{id}/tus",
    "method": "resumeResourceFile",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Upload",
    "typeScriptTag": "upload",
    "description": "Resume Resource File Upload",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "contentLength",
        "schema": "string",
        "required": false,
        "description": "The `Content-Length` header indicates the size of the message body, in bytes, sent to the recipient.\n\n```bash\nContent-Length: 512\n```\n\nFor more information on headers, see [\"the MDN Web Docs\"](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Length)."
      },
      {
        "name": "contentType",
        "schema": "string",
        "required": false,
        "description": "The `Content-Type` representation header is used to indicate the original media type of the resource (prior to any content encoding applied for sending).\n\n```bash\nContent-Type: application/json; charset=utf-8\n```\n\nFor more information on headers, see [\"the MDN Web Docs\"](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Type)."
      },
      {
        "name": "uploadOffset",
        "schema": "string",
        "required": false,
        "description": "The `Upload-Offset` request and response header indicates a byte offset within a resource. The value MUST be a non-negative integer.\n\n```bash\nUpload-Offset: 64\n```\n\nFor more information on the headers used by TUS, see [\"the protocol specification\"](https://tus.io/protocols/resumable-upload.html)."
      },
      {
        "name": "tusResumable",
        "schema": "string",
        "required": false,
        "description": "The `Tus-Resumable` header is included in every request and response.\n\n```bash\nTus-Resumable: 1.0.0\n```\n\nFor more information on the headers used by TUS, see [\"the protocol specification\"](https://tus.io/protocols/resumable-upload.html)."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Successful Response"
      },
      {
        "statusCode": "401",
        "description": "JSON:API \"error object\": https://jsonapi.org/format/#errors"
      },
      {
        "statusCode": "403",
        "description": "JSON:API \"error object\": https://jsonapi.org/format/#errors"
      },
      {
        "statusCode": "404",
        "description": "JSON:API \"error object\": https://jsonapi.org/format/#errors"
      },
      {
        "statusCode": "405",
        "description": "JSON:API \"error object\": https://jsonapi.org/format/#errors"
      },
      {
        "statusCode": "412",
        "description": "JSON:API \"error object\": https://jsonapi.org/format/#errors"
      },
      {
        "statusCode": "422",
        "description": "JSON:API \"error object\": https://jsonapi.org/format/#errors"
      }
    ]
  },
  {
    "url": "/upload/{id}/tus",
    "method": "resourceFileResumableUpload",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Upload",
    "typeScriptTag": "upload",
    "description": "Create Resource File Resumable Upload",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "uploadDeferLength",
        "schema": "string",
        "required": false,
        "description": "The `Upload-Defer-Length` request and response header indicates that the size of the upload is not known currently and will be transferred later.\nIts value MUST be 1. If the length of an upload is not deferred, this header MUST be omitted.\n\n```bash\nUpload-Defer-Length: 1\n```\n\nFor more information on the headers used by TUS, see [\"the protocol specification\"](https://tus.io/protocols/resumable-upload.html)."
      },
      {
        "name": "uploadLength",
        "schema": "string",
        "required": false,
        "description": "The `Upload-Length` request and response header indicates the size of the entire upload in bytes. The value MUST be a non-negative integer.\n\n```bash\nUpload-Length: 512\n```\n\nFor more information on the headers used by TUS, see [\"the protocol specification\"](https://tus.io/protocols/resumable-upload.html)."
      },
      {
        "name": "uploadMetadata",
        "schema": "string",
        "required": false,
        "description": "The `Upload-Metadata` request and response header MUST consist of one or more comma-separated key-value pairs. The key and value MUST be separated by a space.\nThe key MUST NOT contain spaces and commas and MUST NOT be empty. The key SHOULD be ASCII encoded and the value MUST be Base64 encoded. All keys MUST be unique.\nThe value MAY be empty. In these cases, the space, which would normally separate the key and the value, MAY be left out.\n\n```bash\nUpload-Metadata: filename d29ybGRfZG9taW5hdGlvbl9wbGFuLnBkZg==,is_confidential\n```\n\nFor more information on the headers used by TUS, see [\"the protocol specification\"](https://tus.io/protocols/resumable-upload.html)."
      },
      {
        "name": "tusResumable",
        "schema": "string",
        "required": false,
        "description": "The `Tus-Resumable` header is included in every request and response.\n\n```bash\nTus-Resumable: 1.0.0\n```\n\nFor more information on the headers used by TUS, see [\"the protocol specification\"](https://tus.io/protocols/resumable-upload.html)."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Successful Response"
      },
      {
        "statusCode": "401",
        "description": "JSON:API \"error object\": https://jsonapi.org/format/#errors"
      },
      {
        "statusCode": "403",
        "description": "JSON:API \"error object\": https://jsonapi.org/format/#errors"
      },
      {
        "statusCode": "404",
        "description": "JSON:API \"error object\": https://jsonapi.org/format/#errors"
      },
      {
        "statusCode": "405",
        "description": "JSON:API \"error object\": https://jsonapi.org/format/#errors"
      },
      {
        "statusCode": "412",
        "description": "JSON:API \"error object\": https://jsonapi.org/format/#errors"
      },
      {
        "statusCode": "422",
        "description": "JSON:API \"error object\": https://jsonapi.org/format/#errors"
      },
      {
        "statusCode": "500",
        "description": "JSON:API \"error object\": https://jsonapi.org/format/#errors"
      }
    ]
  },
  {
    "url": "/upload/{id}/tus",
    "method": "resourceSingleRequest",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Upload",
    "typeScriptTag": "upload",
    "description": "Create Resource File Single Request",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Successful Response"
      },
      {
        "statusCode": "401",
        "description": "JSON:API \"error object\": https://jsonapi.org/format/#errors"
      },
      {
        "statusCode": "403",
        "description": "JSON:API \"error object\": https://jsonapi.org/format/#errors"
      },
      {
        "statusCode": "404",
        "description": "JSON:API \"error object\": https://jsonapi.org/format/#errors"
      },
      {
        "statusCode": "422",
        "description": "JSON:API \"error object\": https://jsonapi.org/format/#errors"
      },
      {
        "statusCode": "500",
        "description": "JSON:API \"error object\": https://jsonapi.org/format/#errors"
      }
    ]
  },
  {
    "url": "/workspaces",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Workspaces",
    "typeScriptTag": "workspaces",
    "description": "List Workspaces",
    "parameters": [
      {
        "name": "cursor",
        "schema": "string",
        "required": false,
        "description": "The API uses [cursoring for pagination.](https://dev.onna.com/fundamentals/api-basics/#pagination)",
        "example": "2022-02-22T11:11:11.12345"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "JSON:API \"error object\": https://jsonapi.org/format/#errors"
      },
      {
        "statusCode": "403",
        "description": "JSON:API \"error object\": https://jsonapi.org/format/#errors"
      },
      {
        "statusCode": "404",
        "description": "JSON:API \"error object\": https://jsonapi.org/format/#errors"
      },
      {
        "statusCode": "422",
        "description": "JSON:API \"error object\": https://jsonapi.org/format/#errors"
      },
      {
        "statusCode": "500",
        "description": "JSON:API \"error object\": https://jsonapi.org/format/#errors"
      }
    ]
  },
  {
    "url": "/workspaces",
    "method": "create",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Workspaces",
    "typeScriptTag": "workspaces",
    "description": "Create Workspace",
    "parameters": [
      {
        "name": "tags",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": ""
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
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "JSON:API \"error object\": https://jsonapi.org/format/#errors"
      },
      {
        "statusCode": "403",
        "description": "JSON:API \"error object\": https://jsonapi.org/format/#errors"
      },
      {
        "statusCode": "404",
        "description": "JSON:API \"error object\": https://jsonapi.org/format/#errors"
      },
      {
        "statusCode": "422",
        "description": "JSON:API \"error object\": https://jsonapi.org/format/#errors"
      },
      {
        "statusCode": "500",
        "description": "JSON:API \"error object\": https://jsonapi.org/format/#errors"
      }
    ]
  },
  {
    "url": "/workspaces/{onna_id}",
    "method": "removeWorkspace",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Workspaces",
    "typeScriptTag": "workspaces",
    "description": "Delete Workspace",
    "parameters": [
      {
        "name": "onnaId",
        "schema": "string",
        "required": true,
        "description": "Unique ID of the workspace.",
        "example": "myworkspace-ZPM9Jf4zQ"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Successful Response"
      },
      {
        "statusCode": "401",
        "description": "JSON:API \"error object\": https://jsonapi.org/format/#errors"
      },
      {
        "statusCode": "403",
        "description": "JSON:API \"error object\": https://jsonapi.org/format/#errors"
      },
      {
        "statusCode": "404",
        "description": "JSON:API \"error object\": https://jsonapi.org/format/#errors"
      },
      {
        "statusCode": "422",
        "description": "JSON:API \"error object\": https://jsonapi.org/format/#errors"
      },
      {
        "statusCode": "500",
        "description": "JSON:API \"error object\": https://jsonapi.org/format/#errors"
      }
    ]
  },
  {
    "url": "/workspaces/{onna_id}",
    "method": "getInfo",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Workspaces",
    "typeScriptTag": "workspaces",
    "description": "Retrieve Workspace Info",
    "parameters": [
      {
        "name": "onnaId",
        "schema": "string",
        "required": true,
        "description": "Unique ID of the workspace.",
        "example": "myworkspace-ZPM9Jf4zQ"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "JSON:API \"error object\": https://jsonapi.org/format/#errors"
      },
      {
        "statusCode": "403",
        "description": "JSON:API \"error object\": https://jsonapi.org/format/#errors"
      },
      {
        "statusCode": "404",
        "description": "JSON:API \"error object\": https://jsonapi.org/format/#errors"
      },
      {
        "statusCode": "422",
        "description": "JSON:API \"error object\": https://jsonapi.org/format/#errors"
      },
      {
        "statusCode": "500",
        "description": "JSON:API \"error object\": https://jsonapi.org/format/#errors"
      }
    ]
  },
  {
    "url": "/workspaces/{onna_id}",
    "method": "updateWorkspace",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Workspaces",
    "typeScriptTag": "workspaces",
    "description": "Update Workspace",
    "parameters": [
      {
        "name": "onnaId",
        "schema": "string",
        "required": true,
        "description": "Unique ID of the workspace.",
        "example": "myworkspace-ZPM9Jf4zQ"
      },
      {
        "name": "tags",
        "schema": "array",
        "description": ""
      },
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Successful Response"
      },
      {
        "statusCode": "401",
        "description": "JSON:API \"error object\": https://jsonapi.org/format/#errors"
      },
      {
        "statusCode": "403",
        "description": "JSON:API \"error object\": https://jsonapi.org/format/#errors"
      },
      {
        "statusCode": "404",
        "description": "JSON:API \"error object\": https://jsonapi.org/format/#errors"
      },
      {
        "statusCode": "422",
        "description": "JSON:API \"error object\": https://jsonapi.org/format/#errors"
      },
      {
        "statusCode": "500",
        "description": "JSON:API \"error object\": https://jsonapi.org/format/#errors"
      }
    ]
  },
  {
    "url": "/workspaces/{onna_id}/customFields",
    "method": "listCustomFields",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Workspaces",
    "typeScriptTag": "workspaces",
    "description": "List Workspace Custom Fields",
    "parameters": [
      {
        "name": "onnaId",
        "schema": "string",
        "required": true,
        "description": "Unique ID of the workspace.",
        "example": "myworkspace-ZPM9Jf4zQ"
      },
      {
        "name": "cursor",
        "schema": "string",
        "required": false,
        "description": "The API uses [cursoring for pagination.](https://dev.onna.com/fundamentals/api-basics/#pagination)",
        "example": "2022-02-22T11:11:11.12345"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "JSON:API \"error object\": https://jsonapi.org/format/#errors"
      },
      {
        "statusCode": "403",
        "description": "JSON:API \"error object\": https://jsonapi.org/format/#errors"
      },
      {
        "statusCode": "404",
        "description": "JSON:API \"error object\": https://jsonapi.org/format/#errors"
      },
      {
        "statusCode": "422",
        "description": "JSON:API \"error object\": https://jsonapi.org/format/#errors"
      },
      {
        "statusCode": "500",
        "description": "JSON:API \"error object\": https://jsonapi.org/format/#errors"
      }
    ]
  },
  {
    "url": "/workspaces/{onna_id}/customFields",
    "method": "enableCustomField",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Workspaces",
    "typeScriptTag": "workspaces",
    "description": "Enable Workspace Custom Field",
    "parameters": [
      {
        "name": "onnaId",
        "schema": "string",
        "required": true,
        "description": "Unique ID of the workspace.",
        "example": "myworkspace-ZPM9Jf4zQ"
      },
      {
        "name": "onna_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ONNA_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Successful Response"
      },
      {
        "statusCode": "401",
        "description": "JSON:API \"error object\": https://jsonapi.org/format/#errors"
      },
      {
        "statusCode": "403",
        "description": "JSON:API \"error object\": https://jsonapi.org/format/#errors"
      },
      {
        "statusCode": "404",
        "description": "JSON:API \"error object\": https://jsonapi.org/format/#errors"
      },
      {
        "statusCode": "422",
        "description": "JSON:API \"error object\": https://jsonapi.org/format/#errors"
      },
      {
        "statusCode": "500",
        "description": "JSON:API \"error object\": https://jsonapi.org/format/#errors"
      }
    ]
  },
  {
    "url": "/workspaces/{onna_id}/customFields/{field_id}",
    "method": "readCustomValue",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Workspaces",
    "typeScriptTag": "workspaces",
    "description": "Read Workspace Custom Value",
    "parameters": [
      {
        "name": "onnaId",
        "schema": "string",
        "required": true,
        "description": "Unique ID of the workspace.",
        "example": "myworkspace-ZPM9Jf4zQ"
      },
      {
        "name": "fieldId",
        "schema": "string",
        "required": true,
        "description": "Unique ID of the field.",
        "example": "cf-b20696ae9"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "JSON:API \"error object\": https://jsonapi.org/format/#errors"
      },
      {
        "statusCode": "403",
        "description": "JSON:API \"error object\": https://jsonapi.org/format/#errors"
      },
      {
        "statusCode": "404",
        "description": "JSON:API \"error object\": https://jsonapi.org/format/#errors"
      },
      {
        "statusCode": "422",
        "description": "JSON:API \"error object\": https://jsonapi.org/format/#errors"
      },
      {
        "statusCode": "500",
        "description": "JSON:API \"error object\": https://jsonapi.org/format/#errors"
      }
    ]
  },
  {
    "url": "/workspaces/{onna_id}/customFields/{field_id}",
    "method": "updateCustomValue",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Workspaces",
    "typeScriptTag": "workspaces",
    "description": "Update Workspace Custom Value",
    "parameters": [
      {
        "name": "onnaId",
        "schema": "string",
        "required": true,
        "description": "Unique ID of the workspace.",
        "example": "myworkspace-ZPM9Jf4zQ"
      },
      {
        "name": "fieldId",
        "schema": "string",
        "required": true,
        "description": "Unique ID of the field.",
        "example": "cf-b20696ae9"
      },
      {
        "name": "value",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "VALUE"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Successful Response"
      },
      {
        "statusCode": "401",
        "description": "JSON:API \"error object\": https://jsonapi.org/format/#errors"
      },
      {
        "statusCode": "403",
        "description": "JSON:API \"error object\": https://jsonapi.org/format/#errors"
      },
      {
        "statusCode": "404",
        "description": "JSON:API \"error object\": https://jsonapi.org/format/#errors"
      },
      {
        "statusCode": "422",
        "description": "JSON:API \"error object\": https://jsonapi.org/format/#errors"
      },
      {
        "statusCode": "500",
        "description": "JSON:API \"error object\": https://jsonapi.org/format/#errors"
      }
    ]
  }
]
    }
      language="TypeScript"
      apiTitle="Onna Platform API"
      apiBaseUrl="https://api.onna.com/v1"
      apiVersion="v1.1.0"
      endpoints={15}
      sdkMethods={29}
      schemas={37}
      parameters={118}
      difficulty="Easy"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/onna/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/onna/openapi.yaml"
      developerDocumentation="dev.onna.com/api/"
    />
  );
}
  