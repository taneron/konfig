import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function RelynkTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="relynk-typescript-sdk"
      metaDescription={`Relynk empowers PropTech companies by providing seamless access to a commercial building's real-time data. Our easy-to-use API platform connects you to an extensive range of real-time information, including occupancy levels, energy usage, ambient conditions, and more, supercharging your data-driven solutions and giving you the edge you need to succeed.

With Relynk, tapping into the expansive network of sensors and IoT devices within any commercial building has never been simpler.`}
      company="Relynk"
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/relynk/logo.png"
      companyKebabCase="relynk"
      clientNameCamelCase="relynk"
      homepage="www.relynk.io/"
      lastUpdated={new Date("2024-03-29T19:01:06.634Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/relynk/favicon.png"
      // Missing contactUrl
      // Missing contactEmail
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/relynk/imagePreview.png"
      GettingStarted={GettingStarted}
      FirstRequest={FirstRequest}
      categories={["real_estate_technology","property_management","iot","data","data_management"]}
      methods={[
  {
    "url": "/query",
    "method": "pointDataFilters",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Query",
    "typeScriptTag": "query",
    "description": "Query for point data",
    "parameters": [
      {
        "name": "filters",
        "schema": "array",
        "required": true,
        "description": "",
        "example": [
          {
            "filter_on": "point_subtype",
            "value": [
              "https://brickschema.org/schema/Brick#Air_Temperature_Sensor"
            ]
          }
        ]
      },
      {
        "name": "group_on",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "https://w3id.org/rec#Building"
      },
      {
        "name": "to",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "2020-01-01T00:00:00.000Z"
      },
      {
        "name": "from",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "2020-01-02T00:00:00.000Z"
      },
      {
        "name": "resolution",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "RESOLUTION"
      },
      {
        "name": "is_timeseries",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "only_latest_value",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "limit",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "offset",
        "schema": "number",
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
  }
]
    }
      language="TypeScript"
      apiTitle="Relynk Query API"
      apiBaseUrl="https://api.relynk.io/v2.0.0"
      apiVersion="2.0.0"
      endpoints={1}
      sdkMethods={1}
      schemas={4}
      parameters={9}
      difficulty="Very Easy"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/relynk/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/relynk/openapi.yaml"
      developerDocumentation="docs.relynk.io/docs/intro"
    />
  );
}
  