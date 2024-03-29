import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function RookTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="rook-typescript-sdk"
      metaDescription={`Our API empowers companies with more meaningful health data. Easily process and embed data from hundreds of wearables with our single integration and gain access to deeper understanding and more actionable insights that allow you to make more informed decisions, find better solutions, and drive innovation.`}
      company="Rook"
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/rook/logo.png"
      companyKebabCase="rook"
      clientNameCamelCase="rook"
      homepage="www.tryrook.io/"
      lastUpdated={new Date("2024-03-29T18:20:16.115Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/rook/favicon.png"
      // Missing contactUrl
      // Missing contactEmail
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/rook/imagePreview.png"
      GettingStarted={GettingStarted}
      FirstRequest={FirstRequest}
      categories={["wearables","health_data","actionable_insights","biomarker"]}
      methods={[
  {
    "url": "/api/v1/client_uuid/{client_uuid}/user_id/{user_id}/data_sources/authorizers",
    "method": "getDataSourcesAuthorizers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "User",
    "typeScriptTag": "user",
    "description": "[User][Data Sources][Authorizers]",
    "parameters": [
      {
        "name": "clientUuid",
        "schema": "string",
        "required": true,
        "description": "A unique identifier for each client, in UUID4 format. Provided by ROOK upon signing service agreements.",
        "example": "demoClientUUID"
      },
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier for the user. Can include numerals, UUID4, strings, or other identifiers. Length must be between 1 to 50 characters.",
        "example": "demoUserId"
      },
      {
        "name": "redirectUrl",
        "schema": "string",
        "required": false,
        "description": "(https://docs.tryrook.io/: Designates a custom URL to which the user is redirected after a successful authentication or linking process. In its absence, the redirection will be to ROOK's connections page (or the default configured) to continue the post-authentication flow.\n",
        "example": "https://example.com"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/user_id/{user_id}/data_sources/authorized",
    "method": "getAuthorizedDataSources",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "User",
    "typeScriptTag": "user",
    "description": "[User][Data Sources][Authorized]",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier for the user. Can include numerals, UUID4, strings, or other identifiers. Length must be between 1 to 50 characters.",
        "example": "demoUserId"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/processed_data/user/info",
    "method": "getInfo",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "User",
    "typeScriptTag": "user",
    "description": "[User][Info]",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier for the user. Can include numerals, UUID4, strings, or other identifiers. Length must be between 1 to 50 characters.",
        "example": "demoUserId"
      },
      {
        "name": "date",
        "schema": "string",
        "required": true,
        "description": "Date in YYYY-MM-DD format.",
        "example": "2023-01-01"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "204",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/user_id/{user_id}/data_sources/revoke_auth",
    "method": "revokeAuthData",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "User",
    "typeScriptTag": "user",
    "description": "[User][Data Sources][Revoke]",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier for the user. Can include numerals, UUID4, strings, or other identifiers. Length must be between 1 to 50 characters.",
        "example": "demoUserId"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "204",
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
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/processed_data/physical_health/summary",
    "method": "getSummary",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "PhysicalHealthSummary",
    "typeScriptTag": "physicalHealthSummary",
    "description": "[Physical][Summary]",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier for the user. Can include numerals, UUID4, strings, or other identifiers. Length must be between 1 to 50 characters.",
        "example": "demoUserId"
      },
      {
        "name": "date",
        "schema": "string",
        "required": true,
        "description": "Date in YYYY-MM-DD format.",
        "example": "2023-01-01"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "204",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/processed_data/physical_health/events/activity",
    "method": "getActivityEventData",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Health",
    "typeScriptTag": "health",
    "description": "[Physical][Events][Activity]",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier for the user. Can include numerals, UUID4, strings, or other identifiers. Length must be between 1 to 50 characters.",
        "example": "demoUserId"
      },
      {
        "name": "date",
        "schema": "string",
        "required": true,
        "description": "Date in YYYY-MM-DD format.",
        "example": "2023-01-01"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "204",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/processed_data/physical_health/events/heart_rate",
    "method": "getHeartRateEventData",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Health",
    "typeScriptTag": "health",
    "description": "[Physical][Events][Heart Rate]",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier for the user. Can include numerals, UUID4, strings, or other identifiers. Length must be between 1 to 50 characters.",
        "example": "demoUserId"
      },
      {
        "name": "date",
        "schema": "string",
        "required": true,
        "description": "Date in YYYY-MM-DD format.",
        "example": "2023-01-01"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "204",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/processed_data/physical_health/events/oxygenation",
    "method": "getOxygenationEventData",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Health",
    "typeScriptTag": "health",
    "description": "[Physical][Events][Oxygenation]",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier for the user. Can include numerals, UUID4, strings, or other identifiers. Length must be between 1 to 50 characters.",
        "example": "demoUserId"
      },
      {
        "name": "date",
        "schema": "string",
        "required": true,
        "description": "Date in YYYY-MM-DD format.",
        "example": "2023-01-01"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "204",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/processed_data/physical_health/events/stress",
    "method": "getStressEventData",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Health",
    "typeScriptTag": "health",
    "description": "[Physical][Events][Stress]",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier for the user. Can include numerals, UUID4, strings, or other identifiers. Length must be between 1 to 50 characters.",
        "example": "demoUserId"
      },
      {
        "name": "date",
        "schema": "string",
        "required": true,
        "description": "Date in YYYY-MM-DD format.",
        "example": "2023-01-01"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "204",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/processed_data/sleep_health/summary",
    "method": "getSummaryData",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "SleepHealthSummary",
    "typeScriptTag": "sleepHealthSummary",
    "description": "[Sleep][Summary]",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier for the user. Can include numerals, UUID4, strings, or other identifiers. Length must be between 1 to 50 characters.",
        "example": "demoUserId"
      },
      {
        "name": "date",
        "schema": "string",
        "required": true,
        "description": "Date in YYYY-MM-DD format.",
        "example": "2023-01-01"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "204",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/processed_data/body_health/summary",
    "method": "getSummary",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Health",
    "typeScriptTag": "health",
    "description": "[Body][Summary]",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier for the user. Can include numerals, UUID4, strings, or other identifiers. Length must be between 1 to 50 characters.",
        "example": "demoUserId"
      },
      {
        "name": "date",
        "schema": "string",
        "required": true,
        "description": "Date in YYYY-MM-DD format.",
        "example": "2023-01-01"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "204",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/processed_data/body_health/events/body_metrics",
    "method": "getBodyMetricsEventData",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Health",
    "typeScriptTag": "health",
    "description": "[Body][Events][Body Metrics]",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier for the user. Can include numerals, UUID4, strings, or other identifiers. Length must be between 1 to 50 characters.",
        "example": "demoUserId"
      },
      {
        "name": "date",
        "schema": "string",
        "required": true,
        "description": "Date in YYYY-MM-DD format.",
        "example": "2023-01-01"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "204",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/processed_data/body_health/events/heart_rate",
    "method": "getHeartRateEvent",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Health",
    "typeScriptTag": "health",
    "description": "[Body][Events][Heart Rate]",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier for the user. Can include numerals, UUID4, strings, or other identifiers. Length must be between 1 to 50 characters.",
        "example": "demoUserId"
      },
      {
        "name": "date",
        "schema": "string",
        "required": true,
        "description": "Date in YYYY-MM-DD format.",
        "example": "2023-01-01"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "204",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/processed_data/body_health/events/oxygenation",
    "method": "getOxygenationEventData",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Health",
    "typeScriptTag": "health",
    "description": "[Body][Events][Oxygenation]",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier for the user. Can include numerals, UUID4, strings, or other identifiers. Length must be between 1 to 50 characters.",
        "example": "demoUserId"
      },
      {
        "name": "date",
        "schema": "string",
        "required": true,
        "description": "Date in YYYY-MM-DD format.",
        "example": "2023-01-01"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "204",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/processed_data/body_health/events/nutrition",
    "method": "getData",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Nutrition",
    "typeScriptTag": "nutrition",
    "description": "[Body][Events][Nutrition]",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier for the user. Can include numerals, UUID4, strings, or other identifiers. Length must be between 1 to 50 characters.",
        "example": "demoUserId"
      },
      {
        "name": "date",
        "schema": "string",
        "required": true,
        "description": "Date in YYYY-MM-DD format.",
        "example": "2023-01-01"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "204",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/processed_data/body_health/events/mood",
    "method": "eventDataRetrieve",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Mood",
    "typeScriptTag": "mood",
    "description": "[Body][Events][Mood]",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier for the user. Can include numerals, UUID4, strings, or other identifiers. Length must be between 1 to 50 characters.",
        "example": "demoUserId"
      },
      {
        "name": "date",
        "schema": "string",
        "required": true,
        "description": "Date in YYYY-MM-DD format.",
        "example": "2023-01-01"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "204",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/processed_data/body_health/events/hydration",
    "method": "getEventData",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Hydration",
    "typeScriptTag": "hydration",
    "description": "[Body][Events][Hydration]",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier for the user. Can include numerals, UUID4, strings, or other identifiers. Length must be between 1 to 50 characters.",
        "example": "demoUserId"
      },
      {
        "name": "date",
        "schema": "string",
        "required": true,
        "description": "Date in YYYY-MM-DD format.",
        "example": "2023-01-01"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "204",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/processed_data/body_health/events/blood_glucose",
    "method": "getBloodGlucoseEventData",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Health",
    "typeScriptTag": "health",
    "description": "[Body][Events][Blood Glucose]",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier for the user. Can include numerals, UUID4, strings, or other identifiers. Length must be between 1 to 50 characters.",
        "example": "demoUserId"
      },
      {
        "name": "date",
        "schema": "string",
        "required": true,
        "description": "Date in YYYY-MM-DD format.",
        "example": "2023-01-01"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "204",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/processed_data/body_health/events/blood_pressure",
    "method": "getBloodPressureEventData",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Health",
    "typeScriptTag": "health",
    "description": "[Body][Events][Blood Pressure]",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier for the user. Can include numerals, UUID4, strings, or other identifiers. Length must be between 1 to 50 characters.",
        "example": "demoUserId"
      },
      {
        "name": "date",
        "schema": "string",
        "required": true,
        "description": "Date in YYYY-MM-DD format.",
        "example": "2023-01-01"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "204",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/processed_data/body_health/events/temperature",
    "method": "getTemperatureEventData",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Health",
    "typeScriptTag": "health",
    "description": "[Body][Events][Temperature]",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier for the user. Can include numerals, UUID4, strings, or other identifiers. Length must be between 1 to 50 characters.",
        "example": "demoUserId"
      },
      {
        "name": "date",
        "schema": "string",
        "required": true,
        "description": "Date in YYYY-MM-DD format.",
        "example": "2023-01-01"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "204",
        "description": ""
      }
    ]
  }
]
    }
      language="TypeScript"
      apiTitle="ROOK"
      apiBaseUrl="https://api.rook-connect.com"
      apiVersion="2.0.1"
      endpoints={20}
      sdkMethods={20}
      schemas={37}
      parameters={39}
      difficulty="Easy"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/rook/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/rook/openapi.yaml"
      developerDocumentation="docs.tryrook.io/"
    />
  );
}
  