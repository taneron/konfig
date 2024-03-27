import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function EngrainSightMapTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="engrain-sight-map-typescript-sdk"
      metaDescription={`Engrain is a recognized leader in next-generation interactive technology and data visualization software solutions for the multifamily, commercial, residential, storage, and retail real estate industries. The company is best known for its award-winning TouchTour® suite of products – including interactive sales kiosks, the TouchTour iPad application, and TouchTour Connect digital signage – which engage prospects and residents alike while empowering sales teams with actionable, real-time information. 

Through its innovative SightMap™ data visualization software platform, Engrain is poised to disrupt the real estate industry once again with a lightweight map format that displays unit-level data in a highly responsive and integrated way. SightMap can be embedded on virtually any website or application and is available on all Engrain's TouchTour products.  It is also available for license by individual companies as a powerful asset management tool, and third-party software providers for inclusion in marketing and operations dashboards, applications, analytics tools and websites via an SDK and Unit Map data API.`}
      company="Engrain"
      serviceName="SightMap"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/engrain/sight-map/logo.png"
      companyKebabCase="engrain"
      clientNameCamelCase="engrainSightMap"
      homepage="www.engrain.com/sightmap"
      lastUpdated={new Date("2024-03-27T22:54:19.755Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/engrain/sight-map/favicon.png"
      contactUrl="https://developers.sightmap.com"
      // Missing contactEmail
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/engrain/sight-map/imagePreview.png"
      GettingStarted={GettingStarted}
      FirstRequest={FirstRequest}
      categories={["real_estate","data_visualization","real_estate_technology","real_estate_marketing","property_management"]}
      methods={[
  {
    "url": "/accounts",
    "method": "listAccounts",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "accounts",
    "typeScriptTag": "accounts",
    "description": "List accounts",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Request a specific page of resources."
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "Limit the number of returned resources."
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/accounts/{account}",
    "method": "getSpecificAccount",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "accounts",
    "typeScriptTag": "accounts",
    "description": "View an account",
    "parameters": [],
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/accounts/{account}/embeds",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "accounts/embeds",
    "typeScriptTag": "accountsEmbeds",
    "description": "List embeds",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Request a specific page of resources."
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "Limit the number of returned resources."
      },
      {
        "name": "asset",
        "schema": "string",
        "required": false,
        "description": "An asset ID to filter the list on."
      },
      {
        "name": "experimentalFlags",
        "schema": "string",
        "required": true,
        "description": "This resource is experimental and requires the `embed-resource` [experimental flag](https://api.sightmap.com/v1/openapi).",
        "example": "EXPERIMENTAL-FLAGS"
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/accounts/{account}/embeds/{embed}",
    "method": "viewEmbed",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "accounts/embeds",
    "typeScriptTag": "accountsEmbeds",
    "description": "View an embed",
    "parameters": [
      {
        "name": "embed",
        "schema": "string",
        "required": true,
        "description": "An embed ID.",
        "example": "EMBED"
      },
      {
        "name": "experimentalFlags",
        "schema": "string",
        "required": true,
        "description": "This resource is experimental and requires the `embed-resource` [experimental flag](https://api.sightmap.com/v1/openapi).",
        "example": "EXPERIMENTAL-FLAGS"
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/accounts/{account}/assets",
    "method": "listAllowedAssets",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "accounts/assets",
    "typeScriptTag": "accountsAssets",
    "description": "List assets",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Request a specific page of resources."
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "Limit the number of returned resources."
      },
      {
        "name": "asset",
        "schema": "string",
        "required": false,
        "description": "An asset ID to filter the list on."
      },
      {
        "name": "experimentalFlags",
        "schema": "string",
        "required": true,
        "description": "This resource is experimental and requires the `accounts-assets` [experimental flag](https://api.sightmap.com/v1/openapi).",
        "example": "EXPERIMENTAL-FLAGS"
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/accounts/{account}/assets",
    "method": "assignAssetsToAccount",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "accounts/assets",
    "typeScriptTag": "accountsAssets",
    "description": "Assign assets",
    "parameters": [
      {
        "name": "data",
        "schema": "array",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Assets assigned successfully"
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "409",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/accounts/{account}/assets/remove",
    "method": "unassignAssets",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "accounts/assets",
    "typeScriptTag": "accountsAssets",
    "description": "Unassign assets",
    "parameters": [
      {
        "name": "data",
        "schema": "array",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Assets unassigned successfully"
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "409",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/assets",
    "method": "getAllowedList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "assets",
    "typeScriptTag": "assets",
    "description": "List assets",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Request a specific page of resources."
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "Limit the number of returned resources."
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/assets",
    "method": "createAssetPermission",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "assets",
    "typeScriptTag": "assets",
    "description": "Create an asset",
    "parameters": [
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "market",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "MARKET"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "display_name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DISPLAY_NAME"
      },
      {
        "name": "address_line1",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ADDRESS_LINE1"
      },
      {
        "name": "address_line2",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "address_city",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ADDRESS_CITY"
      },
      {
        "name": "address_state",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ADDRESS_STATE"
      },
      {
        "name": "address_country",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ADDRESS_COUNTRY"
      },
      {
        "name": "address_postal_code",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ADDRESS_POSTAL_CODE"
      },
      {
        "name": "address_latitude",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "address_longitude",
        "schema": "number",
        "required": false,
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
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "409",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/assets/{asset}",
    "method": "viewAsset",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "assets",
    "typeScriptTag": "assets",
    "description": "View an asset",
    "parameters": [],
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/assets/{asset}",
    "method": "updateAsset",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "assets",
    "typeScriptTag": "assets",
    "description": "Update an asset",
    "parameters": [
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "market",
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
        "name": "display_name",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "address_line1",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "address_line2",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "address_city",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "address_state",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "address_country",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "address_postal_code",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "address_latitude",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "address_longitude",
        "schema": "number",
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
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "409",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/assets/{asset}/multifamily/units",
    "method": "listUnits",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "assets/units",
    "typeScriptTag": "assetsUnits",
    "description": "List units",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Request a specific page of resources."
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "Limit the number of returned resources."
      },
      {
        "name": "unitNumber",
        "schema": "string",
        "required": false,
        "description": "A unit number to filter the list on."
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/assets/{asset}/multifamily/units",
    "method": "createUnit",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "assets/units",
    "typeScriptTag": "assetsUnits",
    "description": "Create a unit",
    "parameters": [
      {
        "name": "asset_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ASSET_ID"
      },
      {
        "name": "building_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "BUILDING_ID"
      },
      {
        "name": "floor_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FLOOR_ID"
      },
      {
        "name": "floor_plan_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FLOOR_PLAN_ID"
      },
      {
        "name": "unit_number",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "UNIT_NUMBER"
      },
      {
        "name": "area",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "is_affordable_housing_unit",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/assets/{asset}/multifamily/units/{unit}",
    "method": "deleteUnit",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "assets/units",
    "typeScriptTag": "assetsUnits",
    "description": "Delete a unit",
    "parameters": [],
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "409",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/assets/{asset}/multifamily/units/{unit}",
    "method": "getSpecificUnit",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "assets/units",
    "typeScriptTag": "assetsUnits",
    "description": "View a unit",
    "parameters": [],
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/assets/{asset}/multifamily/units/{unit}",
    "method": "updateMultifamilyUnit",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "assets/units",
    "typeScriptTag": "assetsUnits",
    "description": "Update a unit",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "asset_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ASSET_ID"
      },
      {
        "name": "building_id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "floor_id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "floor_plan_id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "unit_number",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "area",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "is_affordable_housing_unit",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "view_image",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "secondary_view_image",
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
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/assets/{asset}/multifamily/buildings",
    "method": "listBuildingsForAsset",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "assets/buildings",
    "typeScriptTag": "assetsBuildings",
    "description": "List buildings",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Request a specific page of resources."
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "Limit the number of returned resources."
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/assets/{asset}/multifamily/buildings",
    "method": "createBuilding",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "assets/buildings",
    "typeScriptTag": "assetsBuildings",
    "description": "Create a building",
    "parameters": [
      {
        "name": "asset_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ASSET_ID"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "label",
        "schema": "string",
        "required": false,
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
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/assets/{asset}/multifamily/buildings/{building}",
    "method": "getSpecificBuilding",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "assets/buildings",
    "typeScriptTag": "assetsBuildings",
    "description": "View a building",
    "parameters": [],
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/assets/{asset}/multifamily/buildings/{building}",
    "method": "updateBuilding",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "assets/buildings",
    "typeScriptTag": "assetsBuildings",
    "description": "Update a building",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "asset_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ASSET_ID"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "label",
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
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/assets/{asset}/multifamily/filters",
    "method": "listFilters",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "assets/filters",
    "typeScriptTag": "assetsFilters",
    "description": "List filters",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Request a specific page of resources."
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "Limit the number of returned resources."
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/assets/{asset}/multifamily/filters",
    "method": "createNewFilter",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "assets/filters",
    "typeScriptTag": "assetsFilters",
    "description": "Create a filter",
    "parameters": [],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/assets/{asset}/multifamily/filters/{filter}",
    "method": "getSpecificFilter",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "assets/filters",
    "typeScriptTag": "assetsFilters",
    "description": "View a filter",
    "parameters": [],
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/assets/{asset}/multifamily/filters/{filter}",
    "method": "updateFilter",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "assets/filters",
    "typeScriptTag": "assetsFilters",
    "description": "Update a filter",
    "parameters": [],
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/assets/{asset}/multifamily/filters/{filter}/options",
    "method": "listOptions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "assets/filters",
    "typeScriptTag": "assetsFilters",
    "description": "List options",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Request a specific page of resources."
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "Limit the number of returned resources."
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/assets/{asset}/multifamily/filters/{filter}/options",
    "method": "createOption",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "assets/filters",
    "typeScriptTag": "assetsFilters",
    "description": "Create an option",
    "parameters": [],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/assets/{asset}/multifamily/filters/{filter}/options/{option}",
    "method": "viewOption",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "assets/filters",
    "typeScriptTag": "assetsFilters",
    "description": "View an option",
    "parameters": [],
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/assets/{asset}/multifamily/filters/{filter}/options/{option}",
    "method": "updateOption",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "assets/filters",
    "typeScriptTag": "assetsFilters",
    "description": "Update an option",
    "parameters": [],
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/assets/{asset}/multifamily/filters/{filter}/options/{option}/units",
    "method": "listUnitsForOption",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "assets/filters",
    "typeScriptTag": "assetsFilters",
    "description": "List units assigned to a custom option",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Request a specific page of resources."
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "Limit the number of returned resources."
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/assets/{asset}/multifamily/filters/{filter}/options/{option}/units",
    "method": "assignUnitsToOption",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "assets/filters",
    "typeScriptTag": "assetsFilters",
    "description": "Assign units to a custom option",
    "parameters": [
      {
        "name": "data",
        "schema": "array",
        "description": "",
        "example": [
          {
            "asset_id": "1",
            "filter_id": "1000",
            "option_id": "7",
            "unit_id": "258670"
          },
          {
            "asset_id": "1",
            "filter_id": "1001",
            "option_id": "7",
            "unit_id": "258671"
          }
        ]
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "409",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/assets/{asset}/multifamily/floors",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "assets/floors",
    "typeScriptTag": "assetsFloors",
    "description": "List floors",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Request a specific page of resources."
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "Limit the number of returned resources."
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/assets/{asset}/multifamily/floors",
    "method": "createFloorMultifamily",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "assets/floors",
    "typeScriptTag": "assetsFloors",
    "description": "Create a floor",
    "parameters": [
      {
        "name": "asset_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ASSET_ID"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "filter_label",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FILTER_LABEL"
      },
      {
        "name": "filter_short_label",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FILTER_SHORT_LABEL"
      },
      {
        "name": "sort",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/assets/{asset}/multifamily/floors/{floor}",
    "method": "viewFloor",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "assets/floors",
    "typeScriptTag": "assetsFloors",
    "description": "View a floor",
    "parameters": [],
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/assets/{asset}/multifamily/floors/{floor}",
    "method": "updateFloorMultifamily",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "assets/floors",
    "typeScriptTag": "assetsFloors",
    "description": "Update a floor",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "asset_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ASSET_ID"
      },
      {
        "name": "name",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "filter_label",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "filter_short_label",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "sort",
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
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/assets/{asset}/multifamily/floor-plans",
    "method": "listFloorPlans",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "assets/floor-plans",
    "typeScriptTag": "assetsFloorPlans",
    "description": "List floor plans",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Request a specific page of resources."
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "Limit the number of returned resources."
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/assets/{asset}/multifamily/floor-plans",
    "method": "createMultifamilyFloorPlan",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "assets/floor-plans",
    "typeScriptTag": "assetsFloorPlans",
    "description": "Create a floor plan",
    "parameters": [
      {
        "name": "asset_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ASSET_ID"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "bedroom_count",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "bathroom_count",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "filter_label",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FILTER_LABEL"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/assets/{asset}/multifamily/floor-plans/{floor-plan}",
    "method": "deleteFloorPlan",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "assets/floor-plans",
    "typeScriptTag": "assetsFloorPlans",
    "description": "Delete a floor plan",
    "parameters": [],
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "409",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/assets/{asset}/multifamily/floor-plans/{floor-plan}",
    "method": "viewSpecificFloorPlan",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "assets/floor-plans",
    "typeScriptTag": "assetsFloorPlans",
    "description": "View a floor plan",
    "parameters": [],
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/assets/{asset}/multifamily/floor-plans/{floor-plan}",
    "method": "updateFloorPlan",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "assets/floor-plans",
    "typeScriptTag": "assetsFloorPlans",
    "description": "Update a floor plan",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "asset_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ASSET_ID"
      },
      {
        "name": "name",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "bedroom_count",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "bathroom_count",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "image",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "secondary_image",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "filter_label",
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
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/assets/{asset}/multifamily/marker-descriptions",
    "method": "listMarkerDescriptions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "assets/marker-descriptions",
    "typeScriptTag": "assetsMarkerDescriptions",
    "description": "List marker descriptions",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Request a specific page of resources."
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "Limit the number of returned resources."
      },
      {
        "name": "experimentalFlags",
        "schema": "string",
        "required": true,
        "description": "This resource is experimental and requires the `marker-descriptions-resource` [experimental flag](https://api.sightmap.com/v1/openapi).",
        "example": "EXPERIMENTAL-FLAGS"
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/assets/{asset}/multifamily/marker-descriptions/{marker-descriptions}",
    "method": "viewSpecificMarkerDescription",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "assets/marker-descriptions",
    "typeScriptTag": "assetsMarkerDescriptions",
    "description": "View a marker description",
    "parameters": [
      {
        "name": "experimentalFlags",
        "schema": "string",
        "required": true,
        "description": "This resource is experimental and requires the `marker-descriptions-resource` [experimental flag](https://api.sightmap.com/v1/openapi).",
        "example": "EXPERIMENTAL-FLAGS"
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/assets/{asset}/multifamily/galleries",
    "method": "listGalleries",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "assets/galleries",
    "typeScriptTag": "assetsGalleries",
    "description": "List galleries",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Request a specific page of resources."
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "Limit the number of returned resources."
      },
      {
        "name": "experimentalFlags",
        "schema": "string",
        "required": true,
        "description": "This resource is experimental and requires the `gallery-resource` [experimental flag](https://api.sightmap.com/v1/openapi).",
        "example": "EXPERIMENTAL-FLAGS"
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/assets/{asset}/multifamily/galleries/{gallery}",
    "method": "viewSpecificGallery",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "assets/galleries",
    "typeScriptTag": "assetsGalleries",
    "description": "View a gallery",
    "parameters": [
      {
        "name": "experimentalFlags",
        "schema": "string",
        "required": true,
        "description": "This resource is experimental and requires the `gallery-resource` [experimental flag](https://api.sightmap.com/v1/openapi).",
        "example": "EXPERIMENTAL-FLAGS"
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/assets/{asset}/multifamily/outbound-links",
    "method": "listOutboundLinks",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "assets/outbound-links",
    "typeScriptTag": "assetsOutboundLinks",
    "description": "List asset outbound links",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Request a specific page of resources."
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "Limit the number of returned resources."
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/assets/{asset}/multifamily/outbound-links",
    "method": "createAssetOutboundLink",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "assets/outbound-links",
    "typeScriptTag": "assetsOutboundLinks",
    "description": "Create an asset outbound link",
    "parameters": [
      {
        "name": "asset_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ASSET_ID"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "template",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TEMPLATE"
      },
      {
        "name": "label",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "LABEL"
      },
      {
        "name": "icon_type",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "open_new_window",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/assets/{asset}/multifamily/outbound-links/{outbound-link}",
    "method": "viewAssetOutboundLink",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "assets/outbound-links",
    "typeScriptTag": "assetsOutboundLinks",
    "description": "View an asset outbound link",
    "parameters": [],
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/assets/{asset}/multifamily/outbound-links/{outbound-link}",
    "method": "updateLink",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "assets/outbound-links",
    "typeScriptTag": "assetsOutboundLinks",
    "description": "Update an asset outbound link",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "asset_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ASSET_ID"
      },
      {
        "name": "name",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "template",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "label",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "icon_type",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "open_new_window",
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
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/assets/{asset}/multifamily/units/outbound-links",
    "method": "listOutboundLinks",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "assets/units/outbound-links",
    "typeScriptTag": "assetsUnitsOutboundLinks",
    "description": "List unit outbound links",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Request a specific page of resources."
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "Limit the number of returned resources."
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/assets/{asset}/multifamily/units/outbound-links",
    "method": "createUnitOutboundLink",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "assets/units/outbound-links",
    "typeScriptTag": "assetsUnitsOutboundLinks",
    "description": "Create a unit outbound link",
    "parameters": [],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/assets/{asset}/multifamily/units/outbound-links/{outbound-link}",
    "method": "viewSpecificLink",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "assets/units/outbound-links",
    "typeScriptTag": "assetsUnitsOutboundLinks",
    "description": "View a unit outbound link",
    "parameters": [],
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/assets/{asset}/multifamily/units/outbound-links/{outbound-link}",
    "method": "updateUnitOutboundLink",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "assets/units/outbound-links",
    "typeScriptTag": "assetsUnitsOutboundLinks",
    "description": "Update a unit outbound link",
    "parameters": [],
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/assets/{asset}/multifamily/units/outbound-links/{outbound-link}/urls",
    "method": "listUnitOutboundLinkUrls",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "assets/units/outbound-links",
    "typeScriptTag": "assetsUnitsOutboundLinks",
    "description": "List unit outbound link URLs",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Request a specific page of resources."
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "Limit the number of returned resources."
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "409",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/assets/{asset}/multifamily/units/outbound-links/{outbound-link}/urls",
    "method": "updateUrls",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "assets/units/outbound-links",
    "typeScriptTag": "assetsUnitsOutboundLinks",
    "description": "Update unit outbound link URLs",
    "parameters": [
      {
        "name": "data",
        "schema": "array",
        "description": "",
        "example": [
          {
            "unit_id": "258670",
            "url": "https://example.com/unit/258670"
          },
          {
            "unit_id": "258671",
            "url": "https://example.com/unit/258671"
          }
        ]
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "URLs updated successfully"
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "409",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/assets/{asset}/multifamily/landing-pages",
    "method": "listLandingPages",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "assets/landing-pages",
    "typeScriptTag": "assetsLandingPages",
    "description": "List landing pages",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Request a specific page of resources."
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "Limit the number of returned resources."
      },
      {
        "name": "asset",
        "schema": "string",
        "required": false,
        "description": "An asset ID to filter the list on."
      },
      {
        "name": "experimentalFlags",
        "schema": "string",
        "required": true,
        "description": "This resource is experimental and requires the `landing-page-resource` [experimental flag](https://api.sightmap.com/v1/openapi).",
        "example": "EXPERIMENTAL-FLAGS"
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/assets/{asset}/multifamily/landing-pages/{landing-page}",
    "method": "viewLandingPage",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "assets/landing-pages",
    "typeScriptTag": "assetsLandingPages",
    "description": "View a landing page",
    "parameters": [
      {
        "name": "landingPage",
        "schema": "string",
        "required": true,
        "description": "A landing page ID.",
        "example": "LANDING-PAGE"
      },
      {
        "name": "experimentalFlags",
        "schema": "string",
        "required": true,
        "description": "This resource is experimental and requires the `landing-page-resource` [experimental flag](https://api.sightmap.com/v1/openapi).",
        "example": "EXPERIMENTAL-FLAGS"
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/assets/{asset}/multifamily/units/description-groups",
    "method": "listGroups",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "assets/units/descriptions",
    "typeScriptTag": "assetsUnitsDescriptions",
    "description": "List groups",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Request a specific page of resources."
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "Limit the number of returned resources."
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/assets/{asset}/multifamily/units/description-groups",
    "method": "createUnitDescriptionGroup",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "assets/units/descriptions",
    "typeScriptTag": "assetsUnitsDescriptions",
    "description": "Create a group",
    "parameters": [
      {
        "name": "asset_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ASSET_ID"
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
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/assets/{asset}/multifamily/units/description-groups/{description-group}",
    "method": "viewGroup",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "assets/units/descriptions",
    "typeScriptTag": "assetsUnitsDescriptions",
    "description": "View a group",
    "parameters": [],
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/assets/{asset}/multifamily/units/description-groups/{description-group}",
    "method": "updateGroup",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "assets/units/descriptions",
    "typeScriptTag": "assetsUnitsDescriptions",
    "description": "Update a group",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "asset_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ASSET_ID"
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
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/assets/{asset}/multifamily/units/description-groups/{description-group}/descriptions",
    "method": "listUnitDescriptionGroups",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "assets/units/descriptions",
    "typeScriptTag": "assetsUnitsDescriptions",
    "description": "List descriptions",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Request a specific page of resources."
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "Limit the number of returned resources."
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/assets/{asset}/multifamily/units/description-groups/{description-group}/descriptions",
    "method": "createUnitDescriptions",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "assets/units/descriptions",
    "typeScriptTag": "assetsUnitsDescriptions",
    "description": "Create a description",
    "parameters": [
      {
        "name": "data",
        "schema": "array",
        "description": "",
        "example": [
          {
            "group_id": "7",
            "name": "Amenity 1",
            "label": "Amenities",
            "body": "* Quartz countertops\n* Mountain views\n* Stainless steel appliances\n",
            "is_enabled": true
          },
          {
            "group_id": "7",
            "name": "Amenity 2",
            "label": "Amenities",
            "body": "* Granite countertops\n* Ocean views\n* Black steel appliances\n",
            "is_enabled": true
          }
        ]
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/assets/{asset}/multifamily/units/description-groups/{description-group}/descriptions",
    "method": "updateDescriptions",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "assets/units/descriptions",
    "typeScriptTag": "assetsUnitsDescriptions",
    "description": "Update a description",
    "parameters": [
      {
        "name": "data",
        "schema": "array",
        "description": "",
        "example": [
          {
            "id": "1000X",
            "group_id": "7",
            "name": "Amenity 1",
            "label": "Amenities",
            "body": "* Quartz countertops\n* Mountain views\n* Stainless steel appliances\n",
            "is_enabled": true
          },
          {
            "id": "1001",
            "group_id": "7",
            "name": "Amenity 2",
            "label": "Amenities",
            "body": "* Granite countertops\n* Ocean views\n* Black steel appliances\n",
            "is_enabled": true
          }
        ]
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/assets/{asset}/multifamily/units/description-groups/{description-group}/descriptions/{description}",
    "method": "viewSpecificDescription",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "assets/units/descriptions",
    "typeScriptTag": "assetsUnitsDescriptions",
    "description": "View a description",
    "parameters": [],
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/assets/{asset}/multifamily/units/description-groups/{description-group}/units",
    "method": "listAssignedUnits",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "assets/units/descriptions",
    "typeScriptTag": "assetsUnitsDescriptions",
    "description": "List units assigned to descriptions",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Request a specific page of resources."
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "Limit the number of returned resources."
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/assets/{asset}/multifamily/units/description-groups/{description-group}/units",
    "method": "assignUnitsToDescriptionGroups",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "assets/units/descriptions",
    "typeScriptTag": "assetsUnitsDescriptions",
    "description": "Assign units to descriptions",
    "parameters": [
      {
        "name": "data",
        "schema": "array",
        "description": "",
        "example": [
          {
            "group_id": "7",
            "unit_id": "258670",
            "description_id": "1000"
          },
          {
            "group_id": "7",
            "unit_id": "258671",
            "description_id": "1001"
          }
        ]
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/assets/{asset}/multifamily/maps",
    "method": "listUnitMaps",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "assets/maps",
    "typeScriptTag": "assetsMaps",
    "description": "List unit maps",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Request a specific page of resources."
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "Limit the number of returned resources."
      },
      {
        "name": "tags",
        "schema": "string",
        "required": false,
        "description": "A comma-separated list of one or more tags to filter the list on (e.g. `tag-1,tag-2`)."
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/assets/{asset}/multifamily/maps",
    "method": "createUnitMap",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "assets/maps",
    "typeScriptTag": "assetsMaps",
    "description": "Create a unit map",
    "parameters": [
      {
        "name": "experimentalFlags",
        "schema": "string",
        "required": true,
        "description": "This resource is experimental and requires the `create-unitmap-resource` [experimental flag](https://api.sightmap.com/v1/openapi).",
        "example": "EXPERIMENTAL-FLAGS"
      },
      {
        "name": "data",
        "schema": "object",
        "required": true,
        "description": "",
        "example": {
          "id": "575X",
          "asset_id": "1323",
          "name": "The Lofts at New Main",
          "style": "b"
        }
      },
      {
        "name": "file",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FILE"
      },
      {
        "name": "source",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SOURCE"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "415",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/assets/{asset}/multifamily/maps/{map}",
    "method": "viewUnitMap",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "assets/maps",
    "typeScriptTag": "assetsMaps",
    "description": "View a unit map",
    "parameters": [],
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/assets/{asset}/multifamily/maps/{map}",
    "method": "updateUnitMap",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "assets/maps",
    "typeScriptTag": "assetsMaps",
    "description": "Update a unit map",
    "parameters": [
      {
        "name": "tags",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "asset_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ASSET_ID"
      },
      {
        "name": "name",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "is_dimension_locked",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "style",
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
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/assets/{asset}/multifamily/maps/{map}/backgrounds",
    "method": "listBackgrounds",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "assets/maps",
    "typeScriptTag": "assetsMaps",
    "description": "List backgrounds",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Request a specific page of resources."
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "Limit the number of returned resources."
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/assets/{asset}/multifamily/maps/{map}/backgrounds/{background}",
    "method": "getViewBackground",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "assets/maps",
    "typeScriptTag": "assetsMaps",
    "description": "View a background",
    "parameters": [],
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/assets/{asset}/multifamily/caches/build",
    "method": "buildCachesForAsset",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "assets/caches",
    "typeScriptTag": "assetsCaches",
    "description": "Build caches",
    "parameters": [
      {
        "name": "experimentalFlags",
        "schema": "string",
        "required": true,
        "description": "This resource is experimental and requires the `build-caches` [experimental flag](https://api.sightmap.com/v1/openapi).",
        "example": "EXPERIMENTAL-FLAGS"
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "Queued for processing"
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/assets/{asset}/multifamily/references",
    "method": "listReferencesForAsset",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "assets/references",
    "typeScriptTag": "assetsReferences",
    "description": "List references",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Request a specific page of resources."
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "Limit the number of returned resources."
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/assets/{asset}/multifamily/references",
    "method": "createAssetReference",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "assets/references",
    "typeScriptTag": "assetsReferences",
    "description": "Create a reference",
    "parameters": [
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "asset_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ASSET_ID"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "key",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "value",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "VALUE"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/assets/{asset}/multifamily/references/{reference}",
    "method": "viewReference",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "assets/references",
    "typeScriptTag": "assetsReferences",
    "description": "View a reference",
    "parameters": [],
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/assets/{asset}/multifamily/references/{reference}",
    "method": "updateReference",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "assets/references",
    "typeScriptTag": "assetsReferences",
    "description": "Update a reference",
    "parameters": [
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "asset_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ASSET_ID"
      },
      {
        "name": "name",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "key",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "value",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "VALUE"
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/assets/{asset}/multifamily/units/reference-groups",
    "method": "listGroups",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "assets/units/references",
    "typeScriptTag": "assetsUnitsReferences",
    "description": "List groups",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Request a specific page of resources."
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "Limit the number of returned resources."
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/assets/{asset}/multifamily/units/reference-groups",
    "method": "createUnitReferenceGroup",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "assets/units/references",
    "typeScriptTag": "assetsUnitsReferences",
    "description": "Create a group",
    "parameters": [
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "asset_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ASSET_ID"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "key",
        "schema": "string",
        "required": false,
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
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "409",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/assets/{asset}/multifamily/units/reference-groups/{reference-group}",
    "method": "viewSpecificUnitReferenceGroup",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "assets/units/references",
    "typeScriptTag": "assetsUnitsReferences",
    "description": "View a group",
    "parameters": [],
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/assets/{asset}/multifamily/units/reference-groups/{reference-group}",
    "method": "updateUnitReferenceGroup",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "assets/units/references",
    "typeScriptTag": "assetsUnitsReferences",
    "description": "Update a group",
    "parameters": [
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "asset_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ASSET_ID"
      },
      {
        "name": "name",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "key",
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
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/assets/{asset}/multifamily/units/reference-groups/{reference-group}/references",
    "method": "listUnitReferences",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "assets/units/references",
    "typeScriptTag": "assetsUnitsReferences",
    "description": "List references",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Request a specific page of resources."
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "Limit the number of returned resources."
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/assets/{asset}/multifamily/units/reference-groups/{reference-group}/references",
    "method": "updateUnitReferences",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "assets/units/references",
    "typeScriptTag": "assetsUnitsReferences",
    "description": "Update references",
    "parameters": [
      {
        "name": "data",
        "schema": "array",
        "description": "",
        "example": [
          {
            "group_id": "2630",
            "unit_id": "258670",
            "value": "123456"
          },
          {
            "group_id": "2630",
            "unit_id": "258671",
            "value": "123457"
          }
        ]
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "References updated successfully"
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/assets/{asset}/multifamily/pricing",
    "method": "listPricingProcesses",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "assets/pricing",
    "typeScriptTag": "assetsPricing",
    "description": "List pricing processes",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Request a specific page of resources."
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "Limit the number of returned resources."
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/assets/{asset}/multifamily/pricing/{process}",
    "method": "viewPricingProcess",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "assets/pricing",
    "typeScriptTag": "assetsPricing",
    "description": "View a pricing process",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Request a specific page of resources."
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "Limit the number of returned resources."
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/assets/{asset}/multifamily/pricing/{process}/entries",
    "method": "listPricingEntries",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "assets/pricing",
    "typeScriptTag": "assetsPricing",
    "description": "List pricing entries",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Request a specific page of resources."
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "Limit the number of returned resources."
      },
      {
        "name": "flatPricing",
        "schema": "string",
        "required": false,
        "description": "Force a flat pricing view of the entry data."
      },
      {
        "name": "unit",
        "schema": "string",
        "required": false,
        "description": "A unit ID to filter the list on."
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/assets/{asset}/multifamily/pricing/{process}/units",
    "method": "listPricingUnits",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "assets/pricing",
    "typeScriptTag": "assetsPricing",
    "description": "List pricing units",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Request a specific page of resources."
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "Limit the number of returned resources."
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/assets/{asset}/multifamily/pricing/{process}/units/{unit}",
    "method": "viewPricingUnit",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "assets/pricing",
    "typeScriptTag": "assetsPricing",
    "description": "View a pricing unit",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Request a specific page of resources."
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "Limit the number of returned resources."
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/assets/{asset}/multifamily/pricing/{process}/units/{unit}",
    "method": "updatePricingUnit",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "assets/pricing",
    "typeScriptTag": "assetsPricing",
    "description": "Update a pricing unit",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "provider_id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "status",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "full_price",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "show_pricing",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "show_online_leasing",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "specials_description",
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
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
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
      apiTitle="SightMap® REST API"
      apiBaseUrl="https://api.sightmap.com/v1"
      apiVersion="v1.20230828"
      endpoints={52}
      sdkMethods={138}
      schemas={144}
      parameters={215}
      difficulty="Hard"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/engrain/sight-map/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/engrain/sight-map/openapi.yaml"
      developerDocumentation="api.sightmap.com/v1/openapi"
    />
  );
}
  