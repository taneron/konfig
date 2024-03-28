import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function AdatreeBankingTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="adatree-banking-typescript-sdk"
      metaDescription={`Adatree is a CDR technology intermediary. What does that mean? Simply put, we're the poles and wires connecting Banking, Finance, Energy and Telecommunications with Open Data. Our platform is ready for implementation with out-of-the-box functionality to have you connected to compliant data within a matter of weeks. The new age of data regulations are changing the way FinTech operates. Adatree is your on-ramp to stay plugged into the digital economy.

We work with organisations of all sizes and sectors to provide turnkey solutions. We've built a world-class CDR intermediary platform that is the most robust and flexible in market, ready to scale for any Open Data use case. If the scores of awards don't prove it, our list of satisfied clients ought to.

When you work with Adatree you're working with genuine CDR experts. We live and breathe this stuff, and strive to make it easy for other businesses to access consumer data with confidence.

We'll help you:
- Determine which CDR access model is best for your organisation
- Implement our fully-compliant white-labelled consent dashboard, tailored to your unique business needs
- Meet all compliance and legislative requirements including authentication and consent
- Leverage the full CDR ecosystem with every available API
- Accelerate your time-to-market to weeks (not months!) with our proven streamlined integration process
- Maintain consistent and secure connections to the Consumer Data Right network

We know the Consumer Data Right back-to-front and promise to walk you through every stage of the journey. Ready to take the first step?

Reach out to our team today: https://www.adatree.com.au/contact`}
      company="Adatree"
      serviceName="Banking"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/adatree/banking/logo.jpg"
      companyKebabCase="adatree"
      clientNameCamelCase="adatreeBanking"
      homepage="adatree.com.au/"
      lastUpdated={new Date("2024-03-27T23:56:18.514Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/adatree/banking/favicon.jpg"
      contactUrl="https://adatree.com.au"
      contactEmail="engineering@adatree.com.au"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/adatree/banking/imagePreview.png"
      GettingStarted={GettingStarted}
      FirstRequest={FirstRequest}
      categories={["open_banking","fintech","financial_services","data_management","compliance"]}
      methods={[
  {
    "url": "/adr/banking/arrangements/{cdrArrangementId}/accounts",
    "method": "getCdrArrangementAccounts",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Accounts",
    "typeScriptTag": "accounts",
    "description": "Get Accounts under cdr arrangement id",
    "parameters": [
      {
        "name": "cdrArrangementId",
        "schema": "string",
        "required": true,
        "description": "Used to identify the consent arrangement from which to identify the bank and consumer information required to fetch the data.",
        "example": "998621c8-1e1d-44ca-826e-754b910e5697"
      },
      {
        "name": "productCategory",
        "schema": "string",
        "required": false,
        "description": "Used to filter results on the productCategory field applicable to accounts. Any one of the valid values for this field can be supplied. If absent then all accounts returned.",
        "example": "BUSINESS_LOANS"
      },
      {
        "name": "openStatus",
        "schema": "string",
        "required": false,
        "description": "Used to filter results according to open/closed status. Values can be OPEN, CLOSED or ALL. If absent then ALL is assumed",
        "example": "OPEN",
        "default": "ALL"
      },
      {
        "name": "isOwned",
        "schema": "boolean",
        "description": "Filters accounts based on whether they are owned by the authorised customer. True for owned accounts, false for unowned accounts and absent for all accounts",
        "example": true
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "Page of results to request (standard pagination)",
        "example": 1,
        "default": 1
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "description": "Page size to request. Default is 25 (standard pagination)",
        "example": 25,
        "default": 25
      },
      {
        "name": "xFapiAuthDate",
        "schema": "string",
        "description": "The time when the customer last logged in to the data recipient. Required for all resource calls from a machine client. Format is \"HTTP-date\" as in section \"7.1.1.1\" of RFC7231, e.g., \"Tue, 11 Sep 2012 19:43:31 GMT\"",
        "example": "Tue, 11 Sep 2012 19:43:31 GMT"
      },
      {
        "name": "xFapiCustomerIpAddress",
        "schema": "string",
        "description": "The customer's original IP address if the customer is currently logged in to the data recipient. The presence of this header indicates that the API is being called in a customer present context. Not to be included for unauthenticated calls.",
        "example": "127.0.0.1"
      },
      {
        "name": "xCdsClientHeaders",
        "schema": "string",
        "description": "The customer's original standard http headers [Base64](https://raw.githubusercontent.com) encoded, including the original User Agent header, if the customer is currently logged in to the data recipient. Mandatory for customer present calls.  Not required for unattended or unauthenticated calls. Format of this field is unclear and might be defined in future as discussed in https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/104"
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
      }
    ]
  },
  {
    "url": "/adr/banking/arrangements/{cdrArrangementId}/accounts/balances",
    "method": "getFilteredBalances",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "AccountsBalances",
    "typeScriptTag": "accountsBalances",
    "description": "Get Bulk Balances",
    "parameters": [
      {
        "name": "cdrArrangementId",
        "schema": "string",
        "required": true,
        "description": "Used to identify the consent arrangement from which to identify the bank and consumer information required to fetch the data.",
        "example": "998621c8-1e1d-44ca-826e-754b910e5697"
      },
      {
        "name": "accountIds",
        "schema": "array",
        "required": false,
        "description": "Adatree's extension to support account ids for GET /accounts/balances"
      },
      {
        "name": "productCategory",
        "schema": "string",
        "required": false,
        "description": "Used to filter results on the productCategory field applicable to accounts. Any one of the valid values for this field can be supplied. If absent then all accounts returned.",
        "example": "BUSINESS_LOANS"
      },
      {
        "name": "openStatus",
        "schema": "string",
        "required": false,
        "description": "Used to filter results according to open/closed status. Values can be OPEN, CLOSED or ALL. If absent then ALL is assumed",
        "example": "OPEN",
        "default": "ALL"
      },
      {
        "name": "isOwned",
        "schema": "boolean",
        "description": "Filters accounts based on whether they are owned by the authorised customer. True for owned accounts, false for unowned accounts and absent for all accounts",
        "example": true
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "Page of results to request (standard pagination)",
        "example": 1,
        "default": 1
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "description": "Page size to request. Default is 25 (standard pagination)",
        "example": 25,
        "default": 25
      },
      {
        "name": "xFapiAuthDate",
        "schema": "string",
        "description": "The time when the customer last logged in to the data recipient. Required for all resource calls from a machine client. Format is \"HTTP-date\" as in section \"7.1.1.1\" of RFC7231, e.g., \"Tue, 11 Sep 2012 19:43:31 GMT\"",
        "example": "Tue, 11 Sep 2012 19:43:31 GMT"
      },
      {
        "name": "xFapiCustomerIpAddress",
        "schema": "string",
        "description": "The customer's original IP address if the customer is currently logged in to the data recipient. The presence of this header indicates that the API is being called in a customer present context. Not to be included for unauthenticated calls.",
        "example": "127.0.0.1"
      },
      {
        "name": "xCdsClientHeaders",
        "schema": "string",
        "description": "The customer's original standard http headers [Base64](https://raw.githubusercontent.com) encoded, including the original User Agent header, if the customer is currently logged in to the data recipient. Mandatory for customer present calls.  Not required for unattended or unauthenticated calls. Format of this field is unclear and might be defined in future as discussed in https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/104"
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
      }
    ]
  },
  {
    "url": "/adr/banking/arrangements/{cdrArrangementId}/accounts/{accountId}/balance",
    "method": "obtainSingleAccountBalance",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "AccountsBalance",
    "typeScriptTag": "accountsBalance",
    "description": "Get Account Balance",
    "parameters": [
      {
        "name": "cdrArrangementId",
        "schema": "string",
        "required": true,
        "description": "Used to identify the consent arrangement from which to identify the bank and consumer information required to fetch the data.",
        "example": "998621c8-1e1d-44ca-826e-754b910e5697"
      },
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "A tokenised identifier for the account which is unique but not shareable",
        "example": "d9e75179-104f-47cf-9d29-18284222bab0"
      },
      {
        "name": "xFapiAuthDate",
        "schema": "string",
        "description": "The time when the customer last logged in to the data recipient. Required for all resource calls from a machine client. Format is \"HTTP-date\" as in section \"7.1.1.1\" of RFC7231, e.g., \"Tue, 11 Sep 2012 19:43:31 GMT\"",
        "example": "Tue, 11 Sep 2012 19:43:31 GMT"
      },
      {
        "name": "xFapiCustomerIpAddress",
        "schema": "string",
        "description": "The customer's original IP address if the customer is currently logged in to the data recipient. The presence of this header indicates that the API is being called in a customer present context. Not to be included for unauthenticated calls.",
        "example": "127.0.0.1"
      },
      {
        "name": "xCdsClientHeaders",
        "schema": "string",
        "description": "The customer's original standard http headers [Base64](https://raw.githubusercontent.com) encoded, including the original User Agent header, if the customer is currently logged in to the data recipient. Mandatory for customer present calls.  Not required for unattended or unauthenticated calls. Format of this field is unclear and might be defined in future as discussed in https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/104"
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
      }
    ]
  },
  {
    "url": "/adr/banking/arrangements/{cdrArrangementId}/accounts/{accountId}",
    "method": "obtainDetail",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Accounts",
    "typeScriptTag": "accounts",
    "description": "Get Account Detail",
    "parameters": [
      {
        "name": "cdrArrangementId",
        "schema": "string",
        "required": true,
        "description": "Used to identify the consent arrangement from which to identify the bank and consumer information required to fetch the data.",
        "example": "998621c8-1e1d-44ca-826e-754b910e5697"
      },
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "A tokenised identifier for the account which is unique but not shareable",
        "example": "d9e75179-104f-47cf-9d29-18284222bab0"
      },
      {
        "name": "xFapiAuthDate",
        "schema": "string",
        "description": "The time when the customer last logged in to the data recipient. Required for all resource calls from a machine client. Format is \"HTTP-date\" as in section \"7.1.1.1\" of RFC7231, e.g., \"Tue, 11 Sep 2012 19:43:31 GMT\"",
        "example": "Tue, 11 Sep 2012 19:43:31 GMT"
      },
      {
        "name": "xFapiCustomerIpAddress",
        "schema": "string",
        "description": "The customer's original IP address if the customer is currently logged in to the data recipient. The presence of this header indicates that the API is being called in a customer present context. Not to be included for unauthenticated calls.",
        "example": "127.0.0.1"
      },
      {
        "name": "xCdsClientHeaders",
        "schema": "string",
        "description": "The customer's original standard http headers [Base64](https://raw.githubusercontent.com) encoded, including the original User Agent header, if the customer is currently logged in to the data recipient. Mandatory for customer present calls.  Not required for unattended or unauthenticated calls. Format of this field is unclear and might be defined in future as discussed in https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/104"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/adr/banking/arrangements/{cdrArrangementId}/accounts/{accountId}/transactions",
    "method": "getByAccountIdAndCdrArrangementId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "AccountTransactions",
    "typeScriptTag": "accountTransactions",
    "description": "Get Transactions For Account",
    "parameters": [
      {
        "name": "cdrArrangementId",
        "schema": "string",
        "required": true,
        "description": "Used to identify the consent arrangement from which to identify the bank and consumer information required to fetch the data.",
        "example": "998621c8-1e1d-44ca-826e-754b910e5697"
      },
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "ID of the account to get transactions for. Must have previously been returned by one of the account list end points.",
        "example": "d9e75179-104f-47cf-9d29-18284222bab0"
      },
      {
        "name": "oldestTime",
        "schema": "string",
        "description": "Constrain the transaction history request to transactions with effective time at or after this date/time. If absent defaults to newest-time minus 90 days.  Format is aligned to DateTimeString common type"
      },
      {
        "name": "newestTime",
        "schema": "string",
        "description": "Constrain the transaction history request to transactions with effective time at or before this date/time.  If absent defaults to today.  Format is aligned to DateTimeString common type"
      },
      {
        "name": "minAmount",
        "schema": "string",
        "description": "Filter transactions to only transactions with amounts higher or equal to than this amount"
      },
      {
        "name": "maxAmount",
        "schema": "string",
        "description": "Filter transactions to only transactions with amounts less than or equal to than this amount",
        "example": "10.00"
      },
      {
        "name": "text",
        "schema": "string",
        "description": "Filter transactions to only transactions where this string value is found as a substring of either the reference or description fields. Format is arbitrary ASCII string. This parameter is optionally implemented by data holders. If it is not implemented then a response should be provided as normal without text filtering applied and an additional boolean field named isQueryParamUnsupported should be included in the meta object and set to true (whether the text parameter is supplied or not)",
        "example": "milk"
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "Page of results to request (standard pagination)",
        "example": 1,
        "default": 1
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "description": "Page size to request. Default is 25 (standard pagination)",
        "example": 25,
        "default": 25
      },
      {
        "name": "xFapiAuthDate",
        "schema": "string",
        "description": "The time when the customer last logged in to the data recipient. Required for all resource calls from a machine client. Format is \"HTTP-date\" as in section \"7.1.1.1\" of RFC7231, e.g., \"Tue, 11 Sep 2012 19:43:31 GMT\"",
        "example": "Tue, 11 Sep 2012 19:43:31 GMT"
      },
      {
        "name": "xFapiCustomerIpAddress",
        "schema": "string",
        "description": "The customer's original IP address if the customer is currently logged in to the data recipient. The presence of this header indicates that the API is being called in a customer present context. Not to be included for unauthenticated calls.",
        "example": "127.0.0.1"
      },
      {
        "name": "xCdsClientHeaders",
        "schema": "string",
        "description": "The customer's original standard http headers [Base64](https://raw.githubusercontent.com) encoded, including the original User Agent header, if the customer is currently logged in to the data recipient. Mandatory for customer present calls.  Not required for unattended or unauthenticated calls. Format of this field is unclear and might be defined in future as discussed in https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/104"
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
      }
    ]
  },
  {
    "url": "/adr/banking/arrangements/{cdrArrangementId}/accounts/{accountId}/transactions/{transactionId}",
    "method": "obtainDetail",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "AccountTransactions",
    "typeScriptTag": "accountTransactions",
    "description": "Get Transaction Detail",
    "parameters": [
      {
        "name": "cdrArrangementId",
        "schema": "string",
        "required": true,
        "description": "Used to identify the consent arrangement from which to identify the bank and consumer information required to fetch the data.",
        "example": "998621c8-1e1d-44ca-826e-754b910e5697"
      },
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "ID of the account to get transactions for. Must have previously been returned by one of the account list end points.",
        "example": "d9e75179-104f-47cf-9d29-18284222bab0"
      },
      {
        "name": "transactionId",
        "schema": "string",
        "required": true,
        "description": "ID of the transaction obtained from a previous call to one of the other transaction end points",
        "example": "e27f7698-814f-467f-8c65-ca9d59832ffd"
      },
      {
        "name": "xFapiAuthDate",
        "schema": "string",
        "description": "The time when the customer last logged in to the data recipient. Required for all resource calls from a machine client. Format is \"HTTP-date\" as in section \"7.1.1.1\" of RFC7231, e.g., \"Tue, 11 Sep 2012 19:43:31 GMT\"",
        "example": "Tue, 11 Sep 2012 19:43:31 GMT"
      },
      {
        "name": "xFapiCustomerIpAddress",
        "schema": "string",
        "description": "The customer's original IP address if the customer is currently logged in to the data recipient. The presence of this header indicates that the API is being called in a customer present context. Not to be included for unauthenticated calls.",
        "example": "127.0.0.1"
      },
      {
        "name": "xCdsClientHeaders",
        "schema": "string",
        "description": "The customer's original standard http headers [Base64](https://raw.githubusercontent.com) encoded, including the original User Agent header, if the customer is currently logged in to the data recipient. Mandatory for customer present calls.  Not required for unattended or unauthenticated calls. Format of this field is unclear and might be defined in future as discussed in https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/104"
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
      }
    ]
  },
  {
    "url": "/adr/banking/arrangements/{cdrArrangementId}/accounts/{accountId}/direct-debits",
    "method": "obtainForAccount",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "AccountDirectDebits",
    "typeScriptTag": "accountDirectDebits",
    "description": "Get Direct Debits For Account",
    "parameters": [
      {
        "name": "cdrArrangementId",
        "schema": "string",
        "required": true,
        "description": "Used to identify the consent arrangement from which to identify the bank and consumer information required to fetch the data.",
        "example": "998621c8-1e1d-44ca-826e-754b910e5697"
      },
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "ID of the account to get direct debit authorisations for.  Must have previously been returned by one of the account list end points.",
        "example": "d9e75179-104f-47cf-9d29-18284222bab0"
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "Page of results to request (standard pagination)",
        "example": 1,
        "default": 1
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "description": "Page size to request. Default is 25 (standard pagination)",
        "example": 25,
        "default": 25
      },
      {
        "name": "xFapiAuthDate",
        "schema": "string",
        "description": "The time when the customer last logged in to the data recipient. Required for all resource calls from a machine client. Format is \"HTTP-date\" as in section \"7.1.1.1\" of RFC7231, e.g., \"Tue, 11 Sep 2012 19:43:31 GMT\"",
        "example": "Tue, 11 Sep 2012 19:43:31 GMT"
      },
      {
        "name": "xFapiCustomerIpAddress",
        "schema": "string",
        "description": "The customer's original IP address if the customer is currently logged in to the data recipient. The presence of this header indicates that the API is being called in a customer present context. Not to be included for unauthenticated calls.",
        "example": "127.0.0.1"
      },
      {
        "name": "xCdsClientHeaders",
        "schema": "string",
        "description": "The customer's original standard http headers [Base64](https://raw.githubusercontent.com) encoded, including the original User Agent header, if the customer is currently logged in to the data recipient. Mandatory for customer present calls.  Not required for unattended or unauthenticated calls. Format of this field is unclear and might be defined in future as discussed in https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/104"
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
      }
    ]
  },
  {
    "url": "/adr/banking/arrangements/{cdrArrangementId}/accounts/direct-debits",
    "method": "getBulkDirectDebits",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "AccountsDirectDebits",
    "typeScriptTag": "accountsDirectDebits",
    "description": "Get Bulk Direct Debits",
    "parameters": [
      {
        "name": "cdrArrangementId",
        "schema": "string",
        "required": true,
        "description": "Used to identify the consent arrangement from which to identify the bank and consumer information required to fetch the data.",
        "example": "998621c8-1e1d-44ca-826e-754b910e5697"
      },
      {
        "name": "accountIds",
        "schema": "array",
        "required": false,
        "description": "Adatree's extension to support account ids for GET /accounts/balances"
      },
      {
        "name": "productCategory",
        "schema": "string",
        "required": false,
        "description": "Used to filter results on the productCategory field applicable to accounts. Any one of the valid values for this field can be supplied. If absent then all accounts returned.",
        "example": "BUSINESS_LOANS"
      },
      {
        "name": "openStatus",
        "schema": "string",
        "required": false,
        "description": "Used to filter results according to open/closed status. Values can be OPEN, CLOSED or ALL. If absent then ALL is assumed",
        "example": "OPEN",
        "default": "ALL"
      },
      {
        "name": "isOwned",
        "schema": "boolean",
        "description": "Filters accounts based on whether they are owned by the authorised customer. True for owned accounts, false for unowned accounts and absent for all accounts",
        "example": true
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "Page of results to request (standard pagination)",
        "example": 1,
        "default": 1
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "description": "Page size to request. Default is 25 (standard pagination)",
        "example": 25,
        "default": 25
      },
      {
        "name": "xFapiAuthDate",
        "schema": "string",
        "description": "The time when the customer last logged in to the data recipient. Required for all resource calls from a machine client. Format is \"HTTP-date\" as in section \"7.1.1.1\" of RFC7231, e.g., \"Tue, 11 Sep 2012 19:43:31 GMT\"",
        "example": "Tue, 11 Sep 2012 19:43:31 GMT"
      },
      {
        "name": "xFapiCustomerIpAddress",
        "schema": "string",
        "description": "The customer's original IP address if the customer is currently logged in to the data recipient. The presence of this header indicates that the API is being called in a customer present context. Not to be included for unauthenticated calls.",
        "example": "127.0.0.1"
      },
      {
        "name": "xCdsClientHeaders",
        "schema": "string",
        "description": "The customer's original standard http headers [Base64](https://raw.githubusercontent.com) encoded, including the original User Agent header, if the customer is currently logged in to the data recipient. Mandatory for customer present calls.  Not required for unattended or unauthenticated calls. Format of this field is unclear and might be defined in future as discussed in https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/104"
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
      }
    ]
  },
  {
    "url": "/adr/banking/arrangements/{cdrArrangementId}/accounts/{accountId}/payments/scheduled",
    "method": "getScheduledPayments",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "AccountPaymentsScheduled",
    "typeScriptTag": "accountPaymentsScheduled",
    "description": "Get Scheduled Payments for Account",
    "parameters": [
      {
        "name": "cdrArrangementId",
        "schema": "string",
        "required": true,
        "description": "Used to identify the consent arrangement from which to identify the bank and consumer information required to fetch the data.",
        "example": "998621c8-1e1d-44ca-826e-754b910e5697"
      },
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "ID of the account to get scheduled payments for. Must have previously been returned by one of the account list end points. The account specified is the source account for the payment",
        "example": "d9e75179-104f-47cf-9d29-18284222bab0"
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "Page of results to request (standard pagination)",
        "example": 1,
        "default": 1
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "description": "Page size to request. Default is 25 (standard pagination)",
        "example": 25,
        "default": 25
      },
      {
        "name": "xFapiAuthDate",
        "schema": "string",
        "description": "The time when the customer last logged in to the data recipient. Required for all resource calls from a machine client. Format is \"HTTP-date\" as in section \"7.1.1.1\" of RFC7231, e.g., \"Tue, 11 Sep 2012 19:43:31 GMT\"",
        "example": "Tue, 11 Sep 2012 19:43:31 GMT"
      },
      {
        "name": "xFapiCustomerIpAddress",
        "schema": "string",
        "description": "The customer's original IP address if the customer is currently logged in to the data recipient. The presence of this header indicates that the API is being called in a customer present context. Not to be included for unauthenticated calls.",
        "example": "127.0.0.1"
      },
      {
        "name": "xCdsClientHeaders",
        "schema": "string",
        "description": "The customer's original standard http headers [Base64](https://raw.githubusercontent.com) encoded, including the original User Agent header, if the customer is currently logged in to the data recipient. Mandatory for customer present calls.  Not required for unattended or unauthenticated calls. Format of this field is unclear and might be defined in future as discussed in https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/104"
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
      }
    ]
  },
  {
    "url": "/adr/banking/arrangements/{cdrArrangementId}/payments/scheduled",
    "method": "bulkGet",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "PaymentsScheduled",
    "typeScriptTag": "paymentsScheduled",
    "description": "Get Scheduled Payments Bulk",
    "parameters": [
      {
        "name": "cdrArrangementId",
        "schema": "string",
        "required": true,
        "description": "Used to identify the consent arrangement from which to identify the bank and consumer information required to fetch the data.",
        "example": "998621c8-1e1d-44ca-826e-754b910e5697"
      },
      {
        "name": "accountIds",
        "schema": "array",
        "required": false,
        "description": "Adatree's extension to support account ids for GET /accounts/balances"
      },
      {
        "name": "productCategory",
        "schema": "string",
        "required": false,
        "description": "Used to filter results on the productCategory field applicable to accounts. Any one of the valid values for this field can be supplied. If absent then all accounts returned.",
        "example": "BUSINESS_LOANS"
      },
      {
        "name": "openStatus",
        "schema": "string",
        "required": false,
        "description": "Used to filter results according to open/closed status. Values can be OPEN, CLOSED or ALL. If absent then ALL is assumed",
        "example": "OPEN",
        "default": "ALL"
      },
      {
        "name": "isOwned",
        "schema": "boolean",
        "description": "Filters accounts based on whether they are owned by the authorised customer. True for owned accounts, false for unowned accounts and absent for all accounts",
        "example": true
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "Page of results to request (standard pagination)",
        "example": 1,
        "default": 1
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "description": "Page size to request. Default is 25 (standard pagination)",
        "example": 25,
        "default": 25
      },
      {
        "name": "xFapiAuthDate",
        "schema": "string",
        "description": "The time when the customer last logged in to the data recipient. Required for all resource calls from a machine client. Format is \"HTTP-date\" as in section \"7.1.1.1\" of RFC7231, e.g., \"Tue, 11 Sep 2012 19:43:31 GMT\"",
        "example": "Tue, 11 Sep 2012 19:43:31 GMT"
      },
      {
        "name": "xFapiCustomerIpAddress",
        "schema": "string",
        "description": "The customer's original IP address if the customer is currently logged in to the data recipient. The presence of this header indicates that the API is being called in a customer present context. Not to be included for unauthenticated calls.",
        "example": "127.0.0.1"
      },
      {
        "name": "xCdsClientHeaders",
        "schema": "string",
        "description": "The customer's original standard http headers [Base64](https://raw.githubusercontent.com) encoded, including the original User Agent header, if the customer is currently logged in to the data recipient. Mandatory for customer present calls.  Not required for unattended or unauthenticated calls. Format of this field is unclear and might be defined in future as discussed in https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/104"
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
      }
    ]
  },
  {
    "url": "/adr/banking/arrangements/{cdrArrangementId}/payees",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Payees",
    "typeScriptTag": "payees",
    "description": "Get Payees",
    "parameters": [
      {
        "name": "cdrArrangementId",
        "schema": "string",
        "required": true,
        "description": "Used to identify the consent arrangement from which to identify the bank and consumer information required to fetch the data.",
        "example": "998621c8-1e1d-44ca-826e-754b910e5697"
      },
      {
        "name": "type",
        "schema": "string",
        "description": "Filter on the payee type field.  In addition to normal type field values, ALL can be specified to retrieve all payees.  If absent the assumed value is ALL",
        "example": "BILLER",
        "default": "ALL"
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "Page of results to request (standard pagination)",
        "example": 1,
        "default": 1
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "description": "Page size to request. Default is 25 (standard pagination)",
        "example": 25,
        "default": 25
      },
      {
        "name": "xFapiAuthDate",
        "schema": "string",
        "description": "The time when the customer last logged in to the data recipient. Required for all resource calls from a machine client. Format is \"HTTP-date\" as in section \"7.1.1.1\" of RFC7231, e.g., \"Tue, 11 Sep 2012 19:43:31 GMT\"",
        "example": "Tue, 11 Sep 2012 19:43:31 GMT"
      },
      {
        "name": "xFapiCustomerIpAddress",
        "schema": "string",
        "description": "The customer's original IP address if the customer is currently logged in to the data recipient. The presence of this header indicates that the API is being called in a customer present context. Not to be included for unauthenticated calls.",
        "example": "127.0.0.1"
      },
      {
        "name": "xCdsClientHeaders",
        "schema": "string",
        "description": "The customer's original standard http headers [Base64](https://raw.githubusercontent.com) encoded, including the original User Agent header, if the customer is currently logged in to the data recipient. Mandatory for customer present calls.  Not required for unattended or unauthenticated calls. Format of this field is unclear and might be defined in future as discussed in https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/104"
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
      }
    ]
  },
  {
    "url": "/adr/banking/arrangements/{cdrArrangementId}/payees/{payeeId}",
    "method": "getDetail",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Payees",
    "typeScriptTag": "payees",
    "description": "Get Payee Detail",
    "parameters": [
      {
        "name": "cdrArrangementId",
        "schema": "string",
        "required": true,
        "description": "Used to identify the consent arrangement from which to identify the bank and consumer information required to fetch the data.",
        "example": "998621c8-1e1d-44ca-826e-754b910e5697"
      },
      {
        "name": "payeeId",
        "schema": "string",
        "required": true,
        "description": "The ID used to locate the details of a particular payee",
        "example": "d9e75179-104f-47cf-9d29-18284222bab0"
      },
      {
        "name": "xFapiAuthDate",
        "schema": "string",
        "description": "The time when the customer last logged in to the data recipient. Required for all resource calls from a machine client. Format is \"HTTP-date\" as in section \"7.1.1.1\" of RFC7231, e.g., \"Tue, 11 Sep 2012 19:43:31 GMT\"",
        "example": "Tue, 11 Sep 2012 19:43:31 GMT"
      },
      {
        "name": "xFapiCustomerIpAddress",
        "schema": "string",
        "description": "The customer's original IP address if the customer is currently logged in to the data recipient. The presence of this header indicates that the API is being called in a customer present context. Not to be included for unauthenticated calls.",
        "example": "127.0.0.1"
      },
      {
        "name": "xCdsClientHeaders",
        "schema": "string",
        "description": "The customer's original standard http headers [Base64](https://raw.githubusercontent.com) encoded, including the original User Agent header, if the customer is currently logged in to the data recipient. Mandatory for customer present calls.  Not required for unattended or unauthenticated calls. Format of this field is unclear and might be defined in future as discussed in https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/104"
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
      }
    ]
  },
  {
    "url": "/adr/common/arrangements/{cdrArrangementId}/userinfo",
    "method": "getByArrangementId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "User Info",
    "typeScriptTag": "userInfo",
    "description": "Get user info under cdr arrangement id",
    "parameters": [
      {
        "name": "cdrArrangementId",
        "schema": "string",
        "required": true,
        "description": "Used to identify the consent arrangement from which to identify the bank and consumer information required to fetch the data.",
        "example": "998621c8-1e1d-44ca-826e-754b910e5697"
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
        "statusCode": "424",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/adr/common/arrangements/{cdrArrangementId}/customer",
    "method": "getCustomerInfo",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Customers",
    "typeScriptTag": "customers",
    "description": "Get Customer",
    "parameters": [
      {
        "name": "cdrArrangementId",
        "schema": "string",
        "required": true,
        "description": "Used to identify the consent arrangement from which to identify the bank and consumer information required to fetch the data.",
        "example": "998621c8-1e1d-44ca-826e-754b910e5697"
      },
      {
        "name": "xFapiAuthDate",
        "schema": "string",
        "description": "The time when the customer last logged in to the data recipient. Required for all resource calls from a machine client. Format is \"HTTP-date\" as in section \"7.1.1.1\" of RFC7231, e.g., \"Tue, 11 Sep 2012 19:43:31 GMT\"",
        "example": "Tue, 11 Sep 2012 19:43:31 GMT"
      },
      {
        "name": "xFapiCustomerIpAddress",
        "schema": "string",
        "description": "The customer's original IP address if the customer is currently logged in to the data recipient. The presence of this header indicates that the API is being called in a customer present context. Not to be included for unauthenticated calls.",
        "example": "127.0.0.1"
      },
      {
        "name": "xCdsClientHeaders",
        "schema": "string",
        "description": "The customer's original standard http headers [Base64](https://raw.githubusercontent.com) encoded, including the original User Agent header, if the customer is currently logged in to the data recipient. Mandatory for customer present calls.  Not required for unattended or unauthenticated calls. Format of this field is unclear and might be defined in future as discussed in https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/104"
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
      }
    ]
  },
  {
    "url": "/adr/common/arrangements/{cdrArrangementId}/customer/detail",
    "method": "obtainDetailedInfo",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Customers",
    "typeScriptTag": "customers",
    "description": "Get Customer Detail",
    "parameters": [
      {
        "name": "cdrArrangementId",
        "schema": "string",
        "required": true,
        "description": "Used to identify the consent arrangement from which to identify the bank and consumer information required to fetch the data.",
        "example": "998621c8-1e1d-44ca-826e-754b910e5697"
      },
      {
        "name": "xFapiAuthDate",
        "schema": "string",
        "description": "The time when the customer last logged in to the data recipient. Required for all resource calls from a machine client. Format is \"HTTP-date\" as in section \"7.1.1.1\" of RFC7231, e.g., \"Tue, 11 Sep 2012 19:43:31 GMT\"",
        "example": "Tue, 11 Sep 2012 19:43:31 GMT"
      },
      {
        "name": "xFapiCustomerIpAddress",
        "schema": "string",
        "description": "The customer's original IP address if the customer is currently logged in to the data recipient. The presence of this header indicates that the API is being called in a customer present context. Not to be included for unauthenticated calls.",
        "example": "127.0.0.1"
      },
      {
        "name": "xCdsClientHeaders",
        "schema": "string",
        "description": "The customer's original standard http headers [Base64](https://raw.githubusercontent.com) encoded, including the original User Agent header, if the customer is currently logged in to the data recipient. Mandatory for customer present calls.  Not required for unattended or unauthenticated calls. Format of this field is unclear and might be defined in future as discussed in https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/104"
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
      }
    ]
  },
  {
    "url": "/adr/discovery/status",
    "method": "getStatus",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "DataHolderDiscovery",
    "typeScriptTag": "dataHolderDiscovery",
    "description": "Get Status",
    "parameters": [
      {
        "name": "dataHolderIds",
        "schema": "array",
        "required": false,
        "description": "Array of strings used to identify the data holder from which to fetch the product/outage/status data."
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
      }
    ]
  },
  {
    "url": "/adr/discovery/outages",
    "method": "getOutages",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "DataHolderDiscovery",
    "typeScriptTag": "dataHolderDiscovery",
    "description": "Get Outages",
    "parameters": [
      {
        "name": "dataHolderIds",
        "schema": "array",
        "required": false,
        "description": "Array of strings used to identify the data holder from which to fetch the product/outage/status data."
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
      }
    ]
  }
]
    }
      language="TypeScript"
      apiTitle="Adatree ADR Platform Open Banking API"
      apiBaseUrl="https://cdr-insights-prod.api.adatree.com.au"
      apiVersion="2.0.1"
      endpoints={17}
      sdkMethods={17}
      schemas={88}
      parameters={104}
      difficulty="Easy"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/adatree/banking/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/adatree/banking/openapi.yaml"
      developerDocumentation="developer.adatree.com.au/docs/api/banking/"
    />
  );
}
  