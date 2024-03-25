import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import Description from "./_description.mdx";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function RetellAiTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="retell-ai-typescript-sdk"
      metaDescription={`API for voice AI. Effortlessly integrate human-like Voice AI into your product. | We are building an API that enables your product to provide an intuitive and engaging way for user interaction - through voice.`}
      company="Retell AI"
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/retell-ai/logo.png"
      companyKebabCase="retell-ai"
      clientNameCamelCase="retellAi"
      homepage="retellai.com"
      lastUpdated={new Date("2024-03-25T20:37:50.800Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/retell-ai/favicon.png"
      contactUrl="https://www.retellai.com/"
      contactEmail="founders@retellai.com"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/retell-ai/imagePreview.png"
      GettingStarted={GettingStarted}
      Description={Description}
      FirstRequest={FirstRequest}
      categories={["ai","voice_generation","llm","text_to_audio"]}
      methods={[
  {
    "url": "/register-call",
    "method": "establishConnection",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Call",
    "typeScriptTag": "call",
    "description": "Register Call To Get CallId To Establish Connection",
    "parameters": [
      {
        "name": "agent_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "oBeDLoLOeuAbiuaMFXRtDOLriTJ5tSxD"
      },
      {
        "name": "audio_websocket_protocol",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "twilio"
      },
      {
        "name": "audio_encoding",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "s16le"
      },
      {
        "name": "sample_rate",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 24000
      },
      {
        "name": "end_call_after_silence_ms",
        "schema": "integer",
        "required": false,
        "description": "",
        "example": 600000
      },
      {
        "name": "from_number",
        "schema": "string",
        "required": false,
        "description": "",
        "example": 12137771234
      },
      {
        "name": "to_number",
        "schema": "string",
        "required": false,
        "description": "",
        "example": 12137771235
      },
      {
        "name": "metadata",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "retell_llm_dynamic_variables",
        "schema": "object",
        "required": false,
        "description": "",
        "example": {
          "customer_name": "John Doe"
        }
      }
    ],
    "responses": [
      {
        "statusCode": "201",
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
        "statusCode": "402",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/get-call/{call_id}",
    "method": "getDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Call",
    "typeScriptTag": "call",
    "description": "Retrieve details of a specific call",
    "parameters": [
      {
        "name": "callId",
        "schema": "string",
        "required": true,
        "description": "The call id to retrieve call history for.",
        "example": "119c3f8e47135a29e65947eeb34cf12d"
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
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/list-calls",
    "method": "getDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Call",
    "typeScriptTag": "call",
    "description": "Retrieve call details",
    "parameters": [
      {
        "name": "filterCriteria",
        "schema": "object",
        "description": ""
      },
      {
        "name": "sortOrder",
        "schema": "string",
        "required": false,
        "description": "The calls will be sorted by `start_timestamp`, whether to return the calls in ascending or descending order.",
        "default": "descending"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Limit the number of calls returned.",
        "default": 1000
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
    "url": "/create-agent",
    "method": "createNewAgent",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Agent",
    "typeScriptTag": "agent",
    "description": "Create a new agent",
    "parameters": [],
    "responses": [
      {
        "statusCode": "201",
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
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/get-agent/{agent_id}",
    "method": "getDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Agent",
    "typeScriptTag": "agent",
    "description": "Retrieve details of a specific agent",
    "parameters": [
      {
        "name": "agentId",
        "schema": "string",
        "required": true,
        "description": "Unique id of the agent to be retrieved.",
        "example": "16b980523634a6dc504898cda492e939"
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
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/list-agents",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Agent",
    "typeScriptTag": "agent",
    "description": "List all agents",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
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
    "url": "/update-agent/{agent_id}",
    "method": "updateExistingAgent",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Agent",
    "typeScriptTag": "agent",
    "description": "Update an existing agent",
    "parameters": [
      {
        "name": "agentId",
        "schema": "string",
        "required": true,
        "description": "Unique id of the agent to be updated.",
        "example": "16b980523634a6dc504898cda492e939"
      },
      {
        "name": "llm_websocket_url",
        "schema": "string",
        "description": "",
        "example": "wss://your-websocket-endpoint"
      },
      {
        "name": "voice_id",
        "schema": "string",
        "description": "",
        "example": "11labs-Adrian"
      },
      {
        "name": "voice_temperature",
        "schema": "number",
        "description": "",
        "example": 1
      },
      {
        "name": "voice_speed",
        "schema": "number",
        "description": "",
        "example": 1
      },
      {
        "name": "responsiveness",
        "schema": "number",
        "description": "",
        "example": 1
      },
      {
        "name": "enable_backchannel",
        "schema": "boolean",
        "description": "",
        "example": true
      },
      {
        "name": "ambient_sound",
        "schema": "string",
        "description": ""
      },
      {
        "name": "agent_name",
        "schema": "string",
        "description": "",
        "example": "Jarvis"
      },
      {
        "name": "language",
        "schema": "string",
        "description": "",
        "example": "en-US"
      },
      {
        "name": "webhook_url",
        "schema": "string",
        "description": "",
        "example": "https://webhook-url-here"
      },
      {
        "name": "boosted_keywords",
        "schema": "array",
        "description": "",
        "example": [
          "retell",
          "kroger"
        ]
      },
      {
        "name": "format_text",
        "schema": "boolean",
        "description": "",
        "example": true
      },
      {
        "name": "optOutSensitiveDataStorage",
        "schema": "boolean",
        "description": "",
        "example": true
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
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/delete-agent/{agent_id}",
    "method": "deleteExistingAgent",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Agent",
    "typeScriptTag": "agent",
    "description": "Delete an existing agent",
    "parameters": [
      {
        "name": "agentId",
        "schema": "string",
        "required": true,
        "description": "Unique id of the agent to be deleted.",
        "example": "oBeDLoLOeuAbiuaMFXRtDOLriTJ5tSxD"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
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
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/create-retell-llm",
    "method": "newLlm",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Retell",
    "typeScriptTag": "retell",
    "description": "Create a new Retell LLM",
    "parameters": [
      {
        "name": "general_prompt",
        "schema": "string",
        "description": "",
        "example": "You are ..."
      },
      {
        "name": "general_tools",
        "schema": "array",
        "description": "",
        "example": [
          {
            "description": "End the call with user only when user explicitly requests it.",
            "type": "end_call",
            "name": "end_call"
          }
        ]
      },
      {
        "name": "states",
        "schema": "array",
        "description": "",
        "example": [
          {
            "name": "information_collection",
            "state_prompt": "You will follow the steps below to collect information...",
            "edges": [
              {
                "description": "Transition to book an appointment if the user is due for an annual checkup based on the last checkup time collected.",
                "destination_state_name": "appointment_booking",
                "speak_during_transition": false
              }
            ],
            "tools": [
              {
                "description": "Transfer to the support team when user seems angry or explicitly requests a human agent",
                "type": "transfer_call",
                "name": "transfer_to_support",
                "number": "16175551212"
              }
            ]
          },
          {
            "name": "appointment_booking",
            "state_prompt": "You will follow the steps below to book an appointment...",
            "tools": [
              {
                "description": "Book an annual check up when user provided name, email, phone number, and have selected a time.",
                "type": "book_appointment_cal",
                "name": "book_appointment",
                "cal_api_key": "cal_live_xxxxxxxxxxxx",
                "event_type_id": 60444,
                "timezone": "America/Los_Angeles"
              }
            ]
          }
        ]
      },
      {
        "name": "starting_state",
        "schema": "string",
        "description": "",
        "example": "information_collection"
      },
      {
        "name": "begin_message",
        "schema": "string",
        "description": "",
        "example": "Hey I am a virtual assistant calling from Retell Hospital."
      }
    ],
    "responses": [
      {
        "statusCode": "201",
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
    "url": "/get-retell-llm/{llm_id}",
    "method": "getLlmDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Retell",
    "typeScriptTag": "retell",
    "description": "Retrieve details of a specific Retell LLM",
    "parameters": [
      {
        "name": "llmId",
        "schema": "string",
        "required": true,
        "description": "Unique id of the Retell LLM to be retrieved.",
        "example": "16b980523634a6dc504898cda492e939"
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
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/list-retell-llms",
    "method": "listAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "RetellLLM",
    "typeScriptTag": "retellLlm",
    "description": "List all retell LLM",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
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
    "url": "/update-retell-llm/{llm_id}",
    "method": "updateLlm",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Retell",
    "typeScriptTag": "retell",
    "description": "Update an existing Retell LLM",
    "parameters": [
      {
        "name": "llmId",
        "schema": "string",
        "required": true,
        "description": "Unique id of the Retell LLM to be updated.",
        "example": "16b980523634a6dc504898cda492e939"
      },
      {
        "name": "general_prompt",
        "schema": "string",
        "description": "",
        "example": "You are ..."
      },
      {
        "name": "general_tools",
        "schema": "array",
        "description": "",
        "example": [
          {
            "description": "End the call with user only when user explicitly requests it.",
            "type": "end_call",
            "name": "end_call"
          }
        ]
      },
      {
        "name": "states",
        "schema": "array",
        "description": "",
        "example": [
          {
            "name": "information_collection",
            "state_prompt": "You will follow the steps below to collect information...",
            "edges": [
              {
                "description": "Transition to book an appointment if the user is due for an annual checkup based on the last checkup time collected.",
                "destination_state_name": "appointment_booking",
                "speak_during_transition": false
              }
            ],
            "tools": [
              {
                "description": "Transfer to the support team when user seems angry or explicitly requests a human agent",
                "type": "transfer_call",
                "name": "transfer_to_support",
                "number": "16175551212"
              }
            ]
          },
          {
            "name": "appointment_booking",
            "state_prompt": "You will follow the steps below to book an appointment...",
            "tools": [
              {
                "description": "Book an annual check up when user provided name, email, phone number, and have selected a time.",
                "type": "book_appointment_cal",
                "name": "book_appointment",
                "cal_api_key": "cal_live_xxxxxxxxxxxx",
                "event_type_id": 60444,
                "timezone": "America/Los_Angeles"
              }
            ]
          }
        ]
      },
      {
        "name": "starting_state",
        "schema": "string",
        "description": "",
        "example": "information_collection"
      },
      {
        "name": "begin_message",
        "schema": "string",
        "description": "",
        "example": "Hey I am a virtual assistant calling from Retell Hospital."
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
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/delete-retell-llm/{llm_id}",
    "method": "deleteLlm",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Retell",
    "typeScriptTag": "retell",
    "description": "Delete an existing Retell LLM",
    "parameters": [
      {
        "name": "llmId",
        "schema": "string",
        "required": true,
        "description": "Unique id of the Retell LLM to be deleted.",
        "example": "oBeDLoLOeuAbiuaMFXRtDOLriTJ5tSxD"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
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
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/create-phone-number",
    "method": "purchaseNumberAndBindAgent",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "PhoneNumber",
    "typeScriptTag": "phoneNumber",
    "description": "Buy a new phone number & Bind an agent",
    "parameters": [
      {
        "name": "agent_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "oBeDLoLOeuAbiuaMFXRtDOLriTJ5tSxD"
      },
      {
        "name": "area_code",
        "schema": "integer",
        "required": false,
        "description": "",
        "example": 415
      }
    ],
    "responses": [
      {
        "statusCode": "201",
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
    "url": "/get-phone-number/{phone_number}",
    "method": "getDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "PhoneNumber",
    "typeScriptTag": "phoneNumber",
    "description": "Retrieve details of a specific phone number",
    "parameters": [
      {
        "name": "phoneNumber",
        "schema": "string",
        "required": true,
        "description": "BCP 47 format of the number (+country code, then number with no space, no special characters), used as the unique identifier for phone number APIs.",
        "example": 14157774444
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
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/list-phone-numbers",
    "method": "getAllNumbers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "PhoneNumber",
    "typeScriptTag": "phoneNumber",
    "description": "List all phone numbers",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
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
    "url": "/update-phone-number/{phone_number}",
    "method": "updateRetellLlm",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "PhoneNumber",
    "typeScriptTag": "phoneNumber",
    "description": "Update an existing Retell LLM",
    "parameters": [
      {
        "name": "phoneNumber",
        "schema": "string",
        "required": true,
        "description": "BCP 47 format of the number (+country code, then number with no space, no special characters), used as the unique identifier for phone number APIs.",
        "example": 14157774444
      },
      {
        "name": "agent_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "AGENT_ID"
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
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/delete-phone-number/{phone_number}",
    "method": "removePhoneNumber",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "PhoneNumber",
    "typeScriptTag": "phoneNumber",
    "description": "Delete an existing phone number",
    "parameters": [
      {
        "name": "phoneNumber",
        "schema": "string",
        "required": true,
        "description": "BCP 47 format of the number (+country code, then number with no space, no special characters), used as the unique identifier for phone number APIs.",
        "example": 14157774444
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/create-phone-call",
    "method": "makeConnection",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Call",
    "typeScriptTag": "call",
    "description": "Create a new phone call",
    "parameters": [
      {
        "name": "phone_number",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "override_agent_id",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "oBeDLoLOeuAbiuaMFXRtDOLriTJ5tSxD"
      },
      {
        "name": "retell_llm_dynamic_variables",
        "schema": "object",
        "required": false,
        "description": "",
        "example": {
          "customer_name": "John Doe"
        }
      }
    ],
    "responses": [
      {
        "statusCode": "201",
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
        "statusCode": "422",
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
      apiTitle="Retell SDK"
      apiBaseUrl="https://api.retellai.com"
      apiVersion="1.0.0"
      endpoints={19}
      sdkMethods={19}
      schemas={32}
      parameters={51}
      difficulty="Easy"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/retell-ai/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/retell-ai/openapi.yaml"
      developerDocumentation="docs.retellai.com/general/introduction"
    />
  );
}
  