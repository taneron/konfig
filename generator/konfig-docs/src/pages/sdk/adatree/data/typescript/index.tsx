import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function AdatreeDataTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="adatree-data-typescript-sdk"
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
      serviceName="Data"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/adatree/data/logo.jpg"
      companyKebabCase="adatree"
      clientNameCamelCase="adatreeData"
      homepage="adatree.com.au/"
      lastUpdated={new Date("2024-03-27T23:56:18.514Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/adatree/data/favicon.jpg"
      contactUrl="https://adatree.com.au"
      contactEmail="engineering@adatree.com.au"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/adatree/data/imagePreview.png"
      GettingStarted={GettingStarted}
      FirstRequest={FirstRequest}
      categories={["open_banking","fintech","financial_services","data_management","compliance"]}
      methods={[
  {
    "url": "/data/banking/accounts",
    "method": "getAccounts",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Banking",
    "typeScriptTag": "banking",
    "description": "Get Banking Accounts",
    "parameters": [
      {
        "name": "useCaseIds",
        "schema": "array",
        "description": "Used to filter results on the useCaseId field."
      },
      {
        "name": "cdrArrangementIds",
        "schema": "array",
        "description": "Used to filter results on the cdrArrangementId field."
      },
      {
        "name": "consentIds",
        "schema": "array",
        "description": "Used to filter results on the consentId field."
      },
      {
        "name": "consumerIds",
        "schema": "array",
        "description": "Used to filter results on the consumerId field."
      },
      {
        "name": "accountIds",
        "schema": "array",
        "required": false,
        "description": "Used to filter results on the accountId field."
      },
      {
        "name": "dataHolderBrandIds",
        "schema": "array",
        "description": "Used to filter results on the dataHolderBrandId field."
      },
      {
        "name": "isOwned",
        "schema": "boolean",
        "description": "Filters accounts based on whether they are owned by the authorised customer. True for owned accounts, false for unowned accounts and absent for all accounts",
        "example": true
      },
      {
        "name": "openStatus",
        "schema": "string",
        "required": false,
        "description": "Used to filter results according to open/closed status. Values can be OPEN, CLOSED",
        "example": "OPEN"
      },
      {
        "name": "productCategories",
        "schema": "array",
        "required": false,
        "description": "Used to filter results on the productCategory field applicable to accounts. Any one of the valid values for this field can be supplied. If absent then all accounts returned."
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
        "description": "Page size to request",
        "example": 10,
        "default": 25
      },
      {
        "name": "adatreeConsumerAuthDate",
        "schema": "string",
        "description": "The time when the customer last logged in. Mandatory for consumer present calls using a Machine token.",
        "example": "Tue, 11 Sep 2012 19:43:31 GMT"
      },
      {
        "name": "adatreeConsumerIpAddress",
        "schema": "string",
        "description": "The consumer's original IP address. Mandatory for consumer present calls using a Machine token.",
        "example": "127.0.0.1"
      },
      {
        "name": "adatreeConsumerUserAgent",
        "schema": "string",
        "description": "User Agent header of the consumer facing application. Mandatory for consumer present calls using a Machine token."
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/data/banking/transactions",
    "method": "getTransactions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Banking",
    "typeScriptTag": "banking",
    "description": "Get Banking Transactions",
    "parameters": [
      {
        "name": "useCaseIds",
        "schema": "array",
        "description": "Used to filter results on the useCaseId field."
      },
      {
        "name": "accountIds",
        "schema": "array",
        "required": false,
        "description": "Used to filter results on the accountId field."
      },
      {
        "name": "cdrArrangementIds",
        "schema": "array",
        "description": "Used to filter results on the cdrArrangementId field."
      },
      {
        "name": "consentIds",
        "schema": "array",
        "description": "Used to filter results on the consentId field."
      },
      {
        "name": "consumerIds",
        "schema": "array",
        "description": "Used to filter results on the consumerId field."
      },
      {
        "name": "dataHolderBrandIds",
        "schema": "array",
        "description": "Used to filter results on the dataHolderBrandId field."
      },
      {
        "name": "types",
        "schema": "array",
        "description": "Used to filter results on the type field."
      },
      {
        "name": "statuses",
        "schema": "array",
        "description": "Used to filter results by status."
      },
      {
        "name": "minimumAmount",
        "schema": "number",
        "description": "Used to filter results on the amount field",
        "example": 100
      },
      {
        "name": "maximumAmount",
        "schema": "number",
        "description": "Used to filter results on the amount field",
        "example": 300
      },
      {
        "name": "oldestRetrievalTime",
        "schema": "string",
        "description": "Constrain the transaction history request to transactions with retrieval time at or after this date/time. Format is aligned to DateTimeString common type.",
        "example": "2012-12-25T15:43:00-08:00"
      },
      {
        "name": "newestRetrievalTime",
        "schema": "string",
        "description": "Constrain the transaction history request to transactions with retrieval time at or before this date/time. Format is aligned to DateTimeString common type.",
        "example": "2012-12-25T15:43:00-08:00"
      },
      {
        "name": "oldestTime",
        "schema": "string",
        "description": "Constrain the transaction history request to transactions with effective time at or after this date/time. If absent defaults to newest-time minus 90 days.  Format is aligned to DateTimeString common type",
        "example": "2012-12-25T15:43:00-08:00"
      },
      {
        "name": "newestTime",
        "schema": "string",
        "description": "Constrain the transaction history request to transactions with effective time at or before this date/time. Format is aligned to DateTimeString common type.",
        "example": "2012-12-25T15:43:00-08:00"
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
        "description": "Page size to request",
        "example": 10,
        "default": 25
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/data/banking/payees",
    "method": "getPayeeList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Banking",
    "typeScriptTag": "banking",
    "description": "Get Banking Payees",
    "parameters": [
      {
        "name": "useCaseIds",
        "schema": "array",
        "description": "Used to filter results on the useCaseId field."
      },
      {
        "name": "cdrArrangementIds",
        "schema": "array",
        "description": "Used to filter results on the cdrArrangementId field."
      },
      {
        "name": "consentIds",
        "schema": "array",
        "description": "Used to filter results on the consentId field."
      },
      {
        "name": "consumerIds",
        "schema": "array",
        "description": "Used to filter results on the consumerId field."
      },
      {
        "name": "dataHolderBrandIds",
        "schema": "array",
        "description": "Used to filter results on the dataHolderBrandId field."
      },
      {
        "name": "types",
        "schema": "array",
        "description": "Used to filter results on the payee type field."
      },
      {
        "name": "payeeIds",
        "schema": "array",
        "required": false,
        "description": "Used to filter results on the payeeId field."
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
        "description": "Page size to request",
        "example": 10,
        "default": 25
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/data/banking/payments/direct-debits",
    "method": "getDirectDebitsList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Banking",
    "typeScriptTag": "banking",
    "description": "Get Banking Direct Debits",
    "parameters": [
      {
        "name": "useCaseIds",
        "schema": "array",
        "description": "Used to filter results on the useCaseId field."
      },
      {
        "name": "cdrArrangementIds",
        "schema": "array",
        "description": "Used to filter results on the cdrArrangementId field."
      },
      {
        "name": "consentIds",
        "schema": "array",
        "description": "Used to filter results on the consentId field."
      },
      {
        "name": "consumerIds",
        "schema": "array",
        "description": "Used to filter results on the consumerId field."
      },
      {
        "name": "dataHolderBrandIds",
        "schema": "array",
        "description": "Used to filter results on the dataHolderBrandId field."
      },
      {
        "name": "accountIds",
        "schema": "array",
        "required": false,
        "description": "Used to filter results on the accountId field."
      },
      {
        "name": "isOwned",
        "schema": "boolean",
        "description": "Filters accounts based on whether they are owned by the authorised customer. True for owned accounts, false for unowned accounts and absent for all accounts",
        "example": true
      },
      {
        "name": "openStatus",
        "schema": "string",
        "required": false,
        "description": "Used to filter results according to open/closed status. Values can be OPEN, CLOSED",
        "example": "OPEN"
      },
      {
        "name": "productCategories",
        "schema": "array",
        "required": false,
        "description": "Used to filter results on the productCategory field applicable to accounts. Any one of the valid values for this field can be supplied. If absent then all accounts returned."
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
        "description": "Page size to request",
        "example": 10,
        "default": 25
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/data/banking/payments/scheduled",
    "method": "listScheduledPayments",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Banking",
    "typeScriptTag": "banking",
    "description": "Get Scheduled Payments",
    "parameters": [
      {
        "name": "useCaseIds",
        "schema": "array",
        "description": "Used to filter results on the useCaseId field."
      },
      {
        "name": "cdrArrangementIds",
        "schema": "array",
        "description": "Used to filter results on the cdrArrangementId field."
      },
      {
        "name": "consentIds",
        "schema": "array",
        "description": "Used to filter results on the consentId field."
      },
      {
        "name": "consumerIds",
        "schema": "array",
        "description": "Used to filter results on the consumerId field."
      },
      {
        "name": "dataHolderBrandIds",
        "schema": "array",
        "description": "Used to filter results on the dataHolderBrandId field."
      },
      {
        "name": "accountIds",
        "schema": "array",
        "required": false,
        "description": "Used to filter results on the accountId field."
      },
      {
        "name": "isOwned",
        "schema": "boolean",
        "description": "Filters accounts based on whether they are owned by the authorised customer. True for owned accounts, false for unowned accounts and absent for all accounts",
        "example": true
      },
      {
        "name": "openStatus",
        "schema": "string",
        "required": false,
        "description": "Used to filter results according to open/closed status. Values can be OPEN, CLOSED",
        "example": "OPEN"
      },
      {
        "name": "productCategories",
        "schema": "array",
        "required": false,
        "description": "Used to filter results on the productCategory field applicable to accounts. Any one of the valid values for this field can be supplied. If absent then all accounts returned."
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
        "description": "Page size to request",
        "example": 10,
        "default": 25
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/data/banking/products",
    "method": "getBankingProducts",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Banking",
    "typeScriptTag": "banking",
    "description": "Get Banking Products",
    "parameters": [
      {
        "name": "dataHolderBrandIds",
        "schema": "array",
        "description": "Used to filter results on the dataHolderBrandId field."
      },
      {
        "name": "productCategories",
        "schema": "array",
        "required": false,
        "description": "Used to filter results on the productCategory field applicable to accounts. Any one of the valid values for this field can be supplied. If absent then all accounts returned."
      },
      {
        "name": "productIds",
        "schema": "array",
        "description": "IDs of the specific products"
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
        "description": "Page size to request",
        "example": 10,
        "default": 25
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/data/common/customers",
    "method": "getConsumerList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Common",
    "typeScriptTag": "common",
    "description": "Get Customers",
    "parameters": [
      {
        "name": "useCaseIds",
        "schema": "array",
        "description": "Used to filter results on the useCaseId field."
      },
      {
        "name": "cdrArrangementIds",
        "schema": "array",
        "description": "Used to filter results on the cdrArrangementId field."
      },
      {
        "name": "consentIds",
        "schema": "array",
        "description": "Used to filter results on the consentId field."
      },
      {
        "name": "consumerIds",
        "schema": "array",
        "description": "Used to filter results on the consumerId field."
      },
      {
        "name": "dataHolderBrandIds",
        "schema": "array",
        "description": "Used to filter results on the dataHolderBrandId field."
      },
      {
        "name": "customerUTypes",
        "schema": "array",
        "required": false,
        "description": "Used to filter results on the customerUType field applicable to customers. Any one of the valid values for this field can be supplied."
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/data/energy/plans",
    "method": "getPlans",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Energy",
    "typeScriptTag": "energy",
    "description": "Get Energy Plans",
    "parameters": [
      {
        "name": "planIds",
        "schema": "array",
        "description": "Used to filter results on the planId field."
      },
      {
        "name": "planTypes",
        "schema": "array",
        "description": "Used to filter results on the type field."
      },
      {
        "name": "fuelTypes",
        "schema": "array",
        "description": "Used to filter results on the fuel type field."
      },
      {
        "name": "effective",
        "schema": "string",
        "description": "Used to filter results on the effective field.",
        "example": "CURRENT"
      },
      {
        "name": "updatedSince",
        "schema": "string",
        "description": "Used to filter results on the updatedSince field",
        "example": "2021-01-12T15:43:00.121Z"
      },
      {
        "name": "dataHolderBrandIds",
        "schema": "array",
        "description": "Used to filter results on the dataHolderBrandId field."
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
        "description": "Page size to request",
        "example": 10,
        "default": 25
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/data/energy/accounts",
    "method": "getConsumerEnergyAccounts",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Energy",
    "typeScriptTag": "energy",
    "description": "Get Energy Accounts",
    "parameters": [
      {
        "name": "useCaseIds",
        "schema": "array",
        "description": "Used to filter results on the useCaseId field."
      },
      {
        "name": "cdrArrangementIds",
        "schema": "array",
        "description": "Used to filter results on the cdrArrangementId field."
      },
      {
        "name": "consentIds",
        "schema": "array",
        "description": "Used to filter results on the consentId field."
      },
      {
        "name": "consumerIds",
        "schema": "array",
        "description": "Used to filter results on the consumerId field."
      },
      {
        "name": "accountIds",
        "schema": "array",
        "required": false,
        "description": "Used to filter results on the accountId field."
      },
      {
        "name": "dataHolderBrandIds",
        "schema": "array",
        "description": "Used to filter results on the dataHolderBrandId field."
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
        "description": "Page size to request",
        "example": 10,
        "default": 25
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/data/energy/invoices",
    "method": "getInvoices",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Energy",
    "typeScriptTag": "energy",
    "description": "Get Energy Invoices",
    "parameters": [
      {
        "name": "useCaseIds",
        "schema": "array",
        "description": "Used to filter results on the useCaseId field."
      },
      {
        "name": "cdrArrangementIds",
        "schema": "array",
        "description": "Used to filter results on the cdrArrangementId field."
      },
      {
        "name": "consentIds",
        "schema": "array",
        "description": "Used to filter results on the consentId field."
      },
      {
        "name": "consumerIds",
        "schema": "array",
        "description": "Used to filter results on the consumerId field."
      },
      {
        "name": "accountIds",
        "schema": "array",
        "required": false,
        "description": "Used to filter results on the accountId field."
      },
      {
        "name": "invoiceIds",
        "schema": "array",
        "description": "Used to filter results on the invoiceId field."
      },
      {
        "name": "dataHolderBrandIds",
        "schema": "array",
        "description": "Used to filter results on the dataHolderBrandId field."
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
        "description": "Page size to request",
        "example": 10,
        "default": 25
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/data/energy/bills",
    "method": "getBills",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Energy",
    "typeScriptTag": "energy",
    "description": "Get Energy Bills",
    "parameters": [
      {
        "name": "useCaseIds",
        "schema": "array",
        "description": "Used to filter results on the useCaseId field."
      },
      {
        "name": "cdrArrangementIds",
        "schema": "array",
        "description": "Used to filter results on the cdrArrangementId field."
      },
      {
        "name": "consentIds",
        "schema": "array",
        "description": "Used to filter results on the consentId field."
      },
      {
        "name": "consumerIds",
        "schema": "array",
        "description": "Used to filter results on the consumerId field."
      },
      {
        "name": "accountIds",
        "schema": "array",
        "required": false,
        "description": "Used to filter results on the accountId field."
      },
      {
        "name": "billingIds",
        "schema": "array",
        "description": "Used to filter results on the billingId field."
      },
      {
        "name": "dataHolderBrandIds",
        "schema": "array",
        "description": "Used to filter results on the dataHolderBrandId field."
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
        "description": "Page size to request",
        "example": 10,
        "default": 25
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/data/energy/electricity/servicepoints",
    "method": "getServicePoints",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Energy",
    "typeScriptTag": "energy",
    "description": "Get Electricity Service Points",
    "parameters": [
      {
        "name": "useCaseIds",
        "schema": "array",
        "description": "Used to filter results on the useCaseId field."
      },
      {
        "name": "cdrArrangementIds",
        "schema": "array",
        "description": "Used to filter results on the cdrArrangementId field."
      },
      {
        "name": "consentIds",
        "schema": "array",
        "description": "Used to filter results on the consentId field."
      },
      {
        "name": "consumerIds",
        "schema": "array",
        "description": "Used to filter results on the consumerId field."
      },
      {
        "name": "servicePointIds",
        "schema": "array",
        "description": "Used to filter results on the servicePointId field."
      },
      {
        "name": "dataHolderBrandIds",
        "schema": "array",
        "description": "Used to filter results on the dataHolderBrandId field."
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
        "description": "Page size to request",
        "example": 10,
        "default": 25
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/data/energy/electricity/usage",
    "method": "getConsumerElectricityUsage",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Energy",
    "typeScriptTag": "energy",
    "description": "Get Electricity Usage",
    "parameters": [
      {
        "name": "useCaseIds",
        "schema": "array",
        "description": "Used to filter results on the useCaseId field."
      },
      {
        "name": "cdrArrangementIds",
        "schema": "array",
        "description": "Used to filter results on the cdrArrangementId field."
      },
      {
        "name": "consentIds",
        "schema": "array",
        "description": "Used to filter results on the consentId field."
      },
      {
        "name": "consumerIds",
        "schema": "array",
        "description": "Used to filter results on the consumerId field."
      },
      {
        "name": "servicePointIds",
        "schema": "array",
        "description": "Used to filter results on the servicePointId field."
      },
      {
        "name": "dataHolderBrandIds",
        "schema": "array",
        "description": "Used to filter results on the dataHolderBrandId field."
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
        "description": "Page size to request",
        "example": 10,
        "default": 25
      },
      {
        "name": "oldestDate",
        "schema": "string",
        "description": "Constrain the request to records with effective date at or after this date. If absent defaults to newest-date minus 24 months.\n",
        "example": "2022-12-31"
      },
      {
        "name": "newestDate",
        "schema": "string",
        "description": "Constrain the request to records with effective date at or before this date. If absent defaults to current date.\n",
        "example": "2022-12-31"
      },
      {
        "name": "adatreeConsumerAuthDate",
        "schema": "string",
        "description": "The time when the customer last logged in. Mandatory for consumer present calls using a Machine token.",
        "example": "Tue, 11 Sep 2012 19:43:31 GMT"
      },
      {
        "name": "adatreeConsumerIpAddress",
        "schema": "string",
        "description": "The consumer's original IP address. Mandatory for consumer present calls using a Machine token.",
        "example": "127.0.0.1"
      },
      {
        "name": "adatreeConsumerUserAgent",
        "schema": "string",
        "description": "User Agent header of the consumer facing application. Mandatory for consumer present calls using a Machine token."
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
        "statusCode": "429",
        "description": ""
      }
    ]
  }
]
    }
      language="TypeScript"
      apiTitle="Adatree ADR Platform Data API"
      apiBaseUrl="https://cdr-insights-prod.api.adatree.com.au"
      apiVersion="1.1.0"
      endpoints={13}
      sdkMethods={13}
      schemas={156}
      parameters={127}
      difficulty="Medium"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/adatree/data/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/adatree/data/openapi.yaml"
      developerDocumentation="developer.adatree.com.au/docs/api/data/"
    />
  );
}
  