import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function BulkSmsComTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="bulk-sms-com-typescript-sdk"
      metaDescription={`BulkSMS.com is a leading SMS messaging service provider offering two-way SMS communications. The BulkSMS gateway reaches across borders and connects to over 800 mobile network operators worldwide.`}
      company="BulkSMS.com"
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/bulksms-com/logo.png"
      companyKebabCase="bulk-sms-com"
      clientNameCamelCase="bulkSmsCom"
      homepage="www.bulksms.com/"
      lastUpdated={new Date("2024-03-28T21:28:00.234Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/bulksms-com/favicon.png"
      // Missing contactUrl
      // Missing contactEmail
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/bulksms-com/imagePreview.png"
      GettingStarted={GettingStarted}
      FirstRequest={FirstRequest}
      categories={["messaging","sms","communications","sms_api","sms_messaging","personalised_sms_messaging","scheduled_sms_messaging","sms_software"]}
      methods={[
  {
    "url": "/blocked-numbers",
    "method": "listRetrieval",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Blocked Numbers",
    "typeScriptTag": "blockedNumbers",
    "description": "List blocked numbers",
    "parameters": [
      {
        "name": "minId",
        "schema": "integer",
        "description": "Records with an `id` that is greater or equal to min-id will be returned. The default value is `0`.  You can add 1 to an id that you previously retrieved, to return subsequent records."
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The maximum number of records to return. The default value is `10000`. The value cannot be greater than 10000."
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
    "url": "/blocked-numbers",
    "method": "createBlockedNumber",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Blocked Numbers",
    "typeScriptTag": "blockedNumbers",
    "description": "Create a blocked number",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "Empty body upon success"
      }
    ]
  },
  {
    "url": "/credit/transfer",
    "method": "transferCreditsToAccount",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Credits",
    "typeScriptTag": "credits",
    "description": "Transfer credits to another account",
    "parameters": [
      {
        "name": "commentOnFrom",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Tranfer to Bobby"
      },
      {
        "name": "commentOnTo",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Tranfer from Danny"
      },
      {
        "name": "credits",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 2345
      },
      {
        "name": "toUserId",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 2345
      },
      {
        "name": "toUsername",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "roboto"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "An empty body when the credits were transferred OK."
      },
      {
        "statusCode": "400",
        "description": "When the request fails validation checks."
      },
      {
        "statusCode": "403",
        "description": "When there are not enough credits in your account or the credit transfer facility is not activated."
      }
    ]
  },
  {
    "url": "/messages",
    "method": "listRetrieval",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Message",
    "typeScriptTag": "message",
    "description": "Retrieve Messages",
    "parameters": [
      {
        "name": "limit",
        "schema": "number",
        "required": false,
        "description": "The maximum number of messages that are returned.  The default is 1000.\nThe value of `limit` is not a guarantee that a specific number of messages will be in the response, even if there are more messages available.  Consider the case where you have 150 messages and you specify `limit=50`.  It is possible that only 49 messages will be returned.  The  way to make sure that there are no more messages is to submit a new call using the `id` filter field with the `<` operator (described below)."
      },
      {
        "name": "filter",
        "schema": "string",
        "description": "See the message filtering for more information."
      },
      {
        "name": "sortOrder",
        "schema": "string",
        "description": "The default value is DESCENDING\n\nIf the `sortOrder` is DESCENDING, the newest messages be first in the result.  ASCENDING places the oldest messages on top of the response.\n"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "See the [errors page](https://www.bulksms.com/developer/json/v1/# for more detail on what kind of errors you can get."
      }
    ]
  },
  {
    "url": "/messages",
    "method": "sendBatchMessages",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Message",
    "typeScriptTag": "message",
    "description": "Send Messages",
    "parameters": [
      {
        "name": "deduplicationId",
        "schema": "integer",
        "description": "Safeguards against the possibility of sending the same messages more than once.\n\nIf a communication failure occurs during a submission, you cannot be sure that the submission was processed; therefore you would have to submit it again. When you post the retry, you must use the `deduplication-id` of the original post. The BulkSMS system uses this ID to check that the request was not previously processed. (If it was previously processed, the submission will succeed, and the behaviour will be indistinguishable to you from a non-duplicated submission). The ID expires after about 12 hours.\n"
      },
      {
        "name": "autoUnicode",
        "schema": "boolean",
        "description": "Specifies how to deal with message text that contains characters not present in the GSM 03.38 character set.\n\nMessages that contain only GSM 03.38 characters are not affected by this setting. \nIf the value is `true` then a message containing non-GSM 03.38 characters will be transmitted as a Unicode SMS (which is most likely more costly). \n\nPlease note: when `auto-unicode` is `true` and the value of the `encoding` property is specified as `UNICODE`, the message will always be sent as `UNICODE`.\n\nIf the value is `false` and the `encoding` property is `TEXT` then non-GSM 03.38 characters will be replaced by the `?` character.\n\nWhen using this setting on the API, you should take case to ensure that your message is _clean_.  \n\nInvisible unicode and unexpected characters could unintentionally convert an message to `UNICODE`.  A common mistake is to use the backtick character (\\`) which is unicode and will turn your `TEXT` message into a `UNICODE` message.\n",
        "default": false
      },
      {
        "name": "scheduleDate",
        "schema": "string",
        "description": "Allows you to send a message in the future.\n\nAn example value is `2019-02-18T13:00:00+02:00`.  It encodes to `2019-02-18T13%3A00%3A00%2B02%3A00`.\nCredits are deducted from your account immediately. Once submitted, scheduled messages cannot be changed or cancelled.\nThe date can be a maximum of two years in the future. If the value is in the past, the message will be sent immediately.\nThe date format requires you to supply an offset from UTC. You can decide to use the offset of your timezone, or maybe the zone of the recipient's location is more appropriate.\nIf the destination is a group, the group members are determined at the time that you submit the message; not the time the message is scheduled to be sent.\n"
      },
      {
        "name": "scheduleDescription",
        "schema": "string",
        "description": "A note that is stored together with a scheduled submission, which could be used to more easily identify the scheduled submission at a later date.\n\nThe value of this field is ignored if the `schedule-date` is not provided.\nA value that is longer than 256 characters is truncated.\n"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "See the [errors page](https://www.bulksms.com/developer/json/v1/# for more detail on what kind of errors you can get."
      },
      {
        "statusCode": "403",
        "description": "See the [errors page](https://www.bulksms.com/developer/json/v1/# for more detail on what kind of errors you can get."
      }
    ]
  },
  {
    "url": "/messages/send",
    "method": "submitMessage",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Message",
    "typeScriptTag": "message",
    "description": "Send message by simple GET or POST",
    "parameters": [
      {
        "name": "to",
        "schema": "string",
        "required": true,
        "description": "The phone number of the recipient.",
        "example": "TO"
      },
      {
        "name": "body",
        "schema": "string",
        "required": true,
        "description": "The text you want to send.",
        "example": "BODY"
      },
      {
        "name": "deduplicationId",
        "schema": "integer",
        "description": "Refer to the `deduplication-id` parameter."
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "See the [errors page](https://www.bulksms.com/developer/json/v1/# for more detail on what kind of errors you can get."
      },
      {
        "statusCode": "403",
        "description": "See the [errors page](https://www.bulksms.com/developer/json/v1/# for more detail on what kind of errors you can get."
      }
    ]
  },
  {
    "url": "/messages/{id}",
    "method": "byIdGet",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Message",
    "typeScriptTag": "message",
    "description": "Show Message",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The `id` of the message you want to retrieve",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "See the [errors page](https://www.bulksms.com/developer/json/v1/# for more detail on what kind of errors you can get."
      },
      {
        "statusCode": "404",
        "description": "See the [errors page](https://www.bulksms.com/developer/json/v1/# for more detail on what kind of errors you can get."
      }
    ]
  },
  {
    "url": "/messages/{id}/relatedReceivedMessages",
    "method": "relatedReceivedMessagesList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Message",
    "typeScriptTag": "message",
    "description": "List Related Messages",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The `id` of the sent message",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "See the [errors page](https://www.bulksms.com/developer/json/v1/# for more detail on what kind of errors you can get."
      }
    ]
  },
  {
    "url": "/profile",
    "method": "getUserInformation",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Profile",
    "typeScriptTag": "profile",
    "description": "Get profile",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/rmm/pre-sign-attachment",
    "method": "uploadViaPreSignedUrl",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Attachments",
    "typeScriptTag": "attachments",
    "description": "Upload an attachment via a signed URL",
    "parameters": [
      {
        "name": "fileExtension",
        "schema": "string",
        "description": "",
        "example": "pdf"
      },
      {
        "name": "mediaType",
        "schema": "string",
        "description": "",
        "example": "application/pdf"
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
    "url": "/webhooks",
    "method": "listWebhooks",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Webhooks",
    "typeScriptTag": "webhooks",
    "description": "List webhooks",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/webhooks",
    "method": "createWebhook",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Webhooks",
    "typeScriptTag": "webhooks",
    "description": "Create a webhook",
    "parameters": [
      {
        "name": "active",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": true
      },
      {
        "name": "contactEmailAddress",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "tech_team@example.com"
      },
      {
        "name": "invokeOption",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "MANY"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "My MT Webhook"
      },
      {
        "name": "onWebApp",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": true
      },
      {
        "name": "triggerScope",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SENT"
      },
      {
        "name": "url",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "https://www.example.com"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "See the [errors page](https://www.bulksms.com/developer/json/v1/# for more detail on what kind of errors you can get."
      }
    ]
  },
  {
    "url": "/webhooks/{id}",
    "method": "deleteWebhook",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Webhooks",
    "typeScriptTag": "webhooks",
    "description": "Delete a webhook",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "The webhook was deleted successfully"
      },
      {
        "statusCode": "404",
        "description": "See the [errors page](https://www.bulksms.com/developer/json/v1/# for more detail on what kind of errors you can get."
      }
    ]
  },
  {
    "url": "/webhooks/{id}",
    "method": "readWebhook",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Webhooks",
    "typeScriptTag": "webhooks",
    "description": "Read a webhook",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "See the [errors page](https://www.bulksms.com/developer/json/v1/# for more detail on what kind of errors you can get."
      },
      {
        "statusCode": "404",
        "description": "See the [errors page](https://www.bulksms.com/developer/json/v1/# for more detail on what kind of errors you can get."
      }
    ]
  },
  {
    "url": "/webhooks/{id}",
    "method": "updateWebhook",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Webhooks",
    "typeScriptTag": "webhooks",
    "description": "Update a webhook",
    "parameters": [
      {
        "name": "active",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": true
      },
      {
        "name": "contactEmailAddress",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "tech_team@example.com"
      },
      {
        "name": "invokeOption",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "MANY"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "My MT Webhook"
      },
      {
        "name": "onWebApp",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": true
      },
      {
        "name": "triggerScope",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SENT"
      },
      {
        "name": "url",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "https://www.example.com"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "See the [errors page](https://www.bulksms.com/developer/json/v1/# for more detail on what kind of errors you can get."
      }
    ]
  }
]
    }
      language="TypeScript"
      apiTitle="BulkSMS JSON REST API"
      apiBaseUrl="https://api.bulksms.com/v1"
      apiVersion="1.0.0"
      endpoints={10}
      sdkMethods={16}
      schemas={18}
      parameters={35}
      difficulty="Very Easy"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/bulksms-com/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/bulksms-com/openapi.yaml"
      developerDocumentation="www.bulksms.com/developer/json/v1/#"
    />
  );
}
  