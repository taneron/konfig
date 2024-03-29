import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function RelysiaTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="relysia-typescript-sdk"
      metaDescription={`Relysia is a blockchain as a service provider for any enterprise and commercial companies and start-ups who wish to build their own blockchain applications.

You can use our APIs as building blocks to pick and choose how advanced you want your Bitcoin platform to be.

With over 50 blockchain related APIs, you can build any application you wish. With Relysia API, wallet creation, transactions, data storage, tokens, NFTs and smart contracts are all easy to implement as they require less than 10 lines of code.

We are simplifying Bitcoin application development. By providing our scalable and robust infrastructure, we help businesses reduce their time to market by over 90% allowing them to quickly iterate through ideas and execution strategies to find their product market fit.

You can explore the Relysia API documentation at: https://docs.relysia.com/.
We also have a Swagger implementation for demonstration and testing purposes available at: https://api.relysia.com/docs/.

Our services have empowered many entrepreneurs and companies to actualise their blockchain ideas. Get in touch with us to explore Relysia API in deeper detail.

Relysia by Vaionex Corporation`}
      company="Relysia"
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/relysia/logo.png"
      companyKebabCase="relysia"
      clientNameCamelCase="relysia"
      homepage="relysia.com"
      lastUpdated={new Date("2024-03-29T23:26:36.999Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/relysia/favicon.png"
      // Missing contactUrl
      // Missing contactEmail
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/relysia/imagePreview.png"
      GettingStarted={GettingStarted}
      FirstRequest={FirstRequest}
      categories={["blockchain"]}
      methods={[
  {
    "url": "/",
    "method": "getData",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Utility",
    "typeScriptTag": "utility",
    "description": "",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "Default Response"
      }
    ]
  },
  {
    "url": "/v1/issue",
    "method": "mintToken",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Smart Contracts",
    "typeScriptTag": "smartContracts",
    "description": "Mint a Token.",
    "parameters": [
      {
        "name": "protocol",
        "schema": "string",
        "required": false,
        "description": "",
        "default": "STAS"
      },
      {
        "name": "reminting",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": "false"
      },
      {
        "name": "walletId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "description",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DESCRIPTION"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "protocolId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PROTOCOLID",
        "default": "STAS"
      },
      {
        "name": "symbol",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SYMBOL"
      },
      {
        "name": "image",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "IMAGE"
      },
      {
        "name": "tokenSupply",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 0,
        "default": 3
      },
      {
        "name": "decimals",
        "schema": "number",
        "required": false,
        "description": "",
        "default": 0
      },
      {
        "name": "satsPerToken",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 0,
        "default": 1
      },
      {
        "name": "properties",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "splitable",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": "true"
      },
      {
        "name": "data",
        "schema": "object",
        "required": false,
        "description": "",
        "default": {}
      },
      {
        "name": "nftMetadataSerialNumberStart",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "nftMetadataTotalSupply",
        "schema": "number",
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
        "description": "Bad request"
      }
    ]
  },
  {
    "url": "/v1/token/{id}",
    "method": "getTokenDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Smart Contracts",
    "typeScriptTag": "smartContracts",
    "description": "Get STAS token details.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      }
    ]
  },
  {
    "url": "/v1/URI",
    "method": "resolveAddressInfo",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Utility",
    "typeScriptTag": "utility",
    "description": "Resolve address and paymail alias information.",
    "parameters": [
      {
        "name": "uri",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "URI"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      }
    ]
  },
  {
    "url": "/v1/signUp",
    "method": "createUserToken",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Authentication",
    "typeScriptTag": "authentication",
    "description": "User Registration.",
    "parameters": [
      {
        "name": "email",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EMAIL"
      },
      {
        "name": "password",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PASSWORD"
      },
      {
        "name": "photo",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "displayName",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Successful response"
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      }
    ]
  },
  {
    "url": "/v1/auth",
    "method": "userLogin",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Authentication",
    "typeScriptTag": "authentication",
    "description": "Login Endpoint.",
    "parameters": [
      {
        "name": "email",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EMAIL"
      },
      {
        "name": "password",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PASSWORD"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Successful response"
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      }
    ]
  },
  {
    "url": "/v1/password/change",
    "method": "changeUserPassword",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Authentication",
    "typeScriptTag": "authentication",
    "description": "Change password Endpoint",
    "parameters": [
      {
        "name": "newPassword",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NEWPASSWORD"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Successful response"
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      }
    ]
  },
  {
    "url": "/v1/user",
    "method": "userAccount",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Delete",
    "typeScriptTag": "delete",
    "description": "delete user account",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      }
    ]
  },
  {
    "url": "/v1/user",
    "method": "getProfileDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Identity",
    "typeScriptTag": "identity",
    "description": "Profile details.",
    "parameters": [
      {
        "name": "oauth",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Successful response"
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      }
    ]
  },
  {
    "url": "/v1/send",
    "method": "createTransactionToAddress",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Transactions",
    "typeScriptTag": "transactions",
    "description": "Transfer coins to an address.",
    "parameters": [
      {
        "name": "walletId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "bundle",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": true
      },
      {
        "name": "dataArray",
        "schema": "array",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Successful response"
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      }
    ]
  },
  {
    "url": "/v1/rawtx",
    "method": "createRawTx",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Transactions",
    "typeScriptTag": "transactions",
    "description": "Build and return a rawTx",
    "parameters": [
      {
        "name": "walletId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "dataArray",
        "schema": "array",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Successful response"
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      }
    ]
  },
  {
    "url": "/v1/migrateToken",
    "method": "migrateTokenRequest",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "admin",
    "typeScriptTag": "admin",
    "description": "Migrate token",
    "parameters": [
      {
        "name": "walletId",
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
        "description": "Bad request"
      }
    ]
  },
  {
    "url": "/v1/tokenMetrics",
    "method": "syncTokenFromBlockchain",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Utility",
    "typeScriptTag": "utility",
    "description": "sync token from blockchain",
    "parameters": [
      {
        "name": "walletId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "force",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      }
    ]
  },
  {
    "url": "/v1/drop",
    "method": "withdrawFromPrivateKey",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Transactions",
    "typeScriptTag": "transactions",
    "description": "Withdraws coins from PrivateKeys.",
    "parameters": [
      {
        "name": "secretKey",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "privateKey",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "dataArray",
        "schema": "array",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Successful response"
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      }
    ]
  },
  {
    "url": "/v1/sweep",
    "method": "transferAssetsFromPrivateKey",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Transactions",
    "typeScriptTag": "transactions",
    "description": "Transfers all assets from PrivateKey to the User.",
    "parameters": [
      {
        "name": "walletId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "items",
        "schema": "object",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Successful response"
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      }
    ]
  },
  {
    "url": "/v1/offer",
    "method": "createAtomicSwap",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Transactions",
    "typeScriptTag": "transactions",
    "description": "Create an Atomic Swap",
    "parameters": [
      {
        "name": "walletId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "dataArray",
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
        "description": "Bad request"
      }
    ]
  },
  {
    "url": "/v1/swap",
    "method": "acceptSwapOffer",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Transactions",
    "typeScriptTag": "transactions",
    "description": "Accepting atomic swap offers.",
    "parameters": [
      {
        "name": "walletId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "dataArray",
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
        "description": "Bad request"
      }
    ]
  },
  {
    "url": "/v1/exchangeOffer",
    "method": "createSwapOffer",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Transactions",
    "typeScriptTag": "transactions",
    "description": "Creates swap offer for exchange - returns swap ID",
    "parameters": [
      {
        "name": "walletId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "dataArray",
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
        "description": "Bad request"
      }
    ]
  },
  {
    "url": "/v1/exchangeSwap",
    "method": "acceptSwapOffer",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Transactions",
    "typeScriptTag": "transactions",
    "description": "Atomic Swap",
    "parameters": [
      {
        "name": "walletId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "dataArray",
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
        "description": "Bad request"
      }
    ]
  },
  {
    "url": "/v1/inspect",
    "method": "inspectAtomicSwapOffer",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Transactions",
    "typeScriptTag": "transactions",
    "description": "Inspect an atomic swap offer.",
    "parameters": [
      {
        "name": "dataArray",
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
        "description": "Bad request"
      }
    ]
  },
  {
    "url": "/v1/redeem",
    "method": "redeemTokens",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Smart Contracts",
    "typeScriptTag": "smartContracts",
    "description": "Smart contract Redemption.",
    "parameters": [
      {
        "name": "walletId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "dataArray",
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
        "description": "Bad request"
      }
    ]
  },
  {
    "url": "/v1/createWallet",
    "method": "createHdWalletOfChoice",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Wallets",
    "typeScriptTag": "wallets",
    "description": "Create a wallet.",
    "parameters": [
      {
        "name": "walletTitle",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "WALLETTITLE"
      },
      {
        "name": "mnemonicPhrase",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "paymail",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "paymailActivate",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "type",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "walletLogo",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Successful response"
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      }
    ]
  },
  {
    "url": "/v1/metrics",
    "method": "getLatestUtxoState",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Utility",
    "typeScriptTag": "utility",
    "description": "Get the latest wallet UTXO state.",
    "parameters": [
      {
        "name": "walletId",
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
        "description": "Bad request"
      }
    ]
  },
  {
    "url": "/v1/address",
    "method": "getAddressAndPaymail",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Wallets",
    "typeScriptTag": "wallets",
    "description": "Get your wallet address and paymail.",
    "parameters": [
      {
        "name": "walletId",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Successful response"
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      }
    ]
  },
  {
    "url": "/v1/allAddresses",
    "method": "getAllAddresses",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Wallets",
    "typeScriptTag": "wallets",
    "description": "Get all wallet addresses.",
    "parameters": [
      {
        "name": "walletId",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Successful response"
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      }
    ]
  },
  {
    "url": "/v1/balance",
    "method": "getBalance",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Wallets",
    "typeScriptTag": "wallets",
    "description": "Get your wallet balance.",
    "parameters": [
      {
        "name": "walletId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "type",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "currency",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "nextPageToken",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "compact",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Successful response"
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      }
    ]
  },
  {
    "url": "/v1/leaderboard",
    "method": "getTokenOwnershipDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Wallets",
    "typeScriptTag": "wallets",
    "description": "Get token ownership details",
    "parameters": [
      {
        "name": "nextPageToken",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "tokenId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TOKENID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Successful response"
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      }
    ]
  },
  {
    "url": "/v1/history",
    "method": "getTransactionHistory",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Wallets",
    "typeScriptTag": "wallets",
    "description": "Get your transaction history.",
    "parameters": [
      {
        "name": "nextPageToken",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "tokenId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "walletId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "type",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "version",
        "schema": "string",
        "required": false,
        "description": "",
        "default": "1.0.0"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Successful response"
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      }
    ]
  },
  {
    "url": "/v1/wallets",
    "method": "allWallets",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Delete",
    "typeScriptTag": "delete",
    "description": "to delete all wallet, this api will delete all wallets at once",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      }
    ]
  },
  {
    "url": "/v1/wallets",
    "method": "listAvailableUserWallets",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Wallets",
    "typeScriptTag": "wallets",
    "description": "List of available user wallets.",
    "parameters": [
      {
        "name": "oauth",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Successful response"
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      }
    ]
  },
  {
    "url": "/v1/mnemonic",
    "method": "getMnemonicPhrase",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Wallets",
    "typeScriptTag": "wallets",
    "description": "Get your mnemonic phrase.",
    "parameters": [
      {
        "name": "walletId",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Successful response"
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      }
    ]
  },
  {
    "url": "/v1/pay",
    "method": "resolveInvoiceRequest",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Transactions",
    "typeScriptTag": "transactions",
    "description": "Pay an invoice request.",
    "parameters": [
      {
        "name": "walletId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "uri",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "URI"
      },
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TYPE"
      },
      {
        "name": "mainProtocol",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "MAINPROTOCOL"
      },
      {
        "name": "outputs",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "inputs",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "modes",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "network",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "paymentUrl",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "creationTimeStamp",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "expirationTimeStamp",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "memo",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "isBSV",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "peer",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "peerData",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "peerProtocol",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "beneficiary",
        "schema": "object",
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
        "description": "Bad request"
      }
    ]
  },
  {
    "url": "/v1/initBeta",
    "method": "setupFeeManager",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "admin",
    "typeScriptTag": "admin",
    "description": "Setup your Fee Manager.",
    "parameters": [
      {
        "name": "mnemonic",
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
        "description": "Bad request"
      }
    ]
  },
  {
    "url": "/v1/feeMetricsBeta",
    "method": "getUtxoSet",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "admin",
    "typeScriptTag": "admin",
    "description": "Get all feeManager UTXOs.",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      }
    ]
  },
  {
    "url": "/v1/feeAddressBeta",
    "method": "getFeeManagerAddresses",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "admin",
    "typeScriptTag": "admin",
    "description": "Get all Fee Manager addresses.",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      }
    ]
  },
  {
    "url": "/v1/feeUtxoState",
    "method": "getFeeUtxoState",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "admin",
    "typeScriptTag": "admin",
    "description": "Get current state of fee manager UTXOs",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      }
    ]
  },
  {
    "url": "/v1/currencyConversion",
    "method": "convertSatoshiToFiat",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Utility",
    "typeScriptTag": "utility",
    "description": "Converts BSV satoshis to fiat currency.",
    "parameters": [
      {
        "name": "satoshis",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SATOSHIS"
      },
      {
        "name": "currency",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CURRENCY"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      }
    ]
  },
  {
    "url": "/v1/notificationToken/{userId}",
    "method": "notificationToken",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Delete",
    "typeScriptTag": "delete",
    "description": "Remove a notification token.",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERID"
      },
      {
        "name": "walletId",
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
        "description": "Bad request"
      }
    ]
  },
  {
    "url": "/v1/notificationToken/{userId}",
    "method": "updateToken",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Notifications",
    "typeScriptTag": "notifications",
    "description": "Update notification token.",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERID"
      },
      {
        "name": "walletId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "expoNotificationToken",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EXPONOTIFICATIONTOKEN"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      }
    ]
  },
  {
    "url": "/v1/sendNotification",
    "method": "sendNotification",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Notifications",
    "typeScriptTag": "notifications",
    "description": "Send a Notification",
    "parameters": [
      {
        "name": "walletId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "type",
        "schema": "string",
        "required": false,
        "description": "",
        "default": "to"
      },
      {
        "name": "userAddress",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERADDRESS"
      },
      {
        "name": "amount",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "transactionType",
        "schema": "string",
        "required": false,
        "description": "",
        "default": "BSV"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      }
    ]
  },
  {
    "url": "/v1/invoice",
    "method": "createInvoiceRequest",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Transactions",
    "typeScriptTag": "transactions",
    "description": "Create an invoice.",
    "parameters": [
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "type",
        "schema": "string",
        "description": "",
        "default": "USD"
      },
      {
        "name": "amount",
        "schema": "number",
        "description": ""
      },
      {
        "name": "address",
        "schema": "string",
        "description": ""
      },
      {
        "name": "expirationTimeInMinuts",
        "schema": "number",
        "description": "",
        "default": 1
      },
      {
        "name": "memo",
        "schema": "string",
        "description": ""
      },
      {
        "name": "merchantData",
        "schema": "string",
        "description": ""
      },
      {
        "name": "paymentOptions",
        "schema": "array",
        "description": ""
      },
      {
        "name": "modeId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "beneficiary",
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
        "statusCode": "400",
        "description": "Bad request"
      }
    ]
  },
  {
    "url": "/v1/paymentRequest/{invoiceId}",
    "method": "createInvoiceRequest",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Transactions",
    "typeScriptTag": "transactions",
    "description": "Create an Invoice",
    "parameters": [
      {
        "name": "invoiceId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "INVOICEID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      }
    ]
  },
  {
    "url": "/v1/paymentRequest/pay/{invoiceId}",
    "method": "settleInvoiceRequest",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Transactions",
    "typeScriptTag": "transactions",
    "description": "Settle an invoice request.",
    "parameters": [
      {
        "name": "invoiceId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "INVOICEID"
      },
      {
        "name": "merchantData",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "MERCHANTDATA"
      },
      {
        "name": "transaction",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TRANSACTION"
      },
      {
        "name": "refundTo",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "memo",
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
        "description": "Bad request"
      }
    ]
  },
  {
    "url": "/v1/domain/generateToken",
    "method": "verifyDomainOwnership",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "admin",
    "typeScriptTag": "admin",
    "description": "Generates a domain verification token",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "domain",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DOMAIN"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      }
    ]
  },
  {
    "url": "/v1/domain/{userId}/verifyToken",
    "method": "verifyDomainOwnership",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "admin",
    "typeScriptTag": "admin",
    "description": "verify domain ownership",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERID"
      },
      {
        "name": "domain",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DOMAIN"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      }
    ]
  },
  {
    "url": "/v1/paymail/{paymailId}",
    "method": "getAddressInfo",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "paymail",
    "typeScriptTag": "paymail",
    "description": "",
    "parameters": [
      {
        "name": "paymailId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PAYMAILID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      }
    ]
  },
  {
    "url": "/v1/paymail",
    "method": "updateAddressInfo",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "paymail",
    "typeScriptTag": "paymail",
    "description": "",
    "parameters": [
      {
        "name": "walletId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "newPaymailId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NEWPAYMAILID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      }
    ]
  },
  {
    "url": "/v1/wallet",
    "method": "walletData",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Delete",
    "typeScriptTag": "delete",
    "description": "to delete a wallet, this api will delete your wallet and related data of that walletId",
    "parameters": [
      {
        "name": "walletId",
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
        "description": "Bad request"
      }
    ]
  },
  {
    "url": "/v1/paymail/activate",
    "method": "activateDeactivate",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "paymail",
    "typeScriptTag": "paymail",
    "description": "to activate and deActivate paymail",
    "parameters": [
      {
        "name": "walletId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "activate",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true,
        "default": true
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      }
    ]
  },
  {
    "url": "/v1/reset/password",
    "method": "resetUserPasswordConfirmation",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Authentication",
    "typeScriptTag": "authentication",
    "description": "Password Reset.",
    "parameters": [
      {
        "name": "email",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EMAIL"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Successful response"
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      }
    ]
  },
  {
    "url": "/v1/transpile",
    "method": "transpileSolidityCodeToScrypt",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Utility",
    "typeScriptTag": "utility",
    "description": "transpile solidity code to sCrypt.",
    "parameters": [
      {
        "name": "force",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": "false"
      },
      {
        "name": "sourceCode",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SOURCECODE"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      }
    ]
  },
  {
    "url": "/v1/compile",
    "method": "compileScryptToBitcoinScript",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Utility",
    "typeScriptTag": "utility",
    "description": "compile sCrypt code to Bitcoin Script.",
    "parameters": [
      {
        "name": "sourceCode",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SOURCECODE"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      }
    ]
  },
  {
    "url": "/v1/post",
    "method": "postMessagesToBlockchain",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Utility",
    "typeScriptTag": "utility",
    "description": "Post Messages to the Blockchain.",
    "parameters": [
      {
        "name": "customToken",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "walletId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "dataArray",
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
        "description": "Bad request"
      }
    ]
  },
  {
    "url": "/v1/lookup",
    "method": "getAssetBalance",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Utility",
    "typeScriptTag": "utility",
    "description": "Returns balance of all assets of Private Key",
    "parameters": [
      {
        "name": "nextPageToken",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "tokenId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "type",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "currency",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "compact",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": true
      },
      {
        "name": "maxResults",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "privateKey",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Successful response"
      }
    ]
  },
  {
    "url": "/v1/asm",
    "method": "uploadCustomAsmScripts",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Transactions",
    "typeScriptTag": "transactions",
    "description": "Upload custom ASM scripts in a transaction",
    "parameters": [
      {
        "name": "walletId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "dataArray",
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
        "description": "Bad request"
      }
    ]
  },
  {
    "url": "/v1/sign",
    "method": "signMessageToAddress",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Utility",
    "typeScriptTag": "utility",
    "description": "Sign a message to an address string",
    "parameters": [
      {
        "name": "walletId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "dataArray",
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
        "description": "Bad request"
      }
    ]
  },
  {
    "url": "/v2/balance",
    "method": "getBalances",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Wallets",
    "typeScriptTag": "wallets",
    "description": "Get your wallet balance.",
    "parameters": [
      {
        "name": "nextPageToken",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "tokenId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "symbol",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "walletId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "type",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "currency",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "compact",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": true
      },
      {
        "name": "maxResults",
        "schema": "number",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Successful response"
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      }
    ]
  },
  {
    "url": "/v2/history",
    "method": "getTransactionHistory",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Wallets",
    "typeScriptTag": "wallets",
    "description": "Get your transaction history.",
    "parameters": [
      {
        "name": "nextPageToken",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "tokenId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "protocol",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "limit",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "walletId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "type",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Successful response"
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      }
    ]
  },
  {
    "url": "/v2/token/{id}",
    "method": "getTokenDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Smart Contracts",
    "typeScriptTag": "smartContracts",
    "description": "Get STAS token details.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      }
    ]
  },
  {
    "url": "/v2/inspect",
    "method": "inspectAtomicSwapOffer",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Transactions",
    "typeScriptTag": "transactions",
    "description": "Inspect an atomic swap offer.",
    "parameters": [
      {
        "name": "dataArray",
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
        "description": "Bad request"
      }
    ]
  },
  {
    "url": "/v2/issue",
    "method": "mintToken",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Smart Contracts",
    "typeScriptTag": "smartContracts",
    "description": "Mint a Token.",
    "parameters": [
      {
        "name": "protocol",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "reminting",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": "false"
      },
      {
        "name": "walletId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TYPE",
        "default": "NFT"
      },
      {
        "name": "description",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DESCRIPTION"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "protocolId",
        "schema": "string",
        "required": false,
        "description": "",
        "default": "STAS"
      },
      {
        "name": "symbol",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SYMBOL"
      },
      {
        "name": "image",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "IMAGE"
      },
      {
        "name": "tokenSupply",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 0,
        "default": 3
      },
      {
        "name": "decimals",
        "schema": "number",
        "required": false,
        "description": "",
        "default": 0
      },
      {
        "name": "satsPerToken",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 0,
        "default": 1
      },
      {
        "name": "properties",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "splitable",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": "true"
      },
      {
        "name": "data",
        "schema": "object",
        "required": false,
        "description": "",
        "default": {}
      },
      {
        "name": "nftMetadataSerialNumberStart",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "nftMetadataTotalSupply",
        "schema": "number",
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
        "description": "Bad request"
      }
    ]
  },
  {
    "url": "/v2/send",
    "method": "transferToAddress",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Transactions",
    "typeScriptTag": "transactions",
    "description": "Transfer coins to an address.",
    "parameters": [
      {
        "name": "walletId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "bundle",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": true
      },
      {
        "name": "txPayloads",
        "schema": "array",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Operation completed successfully"
      },
      {
        "statusCode": "207",
        "description": "Operation completed with partial success"
      },
      {
        "statusCode": "500",
        "description": "Operation failed"
      }
    ]
  },
  {
    "url": "/v1/plan/{serviceType}/activate",
    "method": "activateServiceType",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "quota",
    "typeScriptTag": "quota",
    "description": "",
    "parameters": [
      {
        "name": "serviceType",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SERVICETYPE"
      },
      {
        "name": "chargeFrom",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "serviceId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SERVICEID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      }
    ]
  },
  {
    "url": "/v1/plan/quota",
    "method": "updatePlanQuota",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "quota",
    "typeScriptTag": "quota",
    "description": "",
    "parameters": [
      {
        "name": "serviceType",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SERVICETYPE"
      },
      {
        "name": "serviceId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SERVICEID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      }
    ]
  },
  {
    "url": "/v1/plan/deactivate",
    "method": "deactivatePlan",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "quota",
    "typeScriptTag": "quota",
    "description": "",
    "parameters": [
      {
        "name": "serviceId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SERVICEID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      }
    ]
  },
  {
    "url": "/admin/v1/setup",
    "method": "setupPost",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "admin",
    "typeScriptTag": "admin",
    "description": "",
    "parameters": [
      {
        "name": "projectName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "db_store_mode",
        "schema": "string",
        "description": ""
      },
      {
        "name": "type",
        "schema": "string",
        "description": ""
      },
      {
        "name": "paymailDomain",
        "schema": "string",
        "description": ""
      },
      {
        "name": "firebaseConfig",
        "schema": "object",
        "description": ""
      },
      {
        "name": "legal",
        "schema": "object",
        "description": ""
      },
      {
        "name": "primaryDatabase",
        "schema": "string",
        "description": ""
      },
      {
        "name": "supabaseConfig",
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
        "statusCode": "400",
        "description": "Bad request"
      }
    ]
  },
  {
    "url": "/admin/v1/setup/{serviceId}",
    "method": "deleteServiceSetup",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "admin",
    "typeScriptTag": "admin",
    "description": "",
    "parameters": [
      {
        "name": "serviceId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SERVICEID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      }
    ]
  },
  {
    "url": "/admin/v1/setup/{serviceId}",
    "method": "getServiceSetup",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "admin",
    "typeScriptTag": "admin",
    "description": "",
    "parameters": [
      {
        "name": "serviceId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SERVICEID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      }
    ]
  },
  {
    "url": "/admin/v1/setup/{serviceId}",
    "method": "updateServiceSetup",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "admin",
    "typeScriptTag": "admin",
    "description": "",
    "parameters": [
      {
        "name": "serviceId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SERVICEID"
      },
      {
        "name": "projectName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "db_store_mode",
        "schema": "string",
        "description": ""
      },
      {
        "name": "type",
        "schema": "string",
        "description": ""
      },
      {
        "name": "paymailDomain",
        "schema": "string",
        "description": ""
      },
      {
        "name": "firebaseConfig",
        "schema": "object",
        "description": ""
      },
      {
        "name": "legal",
        "schema": "object",
        "description": ""
      },
      {
        "name": "supabaseConfig",
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
        "statusCode": "400",
        "description": "Bad request"
      }
    ]
  },
  {
    "url": "/admin/v1/setup/serviceIds",
    "method": "getServiceIds",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "admin",
    "typeScriptTag": "admin",
    "description": "",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      }
    ]
  },
  {
    "url": "/admin/v1/metrics",
    "method": "createMetricsRecord",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "admin",
    "typeScriptTag": "admin",
    "description": "",
    "parameters": [
      {
        "name": "walletId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "WALLETID"
      },
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      }
    ]
  },
  {
    "url": "/admin/v1/tokenMetrics",
    "method": "calculateTokenMetrics",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "admin",
    "typeScriptTag": "admin",
    "description": "",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERID"
      },
      {
        "name": "walletId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "WALLETID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      }
    ]
  },
  {
    "url": "/admin/v1/plans",
    "method": "createPlan",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "admin",
    "typeScriptTag": "admin",
    "description": "",
    "parameters": [
      {
        "name": "serviceType",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SERVICETYPE"
      },
      {
        "name": "cost",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "apiCallLimit",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "feeManagerFundPerMonth",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "unavailableApiList",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "projectLimit",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "serviceFeeManagerFillingLimit",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      }
    ]
  },
  {
    "url": "/admin/v1/plans/{serviceType}",
    "method": "deletePlanByServiceType",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "admin",
    "typeScriptTag": "admin",
    "description": "",
    "parameters": [
      {
        "name": "serviceType",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SERVICETYPE"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      }
    ]
  },
  {
    "url": "/admin/v1/plans/{serviceType}",
    "method": "getServiceTypePlans",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "admin",
    "typeScriptTag": "admin",
    "description": "",
    "parameters": [
      {
        "name": "serviceType",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SERVICETYPE"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      }
    ]
  },
  {
    "url": "/admin/v1/plans/{serviceType}",
    "method": "updatePlanServiceType",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "admin",
    "typeScriptTag": "admin",
    "description": "",
    "parameters": [
      {
        "name": "serviceType",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SERVICETYPE"
      },
      {
        "name": "cost",
        "schema": "number",
        "description": ""
      },
      {
        "name": "apiCallLimit",
        "schema": "number",
        "description": ""
      },
      {
        "name": "feeManagerFundPerMonth",
        "schema": "number",
        "description": ""
      },
      {
        "name": "unavailableApiList",
        "schema": "object",
        "description": ""
      },
      {
        "name": "projectLimit",
        "schema": "number",
        "description": ""
      },
      {
        "name": "serviceFeeManagerFillingLimit",
        "schema": "number",
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
        "description": "Bad request"
      }
    ]
  },
  {
    "url": "/admin/v1/plan/list",
    "method": "listPlans",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "admin",
    "typeScriptTag": "admin",
    "description": "Get list of available plans and their details also",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      }
    ]
  },
  {
    "url": "/upload",
    "method": "broadcastFileToBlockchain",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Utility",
    "typeScriptTag": "utility",
    "description": "Blockchain File Upload.",
    "parameters": [
      {
        "name": "walletId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "fileUrl",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FILEURL"
      },
      {
        "name": "fileName",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FILENAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      }
    ]
  },
  {
    "url": "/post",
    "method": "broadcastNoteToBlockchain",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Utility",
    "typeScriptTag": "utility",
    "description": "Post Messages to the Blockchain.",
    "parameters": [
      {
        "name": "walletId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "notes",
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
        "description": "Bad request"
      }
    ]
  },
  {
    "url": "/v1/bsvalias/id/{paymail}",
    "method": "getProfileDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "paymail",
    "typeScriptTag": "paymail",
    "description": "",
    "parameters": [
      {
        "name": "paymail",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PAYMAIL"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Default Response"
      }
    ]
  },
  {
    "url": "/v1/bsvalias/address/{paymail}",
    "method": "resolveAddressInfo",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "paymail",
    "typeScriptTag": "paymail",
    "description": "",
    "parameters": [
      {
        "name": "paymail",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PAYMAIL"
      },
      {
        "name": "senderHandle",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SENDERHANDLE"
      },
      {
        "name": "dt",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DT"
      },
      {
        "name": "signature",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "amount",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "purpose",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "senderName",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Default Response"
      }
    ]
  },
  {
    "url": "/v1/bsvalias/verifypubkey/{paymail}/{pubkey}",
    "method": "verifyPubkey",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "paymail",
    "typeScriptTag": "paymail",
    "description": "",
    "parameters": [
      {
        "name": "paymail",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PAYMAIL"
      },
      {
        "name": "pubkey",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PUBKEY"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Default Response"
      }
    ]
  },
  {
    "url": "/v1/bsvalias/receive-transaction/{paymail}",
    "method": "receiveTransaction",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "paymail",
    "typeScriptTag": "paymail",
    "description": "",
    "parameters": [
      {
        "name": "paymail",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PAYMAIL"
      },
      {
        "name": "hex",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "HEX"
      },
      {
        "name": "reference",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "REFERENCE"
      },
      {
        "name": "metadata",
        "schema": "object",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Default Response"
      }
    ]
  },
  {
    "url": "/v1/bsvalias/p2p-payment-destination/{paymail}",
    "method": "createP2PPaymentDestination",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "paymail",
    "typeScriptTag": "paymail",
    "description": "",
    "parameters": [
      {
        "name": "paymail",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PAYMAIL"
      },
      {
        "name": "satoshis",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Default Response"
      }
    ]
  },
  {
    "url": "/.well-known/bsvalias",
    "method": "getBsvAlias",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "paymail",
    "typeScriptTag": "paymail",
    "description": "",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "Default Response"
      }
    ]
  }
]
    }
      language="TypeScript"
      apiTitle="Relysia Blockchain API"
      apiBaseUrl="https://api.relysia.com"
      apiVersion="2.4.8"
      endpoints={78}
      sdkMethods={85}
      schemas={197}
      parameters={252}
      difficulty="Medium"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/relysia/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/relysia/openapi.yaml"
      developerDocumentation="api.relysia.com/docs/static/index.html"
    />
  );
}
  