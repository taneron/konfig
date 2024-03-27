import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function ProliantTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="proliant-typescript-sdk"
      metaDescription={`Proliant provides a fully integrated, cloud-based human capital management solution that simplifies payroll and HR processes, improves accuracy, and ensures industry compliance. From day one, Proliant's dedicated account managers work closely with clients to ensure they get the most out of their investment.

Our all-in-one solution simplifies every aspect of workforce and talent management across the entire employment life cycle. Everyone in your organization—from the C-suite to managers and employees—benefits from using Proliant's easy to use, innovative platform. Our people are dedicated to helping your team manage their most critical assets—your people.

Proliant delivers a perfect balance of technology and services supported by experienced industry experts. Over the years we have invested time in developing innovative products that solve complex regulatory issues. Proliant is the workforce management solution of choice for over 4,000 companies nationwide.

"Proliant has done a great job managing all of our HR and tax service needs, but it's their people and customer service that have made Proliant our most preferred vendor."  - CFO for a prominent Atlanta legal firm`}
      company="Proliant"
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/proliant/logo.png"
      companyKebabCase="proliant"
      clientNameCamelCase="proliant"
      homepage="proliant.com"
      lastUpdated={new Date("2024-03-27T20:29:17.115Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/proliant/favicon.png"
      // Missing contactUrl
      // Missing contactEmail
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/proliant/imagePreview.jpg"
      GettingStarted={GettingStarted}
      FirstRequest={FirstRequest}
      categories={["payroll"]}
      methods={[
  {
    "url": "/Company/{companyId}/Employee/{employeeId}/Accrual",
    "method": "getAccruals",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Accrual",
    "typeScriptTag": "accrual",
    "description": "Gets all Accrual records associated for the provided company and employee",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The company id",
        "example": "COMPANYID"
      },
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "The employee id",
        "example": "EMPLOYEEID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "NotFound"
      }
    ]
  },
  {
    "url": "/Company/{companyId}/Employee/{employeeId}/Accrual",
    "method": "createAccrual",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Accrual",
    "typeScriptTag": "accrual",
    "description": "Creates a accrual record for the provided company and employee",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The company id",
        "example": "COMPANYID"
      },
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "The employee id",
        "example": "EMPLOYEEID"
      },
      {
        "name": "code",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CODE"
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
        "required": false,
        "description": ""
      },
      {
        "name": "lengthOfService",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "LENGTHOFSERVICE"
      },
      {
        "name": "rate",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "amount",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "hours",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "maximum",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "carryOverMaximum",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "overrideRate",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "overrideHours",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "overrideAmount",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "usedHours",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "usedAmount",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "availableHours",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "availableAmount",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "lastAccrueDate",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "LASTACCRUEDATE"
      },
      {
        "name": "lastChangeDateTime",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "lastChangeUser",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "probationHours",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "probationDollars",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "accruedHours",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "accruedDollars",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "grantedHours",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "grantedDollars",
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
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Company or accrual not found"
      }
    ]
  },
  {
    "url": "/Company/{companyId}/Employee/{employeeId}/Accrual/{code}",
    "method": "deleteAccrual",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Accrual",
    "typeScriptTag": "accrual",
    "description": "Deletes a accrual record for the provided company and employee",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The company id",
        "example": "COMPANYID"
      },
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "The employee id",
        "example": "EMPLOYEEID"
      },
      {
        "name": "code",
        "schema": "string",
        "required": true,
        "description": "The code",
        "example": "CODE"
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "Accepted"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "NotFound"
      }
    ]
  },
  {
    "url": "/Company/{companyId}/Employee/{employeeId}/Accrual/{code}",
    "method": "getEmployeeAccrualByCode",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Accrual",
    "typeScriptTag": "accrual",
    "description": "Gets a accrual record for the provided company and employee",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The company id",
        "example": "COMPANYID"
      },
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "The employee id",
        "example": "EMPLOYEEID"
      },
      {
        "name": "code",
        "schema": "string",
        "required": true,
        "description": "The record id",
        "example": "CODE"
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
        "statusCode": "404",
        "description": "NotFound"
      }
    ]
  },
  {
    "url": "/Company/{companyId}/Employee/{employeeId}/Accrual/{code}",
    "method": "updateAccrual",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Accrual",
    "typeScriptTag": "accrual",
    "description": "Updates a accrual record for the provided company and employee",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The company id",
        "example": "COMPANYID"
      },
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "The employee id",
        "example": "EMPLOYEEID"
      },
      {
        "name": "code",
        "schema": "string",
        "required": true,
        "description": "The accrual",
        "example": "CODE"
      },
      {
        "name": "code",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CODE"
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
        "required": false,
        "description": ""
      },
      {
        "name": "lengthOfService",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "LENGTHOFSERVICE"
      },
      {
        "name": "rate",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "amount",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "hours",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "maximum",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "carryOverMaximum",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "overrideRate",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "overrideHours",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "overrideAmount",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "usedHours",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "usedAmount",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "availableHours",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "availableAmount",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "lastAccrueDate",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "LASTACCRUEDATE"
      },
      {
        "name": "lastChangeDateTime",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "lastChangeUser",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "probationHours",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "probationDollars",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "accruedHours",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "accruedDollars",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "grantedHours",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "grantedDollars",
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
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Company, Employee, or accrual not found"
      }
    ]
  },
  {
    "url": "/Company/{companyId}/Accrual",
    "method": "getAccruals",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Accrual",
    "typeScriptTag": "accrual",
    "description": "Gets all Accrual records associated for the provided company",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The company id",
        "example": "COMPANYID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "NotFound"
      }
    ]
  },
  {
    "url": "/Company/{companyId}/Accrual",
    "method": "createAccrual",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Accrual",
    "typeScriptTag": "accrual",
    "description": "Creates a accrual record for the provided company",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The company id",
        "example": "COMPANYID"
      },
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "code",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CODE"
      },
      {
        "name": "probationDays",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "frequency",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "hoursBased",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "benefitEarningCode",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "workedEarningCode",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "whenCleared",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "minimumHours",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "maximumAccrueAgainstHours",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "newEmployeeFilter",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "printOnStub",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "transferBenefitCode",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "hoursOrDollars",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "checkStubDesc",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "divisor",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "lastDate",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "decimals",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "Id",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "00000000-0000-0000-0000-000000000000"
      },
      {
        "name": "lastChangeDateTime",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "lastChangeUser",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "employeeOverrideMaxIsAvailable",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "transferExcessBenefitCode",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "transferExcessMaximum",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "whenClearedDays",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "paidEmployeesOnly",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "calcDollarsWithCurrentPayRate",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "serviceOption",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "applyRulesESTA",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "allowRequests",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "allowNegativeRequests",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
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
        "statusCode": "404",
        "description": "Company or accrual not found"
      }
    ]
  },
  {
    "url": "/Company/{companyId}/Accrual/{code}",
    "method": "deleteAccrual",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Accrual",
    "typeScriptTag": "accrual",
    "description": "Deletes a accrual record for the provided company",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The company id",
        "example": "COMPANYID"
      },
      {
        "name": "code",
        "schema": "string",
        "required": true,
        "description": "The code",
        "example": "CODE"
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "Accepted"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "NotFound"
      }
    ]
  },
  {
    "url": "/Company/{companyId}/Accrual/{code}",
    "method": "getAccrualByCode",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Accrual",
    "typeScriptTag": "accrual",
    "description": "Gets a accrual record for the provided company",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The company id",
        "example": "COMPANYID"
      },
      {
        "name": "code",
        "schema": "string",
        "required": true,
        "description": "The record id",
        "example": "CODE"
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
        "statusCode": "404",
        "description": "NotFound"
      }
    ]
  },
  {
    "url": "/Company/{companyId}/Accrual/{code}",
    "method": "updateAccrual",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Accrual",
    "typeScriptTag": "accrual",
    "description": "Updates a accrual record for the provided company",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The company id",
        "example": "COMPANYID"
      },
      {
        "name": "code",
        "schema": "string",
        "required": true,
        "description": "The accrual",
        "example": "CODE"
      },
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "code",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CODE"
      },
      {
        "name": "probationDays",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "frequency",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "hoursBased",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "benefitEarningCode",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "workedEarningCode",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "whenCleared",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "minimumHours",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "maximumAccrueAgainstHours",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "newEmployeeFilter",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "printOnStub",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "transferBenefitCode",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "hoursOrDollars",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "checkStubDesc",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "divisor",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "lastDate",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "decimals",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "Id",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "00000000-0000-0000-0000-000000000000"
      },
      {
        "name": "lastChangeDateTime",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "lastChangeUser",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "employeeOverrideMaxIsAvailable",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "transferExcessBenefitCode",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "transferExcessMaximum",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "whenClearedDays",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "paidEmployeesOnly",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "calcDollarsWithCurrentPayRate",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "serviceOption",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "applyRulesESTA",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "allowRequests",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "allowNegativeRequests",
        "schema": "boolean",
        "required": true,
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
        "statusCode": "404",
        "description": "Company or accrual code not found"
      }
    ]
  },
  {
    "url": "/Company/{companyId}/Employee/{employeeId}/Certification",
    "method": "getEmployeeCertifications",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Certification",
    "typeScriptTag": "certification",
    "description": "Gets certifications for an employee in a company",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The company id",
        "example": "COMPANYID"
      },
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "The employee id",
        "example": "EMPLOYEEID"
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
        "statusCode": "404",
        "description": "Employee or Company not found"
      }
    ]
  },
  {
    "url": "/Company/{companyId}/Employee/{employeeId}/Certification",
    "method": "createEmployeeCertification",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Certification",
    "typeScriptTag": "certification",
    "description": "Creates a certification for an employee in a company",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The company id",
        "example": "COMPANYID"
      },
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "The employee id",
        "example": "EMPLOYEEID"
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
        "required": false,
        "description": "",
        "example": "00000000-0000-0000-0000-000000000000"
      },
      {
        "name": "code",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CODE"
      },
      {
        "name": "number",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "effectiveDate",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "expirationDate",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "companyPaid",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "employeePaid",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "reimbursed",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "notes",
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
        "statusCode": "404",
        "description": "Company not found"
      }
    ]
  },
  {
    "url": "/Company/{companyId}/Employee/{employeeId}/Certification/{certificationId}",
    "method": "deleteEmployeeCertification",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Certification",
    "typeScriptTag": "certification",
    "description": "Deletes a certification for an employee in a company",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The company id",
        "example": "COMPANYID"
      },
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "The employee id",
        "example": "EMPLOYEEID"
      },
      {
        "name": "certificationId",
        "schema": "string",
        "required": true,
        "description": "The certification id",
        "example": "CERTIFICATIONID"
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "Accepted"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Company, id, or certification not found"
      }
    ]
  },
  {
    "url": "/Company/{companyId}/Employee/{employeeId}/Certification/{certificationId}",
    "method": "updateEmployeeCertification",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Certification",
    "typeScriptTag": "certification",
    "description": "Updates a certification for an employee in a company",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The company id",
        "example": "COMPANYID"
      },
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "The employee id",
        "example": "EMPLOYEEID"
      },
      {
        "name": "certificationId",
        "schema": "string",
        "required": true,
        "description": "The certification id",
        "example": "CERTIFICATIONID"
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
        "required": false,
        "description": "",
        "example": "00000000-0000-0000-0000-000000000000"
      },
      {
        "name": "code",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CODE"
      },
      {
        "name": "number",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "effectiveDate",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "expirationDate",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "companyPaid",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "employeePaid",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "reimbursed",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "notes",
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
        "statusCode": "404",
        "description": "Company not found"
      }
    ]
  },
  {
    "url": "/Company",
    "method": "getCompanies",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Company",
    "typeScriptTag": "company",
    "description": "Gets a lookup list companies available to the current client",
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
        "statusCode": "404",
        "description": "Company not found"
      }
    ]
  },
  {
    "url": "/Company/{companyId}",
    "method": "getCompany",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Company",
    "typeScriptTag": "company",
    "description": "Gets Company information by company Id",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The company id",
        "example": "COMPANYID"
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
        "statusCode": "404",
        "description": "Company not found"
      }
    ]
  },
  {
    "url": "/Company/{companyId}/CostCenter1",
    "method": "getCc1",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "CostCenters",
    "typeScriptTag": "costCenters",
    "description": "Gets all Cost Center 1 records associated for the provided company",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The company id",
        "example": "COMPANYID"
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
        "statusCode": "404",
        "description": "Company not found"
      }
    ]
  },
  {
    "url": "/Company/{companyId}/CostCenter1",
    "method": "createCc1",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "CostCenters",
    "typeScriptTag": "costCenters",
    "description": "Creates a Cost Center 1 record for the provided company",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The company id",
        "example": "COMPANYID"
      },
      {
        "name": "active",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "address1",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "address2",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "code",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "city",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "country",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "county",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "overrideCheckAcctName",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "overrideRate",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "overrideRateCode",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "overrideShift",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "phone",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "state",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "supervisor",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "useThisAddrOnChecks",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "wcc",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "zip",
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
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Company not found"
      }
    ]
  },
  {
    "url": "/Company/{companyId}/CostCenter1/{cc}",
    "method": "deleteCc1",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "CostCenters",
    "typeScriptTag": "costCenters",
    "description": "Deletes a Cost Center 1 record for the provided company",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The company id",
        "example": "COMPANYID"
      },
      {
        "name": "cc",
        "schema": "string",
        "required": true,
        "description": "The cost center id",
        "example": "CC"
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Company not found"
      }
    ]
  },
  {
    "url": "/Company/{companyId}/CostCenter1/{cc}",
    "method": "getCc1",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "CostCenters",
    "typeScriptTag": "costCenters",
    "description": "Gets a Cost Center 1 record for the provided company",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The company id",
        "example": "COMPANYID"
      },
      {
        "name": "cc",
        "schema": "string",
        "required": true,
        "description": "The record id",
        "example": "CC"
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
        "statusCode": "404",
        "description": "Company or record not found"
      }
    ]
  },
  {
    "url": "/Company/{companyId}/CostCenter1/{cc}",
    "method": "updateCc1",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "CostCenters",
    "typeScriptTag": "costCenters",
    "description": "Updates a Cost Center 1 record for the provided company",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The company id",
        "example": "COMPANYID"
      },
      {
        "name": "cc",
        "schema": "string",
        "required": true,
        "description": "The cost center id",
        "example": "CC"
      },
      {
        "name": "active",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "address1",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "address2",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "code",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "city",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "country",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "county",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "overrideCheckAcctName",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "overrideRate",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "overrideRateCode",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "overrideShift",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "phone",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "state",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "supervisor",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "useThisAddrOnChecks",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "wcc",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "zip",
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
        "statusCode": "404",
        "description": "Company or cost center not found"
      }
    ]
  },
  {
    "url": "/Company/{companyId}/CostCenter2",
    "method": "getCc2",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "CostCenters",
    "typeScriptTag": "costCenters",
    "description": "Gets all Cost Center 2 records associated for the provided company",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The company id",
        "example": "COMPANYID"
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
        "statusCode": "404",
        "description": "Company not found"
      }
    ]
  },
  {
    "url": "/Company/{companyId}/CostCenter2",
    "method": "createCc2",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "CostCenters",
    "typeScriptTag": "costCenters",
    "description": "Creates a Cost Center 2 record for the provided company",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The company id",
        "example": "COMPANYID"
      },
      {
        "name": "active",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "address1",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "address2",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "code",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "city",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "country",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "county",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "overrideCheckAcctName",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "overrideRate",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "overrideRateCode",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "overrideShift",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "phone",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "state",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "supervisor",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "useThisAddrOnChecks",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "wcc",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "zip",
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
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Company not found"
      }
    ]
  },
  {
    "url": "/Company/{companyId}/CostCenter2/{cc}",
    "method": "deleteCc2",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "CostCenters",
    "typeScriptTag": "costCenters",
    "description": "Deletes a Cost Center 2 record for the provided company",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The company id",
        "example": "COMPANYID"
      },
      {
        "name": "cc",
        "schema": "string",
        "required": true,
        "description": "The cost center id",
        "example": "CC"
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Company not found"
      }
    ]
  },
  {
    "url": "/Company/{companyId}/CostCenter2/{cc}",
    "method": "getCc2",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "CostCenters",
    "typeScriptTag": "costCenters",
    "description": "Gets a Cost Center 2 record for the provided company",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The company id",
        "example": "COMPANYID"
      },
      {
        "name": "cc",
        "schema": "string",
        "required": true,
        "description": "The record id",
        "example": "CC"
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
        "statusCode": "404",
        "description": "Company not found"
      }
    ]
  },
  {
    "url": "/Company/{companyId}/CostCenter2/{cc}",
    "method": "updateCc2",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "CostCenters",
    "typeScriptTag": "costCenters",
    "description": "Updates a Cost Center 2 record for the provided company",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The company id",
        "example": "COMPANYID"
      },
      {
        "name": "cc",
        "schema": "string",
        "required": true,
        "description": "The cost center id",
        "example": "CC"
      },
      {
        "name": "active",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "address1",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "address2",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "code",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "city",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "country",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "county",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "overrideCheckAcctName",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "overrideRate",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "overrideRateCode",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "overrideShift",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "phone",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "state",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "supervisor",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "useThisAddrOnChecks",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "wcc",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "zip",
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
        "statusCode": "404",
        "description": "Company or cost center not found"
      }
    ]
  },
  {
    "url": "/Company/{companyId}/CostCenter3",
    "method": "getCc3",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "CostCenters",
    "typeScriptTag": "costCenters",
    "description": "Gets all Cost Center 3 records associated for the provided company",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The company id",
        "example": "COMPANYID"
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
        "statusCode": "404",
        "description": "Company not found"
      }
    ]
  },
  {
    "url": "/Company/{companyId}/CostCenter3",
    "method": "createCc3",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "CostCenters",
    "typeScriptTag": "costCenters",
    "description": "Creates a Cost Center 3 record for the provided company",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The company id",
        "example": "COMPANYID"
      },
      {
        "name": "active",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "address1",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "address2",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "code",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "city",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "country",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "county",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "overrideCheckAcctName",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "overrideRate",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "overrideRateCode",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "overrideShift",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "phone",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "state",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "supervisor",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "useThisAddrOnChecks",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "wcc",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "zip",
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
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Company not found"
      }
    ]
  },
  {
    "url": "/Company/{companyId}/CostCenter3/{cc}",
    "method": "deleteCc3",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "CostCenters",
    "typeScriptTag": "costCenters",
    "description": "Deletes a Cost Center 3 record for the provided company",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The company id",
        "example": "COMPANYID"
      },
      {
        "name": "cc",
        "schema": "string",
        "required": true,
        "description": "The cost center id",
        "example": "CC"
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Company not found"
      }
    ]
  },
  {
    "url": "/Company/{companyId}/CostCenter3/{cc}",
    "method": "getCc3",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "CostCenters",
    "typeScriptTag": "costCenters",
    "description": "Gets a Cost Center 3 record for the provided company",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The company id",
        "example": "COMPANYID"
      },
      {
        "name": "cc",
        "schema": "string",
        "required": true,
        "description": "The record id",
        "example": "CC"
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
        "statusCode": "404",
        "description": "Company not found"
      }
    ]
  },
  {
    "url": "/Company/{companyId}/CostCenter3/{cc}",
    "method": "updateCc3",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "CostCenters",
    "typeScriptTag": "costCenters",
    "description": "Updates a Cost Center 3 record for the provided company",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The company id",
        "example": "COMPANYID"
      },
      {
        "name": "cc",
        "schema": "string",
        "required": true,
        "description": "The cost center id",
        "example": "CC"
      },
      {
        "name": "active",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "address1",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "address2",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "code",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "city",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "country",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "county",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "overrideCheckAcctName",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "overrideRate",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "overrideRateCode",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "overrideShift",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "phone",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "state",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "supervisor",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "useThisAddrOnChecks",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "wcc",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "zip",
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
        "statusCode": "404",
        "description": "Company not found"
      }
    ]
  },
  {
    "url": "/Company/{companyId}/CostCenter4",
    "method": "getCc4",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "CostCenters",
    "typeScriptTag": "costCenters",
    "description": "Gets all Cost Center 4 records associated for the provided company",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The company id",
        "example": "COMPANYID"
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
        "statusCode": "404",
        "description": "Company not found"
      }
    ]
  },
  {
    "url": "/Company/{companyId}/CostCenter4",
    "method": "createCc4",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "CostCenters",
    "typeScriptTag": "costCenters",
    "description": "Creates a Cost Center 4 record for the provided company",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The company id",
        "example": "COMPANYID"
      },
      {
        "name": "active",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "address1",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "address2",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "code",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "city",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "country",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "county",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "overrideCheckAcctName",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "overrideRate",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "overrideRateCode",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "overrideShift",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "phone",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "state",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "supervisor",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "useThisAddrOnChecks",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "wcc",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "zip",
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
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Company not found"
      }
    ]
  },
  {
    "url": "/Company/{companyId}/CostCenter4/{cc}",
    "method": "deleteCc4",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "CostCenters",
    "typeScriptTag": "costCenters",
    "description": "Deletes a Cost Center 4 record for the provided company",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The company id",
        "example": "COMPANYID"
      },
      {
        "name": "cc",
        "schema": "string",
        "required": true,
        "description": "The cost center id",
        "example": "CC"
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Company not found"
      }
    ]
  },
  {
    "url": "/Company/{companyId}/CostCenter4/{cc}",
    "method": "getCc4",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "CostCenters",
    "typeScriptTag": "costCenters",
    "description": "Gets a Cost Center 4 record for the provided company",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The company id",
        "example": "COMPANYID"
      },
      {
        "name": "cc",
        "schema": "string",
        "required": true,
        "description": "The record id",
        "example": "CC"
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
        "statusCode": "404",
        "description": "Company not found"
      }
    ]
  },
  {
    "url": "/Company/{companyId}/CostCenter4/{cc}",
    "method": "updateCc4",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "CostCenters",
    "typeScriptTag": "costCenters",
    "description": "Updates a Cost Center 4 record for the provided company",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The company id",
        "example": "COMPANYID"
      },
      {
        "name": "cc",
        "schema": "string",
        "required": true,
        "description": "The cost center id",
        "example": "CC"
      },
      {
        "name": "active",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "address1",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "address2",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "code",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "city",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "country",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "county",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "overrideCheckAcctName",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "overrideRate",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "overrideRateCode",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "overrideShift",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "phone",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "state",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "supervisor",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "useThisAddrOnChecks",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "wcc",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "zip",
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
        "statusCode": "404",
        "description": "Company or cost center not found"
      }
    ]
  },
  {
    "url": "/Company/{companyId}/CostCenter5",
    "method": "getCc5",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "CostCenters",
    "typeScriptTag": "costCenters",
    "description": "Gets all Cost Center 5 records associated for the provided company",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The company id",
        "example": "COMPANYID"
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
        "statusCode": "404",
        "description": "Company not found"
      }
    ]
  },
  {
    "url": "/Company/{companyId}/CostCenter5",
    "method": "createCc5",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "CostCenters",
    "typeScriptTag": "costCenters",
    "description": "Creates a Cost Center 5 record for the provided company",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The company id",
        "example": "COMPANYID"
      },
      {
        "name": "active",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "address1",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "address2",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "code",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "city",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "country",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "county",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "overrideCheckAcctName",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "overrideRate",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "overrideRateCode",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "overrideShift",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "phone",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "state",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "supervisor",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "useThisAddrOnChecks",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "wcc",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "zip",
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
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Company not found"
      }
    ]
  },
  {
    "url": "/Company/{companyId}/CostCenter5/{cc}",
    "method": "deleteCc5",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "CostCenters",
    "typeScriptTag": "costCenters",
    "description": "Deletes a Cost Center 5 record for the provided company",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The company id",
        "example": "COMPANYID"
      },
      {
        "name": "cc",
        "schema": "string",
        "required": true,
        "description": "The cost center id",
        "example": "CC"
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Company not found"
      }
    ]
  },
  {
    "url": "/Company/{companyId}/CostCenter5/{cc}",
    "method": "getCc5",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "CostCenters",
    "typeScriptTag": "costCenters",
    "description": "Gets a Cost Center 5 record for the provided company",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The company id",
        "example": "COMPANYID"
      },
      {
        "name": "cc",
        "schema": "string",
        "required": true,
        "description": "The record id",
        "example": "CC"
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
        "statusCode": "404",
        "description": "Company not found"
      }
    ]
  },
  {
    "url": "/Company/{companyId}/CostCenter5/{cc}",
    "method": "updateCc5",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "CostCenters",
    "typeScriptTag": "costCenters",
    "description": "Updates a Cost Center 5 record for the provided company",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The company id",
        "example": "COMPANYID"
      },
      {
        "name": "cc",
        "schema": "string",
        "required": true,
        "description": "The cost center id",
        "example": "CC"
      },
      {
        "name": "active",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "address1",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "address2",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "code",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "city",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "country",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "county",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "overrideCheckAcctName",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "overrideRate",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "overrideRateCode",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "overrideShift",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "phone",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "state",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "supervisor",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "useThisAddrOnChecks",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "wcc",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "zip",
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
        "statusCode": "404",
        "description": "Company or cost center not found"
      }
    ]
  },
  {
    "url": "/Company/{companyId}/DailyPay/earnings",
    "method": "addEarnings",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "DailyPay",
    "typeScriptTag": "dailyPay",
    "description": "Adds earnings to one or more employee check(s) in the daily pay batch.",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The company id",
        "example": "COMPANYID"
      },
      {
        "name": "fullTimecardReload",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "includeCheckDetails",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "earnings",
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
      },
      {
        "statusCode": "404",
        "description": "Company or deduction code not found"
      }
    ]
  },
  {
    "url": "/Company/{companyId}/DailyPay/calendars",
    "method": "getCurrentCalendars",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "DailyPay",
    "typeScriptTag": "dailyPay",
    "description": "Gets a list of current active Daily Pay calendars for the company.",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The company id",
        "example": "COMPANYID"
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
    "url": "/Company/{companyId}/DailyPay/calendars/{date}",
    "method": "getCurrentCalendars",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "DailyPay",
    "typeScriptTag": "dailyPay",
    "description": "Gets a list of current active Daily Pay calendars for the company by date.",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The company id",
        "example": "COMPANYID"
      },
      {
        "name": "date",
        "schema": "string",
        "required": true,
        "description": "The date",
        "example": "DATE"
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
    "url": "/Company/{companyId}/DailyPay/earnings/{calendarId}",
    "method": "getEarnings",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "DailyPay",
    "typeScriptTag": "dailyPay",
    "description": "Gets earnings details by calendar for the designated daily pay batch, optionally filtered by a list of employee ids",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The company id",
        "example": "COMPANYID"
      },
      {
        "name": "calendarId",
        "schema": "string",
        "required": true,
        "description": "The calendar id",
        "example": "CALENDARID"
      },
      {
        "name": "employeeIds",
        "schema": "string",
        "required": false,
        "description": "Optional comma delimited list of employeeIds"
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
        "statusCode": "404",
        "description": "Company or deduction code not found"
      }
    ]
  },
  {
    "url": "/Company/{companyId}/DeductionCode",
    "method": "getDeductionCodes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "DeductionCode",
    "typeScriptTag": "deductionCode",
    "description": "Gets all deduction code records associated for the provided company",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The company id",
        "example": "COMPANYID"
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
        "statusCode": "404",
        "description": "Company not found"
      }
    ]
  },
  {
    "url": "/Company/{companyId}/DeductionCode",
    "method": "createDeductionCode",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "DeductionCode",
    "typeScriptTag": "deductionCode",
    "description": "Creates a deduction code record for the provided company",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The company id",
        "example": "COMPANYID"
      },
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "code",
        "schema": "string",
        "description": ""
      },
      {
        "name": "shortDescription",
        "schema": "string",
        "description": ""
      },
      {
        "name": "dedType",
        "schema": "string",
        "description": ""
      },
      {
        "name": "priority",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "w2Field",
        "schema": "string",
        "description": ""
      },
      {
        "name": "printOnCheckStub",
        "schema": "string",
        "description": ""
      },
      {
        "name": "minimum",
        "schema": "number",
        "description": ""
      },
      {
        "name": "maximum",
        "schema": "number",
        "description": ""
      },
      {
        "name": "annualMaximum",
        "schema": "number",
        "description": ""
      },
      {
        "name": "rate",
        "schema": "number",
        "description": ""
      },
      {
        "name": "autoDrop",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "dropPartial",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "autoMakeup",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "frequency",
        "schema": "string",
        "description": ""
      },
      {
        "name": "calculationCode",
        "schema": "string",
        "description": ""
      },
      {
        "name": "agency",
        "schema": "string",
        "description": ""
      },
      {
        "name": "taxExempt",
        "schema": "string",
        "description": ""
      },
      {
        "name": "grossCheck",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "disallowOverrideCalcCode",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "disallowOverrideRate",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "disallowOverrideFrequency",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "disallowOverrideAgency",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "disallowOverrideMinimum",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "disallowOverrideMaximum",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "disallowOverrideAnnualMaximum",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "enrollmentEffective",
        "schema": "string",
        "description": ""
      },
      {
        "name": "employeeACH",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "active",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "usePeriodDates",
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
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Company or deduction code not found"
      }
    ]
  },
  {
    "url": "/Company/{companyId}/DeductionCode/{code}",
    "method": "deleteDeductionCode",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "DeductionCode",
    "typeScriptTag": "deductionCode",
    "description": "Deletes a deduction code record for the provided company",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The company id",
        "example": "COMPANYID"
      },
      {
        "name": "code",
        "schema": "string",
        "required": true,
        "description": "The code",
        "example": "CODE"
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "Accepted"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Company or deduction code not found"
      }
    ]
  },
  {
    "url": "/Company/{companyId}/DeductionCode/{code}",
    "method": "getDeductionCode",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "DeductionCode",
    "typeScriptTag": "deductionCode",
    "description": "Gets a Deduction Code record for the provided company",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The company id",
        "example": "COMPANYID"
      },
      {
        "name": "code",
        "schema": "string",
        "required": true,
        "description": "The record id",
        "example": "CODE"
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
        "statusCode": "404",
        "description": "Company or deduction code not found"
      }
    ]
  },
  {
    "url": "/Company/{companyId}/DeductionCode/{code}",
    "method": "updateDeductionCode",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "DeductionCode",
    "typeScriptTag": "deductionCode",
    "description": "Updates a Deduction Code record for the provided company",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The company id",
        "example": "COMPANYID"
      },
      {
        "name": "code",
        "schema": "string",
        "required": true,
        "description": "The deduction code",
        "example": "CODE"
      },
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "code",
        "schema": "string",
        "description": ""
      },
      {
        "name": "shortDescription",
        "schema": "string",
        "description": ""
      },
      {
        "name": "dedType",
        "schema": "string",
        "description": ""
      },
      {
        "name": "priority",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "w2Field",
        "schema": "string",
        "description": ""
      },
      {
        "name": "printOnCheckStub",
        "schema": "string",
        "description": ""
      },
      {
        "name": "minimum",
        "schema": "number",
        "description": ""
      },
      {
        "name": "maximum",
        "schema": "number",
        "description": ""
      },
      {
        "name": "annualMaximum",
        "schema": "number",
        "description": ""
      },
      {
        "name": "rate",
        "schema": "number",
        "description": ""
      },
      {
        "name": "autoDrop",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "dropPartial",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "autoMakeup",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "frequency",
        "schema": "string",
        "description": ""
      },
      {
        "name": "calculationCode",
        "schema": "string",
        "description": ""
      },
      {
        "name": "agency",
        "schema": "string",
        "description": ""
      },
      {
        "name": "taxExempt",
        "schema": "string",
        "description": ""
      },
      {
        "name": "grossCheck",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "disallowOverrideCalcCode",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "disallowOverrideRate",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "disallowOverrideFrequency",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "disallowOverrideAgency",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "disallowOverrideMinimum",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "disallowOverrideMaximum",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "disallowOverrideAnnualMaximum",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "enrollmentEffective",
        "schema": "string",
        "description": ""
      },
      {
        "name": "employeeACH",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "active",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "usePeriodDates",
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
      },
      {
        "statusCode": "404",
        "description": "Company or deduction code not found"
      }
    ]
  },
  {
    "url": "/Company/{companyId}/EarningCode",
    "method": "getEarningCodes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "EarningCode",
    "typeScriptTag": "earningCode",
    "description": "Gets all earning code records associated for the provided company",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The company id",
        "example": "COMPANYID"
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
        "statusCode": "404",
        "description": "Company not found"
      }
    ]
  },
  {
    "url": "/Company/{companyId}/EarningCode",
    "method": "createEarningCode",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "EarningCode",
    "typeScriptTag": "earningCode",
    "description": "Creates a earning code record for the provided company",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The company id",
        "example": "COMPANYID"
      },
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "code",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CODE"
      },
      {
        "name": "shortDescription",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "earnType",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "minimum",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "maximum",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "annualMaximum",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "overrideRate",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "addToRate",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "rateMultiplier",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "overrideShift",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "unitDescription",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "autoDrop",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "calculationCode",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "rateCode",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "amount",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "frequency",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "units",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "rate",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "agency",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "dCode",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "reduceAutoPay",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "taxExempt",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "worked",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "disallowOverrideCalcCode",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "disallowOverrideRate",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "disallowOverrideUnits",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "disallowOverrideAmount",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "disallowOverrideFrequency",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "disallowOverrideAgency",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "disallowOverrideMinimum",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "disallowOverrideMaximum",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "disallowOverrideAnnualMaximum",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "active",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "usePeriodDates",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "payrollType",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "allowCobra",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "subCategory",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "jobClassificationCode",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "includeInWeightedAvgOT",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "weightedOTAmount",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "week1Code",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "week2Code",
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
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Company or earning code not found"
      }
    ]
  },
  {
    "url": "/Company/{companyId}/EarningCode/{code}",
    "method": "deleteEarningCode",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "EarningCode",
    "typeScriptTag": "earningCode",
    "description": "Deletes a earning code record for the provided company",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The company id",
        "example": "COMPANYID"
      },
      {
        "name": "code",
        "schema": "string",
        "required": true,
        "description": "The code",
        "example": "CODE"
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "Accepted"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Company or earning code not found"
      }
    ]
  },
  {
    "url": "/Company/{companyId}/EarningCode/{code}",
    "method": "getEarningCode",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "EarningCode",
    "typeScriptTag": "earningCode",
    "description": "Gets a earning code record for the provided company",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The company id",
        "example": "COMPANYID"
      },
      {
        "name": "code",
        "schema": "string",
        "required": true,
        "description": "The record id",
        "example": "CODE"
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
        "statusCode": "404",
        "description": "Company or earning code not found"
      }
    ]
  },
  {
    "url": "/Company/{companyId}/EarningCode/{code}",
    "method": "updateEarningCode",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "EarningCode",
    "typeScriptTag": "earningCode",
    "description": "Updates a earning code record for the provided company",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The company id",
        "example": "COMPANYID"
      },
      {
        "name": "code",
        "schema": "string",
        "required": true,
        "description": "The earning code",
        "example": "CODE"
      },
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "code",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CODE"
      },
      {
        "name": "shortDescription",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "earnType",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "minimum",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "maximum",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "annualMaximum",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "overrideRate",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "addToRate",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "rateMultiplier",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "overrideShift",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "unitDescription",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "autoDrop",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "calculationCode",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "rateCode",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "amount",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "frequency",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "units",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "rate",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "agency",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "dCode",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "reduceAutoPay",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "taxExempt",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "worked",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "disallowOverrideCalcCode",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "disallowOverrideRate",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "disallowOverrideUnits",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "disallowOverrideAmount",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "disallowOverrideFrequency",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "disallowOverrideAgency",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "disallowOverrideMinimum",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "disallowOverrideMaximum",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "disallowOverrideAnnualMaximum",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "active",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "usePeriodDates",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "payrollType",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "allowCobra",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "subCategory",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "jobClassificationCode",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "includeInWeightedAvgOT",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "weightedOTAmount",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "week1Code",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "week2Code",
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
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Company or earning code not found"
      }
    ]
  },
  {
    "url": "/Company/{companyId}/Earnings",
    "method": "addEarnings",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Earnings",
    "typeScriptTag": "earnings",
    "description": "Adds earnings to one or more employee check(s) in the regular batch.",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The company id",
        "example": "COMPANYID"
      },
      {
        "name": "fullTimecardReload",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "includeCheckDetails",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "earnings",
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
      },
      {
        "statusCode": "404",
        "description": "Company or deduction code not found"
      }
    ]
  },
  {
    "url": "/Company/{companyId}/Earnings/{calendarId}/{batch}",
    "method": "getEarnings",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Earnings",
    "typeScriptTag": "earnings",
    "description": "Gets earnings details by calendar and batch, optionally filtered by a list of employee ids",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The company id",
        "example": "COMPANYID"
      },
      {
        "name": "calendarId",
        "schema": "string",
        "required": true,
        "description": "The calendar id",
        "example": "CALENDARID"
      },
      {
        "name": "batch",
        "schema": "string",
        "required": true,
        "description": "The batch",
        "example": "BATCH"
      },
      {
        "name": "employeeIds",
        "schema": "string",
        "required": false,
        "description": "Optional comma delimited list of employeeIds"
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
        "statusCode": "404",
        "description": "Company or deduction code not found"
      }
    ]
  },
  {
    "url": "/Company/{companyId}/Earnings/calendars",
    "method": "getCurrentCalendars",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Earnings",
    "typeScriptTag": "earnings",
    "description": "Gets a list of calendars for the company using today as the transaction date.",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The company id",
        "example": "COMPANYID"
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
    "url": "/Company/{companyId}/Earnings/calendars/{date}",
    "method": "getCurrentCalendars",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Earnings",
    "typeScriptTag": "earnings",
    "description": "Gets a list of calendars for the company by date.",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The company id",
        "example": "COMPANYID"
      },
      {
        "name": "date",
        "schema": "string",
        "required": true,
        "description": "The transaction date",
        "example": "DATE"
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
    "url": "/Company/{companyId}/Earnings/calendars/search",
    "method": "getAllCalendars",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Earnings",
    "typeScriptTag": "earnings",
    "description": "Gets a list of calendars for the company between the start and end date",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The company id",
        "example": "COMPANYID"
      },
      {
        "name": "startDate",
        "schema": "string",
        "required": false,
        "description": "Start date (defaults to 1980-01-01)"
      },
      {
        "name": "endDate",
        "schema": "string",
        "required": false,
        "description": "End date (defaults to 2100-12-31)"
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
    "url": "/Company/{companyId}/Employee/{employeeId}/Education",
    "method": "getEmployeeEducations",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Education",
    "typeScriptTag": "education",
    "description": "Gets Educations for an employee in a company",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The company id",
        "example": "COMPANYID"
      },
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "The employee id",
        "example": "EMPLOYEEID"
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
        "statusCode": "404",
        "description": "Employee or Company not found"
      }
    ]
  },
  {
    "url": "/Company/{companyId}/Employee/{employeeId}/Education",
    "method": "createEmployeeEducation",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Education",
    "typeScriptTag": "education",
    "description": "Creates Education for an employee in a company",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The company id",
        "example": "COMPANYID"
      },
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "The employee id",
        "example": "EMPLOYEEID"
      },
      {
        "name": "id",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "00000000-0000-0000-0000-000000000000"
      },
      {
        "name": "school",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SCHOOL"
      },
      {
        "name": "years",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "gpa",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "graduated",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "major",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "degree",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "classes",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "awards",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "notes",
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
        "statusCode": "404",
        "description": "Company not found"
      }
    ]
  },
  {
    "url": "/Company/{companyId}/Employee/{employeeId}/Education/{educationId}",
    "method": "deleteEmployeeEducation",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Education",
    "typeScriptTag": "education",
    "description": "Deletes an education record for an employee in a company",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The company id",
        "example": "COMPANYID"
      },
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "The employee id",
        "example": "EMPLOYEEID"
      },
      {
        "name": "educationId",
        "schema": "string",
        "required": true,
        "description": "The education id",
        "example": "EDUCATIONID"
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "Accepted"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Company not found"
      }
    ]
  },
  {
    "url": "/Company/{companyId}/Employee/{employeeId}/Education/{educationId}",
    "method": "updateEmployeeEducation",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Education",
    "typeScriptTag": "education",
    "description": "Updates Education for an employee in a company",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The company id",
        "example": "COMPANYID"
      },
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "The employee id",
        "example": "EMPLOYEEID"
      },
      {
        "name": "educationId",
        "schema": "string",
        "required": true,
        "description": "The Education id",
        "example": "EDUCATIONID"
      },
      {
        "name": "id",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "00000000-0000-0000-0000-000000000000"
      },
      {
        "name": "school",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SCHOOL"
      },
      {
        "name": "years",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "gpa",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "graduated",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "major",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "degree",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "classes",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "awards",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "notes",
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
        "statusCode": "404",
        "description": "Company not found"
      }
    ]
  },
  {
    "url": "/Company/{companyId}/Employee",
    "method": "getEmployees",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Employee",
    "typeScriptTag": "employee",
    "description": "Get employees from a company based on search criteria",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The company id",
        "example": "COMPANYID"
      },
      {
        "name": "searchCriteriaCostCenter1",
        "schema": "string",
        "required": false,
        "description": "Cost center 1"
      },
      {
        "name": "searchCriteriaCostCenter2",
        "schema": "string",
        "required": false,
        "description": "Cost center 2"
      },
      {
        "name": "searchCriteriaCostCenter3",
        "schema": "string",
        "required": false,
        "description": "Cost center 3"
      },
      {
        "name": "searchCriteriaCostCenter4",
        "schema": "string",
        "required": false,
        "description": "Cost center 4"
      },
      {
        "name": "searchCriteriaCostCenter5",
        "schema": "string",
        "required": false,
        "description": "Cost center 5"
      },
      {
        "name": "searchCriteriaName",
        "schema": "string",
        "required": false,
        "description": "The employee name"
      },
      {
        "name": "searchCriteriaId",
        "schema": "string",
        "required": false,
        "description": "The employee ID"
      },
      {
        "name": "searchCriteriaSsn",
        "schema": "string",
        "required": false,
        "description": "Social security number"
      },
      {
        "name": "searchCriteriaInclueProfileImage",
        "schema": "boolean",
        "required": false,
        "description": "Whether to return a base64 encoded profile image with the search results"
      },
      {
        "name": "searchCriteriaIncludeDirectDeposits",
        "schema": "boolean",
        "required": false,
        "description": "Whether to include the direct deposit collection associated with each employee record"
      },
      {
        "name": "searchCriteriaIncludeEmergencyContacts",
        "schema": "boolean",
        "required": false,
        "description": "Whether to include the emergency contact collection associated with each employee record"
      },
      {
        "name": "searchCriteriaIncludeTaxes",
        "schema": "boolean",
        "required": false,
        "description": "Whether to include the tax collection associated with each employee record"
      },
      {
        "name": "searchCriteriaPageSize",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "searchCriteriaPageNumber",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "searchCriteriaSortByProperty",
        "schema": "string",
        "required": false,
        "description": "Property to sort results by. Valid properties include any from the return entity."
      },
      {
        "name": "searchCriteriaSortDirection",
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
        "statusCode": "404",
        "description": "Employee or Company not found"
      }
    ]
  },
  {
    "url": "/Company/{companyId}/Employee",
    "method": "createEmployee",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Employee",
    "typeScriptTag": "employee",
    "description": "Creates an employee for a company",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The company id",
        "example": "COMPANYID"
      },
      {
        "name": "employee",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "directDeposits",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "emergencyContacts",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "taxes",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "saveEmployee",
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
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Company not found"
      }
    ]
  },
  {
    "url": "/Company/{companyId}/Employee/{employeeId}",
    "method": "deleteEmployee",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Employee",
    "typeScriptTag": "employee",
    "description": "Deletes an employee by company and employee id",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The company id",
        "example": "COMPANYID"
      },
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "The Employee id",
        "example": "EMPLOYEEID"
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "Accepted"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "NotFound"
      }
    ]
  },
  {
    "url": "/Company/{companyId}/Employee/{employeeId}",
    "method": "getEmployee",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Employee",
    "typeScriptTag": "employee",
    "description": "Gets an employee for a company",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The company id",
        "example": "COMPANYID"
      },
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "The employee id",
        "example": "EMPLOYEEID"
      },
      {
        "name": "activeOnly",
        "schema": "boolean",
        "required": false,
        "description": "Optional query string parameter whether to return only active records"
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
        "statusCode": "404",
        "description": "NotFound"
      }
    ]
  },
  {
    "url": "/Company/{companyId}/Employee/{employeeId}",
    "method": "updateEmployee",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Employee",
    "typeScriptTag": "employee",
    "description": "Updates an employee for a company",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The company id",
        "example": "COMPANYID"
      },
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "The employee id",
        "example": "EMPLOYEEID"
      },
      {
        "name": "employee",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "directDeposits",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "emergencyContacts",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "taxes",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "saveEmployee",
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
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Employee or Company not found"
      }
    ]
  },
  {
    "url": "/Company/{companyId}/Employee/{employeeId}/DirectDeposits",
    "method": "updateEmployeeDirectDeposits",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Employee",
    "typeScriptTag": "employee",
    "description": "Updates direct deposits for an employee",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The company id",
        "example": "COMPANYID"
      },
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "The employee id",
        "example": "EMPLOYEEID"
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
        "statusCode": "404",
        "description": "Employee or Company not found"
      }
    ]
  },
  {
    "url": "/Company/{companyId}/Employee/{employeeId}/Information",
    "method": "updateEmployeeInformation",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Employee",
    "typeScriptTag": "employee",
    "description": "Updates demographics information for an employee",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The company id",
        "example": "COMPANYID"
      },
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "The employee id",
        "example": "EMPLOYEEID"
      },
      {
        "name": "title",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "cellPhone",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "workEmail",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "homePhone",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "personalEmail",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "workPhone",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "workPhoneExt",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "adjSeniorityDate",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "benefitClass",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "healthInsuranceEligibleDate",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "rehireDate",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "termDate",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "newHireReportDate",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "termReason",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "timeClockGroup",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "timeClockPayClass",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "timeClockSchedulePattern",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "clockNumber",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "flsaOvertimeExempt",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "jobCode",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "payGrade",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "payGroup",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "tipCode",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "employee401kDeferral",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "employer401kMatch",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "ownerPercentage",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "autoPay",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "ethnicity",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "veteranStatus",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "maritalStatus",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "eeoClass",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "isOfficer",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "positionCode",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "supervisorID",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "supervisorName",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "workersCompCode",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "cc1",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "cc2",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "cc3",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "cc4",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "cc5",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "hireDate",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "HIREDATE"
      },
      {
        "name": "employeeStatus",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EMPLOYEESTATUS"
      },
      {
        "name": "citizenship",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "address1",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "address2",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "birthDate",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "BIRTHDATE"
      },
      {
        "name": "city",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CITY"
      },
      {
        "name": "country",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "county",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "defaultHours",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "employeeType",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EMPLOYEETYPE"
      },
      {
        "name": "lastName",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "LASTNAME"
      },
      {
        "name": "firstName",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FIRSTNAME"
      },
      {
        "name": "middleName",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "nickName",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "miscCheck1",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "miscCheck2",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "miscCheck3",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "miscCheck4",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "miscCheck5",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "payFrequency",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PAYFREQUENCY"
      },
      {
        "name": "genderCode",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "ssn",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SSN"
      },
      {
        "name": "state",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "STATE"
      },
      {
        "name": "unemploymentState",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "workState",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "zipCode",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ZIPCODE"
      },
      {
        "name": "employeeMemo",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "employeeImage",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "employeeImageGuid",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "00000000-0000-0000-0000-000000000000"
      },
      {
        "name": "unionCode",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "unionApplicationDate",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "unionInitiationFeesCollected",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "hasUnionDues",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "custom1",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "custom2",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "custom3",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "custom4",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "custom5",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "custom6",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "custom7",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "custom8",
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
        "statusCode": "404",
        "description": "NotFound"
      }
    ]
  },
  {
    "url": "/Company/{companyId}/Employee/{employeeId}/Taxes",
    "method": "updateEmployeeTaxes",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Employee",
    "typeScriptTag": "employee",
    "description": "Updates taxes for an employee",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The company id",
        "example": "COMPANYID"
      },
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "The employee id",
        "example": "EMPLOYEEID"
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
        "statusCode": "404",
        "description": "NotFound"
      }
    ]
  },
  {
    "url": "/Company/{companyId}/Employee/{employeeId}/EmergencyContacts",
    "method": "updateEmployeeEmerencyContacts",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Employee",
    "typeScriptTag": "employee",
    "description": "Updates emergency contacts for an employee",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The company id",
        "example": "COMPANYID"
      },
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "The employee id",
        "example": "EMPLOYEEID"
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
        "statusCode": "404",
        "description": "NotFound"
      }
    ]
  },
  {
    "url": "/Company/{companyId}/Employee/{employeeId}/DeductionCode",
    "method": "getDeductionCodes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "EmployeeDeductionCode",
    "typeScriptTag": "employeeDeductionCode",
    "description": "Gets all deduction code records associated for the provided company",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The company id",
        "example": "COMPANYID"
      },
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "The employee id",
        "example": "EMPLOYEEID"
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
        "statusCode": "404",
        "description": "Company not found"
      }
    ]
  },
  {
    "url": "/Company/{companyId}/Employee/{employeeId}/DeductionCode",
    "method": "createDeductionCode",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "EmployeeDeductionCode",
    "typeScriptTag": "employeeDeductionCode",
    "description": "Creates a deduction code record for the provided company",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The company id",
        "example": "COMPANYID"
      },
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "The employee id",
        "example": "EMPLOYEEID"
      },
      {
        "name": "code",
        "schema": "string",
        "description": ""
      },
      {
        "name": "calculationCode",
        "schema": "string",
        "description": ""
      },
      {
        "name": "tabled",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "rate",
        "schema": "number",
        "description": ""
      },
      {
        "name": "amount",
        "schema": "number",
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
        "name": "costCenter1",
        "schema": "string",
        "description": ""
      },
      {
        "name": "costCenter2",
        "schema": "string",
        "description": ""
      },
      {
        "name": "costCenter3",
        "schema": "string",
        "description": ""
      },
      {
        "name": "costCenter4",
        "schema": "string",
        "description": ""
      },
      {
        "name": "costCenter5",
        "schema": "string",
        "description": ""
      },
      {
        "name": "jobCode",
        "schema": "string",
        "description": ""
      },
      {
        "name": "overrideTaxCode1",
        "schema": "string",
        "description": ""
      },
      {
        "name": "overrideTaxCode2",
        "schema": "string",
        "description": ""
      },
      {
        "name": "overrideTaxCode3",
        "schema": "string",
        "description": ""
      },
      {
        "name": "goal",
        "schema": "number",
        "description": ""
      },
      {
        "name": "paidTowardsGoal",
        "schema": "number",
        "description": ""
      },
      {
        "name": "frequency",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lastDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "annualMaximum",
        "schema": "number",
        "description": ""
      },
      {
        "name": "minimum",
        "schema": "number",
        "description": ""
      },
      {
        "name": "maximum",
        "schema": "number",
        "description": ""
      },
      {
        "name": "agency",
        "schema": "string",
        "description": ""
      },
      {
        "name": "miscellaneousInformation",
        "schema": "string",
        "description": ""
      },
      {
        "name": "arrear",
        "schema": "number",
        "description": ""
      },
      {
        "name": "thirdPartyBankTransit",
        "schema": "string",
        "description": ""
      },
      {
        "name": "thirdPartyBankAccount",
        "schema": "string",
        "description": ""
      },
      {
        "name": "prenoteDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "bankChecking",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "priority",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "thirdPartyId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "notes",
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
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Company or deduction code not found"
      }
    ]
  },
  {
    "url": "/Company/{companyId}/Employee/{employeeId}/DeductionCode/{code}/{activeDate}",
    "method": "deleteDeductionCode",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "EmployeeDeductionCode",
    "typeScriptTag": "employeeDeductionCode",
    "description": "Deletes a deduction code record for the provided company",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The company id",
        "example": "COMPANYID"
      },
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "The employee id",
        "example": "EMPLOYEEID"
      },
      {
        "name": "code",
        "schema": "string",
        "required": true,
        "description": "The code",
        "example": "CODE"
      },
      {
        "name": "activeDate",
        "schema": "string",
        "required": true,
        "description": "The active date for the deduction code",
        "example": "ACTIVEDATE"
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "Accepted"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Company or deduction code not found"
      }
    ]
  },
  {
    "url": "/Company/{companyId}/Employee/{employeeId}/DeductionCode/{code}/{activeDate}",
    "method": "getDeductionCode",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "EmployeeDeductionCode",
    "typeScriptTag": "employeeDeductionCode",
    "description": "Gets a Deduction Code record for the provided company",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The company id",
        "example": "COMPANYID"
      },
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "The employee id",
        "example": "EMPLOYEEID"
      },
      {
        "name": "code",
        "schema": "string",
        "required": true,
        "description": "The record id",
        "example": "CODE"
      },
      {
        "name": "activeDate",
        "schema": "string",
        "required": true,
        "description": "The active date for the deduction code",
        "example": "ACTIVEDATE"
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
        "statusCode": "404",
        "description": "Company, Employee, or deduction code not found"
      }
    ]
  },
  {
    "url": "/Company/{companyId}/Employee/{employeeId}/DeductionCode/{code}/{activeDate}",
    "method": "updateDeductionCode",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "EmployeeDeductionCode",
    "typeScriptTag": "employeeDeductionCode",
    "description": "Updates a Deduction Code record for the provided company",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The company id",
        "example": "COMPANYID"
      },
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "The employee id",
        "example": "EMPLOYEEID"
      },
      {
        "name": "code",
        "schema": "string",
        "required": true,
        "description": "The deduction code",
        "example": "CODE"
      },
      {
        "name": "activeDate",
        "schema": "string",
        "required": true,
        "description": "The active date for the deduction code",
        "example": "ACTIVEDATE"
      },
      {
        "name": "code",
        "schema": "string",
        "description": ""
      },
      {
        "name": "calculationCode",
        "schema": "string",
        "description": ""
      },
      {
        "name": "tabled",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "rate",
        "schema": "number",
        "description": ""
      },
      {
        "name": "amount",
        "schema": "number",
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
        "name": "costCenter1",
        "schema": "string",
        "description": ""
      },
      {
        "name": "costCenter2",
        "schema": "string",
        "description": ""
      },
      {
        "name": "costCenter3",
        "schema": "string",
        "description": ""
      },
      {
        "name": "costCenter4",
        "schema": "string",
        "description": ""
      },
      {
        "name": "costCenter5",
        "schema": "string",
        "description": ""
      },
      {
        "name": "jobCode",
        "schema": "string",
        "description": ""
      },
      {
        "name": "overrideTaxCode1",
        "schema": "string",
        "description": ""
      },
      {
        "name": "overrideTaxCode2",
        "schema": "string",
        "description": ""
      },
      {
        "name": "overrideTaxCode3",
        "schema": "string",
        "description": ""
      },
      {
        "name": "goal",
        "schema": "number",
        "description": ""
      },
      {
        "name": "paidTowardsGoal",
        "schema": "number",
        "description": ""
      },
      {
        "name": "frequency",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lastDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "annualMaximum",
        "schema": "number",
        "description": ""
      },
      {
        "name": "minimum",
        "schema": "number",
        "description": ""
      },
      {
        "name": "maximum",
        "schema": "number",
        "description": ""
      },
      {
        "name": "agency",
        "schema": "string",
        "description": ""
      },
      {
        "name": "miscellaneousInformation",
        "schema": "string",
        "description": ""
      },
      {
        "name": "arrear",
        "schema": "number",
        "description": ""
      },
      {
        "name": "thirdPartyBankTransit",
        "schema": "string",
        "description": ""
      },
      {
        "name": "thirdPartyBankAccount",
        "schema": "string",
        "description": ""
      },
      {
        "name": "prenoteDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "bankChecking",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "priority",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "thirdPartyId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "notes",
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
        "statusCode": "404",
        "description": "Company or deduction code not found"
      }
    ]
  },
  {
    "url": "/Company/{companyId}/Employee/{employeeId}/EarningCode",
    "method": "getEarningCodes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "EmployeeEarningCode",
    "typeScriptTag": "employeeEarningCode",
    "description": "Gets all earning code records associated with the employee for the provided company",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The company id",
        "example": "COMPANYID"
      },
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "The employee id",
        "example": "EMPLOYEEID"
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
        "statusCode": "404",
        "description": "Employee not found"
      }
    ]
  },
  {
    "url": "/Company/{companyId}/Employee/{employeeId}/EarningCode",
    "method": "createEarningCode",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "EmployeeEarningCode",
    "typeScriptTag": "employeeEarningCode",
    "description": "Creates a earning code record for the provided company",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The company id",
        "example": "COMPANYID"
      },
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "The employee id",
        "example": "EMPLOYEEID"
      },
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "agency",
        "schema": "string",
        "description": ""
      },
      {
        "name": "amount",
        "schema": "number",
        "description": ""
      },
      {
        "name": "annualMaximum",
        "schema": "number",
        "description": ""
      },
      {
        "name": "calcCode",
        "schema": "string",
        "description": ""
      },
      {
        "name": "costCenter1",
        "schema": "string",
        "description": ""
      },
      {
        "name": "costCenter2",
        "schema": "string",
        "description": ""
      },
      {
        "name": "costCenter3",
        "schema": "string",
        "description": ""
      },
      {
        "name": "costCenter4",
        "schema": "string",
        "description": ""
      },
      {
        "name": "costCenter5",
        "schema": "string",
        "description": ""
      },
      {
        "name": "code",
        "schema": "string",
        "description": ""
      },
      {
        "name": "jobCode",
        "schema": "string",
        "description": ""
      },
      {
        "name": "endDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "frequency",
        "schema": "string",
        "description": ""
      },
      {
        "name": "goal",
        "schema": "number",
        "description": ""
      },
      {
        "name": "lastDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "maximum",
        "schema": "number",
        "description": ""
      },
      {
        "name": "minimum",
        "schema": "number",
        "description": ""
      },
      {
        "name": "miscInfo",
        "schema": "string",
        "description": ""
      },
      {
        "name": "otc1",
        "schema": "string",
        "description": ""
      },
      {
        "name": "otc2",
        "schema": "string",
        "description": ""
      },
      {
        "name": "otc3",
        "schema": "string",
        "description": ""
      },
      {
        "name": "paidTowardsGoal",
        "schema": "number",
        "description": ""
      },
      {
        "name": "rate",
        "schema": "number",
        "description": ""
      },
      {
        "name": "rateCode",
        "schema": "string",
        "description": ""
      },
      {
        "name": "ratePer",
        "schema": "string",
        "description": ""
      },
      {
        "name": "startDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "tabled",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "thirdPartyId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "units",
        "schema": "number",
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
      },
      {
        "statusCode": "404",
        "description": "Company, employee, or earning code not found"
      }
    ]
  },
  {
    "url": "/Company/{companyId}/Employee/{employeeId}/EarningCode/{code}/{startDate}",
    "method": "deleteEarningCode",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "EmployeeEarningCode",
    "typeScriptTag": "employeeEarningCode",
    "description": "Deletes a earning code record for the employee in the provided company",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The company id",
        "example": "COMPANYID"
      },
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "The employee id",
        "example": "EMPLOYEEID"
      },
      {
        "name": "code",
        "schema": "string",
        "required": true,
        "description": "The code",
        "example": "CODE"
      },
      {
        "name": "startDate",
        "schema": "string",
        "required": true,
        "description": "The start date for the earning code",
        "example": "STARTDATE"
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "Accepted"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Company or earning code not found"
      }
    ]
  },
  {
    "url": "/Company/{companyId}/Employee/{employeeId}/EarningCode/{code}/{startDate}",
    "method": "getEarningCode",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "EmployeeEarningCode",
    "typeScriptTag": "employeeEarningCode",
    "description": "Gets a Earning Code record for the provided company",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The company id",
        "example": "COMPANYID"
      },
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "The employee id",
        "example": "EMPLOYEEID"
      },
      {
        "name": "code",
        "schema": "string",
        "required": true,
        "description": "The record id",
        "example": "CODE"
      },
      {
        "name": "startDate",
        "schema": "string",
        "required": true,
        "description": "The start date for the earning code",
        "example": "STARTDATE"
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
        "statusCode": "404",
        "description": "Company, Employee, or earning code not found"
      }
    ]
  },
  {
    "url": "/Company/{companyId}/Employee/{employeeId}/EarningCode/{code}/{startDate}",
    "method": "updateEarningCode",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "EmployeeEarningCode",
    "typeScriptTag": "employeeEarningCode",
    "description": "Updates a Earning Code record for the employee in the provided company",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The company id",
        "example": "COMPANYID"
      },
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "The employee id",
        "example": "EMPLOYEEID"
      },
      {
        "name": "code",
        "schema": "string",
        "required": true,
        "description": "The earning code",
        "example": "CODE"
      },
      {
        "name": "startDate",
        "schema": "string",
        "required": true,
        "description": "The start date for the earning code",
        "example": "STARTDATE"
      },
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "agency",
        "schema": "string",
        "description": ""
      },
      {
        "name": "amount",
        "schema": "number",
        "description": ""
      },
      {
        "name": "annualMaximum",
        "schema": "number",
        "description": ""
      },
      {
        "name": "calcCode",
        "schema": "string",
        "description": ""
      },
      {
        "name": "costCenter1",
        "schema": "string",
        "description": ""
      },
      {
        "name": "costCenter2",
        "schema": "string",
        "description": ""
      },
      {
        "name": "costCenter3",
        "schema": "string",
        "description": ""
      },
      {
        "name": "costCenter4",
        "schema": "string",
        "description": ""
      },
      {
        "name": "costCenter5",
        "schema": "string",
        "description": ""
      },
      {
        "name": "code",
        "schema": "string",
        "description": ""
      },
      {
        "name": "jobCode",
        "schema": "string",
        "description": ""
      },
      {
        "name": "endDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "frequency",
        "schema": "string",
        "description": ""
      },
      {
        "name": "goal",
        "schema": "number",
        "description": ""
      },
      {
        "name": "lastDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "maximum",
        "schema": "number",
        "description": ""
      },
      {
        "name": "minimum",
        "schema": "number",
        "description": ""
      },
      {
        "name": "miscInfo",
        "schema": "string",
        "description": ""
      },
      {
        "name": "otc1",
        "schema": "string",
        "description": ""
      },
      {
        "name": "otc2",
        "schema": "string",
        "description": ""
      },
      {
        "name": "otc3",
        "schema": "string",
        "description": ""
      },
      {
        "name": "paidTowardsGoal",
        "schema": "number",
        "description": ""
      },
      {
        "name": "rate",
        "schema": "number",
        "description": ""
      },
      {
        "name": "rateCode",
        "schema": "string",
        "description": ""
      },
      {
        "name": "ratePer",
        "schema": "string",
        "description": ""
      },
      {
        "name": "startDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "tabled",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "thirdPartyId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "units",
        "schema": "number",
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
        "statusCode": "404",
        "description": "Company, employee or earning code not found"
      }
    ]
  },
  {
    "url": "/Company/{companyId}/Employee/{employeeId}/Pto",
    "method": "getEmployeePtos",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "EmployeePto",
    "typeScriptTag": "employeePto",
    "description": "Gets all pto requests for an employee in a company",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The company id",
        "example": "COMPANYID"
      },
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "The employee id",
        "example": "EMPLOYEEID"
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
        "statusCode": "404",
        "description": "Employee or Company not found"
      }
    ]
  },
  {
    "url": "/Company/{companyId}/Employee/{employeeId}/Pto/{ptoGuid}",
    "method": "getEmployeePto",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "EmployeePto",
    "typeScriptTag": "employeePto",
    "description": "Gets all pto requests for an employee in a company",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The company id",
        "example": "COMPANYID"
      },
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "The employee id",
        "example": "EMPLOYEEID"
      },
      {
        "name": "ptoGuid",
        "schema": "string",
        "required": true,
        "description": "The pto record unique identifier",
        "example": "PTOGUID"
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
        "statusCode": "404",
        "description": "Employee or Company not found"
      }
    ]
  },
  {
    "url": "/Company/{companyId}/JobCode",
    "method": "getJobCodes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "JobCode",
    "typeScriptTag": "jobCode",
    "description": "Gets all Job code records associated for the provided company",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The company id",
        "example": "COMPANYID"
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
        "statusCode": "404",
        "description": "Company not found"
      }
    ]
  },
  {
    "url": "/Company/{companyId}/JobCode",
    "method": "createJobCode",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "JobCode",
    "typeScriptTag": "jobCode",
    "description": "Creates a job code record for the provided company",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The company id",
        "example": "COMPANYID"
      },
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "code",
        "schema": "string",
        "description": ""
      },
      {
        "name": "address1",
        "schema": "string",
        "description": ""
      },
      {
        "name": "address2",
        "schema": "string",
        "description": ""
      },
      {
        "name": "city",
        "schema": "string",
        "description": ""
      },
      {
        "name": "state",
        "schema": "string",
        "description": ""
      },
      {
        "name": "zip",
        "schema": "string",
        "description": ""
      },
      {
        "name": "overrideShift",
        "schema": "string",
        "description": ""
      },
      {
        "name": "overrideRateCode",
        "schema": "string",
        "description": ""
      },
      {
        "name": "overrideRate",
        "schema": "number",
        "description": ""
      },
      {
        "name": "addToRate",
        "schema": "number",
        "description": ""
      },
      {
        "name": "certifiedJob",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "rateMultiplier",
        "schema": "number",
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
        "name": "projectNumber",
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
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Company or job code not found"
      }
    ]
  },
  {
    "url": "/Company/{companyId}/JobCode/{code}",
    "method": "deleteJobCode",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "JobCode",
    "typeScriptTag": "jobCode",
    "description": "Deletes a job code record for the provided company",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The company id",
        "example": "COMPANYID"
      },
      {
        "name": "code",
        "schema": "string",
        "required": true,
        "description": "The code",
        "example": "CODE"
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "Accepted"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Company or job code not found"
      }
    ]
  },
  {
    "url": "/Company/{companyId}/JobCode/{code}",
    "method": "getJobCode",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "JobCode",
    "typeScriptTag": "jobCode",
    "description": "Gets a Job code record for the provided company",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The company id",
        "example": "COMPANYID"
      },
      {
        "name": "code",
        "schema": "string",
        "required": true,
        "description": "The record id",
        "example": "CODE"
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
        "statusCode": "404",
        "description": "Company or job code not found"
      }
    ]
  },
  {
    "url": "/Company/{companyId}/JobCode/{code}",
    "method": "updateJobCode",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "JobCode",
    "typeScriptTag": "jobCode",
    "description": "Updates a Job code record for the provided company",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The company id",
        "example": "COMPANYID"
      },
      {
        "name": "code",
        "schema": "string",
        "required": true,
        "description": "The job code",
        "example": "CODE"
      },
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "code",
        "schema": "string",
        "description": ""
      },
      {
        "name": "address1",
        "schema": "string",
        "description": ""
      },
      {
        "name": "address2",
        "schema": "string",
        "description": ""
      },
      {
        "name": "city",
        "schema": "string",
        "description": ""
      },
      {
        "name": "state",
        "schema": "string",
        "description": ""
      },
      {
        "name": "zip",
        "schema": "string",
        "description": ""
      },
      {
        "name": "overrideShift",
        "schema": "string",
        "description": ""
      },
      {
        "name": "overrideRateCode",
        "schema": "string",
        "description": ""
      },
      {
        "name": "overrideRate",
        "schema": "number",
        "description": ""
      },
      {
        "name": "addToRate",
        "schema": "number",
        "description": ""
      },
      {
        "name": "certifiedJob",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "rateMultiplier",
        "schema": "number",
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
        "name": "projectNumber",
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
        "statusCode": "404",
        "description": "Company or job code not found"
      }
    ]
  },
  {
    "url": "/Company/{companyId}/Employee/{employeeId}/License",
    "method": "getEmployeeLicenses",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "License",
    "typeScriptTag": "license",
    "description": "Gets licenses for an employee in a company",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The company id",
        "example": "COMPANYID"
      },
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "The employee id",
        "example": "EMPLOYEEID"
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
        "statusCode": "404",
        "description": "Employee or Company not found"
      }
    ]
  },
  {
    "url": "/Company/{companyId}/Employee/{employeeId}/License",
    "method": "createEmployeeLicense",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "License",
    "typeScriptTag": "license",
    "description": "Creates license for an employee in a company",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The company id",
        "example": "COMPANYID"
      },
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "The employee id",
        "example": "EMPLOYEEID"
      },
      {
        "name": "id",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "00000000-0000-0000-0000-000000000000"
      },
      {
        "name": "code",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CODE"
      },
      {
        "name": "state",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "number",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "issueDate",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "expirationDate",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "notes",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "examDate",
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
        "statusCode": "404",
        "description": "Company not found"
      }
    ]
  },
  {
    "url": "/Company/{companyId}/Employee/{employeeId}/License/{licenseId}",
    "method": "deleteEmployeeLicense",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "License",
    "typeScriptTag": "license",
    "description": "Deletes a license for an employee in a company",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The company id",
        "example": "COMPANYID"
      },
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "The employee id",
        "example": "EMPLOYEEID"
      },
      {
        "name": "licenseId",
        "schema": "string",
        "required": true,
        "description": "The license id",
        "example": "LICENSEID"
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Company, employee, or license not found"
      }
    ]
  },
  {
    "url": "/Company/{companyId}/Employee/{employeeId}/License/{licenseId}",
    "method": "updateEmployeeLicense",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "License",
    "typeScriptTag": "license",
    "description": "Updates license for an employee in a company",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The company id",
        "example": "COMPANYID"
      },
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "The employee id",
        "example": "EMPLOYEEID"
      },
      {
        "name": "licenseId",
        "schema": "string",
        "required": true,
        "description": "The license id",
        "example": "LICENSEID"
      },
      {
        "name": "id",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "00000000-0000-0000-0000-000000000000"
      },
      {
        "name": "code",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CODE"
      },
      {
        "name": "state",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "number",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "issueDate",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "expirationDate",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "notes",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "examDate",
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
        "statusCode": "404",
        "description": "Company not found"
      }
    ]
  },
  {
    "url": "/System/Lookup/Genders",
    "method": "getGenderCodes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "LookupValues",
    "typeScriptTag": "lookupValues",
    "description": "Gets all gender code options",
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
    "url": "/System/Lookup/MaritalStatuses",
    "method": "getMaritalStatusCodes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "LookupValues",
    "typeScriptTag": "lookupValues",
    "description": "Gets all marital status options",
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
    "url": "/System/Lookup/TaxForms",
    "method": "getTaxFormList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "LookupValues",
    "typeScriptTag": "lookupValues",
    "description": "Gets all tax form options",
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
    "url": "/System/Lookup/AutoPays",
    "method": "getBaseAutoPayList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "LookupValues",
    "typeScriptTag": "lookupValues",
    "description": "Gets base auto pay options",
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
    "url": "/System/Lookup/VisaTypes",
    "method": "getVisaTypes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "LookupValues",
    "typeScriptTag": "lookupValues",
    "description": "Gets visa type options",
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
    "url": "/System/Lookup/RatePer",
    "method": "getRatePer",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "LookupValues",
    "typeScriptTag": "lookupValues",
    "description": "Gets rate per options",
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
    "url": "/System/Lookup/TaxOptions",
    "method": "getTaxOptions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "LookupValues",
    "typeScriptTag": "lookupValues",
    "description": "Gets list of TaxOption values",
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
    "url": "/Company/{companyId}/Lookup/PayGrades",
    "method": "getCompanyPayGrades",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "LookupValues",
    "typeScriptTag": "lookupValues",
    "description": "Gets all pay grade options",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "COMPANYID"
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
    "url": "/Company/{companyId}/Lookup/PayGroups",
    "method": "getCompanyPayGroups",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "LookupValues",
    "typeScriptTag": "lookupValues",
    "description": "Gets all pay group options",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "COMPANYID"
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
    "url": "/Company/{companyId}/Lookup/Positions",
    "method": "getCompanyPositions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "LookupValues",
    "typeScriptTag": "lookupValues",
    "description": "Gets all position options",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "COMPANYID"
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
    "url": "/Company/{companyId}/Lookup/Unions",
    "method": "getCompanyUnions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "LookupValues",
    "typeScriptTag": "lookupValues",
    "description": "Gets all union options",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "COMPANYID"
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
    "url": "/Company/{companyId}/Lookup/EmployeeStatuses",
    "method": "getCompanyEmployeeStatuses",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "LookupValues",
    "typeScriptTag": "lookupValues",
    "description": "Gets all employee status options",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "COMPANYID"
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
    "url": "/Company/{companyId}/Lookup/EmployeeTypes",
    "method": "getCompanyEmployeeTypes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "LookupValues",
    "typeScriptTag": "lookupValues",
    "description": "Gets all employee type options",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "COMPANYID"
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
    "url": "/Company/{companyId}/Lookup/BenefitClasses",
    "method": "getCompanyBenefitClasses",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "LookupValues",
    "typeScriptTag": "lookupValues",
    "description": "Gets all benefit class options",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "COMPANYID"
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
    "url": "/Company/{companyId}/Lookup/TimeClockGroups",
    "method": "getCompanyTimeClockGroups",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "LookupValues",
    "typeScriptTag": "lookupValues",
    "description": "Gets all time clock group options",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "COMPANYID"
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
    "url": "/Company/{companyId}/Lookup/TimeClockPayClasses",
    "method": "getCompanyTimeClockPayClasses",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "LookupValues",
    "typeScriptTag": "lookupValues",
    "description": "Gets all time clock pay class options",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "COMPANYID"
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
    "url": "/Company/{companyId}/Lookup/TimeClockSchedulePatterns",
    "method": "getCompanyTimeClockSchedulePatterns",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "LookupValues",
    "typeScriptTag": "lookupValues",
    "description": "Gets all time clock schedule pattern options",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "COMPANYID"
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
    "url": "/Company/{companyId}/Lookup/WorkersCompCodes",
    "method": "getCompanyWorkersCompCodes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "LookupValues",
    "typeScriptTag": "lookupValues",
    "description": "Gets all workers comp code options",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "COMPANYID"
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
    "url": "/Company/{companyId}/Lookup/EEOClasses",
    "method": "getCompanyEqualEmploymentOpportunityClasses",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "LookupValues",
    "typeScriptTag": "lookupValues",
    "description": "Gets all workers comp code options",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "COMPANYID"
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
    "url": "/Company/{companyId}/Lookup/EarningCodes",
    "method": "getEarningCodes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "LookupValues",
    "typeScriptTag": "lookupValues",
    "description": "Gets all Earning code records associated for the provided company",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The company id",
        "example": "COMPANYID"
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
    "url": "/Company/{companyId}/Lookup/DeductionCodes",
    "method": "getDeductionCodes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "LookupValues",
    "typeScriptTag": "lookupValues",
    "description": "Gets all Deduction code records associated for the provided company",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The company id",
        "example": "COMPANYID"
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
    "url": "/Company/{companyId}/Lookup/PayFrequencies",
    "method": "getPayFrequencies",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "LookupValues",
    "typeScriptTag": "lookupValues",
    "description": "Gets all Pay Frequency records associated for the provided company",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The company id",
        "example": "COMPANYID"
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
    "url": "/Company/{companyId}/Lookup/TerminationReasons",
    "method": "getTerminationReasons",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "LookupValues",
    "typeScriptTag": "lookupValues",
    "description": "Gets all Termination reasons records associated for the provided company",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The company id",
        "example": "COMPANYID"
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
    "url": "/Company/{companyId}/Lookup/JobCodes",
    "method": "getJobCodes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "LookupValues",
    "typeScriptTag": "lookupValues",
    "description": "Gets all Job code records associated for the provided company",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The company id",
        "example": "COMPANYID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Company not found"
      }
    ]
  },
  {
    "url": "/Company/{companyId}/Lookup/CostCenter1",
    "method": "getCc1",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "LookupValues",
    "typeScriptTag": "lookupValues",
    "description": "Gets all Cost Center 1 records associated for the provided company",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The company id",
        "example": "COMPANYID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Company not found"
      }
    ]
  },
  {
    "url": "/Company/{companyId}/Lookup/CostCenter2",
    "method": "getCc2",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "LookupValues",
    "typeScriptTag": "lookupValues",
    "description": "Gets all Cost Center 2 records associated for the provided company",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The company id",
        "example": "COMPANYID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Company not found"
      }
    ]
  },
  {
    "url": "/Company/{companyId}/Lookup/CostCenter3",
    "method": "getCc3",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "LookupValues",
    "typeScriptTag": "lookupValues",
    "description": "Gets all Cost Center 3 records associated for the provided company",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The company id",
        "example": "COMPANYID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Company not found"
      }
    ]
  },
  {
    "url": "/Company/{companyId}/Lookup/CostCenter4",
    "method": "getCc4",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "LookupValues",
    "typeScriptTag": "lookupValues",
    "description": "Gets all Cost Center 4 records associated for the provided company",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The company id",
        "example": "COMPANYID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Company not found"
      }
    ]
  },
  {
    "url": "/Company/{companyId}/Lookup/CostCenter5",
    "method": "getCc5",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "LookupValues",
    "typeScriptTag": "lookupValues",
    "description": "Gets all Cost Center 5 records associated for the provided company",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The company id",
        "example": "COMPANYID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Company not found"
      }
    ]
  },
  {
    "url": "/Company/{companyId}/Lookup/ShiftCodes",
    "method": "getShiftCodes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "LookupValues",
    "typeScriptTag": "lookupValues",
    "description": "Gets all Shift code records associated for the provided company",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The company id",
        "example": "COMPANYID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Company not found"
      }
    ]
  },
  {
    "url": "/Company/{companyId}/Lookup/Taxes",
    "method": "getTaxes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "LookupValues",
    "typeScriptTag": "lookupValues",
    "description": "Gets all Company Tax records associated for the provided company",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The company id",
        "example": "COMPANYID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Company not found"
      }
    ]
  },
  {
    "url": "/Company/{companyId}/Lookup/Taxes/State/{state}",
    "method": "getStateTaxes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "LookupValues",
    "typeScriptTag": "lookupValues",
    "description": "Gets all Company Tax records associated for the provided company and state",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The company id",
        "example": "COMPANYID"
      },
      {
        "name": "state",
        "schema": "string",
        "required": true,
        "description": "The state",
        "example": "STATE"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Company not found"
      }
    ]
  },
  {
    "url": "/Company/{companyId}/Lookup/Taxes/Local/{state}",
    "method": "getLocalTaxes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "LookupValues",
    "typeScriptTag": "lookupValues",
    "description": "Gets all local Company Tax records associated for the provided company and state",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The company id",
        "example": "COMPANYID"
      },
      {
        "name": "state",
        "schema": "string",
        "required": true,
        "description": "The state",
        "example": "STATE"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Company not found"
      }
    ]
  },
  {
    "url": "/Company/{companyId}/Lookup/Taxes/Local",
    "method": "getLocalTaxes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "LookupValues",
    "typeScriptTag": "lookupValues",
    "description": "Gets all Company Tax local records associated for the provided company",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The company id",
        "example": "COMPANYID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Company not found"
      }
    ]
  },
  {
    "url": "/Company/{companyId}/Lookup/Accrual",
    "method": "getAccruals",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "LookupValues",
    "typeScriptTag": "lookupValues",
    "description": "Gets all Company accrual records associated for the provided company",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The company id",
        "example": "COMPANYID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Company not found"
      }
    ]
  },
  {
    "url": "/Company/{companyId}/Lookup/OnboardingFlow",
    "method": "getOnboardingFlow",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "LookupValues",
    "typeScriptTag": "lookupValues",
    "description": "Gets all Company onboarding flow records associated for the provided company",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The company id",
        "example": "COMPANYID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Company not found"
      }
    ]
  },
  {
    "url": "/Company/{companyId}/Lookup/HiringManagers",
    "method": "getHiringManagers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "LookupValues",
    "typeScriptTag": "lookupValues",
    "description": "Gets all Company hiring managers for the provided company",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The company id",
        "example": "COMPANYID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Company not found"
      }
    ]
  },
  {
    "url": "/Company/{companyId}/Lookup/Batches",
    "method": "getCurrentCalendarBatches",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "LookupValues",
    "typeScriptTag": "lookupValues",
    "description": "Gets all valid batch names for the current calendar period",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The company id",
        "example": "COMPANYID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Company not found"
      }
    ]
  },
  {
    "url": "/Company/{companyId}/Lookup/Batches/{calendarId}",
    "method": "getCalendarBatches",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "LookupValues",
    "typeScriptTag": "lookupValues",
    "description": "Gets all valid batch names for the specified calendar",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The company id",
        "example": "COMPANYID"
      },
      {
        "name": "calendarId",
        "schema": "string",
        "required": true,
        "description": "The calendar id",
        "example": "CALENDARID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Company or calendar not found"
      }
    ]
  },
  {
    "url": "/Company/{companyId}/Lookup/RaiseReasons",
    "method": "getRaiseReasons",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "LookupValues",
    "typeScriptTag": "lookupValues",
    "description": "Gets all valid rate change reasons",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The company id",
        "example": "COMPANYID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Company not found"
      }
    ]
  },
  {
    "url": "/Company/{companyId}/Lookup/Ethnicities",
    "method": "getEthniticties",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "LookupValues",
    "typeScriptTag": "lookupValues",
    "description": "Gets all ethniticy options",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The company id",
        "example": "COMPANYID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Company not found"
      }
    ]
  },
  {
    "url": "/Company/{companyId}/Lookup/Rates",
    "method": "getRates",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "LookupValues",
    "typeScriptTag": "lookupValues",
    "description": "Gets all rates",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The company id",
        "example": "COMPANYID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Company not found"
      }
    ]
  },
  {
    "url": "/Company/{companyId}/ManualCheck",
    "method": "calculate",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "ManualCheck",
    "typeScriptTag": "manualCheck",
    "description": "Adds earnings to one or more employee check(s) in the manual batch.",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The company id",
        "example": "COMPANYID"
      },
      {
        "name": "Autopay",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "BeginDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "BlockInsurance",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "BlockDirectDeposit",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "BlockAccruals",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "BlockDistributions",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "check",
        "schema": "object",
        "description": ""
      },
      {
        "name": "EndDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "EmployeeId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "LineItems",
        "schema": "array",
        "description": ""
      },
      {
        "name": "SupplementTaxRate",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "TaxFrequency",
        "schema": "string",
        "description": ""
      },
      {
        "name": "WeeksWorked",
        "schema": "number",
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
        "statusCode": "404",
        "description": "Company or deduction code not found"
      }
    ]
  },
  {
    "url": "/Company/{companyId}/Onboarding",
    "method": "onboardEmployee",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Onboarding",
    "typeScriptTag": "onboarding",
    "description": "Creates an employee for a company",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The company id",
        "example": "COMPANYID"
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
        "required": true,
        "description": "",
        "example": "LASTNAME"
      },
      {
        "name": "MiddleName",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "Suffix",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "StartDate",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "STARTDATE"
      },
      {
        "name": "OrientationDate",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "HireDate",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "HIREDATE"
      },
      {
        "name": "IsPaperWorkAtHome",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "IsRemoteEmployee",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "EmailAddress",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "CC1",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "CC2",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "CC3",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "CC4",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "CC5",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "PositionCode",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "WorkState",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "WORKSTATE"
      },
      {
        "name": "EmpType",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EMPTYPE"
      },
      {
        "name": "PayFrequency",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PAYFREQUENCY"
      },
      {
        "name": "AutoPay",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "DefaultHours",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "BaseRate",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "BaseSalary",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "AnnualSalary",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "FlowGuid",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "00000000-0000-0000-0000-000000000000"
      },
      {
        "name": "PreferredLanguage",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "SendEmail",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "EmailCopy",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "Address1",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "Address2",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "City",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "State",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "Zip",
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
        "name": "HiringManager",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "PayGrade",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "EmployeeId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "ThirdPartyEmployeeID",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "DisableValidation",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "RpoUserName",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "DueDate",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "SeniorityDate",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "EligibilityDate",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "Sms",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "PayType",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "Tipped",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "Exempt",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "AdditionalRates",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "OtherFields",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "CanSendWelcomeEmail",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "CanSendSmsLink",
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
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Company not found"
      }
    ]
  },
  {
    "url": "/Company/{companyId}/Onboarding/GetOnboardingSettings",
    "method": "getOnboardingSettings",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Onboarding",
    "typeScriptTag": "onboarding",
    "description": "Various setting required for onboarding UI that hosted by exteranl system\r\nThese settings provides configured RPO values to external systems which can be mapped to new hire data",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The company id",
        "example": "COMPANYID"
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
    "url": "/Company/{companyId}/PayHistory",
    "method": "searchPayHistory",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "PayHistory",
    "typeScriptTag": "payHistory",
    "description": "Gets all Accrual records associated for the provided company and employee",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The company id",
        "example": "COMPANYID"
      },
      {
        "name": "startDate",
        "schema": "string",
        "required": true,
        "description": "Pay history start date (required)",
        "example": "STARTDATE"
      },
      {
        "name": "endDate",
        "schema": "string",
        "required": true,
        "description": "Pay history end date (required)",
        "example": "ENDDATE"
      },
      {
        "name": "cc1",
        "schema": "string",
        "required": false,
        "description": "Cost center 1 filter"
      },
      {
        "name": "cc2",
        "schema": "string",
        "required": false,
        "description": "Cost center 2 filter"
      },
      {
        "name": "cc3",
        "schema": "string",
        "required": false,
        "description": "Cost center 3 filter"
      },
      {
        "name": "cc4",
        "schema": "string",
        "required": false,
        "description": "Cost center 4 filter"
      },
      {
        "name": "cc5",
        "schema": "string",
        "required": false,
        "description": "Cost center 5 filter"
      },
      {
        "name": "jobCode",
        "schema": "string",
        "required": false,
        "description": "Job code filter"
      },
      {
        "name": "shiftCode",
        "schema": "string",
        "required": false,
        "description": "Shift code filter"
      },
      {
        "name": "wcc",
        "schema": "string",
        "required": false,
        "description": "Workers comp code filter"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "NotFound"
      }
    ]
  },
  {
    "url": "/Company/{companyId}/PayHistory/Details",
    "method": "getEmployeePayHistory",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "PayHistory",
    "typeScriptTag": "payHistory",
    "description": "Get pay history for employees including paycheck details",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The company id",
        "example": "COMPANYID"
      },
      {
        "name": "startDate",
        "schema": "string",
        "required": true,
        "description": "Pay history start date (required)",
        "example": "STARTDATE"
      },
      {
        "name": "endDate",
        "schema": "string",
        "required": true,
        "description": "Pay history end date (required)",
        "example": "ENDDATE"
      },
      {
        "name": "employeeIds",
        "schema": "string",
        "required": false,
        "description": "Comma delimited list of employee ids to filter on"
      },
      {
        "name": "cc1",
        "schema": "string",
        "required": false,
        "description": "Cost center 1 filter"
      },
      {
        "name": "cc2",
        "schema": "string",
        "required": false,
        "description": "Cost center 2 filter"
      },
      {
        "name": "cc3",
        "schema": "string",
        "required": false,
        "description": "Cost center 3 filter"
      },
      {
        "name": "cc4",
        "schema": "string",
        "required": false,
        "description": "Cost center 4 filter"
      },
      {
        "name": "cc5",
        "schema": "string",
        "required": false,
        "description": "Cost center 5 filter"
      },
      {
        "name": "jobCode",
        "schema": "string",
        "required": false,
        "description": "Job code filter"
      },
      {
        "name": "shiftCode",
        "schema": "string",
        "required": false,
        "description": "Shift code filter"
      },
      {
        "name": "wcc",
        "schema": "string",
        "required": false,
        "description": "Workers comp code filter"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "NotFound"
      }
    ]
  },
  {
    "url": "/Company/{companyId}/Employee/{employeeId}/PayHistory/{transactionId}/PayStub",
    "method": "getEmployeePayStub",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "PayHistory",
    "typeScriptTag": "payHistory",
    "description": "Get pay history for employees including paycheck details",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The company id",
        "example": "COMPANYID"
      },
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "The employee id",
        "example": "EMPLOYEEID"
      },
      {
        "name": "transactionId",
        "schema": "string",
        "required": true,
        "description": "The transaction id",
        "example": "TRANSACTIONID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      },
      {
        "statusCode": "404",
        "description": "NotFound"
      }
    ]
  },
  {
    "url": "/Company/{companyId}/Payroll/{calendarGuid}/start",
    "method": "startPayroll",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Payroll",
    "typeScriptTag": "payroll",
    "description": "Starts a scheduled payroll",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The company id",
        "example": "COMPANYID"
      },
      {
        "name": "calendarGuid",
        "schema": "string",
        "required": true,
        "description": "The id for the payroll calendar",
        "example": "CALENDARGUID"
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
        "statusCode": "404",
        "description": "Company or calendar not found"
      }
    ]
  },
  {
    "url": "/Company/{companyId}/Payroll/{calendarGuid}/restart/{batch}",
    "method": "restartBatch",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Payroll",
    "typeScriptTag": "payroll",
    "description": "Restarts an open payroll",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The company id",
        "example": "COMPANYID"
      },
      {
        "name": "calendarGuid",
        "schema": "string",
        "required": true,
        "description": "The id for the payroll calendar",
        "example": "CALENDARGUID"
      },
      {
        "name": "batch",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "BATCH"
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
        "statusCode": "404",
        "description": "Company or calendar not found"
      }
    ]
  },
  {
    "url": "/Company/{companyId}/Payroll/{calendarGuid}/preprocess",
    "method": "getPreprocessResults",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Payroll",
    "typeScriptTag": "payroll",
    "description": "Pre-calculates the payroll to identify any issues and returns a preview of all checks in the payroll",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The company id",
        "example": "COMPANYID"
      },
      {
        "name": "calendarGuid",
        "schema": "string",
        "required": true,
        "description": "The id for the payroll calendar",
        "example": "CALENDARGUID"
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
        "statusCode": "404",
        "description": "Company or calendar not found"
      }
    ]
  },
  {
    "url": "/Company/{companyId}/Payroll/{calendarGuid}/preprocess",
    "method": "preprocessPayroll",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Payroll",
    "typeScriptTag": "payroll",
    "description": "Pre-calculates the payroll to identify any issues",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The company id",
        "example": "COMPANYID"
      },
      {
        "name": "calendarGuid",
        "schema": "string",
        "required": true,
        "description": "The id for the payroll calendar",
        "example": "CALENDARGUID"
      },
      {
        "name": "batch",
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
        "statusCode": "404",
        "description": "Company or calendar not found"
      }
    ]
  },
  {
    "url": "/Company/{companyId}/Payroll/{calendarGuid}/approve/{batch}",
    "method": "approveBatches",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Payroll",
    "typeScriptTag": "payroll",
    "description": "Approves all batches in the calendar",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The company id",
        "example": "COMPANYID"
      },
      {
        "name": "calendarGuid",
        "schema": "string",
        "required": true,
        "description": "The id for the payroll calendar",
        "example": "CALENDARGUID"
      },
      {
        "name": "batch",
        "schema": "string",
        "required": true,
        "description": "Specific batch to approve, optional. All batches will be approved if excluded",
        "example": "BATCH"
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
        "statusCode": "404",
        "description": "Company or calendar not found"
      }
    ]
  },
  {
    "url": "/Company/{companyId}/Payroll/{calendarGuid}/verify",
    "method": "getVerifications",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Payroll",
    "typeScriptTag": "payroll",
    "description": "Gets the payroll verification results that were created from the verify POST request",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The company id",
        "example": "COMPANYID"
      },
      {
        "name": "calendarGuid",
        "schema": "string",
        "required": true,
        "description": "The id for the payroll calendar",
        "example": "CALENDARGUID"
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
        "statusCode": "404",
        "description": "Company or calendar not found"
      }
    ]
  },
  {
    "url": "/Company/{companyId}/Payroll/{calendarGuid}/verify",
    "method": "verifyPayroll",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Payroll",
    "typeScriptTag": "payroll",
    "description": "Runs payroll verification tests and returns the results",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The company id",
        "example": "COMPANYID"
      },
      {
        "name": "calendarGuid",
        "schema": "string",
        "required": true,
        "description": "The id for the payroll calendar",
        "example": "CALENDARGUID"
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
        "statusCode": "404",
        "description": "Company or calendar not found"
      }
    ]
  },
  {
    "url": "/Company/{companyId}/Payroll/{calendarGuid}/verify/{verificationId}",
    "method": "approveVerification",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Payroll",
    "typeScriptTag": "payroll",
    "description": "Approves a verification test",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The company id",
        "example": "COMPANYID"
      },
      {
        "name": "calendarGuid",
        "schema": "string",
        "required": true,
        "description": "The id for the payroll calendar",
        "example": "CALENDARGUID"
      },
      {
        "name": "verificationId",
        "schema": "string",
        "required": true,
        "description": "The id of the verification test to be",
        "example": "VERIFICATIONID"
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
        "statusCode": "404",
        "description": "Company or calendar not found"
      }
    ]
  },
  {
    "url": "/Company/{companyId}/Payroll/{calendarGuid}/verify/all",
    "method": "approveVerifications",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Payroll",
    "typeScriptTag": "payroll",
    "description": "Approves all verification tests",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The company id",
        "example": "COMPANYID"
      },
      {
        "name": "calendarGuid",
        "schema": "string",
        "required": true,
        "description": "The id for the payroll calendar",
        "example": "CALENDARGUID"
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
        "statusCode": "404",
        "description": "Company or calendar not found"
      }
    ]
  },
  {
    "url": "/Company/{companyId}/Payroll/{calendarGuid}/submit",
    "method": "submitPayroll",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Payroll",
    "typeScriptTag": "payroll",
    "description": "Submits an approved payroll",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The company id",
        "example": "COMPANYID"
      },
      {
        "name": "calendarGuid",
        "schema": "string",
        "required": true,
        "description": "The id for the payroll calendar",
        "example": "CALENDARGUID"
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
        "statusCode": "404",
        "description": "Company or calendar not found"
      }
    ]
  },
  {
    "url": "/Company/{companyId}/Pto",
    "method": "getPtos",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Pto",
    "typeScriptTag": "pto",
    "description": "Gets all pto requests within a date range for a company",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The company id",
        "example": "COMPANYID"
      },
      {
        "name": "startDate",
        "schema": "string",
        "required": false,
        "description": "PTO request start Date"
      },
      {
        "name": "endDate",
        "schema": "string",
        "required": false,
        "description": "PTO request end Date"
      },
      {
        "name": "employeeIds",
        "schema": "string",
        "required": false,
        "description": "Comma delimited list of employee ids for filtering"
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
        "statusCode": "404",
        "description": "Employee or Company not found"
      }
    ]
  },
  {
    "url": "/Company/{companyId}/Employee/{employeeId}/Rate",
    "method": "getEmployeeRate",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Rate",
    "typeScriptTag": "rate",
    "description": "Gets rates for an employee in a company",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The company id",
        "example": "COMPANYID"
      },
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "The employee id",
        "example": "EMPLOYEEID"
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
        "statusCode": "404",
        "description": "Employee or Company not found"
      }
    ]
  },
  {
    "url": "/Company/{companyId}/Employee/{employeeId}/Rate",
    "method": "createEmployeeRate",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Rate",
    "typeScriptTag": "rate",
    "description": "Creates rate for an employee in a company",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The company id",
        "example": "COMPANYID"
      },
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "The employee id",
        "example": "EMPLOYEEID"
      },
      {
        "name": "code",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CODE"
      },
      {
        "name": "salary",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "rate",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "ratePer",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "costCenter1",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "costCenter2",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "costCenter3",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "costCenter4",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "costCenter5",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "jobCode",
        "schema": "string",
        "required": false,
        "description": ""
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
        "name": "payGrade",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "id",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "00000000-0000-0000-0000-000000000000"
      },
      {
        "name": "changeRateReasonCode",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "raisePercentage",
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
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Company not found"
      }
    ]
  },
  {
    "url": "/Company/{companyId}/Employee/{employeeId}/Rate/{rateId}",
    "method": "deleteEmployeeRate",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Rate",
    "typeScriptTag": "rate",
    "description": "Deletes a rate for an employee in a company",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The company id",
        "example": "COMPANYID"
      },
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "The employee id",
        "example": "EMPLOYEEID"
      },
      {
        "name": "rateId",
        "schema": "string",
        "required": true,
        "description": "The rate id",
        "example": "RATEID"
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Company, employee or rate not found"
      }
    ]
  },
  {
    "url": "/Company/{companyId}/Employee/{employeeId}/Rate/{rateId}",
    "method": "updateEmployeeRate",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Rate",
    "typeScriptTag": "rate",
    "description": "Updates rate for an employee in a company",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The company id",
        "example": "COMPANYID"
      },
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "The employee id",
        "example": "EMPLOYEEID"
      },
      {
        "name": "rateId",
        "schema": "string",
        "required": true,
        "description": "The rate id",
        "example": "RATEID"
      },
      {
        "name": "code",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CODE"
      },
      {
        "name": "salary",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "rate",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "ratePer",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "costCenter1",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "costCenter2",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "costCenter3",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "costCenter4",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "costCenter5",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "jobCode",
        "schema": "string",
        "required": false,
        "description": ""
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
        "name": "payGrade",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "id",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "00000000-0000-0000-0000-000000000000"
      },
      {
        "name": "changeRateReasonCode",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "raisePercentage",
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
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Company not found"
      }
    ]
  },
  {
    "url": "/Company/{companyId}/Report",
    "method": "getReportList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Report",
    "typeScriptTag": "report",
    "description": "Gets a list of reports available for run",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "COMPANYID"
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
        "statusCode": "404",
        "description": "Company not found"
      }
    ]
  },
  {
    "url": "/Company/{companyId}/Report/{reportId}",
    "method": "getReport",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Report",
    "typeScriptTag": "report",
    "description": "Runs and returns content for the report",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The company id",
        "example": "COMPANYID"
      },
      {
        "name": "reportId",
        "schema": "string",
        "required": true,
        "description": "The report id",
        "example": "REPORTID"
      },
      {
        "name": "optionsOutputFormat",
        "schema": "string",
        "required": false,
        "description": "File output type (e.g. PDF, Excel, Word). Defaults to PDF"
      },
      {
        "name": "optionsSortBy",
        "schema": "string",
        "required": false,
        "description": "Comma delimited list of sortby columns"
      },
      {
        "name": "optionsOption",
        "schema": "string",
        "required": false,
        "description": "Run option (e.g. Summary or Detail). Defaults to Detail"
      },
      {
        "name": "optionsBeginCheckDate",
        "schema": "string",
        "required": false,
        "description": "Start check date. Must be a valid check date. If provided EndCheckDate, BeginProcess, and EndProcess is required"
      },
      {
        "name": "optionsEndCheckDate",
        "schema": "string",
        "required": false,
        "description": "End check date. Must be a valid check date. If provided BeginCheckDate, BeginProcess, and EndProcess is required"
      },
      {
        "name": "optionsBeginProcess",
        "schema": "integer",
        "required": false,
        "description": "The process number associated with the begin check date"
      },
      {
        "name": "optionsEndProcess",
        "schema": "integer",
        "required": false,
        "description": "The process number associated with the end check date"
      },
      {
        "name": "optionsBeginDate",
        "schema": "string",
        "required": false,
        "description": "Begin date for report date range. If provided, EndDate is required"
      },
      {
        "name": "optionsEndDate",
        "schema": "string",
        "required": false,
        "description": "End date for report date range. If provided, BeginDate is required"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      },
      {
        "statusCode": "404",
        "description": "NotFound"
      }
    ]
  },
  {
    "url": "/Company/{companyId}/Report/{reportId}/Parameters",
    "method": "getReportParameters",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Report",
    "typeScriptTag": "report",
    "description": "Gets a collection of valid parameters to pass as report options",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "COMPANYID"
      },
      {
        "name": "reportId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "REPORTID"
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
        "statusCode": "404",
        "description": "Company or report not found"
      }
    ]
  },
  {
    "url": "/Company/{companyId}/Employee/{employeeId}/Review",
    "method": "getEmployeeReviews",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Review",
    "typeScriptTag": "review",
    "description": "Gets Reviews for an employee in a company",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The company id",
        "example": "COMPANYID"
      },
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "The employee id",
        "example": "EMPLOYEEID"
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
        "statusCode": "404",
        "description": "Employee or Company not found"
      }
    ]
  },
  {
    "url": "/Company/{companyId}/Employee/{employeeId}/Review/{reviewId}",
    "method": "getEmployeeReview",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Review",
    "typeScriptTag": "review",
    "description": "Gets Reviews for an employee in a company",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The company id",
        "example": "COMPANYID"
      },
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "The employee id",
        "example": "EMPLOYEEID"
      },
      {
        "name": "reviewId",
        "schema": "string",
        "required": true,
        "description": "The employee review unique identifier",
        "example": "REVIEWID"
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
        "statusCode": "404",
        "description": "Employee or Company not found"
      }
    ]
  },
  {
    "url": "/Company/{companyId}/Review",
    "method": "searchEmployeeReviews",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Review",
    "typeScriptTag": "review",
    "description": "Gets Reviews for an employee in a company",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The company id",
        "example": "COMPANYID"
      },
      {
        "name": "searchCriteriaEffectiveStartDate",
        "schema": "string",
        "required": false,
        "description": "The effective date range start"
      },
      {
        "name": "searchCriteriaEffectiveEndDate",
        "schema": "string",
        "required": false,
        "description": "The effective date range end"
      },
      {
        "name": "searchCriteriaEmployeeIds",
        "schema": "string",
        "required": false,
        "description": "Limit result set to specified comma delimited list of employee ids"
      },
      {
        "name": "searchCriteriaPageSize",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "searchCriteriaPageNumber",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "searchCriteriaSortByProperty",
        "schema": "string",
        "required": false,
        "description": "Property to sort results by. Valid properties include any from the return entity."
      },
      {
        "name": "searchCriteriaSortDirection",
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
        "statusCode": "404",
        "description": "Employee or Company not found"
      }
    ]
  },
  {
    "url": "/Company/{companyId}/ShiftCode",
    "method": "getShiftCodes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "ShiftCode",
    "typeScriptTag": "shiftCode",
    "description": "Gets all Shift code records associated for the provided company",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The company id",
        "example": "COMPANYID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "NotFound"
      }
    ]
  },
  {
    "url": "/Company/{companyId}/ShiftCode",
    "method": "createECode",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "ShiftCode",
    "typeScriptTag": "shiftCode",
    "description": "Creates a shift code record for the provided company",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The company id",
        "example": "COMPANYID"
      },
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "code",
        "schema": "string",
        "description": ""
      },
      {
        "name": "addToRate",
        "schema": "number",
        "description": ""
      },
      {
        "name": "rate",
        "schema": "number",
        "description": ""
      },
      {
        "name": "rateMultiplier",
        "schema": "number",
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
      },
      {
        "statusCode": "404",
        "description": "Company or shift code not found"
      }
    ]
  },
  {
    "url": "/Company/{companyId}/ShiftCode/{code}",
    "method": "deleteShiftCode",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "ShiftCode",
    "typeScriptTag": "shiftCode",
    "description": "Deletes a shift code record for the provided company",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The company id",
        "example": "COMPANYID"
      },
      {
        "name": "code",
        "schema": "string",
        "required": true,
        "description": "The code",
        "example": "CODE"
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "Accepted"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "NotFound"
      }
    ]
  },
  {
    "url": "/Company/{companyId}/ShiftCode/{code}",
    "method": "getCc2",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "ShiftCode",
    "typeScriptTag": "shiftCode",
    "description": "Gets a shift code record for the provided company",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The company id",
        "example": "COMPANYID"
      },
      {
        "name": "code",
        "schema": "string",
        "required": true,
        "description": "The record id",
        "example": "CODE"
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
        "statusCode": "404",
        "description": "NotFound"
      }
    ]
  },
  {
    "url": "/Company/{companyId}/ShiftCode/{code}",
    "method": "updateShiftCode",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "ShiftCode",
    "typeScriptTag": "shiftCode",
    "description": "Updates a shift code record for the provided company",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The company id",
        "example": "COMPANYID"
      },
      {
        "name": "code",
        "schema": "string",
        "required": true,
        "description": "The shift code",
        "example": "CODE"
      },
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "code",
        "schema": "string",
        "description": ""
      },
      {
        "name": "addToRate",
        "schema": "number",
        "description": ""
      },
      {
        "name": "rate",
        "schema": "number",
        "description": ""
      },
      {
        "name": "rateMultiplier",
        "schema": "number",
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
        "statusCode": "404",
        "description": "Company or shift code not found"
      }
    ]
  },
  {
    "url": "/Company/{companyId}/Employee/{employeeId}/Skill",
    "method": "getEmployeeSkills",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Skill",
    "typeScriptTag": "skill",
    "description": "Gets skills for an employee in a company",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The company id",
        "example": "COMPANYID"
      },
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "The employee id",
        "example": "EMPLOYEEID"
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
        "statusCode": "404",
        "description": "Employee or Company not found"
      }
    ]
  },
  {
    "url": "/Company/{companyId}/Employee/{employeeId}/Skill",
    "method": "createEmployeeSkill",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Skill",
    "typeScriptTag": "skill",
    "description": "Creates Skill for an employee in a company",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The company id",
        "example": "COMPANYID"
      },
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "The employee id",
        "example": "EMPLOYEEID"
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
        "required": false,
        "description": "",
        "example": "00000000-0000-0000-0000-000000000000"
      },
      {
        "name": "code",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CODE"
      },
      {
        "name": "date",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "proficiency",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "notes",
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
        "statusCode": "404",
        "description": "Company not found"
      }
    ]
  },
  {
    "url": "/Company/{companyId}/Employee/{employeeId}/Skill/{skillId}",
    "method": "deleteEmployeeSkill",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Skill",
    "typeScriptTag": "skill",
    "description": "Deletes a skill for an employee in a company",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The company id",
        "example": "COMPANYID"
      },
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "The employee id",
        "example": "EMPLOYEEID"
      },
      {
        "name": "skillId",
        "schema": "string",
        "required": true,
        "description": "The skill id",
        "example": "SKILLID"
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Company, employee or skill not found"
      }
    ]
  },
  {
    "url": "/Company/{companyId}/Employee/{employeeId}/Skill/{skillId}",
    "method": "updateEmployeeSkill",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Skill",
    "typeScriptTag": "skill",
    "description": "Updates Skill for an employee in a company",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The company id",
        "example": "COMPANYID"
      },
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "The employee id",
        "example": "EMPLOYEEID"
      },
      {
        "name": "skillId",
        "schema": "string",
        "required": true,
        "description": "The Skill id",
        "example": "SKILLID"
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
        "required": false,
        "description": "",
        "example": "00000000-0000-0000-0000-000000000000"
      },
      {
        "name": "code",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CODE"
      },
      {
        "name": "date",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "proficiency",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "notes",
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
        "statusCode": "404",
        "description": "Company not found"
      }
    ]
  },
  {
    "url": "/Company/{companyId}/Tax",
    "method": "getTaxes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Tax",
    "typeScriptTag": "tax",
    "description": "Gets all Company Tax records associated for the provided company",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The company id",
        "example": "COMPANYID"
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
        "statusCode": "404",
        "description": "Company not found"
      }
    ]
  },
  {
    "url": "/Company/{companyId}/Tax/{code}",
    "method": "getTax",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Tax",
    "typeScriptTag": "tax",
    "description": "Gets a Company Tax record for the provided company",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The company id",
        "example": "COMPANYID"
      },
      {
        "name": "code",
        "schema": "string",
        "required": true,
        "description": "The record id",
        "example": "CODE"
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
        "statusCode": "404",
        "description": "Company or tax not found"
      }
    ]
  },
  {
    "url": "/Company/{companyId}/Tax/State/{state}",
    "method": "getStateTaxes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Tax",
    "typeScriptTag": "tax",
    "description": "Gets all Company Tax records associated for the provided company and state",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The company id",
        "example": "COMPANYID"
      },
      {
        "name": "state",
        "schema": "string",
        "required": true,
        "description": "The state",
        "example": "STATE"
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
        "statusCode": "404",
        "description": "Company not found"
      }
    ]
  },
  {
    "url": "/Company/{companyId}/Tax/Local/{state}",
    "method": "getLocalTaxes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Tax",
    "typeScriptTag": "tax",
    "description": "Gets all local Company Tax records associated for the provided company and state",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The company id",
        "example": "COMPANYID"
      },
      {
        "name": "state",
        "schema": "string",
        "required": true,
        "description": "The state",
        "example": "STATE"
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
        "statusCode": "404",
        "description": "Company not found"
      }
    ]
  },
  {
    "url": "/Company/{companyId}/Tax/Local",
    "method": "getLocalTaxes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Tax",
    "typeScriptTag": "tax",
    "description": "Gets all Company Tax local records associated for the provided company",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The company id",
        "example": "COMPANYID"
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
        "statusCode": "404",
        "description": "Company not found"
      }
    ]
  },
  {
    "url": "/Company/{companyId}/TimeImport/{calendarId}",
    "method": "getTimeImportResults",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "TimeImport",
    "typeScriptTag": "timeImport",
    "description": "Gets the result of an existing import by calendar and service provider",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The company id",
        "example": "COMPANYID"
      },
      {
        "name": "calendarId",
        "schema": "string",
        "required": true,
        "description": "The calendar id",
        "example": "CALENDARID"
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
        "statusCode": "404",
        "description": "Company not found"
      }
    ]
  },
  {
    "url": "/Company/{companyId}/TimeImport/{calendarId}",
    "method": "runTimeImport",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "TimeImport",
    "typeScriptTag": "timeImport",
    "description": "Starts time import(s) for the calendar",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The company id",
        "example": "COMPANYID"
      },
      {
        "name": "calendarId",
        "schema": "string",
        "required": true,
        "description": "The calendar id",
        "example": "CALENDARID"
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
        "statusCode": "404",
        "description": "Company not found"
      }
    ]
  },
  {
    "url": "/Company/{companyId}/Employee/{employeeId}/Training",
    "method": "getEmployeeTrainings",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Training",
    "typeScriptTag": "training",
    "description": "Gets training for an employee in a company",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The company id",
        "example": "COMPANYID"
      },
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "The employee id",
        "example": "EMPLOYEEID"
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
        "statusCode": "404",
        "description": "Employee or Company not found"
      }
    ]
  },
  {
    "url": "/Company/{companyId}/Employee/{employeeId}/Training",
    "method": "createEmployeeTraining",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Training",
    "typeScriptTag": "training",
    "description": "Creates training for an employee in a company",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The company id",
        "example": "COMPANYID"
      },
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "The employee id",
        "example": "EMPLOYEEID"
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
        "required": false,
        "description": "",
        "example": "00000000-0000-0000-0000-000000000000"
      },
      {
        "name": "code",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CODE"
      },
      {
        "name": "level",
        "schema": "string",
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
        "name": "companyPaid",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "employeePaid",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "reimbursed",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "notes",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "scheduledDate",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "expirationDate",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "renewalFrequency",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "instructor",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "certificate",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "hours",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "score",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "category",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CATEGORY"
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
        "statusCode": "404",
        "description": "Company or employee not found"
      }
    ]
  },
  {
    "url": "/Company/{companyId}/Employee/{employeeId}/Training/{trainingId}",
    "method": "deleteEmployeeTraining",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Training",
    "typeScriptTag": "training",
    "description": "Deletes a training record for an employee in a company",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The company id",
        "example": "COMPANYID"
      },
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "The employee id",
        "example": "EMPLOYEEID"
      },
      {
        "name": "trainingId",
        "schema": "string",
        "required": true,
        "description": "The training id",
        "example": "TRAININGID"
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Company, employee or training not found"
      }
    ]
  },
  {
    "url": "/Company/{companyId}/Employee/{employeeId}/Training/{trainingId}",
    "method": "updateEmployeeTraining",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Training",
    "typeScriptTag": "training",
    "description": "Updates training for an employee in a company",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The company id",
        "example": "COMPANYID"
      },
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "The employee id",
        "example": "EMPLOYEEID"
      },
      {
        "name": "trainingId",
        "schema": "string",
        "required": true,
        "description": "The Training id",
        "example": "TRAININGID"
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
        "required": false,
        "description": "",
        "example": "00000000-0000-0000-0000-000000000000"
      },
      {
        "name": "code",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CODE"
      },
      {
        "name": "level",
        "schema": "string",
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
        "name": "companyPaid",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "employeePaid",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "reimbursed",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "notes",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "scheduledDate",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "expirationDate",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "renewalFrequency",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "instructor",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "certificate",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "hours",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "score",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "category",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CATEGORY"
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
        "statusCode": "404",
        "description": "Company, employee or training found"
      }
    ]
  },
  {
    "url": "/utility/version",
    "method": "version",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Utility",
    "typeScriptTag": "utility",
    "description": "Gets the current API version",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/utility/health",
    "method": "health",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Utility",
    "typeScriptTag": "utility",
    "description": "Gets the API health status",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/utility/allowedPaths",
    "method": "getUserApiPaths",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Utility",
    "typeScriptTag": "utility",
    "description": "Gets a list of allowed paths for the current user.",
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
    "url": "/utility/clientSecret",
    "method": "resetClientSecret",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Utility",
    "typeScriptTag": "utility",
    "description": "Creates a new client secret for the API user",
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
  }
]
    }
      language="TypeScript"
      apiTitle="Proliant API"
      apiBaseUrl="https://www.readypayonline.com/CompanyAPI"
      apiVersion="v1"
      endpoints={130}
      sdkMethods={187}
      schemas={189}
      parameters={1283}
      difficulty="Hard"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/proliant/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/proliant/openapi.yaml"
      developerDocumentation="www.readypayonline.com/CompanyAPI/swagger/ui/index#!/"
    />
  );
}
  