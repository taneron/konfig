import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function SlopeTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="slope-typescript-sdk"
      metaDescription={`The B2B payments platform.`}
      company="Slope"
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/slope/logo.png"
      companyKebabCase="slope"
      clientNameCamelCase="slope"
      homepage="slopepay.com"
      lastUpdated={new Date("2024-03-27T01:23:25.425Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/slope/favicon.png"
      // Missing contactUrl
      // Missing contactEmail
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/slope/imagePreview.png"
      GettingStarted={GettingStarted}
      FirstRequest={FirstRequest}
      categories={["payments","fintech","b2b_payments"]}
      methods={[
  {
    "url": "/v3/merchants",
    "method": "getSettings",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Merchants",
    "typeScriptTag": "merchants",
    "description": "Get merchant",
    "parameters": [
      {
        "name": "expand",
        "schema": "array",
        "required": false,
        "description": "The nested objects to expand as part of the response."
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
    "url": "/v3/orders",
    "method": "listOrders",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Orders",
    "typeScriptTag": "orders",
    "description": "List orders",
    "parameters": [
      {
        "name": "limit",
        "schema": "undefined",
        "required": false,
        "description": "The maximum number of objects to list."
      },
      {
        "name": "orderBy",
        "schema": "array",
        "required": false,
        "description": "The object attribute(s) to sort by."
      },
      {
        "name": "order",
        "schema": "string",
        "required": false,
        "description": "The direction to sort by, one of `asc` or `desc`."
      },
      {
        "name": "beforeCursor",
        "schema": "string",
        "required": false,
        "description": "The cursor used to fetch the previous page of objects."
      },
      {
        "name": "afterCursor",
        "schema": "string",
        "required": false,
        "description": "The cursor used to fetch the next page of objects."
      },
      {
        "name": "filter",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "expand",
        "schema": "array",
        "required": false,
        "description": "The nested objects to expand as part of the response."
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
    "url": "/v3/orders",
    "method": "createNewOrder",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Orders",
    "typeScriptTag": "orders",
    "description": "Create an order",
    "parameters": [
      {
        "name": "total",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "currency",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CURRENCY"
      },
      {
        "name": "termsAcceptedAt",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "externalId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "paymentTermsStartAt",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "paymentMethodId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "metadata",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "customerId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "billingAddress",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "additionalData",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "paymentTermsId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "payoutAccountId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "vendor",
        "schema": "undefined",
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
        "name": "invoiceDueDate",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "invoiceMilestoneId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "customer",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "items",
        "schema": "array",
        "required": false,
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
    "url": "/v3/orders/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Orders",
    "typeScriptTag": "orders",
    "description": "Get an order",
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
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v3/orders/{id}",
    "method": "updateAttributes",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Orders",
    "typeScriptTag": "orders",
    "description": "Update an order",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "forceUnderwriting",
        "schema": "boolean",
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
    "url": "/v3/orders/{id}/intent",
    "method": "generateIntentSecret",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Orders",
    "typeScriptTag": "orders",
    "description": "Generate an order intent",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "timeoutMs",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TIMEOUTMS"
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
    "url": "/v3/orders/{id}/submit",
    "method": "submitOrderStatus",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Orders",
    "typeScriptTag": "orders",
    "description": "Submit an order",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "termsAcceptedAt",
        "schema": "string",
        "description": ""
      },
      {
        "name": "termsUrl",
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
    "url": "/v3/orders/{id}/open",
    "method": "openOrder",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Orders",
    "typeScriptTag": "orders",
    "description": "Open an order",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "externalId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "termsAcceptedAt",
        "schema": "string",
        "description": ""
      },
      {
        "name": "termsUrl",
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
    "url": "/v3/orders/{id}/finalize",
    "method": "finalizeOrder",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Orders",
    "typeScriptTag": "orders",
    "description": "Finalize an order",
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
        "description": ""
      }
    ]
  },
  {
    "url": "/v3/orders/{id}/cancel",
    "method": "cancelOrder",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Orders",
    "typeScriptTag": "orders",
    "description": "Cancel an order",
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
        "description": ""
      }
    ]
  },
  {
    "url": "/v3/orders/{id}/refund",
    "method": "refundOrder",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Orders",
    "typeScriptTag": "orders",
    "description": "Refund an order",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "amount",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "payoutAccountId",
        "schema": "string",
        "required": false,
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
    "url": "/v3/orders/{id}/reset",
    "method": "resetOrder",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Orders",
    "typeScriptTag": "orders",
    "description": "Reset an order",
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
        "description": ""
      }
    ]
  },
  {
    "url": "/v3/payout-accounts",
    "method": "listAllPayoutAccounts",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Payout Accounts",
    "typeScriptTag": "payoutAccounts",
    "description": "List all payout accounts",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v3/payout-accounts",
    "method": "createWithExternalId",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Payout Accounts",
    "typeScriptTag": "payoutAccounts",
    "description": "Create a payout account",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "paymentMethodType",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PAYMENTMETHODTYPE"
      },
      {
        "name": "businessName",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "BUSINESSNAME"
      },
      {
        "name": "email",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EMAIL"
      },
      {
        "name": "address",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "routingNumber",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ROUTINGNUMBER"
      },
      {
        "name": "accountNumber",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACCOUNTNUMBER"
      },
      {
        "name": "isDefaultAccount",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "taxId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TAXID"
      },
      {
        "name": "accountType",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "externalId",
        "schema": "string",
        "required": false,
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
    "url": "/v3/payout-accounts/{id}",
    "method": "deleteAccount",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Payout Accounts",
    "typeScriptTag": "payoutAccounts",
    "description": "Delete a payout account",
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
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v3/payout-accounts/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Payout Accounts",
    "typeScriptTag": "payoutAccounts",
    "description": "Get a payout account",
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
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v3/payout-accounts/{id}",
    "method": "updateWithExternalId",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Payout Accounts",
    "typeScriptTag": "payoutAccounts",
    "description": "Update a payout account",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "email",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EMAIL"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "isDefaultAccount",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
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
    "url": "/v3/invoices",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Invoices",
    "typeScriptTag": "invoices",
    "description": "List invoices",
    "parameters": [
      {
        "name": "limit",
        "schema": "undefined",
        "required": false,
        "description": "The maximum number of objects to list."
      },
      {
        "name": "orderBy",
        "schema": "array",
        "required": false,
        "description": "The object attribute(s) to sort by."
      },
      {
        "name": "order",
        "schema": "string",
        "required": false,
        "description": "The direction to sort by, one of `asc` or `desc`."
      },
      {
        "name": "beforeCursor",
        "schema": "string",
        "required": false,
        "description": "The cursor used to fetch the previous page of objects."
      },
      {
        "name": "afterCursor",
        "schema": "string",
        "required": false,
        "description": "The cursor used to fetch the next page of objects."
      },
      {
        "name": "filter",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "expand",
        "schema": "array",
        "required": false,
        "description": "The nested objects to expand as part of the response."
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
    "url": "/v3/invoices",
    "method": "createNewInvoice",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Invoices",
    "typeScriptTag": "invoices",
    "description": "Create an invoice",
    "parameters": [
      {
        "name": "customerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CUSTOMERID"
      },
      {
        "name": "currency",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CURRENCY"
      },
      {
        "name": "milestones",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "items",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "memo",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "contactName",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "contactEmail",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "contactPhone",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "billingAddress",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "recipientEmails",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "status",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "STATUS"
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
    "url": "/v3/invoices/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Invoices",
    "typeScriptTag": "invoices",
    "description": "Get an invoice",
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
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v3/invoices/{id}/open",
    "method": "openDraft",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Invoices",
    "typeScriptTag": "invoices",
    "description": "Open an invoice",
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
        "description": ""
      }
    ]
  },
  {
    "url": "/v3/invoices/{id}/void",
    "method": "voidInvoice",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Invoices",
    "typeScriptTag": "invoices",
    "description": "Void an invoice",
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
        "description": ""
      }
    ]
  },
  {
    "url": "/v3/invoices/{id}/cancel",
    "method": "cancelInvoice",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Invoices",
    "typeScriptTag": "invoices",
    "description": "Cancel an invoice",
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
        "description": ""
      }
    ]
  },
  {
    "url": "/v3/customers",
    "method": "listAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Customers",
    "typeScriptTag": "customers",
    "description": "List customers",
    "parameters": [
      {
        "name": "limit",
        "schema": "undefined",
        "required": false,
        "description": "The maximum number of objects to list."
      },
      {
        "name": "orderBy",
        "schema": "array",
        "required": false,
        "description": "The object attribute(s) to sort by."
      },
      {
        "name": "order",
        "schema": "string",
        "required": false,
        "description": "The direction to sort by, one of `asc` or `desc`."
      },
      {
        "name": "beforeCursor",
        "schema": "string",
        "required": false,
        "description": "The cursor used to fetch the previous page of objects."
      },
      {
        "name": "afterCursor",
        "schema": "string",
        "required": false,
        "description": "The cursor used to fetch the next page of objects."
      },
      {
        "name": "filter",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "expand",
        "schema": "array",
        "required": false,
        "description": "The nested objects to expand as part of the response."
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
    "url": "/v3/customers",
    "method": "registerNewCustomer",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Customers",
    "typeScriptTag": "customers",
    "description": "Create a customer",
    "parameters": [
      {
        "name": "kyb",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "socialMediaUrls",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "acquisitionDate",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "email",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EMAIL"
      },
      {
        "name": "phone",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PHONE"
      },
      {
        "name": "businessName",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "BUSINESSNAME"
      },
      {
        "name": "externalId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "externalPurchases",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "metadata",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "address",
        "schema": "object",
        "required": true,
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
    "url": "/v3/customers/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Customers",
    "typeScriptTag": "customers",
    "description": "Get a customer",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The customer ID assigned by Slope _or_ the customer external ID assigned by you.",
        "example": "ID"
      },
      {
        "name": "expand",
        "schema": "array",
        "required": false,
        "description": "The nested objects to expand as part of the response."
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
    "url": "/v3/customers/{id}",
    "method": "updateExistingCustomer",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Customers",
    "typeScriptTag": "customers",
    "description": "Update a customer",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The customer ID assigned by Slope _or_ the customer external ID assigned by you.",
        "example": "ID"
      },
      {
        "name": "expand",
        "schema": "array",
        "required": false,
        "description": "The nested objects to expand as part of the response."
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
    "url": "/v3/customers/{id}/intent",
    "method": "generateIntentSecret",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Customers",
    "typeScriptTag": "customers",
    "description": "Generate an customer intent",
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
        "description": ""
      }
    ]
  }
]
    }
      language="TypeScript"
      apiTitle="Slope API"
      apiBaseUrl="https://api.sandbox.slope.so"
      apiVersion="v3"
      endpoints={20}
      sdkMethods={28}
      schemas={87}
      parameters={105}
      difficulty="Easy"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/slope/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/slope/openapi.yaml"
      developerDocumentation="developers.slope.so/"
    />
  );
}
  