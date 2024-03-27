import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function SageTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="sage-typescript-sdk"
      metaDescription={`At Sage, we knock down barriers with information, insights, and tools to help your business flow.
 
We provide businesses with software and services that are simple and easy to use, as we work with you to give you that feeling of confidence. Customers trust our Payroll, HR, and Finance software to make business flow with ease. From our local network of experts to our ever-growing partnerships, we are on hand to give you all the insights you need to thrive. 💚`}
      company="Sage"
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/sage/logo.png"
      companyKebabCase="sage"
      clientNameCamelCase="sage"
      homepage="sage.com"
      lastUpdated={new Date("2024-03-27T17:12:20.901Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/sage/favicon.png"
      // Missing contactUrl
      // Missing contactEmail
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/sage/imagePreview.png"
      GettingStarted={GettingStarted}
      FirstRequest={FirstRequest}
      categories={["finance","payroll","accounting","construction","real_estate"]}
      methods={[
  {
    "url": "/employees",
    "method": "listActiveEmployees",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Employee",
    "typeScriptTag": "employee",
    "description": "List active employees in company",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "description": "",
        "example": 2
      },
      {
        "name": "teamHistory",
        "schema": "boolean",
        "description": "",
        "example": true
      },
      {
        "name": "employmentStatusHistory",
        "schema": "boolean",
        "description": "",
        "example": true
      },
      {
        "name": "positionHistory",
        "schema": "boolean",
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
    "url": "/employees",
    "method": "createNewEmployee",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Employee",
    "typeScriptTag": "employee",
    "description": "Create new employee",
    "parameters": [
      {
        "name": "email",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EMAIL"
      },
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
        "name": "work_start_date",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "send_email",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/employees/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Employee",
    "typeScriptTag": "employee",
    "description": "Single active employee in company",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "Numeric ID of the user to get.",
        "example": 0
      },
      {
        "name": "teamHistory",
        "schema": "boolean",
        "description": "",
        "example": true
      },
      {
        "name": "employmentStatusHistory",
        "schema": "boolean",
        "description": "",
        "example": true
      },
      {
        "name": "positionHistory",
        "schema": "boolean",
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
    "url": "/employees/{id}",
    "method": "updateById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Employee",
    "typeScriptTag": "employee",
    "description": "Update Employee",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "Numeric ID of the user to update.",
        "example": 0
      },
      {
        "name": "first_name",
        "schema": "string",
        "description": "",
        "example": "Jane"
      },
      {
        "name": "last_name",
        "schema": "string",
        "description": "",
        "example": "Doe"
      },
      {
        "name": "work_start_date",
        "schema": "string",
        "description": "",
        "example": "2020-01-28"
      },
      {
        "name": "location_id",
        "schema": "integer",
        "description": "",
        "example": 1
      },
      {
        "name": "team_id",
        "schema": "integer",
        "description": "",
        "example": 2
      },
      {
        "name": "leader_id",
        "schema": "integer",
        "description": "",
        "example": 3
      },
      {
        "name": "position_id",
        "schema": "integer",
        "description": "",
        "example": 101
      },
      {
        "name": "employee_number",
        "schema": "string",
        "description": "",
        "example": "0123456"
      },
      {
        "name": "approver_ids",
        "schema": "array",
        "description": ""
      },
      {
        "name": "selected_leave_types",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/employees/{id}/custom-fields",
    "method": "getCustomFields",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Employee",
    "typeScriptTag": "employee",
    "description": "Employee custom fields",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "Numeric ID of the user to get.",
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
    "url": "/employees/{id}/custom-fields/{custom_field_id}",
    "method": "updateCustomField",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Employee",
    "typeScriptTag": "employee",
    "description": "Update custom field",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "Employee identifier",
        "example": 0
      },
      {
        "name": "customFieldId",
        "schema": "integer",
        "required": true,
        "description": "Custom field identifier",
        "example": 0
      },
      {
        "name": "value",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "VALUE"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/employees/{id}/terminations",
    "method": "terminateEmployee",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Employee",
    "typeScriptTag": "employee",
    "description": "Terminate employee",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "Numeric ID of the user",
        "example": 0
      },
      {
        "name": "date",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DATE"
      },
      {
        "name": "termination_reason_id",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "comments",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/terminated-employees",
    "method": "listTerminatedEmployees",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Employee",
    "typeScriptTag": "employee",
    "description": "List terminated employees in company",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
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
    "url": "/terminated-employees/{id}",
    "method": "getTerminatedEmployee",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Employee",
    "typeScriptTag": "employee",
    "description": "Single terminated employee in company",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "Numeric ID of the user to get.",
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
    "url": "/leave-management/policies",
    "method": "listTimeOffPolicies",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Leave management",
    "typeScriptTag": "leaveManagement",
    "description": "List time off policies",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/leave-management/policies/{id}",
    "method": "getTimeOffPolicyById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Leave management",
    "typeScriptTag": "leaveManagement",
    "description": "Details about a time off policy",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "Numeric ID of the policy to get.",
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
    "url": "/leave-management/policies/{id}",
    "method": "updateKitDaysConfiguration",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Leave management",
    "typeScriptTag": "leaveManagement",
    "description": "Update KIT days configuration of a time off policy",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "Numeric ID of the policy to get.",
        "example": 0
      },
      {
        "name": "kit_days_enabled",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "kit_days_quantity",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 5
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Successful Response"
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/leave-management/kit-days",
    "method": "getKitDays",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Leave management",
    "typeScriptTag": "leaveManagement",
    "description": "View all the KIT days of an employee in a policy",
    "parameters": [
      {
        "name": "policyId",
        "schema": "integer",
        "required": true,
        "description": "Time-off policy identifier",
        "example": 1
      },
      {
        "name": "employeeId",
        "schema": "integer",
        "required": true,
        "description": "Employee identifier",
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
    "url": "/leave-management/kit-days",
    "method": "createKitDay",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Leave management",
    "typeScriptTag": "leaveManagement",
    "description": "Create a KIT day in a leave",
    "parameters": [
      {
        "name": "policy_id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "employee_id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "date",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "2020-01-01"
      },
      {
        "name": "date_from",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "2020-01-01"
      },
      {
        "name": "date_to",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "2020-01-01"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/leave-management/kit-days/{id}",
    "method": "processKitDay",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Leave management",
    "typeScriptTag": "leaveManagement",
    "description": "Approve, decline or cancel a KIT day",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "KIT day identifier",
        "example": 0
      },
      {
        "name": "status",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "STATUS"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Successful Response"
      }
    ]
  },
  {
    "url": "/leave-management/reports/individual-allowances",
    "method": "getIndividualAllowances",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Leave management",
    "typeScriptTag": "leaveManagement",
    "description": "Report with individual allowances",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "description": "",
        "example": 2
      },
      {
        "name": "perPage",
        "schema": "integer",
        "description": "",
        "example": 25
      },
      {
        "name": "locationIds",
        "schema": "array",
        "description": "Limit the reports to employees in specified location ids",
        "example": [
          14,
          13
        ]
      },
      {
        "name": "employeeIds",
        "schema": "array",
        "description": "Limit the reports to selected employee ids",
        "example": [
          1,
          2,
          3
        ]
      },
      {
        "name": "teamIds",
        "schema": "array",
        "description": "Limit the reports to employees in specified team ids",
        "example": [
          1
        ]
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
    "url": "/employees/{id}/leave-management/balances",
    "method": "getTimeOffBalances",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Leave management",
    "typeScriptTag": "leaveManagement",
    "description": "Employee time off balances",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "Numeric ID of the user to get.",
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
    "url": "/leave-management/requests",
    "method": "listTimeOffRequests",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Leave management",
    "typeScriptTag": "leaveManagement",
    "description": "List time off requests",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "description": "",
        "example": 2
      },
      {
        "name": "from",
        "schema": "string",
        "description": "If not specified defaults to beginning of current month",
        "example": "2018-05-20"
      },
      {
        "name": "to",
        "schema": "string",
        "description": "If not specified defaults to end of current month. Days between from date and to date must be less than 65. If you need info for larger period of time make multiple requests;",
        "example": "2018-06-20"
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
    "url": "/leave-management/requests",
    "method": "newTimeOffRequest",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Leave management",
    "typeScriptTag": "leaveManagement",
    "description": "Create new time off request",
    "parameters": [
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TYPE"
      },
      {
        "name": "time_off_policy_id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "employee_id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "date",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "date_from",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "date_to",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "part_of_day",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PART_OF_DAY"
      },
      {
        "name": "hours",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "time_from",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "07:30"
      },
      {
        "name": "time_to",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "15:00"
      },
      {
        "name": "details",
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
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/leave-management/out-of-office-today",
    "method": "listEmployeesOutToday",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Leave management",
    "typeScriptTag": "leaveManagement",
    "description": "List employees out of office today",
    "parameters": [
      {
        "name": "date",
        "schema": "string",
        "description": "Optional date, defauls to today",
        "example": "2018-11-23"
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
    "url": "/documents/categories",
    "method": "listCategories",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Documents",
    "typeScriptTag": "documents",
    "description": "List document categories",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/documents",
    "method": "createNewDocument",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Documents",
    "typeScriptTag": "documents",
    "description": "Create new document",
    "parameters": [
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "file",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FILE"
      },
      {
        "name": "employee_id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "category_id",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "notify",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/positions",
    "method": "listCompanyPositions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Positions",
    "typeScriptTag": "positions",
    "description": "List positions in company",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
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
    "url": "/teams",
    "method": "listInCompany",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Teams",
    "typeScriptTag": "teams",
    "description": "List teams in company",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
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
    "url": "/performance/goals/quarterly-progress/overall",
    "method": "overviewQuarterlyProgress",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Performance",
    "typeScriptTag": "performance",
    "description": "Overview of quarterly goal progress",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/performance/goals/quarterly-progress/company-goals",
    "method": "getQuarterlyCompanyGoals",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Performance",
    "typeScriptTag": "performance",
    "description": "Quarterly company goals",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/performance/goals/quarterly-progress/team-goals",
    "method": "getQuarterlyTeamGoals",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Performance",
    "typeScriptTag": "performance",
    "description": "Quarterly team goals",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/performance/goals/quarterly-progress/individual-goals",
    "method": "getQuarterlyIndividualGoals",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Performance",
    "typeScriptTag": "performance",
    "description": "Quarterly individual goals",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/employees/{id}/compensations",
    "method": "getCompensations",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Employee",
    "typeScriptTag": "employee",
    "description": "Employee compensations",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "Numeric ID of the user to get.",
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
    "url": "/recruitment/positions",
    "method": "listPositions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Recruitment",
    "typeScriptTag": "recruitment",
    "description": "List recruitment positions",
    "parameters": [
      {
        "name": "status",
        "schema": "string",
        "description": "Filter by status, see list of possible statuses\n`?status=open`\n",
        "example": "completed"
      },
      {
        "name": "hiringManagerIds",
        "schema": "array",
        "description": "Filter by hiring manager id, can appear multiple times\n`hiring_manager_ids[]=251&hiring_manager_ids[]=121`\n",
        "example": [
          "251",
          "121"
        ]
      },
      {
        "name": "groupIds",
        "schema": "array",
        "description": "Filter by group id, can appear multiple times\n`group_ids[]=27&group_ids[]=761`\n",
        "example": [
          "27",
          "761"
        ]
      },
      {
        "name": "locationIds",
        "schema": "array",
        "description": "Filter by location id, can appear multiple times\n`location_ids[]=1&location_ids[]=12`\n",
        "example": [
          "1",
          "12"
        ]
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "Pagination: fetch page at given offset",
        "example": 2
      },
      {
        "name": "perPage",
        "schema": "integer",
        "description": "Pagination: amount of positions to return in 1 call, default: 30, max: 100\n",
        "example": 25
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
    "url": "/recruitment/positions/{id}",
    "method": "getPositionDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Recruitment",
    "typeScriptTag": "recruitment",
    "description": "Position details",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "Numeric ID of position",
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
    "url": "/recruitment/positions/{id}/applicants",
    "method": "listApplicants",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Recruitment",
    "typeScriptTag": "recruitment",
    "description": "List applicants",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "Numeric ID of position",
        "example": 0
      },
      {
        "name": "stageId",
        "schema": "integer",
        "description": "Optional filter by stage e.g. `?stage_id=25`",
        "example": 25
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "Pagination: fetch page at given offset, default 1",
        "example": 2
      },
      {
        "name": "perPage",
        "schema": "integer",
        "description": "Pagination: amount of applicants to return in 1 call, default: 30, max: 100\n",
        "example": 25
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
    "url": "/recruitment/positions/{id}/applicants",
    "method": "createApplicantWithReferral",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Recruitment",
    "typeScriptTag": "recruitment",
    "description": "Create new applicant",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "Numeric ID of position (must not be closed or completed).",
        "example": 0
      },
      {
        "name": "send_thank_you_email",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "applicant[first_name]",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "APPLICANT[FIRST_NAME]"
      },
      {
        "name": "applicant[last_name]",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "applicant[email]",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "applicant[referral]",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "applicant[phone_number]",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "applicant[source]",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "applicant[address]",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "applicant[summary]",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "applicant[attachment]",
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
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/recruitment/applicants/{id}",
    "method": "getApplicantDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Recruitment",
    "typeScriptTag": "recruitment",
    "description": "Applicant details",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "Numeric ID of applicant",
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
    "url": "/recruitment/applicants/{id}/actions",
    "method": "listApplicantActions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Recruitment",
    "typeScriptTag": "recruitment",
    "description": "Applicant actions",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "Numeric ID of applicant",
        "example": 0
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "Pagination: fetch page at given offset",
        "example": 2
      },
      {
        "name": "perPage",
        "schema": "integer",
        "description": "Pagination: amount of actions to return in 1 call, default: 30, max: 100\n",
        "example": 25
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
    "url": "/timesheets/clock-in",
    "method": "clockInOut",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Timesheets",
    "typeScriptTag": "timesheets",
    "description": "Clock in & out employees on specific days",
    "parameters": [
      {
        "name": "override",
        "schema": "string",
        "description": ""
      },
      {
        "name": "clocked_time",
        "schema": "object",
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
    "url": "/termination-reasons",
    "method": "listInCompany",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Terminations reasons",
    "typeScriptTag": "terminationsReasons",
    "description": "List termination reasons in company",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
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
    "url": "/onboarding/categories",
    "method": "listTaskCategories",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Onboarding",
    "typeScriptTag": "onboarding",
    "description": "List onboarding task categories",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/onboarding/tasks",
    "method": "createNewTask",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Onboarding",
    "typeScriptTag": "onboarding",
    "description": "Create new onboarding task",
    "parameters": [
      {
        "name": "title",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TITLE"
      },
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "boarding_task_template_category_id",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "due_in",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 30
      },
      {
        "name": "default_assignee_type",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "assignee_id",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "require_attachment",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "add_after",
        "schema": "number",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/offboarding/categories",
    "method": "listCategories",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Offboarding",
    "typeScriptTag": "offboarding",
    "description": "List offboarding task categories",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/offboarding/tasks",
    "method": "createTask",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Offboarding",
    "typeScriptTag": "offboarding",
    "description": "Create new offboarding task",
    "parameters": [
      {
        "name": "title",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TITLE"
      },
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "boarding_task_template_category_id",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "due_in",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 30
      },
      {
        "name": "default_assignee_type",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "assignee_id",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "require_attachment",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/vikarina/job-positions",
    "method": "transferJobPositionFromSageToVikarina",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Integrations",
    "typeScriptTag": "integrations",
    "description": "Job position transfer from Sage HR to Vikarina",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/vikarina/organization-structure",
    "method": "transferOrganizationalStructureFromSageToVikarina",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Integrations",
    "typeScriptTag": "integrations",
    "description": "Organizational structure transfer from Sage HR to Vikarina",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/vikarina/newstarter-employees",
    "method": "importNewStartersList",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Integrations",
    "typeScriptTag": "integrations",
    "description": "New starters list from Sage HR to Vikarina",
    "parameters": [
      {
        "name": "startDate",
        "schema": "string",
        "description": "",
        "example": "2020-01-01"
      },
      {
        "name": "endDate",
        "schema": "string",
        "description": "",
        "example": "2020-02-01"
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
    "url": "/vikarina/contract-information",
    "method": "transferContractInformationToVikarina",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Integrations",
    "typeScriptTag": "integrations",
    "description": "Contract (custom field) information transfer from Sage HR to Vikarina",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/vikarina/appointments",
    "method": "transferAppointmentInfo",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Integrations",
    "typeScriptTag": "integrations",
    "description": "New appointment (position changes) information transfer from Sage HR to Vikarina",
    "parameters": [
      {
        "name": "startDate",
        "schema": "string",
        "description": "",
        "example": "2020-01-01"
      },
      {
        "name": "endDate",
        "schema": "string",
        "description": "",
        "example": "2020-02-01"
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
    "url": "/vikarina/salaries",
    "method": "transferSalaryInformation",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Integrations",
    "typeScriptTag": "integrations",
    "description": "Salary information transfer from Sage HR to Vikarina to Vikarina",
    "parameters": [
      {
        "name": "startDate",
        "schema": "string",
        "description": "",
        "example": "2020-01-01"
      },
      {
        "name": "endDate",
        "schema": "string",
        "description": "",
        "example": "2020-02-01"
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
    "url": "/vikarina/bank-accounts",
    "method": "transferBankAccountInfo",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Integrations",
    "typeScriptTag": "integrations",
    "description": "Bank account information transfer (Custom field) from Sage HR to Vikarina",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/vikarina/terminated-employees",
    "method": "transferTerminationInfoToVikarina",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Integrations",
    "typeScriptTag": "integrations",
    "description": "Termination information transfer from Sage HR to Vikarina",
    "parameters": [
      {
        "name": "startDate",
        "schema": "string",
        "description": "",
        "example": "2020-01-01"
      },
      {
        "name": "endDate",
        "schema": "string",
        "description": "",
        "example": "2020-02-01"
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
    "url": "/vikarina/unused-days",
    "method": "transferUnusedVacationDaysToVikarina",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Integrations",
    "typeScriptTag": "integrations",
    "description": "Unused vacation days transfer from Sage HR to Vikarina",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/vikarina/leave-types",
    "method": "transferLeaveInformationToVikarina",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Integrations",
    "typeScriptTag": "integrations",
    "description": "Leaves information transfer from Sage HR to Vikarina",
    "parameters": [
      {
        "name": "startDate",
        "schema": "string",
        "description": "",
        "example": "2020-01-01"
      },
      {
        "name": "endDate",
        "schema": "string",
        "description": "",
        "example": "2020-02-01"
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
    "url": "/vikarina/timesheets",
    "method": "transferTimeScheduleInformation",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Integrations",
    "typeScriptTag": "integrations",
    "description": "Time Schedule information transfer from Sage HR to Vikarina",
    "parameters": [
      {
        "name": "startDate",
        "schema": "string",
        "description": "",
        "example": "2020-01-01"
      },
      {
        "name": "endDate",
        "schema": "string",
        "description": "",
        "example": "2020-02-01"
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
    "url": "/vikarina/bonuses",
    "method": "sendBonusesToVikarina",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Integrations",
    "typeScriptTag": "integrations",
    "description": "Sending bonuses [payed once] to Vikarina",
    "parameters": [
      {
        "name": "startDate",
        "schema": "string",
        "description": "",
        "example": "2020-01-01"
      },
      {
        "name": "endDate",
        "schema": "string",
        "description": "",
        "example": "2020-02-01"
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
      apiTitle="Sage HR API"
      apiBaseUrl="https://subdomain.sage.hr/api"
      apiVersion="1.0"
      endpoints={47}
      sdkMethods={100}
      schemas={70}
      parameters={165}
      difficulty="Medium"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/sage/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/sage/openapi.yaml"
      developerDocumentation="developer.sage.com/hr/reference/api-ref/"
    />
  );
}
  