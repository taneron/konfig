import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function AdpWorkforceNowTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="adp-workforce-now-typescript-sdk"
      metaDescription={`Designing better ways to work through cutting-edge products, premium services and exceptional experiences that enable people to reach their full potential. HR, Talent, Time Management, Benefits and Payroll. Informed by data and designed for people.`}
      company="ADP"
      serviceName="WorkforceNow"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/adp/workforce-now/logo.png"
      companyKebabCase="adp"
      clientNameCamelCase="adpWorkforceNow"
      homepage="adp.com"
      lastUpdated={new Date("2024-03-27T01:23:25.425Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/adp/workforce-now/favicon.png"
      // Missing contactUrl
      // Missing contactEmail
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/adp/workforce-now/imagePreview.jpg"
      GettingStarted={GettingStarted}
      FirstRequest={FirstRequest}
      categories={["hr","payroll","time_management","benefits","human_capital_management","hr_bpo","payroll_tax_services","talent_management","human_resource_management","benefits_administration","time_attendance","payroll_services","professional_services","erp"]}
      methods={[
  {
    "url": "/hr/v2/workers",
    "method": "listTop5PreventCache",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "HR",
    "typeScriptTag": "hr",
    "description": "Worker V2 (List with Top 5 and Prevent Cache)",
    "parameters": [
      {
        "name": "$top",
        "schema": "string",
        "description": "",
        "example": "5"
      },
      {
        "name": "preventCache",
        "schema": "string",
        "description": "",
        "example": "TIMESTAMP"
      },
      {
        "name": "$filter",
        "schema": "string",
        "description": "",
        "example": "workers/workAssignments/homeOrganizationalUnits/typeCode/codeValue eq 'Department' and workers/workAssignments/homeOrganizationalUnits/nameCode/codeValue eq '001000'"
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
    "url": "/hr/v2/workers/{anthony-albright-aoid}",
    "method": "getWorkerByAoid",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "HR",
    "typeScriptTag": "hr",
    "description": "Worker V2 (Single by AOID)",
    "parameters": [
      {
        "name": "preventCache",
        "schema": "string",
        "description": "",
        "example": "TIMESTAMP"
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
    "url": "/core/v1/operations/workerInformationManagement/hr.v2.workers/{key}",
    "method": "checkAsyncRequestStatus",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "HR",
    "typeScriptTag": "hr",
    "description": "Worker V2 (Check Async Request Status)",
    "parameters": [
      {
        "name": "$select",
        "schema": "string",
        "description": "",
        "example": "processingStatus"
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
    "url": "/hr/v2/worker-demographics",
    "method": "listTop5PreventCache",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "HR",
    "typeScriptTag": "hr",
    "description": "Worker Demographics V2 (List with Top 5 and Prevent Cache)",
    "parameters": [
      {
        "name": "$top",
        "schema": "string",
        "description": "",
        "example": "5"
      },
      {
        "name": "preventCache",
        "schema": "string",
        "description": "",
        "example": "TIMESTAMP"
      },
      {
        "name": "$filter",
        "schema": "string",
        "description": "",
        "example": "workers/workAssignments/homeOrganizationalUnits/typeCode/codeValue eq 'Department' and workers/workAssignments/homeOrganizationalUnits/nameCode/codeValue eq '001000'"
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
    "url": "/hr/v2/worker-demographics/{anthony-albright-aoid}",
    "method": "getWorkerDemographicsByAoid",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "HR",
    "typeScriptTag": "hr",
    "description": "Worker Demographics V2 (Single by AOID)",
    "parameters": [
      {
        "name": "preventCache",
        "schema": "string",
        "description": "",
        "example": "TIMESTAMP"
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
    "url": "/payroll/v1/payroll-output",
    "method": "listPayrollOutputs",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Payroll",
    "typeScriptTag": "payroll",
    "description": "Payroll Outputs V1 (List for Region / Company Code / Year / Week)",
    "parameters": [
      {
        "name": "$filter",
        "schema": "string",
        "description": "",
        "example": "payrollScheduleReference/payrollYear eq 2018 and payrollScheduleReference/payrollWeekNumber eq 10 and payrollGroupCode/codeValue eq %26Y%26 and payrollRegionCode/codeValue eq BALT"
      },
      {
        "name": "$count",
        "schema": "string",
        "description": "",
        "example": "true"
      },
      {
        "name": "useCache",
        "schema": "string",
        "description": "",
        "example": "false"
      },
      {
        "name": "level",
        "schema": "string",
        "description": "",
        "example": "details"
      },
      {
        "name": "$select",
        "schema": "string",
        "description": "",
        "example": "earnings,reportableEarningsAndBenefits,reimbursements,statutoryDeductions,nonStatutoryDeductions,memos,configurationTags"
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
    "url": "/auth/oauth/v2/token",
    "method": "createWithAuthorizationHeader",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Token Request",
    "typeScriptTag": "tokenRequest",
    "description": "Token Request (Authorization Header)",
    "parameters": [
      {
        "name": "grantType",
        "schema": "string",
        "description": "",
        "example": "client_credentials"
      },
      {
        "name": "clientId",
        "schema": "string",
        "description": "",
        "example": "{{client-id}}"
      },
      {
        "name": "clientSecret",
        "schema": "string",
        "description": "",
        "example": "{{client-secret}}"
      }
    ],
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
      apiTitle="ADP APIs"
      apiBaseUrl="{{service-root}}"
      apiVersion="1.0.0"
      endpoints={7}
      sdkMethods={10}
      schemas={0}
      parameters={17}
      difficulty="Very Easy"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/adp/workforce-now/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/adp/workforce-now/openapi.yaml"
      developerDocumentation="developers.adp.com/build/api-explorer/hcm-offrg-wfn"
    />
  );
}
  