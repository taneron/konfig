import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function ProcurifyTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="procurify-typescript-sdk"
      metaDescription={`Procurify is the Intelligent Spend Management company. We're on a mission to give all organizations unprecedented visibility and control over their business spend. By bringing more spend under management in one procure-to-pay solution, our customers capture unified spend data that can be harnessed to realize millions of dollars in time and cost savings.

Named the #1 Purchasing Leader by G2, Procurify is trusted by hundreds of customers worldwide to manage over US$30 billion dollars of organizational spend. We integrate with major ERP accounting systems such as NetSuite and QuickBooks Online.

Take control of spend today.`}
      company="Procurify"
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/procurify/logo.png"
      companyKebabCase="procurify"
      clientNameCamelCase="procurify"
      homepage="www.procurify.com/"
      lastUpdated={new Date("2024-03-26T00:42:28.369Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/procurify/favicon.png"
      // Missing contactUrl
      // Missing contactEmail
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/procurify/imagePreview.jpg"
      GettingStarted={GettingStarted}
      FirstRequest={FirstRequest}
      categories={["financial_services","financial_technology","ap_automation"]}
      methods={[
  {
    "url": "/oauth/token",
    "method": "tokenRequest",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "oauth",
    "typeScriptTag": "oauth",
    "description": "Authenticate with OAuth",
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
        "name": "audience",
        "schema": "string",
        "description": ""
      },
      {
        "name": "grant_type",
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
    "url": "/api/v2/ap/bills/{id}",
    "method": "billsGetById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "ap",
    "typeScriptTag": "ap",
    "description": "Get Bills by ID",
    "parameters": [
      {
        "name": "format",
        "schema": "string",
        "description": ""
      },
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
    "url": "/api/v2/ap/company-payment-methods",
    "method": "companyPaymentMethodsList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "ap",
    "typeScriptTag": "ap",
    "description": "Get list of Company Payment Methods",
    "parameters": [
      {
        "name": "currency",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "format",
        "schema": "string",
        "description": ""
      },
      {
        "name": "orderBy",
        "schema": "string",
        "required": false,
        "description": "Which field to use when ordering the results."
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "A page number within the paginated result set."
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "required": false,
        "description": "Number of results to return per page."
      },
      {
        "name": "search",
        "schema": "string",
        "required": false,
        "description": "A search term."
      },
      {
        "name": "type",
        "schema": "integer",
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
    "url": "/api/v2/ap/company-payment-methods",
    "method": "createCompanyPaymentMethod",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "ap",
    "typeScriptTag": "ap",
    "description": "Create Company Payment Method",
    "parameters": [
      {
        "name": "format",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "type",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "data",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "currency",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "gl_code",
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
    "url": "/api/v2/ap/items",
    "method": "itemsGet",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "ap",
    "typeScriptTag": "ap",
    "description": "Get Unbilled/Billed Items",
    "parameters": [
      {
        "name": "bill",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "billUuid",
        "schema": "string",
        "description": ""
      },
      {
        "name": "billed",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "budget",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "createdAt0",
        "schema": "string",
        "description": ""
      },
      {
        "name": "createdAt1",
        "schema": "string",
        "description": ""
      },
      {
        "name": "department",
        "schema": "number",
        "description": ""
      },
      {
        "name": "exclude",
        "schema": "string",
        "description": ""
      },
      {
        "name": "format",
        "schema": "string",
        "description": ""
      },
      {
        "name": "location",
        "schema": "number",
        "description": ""
      },
      {
        "name": "orderBy",
        "schema": "string",
        "required": false,
        "description": "Which field to use when ordering the results."
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "A page number within the paginated result set."
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "required": false,
        "description": "Number of results to return per page."
      },
      {
        "name": "receivedOn0",
        "schema": "string",
        "description": ""
      },
      {
        "name": "receivedOn1",
        "schema": "string",
        "description": ""
      },
      {
        "name": "reimburse",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "requester",
        "schema": "number",
        "description": ""
      },
      {
        "name": "search",
        "schema": "string",
        "required": false,
        "description": "A search term."
      },
      {
        "name": "vendor",
        "schema": "integer",
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
    "url": "/api/v2/ap/payments",
    "method": "getPayments",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "ap",
    "typeScriptTag": "ap",
    "description": "Get Payments",
    "parameters": [
      {
        "name": "approver",
        "schema": "string",
        "description": ""
      },
      {
        "name": "currency",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "format",
        "schema": "string",
        "description": ""
      },
      {
        "name": "orderBy",
        "schema": "string",
        "required": false,
        "description": "Which field to use when ordering the results."
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "A page number within the paginated result set."
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "required": false,
        "description": "Number of results to return per page."
      },
      {
        "name": "paymentDate0",
        "schema": "string",
        "description": ""
      },
      {
        "name": "paymentDate1",
        "schema": "string",
        "description": ""
      },
      {
        "name": "paymentMethodType",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "search",
        "schema": "string",
        "required": false,
        "description": "A search term."
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
    "url": "/api/v2/ap/payments/{id}/approver-choices",
    "method": "paymentsApproverChoicesRetrieve",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "ap",
    "typeScriptTag": "ap",
    "description": "Get Approver Choices",
    "parameters": [
      {
        "name": "format",
        "schema": "string",
        "description": ""
      },
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A unique integer value identifying this payment.",
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
    "url": "/api/v2/ap/vendor-payment-methods",
    "method": "vendorPaymentMethodsList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "ap",
    "typeScriptTag": "ap",
    "description": "Get list of Vendor Payment Methods",
    "parameters": [
      {
        "name": "currency",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "format",
        "schema": "string",
        "description": ""
      },
      {
        "name": "orderBy",
        "schema": "string",
        "required": false,
        "description": "Which field to use when ordering the results."
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "A page number within the paginated result set."
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "required": false,
        "description": "Number of results to return per page."
      },
      {
        "name": "search",
        "schema": "string",
        "required": false,
        "description": "A search term."
      },
      {
        "name": "type",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "vendor",
        "schema": "integer",
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
    "url": "/api/v2/ap/vendor-payment-methods",
    "method": "createVendorPaymentMethod",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "ap",
    "typeScriptTag": "ap",
    "description": "Create Vendor Payment Method",
    "parameters": [
      {
        "name": "format",
        "schema": "string",
        "description": ""
      },
      {
        "name": "vendor",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "name",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "type",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "data",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "currency",
        "schema": "integer",
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
    "url": "/api/v2/currencies",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "currencies",
    "typeScriptTag": "currencies",
    "description": "Get Active/Inactive Currencies",
    "parameters": [
      {
        "name": "active",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "base",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "format",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "orderBy",
        "schema": "string",
        "required": false,
        "description": "Which field to use when ordering the results."
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "A page number within the paginated result set."
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "required": false,
        "description": "Number of results to return per page."
      },
      {
        "name": "rate",
        "schema": "number",
        "description": ""
      },
      {
        "name": "search",
        "schema": "string",
        "required": false,
        "description": "A search term."
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
    "url": "/api/v2/global/order_items",
    "method": "getAllOrderItems",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "requisitions",
    "typeScriptTag": "requisitions",
    "description": "Get All Order Items",
    "parameters": [
      {
        "name": "account",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "accountCode",
        "schema": "integer",
        "description": "Account Code"
      },
      {
        "name": "active",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "approvedDatetime0",
        "schema": "string",
        "description": "Approved Date"
      },
      {
        "name": "approvedDatetime1",
        "schema": "string",
        "description": "Approved Date"
      },
      {
        "name": "approvedPrice",
        "schema": "number",
        "description": ""
      },
      {
        "name": "approvedQuantity",
        "schema": "number",
        "description": ""
      },
      {
        "name": "approver",
        "schema": "number",
        "description": ""
      },
      {
        "name": "approverId",
        "schema": "number",
        "description": ""
      },
      {
        "name": "branch",
        "schema": "integer",
        "description": "Location"
      },
      {
        "name": "catalog",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "catalogItem",
        "schema": "string",
        "description": "A comma-separated list of integers."
      },
      {
        "name": "currency",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "department",
        "schema": "integer",
        "description": "Department"
      },
      {
        "name": "departments",
        "schema": "string",
        "description": "A comma-separated list of integers."
      },
      {
        "name": "exclude",
        "schema": "string",
        "description": "A comma-separated list of integers."
      },
      {
        "name": "excludePunchout",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "format",
        "schema": "string",
        "description": ""
      },
      {
        "name": "fulfilmentStatus",
        "schema": "string",
        "description": ""
      },
      {
        "name": "isPurchased",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "isRecurring",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "lastChangedBy",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "lastModified0",
        "schema": "string",
        "description": "Last Modified Date"
      },
      {
        "name": "lastModified1",
        "schema": "string",
        "description": "Last Modified Date"
      },
      {
        "name": "lineComment",
        "schema": "string",
        "description": ""
      },
      {
        "name": "location",
        "schema": "integer",
        "description": "Location"
      },
      {
        "name": "locations",
        "schema": "string",
        "description": "A comma-separated list of integers."
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "num",
        "schema": "string",
        "description": ""
      },
      {
        "name": "orderNum",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "orderNumStatus",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "orderBy",
        "schema": "string",
        "required": false,
        "description": "Which field to use when ordering the results."
      },
      {
        "name": "orderCreatedDate0",
        "schema": "string",
        "description": "Order Created Date"
      },
      {
        "name": "orderCreatedDate1",
        "schema": "string",
        "description": "Order Created Date"
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "A page number within the paginated result set."
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "required": false,
        "description": "Number of results to return per page."
      },
      {
        "name": "poCreatedDate0",
        "schema": "string",
        "description": "Purchased Date"
      },
      {
        "name": "poCreatedDate1",
        "schema": "string",
        "description": "Purchased Date"
      },
      {
        "name": "poVendor",
        "schema": "integer",
        "description": "Purchased Vendor"
      },
      {
        "name": "prefVendor",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "price",
        "schema": "number",
        "description": ""
      },
      {
        "name": "purchaseAgreement",
        "schema": "number",
        "description": ""
      },
      {
        "name": "purchasedDate0",
        "schema": "string",
        "description": "Purchased Date"
      },
      {
        "name": "purchasedDate1",
        "schema": "string",
        "description": "Purchased Date"
      },
      {
        "name": "purchaser",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "quantity",
        "schema": "number",
        "description": ""
      },
      {
        "name": "receivedFailQty",
        "schema": "number",
        "description": ""
      },
      {
        "name": "receivedPassQty",
        "schema": "number",
        "description": ""
      },
      {
        "name": "requester",
        "schema": "integer",
        "description": "Requester"
      },
      {
        "name": "search",
        "schema": "string",
        "required": false,
        "description": "A search term."
      },
      {
        "name": "sku",
        "schema": "string",
        "description": ""
      },
      {
        "name": "status",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "type",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "unit",
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
    "url": "/api/v2/global/orders",
    "method": "getAllOrders",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "requisitions",
    "typeScriptTag": "requisitions",
    "description": "Get All Orders",
    "parameters": [
      {
        "name": "branch",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "dateRequired",
        "schema": "string",
        "description": ""
      },
      {
        "name": "date0",
        "schema": "string",
        "description": "Date"
      },
      {
        "name": "date1",
        "schema": "string",
        "description": "Date"
      },
      {
        "name": "department",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "format",
        "schema": "string",
        "description": ""
      },
      {
        "name": "hasBlanketOrderItems",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "isPunchout",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "lineCount",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "location",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "modifiedDate0",
        "schema": "string",
        "description": "Last Modified Date"
      },
      {
        "name": "modifiedDate1",
        "schema": "string",
        "description": "Last Modified Date"
      },
      {
        "name": "orderBy",
        "schema": "string",
        "required": false,
        "description": "Which field to use when ordering the results."
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "A page number within the paginated result set."
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "required": false,
        "description": "Number of results to return per page."
      },
      {
        "name": "requiredDate0",
        "schema": "string",
        "description": "Date Required"
      },
      {
        "name": "requiredDate1",
        "schema": "string",
        "description": "Date Required"
      },
      {
        "name": "search",
        "schema": "string",
        "required": false,
        "description": "A search term."
      },
      {
        "name": "status",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "totalPrice",
        "schema": "number",
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
    "url": "/api/v2/locations",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "locations",
    "typeScriptTag": "locations",
    "description": "Get Locations",
    "parameters": [
      {
        "name": "active",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "format",
        "schema": "string",
        "description": ""
      },
      {
        "name": "headquarter",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "orderBy",
        "schema": "string",
        "required": false,
        "description": "Which field to use when ordering the results."
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "A page number within the paginated result set."
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "required": false,
        "description": "Number of results to return per page."
      },
      {
        "name": "search",
        "schema": "string",
        "required": false,
        "description": "A search term."
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
    "url": "/api/v2/locations",
    "method": "create",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "locations",
    "typeScriptTag": "locations",
    "description": "Create New Location",
    "parameters": [
      {
        "name": "format",
        "schema": "string",
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
        "name": "url",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "logo",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "currency",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CURRENCY"
      },
      {
        "name": "phoneOne",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PHONEONE"
      },
      {
        "name": "fax",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "email",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "primary_billing_address",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "primary_shipping_address",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "shipping_addresses",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "language",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "locationTimezone",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "active",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "external_id",
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
    "url": "/api/v2/locations/{id}",
    "method": "retrieve",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "locations",
    "typeScriptTag": "locations",
    "description": "Get Location by ID",
    "parameters": [
      {
        "name": "format",
        "schema": "string",
        "description": ""
      },
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
    "url": "/api/v2/purchase_order/revise/{procurify_PO}",
    "method": "reviseProcurifyPo",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "purchase-orders",
    "typeScriptTag": "purchaseOrders",
    "description": "Revise a Purchase Order",
    "parameters": [
      {
        "name": "confirmDuplicateExternalPoNumber",
        "schema": "string",
        "description": "Mechanism to check for duplicate custom PO number. If there is a duplicate, API will fail unless this query param is set to True.",
        "default": "False"
      },
      {
        "name": "format",
        "schema": "string",
        "description": ""
      },
      {
        "name": "procurifyPo",
        "schema": "integer",
        "required": true,
        "description": "A unique integer value identifying this po.",
        "example": 0
      },
      {
        "name": "version",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "order_items",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "custom_fields",
        "schema": "array",
        "required": false,
        "description": "",
        "default": []
      },
      {
        "name": "PO_Num",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "buyer_name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "BUYER_NAME"
      },
      {
        "name": "buyer_contact",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "BUYER_CONTACT"
      },
      {
        "name": "buyer_addressLineOne",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "BUYER_ADDRESSLINEONE"
      },
      {
        "name": "buyer_postalCode",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "BUYER_POSTALCODE"
      },
      {
        "name": "buyer_city",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "BUYER_CITY"
      },
      {
        "name": "buyer_state_province",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "buyer_country",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "BUYER_COUNTRY"
      },
      {
        "name": "buyer_address",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "comment",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "receiver_name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "RECEIVER_NAME"
      },
      {
        "name": "receiver_contact",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "RECEIVER_CONTACT"
      },
      {
        "name": "receiver_addressLineOne",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "RECEIVER_ADDRESSLINEONE"
      },
      {
        "name": "receiver_postalCode",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "RECEIVER_POSTALCODE"
      },
      {
        "name": "receiver_city",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "RECEIVER_CITY"
      },
      {
        "name": "receiver_state_province",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "receiver_country",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "RECEIVER_COUNTRY"
      },
      {
        "name": "receiver_address",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "promise_date",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PROMISE_DATE"
      },
      {
        "name": "freight",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "discount",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "tax",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "other",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "disclaimer_description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "disclaimer_text",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "payment_term_ref",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "shipping_term_ref",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "payment_method_ref",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "shipping_method_ref",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "creditcard",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "expiry_date",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "contract",
        "schema": "integer",
        "required": false,
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
    "url": "/api/v2/purchase_orders/{id}",
    "method": "getByIdWithItems",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "purchase-orders",
    "typeScriptTag": "purchaseOrders",
    "description": "Get Purchase Order by ID (with items)",
    "parameters": [
      {
        "name": "format",
        "schema": "string",
        "description": ""
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Procurify PO or UUID",
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
    "url": "/api/v2/purchase_orders/{role}/{status}",
    "method": "getByRoleAndStatus",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "purchase-orders",
    "typeScriptTag": "purchaseOrders",
    "description": "Get Purchase Orders by Role & Status",
    "parameters": [
      {
        "name": "contract",
        "schema": "integer",
        "description": "Contract"
      },
      {
        "name": "date0",
        "schema": "string",
        "description": "YYYY-MM-DD (start date): Filter POs by Created Date range"
      },
      {
        "name": "date1",
        "schema": "string",
        "description": "YYYY-MM-DD (end date): Filter POs by Created Date range"
      },
      {
        "name": "expiryDate0",
        "schema": "string",
        "description": "Expiry Date"
      },
      {
        "name": "expiryDate1",
        "schema": "string",
        "description": "Expiry Date"
      },
      {
        "name": "hasBlanketOrderItems",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "modifiedDate0",
        "schema": "string",
        "description": "YYYY-MM-DD (start date): Filter POs by Last Modified Date range"
      },
      {
        "name": "modifiedDate1",
        "schema": "string",
        "description": "YYYY-MM-DD (end date): Filter POs by Last Modified Date range"
      },
      {
        "name": "orderBy",
        "schema": "string",
        "description": "Sort by field"
      },
      {
        "name": "page",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "prefVendor",
        "schema": "integer",
        "description": "ID of Vendor"
      },
      {
        "name": "promiseDate0",
        "schema": "string",
        "description": "YYYY-MM-DD (start date): Filter POs by Promise Date range"
      },
      {
        "name": "promiseDate1",
        "schema": "string",
        "description": "YYYY-MM-DD (end date): Filter POs by Promise Date range"
      },
      {
        "name": "role",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ROLE"
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
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v3/account-codes",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "account-codes",
    "typeScriptTag": "accountCodes",
    "description": "Get Account Codes",
    "parameters": [
      {
        "name": "active",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "code",
        "schema": "string",
        "description": ""
      },
      {
        "name": "format",
        "schema": "string",
        "description": ""
      },
      {
        "name": "isParent",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "orderBy",
        "schema": "string",
        "required": false,
        "description": "Which field to use when ordering the results."
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "A page number within the paginated result set."
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "required": false,
        "description": "Number of results to return per page."
      },
      {
        "name": "search",
        "schema": "string",
        "required": false,
        "description": "A search term."
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
    "url": "/api/v3/account-codes",
    "method": "createAccountCodes",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "account-codes",
    "typeScriptTag": "accountCodes",
    "description": "Create Account Codes",
    "parameters": [
      {
        "name": "format",
        "schema": "string",
        "description": ""
      },
      {
        "name": "description",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DESCRIPTION"
      },
      {
        "name": "code",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CODE"
      },
      {
        "name": "parent",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "account_type",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "departments",
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
    "url": "/api/v3/account-codes/{id}",
    "method": "updateAccountCode",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "account-codes",
    "typeScriptTag": "accountCodes",
    "description": "Update Account Code",
    "parameters": [
      {
        "name": "format",
        "schema": "string",
        "description": ""
      },
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A unique integer value identifying this account code.",
        "example": 0
      },
      {
        "name": "description",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DESCRIPTION"
      },
      {
        "name": "code",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CODE"
      },
      {
        "name": "account_type",
        "schema": "integer",
        "required": false,
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
    "url": "/api/v3/accounts",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "accounts",
    "typeScriptTag": "accounts",
    "description": "Get Accounts",
    "parameters": [
      {
        "name": "accountCode",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "active",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "department",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "departments",
        "schema": "string",
        "description": "A comma-separated list of integers."
      },
      {
        "name": "format",
        "schema": "string",
        "description": ""
      },
      {
        "name": "id",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "inEffect",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "locations",
        "schema": "string",
        "description": "A comma-separated list of integers."
      },
      {
        "name": "orderBy",
        "schema": "string",
        "required": false,
        "description": "Which field to use when ordering the results."
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "A page number within the paginated result set."
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "required": false,
        "description": "Number of results to return per page."
      },
      {
        "name": "search",
        "schema": "string",
        "required": false,
        "description": "A search term."
      },
      {
        "name": "withExpiredBudgets",
        "schema": "boolean",
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
    "url": "/api/v3/ap/bills",
    "method": "billsList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "ap",
    "typeScriptTag": "ap",
    "description": "Get Bills",
    "parameters": [
      {
        "name": "approver",
        "schema": "number",
        "description": "Approver"
      },
      {
        "name": "contract",
        "schema": "number",
        "description": "Contracts related to bill items' purchase orders"
      },
      {
        "name": "currency",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "dueDate0",
        "schema": "string",
        "description": "Due Date"
      },
      {
        "name": "dueDate1",
        "schema": "string",
        "description": "Due Date"
      },
      {
        "name": "excludeBillGroupIds",
        "schema": "string",
        "description": ""
      },
      {
        "name": "excludeExpenseBills",
        "schema": "string",
        "description": "Exclude expense bills"
      },
      {
        "name": "expense",
        "schema": "string",
        "description": "Expense Bills Only"
      },
      {
        "name": "format",
        "schema": "string",
        "description": ""
      },
      {
        "name": "glPostDate0",
        "schema": "string",
        "description": "Posting Date"
      },
      {
        "name": "glPostDate1",
        "schema": "string",
        "description": "Posting Date"
      },
      {
        "name": "group",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "hasPayment",
        "schema": "boolean",
        "description": "Without Payment"
      },
      {
        "name": "hasPostingDate",
        "schema": "boolean",
        "description": "Has Posting Date"
      },
      {
        "name": "includeBillGroupIds",
        "schema": "string",
        "description": ""
      },
      {
        "name": "invoiceDate0",
        "schema": "string",
        "description": "Invoice Date"
      },
      {
        "name": "invoiceDate1",
        "schema": "string",
        "description": "Invoice Date"
      },
      {
        "name": "isExported",
        "schema": "boolean",
        "description": "Exported Bills Only"
      },
      {
        "name": "lastExportDate0",
        "schema": "string",
        "description": "Last Export Date"
      },
      {
        "name": "lastExportDate1",
        "schema": "string",
        "description": "Last Export Date"
      },
      {
        "name": "lastExportUser",
        "schema": "number",
        "description": "Last Export User"
      },
      {
        "name": "lastModifiedDatetime0",
        "schema": "string",
        "description": "Last Modified Datetime"
      },
      {
        "name": "lastModifiedDatetime1",
        "schema": "string",
        "description": "Last Modified Datetime"
      },
      {
        "name": "modifiedDate0",
        "schema": "string",
        "description": "Last Modified Date (Deprecated - use 'Last Modified Datetime')"
      },
      {
        "name": "modifiedDate1",
        "schema": "string",
        "description": "Last Modified Date (Deprecated - use 'Last Modified Datetime')"
      },
      {
        "name": "orderBy",
        "schema": "string",
        "required": false,
        "description": "Which field to use when ordering the results."
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "A page number within the paginated result set."
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "required": false,
        "description": "Number of results to return per page."
      },
      {
        "name": "search",
        "schema": "string",
        "required": false,
        "description": "A search term."
      },
      {
        "name": "submittedDate0",
        "schema": "string",
        "description": "Submitted Date"
      },
      {
        "name": "submittedDate1",
        "schema": "string",
        "description": "Submitted Date"
      },
      {
        "name": "syncStatus",
        "schema": "string",
        "description": "Sync Status"
      },
      {
        "name": "syncStatusV2",
        "schema": "string",
        "description": "Sync Status"
      },
      {
        "name": "type",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "user",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "vendor",
        "schema": "integer",
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
    "url": "/api/v3/catalog-bundles",
    "method": "getAllBundles",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "catalog",
    "typeScriptTag": "catalog",
    "description": "Get All Catalog Bundles",
    "parameters": [
      {
        "name": "format",
        "schema": "string",
        "description": ""
      },
      {
        "name": "orderBy",
        "schema": "string",
        "required": false,
        "description": "Which field to use when ordering the results."
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "A page number within the paginated result set."
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "required": false,
        "description": "Number of results to return per page."
      },
      {
        "name": "search",
        "schema": "string",
        "required": false,
        "description": "A search term."
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
    "url": "/api/v3/catalog-items",
    "method": "getAllItems",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "catalog",
    "typeScriptTag": "catalog",
    "description": "Get All Catalog Items",
    "parameters": [
      {
        "name": "bundle",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "department",
        "schema": "string",
        "description": "A comma-separated list of integers."
      },
      {
        "name": "format",
        "schema": "string",
        "description": ""
      },
      {
        "name": "internalSku",
        "schema": "string",
        "description": ""
      },
      {
        "name": "location",
        "schema": "string",
        "description": "A comma-separated list of integers."
      },
      {
        "name": "maxPrice",
        "schema": "number",
        "description": ""
      },
      {
        "name": "minPrice",
        "schema": "number",
        "description": ""
      },
      {
        "name": "orderBy",
        "schema": "string",
        "required": false,
        "description": "Which field to use when ordering the results."
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "A page number within the paginated result set."
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "required": false,
        "description": "Number of results to return per page."
      },
      {
        "name": "prefVendor",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "search",
        "schema": "string",
        "required": false,
        "description": "A search term."
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
    "url": "/api/v3/catalog-items",
    "method": "itemCreate",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "catalog",
    "typeScriptTag": "catalog",
    "description": "Create Catalog Item",
    "parameters": [
      {
        "name": "format",
        "schema": "string",
        "description": ""
      },
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "id",
        "schema": "integer",
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
        "name": "image",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "unitType",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "pref_vendor",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "account_code",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "internalSKU",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "product_url",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "currency",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "price",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "rfo_lock",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "departments",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "custom_fields",
        "schema": "array",
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
    "url": "/api/v3/catalog-items/{id}",
    "method": "updateItem",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "catalog",
    "typeScriptTag": "catalog",
    "description": "Update Catalog Item",
    "parameters": [
      {
        "name": "format",
        "schema": "string",
        "description": ""
      },
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A unique integer value identifying this catalog items.",
        "example": 0
      },
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "id",
        "schema": "integer",
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
        "name": "image",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "unitType",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "pref_vendor",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "account_code",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "internalSKU",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "product_url",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "currency",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "price",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "rfo_lock",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "departments",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "custom_fields",
        "schema": "array",
        "required": true,
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
    "url": "/api/v3/custom-fields/{id}",
    "method": "updateOrderItemCustomFieldDropdownChoices",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "custom-fields",
    "typeScriptTag": "customFields",
    "description": "Update Order Item Custom Field Dropdown Choices",
    "parameters": [
      {
        "name": "format",
        "schema": "string",
        "description": ""
      },
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A unique integer value identifying this custom field.",
        "example": 0
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "default_value",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "is_required",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "field_type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FIELD_TYPE"
      },
      {
        "name": "field_choices",
        "schema": "array",
        "required": false,
        "description": "",
        "default": []
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
    "url": "/api/v3/custom-fields/order-items",
    "method": "getOrderItemCustomFields",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "custom-fields",
    "typeScriptTag": "customFields",
    "description": "Get Active/Inactive Order Item Custom Fields",
    "parameters": [
      {
        "name": "fieldType",
        "schema": "string",
        "description": ""
      },
      {
        "name": "format",
        "schema": "string",
        "description": ""
      },
      {
        "name": "metaIsActive",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "A page number within the paginated result set."
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "required": false,
        "description": "Number of results to return per page."
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
    "url": "/api/v3/departments",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "departments",
    "typeScriptTag": "departments",
    "description": "List Departments",
    "parameters": [
      {
        "name": "branch",
        "schema": "integer",
        "description": "Filter departments by their branch."
      },
      {
        "name": "format",
        "schema": "string",
        "description": ""
      },
      {
        "name": "includeIsActiveForAccountCode",
        "schema": "integer",
        "description": "Setting this adds the addition of the booeal field 'has_active_account' to each department object of the response. The query param accepts an integer representing the primary key of the account code to check if there exists an account object associated with the department with that account code."
      },
      {
        "name": "locationPermOverride",
        "schema": "boolean",
        "description": "Setting this overrides the need to enable the PROCUREMENT_ACCESS and/or RECEIVE_BY_DEPARTMENT feature switches. This parameter can only be used in conjunction with permission and user and cannot function without both of those parameters explicitly set."
      },
      {
        "name": "locations",
        "schema": "array",
        "description": "Filter departments by the locations (branches) passed in."
      },
      {
        "name": "orderBy",
        "schema": "string",
        "required": false,
        "description": "Which field to use when ordering the results."
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "A page number within the paginated result set."
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "required": false,
        "description": "Number of results to return per page."
      },
      {
        "name": "permission",
        "schema": "integer",
        "description": "Filter by permission. In isolation, this parameter can only be set to 68 (add purchase order); 841 (view report); or 899 (receive_po), which correlate with permission to add purchase orders, view reports, and receive purchase orders respectively. However, the results returned correlate with the “by department” version of these permissions, which means that results are filtered by permission to add purchase orders by department, permission to view reports by department, and receive purchase orders by department. This should only be used in conjunction with the PROCUREMENT_ACCESS and/or RECEIVE_BY_DEPARTMENT feature switches. If used in conjunction with location_perm_override=true and user, the value can be set to any permission, and the result will be departments filtered by the provided user and permission values. If used in conjunction with the RECEIVE_BY_DEPARTMENT feature flag, the permission can only be set to 68, 841, or 899 (see second sentence for what these permissions do). The result will be all departments filtered by the provided user value."
      },
      {
        "name": "requestable",
        "schema": "string",
        "description": "Fetch all requestable departments by the currently authorized user. Accepts ORDER, EXPENSE, TRAVEL, and PAY_REQUEST."
      },
      {
        "name": "search",
        "schema": "string",
        "required": false,
        "description": "A search term."
      },
      {
        "name": "user",
        "schema": "integer",
        "description": "Filter by user. If this parameter is set, the user must be a superuser or have the add_po_by_department or receive_po_by_department permissions. In isolation, this parameter should only be used in conjunction with the PROCUREMENT_ACCESS and/or RECEIVE_BY_DEPARTMENT feature switches. If used in conjunction with location_perm_override=true and permission query parameter, the result returned will be departments filtered by the provided user and permission values. If used in conjunction with the RECEIVE_BY_DEPARTMENT feature flag, the result will be departments filtered by the user provided and the permission set to 68 (add purchase order); 841 (view report); or 899 (receive purchase order) (see permission query parameter explanation for more information on what these stand for)."
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
    "url": "/api/v3/departments",
    "method": "create",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "departments",
    "typeScriptTag": "departments",
    "description": "Create New Department",
    "parameters": [
      {
        "name": "format",
        "schema": "string",
        "description": ""
      },
      {
        "name": "branch",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "external_id",
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
      },
      {
        "name": "active",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "punchout_email",
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
    "url": "/api/v3/departments/{id}",
    "method": "update",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "departments",
    "typeScriptTag": "departments",
    "description": "Update Department",
    "parameters": [
      {
        "name": "format",
        "schema": "string",
        "description": ""
      },
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A unique integer value identifying this department.",
        "example": 0
      },
      {
        "name": "branch",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "external_id",
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
      },
      {
        "name": "active",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "punchout_email",
        "schema": "string",
        "required": false,
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
    "url": "/api/v3/order-items",
    "method": "listItems",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "order-items",
    "typeScriptTag": "orderItems",
    "description": "Get list of all order items",
    "parameters": [
      {
        "name": "account",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "accountCode",
        "schema": "integer",
        "description": "Account Code"
      },
      {
        "name": "active",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "approvedDatetime0",
        "schema": "string",
        "description": "Approved Date"
      },
      {
        "name": "approvedDatetime1",
        "schema": "string",
        "description": "Approved Date"
      },
      {
        "name": "approvedPrice",
        "schema": "number",
        "description": ""
      },
      {
        "name": "approvedQuantity",
        "schema": "number",
        "description": ""
      },
      {
        "name": "approver",
        "schema": "number",
        "description": ""
      },
      {
        "name": "approverId",
        "schema": "number",
        "description": ""
      },
      {
        "name": "branch",
        "schema": "integer",
        "description": "Location"
      },
      {
        "name": "catalog",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "catalogItem",
        "schema": "string",
        "description": "A comma-separated list of integers."
      },
      {
        "name": "currency",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "department",
        "schema": "integer",
        "description": "Department"
      },
      {
        "name": "departments",
        "schema": "string",
        "description": "A comma-separated list of integers."
      },
      {
        "name": "exclude",
        "schema": "string",
        "description": "A comma-separated list of integers."
      },
      {
        "name": "excludePunchout",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "format",
        "schema": "string",
        "description": ""
      },
      {
        "name": "fulfilmentStatus",
        "schema": "string",
        "description": ""
      },
      {
        "name": "isPurchased",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "isRecurring",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "lastChangedBy",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "lastModified0",
        "schema": "string",
        "description": "Last Modified Date"
      },
      {
        "name": "lastModified1",
        "schema": "string",
        "description": "Last Modified Date"
      },
      {
        "name": "lineComment",
        "schema": "string",
        "description": ""
      },
      {
        "name": "location",
        "schema": "integer",
        "description": "Location"
      },
      {
        "name": "locations",
        "schema": "string",
        "description": "A comma-separated list of integers."
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "num",
        "schema": "string",
        "description": ""
      },
      {
        "name": "orderNum",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "orderNumStatus",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "orderBy",
        "schema": "string",
        "required": false,
        "description": "Which field to use when ordering the results."
      },
      {
        "name": "orderCreatedDate0",
        "schema": "string",
        "description": "Order Created Date"
      },
      {
        "name": "orderCreatedDate1",
        "schema": "string",
        "description": "Order Created Date"
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "A page number within the paginated result set."
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "required": false,
        "description": "Number of results to return per page."
      },
      {
        "name": "poCreatedDate0",
        "schema": "string",
        "description": "Purchased Date"
      },
      {
        "name": "poCreatedDate1",
        "schema": "string",
        "description": "Purchased Date"
      },
      {
        "name": "poVendor",
        "schema": "integer",
        "description": "Purchased Vendor"
      },
      {
        "name": "prefVendor",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "price",
        "schema": "number",
        "description": ""
      },
      {
        "name": "purchaseAgreement",
        "schema": "number",
        "description": ""
      },
      {
        "name": "purchasedDate0",
        "schema": "string",
        "description": "Purchased Date"
      },
      {
        "name": "purchasedDate1",
        "schema": "string",
        "description": "Purchased Date"
      },
      {
        "name": "purchaser",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "quantity",
        "schema": "number",
        "description": ""
      },
      {
        "name": "receivedFailQty",
        "schema": "number",
        "description": ""
      },
      {
        "name": "receivedPassQty",
        "schema": "number",
        "description": ""
      },
      {
        "name": "requester",
        "schema": "integer",
        "description": "Requester"
      },
      {
        "name": "search",
        "schema": "string",
        "required": false,
        "description": "A search term."
      },
      {
        "name": "sku",
        "schema": "string",
        "description": ""
      },
      {
        "name": "status",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "type",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "unit",
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
    "url": "/api/v3/permissions",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "permissions",
    "typeScriptTag": "permissions",
    "description": "Get Available User Permissions",
    "parameters": [
      {
        "name": "format",
        "schema": "string",
        "description": ""
      },
      {
        "name": "orderBy",
        "schema": "string",
        "required": false,
        "description": "Which field to use when ordering the results."
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "A page number within the paginated result set."
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "required": false,
        "description": "Number of results to return per page."
      },
      {
        "name": "search",
        "schema": "string",
        "required": false,
        "description": "A search term."
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
    "url": "/api/v3/permissions/groups",
    "method": "getAvailableSystemRoles",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "permissions",
    "typeScriptTag": "permissions",
    "description": "Get Available System Roles",
    "parameters": [
      {
        "name": "format",
        "schema": "string",
        "description": ""
      },
      {
        "name": "orderBy",
        "schema": "string",
        "required": false,
        "description": "Which field to use when ordering the results."
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "A page number within the paginated result set."
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "required": false,
        "description": "Number of results to return per page."
      },
      {
        "name": "permission",
        "schema": "string",
        "description": ""
      },
      {
        "name": "search",
        "schema": "string",
        "required": false,
        "description": "A search term."
      },
      {
        "name": "type",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "user",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "userprofile",
        "schema": "integer",
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
    "url": "/api/v3/purchase-orders/{procurify_PO}",
    "method": "updateOrder",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "purchase-orders",
    "typeScriptTag": "purchaseOrders",
    "description": "Update a Purchase Order",
    "parameters": [
      {
        "name": "format",
        "schema": "string",
        "description": ""
      },
      {
        "name": "procurifyPo",
        "schema": "integer",
        "required": true,
        "description": "A unique integer value identifying this po.",
        "example": 0
      },
      {
        "name": "version",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "order_items",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "custom_fields",
        "schema": "array",
        "required": false,
        "description": "",
        "default": []
      },
      {
        "name": "PO_Num",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "buyer_name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "BUYER_NAME"
      },
      {
        "name": "buyer_contact",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "BUYER_CONTACT"
      },
      {
        "name": "buyer_addressLineOne",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "BUYER_ADDRESSLINEONE"
      },
      {
        "name": "buyer_postalCode",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "BUYER_POSTALCODE"
      },
      {
        "name": "buyer_city",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "BUYER_CITY"
      },
      {
        "name": "buyer_state_province",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "buyer_country",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "BUYER_COUNTRY"
      },
      {
        "name": "buyer_address",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "comment",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "receiver_name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "RECEIVER_NAME"
      },
      {
        "name": "receiver_contact",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "RECEIVER_CONTACT"
      },
      {
        "name": "receiver_addressLineOne",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "RECEIVER_ADDRESSLINEONE"
      },
      {
        "name": "receiver_postalCode",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "RECEIVER_POSTALCODE"
      },
      {
        "name": "receiver_city",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "RECEIVER_CITY"
      },
      {
        "name": "receiver_state_province",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "receiver_country",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "RECEIVER_COUNTRY"
      },
      {
        "name": "receiver_address",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "promise_date",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PROMISE_DATE"
      },
      {
        "name": "freight",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "discount",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "tax",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "other",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "disclaimer_description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "disclaimer_text",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "payment_term_ref",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "shipping_term_ref",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "payment_method_ref",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "shipping_method_ref",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "creditcard",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "expiry_date",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "contract",
        "schema": "integer",
        "required": false,
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
    "url": "/api/v3/purchase-orders/{procurify_PO}/close",
    "method": "closeOrder",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "purchase-orders",
    "typeScriptTag": "purchaseOrders",
    "description": "Close a Purchase Order",
    "parameters": [
      {
        "name": "format",
        "schema": "string",
        "description": ""
      },
      {
        "name": "procurifyPo",
        "schema": "integer",
        "required": true,
        "description": "A unique integer value identifying this po.",
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
    "url": "/api/v3/purchase-orders/{procurify_PO}/reopen",
    "method": "reopenProcurifyPo",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "purchase-orders",
    "typeScriptTag": "purchaseOrders",
    "description": "Reopen a Purchase Order",
    "parameters": [
      {
        "name": "format",
        "schema": "string",
        "description": ""
      },
      {
        "name": "procurifyPo",
        "schema": "integer",
        "required": true,
        "description": "A unique integer value identifying this po.",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "No response body"
      }
    ]
  },
  {
    "url": "/api/v3/purchase-orders/billing-history",
    "method": "viewBillingHistory",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "purchase-orders",
    "typeScriptTag": "purchaseOrders",
    "description": "View billing history of a Purchase Order",
    "parameters": [
      {
        "name": "format",
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
    "url": "/api/v3/requisitions",
    "method": "create",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "requisitions",
    "typeScriptTag": "requisitions",
    "description": "Creating a requisition",
    "parameters": [
      {
        "name": "format",
        "schema": "string",
        "description": ""
      },
      {
        "name": "required_date",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "REQUIRED_DATE"
      },
      {
        "name": "location_name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "LOCATION_NAME"
      },
      {
        "name": "department_name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DEPARTMENT_NAME"
      },
      {
        "name": "line_items",
        "schema": "array",
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
    "url": "/api/v3/users",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "users",
    "typeScriptTag": "users",
    "description": "List Users",
    "parameters": [
      {
        "name": "format",
        "schema": "string",
        "description": ""
      },
      {
        "name": "isActive",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "location",
        "schema": "string",
        "description": ""
      },
      {
        "name": "orderBy",
        "schema": "string",
        "required": false,
        "description": "Which field to use when ordering the results."
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "A page number within the paginated result set."
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "required": false,
        "description": "Number of results to return per page."
      },
      {
        "name": "pendingInvite",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "permission",
        "schema": "string",
        "description": ""
      },
      {
        "name": "role",
        "schema": "number",
        "description": ""
      },
      {
        "name": "search",
        "schema": "string",
        "required": false,
        "description": "A search term."
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
    "url": "/api/v3/users",
    "method": "create",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "users",
    "typeScriptTag": "users",
    "description": "Create New User",
    "parameters": [
      {
        "name": "format",
        "schema": "string",
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
    "url": "/api/v3/users/{id}",
    "method": "destroy",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "users",
    "typeScriptTag": "users",
    "description": "Deactivate User",
    "parameters": [
      {
        "name": "format",
        "schema": "string",
        "description": ""
      },
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A unique integer value identifying this user profile.",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No response body"
      }
    ]
  },
  {
    "url": "/api/v3/users/{id}",
    "method": "update",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "users",
    "typeScriptTag": "users",
    "description": "Update User",
    "parameters": [
      {
        "name": "format",
        "schema": "string",
        "description": ""
      },
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A unique integer value identifying this user profile.",
        "example": 0
      },
      {
        "name": "id",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "user",
        "schema": "integer",
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
        "name": "firstName",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FIRSTNAME"
      },
      {
        "name": "lastName",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "LASTNAME"
      },
      {
        "name": "location",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "department",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "position",
        "schema": "string",
        "required": false,
        "description": "",
        "default": ""
      },
      {
        "name": "phone",
        "schema": "string",
        "required": false,
        "description": "",
        "default": ""
      },
      {
        "name": "profile_image",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "is_sso_enabled",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "mark_for_skip",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "mark_for_delete",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
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
    "url": "/api/v3/users/me",
    "method": "getLoggedInUser",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "users",
    "typeScriptTag": "users",
    "description": "Get Logged-in User",
    "parameters": [
      {
        "name": "format",
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
    "url": "/api/v3/vendors",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "vendors",
    "typeScriptTag": "vendors",
    "description": "Get list of all active vendors",
    "parameters": [
      {
        "name": "excludeOther",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "externalId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "format",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "orderBy",
        "schema": "string",
        "required": false,
        "description": "Which field to use when ordering the results."
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "A page number within the paginated result set."
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "required": false,
        "description": "Number of results to return per page."
      },
      {
        "name": "search",
        "schema": "string",
        "required": false,
        "description": "A search term."
      },
      {
        "name": "type",
        "schema": "integer",
        "description": "Type of the vendor. See above for possible options."
      },
      {
        "name": "vendorGroup",
        "schema": "string",
        "required": true,
        "description": "\n**\"all\"**: Get list of all vendors.\n\n**\"credit_card_providers\"**: Get list of credit card provider vendors. These vendors are displayed in Payee Management for Credit Card Providers.\n\n**\"default\"**: Get list of \"preferred\" and \"regular\" vendors. These vendors are displayed in Procure (procurement, vendors, etc) and AP i.e., default vendor list. OTHER is discontinued from procure.\n\n**\"other\"**: Get list of \"other\" vendors. Only returns the 'OTHER' vendor reserved for requesting non-vendor names.\n\n**\"preferred\"**: Get list of \"preferred\" vendors.\n\n**\"purchasable\"**: Get list of \"purchasable\" vendors.\n\n**\"requestable\"**: Get list of \"requestable\" vendors. These vendors are displayed in Request and designated by Purchaser.",
        "example": "VENDOR_GROUP"
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
    "url": "/api/v3/vendors",
    "method": "create",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "vendors",
    "typeScriptTag": "vendors",
    "description": "Create Vendor",
    "parameters": [
      {
        "name": "format",
        "schema": "string",
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
        "name": "active",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "addressLineOne",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "addressLineTwo",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "postalCode",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "city",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "state_province",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "country",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "phoneOne",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "phoneTwo",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "fax",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "email",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "comments",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "contact",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "url",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "external_id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "currency",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "payment_term_ref",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "shipping_term_ref",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "payment_method_ref",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "shipping_method_ref",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "tax",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "type",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "default_payment_method",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "is_1099_eligible",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "overall_score",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "OVERALL_SCORE"
      },
      {
        "name": "is_auto_email_po_enabled",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "po_pdf_labels",
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
    "url": "/api/v3/vendors/{id}",
    "method": "retrieve",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "vendors",
    "typeScriptTag": "vendors",
    "description": "Get Vendor by ID",
    "parameters": [
      {
        "name": "format",
        "schema": "string",
        "description": ""
      },
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A unique integer value identifying this vendor.",
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
    "url": "/api/v3/vendors/{id}",
    "method": "partialUpdate",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "vendors",
    "typeScriptTag": "vendors",
    "description": "Partial Update Vendor",
    "parameters": [
      {
        "name": "format",
        "schema": "string",
        "description": ""
      },
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A unique integer value identifying this vendor.",
        "example": 0
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "active",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "addressLineOne",
        "schema": "string",
        "description": ""
      },
      {
        "name": "addressLineTwo",
        "schema": "string",
        "description": ""
      },
      {
        "name": "postalCode",
        "schema": "string",
        "description": ""
      },
      {
        "name": "city",
        "schema": "string",
        "description": ""
      },
      {
        "name": "state_province",
        "schema": "string",
        "description": ""
      },
      {
        "name": "country",
        "schema": "string",
        "description": ""
      },
      {
        "name": "phoneOne",
        "schema": "string",
        "description": ""
      },
      {
        "name": "phoneTwo",
        "schema": "string",
        "description": ""
      },
      {
        "name": "fax",
        "schema": "string",
        "description": ""
      },
      {
        "name": "email",
        "schema": "array",
        "description": ""
      },
      {
        "name": "comments",
        "schema": "string",
        "description": ""
      },
      {
        "name": "contact",
        "schema": "string",
        "description": ""
      },
      {
        "name": "url",
        "schema": "string",
        "description": ""
      },
      {
        "name": "external_id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "currency",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "payment_term_ref",
        "schema": "object",
        "description": ""
      },
      {
        "name": "shipping_term_ref",
        "schema": "object",
        "description": ""
      },
      {
        "name": "payment_method_ref",
        "schema": "object",
        "description": ""
      },
      {
        "name": "shipping_method_ref",
        "schema": "object",
        "description": ""
      },
      {
        "name": "tax",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "type",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "default_payment_method",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "is_1099_eligible",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "overall_score",
        "schema": "string",
        "description": ""
      },
      {
        "name": "is_auto_email_po_enabled",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "po_pdf_labels",
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
    "url": "/api/v3/vendors/{id}",
    "method": "update",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "vendors",
    "typeScriptTag": "vendors",
    "description": "Update Vendor",
    "parameters": [
      {
        "name": "format",
        "schema": "string",
        "description": ""
      },
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A unique integer value identifying this vendor.",
        "example": 0
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "active",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "addressLineOne",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "addressLineTwo",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "postalCode",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "city",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "state_province",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "country",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "phoneOne",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "phoneTwo",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "fax",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "email",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "comments",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "contact",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "url",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "external_id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "currency",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "payment_term_ref",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "shipping_term_ref",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "payment_method_ref",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "shipping_method_ref",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "tax",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "type",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "default_payment_method",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "is_1099_eligible",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "overall_score",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "OVERALL_SCORE"
      },
      {
        "name": "is_auto_email_po_enabled",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "po_pdf_labels",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
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
      apiTitle="Procurify API Documentation"
      apiBaseUrl="https://{user_domain}.procurify.com"
      apiVersion=""
      endpoints={39}
      sdkMethods={50}
      schemas={244}
      parameters={626}
      difficulty="Hard"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/procurify/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/procurify/openapi.yaml"
      developerDocumentation="developer.procurify.com/"
    />
  );
}
  