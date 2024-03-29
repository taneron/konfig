import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function EdgeTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="edge-typescript-sdk"
      metaDescription={`We are building the gold standard in online payment infrastructure for merchants mis-labeled as high-risk.`}
      company="Edge"
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/edge/logo.jpg"
      companyKebabCase="edge"
      clientNameCamelCase="edge"
      homepage="tryedge.io"
      lastUpdated={new Date("2024-03-29T20:19:21.743Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/edge/favicon.png"
      contactUrl="https://www.tryedge.io/contact"
      contactEmail="support@tryedge.io"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/edge/imagePreview.png"
      GettingStarted={GettingStarted}
      FirstRequest={FirstRequest}
      categories={["online_payments","financial_data_management"]}
      methods={[
  {
    "url": "/attachments/{id}",
    "method": "showIndividualAttachment",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Attachments",
    "typeScriptTag": "attachments",
    "description": "Show",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "32e46c03-a4e1-53e7-93e4-936fad0196a1"
      },
      {
        "name": "fields[records]",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "id",
          "created_at",
          "updated_at"
        ]
      },
      {
        "name": "include",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "a",
          "a.b",
          "c",
          "c.d.e"
        ]
      }
    ],
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
        "statusCode": "406",
        "description": "Not Acceptable"
      }
    ]
  },
  {
    "url": "/charges",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Charges",
    "typeScriptTag": "charges",
    "description": "List of Charges",
    "parameters": [
      {
        "name": "fields[events]",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "id",
          "created_at",
          "updated_at"
        ]
      },
      {
        "name": "fields[merchantAccounts]",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "id",
          "created_at",
          "updated_at"
        ]
      },
      {
        "name": "fields[customers]",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "id",
          "created_at",
          "updated_at"
        ]
      },
      {
        "name": "fields[paymentMethods]",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "id",
          "created_at",
          "updated_at"
        ]
      },
      {
        "name": "fields[billingAddresses]",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "id",
          "created_at",
          "updated_at"
        ]
      },
      {
        "name": "fields[subscriptions]",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "id",
          "created_at",
          "updated_at"
        ]
      },
      {
        "name": "fields[shippingAddresses]",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "id",
          "created_at",
          "updated_at"
        ]
      },
      {
        "name": "include",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "a",
          "a.b",
          "c",
          "c.d.e"
        ]
      },
      {
        "name": "filter[amountCents]",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "filter[captured]",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "filter[currency]",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "filter[description]",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "filter[feeCents]",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "filter[gatewayFeeCents]",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "filter[netCents]",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "filter[processorState]",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "filter[refundAmountCents]",
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
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "406",
        "description": "Not Acceptable"
      }
    ]
  },
  {
    "url": "/charges",
    "method": "createNewCharge",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Charges",
    "typeScriptTag": "charges",
    "description": "Create",
    "parameters": [
      {
        "name": "fields[events]",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "id",
          "created_at",
          "updated_at"
        ]
      },
      {
        "name": "fields[merchantAccounts]",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "id",
          "created_at",
          "updated_at"
        ]
      },
      {
        "name": "fields[customers]",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "id",
          "created_at",
          "updated_at"
        ]
      },
      {
        "name": "fields[paymentMethods]",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "id",
          "created_at",
          "updated_at"
        ]
      },
      {
        "name": "fields[billingAddresses]",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "id",
          "created_at",
          "updated_at"
        ]
      },
      {
        "name": "fields[subscriptions]",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "id",
          "created_at",
          "updated_at"
        ]
      },
      {
        "name": "fields[shippingAddresses]",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "id",
          "created_at",
          "updated_at"
        ]
      },
      {
        "name": "include",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "a",
          "a.b",
          "c",
          "c.d.e"
        ]
      },
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
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "406",
        "description": "Not Acceptable"
      },
      {
        "statusCode": "415",
        "description": "Unsupported Media Type"
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/charges/{id}",
    "method": "showIndividualCharge",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Charges",
    "typeScriptTag": "charges",
    "description": "Show",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "32e46c03-a4e1-53e7-93e4-936fad0196a1"
      },
      {
        "name": "fields[events]",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "id",
          "created_at",
          "updated_at"
        ]
      },
      {
        "name": "fields[merchantAccounts]",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "id",
          "created_at",
          "updated_at"
        ]
      },
      {
        "name": "fields[customers]",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "id",
          "created_at",
          "updated_at"
        ]
      },
      {
        "name": "fields[paymentMethods]",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "id",
          "created_at",
          "updated_at"
        ]
      },
      {
        "name": "fields[billingAddresses]",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "id",
          "created_at",
          "updated_at"
        ]
      },
      {
        "name": "fields[subscriptions]",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "id",
          "created_at",
          "updated_at"
        ]
      },
      {
        "name": "fields[shippingAddresses]",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "id",
          "created_at",
          "updated_at"
        ]
      },
      {
        "name": "include",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "a",
          "a.b",
          "c",
          "c.d.e"
        ]
      }
    ],
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
        "statusCode": "406",
        "description": "Not Acceptable"
      }
    ]
  },
  {
    "url": "/consumer_addresses",
    "method": "listGetAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Consumer Addresses",
    "typeScriptTag": "consumerAddresses",
    "description": "List of Consumer Addresses",
    "parameters": [
      {
        "name": "fields[merchantAccounts]",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "id",
          "created_at",
          "updated_at"
        ]
      },
      {
        "name": "include",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "a",
          "a.b",
          "c",
          "c.d.e"
        ]
      },
      {
        "name": "filter[city]",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "filter[country]",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "filter[line1]",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "filter[line2]",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "filter[state]",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "filter[zip]",
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
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "406",
        "description": "Not Acceptable"
      }
    ]
  },
  {
    "url": "/consumer_addresses",
    "method": "createNewAddress",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Consumer Addresses",
    "typeScriptTag": "consumerAddresses",
    "description": "Create",
    "parameters": [
      {
        "name": "fields[merchantAccounts]",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "id",
          "created_at",
          "updated_at"
        ]
      },
      {
        "name": "include",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "a",
          "a.b",
          "c",
          "c.d.e"
        ]
      },
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
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "406",
        "description": "Not Acceptable"
      },
      {
        "statusCode": "415",
        "description": "Unsupported Media Type"
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/consumer_addresses/{id}",
    "method": "showIndividualAddress",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Consumer Addresses",
    "typeScriptTag": "consumerAddresses",
    "description": "Show",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "32e46c03-a4e1-53e7-93e4-936fad0196a1"
      },
      {
        "name": "fields[merchantAccounts]",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "id",
          "created_at",
          "updated_at"
        ]
      },
      {
        "name": "include",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "a",
          "a.b",
          "c",
          "c.d.e"
        ]
      }
    ],
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
        "statusCode": "406",
        "description": "Not Acceptable"
      }
    ]
  },
  {
    "url": "/customers",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Customers",
    "typeScriptTag": "customers",
    "description": "List of Customers",
    "parameters": [
      {
        "name": "fields[events]",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "id",
          "created_at",
          "updated_at"
        ]
      },
      {
        "name": "fields[charges]",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "id",
          "created_at",
          "updated_at"
        ]
      },
      {
        "name": "fields[paymentMethods]",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "id",
          "created_at",
          "updated_at"
        ]
      },
      {
        "name": "fields[subscriptions]",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "id",
          "created_at",
          "updated_at"
        ]
      },
      {
        "name": "fields[merchantAccounts]",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "id",
          "created_at",
          "updated_at"
        ]
      },
      {
        "name": "fields[addresses]",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "id",
          "created_at",
          "updated_at"
        ]
      },
      {
        "name": "include",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "a",
          "a.b",
          "c",
          "c.d.e"
        ]
      },
      {
        "name": "filter[description]",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "filter[email]",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "filter[name]",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "filter[phoneNumber]",
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
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "406",
        "description": "Not Acceptable"
      }
    ]
  },
  {
    "url": "/customers",
    "method": "createNewCustomer",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Customers",
    "typeScriptTag": "customers",
    "description": "Create",
    "parameters": [
      {
        "name": "fields[events]",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "id",
          "created_at",
          "updated_at"
        ]
      },
      {
        "name": "fields[charges]",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "id",
          "created_at",
          "updated_at"
        ]
      },
      {
        "name": "fields[paymentMethods]",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "id",
          "created_at",
          "updated_at"
        ]
      },
      {
        "name": "fields[subscriptions]",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "id",
          "created_at",
          "updated_at"
        ]
      },
      {
        "name": "fields[merchantAccounts]",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "id",
          "created_at",
          "updated_at"
        ]
      },
      {
        "name": "fields[addresses]",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "id",
          "created_at",
          "updated_at"
        ]
      },
      {
        "name": "include",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "a",
          "a.b",
          "c",
          "c.d.e"
        ]
      },
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
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "406",
        "description": "Not Acceptable"
      },
      {
        "statusCode": "415",
        "description": "Unsupported Media Type"
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/customers/{id}",
    "method": "showIndividualCustomer",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Customers",
    "typeScriptTag": "customers",
    "description": "Show",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "32e46c03-a4e1-53e7-93e4-936fad0196a1"
      },
      {
        "name": "fields[events]",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "id",
          "created_at",
          "updated_at"
        ]
      },
      {
        "name": "fields[charges]",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "id",
          "created_at",
          "updated_at"
        ]
      },
      {
        "name": "fields[paymentMethods]",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "id",
          "created_at",
          "updated_at"
        ]
      },
      {
        "name": "fields[subscriptions]",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "id",
          "created_at",
          "updated_at"
        ]
      },
      {
        "name": "fields[merchantAccounts]",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "id",
          "created_at",
          "updated_at"
        ]
      },
      {
        "name": "fields[addresses]",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "id",
          "created_at",
          "updated_at"
        ]
      },
      {
        "name": "include",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "a",
          "a.b",
          "c",
          "c.d.e"
        ]
      }
    ],
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
        "statusCode": "406",
        "description": "Not Acceptable"
      }
    ]
  },
  {
    "url": "/customers/{id}",
    "method": "updateExistingCustomer",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Customers",
    "typeScriptTag": "customers",
    "description": "Update",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "32e46c03-a4e1-53e7-93e4-936fad0196a1"
      },
      {
        "name": "fields[events]",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "id",
          "created_at",
          "updated_at"
        ]
      },
      {
        "name": "fields[charges]",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "id",
          "created_at",
          "updated_at"
        ]
      },
      {
        "name": "fields[paymentMethods]",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "id",
          "created_at",
          "updated_at"
        ]
      },
      {
        "name": "fields[subscriptions]",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "id",
          "created_at",
          "updated_at"
        ]
      },
      {
        "name": "fields[merchantAccounts]",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "id",
          "created_at",
          "updated_at"
        ]
      },
      {
        "name": "fields[addresses]",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "id",
          "created_at",
          "updated_at"
        ]
      },
      {
        "name": "include",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "a",
          "a.b",
          "c",
          "c.d.e"
        ]
      },
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
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      },
      {
        "statusCode": "406",
        "description": "Not Acceptable"
      }
    ]
  },
  {
    "url": "/events",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Events",
    "typeScriptTag": "events",
    "description": "List of Events",
    "parameters": [
      {
        "name": "fields[merchantAccounts]",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "id",
          "created_at",
          "updated_at"
        ]
      },
      {
        "name": "fields[resources]",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "id",
          "created_at",
          "updated_at"
        ]
      },
      {
        "name": "include",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "a",
          "a.b",
          "c",
          "c.d.e"
        ]
      },
      {
        "name": "filter[code]",
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
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "406",
        "description": "Not Acceptable"
      }
    ]
  },
  {
    "url": "/events/{id}",
    "method": "showIndividualEvent",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Events",
    "typeScriptTag": "events",
    "description": "Show",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "32e46c03-a4e1-53e7-93e4-936fad0196a1"
      },
      {
        "name": "fields[merchantAccounts]",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "id",
          "created_at",
          "updated_at"
        ]
      },
      {
        "name": "fields[resources]",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "id",
          "created_at",
          "updated_at"
        ]
      },
      {
        "name": "include",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "a",
          "a.b",
          "c",
          "c.d.e"
        ]
      }
    ],
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
        "statusCode": "406",
        "description": "Not Acceptable"
      }
    ]
  },
  {
    "url": "/legal_addresses",
    "method": "listAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Legal Addresses",
    "typeScriptTag": "legalAddresses",
    "description": "List of Legal Addresses",
    "parameters": [
      {
        "name": "include",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "a",
          "a.b",
          "c",
          "c.d.e"
        ]
      },
      {
        "name": "filter[city]",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "filter[country]",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "filter[line1]",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "filter[line2]",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "filter[state]",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "filter[zip]",
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
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "406",
        "description": "Not Acceptable"
      }
    ]
  },
  {
    "url": "/legal_addresses",
    "method": "createNew",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Legal Addresses",
    "typeScriptTag": "legalAddresses",
    "description": "Create",
    "parameters": [
      {
        "name": "include",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "a",
          "a.b",
          "c",
          "c.d.e"
        ]
      },
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
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "406",
        "description": "Not Acceptable"
      },
      {
        "statusCode": "415",
        "description": "Unsupported Media Type"
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/legal_addresses/{id}",
    "method": "showIndividual",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Legal Addresses",
    "typeScriptTag": "legalAddresses",
    "description": "Show",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "32e46c03-a4e1-53e7-93e4-936fad0196a1"
      },
      {
        "name": "include",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "a",
          "a.b",
          "c",
          "c.d.e"
        ]
      }
    ],
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
        "statusCode": "406",
        "description": "Not Acceptable"
      }
    ]
  },
  {
    "url": "/legal_addresses/{id}",
    "method": "updateExistingAddress",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Legal Addresses",
    "typeScriptTag": "legalAddresses",
    "description": "Update",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "32e46c03-a4e1-53e7-93e4-936fad0196a1"
      },
      {
        "name": "include",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "a",
          "a.b",
          "c",
          "c.d.e"
        ]
      },
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
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      },
      {
        "statusCode": "406",
        "description": "Not Acceptable"
      }
    ]
  },
  {
    "url": "/merchant_accounts",
    "method": "listAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Merchant Accounts",
    "typeScriptTag": "merchantAccounts",
    "description": "List of Merchant Accounts",
    "parameters": [
      {
        "name": "fields[consumerAddresses]",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "id",
          "created_at",
          "updated_at"
        ]
      },
      {
        "name": "fields[customers]",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "id",
          "created_at",
          "updated_at"
        ]
      },
      {
        "name": "fields[events]",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "id",
          "created_at",
          "updated_at"
        ]
      },
      {
        "name": "fields[payouts]",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "id",
          "created_at",
          "updated_at"
        ]
      },
      {
        "name": "fields[paymentMethods]",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "id",
          "created_at",
          "updated_at"
        ]
      },
      {
        "name": "fields[charges]",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "id",
          "created_at",
          "updated_at"
        ]
      },
      {
        "name": "fields[subscriptions]",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "id",
          "created_at",
          "updated_at"
        ]
      },
      {
        "name": "fields[webhookSubscriptions]",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "id",
          "created_at",
          "updated_at"
        ]
      },
      {
        "name": "fields[payoutMethods]",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "id",
          "created_at",
          "updated_at"
        ]
      },
      {
        "name": "include",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "a",
          "a.b",
          "c",
          "c.d.e"
        ]
      },
      {
        "name": "filter[averageMonthlyTransactionVolumeCents]",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "filter[averageTransactionSizeCents]",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "filter[businessAddress]",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "filter[businessAddressLine2]",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "filter[businessCityName]",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "filter[businessCountry]",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "filter[businessDescription]",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "filter[businessName]",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "filter[businessPrivacyUrl]",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "filter[businessState]",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "filter[businessSupportEmail]",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "filter[businessSupportUrl]",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "filter[businessTermsUrl]",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "filter[businessTimezone]",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "filter[businessWebsite]",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "filter[businessZipCode]",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "filter[maxTransactionSizeCents]",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "filter[phoneNumber]",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "filter[publicBusinessName]",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "filter[shortenedDescriptor]",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "filter[statementDescriptor]",
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
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "406",
        "description": "Not Acceptable"
      }
    ]
  },
  {
    "url": "/merchant_accounts/{id}",
    "method": "showIndividual",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Merchant Accounts",
    "typeScriptTag": "merchantAccounts",
    "description": "Show",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "32e46c03-a4e1-53e7-93e4-936fad0196a1"
      },
      {
        "name": "fields[consumerAddresses]",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "id",
          "created_at",
          "updated_at"
        ]
      },
      {
        "name": "fields[customers]",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "id",
          "created_at",
          "updated_at"
        ]
      },
      {
        "name": "fields[events]",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "id",
          "created_at",
          "updated_at"
        ]
      },
      {
        "name": "fields[payouts]",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "id",
          "created_at",
          "updated_at"
        ]
      },
      {
        "name": "fields[paymentMethods]",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "id",
          "created_at",
          "updated_at"
        ]
      },
      {
        "name": "fields[charges]",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "id",
          "created_at",
          "updated_at"
        ]
      },
      {
        "name": "fields[subscriptions]",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "id",
          "created_at",
          "updated_at"
        ]
      },
      {
        "name": "fields[webhookSubscriptions]",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "id",
          "created_at",
          "updated_at"
        ]
      },
      {
        "name": "fields[payoutMethods]",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "id",
          "created_at",
          "updated_at"
        ]
      },
      {
        "name": "include",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "a",
          "a.b",
          "c",
          "c.d.e"
        ]
      }
    ],
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
        "statusCode": "406",
        "description": "Not Acceptable"
      }
    ]
  },
  {
    "url": "/merchant_accounts/{id}",
    "method": "updateExistingAccount",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Merchant Accounts",
    "typeScriptTag": "merchantAccounts",
    "description": "Update",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "32e46c03-a4e1-53e7-93e4-936fad0196a1"
      },
      {
        "name": "fields[consumerAddresses]",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "id",
          "created_at",
          "updated_at"
        ]
      },
      {
        "name": "fields[customers]",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "id",
          "created_at",
          "updated_at"
        ]
      },
      {
        "name": "fields[events]",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "id",
          "created_at",
          "updated_at"
        ]
      },
      {
        "name": "fields[payouts]",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "id",
          "created_at",
          "updated_at"
        ]
      },
      {
        "name": "fields[paymentMethods]",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "id",
          "created_at",
          "updated_at"
        ]
      },
      {
        "name": "fields[charges]",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "id",
          "created_at",
          "updated_at"
        ]
      },
      {
        "name": "fields[subscriptions]",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "id",
          "created_at",
          "updated_at"
        ]
      },
      {
        "name": "fields[webhookSubscriptions]",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "id",
          "created_at",
          "updated_at"
        ]
      },
      {
        "name": "fields[payoutMethods]",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "id",
          "created_at",
          "updated_at"
        ]
      },
      {
        "name": "include",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "a",
          "a.b",
          "c",
          "c.d.e"
        ]
      },
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
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      },
      {
        "statusCode": "406",
        "description": "Not Acceptable"
      }
    ]
  },
  {
    "url": "/payment_methods",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Payment Methods",
    "typeScriptTag": "paymentMethods",
    "description": "List of Payment Methods",
    "parameters": [
      {
        "name": "fields[charges]",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "id",
          "created_at",
          "updated_at"
        ]
      },
      {
        "name": "fields[customers]",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "id",
          "created_at",
          "updated_at"
        ]
      },
      {
        "name": "fields[merchantAccounts]",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "id",
          "created_at",
          "updated_at"
        ]
      },
      {
        "name": "fields[addresses]",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "id",
          "created_at",
          "updated_at"
        ]
      },
      {
        "name": "include",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "a",
          "a.b",
          "c",
          "c.d.e"
        ]
      },
      {
        "name": "filter[cardBin]",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "filter[cardCvvToken]",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "filter[cardLastFour]",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "filter[cardPanToken]",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "filter[description]",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "filter[externalState]",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "filter[kind]",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "filter[name]",
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
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "406",
        "description": "Not Acceptable"
      }
    ]
  },
  {
    "url": "/payment_methods",
    "method": "createNewMethod",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Payment Methods",
    "typeScriptTag": "paymentMethods",
    "description": "Create",
    "parameters": [
      {
        "name": "fields[charges]",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "id",
          "created_at",
          "updated_at"
        ]
      },
      {
        "name": "fields[customers]",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "id",
          "created_at",
          "updated_at"
        ]
      },
      {
        "name": "fields[merchantAccounts]",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "id",
          "created_at",
          "updated_at"
        ]
      },
      {
        "name": "fields[addresses]",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "id",
          "created_at",
          "updated_at"
        ]
      },
      {
        "name": "include",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "a",
          "a.b",
          "c",
          "c.d.e"
        ]
      },
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
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "406",
        "description": "Not Acceptable"
      },
      {
        "statusCode": "415",
        "description": "Unsupported Media Type"
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/payment_methods/{id}",
    "method": "showIndividual",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Payment Methods",
    "typeScriptTag": "paymentMethods",
    "description": "Show",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "32e46c03-a4e1-53e7-93e4-936fad0196a1"
      },
      {
        "name": "fields[charges]",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "id",
          "created_at",
          "updated_at"
        ]
      },
      {
        "name": "fields[customers]",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "id",
          "created_at",
          "updated_at"
        ]
      },
      {
        "name": "fields[merchantAccounts]",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "id",
          "created_at",
          "updated_at"
        ]
      },
      {
        "name": "fields[addresses]",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "id",
          "created_at",
          "updated_at"
        ]
      },
      {
        "name": "include",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "a",
          "a.b",
          "c",
          "c.d.e"
        ]
      }
    ],
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
        "statusCode": "406",
        "description": "Not Acceptable"
      }
    ]
  },
  {
    "url": "/payout_methods",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Payout Methods",
    "typeScriptTag": "payoutMethods",
    "description": "List of Payout Methods",
    "parameters": [
      {
        "name": "fields[payouts]",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "id",
          "created_at",
          "updated_at"
        ]
      },
      {
        "name": "fields[merchantAccounts]",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "id",
          "created_at",
          "updated_at"
        ]
      },
      {
        "name": "include",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "a",
          "a.b",
          "c",
          "c.d.e"
        ]
      },
      {
        "name": "filter[accountNumber]",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "filter[accountType]",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "filter[institutionName]",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "filter[payoutMethodType]",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "filter[routingNumber]",
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
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "406",
        "description": "Not Acceptable"
      }
    ]
  },
  {
    "url": "/payout_methods",
    "method": "createNew",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Payout Methods",
    "typeScriptTag": "payoutMethods",
    "description": "Create",
    "parameters": [
      {
        "name": "fields[payouts]",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "id",
          "created_at",
          "updated_at"
        ]
      },
      {
        "name": "fields[merchantAccounts]",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "id",
          "created_at",
          "updated_at"
        ]
      },
      {
        "name": "include",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "a",
          "a.b",
          "c",
          "c.d.e"
        ]
      },
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
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "406",
        "description": "Not Acceptable"
      },
      {
        "statusCode": "415",
        "description": "Unsupported Media Type"
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/payout_methods/{id}",
    "method": "showIndividual",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Payout Methods",
    "typeScriptTag": "payoutMethods",
    "description": "Show",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "32e46c03-a4e1-53e7-93e4-936fad0196a1"
      },
      {
        "name": "fields[payouts]",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "id",
          "created_at",
          "updated_at"
        ]
      },
      {
        "name": "fields[merchantAccounts]",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "id",
          "created_at",
          "updated_at"
        ]
      },
      {
        "name": "include",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "a",
          "a.b",
          "c",
          "c.d.e"
        ]
      }
    ],
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
        "statusCode": "406",
        "description": "Not Acceptable"
      }
    ]
  },
  {
    "url": "/payouts",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Payouts",
    "typeScriptTag": "payouts",
    "description": "List of Payouts",
    "parameters": [
      {
        "name": "fields[payoutMethods]",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "id",
          "created_at",
          "updated_at"
        ]
      },
      {
        "name": "fields[merchantAccounts]",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "id",
          "created_at",
          "updated_at"
        ]
      },
      {
        "name": "include",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "a",
          "a.b",
          "c",
          "c.d.e"
        ]
      },
      {
        "name": "filter[amountCents]",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "filter[amountCurrency]",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "filter[feeCents]",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "filter[feeCurrency]",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "filter[netAmountCents]",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "filter[netAmountCurrency]",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "filter[processorState]",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "filter[transferCreditType]",
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
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "406",
        "description": "Not Acceptable"
      }
    ]
  },
  {
    "url": "/payouts",
    "method": "createNewPayout",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Payouts",
    "typeScriptTag": "payouts",
    "description": "Create",
    "parameters": [
      {
        "name": "fields[payoutMethods]",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "id",
          "created_at",
          "updated_at"
        ]
      },
      {
        "name": "fields[merchantAccounts]",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "id",
          "created_at",
          "updated_at"
        ]
      },
      {
        "name": "include",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "a",
          "a.b",
          "c",
          "c.d.e"
        ]
      },
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
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "406",
        "description": "Not Acceptable"
      },
      {
        "statusCode": "415",
        "description": "Unsupported Media Type"
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/payouts/{id}",
    "method": "getIndividualPayout",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Payouts",
    "typeScriptTag": "payouts",
    "description": "Show",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "32e46c03-a4e1-53e7-93e4-936fad0196a1"
      },
      {
        "name": "fields[payoutMethods]",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "id",
          "created_at",
          "updated_at"
        ]
      },
      {
        "name": "fields[merchantAccounts]",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "id",
          "created_at",
          "updated_at"
        ]
      },
      {
        "name": "include",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "a",
          "a.b",
          "c",
          "c.d.e"
        ]
      }
    ],
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
        "statusCode": "406",
        "description": "Not Acceptable"
      }
    ]
  },
  {
    "url": "/subscriptions",
    "method": "listGetAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Subscriptions",
    "typeScriptTag": "subscriptions",
    "description": "List of Subscriptions",
    "parameters": [
      {
        "name": "fields[events]",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "id",
          "created_at",
          "updated_at"
        ]
      },
      {
        "name": "fields[charges]",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "id",
          "created_at",
          "updated_at"
        ]
      },
      {
        "name": "fields[merchantAccounts]",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "id",
          "created_at",
          "updated_at"
        ]
      },
      {
        "name": "fields[customers]",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "id",
          "created_at",
          "updated_at"
        ]
      },
      {
        "name": "fields[paymentMethods]",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "id",
          "created_at",
          "updated_at"
        ]
      },
      {
        "name": "include",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "a",
          "a.b",
          "c",
          "c.d.e"
        ]
      },
      {
        "name": "filter[amountCents]",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "filter[amountCurrency]",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "filter[billingPeriod]",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "filter[description]",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "filter[nextBillingDay]",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "filter[status]",
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
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "406",
        "description": "Not Acceptable"
      }
    ]
  },
  {
    "url": "/subscriptions",
    "method": "createNew",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Subscriptions",
    "typeScriptTag": "subscriptions",
    "description": "Create",
    "parameters": [
      {
        "name": "fields[events]",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "id",
          "created_at",
          "updated_at"
        ]
      },
      {
        "name": "fields[charges]",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "id",
          "created_at",
          "updated_at"
        ]
      },
      {
        "name": "fields[merchantAccounts]",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "id",
          "created_at",
          "updated_at"
        ]
      },
      {
        "name": "fields[customers]",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "id",
          "created_at",
          "updated_at"
        ]
      },
      {
        "name": "fields[paymentMethods]",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "id",
          "created_at",
          "updated_at"
        ]
      },
      {
        "name": "include",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "a",
          "a.b",
          "c",
          "c.d.e"
        ]
      },
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
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "406",
        "description": "Not Acceptable"
      },
      {
        "statusCode": "415",
        "description": "Unsupported Media Type"
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/subscriptions/{id}",
    "method": "showIndividual",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Subscriptions",
    "typeScriptTag": "subscriptions",
    "description": "Show",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "32e46c03-a4e1-53e7-93e4-936fad0196a1"
      },
      {
        "name": "fields[events]",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "id",
          "created_at",
          "updated_at"
        ]
      },
      {
        "name": "fields[charges]",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "id",
          "created_at",
          "updated_at"
        ]
      },
      {
        "name": "fields[merchantAccounts]",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "id",
          "created_at",
          "updated_at"
        ]
      },
      {
        "name": "fields[customers]",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "id",
          "created_at",
          "updated_at"
        ]
      },
      {
        "name": "fields[paymentMethods]",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "id",
          "created_at",
          "updated_at"
        ]
      },
      {
        "name": "include",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "a",
          "a.b",
          "c",
          "c.d.e"
        ]
      }
    ],
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
        "statusCode": "406",
        "description": "Not Acceptable"
      }
    ]
  },
  {
    "url": "/subscriptions/{id}",
    "method": "updateExistingSubscription",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Subscriptions",
    "typeScriptTag": "subscriptions",
    "description": "Update",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "32e46c03-a4e1-53e7-93e4-936fad0196a1"
      },
      {
        "name": "fields[events]",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "id",
          "created_at",
          "updated_at"
        ]
      },
      {
        "name": "fields[charges]",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "id",
          "created_at",
          "updated_at"
        ]
      },
      {
        "name": "fields[merchantAccounts]",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "id",
          "created_at",
          "updated_at"
        ]
      },
      {
        "name": "fields[customers]",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "id",
          "created_at",
          "updated_at"
        ]
      },
      {
        "name": "fields[paymentMethods]",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "id",
          "created_at",
          "updated_at"
        ]
      },
      {
        "name": "include",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "a",
          "a.b",
          "c",
          "c.d.e"
        ]
      },
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
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      },
      {
        "statusCode": "406",
        "description": "Not Acceptable"
      }
    ]
  },
  {
    "url": "/users",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "List of Users",
    "parameters": [
      {
        "name": "fields[merchantAccounts]",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "id",
          "created_at",
          "updated_at"
        ]
      },
      {
        "name": "include",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "a",
          "a.b",
          "c",
          "c.d.e"
        ]
      },
      {
        "name": "filter[accountStatus]",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "filter[email]",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "filter[firstName]",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "filter[jobTitle]",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "filter[lastName]",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "filter[phoneNumber]",
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
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "406",
        "description": "Not Acceptable"
      }
    ]
  },
  {
    "url": "/users/{id}",
    "method": "showIndividualUser",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Show",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "32e46c03-a4e1-53e7-93e4-936fad0196a1"
      },
      {
        "name": "fields[merchantAccounts]",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "id",
          "created_at",
          "updated_at"
        ]
      },
      {
        "name": "include",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "a",
          "a.b",
          "c",
          "c.d.e"
        ]
      }
    ],
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
        "statusCode": "406",
        "description": "Not Acceptable"
      }
    ]
  },
  {
    "url": "/users/{id}",
    "method": "updateUserDetails",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Update",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "32e46c03-a4e1-53e7-93e4-936fad0196a1"
      },
      {
        "name": "fields[merchantAccounts]",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "id",
          "created_at",
          "updated_at"
        ]
      },
      {
        "name": "include",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "a",
          "a.b",
          "c",
          "c.d.e"
        ]
      },
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
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      },
      {
        "statusCode": "406",
        "description": "Not Acceptable"
      }
    ]
  },
  {
    "url": "/webhook_subscriptions",
    "method": "listAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Webhook Subscriptions",
    "typeScriptTag": "webhookSubscriptions",
    "description": "List of Webhook Subscriptions",
    "parameters": [
      {
        "name": "fields[events]",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "id",
          "created_at",
          "updated_at"
        ]
      },
      {
        "name": "fields[merchantAccounts]",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "id",
          "created_at",
          "updated_at"
        ]
      },
      {
        "name": "include",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "a",
          "a.b",
          "c",
          "c.d.e"
        ]
      },
      {
        "name": "filter[active]",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "filter[concurrencyLimit]",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "filter[description]",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "filter[url]",
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
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "406",
        "description": "Not Acceptable"
      }
    ]
  },
  {
    "url": "/webhook_subscriptions",
    "method": "createNewSubscription",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Webhook Subscriptions",
    "typeScriptTag": "webhookSubscriptions",
    "description": "Create",
    "parameters": [
      {
        "name": "fields[events]",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "id",
          "created_at",
          "updated_at"
        ]
      },
      {
        "name": "fields[merchantAccounts]",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "id",
          "created_at",
          "updated_at"
        ]
      },
      {
        "name": "include",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "a",
          "a.b",
          "c",
          "c.d.e"
        ]
      },
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
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "406",
        "description": "Not Acceptable"
      },
      {
        "statusCode": "415",
        "description": "Unsupported Media Type"
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/webhook_subscriptions/{id}",
    "method": "destroySubscription",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Webhook Subscriptions",
    "typeScriptTag": "webhookSubscriptions",
    "description": "Destroy",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "32e46c03-a4e1-53e7-93e4-936fad0196a1"
      },
      {
        "name": "fields[events]",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "id",
          "created_at",
          "updated_at"
        ]
      },
      {
        "name": "fields[merchantAccounts]",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "id",
          "created_at",
          "updated_at"
        ]
      },
      {
        "name": "include",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "a",
          "a.b",
          "c",
          "c.d.e"
        ]
      }
    ],
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
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      },
      {
        "statusCode": "406",
        "description": "Not Acceptable"
      }
    ]
  },
  {
    "url": "/webhook_subscriptions/{id}",
    "method": "showIndividual",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Webhook Subscriptions",
    "typeScriptTag": "webhookSubscriptions",
    "description": "Show",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "32e46c03-a4e1-53e7-93e4-936fad0196a1"
      },
      {
        "name": "fields[events]",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "id",
          "created_at",
          "updated_at"
        ]
      },
      {
        "name": "fields[merchantAccounts]",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "id",
          "created_at",
          "updated_at"
        ]
      },
      {
        "name": "include",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "a",
          "a.b",
          "c",
          "c.d.e"
        ]
      }
    ],
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
        "statusCode": "406",
        "description": "Not Acceptable"
      }
    ]
  },
  {
    "url": "/webhook_subscriptions/{id}",
    "method": "updateExistingSubscription",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Webhook Subscriptions",
    "typeScriptTag": "webhookSubscriptions",
    "description": "Update",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "32e46c03-a4e1-53e7-93e4-936fad0196a1"
      },
      {
        "name": "fields[events]",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "id",
          "created_at",
          "updated_at"
        ]
      },
      {
        "name": "fields[merchantAccounts]",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "id",
          "created_at",
          "updated_at"
        ]
      },
      {
        "name": "include",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "a",
          "a.b",
          "c",
          "c.d.e"
        ]
      },
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
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      },
      {
        "statusCode": "406",
        "description": "Not Acceptable"
      }
    ]
  }
]
    }
      language="TypeScript"
      apiTitle="Edge API"
      apiBaseUrl="https://{apiHost}"
      apiVersion="v1"
      endpoints={25}
      sdkMethods={41}
      schemas={55}
      parameters={297}
      difficulty="Medium"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/edge/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/edge/openapi.yaml"
      developerDocumentation="docs.tryedge.io/"
    />
  );
}
  