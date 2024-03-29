import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function TilledTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="tilled-typescript-sdk"
      metaDescription={`Tilled was created to empower software vendors, marketplaces, and SaaS companies to start generating revenue from accepting credit cards. With our suite of powerful financial tools and industry leading revenue sharing programs, Tilled will power the financial backend of the next generation of marketplaces, SaaS companies, and integrated software vendors allowing them to focus on their core product, not payments. We enable these companies to enjoy all the benefits of a fully registered payment facilitator program without the upfront cost, hassle, or liability. Welcome to Payfac-as-a-service. Plug in our easy to implement APIs and start making revenue from credit card processing today. For far too long options like Stripe and Braintree have had a monopoly on the market, and have charged far too much for their services. For B2B software companies looking for a better option that provides all of the benefits with none of the hassle, it's time to Get Tilled and experience Payfac-as-a-Service.`}
      company="Tilled"
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/tilled/logo.webp"
      companyKebabCase="tilled"
      clientNameCamelCase="tilled"
      homepage="tilled.com"
      lastUpdated={new Date("2024-03-29T23:26:36.999Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/tilled/favicon.png"
      contactUrl="https://www.tilled.com/contact-us/"
      contactEmail="integrations@tilled.com"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/tilled/imagePreview.png"
      GettingStarted={GettingStarted}
      FirstRequest={FirstRequest}
      categories={["payments"]}
      methods={[
  {
    "url": "/v1/accounts",
    "method": "getDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Accounts",
    "typeScriptTag": "accounts",
    "description": "Get an Account",
    "parameters": [
      {
        "name": "tilledAccount",
        "schema": "string",
        "required": true,
        "description": "The id of the Tilled Account (usually starting with the prefix `acct_`) that the request is performed on behalf of.",
        "example": "TILLED-ACCOUNT"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/accounts",
    "method": "updateAccount",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Accounts",
    "typeScriptTag": "accounts",
    "description": "Update an Account",
    "parameters": [
      {
        "name": "tilledAccount",
        "schema": "string",
        "required": true,
        "description": "The id of the Tilled Account (usually starting with the prefix `acct_`) that the request is performed on behalf of.",
        "example": "TILLED-ACCOUNT"
      },
      {
        "name": "bank_account",
        "schema": "object",
        "description": ""
      },
      {
        "name": "email",
        "schema": "string",
        "description": ""
      },
      {
        "name": "metadata",
        "schema": "object",
        "description": "",
        "example": {
          "order_id": "100123",
          "internal_customer_id": "7cb1159d-875e-47ae-a309-319fa7ff395b"
        }
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "settings",
        "schema": "object",
        "description": ""
      },
      {
        "name": "white_label_domain",
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
    "url": "/v1/accounts/capabilities",
    "method": "addCapability",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Accounts",
    "typeScriptTag": "accounts",
    "description": "Add an Account Capability",
    "parameters": [
      {
        "name": "tilledAccount",
        "schema": "string",
        "required": true,
        "description": "The id of the Tilled Account (usually starting with the prefix `acct_`) that the request is performed on behalf of.",
        "example": "TILLED-ACCOUNT"
      },
      {
        "name": "pricing_template_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PRICING_TEMPLATE_ID"
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
    "url": "/v1/accounts/capabilities/{id}",
    "method": "removeCapability",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Accounts",
    "typeScriptTag": "accounts",
    "description": "Delete an Account Capability",
    "parameters": [
      {
        "name": "tilledAccount",
        "schema": "string",
        "required": true,
        "description": "The id of the Tilled Account (usually starting with the prefix `acct_`) that the request is performed on behalf of.",
        "example": "TILLED-ACCOUNT"
      },
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
        "statusCode": "204",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/accounts/capabilities/{id}",
    "method": "updateCapability",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Accounts",
    "typeScriptTag": "accounts",
    "description": "Update an Account Capability",
    "parameters": [
      {
        "name": "tilledAccount",
        "schema": "string",
        "required": true,
        "description": "The id of the Tilled Account (usually starting with the prefix `acct_`) that the request is performed on behalf of.",
        "example": "TILLED-ACCOUNT"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "pricing_template_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PRICING_TEMPLATE_ID"
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
    "url": "/v1/accounts/connected",
    "method": "deleteMerchantAccount",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Accounts",
    "typeScriptTag": "accounts",
    "description": "Delete a Connected Account",
    "parameters": [
      {
        "name": "tilledAccount",
        "schema": "string",
        "required": true,
        "description": "The id of the Tilled Account (usually starting with the prefix `acct_`) that the request is performed on behalf of.",
        "example": "TILLED-ACCOUNT"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/accounts/connected",
    "method": "listConnected",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Accounts",
    "typeScriptTag": "accounts",
    "description": "List all Connected Accounts",
    "parameters": [
      {
        "name": "tilledAccount",
        "schema": "string",
        "required": true,
        "description": "The id of the Tilled Account (usually starting with the prefix `acct_`) that the request is performed on behalf of.",
        "example": "TILLED-ACCOUNT"
      },
      {
        "name": "metadata",
        "schema": "object",
        "required": false,
        "description": "`metadata` key-value pairs to filter by. Only exact matches on the key-value pair(https://docs.tilled.com/api/ will be returned. Example: `?metadata[internal_customer_id]=7cb1159d-875e-47ae-a309-319fa7ff395b`."
      },
      {
        "name": "q",
        "schema": "string",
        "required": false,
        "description": "The partial search of text fields. Supports searching by `account.name`, `account.business_profile.legal_name`,\n`account.id`, `account.email`, `user.name`, `user.email`"
      },
      {
        "name": "sort",
        "schema": "string",
        "required": false,
        "description": "The sort parameters, value:direction. Possible values: `name`, `created_at`. Possible directions:  `asc`, `desc`\n\nFor example `name:asc`.\n\nDefault: `created_at:desc`"
      },
      {
        "name": "offset",
        "schema": "number",
        "required": false,
        "description": "The (https://docs.tilled.com/api/ offset of the first item in the collection to return.",
        "default": 0
      },
      {
        "name": "limit",
        "schema": "number",
        "required": false,
        "description": "The maximum number of entries to return. If the value exceeds the maximum, then the maximum value will be used.",
        "default": 30
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/accounts/connected",
    "method": "createConnectedAccount",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Accounts",
    "typeScriptTag": "accounts",
    "description": "Create a Connected Account",
    "parameters": [
      {
        "name": "tilledAccount",
        "schema": "string",
        "required": true,
        "description": "The id of the Tilled Account (usually starting with the prefix `acct_`) that the request is performed on behalf of.",
        "example": "TILLED-ACCOUNT"
      },
      {
        "name": "bank_account",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "email",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EMAIL"
      },
      {
        "name": "metadata",
        "schema": "object",
        "required": false,
        "description": "",
        "example": {
          "order_id": "100123",
          "internal_customer_id": "7cb1159d-875e-47ae-a309-319fa7ff395b"
        }
      },
      {
        "name": "name",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "pricing_template_ids",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "product_code_ids",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "settings",
        "schema": "object",
        "required": false,
        "description": ""
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
    "url": "/v1/api-keys",
    "method": "listAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "API Keys",
    "typeScriptTag": "apiKeys",
    "description": "List all API Keys",
    "parameters": [
      {
        "name": "tilledAccount",
        "schema": "string",
        "required": true,
        "description": "The id of the Tilled Account (usually starting with the prefix `acct_`) that the request is performed on behalf of.",
        "example": "TILLED-ACCOUNT"
      },
      {
        "name": "offset",
        "schema": "number",
        "required": false,
        "description": "The (https://docs.tilled.com/api/ offset of the first item in the collection to return.",
        "default": 0
      },
      {
        "name": "limit",
        "schema": "number",
        "required": false,
        "description": "The maximum number of entries to return. If the value exceeds the maximum, then the maximum value will be used.",
        "default": 30
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/api-keys",
    "method": "createNewKey",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "API Keys",
    "typeScriptTag": "apiKeys",
    "description": "Create an API key",
    "parameters": [
      {
        "name": "tilledAccount",
        "schema": "string",
        "required": true,
        "description": "The id of the Tilled Account (usually starting with the prefix `acct_`) that the request is performed on behalf of.",
        "example": "TILLED-ACCOUNT"
      },
      {
        "name": "name",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "scopes",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TYPE"
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
    "url": "/v1/api-keys/{id}",
    "method": "permanentlyDeleteById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "API Keys",
    "typeScriptTag": "apiKeys",
    "description": "Delete an API Key",
    "parameters": [
      {
        "name": "tilledAccount",
        "schema": "string",
        "required": true,
        "description": "The id of the Tilled Account (usually starting with the prefix `acct_`) that the request is performed on behalf of.",
        "example": "TILLED-ACCOUNT"
      },
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
        "statusCode": "204",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/api-keys/{id}",
    "method": "updateKey",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "API Keys",
    "typeScriptTag": "apiKeys",
    "description": "Update an API key",
    "parameters": [
      {
        "name": "tilledAccount",
        "schema": "string",
        "required": true,
        "description": "The id of the Tilled Account (usually starting with the prefix `acct_`) that the request is performed on behalf of.",
        "example": "TILLED-ACCOUNT"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "scopes",
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
    "url": "/v1/apple-pay-domains",
    "method": "listAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "ApplePayDomains",
    "typeScriptTag": "applePayDomains",
    "description": "List all Apple Pay Domains",
    "parameters": [
      {
        "name": "offset",
        "schema": "number",
        "required": false,
        "description": "The (https://docs.tilled.com/api/ offset of the first item in the collection to return.",
        "default": 0
      },
      {
        "name": "limit",
        "schema": "number",
        "required": false,
        "description": "The maximum number of entries to return. If the value exceeds the maximum, then the maximum value will be used.",
        "default": 30
      },
      {
        "name": "tilledAccount",
        "schema": "string",
        "required": true,
        "description": "The id of the Tilled Account (usually starting with the prefix `acct_`) that the request is performed on behalf of.",
        "example": "TILLED-ACCOUNT"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/apple-pay-domains",
    "method": "createDomain",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "ApplePayDomains",
    "typeScriptTag": "applePayDomains",
    "description": "Create an Apple Pay Domain",
    "parameters": [
      {
        "name": "tilledAccount",
        "schema": "string",
        "required": true,
        "description": "The id of the Tilled Account (usually starting with the prefix `acct_`) that the request is performed on behalf of.",
        "example": "TILLED-ACCOUNT"
      },
      {
        "name": "hostname",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "HOSTNAME"
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
    "url": "/v1/apple-pay-domains/{id}",
    "method": "deleteDomain",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "ApplePayDomains",
    "typeScriptTag": "applePayDomains",
    "description": "Delete an Apple Pay Domain",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "tilledAccount",
        "schema": "string",
        "required": true,
        "description": "The id of the Tilled Account (usually starting with the prefix `acct_`) that the request is performed on behalf of.",
        "example": "TILLED-ACCOUNT"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/apple-pay-domains/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "ApplePayDomains",
    "typeScriptTag": "applePayDomains",
    "description": "Get an Apple Pay Domain",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "tilledAccount",
        "schema": "string",
        "required": true,
        "description": "The id of the Tilled Account (usually starting with the prefix `acct_`) that the request is performed on behalf of.",
        "example": "TILLED-ACCOUNT"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/applications/{account_id}",
    "method": "getMerchantApplication",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Onboarding",
    "typeScriptTag": "onboarding",
    "description": "Get a Merchant Application",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The id of the associated connected (i.e. merchant) account.",
        "example": "ACCOUNT_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/applications/{account_id}",
    "method": "updateMerchantApplication",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Onboarding",
    "typeScriptTag": "onboarding",
    "description": "Update a Merchant Application",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The id of the associated connected (i.e. merchant) account.",
        "example": "ACCOUNT_ID"
      },
      {
        "name": "accept_terms_and_conditions",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "business_legal_entity",
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/applications/{account_id}/submit",
    "method": "submitMerchantApplication",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Onboarding",
    "typeScriptTag": "onboarding",
    "description": "Submit a Merchant Application",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The id of the associated connected (i.e. merchant) account.",
        "example": "ACCOUNT_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/auth-links",
    "method": "createLink",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Auth Links",
    "typeScriptTag": "authLinks",
    "description": "Create an Auth Link",
    "parameters": [
      {
        "name": "tilledAccount",
        "schema": "string",
        "required": true,
        "description": "The id of the Tilled Account (usually starting with the prefix `acct_`) that the request is performed on behalf of.",
        "example": "TILLED-ACCOUNT"
      },
      {
        "name": "expiration",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EXPIRATION"
      },
      {
        "name": "metadata",
        "schema": "object",
        "required": false,
        "description": "",
        "example": {
          "order_id": "100123",
          "internal_customer_id": "7cb1159d-875e-47ae-a309-319fa7ff395b"
        }
      },
      {
        "name": "redirect_url",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "user_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USER_ID"
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
    "url": "/v1/auth/forgot",
    "method": "requestPasswordReset",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Forgot Password",
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
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/auth/login",
    "method": "createJwtToken",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Login",
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
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/auth/logout",
    "method": "invalidateRefreshToken",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Logout",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/auth/refresh",
    "method": "refreshAccessToken",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Refresh an Access Token",
    "parameters": [
      {
        "name": "refresh_token",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "REFRESH_TOKEN"
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
    "url": "/v1/auth/register",
    "method": "registerUserAndPartnerAccount",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Register",
    "parameters": [
      {
        "name": "account_name",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "email",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EMAIL"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "password",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PASSWORD"
      },
      {
        "name": "user_invitation_id",
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
        "statusCode": "403",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/auth/reset",
    "method": "resetPassword",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Reset Password",
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
        "name": "password_reset_token",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PASSWORD_RESET_TOKEN"
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
    "url": "/v1/balance-transactions",
    "method": "listAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Balance Transactions",
    "typeScriptTag": "balanceTransactions",
    "description": "List all Balance Transactions",
    "parameters": [
      {
        "name": "tilledAccount",
        "schema": "string",
        "required": true,
        "description": "The id of the Tilled Account (usually starting with the prefix `acct_`) that the request is performed on behalf of.",
        "example": "TILLED-ACCOUNT"
      },
      {
        "name": "createdAtGte",
        "schema": "string",
        "required": false,
        "description": "Minimum `created_at` value to filter by (https://docs.tilled.com/api/."
      },
      {
        "name": "createdAtLte",
        "schema": "string",
        "required": false,
        "description": "Maximum `created_at` value to filter by (https://docs.tilled.com/api/."
      },
      {
        "name": "type",
        "schema": "string",
        "required": false,
        "description": "Only return transaction of the given type."
      },
      {
        "name": "sourceId",
        "schema": "string",
        "required": false,
        "description": "Only returns the original transaction."
      },
      {
        "name": "payoutId",
        "schema": "string",
        "required": false,
        "description": "Only returns transactions that were paid out on the specified payout ID."
      },
      {
        "name": "offset",
        "schema": "number",
        "required": false,
        "description": "The (https://docs.tilled.com/api/ offset of the first item in the collection to return.",
        "default": 0
      },
      {
        "name": "limit",
        "schema": "number",
        "required": false,
        "description": "The maximum number of entries to return. If the value exceeds the maximum, then the maximum value will be used.",
        "default": 30
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/balance-transactions/summary",
    "method": "getSummary",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Balance Transactions",
    "typeScriptTag": "balanceTransactions",
    "description": "Get a Balance Transactions Summary",
    "parameters": [
      {
        "name": "tilledAccount",
        "schema": "string",
        "required": true,
        "description": "The id of the Tilled Account (usually starting with the prefix `acct_`) that the request is performed on behalf of.",
        "example": "TILLED-ACCOUNT"
      },
      {
        "name": "timeUnit",
        "schema": "string",
        "required": false,
        "description": "String indicating the unit of time to aggregate the summary of data.",
        "default": "month"
      },
      {
        "name": "timeZone",
        "schema": "string",
        "required": false,
        "description": "Time Zone by which to aggregate the results.",
        "default": "America/Chicago"
      },
      {
        "name": "createdAtGte",
        "schema": "string",
        "required": false,
        "description": "Minimum `created_at` value to filter by (https://docs.tilled.com/api/. Defaults to the beginning of the current month."
      },
      {
        "name": "createdAtLte",
        "schema": "string",
        "required": false,
        "description": "Maximum `created_at` value to filter by (https://docs.tilled.com/api/. Defaults to midnight tonight."
      },
      {
        "name": "types",
        "schema": "array",
        "required": false,
        "description": "An array containing specific balance transaction types. The data will be filtered to include only transactions with a matching type property."
      },
      {
        "name": "includeConnectedAccounts",
        "schema": "boolean",
        "required": false,
        "description": "Whether or not to include the results from any connected accounts.",
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
    "url": "/v1/balance-transactions/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Balance Transactions",
    "typeScriptTag": "balanceTransactions",
    "description": "Get a Balance Transaction",
    "parameters": [
      {
        "name": "tilledAccount",
        "schema": "string",
        "required": true,
        "description": "The id of the Tilled Account (usually starting with the prefix `acct_`) that the request is performed on behalf of.",
        "example": "TILLED-ACCOUNT"
      },
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
      }
    ]
  },
  {
    "url": "/v1/charges/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Charges",
    "typeScriptTag": "charges",
    "description": "Get a Charge",
    "parameters": [
      {
        "name": "tilledAccount",
        "schema": "string",
        "required": true,
        "description": "The id of the Tilled Account (usually starting with the prefix `acct_`) that the request is performed on behalf of.",
        "example": "TILLED-ACCOUNT"
      },
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
      }
    ]
  },
  {
    "url": "/v1/checkout-sessions",
    "method": "listAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Checkout Sessions",
    "typeScriptTag": "checkoutSessions",
    "description": "List all Checkout Sessions",
    "parameters": [
      {
        "name": "tilledAccount",
        "schema": "string",
        "required": true,
        "description": "The id of the Tilled Account (usually starting with the prefix `acct_`) that the request is performed on behalf of.",
        "example": "TILLED-ACCOUNT"
      },
      {
        "name": "metadata",
        "schema": "object",
        "required": false,
        "description": "`metadata` key-value pairs to filter by. Only exact matches on the key-value pair(https://docs.tilled.com/api/ will be returned. Example: `?metadata[internal_customer_id]=7cb1159d-875e-47ae-a309-319fa7ff395b`."
      },
      {
        "name": "paymentIntentId",
        "schema": "string",
        "required": false,
        "description": "Only return the checkout session for the payment intent specified."
      },
      {
        "name": "customerId",
        "schema": "string",
        "required": false,
        "description": "Only return the checkout session for the customer specified."
      },
      {
        "name": "offset",
        "schema": "number",
        "required": false,
        "description": "The (https://docs.tilled.com/api/ offset of the first item in the collection to return.",
        "default": 0
      },
      {
        "name": "limit",
        "schema": "number",
        "required": false,
        "description": "The maximum number of entries to return. If the value exceeds the maximum, then the maximum value will be used.",
        "default": 30
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/checkout-sessions",
    "method": "createSession",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Checkout Sessions",
    "typeScriptTag": "checkoutSessions",
    "description": "Create a Checkout Session",
    "parameters": [
      {
        "name": "tilledAccount",
        "schema": "string",
        "required": true,
        "description": "The id of the Tilled Account (usually starting with the prefix `acct_`) that the request is performed on behalf of.",
        "example": "TILLED-ACCOUNT"
      },
      {
        "name": "cancel_url",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "customer_email",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "customer_id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "expires_at",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "line_items",
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
          "order_id": "100123",
          "internal_customer_id": "7cb1159d-875e-47ae-a309-319fa7ff395b"
        }
      },
      {
        "name": "payment_intent_data",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "success_url",
        "schema": "string",
        "required": false,
        "description": ""
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
    "url": "/v1/checkout-sessions/{id}",
    "method": "getDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Checkout Sessions",
    "typeScriptTag": "checkoutSessions",
    "description": "Get a Checkout Session",
    "parameters": [
      {
        "name": "tilledAccount",
        "schema": "string",
        "required": true,
        "description": "The id of the Tilled Account (usually starting with the prefix `acct_`) that the request is performed on behalf of.",
        "example": "TILLED-ACCOUNT"
      },
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
      }
    ]
  },
  {
    "url": "/v1/checkout-sessions/{id}/expire",
    "method": "expireSession",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Checkout Sessions",
    "typeScriptTag": "checkoutSessions",
    "description": "Expire a Checkout Session",
    "parameters": [
      {
        "name": "tilledAccount",
        "schema": "string",
        "required": true,
        "description": "The id of the Tilled Account (usually starting with the prefix `acct_`) that the request is performed on behalf of.",
        "example": "TILLED-ACCOUNT"
      },
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
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/customers",
    "method": "listAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Customers",
    "typeScriptTag": "customers",
    "description": "List all Customers",
    "parameters": [
      {
        "name": "tilledAccount",
        "schema": "string",
        "required": true,
        "description": "The id of the Tilled Account (usually starting with the prefix `acct_`) that the request is performed on behalf of.",
        "example": "TILLED-ACCOUNT"
      },
      {
        "name": "metadata",
        "schema": "object",
        "required": false,
        "description": "`metadata` key-value pairs to filter by. Only exact matches on the key-value pair(https://docs.tilled.com/api/ will be returned. Example: `?metadata[internal_customer_id]=7cb1159d-875e-47ae-a309-319fa7ff395b`."
      },
      {
        "name": "q",
        "schema": "string",
        "required": false,
        "description": "The partial search of text fields. Supports searching by `customer.first_name`, `customer.last_name`,\n`customer.email`, `customer.phone`"
      },
      {
        "name": "offset",
        "schema": "number",
        "required": false,
        "description": "The (https://docs.tilled.com/api/ offset of the first item in the collection to return.",
        "default": 0
      },
      {
        "name": "limit",
        "schema": "number",
        "required": false,
        "description": "The maximum number of entries to return. If the value exceeds the maximum, then the maximum value will be used.",
        "default": 30
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/customers",
    "method": "createCustomerObject",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Customers",
    "typeScriptTag": "customers",
    "description": "Create a Customer",
    "parameters": [
      {
        "name": "tilledAccount",
        "schema": "string",
        "required": true,
        "description": "The id of the Tilled Account (usually starting with the prefix `acct_`) that the request is performed on behalf of.",
        "example": "TILLED-ACCOUNT"
      },
      {
        "name": "email",
        "schema": "string",
        "description": ""
      },
      {
        "name": "first_name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "last_name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "metadata",
        "schema": "object",
        "description": "",
        "example": {
          "order_id": "100123",
          "internal_customer_id": "7cb1159d-875e-47ae-a309-319fa7ff395b"
        }
      },
      {
        "name": "middle_name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "phone",
        "schema": "string",
        "description": ""
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
    "url": "/v1/customers/{id}",
    "method": "deleteCustomer",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Customers",
    "typeScriptTag": "customers",
    "description": "Delete a Customer",
    "parameters": [
      {
        "name": "tilledAccount",
        "schema": "string",
        "required": true,
        "description": "The id of the Tilled Account (usually starting with the prefix `acct_`) that the request is performed on behalf of.",
        "example": "TILLED-ACCOUNT"
      },
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
        "statusCode": "204",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/customers/{id}",
    "method": "getDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Customers",
    "typeScriptTag": "customers",
    "description": "Get a Customer",
    "parameters": [
      {
        "name": "tilledAccount",
        "schema": "string",
        "required": true,
        "description": "The id of the Tilled Account (usually starting with the prefix `acct_`) that the request is performed on behalf of.",
        "example": "TILLED-ACCOUNT"
      },
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
      }
    ]
  },
  {
    "url": "/v1/customers/{id}",
    "method": "updateCustomerById",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Customers",
    "typeScriptTag": "customers",
    "description": "Update a Customer",
    "parameters": [
      {
        "name": "tilledAccount",
        "schema": "string",
        "required": true,
        "description": "The id of the Tilled Account (usually starting with the prefix `acct_`) that the request is performed on behalf of.",
        "example": "TILLED-ACCOUNT"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "email",
        "schema": "string",
        "description": ""
      },
      {
        "name": "first_name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "last_name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "metadata",
        "schema": "object",
        "description": "",
        "example": {
          "order_id": "100123",
          "internal_customer_id": "7cb1159d-875e-47ae-a309-319fa7ff395b"
        }
      },
      {
        "name": "middle_name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "phone",
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
    "url": "/v1/disputes",
    "method": "listAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Disputes",
    "typeScriptTag": "disputes",
    "description": "List all Disputes",
    "parameters": [
      {
        "name": "tilledAccount",
        "schema": "string",
        "required": true,
        "description": "The id of the Tilled Account (usually starting with the prefix `acct_`) that the request is performed on behalf of.",
        "example": "TILLED-ACCOUNT"
      },
      {
        "name": "chargeId",
        "schema": "string",
        "required": false,
        "description": "Only returns disputes for the charge specified by this charge ID."
      },
      {
        "name": "includeConnectedAccounts",
        "schema": "boolean",
        "required": false,
        "description": "Whether or not to include the results from any connected accounts.",
        "default": false
      },
      {
        "name": "createdAtGte",
        "schema": "string",
        "required": false,
        "description": "Minimum `created_at` value to filter by (https://docs.tilled.com/api/."
      },
      {
        "name": "createdAtLte",
        "schema": "string",
        "required": false,
        "description": "Maximum `created_at` value to filter by (https://docs.tilled.com/api/."
      },
      {
        "name": "status",
        "schema": "array",
        "required": false,
        "description": "String indicating the status to filter the result by."
      },
      {
        "name": "offset",
        "schema": "number",
        "required": false,
        "description": "The (https://docs.tilled.com/api/ offset of the first item in the collection to return.",
        "default": 0
      },
      {
        "name": "limit",
        "schema": "number",
        "required": false,
        "description": "The maximum number of entries to return. If the value exceeds the maximum, then the maximum value will be used.",
        "default": 30
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/disputes/{id}",
    "method": "getDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Disputes",
    "typeScriptTag": "disputes",
    "description": "Get a Dispute",
    "parameters": [
      {
        "name": "tilledAccount",
        "schema": "string",
        "required": true,
        "description": "The id of the Tilled Account (usually starting with the prefix `acct_`) that the request is performed on behalf of.",
        "example": "TILLED-ACCOUNT"
      },
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
      }
    ]
  },
  {
    "url": "/v1/disputes/{id}",
    "method": "submitEvidence",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Disputes",
    "typeScriptTag": "disputes",
    "description": "Create Dispute Evidence",
    "parameters": [
      {
        "name": "tilledAccount",
        "schema": "string",
        "required": true,
        "description": "The id of the Tilled Account (usually starting with the prefix `acct_`) that the request is performed on behalf of.",
        "example": "TILLED-ACCOUNT"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "files",
        "schema": "array",
        "description": ""
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
    "url": "/v1/documents",
    "method": "listAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Documents",
    "typeScriptTag": "documents",
    "description": "List all Documents",
    "parameters": [
      {
        "name": "tilledAccount",
        "schema": "string",
        "required": true,
        "description": "The id of the Tilled Account (usually starting with the prefix `acct_`) that the request is performed on behalf of.",
        "example": "TILLED-ACCOUNT"
      },
      {
        "name": "status",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "offset",
        "schema": "number",
        "required": false,
        "description": "The (https://docs.tilled.com/api/ offset of the first item in the collection to return.",
        "default": 0
      },
      {
        "name": "limit",
        "schema": "number",
        "required": false,
        "description": "The maximum number of entries to return. If the value exceeds the maximum, then the maximum value will be used.",
        "default": 30
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/documents/bulk-submit",
    "method": "bulkSubmit",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Documents",
    "typeScriptTag": "documents",
    "description": "Bulk Submit Documents",
    "parameters": [
      {
        "name": "tilledAccount",
        "schema": "string",
        "required": true,
        "description": "The id of the Tilled Account (usually starting with the prefix `acct_`) that the request is performed on behalf of.",
        "example": "TILLED-ACCOUNT"
      },
      {
        "name": "submissions",
        "schema": "array",
        "required": true,
        "description": ""
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
    "url": "/v1/documents/{id}",
    "method": "getDetailsById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Documents",
    "typeScriptTag": "documents",
    "description": "Get a Document",
    "parameters": [
      {
        "name": "tilledAccount",
        "schema": "string",
        "required": true,
        "description": "The id of the Tilled Account (usually starting with the prefix `acct_`) that the request is performed on behalf of.",
        "example": "TILLED-ACCOUNT"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The id of the document to be retrieved.",
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
    "url": "/v1/documents/{id}/submit",
    "method": "submitDocument",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Documents",
    "typeScriptTag": "documents",
    "description": "Submit a Document",
    "parameters": [
      {
        "name": "tilledAccount",
        "schema": "string",
        "required": true,
        "description": "The id of the Tilled Account (usually starting with the prefix `acct_`) that the request is performed on behalf of.",
        "example": "TILLED-ACCOUNT"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The id of the document to be updated.",
        "example": "ID"
      },
      {
        "name": "file_id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "written_response",
        "schema": "string",
        "description": ""
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
    "url": "/v1/events",
    "method": "listAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Events",
    "typeScriptTag": "events",
    "description": "List all Events",
    "parameters": [
      {
        "name": "tilledAccount",
        "schema": "string",
        "required": true,
        "description": "The id of the Tilled Account (usually starting with the prefix `acct_`) that the request is performed on behalf of.",
        "example": "TILLED-ACCOUNT"
      },
      {
        "name": "createdAtGte",
        "schema": "string",
        "required": false,
        "description": "Minimum `created_at` value to filter by (https://docs.tilled.com/api/."
      },
      {
        "name": "createdAtLte",
        "schema": "string",
        "required": false,
        "description": "Maximum `created_at` value to filter by (https://docs.tilled.com/api/."
      },
      {
        "name": "types",
        "schema": "array",
        "required": false,
        "description": "An array of up to 20 strings containing specific event names. The list will be filtered to include only events with a matching event property."
      },
      {
        "name": "objectId",
        "schema": "string",
        "required": false,
        "description": "Id of related resource. The list will be filtered to include events that are related to the resource with this id."
      },
      {
        "name": "offset",
        "schema": "number",
        "required": false,
        "description": "The (https://docs.tilled.com/api/ offset of the first item in the collection to return.",
        "default": 0
      },
      {
        "name": "limit",
        "schema": "number",
        "required": false,
        "description": "The maximum number of entries to return. If the value exceeds the maximum, then the maximum value will be used.",
        "default": 30
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/events/{id}",
    "method": "getDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Events",
    "typeScriptTag": "events",
    "description": "Get an Event",
    "parameters": [
      {
        "name": "tilledAccount",
        "schema": "string",
        "required": true,
        "description": "The id of the Tilled Account (usually starting with the prefix `acct_`) that the request is performed on behalf of.",
        "example": "TILLED-ACCOUNT"
      },
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/files",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Files",
    "typeScriptTag": "files",
    "description": "List all Files",
    "parameters": [
      {
        "name": "tilledAccount",
        "schema": "string",
        "required": true,
        "description": "The id of the Tilled Account (usually starting with the prefix `acct_`) that the request is performed on behalf of.",
        "example": "TILLED-ACCOUNT"
      },
      {
        "name": "purposes",
        "schema": "array",
        "required": false,
        "description": "A list of file purposes to filter on."
      },
      {
        "name": "offset",
        "schema": "number",
        "required": false,
        "description": "The (https://docs.tilled.com/api/ offset of the first item in the collection to return.",
        "default": 0
      },
      {
        "name": "limit",
        "schema": "number",
        "required": false,
        "description": "The maximum number of entries to return. If the value exceeds the maximum, then the maximum value will be used.",
        "default": 30
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/files",
    "method": "uploadFile",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Files",
    "typeScriptTag": "files",
    "description": "Create a File",
    "parameters": [
      {
        "name": "tilledAccount",
        "schema": "string",
        "required": true,
        "description": "The id of the Tilled Account (usually starting with the prefix `acct_`) that the request is performed on behalf of.",
        "example": "TILLED-ACCOUNT"
      },
      {
        "name": "title",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "file",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FILE"
      },
      {
        "name": "purpose",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PURPOSE"
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
    "url": "/v1/files/{id}",
    "method": "permanentlyDeleteById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Files",
    "typeScriptTag": "files",
    "description": "Delete a File",
    "parameters": [
      {
        "name": "tilledAccount",
        "schema": "string",
        "required": true,
        "description": "The id of the Tilled Account (usually starting with the prefix `acct_`) that the request is performed on behalf of.",
        "example": "TILLED-ACCOUNT"
      },
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
        "statusCode": "204",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/files/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Files",
    "typeScriptTag": "files",
    "description": "Get a File",
    "parameters": [
      {
        "name": "tilledAccount",
        "schema": "string",
        "required": true,
        "description": "The id of the Tilled Account (usually starting with the prefix `acct_`) that the request is performed on behalf of.",
        "example": "TILLED-ACCOUNT"
      },
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
      }
    ]
  },
  {
    "url": "/v1/files/{id}/contents",
    "method": "getContentsById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Files",
    "typeScriptTag": "files",
    "description": "Get the Contents of a File",
    "parameters": [
      {
        "name": "tilledAccount",
        "schema": "string",
        "required": true,
        "description": "The id of the Tilled Account (usually starting with the prefix `acct_`) that the request is performed on behalf of.",
        "example": "TILLED-ACCOUNT"
      },
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
      }
    ]
  },
  {
    "url": "/v1/health",
    "method": "overallStatus",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Health",
    "typeScriptTag": "health",
    "description": "Get the Overall Health of the API",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/outbound-transfers",
    "method": "listAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Outbound Transfers",
    "typeScriptTag": "outboundTransfers",
    "description": "List all Outbound Transfers",
    "parameters": [
      {
        "name": "tilledAccount",
        "schema": "string",
        "required": true,
        "description": "The id of the Tilled Account (usually starting with the prefix `acct_`) that the request is performed on behalf of.",
        "example": "TILLED-ACCOUNT"
      },
      {
        "name": "metadata",
        "schema": "object",
        "required": false,
        "description": "`metadata` key-value pairs to filter by. Only exact matches on the key-value pair(https://docs.tilled.com/api/ will be returned. Example: `?metadata[internal_customer_id]=7cb1159d-875e-47ae-a309-319fa7ff395b`."
      },
      {
        "name": "status",
        "schema": "array",
        "required": false,
        "description": "Only return OutboundTransfers whose status is included by this array. Example: `/v1/outbound-transfers?status=succeeded`"
      },
      {
        "name": "includeConnectedAccounts",
        "schema": "boolean",
        "required": false,
        "description": "Whether or not to include the results from any connected accounts.",
        "default": false
      },
      {
        "name": "createdAtGte",
        "schema": "string",
        "required": false,
        "description": "Minimum `created_at` value to filter by (https://docs.tilled.com/api/."
      },
      {
        "name": "createdAtLte",
        "schema": "string",
        "required": false,
        "description": "Maximum `created_at` value to filter by (https://docs.tilled.com/api/."
      },
      {
        "name": "offset",
        "schema": "number",
        "required": false,
        "description": "The (https://docs.tilled.com/api/ offset of the first item in the collection to return.",
        "default": 0
      },
      {
        "name": "limit",
        "schema": "number",
        "required": false,
        "description": "The maximum number of entries to return. If the value exceeds the maximum, then the maximum value will be used.",
        "default": 30
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/outbound-transfers",
    "method": "createTransfer",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Outbound Transfers",
    "typeScriptTag": "outboundTransfers",
    "description": "Create an Outbound Transfer",
    "parameters": [
      {
        "name": "tilledAccount",
        "schema": "string",
        "required": true,
        "description": "The id of the Tilled Account (usually starting with the prefix `acct_`) that the request is performed on behalf of.",
        "example": "TILLED-ACCOUNT"
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
        "name": "destination_payment_method_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DESTINATION_PAYMENT_METHOD_ID"
      },
      {
        "name": "metadata",
        "schema": "object",
        "required": false,
        "description": "",
        "example": {
          "order_id": "100123",
          "internal_customer_id": "7cb1159d-875e-47ae-a309-319fa7ff395b"
        }
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
    "url": "/v1/outbound-transfers/{id}",
    "method": "getDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Outbound Transfers",
    "typeScriptTag": "outboundTransfers",
    "description": "Get an Outbound Transfer",
    "parameters": [
      {
        "name": "tilledAccount",
        "schema": "string",
        "required": true,
        "description": "The id of the Tilled Account (usually starting with the prefix `acct_`) that the request is performed on behalf of.",
        "example": "TILLED-ACCOUNT"
      },
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
      }
    ]
  },
  {
    "url": "/v1/outbound-transfers/{id}/cancel",
    "method": "cancelTransfer",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Outbound Transfers",
    "typeScriptTag": "outboundTransfers",
    "description": "Cancel an Outbound Transfer",
    "parameters": [
      {
        "name": "tilledAccount",
        "schema": "string",
        "required": true,
        "description": "The id of the Tilled Account (usually starting with the prefix `acct_`) that the request is performed on behalf of.",
        "example": "TILLED-ACCOUNT"
      },
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
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/payment-intents",
    "method": "listAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "PaymentIntents",
    "typeScriptTag": "paymentIntents",
    "description": "List all Payment Intents",
    "parameters": [
      {
        "name": "tilledAccount",
        "schema": "string",
        "required": true,
        "description": "The id of the Tilled Account (usually starting with the prefix `acct_`) that the request is performed on behalf of.",
        "example": "TILLED-ACCOUNT"
      },
      {
        "name": "metadata",
        "schema": "object",
        "required": false,
        "description": "`metadata` key-value pairs to filter by. Only exact matches on the key-value pair(https://docs.tilled.com/api/ will be returned. Example: `?metadata[internal_customer_id]=7cb1159d-875e-47ae-a309-319fa7ff395b`."
      },
      {
        "name": "createdAtGte",
        "schema": "string",
        "required": false,
        "description": "Minimum `created_at` value to filter by (https://docs.tilled.com/api/."
      },
      {
        "name": "createdAtLte",
        "schema": "string",
        "required": false,
        "description": "Maximum `created_at` value to filter by (https://docs.tilled.com/api/."
      },
      {
        "name": "status",
        "schema": "array",
        "required": false,
        "description": "Only return PaymentIntents whose status is included by this array. Examples: `/v1/payment-intents?status=succeeded,requires_payment_method` and `/v1/payment-intents?status=succeeded&status=requires_payment_method`."
      },
      {
        "name": "includeConnectedAccounts",
        "schema": "boolean",
        "required": false,
        "description": "Whether or not to include the results from any connected accounts.",
        "default": false
      },
      {
        "name": "subscriptionId",
        "schema": "string",
        "required": false,
        "description": "The ID of the subscription whose payment intents will be retrieved."
      },
      {
        "name": "q",
        "schema": "string",
        "required": false,
        "description": "Supports searching by `payment_intent.id`, `payment_intent.amount`, `payment_method.billing_details.name`,\n`payment_method.details.last4`, `payment_method.details.last2`, `customer.first_name`, `customer.last_name`"
      },
      {
        "name": "customerId",
        "schema": "string",
        "required": false,
        "description": "The ID of the customer whose payment intents will be retrieved."
      },
      {
        "name": "terminalReaderId",
        "schema": "string",
        "required": false,
        "description": "The ID of the terminal reader for which payment intents will be retrieved."
      },
      {
        "name": "offset",
        "schema": "number",
        "required": false,
        "description": "The (https://docs.tilled.com/api/ offset of the first item in the collection to return.",
        "default": 0
      },
      {
        "name": "limit",
        "schema": "number",
        "required": false,
        "description": "The maximum number of entries to return. If the value exceeds the maximum, then the maximum value will be used.",
        "default": 30
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/payment-intents",
    "method": "createPaymentIntent",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "PaymentIntents",
    "typeScriptTag": "paymentIntents",
    "description": "Create a Payment Intent",
    "parameters": [
      {
        "name": "tilledAccount",
        "schema": "string",
        "required": true,
        "description": "The id of the Tilled Account (usually starting with the prefix `acct_`) that the request is performed on behalf of.",
        "example": "TILLED-ACCOUNT"
      },
      {
        "name": "amount",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "capture_method",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "confirm",
        "schema": "boolean",
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
        "name": "level3",
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
          "order_id": "100123",
          "internal_customer_id": "7cb1159d-875e-47ae-a309-319fa7ff395b"
        }
      },
      {
        "name": "occurrence_type",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "payment_method_id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "payment_method_types",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "platform_fee_amount",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "statement_descriptor_suffix",
        "schema": "string",
        "required": false,
        "description": ""
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
    "url": "/v1/payment-intents/{id}",
    "method": "getDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "PaymentIntents",
    "typeScriptTag": "paymentIntents",
    "description": "Get a Payment Intent",
    "parameters": [
      {
        "name": "tilledAccount",
        "schema": "string",
        "required": true,
        "description": "The id of the Tilled Account (usually starting with the prefix `acct_`) that the request is performed on behalf of.",
        "example": "TILLED-ACCOUNT"
      },
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
      }
    ]
  },
  {
    "url": "/v1/payment-intents/{id}",
    "method": "updateWithoutConfirmation",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "PaymentIntents",
    "typeScriptTag": "paymentIntents",
    "description": "Update a Payment Intent",
    "parameters": [
      {
        "name": "tilledAccount",
        "schema": "string",
        "required": true,
        "description": "The id of the Tilled Account (usually starting with the prefix `acct_`) that the request is performed on behalf of.",
        "example": "TILLED-ACCOUNT"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "amount",
        "schema": "number",
        "description": ""
      },
      {
        "name": "capture_method",
        "schema": "string",
        "description": ""
      },
      {
        "name": "currency",
        "schema": "string",
        "description": ""
      },
      {
        "name": "level3",
        "schema": "object",
        "description": ""
      },
      {
        "name": "metadata",
        "schema": "object",
        "description": "",
        "example": {
          "order_id": "100123",
          "internal_customer_id": "7cb1159d-875e-47ae-a309-319fa7ff395b"
        }
      },
      {
        "name": "occurrence_type",
        "schema": "string",
        "description": ""
      },
      {
        "name": "payment_method_id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "payment_method_types",
        "schema": "array",
        "description": ""
      },
      {
        "name": "platform_fee_amount",
        "schema": "number",
        "description": ""
      },
      {
        "name": "statement_descriptor_suffix",
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
    "url": "/v1/payment-intents/{id}/cancel",
    "method": "cancelIntent",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "PaymentIntents",
    "typeScriptTag": "paymentIntents",
    "description": "Cancel a Payment Intent",
    "parameters": [
      {
        "name": "tilledAccount",
        "schema": "string",
        "required": true,
        "description": "The id of the Tilled Account (usually starting with the prefix `acct_`) that the request is performed on behalf of.",
        "example": "TILLED-ACCOUNT"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "cancellation_reason",
        "schema": "string",
        "description": ""
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
    "url": "/v1/payment-intents/{id}/capture",
    "method": "captureFunds",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "PaymentIntents",
    "typeScriptTag": "paymentIntents",
    "description": "Capture a Payment Intent",
    "parameters": [
      {
        "name": "tilledAccount",
        "schema": "string",
        "required": true,
        "description": "The id of the Tilled Account (usually starting with the prefix `acct_`) that the request is performed on behalf of.",
        "example": "TILLED-ACCOUNT"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "amount_to_capture",
        "schema": "number",
        "description": ""
      },
      {
        "name": "platform_fee_amount",
        "schema": "number",
        "description": ""
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
    "url": "/v1/payment-intents/{id}/confirm",
    "method": "confirmIntent",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "PaymentIntents",
    "typeScriptTag": "paymentIntents",
    "description": "Confirm a Payment Intent",
    "parameters": [
      {
        "name": "tilledAccount",
        "schema": "string",
        "required": true,
        "description": "The id of the Tilled Account (usually starting with the prefix `acct_`) that the request is performed on behalf of.",
        "example": "TILLED-ACCOUNT"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "payment_method_id",
        "schema": "string",
        "description": ""
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
    "url": "/v1/payment-methods",
    "method": "listForCustomer",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "PaymentMethods",
    "typeScriptTag": "paymentMethods",
    "description": "List a Customer's Payment Methods",
    "parameters": [
      {
        "name": "tilledAccount",
        "schema": "string",
        "required": true,
        "description": "The id of the Tilled Account (usually starting with the prefix `acct_`) that the request is performed on behalf of.",
        "example": "TILLED-ACCOUNT"
      },
      {
        "name": "metadata",
        "schema": "object",
        "required": false,
        "description": "`metadata` key-value pairs to filter by. Only exact matches on the key-value pair(https://docs.tilled.com/api/ will be returned. Example: `?metadata[internal_customer_id]=7cb1159d-875e-47ae-a309-319fa7ff395b`."
      },
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "Only return payment methods of the given type.",
        "example": "TYPE"
      },
      {
        "name": "customerId",
        "schema": "string",
        "required": true,
        "description": "Customer identifier",
        "example": "CUSTOMER_ID"
      },
      {
        "name": "offset",
        "schema": "number",
        "required": false,
        "description": "The (https://docs.tilled.com/api/ offset of the first item in the collection to return.",
        "default": 0
      },
      {
        "name": "limit",
        "schema": "number",
        "required": false,
        "description": "The maximum number of entries to return. If the value exceeds the maximum, then the maximum value will be used.",
        "default": 30
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/payment-methods",
    "method": "createNewMethod",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "PaymentMethods",
    "typeScriptTag": "paymentMethods",
    "description": "Create a Payment Method",
    "parameters": [
      {
        "name": "tilledAccount",
        "schema": "string",
        "required": true,
        "description": "The id of the Tilled Account (usually starting with the prefix `acct_`) that the request is performed on behalf of.",
        "example": "TILLED-ACCOUNT"
      },
      {
        "name": "ach_debit",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "billing_details",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "card",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "eft_debit",
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
          "order_id": "100123",
          "internal_customer_id": "7cb1159d-875e-47ae-a309-319fa7ff395b"
        }
      },
      {
        "name": "nick_name",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "payment_token",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "terminal_reader_id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TYPE"
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
    "url": "/v1/payment-methods/ach-debit-token",
    "method": "createAchDebitSingleUseToken",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "PaymentMethods",
    "typeScriptTag": "paymentMethods",
    "description": "Create an ACH Debit Single-Use Token",
    "parameters": [
      {
        "name": "tilledAccount",
        "schema": "string",
        "required": true,
        "description": "The id of the Tilled Account (usually starting with the prefix `acct_`) that the request is performed on behalf of.",
        "example": "TILLED-ACCOUNT"
      },
      {
        "name": "ach_debit",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "billing_details",
        "schema": "object",
        "required": true,
        "description": ""
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
    "url": "/v1/payment-methods/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "PaymentMethods",
    "typeScriptTag": "paymentMethods",
    "description": "Get a Payment Method",
    "parameters": [
      {
        "name": "tilledAccount",
        "schema": "string",
        "required": true,
        "description": "The id of the Tilled Account (usually starting with the prefix `acct_`) that the request is performed on behalf of.",
        "example": "TILLED-ACCOUNT"
      },
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
      }
    ]
  },
  {
    "url": "/v1/payment-methods/{id}",
    "method": "updateMethod",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "PaymentMethods",
    "typeScriptTag": "paymentMethods",
    "description": "Update a Payment Method",
    "parameters": [
      {
        "name": "tilledAccount",
        "schema": "string",
        "required": true,
        "description": "The id of the Tilled Account (usually starting with the prefix `acct_`) that the request is performed on behalf of.",
        "example": "TILLED-ACCOUNT"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "billing_details",
        "schema": "object",
        "description": ""
      },
      {
        "name": "metadata",
        "schema": "object",
        "description": "",
        "example": {
          "order_id": "100123",
          "internal_customer_id": "7cb1159d-875e-47ae-a309-319fa7ff395b"
        }
      },
      {
        "name": "nick_name",
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
    "url": "/v1/payment-methods/{id}/attach",
    "method": "attachCustomer",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "PaymentMethods",
    "typeScriptTag": "paymentMethods",
    "description": "Attach a Payment Method to a Customer",
    "parameters": [
      {
        "name": "tilledAccount",
        "schema": "string",
        "required": true,
        "description": "The id of the Tilled Account (usually starting with the prefix `acct_`) that the request is performed on behalf of.",
        "example": "TILLED-ACCOUNT"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "customer_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CUSTOMER_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/payment-methods/{id}/detach",
    "method": "detachMethodFromCustomer",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "PaymentMethods",
    "typeScriptTag": "paymentMethods",
    "description": "Detach a Payment Method from a Customer",
    "parameters": [
      {
        "name": "tilledAccount",
        "schema": "string",
        "required": true,
        "description": "The id of the Tilled Account (usually starting with the prefix `acct_`) that the request is performed on behalf of.",
        "example": "TILLED-ACCOUNT"
      },
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
      }
    ]
  },
  {
    "url": "/v1/payouts",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Payouts",
    "typeScriptTag": "payouts",
    "description": "List all Payouts",
    "parameters": [
      {
        "name": "tilledAccount",
        "schema": "string",
        "required": true,
        "description": "The id of the Tilled Account (usually starting with the prefix `acct_`) that the request is performed on behalf of.",
        "example": "TILLED-ACCOUNT"
      },
      {
        "name": "createdAtGte",
        "schema": "string",
        "required": false,
        "description": "Minimum `created_at` value to filter by (https://docs.tilled.com/api/. Cannot be paired with paid_at_gte or paid_at_lte."
      },
      {
        "name": "createdAtLte",
        "schema": "string",
        "required": false,
        "description": "Maximum `created_at` value to filter by (https://docs.tilled.com/api/. Cannot be paired with paid_at_gte or paid_at_lte."
      },
      {
        "name": "paidAtGte",
        "schema": "string",
        "required": false,
        "description": "Minimum `paid_at` value to filter by (https://docs.tilled.com/api/. Cannot be paired with created_at_gte or created_at_lte."
      },
      {
        "name": "paidAtLte",
        "schema": "string",
        "required": false,
        "description": "Maximum `paid_at` value to filter by (https://docs.tilled.com/api/. Cannot be paired with created_at_gte or created_at_lte."
      },
      {
        "name": "status",
        "schema": "string",
        "required": false,
        "description": "Only return payouts that have the given status."
      },
      {
        "name": "include",
        "schema": "string",
        "required": false,
        "description": "An array of optional include parameters, specifying extra properties to return. Currently for this endpoint only accepts 'transaction_count'. In the query parameters, this is specified as include=value1,value2,value3,etc."
      },
      {
        "name": "includeConnectedAccounts",
        "schema": "boolean",
        "required": false,
        "description": "Whether or not to include the results from any connected accounts.",
        "default": false
      },
      {
        "name": "q",
        "schema": "string",
        "required": false,
        "description": "Supports searching by `payouts.id`, `payouts.amount`"
      },
      {
        "name": "offset",
        "schema": "number",
        "required": false,
        "description": "The (https://docs.tilled.com/api/ offset of the first item in the collection to return.",
        "default": 0
      },
      {
        "name": "limit",
        "schema": "number",
        "required": false,
        "description": "The maximum number of entries to return. If the value exceeds the maximum, then the maximum value will be used.",
        "default": 30
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/payouts/{id}",
    "method": "getDetailsById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Payouts",
    "typeScriptTag": "payouts",
    "description": "Get a Payout",
    "parameters": [
      {
        "name": "tilledAccount",
        "schema": "string",
        "required": true,
        "description": "The id of the Tilled Account (usually starting with the prefix `acct_`) that the request is performed on behalf of.",
        "example": "TILLED-ACCOUNT"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "include",
        "schema": "array",
        "required": false,
        "description": "An array of optional include parameters, specifying extra properties to return. Currently for this endpoint only accepts 'transaction_count'. In the query parameters, this is specified as include=value1,value2,value3,etc."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/platform-fees",
    "method": "listAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Platform Fees",
    "typeScriptTag": "platformFees",
    "description": "List all Platform Fees",
    "parameters": [
      {
        "name": "tilledAccount",
        "schema": "string",
        "required": true,
        "description": "The id of the Tilled Account (usually starting with the prefix `acct_`) that the request is performed on behalf of.",
        "example": "TILLED-ACCOUNT"
      },
      {
        "name": "createdAtGte",
        "schema": "string",
        "required": false,
        "description": "Minimum `created_at` value to filter by (https://docs.tilled.com/api/."
      },
      {
        "name": "createdAtLte",
        "schema": "string",
        "required": false,
        "description": "Maximum `created_at` value to filter by (https://docs.tilled.com/api/."
      },
      {
        "name": "chargeId",
        "schema": "string",
        "required": false,
        "description": "Only return application fees for the charge specified by this charge id."
      },
      {
        "name": "offset",
        "schema": "number",
        "required": false,
        "description": "The (https://docs.tilled.com/api/ offset of the first item in the collection to return.",
        "default": 0
      },
      {
        "name": "limit",
        "schema": "number",
        "required": false,
        "description": "The maximum number of entries to return. If the value exceeds the maximum, then the maximum value will be used.",
        "default": 30
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/platform-fees/{id}",
    "method": "getDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Platform Fees",
    "typeScriptTag": "platformFees",
    "description": "Get a Platform Fee",
    "parameters": [
      {
        "name": "tilledAccount",
        "schema": "string",
        "required": true,
        "description": "The id of the Tilled Account (usually starting with the prefix `acct_`) that the request is performed on behalf of.",
        "example": "TILLED-ACCOUNT"
      },
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
      }
    ]
  },
  {
    "url": "/v1/platform-fees/{id}/refunds/{refund_id}",
    "method": "getDetailsById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Platform Fee Refunds",
    "typeScriptTag": "platformFeeRefunds",
    "description": "Get a Platform Fee Refund",
    "parameters": [
      {
        "name": "tilledAccount",
        "schema": "string",
        "required": true,
        "description": "The id of the Tilled Account (usually starting with the prefix `acct_`) that the request is performed on behalf of.",
        "example": "TILLED-ACCOUNT"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "refundId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "REFUND_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/pricing-templates",
    "method": "listAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Pricing Templates",
    "typeScriptTag": "pricingTemplates",
    "description": "List all Pricing Templates",
    "parameters": [
      {
        "name": "tilledAccount",
        "schema": "string",
        "required": true,
        "description": "The id of the Tilled Account (usually starting with the prefix `acct_`) that the request is performed on behalf of.",
        "example": "TILLED-ACCOUNT"
      },
      {
        "name": "type",
        "schema": "string",
        "required": false,
        "description": "String indicating the type to filter the result by."
      },
      {
        "name": "offset",
        "schema": "number",
        "required": false,
        "description": "The (https://docs.tilled.com/api/ offset of the first item in the collection to return.",
        "default": 0
      },
      {
        "name": "limit",
        "schema": "number",
        "required": false,
        "description": "The maximum number of entries to return. If the value exceeds the maximum, then the maximum value will be used.",
        "default": 30
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/pricing-templates/{id}",
    "method": "getDetailsById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Pricing Templates",
    "typeScriptTag": "pricingTemplates",
    "description": "Get a Pricing Template",
    "parameters": [
      {
        "name": "tilledAccount",
        "schema": "string",
        "required": true,
        "description": "The id of the Tilled Account (usually starting with the prefix `acct_`) that the request is performed on behalf of.",
        "example": "TILLED-ACCOUNT"
      },
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
      }
    ]
  },
  {
    "url": "/v1/product-codes",
    "method": "listForAccount",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "ProductCodes",
    "typeScriptTag": "productCodes",
    "description": "List an Account's Product Codes",
    "parameters": [
      {
        "name": "tilledAccount",
        "schema": "string",
        "required": true,
        "description": "The id of the Tilled Account (usually starting with the prefix `acct_`) that the request is performed on behalf of.",
        "example": "TILLED-ACCOUNT"
      },
      {
        "name": "offset",
        "schema": "number",
        "required": false,
        "description": "The (https://docs.tilled.com/api/ offset of the first item in the collection to return.",
        "default": 0
      },
      {
        "name": "limit",
        "schema": "number",
        "required": false,
        "description": "The maximum number of entries to return. If the value exceeds the maximum, then the maximum value will be used.",
        "default": 30
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/refunds",
    "method": "listAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Refunds",
    "typeScriptTag": "refunds",
    "description": "List all Refunds",
    "parameters": [
      {
        "name": "tilledAccount",
        "schema": "string",
        "required": true,
        "description": "The id of the Tilled Account (usually starting with the prefix `acct_`) that the request is performed on behalf of.",
        "example": "TILLED-ACCOUNT"
      },
      {
        "name": "metadata",
        "schema": "object",
        "required": false,
        "description": "`metadata` key-value pairs to filter by. Only exact matches on the key-value pair(https://docs.tilled.com/api/ will be returned. Example: `?metadata[internal_customer_id]=7cb1159d-875e-47ae-a309-319fa7ff395b`."
      },
      {
        "name": "offset",
        "schema": "number",
        "required": false,
        "description": "The (https://docs.tilled.com/api/ offset of the first item in the collection to return.",
        "default": 0
      },
      {
        "name": "limit",
        "schema": "number",
        "required": false,
        "description": "The maximum number of entries to return. If the value exceeds the maximum, then the maximum value will be used.",
        "default": 30
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/refunds",
    "method": "createNewRefund",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Refunds",
    "typeScriptTag": "refunds",
    "description": "Create a Refund",
    "parameters": [
      {
        "name": "tilledAccount",
        "schema": "string",
        "required": true,
        "description": "The id of the Tilled Account (usually starting with the prefix `acct_`) that the request is performed on behalf of.",
        "example": "TILLED-ACCOUNT"
      },
      {
        "name": "amount",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "metadata",
        "schema": "object",
        "required": false,
        "description": "",
        "example": {
          "order_id": "100123",
          "internal_customer_id": "7cb1159d-875e-47ae-a309-319fa7ff395b"
        }
      },
      {
        "name": "payment_intent_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PAYMENT_INTENT_ID"
      },
      {
        "name": "reason",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "refund_platform_fee",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
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
    "url": "/v1/refunds/{id}",
    "method": "getDetailsById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Refunds",
    "typeScriptTag": "refunds",
    "description": "Get a Refund",
    "parameters": [
      {
        "name": "tilledAccount",
        "schema": "string",
        "required": true,
        "description": "The id of the Tilled Account (usually starting with the prefix `acct_`) that the request is performed on behalf of.",
        "example": "TILLED-ACCOUNT"
      },
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
      }
    ]
  },
  {
    "url": "/v1/report-runs",
    "method": "listAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "ReportRuns",
    "typeScriptTag": "reportRuns",
    "description": "List all Report Runs",
    "parameters": [
      {
        "name": "tilledAccount",
        "schema": "string",
        "required": true,
        "description": "The id of the Tilled Account (usually starting with the prefix `acct_`) that the request is performed on behalf of.",
        "example": "TILLED-ACCOUNT"
      },
      {
        "name": "type",
        "schema": "array",
        "required": false,
        "description": "Only return ReportRuns whose type is included by this array. Examples: `?type=payments_summary_1,payouts_summary_2` and `?type=payouts_summary_2`."
      },
      {
        "name": "status",
        "schema": "array",
        "required": false,
        "description": "Only return ReportRuns whose status is included by this array. Examples: `?status=finished` and `?status=finished,queued`."
      },
      {
        "name": "offset",
        "schema": "number",
        "required": false,
        "description": "The (https://docs.tilled.com/api/ offset of the first item in the collection to return.",
        "default": 0
      },
      {
        "name": "limit",
        "schema": "number",
        "required": false,
        "description": "The maximum number of entries to return. If the value exceeds the maximum, then the maximum value will be used.",
        "default": 30
      },
      {
        "name": "include_expired",
        "schema": "boolean",
        "description": "",
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
    "url": "/v1/report-runs",
    "method": "createRun",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "ReportRuns",
    "typeScriptTag": "reportRuns",
    "description": "Create a Report Run",
    "parameters": [
      {
        "name": "tilledAccount",
        "schema": "string",
        "required": true,
        "description": "The id of the Tilled Account (usually starting with the prefix `acct_`) that the request is performed on behalf of.",
        "example": "TILLED-ACCOUNT"
      },
      {
        "name": "parameters",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "report_name",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TYPE"
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
    "url": "/v1/report-runs/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "ReportRuns",
    "typeScriptTag": "reportRuns",
    "description": "Get a Report Run",
    "parameters": [
      {
        "name": "tilledAccount",
        "schema": "string",
        "required": true,
        "description": "The id of the Tilled Account (usually starting with the prefix `acct_`) that the request is performed on behalf of.",
        "example": "TILLED-ACCOUNT"
      },
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
      }
    ]
  },
  {
    "url": "/v1/subscriptions",
    "method": "listAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Subscriptions",
    "typeScriptTag": "subscriptions",
    "description": "List all Subscriptions",
    "parameters": [
      {
        "name": "tilledAccount",
        "schema": "string",
        "required": true,
        "description": "The id of the Tilled Account (usually starting with the prefix `acct_`) that the request is performed on behalf of.",
        "example": "TILLED-ACCOUNT"
      },
      {
        "name": "metadata",
        "schema": "object",
        "required": false,
        "description": "`metadata` key-value pairs to filter by. Only exact matches on the key-value pair(https://docs.tilled.com/api/ will be returned. Example: `?metadata[internal_customer_id]=7cb1159d-875e-47ae-a309-319fa7ff395b`."
      },
      {
        "name": "customerId",
        "schema": "string",
        "required": false,
        "description": "The ID of the customer whose subscriptions will be retrieved."
      },
      {
        "name": "status",
        "schema": "string",
        "required": false,
        "description": "The status of the subscriptions to retrieve."
      },
      {
        "name": "nextPaymentAtLte",
        "schema": "string",
        "required": false,
        "description": "Maximum `next_payment_at` value to filter by (https://docs.tilled.com/api/."
      },
      {
        "name": "nextPaymentAtGte",
        "schema": "string",
        "required": false,
        "description": "Minimum `next_payment_at` value to filter by (https://docs.tilled.com/api/."
      },
      {
        "name": "offset",
        "schema": "number",
        "required": false,
        "description": "The (https://docs.tilled.com/api/ offset of the first item in the collection to return.",
        "default": 0
      },
      {
        "name": "limit",
        "schema": "number",
        "required": false,
        "description": "The maximum number of entries to return. If the value exceeds the maximum, then the maximum value will be used.",
        "default": 30
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/subscriptions",
    "method": "createNewSubscription",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Subscriptions",
    "typeScriptTag": "subscriptions",
    "description": "Create a Subscription",
    "parameters": [
      {
        "name": "tilledAccount",
        "schema": "string",
        "required": true,
        "description": "The id of the Tilled Account (usually starting with the prefix `acct_`) that the request is performed on behalf of.",
        "example": "TILLED-ACCOUNT"
      },
      {
        "name": "billing_cycle_anchor",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "BILLING_CYCLE_ANCHOR"
      },
      {
        "name": "cancel_at",
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
        "name": "customer_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CUSTOMER_ID"
      },
      {
        "name": "interval_count",
        "schema": "number",
        "required": false,
        "description": "",
        "default": 1
      },
      {
        "name": "interval_unit",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "INTERVAL_UNIT"
      },
      {
        "name": "metadata",
        "schema": "object",
        "required": false,
        "description": "",
        "example": {
          "order_id": "100123",
          "internal_customer_id": "7cb1159d-875e-47ae-a309-319fa7ff395b"
        }
      },
      {
        "name": "payment_method_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PAYMENT_METHOD_ID"
      },
      {
        "name": "platform_fee_amount",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "price",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 0
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
    "url": "/v1/subscriptions/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Subscriptions",
    "typeScriptTag": "subscriptions",
    "description": "Get a Subscription",
    "parameters": [
      {
        "name": "tilledAccount",
        "schema": "string",
        "required": true,
        "description": "The id of the Tilled Account (usually starting with the prefix `acct_`) that the request is performed on behalf of.",
        "example": "TILLED-ACCOUNT"
      },
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
      }
    ]
  },
  {
    "url": "/v1/subscriptions/{id}",
    "method": "updateSubscription",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Subscriptions",
    "typeScriptTag": "subscriptions",
    "description": "Update a Subscription",
    "parameters": [
      {
        "name": "tilledAccount",
        "schema": "string",
        "required": true,
        "description": "The id of the Tilled Account (usually starting with the prefix `acct_`) that the request is performed on behalf of.",
        "example": "TILLED-ACCOUNT"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "cancel_at",
        "schema": "string",
        "description": ""
      },
      {
        "name": "metadata",
        "schema": "object",
        "description": "",
        "example": {
          "order_id": "100123",
          "internal_customer_id": "7cb1159d-875e-47ae-a309-319fa7ff395b"
        }
      },
      {
        "name": "pause_at",
        "schema": "string",
        "description": ""
      },
      {
        "name": "payment_method_id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "platform_fee_amount",
        "schema": "number",
        "description": ""
      },
      {
        "name": "price",
        "schema": "number",
        "description": ""
      },
      {
        "name": "resume_at",
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
    "url": "/v1/subscriptions/{id}/cancel",
    "method": "cancelSubscription",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Subscriptions",
    "typeScriptTag": "subscriptions",
    "description": "Cancel a Subscription",
    "parameters": [
      {
        "name": "tilledAccount",
        "schema": "string",
        "required": true,
        "description": "The id of the Tilled Account (usually starting with the prefix `acct_`) that the request is performed on behalf of.",
        "example": "TILLED-ACCOUNT"
      },
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
      }
    ]
  },
  {
    "url": "/v1/subscriptions/{id}/pause",
    "method": "pauseSubscription",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Subscriptions",
    "typeScriptTag": "subscriptions",
    "description": "Pause a Subscription",
    "parameters": [
      {
        "name": "tilledAccount",
        "schema": "string",
        "required": true,
        "description": "The id of the Tilled Account (usually starting with the prefix `acct_`) that the request is performed on behalf of.",
        "example": "TILLED-ACCOUNT"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "resume_at",
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
    "url": "/v1/subscriptions/{id}/resume",
    "method": "resumeSubscription",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Subscriptions",
    "typeScriptTag": "subscriptions",
    "description": "Resume a Subscription",
    "parameters": [
      {
        "name": "tilledAccount",
        "schema": "string",
        "required": true,
        "description": "The id of the Tilled Account (usually starting with the prefix `acct_`) that the request is performed on behalf of.",
        "example": "TILLED-ACCOUNT"
      },
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
      }
    ]
  },
  {
    "url": "/v1/subscriptions/{id}/retry",
    "method": "retryPaymentAt",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Subscriptions",
    "typeScriptTag": "subscriptions",
    "description": "Retry a Subscription",
    "parameters": [
      {
        "name": "tilledAccount",
        "schema": "string",
        "required": true,
        "description": "The id of the Tilled Account (usually starting with the prefix `acct_`) that the request is performed on behalf of.",
        "example": "TILLED-ACCOUNT"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "next_payment_at",
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
    "url": "/v1/terminal-readers",
    "method": "listAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "TerminalReaders",
    "typeScriptTag": "terminalReaders",
    "description": "List all Terminal Readers",
    "parameters": [
      {
        "name": "tilledAccount",
        "schema": "string",
        "required": true,
        "description": "The id of the Tilled Account (usually starting with the prefix `acct_`) that the request is performed on behalf of.",
        "example": "TILLED-ACCOUNT"
      },
      {
        "name": "metadata",
        "schema": "object",
        "required": false,
        "description": "`metadata` key-value pairs to filter by. Only exact matches on the key-value pair(https://docs.tilled.com/api/ will be returned. Example: `?metadata[internal_customer_id]=7cb1159d-875e-47ae-a309-319fa7ff395b`."
      },
      {
        "name": "q",
        "schema": "string",
        "required": false,
        "description": "The partial search of text fields. Supports searching by `terminal_reader.description`, `terminal_reader.serial_number`,\n`terminal_reader.type`"
      },
      {
        "name": "includeConnectedAccounts",
        "schema": "boolean",
        "required": false,
        "description": "Whether or not to include the results from any connected accounts.",
        "default": false
      },
      {
        "name": "createdAtGte",
        "schema": "string",
        "required": false,
        "description": "Minimum `created_at` value to filter by (https://docs.tilled.com/api/."
      },
      {
        "name": "createdAtLte",
        "schema": "string",
        "required": false,
        "description": "Maximum `created_at` value to filter by (https://docs.tilled.com/api/."
      },
      {
        "name": "offset",
        "schema": "number",
        "required": false,
        "description": "The (https://docs.tilled.com/api/ offset of the first item in the collection to return.",
        "default": 0
      },
      {
        "name": "limit",
        "schema": "number",
        "required": false,
        "description": "The maximum number of entries to return. If the value exceeds the maximum, then the maximum value will be used.",
        "default": 30
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/terminal-readers/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "TerminalReaders",
    "typeScriptTag": "terminalReaders",
    "description": "Get a Terminal Reader",
    "parameters": [
      {
        "name": "tilledAccount",
        "schema": "string",
        "required": true,
        "description": "The id of the Tilled Account (usually starting with the prefix `acct_`) that the request is performed on behalf of.",
        "example": "TILLED-ACCOUNT"
      },
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
      }
    ]
  },
  {
    "url": "/v1/terminal-readers/{id}",
    "method": "updateReader",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "TerminalReaders",
    "typeScriptTag": "terminalReaders",
    "description": "Update a Terminal Reader",
    "parameters": [
      {
        "name": "tilledAccount",
        "schema": "string",
        "required": true,
        "description": "The id of the Tilled Account (usually starting with the prefix `acct_`) that the request is performed on behalf of.",
        "example": "TILLED-ACCOUNT"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "metadata",
        "schema": "object",
        "description": "",
        "example": {
          "order_id": "100123",
          "internal_customer_id": "7cb1159d-875e-47ae-a309-319fa7ff395b"
        }
      },
      {
        "name": "serial_number",
        "schema": "string",
        "description": ""
      },
      {
        "name": "settings",
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
    "url": "/v1/terminal-readers/{id}/status",
    "method": "getStatus",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "TerminalReaders",
    "typeScriptTag": "terminalReaders",
    "description": "Get a Terminal Reader status",
    "parameters": [
      {
        "name": "tilledAccount",
        "schema": "string",
        "required": true,
        "description": "The id of the Tilled Account (usually starting with the prefix `acct_`) that the request is performed on behalf of.",
        "example": "TILLED-ACCOUNT"
      },
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
      }
    ]
  },
  {
    "url": "/v1/user-invitations",
    "method": "listAllUserInvitations",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "List all User Invitations",
    "parameters": [
      {
        "name": "offset",
        "schema": "number",
        "required": false,
        "description": "The (https://docs.tilled.com/api/ offset of the first item in the collection to return.",
        "default": 0
      },
      {
        "name": "limit",
        "schema": "number",
        "required": false,
        "description": "The maximum number of entries to return. If the value exceeds the maximum, then the maximum value will be used.",
        "default": 30
      },
      {
        "name": "tilledAccount",
        "schema": "string",
        "required": true,
        "description": "The id of the Tilled Account (usually starting with the prefix `acct_`) that the request is performed on behalf of.",
        "example": "TILLED-ACCOUNT"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/user-invitations",
    "method": "sendInvitation",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Create a User Invitation",
    "parameters": [
      {
        "name": "tilledAccount",
        "schema": "string",
        "required": true,
        "description": "The id of the Tilled Account (usually starting with the prefix `acct_`) that the request is performed on behalf of.",
        "example": "TILLED-ACCOUNT"
      },
      {
        "name": "email",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EMAIL"
      },
      {
        "name": "email_template",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "role",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ROLE"
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
    "url": "/v1/user-invitations/check/{id}",
    "method": "checkUserInvitation",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Check a User Invitation",
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
      }
    ]
  },
  {
    "url": "/v1/user-invitations/{id}",
    "method": "deleteUserInvitation",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Delete a User Invitation",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "tilledAccount",
        "schema": "string",
        "required": true,
        "description": "The id of the Tilled Account (usually starting with the prefix `acct_`) that the request is performed on behalf of.",
        "example": "TILLED-ACCOUNT"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/user-invitations/{id}",
    "method": "getInvitationById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Get a User Invitation",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "tilledAccount",
        "schema": "string",
        "required": true,
        "description": "The id of the Tilled Account (usually starting with the prefix `acct_`) that the request is performed on behalf of.",
        "example": "TILLED-ACCOUNT"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/user-invitations/{id}/resend",
    "method": "resendInvitation",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Resend a User Invitation",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "tilledAccount",
        "schema": "string",
        "required": true,
        "description": "The id of the Tilled Account (usually starting with the prefix `acct_`) that the request is performed on behalf of.",
        "example": "TILLED-ACCOUNT"
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
    "url": "/v1/users",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "List all Users",
    "parameters": [
      {
        "name": "tilledAccount",
        "schema": "string",
        "required": true,
        "description": "The id of the Tilled Account (usually starting with the prefix `acct_`) that the request is performed on behalf of.",
        "example": "TILLED-ACCOUNT"
      },
      {
        "name": "includeConnectedAccounts",
        "schema": "boolean",
        "required": false,
        "description": "Whether or not to include the results from any connected accounts.",
        "default": false
      },
      {
        "name": "offset",
        "schema": "number",
        "required": false,
        "description": "The (https://docs.tilled.com/api/ offset of the first item in the collection to return.",
        "default": 0
      },
      {
        "name": "limit",
        "schema": "number",
        "required": false,
        "description": "The maximum number of entries to return. If the value exceeds the maximum, then the maximum value will be used.",
        "default": 30
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/users",
    "method": "createNewUser",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Create a User",
    "parameters": [
      {
        "name": "tilledAccount",
        "schema": "string",
        "required": true,
        "description": "The id of the Tilled Account (usually starting with the prefix `acct_`) that the request is performed on behalf of.",
        "example": "TILLED-ACCOUNT"
      },
      {
        "name": "email",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EMAIL"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "password",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PASSWORD"
      },
      {
        "name": "role",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ROLE"
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
    "url": "/v1/users/{id}",
    "method": "removeUser",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Delete a User",
    "parameters": [
      {
        "name": "tilledAccount",
        "schema": "string",
        "required": true,
        "description": "The id of the Tilled Account (usually starting with the prefix `acct_`) that the request is performed on behalf of.",
        "example": "TILLED-ACCOUNT"
      },
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
        "statusCode": "204",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/users/{id}",
    "method": "getUserById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Get a User",
    "parameters": [
      {
        "name": "tilledAccount",
        "schema": "string",
        "required": true,
        "description": "The id of the Tilled Account (usually starting with the prefix `acct_`) that the request is performed on behalf of.",
        "example": "TILLED-ACCOUNT"
      },
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
      }
    ]
  },
  {
    "url": "/v1/users/{id}",
    "method": "updateUser",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Update a User",
    "parameters": [
      {
        "name": "tilledAccount",
        "schema": "string",
        "required": true,
        "description": "The id of the Tilled Account (usually starting with the prefix `acct_`) that the request is performed on behalf of.",
        "example": "TILLED-ACCOUNT"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "email",
        "schema": "string",
        "description": ""
      },
      {
        "name": "email_settings",
        "schema": "object",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "role",
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
    "url": "/v1/webhook-endpoints",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "WebhookEndpoints",
    "typeScriptTag": "webhookEndpoints",
    "description": "List all Webhook Endpoints",
    "parameters": [
      {
        "name": "tilledAccount",
        "schema": "string",
        "required": true,
        "description": "The id of the Tilled Account (usually starting with the prefix `acct_`) that the request is performed on behalf of.",
        "example": "TILLED-ACCOUNT"
      },
      {
        "name": "offset",
        "schema": "number",
        "required": false,
        "description": "The (https://docs.tilled.com/api/ offset of the first item in the collection to return.",
        "default": 0
      },
      {
        "name": "limit",
        "schema": "number",
        "required": false,
        "description": "The maximum number of entries to return. If the value exceeds the maximum, then the maximum value will be used.",
        "default": 30
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/webhook-endpoints",
    "method": "createEndpoint",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "WebhookEndpoints",
    "typeScriptTag": "webhookEndpoints",
    "description": "Create a Webhook Endpoint",
    "parameters": [
      {
        "name": "tilledAccount",
        "schema": "string",
        "required": true,
        "description": "The id of the Tilled Account (usually starting with the prefix `acct_`) that the request is performed on behalf of.",
        "example": "TILLED-ACCOUNT"
      },
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "enabled_events",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "url",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "URL"
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
    "url": "/v1/webhook-endpoints/{id}",
    "method": "deleteEndpoint",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "WebhookEndpoints",
    "typeScriptTag": "webhookEndpoints",
    "description": "Delete a Webhook Endpoint",
    "parameters": [
      {
        "name": "tilledAccount",
        "schema": "string",
        "required": true,
        "description": "The id of the Tilled Account (usually starting with the prefix `acct_`) that the request is performed on behalf of.",
        "example": "TILLED-ACCOUNT"
      },
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
        "statusCode": "204",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/webhook-endpoints/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "WebhookEndpoints",
    "typeScriptTag": "webhookEndpoints",
    "description": "Get a Webhook Endpoint",
    "parameters": [
      {
        "name": "tilledAccount",
        "schema": "string",
        "required": true,
        "description": "The id of the Tilled Account (usually starting with the prefix `acct_`) that the request is performed on behalf of.",
        "example": "TILLED-ACCOUNT"
      },
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
      }
    ]
  },
  {
    "url": "/v1/webhook-endpoints/{id}",
    "method": "updateEndpoint",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "WebhookEndpoints",
    "typeScriptTag": "webhookEndpoints",
    "description": "Update a Webhook Endpoint",
    "parameters": [
      {
        "name": "tilledAccount",
        "schema": "string",
        "required": true,
        "description": "The id of the Tilled Account (usually starting with the prefix `acct_`) that the request is performed on behalf of.",
        "example": "TILLED-ACCOUNT"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "enabled_events",
        "schema": "array",
        "description": ""
      },
      {
        "name": "url",
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
  }
]
    }
      language="TypeScript"
      apiTitle="Tilled API"
      apiBaseUrl="https://api.tilled.com"
      apiVersion="1.0"
      endpoints={80}
      sdkMethods={114}
      schemas={172}
      parameters={446}
      difficulty="Hard"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/tilled/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/tilled/openapi.yaml"
      developerDocumentation="docs.tilled.com/api/"
    />
  );
}
  