import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function DiaruptAiTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="diarupt-ai-typescript-sdk"
      metaDescription={`Diarupt AI lets you build real-time video AI conversations into your product.`}
      company="Diarupt AI"
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/diarupt-ai/logo.png"
      companyKebabCase="diarupt-ai"
      clientNameCamelCase="diaruptAi"
      homepage="diarupt.ai/"
      lastUpdated={new Date("2024-03-27T20:16:43.354Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/diarupt-ai/favicon.png"
      // Missing contactUrl
      // Missing contactEmail
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/diarupt-ai/imagePreview.png"
      GettingStarted={GettingStarted}
      FirstRequest={FirstRequest}
      categories={["video_ai","conversations","ai"]}
      methods={[
  {
    "url": "/create-session",
    "method": "createInteraction",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Session",
    "typeScriptTag": "session",
    "description": "Creates a new Interaction Session",
    "parameters": [
      {
        "name": "behavior",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Assume the role of a doctor. You're conducting an examination."
      },
      {
        "name": "context",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "- Candidate Name is Jon. - Position is Software Engineer."
      },
      {
        "name": "face",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "obama"
      },
      {
        "name": "profile",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "interviewer"
      },
      {
        "name": "time_limit",
        "schema": "number",
        "required": false,
        "description": "",
        "example": 300
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Unauthorized access"
      }
    ]
  },
  {
    "url": "/terminate-session/{session_id}",
    "method": "terminateInteraction",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Session",
    "typeScriptTag": "session",
    "description": "Terminates an Interaction Session",
    "parameters": [
      {
        "name": "sessionId",
        "schema": "string",
        "required": true,
        "description": "Session ID",
        "example": "SESSION_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Session terminated"
      },
      {
        "statusCode": "401",
        "description": "Unauthorized access"
      }
    ]
  },
  {
    "url": "/session/{session_id}",
    "method": "getInteraction",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Session",
    "typeScriptTag": "session",
    "description": "Gets an Interaction Session",
    "parameters": [
      {
        "name": "sessionId",
        "schema": "string",
        "required": true,
        "description": "Session ID",
        "example": "SESSION_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Unauthorized access"
      }
    ]
  },
  {
    "url": "/sessions",
    "method": "getAllInteractions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Session",
    "typeScriptTag": "session",
    "description": "Gets all Interaction Sessions",
    "parameters": [
      {
        "name": "limit",
        "schema": "string",
        "description": "",
        "default": 10
      },
      {
        "name": "page",
        "schema": "string",
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
        "statusCode": "401",
        "description": "Unauthorized access"
      }
    ]
  },
  {
    "url": "/faces",
    "method": "getAvailableFaces",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Resources",
    "typeScriptTag": "resources",
    "description": "Gets all available AI Faces",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Unauthorized access"
      }
    ]
  },
  {
    "url": "/profiles",
    "method": "getAllAiProfiles",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Resources",
    "typeScriptTag": "resources",
    "description": "Gets all available AI Profiles",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Unauthorized access"
      }
    ]
  }
]
    }
      language="TypeScript"
      apiTitle="Diarupt Engine API"
      apiBaseUrl="https://engine.diarupt.ai"
      apiVersion="0.0.1"
      endpoints={6}
      sdkMethods={6}
      schemas={10}
      parameters={9}
      difficulty="Very Easy"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/diarupt-ai/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/diarupt-ai/openapi.yaml"
      developerDocumentation="docs.diarupt.ai/api-reference"
    />
  );
}
  