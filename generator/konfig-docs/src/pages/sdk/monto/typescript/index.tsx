import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function MontoTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="monto-typescript-sdk"
      metaDescription={`Monto is a Stockholm-based fintech that helps Nordic SME lenders harness the power of real-time data. We combine smart tech and deep industry know-how to help fintechs, banks, lending brokers and BaaS platforms make better credit decisions, streamline processes and improve the customer experience.

With Monto, lenders no longer have to rely on manual, dated or mediocre data sources in their credit reviews. Our API unlocks instant access to up-to-date income statements, ledger quality, financial ratios, and more, fetched from leading accounting software providers in Sweden. We also provide a visual interface that allows credit teams to gain a comprehensive financial understanding of their connected borrowers.

Our platform is tech agnostic and available for a free trial.`}
      company="Monto"
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/monto/logo.webp"
      companyKebabCase="monto"
      clientNameCamelCase="monto"
      homepage="monto.ai"
      lastUpdated={new Date("2024-03-29T20:19:21.743Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/monto/favicon.png"
      // Missing contactUrl
      contactEmail="dev@monto.ai"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/monto/imagePreview.png"
      GettingStarted={GettingStarted}
      FirstRequest={FirstRequest}
      categories={["fintech","financial_data","lending","credit_decisions"]}
      methods={[
  {
    "url": "/integrations",
    "method": "listSupported",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Integration",
    "typeScriptTag": "integration",
    "description": "Get integrations",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/integrations/{integration-key}",
    "method": "getSingle",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Integration",
    "typeScriptTag": "integration",
    "description": "Get integration",
    "parameters": [
      {
        "name": "integrationKey",
        "schema": "string",
        "required": true,
        "description": "The key of a specific [Integration](https://monto.redoc.ly/).",
        "example": "FORTNOX"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      }
    ]
  },
  {
    "url": "/subscriptions",
    "method": "listRegisteredSubscriptions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Subscription",
    "typeScriptTag": "subscription",
    "description": "Get subscriptions",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "description": "The paginated page number.",
        "default": 1
      },
      {
        "name": "size",
        "schema": "integer",
        "description": "The pagination page size.",
        "default": 50
      }
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
    "method": "createNewSubscription",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Subscription",
    "typeScriptTag": "subscription",
    "description": "Create subscription",
    "parameters": [
      {
        "name": "protocol",
        "schema": "string",
        "description": "",
        "example": "HTTPS"
      },
      {
        "name": "endpoint",
        "schema": "string",
        "description": "",
        "example": "https://api.my-service.com/webhook"
      },
      {
        "name": "topics",
        "schema": "array",
        "description": "",
        "example": [
          "*"
        ]
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": "Unprocessable Entity"
      }
    ]
  },
  {
    "url": "/subscriptions/{subscription-uuid}",
    "method": "removeByUuid",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Subscription",
    "typeScriptTag": "subscription",
    "description": "Delete subscription",
    "parameters": [
      {
        "name": "subscriptionUuid",
        "schema": "string",
        "required": true,
        "description": "Unique identifier of a subscription",
        "example": "e9bb5e02-b2e1-46a3-93fb-82dbe277087e"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      }
    ]
  },
  {
    "url": "/companies",
    "method": "listCompanies",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Company",
    "typeScriptTag": "company",
    "description": "Get companies",
    "parameters": [
      {
        "name": "search",
        "schema": "string",
        "description": "Search for companies by `name`, `legalName`, or `businessId`."
      },
      {
        "name": "syncStatus",
        "schema": "string",
        "description": ""
      },
      {
        "name": "status",
        "schema": "string",
        "description": ""
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "The paginated page number.",
        "default": 1
      },
      {
        "name": "size",
        "schema": "integer",
        "description": "The pagination page size.",
        "default": 50
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/companies",
    "method": "createNewCompany",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Company",
    "typeScriptTag": "company",
    "description": "Create company",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "description": "",
        "example": "Monto AB"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": "Unprocessable Entity"
      }
    ]
  },
  {
    "url": "/companies/{company-uuid}",
    "method": "removeByUuid",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Company",
    "typeScriptTag": "company",
    "description": "Delete company",
    "parameters": [
      {
        "name": "companyUuid",
        "schema": "string",
        "required": true,
        "description": "Unique identifier of company",
        "example": "9e0a58e5-60b5-4c15-ba2e-77b1bed4977d"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      }
    ]
  },
  {
    "url": "/companies/{company-uuid}",
    "method": "getSingle",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Company",
    "typeScriptTag": "company",
    "description": "Get company",
    "parameters": [
      {
        "name": "companyUuid",
        "schema": "string",
        "required": true,
        "description": "Unique identifier of company",
        "example": "9e0a58e5-60b5-4c15-ba2e-77b1bed4977d"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      }
    ]
  },
  {
    "url": "/companies/{company-uuid}/customer-invoices",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Customer Invoice",
    "typeScriptTag": "customerInvoice",
    "description": "Get customer invoices",
    "parameters": [
      {
        "name": "companyUuid",
        "schema": "string",
        "required": true,
        "description": "Unique identifier of company",
        "example": "9e0a58e5-60b5-4c15-ba2e-77b1bed4977d"
      },
      {
        "name": "search",
        "schema": "string",
        "description": "Search for invoices by `invoice_number` or by its customer's `name`."
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "The paginated page number.",
        "default": 1
      },
      {
        "name": "size",
        "schema": "integer",
        "description": "The pagination page size.",
        "default": 50
      },
      {
        "name": "fromDate",
        "schema": "string",
        "required": false,
        "description": "Filter on issueDate",
        "example": "2021-12-31"
      },
      {
        "name": "toDate",
        "schema": "string",
        "required": false,
        "description": "Filter on issueDate",
        "example": "2021-12-31"
      },
      {
        "name": "sortedBy",
        "schema": "string",
        "description": "Comma-separated list of columns to sort by. This parameter is required if `order` has a value. Available options:\n  - uuid,\n  - invoiceNumber,\n  - amount.amount,\n  - amount.currency,\n  - balance.amount,\n  - balance.currency,\n  - issueDate,\n  - dueDate,\n  - paidInFullDate,\n  - customer.name\n",
        "example": "amount, invoiceNumber"
      },
      {
        "name": "order",
        "schema": "string",
        "description": "Comma-separated list of sorting orders corresponding to the columns in `sortedBy`.\nUse 'asc' for ascending and 'desc' for descending. This parameter is required if `sortedBy` has a value.\n",
        "example": "desc, asc"
      },
      {
        "name": "createdAt",
        "schema": "string",
        "required": false,
        "description": "Filter on createdAt",
        "example": "2022-12-31"
      },
      {
        "name": "updatedAt",
        "schema": "string",
        "required": false,
        "description": "Filter on updatedAt",
        "example": "2022-12-31"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      }
    ]
  },
  {
    "url": "/companies/{company-uuid}/suppliers",
    "method": "listSuppliers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Supplier",
    "typeScriptTag": "supplier",
    "description": "Get suppliers",
    "parameters": [
      {
        "name": "companyUuid",
        "schema": "string",
        "required": true,
        "description": "Unique identifier of company",
        "example": "9e0a58e5-60b5-4c15-ba2e-77b1bed4977d"
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "The paginated page number.",
        "default": 1
      },
      {
        "name": "size",
        "schema": "integer",
        "description": "The pagination page size.",
        "default": 50
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      }
    ]
  },
  {
    "url": "/companies/{company-uuid}/customers",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Customer",
    "typeScriptTag": "customer",
    "description": "Get customers",
    "parameters": [
      {
        "name": "companyUuid",
        "schema": "string",
        "required": true,
        "description": "Unique identifier of company",
        "example": "9e0a58e5-60b5-4c15-ba2e-77b1bed4977d"
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "The paginated page number.",
        "default": 1
      },
      {
        "name": "size",
        "schema": "integer",
        "description": "The pagination page size.",
        "default": 50
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      }
    ]
  },
  {
    "url": "/companies/{company-uuid}/customer-insights",
    "method": "getInsights",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Customer Insight",
    "typeScriptTag": "customerInsight",
    "description": "Get customer insights",
    "parameters": [
      {
        "name": "companyUuid",
        "schema": "string",
        "required": true,
        "description": "Unique identifier of company",
        "example": "9e0a58e5-60b5-4c15-ba2e-77b1bed4977d"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      }
    ]
  },
  {
    "url": "/companies/{company-uuid}/customer-invoices/{invoice-uuid}",
    "method": "getSingleInvoice",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Customer Invoice",
    "typeScriptTag": "customerInvoice",
    "description": "Get customer invoice",
    "parameters": [
      {
        "name": "companyUuid",
        "schema": "string",
        "required": true,
        "description": "Unique identifier of company",
        "example": "9e0a58e5-60b5-4c15-ba2e-77b1bed4977d"
      },
      {
        "name": "invoiceUuid",
        "schema": "string",
        "required": true,
        "description": "Unique identifier of customer invoice",
        "example": "9e0a58e5-60b5-4c15-ba2e-77b1bed4977d"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      }
    ]
  },
  {
    "url": "/companies/{company-uuid}/customer-invoices/{invoice-uuid}/payments",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Customer Invoice Payment",
    "typeScriptTag": "customerInvoicePayment",
    "description": "Get payments",
    "parameters": [
      {
        "name": "companyUuid",
        "schema": "string",
        "required": true,
        "description": "Unique identifier of company",
        "example": "9e0a58e5-60b5-4c15-ba2e-77b1bed4977d"
      },
      {
        "name": "invoiceUuid",
        "schema": "string",
        "required": true,
        "description": "Unique identifier of customer invoice",
        "example": "9e0a58e5-60b5-4c15-ba2e-77b1bed4977d"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      }
    ]
  },
  {
    "url": "/companies/{company-uuid}/supplier-invoices",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Supplier Invoice",
    "typeScriptTag": "supplierInvoice",
    "description": "Get supplier invoices",
    "parameters": [
      {
        "name": "companyUuid",
        "schema": "string",
        "required": true,
        "description": "Unique identifier of company",
        "example": "9e0a58e5-60b5-4c15-ba2e-77b1bed4977d"
      },
      {
        "name": "search",
        "schema": "string",
        "description": "Search for supplier invoices by `invoice_number` or by its supplier's `name`."
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "The paginated page number.",
        "default": 1
      },
      {
        "name": "size",
        "schema": "integer",
        "description": "The pagination page size.",
        "default": 50
      },
      {
        "name": "fromDate",
        "schema": "string",
        "required": false,
        "description": "Filter on issueDate",
        "example": "2021-12-31"
      },
      {
        "name": "toDate",
        "schema": "string",
        "required": false,
        "description": "Filter on issueDate",
        "example": "2021-12-31"
      },
      {
        "name": "sortedBy",
        "schema": "string",
        "description": "Comma-separated list of columns to sort by. This parameter is required if `order` has a value. Available options:\n  - uuid,\n  - externalId,\n  - invoiceNumber,\n  - amount.amount,\n  - amount.currency,\n  - issueDate,\n  - dueDate,\n  - balance.amount,\n  - balance.currency,\n  - paidInFullDate,\n  - supplier.name\n",
        "example": "amount, invoiceNumber"
      },
      {
        "name": "order",
        "schema": "string",
        "description": "Comma-separated list of sorting orders corresponding to the columns in `sortedBy`.\nUse 'asc' for ascending and 'desc' for descending. This parameter is required if `sortedBy` has a value.\n",
        "example": "desc, asc"
      },
      {
        "name": "createdAt",
        "schema": "string",
        "required": false,
        "description": "Filter on createdAt",
        "example": "2022-12-31"
      },
      {
        "name": "updatedAt",
        "schema": "string",
        "required": false,
        "description": "Filter on updatedAt",
        "example": "2022-12-31"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      }
    ]
  },
  {
    "url": "/companies/{company-uuid}/supplier-insights",
    "method": "getInsights",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Supplier Insight",
    "typeScriptTag": "supplierInsight",
    "description": "Get supplier insights",
    "parameters": [
      {
        "name": "companyUuid",
        "schema": "string",
        "required": true,
        "description": "Unique identifier of company",
        "example": "9e0a58e5-60b5-4c15-ba2e-77b1bed4977d"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      }
    ]
  },
  {
    "url": "/companies/{company-uuid}/supplier-invoices/{supplier-invoice-uuid}/payments",
    "method": "listPayments",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Supplier Invoice Payment",
    "typeScriptTag": "supplierInvoicePayment",
    "description": "Get payments",
    "parameters": [
      {
        "name": "companyUuid",
        "schema": "string",
        "required": true,
        "description": "Unique identifier of company",
        "example": "9e0a58e5-60b5-4c15-ba2e-77b1bed4977d"
      },
      {
        "name": "supplierInvoiceUuid",
        "schema": "string",
        "required": true,
        "description": "Unique identifier of supplier invoice",
        "example": "9e0a58e5-60b5-4c15-ba2e-77b1bed4977d"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      }
    ]
  },
  {
    "url": "/companies/{company-uuid}/connections",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Connection",
    "typeScriptTag": "connection",
    "description": "Get connections",
    "parameters": [
      {
        "name": "companyUuid",
        "schema": "string",
        "required": true,
        "description": "Unique identifier of company",
        "example": "9e0a58e5-60b5-4c15-ba2e-77b1bed4977d"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      }
    ]
  },
  {
    "url": "/companies/{company-uuid}/connections",
    "method": "createNew",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Connection",
    "typeScriptTag": "connection",
    "description": "Create connection",
    "parameters": [
      {
        "name": "companyUuid",
        "schema": "string",
        "required": true,
        "description": "Unique identifier of company",
        "example": "9e0a58e5-60b5-4c15-ba2e-77b1bed4977d"
      },
      {
        "name": "integrationKey",
        "schema": "string",
        "description": "",
        "example": "FORTNOX"
      },
      {
        "name": "redirectUrl",
        "schema": "string",
        "description": "",
        "example": "https://www.monto.ai"
      },
      {
        "name": "fields",
        "schema": "array",
        "description": "",
        "example": []
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      },
      {
        "statusCode": "422",
        "description": "Unprocessable Entity"
      }
    ]
  },
  {
    "url": "/companies/{company-uuid}/connections/{connection-uuid}",
    "method": "updateByUuid",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Connection",
    "typeScriptTag": "connection",
    "description": "Update connection",
    "parameters": [
      {
        "name": "companyUuid",
        "schema": "string",
        "required": true,
        "description": "Unique identifier of company",
        "example": "9e0a58e5-60b5-4c15-ba2e-77b1bed4977d"
      },
      {
        "name": "connectionUuid",
        "schema": "string",
        "required": true,
        "description": "Unique identifier of connection.",
        "example": "9e0a58e5-60b5-4c15-ba2e-77b1bed4977d"
      },
      {
        "name": "status",
        "schema": "string",
        "description": "",
        "example": "DISABLED_MANUALLY"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      },
      {
        "statusCode": "422",
        "description": "Unprocessable Entity"
      }
    ]
  },
  {
    "url": "/companies/{company-uuid}/fiscal-years",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Fiscal Year",
    "typeScriptTag": "fiscalYear",
    "description": "Get fiscal years",
    "parameters": [
      {
        "name": "companyUuid",
        "schema": "string",
        "required": true,
        "description": "Unique identifier of company",
        "example": "9e0a58e5-60b5-4c15-ba2e-77b1bed4977d"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      }
    ]
  },
  {
    "url": "/companies/{company-uuid}/journals",
    "method": "listEntries",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Journal",
    "typeScriptTag": "journal",
    "description": "Get journal entries",
    "parameters": [
      {
        "name": "companyUuid",
        "schema": "string",
        "required": true,
        "description": "Unique identifier of company",
        "example": "9e0a58e5-60b5-4c15-ba2e-77b1bed4977d"
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "The paginated page number.",
        "default": 1
      },
      {
        "name": "size",
        "schema": "integer",
        "description": "The pagination page size.",
        "default": 50
      },
      {
        "name": "fromDate",
        "schema": "string",
        "required": false,
        "description": "Filter from specified Journal date",
        "example": "2021-12-31"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      }
    ]
  },
  {
    "url": "/companies/{company-uuid}/journals/{journal-uuid}",
    "method": "getEntryByUuid",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Journal",
    "typeScriptTag": "journal",
    "description": "Get journal entry",
    "parameters": [
      {
        "name": "companyUuid",
        "schema": "string",
        "required": true,
        "description": "Unique identifier of company",
        "example": "9e0a58e5-60b5-4c15-ba2e-77b1bed4977d"
      },
      {
        "name": "journalUuid",
        "schema": "string",
        "required": true,
        "description": "Unique identifier of journal",
        "example": "9e0a58e5-60b5-4c15-ba2e-77b1bed4977d"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      }
    ]
  },
  {
    "url": "/companies/{company-uuid}/consistencies",
    "method": "getDates",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Consistency",
    "typeScriptTag": "consistency",
    "description": "Get consistency dates",
    "parameters": [
      {
        "name": "companyUuid",
        "schema": "string",
        "required": true,
        "description": "Unique identifier of a company",
        "example": "9e0a58e5-60b5-4c15-ba2e-77b1bed4977d"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      }
    ]
  },
  {
    "url": "/companies/{company-uuid}/reliabilities",
    "method": "getDates",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Reliability",
    "typeScriptTag": "reliability",
    "description": "Get reliability dates",
    "parameters": [
      {
        "name": "companyUuid",
        "schema": "string",
        "required": true,
        "description": "Unique identifier of a company",
        "example": "9e0a58e5-60b5-4c15-ba2e-77b1bed4977d"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      }
    ]
  },
  {
    "url": "/companies/{company-uuid}/liquidities",
    "method": "getForecasts",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Liquidity",
    "typeScriptTag": "liquidity",
    "description": "Get liquidity forecasts (alpha version)",
    "parameters": [
      {
        "name": "companyUuid",
        "schema": "string",
        "required": true,
        "description": "Unique identifier of a company",
        "example": "9e0a58e5-60b5-4c15-ba2e-77b1bed4977d"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      }
    ]
  },
  {
    "url": "/companies/{company-uuid}/accounts",
    "method": "listAccounts",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Account",
    "typeScriptTag": "account",
    "description": "Get accounts",
    "parameters": [
      {
        "name": "companyUuid",
        "schema": "string",
        "required": true,
        "description": "Unique identifier of company",
        "example": "9e0a58e5-60b5-4c15-ba2e-77b1bed4977d"
      },
      {
        "name": "accounts",
        "schema": "string",
        "required": true,
        "description": "A text explaining which account(https://monto.redoc.ly/ to be included. This can either be a range of accounts (https://monto.redoc.ly/ or a single account (https://monto.redoc.ly/.",
        "example": "1500-1599,1667,1200,1299"
      },
      {
        "name": "fromDate",
        "schema": "string",
        "required": false,
        "description": "Starting date",
        "example": "2021-12-31",
        "default": "Default fromDate is 36 months back"
      },
      {
        "name": "toDate",
        "schema": "string",
        "required": false,
        "description": "ending date",
        "example": "2021-12-31"
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "The paginated page number.",
        "default": 1
      },
      {
        "name": "size",
        "schema": "integer",
        "description": "The pagination page size.",
        "default": 50
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      },
      {
        "statusCode": "422",
        "description": "Unprocessable Entity"
      }
    ]
  },
  {
    "url": "/companies/{company-uuid}/account-charts",
    "method": "get",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Account chart",
    "typeScriptTag": "accountChart",
    "description": "Get account chart",
    "parameters": [
      {
        "name": "companyUuid",
        "schema": "string",
        "required": true,
        "description": "Unique identifier of company",
        "example": "9e0a58e5-60b5-4c15-ba2e-77b1bed4977d"
      },
      {
        "name": "search",
        "schema": "string",
        "required": false,
        "description": "Search for an account by either its name or number.",
        "example": "Patent"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      }
    ]
  },
  {
    "url": "/companies/{company-uuid}/account-bundles",
    "method": "getBundles",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Account",
    "typeScriptTag": "account",
    "description": "Get account bundles",
    "parameters": [
      {
        "name": "companyUuid",
        "schema": "string",
        "required": true,
        "description": "Unique identifier of company",
        "example": "9e0a58e5-60b5-4c15-ba2e-77b1bed4977d"
      },
      {
        "name": "accounts",
        "schema": "string",
        "required": true,
        "description": "A text explaining which account(https://monto.redoc.ly/ to be included. This can either be a range of accounts (https://monto.redoc.ly/ or a single account (https://monto.redoc.ly/.",
        "example": "1500-1599,1667,1200-1299"
      },
      {
        "name": "fromDate",
        "schema": "string",
        "required": false,
        "description": "Starting date",
        "example": "2021-12-31"
      },
      {
        "name": "toDate",
        "schema": "string",
        "required": false,
        "description": "ending date",
        "example": "2021-12-31"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      },
      {
        "statusCode": "422",
        "description": "Unprocessable Entity"
      }
    ]
  },
  {
    "url": "/companies/{company-uuid}/metrics",
    "method": "getCompanyMetrics",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Metrics",
    "typeScriptTag": "metrics",
    "description": "Get metrics",
    "parameters": [
      {
        "name": "companyUuid",
        "schema": "string",
        "required": true,
        "description": "Unique identifier of company",
        "example": "9e0a58e5-60b5-4c15-ba2e-77b1bed4977d"
      },
      {
        "name": "fromDate",
        "schema": "string",
        "required": false,
        "description": "Starting date",
        "example": "2021-12-31"
      },
      {
        "name": "toDate",
        "schema": "string",
        "required": false,
        "description": "ending date",
        "example": "2021-12-31"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      },
      {
        "statusCode": "422",
        "description": "Unprocessable Entity"
      }
    ]
  },
  {
    "url": "/companies/{company-uuid}/account-transactions",
    "method": "listForCompany",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Account Transaction",
    "typeScriptTag": "accountTransaction",
    "description": "Get account transactions",
    "parameters": [
      {
        "name": "companyUuid",
        "schema": "string",
        "required": true,
        "description": "Unique identifier of company",
        "example": "9e0a58e5-60b5-4c15-ba2e-77b1bed4977d"
      },
      {
        "name": "accounts",
        "schema": "string",
        "description": "A text explaining which account(https://monto.redoc.ly/ to be included",
        "example": "1500-1599,1667,1200-1299"
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "The paginated page number.",
        "default": 1
      },
      {
        "name": "size",
        "schema": "integer",
        "description": "The pagination page size.",
        "default": 50
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      }
    ]
  },
  {
    "url": "/companies/{company-uuid}/income-statements",
    "method": "getBundledResults",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Income Statement",
    "typeScriptTag": "incomeStatement",
    "description": "Get income statements",
    "parameters": [
      {
        "name": "companyUuid",
        "schema": "string",
        "required": true,
        "description": "Unique identifier of company",
        "example": "9e0a58e5-60b5-4c15-ba2e-77b1bed4977d"
      },
      {
        "name": "resultType",
        "schema": "string",
        "description": "**Monthly results** for the latest 36 months or **aggregated rolling** results per 12 months.\n",
        "default": "MONTHLY36"
      },
      {
        "name": "fromDate",
        "schema": "string",
        "required": false,
        "description": "Starting date",
        "example": "2021-12-31"
      },
      {
        "name": "toDate",
        "schema": "string",
        "required": false,
        "description": "ending date",
        "example": "2021-12-31"
      },
      {
        "name": "classic",
        "schema": "boolean",
        "required": false,
        "description": "A classic income statement will not include the following account groups: interestToCreditInstitutions, otherFinancialExpenses and financialIncome",
        "example": "true"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      },
      {
        "statusCode": "422",
        "description": "Unprocessable Entity"
      }
    ]
  },
  {
    "url": "/companies/{company-uuid}/income-statements/pdf",
    "method": "getPdf",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Income Statement",
    "typeScriptTag": "incomeStatement",
    "description": "Get income statements PDF",
    "parameters": [
      {
        "name": "companyUuid",
        "schema": "string",
        "required": true,
        "description": "Unique identifier of company",
        "example": "9e0a58e5-60b5-4c15-ba2e-77b1bed4977d"
      },
      {
        "name": "fromDate",
        "schema": "string",
        "required": false,
        "description": "Starting date",
        "example": "2021-12-31"
      },
      {
        "name": "toDate",
        "schema": "string",
        "required": false,
        "description": "Ending date",
        "example": "2021-12-31"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      },
      {
        "statusCode": "422",
        "description": "Unprocessable Entity"
      }
    ]
  },
  {
    "url": "/companies/{company-uuid}/balance-sheets",
    "method": "getBundledAccountBalances",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Balance Sheet",
    "typeScriptTag": "balanceSheet",
    "description": "Get balance sheets",
    "parameters": [
      {
        "name": "companyUuid",
        "schema": "string",
        "required": true,
        "description": "Unique identifier of company",
        "example": "9e0a58e5-60b5-4c15-ba2e-77b1bed4977d"
      },
      {
        "name": "fromDate",
        "schema": "string",
        "required": false,
        "description": "Starting date",
        "example": "2021-12-31"
      },
      {
        "name": "toDate",
        "schema": "string",
        "required": false,
        "description": "ending date",
        "example": "2021-12-31"
      },
      {
        "name": "classic",
        "schema": "boolean",
        "required": false,
        "description": "A classic balance sheet will not include the following account groups: longTermLiabilitiesToCreditInstitutions, otherLongTermLiabilities, accountPayables, totalLiabilities",
        "example": "true"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      }
    ]
  },
  {
    "url": "/companies/{company-uuid}/balance-sheets/pdf",
    "method": "getPdf",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Balance Sheet",
    "typeScriptTag": "balanceSheet",
    "description": "Get balance sheets PDF",
    "parameters": [
      {
        "name": "companyUuid",
        "schema": "string",
        "required": true,
        "description": "Unique identifier of company",
        "example": "9e0a58e5-60b5-4c15-ba2e-77b1bed4977d"
      },
      {
        "name": "fromDate",
        "schema": "string",
        "required": false,
        "description": "Starting date",
        "example": "2021-12-31"
      },
      {
        "name": "toDate",
        "schema": "string",
        "required": false,
        "description": "Ending date",
        "example": "2021-12-31"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      },
      {
        "statusCode": "422",
        "description": "Unprocessable Entity"
      }
    ]
  },
  {
    "url": "/companies/{company-uuid}/messages",
    "method": "listForCompany",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Message",
    "typeScriptTag": "message",
    "description": "Get messages",
    "parameters": [
      {
        "name": "companyUuid",
        "schema": "string",
        "required": true,
        "description": "Unique identifier of company",
        "example": "9e0a58e5-60b5-4c15-ba2e-77b1bed4977d"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      }
    ]
  }
]
    }
      language="TypeScript"
      apiTitle="Monto API"
      apiBaseUrl="https://api.monto.ai"
      apiVersion="v1"
      endpoints={34}
      sdkMethods={38}
      schemas={64}
      parameters={105}
      difficulty="Easy"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/monto/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/monto/openapi.yaml"
      developerDocumentation="monto.redoc.ly/"
    />
  );
}
  