import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function AffinityTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="affinity-typescript-sdk"
      metaDescription={`Affinity's patented technology structures and analyzes millions of data points across emails, calendars, and third-party sources to offer users the tools they need to automatically manage their most valuable relationships, prioritize important connections, and discover untapped opportunities. Affinity uses artificial intelligence to analyze relationship strength and illuminate the best paths to warm introductions. The platform also offers a holistic view of users' networks in a centralized, automatically updated database without any manual upkeep. Founded in 2014, Affinity is headquartered in San Francisco, California.

Affinity has raised $120M to date and is backed by leading investors including Menlo Ventures, Advance Venture Partners, 8VC and MassMutual Ventures.

It has over 2,700 customers in 70 countries, including venture capital firms such as Bain Capital Ventures and Kleiner Perkins, private equity firms such as SoftBank Group, investment bankers such as Woodside Capital Partners, financial services firms such as Fidelity Investments, real estate companies such as Tishman Speyer, insurers such as American Family Insurance and enterprises such as Nike, Qualcomm and Twilio.

Affinity has been named in Fortune Magazine's Best Workplaces, Inc. Magazine's Best Workplaces and editor's number one pick, the Data Breakthrough Award, BIG Innovation Award and others.`}
      company="Affinity"
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/affinity/logo.png"
      companyKebabCase="affinity"
      clientNameCamelCase="affinity"
      homepage="affinity.co"
      lastUpdated={new Date("2024-03-27T20:29:17.115Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/affinity/favicon.png"
      contactUrl="https://support.affinity.co"
      contactEmail="support@affinity.co"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/affinity/imagePreview.png"
      GettingStarted={GettingStarted}
      FirstRequest={FirstRequest}
      categories={["crm","venture_capital","pipeline_management","deal_management"]}
      methods={[
  {
    "url": "/v2/auth/whoami",
    "method": "getCurrentUser",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "auth",
    "typeScriptTag": "auth",
    "description": "Get current user",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "WhoAmI model"
      }
    ]
  },
  {
    "url": "/v2/companies",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "companies",
    "typeScriptTag": "companies",
    "description": "Get all Companies",
    "parameters": [
      {
        "name": "cursor",
        "schema": "string",
        "description": "Cursor for the next or previous page"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Number of items to include in the page",
        "default": 100
      },
      {
        "name": "ids",
        "schema": "array",
        "description": "Company IDs"
      },
      {
        "name": "fieldIds",
        "schema": "array",
        "description": "Field IDs for which to return field data"
      },
      {
        "name": "fieldTypes",
        "schema": "array",
        "description": "Field Types for which to return field data"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "CompanyPaged model"
      },
      {
        "statusCode": "400",
        "description": "ValidationErrors model"
      }
    ]
  },
  {
    "url": "/v2/companies/fields",
    "method": "getFieldMetadata",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "companies",
    "typeScriptTag": "companies",
    "description": "Get metadata on Company Fields",
    "parameters": [
      {
        "name": "cursor",
        "schema": "string",
        "description": "Cursor for the next or previous page"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Number of items to include in the page",
        "default": 100
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "FieldMetadataPaged model"
      },
      {
        "statusCode": "400",
        "description": "ValidationErrors model"
      }
    ]
  },
  {
    "url": "/v2/companies/{id}",
    "method": "getSingleCompany",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "companies",
    "typeScriptTag": "companies",
    "description": "Get a single Company",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "Company ID",
        "example": 0
      },
      {
        "name": "fieldIds",
        "schema": "array",
        "description": "Field IDs for which to return field data"
      },
      {
        "name": "fieldTypes",
        "schema": "array",
        "description": "Field Types for which to return field data"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Company model"
      },
      {
        "statusCode": "400",
        "description": "ValidationErrors model"
      },
      {
        "statusCode": "404",
        "description": "NotFoundErrors model"
      }
    ]
  },
  {
    "url": "/v2/companies/{id}/lists",
    "method": "getListsMetadata",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "companies",
    "typeScriptTag": "companies",
    "description": "Get a Company's Lists",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "Company ID",
        "example": 0
      },
      {
        "name": "cursor",
        "schema": "string",
        "description": "Cursor for the next or previous page"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Number of items to include in the page",
        "default": 100
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "ListPaged model"
      },
      {
        "statusCode": "400",
        "description": "ValidationErrors model"
      },
      {
        "statusCode": "404",
        "description": "NotFoundErrors model"
      }
    ]
  },
  {
    "url": "/v2/companies/{id}/list-entries",
    "method": "getListEntries",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "companies",
    "typeScriptTag": "companies",
    "description": "Get a Company's List Entries",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "Company ID",
        "example": 0
      },
      {
        "name": "cursor",
        "schema": "string",
        "description": "Cursor for the next or previous page"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Number of items to include in the page",
        "default": 100
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "ListEntryPaged model"
      },
      {
        "statusCode": "400",
        "description": "ValidationErrors model"
      }
    ]
  },
  {
    "url": "/v2/lists",
    "method": "getMetadata",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "lists",
    "typeScriptTag": "lists",
    "description": "Get metadata on all Lists",
    "parameters": [
      {
        "name": "cursor",
        "schema": "string",
        "description": "Cursor for the next or previous page"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Number of items to include in the page",
        "default": 100
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "ListWithTypePaged model"
      },
      {
        "statusCode": "400",
        "description": "ValidationErrors model"
      }
    ]
  },
  {
    "url": "/v2/lists/{listId}/list-entries",
    "method": "getAllListEntries",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "lists",
    "typeScriptTag": "lists",
    "description": "Get all List Entries on a List",
    "parameters": [
      {
        "name": "listId",
        "schema": "integer",
        "required": true,
        "description": "List ID",
        "example": 0
      },
      {
        "name": "cursor",
        "schema": "string",
        "description": "Cursor for the next or previous page"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Number of items to include in the page",
        "default": 100
      },
      {
        "name": "fieldIds",
        "schema": "array",
        "description": "Field IDs for which to return field data"
      },
      {
        "name": "fieldTypes",
        "schema": "array",
        "description": "Field Types for which to return field data"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "ListEntryWithEntityPaged model"
      },
      {
        "statusCode": "400",
        "description": "ValidationErrors model"
      },
      {
        "statusCode": "404",
        "description": "NotFoundErrors model"
      }
    ]
  },
  {
    "url": "/v2/lists/{listId}",
    "method": "getMetadataSingle",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "lists",
    "typeScriptTag": "lists",
    "description": "Get metadata on a single List",
    "parameters": [
      {
        "name": "listId",
        "schema": "integer",
        "required": true,
        "description": "List ID",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "ListWithType model"
      },
      {
        "statusCode": "400",
        "description": "ValidationErrors model"
      },
      {
        "statusCode": "404",
        "description": "NotFoundErrors model"
      }
    ]
  },
  {
    "url": "/v2/lists/{listId}/fields",
    "method": "getFieldMetadata",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "lists",
    "typeScriptTag": "lists",
    "description": "Get metadata on a single List's Fields",
    "parameters": [
      {
        "name": "listId",
        "schema": "integer",
        "required": true,
        "description": "List ID",
        "example": 0
      },
      {
        "name": "cursor",
        "schema": "string",
        "description": "Cursor for the next or previous page"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Number of items to include in the page",
        "default": 100
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "FieldMetadataPaged model"
      },
      {
        "statusCode": "400",
        "description": "ValidationErrors model"
      },
      {
        "statusCode": "404",
        "description": "NotFoundErrors model"
      }
    ]
  },
  {
    "url": "/v2/lists/{listId}/saved-views",
    "method": "listSavedViewsMetadata",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "lists",
    "typeScriptTag": "lists",
    "description": "Get metadata on Saved Views",
    "parameters": [
      {
        "name": "listId",
        "schema": "integer",
        "required": true,
        "description": "List ID",
        "example": 0
      },
      {
        "name": "cursor",
        "schema": "string",
        "description": "Cursor for the next or previous page"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Number of items to include in the page",
        "default": 100
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "SavedViewPaged model"
      },
      {
        "statusCode": "400",
        "description": "ValidationErrors model"
      },
      {
        "statusCode": "404",
        "description": "NotFoundErrors model"
      }
    ]
  },
  {
    "url": "/v2/lists/{listId}/saved-views/{viewId}/list-entries",
    "method": "getSavedViewListEntries",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "lists",
    "typeScriptTag": "lists",
    "description": "Get all List Entries on a Saved View",
    "parameters": [
      {
        "name": "listId",
        "schema": "integer",
        "required": true,
        "description": "List ID",
        "example": 0
      },
      {
        "name": "viewId",
        "schema": "integer",
        "required": true,
        "description": "Saved view ID",
        "example": 0
      },
      {
        "name": "cursor",
        "schema": "string",
        "description": "Cursor for the next or previous page"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Number of items to include in the page",
        "default": 100
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "ListEntryWithEntityPaged model"
      },
      {
        "statusCode": "400",
        "description": "ValidationErrors model"
      },
      {
        "statusCode": "404",
        "description": "NotFoundErrors model"
      }
    ]
  },
  {
    "url": "/v2/lists/{listId}/saved-views/{viewId}",
    "method": "getSavedViewMetadata",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "lists",
    "typeScriptTag": "lists",
    "description": "Get metadata on a single Saved View",
    "parameters": [
      {
        "name": "listId",
        "schema": "integer",
        "required": true,
        "description": "List ID",
        "example": 0
      },
      {
        "name": "viewId",
        "schema": "integer",
        "required": true,
        "description": "Saved view ID",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "SavedView model"
      },
      {
        "statusCode": "400",
        "description": "ValidationErrors model"
      },
      {
        "statusCode": "404",
        "description": "NotFoundErrors model"
      }
    ]
  },
  {
    "url": "/v2/opportunities",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "opportunities",
    "typeScriptTag": "opportunities",
    "description": "Get all Opportunities",
    "parameters": [
      {
        "name": "cursor",
        "schema": "string",
        "description": "Cursor for the next or previous page"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Number of items to include in the page",
        "default": 100
      },
      {
        "name": "ids",
        "schema": "array",
        "description": "Opportunity IDs"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OpportunityPaged model"
      },
      {
        "statusCode": "400",
        "description": "ValidationErrors model"
      }
    ]
  },
  {
    "url": "/v2/opportunities/{id}",
    "method": "getBasicInfo",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "opportunities",
    "typeScriptTag": "opportunities",
    "description": "Get a single Opportunity",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "Opportunity ID",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Opportunity model"
      },
      {
        "statusCode": "400",
        "description": "ValidationErrors model"
      },
      {
        "statusCode": "404",
        "description": "NotFoundErrors model"
      }
    ]
  },
  {
    "url": "/v2/persons",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "persons",
    "typeScriptTag": "persons",
    "description": "Get all Persons",
    "parameters": [
      {
        "name": "cursor",
        "schema": "string",
        "description": "Cursor for the next or previous page"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Number of items to include in the page",
        "default": 100
      },
      {
        "name": "ids",
        "schema": "array",
        "description": "People IDs"
      },
      {
        "name": "fieldIds",
        "schema": "array",
        "description": "Field IDs for which to return field data"
      },
      {
        "name": "fieldTypes",
        "schema": "array",
        "description": "Field Types for which to return field data"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "PersonPaged model"
      },
      {
        "statusCode": "400",
        "description": "ValidationErrors model"
      }
    ]
  },
  {
    "url": "/v2/persons/fields",
    "method": "getMetadata",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "persons",
    "typeScriptTag": "persons",
    "description": "Get metadata on Person Fields",
    "parameters": [
      {
        "name": "cursor",
        "schema": "string",
        "description": "Cursor for the next or previous page"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Number of items to include in the page",
        "default": 100
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "FieldMetadataPaged model"
      },
      {
        "statusCode": "400",
        "description": "ValidationErrors model"
      }
    ]
  },
  {
    "url": "/v2/persons/{id}",
    "method": "getPersonFieldData",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "persons",
    "typeScriptTag": "persons",
    "description": "Get a single Person",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "Person ID",
        "example": 0
      },
      {
        "name": "fieldIds",
        "schema": "array",
        "description": "Field IDs for which to return field data"
      },
      {
        "name": "fieldTypes",
        "schema": "array",
        "description": "Field Types for which to return field data"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Person model"
      },
      {
        "statusCode": "400",
        "description": "ValidationErrors model"
      },
      {
        "statusCode": "404",
        "description": "NotFoundErrors model"
      }
    ]
  },
  {
    "url": "/v2/persons/{id}/lists",
    "method": "getListsMetadata",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "persons",
    "typeScriptTag": "persons",
    "description": "Get a Person's Lists",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "Persons ID",
        "example": 0
      },
      {
        "name": "cursor",
        "schema": "string",
        "description": "Cursor for the next or previous page"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Number of items to include in the page",
        "default": 100
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "ListPaged model"
      },
      {
        "statusCode": "400",
        "description": "ValidationErrors model"
      },
      {
        "statusCode": "404",
        "description": "NotFoundErrors model"
      }
    ]
  },
  {
    "url": "/v2/persons/{id}/list-entries",
    "method": "paginateEntries",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "persons",
    "typeScriptTag": "persons",
    "description": "Get a Person's List Entries",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "Persons ID",
        "example": 0
      },
      {
        "name": "cursor",
        "schema": "string",
        "description": "Cursor for the next or previous page"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Number of items to include in the page",
        "default": 100
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "ListEntryPaged model"
      },
      {
        "statusCode": "400",
        "description": "ValidationErrors model"
      }
    ]
  }
]
    }
      language="TypeScript"
      apiTitle="Affinity API v2"
      apiBaseUrl="//api.affinity.co"
      apiVersion="2.0.0"
      endpoints={20}
      sdkMethods={20}
      schemas={77}
      parameters={56}
      difficulty="Easy"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/affinity/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/affinity/openapi.yaml"
      developerDocumentation="developer.affinity.co/"
    />
  );
}
  