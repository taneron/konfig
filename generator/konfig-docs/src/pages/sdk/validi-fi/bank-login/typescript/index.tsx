import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function ValidiFiBankLoginTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="validi-fi-bank-login-typescript-sdk"
      metaDescription={`ValidiFI, an analytics and technology company, connects bank account and payment insights to help companies in a variety of industries provide more confident, trustworthy and transparent transactions. Our differentiated data, sourced directly from banks, payment processors, and financial platforms helps companies to ensure compliance, mitigate risk, combat fraud, and confidently validate bank account and ownership. For more information, visit ValidiFI.com.`}
      company="ValidiFI"
      serviceName="BankLogin"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/validifi/bank-login/logo.png"
      companyKebabCase="validi-fi"
      clientNameCamelCase="validiFiBankLogin"
      homepage="validifi.com/"
      lastUpdated={new Date("2024-03-25T22:51:15.888Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/validifi/bank-login/favicon.png"
      // Missing contactUrl
      // Missing contactEmail
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/validifi/bank-login/imagePreview.jpg"
      GettingStarted={GettingStarted}
      FirstRequest={FirstRequest}
      categories={["financial_services","fintech","banking","fraud_prevention"]}
      methods={[
  {
    "url": "/v4/token",
    "method": "create",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Token",
    "typeScriptTag": "token",
    "description": "OAuth 2.0 Token",
    "parameters": [
      {
        "name": "clientId",
        "schema": "string",
        "description": "",
        "example": "{{clientId}}"
      },
      {
        "name": "clientSecret",
        "schema": "string",
        "description": "",
        "example": "{{clientSecret}}"
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
    "url": "/v4/HealthCheck",
    "method": "checkHealth",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Token",
    "typeScriptTag": "token",
    "description": "Health Check",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v4/Insights",
    "method": "submitLoanApplication",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Insights",
    "typeScriptTag": "insights",
    "description": "BankQUALIFY",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v4/Insights/2/{inquiryId}",
    "method": "getInsightById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Insights",
    "typeScriptTag": "insights",
    "description": "Get Insights",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v4/CONNECT/Session",
    "method": "createSession",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "CONNECT",
    "typeScriptTag": "connect",
    "description": "CONNECT Session",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v4/CONNECT/Banks",
    "method": "bankLookup",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "CONNECT",
    "typeScriptTag": "connect",
    "description": "Bank Lookup",
    "parameters": [
      {
        "name": "search",
        "schema": "string",
        "description": "",
        "example": "{{routingNumber}}"
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
    "url": "/v4/accounts/{accountToken}/export",
    "method": "getFullAccountInfo",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "CONNECT",
    "typeScriptTag": "connect",
    "description": "Get Full Account Info from CONNECT Session",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v4/affordai",
    "method": "submitAffordAi",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Reports",
    "typeScriptTag": "reports",
    "description": "AffordAi",
    "parameters": [],
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
      apiTitle="RIBBIT API v4"
      apiBaseUrl="https://{{domain}}"
      apiVersion="1.0.0"
      endpoints={8}
      sdkMethods={10}
      schemas={1}
      parameters={3}
      difficulty="Very Easy"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/validifi/bank-login/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/validifi/bank-login/openapi.yaml"
      developerDocumentation="portal.ribbit.ai/BLP/Integration"
    />
  );
}
  