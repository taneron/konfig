import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function Sdk30KMilefyTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="30-k-milefy-typescript-sdk"
      metaDescription={`30K is the only remaining independent provider of Fare Attribute and the only credible provider of Mileage Earning and Frequent Flyer Benefit data to help personalize flight search results for air travel shoppers. Proven increase in conversion for air travel retailers and happiness for travelers.

- Reaching 2.3 M users per day, mainly in Europe, China and USA.
- Voted "Best Business Travel Innovation" by GBTA in 2017.
- One of top companies to watch in 2019 according to Amadeus.`}
      company="30K"
      serviceName="Milefy"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/30-k/milefy/logo.png"
      companyKebabCase="30-k"
      clientNameCamelCase="30KMilefy"
      homepage="30k.com"
      lastUpdated={new Date("2024-03-29T18:55:05.537Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/30-k/milefy/favicon.png"
      contactUrl="http://www.30k.com/"
      contactEmail="support@30k.com"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/30-k/milefy/imagePreview.jpg"
      GettingStarted={GettingStarted}
      FirstRequest={FirstRequest}
      categories={["travel_expenses","online_travel","air_travel_loyalty_programs"]}
      methods={[
  {
    "url": "/programs",
    "method": "getFrequentFlyerPrograms",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Static data",
    "typeScriptTag": "staticData",
    "description": "Get program collection",
    "parameters": [
      {
        "name": "authentication",
        "schema": "string",
        "required": false,
        "description": "Filter programs based on supported authentication method(https://milefy-api-docs.30k.com/",
        "example": "simple,none"
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
    "url": "/programs/{code}",
    "method": "getFrequentFlyerProgram",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Static data",
    "typeScriptTag": "staticData",
    "description": "Get program",
    "parameters": [
      {
        "name": "code",
        "schema": "string",
        "required": true,
        "description": "Frequent flyer program code",
        "example": "BAC"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Frequent flyer program"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Not found"
      }
    ]
  },
  {
    "url": "/benefits",
    "method": "getStatusBenefitTypeCollection",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Static data",
    "typeScriptTag": "staticData",
    "description": "Get status benefit type collection",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/benefits/{code}",
    "method": "getStatusBenefitType",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Static data",
    "typeScriptTag": "staticData",
    "description": "Get status benefit type",
    "parameters": [
      {
        "name": "code",
        "schema": "string",
        "required": true,
        "description": "Status benefit type code",
        "example": "CMPCHG"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Invalid benefit type code"
      },
      {
        "statusCode": "404",
        "description": "Not found"
      }
    ]
  },
  {
    "url": "/attributes",
    "method": "getFareAttributeTypes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Static data",
    "typeScriptTag": "staticData",
    "description": "Get fare attribute type collection",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/attributes/{code}",
    "method": "getFareAttributeType",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Static data",
    "typeScriptTag": "staticData",
    "description": "Get fare attribute type",
    "parameters": [
      {
        "name": "code",
        "schema": "string",
        "required": true,
        "description": "Fare attribute type code",
        "example": "XTRBGG"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Invalid fare attribute type code"
      },
      {
        "statusCode": "404",
        "description": "Not found"
      }
    ]
  },
  {
    "url": "/calculate",
    "method": "calculateAttributesBenefits",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Flights",
    "typeScriptTag": "flights",
    "description": "Calculate attributes & benefits",
    "parameters": [
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "Used to select returned properties and optimize the processing time of the request. Based on XPath queries. [Learn more](http://milefy-api-docs.30k.com).\n",
        "example": "id,flights(id,programs(code,statusTiers(https://milefy-api-docs.30k.com/))"
      },
      {
        "name": "traveler",
        "schema": "string",
        "required": true,
        "description": "[Traveler](http://milefy-api-docs.30k.com) ID for the flight results personalization.\n",
        "example": "abc111"
      },
      {
        "name": "scope",
        "schema": "string",
        "required": false,
        "description": "If not specified, ```memberships``` is assumed as default value, which results in calculations returned for traveler's memberships. Alternatively you can use ```memberships_and_default_program``` value to get calculations for both: traveler's memberships and default program of marketing airline in case none of memberships apply for a particular flight.\n"
      },
      {
        "name": "sourceClientId",
        "schema": "string",
        "required": false,
        "description": "Client ID for statistical purposes",
        "example": "source-client-abc-111"
      },
      {
        "name": "flights",
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
        "description": ""
      }
    ]
  },
  {
    "url": "/fare-attributes",
    "method": "calculateFareAttributes",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Flights",
    "typeScriptTag": "flights",
    "description": "Calculate fare attributes",
    "parameters": [
      {
        "name": "undefined",
        "schema": "string",
        "required": false,
        "description": "Scope of calculation: ```attributes``` to return only fare attributes and ```attributes_and_mileage``` to return both fare attributes and mileage earnings.\n",
        "default": "attributes"
      },
      {
        "name": "legs",
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
        "description": ""
      }
    ]
  },
  {
    "url": "/travelers",
    "method": "listCollection",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Travelers",
    "typeScriptTag": "travelers",
    "description": "Get traveler collection",
    "parameters": [
      {
        "name": "offset",
        "schema": "integer",
        "description": "Number of items skipped from the beginning of the collection.",
        "example": 100
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Maximum number of items to return.",
        "default": 100
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
    "url": "/travelers",
    "method": "createProfile",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Travelers",
    "typeScriptTag": "travelers",
    "description": "Create traveler",
    "parameters": [
      {
        "name": "country",
        "schema": "string",
        "description": "",
        "example": "DE"
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
      }
    ]
  },
  {
    "url": "/travelers/{id}",
    "method": "removeProfile",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Travelers",
    "typeScriptTag": "travelers",
    "description": "Delete traveler",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Traveler ID",
        "example": "abc111"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Traveler deleted"
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/travelers/{id}",
    "method": "getProfile",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Travelers",
    "typeScriptTag": "travelers",
    "description": "Get traveler",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Traveler ID",
        "example": "abc111"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/travelers/{id}",
    "method": "updateProfile",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Travelers",
    "typeScriptTag": "travelers",
    "description": "Edit traveler",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Traveler ID",
        "example": "abc111"
      },
      {
        "name": "country",
        "schema": "string",
        "description": "",
        "example": "DE"
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/travelers/{id}/memberships",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Memberships",
    "typeScriptTag": "memberships",
    "description": "Get membership collection",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Traveler ID",
        "example": "abc111"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/travelers/{id}/memberships",
    "method": "createFrequentFlyerProgramMembership",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Memberships",
    "typeScriptTag": "memberships",
    "description": "Create membership",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Traveler ID",
        "example": "abc111"
      },
      {
        "name": "program",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "BAC"
      },
      {
        "name": "memberNumber",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "5345436"
      },
      {
        "name": "memberName",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Mr. Smith"
      },
      {
        "name": "mileageEarnings",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "statusTier",
        "schema": "integer",
        "required": false,
        "description": "",
        "example": 8
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
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "409",
        "description": "Conflict (such membership already exists)"
      }
    ]
  },
  {
    "url": "/travelers/{id}/memberships/{code}",
    "method": "deleteMembership",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Memberships",
    "typeScriptTag": "memberships",
    "description": "Delete membership",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Traveler ID",
        "example": "abc111"
      },
      {
        "name": "code",
        "schema": "string",
        "required": true,
        "description": "Frequent flyer program code",
        "example": "BAC"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Membership deleted"
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/travelers/{id}/memberships/{code}",
    "method": "getMembershipByCode",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Memberships",
    "typeScriptTag": "memberships",
    "description": "Get membership",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Traveler ID",
        "example": "abc111"
      },
      {
        "name": "code",
        "schema": "string",
        "required": true,
        "description": "Frequent flyer program code",
        "example": "BAC"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/travelers/{id}/memberships/{code}",
    "method": "editTravelerMembership",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Memberships",
    "typeScriptTag": "memberships",
    "description": "Edit membership",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Traveler ID",
        "example": "abc111"
      },
      {
        "name": "code",
        "schema": "string",
        "required": true,
        "description": "Frequent flyer program code",
        "example": "BAC"
      },
      {
        "name": "program",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "BAC"
      },
      {
        "name": "memberNumber",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "5345436"
      },
      {
        "name": "memberName",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Mr. Smith"
      },
      {
        "name": "mileageEarnings",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "statusTier",
        "schema": "integer",
        "required": false,
        "description": "",
        "example": 8
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
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "409",
        "description": ""
      }
    ]
  }
]
    }
      language="TypeScript"
      apiTitle="Milefy API"
      apiBaseUrl="milefy-api.30k.com"
      apiVersion="3.0"
      endpoints={12}
      sdkMethods={18}
      schemas={41}
      parameters={36}
      difficulty="Easy"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/30-k/milefy/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/30-k/milefy/openapi.yaml"
      developerDocumentation="milefy-api-docs.30k.com/"
    />
  );
}
  