import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function XeroAccountingTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="xero-accounting-typescript-sdk"
      metaDescription={`Xero is a global small business platform with 3.5 million subscribers which includes a core accounting solution, payroll, workforce management, expenses and projects. Xero also has an extensive ecosystem of connected apps and connections to banks and other financial institutions helping small businesses access a range of solutions from within Xero's open platform to help them run their business and manage their finances. For four consecutive years (2020-2023) Xero was included in the Bloomberg Gender-Equality Index. In 2021 and 2022, Xero was included in the Dow Jones Sustainability Index (DJSI), powered by the S&P Global Corporate Sustainability Assessment. Xero is a FIFA Women's Football partner.

Get support http://central.xero.com`}
      company="Xero"
      serviceName="Accounting"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/xero/accounting/logo.png"
      companyKebabCase="xero"
      clientNameCamelCase="xeroAccounting"
      homepage="xero.com"
      lastUpdated={new Date("2024-03-28T20:59:16.525Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/xero/accounting/favicon.png"
      contactUrl="https://developer.xero.com"
      contactEmail="api@xero.com"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/xero/accounting/imagePreview.png"
      GettingStarted={GettingStarted}
      FirstRequest={FirstRequest}
      categories={["finance","accounting"]}
      methods={[
  {
    "url": "/Accounts",
    "method": "getFullChartOfAccounts",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "Retrieves the full chart of accounts",
    "parameters": [
      {
        "name": "ifModifiedSince",
        "schema": "string",
        "description": "Only records created or modified since this timestamp will be returned",
        "example": "2020-02-06T12:17:43.202-08:00"
      },
      {
        "name": "where",
        "schema": "string",
        "description": "Filter by an any element",
        "example": "Status==&quot;ACTIVE&quot; AND Type==&quot;BANK&quot;"
      },
      {
        "name": "order",
        "schema": "string",
        "description": "Order by an any element",
        "example": "Name ASC"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/Accounts",
    "method": "createChartOfAccounts",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "Creates a new chart of accounts",
    "parameters": [
      {
        "name": "idempotencyKey",
        "schema": "string",
        "description": "This allows you to safely retry requests without the risk of duplicate processing. 128 character max.",
        "example": "KEY_VALUE"
      },
      {
        "name": "Code",
        "schema": "string",
        "description": "",
        "example": 4400
      },
      {
        "name": "Name",
        "schema": "string",
        "description": "",
        "example": "Food Sales"
      },
      {
        "name": "AccountID",
        "schema": "string",
        "description": "",
        "example": "00000000-0000-0000-0000-000000000000"
      },
      {
        "name": "Type",
        "schema": "string",
        "description": ""
      },
      {
        "name": "BankAccountNumber",
        "schema": "string",
        "description": ""
      },
      {
        "name": "Status",
        "schema": "string",
        "description": ""
      },
      {
        "name": "Description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "BankAccountType",
        "schema": "string",
        "description": ""
      },
      {
        "name": "CurrencyCode",
        "schema": "string",
        "description": ""
      },
      {
        "name": "TaxType",
        "schema": "string",
        "description": ""
      },
      {
        "name": "EnablePaymentsToAccount",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "ShowInExpenseClaims",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "Class",
        "schema": "string",
        "description": ""
      },
      {
        "name": "SystemAccount",
        "schema": "string",
        "description": ""
      },
      {
        "name": "ReportingCode",
        "schema": "string",
        "description": ""
      },
      {
        "name": "ReportingCodeName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "HasAttachments",
        "schema": "boolean",
        "description": "",
        "example": false,
        "default": "false"
      },
      {
        "name": "UpdatedDateUTC",
        "schema": "string",
        "description": "",
        "example": "/Date(https://developer.xero.com/documentation/api/accounting/overview/"
      },
      {
        "name": "AddToWatchlist",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "ValidationErrors",
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
      }
    ]
  },
  {
    "url": "/Accounts/{AccountID}",
    "method": "deleteChartOfAccounts",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "Deletes a chart of accounts",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier for Account object",
        "example": "00000000-0000-0000-0000-000000000000"
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
    "url": "/Accounts/{AccountID}",
    "method": "getChartOfAccountsById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "Retrieves a single chart of accounts by using a unique account Id",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier for Account object",
        "example": "00000000-0000-0000-0000-000000000000"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/Accounts/{AccountID}",
    "method": "updateChartOfAccounts",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "Updates a chart of accounts",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier for Account object",
        "example": "00000000-0000-0000-0000-000000000000"
      },
      {
        "name": "idempotencyKey",
        "schema": "string",
        "description": "This allows you to safely retry requests without the risk of duplicate processing. 128 character max.",
        "example": "KEY_VALUE"
      },
      {
        "name": "Accounts",
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
      }
    ]
  },
  {
    "url": "/Accounts/{AccountID}/Attachments",
    "method": "getAttachments",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "Retrieves attachments for a specific accounts by using a unique account Id",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier for Account object",
        "example": "00000000-0000-0000-0000-000000000000"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/Accounts/{AccountID}/Attachments/{AttachmentID}",
    "method": "getAttachmentById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "Retrieves a specific attachment from a specific account using a unique attachment Id",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier for Account object",
        "example": "00000000-0000-0000-0000-000000000000"
      },
      {
        "name": "attachmentId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier for Attachment object",
        "example": "00000000-0000-0000-0000-000000000000"
      },
      {
        "name": "contentType",
        "schema": "string",
        "required": true,
        "description": "The mime type of the attachment file you are retrieving i.e image/jpg, application/pdf",
        "example": "image/jpg"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/Accounts/{AccountID}/Attachments/{FileName}",
    "method": "getAttachmentByFilename",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "Retrieves an attachment for a specific account by filename",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier for Account object",
        "example": "00000000-0000-0000-0000-000000000000"
      },
      {
        "name": "fileName",
        "schema": "string",
        "required": true,
        "description": "Name of the attachment",
        "example": "xero-dev.jpg"
      },
      {
        "name": "contentType",
        "schema": "string",
        "required": true,
        "description": "The mime type of the attachment file you are retrieving i.e image/jpg, application/pdf",
        "example": "image/jpg"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/Accounts/{AccountID}/Attachments/{FileName}",
    "method": "updateAttachmentByFilename",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "Updates attachment on a specific account by filename",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier for Account object",
        "example": "00000000-0000-0000-0000-000000000000"
      },
      {
        "name": "fileName",
        "schema": "string",
        "required": true,
        "description": "Name of the attachment",
        "example": "xero-dev.jpg"
      },
      {
        "name": "idempotencyKey",
        "schema": "string",
        "description": "This allows you to safely retry requests without the risk of duplicate processing. 128 character max.",
        "example": "KEY_VALUE"
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
    "url": "/Accounts/{AccountID}/Attachments/{FileName}",
    "method": "createAttachment",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "Creates an attachment on a specific account",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier for Account object",
        "example": "00000000-0000-0000-0000-000000000000"
      },
      {
        "name": "fileName",
        "schema": "string",
        "required": true,
        "description": "Name of the attachment",
        "example": "xero-dev.jpg"
      },
      {
        "name": "idempotencyKey",
        "schema": "string",
        "description": "This allows you to safely retry requests without the risk of duplicate processing. 128 character max.",
        "example": "KEY_VALUE"
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
    "url": "/BatchPayments",
    "method": "getBatchPayments",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "Retrieves either one or many batch payments for invoices",
    "parameters": [
      {
        "name": "ifModifiedSince",
        "schema": "string",
        "description": "Only records created or modified since this timestamp will be returned",
        "example": "2020-02-06T12:17:43.202-08:00"
      },
      {
        "name": "where",
        "schema": "string",
        "description": "Filter by an any element",
        "example": "Status==\"AUTHORISED\""
      },
      {
        "name": "order",
        "schema": "string",
        "description": "Order by an any element",
        "example": "Date ASC"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/BatchPayments",
    "method": "updateBatchPayment",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "Updates a specific batch payment for invoices and credit notes",
    "parameters": [
      {
        "name": "idempotencyKey",
        "schema": "string",
        "description": "This allows you to safely retry requests without the risk of duplicate processing. 128 character max.",
        "example": "KEY_VALUE"
      },
      {
        "name": "BatchPaymentID",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "BATCHPAYMENTID"
      },
      {
        "name": "Status",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "STATUS",
        "default": "DELETED"
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
    "url": "/BatchPayments",
    "method": "createBatchPayments",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "Creates one or many batch payments for invoices",
    "parameters": [
      {
        "name": "summarizeErrors",
        "schema": "boolean",
        "description": "If false return 200 OK and mix of successfully created objects and any with validation errors",
        "example": true,
        "default": false
      },
      {
        "name": "idempotencyKey",
        "schema": "string",
        "description": "This allows you to safely retry requests without the risk of duplicate processing. 128 character max.",
        "example": "KEY_VALUE"
      },
      {
        "name": "BatchPayments",
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
      }
    ]
  },
  {
    "url": "/BatchPayments/{BatchPaymentID}",
    "method": "getBatchPayment",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "Retrieves a specific batch payment using a unique batch payment Id",
    "parameters": [
      {
        "name": "batchPaymentId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier for BatchPayment",
        "example": "00000000-0000-0000-0000-000000000000"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/BatchPayments/{BatchPaymentID}",
    "method": "updateBatchPayment",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "Updates a specific batch payment for invoices and credit notes",
    "parameters": [
      {
        "name": "idempotencyKey",
        "schema": "string",
        "description": "This allows you to safely retry requests without the risk of duplicate processing. 128 character max.",
        "example": "KEY_VALUE"
      },
      {
        "name": "batchPaymentId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier for BatchPayment",
        "example": "00000000-0000-0000-0000-000000000000"
      },
      {
        "name": "Status",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "STATUS",
        "default": "DELETED"
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
    "url": "/BatchPayments/{BatchPaymentID}/History",
    "method": "getBatchPaymentHistory",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "Retrieves history from a specific batch payment",
    "parameters": [
      {
        "name": "batchPaymentId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier for BatchPayment",
        "example": "00000000-0000-0000-0000-000000000000"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/BatchPayments/{BatchPaymentID}/History",
    "method": "recordBatchPaymentHistory",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "Creates a history record for a specific batch payment",
    "parameters": [
      {
        "name": "idempotencyKey",
        "schema": "string",
        "description": "This allows you to safely retry requests without the risk of duplicate processing. 128 character max.",
        "example": "KEY_VALUE"
      },
      {
        "name": "batchPaymentId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier for BatchPayment",
        "example": "00000000-0000-0000-0000-000000000000"
      },
      {
        "name": "HistoryRecords",
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
      }
    ]
  },
  {
    "url": "/BankTransactions",
    "method": "getMoneyTransactions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "Retrieves any spent or received money transactions",
    "parameters": [
      {
        "name": "ifModifiedSince",
        "schema": "string",
        "description": "Only records created or modified since this timestamp will be returned",
        "example": "2020-02-06T12:17:43.202-08:00"
      },
      {
        "name": "where",
        "schema": "string",
        "description": "Filter by an any element",
        "example": "Status==\"AUTHORISED\""
      },
      {
        "name": "order",
        "schema": "string",
        "description": "Order by an any element",
        "example": "Type ASC"
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "Up to 100 bank transactions will be returned in a single API call with line items details",
        "example": 1
      },
      {
        "name": "unitdp",
        "schema": "integer",
        "description": "e.g. unitdp=4 – (Unit Decimal Places) You can opt in to use four decimal places for unit amounts",
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
    "url": "/BankTransactions",
    "method": "updateBankTransactions",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "Updates or creates one or more spent or received money transaction",
    "parameters": [
      {
        "name": "summarizeErrors",
        "schema": "boolean",
        "description": "If false return 200 OK and mix of successfully created objects and any with validation errors",
        "example": true,
        "default": false
      },
      {
        "name": "unitdp",
        "schema": "integer",
        "description": "e.g. unitdp=4 – (Unit Decimal Places) You can opt in to use four decimal places for unit amounts",
        "example": 4
      },
      {
        "name": "idempotencyKey",
        "schema": "string",
        "description": "This allows you to safely retry requests without the risk of duplicate processing. 128 character max.",
        "example": "KEY_VALUE"
      },
      {
        "name": "BankTransactions",
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
      }
    ]
  },
  {
    "url": "/BankTransactions",
    "method": "createBankTransactions",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "Creates one or more spent or received money transaction",
    "parameters": [
      {
        "name": "summarizeErrors",
        "schema": "boolean",
        "description": "If false return 200 OK and mix of successfully created objects and any with validation errors",
        "example": true,
        "default": false
      },
      {
        "name": "unitdp",
        "schema": "integer",
        "description": "e.g. unitdp=4 – (Unit Decimal Places) You can opt in to use four decimal places for unit amounts",
        "example": 4
      },
      {
        "name": "idempotencyKey",
        "schema": "string",
        "description": "This allows you to safely retry requests without the risk of duplicate processing. 128 character max.",
        "example": "KEY_VALUE"
      },
      {
        "name": "BankTransactions",
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
      }
    ]
  },
  {
    "url": "/BankTransactions/{BankTransactionID}",
    "method": "getBankTransactionById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "Retrieves a single spent or received money transaction by using a unique bank transaction Id",
    "parameters": [
      {
        "name": "bankTransactionId",
        "schema": "string",
        "required": true,
        "description": "Xero generated unique identifier for a bank transaction",
        "example": "00000000-0000-0000-0000-000000000000"
      },
      {
        "name": "unitdp",
        "schema": "integer",
        "description": "e.g. unitdp=4 – (Unit Decimal Places) You can opt in to use four decimal places for unit amounts",
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
    "url": "/BankTransactions/{BankTransactionID}",
    "method": "updateBankTransaction",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "Updates a single spent or received money transaction",
    "parameters": [
      {
        "name": "bankTransactionId",
        "schema": "string",
        "required": true,
        "description": "Xero generated unique identifier for a bank transaction",
        "example": "00000000-0000-0000-0000-000000000000"
      },
      {
        "name": "unitdp",
        "schema": "integer",
        "description": "e.g. unitdp=4 – (Unit Decimal Places) You can opt in to use four decimal places for unit amounts",
        "example": 4
      },
      {
        "name": "idempotencyKey",
        "schema": "string",
        "description": "This allows you to safely retry requests without the risk of duplicate processing. 128 character max.",
        "example": "KEY_VALUE"
      },
      {
        "name": "BankTransactions",
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
      }
    ]
  },
  {
    "url": "/BankTransactions/{BankTransactionID}/Attachments",
    "method": "getBankTransactionAttachments",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "Retrieves any attachments from a specific bank transactions",
    "parameters": [
      {
        "name": "bankTransactionId",
        "schema": "string",
        "required": true,
        "description": "Xero generated unique identifier for a bank transaction",
        "example": "00000000-0000-0000-0000-000000000000"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/BankTransactions/{BankTransactionID}/Attachments/{AttachmentID}",
    "method": "getAttachment",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "Retrieves specific attachments from a specific BankTransaction using a unique attachment Id",
    "parameters": [
      {
        "name": "bankTransactionId",
        "schema": "string",
        "required": true,
        "description": "Xero generated unique identifier for a bank transaction",
        "example": "00000000-0000-0000-0000-000000000000"
      },
      {
        "name": "attachmentId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier for Attachment object",
        "example": "00000000-0000-0000-0000-000000000000"
      },
      {
        "name": "contentType",
        "schema": "string",
        "required": true,
        "description": "The mime type of the attachment file you are retrieving i.e image/jpg, application/pdf",
        "example": "image/jpg"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/BankTransactions/{BankTransactionID}/Attachments/{FileName}",
    "method": "getAttachmentByFileName",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "Retrieves a specific attachment from a specific bank transaction by filename",
    "parameters": [
      {
        "name": "bankTransactionId",
        "schema": "string",
        "required": true,
        "description": "Xero generated unique identifier for a bank transaction",
        "example": "00000000-0000-0000-0000-000000000000"
      },
      {
        "name": "fileName",
        "schema": "string",
        "required": true,
        "description": "Name of the attachment",
        "example": "xero-dev.jpg"
      },
      {
        "name": "contentType",
        "schema": "string",
        "required": true,
        "description": "The mime type of the attachment file you are retrieving i.e image/jpg, application/pdf",
        "example": "image/jpg"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/BankTransactions/{BankTransactionID}/Attachments/{FileName}",
    "method": "updateBankTransactionAttachment",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "Updates a specific attachment from a specific bank transaction by filename",
    "parameters": [
      {
        "name": "idempotencyKey",
        "schema": "string",
        "description": "This allows you to safely retry requests without the risk of duplicate processing. 128 character max.",
        "example": "KEY_VALUE"
      },
      {
        "name": "bankTransactionId",
        "schema": "string",
        "required": true,
        "description": "Xero generated unique identifier for a bank transaction",
        "example": "00000000-0000-0000-0000-000000000000"
      },
      {
        "name": "fileName",
        "schema": "string",
        "required": true,
        "description": "Name of the attachment",
        "example": "xero-dev.jpg"
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
    "url": "/BankTransactions/{BankTransactionID}/Attachments/{FileName}",
    "method": "createBankTransactionAttachmentByFilename",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "Creates an attachment for a specific bank transaction by filename",
    "parameters": [
      {
        "name": "idempotencyKey",
        "schema": "string",
        "description": "This allows you to safely retry requests without the risk of duplicate processing. 128 character max.",
        "example": "KEY_VALUE"
      },
      {
        "name": "bankTransactionId",
        "schema": "string",
        "required": true,
        "description": "Xero generated unique identifier for a bank transaction",
        "example": "00000000-0000-0000-0000-000000000000"
      },
      {
        "name": "fileName",
        "schema": "string",
        "required": true,
        "description": "Name of the attachment",
        "example": "xero-dev.jpg"
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
    "url": "/BankTransactions/{BankTransactionID}/History",
    "method": "getBankTransactionHistory",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "Retrieves history from a specific bank transaction using a unique bank transaction Id",
    "parameters": [
      {
        "name": "bankTransactionId",
        "schema": "string",
        "required": true,
        "description": "Xero generated unique identifier for a bank transaction",
        "example": "00000000-0000-0000-0000-000000000000"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/BankTransactions/{BankTransactionID}/History",
    "method": "createBankTransactionHistory",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "Creates a history record for a specific bank transactions",
    "parameters": [
      {
        "name": "idempotencyKey",
        "schema": "string",
        "description": "This allows you to safely retry requests without the risk of duplicate processing. 128 character max.",
        "example": "KEY_VALUE"
      },
      {
        "name": "bankTransactionId",
        "schema": "string",
        "required": true,
        "description": "Xero generated unique identifier for a bank transaction",
        "example": "00000000-0000-0000-0000-000000000000"
      },
      {
        "name": "HistoryRecords",
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
      }
    ]
  },
  {
    "url": "/BankTransfers",
    "method": "getBankTransfers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "Retrieves all bank transfers",
    "parameters": [
      {
        "name": "ifModifiedSince",
        "schema": "string",
        "description": "Only records created or modified since this timestamp will be returned",
        "example": "2020-02-06T12:17:43.202-08:00"
      },
      {
        "name": "where",
        "schema": "string",
        "description": "Filter by an any element",
        "example": "HasAttachments==true"
      },
      {
        "name": "order",
        "schema": "string",
        "description": "Order by an any element",
        "example": "Amount ASC"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/BankTransfers",
    "method": "createBankTransfer",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "Creates a bank transfer",
    "parameters": [
      {
        "name": "idempotencyKey",
        "schema": "string",
        "description": "This allows you to safely retry requests without the risk of duplicate processing. 128 character max.",
        "example": "KEY_VALUE"
      },
      {
        "name": "BankTransfers",
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
      }
    ]
  },
  {
    "url": "/BankTransfers/{BankTransferID}",
    "method": "getBankTransferById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "Retrieves specific bank transfers by using a unique bank transfer Id",
    "parameters": [
      {
        "name": "bankTransferId",
        "schema": "string",
        "required": true,
        "description": "Xero generated unique identifier for a bank transfer",
        "example": "00000000-0000-0000-0000-000000000000"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/BankTransfers/{BankTransferID}/Attachments",
    "method": "getBankTransferAttachments",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "Retrieves attachments from a specific bank transfer",
    "parameters": [
      {
        "name": "bankTransferId",
        "schema": "string",
        "required": true,
        "description": "Xero generated unique identifier for a bank transfer",
        "example": "00000000-0000-0000-0000-000000000000"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/BankTransfers/{BankTransferID}/Attachments/{AttachmentID}",
    "method": "getAttachment",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "Retrieves a specific attachment from a specific bank transfer using a unique attachment ID",
    "parameters": [
      {
        "name": "bankTransferId",
        "schema": "string",
        "required": true,
        "description": "Xero generated unique identifier for a bank transfer",
        "example": "00000000-0000-0000-0000-000000000000"
      },
      {
        "name": "attachmentId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier for Attachment object",
        "example": "00000000-0000-0000-0000-000000000000"
      },
      {
        "name": "contentType",
        "schema": "string",
        "required": true,
        "description": "The mime type of the attachment file you are retrieving i.e image/jpg, application/pdf",
        "example": "image/jpg"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/BankTransfers/{BankTransferID}/Attachments/{FileName}",
    "method": "getSpecificAttachment",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "Retrieves a specific attachment on a specific bank transfer by file name",
    "parameters": [
      {
        "name": "bankTransferId",
        "schema": "string",
        "required": true,
        "description": "Xero generated unique identifier for a bank transfer",
        "example": "00000000-0000-0000-0000-000000000000"
      },
      {
        "name": "fileName",
        "schema": "string",
        "required": true,
        "description": "Name of the attachment",
        "example": "xero-dev.jpg"
      },
      {
        "name": "contentType",
        "schema": "string",
        "required": true,
        "description": "The mime type of the attachment file you are retrieving i.e image/jpg, application/pdf",
        "example": "image/jpg"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/BankTransfers/{BankTransferID}/Attachments/{FileName}",
    "method": "uploadBankTransferAttachment",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "",
    "parameters": [
      {
        "name": "idempotencyKey",
        "schema": "string",
        "description": "This allows you to safely retry requests without the risk of duplicate processing. 128 character max.",
        "example": "KEY_VALUE"
      },
      {
        "name": "bankTransferId",
        "schema": "string",
        "required": true,
        "description": "Xero generated unique identifier for a bank transfer",
        "example": "00000000-0000-0000-0000-000000000000"
      },
      {
        "name": "fileName",
        "schema": "string",
        "required": true,
        "description": "Name of the attachment",
        "example": "xero-dev.jpg"
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
    "url": "/BankTransfers/{BankTransferID}/Attachments/{FileName}",
    "method": "updateBankTransferAttachment",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "",
    "parameters": [
      {
        "name": "idempotencyKey",
        "schema": "string",
        "description": "This allows you to safely retry requests without the risk of duplicate processing. 128 character max.",
        "example": "KEY_VALUE"
      },
      {
        "name": "bankTransferId",
        "schema": "string",
        "required": true,
        "description": "Xero generated unique identifier for a bank transfer",
        "example": "00000000-0000-0000-0000-000000000000"
      },
      {
        "name": "fileName",
        "schema": "string",
        "required": true,
        "description": "Name of the attachment",
        "example": "xero-dev.jpg"
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
    "url": "/BankTransfers/{BankTransferID}/History",
    "method": "getBankTransferHistory",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "Retrieves history from a specific bank transfer using a unique bank transfer Id",
    "parameters": [
      {
        "name": "bankTransferId",
        "schema": "string",
        "required": true,
        "description": "Xero generated unique identifier for a bank transfer",
        "example": "00000000-0000-0000-0000-000000000000"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/BankTransfers/{BankTransferID}/History",
    "method": "createBankTransferHistory",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "Creates a history record for a specific bank transfer",
    "parameters": [
      {
        "name": "idempotencyKey",
        "schema": "string",
        "description": "This allows you to safely retry requests without the risk of duplicate processing. 128 character max.",
        "example": "KEY_VALUE"
      },
      {
        "name": "bankTransferId",
        "schema": "string",
        "required": true,
        "description": "Xero generated unique identifier for a bank transfer",
        "example": "00000000-0000-0000-0000-000000000000"
      },
      {
        "name": "HistoryRecords",
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
      }
    ]
  },
  {
    "url": "/BrandingThemes",
    "method": "getBrandingThemes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "Retrieves all the branding themes",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/BrandingThemes/{BrandingThemeID}",
    "method": "getBrandingThemeById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "Retrieves a specific branding theme using a unique branding theme Id",
    "parameters": [
      {
        "name": "brandingThemeId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier for a Branding Theme",
        "example": "00000000-0000-0000-0000-000000000000"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/BrandingThemes/{BrandingThemeID}/PaymentServices",
    "method": "getPaymentServices",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "Retrieves the payment services for a specific branding theme",
    "parameters": [
      {
        "name": "brandingThemeId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier for a Branding Theme",
        "example": "00000000-0000-0000-0000-000000000000"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/BrandingThemes/{BrandingThemeID}/PaymentServices",
    "method": "createPaymentService",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "Creates a new custom payment service for a specific branding theme",
    "parameters": [
      {
        "name": "idempotencyKey",
        "schema": "string",
        "description": "This allows you to safely retry requests without the risk of duplicate processing. 128 character max.",
        "example": "KEY_VALUE"
      },
      {
        "name": "brandingThemeId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier for a Branding Theme",
        "example": "00000000-0000-0000-0000-000000000000"
      },
      {
        "name": "PaymentServices",
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
      }
    ]
  },
  {
    "url": "/Budgets",
    "method": "getBudgetsList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "Retrieve a list of budgets",
    "parameters": [
      {
        "name": "iDs",
        "schema": "string",
        "description": "Filter by BudgetID. Allows you to retrieve a specific individual budget.",
        "example": "&quot;00000000-0000-0000-0000-000000000000&quot;"
      },
      {
        "name": "dateTo",
        "schema": "string",
        "description": "Filter by start date",
        "example": "2019-10-31"
      },
      {
        "name": "dateFrom",
        "schema": "string",
        "description": "Filter by end date",
        "example": "2019-10-31"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/Budgets/{BudgetID}",
    "method": "getBudget",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "Retrieves a specific budget, which includes budget lines",
    "parameters": [
      {
        "name": "budgetId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier for Budgets",
        "example": "00000000-0000-0000-0000-000000000000"
      },
      {
        "name": "dateTo",
        "schema": "string",
        "description": "Filter by start date",
        "example": "2019-10-31"
      },
      {
        "name": "dateFrom",
        "schema": "string",
        "description": "Filter by end date",
        "example": "2019-10-31"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/Contacts",
    "method": "listContacts",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "Retrieves all contacts in a Xero organisation",
    "parameters": [
      {
        "name": "ifModifiedSince",
        "schema": "string",
        "description": "Only records created or modified since this timestamp will be returned",
        "example": "2020-02-06T12:17:43.202-08:00"
      },
      {
        "name": "where",
        "schema": "string",
        "description": "Filter by an any element",
        "example": "ContactStatus==&quot;ACTIVE&quot;"
      },
      {
        "name": "order",
        "schema": "string",
        "description": "Order by an any element",
        "example": "Name ASC"
      },
      {
        "name": "iDs",
        "schema": "array",
        "description": "Filter by a comma separated list of ContactIDs. Allows you to retrieve a specific set of contacts in a single call.",
        "example": "&quot;00000000-0000-0000-0000-000000000000&quot;"
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "e.g. page=1 - Up to 100 contacts will be returned in a single API call.",
        "example": 1
      },
      {
        "name": "includeArchived",
        "schema": "boolean",
        "description": "e.g. includeArchived=true - Contacts with a status of ARCHIVED will be included in the response",
        "example": true
      },
      {
        "name": "summaryOnly",
        "schema": "boolean",
        "description": "Use summaryOnly=true in GET Contacts and Invoices endpoint to retrieve a smaller version of the response object. This returns only lightweight fields, excluding computation-heavy fields from the response, making the API calls quick and efficient.",
        "example": true,
        "default": false
      },
      {
        "name": "searchTerm",
        "schema": "string",
        "description": "Search parameter that performs a case-insensitive text search across the Name, FirstName, LastName, ContactNumber and EmailAddress fields.",
        "example": "Joe Bloggs"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/Contacts",
    "method": "updateOrCreateContacts",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "Updates or creates one or more contacts in a Xero organisation",
    "parameters": [
      {
        "name": "summarizeErrors",
        "schema": "boolean",
        "description": "If false return 200 OK and mix of successfully created objects and any with validation errors",
        "example": true,
        "default": false
      },
      {
        "name": "idempotencyKey",
        "schema": "string",
        "description": "This allows you to safely retry requests without the risk of duplicate processing. 128 character max.",
        "example": "KEY_VALUE"
      },
      {
        "name": "Contacts",
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
      }
    ]
  },
  {
    "url": "/Contacts",
    "method": "createMultipleContacts",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "Creates multiple contacts (https://developer.xero.com/documentation/api/accounting/overview in a Xero organisation",
    "parameters": [
      {
        "name": "summarizeErrors",
        "schema": "boolean",
        "description": "If false return 200 OK and mix of successfully created objects and any with validation errors",
        "example": true,
        "default": false
      },
      {
        "name": "idempotencyKey",
        "schema": "string",
        "description": "This allows you to safely retry requests without the risk of duplicate processing. 128 character max.",
        "example": "KEY_VALUE"
      },
      {
        "name": "Contacts",
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
      }
    ]
  },
  {
    "url": "/Contacts/{ContactNumber}",
    "method": "getContactByNumber",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "Retrieves a specific contact by contact number in a Xero organisation",
    "parameters": [
      {
        "name": "contactNumber",
        "schema": "string",
        "required": true,
        "description": "This field is read only on the Xero contact screen, used to identify contacts in external systems (max length = 50).",
        "example": "SB2"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/Contacts/{ContactID}",
    "method": "getContactById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "Retrieves a specific contacts in a Xero organisation using a unique contact Id",
    "parameters": [
      {
        "name": "contactId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier for a Contact",
        "example": "00000000-0000-0000-0000-000000000000"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/Contacts/{ContactID}",
    "method": "updateContact",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "Updates a specific contact in a Xero organisation",
    "parameters": [
      {
        "name": "idempotencyKey",
        "schema": "string",
        "description": "This allows you to safely retry requests without the risk of duplicate processing. 128 character max.",
        "example": "KEY_VALUE"
      },
      {
        "name": "contactId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier for a Contact",
        "example": "00000000-0000-0000-0000-000000000000"
      },
      {
        "name": "Contacts",
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
      }
    ]
  },
  {
    "url": "/Contacts/{ContactID}/Attachments",
    "method": "getContactAttachments",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "Retrieves attachments for a specific contact in a Xero organisation",
    "parameters": [
      {
        "name": "contactId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier for a Contact",
        "example": "00000000-0000-0000-0000-000000000000"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/Contacts/{ContactID}/Attachments/{AttachmentID}",
    "method": "getSpecificAttachment",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "Retrieves a specific attachment from a specific contact using a unique attachment Id",
    "parameters": [
      {
        "name": "contactId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier for a Contact",
        "example": "00000000-0000-0000-0000-000000000000"
      },
      {
        "name": "attachmentId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier for Attachment object",
        "example": "00000000-0000-0000-0000-000000000000"
      },
      {
        "name": "contentType",
        "schema": "string",
        "required": true,
        "description": "The mime type of the attachment file you are retrieving i.e image/jpg, application/pdf",
        "example": "image/jpg"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/Contacts/{ContactID}/Attachments/{FileName}",
    "method": "getAttachmentByFileName",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "Retrieves a specific attachment from a specific contact by file name",
    "parameters": [
      {
        "name": "contactId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier for a Contact",
        "example": "00000000-0000-0000-0000-000000000000"
      },
      {
        "name": "fileName",
        "schema": "string",
        "required": true,
        "description": "Name of the attachment",
        "example": "xero-dev.jpg"
      },
      {
        "name": "contentType",
        "schema": "string",
        "required": true,
        "description": "The mime type of the attachment file you are retrieving i.e image/jpg, application/pdf",
        "example": "image/jpg"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/Contacts/{ContactID}/Attachments/{FileName}",
    "method": "uploadAttachment",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "",
    "parameters": [
      {
        "name": "idempotencyKey",
        "schema": "string",
        "description": "This allows you to safely retry requests without the risk of duplicate processing. 128 character max.",
        "example": "KEY_VALUE"
      },
      {
        "name": "contactId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier for a Contact",
        "example": "00000000-0000-0000-0000-000000000000"
      },
      {
        "name": "fileName",
        "schema": "string",
        "required": true,
        "description": "Name of the attachment",
        "example": "xero-dev.jpg"
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
    "url": "/Contacts/{ContactID}/Attachments/{FileName}",
    "method": "uploadAttachment",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "",
    "parameters": [
      {
        "name": "idempotencyKey",
        "schema": "string",
        "description": "This allows you to safely retry requests without the risk of duplicate processing. 128 character max.",
        "example": "KEY_VALUE"
      },
      {
        "name": "contactId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier for a Contact",
        "example": "00000000-0000-0000-0000-000000000000"
      },
      {
        "name": "fileName",
        "schema": "string",
        "required": true,
        "description": "Name of the attachment",
        "example": "xero-dev.jpg"
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
    "url": "/Contacts/{ContactID}/CISSettings",
    "method": "getCisSettings",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "Retrieves CIS settings for a specific contact in a Xero organisation",
    "parameters": [
      {
        "name": "contactId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier for a Contact",
        "example": "00000000-0000-0000-0000-000000000000"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/Contacts/{ContactID}/History",
    "method": "getContactHistory",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "Retrieves history records for a specific contact",
    "parameters": [
      {
        "name": "contactId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier for a Contact",
        "example": "00000000-0000-0000-0000-000000000000"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/Contacts/{ContactID}/History",
    "method": "createContactHistory",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "Creates a new history record for a specific contact",
    "parameters": [
      {
        "name": "idempotencyKey",
        "schema": "string",
        "description": "This allows you to safely retry requests without the risk of duplicate processing. 128 character max.",
        "example": "KEY_VALUE"
      },
      {
        "name": "contactId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier for a Contact",
        "example": "00000000-0000-0000-0000-000000000000"
      },
      {
        "name": "HistoryRecords",
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
      }
    ]
  },
  {
    "url": "/ContactGroups",
    "method": "getContactGroupDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "Retrieves the contact Id and name of each contact group",
    "parameters": [
      {
        "name": "where",
        "schema": "string",
        "description": "Filter by an any element",
        "example": "Status==\"ACTIVE\""
      },
      {
        "name": "order",
        "schema": "string",
        "description": "Order by an any element",
        "example": "Name ASC"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/ContactGroups",
    "method": "createContactGroup",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "Creates a contact group",
    "parameters": [
      {
        "name": "idempotencyKey",
        "schema": "string",
        "description": "This allows you to safely retry requests without the risk of duplicate processing. 128 character max.",
        "example": "KEY_VALUE"
      },
      {
        "name": "ContactGroups",
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
      }
    ]
  },
  {
    "url": "/ContactGroups/{ContactGroupID}",
    "method": "getContactGroupById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "Retrieves a specific contact group by using a unique contact group Id",
    "parameters": [
      {
        "name": "contactGroupId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier for a Contact Group",
        "example": "00000000-0000-0000-0000-000000000000"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/ContactGroups/{ContactGroupID}",
    "method": "updateContactGroup",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "Updates a specific contact group",
    "parameters": [
      {
        "name": "idempotencyKey",
        "schema": "string",
        "description": "This allows you to safely retry requests without the risk of duplicate processing. 128 character max.",
        "example": "KEY_VALUE"
      },
      {
        "name": "contactGroupId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier for a Contact Group",
        "example": "00000000-0000-0000-0000-000000000000"
      },
      {
        "name": "ContactGroups",
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
      }
    ]
  },
  {
    "url": "/ContactGroups/{ContactGroupID}/Contacts",
    "method": "deleteContactsFromGroup",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "Deletes all contacts from a specific contact group",
    "parameters": [
      {
        "name": "contactGroupId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier for a Contact Group",
        "example": "00000000-0000-0000-0000-000000000000"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Success - return response 204 no content"
      }
    ]
  },
  {
    "url": "/ContactGroups/{ContactGroupID}/Contacts",
    "method": "addContactsToGroup",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "Creates contacts to a specific contact group",
    "parameters": [
      {
        "name": "idempotencyKey",
        "schema": "string",
        "description": "This allows you to safely retry requests without the risk of duplicate processing. 128 character max.",
        "example": "KEY_VALUE"
      },
      {
        "name": "contactGroupId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier for a Contact Group",
        "example": "00000000-0000-0000-0000-000000000000"
      },
      {
        "name": "Contacts",
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
      }
    ]
  },
  {
    "url": "/ContactGroups/{ContactGroupID}/Contacts/{ContactID}",
    "method": "deleteContactFromGroup",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "Deletes a specific contact from a contact group using a unique contact Id",
    "parameters": [
      {
        "name": "contactGroupId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier for a Contact Group",
        "example": "00000000-0000-0000-0000-000000000000"
      },
      {
        "name": "contactId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier for a Contact",
        "example": "00000000-0000-0000-0000-000000000000"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Success - return response 204 no content"
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/CreditNotes",
    "method": "getCreditNotes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "Retrieves any credit notes",
    "parameters": [
      {
        "name": "ifModifiedSince",
        "schema": "string",
        "description": "Only records created or modified since this timestamp will be returned",
        "example": "2020-02-06T12:17:43.202-08:00"
      },
      {
        "name": "where",
        "schema": "string",
        "description": "Filter by an any element",
        "example": "Status==\"DRAFT\""
      },
      {
        "name": "order",
        "schema": "string",
        "description": "Order by an any element",
        "example": "CreditNoteNumber ASC"
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "e.g. page=1 – Up to 100 credit notes will be returned in a single API call with line items shown for each credit note",
        "example": 1
      },
      {
        "name": "unitdp",
        "schema": "integer",
        "description": "e.g. unitdp=4 – (Unit Decimal Places) You can opt in to use four decimal places for unit amounts",
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
    "url": "/CreditNotes",
    "method": "updateOrCreateCreditNotes",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "Updates or creates one or more credit notes",
    "parameters": [
      {
        "name": "summarizeErrors",
        "schema": "boolean",
        "description": "If false return 200 OK and mix of successfully created objects and any with validation errors",
        "example": true,
        "default": false
      },
      {
        "name": "unitdp",
        "schema": "integer",
        "description": "e.g. unitdp=4 – (Unit Decimal Places) You can opt in to use four decimal places for unit amounts",
        "example": 4
      },
      {
        "name": "idempotencyKey",
        "schema": "string",
        "description": "This allows you to safely retry requests without the risk of duplicate processing. 128 character max.",
        "example": "KEY_VALUE"
      },
      {
        "name": "CreditNotes",
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
      }
    ]
  },
  {
    "url": "/CreditNotes",
    "method": "createCreditNote",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "Creates a new credit note",
    "parameters": [
      {
        "name": "summarizeErrors",
        "schema": "boolean",
        "description": "If false return 200 OK and mix of successfully created objects and any with validation errors",
        "example": true,
        "default": false
      },
      {
        "name": "unitdp",
        "schema": "integer",
        "description": "e.g. unitdp=4 – (Unit Decimal Places) You can opt in to use four decimal places for unit amounts",
        "example": 4
      },
      {
        "name": "idempotencyKey",
        "schema": "string",
        "description": "This allows you to safely retry requests without the risk of duplicate processing. 128 character max.",
        "example": "KEY_VALUE"
      },
      {
        "name": "CreditNotes",
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
      }
    ]
  },
  {
    "url": "/CreditNotes/{CreditNoteID}",
    "method": "getCreditNoteById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "Retrieves a specific credit note using a unique credit note Id",
    "parameters": [
      {
        "name": "creditNoteId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier for a Credit Note",
        "example": "00000000-0000-0000-0000-000000000000"
      },
      {
        "name": "unitdp",
        "schema": "integer",
        "description": "e.g. unitdp=4 – (Unit Decimal Places) You can opt in to use four decimal places for unit amounts",
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
    "url": "/CreditNotes/{CreditNoteID}",
    "method": "updateCreditNote",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "Updates a specific credit note",
    "parameters": [
      {
        "name": "creditNoteId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier for a Credit Note",
        "example": "00000000-0000-0000-0000-000000000000"
      },
      {
        "name": "unitdp",
        "schema": "integer",
        "description": "e.g. unitdp=4 – (Unit Decimal Places) You can opt in to use four decimal places for unit amounts",
        "example": 4
      },
      {
        "name": "idempotencyKey",
        "schema": "string",
        "description": "This allows you to safely retry requests without the risk of duplicate processing. 128 character max.",
        "example": "KEY_VALUE"
      },
      {
        "name": "CreditNotes",
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
      }
    ]
  },
  {
    "url": "/CreditNotes/{CreditNoteID}/Attachments",
    "method": "getCreditNoteAttachments",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "Retrieves attachments for a specific credit notes",
    "parameters": [
      {
        "name": "creditNoteId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier for a Credit Note",
        "example": "00000000-0000-0000-0000-000000000000"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/CreditNotes/{CreditNoteID}/Attachments/{AttachmentID}",
    "method": "getCreditNoteAttachment",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "Retrieves a specific attachment from a specific credit note using a unique attachment Id",
    "parameters": [
      {
        "name": "creditNoteId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier for a Credit Note",
        "example": "00000000-0000-0000-0000-000000000000"
      },
      {
        "name": "attachmentId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier for Attachment object",
        "example": "00000000-0000-0000-0000-000000000000"
      },
      {
        "name": "contentType",
        "schema": "string",
        "required": true,
        "description": "The mime type of the attachment file you are retrieving i.e image/jpg, application/pdf",
        "example": "image/jpg"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/CreditNotes/{CreditNoteID}/Attachments/{FileName}",
    "method": "getSpecificAttachment",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "Retrieves a specific attachment on a specific credit note by file name",
    "parameters": [
      {
        "name": "creditNoteId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier for a Credit Note",
        "example": "00000000-0000-0000-0000-000000000000"
      },
      {
        "name": "fileName",
        "schema": "string",
        "required": true,
        "description": "Name of the attachment",
        "example": "xero-dev.jpg"
      },
      {
        "name": "contentType",
        "schema": "string",
        "required": true,
        "description": "The mime type of the attachment file you are retrieving i.e image/jpg, application/pdf",
        "example": "image/jpg"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/CreditNotes/{CreditNoteID}/Attachments/{FileName}",
    "method": "updateAttachmentsByFileName",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "Updates attachments on a specific credit note by file name",
    "parameters": [
      {
        "name": "idempotencyKey",
        "schema": "string",
        "description": "This allows you to safely retry requests without the risk of duplicate processing. 128 character max.",
        "example": "KEY_VALUE"
      },
      {
        "name": "creditNoteId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier for a Credit Note",
        "example": "00000000-0000-0000-0000-000000000000"
      },
      {
        "name": "fileName",
        "schema": "string",
        "required": true,
        "description": "Name of the attachment",
        "example": "xero-dev.jpg"
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
    "url": "/CreditNotes/{CreditNoteID}/Attachments/{FileName}",
    "method": "updateCreditNoteAttachment",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "Creates an attachment for a specific credit note",
    "parameters": [
      {
        "name": "creditNoteId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier for a Credit Note",
        "example": "00000000-0000-0000-0000-000000000000"
      },
      {
        "name": "fileName",
        "schema": "string",
        "required": true,
        "description": "Name of the attachment",
        "example": "xero-dev.jpg"
      },
      {
        "name": "includeOnline",
        "schema": "boolean",
        "description": "Allows an attachment to be seen by the end customer within their online invoice",
        "example": true,
        "default": false
      },
      {
        "name": "idempotencyKey",
        "schema": "string",
        "description": "This allows you to safely retry requests without the risk of duplicate processing. 128 character max.",
        "example": "KEY_VALUE"
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
    "url": "/CreditNotes/{CreditNoteID}/pdf",
    "method": "getCreditNotePdf",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "Retrieves credit notes as PDF files",
    "parameters": [
      {
        "name": "creditNoteId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier for a Credit Note",
        "example": "00000000-0000-0000-0000-000000000000"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/CreditNotes/{CreditNoteID}/Allocations",
    "method": "createCreditNoteAllocations",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "Creates allocation for a specific credit note",
    "parameters": [
      {
        "name": "creditNoteId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier for a Credit Note",
        "example": "00000000-0000-0000-0000-000000000000"
      },
      {
        "name": "summarizeErrors",
        "schema": "boolean",
        "description": "If false return 200 OK and mix of successfully created objects and any with validation errors",
        "example": true,
        "default": false
      },
      {
        "name": "idempotencyKey",
        "schema": "string",
        "description": "This allows you to safely retry requests without the risk of duplicate processing. 128 character max.",
        "example": "KEY_VALUE"
      },
      {
        "name": "Allocations",
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
      }
    ]
  },
  {
    "url": "/CreditNotes/{CreditNoteID}/Allocations/{AllocationID}",
    "method": "deleteAllocationFromCreditNote",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "Deletes an Allocation from a Credit Note",
    "parameters": [
      {
        "name": "creditNoteId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier for a Credit Note",
        "example": "00000000-0000-0000-0000-000000000000"
      },
      {
        "name": "allocationId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier for Allocation object",
        "example": "00000000-0000-0000-0000-000000000000"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/CreditNotes/{CreditNoteID}/History",
    "method": "getCreditNoteHistory",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "Retrieves history records of a specific credit note",
    "parameters": [
      {
        "name": "creditNoteId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier for a Credit Note",
        "example": "00000000-0000-0000-0000-000000000000"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/CreditNotes/{CreditNoteID}/History",
    "method": "getCreditNoteHistory",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "Retrieves history records of a specific credit note",
    "parameters": [
      {
        "name": "idempotencyKey",
        "schema": "string",
        "description": "This allows you to safely retry requests without the risk of duplicate processing. 128 character max.",
        "example": "KEY_VALUE"
      },
      {
        "name": "creditNoteId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier for a Credit Note",
        "example": "00000000-0000-0000-0000-000000000000"
      },
      {
        "name": "HistoryRecords",
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
      }
    ]
  },
  {
    "url": "/Currencies",
    "method": "getCurrencies",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "Retrieves currencies for your Xero organisation",
    "parameters": [
      {
        "name": "where",
        "schema": "string",
        "description": "Filter by an any element",
        "example": "Code==\"USD\""
      },
      {
        "name": "order",
        "schema": "string",
        "description": "Order by an any element",
        "example": "Code ASC"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/Currencies",
    "method": "createCurrency",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "Create a new currency for a Xero organisation",
    "parameters": [
      {
        "name": "idempotencyKey",
        "schema": "string",
        "description": "This allows you to safely retry requests without the risk of duplicate processing. 128 character max.",
        "example": "KEY_VALUE"
      },
      {
        "name": "Code",
        "schema": "string",
        "description": ""
      },
      {
        "name": "Description",
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
    "url": "/Employees",
    "method": "getPayrunEmployees",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "Retrieves employees used in Xero payrun",
    "parameters": [
      {
        "name": "ifModifiedSince",
        "schema": "string",
        "description": "Only records created or modified since this timestamp will be returned",
        "example": "2020-02-06T12:17:43.202-08:00"
      },
      {
        "name": "where",
        "schema": "string",
        "description": "Filter by an any element",
        "example": "Status==\"ACTIVE\""
      },
      {
        "name": "order",
        "schema": "string",
        "description": "Order by an any element",
        "example": "LastName ASC"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/Employees",
    "method": "createXeroPayrunEmployee",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "Creates a single new employees used in Xero payrun",
    "parameters": [
      {
        "name": "summarizeErrors",
        "schema": "boolean",
        "description": "If false return 200 OK and mix of successfully created objects and any with validation errors",
        "example": true,
        "default": false
      },
      {
        "name": "idempotencyKey",
        "schema": "string",
        "description": "This allows you to safely retry requests without the risk of duplicate processing. 128 character max.",
        "example": "KEY_VALUE"
      },
      {
        "name": "Employees",
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
      }
    ]
  },
  {
    "url": "/Employees",
    "method": "createPayrunEmployees",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "Creates new employees used in Xero payrun",
    "parameters": [
      {
        "name": "summarizeErrors",
        "schema": "boolean",
        "description": "If false return 200 OK and mix of successfully created objects and any with validation errors",
        "example": true,
        "default": false
      },
      {
        "name": "idempotencyKey",
        "schema": "string",
        "description": "This allows you to safely retry requests without the risk of duplicate processing. 128 character max.",
        "example": "KEY_VALUE"
      },
      {
        "name": "Employees",
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
      }
    ]
  },
  {
    "url": "/Employees/{EmployeeID}",
    "method": "getEmployeeById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "Retrieves a specific employee used in Xero payrun using a unique employee Id",
    "parameters": [
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier for a Employee",
        "example": "00000000-0000-0000-0000-000000000000"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/ExpenseClaims",
    "method": "getExpenseClaims",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "Retrieves expense claims",
    "parameters": [
      {
        "name": "ifModifiedSince",
        "schema": "string",
        "description": "Only records created or modified since this timestamp will be returned",
        "example": "2020-02-06T12:17:43.202-08:00"
      },
      {
        "name": "where",
        "schema": "string",
        "description": "Filter by an any element",
        "example": "Status==\"SUBMITTED\""
      },
      {
        "name": "order",
        "schema": "string",
        "description": "Order by an any element",
        "example": "Status ASC"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/ExpenseClaims",
    "method": "createExpenseClaims",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "Creates expense claims",
    "parameters": [
      {
        "name": "idempotencyKey",
        "schema": "string",
        "description": "This allows you to safely retry requests without the risk of duplicate processing. 128 character max.",
        "example": "KEY_VALUE"
      },
      {
        "name": "ExpenseClaims",
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
      }
    ]
  },
  {
    "url": "/ExpenseClaims/{ExpenseClaimID}",
    "method": "getExpenseClaimById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "Retrieves a specific expense claim using a unique expense claim Id",
    "parameters": [
      {
        "name": "expenseClaimId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier for a ExpenseClaim",
        "example": "00000000-0000-0000-0000-000000000000"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/ExpenseClaims/{ExpenseClaimID}",
    "method": "updateExpenseClaims",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "Updates a specific expense claims",
    "parameters": [
      {
        "name": "idempotencyKey",
        "schema": "string",
        "description": "This allows you to safely retry requests without the risk of duplicate processing. 128 character max.",
        "example": "KEY_VALUE"
      },
      {
        "name": "expenseClaimId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier for a ExpenseClaim",
        "example": "00000000-0000-0000-0000-000000000000"
      },
      {
        "name": "ExpenseClaims",
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
      }
    ]
  },
  {
    "url": "/ExpenseClaims/{ExpenseClaimID}/History",
    "method": "getExpenseClaimHistory",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "Retrieves history records of a specific expense claim",
    "parameters": [
      {
        "name": "expenseClaimId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier for a ExpenseClaim",
        "example": "00000000-0000-0000-0000-000000000000"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/ExpenseClaims/{ExpenseClaimID}/History",
    "method": "recordExpenseClaimHistory",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "Creates a history record for a specific expense claim",
    "parameters": [
      {
        "name": "idempotencyKey",
        "schema": "string",
        "description": "This allows you to safely retry requests without the risk of duplicate processing. 128 character max.",
        "example": "KEY_VALUE"
      },
      {
        "name": "expenseClaimId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier for a ExpenseClaim",
        "example": "00000000-0000-0000-0000-000000000000"
      },
      {
        "name": "HistoryRecords",
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
    "url": "/Invoices",
    "method": "getSalesInvoices",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "Retrieves sales invoices or purchase bills",
    "parameters": [
      {
        "name": "ifModifiedSince",
        "schema": "string",
        "description": "Only records created or modified since this timestamp will be returned",
        "example": "2020-02-06T12:17:43.202-08:00"
      },
      {
        "name": "where",
        "schema": "string",
        "description": "Filter by an any element",
        "example": "Status==\"DRAFT\""
      },
      {
        "name": "order",
        "schema": "string",
        "description": "Order by an any element",
        "example": "InvoiceNumber ASC"
      },
      {
        "name": "iDs",
        "schema": "array",
        "description": "Filter by a comma-separated list of InvoicesIDs.",
        "example": "&quot;00000000-0000-0000-0000-000000000000&quot;"
      },
      {
        "name": "invoiceNumbers",
        "schema": "array",
        "description": "Filter by a comma-separated list of InvoiceNumbers.",
        "example": "&quot;INV-001&quot;, &quot;INV-002&quot;"
      },
      {
        "name": "contactIDs",
        "schema": "array",
        "description": "Filter by a comma-separated list of ContactIDs.",
        "example": "&quot;00000000-0000-0000-0000-000000000000&quot;"
      },
      {
        "name": "statuses",
        "schema": "array",
        "description": "Filter by a comma-separated list Statuses. For faster response times we recommend using these explicit parameters instead of passing OR conditions into the Where filter.",
        "example": "&quot;DRAFT&quot;, &quot;SUBMITTED&quot;"
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "e.g. page=1 – Up to 100 invoices will be returned in a single API call with line items shown for each invoice",
        "example": 1
      },
      {
        "name": "includeArchived",
        "schema": "boolean",
        "description": "e.g. includeArchived=true - Invoices with a status of ARCHIVED will be included in the response",
        "example": true
      },
      {
        "name": "createdByMyApp",
        "schema": "boolean",
        "description": "When set to true you'll only retrieve Invoices created by your app",
        "example": false
      },
      {
        "name": "unitdp",
        "schema": "integer",
        "description": "e.g. unitdp=4 – (Unit Decimal Places) You can opt in to use four decimal places for unit amounts",
        "example": 4
      },
      {
        "name": "summaryOnly",
        "schema": "boolean",
        "description": "Use summaryOnly=true in GET Contacts and Invoices endpoint to retrieve a smaller version of the response object. This returns only lightweight fields, excluding computation-heavy fields from the response, making the API calls quick and efficient.",
        "example": true,
        "default": false
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/Invoices",
    "method": "updateOrCreateInvoices",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "Updates or creates one or more sales invoices or purchase bills",
    "parameters": [
      {
        "name": "summarizeErrors",
        "schema": "boolean",
        "description": "If false return 200 OK and mix of successfully created objects and any with validation errors",
        "example": true,
        "default": false
      },
      {
        "name": "unitdp",
        "schema": "integer",
        "description": "e.g. unitdp=4 – (Unit Decimal Places) You can opt in to use four decimal places for unit amounts",
        "example": 4
      },
      {
        "name": "idempotencyKey",
        "schema": "string",
        "description": "This allows you to safely retry requests without the risk of duplicate processing. 128 character max.",
        "example": "KEY_VALUE"
      },
      {
        "name": "Invoices",
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
      }
    ]
  },
  {
    "url": "/Invoices",
    "method": "createInvoices",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "Creates one or more sales invoices or purchase bills",
    "parameters": [
      {
        "name": "summarizeErrors",
        "schema": "boolean",
        "description": "If false return 200 OK and mix of successfully created objects and any with validation errors",
        "example": true,
        "default": false
      },
      {
        "name": "unitdp",
        "schema": "integer",
        "description": "e.g. unitdp=4 – (Unit Decimal Places) You can opt in to use four decimal places for unit amounts",
        "example": 4
      },
      {
        "name": "idempotencyKey",
        "schema": "string",
        "description": "This allows you to safely retry requests without the risk of duplicate processing. 128 character max.",
        "example": "KEY_VALUE"
      },
      {
        "name": "Invoices",
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
      }
    ]
  },
  {
    "url": "/Invoices/{InvoiceID}",
    "method": "getInvoiceById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "Retrieves a specific sales invoice or purchase bill using a unique invoice Id",
    "parameters": [
      {
        "name": "invoiceId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier for an Invoice",
        "example": "00000000-0000-0000-0000-000000000000"
      },
      {
        "name": "unitdp",
        "schema": "integer",
        "description": "e.g. unitdp=4 – (Unit Decimal Places) You can opt in to use four decimal places for unit amounts",
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
    "url": "/Invoices/{InvoiceID}",
    "method": "updateSpecificInvoice",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "Updates a specific sales invoices or purchase bills",
    "parameters": [
      {
        "name": "invoiceId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier for an Invoice",
        "example": "00000000-0000-0000-0000-000000000000"
      },
      {
        "name": "unitdp",
        "schema": "integer",
        "description": "e.g. unitdp=4 – (Unit Decimal Places) You can opt in to use four decimal places for unit amounts",
        "example": 4
      },
      {
        "name": "idempotencyKey",
        "schema": "string",
        "description": "This allows you to safely retry requests without the risk of duplicate processing. 128 character max.",
        "example": "KEY_VALUE"
      },
      {
        "name": "Invoices",
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
      }
    ]
  },
  {
    "url": "/Invoices/{InvoiceID}/pdf",
    "method": "getInvoicePdf",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "Retrieves invoices or purchase bills as PDF files",
    "parameters": [
      {
        "name": "invoiceId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier for an Invoice",
        "example": "00000000-0000-0000-0000-000000000000"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/Invoices/{InvoiceID}/Attachments",
    "method": "getInvoiceAttachments",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "Retrieves attachments for a specific invoice or purchase bill",
    "parameters": [
      {
        "name": "invoiceId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier for an Invoice",
        "example": "00000000-0000-0000-0000-000000000000"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/Invoices/{InvoiceID}/Attachments/{AttachmentID}",
    "method": "getAttachment",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "Retrieves a specific attachment from a specific invoices or purchase bills by using a unique attachment Id",
    "parameters": [
      {
        "name": "invoiceId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier for an Invoice",
        "example": "00000000-0000-0000-0000-000000000000"
      },
      {
        "name": "attachmentId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier for Attachment object",
        "example": "00000000-0000-0000-0000-000000000000"
      },
      {
        "name": "contentType",
        "schema": "string",
        "required": true,
        "description": "The mime type of the attachment file you are retrieving i.e image/jpg, application/pdf",
        "example": "image/jpg"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/Invoices/{InvoiceID}/Attachments/{FileName}",
    "method": "getAttachmentByFileName",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "Retrieves an attachment from a specific invoice or purchase bill by filename",
    "parameters": [
      {
        "name": "invoiceId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier for an Invoice",
        "example": "00000000-0000-0000-0000-000000000000"
      },
      {
        "name": "fileName",
        "schema": "string",
        "required": true,
        "description": "Name of the attachment",
        "example": "xero-dev.jpg"
      },
      {
        "name": "contentType",
        "schema": "string",
        "required": true,
        "description": "The mime type of the attachment file you are retrieving i.e image/jpg, application/pdf",
        "example": "image/jpg"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/Invoices/{InvoiceID}/Attachments/{FileName}",
    "method": "updateAttachment",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "Updates an attachment from a specific invoices or purchase bill by filename",
    "parameters": [
      {
        "name": "idempotencyKey",
        "schema": "string",
        "description": "This allows you to safely retry requests without the risk of duplicate processing. 128 character max.",
        "example": "KEY_VALUE"
      },
      {
        "name": "invoiceId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier for an Invoice",
        "example": "00000000-0000-0000-0000-000000000000"
      },
      {
        "name": "fileName",
        "schema": "string",
        "required": true,
        "description": "Name of the attachment",
        "example": "xero-dev.jpg"
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
    "url": "/Invoices/{InvoiceID}/Attachments/{FileName}",
    "method": "createAttachment",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "Creates an attachment for a specific invoice or purchase bill by filename",
    "parameters": [
      {
        "name": "invoiceId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier for an Invoice",
        "example": "00000000-0000-0000-0000-000000000000"
      },
      {
        "name": "fileName",
        "schema": "string",
        "required": true,
        "description": "Name of the attachment",
        "example": "xero-dev.jpg"
      },
      {
        "name": "includeOnline",
        "schema": "boolean",
        "description": "Allows an attachment to be seen by the end customer within their online invoice",
        "example": true,
        "default": false
      },
      {
        "name": "idempotencyKey",
        "schema": "string",
        "description": "This allows you to safely retry requests without the risk of duplicate processing. 128 character max.",
        "example": "KEY_VALUE"
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
    "url": "/Invoices/{InvoiceID}/OnlineInvoice",
    "method": "getOnlineInvoiceUrl",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "Retrieves a URL to an online invoice",
    "parameters": [
      {
        "name": "invoiceId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier for an Invoice",
        "example": "00000000-0000-0000-0000-000000000000"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/Invoices/{InvoiceID}/Email",
    "method": "sendInvoiceByEmail",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "Sends a copy of a specific invoice to related contact via email",
    "parameters": [
      {
        "name": "idempotencyKey",
        "schema": "string",
        "description": "This allows you to safely retry requests without the risk of duplicate processing. 128 character max.",
        "example": "KEY_VALUE"
      },
      {
        "name": "invoiceId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier for an Invoice",
        "example": "00000000-0000-0000-0000-000000000000"
      },
      {
        "name": "Status",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Success - return response 204 no content"
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/Invoices/{InvoiceID}/History",
    "method": "getInvoiceHistory",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "Retrieves history records for a specific invoice",
    "parameters": [
      {
        "name": "invoiceId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier for an Invoice",
        "example": "00000000-0000-0000-0000-000000000000"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/Invoices/{InvoiceID}/History",
    "method": "createInvoiceHistory",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "Creates a history record for a specific invoice",
    "parameters": [
      {
        "name": "idempotencyKey",
        "schema": "string",
        "description": "This allows you to safely retry requests without the risk of duplicate processing. 128 character max.",
        "example": "KEY_VALUE"
      },
      {
        "name": "invoiceId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier for an Invoice",
        "example": "00000000-0000-0000-0000-000000000000"
      },
      {
        "name": "HistoryRecords",
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
      }
    ]
  },
  {
    "url": "/InvoiceReminders/Settings",
    "method": "getInvoiceReminderSettings",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "Retrieves invoice reminder settings",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/Items",
    "method": "getItems",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "Retrieves items",
    "parameters": [
      {
        "name": "ifModifiedSince",
        "schema": "string",
        "description": "Only records created or modified since this timestamp will be returned",
        "example": "2020-02-06T12:17:43.202-08:00"
      },
      {
        "name": "where",
        "schema": "string",
        "description": "Filter by an any element",
        "example": "IsSold==true"
      },
      {
        "name": "order",
        "schema": "string",
        "description": "Order by an any element",
        "example": "Code ASC"
      },
      {
        "name": "unitdp",
        "schema": "integer",
        "description": "e.g. unitdp=4 – (Unit Decimal Places) You can opt in to use four decimal places for unit amounts",
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
    "url": "/Items",
    "method": "updateItems",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "Updates or creates one or more items",
    "parameters": [
      {
        "name": "summarizeErrors",
        "schema": "boolean",
        "description": "If false return 200 OK and mix of successfully created objects and any with validation errors",
        "example": true,
        "default": false
      },
      {
        "name": "unitdp",
        "schema": "integer",
        "description": "e.g. unitdp=4 – (Unit Decimal Places) You can opt in to use four decimal places for unit amounts",
        "example": 4
      },
      {
        "name": "idempotencyKey",
        "schema": "string",
        "description": "This allows you to safely retry requests without the risk of duplicate processing. 128 character max.",
        "example": "KEY_VALUE"
      },
      {
        "name": "Items",
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
      }
    ]
  },
  {
    "url": "/Items",
    "method": "createItems",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "Creates one or more items",
    "parameters": [
      {
        "name": "summarizeErrors",
        "schema": "boolean",
        "description": "If false return 200 OK and mix of successfully created objects and any with validation errors",
        "example": true,
        "default": false
      },
      {
        "name": "unitdp",
        "schema": "integer",
        "description": "e.g. unitdp=4 – (Unit Decimal Places) You can opt in to use four decimal places for unit amounts",
        "example": 4
      },
      {
        "name": "idempotencyKey",
        "schema": "string",
        "description": "This allows you to safely retry requests without the risk of duplicate processing. 128 character max.",
        "example": "KEY_VALUE"
      },
      {
        "name": "Items",
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
      }
    ]
  },
  {
    "url": "/Items/{ItemID}",
    "method": "deleteItem",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "Deletes a specific item",
    "parameters": [
      {
        "name": "itemId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier for an Item",
        "example": "00000000-0000-0000-0000-000000000000"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Success - return response 204 no content"
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/Items/{ItemID}",
    "method": "getItemById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "Retrieves a specific item using a unique item Id",
    "parameters": [
      {
        "name": "itemId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier for an Item",
        "example": "00000000-0000-0000-0000-000000000000"
      },
      {
        "name": "unitdp",
        "schema": "integer",
        "description": "e.g. unitdp=4 – (Unit Decimal Places) You can opt in to use four decimal places for unit amounts",
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
    "url": "/Items/{ItemID}",
    "method": "updateItem",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "Updates a specific item",
    "parameters": [
      {
        "name": "itemId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier for an Item",
        "example": "00000000-0000-0000-0000-000000000000"
      },
      {
        "name": "unitdp",
        "schema": "integer",
        "description": "e.g. unitdp=4 – (Unit Decimal Places) You can opt in to use four decimal places for unit amounts",
        "example": 4
      },
      {
        "name": "idempotencyKey",
        "schema": "string",
        "description": "This allows you to safely retry requests without the risk of duplicate processing. 128 character max.",
        "example": "KEY_VALUE"
      },
      {
        "name": "Items",
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
      }
    ]
  },
  {
    "url": "/Items/{ItemID}/History",
    "method": "getItemHistory",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "Retrieves history for a specific item",
    "parameters": [
      {
        "name": "itemId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier for an Item",
        "example": "00000000-0000-0000-0000-000000000000"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/Items/{ItemID}/History",
    "method": "createItemHistoryRecord",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "Creates a history record for a specific item",
    "parameters": [
      {
        "name": "idempotencyKey",
        "schema": "string",
        "description": "This allows you to safely retry requests without the risk of duplicate processing. 128 character max.",
        "example": "KEY_VALUE"
      },
      {
        "name": "itemId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier for an Item",
        "example": "00000000-0000-0000-0000-000000000000"
      },
      {
        "name": "HistoryRecords",
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
    "url": "/Journals",
    "method": "getJournals",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "Retrieves journals",
    "parameters": [
      {
        "name": "ifModifiedSince",
        "schema": "string",
        "description": "Only records created or modified since this timestamp will be returned",
        "example": "2020-02-06T12:17:43.202-08:00"
      },
      {
        "name": "offset",
        "schema": "integer",
        "description": "Offset by a specified journal number. e.g. journals with a JournalNumber greater than the offset will be returned",
        "example": 10
      },
      {
        "name": "paymentsOnly",
        "schema": "boolean",
        "description": "Filter to retrieve journals on a cash basis. Journals are returned on an accrual basis by default.",
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
    "url": "/Journals/{JournalID}",
    "method": "getJournalById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "Retrieves a specific journal using a unique journal Id.",
    "parameters": [
      {
        "name": "journalId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier for a Journal",
        "example": "00000000-0000-0000-0000-000000000000"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/Journals/{JournalNumber}",
    "method": "getJournalByNumber",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "Retrieves a specific journal using a unique journal number.",
    "parameters": [
      {
        "name": "journalNumber",
        "schema": "integer",
        "required": true,
        "description": "Number of a Journal",
        "example": 1000
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/LinkedTransactions",
    "method": "getLinkedTransactions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "Retrieves linked transactions (billable expenses)",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "description": "Up to 100 linked transactions will be returned in a single API call. Use the page parameter to specify the page to be returned e.g. page=1.",
        "example": 1
      },
      {
        "name": "linkedTransactionId",
        "schema": "string",
        "description": "The Xero identifier for an Linked Transaction",
        "example": "00000000-0000-0000-0000-000000000000"
      },
      {
        "name": "sourceTransactionId",
        "schema": "string",
        "description": "Filter by the SourceTransactionID. Get the linked transactions created from a particular ACCPAY invoice",
        "example": "00000000-0000-0000-0000-000000000000"
      },
      {
        "name": "contactId",
        "schema": "string",
        "description": "Filter by the ContactID. Get all the linked transactions that have been assigned to a particular customer.",
        "example": "00000000-0000-0000-0000-000000000000"
      },
      {
        "name": "status",
        "schema": "string",
        "description": "Filter by the combination of ContactID and Status. Get  the linked transactions associated to a  customer and with a status",
        "example": "APPROVED"
      },
      {
        "name": "targetTransactionId",
        "schema": "string",
        "description": "Filter by the TargetTransactionID. Get all the linked transactions allocated to a particular ACCREC invoice",
        "example": "00000000-0000-0000-0000-000000000000"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/LinkedTransactions",
    "method": "createLinkedTransactions",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "Creates linked transactions (billable expenses)",
    "parameters": [
      {
        "name": "idempotencyKey",
        "schema": "string",
        "description": "This allows you to safely retry requests without the risk of duplicate processing. 128 character max.",
        "example": "KEY_VALUE"
      },
      {
        "name": "SourceTransactionID",
        "schema": "string",
        "description": ""
      },
      {
        "name": "SourceLineItemID",
        "schema": "string",
        "description": ""
      },
      {
        "name": "ContactID",
        "schema": "string",
        "description": ""
      },
      {
        "name": "TargetTransactionID",
        "schema": "string",
        "description": ""
      },
      {
        "name": "TargetLineItemID",
        "schema": "string",
        "description": ""
      },
      {
        "name": "LinkedTransactionID",
        "schema": "string",
        "description": ""
      },
      {
        "name": "Status",
        "schema": "string",
        "description": ""
      },
      {
        "name": "Type",
        "schema": "string",
        "description": ""
      },
      {
        "name": "UpdatedDateUTC",
        "schema": "string",
        "description": "",
        "example": "/Date(https://developer.xero.com/documentation/api/accounting/overview/"
      },
      {
        "name": "SourceTransactionTypeCode",
        "schema": "string",
        "description": ""
      },
      {
        "name": "ValidationErrors",
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
      }
    ]
  },
  {
    "url": "/LinkedTransactions/{LinkedTransactionID}",
    "method": "deleteLinkedTransaction",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "Deletes a specific linked transactions (billable expenses)",
    "parameters": [
      {
        "name": "linkedTransactionId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier for a LinkedTransaction",
        "example": "00000000-0000-0000-0000-000000000000"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Success - return response 204 no content"
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/LinkedTransactions/{LinkedTransactionID}",
    "method": "getLinkedTransaction",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "Retrieves a specific linked transaction (billable expenses) using a unique linked transaction Id",
    "parameters": [
      {
        "name": "linkedTransactionId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier for a LinkedTransaction",
        "example": "00000000-0000-0000-0000-000000000000"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/LinkedTransactions/{LinkedTransactionID}",
    "method": "updateLinkedTransaction",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "Updates a specific linked transactions (billable expenses)",
    "parameters": [
      {
        "name": "idempotencyKey",
        "schema": "string",
        "description": "This allows you to safely retry requests without the risk of duplicate processing. 128 character max.",
        "example": "KEY_VALUE"
      },
      {
        "name": "linkedTransactionId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier for a LinkedTransaction",
        "example": "00000000-0000-0000-0000-000000000000"
      },
      {
        "name": "LinkedTransactions",
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
      }
    ]
  },
  {
    "url": "/ManualJournals",
    "method": "getManualJournals",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "Retrieves manual journals",
    "parameters": [
      {
        "name": "ifModifiedSince",
        "schema": "string",
        "description": "Only records created or modified since this timestamp will be returned",
        "example": "2020-02-06T12:17:43.202-08:00"
      },
      {
        "name": "where",
        "schema": "string",
        "description": "Filter by an any element",
        "example": "Status==\"DRAFT\""
      },
      {
        "name": "order",
        "schema": "string",
        "description": "Order by an any element",
        "example": "Date ASC"
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "e.g. page=1 – Up to 100 manual journals will be returned in a single API call with line items shown for each overpayment",
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
    "url": "/ManualJournals",
    "method": "updateOrCreateManualJournal",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "Updates or creates a single manual journal",
    "parameters": [
      {
        "name": "summarizeErrors",
        "schema": "boolean",
        "description": "If false return 200 OK and mix of successfully created objects and any with validation errors",
        "example": true,
        "default": false
      },
      {
        "name": "idempotencyKey",
        "schema": "string",
        "description": "This allows you to safely retry requests without the risk of duplicate processing. 128 character max.",
        "example": "KEY_VALUE"
      },
      {
        "name": "ManualJournals",
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
      }
    ]
  },
  {
    "url": "/ManualJournals",
    "method": "createManualJournals",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "Creates one or more manual journals",
    "parameters": [
      {
        "name": "summarizeErrors",
        "schema": "boolean",
        "description": "If false return 200 OK and mix of successfully created objects and any with validation errors",
        "example": true,
        "default": false
      },
      {
        "name": "idempotencyKey",
        "schema": "string",
        "description": "This allows you to safely retry requests without the risk of duplicate processing. 128 character max.",
        "example": "KEY_VALUE"
      },
      {
        "name": "ManualJournals",
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
      }
    ]
  },
  {
    "url": "/ManualJournals/{ManualJournalID}",
    "method": "getManualJournal",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "Retrieves a specific manual journal",
    "parameters": [
      {
        "name": "manualJournalId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier for a ManualJournal",
        "example": "00000000-0000-0000-0000-000000000000"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/ManualJournals/{ManualJournalID}",
    "method": "updateManualJournal",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "Updates a specific manual journal",
    "parameters": [
      {
        "name": "idempotencyKey",
        "schema": "string",
        "description": "This allows you to safely retry requests without the risk of duplicate processing. 128 character max.",
        "example": "KEY_VALUE"
      },
      {
        "name": "manualJournalId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier for a ManualJournal",
        "example": "00000000-0000-0000-0000-000000000000"
      },
      {
        "name": "ManualJournals",
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
      }
    ]
  },
  {
    "url": "/ManualJournals/{ManualJournalID}/Attachments",
    "method": "getManualJournalAttachments",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "Retrieves attachment for a specific manual journal",
    "parameters": [
      {
        "name": "manualJournalId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier for a ManualJournal",
        "example": "00000000-0000-0000-0000-000000000000"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/ManualJournals/{ManualJournalID}/Attachments/{AttachmentID}",
    "method": "getAttachment",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "Allows you to retrieve a specific attachment from a specific manual journal using a unique attachment Id",
    "parameters": [
      {
        "name": "manualJournalId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier for a ManualJournal",
        "example": "00000000-0000-0000-0000-000000000000"
      },
      {
        "name": "attachmentId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier for Attachment object",
        "example": "00000000-0000-0000-0000-000000000000"
      },
      {
        "name": "contentType",
        "schema": "string",
        "required": true,
        "description": "The mime type of the attachment file you are retrieving i.e image/jpg, application/pdf",
        "example": "image/jpg"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/ManualJournals/{ManualJournalID}/Attachments/{FileName}",
    "method": "getSpecificAttachment",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "Retrieves a specific attachment from a specific manual journal by file name",
    "parameters": [
      {
        "name": "manualJournalId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier for a ManualJournal",
        "example": "00000000-0000-0000-0000-000000000000"
      },
      {
        "name": "fileName",
        "schema": "string",
        "required": true,
        "description": "Name of the attachment",
        "example": "xero-dev.jpg"
      },
      {
        "name": "contentType",
        "schema": "string",
        "required": true,
        "description": "The mime type of the attachment file you are retrieving i.e image/jpg, application/pdf",
        "example": "image/jpg"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/ManualJournals/{ManualJournalID}/Attachments/{FileName}",
    "method": "updateSpecificAttachment",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "Updates a specific attachment from a specific manual journal by file name",
    "parameters": [
      {
        "name": "idempotencyKey",
        "schema": "string",
        "description": "This allows you to safely retry requests without the risk of duplicate processing. 128 character max.",
        "example": "KEY_VALUE"
      },
      {
        "name": "manualJournalId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier for a ManualJournal",
        "example": "00000000-0000-0000-0000-000000000000"
      },
      {
        "name": "fileName",
        "schema": "string",
        "required": true,
        "description": "Name of the attachment",
        "example": "xero-dev.jpg"
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
    "url": "/ManualJournals/{ManualJournalID}/Attachments/{FileName}",
    "method": "createSpecificAttachment",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "Creates a specific attachment for a specific manual journal by file name",
    "parameters": [
      {
        "name": "idempotencyKey",
        "schema": "string",
        "description": "This allows you to safely retry requests without the risk of duplicate processing. 128 character max.",
        "example": "KEY_VALUE"
      },
      {
        "name": "manualJournalId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier for a ManualJournal",
        "example": "00000000-0000-0000-0000-000000000000"
      },
      {
        "name": "fileName",
        "schema": "string",
        "required": true,
        "description": "Name of the attachment",
        "example": "xero-dev.jpg"
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
    "url": "/ManualJournals/{ManualJournalID}/History",
    "method": "getManualJournalHistory",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "Retrieves history for a specific manual journal",
    "parameters": [
      {
        "name": "manualJournalId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier for a ManualJournal",
        "example": "00000000-0000-0000-0000-000000000000"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/ManualJournals/{ManualJournalID}/History",
    "method": "createManualJournalHistoryRecord",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "Creates a history record for a specific manual journal",
    "parameters": [
      {
        "name": "idempotencyKey",
        "schema": "string",
        "description": "This allows you to safely retry requests without the risk of duplicate processing. 128 character max.",
        "example": "KEY_VALUE"
      },
      {
        "name": "manualJournalId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier for a ManualJournal",
        "example": "00000000-0000-0000-0000-000000000000"
      },
      {
        "name": "HistoryRecords",
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
      }
    ]
  },
  {
    "url": "/Organisation",
    "method": "getOrganisationDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "Retrieves Xero organisation details",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/Organisation/Actions",
    "method": "getOrganisationActions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "Retrieves a list of the key actions your app has permission to perform in the connected Xero organisation.",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/Organisation/{OrganisationID}/CISSettings",
    "method": "getCisSettings",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "Retrieves the CIS settings for the Xero organistaion.",
    "parameters": [
      {
        "name": "organisationId",
        "schema": "string",
        "required": true,
        "description": "The unique Xero identifier for an organisation",
        "example": "00000000-0000-0000-0000-000000000000"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/Overpayments",
    "method": "getOverpayments",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "Retrieves overpayments",
    "parameters": [
      {
        "name": "ifModifiedSince",
        "schema": "string",
        "description": "Only records created or modified since this timestamp will be returned",
        "example": "2020-02-06T12:17:43.202-08:00"
      },
      {
        "name": "where",
        "schema": "string",
        "description": "Filter by an any element",
        "example": "Status==\"AUTHORISED\""
      },
      {
        "name": "order",
        "schema": "string",
        "description": "Order by an any element",
        "example": "Status ASC"
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "e.g. page=1 – Up to 100 overpayments will be returned in a single API call with line items shown for each overpayment",
        "example": 1
      },
      {
        "name": "unitdp",
        "schema": "integer",
        "description": "e.g. unitdp=4 – (Unit Decimal Places) You can opt in to use four decimal places for unit amounts",
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
    "url": "/Overpayments/{OverpaymentID}",
    "method": "getOverpaymentById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "Retrieves a specific overpayment using a unique overpayment Id",
    "parameters": [
      {
        "name": "overpaymentId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier for a Overpayment",
        "example": "00000000-0000-0000-0000-000000000000"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/Overpayments/{OverpaymentID}/Allocations",
    "method": "createSingleAllocation",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "Creates a single allocation for a specific overpayment",
    "parameters": [
      {
        "name": "overpaymentId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier for a Overpayment",
        "example": "00000000-0000-0000-0000-000000000000"
      },
      {
        "name": "summarizeErrors",
        "schema": "boolean",
        "description": "If false return 200 OK and mix of successfully created objects and any with validation errors",
        "example": true,
        "default": false
      },
      {
        "name": "idempotencyKey",
        "schema": "string",
        "description": "This allows you to safely retry requests without the risk of duplicate processing. 128 character max.",
        "example": "KEY_VALUE"
      },
      {
        "name": "Allocations",
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
      }
    ]
  },
  {
    "url": "/Overpayments/{OverpaymentID}/Allocations/{AllocationID}",
    "method": "deleteAllocationFromOverpayment",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "Deletes an Allocation from an overpayment",
    "parameters": [
      {
        "name": "overpaymentId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier for a Overpayment",
        "example": "00000000-0000-0000-0000-000000000000"
      },
      {
        "name": "allocationId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier for Allocation object",
        "example": "00000000-0000-0000-0000-000000000000"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/Overpayments/{OverpaymentID}/History",
    "method": "getOverpaymentHistory",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "Retrieves history records of a specific overpayment",
    "parameters": [
      {
        "name": "overpaymentId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier for a Overpayment",
        "example": "00000000-0000-0000-0000-000000000000"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/Overpayments/{OverpaymentID}/History",
    "method": "recordOverpaymentHistory",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "Creates a history record for a specific overpayment",
    "parameters": [
      {
        "name": "idempotencyKey",
        "schema": "string",
        "description": "This allows you to safely retry requests without the risk of duplicate processing. 128 character max.",
        "example": "KEY_VALUE"
      },
      {
        "name": "overpaymentId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier for a Overpayment",
        "example": "00000000-0000-0000-0000-000000000000"
      },
      {
        "name": "HistoryRecords",
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
      }
    ]
  },
  {
    "url": "/Payments",
    "method": "getPaymentsForInvoicesAndCreditNotes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "Retrieves payments for invoices and credit notes",
    "parameters": [
      {
        "name": "ifModifiedSince",
        "schema": "string",
        "description": "Only records created or modified since this timestamp will be returned",
        "example": "2020-02-06T12:17:43.202-08:00"
      },
      {
        "name": "where",
        "schema": "string",
        "description": "Filter by an any element",
        "example": "Status==\"AUTHORISED\""
      },
      {
        "name": "order",
        "schema": "string",
        "description": "Order by an any element",
        "example": "Amount ASC"
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "Up to 100 payments will be returned in a single API call",
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
    "url": "/Payments",
    "method": "createSinglePayment",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "Creates a single payment for invoice or credit notes",
    "parameters": [
      {
        "name": "idempotencyKey",
        "schema": "string",
        "description": "This allows you to safely retry requests without the risk of duplicate processing. 128 character max.",
        "example": "KEY_VALUE"
      },
      {
        "name": "Invoice",
        "schema": "object",
        "description": ""
      },
      {
        "name": "CreditNote",
        "schema": "object",
        "description": ""
      },
      {
        "name": "Prepayment",
        "schema": "object",
        "description": ""
      },
      {
        "name": "Overpayment",
        "schema": "object",
        "description": ""
      },
      {
        "name": "InvoiceNumber",
        "schema": "string",
        "description": ""
      },
      {
        "name": "CreditNoteNumber",
        "schema": "string",
        "description": ""
      },
      {
        "name": "BatchPayment",
        "schema": "object",
        "description": ""
      },
      {
        "name": "Account",
        "schema": "object",
        "description": ""
      },
      {
        "name": "Code",
        "schema": "string",
        "description": ""
      },
      {
        "name": "Date",
        "schema": "string",
        "description": ""
      },
      {
        "name": "CurrencyRate",
        "schema": "number",
        "description": ""
      },
      {
        "name": "Amount",
        "schema": "number",
        "description": ""
      },
      {
        "name": "BankAmount",
        "schema": "number",
        "description": ""
      },
      {
        "name": "Reference",
        "schema": "string",
        "description": ""
      },
      {
        "name": "IsReconciled",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "Status",
        "schema": "string",
        "description": ""
      },
      {
        "name": "PaymentType",
        "schema": "string",
        "description": ""
      },
      {
        "name": "UpdatedDateUTC",
        "schema": "string",
        "description": "",
        "example": "/Date(https://developer.xero.com/documentation/api/accounting/overview/"
      },
      {
        "name": "PaymentID",
        "schema": "string",
        "description": "",
        "example": "00000000-0000-0000-0000-000000000000"
      },
      {
        "name": "BatchPaymentID",
        "schema": "string",
        "description": "",
        "example": "00000000-0000-0000-0000-000000000000"
      },
      {
        "name": "BankAccountNumber",
        "schema": "string",
        "description": ""
      },
      {
        "name": "Particulars",
        "schema": "string",
        "description": ""
      },
      {
        "name": "Details",
        "schema": "string",
        "description": ""
      },
      {
        "name": "HasAccount",
        "schema": "boolean",
        "description": "",
        "example": false,
        "default": "false"
      },
      {
        "name": "HasValidationErrors",
        "schema": "boolean",
        "description": "",
        "example": false,
        "default": "false"
      },
      {
        "name": "StatusAttributeString",
        "schema": "string",
        "description": ""
      },
      {
        "name": "ValidationErrors",
        "schema": "array",
        "description": ""
      },
      {
        "name": "Warnings",
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
      }
    ]
  },
  {
    "url": "/Payments",
    "method": "createMultiplePayments",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "Creates multiple payments for invoices or credit notes",
    "parameters": [
      {
        "name": "summarizeErrors",
        "schema": "boolean",
        "description": "If false return 200 OK and mix of successfully created objects and any with validation errors",
        "example": true,
        "default": false
      },
      {
        "name": "idempotencyKey",
        "schema": "string",
        "description": "This allows you to safely retry requests without the risk of duplicate processing. 128 character max.",
        "example": "KEY_VALUE"
      },
      {
        "name": "Payments",
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
      }
    ]
  },
  {
    "url": "/Payments/{PaymentID}",
    "method": "getPaymentById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "Retrieves a specific payment for invoices and credit notes using a unique payment Id",
    "parameters": [
      {
        "name": "paymentId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier for a Payment",
        "example": "00000000-0000-0000-0000-000000000000"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/Payments/{PaymentID}",
    "method": "updatePaymentForInvoicesAndCreditNotes",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "Updates a specific payment for invoices and credit notes",
    "parameters": [
      {
        "name": "idempotencyKey",
        "schema": "string",
        "description": "This allows you to safely retry requests without the risk of duplicate processing. 128 character max.",
        "example": "KEY_VALUE"
      },
      {
        "name": "paymentId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier for a Payment",
        "example": "00000000-0000-0000-0000-000000000000"
      },
      {
        "name": "Status",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "STATUS",
        "default": "DELETED"
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
    "url": "/Payments/{PaymentID}/History",
    "method": "getPaymentHistory",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "Retrieves history records of a specific payment",
    "parameters": [
      {
        "name": "paymentId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier for a Payment",
        "example": "00000000-0000-0000-0000-000000000000"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/Payments/{PaymentID}/History",
    "method": "createPaymentHistoryRecord",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "Creates a history record for a specific payment",
    "parameters": [
      {
        "name": "idempotencyKey",
        "schema": "string",
        "description": "This allows you to safely retry requests without the risk of duplicate processing. 128 character max.",
        "example": "KEY_VALUE"
      },
      {
        "name": "paymentId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier for a Payment",
        "example": "00000000-0000-0000-0000-000000000000"
      },
      {
        "name": "HistoryRecords",
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
      }
    ]
  },
  {
    "url": "/PaymentServices",
    "method": "getPaymentServices",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "Retrieves payment services",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/PaymentServices",
    "method": "createPaymentService",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "Creates a payment service",
    "parameters": [
      {
        "name": "idempotencyKey",
        "schema": "string",
        "description": "This allows you to safely retry requests without the risk of duplicate processing. 128 character max.",
        "example": "KEY_VALUE"
      },
      {
        "name": "PaymentServices",
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
      }
    ]
  },
  {
    "url": "/Prepayments",
    "method": "getPrepayments",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "Retrieves prepayments",
    "parameters": [
      {
        "name": "ifModifiedSince",
        "schema": "string",
        "description": "Only records created or modified since this timestamp will be returned",
        "example": "2020-02-06T12:17:43.202-08:00"
      },
      {
        "name": "where",
        "schema": "string",
        "description": "Filter by an any element",
        "example": "Status==\"AUTHORISED\""
      },
      {
        "name": "order",
        "schema": "string",
        "description": "Order by an any element",
        "example": "Reference ASC"
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "e.g. page=1 – Up to 100 prepayments will be returned in a single API call with line items shown for each overpayment",
        "example": 1
      },
      {
        "name": "unitdp",
        "schema": "integer",
        "description": "e.g. unitdp=4 – (Unit Decimal Places) You can opt in to use four decimal places for unit amounts",
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
    "url": "/Prepayments/{PrepaymentID}",
    "method": "getPrepayment",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "Allows you to retrieve a specified prepayments",
    "parameters": [
      {
        "name": "prepaymentId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier for a PrePayment",
        "example": "00000000-0000-0000-0000-000000000000"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/Prepayments/{PrepaymentID}/Allocations",
    "method": "createPrepaymentAllocations",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "Allows you to create an Allocation for prepayments",
    "parameters": [
      {
        "name": "prepaymentId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier for a PrePayment",
        "example": "00000000-0000-0000-0000-000000000000"
      },
      {
        "name": "summarizeErrors",
        "schema": "boolean",
        "description": "If false return 200 OK and mix of successfully created objects and any with validation errors",
        "example": true,
        "default": false
      },
      {
        "name": "idempotencyKey",
        "schema": "string",
        "description": "This allows you to safely retry requests without the risk of duplicate processing. 128 character max.",
        "example": "KEY_VALUE"
      },
      {
        "name": "Allocations",
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
      }
    ]
  },
  {
    "url": "/Prepayments/{PrepaymentID}/Allocations/{AllocationID}",
    "method": "deleteAllocationFromPrepayment",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "Deletes an Allocation from a Prepayment",
    "parameters": [
      {
        "name": "prepaymentId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier for a PrePayment",
        "example": "00000000-0000-0000-0000-000000000000"
      },
      {
        "name": "allocationId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier for Allocation object",
        "example": "00000000-0000-0000-0000-000000000000"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/Prepayments/{PrepaymentID}/History",
    "method": "getPrepaymentHistory",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "Retrieves history record for a specific prepayment",
    "parameters": [
      {
        "name": "prepaymentId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier for a PrePayment",
        "example": "00000000-0000-0000-0000-000000000000"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/Prepayments/{PrepaymentID}/History",
    "method": "createPrepaymentHistory",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "Creates a history record for a specific prepayment",
    "parameters": [
      {
        "name": "idempotencyKey",
        "schema": "string",
        "description": "This allows you to safely retry requests without the risk of duplicate processing. 128 character max.",
        "example": "KEY_VALUE"
      },
      {
        "name": "prepaymentId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier for a PrePayment",
        "example": "00000000-0000-0000-0000-000000000000"
      },
      {
        "name": "HistoryRecords",
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
      }
    ]
  },
  {
    "url": "/PurchaseOrders",
    "method": "getPurchaseOrders",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "Retrieves purchase orders",
    "parameters": [
      {
        "name": "ifModifiedSince",
        "schema": "string",
        "description": "Only records created or modified since this timestamp will be returned",
        "example": "2020-02-06T12:17:43.202-08:00"
      },
      {
        "name": "status",
        "schema": "string",
        "description": "Filter by purchase order status",
        "example": "SUBMITTED"
      },
      {
        "name": "dateFrom",
        "schema": "string",
        "description": "Filter by purchase order date (e.g. GET https://.../PurchaseOrders?DateFrom=2015-12-01&DateTo=2015-12-31",
        "example": "2019-12-01"
      },
      {
        "name": "dateTo",
        "schema": "string",
        "description": "Filter by purchase order date (e.g. GET https://.../PurchaseOrders?DateFrom=2015-12-01&DateTo=2015-12-31",
        "example": "2019-12-31"
      },
      {
        "name": "order",
        "schema": "string",
        "description": "Order by an any element",
        "example": "PurchaseOrderNumber ASC"
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "To specify a page, append the page parameter to the URL e.g. ?page=1. If there are 100 records in the response you will need to check if there is any more data by fetching the next page e.g ?page=2 and continuing this process until no more results are returned.",
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
    "url": "/PurchaseOrders",
    "method": "updateOrCreatePurchaseOrders",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "Updates or creates one or more purchase orders",
    "parameters": [
      {
        "name": "summarizeErrors",
        "schema": "boolean",
        "description": "If false return 200 OK and mix of successfully created objects and any with validation errors",
        "example": true,
        "default": false
      },
      {
        "name": "idempotencyKey",
        "schema": "string",
        "description": "This allows you to safely retry requests without the risk of duplicate processing. 128 character max.",
        "example": "KEY_VALUE"
      },
      {
        "name": "PurchaseOrders",
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
      }
    ]
  },
  {
    "url": "/PurchaseOrders",
    "method": "createPurchaseOrders",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "Creates one or more purchase orders",
    "parameters": [
      {
        "name": "summarizeErrors",
        "schema": "boolean",
        "description": "If false return 200 OK and mix of successfully created objects and any with validation errors",
        "example": true,
        "default": false
      },
      {
        "name": "idempotencyKey",
        "schema": "string",
        "description": "This allows you to safely retry requests without the risk of duplicate processing. 128 character max.",
        "example": "KEY_VALUE"
      },
      {
        "name": "PurchaseOrders",
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
      }
    ]
  },
  {
    "url": "/PurchaseOrders/{PurchaseOrderID}/pdf",
    "method": "getPurchaseOrderPdf",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "Retrieves specific purchase order as PDF files using a unique purchase order Id",
    "parameters": [
      {
        "name": "purchaseOrderId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier for an Purchase Order",
        "example": "00000000-0000-0000-0000-000000000000"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/PurchaseOrders/{PurchaseOrderID}",
    "method": "getPurchaseOrderById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "Retrieves a specific purchase order using a unique purchase order Id",
    "parameters": [
      {
        "name": "purchaseOrderId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier for an Purchase Order",
        "example": "00000000-0000-0000-0000-000000000000"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/PurchaseOrders/{PurchaseOrderID}",
    "method": "updatePurchaseOrder",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "Updates a specific purchase order",
    "parameters": [
      {
        "name": "idempotencyKey",
        "schema": "string",
        "description": "This allows you to safely retry requests without the risk of duplicate processing. 128 character max.",
        "example": "KEY_VALUE"
      },
      {
        "name": "purchaseOrderId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier for an Purchase Order",
        "example": "00000000-0000-0000-0000-000000000000"
      },
      {
        "name": "PurchaseOrders",
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
      }
    ]
  },
  {
    "url": "/PurchaseOrders/{PurchaseOrderNumber}",
    "method": "getPurchaseOrderByNumber",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "Retrieves a specific purchase order using purchase order number",
    "parameters": [
      {
        "name": "purchaseOrderNumber",
        "schema": "string",
        "required": true,
        "description": "Unique identifier for a PurchaseOrder",
        "example": "PO1234"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/PurchaseOrders/{PurchaseOrderID}/History",
    "method": "getPurchaseOrderHistory",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "Retrieves history for a specific purchase order",
    "parameters": [
      {
        "name": "purchaseOrderId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier for an Purchase Order",
        "example": "00000000-0000-0000-0000-000000000000"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/PurchaseOrders/{PurchaseOrderID}/History",
    "method": "recordPurchaseOrderHistory",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "Creates a history record for a specific purchase orders",
    "parameters": [
      {
        "name": "idempotencyKey",
        "schema": "string",
        "description": "This allows you to safely retry requests without the risk of duplicate processing. 128 character max.",
        "example": "KEY_VALUE"
      },
      {
        "name": "purchaseOrderId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier for an Purchase Order",
        "example": "00000000-0000-0000-0000-000000000000"
      },
      {
        "name": "HistoryRecords",
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
      }
    ]
  },
  {
    "url": "/PurchaseOrders/{PurchaseOrderID}/Attachments",
    "method": "getPurchaseOrderAttachments",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "Retrieves attachments for a specific purchase order",
    "parameters": [
      {
        "name": "purchaseOrderId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier for an Purchase Order",
        "example": "00000000-0000-0000-0000-000000000000"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/PurchaseOrders/{PurchaseOrderID}/Attachments/{AttachmentID}",
    "method": "getAttachment",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "Retrieves specific attachment for a specific purchase order using a unique attachment Id",
    "parameters": [
      {
        "name": "purchaseOrderId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier for an Purchase Order",
        "example": "00000000-0000-0000-0000-000000000000"
      },
      {
        "name": "attachmentId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier for Attachment object",
        "example": "00000000-0000-0000-0000-000000000000"
      },
      {
        "name": "contentType",
        "schema": "string",
        "required": true,
        "description": "The mime type of the attachment file you are retrieving i.e image/jpg, application/pdf",
        "example": "image/jpg"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/PurchaseOrders/{PurchaseOrderID}/Attachments/{FileName}",
    "method": "getAttachmentByFileName",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "Retrieves a specific attachment for a specific purchase order by filename",
    "parameters": [
      {
        "name": "purchaseOrderId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier for an Purchase Order",
        "example": "00000000-0000-0000-0000-000000000000"
      },
      {
        "name": "fileName",
        "schema": "string",
        "required": true,
        "description": "Name of the attachment",
        "example": "xero-dev.jpg"
      },
      {
        "name": "contentType",
        "schema": "string",
        "required": true,
        "description": "The mime type of the attachment file you are retrieving i.e image/jpg, application/pdf",
        "example": "image/jpg"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/PurchaseOrders/{PurchaseOrderID}/Attachments/{FileName}",
    "method": "updatePurchaseOrderAttachment",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "Updates a specific attachment for a specific purchase order by filename",
    "parameters": [
      {
        "name": "idempotencyKey",
        "schema": "string",
        "description": "This allows you to safely retry requests without the risk of duplicate processing. 128 character max.",
        "example": "KEY_VALUE"
      },
      {
        "name": "purchaseOrderId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier for an Purchase Order",
        "example": "00000000-0000-0000-0000-000000000000"
      },
      {
        "name": "fileName",
        "schema": "string",
        "required": true,
        "description": "Name of the attachment",
        "example": "xero-dev.jpg"
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
    "url": "/PurchaseOrders/{PurchaseOrderID}/Attachments/{FileName}",
    "method": "createPurchaseOrderAttachment",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "Creates attachment for a specific purchase order",
    "parameters": [
      {
        "name": "idempotencyKey",
        "schema": "string",
        "description": "This allows you to safely retry requests without the risk of duplicate processing. 128 character max.",
        "example": "KEY_VALUE"
      },
      {
        "name": "purchaseOrderId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier for an Purchase Order",
        "example": "00000000-0000-0000-0000-000000000000"
      },
      {
        "name": "fileName",
        "schema": "string",
        "required": true,
        "description": "Name of the attachment",
        "example": "xero-dev.jpg"
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
    "url": "/Quotes",
    "method": "getSalesQuotes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "Retrieves sales quotes",
    "parameters": [
      {
        "name": "ifModifiedSince",
        "schema": "string",
        "description": "Only records created or modified since this timestamp will be returned",
        "example": "2020-02-06T12:17:43.202-08:00"
      },
      {
        "name": "dateFrom",
        "schema": "string",
        "description": "Filter for quotes after a particular date",
        "example": "2019-10-31"
      },
      {
        "name": "dateTo",
        "schema": "string",
        "description": "Filter for quotes before a particular date",
        "example": "2019-10-31"
      },
      {
        "name": "expiryDateFrom",
        "schema": "string",
        "description": "Filter for quotes expiring after a particular date",
        "example": "2019-10-31"
      },
      {
        "name": "expiryDateTo",
        "schema": "string",
        "description": "Filter for quotes before a particular date",
        "example": "2019-10-31"
      },
      {
        "name": "contactId",
        "schema": "string",
        "description": "Filter for quotes belonging to a particular contact",
        "example": "00000000-0000-0000-0000-000000000000"
      },
      {
        "name": "status",
        "schema": "string",
        "description": "Filter for quotes of a particular Status",
        "example": "DRAFT"
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "e.g. page=1 – Up to 100 Quotes will be returned in a single API call with line items shown for each quote",
        "example": 1
      },
      {
        "name": "order",
        "schema": "string",
        "description": "Order by an any element",
        "example": "Status ASC"
      },
      {
        "name": "quoteNumber",
        "schema": "string",
        "description": "Filter by quote number (e.g. GET https://.../Quotes?QuoteNumber=QU-0001)",
        "example": "QU-0001"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/Quotes",
    "method": "updateOrCreateQuotes",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "Updates or creates one or more quotes",
    "parameters": [
      {
        "name": "summarizeErrors",
        "schema": "boolean",
        "description": "If false return 200 OK and mix of successfully created objects and any with validation errors",
        "example": true,
        "default": false
      },
      {
        "name": "idempotencyKey",
        "schema": "string",
        "description": "This allows you to safely retry requests without the risk of duplicate processing. 128 character max.",
        "example": "KEY_VALUE"
      },
      {
        "name": "Quotes",
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
      }
    ]
  },
  {
    "url": "/Quotes",
    "method": "createQuotes",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "Create one or more quotes",
    "parameters": [
      {
        "name": "summarizeErrors",
        "schema": "boolean",
        "description": "If false return 200 OK and mix of successfully created objects and any with validation errors",
        "example": true,
        "default": false
      },
      {
        "name": "idempotencyKey",
        "schema": "string",
        "description": "This allows you to safely retry requests without the risk of duplicate processing. 128 character max.",
        "example": "KEY_VALUE"
      },
      {
        "name": "Quotes",
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
      }
    ]
  },
  {
    "url": "/Quotes/{QuoteID}",
    "method": "getQuoteById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "Retrieves a specific quote using a unique quote Id",
    "parameters": [
      {
        "name": "quoteId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier for an Quote",
        "example": "00000000-0000-0000-0000-000000000000"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/Quotes/{QuoteID}",
    "method": "updateSpecificQuote",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "Updates a specific quote",
    "parameters": [
      {
        "name": "idempotencyKey",
        "schema": "string",
        "description": "This allows you to safely retry requests without the risk of duplicate processing. 128 character max.",
        "example": "KEY_VALUE"
      },
      {
        "name": "quoteId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier for an Quote",
        "example": "00000000-0000-0000-0000-000000000000"
      },
      {
        "name": "Quotes",
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
      }
    ]
  },
  {
    "url": "/Quotes/{QuoteID}/History",
    "method": "getQuoteHistory",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "Retrieves history records of a specific quote",
    "parameters": [
      {
        "name": "quoteId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier for an Quote",
        "example": "00000000-0000-0000-0000-000000000000"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/Quotes/{QuoteID}/History",
    "method": "createQuoteHistoryRecord",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "Creates a history record for a specific quote",
    "parameters": [
      {
        "name": "idempotencyKey",
        "schema": "string",
        "description": "This allows you to safely retry requests without the risk of duplicate processing. 128 character max.",
        "example": "KEY_VALUE"
      },
      {
        "name": "quoteId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier for an Quote",
        "example": "00000000-0000-0000-0000-000000000000"
      },
      {
        "name": "HistoryRecords",
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
      }
    ]
  },
  {
    "url": "/Quotes/{QuoteID}/pdf",
    "method": "getQuotePdf",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "Retrieves a specific quote as a PDF file using a unique quote Id",
    "parameters": [
      {
        "name": "quoteId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier for an Quote",
        "example": "00000000-0000-0000-0000-000000000000"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/Quotes/{QuoteID}/Attachments",
    "method": "getQuoteAttachments",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "Retrieves attachments for a specific quote",
    "parameters": [
      {
        "name": "quoteId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier for an Quote",
        "example": "00000000-0000-0000-0000-000000000000"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/Quotes/{QuoteID}/Attachments/{AttachmentID}",
    "method": "getSpecificAttachment",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "Retrieves a specific attachment from a specific quote using a unique attachment Id",
    "parameters": [
      {
        "name": "quoteId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier for an Quote",
        "example": "00000000-0000-0000-0000-000000000000"
      },
      {
        "name": "attachmentId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier for Attachment object",
        "example": "00000000-0000-0000-0000-000000000000"
      },
      {
        "name": "contentType",
        "schema": "string",
        "required": true,
        "description": "The mime type of the attachment file you are retrieving i.e image/jpg, application/pdf",
        "example": "image/jpg"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/Quotes/{QuoteID}/Attachments/{FileName}",
    "method": "getQuoteAttachment",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "Retrieves a specific attachment from a specific quote by filename",
    "parameters": [
      {
        "name": "quoteId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier for an Quote",
        "example": "00000000-0000-0000-0000-000000000000"
      },
      {
        "name": "fileName",
        "schema": "string",
        "required": true,
        "description": "Name of the attachment",
        "example": "xero-dev.jpg"
      },
      {
        "name": "contentType",
        "schema": "string",
        "required": true,
        "description": "The mime type of the attachment file you are retrieving i.e image/jpg, application/pdf",
        "example": "image/jpg"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/Quotes/{QuoteID}/Attachments/{FileName}",
    "method": "updateQuoteAttachment",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "Updates a specific attachment from a specific quote by filename",
    "parameters": [
      {
        "name": "idempotencyKey",
        "schema": "string",
        "description": "This allows you to safely retry requests without the risk of duplicate processing. 128 character max.",
        "example": "KEY_VALUE"
      },
      {
        "name": "quoteId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier for an Quote",
        "example": "00000000-0000-0000-0000-000000000000"
      },
      {
        "name": "fileName",
        "schema": "string",
        "required": true,
        "description": "Name of the attachment",
        "example": "xero-dev.jpg"
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
    "url": "/Quotes/{QuoteID}/Attachments/{FileName}",
    "method": "createQuoteAttachment",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "Creates attachment for a specific quote",
    "parameters": [
      {
        "name": "idempotencyKey",
        "schema": "string",
        "description": "This allows you to safely retry requests without the risk of duplicate processing. 128 character max.",
        "example": "KEY_VALUE"
      },
      {
        "name": "quoteId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier for an Quote",
        "example": "00000000-0000-0000-0000-000000000000"
      },
      {
        "name": "fileName",
        "schema": "string",
        "required": true,
        "description": "Name of the attachment",
        "example": "xero-dev.jpg"
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
    "url": "/Receipts",
    "method": "getDraftExpenseClaimsReceipts",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "Retrieves draft expense claim receipts for any user",
    "parameters": [
      {
        "name": "ifModifiedSince",
        "schema": "string",
        "description": "Only records created or modified since this timestamp will be returned",
        "example": "2020-02-06T12:17:43.202-08:00"
      },
      {
        "name": "where",
        "schema": "string",
        "description": "Filter by an any element",
        "example": "Status==\"DRAFT\""
      },
      {
        "name": "order",
        "schema": "string",
        "description": "Order by an any element",
        "example": "ReceiptNumber ASC"
      },
      {
        "name": "unitdp",
        "schema": "integer",
        "description": "e.g. unitdp=4 – (Unit Decimal Places) You can opt in to use four decimal places for unit amounts",
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
    "url": "/Receipts",
    "method": "createDraftExpenseClaimsReceipts",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "Creates draft expense claim receipts for any user",
    "parameters": [
      {
        "name": "unitdp",
        "schema": "integer",
        "description": "e.g. unitdp=4 – (Unit Decimal Places) You can opt in to use four decimal places for unit amounts",
        "example": 4
      },
      {
        "name": "idempotencyKey",
        "schema": "string",
        "description": "This allows you to safely retry requests without the risk of duplicate processing. 128 character max.",
        "example": "KEY_VALUE"
      },
      {
        "name": "Receipts",
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
      }
    ]
  },
  {
    "url": "/Receipts/{ReceiptID}",
    "method": "getSpecificDraftExpenseClaimReceiptByReceiptId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "Retrieves a specific draft expense claim receipt by using a unique receipt Id",
    "parameters": [
      {
        "name": "receiptId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier for a Receipt",
        "example": "00000000-0000-0000-0000-000000000000"
      },
      {
        "name": "unitdp",
        "schema": "integer",
        "description": "e.g. unitdp=4 – (Unit Decimal Places) You can opt in to use four decimal places for unit amounts",
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
    "url": "/Receipts/{ReceiptID}",
    "method": "updateDraftClaimReceipt",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "Updates a specific draft expense claim receipts",
    "parameters": [
      {
        "name": "receiptId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier for a Receipt",
        "example": "00000000-0000-0000-0000-000000000000"
      },
      {
        "name": "unitdp",
        "schema": "integer",
        "description": "e.g. unitdp=4 – (Unit Decimal Places) You can opt in to use four decimal places for unit amounts",
        "example": 4
      },
      {
        "name": "idempotencyKey",
        "schema": "string",
        "description": "This allows you to safely retry requests without the risk of duplicate processing. 128 character max.",
        "example": "KEY_VALUE"
      },
      {
        "name": "Receipts",
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
      }
    ]
  },
  {
    "url": "/Receipts/{ReceiptID}/Attachments",
    "method": "getReceiptAttachments",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "Retrieves attachments for a specific expense claim receipt",
    "parameters": [
      {
        "name": "receiptId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier for a Receipt",
        "example": "00000000-0000-0000-0000-000000000000"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/Receipts/{ReceiptID}/Attachments/{AttachmentID}",
    "method": "getExpenseClaimsAttachment",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "Retrieves a specific attachments from a specific expense claim receipts by using a unique attachment Id",
    "parameters": [
      {
        "name": "receiptId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier for a Receipt",
        "example": "00000000-0000-0000-0000-000000000000"
      },
      {
        "name": "attachmentId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier for Attachment object",
        "example": "00000000-0000-0000-0000-000000000000"
      },
      {
        "name": "contentType",
        "schema": "string",
        "required": true,
        "description": "The mime type of the attachment file you are retrieving i.e image/jpg, application/pdf",
        "example": "image/jpg"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/Receipts/{ReceiptID}/Attachments/{FileName}",
    "method": "getSpecificAttachment",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "Retrieves a specific attachment from a specific expense claim receipts by file name",
    "parameters": [
      {
        "name": "receiptId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier for a Receipt",
        "example": "00000000-0000-0000-0000-000000000000"
      },
      {
        "name": "fileName",
        "schema": "string",
        "required": true,
        "description": "Name of the attachment",
        "example": "xero-dev.jpg"
      },
      {
        "name": "contentType",
        "schema": "string",
        "required": true,
        "description": "The mime type of the attachment file you are retrieving i.e image/jpg, application/pdf",
        "example": "image/jpg"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/Receipts/{ReceiptID}/Attachments/{FileName}",
    "method": "updateSpecificAttachment",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "Updates a specific attachment on a specific expense claim receipts by file name",
    "parameters": [
      {
        "name": "idempotencyKey",
        "schema": "string",
        "description": "This allows you to safely retry requests without the risk of duplicate processing. 128 character max.",
        "example": "KEY_VALUE"
      },
      {
        "name": "receiptId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier for a Receipt",
        "example": "00000000-0000-0000-0000-000000000000"
      },
      {
        "name": "fileName",
        "schema": "string",
        "required": true,
        "description": "Name of the attachment",
        "example": "xero-dev.jpg"
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
    "url": "/Receipts/{ReceiptID}/Attachments/{FileName}",
    "method": "createReceiptAttachmentByFileName",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "Creates an attachment on a specific expense claim receipts by file name",
    "parameters": [
      {
        "name": "idempotencyKey",
        "schema": "string",
        "description": "This allows you to safely retry requests without the risk of duplicate processing. 128 character max.",
        "example": "KEY_VALUE"
      },
      {
        "name": "receiptId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier for a Receipt",
        "example": "00000000-0000-0000-0000-000000000000"
      },
      {
        "name": "fileName",
        "schema": "string",
        "required": true,
        "description": "Name of the attachment",
        "example": "xero-dev.jpg"
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
    "url": "/Receipts/{ReceiptID}/History",
    "method": "getReceiptHistory",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "Retrieves a history record for a specific receipt",
    "parameters": [
      {
        "name": "receiptId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier for a Receipt",
        "example": "00000000-0000-0000-0000-000000000000"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/Receipts/{ReceiptID}/History",
    "method": "createReceiptHistory",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "Creates a history record for a specific receipt",
    "parameters": [
      {
        "name": "idempotencyKey",
        "schema": "string",
        "description": "This allows you to safely retry requests without the risk of duplicate processing. 128 character max.",
        "example": "KEY_VALUE"
      },
      {
        "name": "receiptId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier for a Receipt",
        "example": "00000000-0000-0000-0000-000000000000"
      },
      {
        "name": "HistoryRecords",
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
      }
    ]
  },
  {
    "url": "/RepeatingInvoices",
    "method": "getRepeatingInvoices",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "Retrieves repeating invoices",
    "parameters": [
      {
        "name": "where",
        "schema": "string",
        "description": "Filter by an any element",
        "example": "Status==\"DRAFT\""
      },
      {
        "name": "order",
        "schema": "string",
        "description": "Order by an any element",
        "example": "Total ASC"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/RepeatingInvoices",
    "method": "manageRepeatingInvoices",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "Creates or deletes one or more repeating invoice templates",
    "parameters": [
      {
        "name": "summarizeErrors",
        "schema": "boolean",
        "description": "If false return 200 OK and mix of successfully created objects and any with validation errors",
        "example": true,
        "default": false
      },
      {
        "name": "idempotencyKey",
        "schema": "string",
        "description": "This allows you to safely retry requests without the risk of duplicate processing. 128 character max.",
        "example": "KEY_VALUE"
      },
      {
        "name": "RepeatingInvoices",
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
      }
    ]
  },
  {
    "url": "/RepeatingInvoices",
    "method": "createRepeatingInvoices",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "Creates one or more repeating invoice templates",
    "parameters": [
      {
        "name": "summarizeErrors",
        "schema": "boolean",
        "description": "If false return 200 OK and mix of successfully created objects and any with validation errors",
        "example": true,
        "default": false
      },
      {
        "name": "idempotencyKey",
        "schema": "string",
        "description": "This allows you to safely retry requests without the risk of duplicate processing. 128 character max.",
        "example": "KEY_VALUE"
      },
      {
        "name": "RepeatingInvoices",
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
      }
    ]
  },
  {
    "url": "/RepeatingInvoices/{RepeatingInvoiceID}",
    "method": "getRepeatingInvoiceById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "Retrieves a specific repeating invoice by using a unique repeating invoice Id",
    "parameters": [
      {
        "name": "repeatingInvoiceId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier for a Repeating Invoice",
        "example": "00000000-0000-0000-0000-000000000000"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/RepeatingInvoices/{RepeatingInvoiceID}",
    "method": "deleteRepeatingInvoiceTemplate",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "Deletes a specific repeating invoice template",
    "parameters": [
      {
        "name": "idempotencyKey",
        "schema": "string",
        "description": "This allows you to safely retry requests without the risk of duplicate processing. 128 character max.",
        "example": "KEY_VALUE"
      },
      {
        "name": "repeatingInvoiceId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier for a Repeating Invoice",
        "example": "00000000-0000-0000-0000-000000000000"
      },
      {
        "name": "RepeatingInvoices",
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
      }
    ]
  },
  {
    "url": "/RepeatingInvoices/{RepeatingInvoiceID}/Attachments",
    "method": "getRepeatingInvoiceAttachments",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "Retrieves attachments from a specific repeating invoice",
    "parameters": [
      {
        "name": "repeatingInvoiceId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier for a Repeating Invoice",
        "example": "00000000-0000-0000-0000-000000000000"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/RepeatingInvoices/{RepeatingInvoiceID}/Attachments/{AttachmentID}",
    "method": "getSpecificAttachment",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "Retrieves a specific attachment from a specific repeating invoice",
    "parameters": [
      {
        "name": "repeatingInvoiceId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier for a Repeating Invoice",
        "example": "00000000-0000-0000-0000-000000000000"
      },
      {
        "name": "attachmentId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier for Attachment object",
        "example": "00000000-0000-0000-0000-000000000000"
      },
      {
        "name": "contentType",
        "schema": "string",
        "required": true,
        "description": "The mime type of the attachment file you are retrieving i.e image/jpg, application/pdf",
        "example": "image/jpg"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/RepeatingInvoices/{RepeatingInvoiceID}/Attachments/{FileName}",
    "method": "getRepeatingInvoiceAttachment",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "Retrieves a specific attachment from a specific repeating invoices by file name",
    "parameters": [
      {
        "name": "repeatingInvoiceId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier for a Repeating Invoice",
        "example": "00000000-0000-0000-0000-000000000000"
      },
      {
        "name": "fileName",
        "schema": "string",
        "required": true,
        "description": "Name of the attachment",
        "example": "xero-dev.jpg"
      },
      {
        "name": "contentType",
        "schema": "string",
        "required": true,
        "description": "The mime type of the attachment file you are retrieving i.e image/jpg, application/pdf",
        "example": "image/jpg"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/RepeatingInvoices/{RepeatingInvoiceID}/Attachments/{FileName}",
    "method": "updateRepeatingInvoiceAttachment",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "Updates a specific attachment from a specific repeating invoices by file name",
    "parameters": [
      {
        "name": "idempotencyKey",
        "schema": "string",
        "description": "This allows you to safely retry requests without the risk of duplicate processing. 128 character max.",
        "example": "KEY_VALUE"
      },
      {
        "name": "repeatingInvoiceId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier for a Repeating Invoice",
        "example": "00000000-0000-0000-0000-000000000000"
      },
      {
        "name": "fileName",
        "schema": "string",
        "required": true,
        "description": "Name of the attachment",
        "example": "xero-dev.jpg"
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
    "url": "/RepeatingInvoices/{RepeatingInvoiceID}/Attachments/{FileName}",
    "method": "createRepeatingInvoiceAttachment",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "Creates an attachment from a specific repeating invoices by file name",
    "parameters": [
      {
        "name": "idempotencyKey",
        "schema": "string",
        "description": "This allows you to safely retry requests without the risk of duplicate processing. 128 character max.",
        "example": "KEY_VALUE"
      },
      {
        "name": "repeatingInvoiceId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier for a Repeating Invoice",
        "example": "00000000-0000-0000-0000-000000000000"
      },
      {
        "name": "fileName",
        "schema": "string",
        "required": true,
        "description": "Name of the attachment",
        "example": "xero-dev.jpg"
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
    "url": "/RepeatingInvoices/{RepeatingInvoiceID}/History",
    "method": "getRepeatingInvoiceHistory",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "Retrieves history record for a specific repeating invoice",
    "parameters": [
      {
        "name": "repeatingInvoiceId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier for a Repeating Invoice",
        "example": "00000000-0000-0000-0000-000000000000"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/RepeatingInvoices/{RepeatingInvoiceID}/History",
    "method": "createHistoryRecord",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "Creates a  history record for a specific repeating invoice",
    "parameters": [
      {
        "name": "idempotencyKey",
        "schema": "string",
        "description": "This allows you to safely retry requests without the risk of duplicate processing. 128 character max.",
        "example": "KEY_VALUE"
      },
      {
        "name": "repeatingInvoiceId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier for a Repeating Invoice",
        "example": "00000000-0000-0000-0000-000000000000"
      },
      {
        "name": "HistoryRecords",
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
      }
    ]
  },
  {
    "url": "/Reports/TenNinetyNine",
    "method": "get1099Reports",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "Retrieve reports for 1099",
    "parameters": [
      {
        "name": "reportYear",
        "schema": "string",
        "description": "The year of the 1099 report",
        "example": "2019"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/Reports/AgedPayablesByContact",
    "method": "getAgedPayablesByContact",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "Retrieves report for aged payables by contact",
    "parameters": [
      {
        "name": "contactId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier for a Contact",
        "example": "00000000-0000-0000-0000-000000000000"
      },
      {
        "name": "date",
        "schema": "string",
        "description": "The date of the Aged Payables By Contact report",
        "example": "2019-10-31"
      },
      {
        "name": "fromDate",
        "schema": "string",
        "description": "filter by the from date of the report e.g. 2021-02-01",
        "example": "2019-10-31"
      },
      {
        "name": "toDate",
        "schema": "string",
        "description": "filter by the to date of the report e.g. 2021-02-28",
        "example": "2019-10-31"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/Reports/AgedReceivablesByContact",
    "method": "getAgedReceivablesByContact",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "Retrieves report for aged receivables by contact",
    "parameters": [
      {
        "name": "contactId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier for a Contact",
        "example": "00000000-0000-0000-0000-000000000000"
      },
      {
        "name": "date",
        "schema": "string",
        "description": "The date of the Aged Receivables By Contact report",
        "example": "2019-10-31"
      },
      {
        "name": "fromDate",
        "schema": "string",
        "description": "filter by the from date of the report e.g. 2021-02-01",
        "example": "2019-10-31"
      },
      {
        "name": "toDate",
        "schema": "string",
        "description": "filter by the to date of the report e.g. 2021-02-28",
        "example": "2019-10-31"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/Reports/BalanceSheet",
    "method": "getBalanceSheetReport",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "Retrieves report for balancesheet",
    "parameters": [
      {
        "name": "date",
        "schema": "string",
        "description": "The date of the Balance Sheet report",
        "example": "2019-11-01"
      },
      {
        "name": "periods",
        "schema": "integer",
        "description": "The number of periods for the Balance Sheet report",
        "example": 3
      },
      {
        "name": "timeframe",
        "schema": "string",
        "description": "The period size to compare to (MONTH, QUARTER, YEAR)",
        "example": "MONTH"
      },
      {
        "name": "trackingOptionId1",
        "schema": "string",
        "description": "The tracking option 1 for the Balance Sheet report",
        "example": "00000000-0000-0000-0000-000000000000"
      },
      {
        "name": "trackingOptionId2",
        "schema": "string",
        "description": "The tracking option 2 for the Balance Sheet report",
        "example": "00000000-0000-0000-0000-000000000000"
      },
      {
        "name": "standardLayout",
        "schema": "boolean",
        "description": "The standard layout boolean for the Balance Sheet report",
        "example": true
      },
      {
        "name": "paymentsOnly",
        "schema": "boolean",
        "description": "return a cash basis for the Balance Sheet report",
        "example": false
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/Reports/BankSummary",
    "method": "getBankSummary",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "Retrieves report for bank summary",
    "parameters": [
      {
        "name": "fromDate",
        "schema": "string",
        "description": "filter by the from date of the report e.g. 2021-02-01",
        "example": "2019-10-31"
      },
      {
        "name": "toDate",
        "schema": "string",
        "description": "filter by the to date of the report e.g. 2021-02-28",
        "example": "2019-10-31"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/Reports/{ReportID}",
    "method": "getReportByReportId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "Retrieves a specific report using a unique ReportID",
    "parameters": [
      {
        "name": "reportId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier for a Report",
        "example": "00000000-0000-0000-0000-000000000000"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/Reports/BudgetSummary",
    "method": "getBudgetSummaryReport",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "Retrieves report for budget summary",
    "parameters": [
      {
        "name": "date",
        "schema": "string",
        "description": "The date for the Bank Summary report e.g. 2018-03-31",
        "example": "2019-03-31"
      },
      {
        "name": "periods",
        "schema": "integer",
        "description": "The number of periods to compare (integer between 1 and 12)",
        "example": 2
      },
      {
        "name": "timeframe",
        "schema": "integer",
        "description": "The period size to compare to (1=month, 3=quarter, 12=year)",
        "example": 3
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/Reports/ExecutiveSummary",
    "method": "getExecutiveSummaryReport",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "Retrieves report for executive summary",
    "parameters": [
      {
        "name": "date",
        "schema": "string",
        "description": "The date for the Bank Summary report e.g. 2018-03-31",
        "example": "2019-03-31"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/Reports",
    "method": "getUniqueReportsByUuid",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "Retrieves a list of the organistaions unique reports that require a uuid to fetch",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/Reports/ProfitAndLoss",
    "method": "getProfitAndLossReport",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "Retrieves report for profit and loss",
    "parameters": [
      {
        "name": "fromDate",
        "schema": "string",
        "description": "filter by the from date of the report e.g. 2021-02-01",
        "example": "2019-10-31"
      },
      {
        "name": "toDate",
        "schema": "string",
        "description": "filter by the to date of the report e.g. 2021-02-28",
        "example": "2019-10-31"
      },
      {
        "name": "periods",
        "schema": "integer",
        "description": "The number of periods to compare (integer between 1 and 12)",
        "example": 3
      },
      {
        "name": "timeframe",
        "schema": "string",
        "description": "The period size to compare to (MONTH, QUARTER, YEAR)",
        "example": "MONTH"
      },
      {
        "name": "trackingCategoryId",
        "schema": "string",
        "description": "The trackingCategory 1 for the ProfitAndLoss report",
        "example": "00000000-0000-0000-0000-000000000000"
      },
      {
        "name": "trackingCategoryId2",
        "schema": "string",
        "description": "The trackingCategory 2 for the ProfitAndLoss report",
        "example": "00000000-0000-0000-0000-000000000000"
      },
      {
        "name": "trackingOptionId",
        "schema": "string",
        "description": "The tracking option 1 for the ProfitAndLoss report",
        "example": "00000000-0000-0000-0000-000000000000"
      },
      {
        "name": "trackingOptionId2",
        "schema": "string",
        "description": "The tracking option 2 for the ProfitAndLoss report",
        "example": "00000000-0000-0000-0000-000000000000"
      },
      {
        "name": "standardLayout",
        "schema": "boolean",
        "description": "Return the standard layout for the ProfitAndLoss report",
        "example": "true"
      },
      {
        "name": "paymentsOnly",
        "schema": "boolean",
        "description": "Return cash only basis for the ProfitAndLoss report",
        "example": "false"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/Reports/TrialBalance",
    "method": "getTrialBalanceReport",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "Retrieves report for trial balance",
    "parameters": [
      {
        "name": "date",
        "schema": "string",
        "description": "The date for the Trial Balance report e.g. 2018-03-31",
        "example": "2019-10-31"
      },
      {
        "name": "paymentsOnly",
        "schema": "boolean",
        "description": "Return cash only basis for the Trial Balance report",
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
    "url": "/Setup",
    "method": "setConversionDetails",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "Sets the chart of accounts, the conversion date and conversion balances",
    "parameters": [
      {
        "name": "idempotencyKey",
        "schema": "string",
        "description": "This allows you to safely retry requests without the risk of duplicate processing. 128 character max.",
        "example": "KEY_VALUE"
      },
      {
        "name": "ConversionDate",
        "schema": "object",
        "description": ""
      },
      {
        "name": "ConversionBalances",
        "schema": "array",
        "description": ""
      },
      {
        "name": "Accounts",
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
    "url": "/TaxRates",
    "method": "getTaxRates",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "Retrieves tax rates",
    "parameters": [
      {
        "name": "where",
        "schema": "string",
        "description": "Filter by an any element",
        "example": "Status==\"ACTIVE\""
      },
      {
        "name": "order",
        "schema": "string",
        "description": "Order by an any element",
        "example": "Name ASC"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/TaxRates",
    "method": "updateTaxRates",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "Updates tax rates",
    "parameters": [
      {
        "name": "idempotencyKey",
        "schema": "string",
        "description": "This allows you to safely retry requests without the risk of duplicate processing. 128 character max.",
        "example": "KEY_VALUE"
      },
      {
        "name": "TaxRates",
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
      }
    ]
  },
  {
    "url": "/TaxRates",
    "method": "updateTaxRates",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "Creates one or more tax rates",
    "parameters": [
      {
        "name": "idempotencyKey",
        "schema": "string",
        "description": "This allows you to safely retry requests without the risk of duplicate processing. 128 character max.",
        "example": "KEY_VALUE"
      },
      {
        "name": "TaxRates",
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
      }
    ]
  },
  {
    "url": "/TaxRates/{TaxType}",
    "method": "getTaxRateByType",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "Retrieves a specific tax rate according to given TaxType code",
    "parameters": [
      {
        "name": "taxType",
        "schema": "string",
        "required": true,
        "description": "A valid TaxType code",
        "example": "INPUT2"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/TrackingCategories",
    "method": "getTrackingCategoriesOptions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "Retrieves tracking categories and options",
    "parameters": [
      {
        "name": "where",
        "schema": "string",
        "description": "Filter by an any element",
        "example": "Status==\"ACTIVE\""
      },
      {
        "name": "order",
        "schema": "string",
        "description": "Order by an any element",
        "example": "Name ASC"
      },
      {
        "name": "includeArchived",
        "schema": "boolean",
        "description": "e.g. includeArchived=true - Categories and options with a status of ARCHIVED will be included in the response",
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
    "url": "/TrackingCategories",
    "method": "createTrackingCategories",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "Create tracking categories",
    "parameters": [
      {
        "name": "idempotencyKey",
        "schema": "string",
        "description": "This allows you to safely retry requests without the risk of duplicate processing. 128 character max.",
        "example": "KEY_VALUE"
      },
      {
        "name": "TrackingCategoryID",
        "schema": "string",
        "description": ""
      },
      {
        "name": "TrackingOptionID",
        "schema": "string",
        "description": ""
      },
      {
        "name": "Name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "Option",
        "schema": "string",
        "description": ""
      },
      {
        "name": "Status",
        "schema": "string",
        "description": ""
      },
      {
        "name": "Options",
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
      }
    ]
  },
  {
    "url": "/TrackingCategories/{TrackingCategoryID}",
    "method": "deleteTrackingCategory",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "Deletes a specific tracking category",
    "parameters": [
      {
        "name": "trackingCategoryId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier for a TrackingCategory",
        "example": "00000000-0000-0000-0000-000000000000"
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
    "url": "/TrackingCategories/{TrackingCategoryID}",
    "method": "getTrackingCategoriesById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "Retrieves specific tracking categories and options using a unique tracking category Id",
    "parameters": [
      {
        "name": "trackingCategoryId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier for a TrackingCategory",
        "example": "00000000-0000-0000-0000-000000000000"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/TrackingCategories/{TrackingCategoryID}",
    "method": "updateTrackingCategory",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "Updates a specific tracking category",
    "parameters": [
      {
        "name": "idempotencyKey",
        "schema": "string",
        "description": "This allows you to safely retry requests without the risk of duplicate processing. 128 character max.",
        "example": "KEY_VALUE"
      },
      {
        "name": "trackingCategoryId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier for a TrackingCategory",
        "example": "00000000-0000-0000-0000-000000000000"
      },
      {
        "name": "TrackingCategoryID",
        "schema": "string",
        "description": ""
      },
      {
        "name": "TrackingOptionID",
        "schema": "string",
        "description": ""
      },
      {
        "name": "Name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "Option",
        "schema": "string",
        "description": ""
      },
      {
        "name": "Status",
        "schema": "string",
        "description": ""
      },
      {
        "name": "Options",
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
      }
    ]
  },
  {
    "url": "/TrackingCategories/{TrackingCategoryID}/Options",
    "method": "createOptions",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "Creates options for a specific tracking category",
    "parameters": [
      {
        "name": "idempotencyKey",
        "schema": "string",
        "description": "This allows you to safely retry requests without the risk of duplicate processing. 128 character max.",
        "example": "KEY_VALUE"
      },
      {
        "name": "trackingCategoryId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier for a TrackingCategory",
        "example": "00000000-0000-0000-0000-000000000000"
      },
      {
        "name": "TrackingOptionID",
        "schema": "string",
        "description": ""
      },
      {
        "name": "Name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "Status",
        "schema": "string",
        "description": ""
      },
      {
        "name": "TrackingCategoryID",
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
      }
    ]
  },
  {
    "url": "/TrackingCategories/{TrackingCategoryID}/Options/{TrackingOptionID}",
    "method": "deleteTrackingOption",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "Deletes a specific option for a specific tracking category",
    "parameters": [
      {
        "name": "trackingCategoryId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier for a TrackingCategory",
        "example": "00000000-0000-0000-0000-000000000000"
      },
      {
        "name": "trackingOptionId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier for a Tracking Option",
        "example": "00000000-0000-0000-0000-000000000000"
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
    "url": "/TrackingCategories/{TrackingCategoryID}/Options/{TrackingOptionID}",
    "method": "updateTrackingOption",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "Updates a specific option for a specific tracking category",
    "parameters": [
      {
        "name": "idempotencyKey",
        "schema": "string",
        "description": "This allows you to safely retry requests without the risk of duplicate processing. 128 character max.",
        "example": "KEY_VALUE"
      },
      {
        "name": "trackingCategoryId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier for a TrackingCategory",
        "example": "00000000-0000-0000-0000-000000000000"
      },
      {
        "name": "trackingOptionId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier for a Tracking Option",
        "example": "00000000-0000-0000-0000-000000000000"
      },
      {
        "name": "TrackingOptionID",
        "schema": "string",
        "description": ""
      },
      {
        "name": "Name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "Status",
        "schema": "string",
        "description": ""
      },
      {
        "name": "TrackingCategoryID",
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
      }
    ]
  },
  {
    "url": "/Users",
    "method": "getUsers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "Retrieves users",
    "parameters": [
      {
        "name": "ifModifiedSince",
        "schema": "string",
        "description": "Only records created or modified since this timestamp will be returned",
        "example": "2020-02-06T12:17:43.202-08:00"
      },
      {
        "name": "where",
        "schema": "string",
        "description": "Filter by an any element",
        "example": "IsSubscriber==true"
      },
      {
        "name": "order",
        "schema": "string",
        "description": "Order by an any element",
        "example": "LastName ASC"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/Users/{UserID}",
    "method": "getSpecificUser",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "Retrieves a specific user",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier for a User",
        "example": "00000000-0000-0000-0000-000000000000"
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
      apiTitle="Xero Accounting API"
      apiBaseUrl="https://api.xero.com/api.xro/2.0"
      apiVersion="3.0.1"
      endpoints={140}
      sdkMethods={378}
      schemas={171}
      parameters={679}
      difficulty="Very Hard"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/xero/accounting/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/xero/accounting/openapi.yaml"
      developerDocumentation="developer.xero.com/documentation/api/accounting/overview"
    />
  );
}
  