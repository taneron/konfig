import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function GladlyTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="gladly-typescript-sdk"
      metaDescription={`Gladly is the only customer service software built around people, not tickets.

AI is revolutionizing how we work and communicate. Consumer expectations of how they're known and treated by brands has never been greater. At the same time brands are under pressure to do more with less and must balance the tension between saving money with AI and automation, while still delivering world-class experiences for consumers. The right experiences create connection, loyalty and customer lifetime value.

Customer service software built on tickets fails to navigate this tension. And brands who rely on ticketing software are failing in this new economy. Bloated tech stacks. Duplicate tickets. Consumer repetition and frustration. Fumbling and flustered agents. Two bad service experiences will lose a customer for life.

Gladly applies AI differently, to help commerce brands deliver radically personal, concierge-level customer service at scale. With Gladly, consumers help themselves when they want and customer service agents are made into superheroes, gaining efficiency and productivity. Every conversation in Gladly starts with a real-time understanding of the customer -- who they are, their preferences, their conversation and purchase history with the brand, every interaction in one place. And with every channel built-in natively - VOICE, email, SMS, chat, social messaging, self-service – brands have one, lifelong conversation stream with their customers.

Gladly's customers are the world's most loved brands -- Allbirds, Bombas, Crate & Barrel, Deckers, Eddie Bauer, FTD, Nordstrom, REI, Ulta Beauty, and Warby Parker. These brands and hundreds more leverage Gladly to build lifelong loyal customers through deep connections.

Make customer service your business with Gladly.`}
      company="Gladly"
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/gladly/logo.png"
      companyKebabCase="gladly"
      clientNameCamelCase="gladly"
      homepage="gladly.com"
      lastUpdated={new Date("2024-03-27T21:38:40.500Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/gladly/favicon.png"
      // Missing contactUrl
      // Missing contactEmail
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/gladly/imagePreview.png"
      GettingStarted={GettingStarted}
      FirstRequest={FirstRequest}
      categories={["customer_communication","customer_support","communication","support"]}
      methods={[
  {
    "url": "/api/v1/communications/sms",
    "method": "sendSms",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Communications",
    "typeScriptTag": "communications",
    "description": "Send SMS",
    "parameters": [
      {
        "name": "customer",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "from",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "+14152223316"
      },
      {
        "name": "body",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "hello, this is an SMS message!"
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
      }
    ]
  },
  {
    "url": "/api/v1/communications/custom-channels/{customChannelId}/messages",
    "method": "receiveCustomChannelMessages",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Communications",
    "typeScriptTag": "communications",
    "description": "Receive Custom Channel messages",
    "parameters": [
      {
        "name": "customChannelId",
        "schema": "string",
        "required": true,
        "description": "The ID of the Custom Channel. To find the Custom Channel ID, you must open the overflow menu of a \nCustom Channel Entry Point and select the \"View Integration Data\" option.\n",
        "example": "CUSTOMCHANNELID"
      },
      {
        "name": "sender",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "to",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TO"
      },
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TYPE"
      },
      {
        "name": "groupId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "groupName",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "content",
        "schema": "undefined",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Message received\n"
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/communications/custom-channels/{customChannelId}/messages/{messageId}/status",
    "method": "updateMessageStatus",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Communications",
    "typeScriptTag": "communications",
    "description": "Update message status",
    "parameters": [
      {
        "name": "customChannelId",
        "schema": "string",
        "required": true,
        "description": "The ID of the Custom Channel. To find the Custom Channel ID, you must open the overflow menu of a \nCustom Channel Entry Point and select the \"View Integration Data\" option.\n",
        "example": "CUSTOMCHANNELID"
      },
      {
        "name": "messageId",
        "schema": "string",
        "required": true,
        "description": "The id of message updated\n",
        "example": "MESSAGEID"
      },
      {
        "name": "value",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "VALUE"
      },
      {
        "name": "details",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Status updated\n"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/conversations/{conversationId}",
    "method": "getMetadata",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Conversations",
    "typeScriptTag": "conversations",
    "description": "Get conversation",
    "parameters": [
      {
        "name": "conversationId",
        "schema": "string",
        "required": true,
        "description": "Id of the conversation to get",
        "example": "9BcE2O0DQ2ynGHRmk9FeoA"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "A conversation with the given id does not exist"
      }
    ]
  },
  {
    "url": "/api/v1/conversations/{conversationId}",
    "method": "updateAssigneeStatus",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Conversations",
    "typeScriptTag": "conversations",
    "description": "Update conversation",
    "parameters": [
      {
        "name": "conversationId",
        "schema": "string",
        "required": true,
        "description": "Id of the conversation",
        "example": "9BcE2O0DQ2ynGHRmk9FeoA"
      },
      {
        "name": "assignee",
        "schema": "object",
        "description": ""
      },
      {
        "name": "status",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "updated conversation"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/conversation-items",
    "method": "createCustomerItem",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Conversations",
    "typeScriptTag": "conversations",
    "description": "Create item",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "pOVVdzweSumI4bFxjlT8LA"
      },
      {
        "name": "customer",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "content",
        "schema": "undefined",
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
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/conversation-items/{itemId}",
    "method": "deleteItem",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Conversations",
    "typeScriptTag": "conversations",
    "description": "Delete item",
    "parameters": [
      {
        "name": "itemId",
        "schema": "string",
        "required": true,
        "description": "Id of the item to be deleted.\n",
        "example": "ITEMID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "The item was deleted"
      },
      {
        "statusCode": "404",
        "description": "An item with the given id could not be found"
      }
    ]
  },
  {
    "url": "/api/v1/conversation-items/{itemId}",
    "method": "getItem",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Conversations",
    "typeScriptTag": "conversations",
    "description": "Get item",
    "parameters": [
      {
        "name": "itemId",
        "schema": "string",
        "required": true,
        "description": "id of the conversation item\n",
        "example": "pOVVdzweSumI4bFxjlT8LA"
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
        "statusCode": "404",
        "description": "An item with the given id could not be found"
      }
    ]
  },
  {
    "url": "/api/v1/conversation-items/{itemId}/media/recording",
    "method": "getRecording",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Conversations",
    "typeScriptTag": "conversations",
    "description": "Get media",
    "parameters": [
      {
        "name": "itemId",
        "schema": "string",
        "required": true,
        "description": "id of the conversation item\n",
        "example": "pOVVdzweSumI4bFxjlT8LA"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Single channel 32-kbps MP3 audio file"
      },
      {
        "statusCode": "404",
        "description": "An item with the given id could not be found"
      }
    ]
  },
  {
    "url": "/api/v1/customers/{customerId}/conversation-items",
    "method": "createCustomerItem",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Conversations",
    "typeScriptTag": "conversations",
    "description": "Create item for customer",
    "parameters": [
      {
        "name": "customerId",
        "schema": "string",
        "required": true,
        "description": "Id of the customer associated with this item.\n\nYou can look up the id using the [Find customers](https://developer.gladly.com/rest/ API.\n",
        "example": "CUSTOMERID"
      },
      {
        "name": "id",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "pOVVdzweSumI4bFxjlT8LA"
      },
      {
        "name": "content",
        "schema": "undefined",
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
        "statusCode": "301",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Customer with customerId does not exist"
      },
      {
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/customers/{customerId}/conversation-items/{itemId}",
    "method": "deleteCustomerItem",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Conversations",
    "typeScriptTag": "conversations",
    "description": "Delete item for customer",
    "parameters": [
      {
        "name": "customerId",
        "schema": "string",
        "required": true,
        "description": "Id of the customer associated with this item.\n\nYou can look up the id using the [Find customers](https://developer.gladly.com/rest/ API.\n",
        "example": "CUSTOMERID"
      },
      {
        "name": "itemId",
        "schema": "string",
        "required": true,
        "description": "Id of the item to be deleted.\n",
        "example": "ITEMID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "The item was deleted"
      },
      {
        "statusCode": "404",
        "description": "An item with the given id, for the given customer id, could not be found"
      }
    ]
  },
  {
    "url": "/api/v1/conversations/{conversationId}/items",
    "method": "listItemsInConversation",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Conversations",
    "typeScriptTag": "conversations",
    "description": "List items in conversation",
    "parameters": [
      {
        "name": "conversationId",
        "schema": "string",
        "required": true,
        "description": "Id of the conversation to get the timeline for",
        "example": "9BcE2O0DQ2ynGHRmk9FeoA"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "A conversation with the given id does not exist"
      }
    ]
  },
  {
    "url": "/api/v1/conversations/{conversationId}/topics",
    "method": "addTopicToList",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Conversations",
    "typeScriptTag": "conversations",
    "description": "Add topic",
    "parameters": [
      {
        "name": "conversationId",
        "schema": "string",
        "required": true,
        "description": "Id of the conversation.\n",
        "example": "CONVERSATIONID"
      },
      {
        "name": "topicIds",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "pOVVdzweSumI4bFxjlT8LA"
        ]
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "The topic was added successfully"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "A conversation with the given Id could not be found"
      }
    ]
  },
  {
    "url": "/api/v1/conversations/{conversationId}/topics/{topicId}",
    "method": "deleteTopic",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Conversations",
    "typeScriptTag": "conversations",
    "description": "Delete topic",
    "parameters": [
      {
        "name": "conversationId",
        "schema": "string",
        "required": true,
        "description": "Id of the conversation.\n",
        "example": "CONVERSATIONID"
      },
      {
        "name": "topicId",
        "schema": "string",
        "required": true,
        "description": "Id of topic to be deleted from conversation.\n",
        "example": "TOPICID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "The topic was deleted from the conversation successfully"
      },
      {
        "statusCode": "404",
        "description": "A conversation with the given id could not be found"
      }
    ]
  },
  {
    "url": "/api/v1/customer-history/{customerId}/conversations/{conversationId}/custom-attributes",
    "method": "addFreeformTopics",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Conversations",
    "typeScriptTag": "conversations",
    "description": "Add or Remove Freeform topic",
    "parameters": [
      {
        "name": "customerId",
        "schema": "string",
        "required": true,
        "description": "Id of the customer.\n",
        "example": "CUSTOMERID"
      },
      {
        "name": "conversationId",
        "schema": "string",
        "required": true,
        "description": "Id of the conversation.\n",
        "example": "CONVERSATIONID"
      },
      {
        "name": "body",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "The freeform topic was added successfully"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "A conversation with the given Id could not be found"
      }
    ]
  },
  {
    "url": "/api/v1/conversations/{conversationId}/notes",
    "method": "addNoteToConversation",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Conversations",
    "typeScriptTag": "conversations",
    "description": "Add note",
    "parameters": [
      {
        "name": "conversationId",
        "schema": "string",
        "required": true,
        "description": "Id of the conversation.\n",
        "example": "CONVERSATIONID"
      },
      {
        "name": "body",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "<h1>Customer has requested more information about our loyalty program.</h1>"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "The note was added successfully"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "A conversation with the given Id could not be found"
      }
    ]
  },
  {
    "url": "/api/v1/conversations/{conversationId}/notes/{noteId}",
    "method": "getNote",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Conversations",
    "typeScriptTag": "conversations",
    "description": "Get note",
    "parameters": [
      {
        "name": "conversationId",
        "schema": "string",
        "required": true,
        "description": "id of the conversation\n",
        "example": "pOVVdzweSumI4bFxjlT8LA"
      },
      {
        "name": "noteId",
        "schema": "string",
        "required": true,
        "description": "id of the note\n",
        "example": "aOVVdzweSumI4bFxjlT8LA"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "An item with the given id could not be found"
      }
    ]
  },
  {
    "url": "/api/v1/conversation-items/{itemId}/reply",
    "method": "sendResponse",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Conversations",
    "typeScriptTag": "conversations",
    "description": "Reply to message",
    "parameters": [
      {
        "name": "itemId",
        "schema": "string",
        "required": true,
        "description": "id of the conversation item\n",
        "example": "pOVVdzweSumI4bFxjlT8LA"
      },
      {
        "name": "content",
        "schema": "undefined",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "The reply was created successfully. Note that creation doesn't guarantee delivery"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "A conversation item with the given id could not be found"
      }
    ]
  },
  {
    "url": "/api/v1/conversation-items/{itemId}/redact",
    "method": "redactConversationItem",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Conversations",
    "typeScriptTag": "conversations",
    "description": "Redact conversation item",
    "parameters": [
      {
        "name": "itemId",
        "schema": "string",
        "required": true,
        "description": "id of the conversation item\n",
        "example": "pOVVdzweSumI4bFxjlT8LA"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "The redaction was successful."
      },
      {
        "statusCode": "404",
        "description": "A conversation item with the given id could not be found"
      }
    ]
  },
  {
    "url": "/api/v1/message-automation/sessions/{sessionId}",
    "method": "getSession",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Message Automation",
    "typeScriptTag": "messageAutomation",
    "description": "Get Automation Session",
    "parameters": [
      {
        "name": "sessionId",
        "schema": "string",
        "required": true,
        "description": "The id of the automation session.",
        "example": "pOVVdzweSumI4bFxjlT8LA"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/message-automation/sessions/{sessionId}/messages",
    "method": "getSessionMessages",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Message Automation",
    "typeScriptTag": "messageAutomation",
    "description": "Get Automation Messages",
    "parameters": [
      {
        "name": "sessionId",
        "schema": "string",
        "required": true,
        "description": "Id of the automation session.\n",
        "example": "pOVVdzweSumI4bFxjlT8LA"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/message-automation/sessions/{sessionId}/messages",
    "method": "outboundMessage",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Message Automation",
    "typeScriptTag": "messageAutomation",
    "description": "Send Outbound Automation Message",
    "parameters": [
      {
        "name": "sessionId",
        "schema": "string",
        "required": true,
        "description": "Id of the automation session.",
        "example": "pOVVdzweSumI4bFxjlT8LA"
      },
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TYPE"
      },
      {
        "name": "content",
        "schema": "undefined",
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/message-automation/sessions/{sessionId}/messages/{messageId}",
    "method": "getMessage",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Message Automation",
    "typeScriptTag": "messageAutomation",
    "description": "Get Automation Message",
    "parameters": [
      {
        "name": "sessionId",
        "schema": "string",
        "required": true,
        "description": "Id of the automation session.",
        "example": "pOVVdzweSumI4bFxjlT8LA"
      },
      {
        "name": "messageId",
        "schema": "string",
        "required": true,
        "description": "Id of the message.\n",
        "example": "62723418e0374c00f31c4ca7"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/message-automation/sessions/{sessionId}/handoff",
    "method": "handoffSessionToAgent",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Message Automation",
    "typeScriptTag": "messageAutomation",
    "description": "Agent Handoff",
    "parameters": [
      {
        "name": "sessionId",
        "schema": "string",
        "required": true,
        "description": "Id of the automation session.",
        "example": "pOVVdzweSumI4bFxjlT8LA"
      },
      {
        "name": "description",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DESCRIPTION"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "The handoff is successful."
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/message-automation/sessions/{sessionId}/close",
    "method": "closeSession",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Message Automation",
    "typeScriptTag": "messageAutomation",
    "description": "Close Automation Session",
    "parameters": [
      {
        "name": "sessionId",
        "schema": "string",
        "required": true,
        "description": "Id of the automation session.",
        "example": "pOVVdzweSumI4bFxjlT8LA"
      },
      {
        "name": "description",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DESCRIPTION"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Automation session was successfully closed."
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/tasks",
    "method": "customerTimeline",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Tasks",
    "typeScriptTag": "tasks",
    "description": "Create task",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "pOVVdzweSumI4bFxjlT8LA"
      },
      {
        "name": "assignee",
        "schema": "undefined",
        "required": true,
        "description": ""
      },
      {
        "name": "body",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Call customer back with information about booking"
      },
      {
        "name": "dueAt",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "2020-03-15T06:13:00.125Z"
      },
      {
        "name": "customer",
        "schema": "object",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "task created"
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/customers/{customerId}/tasks",
    "method": "getCustomerTasks",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Tasks",
    "typeScriptTag": "tasks",
    "description": "List tasks",
    "parameters": [
      {
        "name": "customerId",
        "schema": "string",
        "required": true,
        "description": "Id of the customer whose tasks you'd like to view.\n",
        "example": "CUSTOMERID"
      },
      {
        "name": "status",
        "schema": "string",
        "required": false,
        "description": "Fetch tasks with the provided status.\n"
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/customers/{customerId}/tasks",
    "method": "createCustomerTask",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Tasks",
    "typeScriptTag": "tasks",
    "description": "Create task for customer",
    "parameters": [
      {
        "name": "customerId",
        "schema": "string",
        "required": true,
        "description": "Id of the customer associated with the task to create.\n\nYou can look up the id using the [Find customers](https://developer.gladly.com/rest/ API.\n",
        "example": "CUSTOMERID"
      },
      {
        "name": "id",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "pOVVdzweSumI4bFxjlT8LA"
      },
      {
        "name": "assignee",
        "schema": "undefined",
        "required": true,
        "description": ""
      },
      {
        "name": "body",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Call customer back with information about booking"
      },
      {
        "name": "dueAt",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "2020-03-15T06:13:00.125Z"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "task created"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/tasks/{taskId}",
    "method": "getTask",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Tasks",
    "typeScriptTag": "tasks",
    "description": "Get task",
    "parameters": [
      {
        "name": "taskId",
        "schema": "string",
        "required": true,
        "description": "Id of the task requested\n",
        "example": "TASKID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/tasks/{taskId}",
    "method": "updateTask",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Tasks",
    "typeScriptTag": "tasks",
    "description": "Update task",
    "parameters": [
      {
        "name": "taskId",
        "schema": "string",
        "required": true,
        "description": "Id of the task that is to be updated\n",
        "example": "TASKID"
      },
      {
        "name": "status",
        "schema": "string",
        "description": ""
      },
      {
        "name": "body",
        "schema": "string",
        "description": "",
        "example": "Call customer back with information about booking"
      },
      {
        "name": "dueAt",
        "schema": "string",
        "description": "",
        "example": "2021-04-11T14:09:23.000Z"
      },
      {
        "name": "assignee",
        "schema": "undefined",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "The task was created task"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/tasks/{taskId}/comments",
    "method": "getTaskComments",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Tasks",
    "typeScriptTag": "tasks",
    "description": "Get task comments",
    "parameters": [
      {
        "name": "taskId",
        "schema": "string",
        "required": true,
        "description": "Id of the task comments are requested for.\n",
        "example": "TASKID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/tasks/{taskId}/comments",
    "method": "addTaskComment",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Tasks",
    "typeScriptTag": "tasks",
    "description": "Add task comment\n",
    "parameters": [
      {
        "name": "taskId",
        "schema": "string",
        "required": true,
        "description": "Id of the task that will be commented on.\n",
        "example": "TASKID"
      },
      {
        "name": "id",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "pOVVdzweSumI4bFxjlT8LA"
      },
      {
        "name": "agentId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "dzweSumI4bFxjlT8LApOVV"
      },
      {
        "name": "comment",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Return call to customer"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "comment added"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/tasks/{taskId}/comments/{commentId}",
    "method": "getComment",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Tasks",
    "typeScriptTag": "tasks",
    "description": "Get task comment",
    "parameters": [
      {
        "name": "taskId",
        "schema": "string",
        "required": true,
        "description": "Task id\n",
        "example": "TASKID"
      },
      {
        "name": "commentId",
        "schema": "string",
        "required": true,
        "description": "Comment id\n",
        "example": "COMMENTID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/custom-attributes/:customAttributeId",
    "method": "getAttribute",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Freeform Topics",
    "typeScriptTag": "freeformTopics",
    "description": "Get custom attribute",
    "parameters": [
      {
        "name": "customAttributeId",
        "schema": "string",
        "required": true,
        "description": "id of the custom attribute\n",
        "example": "1grfSzATQLa334VDLCWc4A"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/customer-profiles",
    "method": "findProfiles",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Customers",
    "typeScriptTag": "customers",
    "description": "Find customers",
    "parameters": [
      {
        "name": "email",
        "schema": "string",
        "description": "customer email address to search on.",
        "example": "customer@email.net"
      },
      {
        "name": "externalCustomerId",
        "schema": "string",
        "description": "Customer ID in your system of record for Customer Profiles linked to a Lookup Adaptor installed prior to 05/12/21. If Customer Profile is linked to a Lookup Adaptor installed on or after 05/12/21, this field is not searchable.",
        "example": "a21c1636-c622-48b7-bf6a-d9032645aa55"
      },
      {
        "name": "phoneNumber",
        "schema": "string",
        "description": "Phone number in E.164 format. The value should be URL escaped where `+` becomes `%2B`.\n",
        "example": "+16505551987"
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
      }
    ]
  },
  {
    "url": "/api/v1/customer-profiles",
    "method": "createProfile",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Customers",
    "typeScriptTag": "customers",
    "description": "Create customer",
    "parameters": [],
    "responses": [
      {
        "statusCode": "201",
        "description": "customer created"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/customer-profiles/{customerId}",
    "method": "getProfileById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Customers",
    "typeScriptTag": "customers",
    "description": "Get customer",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "301",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/customer-profiles/{customerId}",
    "method": "updateProfileById",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Customers",
    "typeScriptTag": "customers",
    "description": "Update customer",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "description": "",
        "example": "Martha J Williams"
      },
      {
        "name": "image",
        "schema": "string",
        "description": "",
        "example": "https://www.gladly.com/your-image.jpg"
      },
      {
        "name": "address",
        "schema": "string",
        "description": "",
        "example": "563 Rigoberto Station Apt. 197"
      },
      {
        "name": "emails",
        "schema": "array",
        "description": ""
      },
      {
        "name": "phones",
        "schema": "array",
        "description": ""
      },
      {
        "name": "externalCustomerId",
        "schema": "string",
        "description": "",
        "example": "a21c1636-c622-48b7-bf6a-d9032645aa55"
      },
      {
        "name": "customAttributes",
        "schema": "object",
        "description": "",
        "example": {
          "membershipNumber": "RQ564555333",
          "membershipTier": "gold"
        }
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "updated customer"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/user-identity-jwt",
    "method": "generateJwt",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "User Identity",
    "typeScriptTag": "userIdentity",
    "description": "Create a User Identity JWT",
    "parameters": [
      {
        "name": "identityType",
        "schema": "string",
        "description": "",
        "example": "EMAIL"
      },
      {
        "name": "identity",
        "schema": "string",
        "description": "",
        "example": "test@example.com"
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
      }
    ]
  },
  {
    "url": "/api/v1/orgs/{orgId}/answers-search?q=search+terms",
    "method": "searchResults",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Answers",
    "typeScriptTag": "answers",
    "description": "Search public answers",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "id of your organization\n\nYou can look up the ID using the [Get organization](https://developer.gladly.com/rest/ API.\n",
        "example": "ihKsWxiZCDVtXg1iwVmT9Q"
      },
      {
        "name": "q",
        "schema": "string",
        "description": "search term",
        "example": "reset%20password"
      },
      {
        "name": "lng",
        "schema": "string",
        "description": "language code",
        "example": "en-us"
      },
      {
        "name": "audienceId",
        "schema": "string",
        "description": "Audience ID. The Audience ID can be retrieved by going to Settings > Audiences in Gladly, then clicking on the Edit button next to the Audience in question. The ID will be in the page URL.",
        "example": "en-us"
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
    "url": "/api/v1/orgs/{orgId}/answers?lng={lng}&audienceId={audienceId}",
    "method": "listPublic",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Answers",
    "typeScriptTag": "answers",
    "description": "List public answers",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "id of your organization\n\nYou can look up the ID using the [Get organization](https://developer.gladly.com/rest/ API.\n",
        "example": "ihKsWxiZCDVtXg1iwVmT9Q"
      },
      {
        "name": "lng",
        "schema": "string",
        "description": "Language of the answers returned\n\nDefaults to `en-us`\n",
        "example": "es-419"
      },
      {
        "name": "audienceId",
        "schema": "string",
        "description": "Audience ID for answers returned - optional. The Audience ID can be retrieved by going to Settings > Audiences in Gladly, then clicking on the Edit button next to the Audience in question. The ID will be in the page URL.\n",
        "example": "ihKsWxiZCDVtXg1iwVmT9Q"
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
    "url": "/api/v1/orgs/{orgId}/help-center/{helpCenterId}/answer-titles?lng={lng}&audienceId={audienceId}",
    "method": "listAnswerTitles",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Answers",
    "typeScriptTag": "answers",
    "description": "List Help Center Answer Titles",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "id of your organization\n\nYou can look up the ID using the [Get organization](https://developer.gladly.com/rest/ API.\n",
        "example": "ihKsWxiZCDVtXg1iwVmT9Q"
      },
      {
        "name": "helpCenterId",
        "schema": "string",
        "required": true,
        "description": "Help Center ID\n\nYou can look up the ID by going to Settings > Help Center in Gladly, then clicking on the 3 dots next to the Help Center and selecting Configure. Help Center ID will be in the URL\n",
        "example": "ihKsWxiZCDVtXg1iwVmT9Q"
      },
      {
        "name": "lng",
        "schema": "string",
        "description": "Language of the answers returned\n\nDefaults to `en-us`\n",
        "example": "es-419"
      },
      {
        "name": "audienceId",
        "schema": "string",
        "description": "Audience ID for answers returned - optional. The Audience ID can be retrieved by going to Settings > Audiences in Gladly, then clicking on the Edit button next to the Audience in question. The ID will be in the page URL.\n",
        "example": "ihKsWxiZCDVtXg1iwVmT9Q"
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
    "url": "/api/v1/orgs/{orgId}/answers/{answerId}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Answers",
    "typeScriptTag": "answers",
    "description": "Get public answer",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "id of your organization\n\nYou can look up the ID using the [Get organization](https://developer.gladly.com/rest/ API.\n",
        "example": "ihKsWxiZCDVtXg1iwVmT9Q"
      },
      {
        "name": "answerId",
        "schema": "string",
        "required": true,
        "description": "id of the answer",
        "example": "1grfSzATQLa334VDLCWc4A"
      },
      {
        "name": "lng",
        "schema": "string",
        "description": "language code",
        "example": "en-us"
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
    "url": "/api/v1/agents",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Agents",
    "typeScriptTag": "agents",
    "description": "List Agents",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/agents/{agentId}",
    "method": "getAgentProfile",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Agents",
    "typeScriptTag": "agents",
    "description": "Get Agent",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/agents/{agentId}/call-recorder",
    "method": "getCallRecorderStatus",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Agents",
    "typeScriptTag": "agents",
    "description": "Get Agent CallRecorder",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/agents/{agentId}/call-recorder",
    "method": "updateCallRecorder",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Agents",
    "typeScriptTag": "agents",
    "description": "Update Agent CallRecorder",
    "parameters": [
      {
        "name": "agentId",
        "schema": "string",
        "description": "",
        "example": "WmeA3Y51Q5ayCAaZ1AotIA"
      },
      {
        "name": "customerId",
        "schema": "string",
        "description": "",
        "example": "ZcyobierQhucTS5GV1R2Fw"
      },
      {
        "name": "conversationItemId",
        "schema": "string",
        "description": "",
        "example": "g6UatsvAQC69AcDpOKF-yQ"
      },
      {
        "name": "recording",
        "schema": "boolean",
        "description": "",
        "example": true
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Call recording updated. If an agent is not on a call the update will do nothing."
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/organization",
    "method": "getMetadata",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Organization",
    "typeScriptTag": "organization",
    "description": "Get organization",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/inboxes",
    "method": "listMetadata",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Inboxes",
    "typeScriptTag": "inboxes",
    "description": "List inboxes",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/inboxes/{inboxId}",
    "method": "getMetadata",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Inboxes",
    "typeScriptTag": "inboxes",
    "description": "Get inbox",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/teams",
    "method": "listTeams",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Teams",
    "typeScriptTag": "teams",
    "description": "List teams",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/teams/{teamId}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Teams",
    "typeScriptTag": "teams",
    "description": "Get team",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/topics",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Topics",
    "typeScriptTag": "topics",
    "description": "List topics",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/topics/{topicId}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Topics",
    "typeScriptTag": "topics",
    "description": "Get topic",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/export/schedules",
    "method": "listSchedules",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Export",
    "typeScriptTag": "export",
    "description": "List schedules",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/export/jobs",
    "method": "jobsList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Export",
    "typeScriptTag": "export",
    "description": "List jobs",
    "parameters": [
      {
        "name": "status",
        "schema": "string",
        "description": "export job status to search on."
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
    "url": "/api/v1/export/jobs/{jobId}",
    "method": "deleteJob",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Export",
    "typeScriptTag": "export",
    "description": "Delete job",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "the job was deleted"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/export/jobs/{jobId}",
    "method": "jobById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Export",
    "typeScriptTag": "export",
    "description": "Get job",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "Export job"
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/export/jobs/{jobId}/files/{filename}",
    "method": "downloadFile",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Export",
    "typeScriptTag": "export",
    "description": "Get file",
    "parameters": [
      {
        "name": "jobId",
        "schema": "string",
        "required": true,
        "description": "id of the job",
        "example": "OOrlNMXeS72gs_WEX2TtMg"
      },
      {
        "name": "filename",
        "schema": "string",
        "required": true,
        "description": "name of the file",
        "example": "agents.jsonl"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/reports",
    "method": "generateReportCsv",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Reports",
    "typeScriptTag": "reports",
    "description": "Generate a report",
    "parameters": [
      {
        "name": "metricSet",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ContactSummaryReport"
      },
      {
        "name": "timezone",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "America/Denver"
      },
      {
        "name": "startAt",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "2019-05-01"
      },
      {
        "name": "endAt",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "2019-05-16"
      },
      {
        "name": "aggregationLevel",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "daily",
        "default": "daily"
      },
      {
        "name": "filters",
        "schema": "object",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "CSV report"
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/webhooks",
    "method": "list",
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
    "url": "/api/v1/webhooks",
    "method": "createWebhook",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Webhooks",
    "typeScriptTag": "webhooks",
    "description": "Create webhook",
    "parameters": [],
    "responses": [
      {
        "statusCode": "201",
        "description": "Created webhook"
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/webhooks/{webhookId}",
    "method": "deleteById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Webhooks",
    "typeScriptTag": "webhooks",
    "description": "Delete webhook",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "Webhook deleted"
      },
      {
        "statusCode": "400",
        "description": "Webhook must be disabled to be deleted"
      },
      {
        "statusCode": "404",
        "description": "Webhook with id does not exist"
      }
    ]
  },
  {
    "url": "/api/v1/webhooks/{webhookId}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Webhooks",
    "typeScriptTag": "webhooks",
    "description": "Get webhook",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Webhook with id does not exist"
      }
    ]
  },
  {
    "url": "/api/v1/webhooks/{webhookId}",
    "method": "updateById",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Webhooks",
    "typeScriptTag": "webhooks",
    "description": "Update webhook",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "Updated webhook"
      },
      {
        "statusCode": "400",
        "description": "Invalid field(https://developer.gladly.com/rest/ in request body"
      },
      {
        "statusCode": "404",
        "description": "Webhook with id does not exist"
      }
    ]
  },
  {
    "url": "/gladly/webhook",
    "method": "notifyEndpoint",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Payloads",
    "typeScriptTag": "payloads",
    "description": "Gladly will perform a POST request to your endpoint when the event occurs.\n\nYour service is expected to respond within 15 seconds.\n\nIf your service responds to a webhook notification with a response code outside the 2XX range or times out after 15 seconds, Gladly considers that delivery as failed and will resend the request up to 4 times over an hour. After the fourth attempt, we will deactivate the webhook and will notify all API Users in your organization's environment via email.\n",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      }
    ]
  },
  {
    "url": "/api/v1/reports/work-session-events",
    "method": "generateWorkSessionReport",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Reports",
    "typeScriptTag": "reports",
    "description": "Generate a work session report",
    "parameters": [
      {
        "name": "startAtTime",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "2020-04-13T19:27Z"
      },
      {
        "name": "endAtTime",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "2020-04-14T19:27-09:00"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Work Session Report CSV"
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/events",
    "method": "listStreamOfEvents",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Events",
    "typeScriptTag": "events",
    "description": "List events",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  }
]
    }
      language="TypeScript"
      apiTitle="Gladly API"
      apiBaseUrl="https://organization.gladly.com"
      apiVersion="1.0"
      endpoints={55}
      sdkMethods={78}
      schemas={69}
      parameters={122}
      difficulty="Medium"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/gladly/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/gladly/openapi.yaml"
      developerDocumentation="developer.gladly.com/rest/"
    />
  );
}
  