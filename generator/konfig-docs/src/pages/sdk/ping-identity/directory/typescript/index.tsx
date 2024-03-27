import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function PingIdentityDirectoryTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="ping-identity-directory-typescript-sdk"
      metaDescription={`Ping Identity delivers unforgettable user experiences and uncompromising security. We are a single company that makes crafting digital experiences simple for any type of user—partners, customers, employees, and beyond. We are anti-lock-in. That means integrations with existing ecosystems, clouds, and on-prem technologies is simple. Out-of-the-box templates let businesses leverage our identity expertise to give their users frictionless experiences. Whether they're building a foundation of modern digital identity, or out-innovating their competitors with cutting-edge services like digital credentials, AI-driven fraud prevention and governance, Ping is the one-stop shop for game-changing digital identity. 

Headquartered in Denver, Colorado, Ping Identity also has offices across the world including Austin, Bangalore, Edinburgh, Grenoble, Israel, London, San Francisco, Singapore, and Vancouver.

*On August 23, 2023, Ping Identity and ForgeRock joined together to deliver more choice, deeper expertise, and a more complete identity solution for customers and partners.`}
      company="Ping Identity"
      serviceName="Directory"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/ping-identity/directory/logo.png"
      companyKebabCase="ping-identity"
      clientNameCamelCase="pingIdentityDirectory"
      homepage="pingidentity.com"
      lastUpdated={new Date("2024-03-27T16:32:49.329Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/ping-identity/directory/favicon.png"
      // Missing contactUrl
      // Missing contactEmail
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/ping-identity/directory/imagePreview.png"
      GettingStarted={GettingStarted}
      FirstRequest={FirstRequest}
      categories={["identity_and_access_management","security","authentication","access_management","identity","identity_management"]}
      methods={[
  {
    "url": "/global-configuration",
    "method": "getSingleConfig",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "global-configuration",
    "typeScriptTag": "globalConfiguration",
    "description": "Returns a single Global Configuration",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Global Configuration does not exist"
      }
    ]
  },
  {
    "url": "/global-configuration",
    "method": "updateByName",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "global-configuration",
    "typeScriptTag": "globalConfiguration",
    "description": "Update an existing Global Configuration by name",
    "parameters": [
      {
        "name": "operations",
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
        "description": "Invalid request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Global Configuration does not exist"
      }
    ]
  },
  {
    "url": "/id-token-validators",
    "method": "listAllValidators",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "id-token-validator",
    "typeScriptTag": "idTokenValidator",
    "description": "Returns a list of all ID Token Validator objects",
    "parameters": [
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "SCIM filter"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      }
    ]
  },
  {
    "url": "/id-token-validators",
    "method": "addNewValidator",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "id-token-validator",
    "typeScriptTag": "idTokenValidator",
    "description": "Add a new ID Token Validator to the config",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "409",
        "description": "The ID Token Validator already exists"
      }
    ]
  },
  {
    "url": "/id-token-validators/{id-token-validator-name}",
    "method": "deleteValidator",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "id-token-validator",
    "typeScriptTag": "idTokenValidator",
    "description": "Delete a ID Token Validator",
    "parameters": [
      {
        "name": "idTokenValidatorName",
        "schema": "string",
        "required": true,
        "description": "Name of the ID Token Validator",
        "example": "ID-TOKEN-VALIDATOR-NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Successful operation"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The ID Token Validator does not exist"
      },
      {
        "statusCode": "409",
        "description": "The ID Token Validator cannot be deleted"
      }
    ]
  },
  {
    "url": "/id-token-validators/{id-token-validator-name}",
    "method": "getSingleByIdTokenValidator",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "id-token-validator",
    "typeScriptTag": "idTokenValidator",
    "description": "Returns a single ID Token Validator",
    "parameters": [
      {
        "name": "idTokenValidatorName",
        "schema": "string",
        "required": true,
        "description": "Name of the ID Token Validator",
        "example": "ID-TOKEN-VALIDATOR-NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The ID Token Validator does not exist"
      }
    ]
  },
  {
    "url": "/id-token-validators/{id-token-validator-name}",
    "method": "updateByName",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "id-token-validator",
    "typeScriptTag": "idTokenValidator",
    "description": "Update an existing ID Token Validator by name",
    "parameters": [
      {
        "name": "idTokenValidatorName",
        "schema": "string",
        "required": true,
        "description": "Name of the ID Token Validator",
        "example": "ID-TOKEN-VALIDATOR-NAME"
      },
      {
        "name": "operations",
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
        "description": "Invalid request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The ID Token Validator does not exist"
      }
    ]
  },
  {
    "url": "/id-token-validators/{id-token-validator-name}/token-claim-validations",
    "method": "listTokenClaimValidations",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "token-claim-validation",
    "typeScriptTag": "tokenClaimValidation",
    "description": "Returns a list of all Token Claim Validation objects",
    "parameters": [
      {
        "name": "idTokenValidatorName",
        "schema": "string",
        "required": true,
        "description": "Name of the ID Token Validator",
        "example": "ID-TOKEN-VALIDATOR-NAME"
      },
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "SCIM filter"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      }
    ]
  },
  {
    "url": "/id-token-validators/{id-token-validator-name}/token-claim-validations",
    "method": "addNewClaimValidation",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "token-claim-validation",
    "typeScriptTag": "tokenClaimValidation",
    "description": "Add a new Token Claim Validation to the config",
    "parameters": [
      {
        "name": "idTokenValidatorName",
        "schema": "string",
        "required": true,
        "description": "Name of the ID Token Validator",
        "example": "ID-TOKEN-VALIDATOR-NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "409",
        "description": "The Token Claim Validation already exists"
      }
    ]
  },
  {
    "url": "/id-token-validators/{id-token-validator-name}/token-claim-validations/{token-claim-validation-name}",
    "method": "deleteClaimValidation",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "token-claim-validation",
    "typeScriptTag": "tokenClaimValidation",
    "description": "Delete a Token Claim Validation",
    "parameters": [
      {
        "name": "tokenClaimValidationName",
        "schema": "string",
        "required": true,
        "description": "Name of the Token Claim Validation",
        "example": "TOKEN-CLAIM-VALIDATION-NAME"
      },
      {
        "name": "idTokenValidatorName",
        "schema": "string",
        "required": true,
        "description": "Name of the ID Token Validator",
        "example": "ID-TOKEN-VALIDATOR-NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Successful operation"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Token Claim Validation does not exist"
      },
      {
        "statusCode": "409",
        "description": "The Token Claim Validation cannot be deleted"
      }
    ]
  },
  {
    "url": "/id-token-validators/{id-token-validator-name}/token-claim-validations/{token-claim-validation-name}",
    "method": "getSingleClaimValidation",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "token-claim-validation",
    "typeScriptTag": "tokenClaimValidation",
    "description": "Returns a single Token Claim Validation",
    "parameters": [
      {
        "name": "tokenClaimValidationName",
        "schema": "string",
        "required": true,
        "description": "Name of the Token Claim Validation",
        "example": "TOKEN-CLAIM-VALIDATION-NAME"
      },
      {
        "name": "idTokenValidatorName",
        "schema": "string",
        "required": true,
        "description": "Name of the ID Token Validator",
        "example": "ID-TOKEN-VALIDATOR-NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Token Claim Validation does not exist"
      }
    ]
  },
  {
    "url": "/id-token-validators/{id-token-validator-name}/token-claim-validations/{token-claim-validation-name}",
    "method": "updateClaimValidationByName",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "token-claim-validation",
    "typeScriptTag": "tokenClaimValidation",
    "description": "Update an existing Token Claim Validation by name",
    "parameters": [
      {
        "name": "tokenClaimValidationName",
        "schema": "string",
        "required": true,
        "description": "Name of the Token Claim Validation",
        "example": "TOKEN-CLAIM-VALIDATION-NAME"
      },
      {
        "name": "idTokenValidatorName",
        "schema": "string",
        "required": true,
        "description": "Name of the ID Token Validator",
        "example": "ID-TOKEN-VALIDATOR-NAME"
      },
      {
        "name": "operations",
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
        "description": "Invalid request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Token Claim Validation does not exist"
      }
    ]
  },
  {
    "url": "/plugin-root",
    "method": "getSingle",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "plugin-root",
    "typeScriptTag": "pluginRoot",
    "description": "Returns a single Plugin Root",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Plugin Root does not exist"
      }
    ]
  },
  {
    "url": "/plugin-root",
    "method": "updateByName",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "plugin-root",
    "typeScriptTag": "pluginRoot",
    "description": "Update an existing Plugin Root by name",
    "parameters": [
      {
        "name": "operations",
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
        "description": "Invalid request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Plugin Root does not exist"
      }
    ]
  },
  {
    "url": "/plugin-root/plugins",
    "method": "listAllObjects",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "plugin",
    "typeScriptTag": "plugin",
    "description": "Returns a list of all Plugin objects",
    "parameters": [
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "SCIM filter"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      }
    ]
  },
  {
    "url": "/plugin-root/plugins",
    "method": "addNewConfig",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "plugin",
    "typeScriptTag": "plugin",
    "description": "Add a new Plugin to the config",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "409",
        "description": "The Plugin already exists"
      }
    ]
  },
  {
    "url": "/plugin-root/plugins/{plugin-name}",
    "method": "deletePlugin",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "plugin",
    "typeScriptTag": "plugin",
    "description": "Delete a Plugin",
    "parameters": [
      {
        "name": "pluginName",
        "schema": "string",
        "required": true,
        "description": "Name of the Plugin",
        "example": "PLUGIN-NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Successful operation"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Plugin does not exist"
      },
      {
        "statusCode": "409",
        "description": "The Plugin cannot be deleted"
      }
    ]
  },
  {
    "url": "/plugin-root/plugins/{plugin-name}",
    "method": "getSingle",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "plugin",
    "typeScriptTag": "plugin",
    "description": "Returns a single Plugin",
    "parameters": [
      {
        "name": "pluginName",
        "schema": "string",
        "required": true,
        "description": "Name of the Plugin",
        "example": "PLUGIN-NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Plugin does not exist"
      }
    ]
  },
  {
    "url": "/plugin-root/plugins/{plugin-name}",
    "method": "updateByName",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "plugin",
    "typeScriptTag": "plugin",
    "description": "Update an existing Plugin by name",
    "parameters": [
      {
        "name": "pluginName",
        "schema": "string",
        "required": true,
        "description": "Name of the Plugin",
        "example": "PLUGIN-NAME"
      },
      {
        "name": "operations",
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
        "description": "Invalid request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Plugin does not exist"
      }
    ]
  },
  {
    "url": "/plugin-root/plugins/{plugin-name}/custom-logged-stats",
    "method": "listAllObjects",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "custom-logged-stats",
    "typeScriptTag": "customLoggedStats",
    "description": "Returns a list of all Custom Logged Stats objects",
    "parameters": [
      {
        "name": "pluginName",
        "schema": "string",
        "required": true,
        "description": "Name of the Plugin",
        "example": "PLUGIN-NAME"
      },
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "SCIM filter"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      }
    ]
  },
  {
    "url": "/plugin-root/plugins/{plugin-name}/custom-logged-stats",
    "method": "addNewStatToConfig",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "custom-logged-stats",
    "typeScriptTag": "customLoggedStats",
    "description": "Add a new Custom Logged Stats to the config",
    "parameters": [
      {
        "name": "pluginName",
        "schema": "string",
        "required": true,
        "description": "Name of the Plugin",
        "example": "PLUGIN-NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "409",
        "description": "The Custom Logged Stats already exists"
      }
    ]
  },
  {
    "url": "/plugin-root/plugins/{plugin-name}/custom-logged-stats/{custom-logged-stats-name}",
    "method": "deleteStat",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "custom-logged-stats",
    "typeScriptTag": "customLoggedStats",
    "description": "Delete a Custom Logged Stats",
    "parameters": [
      {
        "name": "customLoggedStatsName",
        "schema": "string",
        "required": true,
        "description": "Name of the Custom Logged Stats",
        "example": "CUSTOM-LOGGED-STATS-NAME"
      },
      {
        "name": "pluginName",
        "schema": "string",
        "required": true,
        "description": "Name of the Plugin",
        "example": "PLUGIN-NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Successful operation"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Custom Logged Stats does not exist"
      },
      {
        "statusCode": "409",
        "description": "The Custom Logged Stats cannot be deleted"
      }
    ]
  },
  {
    "url": "/plugin-root/plugins/{plugin-name}/custom-logged-stats/{custom-logged-stats-name}",
    "method": "getSingle",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "custom-logged-stats",
    "typeScriptTag": "customLoggedStats",
    "description": "Returns a single Custom Logged Stats",
    "parameters": [
      {
        "name": "customLoggedStatsName",
        "schema": "string",
        "required": true,
        "description": "Name of the Custom Logged Stats",
        "example": "CUSTOM-LOGGED-STATS-NAME"
      },
      {
        "name": "pluginName",
        "schema": "string",
        "required": true,
        "description": "Name of the Plugin",
        "example": "PLUGIN-NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Custom Logged Stats does not exist"
      }
    ]
  },
  {
    "url": "/plugin-root/plugins/{plugin-name}/custom-logged-stats/{custom-logged-stats-name}",
    "method": "updateByName",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "custom-logged-stats",
    "typeScriptTag": "customLoggedStats",
    "description": "Update an existing Custom Logged Stats by name",
    "parameters": [
      {
        "name": "customLoggedStatsName",
        "schema": "string",
        "required": true,
        "description": "Name of the Custom Logged Stats",
        "example": "CUSTOM-LOGGED-STATS-NAME"
      },
      {
        "name": "pluginName",
        "schema": "string",
        "required": true,
        "description": "Name of the Plugin",
        "example": "PLUGIN-NAME"
      },
      {
        "name": "operations",
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
        "description": "Invalid request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Custom Logged Stats does not exist"
      }
    ]
  },
  {
    "url": "/sensitive-attributes",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "sensitive-attribute",
    "typeScriptTag": "sensitiveAttribute",
    "description": "Returns a list of all Sensitive Attribute objects",
    "parameters": [
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "SCIM filter"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      }
    ]
  },
  {
    "url": "/sensitive-attributes",
    "method": "addNewConfig",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "sensitive-attribute",
    "typeScriptTag": "sensitiveAttribute",
    "description": "Add a new Sensitive Attribute to the config",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "409",
        "description": "The Sensitive Attribute already exists"
      }
    ]
  },
  {
    "url": "/sensitive-attributes/{sensitive-attribute-name}",
    "method": "deleteSensitiveAttribute",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "sensitive-attribute",
    "typeScriptTag": "sensitiveAttribute",
    "description": "Delete a Sensitive Attribute",
    "parameters": [
      {
        "name": "sensitiveAttributeName",
        "schema": "string",
        "required": true,
        "description": "Name of the Sensitive Attribute",
        "example": "SENSITIVE-ATTRIBUTE-NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Successful operation"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Sensitive Attribute does not exist"
      },
      {
        "statusCode": "409",
        "description": "The Sensitive Attribute cannot be deleted"
      }
    ]
  },
  {
    "url": "/sensitive-attributes/{sensitive-attribute-name}",
    "method": "getSingle",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "sensitive-attribute",
    "typeScriptTag": "sensitiveAttribute",
    "description": "Returns a single Sensitive Attribute",
    "parameters": [
      {
        "name": "sensitiveAttributeName",
        "schema": "string",
        "required": true,
        "description": "Name of the Sensitive Attribute",
        "example": "SENSITIVE-ATTRIBUTE-NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Sensitive Attribute does not exist"
      }
    ]
  },
  {
    "url": "/sensitive-attributes/{sensitive-attribute-name}",
    "method": "updateByName",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "sensitive-attribute",
    "typeScriptTag": "sensitiveAttribute",
    "description": "Update an existing Sensitive Attribute by name",
    "parameters": [
      {
        "name": "sensitiveAttributeName",
        "schema": "string",
        "required": true,
        "description": "Name of the Sensitive Attribute",
        "example": "SENSITIVE-ATTRIBUTE-NAME"
      },
      {
        "name": "operations",
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
        "description": "Invalid request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Sensitive Attribute does not exist"
      }
    ]
  },
  {
    "url": "/access-token-validators",
    "method": "listObjects",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "access-token-validator",
    "typeScriptTag": "accessTokenValidator",
    "description": "Returns a list of all Access Token Validator objects",
    "parameters": [
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "SCIM filter"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      }
    ]
  },
  {
    "url": "/access-token-validators",
    "method": "addNewValidator",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "access-token-validator",
    "typeScriptTag": "accessTokenValidator",
    "description": "Add a new Access Token Validator to the config",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "409",
        "description": "The Access Token Validator already exists"
      }
    ]
  },
  {
    "url": "/access-token-validators/{access-token-validator-name}",
    "method": "deleteValidator",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "access-token-validator",
    "typeScriptTag": "accessTokenValidator",
    "description": "Delete a Access Token Validator",
    "parameters": [
      {
        "name": "accessTokenValidatorName",
        "schema": "string",
        "required": true,
        "description": "Name of the Access Token Validator",
        "example": "ACCESS-TOKEN-VALIDATOR-NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Successful operation"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Access Token Validator does not exist"
      },
      {
        "statusCode": "409",
        "description": "The Access Token Validator cannot be deleted"
      }
    ]
  },
  {
    "url": "/access-token-validators/{access-token-validator-name}",
    "method": "getSingleValidator",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "access-token-validator",
    "typeScriptTag": "accessTokenValidator",
    "description": "Returns a single Access Token Validator",
    "parameters": [
      {
        "name": "accessTokenValidatorName",
        "schema": "string",
        "required": true,
        "description": "Name of the Access Token Validator",
        "example": "ACCESS-TOKEN-VALIDATOR-NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Access Token Validator does not exist"
      }
    ]
  },
  {
    "url": "/access-token-validators/{access-token-validator-name}",
    "method": "updateByName",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "access-token-validator",
    "typeScriptTag": "accessTokenValidator",
    "description": "Update an existing Access Token Validator by name",
    "parameters": [
      {
        "name": "accessTokenValidatorName",
        "schema": "string",
        "required": true,
        "description": "Name of the Access Token Validator",
        "example": "ACCESS-TOKEN-VALIDATOR-NAME"
      },
      {
        "name": "operations",
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
        "description": "Invalid request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Access Token Validator does not exist"
      }
    ]
  },
  {
    "url": "/root-dse-backend",
    "method": "getSingle",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "root-dse-backend",
    "typeScriptTag": "rootDseBackend",
    "description": "Returns a single Root DSE Backend",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Root DSE Backend does not exist"
      }
    ]
  },
  {
    "url": "/root-dse-backend",
    "method": "updateByName",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "root-dse-backend",
    "typeScriptTag": "rootDseBackend",
    "description": "Update an existing Root DSE Backend by name",
    "parameters": [
      {
        "name": "operations",
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
        "description": "Invalid request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Root DSE Backend does not exist"
      }
    ]
  },
  {
    "url": "/log-field-mappings",
    "method": "getAllLogFieldMappings",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "log-field-mapping",
    "typeScriptTag": "logFieldMapping",
    "description": "Returns a list of all Log Field Mapping objects",
    "parameters": [
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "SCIM filter"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      }
    ]
  },
  {
    "url": "/log-field-mappings",
    "method": "addNewMapping",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "log-field-mapping",
    "typeScriptTag": "logFieldMapping",
    "description": "Add a new Log Field Mapping to the config",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "409",
        "description": "The Log Field Mapping already exists"
      }
    ]
  },
  {
    "url": "/log-field-mappings/{log-field-mapping-name}",
    "method": "deleteMappingById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "log-field-mapping",
    "typeScriptTag": "logFieldMapping",
    "description": "Delete a Log Field Mapping",
    "parameters": [
      {
        "name": "logFieldMappingName",
        "schema": "string",
        "required": true,
        "description": "Name of the Log Field Mapping",
        "example": "LOG-FIELD-MAPPING-NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Successful operation"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Log Field Mapping does not exist"
      },
      {
        "statusCode": "409",
        "description": "The Log Field Mapping cannot be deleted"
      }
    ]
  },
  {
    "url": "/log-field-mappings/{log-field-mapping-name}",
    "method": "getSingle",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "log-field-mapping",
    "typeScriptTag": "logFieldMapping",
    "description": "Returns a single Log Field Mapping",
    "parameters": [
      {
        "name": "logFieldMappingName",
        "schema": "string",
        "required": true,
        "description": "Name of the Log Field Mapping",
        "example": "LOG-FIELD-MAPPING-NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Log Field Mapping does not exist"
      }
    ]
  },
  {
    "url": "/log-field-mappings/{log-field-mapping-name}",
    "method": "updateByName",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "log-field-mapping",
    "typeScriptTag": "logFieldMapping",
    "description": "Update an existing Log Field Mapping by name",
    "parameters": [
      {
        "name": "logFieldMappingName",
        "schema": "string",
        "required": true,
        "description": "Name of the Log Field Mapping",
        "example": "LOG-FIELD-MAPPING-NAME"
      },
      {
        "name": "operations",
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
        "description": "Invalid request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Log Field Mapping does not exist"
      }
    ]
  },
  {
    "url": "/password-generators",
    "method": "listAllGenerators",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "password-generator",
    "typeScriptTag": "passwordGenerator",
    "description": "Returns a list of all Password Generator objects",
    "parameters": [
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "SCIM filter"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      }
    ]
  },
  {
    "url": "/password-generators",
    "method": "addNewToConfig",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "password-generator",
    "typeScriptTag": "passwordGenerator",
    "description": "Add a new Password Generator to the config",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "409",
        "description": "The Password Generator already exists"
      }
    ]
  },
  {
    "url": "/password-generators/{password-generator-name}",
    "method": "deleteGenerator",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "password-generator",
    "typeScriptTag": "passwordGenerator",
    "description": "Delete a Password Generator",
    "parameters": [
      {
        "name": "passwordGeneratorName",
        "schema": "string",
        "required": true,
        "description": "Name of the Password Generator",
        "example": "PASSWORD-GENERATOR-NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Successful operation"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Password Generator does not exist"
      },
      {
        "statusCode": "409",
        "description": "The Password Generator cannot be deleted"
      }
    ]
  },
  {
    "url": "/password-generators/{password-generator-name}",
    "method": "getSingleGenerator",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "password-generator",
    "typeScriptTag": "passwordGenerator",
    "description": "Returns a single Password Generator",
    "parameters": [
      {
        "name": "passwordGeneratorName",
        "schema": "string",
        "required": true,
        "description": "Name of the Password Generator",
        "example": "PASSWORD-GENERATOR-NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Password Generator does not exist"
      }
    ]
  },
  {
    "url": "/password-generators/{password-generator-name}",
    "method": "updateByName",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "password-generator",
    "typeScriptTag": "passwordGenerator",
    "description": "Update an existing Password Generator by name",
    "parameters": [
      {
        "name": "passwordGeneratorName",
        "schema": "string",
        "required": true,
        "description": "Name of the Password Generator",
        "example": "PASSWORD-GENERATOR-NAME"
      },
      {
        "name": "operations",
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
        "description": "Invalid request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Password Generator does not exist"
      }
    ]
  },
  {
    "url": "/otp-delivery-mechanisms",
    "method": "listAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "otp-delivery-mechanism",
    "typeScriptTag": "otpDeliveryMechanism",
    "description": "Returns a list of all OTP Delivery Mechanism objects",
    "parameters": [
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "SCIM filter"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      }
    ]
  },
  {
    "url": "/otp-delivery-mechanisms",
    "method": "addNewMethod",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "otp-delivery-mechanism",
    "typeScriptTag": "otpDeliveryMechanism",
    "description": "Add a new OTP Delivery Mechanism to the config",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "409",
        "description": "The OTP Delivery Mechanism already exists"
      }
    ]
  },
  {
    "url": "/otp-delivery-mechanisms/{otp-delivery-mechanism-name}",
    "method": "deleteDeliveryMechanism",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "otp-delivery-mechanism",
    "typeScriptTag": "otpDeliveryMechanism",
    "description": "Delete a OTP Delivery Mechanism",
    "parameters": [
      {
        "name": "otpDeliveryMechanismName",
        "schema": "string",
        "required": true,
        "description": "Name of the OTP Delivery Mechanism",
        "example": "OTP-DELIVERY-MECHANISM-NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Successful operation"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The OTP Delivery Mechanism does not exist"
      },
      {
        "statusCode": "409",
        "description": "The OTP Delivery Mechanism cannot be deleted"
      }
    ]
  },
  {
    "url": "/otp-delivery-mechanisms/{otp-delivery-mechanism-name}",
    "method": "getSingleDeliveryMechanism",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "otp-delivery-mechanism",
    "typeScriptTag": "otpDeliveryMechanism",
    "description": "Returns a single OTP Delivery Mechanism",
    "parameters": [
      {
        "name": "otpDeliveryMechanismName",
        "schema": "string",
        "required": true,
        "description": "Name of the OTP Delivery Mechanism",
        "example": "OTP-DELIVERY-MECHANISM-NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The OTP Delivery Mechanism does not exist"
      }
    ]
  },
  {
    "url": "/otp-delivery-mechanisms/{otp-delivery-mechanism-name}",
    "method": "updateByOtpDeliveryMechanismName",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "otp-delivery-mechanism",
    "typeScriptTag": "otpDeliveryMechanism",
    "description": "Update an existing OTP Delivery Mechanism by name",
    "parameters": [
      {
        "name": "otpDeliveryMechanismName",
        "schema": "string",
        "required": true,
        "description": "Name of the OTP Delivery Mechanism",
        "example": "OTP-DELIVERY-MECHANISM-NAME"
      },
      {
        "name": "operations",
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
        "description": "Invalid request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The OTP Delivery Mechanism does not exist"
      }
    ]
  },
  {
    "url": "/log-field-behaviors",
    "method": "getAllLogFieldBehaviors",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "log-field-behavior",
    "typeScriptTag": "logFieldBehavior",
    "description": "Returns a list of all Log Field Behavior objects",
    "parameters": [
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "SCIM filter"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      }
    ]
  },
  {
    "url": "/log-field-behaviors",
    "method": "addNewConfig",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "log-field-behavior",
    "typeScriptTag": "logFieldBehavior",
    "description": "Add a new Log Field Behavior to the config",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "409",
        "description": "The Log Field Behavior already exists"
      }
    ]
  },
  {
    "url": "/log-field-behaviors/{log-field-behavior-name}",
    "method": "deleteBehavior",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "log-field-behavior",
    "typeScriptTag": "logFieldBehavior",
    "description": "Delete a Log Field Behavior",
    "parameters": [
      {
        "name": "logFieldBehaviorName",
        "schema": "string",
        "required": true,
        "description": "Name of the Log Field Behavior",
        "example": "LOG-FIELD-BEHAVIOR-NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Successful operation"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Log Field Behavior does not exist"
      },
      {
        "statusCode": "409",
        "description": "The Log Field Behavior cannot be deleted"
      }
    ]
  },
  {
    "url": "/log-field-behaviors/{log-field-behavior-name}",
    "method": "getSingle",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "log-field-behavior",
    "typeScriptTag": "logFieldBehavior",
    "description": "Returns a single Log Field Behavior",
    "parameters": [
      {
        "name": "logFieldBehaviorName",
        "schema": "string",
        "required": true,
        "description": "Name of the Log Field Behavior",
        "example": "LOG-FIELD-BEHAVIOR-NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Log Field Behavior does not exist"
      }
    ]
  },
  {
    "url": "/log-field-behaviors/{log-field-behavior-name}",
    "method": "updateByName",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "log-field-behavior",
    "typeScriptTag": "logFieldBehavior",
    "description": "Update an existing Log Field Behavior by name",
    "parameters": [
      {
        "name": "logFieldBehaviorName",
        "schema": "string",
        "required": true,
        "description": "Name of the Log Field Behavior",
        "example": "LOG-FIELD-BEHAVIOR-NAME"
      },
      {
        "name": "operations",
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
        "description": "Invalid request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Log Field Behavior does not exist"
      }
    ]
  },
  {
    "url": "/server-instances",
    "method": "listAllObjects",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "server-instance",
    "typeScriptTag": "serverInstance",
    "description": "Returns a list of all Server Instance objects",
    "parameters": [
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "SCIM filter"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      }
    ]
  },
  {
    "url": "/server-instances/{server-instance-name}",
    "method": "getSingleInstance",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "server-instance",
    "typeScriptTag": "serverInstance",
    "description": "Returns a single Server Instance",
    "parameters": [
      {
        "name": "serverInstanceName",
        "schema": "string",
        "required": true,
        "description": "Name of the Server Instance",
        "example": "SERVER-INSTANCE-NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Server Instance does not exist"
      }
    ]
  },
  {
    "url": "/server-instances/{server-instance-name}",
    "method": "updateByName",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "server-instance",
    "typeScriptTag": "serverInstance",
    "description": "Update an existing Server Instance by name",
    "parameters": [
      {
        "name": "serverInstanceName",
        "schema": "string",
        "required": true,
        "description": "Name of the Server Instance",
        "example": "SERVER-INSTANCE-NAME"
      },
      {
        "name": "operations",
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
        "description": "Invalid request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Server Instance does not exist"
      }
    ]
  },
  {
    "url": "/server-instances/{server-instance-name}/server-instance-listeners",
    "method": "listAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "server-instance-listener",
    "typeScriptTag": "serverInstanceListener",
    "description": "Returns a list of all Server Instance Listener objects",
    "parameters": [
      {
        "name": "serverInstanceName",
        "schema": "string",
        "required": true,
        "description": "Name of the Server Instance",
        "example": "SERVER-INSTANCE-NAME"
      },
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "SCIM filter"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      }
    ]
  },
  {
    "url": "/server-instances/{server-instance-name}/server-instance-listeners/{server-instance-listener-name}",
    "method": "getSingleListener",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "server-instance-listener",
    "typeScriptTag": "serverInstanceListener",
    "description": "Returns a single Server Instance Listener",
    "parameters": [
      {
        "name": "serverInstanceListenerName",
        "schema": "string",
        "required": true,
        "description": "Name of the Server Instance Listener",
        "example": "SERVER-INSTANCE-LISTENER-NAME"
      },
      {
        "name": "serverInstanceName",
        "schema": "string",
        "required": true,
        "description": "Name of the Server Instance",
        "example": "SERVER-INSTANCE-NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Server Instance Listener does not exist"
      }
    ]
  },
  {
    "url": "/server-instances/{server-instance-name}/server-instance-listeners/{server-instance-listener-name}",
    "method": "updateByName",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "server-instance-listener",
    "typeScriptTag": "serverInstanceListener",
    "description": "Update an existing Server Instance Listener by name",
    "parameters": [
      {
        "name": "serverInstanceListenerName",
        "schema": "string",
        "required": true,
        "description": "Name of the Server Instance Listener",
        "example": "SERVER-INSTANCE-LISTENER-NAME"
      },
      {
        "name": "serverInstanceName",
        "schema": "string",
        "required": true,
        "description": "Name of the Server Instance",
        "example": "SERVER-INSTANCE-NAME"
      },
      {
        "name": "operations",
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
        "description": "Invalid request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Server Instance Listener does not exist"
      }
    ]
  },
  {
    "url": "/server-instances/{server-instance-name}/mac-secret-keys",
    "method": "listAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "mac-secret-key",
    "typeScriptTag": "macSecretKey",
    "description": "Returns a list of all Mac Secret Key objects",
    "parameters": [
      {
        "name": "serverInstanceName",
        "schema": "string",
        "required": true,
        "description": "Name of the Server Instance",
        "example": "SERVER-INSTANCE-NAME"
      },
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "SCIM filter"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      }
    ]
  },
  {
    "url": "/server-instances/{server-instance-name}/mac-secret-keys/{mac-secret-key-name}",
    "method": "getOne",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "mac-secret-key",
    "typeScriptTag": "macSecretKey",
    "description": "Returns a single Mac Secret Key",
    "parameters": [
      {
        "name": "macSecretKeyName",
        "schema": "string",
        "required": true,
        "description": "Name of the Mac Secret Key",
        "example": "MAC-SECRET-KEY-NAME"
      },
      {
        "name": "serverInstanceName",
        "schema": "string",
        "required": true,
        "description": "Name of the Server Instance",
        "example": "SERVER-INSTANCE-NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Mac Secret Key does not exist"
      }
    ]
  },
  {
    "url": "/server-instances/{server-instance-name}/mac-secret-keys/{mac-secret-key-name}",
    "method": "updateByName",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "mac-secret-key",
    "typeScriptTag": "macSecretKey",
    "description": "Update an existing Mac Secret Key by name",
    "parameters": [
      {
        "name": "macSecretKeyName",
        "schema": "string",
        "required": true,
        "description": "Name of the Mac Secret Key",
        "example": "MAC-SECRET-KEY-NAME"
      },
      {
        "name": "serverInstanceName",
        "schema": "string",
        "required": true,
        "description": "Name of the Server Instance",
        "example": "SERVER-INSTANCE-NAME"
      },
      {
        "name": "operations",
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
        "description": "Invalid request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Mac Secret Key does not exist"
      }
    ]
  },
  {
    "url": "/server-instances/{server-instance-name}/cipher-secret-keys",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "cipher-secret-key",
    "typeScriptTag": "cipherSecretKey",
    "description": "Returns a list of all Cipher Secret Key objects",
    "parameters": [
      {
        "name": "serverInstanceName",
        "schema": "string",
        "required": true,
        "description": "Name of the Server Instance",
        "example": "SERVER-INSTANCE-NAME"
      },
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "SCIM filter"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      }
    ]
  },
  {
    "url": "/server-instances/{server-instance-name}/cipher-secret-keys/{cipher-secret-key-name}",
    "method": "getSingleKey",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "cipher-secret-key",
    "typeScriptTag": "cipherSecretKey",
    "description": "Returns a single Cipher Secret Key",
    "parameters": [
      {
        "name": "cipherSecretKeyName",
        "schema": "string",
        "required": true,
        "description": "Name of the Cipher Secret Key",
        "example": "CIPHER-SECRET-KEY-NAME"
      },
      {
        "name": "serverInstanceName",
        "schema": "string",
        "required": true,
        "description": "Name of the Server Instance",
        "example": "SERVER-INSTANCE-NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Cipher Secret Key does not exist"
      }
    ]
  },
  {
    "url": "/server-instances/{server-instance-name}/cipher-secret-keys/{cipher-secret-key-name}",
    "method": "updateByName",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "cipher-secret-key",
    "typeScriptTag": "cipherSecretKey",
    "description": "Update an existing Cipher Secret Key by name",
    "parameters": [
      {
        "name": "cipherSecretKeyName",
        "schema": "string",
        "required": true,
        "description": "Name of the Cipher Secret Key",
        "example": "CIPHER-SECRET-KEY-NAME"
      },
      {
        "name": "serverInstanceName",
        "schema": "string",
        "required": true,
        "description": "Name of the Server Instance",
        "example": "SERVER-INSTANCE-NAME"
      },
      {
        "name": "operations",
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
        "description": "Invalid request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Cipher Secret Key does not exist"
      }
    ]
  },
  {
    "url": "/server-instances/{server-instance-name}/server-instance-listeners/{server-instance-listener-name}/inter-server-authentication-info",
    "method": "listInterServerAuthenticationInfo",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "inter-server-authentication-info",
    "typeScriptTag": "interServerAuthenticationInfo",
    "description": "Returns a list of all Inter Server Authentication Info objects",
    "parameters": [
      {
        "name": "serverInstanceListenerName",
        "schema": "string",
        "required": true,
        "description": "Name of the Server Instance Listener",
        "example": "SERVER-INSTANCE-LISTENER-NAME"
      },
      {
        "name": "serverInstanceName",
        "schema": "string",
        "required": true,
        "description": "Name of the Server Instance",
        "example": "SERVER-INSTANCE-NAME"
      },
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "SCIM filter"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      }
    ]
  },
  {
    "url": "/server-instances/{server-instance-name}/server-instance-listeners/{server-instance-listener-name}/inter-server-authentication-info/{inter-server-authentication-info-name}",
    "method": "getSingleAuthenticationInfo",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "inter-server-authentication-info",
    "typeScriptTag": "interServerAuthenticationInfo",
    "description": "Returns a single Inter Server Authentication Info",
    "parameters": [
      {
        "name": "interServerAuthenticationInfoName",
        "schema": "string",
        "required": true,
        "description": "Name of the Inter Server Authentication Info",
        "example": "INTER-SERVER-AUTHENTICATION-INFO-NAME"
      },
      {
        "name": "serverInstanceListenerName",
        "schema": "string",
        "required": true,
        "description": "Name of the Server Instance Listener",
        "example": "SERVER-INSTANCE-LISTENER-NAME"
      },
      {
        "name": "serverInstanceName",
        "schema": "string",
        "required": true,
        "description": "Name of the Server Instance",
        "example": "SERVER-INSTANCE-NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Inter Server Authentication Info does not exist"
      }
    ]
  },
  {
    "url": "/server-instances/{server-instance-name}/server-instance-listeners/{server-instance-listener-name}/inter-server-authentication-info/{inter-server-authentication-info-name}",
    "method": "updateByName",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "inter-server-authentication-info",
    "typeScriptTag": "interServerAuthenticationInfo",
    "description": "Update an existing Inter Server Authentication Info by name",
    "parameters": [
      {
        "name": "interServerAuthenticationInfoName",
        "schema": "string",
        "required": true,
        "description": "Name of the Inter Server Authentication Info",
        "example": "INTER-SERVER-AUTHENTICATION-INFO-NAME"
      },
      {
        "name": "serverInstanceListenerName",
        "schema": "string",
        "required": true,
        "description": "Name of the Server Instance Listener",
        "example": "SERVER-INSTANCE-LISTENER-NAME"
      },
      {
        "name": "serverInstanceName",
        "schema": "string",
        "required": true,
        "description": "Name of the Server Instance",
        "example": "SERVER-INSTANCE-NAME"
      },
      {
        "name": "operations",
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
        "description": "Invalid request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Inter Server Authentication Info does not exist"
      }
    ]
  },
  {
    "url": "/log-file-rotation-listeners",
    "method": "listLogRotationListeners",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "log-file-rotation-listener",
    "typeScriptTag": "logFileRotationListener",
    "description": "Returns a list of all Log File Rotation Listener objects",
    "parameters": [
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "SCIM filter"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      }
    ]
  },
  {
    "url": "/log-file-rotation-listeners",
    "method": "addNewListener",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "log-file-rotation-listener",
    "typeScriptTag": "logFileRotationListener",
    "description": "Add a new Log File Rotation Listener to the config",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "409",
        "description": "The Log File Rotation Listener already exists"
      }
    ]
  },
  {
    "url": "/log-file-rotation-listeners/{log-file-rotation-listener-name}",
    "method": "deleteLogRotationListener",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "log-file-rotation-listener",
    "typeScriptTag": "logFileRotationListener",
    "description": "Delete a Log File Rotation Listener",
    "parameters": [
      {
        "name": "logFileRotationListenerName",
        "schema": "string",
        "required": true,
        "description": "Name of the Log File Rotation Listener",
        "example": "LOG-FILE-ROTATION-LISTENER-NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Successful operation"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Log File Rotation Listener does not exist"
      },
      {
        "statusCode": "409",
        "description": "The Log File Rotation Listener cannot be deleted"
      }
    ]
  },
  {
    "url": "/log-file-rotation-listeners/{log-file-rotation-listener-name}",
    "method": "getSingle",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "log-file-rotation-listener",
    "typeScriptTag": "logFileRotationListener",
    "description": "Returns a single Log File Rotation Listener",
    "parameters": [
      {
        "name": "logFileRotationListenerName",
        "schema": "string",
        "required": true,
        "description": "Name of the Log File Rotation Listener",
        "example": "LOG-FILE-ROTATION-LISTENER-NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Log File Rotation Listener does not exist"
      }
    ]
  },
  {
    "url": "/log-file-rotation-listeners/{log-file-rotation-listener-name}",
    "method": "updateByName",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "log-file-rotation-listener",
    "typeScriptTag": "logFileRotationListener",
    "description": "Update an existing Log File Rotation Listener by name",
    "parameters": [
      {
        "name": "logFileRotationListenerName",
        "schema": "string",
        "required": true,
        "description": "Name of the Log File Rotation Listener",
        "example": "LOG-FILE-ROTATION-LISTENER-NAME"
      },
      {
        "name": "operations",
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
        "description": "Invalid request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Log File Rotation Listener does not exist"
      }
    ]
  },
  {
    "url": "/password-policies",
    "method": "listAllObjects",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "password-policy",
    "typeScriptTag": "passwordPolicy",
    "description": "Returns a list of all Password Policy objects",
    "parameters": [
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "SCIM filter"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      }
    ]
  },
  {
    "url": "/password-policies",
    "method": "addNewPolicyToConfig",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "password-policy",
    "typeScriptTag": "passwordPolicy",
    "description": "Add a new Password Policy to the config",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "409",
        "description": "The Password Policy already exists"
      }
    ]
  },
  {
    "url": "/password-policies/{password-policy-name}",
    "method": "deletePolicy",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "password-policy",
    "typeScriptTag": "passwordPolicy",
    "description": "Delete a Password Policy",
    "parameters": [
      {
        "name": "passwordPolicyName",
        "schema": "string",
        "required": true,
        "description": "Name of the Password Policy",
        "example": "PASSWORD-POLICY-NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Successful operation"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Password Policy does not exist"
      },
      {
        "statusCode": "409",
        "description": "The Password Policy cannot be deleted"
      }
    ]
  },
  {
    "url": "/password-policies/{password-policy-name}",
    "method": "getSinglePolicy",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "password-policy",
    "typeScriptTag": "passwordPolicy",
    "description": "Returns a single Password Policy",
    "parameters": [
      {
        "name": "passwordPolicyName",
        "schema": "string",
        "required": true,
        "description": "Name of the Password Policy",
        "example": "PASSWORD-POLICY-NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Password Policy does not exist"
      }
    ]
  },
  {
    "url": "/password-policies/{password-policy-name}",
    "method": "updateByName",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "password-policy",
    "typeScriptTag": "passwordPolicy",
    "description": "Update an existing Password Policy by name",
    "parameters": [
      {
        "name": "passwordPolicyName",
        "schema": "string",
        "required": true,
        "description": "Name of the Password Policy",
        "example": "PASSWORD-POLICY-NAME"
      },
      {
        "name": "operations",
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
        "description": "Invalid request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Password Policy does not exist"
      }
    ]
  },
  {
    "url": "/delegated-admin-rights",
    "method": "listAllObjects",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "delegated-admin-rights",
    "typeScriptTag": "delegatedAdminRights",
    "description": "Returns a list of all Delegated Admin Rights objects",
    "parameters": [
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "SCIM filter"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      }
    ]
  },
  {
    "url": "/delegated-admin-rights",
    "method": "addNewConfig",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "delegated-admin-rights",
    "typeScriptTag": "delegatedAdminRights",
    "description": "Add a new Delegated Admin Rights to the config",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "409",
        "description": "The Delegated Admin Rights already exists"
      }
    ]
  },
  {
    "url": "/delegated-admin-rights/{delegated-admin-rights-name}",
    "method": "deleteDelegatedAdminRights",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "delegated-admin-rights",
    "typeScriptTag": "delegatedAdminRights",
    "description": "Delete a Delegated Admin Rights",
    "parameters": [
      {
        "name": "delegatedAdminRightsName",
        "schema": "string",
        "required": true,
        "description": "Name of the Delegated Admin Rights",
        "example": "DELEGATED-ADMIN-RIGHTS-NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Successful operation"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Delegated Admin Rights does not exist"
      },
      {
        "statusCode": "409",
        "description": "The Delegated Admin Rights cannot be deleted"
      }
    ]
  },
  {
    "url": "/delegated-admin-rights/{delegated-admin-rights-name}",
    "method": "getSingleRights",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "delegated-admin-rights",
    "typeScriptTag": "delegatedAdminRights",
    "description": "Returns a single Delegated Admin Rights",
    "parameters": [
      {
        "name": "delegatedAdminRightsName",
        "schema": "string",
        "required": true,
        "description": "Name of the Delegated Admin Rights",
        "example": "DELEGATED-ADMIN-RIGHTS-NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Delegated Admin Rights does not exist"
      }
    ]
  },
  {
    "url": "/delegated-admin-rights/{delegated-admin-rights-name}",
    "method": "updateByName",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "delegated-admin-rights",
    "typeScriptTag": "delegatedAdminRights",
    "description": "Update an existing Delegated Admin Rights by name",
    "parameters": [
      {
        "name": "delegatedAdminRightsName",
        "schema": "string",
        "required": true,
        "description": "Name of the Delegated Admin Rights",
        "example": "DELEGATED-ADMIN-RIGHTS-NAME"
      },
      {
        "name": "operations",
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
        "description": "Invalid request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Delegated Admin Rights does not exist"
      }
    ]
  },
  {
    "url": "/delegated-admin-rights/{delegated-admin-rights-name}/delegated-admin-resource-rights",
    "method": "listAllObjects",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "delegated-admin-resource-rights",
    "typeScriptTag": "delegatedAdminResourceRights",
    "description": "Returns a list of all Delegated Admin Resource Rights objects",
    "parameters": [
      {
        "name": "delegatedAdminRightsName",
        "schema": "string",
        "required": true,
        "description": "Name of the Delegated Admin Rights",
        "example": "DELEGATED-ADMIN-RIGHTS-NAME"
      },
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "SCIM filter"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      }
    ]
  },
  {
    "url": "/delegated-admin-rights/{delegated-admin-rights-name}/delegated-admin-resource-rights",
    "method": "addNewToConfig",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "delegated-admin-resource-rights",
    "typeScriptTag": "delegatedAdminResourceRights",
    "description": "Add a new Delegated Admin Resource Rights to the config",
    "parameters": [
      {
        "name": "delegatedAdminRightsName",
        "schema": "string",
        "required": true,
        "description": "Name of the Delegated Admin Rights",
        "example": "DELEGATED-ADMIN-RIGHTS-NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "409",
        "description": "The Delegated Admin Resource Rights already exists"
      }
    ]
  },
  {
    "url": "/delegated-admin-rights/{delegated-admin-rights-name}/delegated-admin-resource-rights/{delegated-admin-resource-rights-name}",
    "method": "deleteResourceRights",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "delegated-admin-resource-rights",
    "typeScriptTag": "delegatedAdminResourceRights",
    "description": "Delete a Delegated Admin Resource Rights",
    "parameters": [
      {
        "name": "delegatedAdminResourceRightsName",
        "schema": "string",
        "required": true,
        "description": "Name of the Delegated Admin Resource Rights",
        "example": "DELEGATED-ADMIN-RESOURCE-RIGHTS-NAME"
      },
      {
        "name": "delegatedAdminRightsName",
        "schema": "string",
        "required": true,
        "description": "Name of the Delegated Admin Rights",
        "example": "DELEGATED-ADMIN-RIGHTS-NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Successful operation"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Delegated Admin Resource Rights does not exist"
      },
      {
        "statusCode": "409",
        "description": "The Delegated Admin Resource Rights cannot be deleted"
      }
    ]
  },
  {
    "url": "/delegated-admin-rights/{delegated-admin-rights-name}/delegated-admin-resource-rights/{delegated-admin-resource-rights-name}",
    "method": "getSingleResourceRights",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "delegated-admin-resource-rights",
    "typeScriptTag": "delegatedAdminResourceRights",
    "description": "Returns a single Delegated Admin Resource Rights",
    "parameters": [
      {
        "name": "delegatedAdminResourceRightsName",
        "schema": "string",
        "required": true,
        "description": "Name of the Delegated Admin Resource Rights",
        "example": "DELEGATED-ADMIN-RESOURCE-RIGHTS-NAME"
      },
      {
        "name": "delegatedAdminRightsName",
        "schema": "string",
        "required": true,
        "description": "Name of the Delegated Admin Rights",
        "example": "DELEGATED-ADMIN-RIGHTS-NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Delegated Admin Resource Rights does not exist"
      }
    ]
  },
  {
    "url": "/delegated-admin-rights/{delegated-admin-rights-name}/delegated-admin-resource-rights/{delegated-admin-resource-rights-name}",
    "method": "updateByName",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "delegated-admin-resource-rights",
    "typeScriptTag": "delegatedAdminResourceRights",
    "description": "Update an existing Delegated Admin Resource Rights by name",
    "parameters": [
      {
        "name": "delegatedAdminResourceRightsName",
        "schema": "string",
        "required": true,
        "description": "Name of the Delegated Admin Resource Rights",
        "example": "DELEGATED-ADMIN-RESOURCE-RIGHTS-NAME"
      },
      {
        "name": "delegatedAdminRightsName",
        "schema": "string",
        "required": true,
        "description": "Name of the Delegated Admin Rights",
        "example": "DELEGATED-ADMIN-RIGHTS-NAME"
      },
      {
        "name": "operations",
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
        "description": "Invalid request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Delegated Admin Resource Rights does not exist"
      }
    ]
  },
  {
    "url": "/uncached-attribute-criteria",
    "method": "getAllObjects",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "uncached-attribute-criteria",
    "typeScriptTag": "uncachedAttributeCriteria",
    "description": "Returns a list of all Uncached Attribute Criteria objects",
    "parameters": [
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "SCIM filter"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      }
    ]
  },
  {
    "url": "/uncached-attribute-criteria",
    "method": "addNewToConfig",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "uncached-attribute-criteria",
    "typeScriptTag": "uncachedAttributeCriteria",
    "description": "Add a new Uncached Attribute Criteria to the config",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "409",
        "description": "The Uncached Attribute Criteria already exists"
      }
    ]
  },
  {
    "url": "/uncached-attribute-criteria/{uncached-attribute-criteria-name}",
    "method": "deleteUncachedAttributeCriteria",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "uncached-attribute-criteria",
    "typeScriptTag": "uncachedAttributeCriteria",
    "description": "Delete a Uncached Attribute Criteria",
    "parameters": [
      {
        "name": "uncachedAttributeCriteriaName",
        "schema": "string",
        "required": true,
        "description": "Name of the Uncached Attribute Criteria",
        "example": "UNCACHED-ATTRIBUTE-CRITERIA-NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Successful operation"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Uncached Attribute Criteria does not exist"
      },
      {
        "statusCode": "409",
        "description": "The Uncached Attribute Criteria cannot be deleted"
      }
    ]
  },
  {
    "url": "/uncached-attribute-criteria/{uncached-attribute-criteria-name}",
    "method": "getSingle",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "uncached-attribute-criteria",
    "typeScriptTag": "uncachedAttributeCriteria",
    "description": "Returns a single Uncached Attribute Criteria",
    "parameters": [
      {
        "name": "uncachedAttributeCriteriaName",
        "schema": "string",
        "required": true,
        "description": "Name of the Uncached Attribute Criteria",
        "example": "UNCACHED-ATTRIBUTE-CRITERIA-NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Uncached Attribute Criteria does not exist"
      }
    ]
  },
  {
    "url": "/uncached-attribute-criteria/{uncached-attribute-criteria-name}",
    "method": "updateByName",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "uncached-attribute-criteria",
    "typeScriptTag": "uncachedAttributeCriteria",
    "description": "Update an existing Uncached Attribute Criteria by name",
    "parameters": [
      {
        "name": "uncachedAttributeCriteriaName",
        "schema": "string",
        "required": true,
        "description": "Name of the Uncached Attribute Criteria",
        "example": "UNCACHED-ATTRIBUTE-CRITERIA-NAME"
      },
      {
        "name": "operations",
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
        "description": "Invalid request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Uncached Attribute Criteria does not exist"
      }
    ]
  },
  {
    "url": "/result-code-maps",
    "method": "getAllObjects",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "result-code-map",
    "typeScriptTag": "resultCodeMap",
    "description": "Returns a list of all Result Code Map objects",
    "parameters": [
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "SCIM filter"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      }
    ]
  },
  {
    "url": "/result-code-maps",
    "method": "addNewResultCodeMap",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "result-code-map",
    "typeScriptTag": "resultCodeMap",
    "description": "Add a new Result Code Map to the config",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "409",
        "description": "The Result Code Map already exists"
      }
    ]
  },
  {
    "url": "/result-code-maps/{result-code-map-name}",
    "method": "deleteResultCodeMap",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "result-code-map",
    "typeScriptTag": "resultCodeMap",
    "description": "Delete a Result Code Map",
    "parameters": [
      {
        "name": "resultCodeMapName",
        "schema": "string",
        "required": true,
        "description": "Name of the Result Code Map",
        "example": "RESULT-CODE-MAP-NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Successful operation"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Result Code Map does not exist"
      },
      {
        "statusCode": "409",
        "description": "The Result Code Map cannot be deleted"
      }
    ]
  },
  {
    "url": "/result-code-maps/{result-code-map-name}",
    "method": "getSingleMap",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "result-code-map",
    "typeScriptTag": "resultCodeMap",
    "description": "Returns a single Result Code Map",
    "parameters": [
      {
        "name": "resultCodeMapName",
        "schema": "string",
        "required": true,
        "description": "Name of the Result Code Map",
        "example": "RESULT-CODE-MAP-NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Result Code Map does not exist"
      }
    ]
  },
  {
    "url": "/result-code-maps/{result-code-map-name}",
    "method": "updateByName",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "result-code-map",
    "typeScriptTag": "resultCodeMap",
    "description": "Update an existing Result Code Map by name",
    "parameters": [
      {
        "name": "resultCodeMapName",
        "schema": "string",
        "required": true,
        "description": "Name of the Result Code Map",
        "example": "RESULT-CODE-MAP-NAME"
      },
      {
        "name": "operations",
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
        "description": "Invalid request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Result Code Map does not exist"
      }
    ]
  },
  {
    "url": "/synchronization-providers",
    "method": "listAllProviders",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "synchronization-provider",
    "typeScriptTag": "synchronizationProvider",
    "description": "Returns a list of all Synchronization Provider objects",
    "parameters": [
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "SCIM filter"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      }
    ]
  },
  {
    "url": "/synchronization-providers/{synchronization-provider-name}",
    "method": "getSingle",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "synchronization-provider",
    "typeScriptTag": "synchronizationProvider",
    "description": "Returns a single Synchronization Provider",
    "parameters": [
      {
        "name": "synchronizationProviderName",
        "schema": "string",
        "required": true,
        "description": "Name of the Synchronization Provider",
        "example": "SYNCHRONIZATION-PROVIDER-NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Synchronization Provider does not exist"
      }
    ]
  },
  {
    "url": "/synchronization-providers/{synchronization-provider-name}",
    "method": "updateByName",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "synchronization-provider",
    "typeScriptTag": "synchronizationProvider",
    "description": "Update an existing Synchronization Provider by name",
    "parameters": [
      {
        "name": "synchronizationProviderName",
        "schema": "string",
        "required": true,
        "description": "Name of the Synchronization Provider",
        "example": "SYNCHRONIZATION-PROVIDER-NAME"
      },
      {
        "name": "operations",
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
        "description": "Invalid request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Synchronization Provider does not exist"
      }
    ]
  },
  {
    "url": "/synchronization-providers/{synchronization-provider-name}/replication-server",
    "method": "getSingleReplicationServer",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "replication-server",
    "typeScriptTag": "replicationServer",
    "description": "Returns a single Replication Server",
    "parameters": [
      {
        "name": "synchronizationProviderName",
        "schema": "string",
        "required": true,
        "description": "Name of the Synchronization Provider",
        "example": "SYNCHRONIZATION-PROVIDER-NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Replication Server does not exist"
      }
    ]
  },
  {
    "url": "/synchronization-providers/{synchronization-provider-name}/replication-server",
    "method": "updateByName",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "replication-server",
    "typeScriptTag": "replicationServer",
    "description": "Update an existing Replication Server by name",
    "parameters": [
      {
        "name": "synchronizationProviderName",
        "schema": "string",
        "required": true,
        "description": "Name of the Synchronization Provider",
        "example": "SYNCHRONIZATION-PROVIDER-NAME"
      },
      {
        "name": "operations",
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
        "description": "Invalid request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Replication Server does not exist"
      }
    ]
  },
  {
    "url": "/synchronization-providers/{synchronization-provider-name}/replication-domains",
    "method": "listAllDomains",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "replication-domain",
    "typeScriptTag": "replicationDomain",
    "description": "Returns a list of all Replication Domain objects",
    "parameters": [
      {
        "name": "synchronizationProviderName",
        "schema": "string",
        "required": true,
        "description": "Name of the Synchronization Provider",
        "example": "SYNCHRONIZATION-PROVIDER-NAME"
      },
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "SCIM filter"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      }
    ]
  },
  {
    "url": "/synchronization-providers/{synchronization-provider-name}/replication-domains/{replication-domain-name}",
    "method": "getSingle",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "replication-domain",
    "typeScriptTag": "replicationDomain",
    "description": "Returns a single Replication Domain",
    "parameters": [
      {
        "name": "replicationDomainName",
        "schema": "string",
        "required": true,
        "description": "Name of the Replication Domain",
        "example": "REPLICATION-DOMAIN-NAME"
      },
      {
        "name": "synchronizationProviderName",
        "schema": "string",
        "required": true,
        "description": "Name of the Synchronization Provider",
        "example": "SYNCHRONIZATION-PROVIDER-NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Replication Domain does not exist"
      }
    ]
  },
  {
    "url": "/synchronization-providers/{synchronization-provider-name}/replication-domains/{replication-domain-name}",
    "method": "updateByName",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "replication-domain",
    "typeScriptTag": "replicationDomain",
    "description": "Update an existing Replication Domain by name",
    "parameters": [
      {
        "name": "replicationDomainName",
        "schema": "string",
        "required": true,
        "description": "Name of the Replication Domain",
        "example": "REPLICATION-DOMAIN-NAME"
      },
      {
        "name": "synchronizationProviderName",
        "schema": "string",
        "required": true,
        "description": "Name of the Synchronization Provider",
        "example": "SYNCHRONIZATION-PROVIDER-NAME"
      },
      {
        "name": "operations",
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
        "description": "Invalid request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Replication Domain does not exist"
      }
    ]
  },
  {
    "url": "/connection-criteria",
    "method": "listObjects",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "connection-criteria",
    "typeScriptTag": "connectionCriteria",
    "description": "Returns a list of all Connection Criteria objects",
    "parameters": [
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "SCIM filter"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      }
    ]
  },
  {
    "url": "/connection-criteria",
    "method": "addNewCriteriaToConfig",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "connection-criteria",
    "typeScriptTag": "connectionCriteria",
    "description": "Add a new Connection Criteria to the config",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "409",
        "description": "The Connection Criteria already exists"
      }
    ]
  },
  {
    "url": "/connection-criteria/{connection-criteria-name}",
    "method": "deleteCriteria",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "connection-criteria",
    "typeScriptTag": "connectionCriteria",
    "description": "Delete a Connection Criteria",
    "parameters": [
      {
        "name": "connectionCriteriaName",
        "schema": "string",
        "required": true,
        "description": "Name of the Connection Criteria",
        "example": "CONNECTION-CRITERIA-NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Successful operation"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Connection Criteria does not exist"
      },
      {
        "statusCode": "409",
        "description": "The Connection Criteria cannot be deleted"
      }
    ]
  },
  {
    "url": "/connection-criteria/{connection-criteria-name}",
    "method": "getSingleCriteria",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "connection-criteria",
    "typeScriptTag": "connectionCriteria",
    "description": "Returns a single Connection Criteria",
    "parameters": [
      {
        "name": "connectionCriteriaName",
        "schema": "string",
        "required": true,
        "description": "Name of the Connection Criteria",
        "example": "CONNECTION-CRITERIA-NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Connection Criteria does not exist"
      }
    ]
  },
  {
    "url": "/connection-criteria/{connection-criteria-name}",
    "method": "updateByName",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "connection-criteria",
    "typeScriptTag": "connectionCriteria",
    "description": "Update an existing Connection Criteria by name",
    "parameters": [
      {
        "name": "connectionCriteriaName",
        "schema": "string",
        "required": true,
        "description": "Name of the Connection Criteria",
        "example": "CONNECTION-CRITERIA-NAME"
      },
      {
        "name": "operations",
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
        "description": "Invalid request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Connection Criteria does not exist"
      }
    ]
  },
  {
    "url": "/root-dn",
    "method": "getSingle",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "root-dn",
    "typeScriptTag": "rootDn",
    "description": "Returns a single Root DN",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Root DN does not exist"
      }
    ]
  },
  {
    "url": "/root-dn",
    "method": "updateByName",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "root-dn",
    "typeScriptTag": "rootDn",
    "description": "Update an existing Root DN by name",
    "parameters": [
      {
        "name": "operations",
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
        "description": "Invalid request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Root DN does not exist"
      }
    ]
  },
  {
    "url": "/root-dn/root-dn-users",
    "method": "listAllUsers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "root-dn-user",
    "typeScriptTag": "rootDnUser",
    "description": "Returns a list of all Root DN User objects",
    "parameters": [
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "SCIM filter"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      }
    ]
  },
  {
    "url": "/root-dn/root-dn-users",
    "method": "addNewUserToConfig",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "root-dn-user",
    "typeScriptTag": "rootDnUser",
    "description": "Add a new Root DN User to the config",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "409",
        "description": "The Root DN User already exists"
      }
    ]
  },
  {
    "url": "/root-dn/root-dn-users/{root-dn-user-name}",
    "method": "deleteUser",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "root-dn-user",
    "typeScriptTag": "rootDnUser",
    "description": "Delete a Root DN User",
    "parameters": [
      {
        "name": "rootDnUserName",
        "schema": "string",
        "required": true,
        "description": "Name of the Root DN User",
        "example": "ROOT-DN-USER-NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Successful operation"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Root DN User does not exist"
      },
      {
        "statusCode": "409",
        "description": "The Root DN User cannot be deleted"
      }
    ]
  },
  {
    "url": "/root-dn/root-dn-users/{root-dn-user-name}",
    "method": "getSingleUser",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "root-dn-user",
    "typeScriptTag": "rootDnUser",
    "description": "Returns a single Root DN User",
    "parameters": [
      {
        "name": "rootDnUserName",
        "schema": "string",
        "required": true,
        "description": "Name of the Root DN User",
        "example": "ROOT-DN-USER-NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Root DN User does not exist"
      }
    ]
  },
  {
    "url": "/root-dn/root-dn-users/{root-dn-user-name}",
    "method": "updateByName",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "root-dn-user",
    "typeScriptTag": "rootDnUser",
    "description": "Update an existing Root DN User by name",
    "parameters": [
      {
        "name": "rootDnUserName",
        "schema": "string",
        "required": true,
        "description": "Name of the Root DN User",
        "example": "ROOT-DN-USER-NAME"
      },
      {
        "name": "operations",
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
        "description": "Invalid request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Root DN User does not exist"
      }
    ]
  },
  {
    "url": "/trust-manager-providers",
    "method": "listAllProviders",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "trust-manager-provider",
    "typeScriptTag": "trustManagerProvider",
    "description": "Returns a list of all Trust Manager Provider objects",
    "parameters": [
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "SCIM filter"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      }
    ]
  },
  {
    "url": "/trust-manager-providers",
    "method": "addNewProvider",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "trust-manager-provider",
    "typeScriptTag": "trustManagerProvider",
    "description": "Add a new Trust Manager Provider to the config",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "409",
        "description": "The Trust Manager Provider already exists"
      }
    ]
  },
  {
    "url": "/trust-manager-providers/{trust-manager-provider-name}",
    "method": "deleteProvider",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "trust-manager-provider",
    "typeScriptTag": "trustManagerProvider",
    "description": "Delete a Trust Manager Provider",
    "parameters": [
      {
        "name": "trustManagerProviderName",
        "schema": "string",
        "required": true,
        "description": "Name of the Trust Manager Provider",
        "example": "TRUST-MANAGER-PROVIDER-NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Successful operation"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Trust Manager Provider does not exist"
      },
      {
        "statusCode": "409",
        "description": "The Trust Manager Provider cannot be deleted"
      }
    ]
  },
  {
    "url": "/trust-manager-providers/{trust-manager-provider-name}",
    "method": "getSingle",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "trust-manager-provider",
    "typeScriptTag": "trustManagerProvider",
    "description": "Returns a single Trust Manager Provider",
    "parameters": [
      {
        "name": "trustManagerProviderName",
        "schema": "string",
        "required": true,
        "description": "Name of the Trust Manager Provider",
        "example": "TRUST-MANAGER-PROVIDER-NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Trust Manager Provider does not exist"
      }
    ]
  },
  {
    "url": "/trust-manager-providers/{trust-manager-provider-name}",
    "method": "updateByName",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "trust-manager-provider",
    "typeScriptTag": "trustManagerProvider",
    "description": "Update an existing Trust Manager Provider by name",
    "parameters": [
      {
        "name": "trustManagerProviderName",
        "schema": "string",
        "required": true,
        "description": "Name of the Trust Manager Provider",
        "example": "TRUST-MANAGER-PROVIDER-NAME"
      },
      {
        "name": "operations",
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
        "description": "Invalid request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Trust Manager Provider does not exist"
      }
    ]
  },
  {
    "url": "/key-pairs",
    "method": "listObjects",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "key-pair",
    "typeScriptTag": "keyPair",
    "description": "Returns a list of all Key Pair objects",
    "parameters": [
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "SCIM filter"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      }
    ]
  },
  {
    "url": "/key-pairs",
    "method": "createNewKeyPair",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "key-pair",
    "typeScriptTag": "keyPair",
    "description": "Add a new Key Pair to the config",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "409",
        "description": "The Key Pair already exists"
      }
    ]
  },
  {
    "url": "/key-pairs/{key-pair-name}",
    "method": "deleteKeyPair",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "key-pair",
    "typeScriptTag": "keyPair",
    "description": "Delete a Key Pair",
    "parameters": [
      {
        "name": "keyPairName",
        "schema": "string",
        "required": true,
        "description": "Name of the Key Pair",
        "example": "KEY-PAIR-NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Successful operation"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Key Pair does not exist"
      },
      {
        "statusCode": "409",
        "description": "The Key Pair cannot be deleted"
      }
    ]
  },
  {
    "url": "/key-pairs/{key-pair-name}",
    "method": "getSingleKeyPair",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "key-pair",
    "typeScriptTag": "keyPair",
    "description": "Returns a single Key Pair",
    "parameters": [
      {
        "name": "keyPairName",
        "schema": "string",
        "required": true,
        "description": "Name of the Key Pair",
        "example": "KEY-PAIR-NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Key Pair does not exist"
      }
    ]
  },
  {
    "url": "/key-pairs/{key-pair-name}",
    "method": "updateByName",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "key-pair",
    "typeScriptTag": "keyPair",
    "description": "Update an existing Key Pair by name",
    "parameters": [
      {
        "name": "keyPairName",
        "schema": "string",
        "required": true,
        "description": "Name of the Key Pair",
        "example": "KEY-PAIR-NAME"
      },
      {
        "name": "operations",
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
        "description": "Invalid request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Key Pair does not exist"
      }
    ]
  },
  {
    "url": "/request-criteria",
    "method": "listAllObjects",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "request-criteria",
    "typeScriptTag": "requestCriteria",
    "description": "Returns a list of all Request Criteria objects",
    "parameters": [
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "SCIM filter"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      }
    ]
  },
  {
    "url": "/request-criteria",
    "method": "addNewCriteriaToConfig",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "request-criteria",
    "typeScriptTag": "requestCriteria",
    "description": "Add a new Request Criteria to the config",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "409",
        "description": "The Request Criteria already exists"
      }
    ]
  },
  {
    "url": "/request-criteria/{request-criteria-name}",
    "method": "deleteCriteria",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "request-criteria",
    "typeScriptTag": "requestCriteria",
    "description": "Delete a Request Criteria",
    "parameters": [
      {
        "name": "requestCriteriaName",
        "schema": "string",
        "required": true,
        "description": "Name of the Request Criteria",
        "example": "REQUEST-CRITERIA-NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Successful operation"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Request Criteria does not exist"
      },
      {
        "statusCode": "409",
        "description": "The Request Criteria cannot be deleted"
      }
    ]
  },
  {
    "url": "/request-criteria/{request-criteria-name}",
    "method": "getSingle",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "request-criteria",
    "typeScriptTag": "requestCriteria",
    "description": "Returns a single Request Criteria",
    "parameters": [
      {
        "name": "requestCriteriaName",
        "schema": "string",
        "required": true,
        "description": "Name of the Request Criteria",
        "example": "REQUEST-CRITERIA-NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Request Criteria does not exist"
      }
    ]
  },
  {
    "url": "/request-criteria/{request-criteria-name}",
    "method": "updateByName",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "request-criteria",
    "typeScriptTag": "requestCriteria",
    "description": "Update an existing Request Criteria by name",
    "parameters": [
      {
        "name": "requestCriteriaName",
        "schema": "string",
        "required": true,
        "description": "Name of the Request Criteria",
        "example": "REQUEST-CRITERIA-NAME"
      },
      {
        "name": "operations",
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
        "description": "Invalid request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Request Criteria does not exist"
      }
    ]
  },
  {
    "url": "/log-rotation-policies",
    "method": "getAllLogRotationPolicies",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "log-rotation-policy",
    "typeScriptTag": "logRotationPolicy",
    "description": "Returns a list of all Log Rotation Policy objects",
    "parameters": [
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "SCIM filter"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      }
    ]
  },
  {
    "url": "/log-rotation-policies",
    "method": "addNewPolicy",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "log-rotation-policy",
    "typeScriptTag": "logRotationPolicy",
    "description": "Add a new Log Rotation Policy to the config",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "409",
        "description": "The Log Rotation Policy already exists"
      }
    ]
  },
  {
    "url": "/log-rotation-policies/{log-rotation-policy-name}",
    "method": "deletePolicy",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "log-rotation-policy",
    "typeScriptTag": "logRotationPolicy",
    "description": "Delete a Log Rotation Policy",
    "parameters": [
      {
        "name": "logRotationPolicyName",
        "schema": "string",
        "required": true,
        "description": "Name of the Log Rotation Policy",
        "example": "LOG-ROTATION-POLICY-NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Successful operation"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Log Rotation Policy does not exist"
      },
      {
        "statusCode": "409",
        "description": "The Log Rotation Policy cannot be deleted"
      }
    ]
  },
  {
    "url": "/log-rotation-policies/{log-rotation-policy-name}",
    "method": "getSingleLogRotationPolicy",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "log-rotation-policy",
    "typeScriptTag": "logRotationPolicy",
    "description": "Returns a single Log Rotation Policy",
    "parameters": [
      {
        "name": "logRotationPolicyName",
        "schema": "string",
        "required": true,
        "description": "Name of the Log Rotation Policy",
        "example": "LOG-ROTATION-POLICY-NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Log Rotation Policy does not exist"
      }
    ]
  },
  {
    "url": "/log-rotation-policies/{log-rotation-policy-name}",
    "method": "updateByName",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "log-rotation-policy",
    "typeScriptTag": "logRotationPolicy",
    "description": "Update an existing Log Rotation Policy by name",
    "parameters": [
      {
        "name": "logRotationPolicyName",
        "schema": "string",
        "required": true,
        "description": "Name of the Log Rotation Policy",
        "example": "LOG-ROTATION-POLICY-NAME"
      },
      {
        "name": "operations",
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
        "description": "Invalid request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Log Rotation Policy does not exist"
      }
    ]
  },
  {
    "url": "/log-field-syntaxes",
    "method": "getAllLogFieldSyntaxes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "log-field-syntax",
    "typeScriptTag": "logFieldSyntax",
    "description": "Returns a list of all Log Field Syntax objects",
    "parameters": [
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "SCIM filter"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      }
    ]
  },
  {
    "url": "/log-field-syntaxes/{log-field-syntax-name}",
    "method": "getSyntaxById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "log-field-syntax",
    "typeScriptTag": "logFieldSyntax",
    "description": "Returns a single Log Field Syntax",
    "parameters": [
      {
        "name": "logFieldSyntaxName",
        "schema": "string",
        "required": true,
        "description": "Name of the Log Field Syntax",
        "example": "LOG-FIELD-SYNTAX-NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Log Field Syntax does not exist"
      }
    ]
  },
  {
    "url": "/log-field-syntaxes/{log-field-syntax-name}",
    "method": "updateByName",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "log-field-syntax",
    "typeScriptTag": "logFieldSyntax",
    "description": "Update an existing Log Field Syntax by name",
    "parameters": [
      {
        "name": "logFieldSyntaxName",
        "schema": "string",
        "required": true,
        "description": "Name of the Log Field Syntax",
        "example": "LOG-FIELD-SYNTAX-NAME"
      },
      {
        "name": "operations",
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
        "description": "Invalid request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Log Field Syntax does not exist"
      }
    ]
  },
  {
    "url": "/scim-resource-types",
    "method": "listAllObjects",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "scim-resource-type",
    "typeScriptTag": "scimResourceType",
    "description": "Returns a list of all SCIM Resource Type objects",
    "parameters": [
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "SCIM filter"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      }
    ]
  },
  {
    "url": "/scim-resource-types",
    "method": "addNewConfig",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "scim-resource-type",
    "typeScriptTag": "scimResourceType",
    "description": "Add a new SCIM Resource Type to the config",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "409",
        "description": "The SCIM Resource Type already exists"
      }
    ]
  },
  {
    "url": "/scim-resource-types/{scim-resource-type-name}",
    "method": "deleteResourceType",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "scim-resource-type",
    "typeScriptTag": "scimResourceType",
    "description": "Delete a SCIM Resource Type",
    "parameters": [
      {
        "name": "scimResourceTypeName",
        "schema": "string",
        "required": true,
        "description": "Name of the SCIM Resource Type",
        "example": "SCIM-RESOURCE-TYPE-NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Successful operation"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The SCIM Resource Type does not exist"
      },
      {
        "statusCode": "409",
        "description": "The SCIM Resource Type cannot be deleted"
      }
    ]
  },
  {
    "url": "/scim-resource-types/{scim-resource-type-name}",
    "method": "getSingle",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "scim-resource-type",
    "typeScriptTag": "scimResourceType",
    "description": "Returns a single SCIM Resource Type",
    "parameters": [
      {
        "name": "scimResourceTypeName",
        "schema": "string",
        "required": true,
        "description": "Name of the SCIM Resource Type",
        "example": "SCIM-RESOURCE-TYPE-NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The SCIM Resource Type does not exist"
      }
    ]
  },
  {
    "url": "/scim-resource-types/{scim-resource-type-name}",
    "method": "updateByName",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "scim-resource-type",
    "typeScriptTag": "scimResourceType",
    "description": "Update an existing SCIM Resource Type by name",
    "parameters": [
      {
        "name": "scimResourceTypeName",
        "schema": "string",
        "required": true,
        "description": "Name of the SCIM Resource Type",
        "example": "SCIM-RESOURCE-TYPE-NAME"
      },
      {
        "name": "operations",
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
        "description": "Invalid request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The SCIM Resource Type does not exist"
      }
    ]
  },
  {
    "url": "/scim-resource-types/{scim-resource-type-name}/correlated-ldap-data-views",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "correlated-ldap-data-view",
    "typeScriptTag": "correlatedLdapDataView",
    "description": "Returns a list of all Correlated LDAP Data View objects",
    "parameters": [
      {
        "name": "scimResourceTypeName",
        "schema": "string",
        "required": true,
        "description": "Name of the SCIM Resource Type",
        "example": "SCIM-RESOURCE-TYPE-NAME"
      },
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "SCIM filter"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      }
    ]
  },
  {
    "url": "/scim-resource-types/{scim-resource-type-name}/correlated-ldap-data-views",
    "method": "addNewConfig",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "correlated-ldap-data-view",
    "typeScriptTag": "correlatedLdapDataView",
    "description": "Add a new Correlated LDAP Data View to the config",
    "parameters": [
      {
        "name": "scimResourceTypeName",
        "schema": "string",
        "required": true,
        "description": "Name of the SCIM Resource Type",
        "example": "SCIM-RESOURCE-TYPE-NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "409",
        "description": "The Correlated LDAP Data View already exists"
      }
    ]
  },
  {
    "url": "/scim-resource-types/{scim-resource-type-name}/correlated-ldap-data-views/{correlated-ldap-data-view-name}",
    "method": "deleteCorrelatedLdapDataView",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "correlated-ldap-data-view",
    "typeScriptTag": "correlatedLdapDataView",
    "description": "Delete a Correlated LDAP Data View",
    "parameters": [
      {
        "name": "correlatedLdapDataViewName",
        "schema": "string",
        "required": true,
        "description": "Name of the Correlated LDAP Data View",
        "example": "CORRELATED-LDAP-DATA-VIEW-NAME"
      },
      {
        "name": "scimResourceTypeName",
        "schema": "string",
        "required": true,
        "description": "Name of the SCIM Resource Type",
        "example": "SCIM-RESOURCE-TYPE-NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Successful operation"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Correlated LDAP Data View does not exist"
      },
      {
        "statusCode": "409",
        "description": "The Correlated LDAP Data View cannot be deleted"
      }
    ]
  },
  {
    "url": "/scim-resource-types/{scim-resource-type-name}/correlated-ldap-data-views/{correlated-ldap-data-view-name}",
    "method": "getSingle",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "correlated-ldap-data-view",
    "typeScriptTag": "correlatedLdapDataView",
    "description": "Returns a single Correlated LDAP Data View",
    "parameters": [
      {
        "name": "correlatedLdapDataViewName",
        "schema": "string",
        "required": true,
        "description": "Name of the Correlated LDAP Data View",
        "example": "CORRELATED-LDAP-DATA-VIEW-NAME"
      },
      {
        "name": "scimResourceTypeName",
        "schema": "string",
        "required": true,
        "description": "Name of the SCIM Resource Type",
        "example": "SCIM-RESOURCE-TYPE-NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Correlated LDAP Data View does not exist"
      }
    ]
  },
  {
    "url": "/scim-resource-types/{scim-resource-type-name}/correlated-ldap-data-views/{correlated-ldap-data-view-name}",
    "method": "updateByName",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "correlated-ldap-data-view",
    "typeScriptTag": "correlatedLdapDataView",
    "description": "Update an existing Correlated LDAP Data View by name",
    "parameters": [
      {
        "name": "correlatedLdapDataViewName",
        "schema": "string",
        "required": true,
        "description": "Name of the Correlated LDAP Data View",
        "example": "CORRELATED-LDAP-DATA-VIEW-NAME"
      },
      {
        "name": "scimResourceTypeName",
        "schema": "string",
        "required": true,
        "description": "Name of the SCIM Resource Type",
        "example": "SCIM-RESOURCE-TYPE-NAME"
      },
      {
        "name": "operations",
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
        "description": "Invalid request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Correlated LDAP Data View does not exist"
      }
    ]
  },
  {
    "url": "/scim-resource-types/{scim-resource-type-name}/scim-attribute-mappings",
    "method": "getAllMappings",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "scim-attribute-mapping",
    "typeScriptTag": "scimAttributeMapping",
    "description": "Returns a list of all SCIM Attribute Mapping objects",
    "parameters": [
      {
        "name": "scimResourceTypeName",
        "schema": "string",
        "required": true,
        "description": "Name of the SCIM Resource Type",
        "example": "SCIM-RESOURCE-TYPE-NAME"
      },
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "SCIM filter"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      }
    ]
  },
  {
    "url": "/scim-resource-types/{scim-resource-type-name}/scim-attribute-mappings",
    "method": "addNewMapping",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "scim-attribute-mapping",
    "typeScriptTag": "scimAttributeMapping",
    "description": "Add a new SCIM Attribute Mapping to the config",
    "parameters": [
      {
        "name": "scimResourceTypeName",
        "schema": "string",
        "required": true,
        "description": "Name of the SCIM Resource Type",
        "example": "SCIM-RESOURCE-TYPE-NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "409",
        "description": "The SCIM Attribute Mapping already exists"
      }
    ]
  },
  {
    "url": "/scim-resource-types/{scim-resource-type-name}/scim-attribute-mappings/{scim-attribute-mapping-name}",
    "method": "deleteMapping",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "scim-attribute-mapping",
    "typeScriptTag": "scimAttributeMapping",
    "description": "Delete a SCIM Attribute Mapping",
    "parameters": [
      {
        "name": "scimAttributeMappingName",
        "schema": "string",
        "required": true,
        "description": "Name of the SCIM Attribute Mapping",
        "example": "SCIM-ATTRIBUTE-MAPPING-NAME"
      },
      {
        "name": "scimResourceTypeName",
        "schema": "string",
        "required": true,
        "description": "Name of the SCIM Resource Type",
        "example": "SCIM-RESOURCE-TYPE-NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Successful operation"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The SCIM Attribute Mapping does not exist"
      },
      {
        "statusCode": "409",
        "description": "The SCIM Attribute Mapping cannot be deleted"
      }
    ]
  },
  {
    "url": "/scim-resource-types/{scim-resource-type-name}/scim-attribute-mappings/{scim-attribute-mapping-name}",
    "method": "getSingleScimAttributeMapping",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "scim-attribute-mapping",
    "typeScriptTag": "scimAttributeMapping",
    "description": "Returns a single SCIM Attribute Mapping",
    "parameters": [
      {
        "name": "scimAttributeMappingName",
        "schema": "string",
        "required": true,
        "description": "Name of the SCIM Attribute Mapping",
        "example": "SCIM-ATTRIBUTE-MAPPING-NAME"
      },
      {
        "name": "scimResourceTypeName",
        "schema": "string",
        "required": true,
        "description": "Name of the SCIM Resource Type",
        "example": "SCIM-RESOURCE-TYPE-NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The SCIM Attribute Mapping does not exist"
      }
    ]
  },
  {
    "url": "/scim-resource-types/{scim-resource-type-name}/scim-attribute-mappings/{scim-attribute-mapping-name}",
    "method": "updateByName",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "scim-attribute-mapping",
    "typeScriptTag": "scimAttributeMapping",
    "description": "Update an existing SCIM Attribute Mapping by name",
    "parameters": [
      {
        "name": "scimAttributeMappingName",
        "schema": "string",
        "required": true,
        "description": "Name of the SCIM Attribute Mapping",
        "example": "SCIM-ATTRIBUTE-MAPPING-NAME"
      },
      {
        "name": "scimResourceTypeName",
        "schema": "string",
        "required": true,
        "description": "Name of the SCIM Resource Type",
        "example": "SCIM-RESOURCE-TYPE-NAME"
      },
      {
        "name": "operations",
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
        "description": "Invalid request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The SCIM Attribute Mapping does not exist"
      }
    ]
  },
  {
    "url": "/scim-resource-types/{scim-resource-type-name}/correlated-ldap-data-views/{correlated-ldap-data-view-name}/ldap-correlation-attribute-pairs",
    "method": "listCorrelationAttributePairs",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "ldap-correlation-attribute-pair",
    "typeScriptTag": "ldapCorrelationAttributePair",
    "description": "Returns a list of all LDAP Correlation Attribute Pair objects",
    "parameters": [
      {
        "name": "correlatedLdapDataViewName",
        "schema": "string",
        "required": true,
        "description": "Name of the Correlated LDAP Data View",
        "example": "CORRELATED-LDAP-DATA-VIEW-NAME"
      },
      {
        "name": "scimResourceTypeName",
        "schema": "string",
        "required": true,
        "description": "Name of the SCIM Resource Type",
        "example": "SCIM-RESOURCE-TYPE-NAME"
      },
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "SCIM filter"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      }
    ]
  },
  {
    "url": "/scim-resource-types/{scim-resource-type-name}/correlated-ldap-data-views/{correlated-ldap-data-view-name}/ldap-correlation-attribute-pairs",
    "method": "addNewPairToConfig",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "ldap-correlation-attribute-pair",
    "typeScriptTag": "ldapCorrelationAttributePair",
    "description": "Add a new LDAP Correlation Attribute Pair to the config",
    "parameters": [
      {
        "name": "correlatedLdapDataViewName",
        "schema": "string",
        "required": true,
        "description": "Name of the Correlated LDAP Data View",
        "example": "CORRELATED-LDAP-DATA-VIEW-NAME"
      },
      {
        "name": "scimResourceTypeName",
        "schema": "string",
        "required": true,
        "description": "Name of the SCIM Resource Type",
        "example": "SCIM-RESOURCE-TYPE-NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "409",
        "description": "The LDAP Correlation Attribute Pair already exists"
      }
    ]
  },
  {
    "url": "/scim-resource-types/{scim-resource-type-name}/correlated-ldap-data-views/{correlated-ldap-data-view-name}/ldap-correlation-attribute-pairs/{ldap-correlation-attribute-pair-name}",
    "method": "delete",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "ldap-correlation-attribute-pair",
    "typeScriptTag": "ldapCorrelationAttributePair",
    "description": "Delete a LDAP Correlation Attribute Pair",
    "parameters": [
      {
        "name": "ldapCorrelationAttributePairName",
        "schema": "string",
        "required": true,
        "description": "Name of the LDAP Correlation Attribute Pair",
        "example": "LDAP-CORRELATION-ATTRIBUTE-PAIR-NAME"
      },
      {
        "name": "correlatedLdapDataViewName",
        "schema": "string",
        "required": true,
        "description": "Name of the Correlated LDAP Data View",
        "example": "CORRELATED-LDAP-DATA-VIEW-NAME"
      },
      {
        "name": "scimResourceTypeName",
        "schema": "string",
        "required": true,
        "description": "Name of the SCIM Resource Type",
        "example": "SCIM-RESOURCE-TYPE-NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Successful operation"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The LDAP Correlation Attribute Pair does not exist"
      },
      {
        "statusCode": "409",
        "description": "The LDAP Correlation Attribute Pair cannot be deleted"
      }
    ]
  },
  {
    "url": "/scim-resource-types/{scim-resource-type-name}/correlated-ldap-data-views/{correlated-ldap-data-view-name}/ldap-correlation-attribute-pairs/{ldap-correlation-attribute-pair-name}",
    "method": "getSingle",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "ldap-correlation-attribute-pair",
    "typeScriptTag": "ldapCorrelationAttributePair",
    "description": "Returns a single LDAP Correlation Attribute Pair",
    "parameters": [
      {
        "name": "ldapCorrelationAttributePairName",
        "schema": "string",
        "required": true,
        "description": "Name of the LDAP Correlation Attribute Pair",
        "example": "LDAP-CORRELATION-ATTRIBUTE-PAIR-NAME"
      },
      {
        "name": "correlatedLdapDataViewName",
        "schema": "string",
        "required": true,
        "description": "Name of the Correlated LDAP Data View",
        "example": "CORRELATED-LDAP-DATA-VIEW-NAME"
      },
      {
        "name": "scimResourceTypeName",
        "schema": "string",
        "required": true,
        "description": "Name of the SCIM Resource Type",
        "example": "SCIM-RESOURCE-TYPE-NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The LDAP Correlation Attribute Pair does not exist"
      }
    ]
  },
  {
    "url": "/scim-resource-types/{scim-resource-type-name}/correlated-ldap-data-views/{correlated-ldap-data-view-name}/ldap-correlation-attribute-pairs/{ldap-correlation-attribute-pair-name}",
    "method": "updateByName",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "ldap-correlation-attribute-pair",
    "typeScriptTag": "ldapCorrelationAttributePair",
    "description": "Update an existing LDAP Correlation Attribute Pair by name",
    "parameters": [
      {
        "name": "ldapCorrelationAttributePairName",
        "schema": "string",
        "required": true,
        "description": "Name of the LDAP Correlation Attribute Pair",
        "example": "LDAP-CORRELATION-ATTRIBUTE-PAIR-NAME"
      },
      {
        "name": "correlatedLdapDataViewName",
        "schema": "string",
        "required": true,
        "description": "Name of the Correlated LDAP Data View",
        "example": "CORRELATED-LDAP-DATA-VIEW-NAME"
      },
      {
        "name": "scimResourceTypeName",
        "schema": "string",
        "required": true,
        "description": "Name of the SCIM Resource Type",
        "example": "SCIM-RESOURCE-TYPE-NAME"
      },
      {
        "name": "operations",
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
        "description": "Invalid request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The LDAP Correlation Attribute Pair does not exist"
      }
    ]
  },
  {
    "url": "/extended-operation-handlers",
    "method": "listAllObjects",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "extended-operation-handler",
    "typeScriptTag": "extendedOperationHandler",
    "description": "Returns a list of all Extended Operation Handler objects",
    "parameters": [
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "SCIM filter"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      }
    ]
  },
  {
    "url": "/extended-operation-handlers",
    "method": "addNewHandler",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "extended-operation-handler",
    "typeScriptTag": "extendedOperationHandler",
    "description": "Add a new Extended Operation Handler to the config",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "409",
        "description": "The Extended Operation Handler already exists"
      }
    ]
  },
  {
    "url": "/extended-operation-handlers/{extended-operation-handler-name}",
    "method": "deleteHandler",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "extended-operation-handler",
    "typeScriptTag": "extendedOperationHandler",
    "description": "Delete a Extended Operation Handler",
    "parameters": [
      {
        "name": "extendedOperationHandlerName",
        "schema": "string",
        "required": true,
        "description": "Name of the Extended Operation Handler",
        "example": "EXTENDED-OPERATION-HANDLER-NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Successful operation"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Extended Operation Handler does not exist"
      },
      {
        "statusCode": "409",
        "description": "The Extended Operation Handler cannot be deleted"
      }
    ]
  },
  {
    "url": "/extended-operation-handlers/{extended-operation-handler-name}",
    "method": "getHandlerById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "extended-operation-handler",
    "typeScriptTag": "extendedOperationHandler",
    "description": "Returns a single Extended Operation Handler",
    "parameters": [
      {
        "name": "extendedOperationHandlerName",
        "schema": "string",
        "required": true,
        "description": "Name of the Extended Operation Handler",
        "example": "EXTENDED-OPERATION-HANDLER-NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Extended Operation Handler does not exist"
      }
    ]
  },
  {
    "url": "/extended-operation-handlers/{extended-operation-handler-name}",
    "method": "updateByName",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "extended-operation-handler",
    "typeScriptTag": "extendedOperationHandler",
    "description": "Update an existing Extended Operation Handler by name",
    "parameters": [
      {
        "name": "extendedOperationHandlerName",
        "schema": "string",
        "required": true,
        "description": "Name of the Extended Operation Handler",
        "example": "EXTENDED-OPERATION-HANDLER-NAME"
      },
      {
        "name": "operations",
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
        "description": "Invalid request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Extended Operation Handler does not exist"
      }
    ]
  },
  {
    "url": "/azure-authentication-methods",
    "method": "getAllObjects",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "azure-authentication-method",
    "typeScriptTag": "azureAuthenticationMethod",
    "description": "Returns a list of all Azure Authentication Method objects",
    "parameters": [
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "SCIM filter"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      }
    ]
  },
  {
    "url": "/azure-authentication-methods",
    "method": "addNewConfig",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "azure-authentication-method",
    "typeScriptTag": "azureAuthenticationMethod",
    "description": "Add a new Azure Authentication Method to the config",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "409",
        "description": "The Azure Authentication Method already exists"
      }
    ]
  },
  {
    "url": "/azure-authentication-methods/{azure-authentication-method-name}",
    "method": "deleteAzureAuthenticationMethod",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "azure-authentication-method",
    "typeScriptTag": "azureAuthenticationMethod",
    "description": "Delete a Azure Authentication Method",
    "parameters": [
      {
        "name": "azureAuthenticationMethodName",
        "schema": "string",
        "required": true,
        "description": "Name of the Azure Authentication Method",
        "example": "AZURE-AUTHENTICATION-METHOD-NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Successful operation"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Azure Authentication Method does not exist"
      },
      {
        "statusCode": "409",
        "description": "The Azure Authentication Method cannot be deleted"
      }
    ]
  },
  {
    "url": "/azure-authentication-methods/{azure-authentication-method-name}",
    "method": "getSingleMethod",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "azure-authentication-method",
    "typeScriptTag": "azureAuthenticationMethod",
    "description": "Returns a single Azure Authentication Method",
    "parameters": [
      {
        "name": "azureAuthenticationMethodName",
        "schema": "string",
        "required": true,
        "description": "Name of the Azure Authentication Method",
        "example": "AZURE-AUTHENTICATION-METHOD-NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Azure Authentication Method does not exist"
      }
    ]
  },
  {
    "url": "/azure-authentication-methods/{azure-authentication-method-name}",
    "method": "updateByName",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "azure-authentication-method",
    "typeScriptTag": "azureAuthenticationMethod",
    "description": "Update an existing Azure Authentication Method by name",
    "parameters": [
      {
        "name": "azureAuthenticationMethodName",
        "schema": "string",
        "required": true,
        "description": "Name of the Azure Authentication Method",
        "example": "AZURE-AUTHENTICATION-METHOD-NAME"
      },
      {
        "name": "operations",
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
        "description": "Invalid request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Azure Authentication Method does not exist"
      }
    ]
  },
  {
    "url": "/passphrase-providers",
    "method": "listAllProviders",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "passphrase-provider",
    "typeScriptTag": "passphraseProvider",
    "description": "Returns a list of all Passphrase Provider objects",
    "parameters": [
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "SCIM filter"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      }
    ]
  },
  {
    "url": "/passphrase-providers",
    "method": "addNewProvider",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "passphrase-provider",
    "typeScriptTag": "passphraseProvider",
    "description": "Add a new Passphrase Provider to the config",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "409",
        "description": "The Passphrase Provider already exists"
      }
    ]
  },
  {
    "url": "/passphrase-providers/{passphrase-provider-name}",
    "method": "deleteProvider",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "passphrase-provider",
    "typeScriptTag": "passphraseProvider",
    "description": "Delete a Passphrase Provider",
    "parameters": [
      {
        "name": "passphraseProviderName",
        "schema": "string",
        "required": true,
        "description": "Name of the Passphrase Provider",
        "example": "PASSPHRASE-PROVIDER-NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Successful operation"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Passphrase Provider does not exist"
      },
      {
        "statusCode": "409",
        "description": "The Passphrase Provider cannot be deleted"
      }
    ]
  },
  {
    "url": "/passphrase-providers/{passphrase-provider-name}",
    "method": "getSingle",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "passphrase-provider",
    "typeScriptTag": "passphraseProvider",
    "description": "Returns a single Passphrase Provider",
    "parameters": [
      {
        "name": "passphraseProviderName",
        "schema": "string",
        "required": true,
        "description": "Name of the Passphrase Provider",
        "example": "PASSPHRASE-PROVIDER-NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Passphrase Provider does not exist"
      }
    ]
  },
  {
    "url": "/passphrase-providers/{passphrase-provider-name}",
    "method": "updateByName",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "passphrase-provider",
    "typeScriptTag": "passphraseProvider",
    "description": "Update an existing Passphrase Provider by name",
    "parameters": [
      {
        "name": "passphraseProviderName",
        "schema": "string",
        "required": true,
        "description": "Name of the Passphrase Provider",
        "example": "PASSPHRASE-PROVIDER-NAME"
      },
      {
        "name": "operations",
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
        "description": "Invalid request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Passphrase Provider does not exist"
      }
    ]
  },
  {
    "url": "/soft-delete-policies",
    "method": "listAllObjects",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "soft-delete-policy",
    "typeScriptTag": "softDeletePolicy",
    "description": "Returns a list of all Soft Delete Policy objects",
    "parameters": [
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "SCIM filter"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      }
    ]
  },
  {
    "url": "/soft-delete-policies",
    "method": "addNewPolicy",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "soft-delete-policy",
    "typeScriptTag": "softDeletePolicy",
    "description": "Add a new Soft Delete Policy to the config",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "409",
        "description": "The Soft Delete Policy already exists"
      }
    ]
  },
  {
    "url": "/soft-delete-policies/{soft-delete-policy-name}",
    "method": "deletePolicy",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "soft-delete-policy",
    "typeScriptTag": "softDeletePolicy",
    "description": "Delete a Soft Delete Policy",
    "parameters": [
      {
        "name": "softDeletePolicyName",
        "schema": "string",
        "required": true,
        "description": "Name of the Soft Delete Policy",
        "example": "SOFT-DELETE-POLICY-NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Successful operation"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Soft Delete Policy does not exist"
      },
      {
        "statusCode": "409",
        "description": "The Soft Delete Policy cannot be deleted"
      }
    ]
  },
  {
    "url": "/soft-delete-policies/{soft-delete-policy-name}",
    "method": "getSingleSoftDeletePolicy",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "soft-delete-policy",
    "typeScriptTag": "softDeletePolicy",
    "description": "Returns a single Soft Delete Policy",
    "parameters": [
      {
        "name": "softDeletePolicyName",
        "schema": "string",
        "required": true,
        "description": "Name of the Soft Delete Policy",
        "example": "SOFT-DELETE-POLICY-NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Soft Delete Policy does not exist"
      }
    ]
  },
  {
    "url": "/soft-delete-policies/{soft-delete-policy-name}",
    "method": "updateByName",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "soft-delete-policy",
    "typeScriptTag": "softDeletePolicy",
    "description": "Update an existing Soft Delete Policy by name",
    "parameters": [
      {
        "name": "softDeletePolicyName",
        "schema": "string",
        "required": true,
        "description": "Name of the Soft Delete Policy",
        "example": "SOFT-DELETE-POLICY-NAME"
      },
      {
        "name": "operations",
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
        "description": "Invalid request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Soft Delete Policy does not exist"
      }
    ]
  },
  {
    "url": "/recurring-task-chains",
    "method": "listAllObjects",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "recurring-task-chain",
    "typeScriptTag": "recurringTaskChain",
    "description": "Returns a list of all Recurring Task Chain objects",
    "parameters": [
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "SCIM filter"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      }
    ]
  },
  {
    "url": "/recurring-task-chains",
    "method": "addNewToConfig",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "recurring-task-chain",
    "typeScriptTag": "recurringTaskChain",
    "description": "Add a new Recurring Task Chain to the config",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "409",
        "description": "The Recurring Task Chain already exists"
      }
    ]
  },
  {
    "url": "/recurring-task-chains/{recurring-task-chain-name}",
    "method": "deleteChain",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "recurring-task-chain",
    "typeScriptTag": "recurringTaskChain",
    "description": "Delete a Recurring Task Chain",
    "parameters": [
      {
        "name": "recurringTaskChainName",
        "schema": "string",
        "required": true,
        "description": "Name of the Recurring Task Chain",
        "example": "RECURRING-TASK-CHAIN-NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Successful operation"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Recurring Task Chain does not exist"
      },
      {
        "statusCode": "409",
        "description": "The Recurring Task Chain cannot be deleted"
      }
    ]
  },
  {
    "url": "/recurring-task-chains/{recurring-task-chain-name}",
    "method": "getSingle",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "recurring-task-chain",
    "typeScriptTag": "recurringTaskChain",
    "description": "Returns a single Recurring Task Chain",
    "parameters": [
      {
        "name": "recurringTaskChainName",
        "schema": "string",
        "required": true,
        "description": "Name of the Recurring Task Chain",
        "example": "RECURRING-TASK-CHAIN-NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Recurring Task Chain does not exist"
      }
    ]
  },
  {
    "url": "/recurring-task-chains/{recurring-task-chain-name}",
    "method": "updateByRecurringTaskChainName",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "recurring-task-chain",
    "typeScriptTag": "recurringTaskChain",
    "description": "Update an existing Recurring Task Chain by name",
    "parameters": [
      {
        "name": "recurringTaskChainName",
        "schema": "string",
        "required": true,
        "description": "Name of the Recurring Task Chain",
        "example": "RECURRING-TASK-CHAIN-NAME"
      },
      {
        "name": "operations",
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
        "description": "Invalid request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Recurring Task Chain does not exist"
      }
    ]
  },
  {
    "url": "/post-ldif-export-task-processors",
    "method": "listAllObjects",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "post-ldif-export-task-processor",
    "typeScriptTag": "postLdifExportTaskProcessor",
    "description": "Returns a list of all Post LDIF Export Task Processor objects",
    "parameters": [
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "SCIM filter"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      }
    ]
  },
  {
    "url": "/post-ldif-export-task-processors",
    "method": "addNewToConfig",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "post-ldif-export-task-processor",
    "typeScriptTag": "postLdifExportTaskProcessor",
    "description": "Add a new Post LDIF Export Task Processor to the config",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "409",
        "description": "The Post LDIF Export Task Processor already exists"
      }
    ]
  },
  {
    "url": "/post-ldif-export-task-processors/{post-ldif-export-task-processor-name}",
    "method": "deleteTaskProcessor",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "post-ldif-export-task-processor",
    "typeScriptTag": "postLdifExportTaskProcessor",
    "description": "Delete a Post LDIF Export Task Processor",
    "parameters": [
      {
        "name": "postLdifExportTaskProcessorName",
        "schema": "string",
        "required": true,
        "description": "Name of the Post LDIF Export Task Processor",
        "example": "POST-LDIF-EXPORT-TASK-PROCESSOR-NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Successful operation"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Post LDIF Export Task Processor does not exist"
      },
      {
        "statusCode": "409",
        "description": "The Post LDIF Export Task Processor cannot be deleted"
      }
    ]
  },
  {
    "url": "/post-ldif-export-task-processors/{post-ldif-export-task-processor-name}",
    "method": "getSingle",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "post-ldif-export-task-processor",
    "typeScriptTag": "postLdifExportTaskProcessor",
    "description": "Returns a single Post LDIF Export Task Processor",
    "parameters": [
      {
        "name": "postLdifExportTaskProcessorName",
        "schema": "string",
        "required": true,
        "description": "Name of the Post LDIF Export Task Processor",
        "example": "POST-LDIF-EXPORT-TASK-PROCESSOR-NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Post LDIF Export Task Processor does not exist"
      }
    ]
  },
  {
    "url": "/post-ldif-export-task-processors/{post-ldif-export-task-processor-name}",
    "method": "updateByName",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "post-ldif-export-task-processor",
    "typeScriptTag": "postLdifExportTaskProcessor",
    "description": "Update an existing Post LDIF Export Task Processor by name",
    "parameters": [
      {
        "name": "postLdifExportTaskProcessorName",
        "schema": "string",
        "required": true,
        "description": "Name of the Post LDIF Export Task Processor",
        "example": "POST-LDIF-EXPORT-TASK-PROCESSOR-NAME"
      },
      {
        "name": "operations",
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
        "description": "Invalid request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Post LDIF Export Task Processor does not exist"
      }
    ]
  },
  {
    "url": "/gauges",
    "method": "listObjects",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "gauge",
    "typeScriptTag": "gauge",
    "description": "Returns a list of all Gauge objects",
    "parameters": [
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "SCIM filter"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      }
    ]
  },
  {
    "url": "/gauges",
    "method": "createNew",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "gauge",
    "typeScriptTag": "gauge",
    "description": "Add a new Gauge to the config",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "409",
        "description": "The Gauge already exists"
      }
    ]
  },
  {
    "url": "/gauges/{gauge-name}",
    "method": "deleteGauge",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "gauge",
    "typeScriptTag": "gauge",
    "description": "Delete a Gauge",
    "parameters": [
      {
        "name": "gaugeName",
        "schema": "string",
        "required": true,
        "description": "Name of the Gauge",
        "example": "GAUGE-NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Successful operation"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Gauge does not exist"
      },
      {
        "statusCode": "409",
        "description": "The Gauge cannot be deleted"
      }
    ]
  },
  {
    "url": "/gauges/{gauge-name}",
    "method": "getSingle",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "gauge",
    "typeScriptTag": "gauge",
    "description": "Returns a single Gauge",
    "parameters": [
      {
        "name": "gaugeName",
        "schema": "string",
        "required": true,
        "description": "Name of the Gauge",
        "example": "GAUGE-NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Gauge does not exist"
      }
    ]
  },
  {
    "url": "/gauges/{gauge-name}",
    "method": "updateByName",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "gauge",
    "typeScriptTag": "gauge",
    "description": "Update an existing Gauge by name",
    "parameters": [
      {
        "name": "gaugeName",
        "schema": "string",
        "required": true,
        "description": "Name of the Gauge",
        "example": "GAUGE-NAME"
      },
      {
        "name": "operations",
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
        "description": "Invalid request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Gauge does not exist"
      }
    ]
  },
  {
    "url": "/search-reference-criteria",
    "method": "listAllObjects",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "search-reference-criteria",
    "typeScriptTag": "searchReferenceCriteria",
    "description": "Returns a list of all Search Reference Criteria objects",
    "parameters": [
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "SCIM filter"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      }
    ]
  },
  {
    "url": "/search-reference-criteria",
    "method": "addNewReferenceCriteria",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "search-reference-criteria",
    "typeScriptTag": "searchReferenceCriteria",
    "description": "Add a new Search Reference Criteria to the config",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "409",
        "description": "The Search Reference Criteria already exists"
      }
    ]
  },
  {
    "url": "/search-reference-criteria/{search-reference-criteria-name}",
    "method": "deleteCriteriaById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "search-reference-criteria",
    "typeScriptTag": "searchReferenceCriteria",
    "description": "Delete a Search Reference Criteria",
    "parameters": [
      {
        "name": "searchReferenceCriteriaName",
        "schema": "string",
        "required": true,
        "description": "Name of the Search Reference Criteria",
        "example": "SEARCH-REFERENCE-CRITERIA-NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Successful operation"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Search Reference Criteria does not exist"
      },
      {
        "statusCode": "409",
        "description": "The Search Reference Criteria cannot be deleted"
      }
    ]
  },
  {
    "url": "/search-reference-criteria/{search-reference-criteria-name}",
    "method": "getSingle",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "search-reference-criteria",
    "typeScriptTag": "searchReferenceCriteria",
    "description": "Returns a single Search Reference Criteria",
    "parameters": [
      {
        "name": "searchReferenceCriteriaName",
        "schema": "string",
        "required": true,
        "description": "Name of the Search Reference Criteria",
        "example": "SEARCH-REFERENCE-CRITERIA-NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Search Reference Criteria does not exist"
      }
    ]
  },
  {
    "url": "/search-reference-criteria/{search-reference-criteria-name}",
    "method": "updateByName",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "search-reference-criteria",
    "typeScriptTag": "searchReferenceCriteria",
    "description": "Update an existing Search Reference Criteria by name",
    "parameters": [
      {
        "name": "searchReferenceCriteriaName",
        "schema": "string",
        "required": true,
        "description": "Name of the Search Reference Criteria",
        "example": "SEARCH-REFERENCE-CRITERIA-NAME"
      },
      {
        "name": "operations",
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
        "description": "Invalid request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Search Reference Criteria does not exist"
      }
    ]
  },
  {
    "url": "/entry-caches",
    "method": "getAllObjects",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "entry-cache",
    "typeScriptTag": "entryCache",
    "description": "Returns a list of all Entry Cache objects",
    "parameters": [
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "SCIM filter"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      }
    ]
  },
  {
    "url": "/entry-caches",
    "method": "addNewCache",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "entry-cache",
    "typeScriptTag": "entryCache",
    "description": "Add a new Entry Cache to the config",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "409",
        "description": "The Entry Cache already exists"
      }
    ]
  },
  {
    "url": "/entry-caches/{entry-cache-name}",
    "method": "deleteEntryCache",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "entry-cache",
    "typeScriptTag": "entryCache",
    "description": "Delete a Entry Cache",
    "parameters": [
      {
        "name": "entryCacheName",
        "schema": "string",
        "required": true,
        "description": "Name of the Entry Cache",
        "example": "ENTRY-CACHE-NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Successful operation"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Entry Cache does not exist"
      },
      {
        "statusCode": "409",
        "description": "The Entry Cache cannot be deleted"
      }
    ]
  },
  {
    "url": "/entry-caches/{entry-cache-name}",
    "method": "getSingleCache",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "entry-cache",
    "typeScriptTag": "entryCache",
    "description": "Returns a single Entry Cache",
    "parameters": [
      {
        "name": "entryCacheName",
        "schema": "string",
        "required": true,
        "description": "Name of the Entry Cache",
        "example": "ENTRY-CACHE-NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Entry Cache does not exist"
      }
    ]
  },
  {
    "url": "/entry-caches/{entry-cache-name}",
    "method": "updateByName",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "entry-cache",
    "typeScriptTag": "entryCache",
    "description": "Update an existing Entry Cache by name",
    "parameters": [
      {
        "name": "entryCacheName",
        "schema": "string",
        "required": true,
        "description": "Name of the Entry Cache",
        "example": "ENTRY-CACHE-NAME"
      },
      {
        "name": "operations",
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
        "description": "Invalid request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Entry Cache does not exist"
      }
    ]
  },
  {
    "url": "/access-control-handler",
    "method": "getSingle",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "access-control-handler",
    "typeScriptTag": "accessControlHandler",
    "description": "Returns a single Access Control Handler",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Access Control Handler does not exist"
      }
    ]
  },
  {
    "url": "/access-control-handler",
    "method": "updateByName",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "access-control-handler",
    "typeScriptTag": "accessControlHandler",
    "description": "Update an existing Access Control Handler by name",
    "parameters": [
      {
        "name": "operations",
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
        "description": "Invalid request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Access Control Handler does not exist"
      }
    ]
  },
  {
    "url": "/alert-handlers",
    "method": "listAlertHandlers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "alert-handler",
    "typeScriptTag": "alertHandler",
    "description": "Returns a list of all Alert Handler objects",
    "parameters": [
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "SCIM filter"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      }
    ]
  },
  {
    "url": "/alert-handlers",
    "method": "addNewHandler",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "alert-handler",
    "typeScriptTag": "alertHandler",
    "description": "Add a new Alert Handler to the config",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "409",
        "description": "The Alert Handler already exists"
      }
    ]
  },
  {
    "url": "/alert-handlers/{alert-handler-name}",
    "method": "deleteHandler",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "alert-handler",
    "typeScriptTag": "alertHandler",
    "description": "Delete a Alert Handler",
    "parameters": [
      {
        "name": "alertHandlerName",
        "schema": "string",
        "required": true,
        "description": "Name of the Alert Handler",
        "example": "ALERT-HANDLER-NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Successful operation"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Alert Handler does not exist"
      },
      {
        "statusCode": "409",
        "description": "The Alert Handler cannot be deleted"
      }
    ]
  },
  {
    "url": "/alert-handlers/{alert-handler-name}",
    "method": "getSingleHandler",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "alert-handler",
    "typeScriptTag": "alertHandler",
    "description": "Returns a single Alert Handler",
    "parameters": [
      {
        "name": "alertHandlerName",
        "schema": "string",
        "required": true,
        "description": "Name of the Alert Handler",
        "example": "ALERT-HANDLER-NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Alert Handler does not exist"
      }
    ]
  },
  {
    "url": "/alert-handlers/{alert-handler-name}",
    "method": "updateByName",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "alert-handler",
    "typeScriptTag": "alertHandler",
    "description": "Update an existing Alert Handler by name",
    "parameters": [
      {
        "name": "alertHandlerName",
        "schema": "string",
        "required": true,
        "description": "Name of the Alert Handler",
        "example": "ALERT-HANDLER-NAME"
      },
      {
        "name": "operations",
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
        "description": "Invalid request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Alert Handler does not exist"
      }
    ]
  },
  {
    "url": "/license",
    "method": "getSingle",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "license",
    "typeScriptTag": "license",
    "description": "Returns a single License",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The License does not exist"
      }
    ]
  },
  {
    "url": "/license",
    "method": "updateByName",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "license",
    "typeScriptTag": "license",
    "description": "Update an existing License by name",
    "parameters": [
      {
        "name": "operations",
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
        "description": "Invalid request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The License does not exist"
      }
    ]
  },
  {
    "url": "/cipher-stream-providers",
    "method": "listAllProviders",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "cipher-stream-provider",
    "typeScriptTag": "cipherStreamProvider",
    "description": "Returns a list of all Cipher Stream Provider objects",
    "parameters": [
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "SCIM filter"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      }
    ]
  },
  {
    "url": "/cipher-stream-providers",
    "method": "addNewProvider",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "cipher-stream-provider",
    "typeScriptTag": "cipherStreamProvider",
    "description": "Add a new Cipher Stream Provider to the config",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "409",
        "description": "The Cipher Stream Provider already exists"
      }
    ]
  },
  {
    "url": "/cipher-stream-providers/{cipher-stream-provider-name}",
    "method": "deleteProvider",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "cipher-stream-provider",
    "typeScriptTag": "cipherStreamProvider",
    "description": "Delete a Cipher Stream Provider",
    "parameters": [
      {
        "name": "cipherStreamProviderName",
        "schema": "string",
        "required": true,
        "description": "Name of the Cipher Stream Provider",
        "example": "CIPHER-STREAM-PROVIDER-NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Successful operation"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Cipher Stream Provider does not exist"
      },
      {
        "statusCode": "409",
        "description": "The Cipher Stream Provider cannot be deleted"
      }
    ]
  },
  {
    "url": "/cipher-stream-providers/{cipher-stream-provider-name}",
    "method": "getSingle",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "cipher-stream-provider",
    "typeScriptTag": "cipherStreamProvider",
    "description": "Returns a single Cipher Stream Provider",
    "parameters": [
      {
        "name": "cipherStreamProviderName",
        "schema": "string",
        "required": true,
        "description": "Name of the Cipher Stream Provider",
        "example": "CIPHER-STREAM-PROVIDER-NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Cipher Stream Provider does not exist"
      }
    ]
  },
  {
    "url": "/cipher-stream-providers/{cipher-stream-provider-name}",
    "method": "updateByName",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "cipher-stream-provider",
    "typeScriptTag": "cipherStreamProvider",
    "description": "Update an existing Cipher Stream Provider by name",
    "parameters": [
      {
        "name": "cipherStreamProviderName",
        "schema": "string",
        "required": true,
        "description": "Name of the Cipher Stream Provider",
        "example": "CIPHER-STREAM-PROVIDER-NAME"
      },
      {
        "name": "operations",
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
        "description": "Invalid request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Cipher Stream Provider does not exist"
      }
    ]
  },
  {
    "url": "/vault-authentication-methods",
    "method": "getAllObjects",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "vault-authentication-method",
    "typeScriptTag": "vaultAuthenticationMethod",
    "description": "Returns a list of all Vault Authentication Method objects",
    "parameters": [
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "SCIM filter"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      }
    ]
  },
  {
    "url": "/vault-authentication-methods",
    "method": "addNewMethod",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "vault-authentication-method",
    "typeScriptTag": "vaultAuthenticationMethod",
    "description": "Add a new Vault Authentication Method to the config",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "409",
        "description": "The Vault Authentication Method already exists"
      }
    ]
  },
  {
    "url": "/vault-authentication-methods/{vault-authentication-method-name}",
    "method": "deleteMethod",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "vault-authentication-method",
    "typeScriptTag": "vaultAuthenticationMethod",
    "description": "Delete a Vault Authentication Method",
    "parameters": [
      {
        "name": "vaultAuthenticationMethodName",
        "schema": "string",
        "required": true,
        "description": "Name of the Vault Authentication Method",
        "example": "VAULT-AUTHENTICATION-METHOD-NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Successful operation"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Vault Authentication Method does not exist"
      },
      {
        "statusCode": "409",
        "description": "The Vault Authentication Method cannot be deleted"
      }
    ]
  },
  {
    "url": "/vault-authentication-methods/{vault-authentication-method-name}",
    "method": "getSingle",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "vault-authentication-method",
    "typeScriptTag": "vaultAuthenticationMethod",
    "description": "Returns a single Vault Authentication Method",
    "parameters": [
      {
        "name": "vaultAuthenticationMethodName",
        "schema": "string",
        "required": true,
        "description": "Name of the Vault Authentication Method",
        "example": "VAULT-AUTHENTICATION-METHOD-NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Vault Authentication Method does not exist"
      }
    ]
  },
  {
    "url": "/vault-authentication-methods/{vault-authentication-method-name}",
    "method": "updateByName",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "vault-authentication-method",
    "typeScriptTag": "vaultAuthenticationMethod",
    "description": "Update an existing Vault Authentication Method by name",
    "parameters": [
      {
        "name": "vaultAuthenticationMethodName",
        "schema": "string",
        "required": true,
        "description": "Name of the Vault Authentication Method",
        "example": "VAULT-AUTHENTICATION-METHOD-NAME"
      },
      {
        "name": "operations",
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
        "description": "Invalid request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Vault Authentication Method does not exist"
      }
    ]
  },
  {
    "url": "/account-status-notification-handlers",
    "method": "listObjects",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "account-status-notification-handler",
    "typeScriptTag": "accountStatusNotificationHandler",
    "description": "Returns a list of all Account Status Notification Handler objects",
    "parameters": [
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "SCIM filter"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      }
    ]
  },
  {
    "url": "/account-status-notification-handlers",
    "method": "addNewHandler",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "account-status-notification-handler",
    "typeScriptTag": "accountStatusNotificationHandler",
    "description": "Add a new Account Status Notification Handler to the config",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "409",
        "description": "The Account Status Notification Handler already exists"
      }
    ]
  },
  {
    "url": "/account-status-notification-handlers/{account-status-notification-handler-name}",
    "method": "deleteHandler",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "account-status-notification-handler",
    "typeScriptTag": "accountStatusNotificationHandler",
    "description": "Delete a Account Status Notification Handler",
    "parameters": [
      {
        "name": "accountStatusNotificationHandlerName",
        "schema": "string",
        "required": true,
        "description": "Name of the Account Status Notification Handler",
        "example": "ACCOUNT-STATUS-NOTIFICATION-HANDLER-NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Successful operation"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Account Status Notification Handler does not exist"
      },
      {
        "statusCode": "409",
        "description": "The Account Status Notification Handler cannot be deleted"
      }
    ]
  },
  {
    "url": "/account-status-notification-handlers/{account-status-notification-handler-name}",
    "method": "getSingle",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "account-status-notification-handler",
    "typeScriptTag": "accountStatusNotificationHandler",
    "description": "Returns a single Account Status Notification Handler",
    "parameters": [
      {
        "name": "accountStatusNotificationHandlerName",
        "schema": "string",
        "required": true,
        "description": "Name of the Account Status Notification Handler",
        "example": "ACCOUNT-STATUS-NOTIFICATION-HANDLER-NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Account Status Notification Handler does not exist"
      }
    ]
  },
  {
    "url": "/account-status-notification-handlers/{account-status-notification-handler-name}",
    "method": "updateByHandlerName",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "account-status-notification-handler",
    "typeScriptTag": "accountStatusNotificationHandler",
    "description": "Update an existing Account Status Notification Handler by name",
    "parameters": [
      {
        "name": "accountStatusNotificationHandlerName",
        "schema": "string",
        "required": true,
        "description": "Name of the Account Status Notification Handler",
        "example": "ACCOUNT-STATUS-NOTIFICATION-HANDLER-NAME"
      },
      {
        "name": "operations",
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
        "description": "Invalid request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Account Status Notification Handler does not exist"
      }
    ]
  },
  {
    "url": "/server-groups",
    "method": "listAllObjects",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "server-group",
    "typeScriptTag": "serverGroup",
    "description": "Returns a list of all Server Group objects",
    "parameters": [
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "SCIM filter"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      }
    ]
  },
  {
    "url": "/server-groups",
    "method": "addNewServerGroup",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "server-group",
    "typeScriptTag": "serverGroup",
    "description": "Add a new Server Group to the config",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "409",
        "description": "The Server Group already exists"
      }
    ]
  },
  {
    "url": "/server-groups/{server-group-name}",
    "method": "deleteServerGroup",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "server-group",
    "typeScriptTag": "serverGroup",
    "description": "Delete a Server Group",
    "parameters": [
      {
        "name": "serverGroupName",
        "schema": "string",
        "required": true,
        "description": "Name of the Server Group",
        "example": "SERVER-GROUP-NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Successful operation"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Server Group does not exist"
      },
      {
        "statusCode": "409",
        "description": "The Server Group cannot be deleted"
      }
    ]
  },
  {
    "url": "/server-groups/{server-group-name}",
    "method": "getSingle",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "server-group",
    "typeScriptTag": "serverGroup",
    "description": "Returns a single Server Group",
    "parameters": [
      {
        "name": "serverGroupName",
        "schema": "string",
        "required": true,
        "description": "Name of the Server Group",
        "example": "SERVER-GROUP-NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Server Group does not exist"
      }
    ]
  },
  {
    "url": "/server-groups/{server-group-name}",
    "method": "updateByName",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "server-group",
    "typeScriptTag": "serverGroup",
    "description": "Update an existing Server Group by name",
    "parameters": [
      {
        "name": "serverGroupName",
        "schema": "string",
        "required": true,
        "description": "Name of the Server Group",
        "example": "SERVER-GROUP-NAME"
      },
      {
        "name": "operations",
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
        "description": "Invalid request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Server Group does not exist"
      }
    ]
  },
  {
    "url": "/pass-through-authentication-handlers",
    "method": "listAllHandlers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "pass-through-authentication-handler",
    "typeScriptTag": "passThroughAuthenticationHandler",
    "description": "Returns a list of all Pass Through Authentication Handler objects",
    "parameters": [
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "SCIM filter"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      }
    ]
  },
  {
    "url": "/pass-through-authentication-handlers",
    "method": "addNewHandler",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "pass-through-authentication-handler",
    "typeScriptTag": "passThroughAuthenticationHandler",
    "description": "Add a new Pass Through Authentication Handler to the config",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "409",
        "description": "The Pass Through Authentication Handler already exists"
      }
    ]
  },
  {
    "url": "/pass-through-authentication-handlers/{pass-through-authentication-handler-name}",
    "method": "deleteHandler",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "pass-through-authentication-handler",
    "typeScriptTag": "passThroughAuthenticationHandler",
    "description": "Delete a Pass Through Authentication Handler",
    "parameters": [
      {
        "name": "passThroughAuthenticationHandlerName",
        "schema": "string",
        "required": true,
        "description": "Name of the Pass Through Authentication Handler",
        "example": "PASS-THROUGH-AUTHENTICATION-HANDLER-NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Successful operation"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Pass Through Authentication Handler does not exist"
      },
      {
        "statusCode": "409",
        "description": "The Pass Through Authentication Handler cannot be deleted"
      }
    ]
  },
  {
    "url": "/pass-through-authentication-handlers/{pass-through-authentication-handler-name}",
    "method": "getSingleHandler",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "pass-through-authentication-handler",
    "typeScriptTag": "passThroughAuthenticationHandler",
    "description": "Returns a single Pass Through Authentication Handler",
    "parameters": [
      {
        "name": "passThroughAuthenticationHandlerName",
        "schema": "string",
        "required": true,
        "description": "Name of the Pass Through Authentication Handler",
        "example": "PASS-THROUGH-AUTHENTICATION-HANDLER-NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Pass Through Authentication Handler does not exist"
      }
    ]
  },
  {
    "url": "/pass-through-authentication-handlers/{pass-through-authentication-handler-name}",
    "method": "updateHandlerByName",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "pass-through-authentication-handler",
    "typeScriptTag": "passThroughAuthenticationHandler",
    "description": "Update an existing Pass Through Authentication Handler by name",
    "parameters": [
      {
        "name": "passThroughAuthenticationHandlerName",
        "schema": "string",
        "required": true,
        "description": "Name of the Pass Through Authentication Handler",
        "example": "PASS-THROUGH-AUTHENTICATION-HANDLER-NAME"
      },
      {
        "name": "operations",
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
        "description": "Invalid request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Pass Through Authentication Handler does not exist"
      }
    ]
  },
  {
    "url": "/consent-definitions",
    "method": "listAllObjects",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "consent-definition",
    "typeScriptTag": "consentDefinition",
    "description": "Returns a list of all Consent Definition objects",
    "parameters": [
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "SCIM filter"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      }
    ]
  },
  {
    "url": "/consent-definitions",
    "method": "addNewToConfig",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "consent-definition",
    "typeScriptTag": "consentDefinition",
    "description": "Add a new Consent Definition to the config",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "409",
        "description": "The Consent Definition already exists"
      }
    ]
  },
  {
    "url": "/consent-definitions/{consent-definition-name}",
    "method": "deleteConsentDefinition",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "consent-definition",
    "typeScriptTag": "consentDefinition",
    "description": "Delete a Consent Definition",
    "parameters": [
      {
        "name": "consentDefinitionName",
        "schema": "string",
        "required": true,
        "description": "Name of the Consent Definition",
        "example": "CONSENT-DEFINITION-NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Successful operation"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Consent Definition does not exist"
      },
      {
        "statusCode": "409",
        "description": "The Consent Definition cannot be deleted"
      }
    ]
  },
  {
    "url": "/consent-definitions/{consent-definition-name}",
    "method": "getSingleConsentDefinition",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "consent-definition",
    "typeScriptTag": "consentDefinition",
    "description": "Returns a single Consent Definition",
    "parameters": [
      {
        "name": "consentDefinitionName",
        "schema": "string",
        "required": true,
        "description": "Name of the Consent Definition",
        "example": "CONSENT-DEFINITION-NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Consent Definition does not exist"
      }
    ]
  },
  {
    "url": "/consent-definitions/{consent-definition-name}",
    "method": "updateByName",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "consent-definition",
    "typeScriptTag": "consentDefinition",
    "description": "Update an existing Consent Definition by name",
    "parameters": [
      {
        "name": "consentDefinitionName",
        "schema": "string",
        "required": true,
        "description": "Name of the Consent Definition",
        "example": "CONSENT-DEFINITION-NAME"
      },
      {
        "name": "operations",
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
        "description": "Invalid request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Consent Definition does not exist"
      }
    ]
  },
  {
    "url": "/consent-definitions/{consent-definition-name}/consent-definition-localizations",
    "method": "getAllObjects",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "consent-definition-localization",
    "typeScriptTag": "consentDefinitionLocalization",
    "description": "Returns a list of all Consent Definition Localization objects",
    "parameters": [
      {
        "name": "consentDefinitionName",
        "schema": "string",
        "required": true,
        "description": "Name of the Consent Definition",
        "example": "CONSENT-DEFINITION-NAME"
      },
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "SCIM filter"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      }
    ]
  },
  {
    "url": "/consent-definitions/{consent-definition-name}/consent-definition-localizations",
    "method": "addNew",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "consent-definition-localization",
    "typeScriptTag": "consentDefinitionLocalization",
    "description": "Add a new Consent Definition Localization to the config",
    "parameters": [
      {
        "name": "consentDefinitionName",
        "schema": "string",
        "required": true,
        "description": "Name of the Consent Definition",
        "example": "CONSENT-DEFINITION-NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "409",
        "description": "The Consent Definition Localization already exists"
      }
    ]
  },
  {
    "url": "/consent-definitions/{consent-definition-name}/consent-definition-localizations/{consent-definition-localization-name}",
    "method": "deleteLocalization",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "consent-definition-localization",
    "typeScriptTag": "consentDefinitionLocalization",
    "description": "Delete a Consent Definition Localization",
    "parameters": [
      {
        "name": "consentDefinitionLocalizationName",
        "schema": "string",
        "required": true,
        "description": "Name of the Consent Definition Localization",
        "example": "CONSENT-DEFINITION-LOCALIZATION-NAME"
      },
      {
        "name": "consentDefinitionName",
        "schema": "string",
        "required": true,
        "description": "Name of the Consent Definition",
        "example": "CONSENT-DEFINITION-NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Successful operation"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Consent Definition Localization does not exist"
      },
      {
        "statusCode": "409",
        "description": "The Consent Definition Localization cannot be deleted"
      }
    ]
  },
  {
    "url": "/consent-definitions/{consent-definition-name}/consent-definition-localizations/{consent-definition-localization-name}",
    "method": "getSingle",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "consent-definition-localization",
    "typeScriptTag": "consentDefinitionLocalization",
    "description": "Returns a single Consent Definition Localization",
    "parameters": [
      {
        "name": "consentDefinitionLocalizationName",
        "schema": "string",
        "required": true,
        "description": "Name of the Consent Definition Localization",
        "example": "CONSENT-DEFINITION-LOCALIZATION-NAME"
      },
      {
        "name": "consentDefinitionName",
        "schema": "string",
        "required": true,
        "description": "Name of the Consent Definition",
        "example": "CONSENT-DEFINITION-NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Consent Definition Localization does not exist"
      }
    ]
  },
  {
    "url": "/consent-definitions/{consent-definition-name}/consent-definition-localizations/{consent-definition-localization-name}",
    "method": "updateByName",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "consent-definition-localization",
    "typeScriptTag": "consentDefinitionLocalization",
    "description": "Update an existing Consent Definition Localization by name",
    "parameters": [
      {
        "name": "consentDefinitionLocalizationName",
        "schema": "string",
        "required": true,
        "description": "Name of the Consent Definition Localization",
        "example": "CONSENT-DEFINITION-LOCALIZATION-NAME"
      },
      {
        "name": "consentDefinitionName",
        "schema": "string",
        "required": true,
        "description": "Name of the Consent Definition",
        "example": "CONSENT-DEFINITION-NAME"
      },
      {
        "name": "operations",
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
        "description": "Invalid request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Consent Definition Localization does not exist"
      }
    ]
  },
  {
    "url": "/consent-service",
    "method": "getSingleConsent",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "consent-service",
    "typeScriptTag": "consentService",
    "description": "Returns a single Consent Service",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Consent Service does not exist"
      }
    ]
  },
  {
    "url": "/consent-service",
    "method": "updateByName",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "consent-service",
    "typeScriptTag": "consentService",
    "description": "Update an existing Consent Service by name",
    "parameters": [
      {
        "name": "operations",
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
        "description": "Invalid request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Consent Service does not exist"
      }
    ]
  },
  {
    "url": "/topology-admin-users",
    "method": "listAllUsers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "topology-admin-user",
    "typeScriptTag": "topologyAdminUser",
    "description": "Returns a list of all Topology Admin User objects",
    "parameters": [
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "SCIM filter"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      }
    ]
  },
  {
    "url": "/topology-admin-users",
    "method": "addNewUser",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "topology-admin-user",
    "typeScriptTag": "topologyAdminUser",
    "description": "Add a new Topology Admin User to the config",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "409",
        "description": "The Topology Admin User already exists"
      }
    ]
  },
  {
    "url": "/topology-admin-users/{topology-admin-user-name}",
    "method": "deleteUser",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "topology-admin-user",
    "typeScriptTag": "topologyAdminUser",
    "description": "Delete a Topology Admin User",
    "parameters": [
      {
        "name": "topologyAdminUserName",
        "schema": "string",
        "required": true,
        "description": "Name of the Topology Admin User",
        "example": "TOPOLOGY-ADMIN-USER-NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Successful operation"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Topology Admin User does not exist"
      },
      {
        "statusCode": "409",
        "description": "The Topology Admin User cannot be deleted"
      }
    ]
  },
  {
    "url": "/topology-admin-users/{topology-admin-user-name}",
    "method": "getSingleTopologyAdminUser",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "topology-admin-user",
    "typeScriptTag": "topologyAdminUser",
    "description": "Returns a single Topology Admin User",
    "parameters": [
      {
        "name": "topologyAdminUserName",
        "schema": "string",
        "required": true,
        "description": "Name of the Topology Admin User",
        "example": "TOPOLOGY-ADMIN-USER-NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Topology Admin User does not exist"
      }
    ]
  },
  {
    "url": "/topology-admin-users/{topology-admin-user-name}",
    "method": "updateByName",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "topology-admin-user",
    "typeScriptTag": "topologyAdminUser",
    "description": "Update an existing Topology Admin User by name",
    "parameters": [
      {
        "name": "topologyAdminUserName",
        "schema": "string",
        "required": true,
        "description": "Name of the Topology Admin User",
        "example": "TOPOLOGY-ADMIN-USER-NAME"
      },
      {
        "name": "operations",
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
        "description": "Invalid request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Topology Admin User does not exist"
      }
    ]
  },
  {
    "url": "/change-subscriptions",
    "method": "listAllObjects",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "change-subscription",
    "typeScriptTag": "changeSubscription",
    "description": "Returns a list of all Change Subscription objects",
    "parameters": [
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "SCIM filter"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      }
    ]
  },
  {
    "url": "/change-subscriptions",
    "method": "addNewToConfig",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "change-subscription",
    "typeScriptTag": "changeSubscription",
    "description": "Add a new Change Subscription to the config",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "409",
        "description": "The Change Subscription already exists"
      }
    ]
  },
  {
    "url": "/change-subscriptions/{change-subscription-name}",
    "method": "deleteSubscription",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "change-subscription",
    "typeScriptTag": "changeSubscription",
    "description": "Delete a Change Subscription",
    "parameters": [
      {
        "name": "changeSubscriptionName",
        "schema": "string",
        "required": true,
        "description": "Name of the Change Subscription",
        "example": "CHANGE-SUBSCRIPTION-NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Successful operation"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Change Subscription does not exist"
      },
      {
        "statusCode": "409",
        "description": "The Change Subscription cannot be deleted"
      }
    ]
  },
  {
    "url": "/change-subscriptions/{change-subscription-name}",
    "method": "getSingle",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "change-subscription",
    "typeScriptTag": "changeSubscription",
    "description": "Returns a single Change Subscription",
    "parameters": [
      {
        "name": "changeSubscriptionName",
        "schema": "string",
        "required": true,
        "description": "Name of the Change Subscription",
        "example": "CHANGE-SUBSCRIPTION-NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Change Subscription does not exist"
      }
    ]
  },
  {
    "url": "/change-subscriptions/{change-subscription-name}",
    "method": "updateByName",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "change-subscription",
    "typeScriptTag": "changeSubscription",
    "description": "Update an existing Change Subscription by name",
    "parameters": [
      {
        "name": "changeSubscriptionName",
        "schema": "string",
        "required": true,
        "description": "Name of the Change Subscription",
        "example": "CHANGE-SUBSCRIPTION-NAME"
      },
      {
        "name": "operations",
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
        "description": "Invalid request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Change Subscription does not exist"
      }
    ]
  },
  {
    "url": "/ldap-sdk-debug-logger",
    "method": "getSingleDebugLogger",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "ldap-sdk-debug-logger",
    "typeScriptTag": "ldapSdkDebugLogger",
    "description": "Returns a single LDAP SDK Debug Logger",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The LDAP SDK Debug Logger does not exist"
      }
    ]
  },
  {
    "url": "/ldap-sdk-debug-logger",
    "method": "updateByName",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "ldap-sdk-debug-logger",
    "typeScriptTag": "ldapSdkDebugLogger",
    "description": "Update an existing LDAP SDK Debug Logger by name",
    "parameters": [
      {
        "name": "operations",
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
        "description": "Invalid request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The LDAP SDK Debug Logger does not exist"
      }
    ]
  },
  {
    "url": "/conjur-authentication-methods",
    "method": "listAllMethods",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "conjur-authentication-method",
    "typeScriptTag": "conjurAuthenticationMethod",
    "description": "Returns a list of all Conjur Authentication Method objects",
    "parameters": [
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "SCIM filter"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      }
    ]
  },
  {
    "url": "/conjur-authentication-methods",
    "method": "addNewMethod",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "conjur-authentication-method",
    "typeScriptTag": "conjurAuthenticationMethod",
    "description": "Add a new Conjur Authentication Method to the config",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "409",
        "description": "The Conjur Authentication Method already exists"
      }
    ]
  },
  {
    "url": "/conjur-authentication-methods/{conjur-authentication-method-name}",
    "method": "deleteMethod",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "conjur-authentication-method",
    "typeScriptTag": "conjurAuthenticationMethod",
    "description": "Delete a Conjur Authentication Method",
    "parameters": [
      {
        "name": "conjurAuthenticationMethodName",
        "schema": "string",
        "required": true,
        "description": "Name of the Conjur Authentication Method",
        "example": "CONJUR-AUTHENTICATION-METHOD-NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Successful operation"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Conjur Authentication Method does not exist"
      },
      {
        "statusCode": "409",
        "description": "The Conjur Authentication Method cannot be deleted"
      }
    ]
  },
  {
    "url": "/conjur-authentication-methods/{conjur-authentication-method-name}",
    "method": "getMethod",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "conjur-authentication-method",
    "typeScriptTag": "conjurAuthenticationMethod",
    "description": "Returns a single Conjur Authentication Method",
    "parameters": [
      {
        "name": "conjurAuthenticationMethodName",
        "schema": "string",
        "required": true,
        "description": "Name of the Conjur Authentication Method",
        "example": "CONJUR-AUTHENTICATION-METHOD-NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Conjur Authentication Method does not exist"
      }
    ]
  },
  {
    "url": "/conjur-authentication-methods/{conjur-authentication-method-name}",
    "method": "updateByMethodName",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "conjur-authentication-method",
    "typeScriptTag": "conjurAuthenticationMethod",
    "description": "Update an existing Conjur Authentication Method by name",
    "parameters": [
      {
        "name": "conjurAuthenticationMethodName",
        "schema": "string",
        "required": true,
        "description": "Name of the Conjur Authentication Method",
        "example": "CONJUR-AUTHENTICATION-METHOD-NAME"
      },
      {
        "name": "operations",
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
        "description": "Invalid request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Conjur Authentication Method does not exist"
      }
    ]
  },
  {
    "url": "/constructed-attributes",
    "method": "listAllAttributes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "constructed-attribute",
    "typeScriptTag": "constructedAttribute",
    "description": "Returns a list of all Constructed Attribute objects",
    "parameters": [
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "SCIM filter"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      }
    ]
  },
  {
    "url": "/constructed-attributes",
    "method": "addNewAttribute",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "constructed-attribute",
    "typeScriptTag": "constructedAttribute",
    "description": "Add a new Constructed Attribute to the config",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "409",
        "description": "The Constructed Attribute already exists"
      }
    ]
  },
  {
    "url": "/constructed-attributes/{constructed-attribute-name}",
    "method": "deleteAttribute",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "constructed-attribute",
    "typeScriptTag": "constructedAttribute",
    "description": "Delete a Constructed Attribute",
    "parameters": [
      {
        "name": "constructedAttributeName",
        "schema": "string",
        "required": true,
        "description": "Name of the Constructed Attribute",
        "example": "CONSTRUCTED-ATTRIBUTE-NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Successful operation"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Constructed Attribute does not exist"
      },
      {
        "statusCode": "409",
        "description": "The Constructed Attribute cannot be deleted"
      }
    ]
  },
  {
    "url": "/constructed-attributes/{constructed-attribute-name}",
    "method": "getSingleAttribute",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "constructed-attribute",
    "typeScriptTag": "constructedAttribute",
    "description": "Returns a single Constructed Attribute",
    "parameters": [
      {
        "name": "constructedAttributeName",
        "schema": "string",
        "required": true,
        "description": "Name of the Constructed Attribute",
        "example": "CONSTRUCTED-ATTRIBUTE-NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Constructed Attribute does not exist"
      }
    ]
  },
  {
    "url": "/constructed-attributes/{constructed-attribute-name}",
    "method": "updateByName",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "constructed-attribute",
    "typeScriptTag": "constructedAttribute",
    "description": "Update an existing Constructed Attribute by name",
    "parameters": [
      {
        "name": "constructedAttributeName",
        "schema": "string",
        "required": true,
        "description": "Name of the Constructed Attribute",
        "example": "CONSTRUCTED-ATTRIBUTE-NAME"
      },
      {
        "name": "operations",
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
        "description": "Invalid request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Constructed Attribute does not exist"
      }
    ]
  },
  {
    "url": "/password-validators",
    "method": "getAllValidators",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "password-validator",
    "typeScriptTag": "passwordValidator",
    "description": "Returns a list of all Password Validator objects",
    "parameters": [
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "SCIM filter"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      }
    ]
  },
  {
    "url": "/password-validators",
    "method": "addNewValidatorToConfig",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "password-validator",
    "typeScriptTag": "passwordValidator",
    "description": "Add a new Password Validator to the config",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "409",
        "description": "The Password Validator already exists"
      }
    ]
  },
  {
    "url": "/password-validators/{password-validator-name}",
    "method": "deleteValidator",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "password-validator",
    "typeScriptTag": "passwordValidator",
    "description": "Delete a Password Validator",
    "parameters": [
      {
        "name": "passwordValidatorName",
        "schema": "string",
        "required": true,
        "description": "Name of the Password Validator",
        "example": "PASSWORD-VALIDATOR-NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Successful operation"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Password Validator does not exist"
      },
      {
        "statusCode": "409",
        "description": "The Password Validator cannot be deleted"
      }
    ]
  },
  {
    "url": "/password-validators/{password-validator-name}",
    "method": "getValidator",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "password-validator",
    "typeScriptTag": "passwordValidator",
    "description": "Returns a single Password Validator",
    "parameters": [
      {
        "name": "passwordValidatorName",
        "schema": "string",
        "required": true,
        "description": "Name of the Password Validator",
        "example": "PASSWORD-VALIDATOR-NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Password Validator does not exist"
      }
    ]
  },
  {
    "url": "/password-validators/{password-validator-name}",
    "method": "updateByName",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "password-validator",
    "typeScriptTag": "passwordValidator",
    "description": "Update an existing Password Validator by name",
    "parameters": [
      {
        "name": "passwordValidatorName",
        "schema": "string",
        "required": true,
        "description": "Name of the Password Validator",
        "example": "PASSWORD-VALIDATOR-NAME"
      },
      {
        "name": "operations",
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
        "description": "Invalid request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Password Validator does not exist"
      }
    ]
  },
  {
    "url": "/alarm-manager",
    "method": "getSingleAlarmManager",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "alarm-manager",
    "typeScriptTag": "alarmManager",
    "description": "Returns a single Alarm Manager",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Alarm Manager does not exist"
      }
    ]
  },
  {
    "url": "/alarm-manager",
    "method": "updateByName",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "alarm-manager",
    "typeScriptTag": "alarmManager",
    "description": "Update an existing Alarm Manager by name",
    "parameters": [
      {
        "name": "operations",
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
        "description": "Invalid request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Alarm Manager does not exist"
      }
    ]
  },
  {
    "url": "/connection-handlers",
    "method": "listObjects",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "connection-handler",
    "typeScriptTag": "connectionHandler",
    "description": "Returns a list of all Connection Handler objects",
    "parameters": [
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "SCIM filter"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      }
    ]
  },
  {
    "url": "/connection-handlers",
    "method": "addNewConfig",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "connection-handler",
    "typeScriptTag": "connectionHandler",
    "description": "Add a new Connection Handler to the config",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "409",
        "description": "The Connection Handler already exists"
      }
    ]
  },
  {
    "url": "/connection-handlers/{connection-handler-name}",
    "method": "deleteHandler",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "connection-handler",
    "typeScriptTag": "connectionHandler",
    "description": "Delete a Connection Handler",
    "parameters": [
      {
        "name": "connectionHandlerName",
        "schema": "string",
        "required": true,
        "description": "Name of the Connection Handler",
        "example": "CONNECTION-HANDLER-NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Successful operation"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Connection Handler does not exist"
      },
      {
        "statusCode": "409",
        "description": "The Connection Handler cannot be deleted"
      }
    ]
  },
  {
    "url": "/connection-handlers/{connection-handler-name}",
    "method": "getSingle",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "connection-handler",
    "typeScriptTag": "connectionHandler",
    "description": "Returns a single Connection Handler",
    "parameters": [
      {
        "name": "connectionHandlerName",
        "schema": "string",
        "required": true,
        "description": "Name of the Connection Handler",
        "example": "CONNECTION-HANDLER-NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Connection Handler does not exist"
      }
    ]
  },
  {
    "url": "/connection-handlers/{connection-handler-name}",
    "method": "updateByName",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "connection-handler",
    "typeScriptTag": "connectionHandler",
    "description": "Update an existing Connection Handler by name",
    "parameters": [
      {
        "name": "connectionHandlerName",
        "schema": "string",
        "required": true,
        "description": "Name of the Connection Handler",
        "example": "CONNECTION-HANDLER-NAME"
      },
      {
        "name": "operations",
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
        "description": "Invalid request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Connection Handler does not exist"
      }
    ]
  },
  {
    "url": "/web-application-extensions",
    "method": "listAllObjects",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "web-application-extension",
    "typeScriptTag": "webApplicationExtension",
    "description": "Returns a list of all Web Application Extension objects",
    "parameters": [
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "SCIM filter"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      }
    ]
  },
  {
    "url": "/web-application-extensions",
    "method": "addNewExtension",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "web-application-extension",
    "typeScriptTag": "webApplicationExtension",
    "description": "Add a new Web Application Extension to the config",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "409",
        "description": "The Web Application Extension already exists"
      }
    ]
  },
  {
    "url": "/web-application-extensions/{web-application-extension-name}",
    "method": "deleteExtension",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "web-application-extension",
    "typeScriptTag": "webApplicationExtension",
    "description": "Delete a Web Application Extension",
    "parameters": [
      {
        "name": "webApplicationExtensionName",
        "schema": "string",
        "required": true,
        "description": "Name of the Web Application Extension",
        "example": "WEB-APPLICATION-EXTENSION-NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Successful operation"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Web Application Extension does not exist"
      },
      {
        "statusCode": "409",
        "description": "The Web Application Extension cannot be deleted"
      }
    ]
  },
  {
    "url": "/web-application-extensions/{web-application-extension-name}",
    "method": "getSingle",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "web-application-extension",
    "typeScriptTag": "webApplicationExtension",
    "description": "Returns a single Web Application Extension",
    "parameters": [
      {
        "name": "webApplicationExtensionName",
        "schema": "string",
        "required": true,
        "description": "Name of the Web Application Extension",
        "example": "WEB-APPLICATION-EXTENSION-NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Web Application Extension does not exist"
      }
    ]
  },
  {
    "url": "/web-application-extensions/{web-application-extension-name}",
    "method": "updateByName",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "web-application-extension",
    "typeScriptTag": "webApplicationExtension",
    "description": "Update an existing Web Application Extension by name",
    "parameters": [
      {
        "name": "webApplicationExtensionName",
        "schema": "string",
        "required": true,
        "description": "Name of the Web Application Extension",
        "example": "WEB-APPLICATION-EXTENSION-NAME"
      },
      {
        "name": "operations",
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
        "description": "Invalid request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Web Application Extension does not exist"
      }
    ]
  },
  {
    "url": "/trusted-certificates",
    "method": "listAllCertificates",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "trusted-certificate",
    "typeScriptTag": "trustedCertificate",
    "description": "Returns a list of all Trusted Certificate objects",
    "parameters": [
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "SCIM filter"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      }
    ]
  },
  {
    "url": "/trusted-certificates",
    "method": "addNewToConfig",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "trusted-certificate",
    "typeScriptTag": "trustedCertificate",
    "description": "Add a new Trusted Certificate to the config",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "409",
        "description": "The Trusted Certificate already exists"
      }
    ]
  },
  {
    "url": "/trusted-certificates/{trusted-certificate-name}",
    "method": "deleteCertificate",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "trusted-certificate",
    "typeScriptTag": "trustedCertificate",
    "description": "Delete a Trusted Certificate",
    "parameters": [
      {
        "name": "trustedCertificateName",
        "schema": "string",
        "required": true,
        "description": "Name of the Trusted Certificate",
        "example": "TRUSTED-CERTIFICATE-NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Successful operation"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Trusted Certificate does not exist"
      },
      {
        "statusCode": "409",
        "description": "The Trusted Certificate cannot be deleted"
      }
    ]
  },
  {
    "url": "/trusted-certificates/{trusted-certificate-name}",
    "method": "getSingle",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "trusted-certificate",
    "typeScriptTag": "trustedCertificate",
    "description": "Returns a single Trusted Certificate",
    "parameters": [
      {
        "name": "trustedCertificateName",
        "schema": "string",
        "required": true,
        "description": "Name of the Trusted Certificate",
        "example": "TRUSTED-CERTIFICATE-NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Trusted Certificate does not exist"
      }
    ]
  },
  {
    "url": "/trusted-certificates/{trusted-certificate-name}",
    "method": "updateByName",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "trusted-certificate",
    "typeScriptTag": "trustedCertificate",
    "description": "Update an existing Trusted Certificate by name",
    "parameters": [
      {
        "name": "trustedCertificateName",
        "schema": "string",
        "required": true,
        "description": "Name of the Trusted Certificate",
        "example": "TRUSTED-CERTIFICATE-NAME"
      },
      {
        "name": "operations",
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
        "description": "Invalid request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Trusted Certificate does not exist"
      }
    ]
  },
  {
    "url": "/search-entry-criteria",
    "method": "listAllObjects",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "search-entry-criteria",
    "typeScriptTag": "searchEntryCriteria",
    "description": "Returns a list of all Search Entry Criteria objects",
    "parameters": [
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "SCIM filter"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      }
    ]
  },
  {
    "url": "/search-entry-criteria",
    "method": "addNewCriteria",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "search-entry-criteria",
    "typeScriptTag": "searchEntryCriteria",
    "description": "Add a new Search Entry Criteria to the config",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "409",
        "description": "The Search Entry Criteria already exists"
      }
    ]
  },
  {
    "url": "/search-entry-criteria/{search-entry-criteria-name}",
    "method": "deleteEntryCriteria",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "search-entry-criteria",
    "typeScriptTag": "searchEntryCriteria",
    "description": "Delete a Search Entry Criteria",
    "parameters": [
      {
        "name": "searchEntryCriteriaName",
        "schema": "string",
        "required": true,
        "description": "Name of the Search Entry Criteria",
        "example": "SEARCH-ENTRY-CRITERIA-NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Successful operation"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Search Entry Criteria does not exist"
      },
      {
        "statusCode": "409",
        "description": "The Search Entry Criteria cannot be deleted"
      }
    ]
  },
  {
    "url": "/search-entry-criteria/{search-entry-criteria-name}",
    "method": "getSingle",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "search-entry-criteria",
    "typeScriptTag": "searchEntryCriteria",
    "description": "Returns a single Search Entry Criteria",
    "parameters": [
      {
        "name": "searchEntryCriteriaName",
        "schema": "string",
        "required": true,
        "description": "Name of the Search Entry Criteria",
        "example": "SEARCH-ENTRY-CRITERIA-NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Search Entry Criteria does not exist"
      }
    ]
  },
  {
    "url": "/search-entry-criteria/{search-entry-criteria-name}",
    "method": "updateByName",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "search-entry-criteria",
    "typeScriptTag": "searchEntryCriteria",
    "description": "Update an existing Search Entry Criteria by name",
    "parameters": [
      {
        "name": "searchEntryCriteriaName",
        "schema": "string",
        "required": true,
        "description": "Name of the Search Entry Criteria",
        "example": "SEARCH-ENTRY-CRITERIA-NAME"
      },
      {
        "name": "operations",
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
        "description": "Invalid request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Search Entry Criteria does not exist"
      }
    ]
  },
  {
    "url": "/failure-lockout-actions",
    "method": "listAllObjects",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "failure-lockout-action",
    "typeScriptTag": "failureLockoutAction",
    "description": "Returns a list of all Failure Lockout Action objects",
    "parameters": [
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "SCIM filter"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      }
    ]
  },
  {
    "url": "/failure-lockout-actions",
    "method": "addNewActionToConfig",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "failure-lockout-action",
    "typeScriptTag": "failureLockoutAction",
    "description": "Add a new Failure Lockout Action to the config",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "409",
        "description": "The Failure Lockout Action already exists"
      }
    ]
  },
  {
    "url": "/failure-lockout-actions/{failure-lockout-action-name}",
    "method": "deleteAction",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "failure-lockout-action",
    "typeScriptTag": "failureLockoutAction",
    "description": "Delete a Failure Lockout Action",
    "parameters": [
      {
        "name": "failureLockoutActionName",
        "schema": "string",
        "required": true,
        "description": "Name of the Failure Lockout Action",
        "example": "FAILURE-LOCKOUT-ACTION-NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Successful operation"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Failure Lockout Action does not exist"
      },
      {
        "statusCode": "409",
        "description": "The Failure Lockout Action cannot be deleted"
      }
    ]
  },
  {
    "url": "/failure-lockout-actions/{failure-lockout-action-name}",
    "method": "getSingle",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "failure-lockout-action",
    "typeScriptTag": "failureLockoutAction",
    "description": "Returns a single Failure Lockout Action",
    "parameters": [
      {
        "name": "failureLockoutActionName",
        "schema": "string",
        "required": true,
        "description": "Name of the Failure Lockout Action",
        "example": "FAILURE-LOCKOUT-ACTION-NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Failure Lockout Action does not exist"
      }
    ]
  },
  {
    "url": "/failure-lockout-actions/{failure-lockout-action-name}",
    "method": "updateByName",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "failure-lockout-action",
    "typeScriptTag": "failureLockoutAction",
    "description": "Update an existing Failure Lockout Action by name",
    "parameters": [
      {
        "name": "failureLockoutActionName",
        "schema": "string",
        "required": true,
        "description": "Name of the Failure Lockout Action",
        "example": "FAILURE-LOCKOUT-ACTION-NAME"
      },
      {
        "name": "operations",
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
        "description": "Invalid request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Failure Lockout Action does not exist"
      }
    ]
  },
  {
    "url": "/certificate-mappers",
    "method": "listAllObjects",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "certificate-mapper",
    "typeScriptTag": "certificateMapper",
    "description": "Returns a list of all Certificate Mapper objects",
    "parameters": [
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "SCIM filter"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      }
    ]
  },
  {
    "url": "/certificate-mappers",
    "method": "addNewMapper",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "certificate-mapper",
    "typeScriptTag": "certificateMapper",
    "description": "Add a new Certificate Mapper to the config",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "409",
        "description": "The Certificate Mapper already exists"
      }
    ]
  },
  {
    "url": "/certificate-mappers/{certificate-mapper-name}",
    "method": "deleteMapper",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "certificate-mapper",
    "typeScriptTag": "certificateMapper",
    "description": "Delete a Certificate Mapper",
    "parameters": [
      {
        "name": "certificateMapperName",
        "schema": "string",
        "required": true,
        "description": "Name of the Certificate Mapper",
        "example": "CERTIFICATE-MAPPER-NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Successful operation"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Certificate Mapper does not exist"
      },
      {
        "statusCode": "409",
        "description": "The Certificate Mapper cannot be deleted"
      }
    ]
  },
  {
    "url": "/certificate-mappers/{certificate-mapper-name}",
    "method": "getSingle",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "certificate-mapper",
    "typeScriptTag": "certificateMapper",
    "description": "Returns a single Certificate Mapper",
    "parameters": [
      {
        "name": "certificateMapperName",
        "schema": "string",
        "required": true,
        "description": "Name of the Certificate Mapper",
        "example": "CERTIFICATE-MAPPER-NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Certificate Mapper does not exist"
      }
    ]
  },
  {
    "url": "/certificate-mappers/{certificate-mapper-name}",
    "method": "updateByName",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "certificate-mapper",
    "typeScriptTag": "certificateMapper",
    "description": "Update an existing Certificate Mapper by name",
    "parameters": [
      {
        "name": "certificateMapperName",
        "schema": "string",
        "required": true,
        "description": "Name of the Certificate Mapper",
        "example": "CERTIFICATE-MAPPER-NAME"
      },
      {
        "name": "operations",
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
        "description": "Invalid request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Certificate Mapper does not exist"
      }
    ]
  },
  {
    "url": "/log-publishers",
    "method": "listLogPublishers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "log-publisher",
    "typeScriptTag": "logPublisher",
    "description": "Returns a list of all Log Publisher objects",
    "parameters": [
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "SCIM filter"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      }
    ]
  },
  {
    "url": "/log-publishers",
    "method": "addNewPublisher",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "log-publisher",
    "typeScriptTag": "logPublisher",
    "description": "Add a new Log Publisher to the config",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "409",
        "description": "The Log Publisher already exists"
      }
    ]
  },
  {
    "url": "/log-publishers/{log-publisher-name}",
    "method": "deleteLogPublisher",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "log-publisher",
    "typeScriptTag": "logPublisher",
    "description": "Delete a Log Publisher",
    "parameters": [
      {
        "name": "logPublisherName",
        "schema": "string",
        "required": true,
        "description": "Name of the Log Publisher",
        "example": "LOG-PUBLISHER-NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Successful operation"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Log Publisher does not exist"
      },
      {
        "statusCode": "409",
        "description": "The Log Publisher cannot be deleted"
      }
    ]
  },
  {
    "url": "/log-publishers/{log-publisher-name}",
    "method": "getSinglePublisher",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "log-publisher",
    "typeScriptTag": "logPublisher",
    "description": "Returns a single Log Publisher",
    "parameters": [
      {
        "name": "logPublisherName",
        "schema": "string",
        "required": true,
        "description": "Name of the Log Publisher",
        "example": "LOG-PUBLISHER-NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Log Publisher does not exist"
      }
    ]
  },
  {
    "url": "/log-publishers/{log-publisher-name}",
    "method": "updateByName",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "log-publisher",
    "typeScriptTag": "logPublisher",
    "description": "Update an existing Log Publisher by name",
    "parameters": [
      {
        "name": "logPublisherName",
        "schema": "string",
        "required": true,
        "description": "Name of the Log Publisher",
        "example": "LOG-PUBLISHER-NAME"
      },
      {
        "name": "operations",
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
        "description": "Invalid request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Log Publisher does not exist"
      }
    ]
  },
  {
    "url": "/log-publishers/{log-publisher-name}/debug-targets",
    "method": "listAllDebugTargets",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "debug-target",
    "typeScriptTag": "debugTarget",
    "description": "Returns a list of all Debug Target objects",
    "parameters": [
      {
        "name": "logPublisherName",
        "schema": "string",
        "required": true,
        "description": "Name of the Log Publisher",
        "example": "LOG-PUBLISHER-NAME"
      },
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "SCIM filter"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      }
    ]
  },
  {
    "url": "/log-publishers/{log-publisher-name}/debug-targets",
    "method": "addNewDebugTarget",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "debug-target",
    "typeScriptTag": "debugTarget",
    "description": "Add a new Debug Target to the config",
    "parameters": [
      {
        "name": "logPublisherName",
        "schema": "string",
        "required": true,
        "description": "Name of the Log Publisher",
        "example": "LOG-PUBLISHER-NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "409",
        "description": "The Debug Target already exists"
      }
    ]
  },
  {
    "url": "/log-publishers/{log-publisher-name}/debug-targets/{debug-target-name}",
    "method": "deleteDebugTarget",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "debug-target",
    "typeScriptTag": "debugTarget",
    "description": "Delete a Debug Target",
    "parameters": [
      {
        "name": "debugTargetName",
        "schema": "string",
        "required": true,
        "description": "Name of the Debug Target",
        "example": "DEBUG-TARGET-NAME"
      },
      {
        "name": "logPublisherName",
        "schema": "string",
        "required": true,
        "description": "Name of the Log Publisher",
        "example": "LOG-PUBLISHER-NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Successful operation"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Debug Target does not exist"
      },
      {
        "statusCode": "409",
        "description": "The Debug Target cannot be deleted"
      }
    ]
  },
  {
    "url": "/log-publishers/{log-publisher-name}/debug-targets/{debug-target-name}",
    "method": "getSingleDebugTarget",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "debug-target",
    "typeScriptTag": "debugTarget",
    "description": "Returns a single Debug Target",
    "parameters": [
      {
        "name": "debugTargetName",
        "schema": "string",
        "required": true,
        "description": "Name of the Debug Target",
        "example": "DEBUG-TARGET-NAME"
      },
      {
        "name": "logPublisherName",
        "schema": "string",
        "required": true,
        "description": "Name of the Log Publisher",
        "example": "LOG-PUBLISHER-NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Debug Target does not exist"
      }
    ]
  },
  {
    "url": "/log-publishers/{log-publisher-name}/debug-targets/{debug-target-name}",
    "method": "updateByName",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "debug-target",
    "typeScriptTag": "debugTarget",
    "description": "Update an existing Debug Target by name",
    "parameters": [
      {
        "name": "debugTargetName",
        "schema": "string",
        "required": true,
        "description": "Name of the Debug Target",
        "example": "DEBUG-TARGET-NAME"
      },
      {
        "name": "logPublisherName",
        "schema": "string",
        "required": true,
        "description": "Name of the Log Publisher",
        "example": "LOG-PUBLISHER-NAME"
      },
      {
        "name": "operations",
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
        "description": "Invalid request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Debug Target does not exist"
      }
    ]
  },
  {
    "url": "/replication-assurance-policies",
    "method": "listAllObjects",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "replication-assurance-policy",
    "typeScriptTag": "replicationAssurancePolicy",
    "description": "Returns a list of all Replication Assurance Policy objects",
    "parameters": [
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "SCIM filter"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      }
    ]
  },
  {
    "url": "/replication-assurance-policies",
    "method": "addNew",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "replication-assurance-policy",
    "typeScriptTag": "replicationAssurancePolicy",
    "description": "Add a new Replication Assurance Policy to the config",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "409",
        "description": "The Replication Assurance Policy already exists"
      }
    ]
  },
  {
    "url": "/replication-assurance-policies/{replication-assurance-policy-name}",
    "method": "deletePolicy",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "replication-assurance-policy",
    "typeScriptTag": "replicationAssurancePolicy",
    "description": "Delete a Replication Assurance Policy",
    "parameters": [
      {
        "name": "replicationAssurancePolicyName",
        "schema": "string",
        "required": true,
        "description": "Name of the Replication Assurance Policy",
        "example": "REPLICATION-ASSURANCE-POLICY-NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Successful operation"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Replication Assurance Policy does not exist"
      },
      {
        "statusCode": "409",
        "description": "The Replication Assurance Policy cannot be deleted"
      }
    ]
  },
  {
    "url": "/replication-assurance-policies/{replication-assurance-policy-name}",
    "method": "getSinglePolicy",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "replication-assurance-policy",
    "typeScriptTag": "replicationAssurancePolicy",
    "description": "Returns a single Replication Assurance Policy",
    "parameters": [
      {
        "name": "replicationAssurancePolicyName",
        "schema": "string",
        "required": true,
        "description": "Name of the Replication Assurance Policy",
        "example": "REPLICATION-ASSURANCE-POLICY-NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Replication Assurance Policy does not exist"
      }
    ]
  },
  {
    "url": "/replication-assurance-policies/{replication-assurance-policy-name}",
    "method": "updateByName",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "replication-assurance-policy",
    "typeScriptTag": "replicationAssurancePolicy",
    "description": "Update an existing Replication Assurance Policy by name",
    "parameters": [
      {
        "name": "replicationAssurancePolicyName",
        "schema": "string",
        "required": true,
        "description": "Name of the Replication Assurance Policy",
        "example": "REPLICATION-ASSURANCE-POLICY-NAME"
      },
      {
        "name": "operations",
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
        "description": "Invalid request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Replication Assurance Policy does not exist"
      }
    ]
  },
  {
    "url": "/key-manager-providers",
    "method": "listAllProviders",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "key-manager-provider",
    "typeScriptTag": "keyManagerProvider",
    "description": "Returns a list of all Key Manager Provider objects",
    "parameters": [
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "SCIM filter"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      }
    ]
  },
  {
    "url": "/key-manager-providers",
    "method": "addNewProvider",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "key-manager-provider",
    "typeScriptTag": "keyManagerProvider",
    "description": "Add a new Key Manager Provider to the config",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "409",
        "description": "The Key Manager Provider already exists"
      }
    ]
  },
  {
    "url": "/key-manager-providers/{key-manager-provider-name}",
    "method": "deleteProvider",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "key-manager-provider",
    "typeScriptTag": "keyManagerProvider",
    "description": "Delete a Key Manager Provider",
    "parameters": [
      {
        "name": "keyManagerProviderName",
        "schema": "string",
        "required": true,
        "description": "Name of the Key Manager Provider",
        "example": "KEY-MANAGER-PROVIDER-NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Successful operation"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Key Manager Provider does not exist"
      },
      {
        "statusCode": "409",
        "description": "The Key Manager Provider cannot be deleted"
      }
    ]
  },
  {
    "url": "/key-manager-providers/{key-manager-provider-name}",
    "method": "getSingle",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "key-manager-provider",
    "typeScriptTag": "keyManagerProvider",
    "description": "Returns a single Key Manager Provider",
    "parameters": [
      {
        "name": "keyManagerProviderName",
        "schema": "string",
        "required": true,
        "description": "Name of the Key Manager Provider",
        "example": "KEY-MANAGER-PROVIDER-NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Key Manager Provider does not exist"
      }
    ]
  },
  {
    "url": "/key-manager-providers/{key-manager-provider-name}",
    "method": "updateByName",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "key-manager-provider",
    "typeScriptTag": "keyManagerProvider",
    "description": "Update an existing Key Manager Provider by name",
    "parameters": [
      {
        "name": "keyManagerProviderName",
        "schema": "string",
        "required": true,
        "description": "Name of the Key Manager Provider",
        "example": "KEY-MANAGER-PROVIDER-NAME"
      },
      {
        "name": "operations",
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
        "description": "Invalid request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Key Manager Provider does not exist"
      }
    ]
  },
  {
    "url": "/external-servers",
    "method": "listObjects",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "external-server",
    "typeScriptTag": "externalServer",
    "description": "Returns a list of all External Server objects",
    "parameters": [
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "SCIM filter"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      }
    ]
  },
  {
    "url": "/external-servers",
    "method": "addNewConfig",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "external-server",
    "typeScriptTag": "externalServer",
    "description": "Add a new External Server to the config",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "409",
        "description": "The External Server already exists"
      }
    ]
  },
  {
    "url": "/external-servers/{external-server-name}",
    "method": "deleteExternalServer",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "external-server",
    "typeScriptTag": "externalServer",
    "description": "Delete a External Server",
    "parameters": [
      {
        "name": "externalServerName",
        "schema": "string",
        "required": true,
        "description": "Name of the External Server",
        "example": "EXTERNAL-SERVER-NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Successful operation"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The External Server does not exist"
      },
      {
        "statusCode": "409",
        "description": "The External Server cannot be deleted"
      }
    ]
  },
  {
    "url": "/external-servers/{external-server-name}",
    "method": "getSingleServer",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "external-server",
    "typeScriptTag": "externalServer",
    "description": "Returns a single External Server",
    "parameters": [
      {
        "name": "externalServerName",
        "schema": "string",
        "required": true,
        "description": "Name of the External Server",
        "example": "EXTERNAL-SERVER-NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The External Server does not exist"
      }
    ]
  },
  {
    "url": "/external-servers/{external-server-name}",
    "method": "updateByName",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "external-server",
    "typeScriptTag": "externalServer",
    "description": "Update an existing External Server by name",
    "parameters": [
      {
        "name": "externalServerName",
        "schema": "string",
        "required": true,
        "description": "Name of the External Server",
        "example": "EXTERNAL-SERVER-NAME"
      },
      {
        "name": "operations",
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
        "description": "Invalid request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The External Server does not exist"
      }
    ]
  },
  {
    "url": "/dn-maps",
    "method": "listObjects",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "dn-map",
    "typeScriptTag": "dnMap",
    "description": "Returns a list of all DN Map objects",
    "parameters": [
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "SCIM filter"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      }
    ]
  },
  {
    "url": "/dn-maps",
    "method": "createNewDnMap",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "dn-map",
    "typeScriptTag": "dnMap",
    "description": "Add a new DN Map to the config",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "409",
        "description": "The DN Map already exists"
      }
    ]
  },
  {
    "url": "/dn-maps/{dn-map-name}",
    "method": "deleteDnMap",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "dn-map",
    "typeScriptTag": "dnMap",
    "description": "Delete a DN Map",
    "parameters": [
      {
        "name": "dnMapName",
        "schema": "string",
        "required": true,
        "description": "Name of the DN Map",
        "example": "DN-MAP-NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Successful operation"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The DN Map does not exist"
      },
      {
        "statusCode": "409",
        "description": "The DN Map cannot be deleted"
      }
    ]
  },
  {
    "url": "/dn-maps/{dn-map-name}",
    "method": "getSingleDnMap",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "dn-map",
    "typeScriptTag": "dnMap",
    "description": "Returns a single DN Map",
    "parameters": [
      {
        "name": "dnMapName",
        "schema": "string",
        "required": true,
        "description": "Name of the DN Map",
        "example": "DN-MAP-NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The DN Map does not exist"
      }
    ]
  },
  {
    "url": "/dn-maps/{dn-map-name}",
    "method": "updateDnMapByName",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "dn-map",
    "typeScriptTag": "dnMap",
    "description": "Update an existing DN Map by name",
    "parameters": [
      {
        "name": "dnMapName",
        "schema": "string",
        "required": true,
        "description": "Name of the DN Map",
        "example": "DN-MAP-NAME"
      },
      {
        "name": "operations",
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
        "description": "Invalid request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The DN Map does not exist"
      }
    ]
  },
  {
    "url": "/change-subscription-handlers",
    "method": "listAllHandlers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "change-subscription-handler",
    "typeScriptTag": "changeSubscriptionHandler",
    "description": "Returns a list of all Change Subscription Handler objects",
    "parameters": [
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "SCIM filter"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      }
    ]
  },
  {
    "url": "/change-subscription-handlers",
    "method": "addNewHandler",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "change-subscription-handler",
    "typeScriptTag": "changeSubscriptionHandler",
    "description": "Add a new Change Subscription Handler to the config",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "409",
        "description": "The Change Subscription Handler already exists"
      }
    ]
  },
  {
    "url": "/change-subscription-handlers/{change-subscription-handler-name}",
    "method": "deleteHandler",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "change-subscription-handler",
    "typeScriptTag": "changeSubscriptionHandler",
    "description": "Delete a Change Subscription Handler",
    "parameters": [
      {
        "name": "changeSubscriptionHandlerName",
        "schema": "string",
        "required": true,
        "description": "Name of the Change Subscription Handler",
        "example": "CHANGE-SUBSCRIPTION-HANDLER-NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Successful operation"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Change Subscription Handler does not exist"
      },
      {
        "statusCode": "409",
        "description": "The Change Subscription Handler cannot be deleted"
      }
    ]
  },
  {
    "url": "/change-subscription-handlers/{change-subscription-handler-name}",
    "method": "getSingle",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "change-subscription-handler",
    "typeScriptTag": "changeSubscriptionHandler",
    "description": "Returns a single Change Subscription Handler",
    "parameters": [
      {
        "name": "changeSubscriptionHandlerName",
        "schema": "string",
        "required": true,
        "description": "Name of the Change Subscription Handler",
        "example": "CHANGE-SUBSCRIPTION-HANDLER-NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Change Subscription Handler does not exist"
      }
    ]
  },
  {
    "url": "/change-subscription-handlers/{change-subscription-handler-name}",
    "method": "updateByName",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "change-subscription-handler",
    "typeScriptTag": "changeSubscriptionHandler",
    "description": "Update an existing Change Subscription Handler by name",
    "parameters": [
      {
        "name": "changeSubscriptionHandlerName",
        "schema": "string",
        "required": true,
        "description": "Name of the Change Subscription Handler",
        "example": "CHANGE-SUBSCRIPTION-HANDLER-NAME"
      },
      {
        "name": "operations",
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
        "description": "Invalid request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Change Subscription Handler does not exist"
      }
    ]
  },
  {
    "url": "/obscured-values",
    "method": "listAllObjects",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "obscured-value",
    "typeScriptTag": "obscuredValue",
    "description": "Returns a list of all Obscured Value objects",
    "parameters": [
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "SCIM filter"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      }
    ]
  },
  {
    "url": "/obscured-values",
    "method": "addNewToConfig",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "obscured-value",
    "typeScriptTag": "obscuredValue",
    "description": "Add a new Obscured Value to the config",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "409",
        "description": "The Obscured Value already exists"
      }
    ]
  },
  {
    "url": "/obscured-values/{obscured-value-name}",
    "method": "deleteObscuredValue",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "obscured-value",
    "typeScriptTag": "obscuredValue",
    "description": "Delete a Obscured Value",
    "parameters": [
      {
        "name": "obscuredValueName",
        "schema": "string",
        "required": true,
        "description": "Name of the Obscured Value",
        "example": "OBSCURED-VALUE-NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Successful operation"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Obscured Value does not exist"
      },
      {
        "statusCode": "409",
        "description": "The Obscured Value cannot be deleted"
      }
    ]
  },
  {
    "url": "/obscured-values/{obscured-value-name}",
    "method": "getSingleValue",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "obscured-value",
    "typeScriptTag": "obscuredValue",
    "description": "Returns a single Obscured Value",
    "parameters": [
      {
        "name": "obscuredValueName",
        "schema": "string",
        "required": true,
        "description": "Name of the Obscured Value",
        "example": "OBSCURED-VALUE-NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Obscured Value does not exist"
      }
    ]
  },
  {
    "url": "/obscured-values/{obscured-value-name}",
    "method": "updateByName",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "obscured-value",
    "typeScriptTag": "obscuredValue",
    "description": "Update an existing Obscured Value by name",
    "parameters": [
      {
        "name": "obscuredValueName",
        "schema": "string",
        "required": true,
        "description": "Name of the Obscured Value",
        "example": "OBSCURED-VALUE-NAME"
      },
      {
        "name": "operations",
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
        "description": "Invalid request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Obscured Value does not exist"
      }
    ]
  },
  {
    "url": "/crypto-manager",
    "method": "getSingleCryptoManager",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "crypto-manager",
    "typeScriptTag": "cryptoManager",
    "description": "Returns a single Crypto Manager",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Crypto Manager does not exist"
      }
    ]
  },
  {
    "url": "/crypto-manager",
    "method": "updateByName",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "crypto-manager",
    "typeScriptTag": "cryptoManager",
    "description": "Update an existing Crypto Manager by name",
    "parameters": [
      {
        "name": "operations",
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
        "description": "Invalid request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Crypto Manager does not exist"
      }
    ]
  },
  {
    "url": "/monitor-providers",
    "method": "listObjects",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "monitor-provider",
    "typeScriptTag": "monitorProvider",
    "description": "Returns a list of all Monitor Provider objects",
    "parameters": [
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "SCIM filter"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      }
    ]
  },
  {
    "url": "/monitor-providers",
    "method": "addNewConfig",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "monitor-provider",
    "typeScriptTag": "monitorProvider",
    "description": "Add a new Monitor Provider to the config",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "409",
        "description": "The Monitor Provider already exists"
      }
    ]
  },
  {
    "url": "/monitor-providers/{monitor-provider-name}",
    "method": "deleteProvider",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "monitor-provider",
    "typeScriptTag": "monitorProvider",
    "description": "Delete a Monitor Provider",
    "parameters": [
      {
        "name": "monitorProviderName",
        "schema": "string",
        "required": true,
        "description": "Name of the Monitor Provider",
        "example": "MONITOR-PROVIDER-NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Successful operation"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Monitor Provider does not exist"
      },
      {
        "statusCode": "409",
        "description": "The Monitor Provider cannot be deleted"
      }
    ]
  },
  {
    "url": "/monitor-providers/{monitor-provider-name}",
    "method": "getSingleProvider",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "monitor-provider",
    "typeScriptTag": "monitorProvider",
    "description": "Returns a single Monitor Provider",
    "parameters": [
      {
        "name": "monitorProviderName",
        "schema": "string",
        "required": true,
        "description": "Name of the Monitor Provider",
        "example": "MONITOR-PROVIDER-NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Monitor Provider does not exist"
      }
    ]
  },
  {
    "url": "/monitor-providers/{monitor-provider-name}",
    "method": "updateByName",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "monitor-provider",
    "typeScriptTag": "monitorProvider",
    "description": "Update an existing Monitor Provider by name",
    "parameters": [
      {
        "name": "monitorProviderName",
        "schema": "string",
        "required": true,
        "description": "Name of the Monitor Provider",
        "example": "MONITOR-PROVIDER-NAME"
      },
      {
        "name": "operations",
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
        "description": "Invalid request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Monitor Provider does not exist"
      }
    ]
  },
  {
    "url": "/group-implementations",
    "method": "listAllObjects",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "group-implementation",
    "typeScriptTag": "groupImplementation",
    "description": "Returns a list of all Group Implementation objects",
    "parameters": [
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "SCIM filter"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      }
    ]
  },
  {
    "url": "/group-implementations/{group-implementation-name}",
    "method": "getSingle",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "group-implementation",
    "typeScriptTag": "groupImplementation",
    "description": "Returns a single Group Implementation",
    "parameters": [
      {
        "name": "groupImplementationName",
        "schema": "string",
        "required": true,
        "description": "Name of the Group Implementation",
        "example": "GROUP-IMPLEMENTATION-NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Group Implementation does not exist"
      }
    ]
  },
  {
    "url": "/group-implementations/{group-implementation-name}",
    "method": "updateByName",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "group-implementation",
    "typeScriptTag": "groupImplementation",
    "description": "Update an existing Group Implementation by name",
    "parameters": [
      {
        "name": "groupImplementationName",
        "schema": "string",
        "required": true,
        "description": "Name of the Group Implementation",
        "example": "GROUP-IMPLEMENTATION-NAME"
      },
      {
        "name": "operations",
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
        "description": "Invalid request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Group Implementation does not exist"
      }
    ]
  },
  {
    "url": "/gauge-data-sources",
    "method": "listAllGaugeDataSources",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "gauge-data-source",
    "typeScriptTag": "gaugeDataSource",
    "description": "Returns a list of all Gauge Data Source objects",
    "parameters": [
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "SCIM filter"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      }
    ]
  },
  {
    "url": "/gauge-data-sources",
    "method": "addNewDataSource",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "gauge-data-source",
    "typeScriptTag": "gaugeDataSource",
    "description": "Add a new Gauge Data Source to the config",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "409",
        "description": "The Gauge Data Source already exists"
      }
    ]
  },
  {
    "url": "/gauge-data-sources/{gauge-data-source-name}",
    "method": "deleteDataSource",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "gauge-data-source",
    "typeScriptTag": "gaugeDataSource",
    "description": "Delete a Gauge Data Source",
    "parameters": [
      {
        "name": "gaugeDataSourceName",
        "schema": "string",
        "required": true,
        "description": "Name of the Gauge Data Source",
        "example": "GAUGE-DATA-SOURCE-NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Successful operation"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Gauge Data Source does not exist"
      },
      {
        "statusCode": "409",
        "description": "The Gauge Data Source cannot be deleted"
      }
    ]
  },
  {
    "url": "/gauge-data-sources/{gauge-data-source-name}",
    "method": "getSingleGaugeDataSource",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "gauge-data-source",
    "typeScriptTag": "gaugeDataSource",
    "description": "Returns a single Gauge Data Source",
    "parameters": [
      {
        "name": "gaugeDataSourceName",
        "schema": "string",
        "required": true,
        "description": "Name of the Gauge Data Source",
        "example": "GAUGE-DATA-SOURCE-NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Gauge Data Source does not exist"
      }
    ]
  },
  {
    "url": "/gauge-data-sources/{gauge-data-source-name}",
    "method": "updateByName",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "gauge-data-source",
    "typeScriptTag": "gaugeDataSource",
    "description": "Update an existing Gauge Data Source by name",
    "parameters": [
      {
        "name": "gaugeDataSourceName",
        "schema": "string",
        "required": true,
        "description": "Name of the Gauge Data Source",
        "example": "GAUGE-DATA-SOURCE-NAME"
      },
      {
        "name": "operations",
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
        "description": "Invalid request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Gauge Data Source does not exist"
      }
    ]
  },
  {
    "url": "/backends",
    "method": "getAllObjects",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "backend",
    "typeScriptTag": "backend",
    "description": "Returns a list of all Backend objects",
    "parameters": [
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "SCIM filter"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      }
    ]
  },
  {
    "url": "/backends",
    "method": "createConfig",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "backend",
    "typeScriptTag": "backend",
    "description": "Add a new Backend to the config",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "409",
        "description": "The Backend already exists"
      }
    ]
  },
  {
    "url": "/backends/{backend-name}",
    "method": "deleteBackend",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "backend",
    "typeScriptTag": "backend",
    "description": "Delete a Backend",
    "parameters": [
      {
        "name": "backendName",
        "schema": "string",
        "required": true,
        "description": "Name of the Backend",
        "example": "BACKEND-NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Successful operation"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Backend does not exist"
      },
      {
        "statusCode": "409",
        "description": "The Backend cannot be deleted"
      }
    ]
  },
  {
    "url": "/backends/{backend-name}",
    "method": "getSingle",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "backend",
    "typeScriptTag": "backend",
    "description": "Returns a single Backend",
    "parameters": [
      {
        "name": "backendName",
        "schema": "string",
        "required": true,
        "description": "Name of the Backend",
        "example": "BACKEND-NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Backend does not exist"
      }
    ]
  },
  {
    "url": "/backends/{backend-name}",
    "method": "updateByName",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "backend",
    "typeScriptTag": "backend",
    "description": "Update an existing Backend by name",
    "parameters": [
      {
        "name": "backendName",
        "schema": "string",
        "required": true,
        "description": "Name of the Backend",
        "example": "BACKEND-NAME"
      },
      {
        "name": "operations",
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
        "description": "Invalid request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Backend does not exist"
      }
    ]
  },
  {
    "url": "/backends/{backend-name}/local-db-composite-indexes",
    "method": "listAllObjects",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "local-db-composite-index",
    "typeScriptTag": "localDbCompositeIndex",
    "description": "Returns a list of all Local DB Composite Index objects",
    "parameters": [
      {
        "name": "backendName",
        "schema": "string",
        "required": true,
        "description": "Name of the Backend",
        "example": "BACKEND-NAME"
      },
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "SCIM filter"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      }
    ]
  },
  {
    "url": "/backends/{backend-name}/local-db-composite-indexes",
    "method": "addNewIndex",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "local-db-composite-index",
    "typeScriptTag": "localDbCompositeIndex",
    "description": "Add a new Local DB Composite Index to the config",
    "parameters": [
      {
        "name": "backendName",
        "schema": "string",
        "required": true,
        "description": "Name of the Backend",
        "example": "BACKEND-NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "409",
        "description": "The Local DB Composite Index already exists"
      }
    ]
  },
  {
    "url": "/backends/{backend-name}/local-db-composite-indexes/{local-db-composite-index-name}",
    "method": "deleteCompositeIndex",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "local-db-composite-index",
    "typeScriptTag": "localDbCompositeIndex",
    "description": "Delete a Local DB Composite Index",
    "parameters": [
      {
        "name": "localDbCompositeIndexName",
        "schema": "string",
        "required": true,
        "description": "Name of the Local DB Composite Index",
        "example": "LOCAL-DB-COMPOSITE-INDEX-NAME"
      },
      {
        "name": "backendName",
        "schema": "string",
        "required": true,
        "description": "Name of the Backend",
        "example": "BACKEND-NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Successful operation"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Local DB Composite Index does not exist"
      },
      {
        "statusCode": "409",
        "description": "The Local DB Composite Index cannot be deleted"
      }
    ]
  },
  {
    "url": "/backends/{backend-name}/local-db-composite-indexes/{local-db-composite-index-name}",
    "method": "getSingle",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "local-db-composite-index",
    "typeScriptTag": "localDbCompositeIndex",
    "description": "Returns a single Local DB Composite Index",
    "parameters": [
      {
        "name": "localDbCompositeIndexName",
        "schema": "string",
        "required": true,
        "description": "Name of the Local DB Composite Index",
        "example": "LOCAL-DB-COMPOSITE-INDEX-NAME"
      },
      {
        "name": "backendName",
        "schema": "string",
        "required": true,
        "description": "Name of the Backend",
        "example": "BACKEND-NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Local DB Composite Index does not exist"
      }
    ]
  },
  {
    "url": "/backends/{backend-name}/local-db-composite-indexes/{local-db-composite-index-name}",
    "method": "updateByName",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "local-db-composite-index",
    "typeScriptTag": "localDbCompositeIndex",
    "description": "Update an existing Local DB Composite Index by name",
    "parameters": [
      {
        "name": "localDbCompositeIndexName",
        "schema": "string",
        "required": true,
        "description": "Name of the Local DB Composite Index",
        "example": "LOCAL-DB-COMPOSITE-INDEX-NAME"
      },
      {
        "name": "backendName",
        "schema": "string",
        "required": true,
        "description": "Name of the Backend",
        "example": "BACKEND-NAME"
      },
      {
        "name": "operations",
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
        "description": "Invalid request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Local DB Composite Index does not exist"
      }
    ]
  },
  {
    "url": "/backends/{backend-name}/local-db-vlv-indexes",
    "method": "listObjects",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "local-db-vlv-index",
    "typeScriptTag": "localDbVlvIndex",
    "description": "Returns a list of all Local DB VLV Index objects",
    "parameters": [
      {
        "name": "backendName",
        "schema": "string",
        "required": true,
        "description": "Name of the Backend",
        "example": "BACKEND-NAME"
      },
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "SCIM filter"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      }
    ]
  },
  {
    "url": "/backends/{backend-name}/local-db-vlv-indexes",
    "method": "addNewIndexToConfig",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "local-db-vlv-index",
    "typeScriptTag": "localDbVlvIndex",
    "description": "Add a new Local DB VLV Index to the config",
    "parameters": [
      {
        "name": "backendName",
        "schema": "string",
        "required": true,
        "description": "Name of the Backend",
        "example": "BACKEND-NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "409",
        "description": "The Local DB VLV Index already exists"
      }
    ]
  },
  {
    "url": "/backends/{backend-name}/local-db-vlv-indexes/{local-db-vlv-index-name}",
    "method": "delete",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "local-db-vlv-index",
    "typeScriptTag": "localDbVlvIndex",
    "description": "Delete a Local DB VLV Index",
    "parameters": [
      {
        "name": "localDbVlvIndexName",
        "schema": "string",
        "required": true,
        "description": "Name of the Local DB VLV Index",
        "example": "LOCAL-DB-VLV-INDEX-NAME"
      },
      {
        "name": "backendName",
        "schema": "string",
        "required": true,
        "description": "Name of the Backend",
        "example": "BACKEND-NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Successful operation"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Local DB VLV Index does not exist"
      },
      {
        "statusCode": "409",
        "description": "The Local DB VLV Index cannot be deleted"
      }
    ]
  },
  {
    "url": "/backends/{backend-name}/local-db-vlv-indexes/{local-db-vlv-index-name}",
    "method": "getSingle",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "local-db-vlv-index",
    "typeScriptTag": "localDbVlvIndex",
    "description": "Returns a single Local DB VLV Index",
    "parameters": [
      {
        "name": "localDbVlvIndexName",
        "schema": "string",
        "required": true,
        "description": "Name of the Local DB VLV Index",
        "example": "LOCAL-DB-VLV-INDEX-NAME"
      },
      {
        "name": "backendName",
        "schema": "string",
        "required": true,
        "description": "Name of the Backend",
        "example": "BACKEND-NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Local DB VLV Index does not exist"
      }
    ]
  },
  {
    "url": "/backends/{backend-name}/local-db-vlv-indexes/{local-db-vlv-index-name}",
    "method": "updateByName",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "local-db-vlv-index",
    "typeScriptTag": "localDbVlvIndex",
    "description": "Update an existing Local DB VLV Index by name",
    "parameters": [
      {
        "name": "localDbVlvIndexName",
        "schema": "string",
        "required": true,
        "description": "Name of the Local DB VLV Index",
        "example": "LOCAL-DB-VLV-INDEX-NAME"
      },
      {
        "name": "backendName",
        "schema": "string",
        "required": true,
        "description": "Name of the Backend",
        "example": "BACKEND-NAME"
      },
      {
        "name": "operations",
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
        "description": "Invalid request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Local DB VLV Index does not exist"
      }
    ]
  },
  {
    "url": "/backends/{backend-name}/local-db-indexes",
    "method": "getAllIndexes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "local-db-index",
    "typeScriptTag": "localDbIndex",
    "description": "Returns a list of all Local DB Index objects",
    "parameters": [
      {
        "name": "backendName",
        "schema": "string",
        "required": true,
        "description": "Name of the Backend",
        "example": "BACKEND-NAME"
      },
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "SCIM filter"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      }
    ]
  },
  {
    "url": "/backends/{backend-name}/local-db-indexes",
    "method": "addNewIndex",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "local-db-index",
    "typeScriptTag": "localDbIndex",
    "description": "Add a new Local DB Index to the config",
    "parameters": [
      {
        "name": "backendName",
        "schema": "string",
        "required": true,
        "description": "Name of the Backend",
        "example": "BACKEND-NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "409",
        "description": "The Local DB Index already exists"
      }
    ]
  },
  {
    "url": "/backends/{backend-name}/local-db-indexes/{local-db-index-name}",
    "method": "deleteIndex",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "local-db-index",
    "typeScriptTag": "localDbIndex",
    "description": "Delete a Local DB Index",
    "parameters": [
      {
        "name": "localDbIndexName",
        "schema": "string",
        "required": true,
        "description": "Name of the Local DB Index",
        "example": "LOCAL-DB-INDEX-NAME"
      },
      {
        "name": "backendName",
        "schema": "string",
        "required": true,
        "description": "Name of the Backend",
        "example": "BACKEND-NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Successful operation"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Local DB Index does not exist"
      },
      {
        "statusCode": "409",
        "description": "The Local DB Index cannot be deleted"
      }
    ]
  },
  {
    "url": "/backends/{backend-name}/local-db-indexes/{local-db-index-name}",
    "method": "getSingle",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "local-db-index",
    "typeScriptTag": "localDbIndex",
    "description": "Returns a single Local DB Index",
    "parameters": [
      {
        "name": "localDbIndexName",
        "schema": "string",
        "required": true,
        "description": "Name of the Local DB Index",
        "example": "LOCAL-DB-INDEX-NAME"
      },
      {
        "name": "backendName",
        "schema": "string",
        "required": true,
        "description": "Name of the Backend",
        "example": "BACKEND-NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Local DB Index does not exist"
      }
    ]
  },
  {
    "url": "/backends/{backend-name}/local-db-indexes/{local-db-index-name}",
    "method": "updateByName",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "local-db-index",
    "typeScriptTag": "localDbIndex",
    "description": "Update an existing Local DB Index by name",
    "parameters": [
      {
        "name": "localDbIndexName",
        "schema": "string",
        "required": true,
        "description": "Name of the Local DB Index",
        "example": "LOCAL-DB-INDEX-NAME"
      },
      {
        "name": "backendName",
        "schema": "string",
        "required": true,
        "description": "Name of the Backend",
        "example": "BACKEND-NAME"
      },
      {
        "name": "operations",
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
        "description": "Invalid request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Local DB Index does not exist"
      }
    ]
  },
  {
    "url": "/attribute-syntaxes",
    "method": "getAllObjects",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "attribute-syntax",
    "typeScriptTag": "attributeSyntax",
    "description": "Returns a list of all Attribute Syntax objects",
    "parameters": [
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "SCIM filter"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      }
    ]
  },
  {
    "url": "/attribute-syntaxes/{attribute-syntax-name}",
    "method": "getSingleAttributeSyntax",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "attribute-syntax",
    "typeScriptTag": "attributeSyntax",
    "description": "Returns a single Attribute Syntax",
    "parameters": [
      {
        "name": "attributeSyntaxName",
        "schema": "string",
        "required": true,
        "description": "Name of the Attribute Syntax",
        "example": "ATTRIBUTE-SYNTAX-NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Attribute Syntax does not exist"
      }
    ]
  },
  {
    "url": "/attribute-syntaxes/{attribute-syntax-name}",
    "method": "updateByName",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "attribute-syntax",
    "typeScriptTag": "attributeSyntax",
    "description": "Update an existing Attribute Syntax by name",
    "parameters": [
      {
        "name": "attributeSyntaxName",
        "schema": "string",
        "required": true,
        "description": "Name of the Attribute Syntax",
        "example": "ATTRIBUTE-SYNTAX-NAME"
      },
      {
        "name": "operations",
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
        "description": "Invalid request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Attribute Syntax does not exist"
      }
    ]
  },
  {
    "url": "/work-queue",
    "method": "getSingleWorkQueue",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "work-queue",
    "typeScriptTag": "workQueue",
    "description": "Returns a single Work Queue",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Work Queue does not exist"
      }
    ]
  },
  {
    "url": "/work-queue",
    "method": "updateByName",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "work-queue",
    "typeScriptTag": "workQueue",
    "description": "Update an existing Work Queue by name",
    "parameters": [
      {
        "name": "operations",
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
        "description": "Invalid request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Work Queue does not exist"
      }
    ]
  },
  {
    "url": "/uncached-entry-criteria",
    "method": "listObjects",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "uncached-entry-criteria",
    "typeScriptTag": "uncachedEntryCriteria",
    "description": "Returns a list of all Uncached Entry Criteria objects",
    "parameters": [
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "SCIM filter"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      }
    ]
  },
  {
    "url": "/uncached-entry-criteria",
    "method": "addNewCriteria",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "uncached-entry-criteria",
    "typeScriptTag": "uncachedEntryCriteria",
    "description": "Add a new Uncached Entry Criteria to the config",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "409",
        "description": "The Uncached Entry Criteria already exists"
      }
    ]
  },
  {
    "url": "/uncached-entry-criteria/{uncached-entry-criteria-name}",
    "method": "deleteUncachedEntry",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "uncached-entry-criteria",
    "typeScriptTag": "uncachedEntryCriteria",
    "description": "Delete a Uncached Entry Criteria",
    "parameters": [
      {
        "name": "uncachedEntryCriteriaName",
        "schema": "string",
        "required": true,
        "description": "Name of the Uncached Entry Criteria",
        "example": "UNCACHED-ENTRY-CRITERIA-NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Successful operation"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Uncached Entry Criteria does not exist"
      },
      {
        "statusCode": "409",
        "description": "The Uncached Entry Criteria cannot be deleted"
      }
    ]
  },
  {
    "url": "/uncached-entry-criteria/{uncached-entry-criteria-name}",
    "method": "getByName",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "uncached-entry-criteria",
    "typeScriptTag": "uncachedEntryCriteria",
    "description": "Returns a single Uncached Entry Criteria",
    "parameters": [
      {
        "name": "uncachedEntryCriteriaName",
        "schema": "string",
        "required": true,
        "description": "Name of the Uncached Entry Criteria",
        "example": "UNCACHED-ENTRY-CRITERIA-NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Uncached Entry Criteria does not exist"
      }
    ]
  },
  {
    "url": "/uncached-entry-criteria/{uncached-entry-criteria-name}",
    "method": "updateByName",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "uncached-entry-criteria",
    "typeScriptTag": "uncachedEntryCriteria",
    "description": "Update an existing Uncached Entry Criteria by name",
    "parameters": [
      {
        "name": "uncachedEntryCriteriaName",
        "schema": "string",
        "required": true,
        "description": "Name of the Uncached Entry Criteria",
        "example": "UNCACHED-ENTRY-CRITERIA-NAME"
      },
      {
        "name": "operations",
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
        "description": "Invalid request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Uncached Entry Criteria does not exist"
      }
    ]
  },
  {
    "url": "/http-servlet-extensions",
    "method": "listAllExtensions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "http-servlet-extension",
    "typeScriptTag": "httpServletExtension",
    "description": "Returns a list of all HTTP Servlet Extension objects",
    "parameters": [
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "SCIM filter"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      }
    ]
  },
  {
    "url": "/http-servlet-extensions",
    "method": "addNewExtension",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "http-servlet-extension",
    "typeScriptTag": "httpServletExtension",
    "description": "Add a new HTTP Servlet Extension to the config",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "409",
        "description": "The HTTP Servlet Extension already exists"
      }
    ]
  },
  {
    "url": "/http-servlet-extensions/{http-servlet-extension-name}",
    "method": "deleteHttpServletExtension",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "http-servlet-extension",
    "typeScriptTag": "httpServletExtension",
    "description": "Delete a HTTP Servlet Extension",
    "parameters": [
      {
        "name": "httpServletExtensionName",
        "schema": "string",
        "required": true,
        "description": "Name of the HTTP Servlet Extension",
        "example": "HTTP-SERVLET-EXTENSION-NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Successful operation"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The HTTP Servlet Extension does not exist"
      },
      {
        "statusCode": "409",
        "description": "The HTTP Servlet Extension cannot be deleted"
      }
    ]
  },
  {
    "url": "/http-servlet-extensions/{http-servlet-extension-name}",
    "method": "getSingleExtension",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "http-servlet-extension",
    "typeScriptTag": "httpServletExtension",
    "description": "Returns a single HTTP Servlet Extension",
    "parameters": [
      {
        "name": "httpServletExtensionName",
        "schema": "string",
        "required": true,
        "description": "Name of the HTTP Servlet Extension",
        "example": "HTTP-SERVLET-EXTENSION-NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The HTTP Servlet Extension does not exist"
      }
    ]
  },
  {
    "url": "/http-servlet-extensions/{http-servlet-extension-name}",
    "method": "updateByName",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "http-servlet-extension",
    "typeScriptTag": "httpServletExtension",
    "description": "Update an existing HTTP Servlet Extension by name",
    "parameters": [
      {
        "name": "httpServletExtensionName",
        "schema": "string",
        "required": true,
        "description": "Name of the HTTP Servlet Extension",
        "example": "HTTP-SERVLET-EXTENSION-NAME"
      },
      {
        "name": "operations",
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
        "description": "Invalid request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The HTTP Servlet Extension does not exist"
      }
    ]
  },
  {
    "url": "/http-servlet-extensions/{http-servlet-extension-name}/prometheus-monitor-attribute-metrics",
    "method": "listAllObjects",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "prometheus-monitor-attribute-metric",
    "typeScriptTag": "prometheusMonitorAttributeMetric",
    "description": "Returns a list of all Prometheus Monitor Attribute Metric objects",
    "parameters": [
      {
        "name": "httpServletExtensionName",
        "schema": "string",
        "required": true,
        "description": "Name of the HTTP Servlet Extension",
        "example": "HTTP-SERVLET-EXTENSION-NAME"
      },
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "SCIM filter"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      }
    ]
  },
  {
    "url": "/http-servlet-extensions/{http-servlet-extension-name}/prometheus-monitor-attribute-metrics",
    "method": "addNewMetricToConfig",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "prometheus-monitor-attribute-metric",
    "typeScriptTag": "prometheusMonitorAttributeMetric",
    "description": "Add a new Prometheus Monitor Attribute Metric to the config",
    "parameters": [
      {
        "name": "httpServletExtensionName",
        "schema": "string",
        "required": true,
        "description": "Name of the HTTP Servlet Extension",
        "example": "HTTP-SERVLET-EXTENSION-NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "409",
        "description": "The Prometheus Monitor Attribute Metric already exists"
      }
    ]
  },
  {
    "url": "/http-servlet-extensions/{http-servlet-extension-name}/prometheus-monitor-attribute-metrics/{prometheus-monitor-attribute-metric-name}",
    "method": "deleteMetric",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "prometheus-monitor-attribute-metric",
    "typeScriptTag": "prometheusMonitorAttributeMetric",
    "description": "Delete a Prometheus Monitor Attribute Metric",
    "parameters": [
      {
        "name": "prometheusMonitorAttributeMetricName",
        "schema": "string",
        "required": true,
        "description": "Name of the Prometheus Monitor Attribute Metric",
        "example": "PROMETHEUS-MONITOR-ATTRIBUTE-METRIC-NAME"
      },
      {
        "name": "httpServletExtensionName",
        "schema": "string",
        "required": true,
        "description": "Name of the HTTP Servlet Extension",
        "example": "HTTP-SERVLET-EXTENSION-NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Successful operation"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Prometheus Monitor Attribute Metric does not exist"
      },
      {
        "statusCode": "409",
        "description": "The Prometheus Monitor Attribute Metric cannot be deleted"
      }
    ]
  },
  {
    "url": "/http-servlet-extensions/{http-servlet-extension-name}/prometheus-monitor-attribute-metrics/{prometheus-monitor-attribute-metric-name}",
    "method": "getSingleMetric",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "prometheus-monitor-attribute-metric",
    "typeScriptTag": "prometheusMonitorAttributeMetric",
    "description": "Returns a single Prometheus Monitor Attribute Metric",
    "parameters": [
      {
        "name": "prometheusMonitorAttributeMetricName",
        "schema": "string",
        "required": true,
        "description": "Name of the Prometheus Monitor Attribute Metric",
        "example": "PROMETHEUS-MONITOR-ATTRIBUTE-METRIC-NAME"
      },
      {
        "name": "httpServletExtensionName",
        "schema": "string",
        "required": true,
        "description": "Name of the HTTP Servlet Extension",
        "example": "HTTP-SERVLET-EXTENSION-NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Prometheus Monitor Attribute Metric does not exist"
      }
    ]
  },
  {
    "url": "/http-servlet-extensions/{http-servlet-extension-name}/prometheus-monitor-attribute-metrics/{prometheus-monitor-attribute-metric-name}",
    "method": "updateByname",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "prometheus-monitor-attribute-metric",
    "typeScriptTag": "prometheusMonitorAttributeMetric",
    "description": "Update an existing Prometheus Monitor Attribute Metric by name",
    "parameters": [
      {
        "name": "prometheusMonitorAttributeMetricName",
        "schema": "string",
        "required": true,
        "description": "Name of the Prometheus Monitor Attribute Metric",
        "example": "PROMETHEUS-MONITOR-ATTRIBUTE-METRIC-NAME"
      },
      {
        "name": "httpServletExtensionName",
        "schema": "string",
        "required": true,
        "description": "Name of the HTTP Servlet Extension",
        "example": "HTTP-SERVLET-EXTENSION-NAME"
      },
      {
        "name": "operations",
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
        "description": "Invalid request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Prometheus Monitor Attribute Metric does not exist"
      }
    ]
  },
  {
    "url": "/http-servlet-extensions/{http-servlet-extension-name}/velocity-context-providers",
    "method": "listAllVelocityContextProviders",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "velocity-context-provider",
    "typeScriptTag": "velocityContextProvider",
    "description": "Returns a list of all Velocity Context Provider objects",
    "parameters": [
      {
        "name": "httpServletExtensionName",
        "schema": "string",
        "required": true,
        "description": "Name of the HTTP Servlet Extension",
        "example": "HTTP-SERVLET-EXTENSION-NAME"
      },
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "SCIM filter"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      }
    ]
  },
  {
    "url": "/http-servlet-extensions/{http-servlet-extension-name}/velocity-context-providers",
    "method": "addNewProviderToConfig",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "velocity-context-provider",
    "typeScriptTag": "velocityContextProvider",
    "description": "Add a new Velocity Context Provider to the config",
    "parameters": [
      {
        "name": "httpServletExtensionName",
        "schema": "string",
        "required": true,
        "description": "Name of the HTTP Servlet Extension",
        "example": "HTTP-SERVLET-EXTENSION-NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "409",
        "description": "The Velocity Context Provider already exists"
      }
    ]
  },
  {
    "url": "/http-servlet-extensions/{http-servlet-extension-name}/velocity-context-providers/{velocity-context-provider-name}",
    "method": "deleteVelocityContextProvider",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "velocity-context-provider",
    "typeScriptTag": "velocityContextProvider",
    "description": "Delete a Velocity Context Provider",
    "parameters": [
      {
        "name": "velocityContextProviderName",
        "schema": "string",
        "required": true,
        "description": "Name of the Velocity Context Provider",
        "example": "VELOCITY-CONTEXT-PROVIDER-NAME"
      },
      {
        "name": "httpServletExtensionName",
        "schema": "string",
        "required": true,
        "description": "Name of the HTTP Servlet Extension",
        "example": "HTTP-SERVLET-EXTENSION-NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Successful operation"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Velocity Context Provider does not exist"
      },
      {
        "statusCode": "409",
        "description": "The Velocity Context Provider cannot be deleted"
      }
    ]
  },
  {
    "url": "/http-servlet-extensions/{http-servlet-extension-name}/velocity-context-providers/{velocity-context-provider-name}",
    "method": "getSingleVelocityContextProvider",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "velocity-context-provider",
    "typeScriptTag": "velocityContextProvider",
    "description": "Returns a single Velocity Context Provider",
    "parameters": [
      {
        "name": "velocityContextProviderName",
        "schema": "string",
        "required": true,
        "description": "Name of the Velocity Context Provider",
        "example": "VELOCITY-CONTEXT-PROVIDER-NAME"
      },
      {
        "name": "httpServletExtensionName",
        "schema": "string",
        "required": true,
        "description": "Name of the HTTP Servlet Extension",
        "example": "HTTP-SERVLET-EXTENSION-NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Velocity Context Provider does not exist"
      }
    ]
  },
  {
    "url": "/http-servlet-extensions/{http-servlet-extension-name}/velocity-context-providers/{velocity-context-provider-name}",
    "method": "updateBynameVelocityContextProvider",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "velocity-context-provider",
    "typeScriptTag": "velocityContextProvider",
    "description": "Update an existing Velocity Context Provider by name",
    "parameters": [
      {
        "name": "velocityContextProviderName",
        "schema": "string",
        "required": true,
        "description": "Name of the Velocity Context Provider",
        "example": "VELOCITY-CONTEXT-PROVIDER-NAME"
      },
      {
        "name": "httpServletExtensionName",
        "schema": "string",
        "required": true,
        "description": "Name of the HTTP Servlet Extension",
        "example": "HTTP-SERVLET-EXTENSION-NAME"
      },
      {
        "name": "operations",
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
        "description": "Invalid request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Velocity Context Provider does not exist"
      }
    ]
  },
  {
    "url": "/http-servlet-extensions/{http-servlet-extension-name}/velocity-template-loaders",
    "method": "getAllTemplateLoaders",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "velocity-template-loader",
    "typeScriptTag": "velocityTemplateLoader",
    "description": "Returns a list of all Velocity Template Loader objects",
    "parameters": [
      {
        "name": "httpServletExtensionName",
        "schema": "string",
        "required": true,
        "description": "Name of the HTTP Servlet Extension",
        "example": "HTTP-SERVLET-EXTENSION-NAME"
      },
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "SCIM filter"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      }
    ]
  },
  {
    "url": "/http-servlet-extensions/{http-servlet-extension-name}/velocity-template-loaders",
    "method": "addNewLoaderToConfig",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "velocity-template-loader",
    "typeScriptTag": "velocityTemplateLoader",
    "description": "Add a new Velocity Template Loader to the config",
    "parameters": [
      {
        "name": "httpServletExtensionName",
        "schema": "string",
        "required": true,
        "description": "Name of the HTTP Servlet Extension",
        "example": "HTTP-SERVLET-EXTENSION-NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "409",
        "description": "The Velocity Template Loader already exists"
      }
    ]
  },
  {
    "url": "/http-servlet-extensions/{http-servlet-extension-name}/velocity-template-loaders/{velocity-template-loader-name}",
    "method": "deleteLoader",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "velocity-template-loader",
    "typeScriptTag": "velocityTemplateLoader",
    "description": "Delete a Velocity Template Loader",
    "parameters": [
      {
        "name": "velocityTemplateLoaderName",
        "schema": "string",
        "required": true,
        "description": "Name of the Velocity Template Loader",
        "example": "VELOCITY-TEMPLATE-LOADER-NAME"
      },
      {
        "name": "httpServletExtensionName",
        "schema": "string",
        "required": true,
        "description": "Name of the HTTP Servlet Extension",
        "example": "HTTP-SERVLET-EXTENSION-NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Successful operation"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Velocity Template Loader does not exist"
      },
      {
        "statusCode": "409",
        "description": "The Velocity Template Loader cannot be deleted"
      }
    ]
  },
  {
    "url": "/http-servlet-extensions/{http-servlet-extension-name}/velocity-template-loaders/{velocity-template-loader-name}",
    "method": "getSingleLoader",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "velocity-template-loader",
    "typeScriptTag": "velocityTemplateLoader",
    "description": "Returns a single Velocity Template Loader",
    "parameters": [
      {
        "name": "velocityTemplateLoaderName",
        "schema": "string",
        "required": true,
        "description": "Name of the Velocity Template Loader",
        "example": "VELOCITY-TEMPLATE-LOADER-NAME"
      },
      {
        "name": "httpServletExtensionName",
        "schema": "string",
        "required": true,
        "description": "Name of the HTTP Servlet Extension",
        "example": "HTTP-SERVLET-EXTENSION-NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Velocity Template Loader does not exist"
      }
    ]
  },
  {
    "url": "/http-servlet-extensions/{http-servlet-extension-name}/velocity-template-loaders/{velocity-template-loader-name}",
    "method": "updateByName",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "velocity-template-loader",
    "typeScriptTag": "velocityTemplateLoader",
    "description": "Update an existing Velocity Template Loader by name",
    "parameters": [
      {
        "name": "velocityTemplateLoaderName",
        "schema": "string",
        "required": true,
        "description": "Name of the Velocity Template Loader",
        "example": "VELOCITY-TEMPLATE-LOADER-NAME"
      },
      {
        "name": "httpServletExtensionName",
        "schema": "string",
        "required": true,
        "description": "Name of the HTTP Servlet Extension",
        "example": "HTTP-SERVLET-EXTENSION-NAME"
      },
      {
        "name": "operations",
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
        "description": "Invalid request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Velocity Template Loader does not exist"
      }
    ]
  },
  {
    "url": "/client-connection-policies",
    "method": "getAllObjects",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "client-connection-policy",
    "typeScriptTag": "clientConnectionPolicy",
    "description": "Returns a list of all Client Connection Policy objects",
    "parameters": [
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "SCIM filter"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      }
    ]
  },
  {
    "url": "/client-connection-policies",
    "method": "addNewPolicy",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "client-connection-policy",
    "typeScriptTag": "clientConnectionPolicy",
    "description": "Add a new Client Connection Policy to the config",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "409",
        "description": "The Client Connection Policy already exists"
      }
    ]
  },
  {
    "url": "/client-connection-policies/{client-connection-policy-name}",
    "method": "deleteById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "client-connection-policy",
    "typeScriptTag": "clientConnectionPolicy",
    "description": "Delete a Client Connection Policy",
    "parameters": [
      {
        "name": "clientConnectionPolicyName",
        "schema": "string",
        "required": true,
        "description": "Name of the Client Connection Policy",
        "example": "CLIENT-CONNECTION-POLICY-NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Successful operation"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Client Connection Policy does not exist"
      },
      {
        "statusCode": "409",
        "description": "The Client Connection Policy cannot be deleted"
      }
    ]
  },
  {
    "url": "/client-connection-policies/{client-connection-policy-name}",
    "method": "getSingle",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "client-connection-policy",
    "typeScriptTag": "clientConnectionPolicy",
    "description": "Returns a single Client Connection Policy",
    "parameters": [
      {
        "name": "clientConnectionPolicyName",
        "schema": "string",
        "required": true,
        "description": "Name of the Client Connection Policy",
        "example": "CLIENT-CONNECTION-POLICY-NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Client Connection Policy does not exist"
      }
    ]
  },
  {
    "url": "/client-connection-policies/{client-connection-policy-name}",
    "method": "updateByName",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "client-connection-policy",
    "typeScriptTag": "clientConnectionPolicy",
    "description": "Update an existing Client Connection Policy by name",
    "parameters": [
      {
        "name": "clientConnectionPolicyName",
        "schema": "string",
        "required": true,
        "description": "Name of the Client Connection Policy",
        "example": "CLIENT-CONNECTION-POLICY-NAME"
      },
      {
        "name": "operations",
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
        "description": "Invalid request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Client Connection Policy does not exist"
      }
    ]
  },
  {
    "url": "/matching-rules",
    "method": "listMatchingRules",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "matching-rule",
    "typeScriptTag": "matchingRule",
    "description": "Returns a list of all Matching Rule objects",
    "parameters": [
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "SCIM filter"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      }
    ]
  },
  {
    "url": "/matching-rules/{matching-rule-name}",
    "method": "getSingleMatchingRule",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "matching-rule",
    "typeScriptTag": "matchingRule",
    "description": "Returns a single Matching Rule",
    "parameters": [
      {
        "name": "matchingRuleName",
        "schema": "string",
        "required": true,
        "description": "Name of the Matching Rule",
        "example": "MATCHING-RULE-NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Matching Rule does not exist"
      }
    ]
  },
  {
    "url": "/matching-rules/{matching-rule-name}",
    "method": "updateByName",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "matching-rule",
    "typeScriptTag": "matchingRule",
    "description": "Update an existing Matching Rule by name",
    "parameters": [
      {
        "name": "matchingRuleName",
        "schema": "string",
        "required": true,
        "description": "Name of the Matching Rule",
        "example": "MATCHING-RULE-NAME"
      },
      {
        "name": "operations",
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
        "description": "Invalid request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Matching Rule does not exist"
      }
    ]
  },
  {
    "url": "/virtual-attributes",
    "method": "getAllObjects",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "virtual-attribute",
    "typeScriptTag": "virtualAttribute",
    "description": "Returns a list of all Virtual Attribute objects",
    "parameters": [
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "SCIM filter"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      }
    ]
  },
  {
    "url": "/virtual-attributes",
    "method": "addNewToConfig",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "virtual-attribute",
    "typeScriptTag": "virtualAttribute",
    "description": "Add a new Virtual Attribute to the config",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "409",
        "description": "The Virtual Attribute already exists"
      }
    ]
  },
  {
    "url": "/virtual-attributes/{virtual-attribute-name}",
    "method": "deleteVirtualAttribute",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "virtual-attribute",
    "typeScriptTag": "virtualAttribute",
    "description": "Delete a Virtual Attribute",
    "parameters": [
      {
        "name": "virtualAttributeName",
        "schema": "string",
        "required": true,
        "description": "Name of the Virtual Attribute",
        "example": "VIRTUAL-ATTRIBUTE-NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Successful operation"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Virtual Attribute does not exist"
      },
      {
        "statusCode": "409",
        "description": "The Virtual Attribute cannot be deleted"
      }
    ]
  },
  {
    "url": "/virtual-attributes/{virtual-attribute-name}",
    "method": "getSingle",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "virtual-attribute",
    "typeScriptTag": "virtualAttribute",
    "description": "Returns a single Virtual Attribute",
    "parameters": [
      {
        "name": "virtualAttributeName",
        "schema": "string",
        "required": true,
        "description": "Name of the Virtual Attribute",
        "example": "VIRTUAL-ATTRIBUTE-NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Virtual Attribute does not exist"
      }
    ]
  },
  {
    "url": "/virtual-attributes/{virtual-attribute-name}",
    "method": "updateByName",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "virtual-attribute",
    "typeScriptTag": "virtualAttribute",
    "description": "Update an existing Virtual Attribute by name",
    "parameters": [
      {
        "name": "virtualAttributeName",
        "schema": "string",
        "required": true,
        "description": "Name of the Virtual Attribute",
        "example": "VIRTUAL-ATTRIBUTE-NAME"
      },
      {
        "name": "operations",
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
        "description": "Invalid request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Virtual Attribute does not exist"
      }
    ]
  },
  {
    "url": "/notification-managers",
    "method": "listAllObjects",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "notification-manager",
    "typeScriptTag": "notificationManager",
    "description": "Returns a list of all Notification Manager objects",
    "parameters": [
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "SCIM filter"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      }
    ]
  },
  {
    "url": "/notification-managers",
    "method": "addNewConfig",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "notification-manager",
    "typeScriptTag": "notificationManager",
    "description": "Add a new Notification Manager to the config",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "409",
        "description": "The Notification Manager already exists"
      }
    ]
  },
  {
    "url": "/notification-managers/{notification-manager-name}",
    "method": "deleteNotificationManager",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "notification-manager",
    "typeScriptTag": "notificationManager",
    "description": "Delete a Notification Manager",
    "parameters": [
      {
        "name": "notificationManagerName",
        "schema": "string",
        "required": true,
        "description": "Name of the Notification Manager",
        "example": "NOTIFICATION-MANAGER-NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Successful operation"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Notification Manager does not exist"
      },
      {
        "statusCode": "409",
        "description": "The Notification Manager cannot be deleted"
      }
    ]
  },
  {
    "url": "/notification-managers/{notification-manager-name}",
    "method": "getSingle",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "notification-manager",
    "typeScriptTag": "notificationManager",
    "description": "Returns a single Notification Manager",
    "parameters": [
      {
        "name": "notificationManagerName",
        "schema": "string",
        "required": true,
        "description": "Name of the Notification Manager",
        "example": "NOTIFICATION-MANAGER-NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Notification Manager does not exist"
      }
    ]
  },
  {
    "url": "/notification-managers/{notification-manager-name}",
    "method": "updateByName",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "notification-manager",
    "typeScriptTag": "notificationManager",
    "description": "Update an existing Notification Manager by name",
    "parameters": [
      {
        "name": "notificationManagerName",
        "schema": "string",
        "required": true,
        "description": "Name of the Notification Manager",
        "example": "NOTIFICATION-MANAGER-NAME"
      },
      {
        "name": "operations",
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
        "description": "Invalid request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Notification Manager does not exist"
      }
    ]
  },
  {
    "url": "/result-criteria",
    "method": "listAllObjects",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "result-criteria",
    "typeScriptTag": "resultCriteria",
    "description": "Returns a list of all Result Criteria objects",
    "parameters": [
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "SCIM filter"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      }
    ]
  },
  {
    "url": "/result-criteria",
    "method": "addNewCriteria",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "result-criteria",
    "typeScriptTag": "resultCriteria",
    "description": "Add a new Result Criteria to the config",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "409",
        "description": "The Result Criteria already exists"
      }
    ]
  },
  {
    "url": "/result-criteria/{result-criteria-name}",
    "method": "deleteCriteria",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "result-criteria",
    "typeScriptTag": "resultCriteria",
    "description": "Delete a Result Criteria",
    "parameters": [
      {
        "name": "resultCriteriaName",
        "schema": "string",
        "required": true,
        "description": "Name of the Result Criteria",
        "example": "RESULT-CRITERIA-NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Successful operation"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Result Criteria does not exist"
      },
      {
        "statusCode": "409",
        "description": "The Result Criteria cannot be deleted"
      }
    ]
  },
  {
    "url": "/result-criteria/{result-criteria-name}",
    "method": "getSingleResultCriteria",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "result-criteria",
    "typeScriptTag": "resultCriteria",
    "description": "Returns a single Result Criteria",
    "parameters": [
      {
        "name": "resultCriteriaName",
        "schema": "string",
        "required": true,
        "description": "Name of the Result Criteria",
        "example": "RESULT-CRITERIA-NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Result Criteria does not exist"
      }
    ]
  },
  {
    "url": "/result-criteria/{result-criteria-name}",
    "method": "updateByName",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "result-criteria",
    "typeScriptTag": "resultCriteria",
    "description": "Update an existing Result Criteria by name",
    "parameters": [
      {
        "name": "resultCriteriaName",
        "schema": "string",
        "required": true,
        "description": "Name of the Result Criteria",
        "example": "RESULT-CRITERIA-NAME"
      },
      {
        "name": "operations",
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
        "description": "Invalid request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Result Criteria does not exist"
      }
    ]
  },
  {
    "url": "/identity-mappers",
    "method": "getAllObjects",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "identity-mapper",
    "typeScriptTag": "identityMapper",
    "description": "Returns a list of all Identity Mapper objects",
    "parameters": [
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "SCIM filter"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      }
    ]
  },
  {
    "url": "/identity-mappers",
    "method": "addNewIdentityMapper",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "identity-mapper",
    "typeScriptTag": "identityMapper",
    "description": "Add a new Identity Mapper to the config",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "409",
        "description": "The Identity Mapper already exists"
      }
    ]
  },
  {
    "url": "/identity-mappers/{identity-mapper-name}",
    "method": "deleteIdentityMapper",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "identity-mapper",
    "typeScriptTag": "identityMapper",
    "description": "Delete a Identity Mapper",
    "parameters": [
      {
        "name": "identityMapperName",
        "schema": "string",
        "required": true,
        "description": "Name of the Identity Mapper",
        "example": "IDENTITY-MAPPER-NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Successful operation"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Identity Mapper does not exist"
      },
      {
        "statusCode": "409",
        "description": "The Identity Mapper cannot be deleted"
      }
    ]
  },
  {
    "url": "/identity-mappers/{identity-mapper-name}",
    "method": "getSingleMapper",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "identity-mapper",
    "typeScriptTag": "identityMapper",
    "description": "Returns a single Identity Mapper",
    "parameters": [
      {
        "name": "identityMapperName",
        "schema": "string",
        "required": true,
        "description": "Name of the Identity Mapper",
        "example": "IDENTITY-MAPPER-NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Identity Mapper does not exist"
      }
    ]
  },
  {
    "url": "/identity-mappers/{identity-mapper-name}",
    "method": "updateByName",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "identity-mapper",
    "typeScriptTag": "identityMapper",
    "description": "Update an existing Identity Mapper by name",
    "parameters": [
      {
        "name": "identityMapperName",
        "schema": "string",
        "required": true,
        "description": "Name of the Identity Mapper",
        "example": "IDENTITY-MAPPER-NAME"
      },
      {
        "name": "operations",
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
        "description": "Invalid request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Identity Mapper does not exist"
      }
    ]
  },
  {
    "url": "/recurring-tasks",
    "method": "listObjects",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "recurring-task",
    "typeScriptTag": "recurringTask",
    "description": "Returns a list of all Recurring Task objects",
    "parameters": [
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "SCIM filter"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      }
    ]
  },
  {
    "url": "/recurring-tasks",
    "method": "addNewConfig",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "recurring-task",
    "typeScriptTag": "recurringTask",
    "description": "Add a new Recurring Task to the config",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "409",
        "description": "The Recurring Task already exists"
      }
    ]
  },
  {
    "url": "/recurring-tasks/{recurring-task-name}",
    "method": "deleteRecurringTask",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "recurring-task",
    "typeScriptTag": "recurringTask",
    "description": "Delete a Recurring Task",
    "parameters": [
      {
        "name": "recurringTaskName",
        "schema": "string",
        "required": true,
        "description": "Name of the Recurring Task",
        "example": "RECURRING-TASK-NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Successful operation"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Recurring Task does not exist"
      },
      {
        "statusCode": "409",
        "description": "The Recurring Task cannot be deleted"
      }
    ]
  },
  {
    "url": "/recurring-tasks/{recurring-task-name}",
    "method": "getSingleTask",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "recurring-task",
    "typeScriptTag": "recurringTask",
    "description": "Returns a single Recurring Task",
    "parameters": [
      {
        "name": "recurringTaskName",
        "schema": "string",
        "required": true,
        "description": "Name of the Recurring Task",
        "example": "RECURRING-TASK-NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Recurring Task does not exist"
      }
    ]
  },
  {
    "url": "/recurring-tasks/{recurring-task-name}",
    "method": "updateByName",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "recurring-task",
    "typeScriptTag": "recurringTask",
    "description": "Update an existing Recurring Task by name",
    "parameters": [
      {
        "name": "recurringTaskName",
        "schema": "string",
        "required": true,
        "description": "Name of the Recurring Task",
        "example": "RECURRING-TASK-NAME"
      },
      {
        "name": "operations",
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
        "description": "Invalid request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Recurring Task does not exist"
      }
    ]
  },
  {
    "url": "/rest-resource-types",
    "method": "listAllObjects",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "rest-resource-type",
    "typeScriptTag": "restResourceType",
    "description": "Returns a list of all REST Resource Type objects",
    "parameters": [
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "SCIM filter"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      }
    ]
  },
  {
    "url": "/rest-resource-types",
    "method": "addNewType",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "rest-resource-type",
    "typeScriptTag": "restResourceType",
    "description": "Add a new REST Resource Type to the config",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "409",
        "description": "The REST Resource Type already exists"
      }
    ]
  },
  {
    "url": "/rest-resource-types/{rest-resource-type-name}",
    "method": "deleteRestResourceType",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "rest-resource-type",
    "typeScriptTag": "restResourceType",
    "description": "Delete a REST Resource Type",
    "parameters": [
      {
        "name": "restResourceTypeName",
        "schema": "string",
        "required": true,
        "description": "Name of the REST Resource Type",
        "example": "REST-RESOURCE-TYPE-NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Successful operation"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The REST Resource Type does not exist"
      },
      {
        "statusCode": "409",
        "description": "The REST Resource Type cannot be deleted"
      }
    ]
  },
  {
    "url": "/rest-resource-types/{rest-resource-type-name}",
    "method": "getSingleResourceType",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "rest-resource-type",
    "typeScriptTag": "restResourceType",
    "description": "Returns a single REST Resource Type",
    "parameters": [
      {
        "name": "restResourceTypeName",
        "schema": "string",
        "required": true,
        "description": "Name of the REST Resource Type",
        "example": "REST-RESOURCE-TYPE-NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The REST Resource Type does not exist"
      }
    ]
  },
  {
    "url": "/rest-resource-types/{rest-resource-type-name}",
    "method": "updateByName",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "rest-resource-type",
    "typeScriptTag": "restResourceType",
    "description": "Update an existing REST Resource Type by name",
    "parameters": [
      {
        "name": "restResourceTypeName",
        "schema": "string",
        "required": true,
        "description": "Name of the REST Resource Type",
        "example": "REST-RESOURCE-TYPE-NAME"
      },
      {
        "name": "operations",
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
        "description": "Invalid request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The REST Resource Type does not exist"
      }
    ]
  },
  {
    "url": "/rest-resource-types/{rest-resource-type-name}/delegated-admin-attributes",
    "method": "getListOfDelegatedAdminAttributes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "delegated-admin-attribute",
    "typeScriptTag": "delegatedAdminAttribute",
    "description": "Returns a list of all Delegated Admin Attribute objects",
    "parameters": [
      {
        "name": "restResourceTypeName",
        "schema": "string",
        "required": true,
        "description": "Name of the REST Resource Type",
        "example": "REST-RESOURCE-TYPE-NAME"
      },
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "SCIM filter"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      }
    ]
  },
  {
    "url": "/rest-resource-types/{rest-resource-type-name}/delegated-admin-attributes",
    "method": "addNewConfig",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "delegated-admin-attribute",
    "typeScriptTag": "delegatedAdminAttribute",
    "description": "Add a new Delegated Admin Attribute to the config",
    "parameters": [
      {
        "name": "restResourceTypeName",
        "schema": "string",
        "required": true,
        "description": "Name of the REST Resource Type",
        "example": "REST-RESOURCE-TYPE-NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "409",
        "description": "The Delegated Admin Attribute already exists"
      }
    ]
  },
  {
    "url": "/rest-resource-types/{rest-resource-type-name}/delegated-admin-attributes/{delegated-admin-attribute-name}",
    "method": "deleteDelegatedAdminAttribute",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "delegated-admin-attribute",
    "typeScriptTag": "delegatedAdminAttribute",
    "description": "Delete a Delegated Admin Attribute",
    "parameters": [
      {
        "name": "delegatedAdminAttributeName",
        "schema": "string",
        "required": true,
        "description": "Name of the Delegated Admin Attribute",
        "example": "DELEGATED-ADMIN-ATTRIBUTE-NAME"
      },
      {
        "name": "restResourceTypeName",
        "schema": "string",
        "required": true,
        "description": "Name of the REST Resource Type",
        "example": "REST-RESOURCE-TYPE-NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Successful operation"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Delegated Admin Attribute does not exist"
      },
      {
        "statusCode": "409",
        "description": "The Delegated Admin Attribute cannot be deleted"
      }
    ]
  },
  {
    "url": "/rest-resource-types/{rest-resource-type-name}/delegated-admin-attributes/{delegated-admin-attribute-name}",
    "method": "getSingle",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "delegated-admin-attribute",
    "typeScriptTag": "delegatedAdminAttribute",
    "description": "Returns a single Delegated Admin Attribute",
    "parameters": [
      {
        "name": "delegatedAdminAttributeName",
        "schema": "string",
        "required": true,
        "description": "Name of the Delegated Admin Attribute",
        "example": "DELEGATED-ADMIN-ATTRIBUTE-NAME"
      },
      {
        "name": "restResourceTypeName",
        "schema": "string",
        "required": true,
        "description": "Name of the REST Resource Type",
        "example": "REST-RESOURCE-TYPE-NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Delegated Admin Attribute does not exist"
      }
    ]
  },
  {
    "url": "/rest-resource-types/{rest-resource-type-name}/delegated-admin-attributes/{delegated-admin-attribute-name}",
    "method": "updateByName",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "delegated-admin-attribute",
    "typeScriptTag": "delegatedAdminAttribute",
    "description": "Update an existing Delegated Admin Attribute by name",
    "parameters": [
      {
        "name": "delegatedAdminAttributeName",
        "schema": "string",
        "required": true,
        "description": "Name of the Delegated Admin Attribute",
        "example": "DELEGATED-ADMIN-ATTRIBUTE-NAME"
      },
      {
        "name": "restResourceTypeName",
        "schema": "string",
        "required": true,
        "description": "Name of the REST Resource Type",
        "example": "REST-RESOURCE-TYPE-NAME"
      },
      {
        "name": "operations",
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
        "description": "Invalid request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Delegated Admin Attribute does not exist"
      }
    ]
  },
  {
    "url": "/rest-resource-types/{rest-resource-type-name}/delegated-admin-correlated-rest-resources",
    "method": "listAllObjects",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "delegated-admin-correlated-rest-resource",
    "typeScriptTag": "delegatedAdminCorrelatedRestResource",
    "description": "Returns a list of all Delegated Admin Correlated REST Resource objects",
    "parameters": [
      {
        "name": "restResourceTypeName",
        "schema": "string",
        "required": true,
        "description": "Name of the REST Resource Type",
        "example": "REST-RESOURCE-TYPE-NAME"
      },
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "SCIM filter"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      }
    ]
  },
  {
    "url": "/rest-resource-types/{rest-resource-type-name}/delegated-admin-correlated-rest-resources",
    "method": "addNewToConfig",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "delegated-admin-correlated-rest-resource",
    "typeScriptTag": "delegatedAdminCorrelatedRestResource",
    "description": "Add a new Delegated Admin Correlated REST Resource to the config",
    "parameters": [
      {
        "name": "restResourceTypeName",
        "schema": "string",
        "required": true,
        "description": "Name of the REST Resource Type",
        "example": "REST-RESOURCE-TYPE-NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "409",
        "description": "The Delegated Admin Correlated REST Resource already exists"
      }
    ]
  },
  {
    "url": "/rest-resource-types/{rest-resource-type-name}/delegated-admin-correlated-rest-resources/{delegated-admin-correlated-rest-resource-name}",
    "method": "deleteResource",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "delegated-admin-correlated-rest-resource",
    "typeScriptTag": "delegatedAdminCorrelatedRestResource",
    "description": "Delete a Delegated Admin Correlated REST Resource",
    "parameters": [
      {
        "name": "delegatedAdminCorrelatedRestResourceName",
        "schema": "string",
        "required": true,
        "description": "Name of the Delegated Admin Correlated REST Resource",
        "example": "DELEGATED-ADMIN-CORRELATED-REST-RESOURCE-NAME"
      },
      {
        "name": "restResourceTypeName",
        "schema": "string",
        "required": true,
        "description": "Name of the REST Resource Type",
        "example": "REST-RESOURCE-TYPE-NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Successful operation"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Delegated Admin Correlated REST Resource does not exist"
      },
      {
        "statusCode": "409",
        "description": "The Delegated Admin Correlated REST Resource cannot be deleted"
      }
    ]
  },
  {
    "url": "/rest-resource-types/{rest-resource-type-name}/delegated-admin-correlated-rest-resources/{delegated-admin-correlated-rest-resource-name}",
    "method": "getSingleCorrelated",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "delegated-admin-correlated-rest-resource",
    "typeScriptTag": "delegatedAdminCorrelatedRestResource",
    "description": "Returns a single Delegated Admin Correlated REST Resource",
    "parameters": [
      {
        "name": "delegatedAdminCorrelatedRestResourceName",
        "schema": "string",
        "required": true,
        "description": "Name of the Delegated Admin Correlated REST Resource",
        "example": "DELEGATED-ADMIN-CORRELATED-REST-RESOURCE-NAME"
      },
      {
        "name": "restResourceTypeName",
        "schema": "string",
        "required": true,
        "description": "Name of the REST Resource Type",
        "example": "REST-RESOURCE-TYPE-NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Delegated Admin Correlated REST Resource does not exist"
      }
    ]
  },
  {
    "url": "/rest-resource-types/{rest-resource-type-name}/delegated-admin-correlated-rest-resources/{delegated-admin-correlated-rest-resource-name}",
    "method": "updateByName",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "delegated-admin-correlated-rest-resource",
    "typeScriptTag": "delegatedAdminCorrelatedRestResource",
    "description": "Update an existing Delegated Admin Correlated REST Resource by name",
    "parameters": [
      {
        "name": "delegatedAdminCorrelatedRestResourceName",
        "schema": "string",
        "required": true,
        "description": "Name of the Delegated Admin Correlated REST Resource",
        "example": "DELEGATED-ADMIN-CORRELATED-REST-RESOURCE-NAME"
      },
      {
        "name": "restResourceTypeName",
        "schema": "string",
        "required": true,
        "description": "Name of the REST Resource Type",
        "example": "REST-RESOURCE-TYPE-NAME"
      },
      {
        "name": "operations",
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
        "description": "Invalid request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Delegated Admin Correlated REST Resource does not exist"
      }
    ]
  },
  {
    "url": "/sasl-mechanism-handlers",
    "method": "listAllHandlers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "sasl-mechanism-handler",
    "typeScriptTag": "saslMechanismHandler",
    "description": "Returns a list of all SASL Mechanism Handler objects",
    "parameters": [
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "SCIM filter"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      }
    ]
  },
  {
    "url": "/sasl-mechanism-handlers",
    "method": "addNewHandler",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "sasl-mechanism-handler",
    "typeScriptTag": "saslMechanismHandler",
    "description": "Add a new SASL Mechanism Handler to the config",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "409",
        "description": "The SASL Mechanism Handler already exists"
      }
    ]
  },
  {
    "url": "/sasl-mechanism-handlers/{sasl-mechanism-handler-name}",
    "method": "deleteHandler",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "sasl-mechanism-handler",
    "typeScriptTag": "saslMechanismHandler",
    "description": "Delete a SASL Mechanism Handler",
    "parameters": [
      {
        "name": "saslMechanismHandlerName",
        "schema": "string",
        "required": true,
        "description": "Name of the SASL Mechanism Handler",
        "example": "SASL-MECHANISM-HANDLER-NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Successful operation"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The SASL Mechanism Handler does not exist"
      },
      {
        "statusCode": "409",
        "description": "The SASL Mechanism Handler cannot be deleted"
      }
    ]
  },
  {
    "url": "/sasl-mechanism-handlers/{sasl-mechanism-handler-name}",
    "method": "getSingle",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "sasl-mechanism-handler",
    "typeScriptTag": "saslMechanismHandler",
    "description": "Returns a single SASL Mechanism Handler",
    "parameters": [
      {
        "name": "saslMechanismHandlerName",
        "schema": "string",
        "required": true,
        "description": "Name of the SASL Mechanism Handler",
        "example": "SASL-MECHANISM-HANDLER-NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The SASL Mechanism Handler does not exist"
      }
    ]
  },
  {
    "url": "/sasl-mechanism-handlers/{sasl-mechanism-handler-name}",
    "method": "updateByName",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "sasl-mechanism-handler",
    "typeScriptTag": "saslMechanismHandler",
    "description": "Update an existing SASL Mechanism Handler by name",
    "parameters": [
      {
        "name": "saslMechanismHandlerName",
        "schema": "string",
        "required": true,
        "description": "Name of the SASL Mechanism Handler",
        "example": "SASL-MECHANISM-HANDLER-NAME"
      },
      {
        "name": "operations",
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
        "description": "Invalid request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The SASL Mechanism Handler does not exist"
      }
    ]
  },
  {
    "url": "/data-security-auditors",
    "method": "listAllAuditors",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "data-security-auditor",
    "typeScriptTag": "dataSecurityAuditor",
    "description": "Returns a list of all Data Security Auditor objects",
    "parameters": [
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "SCIM filter"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      }
    ]
  },
  {
    "url": "/data-security-auditors",
    "method": "addNewAuditor",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "data-security-auditor",
    "typeScriptTag": "dataSecurityAuditor",
    "description": "Add a new Data Security Auditor to the config",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "409",
        "description": "The Data Security Auditor already exists"
      }
    ]
  },
  {
    "url": "/data-security-auditors/{data-security-auditor-name}",
    "method": "deleteAuditor",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "data-security-auditor",
    "typeScriptTag": "dataSecurityAuditor",
    "description": "Delete a Data Security Auditor",
    "parameters": [
      {
        "name": "dataSecurityAuditorName",
        "schema": "string",
        "required": true,
        "description": "Name of the Data Security Auditor",
        "example": "DATA-SECURITY-AUDITOR-NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Successful operation"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Data Security Auditor does not exist"
      },
      {
        "statusCode": "409",
        "description": "The Data Security Auditor cannot be deleted"
      }
    ]
  },
  {
    "url": "/data-security-auditors/{data-security-auditor-name}",
    "method": "getSingleAuditor",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "data-security-auditor",
    "typeScriptTag": "dataSecurityAuditor",
    "description": "Returns a single Data Security Auditor",
    "parameters": [
      {
        "name": "dataSecurityAuditorName",
        "schema": "string",
        "required": true,
        "description": "Name of the Data Security Auditor",
        "example": "DATA-SECURITY-AUDITOR-NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Data Security Auditor does not exist"
      }
    ]
  },
  {
    "url": "/data-security-auditors/{data-security-auditor-name}",
    "method": "updateByName",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "data-security-auditor",
    "typeScriptTag": "dataSecurityAuditor",
    "description": "Update an existing Data Security Auditor by name",
    "parameters": [
      {
        "name": "dataSecurityAuditorName",
        "schema": "string",
        "required": true,
        "description": "Name of the Data Security Auditor",
        "example": "DATA-SECURITY-AUDITOR-NAME"
      },
      {
        "name": "operations",
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
        "description": "Invalid request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Data Security Auditor does not exist"
      }
    ]
  },
  {
    "url": "/monitoring-endpoints",
    "method": "listAllObjects",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "monitoring-endpoint",
    "typeScriptTag": "monitoringEndpoint",
    "description": "Returns a list of all Monitoring Endpoint objects",
    "parameters": [
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "SCIM filter"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      }
    ]
  },
  {
    "url": "/monitoring-endpoints",
    "method": "addNewConfig",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "monitoring-endpoint",
    "typeScriptTag": "monitoringEndpoint",
    "description": "Add a new Monitoring Endpoint to the config",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "409",
        "description": "The Monitoring Endpoint already exists"
      }
    ]
  },
  {
    "url": "/monitoring-endpoints/{monitoring-endpoint-name}",
    "method": "deleteMonitoringEndpoint",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "monitoring-endpoint",
    "typeScriptTag": "monitoringEndpoint",
    "description": "Delete a Monitoring Endpoint",
    "parameters": [
      {
        "name": "monitoringEndpointName",
        "schema": "string",
        "required": true,
        "description": "Name of the Monitoring Endpoint",
        "example": "MONITORING-ENDPOINT-NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Successful operation"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Monitoring Endpoint does not exist"
      },
      {
        "statusCode": "409",
        "description": "The Monitoring Endpoint cannot be deleted"
      }
    ]
  },
  {
    "url": "/monitoring-endpoints/{monitoring-endpoint-name}",
    "method": "getSingleEndpoint",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "monitoring-endpoint",
    "typeScriptTag": "monitoringEndpoint",
    "description": "Returns a single Monitoring Endpoint",
    "parameters": [
      {
        "name": "monitoringEndpointName",
        "schema": "string",
        "required": true,
        "description": "Name of the Monitoring Endpoint",
        "example": "MONITORING-ENDPOINT-NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Monitoring Endpoint does not exist"
      }
    ]
  },
  {
    "url": "/monitoring-endpoints/{monitoring-endpoint-name}",
    "method": "updateByName",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "monitoring-endpoint",
    "typeScriptTag": "monitoringEndpoint",
    "description": "Update an existing Monitoring Endpoint by name",
    "parameters": [
      {
        "name": "monitoringEndpointName",
        "schema": "string",
        "required": true,
        "description": "Name of the Monitoring Endpoint",
        "example": "MONITORING-ENDPOINT-NAME"
      },
      {
        "name": "operations",
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
        "description": "Invalid request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Monitoring Endpoint does not exist"
      }
    ]
  },
  {
    "url": "/password-storage-schemes",
    "method": "listAllSchemes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "password-storage-scheme",
    "typeScriptTag": "passwordStorageScheme",
    "description": "Returns a list of all Password Storage Scheme objects",
    "parameters": [
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "SCIM filter"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      }
    ]
  },
  {
    "url": "/password-storage-schemes",
    "method": "addNewToConfig",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "password-storage-scheme",
    "typeScriptTag": "passwordStorageScheme",
    "description": "Add a new Password Storage Scheme to the config",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "409",
        "description": "The Password Storage Scheme already exists"
      }
    ]
  },
  {
    "url": "/password-storage-schemes/{password-storage-scheme-name}",
    "method": "deleteScheme",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "password-storage-scheme",
    "typeScriptTag": "passwordStorageScheme",
    "description": "Delete a Password Storage Scheme",
    "parameters": [
      {
        "name": "passwordStorageSchemeName",
        "schema": "string",
        "required": true,
        "description": "Name of the Password Storage Scheme",
        "example": "PASSWORD-STORAGE-SCHEME-NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Successful operation"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Password Storage Scheme does not exist"
      },
      {
        "statusCode": "409",
        "description": "The Password Storage Scheme cannot be deleted"
      }
    ]
  },
  {
    "url": "/password-storage-schemes/{password-storage-scheme-name}",
    "method": "getSingle",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "password-storage-scheme",
    "typeScriptTag": "passwordStorageScheme",
    "description": "Returns a single Password Storage Scheme",
    "parameters": [
      {
        "name": "passwordStorageSchemeName",
        "schema": "string",
        "required": true,
        "description": "Name of the Password Storage Scheme",
        "example": "PASSWORD-STORAGE-SCHEME-NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Password Storage Scheme does not exist"
      }
    ]
  },
  {
    "url": "/password-storage-schemes/{password-storage-scheme-name}",
    "method": "updateByName",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "password-storage-scheme",
    "typeScriptTag": "passwordStorageScheme",
    "description": "Update an existing Password Storage Scheme by name",
    "parameters": [
      {
        "name": "passwordStorageSchemeName",
        "schema": "string",
        "required": true,
        "description": "Name of the Password Storage Scheme",
        "example": "PASSWORD-STORAGE-SCHEME-NAME"
      },
      {
        "name": "operations",
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
        "description": "Invalid request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Password Storage Scheme does not exist"
      }
    ]
  },
  {
    "url": "/http-configuration",
    "method": "getSingleConfig",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "http-configuration",
    "typeScriptTag": "httpConfiguration",
    "description": "Returns a single HTTP Configuration",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The HTTP Configuration does not exist"
      }
    ]
  },
  {
    "url": "/http-configuration",
    "method": "updateByName",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "http-configuration",
    "typeScriptTag": "httpConfiguration",
    "description": "Update an existing HTTP Configuration by name",
    "parameters": [
      {
        "name": "operations",
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
        "description": "Invalid request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The HTTP Configuration does not exist"
      }
    ]
  },
  {
    "url": "/json-attribute-constraints",
    "method": "getAllObjects",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "json-attribute-constraints",
    "typeScriptTag": "jsonAttributeConstraints",
    "description": "Returns a list of all JSON Attribute Constraints objects",
    "parameters": [
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "SCIM filter"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      }
    ]
  },
  {
    "url": "/json-attribute-constraints",
    "method": "addNewConfig",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "json-attribute-constraints",
    "typeScriptTag": "jsonAttributeConstraints",
    "description": "Add a new JSON Attribute Constraints to the config",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "409",
        "description": "The JSON Attribute Constraints already exists"
      }
    ]
  },
  {
    "url": "/json-attribute-constraints/{json-attribute-constraints-name}",
    "method": "deleteJsonAttributeConstraints",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "json-attribute-constraints",
    "typeScriptTag": "jsonAttributeConstraints",
    "description": "Delete a JSON Attribute Constraints",
    "parameters": [
      {
        "name": "jsonAttributeConstraintsName",
        "schema": "string",
        "required": true,
        "description": "Name of the JSON Attribute Constraints",
        "example": "JSON-ATTRIBUTE-CONSTRAINTS-NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Successful operation"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The JSON Attribute Constraints does not exist"
      },
      {
        "statusCode": "409",
        "description": "The JSON Attribute Constraints cannot be deleted"
      }
    ]
  },
  {
    "url": "/json-attribute-constraints/{json-attribute-constraints-name}",
    "method": "getSingleJsonAttributeConstraints",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "json-attribute-constraints",
    "typeScriptTag": "jsonAttributeConstraints",
    "description": "Returns a single JSON Attribute Constraints",
    "parameters": [
      {
        "name": "jsonAttributeConstraintsName",
        "schema": "string",
        "required": true,
        "description": "Name of the JSON Attribute Constraints",
        "example": "JSON-ATTRIBUTE-CONSTRAINTS-NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The JSON Attribute Constraints does not exist"
      }
    ]
  },
  {
    "url": "/json-attribute-constraints/{json-attribute-constraints-name}",
    "method": "updateByName",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "json-attribute-constraints",
    "typeScriptTag": "jsonAttributeConstraints",
    "description": "Update an existing JSON Attribute Constraints by name",
    "parameters": [
      {
        "name": "jsonAttributeConstraintsName",
        "schema": "string",
        "required": true,
        "description": "Name of the JSON Attribute Constraints",
        "example": "JSON-ATTRIBUTE-CONSTRAINTS-NAME"
      },
      {
        "name": "operations",
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
        "description": "Invalid request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The JSON Attribute Constraints does not exist"
      }
    ]
  },
  {
    "url": "/json-attribute-constraints/{json-attribute-constraints-name}/json-field-constraints",
    "method": "listAllJsonFieldConstraints",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "json-field-constraints",
    "typeScriptTag": "jsonFieldConstraints",
    "description": "Returns a list of all JSON Field Constraints objects",
    "parameters": [
      {
        "name": "jsonAttributeConstraintsName",
        "schema": "string",
        "required": true,
        "description": "Name of the JSON Attribute Constraints",
        "example": "JSON-ATTRIBUTE-CONSTRAINTS-NAME"
      },
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "SCIM filter"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      }
    ]
  },
  {
    "url": "/json-attribute-constraints/{json-attribute-constraints-name}/json-field-constraints",
    "method": "addNewField",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "json-field-constraints",
    "typeScriptTag": "jsonFieldConstraints",
    "description": "Add a new JSON Field Constraints to the config",
    "parameters": [
      {
        "name": "jsonAttributeConstraintsName",
        "schema": "string",
        "required": true,
        "description": "Name of the JSON Attribute Constraints",
        "example": "JSON-ATTRIBUTE-CONSTRAINTS-NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "409",
        "description": "The JSON Field Constraints already exists"
      }
    ]
  },
  {
    "url": "/json-attribute-constraints/{json-attribute-constraints-name}/json-field-constraints/{json-field-constraints-name}",
    "method": "deleteFieldConstraints",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "json-field-constraints",
    "typeScriptTag": "jsonFieldConstraints",
    "description": "Delete a JSON Field Constraints",
    "parameters": [
      {
        "name": "jsonFieldConstraintsName",
        "schema": "string",
        "required": true,
        "description": "Name of the JSON Field Constraints",
        "example": "JSON-FIELD-CONSTRAINTS-NAME"
      },
      {
        "name": "jsonAttributeConstraintsName",
        "schema": "string",
        "required": true,
        "description": "Name of the JSON Attribute Constraints",
        "example": "JSON-ATTRIBUTE-CONSTRAINTS-NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Successful operation"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The JSON Field Constraints does not exist"
      },
      {
        "statusCode": "409",
        "description": "The JSON Field Constraints cannot be deleted"
      }
    ]
  },
  {
    "url": "/json-attribute-constraints/{json-attribute-constraints-name}/json-field-constraints/{json-field-constraints-name}",
    "method": "getSingleFieldConstraints",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "json-field-constraints",
    "typeScriptTag": "jsonFieldConstraints",
    "description": "Returns a single JSON Field Constraints",
    "parameters": [
      {
        "name": "jsonFieldConstraintsName",
        "schema": "string",
        "required": true,
        "description": "Name of the JSON Field Constraints",
        "example": "JSON-FIELD-CONSTRAINTS-NAME"
      },
      {
        "name": "jsonAttributeConstraintsName",
        "schema": "string",
        "required": true,
        "description": "Name of the JSON Attribute Constraints",
        "example": "JSON-ATTRIBUTE-CONSTRAINTS-NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The JSON Field Constraints does not exist"
      }
    ]
  },
  {
    "url": "/json-attribute-constraints/{json-attribute-constraints-name}/json-field-constraints/{json-field-constraints-name}",
    "method": "updateByName",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "json-field-constraints",
    "typeScriptTag": "jsonFieldConstraints",
    "description": "Update an existing JSON Field Constraints by name",
    "parameters": [
      {
        "name": "jsonFieldConstraintsName",
        "schema": "string",
        "required": true,
        "description": "Name of the JSON Field Constraints",
        "example": "JSON-FIELD-CONSTRAINTS-NAME"
      },
      {
        "name": "jsonAttributeConstraintsName",
        "schema": "string",
        "required": true,
        "description": "Name of the JSON Attribute Constraints",
        "example": "JSON-ATTRIBUTE-CONSTRAINTS-NAME"
      },
      {
        "name": "operations",
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
        "description": "Invalid request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The JSON Field Constraints does not exist"
      }
    ]
  },
  {
    "url": "/http-servlet-cross-origin-policies",
    "method": "listAllPolicies",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "http-servlet-cross-origin-policy",
    "typeScriptTag": "httpServletCrossOriginPolicy",
    "description": "Returns a list of all HTTP Servlet Cross Origin Policy objects",
    "parameters": [
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "SCIM filter"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      }
    ]
  },
  {
    "url": "/http-servlet-cross-origin-policies",
    "method": "addNewPolicy",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "http-servlet-cross-origin-policy",
    "typeScriptTag": "httpServletCrossOriginPolicy",
    "description": "Add a new HTTP Servlet Cross Origin Policy to the config",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "409",
        "description": "The HTTP Servlet Cross Origin Policy already exists"
      }
    ]
  },
  {
    "url": "/http-servlet-cross-origin-policies/{http-servlet-cross-origin-policy-name}",
    "method": "deletePolicy",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "http-servlet-cross-origin-policy",
    "typeScriptTag": "httpServletCrossOriginPolicy",
    "description": "Delete a HTTP Servlet Cross Origin Policy",
    "parameters": [
      {
        "name": "httpServletCrossOriginPolicyName",
        "schema": "string",
        "required": true,
        "description": "Name of the HTTP Servlet Cross Origin Policy",
        "example": "HTTP-SERVLET-CROSS-ORIGIN-POLICY-NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Successful operation"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The HTTP Servlet Cross Origin Policy does not exist"
      },
      {
        "statusCode": "409",
        "description": "The HTTP Servlet Cross Origin Policy cannot be deleted"
      }
    ]
  },
  {
    "url": "/http-servlet-cross-origin-policies/{http-servlet-cross-origin-policy-name}",
    "method": "getSinglePolicy",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "http-servlet-cross-origin-policy",
    "typeScriptTag": "httpServletCrossOriginPolicy",
    "description": "Returns a single HTTP Servlet Cross Origin Policy",
    "parameters": [
      {
        "name": "httpServletCrossOriginPolicyName",
        "schema": "string",
        "required": true,
        "description": "Name of the HTTP Servlet Cross Origin Policy",
        "example": "HTTP-SERVLET-CROSS-ORIGIN-POLICY-NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The HTTP Servlet Cross Origin Policy does not exist"
      }
    ]
  },
  {
    "url": "/http-servlet-cross-origin-policies/{http-servlet-cross-origin-policy-name}",
    "method": "updateByName",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "http-servlet-cross-origin-policy",
    "typeScriptTag": "httpServletCrossOriginPolicy",
    "description": "Update an existing HTTP Servlet Cross Origin Policy by name",
    "parameters": [
      {
        "name": "httpServletCrossOriginPolicyName",
        "schema": "string",
        "required": true,
        "description": "Name of the HTTP Servlet Cross Origin Policy",
        "example": "HTTP-SERVLET-CROSS-ORIGIN-POLICY-NAME"
      },
      {
        "name": "operations",
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
        "description": "Invalid request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The HTTP Servlet Cross Origin Policy does not exist"
      }
    ]
  },
  {
    "url": "/delegated-admin-attribute-categories",
    "method": "listAllCategories",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "delegated-admin-attribute-category",
    "typeScriptTag": "delegatedAdminAttributeCategory",
    "description": "Returns a list of all Delegated Admin Attribute Category objects",
    "parameters": [
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "SCIM filter"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      }
    ]
  },
  {
    "url": "/delegated-admin-attribute-categories",
    "method": "addNewCategory",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "delegated-admin-attribute-category",
    "typeScriptTag": "delegatedAdminAttributeCategory",
    "description": "Add a new Delegated Admin Attribute Category to the config",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "409",
        "description": "The Delegated Admin Attribute Category already exists"
      }
    ]
  },
  {
    "url": "/delegated-admin-attribute-categories/{delegated-admin-attribute-category-name}",
    "method": "deleteCategory",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "delegated-admin-attribute-category",
    "typeScriptTag": "delegatedAdminAttributeCategory",
    "description": "Delete a Delegated Admin Attribute Category",
    "parameters": [
      {
        "name": "delegatedAdminAttributeCategoryName",
        "schema": "string",
        "required": true,
        "description": "Name of the Delegated Admin Attribute Category",
        "example": "DELEGATED-ADMIN-ATTRIBUTE-CATEGORY-NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Successful operation"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Delegated Admin Attribute Category does not exist"
      },
      {
        "statusCode": "409",
        "description": "The Delegated Admin Attribute Category cannot be deleted"
      }
    ]
  },
  {
    "url": "/delegated-admin-attribute-categories/{delegated-admin-attribute-category-name}",
    "method": "getSingle",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "delegated-admin-attribute-category",
    "typeScriptTag": "delegatedAdminAttributeCategory",
    "description": "Returns a single Delegated Admin Attribute Category",
    "parameters": [
      {
        "name": "delegatedAdminAttributeCategoryName",
        "schema": "string",
        "required": true,
        "description": "Name of the Delegated Admin Attribute Category",
        "example": "DELEGATED-ADMIN-ATTRIBUTE-CATEGORY-NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Delegated Admin Attribute Category does not exist"
      }
    ]
  },
  {
    "url": "/delegated-admin-attribute-categories/{delegated-admin-attribute-category-name}",
    "method": "updateByName",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "delegated-admin-attribute-category",
    "typeScriptTag": "delegatedAdminAttributeCategory",
    "description": "Update an existing Delegated Admin Attribute Category by name",
    "parameters": [
      {
        "name": "delegatedAdminAttributeCategoryName",
        "schema": "string",
        "required": true,
        "description": "Name of the Delegated Admin Attribute Category",
        "example": "DELEGATED-ADMIN-ATTRIBUTE-CATEGORY-NAME"
      },
      {
        "name": "operations",
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
        "description": "Invalid request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Delegated Admin Attribute Category does not exist"
      }
    ]
  },
  {
    "url": "/scim-schemas",
    "method": "listAllObjects",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "scim-schema",
    "typeScriptTag": "scimSchema",
    "description": "Returns a list of all SCIM Schema objects",
    "parameters": [
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "SCIM filter"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      }
    ]
  },
  {
    "url": "/scim-schemas",
    "method": "addNewSchema",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "scim-schema",
    "typeScriptTag": "scimSchema",
    "description": "Add a new SCIM Schema to the config",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "409",
        "description": "The SCIM Schema already exists"
      }
    ]
  },
  {
    "url": "/scim-schemas/{scim-schema-name}",
    "method": "deleteSchema",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "scim-schema",
    "typeScriptTag": "scimSchema",
    "description": "Delete a SCIM Schema",
    "parameters": [
      {
        "name": "scimSchemaName",
        "schema": "string",
        "required": true,
        "description": "Name of the SCIM Schema",
        "example": "SCIM-SCHEMA-NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Successful operation"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The SCIM Schema does not exist"
      },
      {
        "statusCode": "409",
        "description": "The SCIM Schema cannot be deleted"
      }
    ]
  },
  {
    "url": "/scim-schemas/{scim-schema-name}",
    "method": "getSingleSchema",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "scim-schema",
    "typeScriptTag": "scimSchema",
    "description": "Returns a single SCIM Schema",
    "parameters": [
      {
        "name": "scimSchemaName",
        "schema": "string",
        "required": true,
        "description": "Name of the SCIM Schema",
        "example": "SCIM-SCHEMA-NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The SCIM Schema does not exist"
      }
    ]
  },
  {
    "url": "/scim-schemas/{scim-schema-name}",
    "method": "updateByName",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "scim-schema",
    "typeScriptTag": "scimSchema",
    "description": "Update an existing SCIM Schema by name",
    "parameters": [
      {
        "name": "scimSchemaName",
        "schema": "string",
        "required": true,
        "description": "Name of the SCIM Schema",
        "example": "SCIM-SCHEMA-NAME"
      },
      {
        "name": "operations",
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
        "description": "Invalid request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The SCIM Schema does not exist"
      }
    ]
  },
  {
    "url": "/scim-schemas/{scim-schema-name}/scim-attributes",
    "method": "listAllAttributes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "scim-attribute",
    "typeScriptTag": "scimAttribute",
    "description": "Returns a list of all SCIM Attribute objects",
    "parameters": [
      {
        "name": "scimSchemaName",
        "schema": "string",
        "required": true,
        "description": "Name of the SCIM Schema",
        "example": "SCIM-SCHEMA-NAME"
      },
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "SCIM filter"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      }
    ]
  },
  {
    "url": "/scim-schemas/{scim-schema-name}/scim-attributes",
    "method": "addNewAttribute",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "scim-attribute",
    "typeScriptTag": "scimAttribute",
    "description": "Add a new SCIM Attribute to the config",
    "parameters": [
      {
        "name": "scimSchemaName",
        "schema": "string",
        "required": true,
        "description": "Name of the SCIM Schema",
        "example": "SCIM-SCHEMA-NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "409",
        "description": "The SCIM Attribute already exists"
      }
    ]
  },
  {
    "url": "/scim-schemas/{scim-schema-name}/scim-attributes/{scim-attribute-name}",
    "method": "deleteAttribute",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "scim-attribute",
    "typeScriptTag": "scimAttribute",
    "description": "Delete a SCIM Attribute",
    "parameters": [
      {
        "name": "scimAttributeName",
        "schema": "string",
        "required": true,
        "description": "Name of the SCIM Attribute",
        "example": "SCIM-ATTRIBUTE-NAME"
      },
      {
        "name": "scimSchemaName",
        "schema": "string",
        "required": true,
        "description": "Name of the SCIM Schema",
        "example": "SCIM-SCHEMA-NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Successful operation"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The SCIM Attribute does not exist"
      },
      {
        "statusCode": "409",
        "description": "The SCIM Attribute cannot be deleted"
      }
    ]
  },
  {
    "url": "/scim-schemas/{scim-schema-name}/scim-attributes/{scim-attribute-name}",
    "method": "getSingleAttribute",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "scim-attribute",
    "typeScriptTag": "scimAttribute",
    "description": "Returns a single SCIM Attribute",
    "parameters": [
      {
        "name": "scimAttributeName",
        "schema": "string",
        "required": true,
        "description": "Name of the SCIM Attribute",
        "example": "SCIM-ATTRIBUTE-NAME"
      },
      {
        "name": "scimSchemaName",
        "schema": "string",
        "required": true,
        "description": "Name of the SCIM Schema",
        "example": "SCIM-SCHEMA-NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The SCIM Attribute does not exist"
      }
    ]
  },
  {
    "url": "/scim-schemas/{scim-schema-name}/scim-attributes/{scim-attribute-name}",
    "method": "updateByName",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "scim-attribute",
    "typeScriptTag": "scimAttribute",
    "description": "Update an existing SCIM Attribute by name",
    "parameters": [
      {
        "name": "scimAttributeName",
        "schema": "string",
        "required": true,
        "description": "Name of the SCIM Attribute",
        "example": "SCIM-ATTRIBUTE-NAME"
      },
      {
        "name": "scimSchemaName",
        "schema": "string",
        "required": true,
        "description": "Name of the SCIM Schema",
        "example": "SCIM-SCHEMA-NAME"
      },
      {
        "name": "operations",
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
        "description": "Invalid request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The SCIM Attribute does not exist"
      }
    ]
  },
  {
    "url": "/scim-schemas/{scim-schema-name}/scim-attributes/{scim-attribute-name}/scim-subattributes",
    "method": "listAllSubattributes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "scim-subattribute",
    "typeScriptTag": "scimSubattribute",
    "description": "Returns a list of all SCIM Subattribute objects",
    "parameters": [
      {
        "name": "scimAttributeName",
        "schema": "string",
        "required": true,
        "description": "Name of the SCIM Attribute",
        "example": "SCIM-ATTRIBUTE-NAME"
      },
      {
        "name": "scimSchemaName",
        "schema": "string",
        "required": true,
        "description": "Name of the SCIM Schema",
        "example": "SCIM-SCHEMA-NAME"
      },
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "SCIM filter"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      }
    ]
  },
  {
    "url": "/scim-schemas/{scim-schema-name}/scim-attributes/{scim-attribute-name}/scim-subattributes",
    "method": "addNewConfig",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "scim-subattribute",
    "typeScriptTag": "scimSubattribute",
    "description": "Add a new SCIM Subattribute to the config",
    "parameters": [
      {
        "name": "scimAttributeName",
        "schema": "string",
        "required": true,
        "description": "Name of the SCIM Attribute",
        "example": "SCIM-ATTRIBUTE-NAME"
      },
      {
        "name": "scimSchemaName",
        "schema": "string",
        "required": true,
        "description": "Name of the SCIM Schema",
        "example": "SCIM-SCHEMA-NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "409",
        "description": "The SCIM Subattribute already exists"
      }
    ]
  },
  {
    "url": "/scim-schemas/{scim-schema-name}/scim-attributes/{scim-attribute-name}/scim-subattributes/{scim-subattribute-name}",
    "method": "deleteSubattribute",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "scim-subattribute",
    "typeScriptTag": "scimSubattribute",
    "description": "Delete a SCIM Subattribute",
    "parameters": [
      {
        "name": "scimSubattributeName",
        "schema": "string",
        "required": true,
        "description": "Name of the SCIM Subattribute",
        "example": "SCIM-SUBATTRIBUTE-NAME"
      },
      {
        "name": "scimAttributeName",
        "schema": "string",
        "required": true,
        "description": "Name of the SCIM Attribute",
        "example": "SCIM-ATTRIBUTE-NAME"
      },
      {
        "name": "scimSchemaName",
        "schema": "string",
        "required": true,
        "description": "Name of the SCIM Schema",
        "example": "SCIM-SCHEMA-NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Successful operation"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The SCIM Subattribute does not exist"
      },
      {
        "statusCode": "409",
        "description": "The SCIM Subattribute cannot be deleted"
      }
    ]
  },
  {
    "url": "/scim-schemas/{scim-schema-name}/scim-attributes/{scim-attribute-name}/scim-subattributes/{scim-subattribute-name}",
    "method": "getSingleSubattribute",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "scim-subattribute",
    "typeScriptTag": "scimSubattribute",
    "description": "Returns a single SCIM Subattribute",
    "parameters": [
      {
        "name": "scimSubattributeName",
        "schema": "string",
        "required": true,
        "description": "Name of the SCIM Subattribute",
        "example": "SCIM-SUBATTRIBUTE-NAME"
      },
      {
        "name": "scimAttributeName",
        "schema": "string",
        "required": true,
        "description": "Name of the SCIM Attribute",
        "example": "SCIM-ATTRIBUTE-NAME"
      },
      {
        "name": "scimSchemaName",
        "schema": "string",
        "required": true,
        "description": "Name of the SCIM Schema",
        "example": "SCIM-SCHEMA-NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The SCIM Subattribute does not exist"
      }
    ]
  },
  {
    "url": "/scim-schemas/{scim-schema-name}/scim-attributes/{scim-attribute-name}/scim-subattributes/{scim-subattribute-name}",
    "method": "updateByName",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "scim-subattribute",
    "typeScriptTag": "scimSubattribute",
    "description": "Update an existing SCIM Subattribute by name",
    "parameters": [
      {
        "name": "scimSubattributeName",
        "schema": "string",
        "required": true,
        "description": "Name of the SCIM Subattribute",
        "example": "SCIM-SUBATTRIBUTE-NAME"
      },
      {
        "name": "scimAttributeName",
        "schema": "string",
        "required": true,
        "description": "Name of the SCIM Attribute",
        "example": "SCIM-ATTRIBUTE-NAME"
      },
      {
        "name": "scimSchemaName",
        "schema": "string",
        "required": true,
        "description": "Name of the SCIM Schema",
        "example": "SCIM-SCHEMA-NAME"
      },
      {
        "name": "operations",
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
        "description": "Invalid request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The SCIM Subattribute does not exist"
      }
    ]
  },
  {
    "url": "/locations",
    "method": "listObjects",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "location",
    "typeScriptTag": "location",
    "description": "Returns a list of all Location objects",
    "parameters": [
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "SCIM filter"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      }
    ]
  },
  {
    "url": "/locations",
    "method": "createNewLocation",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "location",
    "typeScriptTag": "location",
    "description": "Add a new Location to the config",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "409",
        "description": "The Location already exists"
      }
    ]
  },
  {
    "url": "/locations/{location-name}",
    "method": "removeLocation",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "location",
    "typeScriptTag": "location",
    "description": "Delete a Location",
    "parameters": [
      {
        "name": "locationName",
        "schema": "string",
        "required": true,
        "description": "Name of the Location",
        "example": "LOCATION-NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Successful operation"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Location does not exist"
      },
      {
        "statusCode": "409",
        "description": "The Location cannot be deleted"
      }
    ]
  },
  {
    "url": "/locations/{location-name}",
    "method": "getSingle",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "location",
    "typeScriptTag": "location",
    "description": "Returns a single Location",
    "parameters": [
      {
        "name": "locationName",
        "schema": "string",
        "required": true,
        "description": "Name of the Location",
        "example": "LOCATION-NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Location does not exist"
      }
    ]
  },
  {
    "url": "/locations/{location-name}",
    "method": "updateByName",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "location",
    "typeScriptTag": "location",
    "description": "Update an existing Location by name",
    "parameters": [
      {
        "name": "locationName",
        "schema": "string",
        "required": true,
        "description": "Name of the Location",
        "example": "LOCATION-NAME"
      },
      {
        "name": "operations",
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
        "description": "Invalid request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Location does not exist"
      }
    ]
  },
  {
    "url": "/log-retention-policies",
    "method": "listAllLogRetentionPolicies",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "log-retention-policy",
    "typeScriptTag": "logRetentionPolicy",
    "description": "Returns a list of all Log Retention Policy objects",
    "parameters": [
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "SCIM filter"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      }
    ]
  },
  {
    "url": "/log-retention-policies",
    "method": "addNewLogRetentionPolicy",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "log-retention-policy",
    "typeScriptTag": "logRetentionPolicy",
    "description": "Add a new Log Retention Policy to the config",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "409",
        "description": "The Log Retention Policy already exists"
      }
    ]
  },
  {
    "url": "/log-retention-policies/{log-retention-policy-name}",
    "method": "deleteLogRetentionPolicy",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "log-retention-policy",
    "typeScriptTag": "logRetentionPolicy",
    "description": "Delete a Log Retention Policy",
    "parameters": [
      {
        "name": "logRetentionPolicyName",
        "schema": "string",
        "required": true,
        "description": "Name of the Log Retention Policy",
        "example": "LOG-RETENTION-POLICY-NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Successful operation"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Log Retention Policy does not exist"
      },
      {
        "statusCode": "409",
        "description": "The Log Retention Policy cannot be deleted"
      }
    ]
  },
  {
    "url": "/log-retention-policies/{log-retention-policy-name}",
    "method": "getSingle",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "log-retention-policy",
    "typeScriptTag": "logRetentionPolicy",
    "description": "Returns a single Log Retention Policy",
    "parameters": [
      {
        "name": "logRetentionPolicyName",
        "schema": "string",
        "required": true,
        "description": "Name of the Log Retention Policy",
        "example": "LOG-RETENTION-POLICY-NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Log Retention Policy does not exist"
      }
    ]
  },
  {
    "url": "/log-retention-policies/{log-retention-policy-name}",
    "method": "updateByName",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "log-retention-policy",
    "typeScriptTag": "logRetentionPolicy",
    "description": "Update an existing Log Retention Policy by name",
    "parameters": [
      {
        "name": "logRetentionPolicyName",
        "schema": "string",
        "required": true,
        "description": "Name of the Log Retention Policy",
        "example": "LOG-RETENTION-POLICY-NAME"
      },
      {
        "name": "operations",
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
        "description": "Invalid request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The Log Retention Policy does not exist"
      }
    ]
  },
  {
    "url": "/oauth-token-handlers",
    "method": "listAllHandlers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "oauth-token-handler",
    "typeScriptTag": "oauthTokenHandler",
    "description": "Returns a list of all OAuth Token Handler objects",
    "parameters": [
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "SCIM filter"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      }
    ]
  },
  {
    "url": "/oauth-token-handlers",
    "method": "addNewHandler",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "oauth-token-handler",
    "typeScriptTag": "oauthTokenHandler",
    "description": "Add a new OAuth Token Handler to the config",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "409",
        "description": "The OAuth Token Handler already exists"
      }
    ]
  },
  {
    "url": "/oauth-token-handlers/{oauth-token-handler-name}",
    "method": "deleteHandler",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "oauth-token-handler",
    "typeScriptTag": "oauthTokenHandler",
    "description": "Delete a OAuth Token Handler",
    "parameters": [
      {
        "name": "oauthTokenHandlerName",
        "schema": "string",
        "required": true,
        "description": "Name of the OAuth Token Handler",
        "example": "OAUTH-TOKEN-HANDLER-NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Successful operation"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The OAuth Token Handler does not exist"
      },
      {
        "statusCode": "409",
        "description": "The OAuth Token Handler cannot be deleted"
      }
    ]
  },
  {
    "url": "/oauth-token-handlers/{oauth-token-handler-name}",
    "method": "getSingle",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "oauth-token-handler",
    "typeScriptTag": "oauthTokenHandler",
    "description": "Returns a single OAuth Token Handler",
    "parameters": [
      {
        "name": "oauthTokenHandlerName",
        "schema": "string",
        "required": true,
        "description": "Name of the OAuth Token Handler",
        "example": "OAUTH-TOKEN-HANDLER-NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The OAuth Token Handler does not exist"
      }
    ]
  },
  {
    "url": "/oauth-token-handlers/{oauth-token-handler-name}",
    "method": "updateByName",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "oauth-token-handler",
    "typeScriptTag": "oauthTokenHandler",
    "description": "Update an existing OAuth Token Handler by name",
    "parameters": [
      {
        "name": "oauthTokenHandlerName",
        "schema": "string",
        "required": true,
        "description": "Name of the OAuth Token Handler",
        "example": "OAUTH-TOKEN-HANDLER-NAME"
      },
      {
        "name": "operations",
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
        "description": "Invalid request"
      },
      {
        "statusCode": "401",
        "description": "Requestor cannot be authenticated"
      },
      {
        "statusCode": "403",
        "description": "Requestor does not have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "The OAuth Token Handler does not exist"
      }
    ]
  }
]
    }
      language="TypeScript"
      apiTitle="PingData Config - OpenAPI 3.0"
      apiBaseUrl="/"
      apiVersion="0.1"
      endpoints={227}
      sdkMethods={539}
      schemas={2492}
      parameters={662}
      difficulty="Very Hard"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/ping-identity/directory/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/ping-identity/directory/openapi.yaml"
      developerDocumentation="docs.pingidentity.com/r/en-us"
    />
  );
}
  