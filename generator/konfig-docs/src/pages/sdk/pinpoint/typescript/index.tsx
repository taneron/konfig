import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function PinpointTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="pinpoint-typescript-sdk"
      metaDescription={`Applicant tracking software that’s ready for anything. Get more control with branded careers sites, flexible templates, tailored workflows, beautiful reports, and an easier hiring process—not just for your candidates, but for your own team too. Make better hiring decisions—faster–with Pinpoint.`}
      company="Pinpoint"
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/pinpoint/logo.png"
      companyKebabCase="pinpoint"
      clientNameCamelCase="pinpoint"
      homepage="pinpointhq.com"
      lastUpdated={new Date("2024-03-28T00:10:52.272Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/pinpoint/favicon.png"
      // Missing contactUrl
      contactEmail="developers@pinpointhq.com"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/pinpoint/imagePreview.png"
      GettingStarted={GettingStarted}
      FirstRequest={FirstRequest}
      categories={["applicant_tracking","hr"]}
      methods={[
  {
    "url": "/api/v1/applications",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Applications",
    "typeScriptTag": "applications",
    "description": "List Applications",
    "parameters": [
      {
        "name": "extraFields[applications]",
        "schema": "array",
        "description": "Include fields that are not always needed, or perhaps computationally expensive"
      },
      {
        "name": "fields[applications]",
        "schema": "array",
        "description": "[Include only specified fields in the response](https://jsonapi.org/format/#fetching-sparse-fieldsets)"
      },
      {
        "name": "filters[locale]",
        "schema": "string",
        "description": "Filter records that were submitted under that locale.",
        "default": "en"
      },
      {
        "name": "filter[createdAt][gt]",
        "schema": "string",
        "description": "Filter records with a creation time greater than this value.\n",
        "example": "2021-04-01T00:00:00+01:00"
      },
      {
        "name": "filter[createdAt][lt]",
        "schema": "string",
        "description": "Filter records with a creation time less than this value.\n",
        "example": "2021-04-01T00:00:00+01:00"
      },
      {
        "name": "filter[internalCandidate]",
        "schema": "boolean",
        "description": "Filter records based on whether they're marked as an internal candidate\n",
        "example": false
      },
      {
        "name": "filter[jobId]",
        "schema": "string",
        "description": "Filter records by their job ID\n"
      },
      {
        "name": "filter[jobVisibility]",
        "schema": "array",
        "description": "Filter records by the visibility of the job that they belong to. To ensure backwards compatibility, applications belonging to confidential jobs are excluded from results unless a `job_visibility` of `confidential` is explicitly specified.\n"
      },
      {
        "name": "filter[stageBasicType]",
        "schema": "array",
        "description": "Filter records based on their stage basic type"
      },
      {
        "name": "filter[stageId]",
        "schema": "string",
        "description": "Filter records by their stage ID.\n"
      },
      {
        "name": "filter[updatedAt][gt]",
        "schema": "string",
        "description": "Filter records with a last update time greater than this value.\n",
        "example": "2021-04-01T00:00:00+01:00"
      },
      {
        "name": "filter[updatedAt][lt]",
        "schema": "string",
        "description": "Filter records with a last update time less than this value.\n",
        "example": "2021-04-01T00:00:00+01:00"
      },
      {
        "name": "include",
        "schema": "array",
        "description": "[Include related resources](https://jsonapi.org/format/#fetching-includes)"
      },
      {
        "name": "page[number]",
        "schema": "integer",
        "description": "The page number of records to return",
        "example": 1,
        "default": 1
      },
      {
        "name": "page[size]",
        "schema": "integer",
        "description": "The number of records to return.",
        "default": 100
      },
      {
        "name": "sort",
        "schema": "array",
        "description": "[Sort records according to one or more criteria](https://jsonapi.org/format/#fetching-sorting)\n\nYou should not include both ascending `id` and descending `-id` fields the same time\n"
      },
      {
        "name": "stats[total]",
        "schema": "string",
        "description": "Include the total number of matched records within the meta key of the response object.\n",
        "example": "count"
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
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/applications",
    "method": "createNewApplication",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Applications",
    "typeScriptTag": "applications",
    "description": "Create Application",
    "parameters": [
      {
        "name": "data",
        "schema": "object",
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
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/applications/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Applications",
    "typeScriptTag": "applications",
    "description": "Fetch Application",
    "parameters": [
      {
        "name": "include",
        "schema": "array",
        "description": "[Include related resources](https://jsonapi.org/format/#fetching-includes)"
      },
      {
        "name": "fields[applications]",
        "schema": "array",
        "description": "[Include only specified fields in the response](https://jsonapi.org/format/#fetching-sparse-fieldsets)"
      },
      {
        "name": "extraFields[applications]",
        "schema": "array",
        "description": "Include fields that are not always needed, or perhaps computationally expensive"
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
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/applications/{id}",
    "method": "updateById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Applications",
    "typeScriptTag": "applications",
    "description": "Update Application",
    "parameters": [
      {
        "name": "data",
        "schema": "object",
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
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/comments",
    "method": "listGet",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Comments",
    "typeScriptTag": "comments",
    "description": "List Comments",
    "parameters": [
      {
        "name": "fields[comments]",
        "schema": "array",
        "description": "[Include only specified fields in the response](https://jsonapi.org/format/#fetching-sparse-fieldsets)"
      },
      {
        "name": "filter[createdAt][gt]",
        "schema": "string",
        "description": "Filter records with a creation time greater than this value.\n",
        "example": "2021-04-01T00:00:00+01:00"
      },
      {
        "name": "filter[createdAt][lt]",
        "schema": "string",
        "description": "Filter records with a creation time less than this value.\n",
        "example": "2021-04-01T00:00:00+01:00"
      },
      {
        "name": "filter[updatedAt][gt]",
        "schema": "string",
        "description": "Filter records with a last update time greater than this value.\n",
        "example": "2021-04-01T00:00:00+01:00"
      },
      {
        "name": "filter[updatedAt][lt]",
        "schema": "string",
        "description": "Filter records with a last update time less than this value.\n",
        "example": "2021-04-01T00:00:00+01:00"
      },
      {
        "name": "filter[commentableId]",
        "schema": "integer",
        "description": "Filter records by their commentable ID\n"
      },
      {
        "name": "filter[commentableType]",
        "schema": "array",
        "description": "Filter records based on whether they are for applications or job seekers\n"
      },
      {
        "name": "include",
        "schema": "array",
        "description": "[Include related resources](https://jsonapi.org/format/#fetching-includes)"
      },
      {
        "name": "sort",
        "schema": "array",
        "description": "[Sort records according to one or more criteria](https://jsonapi.org/format/#fetching-sorting)\n\nYou should not include both ascending `id` and descending `-id` fields the same time\n"
      },
      {
        "name": "page[number]",
        "schema": "integer",
        "description": "The page number of records to return",
        "example": 1,
        "default": 1
      },
      {
        "name": "page[size]",
        "schema": "integer",
        "description": "The number of records to return.",
        "default": 100
      },
      {
        "name": "stats[total]",
        "schema": "string",
        "description": "Include the total number of matched records within the meta key of the response object.\n",
        "example": "count"
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
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/comments",
    "method": "createNew",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Comments",
    "typeScriptTag": "comments",
    "description": "Create Comment",
    "parameters": [
      {
        "name": "data",
        "schema": "object",
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
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/comments/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Comments",
    "typeScriptTag": "comments",
    "description": "Fetch Comment",
    "parameters": [
      {
        "name": "include",
        "schema": "array",
        "description": "[Include related resources](https://jsonapi.org/format/#fetching-includes)"
      },
      {
        "name": "fields[comments]",
        "schema": "array",
        "description": "[Include only specified fields in the response](https://jsonapi.org/format/#fetching-sparse-fieldsets)"
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
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/custom_attributes",
    "method": "listAttributes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Custom Attributes",
    "typeScriptTag": "customAttributes",
    "description": "List Custom Attributes",
    "parameters": [
      {
        "name": "fields[customAttributes]",
        "schema": "array",
        "description": "[Include only specified fields in the response](https://jsonapi.org/format/#fetching-sparse-fieldsets)"
      },
      {
        "name": "filter[createdAt][gt]",
        "schema": "string",
        "description": "Filter records with a creation time greater than this value.\n",
        "example": "2021-04-01T00:00:00+01:00"
      },
      {
        "name": "filter[createdAt][lt]",
        "schema": "string",
        "description": "Filter records with a creation time less than this value.\n",
        "example": "2021-04-01T00:00:00+01:00"
      },
      {
        "name": "filter[updatedAt][gt]",
        "schema": "string",
        "description": "Filter records with a last update time greater than this value.\n",
        "example": "2021-04-01T00:00:00+01:00"
      },
      {
        "name": "filter[updatedAt][lt]",
        "schema": "string",
        "description": "Filter records with a last update time less than this value.\n",
        "example": "2021-04-01T00:00:00+01:00"
      },
      {
        "name": "filter[customAttributableId]",
        "schema": "integer",
        "description": "Filter records by their custom_attributable ID\n"
      },
      {
        "name": "filter[customAttributableType]",
        "schema": "array",
        "description": "Filter records by the type of the associated resource\n"
      },
      {
        "name": "include",
        "schema": "array",
        "description": "[Include related resources](https://jsonapi.org/format/#fetching-includes)"
      },
      {
        "name": "sort",
        "schema": "array",
        "description": "[Sort records according to one or more criteria](https://jsonapi.org/format/#fetching-sorting)\n\nYou should not include both ascending `id` and descending `-id` fields the same time\n"
      },
      {
        "name": "page[number]",
        "schema": "integer",
        "description": "The page number of records to return",
        "example": 1,
        "default": 1
      },
      {
        "name": "page[size]",
        "schema": "integer",
        "description": "The number of records to return.",
        "default": 100
      },
      {
        "name": "stats[total]",
        "schema": "string",
        "description": "Include the total number of matched records within the meta key of the response object.\n",
        "example": "count"
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
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/custom_attributes",
    "method": "createNewAttribute",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Custom Attributes",
    "typeScriptTag": "customAttributes",
    "description": "Create Custom Attribute",
    "parameters": [
      {
        "name": "data",
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
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/custom_attributes/{id}",
    "method": "removeById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Custom Attributes",
    "typeScriptTag": "customAttributes",
    "description": "Delete Custom Attribute",
    "parameters": [],
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/custom_attributes/{id}",
    "method": "getAttribute",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Custom Attributes",
    "typeScriptTag": "customAttributes",
    "description": "Fetch Custom Attribute",
    "parameters": [
      {
        "name": "fields[customAttributes]",
        "schema": "array",
        "description": "[Include only specified fields in the response](https://jsonapi.org/format/#fetching-sparse-fieldsets)"
      },
      {
        "name": "include",
        "schema": "array",
        "description": "[Include related resources](https://jsonapi.org/format/#fetching-includes)"
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
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/custom_attributes/{id}",
    "method": "updateAttributeById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Custom Attributes",
    "typeScriptTag": "customAttributes",
    "description": "Update Custom Attribute",
    "parameters": [
      {
        "name": "data",
        "schema": "object",
        "required": true,
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
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/custom_fields",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Custom Fields",
    "typeScriptTag": "customFields",
    "description": "List Custom Fields",
    "parameters": [
      {
        "name": "fields[customFields]",
        "schema": "array",
        "description": "[Include only specified fields in the response](https://jsonapi.org/format/#fetching-sparse-fieldsets)"
      },
      {
        "name": "page[number]",
        "schema": "integer",
        "description": "The page number of records to return",
        "example": 1,
        "default": 1
      },
      {
        "name": "page[size]",
        "schema": "integer",
        "description": "The number of records to return.",
        "default": 100
      },
      {
        "name": "stats[total]",
        "schema": "string",
        "description": "Include the total number of matched records within the meta key of the response object.\n",
        "example": "count"
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
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/custom_fields",
    "method": "createNewField",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Custom Fields",
    "typeScriptTag": "customFields",
    "description": "Create Custom Field",
    "parameters": [
      {
        "name": "data",
        "schema": "object",
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
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/custom_fields/{id}",
    "method": "deleteField",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Custom Fields",
    "typeScriptTag": "customFields",
    "description": "Delete Custom Field",
    "parameters": [],
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/custom_fields/{id}",
    "method": "getField",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Custom Fields",
    "typeScriptTag": "customFields",
    "description": "Fetch Custom Field",
    "parameters": [
      {
        "name": "fields[customFields]",
        "schema": "array",
        "description": "[Include only specified fields in the response](https://jsonapi.org/format/#fetching-sparse-fieldsets)"
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
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/custom_fields/{id}",
    "method": "updateFieldById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Custom Fields",
    "typeScriptTag": "customFields",
    "description": "Update Custom Field",
    "parameters": [
      {
        "name": "data",
        "schema": "object",
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
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/departments",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Departments",
    "typeScriptTag": "departments",
    "description": "List Departments",
    "parameters": [
      {
        "name": "fields[departments]",
        "schema": "array",
        "description": "[Include only specified fields in the response](https://jsonapi.org/format/#fetching-sparse-fieldsets)"
      },
      {
        "name": "sort",
        "schema": "array",
        "description": "[Sort records according to one or more criteria](https://jsonapi.org/format/#fetching-sorting)\n\nYou should not include both ascending `id` and descending `-id` fields the same time\n"
      },
      {
        "name": "page[number]",
        "schema": "integer",
        "description": "The page number of records to return",
        "example": 1,
        "default": 1
      },
      {
        "name": "page[size]",
        "schema": "integer",
        "description": "The number of records to return.",
        "default": 100
      },
      {
        "name": "stats[total]",
        "schema": "string",
        "description": "Include the total number of matched records within the meta key of the response object.\n",
        "example": "count"
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
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/departments",
    "method": "createNewDepartment",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Departments",
    "typeScriptTag": "departments",
    "description": "Create Department",
    "parameters": [
      {
        "name": "data",
        "schema": "object",
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
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/departments/{id}",
    "method": "removeById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Departments",
    "typeScriptTag": "departments",
    "description": "Delete Department",
    "parameters": [],
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/departments/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Departments",
    "typeScriptTag": "departments",
    "description": "Fetch Department",
    "parameters": [
      {
        "name": "fields[departments]",
        "schema": "array",
        "description": "[Include only specified fields in the response](https://jsonapi.org/format/#fetching-sparse-fieldsets)"
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
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/departments/{id}",
    "method": "updateById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Departments",
    "typeScriptTag": "departments",
    "description": "Update Department",
    "parameters": [
      {
        "name": "data",
        "schema": "object",
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
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/divisions",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Divisions",
    "typeScriptTag": "divisions",
    "description": "List Divisions",
    "parameters": [
      {
        "name": "fields[divisions]",
        "schema": "array",
        "description": "[Include only specified fields in the response](https://jsonapi.org/format/#fetching-sparse-fieldsets)"
      },
      {
        "name": "sort",
        "schema": "array",
        "description": "[Sort records according to one or more criteria](https://jsonapi.org/format/#fetching-sorting)\n\nYou should not include both ascending `id` and descending `-id` fields the same time\n"
      },
      {
        "name": "page[number]",
        "schema": "integer",
        "description": "The page number of records to return",
        "example": 1,
        "default": 1
      },
      {
        "name": "page[size]",
        "schema": "integer",
        "description": "The number of records to return.",
        "default": 100
      },
      {
        "name": "stats[total]",
        "schema": "string",
        "description": "Include the total number of matched records within the meta key of the response object.\n",
        "example": "count"
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
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/divisions",
    "method": "createDivision",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Divisions",
    "typeScriptTag": "divisions",
    "description": "Create Division",
    "parameters": [
      {
        "name": "data",
        "schema": "object",
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
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/divisions/{id}",
    "method": "removeById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Divisions",
    "typeScriptTag": "divisions",
    "description": "Delete Division",
    "parameters": [],
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/divisions/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Divisions",
    "typeScriptTag": "divisions",
    "description": "Fetch Division",
    "parameters": [
      {
        "name": "fields[divisions]",
        "schema": "array",
        "description": "[Include only specified fields in the response](https://jsonapi.org/format/#fetching-sparse-fieldsets)"
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
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/divisions/{id}",
    "method": "updateById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Divisions",
    "typeScriptTag": "divisions",
    "description": "Update Division",
    "parameters": [
      {
        "name": "data",
        "schema": "object",
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
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/equality_monitoring_categories",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Equality Monitoring Categories",
    "typeScriptTag": "equalityMonitoringCategories",
    "description": "List equality monitoring categories",
    "parameters": [
      {
        "name": "filter[createdAt][gt]",
        "schema": "string",
        "description": "Filter records with a creation time greater than this value.\n",
        "example": "2021-04-01T00:00:00+01:00"
      },
      {
        "name": "filter[createdAt][lt]",
        "schema": "string",
        "description": "Filter records with a creation time less than this value.\n",
        "example": "2021-04-01T00:00:00+01:00"
      },
      {
        "name": "fields[equalityMonitoringCategories]",
        "schema": "array",
        "description": "[Include only specified fields in the response](https://jsonapi.org/format/#fetching-sparse-fieldsets)"
      },
      {
        "name": "filter[enabled]",
        "schema": "boolean",
        "description": "Filter records based on whether they're marked as enabled\n",
        "example": false
      },
      {
        "name": "sort",
        "schema": "array",
        "description": "[Sort records according to one or more criteria](https://jsonapi.org/format/#fetching-sorting)\n\nYou should not include both ascending `id` and descending `-id` fields the same time\n"
      },
      {
        "name": "include",
        "schema": "array",
        "description": "[Include related resources](https://jsonapi.org/format/#fetching-includes)"
      },
      {
        "name": "page[number]",
        "schema": "integer",
        "description": "The page number of records to return",
        "example": 1,
        "default": 1
      },
      {
        "name": "page[size]",
        "schema": "integer",
        "description": "The number of records to return.",
        "default": 100
      },
      {
        "name": "stats[total]",
        "schema": "string",
        "description": "Include the total number of matched records within the meta key of the response object.\n",
        "example": "count"
      },
      {
        "name": "filter[updatedAt][gt]",
        "schema": "string",
        "description": "Filter records with a last update time greater than this value.\n",
        "example": "2021-04-01T00:00:00+01:00"
      },
      {
        "name": "filter[updatedAt][lt]",
        "schema": "string",
        "description": "Filter records with a last update time less than this value.\n",
        "example": "2021-04-01T00:00:00+01:00"
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
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/equality_monitoring_categories/{id}",
    "method": "getCategoryById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Equality Monitoring Categories",
    "typeScriptTag": "equalityMonitoringCategories",
    "description": "Fetch equality monitoring category",
    "parameters": [
      {
        "name": "include",
        "schema": "array",
        "description": "[Include related resources](https://jsonapi.org/format/#fetching-includes)"
      },
      {
        "name": "fields[equalityMonitoringCategories]",
        "schema": "array",
        "description": "[Include only specified fields in the response](https://jsonapi.org/format/#fetching-sparse-fieldsets)"
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
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/interviews",
    "method": "listAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Interviews",
    "typeScriptTag": "interviews",
    "description": "List Interviews",
    "parameters": [
      {
        "name": "fields[interviews]",
        "schema": "array",
        "description": "[Include only specified fields of Interview in response](https://jsonapi.org/format/#fetching-sparse-fieldsets)"
      },
      {
        "name": "filter[createdAt][gt]",
        "schema": "string",
        "description": "Filter records with a creation time greater than this value.\n",
        "example": "2021-04-01T00:00:00+01:00"
      },
      {
        "name": "filter[createdAt][lt]",
        "schema": "string",
        "description": "Filter records with a creation time less than this value.\n",
        "example": "2021-04-01T00:00:00+01:00"
      },
      {
        "name": "filter[interviewableId]",
        "schema": "integer",
        "description": "Filter records by interviewable ID"
      },
      {
        "name": "filter[interviewableType]",
        "schema": "string",
        "description": "Filter records based on whether they are for applications or job seekers"
      },
      {
        "name": "filter[jobVisibility]",
        "schema": "array",
        "description": "Filter records by the visibility of the job that they belong to. By default, interviews associated with applications for confidential jobs are excluded from results unless a `job_visibility` of `confidential` is explicitly specified.\n"
      },
      {
        "name": "filter[startAt][gt]",
        "schema": "string",
        "description": "Filter records with a start at time greater than this value.\n",
        "example": "2021-04-01T00:00:00+01:00"
      },
      {
        "name": "filter[startAt][lt]",
        "schema": "string",
        "description": "Filter records with a start at time less than this value.\n",
        "example": "2021-04-01T00:00:00+01:00"
      },
      {
        "name": "include",
        "schema": "array",
        "description": "[Include related resources](https://jsonapi.org/format/#fetching-includes)"
      },
      {
        "name": "page[number]",
        "schema": "integer",
        "description": "The page number of records to return",
        "example": 1,
        "default": 1
      },
      {
        "name": "page[size]",
        "schema": "integer",
        "description": "The number of records to return.",
        "default": 100
      },
      {
        "name": "sort",
        "schema": "array",
        "description": "[Sort records according to one or more criteria](https://jsonapi.org/format/#fetching-sorting)\n\nYou should not include both ascending `id` and descending `-id` fields the same time\n"
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
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/interviews/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Interviews",
    "typeScriptTag": "interviews",
    "description": "Fetch Interview",
    "parameters": [
      {
        "name": "fields[interviews]",
        "schema": "array",
        "description": "[Include only specified fields of Interview in response](https://jsonapi.org/format/#fetching-sparse-fieldsets)"
      },
      {
        "name": "include",
        "schema": "array",
        "description": "[Include related resources](https://jsonapi.org/format/#fetching-includes)"
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
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/hiring_workflows",
    "method": "listWorkflows",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Hiring Workflows",
    "typeScriptTag": "hiringWorkflows",
    "description": "List Hiring Workflows",
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
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/hiring_workflows/{id}",
    "method": "getWorkflowById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Hiring Workflows",
    "typeScriptTag": "hiringWorkflows",
    "description": "Fetch Hiring Workflow",
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
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/jobs",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Jobs",
    "typeScriptTag": "jobs",
    "description": "List Jobs",
    "parameters": [
      {
        "name": "filter[createdAt][gt]",
        "schema": "string",
        "description": "Filter records with a creation time greater than this value.\n",
        "example": "2021-04-01T00:00:00+01:00"
      },
      {
        "name": "filter[createdAt][lt]",
        "schema": "string",
        "description": "Filter records with a creation time less than this value.\n",
        "example": "2021-04-01T00:00:00+01:00"
      },
      {
        "name": "filter[departmentId]",
        "schema": "integer",
        "description": "Filter by department ID"
      },
      {
        "name": "filter[departmentName]",
        "schema": "string",
        "description": "Filter by department name"
      },
      {
        "name": "filter[divisionId]",
        "schema": "integer",
        "description": "Filter by division ID"
      },
      {
        "name": "filter[divisionName]",
        "schema": "string",
        "description": "Filter by division name"
      },
      {
        "name": "filter[employmentType]",
        "schema": "array",
        "description": "Filter by employment type"
      },
      {
        "name": "filter[hiringManagerUserId]",
        "schema": "integer",
        "description": "Filter by hiring manager user ID"
      },
      {
        "name": "filter[locationId]",
        "schema": "integer",
        "description": "Filter by location ID"
      },
      {
        "name": "filter[locationName]",
        "schema": "string",
        "description": "Filter by location name"
      },
      {
        "name": "filter[recruitmentManagerUserId]",
        "schema": "integer",
        "description": "Filter by recruitment manager user ID"
      },
      {
        "name": "filter[remote]",
        "schema": "boolean",
        "description": "Filter by whether the role is remote"
      },
      {
        "name": "filter[search]",
        "schema": "string",
        "description": "Perform a keyword search on the job title"
      },
      {
        "name": "filter[status]",
        "schema": "array",
        "description": "Filter by status"
      },
      {
        "name": "filter[structureCustomGroupOneId]",
        "schema": "integer",
        "description": "Filter by custom structure group ID"
      },
      {
        "name": "filter[structureCustomGroupOneName]",
        "schema": "string",
        "description": "Filter by custom structure group name"
      },
      {
        "name": "filter[visibility]",
        "schema": "array",
        "description": "Filter by whether this job is confidential, internal, external. To ensure backwards compatibility, confidential jobs are excluded from results unless explicitly specified."
      },
      {
        "name": "filter[workplaceType]",
        "schema": "array",
        "description": "Filter by workplace type"
      },
      {
        "name": "include",
        "schema": "array",
        "description": "[Include related resources](https://jsonapi.org/format/#fetching-includes)"
      },
      {
        "name": "locale",
        "schema": "string",
        "description": "Return translatable fields in the locale specified. `null` will be returned for a field if a translation has not been provided.",
        "default": "en"
      },
      {
        "name": "page[number]",
        "schema": "integer",
        "description": "The page number of records to return",
        "example": 1,
        "default": 1
      },
      {
        "name": "page[size]",
        "schema": "integer",
        "description": "The number of records to return.",
        "default": 100
      },
      {
        "name": "sort",
        "schema": "array",
        "description": "[Sort records according to one or more criteria](https://jsonapi.org/format/#fetching-sorting)\n\nYou should not include both ascending `id` and descending `-id` fields the same time\n"
      },
      {
        "name": "stats[total]",
        "schema": "string",
        "description": "Include the total number of matched records within the meta key of the response object.\n",
        "example": "count"
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
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/jobs",
    "method": "createJob",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Jobs",
    "typeScriptTag": "jobs",
    "description": "Create Job",
    "parameters": [
      {
        "name": "data",
        "schema": "object",
        "description": ""
      },
      {
        "name": "included",
        "schema": "array",
        "description": ""
      },
      {
        "name": "meta",
        "schema": "object",
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
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/jobs/{id}",
    "method": "deleteJob",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Jobs",
    "typeScriptTag": "jobs",
    "description": "Delete Job",
    "parameters": [],
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/jobs/{id}",
    "method": "getJobById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Jobs",
    "typeScriptTag": "jobs",
    "description": "Fetch Job",
    "parameters": [
      {
        "name": "locale",
        "schema": "string",
        "description": "Return translatable fields in the locale specified. `null` will be returned for a field if a translation has not been provided.",
        "default": "en"
      },
      {
        "name": "include",
        "schema": "array",
        "description": "[Include related resources](https://jsonapi.org/format/#fetching-includes)"
      },
      {
        "name": "fields[jobs]",
        "schema": "array",
        "description": "[Include only specified fields of Job in response](https://jsonapi.org/format/#fetching-sparse-fieldsets)"
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
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/jobs/{id}",
    "method": "updateJobById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Jobs",
    "typeScriptTag": "jobs",
    "description": "Update Job",
    "parameters": [
      {
        "name": "data",
        "schema": "object",
        "description": ""
      },
      {
        "name": "included",
        "schema": "array",
        "description": ""
      },
      {
        "name": "meta",
        "schema": "object",
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
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/job_seekers",
    "method": "listJobSeekers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Job Seekers",
    "typeScriptTag": "jobSeekers",
    "description": "List Job Seekers",
    "parameters": [
      {
        "name": "extraFields[jobSeekers]",
        "schema": "array",
        "description": "Include fields that are not always needed, and perhaps computationally expensive"
      },
      {
        "name": "fields[jobSeekers]",
        "schema": "array",
        "description": "[Include only specified fields in the response](https://jsonapi.org/format/#fetching-sparse-fieldsets)"
      },
      {
        "name": "include",
        "schema": "array",
        "description": "[Include related resources](https://jsonapi.org/format/#fetching-includes)"
      },
      {
        "name": "sort",
        "schema": "array",
        "description": "[Sort records according to one or more criteria](https://jsonapi.org/format/#fetching-sorting)\n\nYou should not include both ascending `id` and descending `-id` fields the same time\n"
      },
      {
        "name": "page[number]",
        "schema": "integer",
        "description": "The page number of records to return",
        "example": 1,
        "default": 1
      },
      {
        "name": "page[size]",
        "schema": "integer",
        "description": "The number of records to return.",
        "default": 100
      },
      {
        "name": "stats[total]",
        "schema": "string",
        "description": "Include the total number of matched records within the meta key of the response object.\n",
        "example": "count"
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
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/job_seekers/{id}",
    "method": "getJobSeekerById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Job Seekers",
    "typeScriptTag": "jobSeekers",
    "description": "Fetch Job Seeker",
    "parameters": [
      {
        "name": "extraFields[jobSeekers]",
        "schema": "array",
        "description": "Include fields that are not always needed, and perhaps computationally expensive"
      },
      {
        "name": "fields[jobSeekers]",
        "schema": "array",
        "description": "[Include only specified fields in the response](https://jsonapi.org/format/#fetching-sparse-fieldsets)"
      },
      {
        "name": "include",
        "schema": "array",
        "description": "[Include related resources](https://jsonapi.org/format/#fetching-includes)"
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
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/locations",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Locations",
    "typeScriptTag": "locations",
    "description": "List Locations",
    "parameters": [
      {
        "name": "fields[locations]",
        "schema": "array",
        "description": "[Include only specified fields in the response](https://jsonapi.org/format/#fetching-sparse-fieldsets)"
      },
      {
        "name": "sort",
        "schema": "array",
        "description": "[Sort records according to one or more criteria](https://jsonapi.org/format/#fetching-sorting)\n\nYou should not include both ascending `id` and descending `-id` fields the same time\n"
      },
      {
        "name": "page[number]",
        "schema": "integer",
        "description": "The page number of records to return",
        "example": 1,
        "default": 1
      },
      {
        "name": "page[size]",
        "schema": "integer",
        "description": "The number of records to return.",
        "default": 100
      },
      {
        "name": "stats[total]",
        "schema": "string",
        "description": "Include the total number of matched records within the meta key of the response object.\n",
        "example": "count"
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
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/locations",
    "method": "createLocation",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Locations",
    "typeScriptTag": "locations",
    "description": "Create Location",
    "parameters": [
      {
        "name": "data",
        "schema": "object",
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
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/locations/{id}",
    "method": "removeLocation",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Locations",
    "typeScriptTag": "locations",
    "description": "Delete Location",
    "parameters": [],
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/locations/{id}",
    "method": "getLocation",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Locations",
    "typeScriptTag": "locations",
    "description": "Fetch Location",
    "parameters": [
      {
        "name": "fields[locations]",
        "schema": "array",
        "description": "[Include only specified fields in the response](https://jsonapi.org/format/#fetching-sparse-fieldsets)"
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
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/locations/{id}",
    "method": "updateLocationById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Locations",
    "typeScriptTag": "locations",
    "description": "Update Location",
    "parameters": [
      {
        "name": "data",
        "schema": "object",
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
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/onboarding_applications",
    "method": "listApplications",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Onboarding Applications",
    "typeScriptTag": "onboardingApplications",
    "description": "List Onboarding Applications",
    "parameters": [
      {
        "name": "filter[createdAt][gt]",
        "schema": "string",
        "description": "Filter records with a creation time greater than this value.\n",
        "example": "2021-04-01T00:00:00+01:00"
      },
      {
        "name": "filter[createdAt][lt]",
        "schema": "string",
        "description": "Filter records with a creation time less than this value.\n",
        "example": "2021-04-01T00:00:00+01:00"
      },
      {
        "name": "fields[onboardingApplications]",
        "schema": "array",
        "description": "[Include only specified fields in the response](https://jsonapi.org/format/#fetching-sparse-fieldsets)"
      },
      {
        "name": "include",
        "schema": "array",
        "description": "[Include related resources](https://jsonapi.org/format/#fetching-includes)"
      },
      {
        "name": "sort",
        "schema": "array",
        "description": "[Sort records according to one or more criteria](https://jsonapi.org/format/#fetching-sorting)\n\nYou should not include both ascending `id` and descending `-id` fields the same time\n"
      },
      {
        "name": "page[number]",
        "schema": "integer",
        "description": "The page number of records to return",
        "example": 1,
        "default": 1
      },
      {
        "name": "page[size]",
        "schema": "integer",
        "description": "The number of records to return.",
        "default": 100
      },
      {
        "name": "filter[startAt][gt]",
        "schema": "string",
        "description": "Filter records with a start at time greater than this value.\n",
        "example": "2021-04-01T00:00:00+01:00"
      },
      {
        "name": "filter[startAt][lt]",
        "schema": "string",
        "description": "Filter records with a start at time less than this value.\n",
        "example": "2021-04-01T00:00:00+01:00"
      },
      {
        "name": "stats[total]",
        "schema": "string",
        "description": "Include the total number of matched records within the meta key of the response object.\n",
        "example": "count"
      },
      {
        "name": "filter[updatedAt][gt]",
        "schema": "string",
        "description": "Filter records with a last update time greater than this value.\n",
        "example": "2021-04-01T00:00:00+01:00"
      },
      {
        "name": "filter[updatedAt][lt]",
        "schema": "string",
        "description": "Filter records with a last update time less than this value.\n",
        "example": "2021-04-01T00:00:00+01:00"
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
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/onboarding_applications/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Onboarding Applications",
    "typeScriptTag": "onboardingApplications",
    "description": "Fetch Onboarding Application",
    "parameters": [
      {
        "name": "fields[onboardingApplications]",
        "schema": "array",
        "description": "[Include only specified fields in the response](https://jsonapi.org/format/#fetching-sparse-fieldsets)"
      },
      {
        "name": "include",
        "schema": "array",
        "description": "[Include related resources](https://jsonapi.org/format/#fetching-includes)"
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
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/requisition_templates",
    "method": "listTemplates",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Requisition Templates",
    "typeScriptTag": "requisitionTemplates",
    "description": "List Requisition Templates",
    "parameters": [
      {
        "name": "fields[requisitionTemplates]",
        "schema": "array",
        "description": "[Include only specified fields of Requisition template in response](https://jsonapi.org/format/#fetching-sparse-fieldsets)"
      },
      {
        "name": "filter[createdAt][gt]",
        "schema": "string",
        "description": "Filter records with a creation time greater than this value.\n",
        "example": "2021-04-01T00:00:00+01:00"
      },
      {
        "name": "filter[createdAt][lt]",
        "schema": "string",
        "description": "Filter records with a creation time less than this value.\n",
        "example": "2021-04-01T00:00:00+01:00"
      },
      {
        "name": "filter[updatedAt][gt]",
        "schema": "string",
        "description": "Filter records with a last update time greater than this value.\n",
        "example": "2021-04-01T00:00:00+01:00"
      },
      {
        "name": "filter[updatedAt][lt]",
        "schema": "string",
        "description": "Filter records with a last update time less than this value.\n",
        "example": "2021-04-01T00:00:00+01:00"
      },
      {
        "name": "include",
        "schema": "array",
        "description": "[Include related resources](https://jsonapi.org/format/#fetching-includes)"
      },
      {
        "name": "sort",
        "schema": "array",
        "description": "[Sort records according to one or more criteria](https://jsonapi.org/format/#fetching-sorting)\n\nYou should not include both ascending `id` and descending `-id` fields the same time\n"
      },
      {
        "name": "page[number]",
        "schema": "integer",
        "description": "The page number of records to return",
        "example": 1,
        "default": 1
      },
      {
        "name": "page[size]",
        "schema": "integer",
        "description": "The number of records to return.",
        "default": 100
      },
      {
        "name": "stats[total]",
        "schema": "string",
        "description": "Include the total number of matched records within the meta key of the response object.\n",
        "example": "count"
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
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/requisition_templates/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Requisition Templates",
    "typeScriptTag": "requisitionTemplates",
    "description": "Fetch Requisition Template",
    "parameters": [
      {
        "name": "include",
        "schema": "array",
        "description": "[Include related resources](https://jsonapi.org/format/#fetching-includes)"
      },
      {
        "name": "fields[requisitionTemplates]",
        "schema": "array",
        "description": "[Include only specified fields of Requisition template in response](https://jsonapi.org/format/#fetching-sparse-fieldsets)"
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
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/requisitions",
    "method": "listRequisitions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Requisitions",
    "typeScriptTag": "requisitions",
    "description": "List Requisitions",
    "parameters": [
      {
        "name": "fields[requisitions]",
        "schema": "array",
        "description": "[Include only specified fields of Requisition in response](https://jsonapi.org/format/#fetching-sparse-fieldsets)"
      },
      {
        "name": "filter[createdAt][gt]",
        "schema": "string",
        "description": "Filter records with a creation time greater than this value.\n",
        "example": "2021-04-01T00:00:00+01:00"
      },
      {
        "name": "filter[createdAt][lt]",
        "schema": "string",
        "description": "Filter records with a creation time less than this value.\n",
        "example": "2021-04-01T00:00:00+01:00"
      },
      {
        "name": "filter[updatedAt][gt]",
        "schema": "string",
        "description": "Filter records with a last update time greater than this value.\n",
        "example": "2021-04-01T00:00:00+01:00"
      },
      {
        "name": "filter[updatedAt][lt]",
        "schema": "string",
        "description": "Filter records with a last update time less than this value.\n",
        "example": "2021-04-01T00:00:00+01:00"
      },
      {
        "name": "include",
        "schema": "array",
        "description": "[Include related resources](https://jsonapi.org/format/#fetching-includes)"
      },
      {
        "name": "sort",
        "schema": "array",
        "description": "[Sort records according to one or more criteria](https://jsonapi.org/format/#fetching-sorting)\n\nYou should not include both ascending `id` and descending `-id` fields the same time\n"
      },
      {
        "name": "page[number]",
        "schema": "integer",
        "description": "The page number of records to return",
        "example": 1,
        "default": 1
      },
      {
        "name": "page[size]",
        "schema": "integer",
        "description": "The number of records to return.",
        "default": 100
      },
      {
        "name": "stats[total]",
        "schema": "string",
        "description": "Include the total number of matched records within the meta key of the response object.\n",
        "example": "count"
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
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/requisitions",
    "method": "createNewRequisition",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Requisitions",
    "typeScriptTag": "requisitions",
    "description": "Create Requisition",
    "parameters": [
      {
        "name": "data",
        "schema": "object",
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
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/requisitions/{id}",
    "method": "removeById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Requisitions",
    "typeScriptTag": "requisitions",
    "description": "Delete Requisition",
    "parameters": [],
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/requisitions/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Requisitions",
    "typeScriptTag": "requisitions",
    "description": "Fetch Requisition",
    "parameters": [
      {
        "name": "include",
        "schema": "array",
        "description": "[Include related resources](https://jsonapi.org/format/#fetching-includes)"
      },
      {
        "name": "fields[requisitions]",
        "schema": "array",
        "description": "[Include only specified fields of Requisition in response](https://jsonapi.org/format/#fetching-sparse-fieldsets)"
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
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/requisitions/{id}",
    "method": "updateById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Requisitions",
    "typeScriptTag": "requisitions",
    "description": "Update Requisition",
    "parameters": [
      {
        "name": "data",
        "schema": "object",
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
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/structure_custom_group_ones",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Structure Custom Group Ones",
    "typeScriptTag": "structureCustomGroupOnes",
    "description": "List Structure Custom Group Ones",
    "parameters": [
      {
        "name": "fields[structureCustomGroupOnes]",
        "schema": "array",
        "description": "[Include only specified fields in the response](https://jsonapi.org/format/#fetching-sparse-fieldsets)"
      },
      {
        "name": "sort",
        "schema": "array",
        "description": "[Sort records according to one or more criteria](https://jsonapi.org/format/#fetching-sorting)\n\nYou should not include both ascending `id` and descending `-id` fields the same time\n"
      },
      {
        "name": "page[number]",
        "schema": "integer",
        "description": "The page number of records to return",
        "example": 1,
        "default": 1
      },
      {
        "name": "page[size]",
        "schema": "integer",
        "description": "The number of records to return.",
        "default": 100
      },
      {
        "name": "stats[total]",
        "schema": "string",
        "description": "Include the total number of matched records within the meta key of the response object.\n",
        "example": "count"
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
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/structure_custom_group_ones",
    "method": "createNewGroup",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Structure Custom Group Ones",
    "typeScriptTag": "structureCustomGroupOnes",
    "description": "Create Structure Custom Group One",
    "parameters": [
      {
        "name": "data",
        "schema": "object",
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
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/structure_custom_group_ones/{id}",
    "method": "delete",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Structure Custom Group Ones",
    "typeScriptTag": "structureCustomGroupOnes",
    "description": "Delete Structure Custom Group One",
    "parameters": [],
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/structure_custom_group_ones/{id}",
    "method": "getOne",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Structure Custom Group Ones",
    "typeScriptTag": "structureCustomGroupOnes",
    "description": "Fetch Structure Custom Group One",
    "parameters": [
      {
        "name": "fields[structureCustomGroupOnes]",
        "schema": "array",
        "description": "[Include only specified fields in the response](https://jsonapi.org/format/#fetching-sparse-fieldsets)"
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
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/structure_custom_group_ones/{id}",
    "method": "updateOne",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Structure Custom Group Ones",
    "typeScriptTag": "structureCustomGroupOnes",
    "description": "Update Structure Custom Group One",
    "parameters": [
      {
        "name": "data",
        "schema": "object",
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
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/structure_links",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Structure Links",
    "typeScriptTag": "structureLinks",
    "description": "List Structure Links",
    "parameters": [
      {
        "name": "fields[structureLinks]",
        "schema": "array",
        "description": "[Include only specified fields in the response](https://jsonapi.org/format/#fetching-sparse-fieldsets)"
      },
      {
        "name": "extraFields[structureLinks]",
        "schema": "array",
        "description": "Include fields that are not always needed, or perhaps computationally expensive"
      },
      {
        "name": "include",
        "schema": "array",
        "description": "[Include related resources](https://jsonapi.org/format/#fetching-includes)"
      },
      {
        "name": "page[number]",
        "schema": "integer",
        "description": "The page number of records to return",
        "example": 1,
        "default": 1
      },
      {
        "name": "page[size]",
        "schema": "integer",
        "description": "The number of records to return.",
        "default": 100
      },
      {
        "name": "stats[total]",
        "schema": "string",
        "description": "Include the total number of matched records within the meta key of the response object.\n",
        "example": "count"
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
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/structure_links",
    "method": "createLink",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Structure Links",
    "typeScriptTag": "structureLinks",
    "description": "Create Structure Link",
    "parameters": [
      {
        "name": "data",
        "schema": "object",
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
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/structure_links/{id}",
    "method": "removeById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Structure Links",
    "typeScriptTag": "structureLinks",
    "description": "Delete Structure Link",
    "parameters": [],
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "409",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/structure_links/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Structure Links",
    "typeScriptTag": "structureLinks",
    "description": "Fetch Structure Links",
    "parameters": [
      {
        "name": "fields[structureLinks]",
        "schema": "array",
        "description": "[Include only specified fields in the response](https://jsonapi.org/format/#fetching-sparse-fieldsets)"
      },
      {
        "name": "extraFields[structureLinks]",
        "schema": "array",
        "description": "Include fields that are not always needed, or perhaps computationally expensive"
      },
      {
        "name": "include",
        "schema": "array",
        "description": "[Include related resources](https://jsonapi.org/format/#fetching-includes)"
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
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/structure_links/{id}",
    "method": "updateLinkById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Structure Links",
    "typeScriptTag": "structureLinks",
    "description": "Update Structure Link",
    "parameters": [
      {
        "name": "data",
        "schema": "object",
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
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/users",
    "method": "listUsers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "List users",
    "parameters": [
      {
        "name": "fields[users]",
        "schema": "array",
        "description": "[Include only specified fields in the response](https://jsonapi.org/format/#fetching-sparse-fieldsets)"
      },
      {
        "name": "filter[employee]",
        "schema": "boolean",
        "description": "Filter records based on whether the user is an employee of your company"
      },
      {
        "name": "page[number]",
        "schema": "integer",
        "description": "The page number of records to return",
        "example": 1,
        "default": 1
      },
      {
        "name": "page[size]",
        "schema": "integer",
        "description": "The number of records to return.",
        "default": 100
      },
      {
        "name": "stats[total]",
        "schema": "string",
        "description": "Include the total number of matched records within the meta key of the response object.\n",
        "example": "count"
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
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/users",
    "method": "createUser",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Create User",
    "parameters": [
      {
        "name": "data",
        "schema": "object",
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
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/users/{id}",
    "method": "removeUser",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Delete User",
    "parameters": [],
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/users/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Fetch users",
    "parameters": [
      {
        "name": "fields[users]",
        "schema": "array",
        "description": "[Include only specified fields in the response](https://jsonapi.org/format/#fetching-sparse-fieldsets)"
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
        "statusCode": "429",
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
      apiTitle="API Reference"
      apiBaseUrl="https://{subdomain}.pinpointhq.com"
      apiVersion="1.0.23"
      endpoints={36}
      sdkMethods={86}
      schemas={169}
      parameters={201}
      difficulty="Hard"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/pinpoint/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/pinpoint/openapi.yaml"
      developerDocumentation="developers.pinpointhq.com/reference"
    />
  );
}
  