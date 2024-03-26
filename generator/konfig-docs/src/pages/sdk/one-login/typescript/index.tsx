import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function OneLoginTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="one-login-typescript-sdk"
      metaDescription={`OneLogin provides a comprehensive cloud-based identity and access management platform that enables companies to secure their data and applications. With features like single sign-on, multi-factor authentication, and user provisioning, OneLogin simplifies and strengthens security protocols for businesses of all sizes. Trusted by organizations worldwide, OneLogin helps streamline access management processes and enhance cybersecurity measures.`}
      company="OneLogin"
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/onelogin/logo.png"
      companyKebabCase="one-login"
      clientNameCamelCase="oneLogin"
      homepage="onelogin.com"
      lastUpdated={new Date("2024-03-26T21:30:47.444Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/onelogin/favicon.png"
      // Missing contactUrl
      // Missing contactEmail
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/onelogin/imagePreview.png"
      GettingStarted={GettingStarted}
      FirstRequest={FirstRequest}
      categories={["identity_and_access_management","password_management","security","authentication","access_management","single_signon","idaas","sso","identity_management","multifactor_authentication","credential_vaulting","iam"]}
      methods={[
  {
    "url": "/users",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "users",
    "typeScriptTag": "users",
    "description": "Get Users",
    "parameters": [
      {
        "name": "directoryId",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "email",
        "schema": "string",
        "description": ""
      },
      {
        "name": "externalId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "firstname",
        "schema": "string",
        "description": ""
      },
      {
        "name": "id",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "managerAdId",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "roleId",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "samaccountname",
        "schema": "string",
        "description": ""
      },
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
        "name": "username",
        "schema": "string",
        "description": ""
      },
      {
        "name": "userprincipalname",
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
        "description": "Status object returned in the body of most responses"
      },
      {
        "statusCode": "401",
        "description": "Status object returned in the body of most responses"
      },
      {
        "statusCode": "403",
        "description": "Status object returned in the body of most responses"
      }
    ]
  },
  {
    "url": "/users",
    "method": "createAccount",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "users",
    "typeScriptTag": "users",
    "description": "Create a User",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "email",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EMAIL"
      },
      {
        "name": "username",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERNAME"
      },
      {
        "name": "firstname",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FIRSTNAME"
      },
      {
        "name": "lastname",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "LASTNAME"
      },
      {
        "name": "group_id",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "invalid_login_attempts",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "activated_at",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "created_at",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "updated_at",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "invitation_sent_at",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "password_changed_at",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "last_login",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "locked_until",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "notes",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "openid_name",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "locale_code",
        "schema": "string",
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
        "name": "status",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "state",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "distinguished_name",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "external_id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "directory_id",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "member_of",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "samaccountname",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "userprincipalname",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "manager_ad_id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "role_id",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "custom_attributes",
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
        "description": "Status object returned in the body of most responses"
      },
      {
        "statusCode": "401",
        "description": "Status object returned in the body of most responses"
      },
      {
        "statusCode": "403",
        "description": "Status object returned in the body of most responses"
      }
    ]
  },
  {
    "url": "/users/{id}",
    "method": "deleteUserById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "users",
    "typeScriptTag": "users",
    "description": "Delete a user account",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "User ID",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Status object returned in the body of most responses"
      },
      {
        "statusCode": "400",
        "description": "Status object returned in the body of most responses"
      },
      {
        "statusCode": "401",
        "description": "Status object returned in the body of most responses"
      },
      {
        "statusCode": "403",
        "description": "Status object returned in the body of most responses"
      },
      {
        "statusCode": "404",
        "description": "Status object returned in the body of most responses"
      }
    ]
  },
  {
    "url": "/users/{id}",
    "method": "getUser",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "users",
    "typeScriptTag": "users",
    "description": "Get a User",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "User ID",
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
        "description": "Status object returned in the body of most responses"
      },
      {
        "statusCode": "401",
        "description": "Status object returned in the body of most responses"
      },
      {
        "statusCode": "403",
        "description": "Status object returned in the body of most responses"
      },
      {
        "statusCode": "404",
        "description": "Status object returned in the body of most responses"
      }
    ]
  },
  {
    "url": "/users/{id}",
    "method": "updateById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "users",
    "typeScriptTag": "users",
    "description": "Update a User",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "User ID",
        "example": 0
      },
      {
        "name": "id",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "email",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EMAIL"
      },
      {
        "name": "username",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERNAME"
      },
      {
        "name": "firstname",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FIRSTNAME"
      },
      {
        "name": "lastname",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "LASTNAME"
      },
      {
        "name": "group_id",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "invalid_login_attempts",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "activated_at",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "created_at",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "updated_at",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "invitation_sent_at",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "password_changed_at",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "last_login",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "locked_until",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "notes",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "openid_name",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "locale_code",
        "schema": "string",
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
        "name": "status",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "state",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "distinguished_name",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "external_id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "directory_id",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "member_of",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "samaccountname",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "userprincipalname",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "manager_ad_id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "role_id",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "custom_attributes",
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
        "description": "Status object returned in the body of most responses"
      },
      {
        "statusCode": "401",
        "description": "Status object returned in the body of most responses"
      },
      {
        "statusCode": "403",
        "description": "Status object returned in the body of most responses"
      },
      {
        "statusCode": "404",
        "description": "Status object returned in the body of most responses"
      }
    ]
  },
  {
    "url": "/users/{id}/apps",
    "method": "listUserApps",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "users",
    "typeScriptTag": "users",
    "description": "Get User Apps",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "User ID",
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
        "description": "Status object returned in the body of most responses"
      },
      {
        "statusCode": "401",
        "description": "Status object returned in the body of most responses"
      },
      {
        "statusCode": "403",
        "description": "Status object returned in the body of most responses"
      },
      {
        "statusCode": "404",
        "description": "Status object returned in the body of most responses"
      }
    ]
  },
  {
    "url": "/users/{id}/roles",
    "method": "getUserRoles",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "users",
    "typeScriptTag": "users",
    "description": "Get User Roles",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "User ID",
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
        "description": "Status object returned in the body of most responses"
      },
      {
        "statusCode": "401",
        "description": "Status object returned in the body of most responses"
      },
      {
        "statusCode": "403",
        "description": "Status object returned in the body of most responses"
      },
      {
        "statusCode": "404",
        "description": "Status object returned in the body of most responses"
      }
    ]
  },
  {
    "url": "/users/{id}/add_roles",
    "method": "assignRoles",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "users",
    "typeScriptTag": "users",
    "description": "Assign Role to User",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "User ID",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Status object returned in the body of most responses"
      },
      {
        "statusCode": "400",
        "description": "Status object returned in the body of most responses"
      },
      {
        "statusCode": "401",
        "description": "Status object returned in the body of most responses"
      },
      {
        "statusCode": "403",
        "description": "Status object returned in the body of most responses"
      },
      {
        "statusCode": "404",
        "description": "Status object returned in the body of most responses"
      }
    ]
  },
  {
    "url": "/users/{id}/remove_roles",
    "method": "removeUserRoles",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "users",
    "typeScriptTag": "users",
    "description": "Remove Roles from User",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "User ID",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Status object returned in the body of most responses"
      },
      {
        "statusCode": "400",
        "description": "Status object returned in the body of most responses"
      },
      {
        "statusCode": "401",
        "description": "Status object returned in the body of most responses"
      },
      {
        "statusCode": "403",
        "description": "Status object returned in the body of most responses"
      },
      {
        "statusCode": "404",
        "description": "Status object returned in the body of most responses"
      }
    ]
  },
  {
    "url": "/users/{id}/set_state",
    "method": "setState",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "users",
    "typeScriptTag": "users",
    "description": "Set the State for a user.",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "User ID",
        "example": 0
      },
      {
        "name": "state",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Status object returned in the body of most responses"
      },
      {
        "statusCode": "400",
        "description": "Status object returned in the body of most responses"
      },
      {
        "statusCode": "401",
        "description": "Status object returned in the body of most responses"
      },
      {
        "statusCode": "403",
        "description": "Status object returned in the body of most responses"
      },
      {
        "statusCode": "404",
        "description": "Status object returned in the body of most responses"
      }
    ]
  },
  {
    "url": "/users/{id}/logout",
    "method": "logoutUserById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "users",
    "typeScriptTag": "users",
    "description": "Log a user out of any and all sessions",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "User ID",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Status object returned in the body of most responses"
      },
      {
        "statusCode": "400",
        "description": "Status object returned in the body of most responses"
      },
      {
        "statusCode": "401",
        "description": "Status object returned in the body of most responses"
      },
      {
        "statusCode": "403",
        "description": "Status object returned in the body of most responses"
      },
      {
        "statusCode": "404",
        "description": "Status object returned in the body of most responses"
      }
    ]
  },
  {
    "url": "/users/{id}/lock_user",
    "method": "lockUserAccount",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "users",
    "typeScriptTag": "users",
    "description": "Lock a user account",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "User ID",
        "example": 0
      },
      {
        "name": "locked_until",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Status object returned in the body of most responses"
      },
      {
        "statusCode": "400",
        "description": "Status object returned in the body of most responses"
      },
      {
        "statusCode": "401",
        "description": "Status object returned in the body of most responses"
      },
      {
        "statusCode": "403",
        "description": "Status object returned in the body of most responses"
      },
      {
        "statusCode": "404",
        "description": "Status object returned in the body of most responses"
      }
    ]
  },
  {
    "url": "/users/{id}/set_custom_attributes",
    "method": "setCustomAttributes",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "users",
    "typeScriptTag": "users",
    "description": "Set a custom attribute",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "User ID",
        "example": 0
      },
      {
        "name": "custom_attributes",
        "schema": "object",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Status object returned in the body of most responses"
      },
      {
        "statusCode": "400",
        "description": "Status object returned in the body of most responses"
      },
      {
        "statusCode": "401",
        "description": "Status object returned in the body of most responses"
      },
      {
        "statusCode": "403",
        "description": "Status object returned in the body of most responses"
      },
      {
        "statusCode": "404",
        "description": "Status object returned in the body of most responses"
      }
    ]
  },
  {
    "url": "/users/{id}/mfa_token",
    "method": "generateTempMfaToken",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "users",
    "typeScriptTag": "users",
    "description": "Generate Temp MFA Token",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "User ID",
        "example": 0
      },
      {
        "name": "expires_in",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "reusable",
        "schema": "boolean",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Status object returned in the body of most responses"
      }
    ]
  },
  {
    "url": "/users/custom_attributes",
    "method": "getCustomAttributes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "users",
    "typeScriptTag": "users",
    "description": "Get Custom Attributes",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Status object returned in the body of most responses"
      },
      {
        "statusCode": "401",
        "description": "Status object returned in the body of most responses"
      }
    ]
  },
  {
    "url": "/users/set_password_clear_text/{id}",
    "method": "setPasswordClearTextById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "users",
    "typeScriptTag": "users",
    "description": "Set a the password for a user",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "User ID",
        "example": 0
      },
      {
        "name": "password",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PASSWORD"
      },
      {
        "name": "password_confirmation",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PASSWORD_CONFIRMATION"
      },
      {
        "name": "validate_policy",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Status object returned in the body of most responses"
      },
      {
        "statusCode": "400",
        "description": "Status object returned in the body of most responses"
      },
      {
        "statusCode": "401",
        "description": "Status object returned in the body of most responses"
      },
      {
        "statusCode": "403",
        "description": "Status object returned in the body of most responses"
      },
      {
        "statusCode": "404",
        "description": "Status object returned in the body of most responses"
      }
    ]
  },
  {
    "url": "/users/set_password_using_salt/{id}",
    "method": "setPreSaltedPassword",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "users",
    "typeScriptTag": "users",
    "description": "Set a pre salted password for a user",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "User ID",
        "example": 0
      },
      {
        "name": "password",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PASSWORD"
      },
      {
        "name": "password_confirmation",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PASSWORD_CONFIRMATION"
      },
      {
        "name": "password_algorithm",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PASSWORD_ALGORITHM"
      },
      {
        "name": "password_salt",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Status object returned in the body of most responses"
      },
      {
        "statusCode": "400",
        "description": "Status object returned in the body of most responses"
      },
      {
        "statusCode": "401",
        "description": "Status object returned in the body of most responses"
      },
      {
        "statusCode": "403",
        "description": "Status object returned in the body of most responses"
      },
      {
        "statusCode": "404",
        "description": "Status object returned in the body of most responses"
      }
    ]
  },
  {
    "url": "/login/auth",
    "method": "userAuthentication",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "login",
    "typeScriptTag": "login",
    "description": "Authenticate a user",
    "parameters": [
      {
        "name": "customAllowedOriginHeader1",
        "schema": "string",
        "description": "Required for CORS requests only. Set to the Origin URI from which you are allowed to send a request using CORS."
      },
      {
        "name": "username_or_email",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERNAME_OR_EMAIL"
      },
      {
        "name": "password",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PASSWORD"
      },
      {
        "name": "subdomain",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SUBDOMAIN"
      },
      {
        "name": "return_to_url",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "ip_address",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "browser_id",
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
        "description": "Status object returned in the body of most responses"
      },
      {
        "statusCode": "401",
        "description": "Status object returned in the body of most responses"
      }
    ]
  },
  {
    "url": "/login/verify_factor",
    "method": "verifyFactor",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "login",
    "typeScriptTag": "login",
    "description": "Verify an MFA token",
    "parameters": [
      {
        "name": "customAllowedOriginHeader1",
        "schema": "string",
        "description": "Required for CORS requests only. Set to the Origin URI from which you are allowed to send a request using CORS."
      },
      {
        "name": "device_id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "state_token",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "STATE_TOKEN"
      },
      {
        "name": "otp_token",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "do_not_notify",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Status object returned in the body of most responses"
      },
      {
        "statusCode": "401",
        "description": "Status object returned in the body of most responses"
      }
    ]
  },
  {
    "url": "/saml_assertion",
    "method": "generateAssertion",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "saml",
    "typeScriptTag": "saml",
    "description": "Generate SAML assertion",
    "parameters": [
      {
        "name": "username_or_email",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERNAME_OR_EMAIL"
      },
      {
        "name": "password",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PASSWORD"
      },
      {
        "name": "subdomain",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SUBDOMAIN"
      },
      {
        "name": "app_id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "ip_address",
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
        "description": "Status object returned in the body of most responses"
      },
      {
        "statusCode": "401",
        "description": "Status object returned in the body of most responses"
      }
    ]
  },
  {
    "url": "/saml_assertion/verify_factor",
    "method": "verifyFactor",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "saml",
    "typeScriptTag": "saml",
    "description": "Verify an MFA token",
    "parameters": [
      {
        "name": "app_id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "device_id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "state_token",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "STATE_TOKEN"
      },
      {
        "name": "otp_token",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "do_not_notify",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Status object returned in the body of most responses"
      },
      {
        "statusCode": "401",
        "description": "Status object returned in the body of most responses"
      }
    ]
  },
  {
    "url": "/users/{id}/auth_factors",
    "method": "getUserFactorsList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "mfa",
    "typeScriptTag": "mfa",
    "description": "Get a list of MFA factors available to user",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "User ID",
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
        "description": "Status object returned in the body of most responses"
      },
      {
        "statusCode": "401",
        "description": "Status object returned in the body of most responses"
      },
      {
        "statusCode": "404",
        "description": "Status object returned in the body of most responses"
      }
    ]
  },
  {
    "url": "/users/{id}/otp_devices",
    "method": "getUserFactors",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "mfa",
    "typeScriptTag": "mfa",
    "description": "Get enrolled authentication factors",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "User ID",
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
        "description": "Status object returned in the body of most responses"
      },
      {
        "statusCode": "401",
        "description": "Status object returned in the body of most responses"
      },
      {
        "statusCode": "404",
        "description": "Status object returned in the body of most responses"
      }
    ]
  },
  {
    "url": "/users/{id}/otp_devices",
    "method": "enrollUserWithFactor",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "mfa",
    "typeScriptTag": "mfa",
    "description": "Enroll a user with a given authentication factor.",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "User ID",
        "example": 0
      },
      {
        "name": "factor_id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "display_name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DISPLAY_NAME"
      },
      {
        "name": "number",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NUMBER"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Status object returned in the body of most responses"
      },
      {
        "statusCode": "401",
        "description": "Status object returned in the body of most responses"
      },
      {
        "statusCode": "404",
        "description": "Status object returned in the body of most responses"
      }
    ]
  },
  {
    "url": "/users/{id}/otp_devices/{device_id}/trigger",
    "method": "triggerOtp",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "mfa",
    "typeScriptTag": "mfa",
    "description": "Activate an authentication factor",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "User ID",
        "example": 0
      },
      {
        "name": "deviceId",
        "schema": "integer",
        "required": true,
        "description": "Device ID",
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
        "description": "Status object returned in the body of most responses"
      },
      {
        "statusCode": "401",
        "description": "Status object returned in the body of most responses"
      },
      {
        "statusCode": "404",
        "description": "Status object returned in the body of most responses"
      }
    ]
  },
  {
    "url": "/users/{id}/otp_devices/{device_id}/verify",
    "method": "authenticateOtp",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "mfa",
    "typeScriptTag": "mfa",
    "description": "Verify an authentication factor",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "User ID",
        "example": 0
      },
      {
        "name": "deviceId",
        "schema": "integer",
        "required": true,
        "description": "Device ID",
        "example": 0
      },
      {
        "name": "otp_token",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "state_token",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Status object returned in the body of most responses"
      },
      {
        "statusCode": "400",
        "description": "Status object returned in the body of most responses"
      },
      {
        "statusCode": "401",
        "description": "Status object returned in the body of most responses"
      }
    ]
  },
  {
    "url": "/users/{id}/otp_devices/{device_id}",
    "method": "removeFactor",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "mfa",
    "typeScriptTag": "mfa",
    "description": "Remove an authentication factor",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "User ID",
        "example": 0
      },
      {
        "name": "deviceId",
        "schema": "integer",
        "required": true,
        "description": "Device ID",
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
        "description": "Status object returned in the body of most responses"
      },
      {
        "statusCode": "401",
        "description": "Status object returned in the body of most responses"
      }
    ]
  },
  {
    "url": "/roles",
    "method": "listRoles",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "roles",
    "typeScriptTag": "roles",
    "description": "Get Roles",
    "parameters": [
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
        "name": "limit",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "sort",
        "schema": "string",
        "description": ""
      },
      {
        "name": "fields",
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
        "description": "Status object returned in the body of most responses"
      },
      {
        "statusCode": "401",
        "description": "Status object returned in the body of most responses"
      }
    ]
  },
  {
    "url": "/roles/{id}",
    "method": "getRoleById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "roles",
    "typeScriptTag": "roles",
    "description": "Get Role by ID",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "Role ID",
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
        "description": "Status object returned in the body of most responses"
      },
      {
        "statusCode": "401",
        "description": "Status object returned in the body of most responses"
      },
      {
        "statusCode": "403",
        "description": "Status object returned in the body of most responses"
      },
      {
        "statusCode": "404",
        "description": "Status object returned in the body of most responses"
      }
    ]
  },
  {
    "url": "/events",
    "method": "listFilteredEvents",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "events",
    "typeScriptTag": "events",
    "description": "Get Events",
    "parameters": [
      {
        "name": "clientId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "createdAt",
        "schema": "string",
        "description": ""
      },
      {
        "name": "directoryId",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "eventTypeId",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "id",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "resolution",
        "schema": "string",
        "description": ""
      },
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
        "name": "userId",
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
        "description": "Status object returned in the body of most responses"
      },
      {
        "statusCode": "401",
        "description": "Status object returned in the body of most responses"
      }
    ]
  },
  {
    "url": "/events/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "events",
    "typeScriptTag": "events",
    "description": "Get Event by ID",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "Event ID",
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
        "description": "Status object returned in the body of most responses"
      },
      {
        "statusCode": "401",
        "description": "Status object returned in the body of most responses"
      }
    ]
  },
  {
    "url": "/events/types",
    "method": "listEventTypes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "events",
    "typeScriptTag": "events",
    "description": "Get Event Types",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Status object returned in the body of most responses"
      },
      {
        "statusCode": "401",
        "description": "Status object returned in the body of most responses"
      }
    ]
  },
  {
    "url": "/groups",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "groups",
    "typeScriptTag": "groups",
    "description": "Get Groups",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Status object returned in the body of most responses"
      },
      {
        "statusCode": "401",
        "description": "Status object returned in the body of most responses"
      }
    ]
  },
  {
    "url": "/groups/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "groups",
    "typeScriptTag": "groups",
    "description": "Get Group by ID",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "Group ID",
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
        "description": "Status object returned in the body of most responses"
      },
      {
        "statusCode": "401",
        "description": "Status object returned in the body of most responses"
      },
      {
        "statusCode": "403",
        "description": "Status object returned in the body of most responses"
      },
      {
        "statusCode": "404",
        "description": "Status object returned in the body of most responses"
      }
    ]
  },
  {
    "url": "/privileges",
    "method": "listPrivileges",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "privileges",
    "typeScriptTag": "privileges",
    "description": "Get Privileges",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      }
    ]
  },
  {
    "url": "/privileges",
    "method": "createPrivilege",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "privileges",
    "typeScriptTag": "privileges",
    "description": "Creates privilege",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "cc87dc41-1974-4af4-8493-7d135c981f42"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "User Administrator"
      },
      {
        "name": "privilege",
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
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "internal server error"
      }
    ]
  },
  {
    "url": "/privileges/{id}",
    "method": "deletePrivilege",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "privileges",
    "typeScriptTag": "privileges",
    "description": "Delete privilege",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Privilege ID",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "The privilege was successfully deleted."
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/privileges/{id}",
    "method": "getPrivilegeById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "privileges",
    "typeScriptTag": "privileges",
    "description": "Get privilege",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Privilege ID",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/privileges/{id}",
    "method": "updatePrivilegeById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "privileges",
    "typeScriptTag": "privileges",
    "description": "Update privilege",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Privilege ID",
        "example": "ID"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "cc87dc41-1974-4af4-8493-7d135c981f42"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "User Administrator"
      },
      {
        "name": "privilege",
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
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "internal server error"
      }
    ]
  },
  {
    "url": "/privileges/{id}/roles",
    "method": "getRoles",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "privileges",
    "typeScriptTag": "privileges",
    "description": "Get roles",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Privilege ID",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/privileges/{id}/roles",
    "method": "assignRoles",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "privileges",
    "typeScriptTag": "privileges",
    "description": "Assign roles",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Privilege ID",
        "example": "ID"
      },
      {
        "name": "roles",
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
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/privileges/{id}/roles/{role_id}",
    "method": "removeRole",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "privileges",
    "typeScriptTag": "privileges",
    "description": "Remove a role",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Privilege ID",
        "example": "ID"
      },
      {
        "name": "roleId",
        "schema": "integer",
        "required": true,
        "description": "Role ID",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "The role was removed from the privilege."
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/privileges/{id}/users",
    "method": "getAssignedUsers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "privileges",
    "typeScriptTag": "privileges",
    "description": "Get privilege users",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Privilege ID",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/privileges/{id}/users",
    "method": "assignUsers",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "privileges",
    "typeScriptTag": "privileges",
    "description": "Assign users",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Privilege ID",
        "example": "ID"
      },
      {
        "name": "users",
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
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/privileges/{id}/users/{user_id}",
    "method": "removeUser",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "privileges",
    "typeScriptTag": "privileges",
    "description": "Remove a user",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Privilege ID",
        "example": "ID"
      },
      {
        "name": "userId",
        "schema": "integer",
        "required": true,
        "description": "User ID",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "The user was removed from the privilege."
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/invites/get_invite_link",
    "method": "generateLink",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "invites",
    "typeScriptTag": "invites",
    "description": "Generate Invite Link",
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
        "description": "Status object returned in the body of most responses"
      },
      {
        "statusCode": "401",
        "description": "Status object returned in the body of most responses"
      }
    ]
  },
  {
    "url": "/invites/send_invite_link",
    "method": "sendInviteLink",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "invites",
    "typeScriptTag": "invites",
    "description": "Send Invite Link",
    "parameters": [
      {
        "name": "email",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EMAIL"
      },
      {
        "name": "personal_email",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Status object returned in the body of most responses"
      },
      {
        "statusCode": "400",
        "description": "Status object returned in the body of most responses"
      },
      {
        "statusCode": "401",
        "description": "Status object returned in the body of most responses"
      }
    ]
  }
]
    }
      language="TypeScript"
      apiTitle="OneLogin API"
      apiBaseUrl="https://api.{region}.onelogin.com/api/1"
      apiVersion="1.0.0-oas3"
      endpoints={38}
      sdkMethods={47}
      schemas={64}
      parameters={171}
      difficulty="Easy"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/onelogin/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/onelogin/openapi.yaml"
      developerDocumentation="developers.onelogin.com/"
    />
  );
}
  