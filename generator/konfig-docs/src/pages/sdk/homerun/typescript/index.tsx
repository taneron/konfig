import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function HomerunTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="homerun-typescript-sdk"
      metaDescription={`Homerun is an intuitive recruitment software that helps companies create beautiful job postings, manage applications, and streamline their hiring process. With customizable templates and easy-to-use tools, Homerun simplifies the recruitment process for both employers and candidates, making it easier to find the right talent for the job.`}
      company="Homerun"
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/homerun/logo.png"
      companyKebabCase="homerun"
      clientNameCamelCase="homerun"
      homepage="homerun.co"
      lastUpdated={new Date("2024-03-29T20:34:56.573Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/homerun/favicon.png"
      // Missing contactUrl
      // Missing contactEmail
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/homerun/imagePreview.png"
      GettingStarted={GettingStarted}
      FirstRequest={FirstRequest}
      categories={["recruiting","job_postings","applicant_tracking"]}
      methods={[
  {
    "url": "/job-applications",
    "method": "listOfApplications",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Job Applications",
    "typeScriptTag": "jobApplications",
    "description": "Get a list of job applications",
    "parameters": [
      {
        "name": "filter",
        "schema": "object",
        "required": false,
        "description": "Filter by one of the fields"
      },
      {
        "name": "include",
        "schema": "array",
        "required": false,
        "description": "Include additional information in the response"
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Change the page number to get more results",
        "default": 1
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "Change the number of object returned per page",
        "default": 15
      }
    ],
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
        "statusCode": "402",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/job-applications",
    "method": "addNewApplication",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Job Applications",
    "typeScriptTag": "jobApplications",
    "description": "Create new job applications",
    "parameters": [
      {
        "name": "first_name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FIRST_NAME"
      },
      {
        "name": "last_name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "LAST_NAME"
      },
      {
        "name": "email",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EMAIL"
      },
      {
        "name": "date_of_birth",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "1983-01-28"
      },
      {
        "name": "vacancy_id",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "job_jfGhv8FnurJalJTmp8I1"
      },
      {
        "name": "city",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Rotterdam"
      },
      {
        "name": "country",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "The Netherlands"
      },
      {
        "name": "phone_number",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "012-34567890"
      },
      {
        "name": "photo",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "https://static.homerun.co/images/hiring-with-homerun-dark.png"
      },
      {
        "name": "sourced",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": true
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
        "name": "pronouns",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "skype",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "facebook",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "twitter",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "linkedin",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "github",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "website",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "assignment",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "custom_data",
        "schema": "object",
        "required": false,
        "description": "",
        "example": {
          "internal_id": "hr-2131",
          "driving_licence": "yes"
        }
      },
      {
        "name": "sources",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "Homerun Career Page"
        ]
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/job-applications/{job_application_id}",
    "method": "removeJobApp",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Job Applications",
    "typeScriptTag": "jobApplications",
    "description": "Delete a job application",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "Job application was deleted successfully."
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
      }
    ]
  },
  {
    "url": "/job-applications/{job_application_id}",
    "method": "detailedInfo",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Job Applications",
    "typeScriptTag": "jobApplications",
    "description": "Get detailed information of a job application",
    "parameters": [
      {
        "name": "include",
        "schema": "array",
        "required": false,
        "description": "Include additional information in the response"
      }
    ],
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
        "statusCode": "402",
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/job-applications/{job_application_id}",
    "method": "updateProperties",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Job Applications",
    "typeScriptTag": "jobApplications",
    "description": "Update job application properties",
    "parameters": [
      {
        "name": "first_name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "last_name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "email",
        "schema": "string",
        "description": ""
      },
      {
        "name": "date_of_birth",
        "schema": "string",
        "description": "",
        "example": "1983-01-28"
      },
      {
        "name": "vacancy_id",
        "schema": "string",
        "description": "",
        "example": "job_jfGhv8FnurJalJTmp8I1"
      },
      {
        "name": "city",
        "schema": "string",
        "description": "",
        "example": "Rotterdam"
      },
      {
        "name": "country",
        "schema": "string",
        "description": "",
        "example": "The Netherlands"
      },
      {
        "name": "phone_number",
        "schema": "string",
        "description": "",
        "example": "012-34567890"
      },
      {
        "name": "photo",
        "schema": "string",
        "description": "",
        "example": "https://d2zr9w65gdacs9.cloudfront.net/53/14da63a1435155015.jpg"
      },
      {
        "name": "sourced",
        "schema": "boolean",
        "description": "",
        "example": true
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
        "name": "pronouns",
        "schema": "string",
        "description": ""
      },
      {
        "name": "skype",
        "schema": "string",
        "description": ""
      },
      {
        "name": "facebook",
        "schema": "string",
        "description": ""
      },
      {
        "name": "twitter",
        "schema": "string",
        "description": ""
      },
      {
        "name": "linkedin",
        "schema": "string",
        "description": ""
      },
      {
        "name": "github",
        "schema": "string",
        "description": ""
      },
      {
        "name": "website",
        "schema": "string",
        "description": ""
      },
      {
        "name": "assignment",
        "schema": "string",
        "description": ""
      },
      {
        "name": "stage",
        "schema": "object",
        "description": ""
      },
      {
        "name": "custom_data",
        "schema": "object",
        "description": "",
        "example": {
          "internal_id": "hr-2131",
          "driving_licence": "yes"
        }
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
        "statusCode": "402",
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/job-applications/{job_application_id}/notes",
    "method": "createNewNote",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Job Application Notes",
    "typeScriptTag": "jobApplicationNotes",
    "description": "Create a new note",
    "parameters": [
      {
        "name": "note",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Excellent candidate, interview scheduled for Monday."
      },
      {
        "name": "display_name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Ted"
      },
      {
        "name": "is_sensitive",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": false
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/job-applications/{job_application_id}/files",
    "method": "uploadFilesToJobApplication",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Job Application Files",
    "typeScriptTag": "jobApplicationFiles",
    "description": "Upload files to a job application",
    "parameters": [
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "resume"
      },
      {
        "name": "file",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FILE"
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
        "statusCode": "402",
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/job-applications/{job_application_id}/photo",
    "method": "uploadPhoto",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Job Application Files",
    "typeScriptTag": "jobApplicationFiles",
    "description": "Upload an applicant photo",
    "parameters": [
      {
        "name": "file",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FILE"
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
        "statusCode": "402",
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/vacancies",
    "method": "listOfVacancies",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Vacancies",
    "typeScriptTag": "vacancies",
    "description": "Get a list of vacancies",
    "parameters": [
      {
        "name": "filter",
        "schema": "object",
        "required": false,
        "description": "Name of the vacancy status"
      },
      {
        "name": "include",
        "schema": "array",
        "required": false,
        "description": "Include additional information in the response"
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Change the page number to get more results",
        "default": 1
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "Change the number of object returned per page",
        "default": 15
      }
    ],
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
        "statusCode": "402",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/vacancies/{vacancy_id}",
    "method": "detailedInfo",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Vacancies",
    "typeScriptTag": "vacancies",
    "description": "Get detailed information of a vacancy",
    "parameters": [
      {
        "name": "include",
        "schema": "array",
        "required": false,
        "description": "Include additional information in the response"
      }
    ],
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
        "statusCode": "402",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/ping",
    "method": "dummyEndpoint",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Other",
    "typeScriptTag": "other",
    "description": "Dummy endpoint for testing authentication",
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
        "statusCode": "402",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  }
]
    }
      language="TypeScript"
      apiTitle="Homerun Public API"
      apiBaseUrl="https://api.homerun.co/v2"
      apiVersion="2.0.0"
      endpoints={8}
      sdkMethods={16}
      schemas={30}
      parameters={60}
      difficulty="Very Easy"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/homerun/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/homerun/openapi.yaml"
      developerDocumentation="developers.homerun.co"
    />
  );
}
  