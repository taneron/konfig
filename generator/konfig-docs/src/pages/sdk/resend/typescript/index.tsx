import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import Description from "./_description.mdx";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
import { Sdk } from "@site/src/components/Sdk";

export default function ResendTypeScriptSdk() {
  return (
    <Sdk
      sdkName="resend-typescript-sdk"
      metaDescription="Email for developers"
      company="Resend"
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/resend/logo.png"
      clientNameCamelCase="resend"
      homepage="resend.com"
      lastUpdated={new Date("2024-03-11T06:52:01.712Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/resend/favicon.png"
      // Missing contactUrl
      // Missing contactEmail
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/resend/imagePreview.png"
      GettingStarted={GettingStarted}
      Description={Description}
      methods={[
  {
    "url": "/emails",
    "method": "sendEmail",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Emails",
    "typeScriptTag": "emails",
    "description": "Send an email",
    "parameters": [
      {
        "name": "tags",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "from",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "to",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "subject",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "bcc",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "cc",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "reply_to",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "html",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "text",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "headers",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "attachments",
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
    "url": "/emails/{email_id}",
    "method": "getSingleEmail",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Emails",
    "typeScriptTag": "emails",
    "description": "Retrieve a single email",
    "parameters": [
      {
        "name": "emailId",
        "schema": "string",
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
    "url": "/emails/batch",
    "method": "triggerBatchEmails",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Emails",
    "typeScriptTag": "emails",
    "description": "Trigger up to 100 batch emails at once.",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/domains",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Domains",
    "typeScriptTag": "domains",
    "description": "Retrieve a list of domains",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/domains",
    "method": "createNewDomain",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Domains",
    "typeScriptTag": "domains",
    "description": "Create a new domain",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "region",
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
    "url": "/domains/{domain_id}",
    "method": "removeDomain",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Domains",
    "typeScriptTag": "domains",
    "description": "Remove an existing domain",
    "parameters": [
      {
        "name": "domainId",
        "schema": "string",
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
    "url": "/domains/{domain_id}",
    "method": "getSingleDomain",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Domains",
    "typeScriptTag": "domains",
    "description": "Retrieve a single domain",
    "parameters": [
      {
        "name": "domainId",
        "schema": "string",
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
    "url": "/domains/{domain_id}",
    "method": "updateExistingDomain",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Domains",
    "typeScriptTag": "domains",
    "description": "Update an existing domain",
    "parameters": [
      {
        "name": "domainId",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "click_tracking",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "open_tracking",
        "schema": "boolean",
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
    "url": "/domains/{domain_id}/verify",
    "method": "verifyDomain",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Domains",
    "typeScriptTag": "domains",
    "description": "Verify an existing domain",
    "parameters": [
      {
        "name": "domainId",
        "schema": "string",
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
    "url": "/api-keys",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "API Keys",
    "typeScriptTag": "apiKeys",
    "description": "Retrieve a list of API keys",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api-keys",
    "method": "createNewKey",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "API Keys",
    "typeScriptTag": "apiKeys",
    "description": "Create a new API key",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "permission",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "domain_id",
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
    "url": "/api-keys/{api_key_id}",
    "method": "removeExistingKey",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "API Keys",
    "typeScriptTag": "apiKeys",
    "description": "Remove an existing API key",
    "parameters": [
      {
        "name": "apiKeyId",
        "schema": "string",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      }
    ]
  },
  {
    "url": "/audiences",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Audiences",
    "typeScriptTag": "audiences",
    "description": "Retrieve a list of audiences",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/audiences",
    "method": "createContactList",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Audiences",
    "typeScriptTag": "audiences",
    "description": "Create a list of contacts",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "required": true,
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
    "url": "/audiences/{id}",
    "method": "removeExistingAudience",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Audiences",
    "typeScriptTag": "audiences",
    "description": "Remove an existing audience",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
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
    "url": "/audiences/{id}",
    "method": "getSingleAudience",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Audiences",
    "typeScriptTag": "audiences",
    "description": "Retrieve a single audience",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
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
    "url": "/audiences/{audience_id}/contacts",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Contacts",
    "typeScriptTag": "contacts",
    "description": "Retrieve a list of contacts",
    "parameters": [
      {
        "name": "audienceId",
        "schema": "string",
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
    "url": "/audiences/{audience_id}/contacts",
    "method": "createNewContact",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Contacts",
    "typeScriptTag": "contacts",
    "description": "Create a new contact",
    "parameters": [
      {
        "name": "audienceId",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "email",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "first_name",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "last_name",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "unsubscribed",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "audience_id",
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
    "url": "/audiences/{audience_id}/contacts/{email}",
    "method": "removeByEmail",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Contacts",
    "typeScriptTag": "contacts",
    "description": "Remove an existing contact by email",
    "parameters": [
      {
        "name": "email",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "audienceId",
        "schema": "string",
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
    "url": "/audiences/{audience_id}/contacts/{id}",
    "method": "removeById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Contacts",
    "typeScriptTag": "contacts",
    "description": "Remove an existing contact by id",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "audienceId",
        "schema": "string",
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
    "url": "/audiences/{audience_id}/contacts/{id}",
    "method": "getSingle",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Contacts",
    "typeScriptTag": "contacts",
    "description": "Retrieve a single contact",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "audienceId",
        "schema": "string",
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
    "url": "/audiences/{audience_id}/contacts/{id}",
    "method": "updateSingleContact",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Contacts",
    "typeScriptTag": "contacts",
    "description": "Update a single contact",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "audienceId",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "email",
        "schema": "string",
        "description": ""
      },
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
        "name": "unsubscribed",
        "schema": "boolean",
        "description": ""
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
      apiTitle="Resend"
      apiBaseUrl="https://api.resend.com"
      apiVersion="1.1.0"
      endpoints={13}
      sdkMethods={22}
      schemas={33}
      parameters={46}
      difficulty="Easy"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/resend/openapi.yaml"
    />
  );
}
  