import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function InducedAiTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="induced-ai-typescript-sdk"
      metaDescription={`Building the next evolution of actionable AI.`}
      company="InducedAI"
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/inducedai/logo.png"
      companyKebabCase="induced-ai"
      clientNameCamelCase="inducedAi"
      homepage="induced.ai"
      lastUpdated={new Date("2024-03-26T07:55:59.525Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/inducedai/favicon.png"
      // Missing contactUrl
      // Missing contactEmail
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/inducedai/imagePreview.jpg"
      GettingStarted={GettingStarted}
      FirstRequest={FirstRequest}
      categories={["ai","developer_tools","browser_automation","browser_agent"]}
      methods={[
  {
    "url": "/autonomous",
    "method": "execute",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Task",
    "typeScriptTag": "task",
    "description": "Execute an Autonomous Task",
    "parameters": [
      {
        "name": "task",
        "schema": "string",
        "description": "",
        "example": "Go to google and search for Elon Musk"
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
    "url": "/autonomous/{id}",
    "method": "getResult",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Autonomous",
    "typeScriptTag": "autonomous",
    "description": "Get Autonomous Task Result",
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
    "url": "/autonomous/{id}/stop",
    "method": "terminateTask",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Autonomous",
    "typeScriptTag": "autonomous",
    "description": "Stop an Autonomous Task",
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
        "description": "Task stopped successfully"
      }
    ]
  },
  {
    "url": "/autonomous/{id}/feedback",
    "method": "submission",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Feedback",
    "typeScriptTag": "feedback",
    "description": "Provide Feedback for an Autonomous Task",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "feedback",
        "schema": "boolean",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Feedback received successfully"
      }
    ]
  },
  {
    "url": "/extract",
    "method": "fromUrl",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Extraction",
    "typeScriptTag": "extraction",
    "description": "Extract data from a URL",
    "parameters": [
      {
        "name": "url",
        "schema": "string",
        "description": ""
      },
      {
        "name": "query",
        "schema": "string",
        "description": ""
      },
      {
        "name": "columns",
        "schema": "string",
        "description": ""
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "format",
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
    "url": "/extract/{id}",
    "method": "getResult",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Extraction",
    "typeScriptTag": "extraction",
    "description": "Get extraction result",
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
  }
]
    }
      language="TypeScript"
      apiTitle="Autonomous API"
      apiBaseUrl="https://api.induced.ai/api/v1"
      apiVersion="1.0.0"
      endpoints={6}
      sdkMethods={6}
      schemas={7}
      parameters={11}
      difficulty="Very Easy"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/inducedai/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/inducedai/openapi.yaml"
      developerDocumentation="docs.induced.ai/introduction"
    />
  );
}
  