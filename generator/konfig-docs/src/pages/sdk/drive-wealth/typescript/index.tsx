import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function DriveWealthTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="drive-wealth-typescript-sdk"
      metaDescription={`DriveWealth is the pioneer of fractional equities trading and embedded investing. We are a visionary technology company that empowers more than 100 partners around the world to engage their customers by placing the markets in the palm of their hand. We believe the future is fractional, transactional and mobile. Every mobile device should be a gateway to accessing investing and savings products, services, advice, and assistance for global citizens of all ages, wealth stages, and levels of financial expertise. DriveWealth's unparalleled consultative support and cloud-based, industrial strength technology platform allow partners to seamlessly offer branded investing experiences to drive customer acquisition, loyalty, retention, and revenue growth. DriveWealth's commitment to continuous evolution and innovation makes it the partner of choice for powering the future of investing. For more information, please visit drivewealth.com or connect with us on Twitter @DriveWealth.‍`}
      company="DriveWealth"
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/drivewealth/logo.png"
      companyKebabCase="drive-wealth"
      clientNameCamelCase="driveWealth"
      homepage="www.drivewealth.com/"
      lastUpdated={new Date("2024-03-29T18:04:43.745Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/drivewealth/favicon.png"
      // Missing contactUrl
      // Missing contactEmail
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/drivewealth/imagePreview.png"
      GettingStarted={GettingStarted}
      FirstRequest={FirstRequest}
      categories={["financial_services","wealth_management","fintech","financial_technology","finance"]}
      methods={[
  {
    "url": "/managed/allocations",
    "method": "createAllocation",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Trade Allocations",
    "typeScriptTag": "tradeAllocations",
    "description": "Create Trade Allocation",
    "parameters": [
      {
        "name": "userID",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "66304da9-3h6f-2234-935f-ac6b7933d706"
      },
      {
        "name": "clientListID",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "SUMS_CUSTOM_ALLOCATION_TEST"
      },
      {
        "name": "note",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Allocating via api allocation test"
      },
      {
        "name": "orders",
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
    "url": "/managed/allocations/{allocationID}",
    "method": "getDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Trade Allocations",
    "typeScriptTag": "tradeAllocations",
    "description": "Retrieve Trade Allocation",
    "parameters": [
      {
        "name": "allocationId",
        "schema": "string",
        "required": true,
        "description": "The unique identifier returned when a Trade Allocation request is made.",
        "example": "JL.allocation.SomeRIACompany.9d6def3b-14d7-4934-8a64-57d443e67ce6"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/managed/funds",
    "method": "createFundCollection",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Funds",
    "typeScriptTag": "funds",
    "description": "Create Fund",
    "parameters": [
      {
        "name": "description",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Top 10 US Tech"
      },
      {
        "name": "userID",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "66304da9-3h6f-2234-935f-ac6b7933d706"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TECH"
      },
      {
        "name": "clientFundID",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SUMS_CUSTOM_ALLOCATION_TEST"
      },
      {
        "name": "holdings",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "triggers",
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
    "url": "/managed/funds/{fundID}",
    "method": "getDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Funds",
    "typeScriptTag": "funds",
    "description": "Retrieve Fund",
    "parameters": [
      {
        "name": "fundId",
        "schema": "string",
        "required": true,
        "description": "The unique identifier associated with the Fund.",
        "example": "fund_3d7d00d1-f08e-4f52-9cbf-893c75cf77fe"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/managed/portfolios",
    "method": "createPortfolioAllocation",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Portfolios",
    "typeScriptTag": "portfolios",
    "description": "Create Portfolio",
    "parameters": [
      {
        "name": "description",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Mix of sectors"
      },
      {
        "name": "userID",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "66304da9-3h6f-2234-935f-ac6b7933d706"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Recession Proof"
      },
      {
        "name": "clientPortfolioID",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "AAABBB-1222-3344.123456789"
      },
      {
        "name": "holdings",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "triggers",
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
    "url": "/managed/portfolios/{portfolioID}",
    "method": "getDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Portfolios",
    "typeScriptTag": "portfolios",
    "description": "Retrieve Portfolio",
    "parameters": [
      {
        "name": "portfolioId",
        "schema": "string",
        "required": true,
        "description": "A unique identifier associated with a specific Portfolio.",
        "example": "portfolio_4a22340a-31f8-4f0e-b5ee-24ddfbc66727"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/managed/portfolios/{portfolioID}",
    "method": "updateHoldings",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Portfolios",
    "typeScriptTag": "portfolios",
    "description": "Update Portfolio",
    "parameters": [
      {
        "name": "portfolioId",
        "schema": "string",
        "required": true,
        "description": "A unique identifier associated with a specific Portfolio.",
        "example": "portfolio_4a22340a-31f8-4f0e-b5ee-24ddfbc66727"
      },
      {
        "name": "instrumentID",
        "schema": "string",
        "description": "",
        "example": "5b85fabb-d57c-44e6-a7f6-a3efc760226c"
      },
      {
        "name": "target",
        "schema": "number",
        "description": "",
        "example": 0.5
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/managed/autopilot/{partnerID}",
    "method": "createRun",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "AutoPilot",
    "typeScriptTag": "autoPilot",
    "description": "Create Autopilot Run",
    "parameters": [
      {
        "name": "partnerId",
        "schema": "string",
        "required": true,
        "description": "This is the parentIBID or userID of the registered investment advisor.",
        "example": "66304da9-3h6f-2234-935f-ac6b7933d706"
      },
      {
        "name": "reviewOnly",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "forceRebalance",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "subAccounts",
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
    "url": "/managed/autopilot/{rebalanceRunID}",
    "method": "getRunDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "AutoPilot",
    "typeScriptTag": "autoPilot",
    "description": "Retrieve Autopilot Run",
    "parameters": [
      {
        "name": "rebalanceRunId",
        "schema": "string",
        "required": true,
        "description": "The unique re-balance run identifier `rebalanceRunID` associated with a specific re-balance.",
        "example": "ria_rebalance_ebf7e878-e2d6-4b3d-a333-b8ff05b92b83"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/accounts",
    "method": "createNewBrokerageAccount",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Accounts",
    "typeScriptTag": "accounts",
    "description": "Create Account",
    "parameters": [
      {
        "name": "userID",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "cc07f91b-7ee1-4868-b8fc-823c70a1b932"
      },
      {
        "name": "accountType",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "LIVE"
      },
      {
        "name": "accountManagementType",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SELF"
      },
      {
        "name": "tradingType",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CASH"
      },
      {
        "name": "finra3210ComplianceEntity",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "COMPLYSCI"
      },
      {
        "name": "riaUserID",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "66304da9-3h6f-2234-935f-ac6b7933d706"
      },
      {
        "name": "riaProductID",
        "schema": "string",
        "required": false,
        "description": "",
        "example": ""
      },
      {
        "name": "riaPortfolioID",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "portfolio_87fec25f-c350-4a53-83a0-fc6be0c2989e"
      },
      {
        "name": "authorizedUsers",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "ignoreBuyingPower",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": false
      },
      {
        "name": "violationsExempt",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": false
      },
      {
        "name": "ignoreMarketHoursForTest",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": true
      },
      {
        "name": "extendedHoursEnrolled",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": false
      },
      {
        "name": "metadata",
        "schema": "object",
        "required": false,
        "description": "",
        "example": {
          "myCustomKey": "myCustomValue"
        }
      },
      {
        "name": "leverage",
        "schema": "number",
        "required": false,
        "description": "",
        "example": 1
      },
      {
        "name": "accountFeatures",
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
    "url": "/accounts/{accountID}",
    "method": "getDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Accounts",
    "typeScriptTag": "accounts",
    "description": "Retrieve Account",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "cc07f91b-7ee1-4868-b8fc-823c70a1b932.1407775317759"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/accounts/{accountID}",
    "method": "updateAccountDetails",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Accounts",
    "typeScriptTag": "accounts",
    "description": "Update Account",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "cc07f91b-7ee1-4868-b8fc-823c70a1b932.1407775317759"
      },
      {
        "name": "leverage",
        "schema": "number",
        "description": "",
        "example": 1
      },
      {
        "name": "nickname",
        "schema": "string",
        "description": "",
        "example": "Steve's Robo Advisor Managed Account"
      },
      {
        "name": "status",
        "schema": "string",
        "description": "",
        "example": "OPEN"
      },
      {
        "name": "statusComment",
        "schema": "string",
        "description": "",
        "example": "Closing the Account."
      },
      {
        "name": "closingReason",
        "schema": "string",
        "description": "",
        "example": "DECEASED"
      },
      {
        "name": "restricted",
        "schema": "boolean",
        "description": "",
        "example": false
      },
      {
        "name": "ignoreMarketHoursForTest",
        "schema": "boolean",
        "description": "",
        "example": false
      },
      {
        "name": "accountFeatures",
        "schema": "object",
        "description": ""
      },
      {
        "name": "authorizedUsers",
        "schema": "array",
        "description": ""
      },
      {
        "name": "finra3210ComplianceEntity",
        "schema": "string",
        "description": "",
        "example": "COMPLYSCI"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/accounts/{accountID}/commissions",
    "method": "listAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Commission Schedules",
    "typeScriptTag": "commissionSchedules",
    "description": "List all Commission Schedules",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "cc07f91b-7ee1-4868-b8fc-823c70a1b932.1407775317759"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/accounts/{accountID}/beneficiaries",
    "method": "removeAll",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Beneficiaries",
    "typeScriptTag": "beneficiaries",
    "description": "Delete Beneficiaries",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "cc07f91b-7ee1-4868-b8fc-823c70a1b932.1407775317759"
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "Beneficiaries has been recorded for deletion."
      }
    ]
  },
  {
    "url": "/accounts/{accountID}/beneficiaries",
    "method": "listByAccount",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Beneficiaries",
    "typeScriptTag": "beneficiaries",
    "description": "Retrieve Beneficiaries by Account",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "cc07f91b-7ee1-4868-b8fc-823c70a1b932.1407775317759"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/accounts/{accountID}/beneficiaries",
    "method": "createNewSet",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Beneficiaries",
    "typeScriptTag": "beneficiaries",
    "description": "Create Beneficiaries",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "cc07f91b-7ee1-4868-b8fc-823c70a1b932.1407775317759"
      },
      {
        "name": "primary",
        "schema": "array",
        "description": ""
      },
      {
        "name": "contingent",
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
    "url": "/accounts/{accountID}/funding/deposit-instructions",
    "method": "getDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Virtual Bank Accounts",
    "typeScriptTag": "virtualBankAccounts",
    "description": "Retrieve Virtual Bank Account by Account",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "cc07f91b-7ee1-4868-b8fc-823c70a1b932.1407775317759"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/accounts/{accountID}/funding/deposits",
    "method": "listByAccount",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Deposits",
    "typeScriptTag": "deposits",
    "description": "List Deposits by Account",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "cc07f91b-7ee1-4868-b8fc-823c70a1b932.1407775317759"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/accounts/{accountID}/funding/redemptions",
    "method": "listByAccount",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Withdrawals",
    "typeScriptTag": "withdrawals",
    "description": "List Withdrawals by Account",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "cc07f91b-7ee1-4868-b8fc-823c70a1b932.1407775317759"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/accounts/{accountID}/summary/orders",
    "method": "getByAccount",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Orders",
    "typeScriptTag": "orders",
    "description": "Retrieve Orders by Account",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "cc07f91b-7ee1-4868-b8fc-823c70a1b932.1407775317759"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A list of pending orders."
      }
    ]
  },
  {
    "url": "/accounts/{accountID}/reports/order-history",
    "method": "listByAccount",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Orders",
    "typeScriptTag": "orders",
    "description": "List Orders by Account",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "cc07f91b-7ee1-4868-b8fc-823c70a1b932.1407775317759"
      },
      {
        "name": "from",
        "schema": "string",
        "required": true,
        "description": "Date start time of data. Follow [ISO 8601 standard](https://en.wikipedia.org/wiki/ISO_8601)",
        "example": "2022-06-16"
      },
      {
        "name": "to",
        "schema": "string",
        "required": true,
        "description": "Date end time of data. Follow [ISO 8601 standard](https://en.wikipedia.org/wiki/ISO_8601)",
        "example": "2022-07-16"
      },
      {
        "name": "limit",
        "schema": "number",
        "required": false,
        "description": "The number of orders to be returned per page.",
        "example": 25
      },
      {
        "name": "offset",
        "schema": "string",
        "required": false,
        "description": "Follow [ISO 8601 standard](https://en.wikipedia.org/wiki/ISO_8601)",
        "example": "2022-07-16"
      },
      {
        "name": "direction",
        "schema": "string",
        "required": false,
        "description": "The direction of pagination.",
        "example": "prev"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/accounts/{accountID}/portfolio",
    "method": "getPortfolioByAccount",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "AutoPilot",
    "typeScriptTag": "autoPilot",
    "description": "Retrieve Portfolio by Account",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "cc07f91b-7ee1-4868-b8fc-823c70a1b932.1407775317759"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/accounts/{accountID}/summary/money",
    "method": "getMoneyByAccount",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Accounts",
    "typeScriptTag": "accounts",
    "description": "Retrieve Money by Account",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "cc07f91b-7ee1-4868-b8fc-823c70a1b932.1407775317759"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/accounts/{accountID}/statements",
    "method": "listByAccount",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Statements",
    "typeScriptTag": "statements",
    "description": "List Statements by Account",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "cc07f91b-7ee1-4868-b8fc-823c70a1b932.1407775317759"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "An array that holds the reference details to an accounts statements."
      }
    ]
  },
  {
    "url": "/accounts/{accountID}/taxforms",
    "method": "listTaxStatementsByAccount",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Statements",
    "typeScriptTag": "statements",
    "description": "List Tax Statements by Account",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "cc07f91b-7ee1-4868-b8fc-823c70a1b932.1407775317759"
      },
      {
        "name": "from",
        "schema": "string",
        "required": false,
        "description": "The date to start the filter.",
        "example": "2022-06-16"
      },
      {
        "name": "to",
        "schema": "string",
        "required": false,
        "description": "The date to end the filter.",
        "example": "2022-07-16"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "An array that holds the reference details to an accounts tax documents."
      }
    ]
  },
  {
    "url": "/accounts/{accountID}/confirms",
    "method": "listTradeConfirmations",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Statements",
    "typeScriptTag": "statements",
    "description": "List Trade Confirmations by Account",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "cc07f91b-7ee1-4868-b8fc-823c70a1b932.1407775317759"
      },
      {
        "name": "from",
        "schema": "string",
        "required": false,
        "description": "Filter, the date from which to start the search.",
        "example": "2018-09-18"
      },
      {
        "name": "to",
        "schema": "string",
        "required": false,
        "description": "Filter, the date to which to end the search.",
        "example": "2019-09-18"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "An array that holds the reference details to an accounts trade confirmations."
      }
    ]
  },
  {
    "url": "/accounts/{accountID}/summary",
    "method": "getSummary",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Accounts",
    "typeScriptTag": "accounts",
    "description": "Retrieve summary by Account",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "cc07f91b-7ee1-4868-b8fc-823c70a1b932.1407775317759"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/accounts/{accountID}/performance",
    "method": "getPerformanceMetrics",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Accounts",
    "typeScriptTag": "accounts",
    "description": "Retrieve Performance Metrics by Account",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "cc07f91b-7ee1-4868-b8fc-823c70a1b932.1407775317759"
      },
      {
        "name": "period",
        "schema": "string",
        "required": false,
        "description": "Used for relative date range, accepts a number and a unit of time (E.g: 3d = 3 Days or 2w = 2 Weeks).",
        "example": "3d"
      },
      {
        "name": "from",
        "schema": "string",
        "required": false,
        "description": "Start date and time of requested time frame of the accounts performance.",
        "example": "2018-09-18"
      },
      {
        "name": "to",
        "schema": "string",
        "required": false,
        "description": "End date and time of requested time frame of the accounts performance.",
        "example": "2019-09-18"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/accounts/{accountID}/summary/positions",
    "method": "listEquityPositions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Positions",
    "typeScriptTag": "positions",
    "description": "List Positions by Account",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "cc07f91b-7ee1-4868-b8fc-823c70a1b932.1407775317759"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/accounts/{accountID}/summary/violations",
    "method": "getByAccount",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Violations",
    "typeScriptTag": "violations",
    "description": "Retrieve Violations by Account",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "cc07f91b-7ee1-4868-b8fc-823c70a1b932.1407775317759"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/accounts/{accountID}/violations",
    "method": "listByAccount",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Violations",
    "typeScriptTag": "violations",
    "description": "List Violations by Account",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "cc07f91b-7ee1-4868-b8fc-823c70a1b932.1407775317759"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/accounts/{accountID}/summary/margin",
    "method": "getMarginDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Accounts",
    "typeScriptTag": "accounts",
    "description": "Retrieve Margin Details by Account",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "cc07f91b-7ee1-4868-b8fc-823c70a1b932.1407775317759"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/accounts/{accountID}/summary/transactions",
    "method": "getSummaryByAccount",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Transactions",
    "typeScriptTag": "transactions",
    "description": "Retrieve Transaction Summary by Account",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "cc07f91b-7ee1-4868-b8fc-823c70a1b932.1407775317759"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/accounts/{accountID}/transactions",
    "method": "listByAccount",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Transactions",
    "typeScriptTag": "transactions",
    "description": "List Transactions by Account",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "cc07f91b-7ee1-4868-b8fc-823c70a1b932.1407775317759"
      },
      {
        "name": "from",
        "schema": "string",
        "required": true,
        "description": "Date start time of data. Follow [ISO 8601 standard](https://en.wikipedia.org/wiki/ISO_8601)",
        "example": "2022-06-16"
      },
      {
        "name": "to",
        "schema": "string",
        "required": true,
        "description": "Date end time of data. Follow [ISO 8601 standard](https://en.wikipedia.org/wiki/ISO_8601)",
        "example": "2022-07-16"
      },
      {
        "name": "limit",
        "schema": "number",
        "required": false,
        "description": "The number of transactions to be returned per page.",
        "example": 25
      },
      {
        "name": "offset",
        "schema": "string",
        "required": false,
        "description": "Follow [ISO 8601 standard](https://en.wikipedia.org/wiki/ISO_8601)",
        "example": "2022-07-16"
      },
      {
        "name": "direction",
        "schema": "string",
        "required": false,
        "description": "The direction of pagination",
        "example": "prev"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A list of transactions."
      }
    ]
  },
  {
    "url": "/accounts/{accountID}/position-details",
    "method": "getPositionLots",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Accounts",
    "typeScriptTag": "accounts",
    "description": "Retrieve Account Position Lots",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "cc07f91b-7ee1-4868-b8fc-823c70a1b932.1407775317759"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/accounts/{accountID}/options/positions",
    "method": "getAccountOption",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Positions",
    "typeScriptTag": "positions",
    "description": "Retrieve Account Option Positions",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "cc07f91b-7ee1-4868-b8fc-823c70a1b932.1407775317759"
      },
      {
        "name": "filterBy",
        "schema": "string",
        "description": "The expiration date of options; to filter by.",
        "example": "expirationDate"
      },
      {
        "name": "from",
        "schema": "string",
        "description": "The start date of the range of option's expiration.",
        "example": "2023-02-16"
      },
      {
        "name": "to",
        "schema": "string",
        "required": false,
        "description": "The end date of the range of option's expiration.",
        "example": "2023-02-16"
      },
      {
        "name": "limit",
        "schema": "number",
        "required": false,
        "description": "The number of results to be returned.",
        "example": 10,
        "default": 50
      },
      {
        "name": "offset",
        "schema": "string",
        "required": false,
        "description": "The identifier of the page.",
        "example": "86572e14-84ae-4f0c-9533-3c9432637f8e.1627500314555#65d1aee9-9a6c-4720-9879-71c4fcf43060.2023-12-07T21:17:45.743Z"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/asset-transfers/acats",
    "method": "createAcatsTransfer",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Asset Transfer",
    "typeScriptTag": "assetTransfer",
    "description": "Create ACATS Transfer",
    "parameters": [
      {
        "name": "sourceAccountType",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SOURCEACCOUNTTYPE"
      },
      {
        "name": "acatType",
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
      }
    ]
  },
  {
    "url": "/asset-transfers/minor-graduation",
    "method": "createMinorGraduationTransfer",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Asset Transfer",
    "typeScriptTag": "assetTransfer",
    "description": "Create Minor Graduation Transfer",
    "parameters": [
      {
        "name": "source",
        "schema": "string",
        "description": "",
        "example": "DWBG000052"
      },
      {
        "name": "destination",
        "schema": "string",
        "description": "",
        "example": "LKKZ000004"
      },
      {
        "name": "comment",
        "schema": "string",
        "description": "",
        "example": "Hey! Welcome to DriveWealth Developer Docs!"
      },
      {
        "name": "metadata",
        "schema": "object",
        "description": "",
        "example": {
          "myCustomKey": "myCustomValue"
        }
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/asset-transfers/{assetTransferID}",
    "method": "getDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Asset Transfer",
    "typeScriptTag": "assetTransfer",
    "description": "Retrieve Transfer",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/asset-transfers",
    "method": "listTransfers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Asset Transfer",
    "typeScriptTag": "assetTransfer",
    "description": "List Transfers",
    "parameters": [
      {
        "name": "status",
        "schema": "string",
        "description": "A status to filter by"
      },
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "A Transfer type to filter by",
        "example": "TYPE"
      },
      {
        "name": "limit",
        "schema": "string",
        "description": "Maximum number of records to be returned"
      },
      {
        "name": "offset",
        "schema": "string",
        "description": "Specify an identifier from last API response to go to the next page or prev page"
      },
      {
        "name": "direction",
        "schema": "string",
        "description": "Go to the next page or prev page"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/asset-transfers/cancel-rebills",
    "method": "listCancelRebills",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Cancel Rebill",
    "typeScriptTag": "cancelRebill",
    "description": "List Cancel Rebills",
    "parameters": [
      {
        "name": "from",
        "schema": "string",
        "required": true,
        "description": "The start date of the range of Cancel Rebill.",
        "example": "2023-04-22"
      },
      {
        "name": "to",
        "schema": "string",
        "required": true,
        "description": "The end date of the range of Cancel Rebill.",
        "example": "2023-04-22"
      },
      {
        "name": "partnerId",
        "schema": "string",
        "description": "",
        "example": "5730ee28-78cb-4736-9c99-ede6dc1084a3"
      },
      {
        "name": "status",
        "schema": "string",
        "required": true,
        "description": "The Cancel Rebill status code.",
        "example": "STARTED"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "The number of records to be returned by the query.",
        "example": 20,
        "default": 50
      },
      {
        "name": "offset",
        "schema": "string",
        "required": false,
        "description": "The offset of the last queried result.",
        "example": "5730ee28-78cb-4736-9c99-ede6dc1084a3#cxl_rbl_5730ee28-78cb-4736-9c99-ede6dc1084a3"
      },
      {
        "name": "direction",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "next",
        "default": "next"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/asset-transfers/cancel-rebills",
    "method": "create",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Cancel Rebill",
    "typeScriptTag": "cancelRebill",
    "description": "Create Cancel Rebill",
    "parameters": [
      {
        "name": "orderNo",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ICDU023727"
      },
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CANCEL"
      },
      {
        "name": "reason",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FRAUD"
      },
      {
        "name": "approvedBy",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "cc07f91b-7ee1-4868-b8fc-823c70a1b932"
      },
      {
        "name": "adjustedPrice",
        "schema": "number",
        "required": false,
        "description": "",
        "example": 125.3
      },
      {
        "name": "adjustedCommission",
        "schema": "number",
        "required": false,
        "description": "",
        "example": 2.49
      },
      {
        "name": "comment",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "metadata",
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
    "url": "/asset-transfers/cancel-rebills/{id}",
    "method": "getDetailsById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Cancel Rebill",
    "typeScriptTag": "cancelRebill",
    "description": "Retrieve Cancel Rebill",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The identifier of the Cancel Rebill.",
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
    "url": "/auth",
    "method": "tokenCreate",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Auth",
    "typeScriptTag": "auth",
    "description": "Create Authentication Token",
    "parameters": [
      {
        "name": "username",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "bo.sample.api"
      },
      {
        "name": "password",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "188ff5b0-8f13-4676-8bb2-305b9e08a3ba"
      },
      {
        "name": "appTypeID",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 4
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/auth/tokens",
    "method": "createSessionToken",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Auth",
    "typeScriptTag": "auth",
    "description": "Create Session Token",
    "parameters": [
      {
        "name": "clientID",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "0oafccTendies67BTx113"
      },
      {
        "name": "clientSecret",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "8WfNzC4oTendiesTradingCompanyPuQNwg7BPByWqQOj"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/countries",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Supported Countries",
    "typeScriptTag": "supportedCountries",
    "description": "List Supported Countries",
    "parameters": [
      {
        "name": "status",
        "schema": "string",
        "required": true,
        "description": "Filters on the returned countries list has inactive or active countries inside it.",
        "example": "ACTIVE"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A list of allowed countries."
      }
    ]
  },
  {
    "url": "/funding/deposits",
    "method": "createUserDeposit",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Deposits",
    "typeScriptTag": "deposits",
    "description": "Create Deposit",
    "parameters": [
      {
        "name": "accountNo",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DWBG000052"
      },
      {
        "name": "amount",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 250.25
      },
      {
        "name": "currency",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USD"
      },
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACH"
      },
      {
        "name": "bankAccountID",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "bank_a4656e60-321e-425b-aa0d-a2e75c38885f"
      },
      {
        "name": "note",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Hey! Welcome to DriveWealth Developer Docs!"
      },
      {
        "name": "iraContribution",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "CURRENT_YEAR"
      },
      {
        "name": "recurringFrequency",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "MONTHLY_FIRST"
      },
      {
        "name": "startDate",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "2017-09-18"
      },
      {
        "name": "settlementProfileID",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "settlement-profile-bank-account-1"
      },
      {
        "name": "originatorBankDetails",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "metadata",
        "schema": "object",
        "required": false,
        "description": "",
        "example": {
          "myCustomKey": "myCustomValue"
        }
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/funding/deposits/{depositID}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Deposits",
    "typeScriptTag": "deposits",
    "description": "Retrieve Deposit",
    "parameters": [
      {
        "name": "depositId",
        "schema": "string",
        "required": true,
        "description": "A unique identifier for the user's account deposit.",
        "example": "CKDQ000001-1671085040913-DMIQY"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/disclosures",
    "method": "listItems",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Disclosures",
    "typeScriptTag": "disclosures",
    "description": "List Disclosures",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "A list of disclosures"
      }
    ]
  },
  {
    "url": "/disclosures/{disclosureID}",
    "method": "getDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Disclosures",
    "typeScriptTag": "disclosures",
    "description": "Retrieve Disclosure",
    "parameters": [
      {
        "name": "disclosureId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "31b087cc-4a74-41ad-b0f2-57acca333de6"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/users/{userID}/acknowledgments",
    "method": "listUserAcknowledgments",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Disclosures",
    "typeScriptTag": "disclosures",
    "description": "List Disclosures Acknowledgments by User",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "cc07f91b-7ee1-4868-b8fc-823c70a1b932"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A list of disclosure acknowledgments"
      }
    ]
  },
  {
    "url": "/users/{userID}/acknowledgments",
    "method": "acknowledgeUserDisclosure",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Disclosures",
    "typeScriptTag": "disclosures",
    "description": "Create Disclosure Acknowledgment",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "cc07f91b-7ee1-4868-b8fc-823c70a1b932"
      },
      {
        "name": "disclosureID",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "31b087cc-4a74-41ad-b0f2-57acca333de6"
      },
      {
        "name": "acknowledged",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "signedAt",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "2023-06-14T15:07:24Z"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/exchanges",
    "method": "cancelPendingOrder",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Exchanges",
    "typeScriptTag": "exchanges",
    "description": "Update Exchange",
    "parameters": [
      {
        "name": "method",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CANCEL"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/exchanges",
    "method": "createExchange",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Exchanges",
    "typeScriptTag": "exchanges",
    "description": "Create Exchange",
    "parameters": [
      {
        "name": "accountNo",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DWBG000052"
      },
      {
        "name": "sellSymbol",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "VTSMX"
      },
      {
        "name": "buySymbol",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "VTSAX"
      },
      {
        "name": "amountCash",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 100
      },
      {
        "name": "quantity",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 100.503
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/exchanges/{exchangeIdentifier}",
    "method": "getDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Exchanges",
    "typeScriptTag": "exchanges",
    "description": "Retrieve Exchange",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/accounts/{accountID}/summary/exchanges",
    "method": "listByAccount",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Exchanges",
    "typeScriptTag": "exchanges",
    "description": "List Exchanges by Account",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/accounts/{accountID}/reports/exchange-history",
    "method": "getExchangeHistory",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Exchanges",
    "typeScriptTag": "exchanges",
    "description": "Retrieve Exchange History by Account",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/bars",
    "method": "getBars",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Charts",
    "typeScriptTag": "charts",
    "description": "Retrieve Chart",
    "parameters": [
      {
        "name": "instrumentId",
        "schema": "string",
        "required": true,
        "description": "A unique ID created by DriveWealth to identify a specific instrument.",
        "example": "3fb1e8a9-f7d5-4d90-95e2-43e7326b5636"
      },
      {
        "name": "compression",
        "schema": "string",
        "required": true,
        "description": "The compression number represents the time increments of the chart data. Refer to the Compression table above.",
        "example": "9"
      },
      {
        "name": "dateStart",
        "schema": "string",
        "required": true,
        "description": "The start date of the chart data. Follow ISO-8601 format.",
        "example": "2022-11-10T00:00:00Z"
      },
      {
        "name": "dateEnd",
        "schema": "string",
        "required": true,
        "description": "The end date of the chart data. Follow ISO-8601 format.",
        "example": "2022-11-18T23:59:00Z"
      },
      {
        "name": "tradingDays",
        "schema": "string",
        "required": false,
        "description": "TradingDays may be defined as 1-60 days in the past from the current date. If set do not use `dateStart` and `dateEnd` values.",
        "example": "20"
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/instruments",
    "method": "listAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Instruments",
    "typeScriptTag": "instruments",
    "description": "List Instruments",
    "parameters": [
      {
        "name": "status",
        "schema": "string",
        "required": false,
        "description": "The instrument status; to filter by.",
        "example": "ACTIVE"
      },
      {
        "name": "isOptionsEnabled",
        "schema": "boolean",
        "required": false,
        "description": "The ability to trade options for this instrument; to filter by.",
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
    "url": "/instruments/{symbolOrInstrumentID}",
    "method": "getDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Instruments",
    "typeScriptTag": "instruments",
    "description": "Retrieve Instrument",
    "parameters": [
      {
        "name": "symbolOrInstrumentId",
        "schema": "string",
        "required": true,
        "description": "A unique ID created by DriveWealth to identify a specific Equity Instrument or Option Instrument, also accept the market symbols like Ticker for Equities and OSI for Options.",
        "example": "3fb1e8a9-f7d5-4d90-95e2-43e7326b5636"
      },
      {
        "name": "options",
        "schema": "string",
        "required": false,
        "description": "This query parameter will add an additional property; `fundamentalDataModel` to the response object for an Equity Instrument only. This data consists of financial data model specs for a specific Instrument.",
        "example": "Fundamentals"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/instruments/{symbolOrInstrumentID}/options",
    "method": "getOptionsChain",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Instruments",
    "typeScriptTag": "instruments",
    "description": "Retrieve Options Chain",
    "parameters": [
      {
        "name": "symbolOrInstrumentId",
        "schema": "string",
        "required": true,
        "description": "Symbol or instrumentID of the underlying equity security",
        "example": "AAPL"
      },
      {
        "name": "expirationDate",
        "schema": "string",
        "required": true,
        "description": "The expiration date of the option security; to filter by.",
        "example": "2022-05-15"
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "",
        "example": 1
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "required": false,
        "description": "The number of option instruments to be returned per page.",
        "example": 20
      },
      {
        "name": "sortOrder",
        "schema": "string",
        "required": false,
        "description": "The sorting order of option instruments.",
        "example": "asc",
        "default": "asc"
      },
      {
        "name": "noOfStrikes",
        "schema": "integer",
        "required": false,
        "description": "The number of option instruments to be returned above and below market price.",
        "example": 5
      },
      {
        "name": "minStrikePrice",
        "schema": "integer",
        "required": false,
        "description": "The option instruments to be returned above the strike price.",
        "example": 20
      },
      {
        "name": "maxStrikePrice",
        "schema": "integer",
        "required": false,
        "description": "The option instruments to be returned below the strike price.",
        "example": 100
      },
      {
        "name": "optionType",
        "schema": "string",
        "required": false,
        "description": "The type of option instruments to be returned.",
        "example": "CALL"
      },
      {
        "name": "id",
        "schema": "string",
        "required": false,
        "description": "The instrument ID of the option security.",
        "example": "3fb1e8a9-f7d5-4d90-95e2-43e7326b5636"
      },
      {
        "name": "filterBy",
        "schema": "string",
        "required": false,
        "description": "The expiration dates for the given underlying security; to filter by.",
        "example": "expirationDate"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/instruments/{symbolOrInstrumentID}/options/expiration-dates",
    "method": "getOptionExpiration",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Instruments",
    "typeScriptTag": "instruments",
    "description": "Retrieve Option Expiration",
    "parameters": [
      {
        "name": "symbolOrInstrumentId",
        "schema": "string",
        "required": true,
        "description": "Symbol or instrumentID of the underlying equity security.",
        "example": "AAPL"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/instruments/filter",
    "method": "searchByFilter",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Instruments",
    "typeScriptTag": "instruments",
    "description": "Search Instruments by Filter",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/orders",
    "method": "createSecurityOrder",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Orders",
    "typeScriptTag": "orders",
    "description": "Create Order",
    "parameters": [
      {
        "name": "accountNo",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CSSW000001"
      },
      {
        "name": "orderType",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "MARKET"
      },
      {
        "name": "limitType",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "PRICE"
      },
      {
        "name": "symbol",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "MS"
      },
      {
        "name": "side",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "BUY"
      },
      {
        "name": "instrumentID",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "3fb1e8a9-f7d5-4d90-95e2-43e7326b5636"
      },
      {
        "name": "ISIN",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "US023135BX34"
      },
      {
        "name": "quantity",
        "schema": "number",
        "required": false,
        "description": "",
        "example": 5
      },
      {
        "name": "amountCash",
        "schema": "number",
        "required": false,
        "description": "",
        "example": null
      },
      {
        "name": "price",
        "schema": "number",
        "required": false,
        "description": "",
        "example": 160.12
      },
      {
        "name": "currency",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "USD"
      },
      {
        "name": "commission",
        "schema": "number",
        "required": false,
        "description": "",
        "example": 4
      },
      {
        "name": "clientNotes",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Manual limit order."
      },
      {
        "name": "preventQueuing",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": false
      },
      {
        "name": "extendedHours",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": false
      },
      {
        "name": "metadata",
        "schema": "object",
        "required": false,
        "description": "",
        "example": {
          "myCustomKey": "myCustomValue"
        }
      },
      {
        "name": "timeInForce",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "GTC"
      },
      {
        "name": "expiration",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "YYYY-MM-DD"
      },
      {
        "name": "salesCredit",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "dccs",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": true
      },
      {
        "name": "taxLotDisposition",
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
    "url": "/orders/{orderID}",
    "method": "getStatus",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Orders",
    "typeScriptTag": "orders",
    "description": "Retrieve Order",
    "parameters": [
      {
        "name": "orderId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "IC.0e352bb7-9869-4233-9861-9673544efedd"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Order details for a fixed income asset trade"
      }
    ]
  },
  {
    "url": "/orders/{orderID}",
    "method": "updateInProgress",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Orders",
    "typeScriptTag": "orders",
    "description": "Update Order",
    "parameters": [
      {
        "name": "orderId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "IC.0e352bb7-9869-4233-9861-9673544efedd"
      },
      {
        "name": "method",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CANCEL"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/orders/byOrderNo/{orderNo}",
    "method": "getByOrderNo",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Orders",
    "typeScriptTag": "orders",
    "description": "Retrieve Order By OrderNo",
    "parameters": [
      {
        "name": "orderNo",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ICDU023727"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Order details for a fixed income asset trade"
      }
    ]
  },
  {
    "url": "/orders/crypto/rfq",
    "method": "createRfqCrypto",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Orders",
    "typeScriptTag": "orders",
    "description": "Create a request-for-quote",
    "parameters": [
      {
        "name": "accountID",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "cc07f91b-7ee1-4868-b8fc-823c70a1b932.1407775317759"
      },
      {
        "name": "symbol",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "BTC"
      },
      {
        "name": "side",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "B"
      },
      {
        "name": "quantity",
        "schema": "number",
        "required": false,
        "description": "",
        "example": 0.7219
      },
      {
        "name": "amountCash",
        "schema": "number",
        "required": false,
        "description": "",
        "example": null
      },
      {
        "name": "quotedCurrency",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USD"
      },
      {
        "name": "ipAddress",
        "schema": "string",
        "required": true,
        "description": "",
        "example": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/orders/crypto/execute",
    "method": "executeRfqCrypto",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Orders",
    "typeScriptTag": "orders",
    "description": "Create Order with request-for-quote",
    "parameters": [
      {
        "name": "accountID",
        "schema": "string",
        "description": "",
        "example": "cc07f91b-7ee1-4868-b8fc-823c70a1b932.1407775317759"
      },
      {
        "name": "type",
        "schema": "string",
        "description": "",
        "example": "MARKET"
      },
      {
        "name": "symbol",
        "schema": "string",
        "description": "",
        "example": "BTC"
      },
      {
        "name": "side",
        "schema": "string",
        "description": "",
        "example": "B"
      },
      {
        "name": "quantity",
        "schema": "number",
        "description": "",
        "example": 0.7219
      },
      {
        "name": "amountCash",
        "schema": "number",
        "description": "",
        "example": null
      },
      {
        "name": "quotedID",
        "schema": "string",
        "description": "",
        "example": "465c5ab3-f61d-4dcc-a799-9167173ac433"
      },
      {
        "name": "ipAddress",
        "schema": "string",
        "description": "",
        "example": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/orders/options",
    "method": "getOptionOrders",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Orders",
    "typeScriptTag": "orders",
    "description": "Retrieve Option Orders",
    "parameters": [
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "LIQUIDATION"
      },
      {
        "name": "status",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "COMPLETED"
      },
      {
        "name": "partnerIbid",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "80f9b672-120d-4b73-9cc9-42fb3262c4b9"
      },
      {
        "name": "fromDate",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "2022-12-25"
      },
      {
        "name": "toDate",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "2022-12-26"
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "required": false,
        "description": "The number of results to be returned.",
        "example": 20
      },
      {
        "name": "pageNo",
        "schema": "integer",
        "required": false,
        "description": "",
        "example": 1
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/documents",
    "method": "uploadDriverLicense",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Physical Documents",
    "typeScriptTag": "physicalDocuments",
    "description": "Create Physical Document",
    "parameters": [
      {
        "name": "userID",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "cc07f91b-7ee1-4868-b8fc-823c70a1b932"
      },
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DRIVER_LICENSE"
      },
      {
        "name": "document",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAASABIAAD/4QCMR"
      },
      {
        "name": "side",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "FRONT"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/{documentID}/url",
    "method": "getUrlByDocumentId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Physical Documents",
    "typeScriptTag": "physicalDocuments",
    "description": "Retrieve Physical Document URL by Document",
    "parameters": [
      {
        "name": "documentId",
        "schema": "string",
        "required": true,
        "description": "The unique identifier of the document.",
        "example": "532e1b7d-09fd-4a1b-956f-d4e91ad71b4f"
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
    "url": "/quotes",
    "method": "getReferentialDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Quotes",
    "typeScriptTag": "quotes",
    "description": "Retrieve Quote (referential feed)",
    "parameters": [
      {
        "name": "dwCustomerUserId",
        "schema": "string",
        "description": "",
        "example": "66304da9-3h6f-2234-935f-ac6b7933d706"
      },
      {
        "name": "symbols",
        "schema": "string",
        "required": true,
        "description": "The ticker symbol of the associated instrument. Multiple ticker symbols separated by a comma may also be used.",
        "example": "MS"
      },
      {
        "name": "exchangeOverride",
        "schema": "string",
        "required": false,
        "description": "The quote details will be 15 minutes delayed.",
        "example": "15MinDelayed"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/quotes/vdr",
    "method": "getConsolidatedFeed",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Quotes",
    "typeScriptTag": "quotes",
    "description": "Retrieve Quote (consolidated feed)",
    "parameters": [
      {
        "name": "dwCustomerUserId",
        "schema": "string",
        "description": "",
        "example": "66304da9-3h6f-2234-935f-ac6b7933d706"
      },
      {
        "name": "symbols",
        "schema": "string",
        "required": true,
        "description": "The ticker symbol of the associated instrument.",
        "example": "MS"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/quotes/depth",
    "method": "getDebtDepth",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Depth of Book",
    "typeScriptTag": "depthOfBook",
    "description": "Retrieve Depth of Book",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/funding/reconciliations",
    "method": "getDailyReconciliations",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Settlements",
    "typeScriptTag": "settlements",
    "description": "List Cashless Reconciliations",
    "parameters": [
      {
        "name": "to",
        "schema": "string",
        "required": true,
        "description": "The date and time in which to end at.",
        "example": "2022-12-25T18:36:40.609Z"
      },
      {
        "name": "from",
        "schema": "string",
        "required": true,
        "description": "The date and time in which to start from.",
        "example": "2022-12-08T18:36:40.609Z"
      },
      {
        "name": "type",
        "schema": "string",
        "required": false,
        "description": "Filters the reconciliations reports by the type of reconciliation.",
        "example": "CRYPTO"
      },
      {
        "name": "status",
        "schema": "string",
        "required": false,
        "description": "Filters the reconciliations reports by the status of reconciliation.",
        "example": "APPROVED"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A list of daily reconciliations for a firm."
      }
    ]
  },
  {
    "url": "/funding/reconciliations/{reconciliationID}",
    "method": "getCashlessReconciliation",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Settlements",
    "typeScriptTag": "settlements",
    "description": "Retrieve Cashless Reconciliation",
    "parameters": [
      {
        "name": "reconciliationId",
        "schema": "string",
        "required": true,
        "description": "The unique identifier of the reconciliation report.",
        "example": "2b37a45d-341e-48a2-b838-0f9912ac8598_20220118"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/funding/reconciliations/{reconciliationID}",
    "method": "updateCashlessReconciliation",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Settlements",
    "typeScriptTag": "settlements",
    "description": "Update Cashless Reconciliation",
    "parameters": [
      {
        "name": "reconciliationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "2b37a45d-341e-48a2-b838-0f9912ac8598_20220118"
      },
      {
        "name": "status",
        "schema": "string",
        "description": "",
        "example": "SUCCESSFUL"
      },
      {
        "name": "statusComment",
        "schema": "string",
        "description": "",
        "example": "Manually approving reconciliation for testing purposes."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/funding/recurring-deposits/{recurringID}",
    "method": "inactivateRecurring",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Deposits",
    "typeScriptTag": "deposits",
    "description": "Delete Recurring Deposit",
    "parameters": [
      {
        "name": "recurringId",
        "schema": "string",
        "required": true,
        "description": "A unique identifier for the user's recurring bank deposit.",
        "example": "recurring_98be6652-6361-4d4c-905b-06e9ec38d060"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/funding/recurring-deposits/{recurringID}",
    "method": "getScheduleByRecurringId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Deposits",
    "typeScriptTag": "deposits",
    "description": "Retrieve Recurring Deposits",
    "parameters": [
      {
        "name": "recurringId",
        "schema": "string",
        "required": true,
        "description": "A unique identifier for the user's recurring bank deposit.",
        "example": "recurring_98be6652-6361-4d4c-905b-06e9ec38d060"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/funding/recurring-deposits/{recurringID}",
    "method": "updateRecurringDeposit",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Deposits",
    "typeScriptTag": "deposits",
    "description": "Update Recurring Deposit",
    "parameters": [
      {
        "name": "recurringId",
        "schema": "string",
        "required": true,
        "description": "A unique identifier for the user's recurring bank deposit.",
        "example": "recurring_98be6652-6361-4d4c-905b-06e9ec38d060"
      },
      {
        "name": "amount",
        "schema": "number",
        "description": "",
        "example": 330.25
      },
      {
        "name": "frequency",
        "schema": "string",
        "description": "",
        "example": "MONTHLY_FIRST"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/funding/redemptions",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Withdrawals",
    "typeScriptTag": "withdrawals",
    "description": "List Withdrawals",
    "parameters": [
      {
        "name": "status",
        "schema": "string",
        "required": true,
        "description": "The current status of the withdrawal; to filter by.",
        "example": "PENDING"
      },
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "The type of withdrawal; to filter by.",
        "example": "ACH"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A list of all redemptions for the firm."
      }
    ]
  },
  {
    "url": "/funding/redemptions",
    "method": "createUserWithdrawal",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Withdrawals",
    "typeScriptTag": "withdrawals",
    "description": "Create Withdrawal",
    "parameters": [
      {
        "name": "accountNo",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DWBG000052"
      },
      {
        "name": "amount",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 125.92
      },
      {
        "name": "currency",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USD"
      },
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACH"
      },
      {
        "name": "bankAccountID",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "bank_a4656e60-321e-425b-aa0d-a2e75c38885f"
      },
      {
        "name": "details",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "iraDistribution",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "PREMATURE"
      },
      {
        "name": "iraTaxWithholdings",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "liquidate",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": false
      },
      {
        "name": "note",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Hey! Welcome to DriveWealth Developer Docs!"
      },
      {
        "name": "settlementProfileID",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "settlement-profile-bank-account-1"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/funding/redemptions/{redemptionID}",
    "method": "getByRedemptionId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Withdrawals",
    "typeScriptTag": "withdrawals",
    "description": "Retrieve Withdrawal",
    "parameters": [
      {
        "name": "redemptionId",
        "schema": "string",
        "required": true,
        "description": "A unique identifier for the user's account redemption/withdrawal.",
        "example": "cc07f91b-7ee1-4868-b8fc-823c70a1b932"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/funding/settlements/instant-funding",
    "method": "listBulkSettlements",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Settlements",
    "typeScriptTag": "settlements",
    "description": "List Bulk Settlements",
    "parameters": [
      {
        "name": "from",
        "schema": "string",
        "required": true,
        "description": "The date and time in which to start from.",
        "example": "2022-12-08T18:36:40.609Z"
      },
      {
        "name": "to",
        "schema": "string",
        "required": true,
        "description": "The date and time in which to end at.",
        "example": "2022-12-25T18:36:40.609Z"
      },
      {
        "name": "category",
        "schema": "string",
        "required": false,
        "description": "Filters the settlements by the category of the settlement.",
        "example": "DEPOSIT"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A list of daily settlement details."
      }
    ]
  },
  {
    "url": "/funding/settlements/instant-funding/{settlementID}",
    "method": "getBulkSettlementBySettlementId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Settlements",
    "typeScriptTag": "settlements",
    "description": "Retrieve Bulk Settlement",
    "parameters": [
      {
        "name": "settlementId",
        "schema": "string",
        "required": true,
        "description": "The unique identifier that identifies the settlement report.",
        "example": "DP_63ccb073-a7b6-4b33-af77-5baec5cc4494_20220118"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/funding/settlements/instant-funding/{settlementID}",
    "method": "updateBulkSettlementBySettlementId",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Settlements",
    "typeScriptTag": "settlements",
    "description": "Update Bulk Settlement",
    "parameters": [
      {
        "name": "settlementId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DP_63ccb073-a7b6-4b33-af77-5baec5cc4494_20220118"
      },
      {
        "name": "status",
        "schema": "string",
        "description": "",
        "example": "SUCCESSFUL"
      },
      {
        "name": "statusComment",
        "schema": "string",
        "description": "",
        "example": "Updated settlement status for testing purposes."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/accounts/{accountID}/reports/daily-trade-summary",
    "method": "listDvpRvpReports",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Settlements",
    "typeScriptTag": "settlements",
    "description": "List DVP RVP Reports",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "cc07f91b-7ee1-4868-b8fc-823c70a1b932.1407775317759"
      },
      {
        "name": "status",
        "schema": "string",
        "description": "A filter, to filter on the status of the DVP/RVP.",
        "example": "Processing"
      },
      {
        "name": "from",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "2022-12-25"
      },
      {
        "name": "to",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "2022-12-26"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/accounts/{accountID}/reports/daily-trade-summary",
    "method": "createDvpRvpReportJob",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Settlements",
    "typeScriptTag": "settlements",
    "description": "Create DVP RVP Report",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "cc07f91b-7ee1-4868-b8fc-823c70a1b932.1407775317759"
      },
      {
        "name": "tradeDate",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "2021-06-04"
      },
      {
        "name": "note",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Hey! Welcome to DriveWealth Developer Docs!"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/accounts/{accountID}/reports/daily-trade-summary/{reportID}",
    "method": "getDvpRvpByReportId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Settlements",
    "typeScriptTag": "settlements",
    "description": "Retrieve DVP RVP",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "cc07f91b-7ee1-4868-b8fc-823c70a1b932.1407775317759"
      },
      {
        "name": "reportId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "bsr_040fb9cc-84e8-4f20-bf09-d398dacd458d.1622745430469_20210604"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/statements/{accountID}/{fileKey}",
    "method": "getDocumentUrlByAccountAndFileKey",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Statements",
    "typeScriptTag": "statements",
    "description": "Retrieve Document URL by Account and FileKey",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "cc07f91b-7ee1-4868-b8fc-823c70a1b932.1407775317759"
      },
      {
        "name": "fileKey",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "2022122502"
      }
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
    "method": "createCharge",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Subscriptions",
    "typeScriptTag": "subscriptions",
    "description": "Create Subscription",
    "parameters": [
      {
        "name": "accountID",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "cc07f91b-7ee1-4868-b8fc-823c70a1b932.1407775317759"
      },
      {
        "name": "bankAccountID",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "bank_a4656e60-321e-425b-aa0d-a2e75c38885f"
      },
      {
        "name": "planID",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "plan_1d3e1630-9107-47c2-a9c4-6cca93821cb7"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/subscriptions/{subscriptionID}",
    "method": "removeBySubscription",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Subscriptions",
    "typeScriptTag": "subscriptions",
    "description": "Delete Subscription",
    "parameters": [
      {
        "name": "subscriptionId",
        "schema": "string",
        "required": true,
        "description": "The unique identifier that identifies the user's subscription.",
        "example": "subscription_4451b62e-0e88-46ce-9eab-f0a54ccdc599"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "User's Subscription removal was Received."
      }
    ]
  },
  {
    "url": "/users",
    "method": "createProfile",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Create User",
    "parameters": [
      {
        "name": "userType",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "INDIVIDUAL_TRADER"
      },
      {
        "name": "wlpID",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "TTCC"
      },
      {
        "name": "parentIBID",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "95c98ed5-e29e-4d55-90bf-8898fcf6af85"
      },
      {
        "name": "documents",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "metadata",
        "schema": "object",
        "required": false,
        "description": "",
        "example": {
          "myCustomKey": "myCustomValue"
        }
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/users/{userID}",
    "method": "getProfile",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Retrieve User",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "Unique ID of the User to fetch.",
        "example": "cc07f91b-7ee1-4868-b8fc-823c70a1b932"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/users/{userID}",
    "method": "updateProfile",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Update User",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "Unique ID of the User to update.",
        "example": "cc07f91b-7ee1-4868-b8fc-823c70a1b932"
      },
      {
        "name": "documents",
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
    "url": "/users/{userID}/kyc-status",
    "method": "getKycByUser",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Retrieve KYC by User",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "Unique ID of the User to fetch their profile & kyc status.",
        "example": "cc07f91b-7ee1-4868-b8fc-823c70a1b932"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/users/{userID}/accounts",
    "method": "listByUser",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Accounts",
    "typeScriptTag": "accounts",
    "description": "List Accounts by User",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "Unique ID of the User to fetch their accounts at DriveWealth.",
        "example": "cc07f91b-7ee1-4868-b8fc-823c70a1b932"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A list of all the user's accounts at DriveWealth."
      }
    ]
  },
  {
    "url": "/users/{userID}/bank-accounts",
    "method": "listByUser",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Linked Bank Accounts",
    "typeScriptTag": "linkedBankAccounts",
    "description": "List Linked Bank Accounts by User",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "Unique ID of the User to fetch their stored bank accounts.",
        "example": "cc07f91b-7ee1-4868-b8fc-823c70a1b932"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A list of all the User's linked bank accounts."
      }
    ]
  },
  {
    "url": "/users/{userID}/documents",
    "method": "listByUser",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Physical Documents",
    "typeScriptTag": "physicalDocuments",
    "description": "List Physical Documents by User",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "The User's unique identifier.",
        "example": "cc07f91b-7ee1-4868-b8fc-823c70a1b932"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "An array of uploaded documents"
      }
    ]
  },
  {
    "url": "/users/{userID}/subscriptions",
    "method": "listByUser",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Subscriptions",
    "typeScriptTag": "subscriptions",
    "description": "List Subscriptions by User",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "The User's unique identifier.",
        "example": "cc07f91b-7ee1-4868-b8fc-823c70a1b932"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A list of the user's current subscriptions."
      }
    ]
  },
  {
    "url": "/users/{userID}/recurring-deposits",
    "method": "getUserRecurring",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Deposits",
    "typeScriptTag": "deposits",
    "description": "List Recurring Deposits by User",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "The User's unique identifier.",
        "example": "cc07f91b-7ee1-4868-b8fc-823c70a1b932"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A list of the all the user's recurring deposits."
      }
    ]
  },
  {
    "url": "/users/{userID}/funding/deposits",
    "method": "listByUser",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Deposits",
    "typeScriptTag": "deposits",
    "description": "List Deposits by User",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "The User's unique identifier.",
        "example": "cc07f91b-7ee1-4868-b8fc-823c70a1b932"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A list of deposits"
      }
    ]
  },
  {
    "url": "/users/{userID}/funding/redemptions",
    "method": "getUserRedemptions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Withdrawals",
    "typeScriptTag": "withdrawals",
    "description": "List Withdrawals by User",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "The User's unique identifier.",
        "example": "cc07f91b-7ee1-4868-b8fc-823c70a1b932"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/users/{userID}/managed/allocations",
    "method": "listByAdvisor",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Trade Allocations",
    "typeScriptTag": "tradeAllocations",
    "description": "List Trade Allocations by Advisor",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "The User's unique identifier.",
        "example": "cc07f91b-7ee1-4868-b8fc-823c70a1b932"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A list of a User's sub account allocations."
      }
    ]
  },
  {
    "url": "/users/{userID}/managed/orders/summary",
    "method": "getUserOrdersSummary",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Advisor Reports",
    "typeScriptTag": "advisorReports",
    "description": "List Orders by Advisor",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "The User's unique identifier.",
        "example": "cc07f91b-7ee1-4868-b8fc-823c70a1b932"
      },
      {
        "name": "date",
        "schema": "string",
        "required": false,
        "description": "The specific request date in format YYYY-MM-DD.",
        "example": "2022-12-25"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/users/{userID}/managed/orders",
    "method": "listAllocationsByUserId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Advisor Reports",
    "typeScriptTag": "advisorReports",
    "description": "List Allocations by Advisor",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "The User's unique identifier.",
        "example": "cc07f91b-7ee1-4868-b8fc-823c70a1b932"
      },
      {
        "name": "from",
        "schema": "string",
        "required": true,
        "description": "The date and time in which to start from.",
        "example": "2022-12-08T18:36:40.609Z"
      },
      {
        "name": "to",
        "schema": "string",
        "required": true,
        "description": "The date and time in which to end at.",
        "example": "2022-12-25T18:36:40.609Z"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/users/{userID}/managed/bod",
    "method": "getBeginningOfDayHoldingsByUserId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Advisor Reports",
    "typeScriptTag": "advisorReports",
    "description": "Retrieve Beginning Of Day (https://developer.drivewealth.com/apis/reference/introduction by Advisor",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "The User's unique identifier.",
        "example": "cc07f91b-7ee1-4868-b8fc-823c70a1b932"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/users/{userID}/managed/funds",
    "method": "listByAdvisor",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Funds",
    "typeScriptTag": "funds",
    "description": "List Funds by Advisor",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "The User's unique identifier.",
        "example": "cc07f91b-7ee1-4868-b8fc-823c70a1b932"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A list of individual funds holdings."
      }
    ]
  },
  {
    "url": "/users/{userID}/managed/portfolio",
    "method": "listByAdvisor",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Portfolios",
    "typeScriptTag": "portfolios",
    "description": "List Portfolios by Advisor",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "The User's unique identifier.",
        "example": "cc07f91b-7ee1-4868-b8fc-823c70a1b932"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A list of portfolios by userID."
      }
    ]
  },
  {
    "url": "/users/{userID}/managed/autopilot",
    "method": "listByAdvisor",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "AutoPilot",
    "typeScriptTag": "autoPilot",
    "description": "List AutoPilot Runs by Advisor",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "The User's unique identifier.",
        "example": "cc07f91b-7ee1-4868-b8fc-823c70a1b932"
      },
      {
        "name": "from",
        "schema": "string",
        "required": false,
        "description": "The date and time in which to start from.",
        "example": "2022-12-08T18:36:40.609Z"
      },
      {
        "name": "to",
        "schema": "string",
        "required": false,
        "description": "The date and time in which to end at.",
        "example": "2022-12-25T18:36:40.609Z"
      },
      {
        "name": "direction",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "NEXT"
      },
      {
        "name": "offset",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "2022-12-08T18:36:40.609Z"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A list of autopilot runs by userID."
      }
    ]
  }
]
    }
      language="TypeScript"
      apiTitle="DriveWealth API"
      apiBaseUrl="https://bo-api.drivewealth.io/back-office"
      apiVersion="1.0"
      endpoints={96}
      sdkMethods={115}
      schemas={490}
      parameters={314}
      difficulty="Hard"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/drivewealth/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/drivewealth/openapi.yaml"
      developerDocumentation="developer.drivewealth.com/apis/reference/introduction"
    />
  );
}
  