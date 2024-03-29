import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function InnoshipTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="innoship-typescript-sdk"
      metaDescription={`Innoship is the advanced delivery management platform that helps retailers to improve customer experience by streamlining the delivery process. We combined our eCommerce logistics expertise with all the enterprise features you need to master last-mile customer experience. 

Backed by Abris Capital Partners, the ESG transformation specialist private equity investor, Innoship is now part of Alsendo group, the leading eCommerce shipping solutions technologies in the CEE region.

From checkout and shipping to tracking, returns and analytics, Innoship helps you safely deliver on promises made to your customers. 

Effortless integration, hassle-free delivery
•	A simple, one-time integration with the Innoship app allows retailers to access any carrier, local or international.
•	External markets become readily available with seamless connections to hundreds of carriers in 15+ countries.`}
      company="Innoship"
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/innoship/logo.png"
      companyKebabCase="innoship"
      clientNameCamelCase="innoship"
      homepage="innoship.io"
      lastUpdated={new Date("2024-03-29T22:11:39.095Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/innoship/favicon.png"
      // Missing contactUrl
      contactEmail="andrei@innoship.ro"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/innoship/imagePreview.jpg"
      GettingStarted={GettingStarted}
      FirstRequest={FirstRequest}
      categories={["shipping_api","logistics_provider","shipping_integration"]}
      methods={[
  {
    "url": "/api/ClientLocation",
    "method": "getDetail",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "ClientLocation",
    "typeScriptTag": "clientLocation",
    "description": "",
    "parameters": [
      {
        "name": "countryCode",
        "schema": "string",
        "description": ""
      },
      {
        "name": "apiVersion",
        "schema": "string",
        "required": true,
        "description": "The requested API version",
        "example": "API-VERSION",
        "default": "1.0"
      },
      {
        "name": "apiVersion",
        "schema": "string",
        "description": "The requested API version",
        "default": "1.0"
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
    "url": "/api/ClientLocation",
    "method": "createNew",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "ClientLocation",
    "typeScriptTag": "clientLocation",
    "description": "",
    "parameters": [
      {
        "name": "apiVersion",
        "schema": "string",
        "required": true,
        "description": "The requested API version",
        "example": "API-VERSION",
        "default": "1.0"
      },
      {
        "name": "apiVersion",
        "schema": "string",
        "description": "The requested API version",
        "default": "1.0"
      },
      {
        "name": "address",
        "schema": "object",
        "description": ""
      },
      {
        "name": "courierCutOffTimes",
        "schema": "string",
        "description": ""
      },
      {
        "name": "courierAutomaticCallTimes",
        "schema": "string",
        "description": ""
      },
      {
        "name": "useSameCourierForSameAddress",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "courierFailPolicy",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "timeZoneId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "priceGroupId",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "notificationEmail",
        "schema": "string",
        "description": ""
      },
      {
        "name": "notificationPhone",
        "schema": "string",
        "description": ""
      },
      {
        "name": "courierVoucherService",
        "schema": "object",
        "description": ""
      },
      {
        "name": "marketPlaceCallBackSettings",
        "schema": "object",
        "description": ""
      },
      {
        "name": "importIsActive",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "setHandoverOnManifest",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "id",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "externalLocationId",
        "schema": "string",
        "description": ""
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
    "url": "/api/ClientLocation/{id}",
    "method": "removeById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "ClientLocation",
    "typeScriptTag": "clientLocation",
    "description": "",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "apiVersion",
        "schema": "string",
        "required": true,
        "description": "The requested API version",
        "example": "API-VERSION",
        "default": "1.0"
      },
      {
        "name": "apiVersion",
        "schema": "string",
        "description": "The requested API version",
        "default": "1.0"
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
    "url": "/api/ClientLocation/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "ClientLocation",
    "typeScriptTag": "clientLocation",
    "description": "",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "apiVersion",
        "schema": "string",
        "required": true,
        "description": "The requested API version",
        "example": "API-VERSION",
        "default": "1.0"
      },
      {
        "name": "apiVersion",
        "schema": "string",
        "description": "The requested API version",
        "default": "1.0"
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
    "url": "/api/ClientLocation/{id}",
    "method": "updateById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "ClientLocation",
    "typeScriptTag": "clientLocation",
    "description": "",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "apiVersion",
        "schema": "string",
        "required": true,
        "description": "The requested API version",
        "example": "API-VERSION",
        "default": "1.0"
      },
      {
        "name": "apiVersion",
        "schema": "string",
        "description": "The requested API version",
        "default": "1.0"
      },
      {
        "name": "address",
        "schema": "object",
        "description": ""
      },
      {
        "name": "courierCutOffTimes",
        "schema": "string",
        "description": ""
      },
      {
        "name": "courierAutomaticCallTimes",
        "schema": "string",
        "description": ""
      },
      {
        "name": "useSameCourierForSameAddress",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "courierFailPolicy",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "timeZoneId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "priceGroupId",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "notificationEmail",
        "schema": "string",
        "description": ""
      },
      {
        "name": "notificationPhone",
        "schema": "string",
        "description": ""
      },
      {
        "name": "courierVoucherService",
        "schema": "object",
        "description": ""
      },
      {
        "name": "marketPlaceCallBackSettings",
        "schema": "object",
        "description": ""
      },
      {
        "name": "importIsActive",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "setHandoverOnManifest",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "id",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "externalLocationId",
        "schema": "string",
        "description": ""
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
    "url": "/api/ClientLocation/Summary",
    "method": "createSummaryReport",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "ClientLocation",
    "typeScriptTag": "clientLocation",
    "description": "",
    "parameters": [
      {
        "name": "apiVersion",
        "schema": "string",
        "required": true,
        "description": "The requested API version",
        "example": "API-VERSION",
        "default": "1.0"
      },
      {
        "name": "apiVersion",
        "schema": "string",
        "description": "The requested API version",
        "default": "1.0"
      },
      {
        "name": "name",
        "schema": "array",
        "description": ""
      },
      {
        "name": "countryId",
        "schema": "array",
        "description": ""
      },
      {
        "name": "countyId",
        "schema": "array",
        "description": ""
      },
      {
        "name": "localityId",
        "schema": "array",
        "description": ""
      },
      {
        "name": "addressText",
        "schema": "string",
        "description": ""
      },
      {
        "name": "courierId",
        "schema": "array",
        "description": ""
      },
      {
        "name": "ids",
        "schema": "array",
        "description": ""
      },
      {
        "name": "createdAtLe",
        "schema": "string",
        "description": ""
      },
      {
        "name": "createdAtGe",
        "schema": "string",
        "description": ""
      },
      {
        "name": "userId",
        "schema": "array",
        "description": ""
      },
      {
        "name": "skip",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "take",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "orderBy",
        "schema": "string",
        "description": ""
      },
      {
        "name": "orderByAsc",
        "schema": "boolean",
        "description": ""
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
    "url": "/api/ClientLocation/Validate",
    "method": "validateLocationDetails",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "ClientLocation",
    "typeScriptTag": "clientLocation",
    "description": "",
    "parameters": [
      {
        "name": "apiVersion",
        "schema": "string",
        "required": true,
        "description": "The requested API version",
        "example": "API-VERSION",
        "default": "1.0"
      },
      {
        "name": "apiVersion",
        "schema": "string",
        "description": "The requested API version",
        "default": "1.0"
      },
      {
        "name": "address",
        "schema": "object",
        "description": ""
      },
      {
        "name": "courierCutOffTimes",
        "schema": "string",
        "description": ""
      },
      {
        "name": "courierAutomaticCallTimes",
        "schema": "string",
        "description": ""
      },
      {
        "name": "useSameCourierForSameAddress",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "courierFailPolicy",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "timeZoneId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "priceGroupId",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "notificationEmail",
        "schema": "string",
        "description": ""
      },
      {
        "name": "notificationPhone",
        "schema": "string",
        "description": ""
      },
      {
        "name": "courierVoucherService",
        "schema": "object",
        "description": ""
      },
      {
        "name": "marketPlaceCallBackSettings",
        "schema": "object",
        "description": ""
      },
      {
        "name": "importIsActive",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "setHandoverOnManifest",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "courierServices",
        "schema": "array",
        "description": ""
      },
      {
        "name": "id",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "externalLocationId",
        "schema": "string",
        "description": ""
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
    "url": "/api/ClientLocation/{locationId}/Courier",
    "method": "createCourier",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "ClientLocation",
    "typeScriptTag": "clientLocation",
    "description": "",
    "parameters": [
      {
        "name": "locationId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "apiVersion",
        "schema": "string",
        "required": true,
        "description": "The requested API version",
        "example": "API-VERSION",
        "default": "1.0"
      },
      {
        "name": "apiVersion",
        "schema": "string",
        "description": "The requested API version",
        "default": "1.0"
      },
      {
        "name": "courierId",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "isEmagMarketPlace",
        "schema": "boolean",
        "description": ""
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
    "url": "/api/ClientLocation/{locationId}/Courier/{courierId}",
    "method": "removeCourierById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "ClientLocation",
    "typeScriptTag": "clientLocation",
    "description": "",
    "parameters": [
      {
        "name": "locationId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "courierId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "force",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "isEmagMarketPlace",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "apiVersion",
        "schema": "string",
        "required": true,
        "description": "The requested API version",
        "example": "API-VERSION",
        "default": "1.0"
      },
      {
        "name": "apiVersion",
        "schema": "string",
        "description": "The requested API version",
        "default": "1.0"
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
    "url": "/api/ClientLocation/{locationId}/CourierServices",
    "method": "updateCourierServices",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "ClientLocation",
    "typeScriptTag": "clientLocation",
    "description": "",
    "parameters": [
      {
        "name": "locationId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "applyToAllLocations",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "apiVersion",
        "schema": "string",
        "required": true,
        "description": "The requested API version",
        "example": "API-VERSION",
        "default": "1.0"
      },
      {
        "name": "apiVersion",
        "schema": "string",
        "description": "The requested API version",
        "default": "1.0"
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
    "url": "/api/ClientLocation/{locationId}/CourierServices",
    "method": "updateCourierServices",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "ClientLocation",
    "typeScriptTag": "clientLocation",
    "description": "",
    "parameters": [
      {
        "name": "locationId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "applyToAllLocations",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "apiVersion",
        "schema": "string",
        "required": true,
        "description": "The requested API version",
        "example": "API-VERSION",
        "default": "1.0"
      },
      {
        "name": "apiVersion",
        "schema": "string",
        "description": "The requested API version",
        "default": "1.0"
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
    "url": "/api/Courier/RequestPickup",
    "method": "requestPickup",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Courier",
    "typeScriptTag": "courier",
    "description": "Request pickup to courier",
    "parameters": [
      {
        "name": "apiVersion",
        "schema": "string",
        "required": true,
        "description": "The requested API version",
        "example": "API-VERSION",
        "default": "1.0"
      },
      {
        "name": "apiVersion",
        "schema": "string",
        "description": "The requested API version",
        "default": "1.0"
      },
      {
        "name": "courierId",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "locationId",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "lastPickupHour",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "lastPickMinute",
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
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Unable to authorize request"
      }
    ]
  },
  {
    "url": "/api/Courier/All",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Courier",
    "typeScriptTag": "courier",
    "description": "Get all couriers",
    "parameters": [
      {
        "name": "apiVersion",
        "schema": "string",
        "required": true,
        "description": "The requested API version",
        "example": "API-VERSION",
        "default": "1.0"
      },
      {
        "name": "apiVersion",
        "schema": "string",
        "description": "The requested API version",
        "default": "1.0"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Unable to authorize request"
      }
    ]
  },
  {
    "url": "/api/Feedback/{from}/{to}",
    "method": "getBetweenDates",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Feedback",
    "typeScriptTag": "feedback",
    "description": "",
    "parameters": [
      {
        "name": "from",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FROM"
      },
      {
        "name": "to",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TO"
      },
      {
        "name": "apiVersion",
        "schema": "string",
        "required": true,
        "description": "The requested API version",
        "example": "API-VERSION",
        "default": "1.0"
      },
      {
        "name": "apiVersion",
        "schema": "string",
        "description": "The requested API version",
        "default": "1.0"
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
    "url": "/api/Label/by-courier/{courierId}/awb/{awb}",
    "method": "getByCourierAwb",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Label",
    "typeScriptTag": "label",
    "description": "Gets the label for the specified courier awb number",
    "parameters": [
      {
        "name": "courierId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "awb",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "AWB"
      },
      {
        "name": "type",
        "schema": "string",
        "description": "",
        "default": "PDF"
      },
      {
        "name": "format",
        "schema": "string",
        "description": "",
        "default": "A6"
      },
      {
        "name": "includeVoucher",
        "schema": "boolean",
        "description": "",
        "default": false
      },
      {
        "name": "useFile",
        "schema": "boolean",
        "description": "",
        "default": true
      },
      {
        "name": "skipCache",
        "schema": "boolean",
        "description": "",
        "default": false
      },
      {
        "name": "apiVersion",
        "schema": "string",
        "required": true,
        "description": "The requested API version",
        "example": "API-VERSION",
        "default": "1.0"
      },
      {
        "name": "apiVersion",
        "schema": "string",
        "description": "The requested API version",
        "default": "1.0"
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
        "description": "Unable to authorize request"
      }
    ]
  },
  {
    "url": "/api/Label/by-courier/{courierId}/voucher/{awb}",
    "method": "getVoucherByCourierAwb",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Label",
    "typeScriptTag": "label",
    "description": "Gets the voucher label for the specified courier awb number",
    "parameters": [
      {
        "name": "courierId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "awb",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "AWB"
      },
      {
        "name": "type",
        "schema": "string",
        "description": "",
        "default": "PDF"
      },
      {
        "name": "format",
        "schema": "string",
        "description": "",
        "default": "A6"
      },
      {
        "name": "useFile",
        "schema": "boolean",
        "description": "",
        "default": true
      },
      {
        "name": "skipCache",
        "schema": "boolean",
        "description": "",
        "default": false
      },
      {
        "name": "apiVersion",
        "schema": "string",
        "required": true,
        "description": "The requested API version",
        "example": "API-VERSION",
        "default": "1.0"
      },
      {
        "name": "apiVersion",
        "schema": "string",
        "description": "The requested API version",
        "default": "1.0"
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
        "description": "Unable to authorize request"
      }
    ]
  },
  {
    "url": "/api/Label/by-courier/{courierId}/awb/{awb}/parcel/{barcodes}",
    "method": "getByAwbAndParcel",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Label",
    "typeScriptTag": "label",
    "description": "Gets the label for the specified courier parcel barcode and order awb",
    "parameters": [
      {
        "name": "courierId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "awb",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "AWB"
      },
      {
        "name": "barcodes",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "BARCODES"
      },
      {
        "name": "type",
        "schema": "string",
        "description": "",
        "default": "PDF"
      },
      {
        "name": "format",
        "schema": "string",
        "description": "",
        "default": "A6"
      },
      {
        "name": "useFile",
        "schema": "boolean",
        "description": "",
        "default": true
      },
      {
        "name": "skipCache",
        "schema": "boolean",
        "description": "",
        "default": false
      },
      {
        "name": "apiVersion",
        "schema": "string",
        "required": true,
        "description": "The requested API version",
        "example": "API-VERSION",
        "default": "1.0"
      },
      {
        "name": "apiVersion",
        "schema": "string",
        "description": "The requested API version",
        "default": "1.0"
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
        "description": "Unable to authorize request"
      }
    ]
  },
  {
    "url": "/api/Label/bulk",
    "method": "createBulk",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Label",
    "typeScriptTag": "label",
    "description": "Create bulk labels operation",
    "parameters": [
      {
        "name": "apiVersion",
        "schema": "string",
        "required": true,
        "description": "The requested API version",
        "example": "API-VERSION",
        "default": "1.0"
      },
      {
        "name": "apiVersion",
        "schema": "string",
        "description": "The requested API version",
        "default": "1.0"
      },
      {
        "name": "labelType",
        "schema": "string",
        "description": ""
      },
      {
        "name": "labelFormat",
        "schema": "string",
        "description": ""
      },
      {
        "name": "useFile",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "includeVoucher",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "awBs",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Returns OperationId"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Unable to authorize request"
      }
    ]
  },
  {
    "url": "/api/Label/bulk/{operationId}",
    "method": "getBulkByOperationId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Label",
    "typeScriptTag": "label",
    "description": "Get bulk labels by operationId",
    "parameters": [
      {
        "name": "operationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "OPERATIONID"
      },
      {
        "name": "apiVersion",
        "schema": "string",
        "required": true,
        "description": "The requested API version",
        "example": "API-VERSION",
        "default": "1.0"
      },
      {
        "name": "apiVersion",
        "schema": "string",
        "description": "The requested API version",
        "default": "1.0"
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
        "description": "Unable to authorize request"
      }
    ]
  },
  {
    "url": "/api/Location/ClientLocations",
    "method": "getClientLocations",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Location",
    "typeScriptTag": "location",
    "description": "",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      }
    ]
  },
  {
    "url": "/api/Location/FixedLocation/{id}",
    "method": "getFixedLocationById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Location",
    "typeScriptTag": "location",
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
        "description": "Success"
      }
    ]
  },
  {
    "url": "/api/Location/FixedLocations",
    "method": "getFixedLocations",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Location",
    "typeScriptTag": "location",
    "description": "",
    "parameters": [
      {
        "name": "courier",
        "schema": "string",
        "description": ""
      },
      {
        "name": "countryCode",
        "schema": "string",
        "description": ""
      },
      {
        "name": "countyName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "localityName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "fixedLocationType",
        "schema": "string",
        "description": ""
      },
      {
        "name": "showInactive",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "restrictionParcelsCount",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "restrictionSizeHeight",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "restrictionSizeWidth",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "restrictionSizeLength",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "externalLocationId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "latitude",
        "schema": "number",
        "description": ""
      },
      {
        "name": "longitude",
        "schema": "number",
        "description": ""
      },
      {
        "name": "radius",
        "schema": "number",
        "description": ""
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
    "url": "/api/Location/Countries",
    "method": "getCountryList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Location",
    "typeScriptTag": "location",
    "description": "",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      }
    ]
  },
  {
    "url": "/api/Location/Counties/{countryCode}",
    "method": "getCountiesByCountryCode",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Location",
    "typeScriptTag": "location",
    "description": "",
    "parameters": [
      {
        "name": "countryCode",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "COUNTRYCODE"
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
    "url": "/api/Location/Localities/{countyId}",
    "method": "getLocalitiesByCountyId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Location",
    "typeScriptTag": "location",
    "description": "",
    "parameters": [
      {
        "name": "countyId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
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
    "url": "/api/Location/Postalcodes/{CountryCode}/{PostalCode}",
    "method": "getPostalCodeDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Location",
    "typeScriptTag": "location",
    "description": "",
    "parameters": [
      {
        "name": "countryCode",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "COUNTRYCODE"
      },
      {
        "name": "postalCode",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "POSTALCODE"
      },
      {
        "name": "courierId",
        "schema": "integer",
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
    "url": "/api/Location/Postalcodes/{LocalityId}",
    "method": "getPostalcodesByLocalityId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Location",
    "typeScriptTag": "location",
    "description": "",
    "parameters": [
      {
        "name": "localityId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "courierId",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "filter",
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
    "url": "/api/Location/Postalcodes/Country/{CountryCode}",
    "method": "getPostalCodesByCountry",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Location",
    "typeScriptTag": "location",
    "description": "",
    "parameters": [
      {
        "name": "countryCode",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "COUNTRYCODE"
      },
      {
        "name": "courierId",
        "schema": "integer",
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
    "url": "/api/Manifest",
    "method": "reportById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Manifest",
    "typeScriptTag": "manifest",
    "description": "Requests manifest report by id",
    "parameters": [
      {
        "name": "manifestId",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "apiVersion",
        "schema": "string",
        "required": true,
        "description": "The requested API version",
        "example": "API-VERSION",
        "default": "1.0"
      },
      {
        "name": "apiVersion",
        "schema": "string",
        "description": "The requested API version",
        "default": "1.0"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Returns PDF"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Unable to authorize request"
      }
    ]
  },
  {
    "url": "/api/Manifest",
    "method": "requestPickupAndManifestId",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Manifest",
    "typeScriptTag": "manifest",
    "description": "Requests pickup and get manifest id",
    "parameters": [
      {
        "name": "apiVersion",
        "schema": "string",
        "required": true,
        "description": "The requested API version",
        "example": "API-VERSION",
        "default": "1.0"
      },
      {
        "name": "apiVersion",
        "schema": "string",
        "description": "The requested API version",
        "default": "1.0"
      },
      {
        "name": "courierId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "externalLocationId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lastPickHour",
        "schema": "integer",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Returns ManifestId"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Unable to authorize request"
      }
    ]
  },
  {
    "url": "/api/Notifications/sendsms",
    "method": "sendSmsNotification",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Notifications",
    "typeScriptTag": "notifications",
    "description": "",
    "parameters": [
      {
        "name": "apiVersion",
        "schema": "string",
        "required": true,
        "description": "The requested API version",
        "example": "API-VERSION",
        "default": "1.0"
      },
      {
        "name": "apiVersion",
        "schema": "string",
        "description": "The requested API version",
        "default": "1.0"
      },
      {
        "name": "campaignName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "data",
        "schema": "array",
        "description": ""
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
    "url": "/api/OfflineOrder/Activate",
    "method": "activateOrder",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "OfflineOrder",
    "typeScriptTag": "offlineOrder",
    "description": "Activate Offline Orders",
    "parameters": [
      {
        "name": "apiVersion",
        "schema": "string",
        "required": true,
        "description": "The requested API version",
        "example": "API-VERSION",
        "default": "1.0"
      },
      {
        "name": "apiVersion",
        "schema": "string",
        "description": "The requested API version",
        "default": "1.0"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Activated successfully"
      },
      {
        "statusCode": "400",
        "description": "Unable to process due to validation errors"
      },
      {
        "statusCode": "401",
        "description": "Unable to authorize request"
      }
    ]
  },
  {
    "url": "/api/OfflineOrder/Edit",
    "method": "updateOrderDetails",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "OfflineOrder",
    "typeScriptTag": "offlineOrder",
    "description": "Edit Offline Orders",
    "parameters": [
      {
        "name": "apiVersion",
        "schema": "string",
        "required": true,
        "description": "The requested API version",
        "example": "API-VERSION",
        "default": "1.0"
      },
      {
        "name": "apiVersion",
        "schema": "string",
        "description": "The requested API version",
        "default": "1.0"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Activated successfully"
      },
      {
        "statusCode": "400",
        "description": "Unable to process due to validation errors"
      },
      {
        "statusCode": "401",
        "description": "Unable to authorize request"
      }
    ]
  },
  {
    "url": "/api/OfflineOrder/Add",
    "method": "addOrder",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "OfflineOrder",
    "typeScriptTag": "offlineOrder",
    "description": "Add Offline Orders",
    "parameters": [
      {
        "name": "apiVersion",
        "schema": "string",
        "required": true,
        "description": "The requested API version",
        "example": "API-VERSION",
        "default": "1.0"
      },
      {
        "name": "apiVersion",
        "schema": "string",
        "description": "The requested API version",
        "default": "1.0"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Added successfully"
      },
      {
        "statusCode": "400",
        "description": "Unable to process due to validation errors"
      },
      {
        "statusCode": "401",
        "description": "Unable to authorize request"
      }
    ]
  },
  {
    "url": "/api/Order",
    "method": "createNewOrder",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Order",
    "typeScriptTag": "order",
    "description": "Creates a new order",
    "parameters": [
      {
        "name": "apiVersion",
        "schema": "string",
        "required": true,
        "description": "The requested API version",
        "example": "API-VERSION",
        "default": "1.0"
      },
      {
        "name": "apiVersion",
        "schema": "string",
        "description": "The requested API version",
        "default": "1.0"
      },
      {
        "name": "parameters",
        "schema": "object",
        "description": ""
      },
      {
        "name": "serviceId",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "courierId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "shipmentDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "shipmentDateEnd",
        "schema": "string",
        "description": ""
      },
      {
        "name": "addressFrom",
        "schema": "object",
        "description": ""
      },
      {
        "name": "addressTo",
        "schema": "object",
        "description": ""
      },
      {
        "name": "addressReturn",
        "schema": "object",
        "description": ""
      },
      {
        "name": "payment",
        "schema": "string",
        "description": ""
      },
      {
        "name": "content",
        "schema": "object",
        "description": ""
      },
      {
        "name": "extra",
        "schema": "object",
        "description": ""
      },
      {
        "name": "externalClientLocation",
        "schema": "string",
        "description": ""
      },
      {
        "name": "externalOrderId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "metadata",
        "schema": "string",
        "description": ""
      },
      {
        "name": "sourceChannel",
        "schema": "string",
        "description": ""
      },
      {
        "name": "observation",
        "schema": "string",
        "description": ""
      },
      {
        "name": "customAttributes",
        "schema": "object",
        "description": ""
      },
      {
        "name": "clientSettings",
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
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/Order/simulate",
    "method": "simulateOrder",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Order",
    "typeScriptTag": "order",
    "description": "",
    "parameters": [
      {
        "name": "apiVersion",
        "schema": "string",
        "required": true,
        "description": "The requested API version",
        "example": "API-VERSION",
        "default": "1.0"
      },
      {
        "name": "apiVersion",
        "schema": "string",
        "description": "The requested API version",
        "default": "1.0"
      },
      {
        "name": "parameters",
        "schema": "object",
        "description": ""
      },
      {
        "name": "serviceId",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "courierId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "shipmentDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "shipmentDateEnd",
        "schema": "string",
        "description": ""
      },
      {
        "name": "addressFrom",
        "schema": "object",
        "description": ""
      },
      {
        "name": "addressTo",
        "schema": "object",
        "description": ""
      },
      {
        "name": "addressReturn",
        "schema": "object",
        "description": ""
      },
      {
        "name": "payment",
        "schema": "string",
        "description": ""
      },
      {
        "name": "content",
        "schema": "object",
        "description": ""
      },
      {
        "name": "extra",
        "schema": "object",
        "description": ""
      },
      {
        "name": "externalClientLocation",
        "schema": "string",
        "description": ""
      },
      {
        "name": "externalOrderId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "metadata",
        "schema": "string",
        "description": ""
      },
      {
        "name": "sourceChannel",
        "schema": "string",
        "description": ""
      },
      {
        "name": "observation",
        "schema": "string",
        "description": ""
      },
      {
        "name": "customAttributes",
        "schema": "object",
        "description": ""
      },
      {
        "name": "clientSettings",
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
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/Order/validate",
    "method": "validateNewOrder",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Order",
    "typeScriptTag": "order",
    "description": "Validates a new order request",
    "parameters": [
      {
        "name": "apiVersion",
        "schema": "string",
        "required": true,
        "description": "The requested API version",
        "example": "API-VERSION",
        "default": "1.0"
      },
      {
        "name": "apiVersion",
        "schema": "string",
        "description": "The requested API version",
        "default": "1.0"
      },
      {
        "name": "parameters",
        "schema": "object",
        "description": ""
      },
      {
        "name": "serviceId",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "courierId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "shipmentDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "shipmentDateEnd",
        "schema": "string",
        "description": ""
      },
      {
        "name": "addressFrom",
        "schema": "object",
        "description": ""
      },
      {
        "name": "addressTo",
        "schema": "object",
        "description": ""
      },
      {
        "name": "addressReturn",
        "schema": "object",
        "description": ""
      },
      {
        "name": "payment",
        "schema": "string",
        "description": ""
      },
      {
        "name": "content",
        "schema": "object",
        "description": ""
      },
      {
        "name": "extra",
        "schema": "object",
        "description": ""
      },
      {
        "name": "externalClientLocation",
        "schema": "string",
        "description": ""
      },
      {
        "name": "externalOrderId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "metadata",
        "schema": "string",
        "description": ""
      },
      {
        "name": "sourceChannel",
        "schema": "string",
        "description": ""
      },
      {
        "name": "observation",
        "schema": "string",
        "description": ""
      },
      {
        "name": "customAttributes",
        "schema": "object",
        "description": ""
      },
      {
        "name": "clientSettings",
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
        "statusCode": "201",
        "description": "Creates an new order in the system"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/Order/multiple/simulate",
    "method": "simulateMultiple",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Order",
    "typeScriptTag": "order",
    "description": "",
    "parameters": [
      {
        "name": "apiVersion",
        "schema": "string",
        "required": true,
        "description": "The requested API version",
        "example": "API-VERSION",
        "default": "1.0"
      },
      {
        "name": "apiVersion",
        "schema": "string",
        "description": "The requested API version",
        "default": "1.0"
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
      }
    ]
  },
  {
    "url": "/api/Order/file",
    "method": "uploadFile",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Order",
    "typeScriptTag": "order",
    "description": "",
    "parameters": [
      {
        "name": "apiVersion",
        "schema": "string",
        "required": true,
        "description": "The requested API version",
        "example": "API-VERSION",
        "default": "1.0"
      },
      {
        "name": "apiVersion",
        "schema": "string",
        "description": "The requested API version",
        "default": "1.0"
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
      }
    ]
  },
  {
    "url": "/api/Order/{courierId}/awb/{awbNo}",
    "method": "deleteExistingOrder",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Order",
    "typeScriptTag": "order",
    "description": "Deletes an existing order",
    "parameters": [
      {
        "name": "courierId",
        "schema": "integer",
        "required": true,
        "description": "Courier id",
        "example": 0
      },
      {
        "name": "awbNo",
        "schema": "string",
        "required": true,
        "description": "AWB number",
        "example": "AWBNO"
      },
      {
        "name": "apiVersion",
        "schema": "string",
        "required": true,
        "description": "The requested API version",
        "example": "API-VERSION",
        "default": "1.0"
      },
      {
        "name": "apiVersion",
        "schema": "string",
        "description": "The requested API version",
        "default": "1.0"
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
      }
    ]
  },
  {
    "url": "/api/Order/UpdateStatus",
    "method": "updateStatus",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Order",
    "typeScriptTag": "order",
    "description": "Updates orders statuses",
    "parameters": [
      {
        "name": "apiVersion",
        "schema": "string",
        "required": true,
        "description": "The requested API version",
        "example": "API-VERSION",
        "default": "1.0"
      },
      {
        "name": "apiVersion",
        "schema": "string",
        "description": "The requested API version",
        "default": "1.0"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Request was processed successfully"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/Order/UpdateParcels",
    "method": "updateParcels",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Order",
    "typeScriptTag": "order",
    "description": "Create a new order based on the existing one and cancel the original",
    "parameters": [
      {
        "name": "apiVersion",
        "schema": "string",
        "required": true,
        "description": "The requested API version",
        "example": "API-VERSION",
        "default": "1.0"
      },
      {
        "name": "apiVersion",
        "schema": "string",
        "description": "The requested API version",
        "default": "1.0"
      },
      {
        "name": "parameters",
        "schema": "object",
        "description": ""
      },
      {
        "name": "courierId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "courierShipmentId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "envelopeCount",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "parcelsCount",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "palettesCount",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "oversizedPackage",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "totalWeight",
        "schema": "number",
        "description": ""
      },
      {
        "name": "parcels",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Creates an new order in the system"
      },
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
      }
    ]
  },
  {
    "url": "/api/Order/UpdateCustomAttributes/{courierId}/awb/{awb}",
    "method": "updateCustomAttributes",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Order",
    "typeScriptTag": "order",
    "description": "Updates custom attributes",
    "parameters": [
      {
        "name": "courierId",
        "schema": "integer",
        "required": true,
        "description": "Courier id",
        "example": 0
      },
      {
        "name": "awb",
        "schema": "string",
        "required": true,
        "description": "AWB number",
        "example": "AWB"
      },
      {
        "name": "apiVersion",
        "schema": "string",
        "required": true,
        "description": "The requested API version",
        "example": "API-VERSION",
        "default": "1.0"
      },
      {
        "name": "apiVersion",
        "schema": "string",
        "description": "The requested API version",
        "default": "1.0"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Request was processed successfully"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/Order/by-location/{externalLocationId}/{from}/{to}",
    "method": "getByLocationDates",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Order",
    "typeScriptTag": "order",
    "description": "Retrieve orders by externalLocationId with dates filter",
    "parameters": [
      {
        "name": "externalLocationId",
        "schema": "string",
        "required": true,
        "description": "External Location Id",
        "example": "EXTERNALLOCATIONID"
      },
      {
        "name": "from",
        "schema": "string",
        "required": true,
        "description": "From date",
        "example": "FROM"
      },
      {
        "name": "to",
        "schema": "string",
        "required": true,
        "description": "To date",
        "example": "TO"
      },
      {
        "name": "apiVersion",
        "schema": "string",
        "required": true,
        "description": "The requested API version",
        "example": "API-VERSION",
        "default": "1.0"
      },
      {
        "name": "apiVersion",
        "schema": "string",
        "description": "The requested API version",
        "default": "1.0"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Request was processed successfully"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/Order/ReturnAwbInfo/{courierId}/{returnAwb}",
    "method": "getReturnAwbInfo",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Order",
    "typeScriptTag": "order",
    "description": "",
    "parameters": [
      {
        "name": "courierId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "returnAwb",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "RETURNAWB"
      },
      {
        "name": "apiVersion",
        "schema": "string",
        "required": true,
        "description": "The requested API version",
        "example": "API-VERSION",
        "default": "1.0"
      },
      {
        "name": "apiVersion",
        "schema": "string",
        "description": "The requested API version",
        "default": "1.0"
      }
    ],
    "responses": [
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/Order/UploadDocuments",
    "method": "uploadDocuments",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Order",
    "typeScriptTag": "order",
    "description": "UploadDocuments",
    "parameters": [
      {
        "name": "apiVersion",
        "schema": "string",
        "required": true,
        "description": "The requested API version",
        "example": "API-VERSION",
        "default": "1.0"
      },
      {
        "name": "apiVersion",
        "schema": "string",
        "description": "The requested API version",
        "default": "1.0"
      },
      {
        "name": "courierId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "courierShipmentId",
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
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/Price",
    "method": "getPrices",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Price",
    "typeScriptTag": "price",
    "description": "Gets the prices for the specified request",
    "parameters": [
      {
        "name": "apiVersion",
        "schema": "string",
        "required": true,
        "description": "The requested API version",
        "example": "API-VERSION",
        "default": "1.0"
      },
      {
        "name": "apiVersion",
        "schema": "string",
        "description": "The requested API version",
        "default": "1.0"
      },
      {
        "name": "parameters",
        "schema": "object",
        "description": ""
      },
      {
        "name": "serviceId",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "courierId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "shipmentDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "shipmentDateEnd",
        "schema": "string",
        "description": ""
      },
      {
        "name": "addressFrom",
        "schema": "object",
        "description": ""
      },
      {
        "name": "addressTo",
        "schema": "object",
        "description": ""
      },
      {
        "name": "addressReturn",
        "schema": "object",
        "description": ""
      },
      {
        "name": "payment",
        "schema": "string",
        "description": ""
      },
      {
        "name": "content",
        "schema": "object",
        "description": ""
      },
      {
        "name": "extra",
        "schema": "object",
        "description": ""
      },
      {
        "name": "externalClientLocation",
        "schema": "string",
        "description": ""
      },
      {
        "name": "externalOrderId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "metadata",
        "schema": "string",
        "description": ""
      },
      {
        "name": "sourceChannel",
        "schema": "string",
        "description": ""
      },
      {
        "name": "observation",
        "schema": "string",
        "description": ""
      },
      {
        "name": "customAttributes",
        "schema": "object",
        "description": ""
      },
      {
        "name": "clientSettings",
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
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/Track/by-awb/with-return",
    "method": "orderCourierAwbWithReturn",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Track",
    "typeScriptTag": "track",
    "description": "Track by Order Courier AWB with return info",
    "parameters": [
      {
        "name": "apiVersion",
        "schema": "string",
        "required": true,
        "description": "The requested API version",
        "example": "API-VERSION",
        "default": "1.0"
      },
      {
        "name": "apiVersion",
        "schema": "string",
        "description": "The requested API version",
        "default": "1.0"
      },
      {
        "name": "courier",
        "schema": "string",
        "description": ""
      },
      {
        "name": "awbList",
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
        "description": ""
      }
    ]
  },
  {
    "url": "/api/Track/return/by-awb",
    "method": "byAwb",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Track",
    "typeScriptTag": "track",
    "description": "Track Retrun by Courier AWB",
    "parameters": [
      {
        "name": "apiVersion",
        "schema": "string",
        "required": true,
        "description": "The requested API version",
        "example": "API-VERSION",
        "default": "1.0"
      },
      {
        "name": "apiVersion",
        "schema": "string",
        "description": "The requested API version",
        "default": "1.0"
      },
      {
        "name": "courier",
        "schema": "string",
        "description": ""
      },
      {
        "name": "awbList",
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
        "description": ""
      }
    ]
  },
  {
    "url": "/api/Voucher/Create",
    "method": "generateNewVoucher",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Voucher",
    "typeScriptTag": "voucher",
    "description": "Create Voucher",
    "parameters": [
      {
        "name": "apiVersion",
        "schema": "string",
        "required": true,
        "description": "The requested API version",
        "example": "API-VERSION",
        "default": "1.0"
      },
      {
        "name": "apiVersion",
        "schema": "string",
        "description": "The requested API version",
        "default": "1.0"
      },
      {
        "name": "courier",
        "schema": "string",
        "description": ""
      },
      {
        "name": "courierShipmentId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "voucherCourier",
        "schema": "string",
        "description": ""
      },
      {
        "name": "insuranceAmount",
        "schema": "number",
        "description": ""
      },
      {
        "name": "insuranceCurrency",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Activated successfully"
      },
      {
        "statusCode": "400",
        "description": "Unable to process due to validation errors"
      },
      {
        "statusCode": "401",
        "description": "Unable to authorize request"
      }
    ]
  },
  {
    "url": "/api/Voucher/Activate",
    "method": "activateVoucher",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Voucher",
    "typeScriptTag": "voucher",
    "description": "Activate Voucher",
    "parameters": [
      {
        "name": "apiVersion",
        "schema": "string",
        "required": true,
        "description": "The requested API version",
        "example": "API-VERSION",
        "default": "1.0"
      },
      {
        "name": "apiVersion",
        "schema": "string",
        "description": "The requested API version",
        "default": "1.0"
      },
      {
        "name": "courier",
        "schema": "string",
        "description": ""
      },
      {
        "name": "courierShipmentId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "courierShipmentVoucher",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Activated successfully"
      },
      {
        "statusCode": "400",
        "description": "Unable to process due to validation errors"
      },
      {
        "statusCode": "401",
        "description": "Unable to authorize request"
      }
    ]
  }
]
    }
      language="TypeScript"
      apiTitle="Innoship API"
      apiBaseUrl="https://api.innoship.com"
      apiVersion="v1"
      endpoints={46}
      sdkMethods={51}
      schemas={118}
      parameters={330}
      difficulty="Medium"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/innoship/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/innoship/openapi.yaml"
      developerDocumentation="api.innoship.io/index.html"
    />
  );
}
  