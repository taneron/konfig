import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function LuccaOrganizationTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="lucca-organization-typescript-sdk"
      metaDescription={`Nereo est un éditeur de logiciels de gestion des ressources humaines, basé à Saint Etienne, qui propose à ses clients des solutions accessibles en ligne pour faciliter des tâches chronophages et sans réelle valeur ajoutée telles que la gestion des congés, des temps et activités ou encore des notes de frais.

Créée en décembre 2011, Nereo propose déjà une solution complète de gestion de congés et absences en mode SaaS baptisée Nereo Congés.`}
      company="Lucca"
      serviceName="Organization"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/lucca/organization/logo.svg"
      companyKebabCase="lucca"
      clientNameCamelCase="luccaOrganization"
      homepage="lucca-hr.com"
      lastUpdated={new Date("2024-03-27T01:23:25.425Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/lucca/organization/favicon.png"
      contactUrl="www.lucca.fr"
      contactEmail="developers@lucca.fr"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/lucca/organization/imagePreview.jpg"
      GettingStarted={GettingStarted}
      FirstRequest={FirstRequest}
      categories={["hr","hr_management","resource_management","human_resources","scheduling","time_management","attendance_management","hr_automation"]}
      methods={[
  {
    "url": "/api/v3/axes",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Axis-sections",
    "typeScriptTag": "axisSections",
    "description": "List Axes",
    "parameters": [
      {
        "name": "id",
        "schema": "array",
        "description": "Filter on axes unique identifiers."
      },
      {
        "name": "isActive",
        "schema": "boolean",
        "description": "Filter on axes active status.",
        "default": true
      },
      {
        "name": "paging",
        "schema": "string",
        "required": true,
        "description": "{offset},{limit}. Defaults to 0,1000.",
        "example": "100,0"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v3/axisSections",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Axis-sections",
    "typeScriptTag": "axisSections",
    "description": "List AxisSections",
    "parameters": [
      {
        "name": "paging",
        "schema": "string",
        "required": true,
        "description": "{offset},{limit}. Defaults to 0,1000.",
        "example": "100,0"
      },
      {
        "name": "axisId",
        "schema": "array",
        "description": "Filter on the axis it belongs to."
      },
      {
        "name": "ownerId",
        "schema": "array",
        "description": "Filter on the owner managing it."
      },
      {
        "name": "active",
        "schema": "boolean",
        "description": "Filter on active status.",
        "default": true
      }
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
        "statusCode": "403",
        "description": "Forbidden"
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
  },
  {
    "url": "/api/v3/axisSections",
    "method": "createNewAxisSection",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Axis-sections",
    "typeScriptTag": "axisSections",
    "description": "Create a new AxisSection",
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
        "statusCode": "404",
        "description": "Not Found"
      },
      {
        "statusCode": "500",
        "description": "Internal Server Error"
      }
    ]
  },
  {
    "url": "/api/v3/axisSections/{axisSectionId}",
    "method": "deleteById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Axis-sections",
    "typeScriptTag": "axisSections",
    "description": "Delete an AxisSection by id",
    "parameters": [],
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
        "statusCode": "403",
        "description": "Forbidden"
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
  },
  {
    "url": "/api/v3/axisSections/{axisSectionId}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Axis-sections",
    "typeScriptTag": "axisSections",
    "description": "Get an AxisSection by id",
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
        "statusCode": "404",
        "description": "Not Found"
      },
      {
        "statusCode": "500",
        "description": "Internal Server Error"
      }
    ]
  },
  {
    "url": "/api/v3/axisSections/{axisSectionId}",
    "method": "updateById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Axis-sections",
    "typeScriptTag": "axisSections",
    "description": "Update an AxisSection by id",
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
        "statusCode": "404",
        "description": "Not Found"
      },
      {
        "statusCode": "500",
        "description": "Internal Server Error"
      }
    ]
  },
  {
    "url": "/api/v3/departments",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Departments",
    "typeScriptTag": "departments",
    "description": "List Departments",
    "parameters": [
      {
        "name": "headId",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "parentId",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "paging",
        "schema": "string",
        "required": true,
        "description": "{offset},{limit}. Defaults to 0,1000.",
        "example": "100,0"
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
        "statusCode": "500",
        "description": "Internal Server Error"
      }
    ]
  },
  {
    "url": "/api/v3/departments/tree",
    "method": "listTree",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Departments",
    "typeScriptTag": "departments",
    "description": "List Departements as a tree",
    "parameters": [],
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
        "statusCode": "500",
        "description": "Internal Server Error"
      }
    ]
  },
  {
    "url": "/api/v3/departments/{departmentId}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Departments",
    "typeScriptTag": "departments",
    "description": "Get Departement by id",
    "parameters": [],
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
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  }
]
    }
      language="TypeScript"
      apiTitle="Organization structure API"
      apiBaseUrl="https://example.ilucca.net"
      apiVersion="1.0"
      endpoints={6}
      sdkMethods={12}
      schemas={16}
      parameters={10}
      difficulty="Very Easy"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/lucca/organization/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/lucca/organization/openapi.yaml"
      developerDocumentation="developers.lucca.fr/"
    />
  );
}
  