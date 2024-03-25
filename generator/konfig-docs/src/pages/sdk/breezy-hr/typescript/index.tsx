import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function BreezyHrTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="breezy-hr-typescript-sdk"
      metaDescription={`We specialize in sourcing high quality pilots to meet the needs of 135 operators. Our team of highly skilled pilots and aviation experts seamlessly integrates with your operation to quickly provide you with world-class pilot candidates from our extensive network. All candidates are fully vetted and evaluated by Hire Up prior to being recommended to you.`}
      company="Breezy HR"
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/breezy-hr/logo.png"
      companyKebabCase="breezy-hr"
      clientNameCamelCase="breezyHr"
      homepage="breezy.hr"
      lastUpdated={new Date("2024-03-25T22:47:11.618Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/breezy-hr/favicon.png"
      // Missing contactUrl
      // Missing contactEmail
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/breezy-hr/imagePreview.png"
      GettingStarted={GettingStarted}
      FirstRequest={FirstRequest}
      categories={["talent_acquisition_analytics","recruiting"]}
      methods={[
  {
    "url": "/v3/signin",
    "method": "getAccessToken",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Authentication",
    "typeScriptTag": "authentication",
    "description": "/signin",
    "parameters": [
      {
        "name": "email",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EMAIL"
      },
      {
        "name": "password",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PASSWORD"
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
    "url": "/v3/signout",
    "method": "invalidateToken",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Session",
    "typeScriptTag": "session",
    "description": "/signout",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      }
    ]
  },
  {
    "url": "/v3/user",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "User",
    "typeScriptTag": "user",
    "description": "/user",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "description": "user id to lookup (if blank look up by auth token)"
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
    "url": "/v3/user/details",
    "method": "getCompanyDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "User",
    "typeScriptTag": "user",
    "description": "/user/details",
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
    "url": "/v3/company/{company_id}",
    "method": "getInformation",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Company",
    "typeScriptTag": "company",
    "description": "/company/:id/",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "company id",
        "example": "COMPANY_ID"
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
    "url": "/v3/company/{company_id}/custom-attributes/candidate",
    "method": "getCandidateCustomAttributes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Company",
    "typeScriptTag": "company",
    "description": "/company/:id/custom-attributes/candidate",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "company id",
        "example": "COMPANY_ID"
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
    "url": "/v3/company/{company_id}/custom-attributes/position",
    "method": "getPositionCustomAttributes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Company",
    "typeScriptTag": "company",
    "description": "/company/:id/custom-attributes/position",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "company id",
        "example": "COMPANY_ID"
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
    "url": "/v3/company/{company_id}/pipeline/{pipeline_id}",
    "method": "getPipelineStagesByPipelineId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Company",
    "typeScriptTag": "company",
    "description": "/company/:id/pipeline/:id",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "company id",
        "example": "COMPANY_ID"
      },
      {
        "name": "pipelineId",
        "schema": "string",
        "required": true,
        "description": "pipeline id",
        "example": "PIPELINE_ID"
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
    "url": "/v3/company/{company_id}/pipelines",
    "method": "getPipelines",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Company",
    "typeScriptTag": "company",
    "description": "/company/:id/pipelines",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "company id",
        "example": "COMPANY_ID"
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
    "url": "/v3/company/{company_id}/questionnaire/{questionnaire_id}",
    "method": "getQuestionnaireById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Company",
    "typeScriptTag": "company",
    "description": "/company/:id/questionnaire/:id",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "COMPANY_ID"
      },
      {
        "name": "questionnaireId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "QUESTIONNAIRE_ID"
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
    "url": "/v3/company/{company_id}/questionnaires",
    "method": "getQuestionnaires",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Company",
    "typeScriptTag": "company",
    "description": "/company/:id/questionnaires",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "company id",
        "example": "COMPANY_ID"
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
    "url": "/v3/company/{company_id}/template/{template_id}",
    "method": "getEmailTemplateById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Company",
    "typeScriptTag": "company",
    "description": "/company/:id/template/:id",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "company id",
        "example": "COMPANY_ID"
      },
      {
        "name": "templateId",
        "schema": "string",
        "required": true,
        "description": "template id",
        "example": "TEMPLATE_ID"
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
    "url": "/v3/company/{company_id}/templates",
    "method": "getAllTemplates",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Company",
    "typeScriptTag": "company",
    "description": "/company/:id/templates",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "company id",
        "example": "COMPANY_ID"
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
    "url": "/v3/companies",
    "method": "getAssociated",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Company",
    "typeScriptTag": "company",
    "description": "/companies",
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
    "url": "/v3/company/{company_id}/position/{position_id}",
    "method": "getPositionDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Company",
    "typeScriptTag": "company",
    "description": "./position/:id",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "company id",
        "example": "COMPANY_ID"
      },
      {
        "name": "positionId",
        "schema": "string",
        "required": true,
        "description": "position id",
        "example": "POSITION_ID"
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
    "url": "/v3/company/{company_id}/position/{position_id}",
    "method": "updatePositionDetails",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Company",
    "typeScriptTag": "company",
    "description": "./position/:id",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "COMPANY_ID"
      },
      {
        "name": "positionId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "POSITION_ID"
      },
      {
        "name": "tags",
        "schema": "array",
        "description": ""
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
        "name": "type",
        "schema": "string",
        "description": ""
      },
      {
        "name": "location",
        "schema": "object",
        "description": ""
      },
      {
        "name": "department",
        "schema": "string",
        "description": ""
      },
      {
        "name": "requisition_id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "category",
        "schema": "string",
        "description": ""
      },
      {
        "name": "experience",
        "schema": "string",
        "description": ""
      },
      {
        "name": "education",
        "schema": "string",
        "description": ""
      },
      {
        "name": "custom_attributes",
        "schema": "array",
        "description": ""
      },
      {
        "name": "pipeline_id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "scorecard_id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "questionnaire_id",
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
    "url": "/v3/company/{company_id}/position/{position_id}/state",
    "method": "updatePositionState",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Company",
    "typeScriptTag": "company",
    "description": "./position/:id/state",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "COMPANY_ID"
      },
      {
        "name": "positionId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "POSITION_ID"
      },
      {
        "name": "state",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "STATE"
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v3/company/{company_id}/position/{position_id}/stream",
    "method": "getPositionStream",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Company",
    "typeScriptTag": "company",
    "description": "./position/:id/stream",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "company",
        "example": "COMPANY_ID"
      },
      {
        "name": "positionId",
        "schema": "string",
        "required": true,
        "description": "position id",
        "example": "POSITION_ID"
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
    "url": "/v3/company/{company_id}/position/{position_id}/team",
    "method": "getPositionTeamMembers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Company",
    "typeScriptTag": "company",
    "description": "./position/:id/team",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "company id",
        "example": "COMPANY_ID"
      },
      {
        "name": "positionId",
        "schema": "string",
        "required": true,
        "description": "position id",
        "example": "POSITION_ID"
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
    "url": "/v3/company/{company_id}/positions",
    "method": "getPositionsByState",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Company",
    "typeScriptTag": "company",
    "description": "./positions",
    "parameters": [
      {
        "name": "state",
        "schema": "string",
        "description": "Specify an optional position state filter. e.g. draft, archived, published, closed, pending",
        "default": "published"
      },
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "company id",
        "example": "COMPANY_ID"
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
    "url": "/v3/company/{company_id}/positions",
    "method": "createNewPosition",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Company",
    "typeScriptTag": "company",
    "description": "./positions",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "company id",
        "example": "COMPANY_ID"
      },
      {
        "name": "tags",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "description",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DESCRIPTION"
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
        "name": "location",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "department",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "requisition_id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "category",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "experience",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "education",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "custom_attributes",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "pipeline_id",
        "schema": "string",
        "required": false,
        "description": "",
        "default": "default"
      },
      {
        "name": "scorecard_id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "questionnaire_id",
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
    "url": "/v3/company/{company_id}/position/{position_id}/custom-fields",
    "method": "getPositionCustomFields",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Company",
    "typeScriptTag": "company",
    "description": "./position/:id/custom-fields",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "company id",
        "example": "COMPANY_ID"
      },
      {
        "name": "positionId",
        "schema": "string",
        "required": true,
        "description": "position id",
        "example": "POSITION_ID"
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
    "url": "/v3/company/{company_id}/position/{position_id}/custom-fields/{custom_field_id}",
    "method": "updateCustomField",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Company",
    "typeScriptTag": "company",
    "description": "./position/:id/custom-fields/:id",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "company id",
        "example": "COMPANY_ID"
      },
      {
        "name": "positionId",
        "schema": "string",
        "required": true,
        "description": "position id",
        "example": "POSITION_ID"
      },
      {
        "name": "customFieldId",
        "schema": "string",
        "required": true,
        "description": "custom field id",
        "example": "CUSTOM_FIELD_ID"
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
    "url": "/v3/company/{company_id}/position/{position_id}/candidate/{candidate_id}",
    "method": "getCandidateById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Company",
    "typeScriptTag": "company",
    "description": "./candidate/:id",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "company id",
        "example": "COMPANY_ID"
      },
      {
        "name": "positionId",
        "schema": "string",
        "required": true,
        "description": "position id",
        "example": "POSITION_ID"
      },
      {
        "name": "candidateId",
        "schema": "string",
        "required": true,
        "description": "candidate id",
        "example": "CANDIDATE_ID"
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
    "url": "/v3/company/{company_id}/position/{position_id}/candidate/{candidate_id}",
    "method": "updateCandidatePosition",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Company",
    "typeScriptTag": "company",
    "description": "./candidate/:id",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "COMPANY_ID"
      },
      {
        "name": "positionId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "POSITION_ID"
      },
      {
        "name": "candidateId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CANDIDATE_ID"
      },
      {
        "name": "tags",
        "schema": "array",
        "description": ""
      },
      {
        "name": "summary",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "email_address",
        "schema": "string",
        "description": ""
      },
      {
        "name": "phone_number",
        "schema": "string",
        "description": ""
      },
      {
        "name": "source",
        "schema": "string",
        "description": "",
        "default": "Breezy API"
      },
      {
        "name": "headline",
        "schema": "string",
        "description": ""
      },
      {
        "name": "address",
        "schema": "string",
        "description": ""
      },
      {
        "name": "social_profiles",
        "schema": "object",
        "description": ""
      },
      {
        "name": "cover_letter",
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
    "url": "/v3/company/{company_id}/position/{position_id}/candidate/{candidate_id}/assessments",
    "method": "getAssessments",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Company",
    "typeScriptTag": "company",
    "description": "./candidate/:id/assessments",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "company id",
        "example": "COMPANY_ID"
      },
      {
        "name": "positionId",
        "schema": "string",
        "required": true,
        "description": "position id",
        "example": "POSITION_ID"
      },
      {
        "name": "candidateId",
        "schema": "string",
        "required": true,
        "description": "candidate id",
        "example": "CANDIDATE_ID"
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
    "url": "/v3/company/{company_id}/position/{position_id}/candidate/{candidate_id}/background-checks",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "BackgroundCheck",
    "typeScriptTag": "backgroundCheck",
    "description": "./candidate/:id/background-checks",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "company id",
        "example": "COMPANY_ID"
      },
      {
        "name": "positionId",
        "schema": "string",
        "required": true,
        "description": "position id",
        "example": "POSITION_ID"
      },
      {
        "name": "candidateId",
        "schema": "string",
        "required": true,
        "description": "candidate id",
        "example": "CANDIDATE_ID"
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
    "url": "/v3/company/{company_id}/position/{position_id}/candidate/{candidate_id}/conversation",
    "method": "getStream",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Conversation",
    "typeScriptTag": "conversation",
    "description": "./candidate/:id/conversation",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "company _id",
        "example": "COMPANY_ID"
      },
      {
        "name": "positionId",
        "schema": "string",
        "required": true,
        "description": "position id",
        "example": "POSITION_ID"
      },
      {
        "name": "candidateId",
        "schema": "string",
        "required": true,
        "description": "candidate id",
        "example": "CANDIDATE_ID"
      },
      {
        "name": "includeDelayed",
        "schema": "integer",
        "description": "1 to include any messages that are currently queued for delayed delivery",
        "default": 0
      },
      {
        "name": "skip",
        "schema": "integer",
        "description": "Number of records to skip for paging",
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
    "url": "/v3/company/{company_id}/position/{position_id}/candidate/{candidate_id}/conversation",
    "method": "addMessage",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Conversation",
    "typeScriptTag": "conversation",
    "description": "./candidate/:id/conversation",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "COMPANY_ID"
      },
      {
        "name": "positionId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "POSITION_ID"
      },
      {
        "name": "candidateId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CANDIDATE_ID"
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
    "url": "/v3/company/{company_id}/position/{position_id}/candidate/{candidate_id}/custom-attribute",
    "method": "addToCandidateCustomAttribute",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "CustomAttribute",
    "typeScriptTag": "customAttribute",
    "description": "./candidate/:id/custom-attribute",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "COMPANY_ID"
      },
      {
        "name": "positionId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "POSITION_ID"
      },
      {
        "name": "candidateId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CANDIDATE_ID"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "value",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "VALUE"
      },
      {
        "name": "secure",
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
    "url": "/v3/company/{company_id}/position/{position_id}/candidate/{candidate_id}/documents",
    "method": "getCandidateDocumentsByPosition",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Company",
    "typeScriptTag": "company",
    "description": "./candidate/:id/documents",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "COMPANY_ID"
      },
      {
        "name": "positionId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "POSITION_ID"
      },
      {
        "name": "candidateId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CANDIDATE_ID"
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
    "url": "/v3/company/{company_id}/position/{position_id}/candidate/{candidate_id}/documents",
    "method": "addCandidateDocument",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Company",
    "typeScriptTag": "company",
    "description": "./candidate/:id/documents",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "COMPANY_ID"
      },
      {
        "name": "positionId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "POSITION_ID"
      },
      {
        "name": "candidateId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CANDIDATE_ID"
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
    "url": "/v3/company/{company_id}/position/{position_id}/candidate/{candidate_id}/education",
    "method": "addEducationEntry",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Company",
    "typeScriptTag": "company",
    "description": "./candidate/:id/education",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "COMPANY_ID"
      },
      {
        "name": "positionId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "POSITION_ID"
      },
      {
        "name": "candidateId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CANDIDATE_ID"
      },
      {
        "name": "school_name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SCHOOL_NAME"
      },
      {
        "name": "field_of_study",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "start_year",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "end_year",
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
    "url": "/v3/company/{company_id}/position/{position_id}/candidate/{candidate_id}/meta",
    "method": "getPositionCandidateMeta",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Company",
    "typeScriptTag": "company",
    "description": "./candidate/:id/meta",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "COMPANY_ID"
      },
      {
        "name": "positionId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "POSITION_ID"
      },
      {
        "name": "candidateId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CANDIDATE_ID"
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
    "url": "/v3/company/{company_id}/position/{position_id}/candidate/{candidate_id}/move",
    "method": "moveCandidateToPosition",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Company",
    "typeScriptTag": "company",
    "description": "./candidate/:id/move",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "COMPANY_ID"
      },
      {
        "name": "positionId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "POSITION_ID"
      },
      {
        "name": "candidateId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CANDIDATE_ID"
      },
      {
        "name": "target_position_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TARGET_POSITION_ID"
      },
      {
        "name": "target_stage_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TARGET_STAGE_ID"
      },
      {
        "name": "stage_actions_enabled",
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
    "url": "/v3/company/{company_id}/position/{position_id}/candidate/{candidate_id}/questionnaire/{candidate_questionnaire_id}",
    "method": "saveCandidateResponses",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Questionnaire",
    "typeScriptTag": "questionnaire",
    "description": "./candidate/:id/questionnaire/:id",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "COMPANY_ID"
      },
      {
        "name": "positionId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "POSITION_ID"
      },
      {
        "name": "candidateId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CANDIDATE_ID"
      },
      {
        "name": "candidateQuestionnaireId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CANDIDATE_QUESTIONNAIRE_ID"
      },
      {
        "name": "questions",
        "schema": "array",
        "required": true,
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v3/company/{company_id}/position/{position_id}/candidate/{candidate_id}/questionnaires",
    "method": "get",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Questionnaire",
    "typeScriptTag": "questionnaire",
    "description": "./candidate/:id/questionnaires",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "COMPANY_ID"
      },
      {
        "name": "positionId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "POSITION_ID"
      },
      {
        "name": "candidateId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CANDIDATE_ID"
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
    "url": "/v3/company/{company_id}/position/{position_id}/candidate/{candidate_id}/resume",
    "method": "attachResume",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Company",
    "typeScriptTag": "company",
    "description": "./candidate/:id/resume",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "COMPANY_ID"
      },
      {
        "name": "positionId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "POSITION_ID"
      },
      {
        "name": "candidateId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CANDIDATE_ID"
      },
      {
        "name": "file",
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v3/company/{company_id}/position/{position_id}/candidate/{candidate_id}/scorecard",
    "method": "updateCandidateScorecard",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Company",
    "typeScriptTag": "company",
    "description": "./candidate/:id/scorecard",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "COMPANY_ID"
      },
      {
        "name": "positionId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "POSITION_ID"
      },
      {
        "name": "candidateId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CANDIDATE_ID"
      },
      {
        "name": "score",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SCORE"
      },
      {
        "name": "note",
        "schema": "string",
        "required": false,
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v3/company/{company_id}/position/{position_id}/candidate/{candidate_id}/send-questionnaire",
    "method": "createForCandidate",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Questionnaire",
    "typeScriptTag": "questionnaire",
    "description": "./candidate/:id/send-questionnaire",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "COMPANY_ID"
      },
      {
        "name": "positionId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "POSITION_ID"
      },
      {
        "name": "candidateId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CANDIDATE_ID"
      },
      {
        "name": "questionnaireId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "QUESTIONNAIRE_ID"
      },
      {
        "name": "emailCandidate",
        "schema": "boolean",
        "description": "should the result of this action send an email to the candidate to complete questionnaire",
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
    "url": "/v3/company/{company_id}/position/{position_id}/candidate/{candidate_id}/stage",
    "method": "moveCandidateStage",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Company",
    "typeScriptTag": "company",
    "description": "./candidate/:id/stage",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "COMPANY_ID"
      },
      {
        "name": "positionId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "POSITION_ID"
      },
      {
        "name": "candidateId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CANDIDATE_ID"
      },
      {
        "name": "stage_id",
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v3/company/{company_id}/position/{position_id}/candidate/{candidate_id}/stream",
    "method": "getPositionCandidateStreamEvents",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Company",
    "typeScriptTag": "company",
    "description": "./candidate/:id/stream",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "COMPANY_ID"
      },
      {
        "name": "positionId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "POSITION_ID"
      },
      {
        "name": "candidateId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CANDIDATE_ID"
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
    "url": "/v3/company/{company_id}/position/{position_id}/candidate/{candidate_id}/stream",
    "method": "addCandidateStreamNote",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Company",
    "typeScriptTag": "company",
    "description": "./candidate/:id/stream",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "COMPANY_ID"
      },
      {
        "name": "positionId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "POSITION_ID"
      },
      {
        "name": "candidateId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CANDIDATE_ID"
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
    "url": "/v3/company/{company_id}/position/{position_id}/candidate/{candidate_id}/work-history",
    "method": "addEntry",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "WorkHistory",
    "typeScriptTag": "workHistory",
    "description": "./candidate/:id/work-history",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "COMPANY_ID"
      },
      {
        "name": "positionId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "POSITION_ID"
      },
      {
        "name": "candidateId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CANDIDATE_ID"
      },
      {
        "name": "summary",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "title",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "company_name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "COMPANY_NAME"
      },
      {
        "name": "start_month",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "start_year",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "end_month",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "end_year",
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
    "url": "/v3/company/{company_id}/position/{position_id}/candidates",
    "method": "getPositionCandidates",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Company",
    "typeScriptTag": "company",
    "description": "./candidates",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "COMPANY_ID"
      },
      {
        "name": "positionId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "POSITION_ID"
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "description": "Add this parameter to force paging of results (max: 50)"
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "If page size is passed, this determines which page of data will be returned",
        "default": 1
      },
      {
        "name": "sort",
        "schema": "string",
        "description": "Determines the sort order of the data returned. Can be (created | updated)",
        "default": "updated"
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
    "url": "/v3/company/{company_id}/position/{position_id}/candidates",
    "method": "addNewCandidateToPosition",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Company",
    "typeScriptTag": "company",
    "description": "./candidates",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "COMPANY_ID"
      },
      {
        "name": "positionId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "POSITION_ID"
      },
      {
        "name": "stageActionsEnabled",
        "schema": "boolean",
        "description": "When origin is \"sourced\", should stage actions be executed (defaults to false). This is always true when origin is \"applied\"",
        "default": false
      },
      {
        "name": "tags",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "summary",
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
        "name": "email_address",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "phone_number",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "address",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "origin",
        "schema": "string",
        "required": false,
        "description": "",
        "default": "sourced"
      },
      {
        "name": "source",
        "schema": "string",
        "required": false,
        "description": "",
        "default": "Breezy API"
      },
      {
        "name": "work_history",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "education",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "social_profiles",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "custom_attributes",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "cover_letter",
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
        "statusCode": "202",
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
    "url": "/v3/company/{company_id}/position/{position_id}/candidates/resume",
    "method": "uploadResume",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Company",
    "typeScriptTag": "company",
    "description": "./candidates/resume",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "COMPANY_ID"
      },
      {
        "name": "positionId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "POSITION_ID"
      },
      {
        "name": "stageId",
        "schema": "string",
        "description": "id of pipeline stage to put new candidate in",
        "default": "applied"
      },
      {
        "name": "stageActionsEnabled",
        "schema": "boolean",
        "description": "execute stage actions configured on stage candidate is being created in",
        "default": false
      },
      {
        "name": "file",
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
    "url": "/v3/company/{company_id}/candidates/search",
    "method": "getCandidatesByEmail",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Company",
    "typeScriptTag": "company",
    "description": "./candidates/search",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "company id",
        "example": "COMPANY_ID"
      },
      {
        "name": "emailAddress",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EMAIL_ADDRESS"
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
    "url": "/v3/company/{company_id}/position/{position_id}/candidate/{candidate_id}/custom-fields",
    "method": "get",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "CustomField",
    "typeScriptTag": "customField",
    "description": "./candidate/:id/custom-fields",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "company id",
        "example": "COMPANY_ID"
      },
      {
        "name": "positionId",
        "schema": "string",
        "required": true,
        "description": "position id",
        "example": "POSITION_ID"
      },
      {
        "name": "candidateId",
        "schema": "string",
        "required": true,
        "description": "candidate id",
        "example": "CANDIDATE_ID"
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
    "url": "/v3/company/{company_id}/position/{position_id}/candidate/{candidate_id}/custom-fields/{custom_field_id}",
    "method": "updateCandidateCustomFields",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "CustomField",
    "typeScriptTag": "customField",
    "description": "./candidate/:id/custom-fields/:id",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "company id",
        "example": "COMPANY_ID"
      },
      {
        "name": "positionId",
        "schema": "string",
        "required": true,
        "description": "position id",
        "example": "POSITION_ID"
      },
      {
        "name": "candidateId",
        "schema": "string",
        "required": true,
        "description": "candidate id",
        "example": "CANDIDATE_ID"
      },
      {
        "name": "customFieldId",
        "schema": "string",
        "required": true,
        "description": "custom field id",
        "example": "CUSTOM_FIELD_ID"
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
  }
]
    }
      language="TypeScript"
      apiTitle="API Settings"
      apiBaseUrl="https://api.breezy.hr"
      apiVersion="3"
      endpoints={43}
      sdkMethods={50}
      schemas={219}
      parameters={201}
      difficulty="Medium"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/breezy-hr/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/breezy-hr/openapi.yaml"
      developerDocumentation="developer.breezy.hr/reference/overview"
    />
  );
}
  