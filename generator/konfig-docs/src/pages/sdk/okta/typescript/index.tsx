import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function OktaTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="okta-typescript-sdk"
      metaDescription={`Okta gives you a neutral, powerful and extensible platform that puts identity at the heart of your stack. No matter what industry, use case, or level of support you need, we've got you covered.`}
      company="Okta"
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/okta/logo.png"
      companyKebabCase="okta"
      clientNameCamelCase="okta"
      homepage="okta.com"
      lastUpdated={new Date("2024-03-26T20:40:42.558Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/okta/favicon.png"
      contactUrl="https://developer.okta.com/"
      contactEmail="devex-public@okta.com"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/okta/imagePreview.png"
      GettingStarted={GettingStarted}
      FirstRequest={FirstRequest}
      categories={["identity_and_access_management","security","authentication","identity_management","access_management","single_signon","user_management","idaas"]}
      methods={[
  {
    "url": "/api/v1/apps",
    "method": "listApps",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Application",
    "typeScriptTag": "application",
    "description": "List Applications",
    "parameters": [
      {
        "name": "q",
        "schema": "string",
        "description": ""
      },
      {
        "name": "after",
        "schema": "string",
        "description": "Specifies the pagination cursor for the next page of apps"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Specifies the number of results for a page",
        "default": -1
      },
      {
        "name": "filter",
        "schema": "string",
        "description": "Filters apps by status, user.id, group.id or credentials.signing.kid expression"
      },
      {
        "name": "expand",
        "schema": "string",
        "description": "Traverses users link relationship and optionally embeds Application User resource"
      },
      {
        "name": "includeNonDeleted",
        "schema": "boolean",
        "description": "",
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
    "url": "/api/v1/apps",
    "method": "createNew",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Application",
    "typeScriptTag": "application",
    "description": "Add Application",
    "parameters": [
      {
        "name": "activate",
        "schema": "boolean",
        "description": "Executes activation lifecycle operation when creating the app",
        "default": true
      },
      {
        "name": "oktaAccessGatewayAgent",
        "schema": "string",
        "description": ""
      },
      {
        "name": "_embedded",
        "schema": "object",
        "description": ""
      },
      {
        "name": "_links",
        "schema": "object",
        "description": ""
      },
      {
        "name": "accessibility",
        "schema": "object",
        "description": ""
      },
      {
        "name": "created",
        "schema": "string",
        "description": ""
      },
      {
        "name": "credentials",
        "schema": "object",
        "description": ""
      },
      {
        "name": "features",
        "schema": "array",
        "description": ""
      },
      {
        "name": "id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "label",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lastUpdated",
        "schema": "string",
        "description": ""
      },
      {
        "name": "licensing",
        "schema": "object",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "profile",
        "schema": "object",
        "description": ""
      },
      {
        "name": "settings",
        "schema": "object",
        "description": ""
      },
      {
        "name": "signOnMode",
        "schema": "string",
        "description": ""
      },
      {
        "name": "status",
        "schema": "string",
        "description": ""
      },
      {
        "name": "visibility",
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
    "url": "/api/v1/apps/{appId}",
    "method": "removeInactive",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Application",
    "typeScriptTag": "application",
    "description": "Delete Application",
    "parameters": [
      {
        "name": "appId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "APPID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      }
    ]
  },
  {
    "url": "/api/v1/apps/{appId}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Application",
    "typeScriptTag": "application",
    "description": "Get Application",
    "parameters": [
      {
        "name": "appId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "APPID"
      },
      {
        "name": "expand",
        "schema": "string",
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
    "url": "/api/v1/apps/{appId}",
    "method": "updateApplicationInOrg",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Application",
    "typeScriptTag": "application",
    "description": "Update Application",
    "parameters": [
      {
        "name": "appId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "APPID"
      },
      {
        "name": "_embedded",
        "schema": "object",
        "description": ""
      },
      {
        "name": "_links",
        "schema": "object",
        "description": ""
      },
      {
        "name": "accessibility",
        "schema": "object",
        "description": ""
      },
      {
        "name": "created",
        "schema": "string",
        "description": ""
      },
      {
        "name": "credentials",
        "schema": "object",
        "description": ""
      },
      {
        "name": "features",
        "schema": "array",
        "description": ""
      },
      {
        "name": "id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "label",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lastUpdated",
        "schema": "string",
        "description": ""
      },
      {
        "name": "licensing",
        "schema": "object",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "profile",
        "schema": "object",
        "description": ""
      },
      {
        "name": "settings",
        "schema": "object",
        "description": ""
      },
      {
        "name": "signOnMode",
        "schema": "string",
        "description": ""
      },
      {
        "name": "status",
        "schema": "string",
        "description": ""
      },
      {
        "name": "visibility",
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
    "url": "/api/v1/apps/{appId}/connections/default",
    "method": "getDefaultProvisioningConnection",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Application",
    "typeScriptTag": "application",
    "description": "Fetches the default Provisioning Connection for an application.",
    "parameters": [
      {
        "name": "appId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "APPID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      }
    ]
  },
  {
    "url": "/api/v1/apps/{appId}/connections/default",
    "method": "setDefaultProvisioningConnection",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Application",
    "typeScriptTag": "application",
    "description": "Sets the default Provisioning Connection for an application.",
    "parameters": [
      {
        "name": "appId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "APPID"
      },
      {
        "name": "activate",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "profile",
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
        "description": "Bad Request"
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      }
    ]
  },
  {
    "url": "/api/v1/apps/{appId}/connections/default/lifecycle/activate",
    "method": "activateDefaultProvisioningConnection",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Application",
    "typeScriptTag": "application",
    "description": "Activate default Provisioning Connection for application",
    "parameters": [
      {
        "name": "appId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "APPID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      }
    ]
  },
  {
    "url": "/api/v1/apps/{appId}/connections/default/lifecycle/deactivate",
    "method": "deactivateDefaultProvisioningConnection",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Application",
    "typeScriptTag": "application",
    "description": "Deactivate default Provisioning Connection for application",
    "parameters": [
      {
        "name": "appId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "APPID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      }
    ]
  },
  {
    "url": "/api/v1/apps/{appId}/credentials/csrs",
    "method": "listCsrsForApplication",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Application",
    "typeScriptTag": "application",
    "description": "List Certificate Signing Requests for Application",
    "parameters": [
      {
        "name": "appId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "APPID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/apps/{appId}/credentials/csrs",
    "method": "generateCsrForApplication",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Application",
    "typeScriptTag": "application",
    "description": "Generate Certificate Signing Request for Application",
    "parameters": [
      {
        "name": "appId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "APPID"
      },
      {
        "name": "subject",
        "schema": "undefined",
        "description": ""
      },
      {
        "name": "subjectAltNames",
        "schema": "undefined",
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
    "url": "/api/v1/apps/{appId}/credentials/csrs/{csrId}",
    "method": "deleteCsrById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Application",
    "typeScriptTag": "application",
    "description": "",
    "parameters": [
      {
        "name": "appId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "APPID"
      },
      {
        "name": "csrId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CSRID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
      }
    ]
  },
  {
    "url": "/api/v1/apps/{appId}/credentials/csrs/{csrId}",
    "method": "getCredentialsCsrs",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Application",
    "typeScriptTag": "application",
    "description": "",
    "parameters": [
      {
        "name": "appId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "APPID"
      },
      {
        "name": "csrId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CSRID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/apps/{appId}/credentials/csrs/{csrId}/lifecycle/publish",
    "method": "publishCsrLifecycle",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Application",
    "typeScriptTag": "application",
    "description": "",
    "parameters": [
      {
        "name": "appId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "APPID"
      },
      {
        "name": "csrId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CSRID"
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
    "url": "/api/v1/apps/{appId}/credentials/keys",
    "method": "listKeyCredentials",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Application",
    "typeScriptTag": "application",
    "description": "List Key Credentials for Application",
    "parameters": [
      {
        "name": "appId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "APPID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/apps/{appId}/credentials/keys/generate",
    "method": "generateX509Certificate",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Application",
    "typeScriptTag": "application",
    "description": "Generates a new X.509 certificate for an application key credential",
    "parameters": [
      {
        "name": "appId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "APPID"
      },
      {
        "name": "validityYears",
        "schema": "integer",
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
    "url": "/api/v1/apps/{appId}/credentials/keys/{keyId}",
    "method": "getKeyCredential",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Application",
    "typeScriptTag": "application",
    "description": "Get Key Credential for Application",
    "parameters": [
      {
        "name": "appId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "APPID"
      },
      {
        "name": "keyId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "KEYID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/apps/{appId}/credentials/keys/{keyId}/clone",
    "method": "cloneApplicationKeyCredential",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Application",
    "typeScriptTag": "application",
    "description": "Clone Application Key Credential",
    "parameters": [
      {
        "name": "appId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "APPID"
      },
      {
        "name": "keyId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "KEYID"
      },
      {
        "name": "targetAid",
        "schema": "string",
        "required": true,
        "description": "Unique key of the target Application",
        "example": "TARGETAID"
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
    "url": "/api/v1/apps/{appId}/credentials/secrets",
    "method": "listClientSecrets",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Application",
    "typeScriptTag": "application",
    "description": "List client secrets",
    "parameters": [
      {
        "name": "appId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "APPID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/apps/{appId}/credentials/secrets",
    "method": "addClientSecret",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Application",
    "typeScriptTag": "application",
    "description": "Add new client secret",
    "parameters": [
      {
        "name": "appId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "APPID"
      },
      {
        "name": "client_secret",
        "schema": "string",
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
    "url": "/api/v1/apps/{appId}/credentials/secrets/{secretId}",
    "method": "removeSecret",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Application",
    "typeScriptTag": "application",
    "description": "Removes a secret from the client's collection of secrets.",
    "parameters": [
      {
        "name": "appId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "APPID"
      },
      {
        "name": "secretId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SECRETID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
      }
    ]
  },
  {
    "url": "/api/v1/apps/{appId}/credentials/secrets/{secretId}",
    "method": "getClientSecret",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Application",
    "typeScriptTag": "application",
    "description": "Get client secret",
    "parameters": [
      {
        "name": "appId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "APPID"
      },
      {
        "name": "secretId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SECRETID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/apps/{appId}/credentials/secrets/{secretId}/lifecycle/activate",
    "method": "activateClientSecret",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Application",
    "typeScriptTag": "application",
    "description": "Activate a client secret",
    "parameters": [
      {
        "name": "appId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "APPID"
      },
      {
        "name": "secretId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SECRETID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/apps/{appId}/credentials/secrets/{secretId}/lifecycle/deactivate",
    "method": "deactivateClientSecretById",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Application",
    "typeScriptTag": "application",
    "description": "Deactivate a client secret",
    "parameters": [
      {
        "name": "appId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "APPID"
      },
      {
        "name": "secretId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SECRETID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/apps/{appId}/features",
    "method": "listFeatures",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Application",
    "typeScriptTag": "application",
    "description": "Fetches the Feature objects for an application.",
    "parameters": [
      {
        "name": "appId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "APPID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      }
    ]
  },
  {
    "url": "/api/v1/apps/{appId}/features/{name}",
    "method": "getFeature",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Application",
    "typeScriptTag": "application",
    "description": "Fetches a Feature object for an application.",
    "parameters": [
      {
        "name": "appId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "APPID"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      }
    ]
  },
  {
    "url": "/api/v1/apps/{appId}/features/{name}",
    "method": "updateFeature",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Application",
    "typeScriptTag": "application",
    "description": "Updates a Feature object for an application.",
    "parameters": [
      {
        "name": "appId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "APPID"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "create",
        "schema": "object",
        "description": ""
      },
      {
        "name": "update",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      }
    ]
  },
  {
    "url": "/api/v1/apps/{appId}/grants",
    "method": "listScopeConsentGrants",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Application",
    "typeScriptTag": "application",
    "description": "Lists all scope consent grants for the application",
    "parameters": [
      {
        "name": "appId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "APPID"
      },
      {
        "name": "expand",
        "schema": "string",
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
    "url": "/api/v1/apps/{appId}/grants",
    "method": "grantConsentToScope",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Application",
    "typeScriptTag": "application",
    "description": "Grants consent for the application to request an OAuth 2.0 Okta scope",
    "parameters": [
      {
        "name": "appId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "APPID"
      },
      {
        "name": "_embedded",
        "schema": "object",
        "description": ""
      },
      {
        "name": "_links",
        "schema": "object",
        "description": ""
      },
      {
        "name": "clientId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "created",
        "schema": "string",
        "description": ""
      },
      {
        "name": "createdBy",
        "schema": "object",
        "description": ""
      },
      {
        "name": "id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "issuer",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lastUpdated",
        "schema": "string",
        "description": ""
      },
      {
        "name": "scopeId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "source",
        "schema": "string",
        "description": ""
      },
      {
        "name": "status",
        "schema": "string",
        "description": ""
      },
      {
        "name": "userId",
        "schema": "string",
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
    "url": "/api/v1/apps/{appId}/grants/{grantId}",
    "method": "revokePermission",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Application",
    "typeScriptTag": "application",
    "description": "Revokes permission for the application to request the given scope",
    "parameters": [
      {
        "name": "appId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "APPID"
      },
      {
        "name": "grantId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "GRANTID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
      }
    ]
  },
  {
    "url": "/api/v1/apps/{appId}/grants/{grantId}",
    "method": "getSingleScopeConsentGrant",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Application",
    "typeScriptTag": "application",
    "description": "Fetches a single scope consent grant for the application",
    "parameters": [
      {
        "name": "appId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "APPID"
      },
      {
        "name": "grantId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "GRANTID"
      },
      {
        "name": "expand",
        "schema": "string",
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
    "url": "/api/v1/apps/{appId}/groups",
    "method": "listGroupsAssigned",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Application",
    "typeScriptTag": "application",
    "description": "List Groups Assigned to Application",
    "parameters": [
      {
        "name": "appId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "APPID"
      },
      {
        "name": "q",
        "schema": "string",
        "description": ""
      },
      {
        "name": "after",
        "schema": "string",
        "description": "Specifies the pagination cursor for the next page of assignments"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Specifies the number of results for a page",
        "default": -1
      },
      {
        "name": "expand",
        "schema": "string",
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
    "url": "/api/v1/apps/{appId}/groups/{groupId}",
    "method": "removeGroupAssignment",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Application",
    "typeScriptTag": "application",
    "description": "Remove Group from Application",
    "parameters": [
      {
        "name": "appId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "APPID"
      },
      {
        "name": "groupId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "GROUPID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
      }
    ]
  },
  {
    "url": "/api/v1/apps/{appId}/groups/{groupId}",
    "method": "getGroupAssignment",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Application",
    "typeScriptTag": "application",
    "description": "Get Assigned Group for Application",
    "parameters": [
      {
        "name": "appId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "APPID"
      },
      {
        "name": "groupId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "GROUPID"
      },
      {
        "name": "expand",
        "schema": "string",
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
    "url": "/api/v1/apps/{appId}/groups/{groupId}",
    "method": "assignGroupTo",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Application",
    "typeScriptTag": "application",
    "description": "Assign Group to Application",
    "parameters": [
      {
        "name": "appId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "APPID"
      },
      {
        "name": "groupId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "GROUPID"
      },
      {
        "name": "_embedded",
        "schema": "object",
        "description": ""
      },
      {
        "name": "_links",
        "schema": "object",
        "description": ""
      },
      {
        "name": "id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lastUpdated",
        "schema": "string",
        "description": ""
      },
      {
        "name": "priority",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "profile",
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
    "url": "/api/v1/apps/{appId}/lifecycle/activate",
    "method": "activateInactive",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Application",
    "typeScriptTag": "application",
    "description": "Activate Application",
    "parameters": [
      {
        "name": "appId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "APPID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      }
    ]
  },
  {
    "url": "/api/v1/apps/{appId}/lifecycle/deactivate",
    "method": "deactivateLifecycle",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Application",
    "typeScriptTag": "application",
    "description": "Deactivate Application",
    "parameters": [
      {
        "name": "appId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "APPID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      }
    ]
  },
  {
    "url": "/api/v1/apps/{appId}/logo",
    "method": "updateLogo",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Application",
    "typeScriptTag": "application",
    "description": "The file must be in PNG, JPG, or GIF format, and less than 1 MB in size. For best results use landscape orientation, a transparent background, and a minimum size of 420px by 120px to prevent upscaling.",
    "parameters": [
      {
        "name": "appId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "APPID"
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
        "statusCode": "201",
        "description": "Created"
      },
      {
        "statusCode": "400",
        "description": "Bad Request"
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      }
    ]
  },
  {
    "url": "/api/v1/apps/{appId}/policies/{policyId}",
    "method": "assignPolicyToApplication",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Application",
    "typeScriptTag": "application",
    "description": "Update application policy",
    "parameters": [
      {
        "name": "appId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "APPID"
      },
      {
        "name": "policyId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "POLICYID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
      }
    ]
  },
  {
    "url": "/api/v1/apps/{appId}/sso/saml/metadata",
    "method": "previewSamlAppMetadata",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Application",
    "typeScriptTag": "application",
    "description": "Previews SAML metadata based on a specific key credential for an application",
    "parameters": [
      {
        "name": "appId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "APPID"
      },
      {
        "name": "kid",
        "schema": "string",
        "required": true,
        "description": "unique key identifier of an Application Key Credential",
        "example": "KID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/apps/{appId}/tokens",
    "method": "revokeAllTokens",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Application",
    "typeScriptTag": "application",
    "description": "Revokes all tokens for the specified application",
    "parameters": [
      {
        "name": "appId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "APPID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
      }
    ]
  },
  {
    "url": "/api/v1/apps/{appId}/tokens",
    "method": "listTokens",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Application",
    "typeScriptTag": "application",
    "description": "Lists all tokens for the application",
    "parameters": [
      {
        "name": "appId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "APPID"
      },
      {
        "name": "expand",
        "schema": "string",
        "description": ""
      },
      {
        "name": "after",
        "schema": "string",
        "description": ""
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "",
        "default": 20
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/apps/{appId}/tokens/{tokenId}",
    "method": "revokeToken",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Application",
    "typeScriptTag": "application",
    "description": "Revokes the specified token for the specified application",
    "parameters": [
      {
        "name": "appId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "APPID"
      },
      {
        "name": "tokenId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TOKENID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
      }
    ]
  },
  {
    "url": "/api/v1/apps/{appId}/tokens/{tokenId}",
    "method": "getToken",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Application",
    "typeScriptTag": "application",
    "description": "Gets a token for the specified application",
    "parameters": [
      {
        "name": "appId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "APPID"
      },
      {
        "name": "tokenId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TOKENID"
      },
      {
        "name": "expand",
        "schema": "string",
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
    "url": "/api/v1/apps/{appId}/users",
    "method": "listAssignedUsers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Application",
    "typeScriptTag": "application",
    "description": "List Users Assigned to Application",
    "parameters": [
      {
        "name": "appId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "APPID"
      },
      {
        "name": "q",
        "schema": "string",
        "description": ""
      },
      {
        "name": "queryScope",
        "schema": "string",
        "description": ""
      },
      {
        "name": "after",
        "schema": "string",
        "description": "specifies the pagination cursor for the next page of assignments"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "specifies the number of results for a page",
        "default": -1
      },
      {
        "name": "filter",
        "schema": "string",
        "description": ""
      },
      {
        "name": "expand",
        "schema": "string",
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
    "url": "/api/v1/apps/{appId}/users",
    "method": "assignUserToApplication",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Application",
    "typeScriptTag": "application",
    "description": "Assign User to Application for SSO & Provisioning",
    "parameters": [
      {
        "name": "appId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "APPID"
      },
      {
        "name": "_embedded",
        "schema": "object",
        "description": ""
      },
      {
        "name": "_links",
        "schema": "object",
        "description": ""
      },
      {
        "name": "created",
        "schema": "string",
        "description": ""
      },
      {
        "name": "credentials",
        "schema": "object",
        "description": ""
      },
      {
        "name": "externalId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lastSync",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lastUpdated",
        "schema": "string",
        "description": ""
      },
      {
        "name": "passwordChanged",
        "schema": "string",
        "description": ""
      },
      {
        "name": "profile",
        "schema": "object",
        "description": ""
      },
      {
        "name": "scope",
        "schema": "string",
        "description": ""
      },
      {
        "name": "status",
        "schema": "string",
        "description": ""
      },
      {
        "name": "statusChanged",
        "schema": "string",
        "description": ""
      },
      {
        "name": "syncState",
        "schema": "string",
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
    "url": "/api/v1/apps/{appId}/users/{userId}",
    "method": "removeUserFrom",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Application",
    "typeScriptTag": "application",
    "description": "Remove User from Application",
    "parameters": [
      {
        "name": "appId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "APPID"
      },
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERID"
      },
      {
        "name": "sendEmail",
        "schema": "boolean",
        "description": "",
        "default": false
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
      }
    ]
  },
  {
    "url": "/api/v1/apps/{appId}/users/{userId}",
    "method": "getSpecificUserAssignment",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Application",
    "typeScriptTag": "application",
    "description": "Get Assigned User for Application",
    "parameters": [
      {
        "name": "appId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "APPID"
      },
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERID"
      },
      {
        "name": "expand",
        "schema": "string",
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
    "url": "/api/v1/apps/{appId}/users/{userId}",
    "method": "updateProfileForUser",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Application",
    "typeScriptTag": "application",
    "description": "Update Application Profile for Assigned User",
    "parameters": [
      {
        "name": "appId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "APPID"
      },
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERID"
      },
      {
        "name": "_embedded",
        "schema": "object",
        "description": ""
      },
      {
        "name": "_links",
        "schema": "object",
        "description": ""
      },
      {
        "name": "created",
        "schema": "string",
        "description": ""
      },
      {
        "name": "credentials",
        "schema": "object",
        "description": ""
      },
      {
        "name": "externalId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lastSync",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lastUpdated",
        "schema": "string",
        "description": ""
      },
      {
        "name": "passwordChanged",
        "schema": "string",
        "description": ""
      },
      {
        "name": "profile",
        "schema": "object",
        "description": ""
      },
      {
        "name": "scope",
        "schema": "string",
        "description": ""
      },
      {
        "name": "status",
        "schema": "string",
        "description": ""
      },
      {
        "name": "statusChanged",
        "schema": "string",
        "description": ""
      },
      {
        "name": "syncState",
        "schema": "string",
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
    "url": "/api/v1/authenticators",
    "method": "listAllAvailable",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Authenticator",
    "typeScriptTag": "authenticator",
    "description": "Lists all available Authenticators",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/authenticators",
    "method": "createNew",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Authenticator",
    "typeScriptTag": "authenticator",
    "description": "Create an Authenticator",
    "parameters": [
      {
        "name": "activate",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "_links",
        "schema": "object",
        "description": ""
      },
      {
        "name": "created",
        "schema": "string",
        "description": ""
      },
      {
        "name": "id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "key",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lastUpdated",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "provider",
        "schema": "undefined",
        "description": ""
      },
      {
        "name": "settings",
        "schema": "object",
        "description": ""
      },
      {
        "name": "status",
        "schema": "string",
        "description": ""
      },
      {
        "name": "type",
        "schema": "string",
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
    "url": "/api/v1/authenticators/{authenticatorId}",
    "method": "getSuccess",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Authenticator",
    "typeScriptTag": "authenticator",
    "description": "Success",
    "parameters": [
      {
        "name": "authenticatorId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "AUTHENTICATORID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/authenticators/{authenticatorId}",
    "method": "updateAuthenticator",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Authenticator",
    "typeScriptTag": "authenticator",
    "description": "Update Authenticator",
    "parameters": [
      {
        "name": "authenticatorId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "AUTHENTICATORID"
      },
      {
        "name": "_links",
        "schema": "object",
        "description": ""
      },
      {
        "name": "created",
        "schema": "string",
        "description": ""
      },
      {
        "name": "id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "key",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lastUpdated",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "provider",
        "schema": "undefined",
        "description": ""
      },
      {
        "name": "settings",
        "schema": "object",
        "description": ""
      },
      {
        "name": "status",
        "schema": "string",
        "description": ""
      },
      {
        "name": "type",
        "schema": "string",
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
    "url": "/api/v1/authenticators/{authenticatorId}/lifecycle/activate",
    "method": "activateLifecycleSuccess",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Authenticator",
    "typeScriptTag": "authenticator",
    "description": "Success",
    "parameters": [
      {
        "name": "authenticatorId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "AUTHENTICATORID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/authenticators/{authenticatorId}/lifecycle/deactivate",
    "method": "deactivateLifecycleSuccess",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Authenticator",
    "typeScriptTag": "authenticator",
    "description": "Success",
    "parameters": [
      {
        "name": "authenticatorId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "AUTHENTICATORID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/authorizationServers",
    "method": "listServers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "AuthorizationServer",
    "typeScriptTag": "authorizationServer",
    "description": "Success",
    "parameters": [
      {
        "name": "q",
        "schema": "string",
        "description": ""
      },
      {
        "name": "limit",
        "schema": "string",
        "description": ""
      },
      {
        "name": "after",
        "schema": "string",
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
    "url": "/api/v1/authorizationServers",
    "method": "createNewServer",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "AuthorizationServer",
    "typeScriptTag": "authorizationServer",
    "description": "Success",
    "parameters": [
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "_links",
        "schema": "object",
        "description": ""
      },
      {
        "name": "audiences",
        "schema": "array",
        "description": ""
      },
      {
        "name": "created",
        "schema": "string",
        "description": ""
      },
      {
        "name": "credentials",
        "schema": "undefined",
        "description": ""
      },
      {
        "name": "default",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "issuer",
        "schema": "string",
        "description": ""
      },
      {
        "name": "issuerMode",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lastUpdated",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "status",
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
        "statusCode": "201",
        "description": "Created"
      }
    ]
  },
  {
    "url": "/api/v1/authorizationServers/{authServerId}",
    "method": "deleteSuccess",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "AuthorizationServer",
    "typeScriptTag": "authorizationServer",
    "description": "Success",
    "parameters": [
      {
        "name": "authServerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "AUTHSERVERID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
      }
    ]
  },
  {
    "url": "/api/v1/authorizationServers/{authServerId}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "AuthorizationServer",
    "typeScriptTag": "authorizationServer",
    "description": "Success",
    "parameters": [
      {
        "name": "authServerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "AUTHSERVERID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/authorizationServers/{authServerId}",
    "method": "updateById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "AuthorizationServer",
    "typeScriptTag": "authorizationServer",
    "description": "Success",
    "parameters": [
      {
        "name": "authServerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "AUTHSERVERID"
      },
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "_links",
        "schema": "object",
        "description": ""
      },
      {
        "name": "audiences",
        "schema": "array",
        "description": ""
      },
      {
        "name": "created",
        "schema": "string",
        "description": ""
      },
      {
        "name": "credentials",
        "schema": "undefined",
        "description": ""
      },
      {
        "name": "default",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "issuer",
        "schema": "string",
        "description": ""
      },
      {
        "name": "issuerMode",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lastUpdated",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "status",
        "schema": "string",
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
    "url": "/api/v1/authorizationServers/{authServerId}/claims",
    "method": "getClaims",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "AuthorizationServer",
    "typeScriptTag": "authorizationServer",
    "description": "Success",
    "parameters": [
      {
        "name": "authServerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "AUTHSERVERID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/authorizationServers/{authServerId}/claims",
    "method": "createClaims",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "AuthorizationServer",
    "typeScriptTag": "authorizationServer",
    "description": "Success",
    "parameters": [
      {
        "name": "authServerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "AUTHSERVERID"
      },
      {
        "name": "_links",
        "schema": "object",
        "description": ""
      },
      {
        "name": "alwaysIncludeInToken",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "claimType",
        "schema": "string",
        "description": ""
      },
      {
        "name": "conditions",
        "schema": "object",
        "description": ""
      },
      {
        "name": "group_filter_type",
        "schema": "string",
        "description": ""
      },
      {
        "name": "id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "status",
        "schema": "string",
        "description": ""
      },
      {
        "name": "system",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      },
      {
        "name": "valueType",
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
        "statusCode": "201",
        "description": "Success"
      }
    ]
  },
  {
    "url": "/api/v1/authorizationServers/{authServerId}/claims/{claimId}",
    "method": "deleteClaim",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "AuthorizationServer",
    "typeScriptTag": "authorizationServer",
    "description": "Success",
    "parameters": [
      {
        "name": "authServerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "AUTHSERVERID"
      },
      {
        "name": "claimId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CLAIMID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
      }
    ]
  },
  {
    "url": "/api/v1/authorizationServers/{authServerId}/claims/{claimId}",
    "method": "getClaims",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "AuthorizationServer",
    "typeScriptTag": "authorizationServer",
    "description": "Success",
    "parameters": [
      {
        "name": "authServerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "AUTHSERVERID"
      },
      {
        "name": "claimId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CLAIMID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/authorizationServers/{authServerId}/claims/{claimId}",
    "method": "updateClaimSuccess",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "AuthorizationServer",
    "typeScriptTag": "authorizationServer",
    "description": "Success",
    "parameters": [
      {
        "name": "authServerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "AUTHSERVERID"
      },
      {
        "name": "claimId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CLAIMID"
      },
      {
        "name": "_links",
        "schema": "object",
        "description": ""
      },
      {
        "name": "alwaysIncludeInToken",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "claimType",
        "schema": "string",
        "description": ""
      },
      {
        "name": "conditions",
        "schema": "object",
        "description": ""
      },
      {
        "name": "group_filter_type",
        "schema": "string",
        "description": ""
      },
      {
        "name": "id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "status",
        "schema": "string",
        "description": ""
      },
      {
        "name": "system",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      },
      {
        "name": "valueType",
        "schema": "string",
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
    "url": "/api/v1/authorizationServers/{authServerId}/clients",
    "method": "listClients",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "AuthorizationServer",
    "typeScriptTag": "authorizationServer",
    "description": "Success",
    "parameters": [
      {
        "name": "authServerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "AUTHSERVERID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/authorizationServers/{authServerId}/clients/{clientId}/tokens",
    "method": "deleteClientToken",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "AuthorizationServer",
    "typeScriptTag": "authorizationServer",
    "description": "Success",
    "parameters": [
      {
        "name": "authServerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "AUTHSERVERID"
      },
      {
        "name": "clientId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CLIENTID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
      }
    ]
  },
  {
    "url": "/api/v1/authorizationServers/{authServerId}/clients/{clientId}/tokens",
    "method": "getClientTokens",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "AuthorizationServer",
    "typeScriptTag": "authorizationServer",
    "description": "Success",
    "parameters": [
      {
        "name": "authServerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "AUTHSERVERID"
      },
      {
        "name": "clientId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CLIENTID"
      },
      {
        "name": "expand",
        "schema": "string",
        "description": ""
      },
      {
        "name": "after",
        "schema": "string",
        "description": ""
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "",
        "default": -1
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/authorizationServers/{authServerId}/clients/{clientId}/tokens/{tokenId}",
    "method": "deleteAuthToken",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "AuthorizationServer",
    "typeScriptTag": "authorizationServer",
    "description": "Success",
    "parameters": [
      {
        "name": "authServerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "AUTHSERVERID"
      },
      {
        "name": "clientId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CLIENTID"
      },
      {
        "name": "tokenId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TOKENID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
      }
    ]
  },
  {
    "url": "/api/v1/authorizationServers/{authServerId}/clients/{clientId}/tokens/{tokenId}",
    "method": "getClientAuthToken",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "AuthorizationServer",
    "typeScriptTag": "authorizationServer",
    "description": "Success",
    "parameters": [
      {
        "name": "authServerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "AUTHSERVERID"
      },
      {
        "name": "clientId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CLIENTID"
      },
      {
        "name": "tokenId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TOKENID"
      },
      {
        "name": "expand",
        "schema": "string",
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
    "url": "/api/v1/authorizationServers/{authServerId}/credentials/keys",
    "method": "listCredentialsKeys",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "AuthorizationServer",
    "typeScriptTag": "authorizationServer",
    "description": "Success",
    "parameters": [
      {
        "name": "authServerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "AUTHSERVERID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/authorizationServers/{authServerId}/credentials/lifecycle/keyRotate",
    "method": "rotateKeyLifecycle",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "AuthorizationServer",
    "typeScriptTag": "authorizationServer",
    "description": "Success",
    "parameters": [
      {
        "name": "authServerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "AUTHSERVERID"
      },
      {
        "name": "use",
        "schema": "string",
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
    "url": "/api/v1/authorizationServers/{authServerId}/lifecycle/activate",
    "method": "activateLifecycleSuccess",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "AuthorizationServer",
    "typeScriptTag": "authorizationServer",
    "description": "Success",
    "parameters": [
      {
        "name": "authServerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "AUTHSERVERID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      }
    ]
  },
  {
    "url": "/api/v1/authorizationServers/{authServerId}/lifecycle/deactivate",
    "method": "deactivateLifecycle",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "AuthorizationServer",
    "typeScriptTag": "authorizationServer",
    "description": "Success",
    "parameters": [
      {
        "name": "authServerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "AUTHSERVERID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      }
    ]
  },
  {
    "url": "/api/v1/authorizationServers/{authServerId}/policies",
    "method": "getPoliciesSuccess",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "AuthorizationServer",
    "typeScriptTag": "authorizationServer",
    "description": "Success",
    "parameters": [
      {
        "name": "authServerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "AUTHSERVERID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/authorizationServers/{authServerId}/policies",
    "method": "createPolicy",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "AuthorizationServer",
    "typeScriptTag": "authorizationServer",
    "description": "Success",
    "parameters": [
      {
        "name": "authServerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "AUTHSERVERID"
      },
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "_embedded",
        "schema": "object",
        "description": ""
      },
      {
        "name": "_links",
        "schema": "object",
        "description": ""
      },
      {
        "name": "conditions",
        "schema": "object",
        "description": ""
      },
      {
        "name": "created",
        "schema": "string",
        "description": ""
      },
      {
        "name": "id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lastUpdated",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "priority",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "status",
        "schema": "string",
        "description": ""
      },
      {
        "name": "system",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "type",
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
        "statusCode": "201",
        "description": "Created"
      }
    ]
  },
  {
    "url": "/api/v1/authorizationServers/{authServerId}/policies/{policyId}",
    "method": "deletePolicyById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "AuthorizationServer",
    "typeScriptTag": "authorizationServer",
    "description": "Success",
    "parameters": [
      {
        "name": "authServerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "AUTHSERVERID"
      },
      {
        "name": "policyId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "POLICYID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
      }
    ]
  },
  {
    "url": "/api/v1/authorizationServers/{authServerId}/policies/{policyId}",
    "method": "getPolicies",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "AuthorizationServer",
    "typeScriptTag": "authorizationServer",
    "description": "Success",
    "parameters": [
      {
        "name": "authServerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "AUTHSERVERID"
      },
      {
        "name": "policyId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "POLICYID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/authorizationServers/{authServerId}/policies/{policyId}",
    "method": "updatePolicySuccess",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "AuthorizationServer",
    "typeScriptTag": "authorizationServer",
    "description": "Success",
    "parameters": [
      {
        "name": "authServerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "AUTHSERVERID"
      },
      {
        "name": "policyId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "POLICYID"
      },
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "_embedded",
        "schema": "object",
        "description": ""
      },
      {
        "name": "_links",
        "schema": "object",
        "description": ""
      },
      {
        "name": "conditions",
        "schema": "object",
        "description": ""
      },
      {
        "name": "created",
        "schema": "string",
        "description": ""
      },
      {
        "name": "id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lastUpdated",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "priority",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "status",
        "schema": "string",
        "description": ""
      },
      {
        "name": "system",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "type",
        "schema": "string",
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
    "url": "/api/v1/authorizationServers/{authServerId}/policies/{policyId}/lifecycle/activate",
    "method": "activatePolicyLifecycle",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "AuthorizationServer",
    "typeScriptTag": "authorizationServer",
    "description": "Activate Authorization Server Policy",
    "parameters": [
      {
        "name": "authServerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "AUTHSERVERID"
      },
      {
        "name": "policyId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "POLICYID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      }
    ]
  },
  {
    "url": "/api/v1/authorizationServers/{authServerId}/policies/{policyId}/lifecycle/deactivate",
    "method": "deactivatePolicyLifecycle",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "AuthorizationServer",
    "typeScriptTag": "authorizationServer",
    "description": "Deactivate Authorization Server Policy",
    "parameters": [
      {
        "name": "authServerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "AUTHSERVERID"
      },
      {
        "name": "policyId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "POLICYID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      }
    ]
  },
  {
    "url": "/api/v1/authorizationServers/{authServerId}/policies/{policyId}/rules",
    "method": "enumeratePolicyRules",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "AuthorizationServer",
    "typeScriptTag": "authorizationServer",
    "description": "Enumerates all policy rules for the specified Custom Authorization Server and Policy.",
    "parameters": [
      {
        "name": "authServerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "AUTHSERVERID"
      },
      {
        "name": "policyId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "POLICYID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/authorizationServers/{authServerId}/policies/{policyId}/rules",
    "method": "createPolicyRule",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "AuthorizationServer",
    "typeScriptTag": "authorizationServer",
    "description": "Creates a policy rule for the specified Custom Authorization Server and Policy.",
    "parameters": [
      {
        "name": "authServerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "AUTHSERVERID"
      },
      {
        "name": "policyId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "POLICYID"
      },
      {
        "name": "actions",
        "schema": "object",
        "description": ""
      },
      {
        "name": "conditions",
        "schema": "object",
        "description": ""
      },
      {
        "name": "created",
        "schema": "string",
        "description": ""
      },
      {
        "name": "id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lastUpdated",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "priority",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "status",
        "schema": "string",
        "description": "",
        "default": "ACTIVE"
      },
      {
        "name": "system",
        "schema": "boolean",
        "description": "",
        "default": false
      },
      {
        "name": "type",
        "schema": "string",
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
    "url": "/api/v1/authorizationServers/{authServerId}/policies/{policyId}/rules/{ruleId}",
    "method": "deletePolicyRule",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "AuthorizationServer",
    "typeScriptTag": "authorizationServer",
    "description": "Deletes a Policy Rule defined in the specified Custom Authorization Server and Policy.",
    "parameters": [
      {
        "name": "authServerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "AUTHSERVERID"
      },
      {
        "name": "policyId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "POLICYID"
      },
      {
        "name": "ruleId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "RULEID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
      }
    ]
  },
  {
    "url": "/api/v1/authorizationServers/{authServerId}/policies/{policyId}/rules/{ruleId}",
    "method": "getPolicyRuleById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "AuthorizationServer",
    "typeScriptTag": "authorizationServer",
    "description": "Returns a Policy Rule by ID that is defined in the specified Custom Authorization Server and Policy.",
    "parameters": [
      {
        "name": "authServerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "AUTHSERVERID"
      },
      {
        "name": "policyId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "POLICYID"
      },
      {
        "name": "ruleId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "RULEID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/authorizationServers/{authServerId}/policies/{policyId}/rules/{ruleId}",
    "method": "updatePolicyRuleConfiguration",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "AuthorizationServer",
    "typeScriptTag": "authorizationServer",
    "description": "Updates the configuration of the Policy Rule defined in the specified Custom Authorization Server and Policy.",
    "parameters": [
      {
        "name": "authServerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "AUTHSERVERID"
      },
      {
        "name": "policyId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "POLICYID"
      },
      {
        "name": "ruleId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "RULEID"
      },
      {
        "name": "actions",
        "schema": "object",
        "description": ""
      },
      {
        "name": "conditions",
        "schema": "object",
        "description": ""
      },
      {
        "name": "created",
        "schema": "string",
        "description": ""
      },
      {
        "name": "id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lastUpdated",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "priority",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "status",
        "schema": "string",
        "description": "",
        "default": "ACTIVE"
      },
      {
        "name": "system",
        "schema": "boolean",
        "description": "",
        "default": false
      },
      {
        "name": "type",
        "schema": "string",
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
    "url": "/api/v1/authorizationServers/{authServerId}/policies/{policyId}/rules/{ruleId}/lifecycle/activate",
    "method": "activatePolicyRule",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "AuthorizationServer",
    "typeScriptTag": "authorizationServer",
    "description": "Activate Authorization Server Policy Rule",
    "parameters": [
      {
        "name": "authServerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "AUTHSERVERID"
      },
      {
        "name": "policyId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "POLICYID"
      },
      {
        "name": "ruleId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "RULEID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      }
    ]
  },
  {
    "url": "/api/v1/authorizationServers/{authServerId}/policies/{policyId}/rules/{ruleId}/lifecycle/deactivate",
    "method": "deactivatePolicyRule",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "AuthorizationServer",
    "typeScriptTag": "authorizationServer",
    "description": "Deactivate Authorization Server Policy Rule",
    "parameters": [
      {
        "name": "authServerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "AUTHSERVERID"
      },
      {
        "name": "policyId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "POLICYID"
      },
      {
        "name": "ruleId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "RULEID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      }
    ]
  },
  {
    "url": "/api/v1/authorizationServers/{authServerId}/scopes",
    "method": "getScopes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "AuthorizationServer",
    "typeScriptTag": "authorizationServer",
    "description": "Success",
    "parameters": [
      {
        "name": "authServerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "AUTHSERVERID"
      },
      {
        "name": "q",
        "schema": "string",
        "description": ""
      },
      {
        "name": "filter",
        "schema": "string",
        "description": ""
      },
      {
        "name": "cursor",
        "schema": "string",
        "description": ""
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "",
        "default": -1
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/authorizationServers/{authServerId}/scopes",
    "method": "createScope",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "AuthorizationServer",
    "typeScriptTag": "authorizationServer",
    "description": "Success",
    "parameters": [
      {
        "name": "authServerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "AUTHSERVERID"
      },
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "consent",
        "schema": "string",
        "description": ""
      },
      {
        "name": "default",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "displayName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "metadataPublish",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "system",
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
        "statusCode": "201",
        "description": "Success"
      }
    ]
  },
  {
    "url": "/api/v1/authorizationServers/{authServerId}/scopes/{scopeId}",
    "method": "deleteScope",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "AuthorizationServer",
    "typeScriptTag": "authorizationServer",
    "description": "Success",
    "parameters": [
      {
        "name": "authServerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "AUTHSERVERID"
      },
      {
        "name": "scopeId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SCOPEID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
      }
    ]
  },
  {
    "url": "/api/v1/authorizationServers/{authServerId}/scopes/{scopeId}",
    "method": "getScopes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "AuthorizationServer",
    "typeScriptTag": "authorizationServer",
    "description": "Success",
    "parameters": [
      {
        "name": "authServerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "AUTHSERVERID"
      },
      {
        "name": "scopeId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SCOPEID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/authorizationServers/{authServerId}/scopes/{scopeId}",
    "method": "updateScopeSuccess",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "AuthorizationServer",
    "typeScriptTag": "authorizationServer",
    "description": "Success",
    "parameters": [
      {
        "name": "authServerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "AUTHSERVERID"
      },
      {
        "name": "scopeId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SCOPEID"
      },
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "consent",
        "schema": "string",
        "description": ""
      },
      {
        "name": "default",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "displayName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "metadataPublish",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "system",
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
    "url": "/api/v1/brands",
    "method": "getAllBrands",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Brand",
    "typeScriptTag": "brand",
    "description": "List Brands",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/brands/{brandId}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Brand",
    "typeScriptTag": "brand",
    "description": "Get Brand",
    "parameters": [
      {
        "name": "brandId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "BRANDID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      }
    ]
  },
  {
    "url": "/api/v1/brands/{brandId}",
    "method": "updateByBrandId",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Brand",
    "typeScriptTag": "brand",
    "description": "Update Brand",
    "parameters": [
      {
        "name": "brandId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "BRANDID"
      },
      {
        "name": "_links",
        "schema": "object",
        "description": ""
      },
      {
        "name": "agreeToCustomPrivacyPolicy",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "customPrivacyPolicyUrl",
        "schema": "string",
        "description": ""
      },
      {
        "name": "id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "removePoweredByOkta",
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
        "description": "Bad Request"
      }
    ]
  },
  {
    "url": "/api/v1/brands/{brandId}/templates/email",
    "method": "listEmailTemplates",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Brand",
    "typeScriptTag": "brand",
    "description": "List Email Templates",
    "parameters": [
      {
        "name": "brandId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "BRANDID"
      },
      {
        "name": "after",
        "schema": "string",
        "description": "Specifies the pagination cursor for the next page of email templates."
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Specifies the number of results returned (maximum 200)",
        "default": 20
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/brands/{brandId}/templates/email/{templateName}",
    "method": "getEmailTemplate",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Brand",
    "typeScriptTag": "brand",
    "description": "Get Email Template",
    "parameters": [
      {
        "name": "brandId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "BRANDID"
      },
      {
        "name": "templateName",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TEMPLATENAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/brands/{brandId}/templates/email/{templateName}/customizations",
    "method": "deleteEmailTemplateCustomizations",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Brand",
    "typeScriptTag": "brand",
    "description": "Delete Email Template Customization",
    "parameters": [
      {
        "name": "brandId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "BRANDID"
      },
      {
        "name": "templateName",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TEMPLATENAME"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Success"
      }
    ]
  },
  {
    "url": "/api/v1/brands/{brandId}/templates/email/{templateName}/customizations",
    "method": "listEmailTemplateCustomizations",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Brand",
    "typeScriptTag": "brand",
    "description": "List Email Template Customization",
    "parameters": [
      {
        "name": "brandId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "BRANDID"
      },
      {
        "name": "templateName",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TEMPLATENAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/brands/{brandId}/templates/email/{templateName}/customizations",
    "method": "createEmailTemplateCustomization",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Brand",
    "typeScriptTag": "brand",
    "description": "Create Email Template Customization",
    "parameters": [
      {
        "name": "brandId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "BRANDID"
      },
      {
        "name": "templateName",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TEMPLATENAME"
      },
      {
        "name": "body",
        "schema": "string",
        "description": ""
      },
      {
        "name": "isDefault",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "language",
        "schema": "string",
        "description": ""
      },
      {
        "name": "subject",
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
        "statusCode": "409",
        "description": "Conflict"
      }
    ]
  },
  {
    "url": "/api/v1/brands/{brandId}/templates/email/{templateName}/customizations/{customizationId}",
    "method": "deleteEmailCustomization",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Brand",
    "typeScriptTag": "brand",
    "description": "Delete Email Customization",
    "parameters": [
      {
        "name": "brandId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "BRANDID"
      },
      {
        "name": "templateName",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TEMPLATENAME"
      },
      {
        "name": "customizationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CUSTOMIZATIONID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
      },
      {
        "statusCode": "409",
        "description": "Conflict"
      }
    ]
  },
  {
    "url": "/api/v1/brands/{brandId}/templates/email/{templateName}/customizations/{customizationId}",
    "method": "getEmailTemplateCustomizationById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Brand",
    "typeScriptTag": "brand",
    "description": "Get Email Template Customization",
    "parameters": [
      {
        "name": "brandId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "BRANDID"
      },
      {
        "name": "templateName",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TEMPLATENAME"
      },
      {
        "name": "customizationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CUSTOMIZATIONID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/brands/{brandId}/templates/email/{templateName}/customizations/{customizationId}",
    "method": "updateEmailCustomization",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Brand",
    "typeScriptTag": "brand",
    "description": "Update Email Customization",
    "parameters": [
      {
        "name": "brandId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "BRANDID"
      },
      {
        "name": "templateName",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TEMPLATENAME"
      },
      {
        "name": "customizationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CUSTOMIZATIONID"
      },
      {
        "name": "body",
        "schema": "string",
        "description": ""
      },
      {
        "name": "isDefault",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "language",
        "schema": "string",
        "description": ""
      },
      {
        "name": "subject",
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
        "statusCode": "409",
        "description": "Conflict"
      }
    ]
  },
  {
    "url": "/api/v1/brands/{brandId}/templates/email/{templateName}/customizations/{customizationId}/preview",
    "method": "getEmailCustomizationPreview",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Brand",
    "typeScriptTag": "brand",
    "description": "Get Preview Content of Email Customization",
    "parameters": [
      {
        "name": "brandId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "BRANDID"
      },
      {
        "name": "templateName",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TEMPLATENAME"
      },
      {
        "name": "customizationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CUSTOMIZATIONID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/brands/{brandId}/templates/email/{templateName}/default-content",
    "method": "getEmailTemplateDefaultContent",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Brand",
    "typeScriptTag": "brand",
    "description": "Get Default Content of Email Template",
    "parameters": [
      {
        "name": "brandId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "BRANDID"
      },
      {
        "name": "templateName",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TEMPLATENAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/brands/{brandId}/templates/email/{templateName}/default-content/preview",
    "method": "getEmailTemplateDefaultContentPreview",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Brand",
    "typeScriptTag": "brand",
    "description": "Get Preview of Email Template Default Content",
    "parameters": [
      {
        "name": "brandId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "BRANDID"
      },
      {
        "name": "templateName",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TEMPLATENAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/brands/{brandId}/templates/email/{templateName}/test",
    "method": "getEmailTemplateDefaultContentPreview",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Brand",
    "typeScriptTag": "brand",
    "description": "Get Preview of Email Template Default Content",
    "parameters": [
      {
        "name": "brandId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "BRANDID"
      },
      {
        "name": "templateName",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TEMPLATENAME"
      },
      {
        "name": "customizationId",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
      }
    ]
  },
  {
    "url": "/api/v1/brands/{brandId}/themes",
    "method": "getThemes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Brand",
    "typeScriptTag": "brand",
    "description": "Get Brand Themes",
    "parameters": [
      {
        "name": "brandId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "BRANDID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/brands/{brandId}/themes/{themeId}",
    "method": "getThemeById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Brand",
    "typeScriptTag": "brand",
    "description": "Get a theme for a brand",
    "parameters": [
      {
        "name": "brandId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "BRANDID"
      },
      {
        "name": "themeId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "THEMEID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/brands/{brandId}/themes/{themeId}",
    "method": "updateTheme",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Brand",
    "typeScriptTag": "brand",
    "description": "Update a theme for a brand",
    "parameters": [
      {
        "name": "brandId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "BRANDID"
      },
      {
        "name": "themeId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "THEMEID"
      },
      {
        "name": "_links",
        "schema": "object",
        "description": ""
      },
      {
        "name": "backgroundImage",
        "schema": "string",
        "description": ""
      },
      {
        "name": "emailTemplateTouchPointVariant",
        "schema": "string",
        "description": ""
      },
      {
        "name": "endUserDashboardTouchPointVariant",
        "schema": "string",
        "description": ""
      },
      {
        "name": "errorPageTouchPointVariant",
        "schema": "string",
        "description": ""
      },
      {
        "name": "primaryColorContrastHex",
        "schema": "string",
        "description": ""
      },
      {
        "name": "primaryColorHex",
        "schema": "string",
        "description": ""
      },
      {
        "name": "secondaryColorContrastHex",
        "schema": "string",
        "description": ""
      },
      {
        "name": "secondaryColorHex",
        "schema": "string",
        "description": ""
      },
      {
        "name": "signInPageTouchPointVariant",
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
        "description": "Bad Request"
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      }
    ]
  },
  {
    "url": "/api/v1/brands/{brandId}/themes/{themeId}/background-image",
    "method": "deleteThemeBackgroundImage",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Brand",
    "typeScriptTag": "brand",
    "description": "Deletes a Theme background image",
    "parameters": [
      {
        "name": "brandId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "BRANDID"
      },
      {
        "name": "themeId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "THEMEID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      }
    ]
  },
  {
    "url": "/api/v1/brands/{brandId}/themes/{themeId}/background-image",
    "method": "updateThemeBackgroundImage",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Brand",
    "typeScriptTag": "brand",
    "description": "Updates the background image for your Theme",
    "parameters": [
      {
        "name": "brandId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "BRANDID"
      },
      {
        "name": "themeId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "THEMEID"
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
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad Request"
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      }
    ]
  },
  {
    "url": "/api/v1/brands/{brandId}/themes/{themeId}/favicon",
    "method": "deleteThemeFavicon",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Brand",
    "typeScriptTag": "brand",
    "description": "Deletes a Theme favicon. The org then uses the Okta default favicon.",
    "parameters": [
      {
        "name": "brandId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "BRANDID"
      },
      {
        "name": "themeId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "THEMEID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      }
    ]
  },
  {
    "url": "/api/v1/brands/{brandId}/themes/{themeId}/favicon",
    "method": "updateThemeFavicon",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Brand",
    "typeScriptTag": "brand",
    "description": "Updates the favicon for your theme",
    "parameters": [
      {
        "name": "brandId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "BRANDID"
      },
      {
        "name": "themeId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "THEMEID"
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
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad Request"
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      }
    ]
  },
  {
    "url": "/api/v1/brands/{brandId}/themes/{themeId}/logo",
    "method": "deleteThemeLogo",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Brand",
    "typeScriptTag": "brand",
    "description": "Deletes a Theme logo. The org then uses the Okta default logo.",
    "parameters": [
      {
        "name": "brandId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "BRANDID"
      },
      {
        "name": "themeId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "THEMEID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      }
    ]
  },
  {
    "url": "/api/v1/brands/{brandId}/themes/{themeId}/logo",
    "method": "updateThemeLogo",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Brand",
    "typeScriptTag": "brand",
    "description": "Update a themes logo",
    "parameters": [
      {
        "name": "brandId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "BRANDID"
      },
      {
        "name": "themeId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "THEMEID"
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
        "description": "Bad Request"
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      }
    ]
  },
  {
    "url": "/api/v1/domains",
    "method": "listVerifiedCustom",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Domain",
    "typeScriptTag": "domain",
    "description": "List Domains",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/domains",
    "method": "createNewDomain",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Domain",
    "typeScriptTag": "domain",
    "description": "Create Domain",
    "parameters": [
      {
        "name": "certificateSourceType",
        "schema": "string",
        "description": ""
      },
      {
        "name": "dnsRecords",
        "schema": "array",
        "description": ""
      },
      {
        "name": "domain",
        "schema": "string",
        "description": ""
      },
      {
        "name": "id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "publicCertificate",
        "schema": "undefined",
        "description": ""
      },
      {
        "name": "validationStatus",
        "schema": "string",
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
    "url": "/api/v1/domains/{domainId}",
    "method": "removeById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Domain",
    "typeScriptTag": "domain",
    "description": "Delete Domain",
    "parameters": [
      {
        "name": "domainId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DOMAINID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
      }
    ]
  },
  {
    "url": "/api/v1/domains/{domainId}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Domain",
    "typeScriptTag": "domain",
    "description": "Get Domain",
    "parameters": [
      {
        "name": "domainId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DOMAINID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/domains/{domainId}/certificate",
    "method": "createCertificate",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Domain",
    "typeScriptTag": "domain",
    "description": "Create Certificate",
    "parameters": [
      {
        "name": "domainId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DOMAINID"
      },
      {
        "name": "certificate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "certificateChain",
        "schema": "string",
        "description": ""
      },
      {
        "name": "privateKey",
        "schema": "string",
        "description": ""
      },
      {
        "name": "type",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
      }
    ]
  },
  {
    "url": "/api/v1/domains/{domainId}/verify",
    "method": "verifyById",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Domain",
    "typeScriptTag": "domain",
    "description": "Verify Domain",
    "parameters": [
      {
        "name": "domainId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DOMAINID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/eventHooks",
    "method": "listSuccessEvents",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "EventHook",
    "typeScriptTag": "eventHook",
    "description": "Success",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/eventHooks",
    "method": "createSuccess",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "EventHook",
    "typeScriptTag": "eventHook",
    "description": "Success",
    "parameters": [
      {
        "name": "_links",
        "schema": "object",
        "description": ""
      },
      {
        "name": "channel",
        "schema": "object",
        "description": ""
      },
      {
        "name": "created",
        "schema": "string",
        "description": ""
      },
      {
        "name": "createdBy",
        "schema": "string",
        "description": ""
      },
      {
        "name": "events",
        "schema": "object",
        "description": ""
      },
      {
        "name": "id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lastUpdated",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "status",
        "schema": "string",
        "description": ""
      },
      {
        "name": "verificationStatus",
        "schema": "string",
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
    "url": "/api/v1/eventHooks/{eventHookId}",
    "method": "removeSuccessEvent",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "EventHook",
    "typeScriptTag": "eventHook",
    "description": "Success",
    "parameters": [
      {
        "name": "eventHookId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EVENTHOOKID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
      }
    ]
  },
  {
    "url": "/api/v1/eventHooks/{eventHookId}",
    "method": "getSuccessEvent",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "EventHook",
    "typeScriptTag": "eventHook",
    "description": "Success",
    "parameters": [
      {
        "name": "eventHookId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EVENTHOOKID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/eventHooks/{eventHookId}",
    "method": "updateSuccessEvent",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "EventHook",
    "typeScriptTag": "eventHook",
    "description": "Success",
    "parameters": [
      {
        "name": "eventHookId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EVENTHOOKID"
      },
      {
        "name": "_links",
        "schema": "object",
        "description": ""
      },
      {
        "name": "channel",
        "schema": "object",
        "description": ""
      },
      {
        "name": "created",
        "schema": "string",
        "description": ""
      },
      {
        "name": "createdBy",
        "schema": "string",
        "description": ""
      },
      {
        "name": "events",
        "schema": "object",
        "description": ""
      },
      {
        "name": "id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lastUpdated",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "status",
        "schema": "string",
        "description": ""
      },
      {
        "name": "verificationStatus",
        "schema": "string",
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
    "url": "/api/v1/eventHooks/{eventHookId}/lifecycle/activate",
    "method": "activateLifecycleSuccess",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "EventHook",
    "typeScriptTag": "eventHook",
    "description": "Success",
    "parameters": [
      {
        "name": "eventHookId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EVENTHOOKID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/eventHooks/{eventHookId}/lifecycle/deactivate",
    "method": "deactivateLifecycleEvent",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "EventHook",
    "typeScriptTag": "eventHook",
    "description": "Success",
    "parameters": [
      {
        "name": "eventHookId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EVENTHOOKID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/eventHooks/{eventHookId}/lifecycle/verify",
    "method": "verifyLifecycleSuccess",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "EventHook",
    "typeScriptTag": "eventHook",
    "description": "Success",
    "parameters": [
      {
        "name": "eventHookId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EVENTHOOKID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/features",
    "method": "getSuccess",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Feature",
    "typeScriptTag": "feature",
    "description": "Success",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/features/{featureId}",
    "method": "getSuccessById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Feature",
    "typeScriptTag": "feature",
    "description": "Success",
    "parameters": [
      {
        "name": "featureId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FEATUREID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/features/{featureId}/dependencies",
    "method": "listDependencies",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Feature",
    "typeScriptTag": "feature",
    "description": "Success",
    "parameters": [
      {
        "name": "featureId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FEATUREID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/features/{featureId}/dependents",
    "method": "listDependents",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Feature",
    "typeScriptTag": "feature",
    "description": "Success",
    "parameters": [
      {
        "name": "featureId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FEATUREID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/features/{featureId}/{lifecycle}",
    "method": "createLifecycleSuccess",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Feature",
    "typeScriptTag": "feature",
    "description": "Success",
    "parameters": [
      {
        "name": "featureId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FEATUREID"
      },
      {
        "name": "lifecycle",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "LIFECYCLE"
      },
      {
        "name": "mode",
        "schema": "string",
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
    "url": "/api/v1/groups",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Group",
    "typeScriptTag": "group",
    "description": "List Groups",
    "parameters": [
      {
        "name": "q",
        "schema": "string",
        "description": "Searches the name property of groups for matching value"
      },
      {
        "name": "filter",
        "schema": "string",
        "description": "Filter expression for groups"
      },
      {
        "name": "after",
        "schema": "string",
        "description": "Specifies the pagination cursor for the next page of groups"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Specifies the number of group results in a page",
        "default": 10000
      },
      {
        "name": "expand",
        "schema": "string",
        "description": "If specified, it causes additional metadata to be included in the response."
      },
      {
        "name": "search",
        "schema": "string",
        "description": "Searches for groups with a supported filtering expression for all attributes except for _embedded, _links, and objectClass"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/groups",
    "method": "createNewGroup",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Group",
    "typeScriptTag": "group",
    "description": "Add Group",
    "parameters": [
      {
        "name": "_embedded",
        "schema": "object",
        "description": ""
      },
      {
        "name": "_links",
        "schema": "object",
        "description": ""
      },
      {
        "name": "created",
        "schema": "string",
        "description": ""
      },
      {
        "name": "id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lastMembershipUpdated",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lastUpdated",
        "schema": "string",
        "description": ""
      },
      {
        "name": "objectClass",
        "schema": "array",
        "description": ""
      },
      {
        "name": "profile",
        "schema": "object",
        "description": ""
      },
      {
        "name": "type",
        "schema": "string",
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
    "url": "/api/v1/groups/rules",
    "method": "getAllRules",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Group",
    "typeScriptTag": "group",
    "description": "List Group Rules",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "description": "Specifies the number of rule results in a page",
        "default": 50
      },
      {
        "name": "after",
        "schema": "string",
        "description": "Specifies the pagination cursor for the next page of rules"
      },
      {
        "name": "search",
        "schema": "string",
        "description": "Specifies the keyword to search fules for"
      },
      {
        "name": "expand",
        "schema": "string",
        "description": "If specified as `groupIdToGroupNameMap`, then show group names"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/groups/rules",
    "method": "addRule",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Group",
    "typeScriptTag": "group",
    "description": "Create Group Rule",
    "parameters": [
      {
        "name": "actions",
        "schema": "object",
        "description": ""
      },
      {
        "name": "conditions",
        "schema": "object",
        "description": ""
      },
      {
        "name": "created",
        "schema": "string",
        "description": ""
      },
      {
        "name": "id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lastUpdated",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "status",
        "schema": "string",
        "description": ""
      },
      {
        "name": "type",
        "schema": "string",
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
    "url": "/api/v1/groups/rules/{ruleId}",
    "method": "removeRuleById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Group",
    "typeScriptTag": "group",
    "description": "Delete a group Rule",
    "parameters": [
      {
        "name": "ruleId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "RULEID"
      },
      {
        "name": "removeUsers",
        "schema": "boolean",
        "description": "Indicates whether to keep or remove users from groups assigned by this rule."
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "Accepted"
      }
    ]
  },
  {
    "url": "/api/v1/groups/rules/{ruleId}",
    "method": "getGroupRuleById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Group",
    "typeScriptTag": "group",
    "description": "Get Group Rule",
    "parameters": [
      {
        "name": "ruleId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "RULEID"
      },
      {
        "name": "expand",
        "schema": "string",
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
    "url": "/api/v1/groups/rules/{ruleId}",
    "method": "updateRule",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Group",
    "typeScriptTag": "group",
    "description": "Updates a group rule. Only `INACTIVE` rules can be updated.",
    "parameters": [
      {
        "name": "ruleId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "RULEID"
      },
      {
        "name": "actions",
        "schema": "object",
        "description": ""
      },
      {
        "name": "conditions",
        "schema": "object",
        "description": ""
      },
      {
        "name": "created",
        "schema": "string",
        "description": ""
      },
      {
        "name": "id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lastUpdated",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "status",
        "schema": "string",
        "description": ""
      },
      {
        "name": "type",
        "schema": "string",
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
    "url": "/api/v1/groups/rules/{ruleId}/lifecycle/activate",
    "method": "activateRuleLifecycle",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Group",
    "typeScriptTag": "group",
    "description": "Activate a group Rule",
    "parameters": [
      {
        "name": "ruleId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "RULEID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
      }
    ]
  },
  {
    "url": "/api/v1/groups/rules/{ruleId}/lifecycle/deactivate",
    "method": "deactivateRuleLifecycle",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Group",
    "typeScriptTag": "group",
    "description": "Deactivate a group Rule",
    "parameters": [
      {
        "name": "ruleId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "RULEID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
      }
    ]
  },
  {
    "url": "/api/v1/groups/{groupId}",
    "method": "removeOperation",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Group",
    "typeScriptTag": "group",
    "description": "Remove Group",
    "parameters": [
      {
        "name": "groupId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "GROUPID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
      }
    ]
  },
  {
    "url": "/api/v1/groups/{groupId}",
    "method": "getRules",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Group",
    "typeScriptTag": "group",
    "description": "List Group Rules",
    "parameters": [
      {
        "name": "groupId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "GROUPID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/groups/{groupId}",
    "method": "updateProfile",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Group",
    "typeScriptTag": "group",
    "description": "Update Group",
    "parameters": [
      {
        "name": "groupId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "GROUPID"
      },
      {
        "name": "_embedded",
        "schema": "object",
        "description": ""
      },
      {
        "name": "_links",
        "schema": "object",
        "description": ""
      },
      {
        "name": "created",
        "schema": "string",
        "description": ""
      },
      {
        "name": "id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lastMembershipUpdated",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lastUpdated",
        "schema": "string",
        "description": ""
      },
      {
        "name": "objectClass",
        "schema": "array",
        "description": ""
      },
      {
        "name": "profile",
        "schema": "object",
        "description": ""
      },
      {
        "name": "type",
        "schema": "string",
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
    "url": "/api/v1/groups/{groupId}/apps",
    "method": "listAssignedApps",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Group",
    "typeScriptTag": "group",
    "description": "List Assigned Applications",
    "parameters": [
      {
        "name": "groupId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "GROUPID"
      },
      {
        "name": "after",
        "schema": "string",
        "description": "Specifies the pagination cursor for the next page of apps"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Specifies the number of app results for a page",
        "default": 20
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/groups/{groupId}/roles",
    "method": "getRoleList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Group",
    "typeScriptTag": "group",
    "description": "Success",
    "parameters": [
      {
        "name": "groupId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "GROUPID"
      },
      {
        "name": "expand",
        "schema": "string",
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
    "url": "/api/v1/groups/{groupId}/roles",
    "method": "assignRoleToGroup",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Group",
    "typeScriptTag": "group",
    "description": "Assigns a Role to a Group",
    "parameters": [
      {
        "name": "groupId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "GROUPID"
      },
      {
        "name": "disableNotifications",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "type",
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
        "statusCode": "201",
        "description": "Success"
      }
    ]
  },
  {
    "url": "/api/v1/groups/{groupId}/roles/{roleId}",
    "method": "unassignRole",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Group",
    "typeScriptTag": "group",
    "description": "Unassigns a Role from a Group",
    "parameters": [
      {
        "name": "groupId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "GROUPID"
      },
      {
        "name": "roleId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ROLEID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
      }
    ]
  },
  {
    "url": "/api/v1/groups/{groupId}/roles/{roleId}",
    "method": "getRoleSuccess",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Group",
    "typeScriptTag": "group",
    "description": "Success",
    "parameters": [
      {
        "name": "groupId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "GROUPID"
      },
      {
        "name": "roleId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ROLEID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/groups/{groupId}/roles/{roleId}/targets/catalog/apps",
    "method": "getRoleTargetsCatalogApps",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Group",
    "typeScriptTag": "group",
    "description": "Lists all App targets for an `APP_ADMIN` Role assigned to a Group. This methods return list may include full Applications or Instances. The response for an instance will have an `ID` value, while Application will not have an ID.",
    "parameters": [
      {
        "name": "groupId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "GROUPID"
      },
      {
        "name": "roleId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ROLEID"
      },
      {
        "name": "after",
        "schema": "string",
        "description": ""
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "",
        "default": 20
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/groups/{groupId}/roles/{roleId}/targets/catalog/apps/{appName}",
    "method": "deleteTargetGroupRolesCatalogApps",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Group",
    "typeScriptTag": "group",
    "description": "Success",
    "parameters": [
      {
        "name": "groupId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "GROUPID"
      },
      {
        "name": "roleId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ROLEID"
      },
      {
        "name": "appName",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "APPNAME"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
      }
    ]
  },
  {
    "url": "/api/v1/groups/{groupId}/roles/{roleId}/targets/catalog/apps/{appName}",
    "method": "updateRolesCatalogApps",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Group",
    "typeScriptTag": "group",
    "description": "Success",
    "parameters": [
      {
        "name": "groupId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "GROUPID"
      },
      {
        "name": "roleId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ROLEID"
      },
      {
        "name": "appName",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "APPNAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      }
    ]
  },
  {
    "url": "/api/v1/groups/{groupId}/roles/{roleId}/targets/catalog/apps/{appName}/{applicationId}",
    "method": "removeAppInstanceTargetToAppAdminRoleGivenToGroup",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Group",
    "typeScriptTag": "group",
    "description": "Remove App Instance Target to App Administrator Role given to a Group",
    "parameters": [
      {
        "name": "groupId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "GROUPID"
      },
      {
        "name": "roleId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ROLEID"
      },
      {
        "name": "appName",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "APPNAME"
      },
      {
        "name": "applicationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "APPLICATIONID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
      }
    ]
  },
  {
    "url": "/api/v1/groups/{groupId}/roles/{roleId}/targets/catalog/apps/{appName}/{applicationId}",
    "method": "addAppInstanceTargetToAppAdminRoleGivenToGroup",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Group",
    "typeScriptTag": "group",
    "description": "Add App Instance Target to App Administrator Role given to a Group",
    "parameters": [
      {
        "name": "groupId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "GROUPID"
      },
      {
        "name": "roleId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ROLEID"
      },
      {
        "name": "appName",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "APPNAME"
      },
      {
        "name": "applicationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "APPLICATIONID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
      }
    ]
  },
  {
    "url": "/api/v1/groups/{groupId}/roles/{roleId}/targets/groups",
    "method": "listRoleTargetsGroups",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Group",
    "typeScriptTag": "group",
    "description": "Success",
    "parameters": [
      {
        "name": "groupId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "GROUPID"
      },
      {
        "name": "roleId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ROLEID"
      },
      {
        "name": "after",
        "schema": "string",
        "description": ""
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "",
        "default": 20
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/groups/{groupId}/roles/{roleId}/targets/groups/{targetGroupId}",
    "method": "removeTargetGroup",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Group",
    "typeScriptTag": "group",
    "description": "",
    "parameters": [
      {
        "name": "groupId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "GROUPID"
      },
      {
        "name": "roleId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ROLEID"
      },
      {
        "name": "targetGroupId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TARGETGROUPID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
      }
    ]
  },
  {
    "url": "/api/v1/groups/{groupId}/roles/{roleId}/targets/groups/{targetGroupId}",
    "method": "updateTargetGroupsRole",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Group",
    "typeScriptTag": "group",
    "description": "",
    "parameters": [
      {
        "name": "groupId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "GROUPID"
      },
      {
        "name": "roleId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ROLEID"
      },
      {
        "name": "targetGroupId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TARGETGROUPID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
      }
    ]
  },
  {
    "url": "/api/v1/groups/{groupId}/users",
    "method": "enumerateGroupMembers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Group",
    "typeScriptTag": "group",
    "description": "List Group Members",
    "parameters": [
      {
        "name": "groupId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "GROUPID"
      },
      {
        "name": "after",
        "schema": "string",
        "description": "Specifies the pagination cursor for the next page of users"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Specifies the number of user results in a page",
        "default": 1000
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/groups/{groupId}/users/{userId}",
    "method": "removeUserFrom",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Group",
    "typeScriptTag": "group",
    "description": "Remove User from Group",
    "parameters": [
      {
        "name": "groupId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "GROUPID"
      },
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
      }
    ]
  },
  {
    "url": "/api/v1/groups/{groupId}/users/{userId}",
    "method": "addUserToGroup",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Group",
    "typeScriptTag": "group",
    "description": "Add User to Group",
    "parameters": [
      {
        "name": "groupId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "GROUPID"
      },
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
      }
    ]
  },
  {
    "url": "/api/v1/idps",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "IdentityProvider",
    "typeScriptTag": "identityProvider",
    "description": "List Identity Providers",
    "parameters": [
      {
        "name": "q",
        "schema": "string",
        "description": "Searches the name property of IdPs for matching value"
      },
      {
        "name": "after",
        "schema": "string",
        "description": "Specifies the pagination cursor for the next page of IdPs"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Specifies the number of IdP results in a page",
        "default": 20
      },
      {
        "name": "type",
        "schema": "string",
        "description": "Filters IdPs by type"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/idps",
    "method": "addNewIdp",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "IdentityProvider",
    "typeScriptTag": "identityProvider",
    "description": "Add Identity Provider",
    "parameters": [
      {
        "name": "_links",
        "schema": "object",
        "description": ""
      },
      {
        "name": "created",
        "schema": "string",
        "description": ""
      },
      {
        "name": "id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "issuerMode",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lastUpdated",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "policy",
        "schema": "object",
        "description": ""
      },
      {
        "name": "protocol",
        "schema": "object",
        "description": ""
      },
      {
        "name": "status",
        "schema": "string",
        "description": ""
      },
      {
        "name": "type",
        "schema": "string",
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
    "url": "/api/v1/idps/credentials/keys",
    "method": "enumerateIdpKeys",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "IdentityProvider",
    "typeScriptTag": "identityProvider",
    "description": "List Keys",
    "parameters": [
      {
        "name": "after",
        "schema": "string",
        "description": "Specifies the pagination cursor for the next page of keys"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Specifies the number of key results in a page",
        "default": 20
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/idps/credentials/keys",
    "method": "addX509CertificatePublicKey",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "IdentityProvider",
    "typeScriptTag": "identityProvider",
    "description": "Add X.509 Certificate Public Key",
    "parameters": [
      {
        "name": "_links",
        "schema": "object",
        "description": ""
      },
      {
        "name": "alg",
        "schema": "string",
        "description": ""
      },
      {
        "name": "created",
        "schema": "string",
        "description": ""
      },
      {
        "name": "e",
        "schema": "string",
        "description": ""
      },
      {
        "name": "expiresAt",
        "schema": "string",
        "description": ""
      },
      {
        "name": "key_ops",
        "schema": "array",
        "description": ""
      },
      {
        "name": "kid",
        "schema": "string",
        "description": ""
      },
      {
        "name": "kty",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lastUpdated",
        "schema": "string",
        "description": ""
      },
      {
        "name": "n",
        "schema": "string",
        "description": ""
      },
      {
        "name": "status",
        "schema": "string",
        "description": ""
      },
      {
        "name": "use",
        "schema": "string",
        "description": ""
      },
      {
        "name": "x5c",
        "schema": "array",
        "description": ""
      },
      {
        "name": "x5t",
        "schema": "string",
        "description": ""
      },
      {
        "name": "x5t#S256",
        "schema": "string",
        "description": ""
      },
      {
        "name": "x5u",
        "schema": "string",
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
    "url": "/api/v1/idps/credentials/keys/{keyId}",
    "method": "deleteKeyCredential",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "IdentityProvider",
    "typeScriptTag": "identityProvider",
    "description": "Delete Key",
    "parameters": [
      {
        "name": "keyId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "KEYID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
      }
    ]
  },
  {
    "url": "/api/v1/idps/credentials/keys/{keyId}",
    "method": "getKeyCredentialByIdp",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "IdentityProvider",
    "typeScriptTag": "identityProvider",
    "description": "Get Key",
    "parameters": [
      {
        "name": "keyId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "KEYID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/idps/{idpId}",
    "method": "removeIdp",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "IdentityProvider",
    "typeScriptTag": "identityProvider",
    "description": "Delete Identity Provider",
    "parameters": [
      {
        "name": "idpId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "IDPID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
      }
    ]
  },
  {
    "url": "/api/v1/idps/{idpId}",
    "method": "getByIdp",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "IdentityProvider",
    "typeScriptTag": "identityProvider",
    "description": "Get Identity Provider",
    "parameters": [
      {
        "name": "idpId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "IDPID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/idps/{idpId}",
    "method": "updateConfiguration",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "IdentityProvider",
    "typeScriptTag": "identityProvider",
    "description": "Update Identity Provider",
    "parameters": [
      {
        "name": "idpId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "IDPID"
      },
      {
        "name": "_links",
        "schema": "object",
        "description": ""
      },
      {
        "name": "created",
        "schema": "string",
        "description": ""
      },
      {
        "name": "id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "issuerMode",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lastUpdated",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "policy",
        "schema": "object",
        "description": ""
      },
      {
        "name": "protocol",
        "schema": "object",
        "description": ""
      },
      {
        "name": "status",
        "schema": "string",
        "description": ""
      },
      {
        "name": "type",
        "schema": "string",
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
    "url": "/api/v1/idps/{idpId}/credentials/csrs",
    "method": "listCsrsForCertificateSigningRequests",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "IdentityProvider",
    "typeScriptTag": "identityProvider",
    "description": "List Certificate Signing Requests for IdP",
    "parameters": [
      {
        "name": "idpId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "IDPID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/idps/{idpId}/credentials/csrs",
    "method": "generateCsr",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "IdentityProvider",
    "typeScriptTag": "identityProvider",
    "description": "Generate Certificate Signing Request for IdP",
    "parameters": [
      {
        "name": "idpId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "IDPID"
      },
      {
        "name": "subject",
        "schema": "undefined",
        "description": ""
      },
      {
        "name": "subjectAltNames",
        "schema": "undefined",
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
    "url": "/api/v1/idps/{idpId}/credentials/csrs/{csrId}",
    "method": "revokeCsrForIdentityProvider",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "IdentityProvider",
    "typeScriptTag": "identityProvider",
    "description": "Revoke a Certificate Signing Request and delete the key pair from the IdP",
    "parameters": [
      {
        "name": "idpId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "IDPID"
      },
      {
        "name": "csrId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CSRID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
      }
    ]
  },
  {
    "url": "/api/v1/idps/{idpId}/credentials/csrs/{csrId}",
    "method": "getCsrByIdp",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "IdentityProvider",
    "typeScriptTag": "identityProvider",
    "description": "Gets a specific Certificate Signing Request model by id",
    "parameters": [
      {
        "name": "idpId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "IDPID"
      },
      {
        "name": "csrId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CSRID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/idps/{idpId}/credentials/csrs/{csrId}/lifecycle/publish",
    "method": "updateCsrLifecyclePublish",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "IdentityProvider",
    "typeScriptTag": "identityProvider",
    "description": "Update the Certificate Signing Request with a signed X.509 certificate and add it into the signing key credentials for the IdP.",
    "parameters": [
      {
        "name": "idpId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "IDPID"
      },
      {
        "name": "csrId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CSRID"
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
    "url": "/api/v1/idps/{idpId}/credentials/keys",
    "method": "listSigningKeyCredentials",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "IdentityProvider",
    "typeScriptTag": "identityProvider",
    "description": "List Signing Key Credentials for IdP",
    "parameters": [
      {
        "name": "idpId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "IDPID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/idps/{idpId}/credentials/keys/generate",
    "method": "generateNewSigningKeyCredential",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "IdentityProvider",
    "typeScriptTag": "identityProvider",
    "description": "Generate New IdP Signing Key Credential",
    "parameters": [
      {
        "name": "idpId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "IDPID"
      },
      {
        "name": "validityYears",
        "schema": "integer",
        "required": true,
        "description": "expiry of the IdP Key Credential",
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
    "url": "/api/v1/idps/{idpId}/credentials/keys/{keyId}",
    "method": "getSigningKeyCredentialByIdp",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "IdentityProvider",
    "typeScriptTag": "identityProvider",
    "description": "Get Signing Key Credential for IdP",
    "parameters": [
      {
        "name": "idpId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "IDPID"
      },
      {
        "name": "keyId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "KEYID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/idps/{idpId}/credentials/keys/{keyId}/clone",
    "method": "cloneSigningKeyCredential",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "IdentityProvider",
    "typeScriptTag": "identityProvider",
    "description": "Clone Signing Key Credential for IdP",
    "parameters": [
      {
        "name": "idpId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "IDPID"
      },
      {
        "name": "keyId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "KEYID"
      },
      {
        "name": "targetIdpId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TARGETIDPID"
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
    "url": "/api/v1/idps/{idpId}/lifecycle/activate",
    "method": "activateIdpLifecycle",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "IdentityProvider",
    "typeScriptTag": "identityProvider",
    "description": "Activate Identity Provider",
    "parameters": [
      {
        "name": "idpId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "IDPID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/idps/{idpId}/lifecycle/deactivate",
    "method": "deactivateIdp",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "IdentityProvider",
    "typeScriptTag": "identityProvider",
    "description": "Deactivate Identity Provider",
    "parameters": [
      {
        "name": "idpId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "IDPID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/idps/{idpId}/users",
    "method": "getUser",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "IdentityProvider",
    "typeScriptTag": "identityProvider",
    "description": "Find Users",
    "parameters": [
      {
        "name": "idpId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "IDPID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/idps/{idpId}/users/{userId}",
    "method": "unlinkUser",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "IdentityProvider",
    "typeScriptTag": "identityProvider",
    "description": "Unlink User from IdP",
    "parameters": [
      {
        "name": "idpId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "IDPID"
      },
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
      }
    ]
  },
  {
    "url": "/api/v1/idps/{idpId}/users/{userId}",
    "method": "getLinkedUserById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "IdentityProvider",
    "typeScriptTag": "identityProvider",
    "description": "Fetches a linked IdP user by ID",
    "parameters": [
      {
        "name": "idpId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "IDPID"
      },
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/idps/{idpId}/users/{userId}",
    "method": "linkUserToIdpWithoutTransaction",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "IdentityProvider",
    "typeScriptTag": "identityProvider",
    "description": "Link a user to a Social IdP without a transaction",
    "parameters": [
      {
        "name": "idpId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "IDPID"
      },
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERID"
      },
      {
        "name": "externalId",
        "schema": "string",
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
    "url": "/api/v1/idps/{idpId}/users/{userId}/credentials/tokens",
    "method": "getSocialAuthTokens",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "IdentityProvider",
    "typeScriptTag": "identityProvider",
    "description": "Social Authentication Token Operation",
    "parameters": [
      {
        "name": "idpId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "IDPID"
      },
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/inlineHooks",
    "method": "getSuccess",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "InlineHook",
    "typeScriptTag": "inlineHook",
    "description": "Success",
    "parameters": [
      {
        "name": "type",
        "schema": "string",
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
    "url": "/api/v1/inlineHooks",
    "method": "createSuccess",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "InlineHook",
    "typeScriptTag": "inlineHook",
    "description": "Success",
    "parameters": [
      {
        "name": "version",
        "schema": "string",
        "description": ""
      },
      {
        "name": "_links",
        "schema": "object",
        "description": ""
      },
      {
        "name": "channel",
        "schema": "object",
        "description": ""
      },
      {
        "name": "created",
        "schema": "string",
        "description": ""
      },
      {
        "name": "id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lastUpdated",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "status",
        "schema": "string",
        "description": ""
      },
      {
        "name": "type",
        "schema": "string",
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
    "url": "/api/v1/inlineHooks/{inlineHookId}",
    "method": "deleteMatchingById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "InlineHook",
    "typeScriptTag": "inlineHook",
    "description": "Deletes the Inline Hook matching the provided id. Once deleted, the Inline Hook is unrecoverable. As a safety precaution, only Inline Hooks with a status of INACTIVE are eligible for deletion.",
    "parameters": [
      {
        "name": "inlineHookId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "INLINEHOOKID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
      }
    ]
  },
  {
    "url": "/api/v1/inlineHooks/{inlineHookId}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "InlineHook",
    "typeScriptTag": "inlineHook",
    "description": "Gets an inline hook by ID",
    "parameters": [
      {
        "name": "inlineHookId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "INLINEHOOKID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/inlineHooks/{inlineHookId}",
    "method": "updateById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "InlineHook",
    "typeScriptTag": "inlineHook",
    "description": "Updates an inline hook by ID",
    "parameters": [
      {
        "name": "inlineHookId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "INLINEHOOKID"
      },
      {
        "name": "version",
        "schema": "string",
        "description": ""
      },
      {
        "name": "_links",
        "schema": "object",
        "description": ""
      },
      {
        "name": "channel",
        "schema": "object",
        "description": ""
      },
      {
        "name": "created",
        "schema": "string",
        "description": ""
      },
      {
        "name": "id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lastUpdated",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "status",
        "schema": "string",
        "description": ""
      },
      {
        "name": "type",
        "schema": "string",
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
    "url": "/api/v1/inlineHooks/{inlineHookId}/execute",
    "method": "executeWithInput",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "InlineHook",
    "typeScriptTag": "inlineHook",
    "description": "Executes the Inline Hook matching the provided inlineHookId using the request body as the input. This will send the provided data through the Channel and return a response if it matches the correct data contract. This execution endpoint should only be used for testing purposes.",
    "parameters": [
      {
        "name": "inlineHookId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "INLINEHOOKID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/inlineHooks/{inlineHookId}/lifecycle/activate",
    "method": "activateLifecycle",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "InlineHook",
    "typeScriptTag": "inlineHook",
    "description": "Activates the Inline Hook matching the provided id",
    "parameters": [
      {
        "name": "inlineHookId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "INLINEHOOKID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/inlineHooks/{inlineHookId}/lifecycle/deactivate",
    "method": "deactivateLifecycle",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "InlineHook",
    "typeScriptTag": "inlineHook",
    "description": "Deactivates the Inline Hook matching the provided id",
    "parameters": [
      {
        "name": "inlineHookId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "INLINEHOOKID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/logs",
    "method": "getListEvents",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Log",
    "typeScriptTag": "log",
    "description": "Fetch a list of events from your Okta organization system log.",
    "parameters": [
      {
        "name": "since",
        "schema": "string",
        "description": ""
      },
      {
        "name": "until",
        "schema": "string",
        "description": ""
      },
      {
        "name": "filter",
        "schema": "string",
        "description": ""
      },
      {
        "name": "q",
        "schema": "string",
        "description": ""
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "",
        "default": 100
      },
      {
        "name": "sortOrder",
        "schema": "string",
        "description": "",
        "default": "ASCENDING"
      },
      {
        "name": "after",
        "schema": "string",
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
    "url": "/api/v1/mappings",
    "method": "listWithPagination",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "ProfileMapping",
    "typeScriptTag": "profileMapping",
    "description": "Enumerates Profile Mappings in your organization with pagination.",
    "parameters": [
      {
        "name": "after",
        "schema": "string",
        "description": ""
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "",
        "default": -1
      },
      {
        "name": "sourceId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "targetId",
        "schema": "string",
        "description": "",
        "default": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/mappings/{mappingId}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "ProfileMapping",
    "typeScriptTag": "profileMapping",
    "description": "Get Profile Mapping",
    "parameters": [
      {
        "name": "mappingId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "MAPPINGID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/mappings/{mappingId}",
    "method": "updatePropertyMappings",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "ProfileMapping",
    "typeScriptTag": "profileMapping",
    "description": "Update Profile Mapping",
    "parameters": [
      {
        "name": "mappingId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "MAPPINGID"
      },
      {
        "name": "_links",
        "schema": "object",
        "description": ""
      },
      {
        "name": "id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "properties",
        "schema": "object",
        "description": ""
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
    "url": "/api/v1/meta/schemas/apps/{appInstanceId}/default",
    "method": "getUserSchema",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "UserSchema",
    "typeScriptTag": "userSchema",
    "description": "Fetches the Schema for an App User",
    "parameters": [
      {
        "name": "appInstanceId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "APPINSTANCEID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/meta/schemas/apps/{appInstanceId}/default",
    "method": "partialUpdateUserProfile",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "UserSchema",
    "typeScriptTag": "userSchema",
    "description": "Partial updates on the User Profile properties of the Application User Schema.",
    "parameters": [
      {
        "name": "appInstanceId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "APPINSTANCEID"
      },
      {
        "name": "title",
        "schema": "string",
        "description": ""
      },
      {
        "name": "$schema",
        "schema": "string",
        "description": ""
      },
      {
        "name": "_links",
        "schema": "object",
        "description": ""
      },
      {
        "name": "created",
        "schema": "string",
        "description": ""
      },
      {
        "name": "definitions",
        "schema": "object",
        "description": ""
      },
      {
        "name": "id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lastUpdated",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "properties",
        "schema": "object",
        "description": ""
      },
      {
        "name": "type",
        "schema": "string",
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
    "url": "/api/v1/meta/schemas/group/default",
    "method": "get",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "GroupSchema",
    "typeScriptTag": "groupSchema",
    "description": "Fetches the group schema",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/meta/schemas/group/default",
    "method": "updateCustomProperties",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "GroupSchema",
    "typeScriptTag": "groupSchema",
    "description": "Updates, adds ore removes one or more custom Group Profile properties in the schema",
    "parameters": [
      {
        "name": "title",
        "schema": "string",
        "description": ""
      },
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "$schema",
        "schema": "string",
        "description": ""
      },
      {
        "name": "_links",
        "schema": "object",
        "description": ""
      },
      {
        "name": "created",
        "schema": "string",
        "description": ""
      },
      {
        "name": "definitions",
        "schema": "object",
        "description": ""
      },
      {
        "name": "id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lastUpdated",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "properties",
        "schema": "object",
        "description": ""
      },
      {
        "name": "type",
        "schema": "string",
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
    "url": "/api/v1/meta/schemas/user/linkedObjects",
    "method": "getUserLinkedObjects",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "LinkedObject",
    "typeScriptTag": "linkedObject",
    "description": "Success",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/meta/schemas/user/linkedObjects",
    "method": "createLinkedObject",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "LinkedObject",
    "typeScriptTag": "linkedObject",
    "description": "Success",
    "parameters": [
      {
        "name": "_links",
        "schema": "object",
        "description": ""
      },
      {
        "name": "associated",
        "schema": "object",
        "description": ""
      },
      {
        "name": "primary",
        "schema": "object",
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
    "url": "/api/v1/meta/schemas/user/linkedObjects/{linkedObjectName}",
    "method": "deleteUserLinkedObject",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "LinkedObject",
    "typeScriptTag": "linkedObject",
    "description": "Success",
    "parameters": [
      {
        "name": "linkedObjectName",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "LINKEDOBJECTNAME"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
      }
    ]
  },
  {
    "url": "/api/v1/meta/schemas/user/linkedObjects/{linkedObjectName}",
    "method": "getUserLinkedObjects",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "LinkedObject",
    "typeScriptTag": "linkedObject",
    "description": "Success",
    "parameters": [
      {
        "name": "linkedObjectName",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "LINKEDOBJECTNAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/meta/schemas/user/{schemaId}",
    "method": "getSchemaById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "UserSchema",
    "typeScriptTag": "userSchema",
    "description": "Fetches the schema for a Schema Id.",
    "parameters": [
      {
        "name": "schemaId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SCHEMAID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/meta/schemas/user/{schemaId}",
    "method": "partialUpdateUserProfile",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "UserSchema",
    "typeScriptTag": "userSchema",
    "description": "Partial updates on the User Profile properties of the user schema.",
    "parameters": [
      {
        "name": "schemaId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SCHEMAID"
      },
      {
        "name": "title",
        "schema": "string",
        "description": ""
      },
      {
        "name": "$schema",
        "schema": "string",
        "description": ""
      },
      {
        "name": "_links",
        "schema": "object",
        "description": ""
      },
      {
        "name": "created",
        "schema": "string",
        "description": ""
      },
      {
        "name": "definitions",
        "schema": "object",
        "description": ""
      },
      {
        "name": "id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lastUpdated",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "properties",
        "schema": "object",
        "description": ""
      },
      {
        "name": "type",
        "schema": "string",
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
    "url": "/api/v1/meta/types/user",
    "method": "getAllUserTypes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "UserType",
    "typeScriptTag": "userType",
    "description": "Fetches all User Types in your org",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/meta/types/user",
    "method": "createNewUserType",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "UserType",
    "typeScriptTag": "userType",
    "description": "Creates a new User Type. A default User Type is automatically created along with your org, and you may add another 9 User Types for a maximum of 10.",
    "parameters": [
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "_links",
        "schema": "object",
        "description": ""
      },
      {
        "name": "created",
        "schema": "string",
        "description": ""
      },
      {
        "name": "createdBy",
        "schema": "string",
        "description": ""
      },
      {
        "name": "default",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "displayName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lastUpdated",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lastUpdatedBy",
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
      }
    ]
  },
  {
    "url": "/api/v1/meta/types/user/{typeId}",
    "method": "deletePermanently",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "UserType",
    "typeScriptTag": "userType",
    "description": "Deletes a User Type permanently. This operation is not permitted for the default type, nor for any User Type that has existing users",
    "parameters": [
      {
        "name": "typeId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TYPEID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
      }
    ]
  },
  {
    "url": "/api/v1/meta/types/user/{typeId}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "UserType",
    "typeScriptTag": "userType",
    "description": "Fetches a User Type by ID. The special identifier `default` may be used to fetch the default User Type.",
    "parameters": [
      {
        "name": "typeId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TYPEID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/meta/types/user/{typeId}",
    "method": "updateExistingType",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "UserType",
    "typeScriptTag": "userType",
    "description": "Updates an existing User Type",
    "parameters": [
      {
        "name": "typeId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TYPEID"
      },
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "_links",
        "schema": "object",
        "description": ""
      },
      {
        "name": "created",
        "schema": "string",
        "description": ""
      },
      {
        "name": "createdBy",
        "schema": "string",
        "description": ""
      },
      {
        "name": "default",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "displayName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lastUpdated",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lastUpdatedBy",
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
      }
    ]
  },
  {
    "url": "/api/v1/meta/types/user/{typeId}",
    "method": "replaceExistingType",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "UserType",
    "typeScriptTag": "userType",
    "description": "Replace an existing User Type",
    "parameters": [
      {
        "name": "typeId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TYPEID"
      },
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "_links",
        "schema": "object",
        "description": ""
      },
      {
        "name": "created",
        "schema": "string",
        "description": ""
      },
      {
        "name": "createdBy",
        "schema": "string",
        "description": ""
      },
      {
        "name": "default",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "displayName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lastUpdated",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lastUpdatedBy",
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
      }
    ]
  },
  {
    "url": "/api/v1/org",
    "method": "getSettings",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Org",
    "typeScriptTag": "org",
    "description": "Get org settings",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/org",
    "method": "updateSettings",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Org",
    "typeScriptTag": "org",
    "description": "Partial update Org setting",
    "parameters": [
      {
        "name": "_links",
        "schema": "undefined",
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
        "name": "companyName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "country",
        "schema": "string",
        "description": ""
      },
      {
        "name": "created",
        "schema": "string",
        "description": ""
      },
      {
        "name": "endUserSupportHelpURL",
        "schema": "string",
        "description": ""
      },
      {
        "name": "expiresAt",
        "schema": "string",
        "description": ""
      },
      {
        "name": "id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lastUpdated",
        "schema": "string",
        "description": ""
      },
      {
        "name": "phoneNumber",
        "schema": "string",
        "description": ""
      },
      {
        "name": "postalCode",
        "schema": "string",
        "description": ""
      },
      {
        "name": "state",
        "schema": "string",
        "description": ""
      },
      {
        "name": "status",
        "schema": "string",
        "description": ""
      },
      {
        "name": "subdomain",
        "schema": "string",
        "description": ""
      },
      {
        "name": "supportPhoneNumber",
        "schema": "string",
        "description": ""
      },
      {
        "name": "website",
        "schema": "string",
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
    "url": "/api/v1/org",
    "method": "updateSetting",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Org",
    "typeScriptTag": "org",
    "description": "Update Org setting",
    "parameters": [
      {
        "name": "_links",
        "schema": "undefined",
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
        "name": "companyName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "country",
        "schema": "string",
        "description": ""
      },
      {
        "name": "created",
        "schema": "string",
        "description": ""
      },
      {
        "name": "endUserSupportHelpURL",
        "schema": "string",
        "description": ""
      },
      {
        "name": "expiresAt",
        "schema": "string",
        "description": ""
      },
      {
        "name": "id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lastUpdated",
        "schema": "string",
        "description": ""
      },
      {
        "name": "phoneNumber",
        "schema": "string",
        "description": ""
      },
      {
        "name": "postalCode",
        "schema": "string",
        "description": ""
      },
      {
        "name": "state",
        "schema": "string",
        "description": ""
      },
      {
        "name": "status",
        "schema": "string",
        "description": ""
      },
      {
        "name": "subdomain",
        "schema": "string",
        "description": ""
      },
      {
        "name": "supportPhoneNumber",
        "schema": "string",
        "description": ""
      },
      {
        "name": "website",
        "schema": "string",
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
    "url": "/api/v1/org/contacts",
    "method": "listContactTypes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Org",
    "typeScriptTag": "org",
    "description": "Get org contact types",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/org/contacts/{contactType}",
    "method": "getContactUser",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Org",
    "typeScriptTag": "org",
    "description": "Get org contact user",
    "parameters": [
      {
        "name": "contactType",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CONTACTTYPE"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/org/contacts/{contactType}",
    "method": "updateContactUser",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Org",
    "typeScriptTag": "org",
    "description": "Update org contact user",
    "parameters": [
      {
        "name": "contactType",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CONTACTTYPE"
      },
      {
        "name": "userId",
        "schema": "string",
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
    "url": "/api/v1/org/logo",
    "method": "updateOrganizationLogo",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Org",
    "typeScriptTag": "org",
    "description": "Update org logo",
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
        "statusCode": "201",
        "description": "Created"
      }
    ]
  },
  {
    "url": "/api/v1/org/preferences",
    "method": "getOrgPreferences",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Org",
    "typeScriptTag": "org",
    "description": "Get org preferences",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/org/preferences/hideEndUserFooter",
    "method": "hideEndUserFooter",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Org",
    "typeScriptTag": "org",
    "description": "Show Okta UI Footer",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/org/preferences/showEndUserFooter",
    "method": "makeOktaUiFooterVisible",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Org",
    "typeScriptTag": "org",
    "description": "Show Okta UI Footer",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/org/privacy/oktaCommunication",
    "method": "getOktaCommunicationSettings",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Org",
    "typeScriptTag": "org",
    "description": "Get Okta Communication Settings",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/org/privacy/oktaCommunication/optIn",
    "method": "optInOktaCommunicationEmails",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Org",
    "typeScriptTag": "org",
    "description": "Opt in all users to Okta Communication emails",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/org/privacy/oktaCommunication/optOut",
    "method": "optOutOktaCommunicationEmails",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Org",
    "typeScriptTag": "org",
    "description": "Opt out all users from Okta Communication emails",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/org/privacy/oktaSupport",
    "method": "getOktaSupportSettings",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Org",
    "typeScriptTag": "org",
    "description": "Get Okta Support settings",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/org/privacy/oktaSupport/extend",
    "method": "extendOktaSupport",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Org",
    "typeScriptTag": "org",
    "description": "Extend Okta Support",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/org/privacy/oktaSupport/grant",
    "method": "grantOktaSupportAccess",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Org",
    "typeScriptTag": "org",
    "description": "Grant Okta Support",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/org/privacy/oktaSupport/revoke",
    "method": "extendOktaSupport",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Org",
    "typeScriptTag": "org",
    "description": "Extend Okta Support",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/policies",
    "method": "getAllWithType",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Policy",
    "typeScriptTag": "policy",
    "description": "Gets all policies with the specified type.",
    "parameters": [
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TYPE"
      },
      {
        "name": "status",
        "schema": "string",
        "description": ""
      },
      {
        "name": "expand",
        "schema": "string",
        "description": "",
        "default": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/policies",
    "method": "createNewPolicy",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Policy",
    "typeScriptTag": "policy",
    "description": "Creates a policy.",
    "parameters": [
      {
        "name": "activate",
        "schema": "boolean",
        "description": "",
        "default": true
      },
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "_embedded",
        "schema": "object",
        "description": ""
      },
      {
        "name": "_links",
        "schema": "object",
        "description": ""
      },
      {
        "name": "conditions",
        "schema": "object",
        "description": ""
      },
      {
        "name": "created",
        "schema": "string",
        "description": ""
      },
      {
        "name": "id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lastUpdated",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "priority",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "status",
        "schema": "string",
        "description": ""
      },
      {
        "name": "system",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "type",
        "schema": "string",
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
    "url": "/api/v1/policies/{policyId}",
    "method": "removePolicyOperation",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Policy",
    "typeScriptTag": "policy",
    "description": "Removes a policy.",
    "parameters": [
      {
        "name": "policyId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "POLICYID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      }
    ]
  },
  {
    "url": "/api/v1/policies/{policyId}",
    "method": "getPolicy",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Policy",
    "typeScriptTag": "policy",
    "description": "Gets a policy.",
    "parameters": [
      {
        "name": "policyId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "POLICYID"
      },
      {
        "name": "expand",
        "schema": "string",
        "description": "",
        "default": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/policies/{policyId}",
    "method": "updateOperation",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Policy",
    "typeScriptTag": "policy",
    "description": "Updates a policy.",
    "parameters": [
      {
        "name": "policyId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "POLICYID"
      },
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "_embedded",
        "schema": "object",
        "description": ""
      },
      {
        "name": "_links",
        "schema": "object",
        "description": ""
      },
      {
        "name": "conditions",
        "schema": "object",
        "description": ""
      },
      {
        "name": "created",
        "schema": "string",
        "description": ""
      },
      {
        "name": "id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lastUpdated",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "priority",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "status",
        "schema": "string",
        "description": ""
      },
      {
        "name": "system",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "type",
        "schema": "string",
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
    "url": "/api/v1/policies/{policyId}/lifecycle/activate",
    "method": "activateLifecycle",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Policy",
    "typeScriptTag": "policy",
    "description": "Activates a policy.",
    "parameters": [
      {
        "name": "policyId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "POLICYID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
      }
    ]
  },
  {
    "url": "/api/v1/policies/{policyId}/lifecycle/deactivate",
    "method": "deactivateLifecycle",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Policy",
    "typeScriptTag": "policy",
    "description": "Deactivates a policy.",
    "parameters": [
      {
        "name": "policyId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "POLICYID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
      }
    ]
  },
  {
    "url": "/api/v1/policies/{policyId}/rules",
    "method": "enumerateRules",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Policy",
    "typeScriptTag": "policy",
    "description": "Enumerates all policy rules.",
    "parameters": [
      {
        "name": "policyId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "POLICYID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/policies/{policyId}/rules",
    "method": "createRule",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Policy",
    "typeScriptTag": "policy",
    "description": "Creates a policy rule.",
    "parameters": [
      {
        "name": "policyId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "POLICYID"
      },
      {
        "name": "actions",
        "schema": "object",
        "description": ""
      },
      {
        "name": "conditions",
        "schema": "object",
        "description": ""
      },
      {
        "name": "created",
        "schema": "string",
        "description": ""
      },
      {
        "name": "id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lastUpdated",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "priority",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "status",
        "schema": "string",
        "description": "",
        "default": "ACTIVE"
      },
      {
        "name": "system",
        "schema": "boolean",
        "description": "",
        "default": false
      },
      {
        "name": "type",
        "schema": "string",
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
    "url": "/api/v1/policies/{policyId}/rules/{ruleId}",
    "method": "removeRule",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Policy",
    "typeScriptTag": "policy",
    "description": "Removes a policy rule.",
    "parameters": [
      {
        "name": "policyId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "POLICYID"
      },
      {
        "name": "ruleId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "RULEID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
      }
    ]
  },
  {
    "url": "/api/v1/policies/{policyId}/rules/{ruleId}",
    "method": "getPolicyRule",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Policy",
    "typeScriptTag": "policy",
    "description": "Gets a policy rule.",
    "parameters": [
      {
        "name": "policyId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "POLICYID"
      },
      {
        "name": "ruleId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "RULEID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/policies/{policyId}/rules/{ruleId}",
    "method": "updateRule",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Policy",
    "typeScriptTag": "policy",
    "description": "Updates a policy rule.",
    "parameters": [
      {
        "name": "policyId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "POLICYID"
      },
      {
        "name": "ruleId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "RULEID"
      },
      {
        "name": "actions",
        "schema": "object",
        "description": ""
      },
      {
        "name": "conditions",
        "schema": "object",
        "description": ""
      },
      {
        "name": "created",
        "schema": "string",
        "description": ""
      },
      {
        "name": "id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lastUpdated",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "priority",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "status",
        "schema": "string",
        "description": "",
        "default": "ACTIVE"
      },
      {
        "name": "system",
        "schema": "boolean",
        "description": "",
        "default": false
      },
      {
        "name": "type",
        "schema": "string",
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
    "url": "/api/v1/policies/{policyId}/rules/{ruleId}/lifecycle/activate",
    "method": "activateRuleLifecycle",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Policy",
    "typeScriptTag": "policy",
    "description": "Activates a policy rule.",
    "parameters": [
      {
        "name": "policyId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "POLICYID"
      },
      {
        "name": "ruleId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "RULEID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      }
    ]
  },
  {
    "url": "/api/v1/policies/{policyId}/rules/{ruleId}/lifecycle/deactivate",
    "method": "deactivateRuleLifecycle",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Policy",
    "typeScriptTag": "policy",
    "description": "Deactivates a policy rule.",
    "parameters": [
      {
        "name": "policyId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "POLICYID"
      },
      {
        "name": "ruleId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "RULEID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
      }
    ]
  },
  {
    "url": "/api/v1/roles/{roleTypeOrRoleId}/subscriptions",
    "method": "listRoleSubscriptions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Subscription",
    "typeScriptTag": "subscription",
    "description": "List all subscriptions of a Custom Role",
    "parameters": [
      {
        "name": "roleTypeOrRoleId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ROLETYPEORROLEID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      }
    ]
  },
  {
    "url": "/api/v1/roles/{roleTypeOrRoleId}/subscriptions/{notificationType}",
    "method": "getRoleSubscriptionsByNotificationType",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Subscription",
    "typeScriptTag": "subscription",
    "description": "Get subscriptions of a Custom Role with a specific notification type",
    "parameters": [
      {
        "name": "roleTypeOrRoleId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ROLETYPEORROLEID"
      },
      {
        "name": "notificationType",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NOTIFICATIONTYPE"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      }
    ]
  },
  {
    "url": "/api/v1/roles/{roleTypeOrRoleId}/subscriptions/{notificationType}/subscribe",
    "method": "roleNotificationSubscribe",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Subscription",
    "typeScriptTag": "subscription",
    "description": "Subscribe a Custom Role to a specific notification type",
    "parameters": [
      {
        "name": "roleTypeOrRoleId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ROLETYPEORROLEID"
      },
      {
        "name": "notificationType",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NOTIFICATIONTYPE"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      }
    ]
  },
  {
    "url": "/api/v1/roles/{roleTypeOrRoleId}/subscriptions/{notificationType}/unsubscribe",
    "method": "customRoleNotificationUnsubscribe",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Subscription",
    "typeScriptTag": "subscription",
    "description": "Unsubscribe a Custom Role from a specific notification type",
    "parameters": [
      {
        "name": "roleTypeOrRoleId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ROLETYPEORROLEID"
      },
      {
        "name": "notificationType",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NOTIFICATIONTYPE"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      }
    ]
  },
  {
    "url": "/api/v1/sessions",
    "method": "createSessionWithToken",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Session",
    "typeScriptTag": "session",
    "description": "Create Session with Session Token",
    "parameters": [
      {
        "name": "sessionToken",
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
        "description": "Bad Request"
      }
    ]
  },
  {
    "url": "/api/v1/sessions/{sessionId}",
    "method": "close",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Session",
    "typeScriptTag": "session",
    "description": "Close Session",
    "parameters": [
      {
        "name": "sessionId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SESSIONID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
      },
      {
        "statusCode": "400",
        "description": "Bad Request"
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      }
    ]
  },
  {
    "url": "/api/v1/sessions/{sessionId}",
    "method": "getDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Session",
    "typeScriptTag": "session",
    "description": "Get details about a session.",
    "parameters": [
      {
        "name": "sessionId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SESSIONID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/sessions/{sessionId}/lifecycle/refresh",
    "method": "refreshLifecycle",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Session",
    "typeScriptTag": "session",
    "description": "Refresh Session",
    "parameters": [
      {
        "name": "sessionId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SESSIONID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      }
    ]
  },
  {
    "url": "/api/v1/templates/sms",
    "method": "enumerateSmsTemplates",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Template",
    "typeScriptTag": "template",
    "description": "List SMS Templates",
    "parameters": [
      {
        "name": "templateType",
        "schema": "string",
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
    "url": "/api/v1/templates/sms",
    "method": "addNewCustomSms",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Template",
    "typeScriptTag": "template",
    "description": "Add SMS Template",
    "parameters": [
      {
        "name": "created",
        "schema": "string",
        "description": ""
      },
      {
        "name": "id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lastUpdated",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "template",
        "schema": "string",
        "description": ""
      },
      {
        "name": "translations",
        "schema": "object",
        "description": ""
      },
      {
        "name": "type",
        "schema": "string",
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
    "url": "/api/v1/templates/sms/{templateId}",
    "method": "removeSms",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Template",
    "typeScriptTag": "template",
    "description": "Remove SMS Template",
    "parameters": [
      {
        "name": "templateId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TEMPLATEID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
      }
    ]
  },
  {
    "url": "/api/v1/templates/sms/{templateId}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Template",
    "typeScriptTag": "template",
    "description": "Get SMS Template",
    "parameters": [
      {
        "name": "templateId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TEMPLATEID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/templates/sms/{templateId}",
    "method": "partialSmsUpdate",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Template",
    "typeScriptTag": "template",
    "description": "Partial SMS Template Update",
    "parameters": [
      {
        "name": "templateId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TEMPLATEID"
      },
      {
        "name": "created",
        "schema": "string",
        "description": ""
      },
      {
        "name": "id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lastUpdated",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "template",
        "schema": "string",
        "description": ""
      },
      {
        "name": "translations",
        "schema": "object",
        "description": ""
      },
      {
        "name": "type",
        "schema": "string",
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
    "url": "/api/v1/templates/sms/{templateId}",
    "method": "updateSmsTemplate",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Template",
    "typeScriptTag": "template",
    "description": "Update SMS Template",
    "parameters": [
      {
        "name": "templateId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TEMPLATEID"
      },
      {
        "name": "created",
        "schema": "string",
        "description": ""
      },
      {
        "name": "id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lastUpdated",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "template",
        "schema": "string",
        "description": ""
      },
      {
        "name": "translations",
        "schema": "object",
        "description": ""
      },
      {
        "name": "type",
        "schema": "string",
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
    "url": "/api/v1/threats/configuration",
    "method": "getCurrentConfiguration",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "ThreatInsight",
    "typeScriptTag": "threatInsight",
    "description": "Gets current ThreatInsight configuration",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/threats/configuration",
    "method": "updateConfiguration",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "ThreatInsight",
    "typeScriptTag": "threatInsight",
    "description": "Updates ThreatInsight configuration",
    "parameters": [
      {
        "name": "_links",
        "schema": "object",
        "description": ""
      },
      {
        "name": "action",
        "schema": "string",
        "description": ""
      },
      {
        "name": "created",
        "schema": "string",
        "description": ""
      },
      {
        "name": "excludeZones",
        "schema": "array",
        "description": ""
      },
      {
        "name": "lastUpdated",
        "schema": "string",
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
    "url": "/api/v1/trustedOrigins",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "TrustedOrigin",
    "typeScriptTag": "trustedOrigin",
    "description": "Success",
    "parameters": [
      {
        "name": "q",
        "schema": "string",
        "description": ""
      },
      {
        "name": "filter",
        "schema": "string",
        "description": ""
      },
      {
        "name": "after",
        "schema": "string",
        "description": ""
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "",
        "default": -1
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/trustedOrigins",
    "method": "createSuccess",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "TrustedOrigin",
    "typeScriptTag": "trustedOrigin",
    "description": "Success",
    "parameters": [
      {
        "name": "_links",
        "schema": "object",
        "description": ""
      },
      {
        "name": "created",
        "schema": "string",
        "description": ""
      },
      {
        "name": "createdBy",
        "schema": "string",
        "description": ""
      },
      {
        "name": "id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lastUpdated",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lastUpdatedBy",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "origin",
        "schema": "string",
        "description": ""
      },
      {
        "name": "scopes",
        "schema": "array",
        "description": ""
      },
      {
        "name": "status",
        "schema": "string",
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
    "url": "/api/v1/trustedOrigins/{trustedOriginId}",
    "method": "deleteSuccess",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "TrustedOrigin",
    "typeScriptTag": "trustedOrigin",
    "description": "Success",
    "parameters": [
      {
        "name": "trustedOriginId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TRUSTEDORIGINID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      }
    ]
  },
  {
    "url": "/api/v1/trustedOrigins/{trustedOriginId}",
    "method": "getSuccessById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "TrustedOrigin",
    "typeScriptTag": "trustedOrigin",
    "description": "Success",
    "parameters": [
      {
        "name": "trustedOriginId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TRUSTEDORIGINID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/trustedOrigins/{trustedOriginId}",
    "method": "updateSuccess",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "TrustedOrigin",
    "typeScriptTag": "trustedOrigin",
    "description": "Success",
    "parameters": [
      {
        "name": "trustedOriginId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TRUSTEDORIGINID"
      },
      {
        "name": "_links",
        "schema": "object",
        "description": ""
      },
      {
        "name": "created",
        "schema": "string",
        "description": ""
      },
      {
        "name": "createdBy",
        "schema": "string",
        "description": ""
      },
      {
        "name": "id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lastUpdated",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lastUpdatedBy",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "origin",
        "schema": "string",
        "description": ""
      },
      {
        "name": "scopes",
        "schema": "array",
        "description": ""
      },
      {
        "name": "status",
        "schema": "string",
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
    "url": "/api/v1/trustedOrigins/{trustedOriginId}/lifecycle/activate",
    "method": "activateLifecycleSuccess",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "TrustedOrigin",
    "typeScriptTag": "trustedOrigin",
    "description": "Success",
    "parameters": [
      {
        "name": "trustedOriginId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TRUSTEDORIGINID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/trustedOrigins/{trustedOriginId}/lifecycle/deactivate",
    "method": "deactivateLifecycleSuccess",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "TrustedOrigin",
    "typeScriptTag": "trustedOrigin",
    "description": "Success",
    "parameters": [
      {
        "name": "trustedOriginId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TRUSTEDORIGINID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/users",
    "method": "listActiveUsers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "User",
    "typeScriptTag": "user",
    "description": "List Users",
    "parameters": [
      {
        "name": "q",
        "schema": "string",
        "description": "Finds a user that matches firstName, lastName, and email properties"
      },
      {
        "name": "after",
        "schema": "string",
        "description": "Specifies the pagination cursor for the next page of users"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Specifies the number of results returned",
        "default": 10
      },
      {
        "name": "filter",
        "schema": "string",
        "description": "Filters users with a supported expression for a subset of properties"
      },
      {
        "name": "search",
        "schema": "string",
        "description": "Searches for users with a supported filtering  expression for most properties"
      },
      {
        "name": "sortBy",
        "schema": "string",
        "description": ""
      },
      {
        "name": "sortOrder",
        "schema": "string",
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
    "url": "/api/v1/users",
    "method": "createNewUser",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "User",
    "typeScriptTag": "user",
    "description": "Create User",
    "parameters": [
      {
        "name": "activate",
        "schema": "boolean",
        "description": "Executes activation lifecycle operation when creating the user",
        "default": true
      },
      {
        "name": "provider",
        "schema": "boolean",
        "description": "Indicates whether to create a user with a specified authentication provider",
        "default": false
      },
      {
        "name": "nextLogin",
        "schema": "string",
        "description": "With activate=true, set nextLogin to \"changePassword\" to have the password be EXPIRED, so user must change it the next time they log in.",
        "default": ""
      },
      {
        "name": "credentials",
        "schema": "object",
        "description": ""
      },
      {
        "name": "groupIds",
        "schema": "array",
        "description": ""
      },
      {
        "name": "profile",
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
    "url": "/api/v1/users/{associatedUserId}/linkedObjects/{primaryRelationshipName}/{primaryUserId}",
    "method": "updateLinkedObject",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "User",
    "typeScriptTag": "user",
    "description": "",
    "parameters": [
      {
        "name": "associatedUserId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ASSOCIATEDUSERID"
      },
      {
        "name": "primaryRelationshipName",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PRIMARYRELATIONSHIPNAME"
      },
      {
        "name": "primaryUserId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PRIMARYUSERID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Success"
      }
    ]
  },
  {
    "url": "/api/v1/users/{userId}",
    "method": "deletePermanently",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "User",
    "typeScriptTag": "user",
    "description": "Delete User",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERID"
      },
      {
        "name": "sendEmail",
        "schema": "boolean",
        "description": "",
        "default": false
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "ACCEPTED"
      }
    ]
  },
  {
    "url": "/api/v1/users/{userId}",
    "method": "getOktaUser",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "User",
    "typeScriptTag": "user",
    "description": "Get User",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/users/{userId}",
    "method": "updateProfile",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "User",
    "typeScriptTag": "user",
    "description": "Update a user's profile or credentials with partial update semantics.",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERID"
      },
      {
        "name": "strict",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "_embedded",
        "schema": "object",
        "description": ""
      },
      {
        "name": "_links",
        "schema": "object",
        "description": ""
      },
      {
        "name": "activated",
        "schema": "string",
        "description": ""
      },
      {
        "name": "created",
        "schema": "string",
        "description": ""
      },
      {
        "name": "credentials",
        "schema": "object",
        "description": ""
      },
      {
        "name": "id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lastLogin",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lastUpdated",
        "schema": "string",
        "description": ""
      },
      {
        "name": "passwordChanged",
        "schema": "string",
        "description": ""
      },
      {
        "name": "profile",
        "schema": "object",
        "description": ""
      },
      {
        "name": "status",
        "schema": "string",
        "description": ""
      },
      {
        "name": "statusChanged",
        "schema": "string",
        "description": ""
      },
      {
        "name": "transitioningToStatus",
        "schema": "string",
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
    "url": "/api/v1/users/{userId}",
    "method": "updateProfile",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "User",
    "typeScriptTag": "user",
    "description": "Update User",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERID"
      },
      {
        "name": "strict",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "_embedded",
        "schema": "object",
        "description": ""
      },
      {
        "name": "_links",
        "schema": "object",
        "description": ""
      },
      {
        "name": "activated",
        "schema": "string",
        "description": ""
      },
      {
        "name": "created",
        "schema": "string",
        "description": ""
      },
      {
        "name": "credentials",
        "schema": "object",
        "description": ""
      },
      {
        "name": "id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lastLogin",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lastUpdated",
        "schema": "string",
        "description": ""
      },
      {
        "name": "passwordChanged",
        "schema": "string",
        "description": ""
      },
      {
        "name": "profile",
        "schema": "object",
        "description": ""
      },
      {
        "name": "status",
        "schema": "string",
        "description": ""
      },
      {
        "name": "statusChanged",
        "schema": "string",
        "description": ""
      },
      {
        "name": "transitioningToStatus",
        "schema": "string",
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
    "url": "/api/v1/users/{userId}/appLinks",
    "method": "listAssignedAppLinks",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "User",
    "typeScriptTag": "user",
    "description": "Get Assigned App Links",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/users/{userId}/clients",
    "method": "listClients",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "User",
    "typeScriptTag": "user",
    "description": "Lists all client resources for which the specified user has grants or tokens.",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/users/{userId}/clients/{clientId}/grants",
    "method": "revokeGrantsForUserAndClient",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "User",
    "typeScriptTag": "user",
    "description": "Revokes all grants for the specified user and client",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERID"
      },
      {
        "name": "clientId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CLIENTID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
      }
    ]
  },
  {
    "url": "/api/v1/users/{userId}/clients/{clientId}/grants",
    "method": "listGrantsForClient",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "User",
    "typeScriptTag": "user",
    "description": "Lists all grants for a specified user and client",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERID"
      },
      {
        "name": "clientId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CLIENTID"
      },
      {
        "name": "expand",
        "schema": "string",
        "description": ""
      },
      {
        "name": "after",
        "schema": "string",
        "description": ""
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "",
        "default": 20
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/users/{userId}/clients/{clientId}/tokens",
    "method": "revokeAllTokens",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "User",
    "typeScriptTag": "user",
    "description": "Revokes all refresh tokens issued for the specified User and Client.",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERID"
      },
      {
        "name": "clientId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CLIENTID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
      }
    ]
  },
  {
    "url": "/api/v1/users/{userId}/clients/{clientId}/tokens",
    "method": "listRefreshTokensForUserAndClient",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "User",
    "typeScriptTag": "user",
    "description": "Lists all refresh tokens issued for the specified User and Client.",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERID"
      },
      {
        "name": "clientId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CLIENTID"
      },
      {
        "name": "expand",
        "schema": "string",
        "description": ""
      },
      {
        "name": "after",
        "schema": "string",
        "description": ""
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "",
        "default": 20
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/users/{userId}/clients/{clientId}/tokens/{tokenId}",
    "method": "revokeTokenForClient",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "User",
    "typeScriptTag": "user",
    "description": "Revokes the specified refresh token.",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERID"
      },
      {
        "name": "clientId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CLIENTID"
      },
      {
        "name": "tokenId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TOKENID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
      }
    ]
  },
  {
    "url": "/api/v1/users/{userId}/clients/{clientId}/tokens/{tokenId}",
    "method": "getClientRefreshToken",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "User",
    "typeScriptTag": "user",
    "description": "Gets a refresh token issued for the specified User and Client.",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERID"
      },
      {
        "name": "clientId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CLIENTID"
      },
      {
        "name": "tokenId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TOKENID"
      },
      {
        "name": "expand",
        "schema": "string",
        "description": ""
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "",
        "default": 20
      },
      {
        "name": "after",
        "schema": "string",
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
    "url": "/api/v1/users/{userId}/credentials/change_password",
    "method": "changePasswordValidation",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "User",
    "typeScriptTag": "user",
    "description": "Change Password",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERID"
      },
      {
        "name": "strict",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "newPassword",
        "schema": "object",
        "description": ""
      },
      {
        "name": "oldPassword",
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
    "url": "/api/v1/users/{userId}/credentials/change_recovery_question",
    "method": "updateRecoveryQuestion",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "User",
    "typeScriptTag": "user",
    "description": "Change Recovery Question",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERID"
      },
      {
        "name": "password",
        "schema": "object",
        "description": ""
      },
      {
        "name": "provider",
        "schema": "object",
        "description": ""
      },
      {
        "name": "recovery_question",
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
    "url": "/api/v1/users/{userId}/credentials/forgot_password",
    "method": "forgotPassword",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "User",
    "typeScriptTag": "user",
    "description": "Forgot Password",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/users/{userId}/factors",
    "method": "enumerateEnrolled",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "UserFactor",
    "typeScriptTag": "userFactor",
    "description": "Enumerates all the enrolled factors for the specified user",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/users/{userId}/factors",
    "method": "enrollSupportedFactor",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "UserFactor",
    "typeScriptTag": "userFactor",
    "description": "Enroll Factor",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERID"
      },
      {
        "name": "updatePhone",
        "schema": "boolean",
        "description": "",
        "default": false
      },
      {
        "name": "templateId",
        "schema": "string",
        "description": "id of SMS template (only for SMS factor)"
      },
      {
        "name": "tokenLifetimeSeconds",
        "schema": "integer",
        "description": "",
        "default": 300
      },
      {
        "name": "activate",
        "schema": "boolean",
        "description": "",
        "default": false
      },
      {
        "name": "_embedded",
        "schema": "object",
        "description": ""
      },
      {
        "name": "_links",
        "schema": "object",
        "description": ""
      },
      {
        "name": "created",
        "schema": "string",
        "description": ""
      },
      {
        "name": "factorType",
        "schema": "string",
        "description": ""
      },
      {
        "name": "id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lastUpdated",
        "schema": "string",
        "description": ""
      },
      {
        "name": "provider",
        "schema": "string",
        "description": ""
      },
      {
        "name": "status",
        "schema": "string",
        "description": ""
      },
      {
        "name": "verify",
        "schema": "undefined",
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
    "url": "/api/v1/users/{userId}/factors/catalog",
    "method": "enumerateSupportedFactors",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "UserFactor",
    "typeScriptTag": "userFactor",
    "description": "Enumerates all the supported factors that can be enrolled for the specified user",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/users/{userId}/factors/questions",
    "method": "enumerateSecurityQuestions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "UserFactor",
    "typeScriptTag": "userFactor",
    "description": "Enumerates all available security questions for a user's `question` factor",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/users/{userId}/factors/{factorId}",
    "method": "unenrollFactor",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "UserFactor",
    "typeScriptTag": "userFactor",
    "description": "Unenrolls an existing factor for the specified user, allowing the user to enroll a new factor.",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERID"
      },
      {
        "name": "factorId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FACTORID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
      }
    ]
  },
  {
    "url": "/api/v1/users/{userId}/factors/{factorId}",
    "method": "getFactor",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "UserFactor",
    "typeScriptTag": "userFactor",
    "description": "Fetches a factor for the specified user",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERID"
      },
      {
        "name": "factorId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FACTORID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/users/{userId}/factors/{factorId}/lifecycle/activate",
    "method": "activateFactorLifecycle",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "UserFactor",
    "typeScriptTag": "userFactor",
    "description": "Activate Factor",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERID"
      },
      {
        "name": "factorId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FACTORID"
      },
      {
        "name": "attestation",
        "schema": "string",
        "description": ""
      },
      {
        "name": "clientData",
        "schema": "string",
        "description": ""
      },
      {
        "name": "passCode",
        "schema": "string",
        "description": ""
      },
      {
        "name": "registrationData",
        "schema": "string",
        "description": ""
      },
      {
        "name": "stateToken",
        "schema": "string",
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
    "url": "/api/v1/users/{userId}/factors/{factorId}/transactions/{transactionId}",
    "method": "pollFactorTransactionStatus",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "UserFactor",
    "typeScriptTag": "userFactor",
    "description": "Polls factors verification transaction for status.",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERID"
      },
      {
        "name": "factorId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FACTORID"
      },
      {
        "name": "transactionId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TRANSACTIONID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/users/{userId}/factors/{factorId}/verify",
    "method": "verifyOtp",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "UserFactor",
    "typeScriptTag": "userFactor",
    "description": "Verify MFA Factor",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERID"
      },
      {
        "name": "factorId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FACTORID"
      },
      {
        "name": "templateId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "tokenLifetimeSeconds",
        "schema": "integer",
        "description": "",
        "default": 300
      },
      {
        "name": "xForwardedFor",
        "schema": "string",
        "description": ""
      },
      {
        "name": "userAgent",
        "schema": "string",
        "description": ""
      },
      {
        "name": "acceptLanguage",
        "schema": "string",
        "description": ""
      },
      {
        "name": "activationToken",
        "schema": "string",
        "description": ""
      },
      {
        "name": "answer",
        "schema": "string",
        "description": ""
      },
      {
        "name": "attestation",
        "schema": "string",
        "description": ""
      },
      {
        "name": "clientData",
        "schema": "string",
        "description": ""
      },
      {
        "name": "nextPassCode",
        "schema": "string",
        "description": ""
      },
      {
        "name": "passCode",
        "schema": "string",
        "description": ""
      },
      {
        "name": "registrationData",
        "schema": "string",
        "description": ""
      },
      {
        "name": "stateToken",
        "schema": "string",
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
    "url": "/api/v1/users/{userId}/grants",
    "method": "revokeGrants",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "User",
    "typeScriptTag": "user",
    "description": "Revokes all grants for a specified user",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
      }
    ]
  },
  {
    "url": "/api/v1/users/{userId}/grants",
    "method": "listGrants",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "User",
    "typeScriptTag": "user",
    "description": "Lists all grants for the specified user",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERID"
      },
      {
        "name": "scopeId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "expand",
        "schema": "string",
        "description": ""
      },
      {
        "name": "after",
        "schema": "string",
        "description": ""
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "",
        "default": 20
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/users/{userId}/grants/{grantId}",
    "method": "revokeGrant",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "User",
    "typeScriptTag": "user",
    "description": "Revokes one grant for a specified user",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERID"
      },
      {
        "name": "grantId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "GRANTID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
      }
    ]
  },
  {
    "url": "/api/v1/users/{userId}/grants/{grantId}",
    "method": "getGrantById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "User",
    "typeScriptTag": "user",
    "description": "Gets a grant for the specified user",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERID"
      },
      {
        "name": "grantId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "GRANTID"
      },
      {
        "name": "expand",
        "schema": "string",
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
    "url": "/api/v1/users/{userId}/groups",
    "method": "getMemberGroups",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "User",
    "typeScriptTag": "user",
    "description": "Get Member Groups",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/users/{userId}/idps",
    "method": "listIdpsForUser",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "User",
    "typeScriptTag": "user",
    "description": "Listing IdPs associated with a user",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/users/{userId}/lifecycle/activate",
    "method": "activateLifecycle",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "User",
    "typeScriptTag": "user",
    "description": "Activate User",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERID"
      },
      {
        "name": "sendEmail",
        "schema": "boolean",
        "required": true,
        "description": "Sends an activation email to the user if true",
        "example": true,
        "default": true
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/users/{userId}/lifecycle/deactivate",
    "method": "deactivateLifecycle",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "User",
    "typeScriptTag": "user",
    "description": "Deactivate User",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERID"
      },
      {
        "name": "sendEmail",
        "schema": "boolean",
        "description": "",
        "default": false
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
    "url": "/api/v1/users/{userId}/lifecycle/expire_password?tempPassword=false",
    "method": "expirePasswordAndGetTemporaryPassword",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "User",
    "typeScriptTag": "user",
    "description": "Expire Password",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/users/{userId}/lifecycle/expire_password?tempPassword=true",
    "method": "expirePasswordAndTemporaryPassword",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "User",
    "typeScriptTag": "user",
    "description": "Expire Password",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/users/{userId}/lifecycle/reactivate",
    "method": "reactivateUser",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "User",
    "typeScriptTag": "user",
    "description": "Reactivate User",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERID"
      },
      {
        "name": "sendEmail",
        "schema": "boolean",
        "description": "Sends an activation email to the user if true",
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
    "url": "/api/v1/users/{userId}/lifecycle/reset_factors",
    "method": "resetFactorsOperation",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "User",
    "typeScriptTag": "user",
    "description": "Reset Factors",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERID"
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
    "url": "/api/v1/users/{userId}/lifecycle/reset_password",
    "method": "generatePasswordResetToken",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "User",
    "typeScriptTag": "user",
    "description": "Reset Password",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERID"
      },
      {
        "name": "sendEmail",
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
    "url": "/api/v1/users/{userId}/lifecycle/suspend",
    "method": "suspendLifecycle",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "User",
    "typeScriptTag": "user",
    "description": "Suspend User",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERID"
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
    "url": "/api/v1/users/{userId}/lifecycle/unlock",
    "method": "unlockUserStatus",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "User",
    "typeScriptTag": "user",
    "description": "Unlock User",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      }
    ]
  },
  {
    "url": "/api/v1/users/{userId}/lifecycle/unsuspend",
    "method": "unsuspendLifecycle",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "User",
    "typeScriptTag": "user",
    "description": "Unsuspend User",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      }
    ]
  },
  {
    "url": "/api/v1/users/{userId}/linkedObjects/{relationshipName}",
    "method": "deleteLinkedObjects",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "User",
    "typeScriptTag": "user",
    "description": "Delete linked objects for a user, relationshipName can be ONLY a primary relationship name",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERID"
      },
      {
        "name": "relationshipName",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "RELATIONSHIPNAME"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
      }
    ]
  },
  {
    "url": "/api/v1/users/{userId}/linkedObjects/{relationshipName}",
    "method": "getLinkedObjects",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "User",
    "typeScriptTag": "user",
    "description": "Get linked objects for a user, relationshipName can be a primary or associated relationship name",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERID"
      },
      {
        "name": "relationshipName",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "RELATIONSHIPNAME"
      },
      {
        "name": "after",
        "schema": "string",
        "description": ""
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "",
        "default": -1
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/users/{userId}/roles",
    "method": "listAssignedRoles",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "User",
    "typeScriptTag": "user",
    "description": "Lists all roles assigned to a user.",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERID"
      },
      {
        "name": "expand",
        "schema": "string",
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
    "url": "/api/v1/users/{userId}/roles",
    "method": "assignRole",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "User",
    "typeScriptTag": "user",
    "description": "Assigns a role to a user.",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERID"
      },
      {
        "name": "disableNotifications",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "type",
        "schema": "string",
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
    "url": "/api/v1/users/{userId}/roles/{roleId}",
    "method": "unassignRole",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "User",
    "typeScriptTag": "user",
    "description": "Unassigns a role from a user.",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERID"
      },
      {
        "name": "roleId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ROLEID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
      }
    ]
  },
  {
    "url": "/api/v1/users/{userId}/roles/{roleId}",
    "method": "getAssignedRole",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "User",
    "typeScriptTag": "user",
    "description": "Gets role that is assigne to user.",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERID"
      },
      {
        "name": "roleId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ROLEID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/users/{userId}/roles/{roleId}/targets/catalog/apps",
    "method": "listAppTargetsForRole",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "User",
    "typeScriptTag": "user",
    "description": "Lists all App targets for an `APP_ADMIN` Role assigned to a User. This methods return list may include full Applications or Instances. The response for an instance will have an `ID` value, while Application will not have an ID.",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERID"
      },
      {
        "name": "roleId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ROLEID"
      },
      {
        "name": "after",
        "schema": "string",
        "description": ""
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "",
        "default": 20
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/users/{userId}/roles/{roleId}/targets/catalog/apps",
    "method": "updateRolesCatalogApps",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "User",
    "typeScriptTag": "user",
    "description": "Success",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERID"
      },
      {
        "name": "roleId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ROLEID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      }
    ]
  },
  {
    "url": "/api/v1/users/{userId}/roles/{roleId}/targets/catalog/apps/{appName}",
    "method": "deleteTargetApp",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "User",
    "typeScriptTag": "user",
    "description": "Success",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERID"
      },
      {
        "name": "roleId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ROLEID"
      },
      {
        "name": "appName",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "APPNAME"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
      }
    ]
  },
  {
    "url": "/api/v1/users/{userId}/roles/{roleId}/targets/catalog/apps/{appName}",
    "method": "updateRolesCatalogApps",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "User",
    "typeScriptTag": "user",
    "description": "Success",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERID"
      },
      {
        "name": "roleId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ROLEID"
      },
      {
        "name": "appName",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "APPNAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      }
    ]
  },
  {
    "url": "/api/v1/users/{userId}/roles/{roleId}/targets/catalog/apps/{appName}/{applicationId}",
    "method": "removeAppInstanceTargetToAppAdministratorRoleGivenTo",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "User",
    "typeScriptTag": "user",
    "description": "Remove App Instance Target to App Administrator Role given to a User",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERID"
      },
      {
        "name": "roleId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ROLEID"
      },
      {
        "name": "appName",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "APPNAME"
      },
      {
        "name": "applicationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "APPLICATIONID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
      }
    ]
  },
  {
    "url": "/api/v1/users/{userId}/roles/{roleId}/targets/catalog/apps/{appName}/{applicationId}",
    "method": "addAppInstanceTargetToAppAdministratorRoleGivenToUser",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "User",
    "typeScriptTag": "user",
    "description": "Add App Instance Target to App Administrator Role given to a User",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERID"
      },
      {
        "name": "roleId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ROLEID"
      },
      {
        "name": "appName",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "APPNAME"
      },
      {
        "name": "applicationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "APPLICATIONID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
      }
    ]
  },
  {
    "url": "/api/v1/users/{userId}/roles/{roleId}/targets/groups",
    "method": "listRoleTargetsGroups",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "User",
    "typeScriptTag": "user",
    "description": "Success",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERID"
      },
      {
        "name": "roleId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ROLEID"
      },
      {
        "name": "after",
        "schema": "string",
        "description": ""
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "",
        "default": 20
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/users/{userId}/roles/{roleId}/targets/groups/{groupId}",
    "method": "removeTargetGroup",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "User",
    "typeScriptTag": "user",
    "description": "Success",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERID"
      },
      {
        "name": "roleId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ROLEID"
      },
      {
        "name": "groupId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "GROUPID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
      }
    ]
  },
  {
    "url": "/api/v1/users/{userId}/roles/{roleId}/targets/groups/{groupId}",
    "method": "updateRolesCatalogApps",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "User",
    "typeScriptTag": "user",
    "description": "Success",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERID"
      },
      {
        "name": "roleId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ROLEID"
      },
      {
        "name": "groupId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "GROUPID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      }
    ]
  },
  {
    "url": "/api/v1/users/{userId}/sessions",
    "method": "revokeAllSessions",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "User",
    "typeScriptTag": "user",
    "description": "Removes all active identity provider sessions. This forces the user to authenticate on the next operation. Optionally revokes OpenID Connect and OAuth refresh and access tokens issued to the user.",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERID"
      },
      {
        "name": "oauthTokens",
        "schema": "boolean",
        "description": "Revoke issued OpenID Connect and OAuth refresh and access tokens",
        "default": false
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
      }
    ]
  },
  {
    "url": "/api/v1/users/{userId}/subscriptions",
    "method": "listSubscriptions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "User",
    "typeScriptTag": "user",
    "description": "List subscriptions of a User",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      }
    ]
  },
  {
    "url": "/api/v1/users/{userId}/subscriptions/{notificationType}",
    "method": "getSubscriptionByNotification",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "User",
    "typeScriptTag": "user",
    "description": "Get the subscription of a User with a specific notification type",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERID"
      },
      {
        "name": "notificationType",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NOTIFICATIONTYPE"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      }
    ]
  },
  {
    "url": "/api/v1/users/{userId}/subscriptions/{notificationType}/subscribe",
    "method": "userNotificationSubscribe",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Subscription",
    "typeScriptTag": "subscription",
    "description": "Subscribe to a specific notification type",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERID"
      },
      {
        "name": "notificationType",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NOTIFICATIONTYPE"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      }
    ]
  },
  {
    "url": "/api/v1/users/{userId}/subscriptions/{notificationType}/unsubscribe",
    "method": "unsubscribeUserSubscriptionByNotificationType",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Subscription",
    "typeScriptTag": "subscription",
    "description": "Unsubscribe from a specific notification type",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERID"
      },
      {
        "name": "notificationType",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NOTIFICATIONTYPE"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      }
    ]
  },
  {
    "url": "/api/v1/zones",
    "method": "listZones",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "NetworkZone",
    "typeScriptTag": "networkZone",
    "description": "List Network Zones",
    "parameters": [
      {
        "name": "after",
        "schema": "string",
        "description": "Specifies the pagination cursor for the next page of network zones"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Specifies the number of results for a page",
        "default": -1
      },
      {
        "name": "filter",
        "schema": "string",
        "description": "Filters zones by usage or id expression"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/zones",
    "method": "createNew",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "NetworkZone",
    "typeScriptTag": "networkZone",
    "description": "Add Network Zone",
    "parameters": [
      {
        "name": "_links",
        "schema": "object",
        "description": ""
      },
      {
        "name": "asns",
        "schema": "array",
        "description": ""
      },
      {
        "name": "created",
        "schema": "string",
        "description": ""
      },
      {
        "name": "gateways",
        "schema": "array",
        "description": ""
      },
      {
        "name": "id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lastUpdated",
        "schema": "string",
        "description": ""
      },
      {
        "name": "locations",
        "schema": "array",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "proxies",
        "schema": "array",
        "description": ""
      },
      {
        "name": "proxyType",
        "schema": "string",
        "description": ""
      },
      {
        "name": "status",
        "schema": "string",
        "description": ""
      },
      {
        "name": "system",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "type",
        "schema": "string",
        "description": ""
      },
      {
        "name": "usage",
        "schema": "string",
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
    "url": "/api/v1/zones/{zoneId}",
    "method": "removeZone",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "NetworkZone",
    "typeScriptTag": "networkZone",
    "description": "Delete Network Zone",
    "parameters": [
      {
        "name": "zoneId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ZONEID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      }
    ]
  },
  {
    "url": "/api/v1/zones/{zoneId}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "NetworkZone",
    "typeScriptTag": "networkZone",
    "description": "Get Network Zone",
    "parameters": [
      {
        "name": "zoneId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ZONEID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/zones/{zoneId}",
    "method": "updateZone",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "NetworkZone",
    "typeScriptTag": "networkZone",
    "description": "Update Network Zone",
    "parameters": [
      {
        "name": "zoneId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ZONEID"
      },
      {
        "name": "_links",
        "schema": "object",
        "description": ""
      },
      {
        "name": "asns",
        "schema": "array",
        "description": ""
      },
      {
        "name": "created",
        "schema": "string",
        "description": ""
      },
      {
        "name": "gateways",
        "schema": "array",
        "description": ""
      },
      {
        "name": "id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lastUpdated",
        "schema": "string",
        "description": ""
      },
      {
        "name": "locations",
        "schema": "array",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "proxies",
        "schema": "array",
        "description": ""
      },
      {
        "name": "proxyType",
        "schema": "string",
        "description": ""
      },
      {
        "name": "status",
        "schema": "string",
        "description": ""
      },
      {
        "name": "system",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "type",
        "schema": "string",
        "description": ""
      },
      {
        "name": "usage",
        "schema": "string",
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
    "url": "/api/v1/zones/{zoneId}/lifecycle/activate",
    "method": "activateLifecycle",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "NetworkZone",
    "typeScriptTag": "networkZone",
    "description": "Activate Network Zone",
    "parameters": [
      {
        "name": "zoneId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ZONEID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/zones/{zoneId}/lifecycle/deactivate",
    "method": "deactivateZoneLifecycle",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "NetworkZone",
    "typeScriptTag": "networkZone",
    "description": "Deactivate Network Zone",
    "parameters": [
      {
        "name": "zoneId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ZONEID"
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
      apiTitle="Okta API"
      apiBaseUrl="https://your-subdomain.okta.com"
      apiVersion="2.16.0"
      endpoints={217}
      sdkMethods={341}
      schemas={532}
      parameters={1236}
      difficulty="Very Hard"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/okta/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/okta/openapi.yaml"
      developerDocumentation="developer.okta.com/docs/reference/core-okta-api/"
    />
  );
}
  