import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function CopperTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="copper-typescript-sdk"
      metaDescription={`If relationships are the lifeblood of your business, Copper is the heart. The only Google-recommended CRM that helps teams build better relationships to drive lasting revenue.`}
      company="Copper"
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/copper/logo.png"
      companyKebabCase="copper"
      clientNameCamelCase="copper"
      homepage="copper.com"
      lastUpdated={new Date("2024-03-27T20:13:36.016Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/copper/favicon.png"
      // Missing contactUrl
      // Missing contactEmail
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/copper/imagePreview.jpg"
      GettingStarted={GettingStarted}
      FirstRequest={FirstRequest}
      categories={["crm"]}
      methods={[
  {
    "url": "/account",
    "method": "getDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "1. Account and Users",
    "typeScriptTag": "1AccountAndUsers",
    "description": "Fetch Account Details",
    "parameters": [
      {
        "name": "xPwAccesstoken",
        "schema": "string",
        "description": "",
        "example": "{{api_token}}"
      },
      {
        "name": "xPwApplication",
        "schema": "string",
        "description": "",
        "example": "developer_api"
      },
      {
        "name": "xPwUseremail",
        "schema": "string",
        "description": "",
        "example": "{{api_email}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/users/{example_user_id}",
    "method": "getUserById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "1. Account and Users",
    "typeScriptTag": "1AccountAndUsers",
    "description": "Fetch User by ID",
    "parameters": [
      {
        "name": "xPwAccesstoken",
        "schema": "string",
        "description": "",
        "example": "{{api_token}}"
      },
      {
        "name": "xPwApplication",
        "schema": "string",
        "description": "",
        "example": "developer_api"
      },
      {
        "name": "xPwUseremail",
        "schema": "string",
        "description": "",
        "example": "{{api_email}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/users/search",
    "method": "searchUsers",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "1. Account and Users",
    "typeScriptTag": "1AccountAndUsers",
    "description": "List Users",
    "parameters": [
      {
        "name": "xPwAccesstoken",
        "schema": "string",
        "description": "",
        "example": "{{api_token}}"
      },
      {
        "name": "xPwApplication",
        "schema": "string",
        "description": "",
        "example": "developer_api"
      },
      {
        "name": "xPwUseremail",
        "schema": "string",
        "description": "",
        "example": "{{api_email}}"
      },
      {
        "name": "page_size",
        "schema": "number",
        "description": "",
        "example": 200
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/leads/{example_lead_id}",
    "method": "removeLead",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "2. Leads",
    "typeScriptTag": "2Leads",
    "description": "Delete a Lead",
    "parameters": [
      {
        "name": "xPwAccesstoken",
        "schema": "string",
        "description": "",
        "example": "{{api_token}}"
      },
      {
        "name": "xPwApplication",
        "schema": "string",
        "description": "",
        "example": "developer_api"
      },
      {
        "name": "xPwUseremail",
        "schema": "string",
        "description": "",
        "example": "{{api_email}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/leads/{example_lead_id}",
    "method": "getLeadById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "2. Leads",
    "typeScriptTag": "2Leads",
    "description": "Fetch a Lead by ID",
    "parameters": [
      {
        "name": "xPwAccesstoken",
        "schema": "string",
        "description": "",
        "example": "{{api_token}}"
      },
      {
        "name": "xPwApplication",
        "schema": "string",
        "description": "",
        "example": "developer_api"
      },
      {
        "name": "xPwUseremail",
        "schema": "string",
        "description": "",
        "example": "{{api_email}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/leads/{example_lead_id}",
    "method": "updateLead",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "2. Leads",
    "typeScriptTag": "2Leads",
    "description": "Update a Lead",
    "parameters": [
      {
        "name": "xPwAccesstoken",
        "schema": "string",
        "description": "",
        "example": "{{api_token}}"
      },
      {
        "name": "xPwApplication",
        "schema": "string",
        "description": "",
        "example": "developer_api"
      },
      {
        "name": "xPwUseremail",
        "schema": "string",
        "description": "",
        "example": "{{api_email}}"
      },
      {
        "name": "custom_fields",
        "schema": "array",
        "description": "",
        "example": [
          {
            "custom_field_definition_id": 184997,
            "value": [
              262644,
              262645
            ]
          }
        ]
      },
      {
        "name": "details",
        "schema": "string",
        "description": "",
        "example": "This is an update"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/leads",
    "method": "createNewLead",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "2. Leads",
    "typeScriptTag": "2Leads",
    "description": "Create a New Lead",
    "parameters": [
      {
        "name": "xPwAccesstoken",
        "schema": "string",
        "description": "",
        "example": "{{api_token}}"
      },
      {
        "name": "xPwApplication",
        "schema": "string",
        "description": "",
        "example": "developer_api"
      },
      {
        "name": "xPwUseremail",
        "schema": "string",
        "description": "",
        "example": "{{api_email}}"
      },
      {
        "name": "custom_fields",
        "schema": "array",
        "description": "",
        "example": [
          {
            "custom_field_definition_id": 100764,
            "value": "Text fields are 255 chars or less!"
          },
          {
            "custom_field_definition_id": 103481,
            "value": "Text area fields can have long text content"
          }
        ]
      },
      {
        "name": "customer_source_id",
        "schema": "number",
        "description": "",
        "example": 331242
      },
      {
        "name": "email",
        "schema": "object",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": "",
        "example": "My Lead"
      },
      {
        "name": "phone_numbers",
        "schema": "array",
        "description": "",
        "example": [
          {
            "category": "mobile",
            "number": "415-123-45678"
          }
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
    "url": "/leads/upsert",
    "method": "upsertLead",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "2. Leads",
    "typeScriptTag": "2Leads",
    "description": "UPSERT a Lead",
    "parameters": [
      {
        "name": "xPwAccesstoken",
        "schema": "string",
        "description": "",
        "example": "{{api_token}}"
      },
      {
        "name": "xPwApplication",
        "schema": "string",
        "description": "",
        "example": "developer_api"
      },
      {
        "name": "xPwUseremail",
        "schema": "string",
        "description": "",
        "example": "{{api_email}}"
      },
      {
        "name": "match",
        "schema": "object",
        "description": ""
      },
      {
        "name": "properties",
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
    "url": "/leads/{example_leadconvert_id}/convert",
    "method": "convertLeadToPerson",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "2. Leads",
    "typeScriptTag": "2Leads",
    "description": "CONVERT a Lead",
    "parameters": [
      {
        "name": "xPwAccesstoken",
        "schema": "string",
        "description": "",
        "example": "{{api_token}}"
      },
      {
        "name": "xPwApplication",
        "schema": "string",
        "description": "",
        "example": "developer_api"
      },
      {
        "name": "xPwUseremail",
        "schema": "string",
        "description": "",
        "example": "{{api_email}}"
      },
      {
        "name": "details",
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
    "url": "/leads/search",
    "method": "listLeadsSearch",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "2. Leads",
    "typeScriptTag": "2Leads",
    "description": "List Leads (Search)",
    "parameters": [
      {
        "name": "xPwAccesstoken",
        "schema": "string",
        "description": "",
        "example": "{{api_token}}"
      },
      {
        "name": "xPwApplication",
        "schema": "string",
        "description": "",
        "example": "developer_api"
      },
      {
        "name": "xPwUseremail",
        "schema": "string",
        "description": "",
        "example": "{{api_email}}"
      },
      {
        "name": "maximum_interaction_date",
        "schema": "number",
        "description": "",
        "example": 1515797000
      },
      {
        "name": "minimum_interaction_date",
        "schema": "number",
        "description": "",
        "example": 1515796000
      },
      {
        "name": "page_size",
        "schema": "number",
        "description": "",
        "example": 25
      },
      {
        "name": "sort_by",
        "schema": "string",
        "description": "",
        "example": "name"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/leads/{example_lead_id}/activities",
    "method": "getLeadActivities",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "2. Leads",
    "typeScriptTag": "2Leads",
    "description": "See a Lead's Activities",
    "parameters": [
      {
        "name": "xPwAccesstoken",
        "schema": "string",
        "description": "",
        "example": "{{api_token}}"
      },
      {
        "name": "xPwApplication",
        "schema": "string",
        "description": "",
        "example": "developer_api"
      },
      {
        "name": "xPwUseremail",
        "schema": "string",
        "description": "",
        "example": "{{api_email}}"
      },
      {
        "name": "activity_types",
        "schema": "array",
        "description": "",
        "example": [
          {
            "category": "user",
            "id": 1
          }
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
    "url": "/customer_sources",
    "method": "listCustomerSources",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "5. Opportunities",
    "typeScriptTag": "5Opportunities",
    "description": "List Customer Sources",
    "parameters": [
      {
        "name": "xPwAccesstoken",
        "schema": "string",
        "description": "",
        "example": "{{api_token}}"
      },
      {
        "name": "xPwApplication",
        "schema": "string",
        "description": "",
        "example": "developer_api"
      },
      {
        "name": "xPwUseremail",
        "schema": "string",
        "description": "",
        "example": "{{api_email}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/lead_statuses",
    "method": "listLeadStatuses",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "2. Leads",
    "typeScriptTag": "2Leads",
    "description": "List Lead Statuses",
    "parameters": [
      {
        "name": "xPwAccesstoken",
        "schema": "string",
        "description": "",
        "example": "{{api_token}}"
      },
      {
        "name": "xPwApplication",
        "schema": "string",
        "description": "",
        "example": "developer_api"
      },
      {
        "name": "xPwUseremail",
        "schema": "string",
        "description": "",
        "example": "{{api_email}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/people/{example_person_id}",
    "method": "removePerson",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "3. People",
    "typeScriptTag": "3People",
    "description": "Delete a Person",
    "parameters": [
      {
        "name": "xPwAccesstoken",
        "schema": "string",
        "description": "",
        "example": "{{api_token}}"
      },
      {
        "name": "xPwApplication",
        "schema": "string",
        "description": "",
        "example": "developer_api"
      },
      {
        "name": "xPwUseremail",
        "schema": "string",
        "description": "",
        "example": "{{api_email}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/people/{example_person_id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "3. People",
    "typeScriptTag": "3People",
    "description": "Fetch a Person by ID",
    "parameters": [
      {
        "name": "xPwAccesstoken",
        "schema": "string",
        "description": "",
        "example": "{{api_token}}"
      },
      {
        "name": "xPwApplication",
        "schema": "string",
        "description": "",
        "example": "developer_api"
      },
      {
        "name": "xPwUseremail",
        "schema": "string",
        "description": "",
        "example": "{{api_email}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/people/{example_person_id}",
    "method": "updatePersonById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "3. People",
    "typeScriptTag": "3People",
    "description": "Update a Person",
    "parameters": [
      {
        "name": "xPwAccesstoken",
        "schema": "string",
        "description": "",
        "example": "{{api_token}}"
      },
      {
        "name": "xPwApplication",
        "schema": "string",
        "description": "",
        "example": "developer_api"
      },
      {
        "name": "xPwUseremail",
        "schema": "string",
        "description": "",
        "example": "{{api_email}}"
      },
      {
        "name": "details",
        "schema": "string",
        "description": "",
        "example": "This is an update"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/people/fetch_by_email",
    "method": "getByEmail",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "3. People",
    "typeScriptTag": "3People",
    "description": "Fetch a Person by Email",
    "parameters": [
      {
        "name": "xPwAccesstoken",
        "schema": "string",
        "description": "",
        "example": "{{api_token}}"
      },
      {
        "name": "xPwApplication",
        "schema": "string",
        "description": "",
        "example": "developer_api"
      },
      {
        "name": "xPwUseremail",
        "schema": "string",
        "description": "",
        "example": "{{api_email}}"
      },
      {
        "name": "email",
        "schema": "string",
        "description": "",
        "example": "mycontact_123@noemail.com"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/people",
    "method": "createNewPerson",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "3. People",
    "typeScriptTag": "3People",
    "description": "Create a New Person",
    "parameters": [
      {
        "name": "xPwAccesstoken",
        "schema": "string",
        "description": "",
        "example": "{{api_token}}"
      },
      {
        "name": "xPwApplication",
        "schema": "string",
        "description": "",
        "example": "developer_api"
      },
      {
        "name": "xPwUseremail",
        "schema": "string",
        "description": "",
        "example": "{{api_email}}"
      },
      {
        "name": "emails",
        "schema": "array",
        "description": "",
        "example": [
          {
            "category": "work",
            "email": "mycontact_1233@noemail.com"
          }
        ]
      },
      {
        "name": "name",
        "schema": "string",
        "description": "",
        "example": "My Contact"
      },
      {
        "name": "phone_numbers",
        "schema": "array",
        "description": "",
        "example": [
          {
            "category": "mobile",
            "number": "415-123-45678"
          }
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
    "url": "/people/search",
    "method": "listPeopleSearch",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "3. People",
    "typeScriptTag": "3People",
    "description": "List People (Search)",
    "parameters": [
      {
        "name": "xPwAccesstoken",
        "schema": "string",
        "description": "",
        "example": "{{api_token}}"
      },
      {
        "name": "xPwApplication",
        "schema": "string",
        "description": "",
        "example": "developer_api"
      },
      {
        "name": "xPwUseremail",
        "schema": "string",
        "description": "",
        "example": "{{api_email}}"
      },
      {
        "name": "page_size",
        "schema": "number",
        "description": "",
        "example": 25
      },
      {
        "name": "phone_number",
        "schema": "string",
        "description": "",
        "example": "4153554776"
      },
      {
        "name": "sort_by",
        "schema": "string",
        "description": "",
        "example": "name"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/people/{example_person_id}/activities",
    "method": "getPersonActivities",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "3. People",
    "typeScriptTag": "3People",
    "description": "See a Person's Activities",
    "parameters": [
      {
        "name": "xPwAccesstoken",
        "schema": "string",
        "description": "",
        "example": "{{api_token}}"
      },
      {
        "name": "xPwApplication",
        "schema": "string",
        "description": "",
        "example": "developer_api"
      },
      {
        "name": "xPwUseremail",
        "schema": "string",
        "description": "",
        "example": "{{api_email}}"
      },
      {
        "name": "activity_types",
        "schema": "array",
        "description": "",
        "example": [
          {
            "category": "user",
            "id": 1
          }
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
    "url": "/contact_types",
    "method": "listContactTypes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "4. Companies",
    "typeScriptTag": "4Companies",
    "description": "List Contact Types",
    "parameters": [
      {
        "name": "xPwAccesstoken",
        "schema": "string",
        "description": "",
        "example": "{{api_token}}"
      },
      {
        "name": "xPwApplication",
        "schema": "string",
        "description": "",
        "example": "developer_api"
      },
      {
        "name": "xPwUseremail",
        "schema": "string",
        "description": "",
        "example": "{{api_email}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/companies/{example_company_id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "4. Companies",
    "typeScriptTag": "4Companies",
    "description": "Fetch a Company by ID",
    "parameters": [
      {
        "name": "xPwAccesstoken",
        "schema": "string",
        "description": "",
        "example": "{{api_token}}"
      },
      {
        "name": "xPwApplication",
        "schema": "string",
        "description": "",
        "example": "developer_api"
      },
      {
        "name": "xPwUseremail",
        "schema": "string",
        "description": "",
        "example": "{{api_email}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/companies/{example_company_id}",
    "method": "updateCompany",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "4. Companies",
    "typeScriptTag": "4Companies",
    "description": "Update a Company",
    "parameters": [
      {
        "name": "xPwAccesstoken",
        "schema": "string",
        "description": "",
        "example": "{{api_token}}"
      },
      {
        "name": "xPwApplication",
        "schema": "string",
        "description": "",
        "example": "developer_api"
      },
      {
        "name": "xPwUseremail",
        "schema": "string",
        "description": "",
        "example": "{{api_email}}"
      },
      {
        "name": "details",
        "schema": "string",
        "description": "",
        "example": "This is an update"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/companies",
    "method": "createNewCompany",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "4. Companies",
    "typeScriptTag": "4Companies",
    "description": "Create a New Company ",
    "parameters": [
      {
        "name": "xPwAccesstoken",
        "schema": "string",
        "description": "",
        "example": "{{api_token}}"
      },
      {
        "name": "xPwApplication",
        "schema": "string",
        "description": "",
        "example": "developer_api"
      },
      {
        "name": "xPwUseremail",
        "schema": "string",
        "description": "",
        "example": "{{api_email}}"
      },
      {
        "name": "address",
        "schema": "object",
        "description": ""
      },
      {
        "name": "details",
        "schema": "string",
        "description": "",
        "example": "This is a demo company"
      },
      {
        "name": "email_domain",
        "schema": "string",
        "description": "",
        "example": "democompany.com"
      },
      {
        "name": "name",
        "schema": "string",
        "description": "",
        "example": "Demo Company"
      },
      {
        "name": "phone_numbers",
        "schema": "array",
        "description": "",
        "example": [
          {
            "category": "work",
            "number": "415-123-45678"
          }
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
    "url": "/companies/{delete_company_id}",
    "method": "removeCompany",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "4. Companies",
    "typeScriptTag": "4Companies",
    "description": "Delete a Company",
    "parameters": [
      {
        "name": "xPwAccesstoken",
        "schema": "string",
        "description": "",
        "example": "{{api_token}}"
      },
      {
        "name": "xPwApplication",
        "schema": "string",
        "description": "",
        "example": "developer_api"
      },
      {
        "name": "xPwUseremail",
        "schema": "string",
        "description": "",
        "example": "{{api_email}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/companies/search",
    "method": "listCompanySearch",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "4. Companies",
    "typeScriptTag": "4Companies",
    "description": "List Companies (Search)",
    "parameters": [
      {
        "name": "xPwAccesstoken",
        "schema": "string",
        "description": "",
        "example": "{{api_token}}"
      },
      {
        "name": "xPwApplication",
        "schema": "string",
        "description": "",
        "example": "developer_api"
      },
      {
        "name": "xPwUseremail",
        "schema": "string",
        "description": "",
        "example": "{{api_email}}"
      },
      {
        "name": "contact_type_ids",
        "schema": "array",
        "description": "",
        "example": [
          6
        ]
      },
      {
        "name": "page_size",
        "schema": "number",
        "description": "",
        "example": 25
      },
      {
        "name": "sort_by",
        "schema": "string",
        "description": "",
        "example": "name"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/companies/{example_company_id}/activities",
    "method": "getCompanyActivities",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "4. Companies",
    "typeScriptTag": "4Companies",
    "description": "See a Company's Activities",
    "parameters": [
      {
        "name": "xPwAccesstoken",
        "schema": "string",
        "description": "",
        "example": "{{api_token}}"
      },
      {
        "name": "xPwApplication",
        "schema": "string",
        "description": "",
        "example": "developer_api"
      },
      {
        "name": "xPwUseremail",
        "schema": "string",
        "description": "",
        "example": "{{api_email}}"
      },
      {
        "name": "activity_types",
        "schema": "array",
        "description": "",
        "example": [
          {
            "category": "user",
            "id": 1
          }
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
    "url": "/opportunities/{example_opportunity_id}",
    "method": "getOpportunityById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "5. Opportunities",
    "typeScriptTag": "5Opportunities",
    "description": "Fetch an Opportunity by ID",
    "parameters": [
      {
        "name": "xPwAccesstoken",
        "schema": "string",
        "description": "",
        "example": "{{api_token}}"
      },
      {
        "name": "xPwApplication",
        "schema": "string",
        "description": "",
        "example": "developer_api"
      },
      {
        "name": "xPwUseremail",
        "schema": "string",
        "description": "",
        "example": "{{api_email}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/opportunities/{example_opportunity_id}",
    "method": "updateOpportunityFields",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "5. Opportunities",
    "typeScriptTag": "5Opportunities",
    "description": "Update an Opportunity",
    "parameters": [
      {
        "name": "xPwAccesstoken",
        "schema": "string",
        "description": "",
        "example": "{{api_token}}"
      },
      {
        "name": "xPwApplication",
        "schema": "string",
        "description": "",
        "example": "developer_api"
      },
      {
        "name": "xPwUseremail",
        "schema": "string",
        "description": "",
        "example": "{{api_email}}"
      },
      {
        "name": "details",
        "schema": "string",
        "description": "",
        "example": "This is an update"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/opportunities",
    "method": "createNewOpportunity",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "5. Opportunities",
    "typeScriptTag": "5Opportunities",
    "description": "Create a New Opportunity",
    "parameters": [
      {
        "name": "xPwAccesstoken",
        "schema": "string",
        "description": "",
        "example": "{{api_token}}"
      },
      {
        "name": "xPwApplication",
        "schema": "string",
        "description": "",
        "example": "developer_api"
      },
      {
        "name": "xPwUseremail",
        "schema": "string",
        "description": "",
        "example": "{{api_email}}"
      },
      {
        "name": "customer_source_id",
        "schema": "number",
        "description": "",
        "example": 331242
      },
      {
        "name": "name",
        "schema": "string",
        "description": "",
        "example": "New Demo Opportunity"
      },
      {
        "name": "primary_contact_id",
        "schema": "number",
        "description": "",
        "example": 27140359
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/opportunities/{delete_opportunity_id}",
    "method": "removeOpportunityRecord",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "5. Opportunities",
    "typeScriptTag": "5Opportunities",
    "description": "Delete an Opportunity",
    "parameters": [
      {
        "name": "xPwAccesstoken",
        "schema": "string",
        "description": "",
        "example": "{{api_token}}"
      },
      {
        "name": "xPwApplication",
        "schema": "string",
        "description": "",
        "example": "developer_api"
      },
      {
        "name": "xPwUseremail",
        "schema": "string",
        "description": "",
        "example": "{{api_email}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/opportunities/search",
    "method": "listByCriteria",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "5. Opportunities",
    "typeScriptTag": "5Opportunities",
    "description": "List Opportunities (Search)",
    "parameters": [
      {
        "name": "xPwAccesstoken",
        "schema": "string",
        "description": "",
        "example": "{{api_token}}"
      },
      {
        "name": "xPwApplication",
        "schema": "string",
        "description": "",
        "example": "developer_api"
      },
      {
        "name": "xPwUseremail",
        "schema": "string",
        "description": "",
        "example": "{{api_email}}"
      },
      {
        "name": "name",
        "schema": "string",
        "description": "",
        "example": "500 Keyboards (sample)"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/loss_reasons",
    "method": "listLossReasons",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "5. Opportunities",
    "typeScriptTag": "5Opportunities",
    "description": "List Loss Reasons",
    "parameters": [
      {
        "name": "xPwAccesstoken",
        "schema": "string",
        "description": "",
        "example": "{{api_token}}"
      },
      {
        "name": "xPwApplication",
        "schema": "string",
        "description": "",
        "example": "developer_api"
      },
      {
        "name": "xPwUseremail",
        "schema": "string",
        "description": "",
        "example": "{{api_email}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/pipelines",
    "method": "getPipelinesList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "5. Opportunities",
    "typeScriptTag": "5Opportunities",
    "description": "List Pipelines",
    "parameters": [
      {
        "name": "xPwAccesstoken",
        "schema": "string",
        "description": "",
        "example": "{{api_token}}"
      },
      {
        "name": "xPwApplication",
        "schema": "string",
        "description": "",
        "example": "developer_api"
      },
      {
        "name": "xPwUseremail",
        "schema": "string",
        "description": "",
        "example": "{{api_email}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/pipeline_stages",
    "method": "listPipelineStages",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "5. Opportunities",
    "typeScriptTag": "5Opportunities",
    "description": "List Pipeline Stages",
    "parameters": [
      {
        "name": "xPwAccesstoken",
        "schema": "string",
        "description": "",
        "example": "{{api_token}}"
      },
      {
        "name": "xPwApplication",
        "schema": "string",
        "description": "",
        "example": "developer_api"
      },
      {
        "name": "xPwUseremail",
        "schema": "string",
        "description": "",
        "example": "{{api_email}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/pipeline_stages/pipeline/{pipeline_id}",
    "method": "listPipelineStages",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "5. Opportunities",
    "typeScriptTag": "5Opportunities",
    "description": "List Stages in a Pipeline",
    "parameters": [
      {
        "name": "xPwAccesstoken",
        "schema": "string",
        "description": "",
        "example": "{{api_token}}"
      },
      {
        "name": "xPwApplication",
        "schema": "string",
        "description": "",
        "example": "developer_api"
      },
      {
        "name": "xPwUseremail",
        "schema": "string",
        "description": "",
        "example": "{{api_email}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/projects/{example_project_id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "6. Projects",
    "typeScriptTag": "6Projects",
    "description": "Fetch a Project by ID",
    "parameters": [
      {
        "name": "xPwAccesstoken",
        "schema": "string",
        "description": "",
        "example": "{{api_token}}"
      },
      {
        "name": "xPwApplication",
        "schema": "string",
        "description": "",
        "example": "developer_api"
      },
      {
        "name": "xPwUseremail",
        "schema": "string",
        "description": "",
        "example": "{{api_email}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/projects/{example_project_id}",
    "method": "updateProject",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "6. Projects",
    "typeScriptTag": "6Projects",
    "description": "Update a Project",
    "parameters": [
      {
        "name": "xPwAccesstoken",
        "schema": "string",
        "description": "",
        "example": "{{api_token}}"
      },
      {
        "name": "xPwApplication",
        "schema": "string",
        "description": "",
        "example": "developer_api"
      },
      {
        "name": "xPwUseremail",
        "schema": "string",
        "description": "",
        "example": "{{api_email}}"
      },
      {
        "name": "details",
        "schema": "string",
        "description": "",
        "example": "This is an update"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/projects",
    "method": "createNewProject",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "6. Projects",
    "typeScriptTag": "6Projects",
    "description": "Create a New Project",
    "parameters": [
      {
        "name": "xPwAccesstoken",
        "schema": "string",
        "description": "",
        "example": "{{api_token}}"
      },
      {
        "name": "xPwApplication",
        "schema": "string",
        "description": "",
        "example": "developer_api"
      },
      {
        "name": "xPwUseremail",
        "schema": "string",
        "description": "",
        "example": "{{api_email}}"
      },
      {
        "name": "name",
        "schema": "string",
        "description": "",
        "example": "New Demo Project"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/projects/{delete_project_id}",
    "method": "removeProjectRecord",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "6. Projects",
    "typeScriptTag": "6Projects",
    "description": "Delete a Project",
    "parameters": [
      {
        "name": "xPwAccesstoken",
        "schema": "string",
        "description": "",
        "example": "{{api_token}}"
      },
      {
        "name": "xPwApplication",
        "schema": "string",
        "description": "",
        "example": "developer_api"
      },
      {
        "name": "xPwUseremail",
        "schema": "string",
        "description": "",
        "example": "{{api_email}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/projects/search",
    "method": "listProjectsSearch",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "6. Projects",
    "typeScriptTag": "6Projects",
    "description": "List Projects (Search)",
    "parameters": [
      {
        "name": "xPwAccesstoken",
        "schema": "string",
        "description": "",
        "example": "{{api_token}}"
      },
      {
        "name": "xPwApplication",
        "schema": "string",
        "description": "",
        "example": "developer_api"
      },
      {
        "name": "xPwUseremail",
        "schema": "string",
        "description": "",
        "example": "{{api_email}}"
      },
      {
        "name": "custom_fields",
        "schema": "array",
        "description": "",
        "example": [
          {
            "custom_field_definition_id": 12,
            "option": "ANY",
            "value": [
              8
            ]
          }
        ]
      },
      {
        "name": "page_size",
        "schema": "number",
        "description": "",
        "example": 25
      },
      {
        "name": "sort_by",
        "schema": "string",
        "description": "",
        "example": "name"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/tasks/{example_task_id}",
    "method": "getTaskById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "7. Tasks",
    "typeScriptTag": "7Tasks",
    "description": "Fetch a Task by ID",
    "parameters": [
      {
        "name": "xPwAccesstoken",
        "schema": "string",
        "description": "",
        "example": "{{api_token}}"
      },
      {
        "name": "xPwApplication",
        "schema": "string",
        "description": "",
        "example": "developer_api"
      },
      {
        "name": "xPwUseremail",
        "schema": "string",
        "description": "",
        "example": "{{api_email}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/tasks/{example_task_id}",
    "method": "updateTaskRecord",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "7. Tasks",
    "typeScriptTag": "7Tasks",
    "description": "Update a Task",
    "parameters": [
      {
        "name": "xPwAccesstoken",
        "schema": "string",
        "description": "",
        "example": "{{api_token}}"
      },
      {
        "name": "xPwApplication",
        "schema": "string",
        "description": "",
        "example": "developer_api"
      },
      {
        "name": "xPwUseremail",
        "schema": "string",
        "description": "",
        "example": "{{api_email}}"
      },
      {
        "name": "details",
        "schema": "string",
        "description": "",
        "example": "This is an update"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/tasks",
    "method": "createNewTask",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "7. Tasks",
    "typeScriptTag": "7Tasks",
    "description": "Create a New Task",
    "parameters": [
      {
        "name": "xPwAccesstoken",
        "schema": "string",
        "description": "",
        "example": "{{api_token}}"
      },
      {
        "name": "xPwApplication",
        "schema": "string",
        "description": "",
        "example": "developer_api"
      },
      {
        "name": "xPwUseremail",
        "schema": "string",
        "description": "",
        "example": "{{api_email}}"
      },
      {
        "name": "name",
        "schema": "string",
        "description": "",
        "example": "Demo Task"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/tasks/{delete_task_id}",
    "method": "removeTaskRecord",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "7. Tasks",
    "typeScriptTag": "7Tasks",
    "description": "Delete a Task",
    "parameters": [
      {
        "name": "xPwAccesstoken",
        "schema": "string",
        "description": "",
        "example": "{{api_token}}"
      },
      {
        "name": "xPwApplication",
        "schema": "string",
        "description": "",
        "example": "developer_api"
      },
      {
        "name": "xPwUseremail",
        "schema": "string",
        "description": "",
        "example": "{{api_email}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/tasks/search",
    "method": "listTasksSearch",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "7. Tasks",
    "typeScriptTag": "7Tasks",
    "description": "List Tasks (Search)",
    "parameters": [
      {
        "name": "xPwAccesstoken",
        "schema": "string",
        "description": "",
        "example": "{{api_token}}"
      },
      {
        "name": "xPwApplication",
        "schema": "string",
        "description": "",
        "example": "developer_api"
      },
      {
        "name": "xPwUseremail",
        "schema": "string",
        "description": "",
        "example": "{{api_email}}"
      },
      {
        "name": "page_size",
        "schema": "number",
        "description": "",
        "example": 25
      },
      {
        "name": "sort_by",
        "schema": "string",
        "description": "",
        "example": "name"
      },
      {
        "name": "statuses",
        "schema": "array",
        "description": "",
        "example": [
          "Completed"
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
    "url": "/activities/{example_activity_id}",
    "method": "getActivityById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "8. Activities",
    "typeScriptTag": "8Activities",
    "description": "Fetch an Activity by ID",
    "parameters": [
      {
        "name": "xPwAccesstoken",
        "schema": "string",
        "description": "",
        "example": "{{api_token}}"
      },
      {
        "name": "xPwApplication",
        "schema": "string",
        "description": "",
        "example": "developer_api"
      },
      {
        "name": "xPwUseremail",
        "schema": "string",
        "description": "",
        "example": "{{api_email}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/activities",
    "method": "createNewActivity",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "8. Activities",
    "typeScriptTag": "8Activities",
    "description": "Create a New Activity",
    "parameters": [
      {
        "name": "xPwAccesstoken",
        "schema": "string",
        "description": "",
        "example": "{{api_token}}"
      },
      {
        "name": "xPwApplication",
        "schema": "string",
        "description": "",
        "example": "developer_api"
      },
      {
        "name": "xPwUseremail",
        "schema": "string",
        "description": "",
        "example": "{{api_email}}"
      },
      {
        "name": "details",
        "schema": "string",
        "description": "",
        "example": "This is the description of this note"
      },
      {
        "name": "parent",
        "schema": "object",
        "description": ""
      },
      {
        "name": "type",
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
    "url": "/activities/{delete_activity_id}",
    "method": "removeActivityRecord",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "8. Activities",
    "typeScriptTag": "8Activities",
    "description": "Delete an Activity",
    "parameters": [
      {
        "name": "xPwAccesstoken",
        "schema": "string",
        "description": "",
        "example": "{{api_token}}"
      },
      {
        "name": "xPwApplication",
        "schema": "string",
        "description": "",
        "example": "developer_api"
      },
      {
        "name": "xPwUseremail",
        "schema": "string",
        "description": "",
        "example": "{{api_email}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/activities/search",
    "method": "listSearch",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "8. Activities",
    "typeScriptTag": "8Activities",
    "description": "List Activities (Search)",
    "parameters": [
      {
        "name": "xPwAccesstoken",
        "schema": "string",
        "description": "",
        "example": "{{api_token}}"
      },
      {
        "name": "xPwApplication",
        "schema": "string",
        "description": "",
        "example": "developer_api"
      },
      {
        "name": "xPwUseremail",
        "schema": "string",
        "description": "",
        "example": "{{api_email}}"
      },
      {
        "name": "page_size",
        "schema": "number",
        "description": "",
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
    "url": "/activity_types",
    "method": "listActivityTypes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "8. Activities",
    "typeScriptTag": "8Activities",
    "description": "List Activity Types",
    "parameters": [
      {
        "name": "xPwAccesstoken",
        "schema": "string",
        "description": "",
        "example": "{{api_token}}"
      },
      {
        "name": "xPwApplication",
        "schema": "string",
        "description": "",
        "example": "developer_api"
      },
      {
        "name": "xPwUseremail",
        "schema": "string",
        "description": "",
        "example": "{{api_email}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/custom_field_definitions",
    "method": "listDefinitions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Custom Fields",
    "typeScriptTag": "customFields",
    "description": "List Custom Field Definitions",
    "parameters": [
      {
        "name": "xPwAccesstoken",
        "schema": "string",
        "description": "",
        "example": "{{api_token}}"
      },
      {
        "name": "xPwApplication",
        "schema": "string",
        "description": "",
        "example": "developer_api"
      },
      {
        "name": "xPwUseremail",
        "schema": "string",
        "description": "",
        "example": "{{api_email}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/custom_field_definitions",
    "method": "createFieldDefinition",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Custom Fields",
    "typeScriptTag": "customFields",
    "description": "Create a new custom field definition",
    "parameters": [
      {
        "name": "xPwAccesstoken",
        "schema": "string",
        "description": "",
        "example": "{{api_token}}"
      },
      {
        "name": "xPwApplication",
        "schema": "string",
        "description": "",
        "example": "developer_api"
      },
      {
        "name": "xPwUseremail",
        "schema": "string",
        "description": "",
        "example": "{{api_email}}"
      },
      {
        "name": "available_on",
        "schema": "array",
        "description": "",
        "example": [
          "lead",
          "person"
        ]
      },
      {
        "name": "data_type",
        "schema": "string",
        "description": "",
        "example": "String"
      },
      {
        "name": "name",
        "schema": "string",
        "description": "",
        "example": "A String"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/custom_field_definitions/{custom_field_definition_id}",
    "method": "deleteCustomFieldDefinition",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Custom Fields",
    "typeScriptTag": "customFields",
    "description": "Delete a Custom Field Definition",
    "parameters": [
      {
        "name": "xPwAccesstoken",
        "schema": "string",
        "description": "",
        "example": "{{api_token}}"
      },
      {
        "name": "xPwApplication",
        "schema": "string",
        "description": "",
        "example": "developer_api"
      },
      {
        "name": "xPwUseremail",
        "schema": "string",
        "description": "",
        "example": "{{api_email}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/custom_field_definitions/{custom_field_definition_id}",
    "method": "getDefinition",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Custom Fields",
    "typeScriptTag": "customFields",
    "description": "Fetch a Custom Field Definition",
    "parameters": [
      {
        "name": "xPwAccesstoken",
        "schema": "string",
        "description": "",
        "example": "{{api_token}}"
      },
      {
        "name": "xPwApplication",
        "schema": "string",
        "description": "",
        "example": "developer_api"
      },
      {
        "name": "xPwUseremail",
        "schema": "string",
        "description": "",
        "example": "{{api_email}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/custom_field_definitions/{custom_field_definition_id}",
    "method": "updateExistingDefinition",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Custom Fields",
    "typeScriptTag": "customFields",
    "description": "Update an existing custom field definition",
    "parameters": [
      {
        "name": "xPwAccesstoken",
        "schema": "string",
        "description": "",
        "example": "{{api_token}}"
      },
      {
        "name": "xPwApplication",
        "schema": "string",
        "description": "",
        "example": "developer_api"
      },
      {
        "name": "xPwUseremail",
        "schema": "string",
        "description": "",
        "example": "{{api_email}}"
      },
      {
        "name": "name",
        "schema": "string",
        "description": "",
        "example": "Renamed String"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/{entity_name_in_plural}/search",
    "method": "searchEntityByCustomField",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Custom Fields",
    "typeScriptTag": "customFields",
    "description": "Search Entity (Leads, People, etc) by Custom Field",
    "parameters": [
      {
        "name": "xPwAccesstoken",
        "schema": "string",
        "description": "",
        "example": "{{api_token}}"
      },
      {
        "name": "xPwApplication",
        "schema": "string",
        "description": "",
        "example": "developer_api"
      },
      {
        "name": "xPwUseremail",
        "schema": "string",
        "description": "",
        "example": "{{api_email}}"
      },
      {
        "name": "custom_fields",
        "schema": "array",
        "description": "",
        "example": [
          {
            "allow_empty": true,
            "custom_field_definition_id": 3
          }
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
    "url": "/custom_activity_types",
    "method": "listAllActivityTypes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Custom Fields",
    "typeScriptTag": "customFields",
    "description": "List All Custom Activity Types",
    "parameters": [
      {
        "name": "xPwAccesstoken",
        "schema": "string",
        "description": "",
        "example": "{{api_token}}"
      },
      {
        "name": "xPwApplication",
        "schema": "string",
        "description": "",
        "example": "developer_api"
      },
      {
        "name": "xPwUseremail",
        "schema": "string",
        "description": "",
        "example": "{{api_email}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/custom_activity_types",
    "method": "createCustomActivityType",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Custom Fields",
    "typeScriptTag": "customFields",
    "description": "Create a New Custom Activity Type",
    "parameters": [
      {
        "name": "xPwAccesstoken",
        "schema": "string",
        "description": "",
        "example": "{{api_token}}"
      },
      {
        "name": "xPwApplication",
        "schema": "string",
        "description": "",
        "example": "developer_api"
      },
      {
        "name": "xPwUseremail",
        "schema": "string",
        "description": "",
        "example": "{{api_email}}"
      },
      {
        "name": "icon_type",
        "schema": "string",
        "description": "",
        "example": "Phone"
      },
      {
        "name": "name",
        "schema": "string",
        "description": "",
        "example": "New Activity"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/custom_activity_types/{custom_activity_type_id}",
    "method": "getActivityType",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Custom Fields",
    "typeScriptTag": "customFields",
    "description": "Get Custom Activity Type",
    "parameters": [
      {
        "name": "xPwAccesstoken",
        "schema": "string",
        "description": "",
        "example": "{{api_token}}"
      },
      {
        "name": "xPwApplication",
        "schema": "string",
        "description": "",
        "example": "developer_api"
      },
      {
        "name": "xPwUseremail",
        "schema": "string",
        "description": "",
        "example": "{{api_email}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/custom_activity_types/{custom_activity_type_id}",
    "method": "updateExistingActivityType",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Custom Fields",
    "typeScriptTag": "customFields",
    "description": "Update an Existing Custom Activity Type",
    "parameters": [
      {
        "name": "xPwAccesstoken",
        "schema": "string",
        "description": "",
        "example": "{{api_token}}"
      },
      {
        "name": "xPwApplication",
        "schema": "string",
        "description": "",
        "example": "developer_api"
      },
      {
        "name": "xPwUseremail",
        "schema": "string",
        "description": "",
        "example": "{{api_email}}"
      },
      {
        "name": "icon_type",
        "schema": "string",
        "description": "",
        "example": "Todo"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/related_links",
    "method": "getConnections",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Custom Fields",
    "typeScriptTag": "customFields",
    "description": "List the connections on specified entity",
    "parameters": [
      {
        "name": "customFieldDefinitionId",
        "schema": "string",
        "description": "The Id of the custom field definition. This can be fetched by the custom_field_definitions API.",
        "example": "{{custom_field_definition_id}}"
      },
      {
        "name": "sourceType",
        "schema": "string",
        "description": "The entity type of the source. Supported sources: \"people\", \"opportunity\", \"lead\", \"organization\", \"project\", \"user\"",
        "example": "{{source_type}}"
      },
      {
        "name": "sourceId",
        "schema": "string",
        "description": "The Copper record id for the specified entity type",
        "example": "{{source_id}}"
      },
      {
        "name": "xPwAccesstoken",
        "schema": "string",
        "description": "",
        "example": "{{api_token}}"
      },
      {
        "name": "xPwApplication",
        "schema": "string",
        "description": "",
        "example": "developer_api"
      },
      {
        "name": "xPwUseremail",
        "schema": "string",
        "description": "",
        "example": "{{api_email}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/related_links",
    "method": "createConnection",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Custom Fields",
    "typeScriptTag": "customFields",
    "description": "Create a connection",
    "parameters": [
      {
        "name": "xPwAccesstoken",
        "schema": "string",
        "description": "",
        "example": "{{api_token}}"
      },
      {
        "name": "xPwApplication",
        "schema": "string",
        "description": "",
        "example": "developer_api"
      },
      {
        "name": "xPwUseremail",
        "schema": "string",
        "description": "",
        "example": "{{api_email}}"
      },
      {
        "name": "custom_field_definition_id",
        "schema": "number",
        "description": "",
        "example": 169
      },
      {
        "name": "source",
        "schema": "object",
        "description": ""
      },
      {
        "name": "target",
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
    "url": "/related_links/{connection_id}",
    "method": "deleteConnection",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Custom Fields",
    "typeScriptTag": "customFields",
    "description": "Delete a connection",
    "parameters": [
      {
        "name": "xPwAccesstoken",
        "schema": "string",
        "description": "",
        "example": "{{api_token}}"
      },
      {
        "name": "xPwApplication",
        "schema": "string",
        "description": "",
        "example": "developer_api"
      },
      {
        "name": "xPwUseremail",
        "schema": "string",
        "description": "",
        "example": "{{api_email}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/{entity}/{entity_id}/related/{related_entity_name}",
    "method": "viewAllRelated",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Related Items",
    "typeScriptTag": "relatedItems",
    "description": "View all records of a given Entity Type related to an Entity",
    "parameters": [
      {
        "name": "xPwAccesstoken",
        "schema": "string",
        "description": "",
        "example": "{{api_token}}"
      },
      {
        "name": "xPwApplication",
        "schema": "string",
        "description": "",
        "example": "developer_api"
      },
      {
        "name": "xPwUseremail",
        "schema": "string",
        "description": "",
        "example": "{{api_email}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/{entity}/{entity_id}/related",
    "method": "getAllRelated",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Related Items",
    "typeScriptTag": "relatedItems",
    "description": "View all records related to an Entity",
    "parameters": [
      {
        "name": "xPwAccesstoken",
        "schema": "string",
        "description": "",
        "example": "{{api_token}}"
      },
      {
        "name": "xPwApplication",
        "schema": "string",
        "description": "",
        "example": "developer_api"
      },
      {
        "name": "xPwUseremail",
        "schema": "string",
        "description": "",
        "example": "{{api_email}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/{entity_type}/{entity_id}/files",
    "method": "listAttachedFiles",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "File Upload",
    "typeScriptTag": "fileUpload",
    "description": "List attached files of an entity record",
    "parameters": [
      {
        "name": "xPwAccesstoken",
        "schema": "string",
        "description": "",
        "example": "{{api_token}}"
      },
      {
        "name": "xPwApplication",
        "schema": "string",
        "description": "",
        "example": "developer_api"
      },
      {
        "name": "xPwUseremail",
        "schema": "string",
        "description": "",
        "example": "{{api_email}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/{entity_type}/{entity_id}/files",
    "method": "relateToEntity",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "File Upload",
    "typeScriptTag": "fileUpload",
    "description": "Upload 3: Relate the uploaded file to a specific entity",
    "parameters": [
      {
        "name": "xPwAccesstoken",
        "schema": "string",
        "description": "",
        "example": "{{api_token}}"
      },
      {
        "name": "xPwApplication",
        "schema": "string",
        "description": "",
        "example": "developer_api"
      },
      {
        "name": "xPwUseremail",
        "schema": "string",
        "description": "",
        "example": "{{api_email}}"
      },
      {
        "name": "file_name",
        "schema": "string",
        "description": "",
        "example": "cat.jpeg"
      },
      {
        "name": "key",
        "schema": "string",
        "description": "",
        "example": "temp_uploads/f0317718-9b56-4d28-bda4-985af6b75f56/b0c5afe5-3d87-495d-ae58-760fcafbadec"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/{entity}/{entity_id}/files/{file_id}",
    "method": "getFileMetadata",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "File Upload",
    "typeScriptTag": "fileUpload",
    "description": "Get metadata of a specific attached file",
    "parameters": [
      {
        "name": "xPwAccesstoken",
        "schema": "string",
        "description": "",
        "example": "{{api_token}}"
      },
      {
        "name": "xPwApplication",
        "schema": "string",
        "description": "",
        "example": "developer_api"
      },
      {
        "name": "xPwUseremail",
        "schema": "string",
        "description": "",
        "example": "{{api_email}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/{entity_type}/{entity_id}/files/s3_signed_url",
    "method": "getSignedS3Url",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "File Upload",
    "typeScriptTag": "fileUpload",
    "description": "Upload 1: Get signed S3 URL",
    "parameters": [
      {
        "name": "xPwAccesstoken",
        "schema": "string",
        "description": "",
        "example": "{{api_token}}"
      },
      {
        "name": "xPwApplication",
        "schema": "string",
        "description": "",
        "example": "developer_api"
      },
      {
        "name": "xPwUseremail",
        "schema": "string",
        "description": "",
        "example": "{{api_email}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/",
    "method": "uploadFileToS3",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Webhooks",
    "typeScriptTag": "webhooks",
    "description": "Upload 2: Upload your file to S3",
    "parameters": [
      {
        "name": "xPwAccesstoken",
        "schema": "string",
        "description": "",
        "example": "{{api_token}}"
      },
      {
        "name": "xPwApplication",
        "schema": "string",
        "description": "",
        "example": "developer_api"
      },
      {
        "name": "xPwUseremail",
        "schema": "string",
        "description": "",
        "example": "{{api_email}}"
      },
      {
        "name": "AWSAccessKeyId",
        "schema": "string",
        "description": "",
        "example": "AKIAJNSZAC7M6FS6F3KQ"
      },
      {
        "name": "acl",
        "schema": "string",
        "description": "",
        "example": "private"
      },
      {
        "name": "file",
        "schema": "string",
        "description": "",
        "example": "/Users/username/Desktop/cat.jpeg"
      },
      {
        "name": "key",
        "schema": "string",
        "description": "",
        "example": "temp_uploads/f0317718-9b56-4d28-bda4-985af6b75f56/b0c5afe5-3d87-495d-ae58-760fcafbadec"
      },
      {
        "name": "policy",
        "schema": "string",
        "description": "",
        "example": "eyJleHBpcmF0aW9uIjoiMjAxOS0wNi0xMFQyMjoyMTo1OC4wMDBaIiwiY29uZGl0aW9ucyI6W3siYnVja2V0IjoiYWxpLXVzZXJhc3NldHMtcHJvZHVjdGlvbiJ9LHsiYWNsIjoicHJpdmF0ZSJ9LHsia2V5IjoidGVtcF91cGxvYWRzL2YwMzE3NzE4LTliNTYtNGQyOC1iZGE0LTk4NWFmNmI3NWY1Ni9iMGM1YWZlNS0zZDg3LTQ5NWQtYWU1OC03NjBmY2FmYmFkZWMifSxbImNvbnRlbnQtbGVuZ3RoLXJhbmdlIiwwLDEwNzM3NDE4MjRdLHsic3VjY2Vzc19hY3Rpb25fc3RhdHVzIjoiMjAxIn1dfQ=="
      },
      {
        "name": "signature",
        "schema": "string",
        "description": "",
        "example": "mxw/zFUbSmtKFWbxcfKQZRSmax4="
      },
      {
        "name": "success_action_status",
        "schema": "string",
        "description": "",
        "example": "201"
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
    "url": "/webhooks",
    "method": "listSubscriptions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Webhooks",
    "typeScriptTag": "webhooks",
    "description": "List all subscriptions",
    "parameters": [
      {
        "name": "xPwAccesstoken",
        "schema": "string",
        "description": "",
        "example": "{{api_token}}"
      },
      {
        "name": "xPwApplication",
        "schema": "string",
        "description": "",
        "example": "developer_api"
      },
      {
        "name": "xPwUseremail",
        "schema": "string",
        "description": "",
        "example": "{{api_email}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/webhooks",
    "method": "createSubscriptionEvent",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Webhooks",
    "typeScriptTag": "webhooks",
    "description": "Create new subscription",
    "parameters": [
      {
        "name": "xPwAccesstoken",
        "schema": "string",
        "description": "",
        "example": "{{api_token}}"
      },
      {
        "name": "xPwApplication",
        "schema": "string",
        "description": "",
        "example": "developer_api"
      },
      {
        "name": "xPwUseremail",
        "schema": "string",
        "description": "",
        "example": "{{api_email}}"
      },
      {
        "name": "event",
        "schema": "string",
        "description": "",
        "example": "update"
      },
      {
        "name": "secret",
        "schema": "object",
        "description": ""
      },
      {
        "name": "target",
        "schema": "string",
        "description": "",
        "example": "https://your.endpoint.here"
      },
      {
        "name": "type",
        "schema": "string",
        "description": "",
        "example": "lead"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/webhooks/{example_webhook_id}",
    "method": "unsubscribe",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Webhooks",
    "typeScriptTag": "webhooks",
    "description": "Delete subscription (unsubscribe)",
    "parameters": [
      {
        "name": "xPwAccesstoken",
        "schema": "string",
        "description": "",
        "example": "{{api_token}}"
      },
      {
        "name": "xPwApplication",
        "schema": "string",
        "description": "",
        "example": "developer_api"
      },
      {
        "name": "xPwUseremail",
        "schema": "string",
        "description": "",
        "example": "{{api_email}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/webhooks{example_webhook_id}",
    "method": "viewSubscriptionById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Webhooks",
    "typeScriptTag": "webhooks",
    "description": "View subscription by ID",
    "parameters": [
      {
        "name": "xPwAccesstoken",
        "schema": "string",
        "description": "",
        "example": "{{api_token}}"
      },
      {
        "name": "xPwApplication",
        "schema": "string",
        "description": "",
        "example": "developer_api"
      },
      {
        "name": "xPwUseremail",
        "schema": "string",
        "description": "",
        "example": "{{api_email}}"
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
      apiTitle="Copper Developer API"
      apiBaseUrl="{{base_url}}"
      apiVersion="1.0.0"
      endpoints={60}
      sdkMethods={107}
      schemas={109}
      parameters={314}
      difficulty="Medium"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/copper/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/copper/openapi.yaml"
      developerDocumentation="developer.copper.com/"
    />
  );
}
  