import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import Description from "./_description.mdx";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function FrontChannelTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="front-channel-typescript-sdk"
      metaDescription={`Front is a customer operations platform that enables support, sales, and account management teams to deliver exceptional service at scale. Front streamlines customer communication by combining the efficiency of a help desk and the familiarity of email, with automated workflows and real-time collaboration behind the scenes.

With Front, teams can centralize messages across channels, route them to the right person, and unlock visibility and insights across all of their customer operations. More than 8000 businesses use Front to drive operational efficiency that prevents churn, improves retention, and propels customer growth.`}
      company="Front"
      serviceName="Channel"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/front/channel/logo.png"
      companyKebabCase="front"
      clientNameCamelCase="frontChannel"
      homepage="front.com"
      lastUpdated={new Date("2024-03-25T20:47:15.965Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/front/channel/favicon.png"
      contactUrl="https://community.front.com"
      // Missing contactEmail
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/front/channel/imagePreview.png"
      GettingStarted={GettingStarted}
      Description={Description}
      FirstRequest={FirstRequest}
      categories={["customer_operations","support","sales","account_management","customer_service","help_desk","customer_communication","churn_prevention","channel_routing","real_time_collaboration","email_collaboration","shared_inbox","management_software"]}
      methods={[
  {
    "url": "/channels/{channel_id}",
    "method": "updateChannel",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Channels",
    "typeScriptTag": "channels",
    "description": "Update Channel",
    "parameters": [
      {
        "name": "channelId",
        "schema": "string",
        "required": true,
        "description": "The Channel ID. Alternatively, you can supply the channel address as a [resource alias](https://dev.frontapp.com/docs/resource-aliases-1).",
        "example": "CHANNEL_ID",
        "default": "cha_123"
      },
      {
        "name": "status",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No content"
      }
    ]
  },
  {
    "url": "/channels/{channel_id}/inbound_messages",
    "method": "importReceivedMessage",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Messages",
    "typeScriptTag": "messages",
    "description": "Sync inbound message",
    "parameters": [
      {
        "name": "channelId",
        "schema": "string",
        "required": true,
        "description": "The channel ID. Alternatively, you can supply the channel address as a [resource alias](https://dev.frontapp.com/docs/resource-aliases-1).",
        "example": "CHANNEL_ID",
        "default": "cha_123"
      },
      {
        "name": "sender",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "subject",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "body",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "BODY"
      },
      {
        "name": "metadata",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "delivered_at",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "attachments",
        "schema": "array",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": ""
      }
    ]
  },
  {
    "url": "/channels/{channel_id}/outbound_messages",
    "method": "importSyncedMessage",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Messages",
    "typeScriptTag": "messages",
    "description": "Sync outbound message",
    "parameters": [
      {
        "name": "channelId",
        "schema": "string",
        "required": true,
        "description": "The channel ID. Alternatively, you can supply the channel address as a [resource alias](https://dev.frontapp.com/docs/resource-aliases-1).",
        "example": "CHANNEL_ID",
        "default": "cha_123"
      },
      {
        "name": "sender_name",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "to",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "subject",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "author_id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "body",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "BODY"
      },
      {
        "name": "metadata",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "delivered_at",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "attachments",
        "schema": "array",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": ""
      }
    ]
  }
]
    }
      language="TypeScript"
      apiTitle="Channel API"
      apiBaseUrl="https://api2.frontapp.com"
      apiVersion="1.0.0"
      endpoints={3}
      sdkMethods={3}
      schemas={4}
      parameters={18}
      difficulty="Very Easy"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/front/channel/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/front/channel/openapi.yaml"
      developerDocumentation="dev.frontapp.com/reference/introduction-1"
    />
  );
}
  