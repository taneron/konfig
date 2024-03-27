import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function WorkdayPerformanceEnablementTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="workday-performance-enablement-typescript-sdk"
      metaDescription={`Workday is a leading provider of enterprise cloud applications for finance and human resources, helping customers adapt and thrive in a changing world. Workday applications for financial management, human resources, planning, spend management, and analytics are built with artificial intelligence and machine learning at the core to help organizations around the world embrace the future of work. Workday is used by more than 10,000 organizations around the world and across industries – from medium-sized businesses to more than 50% of the Fortune 500.`}
      company="Workday"
      serviceName="PerformanceEnablement"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/workday/performance-enablement/logo.png"
      companyKebabCase="workday"
      clientNameCamelCase="workdayPerformanceEnablement"
      homepage="workday.com"
      lastUpdated={new Date("2024-03-27T18:00:59.706Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/workday/performance-enablement/favicon.png"
      // Missing contactUrl
      // Missing contactEmail
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/workday/performance-enablement/imagePreview.jpg"
      GettingStarted={GettingStarted}
      FirstRequest={FirstRequest}
      categories={["hr"]}
      methods={[
  {
    "url": "/feedbackBadges",
    "method": "getCollection",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "feedbackBadges",
    "typeScriptTag": "feedbackBadges",
    "description": "Retrieves a collection of active Feedback Badges.",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "The maximum number of objects in a single response. The default is 20. The maximum is 100."
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "The zero-based index of the first object in a response collection. The default is 0. Use offset with the limit parameter to control paging of a response collection. Example: If limit is 5 and offset is 9, the response returns a collection of 5 objects starting with the 10th object."
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/workers/{ID}/requestedFeedbackOnSelfEvents/{subresourceID}",
    "method": "getSelfRequestedFeedbackEvent",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "workers",
    "typeScriptTag": "workers",
    "description": "Retrieves a single self-requested feedback event instance for the specified worker.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the resource.",
        "example": "ID"
      },
      {
        "name": "subresourceId",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the subresource.",
        "example": "SUBRESOURCEID"
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/giveRequestedFeedbackEvents",
    "method": "getCollectionFeedbackEvents",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "giveRequestedFeedbackEvents",
    "typeScriptTag": "giveRequestedFeedbackEvents",
    "description": "Retrieves a collection of feedback given events about the user that responded to the feedback request.",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "The maximum number of objects in a single response. The default is 20. The maximum is 100."
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "The zero-based index of the first object in a response collection. The default is 0. Use offset with the limit parameter to control paging of a response collection. Example: If limit is 5 and offset is 9, the response returns a collection of 5 objects starting with the 10th object."
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/feedbackBadges/{ID}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "feedbackBadges",
    "typeScriptTag": "feedbackBadges",
    "description": "Retrieves a Feedback Badge with the specified ID.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the resource.",
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/workers/{ID}/goals",
    "method": "getGoals",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "workers",
    "typeScriptTag": "workers",
    "description": "Retrieves a collection of goals for a specific worker.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the resource.",
        "example": "ID"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "The maximum number of objects in a single response. The default is 20. The maximum is 100."
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "The zero-based index of the first object in a response collection. The default is 0. Use offset with the limit parameter to control paging of a response collection. Example: If limit is 5 and offset is 9, the response returns a collection of 5 objects starting with the 10th object."
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/workers/{ID}/requestedFeedbackOnSelfEvents",
    "method": "getSelfRequestedFeedback",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "workers",
    "typeScriptTag": "workers",
    "description": "Retrieves a collection of self-requested feedback events for the specified worker.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the resource.",
        "example": "ID"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "The maximum number of objects in a single response. The default is 20. The maximum is 100."
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "The zero-based index of the first object in a response collection. The default is 0. Use offset with the limit parameter to control paging of a response collection. Example: If limit is 5 and offset is 9, the response returns a collection of 5 objects starting with the 10th object."
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/workers/{ID}/requestedFeedbackOnSelfEvents",
    "method": "requestFeedbackOnSelfEvents",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "workers",
    "typeScriptTag": "workers",
    "description": "Secured by: Get Feedback on Self REST+TG\n\nScope: Performance Enablement, Worker Profile and Skills",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the resource.",
        "example": "ID"
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/workers/{ID}/requestedFeedbackOnWorkerEvents/{subresourceID}",
    "method": "getRequestedEvent",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "workers",
    "typeScriptTag": "workers",
    "description": "Retrieves a single requested feedback event instance for the specified worker.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the resource.",
        "example": "ID"
      },
      {
        "name": "subresourceId",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the subresource.",
        "example": "SUBRESOURCEID"
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/workers/{ID}/goals/{subresourceID}",
    "method": "getSingleGoal",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "workers",
    "typeScriptTag": "workers",
    "description": "Retrieves a single goal instance for a specific worker.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the resource.",
        "example": "ID"
      },
      {
        "name": "subresourceId",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the subresource.",
        "example": "SUBRESOURCEID"
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/workers/{ID}/anytimeFeedbackEvents/{subresourceID}",
    "method": "getFeedbackEvent",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "workers",
    "typeScriptTag": "workers",
    "description": "Retrieves a feedback given event instance with the specified ID.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the resource.",
        "example": "ID"
      },
      {
        "name": "subresourceId",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the subresource.",
        "example": "SUBRESOURCEID"
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/workers/{ID}",
    "method": "getStaffingInformation",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "workers",
    "typeScriptTag": "workers",
    "description": "Retrieves a collection of workers and current staffing information.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the resource.",
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/workers/{ID}/requestedFeedbackOnWorkerEvents",
    "method": "getRequestedFeedbackEvents",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "workers",
    "typeScriptTag": "workers",
    "description": "Retrieves a collection of requested feedback events for the specified worker.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the resource.",
        "example": "ID"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "The maximum number of objects in a single response. The default is 20. The maximum is 100."
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "The zero-based index of the first object in a response collection. The default is 0. Use offset with the limit parameter to control paging of a response collection. Example: If limit is 5 and offset is 9, the response returns a collection of 5 objects starting with the 10th object."
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/workers/{ID}/requestedFeedbackOnWorkerEvents",
    "method": "requestFeedbackOnWorkerEvents",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "workers",
    "typeScriptTag": "workers",
    "description": "Not applicable.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the resource.",
        "example": "ID"
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/workers",
    "method": "getCollectionStaffing",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "workers",
    "typeScriptTag": "workers",
    "description": "Retrieves a collection of workers and current staffing information.",
    "parameters": [
      {
        "name": "includeTerminatedWorkers",
        "schema": "boolean",
        "required": false,
        "description": "Include terminated workers in the output"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "The maximum number of objects in a single response. The default is 20. The maximum is 100."
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "The zero-based index of the first object in a response collection. The default is 0. Use offset with the limit parameter to control paging of a response collection. Example: If limit is 5 and offset is 9, the response returns a collection of 5 objects starting with the 10th object."
      },
      {
        "name": "search",
        "schema": "string",
        "required": false,
        "description": "Searches workers by name or worker ID. The search is case-insensitive. You can include space-delimited search strings for an OR search."
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/workers/{ID}/anytimeFeedbackEvents",
    "method": "getFeedbackEvents",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "workers",
    "typeScriptTag": "workers",
    "description": "Retrieves a collection of feedback given events about the specified worker.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the resource.",
        "example": "ID"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "The maximum number of objects in a single response. The default is 20. The maximum is 100."
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "The zero-based index of the first object in a response collection. The default is 0. Use offset with the limit parameter to control paging of a response collection. Example: If limit is 5 and offset is 9, the response returns a collection of 5 objects starting with the 10th object."
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/workers/{ID}/anytimeFeedbackEvents",
    "method": "createFeedbackEvent",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "workers",
    "typeScriptTag": "workers",
    "description": "Creates a single feedback given event instance about the specified worker.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the resource.",
        "example": "ID"
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/giveRequestedFeedbackEvents/{ID}",
    "method": "getInstance",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "giveRequestedFeedbackEvents",
    "typeScriptTag": "giveRequestedFeedbackEvents",
    "description": "Retrieves a single requested feedback given event instance with the specified ID of the user that responded to the feedback request.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the resource.",
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/giveRequestedFeedbackEvents/{ID}",
    "method": "updateEvent",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "giveRequestedFeedbackEvents",
    "typeScriptTag": "giveRequestedFeedbackEvents",
    "description": "Updates the Give Requested Feedback Event that matches the WID in the url, and the current authenticated user is a responder for the event.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The Workday ID of the resource.",
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/values/workersToNotify/workersToNotify",
    "method": "getInstances",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Prompt Values",
    "typeScriptTag": "promptValues",
    "description": "Retrieves instances that can be used as values for other endpoint parameters in this service.",
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/values/feedbackTemplate/feedbackTemplate",
    "method": "getInstances",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Prompt Values",
    "typeScriptTag": "promptValues",
    "description": "Retrieves instances that can be used as values for other endpoint parameters in this service.",
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/values/feedbackOnWorker/feedbackOnWorker",
    "method": "getInstances",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Prompt Values",
    "typeScriptTag": "promptValues",
    "description": "Retrieves instances that can be used as values for other endpoint parameters in this service.",
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/values/feedbackResponder/feedbackResponder",
    "method": "getInstances",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Prompt Values",
    "typeScriptTag": "promptValues",
    "description": "Retrieves instances that can be used as values for other endpoint parameters in this service.",
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/values/relatesTo/relatesTo",
    "method": "getInstances",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Prompt Values",
    "typeScriptTag": "promptValues",
    "description": "Retrieves instances that can be used as values for other endpoint parameters in this service.",
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  }
]
    }
      language="TypeScript"
      apiTitle="performanceEnablement"
      apiBaseUrl="https://<tenantHostname>/performanceEnablement/v5"
      apiVersion="v5"
      endpoints={19}
      sdkMethods={32}
      schemas={88}
      parameters={35}
      difficulty="Easy"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/workday/performance-enablement/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/workday/performance-enablement/openapi.yaml"
      developerDocumentation="community.workday.com/sites/default/files/file-hosting/restapi"
    />
  );
}
  