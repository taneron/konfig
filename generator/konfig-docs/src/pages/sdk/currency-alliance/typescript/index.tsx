import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function CurrencyAllianceTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="currency-alliance-typescript-sdk"
      metaDescription={`Loyalty programs once worked miracles for customer engagement.

But with a dizzying range of disjointed loyalty schemes from countless brands, the majority of customers now rarely earn enough points with any one brand to put them to good use.

So, at the start of 2015, our team set out to create a new global loyalty ecosystem.

We're helping customers and brands alike discover the elusive customer loyalty that had become lost among less frequent customers.

We are accelerating the customer's journey to rewards by making it easier for them to earn and spend points with a wider range of brands.

Brands, meanwhile, benefit from the insights of a larger network, and the tools needed to enable better experiences for their most loyal customers.

And, more importantly, our partners can discover those less frequent customers who - with the right incentives - can become loyal advocates.`}
      company="Currency Alliance"
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/currency-alliance/logo.png"
      companyKebabCase="currency-alliance"
      clientNameCamelCase="currencyAlliance"
      homepage="www.currencyalliance.com/"
      lastUpdated={new Date("2024-03-28T00:10:52.272Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/currency-alliance/favicon.png"
      // Missing contactUrl
      // Missing contactEmail
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/currency-alliance/imagePreview.png"
      GettingStarted={GettingStarted}
      FirstRequest={FirstRequest}
      categories={["loyalty_programs","loyalty_partners","loyalty_partner_management","loyalty_platform"]}
      methods={[
  {
    "url": "/accruals/standard",
    "method": "executeStandardAccrual",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Direct accruals",
    "typeScriptTag": "directAccruals",
    "description": "Execute an accrual",
    "parameters": [
      {
        "name": "amount",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 1000
      },
      {
        "name": "bonus",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": false,
        "default": false
      },
      {
        "name": "external_reference",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "loyalty_currency",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EXAMPLE_POINTS"
      },
      {
        "name": "loyalty_system_data",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "member",
        "schema": "object",
        "required": true,
        "description": "",
        "example": {
          "id": "M12334532X"
        }
      },
      {
        "name": "metadata",
        "schema": "object",
        "required": false,
        "description": "",
        "example": {
          "foo": "bar"
        }
      },
      {
        "name": "origin",
        "schema": "undefined",
        "required": true,
        "description": ""
      },
      {
        "name": "reason",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Christmas bonus"
      },
      {
        "name": "reason_code",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "product_purchase"
      },
      {
        "name": "release_date",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "2020-10-10T12:12"
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
    "url": "/accruals/purchase-rules/simulate",
    "method": "simulatePurchaseRules",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Purchase rules",
    "typeScriptTag": "purchaseRules",
    "description": "Simulate a purchase",
    "parameters": [
      {
        "name": "tags",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "fiat_amount",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "20.00"
      },
      {
        "name": "fiat_currency",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USD"
      },
      {
        "name": "loyalty_currency",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EXAMPLE_POINTS"
      },
      {
        "name": "loyalty_system_data",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "member",
        "schema": "object",
        "required": false,
        "description": "",
        "example": {
          "id": "M12334532X"
        }
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
    "url": "/accruals/purchase-rules/trigger",
    "method": "triggerLoyaltyRules",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Purchase rules",
    "typeScriptTag": "purchaseRules",
    "description": "Trigger a purchase",
    "parameters": [
      {
        "name": "tags",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "external_reference",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "fiat_amount",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "20.00"
      },
      {
        "name": "fiat_currency",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USD"
      },
      {
        "name": "loyalty_currency",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EXAMPLE_POINTS"
      },
      {
        "name": "loyalty_system_data",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "member",
        "schema": "object",
        "required": true,
        "description": "",
        "example": {
          "id": "M12334532X"
        }
      },
      {
        "name": "metadata",
        "schema": "object",
        "required": false,
        "description": "",
        "example": {
          "foo": "bar"
        }
      },
      {
        "name": "preferred_execution_mode",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "reason",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "release_date",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "2020-10-10T12:12"
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
    "url": "/accruals/purchase-rules/executions/{id}",
    "method": "getExecution",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Purchase rules",
    "typeScriptTag": "purchaseRules",
    "description": "Retrieve a purchase rule execution",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Unique internal identifier that was generated by the system for the purchase rule execution.",
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
    "url": "/accruals/purchase-rules/executions/{id}/retrigger",
    "method": "retriggerExecution",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Purchase rules",
    "typeScriptTag": "purchaseRules",
    "description": "Retrigger a purchase rule execution",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Unique internal identifier that was generated by the system for the purchase rule execution.",
        "example": "ID"
      },
      {
        "name": "tags",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "fiat_amount",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "20.00"
      },
      {
        "name": "fiat_currency",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USD"
      },
      {
        "name": "loyalty_system_data",
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
          "foo": "bar"
        }
      },
      {
        "name": "release_date",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "2020-10-10T12:12"
      },
      {
        "name": "reason",
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
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/accruals/purchase-rules/executions/{id}/cancel",
    "method": "cancelExecution",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Purchase rules",
    "typeScriptTag": "purchaseRules",
    "description": "Cancel a purchase rule execution",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Unique internal identifier that was generated by the system for the purchase rule execution.",
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
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/accruals/activity-rules/simulate",
    "method": "simulateRuleExecution",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Activity rules",
    "typeScriptTag": "activityRules",
    "description": "Simulate an activity rule",
    "parameters": [
      {
        "name": "activity_ids",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "loyalty_currency",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EXAMPLE_POINTS"
      },
      {
        "name": "loyalty_system_data",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "member",
        "schema": "object",
        "required": true,
        "description": "",
        "example": {
          "id": "M12334532X"
        }
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
    "url": "/accruals/activity-rules/trigger",
    "method": "triggerRule",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Activity rules",
    "typeScriptTag": "activityRules",
    "description": "Trigger an activity rule",
    "parameters": [
      {
        "name": "activity_ids",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "external_reference",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "loyalty_currency",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EXAMPLE_POINTS"
      },
      {
        "name": "loyalty_system_data",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "member",
        "schema": "object",
        "required": true,
        "description": "",
        "example": {
          "id": "M12334532X"
        }
      },
      {
        "name": "metadata",
        "schema": "object",
        "required": false,
        "description": "",
        "example": {
          "foo": "bar"
        }
      },
      {
        "name": "release_date",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "2020-10-10T12:12"
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
    "url": "/exchanges/simulate",
    "method": "simulateCurrencyExchange",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Exchanges",
    "typeScriptTag": "exchanges",
    "description": "Simulate currency exchange",
    "parameters": [
      {
        "name": "amount",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 500
      },
      {
        "name": "destination_loyalty_currency",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "SST"
      },
      {
        "name": "destination_member",
        "schema": "object",
        "required": false,
        "description": "",
        "example": {
          "id": "M12334532X"
        }
      },
      {
        "name": "loyalty_system_data",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "origin_loyalty_currency",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TSS"
      },
      {
        "name": "origin_member",
        "schema": "object",
        "required": false,
        "description": "",
        "example": {
          "id": "M12334532X"
        }
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
    "url": "/exchanges/execute",
    "method": "executeCurrencyExchange",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Exchanges",
    "typeScriptTag": "exchanges",
    "description": "Execute currency exchange",
    "parameters": [
      {
        "name": "amount",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 500
      },
      {
        "name": "external_reference",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "destination_loyalty_currency",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TCC"
      },
      {
        "name": "destination_member",
        "schema": "object",
        "required": true,
        "description": "",
        "example": {
          "id": "M12334532X"
        }
      },
      {
        "name": "loyalty_system_data",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "origin_loyalty_currency",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TSS"
      },
      {
        "name": "origin_member",
        "schema": "object",
        "required": true,
        "description": "",
        "example": {
          "id": "M12334532X"
        }
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
    "url": "/exchanges/linked-account-simulate",
    "method": "simulateLinkedAccountCurrencyExchange",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Exchanges",
    "typeScriptTag": "exchanges",
    "description": "Simulate linked account currency exchange",
    "parameters": [],
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
    "url": "/exchanges/linked-account-execute",
    "method": "executeLinkedAccountCurrencyExchange",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Exchanges",
    "typeScriptTag": "exchanges",
    "description": "Execute linked account currency exchange",
    "parameters": [],
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
    "url": "/members",
    "method": "updateMemberRecord",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Members",
    "typeScriptTag": "members",
    "description": "Update a member",
    "parameters": [],
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
    "url": "/members",
    "method": "createRecord",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Members",
    "typeScriptTag": "members",
    "description": "Create a member",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/members/lookup",
    "method": "validateMemberDetails",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Members",
    "typeScriptTag": "members",
    "description": "Lookup a member",
    "parameters": [
      {
        "name": "linked_loyalty_currency",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "EXAMPLE_POINTS"
      },
      {
        "name": "loyalty_program_identifiers",
        "schema": "object",
        "required": true,
        "description": "",
        "example": {
          "id": "M12334532X"
        }
      },
      {
        "name": "loyalty_currency",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EXAMPLE_POINTS"
      },
      {
        "name": "loyalty_system_data",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "metadata",
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/loyalty-currencies/fiat-convert",
    "method": "fiatToLoyaltyCurrency",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Conversions",
    "typeScriptTag": "conversions",
    "description": "Convert fiat to loyalty currency",
    "parameters": [
      {
        "name": "amount",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "10.00"
      },
      {
        "name": "fiat_currency",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USD"
      },
      {
        "name": "loyalty_currency",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FOO"
      },
      {
        "name": "price_type",
        "schema": "string",
        "required": false,
        "description": "",
        "default": "customers_perceived_value"
      },
      {
        "name": "rounding",
        "schema": "string",
        "required": false,
        "description": "",
        "default": "bankers_rounding"
      },
      {
        "name": "custom_value",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "10.12345678"
      },
      {
        "name": "custom_value_currency",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "USD"
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
    "url": "/redemptions/standard/simulate",
    "method": "simulateRedemption",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Standard redemptions",
    "typeScriptTag": "standardRedemptions",
    "description": "Simulate a redemption",
    "parameters": [
      {
        "name": "loyalty_currency",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EXAMPLE_POINTS"
      },
      {
        "name": "loyalty_system_data",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "member",
        "schema": "object",
        "required": false,
        "description": "",
        "example": {
          "id": "M12334532X"
        }
      },
      {
        "name": "metadata",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "redemption_items",
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
      }
    ]
  },
  {
    "url": "/redemptions/standard",
    "method": "executeRedemption",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Standard redemptions",
    "typeScriptTag": "standardRedemptions",
    "description": "Execute a redemption",
    "parameters": [
      {
        "name": "external_reference",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EXTERNAL_REFERENCE"
      },
      {
        "name": "loyalty_currency",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EXAMPLE_POINTS"
      },
      {
        "name": "loyalty_system_data",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "member",
        "schema": "object",
        "required": true,
        "description": "",
        "example": {
          "id": "M12334532X"
        }
      },
      {
        "name": "metadata",
        "schema": "object",
        "required": false,
        "description": "",
        "example": {
          "foo": "bar"
        }
      },
      {
        "name": "reason",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "REASON"
      },
      {
        "name": "redemption_items",
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
      }
    ]
  },
  {
    "url": "/redemptions/standard/adjust",
    "method": "adjustRedemption",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Standard redemptions",
    "typeScriptTag": "standardRedemptions",
    "description": "Adjust a redemption",
    "parameters": [
      {
        "name": "loyalty_system_data",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "member",
        "schema": "object",
        "required": true,
        "description": "",
        "example": {
          "id": "M12334532X"
        }
      },
      {
        "name": "metadata",
        "schema": "object",
        "required": false,
        "description": "",
        "example": {
          "foo": "bar"
        }
      },
      {
        "name": "new_external_reference",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "abcd1234"
      },
      {
        "name": "previous_external_reference",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "abcd1234"
      },
      {
        "name": "previous_transaction_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "tx_abc12312345"
      },
      {
        "name": "reason",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "REASON"
      },
      {
        "name": "redemption_items",
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
      }
    ]
  },
  {
    "url": "/redemptions/standard/cancel",
    "method": "cancelRedemption",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Standard redemptions",
    "typeScriptTag": "standardRedemptions",
    "description": "Cancel a redemption",
    "parameters": [
      {
        "name": "loyalty_system_data",
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
          "foo": "bar"
        }
      },
      {
        "name": "previous_external_reference",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "abcd1234"
      },
      {
        "name": "previous_transaction_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "tx_abc12312345"
      },
      {
        "name": "reason",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "REASON"
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
    "url": "/redemptions/gift-cards",
    "method": "getEnabledList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Gift cards",
    "typeScriptTag": "giftCards",
    "description": "Retrieve the list of enabled gift cards",
    "parameters": [
      {
        "name": "country",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "USA"
      },
      {
        "name": "fiatCurrency",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "EUR"
      },
      {
        "name": "giftCardType",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "fixed_value"
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Provide value to retrieve the exact page of results. If no value is provided, the system will return the first page."
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "required": false,
        "description": "Provide a value between 1 to 500 to return the number of result items on each page.",
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
    "url": "/redemptions/gift-cards/{id}",
    "method": "getDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Gift cards",
    "typeScriptTag": "giftCards",
    "description": "Retrieve a gift card",
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
        "description": ""
      }
    ]
  },
  {
    "url": "/redemptions/gift-cards/{id}/simulate",
    "method": "simulateExchange",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Gift cards",
    "typeScriptTag": "giftCards",
    "description": "Simulate a gift card exchange",
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
        "description": ""
      }
    ]
  },
  {
    "url": "/redemptions/gift-cards/{id}/issue",
    "method": "exchangeLoyaltyForGiftCard",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Gift cards",
    "typeScriptTag": "giftCards",
    "description": "Exchange loyalty currency units for gift cards",
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
        "description": ""
      }
    ]
  },
  {
    "url": "/redemptions/gift-cards/{id}/direct-issue",
    "method": "issueCode",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Gift cards",
    "typeScriptTag": "giftCards",
    "description": "Direct issue a gift card code",
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
        "description": ""
      }
    ]
  },
  {
    "url": "/redemptions/gift-cards/codes",
    "method": "getIssuedCode",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Gift cards",
    "typeScriptTag": "giftCards",
    "description": "Retrieve an issued gift card code",
    "parameters": [
      {
        "name": "gift_card_code",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "GIFT_CARD_CODE"
      },
      {
        "name": "pin",
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
    "url": "/redemptions/gift-cards/custom/validate",
    "method": "validateCustomCode",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Gift cards",
    "typeScriptTag": "giftCards",
    "description": "Validate a custom gift card code",
    "parameters": [],
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
    "url": "/redemptions/gift-cards/custom/redeem",
    "method": "redeemCustomGiftCardCode",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Gift cards",
    "typeScriptTag": "giftCards",
    "description": "Redeem a custom gift card code",
    "parameters": [],
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
    "url": "/redemptions/gift-cards/custom/cancel",
    "method": "cancelCustomCode",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Gift cards",
    "typeScriptTag": "giftCards",
    "description": "Cancel a custom gift card code",
    "parameters": [
      {
        "name": "gift_card_code",
        "schema": "string",
        "description": "",
        "example": "ABCD-0000-ABCD-0000"
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
    "url": "/members/transactions",
    "method": "listMemberTransactions",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Transactions",
    "typeScriptTag": "transactions",
    "description": "List a member's transactions",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Provide value to retrieve the exact page of results. If no value is provided, the system will return the first page."
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "required": false,
        "description": "Provide a value between 1 to 500 to return the number of result items on each page.",
        "default": 50
      },
      {
        "name": "createdAtRange",
        "schema": "string",
        "required": false,
        "description": "Provide the date range, in the format of two dates separated by a comma, to filter the items based on when when they were created. The first value is the starting date and the second value is the end date. The end date is optional if you want to retrieve all the items since the starting date.",
        "example": "2020-05-02,2020-06-04T09:35:25Z"
      },
      {
        "name": "status",
        "schema": "string",
        "required": false,
        "description": "Provide value to filter transactions by status. Multiple values are accepted, separated by commas."
      },
      {
        "name": "type",
        "schema": "string",
        "required": false,
        "description": "Provide value to filter transactions by type. Multiple values are accepted, separated by commas."
      },
      {
        "name": "member",
        "schema": "object",
        "required": true,
        "description": "",
        "example": {
          "id": "M12334532X"
        }
      },
      {
        "name": "loyalty_currency",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EXAMPLE_POINTS"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/transactions",
    "method": "listAllTransactions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Transactions",
    "typeScriptTag": "transactions",
    "description": "List transactions",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Provide value to retrieve the exact page of results. If no value is provided, the system will return the first page."
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "required": false,
        "description": "Provide a value between 1 to 500 to return the number of result items on each page.",
        "default": 50
      },
      {
        "name": "createdAtRange",
        "schema": "string",
        "required": false,
        "description": "Provide the date range, in the format of two dates separated by a comma, to filter the items based on when when they were created. The first value is the starting date and the second value is the end date. The end date is optional if you want to retrieve all the items since the starting date.",
        "example": "2020-05-02,2020-06-04T09:35:25Z"
      },
      {
        "name": "status",
        "schema": "string",
        "required": false,
        "description": "Provide value to filter transactions by status. Multiple values are accepted, separated by commas."
      },
      {
        "name": "type",
        "schema": "string",
        "required": false,
        "description": "Provide value to filter transactions by type. Multiple values are accepted, separated by commas."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/transactions",
    "method": "createTransaction",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Transactions",
    "typeScriptTag": "transactions",
    "description": "Create a transaction",
    "parameters": [
      {
        "name": "amount",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 100
      },
      {
        "name": "destination",
        "schema": "undefined",
        "required": true,
        "description": ""
      },
      {
        "name": "external_reference",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "loyalty_currency",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EXAMPLE_POINTS"
      },
      {
        "name": "loyalty_system_data",
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
          "foo": "bar"
        }
      },
      {
        "name": "reason",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Christmas bonus"
      },
      {
        "name": "origin",
        "schema": "undefined",
        "required": true,
        "description": ""
      },
      {
        "name": "reason_code",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "product_purchase"
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
    "url": "/transactions/{id}",
    "method": "getDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Transactions",
    "typeScriptTag": "transactions",
    "description": "Retrieve a transaction.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Unique internal identifier generated by the system for each transaction.",
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
        "description": ""
      }
    ]
  },
  {
    "url": "/transactions/{id}",
    "method": "updateTransactionDetails",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Transactions",
    "typeScriptTag": "transactions",
    "description": "Update a transaction",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Unique internal identifier generated by the system for each transaction.",
        "example": "ID"
      },
      {
        "name": "amount",
        "schema": "integer",
        "description": "",
        "example": 100
      },
      {
        "name": "loyalty_system_data",
        "schema": "object",
        "description": ""
      },
      {
        "name": "metadata",
        "schema": "object",
        "description": "",
        "example": {
          "foo": "bar"
        }
      },
      {
        "name": "reason_code",
        "schema": "string",
        "description": ""
      },
      {
        "name": "reason",
        "schema": "string",
        "description": "",
        "example": "Christmas bonus"
      },
      {
        "name": "release_date",
        "schema": "string",
        "description": "",
        "example": "2020-10-10T12:12"
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
    "url": "/transactions/{id}/cancel",
    "method": "cancelTransaction",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Transactions",
    "typeScriptTag": "transactions",
    "description": "Cancel a transaction",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Unique internal identifier generated by the system for each transaction.",
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
        "description": ""
      }
    ]
  },
  {
    "url": "/partners",
    "method": "listAllPartners",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Partners",
    "typeScriptTag": "partners",
    "description": "List all partners",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Provide value to retrieve the exact page of results. If no value is provided, the system will return the first page."
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "required": false,
        "description": "Provide a value between 1 to 500 to return the number of result items on each page.",
        "default": 50
      },
      {
        "name": "partnerId",
        "schema": "string",
        "required": false,
        "description": "This unique identifier represents the loyalty program currency to which the member belongs. It is a unique shortcode Identifier assigned by the system to each loyalty currency. It can be found in the 'My Currency' section under the 'About My Currency' screen in the Management Dashboard. For the Currency Identifier of your partners' currencies refer to the Currency Symbol field in the 'My Partners' section in the Management Dashboard or Endpoints to obtain Partners' information."
      },
      {
        "name": "loyaltyCurrency",
        "schema": "string",
        "required": false,
        "description": "This unique identifier represents the loyalty program currency to which the member belongs. It is a unique shortcode Identifier assigned by the system to each loyalty currency. It can be found in the 'My Currency' section under the 'About My Currency' screen in the Management Dashboard. For the Currency Identifier of your partners' currencies refer to the Currency Symbol field in the 'My Partners' section in the Management Dashboard or Endpoints to obtain Partners' information."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/partners/exchange-in",
    "method": "listExchangeInPartners",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Partners",
    "typeScriptTag": "partners",
    "description": "List exchange in partners",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Provide value to retrieve the exact page of results. If no value is provided, the system will return the first page."
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "required": false,
        "description": "Provide a value between 1 to 500 to return the number of result items on each page.",
        "default": 50
      },
      {
        "name": "partnerId",
        "schema": "string",
        "required": false,
        "description": "This unique identifier represents the loyalty program currency to which the member belongs. It is a unique shortcode Identifier assigned by the system to each loyalty currency. It can be found in the 'My Currency' section under the 'About My Currency' screen in the Management Dashboard. For the Currency Identifier of your partners' currencies refer to the Currency Symbol field in the 'My Partners' section in the Management Dashboard or Endpoints to obtain Partners' information."
      },
      {
        "name": "loyaltyCurrency",
        "schema": "string",
        "required": false,
        "description": "This unique identifier represents the loyalty program currency to which the member belongs. It is a unique shortcode Identifier assigned by the system to each loyalty currency. It can be found in the 'My Currency' section under the 'About My Currency' screen in the Management Dashboard. For the Currency Identifier of your partners' currencies refer to the Currency Symbol field in the 'My Partners' section in the Management Dashboard or Endpoints to obtain Partners' information."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/partners/exchange-out",
    "method": "listExchangeOutPartners",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Partners",
    "typeScriptTag": "partners",
    "description": "List exchange out partners",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Provide value to retrieve the exact page of results. If no value is provided, the system will return the first page."
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "required": false,
        "description": "Provide a value between 1 to 500 to return the number of result items on each page.",
        "default": 50
      },
      {
        "name": "partnerId",
        "schema": "string",
        "required": false,
        "description": "This unique identifier represents the loyalty program currency to which the member belongs. It is a unique shortcode Identifier assigned by the system to each loyalty currency. It can be found in the 'My Currency' section under the 'About My Currency' screen in the Management Dashboard. For the Currency Identifier of your partners' currencies refer to the Currency Symbol field in the 'My Partners' section in the Management Dashboard or Endpoints to obtain Partners' information."
      },
      {
        "name": "loyaltyCurrency",
        "schema": "string",
        "required": false,
        "description": "This unique identifier represents the loyalty program currency to which the member belongs. It is a unique shortcode Identifier assigned by the system to each loyalty currency. It can be found in the 'My Currency' section under the 'About My Currency' screen in the Management Dashboard. For the Currency Identifier of your partners' currencies refer to the Currency Symbol field in the 'My Partners' section in the Management Dashboard or Endpoints to obtain Partners' information."
      },
      {
        "name": "languageDisplay",
        "schema": "string",
        "required": false,
        "description": "[ISO 639-1](https://en.wikipedia.org/wiki/ISO_639-1) of the language you want name of the `required_fields` to be shown. Defaults to english if there is no translation."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/partners/issuing",
    "method": "listIssuingPartners",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Partners",
    "typeScriptTag": "partners",
    "description": "List issuing partners",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Provide value to retrieve the exact page of results. If no value is provided, the system will return the first page."
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "required": false,
        "description": "Provide a value between 1 to 500 to return the number of result items on each page.",
        "default": 50
      },
      {
        "name": "partnerId",
        "schema": "string",
        "required": false,
        "description": "This unique identifier represents the loyalty program currency to which the member belongs. It is a unique shortcode Identifier assigned by the system to each loyalty currency. It can be found in the 'My Currency' section under the 'About My Currency' screen in the Management Dashboard. For the Currency Identifier of your partners' currencies refer to the Currency Symbol field in the 'My Partners' section in the Management Dashboard or Endpoints to obtain Partners' information."
      },
      {
        "name": "loyaltyCurrency",
        "schema": "string",
        "required": false,
        "description": "This unique identifier represents the loyalty program currency to which the member belongs. It is a unique shortcode Identifier assigned by the system to each loyalty currency. It can be found in the 'My Currency' section under the 'About My Currency' screen in the Management Dashboard. For the Currency Identifier of your partners' currencies refer to the Currency Symbol field in the 'My Partners' section in the Management Dashboard or Endpoints to obtain Partners' information."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/partners/redemption",
    "method": "getRedemptionPartners",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Partners",
    "typeScriptTag": "partners",
    "description": "List redemption partners",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Provide value to retrieve the exact page of results. If no value is provided, the system will return the first page."
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "required": false,
        "description": "Provide a value between 1 to 500 to return the number of result items on each page.",
        "default": 50
      },
      {
        "name": "partnerId",
        "schema": "string",
        "required": false,
        "description": "This unique identifier represents the loyalty program currency to which the member belongs. It is a unique shortcode Identifier assigned by the system to each loyalty currency. It can be found in the 'My Currency' section under the 'About My Currency' screen in the Management Dashboard. For the Currency Identifier of your partners' currencies refer to the Currency Symbol field in the 'My Partners' section in the Management Dashboard or Endpoints to obtain Partners' information."
      },
      {
        "name": "loyaltyCurrency",
        "schema": "string",
        "required": false,
        "description": "This unique identifier represents the loyalty program currency to which the member belongs. It is a unique shortcode Identifier assigned by the system to each loyalty currency. It can be found in the 'My Currency' section under the 'About My Currency' screen in the Management Dashboard. For the Currency Identifier of your partners' currencies refer to the Currency Symbol field in the 'My Partners' section in the Management Dashboard or Endpoints to obtain Partners' information."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/partners/currency-owners-for-redemption",
    "method": "listRedemptionCurrencyOwners",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Partners",
    "typeScriptTag": "partners",
    "description": "List currency owners for redemption partners",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Provide value to retrieve the exact page of results. If no value is provided, the system will return the first page."
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "required": false,
        "description": "Provide a value between 1 to 500 to return the number of result items on each page.",
        "default": 50
      },
      {
        "name": "partnerId",
        "schema": "string",
        "required": false,
        "description": "This unique identifier represents the loyalty program currency to which the member belongs. It is a unique shortcode Identifier assigned by the system to each loyalty currency. It can be found in the 'My Currency' section under the 'About My Currency' screen in the Management Dashboard. For the Currency Identifier of your partners' currencies refer to the Currency Symbol field in the 'My Partners' section in the Management Dashboard or Endpoints to obtain Partners' information."
      },
      {
        "name": "loyaltyCurrency",
        "schema": "string",
        "required": false,
        "description": "This unique identifier represents the loyalty program currency to which the member belongs. It is a unique shortcode Identifier assigned by the system to each loyalty currency. It can be found in the 'My Currency' section under the 'About My Currency' screen in the Management Dashboard. For the Currency Identifier of your partners' currencies refer to the Currency Symbol field in the 'My Partners' section in the Management Dashboard or Endpoints to obtain Partners' information."
      },
      {
        "name": "languageDisplay",
        "schema": "string",
        "required": false,
        "description": "[ISO 639-1](https://en.wikipedia.org/wiki/ISO_639-1) of the language you want name of the `required_fields` to be shown. Defaults to english if there is no translation."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/partners/currency-owners-for-issuance",
    "method": "listCurrencyOwnersForIssuance",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Partners",
    "typeScriptTag": "partners",
    "description": "List currency owners for issuing partners",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Provide value to retrieve the exact page of results. If no value is provided, the system will return the first page."
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "required": false,
        "description": "Provide a value between 1 to 500 to return the number of result items on each page.",
        "default": 50
      },
      {
        "name": "partnerId",
        "schema": "string",
        "required": false,
        "description": "This unique identifier represents the loyalty program currency to which the member belongs. It is a unique shortcode Identifier assigned by the system to each loyalty currency. It can be found in the 'My Currency' section under the 'About My Currency' screen in the Management Dashboard. For the Currency Identifier of your partners' currencies refer to the Currency Symbol field in the 'My Partners' section in the Management Dashboard or Endpoints to obtain Partners' information."
      },
      {
        "name": "loyaltyCurrency",
        "schema": "string",
        "required": false,
        "description": "This unique identifier represents the loyalty program currency to which the member belongs. It is a unique shortcode Identifier assigned by the system to each loyalty currency. It can be found in the 'My Currency' section under the 'About My Currency' screen in the Management Dashboard. For the Currency Identifier of your partners' currencies refer to the Currency Symbol field in the 'My Partners' section in the Management Dashboard or Endpoints to obtain Partners' information."
      },
      {
        "name": "languageDisplay",
        "schema": "string",
        "required": false,
        "description": "[ISO 639-1](https://en.wikipedia.org/wiki/ISO_639-1) of the language you want name of the `required_fields` to be shown. Defaults to english if there is no translation."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/partners/<api_identifier>/data/<field_name>",
    "method": "getPartnerCustomData",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Partners",
    "typeScriptTag": "partners",
    "description": "List Partner Custom Data",
    "parameters": [
      {
        "name": "apiIdentifier",
        "schema": "string",
        "required": true,
        "description": "Partner's api identifier",
        "example": "API_IDENTIFIER"
      },
      {
        "name": "fieldName",
        "schema": "string",
        "required": true,
        "description": "Data field name",
        "example": "FIELD_NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/reports/exchanges",
    "method": "getCsvReport",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Exchange Reports",
    "typeScriptTag": "exchangeReports",
    "description": "Retrieve Currency Exchange Report",
    "parameters": [
      {
        "name": "createdAtRange",
        "schema": "string",
        "required": false,
        "description": "Provide the date range, in the format of two dates separated by a comma, to filter the items based on when when they were created. The first value is the starting date and the second value is the end date. The end date is optional if you want to retrieve all the items since the starting date.",
        "example": "2020-05-02,2020-06-04T09:35:25Z"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/reports/gift-cards/custom",
    "method": "listIssuedCodes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Custom gift cards",
    "typeScriptTag": "customGiftCards",
    "description": "List issued custom gift card codes",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Provide value to retrieve the exact page of results. If no value is provided, the system will return the first page."
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "required": false,
        "description": "Provide a value between 1 to 500 to return the number of result items on each page.",
        "default": 50
      },
      {
        "name": "createdAtRange",
        "schema": "string",
        "required": false,
        "description": "Provide the date range, in the format of two dates separated by a comma, to filter the items based on when when they were created. The first value is the starting date and the second value is the end date. The end date is optional if you want to retrieve all the items since the starting date.",
        "example": "2020-05-02,2020-06-04T09:35:25Z"
      },
      {
        "name": "giftCardId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "fiatCurrency",
        "schema": "string",
        "required": false,
        "description": "[ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code of the fiat currency"
      },
      {
        "name": "loyaltyCurrency",
        "schema": "string",
        "required": false,
        "description": "This unique identifier represents the loyalty program currency to which the member belongs. It is a unique shortcode Identifier assigned by the system to each loyalty currency. It can be found in the 'My Currency' section under the 'About My Currency' screen in the Management Dashboard. For the Currency Identifier of your partners' currencies refer to the Currency Symbol field in the 'My Partners' section in the Management Dashboard or Endpoints to obtain Partners' information."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/reports/gift-cards/custom/inventory",
    "method": "listInventory",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Custom gift cards",
    "typeScriptTag": "customGiftCards",
    "description": "List custom gift card inventory",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/reports/gift-cards/custom/{id}/inventory",
    "method": "getInventoryStatus",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Custom gift cards",
    "typeScriptTag": "customGiftCards",
    "description": "Retrieve a custom gift card inventory",
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
    "url": "/cohorts",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Cohorts",
    "typeScriptTag": "cohorts",
    "description": "List cohorts",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Provide value to retrieve the exact page of results. If no value is provided, the system will return the first page."
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "required": false,
        "description": "Provide a value between 1 to 500 to return the number of result items on each page.",
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
    "url": "/cohorts",
    "method": "createCohort",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Cohorts",
    "typeScriptTag": "cohorts",
    "description": "Create a cohort",
    "parameters": [
      {
        "name": "company_name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FooBar"
      },
      {
        "name": "status",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "enabled"
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
    "url": "/cohorts/{cohort_id}",
    "method": "getCohort",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Cohorts",
    "typeScriptTag": "cohorts",
    "description": "Retrieve a cohort.",
    "parameters": [
      {
        "name": "cohortId",
        "schema": "string",
        "required": true,
        "description": "Cohort id.",
        "example": "COHORT_ID"
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
    "url": "/cohorts/{cohort_id}",
    "method": "updateCohortInformation",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Cohorts",
    "typeScriptTag": "cohorts",
    "description": "Update a cohort",
    "parameters": [
      {
        "name": "cohortId",
        "schema": "string",
        "required": true,
        "description": "Cohort id.",
        "example": "COHORT_ID"
      },
      {
        "name": "company_name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FooBar"
      },
      {
        "name": "status",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "enabled"
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
    "url": "/cohorts/{cohort_id}/loyalty-rules/purchases",
    "method": "listLoyaltyRules",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Cohort Purchases",
    "typeScriptTag": "cohortPurchases",
    "description": "List a cohort's purchase loyalty rules",
    "parameters": [
      {
        "name": "cohortId",
        "schema": "string",
        "required": true,
        "description": "Cohort id.",
        "example": "COHORT_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/cohorts/{cohort_id}/loyalty-rules/purchases/{rule_id}",
    "method": "updateLoyaltyRule",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Cohort Purchases",
    "typeScriptTag": "cohortPurchases",
    "description": "Update a cohort's purchase loyalty rule",
    "parameters": [
      {
        "name": "cohortId",
        "schema": "string",
        "required": true,
        "description": "Cohort id.",
        "example": "COHORT_ID"
      },
      {
        "name": "ruleId",
        "schema": "string",
        "required": true,
        "description": "Loyalty rule id.",
        "example": "RULE_ID"
      },
      {
        "name": "enabled",
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
        "description": ""
      }
    ]
  },
  {
    "url": "/loyalty-rules/{cohort_id}/purchases/simulate",
    "method": "simulateExecution",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Cohort Purchases",
    "typeScriptTag": "cohortPurchases",
    "description": "Simulate a purchase",
    "parameters": [
      {
        "name": "cohortId",
        "schema": "string",
        "required": true,
        "description": "Cohort id.",
        "example": "COHORT_ID"
      },
      {
        "name": "tags",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "external_reference",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "fiat_amount",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "20.00"
      },
      {
        "name": "fiat_currency",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USD"
      },
      {
        "name": "loyalty_currency",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EXAMPLE_POINTS"
      },
      {
        "name": "loyalty_system_data",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "member",
        "schema": "object",
        "required": true,
        "description": "",
        "example": {
          "id": "M12334532X"
        }
      },
      {
        "name": "metadata",
        "schema": "object",
        "required": false,
        "description": "",
        "example": {
          "foo": "bar"
        }
      },
      {
        "name": "preferred_execution_mode",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "reason",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "release_date",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "2020-10-10T12:12"
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
    "url": "/loyalty-rules/{cohort_id}/purchases/execute",
    "method": "executeLoyaltyRulesMatching",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Cohort Purchases",
    "typeScriptTag": "cohortPurchases",
    "description": "Execute a purchase",
    "parameters": [
      {
        "name": "cohortId",
        "schema": "string",
        "required": true,
        "description": "Cohort id.",
        "example": "COHORT_ID"
      },
      {
        "name": "tags",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "external_reference",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "fiat_amount",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "20.00"
      },
      {
        "name": "fiat_currency",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USD"
      },
      {
        "name": "loyalty_currency",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EXAMPLE_POINTS"
      },
      {
        "name": "loyalty_system_data",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "member",
        "schema": "object",
        "required": true,
        "description": "",
        "example": {
          "id": "M12334532X"
        }
      },
      {
        "name": "metadata",
        "schema": "object",
        "required": false,
        "description": "",
        "example": {
          "foo": "bar"
        }
      },
      {
        "name": "preferred_execution_mode",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "reason",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "release_date",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "2020-10-10T12:12"
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
    "url": "/cohorts/{cohort_id}/loyalty-rules/activities",
    "method": "listActivityLoyaltyRules",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Cohort Activities",
    "typeScriptTag": "cohortActivities",
    "description": "List a cohort's activity loyalty rules",
    "parameters": [
      {
        "name": "cohortId",
        "schema": "string",
        "required": true,
        "description": "Cohort id.",
        "example": "COHORT_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/cohorts/{cohort_id}/loyalty-rules/activities/{rule_id}",
    "method": "updateRule",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Cohort Activities",
    "typeScriptTag": "cohortActivities",
    "description": "Update a cohort's activity loyalty rule",
    "parameters": [
      {
        "name": "cohortId",
        "schema": "string",
        "required": true,
        "description": "Cohort id.",
        "example": "COHORT_ID"
      },
      {
        "name": "ruleId",
        "schema": "string",
        "required": true,
        "description": "Loyalty rule id.",
        "example": "RULE_ID"
      },
      {
        "name": "enabled",
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
        "description": ""
      }
    ]
  },
  {
    "url": "/cohorts/{cohort_id}/loyalty-rules/activities/simulate",
    "method": "triggerLoyaltyRuleSimulation",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Cohort Activities",
    "typeScriptTag": "cohortActivities",
    "description": "Simulate an activity rule execution",
    "parameters": [
      {
        "name": "cohortId",
        "schema": "string",
        "required": true,
        "description": "Cohort id.",
        "example": "COHORT_ID"
      },
      {
        "name": "activity_ids",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "external_reference",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "loyalty_currency",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EXAMPLE_POINTS"
      },
      {
        "name": "loyalty_system_data",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "member",
        "schema": "object",
        "required": true,
        "description": "",
        "example": {
          "id": "M12334532X"
        }
      },
      {
        "name": "metadata",
        "schema": "object",
        "required": false,
        "description": "",
        "example": {
          "foo": "bar"
        }
      },
      {
        "name": "release_date",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "2020-10-10T12:12"
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
    "url": "/cohorts/{cohort_id}/loyalty-rules/activities/execute",
    "method": "executeActivityRule",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Cohort Activities",
    "typeScriptTag": "cohortActivities",
    "description": "Execute an activity rule",
    "parameters": [
      {
        "name": "cohortId",
        "schema": "string",
        "required": true,
        "description": "Cohort id.",
        "example": "COHORT_ID"
      },
      {
        "name": "activity_ids",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "external_reference",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "loyalty_currency",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EXAMPLE_POINTS"
      },
      {
        "name": "loyalty_system_data",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "member",
        "schema": "object",
        "required": true,
        "description": "",
        "example": {
          "id": "M12334532X"
        }
      },
      {
        "name": "metadata",
        "schema": "object",
        "required": false,
        "description": "",
        "example": {
          "foo": "bar"
        }
      },
      {
        "name": "release_date",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "2020-10-10T12:12"
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
    "url": "/cohorts/{cohort_id}/accounts",
    "method": "listAccounts",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Cohort Accounts",
    "typeScriptTag": "cohortAccounts",
    "description": "List a cohort's accounts",
    "parameters": [
      {
        "name": "cohortId",
        "schema": "string",
        "required": true,
        "description": "Cohort id.",
        "example": "COHORT_ID"
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Provide value to retrieve the exact page of results. If no value is provided, the system will return the first page."
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "required": false,
        "description": "Provide a value between 1 to 500 to return the number of result items on each page.",
        "default": 50
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
      apiTitle="Currency Alliance API Documentation"
      apiBaseUrl="https://api.currencyalliance.com/public/v3.0"
      apiVersion="3.0"
      endpoints={55}
      sdkMethods={60}
      schemas={125}
      parameters={241}
      difficulty="Medium"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/currency-alliance/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/currency-alliance/openapi.yaml"
      developerDocumentation="api.currencyalliance.com/api-docs/v3"
    />
  );
}
  