import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import Description from "./_description.mdx";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function PayComTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="pay-com-typescript-sdk"
      metaDescription={`Our mission at Pay.com is to create an all-inclusive economy.
We help big entrepreneurs to move big payments. And micro-merchants to realize their biggest dreams.


The company was launched in 2020 and is currently expanding with 5 global offices offering top-tier customer service. Find out more at www.Pay.com.`}
      company="Pay.com"
      doesNotHaveApiDescription={true}
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/pay-com/logo.png"
      companyKebabCase="pay-com"
      clientNameCamelCase="payCom"
      homepage="pay.com"
      lastUpdated={new Date("2024-03-24T21:41:22.682Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/pay-com/favicon.png"
      contactUrl="https://pay.com"
      contactEmail="support@pay.com"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/pay-com/imagePreview.jpg"
      GettingStarted={GettingStarted}
      Description={Description}
      FirstRequest={FirstRequest}
      categories={["payments"]}
      methods={[
  {
    "url": "/v1/sessions/payment",
    "method": "createPayment",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Session",
    "typeScriptTag": "session",
    "description": "Create a Payment Session",
    "parameters": [
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "amount",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 10000
      },
      {
        "name": "currency",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "usd"
      },
      {
        "name": "customer_reference_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CUSTOMER_REFERENCE_ID"
      },
      {
        "name": "automatic_payment_methods",
        "schema": "boolean",
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
        "name": "capture",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "payment_method_options",
        "schema": "object",
        "required": false,
        "description": "",
        "example": {
          "card": {
            "accepted_card_brands": [
              "visa"
            ],
            "accepted_card_categories": [
              "consumer"
            ],
            "accepted_card_funding": [
              "debit"
            ],
            "accepted_card_jurisdictions": [
              "domestic"
            ],
            "duplicate_card_check": true,
            "enforce_customer_name_as_cardholder_name": true,
            "security_checks": {
              "address_line1_check": true,
              "address_postal_code_check": true,
              "cvv_check": true
            },
            "request_threed_secure": "none"
          }
        }
      },
      {
        "name": "payment_method_types",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "reference",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "receipt",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "receipt_email",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "shipping",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "setup_future_usage",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "statement_descriptor_suffix",
        "schema": "string",
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
      }
    ]
  },
  {
    "url": "/v1/sessions/payment/{id}",
    "method": "getPaymentDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Session",
    "typeScriptTag": "session",
    "description": "Retrieve a Payment Session",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/sessions/setup",
    "method": "createSetup",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Session",
    "typeScriptTag": "session",
    "description": "Create a Setup Session",
    "parameters": [
      {
        "name": "customer_reference_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CUSTOMER_REFERENCE_ID"
      },
      {
        "name": "automatic_payment_methods",
        "schema": "boolean",
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
        "name": "payment_method_options",
        "schema": "object",
        "required": false,
        "description": "",
        "example": {
          "card": {
            "accepted_card_brands": [
              "visa"
            ],
            "accepted_card_categories": [
              "consumer"
            ],
            "accepted_card_funding": [
              "debit"
            ],
            "accepted_card_jurisdictions": [
              "domestic"
            ],
            "duplicate_card_check": true,
            "enforce_customer_name_as_cardholder_name": true,
            "security_checks": {
              "address_line1_check": true,
              "address_postal_code_check": true,
              "cvv_check": true
            },
            "request_threed_secure": "none"
          }
        }
      },
      {
        "name": "payment_method_types",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "setup_future_usage",
        "schema": "string",
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
      }
    ]
  },
  {
    "url": "/v1/sessions/setup/{id}",
    "method": "getDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Session",
    "typeScriptTag": "session",
    "description": "Retrieve a Setup Session",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/sessions/payment/{id}/attempts",
    "method": "getAttempts",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Session",
    "typeScriptTag": "session",
    "description": "Retrieve Attempts of a Session",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/sessions/setup/{id}/attempts",
    "method": "getSessionAttempts",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Session",
    "typeScriptTag": "session",
    "description": "Retrieve Attempts of a Session",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/sessions/authentication/linked",
    "method": "createLinked",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Session",
    "typeScriptTag": "session",
    "description": "Create a Linked Session",
    "parameters": [
      {
        "name": "resource",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "RESOURCE"
      },
      {
        "name": "confirm",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "return_url",
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
    "url": "/v1/sessions/authentication/independent",
    "method": "createIndependent",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Session",
    "typeScriptTag": "session",
    "description": "Create an Independent Session",
    "parameters": [
      {
        "name": "amount",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 10000
      },
      {
        "name": "currency",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "usd"
      },
      {
        "name": "card",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "customer_reference_id",
        "schema": "string",
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
        "name": "reference",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "return_url",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "shipping",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "metadata",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "card_data",
        "schema": "object",
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
    "url": "/v1/attempts/payment/{id}",
    "method": "getPaymentAttempt",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Session",
    "typeScriptTag": "session",
    "description": "Retrieve a Payment Session",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/attempts/setup/{id}",
    "method": "getDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Attempt",
    "typeScriptTag": "attempt",
    "description": "Retrieve a Setup Attempt",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/charges",
    "method": "createCharge",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Charge",
    "typeScriptTag": "charge",
    "description": "Create a Charge",
    "parameters": [
      {
        "name": "amount",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 10000
      },
      {
        "name": "currency",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "usd"
      },
      {
        "name": "source",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "risk_session_id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "customer_reference_id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "payment_method_options",
        "schema": "object",
        "required": false,
        "description": "",
        "example": {
          "card": {
            "accepted_card_brands": [
              "visa"
            ],
            "accepted_card_categories": [
              "consumer"
            ],
            "accepted_card_funding": [
              "debit"
            ],
            "accepted_card_jurisdictions": [
              "domestic"
            ],
            "duplicate_card_check": true,
            "enforce_customer_name_as_cardholder_name": true,
            "security_checks": {
              "address_line1_check": true,
              "address_postal_code_check": true,
              "cvv_check": true
            },
            "request_threed_secure": "none"
          }
        }
      },
      {
        "name": "receipt",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "receipt_email",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "reference",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "shipping",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "statement_descriptor_suffix",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "metadata",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "source_data",
        "schema": "object",
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
    "url": "/v1/charges/{id}",
    "method": "getDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Charge",
    "typeScriptTag": "charge",
    "description": "Retrieve a Charge",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/charges/{id}/confirm",
    "method": "confirmCharge",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Charge",
    "typeScriptTag": "charge",
    "description": "Confirm a Charge",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/refunds",
    "method": "paymentMethod",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Refund",
    "typeScriptTag": "refund",
    "description": "Create a Refund",
    "parameters": [
      {
        "name": "charge",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CHARGE"
      },
      {
        "name": "amount_to_refund",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "10000"
      },
      {
        "name": "reference",
        "schema": "string",
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
      }
    ]
  },
  {
    "url": "/v1/refunds/{id}",
    "method": "getDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Refund",
    "typeScriptTag": "refund",
    "description": "Retrieve a Refund",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/holds",
    "method": "createHold",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Hold",
    "typeScriptTag": "hold",
    "description": "Create a Hold",
    "parameters": [
      {
        "name": "amount",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 10000
      },
      {
        "name": "currency",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "usd"
      },
      {
        "name": "source",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "risk_session_id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "customer_reference_id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "payment_method_options",
        "schema": "object",
        "required": false,
        "description": "",
        "example": {
          "card": {
            "accepted_card_brands": [
              "visa"
            ],
            "accepted_card_categories": [
              "consumer"
            ],
            "accepted_card_funding": [
              "debit"
            ],
            "accepted_card_jurisdictions": [
              "domestic"
            ],
            "duplicate_card_check": true,
            "enforce_customer_name_as_cardholder_name": true,
            "security_checks": {
              "address_line1_check": true,
              "address_postal_code_check": true,
              "cvv_check": true
            },
            "request_threed_secure": "none"
          }
        }
      },
      {
        "name": "reference",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "shipping",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "statement_descriptor_suffix",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "metadata",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "source_data",
        "schema": "object",
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
    "url": "/v1/holds/{id}",
    "method": "getDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Hold",
    "typeScriptTag": "hold",
    "description": "Retrieve a Hold",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/holds/{id}/capture",
    "method": "captureHold",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Hold",
    "typeScriptTag": "hold",
    "description": "Capture a Hold",
    "parameters": [
      {
        "name": "amount_to_capture",
        "schema": "string",
        "description": "",
        "example": "10000"
      },
      {
        "name": "reference",
        "schema": "string",
        "description": ""
      },
      {
        "name": "metadata",
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
    "url": "/v1/holds/{id}/cancel",
    "method": "cancelHold",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Hold",
    "typeScriptTag": "hold",
    "description": "Cancel a Hold",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/holds/{id}/confirm",
    "method": "confirmHoldStatus",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Hold",
    "typeScriptTag": "hold",
    "description": "Confirm a Hold",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/payouts",
    "method": "createPayout",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Payout",
    "typeScriptTag": "payout",
    "description": "Create a Payout",
    "parameters": [
      {
        "name": "amount",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 10000
      },
      {
        "name": "currency",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "usd"
      },
      {
        "name": "destination",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "pm_card_202779025452569600"
      },
      {
        "name": "reference",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "statement_descriptor_suffix",
        "schema": "string",
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
      }
    ]
  },
  {
    "url": "/v1/payouts/{id}",
    "method": "getDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Payout",
    "typeScriptTag": "payout",
    "description": "Retrieve a Payout",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/payment_methods",
    "method": "createPaymentMethod",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "PaymentMethod",
    "typeScriptTag": "paymentMethod",
    "description": "Create a Payment Method",
    "parameters": [
      {
        "name": "customer_reference_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CUSTOMER_REFERENCE_ID"
      },
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TYPE"
      },
      {
        "name": "card",
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
      }
    ]
  },
  {
    "url": "/v1/payment_methods/{id}",
    "method": "deleteMethod",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "PaymentMethod",
    "typeScriptTag": "paymentMethod",
    "description": "Delete a Payment Method",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      }
    ]
  },
  {
    "url": "/v1/payment_methods/{id}",
    "method": "getDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "PaymentMethod",
    "typeScriptTag": "paymentMethod",
    "description": "Retrieve a Payment Method",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/customers/{reference_id}/payment_methods",
    "method": "getPaymentMethods",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Customer",
    "typeScriptTag": "customer",
    "description": "Retrieve Payment Methods",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/customers",
    "method": "createCustomer",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Customer",
    "typeScriptTag": "customer",
    "description": "Create a Customer",
    "parameters": [
      {
        "name": "reference_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "REFERENCE_ID"
      },
      {
        "name": "address",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "email",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "phone",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "shipping",
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
      }
    ]
  },
  {
    "url": "/v1/customers/{reference_id}",
    "method": "deleteCustomer",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Customer",
    "typeScriptTag": "customer",
    "description": "Delete a Customer",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      }
    ]
  },
  {
    "url": "/v1/customers/{reference_id}",
    "method": "getDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Customer",
    "typeScriptTag": "customer",
    "description": "Retrieve a Customer",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/customers/{reference_id}",
    "method": "updateDetails",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Customer",
    "typeScriptTag": "customer",
    "description": "Update a Customer",
    "parameters": [
      {
        "name": "default_source",
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
      apiTitle="Pay.com API"
      apiBaseUrl="https://api.sandbox.pay.com"
      apiVersion="1.0"
      endpoints={27}
      sdkMethods={55}
      schemas={45}
      parameters={85}
      difficulty="Easy"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/pay-com/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/pay-com/openapi.yaml"
      developerDocumentation="pay.com/docs/api"
    />
  );
}
  