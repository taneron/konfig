import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function JikoTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="jiko-typescript-sdk"
      metaDescription={`Jiko makes Treasuries bankable. We're a new type of bank that innovates US Treasury bills to unlock yield, safety, and scale.

Backed by Upfront Ventures, Airbus Ventures, and others; headquartered in SF with offices in NYC and Reykjavík.`}
      company="Jiko"
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/jiko/logo.png"
      companyKebabCase="jiko"
      clientNameCamelCase="jiko"
      homepage="jiko.io"
      lastUpdated={new Date("2024-03-29T18:10:17.636Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/jiko/favicon.png"
      // Missing contactUrl
      // Missing contactEmail
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/jiko/imagePreview.jpg"
      GettingStarted={GettingStarted}
      FirstRequest={FirstRequest}
      categories={["finance","banking","fintech","financial_services"]}
      methods={[
  {
    "url": "/health",
    "method": "statusCheck",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Health",
    "typeScriptTag": "health",
    "description": "Get Health Check",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/customers/{customer_id}/jiko-accounts",
    "method": "listCustomerAccounts",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Accounts",
    "typeScriptTag": "accounts",
    "description": "List Customer Accounts",
    "parameters": [
      {
        "name": "customerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CUSTOMER_ID"
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "",
        "default": 0
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "",
        "default": 100
      },
      {
        "name": "xJikoIdempotency",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "X-JIKO-IDEMPOTENCY"
      },
      {
        "name": "xJikoSignature",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "X-JIKO-SIGNATURE"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Generic models are only supported in pydantic for python 3.7+, so until then\nitems will be of type Any. As such, this class needs to be subclassed\nand its item field overridden in it using the proper type."
      },
      {
        "statusCode": "404",
        "description": "Not found"
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/jiko-accounts/{account_id}",
    "method": "getSpecificAccount",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Accounts",
    "typeScriptTag": "accounts",
    "description": "Get Customer Account",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACCOUNT_ID"
      },
      {
        "name": "xJikoIdempotency",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "X-JIKO-IDEMPOTENCY"
      },
      {
        "name": "xJikoSignature",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "X-JIKO-SIGNATURE"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Not found"
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/customers/{customer_id}/transactions",
    "method": "listCustomerTransactions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Transactions",
    "typeScriptTag": "transactions",
    "description": "List Customer Transactions",
    "parameters": [
      {
        "name": "customerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CUSTOMER_ID"
      },
      {
        "name": "order",
        "schema": "string",
        "required": false,
        "description": "Ordered by the transaction timestamp, descending by default."
      },
      {
        "name": "account[]",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "filter[card]",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "filter[portal]",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "filter[types]",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "timestampFrom",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "timestampTo",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "cursor",
        "schema": "string",
        "required": false,
        "description": "",
        "default": ""
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "",
        "default": 30
      },
      {
        "name": "xJikoIdempotency",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "X-JIKO-IDEMPOTENCY"
      },
      {
        "name": "xJikoSignature",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "X-JIKO-SIGNATURE"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Base class for cursor_list responses from the Partner API"
      },
      {
        "statusCode": "404",
        "description": "Not found"
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/jiko-accounts/{account_id}/transactions",
    "method": "listForAccount",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Transactions",
    "typeScriptTag": "transactions",
    "description": "List Account Transactions",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACCOUNT_ID"
      },
      {
        "name": "order",
        "schema": "string",
        "required": false,
        "description": "Ordered by the transaction timestamp, descending by default."
      },
      {
        "name": "filter[card]",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "filter[portal]",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "filter[types]",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "timestampFrom",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "timestampTo",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "cursor",
        "schema": "string",
        "required": false,
        "description": "",
        "default": ""
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "",
        "default": 30
      },
      {
        "name": "xJikoIdempotency",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "X-JIKO-IDEMPOTENCY"
      },
      {
        "name": "xJikoSignature",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "X-JIKO-SIGNATURE"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Base class for cursor_list responses from the Partner API"
      },
      {
        "statusCode": "404",
        "description": "Not found"
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/jiko-accounts/{account_id}/transactions/{transaction_id}",
    "method": "getSpecificTransaction",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Transactions",
    "typeScriptTag": "transactions",
    "description": "Get Account Transaction",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACCOUNT_ID"
      },
      {
        "name": "transactionId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TRANSACTION_ID"
      },
      {
        "name": "xJikoIdempotency",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "X-JIKO-IDEMPOTENCY"
      },
      {
        "name": "xJikoSignature",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "X-JIKO-SIGNATURE"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Not found"
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/customers/{customer_id}/trades",
    "method": "listCustomerTrades",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Trades",
    "typeScriptTag": "trades",
    "description": "List Customer Trades",
    "parameters": [
      {
        "name": "customerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CUSTOMER_ID"
      },
      {
        "name": "account[]",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "tradeDatetimeFrom",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "tradeDatetimeTo",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "cursor",
        "schema": "string",
        "required": false,
        "description": "",
        "default": ""
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "",
        "default": 30
      },
      {
        "name": "xJikoIdempotency",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "X-JIKO-IDEMPOTENCY"
      },
      {
        "name": "xJikoSignature",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "X-JIKO-SIGNATURE"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Base class for cursor_list responses from the Partner API"
      },
      {
        "statusCode": "404",
        "description": "Not found"
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/jiko-accounts/{account_id}/trades",
    "method": "getAccountTransactions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Trades",
    "typeScriptTag": "trades",
    "description": "List Account Trades",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACCOUNT_ID"
      },
      {
        "name": "tradeDatetimeFrom",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "tradeDatetimeTo",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "cursor",
        "schema": "string",
        "required": false,
        "description": "",
        "default": ""
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "",
        "default": 30
      },
      {
        "name": "xJikoIdempotency",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "X-JIKO-IDEMPOTENCY"
      },
      {
        "name": "xJikoSignature",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "X-JIKO-SIGNATURE"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Base class for cursor_list responses from the Partner API"
      },
      {
        "statusCode": "404",
        "description": "Not found"
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/jiko-accounts/{account_id}/trades/{trade_id}/confirmation",
    "method": "getConfirmation",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Trades",
    "typeScriptTag": "trades",
    "description": "Get Trade Confirmation",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACCOUNT_ID"
      },
      {
        "name": "tradeId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TRADE_ID"
      },
      {
        "name": "xJikoIdempotency",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "X-JIKO-IDEMPOTENCY"
      },
      {
        "name": "xJikoSignature",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "X-JIKO-SIGNATURE"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Not found"
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/applications",
    "method": "createApplication",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Individuals",
    "typeScriptTag": "individuals",
    "description": "Create Application",
    "parameters": [
      {
        "name": "xJikoIdempotency",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "X-JIKO-IDEMPOTENCY"
      },
      {
        "name": "xJikoSignature",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "X-JIKO-SIGNATURE"
      },
      {
        "name": "identification_number",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "IDENTIFICATION_NUMBER"
      },
      {
        "name": "name",
        "schema": "object",
        "required": true,
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
        "name": "date_of_birth",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DATE_OF_BIRTH"
      },
      {
        "name": "investment_profile",
        "schema": "undefined",
        "required": true,
        "description": ""
      },
      {
        "name": "agreement_consent",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "originally_onboarded_at",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "identification_type",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "address",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "phone_number",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PHONE_NUMBER"
      },
      {
        "name": "citizenship_country",
        "schema": "string",
        "required": false,
        "description": "",
        "default": "US"
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
    "url": "/api/v1/applications/{application_id}",
    "method": "getApplication",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Individuals",
    "typeScriptTag": "individuals",
    "description": "Get Application",
    "parameters": [
      {
        "name": "applicationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "APPLICATION_ID"
      },
      {
        "name": "xJikoIdempotency",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "X-JIKO-IDEMPOTENCY"
      },
      {
        "name": "xJikoSignature",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "X-JIKO-SIGNATURE"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Not found"
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/applications/{application_id}/apply",
    "method": "initiateKycSubmission",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Individuals",
    "typeScriptTag": "individuals",
    "description": "Apply",
    "parameters": [
      {
        "name": "applicationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "APPLICATION_ID"
      },
      {
        "name": "xJikoIdempotency",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "X-JIKO-IDEMPOTENCY"
      },
      {
        "name": "xJikoSignature",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "X-JIKO-SIGNATURE"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Not found"
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/agreements",
    "method": "getAgreements",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Individuals",
    "typeScriptTag": "individuals",
    "description": "List Agreements",
    "parameters": [
      {
        "name": "xJikoIdempotency",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "X-JIKO-IDEMPOTENCY"
      },
      {
        "name": "xJikoSignature",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "X-JIKO-SIGNATURE"
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
    "url": "/api/v1/business-applications",
    "method": "createApplication",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Businesses",
    "typeScriptTag": "businesses",
    "description": "Create Application",
    "parameters": [
      {
        "name": "xJikoIdempotency",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "X-JIKO-IDEMPOTENCY"
      },
      {
        "name": "xJikoSignature",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "X-JIKO-SIGNATURE"
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "entity_type",
        "schema": "string",
        "description": ""
      },
      {
        "name": "doing_business_as",
        "schema": "string",
        "description": ""
      },
      {
        "name": "identification_number",
        "schema": "object",
        "description": ""
      },
      {
        "name": "address",
        "schema": "object",
        "description": ""
      },
      {
        "name": "website",
        "schema": "string",
        "description": ""
      },
      {
        "name": "contact",
        "schema": "object",
        "description": ""
      },
      {
        "name": "formation_date",
        "schema": "string",
        "description": ""
      },
      {
        "name": "risk_info",
        "schema": "object",
        "description": ""
      },
      {
        "name": "industry",
        "schema": "object",
        "description": ""
      },
      {
        "name": "agreement_consent",
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
    "url": "/api/v1/business-applications/{application_id}",
    "method": "getApplication",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Businesses",
    "typeScriptTag": "businesses",
    "description": "Get Application",
    "parameters": [
      {
        "name": "applicationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "APPLICATION_ID"
      },
      {
        "name": "xJikoIdempotency",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "X-JIKO-IDEMPOTENCY"
      },
      {
        "name": "xJikoSignature",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "X-JIKO-SIGNATURE"
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
    "url": "/api/v1/business-applications/{application_id}",
    "method": "updateApplication",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Businesses",
    "typeScriptTag": "businesses",
    "description": "Update Application",
    "parameters": [
      {
        "name": "applicationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "APPLICATION_ID"
      },
      {
        "name": "xJikoIdempotency",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "X-JIKO-IDEMPOTENCY"
      },
      {
        "name": "xJikoSignature",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "X-JIKO-SIGNATURE"
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "entity_type",
        "schema": "string",
        "description": ""
      },
      {
        "name": "doing_business_as",
        "schema": "string",
        "description": ""
      },
      {
        "name": "identification_number",
        "schema": "object",
        "description": ""
      },
      {
        "name": "address",
        "schema": "object",
        "description": ""
      },
      {
        "name": "website",
        "schema": "string",
        "description": ""
      },
      {
        "name": "contact",
        "schema": "object",
        "description": ""
      },
      {
        "name": "formation_date",
        "schema": "string",
        "description": ""
      },
      {
        "name": "risk_info",
        "schema": "object",
        "description": ""
      },
      {
        "name": "industry",
        "schema": "object",
        "description": ""
      },
      {
        "name": "agreement_consent",
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
    "url": "/api/v1/business-applications/{application_id}/apply",
    "method": "submitApplication",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Businesses",
    "typeScriptTag": "businesses",
    "description": "Apply",
    "parameters": [
      {
        "name": "applicationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "APPLICATION_ID"
      },
      {
        "name": "xJikoIdempotency",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "X-JIKO-IDEMPOTENCY"
      },
      {
        "name": "xJikoSignature",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "X-JIKO-SIGNATURE"
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
    "url": "/api/v1/business-applications/{application_id}/related-party-applications",
    "method": "listRelatedPartyApplications",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Businesses",
    "typeScriptTag": "businesses",
    "description": "List Related Party Application",
    "parameters": [
      {
        "name": "applicationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "APPLICATION_ID"
      },
      {
        "name": "xJikoIdempotency",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "X-JIKO-IDEMPOTENCY"
      },
      {
        "name": "xJikoSignature",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "X-JIKO-SIGNATURE"
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
    "url": "/api/v1/business-applications/{application_id}/related-party-applications",
    "method": "createRelatedPartyApplication",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Businesses",
    "typeScriptTag": "businesses",
    "description": "Create Related Party Application",
    "parameters": [
      {
        "name": "applicationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "APPLICATION_ID"
      },
      {
        "name": "xJikoIdempotency",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "X-JIKO-IDEMPOTENCY"
      },
      {
        "name": "xJikoSignature",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "X-JIKO-SIGNATURE"
      },
      {
        "name": "title",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
        "schema": "object",
        "description": ""
      },
      {
        "name": "address",
        "schema": "object",
        "description": ""
      },
      {
        "name": "date_of_birth",
        "schema": "string",
        "description": ""
      },
      {
        "name": "identification_number",
        "schema": "object",
        "description": ""
      },
      {
        "name": "phone_number",
        "schema": "string",
        "description": ""
      },
      {
        "name": "roles",
        "schema": "array",
        "description": ""
      },
      {
        "name": "ownership_percentage",
        "schema": "string",
        "description": ""
      },
      {
        "name": "citizenship",
        "schema": "string",
        "description": ""
      },
      {
        "name": "email",
        "schema": "string",
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
    "url": "/api/v1/business-applications/{application_id}/related-party-applications/{related_party_application_id}",
    "method": "deleteRelatedPartyApplication",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Businesses",
    "typeScriptTag": "businesses",
    "description": "Delete Related Party Application",
    "parameters": [
      {
        "name": "applicationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "APPLICATION_ID"
      },
      {
        "name": "relatedPartyApplicationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "RELATED_PARTY_APPLICATION_ID"
      },
      {
        "name": "xJikoIdempotency",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "X-JIKO-IDEMPOTENCY"
      },
      {
        "name": "xJikoSignature",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "X-JIKO-SIGNATURE"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Successful Response"
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/business-applications/{application_id}/related-party-applications/{related_party_application_id}",
    "method": "updateRelatedPartyApplication",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Businesses",
    "typeScriptTag": "businesses",
    "description": "Update Related Party Application",
    "parameters": [
      {
        "name": "applicationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "APPLICATION_ID"
      },
      {
        "name": "relatedPartyApplicationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "RELATED_PARTY_APPLICATION_ID"
      },
      {
        "name": "xJikoIdempotency",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "X-JIKO-IDEMPOTENCY"
      },
      {
        "name": "xJikoSignature",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "X-JIKO-SIGNATURE"
      },
      {
        "name": "title",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
        "schema": "object",
        "description": ""
      },
      {
        "name": "address",
        "schema": "object",
        "description": ""
      },
      {
        "name": "date_of_birth",
        "schema": "string",
        "description": ""
      },
      {
        "name": "identification_number",
        "schema": "object",
        "description": ""
      },
      {
        "name": "phone_number",
        "schema": "string",
        "description": ""
      },
      {
        "name": "roles",
        "schema": "array",
        "description": ""
      },
      {
        "name": "ownership_percentage",
        "schema": "string",
        "description": ""
      },
      {
        "name": "citizenship",
        "schema": "string",
        "description": ""
      },
      {
        "name": "email",
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
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/customers/{customer_id}/counterparties",
    "method": "listForCustomer",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Counterparties",
    "typeScriptTag": "counterparties",
    "description": "List Counterparties",
    "parameters": [
      {
        "name": "customerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CUSTOMER_ID"
      },
      {
        "name": "cursor",
        "schema": "string",
        "required": false,
        "description": "",
        "default": ""
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "",
        "default": 30
      },
      {
        "name": "xJikoIdempotency",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "X-JIKO-IDEMPOTENCY"
      },
      {
        "name": "xJikoSignature",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "X-JIKO-SIGNATURE"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Base class for cursor_list responses from the Partner API"
      },
      {
        "statusCode": "404",
        "description": "Not found"
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/customers/{customer_id}/counterparties/{counterparty_id}",
    "method": "getVerificationStatus",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Counterparties",
    "typeScriptTag": "counterparties",
    "description": "Get Counterparty",
    "parameters": [
      {
        "name": "customerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CUSTOMER_ID"
      },
      {
        "name": "counterpartyId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "COUNTERPARTY_ID"
      },
      {
        "name": "xJikoIdempotency",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "X-JIKO-IDEMPOTENCY"
      },
      {
        "name": "xJikoSignature",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "X-JIKO-SIGNATURE"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Not found"
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/jiko-accounts/{account_id}/cards",
    "method": "getAccountCards",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Manage Cards",
    "typeScriptTag": "manageCards",
    "description": "List Account Cards",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACCOUNT_ID"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "",
        "default": 100
      },
      {
        "name": "cursor",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "filter[status]",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "xJikoIdempotency",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "X-JIKO-IDEMPOTENCY"
      },
      {
        "name": "xJikoSignature",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "X-JIKO-SIGNATURE"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Base class for cursor_list responses from the Partner API"
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/jiko-accounts/{account_id}/cards/{card_id}/status",
    "method": "getStatus",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Manage Cards",
    "typeScriptTag": "manageCards",
    "description": "Get Card Status",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACCOUNT_ID"
      },
      {
        "name": "cardId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CARD_ID"
      },
      {
        "name": "xJikoIdempotency",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "X-JIKO-IDEMPOTENCY"
      },
      {
        "name": "xJikoSignature",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "X-JIKO-SIGNATURE"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Not found"
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/jiko-accounts/{account_id}/cards/{card_id}/status",
    "method": "setCardStatus",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Manage Cards",
    "typeScriptTag": "manageCards",
    "description": "Set Card Status",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACCOUNT_ID"
      },
      {
        "name": "cardId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CARD_ID"
      },
      {
        "name": "xJikoIdempotency",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "X-JIKO-IDEMPOTENCY"
      },
      {
        "name": "xJikoSignature",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "X-JIKO-SIGNATURE"
      },
      {
        "name": "status",
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
        "statusCode": "404",
        "description": "Not found"
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/jiko-accounts/{account_id}/cards/{card_id}/pin",
    "method": "setCardPin",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Manage Cards",
    "typeScriptTag": "manageCards",
    "description": "Set Card PIN",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACCOUNT_ID"
      },
      {
        "name": "cardId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CARD_ID"
      },
      {
        "name": "xJikoIdempotency",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "X-JIKO-IDEMPOTENCY"
      },
      {
        "name": "xJikoSignature",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "X-JIKO-SIGNATURE"
      },
      {
        "name": "encrypted_pin",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ENCRYPTED_PIN"
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
    "url": "/api/v1/jiko-accounts/{account_id}/cards/{card_id}/close",
    "method": "closeCard",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Manage Cards",
    "typeScriptTag": "manageCards",
    "description": "Close Card",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACCOUNT_ID"
      },
      {
        "name": "cardId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CARD_ID"
      },
      {
        "name": "xJikoIdempotency",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "X-JIKO-IDEMPOTENCY"
      },
      {
        "name": "xJikoSignature",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "X-JIKO-SIGNATURE"
      },
      {
        "name": "closure_reason",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CLOSURE_REASON"
      },
      {
        "name": "lost_stolen_date",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Successful Response"
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/jiko-accounts/{account_id}/card-orders",
    "method": "listCardOrders",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Physical Cards",
    "typeScriptTag": "physicalCards",
    "description": "List Card Orders",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACCOUNT_ID"
      },
      {
        "name": "cursor",
        "schema": "string",
        "required": false,
        "description": "",
        "default": ""
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "",
        "default": 30
      },
      {
        "name": "xJikoIdempotency",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "X-JIKO-IDEMPOTENCY"
      },
      {
        "name": "xJikoSignature",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "X-JIKO-SIGNATURE"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Base class for cursor_list responses from the Partner API"
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/jiko-accounts/{account_id}/card-orders",
    "method": "createOrder",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Physical Cards",
    "typeScriptTag": "physicalCards",
    "description": "Create Physical Card Order",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACCOUNT_ID"
      },
      {
        "name": "xJikoIdempotency",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "X-JIKO-IDEMPOTENCY"
      },
      {
        "name": "xJikoSignature",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "X-JIKO-SIGNATURE"
      },
      {
        "name": "name_on_card",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME_ON_CARD"
      },
      {
        "name": "shipping_address",
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
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/jiko-accounts/{account_id}/card-orders/{card_order_id}",
    "method": "getOrderInfo",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Physical Cards",
    "typeScriptTag": "physicalCards",
    "description": "Get Card Order",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACCOUNT_ID"
      },
      {
        "name": "cardOrderId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CARD_ORDER_ID"
      },
      {
        "name": "xJikoIdempotency",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "X-JIKO-IDEMPOTENCY"
      },
      {
        "name": "xJikoSignature",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "X-JIKO-SIGNATURE"
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
    "url": "/api/v1/jiko-accounts/{account_id}/virtual-cards/{card_id}",
    "method": "closeCard",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Virtual Cards",
    "typeScriptTag": "virtualCards",
    "description": "Close Virtual Card",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACCOUNT_ID"
      },
      {
        "name": "cardId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CARD_ID"
      },
      {
        "name": "xJikoIdempotency",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "X-JIKO-IDEMPOTENCY"
      },
      {
        "name": "xJikoSignature",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "X-JIKO-SIGNATURE"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Successful Response"
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/jiko-accounts/{account_id}/virtual-cards/{card_id}",
    "method": "getDetail",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Virtual Cards",
    "typeScriptTag": "virtualCards",
    "description": "Get Virtual Card",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACCOUNT_ID"
      },
      {
        "name": "cardId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CARD_ID"
      },
      {
        "name": "xJikoIdempotency",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "X-JIKO-IDEMPOTENCY"
      },
      {
        "name": "xJikoSignature",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "X-JIKO-SIGNATURE"
      },
      {
        "name": "public_key",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PUBLIC_KEY"
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
    "url": "/api/v1/jiko-accounts/{account_id}/virtual-cards",
    "method": "createCard",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Virtual Cards",
    "typeScriptTag": "virtualCards",
    "description": "Create Virtual Card",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACCOUNT_ID"
      },
      {
        "name": "xJikoIdempotency",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "X-JIKO-IDEMPOTENCY"
      },
      {
        "name": "xJikoSignature",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "X-JIKO-SIGNATURE"
      },
      {
        "name": "public_key",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PUBLIC_KEY"
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
    "url": "/api/v1/events/types",
    "method": "listEventTypes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Events",
    "typeScriptTag": "events",
    "description": "List Event Types",
    "parameters": [
      {
        "name": "xJikoIdempotency",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "X-JIKO-IDEMPOTENCY"
      },
      {
        "name": "xJikoSignature",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "X-JIKO-SIGNATURE"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Generic models are only supported in pydantic for python 3.7+, so until then\nitems will be of type Any. As such, this class needs to be subclassed\nand its item field overridden in it using the proper type."
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/events",
    "method": "getPastEvents",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Events",
    "typeScriptTag": "events",
    "description": "List Events",
    "parameters": [
      {
        "name": "subscriptionId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "after",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "cursor",
        "schema": "string",
        "required": false,
        "description": "",
        "default": ""
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "",
        "default": 30
      },
      {
        "name": "xJikoIdempotency",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "X-JIKO-IDEMPOTENCY"
      },
      {
        "name": "xJikoSignature",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "X-JIKO-SIGNATURE"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Base class for cursor_list responses from the Partner API"
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/customers/{customer_id}/counterparties/plaid/link-token",
    "method": "createLinkToken",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Counterparties: Plaid",
    "typeScriptTag": "counterparties:Plaid",
    "description": "Create Plaid Link Token",
    "parameters": [
      {
        "name": "customerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CUSTOMER_ID"
      },
      {
        "name": "xJikoIdempotency",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "X-JIKO-IDEMPOTENCY"
      },
      {
        "name": "xJikoSignature",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "X-JIKO-SIGNATURE"
      },
      {
        "name": "client_name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CLIENT_NAME"
      },
      {
        "name": "redirect_uri",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "android_package_name",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "counterparty_id",
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
        "statusCode": "404",
        "description": "Not found"
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/customers/{customer_id}/counterparties/plaid",
    "method": "createPlaidCounterparties",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Counterparties: Plaid",
    "typeScriptTag": "counterparties:Plaid",
    "description": "Create Plaid Counterparties",
    "parameters": [
      {
        "name": "customerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CUSTOMER_ID"
      },
      {
        "name": "xJikoIdempotency",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "X-JIKO-IDEMPOTENCY"
      },
      {
        "name": "xJikoSignature",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "X-JIKO-SIGNATURE"
      },
      {
        "name": "public_token",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PUBLIC_TOKEN"
      },
      {
        "name": "accounts",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "institution_id",
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
        "statusCode": "404",
        "description": "Not found"
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/customers/{customer_id}/counterparties/{counterparty_id}/plaid/verify",
    "method": "completeVerification",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Counterparties: Plaid",
    "typeScriptTag": "counterparties:Plaid",
    "description": "Verify Plaid Counterparty",
    "parameters": [
      {
        "name": "customerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CUSTOMER_ID"
      },
      {
        "name": "counterpartyId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "COUNTERPARTY_ID"
      },
      {
        "name": "xJikoIdempotency",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "X-JIKO-IDEMPOTENCY"
      },
      {
        "name": "xJikoSignature",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "X-JIKO-SIGNATURE"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Successful Response"
      },
      {
        "statusCode": "404",
        "description": "Not found"
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/subscriptions",
    "method": "listPartnerSubscriptions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Subscriptions",
    "typeScriptTag": "subscriptions",
    "description": "List Subscriptions",
    "parameters": [
      {
        "name": "cursor",
        "schema": "string",
        "required": false,
        "description": "",
        "default": ""
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "",
        "default": 30
      },
      {
        "name": "xJikoIdempotency",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "X-JIKO-IDEMPOTENCY"
      },
      {
        "name": "xJikoSignature",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "X-JIKO-SIGNATURE"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Base class for cursor_list responses from the Partner API"
      },
      {
        "statusCode": "404",
        "description": "Not found"
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/subscriptions",
    "method": "createWebhookSubscription",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Subscriptions",
    "typeScriptTag": "subscriptions",
    "description": "Create Subscription",
    "parameters": [
      {
        "name": "xJikoIdempotency",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "X-JIKO-IDEMPOTENCY"
      },
      {
        "name": "xJikoSignature",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "X-JIKO-SIGNATURE"
      },
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": "",
        "default": ""
      },
      {
        "name": "events",
        "schema": "array",
        "required": true,
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
        "name": "shared_secret",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SHARED_SECRET"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Not found"
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/subscriptions/{subscription_id}",
    "method": "deleteWebhookSubscription",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Subscriptions",
    "typeScriptTag": "subscriptions",
    "description": "Delete Subscription",
    "parameters": [
      {
        "name": "subscriptionId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SUBSCRIPTION_ID"
      },
      {
        "name": "xJikoIdempotency",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "X-JIKO-IDEMPOTENCY"
      },
      {
        "name": "xJikoSignature",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "X-JIKO-SIGNATURE"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Successful Response"
      },
      {
        "statusCode": "404",
        "description": "Not found"
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/subscriptions/{subscription_id}",
    "method": "getWebhookSubscription",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Subscriptions",
    "typeScriptTag": "subscriptions",
    "description": "Get Subscription",
    "parameters": [
      {
        "name": "subscriptionId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SUBSCRIPTION_ID"
      },
      {
        "name": "xJikoIdempotency",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "X-JIKO-IDEMPOTENCY"
      },
      {
        "name": "xJikoSignature",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "X-JIKO-SIGNATURE"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Not found"
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/subscriptions/{subscription_id}",
    "method": "updateWebhookSubscription",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Subscriptions",
    "typeScriptTag": "subscriptions",
    "description": "Update Subscription",
    "parameters": [
      {
        "name": "subscriptionId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SUBSCRIPTION_ID"
      },
      {
        "name": "xJikoIdempotency",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "X-JIKO-IDEMPOTENCY"
      },
      {
        "name": "xJikoSignature",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "X-JIKO-SIGNATURE"
      },
      {
        "name": "description",
        "schema": "string",
        "description": "",
        "default": ""
      },
      {
        "name": "events",
        "schema": "array",
        "description": ""
      },
      {
        "name": "url",
        "schema": "string",
        "description": ""
      },
      {
        "name": "shared_secret",
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
        "statusCode": "404",
        "description": "Not found"
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/jiko-accounts/{account_id}/ach-originating",
    "method": "listAchOriginations",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "ACH",
    "typeScriptTag": "ach",
    "description": "List ACH Originations",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACCOUNT_ID"
      },
      {
        "name": "filter[status]",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "direction",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "cursor",
        "schema": "string",
        "required": false,
        "description": "",
        "default": ""
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "",
        "default": 30
      },
      {
        "name": "xJikoIdempotency",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "X-JIKO-IDEMPOTENCY"
      },
      {
        "name": "xJikoSignature",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "X-JIKO-SIGNATURE"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Base class for cursor_list responses from the Partner API"
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/jiko-accounts/{account_id}/ach-originating",
    "method": "originateTransaction",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "ACH",
    "typeScriptTag": "ach",
    "description": "Create ACH Origination",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACCOUNT_ID"
      },
      {
        "name": "xJikoIdempotency",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "X-JIKO-IDEMPOTENCY"
      },
      {
        "name": "xJikoSignature",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "X-JIKO-SIGNATURE"
      },
      {
        "name": "counterparty_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "COUNTERPARTY_ID"
      },
      {
        "name": "direction",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DIRECTION"
      },
      {
        "name": "sec_code",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "payment_related_information",
        "schema": "array",
        "required": false,
        "description": "",
        "default": []
      },
      {
        "name": "amount_usdc",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "company_entry_description",
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
    "url": "/api/v1/jiko-accounts/{account_id}/ach-originating/{transfer_id}",
    "method": "getTransferOrigination",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "ACH",
    "typeScriptTag": "ach",
    "description": "Get ACH Origination",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACCOUNT_ID"
      },
      {
        "name": "transferId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TRANSFER_ID"
      },
      {
        "name": "xJikoIdempotency",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "X-JIKO-IDEMPOTENCY"
      },
      {
        "name": "xJikoSignature",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "X-JIKO-SIGNATURE"
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
    "url": "/api/v1/jiko-accounts/{account_id}/wires",
    "method": "initiateWireTransfer",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Wires",
    "typeScriptTag": "wires",
    "description": "Create Wire",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACCOUNT_ID"
      },
      {
        "name": "xJikoIdempotency",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "X-JIKO-IDEMPOTENCY"
      },
      {
        "name": "xJikoSignature",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "X-JIKO-SIGNATURE"
      },
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "counterparty_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "COUNTERPARTY_ID"
      },
      {
        "name": "amount_usdc",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "created_by",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "wire_id",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Successful Response"
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/transfers/on-us",
    "method": "createTransfer",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "On-Us Transfers",
    "typeScriptTag": "onUsTransfers",
    "description": "Create On-Us Transfer",
    "parameters": [
      {
        "name": "xJikoIdempotency",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "X-JIKO-IDEMPOTENCY"
      },
      {
        "name": "xJikoSignature",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "X-JIKO-SIGNATURE"
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
    "url": "/api/v1/transfers/on-us/{transfer_id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "On-Us Transfers",
    "typeScriptTag": "onUsTransfers",
    "description": "Get On-Us Transfer",
    "parameters": [
      {
        "name": "transferId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TRANSFER_ID"
      },
      {
        "name": "xJikoIdempotency",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "X-JIKO-IDEMPOTENCY"
      },
      {
        "name": "xJikoSignature",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "X-JIKO-SIGNATURE"
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
    "url": "/api/v1/customers/{customer_id}",
    "method": "getDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Customers",
    "typeScriptTag": "customers",
    "description": "Get Customer Data",
    "parameters": [
      {
        "name": "customerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CUSTOMER_ID"
      },
      {
        "name": "xJikoIdempotency",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "X-JIKO-IDEMPOTENCY"
      },
      {
        "name": "xJikoSignature",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "X-JIKO-SIGNATURE"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Not found"
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/customers/{customer_id}/statements",
    "method": "listForCustomer",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Statements",
    "typeScriptTag": "statements",
    "description": "List Customer Statements",
    "parameters": [
      {
        "name": "customerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CUSTOMER_ID"
      },
      {
        "name": "account[]",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "order",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "type[]",
        "schema": "array",
        "required": false,
        "description": "",
        "default": []
      },
      {
        "name": "key",
        "schema": "string",
        "required": false,
        "description": "Date formatted either `YYYY` or `YYYY-MM`"
      },
      {
        "name": "cursor",
        "schema": "string",
        "required": false,
        "description": "",
        "default": ""
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "",
        "default": 30
      },
      {
        "name": "xJikoIdempotency",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "X-JIKO-IDEMPOTENCY"
      },
      {
        "name": "xJikoSignature",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "X-JIKO-SIGNATURE"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Base class for cursor_list responses from the Partner API"
      },
      {
        "statusCode": "404",
        "description": "Not found"
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/jiko-accounts/{account_id}/statements",
    "method": "getAccountStatements",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Statements",
    "typeScriptTag": "statements",
    "description": "List Account Statements",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACCOUNT_ID"
      },
      {
        "name": "order",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "type[]",
        "schema": "array",
        "required": false,
        "description": "",
        "default": []
      },
      {
        "name": "key",
        "schema": "string",
        "required": false,
        "description": "Date formatted either `YYYY` or `YYYY-MM`"
      },
      {
        "name": "cursor",
        "schema": "string",
        "required": false,
        "description": "",
        "default": ""
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "",
        "default": 30
      },
      {
        "name": "xJikoIdempotency",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "X-JIKO-IDEMPOTENCY"
      },
      {
        "name": "xJikoSignature",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "X-JIKO-SIGNATURE"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Base class for cursor_list responses from the Partner API"
      },
      {
        "statusCode": "404",
        "description": "Not found"
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/jiko-accounts/{account_id}/portals",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Portals",
    "typeScriptTag": "portals",
    "description": "List Portals",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACCOUNT_ID"
      },
      {
        "name": "xJikoIdempotency",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "X-JIKO-IDEMPOTENCY"
      },
      {
        "name": "xJikoSignature",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "X-JIKO-SIGNATURE"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Not found"
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/jiko-accounts/{account_id}/portals",
    "method": "createPortal",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Portals",
    "typeScriptTag": "portals",
    "description": "Create Portal",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACCOUNT_ID"
      },
      {
        "name": "xJikoIdempotency",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "X-JIKO-IDEMPOTENCY"
      },
      {
        "name": "xJikoSignature",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "X-JIKO-SIGNATURE"
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
        "statusCode": "404",
        "description": "Not found"
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/jiko-accounts/{account_id}/portals/{portal_id}",
    "method": "getPortal",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Portals",
    "typeScriptTag": "portals",
    "description": "Get Account Portal",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACCOUNT_ID"
      },
      {
        "name": "portalId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PORTAL_ID"
      },
      {
        "name": "xJikoIdempotency",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "X-JIKO-IDEMPOTENCY"
      },
      {
        "name": "xJikoSignature",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "X-JIKO-SIGNATURE"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Not found"
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/jiko-accounts/{account_id}/portals/{portal_id}",
    "method": "updateName",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Portals",
    "typeScriptTag": "portals",
    "description": "Update Portal",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACCOUNT_ID"
      },
      {
        "name": "portalId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PORTAL_ID"
      },
      {
        "name": "xJikoIdempotency",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "X-JIKO-IDEMPOTENCY"
      },
      {
        "name": "xJikoSignature",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "X-JIKO-SIGNATURE"
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
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Not found"
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/jiko-accounts/{account_id}/portals/{portal_id}/close",
    "method": "closePortal",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Portals",
    "typeScriptTag": "portals",
    "description": "Close Portal",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACCOUNT_ID"
      },
      {
        "name": "portalId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PORTAL_ID"
      },
      {
        "name": "xJikoIdempotency",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "X-JIKO-IDEMPOTENCY"
      },
      {
        "name": "xJikoSignature",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "X-JIKO-SIGNATURE"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Successful Response"
      },
      {
        "statusCode": "404",
        "description": "Not found"
      },
      {
        "statusCode": "412",
        "description": "Portal is already closed."
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/applications/{application_id}/documents/{document_type}/file",
    "method": "uploadDocumentToApplication",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Individuals",
    "typeScriptTag": "individuals",
    "description": "Upload Document To Application",
    "parameters": [
      {
        "name": "applicationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "APPLICATION_ID"
      },
      {
        "name": "documentType",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DOCUMENT_TYPE"
      },
      {
        "name": "contentType",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CONTENT-TYPE"
      },
      {
        "name": "contentLength",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "xJikoIdempotency",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "X-JIKO-IDEMPOTENCY"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Not found"
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/customers/{customer_id}/documents/{document_type}/file",
    "method": "uploadDocumentToCustomer",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Customers",
    "typeScriptTag": "customers",
    "description": "Upload Document To Customer",
    "parameters": [
      {
        "name": "customerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CUSTOMER_ID"
      },
      {
        "name": "documentType",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DOCUMENT_TYPE"
      },
      {
        "name": "contentType",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CONTENT-TYPE"
      },
      {
        "name": "contentLength",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "xJikoIdempotency",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "X-JIKO-IDEMPOTENCY"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Not found"
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/business-applications/{application_id}/documents",
    "method": "listDocumentRequests",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Businesses",
    "typeScriptTag": "businesses",
    "description": "List Document Requests",
    "parameters": [
      {
        "name": "applicationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "APPLICATION_ID"
      },
      {
        "name": "xJikoIdempotency",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "X-JIKO-IDEMPOTENCY"
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
    "url": "/api/v1/documents/{document_id}",
    "method": "uploadDocument",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Businesses",
    "typeScriptTag": "businesses",
    "description": "Upload Document",
    "parameters": [
      {
        "name": "documentId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DOCUMENT_ID"
      },
      {
        "name": "contentType",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CONTENT-TYPE"
      },
      {
        "name": "contentLength",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "contentDisposition",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CONTENT-DISPOSITION"
      },
      {
        "name": "xJikoIdempotency",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "X-JIKO-IDEMPOTENCY"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Not found"
      },
      {
        "statusCode": "412",
        "description": "Document has already been reviewed and approved."
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/login",
    "method": "authenticateUser",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Security",
    "typeScriptTag": "security",
    "description": "Login",
    "parameters": [
      {
        "name": "username",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERNAME"
      },
      {
        "name": "password",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PASSWORD"
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
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/public-keys",
    "method": "getEncryptionKeys",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Security",
    "typeScriptTag": "security",
    "description": "List Public Keys",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "Encryption keys are currently stored as environment variables.\n\nVariables are declared in\n`services/partner-api/secret-(dev|staging|sandbox|partners).yaml`"
      }
    ]
  },
  {
    "url": "/api/v1/sandbox/card-swipe",
    "method": "simulateCardSwipe",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Sandbox",
    "typeScriptTag": "sandbox",
    "description": "Submit Card Swipe",
    "parameters": [
      {
        "name": "xBranchName",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "card_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CARD_ID"
      },
      {
        "name": "amount_usdc",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "Successful Response"
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/sandbox/generate-card",
    "method": "generatePhysicalCardFromOrder",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Sandbox",
    "typeScriptTag": "sandbox",
    "description": "Generate Physical Card From Order",
    "parameters": [
      {
        "name": "xBranchName",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "card_order_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CARD_ORDER_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "Successful Response"
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/sandbox/webhook",
    "method": "simulateWebhookEvent",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Sandbox",
    "typeScriptTag": "sandbox",
    "description": "Trigger Webhook",
    "parameters": [
      {
        "name": "xBranchName",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "Successful Response"
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/sandbox/fund",
    "method": "simulateAchCredit",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Sandbox",
    "typeScriptTag": "sandbox",
    "description": "Fund Account",
    "parameters": [
      {
        "name": "xBranchName",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "account_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACCOUNT_ID"
      },
      {
        "name": "amount_usdc",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "company_name",
        "schema": "string",
        "required": false,
        "description": "",
        "default": "FakeCompany"
      },
      {
        "name": "count",
        "schema": "integer",
        "required": false,
        "description": "",
        "default": 1
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "Successful Response"
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  }
]
    }
      language="TypeScript"
      apiTitle="Jiko Partner API"
      apiBaseUrl="https://{partner}.partner-api.jikoservices.com"
      apiVersion="1.29.0"
      endpoints={56}
      sdkMethods={68}
      schemas={182}
      parameters={353}
      difficulty="Hard"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/jiko/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/jiko/openapi.yaml"
      developerDocumentation="docs.jiko.io"
    />
  );
}
  