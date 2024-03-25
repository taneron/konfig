import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function AlexisHrTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="alexis-hr-typescript-sdk"
      metaDescription={`Alexis kompletta HR-plattform förenklar din och medarbetarnas vardag
genom automatisering och intuitiv hantering av personaladministration. 

Vi ger företag möjlighet att spara tid, fatta klokare beslut och i slutändan skapa en bättre arbetsplats. En modern och enkel lösning med samlad funktionalitet som låter dig arbeta datadrivet och hantera allt mellan onboarding till offboarding, men också tidrapportering, medarbetarsamtal och integrationer.

AlexisHR har kunder som NAKD, Bokio, Qred och används av företag och anställda i över 65 länder.`}
      company="AlexisHR"
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/alexishr/logo.png"
      companyKebabCase="alexis-hr"
      clientNameCamelCase="alexisHr"
      homepage="alexishr.com"
      lastUpdated={new Date("2024-03-25T21:02:58.020Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/alexishr/favicon.png"
      contactUrl=""
      contactEmail="support@alexishr.com"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/alexishr/imagePreview.webp"
      GettingStarted={GettingStarted}
      FirstRequest={FirstRequest}
      categories={["hr","work_management","human_resources","hr_metrics","hr_analytics","hr_dashboard","hr_reporting","talent_management","hrms","people_management_platform","hr_systems","hr_services","hr_solutions","hr_tech","employee_engagement","hr_platform","personnel_management","hris","people_analytics","whistleblowing","reviews"]}
      methods={[
  {
    "url": "/company",
    "method": "listManyCompanies",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "company",
    "typeScriptTag": "company",
    "description": "Get Many Companies",
    "parameters": [
      {
        "name": "select",
        "schema": "array",
        "required": false,
        "description": "Select Company fields, comma-separated. (e.g. `select=id,firstName,lastName,workEmail`)"
      },
      {
        "name": "filters",
        "schema": "object",
        "required": false,
        "description": "Filters conditions per field. (e.g. `filters[id][$eq]=507f1f77bcf86cd799439011`)"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Limit amount of received Companies. (e.g. `limit=20`)"
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "Offset amount of received Companies. (e.g. `offset=20`)"
      },
      {
        "name": "sort",
        "schema": "object",
        "required": false,
        "description": "Sort received Companies by field. (e.g. `sort[id]=asc`)"
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/company/{id}",
    "method": "getOne",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "company",
    "typeScriptTag": "company",
    "description": "Get One Company",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Resource Id",
        "example": "507f1f77bcf86cd799439011"
      },
      {
        "name": "select",
        "schema": "array",
        "required": false,
        "description": "Select Company fields, comma-separated. (e.g. `select=id,firstName,lastName,workEmail`)"
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/employee",
    "method": "listManyEmployees",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "employee",
    "typeScriptTag": "employee",
    "description": "Get Many Employees",
    "parameters": [
      {
        "name": "select",
        "schema": "array",
        "required": false,
        "description": "Select Employee fields, comma-separated. (e.g. `select=id,firstName,lastName,workEmail`)"
      },
      {
        "name": "relations",
        "schema": "array",
        "required": false,
        "description": "Select related Employee resources, comma-separated. (e.g. `relations=office,department`)"
      },
      {
        "name": "filters",
        "schema": "object",
        "required": false,
        "description": "Filters conditions per field. (e.g. `filters[id][$eq]=507f1f77bcf86cd799439011`)"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Limit amount of received Employees. (e.g. `limit=20`)"
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "Offset amount of received Employees. (e.g. `offset=20`)"
      },
      {
        "name": "sort",
        "schema": "object",
        "required": false,
        "description": "Sort received Employees by field. (e.g. `sort[id]=asc`)"
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/employee",
    "method": "createOneEmployee",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "employee",
    "typeScriptTag": "employee",
    "description": "Create One Employee",
    "parameters": [
      {
        "name": "title",
        "schema": "string",
        "description": ""
      },
      {
        "name": "officeId",
        "schema": "string",
        "description": "",
        "example": "507f1f77bcf86cd799439011"
      },
      {
        "name": "managerEmployeeId",
        "schema": "string",
        "description": "",
        "example": "507f1f77bcf86cd799439011"
      },
      {
        "name": "departmentId",
        "schema": "string",
        "description": "",
        "example": "507f1f77bcf86cd799439011"
      },
      {
        "name": "costCenterId",
        "schema": "string",
        "description": "",
        "example": "507f1f77bcf86cd799439011"
      },
      {
        "name": "userName",
        "schema": "string",
        "description": "",
        "example": "john.doe@example.com"
      },
      {
        "name": "division",
        "schema": "string",
        "description": "",
        "example": "Division 1"
      },
      {
        "name": "organization",
        "schema": "string",
        "description": "",
        "example": "Organization 1"
      },
      {
        "name": "employeeNumber",
        "schema": "string",
        "description": "",
        "example": 1
      },
      {
        "name": "tax",
        "schema": "object",
        "description": ""
      },
      {
        "name": "workEmail",
        "schema": "string",
        "description": ""
      },
      {
        "name": "workPhone",
        "schema": "string",
        "description": ""
      },
      {
        "name": "hasOccupationalPension",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "privateEmail",
        "schema": "string",
        "description": ""
      },
      {
        "name": "firstName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lastName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "ssn",
        "schema": "string",
        "description": ""
      },
      {
        "name": "privatePhone",
        "schema": "string",
        "description": ""
      },
      {
        "name": "birthDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "avatarUrl",
        "schema": "string",
        "description": ""
      },
      {
        "name": "nationality",
        "schema": "string",
        "description": ""
      },
      {
        "name": "gender",
        "schema": "string",
        "description": ""
      },
      {
        "name": "pronoun",
        "schema": "string",
        "description": ""
      },
      {
        "name": "bankAccount",
        "schema": "object",
        "description": ""
      },
      {
        "name": "homeAddress",
        "schema": "object",
        "description": ""
      },
      {
        "name": "custom",
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/employee/{id}",
    "method": "removeEmployee",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "employee",
    "typeScriptTag": "employee",
    "description": "Delete One Employee",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Resource Id",
        "example": "507f1f77bcf86cd799439011"
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
        "statusCode": "403",
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
    "url": "/employee/{id}",
    "method": "getOne",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "employee",
    "typeScriptTag": "employee",
    "description": "Get One Employee",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Resource Id",
        "example": "507f1f77bcf86cd799439011"
      },
      {
        "name": "select",
        "schema": "array",
        "required": false,
        "description": "Select Employee fields, comma-separated. (e.g. `select=id,firstName,lastName,workEmail`)"
      },
      {
        "name": "relations",
        "schema": "array",
        "required": false,
        "description": "Select related Employee resources, comma-separated. (e.g. `relations=office,department`)"
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/employee/{id}",
    "method": "updateOne",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "employee",
    "typeScriptTag": "employee",
    "description": "Update One Employee",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Resource Id",
        "example": "507f1f77bcf86cd799439011"
      },
      {
        "name": "title",
        "schema": "string",
        "description": ""
      },
      {
        "name": "officeId",
        "schema": "string",
        "description": "",
        "example": "507f1f77bcf86cd799439011"
      },
      {
        "name": "managerEmployeeId",
        "schema": "string",
        "description": "",
        "example": "507f1f77bcf86cd799439011"
      },
      {
        "name": "departmentId",
        "schema": "string",
        "description": "",
        "example": "507f1f77bcf86cd799439011"
      },
      {
        "name": "costCenterId",
        "schema": "string",
        "description": "",
        "example": "507f1f77bcf86cd799439011"
      },
      {
        "name": "userName",
        "schema": "string",
        "description": "",
        "example": "john.doe@example.com"
      },
      {
        "name": "division",
        "schema": "string",
        "description": "",
        "example": "Division 1"
      },
      {
        "name": "organization",
        "schema": "string",
        "description": "",
        "example": "Organization 1"
      },
      {
        "name": "employeeNumber",
        "schema": "string",
        "description": "",
        "example": 1
      },
      {
        "name": "tax",
        "schema": "object",
        "description": ""
      },
      {
        "name": "workEmail",
        "schema": "string",
        "description": ""
      },
      {
        "name": "workPhone",
        "schema": "string",
        "description": ""
      },
      {
        "name": "hasOccupationalPension",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "privateEmail",
        "schema": "string",
        "description": ""
      },
      {
        "name": "firstName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lastName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "ssn",
        "schema": "string",
        "description": ""
      },
      {
        "name": "privatePhone",
        "schema": "string",
        "description": ""
      },
      {
        "name": "birthDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "avatarUrl",
        "schema": "string",
        "description": ""
      },
      {
        "name": "nationality",
        "schema": "string",
        "description": ""
      },
      {
        "name": "gender",
        "schema": "string",
        "description": ""
      },
      {
        "name": "pronoun",
        "schema": "string",
        "description": ""
      },
      {
        "name": "bankAccount",
        "schema": "object",
        "description": ""
      },
      {
        "name": "homeAddress",
        "schema": "object",
        "description": ""
      },
      {
        "name": "custom",
        "schema": "object",
        "description": ""
      },
      {
        "name": "active",
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/employee/{id}",
    "method": "replaceOneEmployee",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "employee",
    "typeScriptTag": "employee",
    "description": "Replace One Employee",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Resource Id",
        "example": "507f1f77bcf86cd799439011"
      },
      {
        "name": "title",
        "schema": "string",
        "description": ""
      },
      {
        "name": "officeId",
        "schema": "string",
        "description": "",
        "example": "507f1f77bcf86cd799439011"
      },
      {
        "name": "managerEmployeeId",
        "schema": "string",
        "description": "",
        "example": "507f1f77bcf86cd799439011"
      },
      {
        "name": "departmentId",
        "schema": "string",
        "description": "",
        "example": "507f1f77bcf86cd799439011"
      },
      {
        "name": "costCenterId",
        "schema": "string",
        "description": "",
        "example": "507f1f77bcf86cd799439011"
      },
      {
        "name": "userName",
        "schema": "string",
        "description": "",
        "example": "john.doe@example.com"
      },
      {
        "name": "division",
        "schema": "string",
        "description": "",
        "example": "Division 1"
      },
      {
        "name": "organization",
        "schema": "string",
        "description": "",
        "example": "Organization 1"
      },
      {
        "name": "employeeNumber",
        "schema": "string",
        "description": "",
        "example": 1
      },
      {
        "name": "tax",
        "schema": "object",
        "description": ""
      },
      {
        "name": "workEmail",
        "schema": "string",
        "description": ""
      },
      {
        "name": "workPhone",
        "schema": "string",
        "description": ""
      },
      {
        "name": "hasOccupationalPension",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "privateEmail",
        "schema": "string",
        "description": ""
      },
      {
        "name": "firstName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lastName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "ssn",
        "schema": "string",
        "description": ""
      },
      {
        "name": "privatePhone",
        "schema": "string",
        "description": ""
      },
      {
        "name": "birthDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "avatarUrl",
        "schema": "string",
        "description": ""
      },
      {
        "name": "nationality",
        "schema": "string",
        "description": ""
      },
      {
        "name": "gender",
        "schema": "string",
        "description": ""
      },
      {
        "name": "pronoun",
        "schema": "string",
        "description": ""
      },
      {
        "name": "bankAccount",
        "schema": "object",
        "description": ""
      },
      {
        "name": "homeAddress",
        "schema": "object",
        "description": ""
      },
      {
        "name": "custom",
        "schema": "object",
        "description": ""
      },
      {
        "name": "active",
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/department",
    "method": "listManyDepartments",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "department",
    "typeScriptTag": "department",
    "description": "Get Many Departments",
    "parameters": [
      {
        "name": "select",
        "schema": "array",
        "required": false,
        "description": "Select Department fields, comma-separated. (e.g. `select=id,firstName,lastName,workEmail`)"
      },
      {
        "name": "relations",
        "schema": "array",
        "required": false,
        "description": "Select related Department resources, comma-separated. (e.g. `relations=office,department`)"
      },
      {
        "name": "filters",
        "schema": "object",
        "required": false,
        "description": "Filters conditions per field. (e.g. `filters[id][$eq]=507f1f77bcf86cd799439011`)"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Limit amount of received Departments. (e.g. `limit=20`)"
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "Offset amount of received Departments. (e.g. `offset=20`)"
      },
      {
        "name": "sort",
        "schema": "object",
        "required": false,
        "description": "Sort received Departments by field. (e.g. `sort[id]=asc`)"
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/department",
    "method": "createOne",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "department",
    "typeScriptTag": "department",
    "description": "Create One Department",
    "parameters": [
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
        "name": "costCenterId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "parentId",
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
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/department/{id}",
    "method": "deleteOneDepartment",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "department",
    "typeScriptTag": "department",
    "description": "Delete One Department",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Resource Id",
        "example": "507f1f77bcf86cd799439011"
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
        "statusCode": "403",
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
    "url": "/department/{id}",
    "method": "getOne",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "department",
    "typeScriptTag": "department",
    "description": "Get One Department",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Resource Id",
        "example": "507f1f77bcf86cd799439011"
      },
      {
        "name": "select",
        "schema": "array",
        "required": false,
        "description": "Select Department fields, comma-separated. (e.g. `select=id,firstName,lastName,workEmail`)"
      },
      {
        "name": "relations",
        "schema": "array",
        "required": false,
        "description": "Select related Department resources, comma-separated. (e.g. `relations=office,department`)"
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/department/{id}",
    "method": "updateOneDepartment",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "department",
    "typeScriptTag": "department",
    "description": "Update One Department",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Resource Id",
        "example": "507f1f77bcf86cd799439011"
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
        "name": "costCenterId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "parentId",
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
        "statusCode": "403",
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
    "url": "/department/{id}",
    "method": "replaceOne",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "department",
    "typeScriptTag": "department",
    "description": "Replace One Department",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Resource Id",
        "example": "507f1f77bcf86cd799439011"
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
        "name": "costCenterId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "parentId",
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
        "statusCode": "403",
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
    "url": "/office",
    "method": "listManyOffices",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "office",
    "typeScriptTag": "office",
    "description": "Get Many Offices",
    "parameters": [
      {
        "name": "select",
        "schema": "array",
        "required": false,
        "description": "Select Office fields, comma-separated. (e.g. `select=id,firstName,lastName,workEmail`)"
      },
      {
        "name": "filters",
        "schema": "object",
        "required": false,
        "description": "Filters conditions per field. (e.g. `filters[id][$eq]=507f1f77bcf86cd799439011`)"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Limit amount of received Offices. (e.g. `limit=20`)"
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "Offset amount of received Offices. (e.g. `offset=20`)"
      },
      {
        "name": "sort",
        "schema": "object",
        "required": false,
        "description": "Sort received Offices by field. (e.g. `sort[id]=asc`)"
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/office",
    "method": "createOneOffice",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "office",
    "typeScriptTag": "office",
    "description": "Create One Office",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "phone",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PHONE"
      },
      {
        "name": "email",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EMAIL"
      },
      {
        "name": "timezone",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Africa/Abidjan"
      },
      {
        "name": "CFAR",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CFAR"
      },
      {
        "name": "SCB",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SCB"
      },
      {
        "name": "SNI",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SNI"
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/office/{id}",
    "method": "deleteOne",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "office",
    "typeScriptTag": "office",
    "description": "Delete One Office",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Resource Id",
        "example": "507f1f77bcf86cd799439011"
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
        "statusCode": "403",
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
    "url": "/office/{id}",
    "method": "getOneOffice",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "office",
    "typeScriptTag": "office",
    "description": "Get One Office",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Resource Id",
        "example": "507f1f77bcf86cd799439011"
      },
      {
        "name": "select",
        "schema": "array",
        "required": false,
        "description": "Select Office fields, comma-separated. (e.g. `select=id,firstName,lastName,workEmail`)"
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/office/{id}",
    "method": "updateOne",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "office",
    "typeScriptTag": "office",
    "description": "Update One Office",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Resource Id",
        "example": "507f1f77bcf86cd799439011"
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "phone",
        "schema": "string",
        "description": ""
      },
      {
        "name": "email",
        "schema": "string",
        "description": ""
      },
      {
        "name": "timezone",
        "schema": "string",
        "description": "",
        "example": "Africa/Abidjan"
      },
      {
        "name": "CFAR",
        "schema": "string",
        "description": ""
      },
      {
        "name": "SCB",
        "schema": "string",
        "description": ""
      },
      {
        "name": "SNI",
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
        "statusCode": "403",
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
    "url": "/office/{id}",
    "method": "replaceOne",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "office",
    "typeScriptTag": "office",
    "description": "Replace One Office",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Resource Id",
        "example": "507f1f77bcf86cd799439011"
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "phone",
        "schema": "string",
        "description": ""
      },
      {
        "name": "email",
        "schema": "string",
        "description": ""
      },
      {
        "name": "timezone",
        "schema": "string",
        "description": "",
        "example": "Africa/Abidjan"
      },
      {
        "name": "CFAR",
        "schema": "string",
        "description": ""
      },
      {
        "name": "SCB",
        "schema": "string",
        "description": ""
      },
      {
        "name": "SNI",
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
        "statusCode": "403",
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
    "url": "/team",
    "method": "listTeams",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "team",
    "typeScriptTag": "team",
    "description": "Get Many Teams",
    "parameters": [
      {
        "name": "select",
        "schema": "array",
        "required": false,
        "description": "Select Team fields, comma-separated. (e.g. `select=id,firstName,lastName,workEmail`)"
      },
      {
        "name": "filters",
        "schema": "object",
        "required": false,
        "description": "Filters conditions per field. (e.g. `filters[id][$eq]=507f1f77bcf86cd799439011`)"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Limit amount of received Teams. (e.g. `limit=20`)"
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "Offset amount of received Teams. (e.g. `offset=20`)"
      },
      {
        "name": "sort",
        "schema": "object",
        "required": false,
        "description": "Sort received Teams by field. (e.g. `sort[id]=asc`)"
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/team",
    "method": "createOneTeam",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "team",
    "typeScriptTag": "team",
    "description": "Create One Team",
    "parameters": [
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
        "example": "Team 1"
      },
      {
        "name": "bgColor",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "#dee9fe"
      },
      {
        "name": "fgColor",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "#032f83"
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/team/{id}",
    "method": "deleteOne",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "team",
    "typeScriptTag": "team",
    "description": "Delete One Team",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Resource Id",
        "example": "507f1f77bcf86cd799439011"
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
        "statusCode": "403",
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
    "url": "/team/{id}",
    "method": "getOneTeam",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "team",
    "typeScriptTag": "team",
    "description": "Get One Team",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Resource Id",
        "example": "507f1f77bcf86cd799439011"
      },
      {
        "name": "select",
        "schema": "array",
        "required": false,
        "description": "Select Team fields, comma-separated. (e.g. `select=id,firstName,lastName,workEmail`)"
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/team/{id}",
    "method": "updateTeam",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "team",
    "typeScriptTag": "team",
    "description": "Update One Team",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Resource Id",
        "example": "507f1f77bcf86cd799439011"
      },
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": "",
        "example": "Team 1"
      },
      {
        "name": "bgColor",
        "schema": "string",
        "description": "",
        "example": "#dee9fe"
      },
      {
        "name": "fgColor",
        "schema": "string",
        "description": "",
        "example": "#032f83"
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/team/{id}",
    "method": "replaceTeam",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "team",
    "typeScriptTag": "team",
    "description": "Replace One Team",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Resource Id",
        "example": "507f1f77bcf86cd799439011"
      },
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": "",
        "example": "Team 1"
      },
      {
        "name": "bgColor",
        "schema": "string",
        "description": "",
        "example": "#dee9fe"
      },
      {
        "name": "fgColor",
        "schema": "string",
        "description": "",
        "example": "#032f83"
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/employee-team-reference",
    "method": "getMany",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "employee-team-reference",
    "typeScriptTag": "employeeTeamReference",
    "description": "Get Many EmployeeTeamReferences",
    "parameters": [
      {
        "name": "select",
        "schema": "array",
        "required": false,
        "description": "Select EmployeeTeamReference fields, comma-separated. (e.g. `select=id,firstName,lastName,workEmail`)"
      },
      {
        "name": "relations",
        "schema": "array",
        "required": false,
        "description": "Select related EmployeeTeamReference resources, comma-separated. (e.g. `relations=office,department`)"
      },
      {
        "name": "filters",
        "schema": "object",
        "required": false,
        "description": "Filters conditions per field. (e.g. `filters[id][$eq]=507f1f77bcf86cd799439011`)"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Limit amount of received EmployeeTeamReferences. (e.g. `limit=20`)"
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "Offset amount of received EmployeeTeamReferences. (e.g. `offset=20`)"
      },
      {
        "name": "sort",
        "schema": "object",
        "required": false,
        "description": "Sort received EmployeeTeamReferences by field. (e.g. `sort[id]=asc`)"
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/employee-team-reference",
    "method": "createOneEmployeeTeamReference",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "employee-team-reference",
    "typeScriptTag": "employeeTeamReference",
    "description": "Create One EmployeeTeamReference",
    "parameters": [
      {
        "name": "teamId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "507f1f77bcf86cd799439011"
      },
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "507f1f77bcf86cd799439011"
      },
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "507f1f77bcf86cd799439011"
      },
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "507f1f77bcf86cd799439011"
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/employee-team-reference/{id}",
    "method": "deleteOne",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "employee-team-reference",
    "typeScriptTag": "employeeTeamReference",
    "description": "Delete One EmployeeTeamReference",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Resource Id",
        "example": "507f1f77bcf86cd799439011"
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
        "statusCode": "403",
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
    "url": "/employee-team-reference/{id}",
    "method": "getOneEmployeeTeamReference",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "employee-team-reference",
    "typeScriptTag": "employeeTeamReference",
    "description": "Get One EmployeeTeamReference",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Resource Id",
        "example": "507f1f77bcf86cd799439011"
      },
      {
        "name": "select",
        "schema": "array",
        "required": false,
        "description": "Select EmployeeTeamReference fields, comma-separated. (e.g. `select=id,firstName,lastName,workEmail`)"
      },
      {
        "name": "relations",
        "schema": "array",
        "required": false,
        "description": "Select related EmployeeTeamReference resources, comma-separated. (e.g. `relations=office,department`)"
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/employee-team-reference/{id}",
    "method": "updateOneEmployeeTeamReference",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "employee-team-reference",
    "typeScriptTag": "employeeTeamReference",
    "description": "Update One EmployeeTeamReference",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Resource Id",
        "example": "507f1f77bcf86cd799439011"
      },
      {
        "name": "teamId",
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
        "statusCode": "403",
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
    "url": "/employee-team-reference/{id}",
    "method": "replaceOne",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "employee-team-reference",
    "typeScriptTag": "employeeTeamReference",
    "description": "Replace One EmployeeTeamReference",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Resource Id",
        "example": "507f1f77bcf86cd799439011"
      },
      {
        "name": "teamId",
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
        "statusCode": "403",
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
    "url": "/compensation",
    "method": "getManyCompensations",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "compensation",
    "typeScriptTag": "compensation",
    "description": "Get Many Compensations",
    "parameters": [
      {
        "name": "select",
        "schema": "array",
        "required": false,
        "description": "Select Compensation fields, comma-separated. (e.g. `select=id,firstName,lastName,workEmail`)"
      },
      {
        "name": "filters",
        "schema": "object",
        "required": false,
        "description": "Filters conditions per field. (e.g. `filters[id][$eq]=507f1f77bcf86cd799439011`)"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Limit amount of received Compensations. (e.g. `limit=20`)"
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "Offset amount of received Compensations. (e.g. `offset=20`)"
      },
      {
        "name": "sort",
        "schema": "object",
        "required": false,
        "description": "Sort received Compensations by field. (e.g. `sort[id]=asc`)"
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/compensation",
    "method": "createOneCompensation",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "compensation",
    "typeScriptTag": "compensation",
    "description": "Create One Compensation",
    "parameters": [
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "507f1f77bcf86cd799439011"
      },
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "507f1f77bcf86cd799439011"
      },
      {
        "name": "companyId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "amount",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "effectiveDate",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EFFECTIVEDATE"
      },
      {
        "name": "currency",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SEK"
      },
      {
        "name": "payoutDay",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 25
      },
      {
        "name": "payoutPeriod",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "MONTHLY"
      },
      {
        "name": "payoutFrequency",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "MONTH"
      },
      {
        "name": "salarySchedule",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "ADVANCE"
      },
      {
        "name": "paidOvertime",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": false
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/compensation/{id}",
    "method": "deleteOne",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "compensation",
    "typeScriptTag": "compensation",
    "description": "Delete One Compensation",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Resource Id",
        "example": "507f1f77bcf86cd799439011"
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
        "statusCode": "403",
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
    "url": "/compensation/{id}",
    "method": "getOne",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "compensation",
    "typeScriptTag": "compensation",
    "description": "Get One Compensation",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Resource Id",
        "example": "507f1f77bcf86cd799439011"
      },
      {
        "name": "select",
        "schema": "array",
        "required": false,
        "description": "Select Compensation fields, comma-separated. (e.g. `select=id,firstName,lastName,workEmail`)"
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/compensation/{id}",
    "method": "updateOne",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "compensation",
    "typeScriptTag": "compensation",
    "description": "Update One Compensation",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Resource Id",
        "example": "507f1f77bcf86cd799439011"
      },
      {
        "name": "employeeId",
        "schema": "string",
        "description": "",
        "example": "507f1f77bcf86cd799439011"
      },
      {
        "name": "userId",
        "schema": "string",
        "description": "",
        "example": "507f1f77bcf86cd799439011"
      },
      {
        "name": "amount",
        "schema": "number",
        "description": ""
      },
      {
        "name": "currency",
        "schema": "string",
        "description": "",
        "example": "SEK"
      },
      {
        "name": "payoutDay",
        "schema": "number",
        "description": "",
        "example": 25
      },
      {
        "name": "payoutPeriod",
        "schema": "string",
        "description": "",
        "example": "MONTHLY"
      },
      {
        "name": "payoutFrequency",
        "schema": "string",
        "description": "",
        "example": "MONTH"
      },
      {
        "name": "salarySchedule",
        "schema": "string",
        "description": "",
        "example": "ADVANCE"
      },
      {
        "name": "paidOvertime",
        "schema": "boolean",
        "description": "",
        "example": false
      },
      {
        "name": "note",
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
        "statusCode": "403",
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
    "url": "/compensation/{id}",
    "method": "replaceOneCompensation",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "compensation",
    "typeScriptTag": "compensation",
    "description": "Replace One Compensation",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Resource Id",
        "example": "507f1f77bcf86cd799439011"
      },
      {
        "name": "employeeId",
        "schema": "string",
        "description": "",
        "example": "507f1f77bcf86cd799439011"
      },
      {
        "name": "userId",
        "schema": "string",
        "description": "",
        "example": "507f1f77bcf86cd799439011"
      },
      {
        "name": "amount",
        "schema": "number",
        "description": ""
      },
      {
        "name": "currency",
        "schema": "string",
        "description": "",
        "example": "SEK"
      },
      {
        "name": "payoutDay",
        "schema": "number",
        "description": "",
        "example": 25
      },
      {
        "name": "payoutPeriod",
        "schema": "string",
        "description": "",
        "example": "MONTHLY"
      },
      {
        "name": "payoutFrequency",
        "schema": "string",
        "description": "",
        "example": "MONTH"
      },
      {
        "name": "salarySchedule",
        "schema": "string",
        "description": "",
        "example": "ADVANCE"
      },
      {
        "name": "paidOvertime",
        "schema": "boolean",
        "description": "",
        "example": false
      },
      {
        "name": "note",
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
        "statusCode": "403",
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
    "url": "/employment",
    "method": "listManyEmployments",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "employment",
    "typeScriptTag": "employment",
    "description": "Get Many Employments",
    "parameters": [
      {
        "name": "select",
        "schema": "array",
        "required": false,
        "description": "Select Employment fields, comma-separated. (e.g. `select=id,firstName,lastName,workEmail`)"
      },
      {
        "name": "relations",
        "schema": "array",
        "required": false,
        "description": "Select related Employment resources, comma-separated. (e.g. `relations=office,department`)"
      },
      {
        "name": "filters",
        "schema": "object",
        "required": false,
        "description": "Filters conditions per field. (e.g. `filters[id][$eq]=507f1f77bcf86cd799439011`)"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Limit amount of received Employments. (e.g. `limit=20`)"
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "Offset amount of received Employments. (e.g. `offset=20`)"
      },
      {
        "name": "sort",
        "schema": "object",
        "required": false,
        "description": "Sort received Employments by field. (e.g. `sort[id]=asc`)"
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/employment",
    "method": "createOneEmployment",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "employment",
    "typeScriptTag": "employment",
    "description": "Create One Employment",
    "parameters": [
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "507f1f77bcf86cd799439011"
      },
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "507f1f77bcf86cd799439011"
      },
      {
        "name": "typeId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "507f1f77bcf86cd799439011"
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
        "name": "effectiveEndDate",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "terminated",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "rate",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "note",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "country",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SE"
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/employment/{id}",
    "method": "removeOne",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "employment",
    "typeScriptTag": "employment",
    "description": "Delete One Employment",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Resource Id",
        "example": "507f1f77bcf86cd799439011"
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
        "statusCode": "403",
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
    "url": "/employment/{id}",
    "method": "getOne",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "employment",
    "typeScriptTag": "employment",
    "description": "Get One Employment",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Resource Id",
        "example": "507f1f77bcf86cd799439011"
      },
      {
        "name": "select",
        "schema": "array",
        "required": false,
        "description": "Select Employment fields, comma-separated. (e.g. `select=id,firstName,lastName,workEmail`)"
      },
      {
        "name": "relations",
        "schema": "array",
        "required": false,
        "description": "Select related Employment resources, comma-separated. (e.g. `relations=office,department`)"
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/employment/{id}",
    "method": "updateEmploymentData",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "employment",
    "typeScriptTag": "employment",
    "description": "Update One Employment",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Resource Id",
        "example": "507f1f77bcf86cd799439011"
      },
      {
        "name": "employeeId",
        "schema": "string",
        "description": "",
        "example": "507f1f77bcf86cd799439011"
      },
      {
        "name": "userId",
        "schema": "string",
        "description": "",
        "example": "507f1f77bcf86cd799439011"
      },
      {
        "name": "typeId",
        "schema": "string",
        "description": "",
        "example": "507f1f77bcf86cd799439011"
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
        "name": "effectiveEndDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "terminated",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "rate",
        "schema": "number",
        "description": ""
      },
      {
        "name": "note",
        "schema": "string",
        "description": ""
      },
      {
        "name": "country",
        "schema": "string",
        "description": "",
        "example": "SE"
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/employment/{id}",
    "method": "replaceOne",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "employment",
    "typeScriptTag": "employment",
    "description": "Replace One Employment",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Resource Id",
        "example": "507f1f77bcf86cd799439011"
      },
      {
        "name": "employeeId",
        "schema": "string",
        "description": "",
        "example": "507f1f77bcf86cd799439011"
      },
      {
        "name": "userId",
        "schema": "string",
        "description": "",
        "example": "507f1f77bcf86cd799439011"
      },
      {
        "name": "typeId",
        "schema": "string",
        "description": "",
        "example": "507f1f77bcf86cd799439011"
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
        "name": "effectiveEndDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "terminated",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "rate",
        "schema": "number",
        "description": ""
      },
      {
        "name": "note",
        "schema": "string",
        "description": ""
      },
      {
        "name": "country",
        "schema": "string",
        "description": "",
        "example": "SE"
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/employment-type",
    "method": "getManyEmploymentTypes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "employment-type",
    "typeScriptTag": "employmentType",
    "description": "Get Many Employment Types",
    "parameters": [
      {
        "name": "select",
        "schema": "array",
        "required": false,
        "description": "Select Employment Type fields, comma-separated. (e.g. `select=id,firstName,lastName,workEmail`)"
      },
      {
        "name": "filters",
        "schema": "object",
        "required": false,
        "description": "Filters conditions per field. (e.g. `filters[id][$eq]=507f1f77bcf86cd799439011`)"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Limit amount of received Employment Types. (e.g. `limit=20`)"
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "Offset amount of received Employment Types. (e.g. `offset=20`)"
      },
      {
        "name": "sort",
        "schema": "object",
        "required": false,
        "description": "Sort received Employment Types by field. (e.g. `sort[id]=asc`)"
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/employment-type",
    "method": "createOneEmploymentType",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "employment-type",
    "typeScriptTag": "employmentType",
    "description": "Create One Employment Type",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "vacation",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": false
      },
      {
        "name": "country",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SE"
      },
      {
        "name": "maxMonths",
        "schema": "number",
        "required": false,
        "description": "",
        "example": 12
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/employment-type/{id}",
    "method": "deleteOneType",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "employment-type",
    "typeScriptTag": "employmentType",
    "description": "Delete One Employment Type",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Resource Id",
        "example": "507f1f77bcf86cd799439011"
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
        "statusCode": "403",
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
    "url": "/employment-type/{id}",
    "method": "getOne",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "employment-type",
    "typeScriptTag": "employmentType",
    "description": "Get One Employment Type",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Resource Id",
        "example": "507f1f77bcf86cd799439011"
      },
      {
        "name": "select",
        "schema": "array",
        "required": false,
        "description": "Select Employment Type fields, comma-separated. (e.g. `select=id,firstName,lastName,workEmail`)"
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/employment-type/{id}",
    "method": "updateOneEmploymentType",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "employment-type",
    "typeScriptTag": "employmentType",
    "description": "Update One Employment Type",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Resource Id",
        "example": "507f1f77bcf86cd799439011"
      },
      {
        "name": "name",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "vacation",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": false
      },
      {
        "name": "country",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SE"
      },
      {
        "name": "maxMonths",
        "schema": "number",
        "required": false,
        "description": "",
        "example": 12
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/employment-type/{id}",
    "method": "updateOneEmploymentType",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "employment-type",
    "typeScriptTag": "employmentType",
    "description": "Replace One Employment Type",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Resource Id",
        "example": "507f1f77bcf86cd799439011"
      },
      {
        "name": "name",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "vacation",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": false
      },
      {
        "name": "country",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SE"
      },
      {
        "name": "maxMonths",
        "schema": "number",
        "required": false,
        "description": "",
        "example": 12
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/cost-center",
    "method": "getMany",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "cost-center",
    "typeScriptTag": "costCenter",
    "description": "Get Many Cost Centers",
    "parameters": [
      {
        "name": "select",
        "schema": "array",
        "required": false,
        "description": "Select Cost Center fields, comma-separated. (e.g. `select=id,firstName,lastName,workEmail`)"
      },
      {
        "name": "filters",
        "schema": "object",
        "required": false,
        "description": "Filters conditions per field. (e.g. `filters[id][$eq]=507f1f77bcf86cd799439011`)"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Limit amount of received Cost Centers. (e.g. `limit=20`)"
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "Offset amount of received Cost Centers. (e.g. `offset=20`)"
      },
      {
        "name": "sort",
        "schema": "object",
        "required": false,
        "description": "Sort received Cost Centers by field. (e.g. `sort[id]=asc`)"
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/cost-center",
    "method": "createOneCostCenter",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "cost-center",
    "typeScriptTag": "costCenter",
    "description": "Create One Cost Center",
    "parameters": [
      {
        "name": "code",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CODE"
      },
      {
        "name": "name",
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
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/cost-center/{id}",
    "method": "deleteOneCostCenter",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "cost-center",
    "typeScriptTag": "costCenter",
    "description": "Delete One Cost Center",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Resource Id",
        "example": "507f1f77bcf86cd799439011"
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
        "statusCode": "403",
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
    "url": "/cost-center/{id}",
    "method": "getOneCostCenter",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "cost-center",
    "typeScriptTag": "costCenter",
    "description": "Get One Cost Center",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Resource Id",
        "example": "507f1f77bcf86cd799439011"
      },
      {
        "name": "select",
        "schema": "array",
        "required": false,
        "description": "Select Cost Center fields, comma-separated. (e.g. `select=id,firstName,lastName,workEmail`)"
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/cost-center/{id}",
    "method": "updateOneCostCenter",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "cost-center",
    "typeScriptTag": "costCenter",
    "description": "Update One Cost Center",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Resource Id",
        "example": "507f1f77bcf86cd799439011"
      },
      {
        "name": "code",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
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
        "statusCode": "403",
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
    "url": "/cost-center/{id}",
    "method": "replaceOneCostCenter",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "cost-center",
    "typeScriptTag": "costCenter",
    "description": "Replace One Cost Center",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Resource Id",
        "example": "507f1f77bcf86cd799439011"
      },
      {
        "name": "code",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
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
        "statusCode": "403",
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
    "url": "/leave",
    "method": "getManyLeaves",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "leave",
    "typeScriptTag": "leave",
    "description": "Get Many Leaves",
    "parameters": [
      {
        "name": "select",
        "schema": "array",
        "required": false,
        "description": "Select Leave fields, comma-separated. (e.g. `select=id,firstName,lastName,workEmail`)"
      },
      {
        "name": "relations",
        "schema": "array",
        "required": false,
        "description": "Select related Leave resources, comma-separated. (e.g. `relations=office,department`)"
      },
      {
        "name": "filters",
        "schema": "object",
        "required": false,
        "description": "Filters conditions per field. (e.g. `filters[id][$eq]=507f1f77bcf86cd799439011`)"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Limit amount of received Leaves. (e.g. `limit=20`)"
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "Offset amount of received Leaves. (e.g. `offset=20`)"
      },
      {
        "name": "sort",
        "schema": "object",
        "required": false,
        "description": "Sort received Leaves by field. (e.g. `sort[id]=asc`)"
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/leave",
    "method": "createOne",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "leave",
    "typeScriptTag": "leave",
    "description": "Create One Leave",
    "parameters": [
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "507f1f77bcf86cd799439011"
      },
      {
        "name": "typeId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "507f1f77bcf86cd799439011"
      },
      {
        "name": "childId",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "507f1f77bcf86cd799439011"
      },
      {
        "name": "duration",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "minutes"
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
        "name": "extent",
        "schema": "number",
        "required": false,
        "description": "",
        "example": 50
      },
      {
        "name": "morning",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "afternoon",
        "schema": "object",
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
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/leave/{id}",
    "method": "deleteOneLeave",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "leave",
    "typeScriptTag": "leave",
    "description": "Delete One Leave",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Resource Id",
        "example": "507f1f77bcf86cd799439011"
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
        "statusCode": "403",
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
    "url": "/leave/{id}",
    "method": "getOneLeave",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "leave",
    "typeScriptTag": "leave",
    "description": "Get One Leave",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Resource Id",
        "example": "507f1f77bcf86cd799439011"
      },
      {
        "name": "select",
        "schema": "array",
        "required": false,
        "description": "Select Leave fields, comma-separated. (e.g. `select=id,firstName,lastName,workEmail`)"
      },
      {
        "name": "relations",
        "schema": "array",
        "required": false,
        "description": "Select related Leave resources, comma-separated. (e.g. `relations=office,department`)"
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/leave/{id}",
    "method": "updateOneLeave",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "leave",
    "typeScriptTag": "leave",
    "description": "Update One Leave",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Resource Id",
        "example": "507f1f77bcf86cd799439011"
      },
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Description"
      },
      {
        "name": "childId",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "507f1f77bcf86cd799439011"
      },
      {
        "name": "duration",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "minutes"
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
        "name": "extent",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 50
      },
      {
        "name": "morning",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "afternoon",
        "schema": "boolean",
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
        "name": "approvalNote",
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
        "statusCode": "403",
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
    "url": "/leave/{id}",
    "method": "replaceOne",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "leave",
    "typeScriptTag": "leave",
    "description": "Replace One Leave",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Resource Id",
        "example": "507f1f77bcf86cd799439011"
      },
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Description"
      },
      {
        "name": "childId",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "507f1f77bcf86cd799439011"
      },
      {
        "name": "duration",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "minutes"
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
        "name": "extent",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 50
      },
      {
        "name": "morning",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "afternoon",
        "schema": "boolean",
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
        "name": "approvalNote",
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
        "statusCode": "403",
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
    "url": "/leave-type",
    "method": "getManyLeaveTypes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "leave-type",
    "typeScriptTag": "leaveType",
    "description": "Get Many LeaveTypes",
    "parameters": [
      {
        "name": "select",
        "schema": "array",
        "required": false,
        "description": "Select LeaveType fields, comma-separated. (e.g. `select=id,firstName,lastName,workEmail`)"
      },
      {
        "name": "relations",
        "schema": "array",
        "required": false,
        "description": "Select related LeaveType resources, comma-separated. (e.g. `relations=office,department`)"
      },
      {
        "name": "filters",
        "schema": "object",
        "required": false,
        "description": "Filters conditions per field. (e.g. `filters[id][$eq]=507f1f77bcf86cd799439011`)"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Limit amount of received LeaveTypes. (e.g. `limit=20`)"
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "Offset amount of received LeaveTypes. (e.g. `offset=20`)"
      },
      {
        "name": "sort",
        "schema": "object",
        "required": false,
        "description": "Sort received LeaveTypes by field. (e.g. `sort[id]=asc`)"
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/leave-type",
    "method": "createOneLeaveType",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "leave-type",
    "typeScriptTag": "leaveType",
    "description": "Create One LeaveType",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "kind",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "SICK_LEAVE"
      },
      {
        "name": "minimumDuration",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "DAY"
      },
      {
        "name": "deductible",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "paid",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "disabled",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "archived",
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
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/leave-type/{id}",
    "method": "deleteOneLeaveType",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "leave-type",
    "typeScriptTag": "leaveType",
    "description": "Delete One LeaveType",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Resource Id",
        "example": "507f1f77bcf86cd799439011"
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
        "statusCode": "403",
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
    "url": "/leave-type/{id}",
    "method": "getOneLeaveType",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "leave-type",
    "typeScriptTag": "leaveType",
    "description": "Get One LeaveType",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Resource Id",
        "example": "507f1f77bcf86cd799439011"
      },
      {
        "name": "select",
        "schema": "array",
        "required": false,
        "description": "Select LeaveType fields, comma-separated. (e.g. `select=id,firstName,lastName,workEmail`)"
      },
      {
        "name": "relations",
        "schema": "array",
        "required": false,
        "description": "Select related LeaveType resources, comma-separated. (e.g. `relations=office,department`)"
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/leave-type/{id}",
    "method": "updateOneLeaveType",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "leave-type",
    "typeScriptTag": "leaveType",
    "description": "Update One LeaveType",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Resource Id",
        "example": "507f1f77bcf86cd799439011"
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "kind",
        "schema": "string",
        "description": "",
        "example": "SICK_LEAVE"
      },
      {
        "name": "minimumDuration",
        "schema": "string",
        "description": "",
        "example": "DAY"
      },
      {
        "name": "deductible",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "paid",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "disabled",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "archived",
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/leave-type/{id}",
    "method": "replaceLeaveType",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "leave-type",
    "typeScriptTag": "leaveType",
    "description": "Replace One LeaveType",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Resource Id",
        "example": "507f1f77bcf86cd799439011"
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "kind",
        "schema": "string",
        "description": "",
        "example": "SICK_LEAVE"
      },
      {
        "name": "minimumDuration",
        "schema": "string",
        "description": "",
        "example": "DAY"
      },
      {
        "name": "deductible",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "paid",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "disabled",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "archived",
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/leave-transaction",
    "method": "listManyTransactions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "leave-transaction",
    "typeScriptTag": "leaveTransaction",
    "description": "Get Many LeaveTransactions",
    "parameters": [
      {
        "name": "select",
        "schema": "array",
        "required": false,
        "description": "Select LeaveTransaction fields, comma-separated. (e.g. `select=id,firstName,lastName,workEmail`)"
      },
      {
        "name": "relations",
        "schema": "array",
        "required": false,
        "description": "Select related LeaveTransaction resources, comma-separated. (e.g. `relations=office,department`)"
      },
      {
        "name": "filters",
        "schema": "object",
        "required": false,
        "description": "Filters conditions per field. (e.g. `filters[id][$eq]=507f1f77bcf86cd799439011`)"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Limit amount of received LeaveTransactions. (e.g. `limit=20`)"
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "Offset amount of received LeaveTransactions. (e.g. `offset=20`)"
      },
      {
        "name": "sort",
        "schema": "object",
        "required": false,
        "description": "Sort received LeaveTransactions by field. (e.g. `sort[id]=asc`)"
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/leave-transaction/{id}",
    "method": "getOneLeaveTransaction",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "leave-transaction",
    "typeScriptTag": "leaveTransaction",
    "description": "Get One LeaveTransaction",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Resource Id",
        "example": "507f1f77bcf86cd799439011"
      },
      {
        "name": "select",
        "schema": "array",
        "required": false,
        "description": "Select LeaveTransaction fields, comma-separated. (e.g. `select=id,firstName,lastName,workEmail`)"
      },
      {
        "name": "relations",
        "schema": "array",
        "required": false,
        "description": "Select related LeaveTransaction resources, comma-separated. (e.g. `relations=office,department`)"
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/child",
    "method": "getMany",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "child",
    "typeScriptTag": "child",
    "description": "Get Many Children",
    "parameters": [
      {
        "name": "select",
        "schema": "array",
        "required": false,
        "description": "Select Child fields, comma-separated. (e.g. `select=id,firstName,lastName,workEmail`)"
      },
      {
        "name": "filters",
        "schema": "object",
        "required": false,
        "description": "Filters conditions per field. (e.g. `filters[id][$eq]=507f1f77bcf86cd799439011`)"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Limit amount of received Children. (e.g. `limit=20`)"
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "Offset amount of received Children. (e.g. `offset=20`)"
      },
      {
        "name": "sort",
        "schema": "object",
        "required": false,
        "description": "Sort received Children by field. (e.g. `sort[id]=asc`)"
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/child",
    "method": "createOne",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "child",
    "typeScriptTag": "child",
    "description": "Create One Child",
    "parameters": [
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "507f1f77bcf86cd799439011"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "birthdate",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "BIRTHDATE"
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/child/{id}",
    "method": "deleteChild",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "child",
    "typeScriptTag": "child",
    "description": "Delete One Child",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Resource Id",
        "example": "507f1f77bcf86cd799439011"
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
        "statusCode": "403",
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
    "url": "/child/{id}",
    "method": "getOneChild",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "child",
    "typeScriptTag": "child",
    "description": "Get One Child",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Resource Id",
        "example": "507f1f77bcf86cd799439011"
      },
      {
        "name": "select",
        "schema": "array",
        "required": false,
        "description": "Select Child fields, comma-separated. (e.g. `select=id,firstName,lastName,workEmail`)"
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/child/{id}",
    "method": "updateChildData",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "child",
    "typeScriptTag": "child",
    "description": "Update One Child",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Resource Id",
        "example": "507f1f77bcf86cd799439011"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "birthdate",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "BIRTHDATE"
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/child/{id}",
    "method": "replaceChildData",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "child",
    "typeScriptTag": "child",
    "description": "Replace One Child",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Resource Id",
        "example": "507f1f77bcf86cd799439011"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "birthdate",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "BIRTHDATE"
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/timesheet",
    "method": "getMany",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "timesheet",
    "typeScriptTag": "timesheet",
    "description": "Get Many Timesheets",
    "parameters": [
      {
        "name": "select",
        "schema": "array",
        "required": false,
        "description": "Select Timesheet fields, comma-separated. (e.g. `select=id,firstName,lastName,workEmail`)"
      },
      {
        "name": "relations",
        "schema": "array",
        "required": false,
        "description": "Select related Timesheet resources, comma-separated. (e.g. `relations=office,department`)"
      },
      {
        "name": "filters",
        "schema": "object",
        "required": false,
        "description": "Filters conditions per field. (e.g. `filters[id][$eq]=507f1f77bcf86cd799439011`)"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Limit amount of received Timesheets. (e.g. `limit=20`)"
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "Offset amount of received Timesheets. (e.g. `offset=20`)"
      },
      {
        "name": "sort",
        "schema": "object",
        "required": false,
        "description": "Sort received Timesheets by field. (e.g. `sort[id]=asc`)"
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/timesheet/{id}",
    "method": "get",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "timesheet",
    "typeScriptTag": "timesheet",
    "description": "Get One Timesheet",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Resource Id",
        "example": "507f1f77bcf86cd799439011"
      },
      {
        "name": "select",
        "schema": "array",
        "required": false,
        "description": "Select Timesheet fields, comma-separated. (e.g. `select=id,firstName,lastName,workEmail`)"
      },
      {
        "name": "relations",
        "schema": "array",
        "required": false,
        "description": "Select related Timesheet resources, comma-separated. (e.g. `relations=office,department`)"
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/timesheet-entry",
    "method": "listManyEntries",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "timesheet-entry",
    "typeScriptTag": "timesheetEntry",
    "description": "Get Many TimesheetEntries",
    "parameters": [
      {
        "name": "select",
        "schema": "array",
        "required": false,
        "description": "Select TimesheetEntry fields, comma-separated. (e.g. `select=id,firstName,lastName,workEmail`)"
      },
      {
        "name": "relations",
        "schema": "array",
        "required": false,
        "description": "Select related TimesheetEntry resources, comma-separated. (e.g. `relations=office,department`)"
      },
      {
        "name": "filters",
        "schema": "object",
        "required": false,
        "description": "Filters conditions per field. (e.g. `filters[id][$eq]=507f1f77bcf86cd799439011`)"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Limit amount of received TimesheetEntries. (e.g. `limit=20`)"
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "Offset amount of received TimesheetEntries. (e.g. `offset=20`)"
      },
      {
        "name": "sort",
        "schema": "object",
        "required": false,
        "description": "Sort received TimesheetEntries by field. (e.g. `sort[id]=asc`)"
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/timesheet-entry",
    "method": "createOneEntry",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "timesheet-entry",
    "typeScriptTag": "timesheetEntry",
    "description": "Create One TimesheetEntry",
    "parameters": [
      {
        "name": "typeId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "507f1f77bcf86cd799439011"
      },
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "507f1f77bcf86cd799439011"
      },
      {
        "name": "date",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DATE"
      },
      {
        "name": "minutes",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 0
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/timesheet-entry/{id}",
    "method": "deleteOneEntry",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "timesheet-entry",
    "typeScriptTag": "timesheetEntry",
    "description": "Delete One TimesheetEntry",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Resource Id",
        "example": "507f1f77bcf86cd799439011"
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
        "statusCode": "403",
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
    "url": "/timesheet-entry/{id}",
    "method": "getOneEntry",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "timesheet-entry",
    "typeScriptTag": "timesheetEntry",
    "description": "Get One TimesheetEntry",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Resource Id",
        "example": "507f1f77bcf86cd799439011"
      },
      {
        "name": "select",
        "schema": "array",
        "required": false,
        "description": "Select TimesheetEntry fields, comma-separated. (e.g. `select=id,firstName,lastName,workEmail`)"
      },
      {
        "name": "relations",
        "schema": "array",
        "required": false,
        "description": "Select related TimesheetEntry resources, comma-separated. (e.g. `relations=office,department`)"
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/timesheet-entry/{id}",
    "method": "updateOneEntry",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "timesheet-entry",
    "typeScriptTag": "timesheetEntry",
    "description": "Update One TimesheetEntry",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Resource Id",
        "example": "507f1f77bcf86cd799439011"
      },
      {
        "name": "typeId",
        "schema": "string",
        "description": "",
        "example": "507f1f77bcf86cd799439011"
      },
      {
        "name": "employeeId",
        "schema": "string",
        "description": "",
        "example": "507f1f77bcf86cd799439011"
      },
      {
        "name": "date",
        "schema": "string",
        "description": ""
      },
      {
        "name": "minutes",
        "schema": "number",
        "description": ""
      },
      {
        "name": "note",
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
        "statusCode": "403",
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
    "url": "/timesheet-entry/{id}",
    "method": "updateOneEntry",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "timesheet-entry",
    "typeScriptTag": "timesheetEntry",
    "description": "Replace One TimesheetEntry",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Resource Id",
        "example": "507f1f77bcf86cd799439011"
      },
      {
        "name": "typeId",
        "schema": "string",
        "description": "",
        "example": "507f1f77bcf86cd799439011"
      },
      {
        "name": "employeeId",
        "schema": "string",
        "description": "",
        "example": "507f1f77bcf86cd799439011"
      },
      {
        "name": "date",
        "schema": "string",
        "description": ""
      },
      {
        "name": "minutes",
        "schema": "number",
        "description": ""
      },
      {
        "name": "note",
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
        "statusCode": "403",
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
    "url": "/timesheet-entry-type",
    "method": "listManyTimesheetEntryTypes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "timesheet-entry-type",
    "typeScriptTag": "timesheetEntryType",
    "description": "Get Many TimesheetEntryTypes",
    "parameters": [
      {
        "name": "select",
        "schema": "array",
        "required": false,
        "description": "Select TimesheetEntryType fields, comma-separated. (e.g. `select=id,firstName,lastName,workEmail`)"
      },
      {
        "name": "filters",
        "schema": "object",
        "required": false,
        "description": "Filters conditions per field. (e.g. `filters[id][$eq]=507f1f77bcf86cd799439011`)"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Limit amount of received TimesheetEntryTypes. (e.g. `limit=20`)"
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "Offset amount of received TimesheetEntryTypes. (e.g. `offset=20`)"
      },
      {
        "name": "sort",
        "schema": "object",
        "required": false,
        "description": "Sort received TimesheetEntryTypes by field. (e.g. `sort[id]=asc`)"
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/timesheet-entry-type/{id}",
    "method": "getOneTimesheetEntryType",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "timesheet-entry-type",
    "typeScriptTag": "timesheetEntryType",
    "description": "Get One TimesheetEntryType",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Resource Id",
        "example": "507f1f77bcf86cd799439011"
      },
      {
        "name": "select",
        "schema": "array",
        "required": false,
        "description": "Select TimesheetEntryType fields, comma-separated. (e.g. `select=id,firstName,lastName,workEmail`)"
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/work-week",
    "method": "getMany",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "work-week",
    "typeScriptTag": "workWeek",
    "description": "Get Many WorkWeeks",
    "parameters": [
      {
        "name": "select",
        "schema": "array",
        "required": false,
        "description": "Select WorkWeek fields, comma-separated. (e.g. `select=id,firstName,lastName,workEmail`)"
      },
      {
        "name": "relations",
        "schema": "array",
        "required": false,
        "description": "Select related WorkWeek resources, comma-separated. (e.g. `relations=office,department`)"
      },
      {
        "name": "filters",
        "schema": "object",
        "required": false,
        "description": "Filters conditions per field. (e.g. `filters[id][$eq]=507f1f77bcf86cd799439011`)"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Limit amount of received WorkWeeks. (e.g. `limit=20`)"
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "Offset amount of received WorkWeeks. (e.g. `offset=20`)"
      },
      {
        "name": "sort",
        "schema": "object",
        "required": false,
        "description": "Sort received WorkWeeks by field. (e.g. `sort[id]=asc`)"
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/work-week",
    "method": "createOneWorkweek",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "work-week",
    "typeScriptTag": "workWeek",
    "description": "Create One WorkWeek",
    "parameters": [
      {
        "name": "employeeId",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "507f1f77bcf86cd799439011"
      },
      {
        "name": "officeId",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "507f1f77bcf86cd799439011"
      },
      {
        "name": "effectiveFrom",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EFFECTIVEFROM"
      },
      {
        "name": "effectiveTo",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "timezone",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TIMEZONE"
      },
      {
        "name": "duration",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "monday",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "tuesday",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "wednesday",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "thursday",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "friday",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "saturday",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "sunday",
        "schema": "object",
        "required": true,
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
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/work-week/{id}",
    "method": "deleteOne",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "work-week",
    "typeScriptTag": "workWeek",
    "description": "Delete One WorkWeek",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Resource Id",
        "example": "507f1f77bcf86cd799439011"
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
        "statusCode": "403",
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
    "url": "/work-week/{id}",
    "method": "getOne",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "work-week",
    "typeScriptTag": "workWeek",
    "description": "Get One WorkWeek",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Resource Id",
        "example": "507f1f77bcf86cd799439011"
      },
      {
        "name": "select",
        "schema": "array",
        "required": false,
        "description": "Select WorkWeek fields, comma-separated. (e.g. `select=id,firstName,lastName,workEmail`)"
      },
      {
        "name": "relations",
        "schema": "array",
        "required": false,
        "description": "Select related WorkWeek resources, comma-separated. (e.g. `relations=office,department`)"
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/work-week/{id}",
    "method": "updateOne",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "work-week",
    "typeScriptTag": "workWeek",
    "description": "Update One WorkWeek",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Resource Id",
        "example": "507f1f77bcf86cd799439011"
      },
      {
        "name": "effectiveTo",
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
        "statusCode": "403",
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
    "url": "/work-week/{id}",
    "method": "replaceOne",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "work-week",
    "typeScriptTag": "workWeek",
    "description": "Replace One WorkWeek",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Resource Id",
        "example": "507f1f77bcf86cd799439011"
      },
      {
        "name": "effectiveTo",
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
        "statusCode": "403",
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
  }
]
    }
      language="TypeScript"
      apiTitle="AlexisHR API"
      apiBaseUrl="https://api.alexishr.com/v1"
      apiVersion="v1-preview"
      endpoints={36}
      sdkMethods={92}
      schemas={133}
      parameters={487}
      difficulty="Hard"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/alexishr/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/alexishr/openapi.yaml"
      developerDocumentation="docs.alexishr.com/"
    />
  );
}
  