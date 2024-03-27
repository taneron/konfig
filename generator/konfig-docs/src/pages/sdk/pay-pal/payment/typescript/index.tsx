import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function PayPalPaymentTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="pay-pal-payment-typescript-sdk"
      metaDescription={`We're championing possibilities for all by making money fast, easy, and more enjoyable. Our hope is unlock opportunities for people in their everyday lives and empower the millions of people and businesses around the world who trust, rely, and use PayPal every day. 

For support, visit the PayPal Help Center. https://payp.al/help

For employment opportunities, check out our job openings in the 'Jobs' tab. We're an equal opportunity employer that welcomes diversity, and offer generous benefits to help you thrive at work and in your free time.`}
      company="PayPal"
      serviceName="Payment"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/paypal/payment/logo.png"
      companyKebabCase="pay-pal"
      clientNameCamelCase="payPalPayment"
      homepage="www.paypal.com/"
      lastUpdated={new Date("2024-03-27T17:21:24.299Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/paypal/payment/favicon.png"
      // Missing contactUrl
      // Missing contactEmail
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/paypal/payment/imagePreview.jpg"
      GettingStarted={GettingStarted}
      FirstRequest={FirstRequest}
      categories={["payments","financial_technology","fintech","online_payments","financial_services"]}
      methods={[
  {
    "url": "/v2/payments/authorizations/{authorization_id}",
    "method": "showDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "authorizations",
    "typeScriptTag": "authorizations",
    "description": "Show details for authorized payment",
    "parameters": [
      {
        "name": "authorizationId",
        "schema": "string",
        "required": true,
        "description": "The PayPal-generated ID for the authorized payment to void.",
        "example": "AUTHORIZATION_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The authorized payment transaction."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed due to missing Authorization header, or invalid authentication credentials."
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
        "statusCode": "500",
        "description": "The request failed because an internal server error occurred."
      },
      {
        "statusCode": "default",
        "description": "The default error response."
      }
    ]
  },
  {
    "url": "/v2/payments/authorizations/{authorization_id}/capture",
    "method": "capturePayment",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "authorizations",
    "typeScriptTag": "authorizations",
    "description": "Capture authorized payment",
    "parameters": [
      {
        "name": "authorizationId",
        "schema": "string",
        "required": true,
        "description": "The PayPal-generated ID for the authorized payment to void.",
        "example": "AUTHORIZATION_ID"
      },
      {
        "name": "payPalRequestId",
        "schema": "string",
        "required": false,
        "description": "The server stores keys for 45 days."
      },
      {
        "name": "prefer",
        "schema": "string",
        "required": false,
        "description": "The preferred server response upon successful completion of the request. Value is:<ul><li><code>return=minimal</code>. The server returns a minimal response to optimize communication between the API caller and the server. A minimal response includes the <code>id</code>, <code>status</code> and HATEOAS links.</li><li><code>return=representation</code>. The server returns a complete resource representation, including the current state of the resource.</li></ul>",
        "default": "return=minimal"
      },
      {
        "name": "amount",
        "schema": "object",
        "description": ""
      },
      {
        "name": "invoice_id",
        "schema": "string",
        "description": "",
        "example": "INVOICE-123"
      },
      {
        "name": "final_capture",
        "schema": "boolean",
        "description": "",
        "example": true
      },
      {
        "name": "note_to_payer",
        "schema": "string",
        "description": "",
        "example": "If the ordered color is not available, we will substitute with a different color free of charge."
      },
      {
        "name": "soft_descriptor",
        "schema": "string",
        "description": "",
        "example": "Bob's Custom Sweaters"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "A captured payment."
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Authentication failed due to missing Authorization header, or invalid authentication credentials."
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
        "description": "The request failed because an internal server error occurred."
      },
      {
        "statusCode": "default",
        "description": "The default error response."
      }
    ]
  },
  {
    "url": "/v2/payments/authorizations/{authorization_id}/reauthorize",
    "method": "reauthorizePayment",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "authorizations",
    "typeScriptTag": "authorizations",
    "description": "Reauthorize authorized payment",
    "parameters": [
      {
        "name": "authorizationId",
        "schema": "string",
        "required": true,
        "description": "The PayPal-generated ID for the authorized payment to void.",
        "example": "AUTHORIZATION_ID"
      },
      {
        "name": "payPalRequestId",
        "schema": "string",
        "required": false,
        "description": "The server stores keys for 45 days."
      },
      {
        "name": "prefer",
        "schema": "string",
        "required": false,
        "description": "The preferred server response upon successful completion of the request. Value is:<ul><li><code>return=minimal</code>. The server returns a minimal response to optimize communication between the API caller and the server. A minimal response includes the <code>id</code>, <code>status</code> and HATEOAS links.</li><li><code>return=representation</code>. The server returns a complete resource representation, including the current state of the resource.</li></ul>",
        "default": "return=minimal"
      },
      {
        "name": "amount",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "The authorized payment transaction."
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Authentication failed due to missing Authorization header, or invalid authentication credentials."
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
        "description": "The request failed because an internal server error occurred."
      },
      {
        "statusCode": "default",
        "description": "The default error response."
      }
    ]
  },
  {
    "url": "/v2/payments/authorizations/{authorization_id}/void",
    "method": "voidPayment",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "authorizations",
    "typeScriptTag": "authorizations",
    "description": "Void authorized payment",
    "parameters": [
      {
        "name": "authorizationId",
        "schema": "string",
        "required": true,
        "description": "The PayPal-generated ID for the authorized payment to void.",
        "example": "AUTHORIZATION_ID"
      },
      {
        "name": "payPalAuthAssertion",
        "schema": "string",
        "required": false,
        "description": "An API-caller-provided JSON Web Token (JWT) assertion that identifies the merchant. For details, see [PayPal-Auth-Assertion](/docs/api/reference/api-requests/#paypal-auth-assertion).<blockquote><strong>Note:</strong>For three party transactions in which a partner is managing the API calls on behalf of a merchant, the partner must identify the merchant using either a PayPal-Auth-Assertion header or an access token with target_subject.</blockquote>"
      },
      {
        "name": "prefer",
        "schema": "string",
        "required": false,
        "description": "The preferred server response upon successful completion of the request. Value is:<ul><li><code>return=minimal</code>. The server returns a minimal response to optimize communication between the API caller and the server. A minimal response includes the <code>id</code>, <code>status</code> and HATEOAS links.</li><li><code>return=representation</code>. The server returns a complete resource representation, including the current state of the resource.</li></ul>",
        "default": "return=minimal"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The authorized payment transaction."
      },
      {
        "statusCode": "204",
        "description": "A successful request returns the HTTP <code>204 No Content</code> status code with no JSON response body. This response is returned when the Prefer header is set to return=minimal."
      },
      {
        "statusCode": "400",
        "description": "Request is not well-formed, syntactically incorrect, or violates schema."
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
        "statusCode": "409",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "The request failed because an internal server error occurred."
      },
      {
        "statusCode": "default",
        "description": "The default error response."
      }
    ]
  },
  {
    "url": "/v2/payments/captures/{capture_id}",
    "method": "showDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "captures",
    "typeScriptTag": "captures",
    "description": "Show captured payment details",
    "parameters": [
      {
        "name": "captureId",
        "schema": "string",
        "required": true,
        "description": "The PayPal-generated ID for the captured payment to refund.",
        "example": "CAPTURE_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A captured payment."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed due to missing Authorization header, or invalid authentication credentials."
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
        "statusCode": "500",
        "description": "The request failed because an internal server error occurred."
      },
      {
        "statusCode": "default",
        "description": "The default error response."
      }
    ]
  },
  {
    "url": "/v2/payments/captures/{capture_id}/refund",
    "method": "refundPayment",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "captures",
    "typeScriptTag": "captures",
    "description": "Refund captured payment",
    "parameters": [
      {
        "name": "captureId",
        "schema": "string",
        "required": true,
        "description": "The PayPal-generated ID for the captured payment to refund.",
        "example": "CAPTURE_ID"
      },
      {
        "name": "payPalRequestId",
        "schema": "string",
        "required": false,
        "description": "The server stores keys for 45 days."
      },
      {
        "name": "prefer",
        "schema": "string",
        "required": false,
        "description": "The preferred server response upon successful completion of the request. Value is:<ul><li><code>return=minimal</code>. The server returns a minimal response to optimize communication between the API caller and the server. A minimal response includes the <code>id</code>, <code>status</code> and HATEOAS links.</li><li><code>return=representation</code>. The server returns a complete resource representation, including the current state of the resource.</li></ul>",
        "default": "return=minimal"
      },
      {
        "name": "payPalAuthAssertion",
        "schema": "string",
        "required": false,
        "description": "An API-caller-provided JSON Web Token (JWT) assertion that identifies the merchant. For details, see [PayPal-Auth-Assertion](/docs/api/reference/api-requests/#paypal-auth-assertion).<blockquote><strong>Note:</strong>For three party transactions in which a partner is managing the API calls on behalf of a merchant, the partner must identify the merchant using either a PayPal-Auth-Assertion header or an access token with target_subject.</blockquote>"
      },
      {
        "name": "amount",
        "schema": "object",
        "description": ""
      },
      {
        "name": "custom_id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "invoice_id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "note_to_payer",
        "schema": "string",
        "description": ""
      },
      {
        "name": "payment_instruction",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "The refund information."
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
        "statusCode": "409",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "The request failed because an internal server error occurred."
      },
      {
        "statusCode": "default",
        "description": "The default error response."
      }
    ]
  },
  {
    "url": "/v2/payments/refunds/{refund_id}",
    "method": "details",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "refunds",
    "typeScriptTag": "refunds",
    "description": "Show refund details",
    "parameters": [
      {
        "name": "refundId",
        "schema": "string",
        "required": true,
        "description": "The PayPal-generated ID for the refund for which to show details.",
        "example": "REFUND_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The refund information."
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
        "statusCode": "500",
        "description": "The request failed because an internal server error occurred."
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
      apiTitle="Payments"
      apiBaseUrl="https://api-m.sandbox.paypal.com"
      apiVersion="2.5"
      endpoints={7}
      sdkMethods={7}
      schemas={86}
      parameters={22}
      difficulty="Easy"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/paypal/payment/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/paypal/payment/openapi.yaml"
      developerDocumentation="developer.paypal.com/"
    />
  );
}
  