import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function BeamableTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="beamable-typescript-sdk"
      metaDescription={`var Beamable = BeamContext.Default; - That one line of code is a gateway to everything you need to build custom server logic via microservices along with a world of LiveOps tools and live services to build games that players love.`}
      company="Beamable"
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/beamable/logo.png"
      companyKebabCase="beamable"
      clientNameCamelCase="beamable"
      homepage="beamable.com"
      lastUpdated={new Date("2024-03-27T01:23:25.425Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/beamable/favicon.png"
      contactUrl="https://api.beamable.com"
      contactEmail="support@beamable.com"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/beamable/imagePreview.png"
      GettingStarted={GettingStarted}
      FirstRequest={FirstRequest}
      categories={["developer_tools","gaming"]}
      methods={[
  {
    "url": "/basic/trials/admin/data",
    "method": "adminDataGet",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Trial",
    "typeScriptTag": "trial",
    "description": "",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
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
    "url": "/basic/trials/data",
    "method": "deleteData",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Trial",
    "typeScriptTag": "trial",
    "description": "",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
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
    "url": "/basic/trials/data",
    "method": "postData",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Trial",
    "typeScriptTag": "trial",
    "description": "",
    "parameters": [
      {
        "name": "trialName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "cohortName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "dataName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "filePayloadBase64",
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
    "url": "/basic/trials/pause",
    "method": "pauseTrial",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Trial",
    "typeScriptTag": "trial",
    "description": "",
    "parameters": [
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
        "description": "Bad Request"
      }
    ]
  },
  {
    "url": "/basic/trials/schedule",
    "method": "schedulePut",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Trial",
    "typeScriptTag": "trial",
    "description": "",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "time",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
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
    "url": "/basic/trials/admin",
    "method": "getAdminTrials",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Trial",
    "typeScriptTag": "trial",
    "description": "",
    "parameters": [
      {
        "name": "dbid",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
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
    "url": "/basic/trials/start",
    "method": "startTrialProcess",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Trial",
    "typeScriptTag": "trial",
    "description": "",
    "parameters": [
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
        "description": "Bad Request"
      }
    ]
  },
  {
    "url": "/basic/accounts/me/device",
    "method": "removeDevice",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Account",
    "typeScriptTag": "account",
    "description": "",
    "parameters": [
      {
        "name": "deviceIds",
        "schema": "array",
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
    "url": "/basic/accounts/me",
    "method": "getUserInfo",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Account",
    "typeScriptTag": "account",
    "description": "",
    "parameters": [],
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
    "url": "/basic/accounts/me",
    "method": "updateAccountInfo",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Account",
    "typeScriptTag": "account",
    "description": "",
    "parameters": [
      {
        "name": "thirdParty",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "hasThirdPartyToken",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "country",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "language",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "gamerTagAssoc",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "token",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "deviceId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "userName",
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
        "description": "Bad Request"
      }
    ]
  },
  {
    "url": "/basic/accounts/me/third-party",
    "method": "deleteThirdParty",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Account",
    "typeScriptTag": "account",
    "description": "",
    "parameters": [
      {
        "name": "thirdParty",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "THIRDPARTY"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TOKEN"
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
    "url": "/basic/accounts/get-personally-identifiable-information",
    "method": "getPersonallyIdentifiableInformation",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Account",
    "typeScriptTag": "account",
    "description": "",
    "parameters": [
      {
        "name": "query",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "QUERY"
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
    "url": "/basic/accounts/search",
    "method": "searchAccounts",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Account",
    "typeScriptTag": "account",
    "description": "",
    "parameters": [
      {
        "name": "query",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "QUERY"
      },
      {
        "name": "page",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "pagesize",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
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
    "url": "/basic/accounts/email-update/init",
    "method": "updateEmailInit",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Mail",
    "typeScriptTag": "mail",
    "description": "",
    "parameters": [
      {
        "name": "newEmail",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NEWEMAIL"
      },
      {
        "name": "codeType",
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
        "description": "Bad Request"
      }
    ]
  },
  {
    "url": "/basic/accounts/email-update/confirm",
    "method": "updateEmailConfirmation",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Mail",
    "typeScriptTag": "mail",
    "description": "",
    "parameters": [
      {
        "name": "code",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CODE"
      },
      {
        "name": "password",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PASSWORD"
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
    "url": "/basic/accounts/available/third-party",
    "method": "checkThirdPartyAvailability",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Account",
    "typeScriptTag": "account",
    "description": "",
    "parameters": [
      {
        "name": "thirdParty",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "THIRDPARTY"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TOKEN"
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
    "url": "/basic/accounts/admin/admin-user",
    "method": "createAdminUser",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Account",
    "typeScriptTag": "account",
    "description": "",
    "parameters": [
      {
        "name": "email",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EMAIL"
      },
      {
        "name": "role",
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
        "description": "Bad Request"
      }
    ]
  },
  {
    "url": "/basic/accounts/register",
    "method": "registerNewAccount",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Account",
    "typeScriptTag": "account",
    "description": "",
    "parameters": [
      {
        "name": "email",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EMAIL"
      },
      {
        "name": "password",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PASSWORD"
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
    "url": "/basic/accounts/admin/me",
    "method": "getDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Account",
    "typeScriptTag": "account",
    "description": "",
    "parameters": [],
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
    "url": "/basic/accounts/password-update/init",
    "method": "updatePasswordInit",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Account",
    "typeScriptTag": "account",
    "description": "",
    "parameters": [
      {
        "name": "email",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EMAIL"
      },
      {
        "name": "codeType",
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
        "description": "Bad Request"
      }
    ]
  },
  {
    "url": "/basic/accounts/admin/admin-users",
    "method": "getAdminUsers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Account",
    "typeScriptTag": "account",
    "description": "",
    "parameters": [],
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
    "url": "/basic/accounts/find",
    "method": "findAccounts",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Account",
    "typeScriptTag": "account",
    "description": "",
    "parameters": [
      {
        "name": "query",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "QUERY"
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
    "url": "/basic/accounts/available/device-id",
    "method": "checkAvailability",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Account",
    "typeScriptTag": "account",
    "description": "",
    "parameters": [
      {
        "name": "deviceId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DEVICEID"
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
    "url": "/basic/accounts/available",
    "method": "checkAvailability",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Account",
    "typeScriptTag": "account",
    "description": "",
    "parameters": [
      {
        "name": "email",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EMAIL"
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
    "url": "/basic/accounts/password-update/confirm",
    "method": "updatePasswordConfirmation",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Account",
    "typeScriptTag": "account",
    "description": "",
    "parameters": [
      {
        "name": "code",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CODE"
      },
      {
        "name": "newPassword",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NEWPASSWORD"
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
    "url": "/object/accounts/{objectId}/admin/email",
    "method": "updateAdminEmail",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Mail",
    "typeScriptTag": "mail",
    "description": "",
    "parameters": [
      {
        "name": "objectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "OBJECTID"
      },
      {
        "name": "newEmail",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NEWEMAIL"
      },
      {
        "name": "codeType",
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
        "description": "Bad Request"
      }
    ]
  },
  {
    "url": "/object/accounts/{objectId}/available-roles",
    "method": "getObjectAvailableRoles",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Account",
    "typeScriptTag": "account",
    "description": "",
    "parameters": [
      {
        "name": "objectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "OBJECTID"
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
    "url": "/object/accounts/{objectId}/role",
    "method": "removeRole",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Account",
    "typeScriptTag": "account",
    "description": "",
    "parameters": [
      {
        "name": "objectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "OBJECTID"
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
    "url": "/object/accounts/{objectId}/role",
    "method": "updateRole",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Account",
    "typeScriptTag": "account",
    "description": "",
    "parameters": [
      {
        "name": "objectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "OBJECTID"
      },
      {
        "name": "cid",
        "schema": "string",
        "description": ""
      },
      {
        "name": "realm",
        "schema": "string",
        "description": ""
      },
      {
        "name": "role",
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
    "url": "/object/accounts/{objectId}/admin/scope",
    "method": "deleteAdminScope",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Account",
    "typeScriptTag": "account",
    "description": "",
    "parameters": [
      {
        "name": "objectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "OBJECTID"
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
    "url": "/object/accounts/{objectId}/admin/scope",
    "method": "updateAdminScope",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Account",
    "typeScriptTag": "account",
    "description": "",
    "parameters": [
      {
        "name": "objectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "OBJECTID"
      },
      {
        "name": "cid",
        "schema": "string",
        "description": ""
      },
      {
        "name": "realm",
        "schema": "string",
        "description": ""
      },
      {
        "name": "role",
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
    "url": "/object/accounts/{objectId}/admin/third-party",
    "method": "deleteThirdPartyAdmin",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Account",
    "typeScriptTag": "account",
    "description": "",
    "parameters": [
      {
        "name": "objectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "OBJECTID"
      },
      {
        "name": "thirdParty",
        "schema": "string",
        "description": ""
      },
      {
        "name": "userAppId",
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
    "url": "/object/accounts/{objectId}/admin/third-party",
    "method": "updateThirdPartyAdmin",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Account",
    "typeScriptTag": "account",
    "description": "",
    "parameters": [
      {
        "name": "objectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "OBJECTID"
      },
      {
        "name": "fromAccountId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "thirdParty",
        "schema": "object",
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
        "description": "Bad Request"
      }
    ]
  },
  {
    "url": "/object/accounts/{objectId}/admin/forget",
    "method": "removeAdminForget",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Account",
    "typeScriptTag": "account",
    "description": "",
    "parameters": [
      {
        "name": "objectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "OBJECTID"
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
    "url": "/basic/announcements/search",
    "method": "searchOperation",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Announcement",
    "typeScriptTag": "announcement",
    "description": "",
    "parameters": [
      {
        "name": "date",
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
        "description": "Bad Request"
      }
    ]
  },
  {
    "url": "/basic/announcements/content",
    "method": "getAnnouncementContent",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Content",
    "typeScriptTag": "content",
    "description": "",
    "parameters": [],
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
    "url": "/basic/announcements/list",
    "method": "getAllAnnouncements",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Announcement",
    "typeScriptTag": "announcement",
    "description": "",
    "parameters": [],
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
    "url": "/object/announcements/{objectId}/read",
    "method": "markAsRead",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Announcement",
    "typeScriptTag": "announcement",
    "description": "",
    "parameters": [
      {
        "name": "objectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "OBJECTID"
      },
      {
        "name": "announcement",
        "schema": "string",
        "description": ""
      },
      {
        "name": "announcements",
        "schema": "array",
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
    "url": "/object/announcements/{objectId}/claim",
    "method": "claimObjectAnnouncement",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Announcement",
    "typeScriptTag": "announcement",
    "description": "",
    "parameters": [
      {
        "name": "objectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "OBJECTID"
      },
      {
        "name": "announcement",
        "schema": "string",
        "description": ""
      },
      {
        "name": "announcements",
        "schema": "array",
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
    "url": "/object/announcements/{objectId}/raw",
    "method": "getObjectRaw",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Announcement",
    "typeScriptTag": "announcement",
    "description": "",
    "parameters": [
      {
        "name": "objectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "OBJECTID"
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
    "url": "/basic/auth/token",
    "method": "getToken",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Authentication",
    "typeScriptTag": "authentication",
    "description": "",
    "parameters": [
      {
        "name": "token",
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
        "description": "Bad Request"
      }
    ]
  },
  {
    "url": "/basic/auth/token",
    "method": "requestToken",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Authentication",
    "typeScriptTag": "authentication",
    "description": "",
    "parameters": [
      {
        "name": "username",
        "schema": "string",
        "description": ""
      },
      {
        "name": "scope",
        "schema": "array",
        "description": ""
      },
      {
        "name": "refresh_token",
        "schema": "string",
        "description": ""
      },
      {
        "name": "third_party",
        "schema": "string",
        "description": ""
      },
      {
        "name": "redirect_uri",
        "schema": "string",
        "description": ""
      },
      {
        "name": "client_id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "code",
        "schema": "string",
        "description": ""
      },
      {
        "name": "token",
        "schema": "string",
        "description": ""
      },
      {
        "name": "customerScoped",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "grant_type",
        "schema": "string",
        "description": ""
      },
      {
        "name": "password",
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
    "url": "/object/calendars/{objectId}/claim",
    "method": "claimCalendar",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Object",
    "typeScriptTag": "object",
    "description": "",
    "parameters": [
      {
        "name": "objectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "OBJECTID"
      },
      {
        "name": "id",
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
    "url": "/object/chatV2/{objectId}/rooms",
    "method": "deleteRoom",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Object",
    "typeScriptTag": "object",
    "description": "",
    "parameters": [
      {
        "name": "objectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "OBJECTID"
      },
      {
        "name": "roomId",
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
    "url": "/object/chatV2/{objectId}/rooms",
    "method": "getChatRooms",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Object",
    "typeScriptTag": "object",
    "description": "",
    "parameters": [
      {
        "name": "objectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "OBJECTID"
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
    "url": "/object/chatV2/{objectId}/rooms",
    "method": "createChatRoom",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Object",
    "typeScriptTag": "object",
    "description": "",
    "parameters": [
      {
        "name": "objectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "OBJECTID"
      },
      {
        "name": "roomName",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "keepSubscribed",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "players",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "gameType",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "dbids",
        "schema": "array",
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
        "description": "Bad Request"
      }
    ]
  },
  {
    "url": "/object/chatV2/{objectId}/messages",
    "method": "sendMessage",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Message",
    "typeScriptTag": "message",
    "description": "",
    "parameters": [
      {
        "name": "objectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "OBJECTID"
      },
      {
        "name": "roomId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "content",
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
    "url": "/basic/cloudsaving/data/replace",
    "method": "replaceData",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Cloudsaving",
    "typeScriptTag": "cloudsaving",
    "description": "",
    "parameters": [
      {
        "name": "sourcePlayerId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "targetPlayerId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
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
    "url": "/basic/cloudsaving/data",
    "method": "deleteData",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Cloudsaving",
    "typeScriptTag": "cloudsaving",
    "description": "",
    "parameters": [
      {
        "name": "request",
        "schema": "array",
        "description": ""
      },
      {
        "name": "playerId",
        "schema": "integer",
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
    "url": "/basic/cloudsaving/data/downloadURL",
    "method": "getDataDownloadUrl",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Cloudsaving",
    "typeScriptTag": "cloudsaving",
    "description": "",
    "parameters": [
      {
        "name": "request",
        "schema": "array",
        "description": ""
      },
      {
        "name": "playerId",
        "schema": "integer",
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
    "url": "/basic/cloudsaving/data/metadata",
    "method": "getDataMetadata",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Cloudsaving",
    "typeScriptTag": "cloudsaving",
    "description": "",
    "parameters": [
      {
        "name": "request",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "playerId",
        "schema": "integer",
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
        "description": "Bad Request"
      }
    ]
  },
  {
    "url": "/basic/cloudsaving/data/move",
    "method": "moveDataPut",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Cloudsaving",
    "typeScriptTag": "cloudsaving",
    "description": "",
    "parameters": [
      {
        "name": "playerId",
        "schema": "integer",
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
    "url": "/basic/cloudsaving/data/uploadURLFromPortal",
    "method": "uploadUrlFromPortal",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Cloudsaving",
    "typeScriptTag": "cloudsaving",
    "description": "",
    "parameters": [
      {
        "name": "request",
        "schema": "array",
        "description": ""
      },
      {
        "name": "playerId",
        "schema": "integer",
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
    "url": "/basic/cloudsaving/data/commitManifest",
    "method": "commitManifestPut",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Cloudsaving",
    "typeScriptTag": "cloudsaving",
    "description": "",
    "parameters": [
      {
        "name": "request",
        "schema": "array",
        "description": ""
      },
      {
        "name": "playerId",
        "schema": "integer",
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
    "url": "/basic/cloudsaving/data/uploadURL",
    "method": "uploadDataUrl",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Cloudsaving",
    "typeScriptTag": "cloudsaving",
    "description": "",
    "parameters": [
      {
        "name": "request",
        "schema": "array",
        "description": ""
      },
      {
        "name": "playerId",
        "schema": "integer",
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
    "url": "/basic/commerce/catalog",
    "method": "getCatalog",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Product",
    "typeScriptTag": "product",
    "description": "",
    "parameters": [
      {
        "name": "version",
        "schema": "integer",
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
        "description": "Bad Request"
      }
    ]
  },
  {
    "url": "/basic/commerce/skus",
    "method": "listSkus",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "SKU",
    "typeScriptTag": "sku",
    "description": "",
    "parameters": [
      {
        "name": "version",
        "schema": "integer",
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
        "description": "Bad Request"
      }
    ]
  },
  {
    "url": "/basic/commerce/skus",
    "method": "createSku",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "SKU",
    "typeScriptTag": "sku",
    "description": "",
    "parameters": [
      {
        "name": "definitions",
        "schema": "array",
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
    "url": "/object/commerce/{objectId}/coupons/count",
    "method": "getCommerceCouponCount",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Object",
    "typeScriptTag": "object",
    "description": "",
    "parameters": [
      {
        "name": "objectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "OBJECTID"
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
    "url": "/object/commerce/{objectId}/offersAdmin",
    "method": "getOffersAdmin",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Object",
    "typeScriptTag": "object",
    "description": "",
    "parameters": [
      {
        "name": "language",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "time",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "stores",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "objectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "OBJECTID"
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
    "url": "/object/commerce/{objectId}/purchase",
    "method": "purchaseItem",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Object",
    "typeScriptTag": "object",
    "description": "",
    "parameters": [
      {
        "name": "objectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "OBJECTID"
      },
      {
        "name": "purchaseId",
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
    "url": "/object/commerce/{objectId}/purchase",
    "method": "purchaseById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Object",
    "typeScriptTag": "object",
    "description": "",
    "parameters": [
      {
        "name": "objectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "OBJECTID"
      },
      {
        "name": "listingId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "free",
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
    "url": "/object/commerce/{objectId}/listings",
    "method": "getCommerceListings",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Object",
    "typeScriptTag": "object",
    "description": "",
    "parameters": [
      {
        "name": "listing",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "store",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "time",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "objectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "OBJECTID"
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
    "url": "/object/commerce/{objectId}/status",
    "method": "deleteStatusById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Object",
    "typeScriptTag": "object",
    "description": "",
    "parameters": [
      {
        "name": "objectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "OBJECTID"
      },
      {
        "name": "store",
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
    "url": "/object/commerce/{objectId}/coupons",
    "method": "createCommerceCoupons",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Object",
    "typeScriptTag": "object",
    "description": "",
    "parameters": [
      {
        "name": "objectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "OBJECTID"
      },
      {
        "name": "listing",
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
    "url": "/object/commerce/{objectId}/stats/update",
    "method": "updateStatObject",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Object",
    "typeScriptTag": "object",
    "description": "",
    "parameters": [
      {
        "name": "objectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "OBJECTID"
      },
      {
        "name": "statsBefore",
        "schema": "object",
        "description": ""
      },
      {
        "name": "statsAfter",
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
        "statusCode": "400",
        "description": "Bad Request"
      }
    ]
  },
  {
    "url": "/object/commerce/{objectId}/offers",
    "method": "getCommerceOffers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Object",
    "typeScriptTag": "object",
    "description": "",
    "parameters": [
      {
        "name": "language",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "time",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "stores",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "objectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "OBJECTID"
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
    "url": "/basic/content/manifest/pull",
    "method": "pullManifestData",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Content",
    "typeScriptTag": "content",
    "description": "",
    "parameters": [
      {
        "name": "sourceRealmPid",
        "schema": "string",
        "description": ""
      },
      {
        "name": "id",
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
    "url": "/basic/content/content",
    "method": "getContentDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Content",
    "typeScriptTag": "content",
    "description": "",
    "parameters": [
      {
        "name": "contentId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "version",
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
        "description": "Bad Request"
      }
    ]
  },
  {
    "url": "/basic/content/text",
    "method": "submitTextContent",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Content",
    "typeScriptTag": "content",
    "description": "",
    "parameters": [
      {
        "name": "text",
        "schema": "array",
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
    "url": "/basic/content/manifest",
    "method": "getManifestData",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Content",
    "typeScriptTag": "content",
    "description": "",
    "parameters": [
      {
        "name": "id",
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
        "description": "Bad Request"
      }
    ]
  },
  {
    "url": "/basic/content/manifest",
    "method": "createManifestData",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Content",
    "typeScriptTag": "content",
    "description": "",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "references",
        "schema": "array",
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
    "url": "/basic/content/manifest/public",
    "method": "getPublicManifest",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Content",
    "typeScriptTag": "content",
    "description": "",
    "parameters": [
      {
        "name": "id",
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
        "description": "Bad Request"
      }
    ]
  },
  {
    "url": "/basic/content/manifest/private",
    "method": "getPrivateManifest",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Content",
    "typeScriptTag": "content",
    "description": "",
    "parameters": [
      {
        "name": "id",
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
        "description": "Bad Request"
      }
    ]
  },
  {
    "url": "/basic/content/manifest/checksum",
    "method": "checkManifestChecksum",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Content",
    "typeScriptTag": "content",
    "description": "",
    "parameters": [
      {
        "name": "id",
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
        "description": "Bad Request"
      }
    ]
  },
  {
    "url": "/basic/events/content",
    "method": "getContentData",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Content",
    "typeScriptTag": "content",
    "description": "",
    "parameters": [],
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
    "url": "/basic/events/calendar",
    "method": "getCalendarEvents",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Event",
    "typeScriptTag": "event",
    "description": "",
    "parameters": [
      {
        "name": "from",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "to",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "query",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "limit",
        "schema": "integer",
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
        "description": "Bad Request"
      }
    ]
  },
  {
    "url": "/basic/events/applyContent",
    "method": "applyContentData",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Content",
    "typeScriptTag": "content",
    "description": "",
    "parameters": [
      {
        "name": "content",
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
        "statusCode": "400",
        "description": "Bad Request"
      }
    ]
  },
  {
    "url": "/basic/events/running",
    "method": "getRunningEvents",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Activity",
    "typeScriptTag": "activity",
    "description": "",
    "parameters": [],
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
    "url": "/object/events/{objectId}/endPhase",
    "method": "updateObjectEndPhase",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Event",
    "typeScriptTag": "event",
    "description": "",
    "parameters": [
      {
        "name": "objectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "OBJECTID"
      },
      {
        "name": "time",
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
    "url": "/object/events/{objectId}/ping",
    "method": "pingObjectEvents",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Event",
    "typeScriptTag": "event",
    "description": "",
    "parameters": [
      {
        "name": "objectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "OBJECTID"
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
    "url": "/object/events/{objectId}/content",
    "method": "deleteEventContent",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Content",
    "typeScriptTag": "content",
    "description": "",
    "parameters": [
      {
        "name": "objectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "OBJECTID"
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
    "url": "/object/events/{objectId}/content",
    "method": "updateObjectContent",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Content",
    "typeScriptTag": "content",
    "description": "",
    "parameters": [
      {
        "name": "objectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "OBJECTID"
      },
      {
        "name": "event",
        "schema": "object",
        "description": ""
      },
      {
        "name": "origin",
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
    "url": "/object/events/{objectId}/refresh",
    "method": "refreshObjectEvents",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Event",
    "typeScriptTag": "event",
    "description": "",
    "parameters": [
      {
        "name": "objectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "OBJECTID"
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
    "url": "/object/event-players/{objectId}/claim",
    "method": "claimObjectEventPlayers",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Event",
    "typeScriptTag": "event",
    "description": "",
    "parameters": [
      {
        "name": "objectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "OBJECTID"
      },
      {
        "name": "eventId",
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
    "url": "/object/event-players/{objectId}/score",
    "method": "updatePlayerScore",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Event",
    "typeScriptTag": "event",
    "description": "",
    "parameters": [
      {
        "name": "objectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "OBJECTID"
      },
      {
        "name": "eventId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "score",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "increment",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "stats",
        "schema": "object",
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
        "description": "Bad Request"
      }
    ]
  },
  {
    "url": "/object/gamerelay/{objectId}/sync",
    "method": "relayObjectSync",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Game",
    "typeScriptTag": "game",
    "description": "",
    "parameters": [
      {
        "name": "objectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "OBJECTID"
      },
      {
        "name": "t",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "events",
        "schema": "array",
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
        "description": "Bad Request"
      }
    ]
  },
  {
    "url": "/object/gamerelay/{objectId}/results",
    "method": "relayObjectResults",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Game",
    "typeScriptTag": "game",
    "description": "",
    "parameters": [
      {
        "name": "objectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "OBJECTID"
      },
      {
        "name": "results",
        "schema": "array",
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
    "url": "/object/inventory/{objectId}/preview",
    "method": "updateInventoryPreview",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Object",
    "typeScriptTag": "object",
    "description": "",
    "parameters": [
      {
        "name": "objectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "OBJECTID"
      },
      {
        "name": "currencies",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "empty",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "currencyProperties",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "currencyContentIds",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "applyVipBonus",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "itemContentIds",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "updateItems",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "newItems",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "transaction",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "deleteItems",
        "schema": "array",
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
        "description": "Bad Request"
      }
    ]
  },
  {
    "url": "/object/inventory/{objectId}/multipliers",
    "method": "getMultipliers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Object",
    "typeScriptTag": "object",
    "description": "",
    "parameters": [
      {
        "name": "objectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "OBJECTID"
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
    "url": "/object/inventory/{objectId}/transaction",
    "method": "removeTransactionById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Object",
    "typeScriptTag": "object",
    "description": "",
    "parameters": [
      {
        "name": "objectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "OBJECTID"
      },
      {
        "name": "transaction",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TRANSACTION"
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
    "url": "/object/inventory/{objectId}/transfer",
    "method": "transferItemInventory",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Object",
    "typeScriptTag": "object",
    "description": "",
    "parameters": [
      {
        "name": "objectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "OBJECTID"
      },
      {
        "name": "transaction",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "recipientPlayer",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "currencies",
        "schema": "object",
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
        "description": "Bad Request"
      }
    ]
  },
  {
    "url": "/basic/inventory/items",
    "method": "listItems",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Item",
    "typeScriptTag": "item",
    "description": "",
    "parameters": [],
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
    "url": "/basic/inventory/currency",
    "method": "getInventoryCurrency",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Currency",
    "typeScriptTag": "currency",
    "description": "",
    "parameters": [],
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
    "url": "/basic/leaderboards/list",
    "method": "listUserScores",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Leaderboard",
    "typeScriptTag": "leaderboard",
    "description": "",
    "parameters": [
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "limit",
        "schema": "integer",
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
        "description": "Bad Request"
      }
    ]
  },
  {
    "url": "/basic/leaderboards/player",
    "method": "getPlayerScores",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Leaderboard",
    "typeScriptTag": "leaderboard",
    "description": "",
    "parameters": [
      {
        "name": "dbid",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
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
    "url": "/basic/leaderboards/assignment",
    "method": "getAssignmentLeaderboard",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Leaderboard",
    "typeScriptTag": "leaderboard",
    "description": "",
    "parameters": [
      {
        "name": "boardId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "BOARDID"
      },
      {
        "name": "joinBoard",
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
        "description": "Bad Request"
      }
    ]
  },
  {
    "url": "/basic/leaderboards/uid",
    "method": "getUserScores",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Leaderboard",
    "typeScriptTag": "leaderboard",
    "description": "",
    "parameters": [],
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
    "url": "/object/leaderboards/{objectId}/entries",
    "method": "deleteEntries",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Leaderboard",
    "typeScriptTag": "leaderboard",
    "description": "",
    "parameters": [
      {
        "name": "objectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "OBJECTID"
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
    "url": "/object/leaderboards/{objectId}/membership",
    "method": "getObjectMembership",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Leaderboard",
    "typeScriptTag": "leaderboard",
    "description": "",
    "parameters": [
      {
        "name": "playerId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "objectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "OBJECTID"
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
    "url": "/object/leaderboards/{objectId}/ranks",
    "method": "listObjectRanks",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Leaderboard",
    "typeScriptTag": "leaderboard",
    "description": "",
    "parameters": [
      {
        "name": "ids",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "objectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "OBJECTID"
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
    "url": "/object/leaderboards/{objectId}/partition",
    "method": "getObjectPartition",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Leaderboard",
    "typeScriptTag": "leaderboard",
    "description": "",
    "parameters": [
      {
        "name": "playerId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "objectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "OBJECTID"
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
    "url": "/object/leaderboards/{objectId}/matches",
    "method": "getObjectMatches",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Leaderboard",
    "typeScriptTag": "leaderboard",
    "description": "",
    "parameters": [
      {
        "name": "poolSize",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "windows",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "windowSize",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "objectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "OBJECTID"
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
    "url": "/object/leaderboards/{objectId}/assignment",
    "method": "removeAssignment",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Leaderboard",
    "typeScriptTag": "leaderboard",
    "description": "",
    "parameters": [
      {
        "name": "objectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "OBJECTID"
      },
      {
        "name": "playerId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
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
    "url": "/object/leaderboards/{objectId}/entry",
    "method": "removeEntry",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Leaderboard",
    "typeScriptTag": "leaderboard",
    "description": "",
    "parameters": [
      {
        "name": "objectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "OBJECTID"
      },
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
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
    "url": "/object/leaderboards/{objectId}/entry",
    "method": "updateEntry",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Leaderboard",
    "typeScriptTag": "leaderboard",
    "description": "",
    "parameters": [
      {
        "name": "objectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "OBJECTID"
      },
      {
        "name": "maxScore",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "stats",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "score",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "minScore",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "increment",
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
        "description": "Bad Request"
      }
    ]
  },
  {
    "url": "/object/leaderboards/{objectId}/freeze",
    "method": "createFreezeRequest",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Leaderboard",
    "typeScriptTag": "leaderboard",
    "description": "",
    "parameters": [
      {
        "name": "objectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "OBJECTID"
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
    "url": "/object/leaderboards/{objectId}/details",
    "method": "getObjectDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Leaderboard",
    "typeScriptTag": "leaderboard",
    "description": "",
    "parameters": [
      {
        "name": "from",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "max",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "objectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "OBJECTID"
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
    "url": "/object/leaderboards/{objectId}/view",
    "method": "getObjectView",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Leaderboard",
    "typeScriptTag": "leaderboard",
    "description": "",
    "parameters": [
      {
        "name": "max",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "focus",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "friends",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "from",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "outlier",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "guild",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "objectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "OBJECTID"
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
    "url": "/object/leaderboards/{objectId}/swap",
    "method": "swapObjectLeaderboard",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Leaderboard",
    "typeScriptTag": "leaderboard",
    "description": "",
    "parameters": [
      {
        "name": "objectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "OBJECTID"
      },
      {
        "name": "winnerId",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "loserId",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "swapBase",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "delta",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
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
    "url": "/basic/groups/search",
    "method": "searchGroups",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Group",
    "typeScriptTag": "group",
    "description": "",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "scoreMin",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "sortField",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "userScore",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "hasSlots",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "enrollmentTypes",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "scoreMax",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "subGroup",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "sortValue",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "type",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "limit",
        "schema": "integer",
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
        "description": "Bad Request"
      }
    ]
  },
  {
    "url": "/object/groups/{objectId}/role",
    "method": "updateRole",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Group",
    "typeScriptTag": "group",
    "description": "",
    "parameters": [
      {
        "name": "objectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "OBJECTID"
      },
      {
        "name": "gamerTag",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "role",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "subGroup",
        "schema": "integer",
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
        "description": "Bad Request"
      }
    ]
  },
  {
    "url": "/object/groups/{objectId}/kick",
    "method": "kickObjectGroup",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Group",
    "typeScriptTag": "group",
    "description": "",
    "parameters": [
      {
        "name": "objectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "OBJECTID"
      },
      {
        "name": "gamerTag",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "subGroup",
        "schema": "integer",
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
        "description": "Bad Request"
      }
    ]
  },
  {
    "url": "/object/groups/{objectId}/apply",
    "method": "applyObjectGroups",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Group",
    "typeScriptTag": "group",
    "description": "",
    "parameters": [
      {
        "name": "objectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "OBJECTID"
      },
      {
        "name": "subGroup",
        "schema": "integer",
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
    "url": "/object/groups/{objectId}/donations",
    "method": "createDonation",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Group",
    "typeScriptTag": "group",
    "description": "",
    "parameters": [
      {
        "name": "objectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "OBJECTID"
      },
      {
        "name": "currencyId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "amount",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "config",
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
        "description": "Bad Request"
      }
    ]
  },
  {
    "url": "/object/groups/{objectId}/donations",
    "method": "updateDonation",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Group",
    "typeScriptTag": "group",
    "description": "",
    "parameters": [
      {
        "name": "objectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "OBJECTID"
      },
      {
        "name": "recipientId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "amount",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
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
    "url": "/object/groups/{objectId}/member",
    "method": "removeMember",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Group",
    "typeScriptTag": "group",
    "description": "",
    "parameters": [
      {
        "name": "objectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "OBJECTID"
      },
      {
        "name": "gamerTag",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "subGroup",
        "schema": "integer",
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
        "description": "Bad Request"
      }
    ]
  },
  {
    "url": "/object/groups/{objectId}/invite",
    "method": "inviteObjectGroup",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Group",
    "typeScriptTag": "group",
    "description": "",
    "parameters": [
      {
        "name": "objectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "OBJECTID"
      },
      {
        "name": "gamerTag",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "subGroup",
        "schema": "integer",
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
        "description": "Bad Request"
      }
    ]
  },
  {
    "url": "/object/groups/{objectId}/petition",
    "method": "createPetition",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Group",
    "typeScriptTag": "group",
    "description": "",
    "parameters": [
      {
        "name": "objectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "OBJECTID"
      },
      {
        "name": "subGroup",
        "schema": "integer",
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
    "url": "/object/group-users/{objectId}/availability",
    "method": "getUserAvailability",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Group",
    "typeScriptTag": "group",
    "description": "",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "tag",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "type",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "subGroup",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "objectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "OBJECTID"
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
    "url": "/object/group-users/{objectId}/recommended",
    "method": "getRecommendedUsers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Group",
    "typeScriptTag": "group",
    "description": "",
    "parameters": [
      {
        "name": "objectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "OBJECTID"
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
    "url": "/object/group-users/{objectId}/join",
    "method": "joinUserDelete",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Group",
    "typeScriptTag": "group",
    "description": "",
    "parameters": [
      {
        "name": "objectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "OBJECTID"
      },
      {
        "name": "successor",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "score",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "subGroup",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "type",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "group",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
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
    "url": "/object/group-users/{objectId}/join",
    "method": "joinUserToGroup",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Group",
    "typeScriptTag": "group",
    "description": "",
    "parameters": [
      {
        "name": "objectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "OBJECTID"
      },
      {
        "name": "successor",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "score",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "subGroup",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "type",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "group",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
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
    "url": "/object/group-users/{objectId}/group",
    "method": "assignObjectGroup",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Group",
    "typeScriptTag": "group",
    "description": "",
    "parameters": [
      {
        "name": "objectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "OBJECTID"
      },
      {
        "name": "name",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "enrollmentType",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "tag",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "requirement",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "clientData",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "scores",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "time",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "type",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "maxSize",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "group",
        "schema": "integer",
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
        "description": "Bad Request"
      }
    ]
  },
  {
    "url": "/object/group-users/{objectId}/search",
    "method": "searchUsers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Group",
    "typeScriptTag": "group",
    "description": "",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "scoreMin",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "sortField",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "userScore",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "hasSlots",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "enrollmentTypes",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "scoreMax",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "subGroup",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "sortValue",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "type",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "objectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "OBJECTID"
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
    "url": "/basic/mail/attachments",
    "method": "uploadAttachment",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Mail",
    "typeScriptTag": "mail",
    "description": "",
    "parameters": [
      {
        "name": "mailIds",
        "schema": "array",
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
    "url": "/basic/mail/template",
    "method": "getMailTemplate",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Mail",
    "typeScriptTag": "mail",
    "description": "",
    "parameters": [
      {
        "name": "templateName",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "gamerTag",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
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
    "url": "/basic/mail/bulk",
    "method": "sendBulkEmails",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Mail",
    "typeScriptTag": "mail",
    "description": "",
    "parameters": [
      {
        "name": "sendMailRequests",
        "schema": "array",
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
    "url": "/object/mail/{objectId}/detail",
    "method": "getObjectDetail",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Mail",
    "typeScriptTag": "mail",
    "description": "",
    "parameters": [
      {
        "name": "mid",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "objectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "OBJECTID"
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
    "url": "/object/mail/{objectId}/categories",
    "method": "getObjectCategories",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Mail",
    "typeScriptTag": "mail",
    "description": "",
    "parameters": [
      {
        "name": "objectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "OBJECTID"
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
    "url": "/object/mail/{objectId}/search",
    "method": "searchMailObject",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Mail",
    "typeScriptTag": "mail",
    "description": "",
    "parameters": [
      {
        "name": "objectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "OBJECTID"
      },
      {
        "name": "clauses",
        "schema": "array",
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
    "url": "/object/mail/{objectId}/bulk",
    "method": "sendBulkItems",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Mail",
    "typeScriptTag": "mail",
    "description": "",
    "parameters": [
      {
        "name": "objectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "OBJECTID"
      },
      {
        "name": "sendMailRequests",
        "schema": "array",
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
    "url": "/object/mail/{objectId}/bulk",
    "method": "updateObjectBulk",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Mail",
    "typeScriptTag": "mail",
    "description": "",
    "parameters": [
      {
        "name": "objectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "OBJECTID"
      },
      {
        "name": "updateMailRequests",
        "schema": "array",
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
    "url": "/object/mail/{objectId}/accept/many",
    "method": "acceptMany",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Mail",
    "typeScriptTag": "mail",
    "description": "",
    "parameters": [
      {
        "name": "objectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "OBJECTID"
      },
      {
        "name": "mailIds",
        "schema": "array",
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
    "url": "/object/matchmaking/{objectId}/tick",
    "method": "updateMatchmakingTick",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Object",
    "typeScriptTag": "object",
    "description": "",
    "parameters": [
      {
        "name": "objectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "OBJECTID"
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
    "url": "/object/matchmaking/{objectId}/match",
    "method": "matchmakingDelete",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Object",
    "typeScriptTag": "object",
    "description": "",
    "parameters": [
      {
        "name": "objectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "OBJECTID"
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
    "url": "/object/matchmaking/{objectId}/match",
    "method": "getMatchmakingData",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Object",
    "typeScriptTag": "object",
    "description": "",
    "parameters": [
      {
        "name": "objectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "OBJECTID"
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
    "url": "/object/matchmaking/{objectId}/match",
    "method": "startMatchmakingProcess",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Object",
    "typeScriptTag": "object",
    "description": "",
    "parameters": [
      {
        "name": "objectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "OBJECTID"
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
    "url": "/basic/payments/windows/purchase/track",
    "method": "windowsPurchaseTrack",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Payment",
    "typeScriptTag": "payment",
    "description": "",
    "parameters": [
      {
        "name": "priceInLocalCurrency",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "skuName",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "skuProductId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "store",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "obtainItems",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "obtainCurrency",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "purchaseId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "isoCurrencySymbol",
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
        "description": "Bad Request"
      }
    ]
  },
  {
    "url": "/basic/payments/audits",
    "method": "getPaymentAudits",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Audit",
    "typeScriptTag": "audit",
    "description": "",
    "parameters": [
      {
        "name": "providerid",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "provider",
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
        "name": "txid",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "player",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "start",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "limit",
        "schema": "integer",
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
        "description": "Bad Request"
      }
    ]
  },
  {
    "url": "/basic/payments/windows/purchase/complete",
    "method": "processComplete",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Payment",
    "typeScriptTag": "payment",
    "description": "",
    "parameters": [
      {
        "name": "txid",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "receipt",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "priceInLocalCurrency",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "isoCurrencySymbol",
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
        "description": "Bad Request"
      }
    ]
  },
  {
    "url": "/basic/payments/test/purchase/begin",
    "method": "processBegin",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Payment",
    "typeScriptTag": "payment",
    "description": "",
    "parameters": [
      {
        "name": "purchaseId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "language",
        "schema": "string",
        "description": ""
      },
      {
        "name": "time",
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
    "url": "/basic/payments/facebook/update",
    "method": "facebookPaymentsUpdate",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Update",
    "typeScriptTag": "update",
    "description": "",
    "parameters": [
      {
        "name": "hubMode",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "hubChallenge",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "hubVerifyToken",
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
        "description": "Bad Request"
      }
    ]
  },
  {
    "url": "/basic/payments/facebook/update",
    "method": "facebookPaymentsUpdate",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Update",
    "typeScriptTag": "update",
    "description": "",
    "parameters": [
      {
        "name": "object",
        "schema": "string",
        "description": ""
      },
      {
        "name": "entry",
        "schema": "array",
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
    "url": "/basic/payments/steam/purchase/fail",
    "method": "steamPurchaseFail",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Payment",
    "typeScriptTag": "payment",
    "description": "",
    "parameters": [
      {
        "name": "txid",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "reason",
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
        "description": "Bad Request"
      }
    ]
  },
  {
    "url": "/basic/payments/facebook/purchase/complete",
    "method": "facebookPurchaseComplete",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Payment",
    "typeScriptTag": "payment",
    "description": "",
    "parameters": [
      {
        "name": "txid",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "receipt",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "priceInLocalCurrency",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "isoCurrencySymbol",
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
        "description": "Bad Request"
      }
    ]
  },
  {
    "url": "/basic/payments/facebook/purchase/fail",
    "method": "facebookPurchaseFailure",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Payment",
    "typeScriptTag": "payment",
    "description": "",
    "parameters": [
      {
        "name": "txid",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "reason",
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
        "description": "Bad Request"
      }
    ]
  },
  {
    "url": "/basic/payments/test/purchase/complete",
    "method": "completePurchase",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Payment",
    "typeScriptTag": "payment",
    "description": "",
    "parameters": [
      {
        "name": "txid",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "receipt",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "priceInLocalCurrency",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "isoCurrencySymbol",
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
        "description": "Bad Request"
      }
    ]
  },
  {
    "url": "/basic/payments/itunes/product",
    "method": "getItunesItem",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Product",
    "typeScriptTag": "product",
    "description": "",
    "parameters": [
      {
        "name": "sku",
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
        "description": "Bad Request"
      }
    ]
  },
  {
    "url": "/basic/payments/googleplay/purchase/complete",
    "method": "completePurchaseProcess",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Payment",
    "typeScriptTag": "payment",
    "description": "",
    "parameters": [
      {
        "name": "txid",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "receipt",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "priceInLocalCurrency",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "isoCurrencySymbol",
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
        "description": "Bad Request"
      }
    ]
  },
  {
    "url": "/basic/payments/test/purchase/track",
    "method": "trackPurchasePost",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Payment",
    "typeScriptTag": "payment",
    "description": "",
    "parameters": [
      {
        "name": "priceInLocalCurrency",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "skuName",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "skuProductId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "store",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "obtainItems",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "obtainCurrency",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "purchaseId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "isoCurrencySymbol",
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
        "description": "Bad Request"
      }
    ]
  },
  {
    "url": "/basic/payments/googleplay/purchase/begin",
    "method": "googlePlayPurchaseBegin",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Payment",
    "typeScriptTag": "payment",
    "description": "",
    "parameters": [
      {
        "name": "purchaseId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "language",
        "schema": "string",
        "description": ""
      },
      {
        "name": "time",
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
    "url": "/basic/payments/itunes/purchase/begin",
    "method": "itunesPurchaseBegin",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Payment",
    "typeScriptTag": "payment",
    "description": "",
    "parameters": [
      {
        "name": "purchaseId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "language",
        "schema": "string",
        "description": ""
      },
      {
        "name": "time",
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
    "url": "/basic/payments/facebook/purchase/cancel",
    "method": "facebookPurchaseCancel",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Payment",
    "typeScriptTag": "payment",
    "description": "",
    "parameters": [
      {
        "name": "txid",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
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
    "url": "/basic/payments/coupon/purchase/track",
    "method": "trackPurchasePost",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Payment",
    "typeScriptTag": "payment",
    "description": "",
    "parameters": [
      {
        "name": "priceInLocalCurrency",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "skuName",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "skuProductId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "store",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "obtainItems",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "obtainCurrency",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "purchaseId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "isoCurrencySymbol",
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
        "description": "Bad Request"
      }
    ]
  },
  {
    "url": "/basic/payments/steam/purchase/complete",
    "method": "steamPurchaseComplete",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Payment",
    "typeScriptTag": "payment",
    "description": "",
    "parameters": [
      {
        "name": "txid",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "receipt",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "priceInLocalCurrency",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "isoCurrencySymbol",
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
        "description": "Bad Request"
      }
    ]
  },
  {
    "url": "/basic/payments/facebook/purchase/track",
    "method": "trackPurchasePost",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Payment",
    "typeScriptTag": "payment",
    "description": "",
    "parameters": [
      {
        "name": "priceInLocalCurrency",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "skuName",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "skuProductId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "store",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "obtainItems",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "obtainCurrency",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "purchaseId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "isoCurrencySymbol",
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
        "description": "Bad Request"
      }
    ]
  },
  {
    "url": "/basic/payments/itunes/purchase/fail",
    "method": "processFailure",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Payment",
    "typeScriptTag": "payment",
    "description": "",
    "parameters": [
      {
        "name": "txid",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "reason",
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
        "description": "Bad Request"
      }
    ]
  },
  {
    "url": "/basic/payments/test/purchase/cancel",
    "method": "cancelPurchase",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Payment",
    "typeScriptTag": "payment",
    "description": "",
    "parameters": [
      {
        "name": "txid",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
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
    "url": "/basic/payments/googleplay/purchase/track",
    "method": "trackPurchasePost",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Payment",
    "typeScriptTag": "payment",
    "description": "",
    "parameters": [
      {
        "name": "priceInLocalCurrency",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "skuName",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "skuProductId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "store",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "obtainItems",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "obtainCurrency",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "purchaseId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "isoCurrencySymbol",
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
        "description": "Bad Request"
      }
    ]
  },
  {
    "url": "/basic/payments/steam/prices",
    "method": "getSteamPrices",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Price",
    "typeScriptTag": "price",
    "description": "",
    "parameters": [
      {
        "name": "steamId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
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
    "url": "/basic/payments/test/purchase/fail",
    "method": "processFailure",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Payment",
    "typeScriptTag": "payment",
    "description": "",
    "parameters": [
      {
        "name": "txid",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "reason",
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
        "description": "Bad Request"
      }
    ]
  },
  {
    "url": "/basic/payments/coupon/purchase/cancel",
    "method": "couponPurchaseCancel",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Payment",
    "typeScriptTag": "payment",
    "description": "",
    "parameters": [
      {
        "name": "txid",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
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
    "url": "/basic/payments/itunes/purchase/complete",
    "method": "completeItunesPurchase",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Payment",
    "typeScriptTag": "payment",
    "description": "",
    "parameters": [
      {
        "name": "txid",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "receipt",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "priceInLocalCurrency",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "isoCurrencySymbol",
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
        "description": "Bad Request"
      }
    ]
  },
  {
    "url": "/basic/payments/coupon/purchase/begin",
    "method": "couponPurchaseBegin",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Payment",
    "typeScriptTag": "payment",
    "description": "",
    "parameters": [
      {
        "name": "purchaseId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "language",
        "schema": "string",
        "description": ""
      },
      {
        "name": "time",
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
    "url": "/basic/payments/steam/purchase/track",
    "method": "trackPurchasePost",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Payment",
    "typeScriptTag": "payment",
    "description": "",
    "parameters": [
      {
        "name": "priceInLocalCurrency",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "skuName",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "skuProductId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "store",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "obtainItems",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "obtainCurrency",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "purchaseId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "isoCurrencySymbol",
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
        "description": "Bad Request"
      }
    ]
  },
  {
    "url": "/basic/payments/facebook/purchase/begin",
    "method": "facebookPurchaseBegin",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Payment",
    "typeScriptTag": "payment",
    "description": "",
    "parameters": [
      {
        "name": "purchaseId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "language",
        "schema": "string",
        "description": ""
      },
      {
        "name": "time",
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
    "url": "/basic/payments/steam/order",
    "method": "getSteam",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Order",
    "typeScriptTag": "order",
    "description": "",
    "parameters": [
      {
        "name": "orderId",
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
        "description": "Bad Request"
      }
    ]
  },
  {
    "url": "/basic/payments/windows/purchase/begin",
    "method": "initializePurchaseProcess",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Payment",
    "typeScriptTag": "payment",
    "description": "",
    "parameters": [
      {
        "name": "purchaseId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "language",
        "schema": "string",
        "description": ""
      },
      {
        "name": "time",
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
    "url": "/basic/payments/windows/product",
    "method": "listWindowsPayments",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Product",
    "typeScriptTag": "product",
    "description": "",
    "parameters": [
      {
        "name": "sku",
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
        "description": "Bad Request"
      }
    ]
  },
  {
    "url": "/basic/payments/googleplay/purchase/fail",
    "method": "processFailure",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Payment",
    "typeScriptTag": "payment",
    "description": "",
    "parameters": [
      {
        "name": "txid",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "reason",
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
        "description": "Bad Request"
      }
    ]
  },
  {
    "url": "/basic/payments/facebook/product",
    "method": "getFacebookProduct",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Product",
    "typeScriptTag": "product",
    "description": "",
    "parameters": [
      {
        "name": "sku",
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
        "description": "Bad Request"
      }
    ]
  },
  {
    "url": "/basic/payments/googleplay/purchase/cancel",
    "method": "googlePlayPurchaseCancel",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Payment",
    "typeScriptTag": "payment",
    "description": "",
    "parameters": [
      {
        "name": "txid",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
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
    "url": "/basic/payments/coupon/product",
    "method": "getCouponDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Product",
    "typeScriptTag": "product",
    "description": "",
    "parameters": [
      {
        "name": "sku",
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
        "description": "Bad Request"
      }
    ]
  },
  {
    "url": "/basic/payments/coupon/purchase/fail",
    "method": "failPurchase",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Payment",
    "typeScriptTag": "payment",
    "description": "",
    "parameters": [
      {
        "name": "txid",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "reason",
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
        "description": "Bad Request"
      }
    ]
  },
  {
    "url": "/basic/payments/steam/purchase/begin",
    "method": "steamPurchaseBegin",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Payment",
    "typeScriptTag": "payment",
    "description": "",
    "parameters": [
      {
        "name": "purchaseId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "language",
        "schema": "string",
        "description": ""
      },
      {
        "name": "time",
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
    "url": "/basic/payments/steam/purchase/cancel",
    "method": "steamPurchaseCancel",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Payment",
    "typeScriptTag": "payment",
    "description": "",
    "parameters": [
      {
        "name": "txid",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
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
    "url": "/basic/payments/steam/auth",
    "method": "steamPostAuth",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Authentication",
    "typeScriptTag": "authentication",
    "description": "",
    "parameters": [
      {
        "name": "ticket",
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
    "url": "/basic/payments/steam/product",
    "method": "getSteamCatalog",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Product",
    "typeScriptTag": "product",
    "description": "",
    "parameters": [
      {
        "name": "sku",
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
        "description": "Bad Request"
      }
    ]
  },
  {
    "url": "/basic/payments/coupon/purchase/complete",
    "method": "completePurchase",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Payment",
    "typeScriptTag": "payment",
    "description": "",
    "parameters": [
      {
        "name": "txid",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "receipt",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "priceInLocalCurrency",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "isoCurrencySymbol",
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
        "description": "Bad Request"
      }
    ]
  },
  {
    "url": "/basic/payments/windows/purchase/cancel",
    "method": "windowsPurchaseCancel",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Payment",
    "typeScriptTag": "payment",
    "description": "",
    "parameters": [
      {
        "name": "txid",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
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
    "url": "/basic/payments/googleplay/product",
    "method": "getGooglePlayDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Product",
    "typeScriptTag": "product",
    "description": "",
    "parameters": [
      {
        "name": "sku",
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
        "description": "Bad Request"
      }
    ]
  },
  {
    "url": "/basic/payments/windows/purchase/fail",
    "method": "processFailure",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Payment",
    "typeScriptTag": "payment",
    "description": "",
    "parameters": [
      {
        "name": "txid",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "reason",
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
        "description": "Bad Request"
      }
    ]
  },
  {
    "url": "/basic/payments/itunes/purchase/cancel",
    "method": "cancelPurchaseProcess",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Payment",
    "typeScriptTag": "payment",
    "description": "",
    "parameters": [
      {
        "name": "txid",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
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
    "url": "/basic/payments/test/product",
    "method": "testGetBasicPayments",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Product",
    "typeScriptTag": "product",
    "description": "",
    "parameters": [
      {
        "name": "sku",
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
        "description": "Bad Request"
      }
    ]
  },
  {
    "url": "/basic/payments/itunes/purchase/track",
    "method": "itunesPurchaseTrack",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Payment",
    "typeScriptTag": "payment",
    "description": "",
    "parameters": [
      {
        "name": "priceInLocalCurrency",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "skuName",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "skuProductId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "store",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "obtainItems",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "obtainCurrency",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "purchaseId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "isoCurrencySymbol",
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
        "description": "Bad Request"
      }
    ]
  },
  {
    "url": "/basic/push/register",
    "method": "pushUser",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Registration",
    "typeScriptTag": "registration",
    "description": "",
    "parameters": [
      {
        "name": "provider",
        "schema": "string",
        "description": ""
      },
      {
        "name": "token",
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
    "url": "/basic/push/send",
    "method": "sendPushNotification",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Message",
    "typeScriptTag": "message",
    "description": "",
    "parameters": [
      {
        "name": "msgs",
        "schema": "array",
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
    "url": "/basic/realms/project/beamable",
    "method": "createBeamable",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Realm",
    "typeScriptTag": "realm",
    "description": "",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "plan",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "sharded",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "parent",
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
        "description": "Bad Request"
      }
    ]
  },
  {
    "url": "/basic/realms/customer/alias/available",
    "method": "checkAliasAvailable",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Realm",
    "typeScriptTag": "realm",
    "description": "",
    "parameters": [
      {
        "name": "alias",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ALIAS"
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
    "url": "/basic/realms/project",
    "method": "deleteProject",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Realm",
    "typeScriptTag": "realm",
    "description": "",
    "parameters": [
      {
        "name": "pid",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PID"
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
    "url": "/basic/realms/project",
    "method": "getProjectRealms",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Realm",
    "typeScriptTag": "realm",
    "description": "",
    "parameters": [],
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
    "url": "/basic/realms/project",
    "method": "createProjectReal",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Realm",
    "typeScriptTag": "realm",
    "description": "",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "plan",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "sharded",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "parent",
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
        "description": "Bad Request"
      }
    ]
  },
  {
    "url": "/basic/realms/project",
    "method": "updateProjectRealms",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Realm",
    "typeScriptTag": "realm",
    "description": "",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PROJECTID"
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
    "url": "/basic/realms/games",
    "method": "getRealmsGames",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Game",
    "typeScriptTag": "game",
    "description": "",
    "parameters": [],
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
    "url": "/basic/realms/config",
    "method": "getConfig",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Realm",
    "typeScriptTag": "realm",
    "description": "",
    "parameters": [],
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
    "url": "/basic/realms/config",
    "method": "updateConfig",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Realm",
    "typeScriptTag": "realm",
    "description": "",
    "parameters": [
      {
        "name": "config",
        "schema": "object",
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
        "description": "Bad Request"
      }
    ]
  },
  {
    "url": "/basic/realms/project/rename",
    "method": "renameProjectRealms",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Realm",
    "typeScriptTag": "realm",
    "description": "",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PROJECTID"
      },
      {
        "name": "newName",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NEWNAME"
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
    "url": "/basic/realms/plans",
    "method": "getRealmsPlans",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Plan",
    "typeScriptTag": "plan",
    "description": "",
    "parameters": [],
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
    "url": "/basic/realms/plans",
    "method": "createNewPlan",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Plan",
    "typeScriptTag": "plan",
    "description": "",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "messageBusAnalytics",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "memcachedHosts",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "MEMCACHEDHOSTS"
      },
      {
        "name": "mongoSSL",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "platformJBDC",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PLATFORMJBDC"
      },
      {
        "name": "sharded",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "mongoHosts",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "MONGOHOSTS"
      },
      {
        "name": "messageBusCommon",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "redisShards",
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
        "description": "Bad Request"
      }
    ]
  },
  {
    "url": "/basic/realms/customer",
    "method": "getCustomerRealms",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Realm",
    "typeScriptTag": "realm",
    "description": "",
    "parameters": [],
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
    "url": "/basic/realms/customer",
    "method": "createCustomerRealm",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Realm",
    "typeScriptTag": "realm",
    "description": "",
    "parameters": [
      {
        "name": "projectName",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PROJECTNAME"
      },
      {
        "name": "email",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EMAIL"
      },
      {
        "name": "customerName",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "hierarchy",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "alias",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "password",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PASSWORD"
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
    "url": "/basic/realms/launch-message",
    "method": "deleteLaunchMessage",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Message",
    "typeScriptTag": "message",
    "description": "",
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
    "url": "/basic/realms/launch-message",
    "method": "getLaunchData",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Message",
    "typeScriptTag": "message",
    "description": "",
    "parameters": [],
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
    "url": "/basic/realms/launch-message",
    "method": "createLaunchMessage",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Message",
    "typeScriptTag": "message",
    "description": "",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "body",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "BODY"
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
    "url": "/basic/realms/is-customer",
    "method": "checkCustomerStatus",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Realm",
    "typeScriptTag": "realm",
    "description": "",
    "parameters": [],
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
    "url": "/basic/realms/admin/customer",
    "method": "getCustomerRealms",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Realm",
    "typeScriptTag": "realm",
    "description": "",
    "parameters": [],
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
    "url": "/basic/realms/game",
    "method": "getRealms",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Game",
    "typeScriptTag": "game",
    "description": "",
    "parameters": [
      {
        "name": "rootPid",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ROOTPID"
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
    "url": "/basic/realms/game",
    "method": "createRealm",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Game",
    "typeScriptTag": "game",
    "description": "",
    "parameters": [
      {
        "name": "gameName",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "GAMENAME"
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
    "url": "/basic/realms/game",
    "method": "updateRealm",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Game",
    "typeScriptTag": "game",
    "description": "",
    "parameters": [
      {
        "name": "rootPID",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ROOTPID"
      },
      {
        "name": "projects",
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
        "description": "Bad Request"
      }
    ]
  },
  {
    "url": "/basic/realms/project/promote",
    "method": "projectPromoteGet",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Realm",
    "typeScriptTag": "realm",
    "description": "",
    "parameters": [
      {
        "name": "sourcePid",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SOURCEPID"
      },
      {
        "name": "promotions",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "contentManifestIds",
        "schema": "array",
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
        "description": "Bad Request"
      }
    ]
  },
  {
    "url": "/basic/realms/project/promote",
    "method": "projectPromote",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Realm",
    "typeScriptTag": "realm",
    "description": "",
    "parameters": [
      {
        "name": "sourcePid",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SOURCEPID"
      },
      {
        "name": "promotions",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "contentManifestIds",
        "schema": "array",
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
        "description": "Bad Request"
      }
    ]
  },
  {
    "url": "/basic/realms/customers",
    "method": "listCustomersRealms",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Realm",
    "typeScriptTag": "realm",
    "description": "",
    "parameters": [],
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
    "url": "/basic/realms/promotion",
    "method": "getPromotionData",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Realm",
    "typeScriptTag": "realm",
    "description": "",
    "parameters": [
      {
        "name": "sourcePid",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SOURCEPID"
      },
      {
        "name": "promotions",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "contentManifestIds",
        "schema": "array",
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
        "description": "Bad Request"
      }
    ]
  },
  {
    "url": "/basic/realms/promotion",
    "method": "createPromotion",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Realm",
    "typeScriptTag": "realm",
    "description": "",
    "parameters": [
      {
        "name": "sourcePid",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SOURCEPID"
      },
      {
        "name": "promotions",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "contentManifestIds",
        "schema": "array",
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
        "description": "Bad Request"
      }
    ]
  },
  {
    "url": "/basic/notification/player",
    "method": "sendPlayerNotification",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Notification",
    "typeScriptTag": "notification",
    "description": "",
    "parameters": [
      {
        "name": "payload",
        "schema": "object",
        "description": ""
      },
      {
        "name": "dbid",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "customChannelSuffix",
        "schema": "string",
        "description": ""
      },
      {
        "name": "dbids",
        "schema": "array",
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
    "url": "/basic/notification/global",
    "method": "sendGlobalNotification",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Notification",
    "typeScriptTag": "notification",
    "description": "",
    "parameters": [
      {
        "name": "payload",
        "schema": "object",
        "description": ""
      },
      {
        "name": "dbid",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "customChannelSuffix",
        "schema": "string",
        "description": ""
      },
      {
        "name": "dbids",
        "schema": "array",
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
    "url": "/basic/notification/custom",
    "method": "createCustomNotification",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Notification",
    "typeScriptTag": "notification",
    "description": "",
    "parameters": [
      {
        "name": "payload",
        "schema": "object",
        "description": ""
      },
      {
        "name": "dbid",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "customChannelSuffix",
        "schema": "string",
        "description": ""
      },
      {
        "name": "dbids",
        "schema": "array",
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
    "url": "/basic/notification/server",
    "method": "sendServerNotification",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Notification",
    "typeScriptTag": "notification",
    "description": "",
    "parameters": [
      {
        "name": "event",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "payload",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "toAll",
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
        "description": "Bad Request"
      }
    ]
  },
  {
    "url": "/basic/notification/generic",
    "method": "sendNotification",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Notification",
    "typeScriptTag": "notification",
    "description": "",
    "parameters": [
      {
        "name": "payload",
        "schema": "object",
        "description": ""
      },
      {
        "name": "dbid",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "customChannelSuffix",
        "schema": "string",
        "description": ""
      },
      {
        "name": "dbids",
        "schema": "array",
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
    "url": "/basic/notification/game",
    "method": "postNotification",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Game",
    "typeScriptTag": "game",
    "description": "",
    "parameters": [
      {
        "name": "payload",
        "schema": "object",
        "description": ""
      },
      {
        "name": "dbid",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "customChannelSuffix",
        "schema": "string",
        "description": ""
      },
      {
        "name": "dbids",
        "schema": "array",
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
    "url": "/basic/session/history",
    "method": "getHistory",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Session",
    "typeScriptTag": "session",
    "description": "",
    "parameters": [
      {
        "name": "dbid",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "month",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "year",
        "schema": "integer",
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
        "description": "Bad Request"
      }
    ]
  },
  {
    "url": "/basic/session/status",
    "method": "getStatus",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Session",
    "typeScriptTag": "session",
    "description": "",
    "parameters": [
      {
        "name": "playerIds",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "intervalSecs",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "playerIdsSeq",
        "schema": "array",
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
        "description": "Bad Request"
      }
    ]
  },
  {
    "url": "/basic/session/heartbeat",
    "method": "postHeartbeat",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Session",
    "typeScriptTag": "session",
    "description": "",
    "parameters": [],
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
    "url": "/basic/stats/client/batch",
    "method": "getClientBatchStats",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Statistic",
    "typeScriptTag": "statistic",
    "description": "",
    "parameters": [
      {
        "name": "objectIds",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "stats",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "format",
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
        "description": "Bad Request"
      }
    ]
  },
  {
    "url": "/basic/stats/batch",
    "method": "batchPost",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Statistic",
    "typeScriptTag": "statistic",
    "description": "",
    "parameters": [
      {
        "name": "updates",
        "schema": "array",
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
    "url": "/basic/stats/search",
    "method": "searchData",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Statistic",
    "typeScriptTag": "statistic",
    "description": "",
    "parameters": [
      {
        "name": "domain",
        "schema": "string",
        "description": ""
      },
      {
        "name": "access",
        "schema": "string",
        "description": ""
      },
      {
        "name": "objectType",
        "schema": "string",
        "description": ""
      },
      {
        "name": "criteria",
        "schema": "array",
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
    "url": "/basic/stats/subscribe",
    "method": "addBasicStatsSubscription",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Subscription",
    "typeScriptTag": "subscription",
    "description": "",
    "parameters": [
      {
        "name": "service",
        "schema": "string",
        "description": ""
      },
      {
        "name": "subscriptions",
        "schema": "array",
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
    "url": "/object/stats/{objectId}/client/stringlist",
    "method": "postClientStringlist",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Object",
    "typeScriptTag": "object",
    "description": "",
    "parameters": [
      {
        "name": "objectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "OBJECTID"
      },
      {
        "name": "set",
        "schema": "array",
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
    "url": "/object/stats/{objectId}/client",
    "method": "getClientStats",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Object",
    "typeScriptTag": "object",
    "description": "",
    "parameters": [
      {
        "name": "stats",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "objectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "OBJECTID"
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
    "url": "/object/stats/{objectId}/client",
    "method": "postClientStats",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Object",
    "typeScriptTag": "object",
    "description": "",
    "parameters": [
      {
        "name": "objectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "OBJECTID"
      },
      {
        "name": "objectId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "set",
        "schema": "object",
        "description": ""
      },
      {
        "name": "add",
        "schema": "object",
        "description": ""
      },
      {
        "name": "emitAnalytics",
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
    "url": "/basic/tournaments/rewards",
    "method": "getRewards",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Tournament",
    "typeScriptTag": "tournament",
    "description": "",
    "parameters": [
      {
        "name": "tournamentId",
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
        "description": "Bad Request"
      }
    ]
  },
  {
    "url": "/basic/tournaments/rewards",
    "method": "createReward",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Tournament",
    "typeScriptTag": "tournament",
    "description": "",
    "parameters": [
      {
        "name": "tournamentId",
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
    "url": "/basic/tournaments/global",
    "method": "getGlobalTournaments",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Tournament",
    "typeScriptTag": "tournament",
    "description": "",
    "parameters": [
      {
        "name": "tournamentId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "max",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "focus",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "cycle",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "from",
        "schema": "integer",
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
        "description": "Bad Request"
      }
    ]
  },
  {
    "url": "/basic/tournaments/standings",
    "method": "getStandings",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Tournament",
    "typeScriptTag": "tournament",
    "description": "",
    "parameters": [
      {
        "name": "tournamentId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "max",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "focus",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "cycle",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "from",
        "schema": "integer",
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
        "description": "Bad Request"
      }
    ]
  },
  {
    "url": "/basic/tournaments/admin/player",
    "method": "adminPlayerDataGet",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Tournament",
    "typeScriptTag": "tournament",
    "description": "",
    "parameters": [
      {
        "name": "playerId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "tournamentId",
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
        "description": "Bad Request"
      }
    ]
  },
  {
    "url": "/basic/tournaments/admin/player",
    "method": "updateAdminPlayer",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Tournament",
    "typeScriptTag": "tournament",
    "description": "",
    "parameters": [
      {
        "name": "playerId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "tournamentId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "update",
        "schema": "object",
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
        "description": "Bad Request"
      }
    ]
  },
  {
    "url": "/basic/tournaments/me",
    "method": "getMyTournament",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Tournament",
    "typeScriptTag": "tournament",
    "description": "",
    "parameters": [
      {
        "name": "tournamentId",
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
        "description": "Bad Request"
      }
    ]
  },
  {
    "url": "/basic/tournaments/champions",
    "method": "getChampions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Tournament",
    "typeScriptTag": "tournament",
    "description": "",
    "parameters": [
      {
        "name": "tournamentId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "cycles",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
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
    "url": "/basic/tournaments/score",
    "method": "submitScore",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Tournament",
    "typeScriptTag": "tournament",
    "description": "",
    "parameters": [
      {
        "name": "tournamentId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "stats",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "score",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "playerId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "increment",
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
        "description": "Bad Request"
      }
    ]
  },
  {
    "url": "/basic/social/friends",
    "method": "removeFriend",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Friend",
    "typeScriptTag": "friend",
    "description": "",
    "parameters": [
      {
        "name": "playerId",
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
    "url": "/basic/social/my",
    "method": "getMySocialData",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Message",
    "typeScriptTag": "message",
    "description": "",
    "parameters": [],
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
    "url": "/basic/social/friends/import",
    "method": "importFriendsData",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Friend",
    "typeScriptTag": "friend",
    "description": "",
    "parameters": [
      {
        "name": "source",
        "schema": "string",
        "description": ""
      },
      {
        "name": "token",
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
    "url": "/basic/social/blocked",
    "method": "userSocialUnblock",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Block",
    "typeScriptTag": "block",
    "description": "",
    "parameters": [
      {
        "name": "playerId",
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
    "url": "/basic/social/blocked",
    "method": "userSocialBlocked",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Block",
    "typeScriptTag": "block",
    "description": "",
    "parameters": [
      {
        "name": "playerId",
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
    "url": "/basic/legacy-timers/defs",
    "method": "getLegacyTimers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Timer",
    "typeScriptTag": "timer",
    "description": "",
    "parameters": [],
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
    "url": "/basic/legacy-promos/codes",
    "method": "getPromoCodes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Promo",
    "typeScriptTag": "promo",
    "description": "",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
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
    "url": "/basic/legacy-promos/codes",
    "method": "generatePromoCode",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Promo",
    "typeScriptTag": "promo",
    "description": "",
    "parameters": [
      {
        "name": "definitionId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "codes",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "claimsPerCode",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
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
    "url": "/basic/legacy-promos/claim",
    "method": "claimLegacyPromo",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Promo",
    "typeScriptTag": "promo",
    "description": "",
    "parameters": [
      {
        "name": "code",
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
    "url": "/basic/legacy-entitlement-defs/grant",
    "method": "createLegacyEntitlementDefs",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Entitlement",
    "typeScriptTag": "entitlement",
    "description": "",
    "parameters": [
      {
        "name": "gamerTags",
        "schema": "array",
        "description": ""
      },
      {
        "name": "generators",
        "schema": "array",
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
    "url": "/basic/legacy-entitlement-defs/revoke",
    "method": "revokeLegacyEntitlementDefs",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Entitlement",
    "typeScriptTag": "entitlement",
    "description": "",
    "parameters": [
      {
        "name": "uuid",
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
    "url": "/basic/legacy-entitlement-defs/upload",
    "method": "uploadLegacyEntitlementDefs",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Entitlement",
    "typeScriptTag": "entitlement",
    "description": "",
    "parameters": [
      {
        "name": "entitlements",
        "schema": "array",
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
    "url": "/basic/legacy-entitlement-defs/player",
    "method": "getPlayerEntitlements",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Entitlement",
    "typeScriptTag": "entitlement",
    "description": "",
    "parameters": [
      {
        "name": "state",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "symbol",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "icw",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "spec",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "gt",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
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
    "url": "/basic/legacy-entitlement-defs/claim",
    "method": "defineEntitlementLegacy",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Entitlement",
    "typeScriptTag": "entitlement",
    "description": "",
    "parameters": [
      {
        "name": "gt",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "symbol",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "spec",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "uuid",
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
        "description": "Bad Request"
      }
    ]
  },
  {
    "url": "/basic/legacy-cloud/campaigns/schedule",
    "method": "updateSchedule",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Campaign",
    "typeScriptTag": "campaign",
    "description": "",
    "parameters": [
      {
        "name": "sid",
        "schema": "string",
        "description": ""
      },
      {
        "name": "startDate",
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
    "url": "/basic/legacy-cloud/templates",
    "method": "deleteLegacyCloud",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Template",
    "typeScriptTag": "template",
    "description": "",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
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
    "url": "/basic/legacy-cloud/templates",
    "method": "getLegacyCloudTemplates",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Template",
    "typeScriptTag": "template",
    "description": "",
    "parameters": [],
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
    "url": "/basic/legacy-cloud/templates",
    "method": "createLegacyCloudTemplate",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Template",
    "typeScriptTag": "template",
    "description": "",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "msg",
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
    "url": "/basic/legacy-cloud/campaigns",
    "method": "removeLegacyCloud",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Campaign",
    "typeScriptTag": "campaign",
    "description": "",
    "parameters": [
      {
        "name": "sid",
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
    "url": "/basic/legacy-cloud/campaigns",
    "method": "getLegacyCloudCampaigns",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Campaign",
    "typeScriptTag": "campaign",
    "description": "",
    "parameters": [],
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
    "url": "/basic/legacy-cloud/campaigns",
    "method": "createNewLegacyCloudCampaign",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Campaign",
    "typeScriptTag": "campaign",
    "description": "",
    "parameters": [
      {
        "name": "mtype",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "mb_store",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "mb_expiration",
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
        "name": "subject",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "mb_ent_spec",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "mb_ent_quant",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "resend_to_past_recipients",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "datepoint",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "mb_attachments",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "recur",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "sent",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "msg",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "rules",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "mb_ent",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "start",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "days",
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
        "description": "Bad Request"
      }
    ]
  },
  {
    "url": "/basic/legacy-pvp-defs/file",
    "method": "submitPvpFile",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "LegacyPvpDef",
    "typeScriptTag": "legacyPvpDef",
    "description": "",
    "parameters": [
      {
        "name": "lbid",
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
    "url": "/basic/legacy-shards/accepting",
    "method": "getLegacyAccepting",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Shard",
    "typeScriptTag": "shard",
    "description": "",
    "parameters": [],
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
    "url": "/basic/legacy-shards/preferred",
    "method": "getPreferredLegacyShards",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Shard",
    "typeScriptTag": "shard",
    "description": "",
    "parameters": [
      {
        "name": "preference",
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
        "description": "Bad Request"
      }
    ]
  },
  {
    "url": "/basic/history/apiaccess/url",
    "method": "getApiAccessUrl",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "History",
    "typeScriptTag": "history",
    "description": "",
    "parameters": [
      {
        "name": "from",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "to",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "customerScoped",
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
        "description": "Bad Request"
      }
    ]
  },
  {
    "url": "/basic/history/query/url",
    "method": "getQueryData",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "History",
    "typeScriptTag": "history",
    "description": "",
    "parameters": [
      {
        "name": "query",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "QUERY"
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
    "url": "/basic/history/query",
    "method": "getQueryResults",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "History",
    "typeScriptTag": "history",
    "description": "",
    "parameters": [
      {
        "name": "query",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "QUERY"
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
    "url": "/basic/history/microservices",
    "method": "getMicroservicesHistory",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "History",
    "typeScriptTag": "history",
    "description": "",
    "parameters": [
      {
        "name": "from",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "to",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
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
    "url": "/basic/history/account/roles",
    "method": "listRoles",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Account",
    "typeScriptTag": "account",
    "description": "",
    "parameters": [],
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
    "url": "/basic/history/apiaccess",
    "method": "getApiAccessHistory",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "History",
    "typeScriptTag": "history",
    "description": "",
    "parameters": [
      {
        "name": "from",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "to",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
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
    "url": "/basic/history/events",
    "method": "getEventHistory",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "History",
    "typeScriptTag": "history",
    "description": "",
    "parameters": [],
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
    "url": "/basic/trials",
    "method": "removeTrial",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Trial",
    "typeScriptTag": "trial",
    "description": "",
    "parameters": [
      {
        "name": "trialType",
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
        "description": "Bad Request"
      }
    ]
  },
  {
    "url": "/basic/trials",
    "method": "listTrials",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Trial",
    "typeScriptTag": "trial",
    "description": "",
    "parameters": [],
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
    "url": "/basic/trials",
    "method": "createNewTrial",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Trial",
    "typeScriptTag": "trial",
    "description": "",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "strat",
        "schema": "string",
        "description": ""
      },
      {
        "name": "cohortType",
        "schema": "string",
        "description": ""
      },
      {
        "name": "cohorts",
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
    "url": "/basic/announcements",
    "method": "deleteAnnouncement",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Announcement",
    "typeScriptTag": "announcement",
    "description": "",
    "parameters": [
      {
        "name": "symbol",
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
    "url": "/basic/announcements",
    "method": "createNewAnnouncement",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Announcement",
    "typeScriptTag": "announcement",
    "description": "",
    "parameters": [
      {
        "name": "summary",
        "schema": "string",
        "description": ""
      },
      {
        "name": "title",
        "schema": "string",
        "description": ""
      },
      {
        "name": "body",
        "schema": "string",
        "description": ""
      },
      {
        "name": "channel",
        "schema": "string",
        "description": ""
      },
      {
        "name": "start_date",
        "schema": "string",
        "description": ""
      },
      {
        "name": "gift",
        "schema": "object",
        "description": ""
      },
      {
        "name": "mongo_start_date",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "stat_requirements",
        "schema": "array",
        "description": ""
      },
      {
        "name": "mongo_end_date",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "symbol",
        "schema": "string",
        "description": ""
      },
      {
        "name": "clientData",
        "schema": "object",
        "description": ""
      },
      {
        "name": "validationErrors",
        "schema": "array",
        "description": ""
      },
      {
        "name": "end_date",
        "schema": "string",
        "description": ""
      },
      {
        "name": "attachments",
        "schema": "array",
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
    "url": "/object/announcements/{objectId}",
    "method": "removeAnnouncementObject",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Announcement",
    "typeScriptTag": "announcement",
    "description": "",
    "parameters": [
      {
        "name": "objectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "OBJECTID"
      },
      {
        "name": "announcement",
        "schema": "string",
        "description": ""
      },
      {
        "name": "announcements",
        "schema": "array",
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
    "url": "/object/announcements/{objectId}",
    "method": "getObjectDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Announcement",
    "typeScriptTag": "announcement",
    "description": "",
    "parameters": [
      {
        "name": "includeDeleted",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "objectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "OBJECTID"
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
    "url": "/object/calendars/{objectId}",
    "method": "getCalendars",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Object",
    "typeScriptTag": "object",
    "description": "",
    "parameters": [
      {
        "name": "objectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "OBJECTID"
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
    "url": "/object/chatV2/{objectId}",
    "method": "getChatV2",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Object",
    "typeScriptTag": "object",
    "description": "",
    "parameters": [
      {
        "name": "scope",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "objectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "OBJECTID"
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
    "url": "/basic/cloudsaving",
    "method": "getData",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Cloudsaving",
    "typeScriptTag": "cloudsaving",
    "description": "",
    "parameters": [
      {
        "name": "playerId",
        "schema": "integer",
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
        "description": "Bad Request"
      }
    ]
  },
  {
    "url": "/object/commerce/{objectId}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Object",
    "typeScriptTag": "object",
    "description": "",
    "parameters": [
      {
        "name": "scope",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "objectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "OBJECTID"
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
    "url": "/basic/content",
    "method": "createNewContent",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Content",
    "typeScriptTag": "content",
    "description": "",
    "parameters": [
      {
        "name": "content",
        "schema": "array",
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
    "url": "/object/events/{objectId}",
    "method": "getObjectEvents",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Event",
    "typeScriptTag": "event",
    "description": "",
    "parameters": [
      {
        "name": "objectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "OBJECTID"
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
    "url": "/object/event-players/{objectId}",
    "method": "getPlayersData",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Event",
    "typeScriptTag": "event",
    "description": "",
    "parameters": [
      {
        "name": "objectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "OBJECTID"
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
    "url": "/object/gamerelay/{objectId}",
    "method": "relayObjectPost",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Game",
    "typeScriptTag": "game",
    "description": "",
    "parameters": [
      {
        "name": "objectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "OBJECTID"
      },
      {
        "name": "roomName",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "keepSubscribed",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "players",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "gameType",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "dbids",
        "schema": "array",
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
        "description": "Bad Request"
      }
    ]
  },
  {
    "url": "/object/inventory/{objectId}",
    "method": "getInventoryObjectById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Object",
    "typeScriptTag": "object",
    "description": "",
    "parameters": [
      {
        "name": "scope",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "objectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "OBJECTID"
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
    "url": "/object/inventory/{objectId}",
    "method": "createInventoryObject",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Object",
    "typeScriptTag": "object",
    "description": "",
    "parameters": [
      {
        "name": "objectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "OBJECTID"
      },
      {
        "name": "scopes",
        "schema": "array",
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
    "url": "/object/inventory/{objectId}",
    "method": "updateInventoryObject",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Object",
    "typeScriptTag": "object",
    "description": "",
    "parameters": [
      {
        "name": "objectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "OBJECTID"
      },
      {
        "name": "currencies",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "empty",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "currencyProperties",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "currencyContentIds",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "applyVipBonus",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "itemContentIds",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "updateItems",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "newItems",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "transaction",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "deleteItems",
        "schema": "array",
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
        "description": "Bad Request"
      }
    ]
  },
  {
    "url": "/object/leaderboards/{objectId}",
    "method": "deleteObjectById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Leaderboard",
    "typeScriptTag": "leaderboard",
    "description": "",
    "parameters": [
      {
        "name": "objectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "OBJECTID"
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
    "url": "/object/leaderboards/{objectId}",
    "method": "submitObjectScores",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Leaderboard",
    "typeScriptTag": "leaderboard",
    "description": "",
    "parameters": [
      {
        "name": "objectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "OBJECTID"
      },
      {
        "name": "freezeTime",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "derivatives",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "scoreName",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "permissions",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "maxEntries",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "partitioned",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "sharded",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "ttl",
        "schema": "integer",
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
        "description": "Bad Request"
      }
    ]
  },
  {
    "url": "/object/groups/{objectId}",
    "method": "deleteObjectGroup",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Group",
    "typeScriptTag": "group",
    "description": "",
    "parameters": [
      {
        "name": "objectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "OBJECTID"
      },
      {
        "name": "subGroup",
        "schema": "integer",
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
    "url": "/object/groups/{objectId}",
    "method": "getObjectGroups",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Group",
    "typeScriptTag": "group",
    "description": "",
    "parameters": [
      {
        "name": "objectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "OBJECTID"
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
    "url": "/object/groups/{objectId}",
    "method": "updateObjectGroup",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Group",
    "typeScriptTag": "group",
    "description": "",
    "parameters": [
      {
        "name": "objectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "OBJECTID"
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "enrollmentType",
        "schema": "string",
        "description": ""
      },
      {
        "name": "tag",
        "schema": "string",
        "description": ""
      },
      {
        "name": "slogan",
        "schema": "string",
        "description": ""
      },
      {
        "name": "requirement",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "motd",
        "schema": "string",
        "description": ""
      },
      {
        "name": "clientData",
        "schema": "string",
        "description": ""
      },
      {
        "name": "subGroup",
        "schema": "integer",
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
    "url": "/object/group-users/{objectId}",
    "method": "getGroupUsers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Group",
    "typeScriptTag": "group",
    "description": "",
    "parameters": [
      {
        "name": "objectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "OBJECTID"
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
    "url": "/basic/mail",
    "method": "getMessages",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Mail",
    "typeScriptTag": "mail",
    "description": "",
    "parameters": [
      {
        "name": "mid",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
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
    "url": "/basic/mail",
    "method": "updateMailContent",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Mail",
    "typeScriptTag": "mail",
    "description": "",
    "parameters": [
      {
        "name": "body",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "expires",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "subject",
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
        "name": "mailId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "category",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "acceptAttachments",
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
        "description": "Bad Request"
      }
    ]
  },
  {
    "url": "/object/mail/{objectId}",
    "method": "getObjectMail",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Mail",
    "typeScriptTag": "mail",
    "description": "",
    "parameters": [
      {
        "name": "objectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "OBJECTID"
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
    "url": "/object/mail/{objectId}",
    "method": "createObjectMail",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Mail",
    "typeScriptTag": "mail",
    "description": "",
    "parameters": [
      {
        "name": "objectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "OBJECTID"
      },
      {
        "name": "body",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "expires",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "subject",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "rewards",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "id",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "senderGamerTag",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "category",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "bodyRef",
        "schema": "integer",
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
      },
      {
        "statusCode": "400",
        "description": "Bad Request"
      }
    ]
  },
  {
    "url": "/object/mail/{objectId}",
    "method": "updateObjectMail",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Mail",
    "typeScriptTag": "mail",
    "description": "",
    "parameters": [
      {
        "name": "objectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "OBJECTID"
      },
      {
        "name": "body",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "expires",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "subject",
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
        "name": "mailId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "category",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "acceptAttachments",
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
        "description": "Bad Request"
      }
    ]
  },
  {
    "url": "/object/payments/{objectId}",
    "method": "getPaymentDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Object",
    "typeScriptTag": "object",
    "description": "",
    "parameters": [
      {
        "name": "objectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "OBJECTID"
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
    "url": "/basic/notification",
    "method": "getUnreadMessages",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Notification",
    "typeScriptTag": "notification",
    "description": "",
    "parameters": [],
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
    "url": "/basic/session",
    "method": "createSessionRequest",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Session",
    "typeScriptTag": "session",
    "description": "",
    "parameters": [
      {
        "name": "source",
        "schema": "string",
        "description": ""
      },
      {
        "name": "customParams",
        "schema": "object",
        "description": ""
      },
      {
        "name": "shard",
        "schema": "string",
        "description": ""
      },
      {
        "name": "locale",
        "schema": "string",
        "description": ""
      },
      {
        "name": "deviceParams",
        "schema": "object",
        "description": ""
      },
      {
        "name": "language",
        "schema": "object",
        "description": ""
      },
      {
        "name": "time",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "platform",
        "schema": "string",
        "description": ""
      },
      {
        "name": "gamer",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "device",
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
    "url": "/object/stats/{objectId}",
    "method": "deleteStatsObject",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Object",
    "typeScriptTag": "object",
    "description": "",
    "parameters": [
      {
        "name": "objectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "OBJECTID"
      },
      {
        "name": "stats",
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
    "url": "/object/stats/{objectId}",
    "method": "getObjectStats",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Object",
    "typeScriptTag": "object",
    "description": "",
    "parameters": [
      {
        "name": "stats",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "objectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "OBJECTID"
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
    "url": "/object/stats/{objectId}",
    "method": "createObjectStats",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Object",
    "typeScriptTag": "object",
    "description": "",
    "parameters": [
      {
        "name": "objectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "OBJECTID"
      },
      {
        "name": "objectId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "set",
        "schema": "object",
        "description": ""
      },
      {
        "name": "add",
        "schema": "object",
        "description": ""
      },
      {
        "name": "emitAnalytics",
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
    "url": "/basic/tournaments",
    "method": "listTournaments",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Tournament",
    "typeScriptTag": "tournament",
    "description": "",
    "parameters": [
      {
        "name": "isRunning",
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
        "description": "Bad Request"
      }
    ]
  },
  {
    "url": "/basic/tournaments",
    "method": "createNewTournament",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Tournament",
    "typeScriptTag": "tournament",
    "description": "",
    "parameters": [
      {
        "name": "tournamentId",
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
    "url": "/object/tournaments/{objectId}",
    "method": "getTournamentObject",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Tournament",
    "typeScriptTag": "tournament",
    "description": "",
    "parameters": [
      {
        "name": "objectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "OBJECTID"
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
    "url": "/basic/legacy-timers",
    "method": "deleteLegacyTimers",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Timer",
    "typeScriptTag": "timer",
    "description": "",
    "parameters": [
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
        "description": "Bad Request"
      }
    ]
  },
  {
    "url": "/basic/legacy-timers",
    "method": "getLegacyTimers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Timer",
    "typeScriptTag": "timer",
    "description": "",
    "parameters": [],
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
    "url": "/basic/legacy-timers",
    "method": "createLegacyTimer",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Timer",
    "typeScriptTag": "timer",
    "description": "",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "cronish",
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
    "url": "/basic/legacy-promos",
    "method": "getLegacyPromos",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Promo",
    "typeScriptTag": "promo",
    "description": "",
    "parameters": [],
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
    "url": "/basic/legacy-promos",
    "method": "createLegacyPromo",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Promo",
    "typeScriptTag": "promo",
    "description": "",
    "parameters": [
      {
        "name": "definition",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "codes",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "claimsPerCode",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
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
    "url": "/basic/legacy-entitlement-defs",
    "method": "deleteEntitlementDefinition",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "LegacyPvpDef",
    "typeScriptTag": "legacyPvpDef",
    "description": "",
    "parameters": [
      {
        "name": "symbol",
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
    "url": "/basic/legacy-entitlement-defs",
    "method": "getEntitlementDefs",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "LegacyPvpDef",
    "typeScriptTag": "legacyPvpDef",
    "description": "",
    "parameters": [
      {
        "name": "symbol",
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
        "description": "Bad Request"
      }
    ]
  },
  {
    "url": "/basic/legacy-entitlement-defs",
    "method": "createDefinition",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "LegacyEntitlementDef",
    "typeScriptTag": "legacyEntitlementDef",
    "description": "",
    "parameters": [
      {
        "name": "symbol",
        "schema": "string",
        "description": ""
      },
      {
        "name": "request",
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
        "statusCode": "400",
        "description": "Bad Request"
      }
    ]
  },
  {
    "url": "/basic/legacy-entitlement-defs",
    "method": "createLegacyEntitlementDefs",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Entitlement",
    "typeScriptTag": "entitlement",
    "description": "",
    "parameters": [
      {
        "name": "symbol",
        "schema": "string",
        "description": ""
      },
      {
        "name": "request",
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
        "statusCode": "400",
        "description": "Bad Request"
      }
    ]
  },
  {
    "url": "/basic/legacy-pvp-defs",
    "method": "deleteDefinition",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "LegacyPvpDef",
    "typeScriptTag": "legacyPvpDef",
    "description": "",
    "parameters": [
      {
        "name": "lbid",
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
    "url": "/basic/legacy-pvp-defs",
    "method": "getDefinitions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "LegacyPvpDef",
    "typeScriptTag": "legacyPvpDef",
    "description": "",
    "parameters": [],
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
    "url": "/basic/legacy-pvp-defs",
    "method": "createOrUpdateDefinition",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "LegacyPvpDef",
    "typeScriptTag": "legacyPvpDef",
    "description": "",
    "parameters": [
      {
        "name": "lbid",
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
    "url": "/basic/legacy-shards",
    "method": "deleteLegacyShard",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Shard",
    "typeScriptTag": "shard",
    "description": "",
    "parameters": [
      {
        "name": "shardId",
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
    "url": "/basic/legacy-shards",
    "method": "getLegacyData",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Shard",
    "typeScriptTag": "shard",
    "description": "",
    "parameters": [],
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
    "url": "/basic/legacy-shards",
    "method": "postLegacyShard",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Shard",
    "typeScriptTag": "shard",
    "description": "",
    "parameters": [
      {
        "name": "shardId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "uri",
        "schema": "string",
        "description": ""
      },
      {
        "name": "metadata",
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
        "statusCode": "400",
        "description": "Bad Request"
      }
    ]
  },
  {
    "url": "/basic/legacy-shards",
    "method": "updateLegacyShardData",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Shard",
    "typeScriptTag": "shard",
    "description": "",
    "parameters": [
      {
        "name": "shardId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "uri",
        "schema": "string",
        "description": ""
      },
      {
        "name": "metadata",
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
        "statusCode": "400",
        "description": "Bad Request"
      }
    ]
  }
]
    }
      language="TypeScript"
      apiTitle="history basic"
      apiBaseUrl="https://api.beamable.com"
      apiVersion="1.0"
      endpoints={259}
      sdkMethods={325}
      schemas={514}
      parameters={817}
      difficulty="Very Hard"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/beamable/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/beamable/openapi.yaml"
      developerDocumentation="docs.beamable.com/reference/overview"
    />
  );
}
  