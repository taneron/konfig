import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import Description from "./_description.mdx";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function PulzeAiTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="pulze-ai-typescript-sdk"
      metaDescription={`At Pulze it's our mission to supercharge today's workforce with AI to maximize the world's prosperity. We are doing so by enabling companies of any size to securely leverage Large Language Models (LLM) and easily build AI features into their apps. Our enterprise platform has access to all best in class LLMs and can route user requests to the most relevant model to get the highest quality response at the best price thanks to our smart meta model. End users can leverage pre-built applications, such as our Marketing AI product, or build custom apps on top of the Pulze Platform.

We are a VC Funded, early stage startup based in San Francisco.`}
      company="Pulze.ai"
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/pulze-ai/logo.png"
      companyKebabCase="pulze-ai"
      clientNameCamelCase="pulzeAi"
      homepage="www.pulze.ai/"
      lastUpdated={new Date("2024-03-24T21:45:24.878Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/pulze-ai/favicon.png"
      // Missing contactUrl
      // Missing contactEmail
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/pulze-ai/imagePreview.jpg"
      GettingStarted={GettingStarted}
      Description={Description}
      FirstRequest={FirstRequest}
      categories={["ai","developer_tools","llm"]}
      methods={[
  {
    "url": "/v1/chat/completions",
    "method": "performCompletionRequest",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "chat",
    "typeScriptTag": "chat",
    "description": "Chat Completions",
    "parameters": [
      {
        "name": "best_of",
        "schema": "integer",
        "description": "",
        "default": 1
      },
      {
        "name": "false",
        "schema": "integer",
        "description": "",
        "default": 1
      },
      {
        "name": "frequency_penalty",
        "schema": "number",
        "description": "",
        "default": 0
      },
      {
        "name": "logit_bias",
        "schema": "object",
        "description": ""
      },
      {
        "name": "logprobs",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "max_tokens",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "messages",
        "schema": "array",
        "description": "",
        "default": []
      },
      {
        "name": "model",
        "schema": "string",
        "description": "",
        "default": "pulze"
      },
      {
        "name": "presence_penalty",
        "schema": "number",
        "description": "",
        "default": 0
      },
      {
        "name": "prompt",
        "schema": "undefined",
        "description": ""
      },
      {
        "name": "stop",
        "schema": "undefined",
        "description": "",
        "default": ""
      },
      {
        "name": "stream",
        "schema": "boolean",
        "description": "",
        "default": false
      },
      {
        "name": "suffix",
        "schema": "string",
        "description": "",
        "default": ""
      },
      {
        "name": "temperature",
        "schema": "number",
        "description": "",
        "default": 1
      },
      {
        "name": "tool_choice",
        "schema": "undefined",
        "description": "",
        "default": "none"
      },
      {
        "name": "tools",
        "schema": "array",
        "description": ""
      },
      {
        "name": "top_p",
        "schema": "number",
        "description": "",
        "default": 1
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The response returned to the user by the Chat Completions endpoint"
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/completions",
    "method": "performTextRequest",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "completions",
    "typeScriptTag": "completions",
    "description": "Completions",
    "parameters": [
      {
        "name": "best_of",
        "schema": "integer",
        "description": "",
        "default": 1
      },
      {
        "name": "false",
        "schema": "integer",
        "description": "",
        "default": 1
      },
      {
        "name": "frequency_penalty",
        "schema": "number",
        "description": "",
        "default": 0
      },
      {
        "name": "logit_bias",
        "schema": "object",
        "description": ""
      },
      {
        "name": "logprobs",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "max_tokens",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "messages",
        "schema": "array",
        "description": "",
        "default": []
      },
      {
        "name": "model",
        "schema": "string",
        "description": "",
        "default": "pulze"
      },
      {
        "name": "presence_penalty",
        "schema": "number",
        "description": "",
        "default": 0
      },
      {
        "name": "prompt",
        "schema": "undefined",
        "description": ""
      },
      {
        "name": "stop",
        "schema": "undefined",
        "description": "",
        "default": ""
      },
      {
        "name": "stream",
        "schema": "boolean",
        "description": "",
        "default": false
      },
      {
        "name": "suffix",
        "schema": "string",
        "description": "",
        "default": ""
      },
      {
        "name": "temperature",
        "schema": "number",
        "description": "",
        "default": 1
      },
      {
        "name": "tool_choice",
        "schema": "undefined",
        "description": "",
        "default": "none"
      },
      {
        "name": "tools",
        "schema": "array",
        "description": ""
      },
      {
        "name": "top_p",
        "schema": "number",
        "description": "",
        "default": 1
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The response returned to the user by the (text) Completions endpoint"
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/models/rank",
    "method": "getRankOfBest",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "models",
    "typeScriptTag": "models",
    "description": "Get Rank Of Best Models For Payload",
    "parameters": [
      {
        "name": "best_of",
        "schema": "integer",
        "description": "",
        "default": 1
      },
      {
        "name": "false",
        "schema": "integer",
        "description": "",
        "default": 1
      },
      {
        "name": "frequency_penalty",
        "schema": "number",
        "description": "",
        "default": 0
      },
      {
        "name": "logit_bias",
        "schema": "object",
        "description": ""
      },
      {
        "name": "logprobs",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "max_tokens",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "messages",
        "schema": "array",
        "description": "",
        "default": []
      },
      {
        "name": "model",
        "schema": "string",
        "description": "",
        "default": "pulze"
      },
      {
        "name": "presence_penalty",
        "schema": "number",
        "description": "",
        "default": 0
      },
      {
        "name": "prompt",
        "schema": "undefined",
        "description": ""
      },
      {
        "name": "stop",
        "schema": "undefined",
        "description": "",
        "default": ""
      },
      {
        "name": "stream",
        "schema": "boolean",
        "description": "",
        "default": false
      },
      {
        "name": "suffix",
        "schema": "string",
        "description": "",
        "default": ""
      },
      {
        "name": "temperature",
        "schema": "number",
        "description": "",
        "default": 1
      },
      {
        "name": "tool_choice",
        "schema": "undefined",
        "description": "",
        "default": "none"
      },
      {
        "name": "tools",
        "schema": "array",
        "description": ""
      },
      {
        "name": "top_p",
        "schema": "number",
        "description": "",
        "default": 1
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/logs/{log_id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "logs",
    "typeScriptTag": "logs",
    "description": "Get Log By Id",
    "parameters": [
      {
        "name": "logId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "LOG_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/logs/{log_id}/rating",
    "method": "rateById",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "logs",
    "typeScriptTag": "logs",
    "description": "Rate Log By Id",
    "parameters": [
      {
        "name": "logId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "LOG_ID"
      },
      {
        "name": "feedback",
        "schema": "string",
        "description": "",
        "default": ""
      },
      {
        "name": "good_answer",
        "schema": "boolean",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/apps/self",
    "method": "getAppForApiKey",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "apps",
    "typeScriptTag": "apps",
    "description": "Get App For Api Key",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/apps/update",
    "method": "updateProperties",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "apps",
    "typeScriptTag": "apps",
    "description": "Update App And Models",
    "parameters": [
      {
        "name": "description",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DESCRIPTION"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "policies",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "prompt_id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "weights",
        "schema": "object",
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
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/models/active",
    "method": "listActiveModels",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "models",
    "typeScriptTag": "models",
    "description": "Get Active Models For App",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/models/all",
    "method": "getAllModels",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "models",
    "typeScriptTag": "models",
    "description": "Get All Available Models For App",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/models/{model_id}/toggle",
    "method": "toggleModelForApp",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "models",
    "typeScriptTag": "models",
    "description": "Toggle Model For App",
    "parameters": [
      {
        "name": "modelId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "MODEL_ID"
      },
      {
        "name": "enable",
        "schema": "boolean",
        "description": "",
        "default": true
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/healthz",
    "method": "getElapsedTimes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "healthcheck",
    "typeScriptTag": "healthcheck",
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
    "url": "/v1/logs",
    "method": "getMatchingLogs",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "logs",
    "typeScriptTag": "logs",
    "description": "Get Logs For App",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "description": "",
        "default": 1
      },
      {
        "name": "size",
        "schema": "integer",
        "description": "",
        "default": 50
      },
      {
        "name": "app_ids",
        "schema": "array",
        "required": false,
        "description": "",
        "default": []
      },
      {
        "name": "date_from",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DATE_FROM"
      },
      {
        "name": "date_to",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "labels",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "params",
        "schema": "array",
        "required": false,
        "description": "",
        "default": []
      },
      {
        "name": "query",
        "schema": "string",
        "required": false,
        "description": "",
        "default": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/apps",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "apps",
    "typeScriptTag": "apps",
    "description": "Get Apps List",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "description": "",
        "default": 1
      },
      {
        "name": "size",
        "schema": "integer",
        "description": "",
        "default": 50
      },
      {
        "name": "params",
        "schema": "array",
        "description": "",
        "default": []
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  }
]
    }
      language="TypeScript"
      apiTitle="Pulze.ai API"
      apiBaseUrl="https://api.pulze.ai"
      apiVersion="0.1.0"
      endpoints={13}
      sdkMethods={13}
      schemas={106}
      parameters={73}
      difficulty="Easy"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/pulze-ai/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/pulze-ai/openapi.yaml"
      developerDocumentation="docs.pulze.ai/"
    />
  );
}
  