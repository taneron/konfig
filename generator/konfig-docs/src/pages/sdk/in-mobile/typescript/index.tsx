import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function InMobileTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="in-mobile-typescript-sdk"
      metaDescription={`inMobile er en SMS-Gateway testet af over 8.000 brugere. Vi håndterer over 150 mio. SMS-beskeder årligt og tilstræber en oppetid på 100%, men sandheden er 99,99%.

Uanset, om det drejer sig om at informere dine kunder, medarbejdere eller andre personer, som er vigtige for din virksomhed, gør inMobile det nemt for de rette personer at få besked på det rette tidspunkt.

Du får adgang til en brugervenlig SMS-Gateway og et gennemtestet API, som du nemt kan integrere med dit eget system eller hjemmeside.

Ønsker du at høre mere om vores løsning, er du velkommen til at kontakte os på +45 88 33 66 99 eller på mail salg@inmobile.dk
Vi har åbent alle hverdage mellem kl. 8-17`}
      company="inMobile"
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/inmobile/logo.png"
      companyKebabCase="in-mobile"
      clientNameCamelCase="inMobile"
      homepage="inmobile.com"
      lastUpdated={new Date("2024-03-29T22:25:17.346Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/inmobile/favicon.jpg"
      // Missing contactUrl
      // Missing contactEmail
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/inmobile/imagePreview.png"
      GettingStarted={GettingStarted}
      FirstRequest={FirstRequest}
      categories={["messaging","sms"]}
      methods={[
  {
    "url": "/v4/blacklist",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Blacklist",
    "typeScriptTag": "blacklist",
    "description": "Returns all blacklists (Paged result. Follow _links.next to fetch all)",
    "parameters": [
      {
        "name": "pageLimit",
        "schema": "integer",
        "description": "How many records to return (must be between 1 and 250)"
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
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v4/blacklist",
    "method": "create",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Blacklist",
    "typeScriptTag": "blacklist",
    "description": "Create an entry in blacklist",
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
      },
      {
        "statusCode": "409",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v4/blacklist/{blackListId}",
    "method": "delete",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Blacklist",
    "typeScriptTag": "blacklist",
    "description": "Delete entry by id",
    "parameters": [
      {
        "name": "blackListId",
        "schema": "string",
        "required": true,
        "description": "Id of the blacklist",
        "example": "BLACKLISTID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v4/blacklist/{blackListId}",
    "method": "get",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Blacklist",
    "typeScriptTag": "blacklist",
    "description": "Get entry by id",
    "parameters": [
      {
        "name": "blackListId",
        "schema": "string",
        "required": true,
        "description": "Id of the blacklist",
        "example": "BLACKLISTID"
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
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v4/blacklist/ByNumber",
    "method": "deleteByNumber",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Blacklist",
    "typeScriptTag": "blacklist",
    "description": "Delete entry by number",
    "parameters": [
      {
        "name": "countryCode",
        "schema": "string",
        "description": ""
      },
      {
        "name": "phoneNumber",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v4/blacklist/ByNumber",
    "method": "getByNumber",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Blacklist",
    "typeScriptTag": "blacklist",
    "description": "Get entry by number",
    "parameters": [
      {
        "name": "countryCode",
        "schema": "string",
        "description": ""
      },
      {
        "name": "phoneNumber",
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
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v4/email/outgoing/sendusingtemplate",
    "method": "sendUsingTemplate",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Email",
    "typeScriptTag": "email",
    "description": "Send an email using a template",
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
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v4/email/outgoing",
    "method": "send",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Email",
    "typeScriptTag": "email",
    "description": "Send an email",
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
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v4/email/outgoing/events",
    "method": "getEvents",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Email",
    "typeScriptTag": "email",
    "description": "Get email events",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "description": "How many events to return (must be between 1 and 250)"
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
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v4/email/templates",
    "method": "getAllEmailTemplates",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Email Templates",
    "typeScriptTag": "emailTemplates",
    "description": "Get all email templates",
    "parameters": [
      {
        "name": "pageLimit",
        "schema": "integer",
        "description": "How many records to return (must be between 1 and 250)"
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
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v4/email/templates/{id}",
    "method": "getEmailTemplate",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Email Templates",
    "typeScriptTag": "emailTemplates",
    "description": "Get email template by id",
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
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v4/sms/gdpr/deletionrequests",
    "method": "deletionRequests",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Gdpr",
    "typeScriptTag": "gdpr",
    "description": "Create information Deletion Request",
    "parameters": [
      {
        "name": "numberInfo",
        "schema": "object",
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
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v4/lists",
    "method": "getAllLists",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Lists",
    "typeScriptTag": "lists",
    "description": "Get all lists",
    "parameters": [
      {
        "name": "pageLimit",
        "schema": "integer",
        "description": "How many records to return (must be between 1 and 250)"
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
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v4/lists",
    "method": "createList",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Lists",
    "typeScriptTag": "lists",
    "description": "Create list",
    "parameters": [
      {
        "name": "name",
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
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v4/lists/{listId}",
    "method": "deleteList",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Lists",
    "typeScriptTag": "lists",
    "description": "Delete list",
    "parameters": [
      {
        "name": "listId",
        "schema": "string",
        "required": true,
        "description": "Id of the list",
        "example": "LISTID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v4/lists/{listId}",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Lists",
    "typeScriptTag": "lists",
    "description": "Get list",
    "parameters": [
      {
        "name": "listId",
        "schema": "string",
        "required": true,
        "description": "Id of the list",
        "example": "LISTID"
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
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v4/lists/{listId}",
    "method": "updateList",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Lists",
    "typeScriptTag": "lists",
    "description": "Update list",
    "parameters": [
      {
        "name": "listId",
        "schema": "string",
        "required": true,
        "description": "The id of the list",
        "example": "LISTID"
      },
      {
        "name": "name",
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
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v4/lists/{listId}/recipients",
    "method": "getAllRecipient",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Lists",
    "typeScriptTag": "lists",
    "description": "Get all recipients in a list",
    "parameters": [
      {
        "name": "listId",
        "schema": "string",
        "required": true,
        "description": "Id of the list",
        "example": "LISTID"
      },
      {
        "name": "pageLimit",
        "schema": "integer",
        "description": "How many records to return (must be between 1 and 250)"
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
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v4/lists/{listId}/recipients",
    "method": "createRecipient",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Lists",
    "typeScriptTag": "lists",
    "description": "Create recipient",
    "parameters": [
      {
        "name": "listId",
        "schema": "string",
        "required": true,
        "description": "Id of the list",
        "example": "LISTID"
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
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "409",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v4/lists/{listId}/recipients/all",
    "method": "deleteAllRecipients",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Lists",
    "typeScriptTag": "lists",
    "description": "Deletes all recipients from a list",
    "parameters": [
      {
        "name": "listId",
        "schema": "string",
        "required": true,
        "description": "Id of the list",
        "example": "LISTID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "The affected count"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v4/lists/{listId}/recipients/{recipientId}",
    "method": "deleteRecipient",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Lists",
    "typeScriptTag": "lists",
    "description": "Delete recipient by id",
    "parameters": [
      {
        "name": "listId",
        "schema": "string",
        "required": true,
        "description": "Id of the list",
        "example": "LISTID"
      },
      {
        "name": "recipientId",
        "schema": "string",
        "required": true,
        "description": "Id of the recipient",
        "example": "RECIPIENTID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v4/lists/{listId}/recipients/{recipientId}",
    "method": "getRecipient",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Lists",
    "typeScriptTag": "lists",
    "description": "Get recipient by id",
    "parameters": [
      {
        "name": "listId",
        "schema": "string",
        "required": true,
        "description": "Id of the list",
        "example": "LISTID"
      },
      {
        "name": "recipientId",
        "schema": "string",
        "required": true,
        "description": "Id of the recipient",
        "example": "RECIPIENTID"
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
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v4/lists/{listId}/recipients/{recipientId}",
    "method": "updateRecipient",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Lists",
    "typeScriptTag": "lists",
    "description": "Update recipient",
    "parameters": [
      {
        "name": "listId",
        "schema": "string",
        "required": true,
        "description": "Id of the list",
        "example": "LISTID"
      },
      {
        "name": "recipientId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "RECIPIENTID"
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
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "409",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v4/lists/{listId}/recipients/ByNumber",
    "method": "deleteRecipientByNumber",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Lists",
    "typeScriptTag": "lists",
    "description": "Delete recipient by number",
    "parameters": [
      {
        "name": "listId",
        "schema": "string",
        "required": true,
        "description": "Id of the list",
        "example": "LISTID"
      },
      {
        "name": "countryCode",
        "schema": "string",
        "description": "Target countryCode"
      },
      {
        "name": "phoneNumber",
        "schema": "string",
        "description": "Target phoneNumber"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v4/lists/{listId}/recipients/ByNumber",
    "method": "getRecipientByNumber",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Lists",
    "typeScriptTag": "lists",
    "description": "Get recipient by number",
    "parameters": [
      {
        "name": "listId",
        "schema": "string",
        "required": true,
        "description": "Id of the list",
        "example": "LISTID"
      },
      {
        "name": "countryCode",
        "schema": "string",
        "description": "Target countryCode"
      },
      {
        "name": "phoneNumber",
        "schema": "string",
        "description": "Target phoneNumber"
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
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v4/lists/{listId}/recipients/ByNumber",
    "method": "createOrUpdateRecipientByNumber",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Lists",
    "typeScriptTag": "lists",
    "description": "Create or update recipient by number",
    "parameters": [
      {
        "name": "listId",
        "schema": "string",
        "required": true,
        "description": "Id of the list",
        "example": "LISTID"
      },
      {
        "name": "countryCode",
        "schema": "string",
        "description": "Target countryCode"
      },
      {
        "name": "phoneNumber",
        "schema": "string",
        "description": "Target phoneNumber"
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
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v4/sms/incoming/messages",
    "method": "getMessages",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Sms - Incoming",
    "typeScriptTag": "smsIncoming",
    "description": "Get incoming sms messages.",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "description": "How many records to return (must be between 1 and 250)"
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
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v4/sms/outgoing",
    "method": "create",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Sms - Outgoing",
    "typeScriptTag": "smsOutgoing",
    "description": "Send sms messages.",
    "parameters": [
      {
        "name": "messages",
        "schema": "array",
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
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v4/sms/outgoing/sendusingquery",
    "method": "sendUsingQueryGet",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Sms - Outgoing",
    "typeScriptTag": "smsOutgoing",
    "description": "Send sms messages using query parameters.",
    "parameters": [
      {
        "name": "text",
        "schema": "string",
        "description": "The text message.\nIf the max length is exceeded, the message text is truncated and sent.",
        "example": "This is a message text to be sent"
      },
      {
        "name": "from",
        "schema": "string",
        "description": "The sender. This can either be a 3-11 chars text sender or an up to 14 digit long sender number.\nIf the max length is exceeded, the string is truncated.",
        "example": "PetShop"
      },
      {
        "name": "flash",
        "schema": "boolean",
        "description": "If true, the message will be shown as a flash message (also known as a class0 message) on the target phone. If false, it will be received as a standard text message.\nDefault: false",
        "example": false
      },
      {
        "name": "encoding",
        "schema": "string",
        "description": "The encoding of the message. Can be either \"gsm7\", \"ucs2\" or \"auto\".\n\"gsm7\" is the default alfabet for text messages and when using gsm7, a single sms message can contain 160 characters. If the length exceeeds 160 characters, the message is actually split up into parts of 153 characters and charged according to this. Please note, that a few, specific characters fill up 2 bytes and count for 2 letters. Ref: https://en.wikipedia.org/wiki/GSM_03.38\n\"ucs2\"\" allows for more non-roman characters to be used along with smileys. When using this encoding, a single message can consist of 70 characters. If the message exceeds 70 characters, the final message is actually split into parts of 67 characters.\n\"auto\" can be used in case the sender wishes to support non-roman characters but wants to save the expenses on all the trafic that only contains gsm characters anyway.\nDefault: \"gsm7\"",
        "example": "gsm7"
      },
      {
        "name": "to",
        "schema": "string",
        "description": "The msisdn (country code and number) to send to. (Remember to include countrycode in all numbers, e.g. 4512345678).\nIf max length is exceeded, the entire api call will fail.",
        "example": "4512345678"
      },
      {
        "name": "countryHint",
        "schema": "string",
        "description": "For optimal phone number validation, we encourage you to provide us with a country code. This can be the numeric country code (like 44) or the two-letter suffix (like GB). If this field is empty it is important that you add the country code (e.g 44) in front of the phone number in “to”.",
        "example": "45"
      },
      {
        "name": "messageId",
        "schema": "string",
        "description": "An optional message id used to identify the message.\nIf no message id is provided, a new message id is generated and assigned to the message. This id must be unique across all messages created on the same account.\n(In case a previous message has been deleted according to GDPR deletion rules setup on the specific account, the messageId is allowed to be reused)\nIf max length is exceeded, the entire api call will fail.",
        "example": "PetShop"
      },
      {
        "name": "respectBlacklist",
        "schema": "boolean",
        "description": "If true, this message will be blocked from sending if the target number is on the account's blacklist. If false, the message will be sent no matter blacklist settings.\nDefault: true",
        "example": true
      },
      {
        "name": "validityPeriodInSeconds",
        "schema": "integer",
        "description": "The validity period in seconds. Minimum is 60 seconds and maximum is 172800 (48 hours).\nIf not specified, the messages is attempted to be delivered in 48 hours. A typical use of validityPeriod is for messages that makes no sense to delivery efter er certain time frame, in the case the phone is turned of, e.g. two factor codes.\nPlease note, that messages are still charged even though the operator is cancelling the delivery attempt due to an exceeded validity period.",
        "example": 90
      },
      {
        "name": "statusCallbackUrl",
        "schema": "string",
        "description": "In case you would like a callback from us when the message is delivered, you can specify it here and we will call it when we have new message statuses.\nThe callback payload will be an array of status objects.\nApi calls sending messages with the same apikey will be subject to being bulked together.",
        "example": "https://[your_domain]/your/desired/path"
      },
      {
        "name": "sendTimeUtcTime",
        "schema": "string",
        "description": ""
      },
      {
        "name": "sendTimeLocalServerTime",
        "schema": "string",
        "description": ""
      },
      {
        "name": "msisdnCooldownInMinutes",
        "schema": "integer",
        "description": "If set, the message will be cancelled if the same mobile number already have received a SMS within this specified time period.\nFx. used to prevent spamming a mobile number.\nMinimum 60 minutes (1 hour) and maximum is 43200 minutes (30 days).",
        "example": 1440
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
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v4/sms/outgoing/sendusingquery",
    "method": "sendUsingQueryPost",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Sms - Outgoing",
    "typeScriptTag": "smsOutgoing",
    "description": "Send sms messages using query parameters.",
    "parameters": [
      {
        "name": "text",
        "schema": "string",
        "description": "The text message.\nIf the max length is exceeded, the message text is truncated and sent.",
        "example": "This is a message text to be sent"
      },
      {
        "name": "from",
        "schema": "string",
        "description": "The sender. This can either be a 3-11 chars text sender or an up to 14 digit long sender number.\nIf the max length is exceeded, the string is truncated.",
        "example": "PetShop"
      },
      {
        "name": "flash",
        "schema": "boolean",
        "description": "If true, the message will be shown as a flash message (also known as a class0 message) on the target phone. If false, it will be received as a standard text message.\nDefault: false",
        "example": false
      },
      {
        "name": "encoding",
        "schema": "string",
        "description": "The encoding of the message. Can be either \"gsm7\", \"ucs2\" or \"auto\".\n\"gsm7\" is the default alfabet for text messages and when using gsm7, a single sms message can contain 160 characters. If the length exceeeds 160 characters, the message is actually split up into parts of 153 characters and charged according to this. Please note, that a few, specific characters fill up 2 bytes and count for 2 letters. Ref: https://en.wikipedia.org/wiki/GSM_03.38\n\"ucs2\"\" allows for more non-roman characters to be used along with smileys. When using this encoding, a single message can consist of 70 characters. If the message exceeds 70 characters, the final message is actually split into parts of 67 characters.\n\"auto\" can be used in case the sender wishes to support non-roman characters but wants to save the expenses on all the trafic that only contains gsm characters anyway.\nDefault: \"gsm7\"",
        "example": "gsm7"
      },
      {
        "name": "to",
        "schema": "string",
        "description": "The msisdn (country code and number) to send to. (Remember to include countrycode in all numbers, e.g. 4512345678).\nIf max length is exceeded, the entire api call will fail.",
        "example": "4512345678"
      },
      {
        "name": "countryHint",
        "schema": "string",
        "description": "For optimal phone number validation, we encourage you to provide us with a country code. This can be the numeric country code (like 44) or the two-letter suffix (like GB). If this field is empty it is important that you add the country code (e.g 44) in front of the phone number in “to”.",
        "example": "45"
      },
      {
        "name": "messageId",
        "schema": "string",
        "description": "An optional message id used to identify the message.\nIf no message id is provided, a new message id is generated and assigned to the message. This id must be unique across all messages created on the same account.\n(In case a previous message has been deleted according to GDPR deletion rules setup on the specific account, the messageId is allowed to be reused)\nIf max length is exceeded, the entire api call will fail.",
        "example": "PetShop"
      },
      {
        "name": "respectBlacklist",
        "schema": "boolean",
        "description": "If true, this message will be blocked from sending if the target number is on the account's blacklist. If false, the message will be sent no matter blacklist settings.\nDefault: true",
        "example": true
      },
      {
        "name": "validityPeriodInSeconds",
        "schema": "integer",
        "description": "The validity period in seconds. Minimum is 60 seconds and maximum is 172800 (48 hours).\nIf not specified, the messages is attempted to be delivered in 48 hours. A typical use of validityPeriod is for messages that makes no sense to delivery efter er certain time frame, in the case the phone is turned of, e.g. two factor codes.\nPlease note, that messages are still charged even though the operator is cancelling the delivery attempt due to an exceeded validity period.",
        "example": 90
      },
      {
        "name": "statusCallbackUrl",
        "schema": "string",
        "description": "In case you would like a callback from us when the message is delivered, you can specify it here and we will call it when we have new message statuses.\nThe callback payload will be an array of status objects.\nApi calls sending messages with the same apikey will be subject to being bulked together.",
        "example": "https://[your_domain]/your/desired/path"
      },
      {
        "name": "sendTimeUtcTime",
        "schema": "string",
        "description": ""
      },
      {
        "name": "sendTimeLocalServerTime",
        "schema": "string",
        "description": ""
      },
      {
        "name": "msisdnCooldownInMinutes",
        "schema": "integer",
        "description": "If set, the message will be cancelled if the same mobile number already have received a SMS within this specified time period.\nFx. used to prevent spamming a mobile number.\nMinimum 60 minutes (1 hour) and maximum is 43200 minutes (30 days).",
        "example": 1440
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
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v4/sms/outgoing/sendusingtemplate",
    "method": "sendUsingTemplate",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Sms - Outgoing",
    "typeScriptTag": "smsOutgoing",
    "description": "Send sms messages using a template.",
    "parameters": [
      {
        "name": "templateId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ecdcb257-c1e9-4b44-8a4e-f05822372d82"
      },
      {
        "name": "messages",
        "schema": "array",
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
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v4/sms/outgoing/cancel",
    "method": "cancel",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Sms - Outgoing",
    "typeScriptTag": "smsOutgoing",
    "description": "Cancel sms messages",
    "parameters": [
      {
        "name": "messageIds",
        "schema": "array",
        "required": true,
        "description": "",
        "example": [
          "id1",
          "id2"
        ]
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
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v4/sms/outgoing/reports",
    "method": "getReports",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Sms - Outgoing",
    "typeScriptTag": "smsOutgoing",
    "description": "Get sms status reports.",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "description": "How many records to return (must be between 1 and 250)"
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
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v4/sms/templates",
    "method": "getAllTemplates",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Templates",
    "typeScriptTag": "templates",
    "description": "Get all templates",
    "parameters": [
      {
        "name": "pageLimit",
        "schema": "integer",
        "description": "How many records to return (must be between 1 and 250)"
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
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v4/sms/templates/{id}",
    "method": "getTemplate",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Templates",
    "typeScriptTag": "templates",
    "description": "Get template by id",
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
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v4/tools/parsephonenumbers",
    "method": "parsePhoneNumbers",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Tools",
    "typeScriptTag": "tools",
    "description": "Parse phone numbers",
    "parameters": [
      {
        "name": "numbersToParse",
        "schema": "array",
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
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
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
      apiTitle="inMobile REST API"
      apiBaseUrl="https://api.inmobile.com"
      apiVersion="version 4"
      endpoints={24}
      sdkMethods={36}
      schemas={66}
      parameters={71}
      difficulty="Easy"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/inmobile/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/inmobile/openapi.yaml"
      developerDocumentation="www.inmobile.com/docs/rest-api"
    />
  );
}
  