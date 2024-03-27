import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function PayPalCheckoutTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="pay-pal-checkout-typescript-sdk"
      metaDescription={`We're championing possibilities for all by making money fast, easy, and more enjoyable. Our hope is unlock opportunities for people in their everyday lives and empower the millions of people and businesses around the world who trust, rely, and use PayPal every day.

For support, visit the PayPal Help Center. https://payp.al/help

For employment opportunities, check out our job openings in the 'Jobs' tab. We're an equal opportunity employer that welcomes diversity, and offer generous benefits to help you thrive at work and in your free time.`}
      company="PayPal"
      serviceName="Checkout"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/paypal/checkout/logo.png"
      companyKebabCase="pay-pal"
      clientNameCamelCase="payPalCheckout"
      homepage="www.paypal.com/"
      lastUpdated={new Date("2024-03-27T16:12:23.868Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/paypal/checkout/favicon.png"
      // Missing contactUrl
      // Missing contactEmail
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/paypal/checkout/imagePreview.jpg"
      GettingStarted={GettingStarted}
      FirstRequest={FirstRequest}
      categories={["payments","financial_technology","fintech","online_payments","financial_services"]}
      methods={[
  {
    "url": "/v2/checkout/orders",
    "method": "createOrder",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "orders",
    "typeScriptTag": "orders",
    "description": "Create order",
    "parameters": [
      {
        "name": "payPalRequestId",
        "schema": "string",
        "required": false,
        "description": "The server stores keys for 6 hours. The API callers can request the times to up to 72 hours by speaking to their Account Manager."
      },
      {
        "name": "payPalPartnerAttributionId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "payPalClientMetadataId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "prefer",
        "schema": "string",
        "required": false,
        "description": "The preferred server response upon successful completion of the request. Value is:<ul><li><code>return=minimal</code>. The server returns a minimal response to optimize communication between the API caller and the server. A minimal response includes the <code>id</code>, <code>status</code> and HATEOAS links.</li><li><code>return=representation</code>. The server returns a complete resource representation, including the current state of the resource.</li></ul>",
        "default": "return=minimal"
      },
      {
        "name": "intent",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "INTENT"
      },
      {
        "name": "payer",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "purchase_units",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "payment_source",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "application_context",
        "schema": "object",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The order details."
      },
      {
        "statusCode": "201",
        "description": "The order details."
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": "The default error response."
      }
    ]
  },
  {
    "url": "/v2/checkout/orders/{id}",
    "method": "showDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "orders",
    "typeScriptTag": "orders",
    "description": "Show order details",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The ID of the order that the tracking information is associated with.",
        "example": "ID"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "A comma-separated list of fields that should be returned for the order. Valid filter field is `payment_source`."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The order details."
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": "The default error response."
      }
    ]
  },
  {
    "url": "/v2/checkout/orders/{id}",
    "method": "updateOrderStatus",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "orders",
    "typeScriptTag": "orders",
    "description": "Update order",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The ID of the order that the tracking information is associated with.",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "A successful request returns the HTTP `204 No Content` status code with an empty object in the JSON response body."
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": "The default error response."
      }
    ]
  },
  {
    "url": "/v2/checkout/orders/{id}/confirm-payment-source",
    "method": "confirmPaymentSource",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "orders",
    "typeScriptTag": "orders",
    "description": "Confirm the Order",
    "parameters": [
      {
        "name": "payPalClientMetadataId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The ID of the order that the tracking information is associated with.",
        "example": "ID"
      },
      {
        "name": "prefer",
        "schema": "string",
        "required": false,
        "description": "The preferred server response upon successful completion of the request. Value is:<ul><li><code>return=minimal</code>. The server returns a minimal response to optimize communication between the API caller and the server. A minimal response includes the <code>id</code>, <code>status</code> and HATEOAS links.</li><li><code>return=representation</code>. The server returns a complete resource representation, including the current state of the resource.</li></ul>",
        "default": "return=minimal"
      },
      {
        "name": "payment_source",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "processing_instruction",
        "schema": "string",
        "required": false,
        "description": "",
        "default": "NO_INSTRUCTION"
      },
      {
        "name": "application_context",
        "schema": "object",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The order details."
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
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "This is either a system or application error, and generally indicates that although the client appeared to provide a correct request, something unexpected has gone wrong on the server."
      },
      {
        "statusCode": "default",
        "description": "The default error response."
      }
    ]
  },
  {
    "url": "/v2/checkout/orders/{id}/authorize",
    "method": "authorizePaymentOrder",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "orders",
    "typeScriptTag": "orders",
    "description": "Authorize payment for order",
    "parameters": [
      {
        "name": "payPalRequestId",
        "schema": "string",
        "required": false,
        "description": "The server stores keys for 6 hours. The API callers can request the times to up to 72 hours by speaking to their Account Manager."
      },
      {
        "name": "prefer",
        "schema": "string",
        "required": false,
        "description": "The preferred server response upon successful completion of the request. Value is:<ul><li><code>return=minimal</code>. The server returns a minimal response to optimize communication between the API caller and the server. A minimal response includes the <code>id</code>, <code>status</code> and HATEOAS links.</li><li><code>return=representation</code>. The server returns a complete resource representation, including the current state of the resource.</li></ul>",
        "default": "return=minimal"
      },
      {
        "name": "payPalClientMetadataId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The ID of the order that the tracking information is associated with.",
        "example": "ID"
      },
      {
        "name": "payPalAuthAssertion",
        "schema": "string",
        "required": false,
        "description": "An API-caller-provided JSON Web Token (JWT) assertion that identifies the merchant. For details, see <a href=\"/api/rest/requests/#paypal-auth-assertion\">PayPal-Auth-Assertion</a>."
      },
      {
        "name": "payment_source",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The order authorize response."
      },
      {
        "statusCode": "201",
        "description": "The order authorize response."
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "This is either a system or application error, and generally indicates that although the client appeared to provide a correct request, something unexpected has gone wrong on the server."
      },
      {
        "statusCode": "default",
        "description": "The default error response."
      }
    ]
  },
  {
    "url": "/v2/checkout/orders/{id}/capture",
    "method": "capturePayment",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "orders",
    "typeScriptTag": "orders",
    "description": "Capture payment for order",
    "parameters": [
      {
        "name": "payPalRequestId",
        "schema": "string",
        "required": false,
        "description": "The server stores keys for 6 hours. The API callers can request the times to up to 72 hours by speaking to their Account Manager."
      },
      {
        "name": "prefer",
        "schema": "string",
        "required": false,
        "description": "The preferred server response upon successful completion of the request. Value is:<ul><li><code>return=minimal</code>. The server returns a minimal response to optimize communication between the API caller and the server. A minimal response includes the <code>id</code>, <code>status</code> and HATEOAS links.</li><li><code>return=representation</code>. The server returns a complete resource representation, including the current state of the resource.</li></ul>",
        "default": "return=minimal"
      },
      {
        "name": "payPalClientMetadataId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The ID of the order that the tracking information is associated with.",
        "example": "ID"
      },
      {
        "name": "payPalAuthAssertion",
        "schema": "string",
        "required": false,
        "description": "An API-caller-provided JSON Web Token (JWT) assertion that identifies the merchant. For details, see <a href=\"/api/rest/requests/#paypal-auth-assertion\">PayPal-Auth-Assertion</a>."
      },
      {
        "name": "payment_source",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The order details."
      },
      {
        "statusCode": "201",
        "description": "The order details."
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "This is either a system or application error, and generally indicates that although the client appeared to provide a correct request, something unexpected has gone wrong on the server."
      },
      {
        "statusCode": "default",
        "description": "The default error response."
      }
    ]
  },
  {
    "url": "/v2/checkout/orders/{id}/track",
    "method": "addTrackingInformation",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "orders",
    "typeScriptTag": "orders",
    "description": "Add tracking information for an Order.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The ID of the order that the tracking information is associated with.",
        "example": "ID"
      },
      {
        "name": "payPalAuthAssertion",
        "schema": "string",
        "required": false,
        "description": "An API-caller-provided JSON Web Token (JWT) assertion that identifies the merchant. For details, see <a href=\"/api/rest/requests/#paypal-auth-assertion\">PayPal-Auth-Assertion</a>."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The order details."
      },
      {
        "statusCode": "201",
        "description": "The order details."
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
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "This is either a system or application error, and generally indicates that although the client appeared to provide a correct request, something unexpected has gone wrong on the server."
      },
      {
        "statusCode": "default",
        "description": "The default error response."
      }
    ]
  },
  {
    "url": "/v2/checkout/orders/{id}/trackers/{tracker_id}",
    "method": "updateTrackingInfo",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "trackers",
    "typeScriptTag": "trackers",
    "description": "Update or cancel tracking information for a PayPal order",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The ID of the order that the tracking information is associated with.",
        "example": "ID"
      },
      {
        "name": "trackerId",
        "schema": "string",
        "required": true,
        "description": "The order tracking ID.",
        "example": "TRACKER_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "A successful request returns the HTTP `204 No Content` status code with an empty object in the JSON response body."
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
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "This is either a system or application error, and generally indicates that although the client appeared to provide a correct request, something unexpected has gone wrong on the server."
      },
      {
        "statusCode": "default",
        "description": "The default error response."
      }
    ]
  }
]
    }
      language="TypeScript"
      apiTitle="Orders"
      apiBaseUrl="https://api-m.sandbox.paypal.com"
      apiVersion="2.13"
      endpoints={7}
      sdkMethods={8}
      schemas={240}
      parameters={34}
      difficulty="Medium"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/paypal/checkout/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/paypal/checkout/openapi.yaml"
      developerDocumentation="developer.paypal.com/"
    />
  );
}
  