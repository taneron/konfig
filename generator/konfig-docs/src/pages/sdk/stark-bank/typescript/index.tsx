import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function StarkBankTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="stark-bank-typescript-sdk"
      metaDescription={`Nós somos um challenger bank focado em enterprise no Brasil.

Tudo que fazemos é para impulsionar empresas e empreendedores a desafiarem o status quo e mudarem o Brasil para melhor.`}
      company="Stark Bank"
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/stark-bank/logo.png"
      companyKebabCase="stark-bank"
      clientNameCamelCase="starkBank"
      homepage="starkbank.com/en"
      lastUpdated={new Date("2024-03-28T20:59:16.525Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/stark-bank/favicon.png"
      contactUrl="https://starkbank.com"
      contactEmail="help@starkbank.com"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/stark-bank/imagePreview.png"
      GettingStarted={GettingStarted}
      FirstRequest={FirstRequest}
      categories={["fintech","banking","boletos","open_banking"]}
      methods={[
  {
    "url": "/transaction",
    "method": "listTransactions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "transaction",
    "typeScriptTag": "transaction",
    "description": "List transactions",
    "parameters": [
      {
        "name": "cursor",
        "schema": "string",
        "required": false,
        "description": "String used to get the next batch of results."
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Number of results per cursor. Max = 100."
      },
      {
        "name": "fields",
        "schema": "array",
        "required": false,
        "description": "List of strings to filter response JSON keys."
      },
      {
        "name": "after",
        "schema": "string",
        "required": false,
        "description": "Filter entities created after this date."
      },
      {
        "name": "before",
        "schema": "string",
        "required": false,
        "description": "Filter entities created before this date."
      },
      {
        "name": "tags",
        "schema": "array",
        "required": false,
        "description": "Filter entities that contain the specified tags."
      },
      {
        "name": "externalIds",
        "schema": "array",
        "required": false,
        "description": "List of strings to get specific entities by externalIds."
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
      },
      {
        "statusCode": "default",
        "description": "Unexpected error"
      }
    ]
  },
  {
    "url": "/transaction",
    "method": "createNewTransaction",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "transaction",
    "typeScriptTag": "transaction",
    "description": "Create transactions",
    "parameters": [
      {
        "name": "transactions",
        "schema": "array",
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
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": "Unexpected error"
      }
    ]
  },
  {
    "url": "/transaction/{transactionId}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "transaction",
    "typeScriptTag": "transaction",
    "description": "Get transaction by ID",
    "parameters": [
      {
        "name": "transactionId",
        "schema": "string",
        "required": true,
        "description": "Transaction unique identifier.",
        "example": "TRANSACTIONID"
      },
      {
        "name": "fields",
        "schema": "array",
        "required": false,
        "description": "List of strings to filter response JSON keys."
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
      },
      {
        "statusCode": "default",
        "description": "Unexpected error"
      }
    ]
  },
  {
    "url": "/balance",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "balance",
    "typeScriptTag": "balance",
    "description": "List balances",
    "parameters": [],
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
      },
      {
        "statusCode": "default",
        "description": "Unexpected error"
      }
    ]
  },
  {
    "url": "/transfer",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "transfer",
    "typeScriptTag": "transfer",
    "description": "List transfers",
    "parameters": [
      {
        "name": "cursor",
        "schema": "string",
        "required": false,
        "description": "String used to get the next batch of results."
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Number of results per cursor. Max = 100."
      },
      {
        "name": "fields",
        "schema": "array",
        "required": false,
        "description": "List of strings to filter response JSON keys."
      },
      {
        "name": "after",
        "schema": "string",
        "required": false,
        "description": "Filter entities created after this date."
      },
      {
        "name": "before",
        "schema": "string",
        "required": false,
        "description": "Filter entities created before this date."
      },
      {
        "name": "transactionIds",
        "schema": "array",
        "required": false,
        "description": "Filter entities that are linked to the specified transactions."
      },
      {
        "name": "status",
        "schema": "string",
        "required": false,
        "description": "Filter boletos by the specified status."
      },
      {
        "name": "taxId",
        "schema": "string",
        "required": false,
        "description": "Filter transfers sent to the specified taxId."
      },
      {
        "name": "sort",
        "schema": "string",
        "required": false,
        "description": "Sort entities by the specified sort order. Options are \"-created\", \"created\", \"-updated\", \"updated\"."
      },
      {
        "name": "tags",
        "schema": "array",
        "required": false,
        "description": "Filter entities that contain the specified tags."
      },
      {
        "name": "ids",
        "schema": "array",
        "required": false,
        "description": "List of strings to get specific entities by ids."
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
      },
      {
        "statusCode": "default",
        "description": "Unexpected error"
      }
    ]
  },
  {
    "url": "/transfer",
    "method": "createNewTransfer",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "transfer",
    "typeScriptTag": "transfer",
    "description": "Create transfers",
    "parameters": [
      {
        "name": "transfers",
        "schema": "array",
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
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": "Unexpected error"
      }
    ]
  },
  {
    "url": "/transfer/{transferId}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "transfer",
    "typeScriptTag": "transfer",
    "description": "Get transfer by ID",
    "parameters": [
      {
        "name": "transferId",
        "schema": "string",
        "required": true,
        "description": "Transfer unique identifier.",
        "example": "TRANSFERID"
      },
      {
        "name": "fields",
        "schema": "array",
        "required": false,
        "description": "List of strings to filter response JSON keys."
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
      },
      {
        "statusCode": "default",
        "description": "Unexpected error"
      }
    ]
  },
  {
    "url": "/transfer/{transferId}/pdf",
    "method": "getPdfReceiptById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "transfer",
    "typeScriptTag": "transfer",
    "description": "Get transfer PDF receipt by ID",
    "parameters": [
      {
        "name": "transferId",
        "schema": "string",
        "required": true,
        "description": "Transfer unique identifier.",
        "example": "TRANSFERID"
      },
      {
        "name": "fields",
        "schema": "array",
        "required": false,
        "description": "List of strings to filter response JSON keys."
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
      },
      {
        "statusCode": "default",
        "description": "Unexpected error"
      }
    ]
  },
  {
    "url": "/transfer/log",
    "method": "listLogs",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "transfer",
    "typeScriptTag": "transfer",
    "description": "List transfer logs",
    "parameters": [
      {
        "name": "cursor",
        "schema": "string",
        "required": false,
        "description": "String used to get the next batch of results."
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Number of results per cursor. Max = 100."
      },
      {
        "name": "fields",
        "schema": "array",
        "required": false,
        "description": "List of strings to filter response JSON keys."
      },
      {
        "name": "after",
        "schema": "string",
        "required": false,
        "description": "Filter entities created after this date."
      },
      {
        "name": "before",
        "schema": "string",
        "required": false,
        "description": "Filter entities created before this date."
      },
      {
        "name": "types",
        "schema": "array",
        "required": false,
        "description": "Filter logs by log types."
      },
      {
        "name": "transferIds",
        "schema": "array",
        "required": false,
        "description": "Array of transfer ids that are linked to the desired logs."
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
      },
      {
        "statusCode": "default",
        "description": "Unexpected error"
      }
    ]
  },
  {
    "url": "/transfer/log/{logId}",
    "method": "getLogById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "transfer",
    "typeScriptTag": "transfer",
    "description": "Get transfer log by ID",
    "parameters": [
      {
        "name": "logId",
        "schema": "string",
        "required": true,
        "description": "Log unique identifier.",
        "example": "LOGID"
      },
      {
        "name": "fields",
        "schema": "array",
        "required": false,
        "description": "List of strings to filter response JSON keys."
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
      },
      {
        "statusCode": "default",
        "description": "Unexpected error"
      }
    ]
  },
  {
    "url": "/invoice",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "invoice",
    "typeScriptTag": "invoice",
    "description": "List invoices",
    "parameters": [
      {
        "name": "cursor",
        "schema": "string",
        "required": false,
        "description": "String used to get the next batch of results."
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Number of results per cursor. Max = 100."
      },
      {
        "name": "fields",
        "schema": "array",
        "required": false,
        "description": "List of strings to filter response JSON keys."
      },
      {
        "name": "after",
        "schema": "string",
        "required": false,
        "description": "Filter entities created after this date."
      },
      {
        "name": "before",
        "schema": "string",
        "required": false,
        "description": "Filter entities created before this date."
      },
      {
        "name": "status",
        "schema": "string",
        "required": false,
        "description": "Filter invoices by the specified status."
      },
      {
        "name": "tags",
        "schema": "array",
        "required": false,
        "description": "Filter entities that contain the specified tags."
      },
      {
        "name": "ids",
        "schema": "array",
        "required": false,
        "description": "List of strings to get specific entities by ids."
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
      },
      {
        "statusCode": "default",
        "description": "Unexpected error"
      }
    ]
  },
  {
    "url": "/invoice",
    "method": "createNewInvoice",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "invoice",
    "typeScriptTag": "invoice",
    "description": "Create invoices",
    "parameters": [
      {
        "name": "invoices",
        "schema": "array",
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
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": "Unexpected error"
      }
    ]
  },
  {
    "url": "/invoice/{invoiceId}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "invoice",
    "typeScriptTag": "invoice",
    "description": "Get invoice by ID",
    "parameters": [
      {
        "name": "invoiceId",
        "schema": "string",
        "required": true,
        "description": "Invoice unique identifier.",
        "example": "INVOICEID"
      },
      {
        "name": "fields",
        "schema": "array",
        "required": false,
        "description": "List of strings to filter response JSON keys."
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
      },
      {
        "statusCode": "default",
        "description": "Unexpected error"
      }
    ]
  },
  {
    "url": "/invoice/{invoiceId}",
    "method": "updateRefundById",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "invoice",
    "typeScriptTag": "invoice",
    "description": "Update or refund an invoice by ID",
    "parameters": [
      {
        "name": "invoiceId",
        "schema": "string",
        "required": true,
        "description": "Invoice unique identifier.",
        "example": "INVOICEID"
      },
      {
        "name": "status",
        "schema": "string",
        "description": ""
      },
      {
        "name": "amount",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "due",
        "schema": "string",
        "description": ""
      },
      {
        "name": "expiration",
        "schema": "integer",
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
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": "Unexpected error"
      }
    ]
  },
  {
    "url": "/invoice/{invoiceId}/pdf",
    "method": "generatePdfById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "invoice",
    "typeScriptTag": "invoice",
    "description": "Get invoice PDF by ID",
    "parameters": [
      {
        "name": "invoiceId",
        "schema": "string",
        "required": true,
        "description": "Invoice unique identifier.",
        "example": "INVOICEID"
      },
      {
        "name": "fields",
        "schema": "array",
        "required": false,
        "description": "List of strings to filter response JSON keys."
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
      },
      {
        "statusCode": "default",
        "description": "Unexpected error"
      }
    ]
  },
  {
    "url": "/invoice/{invoiceId}/qrcode",
    "method": "getQrCodeById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "invoice",
    "typeScriptTag": "invoice",
    "description": "Get invoice QR Code by ID",
    "parameters": [
      {
        "name": "invoiceId",
        "schema": "string",
        "required": true,
        "description": "Invoice unique identifier.",
        "example": "INVOICEID"
      },
      {
        "name": "fields",
        "schema": "array",
        "required": false,
        "description": "List of strings to filter response JSON keys."
      },
      {
        "name": "format",
        "schema": "string",
        "required": false,
        "description": "output file format"
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
      },
      {
        "statusCode": "default",
        "description": "Unexpected error"
      }
    ]
  },
  {
    "url": "/invoice/log",
    "method": "listLogs",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "invoice",
    "typeScriptTag": "invoice",
    "description": "List invoice logs",
    "parameters": [
      {
        "name": "cursor",
        "schema": "string",
        "required": false,
        "description": "String used to get the next batch of results."
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Number of results per cursor. Max = 100."
      },
      {
        "name": "fields",
        "schema": "array",
        "required": false,
        "description": "List of strings to filter response JSON keys."
      },
      {
        "name": "after",
        "schema": "string",
        "required": false,
        "description": "Filter entities created after this date."
      },
      {
        "name": "before",
        "schema": "string",
        "required": false,
        "description": "Filter entities created before this date."
      },
      {
        "name": "types",
        "schema": "array",
        "required": false,
        "description": "Filter logs by log types."
      },
      {
        "name": "invoiceIds",
        "schema": "array",
        "required": false,
        "description": "Array of invoice ids that are linked to the desired logs."
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
      },
      {
        "statusCode": "default",
        "description": "Unexpected error"
      }
    ]
  },
  {
    "url": "/invoice/log/{logId}",
    "method": "getByIdLog",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "invoice",
    "typeScriptTag": "invoice",
    "description": "Get invoice log by ID",
    "parameters": [
      {
        "name": "logId",
        "schema": "string",
        "required": true,
        "description": "Log unique identifier.",
        "example": "LOGID"
      },
      {
        "name": "fields",
        "schema": "array",
        "required": false,
        "description": "List of strings to filter response JSON keys."
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
      },
      {
        "statusCode": "default",
        "description": "Unexpected error"
      }
    ]
  },
  {
    "url": "/deposit",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "deposit",
    "typeScriptTag": "deposit",
    "description": "List deposits",
    "parameters": [
      {
        "name": "cursor",
        "schema": "string",
        "required": false,
        "description": "String used to get the next batch of results."
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Number of results per cursor. Max = 100."
      },
      {
        "name": "fields",
        "schema": "array",
        "required": false,
        "description": "List of strings to filter response JSON keys."
      },
      {
        "name": "after",
        "schema": "string",
        "required": false,
        "description": "Filter entities created after this date."
      },
      {
        "name": "before",
        "schema": "string",
        "required": false,
        "description": "Filter entities created before this date."
      },
      {
        "name": "status",
        "schema": "string",
        "required": false,
        "description": "Filter deposits by the specified status."
      },
      {
        "name": "tags",
        "schema": "array",
        "required": false,
        "description": "Filter entities that contain the specified tags."
      },
      {
        "name": "ids",
        "schema": "array",
        "required": false,
        "description": "List of strings to get specific entities by ids."
      },
      {
        "name": "sort",
        "schema": "string",
        "required": false,
        "description": "Sort entities by the specified sort order. Options are \"-created\" and \"created\"."
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
      },
      {
        "statusCode": "default",
        "description": "Unexpected error"
      }
    ]
  },
  {
    "url": "/deposit/{depositId}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "deposit",
    "typeScriptTag": "deposit",
    "description": "Get deposit by ID",
    "parameters": [
      {
        "name": "depositId",
        "schema": "string",
        "required": true,
        "description": "Deposit unique identifier.",
        "example": "DEPOSITID"
      },
      {
        "name": "fields",
        "schema": "array",
        "required": false,
        "description": "List of strings to filter response JSON keys."
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
      },
      {
        "statusCode": "default",
        "description": "Unexpected error"
      }
    ]
  },
  {
    "url": "/deposit/log",
    "method": "listLogs",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "deposit",
    "typeScriptTag": "deposit",
    "description": "List deposit logs",
    "parameters": [
      {
        "name": "cursor",
        "schema": "string",
        "required": false,
        "description": "String used to get the next batch of results."
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Number of results per cursor. Max = 100."
      },
      {
        "name": "fields",
        "schema": "array",
        "required": false,
        "description": "List of strings to filter response JSON keys."
      },
      {
        "name": "after",
        "schema": "string",
        "required": false,
        "description": "Filter entities created after this date."
      },
      {
        "name": "before",
        "schema": "string",
        "required": false,
        "description": "Filter entities created before this date."
      },
      {
        "name": "types",
        "schema": "array",
        "required": false,
        "description": "Filter logs by log types."
      },
      {
        "name": "depositIds",
        "schema": "array",
        "required": false,
        "description": "Array of deposit ids that are linked to the desired logs."
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
      },
      {
        "statusCode": "default",
        "description": "Unexpected error"
      }
    ]
  },
  {
    "url": "/deposit/log/{logId}",
    "method": "getByIdLog",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "deposit",
    "typeScriptTag": "deposit",
    "description": "Get deposit log by ID",
    "parameters": [
      {
        "name": "logId",
        "schema": "string",
        "required": true,
        "description": "Log unique identifier.",
        "example": "LOGID"
      },
      {
        "name": "fields",
        "schema": "array",
        "required": false,
        "description": "List of strings to filter response JSON keys."
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
      },
      {
        "statusCode": "default",
        "description": "Unexpected error"
      }
    ]
  },
  {
    "url": "/boleto",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "boleto",
    "typeScriptTag": "boleto",
    "description": "List boletos",
    "parameters": [
      {
        "name": "cursor",
        "schema": "string",
        "required": false,
        "description": "String used to get the next batch of results."
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Number of results per cursor. Max = 100."
      },
      {
        "name": "fields",
        "schema": "array",
        "required": false,
        "description": "List of strings to filter response JSON keys."
      },
      {
        "name": "after",
        "schema": "string",
        "required": false,
        "description": "Filter entities created after this date."
      },
      {
        "name": "before",
        "schema": "string",
        "required": false,
        "description": "Filter entities created before this date."
      },
      {
        "name": "status",
        "schema": "string",
        "required": false,
        "description": "Filter boletos by the specified status."
      },
      {
        "name": "tags",
        "schema": "array",
        "required": false,
        "description": "Filter entities that contain the specified tags."
      },
      {
        "name": "ids",
        "schema": "array",
        "required": false,
        "description": "List of strings to get specific entities by ids."
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
      },
      {
        "statusCode": "default",
        "description": "Unexpected error"
      }
    ]
  },
  {
    "url": "/boleto",
    "method": "createBoleto",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "boleto",
    "typeScriptTag": "boleto",
    "description": "Create boletos",
    "parameters": [
      {
        "name": "boletos",
        "schema": "array",
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
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": "Unexpected error"
      }
    ]
  },
  {
    "url": "/boleto/{boletoId}",
    "method": "cancelById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "boleto",
    "typeScriptTag": "boleto",
    "description": "Cancel and delete a boleto by ID",
    "parameters": [
      {
        "name": "boletoId",
        "schema": "string",
        "required": true,
        "description": "Boleto unique identifier.",
        "example": "BOLETOID"
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
      },
      {
        "statusCode": "default",
        "description": "Unexpected error"
      }
    ]
  },
  {
    "url": "/boleto/{boletoId}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "boleto",
    "typeScriptTag": "boleto",
    "description": "Get boleto by ID",
    "parameters": [
      {
        "name": "boletoId",
        "schema": "string",
        "required": true,
        "description": "Boleto unique identifier.",
        "example": "BOLETOID"
      },
      {
        "name": "fields",
        "schema": "array",
        "required": false,
        "description": "List of strings to filter response JSON keys."
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
      },
      {
        "statusCode": "default",
        "description": "Unexpected error"
      }
    ]
  },
  {
    "url": "/boleto/{boletoId}/pdf",
    "method": "getPdfById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "boleto",
    "typeScriptTag": "boleto",
    "description": "Get boleto PDF by ID",
    "parameters": [
      {
        "name": "boletoId",
        "schema": "string",
        "required": true,
        "description": "Boleto unique identifier.",
        "example": "BOLETOID"
      },
      {
        "name": "fields",
        "schema": "array",
        "required": false,
        "description": "List of strings to filter response JSON keys."
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
      },
      {
        "statusCode": "default",
        "description": "Unexpected error"
      }
    ]
  },
  {
    "url": "/boleto/log",
    "method": "listLogs",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "boleto",
    "typeScriptTag": "boleto",
    "description": "List boleto logs",
    "parameters": [
      {
        "name": "cursor",
        "schema": "string",
        "required": false,
        "description": "String used to get the next batch of results."
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Number of results per cursor. Max = 100."
      },
      {
        "name": "fields",
        "schema": "array",
        "required": false,
        "description": "List of strings to filter response JSON keys."
      },
      {
        "name": "after",
        "schema": "string",
        "required": false,
        "description": "Filter entities created after this date."
      },
      {
        "name": "before",
        "schema": "string",
        "required": false,
        "description": "Filter entities created before this date."
      },
      {
        "name": "types",
        "schema": "array",
        "required": false,
        "description": "Filter logs by log types."
      },
      {
        "name": "boletoIds",
        "schema": "array",
        "required": false,
        "description": "Array of boleto ids that are linked to the desired logs."
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
      },
      {
        "statusCode": "default",
        "description": "Unexpected error"
      }
    ]
  },
  {
    "url": "/boleto/log/{logId}",
    "method": "getLogById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "boleto",
    "typeScriptTag": "boleto",
    "description": "Get boleto log by ID",
    "parameters": [
      {
        "name": "logId",
        "schema": "string",
        "required": true,
        "description": "Log unique identifier.",
        "example": "LOGID"
      },
      {
        "name": "fields",
        "schema": "array",
        "required": false,
        "description": "List of strings to filter response JSON keys."
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
      },
      {
        "statusCode": "default",
        "description": "Unexpected error"
      }
    ]
  },
  {
    "url": "/boleto-holmes",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "boletoHolmes",
    "typeScriptTag": "boletoHolmes",
    "description": "List boleto holmes",
    "parameters": [
      {
        "name": "cursor",
        "schema": "string",
        "required": false,
        "description": "String used to get the next batch of results."
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Number of results per cursor. Max = 100."
      },
      {
        "name": "fields",
        "schema": "array",
        "required": false,
        "description": "List of strings to filter response JSON keys."
      },
      {
        "name": "after",
        "schema": "string",
        "required": false,
        "description": "Filter entities created after this date."
      },
      {
        "name": "before",
        "schema": "string",
        "required": false,
        "description": "Filter entities created before this date."
      },
      {
        "name": "tags",
        "schema": "array",
        "required": false,
        "description": "Filter entities that contain the specified tags."
      },
      {
        "name": "ids",
        "schema": "array",
        "required": false,
        "description": "List of strings to get specific entities by ids."
      },
      {
        "name": "status",
        "schema": "string",
        "required": false,
        "description": "Filter holmes by the specified status."
      },
      {
        "name": "boletoId",
        "schema": "string",
        "required": false,
        "description": "Filter holmes by the specified boleto."
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
      },
      {
        "statusCode": "default",
        "description": "Unexpected error"
      }
    ]
  },
  {
    "url": "/boleto-holmes",
    "method": "createNewHolmes",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "boletoHolmes",
    "typeScriptTag": "boletoHolmes",
    "description": "Create boleto holmes",
    "parameters": [
      {
        "name": "holmes",
        "schema": "array",
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
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": "Unexpected error"
      }
    ]
  },
  {
    "url": "/boleto-holmes/{holmesId}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "boletoHolmes",
    "typeScriptTag": "boletoHolmes",
    "description": "Get boleto holmes by ID",
    "parameters": [
      {
        "name": "holmesId",
        "schema": "string",
        "required": true,
        "description": "Holmes unique identifier.",
        "example": "HOLMESID"
      },
      {
        "name": "fields",
        "schema": "array",
        "required": false,
        "description": "List of strings to filter response JSON keys."
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
      },
      {
        "statusCode": "default",
        "description": "Unexpected error"
      }
    ]
  },
  {
    "url": "/boleto-holmes/log",
    "method": "listLogs",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "boletoHolmes",
    "typeScriptTag": "boletoHolmes",
    "description": "List boleto holmes logs",
    "parameters": [
      {
        "name": "cursor",
        "schema": "string",
        "required": false,
        "description": "String used to get the next batch of results."
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Number of results per cursor. Max = 100."
      },
      {
        "name": "fields",
        "schema": "array",
        "required": false,
        "description": "List of strings to filter response JSON keys."
      },
      {
        "name": "after",
        "schema": "string",
        "required": false,
        "description": "Filter entities created after this date."
      },
      {
        "name": "before",
        "schema": "string",
        "required": false,
        "description": "Filter entities created before this date."
      },
      {
        "name": "types",
        "schema": "array",
        "required": false,
        "description": "Filter logs by log types."
      },
      {
        "name": "holmesIds",
        "schema": "array",
        "required": false,
        "description": "Array of holmes ids that are linked to the desired logs."
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
      },
      {
        "statusCode": "default",
        "description": "Unexpected error"
      }
    ]
  },
  {
    "url": "/boleto-holmes/log/{logId}",
    "method": "getLogById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "boletoHolmes",
    "typeScriptTag": "boletoHolmes",
    "description": "Get boleto holmes log by ID",
    "parameters": [
      {
        "name": "logId",
        "schema": "string",
        "required": true,
        "description": "Log unique identifier.",
        "example": "LOGID"
      },
      {
        "name": "fields",
        "schema": "array",
        "required": false,
        "description": "List of strings to filter response JSON keys."
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
      },
      {
        "statusCode": "default",
        "description": "Unexpected error"
      }
    ]
  },
  {
    "url": "/brcode-preview",
    "method": "processBeforeCreate",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "brcodePreview",
    "typeScriptTag": "brcodePreview",
    "description": "Process BR Codes before creating BrcodePayments",
    "parameters": [
      {
        "name": "fields",
        "schema": "array",
        "required": false,
        "description": "List of strings to filter response JSON keys."
      },
      {
        "name": "brcodes",
        "schema": "string",
        "required": false,
        "description": "List of BR Codes to be processed."
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
      },
      {
        "statusCode": "default",
        "description": "Unexpected error"
      }
    ]
  },
  {
    "url": "/brcode-payment",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "brcodePayment",
    "typeScriptTag": "brcodePayment",
    "description": "List BR Code payments",
    "parameters": [
      {
        "name": "cursor",
        "schema": "string",
        "required": false,
        "description": "String used to get the next batch of results."
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Number of results per cursor. Max = 100."
      },
      {
        "name": "fields",
        "schema": "array",
        "required": false,
        "description": "List of strings to filter response JSON keys."
      },
      {
        "name": "after",
        "schema": "string",
        "required": false,
        "description": "Filter entities created after this date."
      },
      {
        "name": "before",
        "schema": "string",
        "required": false,
        "description": "Filter entities created before this date."
      },
      {
        "name": "tags",
        "schema": "array",
        "required": false,
        "description": "Filter entities that contain the specified tags."
      },
      {
        "name": "ids",
        "schema": "array",
        "required": false,
        "description": "List of strings to get specific entities by ids."
      },
      {
        "name": "status",
        "schema": "string",
        "required": false,
        "description": "Filter payments by the specified status."
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
      },
      {
        "statusCode": "default",
        "description": "Unexpected error"
      }
    ]
  },
  {
    "url": "/brcode-payment",
    "method": "create",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "brcodePayment",
    "typeScriptTag": "brcodePayment",
    "description": "Create BR Code payments",
    "parameters": [
      {
        "name": "payments",
        "schema": "array",
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
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": "Unexpected error"
      }
    ]
  },
  {
    "url": "/brcode-payment/{paymentId}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "brcodePayment",
    "typeScriptTag": "brcodePayment",
    "description": "Get BR Code payment by ID",
    "parameters": [
      {
        "name": "paymentId",
        "schema": "string",
        "required": true,
        "description": "Payment unique identifier.",
        "example": "PAYMENTID"
      },
      {
        "name": "fields",
        "schema": "array",
        "required": false,
        "description": "List of strings to filter response JSON keys."
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
      },
      {
        "statusCode": "default",
        "description": "Unexpected error"
      }
    ]
  },
  {
    "url": "/brcode-payment/{paymentId}",
    "method": "updatePaymentById",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "brcodePayment",
    "typeScriptTag": "brcodePayment",
    "description": "Update a BR Code payment by ID",
    "parameters": [
      {
        "name": "paymentId",
        "schema": "string",
        "required": true,
        "description": "Payment unique identifier.",
        "example": "PAYMENTID"
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
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": "Unexpected error"
      }
    ]
  },
  {
    "url": "/brcode-payment/{paymentId}/pdf",
    "method": "getPdfReceiptByPaymentId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "brcodePayment",
    "typeScriptTag": "brcodePayment",
    "description": "Get BR Code payment PDF receipt by payment ID",
    "parameters": [
      {
        "name": "paymentId",
        "schema": "string",
        "required": true,
        "description": "Payment unique identifier.",
        "example": "PAYMENTID"
      },
      {
        "name": "fields",
        "schema": "array",
        "required": false,
        "description": "List of strings to filter response JSON keys."
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
      },
      {
        "statusCode": "default",
        "description": "Unexpected error"
      }
    ]
  },
  {
    "url": "/brcode-payment/log",
    "method": "getLogs",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "brcodePayment",
    "typeScriptTag": "brcodePayment",
    "description": "List BR Code payment logs",
    "parameters": [
      {
        "name": "cursor",
        "schema": "string",
        "required": false,
        "description": "String used to get the next batch of results."
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Number of results per cursor. Max = 100."
      },
      {
        "name": "fields",
        "schema": "array",
        "required": false,
        "description": "List of strings to filter response JSON keys."
      },
      {
        "name": "after",
        "schema": "string",
        "required": false,
        "description": "Filter entities created after this date."
      },
      {
        "name": "before",
        "schema": "string",
        "required": false,
        "description": "Filter entities created before this date."
      },
      {
        "name": "types",
        "schema": "array",
        "required": false,
        "description": "Filter logs by log types."
      },
      {
        "name": "paymentIds",
        "schema": "array",
        "required": false,
        "description": "Array of payment ids that are linked to the desired logs."
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
      },
      {
        "statusCode": "default",
        "description": "Unexpected error"
      }
    ]
  },
  {
    "url": "/brcode-payment/log/{logId}",
    "method": "getLogById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "brcodePayment",
    "typeScriptTag": "brcodePayment",
    "description": "Get BR Code payment log by ID",
    "parameters": [
      {
        "name": "logId",
        "schema": "string",
        "required": true,
        "description": "Log unique identifier.",
        "example": "LOGID"
      },
      {
        "name": "fields",
        "schema": "array",
        "required": false,
        "description": "List of strings to filter response JSON keys."
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
      },
      {
        "statusCode": "default",
        "description": "Unexpected error"
      }
    ]
  },
  {
    "url": "/boleto-payment",
    "method": "listPayments",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "boletoPayment",
    "typeScriptTag": "boletoPayment",
    "description": "List boleto payments",
    "parameters": [
      {
        "name": "cursor",
        "schema": "string",
        "required": false,
        "description": "String used to get the next batch of results."
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Number of results per cursor. Max = 100."
      },
      {
        "name": "fields",
        "schema": "array",
        "required": false,
        "description": "List of strings to filter response JSON keys."
      },
      {
        "name": "after",
        "schema": "string",
        "required": false,
        "description": "Filter entities created after this date."
      },
      {
        "name": "before",
        "schema": "string",
        "required": false,
        "description": "Filter entities created before this date."
      },
      {
        "name": "tags",
        "schema": "array",
        "required": false,
        "description": "Filter entities that contain the specified tags."
      },
      {
        "name": "ids",
        "schema": "array",
        "required": false,
        "description": "List of strings to get specific entities by ids."
      },
      {
        "name": "status",
        "schema": "string",
        "required": false,
        "description": "Filter payments by the specified status."
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
      },
      {
        "statusCode": "default",
        "description": "Unexpected error"
      }
    ]
  },
  {
    "url": "/boleto-payment",
    "method": "createPayment",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "boletoPayment",
    "typeScriptTag": "boletoPayment",
    "description": "Create boleto payments",
    "parameters": [
      {
        "name": "payments",
        "schema": "array",
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
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": "Unexpected error"
      }
    ]
  },
  {
    "url": "/boleto-payment/{paymentId}",
    "method": "cancelById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "boletoPayment",
    "typeScriptTag": "boletoPayment",
    "description": "Cancel and delete a boleto payment by ID",
    "parameters": [
      {
        "name": "paymentId",
        "schema": "string",
        "required": true,
        "description": "Payment unique identifier.",
        "example": "PAYMENTID"
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
      },
      {
        "statusCode": "default",
        "description": "Unexpected error"
      }
    ]
  },
  {
    "url": "/boleto-payment/{paymentId}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "boletoPayment",
    "typeScriptTag": "boletoPayment",
    "description": "Get boleto payment by ID",
    "parameters": [
      {
        "name": "paymentId",
        "schema": "string",
        "required": true,
        "description": "Payment unique identifier.",
        "example": "PAYMENTID"
      },
      {
        "name": "fields",
        "schema": "array",
        "required": false,
        "description": "List of strings to filter response JSON keys."
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
      },
      {
        "statusCode": "default",
        "description": "Unexpected error"
      }
    ]
  },
  {
    "url": "/boleto-payment/{paymentId}/pdf",
    "method": "getPdfReceiptByPaymentId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "boletoPayment",
    "typeScriptTag": "boletoPayment",
    "description": "Get boleto payment PDF receipt by payment ID",
    "parameters": [
      {
        "name": "paymentId",
        "schema": "string",
        "required": true,
        "description": "Payment unique identifier.",
        "example": "PAYMENTID"
      },
      {
        "name": "fields",
        "schema": "array",
        "required": false,
        "description": "List of strings to filter response JSON keys."
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
      },
      {
        "statusCode": "default",
        "description": "Unexpected error"
      }
    ]
  },
  {
    "url": "/boleto-payment/log",
    "method": "getLogs",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "boletoPayment",
    "typeScriptTag": "boletoPayment",
    "description": "List boleto payment logs",
    "parameters": [
      {
        "name": "cursor",
        "schema": "string",
        "required": false,
        "description": "String used to get the next batch of results."
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Number of results per cursor. Max = 100."
      },
      {
        "name": "fields",
        "schema": "array",
        "required": false,
        "description": "List of strings to filter response JSON keys."
      },
      {
        "name": "after",
        "schema": "string",
        "required": false,
        "description": "Filter entities created after this date."
      },
      {
        "name": "before",
        "schema": "string",
        "required": false,
        "description": "Filter entities created before this date."
      },
      {
        "name": "types",
        "schema": "array",
        "required": false,
        "description": "Filter logs by log types."
      },
      {
        "name": "paymentIds",
        "schema": "array",
        "required": false,
        "description": "Array of payment ids that are linked to the desired logs."
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
      },
      {
        "statusCode": "default",
        "description": "Unexpected error"
      }
    ]
  },
  {
    "url": "/boleto-payment/log/{logId}",
    "method": "getLogById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "boletoPayment",
    "typeScriptTag": "boletoPayment",
    "description": "Get boleto payment log by ID",
    "parameters": [
      {
        "name": "logId",
        "schema": "string",
        "required": true,
        "description": "Log unique identifier.",
        "example": "LOGID"
      },
      {
        "name": "fields",
        "schema": "array",
        "required": false,
        "description": "List of strings to filter response JSON keys."
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
      },
      {
        "statusCode": "default",
        "description": "Unexpected error"
      }
    ]
  },
  {
    "url": "/utility-payment",
    "method": "listPayments",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "utilityPayment",
    "typeScriptTag": "utilityPayment",
    "description": "List utility payments",
    "parameters": [
      {
        "name": "cursor",
        "schema": "string",
        "required": false,
        "description": "String used to get the next batch of results."
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Number of results per cursor. Max = 100."
      },
      {
        "name": "fields",
        "schema": "array",
        "required": false,
        "description": "List of strings to filter response JSON keys."
      },
      {
        "name": "after",
        "schema": "string",
        "required": false,
        "description": "Filter entities created after this date."
      },
      {
        "name": "before",
        "schema": "string",
        "required": false,
        "description": "Filter entities created before this date."
      },
      {
        "name": "tags",
        "schema": "array",
        "required": false,
        "description": "Filter entities that contain the specified tags."
      },
      {
        "name": "ids",
        "schema": "array",
        "required": false,
        "description": "List of strings to get specific entities by ids."
      },
      {
        "name": "status",
        "schema": "string",
        "required": false,
        "description": "Filter payments by the specified status."
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
      },
      {
        "statusCode": "default",
        "description": "Unexpected error"
      }
    ]
  },
  {
    "url": "/utility-payment",
    "method": "createPayment",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "utilityPayment",
    "typeScriptTag": "utilityPayment",
    "description": "Create utility payments",
    "parameters": [
      {
        "name": "payments",
        "schema": "array",
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
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": "Unexpected error"
      }
    ]
  },
  {
    "url": "/utility-payment/{paymentId}",
    "method": "cancelById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "utilityPayment",
    "typeScriptTag": "utilityPayment",
    "description": "Cancel and delete a utility payment by ID",
    "parameters": [
      {
        "name": "paymentId",
        "schema": "string",
        "required": true,
        "description": "Payment unique identifier.",
        "example": "PAYMENTID"
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
      },
      {
        "statusCode": "default",
        "description": "Unexpected error"
      }
    ]
  },
  {
    "url": "/utility-payment/{paymentId}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "utilityPayment",
    "typeScriptTag": "utilityPayment",
    "description": "Get utility payment by ID",
    "parameters": [
      {
        "name": "paymentId",
        "schema": "string",
        "required": true,
        "description": "Payment unique identifier.",
        "example": "PAYMENTID"
      },
      {
        "name": "fields",
        "schema": "array",
        "required": false,
        "description": "List of strings to filter response JSON keys."
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
      },
      {
        "statusCode": "default",
        "description": "Unexpected error"
      }
    ]
  },
  {
    "url": "/utility-payment/{paymentId}/pdf",
    "method": "getPdfReceiptByPaymentId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "utilityPayment",
    "typeScriptTag": "utilityPayment",
    "description": "Get utility payment PDF receipt by payment ID",
    "parameters": [
      {
        "name": "paymentId",
        "schema": "string",
        "required": true,
        "description": "Payment unique identifier.",
        "example": "PAYMENTID"
      },
      {
        "name": "fields",
        "schema": "array",
        "required": false,
        "description": "List of strings to filter response JSON keys."
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
      },
      {
        "statusCode": "default",
        "description": "Unexpected error"
      }
    ]
  },
  {
    "url": "/utility-payment/log",
    "method": "listLogs",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "utilityPayment",
    "typeScriptTag": "utilityPayment",
    "description": "List utility payment logs",
    "parameters": [
      {
        "name": "cursor",
        "schema": "string",
        "required": false,
        "description": "String used to get the next batch of results."
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Number of results per cursor. Max = 100."
      },
      {
        "name": "fields",
        "schema": "array",
        "required": false,
        "description": "List of strings to filter response JSON keys."
      },
      {
        "name": "after",
        "schema": "string",
        "required": false,
        "description": "Filter entities created after this date."
      },
      {
        "name": "before",
        "schema": "string",
        "required": false,
        "description": "Filter entities created before this date."
      },
      {
        "name": "types",
        "schema": "array",
        "required": false,
        "description": "Filter logs by log types."
      },
      {
        "name": "paymentIds",
        "schema": "array",
        "required": false,
        "description": "Array of payment ids that are linked to the desired logs."
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
      },
      {
        "statusCode": "default",
        "description": "Unexpected error"
      }
    ]
  },
  {
    "url": "/utility-payment/log/{logId}",
    "method": "getLogById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "utilityPayment",
    "typeScriptTag": "utilityPayment",
    "description": "Get utility payment log by ID",
    "parameters": [
      {
        "name": "logId",
        "schema": "string",
        "required": true,
        "description": "Log unique identifier.",
        "example": "LOGID"
      },
      {
        "name": "fields",
        "schema": "array",
        "required": false,
        "description": "List of strings to filter response JSON keys."
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
      },
      {
        "statusCode": "default",
        "description": "Unexpected error"
      }
    ]
  },
  {
    "url": "/payment-request",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "paymentRequest",
    "typeScriptTag": "paymentRequest",
    "description": "List payment requests",
    "parameters": [
      {
        "name": "centerId",
        "schema": "string",
        "required": true,
        "description": "Cost center ID that contains the desired PaymentRequests.",
        "example": "CENTERID"
      },
      {
        "name": "cursor",
        "schema": "string",
        "required": false,
        "description": "String used to get the next batch of results."
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Number of results per cursor. Max = 100."
      },
      {
        "name": "fields",
        "schema": "array",
        "required": false,
        "description": "List of strings to filter response JSON keys."
      },
      {
        "name": "after",
        "schema": "string",
        "required": false,
        "description": "Filter entities created after this date."
      },
      {
        "name": "before",
        "schema": "string",
        "required": false,
        "description": "Filter entities created before this date."
      },
      {
        "name": "sort",
        "schema": "string",
        "required": false,
        "description": "Sort entities by the specified sort order. Options are \"-created\" and \"-due\"."
      },
      {
        "name": "tags",
        "schema": "array",
        "required": false,
        "description": "Filter entities that contain the specified tags."
      },
      {
        "name": "ids",
        "schema": "array",
        "required": false,
        "description": "List of strings to get specific entities by ids."
      },
      {
        "name": "status",
        "schema": "string",
        "required": false,
        "description": "Filter payments by the specified status."
      },
      {
        "name": "type",
        "schema": "string",
        "required": false,
        "description": "Filter payments by the specified payment type. Options are \"transfer\", \"brcode-payment\", ..."
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
      },
      {
        "statusCode": "default",
        "description": "Unexpected error"
      }
    ]
  },
  {
    "url": "/payment-request",
    "method": "createNewRequest",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "paymentRequest",
    "typeScriptTag": "paymentRequest",
    "description": "Create payment requests",
    "parameters": [
      {
        "name": "requests",
        "schema": "array",
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
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": "Unexpected error"
      }
    ]
  },
  {
    "url": "/webhook",
    "method": "listWebhooks",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "webhook",
    "typeScriptTag": "webhook",
    "description": "List webhooks",
    "parameters": [
      {
        "name": "cursor",
        "schema": "string",
        "required": false,
        "description": "String used to get the next batch of results."
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Number of results per cursor. Max = 100."
      },
      {
        "name": "fields",
        "schema": "array",
        "required": false,
        "description": "List of strings to filter response JSON keys."
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
      },
      {
        "statusCode": "default",
        "description": "Unexpected error"
      }
    ]
  },
  {
    "url": "/webhook",
    "method": "create",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "webhook",
    "typeScriptTag": "webhook",
    "description": "Create a webhook",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
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
        "name": "subscriptions",
        "schema": "array",
        "required": true,
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
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": "Unexpected error"
      }
    ]
  },
  {
    "url": "/webhook/{webhookId}",
    "method": "deleteById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "webhook",
    "typeScriptTag": "webhook",
    "description": "Delete a webhook by ID",
    "parameters": [
      {
        "name": "webhookId",
        "schema": "string",
        "required": true,
        "description": "Webhook unique identifier.",
        "example": "WEBHOOKID"
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
      },
      {
        "statusCode": "default",
        "description": "Unexpected error"
      }
    ]
  },
  {
    "url": "/webhook/{webhookId}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "webhook",
    "typeScriptTag": "webhook",
    "description": "Get webhook by ID",
    "parameters": [
      {
        "name": "webhookId",
        "schema": "string",
        "required": true,
        "description": "Webhook unique identifier.",
        "example": "WEBHOOKID"
      },
      {
        "name": "fields",
        "schema": "array",
        "required": false,
        "description": "List of strings to filter response JSON keys."
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
      },
      {
        "statusCode": "default",
        "description": "Unexpected error"
      }
    ]
  },
  {
    "url": "/event",
    "method": "webhookEventsList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "event",
    "typeScriptTag": "event",
    "description": "List webhook events",
    "parameters": [
      {
        "name": "cursor",
        "schema": "string",
        "required": false,
        "description": "String used to get the next batch of results."
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Number of results per cursor. Max = 100."
      },
      {
        "name": "fields",
        "schema": "array",
        "required": false,
        "description": "List of strings to filter response JSON keys."
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
      },
      {
        "statusCode": "default",
        "description": "Unexpected error"
      }
    ]
  },
  {
    "url": "/event/{eventId}",
    "method": "deleteById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "event",
    "typeScriptTag": "event",
    "description": "Delete a webhook event by ID",
    "parameters": [
      {
        "name": "eventId",
        "schema": "string",
        "required": true,
        "description": "Event unique identifier.",
        "example": "EVENTID"
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
      },
      {
        "statusCode": "default",
        "description": "Unexpected error"
      }
    ]
  },
  {
    "url": "/event/{eventId}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "event",
    "typeScriptTag": "event",
    "description": "Get event by ID",
    "parameters": [
      {
        "name": "eventId",
        "schema": "string",
        "required": true,
        "description": "Event unique identifier.",
        "example": "EVENTID"
      },
      {
        "name": "fields",
        "schema": "array",
        "required": false,
        "description": "List of strings to filter response JSON keys."
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
      },
      {
        "statusCode": "default",
        "description": "Unexpected error"
      }
    ]
  },
  {
    "url": "/event/{eventId}",
    "method": "updateById",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "event",
    "typeScriptTag": "event",
    "description": "Update a webhook event by ID",
    "parameters": [
      {
        "name": "eventId",
        "schema": "string",
        "required": true,
        "description": "Event unique identifier.",
        "example": "EVENTID"
      },
      {
        "name": "isDelivered",
        "schema": "boolean",
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
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": "Unexpected error"
      }
    ]
  },
  {
    "url": "/dict-key",
    "method": "listPixKeys",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "dictKey",
    "typeScriptTag": "dictKey",
    "description": "List the DICT (https://www.starkbank.com/docs/api keys associated with your Stark Bank Workspace",
    "parameters": [
      {
        "name": "cursor",
        "schema": "string",
        "required": false,
        "description": "String used to get the next batch of results."
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Number of results per cursor. Max = 100."
      },
      {
        "name": "after",
        "schema": "string",
        "required": false,
        "description": "Filter entities created after this date."
      },
      {
        "name": "before",
        "schema": "string",
        "required": false,
        "description": "Filter entities created before this date."
      },
      {
        "name": "ids",
        "schema": "array",
        "required": false,
        "description": "List of strings to get specific entities by ids."
      },
      {
        "name": "status",
        "schema": "string",
        "required": false,
        "description": "Filter DictKeys by the specified status."
      },
      {
        "name": "type",
        "schema": "string",
        "required": false,
        "description": "Filter DictKeys by the specified type. Options are \"cpf\", \"cnpj\", \"email\", \"phone\" and \"evp\""
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
      },
      {
        "statusCode": "default",
        "description": "Unexpected error"
      }
    ]
  },
  {
    "url": "/dict-key/{keyId}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "dictKey",
    "typeScriptTag": "dictKey",
    "description": "Get DictKey by ID",
    "parameters": [
      {
        "name": "keyId",
        "schema": "string",
        "required": true,
        "description": "DICT key unique identifier.",
        "example": "KEYID"
      },
      {
        "name": "fields",
        "schema": "array",
        "required": false,
        "description": "List of strings to filter response JSON keys."
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
      },
      {
        "statusCode": "default",
        "description": "Unexpected error"
      }
    ]
  },
  {
    "url": "/workspace",
    "method": "listUserWorkspaces",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "workspace",
    "typeScriptTag": "workspace",
    "description": "List workspaces that your user has access to",
    "parameters": [
      {
        "name": "cursor",
        "schema": "string",
        "required": false,
        "description": "String used to get the next batch of results."
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Number of results per cursor. Max = 100."
      },
      {
        "name": "fields",
        "schema": "array",
        "required": false,
        "description": "List of strings to filter response JSON keys."
      },
      {
        "name": "username",
        "schema": "array",
        "required": false,
        "description": "Workspace username to be searched."
      },
      {
        "name": "ids",
        "schema": "array",
        "required": false,
        "description": "Workspace ids to be searched."
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
      },
      {
        "statusCode": "default",
        "description": "Unexpected error"
      }
    ]
  },
  {
    "url": "/workspace",
    "method": "createNewWorkspace",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "workspace",
    "typeScriptTag": "workspace",
    "description": "Create a workspace",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "username",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERNAME"
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
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": "Unexpected error"
      }
    ]
  },
  {
    "url": "/workspace/{workspaceId}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "workspace",
    "typeScriptTag": "workspace",
    "description": "Get workspace by ID",
    "parameters": [
      {
        "name": "workspaceId",
        "schema": "string",
        "required": true,
        "description": "Workspace unique identifier.",
        "example": "WORKSPACEID"
      },
      {
        "name": "fields",
        "schema": "array",
        "required": false,
        "description": "List of strings to filter response JSON keys."
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
      },
      {
        "statusCode": "default",
        "description": "Unexpected error"
      }
    ]
  },
  {
    "url": "/public-key",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "publicKey",
    "typeScriptTag": "publicKey",
    "description": "List the public keys Stark Bank uses to sign webhooks and receipts",
    "parameters": [
      {
        "name": "cursor",
        "schema": "string",
        "required": false,
        "description": "String used to get the next batch of results."
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Number of results per cursor. Max = 100."
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
      },
      {
        "statusCode": "default",
        "description": "Unexpected error"
      }
    ]
  }
]
    }
      language="TypeScript"
      apiTitle="Stark Bank API"
      apiBaseUrl="https://sandbox.api.starkbank.com/"
      apiVersion="v2"
      endpoints={53}
      sdkMethods={72}
      schemas={92}
      parameters={251}
      difficulty="Medium"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/stark-bank/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/stark-bank/openapi.yaml"
      developerDocumentation="www.starkbank.com/docs/api"
    />
  );
}
  