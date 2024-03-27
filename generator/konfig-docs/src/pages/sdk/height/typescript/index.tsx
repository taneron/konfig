import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function HeightTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="height-typescript-sdk"
      metaDescription={`Height is the autonomous project collaboration tool. With an embedded AI engine, Height handles the legwork of building products on autopilot. Offload soul-sucking chores like bug triage, backlog grooming, and documentation updates for good.`}
      company="Height"
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/height/logo.png"
      companyKebabCase="height"
      clientNameCamelCase="height"
      homepage="height.app"
      lastUpdated={new Date("2024-03-27T21:49:20.389Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/height/favicon.png"
      // Missing contactUrl
      contactEmail="gil@beomjun.kr"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/height/imagePreview.png"
      GettingStarted={GettingStarted}
      FirstRequest={FirstRequest}
      categories={["automation","ai","project_collaboration"]}
      methods={[
  {
    "url": "/lists",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Lists",
    "typeScriptTag": "lists",
    "description": "List all lists",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/lists",
    "method": "createNewList",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Lists",
    "typeScriptTag": "lists",
    "description": "Create a list",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "Tasks belong to one list. To create tasks, it's necessary to know in which list you want to create them."
      }
    ]
  },
  {
    "url": "/lists/{id}",
    "method": "updateListById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Lists",
    "typeScriptTag": "lists",
    "description": "Update a list",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The unique id of the list (https://height-api.xyz/openapi/",
        "example": "ID"
      },
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "appearance",
        "schema": "object",
        "description": ""
      },
      {
        "name": "visualization",
        "schema": "string",
        "description": ""
      },
      {
        "name": "archivedAt",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Tasks belong to one list. To create tasks, it's necessary to know in which list you want to create them."
      }
    ]
  },
  {
    "url": "/tasks",
    "method": "search",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Tasks",
    "typeScriptTag": "tasks",
    "description": "Search tasks",
    "parameters": [
      {
        "name": "filters",
        "schema": "string",
        "description": "JSON object with filters",
        "example": "{\"status\":{\"values\":[\"backLog\",\"inProgress\"]},\"assigneeId\":{\"values\":[\"123e4567-e89b-12d3-a456-426655440000\"]},\"completed\":{\"values\":[false]},\"lastActivityAt\":{\"values\":[],\"gt\":{\"date\":\"2019-11-07T17:00:00.000Z\"}}}"
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
    "url": "/tasks",
    "method": "updateMultiple",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Tasks",
    "typeScriptTag": "tasks",
    "description": "Patch multiples tasks",
    "parameters": [
      {
        "name": "patches",
        "schema": "array",
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
    "url": "/tasks",
    "method": "createTask",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Tasks",
    "typeScriptTag": "tasks",
    "description": "Create a task",
    "parameters": [
      {
        "name": "realtime",
        "schema": "boolean",
        "description": "(https://height-api.xyz/openapi/ - use false when migrating tasks"
      },
      {
        "name": "notifyUsers",
        "schema": "boolean",
        "description": "(https://height-api.xyz/openapi/ - use false when migrating tasks"
      },
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "listIds",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "status",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "assigneesIds",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "parentTaskId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "fields",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "orderIntent",
        "schema": "object",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/tasks/:id",
    "method": "getTaskById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Tasks",
    "typeScriptTag": "tasks",
    "description": "Get a task",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "task index (https://height-api.xyz/openapi/ or task id (https://height-api.xyz/openapi/",
        "example": "ID"
      },
      {
        "name": "include",
        "schema": "string",
        "description": "What you wish to include with the task."
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
    "url": "/tasks/:id",
    "method": "updateTaskById",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Tasks",
    "typeScriptTag": "tasks",
    "description": "Update a single task",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "task index (https://height-api.xyz/openapi/ or task id (https://height-api.xyz/openapi/",
        "example": "ID"
      },
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "listIds",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "status",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "assigneesIds",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "parentTaskId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "fields",
        "schema": "array",
        "required": false,
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
    "url": "/tasks/move",
    "method": "moveTask",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Tasks",
    "typeScriptTag": "tasks",
    "description": "Move tasks",
    "parameters": [
      {
        "name": "taskIds",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "sourceId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SOURCEID"
      },
      {
        "name": "orderIntent",
        "schema": "object",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Successful operation"
      }
    ]
  },
  {
    "url": "/activities",
    "method": "listMessages",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Activities",
    "typeScriptTag": "activities",
    "description": "List activities and messages",
    "parameters": [
      {
        "name": "taskId",
        "schema": "string",
        "description": "Either the task unique `id` (https://height-api.xyz/openapi/, or the task unique `index` (https://height-api.xyz/openapi/."
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
    "url": "/activities",
    "method": "createMessage",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Activities",
    "typeScriptTag": "activities",
    "description": "Post a message",
    "parameters": [
      {
        "name": "taskId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TASKID"
      },
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TYPE"
      },
      {
        "name": "message",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "MESSAGE"
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
    "url": "/fieldTemplates",
    "method": "listAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Field Templates",
    "typeScriptTag": "fieldTemplates",
    "description": "List all field templates",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/fieldTemplates/:id/options",
    "method": "createOption",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Field Templates",
    "typeScriptTag": "fieldTemplates",
    "description": "Create an option for a field template",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "field template id (https://height-api.xyz/openapi/",
        "example": "ID"
      },
      {
        "name": "value",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "VALUE"
      },
      {
        "name": "hue",
        "schema": "number",
        "required": false,
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
    "url": "/fieldTemplates/:id/options/:optionId",
    "method": "updateOption",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Field Templates",
    "typeScriptTag": "fieldTemplates",
    "description": "Update or delete an option for a field template",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "optionId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "OPTIONID"
      },
      {
        "name": "value",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "VALUE"
      },
      {
        "name": "hue",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "deleted",
        "schema": "boolean",
        "required": false,
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
    "url": "/taskForms/:id/answers",
    "method": "createTaskFromForm",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Task Forms",
    "typeScriptTag": "taskForms",
    "description": "Create a task from a public task form",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "task form id",
        "example": "ID"
      },
      {
        "name": "asBot",
        "schema": "boolean",
        "description": "Only allowed for public task forms, and required if not authenticated"
      },
      {
        "name": "answers",
        "schema": "array",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/taskForms/:urlKey",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Task Forms",
    "typeScriptTag": "taskForms",
    "description": "Get a task form",
    "parameters": [
      {
        "name": "urlKey",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "URLKEY"
      },
      {
        "name": "keyType",
        "schema": "string",
        "description": "One of key or urlKey, defaulting to id"
      },
      {
        "name": "include",
        "schema": "array",
        "description": "Array of task form includes"
      },
      {
        "name": "archived",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "draft",
        "schema": "boolean",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Uncertain typed. Height team did't provide schema for Task Form."
      }
    ]
  },
  {
    "url": "/users",
    "method": "getAllUsers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Get all users",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/users/:id",
    "method": "getUserById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Get a user",
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
    "url": "/users/me",
    "method": "getCurrentUser",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Get the current user",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/groups",
    "method": "getAllGroups",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Groups",
    "typeScriptTag": "groups",
    "description": "Get all groups",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/securityLogEvents",
    "method": "listAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Security Log Events",
    "typeScriptTag": "securityLogEvents",
    "description": "List all security log event objects",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/workspace",
    "method": "get",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Workspace",
    "typeScriptTag": "workspace",
    "description": "Retrieve the workspace",
    "parameters": [],
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
      apiTitle="Height APP API"
      apiBaseUrl="https://api.height.app"
      apiVersion="1.0.0"
      endpoints={17}
      sdkMethods={22}
      schemas={63}
      parameters={52}
      difficulty="Easy"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/height/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/height/openapi.yaml"
      developerDocumentation="height-api.xyz/openapi/"
    />
  );
}
  