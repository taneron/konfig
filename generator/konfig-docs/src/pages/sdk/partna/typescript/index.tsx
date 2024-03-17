import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import Description from "./_description.mdx";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function PartnaTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="partna-typescript-sdk"
      metaDescription={`Modern companies use Partna's API and B2B payment tools to smoothly launch and operate in Africa`}
      company="Partna"
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/partna/logo.png"
      companyKebabCase="partna"
      clientNameCamelCase="partna"
      homepage="getpartna.com/"
      lastUpdated={new Date("2024-03-17T23:48:01.149Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/partna/favicon.png"
      // Missing contactUrl
      // Missing contactEmail
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/partna/imagePreview.jpg"
      GettingStarted={GettingStarted}
      Description={Description}
      FirstRequest={FirstRequest}
      categories={["developer_tools","finance","payments","africa"]}
      methods={[
  {
    "url": "/v1/balance",
    "method": "getAccountBalance",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Balance",
    "typeScriptTag": "balance",
    "description": "Retrieve merchant account balance",
    "parameters": [
      {
        "name": "currency",
        "schema": "string",
        "required": true,
        "description": "One of supported currencies",
        "example": "CURRENCY"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/merchants",
    "method": "getRecord",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Merchants",
    "typeScriptTag": "merchants",
    "description": "Retrieve merchant record",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/merchants",
    "method": "updateRecord",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Merchants",
    "typeScriptTag": "merchants",
    "description": "Update merchant record",
    "parameters": [
      {
        "name": "callbackUrl",
        "schema": "string",
        "description": "",
        "example": "https://www.example.com/webhook/ventogram"
      },
      {
        "name": "creditCurrency",
        "schema": "string",
        "description": ""
      },
      {
        "name": "feeBearer",
        "schema": "string",
        "description": "",
        "example": "client"
      },
      {
        "name": "logo",
        "schema": "string",
        "description": "",
        "example": "https://www.example.com/favicon"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/mock/payment",
    "method": "requestSubmission",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Mock Payment",
    "typeScriptTag": "mockPayment",
    "description": "Make a mock payment",
    "parameters": [
      {
        "name": "amount",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "voucherId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "VOUCHERID"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/currency/rates",
    "method": "getConversionRates",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Rates",
    "typeScriptTag": "rates",
    "description": "Retrieves conversion rates",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/transactions/summary",
    "method": "getMerchantTransactionSummary",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Transactions",
    "typeScriptTag": "transactions",
    "description": "Retrieve merchant transaction summary",
    "parameters": [
      {
        "name": "currency",
        "schema": "string",
        "required": true,
        "description": "One of supported currencies",
        "example": "CURRENCY"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/vouchers",
    "method": "getRecord",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Voucher",
    "typeScriptTag": "voucher",
    "description": "Retrieve voucher record",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "description": "Voucher id"
      },
      {
        "name": "memo",
        "schema": "string",
        "description": "Voucher memo or reference number"
      },
      {
        "name": "accountNumber",
        "schema": "string",
        "description": "The account number used to pay for voucher"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/vouchers",
    "method": "redeemExistingUnused",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Voucher",
    "typeScriptTag": "voucher",
    "description": "Redeem existing unused voucher",
    "parameters": [
      {
        "name": "email",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EMAIL"
      },
      {
        "name": "voucherCode",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "VOUCHERCODE"
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/vouchers",
    "method": "createPayment",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Voucher",
    "typeScriptTag": "voucher",
    "description": "Create a new voucher payment",
    "parameters": [
      {
        "name": "amount",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "currency",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CURRENCY"
      },
      {
        "name": "email",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EMAIL"
      },
      {
        "name": "fullname",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FULLNAME"
      },
      {
        "name": "rateKey",
        "schema": "string",
        "required": false,
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
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/voucher/get-many",
    "method": "getMultipleRecords",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Voucher",
    "typeScriptTag": "voucher",
    "description": "Get multiple records",
    "parameters": [
      {
        "name": "page",
        "schema": "number",
        "description": "Defaults to 1. This is the current page being requested relative to size of a page"
      },
      {
        "name": "pageSize",
        "schema": "number",
        "description": "The number of items to be retured per page"
      },
      {
        "name": "paymentStatus",
        "schema": "string",
        "description": "Voucher payment status"
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
    "url": "/v1/voucher",
    "method": "redeemAndWithdraw",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Voucher",
    "typeScriptTag": "voucher",
    "description": "Redeem and withdraw",
    "parameters": [
      {
        "name": "cryptoAddress",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CRYPTOADDRESS"
      },
      {
        "name": "currency",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CURRENCY"
      },
      {
        "name": "email",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EMAIL"
      },
      {
        "name": "merchantFee",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "network",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NETWORK"
      },
      {
        "name": "rateKey",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "voucherCode",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "VOUCHERCODE"
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/voucher-fee",
    "method": "getFee",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Voucher fee",
    "typeScriptTag": "voucherFee",
    "description": "Retrieves conversion rates",
    "parameters": [
      {
        "name": "amount",
        "schema": "integer",
        "required": true,
        "description": "Voucher amount",
        "example": 0
      },
      {
        "name": "currency",
        "schema": "string",
        "required": true,
        "description": "Voucher currency",
        "example": "CURRENCY"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/voucher-min-max",
    "method": "getMinMaxAmount",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Voucher min-max amount",
    "typeScriptTag": "voucherMinMaxAmount",
    "description": "Retrieves minimum and maximum voucher amounts",
    "parameters": [
      {
        "name": "currency",
        "schema": "string",
        "description": "Voucher currency"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/auth/api-key",
    "method": "generateNewApiKey",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "ApiKey",
    "typeScriptTag": "apiKey",
    "description": "Create api key",
    "parameters": [
      {
        "name": "otpType",
        "schema": "string",
        "description": ""
      },
      {
        "name": "token",
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
    "url": "/payment",
    "method": "createNewPayment",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Payment",
    "typeScriptTag": "payment",
    "description": "Create payment",
    "parameters": [
      {
        "name": "accountName",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "accountNumber",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "bank",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "bankCode",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "businessId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "BUSINESSID"
      },
      {
        "name": "coinprofileUsername",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "country",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "customerEmail",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CUSTOMEREMAIL"
      },
      {
        "name": "incomingAmount",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "incomingCurrency",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "INCOMINGCURRENCY"
      },
      {
        "name": "outgoingAmount",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "outgoingCurrency",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "OUTGOINGCURRENCY"
      },
      {
        "name": "paymentType",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PAYMENTTYPE"
      },
      {
        "name": "rateKey",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "reference",
        "schema": "string",
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
    "url": "/payment/{paymentId}",
    "method": "getSingle",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Payment",
    "typeScriptTag": "payment",
    "description": "Get a single payment",
    "parameters": [
      {
        "name": "paymentId",
        "schema": "string",
        "required": true,
        "description": "The ID of the created payment",
        "example": "PAYMENTID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/transaction/{transactionId}",
    "method": "getDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Transaction",
    "typeScriptTag": "transaction",
    "description": "Get a transaction",
    "parameters": [
      {
        "name": "transactionId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TRANSACTIONID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/currency/rate",
    "method": "getCurrentRates",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Rates",
    "typeScriptTag": "rates",
    "description": "Get current rates",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/currency/minimum-allowed",
    "method": "getMinimumAllowed",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Currency",
    "typeScriptTag": "currency",
    "description": "Get minimum amount allowed",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/currency/supported",
    "method": "listSupportedCurrencies",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Currency",
    "typeScriptTag": "currency",
    "description": "Get supported currencies",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/wallet/supported/config",
    "method": "getSupportedConfig",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Wallet",
    "typeScriptTag": "wallet",
    "description": "Get supported cryptocurrencies and network",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/payment/resolve",
    "method": "resolveOverpaidTransaction",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Payment",
    "typeScriptTag": "payment",
    "description": "Resolve overpaid Transaction",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The ID of the unresolved transaction",
        "example": "ID"
      },
      {
        "name": "option",
        "schema": "string",
        "required": true,
        "description": "This is the way you want the transaction to be completed. Either refundExcess or PayAll option",
        "example": "OPTION"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/callbackurl",
    "method": "getCallbackUrl",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Webhook",
    "typeScriptTag": "webhook",
    "description": "Retrieve subscribed webhook url",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/callbackurl",
    "method": "subscribeWebhookCallback",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Webhook",
    "typeScriptTag": "webhook",
    "description": "Subscribe to webhook",
    "parameters": [
      {
        "name": "callbackUrl",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CALLBACKURL"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/transaction",
    "method": "getUserTransactions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Transaction",
    "typeScriptTag": "transaction",
    "description": "Retrieve user's transaction records",
    "parameters": [
      {
        "name": "currency",
        "schema": "string",
        "description": "Currency for which transactions are to be retrieved. When this is not supplied, transactions will be retrieved for all available currencies."
      },
      {
        "name": "type",
        "schema": "string",
        "description": "Type of transactions to be retrieved. When this is not supplied, transactions will be retrieved for all available types."
      },
      {
        "name": "page",
        "schema": "number",
        "description": "Number of pages to be retrieved."
      },
      {
        "name": "limit",
        "schema": "number",
        "description": "Number of transaction records to be retrieved per page page."
      },
      {
        "name": "duration",
        "schema": "number",
        "description": "Duration of the transaction to be retrieved per page page."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/transaction/summary",
    "method": "getUserTransactionSummary",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Transaction",
    "typeScriptTag": "transaction",
    "description": "Retrieve user's transaction summary",
    "parameters": [
      {
        "name": "currency",
        "schema": "string",
        "description": "Currency for which transactions are to be retrieved. When this is not supplied, transactions will be retrieved for all available currencies."
      },
      {
        "name": "type",
        "schema": "string",
        "description": "Type of transactions to be retrieved. When this is not supplied, transactions will be retrieved for all available types."
      },
      {
        "name": "page",
        "schema": "number",
        "description": "Number of pages to be retrieved."
      },
      {
        "name": "limit",
        "schema": "number",
        "description": "Number of transaction records to be retrieved per page page."
      },
      {
        "name": "duration",
        "schema": "number",
        "description": "Duration of the transaction to be retrieved per page page."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/wallet",
    "method": "getAddresses",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Wallet",
    "typeScriptTag": "wallet",
    "description": "Retrieves a user's crypto wallet addresses",
    "parameters": [
      {
        "name": "currency",
        "schema": "string",
        "description": "The cryptocurrency for which address will be retrieved"
      },
      {
        "name": "network",
        "schema": "string",
        "description": "The crypto network of the retrieved wallet address"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/balance/withdraw",
    "method": "withdrawFunds",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Balance",
    "typeScriptTag": "balance",
    "description": "Withdraw balance",
    "parameters": [
      {
        "name": "accountName",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACCOUNTNAME"
      },
      {
        "name": "accountNumber",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACCOUNTNUMBER"
      },
      {
        "name": "amount",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "AMOUNT"
      },
      {
        "name": "bank",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "BANK"
      },
      {
        "name": "bankCode",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "BANKCODE"
      },
      {
        "name": "currency",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CURRENCY"
      },
      {
        "name": "otpType",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "OTPTYPE"
      },
      {
        "name": "token",
        "schema": "string",
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
    "url": "/bank/resolve",
    "method": "verifyAndReturnDetails",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "BankAccount",
    "typeScriptTag": "bankAccount",
    "description": "Resolve bank account",
    "parameters": [
      {
        "name": "accountNumber",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACCOUNTNUMBER"
      },
      {
        "name": "bankCode",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "BANKCODE"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/bank/supported",
    "method": "getSupportedBanks",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Bank",
    "typeScriptTag": "bank",
    "description": "Retrieve a list of supported banks",
    "parameters": [
      {
        "name": "country",
        "schema": "string",
        "description": "The country from which to retrieve supported banks"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/balance",
    "method": "getAccountBalance",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Balance",
    "typeScriptTag": "balance",
    "description": "Retrieve user's account balance",
    "parameters": [
      {
        "name": "currency",
        "schema": "string",
        "description": "Currency for which balance is to be retrieved. When this is not supplied, balance will be retrieved for all available currencies."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/balance/transfer",
    "method": "transferFunds",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Balance",
    "typeScriptTag": "balance",
    "description": "Transfer funds",
    "parameters": [
      {
        "name": "amount",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "currency",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CURRENCY"
      },
      {
        "name": "memo",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "otpType",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "receiverUsername",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "RECEIVERUSERNAME"
      },
      {
        "name": "token",
        "schema": "string",
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
    "url": "/wallet/transfer",
    "method": "executeTransfer",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Wallet",
    "typeScriptTag": "wallet",
    "description": "Wallet transfer",
    "parameters": [
      {
        "name": "address",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ADDRESS"
      },
      {
        "name": "amount",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "currency",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CURRENCY"
      },
      {
        "name": "memo",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "network",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NETWORK"
      },
      {
        "name": "walletType",
        "schema": "string",
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
  }
]
    }
      language="TypeScript"
      apiTitle="Coinprofile business API"
      apiBaseUrl="https://staging-biz.coinprofile.co/v2"
      apiVersion="1.0.0"
      endpoints={29}
      sdkMethods={33}
      schemas={53}
      parameters={89}
      difficulty="Easy"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/partna/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/partna/openapi.yaml"
      developerDocumentation="docs.getpartna.com/"
    />
  );
}
  