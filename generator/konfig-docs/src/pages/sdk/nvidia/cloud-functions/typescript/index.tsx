import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function NvidiaCloudFunctionsTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="nvidia-cloud-functions-typescript-sdk"
      metaDescription={`Since its founding in 1993, NVIDIA (NASDAQ: NVDA) has been a pioneer in accelerated computing. The company's invention of the GPU in 1999 sparked the growth of the PC gaming market, redefined computer graphics, ignited the era of modern AI and is fueling the creation of the metaverse. NVIDIA is now a full-stack computing company with data-center-scale offerings that are reshaping industry.`}
      company="NVIDIA"
      serviceName="CloudFunctions"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/nvidia/cloud-functions/logo.png"
      companyKebabCase="nvidia"
      clientNameCamelCase="nvidiaCloudFunctions"
      homepage="www.nvidia.com/en-us/ai/"
      lastUpdated={new Date("2024-03-21T17:22:57.081Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/nvidia/cloud-functions/favicon.png"
      contactUrl="https://www.nvidia.com/"
      // Missing contactEmail
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/nvidia/cloud-functions/imagePreview.jpg"
      GettingStarted={GettingStarted}
      FirstRequest={FirstRequest}
      categories={["gpu","artificial_intelligence","deep_learning","parallel_computing","gpuaccelerated_computing","ai"]}
      methods={[
  {
    "url": "/v2/nvcf/deployments/functions/{functionId}/versions/{functionVersionId}",
    "method": "deleteByIdAndVersion",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Function Deployment",
    "typeScriptTag": "functionDeployment",
    "description": "Delete Function Deployment",
    "parameters": [
      {
        "name": "functionId",
        "schema": "string",
        "required": true,
        "description": "Function id",
        "example": "FUNCTIONID"
      },
      {
        "name": "functionVersionId",
        "schema": "string",
        "required": true,
        "description": "Function version id",
        "example": "FUNCTIONVERSIONID"
      },
      {
        "name": "graceful",
        "schema": "boolean",
        "required": false,
        "description": "Query param to deactivate function for graceful shutdown",
        "default": false
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Response body with function details"
      }
    ]
  },
  {
    "url": "/v2/nvcf/deployments/functions/{functionId}/versions/{functionVersionId}",
    "method": "details",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Function Deployment",
    "typeScriptTag": "functionDeployment",
    "description": "Get Function Deployment Details",
    "parameters": [
      {
        "name": "functionId",
        "schema": "string",
        "required": true,
        "description": "Function id",
        "example": "FUNCTIONID"
      },
      {
        "name": "functionVersionId",
        "schema": "string",
        "required": true,
        "description": "Function version id",
        "example": "FUNCTIONVERSIONID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Function Deployment Response"
      }
    ]
  },
  {
    "url": "/v2/nvcf/deployments/functions/{functionId}/versions/{functionVersionId}",
    "method": "initiateDeploymentForVersion",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Function Deployment",
    "typeScriptTag": "functionDeployment",
    "description": "Deploy Function",
    "parameters": [
      {
        "name": "functionId",
        "schema": "string",
        "required": true,
        "description": "Function id",
        "example": "FUNCTIONID"
      },
      {
        "name": "functionVersionId",
        "schema": "string",
        "required": true,
        "description": "Function version id",
        "example": "FUNCTIONVERSIONID"
      },
      {
        "name": "deploymentSpecifications",
        "schema": "array",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Function Deployment Response"
      }
    ]
  },
  {
    "url": "/v2/nvcf/deployments/functions/{functionId}/versions/{functionVersionId}",
    "method": "updateSpecs",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Function Deployment",
    "typeScriptTag": "functionDeployment",
    "description": "Update Function Deployment",
    "parameters": [
      {
        "name": "functionId",
        "schema": "string",
        "required": true,
        "description": "Function id",
        "example": "FUNCTIONID"
      },
      {
        "name": "functionVersionId",
        "schema": "string",
        "required": true,
        "description": "Function version id",
        "example": "FUNCTIONVERSIONID"
      },
      {
        "name": "deploymentSpecifications",
        "schema": "array",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Function Deployment Response"
      }
    ]
  },
  {
    "url": "/v2/nvcf/pexec/functions/{functionId}",
    "method": "invokeFunction",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Function Invocation",
    "typeScriptTag": "functionInvocation",
    "description": "Call Function",
    "parameters": [
      {
        "name": "nvcfInputAssetReferences",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "functionId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FUNCTIONID"
      },
      {
        "name": "nvcfPollSeconds",
        "schema": "integer",
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
        "statusCode": "202",
        "description": ""
      },
      {
        "statusCode": "302",
        "description": ""
      },
      {
        "statusCode": "402",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/nvcf/pexec/functions/{functionId}/versions/{versionId}",
    "method": "invokeFunction",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Function Invocation",
    "typeScriptTag": "functionInvocation",
    "description": "Call Function",
    "parameters": [
      {
        "name": "nvcfInputAssetReferences",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "functionId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FUNCTIONID"
      },
      {
        "name": "versionId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "VERSIONID"
      },
      {
        "name": "nvcfPollSeconds",
        "schema": "integer",
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
        "statusCode": "202",
        "description": ""
      },
      {
        "statusCode": "302",
        "description": ""
      },
      {
        "statusCode": "402",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/nvcf/exec/functions/{functionId}",
    "method": "callFunction",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Envelope Function Invocation",
    "typeScriptTag": "envelopeFunctionInvocation",
    "description": "Call Function",
    "parameters": [
      {
        "name": "functionId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FUNCTIONID"
      },
      {
        "name": "requestBody",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "requestHeader",
        "schema": "object",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Response body with result from a request for executing a job/task as a cloud function using a GPU powered spot/on-demand instance."
      },
      {
        "statusCode": "202",
        "description": "Response body with result from a request for executing a job/task as a cloud function using a GPU powered spot/on-demand instance."
      },
      {
        "statusCode": "302",
        "description": "Response body with result from a request for executing a job/task as a cloud function using a GPU powered spot/on-demand instance."
      },
      {
        "statusCode": "402",
        "description": "Response body with result from a request for executing a job/task as a cloud function using a GPU powered spot/on-demand instance."
      },
      {
        "statusCode": "403",
        "description": "Response body with result from a request for executing a job/task as a cloud function using a GPU powered spot/on-demand instance."
      }
    ]
  },
  {
    "url": "/v2/nvcf/exec/functions/{functionId}/versions/{versionId}",
    "method": "invokeFunction",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Envelope Function Invocation",
    "typeScriptTag": "envelopeFunctionInvocation",
    "description": "Call Function",
    "parameters": [
      {
        "name": "functionId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FUNCTIONID"
      },
      {
        "name": "versionId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "VERSIONID"
      },
      {
        "name": "requestBody",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "requestHeader",
        "schema": "object",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Response body with result from a request for executing a job/task as a cloud function using a GPU powered spot/on-demand instance."
      },
      {
        "statusCode": "202",
        "description": "Response body with result from a request for executing a job/task as a cloud function using a GPU powered spot/on-demand instance."
      },
      {
        "statusCode": "302",
        "description": "Response body with result from a request for executing a job/task as a cloud function using a GPU powered spot/on-demand instance."
      },
      {
        "statusCode": "402",
        "description": "Response body with result from a request for executing a job/task as a cloud function using a GPU powered spot/on-demand instance."
      },
      {
        "statusCode": "403",
        "description": "Response body with result from a request for executing a job/task as a cloud function using a GPU powered spot/on-demand instance."
      }
    ]
  },
  {
    "url": "/v2/nvcf/functions/{functionId}/versions",
    "method": "listFunctionVersions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Function Management",
    "typeScriptTag": "functionManagement",
    "description": "List Function Versions",
    "parameters": [
      {
        "name": "functionId",
        "schema": "string",
        "required": true,
        "description": "Function id",
        "example": "FUNCTIONID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Response body containing list of functions"
      }
    ]
  },
  {
    "url": "/v2/nvcf/functions/{functionId}/versions",
    "method": "createFunctionVersion",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Function Management",
    "typeScriptTag": "functionManagement",
    "description": "Create Function Version",
    "parameters": [
      {
        "name": "functionId",
        "schema": "string",
        "required": true,
        "description": "Function id",
        "example": "FUNCTIONID"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "inferenceUrl",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "INFERENCEURL"
      },
      {
        "name": "healthUri",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "inferencePort",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "containerArgs",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "containerEnvironment",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "models",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "containerImage",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "helmChart",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "helmChartServiceName",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "resources",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "apiBodyFormat",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Response body for create function request."
      }
    ]
  },
  {
    "url": "/v2/nvcf/functions",
    "method": "listFunctions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Function Management",
    "typeScriptTag": "functionManagement",
    "description": "List Functions",
    "parameters": [
      {
        "name": "visibility",
        "schema": "array",
        "required": false,
        "description": "Query param 'visibility' indicates the kind of functions to be included  in the response. ",
        "default": [
          "authorized",
          "private",
          "public"
        ]
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Response body containing list of functions"
      }
    ]
  },
  {
    "url": "/v2/nvcf/functions",
    "method": "registerNewFunction",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Function Management",
    "typeScriptTag": "functionManagement",
    "description": "Create Function",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "inferenceUrl",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "INFERENCEURL"
      },
      {
        "name": "healthUri",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "inferencePort",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "containerArgs",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "containerEnvironment",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "models",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "containerImage",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "helmChart",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "helmChartServiceName",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "resources",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "apiBodyFormat",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Response body for create function request."
      }
    ]
  },
  {
    "url": "/v2/nvcf/authorizations/functions/{functionId}/versions/{functionVersionId}",
    "method": "deleteExtraForFunctionVersion",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Authorized Accounts",
    "typeScriptTag": "authorizedAccounts",
    "description": "Delete All Extra Authorizations For Function Version",
    "parameters": [
      {
        "name": "functionId",
        "schema": "string",
        "required": true,
        "description": "Function id",
        "example": "FUNCTIONID"
      },
      {
        "name": "functionVersionId",
        "schema": "string",
        "required": true,
        "description": "Function version",
        "example": "FUNCTIONVERSIONID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Parties authorized to invoke function"
      }
    ]
  },
  {
    "url": "/v2/nvcf/authorizations/functions/{functionId}/versions/{functionVersionId}",
    "method": "functionVersionAuthorizations",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Authorized Accounts",
    "typeScriptTag": "authorizedAccounts",
    "description": "Get Account Authorizations For Function Version",
    "parameters": [
      {
        "name": "functionId",
        "schema": "string",
        "required": true,
        "description": "Function id",
        "example": "FUNCTIONID"
      },
      {
        "name": "functionVersionId",
        "schema": "string",
        "required": true,
        "description": "Function version",
        "example": "FUNCTIONVERSIONID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Parties authorized to invoke function"
      }
    ]
  },
  {
    "url": "/v2/nvcf/authorizations/functions/{functionId}/versions/{functionVersionId}",
    "method": "authorizeFunctionAccounts",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Authorized Accounts",
    "typeScriptTag": "authorizedAccounts",
    "description": "Authorize Accounts To Invoke Function Version",
    "parameters": [
      {
        "name": "functionId",
        "schema": "string",
        "required": true,
        "description": "Function id",
        "example": "FUNCTIONID"
      },
      {
        "name": "functionVersionId",
        "schema": "string",
        "required": true,
        "description": "Function version id",
        "example": "FUNCTIONVERSIONID"
      },
      {
        "name": "authorizedParties",
        "schema": "array",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Parties authorized to invoke function"
      }
    ]
  },
  {
    "url": "/v2/nvcf/authorizations/functions/{functionId}",
    "method": "deleteAllExtraForFunction",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Authorized Accounts",
    "typeScriptTag": "authorizedAccounts",
    "description": "Delete All Extra Authorizations For Function",
    "parameters": [
      {
        "name": "functionId",
        "schema": "string",
        "required": true,
        "description": "Function id",
        "example": "FUNCTIONID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Parties authorized to invoke function"
      }
    ]
  },
  {
    "url": "/v2/nvcf/authorizations/functions/{functionId}",
    "method": "listForFunction",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Authorized Accounts",
    "typeScriptTag": "authorizedAccounts",
    "description": "List Account Authorizations For Function",
    "parameters": [
      {
        "name": "functionId",
        "schema": "string",
        "required": true,
        "description": "Function id",
        "example": "FUNCTIONID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Parties authorized to invoke function"
      }
    ]
  },
  {
    "url": "/v2/nvcf/authorizations/functions/{functionId}",
    "method": "authorizeFunctionAccounts",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Authorized Accounts",
    "typeScriptTag": "authorizedAccounts",
    "description": "Authorize Accounts To Invoke Function",
    "parameters": [
      {
        "name": "functionId",
        "schema": "string",
        "required": true,
        "description": "Function id",
        "example": "FUNCTIONID"
      },
      {
        "name": "authorizedParties",
        "schema": "array",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Parties authorized to invoke function"
      }
    ]
  },
  {
    "url": "/v2/nvcf/assets",
    "method": "listAssets",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Asset Management",
    "typeScriptTag": "assetManagement",
    "description": "List Assets",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "Response body containing list of assets of the current nca id"
      }
    ]
  },
  {
    "url": "/v2/nvcf/assets",
    "method": "createAssetAndUrl",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Asset Management",
    "typeScriptTag": "assetManagement",
    "description": "Create Asset",
    "parameters": [
      {
        "name": "description",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DESCRIPTION"
      },
      {
        "name": "contentType",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CONTENTTYPE"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Response body containing asset-id and the corresponding pre-signed URL to upload an asset of specified content-type to AWS S3 bucket."
      }
    ]
  },
  {
    "url": "/v2/nvcf/authorizations/functions/{functionId}/versions/{functionVersionId}/remove",
    "method": "removePartyForVersion",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Authorized Accounts",
    "typeScriptTag": "authorizedAccounts",
    "description": "Unauthorize Account From Invoking Function Version",
    "parameters": [
      {
        "name": "functionId",
        "schema": "string",
        "required": true,
        "description": "Function id",
        "example": "FUNCTIONID"
      },
      {
        "name": "functionVersionId",
        "schema": "string",
        "required": true,
        "description": "Function version",
        "example": "FUNCTIONVERSIONID"
      },
      {
        "name": "authorizedParty",
        "schema": "object",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Parties authorized to invoke function"
      }
    ]
  },
  {
    "url": "/v2/nvcf/authorizations/functions/{functionId}/versions/{functionVersionId}/add",
    "method": "addAccountToFunctionVersion",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Authorized Accounts",
    "typeScriptTag": "authorizedAccounts",
    "description": "Authorize Additional Account To Invoke Function Version",
    "parameters": [
      {
        "name": "functionId",
        "schema": "string",
        "required": true,
        "description": "Function id",
        "example": "FUNCTIONID"
      },
      {
        "name": "functionVersionId",
        "schema": "string",
        "required": true,
        "description": "Function version",
        "example": "FUNCTIONVERSIONID"
      },
      {
        "name": "authorizedParty",
        "schema": "object",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Parties authorized to invoke function"
      }
    ]
  },
  {
    "url": "/v2/nvcf/authorizations/functions/{functionId}/remove",
    "method": "removeFromFunctionAuthorization",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Authorized Accounts",
    "typeScriptTag": "authorizedAccounts",
    "description": "Unauthorize Account From Invoking Function",
    "parameters": [
      {
        "name": "functionId",
        "schema": "string",
        "required": true,
        "description": "Function id",
        "example": "FUNCTIONID"
      },
      {
        "name": "authorizedParty",
        "schema": "object",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Parties authorized to invoke function"
      }
    ]
  },
  {
    "url": "/v2/nvcf/authorizations/functions/{functionId}/add",
    "method": "addAccountToFunction",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Authorized Accounts",
    "typeScriptTag": "authorizedAccounts",
    "description": "Authorize Additional Account To Invoke Function",
    "parameters": [
      {
        "name": "functionId",
        "schema": "string",
        "required": true,
        "description": "Function id",
        "example": "FUNCTIONID"
      },
      {
        "name": "authorizedParty",
        "schema": "object",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Parties authorized to invoke function"
      }
    ]
  },
  {
    "url": "/v2/nvcf/queues/functions/{functionId}/versions/{versionId}",
    "method": "getAllQueuesDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Queue Details",
    "typeScriptTag": "queueDetails",
    "description": "Queue Details",
    "parameters": [
      {
        "name": "functionId",
        "schema": "string",
        "required": true,
        "description": "Function id",
        "example": "FUNCTIONID"
      },
      {
        "name": "versionId",
        "schema": "string",
        "required": true,
        "description": "Function version id",
        "example": "VERSIONID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Request queue details of all the functions with same id in an account"
      }
    ]
  },
  {
    "url": "/v2/nvcf/queues/functions/{functionId}",
    "method": "functionQueuesDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Queue Details",
    "typeScriptTag": "queueDetails",
    "description": "Queue Details",
    "parameters": [
      {
        "name": "functionId",
        "schema": "string",
        "required": true,
        "description": "Function id",
        "example": "FUNCTIONID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Request queue details of all the functions with same id in an account"
      }
    ]
  },
  {
    "url": "/v2/nvcf/queues/{requestId}/position",
    "method": "getQueuePositionByRequestId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Queue Details",
    "typeScriptTag": "queueDetails",
    "description": "Queue Position",
    "parameters": [
      {
        "name": "requestId",
        "schema": "string",
        "required": true,
        "description": "Function invocation request id",
        "example": "REQUESTID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Request position in queue for invocation request"
      }
    ]
  },
  {
    "url": "/v2/nvcf/pexec/status/{requestId}",
    "method": "pollForResultUsingFunctionInvocationRequest",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Function Invocation",
    "typeScriptTag": "functionInvocation",
    "description": "Poll For Result Using Function Invocation Request",
    "parameters": [
      {
        "name": "requestId",
        "schema": "string",
        "required": true,
        "description": "Function invocation request id",
        "example": "REQUESTID"
      },
      {
        "name": "nvcfPollSeconds",
        "schema": "integer",
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
        "statusCode": "202",
        "description": ""
      },
      {
        "statusCode": "302",
        "description": ""
      },
      {
        "statusCode": "402",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/nvcf/functions/{functionId}/versions/{functionVersionId}",
    "method": "deleteFunctionVersion",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Function Management",
    "typeScriptTag": "functionManagement",
    "description": "Delete Function",
    "parameters": [
      {
        "name": "functionId",
        "schema": "string",
        "required": true,
        "description": "Function id",
        "example": "FUNCTIONID"
      },
      {
        "name": "functionVersionId",
        "schema": "string",
        "required": true,
        "description": "Version id",
        "example": "FUNCTIONVERSIONID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
      }
    ]
  },
  {
    "url": "/v2/nvcf/functions/{functionId}/versions/{functionVersionId}",
    "method": "getVersionDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Function Management",
    "typeScriptTag": "functionManagement",
    "description": "Get Function Version Details",
    "parameters": [
      {
        "name": "functionId",
        "schema": "string",
        "required": true,
        "description": "Function id",
        "example": "FUNCTIONID"
      },
      {
        "name": "functionVersionId",
        "schema": "string",
        "required": true,
        "description": "Version id ",
        "example": "FUNCTIONVERSIONID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Response body with function details"
      }
    ]
  },
  {
    "url": "/v2/nvcf/functions/ids",
    "method": "listFunctionIds",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Function Management",
    "typeScriptTag": "functionManagement",
    "description": "List Function Ids",
    "parameters": [
      {
        "name": "visibility",
        "schema": "array",
        "required": false,
        "description": "Query param 'visibility' indicates the kind of functions to be included  in the response. ",
        "default": [
          "authorized",
          "private",
          "public"
        ]
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Response body containing list of function ids in an account"
      }
    ]
  },
  {
    "url": "/v2/nvcf/exec/status/{requestId}",
    "method": "pollForResultUsingFunctionInvocationRequest",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Envelope Function Invocation",
    "typeScriptTag": "envelopeFunctionInvocation",
    "description": "Poll For Result Using Function Invocation Request",
    "parameters": [
      {
        "name": "requestId",
        "schema": "string",
        "required": true,
        "description": "Function invocation request id",
        "example": "REQUESTID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Response body with result from a request for executing a job/task as a cloud function using a GPU powered spot/on-demand instance."
      },
      {
        "statusCode": "202",
        "description": "Response body with result from a request for executing a job/task as a cloud function using a GPU powered spot/on-demand instance."
      },
      {
        "statusCode": "302",
        "description": "Response body with result from a request for executing a job/task as a cloud function using a GPU powered spot/on-demand instance."
      },
      {
        "statusCode": "402",
        "description": "Response body with result from a request for executing a job/task as a cloud function using a GPU powered spot/on-demand instance."
      },
      {
        "statusCode": "403",
        "description": "Response body with result from a request for executing a job/task as a cloud function using a GPU powered spot/on-demand instance."
      }
    ]
  },
  {
    "url": "/v2/nvcf/clusterGroups",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Cluster Groups and GPUs",
    "typeScriptTag": "clusterGroupsAndGpUs",
    "description": "List Cluster Groups",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/nvcf/assets/{assetId}",
    "method": "deleteAssetById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Asset Management",
    "typeScriptTag": "assetManagement",
    "description": "Delete Asset",
    "parameters": [
      {
        "name": "assetId",
        "schema": "string",
        "required": true,
        "description": "Id of the asset to be deleted",
        "example": "ASSETID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
      }
    ]
  },
  {
    "url": "/v2/nvcf/assets/{assetId}",
    "method": "showDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Asset Management",
    "typeScriptTag": "assetManagement",
    "description": "Show Asset Details",
    "parameters": [
      {
        "name": "assetId",
        "schema": "string",
        "required": true,
        "description": "Asset id",
        "example": "ASSETID"
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
    "url": "/health/**",
    "method": "getInfo",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Health",
    "typeScriptTag": "health",
    "description": "Get Health Information",
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
      apiTitle="Cloud Functions"
      apiBaseUrl="https://api.nvcf.nvidia.com"
      apiVersion="2.87.3"
      endpoints={24}
      sdkMethods={36}
      schemas={52}
      parameters={89}
      difficulty="Easy"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/nvidia/cloud-functions/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/nvidia/cloud-functions/openapi.yaml"
      developerDocumentation="docs.api.nvidia.com/cloud-functions/reference/getfunctiondeployment"
    />
  );
}
  