import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function WorkdayPersonTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="workday-person-typescript-sdk"
      metaDescription={`Workday is a leading provider of enterprise cloud applications for finance and human resources, helping customers adapt and thrive in a changing world. Workday applications for financial management, human resources, planning, spend management, and analytics are built with artificial intelligence and machine learning at the core to help organizations around the world embrace the future of work. Workday is used by more than 10,000 organizations around the world and across industries – from medium-sized businesses to more than 50% of the Fortune 500.`}
      company="Workday"
      serviceName="Person"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/workday/person/logo.png"
      companyKebabCase="workday"
      clientNameCamelCase="workdayPerson"
      homepage="workday.com"
      lastUpdated={new Date("2024-03-27T18:00:59.706Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/workday/person/favicon.png"
      // Missing contactUrl
      // Missing contactEmail
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/workday/person/imagePreview.jpg"
      GettingStarted={GettingStarted}
      FirstRequest={FirstRequest}
      categories={["hr"]}
      methods={[
  {
    "url": "/phoneValidation",
    "method": "validatePhoneNumber",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "phoneValidation",
    "typeScriptTag": "phoneValidation",
    "description": "Validates phone number data to ensure it is valid for Workday.",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/people/{ID}/personalInformation",
    "method": "getPersonalInfo",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "people",
    "typeScriptTag": "people",
    "description": "Retrieves a collection of personal information.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the resource.",
        "example": "ID"
      },
      {
        "name": "country",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "The maximum number of objects in a single response. The default is 20. The maximum is 100."
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "The zero-based index of the first object in a response collection. The default is 0. Use offset with the limit parameter to control paging of a response collection. Example: If limit is 5 and offset is 9, the response returns a collection of 5 objects starting with the 10th object."
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/people/{ID}/homeAddresses/{subresourceID}",
    "method": "getHomeAddress",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "people",
    "typeScriptTag": "people",
    "description": "Retrieves a home address.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the resource.",
        "example": "ID"
      },
      {
        "name": "subresourceId",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the subresource.",
        "example": "SUBRESOURCEID"
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/countries/{ID}",
    "method": "getInfo",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "countries",
    "typeScriptTag": "countries",
    "description": "Retrieves information about a country.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the resource.",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/homeContactInformationChanges/{ID}/webAddresses",
    "method": "getWebAddressesStaged",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "homeContactInformationChanges",
    "typeScriptTag": "homeContactInformationChanges",
    "description": "Retrieve all existing web addresses staged for update by the parent business process",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the resource.",
        "example": "ID"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "The maximum number of objects in a single response. The default is 20. The maximum is 100."
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "The zero-based index of the first object in a response collection. The default is 0. Use offset with the limit parameter to control paging of a response collection. Example: If limit is 5 and offset is 9, the response returns a collection of 5 objects starting with the 10th object."
      },
      {
        "name": "primaryOnly",
        "schema": "boolean",
        "required": false,
        "description": "If true, returns only the IDs of the person's primary web addresses."
      },
      {
        "name": "publicOnly",
        "schema": "boolean",
        "required": false,
        "description": "If true, returns only the IDs of the person's public web addresses."
      },
      {
        "name": "usageType",
        "schema": "string",
        "required": false,
        "description": "Specifies usage type, such as home or work. Only used if the service provides access to multiple usage types from the same endpoint."
      },
      {
        "name": "usedFor",
        "schema": "string",
        "required": false,
        "description": "Specifies usage behavior, such as mailing, billing, or shipping.\nOptional."
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/homeContactInformationChanges/{ID}/webAddresses",
    "method": "createWebAddress",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "homeContactInformationChanges",
    "typeScriptTag": "homeContactInformationChanges",
    "description": "Creates a new web address staged by the parent business process event.\n\nSecured by: Person Data: Home Web Address, Self-Service: Home Web Address\n\nScope: Contact Information",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the resource.",
        "example": "ID"
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
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/people/{ID}/additionalNames/{subresourceID}",
    "method": "getAdditionalName",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "people",
    "typeScriptTag": "people",
    "description": "Retrieves an additional name.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the resource.",
        "example": "ID"
      },
      {
        "name": "subresourceId",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the subresource.",
        "example": "SUBRESOURCEID"
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/workContactInformationChanges/{ID}/phoneNumbers/{subresourceID}",
    "method": "removePhoneNumber",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "workContactInformationChanges",
    "typeScriptTag": "workContactInformationChanges",
    "description": "Remove the specified phone number. If this address existed before the start of the current business process, it won't be removed from the target Person until the parent business process completes.\n\nSecured by: Person Data: Work Phone, Self-Service: Work Phone\n\nScope: Contact Information",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the resource.",
        "example": "ID"
      },
      {
        "name": "subresourceId",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the subresource.",
        "example": "SUBRESOURCEID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Successful response. A successful response can return no matched data. Deleting resource."
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/workContactInformationChanges/{ID}/phoneNumbers/{subresourceID}",
    "method": "getPhoneNumber",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "workContactInformationChanges",
    "typeScriptTag": "workContactInformationChanges",
    "description": "A phone number as it exists staged for update by the parent business process.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the resource.",
        "example": "ID"
      },
      {
        "name": "subresourceId",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the subresource.",
        "example": "SUBRESOURCEID"
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/workContactInformationChanges/{ID}/phoneNumbers/{subresourceID}",
    "method": "updatePhoneNumber",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "workContactInformationChanges",
    "typeScriptTag": "workContactInformationChanges",
    "description": "Partially update an existing phone number that is staged for update by the parent business process event.\n\nSecured by: Person Data: Work Phone, Self-Service: Work Phone\n\nScope: Contact Information",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the resource.",
        "example": "ID"
      },
      {
        "name": "subresourceId",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the subresource.",
        "example": "SUBRESOURCEID"
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/people/{ID}/audioNamePronunciation",
    "method": "getNamePronunciations",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "people",
    "typeScriptTag": "people",
    "description": "Retrieves a collection of Audio Name Pronunciations",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the resource.",
        "example": "ID"
      },
      {
        "name": "currentAudio",
        "schema": "boolean",
        "required": false,
        "description": "Download only the currently active audio"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "The maximum number of objects in a single response. The default is 20. The maximum is 100."
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "The zero-based index of the first object in a response collection. The default is 0. Use offset with the limit parameter to control paging of a response collection. Example: If limit is 5 and offset is 9, the response returns a collection of 5 objects starting with the 10th object."
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/people/{ID}/personalInformation/{subresourceID}",
    "method": "getPersonalInfo",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "people",
    "typeScriptTag": "people",
    "description": "Retrieves a person's personal information.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the resource.",
        "example": "ID"
      },
      {
        "name": "subresourceId",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the subresource.",
        "example": "SUBRESOURCEID"
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/workContactInformationChanges/{ID}/instantMessengers/{subresourceID}",
    "method": "removeInstantMessenger",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "workContactInformationChanges",
    "typeScriptTag": "workContactInformationChanges",
    "description": "Remove the specified instant messenger. If this instant messenger existed before the start of the current business process, it won't be removed from the target Person until the parent business process completes.\n\nSecured by: Person Data: Work Instant Messenger, Self-Service: Work Instant Messenger\n\nScope: Contact Information",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the resource.",
        "example": "ID"
      },
      {
        "name": "subresourceId",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the subresource.",
        "example": "SUBRESOURCEID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Successful response. A successful response can return no matched data. Deleting resource."
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/workContactInformationChanges/{ID}/instantMessengers/{subresourceID}",
    "method": "getStagedInstantMessenger",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "workContactInformationChanges",
    "typeScriptTag": "workContactInformationChanges",
    "description": "An instant messenger as it exists staged for update by the parent business process.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the resource.",
        "example": "ID"
      },
      {
        "name": "subresourceId",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the subresource.",
        "example": "SUBRESOURCEID"
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/workContactInformationChanges/{ID}/instantMessengers/{subresourceID}",
    "method": "updateInstantMessenger",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "workContactInformationChanges",
    "typeScriptTag": "workContactInformationChanges",
    "description": "Partially update an existing instant messenger that is staged for update by the parent business process event.\n\nSecured by: Person Data: Work Instant Messenger, Self-Service: Work Instant Messenger\n\nScope: Contact Information",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the resource.",
        "example": "ID"
      },
      {
        "name": "subresourceId",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the subresource.",
        "example": "SUBRESOURCEID"
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/homeContactInformationChanges/{ID}",
    "method": "getEventInformation",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "homeContactInformationChanges",
    "typeScriptTag": "homeContactInformationChanges",
    "description": "Returns basic information about the home contact change event.\n\nSecured by: Change Home Contact Information (REST Service), Person Data: Home Contact Information, Self-Service: Home Contact Information\n\nScope: Contact Information",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the resource.",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/homeContactInformationChanges/{ID}/phoneNumbers",
    "method": "getPhoneNumbers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "homeContactInformationChanges",
    "typeScriptTag": "homeContactInformationChanges",
    "description": "Retrieve all existing phone numbers staged for update by the parent business process",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the resource.",
        "example": "ID"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "The maximum number of objects in a single response. The default is 20. The maximum is 100."
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "The zero-based index of the first object in a response collection. The default is 0. Use offset with the limit parameter to control paging of a response collection. Example: If limit is 5 and offset is 9, the response returns a collection of 5 objects starting with the 10th object."
      },
      {
        "name": "primaryOnly",
        "schema": "boolean",
        "required": false,
        "description": "If true, returns only the IDs of the person's primary phone numbers."
      },
      {
        "name": "publicOnly",
        "schema": "boolean",
        "required": false,
        "description": "If true, returns only the IDs of the person's public phone numbers."
      },
      {
        "name": "usageType",
        "schema": "string",
        "required": false,
        "description": "Specifies usage type, such as home or work. Only used if the service provides access to multiple usage types from the same endpoint."
      },
      {
        "name": "usedFor",
        "schema": "string",
        "required": false,
        "description": "Specifies usage behavior, such as mailing, billing, or shipping.\nOptional."
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/homeContactInformationChanges/{ID}/phoneNumbers",
    "method": "createPhoneNumber",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "homeContactInformationChanges",
    "typeScriptTag": "homeContactInformationChanges",
    "description": "Creates a new phone number staged by the parent business process event.\n\nSecured by: Person Data: Home Phone, Self-Service: Home Phone\n\nScope: Contact Information",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the resource.",
        "example": "ID"
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
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/people/{ID}/photos",
    "method": "getPersonalPhotos",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "people",
    "typeScriptTag": "people",
    "description": "Retrieves a collection of personal photos.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the resource.",
        "example": "ID"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "The maximum number of objects in a single response. The default is 20. The maximum is 100."
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "The zero-based index of the first object in a response collection. The default is 0. Use offset with the limit parameter to control paging of a response collection. Example: If limit is 5 and offset is 9, the response returns a collection of 5 objects starting with the 10th object."
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/workContactInformationChanges/{ID}/submit",
    "method": "submit",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "workContactInformationChanges",
    "typeScriptTag": "workContactInformationChanges",
    "description": "Submit the specified contact change ID.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the resource.",
        "example": "ID"
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
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/people/{ID}/preferredName",
    "method": "getPreferredName",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "people",
    "typeScriptTag": "people",
    "description": "Retrieves the preferred name instance.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the resource.",
        "example": "ID"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "The maximum number of objects in a single response. The default is 20. The maximum is 100."
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "The zero-based index of the first object in a response collection. The default is 0. Use offset with the limit parameter to control paging of a response collection. Example: If limit is 5 and offset is 9, the response returns a collection of 5 objects starting with the 10th object."
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/workContactInformationChanges/{ID}",
    "method": "getEventInfo",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "workContactInformationChanges",
    "typeScriptTag": "workContactInformationChanges",
    "description": "Returns basic information about the work contact change event, as well as the Alternate Work Location staged by the event, if there is one.\n\nSecured by: Change Work Contact Information (REST Service), Person Data: Work Contact Information, Self-Service: Work Contact Information\n\nScope: Contact Information",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the resource.",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/workContactInformationChanges/{ID}",
    "method": "updateAlternateWorkLocation",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "workContactInformationChanges",
    "typeScriptTag": "workContactInformationChanges",
    "description": "Update the Alternate Work Location staged by this business process event.   Any Home or Work address for the target Person is valid for use as an Alternate Work Location.\n\nSecured by: Person Data: Work Address, Self-Service: Work Address\n\nScope: Contact Information",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the resource.",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/countries/{ID}/addressComponents",
    "method": "getAddressComponents",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "countries",
    "typeScriptTag": "countries",
    "description": "Retrieves the allowed address components and their configuration for the Country and a given Address Configuration Format.\nThe webServiceAlias of the returned address components map to the enterable fields when submitting address data in other POST/PUT/PATCH operations.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the resource.",
        "example": "ID"
      },
      {
        "name": "addressConfigurationFormat",
        "schema": "string",
        "required": false,
        "description": "The Address Configuration Format to return values for. \nRequired. Failure to provide this will result in no address components being returned.\nAvailable values are:\n- DEFAULT_AREAS\n- RECRUITING_FORMAT"
      },
      {
        "name": "currentAddress",
        "schema": "string",
        "required": false,
        "description": "The existing address being updated. \nRequired when you use Default Format and a Country using Local Script to get component data for an existing address. Failure to provide this when appropriate may result in incorrect address component data being returned."
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "The maximum number of objects in a single response. The default is 20. The maximum is 100."
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "The zero-based index of the first object in a response collection. The default is 0. Use offset with the limit parameter to control paging of a response collection. Example: If limit is 5 and offset is 9, the response returns a collection of 5 objects starting with the 10th object."
      },
      {
        "name": "useWesternScript",
        "schema": "boolean",
        "required": false,
        "description": "Enables Local Script components for Countries using Local Script in Default Format.\nOptional.\nWhen applicable, setting this value to true will enable Local Script components and enforce Western Components as optional. Local Components that are requireable will be enforced as required."
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/people/{ID}/photos/{subresourceID}",
    "method": "getPersonalPhoto",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "people",
    "typeScriptTag": "people",
    "description": "Retrieves a personal photo.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the resource.",
        "example": "ID"
      },
      {
        "name": "subresourceId",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the subresource.",
        "example": "SUBRESOURCEID"
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/people/{ID}/workInstantMessengers",
    "method": "getWorkInstantMessengerUsernames",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "people",
    "typeScriptTag": "people",
    "description": "Retrieves a collection of work instant messenger accounts usernames.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the resource.",
        "example": "ID"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "The maximum number of objects in a single response. The default is 20. The maximum is 100."
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "The zero-based index of the first object in a response collection. The default is 0. Use offset with the limit parameter to control paging of a response collection. Example: If limit is 5 and offset is 9, the response returns a collection of 5 objects starting with the 10th object."
      },
      {
        "name": "primaryOnly",
        "schema": "boolean",
        "required": false,
        "description": "If true, returns only the IDs of the person's primary instant messenger account usernames."
      },
      {
        "name": "publicOnly",
        "schema": "boolean",
        "required": false,
        "description": "If true, returns only the IDs of the person's public instant messenger usernames."
      },
      {
        "name": "usedFor",
        "schema": "string",
        "required": false,
        "description": "Specifies usage behavior, such as mailing, billing, or shipping.\nOptional."
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/people/{ID}/legalName/{subresourceID}",
    "method": "getLegalName",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "people",
    "typeScriptTag": "people",
    "description": "Retrieves the legal name instance.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the resource.",
        "example": "ID"
      },
      {
        "name": "subresourceId",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the subresource.",
        "example": "SUBRESOURCEID"
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/homeContactInformationChanges/{ID}/emailAddresses",
    "method": "getStagedEmailAddresses",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "homeContactInformationChanges",
    "typeScriptTag": "homeContactInformationChanges",
    "description": "Retrieve all existing addresses staged for update by the parent business process",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the resource.",
        "example": "ID"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "The maximum number of objects in a single response. The default is 20. The maximum is 100."
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "The zero-based index of the first object in a response collection. The default is 0. Use offset with the limit parameter to control paging of a response collection. Example: If limit is 5 and offset is 9, the response returns a collection of 5 objects starting with the 10th object."
      },
      {
        "name": "primaryOnly",
        "schema": "boolean",
        "required": false,
        "description": "If true, returns only the IDs of the person's primary email addresses."
      },
      {
        "name": "publicOnly",
        "schema": "boolean",
        "required": false,
        "description": "If true, returns only the IDs of the person's public email addresses."
      },
      {
        "name": "usageType",
        "schema": "string",
        "required": false,
        "description": "Specifies usage type, such as home or work. Only used if the service provides access to multiple usage types from the same endpoint."
      },
      {
        "name": "usedFor",
        "schema": "string",
        "required": false,
        "description": "Specifies usage behavior, such as mailing, billing, or shipping.\nOptional."
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/homeContactInformationChanges/{ID}/emailAddresses",
    "method": "createEmailAddress",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "homeContactInformationChanges",
    "typeScriptTag": "homeContactInformationChanges",
    "description": "Creates a new email address staged by the parent business process event.\n\nSecured by: Person Data: Home Email, Self-Service: Home Email\n\nScope: Contact Information",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the resource.",
        "example": "ID"
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
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/people/{ID}/workEmails",
    "method": "getWorkEmails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "people",
    "typeScriptTag": "people",
    "description": "Retrieves a collection of work email addresses.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the resource.",
        "example": "ID"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "The maximum number of objects in a single response. The default is 20. The maximum is 100."
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "The zero-based index of the first object in a response collection. The default is 0. Use offset with the limit parameter to control paging of a response collection. Example: If limit is 5 and offset is 9, the response returns a collection of 5 objects starting with the 10th object."
      },
      {
        "name": "primaryOnly",
        "schema": "boolean",
        "required": false,
        "description": "If true, returns only the IDs of the person's primary email addresses."
      },
      {
        "name": "publicOnly",
        "schema": "boolean",
        "required": false,
        "description": "If true, returns only the IDs of the person's public email addresses."
      },
      {
        "name": "usedFor",
        "schema": "string",
        "required": false,
        "description": "Specifies usage behavior, such as mailing, billing, or shipping.\nOptional."
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/people/{ID}/homeAddresses",
    "method": "getHomeAddresses",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "people",
    "typeScriptTag": "people",
    "description": "Retrieves a collection of home addresses.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the resource.",
        "example": "ID"
      },
      {
        "name": "effective",
        "schema": "string",
        "required": false,
        "description": "The effective date of the person's addresses using the yyyy-mm-dd format."
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "The maximum number of objects in a single response. The default is 20. The maximum is 100."
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "The zero-based index of the first object in a response collection. The default is 0. Use offset with the limit parameter to control paging of a response collection. Example: If limit is 5 and offset is 9, the response returns a collection of 5 objects starting with the 10th object."
      },
      {
        "name": "primaryOnly",
        "schema": "boolean",
        "required": false,
        "description": "If true, returns only the IDs of the person's primary addresses."
      },
      {
        "name": "publicOnly",
        "schema": "boolean",
        "required": false,
        "description": "If true, returns only the IDs of the person's public addresses."
      },
      {
        "name": "usedFor",
        "schema": "string",
        "required": false,
        "description": "Specifies usage behavior, such as mailing, billing, or shipping.\nOptional."
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/people/{ID}/homePhones/{subresourceID}",
    "method": "getHomePhone",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "people",
    "typeScriptTag": "people",
    "description": "Retrieves a home phone number.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the resource.",
        "example": "ID"
      },
      {
        "name": "subresourceId",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the subresource.",
        "example": "SUBRESOURCEID"
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/workContactInformationChanges/{ID}/instantMessengers",
    "method": "getStagedInstantMessengers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "workContactInformationChanges",
    "typeScriptTag": "workContactInformationChanges",
    "description": "Retrieve all existing instant messengers staged for update by the parent business process",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the resource.",
        "example": "ID"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "The maximum number of objects in a single response. The default is 20. The maximum is 100."
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "The zero-based index of the first object in a response collection. The default is 0. Use offset with the limit parameter to control paging of a response collection. Example: If limit is 5 and offset is 9, the response returns a collection of 5 objects starting with the 10th object."
      },
      {
        "name": "primaryOnly",
        "schema": "boolean",
        "required": false,
        "description": "If true, returns only the IDs of the person's primary instant messenger account usernames."
      },
      {
        "name": "publicOnly",
        "schema": "boolean",
        "required": false,
        "description": "If true, returns only the IDs of the person's public instant messenger account usernames."
      },
      {
        "name": "usageType",
        "schema": "string",
        "required": false,
        "description": "Specifies usage type, such as home or work. Only used if the service provides access to multiple usage types from the same endpoint."
      },
      {
        "name": "usedFor",
        "schema": "string",
        "required": false,
        "description": "Specifies usage behavior, such as mailing, billing, or shipping.\nOptional."
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/workContactInformationChanges/{ID}/instantMessengers",
    "method": "createInstantMessenger",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "workContactInformationChanges",
    "typeScriptTag": "workContactInformationChanges",
    "description": "Creates a new instant messenger staged by the parent business process event.\n\nSecured by: Person Data: Work Instant Messenger, Self-Service: Work Instant Messenger\n\nScope: Contact Information",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the resource.",
        "example": "ID"
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
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/countries/{ID}/nameComponents",
    "method": "getNameComponents",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "countries",
    "typeScriptTag": "countries",
    "description": "Retrieves a collection of configuration information about name components.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the resource.",
        "example": "ID"
      },
      {
        "name": "currentName",
        "schema": "string",
        "required": false,
        "description": "The Workday ID of the person's current name being updated. \nRequired when you use Default Format and a Country using Local Script to get component data for an existing name. Failure to provide this when appropriate may result in incorrect name component data being returned."
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "The maximum number of objects in a single response. The default is 20. The maximum is 100."
      },
      {
        "name": "nameConfigurationFormat",
        "schema": "string",
        "required": false,
        "description": "The Name Configuration Format for which to return values. \nRequired. Failure to provide this will result in no name components being returned.\nAvailable values are:\n- RECRUITING_FORMAT - The name components specific to Recruiting.\n- OTHER_FUNCTIONAL_AREAS - The name components for all other functional areas in Workday.\nExample: nameConfigurationFormat=Name_Configuration_Format_ID=OTHER_FUNCTIONAL_AREAS"
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "The zero-based index of the first object in a response collection. The default is 0. Use offset with the limit parameter to control paging of a response collection. Example: If limit is 5 and offset is 9, the response returns a collection of 5 objects starting with the 10th object."
      },
      {
        "name": "useWesternScript",
        "schema": "boolean",
        "required": false,
        "description": "If true, this method returns the set of allowed and required name components that uses Western Script. \nThe default is false."
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/people/{ID}/workInstantMessengers/{subresourceID}",
    "method": "getWorkInstantMessengerUsername",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "people",
    "typeScriptTag": "people",
    "description": "Retrieves a work instant messenger account username.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the resource.",
        "example": "ID"
      },
      {
        "name": "subresourceId",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the subresource.",
        "example": "SUBRESOURCEID"
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/people/{ID}/workAddresses/{subresourceID}",
    "method": "getWorkAddress",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "people",
    "typeScriptTag": "people",
    "description": "Retrieves a work address.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the resource.",
        "example": "ID"
      },
      {
        "name": "subresourceId",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the subresource.",
        "example": "SUBRESOURCEID"
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/homeContactInformationChanges/{ID}/addresses",
    "method": "getAddressesStaged",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "homeContactInformationChanges",
    "typeScriptTag": "homeContactInformationChanges",
    "description": "Retrieve all existing addresses staged for update by the parent business process",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the resource.",
        "example": "ID"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "The maximum number of objects in a single response. The default is 20. The maximum is 100."
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "The zero-based index of the first object in a response collection. The default is 0. Use offset with the limit parameter to control paging of a response collection. Example: If limit is 5 and offset is 9, the response returns a collection of 5 objects starting with the 10th object."
      },
      {
        "name": "primaryOnly",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "usedFor",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/homeContactInformationChanges/{ID}/addresses",
    "method": "createNewAddress",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "homeContactInformationChanges",
    "typeScriptTag": "homeContactInformationChanges",
    "description": "Creates a new address staged by the parent business process event.\n\nSecured by: Person Data: Home Address, Self-Service: Home Address\n\nScope: Contact Information",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the resource.",
        "example": "ID"
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
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/homeContactInformationChanges/{ID}/instantMessengers/{subresourceID}",
    "method": "removeInstantMessenger",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "homeContactInformationChanges",
    "typeScriptTag": "homeContactInformationChanges",
    "description": "Remove the specified instant messenger. If this instant messenger existed before the start of the current business process, it won't be removed from the target Person until the parent business process completes.\n\nSecured by: Person Data: Home Instant Messenger, Self-Service: Home Instant Messenger\n\nScope: Contact Information",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the resource.",
        "example": "ID"
      },
      {
        "name": "subresourceId",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the subresource.",
        "example": "SUBRESOURCEID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Successful response. A successful response can return no matched data. Deleting resource."
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/homeContactInformationChanges/{ID}/instantMessengers/{subresourceID}",
    "method": "getInstantMessenger",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "homeContactInformationChanges",
    "typeScriptTag": "homeContactInformationChanges",
    "description": "An instant messenger as it exists staged for update by the parent business process.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the resource.",
        "example": "ID"
      },
      {
        "name": "subresourceId",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the subresource.",
        "example": "SUBRESOURCEID"
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/homeContactInformationChanges/{ID}/instantMessengers/{subresourceID}",
    "method": "updateInstantMessenger",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "homeContactInformationChanges",
    "typeScriptTag": "homeContactInformationChanges",
    "description": "Partially update an existing instant messenger that is staged for update by the parent business process event.\n\nSecured by: Person Data: Home Instant Messenger, Self-Service: Home Instant Messenger\n\nScope: Contact Information",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the resource.",
        "example": "ID"
      },
      {
        "name": "subresourceId",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the subresource.",
        "example": "SUBRESOURCEID"
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/people/{ID}/workPhones",
    "method": "getWorkPhones",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "people",
    "typeScriptTag": "people",
    "description": "Retrieves a collection of work phone numbers.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the resource.",
        "example": "ID"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "The maximum number of objects in a single response. The default is 20. The maximum is 100."
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "The zero-based index of the first object in a response collection. The default is 0. Use offset with the limit parameter to control paging of a response collection. Example: If limit is 5 and offset is 9, the response returns a collection of 5 objects starting with the 10th object."
      },
      {
        "name": "primaryOnly",
        "schema": "boolean",
        "required": false,
        "description": "If true, returns only the IDs of the person's primary phone numbers."
      },
      {
        "name": "publicOnly",
        "schema": "boolean",
        "required": false,
        "description": "If true, returns only the IDs of the person's public phone numbers."
      },
      {
        "name": "usedFor",
        "schema": "string",
        "required": false,
        "description": "Specifies usage behavior, such as mailing, billing, or shipping.\nOptional."
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/homeContactInformationChanges/{ID}/webAddresses/{subresourceID}",
    "method": "removeWebAddress",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "homeContactInformationChanges",
    "typeScriptTag": "homeContactInformationChanges",
    "description": "Remove the specified web address. If this address existed before the start of the current business process, it won't be removed from the target Person until the parent business process completes.\n\nSecured by: Person Data: Home Web Address, Self-Service: Home Web Address\n\nScope: Contact Information",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the resource.",
        "example": "ID"
      },
      {
        "name": "subresourceId",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the subresource.",
        "example": "SUBRESOURCEID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Successful response. A successful response can return no matched data. Deleting resource."
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/homeContactInformationChanges/{ID}/webAddresses/{subresourceID}",
    "method": "getWebAddress",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "homeContactInformationChanges",
    "typeScriptTag": "homeContactInformationChanges",
    "description": "A web address as it exists staged for update by the parent business process.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the resource.",
        "example": "ID"
      },
      {
        "name": "subresourceId",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the subresource.",
        "example": "SUBRESOURCEID"
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/homeContactInformationChanges/{ID}/webAddresses/{subresourceID}",
    "method": "updateWebAddress",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "homeContactInformationChanges",
    "typeScriptTag": "homeContactInformationChanges",
    "description": "Partially update an existing web address that is staged for update by the parent business process event.\n\nSecured by: Person Data: Home Web Address, Self-Service: Home Web Address\n\nScope: Contact Information",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the resource.",
        "example": "ID"
      },
      {
        "name": "subresourceId",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the subresource.",
        "example": "SUBRESOURCEID"
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/people/{ID}/audioNamePronunciation/{subresourceID}",
    "method": "getNamePronunciation",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "people",
    "typeScriptTag": "people",
    "description": "Retrieves an Audio Name Pronunciation",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the resource.",
        "example": "ID"
      },
      {
        "name": "subresourceId",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the subresource.",
        "example": "SUBRESOURCEID"
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/people/{ID}/workWebAddresses/{subresourceID}",
    "method": "getWorkWebAddress",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "people",
    "typeScriptTag": "people",
    "description": "Retrieves a work web address.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the resource.",
        "example": "ID"
      },
      {
        "name": "subresourceId",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the subresource.",
        "example": "SUBRESOURCEID"
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/homeContactInformationChanges/{ID}/phoneNumbers/{subresourceID}",
    "method": "removePhoneNumber",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "homeContactInformationChanges",
    "typeScriptTag": "homeContactInformationChanges",
    "description": "Remove the specified phone number. If this address existed before the start of the current business process, it won't be removed from the target Person until the parent business process completes.\n\nSecured by: Person Data: Home Phone, Self-Service: Home Phone\n\nScope: Contact Information",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the resource.",
        "example": "ID"
      },
      {
        "name": "subresourceId",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the subresource.",
        "example": "SUBRESOURCEID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Successful response. A successful response can return no matched data. Deleting resource."
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/homeContactInformationChanges/{ID}/phoneNumbers/{subresourceID}",
    "method": "getStagedPhoneNumber",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "homeContactInformationChanges",
    "typeScriptTag": "homeContactInformationChanges",
    "description": "A phone number as it exists staged for update by the parent business process.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the resource.",
        "example": "ID"
      },
      {
        "name": "subresourceId",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the subresource.",
        "example": "SUBRESOURCEID"
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/homeContactInformationChanges/{ID}/phoneNumbers/{subresourceID}",
    "method": "updatePhoneNumber",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "homeContactInformationChanges",
    "typeScriptTag": "homeContactInformationChanges",
    "description": "Partially update an existing phone number that is staged for update by the parent business process event.\n\nSecured by: Person Data: Home Phone, Self-Service: Home Phone\n\nScope: Contact Information",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the resource.",
        "example": "ID"
      },
      {
        "name": "subresourceId",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the subresource.",
        "example": "SUBRESOURCEID"
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/people/{ID}/publicContactInformation/{subresourceID}",
    "method": "getPublicContactInformation",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "people",
    "typeScriptTag": "people",
    "description": "Retrieves a person's public contact information.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the resource.",
        "example": "ID"
      },
      {
        "name": "subresourceId",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the subresource.",
        "example": "SUBRESOURCEID"
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/people/{ID}/homePhones",
    "method": "getHomePhones",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "people",
    "typeScriptTag": "people",
    "description": "Retrieves a collection of home phone numbers.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the resource.",
        "example": "ID"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "The maximum number of objects in a single response. The default is 20. The maximum is 100."
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "The zero-based index of the first object in a response collection. The default is 0. Use offset with the limit parameter to control paging of a response collection. Example: If limit is 5 and offset is 9, the response returns a collection of 5 objects starting with the 10th object."
      },
      {
        "name": "primaryOnly",
        "schema": "boolean",
        "required": false,
        "description": "If true, returns only the IDs of the person's primary phone numbers."
      },
      {
        "name": "publicOnly",
        "schema": "boolean",
        "required": false,
        "description": "If true, returns only the IDs of the person's public phone numbers."
      },
      {
        "name": "usedFor",
        "schema": "string",
        "required": false,
        "description": "Specifies usage behavior, such as mailing, billing, or shipping.\nOptional."
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/homeContactInformationChanges/{ID}/submit",
    "method": "submitChange",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "homeContactInformationChanges",
    "typeScriptTag": "homeContactInformationChanges",
    "description": "Submit the specified contact change ID.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the resource.",
        "example": "ID"
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
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/people/{ID}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "people",
    "typeScriptTag": "people",
    "description": "Retrieves a person in your Workday tenant.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the resource.",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/people/{ID}/publicContactInformation",
    "method": "getPublicContactInformation",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "people",
    "typeScriptTag": "people",
    "description": "Retrieves a collection of public contact information.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the resource.",
        "example": "ID"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "The maximum number of objects in a single response. The default is 20. The maximum is 100."
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "The zero-based index of the first object in a response collection. The default is 0. Use offset with the limit parameter to control paging of a response collection. Example: If limit is 5 and offset is 9, the response returns a collection of 5 objects starting with the 10th object."
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/people/{ID}/legalName",
    "method": "getLegalName",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "people",
    "typeScriptTag": "people",
    "description": "Retrieves the legal name instance.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the resource.",
        "example": "ID"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "The maximum number of objects in a single response. The default is 20. The maximum is 100."
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "The zero-based index of the first object in a response collection. The default is 0. Use offset with the limit parameter to control paging of a response collection. Example: If limit is 5 and offset is 9, the response returns a collection of 5 objects starting with the 10th object."
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/people",
    "method": "getPersonById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "people",
    "typeScriptTag": "people",
    "description": "Retrieves a person in your Workday tenant.",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "The maximum number of objects in a single response. The default is 20. The maximum is 100."
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "The zero-based index of the first object in a response collection. The default is 0. Use offset with the limit parameter to control paging of a response collection. Example: If limit is 5 and offset is 9, the response returns a collection of 5 objects starting with the 10th object."
      },
      {
        "name": "universalId",
        "schema": "string",
        "required": false,
        "description": "The Universal ID of the person you want to retrieve."
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/people/{ID}/homeWebAddresses",
    "method": "getHomeWebAddresses",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "people",
    "typeScriptTag": "people",
    "description": "Retrieves a collection of home web addresses.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the resource.",
        "example": "ID"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "The maximum number of objects in a single response. The default is 20. The maximum is 100."
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "The zero-based index of the first object in a response collection. The default is 0. Use offset with the limit parameter to control paging of a response collection. Example: If limit is 5 and offset is 9, the response returns a collection of 5 objects starting with the 10th object."
      },
      {
        "name": "primaryOnly",
        "schema": "boolean",
        "required": false,
        "description": "If true, returns only the IDs of the person's primary web addresses."
      },
      {
        "name": "publicOnly",
        "schema": "boolean",
        "required": false,
        "description": "If true, returns only the IDs of the person's public web addresses."
      },
      {
        "name": "usedFor",
        "schema": "string",
        "required": false,
        "description": "Specifies usage behavior, such as mailing, billing, or shipping.\nOptional."
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/people/{ID}/preferredName/{subresourceID}",
    "method": "getPreferredName",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "people",
    "typeScriptTag": "people",
    "description": "Retrieves the preferred name instance.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the resource.",
        "example": "ID"
      },
      {
        "name": "subresourceId",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the subresource.",
        "example": "SUBRESOURCEID"
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/homeContactInformationChanges/{ID}/instantMessengers",
    "method": "getStagedInstantMessengers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "homeContactInformationChanges",
    "typeScriptTag": "homeContactInformationChanges",
    "description": "Retrieve all existing instant messengers staged for update by the parent business process",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the resource.",
        "example": "ID"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "The maximum number of objects in a single response. The default is 20. The maximum is 100."
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "The zero-based index of the first object in a response collection. The default is 0. Use offset with the limit parameter to control paging of a response collection. Example: If limit is 5 and offset is 9, the response returns a collection of 5 objects starting with the 10th object."
      },
      {
        "name": "primaryOnly",
        "schema": "boolean",
        "required": false,
        "description": "If true, returns only the IDs of the person's primary instant messenger account usernames."
      },
      {
        "name": "publicOnly",
        "schema": "boolean",
        "required": false,
        "description": "If true, returns only the IDs of the person's public instant messenger account usernames."
      },
      {
        "name": "usageType",
        "schema": "string",
        "required": false,
        "description": "Specifies usage type, such as home or work. Only used if the service provides access to multiple usage types from the same endpoint."
      },
      {
        "name": "usedFor",
        "schema": "string",
        "required": false,
        "description": "Specifies usage behavior, such as mailing, billing, or shipping.\nOptional."
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/homeContactInformationChanges/{ID}/instantMessengers",
    "method": "createInstantMessenger",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "homeContactInformationChanges",
    "typeScriptTag": "homeContactInformationChanges",
    "description": "Creates a new instant messenger staged by the parent business process event.\n\nSecured by: Person Data: Home Instant Messenger, Self-Service: Home Instant Messenger\n\nScope: Contact Information",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the resource.",
        "example": "ID"
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
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/people/{ID}/additionalNames",
    "method": "getAdditionalNames",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "people",
    "typeScriptTag": "people",
    "description": "Retrieves a collection of additional names.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the resource.",
        "example": "ID"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "The maximum number of objects in a single response. The default is 20. The maximum is 100."
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "The zero-based index of the first object in a response collection. The default is 0. Use offset with the limit parameter to control paging of a response collection. Example: If limit is 5 and offset is 9, the response returns a collection of 5 objects starting with the 10th object."
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/people/{ID}/workAddresses",
    "method": "getWorkAddresses",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "people",
    "typeScriptTag": "people",
    "description": "Retrieves a collection of work addresses.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the resource.",
        "example": "ID"
      },
      {
        "name": "effective",
        "schema": "string",
        "required": false,
        "description": "The effective date of the person's addresses using the yyyy-mm-dd format."
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "The maximum number of objects in a single response. The default is 20. The maximum is 100."
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "The zero-based index of the first object in a response collection. The default is 0. Use offset with the limit parameter to control paging of a response collection. Example: If limit is 5 and offset is 9, the response returns a collection of 5 objects starting with the 10th object."
      },
      {
        "name": "primaryOnly",
        "schema": "boolean",
        "required": false,
        "description": "If true, returns only the IDs of the person's primary addresses."
      },
      {
        "name": "publicOnly",
        "schema": "boolean",
        "required": false,
        "description": "If true, returns only the IDs of the person's public addresses."
      },
      {
        "name": "usedFor",
        "schema": "string",
        "required": false,
        "description": "Specifies usage behavior, such as mailing, billing, or shipping.\nOptional."
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/people/{ID}/workWebAddresses",
    "method": "getWorkWebAddresses",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "people",
    "typeScriptTag": "people",
    "description": "Retrieves a collection of work web addresses.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the resource.",
        "example": "ID"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "The maximum number of objects in a single response. The default is 20. The maximum is 100."
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "The zero-based index of the first object in a response collection. The default is 0. Use offset with the limit parameter to control paging of a response collection. Example: If limit is 5 and offset is 9, the response returns a collection of 5 objects starting with the 10th object."
      },
      {
        "name": "primaryOnly",
        "schema": "boolean",
        "required": false,
        "description": "If true, returns only the IDs of the person's primary web addresses."
      },
      {
        "name": "publicOnly",
        "schema": "boolean",
        "required": false,
        "description": "If true, returns only the IDs of the person's public web addresses."
      },
      {
        "name": "usedFor",
        "schema": "string",
        "required": false,
        "description": "Specifies usage behavior, such as mailing, billing, or shipping.\nOptional."
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/people/{ID}/homeEmails/{subresourceID}",
    "method": "getHomeEmail",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "people",
    "typeScriptTag": "people",
    "description": "Retrieves a home email address.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the resource.",
        "example": "ID"
      },
      {
        "name": "subresourceId",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the subresource.",
        "example": "SUBRESOURCEID"
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/people/{ID}/workPhones/{subresourceID}",
    "method": "getWorkPhone",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "people",
    "typeScriptTag": "people",
    "description": "Retrieves a work phone number.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the resource.",
        "example": "ID"
      },
      {
        "name": "subresourceId",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the subresource.",
        "example": "SUBRESOURCEID"
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/workContactInformationChanges/{ID}/webAddresses/{subresourceID}",
    "method": "removeWebAddress",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "workContactInformationChanges",
    "typeScriptTag": "workContactInformationChanges",
    "description": "Remove the specified web address. If this address existed before the start of the current business process, it won't be removed from the target Person until the parent business process completes.\n\nSecured by: Person Data: Work Web Address, Self-Service: Work Web Address\n\nScope: Contact Information",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the resource.",
        "example": "ID"
      },
      {
        "name": "subresourceId",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the subresource.",
        "example": "SUBRESOURCEID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Successful response. A successful response can return no matched data. Deleting resource."
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/workContactInformationChanges/{ID}/webAddresses/{subresourceID}",
    "method": "getWebAddress",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "workContactInformationChanges",
    "typeScriptTag": "workContactInformationChanges",
    "description": "A web address as it exists staged for update by the parent business process.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the resource.",
        "example": "ID"
      },
      {
        "name": "subresourceId",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the subresource.",
        "example": "SUBRESOURCEID"
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/workContactInformationChanges/{ID}/webAddresses/{subresourceID}",
    "method": "updateWebAddress",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "workContactInformationChanges",
    "typeScriptTag": "workContactInformationChanges",
    "description": "Partially update an existing web address that is staged for update by the parent business process event.\n\nSecured by: Person Data: Work Web Address, Self-Service: Work Web Address\n\nScope: Contact Information",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the resource.",
        "example": "ID"
      },
      {
        "name": "subresourceId",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the subresource.",
        "example": "SUBRESOURCEID"
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/people/{ID}/homeInstantMessengers/{subresourceID}",
    "method": "getHomeInstantMessengerUsername",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "people",
    "typeScriptTag": "people",
    "description": "Retrieves a home instant messenger account username.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the resource.",
        "example": "ID"
      },
      {
        "name": "subresourceId",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the subresource.",
        "example": "SUBRESOURCEID"
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/people/{ID}/workEmails/{subresourceID}",
    "method": "getWorkEmail",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "people",
    "typeScriptTag": "people",
    "description": "Retrieves a work email address.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the resource.",
        "example": "ID"
      },
      {
        "name": "subresourceId",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the subresource.",
        "example": "SUBRESOURCEID"
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/homeContactInformationChanges/{ID}/emailAddresses/{subresourceID}",
    "method": "removeEmailAddress",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "homeContactInformationChanges",
    "typeScriptTag": "homeContactInformationChanges",
    "description": "Remove the specified email address. If this address existed before the start of the current business process, it won't be removed from the target Person until the parent business process completes.\n\nSecured by: Person Data: Home Email, Self-Service: Home Email\n\nScope: Contact Information",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the resource.",
        "example": "ID"
      },
      {
        "name": "subresourceId",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the subresource.",
        "example": "SUBRESOURCEID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Successful response. A successful response can return no matched data. Deleting resource."
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/homeContactInformationChanges/{ID}/emailAddresses/{subresourceID}",
    "method": "getEmailAddress",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "homeContactInformationChanges",
    "typeScriptTag": "homeContactInformationChanges",
    "description": "An email address as it exists staged for update by the parent business process.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the resource.",
        "example": "ID"
      },
      {
        "name": "subresourceId",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the subresource.",
        "example": "SUBRESOURCEID"
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/homeContactInformationChanges/{ID}/emailAddresses/{subresourceID}",
    "method": "updateEmailAddress",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "homeContactInformationChanges",
    "typeScriptTag": "homeContactInformationChanges",
    "description": "Partially update an existing email address that is staged for update by the parent business process event.\n\nSecured by: Person Data: Home Email, Self-Service: Home Email\n\nScope: Contact Information",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the resource.",
        "example": "ID"
      },
      {
        "name": "subresourceId",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the subresource.",
        "example": "SUBRESOURCEID"
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/workContactInformationChanges/{ID}/phoneNumbers",
    "method": "getPhoneNumbers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "workContactInformationChanges",
    "typeScriptTag": "workContactInformationChanges",
    "description": "Retrieve all existing phone numbers staged for update by the parent business process",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the resource.",
        "example": "ID"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "The maximum number of objects in a single response. The default is 20. The maximum is 100."
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "The zero-based index of the first object in a response collection. The default is 0. Use offset with the limit parameter to control paging of a response collection. Example: If limit is 5 and offset is 9, the response returns a collection of 5 objects starting with the 10th object."
      },
      {
        "name": "primaryOnly",
        "schema": "boolean",
        "required": false,
        "description": "If true, returns only the IDs of the person's primary phone numbers."
      },
      {
        "name": "publicOnly",
        "schema": "boolean",
        "required": false,
        "description": "If true, returns only the IDs of the person's public phone numbers."
      },
      {
        "name": "usageType",
        "schema": "string",
        "required": false,
        "description": "Specifies usage type, such as home or work. Only used if the service provides access to multiple usage types from the same endpoint."
      },
      {
        "name": "usedFor",
        "schema": "string",
        "required": false,
        "description": "Specifies usage behavior, such as mailing, billing, or shipping.\nOptional."
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/workContactInformationChanges/{ID}/phoneNumbers",
    "method": "createPhoneNumber",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "workContactInformationChanges",
    "typeScriptTag": "workContactInformationChanges",
    "description": "Creates a new phone number staged by the parent business process event.\n\nSecured by: Person Data: Work Phone, Self-Service: Work Phone\n\nScope: Contact Information",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the resource.",
        "example": "ID"
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
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/workContactInformationChanges/{ID}/emailAddresses",
    "method": "getStagedEmailAddresses",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "workContactInformationChanges",
    "typeScriptTag": "workContactInformationChanges",
    "description": "Retrieve all existing addresses staged for update by the parent business process",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the resource.",
        "example": "ID"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "The maximum number of objects in a single response. The default is 20. The maximum is 100."
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "The zero-based index of the first object in a response collection. The default is 0. Use offset with the limit parameter to control paging of a response collection. Example: If limit is 5 and offset is 9, the response returns a collection of 5 objects starting with the 10th object."
      },
      {
        "name": "primaryOnly",
        "schema": "boolean",
        "required": false,
        "description": "If true, returns only the IDs of the person's primary email addresses."
      },
      {
        "name": "publicOnly",
        "schema": "boolean",
        "required": false,
        "description": "If true, returns only the IDs of the person's public email addresses."
      },
      {
        "name": "usageType",
        "schema": "string",
        "required": false,
        "description": "Specifies usage type, such as home or work. Only used if the service provides access to multiple usage types from the same endpoint."
      },
      {
        "name": "usedFor",
        "schema": "string",
        "required": false,
        "description": "Specifies usage behavior, such as mailing, billing, or shipping.\nOptional."
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/workContactInformationChanges/{ID}/emailAddresses",
    "method": "createEmailAddress",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "workContactInformationChanges",
    "typeScriptTag": "workContactInformationChanges",
    "description": "Creates a new email address staged by the parent business process event.\n\nSecured by: Person Data: Work Email, Self-Service: Work Email\n\nScope: Contact Information",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the resource.",
        "example": "ID"
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
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/people/{ID}/homeWebAddresses/{subresourceID}",
    "method": "getHomeWebAddress",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "people",
    "typeScriptTag": "people",
    "description": "Retrieves a home web address.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the resource.",
        "example": "ID"
      },
      {
        "name": "subresourceId",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the subresource.",
        "example": "SUBRESOURCEID"
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/workContactInformationChanges/{ID}/emailAddresses/{subresourceID}",
    "method": "removeEmailAddress",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "workContactInformationChanges",
    "typeScriptTag": "workContactInformationChanges",
    "description": "Remove the specified email address. If this address existed before the start of the current business process, it won't be removed from the target Person until the parent business process completes.\n\nSecured by: Person Data: Work Email, Self-Service: Work Email\n\nScope: Contact Information",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the resource.",
        "example": "ID"
      },
      {
        "name": "subresourceId",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the subresource.",
        "example": "SUBRESOURCEID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Successful response. A successful response can return no matched data. Deleting resource."
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/workContactInformationChanges/{ID}/emailAddresses/{subresourceID}",
    "method": "getEmailAddress",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "workContactInformationChanges",
    "typeScriptTag": "workContactInformationChanges",
    "description": "An email address as it exists staged for update by the parent business process.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the resource.",
        "example": "ID"
      },
      {
        "name": "subresourceId",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the subresource.",
        "example": "SUBRESOURCEID"
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/workContactInformationChanges/{ID}/emailAddresses/{subresourceID}",
    "method": "updateEmailAddress",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "workContactInformationChanges",
    "typeScriptTag": "workContactInformationChanges",
    "description": "Partially update an existing email address that is staged for update by the parent business process event.\n\nSecured by: Person Data: Work Email, Self-Service: Work Email\n\nScope: Contact Information",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the resource.",
        "example": "ID"
      },
      {
        "name": "subresourceId",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the subresource.",
        "example": "SUBRESOURCEID"
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/people/{ID}/homeInstantMessengers",
    "method": "getHomeInstantMessengers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "people",
    "typeScriptTag": "people",
    "description": "Retrieves a collection of home instant messenger account usernames.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the resource.",
        "example": "ID"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "The maximum number of objects in a single response. The default is 20. The maximum is 100."
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "The zero-based index of the first object in a response collection. The default is 0. Use offset with the limit parameter to control paging of a response collection. Example: If limit is 5 and offset is 9, the response returns a collection of 5 objects starting with the 10th object."
      },
      {
        "name": "primaryOnly",
        "schema": "boolean",
        "required": false,
        "description": "If true, returns only the IDs of the person's primary instant messenger account usernames."
      },
      {
        "name": "publicOnly",
        "schema": "boolean",
        "required": false,
        "description": "If true, returns only the IDs of the person's public instant messenger usernames."
      },
      {
        "name": "usedFor",
        "schema": "string",
        "required": false,
        "description": "Specifies usage behavior, such as mailing, billing, or shipping.\nOptional."
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/people/{ID}/homeEmails",
    "method": "getHomeEmails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "people",
    "typeScriptTag": "people",
    "description": "Retrieves a collection of home email addresses.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the resource.",
        "example": "ID"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "The maximum number of objects in a single response. The default is 20. The maximum is 100."
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "The zero-based index of the first object in a response collection. The default is 0. Use offset with the limit parameter to control paging of a response collection. Example: If limit is 5 and offset is 9, the response returns a collection of 5 objects starting with the 10th object."
      },
      {
        "name": "primaryOnly",
        "schema": "boolean",
        "required": false,
        "description": "If true, returns only the IDs of the person's primary email addresses."
      },
      {
        "name": "publicOnly",
        "schema": "boolean",
        "required": false,
        "description": "If true, returns only the IDs of the person's public email addresses."
      },
      {
        "name": "usedFor",
        "schema": "string",
        "required": false,
        "description": "Specifies usage behavior, such as mailing, billing, or shipping.\nOptional."
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/workContactInformationChanges/{ID}/webAddresses",
    "method": "getWebAddressesStaged",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "workContactInformationChanges",
    "typeScriptTag": "workContactInformationChanges",
    "description": "Retrieve all existing web addresses staged for update by the parent business process",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the resource.",
        "example": "ID"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "The maximum number of objects in a single response. The default is 20. The maximum is 100."
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "The zero-based index of the first object in a response collection. The default is 0. Use offset with the limit parameter to control paging of a response collection. Example: If limit is 5 and offset is 9, the response returns a collection of 5 objects starting with the 10th object."
      },
      {
        "name": "primaryOnly",
        "schema": "boolean",
        "required": false,
        "description": "If true, returns only the IDs of the person's primary web addresses."
      },
      {
        "name": "publicOnly",
        "schema": "boolean",
        "required": false,
        "description": "If true, returns only the IDs of the person's public web addresses."
      },
      {
        "name": "usageType",
        "schema": "string",
        "required": false,
        "description": "Specifies usage type, such as home or work. Only used if the service provides access to multiple usage types from the same endpoint."
      },
      {
        "name": "usedFor",
        "schema": "string",
        "required": false,
        "description": "Specifies usage behavior, such as mailing, billing, or shipping.\nOptional."
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/workContactInformationChanges/{ID}/webAddresses",
    "method": "createStagedWebAddress",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "workContactInformationChanges",
    "typeScriptTag": "workContactInformationChanges",
    "description": "Creates a new web address staged by the parent business process event.\n\nSecured by: Person Data: Work Web Address, Self-Service: Work Web Address\n\nScope: Contact Information",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the resource.",
        "example": "ID"
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
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/homeContactInformationChanges/{ID}/addresses/{subresourceID}",
    "method": "removeAddress",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "homeContactInformationChanges",
    "typeScriptTag": "homeContactInformationChanges",
    "description": "Remove the specified address. If this address existed before the start of the current business process, it won't be removed from the target Person until the parent business process completes.\n\nSecured by: Person Data: Home Address, Self-Service: Home Address\n\nScope: Contact Information",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the resource.",
        "example": "ID"
      },
      {
        "name": "subresourceId",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the subresource.",
        "example": "SUBRESOURCEID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Successful response. A successful response can return no matched data. Deleting resource."
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/homeContactInformationChanges/{ID}/addresses/{subresourceID}",
    "method": "getAddressAsStaged",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "homeContactInformationChanges",
    "typeScriptTag": "homeContactInformationChanges",
    "description": "An address as it exists staged for update by the parent business process.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the resource.",
        "example": "ID"
      },
      {
        "name": "subresourceId",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the subresource.",
        "example": "SUBRESOURCEID"
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/homeContactInformationChanges/{ID}/addresses/{subresourceID}",
    "method": "updateAddress",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "homeContactInformationChanges",
    "typeScriptTag": "homeContactInformationChanges",
    "description": "Update an existing address that is staged for update by the parent business process event.\n\nSecured by: Person Data: Home Address, Self-Service: Home Address\n\nScope: Contact Information",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the resource.",
        "example": "ID"
      },
      {
        "name": "subresourceId",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the subresource.",
        "example": "SUBRESOURCEID"
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/workContactInformationChanges/{ID}/addresses/{subresourceID}",
    "method": "removeAddress",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "workContactInformationChanges",
    "typeScriptTag": "workContactInformationChanges",
    "description": "Remove the specified address. If this address existed before the start of the current business process, it won't be removed from the target Person until the parent business process completes.\n\nSecured by: Person Data: Work Address, Self-Service: Work Address\n\nScope: Contact Information",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the resource.",
        "example": "ID"
      },
      {
        "name": "subresourceId",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the subresource.",
        "example": "SUBRESOURCEID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Successful response. A successful response can return no matched data. Deleting resource."
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/workContactInformationChanges/{ID}/addresses/{subresourceID}",
    "method": "getAddressAsStaged",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "workContactInformationChanges",
    "typeScriptTag": "workContactInformationChanges",
    "description": "An address as it exists staged for update by the parent business process.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the resource.",
        "example": "ID"
      },
      {
        "name": "subresourceId",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the subresource.",
        "example": "SUBRESOURCEID"
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/workContactInformationChanges/{ID}/addresses/{subresourceID}",
    "method": "updateAddress",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "workContactInformationChanges",
    "typeScriptTag": "workContactInformationChanges",
    "description": "Update an existing address that is staged for update by the parent business process event.\n\nSecured by: Person Data: Work Address, Self-Service: Work Address\n\nScope: Contact Information",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the resource.",
        "example": "ID"
      },
      {
        "name": "subresourceId",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the subresource.",
        "example": "SUBRESOURCEID"
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/workContactInformationChanges/{ID}/addresses",
    "method": "getAddressesStaged",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "workContactInformationChanges",
    "typeScriptTag": "workContactInformationChanges",
    "description": "Retrieve all existing addresses staged for update by the parent business process",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the resource.",
        "example": "ID"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "The maximum number of objects in a single response. The default is 20. The maximum is 100."
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "The zero-based index of the first object in a response collection. The default is 0. Use offset with the limit parameter to control paging of a response collection. Example: If limit is 5 and offset is 9, the response returns a collection of 5 objects starting with the 10th object."
      },
      {
        "name": "publicOnly",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "usedFor",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/workContactInformationChanges/{ID}/addresses",
    "method": "createAddress",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "workContactInformationChanges",
    "typeScriptTag": "workContactInformationChanges",
    "description": "Creates a new address staged by the parent business process event.\n\nSecured by: Person Data: Work Address, Self-Service: Work Address\n\nScope: Contact Information",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the resource.",
        "example": "ID"
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
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/countries",
    "method": "getCollectionInformation",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "countries",
    "typeScriptTag": "countries",
    "description": "Retrieves a collection of information about countries.",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "The maximum number of objects in a single response. The default is 20. The maximum is 100."
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "The zero-based index of the first object in a response collection. The default is 0. Use offset with the limit parameter to control paging of a response collection. Example: If limit is 5 and offset is 9, the response returns a collection of 5 objects starting with the 10th object."
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/values/nameComponents/hereditary",
    "method": "getHereditaryValues",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Prompt Values",
    "typeScriptTag": "promptValues",
    "description": "Retrieves instances that can be used as values for other endpoint parameters in this service.",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/values/nameComponents/religious",
    "method": "getInstances",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Prompt Values",
    "typeScriptTag": "promptValues",
    "description": "Retrieves instances that can be used as values for other endpoint parameters in this service.",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/values/nameComponents/honorary",
    "method": "getInstances",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Prompt Values",
    "typeScriptTag": "promptValues",
    "description": "Retrieves instances that can be used as values for other endpoint parameters in this service.",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/values/nameComponents/royal",
    "method": "getOptions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Prompt Values",
    "typeScriptTag": "promptValues",
    "description": "Retrieves instances that can be used as values for other endpoint parameters in this service.",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/values/nameComponents/title",
    "method": "getTitleComponents",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Prompt Values",
    "typeScriptTag": "promptValues",
    "description": "Retrieves instances that can be used as values for other endpoint parameters in this service.",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/values/commonPhone/countryPhoneCodes",
    "method": "getCountryPhoneCodes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Prompt Values",
    "typeScriptTag": "promptValues",
    "description": "Exposes prompting for country phone codes, which are used during the collection of phone numbers.",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/values/countryComponents/countryCity",
    "method": "getInstances",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Prompt Values",
    "typeScriptTag": "promptValues",
    "description": "Retrieves instances that can be used as values for other endpoint parameters in this service.",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/values/nameComponents/salutation",
    "method": "getOptions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Prompt Values",
    "typeScriptTag": "promptValues",
    "description": "Retrieves instances that can be used as values for other endpoint parameters in this service.",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/values/personalInformationCountry/populatedCountry",
    "method": "listCountryData",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Prompt Values",
    "typeScriptTag": "promptValues",
    "description": "The set of countries a person has populated with country specific data.",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/values/nameComponents/social",
    "method": "getInstances",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Prompt Values",
    "typeScriptTag": "promptValues",
    "description": "Retrieves instances that can be used as values for other endpoint parameters in this service.",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/values/nameComponents/professional",
    "method": "getOptions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Prompt Values",
    "typeScriptTag": "promptValues",
    "description": "Retrieves instances that can be used as values for other endpoint parameters in this service.",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/values/countryComponents/country",
    "method": "getInstances",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Prompt Values",
    "typeScriptTag": "promptValues",
    "description": "Retrieves instances that can be used as values for other endpoint parameters in this service.",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/values/nameComponents/academic",
    "method": "getInstances",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Prompt Values",
    "typeScriptTag": "promptValues",
    "description": "Retrieves instances that can be used as values for other endpoint parameters in this service.",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/values/personalInformationCountry/allowedCountry",
    "method": "getAllowedCountryData",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Prompt Values",
    "typeScriptTag": "promptValues",
    "description": "The set of countries a person is allowed to populated with country specific data.",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/values/countryComponents/countryRegion",
    "method": "getInstances",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Prompt Values",
    "typeScriptTag": "promptValues",
    "description": "Retrieves instances that can be used as values for other endpoint parameters in this service.",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/values/commonPhone/phoneDeviceTypes",
    "method": "getPhoneDeviceTypes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Prompt Values",
    "typeScriptTag": "promptValues",
    "description": "Exposes prompting for phone device types, which are used during the collection of phone numbers.",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  }
]
    }
      language="TypeScript"
      apiTitle="person"
      apiBaseUrl="https://<tenantHostname>/person/v4"
      apiVersion="v4"
      endpoints={81}
      sdkMethods={128}
      schemas={214}
      parameters={279}
      difficulty="Hard"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/workday/person/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/workday/person/openapi.yaml"
      developerDocumentation="community.workday.com/sites/default/files/file-hosting/restapi"
    />
  );
}
  