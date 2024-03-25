import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function Sdk2C2PTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="2c2p-typescript-sdk"
      metaDescription={`2C2P is a global payments platform helping businesses securely accept payments across online, mobile and in-store channels. The company is headquartered in Singapore and operates across Southeast Asia, North Asia, Europe and the US. It is the preferred payments platform provider of regional airlines, travel companies and global retailers.`}
      company="2C2P"
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/2-c-2-p/logo.png"
      companyKebabCase="2-c-2-p"
      clientNameCamelCase="twoCTwoP"
      homepage="2c2p.com/"
      lastUpdated={new Date("2024-03-19T00:07:10.571Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/2-c-2-p/favicon.png"
      // Missing contactUrl
      // Missing contactEmail
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/2-c-2-p/imagePreview.webp"
      GettingStarted={GettingStarted}
      FirstRequest={FirstRequest}
      categories={["finance","payments","online_payments","fintech"]}
      methods={[
  {
    "url": "/payment/4.3/applepay/merchantvalidation",
    "method": "validateMerchant",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "ApplePay",
    "typeScriptTag": "applePay",
    "description": "",
    "parameters": [
      {
        "name": "validationUrl",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "paymentToken",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PAYMENTTOKEN"
      },
      {
        "name": "locale",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "clientID",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "browserDetails",
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
    "url": "/payment/4.3/cache/cleancache",
    "method": "cleanCache",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Cache",
    "typeScriptTag": "cache",
    "description": "",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      }
    ]
  },
  {
    "url": "/payment/4.3/canceltransaction",
    "method": "post",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "CancelTransaction",
    "typeScriptTag": "cancelTransaction",
    "description": "",
    "parameters": [
      {
        "name": "paymentToken",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PAYMENTTOKEN"
      },
      {
        "name": "locale",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "clientID",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "browserDetails",
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
    "url": "/payment/4.3/cardinstallmentplaninfo",
    "method": "create",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "CardInstallmentPlanInfo",
    "typeScriptTag": "cardInstallmentPlanInfo",
    "description": "",
    "parameters": [
      {
        "name": "cardNo",
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
        "name": "paymentToken",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PAYMENTTOKEN"
      },
      {
        "name": "locale",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "clientID",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "browserDetails",
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
    "url": "/payment/4.3/cardtokeninfo",
    "method": "getCardTokenInfo",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "CardTokenInfo",
    "typeScriptTag": "cardTokenInfo",
    "description": "",
    "parameters": [
      {
        "name": "paymentToken",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PAYMENTTOKEN"
      },
      {
        "name": "locale",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "clientID",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "browserDetails",
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
    "url": "/payment/4.3/exchangerate",
    "method": "getRate",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "ExchangeRate",
    "typeScriptTag": "exchangeRate",
    "description": "",
    "parameters": [
      {
        "name": "bin",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "paymentToken",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PAYMENTTOKEN"
      },
      {
        "name": "locale",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "clientID",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "browserDetails",
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
    "url": "/payment/4.3/exchangerate/secure",
    "method": "requestEndpoint",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "ExchangeRate",
    "typeScriptTag": "exchangeRate",
    "description": "JWT Request Endpoint",
    "parameters": [
      {
        "name": "payload",
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
    "url": "/payment/4.3/exchangerate/apmmccexchangerate",
    "method": "apmMcc",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "ExchangeRate",
    "typeScriptTag": "exchangeRate",
    "description": "APM MCC Exchange Rate",
    "parameters": [
      {
        "name": "paymentToken",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PAYMENTTOKEN"
      },
      {
        "name": "locale",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "clientID",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "browserDetails",
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
    "url": "/payment/4.3/initialization",
    "method": "requestCreation",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Initialization",
    "typeScriptTag": "initialization",
    "description": "",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/payment/4.3/loyaltypointinfo",
    "method": "postLoyaltyPointInfo",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "LoyaltyPointInfo",
    "typeScriptTag": "loyaltyPointInfo",
    "description": "",
    "parameters": [
      {
        "name": "providerID",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "profileID",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "referenceID",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "cardNo",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "expiryMonth",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "expiryYear",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "paymentToken",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PAYMENTTOKEN"
      },
      {
        "name": "locale",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "clientID",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "browserDetails",
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
    "url": "/payment/4.3/payment",
    "method": "createPayment",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Payment",
    "typeScriptTag": "payment",
    "description": "",
    "parameters": [
      {
        "name": "payment",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "responseReturnUrl",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "clientIP",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "paymentToken",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PAYMENTTOKEN"
      },
      {
        "name": "locale",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "clientID",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "browserDetails",
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
    "url": "/payment/4.3/paymentinquiry",
    "method": "postPaymentDetails",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "PaymentInquiry",
    "typeScriptTag": "paymentInquiry",
    "description": "",
    "parameters": [
      {
        "name": "payload",
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
    "url": "/payment/4.3/paymentinstruction",
    "method": "submitInstruction",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "PaymentInstruction",
    "typeScriptTag": "paymentInstruction",
    "description": "",
    "parameters": [
      {
        "name": "payload",
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
    "url": "/payment/4.3/paymentnotification",
    "method": "processNotification",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "PaymentNotification",
    "typeScriptTag": "paymentNotification",
    "description": "",
    "parameters": [
      {
        "name": "plateform",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "recipientID",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "recipientName",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "paymentToken",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PAYMENTTOKEN"
      },
      {
        "name": "locale",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "clientID",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "browserDetails",
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
    "url": "/payment/4.3/paymentoption",
    "method": "createPaymentOption",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "PaymentOption",
    "typeScriptTag": "paymentOption",
    "description": "",
    "parameters": [
      {
        "name": "paymentToken",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PAYMENTTOKEN"
      },
      {
        "name": "locale",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "clientID",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "browserDetails",
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
    "url": "/payment/4.3/paymentoptiondetails",
    "method": "postOptionDetails",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "PaymentOptionDetails",
    "typeScriptTag": "paymentOptionDetails",
    "description": "",
    "parameters": [
      {
        "name": "categoryCode",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CATEGORYCODE"
      },
      {
        "name": "groupCode",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "GROUPCODE"
      },
      {
        "name": "paymentToken",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PAYMENTTOKEN"
      },
      {
        "name": "locale",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "clientID",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "browserDetails",
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
    "url": "/payment/4.3/paymentsimulate",
    "method": "executePaymentSimulation",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "PaymentSimulate",
    "typeScriptTag": "paymentSimulate",
    "description": "",
    "parameters": [
      {
        "name": "payload",
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
    "url": "/payment/4.3/paymenttoken",
    "method": "generateToken",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "PaymentToken",
    "typeScriptTag": "paymentToken",
    "description": "",
    "parameters": [
      {
        "name": "payload",
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
    "url": "/payment/4.3/redirectbackend",
    "method": "postPaymentRedirect",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "RedirectBackEnd",
    "typeScriptTag": "redirectBackEnd",
    "description": "",
    "parameters": [
      {
        "name": "paymentResponse",
        "schema": "string",
        "description": ""
      },
      {
        "name": "isLeaveApp",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      }
    ]
  },
  {
    "url": "/payment/4.3/redirectfrontend",
    "method": "postPaymentRedirect",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "RedirectFrontEnd",
    "typeScriptTag": "redirectFrontEnd",
    "description": "",
    "parameters": [
      {
        "name": "payResponse",
        "schema": "string",
        "description": ""
      },
      {
        "name": "isLeaveApp",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      }
    ]
  },
  {
    "url": "/payment/4.3/transactionstatus",
    "method": "updateTransactionStatus",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "TransactionStatus",
    "typeScriptTag": "transactionStatus",
    "description": "",
    "parameters": [
      {
        "name": "additionalInfo",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "paymentToken",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PAYMENTTOKEN"
      },
      {
        "name": "locale",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "clientID",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "browserDetails",
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
    "url": "/payment/4.3/userpreference",
    "method": "saveUserPreference",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "UserPreference",
    "typeScriptTag": "userPreference",
    "description": "",
    "parameters": [
      {
        "name": "paymentToken",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PAYMENTTOKEN"
      },
      {
        "name": "locale",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "clientID",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "browserDetails",
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
  }
]
    }
      language="TypeScript"
      apiTitle="PGW Payment API 4.3"
      apiBaseUrl="https://sandbox-pgw.2c2p.com"
      apiVersion="4.3"
      endpoints={22}
      sdkMethods={22}
      schemas={71}
      parameters={80}
      difficulty="Easy"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/2-c-2-p/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/2-c-2-p/openapi.yaml"
      developerDocumentation="developer.2c2p.com/"
    />
  );
}
  