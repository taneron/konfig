import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function PayfactoryTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="payfactory-typescript-sdk"
      metaDescription={`Payfactory specializes in embedded payment facilitation (payfac) services for ISVs and SaaS companies. Our gateway-friendly platform integrates with software systems to provide seamless payment facilitation with little to no development required, allowing our partners to minimize integration costs and quickly gain a new revenue stream. Founded by payment industry veterans, we believe that integrated processing should be simple, frictionless and fast – while also maintaining the highest level of security, customer service and human support.`}
      company="Payfactory"
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/payfactory/logo.png"
      companyKebabCase="payfactory"
      clientNameCamelCase="payfactory"
      homepage="payfactory.io/"
      lastUpdated={new Date("2024-03-24T21:41:22.682Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/payfactory/favicon.png"
      // Missing contactUrl
      // Missing contactEmail
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/payfactory/imagePreview.jpg"
      GettingStarted={GettingStarted}
      FirstRequest={FirstRequest}
      categories={["developer_tools","payments","finance","financial_services","embedded_payments"]}
      methods={[
  {
    "url": "/v1/Application/Status/{appId}",
    "method": "getApplicationStatus",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Application",
    "typeScriptTag": "application",
    "description": "Gets the Status of an Application",
    "parameters": [
      {
        "name": "appId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "APPID"
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
    "url": "/v1/Application/Details/{appId}",
    "method": "getApplicationDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Application",
    "typeScriptTag": "application",
    "description": "Gets Details for an Application",
    "parameters": [
      {
        "name": "appId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "APPID"
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
    "url": "/v1/Application/StartUnderwriting/{appId}",
    "method": "startUnderwritingProcess",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Application",
    "typeScriptTag": "application",
    "description": "Start Underwriting Process for an Application",
    "parameters": [
      {
        "name": "appId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "APPID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
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
    "url": "/v1/Application/Submit",
    "method": "createNewApplication",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Application",
    "typeScriptTag": "application",
    "description": "Submit a new Application",
    "parameters": [
      {
        "name": "externalId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "isvName",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ISVNAME"
      },
      {
        "name": "businessDetails",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "customerServiceContact",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "riskContact",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "businessContact",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "processingDetails",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "bankDetails",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "pricingStructure",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "owners",
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
    "url": "/v1/Application/Delete/{appId}",
    "method": "removeById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Application",
    "typeScriptTag": "application",
    "description": "",
    "parameters": [
      {
        "name": "appId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "APPID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/ApplicationForm/session/{sessionId}",
    "method": "getSessionInfo",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "ApplicationForm",
    "typeScriptTag": "applicationForm",
    "description": "Gets information about a Session",
    "parameters": [
      {
        "name": "sessionId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SESSIONID"
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
    "url": "/v1/ApplicationForm/session/{sessionId}",
    "method": "updateSessionActivity",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "ApplicationForm",
    "typeScriptTag": "applicationForm",
    "description": "Touch a Session, keeping it active",
    "parameters": [
      {
        "name": "sessionId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SESSIONID"
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
    "url": "/v1/ApplicationForm/session",
    "method": "createSession",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "ApplicationForm",
    "typeScriptTag": "applicationForm",
    "description": "Creates a new Session",
    "parameters": [
      {
        "name": "pricingPlanId",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "APFOG8GTO04FKF"
      },
      {
        "name": "signer",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "companyName",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Test"
      },
      {
        "name": "redirectUrl",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "https://test.com/return"
      },
      {
        "name": "completeUrl",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "https://test.com/complete"
      },
      {
        "name": "refreshUrl",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "https://test.com/refresh"
      },
      {
        "name": "externalId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Test1234"
      },
      {
        "name": "businessDetails",
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
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/Document/Upload/{type}/{appId}",
    "method": "uploadAgreement",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Document",
    "typeScriptTag": "document",
    "description": "Upload an Agreement for a new Application",
    "parameters": [
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TYPE"
      },
      {
        "name": "appId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "APPID"
      },
      {
        "name": "Document",
        "schema": "string",
        "required": true,
        "description": "",
        "example": ".pdf"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/Reporting/Deposits",
    "method": "getDeposits",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Reporting",
    "typeScriptTag": "reporting",
    "description": "Get current Deposits",
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
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/Reporting/Deposits/{referenceId}",
    "method": "getDepositsByReferenceId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Reporting",
    "typeScriptTag": "reporting",
    "description": "Get Deposits by ReferenceId.",
    "parameters": [
      {
        "name": "referenceId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "REFERENCEID"
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
    "url": "/v1/Reporting/AchTransactions/{referenceId}",
    "method": "getAchTransactionsByReferenceId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Reporting",
    "typeScriptTag": "reporting",
    "description": "",
    "parameters": [
      {
        "name": "referenceId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "REFERENCEID"
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
    "url": "/v1/Reporting/Deposits/{numberOfDeposits}",
    "method": "getDepositsByCount",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Reporting",
    "typeScriptTag": "reporting",
    "description": "Get {n} current Deposits",
    "parameters": [
      {
        "name": "numberOfDeposits",
        "schema": "integer",
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
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/Transaction/Metadata",
    "method": "createMetadata",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Transaction",
    "typeScriptTag": "transaction",
    "description": "Post Metadata related to a Transaction",
    "parameters": [
      {
        "name": "transactionId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TRANSACTIONID"
      },
      {
        "name": "merchantId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "4BCD-3FGH"
      },
      {
        "name": "cardHolderName",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "John Doe"
      },
      {
        "name": "externalId",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "abcdef123456"
      },
      {
        "name": "orderId",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "321654987"
      },
      {
        "name": "partnerFee",
        "schema": "number",
        "required": false,
        "description": "",
        "example": 1.25
      },
      {
        "name": "itemCount",
        "schema": "integer",
        "required": false,
        "description": "",
        "example": 1
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
    "url": "/v1/Transaction/MetadataBulk",
    "method": "createMetadataBulk",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Transaction",
    "typeScriptTag": "transaction",
    "description": "Post multiple Metadate related to a Transactions",
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
        "description": ""
      }
    ]
  }
]
    }
      language="TypeScript"
      apiTitle="Payfactory Api"
      apiBaseUrl="https://dev-api.payfactory.app"
      apiVersion="v1"
      endpoints={14}
      sdkMethods={15}
      schemas={52}
      parameters={37}
      difficulty="Easy"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/payfactory/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/payfactory/openapi.yaml"
      developerDocumentation="payfactory.readme.io/"
    />
  );
}
  