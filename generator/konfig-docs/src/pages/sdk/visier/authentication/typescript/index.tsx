import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function VisierAuthenticationTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="visier-authentication-typescript-sdk"
      metaDescription={`Visier is the people impact platform that puts the right insights in the right hands, at the right time, throughout the business.

We help organizations of all sizes unlock the power of their people data for business impact. This includes enterprises using our category-leading people analytics software, partners embedding our solution into existing apps, and developers building on the Visier platform.

As the global leader in people analytics, Visier has over 25,000 customers in 75 countries around the world, including enterprises like BASF, Bridgestone, Electronic Arts, McKesson, MerckKGaA, and more. Visier is headquartered in Vancouver, BC with offices and team members worldwide.`}
      company="Visier"
      serviceName="Authentication"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/visier/authentication/logo.png"
      companyKebabCase="visier"
      clientNameCamelCase="visierAuthentication"
      homepage="visier.com"
      lastUpdated={new Date("2024-03-25T20:47:15.965Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/visier/authentication/favicon.png"
      // Missing contactUrl
      // Missing contactEmail
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/visier/authentication/imagePreview.jpg"
      GettingStarted={GettingStarted}
      FirstRequest={FirstRequest}
      categories={["enterprise_software","people_analytics","business_impact","team_management","workforce_insights","human_resources","workforce_intelligence","workforce_analytics","hr_metrics","hr_analytics","hr_dashboard","hr_reporting","workforce_planning","human_capital_management","workforce_solutions","talent_acquisition_analytics"]}
      methods={[
  {
    "url": "/v1/admin/visierSecureTicket",
    "method": "ticketAuthentication",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Authentication",
    "typeScriptTag": "authentication",
    "description": "Generate a legacy Visier secure ticket",
    "parameters": [
      {
        "name": "username",
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
        "statusCode": "default",
        "description": "The response structure for errors."
      }
    ]
  },
  {
    "url": "/v1/admin/visierSecureToken",
    "method": "asidTokenAuthentication",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Authentication",
    "typeScriptTag": "authentication",
    "description": "Generate a Visier authentication token",
    "parameters": [
      {
        "name": "username",
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
        "statusCode": "default",
        "description": "The response structure for errors."
      }
    ]
  },
  {
    "url": "/v1/auth/oauth2/authorize",
    "method": "oAuth2Authorize",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Authentication",
    "typeScriptTag": "authentication",
    "description": "Initiate an OAuth2 authorization code flow.",
    "parameters": [
      {
        "name": "redirectUri",
        "schema": "string",
        "required": false,
        "description": "The optional URI to redirect to after authorization."
      },
      {
        "name": "responseType",
        "schema": "string",
        "required": true,
        "description": "The response type. Must be `code`.",
        "example": "RESPONSE_TYPE"
      },
      {
        "name": "clientId",
        "schema": "string",
        "required": true,
        "description": "The ID of the pre-registered client application.",
        "example": "CLIENT_ID"
      },
      {
        "name": "scope",
        "schema": "string",
        "required": false,
        "description": "The OAuth 2.0 scope of the authorization request. Defaults to `read`."
      }
    ],
    "responses": [
      {
        "statusCode": "default",
        "description": "The response structure for errors."
      },
      {
        "statusCode": "3XX",
        "description": "Redirect to authorization page."
      }
    ]
  },
  {
    "url": "/v1/auth/oauth2/token",
    "method": "oAuth2Token",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Authentication",
    "typeScriptTag": "authentication",
    "description": "Generate a JSON Web Token (JWT) for the specified user.",
    "parameters": [
      {
        "name": "grant_type",
        "schema": "string",
        "description": ""
      },
      {
        "name": "client_id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "redirect_uri",
        "schema": "string",
        "description": ""
      },
      {
        "name": "code",
        "schema": "string",
        "description": ""
      },
      {
        "name": "username",
        "schema": "string",
        "description": ""
      },
      {
        "name": "password",
        "schema": "string",
        "description": ""
      },
      {
        "name": "asid_token",
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
        "statusCode": "default",
        "description": "The response structure for errors."
      }
    ]
  }
]
    }
      language="TypeScript"
      apiTitle="Visier Authentication APIs"
      apiBaseUrl="https://{vanity-name}.api.visier.io"
      apiVersion="22222222.99201.1200"
      endpoints={4}
      sdkMethods={4}
      schemas={11}
      parameters={15}
      difficulty="Very Easy"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/visier/authentication/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/visier/authentication/openapi.yaml"
      developerDocumentation="docs.visier.com/developer/apis/apis.htm"
    />
  );
}
  