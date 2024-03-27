import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function HiveTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="hive-typescript-sdk"
      metaDescription={`We help teams move faster. Hive's best-in-class project management platform includes all of the tools you need and want - and if not, we will build them for you. With flexible project views and endless customizations, Hive offers project management on your terms, success guaranteed.

Hive is used by thousands of fast-moving teams to help with:
- Project management
- Integrating tools
- Resourcing
- Time-Tracking
- Proofing and approvals
- Note Taking
- Task management
- Reporting and analytics

Want to see what it's all about? Start using Hive for free: app.hive.com/join`}
      company="Hive"
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/hive/logo.png"
      companyKebabCase="hive"
      clientNameCamelCase="hive"
      homepage="hive.com"
      lastUpdated={new Date("2024-03-27T22:24:36.753Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/hive/favicon.png"
      // Missing contactUrl
      // Missing contactEmail
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/hive/imagePreview.png"
      GettingStarted={GettingStarted}
      FirstRequest={FirstRequest}
      categories={["project_management","task_management","time_tracking"]}
      methods={[
  {
    "url": "/workspaces",
    "method": "listAllWorkspaces",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Workspace",
    "typeScriptTag": "workspace",
    "description": "Get workspaces",
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
  },
  {
    "url": "/workspaces/{workspaceId}/groups",
    "method": "getChatGroups",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Workspace",
    "typeScriptTag": "workspace",
    "description": "Get groups",
    "parameters": [
      {
        "name": "workspaceId",
        "schema": "string",
        "required": true,
        "description": "ID of the workspace",
        "example": "WORKSPACEID"
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
    "url": "/workspaces/{workspaceId}/activity-feeds",
    "method": "feeds",
    "httpMethod": HttpMethodsEnum.POST,
    "description": "Create activity feed",
    "parameters": [
      {
        "name": "workspaceId",
        "schema": "string",
        "required": true,
        "description": "ID of the workspace",
        "example": "WORKSPACEID"
      },
      {
        "name": "title",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TYPE"
      },
      {
        "name": "bucket",
        "schema": "string",
        "required": false,
        "description": "",
        "default": "activityFeed"
      },
      {
        "name": "assignedTo",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ASSIGNEDTO"
      },
      {
        "name": "attachedItemType",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ATTACHEDITEMTYPE"
      },
      {
        "name": "attachedItemId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ATTACHEDITEMID"
      },
      {
        "name": "body",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "BODY"
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
    "url": "/users/{userId}",
    "method": "getUserById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "User",
    "typeScriptTag": "user",
    "description": "Get user",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "User ID",
        "example": "USERID"
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
    "url": "/users/{userId}",
    "method": "updateUser",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "User",
    "typeScriptTag": "user",
    "description": "Update user",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "User ID",
        "example": "USERID"
      },
      {
        "name": "profile",
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
      }
    ]
  },
  {
    "url": "/users",
    "method": "listByEmail",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "User",
    "typeScriptTag": "user",
    "description": "Get users",
    "parameters": [
      {
        "name": "email",
        "schema": "string",
        "description": "Email address to search by"
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
    "url": "/workspaces/{workspaceId}/users",
    "method": "removeFromWorkspace",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "User",
    "typeScriptTag": "user",
    "description": "Remove user from workspace",
    "parameters": [
      {
        "name": "workspaceId",
        "schema": "string",
        "required": true,
        "description": "Workspace ID",
        "example": "WORKSPACEID"
      },
      {
        "name": "userId",
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
      }
    ]
  },
  {
    "url": "/workspaces/{workspaceId}/users",
    "method": "getWorkspaceUsers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "User",
    "typeScriptTag": "user",
    "description": "Get workspace users",
    "parameters": [
      {
        "name": "workspaceId",
        "schema": "string",
        "required": true,
        "description": "ID of the workspace",
        "example": "WORKSPACEID"
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
    "url": "/workspaces/{workspaceId}/users",
    "method": "inviteNewUser",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "User",
    "typeScriptTag": "user",
    "description": "Invite user",
    "parameters": [
      {
        "name": "workspaceId",
        "schema": "string",
        "required": true,
        "description": "Workspace ID",
        "example": "WORKSPACEID"
      },
      {
        "name": "email",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EMAIL"
      },
      {
        "name": "fullName",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "shouldSendInvite",
        "schema": "boolean",
        "required": false,
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
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/workspaces/{workspaceId}/external-users",
    "method": "listExternalUsers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "User",
    "typeScriptTag": "user",
    "description": "Get workspace external users",
    "parameters": [
      {
        "name": "workspaceId",
        "schema": "string",
        "required": true,
        "description": "ID of the workspace",
        "example": "WORKSPACEID"
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
    "url": "/actions/{actionId}",
    "method": "removeById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Action",
    "typeScriptTag": "action",
    "description": "Delete action",
    "parameters": [
      {
        "name": "actionId",
        "schema": "string",
        "required": true,
        "description": "The id of the action",
        "example": "ACTIONID"
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
    "url": "/actions/{actionId}",
    "method": "getDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Action",
    "typeScriptTag": "action",
    "description": "Get action",
    "parameters": [
      {
        "name": "actionId",
        "schema": "string",
        "required": true,
        "description": "The id of the action",
        "example": "ACTIONID"
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
    "url": "/actions/{actionId}",
    "method": "updateActionById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Action",
    "typeScriptTag": "action",
    "description": "Update action",
    "parameters": [
      {
        "name": "actionId",
        "schema": "string",
        "required": true,
        "description": "The id of the action",
        "example": "ACTIONID"
      },
      {
        "name": "title",
        "schema": "string",
        "description": ""
      },
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "status",
        "schema": "string",
        "description": ""
      },
      {
        "name": "update_children",
        "schema": "boolean",
        "description": "",
        "default": true
      },
      {
        "name": "projectId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "assignees",
        "schema": "array",
        "description": "",
        "default": [
          "[]"
        ]
      },
      {
        "name": "labels",
        "schema": "array",
        "description": ""
      },
      {
        "name": "urgent",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "privacy",
        "schema": "string",
        "description": ""
      },
      {
        "name": "checked",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "scheduledDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "deadline",
        "schema": "string",
        "description": ""
      },
      {
        "name": "parent",
        "schema": "string",
        "description": ""
      },
      {
        "name": "customFields",
        "schema": "array",
        "description": ""
      },
      {
        "name": "shiftSubactionsDeadline",
        "schema": "boolean",
        "description": "",
        "default": false
      },
      {
        "name": "archived",
        "schema": "boolean",
        "description": "",
        "default": false
      },
      {
        "name": "phaseId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "phaseName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "followingUserIds",
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
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/workspaces/{workspaceId}/actions",
    "method": "getActions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Workspace",
    "typeScriptTag": "workspace",
    "description": "Get actions",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "description": "An optional project ID to get actions from. By default, all actions will be returned regardless of what project they belong to."
      },
      {
        "name": "sortBy",
        "schema": "string",
        "description": "Sort results by an Action Object field (for example, `sortBy=title asc`)",
        "default": "fieldName asc"
      },
      {
        "name": "workspaceId",
        "schema": "string",
        "required": true,
        "description": "ID of the workspace",
        "example": "WORKSPACEID"
      },
      {
        "name": "limit",
        "schema": "string",
        "description": "default = 100; min = 1; max = 100",
        "default": "100"
      },
      {
        "name": "filters",
        "schema": "string",
        "description": "Optional fields to filter by. Filters expects a structure like \"filters[fieldName]=value\". For example, if you wanted to filter to just get actions with the status \"Completed\", you would pass: \"filters[status]=Completed\". Currently, only the following fields are supported: \"status\", \"parent\", \"archived\", \"milestone\", \"deleted\"."
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
    "url": "/actions/create",
    "method": "listActions",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Action",
    "typeScriptTag": "action",
    "description": "Create action",
    "parameters": [
      {
        "name": "title",
        "schema": "string",
        "description": ""
      },
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "workspace",
        "schema": "string",
        "description": ""
      },
      {
        "name": "projectId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "assignees",
        "schema": "array",
        "description": ""
      },
      {
        "name": "labels",
        "schema": "array",
        "description": ""
      },
      {
        "name": "deadline",
        "schema": "string",
        "description": ""
      },
      {
        "name": "scheduledDate",
        "schema": "string",
        "description": "",
        "default": "Date string to set the start date"
      },
      {
        "name": "processId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "customFields",
        "schema": "array",
        "description": ""
      },
      {
        "name": "parentId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "phaseId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "phaseName",
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
      }
    ]
  },
  {
    "url": "/actions/{actionId}/comments",
    "method": "getComments",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Action",
    "typeScriptTag": "action",
    "description": "Get action comments",
    "parameters": [
      {
        "name": "actionId",
        "schema": "string",
        "required": true,
        "description": "The id of the action",
        "example": "ACTIONID"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Number of comments",
        "default": 200
      },
      {
        "name": "sortBy",
        "schema": "string",
        "description": "You can change to e.g. createdAt asc",
        "default": "createdAt+desc"
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
    "url": "/actions/{actionId}/comments",
    "method": "createComment",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Action",
    "typeScriptTag": "action",
    "description": "Create action comment",
    "parameters": [
      {
        "name": "actionId",
        "schema": "string",
        "required": true,
        "description": "The id of the action",
        "example": "ACTIONID"
      },
      {
        "name": "body",
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
      }
    ]
  },
  {
    "url": "/actions/{actionId}/attachments",
    "method": "getAttachments",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Action",
    "typeScriptTag": "action",
    "description": "Get action attachments",
    "parameters": [
      {
        "name": "actionId",
        "schema": "string",
        "required": true,
        "description": "The ID of the action.",
        "example": "ACTIONID"
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
    "url": "/actions/{actionId}/attachments",
    "method": "attachFile",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Action",
    "typeScriptTag": "action",
    "description": "Create action attachment",
    "parameters": [
      {
        "name": "actionId",
        "schema": "string",
        "required": true,
        "description": "The ID of the action.",
        "example": "ACTIONID"
      },
      {
        "name": "url",
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
      }
    ]
  },
  {
    "url": "/actions/{actionId}/attachments/{attachmentId}",
    "method": "getAttachmentById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Action",
    "typeScriptTag": "action",
    "description": "Get attachment by attachment ID",
    "parameters": [
      {
        "name": "actionId",
        "schema": "string",
        "required": true,
        "description": "The ID of the action.",
        "example": "ACTIONID"
      },
      {
        "name": "attachmentId",
        "schema": "string",
        "required": true,
        "description": "The ID of the file attachment.",
        "example": "ATTACHMENTID"
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
    "url": "/actions/{actionId}/apply-template",
    "method": "applyTemplate",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Action",
    "typeScriptTag": "action",
    "description": "Apply action template",
    "parameters": [
      {
        "name": "actionId",
        "schema": "string",
        "required": true,
        "description": "Id of the action",
        "example": "ACTIONID"
      },
      {
        "name": "processId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PROCESSID"
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
    "url": "/workspaces/{workspaceId}/actiontemplates",
    "method": "getActionTemplates",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Workspace",
    "typeScriptTag": "workspace",
    "description": "Get action templates",
    "parameters": [
      {
        "name": "workspaceId",
        "schema": "string",
        "required": true,
        "description": "ID of the workspace",
        "example": "WORKSPACEID"
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
    "url": "/actions/{actionId}/action-history",
    "method": "getActionHistory",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Action",
    "typeScriptTag": "action",
    "description": "Get action history",
    "parameters": [
      {
        "name": "actionId",
        "schema": "string",
        "required": true,
        "description": "The id of the action",
        "example": "ACTIONID"
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
    "url": "/messages/create",
    "method": "createNewMessage",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Message",
    "typeScriptTag": "message",
    "description": "Create message",
    "parameters": [
      {
        "name": "workspace",
        "schema": "string",
        "description": ""
      },
      {
        "name": "body",
        "schema": "string",
        "description": ""
      },
      {
        "name": "senderName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "senderPicture",
        "schema": "string",
        "description": ""
      },
      {
        "name": "containerId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "color",
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
      }
    ]
  },
  {
    "url": "/projects/{projectId}",
    "method": "removeById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Project",
    "typeScriptTag": "project",
    "description": "Delete project",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "ID of the project to update",
        "example": "PROJECTID"
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
    "url": "/projects/{projectId}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Project",
    "typeScriptTag": "project",
    "description": "Get project",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "ID of the project to update",
        "example": "PROJECTID"
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
    "url": "/projects/{projectId}",
    "method": "updateById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Project",
    "typeScriptTag": "project",
    "description": "Update project",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "ID of the project to update",
        "example": "PROJECTID"
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
        "name": "startDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "endDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "color",
        "schema": "string",
        "description": ""
      },
      {
        "name": "accessOption",
        "schema": "string",
        "description": ""
      },
      {
        "name": "parentProject",
        "schema": "string",
        "description": "",
        "default": "Id of parent project"
      },
      {
        "name": "sharingType",
        "schema": "string",
        "description": ""
      },
      {
        "name": "members",
        "schema": "array",
        "description": ""
      },
      {
        "name": "teams",
        "schema": "array",
        "description": ""
      },
      {
        "name": "archived",
        "schema": "boolean",
        "description": "",
        "default": false
      },
      {
        "name": "template",
        "schema": "array",
        "description": ""
      },
      {
        "name": "budget",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "isDraftMode",
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
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/workspaces/{workspaceId}/projects",
    "method": "listForWorkspace",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Project",
    "typeScriptTag": "project",
    "description": "Get projects",
    "parameters": [
      {
        "name": "workspaceId",
        "schema": "string",
        "required": true,
        "description": "ID of the workspace",
        "example": "WORKSPACEID"
      },
      {
        "name": "sortBy",
        "schema": "string",
        "description": "Sort results by an Action Object field (for example, `sortBy=title+asc`)",
        "default": "fieldName+asc"
      },
      {
        "name": "filters",
        "schema": "string",
        "description": "Optional fields to filter by. Filters expect a structure like \"filters[fieldName]=value\". For example, if you want to filter to just get deleted projects, you would pass: \"filters[deleted]=true\". Currently, only two fields are supported:  \"archived\", \"deleted\"."
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
    "url": "/projects",
    "method": "createNewProject",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Project",
    "typeScriptTag": "project",
    "description": "Create project",
    "parameters": [
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "workspace",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "WORKSPACE"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "startDate",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "endDate",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "sharingType",
        "schema": "string",
        "required": false,
        "description": "",
        "default": "everyone"
      },
      {
        "name": "members",
        "schema": "array",
        "required": false,
        "description": "",
        "default": [
          "[]"
        ]
      },
      {
        "name": "teams",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "projectCustomFields",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "color",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "template",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "copyFrom",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "copyActionStatuses",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "copyAssignees",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "accessOption",
        "schema": "string",
        "required": false,
        "description": "",
        "default": "private"
      },
      {
        "name": "phases",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "parentProject",
        "schema": "string",
        "required": false,
        "description": "",
        "default": "Id of parentProject"
      },
      {
        "name": "budget",
        "schema": "integer",
        "required": false,
        "description": "",
        "default": 0
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
    "url": "/projects/{projectId}/project-custom-field",
    "method": "addCustomField",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Project",
    "typeScriptTag": "project",
    "description": "Create project custom field",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "ID of the project to add a custom field to",
        "example": "PROJECTID"
      },
      {
        "name": "label",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "LABEL"
      },
      {
        "name": "type",
        "schema": "string",
        "required": false,
        "description": "",
        "default": "text"
      },
      {
        "name": "hidden",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "value",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "numberValue",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "dateValue",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "formula",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "dropdownValues",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "selectedValues",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "allowMultiSelect",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
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
    "url": "/projects/{projectId}/project-custom-field/{customFieldId}",
    "method": "updateCustomField",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Project",
    "typeScriptTag": "project",
    "description": "Update project custom field",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "ID of the project to add a custom field to",
        "example": "PROJECTID"
      },
      {
        "name": "customFieldId",
        "schema": "string",
        "required": true,
        "description": "ID of the custom field to update",
        "example": "CUSTOMFIELDID"
      },
      {
        "name": "label",
        "schema": "string",
        "description": ""
      },
      {
        "name": "value",
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
      }
    ]
  },
  {
    "url": "/projects/{projectId}/project-status",
    "method": "setStatus",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Project",
    "typeScriptTag": "project",
    "description": "Set project status",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "ID of the project",
        "example": "PROJECTID"
      },
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "statusId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "STATUSID"
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
    "url": "/workspaces/{workspaceId}/project-statuses",
    "method": "getStatuses",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Project",
    "typeScriptTag": "project",
    "description": "Get project statuses",
    "parameters": [
      {
        "name": "workspaceId",
        "schema": "string",
        "required": true,
        "description": "ID of the workspace",
        "example": "WORKSPACEID"
      },
      {
        "name": "first",
        "schema": "integer",
        "description": "Get first n items",
        "default": 200
      },
      {
        "name": "last",
        "schema": "integer",
        "description": "Get last n items",
        "default": 200
      },
      {
        "name": "before",
        "schema": "string",
        "description": "document ID to query documents before it"
      },
      {
        "name": "after",
        "schema": "string",
        "description": "document ID to query documents after it"
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
    "url": "/resource-assignments/{resourceAssignmentId}",
    "method": "removeById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "ResourceAssignment",
    "typeScriptTag": "resourceAssignment",
    "description": "Delete resource assignment",
    "parameters": [
      {
        "name": "resourceAssignmentId",
        "schema": "string",
        "required": true,
        "description": "ID of the user for the resourcing",
        "example": "RESOURCEASSIGNMENTID"
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
    "url": "/resource-assignments/{resourceAssignmentId}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "ResourceAssignment",
    "typeScriptTag": "resourceAssignment",
    "description": "Get resource assignment",
    "parameters": [
      {
        "name": "resourceAssignmentId",
        "schema": "string",
        "required": true,
        "description": "ID of the resourceAssignment to update",
        "example": "RESOURCEASSIGNMENTID"
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
    "url": "/resource-assignments/{resourceAssignmentId}",
    "method": "updateAssignmentById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "ResourceAssignment",
    "typeScriptTag": "resourceAssignment",
    "description": "Update resource assignment",
    "parameters": [
      {
        "name": "resourceAssignmentId",
        "schema": "string",
        "required": true,
        "description": "ID of the resourceAssignment",
        "example": "RESOURCEASSIGNMENTID"
      },
      {
        "name": "startDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "endDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "projectId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "notes",
        "schema": "string",
        "description": ""
      },
      {
        "name": "assignmentType",
        "schema": "string",
        "description": "",
        "default": "regular"
      },
      {
        "name": "allocationType",
        "schema": "string",
        "description": "",
        "default": "hoursPerDay"
      },
      {
        "name": "hoursPerDay",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "fixedHours",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "fixedDisplayType",
        "schema": "string",
        "description": "",
        "default": "hours"
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
    "url": "/workspaces/{workspaceId}/resource-assignments",
    "method": "listResourceAssignments",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Workspace",
    "typeScriptTag": "workspace",
    "description": "Get resource assignments",
    "parameters": [
      {
        "name": "workspaceId",
        "schema": "string",
        "required": true,
        "description": "ID of the workspace",
        "example": "WORKSPACEID"
      },
      {
        "name": "first",
        "schema": "integer",
        "description": "Get first n items",
        "default": 200
      },
      {
        "name": "last",
        "schema": "integer",
        "description": "Get last n items",
        "default": 200
      },
      {
        "name": "before",
        "schema": "string",
        "description": "document ID to query documents before it"
      },
      {
        "name": "after",
        "schema": "string",
        "description": "document ID to query documents after it"
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
    "url": "/resource-assignments",
    "method": "createNewAssignment",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "ResourceAssignment",
    "typeScriptTag": "resourceAssignment",
    "description": "Create resource assignments",
    "parameters": [
      {
        "name": "workspace",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "WORKSPACE"
      },
      {
        "name": "resourceId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "RESOURCEID"
      },
      {
        "name": "startDate",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "STARTDATE"
      },
      {
        "name": "endDate",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ENDDATE"
      },
      {
        "name": "projectId",
        "schema": "string",
        "required": false,
        "description": "",
        "default": "null"
      },
      {
        "name": "notes",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "assignmentType",
        "schema": "string",
        "required": false,
        "description": "",
        "default": "regular"
      },
      {
        "name": "allocationType",
        "schema": "string",
        "required": false,
        "description": "",
        "default": "hoursPerDay"
      },
      {
        "name": "hoursPerDay",
        "schema": "integer",
        "required": false,
        "description": "",
        "default": 0
      },
      {
        "name": "fixedHours",
        "schema": "integer",
        "required": false,
        "description": "",
        "default": 0
      },
      {
        "name": "fixedDisplayType",
        "schema": "string",
        "required": false,
        "description": "",
        "default": "hours"
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
    "url": "/workspaces/{workspaceId}/custom-tags",
    "method": "getCustomTags",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Workspace",
    "typeScriptTag": "workspace",
    "description": "Get custom tags",
    "parameters": [
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "Type of custom tags you are trying to access. Can be either \"user\" or \"project\"",
        "example": "TYPE"
      },
      {
        "name": "workspaceId",
        "schema": "string",
        "required": true,
        "description": "Workspace ID",
        "example": "WORKSPACEID"
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
    "url": "/workspaces/{workspaceId}/custom-tags",
    "method": "createCustomTag",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Workspace",
    "typeScriptTag": "workspace",
    "description": "Create custom tag",
    "parameters": [
      {
        "name": "workspaceId",
        "schema": "string",
        "required": true,
        "description": "Workspace ID",
        "example": "WORKSPACEID"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TYPE"
      },
      {
        "name": "options",
        "schema": "array",
        "required": false,
        "description": "",
        "default": [
          "[]"
        ]
      },
      {
        "name": "isMulti",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
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
    "url": "/workspaces/{workspaceId}/custom-tags/{customTagId}",
    "method": "deleteCustomTag",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Workspace",
    "typeScriptTag": "workspace",
    "description": "Delete custom tag",
    "parameters": [
      {
        "name": "workspaceId",
        "schema": "string",
        "required": true,
        "description": "Workspace ID",
        "example": "WORKSPACEID"
      },
      {
        "name": "customTagId",
        "schema": "string",
        "required": true,
        "description": "Tag ID",
        "example": "CUSTOMTAGID"
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
    "url": "/workspaces/{workspaceId}/custom-tags/{customTagId}",
    "method": "getCustomTag",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Workspace",
    "typeScriptTag": "workspace",
    "description": "Get custom tag",
    "parameters": [
      {
        "name": "workspaceId",
        "schema": "string",
        "required": true,
        "description": "Workspace ID",
        "example": "WORKSPACEID"
      },
      {
        "name": "customTagId",
        "schema": "string",
        "required": true,
        "description": "Tag ID",
        "example": "CUSTOMTAGID"
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
    "url": "/workspaces/{workspaceId}/custom-tags/{customTagId}",
    "method": "updateCustomTag",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Workspace",
    "typeScriptTag": "workspace",
    "description": "Update custom tag",
    "parameters": [
      {
        "name": "workspaceId",
        "schema": "string",
        "required": true,
        "description": "Workspace ID",
        "example": "WORKSPACEID"
      },
      {
        "name": "customTagId",
        "schema": "string",
        "required": true,
        "description": "Custom tag ID",
        "example": "CUSTOMTAGID"
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "options",
        "schema": "array",
        "description": ""
      },
      {
        "name": "isMulti",
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
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/workspaces/{workspaceId}/users/{userId}/user-tags",
    "method": "getUserTags",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "User",
    "typeScriptTag": "user",
    "description": "Get user tags",
    "parameters": [
      {
        "name": "workspaceId",
        "schema": "string",
        "required": true,
        "description": "Workspace ID",
        "example": "WORKSPACEID"
      },
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "User ID",
        "example": "USERID"
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
    "url": "/workspaces/{workspaceId}/users/{userId}/user-tags/{userTagId}",
    "method": "getUserTag",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "User",
    "typeScriptTag": "user",
    "description": "Get user tag",
    "parameters": [
      {
        "name": "workspaceId",
        "schema": "string",
        "required": true,
        "description": "Workspace ID",
        "example": "WORKSPACEID"
      },
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "ID of the user",
        "example": "USERID"
      },
      {
        "name": "userTagId",
        "schema": "string",
        "required": true,
        "description": "ID of the user tag",
        "example": "USERTAGID"
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
    "url": "/workspaces/{workspaceId}/users/{userId}/user-tags/{userTagId}",
    "method": "updateTag",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "User",
    "typeScriptTag": "user",
    "description": "Update user tag",
    "parameters": [
      {
        "name": "workspaceId",
        "schema": "string",
        "required": true,
        "description": "Workspace ID",
        "example": "WORKSPACEID"
      },
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "ID of user to update",
        "example": "USERID"
      },
      {
        "name": "userTagId",
        "schema": "string",
        "required": true,
        "description": "ID of tag to set on the user",
        "example": "USERTAGID"
      },
      {
        "name": "selectedOptions",
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
      }
    ]
  },
  {
    "url": "/workspaces/{workspaceId}/projects/{projectId}/project-tags",
    "method": "getTags",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Project",
    "typeScriptTag": "project",
    "description": "Get project tags",
    "parameters": [
      {
        "name": "workspaceId",
        "schema": "string",
        "required": true,
        "description": "Workspace ID",
        "example": "WORKSPACEID"
      },
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID to get tags for",
        "example": "PROJECTID"
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
    "url": "/workspaces/{workspaceId}/projects/{projectId}/project-tags/{projectTagId}",
    "method": "getTagById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Project",
    "typeScriptTag": "project",
    "description": "Get project tag",
    "parameters": [
      {
        "name": "workspaceId",
        "schema": "string",
        "required": true,
        "description": "Workspace ID",
        "example": "WORKSPACEID"
      },
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID that you are trying to access project tag for",
        "example": "PROJECTID"
      },
      {
        "name": "projectTagId",
        "schema": "string",
        "required": true,
        "description": "ID of the project tag",
        "example": "PROJECTTAGID"
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
    "url": "/workspaces/{workspaceId}/projects/{projectId}/project-tags/{projectTagId}",
    "method": "updateTag",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Project",
    "typeScriptTag": "project",
    "description": "Update project tag",
    "parameters": [
      {
        "name": "workspaceId",
        "schema": "string",
        "required": true,
        "description": "Workspace ID",
        "example": "WORKSPACEID"
      },
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID to update the tag value on",
        "example": "PROJECTID"
      },
      {
        "name": "projectTagId",
        "schema": "string",
        "required": true,
        "description": "Project tag ID",
        "example": "PROJECTTAGID"
      },
      {
        "name": "selectedOptions",
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
      }
    ]
  },
  {
    "url": "/workspaces/{workspaceId}/role-tags",
    "method": "listRoleTags",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Workspace",
    "typeScriptTag": "workspace",
    "description": "Get role tags",
    "parameters": [
      {
        "name": "workspaceId",
        "schema": "string",
        "required": true,
        "description": "Workspace ID",
        "example": "WORKSPACEID"
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
    "url": "/workspaces/{workspaceId}/role-tags",
    "method": "createRoleTag",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Workspace",
    "typeScriptTag": "workspace",
    "description": "Create role tag",
    "parameters": [
      {
        "name": "workspaceId",
        "schema": "string",
        "required": true,
        "description": "Workspace ID",
        "example": "WORKSPACEID"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
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
    "url": "/workspaces/{workspaceId}/role-tags/{roleTagId}",
    "method": "removeRoleTag",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Workspace",
    "typeScriptTag": "workspace",
    "description": "Delete role tag",
    "parameters": [
      {
        "name": "workspaceId",
        "schema": "string",
        "required": true,
        "description": "Workspace ID",
        "example": "WORKSPACEID"
      },
      {
        "name": "roleTagId",
        "schema": "string",
        "required": true,
        "description": "Role Tag ID",
        "example": "ROLETAGID"
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
    "url": "/workspaces/{workspaceId}/role-tags/{roleTagId}",
    "method": "updateRoleTag",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Workspace",
    "typeScriptTag": "workspace",
    "description": "Update role tag",
    "parameters": [
      {
        "name": "workspaceId",
        "schema": "string",
        "required": true,
        "description": "Workspace ID",
        "example": "WORKSPACEID"
      },
      {
        "name": "roleTagId",
        "schema": "string",
        "required": true,
        "description": "Role Tag ID",
        "example": "ROLETAGID"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
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
    "url": "/workspaces/{workspaceId}/users/{userId}/role-tags",
    "method": "getUserRoleTag",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "User",
    "typeScriptTag": "user",
    "description": "Get user role tag",
    "parameters": [
      {
        "name": "workspaceId",
        "schema": "string",
        "required": true,
        "description": "Workspace ID",
        "example": "WORKSPACEID"
      },
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "User ID",
        "example": "USERID"
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
    "url": "/workspaces/{workspaceId}/users/{userId}/role-tags/{roleTagId}",
    "method": "updateRoleTag",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "User",
    "typeScriptTag": "user",
    "description": "Update user role tag",
    "parameters": [
      {
        "name": "workspaceId",
        "schema": "string",
        "required": true,
        "description": "Workspace ID",
        "example": "WORKSPACEID"
      },
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "User ID",
        "example": "USERID"
      },
      {
        "name": "roleTagId",
        "schema": "string",
        "required": true,
        "description": "Role tag ID to set on the user",
        "example": "ROLETAGID"
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
    "url": "/workspaces/{workspaceId}/user-settings/{userId}",
    "method": "getUserTagByWorkspace",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "User",
    "typeScriptTag": "user",
    "description": "Get user setting by userId",
    "parameters": [
      {
        "name": "workspaceId",
        "schema": "string",
        "required": true,
        "description": "Workspace ID",
        "example": "WORKSPACEID"
      },
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "User ID",
        "example": "USERID"
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
    "url": "/workspaces/{workspaceId}/user-settings/{userId}",
    "method": "updateUserSettings",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "User",
    "typeScriptTag": "user",
    "description": "Update user setting",
    "parameters": [
      {
        "name": "workspaceId",
        "schema": "string",
        "required": true,
        "description": "Workspace ID",
        "example": "WORKSPACEID"
      },
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "User ID",
        "example": "USERID"
      },
      {
        "name": "firstDayOfWork",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lastDayOfWork",
        "schema": "string",
        "description": ""
      },
      {
        "name": "billRate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "costRate",
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
      }
    ]
  },
  {
    "url": "/workspaces/{workspaceId}/teams",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Team",
    "typeScriptTag": "team",
    "description": "Get Teams",
    "parameters": [
      {
        "name": "workspaceId",
        "schema": "string",
        "required": true,
        "description": "Workspace ID",
        "example": "WORKSPACEID"
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
    "url": "/teams",
    "method": "addNewTeam",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Team",
    "typeScriptTag": "team",
    "description": "Create team",
    "parameters": [
      {
        "name": "workspace",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "WORKSPACE"
      },
      {
        "name": "members",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
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
    "url": "/teams/{teamId}",
    "method": "deleteTeam",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Team",
    "typeScriptTag": "team",
    "description": "Delete Team",
    "parameters": [
      {
        "name": "teamId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TEAMID"
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
    "url": "/teams/{teamId}",
    "method": "updateTeamById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Team",
    "typeScriptTag": "team",
    "description": "Update Team",
    "parameters": [
      {
        "name": "teamId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TEAMID"
      },
      {
        "name": "members",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
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
    "url": "/teams/{teamId}/add-members",
    "method": "addMembers",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Team",
    "typeScriptTag": "team",
    "description": "Add members",
    "parameters": [
      {
        "name": "teamId",
        "schema": "string",
        "required": true,
        "description": "Team id",
        "example": "TEAMID"
      },
      {
        "name": "members",
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
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/teams/{teamId}/remove-members",
    "method": "removeMembers",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Team",
    "typeScriptTag": "team",
    "description": "Remove members",
    "parameters": [
      {
        "name": "teamId",
        "schema": "string",
        "required": true,
        "description": "Team id",
        "example": "TEAMID"
      },
      {
        "name": "members",
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
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/workspaces/{workspaceId}/labels/{labelId}",
    "method": "deleteLabel",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Workspace",
    "typeScriptTag": "workspace",
    "description": "Delete label",
    "parameters": [
      {
        "name": "workspaceId",
        "schema": "string",
        "required": true,
        "description": "Workspace ID",
        "example": "WORKSPACEID"
      },
      {
        "name": "labelId",
        "schema": "string",
        "required": true,
        "description": "Label ID",
        "example": "LABELID"
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
    "url": "/workspaces/{workspaceId}/labels/{labelId}",
    "method": "getLabelRoleTags",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Workspace",
    "typeScriptTag": "workspace",
    "description": "Get label",
    "parameters": [
      {
        "name": "workspaceId",
        "schema": "string",
        "required": true,
        "description": "Workspace ID",
        "example": "WORKSPACEID"
      },
      {
        "name": "labelId",
        "schema": "string",
        "required": true,
        "description": "The ID of the Label you want to retrieve",
        "example": "LABELID"
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
    "url": "/workspaces/{workspaceId}/labels/{labelId}",
    "method": "updateLabel",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Workspace",
    "typeScriptTag": "workspace",
    "description": "Update label",
    "parameters": [
      {
        "name": "workspaceId",
        "schema": "string",
        "required": true,
        "description": "Workspace ID",
        "example": "WORKSPACEID"
      },
      {
        "name": "labelId",
        "schema": "string",
        "required": true,
        "description": "Label ID",
        "example": "LABELID"
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "parent",
        "schema": "string",
        "description": ""
      },
      {
        "name": "color",
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
      }
    ]
  },
  {
    "url": "/workspaces/{workspaceId}/labels",
    "method": "getAllLabels",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Workspace",
    "typeScriptTag": "workspace",
    "description": "Get labels",
    "parameters": [
      {
        "name": "workspaceId",
        "schema": "string",
        "required": true,
        "description": "Workspace ID",
        "example": "WORKSPACEID"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "",
        "default": 200
      },
      {
        "name": "skip",
        "schema": "integer",
        "description": "",
        "default": 0
      },
      {
        "name": "sortBy",
        "schema": "string",
        "description": "Allowed values [name, createdAt]",
        "default": "name"
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
    "url": "/workspaces/{workspaceId}/labels",
    "method": "createLabel",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Workspace",
    "typeScriptTag": "workspace",
    "description": "Create label",
    "parameters": [
      {
        "name": "workspaceId",
        "schema": "string",
        "required": true,
        "description": "Workspace ID",
        "example": "WORKSPACEID"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "parent",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "color",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "COLOR"
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
    "url": "/workspaces/{workspaceId}/custom-fields/{customFieldId}",
    "method": "getCustomField",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Workspace",
    "typeScriptTag": "workspace",
    "description": "Get custom field",
    "parameters": [
      {
        "name": "customFieldId",
        "schema": "string",
        "required": true,
        "description": "Id of the custom field",
        "example": "CUSTOMFIELDID"
      },
      {
        "name": "workspaceId",
        "schema": "string",
        "required": true,
        "description": "Workspace ID you wish to see custom fields for",
        "example": "WORKSPACEID"
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
    "url": "/workspaces/{workspaceId}/custom-fields",
    "method": "getCustomFields",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Workspace",
    "typeScriptTag": "workspace",
    "description": "Get custom fields",
    "parameters": [
      {
        "name": "workspaceId",
        "schema": "string",
        "required": true,
        "description": "Workspace ID you wish to see custom fields for",
        "example": "WORKSPACEID"
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
    "url": "/workspaces/{workspaceId}/custom-fields",
    "method": "createCustomField",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Workspace",
    "typeScriptTag": "workspace",
    "description": "Create custom field",
    "parameters": [
      {
        "name": "workspaceId",
        "schema": "string",
        "required": true,
        "description": "Workspace ID you wish to see custom fields for",
        "example": "WORKSPACEID"
      },
      {
        "name": "label",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "LABEL"
      },
      {
        "name": "type",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "defaultValue",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "dropdownValues",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "allowMultiSelect",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "itemType",
        "schema": "string",
        "required": false,
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
      }
    ]
  },
  {
    "url": "/project-statuses/{projectStatusId}",
    "method": "getStatus",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Project",
    "typeScriptTag": "project",
    "description": "Get status",
    "parameters": [
      {
        "name": "projectStatusId",
        "schema": "string",
        "required": true,
        "description": "Id of the status",
        "example": "PROJECTSTATUSID"
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
    "url": "/project-statuses",
    "method": "createStatus",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Project",
    "typeScriptTag": "project",
    "description": "Create status",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "color",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "COLOR"
      },
      {
        "name": "workspaceId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "WORKSPACEID"
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
    "url": "/webhooks",
    "method": "createHandler",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Webhook",
    "typeScriptTag": "webhook",
    "description": "Create webhook",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "workspaceId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "WORKSPACEID"
      },
      {
        "name": "projectIds",
        "schema": "array",
        "required": false,
        "description": "",
        "default": [
          "[]"
        ]
      },
      {
        "name": "trigger",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TRIGGER"
      },
      {
        "name": "fields",
        "schema": "array",
        "required": false,
        "description": "",
        "default": [
          "[]"
        ]
      },
      {
        "name": "url",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "URL"
      },
      {
        "name": "additionalHeaders",
        "schema": "array",
        "required": false,
        "description": ""
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
      }
    ]
  },
  {
    "url": "/webhooks/{webhookId}",
    "method": "removeHandler",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Webhook",
    "typeScriptTag": "webhook",
    "description": "Delete webhook",
    "parameters": [
      {
        "name": "webhookId",
        "schema": "string",
        "required": true,
        "description": "ID of the Webhook to delete",
        "example": "WEBHOOKID"
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
  }
]
    }
      language="TypeScript"
      apiTitle="Hive REST API"
      apiBaseUrl="https://app.hive.com/api/v1"
      apiVersion="1.0"
      endpoints={51}
      sdkMethods={75}
      schemas={183}
      parameters={276}
      difficulty="Medium"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/hive/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/hive/openapi.yaml"
      developerDocumentation="developers.hive.com/reference"
    />
  );
}
  