import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function FactorialTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="factorial-typescript-sdk"
      metaDescription={`With over 8,000 clients worldwide, Factorial is one of the leading HR softwares for SMEs. We provide intuitive HR solutions that automate and centralize administrative tasks to provide insights and help your business run smoothly.

Factorial was founded in 2016 in Barcelona and experienced quick growth due to the fact that so many businesses face the same challenge: wasting time on never-ending manual tasks. A few years later, in 2022, Factorial became a Unicorn, propelling us forward to continue on our mission of providing your business with a one-stop-shop solution for all people processes. 

Factorial offers solutions like time management, talent management, recruitment, expenses, analytics, document management to name a few. Our all-in-one, user friendly platform makes it easier for businesses to focus on matters, the people within it.`}
      company="Factorial"
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/factorial/logo.png"
      companyKebabCase="factorial"
      clientNameCamelCase="factorial"
      homepage="factorialhr.com"
      lastUpdated={new Date("2024-03-26T00:19:23.016Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/factorial/favicon.png"
      // Missing contactUrl
      // Missing contactEmail
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/factorial/imagePreview.png"
      GettingStarted={GettingStarted}
      FirstRequest={FirstRequest}
      categories={["hr","time_management","talent_management","recruitment","document_management","hr_software","human_resources","hr_platform","hr_solutions","hr_tech","hrms","people_management_platform","hr_systems","payroll_services","payroll_tax_services","benefits_administration","benefits","employee_engagement","insurance","payroll"]}
      methods={[
  {
    "url": "/v1/employees",
    "method": "getEmployees",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Employee",
    "typeScriptTag": "employee",
    "description": "Get employees from a company",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/employees",
    "method": "createEmployee",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Employee",
    "typeScriptTag": "employee",
    "description": "Create employee",
    "parameters": [
      {
        "name": "email",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "bob_stone@factorial.co"
      },
      {
        "name": "first_name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Bob"
      },
      {
        "name": "last_name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Stone"
      },
      {
        "name": "birthday_on",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "2000-01-08"
      },
      {
        "name": "start_date",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "2022-01-08"
      },
      {
        "name": "regular_access_starts_on",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "2022-01-08"
      },
      {
        "name": "manager_id",
        "schema": "integer",
        "required": false,
        "description": "",
        "example": 5
      },
      {
        "name": "role",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "basic"
      },
      {
        "name": "timeoff_manager_id",
        "schema": "integer",
        "required": false,
        "description": "",
        "example": 5
      },
      {
        "name": "terminated_on",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "2022-01-08"
      },
      {
        "name": "termination_reason",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "behaviour"
      },
      {
        "name": "company_identifier",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "124ABC"
      },
      {
        "name": "phone_number",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "622564089"
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
    "url": "/v1/employees/{id}",
    "method": "getEmployeeById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Employee",
    "typeScriptTag": "employee",
    "description": "Get employee",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "(Required)",
        "example": 5
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
    "url": "/v1/employees/{id}",
    "method": "updateById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Employee",
    "typeScriptTag": "employee",
    "description": "Update employee",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "(Required)",
        "example": 5
      },
      {
        "name": "first_name",
        "schema": "string",
        "description": "",
        "example": "Bob"
      },
      {
        "name": "last_name",
        "schema": "string",
        "description": "",
        "example": "Stone"
      },
      {
        "name": "manager_id",
        "schema": "integer",
        "description": "",
        "example": 5
      },
      {
        "name": "role",
        "schema": "string",
        "description": "",
        "example": "basic"
      },
      {
        "name": "timeoff_manager_id",
        "schema": "integer",
        "description": "",
        "example": 5
      },
      {
        "name": "company_identifier",
        "schema": "string",
        "description": "",
        "example": "124ABC"
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
    "url": "/v1/employees/{id}/terminate",
    "method": "terminateEmployee",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Employee",
    "typeScriptTag": "employee",
    "description": "Terminate employee",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "(Required)",
        "example": 5
      },
      {
        "name": "terminated_on",
        "schema": "string",
        "description": "",
        "example": "1992-05-02"
      },
      {
        "name": "termination_reason",
        "schema": "string",
        "description": "",
        "example": "Behaviour"
      },
      {
        "name": "termination_assigned_manager_id",
        "schema": "integer",
        "description": "",
        "example": 5
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
    "url": "/v1/employees/{id}/unterminate",
    "method": "unterminateEmployee",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Employee",
    "typeScriptTag": "employee",
    "description": "Unterminate employee",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "(Required)",
        "example": 5
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
    "url": "/v2/core/employees",
    "method": "getAllEmployees",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Employee",
    "typeScriptTag": "employee",
    "description": "Get employees from a company",
    "parameters": [
      {
        "name": "fullTextName",
        "schema": "string",
        "description": "Retrieves the list of employees by full names",
        "example": "Bob Stone"
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
    "url": "/v2/core/employees",
    "method": "createNew",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Employee",
    "typeScriptTag": "employee",
    "description": "Create employee",
    "parameters": [
      {
        "name": "email",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "bob_stone@factorial.co"
      },
      {
        "name": "first_name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Bob"
      },
      {
        "name": "last_name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Stone"
      },
      {
        "name": "birthday_on",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "2000-01-08"
      },
      {
        "name": "role",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "basic"
      },
      {
        "name": "gender",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "female"
      },
      {
        "name": "identifier",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Y7729503E"
      },
      {
        "name": "identifier_type",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "nie"
      },
      {
        "name": "nationality",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "es"
      },
      {
        "name": "bank_number",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "ES09 4595 6109 8115 7760 8354"
      },
      {
        "name": "country",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "es"
      },
      {
        "name": "city",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Barcelona"
      },
      {
        "name": "state",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Barcelona"
      },
      {
        "name": "postal_code",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "08007"
      },
      {
        "name": "address_line_1",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "c/ Tallers 123"
      },
      {
        "name": "address_line_2",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Atic 5"
      },
      {
        "name": "swift_bic",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "1234567890"
      },
      {
        "name": "company_id",
        "schema": "integer",
        "required": false,
        "description": "",
        "example": 5
      },
      {
        "name": "manager_id",
        "schema": "integer",
        "required": false,
        "description": "",
        "example": 5
      },
      {
        "name": "location_id",
        "schema": "integer",
        "required": false,
        "description": "",
        "example": 5
      },
      {
        "name": "timeoff_manager_id",
        "schema": "integer",
        "required": false,
        "description": "",
        "example": 5
      },
      {
        "name": "legal_entity_id",
        "schema": "integer",
        "required": false,
        "description": "",
        "example": 765
      },
      {
        "name": "company_identifier",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "124ABC"
      },
      {
        "name": "phone_number",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "622564089"
      },
      {
        "name": "social_security_number",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "223948780514"
      },
      {
        "name": "tax_id",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "121232323"
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
    "url": "/v2/core/employees/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Employee",
    "typeScriptTag": "employee",
    "description": "Get employee",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "(Required)",
        "example": 5
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
    "url": "/v2/core/employees/{id}",
    "method": "updateEmployeeById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Employee",
    "typeScriptTag": "employee",
    "description": "Update employee",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "(Required)",
        "example": 5
      },
      {
        "name": "email",
        "schema": "string",
        "description": "",
        "example": "bob_stone@factorial.co"
      },
      {
        "name": "first_name",
        "schema": "string",
        "description": "",
        "example": "Bob"
      },
      {
        "name": "last_name",
        "schema": "string",
        "description": "",
        "example": "Stone"
      },
      {
        "name": "birthday_on",
        "schema": "string",
        "description": "",
        "example": "2000-01-08"
      },
      {
        "name": "role",
        "schema": "string",
        "description": "",
        "example": "basic"
      },
      {
        "name": "gender",
        "schema": "string",
        "description": "",
        "example": "female"
      },
      {
        "name": "identifier",
        "schema": "string",
        "description": "",
        "example": "Y7729503E"
      },
      {
        "name": "identifier_type",
        "schema": "string",
        "description": "",
        "example": "nie"
      },
      {
        "name": "nationality",
        "schema": "string",
        "description": "",
        "example": "es"
      },
      {
        "name": "bank_number",
        "schema": "string",
        "description": "",
        "example": "ES09 4595 6109 8115 7760 8354"
      },
      {
        "name": "country",
        "schema": "string",
        "description": "",
        "example": "es"
      },
      {
        "name": "city",
        "schema": "string",
        "description": "",
        "example": "Barcelona"
      },
      {
        "name": "state",
        "schema": "string",
        "description": "",
        "example": "Barcelona"
      },
      {
        "name": "postal_code",
        "schema": "string",
        "description": "",
        "example": "08007"
      },
      {
        "name": "address_line_1",
        "schema": "string",
        "description": "",
        "example": "c/ Tallers 123"
      },
      {
        "name": "address_line_2",
        "schema": "string",
        "description": "",
        "example": "Atic 5"
      },
      {
        "name": "swift_bic",
        "schema": "string",
        "description": "",
        "example": "1234567890"
      },
      {
        "name": "manager_id",
        "schema": "integer",
        "description": "",
        "example": 5
      },
      {
        "name": "location_id",
        "schema": "integer",
        "description": "",
        "example": 5
      },
      {
        "name": "timeoff_manager_id",
        "schema": "integer",
        "description": "",
        "example": 5
      },
      {
        "name": "phone_number",
        "schema": "string",
        "description": "",
        "example": "678901234"
      },
      {
        "name": "social_security_number",
        "schema": "integer",
        "description": "",
        "example": 223948780514
      },
      {
        "name": "legal_entity_id",
        "schema": "integer",
        "description": "",
        "example": 235
      },
      {
        "name": "company_identifier",
        "schema": "string",
        "description": "",
        "example": "124ABC"
      },
      {
        "name": "contact_name",
        "schema": "string",
        "description": "",
        "example": "John"
      },
      {
        "name": "contact_number",
        "schema": "string",
        "description": "",
        "example": "678901234"
      },
      {
        "name": "tax_id",
        "schema": "string",
        "description": "",
        "example": "121232323"
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
    "url": "/v2/core/employees/{id}/invite",
    "method": "sendInvitationEmail",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Employee",
    "typeScriptTag": "employee",
    "description": "Invite employee",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "(Required)",
        "example": 5
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
    "url": "/v2/core/employees/{id}/email",
    "method": "changeEmail",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Employee",
    "typeScriptTag": "employee",
    "description": "Change employee email",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "(Required)",
        "example": 5
      },
      {
        "name": "email",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "bob_stone1@factorial.co"
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
    "url": "/v2/core/employees/{id}/terminate",
    "method": "setTerminationDetails",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Employee",
    "typeScriptTag": "employee",
    "description": "Terminate employee",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "(Required)",
        "example": 5
      },
      {
        "name": "terminated_on",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "2023-02-08"
      },
      {
        "name": "termination_reason",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "a termination reason"
      },
      {
        "name": "termination_reason_type",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "termination_assigned_manager_id",
        "schema": "integer",
        "required": false,
        "description": "",
        "example": 5
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
    "url": "/v2/core/employees/{id}/unterminate",
    "method": "unterminatePost",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Employee",
    "typeScriptTag": "employee",
    "description": "Unterminate employee",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "(Required)",
        "example": 5
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
    "url": "/v2/core/webhooks",
    "method": "subscribedWebhooksList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "User",
    "typeScriptTag": "user",
    "description": "Get a list of all subscribed webhooks for current user",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/core/webhooks",
    "method": "subscriptionCreate",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Webhook",
    "typeScriptTag": "webhook",
    "description": "Create a webhook",
    "parameters": [
      {
        "name": "subscription_type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Employees::Events::EmployeeCreated"
      },
      {
        "name": "target_url",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "https://webhook.site/48103127-b1f6-3215-8f18-60fdbc013e3f"
      },
      {
        "name": "name",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "creating employee webhook"
      },
      {
        "name": "challenge",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "9288376100399000"
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
    "url": "/v2/core/webhooks/{id}",
    "method": "deleteWebhook",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Webhook",
    "typeScriptTag": "webhook",
    "description": "Delete a Webhook",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "(Required)",
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
    "url": "/v2/core/webhooks/{id}",
    "method": "updateWebhookById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Webhook",
    "typeScriptTag": "webhook",
    "description": "Update a Webhook",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "(Required)",
        "example": 1
      },
      {
        "name": "target_url",
        "schema": "string",
        "description": "",
        "example": "Employees::Events::EmployeeCreated"
      },
      {
        "name": "name",
        "schema": "string",
        "description": "",
        "example": "creating employee webhook"
      },
      {
        "name": "challenge",
        "schema": "string",
        "description": "",
        "example": "9288376100399000"
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
    "url": "/v1/me",
    "method": "infoGet",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "User",
    "typeScriptTag": "user",
    "description": "Get information about current user",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      }
    ]
  },
  {
    "url": "/v1/locations",
    "method": "getAllLocations",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Location",
    "typeScriptTag": "location",
    "description": "Get all locations",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/locations/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Location",
    "typeScriptTag": "location",
    "description": "Get a Location by ID",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "(Required)",
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
    "url": "/v1/company_holidays",
    "method": "getAllCompanyHolidays",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Holiday",
    "typeScriptTag": "holiday",
    "description": "Get all company holidays",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/company_holidays/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Holiday",
    "typeScriptTag": "holiday",
    "description": "Get a company holiday by ID",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "(Required)",
        "example": 5
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
    "url": "/v1/core/teams",
    "method": "getAllTeams",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Team",
    "typeScriptTag": "team",
    "description": "Get teams",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/core/teams",
    "method": "createNewTeam",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Team",
    "typeScriptTag": "team",
    "description": "Create a team",
    "parameters": [
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Team description"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Management"
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
    "url": "/v1/core/teams/{id}",
    "method": "removeTeam",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Team",
    "typeScriptTag": "team",
    "description": "Delete a team",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "(Required)",
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
    "url": "/v1/core/teams/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Team",
    "typeScriptTag": "team",
    "description": "Get a team by ID",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "(Required)",
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
    "url": "/v1/core/teams/{id}",
    "method": "updateTeamById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Team",
    "typeScriptTag": "team",
    "description": "Update a team",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "(Required)",
        "example": 1
      },
      {
        "name": "description",
        "schema": "string",
        "description": "",
        "example": "Team description"
      },
      {
        "name": "name",
        "schema": "string",
        "description": "",
        "example": "Management"
      },
      {
        "name": "avatar",
        "schema": "string",
        "description": "",
        "example": "https://api.factorialhr.com/rails/active_storage/representations/redirect/bob.png"
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
    "url": "/v1/core/teams/{id}/employees/{employee_id}",
    "method": "unassignToTeam",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Employee",
    "typeScriptTag": "employee",
    "description": "Unassign employee to team",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "(Required)",
        "example": 1
      },
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "(Required)",
        "example": 5
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
    "url": "/v1/core/teams/{id}/employees/{employee_id}",
    "method": "assignToTeam",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Employee",
    "typeScriptTag": "employee",
    "description": "Assign an employee to a team",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "(Required)",
        "example": 1
      },
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "(Required)",
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
    "url": "/v1/core/teams/{id}/employees/{employee_id}",
    "method": "updateInTeam",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Employee",
    "typeScriptTag": "employee",
    "description": "Update an employee in a team",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "(Required)",
        "example": 1
      },
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "(Required)",
        "example": 1
      },
      {
        "name": "lead",
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
    "url": "/v1/core/folders",
    "method": "getByNameAndStatus",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Folder",
    "typeScriptTag": "folder",
    "description": "Get Folders",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "description": "Retrieves the list of folder by name",
        "example": "payment"
      },
      {
        "name": "active",
        "schema": "boolean",
        "description": "Retrieves the list of employees by active status",
        "example": "true"
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
    "url": "/v1/core/folders",
    "method": "createNewFolder",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Folder",
    "typeScriptTag": "folder",
    "description": "Create a Folder",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "payment"
      },
      {
        "name": "active",
        "schema": "boolean",
        "required": false,
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
    "url": "/v1/core/folders/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Folder",
    "typeScriptTag": "folder",
    "description": "Get a Folder by ID",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "(Required)",
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
    "url": "/v1/core/folders/{id}",
    "method": "updateFolderById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Folder",
    "typeScriptTag": "folder",
    "description": "Update a folder",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "(Required)",
        "example": 1
      },
      {
        "name": "name",
        "schema": "string",
        "description": "",
        "example": "payment"
      },
      {
        "name": "active",
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
    "url": "/v1/core/documents",
    "method": "listGivenEmployeeOrFolder",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Document",
    "typeScriptTag": "document",
    "description": "Get a collection of Documents",
    "parameters": [
      {
        "name": "employeeId",
        "schema": "integer",
        "description": "Retrieves the list of documents by employee id",
        "example": 1
      },
      {
        "name": "folderId",
        "schema": "integer",
        "description": "Retrieves the list of documents by folder id",
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
    "url": "/v1/core/documents",
    "method": "createNewDocument",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Document",
    "typeScriptTag": "document",
    "description": "Create a Document",
    "parameters": [
      {
        "name": "employee_id",
        "schema": "integer",
        "required": false,
        "description": "",
        "example": 1
      },
      {
        "name": "folder_id",
        "schema": "integer",
        "required": false,
        "description": "",
        "example": 1
      },
      {
        "name": "request_esignature",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": true
      },
      {
        "name": "filename",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "payslip.pdf"
      },
      {
        "name": "public",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": true
      },
      {
        "name": "signees",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "file",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "payslip.pdf"
      },
      {
        "name": "is_pending_assignment",
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
      }
    ]
  },
  {
    "url": "/v1/core/documents/{id}",
    "method": "deleteById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Document",
    "typeScriptTag": "document",
    "description": "Delete a Document by ID",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "(Required)",
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
    "url": "/v1/core/documents/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Document",
    "typeScriptTag": "document",
    "description": "Get a Document by ID",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "(Required)",
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
    "url": "/v1/core/documents/{id}",
    "method": "updateById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Document",
    "typeScriptTag": "document",
    "description": "Update a Document by ID",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "(Required)",
        "example": 1
      },
      {
        "name": "public",
        "schema": "boolean",
        "description": "",
        "example": true
      },
      {
        "name": "employee_id",
        "schema": "integer",
        "description": "",
        "example": 1
      },
      {
        "name": "folder_id",
        "schema": "integer",
        "description": "",
        "example": 1
      },
      {
        "name": "request_esignature",
        "schema": "boolean",
        "description": "",
        "example": false
      },
      {
        "name": "signees",
        "schema": "array",
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
    "url": "/v1/core/legal_entities",
    "method": "listLegalEntities",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "LegalEntity",
    "typeScriptTag": "legalEntity",
    "description": "Get a collection of Legal Entities",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/core/legal_entities/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "LegalEntity",
    "typeScriptTag": "legalEntity",
    "description": "Get a Legal Entity by ID",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "(Required)",
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
    "url": "/v1/core/keys",
    "method": "getCollection",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Key",
    "typeScriptTag": "key",
    "description": "Get a collection of Keys",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/core/keys",
    "method": "createNew",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Key",
    "typeScriptTag": "key",
    "description": "Create a Key",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": 1
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
    "url": "/v1/core/keys/{id}",
    "method": "deleteById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Key",
    "typeScriptTag": "key",
    "description": "Delete an API Key by ID",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "(Required)",
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
    "url": "/v1/core/tasks",
    "method": "getAllTasks",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Task",
    "typeScriptTag": "task",
    "description": "Get Tasks",
    "parameters": [
      {
        "name": "assigneeId",
        "schema": "integer",
        "description": "Retrieves the list of tasks by assignee",
        "example": 3
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
    "url": "/v1/core/tasks",
    "method": "createNewTask",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Task",
    "typeScriptTag": "task",
    "description": "Create a Task",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Upload information task"
      },
      {
        "name": "due_on",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "2022-05-18"
      },
      {
        "name": "content",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Update information due date to either following weekday or following friday"
      },
      {
        "name": "assignee_ids",
        "schema": "array",
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
    "url": "/v1/core/tasks/{id}",
    "method": "deleteById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Task",
    "typeScriptTag": "task",
    "description": "Delete a Task by ID",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "(Required)",
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
    "url": "/v1/core/tasks/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Task",
    "typeScriptTag": "task",
    "description": "Get a Task by ID",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "(Required)",
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
    "url": "/v1/core/tasks/{id}",
    "method": "updateById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Task",
    "typeScriptTag": "task",
    "description": "Update a Task by ID",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "(Required)",
        "example": 1
      },
      {
        "name": "due_on",
        "schema": "string",
        "description": "",
        "example": "2022-05-18"
      },
      {
        "name": "name",
        "schema": "string",
        "description": "",
        "example": "Upload information task"
      },
      {
        "name": "content",
        "schema": "string",
        "description": "",
        "example": "Update information due date to either following weekday or following friday"
      },
      {
        "name": "assignee_ids",
        "schema": "array",
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
    "url": "/v1/core/tasks/{id}/resolve",
    "method": "resolveById",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Task",
    "typeScriptTag": "task",
    "description": "Resolve Task by ID",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "(Required)",
        "example": 1
      },
      {
        "name": "done",
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
    "url": "/v1/core/tasks/{id}/copy",
    "method": "copyById",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Task",
    "typeScriptTag": "task",
    "description": "Copy Task by ID",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "(Required)",
        "example": 1
      },
      {
        "name": "name",
        "schema": "string",
        "description": "",
        "example": "Upload information task"
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
    "url": "/v1/core/tasks/{id}/files",
    "method": "getFiles",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Task",
    "typeScriptTag": "task",
    "description": "Get files from a Task",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "(Required)",
        "example": 15
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
    "url": "/v1/core/tasks/{id}/files",
    "method": "addFileToTask",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Task",
    "typeScriptTag": "task",
    "description": "Create a File in a Task",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "(Required)",
        "example": 15
      },
      {
        "name": "file",
        "schema": "string",
        "description": "",
        "example": "task_file.pdf"
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
    "url": "/v1/core/tasks/{task_id}/files/{id}",
    "method": "getFile",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Task",
    "typeScriptTag": "task",
    "description": "Get a file from one Task",
    "parameters": [
      {
        "name": "taskId",
        "schema": "string",
        "required": true,
        "description": "(Required)",
        "example": 15
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "(Required)",
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
    "url": "/v1/core/tasks/{task_id}/files/{id}",
    "method": "deleteFileInTask",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Task",
    "typeScriptTag": "task",
    "description": "Delete a File in a Task",
    "parameters": [
      {
        "name": "taskId",
        "schema": "string",
        "required": true,
        "description": "(Required)",
        "example": 15
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "(Required)",
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
    "url": "/v1/time/shifts",
    "method": "getFromCompany",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Shift",
    "typeScriptTag": "shift",
    "description": "Get shifts (time registries) from a company",
    "parameters": [
      {
        "name": "year",
        "schema": "string",
        "description": "It should be valid year in the format `YYYY`",
        "example": "2022"
      },
      {
        "name": "month",
        "schema": "string",
        "description": "It should be valid month in the calendar ranging rom `01 to 12`. The month format is `MM`",
        "example": "11"
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
    "url": "/v1/time/shifts/clock_in",
    "method": "createClockInShift",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Shift",
    "typeScriptTag": "shift",
    "description": "Clock in",
    "parameters": [
      {
        "name": "employee_id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 5
      },
      {
        "name": "now",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "2019-01-01T12:12:01-02:00"
      },
      {
        "name": "observations",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "New observation"
      },
      {
        "name": "location_type",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "office"
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
    "url": "/v1/time/shifts/clock_out",
    "method": "updateClockOutShift",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Shift",
    "typeScriptTag": "shift",
    "description": "Clock out",
    "parameters": [
      {
        "name": "employee_id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 5
      },
      {
        "name": "now",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "2019-01-01T12:12:01-02:00"
      },
      {
        "name": "observations",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Updated observation"
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
    "url": "/v1/time/shifts/toggle",
    "method": "toggleShiftStatus",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Shift",
    "typeScriptTag": "shift",
    "description": "Toggle",
    "parameters": [
      {
        "name": "employee_id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 5
      },
      {
        "name": "now",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "2019-01-01T12:12:01-02:00"
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
    "url": "/v1/time/shifts/{id}",
    "method": "deleteShiftById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Shift",
    "typeScriptTag": "shift",
    "description": "Delete Shift (time registry)",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "(Required)",
        "example": 5
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
    "url": "/v1/time/shifts/{id}",
    "method": "updateShift",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Shift",
    "typeScriptTag": "shift",
    "description": "Update Shift (time registry)",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "(Required)",
        "example": 5
      },
      {
        "name": "clock_in",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "2019-01-01T12:12:01-02:00"
      },
      {
        "name": "clock_out",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "2019-01-01T12:12:01-02:00"
      },
      {
        "name": "observations",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "First Shift"
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
    "url": "/v2/time/attendance",
    "method": "getCompanyAttendance",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Attendance",
    "typeScriptTag": "attendance",
    "description": "Get attendance from a company",
    "parameters": [
      {
        "name": "employeeIds[]",
        "schema": "array",
        "description": "Employees id array",
        "example": [
          1
        ]
      },
      {
        "name": "dateFrom",
        "schema": "string",
        "description": "It should be a valid date following the format YYYY-MM-DD",
        "example": "2023-01-03"
      },
      {
        "name": "dateTo",
        "schema": "string",
        "description": "It should be a valid date following the format YYYY-MM-DD",
        "example": "2023-01-04"
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
    "url": "/v2/time/attendance",
    "method": "createNew",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Attendance",
    "typeScriptTag": "attendance",
    "description": "Create Attendance",
    "parameters": [
      {
        "name": "employee_id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 5
      },
      {
        "name": "clock_in",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "2019-01-01T12:12:01-02:00"
      },
      {
        "name": "clock_out",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "2019-01-01T14:12:01-02:00"
      },
      {
        "name": "observations",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "First Attendance"
      },
      {
        "name": "location_type",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "office"
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
    "url": "/v1/time/leave_types",
    "method": "getTypes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Leave",
    "typeScriptTag": "leave",
    "description": "Get Leave types",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/time/leave_types",
    "method": "typeCreate",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Leave",
    "typeScriptTag": "leave",
    "description": "Create a Leave Type",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "holiday"
      },
      {
        "name": "color",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "07A2AD"
      },
      {
        "name": "accrues",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": true
      },
      {
        "name": "active",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": true
      },
      {
        "name": "approval_required",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": false
      },
      {
        "name": "attachment",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": false
      },
      {
        "name": "visibility",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": true
      },
      {
        "name": "workable",
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
      }
    ]
  },
  {
    "url": "/v1/time/leave_types/{id}",
    "method": "updateType",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Leave",
    "typeScriptTag": "leave",
    "description": "Update a Leave Type",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "(Required)",
        "example": 5
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Special appointment"
      },
      {
        "name": "color",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FFFFFF"
      },
      {
        "name": "accrues",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": false
      },
      {
        "name": "active",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": true
      },
      {
        "name": "approval_required",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": false
      },
      {
        "name": "attachment",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": true
      },
      {
        "name": "visibility",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": true
      },
      {
        "name": "workable",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": true
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
    "url": "/v1/time/leaves",
    "method": "getCompanyLeaves",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Leave",
    "typeScriptTag": "leave",
    "description": "Get Leaves",
    "parameters": [
      {
        "name": "employeeIds[]",
        "schema": "array",
        "description": "Employees id array",
        "example": [
          1
        ]
      },
      {
        "name": "leaveTypeIds[]",
        "schema": "array",
        "description": "Leave type id array",
        "example": [
          1
        ]
      },
      {
        "name": "from",
        "schema": "string",
        "description": "It should be a valid date following the format YYYY-MM-DD",
        "example": "2023-01-03"
      },
      {
        "name": "to",
        "schema": "string",
        "description": "It should be a valid date following the format YYYY-MM-DD",
        "example": "2023-01-04"
      },
      {
        "name": "includeLeaveType",
        "schema": "boolean",
        "description": "Include leave type name",
        "default": false
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
    "url": "/v1/time/leaves",
    "method": "createNewLeave",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Leave",
    "typeScriptTag": "leave",
    "description": "Create a Leave",
    "parameters": [
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Medical appointment for 4 hours"
      },
      {
        "name": "start_on",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "2022-03-03"
      },
      {
        "name": "finish_on",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "2022-03-03"
      },
      {
        "name": "employee_id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 5
      },
      {
        "name": "leave_type_id",
        "schema": "integer",
        "required": false,
        "description": "",
        "example": 1
      },
      {
        "name": "half_day",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "end_of_day"
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
    "url": "/v1/time/leaves/{id}",
    "method": "deleteById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Leave",
    "typeScriptTag": "leave",
    "description": "Delete a Leave by ID",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "(Required)",
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
    "url": "/v1/time/leaves/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Leave",
    "typeScriptTag": "leave",
    "description": "Get a Leave by ID",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "(Required)",
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
    "url": "/v1/time/leaves/{id}",
    "method": "updateLeaveById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Leave",
    "typeScriptTag": "leave",
    "description": "Update a Leave",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "(Required)",
        "example": 1
      },
      {
        "name": "description",
        "schema": "string",
        "description": "",
        "example": "Medical appointment for 4 hours"
      },
      {
        "name": "employee_id",
        "schema": "integer",
        "description": "",
        "example": 7
      },
      {
        "name": "finish_on",
        "schema": "integer",
        "description": "",
        "example": 5
      },
      {
        "name": "start_on",
        "schema": "string",
        "description": "",
        "example": "basic"
      },
      {
        "name": "half_day",
        "schema": "string",
        "description": "",
        "example": "end_of_day"
      },
      {
        "name": "leave_type_id",
        "schema": "integer",
        "description": "",
        "example": 3
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
    "url": "/v2/time/leaves",
    "method": "getCompanyLeaves",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Leave",
    "typeScriptTag": "leave",
    "description": "Get Leaves",
    "parameters": [
      {
        "name": "employeeIds[]",
        "schema": "array",
        "description": "Employees id array",
        "example": [
          1
        ]
      },
      {
        "name": "leaveTypeIds[]",
        "schema": "array",
        "description": "Leave type id array",
        "example": [
          1
        ]
      },
      {
        "name": "from",
        "schema": "string",
        "description": "It should be a valid date following the format YYYY-MM-DD",
        "example": "2023-01-03"
      },
      {
        "name": "to",
        "schema": "string",
        "description": "It should be a valid date following the format YYYY-MM-DD",
        "example": "2023-01-04"
      },
      {
        "name": "includeLeaveType",
        "schema": "boolean",
        "description": "Include leave type name",
        "default": false
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
    "url": "/v2/time/leaves",
    "method": "createNewLeave",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Leave",
    "typeScriptTag": "leave",
    "description": "Create a Leave",
    "parameters": [
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Medical appointment for 4 hours"
      },
      {
        "name": "start_on",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "2022-03-03"
      },
      {
        "name": "finish_on",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "2022-03-03"
      },
      {
        "name": "employee_id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 5
      },
      {
        "name": "leave_type_id",
        "schema": "integer",
        "required": false,
        "description": "",
        "example": 1
      },
      {
        "name": "half_day",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "end_of_day"
      },
      {
        "name": "start_time",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "14:00"
      },
      {
        "name": "hours_amount_in_cents",
        "schema": "integer",
        "required": false,
        "description": "",
        "example": 400
      },
      {
        "name": "medical_leave_type",
        "schema": "integer",
        "required": false,
        "description": "",
        "example": 400
      },
      {
        "name": "effective_on",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "2022-03-03"
      },
      {
        "name": "medical_discharge_reason",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "medical appointment"
      },
      {
        "name": "colegiate_number",
        "schema": "integer",
        "required": false,
        "description": "",
        "example": 3
      },
      {
        "name": "has_previous_relapse",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": false
      },
      {
        "name": "relapse_leave_id",
        "schema": "integer",
        "required": false,
        "description": "",
        "example": 3
      },
      {
        "name": "relapse_on",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "2022-03-03"
      },
      {
        "name": "accident_on",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "2022-03-01"
      },
      {
        "name": "paternity_birth_on",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "2022-03-02"
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
    "url": "/v2/time/leaves/{id}",
    "method": "deleteById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Leave",
    "typeScriptTag": "leave",
    "description": "Delete a Leave by ID",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "(Required)",
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
    "url": "/v2/time/leaves/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Leave",
    "typeScriptTag": "leave",
    "description": "Get a Leave by ID",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "(Required)",
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
    "url": "/v2/time/leaves/{id}",
    "method": "updateById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Leave",
    "typeScriptTag": "leave",
    "description": "Update a Leave",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "(Required)",
        "example": 1
      },
      {
        "name": "description",
        "schema": "string",
        "description": "",
        "example": "Medical appointment for 4 hours"
      },
      {
        "name": "employee_id",
        "schema": "integer",
        "description": "",
        "example": 7
      },
      {
        "name": "finish_on",
        "schema": "string",
        "description": "",
        "example": "2022-03-03"
      },
      {
        "name": "start_on",
        "schema": "string",
        "description": "",
        "example": "2022-03-03"
      },
      {
        "name": "start_time",
        "schema": "string",
        "description": "",
        "example": "12:00"
      },
      {
        "name": "hour_amount_in_cents",
        "schema": "integer",
        "description": "",
        "example": 400
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
    "url": "/v1/payroll/family_situation",
    "method": "listFamilySituations",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Employee",
    "typeScriptTag": "employee",
    "description": "Get all family situations - only FR employees",
    "parameters": [
      {
        "name": "employeeId",
        "schema": "string",
        "description": "Get all family situations given an employee",
        "example": 3
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
    "url": "/v1/payroll/family_situation",
    "method": "createNew",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "FamilySituation",
    "typeScriptTag": "familySituation",
    "description": "Create a Family Situation",
    "parameters": [
      {
        "name": "employee_id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 3
      },
      {
        "name": "civil_status",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "married"
      },
      {
        "name": "number_of_dependants",
        "schema": "integer",
        "required": false,
        "description": "",
        "example": 1
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
    "url": "/v1/payroll/family_situation/{id}",
    "method": "updateFamilySituation",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "FamilySituation",
    "typeScriptTag": "familySituation",
    "description": "Update a Family Situation",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "(Required)",
        "example": 3
      },
      {
        "name": "employee_id",
        "schema": "integer",
        "description": "",
        "example": 3
      },
      {
        "name": "civil_status",
        "schema": "string",
        "description": "",
        "example": "married"
      },
      {
        "name": "number_of_dependants",
        "schema": "integer",
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
    "url": "/v1/custom_fields",
    "method": "getFieldsByGroup",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "CustomField",
    "typeScriptTag": "customField",
    "description": "Get Custom Fields",
    "parameters": [
      {
        "name": "fieldGroup",
        "schema": "string",
        "required": true,
        "description": "Available options: employees-questions (Employee's fields) time-tracking-projects (Shift's project)' contract-versions (Contract versions)'",
        "example": "employees-questions"
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
    "url": "/v1/custom_fields/values",
    "method": "getInstanceValue",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "CustomFieldValue",
    "typeScriptTag": "customFieldValue",
    "description": "Given a custom field, get the value for a specific instance",
    "parameters": [
      {
        "name": "fieldId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 1
      },
      {
        "name": "instanceId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 23
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
    "url": "/v1/custom_fields/values",
    "method": "createCustomValue",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "CustomFieldValue",
    "typeScriptTag": "customFieldValue",
    "description": "Create a value for a custom field",
    "parameters": [
      {
        "name": "fieldId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 1
      },
      {
        "name": "instanceId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 23
      },
      {
        "name": "value",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "somelinktomyportfolio.com"
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
    "url": "/v1/posts",
    "method": "listPosts",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Post",
    "typeScriptTag": "post",
    "description": "Get Posts",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "Internal Server Error"
      }
    ]
  },
  {
    "url": "/v1/posts",
    "method": "createNewPost",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Post",
    "typeScriptTag": "post",
    "description": "Create a Post",
    "parameters": [
      {
        "name": "title",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "New Post"
      },
      {
        "name": "description",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "description"
      },
      {
        "name": "posts_group_id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 1
      },
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "first_day"
      },
      {
        "name": "published_at",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "2022-09-08T00:00:00.000Z"
      },
      {
        "name": "stars_at",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "2022-09-08T00:00:00.000Z"
      },
      {
        "name": "ends_at",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "2022-09-08T00:00:00.000Z"
      },
      {
        "name": "location",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Green park"
      },
      {
        "name": "target_id",
        "schema": "integer",
        "required": false,
        "description": "",
        "example": 1
      },
      {
        "name": "send_notifications",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": true
      },
      {
        "name": "image",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "allow_comments_and_reactions",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": true
      },
      {
        "name": "attachments",
        "schema": "string",
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
    "url": "/v1/posts/{id}",
    "method": "removePost",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Post",
    "typeScriptTag": "post",
    "description": "Delete Post",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "(Required)",
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
    "url": "/v1/posts/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Post",
    "typeScriptTag": "post",
    "description": "Get Post",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "(Required)",
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
    "url": "/v1/posts/{id}",
    "method": "updateExistingPost",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Post",
    "typeScriptTag": "post",
    "description": "Create a Post",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "(Required)",
        "example": 1
      },
      {
        "name": "title",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "New Post"
      },
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "description"
      },
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 1
      },
      {
        "name": "stars_at",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "2022-09-08T00:00:00.000Z"
      },
      {
        "name": "location",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Green park"
      },
      {
        "name": "send_notifications",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": true
      },
      {
        "name": "delete_cover_image",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": true
      },
      {
        "name": "image",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "allow_comments_and_reactions",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": true
      },
      {
        "name": "attachments",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "deleted_attachments",
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
    "url": "/v1/ats/job_postings",
    "method": "getAllPostings",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Post",
    "typeScriptTag": "post",
    "description": "Get all job postings",
    "parameters": [
      {
        "name": "status",
        "schema": "string",
        "description": "Job posting status",
        "example": 3
      },
      {
        "name": "teamId",
        "schema": "integer",
        "description": "An id of any teams that the ats company has in Factorial",
        "example": 3
      },
      {
        "name": "locationId",
        "schema": "string",
        "description": "An id of any location associated with the ats company in Factorial",
        "example": 1
      },
      {
        "name": "legalEntityId",
        "schema": "integer",
        "description": "An id of any legal entity associated with the company in Factorial",
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
    "url": "/v1/ats/job_postings",
    "method": "atsJobPosting",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Post",
    "typeScriptTag": "post",
    "description": "Create a Job Posting",
    "parameters": [
      {
        "name": "title",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Jr Software Developer"
      },
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Full Stack Developer"
      },
      {
        "name": "contract_type",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "temporary"
      },
      {
        "name": "remote",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": true
      },
      {
        "name": "status",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "draft"
      },
      {
        "name": "schedule_type",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "full_time"
      },
      {
        "name": "team_id",
        "schema": "integer",
        "required": false,
        "description": "",
        "example": 1
      },
      {
        "name": "location_id",
        "schema": "integer",
        "required": false,
        "description": "",
        "example": 3
      },
      {
        "name": "salary_format",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "range"
      },
      {
        "name": "salary_from_amount_in_cents",
        "schema": "integer",
        "required": false,
        "description": "",
        "example": 50000
      },
      {
        "name": "salary_to_amount_in_cents",
        "schema": "integer",
        "required": false,
        "description": "",
        "example": 60000
      },
      {
        "name": "cv_requirement",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "mandatory"
      },
      {
        "name": "cover_letter_requirement",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "mandatory"
      },
      {
        "name": "phone_requirement",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "mandatory"
      },
      {
        "name": "photo_requirement",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "mandatory"
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
    "url": "/v1/ats/job_postings/{id}",
    "method": "removeJobPosting",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Post",
    "typeScriptTag": "post",
    "description": "Delete a Job Posting",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "(Required)",
        "example": 3
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
    "url": "/v1/ats/job_postings/{id}",
    "method": "jobPostingUpdate",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Post",
    "typeScriptTag": "post",
    "description": "Update a Job Posting",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "(Required)",
        "example": 3
      },
      {
        "name": "title",
        "schema": "string",
        "description": "",
        "example": "Developer"
      },
      {
        "name": "description",
        "schema": "string",
        "description": "",
        "example": "Full Stack Developer"
      },
      {
        "name": "contract_type",
        "schema": "string",
        "description": "",
        "example": "temporary"
      },
      {
        "name": "remote",
        "schema": "boolean",
        "description": "",
        "example": true
      },
      {
        "name": "status",
        "schema": "string",
        "description": "",
        "example": "draft"
      },
      {
        "name": "schedule_type",
        "schema": "string",
        "description": "",
        "example": "full_time"
      },
      {
        "name": "team_id",
        "schema": "integer",
        "description": "",
        "example": 1
      },
      {
        "name": "location_id",
        "schema": "integer",
        "description": "",
        "example": 3
      },
      {
        "name": "salary_format",
        "schema": "string",
        "description": "",
        "example": "range"
      },
      {
        "name": "salary_from_amount_in_cents",
        "schema": "integer",
        "description": "",
        "example": 50000
      },
      {
        "name": "salary_to_amount_in_cents",
        "schema": "integer",
        "description": "",
        "example": 60000
      },
      {
        "name": "cv_requirement",
        "schema": "string",
        "description": "",
        "example": "mandatory"
      },
      {
        "name": "cover_letter_requirement",
        "schema": "string",
        "description": "",
        "example": "mandatory"
      },
      {
        "name": "phone_requirement",
        "schema": "string",
        "description": "",
        "example": "mandatory"
      },
      {
        "name": "photo_requirement",
        "schema": "string",
        "description": "",
        "example": "mandatory"
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
    "url": "/v1/ats/job_postings/{id}/duplicate",
    "method": "duplicateJobPosting",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Post",
    "typeScriptTag": "post",
    "description": "Duplicate a Job Posting",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "(Required)",
        "example": 3
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
    "url": "/v1/ats/candidates",
    "method": "listAllCandidates",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Candidate",
    "typeScriptTag": "candidate",
    "description": "Get all candidates",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/ats/candidates",
    "method": "createNewCandidate",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Candidate",
    "typeScriptTag": "candidate",
    "description": "Create a candidate",
    "parameters": [
      {
        "name": "first_name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Bob"
      },
      {
        "name": "last_name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Stone"
      },
      {
        "name": "email",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "bob_stone@factorial.co"
      },
      {
        "name": "source",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "indeed"
      },
      {
        "name": "medium",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "LinkedIn"
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
    "url": "/v1/ats/candidates/{id}",
    "method": "deleteExistingCandidate",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Candidate",
    "typeScriptTag": "candidate",
    "description": "Delete a Candidate",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "(Required)",
        "example": 3
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
    "url": "/v1/ats/candidates/{id}",
    "method": "updateCandidateData",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Candidate",
    "typeScriptTag": "candidate",
    "description": "Update candidate",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "(Required)",
        "example": 3
      },
      {
        "name": "first_name",
        "schema": "string",
        "description": "",
        "example": "Bob"
      },
      {
        "name": "last_name",
        "schema": "string",
        "description": "",
        "example": "Stone"
      },
      {
        "name": "email",
        "schema": "string",
        "description": "",
        "example": "bob_stone@factorial.co"
      },
      {
        "name": "talent_pool",
        "schema": "boolean",
        "description": "",
        "example": true
      },
      {
        "name": "consent_to_talent_pool",
        "schema": "boolean",
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
    "url": "/v1/payroll/contract_versions",
    "method": "getAllVersions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "ContractVersion",
    "typeScriptTag": "contractVersion",
    "description": "Get all contract versions",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/payroll/contract_versions",
    "method": "createNewVersion",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "ContractVersion",
    "typeScriptTag": "contractVersion",
    "description": "Create contract versions",
    "parameters": [
      {
        "name": "effective_on",
        "schema": "string",
        "description": "",
        "example": "2022-04-22"
      },
      {
        "name": "employee_id",
        "schema": "integer",
        "description": "",
        "example": 5
      },
      {
        "name": "starts_on",
        "schema": "string",
        "description": "",
        "example": "2021-04-22"
      },
      {
        "name": "ends_on",
        "schema": "string",
        "description": "",
        "example": "2023-04-22"
      },
      {
        "name": "working_hours_frequency",
        "schema": "string",
        "description": "",
        "example": "week"
      },
      {
        "name": "working_week_days",
        "schema": "string",
        "description": "",
        "example": "friday,tuesday,saturday"
      },
      {
        "name": "working_hours",
        "schema": "integer",
        "description": "",
        "example": 800
      },
      {
        "name": "salary_frequency",
        "schema": "string",
        "description": "",
        "example": "yearly"
      },
      {
        "name": "salary_amount",
        "schema": "integer",
        "description": "",
        "example": 5000000
      },
      {
        "name": "job_title",
        "schema": "string",
        "description": "",
        "example": "Jr Software Developer"
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
    "url": "/v1/payroll/contract_versions/{id}",
    "method": "deleteVersion",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Contract",
    "typeScriptTag": "contract",
    "description": "Delete contract version",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "(Required)",
        "example": 3
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
    "url": "/v1/payroll/contract_versions/{id}",
    "method": "updateVersion",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Contract",
    "typeScriptTag": "contract",
    "description": "Update contract version",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "(Required)",
        "example": 3
      },
      {
        "name": "effective_on",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "2022-04-22"
      },
      {
        "name": "employee_id",
        "schema": "integer",
        "required": false,
        "description": "",
        "example": 5
      },
      {
        "name": "starts_on",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "2021-04-22"
      },
      {
        "name": "ends_on",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "2023-04-22"
      },
      {
        "name": "working_hours_frequency",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "week"
      },
      {
        "name": "working_week_days",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "friday,tuesday,saturday"
      },
      {
        "name": "working_hours",
        "schema": "integer",
        "required": false,
        "description": "",
        "example": 800
      },
      {
        "name": "salary_frequency",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "yearly"
      },
      {
        "name": "salary_amount",
        "schema": "integer",
        "required": false,
        "description": "",
        "example": 5000000
      },
      {
        "name": "job_title",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Jr Software Developer"
      },
      {
        "name": "es_cotization_group",
        "schema": "integer",
        "required": false,
        "description": "",
        "example": 1
      },
      {
        "name": "es_professional_category_id",
        "schema": "integer",
        "required": false,
        "description": "",
        "example": 2
      },
      {
        "name": "es_education_level_id",
        "schema": "integer",
        "required": false,
        "description": "",
        "example": 4
      },
      {
        "name": "es_contract_type_id",
        "schema": "integer",
        "required": false,
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
    "url": "/v1/payroll/reference_contracts",
    "method": "getAllReferenceContracts",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Contract",
    "typeScriptTag": "contract",
    "description": "Get all reference contracts",
    "parameters": [
      {
        "name": "employeeIds[]",
        "schema": "array",
        "description": "Employees id array",
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
    "url": "/v1/payroll/supplements",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Supplement",
    "typeScriptTag": "supplement",
    "description": "Get all supplements",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/payroll/supplements",
    "method": "createNewSupplement",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Supplement",
    "typeScriptTag": "supplement",
    "description": "Create supplements",
    "parameters": [
      {
        "name": "employee_id",
        "schema": "integer",
        "description": "",
        "example": 5
      },
      {
        "name": "amount_in_cents",
        "schema": "integer",
        "description": "",
        "example": 23333
      },
      {
        "name": "effective_on",
        "schema": "string",
        "description": "",
        "example": "2023-04-22"
      },
      {
        "name": "contracts_taxonomy_id",
        "schema": "integer",
        "description": "",
        "example": 2
      },
      {
        "name": "payroll_policy_period_id",
        "schema": "integer",
        "description": "",
        "example": 3
      },
      {
        "name": "unit",
        "schema": "string",
        "description": "",
        "example": "usd"
      },
      {
        "name": "contracts_compensation_id",
        "schema": "integer",
        "description": "",
        "example": 3
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
    "url": "/v1/payroll/supplements/{id}",
    "method": "deleteById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Supplement",
    "typeScriptTag": "supplement",
    "description": "Delete supplements",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "(Required)",
        "example": 3
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
    "url": "/v1/payroll/supplements/{id}",
    "method": "updateById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Supplement",
    "typeScriptTag": "supplement",
    "description": "Update supplements",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "(Required)",
        "example": 3
      },
      {
        "name": "employee_id",
        "schema": "integer",
        "description": "",
        "example": 5
      },
      {
        "name": "amount_in_cents",
        "schema": "integer",
        "description": "",
        "example": 23333
      },
      {
        "name": "effective_on",
        "schema": "string",
        "description": "",
        "example": "2023-04-22"
      },
      {
        "name": "contracts_taxonomy_id",
        "schema": "integer",
        "description": "",
        "example": 2
      },
      {
        "name": "payroll_policy_period_id",
        "schema": "integer",
        "description": "",
        "example": 3
      },
      {
        "name": "unit",
        "schema": "string",
        "description": "",
        "example": "usd"
      },
      {
        "name": "contracts_compensation_id",
        "schema": "integer",
        "description": "",
        "example": 3
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
    "url": "/v2/payroll_integrations/codes",
    "method": "getAllCodes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Integration",
    "typeScriptTag": "integration",
    "description": "Get all codes for a specific Integration",
    "parameters": [
      {
        "name": "integration",
        "schema": "string",
        "description": "Payroll Integration name",
        "example": "a3innuva"
      },
      {
        "name": "code",
        "schema": "string",
        "description": "Unique identifier to relate Factorial with different payroll softwares",
        "example": "TEST_CODE"
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
    "url": "/v2/payroll_integrations/codes",
    "method": "createPayrollIntegrationCode",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "IntegrationCode",
    "typeScriptTag": "integrationCode",
    "description": "Create a Payroll Integration Code",
    "parameters": [
      {
        "name": "code",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TEST_CODE"
      },
      {
        "name": "codeable_id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 12
      },
      {
        "name": "codeable_type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Employee"
      },
      {
        "name": "integration",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "temporary"
      },
      {
        "name": "forfait_jours",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": true
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
    "url": "/v2/payroll_integrations/codes/{id}",
    "method": "deletePayrollCode",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Integration",
    "typeScriptTag": "integration",
    "description": "Delete a Payroll Integration Code",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "(Required)",
        "example": 3
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
    "url": "/v2/payroll_integrations/codes/{id}",
    "method": "updatePayrollCode",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Integration",
    "typeScriptTag": "integration",
    "description": "Update a Payroll Integration Code",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "(Required)",
        "example": 3
      },
      {
        "name": "id",
        "schema": "integer",
        "description": "",
        "example": 3
      },
      {
        "name": "code",
        "schema": "string",
        "description": "",
        "example": "TEST_CODE"
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
    "url": "/v2/payroll_integrations/codes/{id}/find_employee",
    "method": "getByPayrollIntegrationCode",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Employee",
    "typeScriptTag": "employee",
    "description": "Find Employee assigned to a Payroll Integration Code",
    "parameters": [
      {
        "name": "integration",
        "schema": "string",
        "description": "Payroll Integration name",
        "example": "a3innuva"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "(Required)",
        "example": 3
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
    "url": "/v1/time/shifts_management",
    "method": "getAllShifts",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Shift",
    "typeScriptTag": "shift",
    "description": "Get all shifts from a company",
    "parameters": [
      {
        "name": "employeeId",
        "schema": "integer",
        "description": "Employee ID to find shifts from",
        "example": 5
      },
      {
        "name": "employeeIds%5B%5D",
        "schema": "array",
        "description": "Employee IDs to find shifts from"
      },
      {
        "name": "startAt",
        "schema": "string",
        "description": "Start date to find shifts from",
        "example": "2023-07-24"
      },
      {
        "name": "endAt",
        "schema": "string",
        "description": "End date to find shifts to",
        "example": "2023-07-30"
      },
      {
        "name": "onlyPublished",
        "schema": "boolean",
        "description": "To return only published shifts",
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
    "url": "/v1/time/shifts_management",
    "method": "createNewShift",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Shift",
    "typeScriptTag": "shift",
    "description": "Create a shift",
    "parameters": [
      {
        "name": "start_at",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "2022-06-23T11:00:00.000+00:00"
      },
      {
        "name": "end_at",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "2022-06-23T17:00:00.000+00:00"
      },
      {
        "name": "employee_id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 3
      },
      {
        "name": "notes",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Note 2"
      },
      {
        "name": "location_id",
        "schema": "integer",
        "required": false,
        "description": "",
        "example": 1
      },
      {
        "name": "work_area_id",
        "schema": "integer",
        "required": false,
        "description": "",
        "example": 1
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
    "url": "/v1/time/shifts_management/publish",
    "method": "publishShiftsInsideTimeRange",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Shift",
    "typeScriptTag": "shift",
    "description": "Publish shifts inside time range",
    "parameters": [
      {
        "name": "start_at",
        "schema": "string",
        "description": "",
        "example": "2022-06-23T11:00:00.000+00:00"
      },
      {
        "name": "end_at",
        "schema": "string",
        "description": "",
        "example": "2022-06-23T17:00:00.000+00:00"
      },
      {
        "name": "employee_ids",
        "schema": "array",
        "description": ""
      },
      {
        "name": "send_notification",
        "schema": "boolean",
        "description": "",
        "example": false
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Created"
      }
    ]
  },
  {
    "url": "/v1/time/shifts_management/{id}/locations",
    "method": "updateShiftLocation",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Location",
    "typeScriptTag": "location",
    "description": "Update shift location",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "(Required)",
        "example": 3
      },
      {
        "name": "location_id",
        "schema": "integer",
        "description": "",
        "example": 2
      },
      {
        "name": "work_area_id",
        "schema": "integer",
        "description": "",
        "example": 3
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
    "url": "/v1/time/shifts_management/{id}/notes",
    "method": "updateNotes",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Shift",
    "typeScriptTag": "shift",
    "description": "Update shift notes",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "(Required)",
        "example": 3
      },
      {
        "name": "notes",
        "schema": "string",
        "description": "",
        "example": "Note 1"
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
    "url": "/v1/time/shifts_management/{id}",
    "method": "deleteById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Shift",
    "typeScriptTag": "shift",
    "description": "Delete Shift",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "(Required)",
        "example": 3
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
    "url": "/v1/time/shifts_management/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Shift",
    "typeScriptTag": "shift",
    "description": "Get Shift",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "(Required)",
        "example": 3
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
    "url": "/v1/time/breaks/start",
    "method": "startBreak",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Break",
    "typeScriptTag": "break",
    "description": "Start a break",
    "parameters": [
      {
        "name": "now",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "2022-06-23T11:00:00.000+00:00"
      },
      {
        "name": "employee_id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 3
      },
      {
        "name": "observations",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "New break observation"
      },
      {
        "name": "time_settings_break_configuration_id",
        "schema": "integer",
        "required": false,
        "description": "",
        "example": 1
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
    "url": "/v1/time/breaks/end",
    "method": "endBreak",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Break",
    "typeScriptTag": "break",
    "description": "End a break",
    "parameters": [
      {
        "name": "now",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "2022-06-23T11:00:00.000+00:00"
      },
      {
        "name": "employee_id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 3
      },
      {
        "name": "observations",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Updated break observation"
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
    "url": "/v1/time/breaks",
    "method": "createBreak",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Break",
    "typeScriptTag": "break",
    "description": "Create a break",
    "parameters": [
      {
        "name": "employee_id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 5
      },
      {
        "name": "break_start",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "2022-06-23T12:12:01-02:00"
      },
      {
        "name": "break_end",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "2022-06-23T13:12:01-02:00"
      },
      {
        "name": "observations",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "New observation"
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
    "url": "/v1/time/break_configurations_for_dates",
    "method": "listBreakConfigurationsForDates",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Employee",
    "typeScriptTag": "employee",
    "description": "Get break configurations from a employee in a date range",
    "parameters": [
      {
        "name": "startAt",
        "schema": "string",
        "description": "",
        "example": "2023-09-30"
      },
      {
        "name": "endAt",
        "schema": "string",
        "description": "",
        "example": "2023-09-30"
      },
      {
        "name": "employeeId",
        "schema": "integer",
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
    "url": "/v1/ats/applications",
    "method": "createAtsApplication",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Application",
    "typeScriptTag": "application",
    "description": "Creates an application",
    "parameters": [
      {
        "name": "ats_job_posting_id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 1
      },
      {
        "name": "source",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "indeed"
      },
      {
        "name": "medium",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "LinkedIn"
      },
      {
        "name": "ats_candidate_id",
        "schema": "integer",
        "required": false,
        "description": "",
        "example": 2
      },
      {
        "name": "cover_letter",
        "schema": "string",
        "required": false,
        "description": "",
        "example": ""
      },
      {
        "name": "first_name",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Bob"
      },
      {
        "name": "last_name",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Stone"
      },
      {
        "name": "phone",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "1134124214"
      },
      {
        "name": "email",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "bob_stone@factorial.co"
      },
      {
        "name": "cv",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "cv.pdf"
      },
      {
        "name": "photo",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "photo.jpg"
      },
      {
        "name": "answers",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          {
            "ats_question_id": 10,
            "value": "Yes"
          },
          {
            "ats_question_id": 11,
            "value": [
              "Barcelona",
              "Madrid"
            ]
          },
          {
            "ats_question_id": 12,
            "value": "cv.pdf"
          }
        ]
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
    "url": "/v1/ats/applications/{id}",
    "method": "updateData",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Application",
    "typeScriptTag": "application",
    "description": "Update application",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "(Required)",
        "example": 3
      },
      {
        "name": "ats_application_phase_id",
        "schema": "integer",
        "description": "",
        "example": 1
      },
      {
        "name": "qualified",
        "schema": "boolean",
        "description": "",
        "example": true
      },
      {
        "name": "first_name",
        "schema": "string",
        "description": "",
        "example": "Bob"
      },
      {
        "name": "last_name",
        "schema": "string",
        "description": "",
        "example": "Stone"
      },
      {
        "name": "phone",
        "schema": "string",
        "description": "",
        "example": "1134124214"
      },
      {
        "name": "email",
        "schema": "string",
        "description": "",
        "example": "bob_stone@factorial.co"
      },
      {
        "name": "personal_url",
        "schema": "string",
        "description": "",
        "example": "www.linkedin.com/awesome"
      },
      {
        "name": "disqualified_reason",
        "schema": "string",
        "description": "",
        "example": "not_a_fit"
      },
      {
        "name": "cv",
        "schema": "string",
        "description": "",
        "example": "cv.pdf"
      },
      {
        "name": "photo",
        "schema": "string",
        "description": "",
        "example": "photo.jpeg"
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
    "url": "/v1/ats/messages",
    "method": "getAllMessages",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Message",
    "typeScriptTag": "message",
    "description": "Get all ATS Messages",
    "parameters": [
      {
        "name": "conversationId",
        "schema": "string",
        "required": true,
        "description": "(Required)",
        "example": 3
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
    "url": "/v1/ats/messages",
    "method": "createAtsMessage",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Message",
    "typeScriptTag": "message",
    "description": "Creates an ats messsage",
    "parameters": [
      {
        "name": "job_application_id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 1
      },
      {
        "name": "content",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Message 1"
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
    "url": "/v2/core/bulk/employee",
    "method": "getBulkV2",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Employee",
    "typeScriptTag": "employee",
    "description": "Get Bulk Employees",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/core/bulk/attendance",
    "method": "getBulkV2",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Attendance",
    "typeScriptTag": "attendance",
    "description": "Get Bulk Attendance",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/core/bulk/contract_version",
    "method": "getBulkVersions",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "ContractVersion",
    "typeScriptTag": "contractVersion",
    "description": "Get Bulk Contract Versions",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/core/custom/tables",
    "method": "get",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "CustomTable",
    "typeScriptTag": "customTable",
    "description": "Get Custom Tables",
    "parameters": [
      {
        "name": "topicName",
        "schema": "string",
        "description": "Filters by topic_name",
        "example": "employee"
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
    "url": "/v1/core/custom/tables",
    "method": "createCustomTable",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Table",
    "typeScriptTag": "table",
    "description": "Creates a custom table",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Kudos"
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
    "url": "/v1/core/custom/tables/{id}",
    "method": "getCustomTable",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Table",
    "typeScriptTag": "table",
    "description": "Get Custom Table",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "(Required)",
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
    "url": "/v1/core/custom/tables/{id}/fields",
    "method": "getFields",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Table",
    "typeScriptTag": "table",
    "description": "Get Custom Table Fields",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "Custom Table ID (Required)",
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
    "url": "/v1/core/custom/tables/{id}/fields",
    "method": "createField",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Table",
    "typeScriptTag": "table",
    "description": "Creates a custom table field",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "Custom Table ID (Required)",
        "example": 1
      },
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 86
      },
      {
        "name": "custom_field",
        "schema": "object",
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
    "url": "/v1/core/custom/tables/{id}/values/{employee_id}",
    "method": "getCustomTableValues",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Employee",
    "typeScriptTag": "employee",
    "description": "Get Custom Table Fields",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "(Required)",
        "example": 1
      },
      {
        "name": "employeeId",
        "schema": "integer",
        "required": true,
        "description": "(Required)",
        "example": 3
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
    "url": "/v1/core/custom/tables/{id}/values/{employee_id}",
    "method": "createCustomTableValue",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Employee",
    "typeScriptTag": "employee",
    "description": "Creates a custom table value",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "(Required)",
        "example": 1
      },
      {
        "name": "employeeId",
        "schema": "integer",
        "required": true,
        "description": "(Required)",
        "example": 3
      },
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 86
      },
      {
        "name": "emloyee_id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 10
      },
      {
        "name": "table_values",
        "schema": "array",
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
    "url": "/v1/core/events",
    "method": "getTriggeredEvents",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Event",
    "typeScriptTag": "event",
    "description": "Get triggered events",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/core/webhooks",
    "method": "subscribedWebhooksList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "User",
    "typeScriptTag": "user",
    "description": "Get a list of all subscribed webhooks for current user",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/core/webhooks",
    "method": "createSubscription",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Webhook",
    "typeScriptTag": "webhook",
    "description": "Create a webhook",
    "parameters": [
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "employee_created"
      },
      {
        "name": "target_url",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "https://webhook.site/48103127-b1f6-3215-8f18-60fdbc013e3f"
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
    "url": "/v1/core/webhooks/{id}",
    "method": "deleteWebhookById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Webhook",
    "typeScriptTag": "webhook",
    "description": "Delete a Webhook",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "(Required)",
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
    "url": "/v1/time/policies",
    "method": "getTimeOffPolicies",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Policy",
    "typeScriptTag": "policy",
    "description": "Get Time off Policies",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/time/policies/{id}",
    "method": "getTimeOff",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Policy",
    "typeScriptTag": "policy",
    "description": "Get a Time off Policy",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "(Required)",
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
    "url": "/v1/finance/expenses",
    "method": "getCompanyExpenses",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Expense",
    "typeScriptTag": "expense",
    "description": "Get Expenses",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/finance/expenses/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Expense",
    "typeScriptTag": "expense",
    "description": "Get an expense",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "(Required)",
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
    "url": "/v1/payroll/compensations",
    "method": "getCompensations",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Compensation",
    "typeScriptTag": "compensation",
    "description": "Get Compensations",
    "parameters": [
      {
        "name": "ids",
        "schema": "array",
        "description": "Compensations id array",
        "example": [
          1
        ]
      },
      {
        "name": "contractVersionIds",
        "schema": "array",
        "description": "Contract versions id array",
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
    "url": "/v1/payroll/compensations",
    "method": "createContractCompensation",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Compensation",
    "typeScriptTag": "compensation",
    "description": "Create a compensation",
    "parameters": [
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Meal 2"
      },
      {
        "name": "contract_version_id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 2
      },
      {
        "name": "contracts_taxonomy_id",
        "schema": "integer",
        "required": false,
        "description": "",
        "example": 2
      },
      {
        "name": "compensation_type",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "fixed"
      },
      {
        "name": "amount",
        "schema": "integer",
        "required": false,
        "description": "",
        "example": 2112
      },
      {
        "name": "unit",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "money"
      },
      {
        "name": "sync_with_supplements",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": true
      },
      {
        "name": "payroll_policy_id",
        "schema": "integer",
        "required": false,
        "description": "",
        "example": 2
      },
      {
        "name": "recurrence_count",
        "schema": "integer",
        "required": false,
        "description": "",
        "example": 2
      },
      {
        "name": "starts_on",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "2022-08-02"
      },
      {
        "name": "recurrence",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "monthly"
      },
      {
        "name": "first_payment_on",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "2022-08-02"
      },
      {
        "name": "calculation",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "current_period"
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
    "url": "/v1/payroll/compensations/{id}",
    "method": "deleteCompensation",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Compensation",
    "typeScriptTag": "compensation",
    "description": "Delete a Compensation",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "(Required)",
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
    "url": "/v1/payroll/compensations/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Compensation",
    "typeScriptTag": "compensation",
    "description": "Get a compensation",
    "parameters": [
      {
        "name": "id",
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
    "url": "/v1/payroll/compensations/{id}",
    "method": "updateForContract",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Compensation",
    "typeScriptTag": "compensation",
    "description": "Updates a compensation",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 1
      },
      {
        "name": "description",
        "schema": "string",
        "description": "",
        "example": "Meal 2"
      },
      {
        "name": "contracts_taxonomy_id",
        "schema": "integer",
        "description": "",
        "example": 2
      },
      {
        "name": "compensation_type",
        "schema": "string",
        "description": "",
        "example": "fixed"
      },
      {
        "name": "amount",
        "schema": "integer",
        "description": "",
        "example": 2112
      },
      {
        "name": "unit",
        "schema": "string",
        "description": "",
        "example": "money"
      },
      {
        "name": "sync_with_supplements",
        "schema": "boolean",
        "description": "",
        "example": true
      },
      {
        "name": "payroll_policy_id",
        "schema": "integer",
        "description": "",
        "example": 2
      },
      {
        "name": "recurrence_count",
        "schema": "integer",
        "description": "",
        "example": 2
      },
      {
        "name": "starts_on",
        "schema": "string",
        "description": "",
        "example": "2022-08-02"
      },
      {
        "name": "recurrence",
        "schema": "string",
        "description": "",
        "example": "monthly"
      },
      {
        "name": "first_payment_on",
        "schema": "string",
        "description": "",
        "example": "2022-08-02"
      },
      {
        "name": "calculation",
        "schema": "string",
        "description": "",
        "example": "current_period"
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
    "url": "/v1/payroll/taxonomies",
    "method": "getCompanyTaxonomies",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Taxonomy",
    "typeScriptTag": "taxonomy",
    "description": "Get Taxonomies",
    "parameters": [
      {
        "name": "ids",
        "schema": "array",
        "description": "Taxonomies id array",
        "example": [
          1
        ]
      },
      {
        "name": "legalEntityIds",
        "schema": "array",
        "description": "Legal Entities id array",
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
    "url": "/v1/payroll/taxonomies/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Taxonomy",
    "typeScriptTag": "taxonomy",
    "description": "Get a taxonomy",
    "parameters": [
      {
        "name": "id",
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
    "url": "/v2/core/workplaces",
    "method": "listAllWorkplaces",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Workplace",
    "typeScriptTag": "workplace",
    "description": "Get all workplaces",
    "parameters": [
      {
        "name": "ids",
        "schema": "string",
        "description": "Workplaces id comma separated values",
        "example": "1,2"
      },
      {
        "name": "employeeIds",
        "schema": "string",
        "description": "Employees id comma separated values",
        "example": "1,2"
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
    "url": "/v2/core/workplaces",
    "method": "createNewWorkplace",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Workplace",
    "typeScriptTag": "workplace",
    "description": "Create a workplace",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "First Workspace"
      },
      {
        "name": "country",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "es"
      },
      {
        "name": "state",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "CT"
      },
      {
        "name": "city",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Barcelona"
      },
      {
        "name": "address_line_1",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Swatch strasse 3"
      },
      {
        "name": "address_line_2",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Atiquen terceren"
      },
      {
        "name": "postal_code",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "C1231"
      },
      {
        "name": "phone_number",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "55555555"
      },
      {
        "name": "company_id",
        "schema": "integer",
        "required": false,
        "description": "",
        "example": 2
      },
      {
        "name": "legal_entity_id",
        "schema": "integer",
        "required": false,
        "description": "",
        "example": 2
      },
      {
        "name": "main",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": true
      },
      {
        "name": "latitude",
        "schema": "number",
        "required": false,
        "description": "",
        "example": 41.39612
      },
      {
        "name": "longitude",
        "schema": "number",
        "required": false,
        "description": "",
        "example": 2.19123
      },
      {
        "name": "timezone",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "etc/UTC"
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
    "url": "/v2/core/workplaces/{id}",
    "method": "removeWorkplace",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Workplace",
    "typeScriptTag": "workplace",
    "description": "Delete a workplace",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "(Required)",
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
    "url": "/v2/core/workplaces/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Workplace",
    "typeScriptTag": "workplace",
    "description": "Get a workplace",
    "parameters": [
      {
        "name": "id",
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
    "url": "/v2/core/workplaces/{id}",
    "method": "updateWorkplaceById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Workplace",
    "typeScriptTag": "workplace",
    "description": "Updates a workplace",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 1
      },
      {
        "name": "name",
        "schema": "string",
        "description": "",
        "example": "First Workspace"
      },
      {
        "name": "country",
        "schema": "string",
        "description": "",
        "example": "es"
      },
      {
        "name": "state",
        "schema": "string",
        "description": "",
        "example": "CT"
      },
      {
        "name": "city",
        "schema": "string",
        "description": "",
        "example": "Barcelona"
      },
      {
        "name": "address_line_1",
        "schema": "string",
        "description": "",
        "example": "Swatch strasse 3"
      },
      {
        "name": "address_line_2",
        "schema": "string",
        "description": "",
        "example": "Atiquen terceren"
      },
      {
        "name": "postal_code",
        "schema": "string",
        "description": "",
        "example": "C1231"
      },
      {
        "name": "phone_number",
        "schema": "string",
        "description": "",
        "example": "55555555"
      },
      {
        "name": "payroll_policy_id",
        "schema": "integer",
        "description": "",
        "example": 2
      },
      {
        "name": "main",
        "schema": "boolean",
        "description": "",
        "example": true
      },
      {
        "name": "timezone",
        "schema": "string",
        "description": "",
        "example": "etc/UTC"
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
    "url": "/v2/custom_fields/fields",
    "method": "getFieldsBySlug",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "CustomField",
    "typeScriptTag": "customField",
    "description": "Get custom fields",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "description": "",
        "example": 1
      },
      {
        "name": "label",
        "schema": "string",
        "description": "",
        "example": "tshirt size"
      },
      {
        "name": "slugId",
        "schema": "integer",
        "description": "",
        "example": 1
      },
      {
        "name": "slugName",
        "schema": "string",
        "description": "",
        "example": "employees-questions"
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
    "url": "/v2/custom_fields/fields",
    "method": "createField",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "CustomField",
    "typeScriptTag": "customField",
    "description": "Create a custom field",
    "parameters": [
      {
        "name": "label",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "t shirt"
      },
      {
        "name": "slug_name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "employees-questions"
      },
      {
        "name": "field_type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "text"
      },
      {
        "name": "min_value",
        "schema": "integer",
        "required": false,
        "description": "",
        "example": 1
      },
      {
        "name": "max_value",
        "schema": "integer",
        "required": false,
        "description": "",
        "example": 100
      },
      {
        "name": "required",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "editable",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "text"
      },
      {
        "name": "visible",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "text"
      },
      {
        "name": "choice_options",
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
    "url": "/v2/custom_fields/fields/{id}",
    "method": "deleteById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "CustomField",
    "typeScriptTag": "customField",
    "description": "Delete a custom field",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "(Required)",
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
    "url": "/v2/custom_fields/values",
    "method": "getBySlugName",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "CustomFieldValue",
    "typeScriptTag": "customFieldValue",
    "description": "Get custom field values",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "description": "",
        "example": 1
      },
      {
        "name": "slugId",
        "schema": "integer",
        "description": "",
        "example": 1
      },
      {
        "name": "fieldId",
        "schema": "integer",
        "description": "",
        "example": 1
      },
      {
        "name": "slugName",
        "schema": "string",
        "description": "",
        "example": "employees-questions"
      },
      {
        "name": "fieldValue",
        "schema": "string",
        "description": "",
        "example": "red"
      },
      {
        "name": "employeeIds[]",
        "schema": "array",
        "description": "Employees id array",
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
    "url": "/v2/custom_fields/values/{id}",
    "method": "updateValue",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "CustomFieldValue",
    "typeScriptTag": "customFieldValue",
    "description": "Update custom field value",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "(Required)",
        "example": 1
      },
      {
        "name": "value",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "l"
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
      apiTitle="Factorial API"
      apiBaseUrl="https://api.factorialhr.com/api"
      apiVersion="1.0.0"
      endpoints={101}
      sdkMethods={161}
      schemas={175}
      parameters={573}
      difficulty="Hard"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/factorial/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/factorial/openapi.yaml"
      developerDocumentation="apidoc.factorialhr.com/reference/core-employees-v1"
    />
  );
}
  