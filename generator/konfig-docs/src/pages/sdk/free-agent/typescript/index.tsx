import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function FreeAgentTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="free-agent-typescript-sdk"
      metaDescription={`One product.🤳 17 years. 📆 250+ employees. 🧑‍💻Over 150,000 users. 💥There's so much to say about it all. But here's the version that fits the character limit.

We're FreeAgent. 👋 We make award-winning accounting software and provide superstar support for small businesses and their accountants and bookkeepers. We're a friendly bunch with a single goal bringing us all together: making users happier and more successful by putting them in control of their finances.

But how did we get here? 🤔 You might remember 2007 as the year the first iPhone, Kindle and Fitbit debuted. It was also the year FreeAgent was launched.💡 Founders Ed, Olly and Roan had all been working as freelance designers or developers for a while. They created FreeAgent out of the frustration that doing the books was just too damn difficult for most of us. So they put their heads together and decided that there must be a better way to deal with their mounting piles of invoices, spreadsheets and receipts.

Since our first hire back in 2008, we've also worked hard to make FreeAgent a ✨great✨ place to work.  We've grown to over 250 employees and we continue to build a diverse, high-performing, happy and collaborative team.

In early 2018,  the company was acquired by the NatWest Group. Our growth has been given a turbo boost, yet we remain operationally independent of the group. 🚀

Today, FreeAgent helps over 150,000 users take care of their finances - from the daily admin to big-picture planning - and do it all happily and successfully. Just like Ed, Olly and Roan set out to do all those years ago. 💙`}
      company="FreeAgent"
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/freeagent/logo.png"
      companyKebabCase="free-agent"
      clientNameCamelCase="freeAgent"
      homepage="freeagent.com"
      lastUpdated={new Date("2024-03-28T17:24:12.967Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/freeagent/favicon.png"
      // Missing contactUrl
      // Missing contactEmail
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/freeagent/imagePreview.png"
      GettingStarted={GettingStarted}
      FirstRequest={FirstRequest}
      categories={["accounting","finance"]}
      methods={[
  {
    "url": "/v2/token_endpoint",
    "method": "refreshAccessToken",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "_Authorization",
    "typeScriptTag": "authorization",
    "description": "Refresh access token",
    "parameters": [
      {
        "name": "client_id",
        "schema": "string",
        "description": "",
        "example": "{{client_id}}"
      },
      {
        "name": "client_secret",
        "schema": "string",
        "description": "",
        "example": "{{client_secret}}"
      },
      {
        "name": "grant_type",
        "schema": "string",
        "description": "",
        "example": "refresh_token"
      },
      {
        "name": "refresh_token",
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
    "url": "/v2/clients",
    "method": "getAllClients",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Accountancy Practice API",
    "typeScriptTag": "accountancyPracticeApi",
    "description": "List all clients",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/account_managers",
    "method": "listAccountManagers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Accountancy Practice API",
    "typeScriptTag": "accountancyPracticeApi",
    "description": "List all account managers",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/account_managers/{id}",
    "method": "getAccountManager",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Accountancy Practice API",
    "typeScriptTag": "accountancyPracticeApi",
    "description": "Get a single account manager",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/attachments/{id}",
    "method": "deleteAttachment",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Attachments",
    "typeScriptTag": "attachments",
    "description": "Delete Attachment",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/attachments/{id}",
    "method": "showAttachment",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Attachments",
    "typeScriptTag": "attachments",
    "description": "Show Attachment",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/bank_accounts",
    "method": "listBankAccounts",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Bank Accounts",
    "typeScriptTag": "bankAccounts",
    "description": "List Bank Accounts",
    "parameters": [
      {
        "name": "view",
        "schema": "string",
        "description": "",
        "example": "standard_bank_accounts"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/bank_accounts",
    "method": "createNewAccount",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Bank Accounts",
    "typeScriptTag": "bankAccounts",
    "description": "Create Bank Account",
    "parameters": [
      {
        "name": "bank_account",
        "schema": "object",
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
    "url": "/v2/bank_accounts/{id}",
    "method": "deleteAccount",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Bank Accounts",
    "typeScriptTag": "bankAccounts",
    "description": "Delete Bank Account",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/bank_accounts/{id}",
    "method": "showDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Bank Accounts",
    "typeScriptTag": "bankAccounts",
    "description": "Show Bank Account",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/bank_accounts/{id}",
    "method": "updateAccount",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Bank Accounts",
    "typeScriptTag": "bankAccounts",
    "description": "Update Bank Account",
    "parameters": [
      {
        "name": "bank_account",
        "schema": "object",
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
    "url": "/v2/bank_transaction_explanations",
    "method": "listAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Bank Transaction Explanations",
    "typeScriptTag": "bankTransactionExplanations",
    "description": "List all bank transaction explanations",
    "parameters": [
      {
        "name": "fromDate",
        "schema": "string",
        "description": "",
        "example": "2018-01-01"
      },
      {
        "name": "toDate",
        "schema": "string",
        "description": "",
        "example": "2018-01-01"
      },
      {
        "name": "updatedSince",
        "schema": "string",
        "description": "",
        "example": "2018-01-01"
      },
      {
        "name": "bankAccount",
        "schema": "string",
        "description": "",
        "example": "{{url}}/v2/bank_accounts/:id"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/bank_transaction_explanations",
    "method": "createExplanation",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Bank Transaction Explanations",
    "typeScriptTag": "bankTransactionExplanations",
    "description": "Create a bank transaction explanation",
    "parameters": [
      {
        "name": "bank_transaction_explanation",
        "schema": "object",
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
    "url": "/v2/bank_transaction_explanations",
    "method": "updateExplanation",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Bank Transaction Explanations",
    "typeScriptTag": "bankTransactionExplanations",
    "description": "Update a bank transaction explanation",
    "parameters": [
      {
        "name": "bank_transaction_explanation",
        "schema": "object",
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
    "url": "/v2/bank_transaction_explanations/{id}",
    "method": "deleteExplanation",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Bank Transaction Explanations",
    "typeScriptTag": "bankTransactionExplanations",
    "description": "Delete a bank transaction explanation",
    "parameters": [
      {
        "name": "bank_transaction_explanation",
        "schema": "object",
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
    "url": "/v2/bank_transaction_explanations/{id}",
    "method": "getSingleExplanation",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Bank Transaction Explanations",
    "typeScriptTag": "bankTransactionExplanations",
    "description": "Get a single bank transaction explanation",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/bank_transactions",
    "method": "listUnderAccount",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Bank Transactions",
    "typeScriptTag": "bankTransactions",
    "description": "List all bank transactions under a certain bank account",
    "parameters": [
      {
        "name": "bankAccount",
        "schema": "string",
        "description": "",
        "example": "{{url}}/v2/bank_accounts/1"
      },
      {
        "name": "fromDate",
        "schema": "string",
        "description": "",
        "example": "2018-01-01"
      },
      {
        "name": "toDate",
        "schema": "string",
        "description": "",
        "example": "2018-01-01"
      },
      {
        "name": "updatedSince",
        "schema": "string",
        "description": "",
        "example": "2018-01-01"
      },
      {
        "name": "view",
        "schema": "string",
        "description": "",
        "example": "all"
      },
      {
        "name": "lastUploaded",
        "schema": "string",
        "description": "",
        "example": "true"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/bank_transactions/{id}",
    "method": "getSingleTransaction",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Bank Transactions",
    "typeScriptTag": "bankTransactions",
    "description": "Get a single bank transaction",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2//bank_transactions/statement",
    "method": "uploadStatement",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Bank Transactions",
    "typeScriptTag": "bankTransactions",
    "description": "Upload a bank statement",
    "parameters": [
      {
        "name": "bankAccount",
        "schema": "string",
        "description": "",
        "example": "{{url}}/v2/bank_accounts/:id"
      },
      {
        "name": "statement",
        "schema": "array",
        "description": "",
        "example": [
          {
            "description": "Local Council",
            "amount": -100,
            "dated_on": "2019-07-01"
          },
          {
            "description": "Sales",
            "amount": 3560,
            "dated_on": "2019-07-05"
          }
        ]
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/bills",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Bills",
    "typeScriptTag": "bills",
    "description": "List Bills",
    "parameters": [
      {
        "name": "view",
        "schema": "string",
        "description": "",
        "example": "all"
      },
      {
        "name": "fromDate",
        "schema": "string",
        "description": "",
        "example": "2018-01-01"
      },
      {
        "name": "toDate",
        "schema": "string",
        "description": "",
        "example": "2018-01-01"
      },
      {
        "name": "updatedSince",
        "schema": "string",
        "description": "",
        "example": "2018-01-01"
      },
      {
        "name": "contact",
        "schema": "string",
        "description": "",
        "example": "{{url}}/v2/contacts/:id"
      },
      {
        "name": "project",
        "schema": "string",
        "description": "",
        "example": "{{url}}/v2/projects/:id"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/bills",
    "method": "createBill",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Bills",
    "typeScriptTag": "bills",
    "description": "Create Bill",
    "parameters": [
      {
        "name": "bill",
        "schema": "object",
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
    "url": "/v2/bills/{id}",
    "method": "deleteBill",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Bills",
    "typeScriptTag": "bills",
    "description": "Delete Bill",
    "parameters": [
      {
        "name": "bill",
        "schema": "object",
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
    "url": "/v2/bills/{id}",
    "method": "getBill",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Bills",
    "typeScriptTag": "bills",
    "description": "Show Bill",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/bills/{id}",
    "method": "updateBill",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Bills",
    "typeScriptTag": "bills",
    "description": "Update Bill",
    "parameters": [
      {
        "name": "bill",
        "schema": "object",
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
    "url": "/v2/bill_items",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Bill Items",
    "typeScriptTag": "billItems",
    "description": "List Bill Items",
    "parameters": [
      {
        "name": "bill",
        "schema": "string",
        "description": "",
        "example": "{{url}}/v2/bills/6"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/bill_items/{bill_item_id}",
    "method": "getItem",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Bill Items",
    "typeScriptTag": "billItems",
    "description": "Show Bill Item",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/capital_assets",
    "method": "getAllAssets",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Capital Assets",
    "typeScriptTag": "capitalAssets",
    "description": "List all capital assets",
    "parameters": [
      {
        "name": "includeHistory",
        "schema": "string",
        "description": "Retrieves information about events in the capital asset life cycle (such as purchase, depreciation, and disposal).",
        "example": "true"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/capital_asset_types",
    "method": "listAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Capital Asset Types",
    "typeScriptTag": "capitalAssetTypes",
    "description": "List all capital asset types",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/capital_asset_types",
    "method": "createNewType",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Capital Asset Types",
    "typeScriptTag": "capitalAssetTypes",
    "description": "Create capital asset type",
    "parameters": [
      {
        "name": "capital_asset_type",
        "schema": "object",
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
    "url": "/v2/capital_asset_types/{id}",
    "method": "deleteType",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Capital Asset Types",
    "typeScriptTag": "capitalAssetTypes",
    "description": "Delete capital asset type",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/capital_asset_types/{id}",
    "method": "getSingle",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Capital Asset Types",
    "typeScriptTag": "capitalAssetTypes",
    "description": "Get a single capital asset type",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/capital_asset_types/{id}",
    "method": "updateType",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Capital Asset Types",
    "typeScriptTag": "capitalAssetTypes",
    "description": "Update capital asset type",
    "parameters": [
      {
        "name": "capital_asset_type",
        "schema": "object",
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
    "url": "/v2/cashflow",
    "method": "summaryForGivenDateRange",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Cashflow",
    "typeScriptTag": "cashflow",
    "description": "Cashflow summary for a given date range",
    "parameters": [
      {
        "name": "fromDate",
        "schema": "string",
        "description": "",
        "example": "01-07-2019"
      },
      {
        "name": "toDate",
        "schema": "string",
        "description": "",
        "example": "30-09-2019"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/categories",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Categories",
    "typeScriptTag": "categories",
    "description": "List Categories",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/categories",
    "method": "createCategory",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Categories",
    "typeScriptTag": "categories",
    "description": "Create category",
    "parameters": [
      {
        "name": "category",
        "schema": "object",
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
    "url": "/v2/categories/{nominal_code}",
    "method": "removeCategory",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Categories",
    "typeScriptTag": "categories",
    "description": "Delete category",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/categories/{nominal_code}",
    "method": "getSingleCategory",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Categories",
    "typeScriptTag": "categories",
    "description": "Get a single category",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/categories/{nominal_code}",
    "method": "updateCategory",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Categories",
    "typeScriptTag": "categories",
    "description": "Update category",
    "parameters": [
      {
        "name": "category",
        "schema": "object",
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
    "url": "/v2/cis_bands",
    "method": "listAllForCompany",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "CIS Bands",
    "typeScriptTag": "cisBands",
    "description": "List all CIS bands for a company",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/company",
    "method": "detailsGet",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Company",
    "typeScriptTag": "company",
    "description": "Company Details",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/company/business_categories",
    "method": "listBusinessCategories",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Company",
    "typeScriptTag": "company",
    "description": "List business categories",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/company/tax_timeline",
    "method": "showTaxTimeline",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Company",
    "typeScriptTag": "company",
    "description": "Show Tax Timeline",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/contacts",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Contacts",
    "typeScriptTag": "contacts",
    "description": "List Contacts",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/contacts",
    "method": "addNewContact",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Contacts",
    "typeScriptTag": "contacts",
    "description": "Create Contact",
    "parameters": [
      {
        "name": "contact",
        "schema": "object",
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
    "url": "/v2/contacts/{id}",
    "method": "deleteContact",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Contacts",
    "typeScriptTag": "contacts",
    "description": "Delete Contact",
    "parameters": [
      {
        "name": "contact",
        "schema": "object",
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
    "url": "/v2/contacts/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Contacts",
    "typeScriptTag": "contacts",
    "description": "Show Contact",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/contacts/{id}",
    "method": "updateContactById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Contacts",
    "typeScriptTag": "contacts",
    "description": "Update Contact",
    "parameters": [
      {
        "name": "contact",
        "schema": "object",
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
    "url": "/v2/credit_notes/{id}/transitions/mark_as_sent",
    "method": "markAsSent",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Credit Notes",
    "typeScriptTag": "creditNotes",
    "description": "Mark Credit Note as sent",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/credit_notes/{id}/transitions/mark_as_cancelled",
    "method": "markAsCancelled",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Credit Notes",
    "typeScriptTag": "creditNotes",
    "description": "Mark Credit Note as cancelled",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/credit_notes/{id}/transitions/mark_as_draft",
    "method": "markAsDraft",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Credit Notes",
    "typeScriptTag": "creditNotes",
    "description": "Mark Credit Notes as draft",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/credit_notes",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Credit Notes",
    "typeScriptTag": "creditNotes",
    "description": "List Credit Notes",
    "parameters": [
      {
        "name": "contact",
        "schema": "string",
        "description": "",
        "example": "{{url}}/v2/contacts/:id"
      },
      {
        "name": "project",
        "schema": "string",
        "description": "",
        "example": "{{url}}/v2/projects/:id"
      },
      {
        "name": "currency",
        "schema": "string",
        "description": "",
        "example": "USD"
      },
      {
        "name": "view",
        "schema": "string",
        "description": "",
        "example": "all"
      },
      {
        "name": "updatedSince",
        "schema": "string",
        "description": "",
        "example": "2018-01-01"
      },
      {
        "name": "sort",
        "schema": "string",
        "description": "",
        "example": "updated_at"
      },
      {
        "name": "nestedCreditNoteItems",
        "schema": "string",
        "description": "",
        "example": "true"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/credit_notes",
    "method": "createNewCreditNote",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Credit Notes",
    "typeScriptTag": "creditNotes",
    "description": "Create Credit Note",
    "parameters": [
      {
        "name": "credit_note",
        "schema": "object",
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
    "url": "/v2/credit_notes/{id}",
    "method": "deleteCreditNote",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Credit Notes",
    "typeScriptTag": "creditNotes",
    "description": "Delete Credit Notes",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/credit_notes/{id}",
    "method": "showCreditNote",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Credit Notes",
    "typeScriptTag": "creditNotes",
    "description": "Show Credit Note",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/credit_notes/{id}",
    "method": "updateCreditNote",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Credit Notes",
    "typeScriptTag": "creditNotes",
    "description": "Update Credit Note",
    "parameters": [
      {
        "name": "credit_note",
        "schema": "object",
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
    "url": "/v2/credit_notes/{id}/pdf",
    "method": "showPdf",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Credit Notes",
    "typeScriptTag": "creditNotes",
    "description": "Show Credit Note as PDF",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/credit_notes/{id}/send_email",
    "method": "sendEmail",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Credit Notes",
    "typeScriptTag": "creditNotes",
    "description": "Send Credit Note Email",
    "parameters": [
      {
        "name": "credit_note",
        "schema": "object",
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
    "url": "/v2/credit_note_reconciliations",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Credit Note Reconciliations",
    "typeScriptTag": "creditNoteReconciliations",
    "description": "List Credit Note Reconciliations",
    "parameters": [
      {
        "name": "updatedSince",
        "schema": "string",
        "description": "",
        "example": "2018-01-01"
      },
      {
        "name": "fromDate",
        "schema": "string",
        "description": "",
        "example": "2020-07-01"
      },
      {
        "name": "toDate",
        "schema": "string",
        "description": "",
        "example": "2020-08-24"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/credit_note_reconciliations",
    "method": "createReconciliation",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Credit Note Reconciliations",
    "typeScriptTag": "creditNoteReconciliations",
    "description": "Create Credit Note Reconciliation",
    "parameters": [
      {
        "name": "credit_note_reconciliation",
        "schema": "object",
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
    "url": "/v2/credit_note_reconciliations/{id}",
    "method": "deleteReconciliation",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Credit Note Reconciliations",
    "typeScriptTag": "creditNoteReconciliations",
    "description": "Delete Credit Note Reconciliation",
    "parameters": [
      {
        "name": "",
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
    "url": "/v2/credit_note_reconciliations/{id}",
    "method": "showReconciliation",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Credit Note Reconciliations",
    "typeScriptTag": "creditNoteReconciliations",
    "description": "Show Credit Note Reconciliation",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/credit_note_reconciliations/{id}",
    "method": "updateReconciliation",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Credit Note Reconciliations",
    "typeScriptTag": "creditNoteReconciliations",
    "description": "Update Credit Note Reconciliation",
    "parameters": [
      {
        "name": "credit_note_reconciliation",
        "schema": "object",
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
    "url": "/v2/email_addresses",
    "method": "listVerified",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Email Addresses",
    "typeScriptTag": "emailAddresses",
    "description": "Get a list of verified sender email addresses",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/estimates/{id}/transitions/mark_as_sent",
    "method": "markAsSent",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Estimates",
    "typeScriptTag": "estimates",
    "description": "Mark estimate as sent",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/estimates/{id}/transitions/mark_as_draft",
    "method": "markAsDraft",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Estimates",
    "typeScriptTag": "estimates",
    "description": "Mark estimate as draft",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/estimates/{id}/transitions/mark_as_approved",
    "method": "markAsApproved",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Estimates",
    "typeScriptTag": "estimates",
    "description": "Mark estimate as approved",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/estimates/{id}/transitions/mark_as_rejected",
    "method": "markAsRejected",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Estimates",
    "typeScriptTag": "estimates",
    "description": "Mark estimate as rejected",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/estimate_items",
    "method": "createItem",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Estimates",
    "typeScriptTag": "estimates",
    "description": "Create Estimate Item",
    "parameters": [
      {
        "name": "estimate",
        "schema": "string",
        "description": "",
        "example": "{{url}}/v2/estimates/:id"
      },
      {
        "name": "estimate_item",
        "schema": "object",
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
    "url": "/v2/estimate_items/{id}",
    "method": "deleteItem",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Estimates",
    "typeScriptTag": "estimates",
    "description": "Delete Estimate Item",
    "parameters": [
      {
        "name": "estimate",
        "schema": "object",
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
    "url": "/v2/estimate_items/{id}",
    "method": "updateItem",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Estimates",
    "typeScriptTag": "estimates",
    "description": "Update Estimate Item",
    "parameters": [
      {
        "name": "estimate_item",
        "schema": "object",
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
    "url": "/v2/estimates",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Estimates",
    "typeScriptTag": "estimates",
    "description": "List Estimates",
    "parameters": [
      {
        "name": "view",
        "schema": "string",
        "description": "",
        "example": "all"
      },
      {
        "name": "fromDate",
        "schema": "string",
        "description": "",
        "example": "2018-01-01"
      },
      {
        "name": "toDate",
        "schema": "string",
        "description": "",
        "example": "2018-01-01"
      },
      {
        "name": "updatedSince",
        "schema": "string",
        "description": "",
        "example": "2018-01-01"
      },
      {
        "name": "nestedEstimateItems",
        "schema": "string",
        "description": "",
        "example": "true"
      },
      {
        "name": "contact",
        "schema": "string",
        "description": "",
        "example": "{{url}}/v2/contacts/2"
      },
      {
        "name": "project",
        "schema": "string",
        "description": "",
        "example": "{{url}}/v2/projects/2"
      },
      {
        "name": "invoice",
        "schema": "string",
        "description": "",
        "example": "{{url}}/v2/invoices/2"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/estimates",
    "method": "createNew",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Estimates",
    "typeScriptTag": "estimates",
    "description": "Create Estimate",
    "parameters": [
      {
        "name": "estimate",
        "schema": "object",
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
    "url": "/v2/estimates/{id}",
    "method": "deleteEstimate",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Estimates",
    "typeScriptTag": "estimates",
    "description": "Delete Estimate",
    "parameters": [
      {
        "name": "estimate",
        "schema": "object",
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
    "url": "/v2/estimates/{id}",
    "method": "showDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Estimates",
    "typeScriptTag": "estimates",
    "description": "Show Estimate",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/estimates/{id}",
    "method": "updateById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Estimates",
    "typeScriptTag": "estimates",
    "description": "Update Estimate",
    "parameters": [
      {
        "name": "estimate",
        "schema": "object",
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
    "url": "/v2/estimates/{id}/pdf",
    "method": "getAsPdf",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Estimates",
    "typeScriptTag": "estimates",
    "description": "Show Estimate as PDF",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/expenses",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Expenses",
    "typeScriptTag": "expenses",
    "description": "List all expenses",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/expenses",
    "method": "createExpense",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Expenses",
    "typeScriptTag": "expenses",
    "description": "Create expense",
    "parameters": [
      {
        "name": "expenses",
        "schema": "array",
        "description": "",
        "example": [
          {
            "description": "Some description",
            "category": "https://api.freeagent.com/v2/categories/285",
            "created_at": "2011-08-24T08:10:40Z",
            "dated_on": "2011-08-24",
            "gross_value": "-12.0",
            "manual_sales_tax_amount": "0.12",
            "sales_tax_rate": "20.0",
            "updated_at": "2011-08-24T08:10:40Z",
            "user": "{{url}}/v2/users/1"
          },
          {
            "description": "Some description",
            "category": "https://api.freeagent.com/v2/categories/285",
            "created_at": "2011-08-25T08:10:40Z",
            "dated_on": "2011-08-24",
            "gross_value": "-5.0",
            "manual_sales_tax_amount": "0.12",
            "sales_tax_rate": "20.0",
            "updated_at": "2011-08-25T08:10:40Z",
            "user": "{{url}}/v2/users/1"
          }
        ]
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/expenses/{id}",
    "method": "deleteExpense",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Expenses",
    "typeScriptTag": "expenses",
    "description": "Delete expense",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/expenses/{id}",
    "method": "getSingleExpense",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Expenses",
    "typeScriptTag": "expenses",
    "description": "Get a single expense",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/expenses/mileage_settings",
    "method": "getMileageSettings",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Expenses",
    "typeScriptTag": "expenses",
    "description": "Get mileage settings",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/invoices/{id}/transitions/mark_as_sent",
    "method": "markAsSent",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Invoices",
    "typeScriptTag": "invoices",
    "description": "Mark invoice as sent",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/invoices/{id}/transitions/mark_as_cancelled",
    "method": "markAsCancelled",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Invoices",
    "typeScriptTag": "invoices",
    "description": "Mark invoice as cancelled",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/invoices/{id}/transitions/mark_as_scheduled",
    "method": "markAsScheduled",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Invoices",
    "typeScriptTag": "invoices",
    "description": "Mark invoice as scheduled",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/invoices/{id}/transitions/mark_as_draft",
    "method": "markAsDraft",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Invoices",
    "typeScriptTag": "invoices",
    "description": "Mark invoice as draft",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/invoices",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Invoices",
    "typeScriptTag": "invoices",
    "description": "List Invoices",
    "parameters": [
      {
        "name": "nestedInvoiceItems",
        "schema": "string",
        "description": "",
        "example": "true"
      },
      {
        "name": "contact",
        "schema": "string",
        "description": "",
        "example": "{{url}}/v2/contacts/:id"
      },
      {
        "name": "project",
        "schema": "string",
        "description": "",
        "example": "{{url}}/v2/projects/:id"
      },
      {
        "name": "currency",
        "schema": "string",
        "description": "",
        "example": "USD"
      },
      {
        "name": "view",
        "schema": "string",
        "description": "",
        "example": "all"
      },
      {
        "name": "updatedSince",
        "schema": "string",
        "description": "",
        "example": "2018-01-01"
      },
      {
        "name": "sort",
        "schema": "string",
        "description": "",
        "example": "updated_at"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/invoices",
    "method": "createNewInvoice",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Invoices",
    "typeScriptTag": "invoices",
    "description": "Create Invoice",
    "parameters": [
      {
        "name": "invoice",
        "schema": "object",
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
    "method": "deleteInvoice",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Invoices",
    "typeScriptTag": "invoices",
    "description": "Delete Invoice",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/invoices/{id}",
    "method": "showDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Invoices",
    "typeScriptTag": "invoices",
    "description": "Show Invoice",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/invoices/{id}",
    "method": "updateInvoiceById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Invoices",
    "typeScriptTag": "invoices",
    "description": "Update Invoice",
    "parameters": [
      {
        "name": "invoice",
        "schema": "object",
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
    "url": "/v2/invoices/timeline",
    "method": "getTimeline",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Invoices",
    "typeScriptTag": "invoices",
    "description": "Get invoice timeline",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/invoices/{id}/pdf",
    "method": "getPdf",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Invoices",
    "typeScriptTag": "invoices",
    "description": "Show Invoice as PDF",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/invoices/{id}/send_email",
    "method": "sendEmail",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Invoices",
    "typeScriptTag": "invoices",
    "description": "Send Invoice Email",
    "parameters": [
      {
        "name": "invoice",
        "schema": "object",
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
    "url": "/v2/invoices/{id}/direct_debit",
    "method": "takePaymentUsingGoCardlessDirectDebitMandate",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Invoices",
    "typeScriptTag": "invoices",
    "description": "Take Payment using GoCardless Direct Debit Mandate",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/invoice_items",
    "method": "addNewInvoiceItem",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Invoices",
    "typeScriptTag": "invoices",
    "description": "Create Invoice Item",
    "parameters": [
      {
        "name": "invoice",
        "schema": "string",
        "description": "",
        "example": "https://api.freeagent.com/v2/invoices/1"
      },
      {
        "name": "invoice_item",
        "schema": "object",
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
    "url": "/v2/journal_sets",
    "method": "listAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Journal Sets",
    "typeScriptTag": "journalSets",
    "description": "List all journal sets",
    "parameters": [
      {
        "name": "toDate",
        "schema": "string",
        "description": "",
        "example": "2018-01-01"
      },
      {
        "name": "fromDate",
        "schema": "string",
        "description": "",
        "example": "2018-01-01"
      },
      {
        "name": "tag",
        "schema": "string",
        "description": "",
        "example": "MYAPPTAG"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/journal_sets",
    "method": "createNewSet",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Journal Sets",
    "typeScriptTag": "journalSets",
    "description": "Create a journal set",
    "parameters": [
      {
        "name": "journal_set",
        "schema": "object",
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
    "url": "/v2/journal_sets",
    "method": "updateJournalSet",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Journal Sets",
    "typeScriptTag": "journalSets",
    "description": "Update a journal set",
    "parameters": [
      {
        "name": "journal_set",
        "schema": "object",
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
    "url": "/v2/journal_sets/{id}",
    "method": "deleteSet",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Journal Sets",
    "typeScriptTag": "journalSets",
    "description": "Delete a journal set",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/journal_sets/{id}",
    "method": "getSingleSet",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Journal Sets",
    "typeScriptTag": "journalSets",
    "description": "Get a single journal set",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/journal_sets/opening_balances",
    "method": "getOpeningBalances",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Journal Sets",
    "typeScriptTag": "journalSets",
    "description": "Get the Opening Balances",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/notes",
    "method": "getAllNotes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Notes",
    "typeScriptTag": "notes",
    "description": "List Notes",
    "parameters": [
      {
        "name": "contact",
        "schema": "string",
        "description": "",
        "example": "{{url}}/v2/contact/:id"
      },
      {
        "name": "project",
        "schema": "string",
        "description": "",
        "example": "{{url}}/v2/project/:id"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/notes/{id}",
    "method": "deleteNote",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Notes",
    "typeScriptTag": "notes",
    "description": "Delete a note",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/notes/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Notes",
    "typeScriptTag": "notes",
    "description": "Get a single note",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/notes/{id}",
    "method": "createNote",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Notes",
    "typeScriptTag": "notes",
    "description": "Create a Note",
    "parameters": [
      {
        "name": "contact",
        "schema": "string",
        "description": "",
        "example": "{{url}}/v2/contact/:id"
      },
      {
        "name": "project",
        "schema": "string",
        "description": "",
        "example": "{{url}}/v2/project/:id"
      },
      {
        "name": "note",
        "schema": "object",
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
    "url": "/v2/notes/{id}",
    "method": "updateNoteById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Notes",
    "typeScriptTag": "notes",
    "description": "Update a Note",
    "parameters": [
      {
        "name": "note",
        "schema": "object",
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
    "url": "/v2/payroll/{year}",
    "method": "listPeriodsForYear",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Payroll",
    "typeScriptTag": "payroll",
    "description": "List all periods for a given tax year",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/payroll/{year}/{period}",
    "method": "payslipsForPeriod",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Payroll",
    "typeScriptTag": "payroll",
    "description": "List all payslips for a given period",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/payroll_profiles/{year}",
    "method": "listForGivenYear",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Payroll Profiles",
    "typeScriptTag": "payrollProfiles",
    "description": "List all profiles for a given tax year",
    "parameters": [
      {
        "name": "user",
        "schema": "string",
        "description": "",
        "example": "{{url}}/v2/users/107"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/price_list_items",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Price List Items",
    "typeScriptTag": "priceListItems",
    "description": "List all Price List Items",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/price_list_items/{id}",
    "method": "getSingleItem",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Price List Items",
    "typeScriptTag": "priceListItems",
    "description": "Get a single Price List Item",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/accounting/profit_and_loss/summary",
    "method": "summaryGet",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Profit & Loss",
    "typeScriptTag": "profit &Loss",
    "description": "Get the P&L summary",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/properties",
    "method": "listAllProperties",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Properties",
    "typeScriptTag": "properties",
    "description": "List all properties",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/properties",
    "method": "createNewProperty",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Properties",
    "typeScriptTag": "properties",
    "description": "Create a new property",
    "parameters": [
      {
        "name": "property",
        "schema": "object",
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
    "url": "/v2/properties/{id}",
    "method": "removeProperty",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Properties",
    "typeScriptTag": "properties",
    "description": "Delete a property",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/properties/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Properties",
    "typeScriptTag": "properties",
    "description": "Get a single property",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/properties/{id}",
    "method": "updateProperty",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Properties",
    "typeScriptTag": "properties",
    "description": "Update a property",
    "parameters": [
      {
        "name": "property",
        "schema": "object",
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
    "url": "/v2/projects",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Projects",
    "typeScriptTag": "projects",
    "description": "List Projects",
    "parameters": [
      {
        "name": "contact",
        "schema": "string",
        "description": "",
        "example": "{{url}}/v2/contacts/:id"
      },
      {
        "name": "nested",
        "schema": "string",
        "description": "Retrieves contact's details as nested JSON objects rather than URL references.",
        "example": "true"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/projects",
    "method": "createNewProject",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Projects",
    "typeScriptTag": "projects",
    "description": "Create Project",
    "parameters": [
      {
        "name": "project",
        "schema": "object",
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
    "url": "/v2/projects/{id}",
    "method": "remove",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Projects",
    "typeScriptTag": "projects",
    "description": "Delete Project",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/projects/{id}",
    "method": "showProject",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Projects",
    "typeScriptTag": "projects",
    "description": "Show Project",
    "parameters": [
      {
        "name": "nested",
        "schema": "string",
        "description": "Retrieves contact's details as nested JSON objects rather than URL references.",
        "example": "true"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/projects/{id}",
    "method": "updateProject",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Projects",
    "typeScriptTag": "projects",
    "description": "Update Project",
    "parameters": [
      {
        "name": "project",
        "schema": "object",
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
    "url": "/v2/recurring_invoices",
    "method": "listAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Recurring Invoices",
    "typeScriptTag": "recurringInvoices",
    "description": "List all recurring invoices",
    "parameters": [
      {
        "name": "view",
        "schema": "string",
        "description": "",
        "example": "draft"
      },
      {
        "name": "contact",
        "schema": "string",
        "description": "",
        "example": "{{url}}/v2/contacts/:id"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/recurring_invoices/{id}",
    "method": "showDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Recurring Invoices",
    "typeScriptTag": "recurringInvoices",
    "description": "Show Recurring Invoice",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/sales_tax_periods",
    "method": "getAllPeriods",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Sales Tax Periods",
    "typeScriptTag": "salesTaxPeriods",
    "description": "List all sales tax periods for a company",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/sales_tax_periods",
    "method": "createPeriod",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Sales Tax Periods",
    "typeScriptTag": "salesTaxPeriods",
    "description": "Create a sales tax period",
    "parameters": [
      {
        "name": "sales_tax_period",
        "schema": "object",
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
    "url": "/v2/sales_tax_periods/{id}",
    "method": "deletePeriod",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Sales Tax Periods",
    "typeScriptTag": "salesTaxPeriods",
    "description": "Delete a sales tax period",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/sales_tax_periods/{id}",
    "method": "getSinglePeriod",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Sales Tax Periods",
    "typeScriptTag": "salesTaxPeriods",
    "description": "Get a single sales tax period",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/sales_tax_periods/{id}",
    "method": "updatePeriod",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Sales Tax Periods",
    "typeScriptTag": "salesTaxPeriods",
    "description": "Update a sales tax period",
    "parameters": [
      {
        "name": "sales_tax_period",
        "schema": "object",
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
    "url": "/v2/stock_items",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Stock Items",
    "typeScriptTag": "stockItems",
    "description": "List all Stock Items",
    "parameters": [
      {
        "name": "contact",
        "schema": "string",
        "description": "",
        "example": "{{url}}/v2/contacts/:id"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/stock_items/{id}",
    "method": "getItemById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Stock Items",
    "typeScriptTag": "stockItems",
    "description": "Get a single Stock Item",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/tasks",
    "method": "listAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Tasks",
    "typeScriptTag": "tasks",
    "description": "List all tasks",
    "parameters": [
      {
        "name": "view",
        "schema": "string",
        "description": "",
        "example": "all"
      },
      {
        "name": "updatedSince",
        "schema": "string",
        "description": "",
        "example": "2018-01-01"
      },
      {
        "name": "project",
        "schema": "string",
        "description": "",
        "example": "{{url}}/v2/projects/:id"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/tasks",
    "method": "createUnderProject",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Tasks",
    "typeScriptTag": "tasks",
    "description": "Create a task under a certain project",
    "parameters": [
      {
        "name": "project",
        "schema": "string",
        "description": "",
        "example": "{{url}}/v2/projects/:id"
      },
      {
        "name": "task",
        "schema": "object",
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
    "url": "/v2/tasks/{id}",
    "method": "removeTask",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Tasks",
    "typeScriptTag": "tasks",
    "description": "Delete Task",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/tasks/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Tasks",
    "typeScriptTag": "tasks",
    "description": "Get a single task",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/tasks/{id}",
    "method": "updateTaskById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Tasks",
    "typeScriptTag": "tasks",
    "description": "Update a task",
    "parameters": [
      {
        "name": "task",
        "schema": "object",
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
    "url": "/v2/timeslips/{id}/timer",
    "method": "stopTimer",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Timeslips",
    "typeScriptTag": "timeslips",
    "description": "Stop a Timer",
    "parameters": [
      {
        "name": "nested",
        "schema": "string",
        "description": "Retrieves full details of resources associated with the timeslip(https://dev.freeagent.com/docs - such as user, project, task - as nested JSON objects rather than URL references.",
        "example": "true"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/timeslips/{id}/timer",
    "method": "startTimer",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Timeslips",
    "typeScriptTag": "timeslips",
    "description": "Start a Timer",
    "parameters": [
      {
        "name": "nested",
        "schema": "string",
        "description": "Retrieves full details of resources associated with the timeslip(https://dev.freeagent.com/docs - such as user, project, task - as nested JSON objects rather than URL references.",
        "example": "true"
      },
      {
        "name": "timeslip",
        "schema": "object",
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
    "url": "/v2/timeslips",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Timeslips",
    "typeScriptTag": "timeslips",
    "description": "List all timeslips",
    "parameters": [
      {
        "name": "view",
        "schema": "string",
        "description": "",
        "example": "all"
      },
      {
        "name": "fromDate",
        "schema": "string",
        "description": "",
        "example": "2018-01-01"
      },
      {
        "name": "toDate",
        "schema": "string",
        "description": "",
        "example": "2018-01-01"
      },
      {
        "name": "updatedSince",
        "schema": "string",
        "description": "",
        "example": "2018-01-01"
      },
      {
        "name": "user",
        "schema": "string",
        "description": "",
        "example": "{{url}}/v2/users/:id"
      },
      {
        "name": "task",
        "schema": "string",
        "description": "",
        "example": "{{url}}/v2/tasks/:id"
      },
      {
        "name": "project",
        "schema": "string",
        "description": "",
        "example": "{{url}}/v2/projects/:id"
      },
      {
        "name": "nested",
        "schema": "string",
        "description": "Retrieves full details of resources associated with the timeslip(https://dev.freeagent.com/docs - such as user, project, task - as nested JSON objects rather than URL references.",
        "example": "true"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/timeslips",
    "method": "createNew",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Timeslips",
    "typeScriptTag": "timeslips",
    "description": "Create a timeslip",
    "parameters": [
      {
        "name": "nested",
        "schema": "string",
        "description": "Retrieves full details of resources associated with the timeslip(https://dev.freeagent.com/docs - such as user, project, task - as nested JSON objects rather than URL references.",
        "example": "true"
      },
      {
        "name": "timeslip",
        "schema": "object",
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
    "url": "/v2/timeslips/{id}",
    "method": "removeById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Timeslips",
    "typeScriptTag": "timeslips",
    "description": "Delete a timeslip",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/timeslips/{id}",
    "method": "getSingle",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Timeslips",
    "typeScriptTag": "timeslips",
    "description": "Get a single timeslip",
    "parameters": [
      {
        "name": "nested",
        "schema": "string",
        "description": "Retrieves full details of resources associated with the timeslip(https://dev.freeagent.com/docs - such as user, project, task - as nested JSON objects rather than URL references.",
        "example": "true"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/timeslips/{id}",
    "method": "updateById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Timeslips",
    "typeScriptTag": "timeslips",
    "description": "Update a timeslip",
    "parameters": [
      {
        "name": "nested",
        "schema": "string",
        "description": "Retrieves full details of resources associated with the timeslip(https://dev.freeagent.com/docs - such as user, project, task - as nested JSON objects rather than URL references.",
        "example": "true"
      },
      {
        "name": "timeslip",
        "schema": "object",
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
    "url": "/v2/accounting/trial_balance/summary",
    "method": "summaryGet",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Trial Balance",
    "typeScriptTag": "trialBalance",
    "description": "Get the trial balance summary",
    "parameters": [
      {
        "name": "toDate",
        "schema": "string",
        "description": "",
        "example": "2018-01-01"
      },
      {
        "name": "fromDate",
        "schema": "string",
        "description": "",
        "example": "2018-01-01"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/accounting/trial_balance/summary/opening_balances",
    "method": "getOpeningBalances",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Trial Balance",
    "typeScriptTag": "trialBalance",
    "description": "Get the opening balances",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/users",
    "method": "listAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "List All Users",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/users",
    "method": "addNewUser",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Create a user",
    "parameters": [
      {
        "name": "user",
        "schema": "object",
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
    "url": "/v2/users/{id}",
    "method": "deleteUser",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Delete a user",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/users/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Get a single user",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/users/{id}",
    "method": "updateUserById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Update a user",
    "parameters": [
      {
        "name": "user",
        "schema": "object",
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
    "url": "/v2/users/me",
    "method": "getPersonalProfile",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Get personal profile",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/capital_assets/{id}",
    "method": "getDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Capital Assets",
    "typeScriptTag": "capitalAssets",
    "description": "Get a single capital asset",
    "parameters": [
      {
        "name": "includeHistory",
        "schema": "string",
        "description": "Retrieves information about events in the capital asset life cycle (such as purchase, depreciation, and disposal).",
        "example": "true"
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
      apiTitle="FreeAgent"
      apiBaseUrl="https://api.freeagent.com"
      apiVersion="1.0.0"
      endpoints={93}
      sdkMethods={201}
      schemas={58}
      parameters={137}
      difficulty="Hard"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/freeagent/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/freeagent/openapi.yaml"
      developerDocumentation="dev.freeagent.com/docs"
    />
  );
}
  