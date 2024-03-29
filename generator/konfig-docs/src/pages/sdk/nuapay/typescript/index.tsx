import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function NuapayTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="nuapay-typescript-sdk"
      metaDescription={`Nuapay is a pioneer of Open Banking and the industry's leading Account-2-Account payment environment. We securely process over €42bn every year as an outsourcing provider to many of the world's leading Banks, PSPs and Corporates – we have worked tirelessly to reinvent what's possible from a modern banking and payment solution. Today, we offer partners a fully comprehensive, integrated payment solution that removes all traditional banking inefficiencies and unnecessary costs, saving time, money and resources at every turn. This is banking as it should be.

Our Vision

For over 20 years, Nuapay has been at the forefront of Account-to-Account payments and the Open Banking movement. Through our market-leading payments and accounts platform, partner ecosystem and focus on quality we've helped thousands of clients (banks, payment providers, software platforms and businesses) deliver innovative, profitable and seamless payment services. Nuapay's flexible, secure approach will cover all your needs, underpinned by our 20 year heritage.

Our Mission

Here at Nuapay we know that perfecting the payments experience brings transformational benefits to customers and the businesses who serve them. We believe Account-to-Account payments and Open Banking can achieve that better than any other option – and are, together, the future of payments.

www.nuapay.com / @NUAPAY

Get in touch with us here: www.nuapay.com/contact/`}
      company="Nuapay"
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/nuapay/logo.png"
      companyKebabCase="nuapay"
      clientNameCamelCase="nuapay"
      homepage="nuapay.com/"
      lastUpdated={new Date("2024-03-29T17:53:05.812Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/nuapay/favicon.png"
      // Missing contactUrl
      contactEmail="api.support@nuapay.com"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/nuapay/imagePreview.png"
      GettingStarted={GettingStarted}
      FirstRequest={FirstRequest}
      categories={["finance","banking","payments","fintech","financial_technology","b_2_b_payments","payment_services","financial_services"]}
      methods={[
  {
    "url": "/bankfamilies",
    "method": "viewBankFamilies",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Bank Service",
    "typeScriptTag": "bankService",
    "description": "View Bank Families",
    "parameters": [
      {
        "name": "pagenumber",
        "schema": "integer",
        "required": false,
        "description": "Page number",
        "default": 1
      },
      {
        "name": "pagesize",
        "schema": "integer",
        "required": false,
        "description": "Page size",
        "default": 20
      },
      {
        "name": "supportedcurrencies",
        "schema": "array",
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
        "statusCode": "405",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/bankfamilies/{bankfamilyId}",
    "method": "getBankFamily",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Bank Service",
    "typeScriptTag": "bankService",
    "description": "View Bank Family",
    "parameters": [
      {
        "name": "bankfamilyId",
        "schema": "string",
        "required": true,
        "description": "Bank Family id returned by Get Bank Families endpoint.",
        "example": "BANKFAMILYID"
      }
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
        "statusCode": "405",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/banks",
    "method": "getSupportedBanks",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Bank Service",
    "typeScriptTag": "bankService",
    "description": "Retrieve Banks",
    "parameters": [
      {
        "name": "country",
        "schema": "array",
        "required": false,
        "description": "CountryCode - ISO country code - indicates where bank is domiciled (ISO 3166 Alpha-2)"
      },
      {
        "name": "debtoraccountrequired",
        "schema": "boolean",
        "required": false,
        "description": "Allows to filter the banks that requires debtor account to be provided when initiating payment."
      },
      {
        "name": "pagenumber",
        "schema": "integer",
        "required": false,
        "description": "Page number",
        "default": 1
      },
      {
        "name": "pagesize",
        "schema": "integer",
        "required": false,
        "description": "Page size",
        "default": 20
      },
      {
        "name": "supportedcurrencies",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "bankfamilyid",
        "schema": "string",
        "required": false,
        "description": "Allows filtering by Bank Family via the Bank Family Id."
      },
      {
        "name": "excludebankfamily",
        "schema": "boolean",
        "required": false,
        "description": "Allows filtering by Banks without an associated Bank Family."
      },
      {
        "name": "services",
        "schema": "array",
        "required": false,
        "description": "Filter the bank list by service provided returns both AISPs and PISPs, 'AISP' returns only AISPs and 'PISP' returns only PISPs. When not provided returns all banks regardless of service."
      },
      {
        "name": "sepainstantreachability",
        "schema": "boolean",
        "required": false,
        "description": "Filter the bank list by payment method. When not provided or false, returns the full list of banks. When true, the only banks that supports SEPA Instant Payments are returned."
      }
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
        "statusCode": "405",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/payments",
    "method": "listPayments",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "PISP Service",
    "typeScriptTag": "pispService",
    "description": "List payments",
    "parameters": [
      {
        "name": "fromdatetime",
        "schema": "string",
        "required": false,
        "description": "Submission from date time in the format, 'yyyy-MM-dd'T'HH:mm:ss', maximum date from/to date range is 30 days. If neither from/to date is provided returns results for the last 30 days."
      },
      {
        "name": "todatetime",
        "schema": "string",
        "required": false,
        "description": "Submission to date time in the format, 'yyyy-MM-dd'T'HH:mm:ss', maximum date from/to date range is 30 days. If neither from/to date is provided returns results for the last 30 days."
      },
      {
        "name": "fromamount",
        "schema": "number",
        "required": false,
        "description": "When provided only payments with amount equal or higher than provided amount will be returned"
      },
      {
        "name": "toamount",
        "schema": "number",
        "required": false,
        "description": "When provided only payments with amount equal or smaller than  provided amount will be returned"
      },
      {
        "name": "userinterfacepaymentid",
        "schema": "string",
        "required": false,
        "description": "This is used in UI flows to get payment details. Applicable for payments created with REDIRECT, CHECKOUT integration type."
      },
      {
        "name": "paymentstatus",
        "schema": "array",
        "required": false,
        "description": "A number of statuses can be queried within a single request by providing multiple occurences of the parameter. If not provided all statuses will be returned"
      },
      {
        "name": "payername",
        "schema": "string",
        "required": false,
        "description": "Payer name. This parameter supports searching with wildcards"
      },
      {
        "name": "payeremail",
        "schema": "string",
        "required": false,
        "description": "Payer e-mail. This parameter supports searching with wildcards"
      },
      {
        "name": "reference",
        "schema": "string",
        "required": false,
        "description": "Payment reference will attempt to match endToEndIdentification, remittanceInformation.reference and remittanceInformation.unstructured. Will return all matches and partial matches if using wildcard searches. This parameter supports searching with wildcards"
      },
      {
        "name": "currency",
        "schema": "string",
        "required": false,
        "description": "Currency"
      },
      {
        "name": "pagenumber",
        "schema": "integer",
        "required": false,
        "description": "Page number",
        "default": 1
      },
      {
        "name": "pagesize",
        "schema": "integer",
        "required": false,
        "description": "Page size",
        "default": 20
      }
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
        "statusCode": "405",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/payments",
    "method": "makePayment",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "PISP Service",
    "typeScriptTag": "pispService",
    "description": "Create Payment",
    "parameters": [
      {
        "name": "idempotencyKey",
        "schema": "string",
        "required": false,
        "description": "Every request will be processed only once per Idempotency-Key.  The Idempotency Key will be valid for 24 hours."
      },
      {
        "name": "psuId",
        "schema": "string",
        "required": false,
        "description": "Client ID of the PSU in the ASPSP client interface."
      },
      {
        "name": "customerIpAddress",
        "schema": "string",
        "required": false,
        "description": "The PSU's IP address if the PSU is currently logged in with the TPP."
      },
      {
        "name": "amount",
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
        "name": "countryCode",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "COUNTRYCODE"
      },
      {
        "name": "language",
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
        "name": "orderDetails",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "integrationType",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "merchantPostAuthUrl",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "bankId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "endToEndIdentification",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "paymentTimeout",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "remittanceInformation",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "requestedExecutionDate",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "debtorAccount",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "debtorAddress",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "creditorAccount",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "creditorAddress",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "paymentScheme",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "risk",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "merchantDisplayName",
        "schema": "string",
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
        "statusCode": "405",
        "description": ""
      },
      {
        "statusCode": "415",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/payments/callback",
    "method": "forwardPaymentCallback",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "PISP Service",
    "typeScriptTag": "pispService",
    "description": "Forward Payment Callback",
    "parameters": [
      {
        "name": "idempotencyKey",
        "schema": "string",
        "required": false,
        "description": "Every request will be processed only once per Idempotency-Key.  The Idempotency Key will be valid for 24 hours."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Ok"
      },
      {
        "statusCode": "202",
        "description": "ACCEPTED"
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
        "statusCode": "405",
        "description": ""
      },
      {
        "statusCode": "415",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/payments/{paymentId}",
    "method": "getPayment",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "PISP Service",
    "typeScriptTag": "pispService",
    "description": "Retrieve Payment",
    "parameters": [
      {
        "name": "paymentId",
        "schema": "string",
        "required": true,
        "description": "The ID of the payment for which you want to retrieve details",
        "example": "PAYMENTID"
      }
    ],
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
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "405",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/payments/{paymentId}",
    "method": "retryPaymentPatch",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "PISP Service",
    "typeScriptTag": "pispService",
    "description": "Retry Payment",
    "parameters": [
      {
        "name": "paymentId",
        "schema": "string",
        "required": true,
        "description": "The ID of the payment that you want to retry",
        "example": "PAYMENTID"
      },
      {
        "name": "customerIpAddress",
        "schema": "string",
        "required": false,
        "description": "The PSU's IP address if the PSU is currently logged in with the TPP."
      },
      {
        "name": "bankId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "BANKID"
      },
      {
        "name": "psuId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "debtorAccount",
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
        "statusCode": "405",
        "description": ""
      },
      {
        "statusCode": "415",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/payments/{paymentId}/history",
    "method": "getPaymentHistory",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "PISP Service",
    "typeScriptTag": "pispService",
    "description": "Retrieve Payment  History",
    "parameters": [
      {
        "name": "paymentId",
        "schema": "string",
        "required": true,
        "description": "The ID of the payment for which you want to retrieve audit trail history",
        "example": "PAYMENTID"
      },
      {
        "name": "pagenumber",
        "schema": "integer",
        "required": false,
        "description": "Page number",
        "default": 1
      },
      {
        "name": "pagesize",
        "schema": "integer",
        "required": false,
        "description": "Page size",
        "default": 20
      }
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
        "statusCode": "405",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/payments/{paymentId}/refunds",
    "method": "getPaymentRefunds",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "PISP Service",
    "typeScriptTag": "pispService",
    "description": "List Payment Refunds",
    "parameters": [
      {
        "name": "paymentId",
        "schema": "string",
        "required": true,
        "description": "The ID of the payment for which you want to list refunds",
        "example": "PAYMENTID"
      },
      {
        "name": "fromcreationdatetime",
        "schema": "string",
        "required": false,
        "description": "Submission from date time in the format, 'yyyy-MM-dd'T'HH:mm:ss', maximum create date from/to create date range is 30 days. If neither from/to date is provided returns results for the last 30 days."
      },
      {
        "name": "tocreationdatetime",
        "schema": "string",
        "required": false,
        "description": "Submission to date time in the format, 'yyyy-MM-dd'T'HH:mm:ss', maximum create date from/to create date range is 30 days. If neither from/to date is provided returns results for the last 30 days."
      },
      {
        "name": "fromrefundamount",
        "schema": "number",
        "required": false,
        "description": "When provided only payments with amount equal or higher than provided amount will be returned"
      },
      {
        "name": "torefundamount",
        "schema": "number",
        "required": false,
        "description": "When provided only payments with amount equal or smaller than  provided amount will be returned"
      },
      {
        "name": "refundstatus",
        "schema": "array",
        "required": false,
        "description": "A number of statuses can be queried within a single request by providing multiple occurences of the parameter. If not provided all statuses will be returned"
      },
      {
        "name": "pagenumber",
        "schema": "integer",
        "required": false,
        "description": "Page number",
        "default": 1
      },
      {
        "name": "pagesize",
        "schema": "integer",
        "required": false,
        "description": "Page size",
        "default": 20
      }
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
        "statusCode": "405",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/payments/{paymentId}/refunds",
    "method": "refundPayment",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "PISP Service",
    "typeScriptTag": "pispService",
    "description": "Refund Payment",
    "parameters": [
      {
        "name": "paymentId",
        "schema": "string",
        "required": true,
        "description": "The ID of the payment which you want to refund",
        "example": "PAYMENTID"
      },
      {
        "name": "idempotencyKey",
        "schema": "string",
        "required": false,
        "description": "Every request will be processed only once per x-idempotency-key.  The Idempotency Key will be valid for 24 hours."
      },
      {
        "name": "refundAmount",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "compensationAmount",
        "schema": "number",
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
        "name": "endToEndIdentification",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "remittanceInformation",
        "schema": "object",
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
        "statusCode": "405",
        "description": ""
      },
      {
        "statusCode": "415",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/payments/{paymentId}/refunds/{refundId}",
    "method": "getRefund",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "PISP Service",
    "typeScriptTag": "pispService",
    "description": "Retrieve Refund",
    "parameters": [
      {
        "name": "paymentId",
        "schema": "string",
        "required": true,
        "description": "The ID of the payment for which you want to retrieve details",
        "example": "PAYMENTID"
      },
      {
        "name": "refundId",
        "schema": "string",
        "required": true,
        "description": "The ID of the refund for which you want to retrieve details",
        "example": "REFUNDID"
      }
    ],
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
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "405",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  }
]
    }
      language="TypeScript"
      apiTitle="Nuapay TPP API Specification"
      apiBaseUrl="https://api.nuapay.com/tpp"
      apiVersion="1.16.1"
      endpoints={9}
      sdkMethods={12}
      schemas={31}
      parameters={75}
      difficulty="Easy"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/nuapay/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/nuapay/openapi.yaml"
      developerDocumentation="developer.nuapay.com/"
    />
  );
}
  