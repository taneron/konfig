import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function MicrosoftDynamics365BusinessCentralTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="microsoft-dynamics-365-business-central-typescript-sdk"
      metaDescription={`Microsoft is a multinational technology company known for developing, manufacturing, licensing, supporting, and selling computer software, consumer electronics, and personal computers. It is one of the largest technology corporations in the world, with a wide range of products and services including the Windows operating system, Azure cloud services, Office productivity suite, Xbox gaming consoles, and Surface devices.`}
      company="Microsoft"
      serviceName="Dynamics 365 Business Central"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/microsoft/dynamics-365-business-central/logo.png"
      companyKebabCase="microsoft"
      clientNameCamelCase="microsoftDynamics365BusinessCentral"
      homepage="microsoft.com"
      lastUpdated={new Date("2024-03-28T17:24:12.967Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/microsoft/dynamics-365-business-central/favicon.png"
      // Missing contactUrl
      // Missing contactEmail
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/microsoft/dynamics-365-business-central/imagePreview.png"
      GettingStarted={GettingStarted}
      FirstRequest={FirstRequest}
      categories={["financial_services","finance","sales","services","operations"]}
      methods={[
  {
    "url": "/companies",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "company",
    "typeScriptTag": "company",
    "description": "Returns a list of companies",
    "parameters": [
      {
        "name": "$top",
        "schema": "integer",
        "required": false,
        "description": "(v1.0) Number of items to return from the top of the list"
      },
      {
        "name": "$skip",
        "schema": "integer",
        "required": false,
        "description": "(v1.0) Number of items to skip from the list"
      },
      {
        "name": "$limit",
        "schema": "integer",
        "required": false,
        "description": "(v1.0) Number of items to return from the list"
      },
      {
        "name": "$filter",
        "schema": "string",
        "required": false,
        "description": "(v1.0) Filtering expression"
      },
      {
        "name": "$select",
        "schema": "array",
        "description": "(v1.0) Selected properties to be retrieved"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/companies({company_id})",
    "method": "getProperties",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "company",
    "typeScriptTag": "company",
    "description": "Retrieve the properties and relationships of an object of type company for Dynamics 365 Business Central.",
    "parameters": [
      {
        "name": "$select",
        "schema": "array",
        "description": "(v1.0) Selected properties to be retrieved"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/companies({company_id})/items",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "item",
    "typeScriptTag": "item",
    "description": "Returns a list of items",
    "parameters": [
      {
        "name": "$top",
        "schema": "integer",
        "required": false,
        "description": "(v1.0) Number of items to return from the top of the list"
      },
      {
        "name": "$skip",
        "schema": "integer",
        "required": false,
        "description": "(v1.0) Number of items to skip from the list"
      },
      {
        "name": "$limit",
        "schema": "integer",
        "required": false,
        "description": "(v1.0) Number of items to return from the list"
      },
      {
        "name": "$filter",
        "schema": "string",
        "required": false,
        "description": "(v1.0) Filtering expression"
      },
      {
        "name": "$expand",
        "schema": "array",
        "description": "(v1.0) Entities to expand"
      },
      {
        "name": "$select",
        "schema": "array",
        "description": "(v1.0) Selected properties to be retrieved"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/companies({company_id})/items",
    "method": "createDynamicsObject",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "item",
    "typeScriptTag": "item",
    "description": "Creates an object of type item in Dynamics 365 Business Central",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "number",
        "schema": "string",
        "description": ""
      },
      {
        "name": "displayName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "type",
        "schema": "string",
        "description": ""
      },
      {
        "name": "itemCategoryId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "itemCategoryCode",
        "schema": "string",
        "description": ""
      },
      {
        "name": "blocked",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "baseUnitOfMeasureId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "baseUnitOfMeasure",
        "schema": "object",
        "description": ""
      },
      {
        "name": "gtin",
        "schema": "string",
        "description": ""
      },
      {
        "name": "inventory",
        "schema": "number",
        "description": ""
      },
      {
        "name": "unitPrice",
        "schema": "number",
        "description": ""
      },
      {
        "name": "priceIncludesTax",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "unitCost",
        "schema": "number",
        "description": ""
      },
      {
        "name": "taxGroupId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "taxGroupCode",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lastModifiedDateTime",
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
    "url": "/companies({company_id})/items({item_id})",
    "method": "deleteD365Object",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "item",
    "typeScriptTag": "item",
    "description": "Deletes an object of type item in Dynamics 365 Business Central",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "(v1.0) Succesfully deleted the specified item"
      }
    ]
  },
  {
    "url": "/companies({company_id})/items({item_id})",
    "method": "getProperties",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "item",
    "typeScriptTag": "item",
    "description": "Retrieve the properties and relationships of an object of type item for Dynamics 365 Business Central.",
    "parameters": [
      {
        "name": "$expand",
        "schema": "array",
        "description": "(v1.0) Entities to expand"
      },
      {
        "name": "$select",
        "schema": "array",
        "description": "(v1.0) Selected properties to be retrieved"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/companies({company_id})/items({item_id})",
    "method": "updateDynamicsObject",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "item",
    "typeScriptTag": "item",
    "description": "Updates an object of type item in Dynamics 365 Business Central",
    "parameters": [
      {
        "name": "ifMatch",
        "schema": "string",
        "required": true,
        "description": "(v1.0) Required. When this request header is included and the eTag provided does not match the current tag on the entity, this will not be updated.",
        "example": "IF-MATCH"
      },
      {
        "name": "id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "number",
        "schema": "string",
        "description": ""
      },
      {
        "name": "displayName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "type",
        "schema": "string",
        "description": ""
      },
      {
        "name": "itemCategoryId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "itemCategoryCode",
        "schema": "string",
        "description": ""
      },
      {
        "name": "blocked",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "baseUnitOfMeasureId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "baseUnitOfMeasure",
        "schema": "object",
        "description": ""
      },
      {
        "name": "gtin",
        "schema": "string",
        "description": ""
      },
      {
        "name": "inventory",
        "schema": "number",
        "description": ""
      },
      {
        "name": "unitPrice",
        "schema": "number",
        "description": ""
      },
      {
        "name": "priceIncludesTax",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "unitCost",
        "schema": "number",
        "description": ""
      },
      {
        "name": "taxGroupId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "taxGroupCode",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lastModifiedDateTime",
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
    "url": "/companies({company_id})/items({item_id})/picture",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "picture",
    "typeScriptTag": "picture",
    "description": "Returns a list of picture",
    "parameters": [
      {
        "name": "$top",
        "schema": "integer",
        "required": false,
        "description": "(v1.0) Number of items to return from the top of the list"
      },
      {
        "name": "$skip",
        "schema": "integer",
        "required": false,
        "description": "(v1.0) Number of items to skip from the list"
      },
      {
        "name": "$limit",
        "schema": "integer",
        "required": false,
        "description": "(v1.0) Number of items to return from the list"
      },
      {
        "name": "$filter",
        "schema": "string",
        "required": false,
        "description": "(v1.0) Filtering expression"
      },
      {
        "name": "$select",
        "schema": "array",
        "description": "(v1.0) Selected properties to be retrieved"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/companies({company_id})/items({item_id})/picture({picture_id})",
    "method": "deleteObjectById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "picture",
    "typeScriptTag": "picture",
    "description": "Deletes an object of type picture in Dynamics 365 Business Central",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "(v1.0) Succesfully deleted the specified picture"
      }
    ]
  },
  {
    "url": "/companies({company_id})/items({item_id})/picture({picture_id})",
    "method": "getProperties",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "picture",
    "typeScriptTag": "picture",
    "description": "Retrieve the properties and relationships of an object of type picture for Dynamics 365 Business Central.",
    "parameters": [
      {
        "name": "$select",
        "schema": "array",
        "description": "(v1.0) Selected properties to be retrieved"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/companies({company_id})/items({item_id})/picture({picture_id})",
    "method": "updateDynamicsObject",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "picture",
    "typeScriptTag": "picture",
    "description": "Updates an object of type picture in Dynamics 365 Business Central",
    "parameters": [
      {
        "name": "ifMatch",
        "schema": "string",
        "required": true,
        "description": "(v1.0) Required. When this request header is included and the eTag provided does not match the current tag on the entity, this will not be updated.",
        "example": "IF-MATCH"
      },
      {
        "name": "id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "width",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "height",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "contentType",
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
      }
    ]
  },
  {
    "url": "/companies({company_id})/items({item_id})/defaultDimensions",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "defaultDimensions",
    "typeScriptTag": "defaultDimensions",
    "description": "Returns a list of defaultDimensions",
    "parameters": [
      {
        "name": "$top",
        "schema": "integer",
        "required": false,
        "description": "(v1.0) Number of items to return from the top of the list"
      },
      {
        "name": "$skip",
        "schema": "integer",
        "required": false,
        "description": "(v1.0) Number of items to skip from the list"
      },
      {
        "name": "$limit",
        "schema": "integer",
        "required": false,
        "description": "(v1.0) Number of items to return from the list"
      },
      {
        "name": "$filter",
        "schema": "string",
        "required": false,
        "description": "(v1.0) Filtering expression"
      },
      {
        "name": "$expand",
        "schema": "array",
        "description": "(v1.0) Entities to expand"
      },
      {
        "name": "$select",
        "schema": "array",
        "description": "(v1.0) Selected properties to be retrieved"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/companies({company_id})/items({item_id})/defaultDimensions",
    "method": "createDynamicsObject",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "defaultDimensions",
    "typeScriptTag": "defaultDimensions",
    "description": "Creates an object of type defaultDimensions in Dynamics 365 Business Central",
    "parameters": [
      {
        "name": "parentId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "dimensionId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "dimensionCode",
        "schema": "string",
        "description": ""
      },
      {
        "name": "dimensionValueId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "dimensionValueCode",
        "schema": "string",
        "description": ""
      },
      {
        "name": "postingValidation",
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
    "url": "/companies({company_id})/items({item_id})/defaultDimensions({defaultDimensions_parentId},{defaultDimensions_dimensionId})",
    "method": "deleteObject",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "defaultDimensions",
    "typeScriptTag": "defaultDimensions",
    "description": "Deletes an object of type defaultDimensions in Dynamics 365 Business Central",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "(v1.0) Succesfully deleted the specified defaultDimensions"
      }
    ]
  },
  {
    "url": "/companies({company_id})/items({item_id})/defaultDimensions({defaultDimensions_parentId},{defaultDimensions_dimensionId})",
    "method": "getProperties",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "defaultDimensions",
    "typeScriptTag": "defaultDimensions",
    "description": "Retrieve the properties and relationships of an object of type defaultDimensions for Dynamics 365 Business Central.",
    "parameters": [
      {
        "name": "$expand",
        "schema": "array",
        "description": "(v1.0) Entities to expand"
      },
      {
        "name": "$select",
        "schema": "array",
        "description": "(v1.0) Selected properties to be retrieved"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/companies({company_id})/items({item_id})/defaultDimensions({defaultDimensions_parentId},{defaultDimensions_dimensionId})",
    "method": "updateObject",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "defaultDimensions",
    "typeScriptTag": "defaultDimensions",
    "description": "Updates an object of type defaultDimensions in Dynamics 365 Business Central",
    "parameters": [
      {
        "name": "ifMatch",
        "schema": "string",
        "required": true,
        "description": "(v1.0) Required. When this request header is included and the eTag provided does not match the current tag on the entity, this will not be updated.",
        "example": "IF-MATCH"
      },
      {
        "name": "parentId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "dimensionId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "dimensionCode",
        "schema": "string",
        "description": ""
      },
      {
        "name": "dimensionValueId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "dimensionValueCode",
        "schema": "string",
        "description": ""
      },
      {
        "name": "postingValidation",
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
    "url": "/companies({company_id})/picture",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "picture",
    "typeScriptTag": "picture",
    "description": "Returns a list of picture",
    "parameters": [
      {
        "name": "$top",
        "schema": "integer",
        "required": false,
        "description": "(v1.0) Number of items to return from the top of the list"
      },
      {
        "name": "$skip",
        "schema": "integer",
        "required": false,
        "description": "(v1.0) Number of items to skip from the list"
      },
      {
        "name": "$limit",
        "schema": "integer",
        "required": false,
        "description": "(v1.0) Number of items to return from the list"
      },
      {
        "name": "$filter",
        "schema": "string",
        "required": false,
        "description": "(v1.0) Filtering expression"
      },
      {
        "name": "$select",
        "schema": "array",
        "description": "(v1.0) Selected properties to be retrieved"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/companies({company_id})/picture({picture_id})",
    "method": "deleteD365Object",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "picture",
    "typeScriptTag": "picture",
    "description": "Deletes an object of type picture in Dynamics 365 Business Central",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "(v1.0) Succesfully deleted the specified picture"
      }
    ]
  },
  {
    "url": "/companies({company_id})/picture({picture_id})",
    "method": "getProperties",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "picture",
    "typeScriptTag": "picture",
    "description": "Retrieve the properties and relationships of an object of type picture for Dynamics 365 Business Central.",
    "parameters": [
      {
        "name": "$select",
        "schema": "array",
        "description": "(v1.0) Selected properties to be retrieved"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/companies({company_id})/picture({picture_id})",
    "method": "updateDynamicsObject",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "picture",
    "typeScriptTag": "picture",
    "description": "Updates an object of type picture in Dynamics 365 Business Central",
    "parameters": [
      {
        "name": "ifMatch",
        "schema": "string",
        "required": true,
        "description": "(v1.0) Required. When this request header is included and the eTag provided does not match the current tag on the entity, this will not be updated.",
        "example": "IF-MATCH"
      },
      {
        "name": "id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "width",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "height",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "contentType",
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
      }
    ]
  },
  {
    "url": "/companies({company_id})/defaultDimensions",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "defaultDimensions",
    "typeScriptTag": "defaultDimensions",
    "description": "Returns a list of defaultDimensions",
    "parameters": [
      {
        "name": "$top",
        "schema": "integer",
        "required": false,
        "description": "(v1.0) Number of items to return from the top of the list"
      },
      {
        "name": "$skip",
        "schema": "integer",
        "required": false,
        "description": "(v1.0) Number of items to skip from the list"
      },
      {
        "name": "$limit",
        "schema": "integer",
        "required": false,
        "description": "(v1.0) Number of items to return from the list"
      },
      {
        "name": "$filter",
        "schema": "string",
        "required": false,
        "description": "(v1.0) Filtering expression"
      },
      {
        "name": "$expand",
        "schema": "array",
        "description": "(v1.0) Entities to expand"
      },
      {
        "name": "$select",
        "schema": "array",
        "description": "(v1.0) Selected properties to be retrieved"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/companies({company_id})/defaultDimensions",
    "method": "createD365Object",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "defaultDimensions",
    "typeScriptTag": "defaultDimensions",
    "description": "Creates an object of type defaultDimensions in Dynamics 365 Business Central",
    "parameters": [
      {
        "name": "parentId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "dimensionId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "dimensionCode",
        "schema": "string",
        "description": ""
      },
      {
        "name": "dimensionValueId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "dimensionValueCode",
        "schema": "string",
        "description": ""
      },
      {
        "name": "postingValidation",
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
    "url": "/companies({company_id})/defaultDimensions({defaultDimensions_parentId},{defaultDimensions_dimensionId})",
    "method": "deleteObject",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "defaultDimensions",
    "typeScriptTag": "defaultDimensions",
    "description": "Deletes an object of type defaultDimensions in Dynamics 365 Business Central",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "(v1.0) Succesfully deleted the specified defaultDimensions"
      }
    ]
  },
  {
    "url": "/companies({company_id})/defaultDimensions({defaultDimensions_parentId},{defaultDimensions_dimensionId})",
    "method": "getProperties",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "defaultDimensions",
    "typeScriptTag": "defaultDimensions",
    "description": "Retrieve the properties and relationships of an object of type defaultDimensions for Dynamics 365 Business Central.",
    "parameters": [
      {
        "name": "$expand",
        "schema": "array",
        "description": "(v1.0) Entities to expand"
      },
      {
        "name": "$select",
        "schema": "array",
        "description": "(v1.0) Selected properties to be retrieved"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/companies({company_id})/defaultDimensions({defaultDimensions_parentId},{defaultDimensions_dimensionId})",
    "method": "updateObject",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "defaultDimensions",
    "typeScriptTag": "defaultDimensions",
    "description": "Updates an object of type defaultDimensions in Dynamics 365 Business Central",
    "parameters": [
      {
        "name": "ifMatch",
        "schema": "string",
        "required": true,
        "description": "(v1.0) Required. When this request header is included and the eTag provided does not match the current tag on the entity, this will not be updated.",
        "example": "IF-MATCH"
      },
      {
        "name": "parentId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "dimensionId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "dimensionCode",
        "schema": "string",
        "description": ""
      },
      {
        "name": "dimensionValueId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "dimensionValueCode",
        "schema": "string",
        "description": ""
      },
      {
        "name": "postingValidation",
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
    "url": "/companies({company_id})/customers",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "customer",
    "typeScriptTag": "customer",
    "description": "Returns a list of customers",
    "parameters": [
      {
        "name": "$top",
        "schema": "integer",
        "required": false,
        "description": "(v1.0) Number of items to return from the top of the list"
      },
      {
        "name": "$skip",
        "schema": "integer",
        "required": false,
        "description": "(v1.0) Number of items to skip from the list"
      },
      {
        "name": "$limit",
        "schema": "integer",
        "required": false,
        "description": "(v1.0) Number of items to return from the list"
      },
      {
        "name": "$filter",
        "schema": "string",
        "required": false,
        "description": "(v1.0) Filtering expression"
      },
      {
        "name": "$expand",
        "schema": "array",
        "description": "(v1.0) Entities to expand"
      },
      {
        "name": "$select",
        "schema": "array",
        "description": "(v1.0) Selected properties to be retrieved"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/companies({company_id})/customers",
    "method": "createDynamicsObject",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "customer",
    "typeScriptTag": "customer",
    "description": "Creates an object of type customer in Dynamics 365 Business Central",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "number",
        "schema": "string",
        "description": ""
      },
      {
        "name": "displayName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "type",
        "schema": "string",
        "description": ""
      },
      {
        "name": "address",
        "schema": "object",
        "description": ""
      },
      {
        "name": "phoneNumber",
        "schema": "string",
        "description": ""
      },
      {
        "name": "email",
        "schema": "string",
        "description": ""
      },
      {
        "name": "website",
        "schema": "string",
        "description": ""
      },
      {
        "name": "taxLiable",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "taxAreaId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "taxAreaDisplayName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "taxRegistrationNumber",
        "schema": "string",
        "description": ""
      },
      {
        "name": "currencyId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "currencyCode",
        "schema": "string",
        "description": ""
      },
      {
        "name": "paymentTermsId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "shipmentMethodId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "paymentMethodId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "blocked",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lastModifiedDateTime",
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
    "url": "/companies({company_id})/customers({customer_id})",
    "method": "deleteD365Object",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "customer",
    "typeScriptTag": "customer",
    "description": "Deletes an object of type customer in Dynamics 365 Business Central",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "(v1.0) Succesfully deleted the specified customer"
      }
    ]
  },
  {
    "url": "/companies({company_id})/customers({customer_id})",
    "method": "getProperties",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "customer",
    "typeScriptTag": "customer",
    "description": "Retrieve the properties and relationships of an object of type customer for Dynamics 365 Business Central.",
    "parameters": [
      {
        "name": "$expand",
        "schema": "array",
        "description": "(v1.0) Entities to expand"
      },
      {
        "name": "$select",
        "schema": "array",
        "description": "(v1.0) Selected properties to be retrieved"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/companies({company_id})/customers({customer_id})",
    "method": "updateDynamicsObject",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "customer",
    "typeScriptTag": "customer",
    "description": "Updates an object of type customer in Dynamics 365 Business Central",
    "parameters": [
      {
        "name": "ifMatch",
        "schema": "string",
        "required": true,
        "description": "(v1.0) Required. When this request header is included and the eTag provided does not match the current tag on the entity, this will not be updated.",
        "example": "IF-MATCH"
      },
      {
        "name": "id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "number",
        "schema": "string",
        "description": ""
      },
      {
        "name": "displayName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "type",
        "schema": "string",
        "description": ""
      },
      {
        "name": "address",
        "schema": "object",
        "description": ""
      },
      {
        "name": "phoneNumber",
        "schema": "string",
        "description": ""
      },
      {
        "name": "email",
        "schema": "string",
        "description": ""
      },
      {
        "name": "website",
        "schema": "string",
        "description": ""
      },
      {
        "name": "taxLiable",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "taxAreaId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "taxAreaDisplayName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "taxRegistrationNumber",
        "schema": "string",
        "description": ""
      },
      {
        "name": "currencyId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "currencyCode",
        "schema": "string",
        "description": ""
      },
      {
        "name": "paymentTermsId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "shipmentMethodId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "paymentMethodId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "blocked",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lastModifiedDateTime",
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
    "url": "/companies({company_id})/customers({customer_id})/customerFinancialDetails",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "customerFinancialDetail",
    "typeScriptTag": "customerFinancialDetail",
    "description": "Returns a list of customerFinancialDetails",
    "parameters": [
      {
        "name": "$top",
        "schema": "integer",
        "required": false,
        "description": "(v1.0) Number of items to return from the top of the list"
      },
      {
        "name": "$skip",
        "schema": "integer",
        "required": false,
        "description": "(v1.0) Number of items to skip from the list"
      },
      {
        "name": "$limit",
        "schema": "integer",
        "required": false,
        "description": "(v1.0) Number of items to return from the list"
      },
      {
        "name": "$filter",
        "schema": "string",
        "required": false,
        "description": "(v1.0) Filtering expression"
      },
      {
        "name": "$select",
        "schema": "array",
        "description": "(v1.0) Selected properties to be retrieved"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/companies({company_id})/customers({customer_id})/customerFinancialDetails({customerFinancialDetail_id})",
    "method": "getProperties",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "customerFinancialDetail",
    "typeScriptTag": "customerFinancialDetail",
    "description": "Retrieve the properties and relationships of an object of type customerFinancialDetail for Dynamics 365 Business Central.",
    "parameters": [
      {
        "name": "$select",
        "schema": "array",
        "description": "(v1.0) Selected properties to be retrieved"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/companies({company_id})/customers({customer_id})/picture",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "picture",
    "typeScriptTag": "picture",
    "description": "Returns a list of picture",
    "parameters": [
      {
        "name": "$top",
        "schema": "integer",
        "required": false,
        "description": "(v1.0) Number of items to return from the top of the list"
      },
      {
        "name": "$skip",
        "schema": "integer",
        "required": false,
        "description": "(v1.0) Number of items to skip from the list"
      },
      {
        "name": "$limit",
        "schema": "integer",
        "required": false,
        "description": "(v1.0) Number of items to return from the list"
      },
      {
        "name": "$filter",
        "schema": "string",
        "required": false,
        "description": "(v1.0) Filtering expression"
      },
      {
        "name": "$select",
        "schema": "array",
        "description": "(v1.0) Selected properties to be retrieved"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/companies({company_id})/customers({customer_id})/picture({picture_id})",
    "method": "deleteObjectById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "picture",
    "typeScriptTag": "picture",
    "description": "Deletes an object of type picture in Dynamics 365 Business Central",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "(v1.0) Succesfully deleted the specified picture"
      }
    ]
  },
  {
    "url": "/companies({company_id})/customers({customer_id})/picture({picture_id})",
    "method": "getProperties",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "picture",
    "typeScriptTag": "picture",
    "description": "Retrieve the properties and relationships of an object of type picture for Dynamics 365 Business Central.",
    "parameters": [
      {
        "name": "$select",
        "schema": "array",
        "description": "(v1.0) Selected properties to be retrieved"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/companies({company_id})/customers({customer_id})/picture({picture_id})",
    "method": "updateObject",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "picture",
    "typeScriptTag": "picture",
    "description": "Updates an object of type picture in Dynamics 365 Business Central",
    "parameters": [
      {
        "name": "ifMatch",
        "schema": "string",
        "required": true,
        "description": "(v1.0) Required. When this request header is included and the eTag provided does not match the current tag on the entity, this will not be updated.",
        "example": "IF-MATCH"
      },
      {
        "name": "id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "width",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "height",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "contentType",
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
      }
    ]
  },
  {
    "url": "/companies({company_id})/customers({customer_id})/defaultDimensions",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "defaultDimensions",
    "typeScriptTag": "defaultDimensions",
    "description": "Returns a list of defaultDimensions",
    "parameters": [
      {
        "name": "$top",
        "schema": "integer",
        "required": false,
        "description": "(v1.0) Number of items to return from the top of the list"
      },
      {
        "name": "$skip",
        "schema": "integer",
        "required": false,
        "description": "(v1.0) Number of items to skip from the list"
      },
      {
        "name": "$limit",
        "schema": "integer",
        "required": false,
        "description": "(v1.0) Number of items to return from the list"
      },
      {
        "name": "$filter",
        "schema": "string",
        "required": false,
        "description": "(v1.0) Filtering expression"
      },
      {
        "name": "$expand",
        "schema": "array",
        "description": "(v1.0) Entities to expand"
      },
      {
        "name": "$select",
        "schema": "array",
        "description": "(v1.0) Selected properties to be retrieved"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/companies({company_id})/customers({customer_id})/defaultDimensions",
    "method": "createDynamicsObject",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "defaultDimensions",
    "typeScriptTag": "defaultDimensions",
    "description": "Creates an object of type defaultDimensions in Dynamics 365 Business Central",
    "parameters": [
      {
        "name": "parentId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "dimensionId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "dimensionCode",
        "schema": "string",
        "description": ""
      },
      {
        "name": "dimensionValueId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "dimensionValueCode",
        "schema": "string",
        "description": ""
      },
      {
        "name": "postingValidation",
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
    "url": "/companies({company_id})/customers({customer_id})/defaultDimensions({defaultDimensions_parentId},{defaultDimensions_dimensionId})",
    "method": "deleteObject",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "defaultDimensions",
    "typeScriptTag": "defaultDimensions",
    "description": "Deletes an object of type defaultDimensions in Dynamics 365 Business Central",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "(v1.0) Succesfully deleted the specified defaultDimensions"
      }
    ]
  },
  {
    "url": "/companies({company_id})/customers({customer_id})/defaultDimensions({defaultDimensions_parentId},{defaultDimensions_dimensionId})",
    "method": "getProperties",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "defaultDimensions",
    "typeScriptTag": "defaultDimensions",
    "description": "Retrieve the properties and relationships of an object of type defaultDimensions for Dynamics 365 Business Central.",
    "parameters": [
      {
        "name": "$expand",
        "schema": "array",
        "description": "(v1.0) Entities to expand"
      },
      {
        "name": "$select",
        "schema": "array",
        "description": "(v1.0) Selected properties to be retrieved"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/companies({company_id})/customers({customer_id})/defaultDimensions({defaultDimensions_parentId},{defaultDimensions_dimensionId})",
    "method": "updateObject",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "defaultDimensions",
    "typeScriptTag": "defaultDimensions",
    "description": "Updates an object of type defaultDimensions in Dynamics 365 Business Central",
    "parameters": [
      {
        "name": "ifMatch",
        "schema": "string",
        "required": true,
        "description": "(v1.0) Required. When this request header is included and the eTag provided does not match the current tag on the entity, this will not be updated.",
        "example": "IF-MATCH"
      },
      {
        "name": "parentId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "dimensionId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "dimensionCode",
        "schema": "string",
        "description": ""
      },
      {
        "name": "dimensionValueId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "dimensionValueCode",
        "schema": "string",
        "description": ""
      },
      {
        "name": "postingValidation",
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
    "url": "/companies({company_id})/customerFinancialDetails",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "customerFinancialDetail",
    "typeScriptTag": "customerFinancialDetail",
    "description": "Returns a list of customerFinancialDetails",
    "parameters": [
      {
        "name": "$top",
        "schema": "integer",
        "required": false,
        "description": "(v1.0) Number of items to return from the top of the list"
      },
      {
        "name": "$skip",
        "schema": "integer",
        "required": false,
        "description": "(v1.0) Number of items to skip from the list"
      },
      {
        "name": "$limit",
        "schema": "integer",
        "required": false,
        "description": "(v1.0) Number of items to return from the list"
      },
      {
        "name": "$filter",
        "schema": "string",
        "required": false,
        "description": "(v1.0) Filtering expression"
      },
      {
        "name": "$select",
        "schema": "array",
        "description": "(v1.0) Selected properties to be retrieved"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/companies({company_id})/customerFinancialDetails({customerFinancialDetail_id})",
    "method": "getProperties",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "customerFinancialDetail",
    "typeScriptTag": "customerFinancialDetail",
    "description": "Retrieve the properties and relationships of an object of type customerFinancialDetail for Dynamics 365 Business Central.",
    "parameters": [
      {
        "name": "$select",
        "schema": "array",
        "description": "(v1.0) Selected properties to be retrieved"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/companies({company_id})/vendors",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "vendor",
    "typeScriptTag": "vendor",
    "description": "Returns a list of vendors",
    "parameters": [
      {
        "name": "$top",
        "schema": "integer",
        "required": false,
        "description": "(v1.0) Number of items to return from the top of the list"
      },
      {
        "name": "$skip",
        "schema": "integer",
        "required": false,
        "description": "(v1.0) Number of items to skip from the list"
      },
      {
        "name": "$limit",
        "schema": "integer",
        "required": false,
        "description": "(v1.0) Number of items to return from the list"
      },
      {
        "name": "$filter",
        "schema": "string",
        "required": false,
        "description": "(v1.0) Filtering expression"
      },
      {
        "name": "$expand",
        "schema": "array",
        "description": "(v1.0) Entities to expand"
      },
      {
        "name": "$select",
        "schema": "array",
        "description": "(v1.0) Selected properties to be retrieved"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/companies({company_id})/vendors",
    "method": "createDynamicsObject",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "vendor",
    "typeScriptTag": "vendor",
    "description": "Creates an object of type vendor in Dynamics 365 Business Central",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "number",
        "schema": "string",
        "description": ""
      },
      {
        "name": "displayName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "address",
        "schema": "object",
        "description": ""
      },
      {
        "name": "phoneNumber",
        "schema": "string",
        "description": ""
      },
      {
        "name": "email",
        "schema": "string",
        "description": ""
      },
      {
        "name": "website",
        "schema": "string",
        "description": ""
      },
      {
        "name": "taxRegistrationNumber",
        "schema": "string",
        "description": ""
      },
      {
        "name": "currencyId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "currencyCode",
        "schema": "string",
        "description": ""
      },
      {
        "name": "irs1099Code",
        "schema": "string",
        "description": ""
      },
      {
        "name": "paymentTermsId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "paymentMethodId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "taxLiable",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "blocked",
        "schema": "string",
        "description": ""
      },
      {
        "name": "balance",
        "schema": "number",
        "description": ""
      },
      {
        "name": "lastModifiedDateTime",
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
    "url": "/companies({company_id})/vendors({vendor_id})",
    "method": "deleteD365Object",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "vendor",
    "typeScriptTag": "vendor",
    "description": "Deletes an object of type vendor in Dynamics 365 Business Central",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "(v1.0) Succesfully deleted the specified vendor"
      }
    ]
  },
  {
    "url": "/companies({company_id})/vendors({vendor_id})",
    "method": "getProperties",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "vendor",
    "typeScriptTag": "vendor",
    "description": "Retrieve the properties and relationships of an object of type vendor for Dynamics 365 Business Central.",
    "parameters": [
      {
        "name": "$expand",
        "schema": "array",
        "description": "(v1.0) Entities to expand"
      },
      {
        "name": "$select",
        "schema": "array",
        "description": "(v1.0) Selected properties to be retrieved"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/companies({company_id})/vendors({vendor_id})",
    "method": "updateDynamicsObject",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "vendor",
    "typeScriptTag": "vendor",
    "description": "Updates an object of type vendor in Dynamics 365 Business Central",
    "parameters": [
      {
        "name": "ifMatch",
        "schema": "string",
        "required": true,
        "description": "(v1.0) Required. When this request header is included and the eTag provided does not match the current tag on the entity, this will not be updated.",
        "example": "IF-MATCH"
      },
      {
        "name": "id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "number",
        "schema": "string",
        "description": ""
      },
      {
        "name": "displayName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "address",
        "schema": "object",
        "description": ""
      },
      {
        "name": "phoneNumber",
        "schema": "string",
        "description": ""
      },
      {
        "name": "email",
        "schema": "string",
        "description": ""
      },
      {
        "name": "website",
        "schema": "string",
        "description": ""
      },
      {
        "name": "taxRegistrationNumber",
        "schema": "string",
        "description": ""
      },
      {
        "name": "currencyId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "currencyCode",
        "schema": "string",
        "description": ""
      },
      {
        "name": "irs1099Code",
        "schema": "string",
        "description": ""
      },
      {
        "name": "paymentTermsId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "paymentMethodId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "taxLiable",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "blocked",
        "schema": "string",
        "description": ""
      },
      {
        "name": "balance",
        "schema": "number",
        "description": ""
      },
      {
        "name": "lastModifiedDateTime",
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
    "url": "/companies({company_id})/vendors({vendor_id})/picture",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "picture",
    "typeScriptTag": "picture",
    "description": "Returns a list of picture",
    "parameters": [
      {
        "name": "$top",
        "schema": "integer",
        "required": false,
        "description": "(v1.0) Number of items to return from the top of the list"
      },
      {
        "name": "$skip",
        "schema": "integer",
        "required": false,
        "description": "(v1.0) Number of items to skip from the list"
      },
      {
        "name": "$limit",
        "schema": "integer",
        "required": false,
        "description": "(v1.0) Number of items to return from the list"
      },
      {
        "name": "$filter",
        "schema": "string",
        "required": false,
        "description": "(v1.0) Filtering expression"
      },
      {
        "name": "$select",
        "schema": "array",
        "description": "(v1.0) Selected properties to be retrieved"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/companies({company_id})/vendors({vendor_id})/picture({picture_id})",
    "method": "deleteObjectById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "picture",
    "typeScriptTag": "picture",
    "description": "Deletes an object of type picture in Dynamics 365 Business Central",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "(v1.0) Succesfully deleted the specified picture"
      }
    ]
  },
  {
    "url": "/companies({company_id})/vendors({vendor_id})/picture({picture_id})",
    "method": "getProperties",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "picture",
    "typeScriptTag": "picture",
    "description": "Retrieve the properties and relationships of an object of type picture for Dynamics 365 Business Central.",
    "parameters": [
      {
        "name": "$select",
        "schema": "array",
        "description": "(v1.0) Selected properties to be retrieved"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/companies({company_id})/vendors({vendor_id})/picture({picture_id})",
    "method": "updateObject",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "picture",
    "typeScriptTag": "picture",
    "description": "Updates an object of type picture in Dynamics 365 Business Central",
    "parameters": [
      {
        "name": "ifMatch",
        "schema": "string",
        "required": true,
        "description": "(v1.0) Required. When this request header is included and the eTag provided does not match the current tag on the entity, this will not be updated.",
        "example": "IF-MATCH"
      },
      {
        "name": "id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "width",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "height",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "contentType",
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
      }
    ]
  },
  {
    "url": "/companies({company_id})/vendors({vendor_id})/defaultDimensions",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "defaultDimensions",
    "typeScriptTag": "defaultDimensions",
    "description": "Returns a list of defaultDimensions",
    "parameters": [
      {
        "name": "$top",
        "schema": "integer",
        "required": false,
        "description": "(v1.0) Number of items to return from the top of the list"
      },
      {
        "name": "$skip",
        "schema": "integer",
        "required": false,
        "description": "(v1.0) Number of items to skip from the list"
      },
      {
        "name": "$limit",
        "schema": "integer",
        "required": false,
        "description": "(v1.0) Number of items to return from the list"
      },
      {
        "name": "$filter",
        "schema": "string",
        "required": false,
        "description": "(v1.0) Filtering expression"
      },
      {
        "name": "$expand",
        "schema": "array",
        "description": "(v1.0) Entities to expand"
      },
      {
        "name": "$select",
        "schema": "array",
        "description": "(v1.0) Selected properties to be retrieved"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/companies({company_id})/vendors({vendor_id})/defaultDimensions",
    "method": "createDynamicsObject",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "defaultDimensions",
    "typeScriptTag": "defaultDimensions",
    "description": "Creates an object of type defaultDimensions in Dynamics 365 Business Central",
    "parameters": [
      {
        "name": "parentId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "dimensionId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "dimensionCode",
        "schema": "string",
        "description": ""
      },
      {
        "name": "dimensionValueId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "dimensionValueCode",
        "schema": "string",
        "description": ""
      },
      {
        "name": "postingValidation",
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
    "url": "/companies({company_id})/vendors({vendor_id})/defaultDimensions({defaultDimensions_parentId},{defaultDimensions_dimensionId})",
    "method": "deleteObject",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "defaultDimensions",
    "typeScriptTag": "defaultDimensions",
    "description": "Deletes an object of type defaultDimensions in Dynamics 365 Business Central",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "(v1.0) Succesfully deleted the specified defaultDimensions"
      }
    ]
  },
  {
    "url": "/companies({company_id})/vendors({vendor_id})/defaultDimensions({defaultDimensions_parentId},{defaultDimensions_dimensionId})",
    "method": "getProperties",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "defaultDimensions",
    "typeScriptTag": "defaultDimensions",
    "description": "Retrieve the properties and relationships of an object of type defaultDimensions for Dynamics 365 Business Central.",
    "parameters": [
      {
        "name": "$expand",
        "schema": "array",
        "description": "(v1.0) Entities to expand"
      },
      {
        "name": "$select",
        "schema": "array",
        "description": "(v1.0) Selected properties to be retrieved"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/companies({company_id})/vendors({vendor_id})/defaultDimensions({defaultDimensions_parentId},{defaultDimensions_dimensionId})",
    "method": "updateObject",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "defaultDimensions",
    "typeScriptTag": "defaultDimensions",
    "description": "Updates an object of type defaultDimensions in Dynamics 365 Business Central",
    "parameters": [
      {
        "name": "ifMatch",
        "schema": "string",
        "required": true,
        "description": "(v1.0) Required. When this request header is included and the eTag provided does not match the current tag on the entity, this will not be updated.",
        "example": "IF-MATCH"
      },
      {
        "name": "parentId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "dimensionId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "dimensionCode",
        "schema": "string",
        "description": ""
      },
      {
        "name": "dimensionValueId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "dimensionValueCode",
        "schema": "string",
        "description": ""
      },
      {
        "name": "postingValidation",
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
    "url": "/companies({company_id})/companyInformation",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "companyInformation",
    "typeScriptTag": "companyInformation",
    "description": "Returns a list of companyInformation",
    "parameters": [
      {
        "name": "$top",
        "schema": "integer",
        "required": false,
        "description": "(v1.0) Number of items to return from the top of the list"
      },
      {
        "name": "$skip",
        "schema": "integer",
        "required": false,
        "description": "(v1.0) Number of items to skip from the list"
      },
      {
        "name": "$limit",
        "schema": "integer",
        "required": false,
        "description": "(v1.0) Number of items to return from the list"
      },
      {
        "name": "$filter",
        "schema": "string",
        "required": false,
        "description": "(v1.0) Filtering expression"
      },
      {
        "name": "$select",
        "schema": "array",
        "description": "(v1.0) Selected properties to be retrieved"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/companies({company_id})/companyInformation({companyInformation_id})",
    "method": "getProperties",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "companyInformation",
    "typeScriptTag": "companyInformation",
    "description": "Retrieve the properties and relationships of an object of type companyInformation for Dynamics 365 Business Central.",
    "parameters": [
      {
        "name": "$select",
        "schema": "array",
        "description": "(v1.0) Selected properties to be retrieved"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/companies({company_id})/companyInformation({companyInformation_id})",
    "method": "updateDynamicsObject",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "companyInformation",
    "typeScriptTag": "companyInformation",
    "description": "Updates an object of type companyInformation in Dynamics 365 Business Central",
    "parameters": [
      {
        "name": "ifMatch",
        "schema": "string",
        "required": true,
        "description": "(v1.0) Required. When this request header is included and the eTag provided does not match the current tag on the entity, this will not be updated.",
        "example": "IF-MATCH"
      },
      {
        "name": "id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "displayName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "address",
        "schema": "object",
        "description": ""
      },
      {
        "name": "phoneNumber",
        "schema": "string",
        "description": ""
      },
      {
        "name": "faxNumber",
        "schema": "string",
        "description": ""
      },
      {
        "name": "email",
        "schema": "string",
        "description": ""
      },
      {
        "name": "website",
        "schema": "string",
        "description": ""
      },
      {
        "name": "taxRegistrationNumber",
        "schema": "string",
        "description": ""
      },
      {
        "name": "currencyCode",
        "schema": "string",
        "description": ""
      },
      {
        "name": "currentFiscalYearStartDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "industry",
        "schema": "string",
        "description": ""
      },
      {
        "name": "picture",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lastModifiedDateTime",
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
    "url": "/companies({company_id})/salesInvoices",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "salesInvoice",
    "typeScriptTag": "salesInvoice",
    "description": "Returns a list of salesInvoices",
    "parameters": [
      {
        "name": "$top",
        "schema": "integer",
        "required": false,
        "description": "(v1.0) Number of items to return from the top of the list"
      },
      {
        "name": "$skip",
        "schema": "integer",
        "required": false,
        "description": "(v1.0) Number of items to skip from the list"
      },
      {
        "name": "$limit",
        "schema": "integer",
        "required": false,
        "description": "(v1.0) Number of items to return from the list"
      },
      {
        "name": "$filter",
        "schema": "string",
        "required": false,
        "description": "(v1.0) Filtering expression"
      },
      {
        "name": "$expand",
        "schema": "array",
        "description": "(v1.0) Entities to expand"
      },
      {
        "name": "$select",
        "schema": "array",
        "description": "(v1.0) Selected properties to be retrieved"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/companies({company_id})/salesInvoices",
    "method": "createDynamicsObject",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "salesInvoice",
    "typeScriptTag": "salesInvoice",
    "description": "Creates an object of type salesInvoice in Dynamics 365 Business Central",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "number",
        "schema": "string",
        "description": ""
      },
      {
        "name": "externalDocumentNumber",
        "schema": "string",
        "description": ""
      },
      {
        "name": "invoiceDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "dueDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "customerPurchaseOrderReference",
        "schema": "string",
        "description": ""
      },
      {
        "name": "customerId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "contactId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "customerNumber",
        "schema": "string",
        "description": ""
      },
      {
        "name": "customerName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "billToName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "billToCustomerId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "billToCustomerNumber",
        "schema": "string",
        "description": ""
      },
      {
        "name": "shipToName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "shipToContact",
        "schema": "string",
        "description": ""
      },
      {
        "name": "sellingPostalAddress",
        "schema": "object",
        "description": ""
      },
      {
        "name": "billingPostalAddress",
        "schema": "object",
        "description": ""
      },
      {
        "name": "shippingPostalAddress",
        "schema": "object",
        "description": ""
      },
      {
        "name": "currencyId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "currencyCode",
        "schema": "string",
        "description": ""
      },
      {
        "name": "orderId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "orderNumber",
        "schema": "string",
        "description": ""
      },
      {
        "name": "paymentTermsId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "shipmentMethodId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "salesperson",
        "schema": "string",
        "description": ""
      },
      {
        "name": "pricesIncludeTax",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "remainingAmount",
        "schema": "number",
        "description": ""
      },
      {
        "name": "discountAmount",
        "schema": "number",
        "description": ""
      },
      {
        "name": "discountAppliedBeforeTax",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "totalAmountExcludingTax",
        "schema": "number",
        "description": ""
      },
      {
        "name": "totalTaxAmount",
        "schema": "number",
        "description": ""
      },
      {
        "name": "totalAmountIncludingTax",
        "schema": "number",
        "description": ""
      },
      {
        "name": "status",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lastModifiedDateTime",
        "schema": "string",
        "description": ""
      },
      {
        "name": "phoneNumber",
        "schema": "string",
        "description": ""
      },
      {
        "name": "email",
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
    "url": "/companies({company_id})/salesInvoices({salesInvoice_id})",
    "method": "deleteObject",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "salesInvoice",
    "typeScriptTag": "salesInvoice",
    "description": "Deletes an object of type salesInvoice in Dynamics 365 Business Central",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "(v1.0) Succesfully deleted the specified salesInvoice"
      }
    ]
  },
  {
    "url": "/companies({company_id})/salesInvoices({salesInvoice_id})",
    "method": "getProperties",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "salesInvoice",
    "typeScriptTag": "salesInvoice",
    "description": "Retrieve the properties and relationships of an object of type salesInvoice for Dynamics 365 Business Central.",
    "parameters": [
      {
        "name": "$expand",
        "schema": "array",
        "description": "(v1.0) Entities to expand"
      },
      {
        "name": "$select",
        "schema": "array",
        "description": "(v1.0) Selected properties to be retrieved"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/companies({company_id})/salesInvoices({salesInvoice_id})",
    "method": "updateObjectById",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "salesInvoice",
    "typeScriptTag": "salesInvoice",
    "description": "Updates an object of type salesInvoice in Dynamics 365 Business Central",
    "parameters": [
      {
        "name": "ifMatch",
        "schema": "string",
        "required": true,
        "description": "(v1.0) Required. When this request header is included and the eTag provided does not match the current tag on the entity, this will not be updated.",
        "example": "IF-MATCH"
      },
      {
        "name": "id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "number",
        "schema": "string",
        "description": ""
      },
      {
        "name": "externalDocumentNumber",
        "schema": "string",
        "description": ""
      },
      {
        "name": "invoiceDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "dueDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "customerPurchaseOrderReference",
        "schema": "string",
        "description": ""
      },
      {
        "name": "customerId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "contactId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "customerNumber",
        "schema": "string",
        "description": ""
      },
      {
        "name": "customerName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "billToName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "billToCustomerId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "billToCustomerNumber",
        "schema": "string",
        "description": ""
      },
      {
        "name": "shipToName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "shipToContact",
        "schema": "string",
        "description": ""
      },
      {
        "name": "sellingPostalAddress",
        "schema": "object",
        "description": ""
      },
      {
        "name": "billingPostalAddress",
        "schema": "object",
        "description": ""
      },
      {
        "name": "shippingPostalAddress",
        "schema": "object",
        "description": ""
      },
      {
        "name": "currencyId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "currencyCode",
        "schema": "string",
        "description": ""
      },
      {
        "name": "orderId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "orderNumber",
        "schema": "string",
        "description": ""
      },
      {
        "name": "paymentTermsId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "shipmentMethodId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "salesperson",
        "schema": "string",
        "description": ""
      },
      {
        "name": "pricesIncludeTax",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "remainingAmount",
        "schema": "number",
        "description": ""
      },
      {
        "name": "discountAmount",
        "schema": "number",
        "description": ""
      },
      {
        "name": "discountAppliedBeforeTax",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "totalAmountExcludingTax",
        "schema": "number",
        "description": ""
      },
      {
        "name": "totalTaxAmount",
        "schema": "number",
        "description": ""
      },
      {
        "name": "totalAmountIncludingTax",
        "schema": "number",
        "description": ""
      },
      {
        "name": "status",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lastModifiedDateTime",
        "schema": "string",
        "description": ""
      },
      {
        "name": "phoneNumber",
        "schema": "string",
        "description": ""
      },
      {
        "name": "email",
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
    "url": "/companies({company_id})/salesInvoices({salesInvoice_id})/Microsoft.NAV.cancelAndSend",
    "method": "cancelAndSendAction",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "salesInvoice",
    "typeScriptTag": "salesInvoice",
    "description": "Performs the cancelAndSend action for salesInvoices entity",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "(v1.0) Succesfully performed a cancelAndSend action on the Dynamic 365 Business Central salesInvoices entity"
      }
    ]
  },
  {
    "url": "/companies({company_id})/salesInvoices({salesInvoice_id})/Microsoft.NAV.cancel",
    "method": "cancelAction",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "salesInvoice",
    "typeScriptTag": "salesInvoice",
    "description": "Performs the cancel action for salesInvoices entity",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "(v1.0) Succesfully performed a cancel action on the Dynamic 365 Business Central salesInvoices entity"
      }
    ]
  },
  {
    "url": "/companies({company_id})/salesInvoices({salesInvoice_id})/Microsoft.NAV.makeCorrectiveCreditMemo",
    "method": "performMakeCorrectiveCreditMemo",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "salesInvoice",
    "typeScriptTag": "salesInvoice",
    "description": "Performs the makeCorrectiveCreditMemo action for salesInvoices entity",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "(v1.0) Succesfully performed a makeCorrectiveCreditMemo action on the Dynamic 365 Business Central salesInvoices entity"
      }
    ]
  },
  {
    "url": "/companies({company_id})/salesInvoices({salesInvoice_id})/Microsoft.NAV.postAndSend",
    "method": "postAndSendAction",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "salesInvoice",
    "typeScriptTag": "salesInvoice",
    "description": "Performs the postAndSend action for salesInvoices entity",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "(v1.0) Succesfully performed a postAndSend action on the Dynamic 365 Business Central salesInvoices entity"
      }
    ]
  },
  {
    "url": "/companies({company_id})/salesInvoices({salesInvoice_id})/Microsoft.NAV.post",
    "method": "postAction",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "salesInvoice",
    "typeScriptTag": "salesInvoice",
    "description": "Performs the post action for salesInvoices entity",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "(v1.0) Succesfully performed a post action on the Dynamic 365 Business Central salesInvoices entity"
      }
    ]
  },
  {
    "url": "/companies({company_id})/salesInvoices({salesInvoice_id})/Microsoft.NAV.send",
    "method": "sendAction",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "salesInvoice",
    "typeScriptTag": "salesInvoice",
    "description": "Performs the send action for salesInvoices entity",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "(v1.0) Succesfully performed a send action on the Dynamic 365 Business Central salesInvoices entity"
      }
    ]
  },
  {
    "url": "/companies({company_id})/salesInvoices({salesInvoice_id})/salesInvoiceLines",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "salesInvoiceLine",
    "typeScriptTag": "salesInvoiceLine",
    "description": "Returns a list of salesInvoiceLines",
    "parameters": [
      {
        "name": "$top",
        "schema": "integer",
        "required": false,
        "description": "(v1.0) Number of items to return from the top of the list"
      },
      {
        "name": "$skip",
        "schema": "integer",
        "required": false,
        "description": "(v1.0) Number of items to skip from the list"
      },
      {
        "name": "$limit",
        "schema": "integer",
        "required": false,
        "description": "(v1.0) Number of items to return from the list"
      },
      {
        "name": "$filter",
        "schema": "string",
        "required": false,
        "description": "(v1.0) Filtering expression"
      },
      {
        "name": "$expand",
        "schema": "array",
        "description": "(v1.0) Entities to expand"
      },
      {
        "name": "$select",
        "schema": "array",
        "description": "(v1.0) Selected properties to be retrieved"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/companies({company_id})/salesInvoices({salesInvoice_id})/salesInvoiceLines",
    "method": "createD365Object",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "salesInvoiceLine",
    "typeScriptTag": "salesInvoiceLine",
    "description": "Creates an object of type salesInvoiceLine in Dynamics 365 Business Central",
    "parameters": [
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "documentId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "sequence",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "itemId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "accountId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lineType",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lineDetails",
        "schema": "object",
        "description": ""
      },
      {
        "name": "unitOfMeasureId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "unitOfMeasure",
        "schema": "object",
        "description": ""
      },
      {
        "name": "unitPrice",
        "schema": "number",
        "description": ""
      },
      {
        "name": "quantity",
        "schema": "number",
        "description": ""
      },
      {
        "name": "discountAmount",
        "schema": "number",
        "description": ""
      },
      {
        "name": "discountPercent",
        "schema": "number",
        "description": ""
      },
      {
        "name": "discountAppliedBeforeTax",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "amountExcludingTax",
        "schema": "number",
        "description": ""
      },
      {
        "name": "taxCode",
        "schema": "string",
        "description": ""
      },
      {
        "name": "taxPercent",
        "schema": "number",
        "description": ""
      },
      {
        "name": "totalTaxAmount",
        "schema": "number",
        "description": ""
      },
      {
        "name": "amountIncludingTax",
        "schema": "number",
        "description": ""
      },
      {
        "name": "invoiceDiscountAllocation",
        "schema": "number",
        "description": ""
      },
      {
        "name": "netAmount",
        "schema": "number",
        "description": ""
      },
      {
        "name": "netTaxAmount",
        "schema": "number",
        "description": ""
      },
      {
        "name": "netAmountIncludingTax",
        "schema": "number",
        "description": ""
      },
      {
        "name": "shipmentDate",
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
    "url": "/companies({company_id})/salesInvoices({salesInvoice_id})/salesInvoiceLines('{salesInvoiceLine_id}')",
    "method": "delete",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "salesInvoiceLine",
    "typeScriptTag": "salesInvoiceLine",
    "description": "Deletes an object of type salesInvoiceLine in Dynamics 365 Business Central",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "(v1.0) Succesfully deleted the specified salesInvoiceLine"
      }
    ]
  },
  {
    "url": "/companies({company_id})/salesInvoices({salesInvoice_id})/salesInvoiceLines('{salesInvoiceLine_id}')",
    "method": "getProperties",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "salesInvoiceLine",
    "typeScriptTag": "salesInvoiceLine",
    "description": "Retrieve the properties and relationships of an object of type salesInvoiceLine for Dynamics 365 Business Central.",
    "parameters": [
      {
        "name": "$expand",
        "schema": "array",
        "description": "(v1.0) Entities to expand"
      },
      {
        "name": "$select",
        "schema": "array",
        "description": "(v1.0) Selected properties to be retrieved"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/companies({company_id})/salesInvoices({salesInvoice_id})/salesInvoiceLines('{salesInvoiceLine_id}')",
    "method": "updateObject",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "salesInvoiceLine",
    "typeScriptTag": "salesInvoiceLine",
    "description": "Updates an object of type salesInvoiceLine in Dynamics 365 Business Central",
    "parameters": [
      {
        "name": "ifMatch",
        "schema": "string",
        "required": true,
        "description": "(v1.0) Required. When this request header is included and the eTag provided does not match the current tag on the entity, this will not be updated.",
        "example": "IF-MATCH"
      },
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "documentId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "sequence",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "itemId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "accountId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lineType",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lineDetails",
        "schema": "object",
        "description": ""
      },
      {
        "name": "unitOfMeasureId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "unitOfMeasure",
        "schema": "object",
        "description": ""
      },
      {
        "name": "unitPrice",
        "schema": "number",
        "description": ""
      },
      {
        "name": "quantity",
        "schema": "number",
        "description": ""
      },
      {
        "name": "discountAmount",
        "schema": "number",
        "description": ""
      },
      {
        "name": "discountPercent",
        "schema": "number",
        "description": ""
      },
      {
        "name": "discountAppliedBeforeTax",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "amountExcludingTax",
        "schema": "number",
        "description": ""
      },
      {
        "name": "taxCode",
        "schema": "string",
        "description": ""
      },
      {
        "name": "taxPercent",
        "schema": "number",
        "description": ""
      },
      {
        "name": "totalTaxAmount",
        "schema": "number",
        "description": ""
      },
      {
        "name": "amountIncludingTax",
        "schema": "number",
        "description": ""
      },
      {
        "name": "invoiceDiscountAllocation",
        "schema": "number",
        "description": ""
      },
      {
        "name": "netAmount",
        "schema": "number",
        "description": ""
      },
      {
        "name": "netTaxAmount",
        "schema": "number",
        "description": ""
      },
      {
        "name": "netAmountIncludingTax",
        "schema": "number",
        "description": ""
      },
      {
        "name": "shipmentDate",
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
    "url": "/companies({company_id})/salesInvoices({salesInvoice_id})/pdfDocument",
    "method": "getPdf",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "pdfDocument",
    "typeScriptTag": "pdfDocument",
    "description": "Returns a list of pdfDocument",
    "parameters": [
      {
        "name": "$top",
        "schema": "integer",
        "required": false,
        "description": "(v1.0) Number of items to return from the top of the list"
      },
      {
        "name": "$skip",
        "schema": "integer",
        "required": false,
        "description": "(v1.0) Number of items to skip from the list"
      },
      {
        "name": "$limit",
        "schema": "integer",
        "required": false,
        "description": "(v1.0) Number of items to return from the list"
      },
      {
        "name": "$filter",
        "schema": "string",
        "required": false,
        "description": "(v1.0) Filtering expression"
      },
      {
        "name": "$select",
        "schema": "array",
        "description": "(v1.0) Selected properties to be retrieved"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/companies({company_id})/salesInvoices({salesInvoice_id})/pdfDocument({pdfDocument_id})",
    "method": "getProperties",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "pdfDocument",
    "typeScriptTag": "pdfDocument",
    "description": "Retrieve the properties and relationships of an object of type pdfDocument for Dynamics 365 Business Central.",
    "parameters": [
      {
        "name": "$select",
        "schema": "array",
        "description": "(v1.0) Selected properties to be retrieved"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/companies({company_id})/salesInvoiceLines",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "salesInvoiceLine",
    "typeScriptTag": "salesInvoiceLine",
    "description": "Returns a list of salesInvoiceLines",
    "parameters": [
      {
        "name": "$top",
        "schema": "integer",
        "required": false,
        "description": "(v1.0) Number of items to return from the top of the list"
      },
      {
        "name": "$skip",
        "schema": "integer",
        "required": false,
        "description": "(v1.0) Number of items to skip from the list"
      },
      {
        "name": "$limit",
        "schema": "integer",
        "required": false,
        "description": "(v1.0) Number of items to return from the list"
      },
      {
        "name": "$filter",
        "schema": "string",
        "required": false,
        "description": "(v1.0) Filtering expression"
      },
      {
        "name": "$expand",
        "schema": "array",
        "description": "(v1.0) Entities to expand"
      },
      {
        "name": "$select",
        "schema": "array",
        "description": "(v1.0) Selected properties to be retrieved"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/companies({company_id})/salesInvoiceLines",
    "method": "createDynamicsObject",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "salesInvoiceLine",
    "typeScriptTag": "salesInvoiceLine",
    "description": "Creates an object of type salesInvoiceLine in Dynamics 365 Business Central",
    "parameters": [
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "documentId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "sequence",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "itemId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "accountId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lineType",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lineDetails",
        "schema": "object",
        "description": ""
      },
      {
        "name": "unitOfMeasureId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "unitOfMeasure",
        "schema": "object",
        "description": ""
      },
      {
        "name": "unitPrice",
        "schema": "number",
        "description": ""
      },
      {
        "name": "quantity",
        "schema": "number",
        "description": ""
      },
      {
        "name": "discountAmount",
        "schema": "number",
        "description": ""
      },
      {
        "name": "discountPercent",
        "schema": "number",
        "description": ""
      },
      {
        "name": "discountAppliedBeforeTax",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "amountExcludingTax",
        "schema": "number",
        "description": ""
      },
      {
        "name": "taxCode",
        "schema": "string",
        "description": ""
      },
      {
        "name": "taxPercent",
        "schema": "number",
        "description": ""
      },
      {
        "name": "totalTaxAmount",
        "schema": "number",
        "description": ""
      },
      {
        "name": "amountIncludingTax",
        "schema": "number",
        "description": ""
      },
      {
        "name": "invoiceDiscountAllocation",
        "schema": "number",
        "description": ""
      },
      {
        "name": "netAmount",
        "schema": "number",
        "description": ""
      },
      {
        "name": "netTaxAmount",
        "schema": "number",
        "description": ""
      },
      {
        "name": "netAmountIncludingTax",
        "schema": "number",
        "description": ""
      },
      {
        "name": "shipmentDate",
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
    "url": "/companies({company_id})/salesInvoiceLines('{salesInvoiceLine_id}')",
    "method": "deleteObject",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "salesInvoiceLine",
    "typeScriptTag": "salesInvoiceLine",
    "description": "Deletes an object of type salesInvoiceLine in Dynamics 365 Business Central",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "(v1.0) Succesfully deleted the specified salesInvoiceLine"
      }
    ]
  },
  {
    "url": "/companies({company_id})/salesInvoiceLines('{salesInvoiceLine_id}')",
    "method": "getProperties",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "salesInvoiceLine",
    "typeScriptTag": "salesInvoiceLine",
    "description": "Retrieve the properties and relationships of an object of type salesInvoiceLine for Dynamics 365 Business Central.",
    "parameters": [
      {
        "name": "$expand",
        "schema": "array",
        "description": "(v1.0) Entities to expand"
      },
      {
        "name": "$select",
        "schema": "array",
        "description": "(v1.0) Selected properties to be retrieved"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/companies({company_id})/salesInvoiceLines('{salesInvoiceLine_id}')",
    "method": "updateObject",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "salesInvoiceLine",
    "typeScriptTag": "salesInvoiceLine",
    "description": "Updates an object of type salesInvoiceLine in Dynamics 365 Business Central",
    "parameters": [
      {
        "name": "ifMatch",
        "schema": "string",
        "required": true,
        "description": "(v1.0) Required. When this request header is included and the eTag provided does not match the current tag on the entity, this will not be updated.",
        "example": "IF-MATCH"
      },
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "documentId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "sequence",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "itemId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "accountId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lineType",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lineDetails",
        "schema": "object",
        "description": ""
      },
      {
        "name": "unitOfMeasureId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "unitOfMeasure",
        "schema": "object",
        "description": ""
      },
      {
        "name": "unitPrice",
        "schema": "number",
        "description": ""
      },
      {
        "name": "quantity",
        "schema": "number",
        "description": ""
      },
      {
        "name": "discountAmount",
        "schema": "number",
        "description": ""
      },
      {
        "name": "discountPercent",
        "schema": "number",
        "description": ""
      },
      {
        "name": "discountAppliedBeforeTax",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "amountExcludingTax",
        "schema": "number",
        "description": ""
      },
      {
        "name": "taxCode",
        "schema": "string",
        "description": ""
      },
      {
        "name": "taxPercent",
        "schema": "number",
        "description": ""
      },
      {
        "name": "totalTaxAmount",
        "schema": "number",
        "description": ""
      },
      {
        "name": "amountIncludingTax",
        "schema": "number",
        "description": ""
      },
      {
        "name": "invoiceDiscountAllocation",
        "schema": "number",
        "description": ""
      },
      {
        "name": "netAmount",
        "schema": "number",
        "description": ""
      },
      {
        "name": "netTaxAmount",
        "schema": "number",
        "description": ""
      },
      {
        "name": "netAmountIncludingTax",
        "schema": "number",
        "description": ""
      },
      {
        "name": "shipmentDate",
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
    "url": "/companies({company_id})/pdfDocument",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "pdfDocument",
    "typeScriptTag": "pdfDocument",
    "description": "Returns a list of pdfDocument",
    "parameters": [
      {
        "name": "$top",
        "schema": "integer",
        "required": false,
        "description": "(v1.0) Number of items to return from the top of the list"
      },
      {
        "name": "$skip",
        "schema": "integer",
        "required": false,
        "description": "(v1.0) Number of items to skip from the list"
      },
      {
        "name": "$limit",
        "schema": "integer",
        "required": false,
        "description": "(v1.0) Number of items to return from the list"
      },
      {
        "name": "$filter",
        "schema": "string",
        "required": false,
        "description": "(v1.0) Filtering expression"
      },
      {
        "name": "$select",
        "schema": "array",
        "description": "(v1.0) Selected properties to be retrieved"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/companies({company_id})/pdfDocument({pdfDocument_id})",
    "method": "getProperties",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "pdfDocument",
    "typeScriptTag": "pdfDocument",
    "description": "Retrieve the properties and relationships of an object of type pdfDocument for Dynamics 365 Business Central.",
    "parameters": [
      {
        "name": "$select",
        "schema": "array",
        "description": "(v1.0) Selected properties to be retrieved"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/companies({company_id})/customerPaymentJournals",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "customerPaymentJournal",
    "typeScriptTag": "customerPaymentJournal",
    "description": "Returns a list of customerPaymentJournals",
    "parameters": [
      {
        "name": "$top",
        "schema": "integer",
        "required": false,
        "description": "(v1.0) Number of items to return from the top of the list"
      },
      {
        "name": "$skip",
        "schema": "integer",
        "required": false,
        "description": "(v1.0) Number of items to skip from the list"
      },
      {
        "name": "$limit",
        "schema": "integer",
        "required": false,
        "description": "(v1.0) Number of items to return from the list"
      },
      {
        "name": "$filter",
        "schema": "string",
        "required": false,
        "description": "(v1.0) Filtering expression"
      },
      {
        "name": "$expand",
        "schema": "array",
        "description": "(v1.0) Entities to expand"
      },
      {
        "name": "$select",
        "schema": "array",
        "description": "(v1.0) Selected properties to be retrieved"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/companies({company_id})/customerPaymentJournals",
    "method": "createDynamicsObject",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "customerPaymentJournal",
    "typeScriptTag": "customerPaymentJournal",
    "description": "Creates an object of type customerPaymentJournal in Dynamics 365 Business Central",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "code",
        "schema": "string",
        "description": ""
      },
      {
        "name": "displayName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lastModifiedDateTime",
        "schema": "string",
        "description": ""
      },
      {
        "name": "balancingAccountId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "balancingAccountNumber",
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
    "url": "/companies({company_id})/customerPaymentJournals({customerPaymentJournal_id})",
    "method": "deleteObject",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "customerPaymentJournal",
    "typeScriptTag": "customerPaymentJournal",
    "description": "Deletes an object of type customerPaymentJournal in Dynamics 365 Business Central",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "(v1.0) Succesfully deleted the specified customerPaymentJournal"
      }
    ]
  },
  {
    "url": "/companies({company_id})/customerPaymentJournals({customerPaymentJournal_id})",
    "method": "getProperties",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "customerPaymentJournal",
    "typeScriptTag": "customerPaymentJournal",
    "description": "Retrieve the properties and relationships of an object of type customerPaymentJournal for Dynamics 365 Business Central.",
    "parameters": [
      {
        "name": "$expand",
        "schema": "array",
        "description": "(v1.0) Entities to expand"
      },
      {
        "name": "$select",
        "schema": "array",
        "description": "(v1.0) Selected properties to be retrieved"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/companies({company_id})/customerPaymentJournals({customerPaymentJournal_id})",
    "method": "updateObject",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "customerPaymentJournal",
    "typeScriptTag": "customerPaymentJournal",
    "description": "Updates an object of type customerPaymentJournal in Dynamics 365 Business Central",
    "parameters": [
      {
        "name": "ifMatch",
        "schema": "string",
        "required": true,
        "description": "(v1.0) Required. When this request header is included and the eTag provided does not match the current tag on the entity, this will not be updated.",
        "example": "IF-MATCH"
      },
      {
        "name": "id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "code",
        "schema": "string",
        "description": ""
      },
      {
        "name": "displayName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lastModifiedDateTime",
        "schema": "string",
        "description": ""
      },
      {
        "name": "balancingAccountId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "balancingAccountNumber",
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
    "url": "/companies({company_id})/customerPaymentJournals({customerPaymentJournal_id})/customerPayments",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "customerPayment",
    "typeScriptTag": "customerPayment",
    "description": "Returns a list of customerPayments",
    "parameters": [
      {
        "name": "$top",
        "schema": "integer",
        "required": false,
        "description": "(v1.0) Number of items to return from the top of the list"
      },
      {
        "name": "$skip",
        "schema": "integer",
        "required": false,
        "description": "(v1.0) Number of items to skip from the list"
      },
      {
        "name": "$limit",
        "schema": "integer",
        "required": false,
        "description": "(v1.0) Number of items to return from the list"
      },
      {
        "name": "$filter",
        "schema": "string",
        "required": false,
        "description": "(v1.0) Filtering expression"
      },
      {
        "name": "$expand",
        "schema": "array",
        "description": "(v1.0) Entities to expand"
      },
      {
        "name": "$select",
        "schema": "array",
        "description": "(v1.0) Selected properties to be retrieved"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/companies({company_id})/customerPaymentJournals({customerPaymentJournal_id})/customerPayments",
    "method": "createD365Object",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "customerPayment",
    "typeScriptTag": "customerPayment",
    "description": "Creates an object of type customerPayment in Dynamics 365 Business Central",
    "parameters": [
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "journalDisplayName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lineNumber",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "customerId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "customerNumber",
        "schema": "string",
        "description": ""
      },
      {
        "name": "contactId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "postingDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "documentNumber",
        "schema": "string",
        "description": ""
      },
      {
        "name": "externalDocumentNumber",
        "schema": "string",
        "description": ""
      },
      {
        "name": "amount",
        "schema": "number",
        "description": ""
      },
      {
        "name": "appliesToInvoiceId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "appliesToInvoiceNumber",
        "schema": "string",
        "description": ""
      },
      {
        "name": "comment",
        "schema": "string",
        "description": ""
      },
      {
        "name": "dimensions",
        "schema": "array",
        "description": ""
      },
      {
        "name": "lastModifiedDateTime",
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
    "url": "/companies({company_id})/customerPaymentJournals({customerPaymentJournal_id})/customerPayments({customerPayment_id})",
    "method": "deleteObject",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "customerPayment",
    "typeScriptTag": "customerPayment",
    "description": "Deletes an object of type customerPayment in Dynamics 365 Business Central",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "(v1.0) Succesfully deleted the specified customerPayment"
      }
    ]
  },
  {
    "url": "/companies({company_id})/customerPaymentJournals({customerPaymentJournal_id})/customerPayments({customerPayment_id})",
    "method": "getProperties",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "customerPayment",
    "typeScriptTag": "customerPayment",
    "description": "Retrieve the properties and relationships of an object of type customerPayment for Dynamics 365 Business Central.",
    "parameters": [
      {
        "name": "$expand",
        "schema": "array",
        "description": "(v1.0) Entities to expand"
      },
      {
        "name": "$select",
        "schema": "array",
        "description": "(v1.0) Selected properties to be retrieved"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/companies({company_id})/customerPaymentJournals({customerPaymentJournal_id})/customerPayments({customerPayment_id})",
    "method": "updateObject",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "customerPayment",
    "typeScriptTag": "customerPayment",
    "description": "Updates an object of type customerPayment in Dynamics 365 Business Central",
    "parameters": [
      {
        "name": "ifMatch",
        "schema": "string",
        "required": true,
        "description": "(v1.0) Required. When this request header is included and the eTag provided does not match the current tag on the entity, this will not be updated.",
        "example": "IF-MATCH"
      },
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "journalDisplayName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lineNumber",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "customerId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "customerNumber",
        "schema": "string",
        "description": ""
      },
      {
        "name": "contactId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "postingDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "documentNumber",
        "schema": "string",
        "description": ""
      },
      {
        "name": "externalDocumentNumber",
        "schema": "string",
        "description": ""
      },
      {
        "name": "amount",
        "schema": "number",
        "description": ""
      },
      {
        "name": "appliesToInvoiceId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "appliesToInvoiceNumber",
        "schema": "string",
        "description": ""
      },
      {
        "name": "comment",
        "schema": "string",
        "description": ""
      },
      {
        "name": "dimensions",
        "schema": "array",
        "description": ""
      },
      {
        "name": "lastModifiedDateTime",
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
    "url": "/companies({company_id})/customerPayments",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "customerPayment",
    "typeScriptTag": "customerPayment",
    "description": "Returns a list of customerPayments",
    "parameters": [
      {
        "name": "$top",
        "schema": "integer",
        "required": false,
        "description": "(v1.0) Number of items to return from the top of the list"
      },
      {
        "name": "$skip",
        "schema": "integer",
        "required": false,
        "description": "(v1.0) Number of items to skip from the list"
      },
      {
        "name": "$limit",
        "schema": "integer",
        "required": false,
        "description": "(v1.0) Number of items to return from the list"
      },
      {
        "name": "$filter",
        "schema": "string",
        "required": false,
        "description": "(v1.0) Filtering expression"
      },
      {
        "name": "$expand",
        "schema": "array",
        "description": "(v1.0) Entities to expand"
      },
      {
        "name": "$select",
        "schema": "array",
        "description": "(v1.0) Selected properties to be retrieved"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/companies({company_id})/customerPayments",
    "method": "createDynamicsObject",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "customerPayment",
    "typeScriptTag": "customerPayment",
    "description": "Creates an object of type customerPayment in Dynamics 365 Business Central",
    "parameters": [
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "journalDisplayName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lineNumber",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "customerId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "customerNumber",
        "schema": "string",
        "description": ""
      },
      {
        "name": "contactId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "postingDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "documentNumber",
        "schema": "string",
        "description": ""
      },
      {
        "name": "externalDocumentNumber",
        "schema": "string",
        "description": ""
      },
      {
        "name": "amount",
        "schema": "number",
        "description": ""
      },
      {
        "name": "appliesToInvoiceId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "appliesToInvoiceNumber",
        "schema": "string",
        "description": ""
      },
      {
        "name": "comment",
        "schema": "string",
        "description": ""
      },
      {
        "name": "dimensions",
        "schema": "array",
        "description": ""
      },
      {
        "name": "lastModifiedDateTime",
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
    "url": "/companies({company_id})/customerPayments({customerPayment_id})",
    "method": "deleteDynamicsObject",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "customerPayment",
    "typeScriptTag": "customerPayment",
    "description": "Deletes an object of type customerPayment in Dynamics 365 Business Central",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "(v1.0) Succesfully deleted the specified customerPayment"
      }
    ]
  },
  {
    "url": "/companies({company_id})/customerPayments({customerPayment_id})",
    "method": "getProperties",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "customerPayment",
    "typeScriptTag": "customerPayment",
    "description": "Retrieve the properties and relationships of an object of type customerPayment for Dynamics 365 Business Central.",
    "parameters": [
      {
        "name": "$expand",
        "schema": "array",
        "description": "(v1.0) Entities to expand"
      },
      {
        "name": "$select",
        "schema": "array",
        "description": "(v1.0) Selected properties to be retrieved"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/companies({company_id})/customerPayments({customerPayment_id})",
    "method": "updateDynamicsObject",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "customerPayment",
    "typeScriptTag": "customerPayment",
    "description": "Updates an object of type customerPayment in Dynamics 365 Business Central",
    "parameters": [
      {
        "name": "ifMatch",
        "schema": "string",
        "required": true,
        "description": "(v1.0) Required. When this request header is included and the eTag provided does not match the current tag on the entity, this will not be updated.",
        "example": "IF-MATCH"
      },
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "journalDisplayName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lineNumber",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "customerId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "customerNumber",
        "schema": "string",
        "description": ""
      },
      {
        "name": "contactId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "postingDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "documentNumber",
        "schema": "string",
        "description": ""
      },
      {
        "name": "externalDocumentNumber",
        "schema": "string",
        "description": ""
      },
      {
        "name": "amount",
        "schema": "number",
        "description": ""
      },
      {
        "name": "appliesToInvoiceId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "appliesToInvoiceNumber",
        "schema": "string",
        "description": ""
      },
      {
        "name": "comment",
        "schema": "string",
        "description": ""
      },
      {
        "name": "dimensions",
        "schema": "array",
        "description": ""
      },
      {
        "name": "lastModifiedDateTime",
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
    "url": "/companies({company_id})/accounts",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "account",
    "typeScriptTag": "account",
    "description": "Returns a list of accounts",
    "parameters": [
      {
        "name": "$top",
        "schema": "integer",
        "required": false,
        "description": "(v1.0) Number of items to return from the top of the list"
      },
      {
        "name": "$skip",
        "schema": "integer",
        "required": false,
        "description": "(v1.0) Number of items to skip from the list"
      },
      {
        "name": "$limit",
        "schema": "integer",
        "required": false,
        "description": "(v1.0) Number of items to return from the list"
      },
      {
        "name": "$filter",
        "schema": "string",
        "required": false,
        "description": "(v1.0) Filtering expression"
      },
      {
        "name": "$select",
        "schema": "array",
        "description": "(v1.0) Selected properties to be retrieved"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/companies({company_id})/accounts({account_id})",
    "method": "getProperties",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "account",
    "typeScriptTag": "account",
    "description": "Retrieve the properties and relationships of an object of type account for Dynamics 365 Business Central.",
    "parameters": [
      {
        "name": "$select",
        "schema": "array",
        "description": "(v1.0) Selected properties to be retrieved"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/companies({company_id})/taxGroups",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "taxGroup",
    "typeScriptTag": "taxGroup",
    "description": "Returns a list of taxGroups",
    "parameters": [
      {
        "name": "$top",
        "schema": "integer",
        "required": false,
        "description": "(v1.0) Number of items to return from the top of the list"
      },
      {
        "name": "$skip",
        "schema": "integer",
        "required": false,
        "description": "(v1.0) Number of items to skip from the list"
      },
      {
        "name": "$limit",
        "schema": "integer",
        "required": false,
        "description": "(v1.0) Number of items to return from the list"
      },
      {
        "name": "$filter",
        "schema": "string",
        "required": false,
        "description": "(v1.0) Filtering expression"
      },
      {
        "name": "$select",
        "schema": "array",
        "description": "(v1.0) Selected properties to be retrieved"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/companies({company_id})/taxGroups",
    "method": "createDynamicsObject",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "taxGroup",
    "typeScriptTag": "taxGroup",
    "description": "Creates an object of type taxGroup in Dynamics 365 Business Central",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "code",
        "schema": "string",
        "description": ""
      },
      {
        "name": "displayName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "taxType",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lastModifiedDateTime",
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
    "url": "/companies({company_id})/taxGroups({taxGroup_id})",
    "method": "deleteDynamicsObject",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "taxGroup",
    "typeScriptTag": "taxGroup",
    "description": "Deletes an object of type taxGroup in Dynamics 365 Business Central",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "(v1.0) Succesfully deleted the specified taxGroup"
      }
    ]
  },
  {
    "url": "/companies({company_id})/taxGroups({taxGroup_id})",
    "method": "getProperties",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "taxGroup",
    "typeScriptTag": "taxGroup",
    "description": "Retrieve the properties and relationships of an object of type taxGroup for Dynamics 365 Business Central.",
    "parameters": [
      {
        "name": "$select",
        "schema": "array",
        "description": "(v1.0) Selected properties to be retrieved"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/companies({company_id})/taxGroups({taxGroup_id})",
    "method": "updateDynamicsObject",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "taxGroup",
    "typeScriptTag": "taxGroup",
    "description": "Updates an object of type taxGroup in Dynamics 365 Business Central",
    "parameters": [
      {
        "name": "ifMatch",
        "schema": "string",
        "required": true,
        "description": "(v1.0) Required. When this request header is included and the eTag provided does not match the current tag on the entity, this will not be updated.",
        "example": "IF-MATCH"
      },
      {
        "name": "id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "code",
        "schema": "string",
        "description": ""
      },
      {
        "name": "displayName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "taxType",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lastModifiedDateTime",
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
    "url": "/companies({company_id})/journals",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "journal",
    "typeScriptTag": "journal",
    "description": "Returns a list of journals",
    "parameters": [
      {
        "name": "$top",
        "schema": "integer",
        "required": false,
        "description": "(v1.0) Number of items to return from the top of the list"
      },
      {
        "name": "$skip",
        "schema": "integer",
        "required": false,
        "description": "(v1.0) Number of items to skip from the list"
      },
      {
        "name": "$limit",
        "schema": "integer",
        "required": false,
        "description": "(v1.0) Number of items to return from the list"
      },
      {
        "name": "$filter",
        "schema": "string",
        "required": false,
        "description": "(v1.0) Filtering expression"
      },
      {
        "name": "$expand",
        "schema": "array",
        "description": "(v1.0) Entities to expand"
      },
      {
        "name": "$select",
        "schema": "array",
        "description": "(v1.0) Selected properties to be retrieved"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/companies({company_id})/journals",
    "method": "createDynamicsObject",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "journal",
    "typeScriptTag": "journal",
    "description": "Creates an object of type journal in Dynamics 365 Business Central",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "code",
        "schema": "string",
        "description": ""
      },
      {
        "name": "displayName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lastModifiedDateTime",
        "schema": "string",
        "description": ""
      },
      {
        "name": "balancingAccountId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "balancingAccountNumber",
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
    "url": "/companies({company_id})/journals({journal_id})",
    "method": "deleteDynamicsObject",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "journal",
    "typeScriptTag": "journal",
    "description": "Deletes an object of type journal in Dynamics 365 Business Central",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "(v1.0) Succesfully deleted the specified journal"
      }
    ]
  },
  {
    "url": "/companies({company_id})/journals({journal_id})",
    "method": "getProperties",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "journal",
    "typeScriptTag": "journal",
    "description": "Retrieve the properties and relationships of an object of type journal for Dynamics 365 Business Central.",
    "parameters": [
      {
        "name": "$expand",
        "schema": "array",
        "description": "(v1.0) Entities to expand"
      },
      {
        "name": "$select",
        "schema": "array",
        "description": "(v1.0) Selected properties to be retrieved"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/companies({company_id})/journals({journal_id})",
    "method": "updateDynamicsObject",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "journal",
    "typeScriptTag": "journal",
    "description": "Updates an object of type journal in Dynamics 365 Business Central",
    "parameters": [
      {
        "name": "ifMatch",
        "schema": "string",
        "required": true,
        "description": "(v1.0) Required. When this request header is included and the eTag provided does not match the current tag on the entity, this will not be updated.",
        "example": "IF-MATCH"
      },
      {
        "name": "id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "code",
        "schema": "string",
        "description": ""
      },
      {
        "name": "displayName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lastModifiedDateTime",
        "schema": "string",
        "description": ""
      },
      {
        "name": "balancingAccountId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "balancingAccountNumber",
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
    "url": "/companies({company_id})/journals({journal_id})/Microsoft.NAV.post",
    "method": "postAction",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "journal",
    "typeScriptTag": "journal",
    "description": "Performs the post action for journals entity",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "(v1.0) Succesfully performed a post action on the Dynamic 365 Business Central journals entity"
      }
    ]
  },
  {
    "url": "/companies({company_id})/journals({journal_id})/journalLines",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "journalLine",
    "typeScriptTag": "journalLine",
    "description": "Returns a list of journalLines",
    "parameters": [
      {
        "name": "$top",
        "schema": "integer",
        "required": false,
        "description": "(v1.0) Number of items to return from the top of the list"
      },
      {
        "name": "$skip",
        "schema": "integer",
        "required": false,
        "description": "(v1.0) Number of items to skip from the list"
      },
      {
        "name": "$limit",
        "schema": "integer",
        "required": false,
        "description": "(v1.0) Number of items to return from the list"
      },
      {
        "name": "$filter",
        "schema": "string",
        "required": false,
        "description": "(v1.0) Filtering expression"
      },
      {
        "name": "$expand",
        "schema": "array",
        "description": "(v1.0) Entities to expand"
      },
      {
        "name": "$select",
        "schema": "array",
        "description": "(v1.0) Selected properties to be retrieved"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/companies({company_id})/journals({journal_id})/journalLines",
    "method": "createD365Object",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "journalLine",
    "typeScriptTag": "journalLine",
    "description": "Creates an object of type journalLine in Dynamics 365 Business Central",
    "parameters": [
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "journalDisplayName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lineNumber",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "accountType",
        "schema": "string",
        "description": ""
      },
      {
        "name": "accountId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "accountNumber",
        "schema": "string",
        "description": ""
      },
      {
        "name": "postingDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "documentNumber",
        "schema": "string",
        "description": ""
      },
      {
        "name": "externalDocumentNumber",
        "schema": "string",
        "description": ""
      },
      {
        "name": "amount",
        "schema": "number",
        "description": ""
      },
      {
        "name": "comment",
        "schema": "string",
        "description": ""
      },
      {
        "name": "dimensions",
        "schema": "array",
        "description": ""
      },
      {
        "name": "lastModifiedDateTime",
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
    "url": "/companies({company_id})/journals({journal_id})/journalLines({journalLine_id})",
    "method": "deleteObject",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "journalLine",
    "typeScriptTag": "journalLine",
    "description": "Deletes an object of type journalLine in Dynamics 365 Business Central",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "(v1.0) Succesfully deleted the specified journalLine"
      }
    ]
  },
  {
    "url": "/companies({company_id})/journals({journal_id})/journalLines({journalLine_id})",
    "method": "getProperties",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "journalLine",
    "typeScriptTag": "journalLine",
    "description": "Retrieve the properties and relationships of an object of type journalLine for Dynamics 365 Business Central.",
    "parameters": [
      {
        "name": "$expand",
        "schema": "array",
        "description": "(v1.0) Entities to expand"
      },
      {
        "name": "$select",
        "schema": "array",
        "description": "(v1.0) Selected properties to be retrieved"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/companies({company_id})/journals({journal_id})/journalLines({journalLine_id})",
    "method": "updateObject",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "journalLine",
    "typeScriptTag": "journalLine",
    "description": "Updates an object of type journalLine in Dynamics 365 Business Central",
    "parameters": [
      {
        "name": "ifMatch",
        "schema": "string",
        "required": true,
        "description": "(v1.0) Required. When this request header is included and the eTag provided does not match the current tag on the entity, this will not be updated.",
        "example": "IF-MATCH"
      },
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "journalDisplayName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lineNumber",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "accountType",
        "schema": "string",
        "description": ""
      },
      {
        "name": "accountId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "accountNumber",
        "schema": "string",
        "description": ""
      },
      {
        "name": "postingDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "documentNumber",
        "schema": "string",
        "description": ""
      },
      {
        "name": "externalDocumentNumber",
        "schema": "string",
        "description": ""
      },
      {
        "name": "amount",
        "schema": "number",
        "description": ""
      },
      {
        "name": "comment",
        "schema": "string",
        "description": ""
      },
      {
        "name": "dimensions",
        "schema": "array",
        "description": ""
      },
      {
        "name": "lastModifiedDateTime",
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
    "url": "/companies({company_id})/journals({journal_id})/journalLines({journalLine_id})/attachments",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "attachments",
    "typeScriptTag": "attachments",
    "description": "Returns a list of attachments",
    "parameters": [
      {
        "name": "$top",
        "schema": "integer",
        "required": false,
        "description": "(v1.0) Number of items to return from the top of the list"
      },
      {
        "name": "$skip",
        "schema": "integer",
        "required": false,
        "description": "(v1.0) Number of items to skip from the list"
      },
      {
        "name": "$limit",
        "schema": "integer",
        "required": false,
        "description": "(v1.0) Number of items to return from the list"
      },
      {
        "name": "$filter",
        "schema": "string",
        "required": false,
        "description": "(v1.0) Filtering expression"
      },
      {
        "name": "$select",
        "schema": "array",
        "description": "(v1.0) Selected properties to be retrieved"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/companies({company_id})/journals({journal_id})/journalLines({journalLine_id})/attachments",
    "method": "createD365Object",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "attachments",
    "typeScriptTag": "attachments",
    "description": "Creates an object of type attachments in Dynamics 365 Business Central",
    "parameters": [
      {
        "name": "parentId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "fileName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "byteSize",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "content",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lastModifiedDateTime",
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
    "url": "/companies({company_id})/journals({journal_id})/journalLines({journalLine_id})/attachments({attachments_parentId},{attachments_id})",
    "method": "deleteObject",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "attachments",
    "typeScriptTag": "attachments",
    "description": "Deletes an object of type attachments in Dynamics 365 Business Central",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "(v1.0) Succesfully deleted the specified attachments"
      }
    ]
  },
  {
    "url": "/companies({company_id})/journals({journal_id})/journalLines({journalLine_id})/attachments({attachments_parentId},{attachments_id})",
    "method": "getProperties",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "attachments",
    "typeScriptTag": "attachments",
    "description": "Retrieve the properties and relationships of an object of type attachments for Dynamics 365 Business Central.",
    "parameters": [
      {
        "name": "$select",
        "schema": "array",
        "description": "(v1.0) Selected properties to be retrieved"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/companies({company_id})/journals({journal_id})/journalLines({journalLine_id})/attachments({attachments_parentId},{attachments_id})",
    "method": "updateD365Object",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "attachments",
    "typeScriptTag": "attachments",
    "description": "Updates an object of type attachments in Dynamics 365 Business Central",
    "parameters": [
      {
        "name": "ifMatch",
        "schema": "string",
        "required": true,
        "description": "(v1.0) Required. When this request header is included and the eTag provided does not match the current tag on the entity, this will not be updated.",
        "example": "IF-MATCH"
      },
      {
        "name": "parentId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "fileName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "byteSize",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "content",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lastModifiedDateTime",
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
    "url": "/companies({company_id})/journalLines",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "journalLine",
    "typeScriptTag": "journalLine",
    "description": "Returns a list of journalLines",
    "parameters": [
      {
        "name": "$top",
        "schema": "integer",
        "required": false,
        "description": "(v1.0) Number of items to return from the top of the list"
      },
      {
        "name": "$skip",
        "schema": "integer",
        "required": false,
        "description": "(v1.0) Number of items to skip from the list"
      },
      {
        "name": "$limit",
        "schema": "integer",
        "required": false,
        "description": "(v1.0) Number of items to return from the list"
      },
      {
        "name": "$filter",
        "schema": "string",
        "required": false,
        "description": "(v1.0) Filtering expression"
      },
      {
        "name": "$expand",
        "schema": "array",
        "description": "(v1.0) Entities to expand"
      },
      {
        "name": "$select",
        "schema": "array",
        "description": "(v1.0) Selected properties to be retrieved"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/companies({company_id})/journalLines",
    "method": "createD365Object",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "journalLine",
    "typeScriptTag": "journalLine",
    "description": "Creates an object of type journalLine in Dynamics 365 Business Central",
    "parameters": [
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "journalDisplayName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lineNumber",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "accountType",
        "schema": "string",
        "description": ""
      },
      {
        "name": "accountId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "accountNumber",
        "schema": "string",
        "description": ""
      },
      {
        "name": "postingDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "documentNumber",
        "schema": "string",
        "description": ""
      },
      {
        "name": "externalDocumentNumber",
        "schema": "string",
        "description": ""
      },
      {
        "name": "amount",
        "schema": "number",
        "description": ""
      },
      {
        "name": "comment",
        "schema": "string",
        "description": ""
      },
      {
        "name": "dimensions",
        "schema": "array",
        "description": ""
      },
      {
        "name": "lastModifiedDateTime",
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
    "url": "/companies({company_id})/journalLines({journalLine_id})",
    "method": "deleteDynamicsObject",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "journalLine",
    "typeScriptTag": "journalLine",
    "description": "Deletes an object of type journalLine in Dynamics 365 Business Central",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "(v1.0) Succesfully deleted the specified journalLine"
      }
    ]
  },
  {
    "url": "/companies({company_id})/journalLines({journalLine_id})",
    "method": "getProperties",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "journalLine",
    "typeScriptTag": "journalLine",
    "description": "Retrieve the properties and relationships of an object of type journalLine for Dynamics 365 Business Central.",
    "parameters": [
      {
        "name": "$expand",
        "schema": "array",
        "description": "(v1.0) Entities to expand"
      },
      {
        "name": "$select",
        "schema": "array",
        "description": "(v1.0) Selected properties to be retrieved"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/companies({company_id})/journalLines({journalLine_id})",
    "method": "updateDynamicsObject",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "journalLine",
    "typeScriptTag": "journalLine",
    "description": "Updates an object of type journalLine in Dynamics 365 Business Central",
    "parameters": [
      {
        "name": "ifMatch",
        "schema": "string",
        "required": true,
        "description": "(v1.0) Required. When this request header is included and the eTag provided does not match the current tag on the entity, this will not be updated.",
        "example": "IF-MATCH"
      },
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "journalDisplayName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lineNumber",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "accountType",
        "schema": "string",
        "description": ""
      },
      {
        "name": "accountId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "accountNumber",
        "schema": "string",
        "description": ""
      },
      {
        "name": "postingDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "documentNumber",
        "schema": "string",
        "description": ""
      },
      {
        "name": "externalDocumentNumber",
        "schema": "string",
        "description": ""
      },
      {
        "name": "amount",
        "schema": "number",
        "description": ""
      },
      {
        "name": "comment",
        "schema": "string",
        "description": ""
      },
      {
        "name": "dimensions",
        "schema": "array",
        "description": ""
      },
      {
        "name": "lastModifiedDateTime",
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
    "url": "/companies({company_id})/journalLines({journalLine_id})/attachments",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "attachments",
    "typeScriptTag": "attachments",
    "description": "Returns a list of attachments",
    "parameters": [
      {
        "name": "$top",
        "schema": "integer",
        "required": false,
        "description": "(v1.0) Number of items to return from the top of the list"
      },
      {
        "name": "$skip",
        "schema": "integer",
        "required": false,
        "description": "(v1.0) Number of items to skip from the list"
      },
      {
        "name": "$limit",
        "schema": "integer",
        "required": false,
        "description": "(v1.0) Number of items to return from the list"
      },
      {
        "name": "$filter",
        "schema": "string",
        "required": false,
        "description": "(v1.0) Filtering expression"
      },
      {
        "name": "$select",
        "schema": "array",
        "description": "(v1.0) Selected properties to be retrieved"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/companies({company_id})/journalLines({journalLine_id})/attachments",
    "method": "createDynamicsObject",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "attachments",
    "typeScriptTag": "attachments",
    "description": "Creates an object of type attachments in Dynamics 365 Business Central",
    "parameters": [
      {
        "name": "parentId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "fileName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "byteSize",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "content",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lastModifiedDateTime",
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
    "url": "/companies({company_id})/journalLines({journalLine_id})/attachments({attachments_parentId},{attachments_id})",
    "method": "deleteObject",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "attachments",
    "typeScriptTag": "attachments",
    "description": "Deletes an object of type attachments in Dynamics 365 Business Central",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "(v1.0) Succesfully deleted the specified attachments"
      }
    ]
  },
  {
    "url": "/companies({company_id})/journalLines({journalLine_id})/attachments({attachments_parentId},{attachments_id})",
    "method": "getProperties",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "attachments",
    "typeScriptTag": "attachments",
    "description": "Retrieve the properties and relationships of an object of type attachments for Dynamics 365 Business Central.",
    "parameters": [
      {
        "name": "$select",
        "schema": "array",
        "description": "(v1.0) Selected properties to be retrieved"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/companies({company_id})/journalLines({journalLine_id})/attachments({attachments_parentId},{attachments_id})",
    "method": "updateDynamicsObject",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "attachments",
    "typeScriptTag": "attachments",
    "description": "Updates an object of type attachments in Dynamics 365 Business Central",
    "parameters": [
      {
        "name": "ifMatch",
        "schema": "string",
        "required": true,
        "description": "(v1.0) Required. When this request header is included and the eTag provided does not match the current tag on the entity, this will not be updated.",
        "example": "IF-MATCH"
      },
      {
        "name": "parentId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "fileName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "byteSize",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "content",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lastModifiedDateTime",
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
    "url": "/companies({company_id})/attachments",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "attachments",
    "typeScriptTag": "attachments",
    "description": "Returns a list of attachments",
    "parameters": [
      {
        "name": "$top",
        "schema": "integer",
        "required": false,
        "description": "(v1.0) Number of items to return from the top of the list"
      },
      {
        "name": "$skip",
        "schema": "integer",
        "required": false,
        "description": "(v1.0) Number of items to skip from the list"
      },
      {
        "name": "$limit",
        "schema": "integer",
        "required": false,
        "description": "(v1.0) Number of items to return from the list"
      },
      {
        "name": "$filter",
        "schema": "string",
        "required": false,
        "description": "(v1.0) Filtering expression"
      },
      {
        "name": "$select",
        "schema": "array",
        "description": "(v1.0) Selected properties to be retrieved"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/companies({company_id})/attachments",
    "method": "createDynamicsObject",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "attachments",
    "typeScriptTag": "attachments",
    "description": "Creates an object of type attachments in Dynamics 365 Business Central",
    "parameters": [
      {
        "name": "parentId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "fileName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "byteSize",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "content",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lastModifiedDateTime",
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
    "url": "/companies({company_id})/attachments({attachments_parentId},{attachments_id})",
    "method": "deleteDynamicsObject",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "attachments",
    "typeScriptTag": "attachments",
    "description": "Deletes an object of type attachments in Dynamics 365 Business Central",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "(v1.0) Succesfully deleted the specified attachments"
      }
    ]
  },
  {
    "url": "/companies({company_id})/attachments({attachments_parentId},{attachments_id})",
    "method": "getProperties",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "attachments",
    "typeScriptTag": "attachments",
    "description": "Retrieve the properties and relationships of an object of type attachments for Dynamics 365 Business Central.",
    "parameters": [
      {
        "name": "$select",
        "schema": "array",
        "description": "(v1.0) Selected properties to be retrieved"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/companies({company_id})/attachments({attachments_parentId},{attachments_id})",
    "method": "updateDynamicsObject",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "attachments",
    "typeScriptTag": "attachments",
    "description": "Updates an object of type attachments in Dynamics 365 Business Central",
    "parameters": [
      {
        "name": "ifMatch",
        "schema": "string",
        "required": true,
        "description": "(v1.0) Required. When this request header is included and the eTag provided does not match the current tag on the entity, this will not be updated.",
        "example": "IF-MATCH"
      },
      {
        "name": "parentId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "fileName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "byteSize",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "content",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lastModifiedDateTime",
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
    "url": "/companies({company_id})/employees",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "employee",
    "typeScriptTag": "employee",
    "description": "Returns a list of employees",
    "parameters": [
      {
        "name": "$top",
        "schema": "integer",
        "required": false,
        "description": "(v1.0) Number of items to return from the top of the list"
      },
      {
        "name": "$skip",
        "schema": "integer",
        "required": false,
        "description": "(v1.0) Number of items to skip from the list"
      },
      {
        "name": "$limit",
        "schema": "integer",
        "required": false,
        "description": "(v1.0) Number of items to return from the list"
      },
      {
        "name": "$filter",
        "schema": "string",
        "required": false,
        "description": "(v1.0) Filtering expression"
      },
      {
        "name": "$expand",
        "schema": "array",
        "description": "(v1.0) Entities to expand"
      },
      {
        "name": "$select",
        "schema": "array",
        "description": "(v1.0) Selected properties to be retrieved"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/companies({company_id})/employees",
    "method": "createDynamicsObject",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "employee",
    "typeScriptTag": "employee",
    "description": "Creates an object of type employee in Dynamics 365 Business Central",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "number",
        "schema": "string",
        "description": ""
      },
      {
        "name": "displayName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "givenName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "middleName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "surname",
        "schema": "string",
        "description": ""
      },
      {
        "name": "jobTitle",
        "schema": "string",
        "description": ""
      },
      {
        "name": "address",
        "schema": "object",
        "description": ""
      },
      {
        "name": "phoneNumber",
        "schema": "string",
        "description": ""
      },
      {
        "name": "mobilePhone",
        "schema": "string",
        "description": ""
      },
      {
        "name": "email",
        "schema": "string",
        "description": ""
      },
      {
        "name": "personalEmail",
        "schema": "string",
        "description": ""
      },
      {
        "name": "employmentDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "terminationDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "status",
        "schema": "string",
        "description": ""
      },
      {
        "name": "birthDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "statisticsGroupCode",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lastModifiedDateTime",
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
    "url": "/companies({company_id})/employees({employee_id})",
    "method": "deleteD365Object",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "employee",
    "typeScriptTag": "employee",
    "description": "Deletes an object of type employee in Dynamics 365 Business Central",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "(v1.0) Succesfully deleted the specified employee"
      }
    ]
  },
  {
    "url": "/companies({company_id})/employees({employee_id})",
    "method": "getProperties",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "employee",
    "typeScriptTag": "employee",
    "description": "Retrieve the properties and relationships of an object of type employee for Dynamics 365 Business Central.",
    "parameters": [
      {
        "name": "$expand",
        "schema": "array",
        "description": "(v1.0) Entities to expand"
      },
      {
        "name": "$select",
        "schema": "array",
        "description": "(v1.0) Selected properties to be retrieved"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/companies({company_id})/employees({employee_id})",
    "method": "updateDynamicsObject",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "employee",
    "typeScriptTag": "employee",
    "description": "Updates an object of type employee in Dynamics 365 Business Central",
    "parameters": [
      {
        "name": "ifMatch",
        "schema": "string",
        "required": true,
        "description": "(v1.0) Required. When this request header is included and the eTag provided does not match the current tag on the entity, this will not be updated.",
        "example": "IF-MATCH"
      },
      {
        "name": "id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "number",
        "schema": "string",
        "description": ""
      },
      {
        "name": "displayName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "givenName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "middleName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "surname",
        "schema": "string",
        "description": ""
      },
      {
        "name": "jobTitle",
        "schema": "string",
        "description": ""
      },
      {
        "name": "address",
        "schema": "object",
        "description": ""
      },
      {
        "name": "phoneNumber",
        "schema": "string",
        "description": ""
      },
      {
        "name": "mobilePhone",
        "schema": "string",
        "description": ""
      },
      {
        "name": "email",
        "schema": "string",
        "description": ""
      },
      {
        "name": "personalEmail",
        "schema": "string",
        "description": ""
      },
      {
        "name": "employmentDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "terminationDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "status",
        "schema": "string",
        "description": ""
      },
      {
        "name": "birthDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "statisticsGroupCode",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lastModifiedDateTime",
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
    "url": "/companies({company_id})/employees({employee_id})/picture",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "picture",
    "typeScriptTag": "picture",
    "description": "Returns a list of picture",
    "parameters": [
      {
        "name": "$top",
        "schema": "integer",
        "required": false,
        "description": "(v1.0) Number of items to return from the top of the list"
      },
      {
        "name": "$skip",
        "schema": "integer",
        "required": false,
        "description": "(v1.0) Number of items to skip from the list"
      },
      {
        "name": "$limit",
        "schema": "integer",
        "required": false,
        "description": "(v1.0) Number of items to return from the list"
      },
      {
        "name": "$filter",
        "schema": "string",
        "required": false,
        "description": "(v1.0) Filtering expression"
      },
      {
        "name": "$select",
        "schema": "array",
        "description": "(v1.0) Selected properties to be retrieved"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/companies({company_id})/employees({employee_id})/picture({picture_id})",
    "method": "deleteObjectById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "picture",
    "typeScriptTag": "picture",
    "description": "Deletes an object of type picture in Dynamics 365 Business Central",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "(v1.0) Succesfully deleted the specified picture"
      }
    ]
  },
  {
    "url": "/companies({company_id})/employees({employee_id})/picture({picture_id})",
    "method": "getProperties",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "picture",
    "typeScriptTag": "picture",
    "description": "Retrieve the properties and relationships of an object of type picture for Dynamics 365 Business Central.",
    "parameters": [
      {
        "name": "$select",
        "schema": "array",
        "description": "(v1.0) Selected properties to be retrieved"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/companies({company_id})/employees({employee_id})/picture({picture_id})",
    "method": "updateDynamicsObject",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "picture",
    "typeScriptTag": "picture",
    "description": "Updates an object of type picture in Dynamics 365 Business Central",
    "parameters": [
      {
        "name": "ifMatch",
        "schema": "string",
        "required": true,
        "description": "(v1.0) Required. When this request header is included and the eTag provided does not match the current tag on the entity, this will not be updated.",
        "example": "IF-MATCH"
      },
      {
        "name": "id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "width",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "height",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "contentType",
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
      }
    ]
  },
  {
    "url": "/companies({company_id})/employees({employee_id})/defaultDimensions",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "defaultDimensions",
    "typeScriptTag": "defaultDimensions",
    "description": "Returns a list of defaultDimensions",
    "parameters": [
      {
        "name": "$top",
        "schema": "integer",
        "required": false,
        "description": "(v1.0) Number of items to return from the top of the list"
      },
      {
        "name": "$skip",
        "schema": "integer",
        "required": false,
        "description": "(v1.0) Number of items to skip from the list"
      },
      {
        "name": "$limit",
        "schema": "integer",
        "required": false,
        "description": "(v1.0) Number of items to return from the list"
      },
      {
        "name": "$filter",
        "schema": "string",
        "required": false,
        "description": "(v1.0) Filtering expression"
      },
      {
        "name": "$expand",
        "schema": "array",
        "description": "(v1.0) Entities to expand"
      },
      {
        "name": "$select",
        "schema": "array",
        "description": "(v1.0) Selected properties to be retrieved"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/companies({company_id})/employees({employee_id})/defaultDimensions",
    "method": "createDynamicsObject",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "defaultDimensions",
    "typeScriptTag": "defaultDimensions",
    "description": "Creates an object of type defaultDimensions in Dynamics 365 Business Central",
    "parameters": [
      {
        "name": "parentId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "dimensionId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "dimensionCode",
        "schema": "string",
        "description": ""
      },
      {
        "name": "dimensionValueId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "dimensionValueCode",
        "schema": "string",
        "description": ""
      },
      {
        "name": "postingValidation",
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
    "url": "/companies({company_id})/employees({employee_id})/defaultDimensions({defaultDimensions_parentId},{defaultDimensions_dimensionId})",
    "method": "deleteD365Object",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "defaultDimensions",
    "typeScriptTag": "defaultDimensions",
    "description": "Deletes an object of type defaultDimensions in Dynamics 365 Business Central",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "(v1.0) Succesfully deleted the specified defaultDimensions"
      }
    ]
  },
  {
    "url": "/companies({company_id})/employees({employee_id})/defaultDimensions({defaultDimensions_parentId},{defaultDimensions_dimensionId})",
    "method": "getProperties",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "defaultDimensions",
    "typeScriptTag": "defaultDimensions",
    "description": "Retrieve the properties and relationships of an object of type defaultDimensions for Dynamics 365 Business Central.",
    "parameters": [
      {
        "name": "$expand",
        "schema": "array",
        "description": "(v1.0) Entities to expand"
      },
      {
        "name": "$select",
        "schema": "array",
        "description": "(v1.0) Selected properties to be retrieved"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/companies({company_id})/employees({employee_id})/defaultDimensions({defaultDimensions_parentId},{defaultDimensions_dimensionId})",
    "method": "updateObject",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "defaultDimensions",
    "typeScriptTag": "defaultDimensions",
    "description": "Updates an object of type defaultDimensions in Dynamics 365 Business Central",
    "parameters": [
      {
        "name": "ifMatch",
        "schema": "string",
        "required": true,
        "description": "(v1.0) Required. When this request header is included and the eTag provided does not match the current tag on the entity, this will not be updated.",
        "example": "IF-MATCH"
      },
      {
        "name": "parentId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "dimensionId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "dimensionCode",
        "schema": "string",
        "description": ""
      },
      {
        "name": "dimensionValueId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "dimensionValueCode",
        "schema": "string",
        "description": ""
      },
      {
        "name": "postingValidation",
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
    "url": "/companies({company_id})/employees({employee_id})/timeRegistrationEntries",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "timeRegistrationEntry",
    "typeScriptTag": "timeRegistrationEntry",
    "description": "Returns a list of timeRegistrationEntries",
    "parameters": [
      {
        "name": "$top",
        "schema": "integer",
        "required": false,
        "description": "(v1.0) Number of items to return from the top of the list"
      },
      {
        "name": "$skip",
        "schema": "integer",
        "required": false,
        "description": "(v1.0) Number of items to skip from the list"
      },
      {
        "name": "$limit",
        "schema": "integer",
        "required": false,
        "description": "(v1.0) Number of items to return from the list"
      },
      {
        "name": "$filter",
        "schema": "string",
        "required": false,
        "description": "(v1.0) Filtering expression"
      },
      {
        "name": "$expand",
        "schema": "array",
        "description": "(v1.0) Entities to expand"
      },
      {
        "name": "$select",
        "schema": "array",
        "description": "(v1.0) Selected properties to be retrieved"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/companies({company_id})/employees({employee_id})/timeRegistrationEntries",
    "method": "createDynamicsObject",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "timeRegistrationEntry",
    "typeScriptTag": "timeRegistrationEntry",
    "description": "Creates an object of type timeRegistrationEntry in Dynamics 365 Business Central",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "employeeId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "employeeNumber",
        "schema": "string",
        "description": ""
      },
      {
        "name": "jobId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "jobNumber",
        "schema": "string",
        "description": ""
      },
      {
        "name": "absence",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lineNumber",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "date",
        "schema": "string",
        "description": ""
      },
      {
        "name": "quantity",
        "schema": "number",
        "description": ""
      },
      {
        "name": "status",
        "schema": "string",
        "description": ""
      },
      {
        "name": "unitOfMeasureId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "unitOfMeasure",
        "schema": "object",
        "description": ""
      },
      {
        "name": "dimensions",
        "schema": "array",
        "description": ""
      },
      {
        "name": "lastModfiedDateTime",
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
    "url": "/companies({company_id})/employees({employee_id})/timeRegistrationEntries({timeRegistrationEntry_id})",
    "method": "deleteD365Object",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "timeRegistrationEntry",
    "typeScriptTag": "timeRegistrationEntry",
    "description": "Deletes an object of type timeRegistrationEntry in Dynamics 365 Business Central",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "(v1.0) Succesfully deleted the specified timeRegistrationEntry"
      }
    ]
  },
  {
    "url": "/companies({company_id})/employees({employee_id})/timeRegistrationEntries({timeRegistrationEntry_id})",
    "method": "getProperties",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "timeRegistrationEntry",
    "typeScriptTag": "timeRegistrationEntry",
    "description": "Retrieve the properties and relationships of an object of type timeRegistrationEntry for Dynamics 365 Business Central.",
    "parameters": [
      {
        "name": "$expand",
        "schema": "array",
        "description": "(v1.0) Entities to expand"
      },
      {
        "name": "$select",
        "schema": "array",
        "description": "(v1.0) Selected properties to be retrieved"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/companies({company_id})/employees({employee_id})/timeRegistrationEntries({timeRegistrationEntry_id})",
    "method": "updateDynamicsObject",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "timeRegistrationEntry",
    "typeScriptTag": "timeRegistrationEntry",
    "description": "Updates an object of type timeRegistrationEntry in Dynamics 365 Business Central",
    "parameters": [
      {
        "name": "ifMatch",
        "schema": "string",
        "required": true,
        "description": "(v1.0) Required. When this request header is included and the eTag provided does not match the current tag on the entity, this will not be updated.",
        "example": "IF-MATCH"
      },
      {
        "name": "id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "employeeId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "employeeNumber",
        "schema": "string",
        "description": ""
      },
      {
        "name": "jobId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "jobNumber",
        "schema": "string",
        "description": ""
      },
      {
        "name": "absence",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lineNumber",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "date",
        "schema": "string",
        "description": ""
      },
      {
        "name": "quantity",
        "schema": "number",
        "description": ""
      },
      {
        "name": "status",
        "schema": "string",
        "description": ""
      },
      {
        "name": "unitOfMeasureId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "unitOfMeasure",
        "schema": "object",
        "description": ""
      },
      {
        "name": "dimensions",
        "schema": "array",
        "description": ""
      },
      {
        "name": "lastModfiedDateTime",
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
    "url": "/companies({company_id})/timeRegistrationEntries",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "timeRegistrationEntry",
    "typeScriptTag": "timeRegistrationEntry",
    "description": "Returns a list of timeRegistrationEntries",
    "parameters": [
      {
        "name": "$top",
        "schema": "integer",
        "required": false,
        "description": "(v1.0) Number of items to return from the top of the list"
      },
      {
        "name": "$skip",
        "schema": "integer",
        "required": false,
        "description": "(v1.0) Number of items to skip from the list"
      },
      {
        "name": "$limit",
        "schema": "integer",
        "required": false,
        "description": "(v1.0) Number of items to return from the list"
      },
      {
        "name": "$filter",
        "schema": "string",
        "required": false,
        "description": "(v1.0) Filtering expression"
      },
      {
        "name": "$expand",
        "schema": "array",
        "description": "(v1.0) Entities to expand"
      },
      {
        "name": "$select",
        "schema": "array",
        "description": "(v1.0) Selected properties to be retrieved"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/companies({company_id})/timeRegistrationEntries",
    "method": "createDynamicsObject",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "timeRegistrationEntry",
    "typeScriptTag": "timeRegistrationEntry",
    "description": "Creates an object of type timeRegistrationEntry in Dynamics 365 Business Central",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "employeeId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "employeeNumber",
        "schema": "string",
        "description": ""
      },
      {
        "name": "jobId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "jobNumber",
        "schema": "string",
        "description": ""
      },
      {
        "name": "absence",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lineNumber",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "date",
        "schema": "string",
        "description": ""
      },
      {
        "name": "quantity",
        "schema": "number",
        "description": ""
      },
      {
        "name": "status",
        "schema": "string",
        "description": ""
      },
      {
        "name": "unitOfMeasureId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "unitOfMeasure",
        "schema": "object",
        "description": ""
      },
      {
        "name": "dimensions",
        "schema": "array",
        "description": ""
      },
      {
        "name": "lastModfiedDateTime",
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
    "url": "/companies({company_id})/timeRegistrationEntries({timeRegistrationEntry_id})",
    "method": "deleteObject",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "timeRegistrationEntry",
    "typeScriptTag": "timeRegistrationEntry",
    "description": "Deletes an object of type timeRegistrationEntry in Dynamics 365 Business Central",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "(v1.0) Succesfully deleted the specified timeRegistrationEntry"
      }
    ]
  },
  {
    "url": "/companies({company_id})/timeRegistrationEntries({timeRegistrationEntry_id})",
    "method": "getProperties",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "timeRegistrationEntry",
    "typeScriptTag": "timeRegistrationEntry",
    "description": "Retrieve the properties and relationships of an object of type timeRegistrationEntry for Dynamics 365 Business Central.",
    "parameters": [
      {
        "name": "$expand",
        "schema": "array",
        "description": "(v1.0) Entities to expand"
      },
      {
        "name": "$select",
        "schema": "array",
        "description": "(v1.0) Selected properties to be retrieved"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/companies({company_id})/timeRegistrationEntries({timeRegistrationEntry_id})",
    "method": "updateObject",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "timeRegistrationEntry",
    "typeScriptTag": "timeRegistrationEntry",
    "description": "Updates an object of type timeRegistrationEntry in Dynamics 365 Business Central",
    "parameters": [
      {
        "name": "ifMatch",
        "schema": "string",
        "required": true,
        "description": "(v1.0) Required. When this request header is included and the eTag provided does not match the current tag on the entity, this will not be updated.",
        "example": "IF-MATCH"
      },
      {
        "name": "id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "employeeId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "employeeNumber",
        "schema": "string",
        "description": ""
      },
      {
        "name": "jobId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "jobNumber",
        "schema": "string",
        "description": ""
      },
      {
        "name": "absence",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lineNumber",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "date",
        "schema": "string",
        "description": ""
      },
      {
        "name": "quantity",
        "schema": "number",
        "description": ""
      },
      {
        "name": "status",
        "schema": "string",
        "description": ""
      },
      {
        "name": "unitOfMeasureId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "unitOfMeasure",
        "schema": "object",
        "description": ""
      },
      {
        "name": "dimensions",
        "schema": "array",
        "description": ""
      },
      {
        "name": "lastModfiedDateTime",
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
    "url": "/companies({company_id})/generalLedgerEntries",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "generalLedgerEntry",
    "typeScriptTag": "generalLedgerEntry",
    "description": "Returns a list of generalLedgerEntries",
    "parameters": [
      {
        "name": "$top",
        "schema": "integer",
        "required": false,
        "description": "(v1.0) Number of items to return from the top of the list"
      },
      {
        "name": "$skip",
        "schema": "integer",
        "required": false,
        "description": "(v1.0) Number of items to skip from the list"
      },
      {
        "name": "$limit",
        "schema": "integer",
        "required": false,
        "description": "(v1.0) Number of items to return from the list"
      },
      {
        "name": "$filter",
        "schema": "string",
        "required": false,
        "description": "(v1.0) Filtering expression"
      },
      {
        "name": "$expand",
        "schema": "array",
        "description": "(v1.0) Entities to expand"
      },
      {
        "name": "$select",
        "schema": "array",
        "description": "(v1.0) Selected properties to be retrieved"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/companies({company_id})/generalLedgerEntries({generalLedgerEntry_id})",
    "method": "getProperties",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "generalLedgerEntry",
    "typeScriptTag": "generalLedgerEntry",
    "description": "Retrieve the properties and relationships of an object of type generalLedgerEntry for Dynamics 365 Business Central.",
    "parameters": [
      {
        "name": "$expand",
        "schema": "array",
        "description": "(v1.0) Entities to expand"
      },
      {
        "name": "$select",
        "schema": "array",
        "description": "(v1.0) Selected properties to be retrieved"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/companies({company_id})/currencies",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "currency",
    "typeScriptTag": "currency",
    "description": "Returns a list of currencies",
    "parameters": [
      {
        "name": "$top",
        "schema": "integer",
        "required": false,
        "description": "(v1.0) Number of items to return from the top of the list"
      },
      {
        "name": "$skip",
        "schema": "integer",
        "required": false,
        "description": "(v1.0) Number of items to skip from the list"
      },
      {
        "name": "$limit",
        "schema": "integer",
        "required": false,
        "description": "(v1.0) Number of items to return from the list"
      },
      {
        "name": "$filter",
        "schema": "string",
        "required": false,
        "description": "(v1.0) Filtering expression"
      },
      {
        "name": "$select",
        "schema": "array",
        "description": "(v1.0) Selected properties to be retrieved"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/companies({company_id})/currencies",
    "method": "createDynamicsObject",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "currency",
    "typeScriptTag": "currency",
    "description": "Creates an object of type currency in Dynamics 365 Business Central",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "code",
        "schema": "string",
        "description": ""
      },
      {
        "name": "displayName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "symbol",
        "schema": "string",
        "description": ""
      },
      {
        "name": "amountDecimalPlaces",
        "schema": "string",
        "description": ""
      },
      {
        "name": "amountRoundingPrecision",
        "schema": "number",
        "description": ""
      },
      {
        "name": "lastModifiedDateTime",
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
    "url": "/companies({company_id})/currencies({currency_id})",
    "method": "deleteDynamicsObject",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "currency",
    "typeScriptTag": "currency",
    "description": "Deletes an object of type currency in Dynamics 365 Business Central",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "(v1.0) Succesfully deleted the specified currency"
      }
    ]
  },
  {
    "url": "/companies({company_id})/currencies({currency_id})",
    "method": "getProperties",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "currency",
    "typeScriptTag": "currency",
    "description": "Retrieve the properties and relationships of an object of type currency for Dynamics 365 Business Central.",
    "parameters": [
      {
        "name": "$select",
        "schema": "array",
        "description": "(v1.0) Selected properties to be retrieved"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/companies({company_id})/currencies({currency_id})",
    "method": "updateDynamicsObject",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "currency",
    "typeScriptTag": "currency",
    "description": "Updates an object of type currency in Dynamics 365 Business Central",
    "parameters": [
      {
        "name": "ifMatch",
        "schema": "string",
        "required": true,
        "description": "(v1.0) Required. When this request header is included and the eTag provided does not match the current tag on the entity, this will not be updated.",
        "example": "IF-MATCH"
      },
      {
        "name": "id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "code",
        "schema": "string",
        "description": ""
      },
      {
        "name": "displayName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "symbol",
        "schema": "string",
        "description": ""
      },
      {
        "name": "amountDecimalPlaces",
        "schema": "string",
        "description": ""
      },
      {
        "name": "amountRoundingPrecision",
        "schema": "number",
        "description": ""
      },
      {
        "name": "lastModifiedDateTime",
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
    "url": "/companies({company_id})/paymentMethods",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "paymentMethod",
    "typeScriptTag": "paymentMethod",
    "description": "Returns a list of paymentMethods",
    "parameters": [
      {
        "name": "$top",
        "schema": "integer",
        "required": false,
        "description": "(v1.0) Number of items to return from the top of the list"
      },
      {
        "name": "$skip",
        "schema": "integer",
        "required": false,
        "description": "(v1.0) Number of items to skip from the list"
      },
      {
        "name": "$limit",
        "schema": "integer",
        "required": false,
        "description": "(v1.0) Number of items to return from the list"
      },
      {
        "name": "$filter",
        "schema": "string",
        "required": false,
        "description": "(v1.0) Filtering expression"
      },
      {
        "name": "$select",
        "schema": "array",
        "description": "(v1.0) Selected properties to be retrieved"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/companies({company_id})/paymentMethods",
    "method": "createD365Object",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "paymentMethod",
    "typeScriptTag": "paymentMethod",
    "description": "Creates an object of type paymentMethod in Dynamics 365 Business Central",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "code",
        "schema": "string",
        "description": ""
      },
      {
        "name": "displayName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lastModifiedDateTime",
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
    "url": "/companies({company_id})/paymentMethods({paymentMethod_id})",
    "method": "deleteDynamicsObject",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "paymentMethod",
    "typeScriptTag": "paymentMethod",
    "description": "Deletes an object of type paymentMethod in Dynamics 365 Business Central",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "(v1.0) Succesfully deleted the specified paymentMethod"
      }
    ]
  },
  {
    "url": "/companies({company_id})/paymentMethods({paymentMethod_id})",
    "method": "getProperties",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "paymentMethod",
    "typeScriptTag": "paymentMethod",
    "description": "Retrieve the properties and relationships of an object of type paymentMethod for Dynamics 365 Business Central.",
    "parameters": [
      {
        "name": "$select",
        "schema": "array",
        "description": "(v1.0) Selected properties to be retrieved"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/companies({company_id})/paymentMethods({paymentMethod_id})",
    "method": "updateDynamicsObject",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "paymentMethod",
    "typeScriptTag": "paymentMethod",
    "description": "Updates an object of type paymentMethod in Dynamics 365 Business Central",
    "parameters": [
      {
        "name": "ifMatch",
        "schema": "string",
        "required": true,
        "description": "(v1.0) Required. When this request header is included and the eTag provided does not match the current tag on the entity, this will not be updated.",
        "example": "IF-MATCH"
      },
      {
        "name": "id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "code",
        "schema": "string",
        "description": ""
      },
      {
        "name": "displayName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lastModifiedDateTime",
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
    "url": "/companies({company_id})/dimensions",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "dimension",
    "typeScriptTag": "dimension",
    "description": "Returns a list of dimensions",
    "parameters": [
      {
        "name": "$top",
        "schema": "integer",
        "required": false,
        "description": "(v1.0) Number of items to return from the top of the list"
      },
      {
        "name": "$skip",
        "schema": "integer",
        "required": false,
        "description": "(v1.0) Number of items to skip from the list"
      },
      {
        "name": "$limit",
        "schema": "integer",
        "required": false,
        "description": "(v1.0) Number of items to return from the list"
      },
      {
        "name": "$filter",
        "schema": "string",
        "required": false,
        "description": "(v1.0) Filtering expression"
      },
      {
        "name": "$expand",
        "schema": "array",
        "description": "(v1.0) Entities to expand"
      },
      {
        "name": "$select",
        "schema": "array",
        "description": "(v1.0) Selected properties to be retrieved"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/companies({company_id})/dimensions({dimension_id})",
    "method": "getProperties",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "dimension",
    "typeScriptTag": "dimension",
    "description": "Retrieve the properties and relationships of an object of type dimension for Dynamics 365 Business Central.",
    "parameters": [
      {
        "name": "$expand",
        "schema": "array",
        "description": "(v1.0) Entities to expand"
      },
      {
        "name": "$select",
        "schema": "array",
        "description": "(v1.0) Selected properties to be retrieved"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/companies({company_id})/dimensions({dimension_id})/dimensionValues",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "dimensionValue",
    "typeScriptTag": "dimensionValue",
    "description": "Returns a list of dimensionValues",
    "parameters": [
      {
        "name": "$top",
        "schema": "integer",
        "required": false,
        "description": "(v1.0) Number of items to return from the top of the list"
      },
      {
        "name": "$skip",
        "schema": "integer",
        "required": false,
        "description": "(v1.0) Number of items to skip from the list"
      },
      {
        "name": "$limit",
        "schema": "integer",
        "required": false,
        "description": "(v1.0) Number of items to return from the list"
      },
      {
        "name": "$filter",
        "schema": "string",
        "required": false,
        "description": "(v1.0) Filtering expression"
      },
      {
        "name": "$select",
        "schema": "array",
        "description": "(v1.0) Selected properties to be retrieved"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/companies({company_id})/dimensions({dimension_id})/dimensionValues({dimensionValue_id})",
    "method": "getProperties",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "dimensionValue",
    "typeScriptTag": "dimensionValue",
    "description": "Retrieve the properties and relationships of an object of type dimensionValue for Dynamics 365 Business Central.",
    "parameters": [
      {
        "name": "$select",
        "schema": "array",
        "description": "(v1.0) Selected properties to be retrieved"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/companies({company_id})/dimensionValues",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "dimensionValue",
    "typeScriptTag": "dimensionValue",
    "description": "Returns a list of dimensionValues",
    "parameters": [
      {
        "name": "$top",
        "schema": "integer",
        "required": false,
        "description": "(v1.0) Number of items to return from the top of the list"
      },
      {
        "name": "$skip",
        "schema": "integer",
        "required": false,
        "description": "(v1.0) Number of items to skip from the list"
      },
      {
        "name": "$limit",
        "schema": "integer",
        "required": false,
        "description": "(v1.0) Number of items to return from the list"
      },
      {
        "name": "$filter",
        "schema": "string",
        "required": false,
        "description": "(v1.0) Filtering expression"
      },
      {
        "name": "$select",
        "schema": "array",
        "description": "(v1.0) Selected properties to be retrieved"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/companies({company_id})/dimensionValues({dimensionValue_id})",
    "method": "getProperties",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "dimensionValue",
    "typeScriptTag": "dimensionValue",
    "description": "Retrieve the properties and relationships of an object of type dimensionValue for Dynamics 365 Business Central.",
    "parameters": [
      {
        "name": "$select",
        "schema": "array",
        "description": "(v1.0) Selected properties to be retrieved"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/companies({company_id})/dimensionLines",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "dimensionLine",
    "typeScriptTag": "dimensionLine",
    "description": "Returns a list of dimensionLines",
    "parameters": [
      {
        "name": "$top",
        "schema": "integer",
        "required": false,
        "description": "(v1.0) Number of items to return from the top of the list"
      },
      {
        "name": "$skip",
        "schema": "integer",
        "required": false,
        "description": "(v1.0) Number of items to skip from the list"
      },
      {
        "name": "$limit",
        "schema": "integer",
        "required": false,
        "description": "(v1.0) Number of items to return from the list"
      },
      {
        "name": "$filter",
        "schema": "string",
        "required": false,
        "description": "(v1.0) Filtering expression"
      },
      {
        "name": "$expand",
        "schema": "array",
        "description": "(v1.0) Entities to expand"
      },
      {
        "name": "$select",
        "schema": "array",
        "description": "(v1.0) Selected properties to be retrieved"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/companies({company_id})/dimensionLines",
    "method": "createD365Object",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "dimensionLine",
    "typeScriptTag": "dimensionLine",
    "description": "Creates an object of type dimensionLine in Dynamics 365 Business Central",
    "parameters": [
      {
        "name": "parentId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "code",
        "schema": "string",
        "description": ""
      },
      {
        "name": "displayName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "valueId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "valueCode",
        "schema": "string",
        "description": ""
      },
      {
        "name": "valueDisplayName",
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
    "url": "/companies({company_id})/dimensionLines({dimensionLine_parentId},{dimensionLine_id})",
    "method": "deleteObject",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "dimensionLine",
    "typeScriptTag": "dimensionLine",
    "description": "Deletes an object of type dimensionLine in Dynamics 365 Business Central",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "(v1.0) Succesfully deleted the specified dimensionLine"
      }
    ]
  },
  {
    "url": "/companies({company_id})/dimensionLines({dimensionLine_parentId},{dimensionLine_id})",
    "method": "getProperties",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "dimensionLine",
    "typeScriptTag": "dimensionLine",
    "description": "Retrieve the properties and relationships of an object of type dimensionLine for Dynamics 365 Business Central.",
    "parameters": [
      {
        "name": "$expand",
        "schema": "array",
        "description": "(v1.0) Entities to expand"
      },
      {
        "name": "$select",
        "schema": "array",
        "description": "(v1.0) Selected properties to be retrieved"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/companies({company_id})/dimensionLines({dimensionLine_parentId},{dimensionLine_id})",
    "method": "updateObject",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "dimensionLine",
    "typeScriptTag": "dimensionLine",
    "description": "Updates an object of type dimensionLine in Dynamics 365 Business Central",
    "parameters": [
      {
        "name": "ifMatch",
        "schema": "string",
        "required": true,
        "description": "(v1.0) Required. When this request header is included and the eTag provided does not match the current tag on the entity, this will not be updated.",
        "example": "IF-MATCH"
      },
      {
        "name": "parentId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "code",
        "schema": "string",
        "description": ""
      },
      {
        "name": "displayName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "valueId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "valueCode",
        "schema": "string",
        "description": ""
      },
      {
        "name": "valueDisplayName",
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
    "url": "/companies({company_id})/paymentTerms",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "paymentTerm",
    "typeScriptTag": "paymentTerm",
    "description": "Returns a list of paymentTerms",
    "parameters": [
      {
        "name": "$top",
        "schema": "integer",
        "required": false,
        "description": "(v1.0) Number of items to return from the top of the list"
      },
      {
        "name": "$skip",
        "schema": "integer",
        "required": false,
        "description": "(v1.0) Number of items to skip from the list"
      },
      {
        "name": "$limit",
        "schema": "integer",
        "required": false,
        "description": "(v1.0) Number of items to return from the list"
      },
      {
        "name": "$filter",
        "schema": "string",
        "required": false,
        "description": "(v1.0) Filtering expression"
      },
      {
        "name": "$select",
        "schema": "array",
        "description": "(v1.0) Selected properties to be retrieved"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/companies({company_id})/paymentTerms",
    "method": "createDynamicsObject",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "paymentTerm",
    "typeScriptTag": "paymentTerm",
    "description": "Creates an object of type paymentTerm in Dynamics 365 Business Central",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "code",
        "schema": "string",
        "description": ""
      },
      {
        "name": "displayName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "dueDateCalculation",
        "schema": "string",
        "description": ""
      },
      {
        "name": "discountDateCalculation",
        "schema": "string",
        "description": ""
      },
      {
        "name": "discountPercent",
        "schema": "number",
        "description": ""
      },
      {
        "name": "calculateDiscountOnCreditMemos",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "lastModifiedDateTime",
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
    "url": "/companies({company_id})/paymentTerms({paymentTerm_id})",
    "method": "deleteDynamicsObject",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "paymentTerm",
    "typeScriptTag": "paymentTerm",
    "description": "Deletes an object of type paymentTerm in Dynamics 365 Business Central",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "(v1.0) Succesfully deleted the specified paymentTerm"
      }
    ]
  },
  {
    "url": "/companies({company_id})/paymentTerms({paymentTerm_id})",
    "method": "getProperties",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "paymentTerm",
    "typeScriptTag": "paymentTerm",
    "description": "Retrieve the properties and relationships of an object of type paymentTerm for Dynamics 365 Business Central.",
    "parameters": [
      {
        "name": "$select",
        "schema": "array",
        "description": "(v1.0) Selected properties to be retrieved"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/companies({company_id})/paymentTerms({paymentTerm_id})",
    "method": "updateDynamicsObject",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "paymentTerm",
    "typeScriptTag": "paymentTerm",
    "description": "Updates an object of type paymentTerm in Dynamics 365 Business Central",
    "parameters": [
      {
        "name": "ifMatch",
        "schema": "string",
        "required": true,
        "description": "(v1.0) Required. When this request header is included and the eTag provided does not match the current tag on the entity, this will not be updated.",
        "example": "IF-MATCH"
      },
      {
        "name": "id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "code",
        "schema": "string",
        "description": ""
      },
      {
        "name": "displayName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "dueDateCalculation",
        "schema": "string",
        "description": ""
      },
      {
        "name": "discountDateCalculation",
        "schema": "string",
        "description": ""
      },
      {
        "name": "discountPercent",
        "schema": "number",
        "description": ""
      },
      {
        "name": "calculateDiscountOnCreditMemos",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "lastModifiedDateTime",
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
    "url": "/companies({company_id})/shipmentMethods",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "shipmentMethod",
    "typeScriptTag": "shipmentMethod",
    "description": "Returns a list of shipmentMethods",
    "parameters": [
      {
        "name": "$top",
        "schema": "integer",
        "required": false,
        "description": "(v1.0) Number of items to return from the top of the list"
      },
      {
        "name": "$skip",
        "schema": "integer",
        "required": false,
        "description": "(v1.0) Number of items to skip from the list"
      },
      {
        "name": "$limit",
        "schema": "integer",
        "required": false,
        "description": "(v1.0) Number of items to return from the list"
      },
      {
        "name": "$filter",
        "schema": "string",
        "required": false,
        "description": "(v1.0) Filtering expression"
      },
      {
        "name": "$select",
        "schema": "array",
        "description": "(v1.0) Selected properties to be retrieved"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/companies({company_id})/shipmentMethods",
    "method": "createDynamicsObject",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "shipmentMethod",
    "typeScriptTag": "shipmentMethod",
    "description": "Creates an object of type shipmentMethod in Dynamics 365 Business Central",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "code",
        "schema": "string",
        "description": ""
      },
      {
        "name": "displayName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lastModifiedDateTime",
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
    "url": "/companies({company_id})/shipmentMethods({shipmentMethod_id})",
    "method": "deleteById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "shipmentMethod",
    "typeScriptTag": "shipmentMethod",
    "description": "Deletes an object of type shipmentMethod in Dynamics 365 Business Central",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "(v1.0) Succesfully deleted the specified shipmentMethod"
      }
    ]
  },
  {
    "url": "/companies({company_id})/shipmentMethods({shipmentMethod_id})",
    "method": "getProperties",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "shipmentMethod",
    "typeScriptTag": "shipmentMethod",
    "description": "Retrieve the properties and relationships of an object of type shipmentMethod for Dynamics 365 Business Central.",
    "parameters": [
      {
        "name": "$select",
        "schema": "array",
        "description": "(v1.0) Selected properties to be retrieved"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/companies({company_id})/shipmentMethods({shipmentMethod_id})",
    "method": "updateDynamicsObject",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "shipmentMethod",
    "typeScriptTag": "shipmentMethod",
    "description": "Updates an object of type shipmentMethod in Dynamics 365 Business Central",
    "parameters": [
      {
        "name": "ifMatch",
        "schema": "string",
        "required": true,
        "description": "(v1.0) Required. When this request header is included and the eTag provided does not match the current tag on the entity, this will not be updated.",
        "example": "IF-MATCH"
      },
      {
        "name": "id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "code",
        "schema": "string",
        "description": ""
      },
      {
        "name": "displayName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lastModifiedDateTime",
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
    "url": "/companies({company_id})/itemCategories",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "itemCategory",
    "typeScriptTag": "itemCategory",
    "description": "Returns a list of itemCategories",
    "parameters": [
      {
        "name": "$top",
        "schema": "integer",
        "required": false,
        "description": "(v1.0) Number of items to return from the top of the list"
      },
      {
        "name": "$skip",
        "schema": "integer",
        "required": false,
        "description": "(v1.0) Number of items to skip from the list"
      },
      {
        "name": "$limit",
        "schema": "integer",
        "required": false,
        "description": "(v1.0) Number of items to return from the list"
      },
      {
        "name": "$filter",
        "schema": "string",
        "required": false,
        "description": "(v1.0) Filtering expression"
      },
      {
        "name": "$select",
        "schema": "array",
        "description": "(v1.0) Selected properties to be retrieved"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/companies({company_id})/itemCategories",
    "method": "createD365Object",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "itemCategory",
    "typeScriptTag": "itemCategory",
    "description": "Creates an object of type itemCategory in Dynamics 365 Business Central",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "code",
        "schema": "string",
        "description": ""
      },
      {
        "name": "displayName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lastModifiedDateTime",
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
    "url": "/companies({company_id})/itemCategories({itemCategory_id})",
    "method": "deleteDynamicsObject",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "itemCategory",
    "typeScriptTag": "itemCategory",
    "description": "Deletes an object of type itemCategory in Dynamics 365 Business Central",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "(v1.0) Succesfully deleted the specified itemCategory"
      }
    ]
  },
  {
    "url": "/companies({company_id})/itemCategories({itemCategory_id})",
    "method": "getProperties",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "itemCategory",
    "typeScriptTag": "itemCategory",
    "description": "Retrieve the properties and relationships of an object of type itemCategory for Dynamics 365 Business Central.",
    "parameters": [
      {
        "name": "$select",
        "schema": "array",
        "description": "(v1.0) Selected properties to be retrieved"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/companies({company_id})/itemCategories({itemCategory_id})",
    "method": "updateDynamicsObject",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "itemCategory",
    "typeScriptTag": "itemCategory",
    "description": "Updates an object of type itemCategory in Dynamics 365 Business Central",
    "parameters": [
      {
        "name": "ifMatch",
        "schema": "string",
        "required": true,
        "description": "(v1.0) Required. When this request header is included and the eTag provided does not match the current tag on the entity, this will not be updated.",
        "example": "IF-MATCH"
      },
      {
        "name": "id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "code",
        "schema": "string",
        "description": ""
      },
      {
        "name": "displayName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lastModifiedDateTime",
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
    "url": "/companies({company_id})/cashFlowStatement",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "cashFlowStatement",
    "typeScriptTag": "cashFlowStatement",
    "description": "Returns a list of cashFlowStatement",
    "parameters": [
      {
        "name": "$top",
        "schema": "integer",
        "required": false,
        "description": "(v1.0) Number of items to return from the top of the list"
      },
      {
        "name": "$skip",
        "schema": "integer",
        "required": false,
        "description": "(v1.0) Number of items to skip from the list"
      },
      {
        "name": "$limit",
        "schema": "integer",
        "required": false,
        "description": "(v1.0) Number of items to return from the list"
      },
      {
        "name": "$filter",
        "schema": "string",
        "required": false,
        "description": "(v1.0) Filtering expression"
      },
      {
        "name": "$select",
        "schema": "array",
        "description": "(v1.0) Selected properties to be retrieved"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/companies({company_id})/cashFlowStatement({cashFlowStatement_lineNumber})",
    "method": "getProperties",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "cashFlowStatement",
    "typeScriptTag": "cashFlowStatement",
    "description": "Retrieve the properties and relationships of an object of type cashFlowStatement for Dynamics 365 Business Central.",
    "parameters": [
      {
        "name": "$select",
        "schema": "array",
        "description": "(v1.0) Selected properties to be retrieved"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/companies({company_id})/countriesRegions",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "countryRegion",
    "typeScriptTag": "countryRegion",
    "description": "Returns a list of countriesRegions",
    "parameters": [
      {
        "name": "$top",
        "schema": "integer",
        "required": false,
        "description": "(v1.0) Number of items to return from the top of the list"
      },
      {
        "name": "$skip",
        "schema": "integer",
        "required": false,
        "description": "(v1.0) Number of items to skip from the list"
      },
      {
        "name": "$limit",
        "schema": "integer",
        "required": false,
        "description": "(v1.0) Number of items to return from the list"
      },
      {
        "name": "$filter",
        "schema": "string",
        "required": false,
        "description": "(v1.0) Filtering expression"
      },
      {
        "name": "$select",
        "schema": "array",
        "description": "(v1.0) Selected properties to be retrieved"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/companies({company_id})/countriesRegions",
    "method": "createDynamicsObject",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "countryRegion",
    "typeScriptTag": "countryRegion",
    "description": "Creates an object of type countryRegion in Dynamics 365 Business Central",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "code",
        "schema": "string",
        "description": ""
      },
      {
        "name": "displayName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "addressFormat",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lastModifiedDateTime",
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
    "url": "/companies({company_id})/countriesRegions({countryRegion_id})",
    "method": "deleteDynamicsObject",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "countryRegion",
    "typeScriptTag": "countryRegion",
    "description": "Deletes an object of type countryRegion in Dynamics 365 Business Central",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "(v1.0) Succesfully deleted the specified countryRegion"
      }
    ]
  },
  {
    "url": "/companies({company_id})/countriesRegions({countryRegion_id})",
    "method": "getProperties",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "countryRegion",
    "typeScriptTag": "countryRegion",
    "description": "Retrieve the properties and relationships of an object of type countryRegion for Dynamics 365 Business Central.",
    "parameters": [
      {
        "name": "$select",
        "schema": "array",
        "description": "(v1.0) Selected properties to be retrieved"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/companies({company_id})/countriesRegions({countryRegion_id})",
    "method": "updateDynamicsObject",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "countryRegion",
    "typeScriptTag": "countryRegion",
    "description": "Updates an object of type countryRegion in Dynamics 365 Business Central",
    "parameters": [
      {
        "name": "ifMatch",
        "schema": "string",
        "required": true,
        "description": "(v1.0) Required. When this request header is included and the eTag provided does not match the current tag on the entity, this will not be updated.",
        "example": "IF-MATCH"
      },
      {
        "name": "id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "code",
        "schema": "string",
        "description": ""
      },
      {
        "name": "displayName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "addressFormat",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lastModifiedDateTime",
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
    "url": "/companies({company_id})/salesOrders",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "salesOrder",
    "typeScriptTag": "salesOrder",
    "description": "Returns a list of salesOrders",
    "parameters": [
      {
        "name": "$top",
        "schema": "integer",
        "required": false,
        "description": "(v1.0) Number of items to return from the top of the list"
      },
      {
        "name": "$skip",
        "schema": "integer",
        "required": false,
        "description": "(v1.0) Number of items to skip from the list"
      },
      {
        "name": "$limit",
        "schema": "integer",
        "required": false,
        "description": "(v1.0) Number of items to return from the list"
      },
      {
        "name": "$filter",
        "schema": "string",
        "required": false,
        "description": "(v1.0) Filtering expression"
      },
      {
        "name": "$expand",
        "schema": "array",
        "description": "(v1.0) Entities to expand"
      },
      {
        "name": "$select",
        "schema": "array",
        "description": "(v1.0) Selected properties to be retrieved"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/companies({company_id})/salesOrders",
    "method": "createDynamicsObject",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "salesOrder",
    "typeScriptTag": "salesOrder",
    "description": "Creates an object of type salesOrder in Dynamics 365 Business Central",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "number",
        "schema": "string",
        "description": ""
      },
      {
        "name": "externalDocumentNumber",
        "schema": "string",
        "description": ""
      },
      {
        "name": "orderDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "customerId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "contactId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "customerNumber",
        "schema": "string",
        "description": ""
      },
      {
        "name": "customerName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "billToName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "billToCustomerId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "billToCustomerNumber",
        "schema": "string",
        "description": ""
      },
      {
        "name": "shipToName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "shipToContact",
        "schema": "string",
        "description": ""
      },
      {
        "name": "sellingPostalAddress",
        "schema": "object",
        "description": ""
      },
      {
        "name": "billingPostalAddress",
        "schema": "object",
        "description": ""
      },
      {
        "name": "shippingPostalAddress",
        "schema": "object",
        "description": ""
      },
      {
        "name": "currencyId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "currencyCode",
        "schema": "string",
        "description": ""
      },
      {
        "name": "pricesIncludeTax",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "paymentTermsId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "shipmentMethodId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "salesperson",
        "schema": "string",
        "description": ""
      },
      {
        "name": "partialShipping",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "requestedDeliveryDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "discountAmount",
        "schema": "number",
        "description": ""
      },
      {
        "name": "discountAppliedBeforeTax",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "totalAmountExcludingTax",
        "schema": "number",
        "description": ""
      },
      {
        "name": "totalTaxAmount",
        "schema": "number",
        "description": ""
      },
      {
        "name": "totalAmountIncludingTax",
        "schema": "number",
        "description": ""
      },
      {
        "name": "fullyShipped",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "status",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lastModifiedDateTime",
        "schema": "string",
        "description": ""
      },
      {
        "name": "phoneNumber",
        "schema": "string",
        "description": ""
      },
      {
        "name": "email",
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
    "url": "/companies({company_id})/salesOrders({salesOrder_id})",
    "method": "deleteDynamicsObject",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "salesOrder",
    "typeScriptTag": "salesOrder",
    "description": "Deletes an object of type salesOrder in Dynamics 365 Business Central",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "(v1.0) Succesfully deleted the specified salesOrder"
      }
    ]
  },
  {
    "url": "/companies({company_id})/salesOrders({salesOrder_id})",
    "method": "getProperties",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "salesOrder",
    "typeScriptTag": "salesOrder",
    "description": "Retrieve the properties and relationships of an object of type salesOrder for Dynamics 365 Business Central.",
    "parameters": [
      {
        "name": "$expand",
        "schema": "array",
        "description": "(v1.0) Entities to expand"
      },
      {
        "name": "$select",
        "schema": "array",
        "description": "(v1.0) Selected properties to be retrieved"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/companies({company_id})/salesOrders({salesOrder_id})",
    "method": "updateDynamicsObject",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "salesOrder",
    "typeScriptTag": "salesOrder",
    "description": "Updates an object of type salesOrder in Dynamics 365 Business Central",
    "parameters": [
      {
        "name": "ifMatch",
        "schema": "string",
        "required": true,
        "description": "(v1.0) Required. When this request header is included and the eTag provided does not match the current tag on the entity, this will not be updated.",
        "example": "IF-MATCH"
      },
      {
        "name": "id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "number",
        "schema": "string",
        "description": ""
      },
      {
        "name": "externalDocumentNumber",
        "schema": "string",
        "description": ""
      },
      {
        "name": "orderDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "customerId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "contactId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "customerNumber",
        "schema": "string",
        "description": ""
      },
      {
        "name": "customerName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "billToName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "billToCustomerId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "billToCustomerNumber",
        "schema": "string",
        "description": ""
      },
      {
        "name": "shipToName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "shipToContact",
        "schema": "string",
        "description": ""
      },
      {
        "name": "sellingPostalAddress",
        "schema": "object",
        "description": ""
      },
      {
        "name": "billingPostalAddress",
        "schema": "object",
        "description": ""
      },
      {
        "name": "shippingPostalAddress",
        "schema": "object",
        "description": ""
      },
      {
        "name": "currencyId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "currencyCode",
        "schema": "string",
        "description": ""
      },
      {
        "name": "pricesIncludeTax",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "paymentTermsId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "shipmentMethodId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "salesperson",
        "schema": "string",
        "description": ""
      },
      {
        "name": "partialShipping",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "requestedDeliveryDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "discountAmount",
        "schema": "number",
        "description": ""
      },
      {
        "name": "discountAppliedBeforeTax",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "totalAmountExcludingTax",
        "schema": "number",
        "description": ""
      },
      {
        "name": "totalTaxAmount",
        "schema": "number",
        "description": ""
      },
      {
        "name": "totalAmountIncludingTax",
        "schema": "number",
        "description": ""
      },
      {
        "name": "fullyShipped",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "status",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lastModifiedDateTime",
        "schema": "string",
        "description": ""
      },
      {
        "name": "phoneNumber",
        "schema": "string",
        "description": ""
      },
      {
        "name": "email",
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
    "url": "/companies({company_id})/salesOrders({salesOrder_id})/Microsoft.NAV.shipAndInvoice",
    "method": "shipAndInvoice",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "salesOrder",
    "typeScriptTag": "salesOrder",
    "description": "Performs the shipAndInvoice action for salesOrders entity",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "(v1.0) Succesfully performed a shipAndInvoice action on the Dynamic 365 Business Central salesOrders entity"
      }
    ]
  },
  {
    "url": "/companies({company_id})/salesOrders({salesOrder_id})/salesOrderLines",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "salesOrderLine",
    "typeScriptTag": "salesOrderLine",
    "description": "Returns a list of salesOrderLines",
    "parameters": [
      {
        "name": "$top",
        "schema": "integer",
        "required": false,
        "description": "(v1.0) Number of items to return from the top of the list"
      },
      {
        "name": "$skip",
        "schema": "integer",
        "required": false,
        "description": "(v1.0) Number of items to skip from the list"
      },
      {
        "name": "$limit",
        "schema": "integer",
        "required": false,
        "description": "(v1.0) Number of items to return from the list"
      },
      {
        "name": "$filter",
        "schema": "string",
        "required": false,
        "description": "(v1.0) Filtering expression"
      },
      {
        "name": "$expand",
        "schema": "array",
        "description": "(v1.0) Entities to expand"
      },
      {
        "name": "$select",
        "schema": "array",
        "description": "(v1.0) Selected properties to be retrieved"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/companies({company_id})/salesOrders({salesOrder_id})/salesOrderLines",
    "method": "createD365Object",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "salesOrderLine",
    "typeScriptTag": "salesOrderLine",
    "description": "Creates an object of type salesOrderLine in Dynamics 365 Business Central",
    "parameters": [
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "documentId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "sequence",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "itemId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "accountId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lineType",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lineDetails",
        "schema": "object",
        "description": ""
      },
      {
        "name": "unitOfMeasureId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "unitOfMeasure",
        "schema": "object",
        "description": ""
      },
      {
        "name": "quantity",
        "schema": "number",
        "description": ""
      },
      {
        "name": "unitPrice",
        "schema": "number",
        "description": ""
      },
      {
        "name": "discountAmount",
        "schema": "number",
        "description": ""
      },
      {
        "name": "discountPercent",
        "schema": "number",
        "description": ""
      },
      {
        "name": "discountAppliedBeforeTax",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "amountExcludingTax",
        "schema": "number",
        "description": ""
      },
      {
        "name": "taxCode",
        "schema": "string",
        "description": ""
      },
      {
        "name": "taxPercent",
        "schema": "number",
        "description": ""
      },
      {
        "name": "totalTaxAmount",
        "schema": "number",
        "description": ""
      },
      {
        "name": "amountIncludingTax",
        "schema": "number",
        "description": ""
      },
      {
        "name": "invoiceDiscountAllocation",
        "schema": "number",
        "description": ""
      },
      {
        "name": "netAmount",
        "schema": "number",
        "description": ""
      },
      {
        "name": "netTaxAmount",
        "schema": "number",
        "description": ""
      },
      {
        "name": "netAmountIncludingTax",
        "schema": "number",
        "description": ""
      },
      {
        "name": "shipmentDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "shippedQuantity",
        "schema": "number",
        "description": ""
      },
      {
        "name": "invoicedQuantity",
        "schema": "number",
        "description": ""
      },
      {
        "name": "invoiceQuantity",
        "schema": "number",
        "description": ""
      },
      {
        "name": "shipQuantity",
        "schema": "number",
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
    "url": "/companies({company_id})/salesOrders({salesOrder_id})/salesOrderLines('{salesOrderLine_id}')",
    "method": "deleteObject",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "salesOrderLine",
    "typeScriptTag": "salesOrderLine",
    "description": "Deletes an object of type salesOrderLine in Dynamics 365 Business Central",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "(v1.0) Succesfully deleted the specified salesOrderLine"
      }
    ]
  },
  {
    "url": "/companies({company_id})/salesOrders({salesOrder_id})/salesOrderLines('{salesOrderLine_id}')",
    "method": "getProperties",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "salesOrderLine",
    "typeScriptTag": "salesOrderLine",
    "description": "Retrieve the properties and relationships of an object of type salesOrderLine for Dynamics 365 Business Central.",
    "parameters": [
      {
        "name": "$expand",
        "schema": "array",
        "description": "(v1.0) Entities to expand"
      },
      {
        "name": "$select",
        "schema": "array",
        "description": "(v1.0) Selected properties to be retrieved"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/companies({company_id})/salesOrders({salesOrder_id})/salesOrderLines('{salesOrderLine_id}')",
    "method": "updateObject",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "salesOrderLine",
    "typeScriptTag": "salesOrderLine",
    "description": "Updates an object of type salesOrderLine in Dynamics 365 Business Central",
    "parameters": [
      {
        "name": "ifMatch",
        "schema": "string",
        "required": true,
        "description": "(v1.0) Required. When this request header is included and the eTag provided does not match the current tag on the entity, this will not be updated.",
        "example": "IF-MATCH"
      },
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "documentId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "sequence",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "itemId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "accountId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lineType",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lineDetails",
        "schema": "object",
        "description": ""
      },
      {
        "name": "unitOfMeasureId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "unitOfMeasure",
        "schema": "object",
        "description": ""
      },
      {
        "name": "quantity",
        "schema": "number",
        "description": ""
      },
      {
        "name": "unitPrice",
        "schema": "number",
        "description": ""
      },
      {
        "name": "discountAmount",
        "schema": "number",
        "description": ""
      },
      {
        "name": "discountPercent",
        "schema": "number",
        "description": ""
      },
      {
        "name": "discountAppliedBeforeTax",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "amountExcludingTax",
        "schema": "number",
        "description": ""
      },
      {
        "name": "taxCode",
        "schema": "string",
        "description": ""
      },
      {
        "name": "taxPercent",
        "schema": "number",
        "description": ""
      },
      {
        "name": "totalTaxAmount",
        "schema": "number",
        "description": ""
      },
      {
        "name": "amountIncludingTax",
        "schema": "number",
        "description": ""
      },
      {
        "name": "invoiceDiscountAllocation",
        "schema": "number",
        "description": ""
      },
      {
        "name": "netAmount",
        "schema": "number",
        "description": ""
      },
      {
        "name": "netTaxAmount",
        "schema": "number",
        "description": ""
      },
      {
        "name": "netAmountIncludingTax",
        "schema": "number",
        "description": ""
      },
      {
        "name": "shipmentDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "shippedQuantity",
        "schema": "number",
        "description": ""
      },
      {
        "name": "invoicedQuantity",
        "schema": "number",
        "description": ""
      },
      {
        "name": "invoiceQuantity",
        "schema": "number",
        "description": ""
      },
      {
        "name": "shipQuantity",
        "schema": "number",
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
    "url": "/companies({company_id})/salesOrderLines",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "salesOrderLine",
    "typeScriptTag": "salesOrderLine",
    "description": "Returns a list of salesOrderLines",
    "parameters": [
      {
        "name": "$top",
        "schema": "integer",
        "required": false,
        "description": "(v1.0) Number of items to return from the top of the list"
      },
      {
        "name": "$skip",
        "schema": "integer",
        "required": false,
        "description": "(v1.0) Number of items to skip from the list"
      },
      {
        "name": "$limit",
        "schema": "integer",
        "required": false,
        "description": "(v1.0) Number of items to return from the list"
      },
      {
        "name": "$filter",
        "schema": "string",
        "required": false,
        "description": "(v1.0) Filtering expression"
      },
      {
        "name": "$expand",
        "schema": "array",
        "description": "(v1.0) Entities to expand"
      },
      {
        "name": "$select",
        "schema": "array",
        "description": "(v1.0) Selected properties to be retrieved"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/companies({company_id})/salesOrderLines",
    "method": "createDynamicsObject",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "salesOrderLine",
    "typeScriptTag": "salesOrderLine",
    "description": "Creates an object of type salesOrderLine in Dynamics 365 Business Central",
    "parameters": [
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "documentId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "sequence",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "itemId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "accountId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lineType",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lineDetails",
        "schema": "object",
        "description": ""
      },
      {
        "name": "unitOfMeasureId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "unitOfMeasure",
        "schema": "object",
        "description": ""
      },
      {
        "name": "quantity",
        "schema": "number",
        "description": ""
      },
      {
        "name": "unitPrice",
        "schema": "number",
        "description": ""
      },
      {
        "name": "discountAmount",
        "schema": "number",
        "description": ""
      },
      {
        "name": "discountPercent",
        "schema": "number",
        "description": ""
      },
      {
        "name": "discountAppliedBeforeTax",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "amountExcludingTax",
        "schema": "number",
        "description": ""
      },
      {
        "name": "taxCode",
        "schema": "string",
        "description": ""
      },
      {
        "name": "taxPercent",
        "schema": "number",
        "description": ""
      },
      {
        "name": "totalTaxAmount",
        "schema": "number",
        "description": ""
      },
      {
        "name": "amountIncludingTax",
        "schema": "number",
        "description": ""
      },
      {
        "name": "invoiceDiscountAllocation",
        "schema": "number",
        "description": ""
      },
      {
        "name": "netAmount",
        "schema": "number",
        "description": ""
      },
      {
        "name": "netTaxAmount",
        "schema": "number",
        "description": ""
      },
      {
        "name": "netAmountIncludingTax",
        "schema": "number",
        "description": ""
      },
      {
        "name": "shipmentDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "shippedQuantity",
        "schema": "number",
        "description": ""
      },
      {
        "name": "invoicedQuantity",
        "schema": "number",
        "description": ""
      },
      {
        "name": "invoiceQuantity",
        "schema": "number",
        "description": ""
      },
      {
        "name": "shipQuantity",
        "schema": "number",
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
    "url": "/companies({company_id})/salesOrderLines('{salesOrderLine_id}')",
    "method": "deleteObject",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "salesOrderLine",
    "typeScriptTag": "salesOrderLine",
    "description": "Deletes an object of type salesOrderLine in Dynamics 365 Business Central",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "(v1.0) Succesfully deleted the specified salesOrderLine"
      }
    ]
  },
  {
    "url": "/companies({company_id})/salesOrderLines('{salesOrderLine_id}')",
    "method": "getProperties",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "salesOrderLine",
    "typeScriptTag": "salesOrderLine",
    "description": "Retrieve the properties and relationships of an object of type salesOrderLine for Dynamics 365 Business Central.",
    "parameters": [
      {
        "name": "$expand",
        "schema": "array",
        "description": "(v1.0) Entities to expand"
      },
      {
        "name": "$select",
        "schema": "array",
        "description": "(v1.0) Selected properties to be retrieved"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/companies({company_id})/salesOrderLines('{salesOrderLine_id}')",
    "method": "updateObject",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "salesOrderLine",
    "typeScriptTag": "salesOrderLine",
    "description": "Updates an object of type salesOrderLine in Dynamics 365 Business Central",
    "parameters": [
      {
        "name": "ifMatch",
        "schema": "string",
        "required": true,
        "description": "(v1.0) Required. When this request header is included and the eTag provided does not match the current tag on the entity, this will not be updated.",
        "example": "IF-MATCH"
      },
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "documentId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "sequence",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "itemId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "accountId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lineType",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lineDetails",
        "schema": "object",
        "description": ""
      },
      {
        "name": "unitOfMeasureId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "unitOfMeasure",
        "schema": "object",
        "description": ""
      },
      {
        "name": "quantity",
        "schema": "number",
        "description": ""
      },
      {
        "name": "unitPrice",
        "schema": "number",
        "description": ""
      },
      {
        "name": "discountAmount",
        "schema": "number",
        "description": ""
      },
      {
        "name": "discountPercent",
        "schema": "number",
        "description": ""
      },
      {
        "name": "discountAppliedBeforeTax",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "amountExcludingTax",
        "schema": "number",
        "description": ""
      },
      {
        "name": "taxCode",
        "schema": "string",
        "description": ""
      },
      {
        "name": "taxPercent",
        "schema": "number",
        "description": ""
      },
      {
        "name": "totalTaxAmount",
        "schema": "number",
        "description": ""
      },
      {
        "name": "amountIncludingTax",
        "schema": "number",
        "description": ""
      },
      {
        "name": "invoiceDiscountAllocation",
        "schema": "number",
        "description": ""
      },
      {
        "name": "netAmount",
        "schema": "number",
        "description": ""
      },
      {
        "name": "netTaxAmount",
        "schema": "number",
        "description": ""
      },
      {
        "name": "netAmountIncludingTax",
        "schema": "number",
        "description": ""
      },
      {
        "name": "shipmentDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "shippedQuantity",
        "schema": "number",
        "description": ""
      },
      {
        "name": "invoicedQuantity",
        "schema": "number",
        "description": ""
      },
      {
        "name": "invoiceQuantity",
        "schema": "number",
        "description": ""
      },
      {
        "name": "shipQuantity",
        "schema": "number",
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
    "url": "/companies({company_id})/retainedEarningsStatement",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "retainedEarningsStatement",
    "typeScriptTag": "retainedEarningsStatement",
    "description": "Returns a list of retainedEarningsStatement",
    "parameters": [
      {
        "name": "$top",
        "schema": "integer",
        "required": false,
        "description": "(v1.0) Number of items to return from the top of the list"
      },
      {
        "name": "$skip",
        "schema": "integer",
        "required": false,
        "description": "(v1.0) Number of items to skip from the list"
      },
      {
        "name": "$limit",
        "schema": "integer",
        "required": false,
        "description": "(v1.0) Number of items to return from the list"
      },
      {
        "name": "$filter",
        "schema": "string",
        "required": false,
        "description": "(v1.0) Filtering expression"
      },
      {
        "name": "$select",
        "schema": "array",
        "description": "(v1.0) Selected properties to be retrieved"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/companies({company_id})/retainedEarningsStatement({retainedEarningsStatement_lineNumber})",
    "method": "getProperties",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "retainedEarningsStatement",
    "typeScriptTag": "retainedEarningsStatement",
    "description": "Retrieve the properties and relationships of an object of type retainedEarningsStatement for Dynamics 365 Business Central.",
    "parameters": [
      {
        "name": "$select",
        "schema": "array",
        "description": "(v1.0) Selected properties to be retrieved"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/companies({company_id})/unitsOfMeasure",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "unitOfMeasure",
    "typeScriptTag": "unitOfMeasure",
    "description": "Returns a list of unitsOfMeasure",
    "parameters": [
      {
        "name": "$top",
        "schema": "integer",
        "required": false,
        "description": "(v1.0) Number of items to return from the top of the list"
      },
      {
        "name": "$skip",
        "schema": "integer",
        "required": false,
        "description": "(v1.0) Number of items to skip from the list"
      },
      {
        "name": "$limit",
        "schema": "integer",
        "required": false,
        "description": "(v1.0) Number of items to return from the list"
      },
      {
        "name": "$filter",
        "schema": "string",
        "required": false,
        "description": "(v1.0) Filtering expression"
      },
      {
        "name": "$select",
        "schema": "array",
        "description": "(v1.0) Selected properties to be retrieved"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/companies({company_id})/unitsOfMeasure",
    "method": "createD365Object",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "unitOfMeasure",
    "typeScriptTag": "unitOfMeasure",
    "description": "Creates an object of type unitOfMeasure in Dynamics 365 Business Central",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "code",
        "schema": "string",
        "description": ""
      },
      {
        "name": "displayName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "internationalStandardCode",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lastModifiedDateTime",
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
    "url": "/companies({company_id})/unitsOfMeasure({unitOfMeasure_id})",
    "method": "deleteObject",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "unitOfMeasure",
    "typeScriptTag": "unitOfMeasure",
    "description": "Deletes an object of type unitOfMeasure in Dynamics 365 Business Central",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "(v1.0) Succesfully deleted the specified unitOfMeasure"
      }
    ]
  },
  {
    "url": "/companies({company_id})/unitsOfMeasure({unitOfMeasure_id})",
    "method": "getProperties",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "unitOfMeasure",
    "typeScriptTag": "unitOfMeasure",
    "description": "Retrieve the properties and relationships of an object of type unitOfMeasure for Dynamics 365 Business Central.",
    "parameters": [
      {
        "name": "$select",
        "schema": "array",
        "description": "(v1.0) Selected properties to be retrieved"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/companies({company_id})/unitsOfMeasure({unitOfMeasure_id})",
    "method": "updateObject",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "unitOfMeasure",
    "typeScriptTag": "unitOfMeasure",
    "description": "Updates an object of type unitOfMeasure in Dynamics 365 Business Central",
    "parameters": [
      {
        "name": "ifMatch",
        "schema": "string",
        "required": true,
        "description": "(v1.0) Required. When this request header is included and the eTag provided does not match the current tag on the entity, this will not be updated.",
        "example": "IF-MATCH"
      },
      {
        "name": "id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "code",
        "schema": "string",
        "description": ""
      },
      {
        "name": "displayName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "internationalStandardCode",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lastModifiedDateTime",
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
    "url": "/companies({company_id})/agedAccountsReceivable",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "agedAccountsReceivable",
    "typeScriptTag": "agedAccountsReceivable",
    "description": "Returns a list of agedAccountsReceivable",
    "parameters": [
      {
        "name": "$top",
        "schema": "integer",
        "required": false,
        "description": "(v1.0) Number of items to return from the top of the list"
      },
      {
        "name": "$skip",
        "schema": "integer",
        "required": false,
        "description": "(v1.0) Number of items to skip from the list"
      },
      {
        "name": "$limit",
        "schema": "integer",
        "required": false,
        "description": "(v1.0) Number of items to return from the list"
      },
      {
        "name": "$filter",
        "schema": "string",
        "required": false,
        "description": "(v1.0) Filtering expression"
      },
      {
        "name": "$select",
        "schema": "array",
        "description": "(v1.0) Selected properties to be retrieved"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/companies({company_id})/agedAccountsReceivable({agedAccountsReceivable_customerId})",
    "method": "getProperties",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "agedAccountsReceivable",
    "typeScriptTag": "agedAccountsReceivable",
    "description": "Retrieve the properties and relationships of an object of type agedAccountsReceivable for Dynamics 365 Business Central.",
    "parameters": [
      {
        "name": "$select",
        "schema": "array",
        "description": "(v1.0) Selected properties to be retrieved"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/companies({company_id})/agedAccountsPayable",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "agedAccountsPayable",
    "typeScriptTag": "agedAccountsPayable",
    "description": "Returns a list of agedAccountsPayable",
    "parameters": [
      {
        "name": "$top",
        "schema": "integer",
        "required": false,
        "description": "(v1.0) Number of items to return from the top of the list"
      },
      {
        "name": "$skip",
        "schema": "integer",
        "required": false,
        "description": "(v1.0) Number of items to skip from the list"
      },
      {
        "name": "$limit",
        "schema": "integer",
        "required": false,
        "description": "(v1.0) Number of items to return from the list"
      },
      {
        "name": "$filter",
        "schema": "string",
        "required": false,
        "description": "(v1.0) Filtering expression"
      },
      {
        "name": "$select",
        "schema": "array",
        "description": "(v1.0) Selected properties to be retrieved"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/companies({company_id})/agedAccountsPayable({agedAccountsPayable_vendorId})",
    "method": "getProperties",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "agedAccountsPayable",
    "typeScriptTag": "agedAccountsPayable",
    "description": "Retrieve the properties and relationships of an object of type agedAccountsPayable for Dynamics 365 Business Central.",
    "parameters": [
      {
        "name": "$select",
        "schema": "array",
        "description": "(v1.0) Selected properties to be retrieved"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/companies({company_id})/balanceSheet",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "balanceSheet",
    "typeScriptTag": "balanceSheet",
    "description": "Returns a list of balanceSheet",
    "parameters": [
      {
        "name": "$top",
        "schema": "integer",
        "required": false,
        "description": "(v1.0) Number of items to return from the top of the list"
      },
      {
        "name": "$skip",
        "schema": "integer",
        "required": false,
        "description": "(v1.0) Number of items to skip from the list"
      },
      {
        "name": "$limit",
        "schema": "integer",
        "required": false,
        "description": "(v1.0) Number of items to return from the list"
      },
      {
        "name": "$filter",
        "schema": "string",
        "required": false,
        "description": "(v1.0) Filtering expression"
      },
      {
        "name": "$select",
        "schema": "array",
        "description": "(v1.0) Selected properties to be retrieved"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/companies({company_id})/balanceSheet({balanceSheet_lineNumber})",
    "method": "getProperties",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "balanceSheet",
    "typeScriptTag": "balanceSheet",
    "description": "Retrieve the properties and relationships of an object of type balanceSheet for Dynamics 365 Business Central.",
    "parameters": [
      {
        "name": "$select",
        "schema": "array",
        "description": "(v1.0) Selected properties to be retrieved"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/companies({company_id})/trialBalance",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "trialBalance",
    "typeScriptTag": "trialBalance",
    "description": "Returns a list of trialBalance",
    "parameters": [
      {
        "name": "$top",
        "schema": "integer",
        "required": false,
        "description": "(v1.0) Number of items to return from the top of the list"
      },
      {
        "name": "$skip",
        "schema": "integer",
        "required": false,
        "description": "(v1.0) Number of items to skip from the list"
      },
      {
        "name": "$limit",
        "schema": "integer",
        "required": false,
        "description": "(v1.0) Number of items to return from the list"
      },
      {
        "name": "$filter",
        "schema": "string",
        "required": false,
        "description": "(v1.0) Filtering expression"
      },
      {
        "name": "$expand",
        "schema": "array",
        "description": "(v1.0) Entities to expand"
      },
      {
        "name": "$select",
        "schema": "array",
        "description": "(v1.0) Selected properties to be retrieved"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/companies({company_id})/trialBalance('{trialBalance_number}')",
    "method": "getProperties",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "trialBalance",
    "typeScriptTag": "trialBalance",
    "description": "Retrieve the properties and relationships of an object of type trialBalance for Dynamics 365 Business Central.",
    "parameters": [
      {
        "name": "$expand",
        "schema": "array",
        "description": "(v1.0) Entities to expand"
      },
      {
        "name": "$select",
        "schema": "array",
        "description": "(v1.0) Selected properties to be retrieved"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/companies({company_id})/incomeStatement",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "incomeStatement",
    "typeScriptTag": "incomeStatement",
    "description": "Returns a list of incomeStatement",
    "parameters": [
      {
        "name": "$top",
        "schema": "integer",
        "required": false,
        "description": "(v1.0) Number of items to return from the top of the list"
      },
      {
        "name": "$skip",
        "schema": "integer",
        "required": false,
        "description": "(v1.0) Number of items to skip from the list"
      },
      {
        "name": "$limit",
        "schema": "integer",
        "required": false,
        "description": "(v1.0) Number of items to return from the list"
      },
      {
        "name": "$filter",
        "schema": "string",
        "required": false,
        "description": "(v1.0) Filtering expression"
      },
      {
        "name": "$select",
        "schema": "array",
        "description": "(v1.0) Selected properties to be retrieved"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/companies({company_id})/incomeStatement({incomeStatement_lineNumber})",
    "method": "getProperties",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "incomeStatement",
    "typeScriptTag": "incomeStatement",
    "description": "Retrieve the properties and relationships of an object of type incomeStatement for Dynamics 365 Business Central.",
    "parameters": [
      {
        "name": "$select",
        "schema": "array",
        "description": "(v1.0) Selected properties to be retrieved"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/companies({company_id})/taxAreas",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "taxArea",
    "typeScriptTag": "taxArea",
    "description": "Returns a list of taxAreas",
    "parameters": [
      {
        "name": "$top",
        "schema": "integer",
        "required": false,
        "description": "(v1.0) Number of items to return from the top of the list"
      },
      {
        "name": "$skip",
        "schema": "integer",
        "required": false,
        "description": "(v1.0) Number of items to skip from the list"
      },
      {
        "name": "$limit",
        "schema": "integer",
        "required": false,
        "description": "(v1.0) Number of items to return from the list"
      },
      {
        "name": "$filter",
        "schema": "string",
        "required": false,
        "description": "(v1.0) Filtering expression"
      },
      {
        "name": "$select",
        "schema": "array",
        "description": "(v1.0) Selected properties to be retrieved"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/companies({company_id})/taxAreas",
    "method": "createD365Object",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "taxArea",
    "typeScriptTag": "taxArea",
    "description": "Creates an object of type taxArea in Dynamics 365 Business Central",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "code",
        "schema": "string",
        "description": ""
      },
      {
        "name": "displayName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "taxType",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lastModifiedDateTime",
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
    "url": "/companies({company_id})/taxAreas({taxArea_id})",
    "method": "deleteDynamicsObject",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "taxArea",
    "typeScriptTag": "taxArea",
    "description": "Deletes an object of type taxArea in Dynamics 365 Business Central",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "(v1.0) Succesfully deleted the specified taxArea"
      }
    ]
  },
  {
    "url": "/companies({company_id})/taxAreas({taxArea_id})",
    "method": "getProperties",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "taxArea",
    "typeScriptTag": "taxArea",
    "description": "Retrieve the properties and relationships of an object of type taxArea for Dynamics 365 Business Central.",
    "parameters": [
      {
        "name": "$select",
        "schema": "array",
        "description": "(v1.0) Selected properties to be retrieved"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/companies({company_id})/taxAreas({taxArea_id})",
    "method": "updateDynamicsObject",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "taxArea",
    "typeScriptTag": "taxArea",
    "description": "Updates an object of type taxArea in Dynamics 365 Business Central",
    "parameters": [
      {
        "name": "ifMatch",
        "schema": "string",
        "required": true,
        "description": "(v1.0) Required. When this request header is included and the eTag provided does not match the current tag on the entity, this will not be updated.",
        "example": "IF-MATCH"
      },
      {
        "name": "id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "code",
        "schema": "string",
        "description": ""
      },
      {
        "name": "displayName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "taxType",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lastModifiedDateTime",
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
    "url": "/companies({company_id})/salesQuotes",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "salesQuote",
    "typeScriptTag": "salesQuote",
    "description": "Returns a list of salesQuotes",
    "parameters": [
      {
        "name": "$top",
        "schema": "integer",
        "required": false,
        "description": "(v1.0) Number of items to return from the top of the list"
      },
      {
        "name": "$skip",
        "schema": "integer",
        "required": false,
        "description": "(v1.0) Number of items to skip from the list"
      },
      {
        "name": "$limit",
        "schema": "integer",
        "required": false,
        "description": "(v1.0) Number of items to return from the list"
      },
      {
        "name": "$filter",
        "schema": "string",
        "required": false,
        "description": "(v1.0) Filtering expression"
      },
      {
        "name": "$expand",
        "schema": "array",
        "description": "(v1.0) Entities to expand"
      },
      {
        "name": "$select",
        "schema": "array",
        "description": "(v1.0) Selected properties to be retrieved"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/companies({company_id})/salesQuotes",
    "method": "createD365Object",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "salesQuote",
    "typeScriptTag": "salesQuote",
    "description": "Creates an object of type salesQuote in Dynamics 365 Business Central",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "number",
        "schema": "string",
        "description": ""
      },
      {
        "name": "externalDocumentNumber",
        "schema": "string",
        "description": ""
      },
      {
        "name": "documentDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "dueDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "customerId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "contactId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "customerNumber",
        "schema": "string",
        "description": ""
      },
      {
        "name": "customerName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "billToName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "billToCustomerId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "billToCustomerNumber",
        "schema": "string",
        "description": ""
      },
      {
        "name": "shipToName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "shipToContact",
        "schema": "string",
        "description": ""
      },
      {
        "name": "sellingPostalAddress",
        "schema": "object",
        "description": ""
      },
      {
        "name": "billingPostalAddress",
        "schema": "object",
        "description": ""
      },
      {
        "name": "shippingPostalAddress",
        "schema": "object",
        "description": ""
      },
      {
        "name": "currencyId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "currencyCode",
        "schema": "string",
        "description": ""
      },
      {
        "name": "paymentTermsId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "shipmentMethodId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "salesperson",
        "schema": "string",
        "description": ""
      },
      {
        "name": "discountAmount",
        "schema": "number",
        "description": ""
      },
      {
        "name": "totalAmountExcludingTax",
        "schema": "number",
        "description": ""
      },
      {
        "name": "totalTaxAmount",
        "schema": "number",
        "description": ""
      },
      {
        "name": "totalAmountIncludingTax",
        "schema": "number",
        "description": ""
      },
      {
        "name": "status",
        "schema": "string",
        "description": ""
      },
      {
        "name": "sentDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "validUntilDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "acceptedDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lastModifiedDateTime",
        "schema": "string",
        "description": ""
      },
      {
        "name": "phoneNumber",
        "schema": "string",
        "description": ""
      },
      {
        "name": "email",
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
    "url": "/companies({company_id})/salesQuotes({salesQuote_id})",
    "method": "deleteDynamicsObject",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "salesQuote",
    "typeScriptTag": "salesQuote",
    "description": "Deletes an object of type salesQuote in Dynamics 365 Business Central",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "(v1.0) Succesfully deleted the specified salesQuote"
      }
    ]
  },
  {
    "url": "/companies({company_id})/salesQuotes({salesQuote_id})",
    "method": "getProperties",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "salesQuote",
    "typeScriptTag": "salesQuote",
    "description": "Retrieve the properties and relationships of an object of type salesQuote for Dynamics 365 Business Central.",
    "parameters": [
      {
        "name": "$expand",
        "schema": "array",
        "description": "(v1.0) Entities to expand"
      },
      {
        "name": "$select",
        "schema": "array",
        "description": "(v1.0) Selected properties to be retrieved"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/companies({company_id})/salesQuotes({salesQuote_id})",
    "method": "updateDynamicsObject",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "salesQuote",
    "typeScriptTag": "salesQuote",
    "description": "Updates an object of type salesQuote in Dynamics 365 Business Central",
    "parameters": [
      {
        "name": "ifMatch",
        "schema": "string",
        "required": true,
        "description": "(v1.0) Required. When this request header is included and the eTag provided does not match the current tag on the entity, this will not be updated.",
        "example": "IF-MATCH"
      },
      {
        "name": "id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "number",
        "schema": "string",
        "description": ""
      },
      {
        "name": "externalDocumentNumber",
        "schema": "string",
        "description": ""
      },
      {
        "name": "documentDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "dueDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "customerId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "contactId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "customerNumber",
        "schema": "string",
        "description": ""
      },
      {
        "name": "customerName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "billToName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "billToCustomerId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "billToCustomerNumber",
        "schema": "string",
        "description": ""
      },
      {
        "name": "shipToName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "shipToContact",
        "schema": "string",
        "description": ""
      },
      {
        "name": "sellingPostalAddress",
        "schema": "object",
        "description": ""
      },
      {
        "name": "billingPostalAddress",
        "schema": "object",
        "description": ""
      },
      {
        "name": "shippingPostalAddress",
        "schema": "object",
        "description": ""
      },
      {
        "name": "currencyId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "currencyCode",
        "schema": "string",
        "description": ""
      },
      {
        "name": "paymentTermsId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "shipmentMethodId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "salesperson",
        "schema": "string",
        "description": ""
      },
      {
        "name": "discountAmount",
        "schema": "number",
        "description": ""
      },
      {
        "name": "totalAmountExcludingTax",
        "schema": "number",
        "description": ""
      },
      {
        "name": "totalTaxAmount",
        "schema": "number",
        "description": ""
      },
      {
        "name": "totalAmountIncludingTax",
        "schema": "number",
        "description": ""
      },
      {
        "name": "status",
        "schema": "string",
        "description": ""
      },
      {
        "name": "sentDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "validUntilDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "acceptedDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lastModifiedDateTime",
        "schema": "string",
        "description": ""
      },
      {
        "name": "phoneNumber",
        "schema": "string",
        "description": ""
      },
      {
        "name": "email",
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
    "url": "/companies({company_id})/salesQuotes({salesQuote_id})/Microsoft.NAV.makeInvoice",
    "method": "createInvoice",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "salesQuote",
    "typeScriptTag": "salesQuote",
    "description": "Performs the makeInvoice action for salesQuotes entity",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "(v1.0) Succesfully performed a makeInvoice action on the Dynamic 365 Business Central salesQuotes entity"
      }
    ]
  },
  {
    "url": "/companies({company_id})/salesQuotes({salesQuote_id})/Microsoft.NAV.makeOrder",
    "method": "createOrder",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "salesQuote",
    "typeScriptTag": "salesQuote",
    "description": "Performs the makeOrder action for salesQuotes entity",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "(v1.0) Succesfully performed a makeOrder action on the Dynamic 365 Business Central salesQuotes entity"
      }
    ]
  },
  {
    "url": "/companies({company_id})/salesQuotes({salesQuote_id})/Microsoft.NAV.send",
    "method": "sendAction",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "salesQuote",
    "typeScriptTag": "salesQuote",
    "description": "Performs the send action for salesQuotes entity",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "(v1.0) Succesfully performed a send action on the Dynamic 365 Business Central salesQuotes entity"
      }
    ]
  },
  {
    "url": "/companies({company_id})/salesQuotes({salesQuote_id})/salesQuoteLines",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "salesQuoteLine",
    "typeScriptTag": "salesQuoteLine",
    "description": "Returns a list of salesQuoteLines",
    "parameters": [
      {
        "name": "$top",
        "schema": "integer",
        "required": false,
        "description": "(v1.0) Number of items to return from the top of the list"
      },
      {
        "name": "$skip",
        "schema": "integer",
        "required": false,
        "description": "(v1.0) Number of items to skip from the list"
      },
      {
        "name": "$limit",
        "schema": "integer",
        "required": false,
        "description": "(v1.0) Number of items to return from the list"
      },
      {
        "name": "$filter",
        "schema": "string",
        "required": false,
        "description": "(v1.0) Filtering expression"
      },
      {
        "name": "$expand",
        "schema": "array",
        "description": "(v1.0) Entities to expand"
      },
      {
        "name": "$select",
        "schema": "array",
        "description": "(v1.0) Selected properties to be retrieved"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/companies({company_id})/salesQuotes({salesQuote_id})/salesQuoteLines",
    "method": "createD365Object",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "salesQuoteLine",
    "typeScriptTag": "salesQuoteLine",
    "description": "Creates an object of type salesQuoteLine in Dynamics 365 Business Central",
    "parameters": [
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "documentId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "sequence",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "itemId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "accountId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lineType",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lineDetails",
        "schema": "object",
        "description": ""
      },
      {
        "name": "unitOfMeasureId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "unitOfMeasure",
        "schema": "object",
        "description": ""
      },
      {
        "name": "unitPrice",
        "schema": "number",
        "description": ""
      },
      {
        "name": "quantity",
        "schema": "number",
        "description": ""
      },
      {
        "name": "discountAmount",
        "schema": "number",
        "description": ""
      },
      {
        "name": "discountPercent",
        "schema": "number",
        "description": ""
      },
      {
        "name": "discountAppliedBeforeTax",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "amountExcludingTax",
        "schema": "number",
        "description": ""
      },
      {
        "name": "taxCode",
        "schema": "string",
        "description": ""
      },
      {
        "name": "taxPercent",
        "schema": "number",
        "description": ""
      },
      {
        "name": "totalTaxAmount",
        "schema": "number",
        "description": ""
      },
      {
        "name": "amountIncludingTax",
        "schema": "number",
        "description": ""
      },
      {
        "name": "netAmount",
        "schema": "number",
        "description": ""
      },
      {
        "name": "netTaxAmount",
        "schema": "number",
        "description": ""
      },
      {
        "name": "netAmountIncludingTax",
        "schema": "number",
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
    "url": "/companies({company_id})/salesQuotes({salesQuote_id})/salesQuoteLines('{salesQuoteLine_id}')",
    "method": "deleteObject",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "salesQuoteLine",
    "typeScriptTag": "salesQuoteLine",
    "description": "Deletes an object of type salesQuoteLine in Dynamics 365 Business Central",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "(v1.0) Succesfully deleted the specified salesQuoteLine"
      }
    ]
  },
  {
    "url": "/companies({company_id})/salesQuotes({salesQuote_id})/salesQuoteLines('{salesQuoteLine_id}')",
    "method": "getProperties",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "salesQuoteLine",
    "typeScriptTag": "salesQuoteLine",
    "description": "Retrieve the properties and relationships of an object of type salesQuoteLine for Dynamics 365 Business Central.",
    "parameters": [
      {
        "name": "$expand",
        "schema": "array",
        "description": "(v1.0) Entities to expand"
      },
      {
        "name": "$select",
        "schema": "array",
        "description": "(v1.0) Selected properties to be retrieved"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/companies({company_id})/salesQuotes({salesQuote_id})/salesQuoteLines('{salesQuoteLine_id}')",
    "method": "updateObject",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "salesQuoteLine",
    "typeScriptTag": "salesQuoteLine",
    "description": "Updates an object of type salesQuoteLine in Dynamics 365 Business Central",
    "parameters": [
      {
        "name": "ifMatch",
        "schema": "string",
        "required": true,
        "description": "(v1.0) Required. When this request header is included and the eTag provided does not match the current tag on the entity, this will not be updated.",
        "example": "IF-MATCH"
      },
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "documentId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "sequence",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "itemId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "accountId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lineType",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lineDetails",
        "schema": "object",
        "description": ""
      },
      {
        "name": "unitOfMeasureId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "unitOfMeasure",
        "schema": "object",
        "description": ""
      },
      {
        "name": "unitPrice",
        "schema": "number",
        "description": ""
      },
      {
        "name": "quantity",
        "schema": "number",
        "description": ""
      },
      {
        "name": "discountAmount",
        "schema": "number",
        "description": ""
      },
      {
        "name": "discountPercent",
        "schema": "number",
        "description": ""
      },
      {
        "name": "discountAppliedBeforeTax",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "amountExcludingTax",
        "schema": "number",
        "description": ""
      },
      {
        "name": "taxCode",
        "schema": "string",
        "description": ""
      },
      {
        "name": "taxPercent",
        "schema": "number",
        "description": ""
      },
      {
        "name": "totalTaxAmount",
        "schema": "number",
        "description": ""
      },
      {
        "name": "amountIncludingTax",
        "schema": "number",
        "description": ""
      },
      {
        "name": "netAmount",
        "schema": "number",
        "description": ""
      },
      {
        "name": "netTaxAmount",
        "schema": "number",
        "description": ""
      },
      {
        "name": "netAmountIncludingTax",
        "schema": "number",
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
    "url": "/companies({company_id})/salesQuotes({salesQuote_id})/pdfDocument",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "pdfDocument",
    "typeScriptTag": "pdfDocument",
    "description": "Returns a list of pdfDocument",
    "parameters": [
      {
        "name": "$top",
        "schema": "integer",
        "required": false,
        "description": "(v1.0) Number of items to return from the top of the list"
      },
      {
        "name": "$skip",
        "schema": "integer",
        "required": false,
        "description": "(v1.0) Number of items to skip from the list"
      },
      {
        "name": "$limit",
        "schema": "integer",
        "required": false,
        "description": "(v1.0) Number of items to return from the list"
      },
      {
        "name": "$filter",
        "schema": "string",
        "required": false,
        "description": "(v1.0) Filtering expression"
      },
      {
        "name": "$select",
        "schema": "array",
        "description": "(v1.0) Selected properties to be retrieved"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/companies({company_id})/salesQuotes({salesQuote_id})/pdfDocument({pdfDocument_id})",
    "method": "getProperties",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "pdfDocument",
    "typeScriptTag": "pdfDocument",
    "description": "Retrieve the properties and relationships of an object of type pdfDocument for Dynamics 365 Business Central.",
    "parameters": [
      {
        "name": "$select",
        "schema": "array",
        "description": "(v1.0) Selected properties to be retrieved"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/companies({company_id})/salesQuoteLines",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "salesQuoteLine",
    "typeScriptTag": "salesQuoteLine",
    "description": "Returns a list of salesQuoteLines",
    "parameters": [
      {
        "name": "$top",
        "schema": "integer",
        "required": false,
        "description": "(v1.0) Number of items to return from the top of the list"
      },
      {
        "name": "$skip",
        "schema": "integer",
        "required": false,
        "description": "(v1.0) Number of items to skip from the list"
      },
      {
        "name": "$limit",
        "schema": "integer",
        "required": false,
        "description": "(v1.0) Number of items to return from the list"
      },
      {
        "name": "$filter",
        "schema": "string",
        "required": false,
        "description": "(v1.0) Filtering expression"
      },
      {
        "name": "$expand",
        "schema": "array",
        "description": "(v1.0) Entities to expand"
      },
      {
        "name": "$select",
        "schema": "array",
        "description": "(v1.0) Selected properties to be retrieved"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/companies({company_id})/salesQuoteLines",
    "method": "createDynamicsObject",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "salesQuoteLine",
    "typeScriptTag": "salesQuoteLine",
    "description": "Creates an object of type salesQuoteLine in Dynamics 365 Business Central",
    "parameters": [
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "documentId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "sequence",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "itemId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "accountId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lineType",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lineDetails",
        "schema": "object",
        "description": ""
      },
      {
        "name": "unitOfMeasureId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "unitOfMeasure",
        "schema": "object",
        "description": ""
      },
      {
        "name": "unitPrice",
        "schema": "number",
        "description": ""
      },
      {
        "name": "quantity",
        "schema": "number",
        "description": ""
      },
      {
        "name": "discountAmount",
        "schema": "number",
        "description": ""
      },
      {
        "name": "discountPercent",
        "schema": "number",
        "description": ""
      },
      {
        "name": "discountAppliedBeforeTax",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "amountExcludingTax",
        "schema": "number",
        "description": ""
      },
      {
        "name": "taxCode",
        "schema": "string",
        "description": ""
      },
      {
        "name": "taxPercent",
        "schema": "number",
        "description": ""
      },
      {
        "name": "totalTaxAmount",
        "schema": "number",
        "description": ""
      },
      {
        "name": "amountIncludingTax",
        "schema": "number",
        "description": ""
      },
      {
        "name": "netAmount",
        "schema": "number",
        "description": ""
      },
      {
        "name": "netTaxAmount",
        "schema": "number",
        "description": ""
      },
      {
        "name": "netAmountIncludingTax",
        "schema": "number",
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
    "url": "/companies({company_id})/salesQuoteLines('{salesQuoteLine_id}')",
    "method": "deleteObject",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "salesQuoteLine",
    "typeScriptTag": "salesQuoteLine",
    "description": "Deletes an object of type salesQuoteLine in Dynamics 365 Business Central",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "(v1.0) Succesfully deleted the specified salesQuoteLine"
      }
    ]
  },
  {
    "url": "/companies({company_id})/salesQuoteLines('{salesQuoteLine_id}')",
    "method": "getProperties",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "salesQuoteLine",
    "typeScriptTag": "salesQuoteLine",
    "description": "Retrieve the properties and relationships of an object of type salesQuoteLine for Dynamics 365 Business Central.",
    "parameters": [
      {
        "name": "$expand",
        "schema": "array",
        "description": "(v1.0) Entities to expand"
      },
      {
        "name": "$select",
        "schema": "array",
        "description": "(v1.0) Selected properties to be retrieved"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/companies({company_id})/salesQuoteLines('{salesQuoteLine_id}')",
    "method": "updateObject",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "salesQuoteLine",
    "typeScriptTag": "salesQuoteLine",
    "description": "Updates an object of type salesQuoteLine in Dynamics 365 Business Central",
    "parameters": [
      {
        "name": "ifMatch",
        "schema": "string",
        "required": true,
        "description": "(v1.0) Required. When this request header is included and the eTag provided does not match the current tag on the entity, this will not be updated.",
        "example": "IF-MATCH"
      },
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "documentId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "sequence",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "itemId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "accountId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lineType",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lineDetails",
        "schema": "object",
        "description": ""
      },
      {
        "name": "unitOfMeasureId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "unitOfMeasure",
        "schema": "object",
        "description": ""
      },
      {
        "name": "unitPrice",
        "schema": "number",
        "description": ""
      },
      {
        "name": "quantity",
        "schema": "number",
        "description": ""
      },
      {
        "name": "discountAmount",
        "schema": "number",
        "description": ""
      },
      {
        "name": "discountPercent",
        "schema": "number",
        "description": ""
      },
      {
        "name": "discountAppliedBeforeTax",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "amountExcludingTax",
        "schema": "number",
        "description": ""
      },
      {
        "name": "taxCode",
        "schema": "string",
        "description": ""
      },
      {
        "name": "taxPercent",
        "schema": "number",
        "description": ""
      },
      {
        "name": "totalTaxAmount",
        "schema": "number",
        "description": ""
      },
      {
        "name": "amountIncludingTax",
        "schema": "number",
        "description": ""
      },
      {
        "name": "netAmount",
        "schema": "number",
        "description": ""
      },
      {
        "name": "netTaxAmount",
        "schema": "number",
        "description": ""
      },
      {
        "name": "netAmountIncludingTax",
        "schema": "number",
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
    "url": "/companies({company_id})/salesCreditMemos",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "salesCreditMemo",
    "typeScriptTag": "salesCreditMemo",
    "description": "Returns a list of salesCreditMemos",
    "parameters": [
      {
        "name": "$top",
        "schema": "integer",
        "required": false,
        "description": "(v1.0) Number of items to return from the top of the list"
      },
      {
        "name": "$skip",
        "schema": "integer",
        "required": false,
        "description": "(v1.0) Number of items to skip from the list"
      },
      {
        "name": "$limit",
        "schema": "integer",
        "required": false,
        "description": "(v1.0) Number of items to return from the list"
      },
      {
        "name": "$filter",
        "schema": "string",
        "required": false,
        "description": "(v1.0) Filtering expression"
      },
      {
        "name": "$expand",
        "schema": "array",
        "description": "(v1.0) Entities to expand"
      },
      {
        "name": "$select",
        "schema": "array",
        "description": "(v1.0) Selected properties to be retrieved"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/companies({company_id})/salesCreditMemos",
    "method": "createDynamicsObject",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "salesCreditMemo",
    "typeScriptTag": "salesCreditMemo",
    "description": "Creates an object of type salesCreditMemo in Dynamics 365 Business Central",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "number",
        "schema": "string",
        "description": ""
      },
      {
        "name": "externalDocumentNumber",
        "schema": "string",
        "description": ""
      },
      {
        "name": "creditMemoDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "dueDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "customerId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "contactId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "customerNumber",
        "schema": "string",
        "description": ""
      },
      {
        "name": "customerName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "billToName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "billToCustomerId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "billToCustomerNumber",
        "schema": "string",
        "description": ""
      },
      {
        "name": "sellingPostalAddress",
        "schema": "object",
        "description": ""
      },
      {
        "name": "billingPostalAddress",
        "schema": "object",
        "description": ""
      },
      {
        "name": "currencyId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "currencyCode",
        "schema": "string",
        "description": ""
      },
      {
        "name": "paymentTermsId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "shipmentMethodId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "salesperson",
        "schema": "string",
        "description": ""
      },
      {
        "name": "pricesIncludeTax",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "discountAmount",
        "schema": "number",
        "description": ""
      },
      {
        "name": "discountAppliedBeforeTax",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "totalAmountExcludingTax",
        "schema": "number",
        "description": ""
      },
      {
        "name": "totalTaxAmount",
        "schema": "number",
        "description": ""
      },
      {
        "name": "totalAmountIncludingTax",
        "schema": "number",
        "description": ""
      },
      {
        "name": "status",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lastModifiedDateTime",
        "schema": "string",
        "description": ""
      },
      {
        "name": "invoiceId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "invoiceNumber",
        "schema": "string",
        "description": ""
      },
      {
        "name": "phoneNumber",
        "schema": "string",
        "description": ""
      },
      {
        "name": "email",
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
    "url": "/companies({company_id})/salesCreditMemos({salesCreditMemo_id})",
    "method": "deleteObject",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "salesCreditMemo",
    "typeScriptTag": "salesCreditMemo",
    "description": "Deletes an object of type salesCreditMemo in Dynamics 365 Business Central",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "(v1.0) Succesfully deleted the specified salesCreditMemo"
      }
    ]
  },
  {
    "url": "/companies({company_id})/salesCreditMemos({salesCreditMemo_id})",
    "method": "getProperties",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "salesCreditMemo",
    "typeScriptTag": "salesCreditMemo",
    "description": "Retrieve the properties and relationships of an object of type salesCreditMemo for Dynamics 365 Business Central.",
    "parameters": [
      {
        "name": "$expand",
        "schema": "array",
        "description": "(v1.0) Entities to expand"
      },
      {
        "name": "$select",
        "schema": "array",
        "description": "(v1.0) Selected properties to be retrieved"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/companies({company_id})/salesCreditMemos({salesCreditMemo_id})",
    "method": "updateObject",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "salesCreditMemo",
    "typeScriptTag": "salesCreditMemo",
    "description": "Updates an object of type salesCreditMemo in Dynamics 365 Business Central",
    "parameters": [
      {
        "name": "ifMatch",
        "schema": "string",
        "required": true,
        "description": "(v1.0) Required. When this request header is included and the eTag provided does not match the current tag on the entity, this will not be updated.",
        "example": "IF-MATCH"
      },
      {
        "name": "id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "number",
        "schema": "string",
        "description": ""
      },
      {
        "name": "externalDocumentNumber",
        "schema": "string",
        "description": ""
      },
      {
        "name": "creditMemoDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "dueDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "customerId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "contactId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "customerNumber",
        "schema": "string",
        "description": ""
      },
      {
        "name": "customerName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "billToName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "billToCustomerId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "billToCustomerNumber",
        "schema": "string",
        "description": ""
      },
      {
        "name": "sellingPostalAddress",
        "schema": "object",
        "description": ""
      },
      {
        "name": "billingPostalAddress",
        "schema": "object",
        "description": ""
      },
      {
        "name": "currencyId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "currencyCode",
        "schema": "string",
        "description": ""
      },
      {
        "name": "paymentTermsId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "shipmentMethodId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "salesperson",
        "schema": "string",
        "description": ""
      },
      {
        "name": "pricesIncludeTax",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "discountAmount",
        "schema": "number",
        "description": ""
      },
      {
        "name": "discountAppliedBeforeTax",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "totalAmountExcludingTax",
        "schema": "number",
        "description": ""
      },
      {
        "name": "totalTaxAmount",
        "schema": "number",
        "description": ""
      },
      {
        "name": "totalAmountIncludingTax",
        "schema": "number",
        "description": ""
      },
      {
        "name": "status",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lastModifiedDateTime",
        "schema": "string",
        "description": ""
      },
      {
        "name": "invoiceId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "invoiceNumber",
        "schema": "string",
        "description": ""
      },
      {
        "name": "phoneNumber",
        "schema": "string",
        "description": ""
      },
      {
        "name": "email",
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
    "url": "/companies({company_id})/salesCreditMemos({salesCreditMemo_id})/Microsoft.NAV.cancelAndSend",
    "method": "cancelAndSend",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "salesCreditMemo",
    "typeScriptTag": "salesCreditMemo",
    "description": "Performs the cancelAndSend action for salesCreditMemos entity",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "(v1.0) Succesfully performed a cancelAndSend action on the Dynamic 365 Business Central salesCreditMemos entity"
      }
    ]
  },
  {
    "url": "/companies({company_id})/salesCreditMemos({salesCreditMemo_id})/Microsoft.NAV.cancel",
    "method": "cancelAction",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "salesCreditMemo",
    "typeScriptTag": "salesCreditMemo",
    "description": "Performs the cancel action for salesCreditMemos entity",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "(v1.0) Succesfully performed a cancel action on the Dynamic 365 Business Central salesCreditMemos entity"
      }
    ]
  },
  {
    "url": "/companies({company_id})/salesCreditMemos({salesCreditMemo_id})/Microsoft.NAV.postAndSend",
    "method": "postAndSend",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "salesCreditMemo",
    "typeScriptTag": "salesCreditMemo",
    "description": "Performs the postAndSend action for salesCreditMemos entity",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "(v1.0) Succesfully performed a postAndSend action on the Dynamic 365 Business Central salesCreditMemos entity"
      }
    ]
  },
  {
    "url": "/companies({company_id})/salesCreditMemos({salesCreditMemo_id})/Microsoft.NAV.post",
    "method": "postAction",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "salesCreditMemo",
    "typeScriptTag": "salesCreditMemo",
    "description": "Performs the post action for salesCreditMemos entity",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "(v1.0) Succesfully performed a post action on the Dynamic 365 Business Central salesCreditMemos entity"
      }
    ]
  },
  {
    "url": "/companies({company_id})/salesCreditMemos({salesCreditMemo_id})/Microsoft.NAV.send",
    "method": "sendAction",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "salesCreditMemo",
    "typeScriptTag": "salesCreditMemo",
    "description": "Performs the send action for salesCreditMemos entity",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "(v1.0) Succesfully performed a send action on the Dynamic 365 Business Central salesCreditMemos entity"
      }
    ]
  },
  {
    "url": "/companies({company_id})/salesCreditMemos({salesCreditMemo_id})/salesCreditMemoLines",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "salesCreditMemoLine",
    "typeScriptTag": "salesCreditMemoLine",
    "description": "Returns a list of salesCreditMemoLines",
    "parameters": [
      {
        "name": "$top",
        "schema": "integer",
        "required": false,
        "description": "(v1.0) Number of items to return from the top of the list"
      },
      {
        "name": "$skip",
        "schema": "integer",
        "required": false,
        "description": "(v1.0) Number of items to skip from the list"
      },
      {
        "name": "$limit",
        "schema": "integer",
        "required": false,
        "description": "(v1.0) Number of items to return from the list"
      },
      {
        "name": "$filter",
        "schema": "string",
        "required": false,
        "description": "(v1.0) Filtering expression"
      },
      {
        "name": "$expand",
        "schema": "array",
        "description": "(v1.0) Entities to expand"
      },
      {
        "name": "$select",
        "schema": "array",
        "description": "(v1.0) Selected properties to be retrieved"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/companies({company_id})/salesCreditMemos({salesCreditMemo_id})/salesCreditMemoLines",
    "method": "createD365Object",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "salesCreditMemoLine",
    "typeScriptTag": "salesCreditMemoLine",
    "description": "Creates an object of type salesCreditMemoLine in Dynamics 365 Business Central",
    "parameters": [
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "documentId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "sequence",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "itemId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "accountId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lineType",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lineDetails",
        "schema": "object",
        "description": ""
      },
      {
        "name": "unitOfMeasureId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "unitOfMeasure",
        "schema": "object",
        "description": ""
      },
      {
        "name": "unitPrice",
        "schema": "number",
        "description": ""
      },
      {
        "name": "quantity",
        "schema": "number",
        "description": ""
      },
      {
        "name": "discountAmount",
        "schema": "number",
        "description": ""
      },
      {
        "name": "discountPercent",
        "schema": "number",
        "description": ""
      },
      {
        "name": "discountAppliedBeforeTax",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "amountExcludingTax",
        "schema": "number",
        "description": ""
      },
      {
        "name": "taxCode",
        "schema": "string",
        "description": ""
      },
      {
        "name": "taxPercent",
        "schema": "number",
        "description": ""
      },
      {
        "name": "totalTaxAmount",
        "schema": "number",
        "description": ""
      },
      {
        "name": "amountIncludingTax",
        "schema": "number",
        "description": ""
      },
      {
        "name": "invoiceDiscountAllocation",
        "schema": "number",
        "description": ""
      },
      {
        "name": "netAmount",
        "schema": "number",
        "description": ""
      },
      {
        "name": "netTaxAmount",
        "schema": "number",
        "description": ""
      },
      {
        "name": "netAmountIncludingTax",
        "schema": "number",
        "description": ""
      },
      {
        "name": "shipmentDate",
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
    "url": "/companies({company_id})/salesCreditMemos({salesCreditMemo_id})/salesCreditMemoLines('{salesCreditMemoLine_id}')",
    "method": "delete",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "salesCreditMemoLine",
    "typeScriptTag": "salesCreditMemoLine",
    "description": "Deletes an object of type salesCreditMemoLine in Dynamics 365 Business Central",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "(v1.0) Succesfully deleted the specified salesCreditMemoLine"
      }
    ]
  },
  {
    "url": "/companies({company_id})/salesCreditMemos({salesCreditMemo_id})/salesCreditMemoLines('{salesCreditMemoLine_id}')",
    "method": "getProperties",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "salesCreditMemoLine",
    "typeScriptTag": "salesCreditMemoLine",
    "description": "Retrieve the properties and relationships of an object of type salesCreditMemoLine for Dynamics 365 Business Central.",
    "parameters": [
      {
        "name": "$expand",
        "schema": "array",
        "description": "(v1.0) Entities to expand"
      },
      {
        "name": "$select",
        "schema": "array",
        "description": "(v1.0) Selected properties to be retrieved"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/companies({company_id})/salesCreditMemos({salesCreditMemo_id})/salesCreditMemoLines('{salesCreditMemoLine_id}')",
    "method": "updateObject",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "salesCreditMemoLine",
    "typeScriptTag": "salesCreditMemoLine",
    "description": "Updates an object of type salesCreditMemoLine in Dynamics 365 Business Central",
    "parameters": [
      {
        "name": "ifMatch",
        "schema": "string",
        "required": true,
        "description": "(v1.0) Required. When this request header is included and the eTag provided does not match the current tag on the entity, this will not be updated.",
        "example": "IF-MATCH"
      },
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "documentId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "sequence",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "itemId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "accountId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lineType",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lineDetails",
        "schema": "object",
        "description": ""
      },
      {
        "name": "unitOfMeasureId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "unitOfMeasure",
        "schema": "object",
        "description": ""
      },
      {
        "name": "unitPrice",
        "schema": "number",
        "description": ""
      },
      {
        "name": "quantity",
        "schema": "number",
        "description": ""
      },
      {
        "name": "discountAmount",
        "schema": "number",
        "description": ""
      },
      {
        "name": "discountPercent",
        "schema": "number",
        "description": ""
      },
      {
        "name": "discountAppliedBeforeTax",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "amountExcludingTax",
        "schema": "number",
        "description": ""
      },
      {
        "name": "taxCode",
        "schema": "string",
        "description": ""
      },
      {
        "name": "taxPercent",
        "schema": "number",
        "description": ""
      },
      {
        "name": "totalTaxAmount",
        "schema": "number",
        "description": ""
      },
      {
        "name": "amountIncludingTax",
        "schema": "number",
        "description": ""
      },
      {
        "name": "invoiceDiscountAllocation",
        "schema": "number",
        "description": ""
      },
      {
        "name": "netAmount",
        "schema": "number",
        "description": ""
      },
      {
        "name": "netTaxAmount",
        "schema": "number",
        "description": ""
      },
      {
        "name": "netAmountIncludingTax",
        "schema": "number",
        "description": ""
      },
      {
        "name": "shipmentDate",
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
    "url": "/companies({company_id})/salesCreditMemos({salesCreditMemo_id})/pdfDocument",
    "method": "getDocument",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "pdfDocument",
    "typeScriptTag": "pdfDocument",
    "description": "Returns a list of pdfDocument",
    "parameters": [
      {
        "name": "$top",
        "schema": "integer",
        "required": false,
        "description": "(v1.0) Number of items to return from the top of the list"
      },
      {
        "name": "$skip",
        "schema": "integer",
        "required": false,
        "description": "(v1.0) Number of items to skip from the list"
      },
      {
        "name": "$limit",
        "schema": "integer",
        "required": false,
        "description": "(v1.0) Number of items to return from the list"
      },
      {
        "name": "$filter",
        "schema": "string",
        "required": false,
        "description": "(v1.0) Filtering expression"
      },
      {
        "name": "$select",
        "schema": "array",
        "description": "(v1.0) Selected properties to be retrieved"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/companies({company_id})/salesCreditMemos({salesCreditMemo_id})/pdfDocument({pdfDocument_id})",
    "method": "getProperties",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "pdfDocument",
    "typeScriptTag": "pdfDocument",
    "description": "Retrieve the properties and relationships of an object of type pdfDocument for Dynamics 365 Business Central.",
    "parameters": [
      {
        "name": "$select",
        "schema": "array",
        "description": "(v1.0) Selected properties to be retrieved"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/companies({company_id})/salesCreditMemoLines",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "salesCreditMemoLine",
    "typeScriptTag": "salesCreditMemoLine",
    "description": "Returns a list of salesCreditMemoLines",
    "parameters": [
      {
        "name": "$top",
        "schema": "integer",
        "required": false,
        "description": "(v1.0) Number of items to return from the top of the list"
      },
      {
        "name": "$skip",
        "schema": "integer",
        "required": false,
        "description": "(v1.0) Number of items to skip from the list"
      },
      {
        "name": "$limit",
        "schema": "integer",
        "required": false,
        "description": "(v1.0) Number of items to return from the list"
      },
      {
        "name": "$filter",
        "schema": "string",
        "required": false,
        "description": "(v1.0) Filtering expression"
      },
      {
        "name": "$expand",
        "schema": "array",
        "description": "(v1.0) Entities to expand"
      },
      {
        "name": "$select",
        "schema": "array",
        "description": "(v1.0) Selected properties to be retrieved"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/companies({company_id})/salesCreditMemoLines",
    "method": "createD365Object",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "salesCreditMemoLine",
    "typeScriptTag": "salesCreditMemoLine",
    "description": "Creates an object of type salesCreditMemoLine in Dynamics 365 Business Central",
    "parameters": [
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "documentId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "sequence",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "itemId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "accountId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lineType",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lineDetails",
        "schema": "object",
        "description": ""
      },
      {
        "name": "unitOfMeasureId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "unitOfMeasure",
        "schema": "object",
        "description": ""
      },
      {
        "name": "unitPrice",
        "schema": "number",
        "description": ""
      },
      {
        "name": "quantity",
        "schema": "number",
        "description": ""
      },
      {
        "name": "discountAmount",
        "schema": "number",
        "description": ""
      },
      {
        "name": "discountPercent",
        "schema": "number",
        "description": ""
      },
      {
        "name": "discountAppliedBeforeTax",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "amountExcludingTax",
        "schema": "number",
        "description": ""
      },
      {
        "name": "taxCode",
        "schema": "string",
        "description": ""
      },
      {
        "name": "taxPercent",
        "schema": "number",
        "description": ""
      },
      {
        "name": "totalTaxAmount",
        "schema": "number",
        "description": ""
      },
      {
        "name": "amountIncludingTax",
        "schema": "number",
        "description": ""
      },
      {
        "name": "invoiceDiscountAllocation",
        "schema": "number",
        "description": ""
      },
      {
        "name": "netAmount",
        "schema": "number",
        "description": ""
      },
      {
        "name": "netTaxAmount",
        "schema": "number",
        "description": ""
      },
      {
        "name": "netAmountIncludingTax",
        "schema": "number",
        "description": ""
      },
      {
        "name": "shipmentDate",
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
    "url": "/companies({company_id})/salesCreditMemoLines('{salesCreditMemoLine_id}')",
    "method": "deleteDynamicsObject",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "salesCreditMemoLine",
    "typeScriptTag": "salesCreditMemoLine",
    "description": "Deletes an object of type salesCreditMemoLine in Dynamics 365 Business Central",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "(v1.0) Succesfully deleted the specified salesCreditMemoLine"
      }
    ]
  },
  {
    "url": "/companies({company_id})/salesCreditMemoLines('{salesCreditMemoLine_id}')",
    "method": "getProperties",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "salesCreditMemoLine",
    "typeScriptTag": "salesCreditMemoLine",
    "description": "Retrieve the properties and relationships of an object of type salesCreditMemoLine for Dynamics 365 Business Central.",
    "parameters": [
      {
        "name": "$expand",
        "schema": "array",
        "description": "(v1.0) Entities to expand"
      },
      {
        "name": "$select",
        "schema": "array",
        "description": "(v1.0) Selected properties to be retrieved"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/companies({company_id})/salesCreditMemoLines('{salesCreditMemoLine_id}')",
    "method": "updateDynamicsObject",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "salesCreditMemoLine",
    "typeScriptTag": "salesCreditMemoLine",
    "description": "Updates an object of type salesCreditMemoLine in Dynamics 365 Business Central",
    "parameters": [
      {
        "name": "ifMatch",
        "schema": "string",
        "required": true,
        "description": "(v1.0) Required. When this request header is included and the eTag provided does not match the current tag on the entity, this will not be updated.",
        "example": "IF-MATCH"
      },
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "documentId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "sequence",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "itemId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "accountId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lineType",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lineDetails",
        "schema": "object",
        "description": ""
      },
      {
        "name": "unitOfMeasureId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "unitOfMeasure",
        "schema": "object",
        "description": ""
      },
      {
        "name": "unitPrice",
        "schema": "number",
        "description": ""
      },
      {
        "name": "quantity",
        "schema": "number",
        "description": ""
      },
      {
        "name": "discountAmount",
        "schema": "number",
        "description": ""
      },
      {
        "name": "discountPercent",
        "schema": "number",
        "description": ""
      },
      {
        "name": "discountAppliedBeforeTax",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "amountExcludingTax",
        "schema": "number",
        "description": ""
      },
      {
        "name": "taxCode",
        "schema": "string",
        "description": ""
      },
      {
        "name": "taxPercent",
        "schema": "number",
        "description": ""
      },
      {
        "name": "totalTaxAmount",
        "schema": "number",
        "description": ""
      },
      {
        "name": "amountIncludingTax",
        "schema": "number",
        "description": ""
      },
      {
        "name": "invoiceDiscountAllocation",
        "schema": "number",
        "description": ""
      },
      {
        "name": "netAmount",
        "schema": "number",
        "description": ""
      },
      {
        "name": "netTaxAmount",
        "schema": "number",
        "description": ""
      },
      {
        "name": "netAmountIncludingTax",
        "schema": "number",
        "description": ""
      },
      {
        "name": "shipmentDate",
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
    "url": "/companies({company_id})/generalLedgerEntryAttachments",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "generalLedgerEntryAttachments",
    "typeScriptTag": "generalLedgerEntryAttachments",
    "description": "Returns a list of generalLedgerEntryAttachments",
    "parameters": [
      {
        "name": "$top",
        "schema": "integer",
        "required": false,
        "description": "(v1.0) Number of items to return from the top of the list"
      },
      {
        "name": "$skip",
        "schema": "integer",
        "required": false,
        "description": "(v1.0) Number of items to skip from the list"
      },
      {
        "name": "$limit",
        "schema": "integer",
        "required": false,
        "description": "(v1.0) Number of items to return from the list"
      },
      {
        "name": "$filter",
        "schema": "string",
        "required": false,
        "description": "(v1.0) Filtering expression"
      },
      {
        "name": "$expand",
        "schema": "array",
        "description": "(v1.0) Entities to expand"
      },
      {
        "name": "$select",
        "schema": "array",
        "description": "(v1.0) Selected properties to be retrieved"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/companies({company_id})/generalLedgerEntryAttachments",
    "method": "createD365Object",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "generalLedgerEntryAttachments",
    "typeScriptTag": "generalLedgerEntryAttachments",
    "description": "Creates an object of type generalLedgerEntryAttachments in Dynamics 365 Business Central",
    "parameters": [
      {
        "name": "generalLedgerEntryNumber",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "fileName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "byteSize",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "content",
        "schema": "string",
        "description": ""
      },
      {
        "name": "createdDateTime",
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
    "url": "/companies({company_id})/generalLedgerEntryAttachments({generalLedgerEntryAttachments_generalLedgerEntryNumber},{generalLedgerEntryAttachments_id})",
    "method": "deleteD365Object",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "generalLedgerEntryAttachments",
    "typeScriptTag": "generalLedgerEntryAttachments",
    "description": "Deletes an object of type generalLedgerEntryAttachments in Dynamics 365 Business Central",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "(v1.0) Succesfully deleted the specified generalLedgerEntryAttachments"
      }
    ]
  },
  {
    "url": "/companies({company_id})/generalLedgerEntryAttachments({generalLedgerEntryAttachments_generalLedgerEntryNumber},{generalLedgerEntryAttachments_id})",
    "method": "getProperties",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "generalLedgerEntryAttachments",
    "typeScriptTag": "generalLedgerEntryAttachments",
    "description": "Retrieve the properties and relationships of an object of type generalLedgerEntryAttachments for Dynamics 365 Business Central.",
    "parameters": [
      {
        "name": "$expand",
        "schema": "array",
        "description": "(v1.0) Entities to expand"
      },
      {
        "name": "$select",
        "schema": "array",
        "description": "(v1.0) Selected properties to be retrieved"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/companies({company_id})/generalLedgerEntryAttachments({generalLedgerEntryAttachments_generalLedgerEntryNumber},{generalLedgerEntryAttachments_id})",
    "method": "updateDynamicsObject",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "generalLedgerEntryAttachments",
    "typeScriptTag": "generalLedgerEntryAttachments",
    "description": "Updates an object of type generalLedgerEntryAttachments in Dynamics 365 Business Central",
    "parameters": [
      {
        "name": "ifMatch",
        "schema": "string",
        "required": true,
        "description": "(v1.0) Required. When this request header is included and the eTag provided does not match the current tag on the entity, this will not be updated.",
        "example": "IF-MATCH"
      },
      {
        "name": "generalLedgerEntryNumber",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "fileName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "byteSize",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "content",
        "schema": "string",
        "description": ""
      },
      {
        "name": "createdDateTime",
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
    "url": "/companies({company_id})/purchaseInvoices",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "purchaseInvoice",
    "typeScriptTag": "purchaseInvoice",
    "description": "Returns a list of purchaseInvoices",
    "parameters": [
      {
        "name": "$top",
        "schema": "integer",
        "required": false,
        "description": "(v1.0) Number of items to return from the top of the list"
      },
      {
        "name": "$skip",
        "schema": "integer",
        "required": false,
        "description": "(v1.0) Number of items to skip from the list"
      },
      {
        "name": "$limit",
        "schema": "integer",
        "required": false,
        "description": "(v1.0) Number of items to return from the list"
      },
      {
        "name": "$filter",
        "schema": "string",
        "required": false,
        "description": "(v1.0) Filtering expression"
      },
      {
        "name": "$expand",
        "schema": "array",
        "description": "(v1.0) Entities to expand"
      },
      {
        "name": "$select",
        "schema": "array",
        "description": "(v1.0) Selected properties to be retrieved"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/companies({company_id})/purchaseInvoices",
    "method": "createDynamicsObject",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "purchaseInvoice",
    "typeScriptTag": "purchaseInvoice",
    "description": "Creates an object of type purchaseInvoice in Dynamics 365 Business Central",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "number",
        "schema": "string",
        "description": ""
      },
      {
        "name": "invoiceDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "dueDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "vendorInvoiceNumber",
        "schema": "string",
        "description": ""
      },
      {
        "name": "vendorId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "vendorNumber",
        "schema": "string",
        "description": ""
      },
      {
        "name": "vendorName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "payToName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "payToContact",
        "schema": "string",
        "description": ""
      },
      {
        "name": "payToVendorId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "payToVendorNumber",
        "schema": "string",
        "description": ""
      },
      {
        "name": "shipToName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "shipToContact",
        "schema": "string",
        "description": ""
      },
      {
        "name": "buyFromAddress",
        "schema": "object",
        "description": ""
      },
      {
        "name": "payToAddress",
        "schema": "object",
        "description": ""
      },
      {
        "name": "shipToAddress",
        "schema": "object",
        "description": ""
      },
      {
        "name": "currencyId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "currencyCode",
        "schema": "string",
        "description": ""
      },
      {
        "name": "pricesIncludeTax",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "discountAmount",
        "schema": "number",
        "description": ""
      },
      {
        "name": "discountAppliedBeforeTax",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "totalAmountExcludingTax",
        "schema": "number",
        "description": ""
      },
      {
        "name": "totalTaxAmount",
        "schema": "number",
        "description": ""
      },
      {
        "name": "totalAmountIncludingTax",
        "schema": "number",
        "description": ""
      },
      {
        "name": "status",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lastModifiedDateTime",
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
    "url": "/companies({company_id})/purchaseInvoices({purchaseInvoice_id})",
    "method": "deleteDynamicsObject",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "purchaseInvoice",
    "typeScriptTag": "purchaseInvoice",
    "description": "Deletes an object of type purchaseInvoice in Dynamics 365 Business Central",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "(v1.0) Succesfully deleted the specified purchaseInvoice"
      }
    ]
  },
  {
    "url": "/companies({company_id})/purchaseInvoices({purchaseInvoice_id})",
    "method": "getProperties",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "purchaseInvoice",
    "typeScriptTag": "purchaseInvoice",
    "description": "Retrieve the properties and relationships of an object of type purchaseInvoice for Dynamics 365 Business Central.",
    "parameters": [
      {
        "name": "$expand",
        "schema": "array",
        "description": "(v1.0) Entities to expand"
      },
      {
        "name": "$select",
        "schema": "array",
        "description": "(v1.0) Selected properties to be retrieved"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/companies({company_id})/purchaseInvoices({purchaseInvoice_id})",
    "method": "updateDynamicsObject",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "purchaseInvoice",
    "typeScriptTag": "purchaseInvoice",
    "description": "Updates an object of type purchaseInvoice in Dynamics 365 Business Central",
    "parameters": [
      {
        "name": "ifMatch",
        "schema": "string",
        "required": true,
        "description": "(v1.0) Required. When this request header is included and the eTag provided does not match the current tag on the entity, this will not be updated.",
        "example": "IF-MATCH"
      },
      {
        "name": "id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "number",
        "schema": "string",
        "description": ""
      },
      {
        "name": "invoiceDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "dueDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "vendorInvoiceNumber",
        "schema": "string",
        "description": ""
      },
      {
        "name": "vendorId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "vendorNumber",
        "schema": "string",
        "description": ""
      },
      {
        "name": "vendorName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "payToName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "payToContact",
        "schema": "string",
        "description": ""
      },
      {
        "name": "payToVendorId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "payToVendorNumber",
        "schema": "string",
        "description": ""
      },
      {
        "name": "shipToName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "shipToContact",
        "schema": "string",
        "description": ""
      },
      {
        "name": "buyFromAddress",
        "schema": "object",
        "description": ""
      },
      {
        "name": "payToAddress",
        "schema": "object",
        "description": ""
      },
      {
        "name": "shipToAddress",
        "schema": "object",
        "description": ""
      },
      {
        "name": "currencyId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "currencyCode",
        "schema": "string",
        "description": ""
      },
      {
        "name": "pricesIncludeTax",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "discountAmount",
        "schema": "number",
        "description": ""
      },
      {
        "name": "discountAppliedBeforeTax",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "totalAmountExcludingTax",
        "schema": "number",
        "description": ""
      },
      {
        "name": "totalTaxAmount",
        "schema": "number",
        "description": ""
      },
      {
        "name": "totalAmountIncludingTax",
        "schema": "number",
        "description": ""
      },
      {
        "name": "status",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lastModifiedDateTime",
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
    "url": "/companies({company_id})/purchaseInvoices({purchaseInvoice_id})/Microsoft.NAV.post",
    "method": "postAction",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "purchaseInvoice",
    "typeScriptTag": "purchaseInvoice",
    "description": "Performs the post action for purchaseInvoices entity",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "(v1.0) Succesfully performed a post action on the Dynamic 365 Business Central purchaseInvoices entity"
      }
    ]
  },
  {
    "url": "/companies({company_id})/purchaseInvoices({purchaseInvoice_id})/purchaseInvoiceLines",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "purchaseInvoiceLine",
    "typeScriptTag": "purchaseInvoiceLine",
    "description": "Returns a list of purchaseInvoiceLines",
    "parameters": [
      {
        "name": "$top",
        "schema": "integer",
        "required": false,
        "description": "(v1.0) Number of items to return from the top of the list"
      },
      {
        "name": "$skip",
        "schema": "integer",
        "required": false,
        "description": "(v1.0) Number of items to skip from the list"
      },
      {
        "name": "$limit",
        "schema": "integer",
        "required": false,
        "description": "(v1.0) Number of items to return from the list"
      },
      {
        "name": "$filter",
        "schema": "string",
        "required": false,
        "description": "(v1.0) Filtering expression"
      },
      {
        "name": "$expand",
        "schema": "array",
        "description": "(v1.0) Entities to expand"
      },
      {
        "name": "$select",
        "schema": "array",
        "description": "(v1.0) Selected properties to be retrieved"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/companies({company_id})/purchaseInvoices({purchaseInvoice_id})/purchaseInvoiceLines",
    "method": "createD365Object",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "purchaseInvoiceLine",
    "typeScriptTag": "purchaseInvoiceLine",
    "description": "Creates an object of type purchaseInvoiceLine in Dynamics 365 Business Central",
    "parameters": [
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "documentId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "sequence",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "itemId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "accountId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lineType",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lineDetails",
        "schema": "object",
        "description": ""
      },
      {
        "name": "unitOfMeasure",
        "schema": "object",
        "description": ""
      },
      {
        "name": "unitCost",
        "schema": "number",
        "description": ""
      },
      {
        "name": "quantity",
        "schema": "number",
        "description": ""
      },
      {
        "name": "discountAmount",
        "schema": "number",
        "description": ""
      },
      {
        "name": "discountPercent",
        "schema": "number",
        "description": ""
      },
      {
        "name": "discountAppliedBeforeTax",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "amountExcludingTax",
        "schema": "number",
        "description": ""
      },
      {
        "name": "taxCode",
        "schema": "string",
        "description": ""
      },
      {
        "name": "taxPercent",
        "schema": "number",
        "description": ""
      },
      {
        "name": "totalTaxAmount",
        "schema": "number",
        "description": ""
      },
      {
        "name": "amountIncludingTax",
        "schema": "number",
        "description": ""
      },
      {
        "name": "invoiceDiscountAllocation",
        "schema": "number",
        "description": ""
      },
      {
        "name": "netAmount",
        "schema": "number",
        "description": ""
      },
      {
        "name": "netTaxAmount",
        "schema": "number",
        "description": ""
      },
      {
        "name": "netAmountIncludingTax",
        "schema": "number",
        "description": ""
      },
      {
        "name": "expectedReceiptDate",
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
    "url": "/companies({company_id})/purchaseInvoices({purchaseInvoice_id})/purchaseInvoiceLines('{purchaseInvoiceLine_id}')",
    "method": "delete",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "purchaseInvoiceLine",
    "typeScriptTag": "purchaseInvoiceLine",
    "description": "Deletes an object of type purchaseInvoiceLine in Dynamics 365 Business Central",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "(v1.0) Succesfully deleted the specified purchaseInvoiceLine"
      }
    ]
  },
  {
    "url": "/companies({company_id})/purchaseInvoices({purchaseInvoice_id})/purchaseInvoiceLines('{purchaseInvoiceLine_id}')",
    "method": "getProperties",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "purchaseInvoiceLine",
    "typeScriptTag": "purchaseInvoiceLine",
    "description": "Retrieve the properties and relationships of an object of type purchaseInvoiceLine for Dynamics 365 Business Central.",
    "parameters": [
      {
        "name": "$expand",
        "schema": "array",
        "description": "(v1.0) Entities to expand"
      },
      {
        "name": "$select",
        "schema": "array",
        "description": "(v1.0) Selected properties to be retrieved"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/companies({company_id})/purchaseInvoices({purchaseInvoice_id})/purchaseInvoiceLines('{purchaseInvoiceLine_id}')",
    "method": "updateDynamicsObject",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "purchaseInvoiceLine",
    "typeScriptTag": "purchaseInvoiceLine",
    "description": "Updates an object of type purchaseInvoiceLine in Dynamics 365 Business Central",
    "parameters": [
      {
        "name": "ifMatch",
        "schema": "string",
        "required": true,
        "description": "(v1.0) Required. When this request header is included and the eTag provided does not match the current tag on the entity, this will not be updated.",
        "example": "IF-MATCH"
      },
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "documentId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "sequence",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "itemId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "accountId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lineType",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lineDetails",
        "schema": "object",
        "description": ""
      },
      {
        "name": "unitOfMeasure",
        "schema": "object",
        "description": ""
      },
      {
        "name": "unitCost",
        "schema": "number",
        "description": ""
      },
      {
        "name": "quantity",
        "schema": "number",
        "description": ""
      },
      {
        "name": "discountAmount",
        "schema": "number",
        "description": ""
      },
      {
        "name": "discountPercent",
        "schema": "number",
        "description": ""
      },
      {
        "name": "discountAppliedBeforeTax",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "amountExcludingTax",
        "schema": "number",
        "description": ""
      },
      {
        "name": "taxCode",
        "schema": "string",
        "description": ""
      },
      {
        "name": "taxPercent",
        "schema": "number",
        "description": ""
      },
      {
        "name": "totalTaxAmount",
        "schema": "number",
        "description": ""
      },
      {
        "name": "amountIncludingTax",
        "schema": "number",
        "description": ""
      },
      {
        "name": "invoiceDiscountAllocation",
        "schema": "number",
        "description": ""
      },
      {
        "name": "netAmount",
        "schema": "number",
        "description": ""
      },
      {
        "name": "netTaxAmount",
        "schema": "number",
        "description": ""
      },
      {
        "name": "netAmountIncludingTax",
        "schema": "number",
        "description": ""
      },
      {
        "name": "expectedReceiptDate",
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
    "url": "/companies({company_id})/purchaseInvoices({purchaseInvoice_id})/pdfDocument",
    "method": "getPdf",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "pdfDocument",
    "typeScriptTag": "pdfDocument",
    "description": "Returns a list of pdfDocument",
    "parameters": [
      {
        "name": "$top",
        "schema": "integer",
        "required": false,
        "description": "(v1.0) Number of items to return from the top of the list"
      },
      {
        "name": "$skip",
        "schema": "integer",
        "required": false,
        "description": "(v1.0) Number of items to skip from the list"
      },
      {
        "name": "$limit",
        "schema": "integer",
        "required": false,
        "description": "(v1.0) Number of items to return from the list"
      },
      {
        "name": "$filter",
        "schema": "string",
        "required": false,
        "description": "(v1.0) Filtering expression"
      },
      {
        "name": "$select",
        "schema": "array",
        "description": "(v1.0) Selected properties to be retrieved"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/companies({company_id})/purchaseInvoices({purchaseInvoice_id})/pdfDocument({pdfDocument_id})",
    "method": "getProperties",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "pdfDocument",
    "typeScriptTag": "pdfDocument",
    "description": "Retrieve the properties and relationships of an object of type pdfDocument for Dynamics 365 Business Central.",
    "parameters": [
      {
        "name": "$select",
        "schema": "array",
        "description": "(v1.0) Selected properties to be retrieved"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/companies({company_id})/purchaseInvoiceLines",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "purchaseInvoiceLine",
    "typeScriptTag": "purchaseInvoiceLine",
    "description": "Returns a list of purchaseInvoiceLines",
    "parameters": [
      {
        "name": "$top",
        "schema": "integer",
        "required": false,
        "description": "(v1.0) Number of items to return from the top of the list"
      },
      {
        "name": "$skip",
        "schema": "integer",
        "required": false,
        "description": "(v1.0) Number of items to skip from the list"
      },
      {
        "name": "$limit",
        "schema": "integer",
        "required": false,
        "description": "(v1.0) Number of items to return from the list"
      },
      {
        "name": "$filter",
        "schema": "string",
        "required": false,
        "description": "(v1.0) Filtering expression"
      },
      {
        "name": "$expand",
        "schema": "array",
        "description": "(v1.0) Entities to expand"
      },
      {
        "name": "$select",
        "schema": "array",
        "description": "(v1.0) Selected properties to be retrieved"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/companies({company_id})/purchaseInvoiceLines",
    "method": "createDynamicsObject",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "purchaseInvoiceLine",
    "typeScriptTag": "purchaseInvoiceLine",
    "description": "Creates an object of type purchaseInvoiceLine in Dynamics 365 Business Central",
    "parameters": [
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "documentId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "sequence",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "itemId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "accountId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lineType",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lineDetails",
        "schema": "object",
        "description": ""
      },
      {
        "name": "unitOfMeasure",
        "schema": "object",
        "description": ""
      },
      {
        "name": "unitCost",
        "schema": "number",
        "description": ""
      },
      {
        "name": "quantity",
        "schema": "number",
        "description": ""
      },
      {
        "name": "discountAmount",
        "schema": "number",
        "description": ""
      },
      {
        "name": "discountPercent",
        "schema": "number",
        "description": ""
      },
      {
        "name": "discountAppliedBeforeTax",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "amountExcludingTax",
        "schema": "number",
        "description": ""
      },
      {
        "name": "taxCode",
        "schema": "string",
        "description": ""
      },
      {
        "name": "taxPercent",
        "schema": "number",
        "description": ""
      },
      {
        "name": "totalTaxAmount",
        "schema": "number",
        "description": ""
      },
      {
        "name": "amountIncludingTax",
        "schema": "number",
        "description": ""
      },
      {
        "name": "invoiceDiscountAllocation",
        "schema": "number",
        "description": ""
      },
      {
        "name": "netAmount",
        "schema": "number",
        "description": ""
      },
      {
        "name": "netTaxAmount",
        "schema": "number",
        "description": ""
      },
      {
        "name": "netAmountIncludingTax",
        "schema": "number",
        "description": ""
      },
      {
        "name": "expectedReceiptDate",
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
    "url": "/companies({company_id})/purchaseInvoiceLines('{purchaseInvoiceLine_id}')",
    "method": "deleteObject",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "purchaseInvoiceLine",
    "typeScriptTag": "purchaseInvoiceLine",
    "description": "Deletes an object of type purchaseInvoiceLine in Dynamics 365 Business Central",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "(v1.0) Succesfully deleted the specified purchaseInvoiceLine"
      }
    ]
  },
  {
    "url": "/companies({company_id})/purchaseInvoiceLines('{purchaseInvoiceLine_id}')",
    "method": "getProperties",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "purchaseInvoiceLine",
    "typeScriptTag": "purchaseInvoiceLine",
    "description": "Retrieve the properties and relationships of an object of type purchaseInvoiceLine for Dynamics 365 Business Central.",
    "parameters": [
      {
        "name": "$expand",
        "schema": "array",
        "description": "(v1.0) Entities to expand"
      },
      {
        "name": "$select",
        "schema": "array",
        "description": "(v1.0) Selected properties to be retrieved"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/companies({company_id})/purchaseInvoiceLines('{purchaseInvoiceLine_id}')",
    "method": "updateObject",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "purchaseInvoiceLine",
    "typeScriptTag": "purchaseInvoiceLine",
    "description": "Updates an object of type purchaseInvoiceLine in Dynamics 365 Business Central",
    "parameters": [
      {
        "name": "ifMatch",
        "schema": "string",
        "required": true,
        "description": "(v1.0) Required. When this request header is included and the eTag provided does not match the current tag on the entity, this will not be updated.",
        "example": "IF-MATCH"
      },
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "documentId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "sequence",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "itemId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "accountId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lineType",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lineDetails",
        "schema": "object",
        "description": ""
      },
      {
        "name": "unitOfMeasure",
        "schema": "object",
        "description": ""
      },
      {
        "name": "unitCost",
        "schema": "number",
        "description": ""
      },
      {
        "name": "quantity",
        "schema": "number",
        "description": ""
      },
      {
        "name": "discountAmount",
        "schema": "number",
        "description": ""
      },
      {
        "name": "discountPercent",
        "schema": "number",
        "description": ""
      },
      {
        "name": "discountAppliedBeforeTax",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "amountExcludingTax",
        "schema": "number",
        "description": ""
      },
      {
        "name": "taxCode",
        "schema": "string",
        "description": ""
      },
      {
        "name": "taxPercent",
        "schema": "number",
        "description": ""
      },
      {
        "name": "totalTaxAmount",
        "schema": "number",
        "description": ""
      },
      {
        "name": "amountIncludingTax",
        "schema": "number",
        "description": ""
      },
      {
        "name": "invoiceDiscountAllocation",
        "schema": "number",
        "description": ""
      },
      {
        "name": "netAmount",
        "schema": "number",
        "description": ""
      },
      {
        "name": "netTaxAmount",
        "schema": "number",
        "description": ""
      },
      {
        "name": "netAmountIncludingTax",
        "schema": "number",
        "description": ""
      },
      {
        "name": "expectedReceiptDate",
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
    "url": "/companies({company_id})/projects",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "project",
    "typeScriptTag": "project",
    "description": "Returns a list of projects",
    "parameters": [
      {
        "name": "$top",
        "schema": "integer",
        "required": false,
        "description": "(v1.0) Number of items to return from the top of the list"
      },
      {
        "name": "$skip",
        "schema": "integer",
        "required": false,
        "description": "(v1.0) Number of items to skip from the list"
      },
      {
        "name": "$limit",
        "schema": "integer",
        "required": false,
        "description": "(v1.0) Number of items to return from the list"
      },
      {
        "name": "$filter",
        "schema": "string",
        "required": false,
        "description": "(v1.0) Filtering expression"
      },
      {
        "name": "$select",
        "schema": "array",
        "description": "(v1.0) Selected properties to be retrieved"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/companies({company_id})/projects",
    "method": "createDynamicsObject",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "project",
    "typeScriptTag": "project",
    "description": "Creates an object of type project in Dynamics 365 Business Central",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "number",
        "schema": "string",
        "description": ""
      },
      {
        "name": "displayName",
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
    "url": "/companies({company_id})/projects({project_id})",
    "method": "deleteD365Object",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "project",
    "typeScriptTag": "project",
    "description": "Deletes an object of type project in Dynamics 365 Business Central",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "(v1.0) Succesfully deleted the specified project"
      }
    ]
  },
  {
    "url": "/companies({company_id})/projects({project_id})",
    "method": "getProperties",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "project",
    "typeScriptTag": "project",
    "description": "Retrieve the properties and relationships of an object of type project for Dynamics 365 Business Central.",
    "parameters": [
      {
        "name": "$select",
        "schema": "array",
        "description": "(v1.0) Selected properties to be retrieved"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/companies({company_id})/projects({project_id})",
    "method": "updateDynamicsObject",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "project",
    "typeScriptTag": "project",
    "description": "Updates an object of type project in Dynamics 365 Business Central",
    "parameters": [
      {
        "name": "ifMatch",
        "schema": "string",
        "required": true,
        "description": "(v1.0) Required. When this request header is included and the eTag provided does not match the current tag on the entity, this will not be updated.",
        "example": "IF-MATCH"
      },
      {
        "name": "id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "number",
        "schema": "string",
        "description": ""
      },
      {
        "name": "displayName",
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
    "url": "/companies({company_id})/bankAccounts",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "bankAccount",
    "typeScriptTag": "bankAccount",
    "description": "Returns a list of bankAccounts",
    "parameters": [
      {
        "name": "$top",
        "schema": "integer",
        "required": false,
        "description": "(v1.0) Number of items to return from the top of the list"
      },
      {
        "name": "$skip",
        "schema": "integer",
        "required": false,
        "description": "(v1.0) Number of items to skip from the list"
      },
      {
        "name": "$limit",
        "schema": "integer",
        "required": false,
        "description": "(v1.0) Number of items to return from the list"
      },
      {
        "name": "$filter",
        "schema": "string",
        "required": false,
        "description": "(v1.0) Filtering expression"
      },
      {
        "name": "$select",
        "schema": "array",
        "description": "(v1.0) Selected properties to be retrieved"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/companies({company_id})/bankAccounts",
    "method": "createDynamicsObject",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "bankAccount",
    "typeScriptTag": "bankAccount",
    "description": "Creates an object of type bankAccount in Dynamics 365 Business Central",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "number",
        "schema": "string",
        "description": ""
      },
      {
        "name": "displayName",
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
    "url": "/companies({company_id})/bankAccounts({bankAccount_id})",
    "method": "deleteDynamicsObject",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "bankAccount",
    "typeScriptTag": "bankAccount",
    "description": "Deletes an object of type bankAccount in Dynamics 365 Business Central",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "(v1.0) Succesfully deleted the specified bankAccount"
      }
    ]
  },
  {
    "url": "/companies({company_id})/bankAccounts({bankAccount_id})",
    "method": "getProperties",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "bankAccount",
    "typeScriptTag": "bankAccount",
    "description": "Retrieve the properties and relationships of an object of type bankAccount for Dynamics 365 Business Central.",
    "parameters": [
      {
        "name": "$select",
        "schema": "array",
        "description": "(v1.0) Selected properties to be retrieved"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/companies({company_id})/bankAccounts({bankAccount_id})",
    "method": "updateDynamicsObject",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "bankAccount",
    "typeScriptTag": "bankAccount",
    "description": "Updates an object of type bankAccount in Dynamics 365 Business Central",
    "parameters": [
      {
        "name": "ifMatch",
        "schema": "string",
        "required": true,
        "description": "(v1.0) Required. When this request header is included and the eTag provided does not match the current tag on the entity, this will not be updated.",
        "example": "IF-MATCH"
      },
      {
        "name": "id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "number",
        "schema": "string",
        "description": ""
      },
      {
        "name": "displayName",
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
    "url": "/companies({company_id})/customerSales",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "customerSale",
    "typeScriptTag": "customerSale",
    "description": "Returns a list of customerSales",
    "parameters": [
      {
        "name": "$top",
        "schema": "integer",
        "required": false,
        "description": "(v1.0) Number of items to return from the top of the list"
      },
      {
        "name": "$skip",
        "schema": "integer",
        "required": false,
        "description": "(v1.0) Number of items to skip from the list"
      },
      {
        "name": "$limit",
        "schema": "integer",
        "required": false,
        "description": "(v1.0) Number of items to return from the list"
      },
      {
        "name": "$filter",
        "schema": "string",
        "required": false,
        "description": "(v1.0) Filtering expression"
      },
      {
        "name": "$select",
        "schema": "array",
        "description": "(v1.0) Selected properties to be retrieved"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/companies({company_id})/customerSales({customerSale_customerId},'{customerSale_customerNumber}','{customerSale_name}')",
    "method": "getProperties",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "customerSale",
    "typeScriptTag": "customerSale",
    "description": "Retrieve the properties and relationships of an object of type customerSale for Dynamics 365 Business Central.",
    "parameters": [
      {
        "name": "$select",
        "schema": "array",
        "description": "(v1.0) Selected properties to be retrieved"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/companies({company_id})/vendorPurchases",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "vendorPurchase",
    "typeScriptTag": "vendorPurchase",
    "description": "Returns a list of vendorPurchases",
    "parameters": [
      {
        "name": "$top",
        "schema": "integer",
        "required": false,
        "description": "(v1.0) Number of items to return from the top of the list"
      },
      {
        "name": "$skip",
        "schema": "integer",
        "required": false,
        "description": "(v1.0) Number of items to skip from the list"
      },
      {
        "name": "$limit",
        "schema": "integer",
        "required": false,
        "description": "(v1.0) Number of items to return from the list"
      },
      {
        "name": "$filter",
        "schema": "string",
        "required": false,
        "description": "(v1.0) Filtering expression"
      },
      {
        "name": "$select",
        "schema": "array",
        "description": "(v1.0) Selected properties to be retrieved"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/companies({company_id})/vendorPurchases({vendorPurchase_vendorId},'{vendorPurchase_vendorNumber}','{vendorPurchase_name}')",
    "method": "getProperties",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "vendorPurchase",
    "typeScriptTag": "vendorPurchase",
    "description": "Retrieve the properties and relationships of an object of type vendorPurchase for Dynamics 365 Business Central.",
    "parameters": [
      {
        "name": "$select",
        "schema": "array",
        "description": "(v1.0) Selected properties to be retrieved"
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
      apiTitle="(v1.0) Dynamics 365 Business Central"
      apiBaseUrl="https://api.businesscentral.dynamics.com/v2.0/sandbox/api/v1.0"
      apiVersion="1.0.0"
      endpoints={169}
      sdkMethods={492}
      schemas={162}
      parameters={2120}
      difficulty="Very Hard"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/microsoft/dynamics-365-business-central/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/microsoft/dynamics-365-business-central/openapi.yaml"
      developerDocumentation="learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/api-reference/v2.0/"
    />
  );
}
  