import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function NetvyneTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="netvyne-typescript-sdk"
      metaDescription={`Netvyne provides the APIs and tools for discussion platforms to effortlessly manage and curate their users' comments.

Netvyne's API enforces your own content policy criterion and is tailored to your platform's needs. Netvyne takes a hybrid man-machine approach to bring both low latency and high accuracy moderation, resulting in increased user safety and community growth.`}
      company="Netvyne"
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/netvyne/logo.png"
      companyKebabCase="netvyne"
      clientNameCamelCase="netvyne"
      homepage="netvyne.com"
      lastUpdated={new Date("2024-03-29T22:42:59.082Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/netvyne/favicon.png"
      contactUrl="https://blog.netvyne.com/blog/support"
      contactEmail="info@netvyne.com"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/netvyne/imagePreview.jpg"
      GettingStarted={GettingStarted}
      FirstRequest={FirstRequest}
      categories={["discussion","moderation"]}
      methods={[
  {
    "url": "/categories",
    "method": "updateCategories",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "settings",
    "typeScriptTag": "settings",
    "description": "Set/update the categories used for moderation of comments",
    "parameters": [
      {
        "name": "Categories",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/comments",
    "method": "submitProcessingDetails",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "comment",
    "typeScriptTag": "comment",
    "description": "Submit a comment for processing",
    "parameters": [
      {
        "name": "ID",
        "schema": "string",
        "description": ""
      },
      {
        "name": "ParentCommentID",
        "schema": "string",
        "description": ""
      },
      {
        "name": "Text",
        "schema": "string",
        "description": ""
      },
      {
        "name": "UserName",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/demo_webhook",
    "method": "webhookResponseHandling",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "example",
    "typeScriptTag": "example",
    "description": "Sample of a route that receives the webhook response",
    "parameters": [
      {
        "name": "APIVersion",
        "schema": "string",
        "description": ""
      },
      {
        "name": "Categories",
        "schema": "array",
        "description": ""
      },
      {
        "name": "ID",
        "schema": "string",
        "description": ""
      },
      {
        "name": "LastComputedAt",
        "schema": "string",
        "description": ""
      },
      {
        "name": "Type",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/instructions",
    "method": "setInstructionsUrl",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "settings",
    "typeScriptTag": "settings",
    "description": "Set/update the instructions url at which moderation instructions are provided",
    "parameters": [
      {
        "name": "InstructionsURL",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/webhooks",
    "method": "updateWebhookUrl",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "webhook",
    "typeScriptTag": "webhook",
    "description": "Set/update the webhook url at which results are received",
    "parameters": [
      {
        "name": "WebhookURL",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  }
]
    }
      language="TypeScript"
      apiTitle="Netvyne API"
      apiBaseUrl="https://api.netvyne.com/v1"
      apiVersion="1.0"
      endpoints={5}
      sdkMethods={5}
      schemas={16}
      parameters={12}
      difficulty="Very Easy"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/netvyne/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/netvyne/openapi.yaml"
      developerDocumentation="api.netvyne.com/documentation/index.html"
    />
  );
}
  