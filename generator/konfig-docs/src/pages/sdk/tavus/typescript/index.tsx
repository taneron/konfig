import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function TavusTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="tavus-typescript-sdk"
      metaDescription={`We're an AI video research company making personalized video possible at scale. Generate videos of yourself, and never record again! Available via web app & developer APIs.`}
      company="Tavus"
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/tavus/logo.png"
      companyKebabCase="tavus"
      clientNameCamelCase="tavus"
      homepage="www.tavus.io/"
      lastUpdated={new Date("2024-03-26T22:36:48.020Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/tavus/favicon.png"
      // Missing contactUrl
      // Missing contactEmail
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/tavus/imagePreview.webp"
      GettingStarted={GettingStarted}
      FirstRequest={FirstRequest}
      categories={["video","ai","personalized_video"]}
      methods={[
  {
    "url": "/v2/replicas",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Replicas",
    "typeScriptTag": "replicas",
    "description": "List Replicas",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/replicas",
    "method": "createNewReplica",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Replicas",
    "typeScriptTag": "replicas",
    "description": "Create Replica",
    "parameters": [
      {
        "name": "callback_url",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "replica_name",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "train_video_url",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TRAIN_VIDEO_URL"
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
    "url": "/v2/replicas/{replica_id}",
    "method": "deleteByReplicaId",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Replicas",
    "typeScriptTag": "replicas",
    "description": "Delete Replica",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/replicas/{replica_id}",
    "method": "getReplicaById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Replicas",
    "typeScriptTag": "replicas",
    "description": "Get Replica",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/replicas/{replica_id}/name",
    "method": "renameReplicaById",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Replicas",
    "typeScriptTag": "replicas",
    "description": "Rename Replica",
    "parameters": [
      {
        "name": "replica_name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "REPLICA_NAME"
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
    "url": "/v2/videos",
    "method": "createVideoFromReplicaAndScript",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Videos",
    "typeScriptTag": "videos",
    "description": "Generate Video",
    "parameters": [
      {
        "name": "background_source_url",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "background_url",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "replica_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "r783537ef5"
      },
      {
        "name": "script",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Hello from Tavus! Enjoy your new replica"
      },
      {
        "name": "video_name",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "My First Video"
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
    "url": "/v2/videos/{video_id}",
    "method": "deleteByVideoId",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Videos",
    "typeScriptTag": "videos",
    "description": "Delete Video",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/videos/{video_id}/name",
    "method": "updateName",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Videos",
    "typeScriptTag": "videos",
    "description": "Rename Video",
    "parameters": [
      {
        "name": "video_name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "VIDEO_NAME"
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
      apiTitle="Tavus Developer API Collection"
      apiBaseUrl="https://tavusapi.com"
      apiVersion="1.0.0"
      endpoints={6}
      sdkMethods={12}
      schemas={8}
      parameters={10}
      difficulty="Very Easy"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/tavus/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/tavus/openapi.yaml"
      developerDocumentation="docs.tavusapi.com/api-reference"
    />
  );
}
  