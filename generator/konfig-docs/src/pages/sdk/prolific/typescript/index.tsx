import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function ProlificTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="prolific-typescript-sdk"
      metaDescription={`Prolific helps dedicated research teams to collect the very highest-quality human-powered data - at scale - using our simple-to-use platform to target and manage participants from our diverse, vetted participant pool.

The truth matters: the best decisions, and biggest discoveries, are built on the highest-quality data. And with the increasing proliferation of AI, access to reliable, diverse data to develop and train AI models has never been more important.

Created by researchers for researchers, Prolific was founded to provide a better way for researchers and organisations to get high-quality human data and feedback at scale for important research.

Now, more than 30,000 researchers across academia and industry use Prolific to gather definitive human data and feedback from reliable, engaged and fairly-treated participants – with a new study launched every 3 minutes.`}
      company="Prolific"
      doesNotHaveApiDescription={true}
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/prolific/logo.png"
      companyKebabCase="prolific"
      clientNameCamelCase="prolific"
      homepage="www.prolific.com/"
      lastUpdated={new Date("2024-03-29T18:52:42.616Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/prolific/favicon.png"
      contactUrl="https://docs.prolific.com/docs/api-docs/public/"
      // Missing contactEmail
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/prolific/imagePreview.png"
      GettingStarted={GettingStarted}
      FirstRequest={FirstRequest}
      categories={["research","data_collection","platform","participant_management","researchers","data_quality","user_testing","academic","surveys","online_research"]}
      methods={[
  {
    "url": "/api/v1/surveys/{survey_id}",
    "method": "deleteSingleSurvey",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Surveys",
    "typeScriptTag": "surveys",
    "description": "Delete survey",
    "parameters": [
      {
        "name": "surveyId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SURVEY_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "4XX",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/surveys/{survey_id}",
    "method": "getSurveyById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Surveys",
    "typeScriptTag": "surveys",
    "description": "Get survey",
    "parameters": [
      {
        "name": "surveyId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SURVEY_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The model used to create a serialised representation a `Survey`."
      },
      {
        "statusCode": "4XX",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/surveys/{survey_id}/responses/{response_id}",
    "method": "deleteResponse",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Surveys",
    "typeScriptTag": "surveys",
    "description": "Delete a response",
    "parameters": [
      {
        "name": "surveyId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SURVEY_ID"
      },
      {
        "name": "responseId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "RESPONSE_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "4XX",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/surveys/{survey_id}/responses/{response_id}",
    "method": "getResponse",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Surveys",
    "typeScriptTag": "surveys",
    "description": "Get response",
    "parameters": [
      {
        "name": "surveyId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SURVEY_ID"
      },
      {
        "name": "responseId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "RESPONSE_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The model used to create a serialised representation a `Response`."
      },
      {
        "statusCode": "4XX",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/users/me",
    "method": "getUser",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Retrieve a user",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "4XX",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/eligibility-requirements",
    "method": "getAllRequirements",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Eligibility requirements",
    "typeScriptTag": "eligibilityRequirements",
    "description": "Get list of all requirements.",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "4XX",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/messages",
    "method": "getMessages",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Messages",
    "typeScriptTag": "messages",
    "description": "Retrieve messages",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": false,
        "description": "Another user ID, must be provided if no created_after date is provided."
      },
      {
        "name": "createdAfter",
        "schema": "string",
        "required": false,
        "description": "Only fetch messages created after timestamp. Datetime in ISO8601 format. Must be provided if no user_id is provided. You can only fetch up to the last 30 days of messages."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "4XX",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/messages",
    "method": "sendNewMessage",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Messages",
    "typeScriptTag": "messages",
    "description": "Send a message",
    "parameters": [
      {
        "name": "recipient_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "RECIPIENT_ID"
      },
      {
        "name": "body",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "BODY"
      },
      {
        "name": "study_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "STUDY_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "The message has been sent"
      },
      {
        "statusCode": "4XX",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/messages/unread",
    "method": "getUnread",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Messages",
    "typeScriptTag": "messages",
    "description": "Retrieve unread messages",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "4XX",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/messages/bulk",
    "method": "sendToMultipleParticipants",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Messages",
    "typeScriptTag": "messages",
    "description": "Send a message to multiple participants",
    "parameters": [
      {
        "name": "ids",
        "schema": "array",
        "required": true,
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
        "name": "study_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "STUDY_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "The message has been sent"
      },
      {
        "statusCode": "4XX",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/projects/{project_id}/studies",
    "method": "listInProject",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Studies",
    "typeScriptTag": "studies",
    "description": "List all studies in a project",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project id",
        "example": "PROJECT_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "4XX",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/studies",
    "method": "listAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Studies",
    "typeScriptTag": "studies",
    "description": "List all studies",
    "parameters": [
      {
        "name": "state",
        "schema": "string",
        "description": "Filter studies by status. Accepts a string in the format \"(active|published|...)\", where \"active\" and \"published\" are example statuses."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "4XX",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/studies",
    "method": "createDraftStudy",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Studies",
    "typeScriptTag": "studies",
    "description": "Create a draft study",
    "parameters": [],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "4XX",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/studies/{id}/transition",
    "method": "publishDraftStudy",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Studies",
    "typeScriptTag": "studies",
    "description": "Publish a draft study",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Study id",
        "example": "ID"
      },
      {
        "name": "action",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PUBLISH"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "4XX",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/studies/{id}",
    "method": "deleteStudy",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Studies",
    "typeScriptTag": "studies",
    "description": "Delete a study",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Study id",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Deleted"
      },
      {
        "statusCode": "4XX",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/studies/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Studies",
    "typeScriptTag": "studies",
    "description": "Retrieve a study",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Study id",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "4XX",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/studies/{id}",
    "method": "updateStudyDetails",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Studies",
    "typeScriptTag": "studies",
    "description": "Update a study",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Study id",
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
        "name": "internal_name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "external_study_url",
        "schema": "string",
        "description": ""
      },
      {
        "name": "prolific_id_option",
        "schema": "string",
        "description": ""
      },
      {
        "name": "completion_option",
        "schema": "string",
        "description": ""
      },
      {
        "name": "completion_codes",
        "schema": "array",
        "description": ""
      },
      {
        "name": "total_available_places",
        "schema": "number",
        "description": ""
      },
      {
        "name": "estimated_completion_time",
        "schema": "number",
        "description": ""
      },
      {
        "name": "maximum_allowed_time",
        "schema": "number",
        "description": ""
      },
      {
        "name": "reward",
        "schema": "number",
        "description": ""
      },
      {
        "name": "device_compatibility",
        "schema": "array",
        "description": ""
      },
      {
        "name": "peripheral_requirements",
        "schema": "array",
        "description": ""
      },
      {
        "name": "filters",
        "schema": "array",
        "description": ""
      },
      {
        "name": "filter_set_id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "filter_set_version",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "naivety_distribution_rate",
        "schema": "number",
        "description": ""
      },
      {
        "name": "project",
        "schema": "string",
        "description": ""
      },
      {
        "name": "submissions_config",
        "schema": "object",
        "description": ""
      },
      {
        "name": "study_labels",
        "schema": "array",
        "description": ""
      },
      {
        "name": "content_warnings",
        "schema": "array",
        "description": ""
      },
      {
        "name": "content_warning_details",
        "schema": "string",
        "description": ""
      },
      {
        "name": "metadata",
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
        "statusCode": "4XX",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/studies/{id}/submissions",
    "method": "listSubmissions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Studies",
    "typeScriptTag": "studies",
    "description": "List study submissions",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Study id",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "4XX",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/studies/{id}/export",
    "method": "downloadDemographicData",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Studies",
    "typeScriptTag": "studies",
    "description": "Download demographic data",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Study id",
        "example": "ID"
      },
      {
        "name": "method",
        "schema": "string",
        "description": "Method"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A status report if the email method is provided."
      },
      {
        "statusCode": "4XX",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/studies/{id}/clone",
    "method": "duplicateStudy",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Studies",
    "typeScriptTag": "studies",
    "description": "Duplicate a study",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Study id",
        "example": "ID"
      },
      {
        "name": "block_previous_participants",
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
        "statusCode": "4XX",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/study-cost-calculator",
    "method": "calculateStudyCostWithVat",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Studies",
    "typeScriptTag": "studies",
    "description": "Calculate the study cost",
    "parameters": [
      {
        "name": "reward",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "total_available_places",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "4XX",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/submissions",
    "method": "listBasicInfo",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Submissions",
    "typeScriptTag": "submissions",
    "description": "List submissions",
    "parameters": [
      {
        "name": "study",
        "schema": "string",
        "required": false,
        "description": "Optional filter by study ID. This is the ID we pass to the survey platform using %STUDY_ID%"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "4XX",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/submissions/{id}",
    "method": "getDetail",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Submissions",
    "typeScriptTag": "submissions",
    "description": "Retrieve a submission",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Submission id. This is the ID we pass to the survey platform\nusing %SESSION_ID%",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "4XX",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/submissions/{id}/transition",
    "method": "transitionById",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Submissions",
    "typeScriptTag": "submissions",
    "description": "Approve or reject a submission",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Submission id. This is the ID we pass to the survey platform\nusing %SESSION_ID%",
        "example": "ID"
      },
      {
        "name": "action",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "APPROVE"
      },
      {
        "name": "message",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Good explanation of the situation."
      },
      {
        "name": "rejection_category",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "LOW_EFFORT"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "4XX",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/submissions/{id}/request-return",
    "method": "requestReturn",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Submissions",
    "typeScriptTag": "submissions",
    "description": "Request the participant who submitted the response to return their response",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The submission id",
        "example": "ID"
      },
      {
        "name": "request_return_reasons",
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
        "statusCode": "4XX",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/submissions/bulk-approve",
    "method": "bulkApprove",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Submissions",
    "typeScriptTag": "submissions",
    "description": "Bulk approve submissions",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "4XX",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/submissions/bonus-payments",
    "method": "setUpPayments",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Bonuses",
    "typeScriptTag": "bonuses",
    "description": "Set up bonuses",
    "parameters": [
      {
        "name": "study_id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "csv_bonuses",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "4XX",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/bulk-bonus-payments/{id}/pay",
    "method": "makePayment",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Bonuses",
    "typeScriptTag": "bonuses",
    "description": "Pay bonuses",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Bulk bonus payment id",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": ""
      },
      {
        "statusCode": "4XX",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/workspaces",
    "method": "getAllUserWorkspaces",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Workspaces",
    "typeScriptTag": "workspaces",
    "description": "Get all a user's workspaces",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "4XX",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/workspaces",
    "method": "createWorkspaceAdmin",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Workspaces",
    "typeScriptTag": "workspaces",
    "description": "Create a workspace",
    "parameters": [
      {
        "name": "title",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TITLE"
      },
      {
        "name": "naivety_distribution_rate",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "currency_code",
        "schema": "string",
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
        "statusCode": "4XX",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/workspaces/{workspace_id}",
    "method": "getDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Workspaces",
    "typeScriptTag": "workspaces",
    "description": "Get workspace",
    "parameters": [
      {
        "name": "workspaceId",
        "schema": "string",
        "required": true,
        "description": "Workspace id",
        "example": "WORKSPACE_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "4XX",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/workspaces/{workspace_id}",
    "method": "updateDetails",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Workspaces",
    "typeScriptTag": "workspaces",
    "description": "Update a workspace",
    "parameters": [
      {
        "name": "workspaceId",
        "schema": "string",
        "required": true,
        "description": "Workspace id",
        "example": "WORKSPACE_ID"
      },
      {
        "name": "title",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TITLE"
      },
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "owner",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "users",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "projects",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "wallet",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "naivety_distribution_rate",
        "schema": "number",
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
        "statusCode": "4XX",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/workspaces/{workspace_id}/balance",
    "method": "getBalance",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Workspaces",
    "typeScriptTag": "workspaces",
    "description": "Get the balance of a workspace",
    "parameters": [
      {
        "name": "workspaceId",
        "schema": "string",
        "required": true,
        "description": "Workspace id",
        "example": "WORKSPACE_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "4XX",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/workspaces/{workspace_id}/projects",
    "method": "getWorkspaceProjects",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Projects",
    "typeScriptTag": "projects",
    "description": "Get all projects in a workspace",
    "parameters": [
      {
        "name": "workspaceId",
        "schema": "string",
        "required": true,
        "description": "Workspace id",
        "example": "WORKSPACE_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "4XX",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/workspaces/{workspace_id}/projects",
    "method": "createNewProject",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Projects",
    "typeScriptTag": "projects",
    "description": "Create a project",
    "parameters": [
      {
        "name": "workspaceId",
        "schema": "string",
        "required": true,
        "description": "Workspace id",
        "example": "WORKSPACE_ID"
      },
      {
        "name": "title",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TITLE"
      },
      {
        "name": "naivety_distribution_rate",
        "schema": "number",
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
        "statusCode": "4XX",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/projects/{project_id}",
    "method": "getDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Projects",
    "typeScriptTag": "projects",
    "description": "Get project",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project id",
        "example": "PROJECT_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "4XX",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/projects/{project_id}",
    "method": "updateDetails",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Projects",
    "typeScriptTag": "projects",
    "description": "Update a project",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project id",
        "example": "PROJECT_ID"
      },
      {
        "name": "title",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TITLE"
      },
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "owner",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "users",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "workspace",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "naivety_distribution_rate",
        "schema": "number",
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
        "statusCode": "4XX",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/hooks/event-types",
    "method": "listEventTypes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Hooks",
    "typeScriptTag": "hooks",
    "description": "List all subscribable event types",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "4XX",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/hooks/secrets",
    "method": "listSecrets",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Hooks",
    "typeScriptTag": "hooks",
    "description": "List all secrets",
    "parameters": [
      {
        "name": "workspaceId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "WORKSPACE_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "4XX",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/hooks/secrets",
    "method": "createSecret",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Hooks",
    "typeScriptTag": "hooks",
    "description": "Create/replace a secret",
    "parameters": [
      {
        "name": "workspace_id",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "4XX",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/hooks/subscriptions",
    "method": "getAllSubscriptions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Hooks",
    "typeScriptTag": "hooks",
    "description": "List all subscriptions",
    "parameters": [
      {
        "name": "isEnabled",
        "schema": "boolean",
        "required": false,
        "description": "A filter to only pull back enabled subscriptions. Default true."
      },
      {
        "name": "workspaceId",
        "schema": "string",
        "required": false,
        "description": "The Workspace ID we want to get the subscriptions for. If not given, the subscriptions for all of your workspaces will be returned."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "4XX",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/hooks/subscriptions",
    "method": "createSubscription",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Hooks",
    "typeScriptTag": "hooks",
    "description": "Create a subscription",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "event_type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EVENT_TYPE"
      },
      {
        "name": "target_url",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TARGET_URL"
      },
      {
        "name": "is_enabled",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "workspace_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "WORKSPACE_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "4XX",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/hooks/subscriptions/{subscription_id}",
    "method": "deleteSubscription",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Hooks",
    "typeScriptTag": "hooks",
    "description": "Delete a subscription",
    "parameters": [
      {
        "name": "subscriptionId",
        "schema": "string",
        "required": true,
        "description": "Subscription id",
        "example": "SUBSCRIPTION_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Deleted"
      },
      {
        "statusCode": "4XX",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/hooks/subscriptions/{subscription_id}",
    "method": "getSubscription",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Hooks",
    "typeScriptTag": "hooks",
    "description": "Retrieve a subscription",
    "parameters": [
      {
        "name": "subscriptionId",
        "schema": "string",
        "required": true,
        "description": "Subscription id",
        "example": "SUBSCRIPTION_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "4XX",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/hooks/subscriptions/{subscription_id}",
    "method": "updateSubscription",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Hooks",
    "typeScriptTag": "hooks",
    "description": "Update a subscription",
    "parameters": [
      {
        "name": "subscriptionId",
        "schema": "string",
        "required": true,
        "description": "Subscription id",
        "example": "SUBSCRIPTION_ID"
      },
      {
        "name": "event_type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EVENT_TYPE"
      },
      {
        "name": "target_url",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TARGET_URL"
      },
      {
        "name": "is_enabled",
        "schema": "boolean",
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
        "statusCode": "4XX",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/hooks/subscriptions/{subscription_id}",
    "method": "confirmSubscription",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Hooks",
    "typeScriptTag": "hooks",
    "description": "Confirm a subscription",
    "parameters": [
      {
        "name": "subscriptionId",
        "schema": "string",
        "required": true,
        "description": "Subscription id",
        "example": "SUBSCRIPTION_ID"
      },
      {
        "name": "id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "event_type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EVENT_TYPE"
      },
      {
        "name": "target_url",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TARGET_URL"
      },
      {
        "name": "is_enabled",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "workspace_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "WORKSPACE_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "4XX",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/hooks/subscriptions/{subscription_id}/events",
    "method": "getSubscriptionEvents",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Hooks",
    "typeScriptTag": "hooks",
    "description": "Get subscription events",
    "parameters": [
      {
        "name": "subscriptionId",
        "schema": "string",
        "required": true,
        "description": "Subscription id",
        "example": "SUBSCRIPTION_ID"
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "",
        "default": 0
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "",
        "default": 100
      },
      {
        "name": "status",
        "schema": "string",
        "required": false,
        "description": "Filter events by status. Accepts a single status or a JSON array of statuses as a string."
      },
      {
        "name": "resourceId",
        "schema": "string",
        "required": false,
        "description": "Filter events by the ID of the resource for which the event was sent."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "4XX",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/surveys",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Surveys",
    "typeScriptTag": "surveys",
    "description": "Get all surveys",
    "parameters": [
      {
        "name": "researcherId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "RESEARCHER_ID"
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "",
        "default": 0
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "",
        "default": 100
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "4XX",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/surveys",
    "method": "createOrUpdate",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Surveys",
    "typeScriptTag": "surveys",
    "description": "Create survey",
    "parameters": [
      {
        "name": "title",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "A survey about vegetables"
      },
      {
        "name": "researcher_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "7172727272"
      },
      {
        "name": "sections",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "questions",
        "schema": "array",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "The model used to create a serialised representation a `Survey`."
      },
      {
        "statusCode": "4XX",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/surveys/{survey_id}/responses",
    "method": "deleteAllResponses",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Surveys",
    "typeScriptTag": "surveys",
    "description": "Delete all responses",
    "parameters": [
      {
        "name": "surveyId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SURVEY_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "4XX",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/surveys/{survey_id}/responses",
    "method": "getAllResponses",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Surveys",
    "typeScriptTag": "surveys",
    "description": "Get all responses",
    "parameters": [
      {
        "name": "surveyId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SURVEY_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "4XX",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/surveys/{survey_id}/responses",
    "method": "createResponse",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Surveys",
    "typeScriptTag": "surveys",
    "description": "Create response",
    "parameters": [
      {
        "name": "surveyId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SURVEY_ID"
      },
      {
        "name": "participant_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "62908f0b98a55b36ac68b992"
      },
      {
        "name": "sections",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "questions",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "submission_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "62908f0b98a55b36ac68b992"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "The model used to create a serialised representation a `Response`."
      },
      {
        "statusCode": "4XX",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/surveys/{survey_id}/responses/summary",
    "method": "getSummaryResponses",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Surveys",
    "typeScriptTag": "surveys",
    "description": "Get summary of responses",
    "parameters": [
      {
        "name": "surveyId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SURVEY_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Responsible for providing a base for all the aggregated answers for a survey."
      },
      {
        "statusCode": "4XX",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/participant-groups",
    "method": "listAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Participant Groups",
    "typeScriptTag": "participantGroups",
    "description": "Get a list of all participant groups within a project or workspace",
    "parameters": [
      {
        "name": "active",
        "schema": "string",
        "required": false,
        "description": "Filter by the active (not deleted) status of the participant group."
      },
      {
        "name": "filter",
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
        "statusCode": "4XX",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/participant-groups",
    "method": "createNewGroup",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Participant Groups",
    "typeScriptTag": "participantGroups",
    "description": "Create a new participant group within a workspace",
    "parameters": [
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Participants with confirmed special dietary requirements."
      },
      {
        "name": "workspace_id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "organisation_id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Group 1"
      },
      {
        "name": "participant_ids",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "5e9b9c9b0f9c9a0001b0b1f4",
          "5e9b9c9b0f9c9a0001b0b1f5",
          "5e9b9c9b0f9c9a0001b0b1f6"
        ]
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "4XX",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/participant-groups/{id}",
    "method": "removeGroup",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Participant Groups",
    "typeScriptTag": "participantGroups",
    "description": "Delete a participant group",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The id of the participant group",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Deleted"
      },
      {
        "statusCode": "4XX",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/participant-groups/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Participant Groups",
    "typeScriptTag": "participantGroups",
    "description": "Get a participant group",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The id of the participant group",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "4XX",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/participant-groups/{id}",
    "method": "updateGroupById",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Participant Groups",
    "typeScriptTag": "participantGroups",
    "description": "Update a participant group",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The id of the participant group",
        "example": "ID"
      },
      {
        "name": "name",
        "schema": "string",
        "description": "",
        "example": "Group 1"
      },
      {
        "name": "participant_ids",
        "schema": "array",
        "description": "",
        "example": [
          "5e9b9c9b0f9c9a0001b0b1f4",
          "5e9b9c9b0f9c9a0001b0b1f5",
          "5e9b9c9b0f9c9a0001b0b1f6"
        ]
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "4XX",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/participant-groups/{id}/participants",
    "method": "removeParticipants",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Participant Groups",
    "typeScriptTag": "participantGroups",
    "description": "Remove participants from a participant group",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The id of the participant group to remove the participant(https://docs.prolific.com/docs/api-docs/public/ from",
        "example": "ID"
      },
      {
        "name": "participant_ids",
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
        "statusCode": "4XX",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/participant-groups/{id}/participants",
    "method": "getAllParticipants",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Participant Groups",
    "typeScriptTag": "participantGroups",
    "description": "Get a list of all participants within a participant group",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The id of the participant group to get participants for",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "4XX",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/participant-groups/{id}/participants",
    "method": "addParticipantsToGroup",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Participant Groups",
    "typeScriptTag": "participantGroups",
    "description": "Add participants to a participant group",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The id of the participant group to add the participant to",
        "example": "ID"
      },
      {
        "name": "participant_ids",
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
        "statusCode": "4XX",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/invitations",
    "method": "initiateProcess",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Invitations",
    "typeScriptTag": "invitations",
    "description": "Create a new invitation",
    "parameters": [
      {
        "name": "association",
        "schema": "string",
        "description": ""
      },
      {
        "name": "emails",
        "schema": "array",
        "description": ""
      },
      {
        "name": "role",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "4XX",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/filters",
    "method": "listAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Filters",
    "typeScriptTag": "filters",
    "description": "List all filters",
    "parameters": [
      {
        "name": "detailed",
        "schema": "string",
        "required": false,
        "description": "Include extra information required to sort and categorise filters in the Prolific app. This is not required for API use. Default false."
      },
      {
        "name": "workspaceId",
        "schema": "string",
        "required": false,
        "description": "The workspace ID for the workspace you are creating a study or filterset in. This is used to get contextual data such as previous studies and participant groups."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "4XX",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/filter-sets",
    "method": "listAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Filter Sets",
    "typeScriptTag": "filterSets",
    "description": "List all filter sets",
    "parameters": [
      {
        "name": "workspaceId",
        "schema": "string",
        "description": "ID of the workspace to get filter sets for."
      },
      {
        "name": "organisationId",
        "schema": "string",
        "description": "ID of the organisation to get filter sets for."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "4XX",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/filter-sets",
    "method": "createFromFilters",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Filter Sets",
    "typeScriptTag": "filterSets",
    "description": "Create filter set",
    "parameters": [],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "4XX",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/filter-sets/{id}",
    "method": "deleteSet",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Filter Sets",
    "typeScriptTag": "filterSets",
    "description": "Delete filter set",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "ID of the filter set.",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Deleted the filter set"
      },
      {
        "statusCode": "4XX",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/filter-sets/{id}",
    "method": "getDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Filter Sets",
    "typeScriptTag": "filterSets",
    "description": "Get filter set",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "ID of the filter set.",
        "example": "ID"
      },
      {
        "name": "versionNumber",
        "schema": "integer",
        "required": false,
        "description": "Allows you to specify a specific version of the filter set to retrieve."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "4XX",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/filter-sets/{id}",
    "method": "updateDetails",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Filter Sets",
    "typeScriptTag": "filterSets",
    "description": "Update filter set",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "ID of the filter set.",
        "example": "ID"
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "filters",
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
        "statusCode": "4XX",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/filter-sets/{id}/clone",
    "method": "cloneFilterSet",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Filter Sets",
    "typeScriptTag": "filterSets",
    "description": "Clone filter set",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "ID of the filter set.",
        "example": "ID"
      },
      {
        "name": "new_name",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "4XX",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/filter-sets/{id}/lock",
    "method": "lockForEditing",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Filter Sets",
    "typeScriptTag": "filterSets",
    "description": "Lock filter set for editing",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "ID of the filter set.",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "4XX",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/filter-sets/{id}/unlock",
    "method": "unlockForEditing",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Filter Sets",
    "typeScriptTag": "filterSets",
    "description": "Unlock filter set for editing",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "ID of the filter set.",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "4XX",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/eligibility-count",
    "method": "countParticipantsMeetingFilters",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Filters",
    "typeScriptTag": "filters",
    "description": "Count participants",
    "parameters": [
      {
        "name": "filters",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "workspace_id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "organisation_id",
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
        "statusCode": "4XX",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/study-collections/mutually-exclusive",
    "method": "listMutuallyExclusive",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Study Collections",
    "typeScriptTag": "studyCollections",
    "description": "List mutually exclusive study collections in a project",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "65786062db3b35bcbeb07bcc"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "4XX",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/study-collections/mutually-exclusive",
    "method": "createMutuallyExclusiveCollection",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Study Collections",
    "typeScriptTag": "studyCollections",
    "description": "Create a mutually exclusive study collection.",
    "parameters": [
      {
        "name": "description",
        "schema": "string",
        "description": "",
        "example": "This is a description of my mutually exclusive study collection"
      },
      {
        "name": "name",
        "schema": "string",
        "description": "",
        "example": "My Mutually Exclusive Study Collection"
      },
      {
        "name": "publish_at",
        "schema": "string",
        "description": "",
        "example": "2050-02-28T13:45:00 Europe/London"
      },
      {
        "name": "study_ids",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "4XX",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/study-collections/mutually-exclusive/{id}",
    "method": "deleteMutuallyExclusive",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Study Collections",
    "typeScriptTag": "studyCollections",
    "description": "Delete a mutually exclusive study collection",
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
        "statusCode": "204",
        "description": "Deleted"
      },
      {
        "statusCode": "4XX",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/study-collections/mutually-exclusive/{id}",
    "method": "getMutuallyExclusive",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Study Collections",
    "typeScriptTag": "studyCollections",
    "description": "Get a mutually exclusive study collection",
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
        "statusCode": "4XX",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/study-collections/mutually-exclusive/{id}",
    "method": "updateMutuallyExclusive",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Study Collections",
    "typeScriptTag": "studyCollections",
    "description": "Update a mutually exclusive study collection",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "description",
        "schema": "string",
        "description": "",
        "example": "This is a description of my mutually exclusive study collection"
      },
      {
        "name": "name",
        "schema": "string",
        "description": "",
        "example": "My Mutually Exclusive Study Collection"
      },
      {
        "name": "publish_at",
        "schema": "string",
        "description": "",
        "example": "2050-02-28T13:45:00 Europe/London"
      },
      {
        "name": "study_ids",
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
        "statusCode": "4XX",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/study-collections/mutually-exclusive/{id}/transition",
    "method": "transitionMutuallyExclusive",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Study Collections",
    "typeScriptTag": "studyCollections",
    "description": "Transition a mutually exclusive study collection",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "action",
        "schema": "string",
        "description": ""
      },
      {
        "name": "publish_at",
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
        "statusCode": "4XX",
        "description": ""
      }
    ]
  }
]
    }
      language="TypeScript"
      apiTitle="Prolific API for researchers"
      apiBaseUrl="https://api.prolific.com"
      apiVersion="1.0"
      endpoints={49}
      sdkMethods={100}
      schemas={115}
      parameters={241}
      difficulty="Hard"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/prolific/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/prolific/openapi.yaml"
      developerDocumentation="docs.prolific.com/docs/api-docs/public/"
    />
  );
}
  