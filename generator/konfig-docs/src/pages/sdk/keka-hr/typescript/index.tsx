import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function KekaHrTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="keka-hr-typescript-sdk"
      metaDescription={`Here's our story,

It all began with the frustration of using software that sucks. Prior to starting Keka, our core team was a 100 person business that needed an easy to use software for managing employees. We looked everywhere and all we found were software that was lousy and hard to use. We felt SME businesses in India deserved something better. Something awesome actually!

Thus emerged Keka!`}
      company="Keka HR"
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/keka-hr/logo.png"
      companyKebabCase="keka-hr"
      clientNameCamelCase="kekaHr"
      homepage="keka.com"
      lastUpdated={new Date("2024-03-27T01:23:25.425Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/keka-hr/favicon.png"
      // Missing contactUrl
      // Missing contactEmail
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/keka-hr/imagePreview.png"
      GettingStarted={GettingStarted}
      FirstRequest={FirstRequest}
      categories={["hr","human_resources","human_resource_management_system","payroll_management_system","leave_management_system","attendance_management_system","talent_management_system","human_resource_automation","expense_management_system","remote_workforce_management_system","timesheet_management_system","workforce_management"]}
      methods={[
  {
    "url": "/connect/token",
    "method": "getAccessToken",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Authentication",
    "typeScriptTag": "authentication",
    "description": "Generate Access Token",
    "parameters": [
      {
        "name": "grant_type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "GRANT_TYPE",
        "default": "kekaapi"
      },
      {
        "name": "scope",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SCOPE",
        "default": "kekaapi"
      },
      {
        "name": "client_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CLIENT_ID"
      },
      {
        "name": "client_secret",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CLIENT_SECRET"
      },
      {
        "name": "api_key",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "API_KEY"
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
    "url": "/hris/employees",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Employees",
    "typeScriptTag": "employees",
    "description": "Get all Employees",
    "parameters": [
      {
        "name": "employeeIds",
        "schema": "string",
        "description": "Comma separated list of one or more Employee ids you'd like to filter on."
      },
      {
        "name": "employeeNumbers",
        "schema": "string",
        "description": "Comma separated list of one or more Employee numbers you'd like to filter on."
      },
      {
        "name": "employmentStatus",
        "schema": "string",
        "description": "Comma separated list of one or more Employment Status you'd like to filter on, allowed values are Working, Relieved."
      },
      {
        "name": "inProbation",
        "schema": "boolean",
        "description": "Fetches employees who are in probation. The allowed value is true or false.",
        "default": false
      },
      {
        "name": "inNoticePeriod",
        "schema": "boolean",
        "description": "Fetches employees who are in notice period. The allowed value is true or false.",
        "default": false
      },
      {
        "name": "lastModified",
        "schema": "string",
        "description": "Date/time when this time off request was last modified, in ISO 8601 format (YYYY-MM-DDThh:mm:ss±hh:mm)."
      },
      {
        "name": "pageNumber",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "description": "Represents how many results you'd like to retrieve per request (page). Default is 100. Max is 200"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "class represents paged response."
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      }
    ]
  },
  {
    "url": "/hris/employees",
    "method": "createEmployee",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Employees",
    "typeScriptTag": "employees",
    "description": "Create an Employee",
    "parameters": [
      {
        "name": "employeeNumber",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "displayName",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DISPLAYNAME"
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
        "name": "lastName",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "LASTNAME"
      },
      {
        "name": "email",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EMAIL"
      },
      {
        "name": "mobileNumber",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "gender",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "dateOfBirth",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DATEOFBIRTH"
      },
      {
        "name": "dateJoined",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DATEJOINED"
      },
      {
        "name": "department",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DEPARTMENT"
      },
      {
        "name": "businessUnit",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "BUSINESSUNIT"
      },
      {
        "name": "jobTitle",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "JOBTITLE"
      },
      {
        "name": "secondaryJobTitle",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "location",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "LOCATION"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "class represents response."
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      }
    ]
  },
  {
    "url": "/hris/employees/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Employees",
    "typeScriptTag": "employees",
    "description": "Get an Employee",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The identifier.",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "class represents response."
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "404",
        "description": "class represents response."
      }
    ]
  },
  {
    "url": "/hris/employees/{id}/personaldetails",
    "method": "updatePersonalDetails",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Employees",
    "typeScriptTag": "employees",
    "description": "Update Employee personal details",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The identifier.",
        "example": "ID"
      },
      {
        "name": "displayName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "firstName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "middleName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lastName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "gender",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "dateOfBirth",
        "schema": "string",
        "description": ""
      },
      {
        "name": "workPhone",
        "schema": "string",
        "description": ""
      },
      {
        "name": "homePhone",
        "schema": "string",
        "description": ""
      },
      {
        "name": "personalEmail",
        "schema": "string",
        "description": ""
      },
      {
        "name": "skypeId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "maritalStatus",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "marriageDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "relations",
        "schema": "array",
        "description": ""
      },
      {
        "name": "bloodGroup",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "currentAddress",
        "schema": "object",
        "description": ""
      },
      {
        "name": "permanentAddress",
        "schema": "object",
        "description": ""
      },
      {
        "name": "professionalSummary",
        "schema": "string",
        "description": ""
      },
      {
        "name": "customFields",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "class represents response."
      },
      {
        "statusCode": "400",
        "description": "class represents response."
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      }
    ]
  },
  {
    "url": "/hris/employees/{id}/jobdetails",
    "method": "updateJobDetails",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Employees",
    "typeScriptTag": "employees",
    "description": "Update employee job details",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The identifier.",
        "example": "ID"
      },
      {
        "name": "employeeNumber",
        "schema": "string",
        "description": ""
      },
      {
        "name": "location",
        "schema": "string",
        "description": ""
      },
      {
        "name": "businessUnit",
        "schema": "string",
        "description": ""
      },
      {
        "name": "department",
        "schema": "string",
        "description": ""
      },
      {
        "name": "jobTitle",
        "schema": "string",
        "description": ""
      },
      {
        "name": "reportingManager",
        "schema": "string",
        "description": ""
      },
      {
        "name": "attendanceNumber",
        "schema": "string",
        "description": ""
      },
      {
        "name": "timeType",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "attendanceCaptureScheme",
        "schema": "string",
        "description": ""
      },
      {
        "name": "expensePolicy",
        "schema": "string",
        "description": ""
      },
      {
        "name": "noticePeriod",
        "schema": "string",
        "description": ""
      },
      {
        "name": "holidayList",
        "schema": "string",
        "description": ""
      },
      {
        "name": "costCenter",
        "schema": "string",
        "description": ""
      },
      {
        "name": "payBand",
        "schema": "string",
        "description": ""
      },
      {
        "name": "payGrade",
        "schema": "string",
        "description": ""
      },
      {
        "name": "customFields",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "class represents response."
      },
      {
        "statusCode": "400",
        "description": "class represents response."
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      }
    ]
  },
  {
    "url": "/hris/employees/updatefields",
    "method": "getAllUpdateFields",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Employees",
    "typeScriptTag": "employees",
    "description": "Get all update fields",
    "parameters": [
      {
        "name": "pageNumber",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "description": "Represents how many results you'd like to retrieve per request (page). Default is 100. Max is 200"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "class represents response."
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      }
    ]
  },
  {
    "url": "/hris/groups",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Groups",
    "typeScriptTag": "groups",
    "description": "Get all Groups",
    "parameters": [
      {
        "name": "groupTypeIds",
        "schema": "string",
        "description": "Comma separated list of one or more Group Type Ids you’d like to filter on."
      },
      {
        "name": "systemGroupTypes",
        "schema": "string",
        "description": "Comma separated list of one or more System Group Type you’d like to filter on."
      },
      {
        "name": "lastModified",
        "schema": "string",
        "description": "The Last Modified."
      },
      {
        "name": "pageNumber",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "description": "Represents how many results you'd like to retrieve per request (page). Default is 100. Max is 200"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "class represents paged response."
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      }
    ]
  },
  {
    "url": "/hris/grouptypes",
    "method": "getAllGroupTypes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Groups",
    "typeScriptTag": "groups",
    "description": "Get all Group Types",
    "parameters": [
      {
        "name": "pageNumber",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "description": "Represents how many results you'd like to retrieve per request (page). Default is 100. Max is 200"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "class represents paged response."
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      }
    ]
  },
  {
    "url": "/hris/departments",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Departments",
    "typeScriptTag": "departments",
    "description": "Get all departments",
    "parameters": [
      {
        "name": "departmentIds",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lastModified",
        "schema": "string",
        "description": "The Last Modified Date."
      },
      {
        "name": "pageNumber",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "description": "Represents how many results you'd like to retrieve per request (page). Default is 100. Max is 200"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "class represents paged response."
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      }
    ]
  },
  {
    "url": "/hris/locations",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Locations",
    "typeScriptTag": "locations",
    "description": "Get all Locations",
    "parameters": [
      {
        "name": "lastModified",
        "schema": "string",
        "description": "The Last Modified."
      },
      {
        "name": "pageNumber",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "description": "Represents how many results you'd like to retrieve per request (page). Default is 100. Max is 200"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "class represents paged response."
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      }
    ]
  },
  {
    "url": "/hris/jobtitles",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "JobTitle",
    "typeScriptTag": "jobTitle",
    "description": "Get all jobtitles",
    "parameters": [
      {
        "name": "lastModified",
        "schema": "string",
        "description": "The Last Modified."
      },
      {
        "name": "pageNumber",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "description": "Represents how many results you'd like to retrieve per request (page). Default is 100. Max is 200"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "class represents paged response."
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      }
    ]
  },
  {
    "url": "/hris/currencies",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Currency",
    "typeScriptTag": "currency",
    "description": "Get all currencies",
    "parameters": [
      {
        "name": "pageNumber",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "description": "Represents how many results you'd like to retrieve per request (page). Default is 100. Max is 200"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "class represents paged response."
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      }
    ]
  },
  {
    "url": "/hris/noticeperiods",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "NoticePeriod",
    "typeScriptTag": "noticePeriod",
    "description": "Get all noticeperiods",
    "parameters": [
      {
        "name": "noticePeriodIds",
        "schema": "string",
        "description": "The notice period ids."
      },
      {
        "name": "pageNumber",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "description": "Represents how many results you'd like to retrieve per request (page). Default is 100. Max is 200"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "class represents paged response."
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      }
    ]
  },
  {
    "url": "/time/leavetypes",
    "method": "listAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "LeaveTypes",
    "typeScriptTag": "leaveTypes",
    "description": "Get all Leave Types",
    "parameters": [
      {
        "name": "leaveTypeIds",
        "schema": "string",
        "description": "Comma separated list of one or more leave type identifiers you'd like to filter on.."
      },
      {
        "name": "pageNumber",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "description": "Represents how many results you'd like to retrieve per request (page). Default is 100. Max is 200"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "class represents paged response."
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      }
    ]
  },
  {
    "url": "/time/leavebalance",
    "method": "getAllBalances",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "LeaveBalance",
    "typeScriptTag": "leaveBalance",
    "description": "Get all Leave balances",
    "parameters": [
      {
        "name": "employeeIds",
        "schema": "string",
        "description": "The employee ids."
      },
      {
        "name": "leaveTypeIds",
        "schema": "string",
        "description": "The leave type ids."
      },
      {
        "name": "pageNumber",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "description": "Represents how many results you'd like to retrieve per request (page). Default is 100. Max is 200"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "class represents paged response."
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      }
    ]
  },
  {
    "url": "/time/leaverequests",
    "method": "getAllBetweenDates",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "LeaveRequests",
    "typeScriptTag": "leaveRequests",
    "description": "Get all Leave Requests",
    "parameters": [
      {
        "name": "employeeIds",
        "schema": "string",
        "description": "Comma separated list of one or more Employee ids you'd like to filter on."
      },
      {
        "name": "from",
        "schema": "string",
        "description": "From date."
      },
      {
        "name": "to",
        "schema": "string",
        "description": "To date."
      },
      {
        "name": "pageNumber",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "description": "Represents how many results you'd like to retrieve per request (page). Default is 100. Max is 200"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "class represents paged response."
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      }
    ]
  },
  {
    "url": "/time/leaverequests",
    "method": "createRequestIdentifier",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "LeaveRequests",
    "typeScriptTag": "leaveRequests",
    "description": "Create an Leave Request",
    "parameters": [
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EMPLOYEEID"
      },
      {
        "name": "requestedBy",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "REQUESTEDBY"
      },
      {
        "name": "fromDate",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FROMDATE"
      },
      {
        "name": "toDate",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TODATE"
      },
      {
        "name": "fromSession",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "toSession",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "leaveTypeId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "LEAVETYPEID"
      },
      {
        "name": "reason",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "REASON"
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
        "statusCode": "200",
        "description": "class represents response."
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      }
    ]
  },
  {
    "url": "/time/attendance",
    "method": "getRecordsInRange",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Attendance",
    "typeScriptTag": "attendance",
    "description": "Get all Attendance Records",
    "parameters": [
      {
        "name": "employeeIds",
        "schema": "string",
        "description": "Comma separated list of one or more Employee ids you'd like to filter on."
      },
      {
        "name": "from",
        "schema": "string",
        "description": "Date from records to retrieve. If not specified defaults to `to - 30` days."
      },
      {
        "name": "to",
        "schema": "string",
        "description": "Date to records can be retrieved. If not specified defaults to `today`."
      },
      {
        "name": "pageNumber",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "description": "Represents how many results you'd like to retrieve per request (page). Default is 100. Max is 200"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "class represents paged response."
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      }
    ]
  },
  {
    "url": "/time/capturescheme",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "AttendanceCaptureScheme",
    "typeScriptTag": "attendanceCaptureScheme",
    "description": "Get all captureschemes",
    "parameters": [
      {
        "name": "captureschemeIds",
        "schema": "string",
        "description": "The capturescheme ids."
      },
      {
        "name": "pageNumber",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "description": "Represents how many results you'd like to retrieve per request (page). Default is 100. Max is 200"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "class represents paged response."
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      }
    ]
  },
  {
    "url": "/time/holidayscalendar",
    "method": "getAllHolidaysCalendar",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "HolidayCalendar",
    "typeScriptTag": "holidayCalendar",
    "description": "Get all holidays Calendar",
    "parameters": [
      {
        "name": "holidaysCalendarIds",
        "schema": "string",
        "description": "The holidaysCalendar ids."
      },
      {
        "name": "pageNumber",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "description": "Represents how many results you'd like to retrieve per request (page). Default is 100. Max is 200"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "class represents paged response."
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      }
    ]
  },
  {
    "url": "/payroll/salarycomponents",
    "method": "getAllComponents",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "SalaryComponents",
    "typeScriptTag": "salaryComponents",
    "description": "Get all Salary Components",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "class represents paged response."
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      }
    ]
  },
  {
    "url": "/payroll/paygroups",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "PayGroups",
    "typeScriptTag": "payGroups",
    "description": "Get all Pay Groups",
    "parameters": [
      {
        "name": "pageNumber",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "description": "Represents how many results you'd like to retrieve per request (page). Default is 100. Max is 200"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "class represents paged response."
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      }
    ]
  },
  {
    "url": "/payroll/paygroups/{payGroupId}/paycycles",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "PayCycles",
    "typeScriptTag": "payCycles",
    "description": "Get all Pay Cycles",
    "parameters": [
      {
        "name": "payGroupId",
        "schema": "string",
        "required": true,
        "description": "The Pay Group Id",
        "example": "PAYGROUPID"
      },
      {
        "name": "runStatus",
        "schema": "string",
        "description": "Comma separated list of one or more run Status you'd like to filter on, allowed values are Pending, Finalized, Partial."
      },
      {
        "name": "pageNumber",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "description": "Represents how many results you'd like to retrieve per request (page). Default is 100. Max is 200"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "class represents paged response."
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      }
    ]
  },
  {
    "url": "/payroll/paygroups/{payGroupId}/paycycles/{payCycleId}/payregister",
    "method": "getPayRegister",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "PayCycles",
    "typeScriptTag": "payCycles",
    "description": "Get Pay Register",
    "parameters": [
      {
        "name": "payGroupId",
        "schema": "string",
        "required": true,
        "description": "The Pay Group Id",
        "example": "PAYGROUPID"
      },
      {
        "name": "payCycleId",
        "schema": "string",
        "required": true,
        "description": "The Pay cycle Id",
        "example": "PAYCYCLEID"
      },
      {
        "name": "pageNumber",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "description": "Represents how many results you'd like to retrieve per request (page). Default is 100. Max is 200"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "class represents paged response."
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      }
    ]
  },
  {
    "url": "/payroll/paygroups/{payGroupId}/paycycles/{payCycleId}/paybatches",
    "method": "getPayBatches",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "PayCycles",
    "typeScriptTag": "payCycles",
    "description": "Get all Pay Batches",
    "parameters": [
      {
        "name": "payGroupId",
        "schema": "string",
        "required": true,
        "description": "The Pay Group Id",
        "example": "PAYGROUPID"
      },
      {
        "name": "payCycleId",
        "schema": "string",
        "required": true,
        "description": "The Pay cycle Id",
        "example": "PAYCYCLEID"
      },
      {
        "name": "status",
        "schema": "string",
        "description": "Comma separated list of one or more payment Status you'd like to filter on, allowed values are UnPaid, Paid."
      },
      {
        "name": "pageNumber",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "description": "Represents how many results you'd like to retrieve per request (page). Default is 100. Max is 200"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "class represents paged response."
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      }
    ]
  },
  {
    "url": "/payroll/paygroups/{payGroupId}/paycycles/{payCycleId}/paybatches/{payBatchId}/payments",
    "method": "getBatchPayments",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "PayCycles",
    "typeScriptTag": "payCycles",
    "description": "Get all Batch Payments",
    "parameters": [
      {
        "name": "payGroupId",
        "schema": "string",
        "required": true,
        "description": "The Pay Group Id",
        "example": "PAYGROUPID"
      },
      {
        "name": "payCycleId",
        "schema": "string",
        "required": true,
        "description": "The Pay cycle Id",
        "example": "PAYCYCLEID"
      },
      {
        "name": "payBatchId",
        "schema": "string",
        "required": true,
        "description": "The Pay Batch Id",
        "example": "PAYBATCHID"
      },
      {
        "name": "status",
        "schema": "string",
        "description": "Comma separated list of one or more payment Status you'd like to filter on, allowed values are UnPaid, Paid."
      },
      {
        "name": "pageNumber",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "description": "Represents how many results you'd like to retrieve per request (page). Default is 100. Max is 200"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "class represents paged response."
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      }
    ]
  },
  {
    "url": "/payroll/paygroups/{payGroupId}/paycycles/{payCycleId}/paybatches/{payBatchId}/payments",
    "method": "updatePaymentsStatus",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "PayCycles",
    "typeScriptTag": "payCycles",
    "description": "Update the Payments status",
    "parameters": [
      {
        "name": "payGroupId",
        "schema": "string",
        "required": true,
        "description": "The Pay Group Id",
        "example": "PAYGROUPID"
      },
      {
        "name": "payCycleId",
        "schema": "string",
        "required": true,
        "description": "The Pay cycle Id",
        "example": "PAYCYCLEID"
      },
      {
        "name": "payBatchId",
        "schema": "string",
        "required": true,
        "description": "The Pay Batch Id",
        "example": "PAYBATCHID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "class represents response."
      },
      {
        "statusCode": "400",
        "description": "class represents response."
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      }
    ]
  },
  {
    "url": "/payroll/paygrades",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "PayGrades",
    "typeScriptTag": "payGrades",
    "description": "Get all Pay Grades",
    "parameters": [
      {
        "name": "payGradeIds",
        "schema": "string",
        "description": "The paygrade ids."
      },
      {
        "name": "pageNumber",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "description": "Represents how many results you'd like to retrieve per request (page). Default is 100. Max is 200"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "class represents paged response."
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      }
    ]
  },
  {
    "url": "/payroll/paybands",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "PayBands",
    "typeScriptTag": "payBands",
    "description": "Get all Pay Bands",
    "parameters": [
      {
        "name": "payBandIds",
        "schema": "string",
        "description": "The payband ids."
      },
      {
        "name": "pageNumber",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "description": "Represents how many results you'd like to retrieve per request (page). Default is 100. Max is 200"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "class represents paged response."
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      }
    ]
  },
  {
    "url": "/psa/clients",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Clients",
    "typeScriptTag": "clients",
    "description": "Get all clients",
    "parameters": [
      {
        "name": "clientIds",
        "schema": "string",
        "description": "Comma separated list of one or more employee ids you'd like to filter on."
      },
      {
        "name": "lastModified",
        "schema": "string",
        "description": "Date/time when this time off request was last modified, in ISO 8601 format (YYYY-MM-DDThh:mm:ss±hh:mm)."
      },
      {
        "name": "pageNumber",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "description": "Represents how many results you'd like to retrieve per request (page). Default is 100. Max is 200"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "class represents paged response."
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      }
    ]
  },
  {
    "url": "/psa/clients",
    "method": "createClientIdentifier",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Clients",
    "typeScriptTag": "clients",
    "description": "Create a Client",
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
        "name": "code",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CODE"
      },
      {
        "name": "billingInfo",
        "schema": "object",
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
        "name": "website",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "email",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "class represents response."
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      }
    ]
  },
  {
    "url": "/psa/clients/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Clients",
    "typeScriptTag": "clients",
    "description": "Get a client",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The identifier.",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "class represents response."
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      }
    ]
  },
  {
    "url": "/psa/clients/{id}",
    "method": "updateDetails",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Clients",
    "typeScriptTag": "clients",
    "description": "Update a Client",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The identifier.",
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
        "name": "code",
        "schema": "string",
        "description": ""
      },
      {
        "name": "billingAddress",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "class represents response."
      },
      {
        "statusCode": "400",
        "description": "class represents response."
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      }
    ]
  },
  {
    "url": "/psa/projects/{projectId}/phases",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "ProjectPhases",
    "typeScriptTag": "projectPhases",
    "description": "Get project phases.",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "The project identifier.",
        "example": "PROJECTID"
      },
      {
        "name": "lastModified",
        "schema": "string",
        "description": "Date/time when this time off request was last modified, in ISO 8601 format (YYYY-MM-DDThh:mm:ss±hh:mm)."
      },
      {
        "name": "pageNumber",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "description": "Represents how many results you'd like to retrieve per request (page). Default is 100. Max is 200"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "class represents paged response."
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      }
    ]
  },
  {
    "url": "/psa/projects/{projectId}/phases",
    "method": "createPhaseIdentifier",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "ProjectPhases",
    "typeScriptTag": "projectPhases",
    "description": "Create a Project Phase",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "The project identifier.",
        "example": "PROJECTID"
      },
      {
        "name": "phaseName",
        "schema": "string",
        "description": "Name of the phase."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "class represents response."
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      }
    ]
  },
  {
    "url": "/psa/projects",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Projects",
    "typeScriptTag": "projects",
    "description": "Get all projects.",
    "parameters": [
      {
        "name": "clientIds",
        "schema": "string",
        "description": "Comma separated list of one or more employee ids you'd like to filter on."
      },
      {
        "name": "lastModified",
        "schema": "string",
        "description": "Date/time when this time off request was last modified, in ISO 8601 format (YYYY-MM-DDThh:mm:ss±hh:mm)."
      },
      {
        "name": "pageNumber",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "description": "Represents how many results you'd like to retrieve per request (page). Default is 100. Max is 200"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "class represents paged response."
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      }
    ]
  },
  {
    "url": "/psa/projects",
    "method": "createProjectIdentifier",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Projects",
    "typeScriptTag": "projects",
    "description": "Create a Project",
    "parameters": [
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "clientId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CLIENTID"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "code",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CODE"
      },
      {
        "name": "status",
        "schema": "integer",
        "required": false,
        "description": ""
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
        "name": "isBillable",
        "schema": "boolean",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "class represents response."
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      }
    ]
  },
  {
    "url": "/psa/projects/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Projects",
    "typeScriptTag": "projects",
    "description": "Get a project",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The identifier.",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "class represents response."
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      }
    ]
  },
  {
    "url": "/psa/projects/{id}",
    "method": "updateDetails",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Projects",
    "typeScriptTag": "projects",
    "description": "Update a Project",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The identifier.",
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
        "name": "code",
        "schema": "string",
        "description": ""
      },
      {
        "name": "status",
        "schema": "integer",
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
        "name": "isBillable",
        "schema": "boolean",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "class represents response."
      },
      {
        "statusCode": "400",
        "description": "class represents response."
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      }
    ]
  },
  {
    "url": "/psa/projects/{id}/allocations",
    "method": "getAllocations",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Projects",
    "typeScriptTag": "projects",
    "description": "Get a project allocations",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The identifier.",
        "example": "ID"
      },
      {
        "name": "lastModified",
        "schema": "string",
        "description": "The last modified."
      },
      {
        "name": "pageNumber",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "description": "Represents how many results you'd like to retrieve per request (page). Default is 100. Max is 200"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "class represents paged response."
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      }
    ]
  },
  {
    "url": "/psa/projects/{id}/timeentries",
    "method": "getTimesheetEntriesBetweenDates",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Projects",
    "typeScriptTag": "projects",
    "description": "Get project timesheet entries.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The project identifier.",
        "example": "ID"
      },
      {
        "name": "from",
        "schema": "string",
        "description": "Date from records to retrieve. If not specified defaults to `to - 30` days."
      },
      {
        "name": "to",
        "schema": "string",
        "description": "Date to records can be retrieved. If not specified defaults to `today`."
      },
      {
        "name": "employeeIds",
        "schema": "string",
        "description": "Comma separated list of one or more Employee ids you'd like to filter on."
      },
      {
        "name": "pageNumber",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "description": "Represents how many results you'd like to retrieve per request (page). Default is 100. Max is 200"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "class represents paged response."
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      }
    ]
  },
  {
    "url": "/psa/projects/{projectId}/tasks",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Tasks",
    "typeScriptTag": "tasks",
    "description": "Get project tasks.",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "The project identifier.",
        "example": "PROJECTID"
      },
      {
        "name": "lastModified",
        "schema": "string",
        "description": "Date/time when this time off request was last modified, in ISO 8601 format (YYYY-MM-DDThh:mm:ss±hh:mm)."
      },
      {
        "name": "pageNumber",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "description": "Represents how many results you'd like to retrieve per request (page). Default is 100. Max is 200"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "class represents paged response."
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      }
    ]
  },
  {
    "url": "/psa/projects/{projectId}/tasks",
    "method": "createTaskIdentifier",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Tasks",
    "typeScriptTag": "tasks",
    "description": "Create a task",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "The project identifier.",
        "example": "PROJECTID"
      },
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PROJECTID"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "taskBillingType",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "assignedTo",
        "schema": "array",
        "required": false,
        "description": ""
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
        "name": "estimatedHours",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "phaseId",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "class represents response."
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      }
    ]
  },
  {
    "url": "/psa/projects/{projectId}/tasks/{taskId}",
    "method": "updateTask",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Tasks",
    "typeScriptTag": "tasks",
    "description": "Update a task",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "The project identifier.",
        "example": "PROJECTID"
      },
      {
        "name": "taskId",
        "schema": "string",
        "required": true,
        "description": "The task identifier.",
        "example": "TASKID"
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
        "name": "taskBillingType",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "assignedTo",
        "schema": "array",
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
        "name": "estimatedHours",
        "schema": "number",
        "description": ""
      },
      {
        "name": "phaseId",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "class represents response."
      },
      {
        "statusCode": "400",
        "description": "class represents response."
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      }
    ]
  },
  {
    "url": "/psa/projects/{projectId}/tasks/{taskId}/timeentries",
    "method": "listTimeEntriesBetweenDates",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Tasks",
    "typeScriptTag": "tasks",
    "description": "Get project task time entries.",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "The project identifier.",
        "example": "PROJECTID"
      },
      {
        "name": "taskId",
        "schema": "string",
        "required": true,
        "description": "The task identifier.",
        "example": "TASKID"
      },
      {
        "name": "from",
        "schema": "string",
        "description": "Date from records to retrieve. If not specified defaults to `to - 30` days."
      },
      {
        "name": "to",
        "schema": "string",
        "description": "Date to records can be retrieved. If not specified defaults to `today`."
      },
      {
        "name": "employeeIds",
        "schema": "string",
        "description": "Comma separated list of one or more Employee ids you'd like to filter on."
      },
      {
        "name": "pageNumber",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "description": "Represents how many results you'd like to retrieve per request (page). Default is 100. Max is 200"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "class represents paged response."
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      }
    ]
  },
  {
    "url": "/psa/timeentries",
    "method": "getBetweenDates",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "TimesheetEntries",
    "typeScriptTag": "timesheetEntries",
    "description": "Get project timesheet entries.",
    "parameters": [
      {
        "name": "from",
        "schema": "string",
        "description": "Date from records to retrieve. If not specified defaults to `to - 30` days."
      },
      {
        "name": "to",
        "schema": "string",
        "description": "Date to records can be retrieved. If not specified defaults to `today`."
      },
      {
        "name": "employeeIds",
        "schema": "string",
        "description": "Comma separated list of one or more Employee ids you'd like to filter on."
      },
      {
        "name": "projectIds",
        "schema": "string",
        "description": "Comma separated list of one or more project ids you'd like to filter on."
      },
      {
        "name": "taskIds",
        "schema": "string",
        "description": "Comma separated list of one or more task ids you'd like to filter on."
      },
      {
        "name": "pageNumber",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "description": "Represents how many results you'd like to retrieve per request (page). Default is 100. Max is 200"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "class represents paged response."
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      }
    ]
  },
  {
    "url": "/pms/timeframes",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "TimeFrames",
    "typeScriptTag": "timeFrames",
    "description": "Gets time frame list.",
    "parameters": [
      {
        "name": "timeFrameIds",
        "schema": "string",
        "description": "Comma separated list of one or more Time Frame ids you'd like to filter on."
      },
      {
        "name": "pageNumber",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "description": "Represents how many results you'd like to retrieve per request (page). Default is 100. Max is 200"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "class represents paged response."
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      }
    ]
  },
  {
    "url": "/pms/goals",
    "method": "listWithHierarchy",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Goal",
    "typeScriptTag": "goal",
    "description": "Gets goal list.",
    "parameters": [
      {
        "name": "goalIds",
        "schema": "string",
        "description": "Comma separated list of one or more Goal ids you'd like to filter on."
      },
      {
        "name": "timeFrameIds",
        "schema": "string",
        "description": "Comma separated list of one or more Time Frame ids you'd like to filter on."
      },
      {
        "name": "employeeIds",
        "schema": "string",
        "description": "Comma separated list of one or more Employee ids you'd like to filter on."
      },
      {
        "name": "from",
        "schema": "string",
        "description": "Date/time when goal time period will start, in ISO 8601 format (YYYY-MM-DDThh:mm:ss±hh). If not specified  defaults `to` - 60 days."
      },
      {
        "name": "to",
        "schema": "string",
        "description": "Date/time when goal time period will end, in ISO 8601 format (YYYY-MM-DDThh:mm:ss±hh). If not specified  defaults `from` + 60 days."
      },
      {
        "name": "pageNumber",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "description": "Represents how many results you'd like to retrieve per request (page). Default is 100. Max is 200"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "class represents paged response."
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      }
    ]
  },
  {
    "url": "/pms/goals/{goalId}/progress",
    "method": "updateProgress",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Goal",
    "typeScriptTag": "goal",
    "description": "Update goal progress",
    "parameters": [
      {
        "name": "goalId",
        "schema": "string",
        "required": true,
        "description": "The goal identifier.",
        "example": "GOALID"
      },
      {
        "name": "currentValue",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "status",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "updatedBy",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "UPDATEDBY"
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
        "statusCode": "200",
        "description": "class represents response."
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      }
    ]
  },
  {
    "url": "/pms/badges",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Badge",
    "typeScriptTag": "badge",
    "description": "Gets badge list.",
    "parameters": [
      {
        "name": "badgeIds",
        "schema": "string",
        "description": "Comma separated list of one or more Badge ids you'd like to filter on."
      },
      {
        "name": "pageNumber",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "description": "Represents how many results you'd like to retrieve per request (page). Default is 100. Max is 200"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "class represents paged response."
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      }
    ]
  },
  {
    "url": "/pms/praise",
    "method": "listEmployeesPraises",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Praise",
    "typeScriptTag": "praise",
    "description": "Gets praise list.",
    "parameters": [
      {
        "name": "praiseIds",
        "schema": "string",
        "description": "Comma separated list of one or more praise ids you'd like to filter on."
      },
      {
        "name": "from",
        "schema": "string",
        "description": "Date/time from records to retrieve, in ISO 8601 format (YYYY-MM-DDThh:mm:ss±hh). If not specified defaults to `to - 30` days."
      },
      {
        "name": "to",
        "schema": "string",
        "description": "Date/time to records to retrieve, in ISO 8601 format (YYYY-MM-DDThh:mm:ss±hh). If not specified defaults to `today`."
      },
      {
        "name": "pageNumber",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "description": "Represents how many results you'd like to retrieve per request (page). Default is 100. Max is 200"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "class represents paged response."
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      }
    ]
  },
  {
    "url": "/pms/praise",
    "method": "createPraiseIdentifier",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Praise",
    "typeScriptTag": "praise",
    "description": "Add Praise",
    "parameters": [
      {
        "name": "employeeIds",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "feedback",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FEEDBACK"
      },
      {
        "name": "badgeId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "BADGEID"
      },
      {
        "name": "givenBy",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "GIVENBY"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "class represents response."
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      }
    ]
  },
  {
    "url": "/v1/hire/jobs",
    "method": "getAllPublishedJobs",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Jobs",
    "typeScriptTag": "jobs",
    "description": "Get all jobs",
    "parameters": [
      {
        "name": "lastModified",
        "schema": "string",
        "description": ""
      },
      {
        "name": "jobStatus",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "pageNumber",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "description": "Represents how many results you'd like to retrieve per request (page). Default is 100. Max is 200"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "500",
        "description": "Server Error"
      }
    ]
  },
  {
    "url": "/v1/hire/jobs/{jobId}/applicationfields",
    "method": "getApplicationFields",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Jobs",
    "typeScriptTag": "jobs",
    "description": "Get application fields",
    "parameters": [
      {
        "name": "jobId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "JOBID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "500",
        "description": "Server Error"
      }
    ]
  },
  {
    "url": "/v1/hire/jobs/{jobId}/candidates",
    "method": "getCandidates",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Jobs",
    "typeScriptTag": "jobs",
    "description": "Get job candidates",
    "parameters": [
      {
        "name": "jobId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "JOBID"
      },
      {
        "name": "isArchived",
        "schema": "boolean",
        "description": "",
        "default": false
      },
      {
        "name": "lastModified",
        "schema": "string",
        "description": ""
      },
      {
        "name": "pageNumber",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "description": "Represents how many results you'd like to retrieve per request (page). Default is 100. Max is 200"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "500",
        "description": "Server Error"
      }
    ]
  },
  {
    "url": "/v1/hire/jobs/{jobId}/candidate/{candidateId}",
    "method": "updateCandidate",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Jobs",
    "typeScriptTag": "jobs",
    "description": "Updated a candidate",
    "parameters": [
      {
        "name": "candidateId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CANDIDATEID"
      },
      {
        "name": "jobId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "JOBID"
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
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "500",
        "description": "Server Error"
      }
    ]
  },
  {
    "url": "/v1/hire/jobs/{jobId}/candidate/{candidateId}/notes",
    "method": "addCandidateNote",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Jobs",
    "typeScriptTag": "jobs",
    "description": "Adds candidate note",
    "parameters": [
      {
        "name": "candidateId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CANDIDATEID"
      },
      {
        "name": "jobId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "JOBID"
      },
      {
        "name": "tags",
        "schema": "array",
        "description": ""
      },
      {
        "name": "comments",
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
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "500",
        "description": "Server Error"
      }
    ]
  },
  {
    "url": "/v1/hire/jobs/{jobId}/candidate",
    "method": "postCandidate",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Jobs",
    "typeScriptTag": "jobs",
    "description": "Post a job candidate",
    "parameters": [
      {
        "name": "jobId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "JOBID"
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
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "500",
        "description": "Server Error"
      }
    ]
  },
  {
    "url": "/v1/hire/jobs/{jobId}/candidate/{candidateId}/interviews",
    "method": "getCandidateInterviews",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Jobs",
    "typeScriptTag": "jobs",
    "description": "Get interview scheduled and completed for a job candidate",
    "parameters": [
      {
        "name": "candidateId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CANDIDATEID"
      },
      {
        "name": "jobId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "JOBID"
      },
      {
        "name": "pageNumber",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "description": "Represents how many results you'd like to retrieve per request (page). Default is 100. Max is 200"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "500",
        "description": "Server Error"
      }
    ]
  },
  {
    "url": "/v1/hire/jobs/{jobId}/candidate/{candidateId}/scorecards",
    "method": "getCandidateScorecards",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Jobs",
    "typeScriptTag": "jobs",
    "description": "Get scorecard of a specified candidate for a job candidate",
    "parameters": [
      {
        "name": "candidateId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CANDIDATEID"
      },
      {
        "name": "jobId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "JOBID"
      },
      {
        "name": "pageNumber",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "description": "Represents how many results you'd like to retrieve per request (page). Default is 100. Max is 200"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "500",
        "description": "Server Error"
      }
    ]
  },
  {
    "url": "/v1/hire/talentpool",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "TalentPool",
    "typeScriptTag": "talentPool",
    "description": "Get all Talent pools",
    "parameters": [
      {
        "name": "lastModified",
        "schema": "string",
        "description": ""
      },
      {
        "name": "pageNumber",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "description": "Represents how many results you'd like to retrieve per request (page). Default is 100. Max is 200"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "500",
        "description": "Server Error"
      }
    ]
  },
  {
    "url": "/v1/hire/talentpool/{talentPoolId}/applicationfields",
    "method": "getApplicationFields",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "TalentPool",
    "typeScriptTag": "talentPool",
    "description": "Get Talent pool application fields",
    "parameters": [
      {
        "name": "talentPoolId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TALENTPOOLID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "500",
        "description": "Server Error"
      }
    ]
  },
  {
    "url": "/v1/hire/talentpool/{talentPoolId}/candidates",
    "method": "getCandidates",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "TalentPool",
    "typeScriptTag": "talentPool",
    "description": "Get Talent pool candidates",
    "parameters": [
      {
        "name": "talentPoolId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TALENTPOOLID"
      },
      {
        "name": "lastModified",
        "schema": "string",
        "description": ""
      },
      {
        "name": "pageNumber",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "description": "Represents how many results you'd like to retrieve per request (page). Default is 100. Max is 200"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "500",
        "description": "Server Error"
      }
    ]
  },
  {
    "url": "/v1/hire/talentpool/{talentPoolId}/candidate",
    "method": "addCandidate",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "TalentPool",
    "typeScriptTag": "talentPool",
    "description": "Post a candidate to a talent pool",
    "parameters": [
      {
        "name": "talentPoolId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TALENTPOOLID"
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
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "500",
        "description": "Server Error"
      }
    ]
  },
  {
    "url": "/expense/categories",
    "method": "getAllCategories",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "ExpenseCategory",
    "typeScriptTag": "expenseCategory",
    "description": "Get all Expense Categories",
    "parameters": [
      {
        "name": "expenseCategoryIds",
        "schema": "string",
        "description": "Comma separated list of one or more  expense categories identifiers you'd like to filter on."
      },
      {
        "name": "pageNumber",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "description": "Represents how many results you'd like to retrieve per request (page). Default is 100. Max is 200"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "class represents paged response."
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      }
    ]
  },
  {
    "url": "/expense/claims",
    "method": "getAllClaims",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Expense",
    "typeScriptTag": "expense",
    "description": "Get all Expense Claims",
    "parameters": [
      {
        "name": "pageNumber",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "description": "Represents how many results you'd like to retrieve per request (page). Default is 100. Max is 200"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "class represents paged response."
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      }
    ]
  },
  {
    "url": "/expensepolicies",
    "method": "listAllExpensePolicies",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "ExpensePolicy",
    "typeScriptTag": "expensePolicy",
    "description": "Get all expensepolicies",
    "parameters": [
      {
        "name": "expensepolicyIds",
        "schema": "string",
        "description": "The expensepolicy ids."
      },
      {
        "name": "pageNumber",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "description": "Represents how many results you'd like to retrieve per request (page). Default is 100. Max is 200"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "class represents paged response."
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      }
    ]
  },
  {
    "url": "/assets",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Asset",
    "typeScriptTag": "asset",
    "description": "Get all Assets",
    "parameters": [
      {
        "name": "assetIds",
        "schema": "string",
        "description": "The asset ids."
      },
      {
        "name": "employeeIds",
        "schema": "string",
        "description": "The employee ids."
      },
      {
        "name": "assetStatus",
        "schema": "string",
        "description": "The asset status."
      },
      {
        "name": "lastModified",
        "schema": "string",
        "description": "The last modified."
      },
      {
        "name": "pageNumber",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "description": "Represents how many results you'd like to retrieve per request (page). Default is 100. Max is 200"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "class represents paged response."
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      }
    ]
  },
  {
    "url": "/assets/types",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "AssetType",
    "typeScriptTag": "assetType",
    "description": "Get all Asset Types",
    "parameters": [
      {
        "name": "assetTypeIds",
        "schema": "string",
        "description": "The asset type ids."
      },
      {
        "name": "lastModified",
        "schema": "string",
        "description": "The last modified."
      },
      {
        "name": "pageNumber",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "description": "Represents how many results you'd like to retrieve per request (page). Default is 100. Max is 200"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "class represents paged response."
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      }
    ]
  },
  {
    "url": "/assets/categories",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "AssetCategory",
    "typeScriptTag": "assetCategory",
    "description": "Get all Asset Categories",
    "parameters": [
      {
        "name": "assetCategoryIds",
        "schema": "string",
        "description": "The asset category ids."
      },
      {
        "name": "lastModified",
        "schema": "string",
        "description": "The last modified."
      },
      {
        "name": "pageNumber",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "description": "Represents how many results you'd like to retrieve per request (page). Default is 100. Max is 200"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "class represents paged response."
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      }
    ]
  },
  {
    "url": "/assets/conditions",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "AssetCondition",
    "typeScriptTag": "assetCondition",
    "description": "Get all Asset Conditions",
    "parameters": [
      {
        "name": "assetConditionIds",
        "schema": "string",
        "description": "The asset condition ids."
      },
      {
        "name": "lastModified",
        "schema": "string",
        "description": "The last modified."
      },
      {
        "name": "pageNumber",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "description": "Represents how many results you'd like to retrieve per request (page). Default is 100. Max is 200"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "class represents paged response."
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      }
    ]
  },
  {
    "url": "/requisition/requests",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "RequisitionRequest",
    "typeScriptTag": "requisitionRequest",
    "description": "Get all Requisition Requests",
    "parameters": [
      {
        "name": "requisitionRequestIds",
        "schema": "string",
        "description": "The requisition request ids."
      },
      {
        "name": "status",
        "schema": "string",
        "description": "The status."
      },
      {
        "name": "lastModified",
        "schema": "string",
        "description": "The last modified."
      },
      {
        "name": "pageNumber",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "description": "Represents how many results you'd like to retrieve per request (page). Default is 100. Max is 200"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "class represents paged response."
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      }
    ]
  }
]
    }
      language="TypeScript"
      apiTitle="Requisition"
      apiBaseUrl="https://{company}.{environment}.com/api/v1"
      apiVersion="v1"
      endpoints={63}
      sdkMethods={73}
      schemas={242}
      parameters={335}
      difficulty="Hard"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/keka-hr/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/keka-hr/openapi.yaml"
      developerDocumentation="developers.keka.com/reference"
    />
  );
}
  