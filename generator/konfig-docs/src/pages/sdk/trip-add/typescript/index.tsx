import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function TripAddTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="trip-add-typescript-sdk"
      metaDescription={`Tripadd is a global travel ancillary product marketplace powered by AI. 

Boost your sales with ancillary products from around the world. Seamlessly integrate thousands of products through a single API into your checkout path with personalization for every customer.

Sign up today at www.tripadd.com`}
      company="TripAdd"
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/tripadd/logo.jpg"
      companyKebabCase="trip-add"
      clientNameCamelCase="tripAdd"
      homepage="tripadd.com/"
      lastUpdated={new Date("2024-03-27T22:04:35.990Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/tripadd/favicon.jpg"
      // Missing contactUrl
      contactEmail="info@tripadd.com"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/tripadd/imagePreview.jpg"
      GettingStarted={GettingStarted}
      FirstRequest={FirstRequest}
      categories={["ai","travel_expenses","marketplace"]}
      methods={[
  {
    "url": "/bundle_offers",
    "method": "generateNewOffer",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Bundle Offers",
    "typeScriptTag": "bundleOffers",
    "description": "Create Bundle Offer",
    "parameters": [
      {
        "name": "bundle_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "019cb030-aadd-4bb1-be61-00bc6c6a1b08"
      },
      {
        "name": "currency",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USD"
      },
      {
        "name": "booking_value",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "destination",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "arrival_date_time",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "2022-04-24T09:44:51"
      },
      {
        "name": "return_date_time",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "2022-04-24T09:44:51"
      },
      {
        "name": "passengers",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "outbound_flights",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "inbound_flights",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "available_data",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "language",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "en",
        "default": "en"
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
        "statusCode": "401",
        "description": ""
      }
    ]
  },
  {
    "url": "/bundle_offers/{bundle_offer_id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Bundle Offers",
    "typeScriptTag": "bundleOffers",
    "description": "Get Bundle Offer",
    "parameters": [
      {
        "name": "bundleOfferId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "8162eccc-6050-4eaa-8df0-0998cf9e9cf6"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/orders",
    "method": "placeOrder",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Orders",
    "typeScriptTag": "orders",
    "description": "Create Order",
    "parameters": [
      {
        "name": "currency",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USD"
      },
      {
        "name": "bundle_offer_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "6982caed-fbfc-4719-bc41-0060a1c97e5d"
      },
      {
        "name": "client_reference_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "6982caed-fbfc-4719-bc41-0060a1c97e5d"
      },
      {
        "name": "price",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 42.24
      },
      {
        "name": "booking_reference",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "PNR123"
      },
      {
        "name": "passenger_purchases",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "customer",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "confirmation_recipients",
        "schema": "array",
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
        "statusCode": "401",
        "description": ""
      }
    ]
  },
  {
    "url": "/orders/{order_id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Orders",
    "typeScriptTag": "orders",
    "description": "Get Order",
    "parameters": [
      {
        "name": "orderId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "8162eccc-6050-4eaa-8df0-0998cf9e9cf6"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/orders/{order_id}/cancel",
    "method": "cancelOrder",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Orders",
    "typeScriptTag": "orders",
    "description": "Cancel Order",
    "parameters": [
      {
        "name": "orderId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "8162eccc-6050-4eaa-8df0-0998cf9e9cf6"
      },
      {
        "name": "product_ids",
        "schema": "array",
        "description": "",
        "example": [
          "3735f848-3643-4828-8c7d-7515996bbc2a",
          "3735f848-3643-4828-8c7d-7515996bbc2b"
        ]
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  }
]
    }
      language="TypeScript"
      apiTitle="TripAdd API"
      apiBaseUrl="https://sandbox.tripadd.com/v1"
      apiVersion="1.8.0"
      endpoints={5}
      sdkMethods={5}
      schemas={32}
      parameters={23}
      difficulty="Easy"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/tripadd/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/tripadd/openapi.yaml"
      developerDocumentation="api.tripadd.com/docs/"
    />
  );
}
  