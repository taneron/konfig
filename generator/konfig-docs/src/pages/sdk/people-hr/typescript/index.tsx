import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function PeopleHrTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="people-hr-typescript-sdk"
      metaDescription={`Access PeopleHR is part of The Access Group, and together we are supporting the world of HR. From supplying HRIS for all sized businesses, providing learning content, payroll systems, and much more.`}
      company="PeopleHR"
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/peoplehr/logo.png"
      companyKebabCase="people-hr"
      clientNameCamelCase="peopleHr"
      homepage="peoplehr.com"
      lastUpdated={new Date("2024-03-27T05:04:33.815Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/peoplehr/favicon.png"
      contactUrl="https://www.peoplehr.com/"
      contactEmail="customerservices@peoplehr.com"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/peoplehr/imagePreview.jpg"
      GettingStarted={GettingStarted}
      FirstRequest={FirstRequest}
      categories={["human_resources","hr","payroll"]}
      methods={[
  {
    "url": "/Employee  -  CheckAuthentication",
    "method": "authenticateUser",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Employee",
    "typeScriptTag": "employee",
    "description": "Check Authentication",
    "parameters": [
      {
        "name": "APIKey",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "5127e153-2c80-492b-a9e4-fb3e50af61a8"
      },
      {
        "name": "Action",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACTION"
      },
      {
        "name": "EmailAddress",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ranjit@peoplehr.com"
      },
      {
        "name": "Password",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Password2"
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
    "url": "/Employee  -  UpdateEmployeeId",
    "method": "updateEmployeeIdDetails",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Employee",
    "typeScriptTag": "employee",
    "description": "Update Employee Id",
    "parameters": [
      {
        "name": "APIKey",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "5127e153-2c80-492b-a9e4-fb3e50af61a8"
      },
      {
        "name": "Action",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACTION"
      },
      {
        "name": "ReasonForChange",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Reason for change"
      },
      {
        "name": "OldEmployeeId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PW1"
      },
      {
        "name": "NewEmployeeId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PW2"
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
    "url": "/Employee  -  GetAllEmployeeDetail",
    "method": "listEmployeeDetail",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Employee",
    "typeScriptTag": "employee",
    "description": "Get All Employee Detail",
    "parameters": [
      {
        "name": "APIKey",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "5127e153-2c80-492b-a9e4-fb3e50af61a8"
      },
      {
        "name": "Action",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACTION"
      },
      {
        "name": "IncludeLeavers",
        "schema": "string",
        "required": true,
        "description": "",
        "example": false
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
    "url": "/Employee  -  GetEmployeeDetailById",
    "method": "getDetailById",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Employee",
    "typeScriptTag": "employee",
    "description": "Get Employee Detail By Id",
    "parameters": [
      {
        "name": "APIKey",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "5127e153-2c80-492b-a9e4-fb3e50af61a8"
      },
      {
        "name": "Action",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACTION"
      },
      {
        "name": "EmployeeId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PW180"
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
    "url": "/Employee  -  CreateNewEmployee",
    "method": "addNewEmployee",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Employee",
    "typeScriptTag": "employee",
    "description": "Create New Employee",
    "parameters": [
      {
        "name": "APIKey",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "5127e153-2c80-492b-a9e4-fb3e50af61a8"
      },
      {
        "name": "Action",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACTION"
      },
      {
        "name": "EmployeeId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PW180"
      },
      {
        "name": "Title",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Mr."
      },
      {
        "name": "FirstName",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Ranjit"
      },
      {
        "name": "LastName",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Johnson"
      },
      {
        "name": "Email",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "vaibhavid@itgurussoftware.com"
      },
      {
        "name": "Gender",
        "schema": "string",
        "required": false,
        "description": "",
        "example": true
      },
      {
        "name": "StartDate",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "2016-07-27"
      },
      {
        "name": "DateOfBirth",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "1999-01-02"
      },
      {
        "name": "ReportsTo",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "firstname.lastname@itgurusssoftware.com"
      },
      {
        "name": "JobRole",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Software Enginner"
      },
      {
        "name": "JobRoleEffectiveDate",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "2014-01-01"
      },
      {
        "name": "Company",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Company name"
      },
      {
        "name": "Location",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Mumbai"
      },
      {
        "name": "Department",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "IT"
      },
      {
        "name": "NationalInsuranceNumber",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "AAAAAAAAAAAAAAAAAAA"
      },
      {
        "name": "Nationality",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Indian"
      },
      {
        "name": "EmploymentType",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Full time"
      },
      {
        "name": "EntitlementThisYear",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "12.50"
      },
      {
        "name": "EntitlementNextYear",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "0"
      },
      {
        "name": "Address",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Shiv Colony, Thergaon - Pune"
      },
      {
        "name": "PersonalPhoneNumber",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "999890988772"
      },
      {
        "name": "Payroll Company",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Your payroll company's name "
      },
      {
        "name": "Payroll ID",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Your Payroll ID"
      },
      {
        "name": "Time & Attendance ID",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Your Time & Attendance ID"
      },
      {
        "name": "Rota ID",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Your Rota ID"
      },
      {
        "name": "CRM ID",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Your CRM ID"
      },
      {
        "name": "ATS ID",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Your ATS ID"
      },
      {
        "name": "Performance ID",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Your Performance ID"
      },
      {
        "name": "Benefits ID",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Your Benefits ID"
      },
      {
        "name": "System1 ID",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Your System One ID"
      },
      {
        "name": "System2 ID",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Your System Two ID"
      },
      {
        "name": "System3 ID",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Your System Three ID"
      },
      {
        "name": "APIColumn1",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "APIColumn1 Value"
      },
      {
        "name": "APIColumn2",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "APIColumn2 Value"
      },
      {
        "name": "APIColumn3",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "APIColumn3 Value"
      },
      {
        "name": "APIColumn4",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "APIColumn4 Value"
      },
      {
        "name": "APIColumn5",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "APIColumn5 Value"
      },
      {
        "name": "PersonalEmail",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "abc@itgurussoftware.com"
      },
      {
        "name": "MethodOfRecruitment",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Method Of Recruitment"
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
    "url": "/Employee  -  UpdateEmployeeDetail",
    "method": "updateDetail",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Employee",
    "typeScriptTag": "employee",
    "description": "Update Employee Details",
    "parameters": [
      {
        "name": "APIKey",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "5127e153-2c80-492b-a9e4-fb3e50af61a8"
      },
      {
        "name": "Action",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACTION"
      },
      {
        "name": "ReasonForChange",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Reason for change"
      },
      {
        "name": "EmployeeId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PW180"
      },
      {
        "name": "Title",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Mr."
      },
      {
        "name": "FirstName",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Ranjit"
      },
      {
        "name": "LastName",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Johnson"
      },
      {
        "name": "Email",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "vaibhavid@itgurussoftware.com"
      },
      {
        "name": "Gender",
        "schema": "string",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "DateOfBirth",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "1999-01-02"
      },
      {
        "name": "StartDate",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "2016-07-27"
      },
      {
        "name": "ReportsTo",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "firstname.lastname@itgurusssoftware.com"
      },
      {
        "name": "ReportsToEffectiveDate",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "2014-01-01"
      },
      {
        "name": "Company",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Company name"
      },
      {
        "name": "CompanyEffectiveDate",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "2014-01-01"
      },
      {
        "name": "JobRole",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Software Enginner"
      },
      {
        "name": "JobRoleEffectiveDate",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "2014-01-01"
      },
      {
        "name": "Location",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Mumbai"
      },
      {
        "name": "LocationEffectiveDate",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "2014-01-01"
      },
      {
        "name": "Department",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "IT"
      },
      {
        "name": "DepartmentEffectiveDate",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "2014-01-01"
      },
      {
        "name": "NationalInsuranceNumber",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "AAAAAAAAAAAAAAAAAAA"
      },
      {
        "name": "Nationality",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Indian"
      },
      {
        "name": "EmploymentType",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Full time"
      },
      {
        "name": "EmploymentTypeEffectiveDate",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "2014-01-01"
      },
      {
        "name": "Address",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Shiv Colony, Thergaon - Pune"
      },
      {
        "name": "PersonalPhoneNumber",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "999890988772"
      },
      {
        "name": "Payroll Company",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Your payroll company's name "
      },
      {
        "name": "Payroll ID",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Your Payroll ID"
      },
      {
        "name": "Time & Attendance ID",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Your Time & Attendance ID"
      },
      {
        "name": "Rota ID",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Your Rota ID"
      },
      {
        "name": "CRM ID",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Your CRM ID"
      },
      {
        "name": "ATS ID",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Your ATS ID"
      },
      {
        "name": "Performance ID",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Your Performance ID"
      },
      {
        "name": "Benefits ID",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Your Benefits ID"
      },
      {
        "name": "System1 ID",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Your System One ID"
      },
      {
        "name": "System2 ID",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Your System Two ID"
      },
      {
        "name": "System3 ID",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Your System Three ID"
      },
      {
        "name": "APIColumn1",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "APIColumn1 Value"
      },
      {
        "name": "APIColumn2",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "APIColumn2 Value"
      },
      {
        "name": "APIColumn3",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "APIColumn3 Value"
      },
      {
        "name": "APIColumn4",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "APIColumn4 Value"
      },
      {
        "name": "APIColumn5",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "APIColumn5 Value"
      },
      {
        "name": "PersonalEmail",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "abc@itgurussoftware.com"
      },
      {
        "name": "MethodOfRecruitment",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Method Of Recruitment"
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
    "url": "/Employee  -  MarkAsLeaverById",
    "method": "updateLeaverStatusById",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Employee",
    "typeScriptTag": "employee",
    "description": "Mark As Leaver By Id",
    "parameters": [
      {
        "name": "APIKey",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "5127e153-2c80-492b-a9e4-fb3e50af61a8"
      },
      {
        "name": "Action",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACTION"
      },
      {
        "name": "EmployeeId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PW180"
      },
      {
        "name": "ReasonforLeaving",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Reason for leaving employee"
      },
      {
        "name": "AdditionalComments",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Additional comments"
      },
      {
        "name": "FinalEmploymentDate",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "2014-01-02"
      },
      {
        "name": "FinalWorkingDate",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "2014-01-02"
      },
      {
        "name": "MarkasLeaverImmediately",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": false
      },
      {
        "name": "ReportsTo",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "firstname.lastname@itgurusssoftware.com"
      },
      {
        "name": "ReEmployable",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "No"
      },
      {
        "name": "SupportingComments",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "xyzfgfdgd"
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
    "url": "/Employee  -  AddEmployeeImage",
    "method": "addImageById",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Employee",
    "typeScriptTag": "employee",
    "description": "Add Employee Image By Id",
    "parameters": [
      {
        "name": "APIKey",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "5127e153-2c80-492b-a9e4-fb3e50af61a8"
      },
      {
        "name": "Action",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACTION"
      },
      {
        "name": "EmployeeId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PW180"
      },
      {
        "name": "EmployeeImageName",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "xyz.png"
      },
      {
        "name": "EmployeeImage",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Pass base64 string"
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
    "url": "/EmployeeSalary  -  GetSalaryDetail",
    "method": "getSalaryDetail",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Employee Salary",
    "typeScriptTag": "employeeSalary",
    "description": "Get Salary Detail",
    "parameters": [
      {
        "name": "APIKey",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "5127e153-2c80-492b-a9e4-fb3e50af61a8"
      },
      {
        "name": "Action",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACTION"
      },
      {
        "name": "EmployeeId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PW180"
      },
      {
        "name": "IsIncludeHistory",
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
      }
    ]
  },
  {
    "url": "/EmployeeSalary  -  CreateNewSalary",
    "method": "addNewSalary",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Employee Salary",
    "typeScriptTag": "employeeSalary",
    "description": "Create New Salary",
    "parameters": [
      {
        "name": "APIKey",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "5127e153-2c80-492b-a9e4-fb3e50af61a8"
      },
      {
        "name": "Action",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACTION"
      },
      {
        "name": "EmployeeId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PW180"
      },
      {
        "name": "EffectiveFrom",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "2014-01-01"
      },
      {
        "name": "SalaryType",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Annual"
      },
      {
        "name": "PaymentFrequency",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Monthly"
      },
      {
        "name": "SalaryAmount",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 1000
      },
      {
        "name": "CurrencyCode",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ASD"
      },
      {
        "name": "ChangeReason",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "New Reason1"
      },
      {
        "name": "Comments",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Comments goes here"
      },
      {
        "name": "Deductions",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "Entitlements",
        "schema": "array",
        "required": true,
        "description": ""
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
    "url": "/EmployeeSalary  -  DeleteSalary",
    "method": "deleteSalary",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Employee Salary",
    "typeScriptTag": "employeeSalary",
    "description": "Delete Salary",
    "parameters": [
      {
        "name": "APIKey",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "5127e153-2c80-492b-a9e4-fb3e50af61a8"
      },
      {
        "name": "Action",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACTION"
      },
      {
        "name": "EmployeeId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PW180"
      },
      {
        "name": "EffectiveFrom",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "2014-01-01"
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
    "url": "/Employee Holiday  -  AddNewHoliday",
    "method": "addNewHoliday",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Employee Holiday",
    "typeScriptTag": "employeeHoliday",
    "description": "Add New Holiday",
    "parameters": [
      {
        "name": "APIKey",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "5127e153-2c80-492b-a9e4-fb3e50af61a8"
      },
      {
        "name": "Action",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACTION"
      },
      {
        "name": "EmployeeId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PW180"
      },
      {
        "name": "DurationType",
        "schema": "byte",
        "required": true,
        "description": "",
        "example": "1"
      },
      {
        "name": "StartDate",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "2016-07-27"
      },
      {
        "name": "EndDate",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "2017-07-27"
      },
      {
        "name": "DurationInDays",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 1
      },
      {
        "name": "DurationInMinutes",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 450
      },
      {
        "name": "PartOfDay",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "AM"
      },
      {
        "name": "Comments",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Comments goes here"
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
    "url": "/Employee Holiday  -  UpdateHoliday",
    "method": "updateDetail",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Employee Holiday",
    "typeScriptTag": "employeeHoliday",
    "description": "Update Holiday",
    "parameters": [
      {
        "name": "APIKey",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "5127e153-2c80-492b-a9e4-fb3e50af61a8"
      },
      {
        "name": "Action",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACTION"
      },
      {
        "name": "EmployeeId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PW180"
      },
      {
        "name": "OldStartDate",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "2017-07-18"
      },
      {
        "name": "OldEndDate",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "2017-07-18"
      },
      {
        "name": "DurationType",
        "schema": "byte",
        "required": true,
        "description": "",
        "example": "1"
      },
      {
        "name": "StartDate",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "2016-07-27"
      },
      {
        "name": "EndDate",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "2017-07-27"
      },
      {
        "name": "DurationInDays",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 1
      },
      {
        "name": "DurationInMinutes",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 450
      },
      {
        "name": "PartOfDay",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "AM"
      },
      {
        "name": "Comments",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Comments goes here"
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
    "url": "/Employee Holiday  -  GetHolidayDetail",
    "method": "getHolidayDetail",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Employee Holiday",
    "typeScriptTag": "employeeHoliday",
    "description": "Get Holiday Detail",
    "parameters": [
      {
        "name": "APIKey",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "5127e153-2c80-492b-a9e4-fb3e50af61a8"
      },
      {
        "name": "Action",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACTION"
      },
      {
        "name": "EmployeeId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PW180"
      },
      {
        "name": "StartDate",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "2016-07-27"
      },
      {
        "name": "EndDate",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "2017-07-27"
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
    "url": "/Employee Holiday  -  DeleteHoliday",
    "method": "removeHolidayDetail",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Employee Holiday",
    "typeScriptTag": "employeeHoliday",
    "description": "Delete holiday",
    "parameters": [
      {
        "name": "APIKey",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "5127e153-2c80-492b-a9e4-fb3e50af61a8"
      },
      {
        "name": "Action",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACTION"
      },
      {
        "name": "EmployeeId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PW180"
      },
      {
        "name": "StartDate",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "2016-07-27"
      },
      {
        "name": "EndDate",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "2017-07-27"
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
    "url": "/EmployeeAbsence  -  GetAbsenceDetail",
    "method": "getDetail",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Employee Absence",
    "typeScriptTag": "employeeAbsence",
    "description": "Get Absence Detail",
    "parameters": [
      {
        "name": "APIKey",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "5127e153-2c80-492b-a9e4-fb3e50af61a8"
      },
      {
        "name": "Action",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACTION"
      },
      {
        "name": "EmployeeId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PW180"
      },
      {
        "name": "StartDate",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "2016-07-27"
      },
      {
        "name": "EndDate",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "2017-07-27"
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
    "url": "/EmployeeAbsence  -  DeleteAbsence",
    "method": "removeAbsence",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Employee Absence",
    "typeScriptTag": "employeeAbsence",
    "description": "Delete Absence",
    "parameters": [
      {
        "name": "APIKey",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "5127e153-2c80-492b-a9e4-fb3e50af61a8"
      },
      {
        "name": "Action",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACTION"
      },
      {
        "name": "EmployeeId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PW180"
      },
      {
        "name": "StartDate",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "2016-07-27"
      },
      {
        "name": "EndDate",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "2017-07-27"
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
    "url": "/EmployeeAbsence  -  AddAbsence",
    "method": "createNewAbsence",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Employee Absence",
    "typeScriptTag": "employeeAbsence",
    "description": "Add Absence",
    "parameters": [
      {
        "name": "APIKey",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "5127e153-2c80-492b-a9e4-fb3e50af61a8"
      },
      {
        "name": "Action",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACTION"
      },
      {
        "name": "EmployeeId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PW180"
      },
      {
        "name": "DurationType",
        "schema": "byte",
        "required": true,
        "description": "",
        "example": "1"
      },
      {
        "name": "Reason",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Resaon here"
      },
      {
        "name": "StartDate",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "2016-07-27"
      },
      {
        "name": "EndDate",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "2017-07-27"
      },
      {
        "name": "PartOfDay",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "AM"
      },
      {
        "name": "Duration",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 1
      },
      {
        "name": "AbsencePaidStatus",
        "schema": "byte",
        "required": true,
        "description": "",
        "example": "1"
      },
      {
        "name": "EmergencyLeave",
        "schema": "string",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "AddComments",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "AddFiles",
        "schema": "array",
        "required": false,
        "description": ""
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
    "url": "/EmployeeAbsence  -  UpdateAbsence",
    "method": "updateAbsenceRecord",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Employee Absence",
    "typeScriptTag": "employeeAbsence",
    "description": "Update Absence ",
    "parameters": [
      {
        "name": "APIKey",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "5127e153-2c80-492b-a9e4-fb3e50af61a8"
      },
      {
        "name": "Action",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACTION"
      },
      {
        "name": "EmployeeId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PW180"
      },
      {
        "name": "OldStartDate",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "2017-07-18"
      },
      {
        "name": "OldEndDate",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "2017-07-18"
      },
      {
        "name": "DurationType",
        "schema": "byte",
        "required": true,
        "description": "",
        "example": "1"
      },
      {
        "name": "Reason",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Resaon here"
      },
      {
        "name": "StartDate",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "2016-07-27"
      },
      {
        "name": "EndDate",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "2017-07-27"
      },
      {
        "name": "PartOfDay",
        "schema": "string",
        "required": false,
        "description": "",
        "example": true
      },
      {
        "name": "Duration",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 1
      },
      {
        "name": "AbsencePaidStatus",
        "schema": "byte",
        "required": true,
        "description": "",
        "example": "1"
      },
      {
        "name": "EmergencyLeave",
        "schema": "string",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "AddComments",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "AddFiles",
        "schema": "array",
        "required": false,
        "description": ""
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
    "url": "/EmployeeDocument  -  UploadEmployeeDocument",
    "method": "submitDocumentDetails",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Employee Document",
    "typeScriptTag": "employeeDocument",
    "description": "Upload Employee Document",
    "parameters": [
      {
        "name": "APIKey",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "5127e153-2c80-492b-a9e4-fb3e50af61a8"
      },
      {
        "name": "Action",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACTION"
      },
      {
        "name": "EmployeeId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PW180"
      },
      {
        "name": "Category",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Catagory"
      },
      {
        "name": "EmployeeAccess",
        "schema": "string",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "ManagerAccess",
        "schema": "string",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "SignatureRequired",
        "schema": "string",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "DocumentName",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Abc.txt"
      },
      {
        "name": "Description",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Description here"
      },
      {
        "name": "File",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Pass base64 string"
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
    "url": "/EmployeeDocument  -  GetAllDocument",
    "method": "getAllDocuments",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Employee Document",
    "typeScriptTag": "employeeDocument",
    "description": "Get All Document",
    "parameters": [
      {
        "name": "APIKey",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "5127e153-2c80-492b-a9e4-fb3e50af61a8"
      },
      {
        "name": "Action",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACTION"
      },
      {
        "name": "EmployeeId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PW180"
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
    "url": "/EmployeeDocument  -  GetDocumentById",
    "method": "getDocumentById",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Employee Document",
    "typeScriptTag": "employeeDocument",
    "description": "Get Document By Id",
    "parameters": [
      {
        "name": "APIKey",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "5127e153-2c80-492b-a9e4-fb3e50af61a8"
      },
      {
        "name": "Action",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACTION"
      },
      {
        "name": "EmployeeId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PW180"
      },
      {
        "name": "DocumentId",
        "schema": "long integer",
        "required": true,
        "description": "",
        "example": "1"
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
    "url": "/Employee Timesheet  -  GetTimesheetDetail",
    "method": "getDetailList",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Employee Timesheet",
    "typeScriptTag": "employeeTimesheet",
    "description": "Get Employee Timesheet Detail List",
    "parameters": [
      {
        "name": "APIKey",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "5127e153-2c80-492b-a9e4-fb3e50af61a8"
      },
      {
        "name": "Action",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACTION"
      },
      {
        "name": "EmployeeId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PW180"
      },
      {
        "name": "StartDate",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "2016-07-27"
      },
      {
        "name": "EndDate",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "2017-07-27"
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
    "url": "/Employee Timesheet  -  CreateNewTimesheet",
    "method": "createNewTimesheet",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Employee Timesheet",
    "typeScriptTag": "employeeTimesheet",
    "description": "Create New Timesheet",
    "parameters": [
      {
        "name": "APIKey",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "5127e153-2c80-492b-a9e4-fb3e50af61a8"
      },
      {
        "name": "Action",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACTION"
      },
      {
        "name": "EmployeeId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PW180"
      },
      {
        "name": "TimesheetDate",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "2017-01-01"
      },
      {
        "name": "TimeIn1",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "09:35"
      },
      {
        "name": "TimeOut1",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "04:00"
      },
      {
        "name": "TimeIn2",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "09:45"
      },
      {
        "name": "TimeOut2",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "04:10"
      },
      {
        "name": "TimeIn3",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "09:55"
      },
      {
        "name": "TimeOut3",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "04:20"
      },
      {
        "name": "TimeIn4",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "10:00"
      },
      {
        "name": "TimeOut4",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "04:40"
      },
      {
        "name": "TimeIn5",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "10:10"
      },
      {
        "name": "TimeOut5",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "04:50"
      },
      {
        "name": "TimeIn6",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "10:30"
      },
      {
        "name": "TimeOut6",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "05:00"
      },
      {
        "name": "TimeIn7",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "10:50"
      },
      {
        "name": "TimeOut7",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "05:10"
      },
      {
        "name": "TimeIn8",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "11:10"
      },
      {
        "name": "TimeOut8",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "05:20"
      },
      {
        "name": "TimeIn9",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "11:30"
      },
      {
        "name": "TimeOut9",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "05:30"
      },
      {
        "name": "TimeIn10",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "11:50"
      },
      {
        "name": "TimeOut10",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "06:00"
      },
      {
        "name": "TimeIn11",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "12:00"
      },
      {
        "name": "TimeOut11",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "06:10"
      },
      {
        "name": "TimeIn12",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "12:30"
      },
      {
        "name": "TimeOut12",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "06:20"
      },
      {
        "name": "TimeIn13",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "12:50"
      },
      {
        "name": "TimeOut13",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "06:30"
      },
      {
        "name": "TimeIn14",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "3:00"
      },
      {
        "name": "TimeOut14",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "06:50"
      },
      {
        "name": "TimeIn15",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "03:10"
      },
      {
        "name": "TimeOut15",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "7:00"
      },
      {
        "name": "Comments",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Comments goes here"
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
    "url": "/Employee Timesheet  -  UpdateTimesheet",
    "method": "updateDetails",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Employee Timesheet",
    "typeScriptTag": "employeeTimesheet",
    "description": "Update Employee Timesheet",
    "parameters": [
      {
        "name": "APIKey",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "5127e153-2c80-492b-a9e4-fb3e50af61a8"
      },
      {
        "name": "Action",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACTION"
      },
      {
        "name": "EmployeeId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PW180"
      },
      {
        "name": "TimesheetDate",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "2017-01-01"
      },
      {
        "name": "TimeIn1",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "09:35"
      },
      {
        "name": "TimeOut1",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "04:00"
      },
      {
        "name": "TimeIn2",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "09:45"
      },
      {
        "name": "TimeOut2",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "04:10"
      },
      {
        "name": "TimeIn3",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "09:55"
      },
      {
        "name": "TimeOut3",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "04:20"
      },
      {
        "name": "TimeIn4",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "10:00"
      },
      {
        "name": "TimeOut4",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "04:40"
      },
      {
        "name": "TimeIn5",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "10:10"
      },
      {
        "name": "TimeOut5",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "04:50"
      },
      {
        "name": "TimeIn6",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "10:30"
      },
      {
        "name": "TimeOut6",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "05:00"
      },
      {
        "name": "TimeIn7",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "10:50"
      },
      {
        "name": "TimeOut7",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "05:10"
      },
      {
        "name": "TimeIn8",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "11:10"
      },
      {
        "name": "TimeOut8",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "05:20"
      },
      {
        "name": "TimeIn9",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "11:30"
      },
      {
        "name": "TimeOut9",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "05:30"
      },
      {
        "name": "TimeIn10",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "11:50"
      },
      {
        "name": "TimeOut10",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "06:00"
      },
      {
        "name": "TimeIn11",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "12:00"
      },
      {
        "name": "TimeOut11",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "06:10"
      },
      {
        "name": "TimeIn12",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "12:30"
      },
      {
        "name": "TimeOut12",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "06:20"
      },
      {
        "name": "TimeIn13",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "12:50"
      },
      {
        "name": "TimeOut13",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "06:30"
      },
      {
        "name": "TimeIn14",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "3:00"
      },
      {
        "name": "TimeOut14",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "06:50"
      },
      {
        "name": "TimeIn15",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "03:10"
      },
      {
        "name": "TimeOut15",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "7:00"
      },
      {
        "name": "Comments",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Comments goes here"
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
    "url": "/Employee Timesheet  -  DeleteTimesheet",
    "method": "deleteTimesheet",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Employee Timesheet",
    "typeScriptTag": "employeeTimesheet",
    "description": "Delete Timesheet",
    "parameters": [
      {
        "name": "APIKey",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "5127e153-2c80-492b-a9e4-fb3e50af61a8"
      },
      {
        "name": "Action",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACTION"
      },
      {
        "name": "EmployeeId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PW180"
      },
      {
        "name": "TimesheetDate",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "2017-01-01"
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
    "url": "/Employee Project Timesheet  -  GetProjectTimesheetDetail",
    "method": "getProjectTimesheetDetail",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Employee Project Timesheet",
    "typeScriptTag": "employeeProjectTimesheet",
    "description": "Get Project Time sheet Detail",
    "parameters": [
      {
        "name": "APIKey",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "5127e153-2c80-492b-a9e4-fb3e50af61a8"
      },
      {
        "name": "Action",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACTION"
      },
      {
        "name": "EmployeeId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PW180"
      },
      {
        "name": "StartDate",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "2016-07-27"
      },
      {
        "name": "EndDate",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "2017-07-27"
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
    "url": "/Employee Project Timesheet  -  GetProjectTimesheetByTransactionId",
    "method": "getByTransactionId",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Employee Project Timesheet",
    "typeScriptTag": "employeeProjectTimesheet",
    "description": "Get Project Timesheet By TransactionId",
    "parameters": [
      {
        "name": "APIKey",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "5127e153-2c80-492b-a9e4-fb3e50af61a8"
      },
      {
        "name": "Action",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACTION"
      },
      {
        "name": "EmployeeId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PW180"
      },
      {
        "name": "TransactionId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 1
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
    "url": "/Employee Project Timesheet  -  CreateProjectTimesheet",
    "method": "createTimesheet",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Employee Project Timesheet",
    "typeScriptTag": "employeeProjectTimesheet",
    "description": "Create project timesheet",
    "parameters": [
      {
        "name": "APIKey",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "5127e153-2c80-492b-a9e4-fb3e50af61a8"
      },
      {
        "name": "Action",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACTION"
      },
      {
        "name": "EmployeeId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PW180"
      },
      {
        "name": "ProjectTimesheetDate",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "2014-01-01"
      },
      {
        "name": "TimesheetProject",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Project name goes here"
      },
      {
        "name": "TimesheetTask",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Time sheet tasks goes here"
      },
      {
        "name": "TimesheetDetail",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Time sheet details goes here"
      },
      {
        "name": "StartTime",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "02:00"
      },
      {
        "name": "EndTime",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "04:00"
      },
      {
        "name": "TotalHours",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "02:00"
      },
      {
        "name": "Quantity",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "Notes",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "notes goes here"
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
    "url": "/Employee Project Timesheet  -  UpdateProjectTimesheet",
    "method": "updateTimesheet",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Employee Project Timesheet",
    "typeScriptTag": "employeeProjectTimesheet",
    "description": "Update project timesheet",
    "parameters": [
      {
        "name": "APIKey",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "5127e153-2c80-492b-a9e4-fb3e50af61a8"
      },
      {
        "name": "Action",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACTION"
      },
      {
        "name": "EmployeeId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PW180"
      },
      {
        "name": "TransactionId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 1
      },
      {
        "name": "TimesheetProject",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Project name goes here"
      },
      {
        "name": "TimesheetTask",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Time sheet tasks goes here"
      },
      {
        "name": "TimesheetDetail",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Time sheet details goes here"
      },
      {
        "name": "StartTime",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "02:00"
      },
      {
        "name": "EndTime",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "04:00"
      },
      {
        "name": "TotalHours",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "02:00"
      },
      {
        "name": "Quantity",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "Notes",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "notes goes here"
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
    "url": "/Employee Project Timesheet  -  DeleteProjectTimesheet",
    "method": "deleteTimesheet",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Employee Project Timesheet",
    "typeScriptTag": "employeeProjectTimesheet",
    "description": "Delete project timesheet",
    "parameters": [
      {
        "name": "APIKey",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "5127e153-2c80-492b-a9e4-fb3e50af61a8"
      },
      {
        "name": "Action",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACTION"
      },
      {
        "name": "EmployeeId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PW180"
      },
      {
        "name": "TransactionId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 1
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
    "url": "/Employee Project Timesheet  -  GetAllTimesheetProject",
    "method": "listAllTimesheetProject",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Employee Project Timesheet",
    "typeScriptTag": "employeeProjectTimesheet",
    "description": "Get All Timesheet Project",
    "parameters": [
      {
        "name": "APIKey",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "5127e153-2c80-492b-a9e4-fb3e50af61a8"
      },
      {
        "name": "Action",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACTION"
      },
      {
        "name": "ProjectName",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Project Name"
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
    "url": "/Employee Project Timesheet  -  AddNewProject",
    "method": "addProjectDetail",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Employee Project Timesheet",
    "typeScriptTag": "employeeProjectTimesheet",
    "description": "Add New Project",
    "parameters": [
      {
        "name": "APIKey",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "5127e153-2c80-492b-a9e4-fb3e50af61a8"
      },
      {
        "name": "Action",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACTION"
      },
      {
        "name": "ProjectName",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Project Name"
      },
      {
        "name": "InUse",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Yes"
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
    "url": "/Employee Project Timesheet  -  EditProject",
    "method": "editProjectDetails",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Employee Project Timesheet",
    "typeScriptTag": "employeeProjectTimesheet",
    "description": "Edit Project",
    "parameters": [
      {
        "name": "APIKey",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "5127e153-2c80-492b-a9e4-fb3e50af61a8"
      },
      {
        "name": "Action",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACTION"
      },
      {
        "name": "ProjectName",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Project Name"
      },
      {
        "name": "NewProjectName",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "updated Project Name"
      },
      {
        "name": "InUse",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Yes"
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
    "url": "/Employee Project Timesheet  -  GetAllProjectTask",
    "method": "getAllProjectTask",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Employee Project Timesheet",
    "typeScriptTag": "employeeProjectTimesheet",
    "description": "Get All Project Task",
    "parameters": [
      {
        "name": "APIKey",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "5127e153-2c80-492b-a9e4-fb3e50af61a8"
      },
      {
        "name": "Action",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACTION"
      },
      {
        "name": "ProjectTaskName",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "ABC"
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
    "url": "/Employee Project Timesheet  -  AddNewProjectTask",
    "method": "addNewProjectTaskDetail",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Employee Project Timesheet",
    "typeScriptTag": "employeeProjectTimesheet",
    "description": "Add New Project Task",
    "parameters": [
      {
        "name": "APIKey",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "5127e153-2c80-492b-a9e4-fb3e50af61a8"
      },
      {
        "name": "Action",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACTION"
      },
      {
        "name": "ProjectTaskName",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ABC"
      },
      {
        "name": "InUse",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Yes"
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
    "url": "/Employee Project Timesheet  -  EditProjectTask",
    "method": "updateProjectTaskDetail",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Employee Project Timesheet",
    "typeScriptTag": "employeeProjectTimesheet",
    "description": "Edit Project Task",
    "parameters": [
      {
        "name": "APIKey",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "5127e153-2c80-492b-a9e4-fb3e50af61a8"
      },
      {
        "name": "Action",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACTION"
      },
      {
        "name": "ProjectTaskName",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ABC"
      },
      {
        "name": "New_ProjectTaskName",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "XYZ"
      },
      {
        "name": "InUse",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Yes"
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
    "url": "/Employee Project Timesheet  -  GetAllProjectTaskDetail",
    "method": "getAllProjectTaskDetail",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Employee Project Timesheet",
    "typeScriptTag": "employeeProjectTimesheet",
    "description": "Get All Project Task Detail",
    "parameters": [
      {
        "name": "APIKey",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "5127e153-2c80-492b-a9e4-fb3e50af61a8"
      },
      {
        "name": "Action",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACTION"
      },
      {
        "name": "ProjectTaskDetailName",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "XYZ"
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
    "url": "/Employee Project Timesheet  -  AddNewProjectTaskDetail",
    "method": "addNewProjectTaskDetail",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Employee Project Timesheet",
    "typeScriptTag": "employeeProjectTimesheet",
    "description": "Add New Project Task Detail",
    "parameters": [
      {
        "name": "APIKey",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "5127e153-2c80-492b-a9e4-fb3e50af61a8"
      },
      {
        "name": "Action",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACTION"
      },
      {
        "name": "ProjectTaskDetailName",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "XYZ"
      },
      {
        "name": "InUse",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Yes"
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
    "url": "/Employee Project Timesheet  -  EditProjectTaskDetail",
    "method": "editTaskDetail",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Employee Project Timesheet",
    "typeScriptTag": "employeeProjectTimesheet",
    "description": "Edit Project Task Detail",
    "parameters": [
      {
        "name": "APIKey",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "5127e153-2c80-492b-a9e4-fb3e50af61a8"
      },
      {
        "name": "Action",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACTION"
      },
      {
        "name": "ProjectTaskDetailName",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "XYZ"
      },
      {
        "name": "New_ProjectTaskDetailName",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "New Project Task Detail Name goes here"
      },
      {
        "name": "InUse",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Yes"
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
    "url": "/EmployeeAppraisal  -  GetByEmployeeId",
    "method": "getByEmployeeId",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Employee Appraisal",
    "typeScriptTag": "employeeAppraisal",
    "description": " Get By Employee Id ",
    "parameters": [
      {
        "name": "APIKey",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "5127e153-2c80-492b-a9e4-fb3e50af61a8"
      },
      {
        "name": "Action",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACTION"
      },
      {
        "name": "EmployeeId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PW180"
      },
      {
        "name": "StartDate",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "2016-07-27"
      },
      {
        "name": "EndDate",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "2017-07-27"
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
    "url": "/EmployeeAppraisal  -  GetByAppraisalId",
    "method": "getByAppraisalId",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Employee Appraisal",
    "typeScriptTag": "employeeAppraisal",
    "description": "Get By Appraisal Id",
    "parameters": [
      {
        "name": "APIKey",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "5127e153-2c80-492b-a9e4-fb3e50af61a8"
      },
      {
        "name": "Action",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACTION"
      },
      {
        "name": "EmployeeId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PW180"
      },
      {
        "name": "AppraisalId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 383
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
    "url": "/EmployeeAppraisal  -  AddNewAppraisal",
    "method": "createNewAppraisal",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Employee Appraisal",
    "typeScriptTag": "employeeAppraisal",
    "description": "Add New Appraisal",
    "parameters": [
      {
        "name": "APIKey",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "5127e153-2c80-492b-a9e4-fb3e50af61a8"
      },
      {
        "name": "Action",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACTION"
      },
      {
        "name": "EmployeeId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PW180"
      },
      {
        "name": "AppraisalReviewDate",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "2017-05-01"
      },
      {
        "name": "Reviewer",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "rajendra.petave@itgurussoftware.com"
      },
      {
        "name": "Notes",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "notes goes here"
      },
      {
        "name": "ActionPlan",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "11"
      },
      {
        "name": "Objectives",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "121"
      },
      {
        "name": "CustomColumns",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "AddFiles",
        "schema": "array",
        "required": true,
        "description": ""
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
    "url": "/EmployeeAppraisal  -  UpdateAppraisal",
    "method": "updateUserAppraisal",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Employee Appraisal",
    "typeScriptTag": "employeeAppraisal",
    "description": "Update Appraisal",
    "parameters": [
      {
        "name": "APIKey",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "5127e153-2c80-492b-a9e4-fb3e50af61a8"
      },
      {
        "name": "Action",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACTION"
      },
      {
        "name": "EmployeeId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PW180"
      },
      {
        "name": "AppraisalReviewDate",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "2017-05-01"
      },
      {
        "name": "Reviewer",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "rajendra.petave@itgurussoftware.com"
      },
      {
        "name": "Notes",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "notes goes here"
      },
      {
        "name": "ActionPlan",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "11"
      },
      {
        "name": "Objectives",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "121"
      },
      {
        "name": "CustomColumns",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "AddFiles",
        "schema": "array",
        "required": true,
        "description": ""
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
    "url": "/EmployeeAppraisal  -  DeleteAppraisal",
    "method": "deleteAppraisal",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Employee Appraisal",
    "typeScriptTag": "employeeAppraisal",
    "description": "Delete Appraisal ",
    "parameters": [
      {
        "name": "APIKey",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "5127e153-2c80-492b-a9e4-fb3e50af61a8"
      },
      {
        "name": "Action",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACTION"
      },
      {
        "name": "EmployeeId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PW180"
      },
      {
        "name": "AppraisalId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 383
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
    "url": "/EmployeeBenefit  -  GetBenefitByEmployeeId",
    "method": "getByEmployeeIdDetails",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Employee Benefit",
    "typeScriptTag": "employeeBenefit",
    "description": "Get Benefit By EmployeeId Id ",
    "parameters": [
      {
        "name": "APIKey",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "5127e153-2c80-492b-a9e4-fb3e50af61a8"
      },
      {
        "name": "Action",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACTION"
      },
      {
        "name": "EmployeeId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PW180"
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
    "url": "/EmployeeBenefit  -  GetBenefitByBenefitId",
    "method": "getByBenefitIdDetails",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Employee Benefit",
    "typeScriptTag": "employeeBenefit",
    "description": "Get By Benefit Id",
    "parameters": [
      {
        "name": "APIKey",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "5127e153-2c80-492b-a9e4-fb3e50af61a8"
      },
      {
        "name": "Action",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACTION"
      },
      {
        "name": "EmployeeId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PW180"
      },
      {
        "name": "BenefitId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 382
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
    "url": "/EmployeeBenefit  -  AddNewBenefit",
    "method": "createNewBenefit",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Employee Benefit",
    "typeScriptTag": "employeeBenefit",
    "description": "Add New Benefit",
    "parameters": [
      {
        "name": "APIKey",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "5127e153-2c80-492b-a9e4-fb3e50af61a8"
      },
      {
        "name": "Action",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACTION"
      },
      {
        "name": "EmployeeId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PW180"
      },
      {
        "name": "Benefit",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Date Awarded"
      },
      {
        "name": "DateAwarded",
        "schema": "String",
        "required": true,
        "description": "",
        "example": "2017-05-05"
      },
      {
        "name": "ExpiryDate",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "2018-07-07"
      },
      {
        "name": "Value",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "1000.10"
      },
      {
        "name": "Comments",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Comments goes here"
      },
      {
        "name": "RecoverOnTermination",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "yes"
      },
      {
        "name": "CustomColumns",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "AddFiles",
        "schema": "array",
        "required": true,
        "description": ""
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
    "url": "/EmployeeBenefit  -  UpdateBenefit",
    "method": "updateDetails",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Employee Benefit",
    "typeScriptTag": "employeeBenefit",
    "description": "Update Benefit ",
    "parameters": [
      {
        "name": "APIKey",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "5127e153-2c80-492b-a9e4-fb3e50af61a8"
      },
      {
        "name": "Action",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACTION"
      },
      {
        "name": "EmployeeId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PW180"
      },
      {
        "name": "Benefit",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Date Awarded"
      },
      {
        "name": "BenefitId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 382
      },
      {
        "name": "DateAwarded",
        "schema": "String",
        "required": true,
        "description": "",
        "example": "2017-05-05"
      },
      {
        "name": "ExpiryDate",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "2018-07-07"
      },
      {
        "name": "Value",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "1000.10"
      },
      {
        "name": "RecoverOnTermination",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "yes"
      },
      {
        "name": "CustomColumns",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "AddFiles",
        "schema": "array",
        "required": false,
        "description": ""
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
    "url": "/EmployeeBenefit  -  DeleteBenefit",
    "method": "deleteBenefit",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Employee Benefit",
    "typeScriptTag": "employeeBenefit",
    "description": "Delete Benefit ",
    "parameters": [
      {
        "name": "APIKey",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "5127e153-2c80-492b-a9e4-fb3e50af61a8"
      },
      {
        "name": "Action",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACTION"
      },
      {
        "name": "EmployeeId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PW180"
      },
      {
        "name": "BenefitId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 382
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
    "url": "/Employee CPD  -  GetCPDByEmployeeId",
    "method": "getByEmployeeId",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Employee CPD",
    "typeScriptTag": "employeeCpd",
    "description": "Get CPD By EmployeeId",
    "parameters": [
      {
        "name": "APIKey",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "5127e153-2c80-492b-a9e4-fb3e50af61a8"
      },
      {
        "name": "Action",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACTION"
      },
      {
        "name": "EmployeeId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PW180"
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
    "url": "/Employee CPD  -  GetByCPDId",
    "method": "getByCpdId",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Employee CPD",
    "typeScriptTag": "employeeCpd",
    "description": "Get By CPDId",
    "parameters": [
      {
        "name": "APIKey",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "5127e153-2c80-492b-a9e4-fb3e50af61a8"
      },
      {
        "name": "Action",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACTION"
      },
      {
        "name": "EmployeeId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PW180"
      },
      {
        "name": "CPDId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 148
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
    "url": "/Employee CPD  -  AddNewCPD",
    "method": "createNewCpd",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Employee CPD",
    "typeScriptTag": "employeeCpd",
    "description": "Add new CPD",
    "parameters": [
      {
        "name": "APIKey",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "5127e153-2c80-492b-a9e4-fb3e50af61a8"
      },
      {
        "name": "Action",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACTION"
      },
      {
        "name": "EmployeeId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PW180"
      },
      {
        "name": "Activity",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Activity name"
      },
      {
        "name": "StartDate",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "2016-07-27"
      },
      {
        "name": "EndDate",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "2017-07-27"
      },
      {
        "name": "RollNumber",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "45"
      },
      {
        "name": "DateAdmitted",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "2017-01-01"
      },
      {
        "name": "HoursRequired",
        "schema": "integer",
        "required": false,
        "description": "",
        "example": 20
      },
      {
        "name": "HoursAccredited",
        "schema": "integer",
        "required": false,
        "description": "",
        "example": 21
      },
      {
        "name": "Notes",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "notes goes here"
      },
      {
        "name": "CustomColumns",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "AddFiles",
        "schema": "array",
        "required": true,
        "description": ""
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
    "url": "/Employee CPD  -  UpdateCPD",
    "method": "updateCpd",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Employee CPD",
    "typeScriptTag": "employeeCpd",
    "description": "Update CPD",
    "parameters": [
      {
        "name": "APIKey",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "5127e153-2c80-492b-a9e4-fb3e50af61a8"
      },
      {
        "name": "Action",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACTION"
      },
      {
        "name": "EmployeeId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PW180"
      },
      {
        "name": "CPDId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 148
      },
      {
        "name": "Activity",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Activity name"
      },
      {
        "name": "StartDate",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "2016-07-27"
      },
      {
        "name": "EndDate",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "2017-07-27"
      },
      {
        "name": "RollNumber",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "45"
      },
      {
        "name": "DateAdmitted",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "2017-01-01"
      },
      {
        "name": "HoursRequired",
        "schema": "integer",
        "required": false,
        "description": "",
        "example": 20
      },
      {
        "name": "HoursAccredited",
        "schema": "integer",
        "required": false,
        "description": "",
        "example": 21
      },
      {
        "name": "Notes",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "notes goes here"
      },
      {
        "name": "CustomColumns",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "AddFiles",
        "schema": "array",
        "required": false,
        "description": ""
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
    "url": "/Employee CPD  -  DeleteCPD",
    "method": "deleteCpd",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Employee CPD",
    "typeScriptTag": "employeeCpd",
    "description": "Delete CPD",
    "parameters": [
      {
        "name": "APIKey",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "5127e153-2c80-492b-a9e4-fb3e50af61a8"
      },
      {
        "name": "Action",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACTION"
      },
      {
        "name": "EmployeeId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PW180"
      },
      {
        "name": "CPDId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 148
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
    "url": "/Employee Driving  -  GetDrivingLicenseByEmployeeId",
    "method": "getDrivingLicenseByEmployeeId",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Employee Driving",
    "typeScriptTag": "employeeDriving",
    "description": "Get Driving License By Employee Id",
    "parameters": [
      {
        "name": "APIKey",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "5127e153-2c80-492b-a9e4-fb3e50af61a8"
      },
      {
        "name": "Action",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACTION"
      },
      {
        "name": "EmployeeId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PW180"
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
    "url": "/Employee Driving  -  GetDrivingLicenseByDrivingId",
    "method": "getDrivingLicenseByDrivingId",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Employee Driving",
    "typeScriptTag": "employeeDriving",
    "description": "Get Driving License By Driving Id",
    "parameters": [
      {
        "name": "APIKey",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "5127e153-2c80-492b-a9e4-fb3e50af61a8"
      },
      {
        "name": "Action",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACTION"
      },
      {
        "name": "EmployeeId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PW180"
      },
      {
        "name": "DrivingId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 2
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
    "url": "/Employee Driving  -  AddNewDrivingLicense",
    "method": "addNewDrivingLicense",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Employee Driving",
    "typeScriptTag": "employeeDriving",
    "description": "Add New Driving License",
    "parameters": [
      {
        "name": "APIKey",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "5127e153-2c80-492b-a9e4-fb3e50af61a8"
      },
      {
        "name": "Action",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACTION"
      },
      {
        "name": "EmployeeId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PW180"
      },
      {
        "name": "LicenseNumber",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Li555"
      },
      {
        "name": "LicenseType",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "2 wheeler"
      },
      {
        "name": "ExpiryDate",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "2018-07-07"
      },
      {
        "name": "Comments",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Comments goes here"
      },
      {
        "name": "CustomColumns",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "AddFiles",
        "schema": "array",
        "required": false,
        "description": ""
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
    "url": "/Employee Driving  -  UpdateDrivingLicense",
    "method": "updateDrivingLicense",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Employee Driving",
    "typeScriptTag": "employeeDriving",
    "description": "Update Driving License",
    "parameters": [
      {
        "name": "APIKey",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "5127e153-2c80-492b-a9e4-fb3e50af61a8"
      },
      {
        "name": "Action",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACTION"
      },
      {
        "name": "EmployeeId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PW180"
      },
      {
        "name": "DrivingId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 2
      },
      {
        "name": "LicenseNumber",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Li555"
      },
      {
        "name": "LicenseType",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "2 wheeler"
      },
      {
        "name": "ExpiryDate",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "2018-07-07"
      },
      {
        "name": "Comments",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Comments goes here"
      },
      {
        "name": "CustomColumns",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "AddFiles",
        "schema": "array",
        "required": false,
        "description": ""
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
    "url": "/Employee Driving  -  DeleteDrivingLicense",
    "method": "removeDrivingLicense",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Employee Driving",
    "typeScriptTag": "employeeDriving",
    "description": "Delete Driving License",
    "parameters": [
      {
        "name": "APIKey",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "5127e153-2c80-492b-a9e4-fb3e50af61a8"
      },
      {
        "name": "Action",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACTION"
      },
      {
        "name": "EmployeeId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PW180"
      },
      {
        "name": "DrivingId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 2
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
    "url": "/Employee Qualification  -  GetQualificationByEmployeeId",
    "method": "getByEmployeeId",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Employee Qualification",
    "typeScriptTag": "employeeQualification",
    "description": "Get Qualification By EmployeeId",
    "parameters": [
      {
        "name": "APIKey",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "5127e153-2c80-492b-a9e4-fb3e50af61a8"
      },
      {
        "name": "Action",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACTION"
      },
      {
        "name": "EmployeeId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PW180"
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
    "url": "/Employee Qualification  -  GetQualificationByQualificationId",
    "method": "getByQualificationId",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Employee Qualification",
    "typeScriptTag": "employeeQualification",
    "description": "Get Qualification By QualificationId",
    "parameters": [
      {
        "name": "APIKey",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "5127e153-2c80-492b-a9e4-fb3e50af61a8"
      },
      {
        "name": "Action",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACTION"
      },
      {
        "name": "EmployeeId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PW180"
      },
      {
        "name": "QualificationId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 1
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
    "url": "/Employee Qualification  -  AddNewQualification",
    "method": "addNewQualification",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Employee Qualification",
    "typeScriptTag": "employeeQualification",
    "description": "Add New Qualification",
    "parameters": [
      {
        "name": "APIKey",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "5127e153-2c80-492b-a9e4-fb3e50af61a8"
      },
      {
        "name": "Action",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACTION"
      },
      {
        "name": "EmployeeId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PW180"
      },
      {
        "name": "Qualification",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "MSC"
      },
      {
        "name": "Subject",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Computer science"
      },
      {
        "name": "DatePassed",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "2017-05-01"
      },
      {
        "name": "ExpiryDate",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "2018-07-07"
      },
      {
        "name": "Comments",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Comments goes here"
      },
      {
        "name": "CustomColumns",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "AddFiles",
        "schema": "array",
        "required": false,
        "description": ""
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
    "url": "/Employee Qualification  -  UpdateQualification",
    "method": "updateQualification",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Employee Qualification",
    "typeScriptTag": "employeeQualification",
    "description": "Update Qualification",
    "parameters": [
      {
        "name": "APIKey",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "5127e153-2c80-492b-a9e4-fb3e50af61a8"
      },
      {
        "name": "Action",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACTION"
      },
      {
        "name": "EmployeeId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PW180"
      },
      {
        "name": "QualificationId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 1
      },
      {
        "name": "Qualification",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "MSC"
      },
      {
        "name": "Subject",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Computer science"
      },
      {
        "name": "DatePassed",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "2017-05-01"
      },
      {
        "name": "ExpiryDate",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "2018-07-07"
      },
      {
        "name": "Comments",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Comments goes here"
      },
      {
        "name": "CustomColumns",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "AddFiles",
        "schema": "array",
        "required": false,
        "description": ""
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
    "url": "/Employee Qualification  -  DeleteQualification",
    "method": "deleteQualification",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Employee Qualification",
    "typeScriptTag": "employeeQualification",
    "description": "Delete Qualification",
    "parameters": [
      {
        "name": "APIKey",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "5127e153-2c80-492b-a9e4-fb3e50af61a8"
      },
      {
        "name": "Action",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACTION"
      },
      {
        "name": "EmployeeId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PW180"
      },
      {
        "name": "QualificationId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 1
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
    "url": "/Employee Training  -  GetTrainingDetail",
    "method": "getDetail",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Employee Training",
    "typeScriptTag": "employeeTraining",
    "description": "Get Training Detail",
    "parameters": [
      {
        "name": "APIKey",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "5127e153-2c80-492b-a9e4-fb3e50af61a8"
      },
      {
        "name": "Action",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACTION"
      },
      {
        "name": "EmployeeId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PW180"
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
    "url": "/Employee Training  -  addtrainingdetail",
    "method": "addTrainingDetail",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Employee Training",
    "typeScriptTag": "employeeTraining",
    "description": "Add Training Detail",
    "parameters": [
      {
        "name": "APIKey",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "5127e153-2c80-492b-a9e4-fb3e50af61a8"
      },
      {
        "name": "Action",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACTION"
      },
      {
        "name": "EmployeeId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PW180"
      },
      {
        "name": "TrainingType",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Java"
      },
      {
        "name": "Description",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Description here"
      },
      {
        "name": "Importance",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 1
      },
      {
        "name": "Status",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 2
      },
      {
        "name": "InProgress",
        "schema": "byte",
        "required": false,
        "description": "",
        "example": "10"
      },
      {
        "name": "TrainingDate",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "2017-10-10"
      },
      {
        "name": "TrainindEndDate",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "2015-10-11"
      },
      {
        "name": "TrainingExpiryDate",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "2015-10-12"
      },
      {
        "name": "Cost",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "0.01"
      },
      {
        "name": "Provider",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "John"
      },
      {
        "name": "Notes",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "notes goes here"
      },
      {
        "name": "CustomColumns",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "AddFiles",
        "schema": "array",
        "required": false,
        "description": ""
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
    "url": "/Employee Training  -  updatetrainingdetail",
    "method": "updateTrainingDetail",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Employee Training",
    "typeScriptTag": "employeeTraining",
    "description": "Update Training Detail",
    "parameters": [
      {
        "name": "APIKey",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "5127e153-2c80-492b-a9e4-fb3e50af61a8"
      },
      {
        "name": "Action",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACTION"
      },
      {
        "name": "EmployeeId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PW180"
      },
      {
        "name": "TrainingType",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Java"
      },
      {
        "name": "Description",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Description here"
      },
      {
        "name": "Importance",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 1
      },
      {
        "name": "Status",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 2
      },
      {
        "name": "InProgress",
        "schema": "byte",
        "required": false,
        "description": "",
        "example": "10"
      },
      {
        "name": "TrainingDate",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "2017-10-10"
      },
      {
        "name": "TrainindEndDate",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "2015-10-11"
      },
      {
        "name": "TrainingExpiryDate",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "2015-10-12"
      },
      {
        "name": "Cost",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "0.01"
      },
      {
        "name": "Provider",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "John"
      },
      {
        "name": "Notes",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "notes goes here"
      },
      {
        "name": "CustomColumns",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "AddFiles",
        "schema": "array",
        "required": false,
        "description": ""
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
    "url": "/Employee Training  -  deletetrainingdetail",
    "method": "removeDetail",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Employee Training",
    "typeScriptTag": "employeeTraining",
    "description": "Delete Training Detail",
    "parameters": [
      {
        "name": "APIKey",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "5127e153-2c80-492b-a9e4-fb3e50af61a8"
      },
      {
        "name": "Action",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACTION"
      },
      {
        "name": "EmployeeId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PW180"
      },
      {
        "name": "TrainingId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 1
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
    "url": "/Employee Vehicle  -  AddNewVehicleDetail",
    "method": "createNewVehicleDetail",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Employee Vehicle",
    "typeScriptTag": "employeeVehicle",
    "description": "Add New Vehicle Detail",
    "parameters": [
      {
        "name": "APIKey",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "5127e153-2c80-492b-a9e4-fb3e50af61a8"
      },
      {
        "name": "Action",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACTION"
      },
      {
        "name": "EmployeeId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PW180"
      },
      {
        "name": "Registration",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "RG003"
      },
      {
        "name": "Make",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "ABC"
      },
      {
        "name": "Model",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "A123"
      },
      {
        "name": "Colour",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Black"
      },
      {
        "name": "EngineSize",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "A101"
      },
      {
        "name": "FuelType",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "DF001"
      },
      {
        "name": "InsuranceCompany",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "DF001"
      },
      {
        "name": "PolicyNumber",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "123456A"
      },
      {
        "name": "MOTExpiryDate",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "2017-01-01"
      },
      {
        "name": "InsuranceExpiryDate",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "2017-01-01"
      },
      {
        "name": "Comments",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Comments goes here"
      },
      {
        "name": "CustomColumns",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "AddFiles",
        "schema": "array",
        "required": false,
        "description": ""
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
    "url": "/Employee Vehicle  -  UpdateVehicleDetail",
    "method": "updateDetail",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Employee Vehicle",
    "typeScriptTag": "employeeVehicle",
    "description": "Update Vehicle Detail",
    "parameters": [
      {
        "name": "APIKey",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "5127e153-2c80-492b-a9e4-fb3e50af61a8"
      },
      {
        "name": "Action",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACTION"
      },
      {
        "name": "EmployeeId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PW180"
      },
      {
        "name": "Registration",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "RG003"
      },
      {
        "name": "Make",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "ABC"
      },
      {
        "name": "Model",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "A123"
      },
      {
        "name": "Colour",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Black"
      },
      {
        "name": "EngineSize",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "A101"
      },
      {
        "name": "FuelType",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "DF001"
      },
      {
        "name": "InsuranceCompany",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "DF001"
      },
      {
        "name": "PolicyNumber",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "123456A"
      },
      {
        "name": "MOTExpiryDate",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "2017-01-01"
      },
      {
        "name": "InsuranceExpiryDate",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "2017-01-01"
      },
      {
        "name": "Comments",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Comments goes here"
      },
      {
        "name": "CustomColumns",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "AddFiles",
        "schema": "array",
        "required": false,
        "description": ""
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
    "url": "/Employee Vehicle  -  DeleteVehicleDetail",
    "method": "deleteDetail",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Employee Vehicle",
    "typeScriptTag": "employeeVehicle",
    "description": "Delete Vehicle Detail",
    "parameters": [
      {
        "name": "APIKey",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "5127e153-2c80-492b-a9e4-fb3e50af61a8"
      },
      {
        "name": "Action",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACTION"
      },
      {
        "name": "EmployeeId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PW180"
      },
      {
        "name": "VehicleId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 123
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
    "url": "/Employee Vehicle  -  GetByVehicleDetailId",
    "method": "getByVehicleDetailId",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Employee Vehicle",
    "typeScriptTag": "employeeVehicle",
    "description": "Get By Vehicle Detail Id",
    "parameters": [
      {
        "name": "APIKey",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "5127e153-2c80-492b-a9e4-fb3e50af61a8"
      },
      {
        "name": "Action",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACTION"
      },
      {
        "name": "EmployeeId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PW180"
      },
      {
        "name": "VehicleId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 123
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
    "url": "/Employee Vehicle  -  GetVehicleByEmployeeId",
    "method": "getDetailByEmployeeId",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Employee Vehicle",
    "typeScriptTag": "employeeVehicle",
    "description": "Get Vehicle By Employee Id",
    "parameters": [
      {
        "name": "APIKey",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "5127e153-2c80-492b-a9e4-fb3e50af61a8"
      },
      {
        "name": "Action",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACTION"
      },
      {
        "name": "EmployeeId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PW180"
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
    "url": "/Employee Custom Screen  -  GetCustomScreenDetail",
    "method": "getDetail",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Employee Custom Screen",
    "typeScriptTag": "employeeCustomScreen",
    "description": "Get Custom Screen Detail",
    "parameters": [
      {
        "name": "APIKey",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "5127e153-2c80-492b-a9e4-fb3e50af61a8"
      },
      {
        "name": "Action",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACTION"
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
    "url": "/Employee Custom Screen  -  GetCustomScreenByEmployeeId",
    "method": "getScreenByEmployeeId",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Employee Custom Screen",
    "typeScriptTag": "employeeCustomScreen",
    "description": "Get Custom Screen By Employee Id",
    "parameters": [
      {
        "name": "APIKey",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "5127e153-2c80-492b-a9e4-fb3e50af61a8"
      },
      {
        "name": "Action",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACTION"
      },
      {
        "name": "ScreenId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 123
      },
      {
        "name": "EmployeeId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PW180"
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
    "url": "/Employee Custom Screen  -  GetByCustomScreenTransactionId",
    "method": "getByCustomScreenTransaction",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Employee Custom Screen",
    "typeScriptTag": "employeeCustomScreen",
    "description": "Get By Custom Screen Transaction Id",
    "parameters": [
      {
        "name": "APIKey",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "5127e153-2c80-492b-a9e4-fb3e50af61a8"
      },
      {
        "name": "Action",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACTION"
      },
      {
        "name": "EmployeeId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PW180"
      },
      {
        "name": "ScreenId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 123
      },
      {
        "name": "CustomScreenTransactionId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 12345
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
    "url": "/Employee Custom Screen  -  AddNewCustomScreenTransaction",
    "method": "addNewCustomScreenTransaction",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Employee Custom Screen",
    "typeScriptTag": "employeeCustomScreen",
    "description": "Add New Custom Screen Transaction",
    "parameters": [
      {
        "name": "APIKey",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "5127e153-2c80-492b-a9e4-fb3e50af61a8"
      },
      {
        "name": "Action",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACTION"
      },
      {
        "name": "EmployeeId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PW180"
      },
      {
        "name": "ScreenId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 123
      },
      {
        "name": "CustomColumns",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "AddFiles",
        "schema": "array",
        "required": true,
        "description": ""
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
    "url": "/Employee Custom Screen  -  UpdateCustomScreenTransaction",
    "method": "updateCustomScreenTransaction",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Employee Custom Screen",
    "typeScriptTag": "employeeCustomScreen",
    "description": "Update Custom Screen Transaction",
    "parameters": [
      {
        "name": "APIKey",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "5127e153-2c80-492b-a9e4-fb3e50af61a8"
      },
      {
        "name": "Action",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACTION"
      },
      {
        "name": "EmployeeId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PW180"
      },
      {
        "name": "ScreenId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 123
      },
      {
        "name": "CustomScreenTransactionId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 12345
      },
      {
        "name": "CustomColumns",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "AddFiles",
        "schema": "array",
        "required": true,
        "description": ""
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
    "url": "/Employee Custom Screen  -  DeleteCustomScreenTransaction",
    "method": "deleteCustomScreenTransaction",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Employee Custom Screen",
    "typeScriptTag": "employeeCustomScreen",
    "description": "Delete Custom Screen Transaction",
    "parameters": [
      {
        "name": "APIKey",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "5127e153-2c80-492b-a9e4-fb3e50af61a8"
      },
      {
        "name": "Action",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACTION"
      },
      {
        "name": "EmployeeId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PW180"
      },
      {
        "name": "ScreenId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 123
      },
      {
        "name": "CustomScreenTransactionId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 12345
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
    "url": "/Holiday Entitlement  -  GetHolidayEntitlement",
    "method": "getHolidayEntitlement",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Holiday Entitlement",
    "typeScriptTag": "holidayEntitlement",
    "description": "Get Holiday Entitlement",
    "parameters": [
      {
        "name": "APIKey",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "5127e153-2c80-492b-a9e4-fb3e50af61a8"
      },
      {
        "name": "Action",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACTION"
      },
      {
        "name": "EmployeeId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PW180"
      },
      {
        "name": "StartDate",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "2016-07-27"
      },
      {
        "name": "EndDate",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "2017-07-27"
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
    "url": "/Holiday Entitlement  -  GetNextYearHolidayEntitlement",
    "method": "getNextYearEntitlement",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Holiday Entitlement",
    "typeScriptTag": "holidayEntitlement",
    "description": "Get Next Year Holiday Entitlement",
    "parameters": [
      {
        "name": "APIKey",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "5127e153-2c80-492b-a9e4-fb3e50af61a8"
      },
      {
        "name": "Action",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACTION"
      },
      {
        "name": "EmployeeId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PW180"
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
    "url": "/Holiday Entitlement  -  UpdateHolidayEntitlement",
    "method": "updateHolidayEntitlement",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Holiday Entitlement",
    "typeScriptTag": "holidayEntitlement",
    "description": "Update Holiday Entitlement",
    "parameters": [
      {
        "name": "APIKey",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "5127e153-2c80-492b-a9e4-fb3e50af61a8"
      },
      {
        "name": "Action",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACTION"
      },
      {
        "name": "EmployeeId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PW180"
      },
      {
        "name": "EntitlementThisYear",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "12.50"
      },
      {
        "name": "ReasonForChange",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Reason for change"
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
    "url": "/Holiday Entitlement  -  UpdateNextYearHolidayEntitlement",
    "method": "updateNextYearEntitlement",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Holiday Entitlement",
    "typeScriptTag": "holidayEntitlement",
    "description": "Update Next Year Holiday Entitlement",
    "parameters": [
      {
        "name": "APIKey",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "5127e153-2c80-492b-a9e4-fb3e50af61a8"
      },
      {
        "name": "Action",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACTION"
      },
      {
        "name": "EmployeeId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PW180"
      },
      {
        "name": "EntitlementNextYear",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "0"
      },
      {
        "name": "ReasonForChange",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Reason for change"
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
    "url": "/History  -  GetHistoryByEmployeeIdAndFieldName",
    "method": "getByEmployeeIdAndFieldName",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "History",
    "typeScriptTag": "history",
    "description": "Get History By EmployeeId And FieldName",
    "parameters": [
      {
        "name": "APIKey",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "5127e153-2c80-492b-a9e4-fb3e50af61a8"
      },
      {
        "name": "Action",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACTION"
      },
      {
        "name": "EmployeeId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PW180"
      },
      {
        "name": "FieldName",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EMPLOYEE_PERSONAL_FIRST_NAME"
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
    "url": "/Query  -  GetQueryResult",
    "method": "getResultByQueryId",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Query",
    "typeScriptTag": "query",
    "description": "Get Query Result by Query Id",
    "parameters": [
      {
        "name": "APIKey",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "5127e153-2c80-492b-a9e4-fb3e50af61a8"
      },
      {
        "name": "Action",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACTION"
      },
      {
        "name": "QueryName",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Absence"
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
    "url": "/Query  -  GetQueryResultByQueryName",
    "method": "getByQueryName",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Query",
    "typeScriptTag": "query",
    "description": "Get Query Result By QueryName",
    "parameters": [
      {
        "name": "APIKey",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "5127e153-2c80-492b-a9e4-fb3e50af61a8"
      },
      {
        "name": "Action",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACTION"
      },
      {
        "name": "QueryName",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Absence"
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
    "url": "/Email Transaction  -  EmailInbox",
    "method": "submitEmailInbox",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Email Transaction",
    "typeScriptTag": "emailTransaction",
    "description": "Email Inbox",
    "parameters": [
      {
        "name": "Action",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACTION"
      },
      {
        "name": "EmailFrom",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "rajendra.petave@itgurussoftware.com"
      },
      {
        "name": "EmailTo",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "EmailCc",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "EmailBcc",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "EmailSubject",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "[Recipient email address] Email Subject"
      },
      {
        "name": "Attachment",
        "schema": "array",
        "required": false,
        "description": ""
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
    "url": "/Right To Work  -  addrighttoworkdetail",
    "method": "addDetail",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Right To Work",
    "typeScriptTag": "rightToWork",
    "description": "Add Right To Work Detail",
    "parameters": [
      {
        "name": "APIKey",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "5127e153-2c80-492b-a9e4-fb3e50af61a8"
      },
      {
        "name": "Action",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACTION"
      },
      {
        "name": "EmployeeId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PW180"
      },
      {
        "name": "DocumentType",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Insurance Period"
      },
      {
        "name": "DocumentId",
        "schema": "long integer",
        "required": false,
        "description": "",
        "example": "1"
      },
      {
        "name": "ValidFrom",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "2014-04-01"
      },
      {
        "name": "ValidTo",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "2014-04-01"
      },
      {
        "name": "Duration",
        "schema": "integer",
        "required": false,
        "description": "",
        "example": 1
      },
      {
        "name": "DocumentName",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Abc.txt"
      },
      {
        "name": "File",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Pass base64 string"
      },
      {
        "name": "Comments",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Comments goes here"
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
    "url": "/Right To Work  -  getrighttoworkdetail",
    "method": "getDetail",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Right To Work",
    "typeScriptTag": "rightToWork",
    "description": "Get Right To Work Detail",
    "parameters": [
      {
        "name": "APIKey",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "5127e153-2c80-492b-a9e4-fb3e50af61a8"
      },
      {
        "name": "Action",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACTION"
      },
      {
        "name": "EmployeeId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PW180"
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
    "url": "/Right To Work  -  updaterighttoworkdetail",
    "method": "updateDetail",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Right To Work",
    "typeScriptTag": "rightToWork",
    "description": "Update Right To Work Detail",
    "parameters": [
      {
        "name": "APIKey",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "5127e153-2c80-492b-a9e4-fb3e50af61a8"
      },
      {
        "name": "Action",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACTION"
      },
      {
        "name": "EmployeeId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PW180"
      },
      {
        "name": "RightToWorkTxnId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 215
      },
      {
        "name": "DocumentType",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Insurance Period"
      },
      {
        "name": "DocumentId",
        "schema": "long integer",
        "required": false,
        "description": "",
        "example": "1"
      },
      {
        "name": "ValidFrom",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "2014-04-01"
      },
      {
        "name": "ValidTo",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "2014-04-01"
      },
      {
        "name": "Duration",
        "schema": "integer",
        "required": false,
        "description": "",
        "example": 1
      },
      {
        "name": "DocumentName",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Abc.txt"
      },
      {
        "name": "File",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Pass base64 string"
      },
      {
        "name": "Comments",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Comments goes here"
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
    "url": "/Right To Work  -  deleterighttoworkdetail",
    "method": "deleteDetail",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Right To Work",
    "typeScriptTag": "rightToWork",
    "description": "Delete Right To Work Detail",
    "parameters": [
      {
        "name": "APIKey",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "5127e153-2c80-492b-a9e4-fb3e50af61a8"
      },
      {
        "name": "Action",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACTION"
      },
      {
        "name": "EmployeeId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PW180"
      },
      {
        "name": "RightToWorkTxnId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 215
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
    "url": "/Background Check  -  GetBackgroundCheckDetailByEmployeeId",
    "method": "getDetailByEmployeeId",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Background Check",
    "typeScriptTag": "backgroundCheck",
    "description": "Get Background Check Detail By EmployeeId",
    "parameters": [
      {
        "name": "APIKey",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "5127e153-2c80-492b-a9e4-fb3e50af61a8"
      },
      {
        "name": "Action",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACTION"
      },
      {
        "name": "EmployeeId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PW180"
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
    "url": "/Background Check  -  AddBackgroundCheckDetail",
    "method": "addDetail",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Background Check",
    "typeScriptTag": "backgroundCheck",
    "description": "Add Background Check Detail",
    "parameters": [
      {
        "name": "APIKey",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "5127e153-2c80-492b-a9e4-fb3e50af61a8"
      },
      {
        "name": "Action",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACTION"
      },
      {
        "name": "EmployeeId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PW180"
      },
      {
        "name": "TypeOfCheck",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DBS Enhanced"
      },
      {
        "name": "DateCompleted",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "2016-04-15"
      },
      {
        "name": "ExpiryDate",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "2018-07-07"
      },
      {
        "name": "DocumentName",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Abc.txt"
      },
      {
        "name": "File",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Pass base64 string"
      },
      {
        "name": "Comments",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Comments goes here"
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
    "url": "/Background Check  -  UpdateBackgroundCheckDetail",
    "method": "updateDetail",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Background Check",
    "typeScriptTag": "backgroundCheck",
    "description": "Update Background Check Detail",
    "parameters": [
      {
        "name": "APIKey",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "5127e153-2c80-492b-a9e4-fb3e50af61a8"
      },
      {
        "name": "Action",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACTION"
      },
      {
        "name": "EmployeeId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PW180"
      },
      {
        "name": "BackgroundCheckTxnId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 1
      },
      {
        "name": "TypeOfCheck",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DBS Enhanced"
      },
      {
        "name": "DateCompleted",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "2016-04-15"
      },
      {
        "name": "ExpiryDate",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "2018-07-07"
      },
      {
        "name": "DocumentName",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Abc.txt"
      },
      {
        "name": "File",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Pass base64 string"
      },
      {
        "name": "Comments",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Comments goes here"
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
    "url": "/Background Check  -  DeleteBackgroundCheckDetail",
    "method": "deleteDetail",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Background Check",
    "typeScriptTag": "backgroundCheck",
    "description": "Delete Background Check Detail",
    "parameters": [
      {
        "name": "APIKey",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "5127e153-2c80-492b-a9e4-fb3e50af61a8"
      },
      {
        "name": "Action",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACTION"
      },
      {
        "name": "EmployeeId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PW180"
      },
      {
        "name": "BackgroundCheckTxnId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 1
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
    "url": "/Other Event  -  getothereventdetail",
    "method": "getDetail",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Other Event",
    "typeScriptTag": "otherEvent",
    "description": "Get Other Event Detail",
    "parameters": [
      {
        "name": "APIKey",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "5127e153-2c80-492b-a9e4-fb3e50af61a8"
      },
      {
        "name": "Action",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACTION"
      },
      {
        "name": "EmployeeId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PW180"
      },
      {
        "name": "StartDate",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "2016-07-27"
      },
      {
        "name": "EndDate",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "2017-07-27"
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
    "url": "/Other Event  -  getotherevententitlement",
    "method": "getEntitlement",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Other Event",
    "typeScriptTag": "otherEvent",
    "description": " Get Other Event Entitlement",
    "parameters": [
      {
        "name": "APIKey",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "5127e153-2c80-492b-a9e4-fb3e50af61a8"
      },
      {
        "name": "Action",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACTION"
      },
      {
        "name": "EmployeeId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PW180"
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
    "url": "/Other Event  -  DeleteOtherEvent",
    "method": "deleteEvent",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Other Event",
    "typeScriptTag": "otherEvent",
    "description": "Delete Other Event",
    "parameters": [
      {
        "name": "APIKey",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "5127e153-2c80-492b-a9e4-fb3e50af61a8"
      },
      {
        "name": "Action",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACTION"
      },
      {
        "name": "EmployeeId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PW180"
      },
      {
        "name": "OtherLeaveTxnId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 1
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
    "url": "/Other Event  -  addothereventleave",
    "method": "createEventLeave",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Other Event",
    "typeScriptTag": "otherEvent",
    "description": "Add Other Event",
    "parameters": [
      {
        "name": "APIKey",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "5127e153-2c80-492b-a9e4-fb3e50af61a8"
      },
      {
        "name": "Action",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACTION"
      },
      {
        "name": "EmployeeId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PW180"
      },
      {
        "name": "DurationType",
        "schema": "byte",
        "required": true,
        "description": "",
        "example": "1"
      },
      {
        "name": "Other Event Reason",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Jury Duty"
      },
      {
        "name": "StartDate",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "2016-07-27"
      },
      {
        "name": "EndDate",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "2017-07-27"
      },
      {
        "name": "StartTime",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "02:00"
      },
      {
        "name": "EndTime",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "04:00"
      },
      {
        "name": "DurationInDays",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 1
      },
      {
        "name": "Comments",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Comments goes here"
      },
      {
        "name": "AddFiles",
        "schema": "array",
        "required": false,
        "description": ""
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
    "url": "/Other Event  -  updateothereventleave",
    "method": "updateEventLeave",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Other Event",
    "typeScriptTag": "otherEvent",
    "description": "Update Other Event",
    "parameters": [
      {
        "name": "APIKey",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "5127e153-2c80-492b-a9e4-fb3e50af61a8"
      },
      {
        "name": "Action",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACTION"
      },
      {
        "name": "EmployeeId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PW180"
      },
      {
        "name": "OtherEventTxnId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 1
      },
      {
        "name": "DurationType",
        "schema": "byte",
        "required": true,
        "description": "",
        "example": "1"
      },
      {
        "name": "Other Event Reason",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Jury Duty"
      },
      {
        "name": "StartDate",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "2016-07-27"
      },
      {
        "name": "EndDate",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "2017-07-27"
      },
      {
        "name": "StartTime",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "02:00"
      },
      {
        "name": "EndTime",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "04:00"
      },
      {
        "name": "DurationInDays",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 1
      },
      {
        "name": "Comments",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Comments goes here"
      },
      {
        "name": "AddFiles",
        "schema": "array",
        "required": false,
        "description": ""
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
    "url": "/Other Event  -  addotherevententitlement",
    "method": "insertUpdateEntitlement",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Other Event",
    "typeScriptTag": "otherEvent",
    "description": "Insert Update Other Event Entitlement",
    "parameters": [
      {
        "name": "APIKey",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "5127e153-2c80-492b-a9e4-fb3e50af61a8"
      },
      {
        "name": "Action",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACTION"
      },
      {
        "name": "EmployeeId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PW180"
      },
      {
        "name": "Other Event Reason",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Jury Duty"
      },
      {
        "name": "Entitlement RecordedIn",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 1
      },
      {
        "name": "ThisYearEntitlement",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "NextYearEntitlement",
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
      }
    ]
  },
  {
    "url": "/Vacancy  -  CreateNewVacancy",
    "method": "addNewVacancy",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Vacancy",
    "typeScriptTag": "vacancy",
    "description": "Create New Vacancy",
    "parameters": [
      {
        "name": "APIKey",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "5127e153-2c80-492b-a9e4-fb3e50af61a8"
      },
      {
        "name": "Action",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACTION"
      },
      {
        "name": "VacancyName",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "IT Programmer"
      },
      {
        "name": "VacancyDescription",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "IT Programmer"
      },
      {
        "name": "Company",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Company name"
      },
      {
        "name": "Location",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Mumbai"
      },
      {
        "name": "Department",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "IT"
      },
      {
        "name": "ClosingDate",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "2016-07-31"
      },
      {
        "name": "Reference",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "VA4"
      },
      {
        "name": "Comment",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Comment"
      },
      {
        "name": "SalaryRange",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "10000"
      },
      {
        "name": "JobDescription",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Job Description"
      },
      {
        "name": "IsCoverLetterMandatory",
        "schema": "string",
        "required": true,
        "description": "",
        "example": false
      },
      {
        "name": "IsResumeMandatory",
        "schema": "string",
        "required": true,
        "description": "",
        "example": false
      },
      {
        "name": "IsHideSalary",
        "schema": "string",
        "required": true,
        "description": "",
        "example": false
      },
      {
        "name": "VacancyType",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Internal"
      },
      {
        "name": "JobTitle",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Software Engineer"
      },
      {
        "name": "City",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Mumbai"
      },
      {
        "name": "Country",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "India"
      },
      {
        "name": "Experience",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "4 Year"
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
    "url": "/Vacancy  -  GetVacancy",
    "method": "getDetail",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Vacancy",
    "typeScriptTag": "vacancy",
    "description": "Get vacancy",
    "parameters": [
      {
        "name": "APIKey",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "5127e153-2c80-492b-a9e4-fb3e50af61a8"
      },
      {
        "name": "Action",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACTION"
      },
      {
        "name": "VacancyReference",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "VA4"
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
    "url": "/Vacancy  -  GetAllVacancies",
    "method": "getAllVacancies",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Vacancy",
    "typeScriptTag": "vacancy",
    "description": "Get all vacancies",
    "parameters": [
      {
        "name": "APIKey",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "5127e153-2c80-492b-a9e4-fb3e50af61a8"
      },
      {
        "name": "Action",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACTION"
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
    "url": "/Applicant  -  CreateNewApplicant",
    "method": "createNewApplicant",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Applicant",
    "typeScriptTag": "applicant",
    "description": "Create New Applicant",
    "parameters": [
      {
        "name": "APIKey",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "5127e153-2c80-492b-a9e4-fb3e50af61a8"
      },
      {
        "name": "Action",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACTION"
      },
      {
        "name": "VacancyReference",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "VA4"
      },
      {
        "name": "FirstName",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Ranjit"
      },
      {
        "name": "LastName",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Johnson"
      },
      {
        "name": "Email",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "vaibhavid@itgurussoftware.com"
      },
      {
        "name": "Gender",
        "schema": "string",
        "required": false,
        "description": "",
        "example": true
      },
      {
        "name": "DateOfBirth",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "1999-01-02"
      },
      {
        "name": "PostCode",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "413608"
      },
      {
        "name": "Address",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Shiv Colony, Thergaon - Pune"
      },
      {
        "name": "PhoneNumber",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "8899556885"
      },
      {
        "name": "OtherContactDetails",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "8899556885"
      },
      {
        "name": "Source",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Facebook"
      },
      {
        "name": "AdditionalQuestions",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "InternalQuestions",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "Documents",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "Skills",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "C#, Asp.net, JQuery"
      },
      {
        "name": "RecruitmentCost",
        "schema": "integer",
        "required": false,
        "description": "",
        "example": 50
      },
      {
        "name": "DateLastContacted",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "2016-01-13"
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
    "url": "/Applicant  -  uploadapplicantdocument",
    "method": "uploadDocument",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Applicant",
    "typeScriptTag": "applicant",
    "description": "upload applicant document",
    "parameters": [
      {
        "name": "APIKey",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "5127e153-2c80-492b-a9e4-fb3e50af61a8"
      },
      {
        "name": "Action",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACTION"
      },
      {
        "name": "ApplicantId",
        "schema": "bigint",
        "required": true,
        "description": "",
        "example": "90"
      },
      {
        "name": "DocumentName",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Abc.txt"
      },
      {
        "name": "Description",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Description here"
      },
      {
        "name": "File",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Pass base64 string"
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
    "url": "/Applicant  -  CheckDuplicateApplicant",
    "method": "checkDuplicateApplicant",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Applicant",
    "typeScriptTag": "applicant",
    "description": "Check duplicate applicant",
    "parameters": [
      {
        "name": "APIKey",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "5127e153-2c80-492b-a9e4-fb3e50af61a8"
      },
      {
        "name": "Action",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACTION"
      },
      {
        "name": "VacancyReference",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "VA4"
      },
      {
        "name": "FirstName",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Ranjit"
      },
      {
        "name": "LastName",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Johnson"
      },
      {
        "name": "Email",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "vaibhavid@itgurussoftware.com"
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
    "url": "/WorkPattern  -  GetWorkPatternDetail",
    "method": "getWorkDetail",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "WorkPattern",
    "typeScriptTag": "workPattern",
    "description": "Get work pattern detail",
    "parameters": [
      {
        "name": "APIKey",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "5127e153-2c80-492b-a9e4-fb3e50af61a8"
      },
      {
        "name": "Action",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACTION"
      },
      {
        "name": "WorkPatternId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 2
      },
      {
        "name": "WorkPatternName",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "xyz"
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
    "url": "/Employeee Late  -  GetLateByEmployeeId",
    "method": "getByEmployeeId",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Employeee Late",
    "typeScriptTag": "employeeeLate",
    "description": "Get late by employeeId",
    "parameters": [
      {
        "name": "APIKey",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "5127e153-2c80-492b-a9e4-fb3e50af61a8"
      },
      {
        "name": "Action",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACTION"
      },
      {
        "name": "EmployeeId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PW180"
      },
      {
        "name": "StartDate",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "2016-07-27"
      },
      {
        "name": "EndDate",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "2017-07-27"
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
    "url": "/Employeee Late  -  AddNewLate",
    "method": "createNewLate",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Employeee Late",
    "typeScriptTag": "employeeeLate",
    "description": "Add new late",
    "parameters": [
      {
        "name": "APIKey",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "5127e153-2c80-492b-a9e4-fb3e50af61a8"
      },
      {
        "name": "Action",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACTION"
      },
      {
        "name": "EmployeeId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PW180"
      },
      {
        "name": "LateDate",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "2017-07-18"
      },
      {
        "name": "HowLate",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 10
      },
      {
        "name": "Comments",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Comments goes here"
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
    "url": "/Employeee Late  -  UpdateLate",
    "method": "updateLate",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Employeee Late",
    "typeScriptTag": "employeeeLate",
    "description": "Update Late",
    "parameters": [
      {
        "name": "APIKey",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "5127e153-2c80-492b-a9e4-fb3e50af61a8"
      },
      {
        "name": "Action",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACTION"
      },
      {
        "name": "EmployeeId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PW180"
      },
      {
        "name": "LateDate",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "2017-07-18"
      },
      {
        "name": "HowLate",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 10
      },
      {
        "name": "Comments",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Comments goes here"
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
    "url": "/Employeee Late  -  DeleteLate",
    "method": "deleteLate",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Employeee Late",
    "typeScriptTag": "employeeeLate",
    "description": "Delete Late",
    "parameters": [
      {
        "name": "APIKey",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "5127e153-2c80-492b-a9e4-fb3e50af61a8"
      },
      {
        "name": "Action",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACTION"
      },
      {
        "name": "EmployeeId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PW180"
      },
      {
        "name": "LateDate",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "2017-07-18"
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
    "url": "/Maternity Paternity  -  GetByMaternityPaternityId",
    "method": "getDetailsByMatPatId",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Maternity Paternity ",
    "typeScriptTag": "maternityPaternity",
    "description": " Get by maternity paternity id ",
    "parameters": [
      {
        "name": "APIKey",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "5127e153-2c80-492b-a9e4-fb3e50af61a8"
      },
      {
        "name": "Action",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACTION"
      },
      {
        "name": "EmployeeId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PW180"
      },
      {
        "name": "MaternityPaternityTxnId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 339
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
    "url": "/Maternity Paternity  -  GetMaternityPaternityByEmployeeId",
    "method": "getByEmployeeId",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Maternity Paternity ",
    "typeScriptTag": "maternityPaternity",
    "description": " Get maternity paternity by employeeid ",
    "parameters": [
      {
        "name": "APIKey",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "5127e153-2c80-492b-a9e4-fb3e50af61a8"
      },
      {
        "name": "Action",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACTION"
      },
      {
        "name": "EmployeeId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PW180"
      },
      {
        "name": "ActualStartDate",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "2017-05-20"
      },
      {
        "name": "ActualEndDate",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "2017-05-21"
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
    "url": "/Maternity Paternity  -  AddNewMaternityPaternity",
    "method": "addNewDetails",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Maternity Paternity ",
    "typeScriptTag": "maternityPaternity",
    "description": " Add New Maternity Paternity ",
    "parameters": [
      {
        "name": "APIKey",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "5127e153-2c80-492b-a9e4-fb3e50af61a8"
      },
      {
        "name": "Action",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACTION"
      },
      {
        "name": "EmployeeId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PW180"
      },
      {
        "name": "DueDate",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "2017-05-20"
      },
      {
        "name": "ActualStartDate",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "2017-05-20"
      },
      {
        "name": "ActualEndDate",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "2017-05-21"
      },
      {
        "name": "AddComments",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "AddFiles",
        "schema": "array",
        "required": true,
        "description": ""
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
    "url": "/Maternity Paternity  -  UpdateMaternityPaternity",
    "method": "updateDetails",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Maternity Paternity ",
    "typeScriptTag": "maternityPaternity",
    "description": "Update Maternity Paternity ",
    "parameters": [
      {
        "name": "APIKey",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "5127e153-2c80-492b-a9e4-fb3e50af61a8"
      },
      {
        "name": "Action",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACTION"
      },
      {
        "name": "EmployeeId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PW180"
      },
      {
        "name": "MaternityPaternityTxnId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 339
      },
      {
        "name": "DueDate",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "2017-05-20"
      },
      {
        "name": "ActualStartDate",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "2017-05-20"
      },
      {
        "name": "ActualEndDate",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "2017-05-21"
      },
      {
        "name": "AddComments",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "AddFiles",
        "schema": "array",
        "required": true,
        "description": ""
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
    "url": "/Maternity Paternity  -  DeleteMaternityPaternity",
    "method": "deleteDetails",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Maternity Paternity ",
    "typeScriptTag": "maternityPaternity",
    "description": "Delete Maternity Paternity ",
    "parameters": [
      {
        "name": "APIKey",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "5127e153-2c80-492b-a9e4-fb3e50af61a8"
      },
      {
        "name": "Action",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACTION"
      },
      {
        "name": "EmployeeId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PW180"
      },
      {
        "name": "MaternityPaternityTxnId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 339
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
      apiTitle="PeopleHR API"
      apiBaseUrl="https://api.peoplehr.net/"
      apiVersion="3.1"
      endpoints={118}
      sdkMethods={118}
      schemas={685}
      parameters={899}
      difficulty="Very Hard"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/peoplehr/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/peoplehr/openapi.yaml"
      developerDocumentation="apidocs.peoplehr.com"
    />
  );
}
  