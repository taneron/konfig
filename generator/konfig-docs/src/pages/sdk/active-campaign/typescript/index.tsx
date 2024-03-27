import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function ActiveCampaignTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="active-campaign-typescript-sdk"
      metaDescription={`We help small teams power big businesses with the must-have platform for intelligent marketing automation. 🚀

Customers from over 170 countries depend on our mix of pre-built automations and integrations (including Facebook, Google, WordPress, Salesforce, Shopify, and Square) to power personalized marketing, transactional emails, and one-to-one CRM interactions throughout the customer lifecycle.`}
      company="ActiveCampaign"
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/activecampaign/logo.png"
      companyKebabCase="active-campaign"
      clientNameCamelCase="activeCampaign"
      homepage="activecampaign.com"
      lastUpdated={new Date("2024-03-27T18:19:15.740Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/activecampaign/favicon.png"
      // Missing contactUrl
      // Missing contactEmail
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/activecampaign/imagePreview.png"
      GettingStarted={GettingStarted}
      FirstRequest={FirstRequest}
      categories={["automation","marketing","crm","email_marketing","marketing_automation"]}
      methods={[
  {
    "url": "/accounts",
    "method": "allAccounts",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "List",
    "typeScriptTag": "list",
    "description": "List all accounts",
    "parameters": [
      {
        "name": "search",
        "schema": "string",
        "description": "Search by name"
      },
      {
        "name": "countDeals",
        "schema": "boolean",
        "description": "Whether to compute the contactCount and dealCount counts for the number of contacts/deals associated with each account. Set it to true to include the right counts. If set to false or omitted from the call, then contactCount and dealCount will not be counted and be simply displayed as 0."
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
    "url": "/accounts",
    "method": "createNewAccount",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Account",
    "typeScriptTag": "account",
    "description": "Create an account",
    "parameters": [
      {
        "name": "account",
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
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/accounts/{id}",
    "method": "deleteById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Account",
    "typeScriptTag": "account",
    "description": "Delete an account",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "Account's id",
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
    "url": "/accounts/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Account",
    "typeScriptTag": "account",
    "description": "Retrieve an account",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "Account's ID",
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
    "url": "/accounts/{id}",
    "method": "updateExisting",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Account",
    "typeScriptTag": "account",
    "description": "Update an account",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "Account's id",
        "example": 0
      },
      {
        "name": "account",
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
      }
    ]
  },
  {
    "url": "/accounts/{id}/notes",
    "method": "createAccountNote",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Note",
    "typeScriptTag": "note",
    "description": "Create an account note",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Account's id to assign new note to",
        "example": "ID"
      },
      {
        "name": "note",
        "schema": "object",
        "description": ""
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
    "url": "/accounts/{id}/notes/{noteid}",
    "method": "updateNote",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Note",
    "typeScriptTag": "note",
    "description": "Update an account note",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Account's id to assign new note to",
        "example": "ID"
      },
      {
        "name": "noteid",
        "schema": "string",
        "required": true,
        "description": "Account note's id to update",
        "example": "NOTEID"
      },
      {
        "name": "note",
        "schema": "object",
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
    "url": "/accounts/bulk_delete",
    "method": "bulkDelete",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Account",
    "typeScriptTag": "account",
    "description": "Bulk delete accounts",
    "parameters": [
      {
        "name": "[]ids",
        "schema": "integer",
        "description": "An integer id of the account to be deleted"
      },
      {
        "name": "[]ids",
        "schema": "integer",
        "description": "An integer id of the account to be deleted"
      },
      {
        "name": "[]ids",
        "schema": "integer",
        "description": "An integer id of the account to be deleted"
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
    "url": "/accountContacts",
    "method": "accountAssociations",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "List",
    "typeScriptTag": "list",
    "description": "List all associations",
    "parameters": [
      {
        "name": "filters[contact]",
        "schema": "integer",
        "description": "Filter by Contact ID"
      },
      {
        "name": "filters[account]",
        "schema": "integer",
        "description": "Filter by Account ID"
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
    "url": "/accountContacts",
    "method": "createAssociation",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Account",
    "typeScriptTag": "account",
    "description": "Create an association",
    "parameters": [
      {
        "name": "accountContact",
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
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/accountContacts/{id}",
    "method": "deleteAssociation",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Account",
    "typeScriptTag": "account",
    "description": "Delete an association",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "Association's ID",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/accountContacts/{id}",
    "method": "getAssociation",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Account",
    "typeScriptTag": "account",
    "description": "Retrieve an association",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "Association's ID",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/accountContacts/{id}",
    "method": "updateAssociation",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Account",
    "typeScriptTag": "account",
    "description": "Update an association",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "Association's ID",
        "example": 0
      },
      {
        "name": "accountContact",
        "schema": "object",
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
    "url": "/accountCustomFieldMeta",
    "method": "allCustomFieldMeta",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "List",
    "typeScriptTag": "list",
    "description": "List all custom fields",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "description": "The number of fields returned per request.",
        "default": 100
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
    "url": "/accountCustomFieldMeta",
    "method": "createCustomFieldMeta",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Field",
    "typeScriptTag": "field",
    "description": "Create a custom field",
    "parameters": [
      {
        "name": "accountCustomFieldMetum",
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
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/accountCustomFieldMeta/{id}",
    "method": "deleteCustomFieldMeta",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Field",
    "typeScriptTag": "field",
    "description": "Delete a custom field",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "ID of the field to delete",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/accountCustomFieldMeta/{id}",
    "method": "getCustomField",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Field",
    "typeScriptTag": "field",
    "description": "Retrieve a custom field",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "ID of the field to retrieve",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/accountCustomFieldMeta/{id}",
    "method": "updateCustomFieldMeta",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Field",
    "typeScriptTag": "field",
    "description": "Update a custom field",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "ID of the custom field to update",
        "example": 0
      },
      {
        "name": "accountCustomFieldMetum",
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/accountCustomFieldData",
    "method": "customFieldValues",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "List",
    "typeScriptTag": "list",
    "description": "List all custom field values",
    "parameters": [
      {
        "name": "filters[customerAccountId]",
        "schema": "string",
        "description": "Filter results by a specific account (note that Id uses a capital I)"
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
    "url": "/accountCustomFieldData",
    "method": "createCustomFieldValue",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Field",
    "typeScriptTag": "field",
    "description": "Create a custom field value",
    "parameters": [
      {
        "name": "accountCustomFieldDatum",
        "schema": "object",
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
    "url": "/accountCustomFieldData/bulkCreate",
    "method": "bulkCreateCustomAccountFieldValue",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Field",
    "typeScriptTag": "field",
    "description": "Bulk create a custom account field value",
    "parameters": [
      {
        "name": "array",
        "schema": "object",
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
    "url": "/accountCustomFieldData/{id}",
    "method": "deleteCustomFieldValue",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Field",
    "typeScriptTag": "field",
    "description": "Delete a custom field value",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "ID of the dealCustomFieldData to retrieve",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/accountCustomFieldData/{id}",
    "method": "getCustomValue",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Field",
    "typeScriptTag": "field",
    "description": "Retrieve a custom field value",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "ID of the dealCustomFieldData to retrieve",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/accountCustomFieldData/{id}",
    "method": "updateCustomFieldValue",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Field",
    "typeScriptTag": "field",
    "description": "Update a custom field value",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "ID of the custom fields value to update",
        "example": 0
      },
      {
        "name": "accountCustomFieldDatum",
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/accountCustomFieldData/bulkUpdate",
    "method": "bulkUpdateCustomFieldValue",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Field",
    "typeScriptTag": "field",
    "description": "Bulk update a custom field value",
    "parameters": [
      {
        "name": "array",
        "schema": "object",
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
    "url": "/addresses",
    "method": "addresses",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "List",
    "typeScriptTag": "list",
    "description": "List all addresses",
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
    "url": "/addresses",
    "method": "createNewAddress",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Address",
    "typeScriptTag": "address",
    "description": "Create an address",
    "parameters": [
      {
        "name": "address",
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
      }
    ]
  },
  {
    "url": "/addresses/{id}",
    "method": "deleteAddress",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Address",
    "typeScriptTag": "address",
    "description": "Delete an address",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "ID of the Address to delete",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/addresses/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Address",
    "typeScriptTag": "address",
    "description": "Retrieve an address",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "ID of the Address to retrieve",
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
    "url": "/addresses/{id}",
    "method": "updateAddress",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Address",
    "typeScriptTag": "address",
    "description": "Update an address",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "ID of the Address being changed",
        "example": 0
      },
      {
        "name": "address",
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/addressGroups/{id}",
    "method": "deleteAddressGroup",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "User",
    "typeScriptTag": "user",
    "description": "Delete address associated with a specific user group",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "ID of the AddressGroup to delete",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/addressLists/{id}",
    "method": "deleteAssociatedAddress",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "List",
    "typeScriptTag": "list",
    "description": "Delete address associated with a specific list",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "ID of the AddressList to delete",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/automations",
    "method": "allAutomations",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "List",
    "typeScriptTag": "list",
    "description": "List all automations",
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
    "url": "/brandings/{id}",
    "method": "getBranding",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Branding",
    "typeScriptTag": "branding",
    "description": "Retrieve a branding",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0,
        "default": null
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
    "url": "/brandings/{id}",
    "method": "updateExistingResource",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Branding",
    "typeScriptTag": "branding",
    "description": "Update a branding",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "Branding ID",
        "example": 0,
        "default": 1
      },
      {
        "name": "branding",
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
      }
    ]
  },
  {
    "url": "/brandings",
    "method": "brandings",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "List",
    "typeScriptTag": "list",
    "description": "List all brandings",
    "parameters": [
      {
        "name": "apiKey",
        "schema": "string",
        "description": "ActiveCampaign API key"
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
    "url": "/calendars",
    "method": "calendarFeeds",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "List",
    "typeScriptTag": "list",
    "description": "List all calendar feeds",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/calendars",
    "method": "createFeed",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Calendar",
    "typeScriptTag": "calendar",
    "description": "Create a calendar feed",
    "parameters": [
      {
        "name": "calendar",
        "schema": "object",
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
    "url": "/calendars/{id}",
    "method": "deleteFeed",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Calendar",
    "typeScriptTag": "calendar",
    "description": "Delete a calendar feed",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "ID of the calendar feed to delete",
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
    "url": "/calendars/{id}",
    "method": "getFeed",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Calendar",
    "typeScriptTag": "calendar",
    "description": "Retrieve a calendar feed",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "ID of the calendar feed to retrieve",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/calendars/{id}",
    "method": "updateFeed",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Calendar",
    "typeScriptTag": "calendar",
    "description": "Update a calendar feed",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "ID of the calendar feed to update",
        "example": 0
      },
      {
        "name": "calendar",
        "schema": "object",
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
    "url": "/template/share",
    "method": "createShareableLink",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Template",
    "typeScriptTag": "template",
    "description": "Create Shareable Campaign Template Link",
    "parameters": [
      {
        "name": "apiKey",
        "schema": "string",
        "description": "ActiveCampaign Account API Key"
      },
      {
        "name": "id",
        "schema": "integer",
        "description": "The id of the campaign template to be shared"
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
    "url": "/campaigns",
    "method": "allCampaigns",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "List",
    "typeScriptTag": "list",
    "description": "List all campaigns",
    "parameters": [
      {
        "name": "orders[sdate]",
        "schema": "string",
        "description": "Order campaigns by send date",
        "default": "ASC"
      },
      {
        "name": "orders[ldate]",
        "schema": "string",
        "description": "Order campaigns by last send date"
      },
      {
        "name": "filters[seriesid]",
        "schema": "integer",
        "description": "Filter to return the campaigns from the targeted automationId/seriesIds"
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
    "url": "/campaigns/{id}/links",
    "method": "getLinks",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Campaign",
    "typeScriptTag": "campaign",
    "description": "Retrieve links associated to campaign",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "ID of campaign to retrieve Links for",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/campaigns/{id}",
    "method": "getCampaignById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Campaign",
    "typeScriptTag": "campaign",
    "description": "Retrieve a campaign",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "ID of campaign to retrieve",
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
    "url": "/messages",
    "method": "messages",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "List",
    "typeScriptTag": "list",
    "description": "List all messages",
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
    "url": "/messages",
    "method": "createNewMessage",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Message",
    "typeScriptTag": "message",
    "description": "Create a message",
    "parameters": [
      {
        "name": "message",
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
      }
    ]
  },
  {
    "url": "/messages/{id}",
    "method": "removeById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Message",
    "typeScriptTag": "message",
    "description": "Delete a message",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "ID of the message to delete",
        "example": "ID"
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
    "url": "/messages/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Message",
    "typeScriptTag": "message",
    "description": "Retrieve a message",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "ID of the message to retrieve",
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
        "description": ""
      }
    ]
  },
  {
    "url": "/messages/{id}",
    "method": "updateById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Message",
    "typeScriptTag": "message",
    "description": "Update a message",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "ID of the message to update",
        "example": "ID"
      },
      {
        "name": "messageFromname",
        "schema": "string",
        "description": "Name of sender"
      },
      {
        "name": "messageEmail",
        "schema": "string",
        "description": "Email of sender"
      },
      {
        "name": "messageReply2",
        "schema": "string",
        "description": "Reply email for the recipient to reply to"
      },
      {
        "name": "messageSubject",
        "schema": "string",
        "description": "Subject of message"
      },
      {
        "name": "messagePreheaderText",
        "schema": "string",
        "description": "Preheader Text"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/contacts",
    "method": "contacts",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "List",
    "typeScriptTag": "list",
    "description": "List, search, and filter contacts",
    "parameters": [
      {
        "name": "ids",
        "schema": "string",
        "description": "Filter contacts by ID. Can be repeated for multiple IDs. Example: ids[]=1&ids[]=2&ids[]=42"
      },
      {
        "name": "email",
        "schema": "string",
        "description": "Email address of the contact you want to get"
      },
      {
        "name": "emailLike",
        "schema": "string",
        "description": "Filter contacts that contain the given value in the email address"
      },
      {
        "name": "exclude",
        "schema": "integer",
        "description": "Exclude from the response the contact with the given ID"
      },
      {
        "name": "formid",
        "schema": "integer",
        "description": "Filter contacts associated with the given form"
      },
      {
        "name": "idGreater",
        "schema": "integer",
        "description": "Only include contacts with an ID greater than the given ID"
      },
      {
        "name": "idLess",
        "schema": "integer",
        "description": "Only include contacts with an ID less than the given ID"
      },
      {
        "name": "listid",
        "schema": "string",
        "description": "Filter contacts associated with the given list"
      },
      {
        "name": "organization",
        "schema": "integer",
        "description": "(Deprecated) Please use Account-Contact end points. Filter contacts associated with the given organization ID"
      },
      {
        "name": "search",
        "schema": "string",
        "description": "Filter contacts that match the given value in the contact names, organization, phone or email",
        "default": "null"
      },
      {
        "name": "segmentid",
        "schema": "integer",
        "description": "Return only contacts that match a list segment (the first call kicks off an asynchronous query. When the query is complete, subsequent API calls will return contacts that match the segment - timeout 1hr)",
        "default": null
      },
      {
        "name": "seriesid",
        "schema": "integer",
        "description": "Filter contacts associated with the given automation"
      },
      {
        "name": "status",
        "schema": "integer",
        "description": "See [available values](https://developers.activecampaign.com/reference/contact)",
        "default": -1
      },
      {
        "name": "tagid",
        "schema": "integer",
        "description": "Filter contacts associated with the given tag"
      },
      {
        "name": "filters[createdBefore]",
        "schema": "string",
        "description": "Filter contacts that were created prior to this date"
      },
      {
        "name": "filters[createdAfter]",
        "schema": "string",
        "description": "Filter contacts that were created after this date"
      },
      {
        "name": "filters[updatedBefore]",
        "schema": "string",
        "description": "Filter contacts that were updated before this date"
      },
      {
        "name": "filters[updatedAfter]",
        "schema": "string",
        "description": "Filter contacts that were updated after this date"
      },
      {
        "name": "waitid",
        "schema": "integer",
        "description": "Filter by contacts in the wait queue of an automation block"
      },
      {
        "name": "orders[id]",
        "schema": "string",
        "description": "Order contacts by unique ID",
        "default": "ASC"
      },
      {
        "name": "orders[cdate]",
        "schema": "string",
        "description": "Order contacts by creation date"
      },
      {
        "name": "orders[email]",
        "schema": "string",
        "description": "Order contacts by email",
        "default": "ASC"
      },
      {
        "name": "orders[firstName]",
        "schema": "string",
        "description": "Order contacts by first name"
      },
      {
        "name": "orders[lastName]",
        "schema": "string",
        "description": "Order contacts by last name"
      },
      {
        "name": "orders[name]",
        "schema": "string",
        "description": "Order contacts by full name"
      },
      {
        "name": "orders[score]",
        "schema": "string",
        "description": "Order contacts by score"
      },
      {
        "name": "inGroupLists",
        "schema": "string",
        "description": "Set this to \"true\" in order to return only contacts that the current user has permissions to see."
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
    "url": "/contacts",
    "method": "createNewContact",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Contact",
    "typeScriptTag": "contact",
    "description": "Create a contact",
    "parameters": [
      {
        "name": "contact",
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
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/contact/sync",
    "method": "syncData",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Contact",
    "typeScriptTag": "contact",
    "description": "Sync a contact's data",
    "parameters": [
      {
        "name": "contact",
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
      }
    ]
  },
  {
    "url": "/contacts/{id}",
    "method": "deleteById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Contact",
    "typeScriptTag": "contact",
    "description": "Delete a contact",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The contact id",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/contacts/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Contact",
    "typeScriptTag": "contact",
    "description": "Retrieve a contact",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "ID of the contact",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/contacts/{id}",
    "method": "updateContact",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Contact",
    "typeScriptTag": "contact",
    "description": "Update a contact",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "ID of the contact to update",
        "example": 0
      },
      {
        "name": "contact",
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/contactLists",
    "method": "updateListStatusForContact",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "List",
    "typeScriptTag": "list",
    "description": "Update list status for a contact",
    "parameters": [
      {
        "name": "contactList",
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
      }
    ]
  },
  {
    "url": "/contacts/{id}/contactAutomations",
    "method": "contactAutomations",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "List",
    "typeScriptTag": "list",
    "description": "List all automations the contact is in",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "ID of the contact to receive automations for",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/contacts/{id}/scoreValues",
    "method": "getScoreValues",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Contact",
    "typeScriptTag": "contact",
    "description": "Retrieve a contact's score value",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "id of the Contact",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/import/bulk_import",
    "method": "bulkImportStatus",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "List",
    "typeScriptTag": "list",
    "description": "Bulk import status list",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/import/bulk_import",
    "method": "bulkImportContacts",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Contact",
    "typeScriptTag": "contact",
    "description": "Bulk import contacts",
    "parameters": [
      {
        "name": "contacts",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "callback",
        "schema": "object",
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
    "url": "/import/info",
    "method": "statusInfo",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Import",
    "typeScriptTag": "import",
    "description": "Bulk import status info",
    "parameters": [
      {
        "name": "batchId",
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
    "url": "/activities",
    "method": "contactActivities",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "List",
    "typeScriptTag": "list",
    "description": "List all contact activities",
    "parameters": [
      {
        "name": "contact",
        "schema": "integer",
        "description": "Required Contact ID"
      },
      {
        "name": "after",
        "schema": "string",
        "description": "Filter for activities after a specific DateTime"
      },
      {
        "name": "include",
        "schema": "string",
        "description": "Activities to include: notes, notes.user, recipients, recipients.recipient, reference, reference.automation, reference.campaign, reference.campaign.campaignList, reference.campaign.campaignMessage, reference.campaignMessage, reference.contact, reference.contactList, reference.contactList.list, reference.deal, reference.deal.contact, reference.dealTasktype, reference.link, reference.list, reference.log, reference.log.campaign, reference.log.contact, reference.log.message, reference.message, reference.note, reference.sms, reference.sms.automation, user",
        "default": "activities to include"
      },
      {
        "name": "emails",
        "schema": "boolean",
        "description": "",
        "default": false
      },
      {
        "name": "orders[tstamp]",
        "schema": "string",
        "description": "Order activities by tstamp"
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
    "url": "/contacts/{id}/bounceLogs",
    "method": "getBounceLogs",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Contact",
    "typeScriptTag": "contact",
    "description": "Retrieve a contact's bounce logs",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "ID of the contact",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/contacts/{id}/contactData",
    "method": "getData",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Contact",
    "typeScriptTag": "contact",
    "description": "Retrieve a contact's data",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "ID of the contact",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/contacts/{id}/contactGoals",
    "method": "getGoals",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Contact",
    "typeScriptTag": "contact",
    "description": "Retrieve a contact's goals",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "ID of the contact",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/contacts/{id}/contactLists",
    "method": "getContactListMemberships",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "List",
    "typeScriptTag": "list",
    "description": "Retrieve a contact's list memberships",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "ID of the contact",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/contacts/{id}/contactLogs",
    "method": "getLogs",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Contact",
    "typeScriptTag": "contact",
    "description": "Retrieve a contact's logs",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "ID of the contact",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/contacts/{id}/contactDeals",
    "method": "getContactDeals",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Deal",
    "typeScriptTag": "deal",
    "description": "Retrieve a list of contact's deals",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "ID of the contact",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/contacts/{id}/deals",
    "method": "getContactDeals",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Deal",
    "typeScriptTag": "deal",
    "description": "Retrieve a contact's deals",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "ID of the contact",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/contacts/{id}/fieldValues",
    "method": "getValues",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Field",
    "typeScriptTag": "field",
    "description": "Retrieve a contact's field values",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "ID of the contact",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/contacts/{id}/geoIps",
    "method": "contactGeoIps",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "List",
    "typeScriptTag": "list",
    "description": "Retrieve a contacts list of geo-ips",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "ID of the contact",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/geoIps/{geoAddressID}/geoAddress",
    "method": "getGeoIpAddress",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Contact",
    "typeScriptTag": "contact",
    "description": "Retrieve a contacts geo IP address",
    "parameters": [
      {
        "name": "geoAddressId",
        "schema": "integer",
        "required": true,
        "description": "ID of the contact",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/contacts/{id}/notes",
    "method": "getContactsNotes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Note",
    "typeScriptTag": "note",
    "description": "Retrieve a contacts notes",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "ID of the contact",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/notes",
    "method": "listAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Note",
    "typeScriptTag": "note",
    "description": "Retrieve list of all notes",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/notes",
    "method": "createNew",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Note",
    "typeScriptTag": "note",
    "description": "Create a note",
    "parameters": [
      {
        "name": "note",
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
      }
    ]
  },
  {
    "url": "/contacts/{id}/organization",
    "method": "getOrganization",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Contact",
    "typeScriptTag": "contact",
    "description": "Retrieve a contacts organization",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "ID of the contact",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/contacts/{id}/plusAppend",
    "method": "getPlusAppend",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Contact",
    "typeScriptTag": "contact",
    "description": "Retrieve a contacts plus append",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "ID of the contact",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/contacts/{id}/trackingLogs",
    "method": "getTrackingLogs",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Contact",
    "typeScriptTag": "contact",
    "description": "Retrieve a contacts tracking logs",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "ID of the contact",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/contacts/{id}/accountContacts",
    "method": "getAccountContacts",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Account",
    "typeScriptTag": "account",
    "description": "Retrieve a contacts account contacts",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "ID of the contact",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/contacts/{id}/automationEntryCounts",
    "method": "getAutomationEntryCounts",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Contact",
    "typeScriptTag": "contact",
    "description": "Retrieve a contacts automation entry counts",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "ID of the contact",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/contactAutomations",
    "method": "contactAutomations",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "List",
    "typeScriptTag": "list",
    "description": "List all automations a contact is in",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/contactAutomations",
    "method": "addToAutomation",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Contact",
    "typeScriptTag": "contact",
    "description": "Add a contact to an automation",
    "parameters": [
      {
        "name": "contactAutomation",
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
        "statusCode": "403",
        "description": ""
      }
    ]
  },
  {
    "url": "/contactAutomations/{id}",
    "method": "removeFromAutomation",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Contact",
    "typeScriptTag": "contact",
    "description": "Remove a contact from an automation",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "ID of the contactAutomation to delete",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      }
    ]
  },
  {
    "url": "/contactAutomations/{id}",
    "method": "getInAutomation",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Contact",
    "typeScriptTag": "contact",
    "description": "Retrieve an automation a contact is in",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "ID of the contactAutomation to retrieve",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/fields",
    "method": "listAllCustom",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Field",
    "typeScriptTag": "field",
    "description": "List all custom fields",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "description": "The number of fields returned per request.",
        "default": 100
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
    "url": "/fields",
    "method": "createCustomField",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Field",
    "typeScriptTag": "field",
    "description": "Create a custom field",
    "parameters": [
      {
        "name": "field",
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
    "url": "/groupMembers",
    "method": "addGroupMember",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Field",
    "typeScriptTag": "field",
    "description": "Add Custom Field to Field Group",
    "parameters": [
      {
        "name": "rel_id",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "ordernum",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "group_id",
        "schema": "integer",
        "description": "",
        "default": null
      }
    ],
    "responses": [
      {
        "statusCode": "200",
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
      }
    ]
  },
  {
    "url": "/groupMembers/{groupID}",
    "method": "deleteFieldGroup",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Field",
    "typeScriptTag": "field",
    "description": "Delete Custom Field Field Group",
    "parameters": [
      {
        "name": "groupId",
        "schema": "string",
        "required": true,
        "description": "Group ID",
        "example": "GROUPID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/fields/{id}",
    "method": "deleteCustomField",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Field",
    "typeScriptTag": "field",
    "description": "Delete a custom field",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "ID of the field option to delete",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/fields/{id}",
    "method": "getCustomField",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Field",
    "typeScriptTag": "field",
    "description": "Retrieve a custom field",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "ID of the field to retrieve",
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
    "url": "/fields/{id}",
    "method": "updateCustomField",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Field",
    "typeScriptTag": "field",
    "description": "Update a custom field",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "ID of the field to update",
        "example": 0
      },
      {
        "name": "field",
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
        "statusCode": "403",
        "description": ""
      }
    ]
  },
  {
    "url": "/groupMembers/{groupID} (COPY)",
    "method": "getFieldGroup",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Field",
    "typeScriptTag": "field",
    "description": "Get Custom Field to Field Group",
    "parameters": [
      {
        "name": "groupId",
        "schema": "string",
        "required": true,
        "description": "Group ID",
        "example": "GROUPID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/groupMembers/{groupId}",
    "method": "updateCustomFieldGroup",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Field",
    "typeScriptTag": "field",
    "description": "Update Custom Field Field Group",
    "parameters": [
      {
        "name": "groupId",
        "schema": "string",
        "required": true,
        "description": "Field group ID (see notes)",
        "example": "GROUPID"
      },
      {
        "name": "rel_id",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "ordernum",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "group_id",
        "schema": "integer",
        "description": "",
        "default": null
      }
    ],
    "responses": [
      {
        "statusCode": "200",
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
      }
    ]
  },
  {
    "url": "/fieldRels",
    "method": "createFieldRelationshipToLists",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "List",
    "typeScriptTag": "list",
    "description": "Create a custom field relationship to list(s)",
    "parameters": [
      {
        "name": "fieldRel",
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
        "statusCode": "403",
        "description": ""
      }
    ]
  },
  {
    "url": "/fieldOption/bulk",
    "method": "createCustomFieldOptions",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Field",
    "typeScriptTag": "field",
    "description": "Create custom field options",
    "parameters": [
      {
        "name": "field",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "label",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "value",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "VALUE"
      },
      {
        "name": "orderid",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "isdefault",
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
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/fieldRels/{fieldRelId}",
    "method": "deleteFieldRelationToList",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "List",
    "typeScriptTag": "list",
    "description": "Delete a custom field relationship to list(s)",
    "parameters": [
      {
        "name": "fieldRelId",
        "schema": "integer",
        "required": true,
        "description": "Field relationship ID to be deleted",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      }
    ]
  },
  {
    "url": "/fieldValues",
    "method": "customFieldValues",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "List",
    "typeScriptTag": "list",
    "description": "List all custom field values",
    "parameters": [
      {
        "name": "filters[fieldid]",
        "schema": "string",
        "description": "ID of the field the value belongs to."
      },
      {
        "name": "filters[val]",
        "schema": "string",
        "description": "Value of the custom field for a specific contact"
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
    "url": "/fieldValues",
    "method": "createCustomValue",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Field",
    "typeScriptTag": "field",
    "description": "Create a custom field value",
    "parameters": [
      {
        "name": "fieldValue",
        "schema": "object",
        "description": ""
      },
      {
        "name": "useDefaults",
        "schema": "boolean",
        "description": "",
        "default": false
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      }
    ]
  },
  {
    "url": "/fieldValues/{id}",
    "method": "deleteCustomValue",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Field",
    "typeScriptTag": "field",
    "description": "Delete a custom field value",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "ID of the fieldValue to delete",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      }
    ]
  },
  {
    "url": "/fieldValues/{id}",
    "method": "getCustomValue",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Field",
    "typeScriptTag": "field",
    "description": "Retrieve a custom field value",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "ID of the fieldValue to retrieve",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      }
    ]
  },
  {
    "url": "/fieldValues/{id}",
    "method": "updateCustomValue",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Field",
    "typeScriptTag": "field",
    "description": "Update a custom field value for contact",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "ID of the fieldValue to update",
        "example": "ID"
      },
      {
        "name": "fieldValue",
        "schema": "object",
        "description": ""
      },
      {
        "name": "useDefaults",
        "schema": "boolean",
        "description": "",
        "default": false
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
    "url": "/emailActivities",
    "method": "emailActivities",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "List",
    "typeScriptTag": "list",
    "description": "List all email activities",
    "parameters": [
      {
        "name": "filters[subscriberid]",
        "schema": "integer",
        "description": "Set this parameter to return only email activities belonging to a given subscriber."
      },
      {
        "name": "filters[dealId]",
        "schema": "integer",
        "description": "Set this parameter to return only email activities belonging to a given deal."
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
    "url": "/contactTags",
    "method": "addContactTag",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Tag",
    "typeScriptTag": "tag",
    "description": "Add a tag to contact",
    "parameters": [
      {
        "name": "contactTag",
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
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/contactTags/{id}",
    "method": "removeTagFromContact",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Tag",
    "typeScriptTag": "tag",
    "description": "Remove a tag from a contact",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The contactTag id",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/customObjects/schemas",
    "method": "allSchemas",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "List",
    "typeScriptTag": "list",
    "description": "List all schemas",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "description": "The number of schemas to retrieve for each API call. Maximum value is 100.",
        "default": 20
      },
      {
        "name": "offset",
        "schema": "integer",
        "description": "Offset index of items to return",
        "default": 0
      },
      {
        "name": "orders",
        "schema": "array",
        "description": "Array of sorting criteria to fetch items"
      },
      {
        "name": "filters",
        "schema": "string",
        "description": "Filters schemas by different criteria"
      },
      {
        "name": "showFields",
        "schema": "string",
        "description": "Toggle which fields are shown in the response body of a schema (if there hidden due to e.g. recently being deleted). Omit this parameter entirely to hide fields by default.",
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
    "url": "/customObjects/schemas",
    "method": "createNew",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Schema",
    "typeScriptTag": "schema",
    "description": "Create a schema",
    "parameters": [
      {
        "name": "schema",
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
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/customObjects/schemas/{id}",
    "method": "deleteSchemaById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Schema",
    "typeScriptTag": "schema",
    "description": "Delete a schema",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Id of schema to delete",
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
        "description": ""
      }
    ]
  },
  {
    "url": "/customObjects/schemas/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Schema",
    "typeScriptTag": "schema",
    "description": "Retrieve a schema",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Id of the Schema",
        "example": "ID"
      },
      {
        "name": "showFields",
        "schema": "string",
        "description": "Toggle which fields are shown in the response body of a schema (if there hidden due to e.g. recently being deleted). Omit this parameter entirely to hide fields by default.",
        "default": "all"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/customObjects/schemas/{schemaId}",
    "method": "updateSchema",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Schema",
    "typeScriptTag": "schema",
    "description": "Update a schema",
    "parameters": [
      {
        "name": "schemaId",
        "schema": "string",
        "required": true,
        "description": "Id of Schema being updated",
        "example": "SCHEMAID"
      },
      {
        "name": "validateOnly",
        "schema": "boolean",
        "description": "When set to `true` the API will validate the schema update without saving changes",
        "default": false
      },
      {
        "name": "showFields",
        "schema": "string",
        "description": "Toggle which fields are shown in the response body of a schema (if there hidden due to e.g. recently being deleted). Omit this parameter entirely to hide fields by default.",
        "default": "all"
      },
      {
        "name": "schema",
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
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/customObjects/schemas/{schemaId}/fields/{fieldId}",
    "method": "deleteField",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Field",
    "typeScriptTag": "field",
    "description": "Delete a field",
    "parameters": [
      {
        "name": "schemaId",
        "schema": "string",
        "required": true,
        "description": "Schema ID of the field to be deleted",
        "example": "SCHEMAID"
      },
      {
        "name": "fieldId",
        "schema": "string",
        "required": true,
        "description": "Field ID of the field to be deleted",
        "example": "FIELDID"
      },
      {
        "name": "showFields",
        "schema": "string",
        "description": "Toggle which fields are shown in the response body of a schema (if there hidden due to e.g. recently being deleted). Omit this parameter entirely to hide fields by default.",
        "default": "all"
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": ""
      }
    ]
  },
  {
    "url": "/customObjects/schemas/public",
    "method": "createPublicSchema",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Schema",
    "typeScriptTag": "schema",
    "description": "Create a public schema",
    "parameters": [
      {
        "name": "schema",
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
      }
    ]
  },
  {
    "url": "/customObjects/schemas/{id}/child",
    "method": "createChildSchema",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Schema",
    "typeScriptTag": "schema",
    "description": "Create a child schema",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Id of the parent schema the new child schema will extend",
        "example": "ID"
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
    "url": "/customObjects/records/{schemaId}",
    "method": "bySchemaRecords",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "List",
    "typeScriptTag": "list",
    "description": "List records by schema",
    "parameters": [
      {
        "name": "schemaId",
        "schema": "string",
        "required": true,
        "description": "ID of schema",
        "example": "SCHEMAID"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The number of records to return for each call. Maximum value is 100.",
        "default": 20
      },
      {
        "name": "offset",
        "schema": "integer",
        "description": "Offset index of records to return",
        "default": 0
      },
      {
        "name": "filters",
        "schema": "array",
        "description": "Use ?filters[relationships.{your-contact-relationship}][eq]={contactId} to filter records to a specific contact."
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
    "url": "/customObjects/records/{schemaId}",
    "method": "createOrUpdateRecord",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Schema",
    "typeScriptTag": "schema",
    "description": "Create or update record",
    "parameters": [
      {
        "name": "schemaId",
        "schema": "string",
        "required": true,
        "description": "ID of schema",
        "example": "SCHEMAID"
      },
      {
        "name": "record",
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
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/customObjects/records/{schemaId}/{recordId}",
    "method": "deleteRecordById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Schema",
    "typeScriptTag": "schema",
    "description": "Delete a record by id",
    "parameters": [
      {
        "name": "schemaId",
        "schema": "string",
        "required": true,
        "description": "ID of schema",
        "example": "SCHEMAID"
      },
      {
        "name": "recordId",
        "schema": "string",
        "required": true,
        "description": "ID of record",
        "example": "RECORDID"
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
      }
    ]
  },
  {
    "url": "/customObjects/records/{schemaId}/{recordId}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Schema",
    "typeScriptTag": "schema",
    "description": "Get a record by id",
    "parameters": [
      {
        "name": "schemaId",
        "schema": "string",
        "required": true,
        "description": "ID of schema",
        "example": "SCHEMAID"
      },
      {
        "name": "recordId",
        "schema": "string",
        "required": true,
        "description": "ID of record",
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
      }
    ]
  },
  {
    "url": "/records/{schemdId}/external/{externalId}",
    "method": "getByExternalId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Record",
    "typeScriptTag": "record",
    "description": "Get a record by external id",
    "parameters": [
      {
        "name": "schemdId",
        "schema": "string",
        "required": true,
        "description": "ID of schema",
        "example": "SCHEMDID"
      },
      {
        "name": "externalId",
        "schema": "string",
        "required": true,
        "description": "External ID for record",
        "example": "EXTERNALID"
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
    "url": "/customObjects/records/{schemaId}/external/{externalId}",
    "method": "deleteRecordByExternalId",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Schema",
    "typeScriptTag": "schema",
    "description": "Delete a record by external ID",
    "parameters": [
      {
        "name": "schemaId",
        "schema": "string",
        "required": true,
        "description": "ID of schema",
        "example": "SCHEMAID"
      },
      {
        "name": "externalId",
        "schema": "string",
        "required": true,
        "description": "External ID of record",
        "example": "EXTERNALID"
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
      }
    ]
  },
  {
    "url": "/deals",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Deal",
    "typeScriptTag": "deal",
    "description": "List all deals",
    "parameters": [
      {
        "name": "filters[search]",
        "schema": "string",
        "description": "Search text to use with `search_field` parameter."
      },
      {
        "name": "filters[searchField]",
        "schema": "string",
        "description": "Field to search for. See [available values](https://developers.activecampaign.com/reference/deal#deals-parameters-available-values)."
      },
      {
        "name": "filters[title]",
        "schema": "string",
        "description": "Filter by deal's title"
      },
      {
        "name": "filters[stage]",
        "schema": "integer",
        "description": "Filter by deal's stage"
      },
      {
        "name": "filters[group]",
        "schema": "integer",
        "description": "Filter by deal's pipeline"
      },
      {
        "name": "filters[status]",
        "schema": "integer",
        "description": "Filter by deal's status.  See [available values](https://developers.activecampaign.com/reference/deal#deals-parameters-available-values)"
      },
      {
        "name": "filters[owner]",
        "schema": "integer",
        "description": "Filter by deal's owner"
      },
      {
        "name": "filters[nextdateRange]",
        "schema": "string",
        "description": "Filter by deal's tasks due dates. See [available values](https://developers.activecampaign.com/reference/deal#deals-parameters-available-values)"
      },
      {
        "name": "filters[tag]",
        "schema": "string",
        "description": "Filter by tag names associated with deal's primary contact. See [available values](https://developers.activecampaign.com/reference/deal#deals-parameters-available-values)."
      },
      {
        "name": "filters[tasktype]",
        "schema": "string",
        "description": "Filter by deals that have tasks with given type"
      },
      {
        "name": "filters[createdBefore]",
        "schema": "string",
        "description": "Returns deals that are created less than given date"
      },
      {
        "name": "filters[createdAfter]",
        "schema": "string",
        "description": "Returns deals that are created greater than or equal to given date"
      },
      {
        "name": "filters[updatedBefore]",
        "schema": "string",
        "description": "Returns deals that are updated less than given date"
      },
      {
        "name": "filters[updatedAfter]",
        "schema": "string",
        "description": "Returns deals that are updated greater than or equal to given date"
      },
      {
        "name": "filters[organization]",
        "schema": "integer",
        "description": "Filter by deal's primary contact's organization's id"
      },
      {
        "name": "filters[minimumValue]",
        "schema": "integer",
        "description": "In USD with dollar portion. Returns deals whose values are greater than or equal to given value"
      },
      {
        "name": "filters[maximumValue]",
        "schema": "integer",
        "description": "In USD with dollar portion. Returns deals whose values are less than or equal to given value"
      },
      {
        "name": "filters[scoreGreaterThan]",
        "schema": "string",
        "description": "In a format of `<score_id>:<score_value>`. Returns deals whose score value is greater than given value"
      },
      {
        "name": "filters[scoreLessThan]",
        "schema": "string",
        "description": "In a format of `<score_id>:<score_value>`. Returns deals whose score value is less than given value"
      },
      {
        "name": "filters[score]",
        "schema": "string",
        "description": "In a format of `<score_id>:<score_value>`. Returns deals whose score value is equal to given value"
      },
      {
        "name": "orders[title]",
        "schema": "string",
        "description": "Order by deal's title.",
        "default": "ASC"
      },
      {
        "name": "orders[value]",
        "schema": "string",
        "description": "Order by deal's value.",
        "default": "ASC"
      },
      {
        "name": "orders[cdate]",
        "schema": "string",
        "description": "Order by deal's created date.",
        "default": "ASC"
      },
      {
        "name": "orders[contactName]",
        "schema": "string",
        "description": "Order by deal's primary contact's first name.",
        "default": "ASC"
      },
      {
        "name": "orders[contactOrgname]",
        "schema": "string",
        "description": "Order by deal's primary contact's organization name.",
        "default": "ASC"
      },
      {
        "name": "orders[nextAction]",
        "schema": "string",
        "description": "Order by deal's next task's due date first. Then append deals with no next task. Lastly append deals with overdue tasks. If dates are the same, order by deal's id.",
        "default": "ASC"
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
    "url": "/deals",
    "method": "newDealCreation",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Deal",
    "typeScriptTag": "deal",
    "description": "Create a deal",
    "parameters": [
      {
        "name": "deal",
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
      }
    ]
  },
  {
    "url": "/deals/{id}",
    "method": "removeById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Deal",
    "typeScriptTag": "deal",
    "description": "Delete a deal",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The Deal's id",
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
    "url": "/deals/{id}",
    "method": "getDeal",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Deal",
    "typeScriptTag": "deal",
    "description": "Retrieve a deal",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The Deal's id",
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
    "url": "/deals/{id}",
    "method": "updateExistingDeal",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Deal",
    "typeScriptTag": "deal",
    "description": "Update a deal",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The Deal's id",
        "example": 0
      },
      {
        "name": "deal",
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
      }
    ]
  },
  {
    "url": "/deals/{id}/notes",
    "method": "createNote",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Deal",
    "typeScriptTag": "deal",
    "description": "Create a deal note",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The Deal's id to assign new note to",
        "example": "ID"
      },
      {
        "name": "note",
        "schema": "object",
        "description": ""
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
    "url": "/deals/{id}/notes/{noteId}",
    "method": "updateNote",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Deal",
    "typeScriptTag": "deal",
    "description": "Update a deal note",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Deal's id to assign new note to",
        "example": "ID"
      },
      {
        "name": "noteId",
        "schema": "string",
        "required": true,
        "description": "Deal note's id to update",
        "example": "NOTEID"
      },
      {
        "name": "note",
        "schema": "object",
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
    "url": "/deals/bulkUpdate",
    "method": "bulkUpdateOwners",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Deal",
    "typeScriptTag": "deal",
    "description": "Bulk Update Deal Owners",
    "parameters": [
      {
        "name": "deals",
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
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/dealActivities",
    "method": "listActivities",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Deal",
    "typeScriptTag": "deal",
    "description": "List all deal activities",
    "parameters": [
      {
        "name": "exclude=email",
        "schema": "string",
        "description": "Include this param to exclude \"email\", \"connection_email\", and \"LinkData\" activity types"
      },
      {
        "name": "deal",
        "schema": "string",
        "description": "Filter by deal ID"
      },
      {
        "name": "filters[dataType]",
        "schema": "string",
        "description": "Enter any dataType (see Response Details) to filter by that type. Examples: \"userid\" or task\" or \"note\""
      },
      {
        "name": "filters[dataId]",
        "schema": "string",
        "description": "Enter any dataId (see Response details) to filter by related object. Example \"291\" for a note with ID 291"
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
    "url": "/dealGroups",
    "method": "getAllPipelines",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Deal",
    "typeScriptTag": "deal",
    "description": "List all pipelines",
    "parameters": [
      {
        "name": "filters[title]",
        "schema": "string",
        "description": "Filter by pipeline's title. The filter matches any pipeline titles that contain the provided title (i.e. \"Contact\" matches all of \"In Contact\", \"To Contact\", and \"Contact Pipeline\")."
      },
      {
        "name": "filters[haveStages]",
        "schema": "integer",
        "description": "Filter by whether pipelines have deal stages. Can be either `1` or `0`. If `1`, only pipelines with at least one stage will be returned."
      },
      {
        "name": "orders[title]",
        "schema": "string",
        "description": "Order by Pipeline's title",
        "default": "ASC"
      },
      {
        "name": "orders[popular]",
        "schema": "string",
        "description": "Order by number of deals each pipeline has. If pipelines have same number of deals, pipelines' created dates are used to determine the order.",
        "default": "ASC"
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
    "url": "/dealGroups",
    "method": "createPipeline",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Deal",
    "typeScriptTag": "deal",
    "description": "Create a pipeline",
    "parameters": [
      {
        "name": "dealGroup",
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
      }
    ]
  },
  {
    "url": "/dealGroups/{id}",
    "method": "deletePipeline",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Deal",
    "typeScriptTag": "deal",
    "description": "Delete a pipeline",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "Pipeline's id",
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
    "url": "/dealGroups/{id}",
    "method": "getPipeline",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Deal",
    "typeScriptTag": "deal",
    "description": "Retrieve a pipeline",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Pipeline's id",
        "example": "ID"
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
    "url": "/dealGroups/{id}",
    "method": "updatePipeline",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Deal",
    "typeScriptTag": "deal",
    "description": "Update a pipeline",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "Pipeline's id",
        "example": 0
      },
      {
        "name": "dealGroup",
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
      }
    ]
  },
  {
    "url": "/dealStages",
    "method": "listAllStages",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Deal",
    "typeScriptTag": "deal",
    "description": "List all stages",
    "parameters": [
      {
        "name": "filters[title]",
        "schema": "string",
        "description": "Filter by deal stages' titles. Any stages whose titles partial-match the filter value are returned"
      },
      {
        "name": "filters[dGroupid]",
        "schema": "string",
        "description": "Filter by pipeline's id"
      },
      {
        "name": "orders[title]",
        "schema": "string",
        "description": "Order by deal stage's title"
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
    "url": "/dealStages",
    "method": "createStage",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Deal",
    "typeScriptTag": "deal",
    "description": "Create a stage",
    "parameters": [
      {
        "name": "reorder",
        "schema": "integer",
        "description": "Whether to reorder stages within the pipeline after creating a new deal stage. Can be one of `0` and `1`. If set to `1`, new order values will be assigned to all stages within the same pipeline. If deal stages with the same order exists, the stage with the highest `id` will be assigned with the lowest `order`"
      },
      {
        "name": "dealStage",
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
      }
    ]
  },
  {
    "url": "/dealStages/{id}",
    "method": "deleteStageById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Deal",
    "typeScriptTag": "deal",
    "description": "Delete a stage",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "Deal stage's id",
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
    "url": "/dealStages/{id}",
    "method": "getStageById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Deal",
    "typeScriptTag": "deal",
    "description": "Retrieve a stage",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "Deal stage's id",
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
    "url": "/dealStages/{id}",
    "method": "updateStage",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Deal",
    "typeScriptTag": "deal",
    "description": "Update a stage",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "Deal stage's id",
        "example": 0
      },
      {
        "name": "reorder",
        "schema": "integer",
        "description": "Whether to reorder stages within the pipeline after creating a new deal stage. Can be one of `0` and `1`. If set to `1`, new order values will be assigned to all stages within the same pipeline. If deal stages with the same order exists, the stage with the highest `id` will be assigned with the lowest `order`"
      },
      {
        "name": "dealStage",
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
      }
    ]
  },
  {
    "url": "/dealStages/{id}/deals",
    "method": "moveDealsToAnotherStage",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Deal",
    "typeScriptTag": "deal",
    "description": "Move deals to another stage",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "Deal stage's id whose deals are to be moved to another deal stage",
        "example": 0
      },
      {
        "name": "deal",
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
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/dealCustomFieldMeta",
    "method": "listCustomFieldMeta",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Deal",
    "typeScriptTag": "deal",
    "description": "List all custom fields",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "description": "The number of fields returned per request.",
        "default": 100
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
    "url": "/dealCustomFieldMeta",
    "method": "createCustomFieldMeta",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Deal",
    "typeScriptTag": "deal",
    "description": "Create a custom field meta",
    "parameters": [
      {
        "name": "dealCustomFieldMetum",
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
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/dealCustomFieldMeta/{id}",
    "method": "deleteCustomFieldMeta",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Deal",
    "typeScriptTag": "deal",
    "description": "Delete a custom field",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "ID of the field to delete",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/dealCustomFieldMeta/{id}",
    "method": "getCustomFieldMeta",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Deal",
    "typeScriptTag": "deal",
    "description": "Retrieve a custom field",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "ID of the field to retrieve",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/dealCustomFieldMeta/{id}",
    "method": "updateCustomFieldMeta",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Deal",
    "typeScriptTag": "deal",
    "description": "Update a custom field",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "ID of the custom field to update",
        "example": 0
      },
      {
        "name": "dealCustomFieldMetum",
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/dealCustomFieldData",
    "method": "listCustomFieldData",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Deal",
    "typeScriptTag": "deal",
    "description": "List all custom field values",
    "parameters": [
      {
        "name": "filters[dealId]",
        "schema": "string",
        "description": "Filter results by a specific deal (note that Id uses a capital I)"
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
    "url": "/dealCustomFieldData",
    "method": "createCustomFieldValue",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Deal",
    "typeScriptTag": "deal",
    "description": "Create a custom field value",
    "parameters": [
      {
        "name": "dealCustomFieldDatum",
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
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/dealCustomFieldData/bulkCreate",
    "method": "bulkCreateCustomFieldValues",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Deal",
    "typeScriptTag": "deal",
    "description": "Bulk create a custom deal field value",
    "parameters": [
      {
        "name": "array",
        "schema": "object",
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
    "url": "/dealCustomFieldData/{id}",
    "method": "deleteCustomFieldValue",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Deal",
    "typeScriptTag": "deal",
    "description": "Delete a custom field value",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "ID of the dealCustomFieldData to retrieve",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/dealCustomFieldData/{id}",
    "method": "getCustomFieldValue",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Deal",
    "typeScriptTag": "deal",
    "description": "Retrieve a custom field value",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "ID of the dealCustomFieldData to retrieve",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/dealCustomFieldData/{id}",
    "method": "updateCustomFieldValue",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Deal",
    "typeScriptTag": "deal",
    "description": "Update a custom field value",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "ID of the custom fields value to update",
        "example": 0
      },
      {
        "name": "dealCustomFieldDatum",
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
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/dealCustomFieldData/bulkUpdate",
    "method": "bulkUpdateCustomFieldData",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Deal",
    "typeScriptTag": "deal",
    "description": "Bulk update a custom field value",
    "parameters": [
      {
        "name": "array",
        "schema": "object",
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
    "url": "/contactDeals",
    "method": "listAllSecondaryContacts",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Deal",
    "typeScriptTag": "deal",
    "description": "List all secondary contacts",
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
    "url": "/contactDeals",
    "method": "createSecondaryContact",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Deal",
    "typeScriptTag": "deal",
    "description": "Create a secondary contact",
    "parameters": [
      {
        "name": "contactDeal",
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
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/contactDeals/{id}",
    "method": "deleteSecondaryContact",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Deal",
    "typeScriptTag": "deal",
    "description": "Delete a secondary contact",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "Secondary Contact's id",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/contactDeals/{id}",
    "method": "getSecondaryContact",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Deal",
    "typeScriptTag": "deal",
    "description": "Retrieve a secondary contact",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "Secondary Contact's id",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/contactDeals/{id}",
    "method": "updateSecondaryContact",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Deal",
    "typeScriptTag": "deal",
    "description": "Update a secondary contact",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "Secondary Contact's id",
        "example": 0
      },
      {
        "name": "contactDeal",
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
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/dealRoles",
    "method": "listAllRoles",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Deal",
    "typeScriptTag": "deal",
    "description": "List all deal roles",
    "parameters": [
      {
        "name": "search",
        "schema": "string",
        "description": "(optional string used to search for matching titles)"
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
    "url": "/dealRoles",
    "method": "roleCreation",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Deal",
    "typeScriptTag": "deal",
    "description": "Create a deal role",
    "parameters": [
      {
        "name": "title",
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
    "url": "/dealRoles/{id}",
    "method": "deleteRole",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Deal",
    "typeScriptTag": "deal",
    "description": "Delete a deal role",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Deal role's id",
        "example": "ID"
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
    "url": "/connections",
    "method": "allConnections",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "List",
    "typeScriptTag": "list",
    "description": "List all connections",
    "parameters": [
      {
        "name": "filters[service]",
        "schema": "string",
        "description": "Filter by the external service name."
      },
      {
        "name": "filters[externalid]",
        "schema": "string",
        "description": "Filter by the external id associated with a connection."
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
    "url": "/connections",
    "method": "createNewResource",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Connection",
    "typeScriptTag": "connection",
    "description": "Create a connection",
    "parameters": [
      {
        "name": "connection",
        "schema": "object",
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
    "url": "/connections/{id}",
    "method": "deleteConnectionResource",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Connection",
    "typeScriptTag": "connection",
    "description": "Delete a connection",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The id of the connection to delete.",
        "example": "ID"
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
    "url": "/connections/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Connection",
    "typeScriptTag": "connection",
    "description": "Retrieve a connection",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The id of the connection to retrieve",
        "example": "ID"
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
    "url": "/connections/{id}",
    "method": "updateExistingConnection",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Connection",
    "typeScriptTag": "connection",
    "description": "Update a connection",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The id of the connection to update",
        "example": "ID"
      },
      {
        "name": "connection",
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
      }
    ]
  },
  {
    "url": "/ecomCustomers",
    "method": "allCustomers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "List",
    "typeScriptTag": "list",
    "description": "List all customers",
    "parameters": [
      {
        "name": "filters[email]",
        "schema": "string",
        "description": "Filter by the email address of a customer."
      },
      {
        "name": "filters[externalid]",
        "schema": "string",
        "description": "Filter by the id of the customer in the external service."
      },
      {
        "name": "filters[connectionid]",
        "schema": "string",
        "description": "Filter by the id of the connection object for the service where the customer originates."
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
    "url": "/ecomCustomers",
    "method": "createNewCustomer",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Customer",
    "typeScriptTag": "customer",
    "description": "Create a customer",
    "parameters": [
      {
        "name": "ecomCustomer",
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
      }
    ]
  },
  {
    "url": "/ecomCustomers/{id}",
    "method": "deleteCustomerResource",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Customer",
    "typeScriptTag": "customer",
    "description": "Delete a customer",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The id of the customer to delete.",
        "example": "ID"
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
    "url": "/ecomCustomers/{id}",
    "method": "get",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Customer",
    "typeScriptTag": "customer",
    "description": "Retrieve a customer",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The id of the customer to retrieve",
        "example": "ID"
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
    "url": "/ecomCustomers/{id}",
    "method": "updateResource",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Customer",
    "typeScriptTag": "customer",
    "description": "Update a customer",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The id of the customer to update",
        "example": "ID"
      },
      {
        "name": "ecomCustomer",
        "schema": "object",
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
    "url": "/ecomOrders",
    "method": "allOrders",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "List",
    "typeScriptTag": "list",
    "description": "List all orders",
    "parameters": [
      {
        "name": "filters[connectionid]",
        "schema": "integer",
        "description": "Filter by the connection id. Must be greater than 0."
      },
      {
        "name": "filters[externalid]",
        "schema": "integer",
        "description": "Filter by the external id of the order."
      },
      {
        "name": "filters[externalcheckoutid]",
        "schema": "string",
        "description": "Filter by the external checkout id"
      },
      {
        "name": "filters[email]",
        "schema": "string",
        "description": "Filter by the customer email address."
      },
      {
        "name": "filters[state]",
        "schema": "integer",
        "description": "Filter by the state of the order. 0 = Pending, 1 = Completed, 2 = Abandoned, 3 = Recovered, 4 = Waiting (Customer checked out but payment is not yet completed)"
      },
      {
        "name": "filters[customerid]",
        "schema": "string",
        "description": "Filter by the customer id"
      },
      {
        "name": "filters[externalCreatedDate]",
        "schema": "string",
        "description": "Filter by the external created date"
      },
      {
        "name": "orders[connectionid]",
        "schema": "integer",
        "description": "Order by connection ID. Accepted values are ASC or DESC."
      },
      {
        "name": "orders[externalid]",
        "schema": "integer",
        "description": "Order by external ID. Accepted values are ASC or DESC."
      },
      {
        "name": "orders[externalcheckoutid]",
        "schema": "string",
        "description": "Order by external checkout ID. Accepted values are ASC or DESC."
      },
      {
        "name": "orders[email]",
        "schema": "string",
        "description": "Order by email. Accepted values are ASC or DESC."
      },
      {
        "name": "orders[state]",
        "schema": "integer",
        "description": "Order by state. Accepted values are ASC or DESC."
      },
      {
        "name": "orders[customerid]",
        "schema": "string",
        "description": "Order by customer ID. Accepted values are ASC or DESC."
      },
      {
        "name": "orders[externalCreatedDate]",
        "schema": "string",
        "description": "Order by external created date. Accepted values are ASC or DESC."
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
      }
    ]
  },
  {
    "url": "/ecomOrders",
    "method": "createNewOrder",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Order",
    "typeScriptTag": "order",
    "description": "Create an order",
    "parameters": [
      {
        "name": "ecomOrder",
        "schema": "object",
        "description": ""
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
    "url": "/ecomOrders/{ecomOrderId}",
    "method": "deleteOrder",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Order",
    "typeScriptTag": "order",
    "description": "Delete an order",
    "parameters": [
      {
        "name": "ecomOrderId",
        "schema": "integer",
        "required": true,
        "description": "The id of the order to delete.",
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
    "url": "/ecomOrders/{ecomOrderId}",
    "method": "getOrder",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Order",
    "typeScriptTag": "order",
    "description": "Retrieve an order",
    "parameters": [
      {
        "name": "ecomOrderId",
        "schema": "integer",
        "required": true,
        "description": "The id of the order to retrieve.",
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
    "url": "/ecomOrders/{id}",
    "method": "updateOrderResource",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Order",
    "typeScriptTag": "order",
    "description": "Update an order",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The ID of the order to update",
        "example": "ID"
      },
      {
        "name": "ecomOrder",
        "schema": "object",
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
    "url": "/ecomOrderProducts",
    "method": "ecomOrderProducts",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "List",
    "typeScriptTag": "list",
    "description": "List EcomOrderProducts",
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
    "url": "/ecomOrders/{id}/orderProducts",
    "method": "orderProductsForSpecificOrder",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "List",
    "typeScriptTag": "list",
    "description": "List EcomOrderProducts for a Specific EcomOrder",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The ID of the order whose products you'd like returned.",
        "example": "ID"
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
    "url": "/ecomOrderProducts/{id}",
    "method": "getProductById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Order",
    "typeScriptTag": "order",
    "description": "Retrieve an EcomOrderProduct",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The ID of the product you'd like returned.",
        "example": "ID"
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
    "url": "/forms/{id}",
    "method": "getForm",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Form",
    "typeScriptTag": "form",
    "description": "Retrieve a form",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "ID of the form to retrieve",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      }
    ]
  },
  {
    "url": "/forms",
    "method": "listAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Form",
    "typeScriptTag": "form",
    "description": "List all forms",
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
    "url": "/lists",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "List",
    "typeScriptTag": "list",
    "description": "Retrieve all lists",
    "parameters": [
      {
        "name": "filters[name]",
        "schema": "string",
        "description": "Filter by the name of the list"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Limit the number of returned results"
      },
      {
        "name": "filters[name][<operator>]",
        "schema": "string",
        "description": "Filters lists by list name according to the operator specified. (See supported operators below)"
      },
      {
        "name": "orders[name]",
        "schema": "string",
        "description": "Orders filtered results by weight, ascending order, or descending order. If weight is used, exact matches are returned first, followed by matches starting with what was filtered by, followed by the rest of the results."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      }
    ]
  },
  {
    "url": "/lists",
    "method": "createNewList",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "List",
    "typeScriptTag": "list",
    "description": "Create a list",
    "parameters": [
      {
        "name": "list",
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
        "statusCode": "403",
        "description": ""
      }
    ]
  },
  {
    "url": "/lists/{id}",
    "method": "deleteById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "List",
    "typeScriptTag": "list",
    "description": "Delete a list",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "ID of the list to delete",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      }
    ]
  },
  {
    "url": "/lists/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "List",
    "typeScriptTag": "list",
    "description": "Retrieve a list",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "ID of the lists to retrieve",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/listGroups",
    "method": "groupPermissionCreate",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "List",
    "typeScriptTag": "list",
    "description": "Create a list group permission",
    "parameters": [
      {
        "name": "listGroup",
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
        "statusCode": "403",
        "description": ""
      }
    ]
  },
  {
    "url": "/notes/{id}",
    "method": "deleteNoteById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Note",
    "typeScriptTag": "note",
    "description": "Delete a note",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "ID of the note to delete",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      }
    ]
  },
  {
    "url": "/notes/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Note",
    "typeScriptTag": "note",
    "description": "Retrieve a note",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "ID of the note to retrieve",
        "example": "ID"
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
    "url": "/notes/{id}",
    "method": "updateNoteById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Note",
    "typeScriptTag": "note",
    "description": "Update a note",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "ID of the note to update",
        "example": "ID"
      },
      {
        "name": "note",
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
        "statusCode": "403",
        "description": ""
      }
    ]
  },
  {
    "url": "/savedResponses",
    "method": "savedResponses",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "List",
    "typeScriptTag": "list",
    "description": "List all saved responses",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/savedResponses",
    "method": "createSavedResponse",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Response",
    "typeScriptTag": "response",
    "description": "Create a saved response",
    "parameters": [
      {
        "name": "savedResponse",
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
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/savedResponses/{id}",
    "method": "removeById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Response",
    "typeScriptTag": "response",
    "description": "Delete a saved response",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "ID of the saved response to remove",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/savedResponses/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Response",
    "typeScriptTag": "response",
    "description": "Retrieve a saved response",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "ID of the saved Response to recieve",
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
    "url": "/savedResponses/{id}",
    "method": "updateSavedResponse",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Response",
    "typeScriptTag": "response",
    "description": "Update a saved response",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "ID of the saved response to update",
        "example": 0
      },
      {
        "name": "savedResponse",
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
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/scores/{id}",
    "method": "getScoreById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Score",
    "typeScriptTag": "score",
    "description": "Retrieve a score",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "ID of the score to retrieve",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/scores",
    "method": "allScores",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "List",
    "typeScriptTag": "list",
    "description": "List all scores",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/segments/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Segment",
    "typeScriptTag": "segment",
    "description": "Retrieve a segment",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "ID of the segment to be retrieved",
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
    "url": "/segments",
    "method": "allSegments",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "List",
    "typeScriptTag": "list",
    "description": "List all segments",
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
    "url": "/configs/{id}",
    "method": "updateSettings",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Config",
    "typeScriptTag": "config",
    "description": "Update settings",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "ID of the config to edit",
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
        "description": ""
      }
    ]
  },
  {
    "url": "/event",
    "method": "trackEvent",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Event",
    "typeScriptTag": "event",
    "description": "Track event",
    "parameters": [
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "KEY"
      },
      {
        "name": "event",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EVENT"
      },
      {
        "name": "eventdata",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "actid",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACTID"
      },
      {
        "name": "visit",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "VISIT"
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
    "url": "/eventTrackingEvents",
    "method": "eventNames",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "List",
    "typeScriptTag": "list",
    "description": "List all events (names only)",
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
    "url": "/eventTrackingEvents",
    "method": "createNewEvent",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Event",
    "typeScriptTag": "event",
    "description": "Create a new event (name only)",
    "parameters": [
      {
        "name": "eventTrackingEvent",
        "schema": "object",
        "description": ""
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
    "url": "/eventTracking",
    "method": "getStatus",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Event",
    "typeScriptTag": "event",
    "description": "Retrieve Event Tracking Status",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/eventTracking",
    "method": "toggleStatus",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Event",
    "typeScriptTag": "event",
    "description": "Enable/disable",
    "parameters": [
      {
        "name": "eventTracking",
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
      }
    ]
  },
  {
    "url": "/eventTrackingEvents/{eventName}",
    "method": "deleteEventName",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Event",
    "typeScriptTag": "event",
    "description": "Delete event (name only)",
    "parameters": [
      {
        "name": "eventName",
        "schema": "string",
        "required": true,
        "description": "Name of event to delete. Spaces in names are allowed, but must be encoded (for example, \"my%20event\").",
        "example": "EVENTNAME"
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
    "url": "/contacts/{contactId}/trackingLogs",
    "method": "getTrackingLogs",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Event",
    "typeScriptTag": "event",
    "description": "Get Contact's Tracking Logs/Events",
    "parameters": [
      {
        "name": "contactId",
        "schema": "string",
        "required": true,
        "description": "The Contact's ID",
        "example": "CONTACTID"
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
    "url": "/trackingLogs/{eventId}/contact",
    "method": "getContactByEventId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Event",
    "typeScriptTag": "event",
    "description": "Get Contact By Event ID",
    "parameters": [
      {
        "name": "eventId",
        "schema": "string",
        "required": true,
        "description": "The Event's ID",
        "example": "EVENTID"
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
    "url": "/siteTrackingDomains",
    "method": "whitelistedDomains",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "List",
    "typeScriptTag": "list",
    "description": "List all whitelisted domains",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/siteTrackingDomains",
    "method": "whitelistedDomainCreate",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "List",
    "typeScriptTag": "list",
    "description": "Add domain to whitelist",
    "parameters": [
      {
        "name": "siteTrackingDomain",
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
      }
    ]
  },
  {
    "url": "/siteTracking/code",
    "method": "getSiteCode",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Tracking",
    "typeScriptTag": "tracking",
    "description": "Retrieve site tracking code",
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
    "url": "/siteTracking",
    "method": "getSiteTrackingStatus",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Status",
    "typeScriptTag": "status",
    "description": "Retrieve status",
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
    "url": "/siteTracking",
    "method": "enableDisableSite",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Tracking",
    "typeScriptTag": "tracking",
    "description": "Enable/disable",
    "parameters": [
      {
        "name": "siteTracking",
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
      }
    ]
  },
  {
    "url": "/siteTrackingDomains/{name}",
    "method": "removeDomain",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "List",
    "typeScriptTag": "list",
    "description": "Remove domain from whitelist",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "The domain name to remove from the whitelist",
        "example": "NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      }
    ]
  },
  {
    "url": "/tags",
    "method": "listAllTags",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Tag",
    "typeScriptTag": "tag",
    "description": "List all tags",
    "parameters": [
      {
        "name": "search",
        "schema": "string",
        "description": "Filter by name of tag(s); \"contains\" operator is assumed."
      },
      {
        "name": "filters[search][<operator>]",
        "schema": "string",
        "description": "Filters tags by tag name according to the operator specified. Operators currently supported: `eq`, `neq`, `lt`, `lte`, `gt`, `gte`, `contains`, `starts_with`"
      },
      {
        "name": "orders[search]",
        "schema": "string",
        "description": "Orders filtered results by weight, ascending order, or descending order. If `weight` is used, exact matches are returned first, followed by matches starting with what was filtered by, followed by the rest of the results."
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
    "url": "/tags",
    "method": "createTag",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Tag",
    "typeScriptTag": "tag",
    "description": "Create a tag",
    "parameters": [
      {
        "name": "tag",
        "schema": "object",
        "description": ""
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
    "url": "/tags/{id}",
    "method": "removeTag",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Tag",
    "typeScriptTag": "tag",
    "description": "Delete a Tag",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "ID of the tag to remove",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/tags/{id}",
    "method": "getTag",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Tag",
    "typeScriptTag": "tag",
    "description": "Retrieve a tag",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "ID of the tag to retrieve",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/tags/{id}",
    "method": "updateTag",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Tag",
    "typeScriptTag": "tag",
    "description": "Update a tag",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "ID of the tag to update",
        "example": 0
      },
      {
        "name": "tag",
        "schema": "object",
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
    "url": "/dealTasks",
    "method": "getAllTasks",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Deal",
    "typeScriptTag": "deal",
    "description": "List all tasks",
    "parameters": [
      {
        "name": "filters[title]",
        "schema": "string",
        "description": "The title to be assigned to the task"
      },
      {
        "name": "filters[reltype]",
        "schema": "string",
        "description": "The name of the relating object (see relationships table)"
      },
      {
        "name": "filters[relid]",
        "schema": "integer",
        "description": "The id of the relational object for this task"
      },
      {
        "name": "filters[status]",
        "schema": "integer",
        "description": "Task status means complete or incomplete. 1 is complete and 0 is incomplete."
      },
      {
        "name": "filters[note]",
        "schema": "string",
        "description": "The content describing the task"
      },
      {
        "name": "filters[duedate]",
        "schema": "string",
        "description": "Due date of the task"
      },
      {
        "name": "filters[dTasktypeid]",
        "schema": "integer",
        "description": "The type of the task based on the available Task Types in the account"
      },
      {
        "name": "filters[userid]",
        "schema": "integer",
        "description": "User ID this task belongs to"
      },
      {
        "name": "filters[dueAfter]",
        "schema": "string",
        "description": "Filter deal tasks that are due after a specific date"
      },
      {
        "name": "fitlers[dueBefore]",
        "schema": "string",
        "description": "Filter deal tasks that are due before a specific date"
      },
      {
        "name": "filters[duedateRange]",
        "schema": "string",
        "description": "Filter deal tasks that are due between specific date range"
      },
      {
        "name": "filters[assigneeUserid]",
        "schema": "integer",
        "description": "The id of the user a task is assigned to"
      },
      {
        "name": "filters[outcomeId]",
        "schema": "integer",
        "description": "The id of a task outcome that the task belongs to."
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
      }
    ]
  },
  {
    "url": "/dealTasks",
    "method": "createNewTask",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Deal",
    "typeScriptTag": "deal",
    "description": "Create a task",
    "parameters": [
      {
        "name": "dealTask",
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
      }
    ]
  },
  {
    "url": "/dealTasks/{id}",
    "method": "deleteTask",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Deal",
    "typeScriptTag": "deal",
    "description": "Delete a task",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The task id",
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
    "url": "/dealTasks/{id}",
    "method": "getTaskById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Deal",
    "typeScriptTag": "deal",
    "description": "Retrieve a task",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the task",
        "example": 0
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
      }
    ]
  },
  {
    "url": "/dealTasks/{id}",
    "method": "updateTaskById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Deal",
    "typeScriptTag": "deal",
    "description": "Update a task",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the task",
        "example": 0
      },
      {
        "name": "dealTask",
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
      }
    ]
  },
  {
    "url": "/taskOutcomes",
    "method": "taskOutcomes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "List",
    "typeScriptTag": "list",
    "description": "List all task outcomes",
    "parameters": [
      {
        "name": "filters[sentiment]",
        "schema": "string",
        "description": "1 is for Negative, 2 is for Neutral and 3 is for Positive"
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
    "url": "/taskOutcomes",
    "method": "createTaskOutcome",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Outcome",
    "typeScriptTag": "outcome",
    "description": "Create a task outcome",
    "parameters": [
      {
        "name": "title",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TITLE"
      },
      {
        "name": "sentiment",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SENTIMENT"
      },
      {
        "name": "disabled",
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
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/taskOutcomes/{id}",
    "method": "getTaskOutcome",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Outcome",
    "typeScriptTag": "outcome",
    "description": "Retrieve a task outcome",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "Task outcome's id",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/taskOutccomes/{id}",
    "method": "deleteTaskOutcome",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Outcome",
    "typeScriptTag": "outcome",
    "description": "Delete a task outcome",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Task outcome's id",
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
        "description": ""
      }
    ]
  },
  {
    "url": "/taskOutccomes/{id}",
    "method": "updateTaskOutcome",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Outcome",
    "typeScriptTag": "outcome",
    "description": "Update a task outcome",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "Task outcome's id",
        "example": 0
      },
      {
        "name": "title",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TITLE"
      },
      {
        "name": "sentiment",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SENTIMENT"
      },
      {
        "name": "disabled",
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
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/dealTasktypes",
    "method": "listAllTaskTypes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Deal",
    "typeScriptTag": "deal",
    "description": "List all task types",
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
    "url": "/dealTasktypes",
    "method": "createTaskType",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Deal",
    "typeScriptTag": "deal",
    "description": "Create a task type",
    "parameters": [
      {
        "name": "dealTasktype",
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
      }
    ]
  },
  {
    "url": "/dealTasktypes/{id}",
    "method": "deleteTaskType",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Deal",
    "typeScriptTag": "deal",
    "description": "Delete a task type",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "Deal task type's id",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/dealTasktypes/{id}",
    "method": "getTaskType",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Deal",
    "typeScriptTag": "deal",
    "description": "Retrieve a task type",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "Deal task type's id",
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
    "url": "/dealTasktypes/{id}",
    "method": "updateTaskType",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Deal",
    "typeScriptTag": "deal",
    "description": "Update a task type",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "Deal task type's id",
        "example": 0
      },
      {
        "name": "dealTasktype",
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
      }
    ]
  },
  {
    "url": "/dealTasktypes/{id}/dealTasks",
    "method": "moveTasksToAnotherTaskType",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Deal",
    "typeScriptTag": "deal",
    "description": "Move tasks to another task type",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "Deal task type's id",
        "example": 0
      },
      {
        "name": "dealTask",
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
      }
    ]
  },
  {
    "url": "/tasktypeOutcomeRels/{id}",
    "method": "deleteTaskTypeOutcomeRelation",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Outcome",
    "typeScriptTag": "outcome",
    "description": "Delete a task type - outcome relation",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "Task type - outcome relation's id",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/tasktypeOutcomeRels/{id}",
    "method": "getTaskTypeOutcome",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Outcome",
    "typeScriptTag": "outcome",
    "description": "Retrieve a task type - outcome relation",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "Task type - outcome relation's id",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/tasktypeOutcomeRels",
    "method": "taskTypeOutcomeRelations",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "List",
    "typeScriptTag": "list",
    "description": "List all task type - outcome relations",
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
    "url": "/taskNotifications",
    "method": "createTaskOutcome",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Reminder",
    "typeScriptTag": "reminder",
    "description": "Create a task reminder",
    "parameters": [
      {
        "name": "dealTask",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DEALTASK"
      },
      {
        "name": "interval",
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
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/templates/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Template",
    "typeScriptTag": "template",
    "description": "Retrieve a template",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "ID of the template to retrieve",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/users",
    "method": "listAllUsers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "User",
    "typeScriptTag": "user",
    "description": "List all users",
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
    "url": "/users",
    "method": "createNewUser",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "User",
    "typeScriptTag": "user",
    "description": "Create a user",
    "parameters": [
      {
        "name": "user",
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
      }
    ]
  },
  {
    "url": "/users/{id}",
    "method": "deleteUser",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "User",
    "typeScriptTag": "user",
    "description": "Delete a user",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "ID of the user you wish to delete",
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
    "url": "/users/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "User",
    "typeScriptTag": "user",
    "description": "Retrieve a user",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "ID of the user you want to view",
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
    "url": "/users/{id}",
    "method": "updateExistingUser",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "User",
    "typeScriptTag": "user",
    "description": "Update a user",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "ID of the user",
        "example": 0
      },
      {
        "name": "user",
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
      }
    ]
  },
  {
    "url": "/users/email/{email}",
    "method": "getByEmail",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "User",
    "typeScriptTag": "user",
    "description": "Retrieve a user by email",
    "parameters": [
      {
        "name": "email",
        "schema": "string",
        "required": true,
        "description": "Email address of the user you want to view",
        "example": "EMAIL"
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
    "url": "/users/username/{username}",
    "method": "getByUsername",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "User",
    "typeScriptTag": "user",
    "description": "Retrieve a user by username",
    "parameters": [
      {
        "name": "username",
        "schema": "string",
        "required": true,
        "description": "Username of the user you want to view",
        "example": "USERNAME"
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
    "url": "/users/me",
    "method": "getLoggedInUser",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "User",
    "typeScriptTag": "user",
    "description": "Retrieve logged-in user",
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
    "url": "/groups",
    "method": "allGroups",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "List",
    "typeScriptTag": "list",
    "description": "List all groups",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/groups",
    "method": "createNewGroup",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Group",
    "typeScriptTag": "group",
    "description": "Create a group",
    "parameters": [
      {
        "name": "group",
        "schema": "object",
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
    "url": "/groups/{id}",
    "method": "deleteGroup",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Group",
    "typeScriptTag": "group",
    "description": "Delete a group",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "ID of the group to be deleted",
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
    "url": "/groups/{id}",
    "method": "getGroup",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Group",
    "typeScriptTag": "group",
    "description": "Retrieve a group",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "ID of the group to retrieve",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      }
    ]
  },
  {
    "url": "/groups/{id}",
    "method": "updateGroupById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Group",
    "typeScriptTag": "group",
    "description": "Update a group",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "ID of the group to update",
        "example": 0
      },
      {
        "name": "group",
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
        "statusCode": "403",
        "description": ""
      }
    ]
  },
  {
    "url": "/groupLimits",
    "method": "groupLimits",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "List",
    "typeScriptTag": "list",
    "description": "List All Group Limits",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/webhooks",
    "method": "webhooks",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "List",
    "typeScriptTag": "list",
    "description": "List all webhooks",
    "parameters": [
      {
        "name": "filters[name]",
        "schema": "string",
        "description": "Filter by webhook name"
      },
      {
        "name": "filters[url]",
        "schema": "string",
        "description": "Filter by webhook url"
      },
      {
        "name": "filters[listid]",
        "schema": "string",
        "description": "Filter by webhook's associated list"
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
    "url": "/webhooks",
    "method": "createNewWebhook",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Webhook",
    "typeScriptTag": "webhook",
    "description": "Create a webhook",
    "parameters": [
      {
        "name": "webhook",
        "schema": "object",
        "description": ""
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
    "url": "/webhooks/{id}",
    "method": "deleteExisting",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Webhook",
    "typeScriptTag": "webhook",
    "description": "Delete a webhook",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The webhook id",
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
    "url": "/webhooks/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Webhook",
    "typeScriptTag": "webhook",
    "description": "Retrieve a webhook",
    "parameters": [
      {
        "name": "id",
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
    "url": "/webhooks/{id}",
    "method": "updateExisting",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Webhook",
    "typeScriptTag": "webhook",
    "description": "Update a webhook",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The webhook id",
        "example": 0
      },
      {
        "name": "webhook",
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
      }
    ]
  },
  {
    "url": "/webhook/events",
    "method": "webhookEvents",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "List",
    "typeScriptTag": "list",
    "description": "List all webhook events",
    "parameters": [],
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
      apiTitle="V3"
      apiBaseUrl="https://{youraccountname}.api-us1.com/api/3"
      apiVersion="3"
      endpoints={159}
      sdkMethods={257}
      schemas={571}
      parameters={424}
      difficulty="Hard"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/activecampaign/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/activecampaign/openapi.yaml"
      developerDocumentation="developers.activecampaign.com/reference"
    />
  );
}
  