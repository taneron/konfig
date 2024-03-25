import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function HelcimTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="helcim-typescript-sdk"
      metaDescription={`Helcim provides Canadian & American businesses an opportunity to accept credit card payments at affordable & transparent rates. A wide range of online, ecommerce, cloud-based, mobile & retail payment platforms allows Helcim to offer a total payments solution. The lack of cancellation fees, no monthly minimums & the removal of long-term contracts have made Helcim the preferred choice for credit card processing.

It's the fair & transparent pricing structures that help Helcim build long-term relationships with each of our merchants, clients & partners.`}
      company="Helcim"
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/helcim/logo.png"
      companyKebabCase="helcim"
      clientNameCamelCase="helcim"
      homepage="www.helcim.com/"
      lastUpdated={new Date("2024-03-24T21:42:09.454Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/helcim/favicon.png"
      // Missing contactUrl
      // Missing contactEmail
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/helcim/imagePreview.webp"
      GettingStarted={GettingStarted}
      FirstRequest={FirstRequest}
      categories={["finance","payments","online_payments","fintech","billing","ecommerce","payment_solutions"]}
      methods={[
  {
    "url": "/connection-test",
    "method": "testConnectivityToHelcimApi",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "General",
    "typeScriptTag": "general",
    "description": "Tests connectivity to the Helcim API",
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
        "statusCode": "401",
        "description": "No API token was included in the request"
      },
      {
        "statusCode": "403",
        "description": "Invalid API token was included in the request"
      }
    ]
  },
  {
    "url": "/payment/purchase",
    "method": "processPurchaseTransaction",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Payment",
    "typeScriptTag": "payment",
    "description": "Process Purchase Transaction",
    "parameters": [
      {
        "name": "idempotencyKey",
        "schema": "string",
        "required": true,
        "description": "Idempotency Key. Alphanumeric 25-characters",
        "example": "IDEMPOTENCY-KEY"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/payment/preauth",
    "method": "processPreauthTransaction",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Payment",
    "typeScriptTag": "payment",
    "description": "Process Preauth Transaction",
    "parameters": [
      {
        "name": "idempotencyKey",
        "schema": "string",
        "required": true,
        "description": "Idempotency Key. Alphanumeric 25-characters",
        "example": "IDEMPOTENCY-KEY"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/payment/capture",
    "method": "processCaptureTransaction",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Payment",
    "typeScriptTag": "payment",
    "description": "Process Capture Transaction",
    "parameters": [
      {
        "name": "idempotencyKey",
        "schema": "string",
        "required": true,
        "description": "Idempotency Key. Alphanumeric 25-characters",
        "example": "IDEMPOTENCY-KEY"
      },
      {
        "name": "preAuthTransactionId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 198763
      },
      {
        "name": "amount",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 100.99
      },
      {
        "name": "ipAddress",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "192.168.1.1"
      },
      {
        "name": "ecommerce",
        "schema": "boolean",
        "required": false,
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/payment/verify",
    "method": "verifyTransaction",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Payment",
    "typeScriptTag": "payment",
    "description": "Process Verify Transaction",
    "parameters": [
      {
        "name": "idempotencyKey",
        "schema": "string",
        "required": true,
        "description": "Idempotency Key. Alphanumeric 25-characters",
        "example": "IDEMPOTENCY-KEY"
      },
      {
        "name": "ipAddress",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "192.168.1.1"
      },
      {
        "name": "ecommerce",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": true
      },
      {
        "name": "currency",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CAD"
      },
      {
        "name": "customerCode",
        "schema": "string",
        "required": false,
        "description": "",
        "example": ""
      },
      {
        "name": "invoiceNumber",
        "schema": "string",
        "required": false,
        "description": "",
        "example": ""
      },
      {
        "name": "invoice",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "cardData",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "billingAddress",
        "schema": "object",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/payment/refund",
    "method": "processRefundTransaction",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Payment",
    "typeScriptTag": "payment",
    "description": "Process Refund Transaction",
    "parameters": [
      {
        "name": "idempotencyKey",
        "schema": "string",
        "required": true,
        "description": "Idempotency Key. Alphanumeric 25-characters",
        "example": "IDEMPOTENCY-KEY"
      },
      {
        "name": "originalTransactionId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 198763
      },
      {
        "name": "amount",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 100.99
      },
      {
        "name": "ipAddress",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "192.168.1.1"
      },
      {
        "name": "ecommerce",
        "schema": "boolean",
        "required": false,
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/payment/reverse",
    "method": "reverseTransaction",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Payment",
    "typeScriptTag": "payment",
    "description": "Process Reverse Transaction",
    "parameters": [
      {
        "name": "idempotencyKey",
        "schema": "string",
        "required": true,
        "description": "Idempotency Key. Alphanumeric 25-characters",
        "example": "IDEMPOTENCY-KEY"
      },
      {
        "name": "cardTransactionId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 198763
      },
      {
        "name": "ipAddress",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "192.168.1.1"
      },
      {
        "name": "ecommerce",
        "schema": "boolean",
        "required": false,
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/payment/withdraw",
    "method": "processWithdrawalTransaction",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Payment",
    "typeScriptTag": "payment",
    "description": "Process Withdraw Transaction",
    "parameters": [
      {
        "name": "idempotencyKey",
        "schema": "string",
        "required": true,
        "description": "Idempotency Key. Alphanumeric 25-characters",
        "example": "IDEMPOTENCY-KEY"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/card-batches/{cardBatchId}",
    "method": "getDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Card Batch",
    "typeScriptTag": "cardBatch",
    "description": "Get Card Batch",
    "parameters": [
      {
        "name": "cardBatchId",
        "schema": "integer",
        "required": true,
        "description": "The Card Batch Id of the Card Batch you want to get",
        "example": 0
      },
      {
        "name": "collectStats",
        "schema": "string",
        "description": "Includes transaction statistics for the batch",
        "example": true
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/card-batches/{cardBatchId}/settle",
    "method": "settleBatch",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Card Batch",
    "typeScriptTag": "cardBatch",
    "description": "Settles an Open Card Batch",
    "parameters": [
      {
        "name": "cardBatchId",
        "schema": "integer",
        "required": true,
        "description": "The Card Batch Id of the Card Batch you want to settle",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/card-transactions/{cardTransactionId}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Card Transaction",
    "typeScriptTag": "cardTransaction",
    "description": "Get Card Transaction by id",
    "parameters": [
      {
        "name": "cardTransactionId",
        "schema": "integer",
        "required": true,
        "description": "The Card Transaction Id of the Card Transaction you want to get",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/customers/{customerId}",
    "method": "getCustomer",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Customer",
    "typeScriptTag": "customer",
    "description": "Get customer",
    "parameters": [
      {
        "name": "customerId",
        "schema": "integer",
        "required": true,
        "description": "The Id of the customer",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/customers/{customerId}",
    "method": "updateDetails",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Customer",
    "typeScriptTag": "customer",
    "description": "Update customer",
    "parameters": [
      {
        "name": "customerId",
        "schema": "string",
        "required": true,
        "description": "The Id of the customer",
        "example": "CUSTOMERID"
      },
      {
        "name": "customerCode",
        "schema": "string",
        "description": "",
        "example": "CST1000"
      },
      {
        "name": "contactName",
        "schema": "string",
        "description": "",
        "example": "John Smith"
      },
      {
        "name": "businessName",
        "schema": "string",
        "description": "",
        "example": "Best Company"
      },
      {
        "name": "cellPhone",
        "schema": "string",
        "description": "",
        "example": "908-295-4902"
      },
      {
        "name": "billingAddress",
        "schema": "object",
        "description": ""
      },
      {
        "name": "shippingAddress",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/customers/{customerId}/cards",
    "method": "getCards",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Customer",
    "typeScriptTag": "customer",
    "description": "Get customer cards",
    "parameters": [
      {
        "name": "customerId",
        "schema": "integer",
        "required": true,
        "description": "The Id of the customer",
        "example": 0
      },
      {
        "name": "cardToken",
        "schema": "string",
        "description": "The card token.",
        "example": "907af81acc0224e0134949"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/customers/{customerId}/cards/{cardId}",
    "method": "getCardDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Customer",
    "typeScriptTag": "customer",
    "description": "Get customer card",
    "parameters": [
      {
        "name": "customerId",
        "schema": "integer",
        "required": true,
        "description": "The Id of the customer",
        "example": 0
      },
      {
        "name": "cardId",
        "schema": "integer",
        "required": true,
        "description": "The Id of the card",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/customers/{customerId}/bank-accounts",
    "method": "getBankAccounts",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Customer",
    "typeScriptTag": "customer",
    "description": "Get customer bank accounts",
    "parameters": [
      {
        "name": "customerId",
        "schema": "integer",
        "required": true,
        "description": "The Id of the customer",
        "example": 0
      },
      {
        "name": "bankToken",
        "schema": "string",
        "description": "The bank account token."
      },
      {
        "name": "verified",
        "schema": "number",
        "description": "Check if bank account is verified or not. use 1 or 0."
      },
      {
        "name": "ready",
        "schema": "number",
        "description": "Check if bank account is ready or not. use 1 or 0."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/customers/{customerId}/bank-accounts/{bankAccountId}",
    "method": "getBankAccount",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Customer",
    "typeScriptTag": "customer",
    "description": "Get customer bank account",
    "parameters": [
      {
        "name": "customerId",
        "schema": "integer",
        "required": true,
        "description": "The Id of the customer",
        "example": 0
      },
      {
        "name": "bankAccountId",
        "schema": "integer",
        "required": true,
        "description": "The Id of the bank account",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/customers/{customerId}/bank-accounts/{bankAccountId}/default",
    "method": "setBankAccountDefault",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Customer",
    "typeScriptTag": "customer",
    "description": "Set customer bank account as default",
    "parameters": [
      {
        "name": "customerId",
        "schema": "integer",
        "required": true,
        "description": "The Id of the customer",
        "example": 0
      },
      {
        "name": "bankAccountId",
        "schema": "integer",
        "required": true,
        "description": "The Id of the bank account",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/invoices/{invoiceId}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Invoice",
    "typeScriptTag": "invoice",
    "description": "Get invoice",
    "parameters": [
      {
        "name": "invoiceId",
        "schema": "string",
        "required": true,
        "description": "The unique invoice Id",
        "example": "INVOICEID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/invoices/{invoiceId}",
    "method": "updateDetails",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Invoice",
    "typeScriptTag": "invoice",
    "description": "Update invoice",
    "parameters": [
      {
        "name": "invoiceId",
        "schema": "string",
        "required": true,
        "description": "The unique invoice Id",
        "example": "INVOICEID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/helcim-pay/initialize",
    "method": "createCheckoutSession",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Helcim Pay",
    "typeScriptTag": "helcimPay",
    "description": "Creates a HelcimPay.js Checkout Session",
    "parameters": [
      {
        "name": "paymentType",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "purchase"
      },
      {
        "name": "amount",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 100
      },
      {
        "name": "currency",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CAD"
      },
      {
        "name": "customerCode",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "CST1000"
      },
      {
        "name": "invoiceNumber",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "INV1000"
      },
      {
        "name": "paymentMethod",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "cc-ach"
      },
      {
        "name": "allowPartial",
        "schema": "number",
        "required": false,
        "description": "",
        "example": 1
      },
      {
        "name": "hasConvenienceFee",
        "schema": "number",
        "required": false,
        "description": "",
        "example": 1
      },
      {
        "name": "taxAmount",
        "schema": "number",
        "required": false,
        "description": "",
        "example": 3.67
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/card-batches",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Card Batch",
    "typeScriptTag": "cardBatch",
    "description": "Get Card Batches",
    "parameters": [
      {
        "name": "batchNumber",
        "schema": "number",
        "description": "The number of the batch to retrieve. Note that this is the batch number, not batch ID.",
        "example": 18900
      },
      {
        "name": "terminalId",
        "schema": "number",
        "description": "The terminalId of the requested batch",
        "example": 180000
      },
      {
        "name": "collectStats",
        "schema": "string",
        "description": "Includes transaction statistics for the batch",
        "example": true
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Array of card batches"
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/card-transactions",
    "method": "collectTransactions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Card Transaction",
    "typeScriptTag": "cardTransaction",
    "description": "Collects up to 1000 Card Transactions",
    "parameters": [
      {
        "name": "dateFrom",
        "schema": "string",
        "description": "Filters transactions created from 2020-01-01 (Mountain Time)",
        "example": "2020-01-01"
      },
      {
        "name": "dateTo",
        "schema": "string",
        "description": "Filters transactions created until 2021-01-01 (Mountain Time)",
        "example": "2021-01-01"
      },
      {
        "name": "search",
        "schema": "string",
        "description": "Searches amount, card number(F4L4 only), cardholder name, & approval codes",
        "example": 500
      },
      {
        "name": "customerCode",
        "schema": "string",
        "description": "The code of the customer associated with the transaction",
        "example": "CST1000"
      },
      {
        "name": "invoiceNumber",
        "schema": "string",
        "description": "The number of the invoice associated with the transaction",
        "example": "INV1000"
      },
      {
        "name": "cardToken",
        "schema": "string",
        "description": "The token of the card associated with the transaction",
        "example": "5454JK97UU1F5454"
      },
      {
        "name": "cardBatchId",
        "schema": "integer",
        "description": "The id of the batch associated with the transaction",
        "example": 3
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Array of card transactions"
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/customers",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Customer",
    "typeScriptTag": "customer",
    "description": "Get customers",
    "parameters": [
      {
        "name": "search",
        "schema": "string",
        "description": "The search term to be used for partial matching on contactName, businessName, customerCode, city, phone and email (Only use one query field per request).",
        "example": "john"
      },
      {
        "name": "customerCode",
        "schema": "string",
        "description": "Existing customer code (Only use one query field per request).",
        "example": "CST1000"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/customers",
    "method": "createNewCustomer",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Customer",
    "typeScriptTag": "customer",
    "description": "Create customer",
    "parameters": [
      {
        "name": "customerCode",
        "schema": "string",
        "description": "",
        "example": "CST1000"
      },
      {
        "name": "contactName",
        "schema": "string",
        "description": "",
        "example": "John Smith"
      },
      {
        "name": "businessName",
        "schema": "string",
        "description": "",
        "example": "Best Company"
      },
      {
        "name": "cellPhone",
        "schema": "string",
        "description": "",
        "example": "908-295-4902"
      },
      {
        "name": "billingAddress",
        "schema": "object",
        "description": ""
      },
      {
        "name": "shippingAddress",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/invoices",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Invoice",
    "typeScriptTag": "invoice",
    "description": "Get invoices",
    "parameters": [
      {
        "name": "invoiceNumber",
        "schema": "string",
        "description": "The number of the invoice associated with the transaction",
        "example": "INV1000"
      },
      {
        "name": "dateStart",
        "schema": "string",
        "description": "Filters transactions created from 2020-01-01 (Mountain Time)",
        "example": "2020-01-01"
      },
      {
        "name": "dateEnd",
        "schema": "string",
        "description": "Filters transactions created until 2021-01-01 (Mountain Time)",
        "example": "2021-01-01"
      },
      {
        "name": "withConvenienceFee",
        "schema": "integer",
        "description": "Include convenience fee of each invoice 0 | 1",
        "example": 1
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/invoices",
    "method": "createNew",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Invoice",
    "typeScriptTag": "invoice",
    "description": "Create invoice",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/card-terminals",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Card Terminal",
    "typeScriptTag": "cardTerminal",
    "description": "Get card terminals",
    "parameters": [
      {
        "name": "currency",
        "schema": "string",
        "description": "",
        "example": "CAD"
      },
      {
        "name": "status",
        "schema": "string",
        "description": "",
        "example": "ACTIVE"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  }
]
    }
      language="TypeScript"
      apiTitle="The Helcim API"
      apiBaseUrl="https://api.helcim.com/v2/"
      apiVersion="2.0.0"
      endpoints={24}
      sdkMethods={28}
      schemas={66}
      parameters={86}
      difficulty="Easy"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/helcim/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/helcim/openapi.yaml"
      developerDocumentation="devdocs.helcim.com/"
    />
  );
}
  