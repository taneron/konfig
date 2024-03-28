import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function BossInsightsTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="boss-insights-typescript-sdk"
      metaDescription={`Engage and grow your business clients - Qualify, engage and support your business clients with streamlined workflows and actionable insights based on standardized Open Finance datasets.


Boss Insights is an award-winning leader in open banking, linking fintechs, neobanks, and financial institutions to their business clients' financial accounting, banking, commerce/sales, KYB, payroll, tax/IRS data, and more. Boss Insights has earned media coverage by American Banker, Forbes, Bank Innovation, Open Finance World, and The Financial Brand. Boss Insights has won multiple awards including Money 20/20 Rise Up, CB Insights' Top 35 Future in Fintech, Corporate LiveWire's Lending Technologist Of The Year, Open Banking Excellence's SME Award, Women In Payments' Unicorn Challenge, Corporate Vision's Most Innovative Leader In Lending Technology & Canadian Lenders Association's Executive Leader In Lending.`}
      company="Boss Insights"
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/boss-insights/logo.png"
      companyKebabCase="boss-insights"
      clientNameCamelCase="bossInsights"
      homepage="bossinsights.com/"
      lastUpdated={new Date("2024-03-27T23:56:18.514Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/boss-insights/favicon.png"
      contactUrl="http://bossinsights.com/support"
      // Missing contactEmail
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/boss-insights/imagePreview.jpg"
      GettingStarted={GettingStarted}
      FirstRequest={FirstRequest}
      categories={["financial_technology","fintech","financial_services","data_management","data_warehouse","business_software","loan_management","data_aggregator"]}
      methods={[
  {
    "url": "/accounting_transactions",
    "method": "getCollection",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "AccountingTransaction",
    "typeScriptTag": "accountingTransaction",
    "description": "Retrieves a Collection of accounting transaction resources",
    "parameters": [
      {
        "name": "start",
        "schema": "string",
        "required": false,
        "description": "YYYY-MM-DD",
        "example": "2022-07-01"
      },
      {
        "name": "end",
        "schema": "string",
        "required": false,
        "description": "YYYY-MM-DD",
        "example": "2022-08-31"
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "The collection page number",
        "default": 1
      },
      {
        "name": "itemsPerPage",
        "schema": "integer",
        "required": false,
        "description": "The number of items per page",
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
    "url": "/accounting_transactions/{id}",
    "method": "getResource",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "AccountingTransaction",
    "typeScriptTag": "accountingTransaction",
    "description": "Retrieves a AccountingTransaction resource.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Resource identifier",
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
        "description": "Resource not found"
      }
    ]
  },
  {
    "url": "/accounts",
    "method": "getCollection",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Account",
    "typeScriptTag": "account",
    "description": "Retrieves the collection of Account resources.",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/accounts",
    "method": "createResource",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Account",
    "typeScriptTag": "account",
    "description": "Creates a Account resource.",
    "parameters": [
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "This is the main company account for income and expenses"
      },
      {
        "name": "id",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "quickbooks-726"
      },
      {
        "name": "integration",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "quickbooks"
      },
      {
        "name": "code",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "400"
      },
      {
        "name": "taxType",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "TAX001"
      },
      {
        "name": "bankAccountNumber",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "823772-2828773-09826"
      },
      {
        "name": "bankAccountType",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "CREDITCARD"
      },
      {
        "name": "currencyCode",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "USD"
      },
      {
        "name": "fullyQualifiedName",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Short Term Cash"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Sandra's Bank Account"
      },
      {
        "name": "classification",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Asset"
      },
      {
        "name": "accountSubType",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "BANK"
      },
      {
        "name": "currentBalanceWithSubAccounts",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "387687"
      },
      {
        "name": "created",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "2021-06-24 22:35:07"
      },
      {
        "name": "modified",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "2021-06-24 22:35:07"
      },
      {
        "name": "accountType",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "ASSET"
      },
      {
        "name": "currentBalance",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "29872"
      },
      {
        "name": "active",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": true
      },
      {
        "name": "subAccount",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": false
      },
      {
        "name": "srcId",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "GH2JK-67283H-YW82KHX-2883KK-KS78S"
      },
      {
        "name": "parentAccountId",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "JS882-67283H-YW82KHX-2883KK-DJ3SK"
      },
      {
        "name": "deleted",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": false
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Accounting chart of accounts"
      },
      {
        "statusCode": "400",
        "description": "Invalid input"
      },
      {
        "statusCode": "422",
        "description": "Unprocessable entity"
      }
    ]
  },
  {
    "url": "/accounts/{id}",
    "method": "removeResource",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Account",
    "typeScriptTag": "account",
    "description": "Removes the Account resource.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Resource identifier",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Account resource deleted"
      },
      {
        "statusCode": "404",
        "description": "Resource not found"
      }
    ]
  },
  {
    "url": "/accounts/{id}",
    "method": "getResource",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Account",
    "typeScriptTag": "account",
    "description": "Retrieves a Account resource.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Resource identifier",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Accounting chart of accounts"
      },
      {
        "statusCode": "404",
        "description": "Resource not found"
      }
    ]
  },
  {
    "url": "/accounts/{id}",
    "method": "replaceResource",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Account",
    "typeScriptTag": "account",
    "description": "Replaces the Account resource.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Resource identifier",
        "example": "ID"
      },
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "This is the main company account for income and expenses"
      },
      {
        "name": "id",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "quickbooks-726"
      },
      {
        "name": "integration",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "quickbooks"
      },
      {
        "name": "code",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "400"
      },
      {
        "name": "taxType",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "TAX001"
      },
      {
        "name": "bankAccountNumber",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "823772-2828773-09826"
      },
      {
        "name": "bankAccountType",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "CREDITCARD"
      },
      {
        "name": "currencyCode",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "USD"
      },
      {
        "name": "fullyQualifiedName",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Short Term Cash"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Sandra's Bank Account"
      },
      {
        "name": "classification",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Asset"
      },
      {
        "name": "accountSubType",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "BANK"
      },
      {
        "name": "currentBalanceWithSubAccounts",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "387687"
      },
      {
        "name": "created",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "2021-06-24 22:35:07"
      },
      {
        "name": "modified",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "2021-06-24 22:35:07"
      },
      {
        "name": "accountType",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "ASSET"
      },
      {
        "name": "currentBalance",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "29872"
      },
      {
        "name": "active",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": true
      },
      {
        "name": "subAccount",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": false
      },
      {
        "name": "srcId",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "GH2JK-67283H-YW82KHX-2883KK-KS78S"
      },
      {
        "name": "parentAccountId",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "JS882-67283H-YW82KHX-2883KK-DJ3SK"
      },
      {
        "name": "deleted",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": false
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Accounting chart of accounts"
      },
      {
        "statusCode": "400",
        "description": "Invalid input"
      },
      {
        "statusCode": "404",
        "description": "Resource not found"
      },
      {
        "statusCode": "422",
        "description": "Unprocessable entity"
      }
    ]
  },
  {
    "url": "/activities",
    "method": "getCollection",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Activity",
    "typeScriptTag": "activity",
    "description": "Retrieves the collection of Activity resources.",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "The collection page number",
        "default": 1
      },
      {
        "name": "itemsPerPage",
        "schema": "integer",
        "required": false,
        "description": "The number of items per page",
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
    "url": "/activities/{id}",
    "method": "getResource",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Activity",
    "typeScriptTag": "activity",
    "description": "Retrieves a Activity resource.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Resource identifier",
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
        "description": "Resource not found"
      }
    ]
  },
  {
    "url": "/aged_payables_excel",
    "method": "getWorkbook",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "AgedPayablesExcel",
    "typeScriptTag": "agedPayablesExcel",
    "description": "Retrieves an excel workbook of an aged payables report",
    "parameters": [
      {
        "name": "asOf",
        "schema": "string",
        "required": false,
        "description": "YYYY-MM-DD",
        "example": "2022-08-31"
      },
      {
        "name": "refresh",
        "schema": "string",
        "required": false,
        "description": "If refresh is set, data will be fetched from the source application even when cached data is available",
        "example": "true"
      },
      {
        "name": "sort",
        "schema": "string",
        "required": false,
        "description": "Vendors can be sorted by total amount in ascending or descending order, or alphabetically. Default is alphabetical.",
        "example": "descending"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "provides an excel workbook of an aged payables report"
      },
      {
        "statusCode": "404",
        "description": "Resource not found"
      }
    ]
  },
  {
    "url": "/aged_payables_report",
    "method": "getReport",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "AgedPayablesReport",
    "typeScriptTag": "agedPayablesReport",
    "description": "Retrieves an aged payables report",
    "parameters": [
      {
        "name": "asOf",
        "schema": "string",
        "required": false,
        "description": "YYYY-MM-DD",
        "example": "2022-08-31"
      },
      {
        "name": "refresh",
        "schema": "string",
        "required": false,
        "description": "If refresh is set, data will be fetched from the source application even when cached data is available",
        "example": "true"
      },
      {
        "name": "sort",
        "schema": "string",
        "required": false,
        "description": "Vendors can be sorted by total amount in ascending or descending order, or alphabetically. Default is alphabetical.",
        "example": "descending"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Provides an Aged Payables Report"
      },
      {
        "statusCode": "404",
        "description": "Resource not found"
      }
    ]
  },
  {
    "url": "/aged_receivables_excel",
    "method": "getWorkbook",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "AgedReceivablesExcel",
    "typeScriptTag": "agedReceivablesExcel",
    "description": "Retrieves an excel workbook of an aged receivables report",
    "parameters": [
      {
        "name": "asOf",
        "schema": "string",
        "required": false,
        "description": "YYYY-MM-DD",
        "example": "2022-08-31"
      },
      {
        "name": "refresh",
        "schema": "string",
        "required": false,
        "description": "If refresh is set, data will be fetched from the source application even when cached data is available",
        "example": "true"
      },
      {
        "name": "sort",
        "schema": "string",
        "required": false,
        "description": "Customers can be sorted by total amount in ascending or descending order, or alphabetically. Default is alphabetical.",
        "example": "descending"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "provides an excel workbook of an aged receivables report"
      },
      {
        "statusCode": "404",
        "description": "Resource not found"
      }
    ]
  },
  {
    "url": "/aged_receivables_report",
    "method": "getResource",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "AgedReceivablesReport",
    "typeScriptTag": "agedReceivablesReport",
    "description": "Retrieves an aged receivables report",
    "parameters": [
      {
        "name": "asOf",
        "schema": "string",
        "required": false,
        "description": "YYYY-MM-DD",
        "example": "2022-08-31"
      },
      {
        "name": "refresh",
        "schema": "string",
        "required": false,
        "description": "If refresh is set, data will be fetched from the source application even when cached data is available",
        "example": "true"
      },
      {
        "name": "sort",
        "schema": "string",
        "required": false,
        "description": "Can be sorted by total amount in ascending or descending order, or alphabetically. Default is alphabetical.",
        "example": "descending"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Provides an Aged Receivables Report"
      },
      {
        "statusCode": "404",
        "description": "Resource not found"
      }
    ]
  },
  {
    "url": "/application_charges",
    "method": "getCollection",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "ApplicationCharge",
    "typeScriptTag": "applicationCharge",
    "description": "Retrieves the collection of ApplicationCharge resources.",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "The collection page number",
        "default": 1
      },
      {
        "name": "itemsPerPage",
        "schema": "integer",
        "required": false,
        "description": "The number of items per page",
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
    "url": "/application_charges/{id}",
    "method": "getResource",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "ApplicationCharge",
    "typeScriptTag": "applicationCharge",
    "description": "Retrieves a ApplicationCharge resource.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Resource identifier",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A one time charge within an application"
      },
      {
        "statusCode": "404",
        "description": "Resource not found"
      }
    ]
  },
  {
    "url": "/application_credits",
    "method": "getCollection",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "ApplicationCredit",
    "typeScriptTag": "applicationCredit",
    "description": "Retrieves the collection of ApplicationCredit resources.",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "The collection page number",
        "default": 1
      },
      {
        "name": "itemsPerPage",
        "schema": "integer",
        "required": false,
        "description": "The number of items per page",
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
    "url": "/application_credits/{id}",
    "method": "getResource",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "ApplicationCredit",
    "typeScriptTag": "applicationCredit",
    "description": "Retrieves a ApplicationCredit resource.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Resource identifier",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Application credit represents credits issued to merchants that can be used towards future app purchases"
      },
      {
        "statusCode": "404",
        "description": "Resource not found"
      }
    ]
  },
  {
    "url": "/assets",
    "method": "getCollection",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Asset",
    "typeScriptTag": "asset",
    "description": "Retrieves the collection of Asset resources.",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "The collection page number",
        "default": 1
      },
      {
        "name": "itemsPerPage",
        "schema": "integer",
        "required": false,
        "description": "The number of items per page",
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
    "url": "/assets/{id}",
    "method": "getResource",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Asset",
    "typeScriptTag": "asset",
    "description": "Retrieves a Asset resource.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Resource identifier",
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
        "description": "Resource not found"
      }
    ]
  },
  {
    "url": "/balance_histories",
    "method": "getCollection",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "BalanceHistory",
    "typeScriptTag": "balanceHistory",
    "description": "Retrieves the collection of BalanceHistory resources.",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "The collection page number",
        "default": 1
      },
      {
        "name": "itemsPerPage",
        "schema": "integer",
        "required": false,
        "description": "The number of items per page",
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
    "url": "/balance_histories/{id}",
    "method": "getResource",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "BalanceHistory",
    "typeScriptTag": "balanceHistory",
    "description": "Retrieves a BalanceHistory resource.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Resource identifier",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Balance history represents charges that have contributed to the account balance e.g. charges & transfers"
      },
      {
        "statusCode": "404",
        "description": "Resource not found"
      }
    ]
  },
  {
    "url": "/balance_sheet_excel",
    "method": "getWorkbook",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "BalanceSheetExcel",
    "typeScriptTag": "balanceSheetExcel",
    "description": "Retrieves an excel workbook of a series of mapped balance sheets",
    "parameters": [
      {
        "name": "start",
        "schema": "string",
        "required": false,
        "description": "YYYY-MM-DD",
        "example": "2022-07-01"
      },
      {
        "name": "end",
        "schema": "string",
        "required": false,
        "description": "YYYY-MM-DD",
        "example": "2022-08-31"
      },
      {
        "name": "refresh",
        "schema": "string",
        "required": false,
        "description": "If refresh is set, data will be fetched from the source application even when cached data is available",
        "example": "true"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "provides an excel workbook of a series of mapped balance sheets"
      },
      {
        "statusCode": "404",
        "description": "Resource not found"
      }
    ]
  },
  {
    "url": "/balance_sheet_report",
    "method": "getMappedReport",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "BalanceSheetReport",
    "typeScriptTag": "balanceSheetReport",
    "description": "Retrieves a mapped balance sheet",
    "parameters": [
      {
        "name": "asOf",
        "schema": "string",
        "required": false,
        "description": "YYYY-MM-DD",
        "example": "2022-08-31"
      },
      {
        "name": "refresh",
        "schema": "string",
        "required": false,
        "description": "If refresh is set, data will be fetched from the source application even when cached data is available",
        "example": "true"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "provides a mapped balance sheet"
      },
      {
        "statusCode": "404",
        "description": "Resource not found"
      }
    ]
  },
  {
    "url": "/balance_sheets",
    "method": "getResource",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "BalanceSheet",
    "typeScriptTag": "balanceSheet",
    "description": "Retrieves a BalanceSheet resource.",
    "parameters": [
      {
        "name": "end",
        "schema": "string",
        "required": true,
        "description": "YYYY-MM-DD",
        "example": "2022-11-30"
      },
      {
        "name": "accountingMethod",
        "schema": "string",
        "required": true,
        "description": "The Accounting Method",
        "example": "accrual"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Resource not found"
      }
    ]
  },
  {
    "url": "/bank_accounts",
    "method": "listResources",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "BankAccount",
    "typeScriptTag": "bankAccount",
    "description": "Retrieves the collection of BankAccount resources.",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "The collection page number",
        "default": 1
      },
      {
        "name": "itemsPerPage",
        "schema": "integer",
        "required": false,
        "description": "The number of items per page",
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
    "url": "/bank_accounts/{id}",
    "method": "getResource",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "BankAccount",
    "typeScriptTag": "bankAccount",
    "description": "Retrieves a BankAccount resource.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Resource identifier",
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
        "description": "Resource not found"
      }
    ]
  },
  {
    "url": "/bank_opening_balances",
    "method": "getCollection",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "BankOpeningBalance",
    "typeScriptTag": "bankOpeningBalance",
    "description": "Retrieves the collection of BankOpeningBalance resources.",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "The collection page number",
        "default": 1
      },
      {
        "name": "itemsPerPage",
        "schema": "integer",
        "required": false,
        "description": "The number of items per page",
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
    "url": "/bank_opening_balances/{id}",
    "method": "getResource",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "BankOpeningBalance",
    "typeScriptTag": "bankOpeningBalance",
    "description": "Retrieves a BankOpeningBalance resource.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Resource identifier",
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
        "description": "Resource not found"
      }
    ]
  },
  {
    "url": "/bank_reconciliations",
    "method": "getCollection",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "BankReconciliation",
    "typeScriptTag": "bankReconciliation",
    "description": "Retrieves the collection of BankReconciliation resources.",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "The collection page number",
        "default": 1
      },
      {
        "name": "itemsPerPage",
        "schema": "integer",
        "required": false,
        "description": "The number of items per page",
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
    "url": "/bank_reconciliations/{id}",
    "method": "getResource",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "BankReconciliation",
    "typeScriptTag": "bankReconciliation",
    "description": "Retrieves a BankReconciliation resource.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Resource identifier",
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
        "description": "Resource not found"
      }
    ]
  },
  {
    "url": "/bank_summaries",
    "method": "getCollection",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "BankSummary",
    "typeScriptTag": "bankSummary",
    "description": "Retrieves the collection of BankSummary resources.",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "The collection page number",
        "default": 1
      },
      {
        "name": "itemsPerPage",
        "schema": "integer",
        "required": false,
        "description": "The number of items per page",
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
    "url": "/bank_summaries/{id}",
    "method": "getResource",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "BankSummary",
    "typeScriptTag": "bankSummary",
    "description": "Retrieves a BankSummary resource.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Resource identifier",
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
        "description": "Resource not found"
      }
    ]
  },
  {
    "url": "/bank_transactions",
    "method": "listResources",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "BankTransaction",
    "typeScriptTag": "bankTransaction",
    "description": "Retrieves the collection of BankTransaction resources.",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "The collection page number",
        "default": 1
      },
      {
        "name": "itemsPerPage",
        "schema": "integer",
        "required": false,
        "description": "The number of items per page",
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
    "url": "/bank_transactions/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "BankTransaction",
    "typeScriptTag": "bankTransaction",
    "description": "Retrieves a BankTransaction resource.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Resource identifier",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Bank transaction represents spend and receive money transactions, overpayments and prepayments"
      },
      {
        "statusCode": "404",
        "description": "Resource not found"
      }
    ]
  },
  {
    "url": "/bank_transfers",
    "method": "getCollection",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "BankTransfer",
    "typeScriptTag": "bankTransfer",
    "description": "Retrieves the collection of BankTransfer resources.",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "The collection page number",
        "default": 1
      },
      {
        "name": "itemsPerPage",
        "schema": "integer",
        "required": false,
        "description": "The number of items per page",
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
    "url": "/bank_transfers/{id}",
    "method": "getResource",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "BankTransfer",
    "typeScriptTag": "bankTransfer",
    "description": "Retrieves a BankTransfer resource.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Resource identifier",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The transfer of money from one bank account to another"
      },
      {
        "statusCode": "404",
        "description": "Resource not found"
      }
    ]
  },
  {
    "url": "/batch_payments",
    "method": "listResources",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "BatchPayment",
    "typeScriptTag": "batchPayment",
    "description": "Retrieves the collection of BatchPayment resources.",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "The collection page number",
        "default": 1
      },
      {
        "name": "itemsPerPage",
        "schema": "integer",
        "required": false,
        "description": "The number of items per page",
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
    "url": "/batch_payments/{id}",
    "method": "getResource",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "BatchPayment",
    "typeScriptTag": "batchPayment",
    "description": "Retrieves a BatchPayment resource.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Resource identifier",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Batch payment represents a single payment transaction that includes multiple bills or invoices"
      },
      {
        "statusCode": "404",
        "description": "Resource not found"
      }
    ]
  },
  {
    "url": "/bill_payments",
    "method": "getCollection",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "BillPayment",
    "typeScriptTag": "billPayment",
    "description": "Retrieves the collection of BillPayment resources.",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "The collection page number",
        "default": 1
      },
      {
        "name": "itemsPerPage",
        "schema": "integer",
        "required": false,
        "description": "The number of items per page",
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
    "url": "/bill_payments",
    "method": "createResource",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "BillPayment",
    "typeScriptTag": "billPayment",
    "description": "Creates a BillPayment resource.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "description": "",
        "example": "quickbooks-321"
      },
      {
        "name": "integration",
        "schema": "string",
        "description": "",
        "example": "quickbooks"
      },
      {
        "name": "srcId",
        "schema": "string",
        "description": "",
        "example": "460000000053219"
      },
      {
        "name": "billId",
        "schema": "string",
        "description": "",
        "example": "34"
      },
      {
        "name": "vendorPaymentId",
        "schema": "string",
        "description": "",
        "example": "quickbooks-34"
      },
      {
        "name": "vendorId",
        "schema": "string",
        "description": "",
        "example": "460000000026049"
      },
      {
        "name": "vendorName",
        "schema": "string",
        "description": "",
        "example": "Bowman and Co"
      },
      {
        "name": "paymentMode",
        "schema": "string",
        "description": "",
        "example": "Stripe"
      },
      {
        "name": "txnDate",
        "schema": "string",
        "description": "",
        "example": "2013-10-07"
      },
      {
        "name": "referenceNumber",
        "schema": "string",
        "description": "",
        "example": "REF#912300"
      },
      {
        "name": "amount",
        "schema": "integer",
        "description": "",
        "example": 12500
      },
      {
        "name": "currency",
        "schema": "string",
        "description": "",
        "example": "USD"
      },
      {
        "name": "created",
        "schema": "string",
        "description": "",
        "example": "2016-12-16T00:18:42-0500"
      },
      {
        "name": "modified",
        "schema": "string",
        "description": "",
        "example": "2016-12-16T00:18:42-0500"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Invalid input"
      },
      {
        "statusCode": "422",
        "description": "Unprocessable entity"
      }
    ]
  },
  {
    "url": "/bill_payments/{id}",
    "method": "removeResource",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "BillPayment",
    "typeScriptTag": "billPayment",
    "description": "Removes the BillPayment resource.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Resource identifier",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "BillPayment resource deleted"
      },
      {
        "statusCode": "404",
        "description": "Resource not found"
      }
    ]
  },
  {
    "url": "/bill_payments/{id}",
    "method": "getResource",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "BillPayment",
    "typeScriptTag": "billPayment",
    "description": "Retrieves a BillPayment resource.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Resource identifier",
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
        "description": "Resource not found"
      }
    ]
  },
  {
    "url": "/bill_payments/{id}",
    "method": "replaceResource",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "BillPayment",
    "typeScriptTag": "billPayment",
    "description": "Replaces the BillPayment resource.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Resource identifier",
        "example": "ID"
      },
      {
        "name": "id",
        "schema": "string",
        "description": "",
        "example": "quickbooks-321"
      },
      {
        "name": "integration",
        "schema": "string",
        "description": "",
        "example": "quickbooks"
      },
      {
        "name": "srcId",
        "schema": "string",
        "description": "",
        "example": "460000000053219"
      },
      {
        "name": "billId",
        "schema": "string",
        "description": "",
        "example": "34"
      },
      {
        "name": "vendorPaymentId",
        "schema": "string",
        "description": "",
        "example": "quickbooks-34"
      },
      {
        "name": "vendorId",
        "schema": "string",
        "description": "",
        "example": "460000000026049"
      },
      {
        "name": "vendorName",
        "schema": "string",
        "description": "",
        "example": "Bowman and Co"
      },
      {
        "name": "paymentMode",
        "schema": "string",
        "description": "",
        "example": "Stripe"
      },
      {
        "name": "txnDate",
        "schema": "string",
        "description": "",
        "example": "2013-10-07"
      },
      {
        "name": "referenceNumber",
        "schema": "string",
        "description": "",
        "example": "REF#912300"
      },
      {
        "name": "amount",
        "schema": "integer",
        "description": "",
        "example": 12500
      },
      {
        "name": "currency",
        "schema": "string",
        "description": "",
        "example": "USD"
      },
      {
        "name": "created",
        "schema": "string",
        "description": "",
        "example": "2016-12-16T00:18:42-0500"
      },
      {
        "name": "modified",
        "schema": "string",
        "description": "",
        "example": "2016-12-16T00:18:42-0500"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Invalid input"
      },
      {
        "statusCode": "404",
        "description": "Resource not found"
      },
      {
        "statusCode": "422",
        "description": "Unprocessable entity"
      }
    ]
  },
  {
    "url": "/bills",
    "method": "getCollection",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Bill",
    "typeScriptTag": "bill",
    "description": "Retrieves the collection of Bill resources.",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "The collection page number",
        "default": 1
      },
      {
        "name": "itemsPerPage",
        "schema": "integer",
        "required": false,
        "description": "The number of items per page",
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
    "url": "/bills",
    "method": "createResource",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Bill",
    "typeScriptTag": "bill",
    "description": "Creates a Bill resource.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "description": "",
        "example": "quickbooks-345"
      },
      {
        "name": "integration",
        "schema": "string",
        "description": "",
        "example": "quickbooks"
      },
      {
        "name": "vendorId",
        "schema": "string",
        "description": "",
        "example": "15"
      },
      {
        "name": "vendorName",
        "schema": "string",
        "description": "",
        "example": "Acme Corp"
      },
      {
        "name": "currency",
        "schema": "string",
        "description": "",
        "example": "USD"
      },
      {
        "name": "balance",
        "schema": "integer",
        "description": "",
        "example": 70000
      },
      {
        "name": "txnDate",
        "schema": "string",
        "description": "",
        "example": "2021-05-12"
      },
      {
        "name": "totalAmount",
        "schema": "integer",
        "description": "",
        "example": 550000
      },
      {
        "name": "apAccountId",
        "schema": "string",
        "description": "",
        "example": "15"
      },
      {
        "name": "apAccountName",
        "schema": "string",
        "description": "",
        "example": "Accounts Payable"
      },
      {
        "name": "modified",
        "schema": "string",
        "description": "",
        "example": "2013-12-18T02:17:40.080Z"
      },
      {
        "name": "created",
        "schema": "string",
        "description": "",
        "example": "2013-11-18T02:17:40.080Z"
      },
      {
        "name": "srcId",
        "schema": "string",
        "description": "",
        "example": "GH2JK-67283H-YW82KHX-2883KK-KS78S"
      },
      {
        "name": "status",
        "schema": "string",
        "description": "",
        "example": "Paid"
      },
      {
        "name": "identifier",
        "schema": "string",
        "description": "",
        "example": "4560"
      },
      {
        "name": "referenceNumber",
        "schema": "string",
        "description": "",
        "example": "1234"
      },
      {
        "name": "dueDate",
        "schema": "string",
        "description": "",
        "example": "2021-05-30"
      },
      {
        "name": "subtotal",
        "schema": "integer",
        "description": "",
        "example": 65000
      },
      {
        "name": "taxAmount",
        "schema": "integer",
        "description": "",
        "example": 12000
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Invalid input"
      },
      {
        "statusCode": "422",
        "description": "Unprocessable entity"
      }
    ]
  },
  {
    "url": "/bills/{id}",
    "method": "removeResource",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Bill",
    "typeScriptTag": "bill",
    "description": "Removes the Bill resource.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Resource identifier",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Bill resource deleted"
      },
      {
        "statusCode": "404",
        "description": "Resource not found"
      }
    ]
  },
  {
    "url": "/bills/{id}",
    "method": "getResource",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Bill",
    "typeScriptTag": "bill",
    "description": "Retrieves a Bill resource.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Resource identifier",
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
        "description": "Resource not found"
      }
    ]
  },
  {
    "url": "/bills/{id}",
    "method": "updateResource",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Bill",
    "typeScriptTag": "bill",
    "description": "Replaces the Bill resource.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Resource identifier",
        "example": "ID"
      },
      {
        "name": "id",
        "schema": "string",
        "description": "",
        "example": "quickbooks-345"
      },
      {
        "name": "integration",
        "schema": "string",
        "description": "",
        "example": "quickbooks"
      },
      {
        "name": "vendorId",
        "schema": "string",
        "description": "",
        "example": "15"
      },
      {
        "name": "vendorName",
        "schema": "string",
        "description": "",
        "example": "Acme Corp"
      },
      {
        "name": "currency",
        "schema": "string",
        "description": "",
        "example": "USD"
      },
      {
        "name": "balance",
        "schema": "integer",
        "description": "",
        "example": 70000
      },
      {
        "name": "txnDate",
        "schema": "string",
        "description": "",
        "example": "2021-05-12"
      },
      {
        "name": "totalAmount",
        "schema": "integer",
        "description": "",
        "example": 550000
      },
      {
        "name": "apAccountId",
        "schema": "string",
        "description": "",
        "example": "15"
      },
      {
        "name": "apAccountName",
        "schema": "string",
        "description": "",
        "example": "Accounts Payable"
      },
      {
        "name": "modified",
        "schema": "string",
        "description": "",
        "example": "2013-12-18T02:17:40.080Z"
      },
      {
        "name": "created",
        "schema": "string",
        "description": "",
        "example": "2013-11-18T02:17:40.080Z"
      },
      {
        "name": "srcId",
        "schema": "string",
        "description": "",
        "example": "GH2JK-67283H-YW82KHX-2883KK-KS78S"
      },
      {
        "name": "status",
        "schema": "string",
        "description": "",
        "example": "Paid"
      },
      {
        "name": "identifier",
        "schema": "string",
        "description": "",
        "example": "4560"
      },
      {
        "name": "referenceNumber",
        "schema": "string",
        "description": "",
        "example": "1234"
      },
      {
        "name": "dueDate",
        "schema": "string",
        "description": "",
        "example": "2021-05-30"
      },
      {
        "name": "subtotal",
        "schema": "integer",
        "description": "",
        "example": 65000
      },
      {
        "name": "taxAmount",
        "schema": "integer",
        "description": "",
        "example": 12000
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Invalid input"
      },
      {
        "statusCode": "404",
        "description": "Resource not found"
      },
      {
        "statusCode": "422",
        "description": "Unprocessable entity"
      }
    ]
  },
  {
    "url": "/blog_postings",
    "method": "getCollection",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "BlogPosting",
    "typeScriptTag": "blogPosting",
    "description": "Retrieves the collection of BlogPosting resources.",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "The collection page number",
        "default": 1
      },
      {
        "name": "itemsPerPage",
        "schema": "integer",
        "required": false,
        "description": "The number of items per page",
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
    "url": "/blog_postings/{id}",
    "method": "getResource",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "BlogPosting",
    "typeScriptTag": "blogPosting",
    "description": "Retrieves a BlogPosting resource.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Resource identifier",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A blog post."
      },
      {
        "statusCode": "404",
        "description": "Resource not found"
      }
    ]
  },
  {
    "url": "/blogs",
    "method": "getCollection",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Blog",
    "typeScriptTag": "blog",
    "description": "Retrieves the collection of Blog resources.",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "The collection page number",
        "default": 1
      },
      {
        "name": "itemsPerPage",
        "schema": "integer",
        "required": false,
        "description": "The number of items per page",
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
    "url": "/blogs/{id}",
    "method": "getResource",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Blog",
    "typeScriptTag": "blog",
    "description": "Retrieves a Blog resource.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Resource identifier",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A blog."
      },
      {
        "statusCode": "404",
        "description": "Resource not found"
      }
    ]
  },
  {
    "url": "/budget_summaries/{id}",
    "method": "getResource",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "BudgetSummary",
    "typeScriptTag": "budgetSummary",
    "description": "Retrieves a BudgetSummary resource.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Resource identifier",
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
        "description": "Resource not found"
      }
    ]
  },
  {
    "url": "/budget_summary",
    "method": "getCollection",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "BudgetSummary",
    "typeScriptTag": "budgetSummary",
    "description": "Retrieves the collection of BudgetSummary resources.",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "The collection page number",
        "default": 1
      },
      {
        "name": "itemsPerPage",
        "schema": "integer",
        "required": false,
        "description": "The number of items per page",
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
    "url": "/calls",
    "method": "getCollection",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Call",
    "typeScriptTag": "call",
    "description": "Retrieves the collection of Call resources.",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "The collection page number",
        "default": 1
      },
      {
        "name": "itemsPerPage",
        "schema": "integer",
        "required": false,
        "description": "The number of items per page",
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
    "url": "/calls/{id}",
    "method": "getResource",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Call",
    "typeScriptTag": "call",
    "description": "Retrieves a Call resource.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Resource identifier",
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
        "description": "Resource not found"
      }
    ]
  },
  {
    "url": "/campaign_reports",
    "method": "getCollection",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "CampaignReport",
    "typeScriptTag": "campaignReport",
    "description": "Retrieves the collection of CampaignReport resources.",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "The collection page number",
        "default": 1
      },
      {
        "name": "itemsPerPage",
        "schema": "integer",
        "required": false,
        "description": "The number of items per page",
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
    "url": "/campaign_reports/{id}",
    "method": "getResource",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "CampaignReport",
    "typeScriptTag": "campaignReport",
    "description": "Retrieves a CampaignReport resource.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Resource identifier",
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
        "description": "Resource not found"
      }
    ]
  },
  {
    "url": "/campaigns",
    "method": "getCollection",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Campaign",
    "typeScriptTag": "campaign",
    "description": "Retrieves the collection of Campaign resources.",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "The collection page number",
        "default": 1
      },
      {
        "name": "itemsPerPage",
        "schema": "integer",
        "required": false,
        "description": "The number of items per page",
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
    "url": "/campaigns/{id}",
    "method": "getResource",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Campaign",
    "typeScriptTag": "campaign",
    "description": "Retrieves a Campaign resource.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Resource identifier",
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
        "description": "Resource not found"
      }
    ]
  },
  {
    "url": "/charges",
    "method": "getCollection",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Charge",
    "typeScriptTag": "charge",
    "description": "Retrieves the collection of Charge resources.",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "The collection page number",
        "default": 1
      },
      {
        "name": "itemsPerPage",
        "schema": "integer",
        "required": false,
        "description": "The number of items per page",
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
    "url": "/charges/{id}",
    "method": "getResource",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Charge",
    "typeScriptTag": "charge",
    "description": "Retrieves a Charge resource.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Resource identifier",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Charge represents charges made to a debit or credit card"
      },
      {
        "statusCode": "404",
        "description": "Resource not found"
      }
    ]
  },
  {
    "url": "/clients",
    "method": "getCollection",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Client",
    "typeScriptTag": "client",
    "description": "Retrieves the collection of Client resources.",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "The collection page number",
        "default": 1
      },
      {
        "name": "itemsPerPage",
        "schema": "integer",
        "required": false,
        "description": "The number of items per page",
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
    "url": "/clients/{id}",
    "method": "getResource",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Client",
    "typeScriptTag": "client",
    "description": "Retrieves a Client resource.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Resource identifier",
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
        "description": "Resource not found"
      }
    ]
  },
  {
    "url": "/companies",
    "method": "getCollection",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Company",
    "typeScriptTag": "company",
    "description": "Retrieves the collection of Company resources.",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "The collection page number",
        "default": 1
      },
      {
        "name": "itemsPerPage",
        "schema": "integer",
        "required": false,
        "description": "The number of items per page",
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
    "url": "/companies/{id}",
    "method": "getResource",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Company",
    "typeScriptTag": "company",
    "description": "Retrieves a Company resource.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Resource identifier",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Company represents any type of organization"
      },
      {
        "statusCode": "404",
        "description": "Resource not found"
      }
    ]
  },
  {
    "url": "/contact_groups",
    "method": "getCollection",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "ContactGroup",
    "typeScriptTag": "contactGroup",
    "description": "Retrieves the collection of ContactGroup resources.",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "The collection page number",
        "default": 1
      },
      {
        "name": "itemsPerPage",
        "schema": "integer",
        "required": false,
        "description": "The number of items per page",
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
    "url": "/contact_groups/{id}",
    "method": "getResource",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "ContactGroup",
    "typeScriptTag": "contactGroup",
    "description": "Retrieves a ContactGroup resource.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Resource identifier",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Contact groups represent contacts that are segmented into groups based on specific characteristics"
      },
      {
        "statusCode": "404",
        "description": "Resource not found"
      }
    ]
  },
  {
    "url": "/contracts",
    "method": "getCollection",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Contract",
    "typeScriptTag": "contract",
    "description": "Retrieves the collection of Contract resources.",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "The collection page number",
        "default": 1
      },
      {
        "name": "itemsPerPage",
        "schema": "integer",
        "required": false,
        "description": "The number of items per page",
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
    "url": "/contracts/{id}",
    "method": "getResource",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Contract",
    "typeScriptTag": "contract",
    "description": "Retrieves a Contract resource.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Resource identifier",
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
        "description": "Resource not found"
      }
    ]
  },
  {
    "url": "/conversion",
    "method": "listDocuments",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Conversion",
    "typeScriptTag": "conversion",
    "description": "list converted documents",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "The collection page number",
        "default": 1
      },
      {
        "name": "itemsPerPage",
        "schema": "integer",
        "required": false,
        "description": "The number of items per page",
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
    "url": "/conversion",
    "method": "documentFormat",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Conversion",
    "typeScriptTag": "conversion",
    "description": "Converts a document from one format to another",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "type",
        "schema": "string",
        "description": ""
      },
      {
        "name": "url",
        "schema": "string",
        "description": ""
      },
      {
        "name": "status",
        "schema": "string",
        "description": ""
      },
      {
        "name": "file",
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
        "statusCode": "400",
        "description": "Invalid input"
      },
      {
        "statusCode": "422",
        "description": "Unprocessable entity"
      }
    ]
  },
  {
    "url": "/conversion/{id}",
    "method": "getResult",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Conversion",
    "typeScriptTag": "conversion",
    "description": "Retrieves conversion results",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "conversion job identifier",
        "example": 42
      },
      {
        "name": "format",
        "schema": "string",
        "required": true,
        "description": "document format",
        "example": "data"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Resource not found"
      }
    ]
  },
  {
    "url": "/credit_notes",
    "method": "getCollection",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "CreditNote",
    "typeScriptTag": "creditNote",
    "description": "Retrieves the collection of CreditNote resources.",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "The collection page number",
        "default": 1
      },
      {
        "name": "itemsPerPage",
        "schema": "integer",
        "required": false,
        "description": "The number of items per page",
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
    "url": "/credit_notes",
    "method": "createResource",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "CreditNote",
    "typeScriptTag": "creditNote",
    "description": "Creates a CreditNote resource.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "description": "",
        "example": "quickbooks-726"
      },
      {
        "name": "integration",
        "schema": "string",
        "description": "",
        "example": "quickbooks"
      },
      {
        "name": "srcId",
        "schema": "string",
        "description": "",
        "example": "90300000072369"
      },
      {
        "name": "creditnoteNumber",
        "schema": "string",
        "description": "",
        "example": "CN-29"
      },
      {
        "name": "date",
        "schema": "string",
        "description": "",
        "example": "2016-06-05"
      },
      {
        "name": "status",
        "schema": "string",
        "description": "",
        "example": "open"
      },
      {
        "name": "customerId",
        "schema": "string",
        "description": "",
        "example": "903000000000099"
      },
      {
        "name": "customerName",
        "schema": "string",
        "description": "",
        "example": "Bowman Furniture"
      },
      {
        "name": "referenceNumber",
        "schema": "string",
        "description": "",
        "example": "INV-384"
      },
      {
        "name": "totalAmount",
        "schema": "string",
        "description": "",
        "example": "400"
      },
      {
        "name": "balance",
        "schema": "integer",
        "description": "",
        "example": 10
      },
      {
        "name": "currency",
        "schema": "string",
        "description": "",
        "example": "USD"
      },
      {
        "name": "notes",
        "schema": "string",
        "description": "",
        "example": "Offer for the referral"
      },
      {
        "name": "created",
        "schema": "string",
        "description": "",
        "example": "2013-11-18T02:17:40.080Z"
      },
      {
        "name": "modified",
        "schema": "string",
        "description": "",
        "example": "2013-11-18T02:17:40.080Z"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Invalid input"
      },
      {
        "statusCode": "422",
        "description": "Unprocessable entity"
      }
    ]
  },
  {
    "url": "/credit_notes/{id}",
    "method": "removeResource",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "CreditNote",
    "typeScriptTag": "creditNote",
    "description": "Removes the CreditNote resource.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Resource identifier",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "CreditNote resource deleted"
      },
      {
        "statusCode": "404",
        "description": "Resource not found"
      }
    ]
  },
  {
    "url": "/credit_notes/{id}",
    "method": "getResource",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "CreditNote",
    "typeScriptTag": "creditNote",
    "description": "Retrieves a CreditNote resource.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Resource identifier",
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
        "description": "Resource not found"
      }
    ]
  },
  {
    "url": "/credit_notes/{id}",
    "method": "replaceResource",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "CreditNote",
    "typeScriptTag": "creditNote",
    "description": "Replaces the CreditNote resource.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Resource identifier",
        "example": "ID"
      },
      {
        "name": "id",
        "schema": "string",
        "description": "",
        "example": "quickbooks-726"
      },
      {
        "name": "integration",
        "schema": "string",
        "description": "",
        "example": "quickbooks"
      },
      {
        "name": "srcId",
        "schema": "string",
        "description": "",
        "example": "90300000072369"
      },
      {
        "name": "creditnoteNumber",
        "schema": "string",
        "description": "",
        "example": "CN-29"
      },
      {
        "name": "date",
        "schema": "string",
        "description": "",
        "example": "2016-06-05"
      },
      {
        "name": "status",
        "schema": "string",
        "description": "",
        "example": "open"
      },
      {
        "name": "customerId",
        "schema": "string",
        "description": "",
        "example": "903000000000099"
      },
      {
        "name": "customerName",
        "schema": "string",
        "description": "",
        "example": "Bowman Furniture"
      },
      {
        "name": "referenceNumber",
        "schema": "string",
        "description": "",
        "example": "INV-384"
      },
      {
        "name": "totalAmount",
        "schema": "string",
        "description": "",
        "example": "400"
      },
      {
        "name": "balance",
        "schema": "integer",
        "description": "",
        "example": 10
      },
      {
        "name": "currency",
        "schema": "string",
        "description": "",
        "example": "USD"
      },
      {
        "name": "notes",
        "schema": "string",
        "description": "",
        "example": "Offer for the referral"
      },
      {
        "name": "created",
        "schema": "string",
        "description": "",
        "example": "2013-11-18T02:17:40.080Z"
      },
      {
        "name": "modified",
        "schema": "string",
        "description": "",
        "example": "2013-11-18T02:17:40.080Z"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Invalid input"
      },
      {
        "statusCode": "404",
        "description": "Resource not found"
      },
      {
        "statusCode": "422",
        "description": "Unprocessable entity"
      }
    ]
  },
  {
    "url": "/customer_opening_balances",
    "method": "getCollection",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "CustomerOpeningBalance",
    "typeScriptTag": "customerOpeningBalance",
    "description": "Retrieves the collection of CustomerOpeningBalance resources.",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "The collection page number",
        "default": 1
      },
      {
        "name": "itemsPerPage",
        "schema": "integer",
        "required": false,
        "description": "The number of items per page",
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
    "url": "/customer_opening_balances/{id}",
    "method": "getResource",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "CustomerOpeningBalance",
    "typeScriptTag": "customerOpeningBalance",
    "description": "Retrieves a CustomerOpeningBalance resource.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Resource identifier",
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
        "description": "Resource not found"
      }
    ]
  },
  {
    "url": "/customers",
    "method": "getCollection",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Customer",
    "typeScriptTag": "customer",
    "description": "Retrieves the collection of Customer resources.",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "The collection page number",
        "default": 1
      },
      {
        "name": "itemsPerPage",
        "schema": "integer",
        "required": false,
        "description": "The number of items per page",
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
    "url": "/customers",
    "method": "createResource",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Customer",
    "typeScriptTag": "customer",
    "description": "Creates a Customer resource.",
    "parameters": [
      {
        "name": "title",
        "schema": "string",
        "description": "",
        "example": "Manager"
      },
      {
        "name": "description",
        "schema": "string",
        "description": "",
        "example": "Great customer"
      },
      {
        "name": "id",
        "schema": "string",
        "description": "",
        "example": "stripe-5050"
      },
      {
        "name": "integration",
        "schema": "string",
        "description": "",
        "example": "quickbooks"
      },
      {
        "name": "srcId",
        "schema": "string",
        "description": "",
        "example": "50"
      },
      {
        "name": "email",
        "schema": "string",
        "description": "",
        "example": "janedoe@email.com"
      },
      {
        "name": "name",
        "schema": "string",
        "description": "",
        "example": "Jane Doe"
      },
      {
        "name": "givenName",
        "schema": "string",
        "description": "",
        "example": "Jane"
      },
      {
        "name": "familyName",
        "schema": "string",
        "description": "",
        "example": "Doe"
      },
      {
        "name": "companyName",
        "schema": "string",
        "description": "",
        "example": "Acme Corp."
      },
      {
        "name": "fullyQualifiedName",
        "schema": "string",
        "description": "",
        "example": "Acme Corporation"
      },
      {
        "name": "address",
        "schema": "string",
        "description": "",
        "example": "708 Woodland Avenue"
      },
      {
        "name": "addressLine2",
        "schema": "string",
        "description": "",
        "example": "Unit 105"
      },
      {
        "name": "city",
        "schema": "string",
        "description": "",
        "example": "St Paul"
      },
      {
        "name": "postalCode",
        "schema": "string",
        "description": "",
        "example": "99660"
      },
      {
        "name": "country",
        "schema": "string",
        "description": "",
        "example": "United States"
      },
      {
        "name": "billingAddress",
        "schema": "string",
        "description": "",
        "example": "4348 Candlelight Drive"
      },
      {
        "name": "billingAddressLine2",
        "schema": "string",
        "description": "",
        "example": "Apartment 78"
      },
      {
        "name": "billingCity",
        "schema": "string",
        "description": "",
        "example": "Panama City"
      },
      {
        "name": "billingState",
        "schema": "string",
        "description": "",
        "example": "Florida"
      },
      {
        "name": "billingPostalCode",
        "schema": "string",
        "description": "",
        "example": "32417"
      },
      {
        "name": "billingCountry",
        "schema": "string",
        "description": "",
        "example": "United States"
      },
      {
        "name": "phone",
        "schema": "string",
        "description": "",
        "example": "281-381-4241"
      },
      {
        "name": "mobile",
        "schema": "string",
        "description": "",
        "example": "786-258-0182"
      },
      {
        "name": "fax",
        "schema": "string",
        "description": "",
        "example": "281-381-4255"
      },
      {
        "name": "ddi",
        "schema": "string",
        "description": "",
        "example": "5050"
      },
      {
        "name": "balance",
        "schema": "integer",
        "description": "",
        "example": 19999
      },
      {
        "name": "currency",
        "schema": "string",
        "description": "",
        "example": "USD"
      },
      {
        "name": "taxable",
        "schema": "boolean",
        "description": "",
        "example": true
      },
      {
        "name": "customerAccountStatus",
        "schema": "string",
        "description": "",
        "example": "Enabled"
      },
      {
        "name": "monthlyRecurringRevenue",
        "schema": "integer",
        "description": "",
        "example": 4500000
      },
      {
        "name": "netMonthlyRecurringRevenue",
        "schema": "integer",
        "description": "",
        "example": 2500000
      },
      {
        "name": "created",
        "schema": "string",
        "description": "",
        "example": "2013-11-18T02:17:40.080Z"
      },
      {
        "name": "modified",
        "schema": "string",
        "description": "",
        "example": "2013-11-22T02:17:40.080Z"
      },
      {
        "name": "department",
        "schema": "string",
        "description": "",
        "example": "Administrative office"
      },
      {
        "name": "customerOwner",
        "schema": "string",
        "description": "",
        "example": "josh_jameson"
      },
      {
        "name": "totalSpent",
        "schema": "integer",
        "description": "",
        "example": 76000
      },
      {
        "name": "acceptsMarketing",
        "schema": "boolean",
        "description": "",
        "example": true
      },
      {
        "name": "username",
        "schema": "string",
        "description": "",
        "example": "jane_doe123"
      },
      {
        "name": "taxType",
        "schema": "string",
        "description": "",
        "example": "Global"
      },
      {
        "name": "bankAccountName",
        "schema": "string",
        "description": "",
        "example": "Business Bank Account"
      },
      {
        "name": "bankAccountNumber",
        "schema": "string",
        "description": "",
        "example": "123654"
      },
      {
        "name": "termId",
        "schema": "string",
        "description": "",
        "example": "1d80716b-427e-4cad-80c6-c4b3a18eb23d"
      },
      {
        "name": "termDays",
        "schema": "integer",
        "description": "",
        "example": 15
      },
      {
        "name": "termType",
        "schema": "string",
        "description": "",
        "example": "DAYSAFTERBILLDATE"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Invalid input"
      },
      {
        "statusCode": "422",
        "description": "Unprocessable entity"
      }
    ]
  },
  {
    "url": "/customers/{id}",
    "method": "removeResource",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Customer",
    "typeScriptTag": "customer",
    "description": "Removes the Customer resource.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Resource identifier",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Customer resource deleted"
      },
      {
        "statusCode": "404",
        "description": "Resource not found"
      }
    ]
  },
  {
    "url": "/customers/{id}",
    "method": "getResource",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Customer",
    "typeScriptTag": "customer",
    "description": "Retrieves a Customer resource.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Resource identifier",
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
        "description": "Resource not found"
      }
    ]
  },
  {
    "url": "/customers/{id}",
    "method": "replaceResource",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Customer",
    "typeScriptTag": "customer",
    "description": "Replaces the Customer resource.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Resource identifier",
        "example": "ID"
      },
      {
        "name": "title",
        "schema": "string",
        "description": "",
        "example": "Manager"
      },
      {
        "name": "description",
        "schema": "string",
        "description": "",
        "example": "Great customer"
      },
      {
        "name": "id",
        "schema": "string",
        "description": "",
        "example": "stripe-5050"
      },
      {
        "name": "integration",
        "schema": "string",
        "description": "",
        "example": "quickbooks"
      },
      {
        "name": "srcId",
        "schema": "string",
        "description": "",
        "example": "50"
      },
      {
        "name": "email",
        "schema": "string",
        "description": "",
        "example": "janedoe@email.com"
      },
      {
        "name": "name",
        "schema": "string",
        "description": "",
        "example": "Jane Doe"
      },
      {
        "name": "givenName",
        "schema": "string",
        "description": "",
        "example": "Jane"
      },
      {
        "name": "familyName",
        "schema": "string",
        "description": "",
        "example": "Doe"
      },
      {
        "name": "companyName",
        "schema": "string",
        "description": "",
        "example": "Acme Corp."
      },
      {
        "name": "fullyQualifiedName",
        "schema": "string",
        "description": "",
        "example": "Acme Corporation"
      },
      {
        "name": "address",
        "schema": "string",
        "description": "",
        "example": "708 Woodland Avenue"
      },
      {
        "name": "addressLine2",
        "schema": "string",
        "description": "",
        "example": "Unit 105"
      },
      {
        "name": "city",
        "schema": "string",
        "description": "",
        "example": "St Paul"
      },
      {
        "name": "postalCode",
        "schema": "string",
        "description": "",
        "example": "99660"
      },
      {
        "name": "country",
        "schema": "string",
        "description": "",
        "example": "United States"
      },
      {
        "name": "billingAddress",
        "schema": "string",
        "description": "",
        "example": "4348 Candlelight Drive"
      },
      {
        "name": "billingAddressLine2",
        "schema": "string",
        "description": "",
        "example": "Apartment 78"
      },
      {
        "name": "billingCity",
        "schema": "string",
        "description": "",
        "example": "Panama City"
      },
      {
        "name": "billingState",
        "schema": "string",
        "description": "",
        "example": "Florida"
      },
      {
        "name": "billingPostalCode",
        "schema": "string",
        "description": "",
        "example": "32417"
      },
      {
        "name": "billingCountry",
        "schema": "string",
        "description": "",
        "example": "United States"
      },
      {
        "name": "phone",
        "schema": "string",
        "description": "",
        "example": "281-381-4241"
      },
      {
        "name": "mobile",
        "schema": "string",
        "description": "",
        "example": "786-258-0182"
      },
      {
        "name": "fax",
        "schema": "string",
        "description": "",
        "example": "281-381-4255"
      },
      {
        "name": "ddi",
        "schema": "string",
        "description": "",
        "example": "5050"
      },
      {
        "name": "balance",
        "schema": "integer",
        "description": "",
        "example": 19999
      },
      {
        "name": "currency",
        "schema": "string",
        "description": "",
        "example": "USD"
      },
      {
        "name": "taxable",
        "schema": "boolean",
        "description": "",
        "example": true
      },
      {
        "name": "customerAccountStatus",
        "schema": "string",
        "description": "",
        "example": "Enabled"
      },
      {
        "name": "monthlyRecurringRevenue",
        "schema": "integer",
        "description": "",
        "example": 4500000
      },
      {
        "name": "netMonthlyRecurringRevenue",
        "schema": "integer",
        "description": "",
        "example": 2500000
      },
      {
        "name": "created",
        "schema": "string",
        "description": "",
        "example": "2013-11-18T02:17:40.080Z"
      },
      {
        "name": "modified",
        "schema": "string",
        "description": "",
        "example": "2013-11-22T02:17:40.080Z"
      },
      {
        "name": "department",
        "schema": "string",
        "description": "",
        "example": "Administrative office"
      },
      {
        "name": "customerOwner",
        "schema": "string",
        "description": "",
        "example": "josh_jameson"
      },
      {
        "name": "totalSpent",
        "schema": "integer",
        "description": "",
        "example": 76000
      },
      {
        "name": "acceptsMarketing",
        "schema": "boolean",
        "description": "",
        "example": true
      },
      {
        "name": "username",
        "schema": "string",
        "description": "",
        "example": "jane_doe123"
      },
      {
        "name": "taxType",
        "schema": "string",
        "description": "",
        "example": "Global"
      },
      {
        "name": "bankAccountName",
        "schema": "string",
        "description": "",
        "example": "Business Bank Account"
      },
      {
        "name": "bankAccountNumber",
        "schema": "string",
        "description": "",
        "example": "123654"
      },
      {
        "name": "termId",
        "schema": "string",
        "description": "",
        "example": "1d80716b-427e-4cad-80c6-c4b3a18eb23d"
      },
      {
        "name": "termDays",
        "schema": "integer",
        "description": "",
        "example": 15
      },
      {
        "name": "termType",
        "schema": "string",
        "description": "",
        "example": "DAYSAFTERBILLDATE"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Invalid input"
      },
      {
        "statusCode": "404",
        "description": "Resource not found"
      },
      {
        "statusCode": "422",
        "description": "Unprocessable entity"
      }
    ]
  },
  {
    "url": "/data_sync",
    "method": "getResource",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "DataSync",
    "typeScriptTag": "dataSync",
    "description": "Syncs the latest data from a connected application and returns a success or failure message.",
    "parameters": [
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "The key of the application you would like to sync. ",
        "example": "quickbooks"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Resource not found"
      }
    ]
  },
  {
    "url": "/deals",
    "method": "getCollection",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Deal",
    "typeScriptTag": "deal",
    "description": "Retrieves the collection of Deal resources.",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "The collection page number",
        "default": 1
      },
      {
        "name": "itemsPerPage",
        "schema": "integer",
        "required": false,
        "description": "The number of items per page",
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
    "url": "/deals",
    "method": "createResource",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Deal",
    "typeScriptTag": "deal",
    "description": "Creates a Deal resource.",
    "parameters": [
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "id",
        "schema": "string",
        "description": "",
        "example": "quickbooks-726"
      },
      {
        "name": "integration",
        "schema": "string",
        "description": "",
        "example": "quickbooks"
      },
      {
        "name": "srcId",
        "schema": "string",
        "description": "",
        "example": "706f68c5-46b2-43d8-9aa8-41d1cc2a317f"
      },
      {
        "name": "ownerId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "ownerName",
        "schema": "string",
        "description": "",
        "example": "Dave Simpson"
      },
      {
        "name": "stage",
        "schema": "string",
        "description": "",
        "example": "decision"
      },
      {
        "name": "dealName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "prospectId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "prospectName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "expectedRevenue",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "currency",
        "schema": "string",
        "description": "",
        "example": "USD"
      },
      {
        "name": "created",
        "schema": "string",
        "description": "",
        "example": "2021-07-28 00:00:00"
      },
      {
        "name": "closed",
        "schema": "string",
        "description": "",
        "example": "2021-07-28 00:00:00"
      },
      {
        "name": "associatedContactIds",
        "schema": "array",
        "description": ""
      },
      {
        "name": "associatedCompanyIds",
        "schema": "array",
        "description": ""
      },
      {
        "name": "numAssociatedContacts",
        "schema": "integer",
        "description": "",
        "example": 5
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Invalid input"
      },
      {
        "statusCode": "422",
        "description": "Unprocessable entity"
      }
    ]
  },
  {
    "url": "/deals/{id}",
    "method": "removeResource",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Deal",
    "typeScriptTag": "deal",
    "description": "Removes the Deal resource.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Resource identifier",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Deal resource deleted"
      },
      {
        "statusCode": "404",
        "description": "Resource not found"
      }
    ]
  },
  {
    "url": "/deals/{id}",
    "method": "getResource",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Deal",
    "typeScriptTag": "deal",
    "description": "Retrieves a Deal resource.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Resource identifier",
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
        "description": "Resource not found"
      }
    ]
  },
  {
    "url": "/deals/{id}",
    "method": "updateResource",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Deal",
    "typeScriptTag": "deal",
    "description": "Replaces the Deal resource.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Resource identifier",
        "example": "ID"
      },
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "id",
        "schema": "string",
        "description": "",
        "example": "quickbooks-726"
      },
      {
        "name": "integration",
        "schema": "string",
        "description": "",
        "example": "quickbooks"
      },
      {
        "name": "srcId",
        "schema": "string",
        "description": "",
        "example": "706f68c5-46b2-43d8-9aa8-41d1cc2a317f"
      },
      {
        "name": "ownerId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "ownerName",
        "schema": "string",
        "description": "",
        "example": "Dave Simpson"
      },
      {
        "name": "stage",
        "schema": "string",
        "description": "",
        "example": "decision"
      },
      {
        "name": "dealName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "prospectId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "prospectName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "expectedRevenue",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "currency",
        "schema": "string",
        "description": "",
        "example": "USD"
      },
      {
        "name": "created",
        "schema": "string",
        "description": "",
        "example": "2021-07-28 00:00:00"
      },
      {
        "name": "closed",
        "schema": "string",
        "description": "",
        "example": "2021-07-28 00:00:00"
      },
      {
        "name": "associatedContactIds",
        "schema": "array",
        "description": ""
      },
      {
        "name": "associatedCompanyIds",
        "schema": "array",
        "description": ""
      },
      {
        "name": "numAssociatedContacts",
        "schema": "integer",
        "description": "",
        "example": 5
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Invalid input"
      },
      {
        "statusCode": "404",
        "description": "Resource not found"
      },
      {
        "statusCode": "422",
        "description": "Unprocessable entity"
      }
    ]
  },
  {
    "url": "/departments",
    "method": "getCollection",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Department",
    "typeScriptTag": "department",
    "description": "Retrieves the collection of Department resources.",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "The collection page number",
        "default": 1
      },
      {
        "name": "itemsPerPage",
        "schema": "integer",
        "required": false,
        "description": "The number of items per page",
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
    "url": "/departments/{id}",
    "method": "getResource",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Department",
    "typeScriptTag": "department",
    "description": "Retrieves a Department resource.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Resource identifier",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A relationship between an organization and a department of that organization, also described as an organization (allowing different urls, logos, opening hours). For example: a store with a pharmacy, or a bakery with a cafe."
      },
      {
        "statusCode": "404",
        "description": "Resource not found"
      }
    ]
  },
  {
    "url": "/employees",
    "method": "getCollection",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Employee",
    "typeScriptTag": "employee",
    "description": "Retrieves the collection of Employee resources.",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "The collection page number",
        "default": 1
      },
      {
        "name": "itemsPerPage",
        "schema": "integer",
        "required": false,
        "description": "The number of items per page",
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
    "url": "/employees",
    "method": "createResource",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Employee",
    "typeScriptTag": "employee",
    "description": "Creates a Employee resource.",
    "parameters": [
      {
        "name": "title",
        "schema": "string",
        "description": "",
        "example": "Mr"
      },
      {
        "name": "id",
        "schema": "string",
        "description": "",
        "example": "quickbooks-726"
      },
      {
        "name": "integration",
        "schema": "string",
        "description": "",
        "example": "quickbooks"
      },
      {
        "name": "srcId",
        "schema": "string",
        "description": "",
        "example": "706f68c5-46b2-43d8-9aa8-41d1cc2a317f"
      },
      {
        "name": "firstName",
        "schema": "string",
        "description": "",
        "example": "Steve"
      },
      {
        "name": "lastName",
        "schema": "string",
        "description": "",
        "example": "James"
      },
      {
        "name": "fullName",
        "schema": "string",
        "description": "",
        "example": "Steve James"
      },
      {
        "name": "active",
        "schema": "boolean",
        "description": "",
        "example": true
      },
      {
        "name": "primaryPhone",
        "schema": "string",
        "description": "",
        "example": "4168769854"
      },
      {
        "name": "primaryAddr",
        "schema": "string",
        "description": "",
        "example": "451 Lincoln street"
      },
      {
        "name": "primaryAddrCity",
        "schema": "string",
        "description": "",
        "example": "Toronto"
      },
      {
        "name": "primaryAddrPostalcode",
        "schema": "string",
        "description": "",
        "example": "L8H Y5F"
      },
      {
        "name": "primaryAddrState",
        "schema": "string",
        "description": "",
        "example": "California"
      },
      {
        "name": "created",
        "schema": "string",
        "description": "",
        "example": "2021-06-24 22:35:07"
      },
      {
        "name": "modified",
        "schema": "string",
        "description": "",
        "example": "2021-06-24 22:35:07"
      },
      {
        "name": "link",
        "schema": "string",
        "description": "",
        "example": "steve.james.com"
      },
      {
        "name": "email",
        "schema": "string",
        "description": "",
        "example": "steve.james@gmail.com"
      },
      {
        "name": "mobilePhone",
        "schema": "string",
        "description": "",
        "example": "4167854398"
      },
      {
        "name": "payRate",
        "schema": "string",
        "description": "",
        "example": "20"
      },
      {
        "name": "gender",
        "schema": "string",
        "description": "",
        "example": "Female"
      },
      {
        "name": "birthDate",
        "schema": "string",
        "description": "",
        "example": "2021-06-24"
      },
      {
        "name": "hiredDate",
        "schema": "string",
        "description": "",
        "example": "2021-06-24"
      },
      {
        "name": "employeeNumber",
        "schema": "string",
        "description": "",
        "example": "Female"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Someone working for this organization."
      },
      {
        "statusCode": "400",
        "description": "Invalid input"
      },
      {
        "statusCode": "422",
        "description": "Unprocessable entity"
      }
    ]
  },
  {
    "url": "/employees/{id}",
    "method": "removeResource",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Employee",
    "typeScriptTag": "employee",
    "description": "Removes the Employee resource.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Resource identifier",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Employee resource deleted"
      },
      {
        "statusCode": "404",
        "description": "Resource not found"
      }
    ]
  },
  {
    "url": "/employees/{id}",
    "method": "getResource",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Employee",
    "typeScriptTag": "employee",
    "description": "Retrieves a Employee resource.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Resource identifier",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Someone working for this organization."
      },
      {
        "statusCode": "404",
        "description": "Resource not found"
      }
    ]
  },
  {
    "url": "/employees/{id}",
    "method": "replaceResource",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Employee",
    "typeScriptTag": "employee",
    "description": "Replaces the Employee resource.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Resource identifier",
        "example": "ID"
      },
      {
        "name": "title",
        "schema": "string",
        "description": "",
        "example": "Mr"
      },
      {
        "name": "id",
        "schema": "string",
        "description": "",
        "example": "quickbooks-726"
      },
      {
        "name": "integration",
        "schema": "string",
        "description": "",
        "example": "quickbooks"
      },
      {
        "name": "srcId",
        "schema": "string",
        "description": "",
        "example": "706f68c5-46b2-43d8-9aa8-41d1cc2a317f"
      },
      {
        "name": "firstName",
        "schema": "string",
        "description": "",
        "example": "Steve"
      },
      {
        "name": "lastName",
        "schema": "string",
        "description": "",
        "example": "James"
      },
      {
        "name": "fullName",
        "schema": "string",
        "description": "",
        "example": "Steve James"
      },
      {
        "name": "active",
        "schema": "boolean",
        "description": "",
        "example": true
      },
      {
        "name": "primaryPhone",
        "schema": "string",
        "description": "",
        "example": "4168769854"
      },
      {
        "name": "primaryAddr",
        "schema": "string",
        "description": "",
        "example": "451 Lincoln street"
      },
      {
        "name": "primaryAddrCity",
        "schema": "string",
        "description": "",
        "example": "Toronto"
      },
      {
        "name": "primaryAddrPostalcode",
        "schema": "string",
        "description": "",
        "example": "L8H Y5F"
      },
      {
        "name": "primaryAddrState",
        "schema": "string",
        "description": "",
        "example": "California"
      },
      {
        "name": "created",
        "schema": "string",
        "description": "",
        "example": "2021-06-24 22:35:07"
      },
      {
        "name": "modified",
        "schema": "string",
        "description": "",
        "example": "2021-06-24 22:35:07"
      },
      {
        "name": "link",
        "schema": "string",
        "description": "",
        "example": "steve.james.com"
      },
      {
        "name": "email",
        "schema": "string",
        "description": "",
        "example": "steve.james@gmail.com"
      },
      {
        "name": "mobilePhone",
        "schema": "string",
        "description": "",
        "example": "4167854398"
      },
      {
        "name": "payRate",
        "schema": "string",
        "description": "",
        "example": "20"
      },
      {
        "name": "gender",
        "schema": "string",
        "description": "",
        "example": "Female"
      },
      {
        "name": "birthDate",
        "schema": "string",
        "description": "",
        "example": "2021-06-24"
      },
      {
        "name": "hiredDate",
        "schema": "string",
        "description": "",
        "example": "2021-06-24"
      },
      {
        "name": "employeeNumber",
        "schema": "string",
        "description": "",
        "example": "Female"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Someone working for this organization."
      },
      {
        "statusCode": "400",
        "description": "Invalid input"
      },
      {
        "statusCode": "404",
        "description": "Resource not found"
      },
      {
        "statusCode": "422",
        "description": "Unprocessable entity"
      }
    ]
  },
  {
    "url": "/engagements",
    "method": "getCollection",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Engagement",
    "typeScriptTag": "engagement",
    "description": "Retrieves the collection of Engagement resources.",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "The collection page number",
        "default": 1
      },
      {
        "name": "itemsPerPage",
        "schema": "integer",
        "required": false,
        "description": "The number of items per page",
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
    "url": "/engagements/{id}",
    "method": "getResource",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Engagement",
    "typeScriptTag": "engagement",
    "description": "Retrieves a Engagement resource.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Resource identifier",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Engagement represents CRM actions stored as notes, tasks, meetings and calls"
      },
      {
        "statusCode": "404",
        "description": "Resource not found"
      }
    ]
  },
  {
    "url": "/estimates",
    "method": "getCollection",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Estimate",
    "typeScriptTag": "estimate",
    "description": "Retrieves the collection of Estimate resources.",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "The collection page number",
        "default": 1
      },
      {
        "name": "itemsPerPage",
        "schema": "integer",
        "required": false,
        "description": "The number of items per page",
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
    "url": "/estimates/{id}",
    "method": "getResource",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Estimate",
    "typeScriptTag": "estimate",
    "description": "Retrieves a Estimate resource.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Resource identifier",
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
        "description": "Resource not found"
      }
    ]
  },
  {
    "url": "/events",
    "method": "getCollection",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Event",
    "typeScriptTag": "event",
    "description": "Retrieves the collection of Event resources.",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "The collection page number",
        "default": 1
      },
      {
        "name": "itemsPerPage",
        "schema": "integer",
        "required": false,
        "description": "The number of items per page",
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
    "url": "/events/{id}",
    "method": "getResource",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Event",
    "typeScriptTag": "event",
    "description": "Retrieves a Event resource.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Resource identifier",
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
        "description": "Resource not found"
      }
    ]
  },
  {
    "url": "/executive_summaries/{id}",
    "method": "getResource",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "ExecutiveSummary",
    "typeScriptTag": "executiveSummary",
    "description": "Retrieves a ExecutiveSummary resource.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Resource identifier",
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
        "description": "Resource not found"
      }
    ]
  },
  {
    "url": "/executive_summary",
    "method": "getCollection",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "ExecutiveSummary",
    "typeScriptTag": "executiveSummary",
    "description": "Retrieves the collection of ExecutiveSummary resources.",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "The collection page number",
        "default": 1
      },
      {
        "name": "itemsPerPage",
        "schema": "integer",
        "required": false,
        "description": "The number of items per page",
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
    "url": "/expenses",
    "method": "getCollection",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Expense",
    "typeScriptTag": "expense",
    "description": "Retrieves the collection of Expense resources.",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "The collection page number",
        "default": 1
      },
      {
        "name": "itemsPerPage",
        "schema": "integer",
        "required": false,
        "description": "The number of items per page",
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
    "url": "/expenses",
    "method": "createResource",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Expense",
    "typeScriptTag": "expense",
    "description": "Creates a Expense resource.",
    "parameters": [
      {
        "name": "description",
        "schema": "string",
        "description": "",
        "example": "GPS rent"
      },
      {
        "name": "id",
        "schema": "string",
        "description": "",
        "example": "xero-70"
      },
      {
        "name": "integration",
        "schema": "string",
        "description": "",
        "example": "quickbooks"
      },
      {
        "name": "srcId",
        "schema": "string",
        "description": "",
        "example": "982000000030049"
      },
      {
        "name": "txnId",
        "schema": "string",
        "description": "",
        "example": "9856"
      },
      {
        "name": "type",
        "schema": "string",
        "description": "",
        "example": "expense"
      },
      {
        "name": "accountId",
        "schema": "string",
        "description": "",
        "example": "1057"
      },
      {
        "name": "currency",
        "schema": "string",
        "description": "",
        "example": "EUR"
      },
      {
        "name": "subtotal",
        "schema": "integer",
        "description": "",
        "example": 9000
      },
      {
        "name": "totalAmount",
        "schema": "integer",
        "description": "",
        "example": 12000
      },
      {
        "name": "referenceNumber",
        "schema": "string",
        "description": "",
        "example": "782364"
      },
      {
        "name": "status",
        "schema": "string",
        "description": "",
        "example": "Unbilled"
      },
      {
        "name": "invoiceId",
        "schema": "string",
        "description": "",
        "example": "460000000028192"
      },
      {
        "name": "invoiceNumber",
        "schema": "string",
        "description": "",
        "example": "INV-00003"
      },
      {
        "name": "modified",
        "schema": "string",
        "description": "",
        "example": "2019-05-25T02:17:40.080Z"
      },
      {
        "name": "accountName",
        "schema": "string",
        "description": "",
        "example": "Rent"
      },
      {
        "name": "created",
        "schema": "string",
        "description": "",
        "example": "2019-05-22T02:17:40.080Z"
      },
      {
        "name": "accountCode",
        "schema": "string",
        "description": "",
        "example": "4560"
      },
      {
        "name": "contactId",
        "schema": "string",
        "description": "",
        "example": "23"
      },
      {
        "name": "contactName",
        "schema": "string",
        "description": "",
        "example": "Cool Cars"
      },
      {
        "name": "contactType",
        "schema": "string",
        "description": "",
        "example": "Vendor"
      },
      {
        "name": "paymentMethodId",
        "schema": "string",
        "description": "",
        "example": "1d80716b-427e-4cad-80c6-c4b3a18eb23d"
      },
      {
        "name": "date",
        "schema": "string",
        "description": "",
        "example": "2019-05-22T02:17:40.080Z"
      },
      {
        "name": "taxAmount",
        "schema": "integer",
        "description": "",
        "example": 3000
      },
      {
        "name": "deleted",
        "schema": "boolean",
        "description": "",
        "example": true
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Invalid input"
      },
      {
        "statusCode": "422",
        "description": "Unprocessable entity"
      }
    ]
  },
  {
    "url": "/expenses/{id}",
    "method": "removeResource",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Expense",
    "typeScriptTag": "expense",
    "description": "Removes the Expense resource.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Resource identifier",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Expense resource deleted"
      },
      {
        "statusCode": "404",
        "description": "Resource not found"
      }
    ]
  },
  {
    "url": "/expenses/{id}",
    "method": "get",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Expense",
    "typeScriptTag": "expense",
    "description": "Retrieves a Expense resource.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Resource identifier",
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
        "description": "Resource not found"
      }
    ]
  },
  {
    "url": "/expenses/{id}",
    "method": "replaceResource",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Expense",
    "typeScriptTag": "expense",
    "description": "Replaces the Expense resource.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Resource identifier",
        "example": "ID"
      },
      {
        "name": "description",
        "schema": "string",
        "description": "",
        "example": "GPS rent"
      },
      {
        "name": "id",
        "schema": "string",
        "description": "",
        "example": "xero-70"
      },
      {
        "name": "integration",
        "schema": "string",
        "description": "",
        "example": "quickbooks"
      },
      {
        "name": "srcId",
        "schema": "string",
        "description": "",
        "example": "982000000030049"
      },
      {
        "name": "txnId",
        "schema": "string",
        "description": "",
        "example": "9856"
      },
      {
        "name": "type",
        "schema": "string",
        "description": "",
        "example": "expense"
      },
      {
        "name": "accountId",
        "schema": "string",
        "description": "",
        "example": "1057"
      },
      {
        "name": "currency",
        "schema": "string",
        "description": "",
        "example": "EUR"
      },
      {
        "name": "subtotal",
        "schema": "integer",
        "description": "",
        "example": 9000
      },
      {
        "name": "totalAmount",
        "schema": "integer",
        "description": "",
        "example": 12000
      },
      {
        "name": "referenceNumber",
        "schema": "string",
        "description": "",
        "example": "782364"
      },
      {
        "name": "status",
        "schema": "string",
        "description": "",
        "example": "Unbilled"
      },
      {
        "name": "invoiceId",
        "schema": "string",
        "description": "",
        "example": "460000000028192"
      },
      {
        "name": "invoiceNumber",
        "schema": "string",
        "description": "",
        "example": "INV-00003"
      },
      {
        "name": "modified",
        "schema": "string",
        "description": "",
        "example": "2019-05-25T02:17:40.080Z"
      },
      {
        "name": "accountName",
        "schema": "string",
        "description": "",
        "example": "Rent"
      },
      {
        "name": "created",
        "schema": "string",
        "description": "",
        "example": "2019-05-22T02:17:40.080Z"
      },
      {
        "name": "accountCode",
        "schema": "string",
        "description": "",
        "example": "4560"
      },
      {
        "name": "contactId",
        "schema": "string",
        "description": "",
        "example": "23"
      },
      {
        "name": "contactName",
        "schema": "string",
        "description": "",
        "example": "Cool Cars"
      },
      {
        "name": "contactType",
        "schema": "string",
        "description": "",
        "example": "Vendor"
      },
      {
        "name": "paymentMethodId",
        "schema": "string",
        "description": "",
        "example": "1d80716b-427e-4cad-80c6-c4b3a18eb23d"
      },
      {
        "name": "date",
        "schema": "string",
        "description": "",
        "example": "2019-05-22T02:17:40.080Z"
      },
      {
        "name": "taxAmount",
        "schema": "integer",
        "description": "",
        "example": 3000
      },
      {
        "name": "deleted",
        "schema": "boolean",
        "description": "",
        "example": true
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Invalid input"
      },
      {
        "statusCode": "404",
        "description": "Resource not found"
      },
      {
        "statusCode": "422",
        "description": "Unprocessable entity"
      }
    ]
  },
  {
    "url": "/financial_mapping",
    "method": "getCollection",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "FinancialMapping",
    "typeScriptTag": "financialMapping",
    "description": "Retrieves the collection of FinancialMapping resources.",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/financial_mappings/{id}",
    "method": "getResource",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "FinancialMapping",
    "typeScriptTag": "financialMapping",
    "description": "Retrieves a FinancialMapping resource.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Resource identifier",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Accounting financial mapping"
      },
      {
        "statusCode": "404",
        "description": "Resource not found"
      }
    ]
  },
  {
    "url": "/financial_periods",
    "method": "getCollection",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "FinancialPeriod",
    "typeScriptTag": "financialPeriod",
    "description": "Retrieves the collection of FinancialPeriod resources.",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/financial_periods/{id}",
    "method": "getResource",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "FinancialPeriod",
    "typeScriptTag": "financialPeriod",
    "description": "Retrieves a FinancialPeriod resource.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Resource identifier",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Accounting financial period"
      },
      {
        "statusCode": "404",
        "description": "Resource not found"
      }
    ]
  },
  {
    "url": "/form_data",
    "method": "getJsonData",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "FormData",
    "typeScriptTag": "formData",
    "description": "Retrieves JSON Form Data",
    "parameters": [
      {
        "name": "key",
        "schema": "string",
        "required": false,
        "description": "The key of the Form that you would like to retrieve data for. Default is 'profile'. ",
        "example": "profile"
      },
      {
        "name": "formInput1",
        "schema": "string",
        "required": true,
        "description": "Resource identifier",
        "example": "FORMINPUT1"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Resource not found"
      }
    ]
  },
  {
    "url": "/forms",
    "method": "getCollection",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Form",
    "typeScriptTag": "form",
    "description": "Retrieves the collection of Form resources.",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "The collection page number",
        "default": 1
      },
      {
        "name": "itemsPerPage",
        "schema": "integer",
        "required": false,
        "description": "The number of items per page",
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
    "url": "/forms/{id}",
    "method": "getResource",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Form",
    "typeScriptTag": "form",
    "description": "Retrieves a Form resource.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Resource identifier",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Forms are standard website forms that can be used to generate website leads."
      },
      {
        "statusCode": "404",
        "description": "Resource not found"
      }
    ]
  },
  {
    "url": "/growth_histories",
    "method": "getCollection",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "GrowthHistory",
    "typeScriptTag": "growthHistory",
    "description": "Retrieves the collection of GrowthHistory resources.",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "The collection page number",
        "default": 1
      },
      {
        "name": "itemsPerPage",
        "schema": "integer",
        "required": false,
        "description": "The number of items per page",
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
    "url": "/growth_histories/{id}",
    "method": "getResource",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "GrowthHistory",
    "typeScriptTag": "growthHistory",
    "description": "Retrieves a GrowthHistory resource.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Resource identifier",
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
        "description": "Resource not found"
      }
    ]
  },
  {
    "url": "/integrations",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "IntegrationsList",
    "typeScriptTag": "integrationsList",
    "description": "Retrieves a list of integrations",
    "parameters": [
      {
        "name": "file",
        "schema": "string",
        "required": true,
        "description": "Resource identifier",
        "example": "FILE"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "provides a mapped balance sheet"
      },
      {
        "statusCode": "404",
        "description": "Resource not found"
      }
    ]
  },
  {
    "url": "/inventories",
    "method": "getCollection",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Inventory",
    "typeScriptTag": "inventory",
    "description": "Retrieves the collection of Inventory resources.",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "The collection page number",
        "default": 1
      },
      {
        "name": "itemsPerPage",
        "schema": "integer",
        "required": false,
        "description": "The number of items per page",
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
    "url": "/inventories",
    "method": "createResource",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Inventory",
    "typeScriptTag": "inventory",
    "description": "Creates a Inventory resource.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "product_name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "total_quantity",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "sku",
        "schema": "string",
        "description": ""
      },
      {
        "name": "modified",
        "schema": "string",
        "description": ""
      },
      {
        "name": "fulfillable_quantity",
        "schema": "string",
        "description": ""
      },
      {
        "name": "integration",
        "schema": "string",
        "description": "",
        "example": "quickbooks"
      },
      {
        "name": "productName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "totalQuantity",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "fulfillableQuantity",
        "schema": "undefined",
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
        "description": "Invalid input"
      },
      {
        "statusCode": "422",
        "description": "Unprocessable entity"
      }
    ]
  },
  {
    "url": "/inventories/{id}",
    "method": "removeResource",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Inventory",
    "typeScriptTag": "inventory",
    "description": "Removes the Inventory resource.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Resource identifier",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Inventory resource deleted"
      },
      {
        "statusCode": "404",
        "description": "Resource not found"
      }
    ]
  },
  {
    "url": "/inventories/{id}",
    "method": "getResource",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Inventory",
    "typeScriptTag": "inventory",
    "description": "Retrieves a Inventory resource.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Resource identifier",
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
        "description": "Resource not found"
      }
    ]
  },
  {
    "url": "/inventories/{id}",
    "method": "replaceResource",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Inventory",
    "typeScriptTag": "inventory",
    "description": "Replaces the Inventory resource.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Resource identifier",
        "example": "ID"
      },
      {
        "name": "id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "product_name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "total_quantity",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "sku",
        "schema": "string",
        "description": ""
      },
      {
        "name": "modified",
        "schema": "string",
        "description": ""
      },
      {
        "name": "fulfillable_quantity",
        "schema": "string",
        "description": ""
      },
      {
        "name": "integration",
        "schema": "string",
        "description": "",
        "example": "quickbooks"
      },
      {
        "name": "productName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "totalQuantity",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "fulfillableQuantity",
        "schema": "undefined",
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
        "description": "Invalid input"
      },
      {
        "statusCode": "404",
        "description": "Resource not found"
      },
      {
        "statusCode": "422",
        "description": "Unprocessable entity"
      }
    ]
  },
  {
    "url": "/invoice_items",
    "method": "listResources",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "InvoiceItem",
    "typeScriptTag": "invoiceItem",
    "description": "Retrieves the collection of InvoiceItem resources.",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "The collection page number",
        "default": 1
      },
      {
        "name": "itemsPerPage",
        "schema": "integer",
        "required": false,
        "description": "The number of items per page",
        "default": 100
      },
      {
        "name": "invoiceId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "invoiceId[]",
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
    "url": "/invoice_items",
    "method": "createResource",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "InvoiceItem",
    "typeScriptTag": "invoiceItem",
    "description": "Creates a InvoiceItem resource.",
    "parameters": [
      {
        "name": "description",
        "schema": "string",
        "description": "",
        "example": "Bag of soil"
      },
      {
        "name": "id",
        "schema": "string",
        "description": "",
        "example": "quickbooks-34-1"
      },
      {
        "name": "integration",
        "schema": "string",
        "description": "",
        "example": "quickbooks"
      },
      {
        "name": "srcId",
        "schema": "string",
        "description": "",
        "example": "1"
      },
      {
        "name": "invoiceId",
        "schema": "string",
        "description": "",
        "example": "quickbooks-34"
      },
      {
        "name": "quantity",
        "schema": "number",
        "description": "",
        "example": 2.25
      },
      {
        "name": "unitPrice",
        "schema": "integer",
        "description": "",
        "example": 18900
      },
      {
        "name": "itemId",
        "schema": "string",
        "description": "",
        "example": "1002"
      },
      {
        "name": "itemName",
        "schema": "string",
        "description": "",
        "example": "Bag of soil"
      },
      {
        "name": "lineAmount",
        "schema": "integer",
        "description": "",
        "example": 42525
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "A line item from an invoice."
      },
      {
        "statusCode": "400",
        "description": "Invalid input"
      },
      {
        "statusCode": "422",
        "description": "Unprocessable entity"
      }
    ]
  },
  {
    "url": "/invoice_items/{id}",
    "method": "removeResource",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "InvoiceItem",
    "typeScriptTag": "invoiceItem",
    "description": "Removes the InvoiceItem resource.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Resource identifier",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "InvoiceItem resource deleted"
      },
      {
        "statusCode": "404",
        "description": "Resource not found"
      }
    ]
  },
  {
    "url": "/invoice_items/{id}",
    "method": "getResource",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "InvoiceItem",
    "typeScriptTag": "invoiceItem",
    "description": "Retrieves a InvoiceItem resource.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Resource identifier",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A line item from an invoice."
      },
      {
        "statusCode": "404",
        "description": "Resource not found"
      }
    ]
  },
  {
    "url": "/invoice_items/{id}",
    "method": "replaceResource",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "InvoiceItem",
    "typeScriptTag": "invoiceItem",
    "description": "Replaces the InvoiceItem resource.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Resource identifier",
        "example": "ID"
      },
      {
        "name": "description",
        "schema": "string",
        "description": "",
        "example": "Bag of soil"
      },
      {
        "name": "id",
        "schema": "string",
        "description": "",
        "example": "quickbooks-34-1"
      },
      {
        "name": "integration",
        "schema": "string",
        "description": "",
        "example": "quickbooks"
      },
      {
        "name": "srcId",
        "schema": "string",
        "description": "",
        "example": "1"
      },
      {
        "name": "invoiceId",
        "schema": "string",
        "description": "",
        "example": "quickbooks-34"
      },
      {
        "name": "quantity",
        "schema": "number",
        "description": "",
        "example": 2.25
      },
      {
        "name": "unitPrice",
        "schema": "integer",
        "description": "",
        "example": 18900
      },
      {
        "name": "itemId",
        "schema": "string",
        "description": "",
        "example": "1002"
      },
      {
        "name": "itemName",
        "schema": "string",
        "description": "",
        "example": "Bag of soil"
      },
      {
        "name": "lineAmount",
        "schema": "integer",
        "description": "",
        "example": 42525
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A line item from an invoice."
      },
      {
        "statusCode": "400",
        "description": "Invalid input"
      },
      {
        "statusCode": "404",
        "description": "Resource not found"
      },
      {
        "statusCode": "422",
        "description": "Unprocessable entity"
      }
    ]
  },
  {
    "url": "/invoices",
    "method": "getCollection",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Invoice",
    "typeScriptTag": "invoice",
    "description": "Retrieves the collection of Invoice resources.",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "The collection page number",
        "default": 1
      },
      {
        "name": "itemsPerPage",
        "schema": "integer",
        "required": false,
        "description": "The number of items per page",
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
    "url": "/invoices/{id}",
    "method": "getResource",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Invoice",
    "typeScriptTag": "invoice",
    "description": "Retrieves a Invoice resource.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Resource identifier",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A statement of the money due for goods or services; a bill."
      },
      {
        "statusCode": "404",
        "description": "Resource not found"
      }
    ]
  },
  {
    "url": "/items",
    "method": "getCollection",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Item",
    "typeScriptTag": "item",
    "description": "Retrieves the collection of Item resources.",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "The collection page number",
        "default": 1
      },
      {
        "name": "itemsPerPage",
        "schema": "integer",
        "required": false,
        "description": "The number of items per page",
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
    "url": "/items/{id}",
    "method": "getResource",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Item",
    "typeScriptTag": "item",
    "description": "Retrieves a Item resource.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Resource identifier",
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
        "description": "Resource not found"
      }
    ]
  },
  {
    "url": "/journal_lines",
    "method": "listResources",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "JournalLine",
    "typeScriptTag": "journalLine",
    "description": "Retrieves the collection of JournalLine resources.",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "The collection page number",
        "default": 1
      },
      {
        "name": "itemsPerPage",
        "schema": "integer",
        "required": false,
        "description": "The number of items per page",
        "default": 100
      },
      {
        "name": "journalId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "journalId[]",
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
    "url": "/journal_lines/{id}",
    "method": "getResource",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "JournalLine",
    "typeScriptTag": "journalLine",
    "description": "Retrieves a JournalLine resource.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Resource identifier",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Journal Lines represent a single line of a larger Journal entity"
      },
      {
        "statusCode": "404",
        "description": "Resource not found"
      }
    ]
  },
  {
    "url": "/journals",
    "method": "getCollection",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Journal",
    "typeScriptTag": "journal",
    "description": "Retrieves the collection of Journal resources.",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "The collection page number",
        "default": 1
      },
      {
        "name": "itemsPerPage",
        "schema": "integer",
        "required": false,
        "description": "The number of items per page",
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
    "url": "/journals/{id}",
    "method": "getResource",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Journal",
    "typeScriptTag": "journal",
    "description": "Retrieves a Journal resource.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Resource identifier",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Journal represents recorded transactions and adjustments to the 3rd party account"
      },
      {
        "statusCode": "404",
        "description": "Resource not found"
      }
    ]
  },
  {
    "url": "/leads",
    "method": "getCollection",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Lead",
    "typeScriptTag": "lead",
    "description": "Retrieves the collection of Lead resources.",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "The collection page number",
        "default": 1
      },
      {
        "name": "itemsPerPage",
        "schema": "integer",
        "required": false,
        "description": "The number of items per page",
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
    "url": "/leads",
    "method": "createResource",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Lead",
    "typeScriptTag": "lead",
    "description": "Creates a Lead resource.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "description": "",
        "example": "quickbooks-726"
      },
      {
        "name": "integration",
        "schema": "string",
        "description": "",
        "example": "quickbooks"
      },
      {
        "name": "srcId",
        "schema": "string",
        "description": "",
        "example": "90300000072369"
      },
      {
        "name": "email",
        "schema": "string",
        "description": "",
        "example": "ron.aurthor@gmail.com"
      },
      {
        "name": "firstName",
        "schema": "string",
        "description": "",
        "example": "Ronald"
      },
      {
        "name": "lastName",
        "schema": "string",
        "description": "",
        "example": "Aurthor"
      },
      {
        "name": "primaryPhone",
        "schema": "string",
        "description": "",
        "example": "416-555-0126"
      },
      {
        "name": "addressLine1",
        "schema": "string",
        "description": "",
        "example": "39 Parliment road"
      },
      {
        "name": "city",
        "schema": "string",
        "description": "",
        "example": "Detroit"
      },
      {
        "name": "country",
        "schema": "string",
        "description": "",
        "example": "United States"
      },
      {
        "name": "company",
        "schema": "string",
        "description": "",
        "example": "Ronalds Hot Rods"
      },
      {
        "name": "postalCode",
        "schema": "string",
        "description": "",
        "example": "48653"
      },
      {
        "name": "website",
        "schema": "string",
        "description": "",
        "example": "https://www.ronshotrods.com"
      },
      {
        "name": "industry",
        "schema": "string",
        "description": "",
        "example": "Automotive"
      },
      {
        "name": "skypeUsername",
        "schema": "string",
        "description": "",
        "example": "ronaldAurthor0127"
      },
      {
        "name": "twitter",
        "schema": "string",
        "description": "",
        "example": "@ronaldAutomotive"
      },
      {
        "name": "annualRevenue",
        "schema": "string",
        "description": "",
        "example": "50000000"
      },
      {
        "name": "employeeCount",
        "schema": "integer",
        "description": "",
        "example": 113
      },
      {
        "name": "created",
        "schema": "string",
        "description": "",
        "example": "2021-07-28 00:00:00"
      },
      {
        "name": "modified",
        "schema": "string",
        "description": "",
        "example": "2021-09-15 00:00:00"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Invalid input"
      },
      {
        "statusCode": "422",
        "description": "Unprocessable entity"
      }
    ]
  },
  {
    "url": "/leads/{id}",
    "method": "removeResource",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Lead",
    "typeScriptTag": "lead",
    "description": "Removes the Lead resource.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Resource identifier",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Lead resource deleted"
      },
      {
        "statusCode": "404",
        "description": "Resource not found"
      }
    ]
  },
  {
    "url": "/leads/{id}",
    "method": "getResource",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Lead",
    "typeScriptTag": "lead",
    "description": "Retrieves a Lead resource.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Resource identifier",
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
        "description": "Resource not found"
      }
    ]
  },
  {
    "url": "/leads/{id}",
    "method": "replaceResource",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Lead",
    "typeScriptTag": "lead",
    "description": "Replaces the Lead resource.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Resource identifier",
        "example": "ID"
      },
      {
        "name": "id",
        "schema": "string",
        "description": "",
        "example": "quickbooks-726"
      },
      {
        "name": "integration",
        "schema": "string",
        "description": "",
        "example": "quickbooks"
      },
      {
        "name": "srcId",
        "schema": "string",
        "description": "",
        "example": "90300000072369"
      },
      {
        "name": "email",
        "schema": "string",
        "description": "",
        "example": "ron.aurthor@gmail.com"
      },
      {
        "name": "firstName",
        "schema": "string",
        "description": "",
        "example": "Ronald"
      },
      {
        "name": "lastName",
        "schema": "string",
        "description": "",
        "example": "Aurthor"
      },
      {
        "name": "primaryPhone",
        "schema": "string",
        "description": "",
        "example": "416-555-0126"
      },
      {
        "name": "addressLine1",
        "schema": "string",
        "description": "",
        "example": "39 Parliment road"
      },
      {
        "name": "city",
        "schema": "string",
        "description": "",
        "example": "Detroit"
      },
      {
        "name": "country",
        "schema": "string",
        "description": "",
        "example": "United States"
      },
      {
        "name": "company",
        "schema": "string",
        "description": "",
        "example": "Ronalds Hot Rods"
      },
      {
        "name": "postalCode",
        "schema": "string",
        "description": "",
        "example": "48653"
      },
      {
        "name": "website",
        "schema": "string",
        "description": "",
        "example": "https://www.ronshotrods.com"
      },
      {
        "name": "industry",
        "schema": "string",
        "description": "",
        "example": "Automotive"
      },
      {
        "name": "skypeUsername",
        "schema": "string",
        "description": "",
        "example": "ronaldAurthor0127"
      },
      {
        "name": "twitter",
        "schema": "string",
        "description": "",
        "example": "@ronaldAutomotive"
      },
      {
        "name": "annualRevenue",
        "schema": "string",
        "description": "",
        "example": "50000000"
      },
      {
        "name": "employeeCount",
        "schema": "integer",
        "description": "",
        "example": 113
      },
      {
        "name": "created",
        "schema": "string",
        "description": "",
        "example": "2021-07-28 00:00:00"
      },
      {
        "name": "modified",
        "schema": "string",
        "description": "",
        "example": "2021-09-15 00:00:00"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Invalid input"
      },
      {
        "statusCode": "404",
        "description": "Resource not found"
      },
      {
        "statusCode": "422",
        "description": "Unprocessable entity"
      }
    ]
  },
  {
    "url": "/ledger_account_opening_balances",
    "method": "getCollection",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "LedgerAccountOpeningBalance",
    "typeScriptTag": "ledgerAccountOpeningBalance",
    "description": "Retrieves the collection of LedgerAccountOpeningBalance resources.",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "The collection page number",
        "default": 1
      },
      {
        "name": "itemsPerPage",
        "schema": "integer",
        "required": false,
        "description": "The number of items per page",
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
    "url": "/ledger_account_opening_balances/{id}",
    "method": "getResource",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "LedgerAccountOpeningBalance",
    "typeScriptTag": "ledgerAccountOpeningBalance",
    "description": "Retrieves a LedgerAccountOpeningBalance resource.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Resource identifier",
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
        "description": "Resource not found"
      }
    ]
  },
  {
    "url": "/ledger_account_types",
    "method": "listOfResources",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "LedgerAccountType",
    "typeScriptTag": "ledgerAccountType",
    "description": "Retrieves the collection of LedgerAccountType resources.",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "The collection page number",
        "default": 1
      },
      {
        "name": "itemsPerPage",
        "schema": "integer",
        "required": false,
        "description": "The number of items per page",
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
    "url": "/ledger_account_types/{id}",
    "method": "getResource",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "LedgerAccountType",
    "typeScriptTag": "ledgerAccountType",
    "description": "Retrieves a LedgerAccountType resource.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Resource identifier",
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
        "description": "Resource not found"
      }
    ]
  },
  {
    "url": "/ledger_accounts",
    "method": "getCollection",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "LedgerAccounts",
    "typeScriptTag": "ledgerAccounts",
    "description": "Retrieves the collection of LedgerAccounts resources.",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "The collection page number",
        "default": 1
      },
      {
        "name": "itemsPerPage",
        "schema": "integer",
        "required": false,
        "description": "The number of items per page",
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
    "url": "/ledger_accounts/{id}",
    "method": "getResource",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "LedgerAccounts",
    "typeScriptTag": "ledgerAccounts",
    "description": "Retrieves a LedgerAccounts resource.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Resource identifier",
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
        "description": "Resource not found"
      }
    ]
  },
  {
    "url": "/ledger_entries",
    "method": "getCollection",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "LedgerEntry",
    "typeScriptTag": "ledgerEntry",
    "description": "Retrieves the collection of LedgerEntry resources.",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "The collection page number",
        "default": 1
      },
      {
        "name": "itemsPerPage",
        "schema": "integer",
        "required": false,
        "description": "The number of items per page",
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
    "url": "/ledger_entries/{id}",
    "method": "getResource",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "LedgerEntry",
    "typeScriptTag": "ledgerEntry",
    "description": "Retrieves a LedgerEntry resource.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Resource identifier",
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
        "description": "Resource not found"
      }
    ]
  },
  {
    "url": "/linked_transactions",
    "method": "listResources",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "LinkedTransaction",
    "typeScriptTag": "linkedTransaction",
    "description": "Retrieves the collection of LinkedTransaction resources.",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "The collection page number",
        "default": 1
      },
      {
        "name": "itemsPerPage",
        "schema": "integer",
        "required": false,
        "description": "The number of items per page",
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
    "url": "/linked_transactions/{id}",
    "method": "getResource",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "LinkedTransaction",
    "typeScriptTag": "linkedTransaction",
    "description": "Retrieves a LinkedTransaction resource.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Resource identifier",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Linked transaction represent transactions that form part of a single scheme, arrangement or series of transactions between the same vendor and customer"
      },
      {
        "statusCode": "404",
        "description": "Resource not found"
      }
    ]
  },
  {
    "url": "/locations",
    "method": "getCollection",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Location",
    "typeScriptTag": "location",
    "description": "Retrieves the collection of Location resources.",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "The collection page number",
        "default": 1
      },
      {
        "name": "itemsPerPage",
        "schema": "integer",
        "required": false,
        "description": "The number of items per page",
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
    "url": "/locations",
    "method": "createResource",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Location",
    "typeScriptTag": "location",
    "description": "Creates a Location resource.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "description": "",
        "example": "quickbooks-34"
      },
      {
        "name": "integration",
        "schema": "string",
        "description": "",
        "example": "square"
      },
      {
        "name": "srcId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "created",
        "schema": "string",
        "description": "",
        "example": "2013-11-18T02:17:40.080Z"
      },
      {
        "name": "businessName",
        "schema": "string",
        "description": "",
        "example": "Bowman and Co"
      },
      {
        "name": "currency",
        "schema": "string",
        "description": "",
        "example": "USD"
      },
      {
        "name": "type",
        "schema": "string",
        "description": ""
      },
      {
        "name": "country",
        "schema": "string",
        "description": "",
        "example": "United States"
      },
      {
        "name": "city",
        "schema": "string",
        "description": "",
        "example": "St Paul"
      },
      {
        "name": "state",
        "schema": "string",
        "description": "",
        "example": "Alaska"
      },
      {
        "name": "postalCode",
        "schema": "string",
        "description": "",
        "example": "99660"
      },
      {
        "name": "address",
        "schema": "string",
        "description": "",
        "example": "708 Woodland Avenue"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Invalid input"
      },
      {
        "statusCode": "422",
        "description": "Unprocessable entity"
      }
    ]
  },
  {
    "url": "/locations/{id}",
    "method": "removeResource",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Location",
    "typeScriptTag": "location",
    "description": "Removes the Location resource.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Resource identifier",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Location resource deleted"
      },
      {
        "statusCode": "404",
        "description": "Resource not found"
      }
    ]
  },
  {
    "url": "/locations/{id}",
    "method": "getResource",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Location",
    "typeScriptTag": "location",
    "description": "Retrieves a Location resource.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Resource identifier",
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
        "description": "Resource not found"
      }
    ]
  },
  {
    "url": "/locations/{id}",
    "method": "replaceResource",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Location",
    "typeScriptTag": "location",
    "description": "Replaces the Location resource.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Resource identifier",
        "example": "ID"
      },
      {
        "name": "id",
        "schema": "string",
        "description": "",
        "example": "quickbooks-34"
      },
      {
        "name": "integration",
        "schema": "string",
        "description": "",
        "example": "square"
      },
      {
        "name": "srcId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "created",
        "schema": "string",
        "description": "",
        "example": "2013-11-18T02:17:40.080Z"
      },
      {
        "name": "businessName",
        "schema": "string",
        "description": "",
        "example": "Bowman and Co"
      },
      {
        "name": "currency",
        "schema": "string",
        "description": "",
        "example": "USD"
      },
      {
        "name": "type",
        "schema": "string",
        "description": ""
      },
      {
        "name": "country",
        "schema": "string",
        "description": "",
        "example": "United States"
      },
      {
        "name": "city",
        "schema": "string",
        "description": "",
        "example": "St Paul"
      },
      {
        "name": "state",
        "schema": "string",
        "description": "",
        "example": "Alaska"
      },
      {
        "name": "postalCode",
        "schema": "string",
        "description": "",
        "example": "99660"
      },
      {
        "name": "address",
        "schema": "string",
        "description": "",
        "example": "708 Woodland Avenue"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Invalid input"
      },
      {
        "statusCode": "404",
        "description": "Resource not found"
      },
      {
        "statusCode": "422",
        "description": "Unprocessable entity"
      }
    ]
  },
  {
    "url": "/manual_journals",
    "method": "getCollection",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "ManualJournal",
    "typeScriptTag": "manualJournal",
    "description": "Retrieves the collection of ManualJournal resources.",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "The collection page number",
        "default": 1
      },
      {
        "name": "itemsPerPage",
        "schema": "integer",
        "required": false,
        "description": "The number of items per page",
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
    "url": "/manual_journals/{id}",
    "method": "getResource",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "ManualJournal",
    "typeScriptTag": "manualJournal",
    "description": "Retrieves a ManualJournal resource.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Resource identifier",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Manual journal represents manually logged transactions"
      },
      {
        "statusCode": "404",
        "description": "Resource not found"
      }
    ]
  },
  {
    "url": "/metrics",
    "method": "getSet",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Metrics",
    "typeScriptTag": "metrics",
    "description": "Retrieves a set of metrics",
    "parameters": [
      {
        "name": "start",
        "schema": "string",
        "required": false,
        "description": "YYYY-MM-DD",
        "example": "2022-07-01"
      },
      {
        "name": "end",
        "schema": "string",
        "required": false,
        "description": "YYYY-MM-DD",
        "example": "2022-08-31"
      },
      {
        "name": "refresh",
        "schema": "string",
        "required": false,
        "description": "If refresh is set, data will be fetched from the source application even when cached data is available",
        "example": "true"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "provides a set of business metrics"
      },
      {
        "statusCode": "404",
        "description": "Resource not found"
      }
    ]
  },
  {
    "url": "/order_returns",
    "method": "listResources",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "OrderReturn",
    "typeScriptTag": "orderReturn",
    "description": "Retrieves the collection of OrderReturn resources.",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "The collection page number",
        "default": 1
      },
      {
        "name": "itemsPerPage",
        "schema": "integer",
        "required": false,
        "description": "The number of items per page",
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
    "url": "/order_returns/{id}",
    "method": "getResource",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "OrderReturn",
    "typeScriptTag": "orderReturn",
    "description": "Retrieves a OrderReturn resource.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Resource identifier",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Order return represents the full or partial return of a number of order items"
      },
      {
        "statusCode": "404",
        "description": "Resource not found"
      }
    ]
  },
  {
    "url": "/orders",
    "method": "getCollection",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Order",
    "typeScriptTag": "order",
    "description": "Retrieves the collection of Order resources.",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "The collection page number",
        "default": 1
      },
      {
        "name": "itemsPerPage",
        "schema": "integer",
        "required": false,
        "description": "The number of items per page",
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
    "url": "/orders",
    "method": "createResource",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Order",
    "typeScriptTag": "order",
    "description": "Creates a Order resource.",
    "parameters": [
      {
        "name": "description",
        "schema": "string",
        "description": "",
        "example": "Monthly bundle"
      },
      {
        "name": "id",
        "schema": "string",
        "description": "",
        "example": "quickbooks-726"
      },
      {
        "name": "integration",
        "schema": "string",
        "description": "",
        "example": "quickbooks"
      },
      {
        "name": "srcID",
        "schema": "string",
        "description": "",
        "example": "GH2JK-67283H-YW82KHX-2883KK-KS78S"
      },
      {
        "name": "name",
        "schema": "string",
        "description": "",
        "example": "New order"
      },
      {
        "name": "orderDate",
        "schema": "string",
        "description": "",
        "example": "2019-08-25T02:17:40.080Z"
      },
      {
        "name": "orderStatus",
        "schema": "string",
        "description": "",
        "example": "activated"
      },
      {
        "name": "amount",
        "schema": "string",
        "description": "",
        "example": "1200"
      },
      {
        "name": "quantity",
        "schema": "integer",
        "description": "",
        "example": 5
      },
      {
        "name": "modified",
        "schema": "string",
        "description": "",
        "example": "2019-08-25T02:17:40.080Z"
      },
      {
        "name": "customerId",
        "schema": "string",
        "description": "",
        "example": "C005"
      },
      {
        "name": "firstName",
        "schema": "string",
        "description": "",
        "example": "Jane"
      },
      {
        "name": "lastName",
        "schema": "string",
        "description": "",
        "example": "Doe"
      },
      {
        "name": "currency",
        "schema": "string",
        "description": "",
        "example": "USD"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Order represents customer purchases made on defined products in the system"
      },
      {
        "statusCode": "400",
        "description": "Invalid input"
      },
      {
        "statusCode": "422",
        "description": "Unprocessable entity"
      }
    ]
  },
  {
    "url": "/orders/{id}",
    "method": "removeResource",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Order",
    "typeScriptTag": "order",
    "description": "Removes the Order resource.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Resource identifier",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Order resource deleted"
      },
      {
        "statusCode": "404",
        "description": "Resource not found"
      }
    ]
  },
  {
    "url": "/orders/{id}",
    "method": "getResource",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Order",
    "typeScriptTag": "order",
    "description": "Retrieves a Order resource.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Resource identifier",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Order represents customer purchases made on defined products in the system"
      },
      {
        "statusCode": "404",
        "description": "Resource not found"
      }
    ]
  },
  {
    "url": "/orders/{id}",
    "method": "replaceResource",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Order",
    "typeScriptTag": "order",
    "description": "Replaces the Order resource.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Resource identifier",
        "example": "ID"
      },
      {
        "name": "description",
        "schema": "string",
        "description": "",
        "example": "Monthly bundle"
      },
      {
        "name": "id",
        "schema": "string",
        "description": "",
        "example": "quickbooks-726"
      },
      {
        "name": "integration",
        "schema": "string",
        "description": "",
        "example": "quickbooks"
      },
      {
        "name": "srcID",
        "schema": "string",
        "description": "",
        "example": "GH2JK-67283H-YW82KHX-2883KK-KS78S"
      },
      {
        "name": "name",
        "schema": "string",
        "description": "",
        "example": "New order"
      },
      {
        "name": "orderDate",
        "schema": "string",
        "description": "",
        "example": "2019-08-25T02:17:40.080Z"
      },
      {
        "name": "orderStatus",
        "schema": "string",
        "description": "",
        "example": "activated"
      },
      {
        "name": "amount",
        "schema": "string",
        "description": "",
        "example": "1200"
      },
      {
        "name": "quantity",
        "schema": "integer",
        "description": "",
        "example": 5
      },
      {
        "name": "modified",
        "schema": "string",
        "description": "",
        "example": "2019-08-25T02:17:40.080Z"
      },
      {
        "name": "customerId",
        "schema": "string",
        "description": "",
        "example": "C005"
      },
      {
        "name": "firstName",
        "schema": "string",
        "description": "",
        "example": "Jane"
      },
      {
        "name": "lastName",
        "schema": "string",
        "description": "",
        "example": "Doe"
      },
      {
        "name": "currency",
        "schema": "string",
        "description": "",
        "example": "USD"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Order represents customer purchases made on defined products in the system"
      },
      {
        "statusCode": "400",
        "description": "Invalid input"
      },
      {
        "statusCode": "404",
        "description": "Resource not found"
      },
      {
        "statusCode": "422",
        "description": "Unprocessable entity"
      }
    ]
  },
  {
    "url": "/organizations",
    "method": "getCollection",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Organization",
    "typeScriptTag": "organization",
    "description": "Retrieves the collection of Organization resources.",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "The collection page number",
        "default": 1
      },
      {
        "name": "itemsPerPage",
        "schema": "integer",
        "required": false,
        "description": "The number of items per page",
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
    "url": "/organizations/{id}",
    "method": "getResource",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Organization",
    "typeScriptTag": "organization",
    "description": "Retrieves a Organization resource.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Resource identifier",
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
        "description": "Resource not found"
      }
    ]
  },
  {
    "url": "/other_incomes",
    "method": "getCollection",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "OtherIncome",
    "typeScriptTag": "otherIncome",
    "description": "Retrieves the collection of OtherIncome resources.",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "The collection page number",
        "default": 1
      },
      {
        "name": "itemsPerPage",
        "schema": "integer",
        "required": false,
        "description": "The number of items per page",
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
    "url": "/other_incomes/{id}",
    "method": "getResource",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "OtherIncome",
    "typeScriptTag": "otherIncome",
    "description": "Retrieves a OtherIncome resource.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Resource identifier",
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
        "description": "Resource not found"
      }
    ]
  },
  {
    "url": "/owners",
    "method": "getCollection",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Owner",
    "typeScriptTag": "owner",
    "description": "Retrieves the collection of Owner resources.",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "The collection page number",
        "default": 1
      },
      {
        "name": "itemsPerPage",
        "schema": "integer",
        "required": false,
        "description": "The number of items per page",
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
    "url": "/owners/{id}",
    "method": "getResource",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Owner",
    "typeScriptTag": "owner",
    "description": "Retrieves a Owner resource.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Resource identifier",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Owner represents accounts in the system that are able to view and edit customer information."
      },
      {
        "statusCode": "404",
        "description": "Resource not found"
      }
    ]
  },
  {
    "url": "/payment_intents",
    "method": "getCollection",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "PaymentIntent",
    "typeScriptTag": "paymentIntent",
    "description": "Retrieves the collection of PaymentIntent resources.",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "The collection page number",
        "default": 1
      },
      {
        "name": "itemsPerPage",
        "schema": "integer",
        "required": false,
        "description": "The number of items per page",
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
    "url": "/payment_intents/{id}",
    "method": "getResource",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "PaymentIntent",
    "typeScriptTag": "paymentIntent",
    "description": "Retrieves a PaymentIntent resource.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Resource identifier",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Payment intent captures the process of collecting a payment from customers"
      },
      {
        "statusCode": "404",
        "description": "Resource not found"
      }
    ]
  },
  {
    "url": "/payment_methods",
    "method": "getCollection",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "PaymentMethod",
    "typeScriptTag": "paymentMethod",
    "description": "Retrieves the collection of PaymentMethod resources.",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "The collection page number",
        "default": 1
      },
      {
        "name": "itemsPerPage",
        "schema": "integer",
        "required": false,
        "description": "The number of items per page",
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
    "url": "/payment_methods",
    "method": "createResource",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "PaymentMethod",
    "typeScriptTag": "paymentMethod",
    "description": "Creates a PaymentMethod resource.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "description": "",
        "example": "706f68c5-46b2-43d8-9aa8-41d1cc2a317f"
      },
      {
        "name": "integration",
        "schema": "string",
        "description": "",
        "example": "quickbooks"
      },
      {
        "name": "srcId",
        "schema": "string",
        "description": "",
        "example": "706f68c5-46b2-43d8-9aa8-41d1cc2a317f"
      },
      {
        "name": "name",
        "schema": "string",
        "description": "",
        "example": "Diners Club"
      },
      {
        "name": "type",
        "schema": "string",
        "description": "",
        "example": "CREDIT_CARD"
      },
      {
        "name": "created",
        "schema": "string",
        "description": "",
        "example": "2021-10-22 19:30:17"
      },
      {
        "name": "modified",
        "schema": "string",
        "description": "",
        "example": "2021-10-22 19:30:17"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Invalid input"
      },
      {
        "statusCode": "422",
        "description": "Unprocessable entity"
      }
    ]
  },
  {
    "url": "/payment_methods/{id}",
    "method": "removeResource",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "PaymentMethod",
    "typeScriptTag": "paymentMethod",
    "description": "Removes the PaymentMethod resource.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Resource identifier",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "PaymentMethod resource deleted"
      },
      {
        "statusCode": "404",
        "description": "Resource not found"
      }
    ]
  },
  {
    "url": "/payment_methods/{id}",
    "method": "getResource",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "PaymentMethod",
    "typeScriptTag": "paymentMethod",
    "description": "Retrieves a PaymentMethod resource.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Resource identifier",
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
        "description": "Resource not found"
      }
    ]
  },
  {
    "url": "/payment_methods/{id}",
    "method": "replaceResource",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "PaymentMethod",
    "typeScriptTag": "paymentMethod",
    "description": "Replaces the PaymentMethod resource.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Resource identifier",
        "example": "ID"
      },
      {
        "name": "id",
        "schema": "string",
        "description": "",
        "example": "706f68c5-46b2-43d8-9aa8-41d1cc2a317f"
      },
      {
        "name": "integration",
        "schema": "string",
        "description": "",
        "example": "quickbooks"
      },
      {
        "name": "srcId",
        "schema": "string",
        "description": "",
        "example": "706f68c5-46b2-43d8-9aa8-41d1cc2a317f"
      },
      {
        "name": "name",
        "schema": "string",
        "description": "",
        "example": "Diners Club"
      },
      {
        "name": "type",
        "schema": "string",
        "description": "",
        "example": "CREDIT_CARD"
      },
      {
        "name": "created",
        "schema": "string",
        "description": "",
        "example": "2021-10-22 19:30:17"
      },
      {
        "name": "modified",
        "schema": "string",
        "description": "",
        "example": "2021-10-22 19:30:17"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Invalid input"
      },
      {
        "statusCode": "404",
        "description": "Resource not found"
      },
      {
        "statusCode": "422",
        "description": "Unprocessable entity"
      }
    ]
  },
  {
    "url": "/payment_services",
    "method": "getCollection",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "PaymentService",
    "typeScriptTag": "paymentService",
    "description": "Retrieves the collection of PaymentService resources.",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "The collection page number",
        "default": 1
      },
      {
        "name": "itemsPerPage",
        "schema": "integer",
        "required": false,
        "description": "The number of items per page",
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
    "url": "/payment_services/{id}",
    "method": "getResource",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "PaymentService",
    "typeScriptTag": "paymentService",
    "description": "Retrieves a PaymentService resource.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Resource identifier",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Payment service represents services used that allow for online payments"
      },
      {
        "statusCode": "404",
        "description": "Resource not found"
      }
    ]
  },
  {
    "url": "/payments",
    "method": "getCollection",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Payment",
    "typeScriptTag": "payment",
    "description": "Retrieves the collection of Payment resources.",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "The collection page number",
        "default": 1
      },
      {
        "name": "itemsPerPage",
        "schema": "integer",
        "required": false,
        "description": "The number of items per page",
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
    "url": "/payments",
    "method": "createResource",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Payment",
    "typeScriptTag": "payment",
    "description": "Creates a Payment resource.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "description": "",
        "example": "706f68c5-46b2-43d8-9aa8-41d1cc2a317f"
      },
      {
        "name": "integration",
        "schema": "string",
        "description": "",
        "example": "quickbooks"
      },
      {
        "name": "srcId",
        "schema": "string",
        "description": "",
        "example": "706f68c5-46b2-43d8-9aa8-41d1cc2a317f"
      },
      {
        "name": "paymentDate",
        "schema": "string",
        "description": "",
        "example": "2020-10-22T19:30:17.697Z"
      },
      {
        "name": "totalAmount",
        "schema": "string",
        "description": "",
        "example": "8750"
      },
      {
        "name": "status",
        "schema": "string",
        "description": "",
        "example": "PAID"
      },
      {
        "name": "modified",
        "schema": "string",
        "description": "",
        "example": "2020-10-09T14:52:50.550Z"
      },
      {
        "name": "accountId",
        "schema": "string",
        "description": "",
        "example": "562555f2-8cde-4ce9-8203-0363922537a4"
      },
      {
        "name": "customerId",
        "schema": "string",
        "description": "",
        "example": "1d80716b-427e-4cad-80c6-c4b3a18eb23d"
      },
      {
        "name": "customerName",
        "schema": "string",
        "description": "",
        "example": "Gateway Motors"
      },
      {
        "name": "linkedTxnId",
        "schema": "string",
        "description": "",
        "example": "361a4980-7f53-4b68-820c-f6487f613284"
      },
      {
        "name": "linkedTxnType",
        "schema": "string",
        "description": "",
        "example": "Deposit"
      },
      {
        "name": "created",
        "schema": "string",
        "description": "",
        "example": "2021-10-22T19:30:17.697Z"
      },
      {
        "name": "invoiceId",
        "schema": "string",
        "description": "",
        "example": "129"
      },
      {
        "name": "currencyCode",
        "schema": "string",
        "description": "",
        "example": "USD"
      },
      {
        "name": "paymentType",
        "schema": "string",
        "description": "",
        "example": "PayPal"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Invalid input"
      },
      {
        "statusCode": "422",
        "description": "Unprocessable entity"
      }
    ]
  },
  {
    "url": "/payments/{id}",
    "method": "removeResource",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Payment",
    "typeScriptTag": "payment",
    "description": "Removes the Payment resource.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Resource identifier",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Payment resource deleted"
      },
      {
        "statusCode": "404",
        "description": "Resource not found"
      }
    ]
  },
  {
    "url": "/payments/{id}",
    "method": "getResource",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Payment",
    "typeScriptTag": "payment",
    "description": "Retrieves a Payment resource.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Resource identifier",
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
        "description": "Resource not found"
      }
    ]
  },
  {
    "url": "/payments/{id}",
    "method": "replaceResource",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Payment",
    "typeScriptTag": "payment",
    "description": "Replaces the Payment resource.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Resource identifier",
        "example": "ID"
      },
      {
        "name": "id",
        "schema": "string",
        "description": "",
        "example": "706f68c5-46b2-43d8-9aa8-41d1cc2a317f"
      },
      {
        "name": "integration",
        "schema": "string",
        "description": "",
        "example": "quickbooks"
      },
      {
        "name": "srcId",
        "schema": "string",
        "description": "",
        "example": "706f68c5-46b2-43d8-9aa8-41d1cc2a317f"
      },
      {
        "name": "paymentDate",
        "schema": "string",
        "description": "",
        "example": "2020-10-22T19:30:17.697Z"
      },
      {
        "name": "totalAmount",
        "schema": "string",
        "description": "",
        "example": "8750"
      },
      {
        "name": "status",
        "schema": "string",
        "description": "",
        "example": "PAID"
      },
      {
        "name": "modified",
        "schema": "string",
        "description": "",
        "example": "2020-10-09T14:52:50.550Z"
      },
      {
        "name": "accountId",
        "schema": "string",
        "description": "",
        "example": "562555f2-8cde-4ce9-8203-0363922537a4"
      },
      {
        "name": "customerId",
        "schema": "string",
        "description": "",
        "example": "1d80716b-427e-4cad-80c6-c4b3a18eb23d"
      },
      {
        "name": "customerName",
        "schema": "string",
        "description": "",
        "example": "Gateway Motors"
      },
      {
        "name": "linkedTxnId",
        "schema": "string",
        "description": "",
        "example": "361a4980-7f53-4b68-820c-f6487f613284"
      },
      {
        "name": "linkedTxnType",
        "schema": "string",
        "description": "",
        "example": "Deposit"
      },
      {
        "name": "created",
        "schema": "string",
        "description": "",
        "example": "2021-10-22T19:30:17.697Z"
      },
      {
        "name": "invoiceId",
        "schema": "string",
        "description": "",
        "example": "129"
      },
      {
        "name": "currencyCode",
        "schema": "string",
        "description": "",
        "example": "USD"
      },
      {
        "name": "paymentType",
        "schema": "string",
        "description": "",
        "example": "PayPal"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Invalid input"
      },
      {
        "statusCode": "404",
        "description": "Resource not found"
      },
      {
        "statusCode": "422",
        "description": "Unprocessable entity"
      }
    ]
  },
  {
    "url": "/payouts",
    "method": "getCollection",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Payout",
    "typeScriptTag": "payout",
    "description": "Retrieves the collection of Payout resources.",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "The collection page number",
        "default": 1
      },
      {
        "name": "itemsPerPage",
        "schema": "integer",
        "required": false,
        "description": "The number of items per page",
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
    "url": "/payouts",
    "method": "createResource",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Payout",
    "typeScriptTag": "payout",
    "description": "Creates a Payout resource.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "description": "",
        "example": "quickbooks-726"
      },
      {
        "name": "integration",
        "schema": "string",
        "description": "",
        "example": "quickbooks"
      },
      {
        "name": "srcId",
        "schema": "string",
        "description": "",
        "example": "GH2JK-67283H-YW82KHX-2883KK-KS78S"
      },
      {
        "name": "amount",
        "schema": "integer",
        "description": "",
        "example": 74753
      },
      {
        "name": "arrivalDate",
        "schema": "string",
        "description": "",
        "example": "2020-11-03T02:17:40.080Z"
      },
      {
        "name": "automatic",
        "schema": "string",
        "description": "",
        "example": "true"
      },
      {
        "name": "balanceTransactionId",
        "schema": "string",
        "description": "",
        "example": "7464"
      },
      {
        "name": "created",
        "schema": "string",
        "description": "",
        "example": "2020-11-03"
      },
      {
        "name": "currency",
        "schema": "string",
        "description": "",
        "example": "USD"
      },
      {
        "name": "payoutDescription",
        "schema": "string",
        "description": "",
        "example": "Payout description"
      },
      {
        "name": "destinationId",
        "schema": "string",
        "description": "",
        "example": "44"
      },
      {
        "name": "failureBalanceTransactionId",
        "schema": "string",
        "description": "",
        "example": "py_1L9D8G2eZgTElo2CaKQjce77"
      },
      {
        "name": "failureCode",
        "schema": "string",
        "description": "",
        "example": "error 43"
      },
      {
        "name": "failureMessage",
        "schema": "string",
        "description": "",
        "example": "payment failed"
      },
      {
        "name": "method",
        "schema": "string",
        "description": "",
        "example": "Standard"
      },
      {
        "name": "sourceType",
        "schema": "string",
        "description": "",
        "example": "card"
      },
      {
        "name": "status",
        "schema": "string",
        "description": "",
        "example": "pending"
      },
      {
        "name": "payoutType",
        "schema": "string",
        "description": "",
        "example": "card"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Payout represents received funds made out to a bank account or debit card"
      },
      {
        "statusCode": "400",
        "description": "Invalid input"
      },
      {
        "statusCode": "422",
        "description": "Unprocessable entity"
      }
    ]
  },
  {
    "url": "/payouts/{id}",
    "method": "removeResource",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Payout",
    "typeScriptTag": "payout",
    "description": "Removes the Payout resource.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Resource identifier",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Payout resource deleted"
      },
      {
        "statusCode": "404",
        "description": "Resource not found"
      }
    ]
  },
  {
    "url": "/payouts/{id}",
    "method": "getResource",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Payout",
    "typeScriptTag": "payout",
    "description": "Retrieves a Payout resource.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Resource identifier",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Payout represents received funds made out to a bank account or debit card"
      },
      {
        "statusCode": "404",
        "description": "Resource not found"
      }
    ]
  },
  {
    "url": "/payouts/{id}",
    "method": "replaceResource",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Payout",
    "typeScriptTag": "payout",
    "description": "Replaces the Payout resource.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Resource identifier",
        "example": "ID"
      },
      {
        "name": "id",
        "schema": "string",
        "description": "",
        "example": "quickbooks-726"
      },
      {
        "name": "integration",
        "schema": "string",
        "description": "",
        "example": "quickbooks"
      },
      {
        "name": "srcId",
        "schema": "string",
        "description": "",
        "example": "GH2JK-67283H-YW82KHX-2883KK-KS78S"
      },
      {
        "name": "amount",
        "schema": "integer",
        "description": "",
        "example": 74753
      },
      {
        "name": "arrivalDate",
        "schema": "string",
        "description": "",
        "example": "2020-11-03T02:17:40.080Z"
      },
      {
        "name": "automatic",
        "schema": "string",
        "description": "",
        "example": "true"
      },
      {
        "name": "balanceTransactionId",
        "schema": "string",
        "description": "",
        "example": "7464"
      },
      {
        "name": "created",
        "schema": "string",
        "description": "",
        "example": "2020-11-03"
      },
      {
        "name": "currency",
        "schema": "string",
        "description": "",
        "example": "USD"
      },
      {
        "name": "payoutDescription",
        "schema": "string",
        "description": "",
        "example": "Payout description"
      },
      {
        "name": "destinationId",
        "schema": "string",
        "description": "",
        "example": "44"
      },
      {
        "name": "failureBalanceTransactionId",
        "schema": "string",
        "description": "",
        "example": "py_1L9D8G2eZgTElo2CaKQjce77"
      },
      {
        "name": "failureCode",
        "schema": "string",
        "description": "",
        "example": "error 43"
      },
      {
        "name": "failureMessage",
        "schema": "string",
        "description": "",
        "example": "payment failed"
      },
      {
        "name": "method",
        "schema": "string",
        "description": "",
        "example": "Standard"
      },
      {
        "name": "sourceType",
        "schema": "string",
        "description": "",
        "example": "card"
      },
      {
        "name": "status",
        "schema": "string",
        "description": "",
        "example": "pending"
      },
      {
        "name": "payoutType",
        "schema": "string",
        "description": "",
        "example": "card"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Payout represents received funds made out to a bank account or debit card"
      },
      {
        "statusCode": "400",
        "description": "Invalid input"
      },
      {
        "statusCode": "404",
        "description": "Resource not found"
      },
      {
        "statusCode": "422",
        "description": "Unprocessable entity"
      }
    ]
  },
  {
    "url": "/payroll",
    "method": "getCollection",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Payroll",
    "typeScriptTag": "payroll",
    "description": "Retrieves the collection of Payroll resources.",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/plans",
    "method": "getCollection",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Plan",
    "typeScriptTag": "plan",
    "description": "Retrieves the collection of Plan resources.",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "The collection page number",
        "default": 1
      },
      {
        "name": "itemsPerPage",
        "schema": "integer",
        "required": false,
        "description": "The number of items per page",
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
    "url": "/plans/{id}",
    "method": "getResource",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Plan",
    "typeScriptTag": "plan",
    "description": "Retrieves a Plan resource.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Resource identifier",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Plan represents the base price, currency and billing cycle for subscriptions"
      },
      {
        "statusCode": "404",
        "description": "Resource not found"
      }
    ]
  },
  {
    "url": "/products",
    "method": "getCollection",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Product",
    "typeScriptTag": "product",
    "description": "Retrieves the collection of Product resources.",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "The collection page number",
        "default": 1
      },
      {
        "name": "itemsPerPage",
        "schema": "integer",
        "required": false,
        "description": "The number of items per page",
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
    "url": "/products",
    "method": "createResource",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Product",
    "typeScriptTag": "product",
    "description": "Creates a Product resource.",
    "parameters": [
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "integration",
        "schema": "string",
        "description": "",
        "example": "quickbooks"
      },
      {
        "name": "additionalType",
        "schema": "string",
        "description": ""
      },
      {
        "name": "alternateName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "award",
        "schema": "string",
        "description": ""
      },
      {
        "name": "categories",
        "schema": "array",
        "description": ""
      },
      {
        "name": "color",
        "schema": "string",
        "description": ""
      },
      {
        "name": "disambiguatingDescription",
        "schema": "string",
        "description": ""
      },
      {
        "name": "gtin12",
        "schema": "string",
        "description": ""
      },
      {
        "name": "gtin13s",
        "schema": "array",
        "description": ""
      },
      {
        "name": "gtin14s",
        "schema": "array",
        "description": ""
      },
      {
        "name": "gtin8s",
        "schema": "array",
        "description": ""
      },
      {
        "name": "image",
        "schema": "string",
        "description": ""
      },
      {
        "name": "isAccessoryOrSparePartFors",
        "schema": "array",
        "description": ""
      },
      {
        "name": "isConsumableFors",
        "schema": "array",
        "description": ""
      },
      {
        "name": "isRelatedTo",
        "schema": "string",
        "description": ""
      },
      {
        "name": "isSimilarTos",
        "schema": "array",
        "description": ""
      },
      {
        "name": "itemCondition",
        "schema": "string",
        "description": ""
      },
      {
        "name": "model",
        "schema": "string",
        "description": ""
      },
      {
        "name": "mpns",
        "schema": "array",
        "description": ""
      },
      {
        "name": "manufacturer",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "productID",
        "schema": "string",
        "description": ""
      },
      {
        "name": "releaseDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "sameA",
        "schema": "string",
        "description": ""
      },
      {
        "name": "skus",
        "schema": "array",
        "description": ""
      },
      {
        "name": "url",
        "schema": "string",
        "description": ""
      },
      {
        "name": "material",
        "schema": "string",
        "description": ""
      },
      {
        "name": "productionDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "purchaseDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "identifier",
        "schema": "string",
        "description": ""
      },
      {
        "name": "srcId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "isActive",
        "schema": "string",
        "description": ""
      },
      {
        "name": "height",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "width",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "weight",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "quantity",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "availableForPurchase",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "updated",
        "schema": "string",
        "description": ""
      },
      {
        "name": "price",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "weightUnit",
        "schema": "string",
        "description": ""
      },
      {
        "name": "heightUnit",
        "schema": "string",
        "description": ""
      },
      {
        "name": "widthUnit",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Any offered product or service. For example: a pair of shoes; a concert ticket; the rental of a car; a haircut; or an episode of a TV show streamed online."
      },
      {
        "statusCode": "400",
        "description": "Invalid input"
      },
      {
        "statusCode": "422",
        "description": "Unprocessable entity"
      }
    ]
  },
  {
    "url": "/products/{id}",
    "method": "removeResource",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Product",
    "typeScriptTag": "product",
    "description": "Removes the Product resource.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Resource identifier",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Product resource deleted"
      },
      {
        "statusCode": "404",
        "description": "Resource not found"
      }
    ]
  },
  {
    "url": "/products/{id}",
    "method": "getResource",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Product",
    "typeScriptTag": "product",
    "description": "Retrieves a Product resource.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Resource identifier",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Any offered product or service. For example: a pair of shoes; a concert ticket; the rental of a car; a haircut; or an episode of a TV show streamed online."
      },
      {
        "statusCode": "404",
        "description": "Resource not found"
      }
    ]
  },
  {
    "url": "/products/{id}",
    "method": "replaceResource",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Product",
    "typeScriptTag": "product",
    "description": "Replaces the Product resource.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Resource identifier",
        "example": "ID"
      },
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "integration",
        "schema": "string",
        "description": "",
        "example": "quickbooks"
      },
      {
        "name": "additionalType",
        "schema": "string",
        "description": ""
      },
      {
        "name": "alternateName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "award",
        "schema": "string",
        "description": ""
      },
      {
        "name": "categories",
        "schema": "array",
        "description": ""
      },
      {
        "name": "color",
        "schema": "string",
        "description": ""
      },
      {
        "name": "disambiguatingDescription",
        "schema": "string",
        "description": ""
      },
      {
        "name": "gtin12",
        "schema": "string",
        "description": ""
      },
      {
        "name": "gtin13s",
        "schema": "array",
        "description": ""
      },
      {
        "name": "gtin14s",
        "schema": "array",
        "description": ""
      },
      {
        "name": "gtin8s",
        "schema": "array",
        "description": ""
      },
      {
        "name": "image",
        "schema": "string",
        "description": ""
      },
      {
        "name": "isAccessoryOrSparePartFors",
        "schema": "array",
        "description": ""
      },
      {
        "name": "isConsumableFors",
        "schema": "array",
        "description": ""
      },
      {
        "name": "isRelatedTo",
        "schema": "string",
        "description": ""
      },
      {
        "name": "isSimilarTos",
        "schema": "array",
        "description": ""
      },
      {
        "name": "itemCondition",
        "schema": "string",
        "description": ""
      },
      {
        "name": "model",
        "schema": "string",
        "description": ""
      },
      {
        "name": "mpns",
        "schema": "array",
        "description": ""
      },
      {
        "name": "manufacturer",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "productID",
        "schema": "string",
        "description": ""
      },
      {
        "name": "releaseDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "sameA",
        "schema": "string",
        "description": ""
      },
      {
        "name": "skus",
        "schema": "array",
        "description": ""
      },
      {
        "name": "url",
        "schema": "string",
        "description": ""
      },
      {
        "name": "material",
        "schema": "string",
        "description": ""
      },
      {
        "name": "productionDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "purchaseDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "identifier",
        "schema": "string",
        "description": ""
      },
      {
        "name": "srcId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "isActive",
        "schema": "string",
        "description": ""
      },
      {
        "name": "height",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "width",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "weight",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "quantity",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "availableForPurchase",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "updated",
        "schema": "string",
        "description": ""
      },
      {
        "name": "price",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "weightUnit",
        "schema": "string",
        "description": ""
      },
      {
        "name": "heightUnit",
        "schema": "string",
        "description": ""
      },
      {
        "name": "widthUnit",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Any offered product or service. For example: a pair of shoes; a concert ticket; the rental of a car; a haircut; or an episode of a TV show streamed online."
      },
      {
        "statusCode": "400",
        "description": "Invalid input"
      },
      {
        "statusCode": "404",
        "description": "Resource not found"
      },
      {
        "statusCode": "422",
        "description": "Unprocessable entity"
      }
    ]
  },
  {
    "url": "/profit_and_loss",
    "method": "getResource",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "ProfitAndLoss",
    "typeScriptTag": "profitAndLoss",
    "description": "Retrieves a ProfitAndLoss resource.",
    "parameters": [
      {
        "name": "start",
        "schema": "string",
        "required": true,
        "description": "YYYY-MM-DD",
        "example": "2022-11-01"
      },
      {
        "name": "end",
        "schema": "string",
        "required": true,
        "description": "YYYY-MM-DD",
        "example": "2022-11-30"
      },
      {
        "name": "accountingMethod",
        "schema": "string",
        "required": true,
        "description": "The Accounting Method",
        "example": "accrual"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Resource not found"
      }
    ]
  },
  {
    "url": "/profit_and_loss_excel",
    "method": "getWorkbook",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "ProfitAndLossExcel",
    "typeScriptTag": "profitAndLossExcel",
    "description": "Retrieves an excel workbook of a series of profit and loss reports",
    "parameters": [
      {
        "name": "start",
        "schema": "string",
        "required": false,
        "description": "YYYY-MM-DD",
        "example": "2022-07-01"
      },
      {
        "name": "end",
        "schema": "string",
        "required": false,
        "description": "YYYY-MM-DD",
        "example": "2022-08-31"
      },
      {
        "name": "refresh",
        "schema": "string",
        "required": false,
        "description": "If refresh is set, data will be fetched from the source application even when cached data is available",
        "example": "true"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "provides an excel workbook of a series of mapped profit and loss reports"
      },
      {
        "statusCode": "404",
        "description": "Resource not found"
      }
    ]
  },
  {
    "url": "/profit_and_loss_report",
    "method": "getMappedReport",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "ProfitAndLossReport",
    "typeScriptTag": "profitAndLossReport",
    "description": "Retrieves a mapped profit and loss report",
    "parameters": [
      {
        "name": "start",
        "schema": "string",
        "required": false,
        "description": "YYYY-MM-DD",
        "example": "2022-01-01"
      },
      {
        "name": "end",
        "schema": "string",
        "required": false,
        "description": "YYYY-MM-DD",
        "example": "2022-01-31"
      },
      {
        "name": "refresh",
        "schema": "string",
        "required": false,
        "description": "If refresh is set, data will be fetched from the source application even when cached data is available",
        "example": "true"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "provides a mapped profit and loss report"
      },
      {
        "statusCode": "404",
        "description": "Resource not found"
      }
    ]
  },
  {
    "url": "/projects",
    "method": "getCollection",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Project",
    "typeScriptTag": "project",
    "description": "Retrieves the collection of Project resources.",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "The collection page number",
        "default": 1
      },
      {
        "name": "itemsPerPage",
        "schema": "integer",
        "required": false,
        "description": "The number of items per page",
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
    "url": "/projects/{id}",
    "method": "getResource",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Project",
    "typeScriptTag": "project",
    "description": "Retrieves a Project resource.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Resource identifier",
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
        "description": "Resource not found"
      }
    ]
  },
  {
    "url": "/proxy_request",
    "method": "getCollection",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "ProxyRequest",
    "typeScriptTag": "proxyRequest",
    "description": "make a GET request to a specific API endpoint",
    "parameters": [
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "The key of the application you would like to request. ",
        "example": "quickbooks"
      },
      {
        "name": "url",
        "schema": "string",
        "required": true,
        "description": "The url of the application you would like to request. ",
        "example": "https://sandbox-quickbooks.api.intuit.com/v3/company/16208146365078362930/query"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/proxy_request",
    "method": "sendRequest",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "ProxyRequest",
    "typeScriptTag": "proxyRequest",
    "description": "make a POST request to a specific API endpoint",
    "parameters": [
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "The key of the application you would like to request. ",
        "example": "quickbooks"
      },
      {
        "name": "url",
        "schema": "string",
        "required": true,
        "description": "The url of the application endpoint you would like to request. ",
        "example": "https://sandbox-quickbooks.api.intuit.com/v3/company/16208146365078362930/query"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Invalid input"
      },
      {
        "statusCode": "422",
        "description": "Unprocessable entity"
      }
    ]
  },
  {
    "url": "/publishing_channels",
    "method": "listResources",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "PublishingChannel",
    "typeScriptTag": "publishingChannel",
    "description": "Retrieves the collection of PublishingChannel resources.",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "The collection page number",
        "default": 1
      },
      {
        "name": "itemsPerPage",
        "schema": "integer",
        "required": false,
        "description": "The number of items per page",
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
    "url": "/publishing_channels/{id}",
    "method": "getResource",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "PublishingChannel",
    "typeScriptTag": "publishingChannel",
    "description": "Retrieves a PublishingChannel resource.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Resource identifier",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Publishing channels represent all channels (e.g. Twitter account, Facebook page) connected to the portal that can be published to"
      },
      {
        "statusCode": "404",
        "description": "Resource not found"
      }
    ]
  },
  {
    "url": "/purchase_credit_notes",
    "method": "listRetrieval",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "PurchaseCreditNote",
    "typeScriptTag": "purchaseCreditNote",
    "description": "Retrieves the collection of PurchaseCreditNote resources.",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "The collection page number",
        "default": 1
      },
      {
        "name": "itemsPerPage",
        "schema": "integer",
        "required": false,
        "description": "The number of items per page",
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
    "url": "/purchase_credit_notes/{id}",
    "method": "getResource",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "PurchaseCreditNote",
    "typeScriptTag": "purchaseCreditNote",
    "description": "Retrieves a PurchaseCreditNote resource.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Resource identifier",
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
        "description": "Resource not found"
      }
    ]
  },
  {
    "url": "/purchase_orders",
    "method": "getCollection",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "PurchaseOrder",
    "typeScriptTag": "purchaseOrder",
    "description": "Retrieves the collection of PurchaseOrder resources.",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "The collection page number",
        "default": 1
      },
      {
        "name": "itemsPerPage",
        "schema": "integer",
        "required": false,
        "description": "The number of items per page",
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
    "url": "/purchase_orders/{id}",
    "method": "getResource",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "PurchaseOrder",
    "typeScriptTag": "purchaseOrder",
    "description": "Retrieves a PurchaseOrder resource.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Resource identifier",
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
        "description": "Resource not found"
      }
    ]
  },
  {
    "url": "/purchases",
    "method": "getCollection",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Purchase",
    "typeScriptTag": "purchase",
    "description": "Retrieves the collection of Purchase resources.",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "The collection page number",
        "default": 1
      },
      {
        "name": "itemsPerPage",
        "schema": "integer",
        "required": false,
        "description": "The number of items per page",
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
    "url": "/purchases/{id}",
    "method": "getResource",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Purchase",
    "typeScriptTag": "purchase",
    "description": "Retrieves a Purchase resource.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Resource identifier",
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
        "description": "Resource not found"
      }
    ]
  },
  {
    "url": "/quotes",
    "method": "getCollection",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Quote",
    "typeScriptTag": "quote",
    "description": "Retrieves the collection of Quote resources.",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "The collection page number",
        "default": 1
      },
      {
        "name": "itemsPerPage",
        "schema": "integer",
        "required": false,
        "description": "The number of items per page",
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
    "url": "/quotes",
    "method": "createResource",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Quote",
    "typeScriptTag": "quote",
    "description": "Creates a Quote resource.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "description": "",
        "example": "quickbooks-726"
      },
      {
        "name": "integration",
        "schema": "string",
        "description": "",
        "example": "quickbooks"
      },
      {
        "name": "srcId",
        "schema": "string",
        "description": "",
        "example": "90300000072369"
      },
      {
        "name": "created",
        "schema": "string",
        "description": "",
        "example": "2021-07-28 00:00:00"
      },
      {
        "name": "modified",
        "schema": "string",
        "description": "",
        "example": "2021-09-15 00:00:00"
      },
      {
        "name": "customerId",
        "schema": "string",
        "description": "",
        "example": "0124"
      },
      {
        "name": "customerName",
        "schema": "string",
        "description": "",
        "example": "John Doe"
      },
      {
        "name": "quoteNumber",
        "schema": "string",
        "description": "",
        "example": "99"
      },
      {
        "name": "txnDate",
        "schema": "string",
        "description": "",
        "example": "2021-07-28 00:00:00"
      },
      {
        "name": "billingCity",
        "schema": "string",
        "description": "",
        "example": "Toronto"
      },
      {
        "name": "billingPostalcode",
        "schema": "string",
        "description": "",
        "example": "H6F0R3"
      },
      {
        "name": "billingCountry",
        "schema": "string",
        "description": "",
        "example": "Canada"
      },
      {
        "name": "shippingCity",
        "schema": "string",
        "description": "",
        "example": "Vancouver"
      },
      {
        "name": "shippingCountry",
        "schema": "string",
        "description": "",
        "example": "Canada"
      },
      {
        "name": "totalAmount",
        "schema": "integer",
        "description": "",
        "example": 5000000
      },
      {
        "name": "currency",
        "schema": "string",
        "description": "",
        "example": "CAD"
      },
      {
        "name": "txnStatus",
        "schema": "string",
        "description": "",
        "example": "2021-09-15 00:00:00"
      },
      {
        "name": "shippingPostalcode",
        "schema": "string",
        "description": "",
        "example": "V5N7G4"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Invalid input"
      },
      {
        "statusCode": "422",
        "description": "Unprocessable entity"
      }
    ]
  },
  {
    "url": "/quotes/{id}",
    "method": "removeResource",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Quote",
    "typeScriptTag": "quote",
    "description": "Removes the Quote resource.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Resource identifier",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Quote resource deleted"
      },
      {
        "statusCode": "404",
        "description": "Resource not found"
      }
    ]
  },
  {
    "url": "/quotes/{id}",
    "method": "getQuoteResource",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Quote",
    "typeScriptTag": "quote",
    "description": "Retrieves a Quote resource.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Resource identifier",
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
        "description": "Resource not found"
      }
    ]
  },
  {
    "url": "/quotes/{id}",
    "method": "replaceResource",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Quote",
    "typeScriptTag": "quote",
    "description": "Replaces the Quote resource.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Resource identifier",
        "example": "ID"
      },
      {
        "name": "id",
        "schema": "string",
        "description": "",
        "example": "quickbooks-726"
      },
      {
        "name": "integration",
        "schema": "string",
        "description": "",
        "example": "quickbooks"
      },
      {
        "name": "srcId",
        "schema": "string",
        "description": "",
        "example": "90300000072369"
      },
      {
        "name": "created",
        "schema": "string",
        "description": "",
        "example": "2021-07-28 00:00:00"
      },
      {
        "name": "modified",
        "schema": "string",
        "description": "",
        "example": "2021-09-15 00:00:00"
      },
      {
        "name": "customerId",
        "schema": "string",
        "description": "",
        "example": "0124"
      },
      {
        "name": "customerName",
        "schema": "string",
        "description": "",
        "example": "John Doe"
      },
      {
        "name": "quoteNumber",
        "schema": "string",
        "description": "",
        "example": "99"
      },
      {
        "name": "txnDate",
        "schema": "string",
        "description": "",
        "example": "2021-07-28 00:00:00"
      },
      {
        "name": "billingCity",
        "schema": "string",
        "description": "",
        "example": "Toronto"
      },
      {
        "name": "billingPostalcode",
        "schema": "string",
        "description": "",
        "example": "H6F0R3"
      },
      {
        "name": "billingCountry",
        "schema": "string",
        "description": "",
        "example": "Canada"
      },
      {
        "name": "shippingCity",
        "schema": "string",
        "description": "",
        "example": "Vancouver"
      },
      {
        "name": "shippingCountry",
        "schema": "string",
        "description": "",
        "example": "Canada"
      },
      {
        "name": "totalAmount",
        "schema": "integer",
        "description": "",
        "example": 5000000
      },
      {
        "name": "currency",
        "schema": "string",
        "description": "",
        "example": "CAD"
      },
      {
        "name": "txnStatus",
        "schema": "string",
        "description": "",
        "example": "2021-09-15 00:00:00"
      },
      {
        "name": "shippingPostalcode",
        "schema": "string",
        "description": "",
        "example": "V5N7G4"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Invalid input"
      },
      {
        "statusCode": "404",
        "description": "Resource not found"
      },
      {
        "statusCode": "422",
        "description": "Unprocessable entity"
      }
    ]
  },
  {
    "url": "/recurring_charges",
    "method": "listResources",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "RecurringCharge",
    "typeScriptTag": "recurringCharge",
    "description": "Retrieves the collection of RecurringCharge resources.",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "The collection page number",
        "default": 1
      },
      {
        "name": "itemsPerPage",
        "schema": "integer",
        "required": false,
        "description": "The number of items per page",
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
    "url": "/recurring_charges",
    "method": "createResource",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "RecurringCharge",
    "typeScriptTag": "recurringCharge",
    "description": "Creates a RecurringCharge resource.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "integration",
        "schema": "string",
        "description": "",
        "example": "quickbooks"
      },
      {
        "name": "name",
        "schema": "string",
        "description": "",
        "example": "Monthly Rental"
      },
      {
        "name": "srcId",
        "schema": "string",
        "description": "",
        "example": "982000000567240"
      },
      {
        "name": "apiClientId",
        "schema": "string",
        "description": "",
        "example": "aa2e-87c43f2a32a9"
      },
      {
        "name": "price",
        "schema": "integer",
        "description": "",
        "example": 1200
      },
      {
        "name": "status",
        "schema": "string",
        "description": "",
        "example": "Pending"
      },
      {
        "name": "returnUrl",
        "schema": "string",
        "description": "",
        "example": "www.example.com"
      },
      {
        "name": "billingDate",
        "schema": "string",
        "description": "",
        "example": "2021-07-28"
      },
      {
        "name": "created",
        "schema": "string",
        "description": "",
        "example": "2021-07-28 00:00:00"
      },
      {
        "name": "modified",
        "schema": "string",
        "description": "",
        "example": "2021-07-28 00:00:00"
      },
      {
        "name": "activationDate",
        "schema": "string",
        "description": "",
        "example": "2021-06-28"
      },
      {
        "name": "cancellationDate",
        "schema": "string",
        "description": "",
        "example": "2021-08-28"
      },
      {
        "name": "trialDays",
        "schema": "integer",
        "description": "",
        "example": 12
      },
      {
        "name": "trialEndsOn",
        "schema": "string",
        "description": "",
        "example": "2021-07-09"
      },
      {
        "name": "decoratedReturnUrl",
        "schema": "string",
        "description": "",
        "example": "https://www.example.com"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Invalid input"
      },
      {
        "statusCode": "422",
        "description": "Unprocessable entity"
      }
    ]
  },
  {
    "url": "/recurring_charges/{id}",
    "method": "removeResource",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "RecurringCharge",
    "typeScriptTag": "recurringCharge",
    "description": "Removes the RecurringCharge resource.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Resource identifier",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "RecurringCharge resource deleted"
      },
      {
        "statusCode": "404",
        "description": "Resource not found"
      }
    ]
  },
  {
    "url": "/recurring_charges/{id}",
    "method": "getResource",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "RecurringCharge",
    "typeScriptTag": "recurringCharge",
    "description": "Retrieves a RecurringCharge resource.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Resource identifier",
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
        "description": "Resource not found"
      }
    ]
  },
  {
    "url": "/recurring_charges/{id}",
    "method": "replaceResource",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "RecurringCharge",
    "typeScriptTag": "recurringCharge",
    "description": "Replaces the RecurringCharge resource.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Resource identifier",
        "example": "ID"
      },
      {
        "name": "id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "integration",
        "schema": "string",
        "description": "",
        "example": "quickbooks"
      },
      {
        "name": "name",
        "schema": "string",
        "description": "",
        "example": "Monthly Rental"
      },
      {
        "name": "srcId",
        "schema": "string",
        "description": "",
        "example": "982000000567240"
      },
      {
        "name": "apiClientId",
        "schema": "string",
        "description": "",
        "example": "aa2e-87c43f2a32a9"
      },
      {
        "name": "price",
        "schema": "integer",
        "description": "",
        "example": 1200
      },
      {
        "name": "status",
        "schema": "string",
        "description": "",
        "example": "Pending"
      },
      {
        "name": "returnUrl",
        "schema": "string",
        "description": "",
        "example": "www.example.com"
      },
      {
        "name": "billingDate",
        "schema": "string",
        "description": "",
        "example": "2021-07-28"
      },
      {
        "name": "created",
        "schema": "string",
        "description": "",
        "example": "2021-07-28 00:00:00"
      },
      {
        "name": "modified",
        "schema": "string",
        "description": "",
        "example": "2021-07-28 00:00:00"
      },
      {
        "name": "activationDate",
        "schema": "string",
        "description": "",
        "example": "2021-06-28"
      },
      {
        "name": "cancellationDate",
        "schema": "string",
        "description": "",
        "example": "2021-08-28"
      },
      {
        "name": "trialDays",
        "schema": "integer",
        "description": "",
        "example": 12
      },
      {
        "name": "trialEndsOn",
        "schema": "string",
        "description": "",
        "example": "2021-07-09"
      },
      {
        "name": "decoratedReturnUrl",
        "schema": "string",
        "description": "",
        "example": "https://www.example.com"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Invalid input"
      },
      {
        "statusCode": "404",
        "description": "Resource not found"
      },
      {
        "statusCode": "422",
        "description": "Unprocessable entity"
      }
    ]
  },
  {
    "url": "/recurring_expenses",
    "method": "listResources",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "RecurringExpense",
    "typeScriptTag": "recurringExpense",
    "description": "Retrieves the collection of RecurringExpense resources.",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "The collection page number",
        "default": 1
      },
      {
        "name": "itemsPerPage",
        "schema": "integer",
        "required": false,
        "description": "The number of items per page",
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
    "url": "/recurring_expenses",
    "method": "createResource",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "RecurringExpense",
    "typeScriptTag": "recurringExpense",
    "description": "Creates a RecurringExpense resource.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "description": "",
        "example": "xero-01e01427-6b48-4d5f-aa2e-87c43f2a32a9"
      },
      {
        "name": "integration",
        "schema": "string",
        "description": "",
        "example": "quickbooks"
      },
      {
        "name": "srcId",
        "schema": "string",
        "description": "",
        "example": "982000000567240"
      },
      {
        "name": "recurrenceName",
        "schema": "string",
        "description": "",
        "example": "Monthly Rental"
      },
      {
        "name": "startDate",
        "schema": "string",
        "description": "",
        "example": "2020-11-19T00:00:00.000Z"
      },
      {
        "name": "endDate",
        "schema": "string",
        "description": "",
        "example": "2024-11-19T00:00:00.000Z"
      },
      {
        "name": "lastCreatedDate",
        "schema": "string",
        "description": "",
        "example": "2021-11-18T00:00:00.000Z"
      },
      {
        "name": "recurrenceFrequency",
        "schema": "string",
        "description": "",
        "example": "months"
      },
      {
        "name": "repeatEvery",
        "schema": "string",
        "description": "",
        "example": "2"
      },
      {
        "name": "nextExpenseDate",
        "schema": "string",
        "description": "",
        "example": "2021-12-18T00:00:00.000Z"
      },
      {
        "name": "accountId",
        "schema": "string",
        "description": "",
        "example": "982000000561057"
      },
      {
        "name": "accountName",
        "schema": "string",
        "description": "",
        "example": "Rent"
      },
      {
        "name": "currency",
        "schema": "string",
        "description": "",
        "example": "USD"
      },
      {
        "name": "total",
        "schema": "integer",
        "description": "",
        "example": 100
      },
      {
        "name": "customerId",
        "schema": "string",
        "description": "",
        "example": "982000000567001"
      },
      {
        "name": "status",
        "schema": "string",
        "description": "",
        "example": "active"
      },
      {
        "name": "created",
        "schema": "string",
        "description": "",
        "example": "2021-07-28 00:00:00"
      },
      {
        "name": "modified",
        "schema": "string",
        "description": "",
        "example": "2021-09-15 00:00:00"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Invalid input"
      },
      {
        "statusCode": "422",
        "description": "Unprocessable entity"
      }
    ]
  },
  {
    "url": "/recurring_expenses/{id}",
    "method": "removeResource",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "RecurringExpense",
    "typeScriptTag": "recurringExpense",
    "description": "Removes the RecurringExpense resource.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Resource identifier",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "RecurringExpense resource deleted"
      },
      {
        "statusCode": "404",
        "description": "Resource not found"
      }
    ]
  },
  {
    "url": "/recurring_expenses/{id}",
    "method": "getResource",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "RecurringExpense",
    "typeScriptTag": "recurringExpense",
    "description": "Retrieves a RecurringExpense resource.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Resource identifier",
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
        "description": "Resource not found"
      }
    ]
  },
  {
    "url": "/recurring_expenses/{id}",
    "method": "replaceResource",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "RecurringExpense",
    "typeScriptTag": "recurringExpense",
    "description": "Replaces the RecurringExpense resource.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Resource identifier",
        "example": "ID"
      },
      {
        "name": "id",
        "schema": "string",
        "description": "",
        "example": "xero-01e01427-6b48-4d5f-aa2e-87c43f2a32a9"
      },
      {
        "name": "integration",
        "schema": "string",
        "description": "",
        "example": "quickbooks"
      },
      {
        "name": "srcId",
        "schema": "string",
        "description": "",
        "example": "982000000567240"
      },
      {
        "name": "recurrenceName",
        "schema": "string",
        "description": "",
        "example": "Monthly Rental"
      },
      {
        "name": "startDate",
        "schema": "string",
        "description": "",
        "example": "2020-11-19T00:00:00.000Z"
      },
      {
        "name": "endDate",
        "schema": "string",
        "description": "",
        "example": "2024-11-19T00:00:00.000Z"
      },
      {
        "name": "lastCreatedDate",
        "schema": "string",
        "description": "",
        "example": "2021-11-18T00:00:00.000Z"
      },
      {
        "name": "recurrenceFrequency",
        "schema": "string",
        "description": "",
        "example": "months"
      },
      {
        "name": "repeatEvery",
        "schema": "string",
        "description": "",
        "example": "2"
      },
      {
        "name": "nextExpenseDate",
        "schema": "string",
        "description": "",
        "example": "2021-12-18T00:00:00.000Z"
      },
      {
        "name": "accountId",
        "schema": "string",
        "description": "",
        "example": "982000000561057"
      },
      {
        "name": "accountName",
        "schema": "string",
        "description": "",
        "example": "Rent"
      },
      {
        "name": "currency",
        "schema": "string",
        "description": "",
        "example": "USD"
      },
      {
        "name": "total",
        "schema": "integer",
        "description": "",
        "example": 100
      },
      {
        "name": "customerId",
        "schema": "string",
        "description": "",
        "example": "982000000567001"
      },
      {
        "name": "status",
        "schema": "string",
        "description": "",
        "example": "active"
      },
      {
        "name": "created",
        "schema": "string",
        "description": "",
        "example": "2021-07-28 00:00:00"
      },
      {
        "name": "modified",
        "schema": "string",
        "description": "",
        "example": "2021-09-15 00:00:00"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Invalid input"
      },
      {
        "statusCode": "404",
        "description": "Resource not found"
      },
      {
        "statusCode": "422",
        "description": "Unprocessable entity"
      }
    ]
  },
  {
    "url": "/refunds",
    "method": "getCollection",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Refund",
    "typeScriptTag": "refund",
    "description": "Retrieves the collection of Refund resources.",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "The collection page number",
        "default": 1
      },
      {
        "name": "itemsPerPage",
        "schema": "integer",
        "required": false,
        "description": "The number of items per page",
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
    "url": "/refunds",
    "method": "createResource",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Refund",
    "typeScriptTag": "refund",
    "description": "Creates a Refund resource.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "description": "",
        "example": "quickbooks-66"
      },
      {
        "name": "integration",
        "schema": "string",
        "description": "",
        "example": "quickbooks"
      },
      {
        "name": "accountId",
        "schema": "string",
        "description": "",
        "example": "35"
      },
      {
        "name": "currency",
        "schema": "string",
        "description": "",
        "example": "USD"
      },
      {
        "name": "paymentRef",
        "schema": "string",
        "description": "",
        "example": "USD"
      },
      {
        "name": "txnDate",
        "schema": "string",
        "description": "",
        "example": "2021-06-24"
      },
      {
        "name": "totalAmount",
        "schema": "integer",
        "description": "",
        "example": 8750
      },
      {
        "name": "balance",
        "schema": "integer",
        "description": "",
        "example": 0
      },
      {
        "name": "customerId",
        "schema": "string",
        "description": "",
        "example": "15"
      },
      {
        "name": "created",
        "schema": "string",
        "description": "",
        "example": "2021-06-24T22:35:07+00:00"
      },
      {
        "name": "modified",
        "schema": "string",
        "description": "",
        "example": "2021-06-24T22:35:07+00:00"
      },
      {
        "name": "srcId",
        "schema": "string",
        "description": "",
        "example": "66"
      },
      {
        "name": "reason",
        "schema": "string",
        "description": "",
        "example": "bad item"
      },
      {
        "name": "status",
        "schema": "string",
        "description": "",
        "example": "succeeded"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Refund captures funds that are refunded to a credit or debit card"
      },
      {
        "statusCode": "400",
        "description": "Invalid input"
      },
      {
        "statusCode": "422",
        "description": "Unprocessable entity"
      }
    ]
  },
  {
    "url": "/refunds/{id}",
    "method": "removeResource",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Refund",
    "typeScriptTag": "refund",
    "description": "Removes the Refund resource.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Resource identifier",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Refund resource deleted"
      },
      {
        "statusCode": "404",
        "description": "Resource not found"
      }
    ]
  },
  {
    "url": "/refunds/{id}",
    "method": "getResource",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Refund",
    "typeScriptTag": "refund",
    "description": "Retrieves a Refund resource.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Resource identifier",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Refund captures funds that are refunded to a credit or debit card"
      },
      {
        "statusCode": "404",
        "description": "Resource not found"
      }
    ]
  },
  {
    "url": "/refunds/{id}",
    "method": "replaceResource",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Refund",
    "typeScriptTag": "refund",
    "description": "Replaces the Refund resource.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Resource identifier",
        "example": "ID"
      },
      {
        "name": "id",
        "schema": "string",
        "description": "",
        "example": "quickbooks-66"
      },
      {
        "name": "integration",
        "schema": "string",
        "description": "",
        "example": "quickbooks"
      },
      {
        "name": "accountId",
        "schema": "string",
        "description": "",
        "example": "35"
      },
      {
        "name": "currency",
        "schema": "string",
        "description": "",
        "example": "USD"
      },
      {
        "name": "paymentRef",
        "schema": "string",
        "description": "",
        "example": "USD"
      },
      {
        "name": "txnDate",
        "schema": "string",
        "description": "",
        "example": "2021-06-24"
      },
      {
        "name": "totalAmount",
        "schema": "integer",
        "description": "",
        "example": 8750
      },
      {
        "name": "balance",
        "schema": "integer",
        "description": "",
        "example": 0
      },
      {
        "name": "customerId",
        "schema": "string",
        "description": "",
        "example": "15"
      },
      {
        "name": "created",
        "schema": "string",
        "description": "",
        "example": "2021-06-24T22:35:07+00:00"
      },
      {
        "name": "modified",
        "schema": "string",
        "description": "",
        "example": "2021-06-24T22:35:07+00:00"
      },
      {
        "name": "srcId",
        "schema": "string",
        "description": "",
        "example": "66"
      },
      {
        "name": "reason",
        "schema": "string",
        "description": "",
        "example": "bad item"
      },
      {
        "name": "status",
        "schema": "string",
        "description": "",
        "example": "succeeded"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Refund captures funds that are refunded to a credit or debit card"
      },
      {
        "statusCode": "400",
        "description": "Invalid input"
      },
      {
        "statusCode": "404",
        "description": "Resource not found"
      },
      {
        "statusCode": "422",
        "description": "Unprocessable entity"
      }
    ]
  },
  {
    "url": "/repeating_invoices",
    "method": "listResources",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "RepeatingInvoice",
    "typeScriptTag": "repeatingInvoice",
    "description": "Retrieves the collection of RepeatingInvoice resources.",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "The collection page number",
        "default": 1
      },
      {
        "name": "itemsPerPage",
        "schema": "integer",
        "required": false,
        "description": "The number of items per page",
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
    "url": "/repeating_invoices",
    "method": "createResource",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "RepeatingInvoice",
    "typeScriptTag": "repeatingInvoice",
    "description": "Creates a RepeatingInvoice resource.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "description": "",
        "example": "xero-01e01427-6b48-4d5f-aa2e-87c43f2a32a9"
      },
      {
        "name": "integration",
        "schema": "string",
        "description": "",
        "example": "quickbooks"
      },
      {
        "name": "srcId",
        "schema": "string",
        "description": "",
        "example": "01e01427-6b48-4d5f-aa2e-87c43f2a32a9"
      },
      {
        "name": "period",
        "schema": "integer",
        "description": "",
        "example": 1
      },
      {
        "name": "unit",
        "schema": "string",
        "description": "",
        "example": "MONTHLY"
      },
      {
        "name": "dueDate",
        "schema": "string",
        "description": "",
        "example": "0"
      },
      {
        "name": "dueDateType",
        "schema": "string",
        "description": "",
        "example": "DAYSAFTERBILLDATE"
      },
      {
        "name": "startDate",
        "schema": "string",
        "description": "",
        "example": "2021-02-27 00:00:00"
      },
      {
        "name": "nextScheduledDate",
        "schema": "string",
        "description": "",
        "example": "2021-07-28 00:00:00"
      },
      {
        "name": "type",
        "schema": "string",
        "description": "",
        "example": "ACCPAY"
      },
      {
        "name": "reference",
        "schema": "string",
        "description": "",
        "example": "AP"
      },
      {
        "name": "hasAttachments",
        "schema": "boolean",
        "description": "",
        "example": false
      },
      {
        "name": "contactId",
        "schema": "string",
        "description": "",
        "example": "3b30a108-9156-4a42-a893-3bbbe7af1ef8"
      },
      {
        "name": "contactName",
        "schema": "string",
        "description": "",
        "example": "Xero"
      },
      {
        "name": "status",
        "schema": "string",
        "description": "",
        "example": "AUTHORISED"
      },
      {
        "name": "lineAmountTypes",
        "schema": "string",
        "description": "",
        "example": "Exclusive"
      },
      {
        "name": "lineItemDescription",
        "schema": "string",
        "description": "",
        "example": "Monthly subscription"
      },
      {
        "name": "lineItemUnitAmount",
        "schema": "integer",
        "description": "",
        "example": 29
      },
      {
        "name": "lineItemTaxType",
        "schema": "string",
        "description": "",
        "example": "INPUT"
      },
      {
        "name": "lineAmount",
        "schema": "integer",
        "description": "",
        "example": 29
      },
      {
        "name": "lineItemAccountCode",
        "schema": "string",
        "description": "",
        "example": "412"
      },
      {
        "name": "lineItemQuantity",
        "schema": "integer",
        "description": "",
        "example": 1
      },
      {
        "name": "lineItemId",
        "schema": "string",
        "description": "",
        "example": "304e5b38-d62f-4c43-91d2-24786154c3c0"
      },
      {
        "name": "subTotal",
        "schema": "integer",
        "description": "",
        "example": 2900
      },
      {
        "name": "totalTax",
        "schema": "integer",
        "description": "",
        "example": 239
      },
      {
        "name": "total",
        "schema": "integer",
        "description": "",
        "example": 3139
      },
      {
        "name": "currencyCode",
        "schema": "string",
        "description": "",
        "example": "USD"
      },
      {
        "name": "recurrenceName",
        "schema": "string",
        "description": "",
        "example": "412"
      },
      {
        "name": "endDate",
        "schema": "string",
        "description": "",
        "example": "2022-07-28 00:00:00"
      },
      {
        "name": "lastSentDate",
        "schema": "string",
        "description": "",
        "example": "2021-08-28 00:00:00"
      },
      {
        "name": "paidInvoicesTotal",
        "schema": "integer",
        "description": "",
        "example": 1000
      },
      {
        "name": "unpaidInvoicesBalance",
        "schema": "integer",
        "description": "",
        "example": 2139
      },
      {
        "name": "discount",
        "schema": "integer",
        "description": "",
        "example": 412
      },
      {
        "name": "billingStreet",
        "schema": "string",
        "description": "",
        "example": "123 lonecrest drive"
      },
      {
        "name": "billingStreet2",
        "schema": "string",
        "description": "",
        "example": "412 fuller cres"
      },
      {
        "name": "billingCity",
        "schema": "string",
        "description": "",
        "example": "Toronto"
      },
      {
        "name": "billingState",
        "schema": "string",
        "description": "",
        "example": "Ontario"
      },
      {
        "name": "billingPostalCode",
        "schema": "string",
        "description": "",
        "example": "H6F 3F6"
      },
      {
        "name": "billingCountry",
        "schema": "string",
        "description": "",
        "example": "Canada"
      },
      {
        "name": "created",
        "schema": "string",
        "description": "",
        "example": "2021-07-28 00:00:00"
      },
      {
        "name": "modified",
        "schema": "string",
        "description": "",
        "example": "2021-09-15 00:00:00"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Repeating invoice represents invoices that are automatically created at regular intervals"
      },
      {
        "statusCode": "400",
        "description": "Invalid input"
      },
      {
        "statusCode": "422",
        "description": "Unprocessable entity"
      }
    ]
  },
  {
    "url": "/repeating_invoices/{id}",
    "method": "removeResource",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "RepeatingInvoice",
    "typeScriptTag": "repeatingInvoice",
    "description": "Removes the RepeatingInvoice resource.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Resource identifier",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "RepeatingInvoice resource deleted"
      },
      {
        "statusCode": "404",
        "description": "Resource not found"
      }
    ]
  },
  {
    "url": "/repeating_invoices/{id}",
    "method": "getResource",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "RepeatingInvoice",
    "typeScriptTag": "repeatingInvoice",
    "description": "Retrieves a RepeatingInvoice resource.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Resource identifier",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Repeating invoice represents invoices that are automatically created at regular intervals"
      },
      {
        "statusCode": "404",
        "description": "Resource not found"
      }
    ]
  },
  {
    "url": "/repeating_invoices/{id}",
    "method": "replaceResource",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "RepeatingInvoice",
    "typeScriptTag": "repeatingInvoice",
    "description": "Replaces the RepeatingInvoice resource.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Resource identifier",
        "example": "ID"
      },
      {
        "name": "id",
        "schema": "string",
        "description": "",
        "example": "xero-01e01427-6b48-4d5f-aa2e-87c43f2a32a9"
      },
      {
        "name": "integration",
        "schema": "string",
        "description": "",
        "example": "quickbooks"
      },
      {
        "name": "srcId",
        "schema": "string",
        "description": "",
        "example": "01e01427-6b48-4d5f-aa2e-87c43f2a32a9"
      },
      {
        "name": "period",
        "schema": "integer",
        "description": "",
        "example": 1
      },
      {
        "name": "unit",
        "schema": "string",
        "description": "",
        "example": "MONTHLY"
      },
      {
        "name": "dueDate",
        "schema": "string",
        "description": "",
        "example": "0"
      },
      {
        "name": "dueDateType",
        "schema": "string",
        "description": "",
        "example": "DAYSAFTERBILLDATE"
      },
      {
        "name": "startDate",
        "schema": "string",
        "description": "",
        "example": "2021-02-27 00:00:00"
      },
      {
        "name": "nextScheduledDate",
        "schema": "string",
        "description": "",
        "example": "2021-07-28 00:00:00"
      },
      {
        "name": "type",
        "schema": "string",
        "description": "",
        "example": "ACCPAY"
      },
      {
        "name": "reference",
        "schema": "string",
        "description": "",
        "example": "AP"
      },
      {
        "name": "hasAttachments",
        "schema": "boolean",
        "description": "",
        "example": false
      },
      {
        "name": "contactId",
        "schema": "string",
        "description": "",
        "example": "3b30a108-9156-4a42-a893-3bbbe7af1ef8"
      },
      {
        "name": "contactName",
        "schema": "string",
        "description": "",
        "example": "Xero"
      },
      {
        "name": "status",
        "schema": "string",
        "description": "",
        "example": "AUTHORISED"
      },
      {
        "name": "lineAmountTypes",
        "schema": "string",
        "description": "",
        "example": "Exclusive"
      },
      {
        "name": "lineItemDescription",
        "schema": "string",
        "description": "",
        "example": "Monthly subscription"
      },
      {
        "name": "lineItemUnitAmount",
        "schema": "integer",
        "description": "",
        "example": 29
      },
      {
        "name": "lineItemTaxType",
        "schema": "string",
        "description": "",
        "example": "INPUT"
      },
      {
        "name": "lineAmount",
        "schema": "integer",
        "description": "",
        "example": 29
      },
      {
        "name": "lineItemAccountCode",
        "schema": "string",
        "description": "",
        "example": "412"
      },
      {
        "name": "lineItemQuantity",
        "schema": "integer",
        "description": "",
        "example": 1
      },
      {
        "name": "lineItemId",
        "schema": "string",
        "description": "",
        "example": "304e5b38-d62f-4c43-91d2-24786154c3c0"
      },
      {
        "name": "subTotal",
        "schema": "integer",
        "description": "",
        "example": 2900
      },
      {
        "name": "totalTax",
        "schema": "integer",
        "description": "",
        "example": 239
      },
      {
        "name": "total",
        "schema": "integer",
        "description": "",
        "example": 3139
      },
      {
        "name": "currencyCode",
        "schema": "string",
        "description": "",
        "example": "USD"
      },
      {
        "name": "recurrenceName",
        "schema": "string",
        "description": "",
        "example": "412"
      },
      {
        "name": "endDate",
        "schema": "string",
        "description": "",
        "example": "2022-07-28 00:00:00"
      },
      {
        "name": "lastSentDate",
        "schema": "string",
        "description": "",
        "example": "2021-08-28 00:00:00"
      },
      {
        "name": "paidInvoicesTotal",
        "schema": "integer",
        "description": "",
        "example": 1000
      },
      {
        "name": "unpaidInvoicesBalance",
        "schema": "integer",
        "description": "",
        "example": 2139
      },
      {
        "name": "discount",
        "schema": "integer",
        "description": "",
        "example": 412
      },
      {
        "name": "billingStreet",
        "schema": "string",
        "description": "",
        "example": "123 lonecrest drive"
      },
      {
        "name": "billingStreet2",
        "schema": "string",
        "description": "",
        "example": "412 fuller cres"
      },
      {
        "name": "billingCity",
        "schema": "string",
        "description": "",
        "example": "Toronto"
      },
      {
        "name": "billingState",
        "schema": "string",
        "description": "",
        "example": "Ontario"
      },
      {
        "name": "billingPostalCode",
        "schema": "string",
        "description": "",
        "example": "H6F 3F6"
      },
      {
        "name": "billingCountry",
        "schema": "string",
        "description": "",
        "example": "Canada"
      },
      {
        "name": "created",
        "schema": "string",
        "description": "",
        "example": "2021-07-28 00:00:00"
      },
      {
        "name": "modified",
        "schema": "string",
        "description": "",
        "example": "2021-09-15 00:00:00"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Repeating invoice represents invoices that are automatically created at regular intervals"
      },
      {
        "statusCode": "400",
        "description": "Invalid input"
      },
      {
        "statusCode": "404",
        "description": "Resource not found"
      },
      {
        "statusCode": "422",
        "description": "Unprocessable entity"
      }
    ]
  },
  {
    "url": "/reports",
    "method": "getCollection",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Report",
    "typeScriptTag": "report",
    "description": "Retrieves the collection of Report resources.",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "The collection page number",
        "default": 1
      },
      {
        "name": "itemsPerPage",
        "schema": "integer",
        "required": false,
        "description": "The number of items per page",
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
    "url": "/reports/{id}",
    "method": "getResource",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Report",
    "typeScriptTag": "report",
    "description": "Retrieves a Report resource.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Resource identifier",
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
        "description": "Resource not found"
      }
    ]
  },
  {
    "url": "/reservations",
    "method": "getCollection",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Reservation",
    "typeScriptTag": "reservation",
    "description": "Retrieves the collection of Reservation resources.",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "The collection page number",
        "default": 1
      },
      {
        "name": "itemsPerPage",
        "schema": "integer",
        "required": false,
        "description": "The number of items per page",
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
    "url": "/reservations/{id}",
    "method": "getResource",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Reservation",
    "typeScriptTag": "reservation",
    "description": "Retrieves a Reservation resource.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Resource identifier",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Describes a reservation for travel, dining or an event. Some reservations require tickets. \\\\n\\\\nNote: This type is for information about actual reservations, e.g. in confirmation emails or HTML pages with individual confirmations of reservations. For offers of tickets, restaurant reservations, flights, or rental cars, use \\[\\[Offer\\]\\]."
      },
      {
        "statusCode": "404",
        "description": "Resource not found"
      }
    ]
  },
  {
    "url": "/revenue_stats",
    "method": "getCollection",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "RevenueStat",
    "typeScriptTag": "revenueStat",
    "description": "Retrieves the collection of RevenueStat resources.",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "The collection page number",
        "default": 1
      },
      {
        "name": "itemsPerPage",
        "schema": "integer",
        "required": false,
        "description": "The number of items per page",
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
    "url": "/revenue_stats/{id}",
    "method": "getResource",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "RevenueStat",
    "typeScriptTag": "revenueStat",
    "description": "Retrieves a RevenueStat resource.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Resource identifier",
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
        "description": "Resource not found"
      }
    ]
  },
  {
    "url": "/sales_orders",
    "method": "getCollection",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "SalesOrder",
    "typeScriptTag": "salesOrder",
    "description": "Retrieves the collection of SalesOrder resources.",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "The collection page number",
        "default": 1
      },
      {
        "name": "itemsPerPage",
        "schema": "integer",
        "required": false,
        "description": "The number of items per page",
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
    "url": "/sales_orders/{id}",
    "method": "getResource",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "SalesOrder",
    "typeScriptTag": "salesOrder",
    "description": "Retrieves a SalesOrder resource.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Resource identifier",
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
        "description": "Resource not found"
      }
    ]
  },
  {
    "url": "/site_events",
    "method": "getCollection",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "SiteEvent",
    "typeScriptTag": "siteEvent",
    "description": "Retrieves the collection of SiteEvent resources.",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "The collection page number",
        "default": 1
      },
      {
        "name": "itemsPerPage",
        "schema": "integer",
        "required": false,
        "description": "The number of items per page",
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
    "url": "/site_events/{id}",
    "method": "getResource",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "SiteEvent",
    "typeScriptTag": "siteEvent",
    "description": "Retrieves a SiteEvent resource.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Resource identifier",
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
        "description": "Resource not found"
      }
    ]
  },
  {
    "url": "/statements",
    "method": "getCollection",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Statement",
    "typeScriptTag": "statement",
    "description": "Retrieves the collection of Statement resources.",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "The collection page number",
        "default": 1
      },
      {
        "name": "itemsPerPage",
        "schema": "integer",
        "required": false,
        "description": "The number of items per page",
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
    "url": "/statements/{id}",
    "method": "getResource",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Statement",
    "typeScriptTag": "statement",
    "description": "Retrieves a Statement resource.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Resource identifier",
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
        "description": "Resource not found"
      }
    ]
  },
  {
    "url": "/subscriber_locations",
    "method": "listRetrieval",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "SubscriberLocation",
    "typeScriptTag": "subscriberLocation",
    "description": "Retrieves the collection of SubscriberLocation resources.",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "The collection page number",
        "default": 1
      },
      {
        "name": "itemsPerPage",
        "schema": "integer",
        "required": false,
        "description": "The number of items per page",
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
    "url": "/subscriber_locations/{id}",
    "method": "getResource",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "SubscriberLocation",
    "typeScriptTag": "subscriberLocation",
    "description": "Retrieves a SubscriberLocation resource.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Resource identifier",
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
        "description": "Resource not found"
      }
    ]
  },
  {
    "url": "/subscriptions",
    "method": "getCollection",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Subscription",
    "typeScriptTag": "subscription",
    "description": "Retrieves the collection of Subscription resources.",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "The collection page number",
        "default": 1
      },
      {
        "name": "itemsPerPage",
        "schema": "integer",
        "required": false,
        "description": "The number of items per page",
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
    "url": "/subscriptions",
    "method": "createResource",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Subscription",
    "typeScriptTag": "subscription",
    "description": "Creates a Subscription resource.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "description": "",
        "example": "quickbooks-726"
      },
      {
        "name": "integration",
        "schema": "string",
        "description": "",
        "example": "quickbooks"
      },
      {
        "name": "srcId",
        "schema": "string",
        "description": "",
        "example": "GH2JK-67283H-YW82KHX-2883KK-KS78S"
      },
      {
        "name": "status",
        "schema": "boolean",
        "description": "",
        "example": true
      },
      {
        "name": "balance",
        "schema": "integer",
        "description": "",
        "example": 500045
      },
      {
        "name": "totalRevenue",
        "schema": "integer",
        "description": "",
        "example": 387687
      },
      {
        "name": "productPrice",
        "schema": "integer",
        "description": "",
        "example": 4999
      },
      {
        "name": "currencyCode",
        "schema": "string",
        "description": "",
        "example": "EUR"
      },
      {
        "name": "currentPeriodStart",
        "schema": "string",
        "description": "",
        "example": "1655792028"
      },
      {
        "name": "currentPeriodEnd",
        "schema": "string",
        "description": "",
        "example": "1653977628"
      },
      {
        "name": "nextPeriodStart",
        "schema": "string",
        "description": "",
        "example": "1653977628"
      },
      {
        "name": "cancelAtEndOfPeriod",
        "schema": "boolean",
        "description": "",
        "example": true
      },
      {
        "name": "signupId",
        "schema": "string",
        "description": "",
        "example": "user123"
      },
      {
        "name": "signupRevenue",
        "schema": "string",
        "description": "",
        "example": "250"
      },
      {
        "name": "couponCode",
        "schema": "string",
        "description": "",
        "example": "PROMOCODE"
      },
      {
        "name": "customerId",
        "schema": "string",
        "description": "",
        "example": "123"
      },
      {
        "name": "productId",
        "schema": "string",
        "description": "",
        "example": "321"
      },
      {
        "name": "creditCardId",
        "schema": "string",
        "description": "",
        "example": "4250"
      },
      {
        "name": "created",
        "schema": "string",
        "description": "",
        "example": "2013-11-18T02:17:40.080Z"
      },
      {
        "name": "modified",
        "schema": "string",
        "description": "",
        "example": "2013-11-18T02:17:40.080Z"
      },
      {
        "name": "customerFirstName",
        "schema": "string",
        "description": "",
        "example": "Jane"
      },
      {
        "name": "customerLastName",
        "schema": "string",
        "description": "",
        "example": "Doe"
      },
      {
        "name": "startDate",
        "schema": "string",
        "description": "",
        "example": "2013-11-18T02:17:40.080Z"
      },
      {
        "name": "endDate",
        "schema": "string",
        "description": "",
        "example": "2015-11-18T02:17:40.080Z"
      },
      {
        "name": "planName",
        "schema": "string",
        "description": "",
        "example": "Basic Plan"
      },
      {
        "name": "activated",
        "schema": "string",
        "description": "",
        "example": "Jan 23 2023"
      },
      {
        "name": "remainingIntervals",
        "schema": "integer",
        "description": "",
        "example": 12
      },
      {
        "name": "monthlyRevenue",
        "schema": "integer",
        "description": "",
        "example": 500000
      },
      {
        "name": "netMonthlyRevenue",
        "schema": "integer",
        "description": "",
        "example": 300000
      },
      {
        "name": "contractStartDate",
        "schema": "string",
        "description": "",
        "example": "2013-11-18T02:17:40.080Z"
      },
      {
        "name": "expiredTimestamp",
        "schema": "string",
        "description": "",
        "example": "2013-11-18T02:17:40.080Z"
      },
      {
        "name": "planInterval",
        "schema": "string",
        "description": "",
        "example": "Monthly"
      },
      {
        "name": "numOfIntervals",
        "schema": "integer",
        "description": "",
        "example": 12
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Invalid input"
      },
      {
        "statusCode": "422",
        "description": "Unprocessable entity"
      }
    ]
  },
  {
    "url": "/subscriptions/{id}",
    "method": "removeResource",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Subscription",
    "typeScriptTag": "subscription",
    "description": "Removes the Subscription resource.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Resource identifier",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Subscription resource deleted"
      },
      {
        "statusCode": "404",
        "description": "Resource not found"
      }
    ]
  },
  {
    "url": "/subscriptions/{id}",
    "method": "getResource",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Subscription",
    "typeScriptTag": "subscription",
    "description": "Retrieves a Subscription resource.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Resource identifier",
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
        "description": "Resource not found"
      }
    ]
  },
  {
    "url": "/subscriptions/{id}",
    "method": "replaceResource",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Subscription",
    "typeScriptTag": "subscription",
    "description": "Replaces the Subscription resource.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Resource identifier",
        "example": "ID"
      },
      {
        "name": "id",
        "schema": "string",
        "description": "",
        "example": "quickbooks-726"
      },
      {
        "name": "integration",
        "schema": "string",
        "description": "",
        "example": "quickbooks"
      },
      {
        "name": "srcId",
        "schema": "string",
        "description": "",
        "example": "GH2JK-67283H-YW82KHX-2883KK-KS78S"
      },
      {
        "name": "status",
        "schema": "boolean",
        "description": "",
        "example": true
      },
      {
        "name": "balance",
        "schema": "integer",
        "description": "",
        "example": 500045
      },
      {
        "name": "totalRevenue",
        "schema": "integer",
        "description": "",
        "example": 387687
      },
      {
        "name": "productPrice",
        "schema": "integer",
        "description": "",
        "example": 4999
      },
      {
        "name": "currencyCode",
        "schema": "string",
        "description": "",
        "example": "EUR"
      },
      {
        "name": "currentPeriodStart",
        "schema": "string",
        "description": "",
        "example": "1655792028"
      },
      {
        "name": "currentPeriodEnd",
        "schema": "string",
        "description": "",
        "example": "1653977628"
      },
      {
        "name": "nextPeriodStart",
        "schema": "string",
        "description": "",
        "example": "1653977628"
      },
      {
        "name": "cancelAtEndOfPeriod",
        "schema": "boolean",
        "description": "",
        "example": true
      },
      {
        "name": "signupId",
        "schema": "string",
        "description": "",
        "example": "user123"
      },
      {
        "name": "signupRevenue",
        "schema": "string",
        "description": "",
        "example": "250"
      },
      {
        "name": "couponCode",
        "schema": "string",
        "description": "",
        "example": "PROMOCODE"
      },
      {
        "name": "customerId",
        "schema": "string",
        "description": "",
        "example": "123"
      },
      {
        "name": "productId",
        "schema": "string",
        "description": "",
        "example": "321"
      },
      {
        "name": "creditCardId",
        "schema": "string",
        "description": "",
        "example": "4250"
      },
      {
        "name": "created",
        "schema": "string",
        "description": "",
        "example": "2013-11-18T02:17:40.080Z"
      },
      {
        "name": "modified",
        "schema": "string",
        "description": "",
        "example": "2013-11-18T02:17:40.080Z"
      },
      {
        "name": "customerFirstName",
        "schema": "string",
        "description": "",
        "example": "Jane"
      },
      {
        "name": "customerLastName",
        "schema": "string",
        "description": "",
        "example": "Doe"
      },
      {
        "name": "startDate",
        "schema": "string",
        "description": "",
        "example": "2013-11-18T02:17:40.080Z"
      },
      {
        "name": "endDate",
        "schema": "string",
        "description": "",
        "example": "2015-11-18T02:17:40.080Z"
      },
      {
        "name": "planName",
        "schema": "string",
        "description": "",
        "example": "Basic Plan"
      },
      {
        "name": "activated",
        "schema": "string",
        "description": "",
        "example": "Jan 23 2023"
      },
      {
        "name": "remainingIntervals",
        "schema": "integer",
        "description": "",
        "example": 12
      },
      {
        "name": "monthlyRevenue",
        "schema": "integer",
        "description": "",
        "example": 500000
      },
      {
        "name": "netMonthlyRevenue",
        "schema": "integer",
        "description": "",
        "example": 300000
      },
      {
        "name": "contractStartDate",
        "schema": "string",
        "description": "",
        "example": "2013-11-18T02:17:40.080Z"
      },
      {
        "name": "expiredTimestamp",
        "schema": "string",
        "description": "",
        "example": "2013-11-18T02:17:40.080Z"
      },
      {
        "name": "planInterval",
        "schema": "string",
        "description": "",
        "example": "Monthly"
      },
      {
        "name": "numOfIntervals",
        "schema": "integer",
        "description": "",
        "example": 12
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Invalid input"
      },
      {
        "statusCode": "404",
        "description": "Resource not found"
      },
      {
        "statusCode": "422",
        "description": "Unprocessable entity"
      }
    ]
  },
  {
    "url": "/support_tickets",
    "method": "getCollection",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "SupportTicket",
    "typeScriptTag": "supportTicket",
    "description": "Retrieves the collection of SupportTicket resources.",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "The collection page number",
        "default": 1
      },
      {
        "name": "itemsPerPage",
        "schema": "integer",
        "required": false,
        "description": "The number of items per page",
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
    "url": "/support_tickets/{id}",
    "method": "getResource",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "SupportTicket",
    "typeScriptTag": "supportTicket",
    "description": "Retrieves a SupportTicket resource.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Resource identifier",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Support tickets represent a customer request for help, support, service, or a response, and the responses generated in reply to the request."
      },
      {
        "statusCode": "404",
        "description": "Resource not found"
      }
    ]
  },
  {
    "url": "/tasks",
    "method": "getCollection",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Task",
    "typeScriptTag": "task",
    "description": "Retrieves the collection of Task resources.",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "The collection page number",
        "default": 1
      },
      {
        "name": "itemsPerPage",
        "schema": "integer",
        "required": false,
        "description": "The number of items per page",
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
    "url": "/tasks/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Task",
    "typeScriptTag": "task",
    "description": "Retrieves a Task resource.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Resource identifier",
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
        "description": "Resource not found"
      }
    ]
  },
  {
    "url": "/tax_agencies",
    "method": "getCollection",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "TaxAgency",
    "typeScriptTag": "taxAgency",
    "description": "Retrieves the collection of TaxAgency resources.",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "The collection page number",
        "default": 1
      },
      {
        "name": "itemsPerPage",
        "schema": "integer",
        "required": false,
        "description": "The number of items per page",
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
    "url": "/tax_agencies/{id}",
    "method": "getResource",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "TaxAgency",
    "typeScriptTag": "taxAgency",
    "description": "Retrieves a TaxAgency resource.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Resource identifier",
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
        "description": "Resource not found"
      }
    ]
  },
  {
    "url": "/tax_rates",
    "method": "getCollection",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "TaxRate",
    "typeScriptTag": "taxRate",
    "description": "Retrieves the collection of TaxRate resources.",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "The collection page number",
        "default": 1
      },
      {
        "name": "itemsPerPage",
        "schema": "integer",
        "required": false,
        "description": "The number of items per page",
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
    "url": "/tax_rates/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "TaxRate",
    "typeScriptTag": "taxRate",
    "description": "Retrieves a TaxRate resource.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Resource identifier",
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
        "description": "Resource not found"
      }
    ]
  },
  {
    "url": "/terms",
    "method": "getCollection",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Term",
    "typeScriptTag": "term",
    "description": "Retrieves the collection of Term resources.",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "The collection page number",
        "default": 1
      },
      {
        "name": "itemsPerPage",
        "schema": "integer",
        "required": false,
        "description": "The number of items per page",
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
    "url": "/terms/{id}",
    "method": "getResource",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Term",
    "typeScriptTag": "term",
    "description": "Retrieves a Term resource.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Resource identifier",
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
        "description": "Resource not found"
      }
    ]
  },
  {
    "url": "/tracking_categories",
    "method": "listResources",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "TrackingCategory",
    "typeScriptTag": "trackingCategory",
    "description": "Retrieves the collection of TrackingCategory resources.",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "The collection page number",
        "default": 1
      },
      {
        "name": "itemsPerPage",
        "schema": "integer",
        "required": false,
        "description": "The number of items per page",
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
    "url": "/tracking_categories/{id}",
    "method": "getResource",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "TrackingCategory",
    "typeScriptTag": "trackingCategory",
    "description": "Retrieves a TrackingCategory resource.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Resource identifier",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Tracking category represents categories defined for report generation and tracking"
      },
      {
        "statusCode": "404",
        "description": "Resource not found"
      }
    ]
  },
  {
    "url": "/transaction_match_report",
    "method": "getReport",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "TransactionMatchReport",
    "typeScriptTag": "transactionMatchReport",
    "description": "Retrieves a transaction match report which includes a details array and a summary",
    "parameters": [
      {
        "name": "start",
        "schema": "string",
        "required": false,
        "description": "YYYY-MM-DD",
        "example": "2022-07-01"
      },
      {
        "name": "end",
        "schema": "string",
        "required": false,
        "description": "YYYY-MM-DD",
        "example": "2022-08-31"
      },
      {
        "name": "refresh",
        "schema": "string",
        "required": false,
        "description": "If refresh is set, data will be fetched from the source application even when cached data is available",
        "example": "true"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Provides a transaction match report showing which transactions match in banking data sources and accounting data sources"
      },
      {
        "statusCode": "404",
        "description": "Resource not found"
      }
    ]
  },
  {
    "url": "/transaction_match_series",
    "method": "getMonthlySeries",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "TransactionMatchSeries",
    "typeScriptTag": "transactionMatchSeries",
    "description": "Retrieves a monthly series of transaction match reports which include details arrays and summaries",
    "parameters": [
      {
        "name": "start",
        "schema": "string",
        "required": false,
        "description": "YYYY-MM-DD",
        "example": "2022-07-01"
      },
      {
        "name": "end",
        "schema": "string",
        "required": false,
        "description": "YYYY-MM-DD",
        "example": "2022-08-31"
      },
      {
        "name": "refresh",
        "schema": "string",
        "required": false,
        "description": "If refresh is set, data will be fetched from the source application even when cached data is available",
        "example": "true"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Provides a monthly series of transaction match reports showing which transactions match in banking data sources and accounting data sources"
      },
      {
        "statusCode": "404",
        "description": "Resource not found"
      }
    ]
  },
  {
    "url": "/transactions",
    "method": "getCollection",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Transaction",
    "typeScriptTag": "transaction",
    "description": "Retrieves a Collection of transaction resources",
    "parameters": [
      {
        "name": "start",
        "schema": "string",
        "required": false,
        "description": "YYYY-MM-DD",
        "example": "2022-07-01"
      },
      {
        "name": "end",
        "schema": "string",
        "required": false,
        "description": "YYYY-MM-DD",
        "example": "2022-08-31"
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "The collection page number",
        "default": 1
      },
      {
        "name": "itemsPerPage",
        "schema": "integer",
        "required": false,
        "description": "The number of items per page",
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
    "url": "/transactions/{id}",
    "method": "getResource",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Transaction",
    "typeScriptTag": "transaction",
    "description": "Retrieves a Transaction resource.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Resource identifier",
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
        "description": "Resource not found"
      }
    ]
  },
  {
    "url": "/trial_balances",
    "method": "getResource",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "TrialBalance",
    "typeScriptTag": "trialBalance",
    "description": "Retrieves a TrialBalance resource.",
    "parameters": [
      {
        "name": "end",
        "schema": "string",
        "required": true,
        "description": "YYYY-MM-DD",
        "example": "2022-11-30"
      },
      {
        "name": "accountingMethod",
        "schema": "string",
        "required": true,
        "description": "The Accounting Method",
        "example": "accrual"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Resource not found"
      }
    ]
  },
  {
    "url": "/unbilled_charges",
    "method": "listResources",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "UnbilledCharge",
    "typeScriptTag": "unbilledCharge",
    "description": "Retrieves the collection of UnbilledCharge resources.",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "The collection page number",
        "default": 1
      },
      {
        "name": "itemsPerPage",
        "schema": "integer",
        "required": false,
        "description": "The number of items per page",
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
    "url": "/unbilled_charges/{id}",
    "method": "getResource",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "UnbilledCharge",
    "typeScriptTag": "unbilledCharge",
    "description": "Retrieves a UnbilledCharge resource.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Resource identifier",
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
        "description": "Resource not found"
      }
    ]
  },
  {
    "url": "/users",
    "method": "getCollection",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "User",
    "typeScriptTag": "user",
    "description": "Retrieves the collection of User resources.",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "The collection page number",
        "default": 1
      },
      {
        "name": "itemsPerPage",
        "schema": "integer",
        "required": false,
        "description": "The number of items per page",
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
    "url": "/users/{id}",
    "method": "getResource",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "User",
    "typeScriptTag": "user",
    "description": "Retrieves a User resource.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Resource identifier",
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
        "description": "Resource not found"
      }
    ]
  },
  {
    "url": "/vendor_credits",
    "method": "getCollection",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "VendorCredit",
    "typeScriptTag": "vendorCredit",
    "description": "Retrieves the collection of VendorCredit resources.",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "The collection page number",
        "default": 1
      },
      {
        "name": "itemsPerPage",
        "schema": "integer",
        "required": false,
        "description": "The number of items per page",
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
    "url": "/vendor_credits",
    "method": "createResource",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "VendorCredit",
    "typeScriptTag": "vendorCredit",
    "description": "Creates a VendorCredit resource.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "quickbooks-321"
      },
      {
        "name": "integration",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "quickbooks"
      },
      {
        "name": "srcId",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "3000000002075"
      },
      {
        "name": "date",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "2014-08-28"
      },
      {
        "name": "status",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "open"
      },
      {
        "name": "vendorId",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "460000000020029"
      },
      {
        "name": "vendorName",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Bowman and Co"
      },
      {
        "name": "currency",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "USD"
      },
      {
        "name": "subtotal",
        "schema": "integer",
        "required": false,
        "description": "",
        "example": 3000
      },
      {
        "name": "totalAmount",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 3500
      },
      {
        "name": "balance",
        "schema": "integer",
        "required": false,
        "description": "",
        "example": 2150
      },
      {
        "name": "created",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "2014-08-28T22:53:31-0700"
      },
      {
        "name": "modified",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "2014-08-28T22:53:31-0700"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Invalid input"
      },
      {
        "statusCode": "422",
        "description": "Unprocessable entity"
      }
    ]
  },
  {
    "url": "/vendor_credits/{id}",
    "method": "removeResource",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "VendorCredit",
    "typeScriptTag": "vendorCredit",
    "description": "Removes the VendorCredit resource.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Resource identifier",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "VendorCredit resource deleted"
      },
      {
        "statusCode": "404",
        "description": "Resource not found"
      }
    ]
  },
  {
    "url": "/vendor_credits/{id}",
    "method": "getResource",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "VendorCredit",
    "typeScriptTag": "vendorCredit",
    "description": "Retrieves a VendorCredit resource.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Resource identifier",
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
        "description": "Resource not found"
      }
    ]
  },
  {
    "url": "/vendor_credits/{id}",
    "method": "replaceResource",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "VendorCredit",
    "typeScriptTag": "vendorCredit",
    "description": "Replaces the VendorCredit resource.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Resource identifier",
        "example": "ID"
      },
      {
        "name": "id",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "quickbooks-321"
      },
      {
        "name": "integration",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "quickbooks"
      },
      {
        "name": "srcId",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "3000000002075"
      },
      {
        "name": "date",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "2014-08-28"
      },
      {
        "name": "status",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "open"
      },
      {
        "name": "vendorId",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "460000000020029"
      },
      {
        "name": "vendorName",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Bowman and Co"
      },
      {
        "name": "currency",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "USD"
      },
      {
        "name": "subtotal",
        "schema": "integer",
        "required": false,
        "description": "",
        "example": 3000
      },
      {
        "name": "totalAmount",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 3500
      },
      {
        "name": "balance",
        "schema": "integer",
        "required": false,
        "description": "",
        "example": 2150
      },
      {
        "name": "created",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "2014-08-28T22:53:31-0700"
      },
      {
        "name": "modified",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "2014-08-28T22:53:31-0700"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Invalid input"
      },
      {
        "statusCode": "404",
        "description": "Resource not found"
      },
      {
        "statusCode": "422",
        "description": "Unprocessable entity"
      }
    ]
  },
  {
    "url": "/vendor_payments",
    "method": "getCollection",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "VendorPayment",
    "typeScriptTag": "vendorPayment",
    "description": "Retrieves the collection of VendorPayment resources.",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "The collection page number",
        "default": 1
      },
      {
        "name": "itemsPerPage",
        "schema": "integer",
        "required": false,
        "description": "The number of items per page",
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
    "url": "/vendor_payments",
    "method": "createResource",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "VendorPayment",
    "typeScriptTag": "vendorPayment",
    "description": "Creates a VendorPayment resource.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "quickbooks-321"
      },
      {
        "name": "integration",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "quickbooks"
      },
      {
        "name": "srcId",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "460000000053219"
      },
      {
        "name": "vendorId",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "460000000026049"
      },
      {
        "name": "vendorName",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Bowman and Co"
      },
      {
        "name": "paymentMode",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Stripe"
      },
      {
        "name": "txnDate",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "2013-10-07"
      },
      {
        "name": "referenceNumber",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "REF#912300"
      },
      {
        "name": "amount",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 12500
      },
      {
        "name": "balance",
        "schema": "integer",
        "required": false,
        "description": "",
        "example": 3500
      },
      {
        "name": "currency",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "USD"
      },
      {
        "name": "created",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "2016-12-16T00:18:42-0500"
      },
      {
        "name": "modified",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "2016-12-16T00:18:42-0500"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Invalid input"
      },
      {
        "statusCode": "422",
        "description": "Unprocessable entity"
      }
    ]
  },
  {
    "url": "/vendor_payments/{id}",
    "method": "removeResource",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "VendorPayment",
    "typeScriptTag": "vendorPayment",
    "description": "Removes the VendorPayment resource.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Resource identifier",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "VendorPayment resource deleted"
      },
      {
        "statusCode": "404",
        "description": "Resource not found"
      }
    ]
  },
  {
    "url": "/vendor_payments/{id}",
    "method": "getResource",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "VendorPayment",
    "typeScriptTag": "vendorPayment",
    "description": "Retrieves a VendorPayment resource.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Resource identifier",
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
        "description": "Resource not found"
      }
    ]
  },
  {
    "url": "/vendor_payments/{id}",
    "method": "replaceResource",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "VendorPayment",
    "typeScriptTag": "vendorPayment",
    "description": "Replaces the VendorPayment resource.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Resource identifier",
        "example": "ID"
      },
      {
        "name": "id",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "quickbooks-321"
      },
      {
        "name": "integration",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "quickbooks"
      },
      {
        "name": "srcId",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "460000000053219"
      },
      {
        "name": "vendorId",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "460000000026049"
      },
      {
        "name": "vendorName",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Bowman and Co"
      },
      {
        "name": "paymentMode",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Stripe"
      },
      {
        "name": "txnDate",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "2013-10-07"
      },
      {
        "name": "referenceNumber",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "REF#912300"
      },
      {
        "name": "amount",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 12500
      },
      {
        "name": "balance",
        "schema": "integer",
        "required": false,
        "description": "",
        "example": 3500
      },
      {
        "name": "currency",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "USD"
      },
      {
        "name": "created",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "2016-12-16T00:18:42-0500"
      },
      {
        "name": "modified",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "2016-12-16T00:18:42-0500"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Invalid input"
      },
      {
        "statusCode": "404",
        "description": "Resource not found"
      },
      {
        "statusCode": "422",
        "description": "Unprocessable entity"
      }
    ]
  },
  {
    "url": "/vendors",
    "method": "getCollection",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Vendor",
    "typeScriptTag": "vendor",
    "description": "Retrieves the collection of Vendor resources.",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "The collection page number",
        "default": 1
      },
      {
        "name": "itemsPerPage",
        "schema": "integer",
        "required": false,
        "description": "The number of items per page",
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
    "url": "/vendors",
    "method": "createResource",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Vendor",
    "typeScriptTag": "vendor",
    "description": "Creates a Vendor resource.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "description": "",
        "example": "quickbooks-726"
      },
      {
        "name": "integration",
        "schema": "string",
        "description": "",
        "example": "quickbooks"
      },
      {
        "name": "srcId",
        "schema": "string",
        "description": "",
        "example": "GH2JK-67283H-YW82KHX-2883KK-KS78S"
      },
      {
        "name": "givenName",
        "schema": "string",
        "description": "",
        "example": "Jane"
      },
      {
        "name": "familyName",
        "schema": "string",
        "description": "",
        "example": "Doe"
      },
      {
        "name": "companyName",
        "schema": "string",
        "description": "",
        "example": "Doyle-Koch LLC"
      },
      {
        "name": "displayName",
        "schema": "string",
        "description": "",
        "example": "Doyle-Koch"
      },
      {
        "name": "contactName",
        "schema": "string",
        "description": "",
        "example": "John Smith"
      },
      {
        "name": "contactTitle",
        "schema": "string",
        "description": "",
        "example": "Account Manager"
      },
      {
        "name": "accountNumber",
        "schema": "string",
        "description": "",
        "example": "420042"
      },
      {
        "name": "phone",
        "schema": "string",
        "description": "",
        "example": "281-381-4241"
      },
      {
        "name": "mobile",
        "schema": "string",
        "description": "",
        "example": "786-258-0182"
      },
      {
        "name": "fax",
        "schema": "string",
        "description": "",
        "example": "281-381-4255"
      },
      {
        "name": "email",
        "schema": "string",
        "description": "",
        "example": "doyle-koch@email.com"
      },
      {
        "name": "website",
        "schema": "string",
        "description": "",
        "example": "https://www.doylekoch.com"
      },
      {
        "name": "address",
        "schema": "string",
        "description": "",
        "example": "708 Woodland Avenue"
      },
      {
        "name": "addressLine2",
        "schema": "string",
        "description": "",
        "example": "Unit 105"
      },
      {
        "name": "city",
        "schema": "string",
        "description": "",
        "example": "St Paul"
      },
      {
        "name": "state",
        "schema": "string",
        "description": "",
        "example": "Alaska"
      },
      {
        "name": "country",
        "schema": "string",
        "description": "",
        "example": "United States"
      },
      {
        "name": "postalCode",
        "schema": "string",
        "description": "",
        "example": "99660"
      },
      {
        "name": "currency",
        "schema": "string",
        "description": "",
        "example": "USD"
      },
      {
        "name": "balance",
        "schema": "integer",
        "description": "",
        "example": 650000
      },
      {
        "name": "bankAccountName",
        "schema": "string",
        "description": "",
        "example": "Business Bank Account"
      },
      {
        "name": "bankAccountNumber",
        "schema": "string",
        "description": "",
        "example": "123654"
      },
      {
        "name": "notes",
        "schema": "string",
        "description": "",
        "example": "Quality vendor"
      },
      {
        "name": "taxType",
        "schema": "string",
        "description": "",
        "example": "Global"
      },
      {
        "name": "isContractor",
        "schema": "boolean",
        "description": "",
        "example": true
      },
      {
        "name": "active",
        "schema": "boolean",
        "description": "",
        "example": true
      },
      {
        "name": "created",
        "schema": "string",
        "description": "",
        "example": "2013-11-18T02:17:40.080Z"
      },
      {
        "name": "modified",
        "schema": "string",
        "description": "",
        "example": "2013-11-22T02:17:40.080Z"
      },
      {
        "name": "termId",
        "schema": "string",
        "description": "",
        "example": "1d80716b-427e-4cad-80c6-c4b3a18eb23d"
      },
      {
        "name": "termDays",
        "schema": "integer",
        "description": "",
        "example": 15
      },
      {
        "name": "termType",
        "schema": "string",
        "description": "",
        "example": "DAYSAFTERBILLDATE"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Invalid input"
      },
      {
        "statusCode": "422",
        "description": "Unprocessable entity"
      }
    ]
  },
  {
    "url": "/vendors/{id}",
    "method": "removeResource",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Vendor",
    "typeScriptTag": "vendor",
    "description": "Removes the Vendor resource.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Resource identifier",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Vendor resource deleted"
      },
      {
        "statusCode": "404",
        "description": "Resource not found"
      }
    ]
  },
  {
    "url": "/vendors/{id}",
    "method": "getResource",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Vendor",
    "typeScriptTag": "vendor",
    "description": "Retrieves a Vendor resource.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Resource identifier",
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
        "description": "Resource not found"
      }
    ]
  },
  {
    "url": "/vendors/{id}",
    "method": "replaceResource",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Vendor",
    "typeScriptTag": "vendor",
    "description": "Replaces the Vendor resource.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Resource identifier",
        "example": "ID"
      },
      {
        "name": "id",
        "schema": "string",
        "description": "",
        "example": "quickbooks-726"
      },
      {
        "name": "integration",
        "schema": "string",
        "description": "",
        "example": "quickbooks"
      },
      {
        "name": "srcId",
        "schema": "string",
        "description": "",
        "example": "GH2JK-67283H-YW82KHX-2883KK-KS78S"
      },
      {
        "name": "givenName",
        "schema": "string",
        "description": "",
        "example": "Jane"
      },
      {
        "name": "familyName",
        "schema": "string",
        "description": "",
        "example": "Doe"
      },
      {
        "name": "companyName",
        "schema": "string",
        "description": "",
        "example": "Doyle-Koch LLC"
      },
      {
        "name": "displayName",
        "schema": "string",
        "description": "",
        "example": "Doyle-Koch"
      },
      {
        "name": "contactName",
        "schema": "string",
        "description": "",
        "example": "John Smith"
      },
      {
        "name": "contactTitle",
        "schema": "string",
        "description": "",
        "example": "Account Manager"
      },
      {
        "name": "accountNumber",
        "schema": "string",
        "description": "",
        "example": "420042"
      },
      {
        "name": "phone",
        "schema": "string",
        "description": "",
        "example": "281-381-4241"
      },
      {
        "name": "mobile",
        "schema": "string",
        "description": "",
        "example": "786-258-0182"
      },
      {
        "name": "fax",
        "schema": "string",
        "description": "",
        "example": "281-381-4255"
      },
      {
        "name": "email",
        "schema": "string",
        "description": "",
        "example": "doyle-koch@email.com"
      },
      {
        "name": "website",
        "schema": "string",
        "description": "",
        "example": "https://www.doylekoch.com"
      },
      {
        "name": "address",
        "schema": "string",
        "description": "",
        "example": "708 Woodland Avenue"
      },
      {
        "name": "addressLine2",
        "schema": "string",
        "description": "",
        "example": "Unit 105"
      },
      {
        "name": "city",
        "schema": "string",
        "description": "",
        "example": "St Paul"
      },
      {
        "name": "state",
        "schema": "string",
        "description": "",
        "example": "Alaska"
      },
      {
        "name": "country",
        "schema": "string",
        "description": "",
        "example": "United States"
      },
      {
        "name": "postalCode",
        "schema": "string",
        "description": "",
        "example": "99660"
      },
      {
        "name": "currency",
        "schema": "string",
        "description": "",
        "example": "USD"
      },
      {
        "name": "balance",
        "schema": "integer",
        "description": "",
        "example": 650000
      },
      {
        "name": "bankAccountName",
        "schema": "string",
        "description": "",
        "example": "Business Bank Account"
      },
      {
        "name": "bankAccountNumber",
        "schema": "string",
        "description": "",
        "example": "123654"
      },
      {
        "name": "notes",
        "schema": "string",
        "description": "",
        "example": "Quality vendor"
      },
      {
        "name": "taxType",
        "schema": "string",
        "description": "",
        "example": "Global"
      },
      {
        "name": "isContractor",
        "schema": "boolean",
        "description": "",
        "example": true
      },
      {
        "name": "active",
        "schema": "boolean",
        "description": "",
        "example": true
      },
      {
        "name": "created",
        "schema": "string",
        "description": "",
        "example": "2013-11-18T02:17:40.080Z"
      },
      {
        "name": "modified",
        "schema": "string",
        "description": "",
        "example": "2013-11-22T02:17:40.080Z"
      },
      {
        "name": "termId",
        "schema": "string",
        "description": "",
        "example": "1d80716b-427e-4cad-80c6-c4b3a18eb23d"
      },
      {
        "name": "termDays",
        "schema": "integer",
        "description": "",
        "example": 15
      },
      {
        "name": "termType",
        "schema": "string",
        "description": "",
        "example": "DAYSAFTERBILLDATE"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Invalid input"
      },
      {
        "statusCode": "404",
        "description": "Resource not found"
      },
      {
        "statusCode": "422",
        "description": "Unprocessable entity"
      }
    ]
  },
  {
    "url": "/workflows",
    "method": "getCollection",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Workflow",
    "typeScriptTag": "workflow",
    "description": "Retrieves the collection of Workflow resources.",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "The collection page number",
        "default": 1
      },
      {
        "name": "itemsPerPage",
        "schema": "integer",
        "required": false,
        "description": "The number of items per page",
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
    "url": "/workflows/{id}",
    "method": "getResource",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Workflow",
    "typeScriptTag": "workflow",
    "description": "Retrieves a Workflow resource.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Resource identifier",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Workflows represent sophisticated marketing automation campaigns that rely on triggering relevant and timely actions (like emails) for contacts in their database"
      },
      {
        "statusCode": "404",
        "description": "Resource not found"
      }
    ]
  }
]
    }
      language="TypeScript"
      apiTitle="Boss Insights"
      apiBaseUrl="https://example.myintranetapps.com/api"
      apiVersion="1.26.0"
      endpoints={219}
      sdkMethods={518}
      schemas={935}
      parameters={1469}
      difficulty="Very Hard"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/boss-insights/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/boss-insights/openapi.yaml"
      developerDocumentation="api.bossinsights.com/"
    />
  );
}
  