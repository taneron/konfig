import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function TalentLyftCustomersTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="talent-lyft-customers-typescript-sdk"
      metaDescription={`TalentLyft is an innovative recruitment software that streamlines the hiring process, from sourcing candidates to applicant tracking. It offers powerful tools for recruiters and HR professionals to attract, evaluate, and hire top talent efficiently. With features like job posting, candidate management, and customizable workflows, TalentLyft helps companies build their dream teams with ease.`}
      company="TalentLyft"
      serviceName="Customers"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/talentlyft/customers/logo.png"
      companyKebabCase="talent-lyft"
      clientNameCamelCase="talentLyftCustomers"
      homepage="talentlyft.com"
      lastUpdated={new Date("2024-03-28T16:30:00.282Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/talentlyft/customers/favicon.png"
      // Missing contactUrl
      // Missing contactEmail
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/talentlyft/customers/imagePreview.png"
      GettingStarted={GettingStarted}
      FirstRequest={FirstRequest}
      categories={["recruiting","hr","talent_management","applicant_tracking","job_postings"]}
      methods={[
  {
    "url": "/v2/articles",
    "method": "getArticles",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Blogs",
    "typeScriptTag": "blogs",
    "description": "Get articles",
    "parameters": [
      {
        "name": "contains",
        "schema": "string",
        "description": ""
      },
      {
        "name": "tags",
        "schema": "array",
        "description": ""
      },
      {
        "name": "authors",
        "schema": "array",
        "description": ""
      },
      {
        "name": "status",
        "schema": "string",
        "description": ""
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "",
        "default": 1
      },
      {
        "name": "perPage",
        "schema": "integer",
        "description": "",
        "default": 20
      },
      {
        "name": "sort",
        "schema": "string",
        "description": "",
        "default": "published"
      },
      {
        "name": "order",
        "schema": "string",
        "description": "",
        "default": "desc"
      },
      {
        "name": "xTlCompanyId",
        "schema": "guid",
        "description": "Company Id"
      },
      {
        "name": "xTlSubdomain",
        "schema": "guid",
        "description": "Account subdomain"
      },
      {
        "name": "xTlUserId",
        "schema": "guid",
        "description": "Team member id"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Error result model"
      },
      {
        "statusCode": "403",
        "description": "Error result model"
      },
      {
        "statusCode": "500",
        "description": "Error result model"
      }
    ]
  },
  {
    "url": "/v2/articles/{id}",
    "method": "getArticle",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Blogs",
    "typeScriptTag": "blogs",
    "description": "Get article",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "xTlCompanyId",
        "schema": "guid",
        "description": "Company Id"
      },
      {
        "name": "xTlSubdomain",
        "schema": "guid",
        "description": "Account subdomain"
      },
      {
        "name": "xTlUserId",
        "schema": "guid",
        "description": "Team member id"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Error result model"
      },
      {
        "statusCode": "403",
        "description": "Error result model"
      },
      {
        "statusCode": "404",
        "description": "Error result model"
      },
      {
        "statusCode": "500",
        "description": "Error result model"
      }
    ]
  },
  {
    "url": "/v2/candidates",
    "method": "listCandidates",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Candidates",
    "typeScriptTag": "candidates",
    "description": "Get candidates",
    "parameters": [
      {
        "name": "jobs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "",
        "default": 1
      },
      {
        "name": "perPage",
        "schema": "integer",
        "description": "",
        "default": 100
      },
      {
        "name": "createAfterDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "xTlCompanyId",
        "schema": "guid",
        "description": "Company Id"
      },
      {
        "name": "xTlSubdomain",
        "schema": "guid",
        "description": "Account subdomain"
      },
      {
        "name": "xTlUserId",
        "schema": "guid",
        "description": "Team member id"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Error result model"
      },
      {
        "statusCode": "403",
        "description": "Error result model"
      },
      {
        "statusCode": "500",
        "description": "Error result model"
      }
    ]
  },
  {
    "url": "/v2/candidates",
    "method": "addNewCandidate",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Candidates",
    "typeScriptTag": "candidates",
    "description": "Create Candidate",
    "parameters": [
      {
        "name": "xTlCompanyId",
        "schema": "guid",
        "description": "Company Id"
      },
      {
        "name": "xTlSubdomain",
        "schema": "guid",
        "description": "Account subdomain"
      },
      {
        "name": "xTlUserId",
        "schema": "guid",
        "description": "Team member id"
      },
      {
        "name": "FirstName",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FIRSTNAME"
      },
      {
        "name": "LastName",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "CoverLetter",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "Summary",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "Title",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "Company",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "ExternalId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "StageId",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "JobId",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "PoolId",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "Applied",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "IsProspect",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "Disqualified",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "DisqualifiedAt",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "DisqualificationReason",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "Created",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "Location",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "Avatar",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "Tags",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "Skills",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "Resume",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "UnstructuredData",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "Attachments",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "Notes",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "Emails",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "PhoneNumbers",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "SocialNetworks",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "Email",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "Phone",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "Answers",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "CustomFieldAnswers",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "Projects",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "Experiences",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "Educations",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "Languages",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "Source",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "Compliance",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "PreferredLanguage",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "Salutation",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "GJobsCandidateId",
        "schema": "integer",
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
        "statusCode": "401",
        "description": "Error result model"
      },
      {
        "statusCode": "403",
        "description": "Error result model"
      },
      {
        "statusCode": "422",
        "description": "Error result model"
      },
      {
        "statusCode": "500",
        "description": "Error result model"
      }
    ]
  },
  {
    "url": "/v2/candidates/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Candidates",
    "typeScriptTag": "candidates",
    "description": "Get candidate",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "xTlCompanyId",
        "schema": "guid",
        "description": "Company Id"
      },
      {
        "name": "xTlSubdomain",
        "schema": "guid",
        "description": "Account subdomain"
      },
      {
        "name": "xTlUserId",
        "schema": "guid",
        "description": "Team member id"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Error result model"
      },
      {
        "statusCode": "403",
        "description": "Error result model"
      },
      {
        "statusCode": "404",
        "description": "Error result model"
      },
      {
        "statusCode": "500",
        "description": "Error result model"
      }
    ]
  },
  {
    "url": "/v2/candidates/{id}",
    "method": "updateCandidateById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Candidates",
    "typeScriptTag": "candidates",
    "description": "Edit candidate",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "xTlCompanyId",
        "schema": "guid",
        "description": "Company Id"
      },
      {
        "name": "xTlSubdomain",
        "schema": "guid",
        "description": "Account subdomain"
      },
      {
        "name": "xTlUserId",
        "schema": "guid",
        "description": "Team member id"
      },
      {
        "name": "Id",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "FirstName",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FIRSTNAME"
      },
      {
        "name": "LastName",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "Title",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "Company",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "Avatar",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "PreferredLanguage",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "Salutation",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "Location",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "Source",
        "schema": "object",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
      },
      {
        "statusCode": "401",
        "description": "Error result model"
      },
      {
        "statusCode": "403",
        "description": "Error result model"
      },
      {
        "statusCode": "404",
        "description": "Error result model"
      },
      {
        "statusCode": "500",
        "description": "Error result model"
      }
    ]
  },
  {
    "url": "/v2/candidates/{id}/tags",
    "method": "updateCandidateTags",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Candidates",
    "typeScriptTag": "candidates",
    "description": "Updates candidate's tags",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "xTlCompanyId",
        "schema": "guid",
        "description": "Company Id"
      },
      {
        "name": "xTlSubdomain",
        "schema": "guid",
        "description": "Account subdomain"
      },
      {
        "name": "xTlUserId",
        "schema": "guid",
        "description": "Team member id"
      },
      {
        "name": "Tags",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Error result model"
      },
      {
        "statusCode": "403",
        "description": "Error result model"
      },
      {
        "statusCode": "500",
        "description": "Error result model"
      }
    ]
  },
  {
    "url": "/v2/candidates/{id}/skills",
    "method": "updateSkills",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Candidates",
    "typeScriptTag": "candidates",
    "description": "Updates candidate's skills",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "xTlCompanyId",
        "schema": "guid",
        "description": "Company Id"
      },
      {
        "name": "xTlSubdomain",
        "schema": "guid",
        "description": "Account subdomain"
      },
      {
        "name": "xTlUserId",
        "schema": "guid",
        "description": "Team member id"
      },
      {
        "name": "Skills",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Error result model"
      },
      {
        "statusCode": "403",
        "description": "Error result model"
      },
      {
        "statusCode": "500",
        "description": "Error result model"
      }
    ]
  },
  {
    "url": "/v2/candidates/{id}/note",
    "method": "createCandidateNote",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Candidates",
    "typeScriptTag": "candidates",
    "description": "Creates a note on the candidate's timeline",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "xTlCompanyId",
        "schema": "guid",
        "description": "Company Id"
      },
      {
        "name": "xTlSubdomain",
        "schema": "guid",
        "description": "Account subdomain"
      },
      {
        "name": "xTlUserId",
        "schema": "guid",
        "description": "Team member id"
      },
      {
        "name": "MemberId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "Note",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Error result model"
      },
      {
        "statusCode": "403",
        "description": "Error result model"
      },
      {
        "statusCode": "404",
        "description": "Error result model"
      },
      {
        "statusCode": "500",
        "description": "Error result model"
      }
    ]
  },
  {
    "url": "/v2/candidates/{id}/log_activity",
    "method": "logActivity",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Candidates",
    "typeScriptTag": "candidates",
    "description": "Log activity on the candidate's timeline",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "xTlCompanyId",
        "schema": "guid",
        "description": "Company Id"
      },
      {
        "name": "xTlSubdomain",
        "schema": "guid",
        "description": "Account subdomain"
      },
      {
        "name": "xTlUserId",
        "schema": "guid",
        "description": "Team member id"
      },
      {
        "name": "Id",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "Type",
        "schema": "string",
        "description": ""
      },
      {
        "name": "Body",
        "schema": "string",
        "description": ""
      },
      {
        "name": "Created",
        "schema": "string",
        "description": ""
      },
      {
        "name": "CallOutcome",
        "schema": "string",
        "description": ""
      },
      {
        "name": "Direction",
        "schema": "string",
        "description": ""
      },
      {
        "name": "ApplicationId",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "CandidateId",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "PartnerId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "Visibility",
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
        "statusCode": "401",
        "description": "Error result model"
      },
      {
        "statusCode": "403",
        "description": "Error result model"
      },
      {
        "statusCode": "422",
        "description": "Error result model"
      },
      {
        "statusCode": "500",
        "description": "Error result model"
      }
    ]
  },
  {
    "url": "/v2/candidates/{id}/evaluations",
    "method": "logEvaluation",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Candidates",
    "typeScriptTag": "candidates",
    "description": "Log evaluation",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "xTlCompanyId",
        "schema": "guid",
        "description": "Company Id"
      },
      {
        "name": "xTlSubdomain",
        "schema": "guid",
        "description": "Account subdomain"
      },
      {
        "name": "xTlUserId",
        "schema": "guid",
        "description": "Team member id"
      },
      {
        "name": "Rate",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "Note",
        "schema": "string",
        "description": ""
      },
      {
        "name": "EvaluatedById",
        "schema": "string",
        "description": ""
      },
      {
        "name": "StageId",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "JobId",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "ApplicationId",
        "schema": "integer",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Error result model"
      },
      {
        "statusCode": "403",
        "description": "Error result model"
      },
      {
        "statusCode": "422",
        "description": "Error result model"
      },
      {
        "statusCode": "500",
        "description": "Error result model"
      }
    ]
  },
  {
    "url": "/v2/candidates/{id}/activities",
    "method": "getActivities",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Candidates",
    "typeScriptTag": "candidates",
    "description": "Get candidate activities",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "",
        "default": 1
      },
      {
        "name": "perPage",
        "schema": "integer",
        "description": "",
        "default": 50
      },
      {
        "name": "xTlCompanyId",
        "schema": "guid",
        "description": "Company Id"
      },
      {
        "name": "xTlSubdomain",
        "schema": "guid",
        "description": "Account subdomain"
      },
      {
        "name": "xTlUserId",
        "schema": "guid",
        "description": "Team member id"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Error result model"
      },
      {
        "statusCode": "403",
        "description": "Error result model"
      },
      {
        "statusCode": "404",
        "description": "Error result model"
      },
      {
        "statusCode": "500",
        "description": "Error result model"
      }
    ]
  },
  {
    "url": "/v2/candidates/{id}/applications/{applicationId}",
    "method": "getApplicationById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Candidates",
    "typeScriptTag": "candidates",
    "description": "Get candidate application by id",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "applicationId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "xTlCompanyId",
        "schema": "guid",
        "description": "Company Id"
      },
      {
        "name": "xTlSubdomain",
        "schema": "guid",
        "description": "Account subdomain"
      },
      {
        "name": "xTlUserId",
        "schema": "guid",
        "description": "Team member id"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Error result model"
      },
      {
        "statusCode": "403",
        "description": "Error result model"
      },
      {
        "statusCode": "404",
        "description": "Error result model"
      },
      {
        "statusCode": "500",
        "description": "Error result model"
      }
    ]
  },
  {
    "url": "/v2/candidates/{id}/applications/{applicationId}/education",
    "method": "createEducationForApplication",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Candidates",
    "typeScriptTag": "candidates",
    "description": "Create education for a candidate application",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "applicationId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "xTlCompanyId",
        "schema": "guid",
        "description": "Company Id"
      },
      {
        "name": "xTlSubdomain",
        "schema": "guid",
        "description": "Account subdomain"
      },
      {
        "name": "xTlUserId",
        "schema": "guid",
        "description": "Team member id"
      },
      {
        "name": "Id",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "Institution",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "INSTITUTION"
      },
      {
        "name": "Degree",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "Description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "From",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "To",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "Current",
        "schema": "boolean",
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
        "statusCode": "401",
        "description": "Error result model"
      },
      {
        "statusCode": "403",
        "description": "Error result model"
      },
      {
        "statusCode": "404",
        "description": "Error result model"
      },
      {
        "statusCode": "500",
        "description": "Error result model"
      }
    ]
  },
  {
    "url": "/v2/candidates/{id}/applications/{applicationId}/education/{educationId}",
    "method": "deleteEducationForApplication",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Candidates",
    "typeScriptTag": "candidates",
    "description": "Delete education for a candidate application",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "applicationId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "educationId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "xTlCompanyId",
        "schema": "guid",
        "description": "Company Id"
      },
      {
        "name": "xTlSubdomain",
        "schema": "guid",
        "description": "Account subdomain"
      },
      {
        "name": "xTlUserId",
        "schema": "guid",
        "description": "Team member id"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
      },
      {
        "statusCode": "401",
        "description": "Error result model"
      },
      {
        "statusCode": "403",
        "description": "Error result model"
      },
      {
        "statusCode": "404",
        "description": "Error result model"
      },
      {
        "statusCode": "500",
        "description": "Error result model"
      }
    ]
  },
  {
    "url": "/v2/candidates/{id}/applications/{applicationId}/education/{educationId}",
    "method": "updateEducationForApplication",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Candidates",
    "typeScriptTag": "candidates",
    "description": "Update education for a candidate application",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "applicationId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "educationId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "xTlCompanyId",
        "schema": "guid",
        "description": "Company Id"
      },
      {
        "name": "xTlSubdomain",
        "schema": "guid",
        "description": "Account subdomain"
      },
      {
        "name": "xTlUserId",
        "schema": "guid",
        "description": "Team member id"
      },
      {
        "name": "Id",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "Institution",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "INSTITUTION"
      },
      {
        "name": "Degree",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "Description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "From",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "To",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "Current",
        "schema": "boolean",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
      },
      {
        "statusCode": "401",
        "description": "Error result model"
      },
      {
        "statusCode": "403",
        "description": "Error result model"
      },
      {
        "statusCode": "404",
        "description": "Error result model"
      },
      {
        "statusCode": "500",
        "description": "Error result model"
      }
    ]
  },
  {
    "url": "/v2/candidates/{id}/applications/{applicationId}/experience",
    "method": "createExperienceForApplication",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Candidates",
    "typeScriptTag": "candidates",
    "description": "Create experience for a candidate application",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "applicationId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "xTlCompanyId",
        "schema": "guid",
        "description": "Company Id"
      },
      {
        "name": "xTlSubdomain",
        "schema": "guid",
        "description": "Account subdomain"
      },
      {
        "name": "xTlUserId",
        "schema": "guid",
        "description": "Team member id"
      },
      {
        "name": "Id",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "Title",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TITLE"
      },
      {
        "name": "Company",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "Description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "From",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "To",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "Current",
        "schema": "boolean",
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
        "statusCode": "401",
        "description": "Error result model"
      },
      {
        "statusCode": "403",
        "description": "Error result model"
      },
      {
        "statusCode": "404",
        "description": "Error result model"
      },
      {
        "statusCode": "500",
        "description": "Error result model"
      }
    ]
  },
  {
    "url": "/v2/candidates/{id}/applications/{applicationId}/experience/{experienceId}",
    "method": "deleteExperienceForApplication",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Candidates",
    "typeScriptTag": "candidates",
    "description": "Delete experience for a candidate application",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "applicationId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "experienceId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "xTlCompanyId",
        "schema": "guid",
        "description": "Company Id"
      },
      {
        "name": "xTlSubdomain",
        "schema": "guid",
        "description": "Account subdomain"
      },
      {
        "name": "xTlUserId",
        "schema": "guid",
        "description": "Team member id"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
      },
      {
        "statusCode": "401",
        "description": "Error result model"
      },
      {
        "statusCode": "403",
        "description": "Error result model"
      },
      {
        "statusCode": "404",
        "description": "Error result model"
      },
      {
        "statusCode": "500",
        "description": "Error result model"
      }
    ]
  },
  {
    "url": "/v2/candidates/{id}/applications/{applicationId}/experience/{experienceId}",
    "method": "updateCandidateExperience",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Candidates",
    "typeScriptTag": "candidates",
    "description": "Update experience for a candidate application",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "applicationId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "experienceId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "xTlCompanyId",
        "schema": "guid",
        "description": "Company Id"
      },
      {
        "name": "xTlSubdomain",
        "schema": "guid",
        "description": "Account subdomain"
      },
      {
        "name": "xTlUserId",
        "schema": "guid",
        "description": "Team member id"
      },
      {
        "name": "Id",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "Title",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TITLE"
      },
      {
        "name": "Company",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "Description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "From",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "To",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "Current",
        "schema": "boolean",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
      },
      {
        "statusCode": "401",
        "description": "Error result model"
      },
      {
        "statusCode": "403",
        "description": "Error result model"
      },
      {
        "statusCode": "404",
        "description": "Error result model"
      },
      {
        "statusCode": "500",
        "description": "Error result model"
      }
    ]
  },
  {
    "url": "/v2/candidates/{id}/contacts",
    "method": "getContacts",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Candidates",
    "typeScriptTag": "candidates",
    "description": "Get candidate's contacts",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "xTlCompanyId",
        "schema": "guid",
        "description": "Company Id"
      },
      {
        "name": "xTlSubdomain",
        "schema": "guid",
        "description": "Account subdomain"
      },
      {
        "name": "xTlUserId",
        "schema": "guid",
        "description": "Team member id"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Error result model"
      },
      {
        "statusCode": "403",
        "description": "Error result model"
      },
      {
        "statusCode": "500",
        "description": "Error result model"
      }
    ]
  },
  {
    "url": "/v2/candidates/{id}/contacts",
    "method": "createContact",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Candidates",
    "typeScriptTag": "candidates",
    "description": "Create candidate's contact",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "xTlCompanyId",
        "schema": "guid",
        "description": "Company Id"
      },
      {
        "name": "xTlSubdomain",
        "schema": "guid",
        "description": "Account subdomain"
      },
      {
        "name": "xTlUserId",
        "schema": "guid",
        "description": "Team member id"
      },
      {
        "name": "Id",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "Value",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "VALUE"
      },
      {
        "name": "Type",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "IsPrimary",
        "schema": "boolean",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Created"
      },
      {
        "statusCode": "401",
        "description": "Error result model"
      },
      {
        "statusCode": "403",
        "description": "Error result model"
      },
      {
        "statusCode": "500",
        "description": "Error result model"
      }
    ]
  },
  {
    "url": "/v2/candidates/{id}/contacts/{contactId}",
    "method": "deleteCandidateContact",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Candidates",
    "typeScriptTag": "candidates",
    "description": "Delete candidate's contact",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "contactId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "xTlCompanyId",
        "schema": "guid",
        "description": "Company Id"
      },
      {
        "name": "xTlSubdomain",
        "schema": "guid",
        "description": "Account subdomain"
      },
      {
        "name": "xTlUserId",
        "schema": "guid",
        "description": "Team member id"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
      },
      {
        "statusCode": "401",
        "description": "Error result model"
      },
      {
        "statusCode": "403",
        "description": "Error result model"
      },
      {
        "statusCode": "500",
        "description": "Error result model"
      }
    ]
  },
  {
    "url": "/v2/candidates/{id}/contacts/{contactId}",
    "method": "updateCandidateContact",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Candidates",
    "typeScriptTag": "candidates",
    "description": "Update candidate's contact",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "contactId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "xTlCompanyId",
        "schema": "guid",
        "description": "Company Id"
      },
      {
        "name": "xTlSubdomain",
        "schema": "guid",
        "description": "Account subdomain"
      },
      {
        "name": "xTlUserId",
        "schema": "guid",
        "description": "Team member id"
      },
      {
        "name": "Id",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "Value",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "VALUE"
      },
      {
        "name": "Type",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "IsPrimary",
        "schema": "boolean",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
      },
      {
        "statusCode": "401",
        "description": "Error result model"
      },
      {
        "statusCode": "403",
        "description": "Error result model"
      },
      {
        "statusCode": "500",
        "description": "Error result model"
      }
    ]
  },
  {
    "url": "/v2/departments",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Departments",
    "typeScriptTag": "departments",
    "description": "Get departments",
    "parameters": [
      {
        "name": "eids",
        "schema": "array",
        "description": "External ids"
      },
      {
        "name": "xTlCompanyId",
        "schema": "guid",
        "description": "Company Id"
      },
      {
        "name": "xTlSubdomain",
        "schema": "guid",
        "description": "Account subdomain"
      },
      {
        "name": "xTlUserId",
        "schema": "guid",
        "description": "Team member id"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Error result model"
      },
      {
        "statusCode": "403",
        "description": "Error result model"
      },
      {
        "statusCode": "500",
        "description": "Error result model"
      }
    ]
  },
  {
    "url": "/v2/departments",
    "method": "createNew",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Departments",
    "typeScriptTag": "departments",
    "description": "Create department",
    "parameters": [
      {
        "name": "xTlCompanyId",
        "schema": "guid",
        "description": "Company Id"
      },
      {
        "name": "xTlSubdomain",
        "schema": "guid",
        "description": "Account subdomain"
      },
      {
        "name": "xTlUserId",
        "schema": "guid",
        "description": "Team member id"
      },
      {
        "name": "Id",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "Name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "ExternalId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "ParentId",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "IsTranslated",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "Translation",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Error result model"
      },
      {
        "statusCode": "403",
        "description": "Error result model"
      },
      {
        "statusCode": "422",
        "description": "Error result model"
      },
      {
        "statusCode": "500",
        "description": "Error result model"
      }
    ]
  },
  {
    "url": "/v2/departments/{id}",
    "method": "removeById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Departments",
    "typeScriptTag": "departments",
    "description": "Delete department",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "xTlCompanyId",
        "schema": "guid",
        "description": "Company Id"
      },
      {
        "name": "xTlSubdomain",
        "schema": "guid",
        "description": "Account subdomain"
      },
      {
        "name": "xTlUserId",
        "schema": "guid",
        "description": "Team member id"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
      },
      {
        "statusCode": "401",
        "description": "Error result model"
      },
      {
        "statusCode": "403",
        "description": "Error result model"
      },
      {
        "statusCode": "404",
        "description": "Error result model"
      },
      {
        "statusCode": "500",
        "description": "Error result model"
      }
    ]
  },
  {
    "url": "/v2/departments/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Departments",
    "typeScriptTag": "departments",
    "description": "Get department",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "xTlCompanyId",
        "schema": "guid",
        "description": "Company Id"
      },
      {
        "name": "xTlSubdomain",
        "schema": "guid",
        "description": "Account subdomain"
      },
      {
        "name": "xTlUserId",
        "schema": "guid",
        "description": "Team member id"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Error result model"
      },
      {
        "statusCode": "403",
        "description": "Error result model"
      },
      {
        "statusCode": "404",
        "description": "Error result model"
      },
      {
        "statusCode": "500",
        "description": "Error result model"
      }
    ]
  },
  {
    "url": "/v2/departments/{id}",
    "method": "updateById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Departments",
    "typeScriptTag": "departments",
    "description": "Update department",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "xTlCompanyId",
        "schema": "guid",
        "description": "Company Id"
      },
      {
        "name": "xTlSubdomain",
        "schema": "guid",
        "description": "Account subdomain"
      },
      {
        "name": "xTlUserId",
        "schema": "guid",
        "description": "Team member id"
      },
      {
        "name": "Id",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "Name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "ExternalId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "ParentId",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "IsTranslated",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "Translation",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
      },
      {
        "statusCode": "401",
        "description": "Error result model"
      },
      {
        "statusCode": "403",
        "description": "Error result model"
      },
      {
        "statusCode": "404",
        "description": "Error result model"
      },
      {
        "statusCode": "422",
        "description": "Error result model"
      },
      {
        "statusCode": "500",
        "description": "Error result model"
      }
    ]
  },
  {
    "url": "/v2/departments/{id}/external",
    "method": "getByExternalId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Departments",
    "typeScriptTag": "departments",
    "description": "Get department by external ID",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "xTlCompanyId",
        "schema": "guid",
        "description": "Company Id"
      },
      {
        "name": "xTlSubdomain",
        "schema": "guid",
        "description": "Account subdomain"
      },
      {
        "name": "xTlUserId",
        "schema": "guid",
        "description": "Team member id"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Error result model"
      },
      {
        "statusCode": "403",
        "description": "Error result model"
      },
      {
        "statusCode": "404",
        "description": "Error result model"
      },
      {
        "statusCode": "500",
        "description": "Error result model"
      }
    ]
  },
  {
    "url": "/v2/employees",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Employees",
    "typeScriptTag": "employees",
    "description": "Get employees",
    "parameters": [
      {
        "name": "eids",
        "schema": "array",
        "description": ""
      },
      {
        "name": "departments",
        "schema": "array",
        "description": ""
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "",
        "default": 1
      },
      {
        "name": "perPage",
        "schema": "integer",
        "description": "",
        "default": 20
      },
      {
        "name": "sort",
        "schema": "string",
        "description": "first_name, last_name, department_name",
        "default": "first_name"
      },
      {
        "name": "contains",
        "schema": "string",
        "description": ""
      },
      {
        "name": "xTlCompanyId",
        "schema": "guid",
        "description": "Company Id"
      },
      {
        "name": "xTlSubdomain",
        "schema": "guid",
        "description": "Account subdomain"
      },
      {
        "name": "xTlUserId",
        "schema": "guid",
        "description": "Team member id"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Error result model"
      },
      {
        "statusCode": "403",
        "description": "Error result model"
      },
      {
        "statusCode": "500",
        "description": "Error result model"
      }
    ]
  },
  {
    "url": "/v2/employees",
    "method": "createNewEmployee",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Employees",
    "typeScriptTag": "employees",
    "description": "Create employee",
    "parameters": [
      {
        "name": "xTlCompanyId",
        "schema": "guid",
        "description": "Company Id"
      },
      {
        "name": "xTlSubdomain",
        "schema": "guid",
        "description": "Account subdomain"
      },
      {
        "name": "xTlUserId",
        "schema": "guid",
        "description": "Team member id"
      },
      {
        "name": "Id",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "FirstName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "LastName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "Name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "Email",
        "schema": "string",
        "description": ""
      },
      {
        "name": "ExternalId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "Uid",
        "schema": "string",
        "description": ""
      },
      {
        "name": "Department",
        "schema": "object",
        "description": ""
      },
      {
        "name": "LastEmail",
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
        "statusCode": "401",
        "description": "Error result model"
      },
      {
        "statusCode": "403",
        "description": "Error result model"
      },
      {
        "statusCode": "422",
        "description": "Error result model"
      },
      {
        "statusCode": "500",
        "description": "Error result model"
      }
    ]
  },
  {
    "url": "/v2/employees/{id}",
    "method": "removeById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Employees",
    "typeScriptTag": "employees",
    "description": "Delete employee",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "xTlCompanyId",
        "schema": "guid",
        "description": "Company Id"
      },
      {
        "name": "xTlSubdomain",
        "schema": "guid",
        "description": "Account subdomain"
      },
      {
        "name": "xTlUserId",
        "schema": "guid",
        "description": "Team member id"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
      },
      {
        "statusCode": "401",
        "description": "Error result model"
      },
      {
        "statusCode": "403",
        "description": "Error result model"
      },
      {
        "statusCode": "404",
        "description": "Error result model"
      },
      {
        "statusCode": "500",
        "description": "Error result model"
      }
    ]
  },
  {
    "url": "/v2/employees/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Employees",
    "typeScriptTag": "employees",
    "description": "Get employee",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "xTlCompanyId",
        "schema": "guid",
        "description": "Company Id"
      },
      {
        "name": "xTlSubdomain",
        "schema": "guid",
        "description": "Account subdomain"
      },
      {
        "name": "xTlUserId",
        "schema": "guid",
        "description": "Team member id"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Error result model"
      },
      {
        "statusCode": "403",
        "description": "Error result model"
      },
      {
        "statusCode": "404",
        "description": "Error result model"
      },
      {
        "statusCode": "500",
        "description": "Error result model"
      }
    ]
  },
  {
    "url": "/v2/employees/{id}",
    "method": "updateEmployeeById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Employees",
    "typeScriptTag": "employees",
    "description": "Save employee",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "xTlCompanyId",
        "schema": "guid",
        "description": "Company Id"
      },
      {
        "name": "xTlSubdomain",
        "schema": "guid",
        "description": "Account subdomain"
      },
      {
        "name": "xTlUserId",
        "schema": "guid",
        "description": "Team member id"
      },
      {
        "name": "Id",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "FirstName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "LastName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "Name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "Email",
        "schema": "string",
        "description": ""
      },
      {
        "name": "ExternalId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "Uid",
        "schema": "string",
        "description": ""
      },
      {
        "name": "Department",
        "schema": "object",
        "description": ""
      },
      {
        "name": "LastEmail",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "401",
        "description": "Error result model"
      },
      {
        "statusCode": "403",
        "description": "Error result model"
      },
      {
        "statusCode": "404",
        "description": "Error result model"
      },
      {
        "statusCode": "422",
        "description": "Error result model"
      },
      {
        "statusCode": "500",
        "description": "Error result model"
      }
    ]
  },
  {
    "url": "/v2/employees/sync",
    "method": "syncAllEmployees",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Employees",
    "typeScriptTag": "employees",
    "description": "Sync all employees",
    "parameters": [
      {
        "name": "xTlCompanyId",
        "schema": "guid",
        "description": "Company Id"
      },
      {
        "name": "xTlSubdomain",
        "schema": "guid",
        "description": "Account subdomain"
      },
      {
        "name": "xTlUserId",
        "schema": "guid",
        "description": "Team member id"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Created"
      },
      {
        "statusCode": "401",
        "description": "Error result model"
      },
      {
        "statusCode": "403",
        "description": "Error result model"
      },
      {
        "statusCode": "404",
        "description": "Error result model"
      },
      {
        "statusCode": "500",
        "description": "Error result model"
      }
    ]
  },
  {
    "url": "/v2/events",
    "method": "getMeetings",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Events",
    "typeScriptTag": "events",
    "description": "Get meetings",
    "parameters": [
      {
        "name": "members",
        "schema": "array",
        "description": ""
      },
      {
        "name": "candidates",
        "schema": "array",
        "description": ""
      },
      {
        "name": "types",
        "schema": "array",
        "description": ""
      },
      {
        "name": "jobs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "rangeStart",
        "schema": "string",
        "description": ""
      },
      {
        "name": "rangeEnd",
        "schema": "string",
        "description": ""
      },
      {
        "name": "contains",
        "schema": "string",
        "description": ""
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "",
        "default": 1
      },
      {
        "name": "perPage",
        "schema": "integer",
        "description": "",
        "default": 20
      },
      {
        "name": "xTlCompanyId",
        "schema": "guid",
        "description": "Company Id"
      },
      {
        "name": "xTlSubdomain",
        "schema": "guid",
        "description": "Account subdomain"
      },
      {
        "name": "xTlUserId",
        "schema": "guid",
        "description": "Team member id"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Error result model"
      },
      {
        "statusCode": "403",
        "description": "Error result model"
      },
      {
        "statusCode": "500",
        "description": "Error result model"
      }
    ]
  },
  {
    "url": "/v2/events/{id}",
    "method": "getMeeting",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Events",
    "typeScriptTag": "events",
    "description": "Get meeting",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "xTlCompanyId",
        "schema": "guid",
        "description": "Company Id"
      },
      {
        "name": "xTlSubdomain",
        "schema": "guid",
        "description": "Account subdomain"
      },
      {
        "name": "xTlUserId",
        "schema": "guid",
        "description": "Team member id"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Error result model"
      },
      {
        "statusCode": "403",
        "description": "Error result model"
      },
      {
        "statusCode": "404",
        "description": "Error result model"
      },
      {
        "statusCode": "500",
        "description": "Error result model"
      }
    ]
  },
  {
    "url": "/v2/forms",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Forms",
    "typeScriptTag": "forms",
    "description": "Get forms",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "description": "",
        "default": 1
      },
      {
        "name": "perPage",
        "schema": "integer",
        "description": "",
        "default": 20
      },
      {
        "name": "contains",
        "schema": "string",
        "description": ""
      },
      {
        "name": "xTlCompanyId",
        "schema": "guid",
        "description": "Company Id"
      },
      {
        "name": "xTlSubdomain",
        "schema": "guid",
        "description": "Account subdomain"
      },
      {
        "name": "xTlUserId",
        "schema": "guid",
        "description": "Team member id"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Error result model"
      },
      {
        "statusCode": "403",
        "description": "Error result model"
      },
      {
        "statusCode": "500",
        "description": "Error result model"
      }
    ]
  },
  {
    "url": "/v2/forms/{id}",
    "method": "getDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Forms",
    "typeScriptTag": "forms",
    "description": "Get form deatils",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "xTlCompanyId",
        "schema": "guid",
        "description": "Company Id"
      },
      {
        "name": "xTlSubdomain",
        "schema": "guid",
        "description": "Account subdomain"
      },
      {
        "name": "xTlUserId",
        "schema": "guid",
        "description": "Team member id"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Error result model"
      },
      {
        "statusCode": "403",
        "description": "Error result model"
      },
      {
        "statusCode": "404",
        "description": "Error result model"
      },
      {
        "statusCode": "500",
        "description": "Error result model"
      }
    ]
  },
  {
    "url": "/v2/forms/{id}/candidate",
    "method": "submitCandidate",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Forms",
    "typeScriptTag": "forms",
    "description": "Submit candidate",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "xTlCompanyId",
        "schema": "guid",
        "description": "Company Id"
      },
      {
        "name": "xTlSubdomain",
        "schema": "guid",
        "description": "Account subdomain"
      },
      {
        "name": "xTlUserId",
        "schema": "guid",
        "description": "Team member id"
      },
      {
        "name": "FirstName",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FIRSTNAME"
      },
      {
        "name": "LastName",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "Title",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "Company",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "Location",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "Avatar",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "Emails",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "PhoneNumbers",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "SocialNetworks",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "CustomFieldAnswers",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "Compliance",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "Source",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "Skills",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "Interests",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "ExternalId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "PreferredLanguage",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "Salutation",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "Resume",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "UnstructuredData",
        "schema": "object",
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
        "statusCode": "401",
        "description": "Error result model"
      },
      {
        "statusCode": "403",
        "description": "Error result model"
      },
      {
        "statusCode": "404",
        "description": "Error result model"
      },
      {
        "statusCode": "500",
        "description": "Error result model"
      }
    ]
  },
  {
    "url": "/v2/jobs",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Jobs",
    "typeScriptTag": "jobs",
    "description": "Get jobs",
    "parameters": [
      {
        "name": "status",
        "schema": "array",
        "description": "Returns jobs with the current status. Possible values (draft, published, closed, internal and archived)."
      },
      {
        "name": "locations",
        "schema": "array",
        "description": ""
      },
      {
        "name": "tags",
        "schema": "array",
        "description": ""
      },
      {
        "name": "departments",
        "schema": "array",
        "description": "Department ids"
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "Page, default 1",
        "default": 1
      },
      {
        "name": "perPage",
        "schema": "integer",
        "description": "Per Page, default 20",
        "default": 20
      },
      {
        "name": "sort",
        "schema": "string",
        "description": "az, za, modified_date",
        "default": "az"
      },
      {
        "name": "languageCode",
        "schema": "string",
        "description": "Language"
      },
      {
        "name": "contains",
        "schema": "string",
        "description": "Title contains value"
      },
      {
        "name": "details",
        "schema": "boolean",
        "description": "Job details (https://developers.talentlyft.com/",
        "default": false
      },
      {
        "name": "includeStages",
        "schema": "boolean",
        "description": "Include job stages",
        "default": false
      },
      {
        "name": "includeJobRequisition",
        "schema": "boolean",
        "description": "Include job requisition",
        "default": false
      },
      {
        "name": "xTlCompanyId",
        "schema": "guid",
        "description": "Company Id"
      },
      {
        "name": "xTlSubdomain",
        "schema": "guid",
        "description": "Account subdomain"
      },
      {
        "name": "xTlUserId",
        "schema": "guid",
        "description": "Team member id"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Error result model"
      },
      {
        "statusCode": "403",
        "description": "Error result model"
      },
      {
        "statusCode": "500",
        "description": "Error result model"
      }
    ]
  },
  {
    "url": "/v2/jobs",
    "method": "jobCreate",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Jobs",
    "typeScriptTag": "jobs",
    "description": "Create job",
    "parameters": [
      {
        "name": "xTlCompanyId",
        "schema": "guid",
        "description": "Company Id"
      },
      {
        "name": "xTlSubdomain",
        "schema": "guid",
        "description": "Account subdomain"
      },
      {
        "name": "xTlUserId",
        "schema": "guid",
        "description": "Team member id"
      },
      {
        "name": "Description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "Requirements",
        "schema": "string",
        "description": ""
      },
      {
        "name": "InternalCode",
        "schema": "string",
        "description": ""
      },
      {
        "name": "MetatagTitle",
        "schema": "string",
        "description": ""
      },
      {
        "name": "MetatagDescription",
        "schema": "string",
        "description": ""
      },
      {
        "name": "MetatagImageUrl",
        "schema": "string",
        "description": ""
      },
      {
        "name": "JobRole",
        "schema": "object",
        "description": ""
      },
      {
        "name": "CareerLevel",
        "schema": "object",
        "description": ""
      },
      {
        "name": "Degree",
        "schema": "object",
        "description": ""
      },
      {
        "name": "SalaryPerYear",
        "schema": "object",
        "description": ""
      },
      {
        "name": "Industry",
        "schema": "object",
        "description": ""
      },
      {
        "name": "WorkRemotely",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "OffersRelocation",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "OffersVisaSponsorship",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "GdprRetentionPeriod",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "WebsiteId",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "UId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "Id",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "Title",
        "schema": "string",
        "description": ""
      },
      {
        "name": "Department",
        "schema": "object",
        "description": ""
      },
      {
        "name": "Location",
        "schema": "object",
        "description": ""
      },
      {
        "name": "Status",
        "schema": "string",
        "description": ""
      },
      {
        "name": "AbsoluteUrl",
        "schema": "string",
        "description": ""
      },
      {
        "name": "RelativeUrl",
        "schema": "string",
        "description": ""
      },
      {
        "name": "ShortlinkUrl",
        "schema": "string",
        "description": ""
      },
      {
        "name": "FriendlyUrl",
        "schema": "string",
        "description": ""
      },
      {
        "name": "LastModified",
        "schema": "string",
        "description": ""
      },
      {
        "name": "Schedule",
        "schema": "object",
        "description": ""
      },
      {
        "name": "Stages",
        "schema": "array",
        "description": ""
      },
      {
        "name": "Meta",
        "schema": "object",
        "description": ""
      },
      {
        "name": "Pipeline",
        "schema": "object",
        "description": ""
      },
      {
        "name": "Contract",
        "schema": "object",
        "description": ""
      },
      {
        "name": "IsTranslated",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "Translation",
        "schema": "object",
        "description": ""
      },
      {
        "name": "RawData",
        "schema": "undefined",
        "description": ""
      },
      {
        "name": "JobTags",
        "schema": "array",
        "description": ""
      },
      {
        "name": "JobRequisitionId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "JobRequisition",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Error result model"
      },
      {
        "statusCode": "403",
        "description": "Error result model"
      },
      {
        "statusCode": "500",
        "description": "Error result model"
      }
    ]
  },
  {
    "url": "/v2/jobs/locations",
    "method": "listLocations",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Jobs",
    "typeScriptTag": "jobs",
    "description": "Returns a collection of the locations of the public jobs",
    "parameters": [
      {
        "name": "subdomain",
        "schema": "string",
        "description": ""
      },
      {
        "name": "xTlCompanyId",
        "schema": "guid",
        "description": "Company Id"
      },
      {
        "name": "xTlSubdomain",
        "schema": "guid",
        "description": "Account subdomain"
      },
      {
        "name": "xTlUserId",
        "schema": "guid",
        "description": "Team member id"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Error result model"
      },
      {
        "statusCode": "403",
        "description": "Error result model"
      },
      {
        "statusCode": "500",
        "description": "Error result model"
      }
    ]
  },
  {
    "url": "/v2/jobs/{id}",
    "method": "deleteJob",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Jobs",
    "typeScriptTag": "jobs",
    "description": "Delete job",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "xTlCompanyId",
        "schema": "guid",
        "description": "Company Id"
      },
      {
        "name": "xTlSubdomain",
        "schema": "guid",
        "description": "Account subdomain"
      },
      {
        "name": "xTlUserId",
        "schema": "guid",
        "description": "Team member id"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
      },
      {
        "statusCode": "401",
        "description": "Error result model"
      },
      {
        "statusCode": "403",
        "description": "Error result model"
      },
      {
        "statusCode": "404",
        "description": "Error result model"
      },
      {
        "statusCode": "500",
        "description": "Error result model"
      }
    ]
  },
  {
    "url": "/v2/jobs/{id}",
    "method": "findById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Jobs",
    "typeScriptTag": "jobs",
    "description": "Get Job",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "languageCode",
        "schema": "string",
        "description": ""
      },
      {
        "name": "xTlCompanyId",
        "schema": "guid",
        "description": "Company Id"
      },
      {
        "name": "xTlSubdomain",
        "schema": "guid",
        "description": "Account subdomain"
      },
      {
        "name": "xTlUserId",
        "schema": "guid",
        "description": "Team member id"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Error result model"
      },
      {
        "statusCode": "403",
        "description": "Error result model"
      },
      {
        "statusCode": "404",
        "description": "Error result model"
      },
      {
        "statusCode": "500",
        "description": "Error result model"
      }
    ]
  },
  {
    "url": "/v2/jobs/{id}",
    "method": "updateJobById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Jobs",
    "typeScriptTag": "jobs",
    "description": "Update job",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "xTlCompanyId",
        "schema": "guid",
        "description": "Company Id"
      },
      {
        "name": "xTlSubdomain",
        "schema": "guid",
        "description": "Account subdomain"
      },
      {
        "name": "xTlUserId",
        "schema": "guid",
        "description": "Team member id"
      },
      {
        "name": "Description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "Requirements",
        "schema": "string",
        "description": ""
      },
      {
        "name": "InternalCode",
        "schema": "string",
        "description": ""
      },
      {
        "name": "MetatagTitle",
        "schema": "string",
        "description": ""
      },
      {
        "name": "MetatagDescription",
        "schema": "string",
        "description": ""
      },
      {
        "name": "MetatagImageUrl",
        "schema": "string",
        "description": ""
      },
      {
        "name": "JobRole",
        "schema": "object",
        "description": ""
      },
      {
        "name": "CareerLevel",
        "schema": "object",
        "description": ""
      },
      {
        "name": "Degree",
        "schema": "object",
        "description": ""
      },
      {
        "name": "SalaryPerYear",
        "schema": "object",
        "description": ""
      },
      {
        "name": "Industry",
        "schema": "object",
        "description": ""
      },
      {
        "name": "WorkRemotely",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "OffersRelocation",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "OffersVisaSponsorship",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "GdprRetentionPeriod",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "WebsiteId",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "UId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "Id",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "Title",
        "schema": "string",
        "description": ""
      },
      {
        "name": "Department",
        "schema": "object",
        "description": ""
      },
      {
        "name": "Location",
        "schema": "object",
        "description": ""
      },
      {
        "name": "Status",
        "schema": "string",
        "description": ""
      },
      {
        "name": "AbsoluteUrl",
        "schema": "string",
        "description": ""
      },
      {
        "name": "RelativeUrl",
        "schema": "string",
        "description": ""
      },
      {
        "name": "ShortlinkUrl",
        "schema": "string",
        "description": ""
      },
      {
        "name": "FriendlyUrl",
        "schema": "string",
        "description": ""
      },
      {
        "name": "LastModified",
        "schema": "string",
        "description": ""
      },
      {
        "name": "Schedule",
        "schema": "object",
        "description": ""
      },
      {
        "name": "Stages",
        "schema": "array",
        "description": ""
      },
      {
        "name": "Meta",
        "schema": "object",
        "description": ""
      },
      {
        "name": "Pipeline",
        "schema": "object",
        "description": ""
      },
      {
        "name": "Contract",
        "schema": "object",
        "description": ""
      },
      {
        "name": "IsTranslated",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "Translation",
        "schema": "object",
        "description": ""
      },
      {
        "name": "RawData",
        "schema": "undefined",
        "description": ""
      },
      {
        "name": "JobTags",
        "schema": "array",
        "description": ""
      },
      {
        "name": "JobRequisitionId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "JobRequisition",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
      },
      {
        "statusCode": "401",
        "description": "Error result model"
      },
      {
        "statusCode": "403",
        "description": "Error result model"
      },
      {
        "statusCode": "404",
        "description": "Error result model"
      },
      {
        "statusCode": "500",
        "description": "Error result model"
      }
    ]
  },
  {
    "url": "/v2/jobs/{id}/status_changes",
    "method": "getStatusChanges",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Jobs",
    "typeScriptTag": "jobs",
    "description": "Job status changes",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "xTlCompanyId",
        "schema": "guid",
        "description": "Company Id"
      },
      {
        "name": "xTlSubdomain",
        "schema": "guid",
        "description": "Account subdomain"
      },
      {
        "name": "xTlUserId",
        "schema": "guid",
        "description": "Team member id"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Error result model"
      },
      {
        "statusCode": "403",
        "description": "Error result model"
      },
      {
        "statusCode": "404",
        "description": "Error result model"
      },
      {
        "statusCode": "500",
        "description": "Error result model"
      }
    ]
  },
  {
    "url": "/v2/jobs/{id}/stages",
    "method": "getStages",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Jobs",
    "typeScriptTag": "jobs",
    "description": "Get job stages",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "xTlCompanyId",
        "schema": "guid",
        "description": "Company Id"
      },
      {
        "name": "xTlSubdomain",
        "schema": "guid",
        "description": "Account subdomain"
      },
      {
        "name": "xTlUserId",
        "schema": "guid",
        "description": "Team member id"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Error result model"
      },
      {
        "statusCode": "403",
        "description": "Error result model"
      },
      {
        "statusCode": "404",
        "description": "Error result model"
      },
      {
        "statusCode": "500",
        "description": "Error result model"
      }
    ]
  },
  {
    "url": "/v2/jobs/{id}/form",
    "method": "getForm",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Jobs",
    "typeScriptTag": "jobs",
    "description": "Get Job Form",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "languageCode",
        "schema": "string",
        "description": ""
      },
      {
        "name": "xTlCompanyId",
        "schema": "guid",
        "description": "Company Id"
      },
      {
        "name": "xTlSubdomain",
        "schema": "guid",
        "description": "Account subdomain"
      },
      {
        "name": "xTlUserId",
        "schema": "guid",
        "description": "Team member id"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Error result model"
      },
      {
        "statusCode": "403",
        "description": "Error result model"
      },
      {
        "statusCode": "404",
        "description": "Error result model"
      },
      {
        "statusCode": "500",
        "description": "Error result model"
      }
    ]
  },
  {
    "url": "/v2/jobs/{id}/form",
    "method": "updateJobForm",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Jobs",
    "typeScriptTag": "jobs",
    "description": "Update job's form",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "xTlCompanyId",
        "schema": "guid",
        "description": "Company Id"
      },
      {
        "name": "xTlSubdomain",
        "schema": "guid",
        "description": "Account subdomain"
      },
      {
        "name": "xTlUserId",
        "schema": "guid",
        "description": "Team member id"
      },
      {
        "name": "QuestionRequiredness",
        "schema": "object",
        "description": ""
      },
      {
        "name": "Questions",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
      },
      {
        "statusCode": "400",
        "description": "Error result model"
      },
      {
        "statusCode": "401",
        "description": "Error result model"
      },
      {
        "statusCode": "403",
        "description": "Error result model"
      },
      {
        "statusCode": "404",
        "description": "Error result model"
      },
      {
        "statusCode": "500",
        "description": "Error result model"
      }
    ]
  },
  {
    "url": "/v2/members",
    "method": "viewAccountUsers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Members",
    "typeScriptTag": "members",
    "description": "View account users",
    "parameters": [
      {
        "name": "xTlCompanyId",
        "schema": "guid",
        "description": "Company Id"
      },
      {
        "name": "xTlSubdomain",
        "schema": "guid",
        "description": "Account subdomain"
      },
      {
        "name": "xTlUserId",
        "schema": "guid",
        "description": "Team member id"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Error result model"
      },
      {
        "statusCode": "403",
        "description": "Error result model"
      },
      {
        "statusCode": "500",
        "description": "Error result model"
      }
    ]
  },
  {
    "url": "/v2/pipelines",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Pipelines",
    "typeScriptTag": "pipelines",
    "description": "Retrieve all pipelines",
    "parameters": [
      {
        "name": "contains",
        "schema": "string",
        "description": ""
      },
      {
        "name": "type",
        "schema": "string",
        "description": ""
      },
      {
        "name": "includeArchived",
        "schema": "boolean",
        "description": "",
        "default": false
      },
      {
        "name": "xTlCompanyId",
        "schema": "guid",
        "description": "Company Id"
      },
      {
        "name": "xTlSubdomain",
        "schema": "guid",
        "description": "Account subdomain"
      },
      {
        "name": "xTlUserId",
        "schema": "guid",
        "description": "Team member id"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Error result model"
      },
      {
        "statusCode": "403",
        "description": "Error result model"
      },
      {
        "statusCode": "500",
        "description": "Error result model"
      }
    ]
  },
  {
    "url": "/v2/pipelines",
    "method": "createPipeline",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Pipelines",
    "typeScriptTag": "pipelines",
    "description": "Create pipeline",
    "parameters": [
      {
        "name": "xTlCompanyId",
        "schema": "guid",
        "description": "Company Id"
      },
      {
        "name": "xTlSubdomain",
        "schema": "guid",
        "description": "Account subdomain"
      },
      {
        "name": "xTlUserId",
        "schema": "guid",
        "description": "Team member id"
      },
      {
        "name": "Id",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "Name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "Type",
        "schema": "string",
        "description": ""
      },
      {
        "name": "Stages",
        "schema": "array",
        "description": ""
      },
      {
        "name": "IsActive",
        "schema": "boolean",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Error result model"
      },
      {
        "statusCode": "403",
        "description": "Error result model"
      },
      {
        "statusCode": "422",
        "description": "Error result model"
      },
      {
        "statusCode": "500",
        "description": "Error result model"
      }
    ]
  },
  {
    "url": "/v2/pipelines/{id}",
    "method": "archivePipeline",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Pipelines",
    "typeScriptTag": "pipelines",
    "description": "Arhive pipeline",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "xTlCompanyId",
        "schema": "guid",
        "description": "Company Id"
      },
      {
        "name": "xTlSubdomain",
        "schema": "guid",
        "description": "Account subdomain"
      },
      {
        "name": "xTlUserId",
        "schema": "guid",
        "description": "Team member id"
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "Accepted"
      },
      {
        "statusCode": "401",
        "description": "Error result model"
      },
      {
        "statusCode": "403",
        "description": "Error result model"
      },
      {
        "statusCode": "404",
        "description": "Error result model"
      },
      {
        "statusCode": "500",
        "description": "Error result model"
      }
    ]
  },
  {
    "url": "/v2/pipelines/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Pipelines",
    "typeScriptTag": "pipelines",
    "description": "Get pipeline",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "xTlCompanyId",
        "schema": "guid",
        "description": "Company Id"
      },
      {
        "name": "xTlSubdomain",
        "schema": "guid",
        "description": "Account subdomain"
      },
      {
        "name": "xTlUserId",
        "schema": "guid",
        "description": "Team member id"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Error result model"
      },
      {
        "statusCode": "403",
        "description": "Error result model"
      },
      {
        "statusCode": "404",
        "description": "Error result model"
      },
      {
        "statusCode": "500",
        "description": "Error result model"
      }
    ]
  },
  {
    "url": "/v2/pipelines/{id}",
    "method": "updatePipelineById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Pipelines",
    "typeScriptTag": "pipelines",
    "description": "Update pipeline",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "xTlCompanyId",
        "schema": "guid",
        "description": "Company Id"
      },
      {
        "name": "xTlSubdomain",
        "schema": "guid",
        "description": "Account subdomain"
      },
      {
        "name": "xTlUserId",
        "schema": "guid",
        "description": "Team member id"
      },
      {
        "name": "Id",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "Name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "Type",
        "schema": "string",
        "description": ""
      },
      {
        "name": "Stages",
        "schema": "array",
        "description": ""
      },
      {
        "name": "IsActive",
        "schema": "boolean",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
      },
      {
        "statusCode": "401",
        "description": "Error result model"
      },
      {
        "statusCode": "403",
        "description": "Error result model"
      },
      {
        "statusCode": "404",
        "description": "Error result model"
      },
      {
        "statusCode": "422",
        "description": "Error result model"
      },
      {
        "statusCode": "500",
        "description": "Error result model"
      }
    ]
  },
  {
    "url": "/v2/rejection_reasons",
    "method": "listRejectionReasons",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Reasons",
    "typeScriptTag": "reasons",
    "description": "Get reasons",
    "parameters": [
      {
        "name": "contains",
        "schema": "string",
        "description": ""
      },
      {
        "name": "xTlCompanyId",
        "schema": "guid",
        "description": "Company Id"
      },
      {
        "name": "xTlSubdomain",
        "schema": "guid",
        "description": "Account subdomain"
      },
      {
        "name": "xTlUserId",
        "schema": "guid",
        "description": "Team member id"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Error result model"
      },
      {
        "statusCode": "403",
        "description": "Error result model"
      },
      {
        "statusCode": "500",
        "description": "Error result model"
      }
    ]
  },
  {
    "url": "/v2/rejection_reasons",
    "method": "createReason",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Reasons",
    "typeScriptTag": "reasons",
    "description": "Create reason",
    "parameters": [
      {
        "name": "xTlCompanyId",
        "schema": "guid",
        "description": "Company Id"
      },
      {
        "name": "xTlSubdomain",
        "schema": "guid",
        "description": "Account subdomain"
      },
      {
        "name": "xTlUserId",
        "schema": "guid",
        "description": "Team member id"
      },
      {
        "name": "Id",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "Name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "Type",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "Actions",
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
        "statusCode": "401",
        "description": "Error result model"
      },
      {
        "statusCode": "403",
        "description": "Error result model"
      },
      {
        "statusCode": "422",
        "description": "Error result model"
      },
      {
        "statusCode": "500",
        "description": "Error result model"
      }
    ]
  },
  {
    "url": "/v2/rejection_reasons/{id}",
    "method": "deleteRejectionReason",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Reasons",
    "typeScriptTag": "reasons",
    "description": "Delete reason",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "targetReason",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "xTlCompanyId",
        "schema": "guid",
        "description": "Company Id"
      },
      {
        "name": "xTlSubdomain",
        "schema": "guid",
        "description": "Account subdomain"
      },
      {
        "name": "xTlUserId",
        "schema": "guid",
        "description": "Team member id"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
      },
      {
        "statusCode": "401",
        "description": "Error result model"
      },
      {
        "statusCode": "403",
        "description": "Error result model"
      },
      {
        "statusCode": "422",
        "description": "Error result model"
      },
      {
        "statusCode": "500",
        "description": "Error result model"
      }
    ]
  },
  {
    "url": "/v2/rejection_reasons/{id}",
    "method": "getRejectionReason",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Reasons",
    "typeScriptTag": "reasons",
    "description": "Get reason",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "xTlCompanyId",
        "schema": "guid",
        "description": "Company Id"
      },
      {
        "name": "xTlSubdomain",
        "schema": "guid",
        "description": "Account subdomain"
      },
      {
        "name": "xTlUserId",
        "schema": "guid",
        "description": "Team member id"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Error result model"
      },
      {
        "statusCode": "403",
        "description": "Error result model"
      },
      {
        "statusCode": "404",
        "description": "Error result model"
      },
      {
        "statusCode": "500",
        "description": "Error result model"
      }
    ]
  },
  {
    "url": "/v2/rejection_reasons/{id}",
    "method": "updateRejectionReasonById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Reasons",
    "typeScriptTag": "reasons",
    "description": "Update reason",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "xTlCompanyId",
        "schema": "guid",
        "description": "Company Id"
      },
      {
        "name": "xTlSubdomain",
        "schema": "guid",
        "description": "Account subdomain"
      },
      {
        "name": "xTlUserId",
        "schema": "guid",
        "description": "Team member id"
      },
      {
        "name": "Id",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "Name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "Type",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "Actions",
        "schema": "array",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
      },
      {
        "statusCode": "401",
        "description": "Error result model"
      },
      {
        "statusCode": "403",
        "description": "Error result model"
      },
      {
        "statusCode": "422",
        "description": "Error result model"
      },
      {
        "statusCode": "500",
        "description": "Error result model"
      }
    ]
  },
  {
    "url": "/v2/subscriptions",
    "method": "view",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Subscriptions",
    "typeScriptTag": "subscriptions",
    "description": "View Subscriptions",
    "parameters": [
      {
        "name": "xTlCompanyId",
        "schema": "guid",
        "description": "Company Id"
      },
      {
        "name": "xTlSubdomain",
        "schema": "guid",
        "description": "Account subdomain"
      },
      {
        "name": "xTlUserId",
        "schema": "guid",
        "description": "Team member id"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Error result model"
      },
      {
        "statusCode": "403",
        "description": "Error result model"
      },
      {
        "statusCode": "500",
        "description": "Error result model"
      }
    ]
  },
  {
    "url": "/v2/subscriptions",
    "method": "createSubscription",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Subscriptions",
    "typeScriptTag": "subscriptions",
    "description": "Create a Subscriptions",
    "parameters": [
      {
        "name": "xTlCompanyId",
        "schema": "guid",
        "description": "Company Id"
      },
      {
        "name": "xTlSubdomain",
        "schema": "guid",
        "description": "Account subdomain"
      },
      {
        "name": "xTlUserId",
        "schema": "guid",
        "description": "Team member id"
      },
      {
        "name": "Id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "ServiceType",
        "schema": "string",
        "description": ""
      },
      {
        "name": "Url",
        "schema": "string",
        "description": ""
      },
      {
        "name": "HubSecret",
        "schema": "string",
        "description": ""
      },
      {
        "name": "Created",
        "schema": "string",
        "description": ""
      },
      {
        "name": "Updated",
        "schema": "string",
        "description": ""
      },
      {
        "name": "Topics",
        "schema": "array",
        "description": ""
      },
      {
        "name": "AdditionalData",
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
        "statusCode": "401",
        "description": "Error result model"
      },
      {
        "statusCode": "403",
        "description": "Error result model"
      },
      {
        "statusCode": "409",
        "description": "Error result model"
      },
      {
        "statusCode": "500",
        "description": "Error result model"
      }
    ]
  },
  {
    "url": "/v2/subscriptions/{id}",
    "method": "deleteSubscription",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Subscriptions",
    "typeScriptTag": "subscriptions",
    "description": "Delete a Subscription",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "xTlCompanyId",
        "schema": "guid",
        "description": "Company Id"
      },
      {
        "name": "xTlSubdomain",
        "schema": "guid",
        "description": "Account subdomain"
      },
      {
        "name": "xTlUserId",
        "schema": "guid",
        "description": "Team member id"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
      },
      {
        "statusCode": "401",
        "description": "Error result model"
      },
      {
        "statusCode": "403",
        "description": "Error result model"
      },
      {
        "statusCode": "404",
        "description": "Error result model"
      },
      {
        "statusCode": "500",
        "description": "Error result model"
      }
    ]
  },
  {
    "url": "/v2/subscriptions/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Subscriptions",
    "typeScriptTag": "subscriptions",
    "description": "View a Subscription",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "xTlCompanyId",
        "schema": "guid",
        "description": "Company Id"
      },
      {
        "name": "xTlSubdomain",
        "schema": "guid",
        "description": "Account subdomain"
      },
      {
        "name": "xTlUserId",
        "schema": "guid",
        "description": "Team member id"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Error result model"
      },
      {
        "statusCode": "403",
        "description": "Error result model"
      },
      {
        "statusCode": "404",
        "description": "Error result model"
      },
      {
        "statusCode": "500",
        "description": "Error result model"
      }
    ]
  },
  {
    "url": "/v2/subscriptions/{id}",
    "method": "updateSubscriptionById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Subscriptions",
    "typeScriptTag": "subscriptions",
    "description": "Update a Subscription",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "xTlCompanyId",
        "schema": "guid",
        "description": "Company Id"
      },
      {
        "name": "xTlSubdomain",
        "schema": "guid",
        "description": "Account subdomain"
      },
      {
        "name": "xTlUserId",
        "schema": "guid",
        "description": "Team member id"
      },
      {
        "name": "Id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "ServiceType",
        "schema": "string",
        "description": ""
      },
      {
        "name": "Url",
        "schema": "string",
        "description": ""
      },
      {
        "name": "HubSecret",
        "schema": "string",
        "description": ""
      },
      {
        "name": "Created",
        "schema": "string",
        "description": ""
      },
      {
        "name": "Updated",
        "schema": "string",
        "description": ""
      },
      {
        "name": "Topics",
        "schema": "array",
        "description": ""
      },
      {
        "name": "AdditionalData",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
      },
      {
        "statusCode": "401",
        "description": "Error result model"
      },
      {
        "statusCode": "403",
        "description": "Error result model"
      },
      {
        "statusCode": "404",
        "description": "Error result model"
      },
      {
        "statusCode": "409",
        "description": "Error result model"
      },
      {
        "statusCode": "422",
        "description": "Error result model"
      },
      {
        "statusCode": "500",
        "description": "Error result model"
      }
    ]
  }
]
    }
      language="TypeScript"
      apiTitle="TalentLyft Customers API"
      apiBaseUrl="https://api.talentlyft.com"
      apiVersion="v2"
      endpoints={41}
      sdkMethods={66}
      schemas={243}
      parameters={577}
      difficulty="Hard"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/talentlyft/customers/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/talentlyft/customers/openapi.yaml"
      developerDocumentation="developers.talentlyft.com/"
    />
  );
}
  