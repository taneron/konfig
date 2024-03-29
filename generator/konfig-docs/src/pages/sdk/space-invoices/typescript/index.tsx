import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function SpaceInvoicesTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="space-invoices-typescript-sdk"
      metaDescription={`Off-the-shelf invoicing API and UI, our customers dramatically reduce their time-to-market from weeks or months to just days while simultaneously providing a new revenue stream by offering their own invoice-as-a-service solution to their customers.`}
      company="Space Invoices"
      doesNotHaveApiDescription={true}
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/space-invoices/logo.png"
      companyKebabCase="space-invoices"
      clientNameCamelCase="spaceInvoices"
      homepage="spaceinvoices.com"
      lastUpdated={new Date("2024-03-29T23:29:00.943Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/space-invoices/favicon.jpg"
      // Missing contactUrl
      // Missing contactEmail
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/space-invoices/imagePreview.jpg"
      GettingStarted={GettingStarted}
      FirstRequest={FirstRequest}
      categories={["finance","billing","invoicing"]}
      methods={[
  {
    "url": "/live",
    "method": "getStatus",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "HealthController",
    "typeScriptTag": "healthController",
    "description": "",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "503",
        "description": ""
      }
    ]
  },
  {
    "url": "/ready",
    "method": "getStatus",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "HealthController",
    "typeScriptTag": "healthController",
    "description": "",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "503",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/accounts/count",
    "method": "getCount",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "AccountController",
    "typeScriptTag": "accountController",
    "description": "",
    "parameters": [
      {
        "name": "where",
        "schema": "undefined",
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
    "url": "/v1/accounts",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "AccountController",
    "typeScriptTag": "accountController",
    "description": "",
    "parameters": [
      {
        "name": "filter",
        "schema": "undefined",
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
    "url": "/v1/documents/{shareableId}/payment-intent",
    "method": "getPaymentIntentByShareableId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "DocumentPaymentIntentController",
    "typeScriptTag": "documentPaymentIntentController",
    "description": "",
    "parameters": [
      {
        "name": "shareableId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SHAREABLEID"
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
    "url": "/v1/documents/{shareableId}/stripe-connect/payment-intent",
    "method": "getByShareableId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "DocumentStripeConnectPaymentIntentController",
    "typeScriptTag": "documentStripeConnectPaymentIntentController",
    "description": "",
    "parameters": [
      {
        "name": "shareableId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SHAREABLEID"
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
    "url": "/v1/fattura-pa/webhooks",
    "method": "createWebhooksSubscription",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "FatturaPaController",
    "typeScriptTag": "fatturaPaController",
    "description": "",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/organizations/{organizationId}/atcud/get-active",
    "method": "getActiveAtcud",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "AtcudSeriesController",
    "typeScriptTag": "atcudSeriesController",
    "description": "",
    "parameters": [
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ORGANIZATIONID"
      },
      {
        "name": "type",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "(tsType: AtcudSeriesWithRelations, schemaOptions: { includeRelations: true })"
      }
    ]
  },
  {
    "url": "/v1/organizations/{organizationId}/atcud/{id}",
    "method": "getAtcudById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "AtcudSeriesController",
    "typeScriptTag": "atcudSeriesController",
    "description": "",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "filter",
        "schema": "undefined",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "(tsType: AtcudSeriesWithRelations, schemaOptions: { includeRelations: true })"
      }
    ]
  },
  {
    "url": "/v1/organizations/{organizationId}/atcud",
    "method": "getByOrganization",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "AtcudSeriesController",
    "typeScriptTag": "atcudSeriesController",
    "description": "",
    "parameters": [
      {
        "name": "filter",
        "schema": "undefined",
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
    "url": "/v1/organizations/{organizationId}/atcud",
    "method": "createAtcud",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "AtcudSeriesController",
    "typeScriptTag": "atcudSeriesController",
    "description": "",
    "parameters": [
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ORGANIZATIONID"
      },
      {
        "name": "createdAt",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "updatedAt",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "seriesId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SERIESID"
      },
      {
        "name": "code",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CODE"
      },
      {
        "name": "documentType",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DOCUMENTTYPE"
      },
      {
        "name": "startDate",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "STARTDATE"
      },
      {
        "name": "firstNumber",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FIRSTNUMBER"
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
    "url": "/v1/organizations/{id}/merchant/link",
    "method": "getMerchantLink",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "OrganizationMerchantLinkController",
    "typeScriptTag": "organizationMerchantLinkController",
    "description": "",
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
    "url": "/v1/organizations/{id}/merchant",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "OrganizationMerchantController",
    "typeScriptTag": "organizationMerchantController",
    "description": "",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "filter",
        "schema": "undefined",
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
    "url": "/v1/organizations/{id}/merchant",
    "method": "updateMerchantById",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "OrganizationMerchantController",
    "typeScriptTag": "organizationMerchantController",
    "description": "",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "where",
        "schema": "undefined",
        "description": ""
      },
      {
        "name": "link",
        "schema": "string",
        "description": ""
      },
      {
        "name": "active",
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
    "url": "/v1/organizations/{id}/merchant",
    "method": "createMerchant",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "OrganizationMerchantController",
    "typeScriptTag": "organizationMerchantController",
    "description": "",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "link",
        "schema": "string",
        "description": ""
      },
      {
        "name": "active",
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
    "url": "/v1/organizations/{id}/payment-intents/authorized",
    "method": "createAuthorizedPaymentIntent",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "OrganizationPaymentIntentController",
    "typeScriptTag": "organizationPaymentIntentController",
    "description": "",
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
    "url": "/v1/organizations/{id}/payment-intents",
    "method": "getPaymentIntents",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "OrganizationPaymentIntentController",
    "typeScriptTag": "organizationPaymentIntentController",
    "description": "",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "filter",
        "schema": "undefined",
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
    "url": "/v1/organizations/{id}/payment-intents",
    "method": "createPaymentIntent",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "OrganizationPaymentIntentController",
    "typeScriptTag": "organizationPaymentIntentController",
    "description": "",
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
    "url": "/v1/organizations/{id}/saft-pt/report",
    "method": "generateReportById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "SaftPtController",
    "typeScriptTag": "saftPtController",
    "description": "",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "from",
        "schema": "string",
        "description": ""
      },
      {
        "name": "to",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Return value of SaftPtController.generateSaftPt"
      }
    ]
  },
  {
    "url": "/v1/organizations/{id}/stripe-connect/account/link",
    "method": "getStripeLink",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "OrganizationStripeConnectAccountLinkController",
    "typeScriptTag": "organizationStripeConnectAccountLinkController",
    "description": "",
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
    "url": "/v1/organizations/{id}/stripe-connect/account",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "OrganizationStripeConnectAccountController",
    "typeScriptTag": "organizationStripeConnectAccountController",
    "description": "",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "filter",
        "schema": "undefined",
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
    "url": "/v1/organizations/{id}/stripe-connect/account",
    "method": "createStripeAccount",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "OrganizationStripeConnectAccountController",
    "typeScriptTag": "organizationStripeConnectAccountController",
    "description": "",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "active",
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
    "url": "/v1/organizations/{id}/transactions",
    "method": "listById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "OrganizationTransactionController",
    "typeScriptTag": "organizationTransactionController",
    "description": "",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "filter",
        "schema": "undefined",
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
    "url": "/v1/payment-processing/webhooks",
    "method": "createWebhook",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "PaymentProcessingController",
    "typeScriptTag": "paymentProcessingController",
    "description": "",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/payment-processing",
    "method": "getPaymentProcessing",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "AccountPaymentProcessingController",
    "typeScriptTag": "accountPaymentProcessingController",
    "description": "",
    "parameters": [
      {
        "name": "filter",
        "schema": "undefined",
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
    "url": "/v1/payment-processing",
    "method": "updatePaymentProcessing",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "AccountPaymentProcessingController",
    "typeScriptTag": "accountPaymentProcessingController",
    "description": "",
    "parameters": [
      {
        "name": "custom",
        "schema": "object",
        "description": ""
      },
      {
        "name": "active",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "applicationFee",
        "schema": "number",
        "description": ""
      },
      {
        "name": "paymentCompleteReturnURL",
        "schema": "string",
        "description": ""
      },
      {
        "name": "merchantId",
        "schema": "string",
        "description": ""
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
    "url": "/v1/payment-processing",
    "method": "createPaymentProcess",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "AccountPaymentProcessingController",
    "typeScriptTag": "accountPaymentProcessingController",
    "description": "",
    "parameters": [
      {
        "name": "custom",
        "schema": "object",
        "description": ""
      },
      {
        "name": "active",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "applicationFee",
        "schema": "number",
        "description": ""
      },
      {
        "name": "paymentCompleteReturnURL",
        "schema": "string",
        "description": ""
      },
      {
        "name": "environment",
        "schema": "string",
        "description": ""
      },
      {
        "name": "merchantId",
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
    "url": "/v1/stripe-connect/accounts/{id}",
    "method": "updateById",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "StripeConnectAccountController",
    "typeScriptTag": "stripeConnectAccountController",
    "description": "",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "active",
        "schema": "boolean",
        "description": ""
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
    "url": "/v1/stripe-connect/{id}/webhooks",
    "method": "createWebhooks",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "StripeConnectController",
    "typeScriptTag": "stripeConnectController",
    "description": "",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "connect",
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
    "url": "/v1/stripe-connect",
    "method": "getStripeConnect",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "AccountStripeConnectController",
    "typeScriptTag": "accountStripeConnectController",
    "description": "",
    "parameters": [
      {
        "name": "filter",
        "schema": "undefined",
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
    "url": "/v1/stripe-connect",
    "method": "updateStripeConnect",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "AccountStripeConnectController",
    "typeScriptTag": "accountStripeConnectController",
    "description": "",
    "parameters": [
      {
        "name": "custom",
        "schema": "object",
        "description": ""
      },
      {
        "name": "privateKey",
        "schema": "string",
        "description": ""
      },
      {
        "name": "publicKey",
        "schema": "string",
        "description": ""
      },
      {
        "name": "connectWebhookSecret",
        "schema": "string",
        "description": ""
      },
      {
        "name": "active",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "refreshUrl",
        "schema": "string",
        "description": ""
      },
      {
        "name": "returnUrl",
        "schema": "string",
        "description": ""
      },
      {
        "name": "applicationFee",
        "schema": "number",
        "description": ""
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
    "url": "/v1/stripe-connect",
    "method": "createStripeConnect",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "AccountStripeConnectController",
    "typeScriptTag": "accountStripeConnectController",
    "description": "",
    "parameters": [
      {
        "name": "custom",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "privateKey",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PRIVATEKEY"
      },
      {
        "name": "publicKey",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PUBLICKEY"
      },
      {
        "name": "connectWebhookSecret",
        "schema": "string",
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
        "name": "refreshUrl",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "returnUrl",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "applicationFee",
        "schema": "number",
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
    "url": "/v2/invoices/{id}",
    "method": "removeById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "InvoiceController",
    "typeScriptTag": "invoiceController",
    "description": "",
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
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/invoices/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "InvoiceController",
    "typeScriptTag": "invoiceController",
    "description": "",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "filter",
        "schema": "undefined",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "(tsType: InvoiceWithRelations, schemaOptions: { includeRelations: true })"
      }
    ]
  },
  {
    "url": "/v2/invoices/{id}",
    "method": "updateById",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "InvoiceController",
    "typeScriptTag": "invoiceController",
    "description": "",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "createdAt",
        "schema": "string",
        "description": ""
      },
      {
        "name": "updatedAt",
        "schema": "string",
        "description": ""
      },
      {
        "name": "custom",
        "schema": "object",
        "description": ""
      },
      {
        "name": "l10n",
        "schema": "object",
        "description": ""
      },
      {
        "name": "_isDeleted",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "deletedAt",
        "schema": "string",
        "description": ""
      },
      {
        "name": "number",
        "schema": "string",
        "description": ""
      },
      {
        "name": "date",
        "schema": "string",
        "description": ""
      },
      {
        "name": "reference",
        "schema": "string",
        "description": ""
      },
      {
        "name": "total",
        "schema": "number",
        "description": ""
      },
      {
        "name": "totalConverted",
        "schema": "number",
        "description": ""
      },
      {
        "name": "totalDiscount",
        "schema": "number",
        "description": ""
      },
      {
        "name": "totalWithTax",
        "schema": "number",
        "description": ""
      },
      {
        "name": "totalWithTaxConverted",
        "schema": "number",
        "description": ""
      },
      {
        "name": "decimalPlaces",
        "schema": "number",
        "description": ""
      },
      {
        "name": "note",
        "schema": "string",
        "description": ""
      },
      {
        "name": "taxClause",
        "schema": "string",
        "description": ""
      },
      {
        "name": "omitTaxes",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "footer",
        "schema": "string",
        "description": ""
      },
      {
        "name": "signature",
        "schema": "string",
        "description": ""
      },
      {
        "name": "type",
        "schema": "string",
        "description": ""
      },
      {
        "name": "sentSnailMail",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "currencyId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "_documentTaxes",
        "schema": "array",
        "description": ""
      },
      {
        "name": "_documentReverseTaxes",
        "schema": "array",
        "description": ""
      },
      {
        "name": "hasUnit",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "uniqueId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "equalization",
        "schema": "number",
        "description": ""
      },
      {
        "name": "issuedAt",
        "schema": "string",
        "description": ""
      },
      {
        "name": "dateYear",
        "schema": "number",
        "description": ""
      },
      {
        "name": "shareableId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "_documentIssuer",
        "schema": "object",
        "description": ""
      },
      {
        "name": "_documentClient",
        "schema": "object",
        "description": ""
      },
      {
        "name": "_documentItems",
        "schema": "array",
        "description": ""
      },
      {
        "name": "incoming",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "draft",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "dateService",
        "schema": "string",
        "description": ""
      },
      {
        "name": "dateServiceTo",
        "schema": "string",
        "description": ""
      },
      {
        "name": "dateDue",
        "schema": "string",
        "description": ""
      },
      {
        "name": "canceled",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "totalPaid",
        "schema": "number",
        "description": ""
      },
      {
        "name": "totalDue",
        "schema": "number",
        "description": ""
      },
      {
        "name": "paidInFull",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "chargesDisabled",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "stripeConnectPaymentIntent",
        "schema": "object",
        "description": ""
      },
      {
        "name": "organizationId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "accountId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "clientId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "_fatturaPa",
        "schema": "object",
        "description": ""
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
    "url": "/v2/invoices/{id}",
    "method": "updateById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "InvoiceController",
    "typeScriptTag": "invoiceController",
    "description": "",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "createdAt",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "updatedAt",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "custom",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "l10n",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "_isDeleted",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "deletedAt",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "number",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "date",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DATE"
      },
      {
        "name": "reference",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "total",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "totalConverted",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "totalDiscount",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "totalWithTax",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "totalWithTaxConverted",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "decimalPlaces",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "note",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "taxClause",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "omitTaxes",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "footer",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "signature",
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
        "name": "sentSnailMail",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "currencyId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CURRENCYID"
      },
      {
        "name": "_documentTaxes",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "_documentReverseTaxes",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "hasUnit",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "uniqueId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "equalization",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "issuedAt",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "dateYear",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "shareableId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "_documentIssuer",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "_documentClient",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "_documentItems",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "incoming",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "draft",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "dateService",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "dateServiceTo",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "dateDue",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "canceled",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "totalPaid",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "totalDue",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "paidInFull",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "chargesDisabled",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "stripeConnectPaymentIntent",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "organizationId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "accountId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "clientId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "_fatturaPa",
        "schema": "object",
        "required": false,
        "description": ""
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
    "url": "/",
    "method": "getStatus",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "HealthController",
    "typeScriptTag": "healthController",
    "description": "",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "503",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/Documents/{id}/recurrence",
    "method": "getRecurrence",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Document",
    "typeScriptTag": "document",
    "description": "Fetches hasOne relation recurrence.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Document id",
        "example": "ID"
      },
      {
        "name": "refresh",
        "schema": "boolean",
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
    "url": "/v1/Documents/{id}/recurrence",
    "method": "createInstanceInRecurrence",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Document",
    "typeScriptTag": "document",
    "description": "Creates a new instance in recurrence of this model.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Document id",
        "example": "ID"
      },
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
        "example": "TYPE"
      },
      {
        "name": "dateFirst",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DATEFIRST"
      },
      {
        "name": "numRecurrences",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "autoSend",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true,
        "default": false
      },
      {
        "name": "notify",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true,
        "default": true
      },
      {
        "name": "saveAsDraft",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true,
        "default": false
      },
      {
        "name": "id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "organizationId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "documentId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "accountId",
        "schema": "string",
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
        "name": "updatedAt",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "custom",
        "schema": "object",
        "required": false,
        "description": "",
        "default": {}
      },
      {
        "name": "deletedAt",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "_isDeleted",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "deletedId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "_recurrenceDates",
        "schema": "array",
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
    "url": "/v1/Documents/{id}/comments/{fk}",
    "method": "deleteRelatedItemByIdForComments",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Document",
    "typeScriptTag": "document",
    "description": "Delete a related item by id for comments.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Document id",
        "example": "ID"
      },
      {
        "name": "fk",
        "schema": "string",
        "required": true,
        "description": "Foreign key for comments",
        "example": "FK"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Request was successful"
      }
    ]
  },
  {
    "url": "/v1/Documents/{id}/comments/{fk}",
    "method": "updateRelatedItemById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Document",
    "typeScriptTag": "document",
    "description": "Update a related item by id for comments.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Document id",
        "example": "ID"
      },
      {
        "name": "fk",
        "schema": "string",
        "required": true,
        "description": "Foreign key for comments",
        "example": "FK"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "text",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TEXT"
      },
      {
        "name": "accountId",
        "schema": "string",
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
        "name": "updatedAt",
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
    "url": "/v1/Documents/{id}/payments",
    "method": "getPayments",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Document",
    "typeScriptTag": "document",
    "description": "Queries payments of Document.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Document id",
        "example": "ID"
      },
      {
        "name": "filter",
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
    "url": "/v1/Documents/{id}/payments",
    "method": "createPaymentInstance",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Document",
    "typeScriptTag": "document",
    "description": "Creates a new instance in payments of this model.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Document id",
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
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TYPE"
      },
      {
        "name": "tag",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "date",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DATE"
      },
      {
        "name": "note",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "transactionId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "documentId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "organizationId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "deletedAt",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "_isDeleted",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "deletedId",
        "schema": "string",
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
        "name": "updatedAt",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "custom",
        "schema": "object",
        "required": false,
        "description": "",
        "default": {}
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
    "url": "/v1/Documents/{id}/payments/count",
    "method": "countPayments",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Document",
    "typeScriptTag": "document",
    "description": "Counts payments of Document.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Document id",
        "example": "ID"
      },
      {
        "name": "where",
        "schema": "string",
        "required": false,
        "description": "Criteria to match model instances"
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
    "url": "/v1/Documents/{id}/comments",
    "method": "createInstanceInComments",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Document",
    "typeScriptTag": "document",
    "description": "Creates a new instance in comments of this model.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Document id",
        "example": "ID"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "text",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TEXT"
      },
      {
        "name": "accountId",
        "schema": "string",
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
        "name": "updatedAt",
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
    "url": "/v1/Documents/{id}/documentCategories",
    "method": "createInstanceInDocumentCategories",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Document",
    "typeScriptTag": "document",
    "description": "Creates a new instance in documentCategories of this model.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Document id",
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
        "name": "amountConverted",
        "schema": "number",
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
        "name": "organizationId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "documentId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "categoryId",
        "schema": "string",
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
        "name": "updatedAt",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "deletedAt",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "_isDeleted",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "deletedId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "custom",
        "schema": "object",
        "required": false,
        "description": "",
        "default": {}
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
    "url": "/v1/Documents/{id}",
    "method": "deleteById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Document",
    "typeScriptTag": "document",
    "description": "Delete a model instance by {{id}} from the data source.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Model id",
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
    "url": "/v1/Documents/{id}",
    "method": "findById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Document",
    "typeScriptTag": "document",
    "description": "Find a model instance by {{id}} from the data source.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Model id",
        "example": "ID"
      },
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "Filter defining fields and include - must be a JSON-encoded string ({\"something\":\"value\"})"
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
    "url": "/v1/Documents/{id}",
    "method": "patchAttributesById",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Document",
    "typeScriptTag": "document",
    "description": "Patch attributes for a model instance and persist it into the data source.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Document id",
        "example": "ID"
      },
      {
        "name": "_fatturaPa",
        "schema": "object",
        "description": ""
      },
      {
        "name": "number",
        "schema": "string",
        "description": ""
      },
      {
        "name": "previousDocumentId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "draft",
        "schema": "boolean",
        "description": "",
        "default": false
      },
      {
        "name": "date",
        "schema": "string",
        "description": ""
      },
      {
        "name": "dateService",
        "schema": "string",
        "description": ""
      },
      {
        "name": "dateServiceTo",
        "schema": "string",
        "description": ""
      },
      {
        "name": "dateDue",
        "schema": "string",
        "description": ""
      },
      {
        "name": "dateValidTill",
        "schema": "string",
        "description": ""
      },
      {
        "name": "datePaid",
        "schema": "string",
        "description": ""
      },
      {
        "name": "dateReceived",
        "schema": "string",
        "description": ""
      },
      {
        "name": "reference",
        "schema": "string",
        "description": ""
      },
      {
        "name": "total",
        "schema": "number",
        "description": ""
      },
      {
        "name": "totalConverted",
        "schema": "number",
        "description": ""
      },
      {
        "name": "totalDiscount",
        "schema": "number",
        "description": ""
      },
      {
        "name": "totalWithTax",
        "schema": "number",
        "description": ""
      },
      {
        "name": "totalWithTaxConverted",
        "schema": "number",
        "description": ""
      },
      {
        "name": "decimalPlaces",
        "schema": "number",
        "description": "",
        "default": 4
      },
      {
        "name": "note",
        "schema": "string",
        "description": ""
      },
      {
        "name": "taxClause",
        "schema": "string",
        "description": ""
      },
      {
        "name": "omitTaxes",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "keepPricesAsGross",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "ignoreOmitTaxes",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "footer",
        "schema": "string",
        "description": ""
      },
      {
        "name": "signature",
        "schema": "string",
        "description": ""
      },
      {
        "name": "type",
        "schema": "string",
        "description": "",
        "default": "invoice"
      },
      {
        "name": "displayName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "canceled",
        "schema": "boolean",
        "description": "",
        "default": false
      },
      {
        "name": "sentSnailMail",
        "schema": "boolean",
        "description": "",
        "default": false
      },
      {
        "name": "totalPaid",
        "schema": "number",
        "description": "",
        "default": 0
      },
      {
        "name": "totalDue",
        "schema": "number",
        "description": "",
        "default": 0
      },
      {
        "name": "paidInFull",
        "schema": "boolean",
        "description": "",
        "default": false
      },
      {
        "name": "currencyId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "_documentTaxes",
        "schema": "array",
        "description": ""
      },
      {
        "name": "_documentReverseTaxes",
        "schema": "array",
        "description": ""
      },
      {
        "name": "hasUnit",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "validateEslog",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "isValidEslog",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "uniqueId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "customTotals",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "incoming",
        "schema": "boolean",
        "description": "",
        "default": false
      },
      {
        "name": "numberInternal",
        "schema": "string",
        "description": ""
      },
      {
        "name": "equalization",
        "schema": "number",
        "description": ""
      },
      {
        "name": "sandbox",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "issuedAt",
        "schema": "string",
        "description": ""
      },
      {
        "name": "shareableId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "stripeConnectPaymentIntent",
        "schema": "object",
        "description": ""
      },
      {
        "name": "chargesDisabled",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "dateYear",
        "schema": "number",
        "description": ""
      },
      {
        "name": "id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "documentIds",
        "schema": "array",
        "description": ""
      },
      {
        "name": "createdAt",
        "schema": "string",
        "description": ""
      },
      {
        "name": "updatedAt",
        "schema": "string",
        "description": ""
      },
      {
        "name": "custom",
        "schema": "object",
        "description": "",
        "default": {}
      },
      {
        "name": "l10n",
        "schema": "object",
        "description": ""
      },
      {
        "name": "deletedAt",
        "schema": "string",
        "description": ""
      },
      {
        "name": "_isDeleted",
        "schema": "boolean",
        "description": "",
        "default": false
      },
      {
        "name": "deletedId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "_documentItems",
        "schema": "array",
        "description": ""
      },
      {
        "name": "_documentIssuer",
        "schema": "undefined",
        "description": ""
      },
      {
        "name": "clientId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "_documentClient",
        "schema": "undefined",
        "description": ""
      },
      {
        "name": "organizationId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "accountId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "_comments",
        "schema": "array",
        "description": ""
      },
      {
        "name": "_furs",
        "schema": "undefined",
        "description": ""
      },
      {
        "name": "_at",
        "schema": "undefined",
        "description": ""
      },
      {
        "name": "_fina",
        "schema": "undefined",
        "description": ""
      },
      {
        "name": "_documentConversionRate",
        "schema": "undefined",
        "description": ""
      },
      {
        "name": "unitId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "_documentUnit",
        "schema": "undefined",
        "description": ""
      },
      {
        "name": "priceListId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "warehouseId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "destinationWarehouseId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "_data",
        "schema": "array",
        "description": ""
      },
      {
        "name": "_bPay",
        "schema": "undefined",
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
    "url": "/v1/Documents/{id}",
    "method": "replaceAttributesById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Document",
    "typeScriptTag": "document",
    "description": "Replace attributes for a model instance and persist it into the data source.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Model id",
        "example": "ID"
      },
      {
        "name": "_fatturaPa",
        "schema": "object",
        "description": ""
      },
      {
        "name": "number",
        "schema": "string",
        "description": ""
      },
      {
        "name": "previousDocumentId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "draft",
        "schema": "boolean",
        "description": "",
        "default": false
      },
      {
        "name": "date",
        "schema": "string",
        "description": ""
      },
      {
        "name": "dateService",
        "schema": "string",
        "description": ""
      },
      {
        "name": "dateServiceTo",
        "schema": "string",
        "description": ""
      },
      {
        "name": "dateDue",
        "schema": "string",
        "description": ""
      },
      {
        "name": "dateValidTill",
        "schema": "string",
        "description": ""
      },
      {
        "name": "datePaid",
        "schema": "string",
        "description": ""
      },
      {
        "name": "dateReceived",
        "schema": "string",
        "description": ""
      },
      {
        "name": "reference",
        "schema": "string",
        "description": ""
      },
      {
        "name": "total",
        "schema": "number",
        "description": ""
      },
      {
        "name": "totalConverted",
        "schema": "number",
        "description": ""
      },
      {
        "name": "totalDiscount",
        "schema": "number",
        "description": ""
      },
      {
        "name": "totalWithTax",
        "schema": "number",
        "description": ""
      },
      {
        "name": "totalWithTaxConverted",
        "schema": "number",
        "description": ""
      },
      {
        "name": "decimalPlaces",
        "schema": "number",
        "description": "",
        "default": 4
      },
      {
        "name": "note",
        "schema": "string",
        "description": ""
      },
      {
        "name": "taxClause",
        "schema": "string",
        "description": ""
      },
      {
        "name": "omitTaxes",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "keepPricesAsGross",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "ignoreOmitTaxes",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "footer",
        "schema": "string",
        "description": ""
      },
      {
        "name": "signature",
        "schema": "string",
        "description": ""
      },
      {
        "name": "type",
        "schema": "string",
        "description": "",
        "default": "invoice"
      },
      {
        "name": "displayName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "canceled",
        "schema": "boolean",
        "description": "",
        "default": false
      },
      {
        "name": "sentSnailMail",
        "schema": "boolean",
        "description": "",
        "default": false
      },
      {
        "name": "totalPaid",
        "schema": "number",
        "description": "",
        "default": 0
      },
      {
        "name": "totalDue",
        "schema": "number",
        "description": "",
        "default": 0
      },
      {
        "name": "paidInFull",
        "schema": "boolean",
        "description": "",
        "default": false
      },
      {
        "name": "currencyId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "_documentTaxes",
        "schema": "array",
        "description": ""
      },
      {
        "name": "_documentReverseTaxes",
        "schema": "array",
        "description": ""
      },
      {
        "name": "hasUnit",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "validateEslog",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "isValidEslog",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "uniqueId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "customTotals",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "incoming",
        "schema": "boolean",
        "description": "",
        "default": false
      },
      {
        "name": "numberInternal",
        "schema": "string",
        "description": ""
      },
      {
        "name": "equalization",
        "schema": "number",
        "description": ""
      },
      {
        "name": "sandbox",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "issuedAt",
        "schema": "string",
        "description": ""
      },
      {
        "name": "shareableId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "stripeConnectPaymentIntent",
        "schema": "object",
        "description": ""
      },
      {
        "name": "chargesDisabled",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "dateYear",
        "schema": "number",
        "description": ""
      },
      {
        "name": "id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "documentIds",
        "schema": "array",
        "description": ""
      },
      {
        "name": "createdAt",
        "schema": "string",
        "description": ""
      },
      {
        "name": "updatedAt",
        "schema": "string",
        "description": ""
      },
      {
        "name": "custom",
        "schema": "object",
        "description": "",
        "default": {}
      },
      {
        "name": "l10n",
        "schema": "object",
        "description": ""
      },
      {
        "name": "deletedAt",
        "schema": "string",
        "description": ""
      },
      {
        "name": "_isDeleted",
        "schema": "boolean",
        "description": "",
        "default": false
      },
      {
        "name": "deletedId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "_documentItems",
        "schema": "array",
        "description": ""
      },
      {
        "name": "_documentIssuer",
        "schema": "undefined",
        "description": ""
      },
      {
        "name": "clientId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "_documentClient",
        "schema": "undefined",
        "description": ""
      },
      {
        "name": "organizationId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "accountId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "_comments",
        "schema": "array",
        "description": ""
      },
      {
        "name": "_furs",
        "schema": "undefined",
        "description": ""
      },
      {
        "name": "_at",
        "schema": "undefined",
        "description": ""
      },
      {
        "name": "_fina",
        "schema": "undefined",
        "description": ""
      },
      {
        "name": "_documentConversionRate",
        "schema": "undefined",
        "description": ""
      },
      {
        "name": "unitId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "_documentUnit",
        "schema": "undefined",
        "description": ""
      },
      {
        "name": "priceListId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "warehouseId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "destinationWarehouseId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "_data",
        "schema": "array",
        "description": ""
      },
      {
        "name": "_bPay",
        "schema": "undefined",
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
    "url": "/v1/Documents/{id}/replace",
    "method": "replaceAttributesById",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Document",
    "typeScriptTag": "document",
    "description": "Replace attributes for a model instance and persist it into the data source.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Model id",
        "example": "ID"
      },
      {
        "name": "_fatturaPa",
        "schema": "object",
        "description": ""
      },
      {
        "name": "number",
        "schema": "string",
        "description": ""
      },
      {
        "name": "previousDocumentId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "draft",
        "schema": "boolean",
        "description": "",
        "default": false
      },
      {
        "name": "date",
        "schema": "string",
        "description": ""
      },
      {
        "name": "dateService",
        "schema": "string",
        "description": ""
      },
      {
        "name": "dateServiceTo",
        "schema": "string",
        "description": ""
      },
      {
        "name": "dateDue",
        "schema": "string",
        "description": ""
      },
      {
        "name": "dateValidTill",
        "schema": "string",
        "description": ""
      },
      {
        "name": "datePaid",
        "schema": "string",
        "description": ""
      },
      {
        "name": "dateReceived",
        "schema": "string",
        "description": ""
      },
      {
        "name": "reference",
        "schema": "string",
        "description": ""
      },
      {
        "name": "total",
        "schema": "number",
        "description": ""
      },
      {
        "name": "totalConverted",
        "schema": "number",
        "description": ""
      },
      {
        "name": "totalDiscount",
        "schema": "number",
        "description": ""
      },
      {
        "name": "totalWithTax",
        "schema": "number",
        "description": ""
      },
      {
        "name": "totalWithTaxConverted",
        "schema": "number",
        "description": ""
      },
      {
        "name": "decimalPlaces",
        "schema": "number",
        "description": "",
        "default": 4
      },
      {
        "name": "note",
        "schema": "string",
        "description": ""
      },
      {
        "name": "taxClause",
        "schema": "string",
        "description": ""
      },
      {
        "name": "omitTaxes",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "keepPricesAsGross",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "ignoreOmitTaxes",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "footer",
        "schema": "string",
        "description": ""
      },
      {
        "name": "signature",
        "schema": "string",
        "description": ""
      },
      {
        "name": "type",
        "schema": "string",
        "description": "",
        "default": "invoice"
      },
      {
        "name": "displayName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "canceled",
        "schema": "boolean",
        "description": "",
        "default": false
      },
      {
        "name": "sentSnailMail",
        "schema": "boolean",
        "description": "",
        "default": false
      },
      {
        "name": "totalPaid",
        "schema": "number",
        "description": "",
        "default": 0
      },
      {
        "name": "totalDue",
        "schema": "number",
        "description": "",
        "default": 0
      },
      {
        "name": "paidInFull",
        "schema": "boolean",
        "description": "",
        "default": false
      },
      {
        "name": "currencyId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "_documentTaxes",
        "schema": "array",
        "description": ""
      },
      {
        "name": "_documentReverseTaxes",
        "schema": "array",
        "description": ""
      },
      {
        "name": "hasUnit",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "validateEslog",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "isValidEslog",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "uniqueId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "customTotals",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "incoming",
        "schema": "boolean",
        "description": "",
        "default": false
      },
      {
        "name": "numberInternal",
        "schema": "string",
        "description": ""
      },
      {
        "name": "equalization",
        "schema": "number",
        "description": ""
      },
      {
        "name": "sandbox",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "issuedAt",
        "schema": "string",
        "description": ""
      },
      {
        "name": "shareableId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "stripeConnectPaymentIntent",
        "schema": "object",
        "description": ""
      },
      {
        "name": "chargesDisabled",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "dateYear",
        "schema": "number",
        "description": ""
      },
      {
        "name": "id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "documentIds",
        "schema": "array",
        "description": ""
      },
      {
        "name": "createdAt",
        "schema": "string",
        "description": ""
      },
      {
        "name": "updatedAt",
        "schema": "string",
        "description": ""
      },
      {
        "name": "custom",
        "schema": "object",
        "description": "",
        "default": {}
      },
      {
        "name": "l10n",
        "schema": "object",
        "description": ""
      },
      {
        "name": "deletedAt",
        "schema": "string",
        "description": ""
      },
      {
        "name": "_isDeleted",
        "schema": "boolean",
        "description": "",
        "default": false
      },
      {
        "name": "deletedId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "_documentItems",
        "schema": "array",
        "description": ""
      },
      {
        "name": "_documentIssuer",
        "schema": "undefined",
        "description": ""
      },
      {
        "name": "clientId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "_documentClient",
        "schema": "undefined",
        "description": ""
      },
      {
        "name": "organizationId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "accountId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "_comments",
        "schema": "array",
        "description": ""
      },
      {
        "name": "_furs",
        "schema": "undefined",
        "description": ""
      },
      {
        "name": "_at",
        "schema": "undefined",
        "description": ""
      },
      {
        "name": "_fina",
        "schema": "undefined",
        "description": ""
      },
      {
        "name": "_documentConversionRate",
        "schema": "undefined",
        "description": ""
      },
      {
        "name": "unitId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "_documentUnit",
        "schema": "undefined",
        "description": ""
      },
      {
        "name": "priceListId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "warehouseId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "destinationWarehouseId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "_data",
        "schema": "array",
        "description": ""
      },
      {
        "name": "_bPay",
        "schema": "undefined",
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
    "url": "/v1/Documents/{id}/send",
    "method": "sendNotification",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Document",
    "typeScriptTag": "document",
    "description": "",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Document id",
        "example": "ID"
      },
      {
        "name": "l",
        "schema": "string",
        "required": false,
        "description": "Language flag"
      },
      {
        "name": "recipients",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "RECIPIENTS"
      },
      {
        "name": "message",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "subject",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "sendCopy",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "associateEmail",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "excludedAttachmentIds",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "sendEslogAttachment",
        "schema": "boolean",
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
    "url": "/v1/Documents/{id}/cancel",
    "method": "cancelById",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Document",
    "typeScriptTag": "document",
    "description": "",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Document id",
        "example": "ID"
      },
      {
        "name": "technical",
        "schema": "boolean",
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
    "url": "/v1/Documents/{id}/uncancel",
    "method": "markUncancelled",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Document",
    "typeScriptTag": "document",
    "description": "",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Document id",
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
    "url": "/v1/Documents/{id}/fiscally-verify",
    "method": "fiscallyVerify",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Document",
    "typeScriptTag": "document",
    "description": "Fiscally verify a document that previously failed verification.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Document id",
        "example": "ID"
      },
      {
        "name": "provider",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "old",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": true
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
    "url": "/v1/Documents/{id}/e-slog",
    "method": "generateEslogXml",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Document",
    "typeScriptTag": "document",
    "description": "Generates eslog xml and returns it",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Document id",
        "example": "ID"
      },
      {
        "name": "options",
        "schema": "string",
        "required": false,
        "description": "Additional settings for generating the eslog format"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The xml of the document"
      }
    ]
  },
  {
    "url": "/v1/Documents/{id}/pdf",
    "method": "getPdfById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Document",
    "typeScriptTag": "document",
    "description": "Retrieve PDF of document",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Document id",
        "example": "ID"
      },
      {
        "name": "l",
        "schema": "string",
        "required": false,
        "description": "Language flag"
      },
      {
        "name": "upnQr",
        "schema": "boolean",
        "required": false,
        "description": "Add UPN QR to PDF"
      },
      {
        "name": "hideHeaderFooter",
        "schema": "boolean",
        "required": false,
        "description": "Hide header and footer on PDF"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The pdf of the invoice"
      }
    ]
  },
  {
    "url": "/v1/Documents/{id}/mark-sent",
    "method": "markAsSentViaSnailMail",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Document",
    "typeScriptTag": "document",
    "description": "Mark document as sent via snail mail",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Document id",
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
    "url": "/v1/Documents/{id}/attachments/upload",
    "method": "uploadAttachment",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Document",
    "typeScriptTag": "document",
    "description": "Uploads an attachment for a document",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Document id",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Returns fileMeta object containing metadata about uploaded attachment"
      }
    ]
  },
  {
    "url": "/v1/Documents/parse-xml",
    "method": "convertXmlToJson",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Document",
    "typeScriptTag": "document",
    "description": "Takes an xml file and returns a json object prepared for saving a document.",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "Returns parsed json"
      }
    ]
  },
  {
    "url": "/v1/Documents/cron/outgoing",
    "method": "getOutgoingDocuments",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Document",
    "typeScriptTag": "document",
    "description": "",
    "parameters": [
      {
        "name": "date",
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
    "url": "/v1/Documents/cron/incoming",
    "method": "getIncoming",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Document",
    "typeScriptTag": "document",
    "description": "",
    "parameters": [
      {
        "name": "date",
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
    "url": "/v1/Documents/{id}/share",
    "method": "generateShareableId",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Document",
    "typeScriptTag": "document",
    "description": "Generates and returns shareable document id that allows access to document without authentication",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Document id",
        "example": "ID"
      },
      {
        "name": "regenerate",
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
    "url": "/v1/Documents/public/{id}",
    "method": "getByShareableId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Document",
    "typeScriptTag": "document",
    "description": "Retrieve document using shareable id",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Shareable id of document to retrieve",
        "example": "ID"
      },
      {
        "name": "filter",
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
    "url": "/v1/Documents/public/{id}/e-slog",
    "method": "generateEslogXml",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Document",
    "typeScriptTag": "document",
    "description": "Generates eslog xml from shareableId and returns it",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Shareable id of document to retrieve",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The xml of the document"
      }
    ]
  },
  {
    "url": "/v1/Documents/public/{id}/pdf",
    "method": "getPdfById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Document",
    "typeScriptTag": "document",
    "description": "Retrieve PDF of document",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Shareable id of document to retrieve",
        "example": "ID"
      },
      {
        "name": "l",
        "schema": "string",
        "required": false,
        "description": "Language flag"
      },
      {
        "name": "upnQr",
        "schema": "boolean",
        "required": false,
        "description": "Add UPN QR to PDF"
      },
      {
        "name": "hideHeaderFooter",
        "schema": "boolean",
        "required": false,
        "description": "Hide header and footer on PDF"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The pdf of the invoice"
      }
    ]
  },
  {
    "url": "/v1/Documents/public/{id}/attachments/{attachmentId}/download",
    "method": "getAttachmentByShareableId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Document",
    "typeScriptTag": "document",
    "description": "Retrieve attachment of document by shareable id",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Shareable id of document to retrieve",
        "example": "ID"
      },
      {
        "name": "attachmentId",
        "schema": "string",
        "required": true,
        "description": "Id of attachment to retrieve",
        "example": "ATTACHMENTID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The file"
      }
    ]
  },
  {
    "url": "/v1/Items/{id}/components/{fk}",
    "method": "updateRelatedComponentById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Item",
    "typeScriptTag": "item",
    "description": "Update a related item by id for components.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Item id",
        "example": "ID"
      },
      {
        "name": "fk",
        "schema": "string",
        "required": true,
        "description": "Foreign key for components",
        "example": "FK"
      },
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
        "name": "itemId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "custom",
        "schema": "object",
        "required": false,
        "description": "",
        "default": {}
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
    "url": "/v1/Items/{id}/inventories",
    "method": "queryInventories",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Item",
    "typeScriptTag": "item",
    "description": "Queries inventories of Item.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Item id",
        "example": "ID"
      },
      {
        "name": "filter",
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
    "url": "/v1/Items/{id}/components",
    "method": "createInstance",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Item",
    "typeScriptTag": "item",
    "description": "Creates a new instance in components of this model.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Item id",
        "example": "ID"
      },
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
        "name": "itemId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "custom",
        "schema": "object",
        "required": false,
        "description": "",
        "default": {}
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
    "url": "/v1/Items/{id}",
    "method": "deleteById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Item",
    "typeScriptTag": "item",
    "description": "Delete a model instance by {{id}} from the data source.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Model id",
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
    "url": "/v1/Items/{id}",
    "method": "findById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Item",
    "typeScriptTag": "item",
    "description": "Find a model instance by {{id}} from the data source.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Model id",
        "example": "ID"
      },
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "Filter defining fields and include - must be a JSON-encoded string ({\"something\":\"value\"})"
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
    "url": "/v1/Items/{id}",
    "method": "updateAttributesById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Item",
    "typeScriptTag": "item",
    "description": "Replace attributes for a model instance and persist it into the data source.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Model id",
        "example": "ID"
      },
      {
        "name": "description",
        "schema": "string",
        "description": "",
        "default": ""
      },
      {
        "name": "type",
        "schema": "string",
        "description": ""
      },
      {
        "name": "purchasePrice",
        "schema": "number",
        "description": ""
      },
      {
        "name": "purchasePriceGross",
        "schema": "number",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "price",
        "schema": "number",
        "description": ""
      },
      {
        "name": "priceGross",
        "schema": "number",
        "description": ""
      },
      {
        "name": "classification",
        "schema": "string",
        "description": ""
      },
      {
        "name": "unit",
        "schema": "string",
        "description": ""
      },
      {
        "name": "SKU",
        "schema": "string",
        "description": ""
      },
      {
        "name": "EAN",
        "schema": "string",
        "description": ""
      },
      {
        "name": "trackInventory",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "onBehalf",
        "schema": "string",
        "description": ""
      },
      {
        "name": "taxExemptionCode",
        "schema": "string",
        "description": ""
      },
      {
        "name": "taxExemptionReason",
        "schema": "string",
        "description": ""
      },
      {
        "name": "id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "_taxExemption",
        "schema": "undefined",
        "description": ""
      },
      {
        "name": "custom",
        "schema": "object",
        "description": "",
        "default": {}
      },
      {
        "name": "l10n",
        "schema": "object",
        "description": ""
      },
      {
        "name": "deletedAt",
        "schema": "string",
        "description": ""
      },
      {
        "name": "_isDeleted",
        "schema": "boolean",
        "description": "",
        "default": false
      },
      {
        "name": "deletedId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "createdAt",
        "schema": "string",
        "description": ""
      },
      {
        "name": "updatedAt",
        "schema": "string",
        "description": ""
      },
      {
        "name": "taxIds",
        "schema": "array",
        "description": ""
      },
      {
        "name": "purchaseTaxIds",
        "schema": "array",
        "description": ""
      },
      {
        "name": "organizationId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "unitId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "unitIds",
        "schema": "array",
        "description": ""
      },
      {
        "name": "_components",
        "schema": "array",
        "description": ""
      },
      {
        "name": "_data",
        "schema": "array",
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
    "url": "/v1/Items/{id}/replace",
    "method": "replaceAttributesById",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Item",
    "typeScriptTag": "item",
    "description": "Replace attributes for a model instance and persist it into the data source.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Model id",
        "example": "ID"
      },
      {
        "name": "description",
        "schema": "string",
        "description": "",
        "default": ""
      },
      {
        "name": "type",
        "schema": "string",
        "description": ""
      },
      {
        "name": "purchasePrice",
        "schema": "number",
        "description": ""
      },
      {
        "name": "purchasePriceGross",
        "schema": "number",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "price",
        "schema": "number",
        "description": ""
      },
      {
        "name": "priceGross",
        "schema": "number",
        "description": ""
      },
      {
        "name": "classification",
        "schema": "string",
        "description": ""
      },
      {
        "name": "unit",
        "schema": "string",
        "description": ""
      },
      {
        "name": "SKU",
        "schema": "string",
        "description": ""
      },
      {
        "name": "EAN",
        "schema": "string",
        "description": ""
      },
      {
        "name": "trackInventory",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "onBehalf",
        "schema": "string",
        "description": ""
      },
      {
        "name": "taxExemptionCode",
        "schema": "string",
        "description": ""
      },
      {
        "name": "taxExemptionReason",
        "schema": "string",
        "description": ""
      },
      {
        "name": "id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "_taxExemption",
        "schema": "undefined",
        "description": ""
      },
      {
        "name": "custom",
        "schema": "object",
        "description": "",
        "default": {}
      },
      {
        "name": "l10n",
        "schema": "object",
        "description": ""
      },
      {
        "name": "deletedAt",
        "schema": "string",
        "description": ""
      },
      {
        "name": "_isDeleted",
        "schema": "boolean",
        "description": "",
        "default": false
      },
      {
        "name": "deletedId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "createdAt",
        "schema": "string",
        "description": ""
      },
      {
        "name": "updatedAt",
        "schema": "string",
        "description": ""
      },
      {
        "name": "taxIds",
        "schema": "array",
        "description": ""
      },
      {
        "name": "purchaseTaxIds",
        "schema": "array",
        "description": ""
      },
      {
        "name": "organizationId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "unitId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "unitIds",
        "schema": "array",
        "description": ""
      },
      {
        "name": "_components",
        "schema": "array",
        "description": ""
      },
      {
        "name": "_data",
        "schema": "array",
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
    "url": "/v1/Taxes/{id}/taxRates/{fk}",
    "method": "deleteRelatedItemById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Tax",
    "typeScriptTag": "tax",
    "description": "Delete a related item by id for taxRates.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Tax id",
        "example": "ID"
      },
      {
        "name": "fk",
        "schema": "string",
        "required": true,
        "description": "Foreign key for taxRates",
        "example": "FK"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Request was successful"
      }
    ]
  },
  {
    "url": "/v1/Taxes/{id}/taxRates",
    "method": "createInstanceInTaxRates",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Tax",
    "typeScriptTag": "tax",
    "description": "Creates a new instance in taxRates of this model.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Tax id",
        "example": "ID"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "dateValidFrom",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DATEVALIDFROM"
      },
      {
        "name": "rate",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "createdAt",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "updatedAt",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "custom",
        "schema": "object",
        "required": false,
        "description": "",
        "default": {}
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
    "url": "/v1/Taxes/{id}",
    "method": "deleteById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Tax",
    "typeScriptTag": "tax",
    "description": "Delete a model instance by {{id}} from the data source.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Model id",
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
    "url": "/v1/Taxes/{id}",
    "method": "findById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Tax",
    "typeScriptTag": "tax",
    "description": "Find a model instance by {{id}} from the data source.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Model id",
        "example": "ID"
      },
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "Filter defining fields and include - must be a JSON-encoded string ({\"something\":\"value\"})"
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
    "url": "/v1/Taxes/{id}",
    "method": "updateById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Tax",
    "typeScriptTag": "tax",
    "description": "Replace attributes for a model instance and persist it into the data source.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Model id",
        "example": "ID"
      },
      {
        "name": "classification",
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
        "name": "countryAlpha2Code",
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
        "name": "abbreviation",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "recoverable",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true,
        "default": true
      },
      {
        "name": "compound",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true,
        "default": false
      },
      {
        "name": "taxNumber",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "_taxRates",
        "schema": "array",
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
        "name": "updatedAt",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "deletedAt",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "_isDeleted",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "deletedId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "custom",
        "schema": "object",
        "required": false,
        "description": "",
        "default": {}
      },
      {
        "name": "organizationId",
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
    "url": "/v1/Taxes/{id}/replace",
    "method": "replaceAttributesById",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Tax",
    "typeScriptTag": "tax",
    "description": "Replace attributes for a model instance and persist it into the data source.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Model id",
        "example": "ID"
      },
      {
        "name": "classification",
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
        "name": "countryAlpha2Code",
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
        "name": "abbreviation",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "recoverable",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true,
        "default": true
      },
      {
        "name": "compound",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true,
        "default": false
      },
      {
        "name": "taxNumber",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "_taxRates",
        "schema": "array",
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
        "name": "updatedAt",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "deletedAt",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "_isDeleted",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "deletedId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "custom",
        "schema": "object",
        "required": false,
        "description": "",
        "default": {}
      },
      {
        "name": "organizationId",
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
    "url": "/v1/Taxes/clause-type",
    "method": "createClauseType",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Tax",
    "typeScriptTag": "tax",
    "description": "",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/Clients/{id}",
    "method": "deleteById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Client",
    "typeScriptTag": "client",
    "description": "Delete a model instance by {{id}} from the data source.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Model id",
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
    "url": "/v1/Clients/{id}",
    "method": "findById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Client",
    "typeScriptTag": "client",
    "description": "Find a model instance by {{id}} from the data source.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Model id",
        "example": "ID"
      },
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "Filter defining fields and include - must be a JSON-encoded string ({\"something\":\"value\"})"
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
    "url": "/v1/Clients/{id}",
    "method": "updateAttributesById",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Client",
    "typeScriptTag": "client",
    "description": "Patch attributes for a model instance and persist it into the data source.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Client id",
        "example": "ID"
      },
      {
        "name": "contact",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "note",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "isEndCustomer",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "type",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "companyId",
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
        "name": "address",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "address2",
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
        "name": "zip",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "state",
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
        "name": "countryAlpha2Code",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "taxNumber",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "taxSubject",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "companyNumber",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "IBAN",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "bank",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "SWIFT",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "website",
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
        "name": "phone",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "businessType",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "fiscalRegionCode",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "id",
        "schema": "string",
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
        "name": "updatedAt",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "custom",
        "schema": "object",
        "required": false,
        "description": "",
        "default": {}
      },
      {
        "name": "deletedAt",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "_isDeleted",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "deletedId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "organizationId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "unitId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "unitIds",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "_data",
        "schema": "array",
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
    "url": "/v1/Clients/{id}",
    "method": "replaceAttributesById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Client",
    "typeScriptTag": "client",
    "description": "Replace attributes for a model instance and persist it into the data source.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Model id",
        "example": "ID"
      },
      {
        "name": "contact",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "note",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "isEndCustomer",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "type",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "companyId",
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
        "name": "address",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "address2",
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
        "name": "zip",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "state",
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
        "name": "countryAlpha2Code",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "taxNumber",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "taxSubject",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "companyNumber",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "IBAN",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "bank",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "SWIFT",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "website",
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
        "name": "phone",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "businessType",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "fiscalRegionCode",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "id",
        "schema": "string",
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
        "name": "updatedAt",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "custom",
        "schema": "object",
        "required": false,
        "description": "",
        "default": {}
      },
      {
        "name": "deletedAt",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "_isDeleted",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "deletedId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "organizationId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "unitId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "unitIds",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "_data",
        "schema": "array",
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
    "url": "/v1/Clients/{id}/replace",
    "method": "replaceAttributesById",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Client",
    "typeScriptTag": "client",
    "description": "Replace attributes for a model instance and persist it into the data source.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Model id",
        "example": "ID"
      },
      {
        "name": "contact",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "note",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "isEndCustomer",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "type",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "companyId",
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
        "name": "address",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "address2",
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
        "name": "zip",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "state",
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
        "name": "countryAlpha2Code",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "taxNumber",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "taxSubject",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "companyNumber",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "IBAN",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "bank",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "SWIFT",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "website",
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
        "name": "phone",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "businessType",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "fiscalRegionCode",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "id",
        "schema": "string",
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
        "name": "updatedAt",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "custom",
        "schema": "object",
        "required": false,
        "description": "",
        "default": {}
      },
      {
        "name": "deletedAt",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "_isDeleted",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "deletedId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "organizationId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "unitId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "unitIds",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "_data",
        "schema": "array",
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
    "url": "/v1/Clients/{id}/send-reminder",
    "method": "sendReminder",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Client",
    "typeScriptTag": "client",
    "description": "",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Client id",
        "example": "ID"
      },
      {
        "name": "email",
        "schema": "string",
        "description": ""
      },
      {
        "name": "l",
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
    "url": "/v1/Organizations/{id}/defaults/{fk}",
    "method": "updateRelatedItemById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Organization",
    "typeScriptTag": "organization",
    "description": "Update a related item by id for _defaults.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Organization id",
        "example": "ID"
      },
      {
        "name": "fk",
        "schema": "string",
        "required": true,
        "description": "Foreign key for _defaults",
        "example": "FK"
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
      },
      {
        "name": "value",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "organizationId",
        "schema": "string",
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
        "name": "updatedAt",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "l10n",
        "schema": "object",
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
    "url": "/v1/Organizations/{id}/documents",
    "method": "queryDocuments",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Organization",
    "typeScriptTag": "organization",
    "description": "Queries documents of Organization.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Organization id",
        "example": "ID"
      },
      {
        "name": "filter",
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
    "url": "/v1/Organizations/{id}/documents",
    "method": "createNewInstanceInDocuments",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Organization",
    "typeScriptTag": "organization",
    "description": "Creates a new instance in documents of this model.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Organization id",
        "example": "ID"
      },
      {
        "name": "_fatturaPa",
        "schema": "object",
        "description": ""
      },
      {
        "name": "number",
        "schema": "string",
        "description": ""
      },
      {
        "name": "previousDocumentId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "draft",
        "schema": "boolean",
        "description": "",
        "default": false
      },
      {
        "name": "date",
        "schema": "string",
        "description": ""
      },
      {
        "name": "dateService",
        "schema": "string",
        "description": ""
      },
      {
        "name": "dateServiceTo",
        "schema": "string",
        "description": ""
      },
      {
        "name": "dateDue",
        "schema": "string",
        "description": ""
      },
      {
        "name": "dateValidTill",
        "schema": "string",
        "description": ""
      },
      {
        "name": "datePaid",
        "schema": "string",
        "description": ""
      },
      {
        "name": "dateReceived",
        "schema": "string",
        "description": ""
      },
      {
        "name": "reference",
        "schema": "string",
        "description": ""
      },
      {
        "name": "total",
        "schema": "number",
        "description": ""
      },
      {
        "name": "totalConverted",
        "schema": "number",
        "description": ""
      },
      {
        "name": "totalDiscount",
        "schema": "number",
        "description": ""
      },
      {
        "name": "totalWithTax",
        "schema": "number",
        "description": ""
      },
      {
        "name": "totalWithTaxConverted",
        "schema": "number",
        "description": ""
      },
      {
        "name": "decimalPlaces",
        "schema": "number",
        "description": "",
        "default": 4
      },
      {
        "name": "note",
        "schema": "string",
        "description": ""
      },
      {
        "name": "taxClause",
        "schema": "string",
        "description": ""
      },
      {
        "name": "omitTaxes",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "keepPricesAsGross",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "ignoreOmitTaxes",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "footer",
        "schema": "string",
        "description": ""
      },
      {
        "name": "signature",
        "schema": "string",
        "description": ""
      },
      {
        "name": "type",
        "schema": "string",
        "description": "",
        "default": "invoice"
      },
      {
        "name": "displayName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "canceled",
        "schema": "boolean",
        "description": "",
        "default": false
      },
      {
        "name": "sentSnailMail",
        "schema": "boolean",
        "description": "",
        "default": false
      },
      {
        "name": "totalPaid",
        "schema": "number",
        "description": "",
        "default": 0
      },
      {
        "name": "totalDue",
        "schema": "number",
        "description": "",
        "default": 0
      },
      {
        "name": "paidInFull",
        "schema": "boolean",
        "description": "",
        "default": false
      },
      {
        "name": "currencyId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "_documentTaxes",
        "schema": "array",
        "description": ""
      },
      {
        "name": "_documentReverseTaxes",
        "schema": "array",
        "description": ""
      },
      {
        "name": "hasUnit",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "validateEslog",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "isValidEslog",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "uniqueId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "customTotals",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "incoming",
        "schema": "boolean",
        "description": "",
        "default": false
      },
      {
        "name": "numberInternal",
        "schema": "string",
        "description": ""
      },
      {
        "name": "equalization",
        "schema": "number",
        "description": ""
      },
      {
        "name": "sandbox",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "issuedAt",
        "schema": "string",
        "description": ""
      },
      {
        "name": "shareableId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "stripeConnectPaymentIntent",
        "schema": "object",
        "description": ""
      },
      {
        "name": "chargesDisabled",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "dateYear",
        "schema": "number",
        "description": ""
      },
      {
        "name": "documentIds",
        "schema": "array",
        "description": ""
      },
      {
        "name": "createdAt",
        "schema": "string",
        "description": ""
      },
      {
        "name": "updatedAt",
        "schema": "string",
        "description": ""
      },
      {
        "name": "custom",
        "schema": "object",
        "description": "",
        "default": {}
      },
      {
        "name": "l10n",
        "schema": "object",
        "description": ""
      },
      {
        "name": "deletedAt",
        "schema": "string",
        "description": ""
      },
      {
        "name": "_isDeleted",
        "schema": "boolean",
        "description": "",
        "default": false
      },
      {
        "name": "deletedId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "_documentItems",
        "schema": "array",
        "description": ""
      },
      {
        "name": "_documentIssuer",
        "schema": "undefined",
        "description": ""
      },
      {
        "name": "clientId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "_documentClient",
        "schema": "undefined",
        "description": ""
      },
      {
        "name": "organizationId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "accountId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "_comments",
        "schema": "array",
        "description": ""
      },
      {
        "name": "_furs",
        "schema": "undefined",
        "description": ""
      },
      {
        "name": "_at",
        "schema": "undefined",
        "description": ""
      },
      {
        "name": "_fina",
        "schema": "undefined",
        "description": ""
      },
      {
        "name": "_documentConversionRate",
        "schema": "undefined",
        "description": ""
      },
      {
        "name": "unitId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "_documentUnit",
        "schema": "undefined",
        "description": ""
      },
      {
        "name": "priceListId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "warehouseId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "destinationWarehouseId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "_data",
        "schema": "array",
        "description": ""
      },
      {
        "name": "_bPay",
        "schema": "undefined",
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
    "url": "/v1/Organizations/{id}/documents/count",
    "method": "countDocuments",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Organization",
    "typeScriptTag": "organization",
    "description": "Counts documents of Organization.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Organization id",
        "example": "ID"
      },
      {
        "name": "where",
        "schema": "string",
        "required": false,
        "description": "Criteria to match model instances"
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
    "url": "/v1/Organizations/{id}/clients",
    "method": "queryClients",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Organization",
    "typeScriptTag": "organization",
    "description": "Queries clients of Organization.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Organization id",
        "example": "ID"
      },
      {
        "name": "filter",
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
    "url": "/v1/Organizations/{id}/clients",
    "method": "createClientInstance",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Organization",
    "typeScriptTag": "organization",
    "description": "Creates a new instance in clients of this model.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Organization id",
        "example": "ID"
      },
      {
        "name": "contact",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "note",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "isEndCustomer",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "type",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "companyId",
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
        "name": "address",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "address2",
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
        "name": "zip",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "state",
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
        "name": "countryAlpha2Code",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "taxNumber",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "taxSubject",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "companyNumber",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "IBAN",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "bank",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "SWIFT",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "website",
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
        "name": "phone",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "businessType",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "fiscalRegionCode",
        "schema": "string",
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
        "name": "updatedAt",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "custom",
        "schema": "object",
        "required": false,
        "description": "",
        "default": {}
      },
      {
        "name": "deletedAt",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "_isDeleted",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "deletedId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "organizationId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "unitId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "unitIds",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "_data",
        "schema": "array",
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
    "url": "/v1/Organizations/{id}/clients/count",
    "method": "countClients",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Organization",
    "typeScriptTag": "organization",
    "description": "Counts clients of Organization.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Organization id",
        "example": "ID"
      },
      {
        "name": "where",
        "schema": "string",
        "required": false,
        "description": "Criteria to match model instances"
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
    "url": "/v1/Organizations/{id}/items",
    "method": "queryItems",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Organization",
    "typeScriptTag": "organization",
    "description": "Queries items of Organization.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Organization id",
        "example": "ID"
      },
      {
        "name": "filter",
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
    "url": "/v1/Organizations/{id}/items",
    "method": "createNewItemInstance",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Organization",
    "typeScriptTag": "organization",
    "description": "Creates a new instance in items of this model.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Organization id",
        "example": "ID"
      },
      {
        "name": "description",
        "schema": "string",
        "description": "",
        "default": ""
      },
      {
        "name": "type",
        "schema": "string",
        "description": ""
      },
      {
        "name": "purchasePrice",
        "schema": "number",
        "description": ""
      },
      {
        "name": "purchasePriceGross",
        "schema": "number",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "price",
        "schema": "number",
        "description": ""
      },
      {
        "name": "priceGross",
        "schema": "number",
        "description": ""
      },
      {
        "name": "classification",
        "schema": "string",
        "description": ""
      },
      {
        "name": "unit",
        "schema": "string",
        "description": ""
      },
      {
        "name": "SKU",
        "schema": "string",
        "description": ""
      },
      {
        "name": "EAN",
        "schema": "string",
        "description": ""
      },
      {
        "name": "trackInventory",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "onBehalf",
        "schema": "string",
        "description": ""
      },
      {
        "name": "taxExemptionCode",
        "schema": "string",
        "description": ""
      },
      {
        "name": "taxExemptionReason",
        "schema": "string",
        "description": ""
      },
      {
        "name": "_taxExemption",
        "schema": "undefined",
        "description": ""
      },
      {
        "name": "custom",
        "schema": "object",
        "description": "",
        "default": {}
      },
      {
        "name": "l10n",
        "schema": "object",
        "description": ""
      },
      {
        "name": "deletedAt",
        "schema": "string",
        "description": ""
      },
      {
        "name": "_isDeleted",
        "schema": "boolean",
        "description": "",
        "default": false
      },
      {
        "name": "deletedId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "createdAt",
        "schema": "string",
        "description": ""
      },
      {
        "name": "updatedAt",
        "schema": "string",
        "description": ""
      },
      {
        "name": "taxIds",
        "schema": "array",
        "description": ""
      },
      {
        "name": "purchaseTaxIds",
        "schema": "array",
        "description": ""
      },
      {
        "name": "organizationId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "unitId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "unitIds",
        "schema": "array",
        "description": ""
      },
      {
        "name": "_components",
        "schema": "array",
        "description": ""
      },
      {
        "name": "_data",
        "schema": "array",
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
    "url": "/v1/Organizations/{id}/items/count",
    "method": "countItems",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Organization",
    "typeScriptTag": "organization",
    "description": "Counts items of Organization.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Organization id",
        "example": "ID"
      },
      {
        "name": "where",
        "schema": "string",
        "required": false,
        "description": "Criteria to match model instances"
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
    "url": "/v1/Organizations/{id}/taxes",
    "method": "queryTaxes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Organization",
    "typeScriptTag": "organization",
    "description": "Queries taxes of Organization.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Organization id",
        "example": "ID"
      },
      {
        "name": "filter",
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
    "url": "/v1/Organizations/{id}/taxes",
    "method": "createInstanceInTaxes",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Organization",
    "typeScriptTag": "organization",
    "description": "Creates a new instance in taxes of this model.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Organization id",
        "example": "ID"
      },
      {
        "name": "classification",
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
        "name": "countryAlpha2Code",
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
        "name": "abbreviation",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "recoverable",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true,
        "default": true
      },
      {
        "name": "compound",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true,
        "default": false
      },
      {
        "name": "taxNumber",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "_taxRates",
        "schema": "array",
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
        "name": "updatedAt",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "deletedAt",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "_isDeleted",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "deletedId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "custom",
        "schema": "object",
        "required": false,
        "description": "",
        "default": {}
      },
      {
        "name": "organizationId",
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
    "url": "/v1/Organizations/{id}/taxes/count",
    "method": "countTaxes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Organization",
    "typeScriptTag": "organization",
    "description": "Counts taxes of Organization.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Organization id",
        "example": "ID"
      },
      {
        "name": "where",
        "schema": "string",
        "required": false,
        "description": "Criteria to match model instances"
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
    "url": "/v1/Organizations/{id}/shopify",
    "method": "queryShopify",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Organization",
    "typeScriptTag": "organization",
    "description": "Queries shopify of Organization.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Organization id",
        "example": "ID"
      },
      {
        "name": "filter",
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
    "url": "/v1/Organizations/{id}/shopify",
    "method": "createShopifyInstance",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Organization",
    "typeScriptTag": "organization",
    "description": "Creates a new instance in shopify of this model.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Organization id",
        "example": "ID"
      },
      {
        "name": "shop",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SHOP"
      },
      {
        "name": "apiKey",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "password",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "accessToken",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "shopSettings",
        "schema": "object",
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
        "required": true,
        "description": "",
        "example": true,
        "default": true
      },
      {
        "name": "locale",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "sendInvoiceAutomatically",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true,
        "default": true
      },
      {
        "name": "sendEstimateAutomatically",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true,
        "default": true
      },
      {
        "name": "issueInvoiceForBankPayment",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "issueInvoiceOnComplete",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "businessPremiseId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "electronicDeviceId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "organizationId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "custom",
        "schema": "object",
        "required": false,
        "description": "",
        "default": {}
      },
      {
        "name": "deletedAt",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "_isDeleted",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "deletedId",
        "schema": "string",
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
        "name": "updatedAt",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "updateItemInventory",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "accountId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "unitId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "warehouseId",
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
    "url": "/v1/Organizations/{id}/shopify/count",
    "method": "countShopify",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Organization",
    "typeScriptTag": "organization",
    "description": "Counts shopify of Organization.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Organization id",
        "example": "ID"
      },
      {
        "name": "where",
        "schema": "string",
        "required": false,
        "description": "Criteria to match model instances"
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
    "url": "/v1/Organizations/{id}/stripe",
    "method": "getStripe",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Organization",
    "typeScriptTag": "organization",
    "description": "Queries stripe of Organization.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Organization id",
        "example": "ID"
      },
      {
        "name": "filter",
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
    "url": "/v1/Organizations/{id}/stripe",
    "method": "createStripeInstance",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Organization",
    "typeScriptTag": "organization",
    "description": "Creates a new instance in stripe of this model.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Organization id",
        "example": "ID"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "apiKey",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "active",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true,
        "default": true
      },
      {
        "name": "autoSend",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true,
        "default": true
      },
      {
        "name": "lang",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "invoiceAction",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "businessPremiseId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "electronicDeviceId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "autoTaxClassification",
        "schema": "string",
        "required": false,
        "description": "",
        "default": "standard"
      },
      {
        "name": "organizationId",
        "schema": "string",
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
        "name": "updatedAt",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "accountId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "unitId",
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
    "url": "/v1/Organizations/{id}/stripe/count",
    "method": "countStripe",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Organization",
    "typeScriptTag": "organization",
    "description": "Counts stripe of Organization.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Organization id",
        "example": "ID"
      },
      {
        "name": "where",
        "schema": "string",
        "required": false,
        "description": "Criteria to match model instances"
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
    "url": "/v1/Organizations/{id}/ticketingHub",
    "method": "getTicketingHub",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Organization",
    "typeScriptTag": "organization",
    "description": "Queries ticketingHub of Organization.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Organization id",
        "example": "ID"
      },
      {
        "name": "filter",
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
    "url": "/v1/Organizations/{id}/ticketingHub",
    "method": "createTicketingHubInstance",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Organization",
    "typeScriptTag": "organization",
    "description": "Creates a new instance in ticketingHub of this model.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Organization id",
        "example": "ID"
      },
      {
        "name": "token",
        "schema": "string",
        "description": ""
      },
      {
        "name": "businessPremiseId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "electronicDeviceId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "organizationId",
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
    "url": "/v1/Organizations/{id}/ticketingHub/count",
    "method": "countTicketingHub",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Organization",
    "typeScriptTag": "organization",
    "description": "Counts ticketingHub of Organization.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Organization id",
        "example": "ID"
      },
      {
        "name": "where",
        "schema": "string",
        "required": false,
        "description": "Criteria to match model instances"
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
    "url": "/v1/Organizations/{id}/recurrences",
    "method": "queryRecurrences",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Organization",
    "typeScriptTag": "organization",
    "description": "Queries recurrences of Organization.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Organization id",
        "example": "ID"
      },
      {
        "name": "filter",
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
    "url": "/v1/Organizations/{id}/recurrences/count",
    "method": "countRecurrences",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Organization",
    "typeScriptTag": "organization",
    "description": "Counts recurrences of Organization.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Organization id",
        "example": "ID"
      },
      {
        "name": "where",
        "schema": "string",
        "required": false,
        "description": "Criteria to match model instances"
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
    "url": "/v1/Organizations/{id}/payments",
    "method": "getPayments",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Organization",
    "typeScriptTag": "organization",
    "description": "Queries payments of Organization.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Organization id",
        "example": "ID"
      },
      {
        "name": "filter",
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
    "url": "/v1/Organizations/{id}/payments",
    "method": "createPaymentInstance",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Organization",
    "typeScriptTag": "organization",
    "description": "Creates a new instance in payments of this model.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Organization id",
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
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TYPE"
      },
      {
        "name": "tag",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "date",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DATE"
      },
      {
        "name": "note",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "transactionId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "documentId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "organizationId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "deletedAt",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "_isDeleted",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "deletedId",
        "schema": "string",
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
        "name": "updatedAt",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "custom",
        "schema": "object",
        "required": false,
        "description": "",
        "default": {}
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
    "url": "/v1/Organizations/{id}/payments/count",
    "method": "countPayments",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Organization",
    "typeScriptTag": "organization",
    "description": "Counts payments of Organization.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Organization id",
        "example": "ID"
      },
      {
        "name": "where",
        "schema": "string",
        "required": false,
        "description": "Criteria to match model instances"
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
    "url": "/v1/Organizations/{id}/defaults",
    "method": "getDefaults",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Organization",
    "typeScriptTag": "organization",
    "description": "Queries _defaults of Organization.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Organization id",
        "example": "ID"
      },
      {
        "name": "filter",
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
    "url": "/v1/Organizations/{id}/defaults",
    "method": "createInstanceInDefaults",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Organization",
    "typeScriptTag": "organization",
    "description": "Creates a new instance in _defaults of this model.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Organization id",
        "example": "ID"
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
      },
      {
        "name": "value",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "organizationId",
        "schema": "string",
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
        "name": "updatedAt",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "l10n",
        "schema": "object",
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
    "url": "/v1/Organizations/{id}/defaults/count",
    "method": "countDefaults",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Organization",
    "typeScriptTag": "organization",
    "description": "Counts _defaults of Organization.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Organization id",
        "example": "ID"
      },
      {
        "name": "where",
        "schema": "string",
        "required": false,
        "description": "Criteria to match model instances"
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
    "url": "/v1/Organizations/{id}/businessPremises",
    "method": "getBusinessPremises",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Organization",
    "typeScriptTag": "organization",
    "description": "Queries businessPremises of Organization.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Organization id",
        "example": "ID"
      },
      {
        "name": "filter",
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
    "url": "/v1/Organizations/{id}/businessPremises",
    "method": "createBusinessPremises",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Organization",
    "typeScriptTag": "organization",
    "description": "Creates a new instance in businessPremises of this model.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Organization id",
        "example": "ID"
      },
      {
        "name": "type",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "taxNumber",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "businessPremiseId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "BUSINESSPREMISEID"
      },
      {
        "name": "premiseType",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "cadastralNumber",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "buildingNumber",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "buildingSectionNumber",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "street",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "houseNumber",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "houseNumberAdditional",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "community",
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
        "name": "postalCode",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "numbers",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "provider",
        "schema": "string",
        "required": false,
        "description": "",
        "default": "furs"
      },
      {
        "name": "environment",
        "schema": "string",
        "required": false,
        "description": "",
        "default": "production"
      },
      {
        "name": "organizationId",
        "schema": "string",
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
        "name": "updatedAt",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "custom",
        "schema": "object",
        "required": false,
        "description": "",
        "default": {}
      },
      {
        "name": "deletedAt",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "_isDeleted",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "deletedId",
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
    "url": "/v1/Organizations/{id}/electronicDevices",
    "method": "queryElectronicDevices",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Organization",
    "typeScriptTag": "organization",
    "description": "Queries electronicDevices of Organization.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Organization id",
        "example": "ID"
      },
      {
        "name": "filter",
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
    "url": "/v1/Organizations/{id}/electronicDevices",
    "method": "createNewElectronicDevice",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Organization",
    "typeScriptTag": "organization",
    "description": "Creates a new instance in electronicDevices of this model.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Organization id",
        "example": "ID"
      },
      {
        "name": "electronicDeviceId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ELECTRONICDEVICEID"
      },
      {
        "name": "numbers",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "provider",
        "schema": "string",
        "required": false,
        "description": "",
        "default": "furs"
      },
      {
        "name": "environment",
        "schema": "string",
        "required": false,
        "description": "",
        "default": "production"
      },
      {
        "name": "businessPremiseId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "organizationId",
        "schema": "string",
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
        "name": "updatedAt",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "custom",
        "schema": "object",
        "required": false,
        "description": "",
        "default": {}
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
    "url": "/v1/Organizations/{id}/accountOrganizations",
    "method": "getAccountOrganizations",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Organization",
    "typeScriptTag": "organization",
    "description": "Queries accountOrganizations of Organization.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Organization id",
        "example": "ID"
      },
      {
        "name": "filter",
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
    "url": "/v1/Organizations/{id}/accountOrganizations/count",
    "method": "countAccountOrganizations",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Organization",
    "typeScriptTag": "organization",
    "description": "Counts accountOrganizations of Organization.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Organization id",
        "example": "ID"
      },
      {
        "name": "where",
        "schema": "string",
        "required": false,
        "description": "Criteria to match model instances"
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
    "url": "/v1/Organizations/{id}/units",
    "method": "queryUnits",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Organization",
    "typeScriptTag": "organization",
    "description": "Queries units of Organization.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Organization id",
        "example": "ID"
      },
      {
        "name": "filter",
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
    "url": "/v1/Organizations/{id}/units",
    "method": "createUnitInstance",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Organization",
    "typeScriptTag": "organization",
    "description": "Creates a new instance in units of this model.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Organization id",
        "example": "ID"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "address",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "address2",
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
        "name": "zip",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "state",
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
        "name": "countryAlpha2Code",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "taxNumber",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "taxSubject",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "companyNumber",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "IBAN",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "bank",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "SWIFT",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "website",
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
        "name": "phone",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "businessType",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "fiscalRegionCode",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "organizationId",
        "schema": "string",
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
        "name": "updatedAt",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "custom",
        "schema": "object",
        "required": false,
        "description": "",
        "default": {}
      },
      {
        "name": "deletedAt",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "_isDeleted",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "deletedId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "_data",
        "schema": "array",
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
    "url": "/v1/Organizations/{id}/units/count",
    "method": "countUnits",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Organization",
    "typeScriptTag": "organization",
    "description": "Counts units of Organization.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Organization id",
        "example": "ID"
      },
      {
        "name": "where",
        "schema": "string",
        "required": false,
        "description": "Criteria to match model instances"
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
    "url": "/v1/Organizations/{id}/categories",
    "method": "getCategories",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Organization",
    "typeScriptTag": "organization",
    "description": "Queries categories of Organization.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Organization id",
        "example": "ID"
      },
      {
        "name": "filter",
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
    "url": "/v1/Organizations/{id}/categories",
    "method": "createCategoryInstance",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Organization",
    "typeScriptTag": "organization",
    "description": "Creates a new instance in categories of this model.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Organization id",
        "example": "ID"
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
      },
      {
        "name": "alias",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ALIAS"
      },
      {
        "name": "organizationId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "deletedAt",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "_isDeleted",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "deletedId",
        "schema": "string",
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
        "name": "updatedAt",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "custom",
        "schema": "object",
        "required": false,
        "description": "",
        "default": {}
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
    "url": "/v1/Organizations/{id}/categories/count",
    "method": "countCategories",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Organization",
    "typeScriptTag": "organization",
    "description": "Counts categories of Organization.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Organization id",
        "example": "ID"
      },
      {
        "name": "where",
        "schema": "string",
        "required": false,
        "description": "Criteria to match model instances"
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
    "url": "/v1/Organizations/{id}/documentCategories",
    "method": "queryDocumentCategories",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Organization",
    "typeScriptTag": "organization",
    "description": "Queries documentCategories of Organization.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Organization id",
        "example": "ID"
      },
      {
        "name": "filter",
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
    "url": "/v1/Organizations/{id}/documentCategories/count",
    "method": "countDocumentCategories",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Organization",
    "typeScriptTag": "organization",
    "description": "Counts documentCategories of Organization.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Organization id",
        "example": "ID"
      },
      {
        "name": "where",
        "schema": "string",
        "required": false,
        "description": "Criteria to match model instances"
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
    "url": "/v1/Organizations/{id}/priceLists",
    "method": "queryPriceLists",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Organization",
    "typeScriptTag": "organization",
    "description": "Queries priceLists of Organization.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Organization id",
        "example": "ID"
      },
      {
        "name": "filter",
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
    "url": "/v1/Organizations/{id}/priceLists",
    "method": "createPriceList",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Organization",
    "typeScriptTag": "organization",
    "description": "Creates a new instance in priceLists of this model.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Organization id",
        "example": "ID"
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
        "description": "",
        "default": true
      },
      {
        "name": "activeFrom",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "activeTo",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "type",
        "schema": "string",
        "required": false,
        "description": "",
        "default": "sale"
      },
      {
        "name": "organizationId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "clientId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "deletedAt",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "_isDeleted",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "deletedId",
        "schema": "string",
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
        "name": "updatedAt",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "custom",
        "schema": "object",
        "required": false,
        "description": "",
        "default": {}
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
    "url": "/v1/Organizations/{id}/priceLists/count",
    "method": "countPriceLists",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Organization",
    "typeScriptTag": "organization",
    "description": "Counts priceLists of Organization.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Organization id",
        "example": "ID"
      },
      {
        "name": "where",
        "schema": "string",
        "required": false,
        "description": "Criteria to match model instances"
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
    "url": "/v1/Organizations/{id}/warehouses",
    "method": "queryWarehouses",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Organization",
    "typeScriptTag": "organization",
    "description": "Queries warehouses of Organization.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Organization id",
        "example": "ID"
      },
      {
        "name": "filter",
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
    "url": "/v1/Organizations/{id}/warehouses",
    "method": "createWarehouseInstance",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Organization",
    "typeScriptTag": "organization",
    "description": "Creates a new instance in warehouses of this model.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Organization id",
        "example": "ID"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "default",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "organizationId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "deletedAt",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "_isDeleted",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "deletedId",
        "schema": "string",
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
        "name": "updatedAt",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "custom",
        "schema": "object",
        "required": false,
        "description": "",
        "default": {}
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
    "url": "/v1/Organizations/{id}/warehouses/count",
    "method": "countWarehouses",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Organization",
    "typeScriptTag": "organization",
    "description": "Counts warehouses of Organization.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Organization id",
        "example": "ID"
      },
      {
        "name": "where",
        "schema": "string",
        "required": false,
        "description": "Criteria to match model instances"
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
    "url": "/v1/Organizations/{id}/webhooks",
    "method": "queryWebhooks",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Organization",
    "typeScriptTag": "organization",
    "description": "Queries webhooks of Organization.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Organization id",
        "example": "ID"
      },
      {
        "name": "filter",
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
    "url": "/v1/Organizations/{id}/webhooks",
    "method": "createWebhook",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Organization",
    "typeScriptTag": "organization",
    "description": "Creates a new instance in webhooks of this model.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Organization id",
        "example": "ID"
      },
      {
        "name": "events",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "url",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "URL"
      },
      {
        "name": "enabled",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": true
      },
      {
        "name": "organizationId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "deletedAt",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "_isDeleted",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "deletedId",
        "schema": "string",
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
        "name": "updatedAt",
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
    "url": "/v1/Organizations/{id}/webhooks/count",
    "method": "countWebhooks",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Organization",
    "typeScriptTag": "organization",
    "description": "Counts webhooks of Organization.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Organization id",
        "example": "ID"
      },
      {
        "name": "where",
        "schema": "string",
        "required": false,
        "description": "Criteria to match model instances"
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
    "url": "/v1/Organizations/{id}/orders",
    "method": "getOrders",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Organization",
    "typeScriptTag": "organization",
    "description": "Queries orders of Organization.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Organization id",
        "example": "ID"
      },
      {
        "name": "filter",
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
    "url": "/v1/Organizations/{id}/orders/count",
    "method": "countOrders",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Organization",
    "typeScriptTag": "organization",
    "description": "Counts orders of Organization.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Organization id",
        "example": "ID"
      },
      {
        "name": "where",
        "schema": "string",
        "required": false,
        "description": "Criteria to match model instances"
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
    "url": "/v1/Organizations/{id}/magento1",
    "method": "getMagento1",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Organization",
    "typeScriptTag": "organization",
    "description": "Queries magento1 of Organization.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Organization id",
        "example": "ID"
      },
      {
        "name": "filter",
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
    "url": "/v1/Organizations/{id}/magento1",
    "method": "createMagentoInstance",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Organization",
    "typeScriptTag": "organization",
    "description": "Creates a new instance in magento1 of this model.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Organization id",
        "example": "ID"
      },
      {
        "name": "host",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "apiUser",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "apiKey",
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
        "required": true,
        "description": "",
        "example": true,
        "default": true
      },
      {
        "name": "locale",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "sendInvoiceAutomatically",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true,
        "default": true
      },
      {
        "name": "sendEstimateAutomatically",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true,
        "default": true
      },
      {
        "name": "issueInvoiceForBankPayment",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "issueInvoiceOnComplete",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "businessPremiseId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "electronicDeviceId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "organizationId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "unitId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "warehouseId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "accountId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "custom",
        "schema": "object",
        "required": false,
        "description": "",
        "default": {}
      },
      {
        "name": "deletedAt",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "_isDeleted",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "deletedId",
        "schema": "string",
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
        "name": "updatedAt",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "updateItemInventory",
        "schema": "boolean",
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
    "url": "/v1/Organizations/{id}/magento1/count",
    "method": "countMagento1",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Organization",
    "typeScriptTag": "organization",
    "description": "Counts magento1 of Organization.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Organization id",
        "example": "ID"
      },
      {
        "name": "where",
        "schema": "string",
        "required": false,
        "description": "Criteria to match model instances"
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
    "url": "/v1/Organizations/{id}/woocommerce",
    "method": "queryWoocommerce",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Organization",
    "typeScriptTag": "organization",
    "description": "Queries woocommerce of Organization.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Organization id",
        "example": "ID"
      },
      {
        "name": "filter",
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
    "url": "/v1/Organizations/{id}/woocommerce",
    "method": "createInstanceInWoocommerce",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Organization",
    "typeScriptTag": "organization",
    "description": "Creates a new instance in woocommerce of this model.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Organization id",
        "example": "ID"
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
        "required": true,
        "description": "",
        "example": true,
        "default": true
      },
      {
        "name": "locale",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "sendInvoiceAutomatically",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true,
        "default": true
      },
      {
        "name": "sendEstimateAutomatically",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true,
        "default": true
      },
      {
        "name": "issueInvoiceForBankPayment",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "issueInvoiceOnComplete",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "businessPremiseId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "electronicDeviceId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "organizationId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "unitId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "warehouseId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "accountId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "custom",
        "schema": "object",
        "required": false,
        "description": "",
        "default": {}
      },
      {
        "name": "deletedAt",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "_isDeleted",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "deletedId",
        "schema": "string",
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
        "name": "updatedAt",
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
    "url": "/v1/Organizations/{id}/woocommerce/count",
    "method": "countWooCommerce",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Organization",
    "typeScriptTag": "organization",
    "description": "Counts woocommerce of Organization.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Organization id",
        "example": "ID"
      },
      {
        "name": "where",
        "schema": "string",
        "required": false,
        "description": "Criteria to match model instances"
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
    "url": "/v1/Organizations/{id}/customIntegrations",
    "method": "queryCustomIntegrations",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Organization",
    "typeScriptTag": "organization",
    "description": "Queries customIntegrations of Organization.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Organization id",
        "example": "ID"
      },
      {
        "name": "filter",
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
    "url": "/v1/Organizations/{id}/customIntegrations",
    "method": "createCustomIntegrationInstance",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Organization",
    "typeScriptTag": "organization",
    "description": "Creates a new instance in customIntegrations of this model.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Organization id",
        "example": "ID"
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
        "required": true,
        "description": "",
        "example": true,
        "default": true
      },
      {
        "name": "locale",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "sendInvoiceAutomatically",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true,
        "default": true
      },
      {
        "name": "sendEstimateAutomatically",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true,
        "default": true
      },
      {
        "name": "issueInvoiceForBankPayment",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "issueInvoiceOnComplete",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "businessPremiseId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "electronicDeviceId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "organizationId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "unitId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "warehouseId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "accountId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "custom",
        "schema": "object",
        "required": false,
        "description": "",
        "default": {}
      },
      {
        "name": "deletedAt",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "_isDeleted",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "deletedId",
        "schema": "string",
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
        "name": "updatedAt",
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
    "url": "/v1/Organizations/{id}/customIntegrations/count",
    "method": "countCustomIntegrations",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Organization",
    "typeScriptTag": "organization",
    "description": "Counts customIntegrations of Organization.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Organization id",
        "example": "ID"
      },
      {
        "name": "where",
        "schema": "string",
        "required": false,
        "description": "Criteria to match model instances"
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
    "url": "/v1/Organizations/{id}/thrivecart",
    "method": "queryThrivecart",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Organization",
    "typeScriptTag": "organization",
    "description": "Queries thrivecart of Organization.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Organization id",
        "example": "ID"
      },
      {
        "name": "filter",
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
    "url": "/v1/Organizations/{id}/thrivecart",
    "method": "createThrivecartInstance",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Organization",
    "typeScriptTag": "organization",
    "description": "Creates a new instance in thrivecart of this model.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Organization id",
        "example": "ID"
      },
      {
        "name": "addTax",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "addedTaxRateClassification",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "ignoreTestOrders",
        "schema": "boolean",
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
        "required": true,
        "description": "",
        "example": true,
        "default": true
      },
      {
        "name": "locale",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "sendInvoiceAutomatically",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true,
        "default": true
      },
      {
        "name": "sendEstimateAutomatically",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true,
        "default": true
      },
      {
        "name": "issueInvoiceForBankPayment",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "issueInvoiceOnComplete",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "businessPremiseId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "electronicDeviceId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "organizationId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "unitId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "warehouseId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "accountId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "custom",
        "schema": "object",
        "required": false,
        "description": "",
        "default": {}
      },
      {
        "name": "deletedAt",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "_isDeleted",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "deletedId",
        "schema": "string",
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
        "name": "updatedAt",
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
    "url": "/v1/Organizations/{id}/thrivecart/count",
    "method": "getThrivecartCount",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Organization",
    "typeScriptTag": "organization",
    "description": "Counts thrivecart of Organization.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Organization id",
        "example": "ID"
      },
      {
        "name": "where",
        "schema": "string",
        "required": false,
        "description": "Criteria to match model instances"
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
    "url": "/v1/Organizations/{id}/bokun",
    "method": "getBokun",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Organization",
    "typeScriptTag": "organization",
    "description": "Queries bokun of Organization.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Organization id",
        "example": "ID"
      },
      {
        "name": "filter",
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
    "url": "/v1/Organizations/{id}/bokun",
    "method": "createBokunInstance",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Organization",
    "typeScriptTag": "organization",
    "description": "Creates a new instance in bokun of this model.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Organization id",
        "example": "ID"
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
        "required": true,
        "description": "",
        "example": true,
        "default": true
      },
      {
        "name": "locale",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "sendInvoiceAutomatically",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true,
        "default": true
      },
      {
        "name": "sendEstimateAutomatically",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true,
        "default": true
      },
      {
        "name": "issueInvoiceForBankPayment",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "issueInvoiceOnComplete",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "businessPremiseId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "electronicDeviceId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "organizationId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "unitId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "warehouseId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "accountId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "custom",
        "schema": "object",
        "required": false,
        "description": "",
        "default": {}
      },
      {
        "name": "deletedAt",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "_isDeleted",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "deletedId",
        "schema": "string",
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
        "name": "updatedAt",
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
    "url": "/v1/Organizations/{id}/bokun/count",
    "method": "countBokun",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Organization",
    "typeScriptTag": "organization",
    "description": "Counts bokun of Organization.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Organization id",
        "example": "ID"
      },
      {
        "name": "where",
        "schema": "string",
        "required": false,
        "description": "Criteria to match model instances"
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
    "url": "/v1/Organizations/{id}/shopamine",
    "method": "queryShopamine",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Organization",
    "typeScriptTag": "organization",
    "description": "Queries shopamine of Organization.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Organization id",
        "example": "ID"
      },
      {
        "name": "filter",
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
    "url": "/v1/Organizations/{id}/shopamine",
    "method": "createShopamineInstance",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Organization",
    "typeScriptTag": "organization",
    "description": "Creates a new instance in shopamine of this model.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Organization id",
        "example": "ID"
      },
      {
        "name": "shop",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "apiKey",
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
        "required": true,
        "description": "",
        "example": true,
        "default": true
      },
      {
        "name": "locale",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "sendInvoiceAutomatically",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true,
        "default": true
      },
      {
        "name": "sendEstimateAutomatically",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true,
        "default": true
      },
      {
        "name": "issueInvoiceForBankPayment",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "issueInvoiceOnComplete",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "businessPremiseId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "electronicDeviceId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "organizationId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "unitId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "warehouseId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "accountId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "custom",
        "schema": "object",
        "required": false,
        "description": "",
        "default": {}
      },
      {
        "name": "deletedAt",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "_isDeleted",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "deletedId",
        "schema": "string",
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
        "name": "updatedAt",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "updateItemInventory",
        "schema": "boolean",
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
    "url": "/v1/Organizations/{id}/shopamine/count",
    "method": "countShopamine",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Organization",
    "typeScriptTag": "organization",
    "description": "Counts shopamine of Organization.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Organization id",
        "example": "ID"
      },
      {
        "name": "where",
        "schema": "string",
        "required": false,
        "description": "Criteria to match model instances"
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
    "url": "/v1/Organizations/{id}",
    "method": "findById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Organization",
    "typeScriptTag": "organization",
    "description": "Find a model instance by {{id}} from the data source.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Model id",
        "example": "ID"
      },
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "Filter defining fields and include - must be a JSON-encoded string ({\"something\":\"value\"})"
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
    "url": "/v1/Organizations/{id}",
    "method": "updateAttributesById",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Organization",
    "typeScriptTag": "organization",
    "description": "Patch attributes for a model instance and persist it into the data source.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Organization id",
        "example": "ID"
      },
      {
        "name": "locale",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "timezone",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "active",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true,
        "default": true
      },
      {
        "name": "supportPin",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "size",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "industry",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "companyId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "billingEmail",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "activatedAt",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "deactivatedAt",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "sandbox",
        "schema": "boolean",
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
        "name": "address",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "address2",
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
        "name": "zip",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "state",
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
        "name": "countryAlpha2Code",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "taxNumber",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "taxSubject",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "companyNumber",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "IBAN",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "bank",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "SWIFT",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "website",
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
        "name": "phone",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "businessType",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "fiscalRegionCode",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "id",
        "schema": "string",
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
        "name": "updatedAt",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "custom",
        "schema": "object",
        "required": false,
        "description": "",
        "default": {}
      },
      {
        "name": "_data",
        "schema": "array",
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
    "url": "/v1/Organizations/{id}/activate",
    "method": "activateById",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Organization",
    "typeScriptTag": "organization",
    "description": "",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Organization id",
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
    "url": "/v1/Organizations/{id}/deactivate",
    "method": "deactivateById",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Organization",
    "typeScriptTag": "organization",
    "description": "",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Organization id",
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
    "url": "/v1/Organizations/{id}/is-unique-doc-number",
    "method": "checkUniqueDocNumber",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Organization",
    "typeScriptTag": "organization",
    "description": "",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Organization id",
        "example": "ID"
      },
      {
        "name": "number",
        "schema": "string",
        "required": true,
        "description": "The numberTax subject to check",
        "example": "NUMBER"
      },
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "The type of document",
        "example": "TYPE"
      },
      {
        "name": "ignoreId",
        "schema": "string",
        "required": false,
        "description": "Id of document to ignore. Used when editing a document."
      },
      {
        "name": "incoming",
        "schema": "boolean",
        "required": false,
        "description": "Check incoming documents."
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
    "url": "/v1/Organizations/{id}/last-doc-number",
    "method": "getLastDocNumber",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Organization",
    "typeScriptTag": "organization",
    "description": "",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Organization id",
        "example": "ID"
      },
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "The type of document",
        "example": "TYPE"
      },
      {
        "name": "incoming",
        "schema": "boolean",
        "required": false,
        "description": "Incoming document"
      },
      {
        "name": "date",
        "schema": "string",
        "required": false,
        "description": "Date if not in current year"
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
    "url": "/v1/Organizations/{id}/next-doc-number",
    "method": "getNextDocNumber",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Organization",
    "typeScriptTag": "organization",
    "description": "",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Organization id",
        "example": "ID"
      },
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "The type of document",
        "example": "TYPE"
      },
      {
        "name": "incoming",
        "schema": "boolean",
        "required": false,
        "description": "Incoming document"
      },
      {
        "name": "fvStrategy",
        "schema": "string",
        "required": false,
        "description": "Fiscal verification strategy"
      },
      {
        "name": "bPid",
        "schema": "string",
        "required": false,
        "description": "Business premise ID"
      },
      {
        "name": "eDid",
        "schema": "string",
        "required": false,
        "description": "Electronic device ID"
      },
      {
        "name": "date",
        "schema": "string",
        "required": false,
        "description": "Date if not in current year"
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
    "url": "/v1/Organizations/{id}/subscription",
    "method": "getCurrentSubscription",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Organization",
    "typeScriptTag": "organization",
    "description": "Get currenct subscription",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Organization id",
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
    "url": "/v1/Organizations/{id}/search-documents",
    "method": "searchDocuments",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Organization",
    "typeScriptTag": "organization",
    "description": "DEPRECATED: Search documents endpoint",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Organization id",
        "example": "ID"
      },
      {
        "name": "type",
        "schema": "string",
        "required": false,
        "description": "Type of document"
      },
      {
        "name": "term",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TERM"
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
    "url": "/v1/Organizations/{id}/upload-image",
    "method": "uploadImage",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Organization",
    "typeScriptTag": "organization",
    "description": "",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Organization id",
        "example": "ID"
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
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/Organizations/{id}/images",
    "method": "deleteImageById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Organization",
    "typeScriptTag": "organization",
    "description": "",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Organization id",
        "example": "ID"
      },
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "Type of image to delete",
        "example": "TYPE"
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
    "url": "/v1/Organizations/{id}/images",
    "method": "getImagesById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Organization",
    "typeScriptTag": "organization",
    "description": "",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Organization id",
        "example": "ID"
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
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/Organizations/{id}/images",
    "method": "uploadImage",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Organization",
    "typeScriptTag": "organization",
    "description": "",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Organization id",
        "example": "ID"
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
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/Organizations/{id}/delete-image",
    "method": "removeImage",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Organization",
    "typeScriptTag": "organization",
    "description": "",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Organization id",
        "example": "ID"
      },
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "Type of image to delete",
        "example": "TYPE"
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
    "url": "/v1/Organizations/{id}/download-image",
    "method": "getImageById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Organization",
    "typeScriptTag": "organization",
    "description": "",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Organization id",
        "example": "ID"
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
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/Organizations/{id}/images/logo",
    "method": "getImageLogo",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Organization",
    "typeScriptTag": "organization",
    "description": "",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Organization id",
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
    "url": "/v1/Organizations/{id}/search-clients",
    "method": "searchClients",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Organization",
    "typeScriptTag": "organization",
    "description": "",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Organization id",
        "example": "ID"
      },
      {
        "name": "term",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TERM"
      },
      {
        "name": "type",
        "schema": "string",
        "required": false,
        "description": "Optionally limit search to customer or supplier"
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
    "url": "/v1/Organizations/{id}/clients/search",
    "method": "findClientsBySearch",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Organization",
    "typeScriptTag": "organization",
    "description": "",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Organization id",
        "example": "ID"
      },
      {
        "name": "term",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TERM"
      },
      {
        "name": "type",
        "schema": "string",
        "required": false,
        "description": "Optionally limit search to customer or supplier"
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
    "url": "/v1/Organizations/{id}/search-items",
    "method": "searchItems",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Organization",
    "typeScriptTag": "organization",
    "description": "",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Organization id",
        "example": "ID"
      },
      {
        "name": "term",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TERM"
      },
      {
        "name": "type",
        "schema": "string",
        "required": false,
        "description": "Optionally limit search to incoming or outgoing"
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
    "url": "/v1/Organizations/{id}/items/search",
    "method": "findItemsBySearch",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Organization",
    "typeScriptTag": "organization",
    "description": "",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Organization id",
        "example": "ID"
      },
      {
        "name": "term",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TERM"
      },
      {
        "name": "type",
        "schema": "string",
        "required": false,
        "description": "Optionally limit search to incoming or outgoing"
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
    "url": "/v1/Organizations/{id}/business-stats",
    "method": "getBusinessStats",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Organization",
    "typeScriptTag": "organization",
    "description": "Provides business statistics about the given organization for a particular date range",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Organization id",
        "example": "ID"
      },
      {
        "name": "from",
        "schema": "string",
        "required": false,
        "description": "Optional from date to generate report for"
      },
      {
        "name": "to",
        "schema": "string",
        "required": false,
        "description": "Optional to date to generate report for"
      },
      {
        "name": "accountId",
        "schema": "string",
        "required": false,
        "description": "Optional id of account to limit report for"
      },
      {
        "name": "unitId",
        "schema": "string",
        "required": false,
        "description": "Optional id of unit to limit report for"
      },
      {
        "name": "text",
        "schema": "boolean",
        "required": false,
        "description": "Optional if a text report should be created"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Object containing different stats"
      }
    ]
  },
  {
    "url": "/v1/Organizations/{id}/total-stats",
    "method": "getFinancialStats",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Organization",
    "typeScriptTag": "organization",
    "description": "Provides financial statistics about the given organization",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Organization id",
        "example": "ID"
      },
      {
        "name": "date",
        "schema": "string",
        "required": false,
        "description": "Optional value to use as today's date"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Object containing different stats"
      }
    ]
  },
  {
    "url": "/v1/Organizations/{id}/document-total-stats",
    "method": "getDocumentStats",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Organization",
    "typeScriptTag": "organization",
    "description": "Get organization's document stats",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Organization id",
        "example": "ID"
      },
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "Document type",
        "example": "TYPE"
      },
      {
        "name": "from",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FROM"
      },
      {
        "name": "to",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TO"
      },
      {
        "name": "dist",
        "schema": "string",
        "required": true,
        "description": "Dist of data ie. day, week, month, year",
        "example": "DIST"
      },
      {
        "name": "gross",
        "schema": "boolean",
        "required": false,
        "description": "If set to true, it will calculate the prices with gross values otherwise with net values"
      },
      {
        "name": "incoming",
        "schema": "boolean",
        "required": false,
        "description": "If incoming document statistics should be returned."
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
    "url": "/v1/Organizations/{id}/category-total-stats",
    "method": "getCategoryTotalStats",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Organization",
    "typeScriptTag": "organization",
    "description": "Get organization's categories stats",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Organization id",
        "example": "ID"
      },
      {
        "name": "from",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FROM"
      },
      {
        "name": "to",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TO"
      },
      {
        "name": "dist",
        "schema": "string",
        "required": true,
        "description": "Dist of data ie. day, week, month, year",
        "example": "DIST"
      },
      {
        "name": "categoryId",
        "schema": "string",
        "required": false,
        "description": "Optional id of category to limit results to"
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
    "url": "/v1/Organizations/{id}/payment-total-stats",
    "method": "getPaymentTotalStats",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Organization",
    "typeScriptTag": "organization",
    "description": "Get organization's payments stats",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Organization id",
        "example": "ID"
      },
      {
        "name": "from",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FROM"
      },
      {
        "name": "to",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TO"
      },
      {
        "name": "dist",
        "schema": "string",
        "required": true,
        "description": "Dist of data ie. day, week, month, year",
        "example": "DIST"
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
    "url": "/v1/Organizations/{id}/this-month-invoices",
    "method": "getThisMonthInvoices",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Organization",
    "typeScriptTag": "organization",
    "description": "Returns number of invoices issued by organization in this month",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Organization id",
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
    "url": "/v1/Organizations/{id}/export",
    "method": "exportById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Organization",
    "typeScriptTag": "organization",
    "description": "",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Organization id",
        "example": "ID"
      },
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TYPE"
      },
      {
        "name": "where",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "email",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "lang",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "options",
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
    "url": "/v1/Organizations/{id}/upload-certificate",
    "method": "uploadCertificate",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Organization",
    "typeScriptTag": "organization",
    "description": "",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Organization id",
        "example": "ID"
      },
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TYPE"
      },
      {
        "name": "environment",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "passphrase",
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
    "url": "/v1/Organizations/{id}/invite",
    "method": "inviteUser",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Organization",
    "typeScriptTag": "organization",
    "description": "Invite user to / give access to organization",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Organization id",
        "example": "ID"
      },
      {
        "name": "accountId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "email",
        "schema": "string",
        "description": ""
      },
      {
        "name": "requireConfirmation",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "sendEmail",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "role",
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
    "url": "/v1/Organizations/{id}/has-certificate",
    "method": "checkCertificateType",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Organization",
    "typeScriptTag": "organization",
    "description": "Check if organization has certificate of a type",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Organization id",
        "example": "ID"
      },
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TYPE"
      },
      {
        "name": "environment",
        "schema": "string",
        "required": false,
        "description": "Environment certificate is intended for, default is `production`."
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
    "url": "/v1/Organizations/mailgun-route",
    "method": "redirectMailgunToModel",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Organization",
    "typeScriptTag": "organization",
    "description": "Redirect mailgun to correct model",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "Request was successful"
      }
    ]
  },
  {
    "url": "/v1/Organizations/{id}/documents/pdfs",
    "method": "getMultipleDocumentPdfs",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Organization",
    "typeScriptTag": "organization",
    "description": "Get multiple document PDF files in ZIP.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Organization id",
        "example": "ID"
      },
      {
        "name": "ids",
        "schema": "string",
        "required": true,
        "description": "Array of document ids to fetch as PDFs",
        "example": "IDS"
      },
      {
        "name": "email",
        "schema": "boolean",
        "required": false,
        "description": "Should an email with the link be sent to the requester"
      },
      {
        "name": "lang",
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
    "url": "/v1/Organizations/{id}/documents/parse-image",
    "method": "submitImageProcessing",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Organization",
    "typeScriptTag": "organization",
    "description": "Takes an image or PDF file and puts in into processing queue to create document from.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Organization id",
        "example": "ID"
      },
      {
        "name": "mobile",
        "schema": "boolean",
        "required": false,
        "description": "Is image made by mobile phone."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Returns Parse queue instance"
      }
    ]
  },
  {
    "url": "/v1/Organizations/{id}/import",
    "method": "importCsvData",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Organization",
    "typeScriptTag": "organization",
    "description": "Import CSV data",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Organization id",
        "example": "ID"
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
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/Organizations/{id}/reports/profit-and-loss",
    "method": "getProfitAndLossReport",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Organization",
    "typeScriptTag": "organization",
    "description": "Generate category profit and loss report",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Organization id",
        "example": "ID"
      },
      {
        "name": "from",
        "schema": "string",
        "required": true,
        "description": "from date",
        "example": "FROM"
      },
      {
        "name": "to",
        "schema": "string",
        "required": true,
        "description": "from date",
        "example": "TO"
      },
      {
        "name": "options",
        "schema": "string",
        "required": false,
        "description": "Additional report generation options"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Generated report"
      }
    ]
  },
  {
    "url": "/v1/Organizations/{id}/reports/balance-sheet",
    "method": "getBalanceSheet",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Organization",
    "typeScriptTag": "organization",
    "description": "Generate balance sheet balance sheet",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Organization id",
        "example": "ID"
      },
      {
        "name": "from",
        "schema": "string",
        "required": true,
        "description": "from date",
        "example": "FROM"
      },
      {
        "name": "to",
        "schema": "string",
        "required": true,
        "description": "from date",
        "example": "TO"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Generated balance sheet"
      }
    ]
  },
  {
    "url": "/v1/Shopify/{id}",
    "method": "deleteById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Shopify",
    "typeScriptTag": "shopify",
    "description": "Delete a model instance by {{id}} from the data source.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Model id",
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
    "url": "/v1/Shopify/{id}",
    "method": "patchAttributesById",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Shopify",
    "typeScriptTag": "shopify",
    "description": "Patch attributes for a model instance and persist it into the data source.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Shopify id",
        "example": "ID"
      },
      {
        "name": "shop",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SHOP"
      },
      {
        "name": "apiKey",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "password",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "accessToken",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "shopSettings",
        "schema": "object",
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
        "required": true,
        "description": "",
        "example": true,
        "default": true
      },
      {
        "name": "locale",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "sendInvoiceAutomatically",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true,
        "default": true
      },
      {
        "name": "sendEstimateAutomatically",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true,
        "default": true
      },
      {
        "name": "issueInvoiceForBankPayment",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "issueInvoiceOnComplete",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "businessPremiseId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "electronicDeviceId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "organizationId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "custom",
        "schema": "object",
        "required": false,
        "description": "",
        "default": {}
      },
      {
        "name": "deletedAt",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "_isDeleted",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "deletedId",
        "schema": "string",
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
        "name": "updatedAt",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "updateItemInventory",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "accountId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "unitId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "warehouseId",
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
    "url": "/v1/Shopify/{id}/order",
    "method": "createOrder",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Shopify",
    "typeScriptTag": "shopify",
    "description": "",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Shopify id",
        "example": "ID"
      },
      {
        "name": "shop",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SHOP"
      },
      {
        "name": "apiKey",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "password",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "accessToken",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "shopSettings",
        "schema": "object",
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
        "required": true,
        "description": "",
        "example": true,
        "default": true
      },
      {
        "name": "locale",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "sendInvoiceAutomatically",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true,
        "default": true
      },
      {
        "name": "sendEstimateAutomatically",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true,
        "default": true
      },
      {
        "name": "issueInvoiceForBankPayment",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "issueInvoiceOnComplete",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "businessPremiseId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "electronicDeviceId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "organizationId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "custom",
        "schema": "object",
        "required": false,
        "description": "",
        "default": {}
      },
      {
        "name": "deletedAt",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "_isDeleted",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "deletedId",
        "schema": "string",
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
        "name": "updatedAt",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "updateItemInventory",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "accountId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "unitId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "warehouseId",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Request was successful"
      }
    ]
  },
  {
    "url": "/v1/Shopify/{id}/import",
    "method": "importIntegrationData",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Shopify",
    "typeScriptTag": "shopify",
    "description": "Import integration data in excel format",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Shopify id",
        "example": "ID"
      },
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TYPE"
      },
      {
        "name": "importOptions",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Operation status"
      }
    ]
  },
  {
    "url": "/v1/Shopify/incoming",
    "method": "incomingPost",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Shopify",
    "typeScriptTag": "shopify",
    "description": "",
    "parameters": [
      {
        "name": "shopifyToken",
        "schema": "string",
        "required": true,
        "description": "Shopify token used to authenticate the source of req.",
        "example": "SHOPIFYTOKEN"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Request was successful"
      }
    ]
  },
  {
    "url": "/v1/Shopify/app",
    "method": "getApp",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Shopify",
    "typeScriptTag": "shopify",
    "description": "",
    "parameters": [
      {
        "name": "shop",
        "schema": "string",
        "required": false,
        "description": "Shop domain"
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
    "url": "/v1/Shopify/{id}/orders/document",
    "method": "getOrderDocument",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Shopify",
    "typeScriptTag": "shopify",
    "description": "",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Shopify id",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Request was successful"
      }
    ]
  },
  {
    "url": "/v1/Stripe/{id}",
    "method": "deleteById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Stripe",
    "typeScriptTag": "stripe",
    "description": "Delete a model instance by {{id}} from the data source.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Model id",
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
    "url": "/v1/Stripe/{id}",
    "method": "updateAttributes",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Stripe",
    "typeScriptTag": "stripe",
    "description": "Patch attributes for a model instance and persist it into the data source.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Stripe id",
        "example": "ID"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "apiKey",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "active",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true,
        "default": true
      },
      {
        "name": "autoSend",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true,
        "default": true
      },
      {
        "name": "lang",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "invoiceAction",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "businessPremiseId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "electronicDeviceId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "autoTaxClassification",
        "schema": "string",
        "required": false,
        "description": "",
        "default": "standard"
      },
      {
        "name": "id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "organizationId",
        "schema": "string",
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
        "name": "updatedAt",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "accountId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "unitId",
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
    "url": "/v1/Stripe/{id}/incoming",
    "method": "createIncoming",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Stripe",
    "typeScriptTag": "stripe",
    "description": "",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Stripe id",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Request was successful"
      }
    ]
  },
  {
    "url": "/v1/TicketingHub/{id}/replace",
    "method": "replaceAttributesById",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "TicketingHub",
    "typeScriptTag": "ticketingHub",
    "description": "Replace attributes for a model instance and persist it into the data source.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Model id",
        "example": "ID"
      },
      {
        "name": "token",
        "schema": "string",
        "description": ""
      },
      {
        "name": "businessPremiseId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "electronicDeviceId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "organizationId",
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
    "url": "/v1/TicketingHub/{id}",
    "method": "deleteById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "TicketingHub",
    "typeScriptTag": "ticketingHub",
    "description": "Delete a model instance by {{id}} from the data source.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Model id",
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
    "url": "/v1/TicketingHub/{id}",
    "method": "replaceAttributesById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "TicketingHub",
    "typeScriptTag": "ticketingHub",
    "description": "Replace attributes for a model instance and persist it into the data source.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Model id",
        "example": "ID"
      },
      {
        "name": "token",
        "schema": "string",
        "description": ""
      },
      {
        "name": "businessPremiseId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "electronicDeviceId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "organizationId",
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
    "url": "/v1/Currencies",
    "method": "listByFilter",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Currency",
    "typeScriptTag": "currency",
    "description": "Find all instances of the model matched by filter from the data source.",
    "parameters": [
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string (`{\"where\":{\"something\":\"value\"}}`).  See https://loopback.io/doc/en/lb3/Querying-data.html#using-stringified-json-in-rest-queries for more details."
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
    "url": "/v1/Accounts/{id}/accessTokens/{fk}",
    "method": "deleteAccessTokenById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Account",
    "typeScriptTag": "account",
    "description": "Delete a related item by id for accessTokens.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Account id",
        "example": "ID"
      },
      {
        "name": "fk",
        "schema": "string",
        "required": true,
        "description": "Foreign key for accessTokens",
        "example": "FK"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Request was successful"
      }
    ]
  },
  {
    "url": "/v1/Accounts/{id}/accessTokens",
    "method": "queryAccessTokens",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Account",
    "typeScriptTag": "account",
    "description": "Queries accessTokens of Account.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Account id",
        "example": "ID"
      },
      {
        "name": "filter",
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
    "url": "/v1/Accounts/{id}/accessTokens",
    "method": "createAccessToken",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Account",
    "typeScriptTag": "account",
    "description": "Creates a new instance in accessTokens of this model.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Account id",
        "example": "ID"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "ttl",
        "schema": "number",
        "required": false,
        "description": "",
        "default": 1209600
      },
      {
        "name": "scopes",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "created",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "userId",
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
    "url": "/v1/Accounts/{id}/usages",
    "method": "queryUsages",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Account",
    "typeScriptTag": "account",
    "description": "Queries usages of Account.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Account id",
        "example": "ID"
      },
      {
        "name": "filter",
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
    "url": "/v1/Accounts/{id}/usages/count",
    "method": "countUsages",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Account",
    "typeScriptTag": "account",
    "description": "Counts usages of Account.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Account id",
        "example": "ID"
      },
      {
        "name": "where",
        "schema": "string",
        "required": false,
        "description": "Criteria to match model instances"
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
    "url": "/v1/Accounts/{id}/organizations",
    "method": "queryOrganizations",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Account",
    "typeScriptTag": "account",
    "description": "Queries organizations of Account.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Account id",
        "example": "ID"
      },
      {
        "name": "filter",
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
    "url": "/v1/Accounts/{id}/organizations",
    "method": "createInstanceInOrganizations",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Account",
    "typeScriptTag": "account",
    "description": "Creates a new instance in organizations of this model.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Account id",
        "example": "ID"
      },
      {
        "name": "locale",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "timezone",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "active",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true,
        "default": true
      },
      {
        "name": "supportPin",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "size",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "industry",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "companyId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "billingEmail",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "activatedAt",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "deactivatedAt",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "sandbox",
        "schema": "boolean",
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
        "name": "address",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "address2",
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
        "name": "zip",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "state",
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
        "name": "countryAlpha2Code",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "taxNumber",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "taxSubject",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "companyNumber",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "IBAN",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "bank",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "SWIFT",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "website",
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
        "name": "phone",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "businessType",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "fiscalRegionCode",
        "schema": "string",
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
        "name": "updatedAt",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "custom",
        "schema": "object",
        "required": false,
        "description": "",
        "default": {}
      },
      {
        "name": "_data",
        "schema": "array",
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
    "url": "/v1/Accounts/{id}/organizations/count",
    "method": "countOrganizations",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Account",
    "typeScriptTag": "account",
    "description": "Counts organizations of Account.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Account id",
        "example": "ID"
      },
      {
        "name": "where",
        "schema": "string",
        "required": false,
        "description": "Criteria to match model instances"
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
    "url": "/v1/Accounts/{id}/logs",
    "method": "queryLogs",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Account",
    "typeScriptTag": "account",
    "description": "Queries logs of Account.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Account id",
        "example": "ID"
      },
      {
        "name": "filter",
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
    "url": "/v1/Accounts/{id}/logs/count",
    "method": "countLogs",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Account",
    "typeScriptTag": "account",
    "description": "Counts logs of Account.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Account id",
        "example": "ID"
      },
      {
        "name": "where",
        "schema": "string",
        "required": false,
        "description": "Criteria to match model instances"
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
    "url": "/v1/Accounts",
    "method": "createNewInstance",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Account",
    "typeScriptTag": "account",
    "description": "Create a new instance of the model and persist it into the data source.",
    "parameters": [
      {
        "name": "firstname",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "lastname",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "taxNumber",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "role",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "locale",
        "schema": "string",
        "required": false,
        "description": "",
        "default": "en"
      },
      {
        "name": "label",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "softwareSupplierTaxNumber",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "activateRedirect",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "invitationLink",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "invitationNewLink",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "documentShareableLink",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "disableCreatingChildOrganizations",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "resetRedirect",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "newsletter",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "productUpdates",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "skipChildAccountVerification",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "realm",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "username",
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
        "name": "emailVerified",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "masterId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "parentId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "billingOrganizationId",
        "schema": "string",
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
        "name": "updatedAt",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "custom",
        "schema": "object",
        "required": false,
        "description": "",
        "default": {}
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
    "url": "/v1/Accounts/{id}",
    "method": "findById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Account",
    "typeScriptTag": "account",
    "description": "Find a model instance by {{id}} from the data source.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Model id",
        "example": "ID"
      },
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "Filter defining fields and include - must be a JSON-encoded string ({\"something\":\"value\"})"
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
    "url": "/v1/Accounts/{id}",
    "method": "patchAttributesById",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Account",
    "typeScriptTag": "account",
    "description": "Patch attributes for a model instance and persist it into the data source.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Account id",
        "example": "ID"
      },
      {
        "name": "firstname",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "lastname",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "taxNumber",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "role",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "locale",
        "schema": "string",
        "required": false,
        "description": "",
        "default": "en"
      },
      {
        "name": "label",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "softwareSupplierTaxNumber",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "activateRedirect",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "invitationLink",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "invitationNewLink",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "documentShareableLink",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "disableCreatingChildOrganizations",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "resetRedirect",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "newsletter",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "productUpdates",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "skipChildAccountVerification",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "realm",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "username",
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
        "name": "emailVerified",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "masterId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "parentId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "billingOrganizationId",
        "schema": "string",
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
        "name": "updatedAt",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "custom",
        "schema": "object",
        "required": false,
        "description": "",
        "default": {}
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
    "url": "/v1/Accounts/login",
    "method": "userLogin",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Account",
    "typeScriptTag": "account",
    "description": "Login a user with username/email and password.",
    "parameters": [
      {
        "name": "include",
        "schema": "string",
        "required": false,
        "description": "Related objects to include in the response. See the description of return value for more details."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The response body contains properties of the AccessToken created on login.\nDepending on the value of `include` parameter, the body may contain additional properties:\n\n  - `user` - `U+007BUserU+007D` - Data of the currently logged in user. (`include=user`)\n\n"
      }
    ]
  },
  {
    "url": "/v1/Accounts/logout",
    "method": "logoutUser",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Account",
    "typeScriptTag": "account",
    "description": "Logout a user with access token.",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "Request was successful"
      }
    ]
  },
  {
    "url": "/v1/Accounts/{id}/verify",
    "method": "triggerIdentityVerification",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Account",
    "typeScriptTag": "account",
    "description": "Trigger user's identity verification with configured verifyOptions",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Account id",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Request was successful"
      }
    ]
  },
  {
    "url": "/v1/Accounts/confirm",
    "method": "confirmUserRegistration",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Account",
    "typeScriptTag": "account",
    "description": "Confirm a user registration with identity verification token.",
    "parameters": [
      {
        "name": "uid",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "UID"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TOKEN"
      },
      {
        "name": "redirect",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Request was successful"
      }
    ]
  },
  {
    "url": "/v1/Accounts/reset",
    "method": "resetPasswordByEmail",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Account",
    "typeScriptTag": "account",
    "description": "Reset password for a user with email.",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "Request was successful"
      }
    ]
  },
  {
    "url": "/v1/Accounts/change-password",
    "method": "changePassword",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Account",
    "typeScriptTag": "account",
    "description": "Change a user's password.",
    "parameters": [
      {
        "name": "oldPassword",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "OLDPASSWORD"
      },
      {
        "name": "newPassword",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NEWPASSWORD"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Request was successful"
      }
    ]
  },
  {
    "url": "/v1/Accounts/reset-password",
    "method": "resetPasswordViaToken",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Account",
    "typeScriptTag": "account",
    "description": "Reset user's password via a password-reset token.",
    "parameters": [
      {
        "name": "newPassword",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NEWPASSWORD"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Request was successful"
      }
    ]
  },
  {
    "url": "/v1/Accounts/is-unique",
    "method": "checkEmailUnique",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Account",
    "typeScriptTag": "account",
    "description": "Check if e-mail already exists.",
    "parameters": [
      {
        "name": "email",
        "schema": "string",
        "required": true,
        "description": "E-mail to check uniqueness against.",
        "example": "EMAIL"
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
    "url": "/v1/Accounts/impersonate",
    "method": "impersonateChild",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Account",
    "typeScriptTag": "account",
    "description": "Login as child account",
    "parameters": [
      {
        "name": "email",
        "schema": "string",
        "description": ""
      },
      {
        "name": "id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "ttl",
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
    "url": "/v1/Accounts/{id}/is-verified",
    "method": "checkVerifiedStatus",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Account",
    "typeScriptTag": "account",
    "description": "Check if account is verified.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Account id",
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
    "url": "/v1/Accounts/authorized",
    "method": "checkAuthorizationAndReturnUser",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Account",
    "typeScriptTag": "account",
    "description": "Checks if user is authorized and returns user",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/Accounts/{id}/send-verification",
    "method": "requestVerificationEmail",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Account",
    "typeScriptTag": "account",
    "description": "Request another verification email",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Account id",
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
    "url": "/v1/Accounts/identity-verification",
    "method": "getIdentityHash",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Account",
    "typeScriptTag": "account",
    "description": "Returns identity hash for user",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/Accounts/subscription",
    "method": "getActiveSubscription",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Account",
    "typeScriptTag": "account",
    "description": "Retrieve Account's active subscription",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "Active subscription instance"
      }
    ]
  },
  {
    "url": "/v1/Recurrences/{id}",
    "method": "deleteById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Recurrence",
    "typeScriptTag": "recurrence",
    "description": "Delete a model instance by {{id}} from the data source.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Model id",
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
    "url": "/v1/Recurrences/{id}",
    "method": "findById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Recurrence",
    "typeScriptTag": "recurrence",
    "description": "Find a model instance by {{id}} from the data source.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Model id",
        "example": "ID"
      },
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "Filter defining fields and include - must be a JSON-encoded string ({\"something\":\"value\"})"
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
    "url": "/v1/Recurrences/{id}",
    "method": "updateAttributesById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Recurrence",
    "typeScriptTag": "recurrence",
    "description": "Replace attributes for a model instance and persist it into the data source.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Model id",
        "example": "ID"
      },
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
        "example": "TYPE"
      },
      {
        "name": "dateFirst",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DATEFIRST"
      },
      {
        "name": "numRecurrences",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "autoSend",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true,
        "default": false
      },
      {
        "name": "notify",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true,
        "default": true
      },
      {
        "name": "saveAsDraft",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true,
        "default": false
      },
      {
        "name": "id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "organizationId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "documentId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "accountId",
        "schema": "string",
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
        "name": "updatedAt",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "custom",
        "schema": "object",
        "required": false,
        "description": "",
        "default": {}
      },
      {
        "name": "deletedAt",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "_isDeleted",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "deletedId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "_recurrenceDates",
        "schema": "array",
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
    "url": "/v1/Recurrences/{id}/replace",
    "method": "replaceAttributesById",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Recurrence",
    "typeScriptTag": "recurrence",
    "description": "Replace attributes for a model instance and persist it into the data source.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Model id",
        "example": "ID"
      },
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
        "example": "TYPE"
      },
      {
        "name": "dateFirst",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DATEFIRST"
      },
      {
        "name": "numRecurrences",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "autoSend",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true,
        "default": false
      },
      {
        "name": "notify",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true,
        "default": true
      },
      {
        "name": "saveAsDraft",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true,
        "default": false
      },
      {
        "name": "id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "organizationId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "documentId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "accountId",
        "schema": "string",
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
        "name": "updatedAt",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "custom",
        "schema": "object",
        "required": false,
        "description": "",
        "default": {}
      },
      {
        "name": "deletedAt",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "_isDeleted",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "deletedId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "_recurrenceDates",
        "schema": "array",
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
    "url": "/v1/Recurrences/cron",
    "method": "getCron",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Recurrence",
    "typeScriptTag": "recurrence",
    "description": "",
    "parameters": [
      {
        "name": "date",
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
    "url": "/v1/Payments/{id}",
    "method": "deleteById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Payment",
    "typeScriptTag": "payment",
    "description": "Delete a model instance by {{id}} from the data source.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Model id",
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
    "url": "/v1/Payments/{id}",
    "method": "findById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Payment",
    "typeScriptTag": "payment",
    "description": "Find a model instance by {{id}} from the data source.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Model id",
        "example": "ID"
      },
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "Filter defining fields and include - must be a JSON-encoded string ({\"something\":\"value\"})"
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
    "url": "/v1/Payments/{id}",
    "method": "replaceAttributesById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Payment",
    "typeScriptTag": "payment",
    "description": "Replace attributes for a model instance and persist it into the data source.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Model id",
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
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TYPE"
      },
      {
        "name": "tag",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "date",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DATE"
      },
      {
        "name": "note",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "transactionId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "documentId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "organizationId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "deletedAt",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "_isDeleted",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "deletedId",
        "schema": "string",
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
        "name": "updatedAt",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "custom",
        "schema": "object",
        "required": false,
        "description": "",
        "default": {}
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
    "url": "/v1/Payments/{id}/replace",
    "method": "replaceAttributesById",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Payment",
    "typeScriptTag": "payment",
    "description": "Replace attributes for a model instance and persist it into the data source.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Model id",
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
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TYPE"
      },
      {
        "name": "tag",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "date",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DATE"
      },
      {
        "name": "note",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "transactionId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "documentId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "organizationId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "deletedAt",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "_isDeleted",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "deletedId",
        "schema": "string",
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
        "name": "updatedAt",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "custom",
        "schema": "object",
        "required": false,
        "description": "",
        "default": {}
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
    "url": "/v1/Defaults/{id}",
    "method": "deleteById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Default",
    "typeScriptTag": "default",
    "description": "Delete a model instance by {{id}} from the data source.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Model id",
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
    "url": "/v1/Defaults/{id}",
    "method": "findById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Default",
    "typeScriptTag": "default",
    "description": "Find a model instance by {{id}} from the data source.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Model id",
        "example": "ID"
      },
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "Filter defining fields and include - must be a JSON-encoded string ({\"something\":\"value\"})"
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
    "url": "/v1/Defaults/{id}",
    "method": "patchAttributesById",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Default",
    "typeScriptTag": "default",
    "description": "Patch attributes for a model instance and persist it into the data source.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Default id",
        "example": "ID"
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
      },
      {
        "name": "value",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "organizationId",
        "schema": "string",
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
        "name": "updatedAt",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "l10n",
        "schema": "object",
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
    "url": "/v1/Companies",
    "method": "findAllInstances",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Company",
    "typeScriptTag": "company",
    "description": "Find all instances of the model matched by filter from the data source.",
    "parameters": [
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string (`{\"where\":{\"something\":\"value\"}}`).  See https://loopback.io/doc/en/lb3/Querying-data.html#using-stringified-json-in-rest-queries for more details."
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
    "url": "/v1/Companies/search",
    "method": "searchGet",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Company",
    "typeScriptTag": "company",
    "description": "",
    "parameters": [
      {
        "name": "term",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TERM"
      },
      {
        "name": "country",
        "schema": "string",
        "required": false,
        "description": "Narrowing search for more efficient queries."
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
    "url": "/v1/Subscriptions/{id}/whiteLabel",
    "method": "createWhiteLabelInstance",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Subscription",
    "typeScriptTag": "subscription",
    "description": "Creates a new instance in whiteLabel of this model.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Subscription id",
        "example": "ID"
      },
      {
        "name": "active",
        "schema": "boolean",
        "description": "",
        "default": false
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "domain",
        "schema": "string",
        "description": ""
      },
      {
        "name": "subdomain",
        "schema": "string",
        "description": ""
      },
      {
        "name": "baseColor",
        "schema": "string",
        "description": ""
      },
      {
        "name": "logo",
        "schema": "string",
        "description": ""
      },
      {
        "name": "separateDashboardIcon",
        "schema": "boolean",
        "description": "",
        "default": false
      },
      {
        "name": "googleAnalyticsId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "chatAppType",
        "schema": "string",
        "description": "",
        "default": "Intercom"
      },
      {
        "name": "chatAppId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "privacyPolicyLink",
        "schema": "string",
        "description": ""
      },
      {
        "name": "termsOfServiceLink",
        "schema": "string",
        "description": ""
      },
      {
        "name": "websiteURL",
        "schema": "string",
        "description": ""
      },
      {
        "name": "supportEmail",
        "schema": "string",
        "description": ""
      },
      {
        "name": "supportPhone",
        "schema": "string",
        "description": ""
      },
      {
        "name": "blogURL",
        "schema": "string",
        "description": ""
      },
      {
        "name": "hideLoginPage",
        "schema": "boolean",
        "description": "",
        "default": true
      },
      {
        "name": "showSignup",
        "schema": "boolean",
        "description": "",
        "default": false
      },
      {
        "name": "unauthorizedRedirectURL",
        "schema": "string",
        "description": ""
      },
      {
        "name": "passwordResetURL",
        "schema": "string",
        "description": ""
      },
      {
        "name": "signupURL",
        "schema": "string",
        "description": ""
      },
      {
        "name": "allowInPromo",
        "schema": "boolean",
        "description": "",
        "default": true
      },
      {
        "name": "interface",
        "schema": "object",
        "description": ""
      },
      {
        "name": "id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "subscriptionId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "createdAt",
        "schema": "string",
        "description": ""
      },
      {
        "name": "updatedAt",
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
    "url": "/v1/Subscriptions",
    "method": "findAllByFilter",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Subscription",
    "typeScriptTag": "subscription",
    "description": "Find all instances of the model matched by filter from the data source.",
    "parameters": [
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string (`{\"where\":{\"something\":\"value\"}}`).  See https://loopback.io/doc/en/lb3/Querying-data.html#using-stringified-json-in-rest-queries for more details."
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
    "url": "/v1/Subscriptions/client-token",
    "method": "getClientToken",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Subscription",
    "typeScriptTag": "subscription",
    "description": "Get Braintree client token",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/Subscriptions/cron",
    "method": "getCron",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Subscription",
    "typeScriptTag": "subscription",
    "description": "",
    "parameters": [
      {
        "name": "date",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "subscriptionId",
        "schema": "string",
        "required": false,
        "description": "If provided limits cron to one subscription"
      },
      {
        "name": "skipSendingEmails",
        "schema": "boolean",
        "required": false,
        "description": "Runs without sending email to customer"
      },
      {
        "name": "skipIssuingInvoices",
        "schema": "boolean",
        "required": false,
        "description": "Runs without issuing invoice for usage"
      },
      {
        "name": "dryRun",
        "schema": "boolean",
        "required": false,
        "description": "Checks usage but does not commit data or send emails"
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
    "url": "/v1/Subscriptions/{id}/payment-method",
    "method": "getPaymentMethod",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Subscription",
    "typeScriptTag": "subscription",
    "description": "Get Payment method",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Subscription id",
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
    "url": "/v1/Subscriptions/{id}/payment-method",
    "method": "addPaymentMethod",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Subscription",
    "typeScriptTag": "subscription",
    "description": "Add/Update payment method",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Subscription id",
        "example": "ID"
      },
      {
        "name": "paymentMethod",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PAYMENTMETHOD"
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
    "url": "/v1/Plans",
    "method": "findAllByFilter",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Plan",
    "typeScriptTag": "plan",
    "description": "Find all instances of the model matched by filter from the data source.",
    "parameters": [
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string (`{\"where\":{\"something\":\"value\"}}`).  See https://loopback.io/doc/en/lb3/Querying-data.html#using-stringified-json-in-rest-queries for more details."
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
    "url": "/v1/WhiteLabels",
    "method": "findAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "WhiteLabel",
    "typeScriptTag": "whiteLabel",
    "description": "Find all instances of the model matched by filter from the data source.",
    "parameters": [
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string (`{\"where\":{\"something\":\"value\"}}`).  See https://loopback.io/doc/en/lb3/Querying-data.html#using-stringified-json-in-rest-queries for more details."
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
    "url": "/v1/WhiteLabels",
    "method": "createNewInstance",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "WhiteLabel",
    "typeScriptTag": "whiteLabel",
    "description": "Create a new instance of the model and persist it into the data source.",
    "parameters": [
      {
        "name": "active",
        "schema": "boolean",
        "description": "",
        "default": false
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "domain",
        "schema": "string",
        "description": ""
      },
      {
        "name": "subdomain",
        "schema": "string",
        "description": ""
      },
      {
        "name": "baseColor",
        "schema": "string",
        "description": ""
      },
      {
        "name": "logo",
        "schema": "string",
        "description": ""
      },
      {
        "name": "separateDashboardIcon",
        "schema": "boolean",
        "description": "",
        "default": false
      },
      {
        "name": "googleAnalyticsId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "chatAppType",
        "schema": "string",
        "description": "",
        "default": "Intercom"
      },
      {
        "name": "chatAppId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "privacyPolicyLink",
        "schema": "string",
        "description": ""
      },
      {
        "name": "termsOfServiceLink",
        "schema": "string",
        "description": ""
      },
      {
        "name": "websiteURL",
        "schema": "string",
        "description": ""
      },
      {
        "name": "supportEmail",
        "schema": "string",
        "description": ""
      },
      {
        "name": "supportPhone",
        "schema": "string",
        "description": ""
      },
      {
        "name": "blogURL",
        "schema": "string",
        "description": ""
      },
      {
        "name": "hideLoginPage",
        "schema": "boolean",
        "description": "",
        "default": true
      },
      {
        "name": "showSignup",
        "schema": "boolean",
        "description": "",
        "default": false
      },
      {
        "name": "unauthorizedRedirectURL",
        "schema": "string",
        "description": ""
      },
      {
        "name": "passwordResetURL",
        "schema": "string",
        "description": ""
      },
      {
        "name": "signupURL",
        "schema": "string",
        "description": ""
      },
      {
        "name": "allowInPromo",
        "schema": "boolean",
        "description": "",
        "default": true
      },
      {
        "name": "interface",
        "schema": "object",
        "description": ""
      },
      {
        "name": "subscriptionId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "createdAt",
        "schema": "string",
        "description": ""
      },
      {
        "name": "updatedAt",
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
    "url": "/v1/WhiteLabels/{id}",
    "method": "updateAttributesById",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "WhiteLabel",
    "typeScriptTag": "whiteLabel",
    "description": "Patch attributes for a model instance and persist it into the data source.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "WhiteLabel id",
        "example": "ID"
      },
      {
        "name": "active",
        "schema": "boolean",
        "description": "",
        "default": false
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "domain",
        "schema": "string",
        "description": ""
      },
      {
        "name": "subdomain",
        "schema": "string",
        "description": ""
      },
      {
        "name": "baseColor",
        "schema": "string",
        "description": ""
      },
      {
        "name": "logo",
        "schema": "string",
        "description": ""
      },
      {
        "name": "separateDashboardIcon",
        "schema": "boolean",
        "description": "",
        "default": false
      },
      {
        "name": "googleAnalyticsId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "chatAppType",
        "schema": "string",
        "description": "",
        "default": "Intercom"
      },
      {
        "name": "chatAppId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "privacyPolicyLink",
        "schema": "string",
        "description": ""
      },
      {
        "name": "termsOfServiceLink",
        "schema": "string",
        "description": ""
      },
      {
        "name": "websiteURL",
        "schema": "string",
        "description": ""
      },
      {
        "name": "supportEmail",
        "schema": "string",
        "description": ""
      },
      {
        "name": "supportPhone",
        "schema": "string",
        "description": ""
      },
      {
        "name": "blogURL",
        "schema": "string",
        "description": ""
      },
      {
        "name": "hideLoginPage",
        "schema": "boolean",
        "description": "",
        "default": true
      },
      {
        "name": "showSignup",
        "schema": "boolean",
        "description": "",
        "default": false
      },
      {
        "name": "unauthorizedRedirectURL",
        "schema": "string",
        "description": ""
      },
      {
        "name": "passwordResetURL",
        "schema": "string",
        "description": ""
      },
      {
        "name": "signupURL",
        "schema": "string",
        "description": ""
      },
      {
        "name": "allowInPromo",
        "schema": "boolean",
        "description": "",
        "default": true
      },
      {
        "name": "interface",
        "schema": "object",
        "description": ""
      },
      {
        "name": "id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "subscriptionId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "createdAt",
        "schema": "string",
        "description": ""
      },
      {
        "name": "updatedAt",
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
    "url": "/v1/containers/{container}/download/{file}",
    "method": "downloadFile",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "container",
    "typeScriptTag": "container",
    "description": "",
    "parameters": [
      {
        "name": "container",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CONTAINER"
      },
      {
        "name": "file",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FILE"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Request was successful"
      }
    ]
  },
  {
    "url": "/v1/Messages/contact-sales",
    "method": "submitContactForm",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Message",
    "typeScriptTag": "message",
    "description": "",
    "parameters": [
      {
        "name": "email",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EMAIL"
      },
      {
        "name": "company",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "COMPANY"
      },
      {
        "name": "message",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "MESSAGE"
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
    "url": "/v1/BusinessPremises/{id}/electronicDevices",
    "method": "createElectronicDevicesInstance",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "BusinessPremise",
    "typeScriptTag": "businessPremise",
    "description": "Creates a new instance in electronicDevices of this model.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "BusinessPremise id",
        "example": "ID"
      },
      {
        "name": "electronicDeviceId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ELECTRONICDEVICEID"
      },
      {
        "name": "numbers",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "provider",
        "schema": "string",
        "required": false,
        "description": "",
        "default": "furs"
      },
      {
        "name": "environment",
        "schema": "string",
        "required": false,
        "description": "",
        "default": "production"
      },
      {
        "name": "businessPremiseId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "organizationId",
        "schema": "string",
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
        "name": "updatedAt",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "custom",
        "schema": "object",
        "required": false,
        "description": "",
        "default": {}
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
    "url": "/v1/BusinessPremises/{id}",
    "method": "deleteById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "BusinessPremise",
    "typeScriptTag": "businessPremise",
    "description": "Delete a model instance by {{id}} from the data source.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Model id",
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
    "url": "/v1/BusinessPremises/{id}",
    "method": "updateAttributesById",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "BusinessPremise",
    "typeScriptTag": "businessPremise",
    "description": "Patch attributes for a model instance and persist it into the data source.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "BusinessPremise id",
        "example": "ID"
      },
      {
        "name": "type",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "taxNumber",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "businessPremiseId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "BUSINESSPREMISEID"
      },
      {
        "name": "premiseType",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "cadastralNumber",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "buildingNumber",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "buildingSectionNumber",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "street",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "houseNumber",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "houseNumberAdditional",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "community",
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
        "name": "postalCode",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "numbers",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "provider",
        "schema": "string",
        "required": false,
        "description": "",
        "default": "furs"
      },
      {
        "name": "environment",
        "schema": "string",
        "required": false,
        "description": "",
        "default": "production"
      },
      {
        "name": "id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "organizationId",
        "schema": "string",
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
        "name": "updatedAt",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "custom",
        "schema": "object",
        "required": false,
        "description": "",
        "default": {}
      },
      {
        "name": "deletedAt",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "_isDeleted",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "deletedId",
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
    "url": "/v1/AtcudSeries/{id}/organization",
    "method": "getOrganizationBelongsTo",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "AtcudSeries",
    "typeScriptTag": "atcudSeries",
    "description": "Fetches belongsTo relation organization.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "AtcudSeries id",
        "example": "ID"
      },
      {
        "name": "refresh",
        "schema": "boolean",
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
    "url": "/v1/AtcudSeries",
    "method": "findAllByFilter",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "AtcudSeries",
    "typeScriptTag": "atcudSeries",
    "description": "Find all instances of the model matched by filter from the data source.",
    "parameters": [
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string (`{\"where\":{\"something\":\"value\"}}`).  See https://loopback.io/doc/en/lb3/Querying-data.html#using-stringified-json-in-rest-queries for more details."
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
    "url": "/v1/AtcudSeries",
    "method": "createNewInstance",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "AtcudSeries",
    "typeScriptTag": "atcudSeries",
    "description": "Create a new instance of the model and persist it into the data source.",
    "parameters": [
      {
        "name": "seriesId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SERIESID"
      },
      {
        "name": "code",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CODE"
      },
      {
        "name": "documentType",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DOCUMENTTYPE"
      },
      {
        "name": "startDate",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "STARTDATE"
      },
      {
        "name": "firstNumber",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FIRSTNUMBER"
      },
      {
        "name": "organizationId",
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
    "url": "/v1/AtcudSeries/{id}",
    "method": "deleteById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "AtcudSeries",
    "typeScriptTag": "atcudSeries",
    "description": "Delete a model instance by {{id}} from the data source.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Model id",
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
    "url": "/v1/AtcudSeries/{id}",
    "method": "findById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "AtcudSeries",
    "typeScriptTag": "atcudSeries",
    "description": "Find a model instance by {{id}} from the data source.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Model id",
        "example": "ID"
      },
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "Filter defining fields and include - must be a JSON-encoded string ({\"something\":\"value\"})"
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
    "url": "/v1/AtcudSeries/{id}",
    "method": "updateAttributes",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "AtcudSeries",
    "typeScriptTag": "atcudSeries",
    "description": "Patch attributes for a model instance and persist it into the data source.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "AtcudSeries id",
        "example": "ID"
      },
      {
        "name": "seriesId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SERIESID"
      },
      {
        "name": "code",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CODE"
      },
      {
        "name": "documentType",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DOCUMENTTYPE"
      },
      {
        "name": "startDate",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "STARTDATE"
      },
      {
        "name": "firstNumber",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FIRSTNUMBER"
      },
      {
        "name": "id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "organizationId",
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
    "url": "/v1/AtcudSeries/{id}",
    "method": "replaceAttributesById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "AtcudSeries",
    "typeScriptTag": "atcudSeries",
    "description": "Replace attributes for a model instance and persist it into the data source.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Model id",
        "example": "ID"
      },
      {
        "name": "seriesId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SERIESID"
      },
      {
        "name": "code",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CODE"
      },
      {
        "name": "documentType",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DOCUMENTTYPE"
      },
      {
        "name": "startDate",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "STARTDATE"
      },
      {
        "name": "firstNumber",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FIRSTNUMBER"
      },
      {
        "name": "id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "organizationId",
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
    "url": "/v1/AtcudSeries/{id}/replace",
    "method": "replaceAttributesById",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "AtcudSeries",
    "typeScriptTag": "atcudSeries",
    "description": "Replace attributes for a model instance and persist it into the data source.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Model id",
        "example": "ID"
      },
      {
        "name": "seriesId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SERIESID"
      },
      {
        "name": "code",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CODE"
      },
      {
        "name": "documentType",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DOCUMENTTYPE"
      },
      {
        "name": "startDate",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "STARTDATE"
      },
      {
        "name": "firstNumber",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FIRSTNUMBER"
      },
      {
        "name": "id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "organizationId",
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
    "url": "/v1/AtcudSeries/findOne",
    "method": "findFirstByFilter",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "AtcudSeries",
    "typeScriptTag": "atcudSeries",
    "description": "Find first instance of the model matched by filter from the data source.",
    "parameters": [
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string (`{\"where\":{\"something\":\"value\"}}`).  See https://loopback.io/doc/en/lb3/Querying-data.html#using-stringified-json-in-rest-queries for more details."
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
    "url": "/v1/AtcudSeries/count",
    "method": "countInstancesByWhere",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "AtcudSeries",
    "typeScriptTag": "atcudSeries",
    "description": "Count instances of the model matched by where from the data source.",
    "parameters": [
      {
        "name": "where",
        "schema": "string",
        "required": false,
        "description": "Criteria to match model instances"
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
    "url": "/v1/Countries",
    "method": "findAllByFilter",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Country",
    "typeScriptTag": "country",
    "description": "Find all instances of the model matched by filter from the data source.",
    "parameters": [
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string (`{\"where\":{\"something\":\"value\"}}`).  See https://loopback.io/doc/en/lb3/Querying-data.html#using-stringified-json-in-rest-queries for more details."
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
    "url": "/v1/Countries/match",
    "method": "matchTermAgainstAvailable",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Country",
    "typeScriptTag": "country",
    "description": "Matches the sent term against the available countries, to try and find a match",
    "parameters": [
      {
        "name": "term",
        "schema": "string",
        "required": true,
        "description": "The term to match the country agains",
        "example": "TERM"
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
    "url": "/v1/tracking/webhook",
    "method": "webhookNotification",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Tracking",
    "typeScriptTag": "tracking",
    "description": "",
    "parameters": [
      {
        "name": "source",
        "schema": "string",
        "required": false,
        "description": "Source of webhook call"
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
    "url": "/v1/ElectronicDevices/{id}",
    "method": "patchAttributesById",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "ElectronicDevice",
    "typeScriptTag": "electronicDevice",
    "description": "Patch attributes for a model instance and persist it into the data source.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "ElectronicDevice id",
        "example": "ID"
      },
      {
        "name": "electronicDeviceId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ELECTRONICDEVICEID"
      },
      {
        "name": "numbers",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "provider",
        "schema": "string",
        "required": false,
        "description": "",
        "default": "furs"
      },
      {
        "name": "environment",
        "schema": "string",
        "required": false,
        "description": "",
        "default": "production"
      },
      {
        "name": "id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "businessPremiseId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "organizationId",
        "schema": "string",
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
        "name": "updatedAt",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "custom",
        "schema": "object",
        "required": false,
        "description": "",
        "default": {}
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
    "url": "/v1/Certificates/expiry-cron",
    "method": "getExpiryCron",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Certificate",
    "typeScriptTag": "certificate",
    "description": "",
    "parameters": [
      {
        "name": "date",
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
    "url": "/v1/geoip/locate",
    "method": "parseIpToGeoLocation",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "GeoIP",
    "typeScriptTag": "geoIp",
    "description": "Parse IP to geo location",
    "parameters": [
      {
        "name": "ip",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "IP"
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
    "url": "/v1/AccountOrganizations/{id}",
    "method": "deleteById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "AccountOrganization",
    "typeScriptTag": "accountOrganization",
    "description": "Delete a model instance by {{id}} from the data source.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Model id",
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
    "url": "/v1/AccountOrganizations/{id}/accept",
    "method": "confirmInvitation",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "AccountOrganization",
    "typeScriptTag": "accountOrganization",
    "description": "Confirm invitation to join organization",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "AccountOrganization id",
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
    "url": "/v1/AccountOrganizations/{id}/reject",
    "method": "rejectInvitation",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "AccountOrganization",
    "typeScriptTag": "accountOrganization",
    "description": "Deny invitation to join organization",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "AccountOrganization id",
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
    "url": "/v1/AccountOrganizations/{id}/enable",
    "method": "enableAccess",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "AccountOrganization",
    "typeScriptTag": "accountOrganization",
    "description": "Enable users access to organization",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "AccountOrganization id",
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
    "url": "/v1/AccountOrganizations/{id}/disable",
    "method": "disableAccess",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "AccountOrganization",
    "typeScriptTag": "accountOrganization",
    "description": "Disable users access to organization",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "AccountOrganization id",
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
    "url": "/v1/AccountOrganizations/{id}/change-role",
    "method": "changeRole",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "AccountOrganization",
    "typeScriptTag": "accountOrganization",
    "description": "",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "AccountOrganization id",
        "example": "ID"
      },
      {
        "name": "role",
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
    "url": "/v1/FileMeta/{id}",
    "method": "deleteById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "FileMeta",
    "typeScriptTag": "fileMeta",
    "description": "Delete a model instance by {{id}} from the data source.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Model id",
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
    "url": "/v1/Units/{id}",
    "method": "deleteById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Unit",
    "typeScriptTag": "unit",
    "description": "Delete a model instance by {{id}} from the data source.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Model id",
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
    "url": "/v1/Units/{id}",
    "method": "updateAttributes",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Unit",
    "typeScriptTag": "unit",
    "description": "Patch attributes for a model instance and persist it into the data source.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Unit id",
        "example": "ID"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "address",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "address2",
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
        "name": "zip",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "state",
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
        "name": "countryAlpha2Code",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "taxNumber",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "taxSubject",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "companyNumber",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "IBAN",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "bank",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "SWIFT",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "website",
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
        "name": "phone",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "businessType",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "fiscalRegionCode",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "organizationId",
        "schema": "string",
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
        "name": "updatedAt",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "custom",
        "schema": "object",
        "required": false,
        "description": "",
        "default": {}
      },
      {
        "name": "deletedAt",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "_isDeleted",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "deletedId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "_data",
        "schema": "array",
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
    "url": "/v1/Units/{id}/last-doc-number",
    "method": "getLastDocNumber",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Unit",
    "typeScriptTag": "unit",
    "description": "",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Unit id",
        "example": "ID"
      },
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "The type of document",
        "example": "TYPE"
      },
      {
        "name": "incoming",
        "schema": "boolean",
        "required": false,
        "description": "Incoming document"
      },
      {
        "name": "date",
        "schema": "string",
        "required": false,
        "description": "Date if not in current year"
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
    "url": "/v1/Units/{id}/next-doc-number",
    "method": "getNextDocNumber",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Unit",
    "typeScriptTag": "unit",
    "description": "",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Unit id",
        "example": "ID"
      },
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "The type of document",
        "example": "TYPE"
      },
      {
        "name": "incoming",
        "schema": "boolean",
        "required": false,
        "description": "Incoming document"
      },
      {
        "name": "date",
        "schema": "string",
        "required": false,
        "description": "Date if not in current year"
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
    "url": "/v1/Units/{id}/upload-image",
    "method": "uploadImage",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Unit",
    "typeScriptTag": "unit",
    "description": "",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Unit id",
        "example": "ID"
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
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/Units/{id}/images",
    "method": "deleteImageById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Unit",
    "typeScriptTag": "unit",
    "description": "",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Unit id",
        "example": "ID"
      },
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "Type of image to delete",
        "example": "TYPE"
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
    "url": "/v1/Units/{id}/images",
    "method": "findImagesById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Unit",
    "typeScriptTag": "unit",
    "description": "",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Unit id",
        "example": "ID"
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
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/Units/{id}/images",
    "method": "uploadImage",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Unit",
    "typeScriptTag": "unit",
    "description": "",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Unit id",
        "example": "ID"
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
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/Units/{id}/delete-image",
    "method": "deleteImage",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Unit",
    "typeScriptTag": "unit",
    "description": "",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Unit id",
        "example": "ID"
      },
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "Type of image to delete",
        "example": "TYPE"
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
    "url": "/v1/Units/{id}/download-image",
    "method": "downloadImage",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Unit",
    "typeScriptTag": "unit",
    "description": "",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Unit id",
        "example": "ID"
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
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/Categories/{id}",
    "method": "removeById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Category",
    "typeScriptTag": "category",
    "description": "Delete a model instance by {{id}} from the data source.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Model id",
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
    "url": "/v1/Categories/{id}",
    "method": "findById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Category",
    "typeScriptTag": "category",
    "description": "Find a model instance by {{id}} from the data source.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Model id",
        "example": "ID"
      },
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "Filter defining fields and include - must be a JSON-encoded string ({\"something\":\"value\"})"
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
    "url": "/v1/Categories/{id}",
    "method": "replaceAttributesById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Category",
    "typeScriptTag": "category",
    "description": "Replace attributes for a model instance and persist it into the data source.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Model id",
        "example": "ID"
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
      },
      {
        "name": "alias",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ALIAS"
      },
      {
        "name": "id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "organizationId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "deletedAt",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "_isDeleted",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "deletedId",
        "schema": "string",
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
        "name": "updatedAt",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "custom",
        "schema": "object",
        "required": false,
        "description": "",
        "default": {}
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
    "url": "/v1/Categories/{id}/replace",
    "method": "replaceAttributesById",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Category",
    "typeScriptTag": "category",
    "description": "Replace attributes for a model instance and persist it into the data source.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Model id",
        "example": "ID"
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
      },
      {
        "name": "alias",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ALIAS"
      },
      {
        "name": "id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "organizationId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "deletedAt",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "_isDeleted",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "deletedId",
        "schema": "string",
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
        "name": "updatedAt",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "custom",
        "schema": "object",
        "required": false,
        "description": "",
        "default": {}
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
    "url": "/v1/DocumentCategories/{id}/replace",
    "method": "replaceAttributesById",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "DocumentCategory",
    "typeScriptTag": "documentCategory",
    "description": "Replace attributes for a model instance and persist it into the data source.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Model id",
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
        "name": "amountConverted",
        "schema": "number",
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
        "name": "id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "organizationId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "documentId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "categoryId",
        "schema": "string",
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
        "name": "updatedAt",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "deletedAt",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "_isDeleted",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "deletedId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "custom",
        "schema": "object",
        "required": false,
        "description": "",
        "default": {}
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
    "url": "/v1/DocumentCategories/{id}",
    "method": "deleteById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "DocumentCategory",
    "typeScriptTag": "documentCategory",
    "description": "Delete a model instance by {{id}} from the data source.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Model id",
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
    "url": "/v1/DocumentCategories/{id}",
    "method": "updateAttributesById",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "DocumentCategory",
    "typeScriptTag": "documentCategory",
    "description": "Patch attributes for a model instance and persist it into the data source.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "DocumentCategory id",
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
        "name": "amountConverted",
        "schema": "number",
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
        "name": "id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "organizationId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "documentId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "categoryId",
        "schema": "string",
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
        "name": "updatedAt",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "deletedAt",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "_isDeleted",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "deletedId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "custom",
        "schema": "object",
        "required": false,
        "description": "",
        "default": {}
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
    "url": "/v1/DocumentCategories/{id}",
    "method": "updateAttributesById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "DocumentCategory",
    "typeScriptTag": "documentCategory",
    "description": "Replace attributes for a model instance and persist it into the data source.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Model id",
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
        "name": "amountConverted",
        "schema": "number",
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
        "name": "id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "organizationId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "documentId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "categoryId",
        "schema": "string",
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
        "name": "updatedAt",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "deletedAt",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "_isDeleted",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "deletedId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "custom",
        "schema": "object",
        "required": false,
        "description": "",
        "default": {}
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
    "url": "/v1/PriceLists/{id}/items",
    "method": "queryItems",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "PriceList",
    "typeScriptTag": "priceList",
    "description": "Queries items of PriceList.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "PriceList id",
        "example": "ID"
      },
      {
        "name": "filter",
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
    "url": "/v1/PriceLists/{id}/items/count",
    "method": "countItems",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "PriceList",
    "typeScriptTag": "priceList",
    "description": "Counts items of PriceList.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "PriceList id",
        "example": "ID"
      },
      {
        "name": "where",
        "schema": "string",
        "required": false,
        "description": "Criteria to match model instances"
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
    "url": "/v1/PriceLists/{id}/prices",
    "method": "queryPrices",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "PriceList",
    "typeScriptTag": "priceList",
    "description": "Queries prices of PriceList.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "PriceList id",
        "example": "ID"
      },
      {
        "name": "filter",
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
    "url": "/v1/PriceLists/{id}/prices",
    "method": "createNewInstanceInPrices",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "PriceList",
    "typeScriptTag": "priceList",
    "description": "Creates a new instance in prices of this model.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "PriceList id",
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
        "name": "priceListId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "itemId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "organizationId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "deletedAt",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "_isDeleted",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "deletedId",
        "schema": "string",
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
        "name": "updatedAt",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "custom",
        "schema": "object",
        "required": false,
        "description": "",
        "default": {}
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
    "url": "/v1/PriceLists/{id}/prices/count",
    "method": "countPrices",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "PriceList",
    "typeScriptTag": "priceList",
    "description": "Counts prices of PriceList.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "PriceList id",
        "example": "ID"
      },
      {
        "name": "where",
        "schema": "string",
        "required": false,
        "description": "Criteria to match model instances"
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
    "url": "/v1/PriceLists/{id}",
    "method": "deleteById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "PriceList",
    "typeScriptTag": "priceList",
    "description": "Delete a model instance by {{id}} from the data source.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Model id",
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
    "url": "/v1/PriceLists/{id}",
    "method": "findById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "PriceList",
    "typeScriptTag": "priceList",
    "description": "Find a model instance by {{id}} from the data source.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Model id",
        "example": "ID"
      },
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "Filter defining fields and include - must be a JSON-encoded string ({\"something\":\"value\"})"
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
    "url": "/v1/PriceLists/{id}",
    "method": "updateAttributesById",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "PriceList",
    "typeScriptTag": "priceList",
    "description": "Patch attributes for a model instance and persist it into the data source.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "PriceList id",
        "example": "ID"
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
        "description": "",
        "default": true
      },
      {
        "name": "activeFrom",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "activeTo",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "type",
        "schema": "string",
        "required": false,
        "description": "",
        "default": "sale"
      },
      {
        "name": "id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "organizationId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "clientId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "deletedAt",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "_isDeleted",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "deletedId",
        "schema": "string",
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
        "name": "updatedAt",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "custom",
        "schema": "object",
        "required": false,
        "description": "",
        "default": {}
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
    "url": "/v1/Prices/{id}",
    "method": "deleteById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Price",
    "typeScriptTag": "price",
    "description": "Delete a model instance by {{id}} from the data source.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Model id",
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
    "url": "/v1/Prices/{id}",
    "method": "patchAttributes",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Price",
    "typeScriptTag": "price",
    "description": "Patch attributes for a model instance and persist it into the data source.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Price id",
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
        "name": "id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "priceListId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "itemId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "organizationId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "deletedAt",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "_isDeleted",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "deletedId",
        "schema": "string",
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
        "name": "updatedAt",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "custom",
        "schema": "object",
        "required": false,
        "description": "",
        "default": {}
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
    "url": "/v1/Warehouses/{id}",
    "method": "deleteById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Warehouse",
    "typeScriptTag": "warehouse",
    "description": "Delete a model instance by {{id}} from the data source.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Model id",
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
    "url": "/v1/Warehouses/{id}",
    "method": "findById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Warehouse",
    "typeScriptTag": "warehouse",
    "description": "Find a model instance by {{id}} from the data source.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Model id",
        "example": "ID"
      },
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "Filter defining fields and include - must be a JSON-encoded string ({\"something\":\"value\"})"
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
    "url": "/v1/Warehouses/{id}",
    "method": "updateAttributes",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Warehouse",
    "typeScriptTag": "warehouse",
    "description": "Patch attributes for a model instance and persist it into the data source.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Warehouse id",
        "example": "ID"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "default",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "organizationId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "deletedAt",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "_isDeleted",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "deletedId",
        "schema": "string",
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
        "name": "updatedAt",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "custom",
        "schema": "object",
        "required": false,
        "description": "",
        "default": {}
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
    "url": "/v1/Warehouses/{id}",
    "method": "replaceAttributesById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Warehouse",
    "typeScriptTag": "warehouse",
    "description": "Replace attributes for a model instance and persist it into the data source.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Model id",
        "example": "ID"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "default",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "organizationId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "deletedAt",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "_isDeleted",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "deletedId",
        "schema": "string",
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
        "name": "updatedAt",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "custom",
        "schema": "object",
        "required": false,
        "description": "",
        "default": {}
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
    "url": "/v1/Warehouses/{id}/replace",
    "method": "replaceAttributesById",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Warehouse",
    "typeScriptTag": "warehouse",
    "description": "Replace attributes for a model instance and persist it into the data source.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Model id",
        "example": "ID"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "default",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "organizationId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "deletedAt",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "_isDeleted",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "deletedId",
        "schema": "string",
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
        "name": "updatedAt",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "custom",
        "schema": "object",
        "required": false,
        "description": "",
        "default": {}
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
    "url": "/v1/Webhooks/{id}",
    "method": "deleteById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Webhook",
    "typeScriptTag": "webhook",
    "description": "Delete a model instance by {{id}} from the data source.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Model id",
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
    "url": "/v1/Webhooks/{id}",
    "method": "findById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Webhook",
    "typeScriptTag": "webhook",
    "description": "Find a model instance by {{id}} from the data source.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Model id",
        "example": "ID"
      },
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "Filter defining fields and include - must be a JSON-encoded string ({\"something\":\"value\"})"
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
    "url": "/v1/Webhooks/{id}",
    "method": "updateAttributesById",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Webhook",
    "typeScriptTag": "webhook",
    "description": "Patch attributes for a model instance and persist it into the data source.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Webhook id",
        "example": "ID"
      },
      {
        "name": "events",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "url",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "URL"
      },
      {
        "name": "enabled",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": true
      },
      {
        "name": "id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "organizationId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "deletedAt",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "_isDeleted",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "deletedId",
        "schema": "string",
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
        "name": "updatedAt",
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
    "url": "/v1/Webhooks/{id}",
    "method": "updateAttributesById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Webhook",
    "typeScriptTag": "webhook",
    "description": "Replace attributes for a model instance and persist it into the data source.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Model id",
        "example": "ID"
      },
      {
        "name": "events",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "url",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "URL"
      },
      {
        "name": "enabled",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": true
      },
      {
        "name": "id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "organizationId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "deletedAt",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "_isDeleted",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "deletedId",
        "schema": "string",
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
        "name": "updatedAt",
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
    "url": "/v1/Webhooks/{id}/replace",
    "method": "replaceAttributesById",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Webhook",
    "typeScriptTag": "webhook",
    "description": "Replace attributes for a model instance and persist it into the data source.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Model id",
        "example": "ID"
      },
      {
        "name": "events",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "url",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "URL"
      },
      {
        "name": "enabled",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": true
      },
      {
        "name": "id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "organizationId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "deletedAt",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "_isDeleted",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "deletedId",
        "schema": "string",
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
        "name": "updatedAt",
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
    "url": "/v1/Typless/webhook",
    "method": "createWebhook",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Typless",
    "typeScriptTag": "typless",
    "description": "",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "Request was successful"
      }
    ]
  },
  {
    "url": "/v1/Orders/{id}",
    "method": "findById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Order",
    "typeScriptTag": "order",
    "description": "Find a model instance by {{id}} from the data source.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Model id",
        "example": "ID"
      },
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "Filter defining fields and include - must be a JSON-encoded string ({\"something\":\"value\"})"
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
    "url": "/v1/Orders/{id}/documents/create",
    "method": "createDocument",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Order",
    "typeScriptTag": "order",
    "description": "",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Order id",
        "example": "ID"
      },
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "Type of document to create",
        "example": "TYPE"
      },
      {
        "name": "send",
        "schema": "boolean",
        "required": false,
        "description": "Force set if document should be sent, if not provided integration setting is used."
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
    "url": "/v1/Magento1/{id}",
    "method": "deleteById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Magento1",
    "typeScriptTag": "magento1",
    "description": "Delete a model instance by {{id}} from the data source.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Model id",
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
    "url": "/v1/Magento1/{id}",
    "method": "updateAttributesById",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Magento1",
    "typeScriptTag": "magento1",
    "description": "Patch attributes for a model instance and persist it into the data source.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Magento1 id",
        "example": "ID"
      },
      {
        "name": "host",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "apiUser",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "apiKey",
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
        "required": true,
        "description": "",
        "example": true,
        "default": true
      },
      {
        "name": "locale",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "sendInvoiceAutomatically",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true,
        "default": true
      },
      {
        "name": "sendEstimateAutomatically",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true,
        "default": true
      },
      {
        "name": "issueInvoiceForBankPayment",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "issueInvoiceOnComplete",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "businessPremiseId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "electronicDeviceId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "organizationId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "unitId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "warehouseId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "accountId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "custom",
        "schema": "object",
        "required": false,
        "description": "",
        "default": {}
      },
      {
        "name": "deletedAt",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "_isDeleted",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "deletedId",
        "schema": "string",
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
        "name": "updatedAt",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "updateItemInventory",
        "schema": "boolean",
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
    "url": "/v1/Magento1/{id}/order",
    "method": "createOrder",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Magento1",
    "typeScriptTag": "magento1",
    "description": "",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Magento1 id",
        "example": "ID"
      },
      {
        "name": "host",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "apiUser",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "apiKey",
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
        "required": true,
        "description": "",
        "example": true,
        "default": true
      },
      {
        "name": "locale",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "sendInvoiceAutomatically",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true,
        "default": true
      },
      {
        "name": "sendEstimateAutomatically",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true,
        "default": true
      },
      {
        "name": "issueInvoiceForBankPayment",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "issueInvoiceOnComplete",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "businessPremiseId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "electronicDeviceId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "organizationId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "unitId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "warehouseId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "accountId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "custom",
        "schema": "object",
        "required": false,
        "description": "",
        "default": {}
      },
      {
        "name": "deletedAt",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "_isDeleted",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "deletedId",
        "schema": "string",
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
        "name": "updatedAt",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "updateItemInventory",
        "schema": "boolean",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Request was successful"
      }
    ]
  },
  {
    "url": "/v1/Magento1/{id}/import",
    "method": "importIntegrationData",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Magento1",
    "typeScriptTag": "magento1",
    "description": "Import integration data in excel format",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Magento1 id",
        "example": "ID"
      },
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TYPE"
      },
      {
        "name": "importOptions",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Operation status"
      }
    ]
  },
  {
    "url": "/v1/Woocommerce/{id}",
    "method": "deleteById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Woocommerce",
    "typeScriptTag": "woocommerce",
    "description": "Delete a model instance by {{id}} from the data source.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Model id",
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
    "url": "/v1/Woocommerce/{id}",
    "method": "updateAttributesById",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Woocommerce",
    "typeScriptTag": "woocommerce",
    "description": "Patch attributes for a model instance and persist it into the data source.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Woocommerce id",
        "example": "ID"
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
        "required": true,
        "description": "",
        "example": true,
        "default": true
      },
      {
        "name": "locale",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "sendInvoiceAutomatically",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true,
        "default": true
      },
      {
        "name": "sendEstimateAutomatically",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true,
        "default": true
      },
      {
        "name": "issueInvoiceForBankPayment",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "issueInvoiceOnComplete",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "businessPremiseId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "electronicDeviceId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "organizationId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "unitId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "warehouseId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "accountId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "custom",
        "schema": "object",
        "required": false,
        "description": "",
        "default": {}
      },
      {
        "name": "deletedAt",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "_isDeleted",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "deletedId",
        "schema": "string",
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
        "name": "updatedAt",
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
    "url": "/v1/Woocommerce/{id}/order",
    "method": "createOrderById",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Woocommerce",
    "typeScriptTag": "woocommerce",
    "description": "",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Woocommerce id",
        "example": "ID"
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
        "required": true,
        "description": "",
        "example": true,
        "default": true
      },
      {
        "name": "locale",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "sendInvoiceAutomatically",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true,
        "default": true
      },
      {
        "name": "sendEstimateAutomatically",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true,
        "default": true
      },
      {
        "name": "issueInvoiceForBankPayment",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "issueInvoiceOnComplete",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "businessPremiseId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "electronicDeviceId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "organizationId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "unitId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "warehouseId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "accountId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "custom",
        "schema": "object",
        "required": false,
        "description": "",
        "default": {}
      },
      {
        "name": "deletedAt",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "_isDeleted",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "deletedId",
        "schema": "string",
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
        "name": "updatedAt",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Request was successful"
      }
    ]
  },
  {
    "url": "/v1/Woocommerce/{id}/import",
    "method": "importIntegrationData",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Woocommerce",
    "typeScriptTag": "woocommerce",
    "description": "Import integration data in excel format",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Woocommerce id",
        "example": "ID"
      },
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TYPE"
      },
      {
        "name": "importOptions",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Operation status"
      }
    ]
  },
  {
    "url": "/v1/CustomIntegrations/{id}",
    "method": "deleteById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "CustomIntegration",
    "typeScriptTag": "customIntegration",
    "description": "Delete a model instance by {{id}} from the data source.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Model id",
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
    "url": "/v1/CustomIntegrations/{id}",
    "method": "patchAttributes",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "CustomIntegration",
    "typeScriptTag": "customIntegration",
    "description": "Patch attributes for a model instance and persist it into the data source.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "CustomIntegration id",
        "example": "ID"
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
        "required": true,
        "description": "",
        "example": true,
        "default": true
      },
      {
        "name": "locale",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "sendInvoiceAutomatically",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true,
        "default": true
      },
      {
        "name": "sendEstimateAutomatically",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true,
        "default": true
      },
      {
        "name": "issueInvoiceForBankPayment",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "issueInvoiceOnComplete",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "businessPremiseId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "electronicDeviceId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "organizationId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "unitId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "warehouseId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "accountId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "custom",
        "schema": "object",
        "required": false,
        "description": "",
        "default": {}
      },
      {
        "name": "deletedAt",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "_isDeleted",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "deletedId",
        "schema": "string",
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
        "name": "updatedAt",
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
    "url": "/v1/CustomIntegrations/{id}/order",
    "method": "createOrder",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "CustomIntegration",
    "typeScriptTag": "customIntegration",
    "description": "",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "CustomIntegration id",
        "example": "ID"
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
        "required": true,
        "description": "",
        "example": true,
        "default": true
      },
      {
        "name": "locale",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "sendInvoiceAutomatically",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true,
        "default": true
      },
      {
        "name": "sendEstimateAutomatically",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true,
        "default": true
      },
      {
        "name": "issueInvoiceForBankPayment",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "issueInvoiceOnComplete",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "businessPremiseId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "electronicDeviceId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "organizationId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "unitId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "warehouseId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "accountId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "custom",
        "schema": "object",
        "required": false,
        "description": "",
        "default": {}
      },
      {
        "name": "deletedAt",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "_isDeleted",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "deletedId",
        "schema": "string",
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
        "name": "updatedAt",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Request was successful"
      }
    ]
  },
  {
    "url": "/v1/CustomIntegrations/{id}/import",
    "method": "importExcelData",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "CustomIntegration",
    "typeScriptTag": "customIntegration",
    "description": "Import integration data in excel format",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "CustomIntegration id",
        "example": "ID"
      },
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TYPE"
      },
      {
        "name": "importOptions",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Operation status"
      }
    ]
  },
  {
    "url": "/v1/Thrivecart/{id}",
    "method": "deleteById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Thrivecart",
    "typeScriptTag": "thrivecart",
    "description": "Delete a model instance by {{id}} from the data source.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Model id",
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
    "url": "/v1/Thrivecart/{id}",
    "method": "updateAttributesById",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Thrivecart",
    "typeScriptTag": "thrivecart",
    "description": "Patch attributes for a model instance and persist it into the data source.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Thrivecart id",
        "example": "ID"
      },
      {
        "name": "addTax",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "addedTaxRateClassification",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "ignoreTestOrders",
        "schema": "boolean",
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
        "required": true,
        "description": "",
        "example": true,
        "default": true
      },
      {
        "name": "locale",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "sendInvoiceAutomatically",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true,
        "default": true
      },
      {
        "name": "sendEstimateAutomatically",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true,
        "default": true
      },
      {
        "name": "issueInvoiceForBankPayment",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "issueInvoiceOnComplete",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "businessPremiseId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "electronicDeviceId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "organizationId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "unitId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "warehouseId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "accountId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "custom",
        "schema": "object",
        "required": false,
        "description": "",
        "default": {}
      },
      {
        "name": "deletedAt",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "_isDeleted",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "deletedId",
        "schema": "string",
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
        "name": "updatedAt",
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
    "url": "/v1/Thrivecart/{id}/order",
    "method": "headOrderById",
    "httpMethod": HttpMethodsEnum.HEAD,
    "tag": "Thrivecart",
    "typeScriptTag": "thrivecart",
    "description": "",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Thrivecart id",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Request was successful"
      }
    ]
  },
  {
    "url": "/v1/Thrivecart/{id}/order",
    "method": "createOrder",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Thrivecart",
    "typeScriptTag": "thrivecart",
    "description": "",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Thrivecart id",
        "example": "ID"
      },
      {
        "name": "addTax",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "addedTaxRateClassification",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "ignoreTestOrders",
        "schema": "boolean",
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
        "required": true,
        "description": "",
        "example": true,
        "default": true
      },
      {
        "name": "locale",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "sendInvoiceAutomatically",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true,
        "default": true
      },
      {
        "name": "sendEstimateAutomatically",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true,
        "default": true
      },
      {
        "name": "issueInvoiceForBankPayment",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "issueInvoiceOnComplete",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "businessPremiseId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "electronicDeviceId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "organizationId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "unitId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "warehouseId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "accountId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "custom",
        "schema": "object",
        "required": false,
        "description": "",
        "default": {}
      },
      {
        "name": "deletedAt",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "_isDeleted",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "deletedId",
        "schema": "string",
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
        "name": "updatedAt",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Request was successful"
      }
    ]
  },
  {
    "url": "/v1/Thrivecart/{id}/import",
    "method": "importIntegrationData",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Thrivecart",
    "typeScriptTag": "thrivecart",
    "description": "Import integration data in excel format",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Thrivecart id",
        "example": "ID"
      },
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TYPE"
      },
      {
        "name": "importOptions",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Operation status"
      }
    ]
  },
  {
    "url": "/v1/Bokun/{id}",
    "method": "deleteById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Bokun",
    "typeScriptTag": "bokun",
    "description": "Delete a model instance by {{id}} from the data source.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Model id",
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
    "url": "/v1/Bokun/{id}",
    "method": "patchAttributesById",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Bokun",
    "typeScriptTag": "bokun",
    "description": "Patch attributes for a model instance and persist it into the data source.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Bokun id",
        "example": "ID"
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
        "required": true,
        "description": "",
        "example": true,
        "default": true
      },
      {
        "name": "locale",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "sendInvoiceAutomatically",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true,
        "default": true
      },
      {
        "name": "sendEstimateAutomatically",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true,
        "default": true
      },
      {
        "name": "issueInvoiceForBankPayment",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "issueInvoiceOnComplete",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "businessPremiseId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "electronicDeviceId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "organizationId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "unitId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "warehouseId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "accountId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "custom",
        "schema": "object",
        "required": false,
        "description": "",
        "default": {}
      },
      {
        "name": "deletedAt",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "_isDeleted",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "deletedId",
        "schema": "string",
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
        "name": "updatedAt",
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
    "url": "/v1/Bokun/{id}/order",
    "method": "createOrder",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Bokun",
    "typeScriptTag": "bokun",
    "description": "",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Bokun id",
        "example": "ID"
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
        "required": true,
        "description": "",
        "example": true,
        "default": true
      },
      {
        "name": "locale",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "sendInvoiceAutomatically",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true,
        "default": true
      },
      {
        "name": "sendEstimateAutomatically",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true,
        "default": true
      },
      {
        "name": "issueInvoiceForBankPayment",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "issueInvoiceOnComplete",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "businessPremiseId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "electronicDeviceId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "organizationId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "unitId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "warehouseId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "accountId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "custom",
        "schema": "object",
        "required": false,
        "description": "",
        "default": {}
      },
      {
        "name": "deletedAt",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "_isDeleted",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "deletedId",
        "schema": "string",
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
        "name": "updatedAt",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Request was successful"
      }
    ]
  },
  {
    "url": "/v1/Bokun/{id}/import",
    "method": "importIntegrationData",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Bokun",
    "typeScriptTag": "bokun",
    "description": "Import integration data in excel format",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Bokun id",
        "example": "ID"
      },
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TYPE"
      },
      {
        "name": "importOptions",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Operation status"
      }
    ]
  },
  {
    "url": "/v1/Shopamine/{id}",
    "method": "deleteModelById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Shopamine",
    "typeScriptTag": "shopamine",
    "description": "Delete a model instance by {{id}} from the data source.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Model id",
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
    "url": "/v1/Shopamine/{id}",
    "method": "updateAttributesById",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Shopamine",
    "typeScriptTag": "shopamine",
    "description": "Patch attributes for a model instance and persist it into the data source.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Shopamine id",
        "example": "ID"
      },
      {
        "name": "shop",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "apiKey",
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
        "required": true,
        "description": "",
        "example": true,
        "default": true
      },
      {
        "name": "locale",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "sendInvoiceAutomatically",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true,
        "default": true
      },
      {
        "name": "sendEstimateAutomatically",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true,
        "default": true
      },
      {
        "name": "issueInvoiceForBankPayment",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "issueInvoiceOnComplete",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "businessPremiseId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "electronicDeviceId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "organizationId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "unitId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "warehouseId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "accountId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "custom",
        "schema": "object",
        "required": false,
        "description": "",
        "default": {}
      },
      {
        "name": "deletedAt",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "_isDeleted",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "deletedId",
        "schema": "string",
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
        "name": "updatedAt",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "updateItemInventory",
        "schema": "boolean",
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
    "url": "/v1/Shopamine/{id}/order",
    "method": "createOrder",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Shopamine",
    "typeScriptTag": "shopamine",
    "description": "",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Shopamine id",
        "example": "ID"
      },
      {
        "name": "shop",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "apiKey",
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
        "required": true,
        "description": "",
        "example": true,
        "default": true
      },
      {
        "name": "locale",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "sendInvoiceAutomatically",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true,
        "default": true
      },
      {
        "name": "sendEstimateAutomatically",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true,
        "default": true
      },
      {
        "name": "issueInvoiceForBankPayment",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "issueInvoiceOnComplete",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "businessPremiseId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "electronicDeviceId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "organizationId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "unitId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "warehouseId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "accountId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "custom",
        "schema": "object",
        "required": false,
        "description": "",
        "default": {}
      },
      {
        "name": "deletedAt",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "_isDeleted",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "deletedId",
        "schema": "string",
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
        "name": "updatedAt",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "updateItemInventory",
        "schema": "boolean",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Request was successful"
      }
    ]
  },
  {
    "url": "/v1/Shopamine/{id}/import",
    "method": "importIntegrationData",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Shopamine",
    "typeScriptTag": "shopamine",
    "description": "Import integration data in excel format",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Shopamine id",
        "example": "ID"
      },
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TYPE"
      },
      {
        "name": "importOptions",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Operation status"
      }
    ]
  },
  {
    "url": "/v1/Sendgrid/webhook",
    "method": "webhookNotification",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Sendgrid",
    "typeScriptTag": "sendgrid",
    "description": "",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/Logs/cron/clear",
    "method": "clearCronLogs",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Log",
    "typeScriptTag": "log",
    "description": "",
    "parameters": [
      {
        "name": "date",
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
    "url": "/v1/AWSSES/webhook",
    "method": "createWebhook",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "AWSSES",
    "typeScriptTag": "awsses",
    "description": "",
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
      apiTitle="space-invoices-api"
      apiBaseUrl="https://api.spaceinvoices.com"
      apiVersion="2.0.0"
      endpoints={265}
      sdkMethods={358}
      schemas={578}
      parameters={2532}
      difficulty="Very Hard"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/space-invoices/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/space-invoices/openapi.yaml"
      developerDocumentation="spaceinvoices.com/docs/Introduction"
    />
  );
}
  