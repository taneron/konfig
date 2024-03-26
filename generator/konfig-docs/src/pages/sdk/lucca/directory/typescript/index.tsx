import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function LuccaDirectoryTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="lucca-directory-typescript-sdk"
      metaDescription={`Nereo est un éditeur de logiciels de gestion des ressources humaines, basé à Saint Etienne, qui propose à ses clients des solutions accessibles en ligne pour faciliter des tâches chronophages et sans réelle valeur ajoutée telles que la gestion des congés, des temps et activités ou encore des notes de frais.

Créée en décembre 2011, Nereo propose déjà une solution complète de gestion de congés et absences en mode SaaS baptisée Nereo Congés.`}
      company="Lucca"
      serviceName="Directory"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/lucca/directory/logo.svg"
      companyKebabCase="lucca"
      clientNameCamelCase="luccaDirectory"
      homepage="lucca-hr.com"
      lastUpdated={new Date("2024-03-26T19:55:14.920Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/lucca/directory/favicon.png"
      contactUrl="https://www.lucca.fr"
      contactEmail="developers@lucca.fr"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/lucca/directory/imagePreview.jpg"
      GettingStarted={GettingStarted}
      FirstRequest={FirstRequest}
      categories={["hr","hr_management","resource_management","human_resources","scheduling","time_management","attendance_management","hr_automation"]}
      methods={[
  {
    "url": "/api/v3/users",
    "method": "listExcludedFormer",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "List Users",
    "parameters": [
      {
        "name": "dtContractEnd",
        "schema": "string",
        "description": "`{comparator},{date-time}`.\n"
      },
      {
        "name": "dtContractStart",
        "schema": "string",
        "description": "{comparator},{date-time}"
      },
      {
        "name": "id",
        "schema": "array",
        "description": "User's identifier"
      },
      {
        "name": "modifiedAt",
        "schema": "string",
        "description": "{comparator},{date-time}"
      },
      {
        "name": "paging",
        "schema": "string",
        "description": "{offset},{limit}. Defaults to 0,1000."
      },
      {
        "name": "fields",
        "schema": "array",
        "description": ""
      },
      {
        "name": "mail",
        "schema": "string",
        "description": "User's mail"
      },
      {
        "name": "login",
        "schema": "string",
        "description": "User's login"
      }
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
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "500",
        "description": "User Not Found"
      }
    ]
  },
  {
    "url": "/api/v3/users",
    "method": "createNewUser",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Create a new User",
    "parameters": [],
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
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "500",
        "description": "Internal Server Error"
      }
    ]
  },
  {
    "url": "/api/v3/users/{userId}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Get a User by Id",
    "parameters": [
      {
        "name": "fields",
        "schema": "array",
        "description": "Comma-separated list of fields of the user to include in responses. Extended data can be retrieved with `?fields=extendedData`.\n"
      }
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
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "500",
        "description": "User Not Found"
      }
    ]
  },
  {
    "url": "/api/v3/users/{userId}",
    "method": "updateById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Update a User by id",
    "parameters": [
      {
        "name": "fields",
        "schema": "array",
        "description": "Fields of the user, comma separated"
      },
      {
        "name": "firstName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lastName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "mail",
        "schema": "string",
        "description": ""
      },
      {
        "name": "login",
        "schema": "string",
        "description": ""
      },
      {
        "name": "legalEntityId",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "cspId",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "calendarId",
        "schema": "null",
        "description": ""
      },
      {
        "name": "employeeNumber",
        "schema": "string",
        "description": ""
      },
      {
        "name": "birthDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "userWorkCycles",
        "schema": "array",
        "description": ""
      },
      {
        "name": "departmentId",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "managerId",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "rolePrincipalId",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "habilitedRoles",
        "schema": "array",
        "description": ""
      },
      {
        "name": "cultureId",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "address",
        "schema": "string",
        "description": ""
      },
      {
        "name": "bankName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "directLine",
        "schema": "string",
        "description": ""
      },
      {
        "name": "jobTitle",
        "schema": "string",
        "description": ""
      },
      {
        "name": "gender",
        "schema": "string",
        "description": ""
      },
      {
        "name": "nationality",
        "schema": "string",
        "description": ""
      },
      {
        "name": "personalEmail",
        "schema": "string",
        "description": ""
      },
      {
        "name": "personalMobile",
        "schema": "string",
        "description": ""
      },
      {
        "name": "professionalMobile",
        "schema": "string",
        "description": ""
      },
      {
        "name": "quote",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      },
      {
        "statusCode": "400",
        "description": "Bad Request"
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      },
      {
        "statusCode": "500",
        "description": "Internal Server Error"
      }
    ]
  }
]
    }
      language="TypeScript"
      apiTitle="Directory-v3"
      apiBaseUrl="https://example.ilucca.net"
      apiVersion="1.0"
      endpoints={2}
      sdkMethods={6}
      schemas={7}
      parameters={35}
      difficulty="Very Easy"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/lucca/directory/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/lucca/directory/openapi.yaml"
      developerDocumentation="developers.lucca.fr/"
    />
  );
}
  