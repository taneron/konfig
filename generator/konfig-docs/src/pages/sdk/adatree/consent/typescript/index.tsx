import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function AdatreeConsentTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="adatree-consent-typescript-sdk"
      metaDescription={`Adatree is a CDR technology intermediary. What does that mean? Simply put, we're the poles and wires connecting Banking, Finance, Energy and Telecommunications with Open Data. Our platform is ready for implementation with out-of-the-box functionality to have you connected to compliant data within a matter of weeks. The new age of data regulations are changing the way FinTech operates. Adatree is your on-ramp to stay plugged into the digital economy.

We work with organisations of all sizes and sectors to provide turnkey solutions. We've built a world-class CDR intermediary platform that is the most robust and flexible in market, ready to scale for any Open Data use case. If the scores of awards don't prove it, our list of satisfied clients ought to.

When you work with Adatree you're working with genuine CDR experts. We live and breathe this stuff, and strive to make it easy for other businesses to access consumer data with confidence.

We'll help you:
- Determine which CDR access model is best for your organisation
- Implement our fully-compliant white-labelled consent dashboard, tailored to your unique business needs
- Meet all compliance and legislative requirements including authentication and consent
- Leverage the full CDR ecosystem with every available API
- Accelerate your time-to-market to weeks (not months!) with our proven streamlined integration process
- Maintain consistent and secure connections to the Consumer Data Right network

We know the Consumer Data Right back-to-front and promise to walk you through every stage of the journey. Ready to take the first step?

Reach out to our team today: https://www.adatree.com.au/contact`}
      company="Adatree"
      serviceName="Consent"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/adatree/consent/logo.jpg"
      companyKebabCase="adatree"
      clientNameCamelCase="adatreeConsent"
      homepage="adatree.com.au/"
      lastUpdated={new Date("2024-03-27T23:56:18.514Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/adatree/consent/favicon.jpg"
      // Missing contactUrl
      contactEmail="engineering@adatree.com.au"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/adatree/consent/imagePreview.png"
      GettingStarted={GettingStarted}
      FirstRequest={FirstRequest}
      categories={["open_banking","fintech","financial_services","data_management","compliance"]}
      methods={[
  {
    "url": "/consents",
    "method": "getAllRecords",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Consent",
    "typeScriptTag": "consent",
    "description": "Get Consents",
    "parameters": [
      {
        "name": "consumerId",
        "schema": "string",
        "required": false,
        "description": "consumeId, please be kindly reminded of proper encoding as Id from some IDP could have special character like '|', which need be encoded as '%7c'. <br/>\nconsumerId should only be used with machine token, otherwise it will be deemed BAD_REQUEST\n",
        "example": "auth0%7c5fbc585628421a006e83d95d"
      },
      {
        "name": "consentId",
        "schema": "string",
        "required": false,
        "description": "consent id",
        "example": "148c9187-e52b-431f-9b24-7225e75ca2be"
      },
      {
        "name": "cdrArrangementId",
        "schema": "string",
        "required": false,
        "description": "cdr arrangement id",
        "example": "45db4977-b12f-42bf-808d-2680eb4bd366"
      },
      {
        "name": "status",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "ACTIVE"
      },
      {
        "name": "accessFrequency",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "ONCE_OFF"
      },
      {
        "name": "postUsageAction",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "DELETION"
      },
      {
        "name": "directMarketingAllowed",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": false
      },
      {
        "name": "useCases",
        "schema": "array",
        "required": false,
        "description": "UseCase ids"
      },
      {
        "name": "dataHolderBrandId",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "55b3299a-3e50-48a2-a190-cca263ccaba5"
      },
      {
        "name": "oldestCreated",
        "schema": "string",
        "required": false,
        "description": "Constrain the consent with created time at or after this date/time. If absent defaults to newestCreated minus 90 days.  Format is aligned to DateTimeString common type",
        "example": "1997-01-12T15:43:00.121Z"
      },
      {
        "name": "newestCreated",
        "schema": "string",
        "required": false,
        "description": "Constrain the consent with created time at or before this date/time. If absent defaults to today. Format is aligned to DateTimeString common type",
        "example": "1997-01-12T15:43:00.121Z"
      },
      {
        "name": "oldestRevoked",
        "schema": "string",
        "required": false,
        "description": "Constrain the consent with revoked time at or after this date/time. If absent defaults to newestRevoked minus 90 days.  Format is aligned to DateTimeString common type",
        "example": "1997-01-12T15:43:00.121Z"
      },
      {
        "name": "newestRevoked",
        "schema": "string",
        "required": false,
        "description": "Constrain the consent with revoked time at or before this date/time. If absent defaults to today. Format is aligned to DateTimeString common type",
        "example": "1997-01-12T15:43:00.121Z"
      },
      {
        "name": "oldestSharingEndDate",
        "schema": "string",
        "required": false,
        "description": "Constrain the consent with sharingEndDate time at or after this date/time. If absent defaults to newestSharingEndDate minus 90 days.  Format is aligned to DateTimeString common type",
        "example": "1997-01-12T15:43:00.121Z"
      },
      {
        "name": "newestSharingEndDate",
        "schema": "string",
        "required": false,
        "description": "Constrain the consent with sharingEndDate time at or before this date/time. If absent defaults to today. Format is aligned to DateTimeString common type",
        "example": "1997-01-12T15:43:00.121Z"
      },
      {
        "name": "externalId",
        "schema": "string",
        "required": false,
        "description": "Constrain the consent by externalId",
        "example": "an-external-id"
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/consents",
    "method": "recordCreate",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Consent",
    "typeScriptTag": "consent",
    "description": "Create Consent",
    "parameters": [
      {
        "name": "adatreeConsumerUserAgent",
        "schema": "string",
        "description": "Mandatory for calls using a Machine token. The consumer's original User Agent header",
        "example": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36"
      },
      {
        "name": "adatreeConsumerIpAddress",
        "schema": "string",
        "description": "Mandatory for calls using a Machine token. The consumer's original IP address.",
        "example": "127.0.0.1"
      },
      {
        "name": "consumerEmail",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "consumer@example.com"
      },
      {
        "name": "sharingEndDate",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "2023-04-19T15:43:00.121Z"
      },
      {
        "name": "dataHolderBrandId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "55b3299a-3e50-48a2-a190-cca263ccaba5"
      },
      {
        "name": "useCaseId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "HOME_LOAN"
      },
      {
        "name": "postUsageAction",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "DELETION"
      },
      {
        "name": "directMarketingAllowed",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": false
      },
      {
        "name": "externalId",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "external-id-by-adatree-customer"
      },
      {
        "name": "consumerId",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "auth0%7c5fbc585628421a006e83d95d"
      },
      {
        "name": "grantee",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "customData",
        "schema": "object",
        "required": false,
        "description": "",
        "example": {
          "employerName": "Adatree"
        }
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
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/consents/{consentId}",
    "method": "revokeRecord",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Consent",
    "typeScriptTag": "consent",
    "description": "Revoke Consent",
    "parameters": [
      {
        "name": "consentId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "148c9187-e52b-431f-9b24-7225e75ca2be"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "default response"
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
    "url": "/consents/{consentId}",
    "method": "getRecord",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Consent",
    "typeScriptTag": "consent",
    "description": "Get Consent",
    "parameters": [
      {
        "name": "consentId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "148c9187-e52b-431f-9b24-7225e75ca2be"
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
    "url": "/consents/{consentId}",
    "method": "updateViaDashboard",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Consent",
    "typeScriptTag": "consent",
    "description": "Update a consent's via dashboard or back channel",
    "parameters": [
      {
        "name": "consentId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "148c9187-e52b-431f-9b24-7225e75ca2be"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "consent successfully updated"
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
    "url": "/consents/{consentId}/authorization",
    "method": "redirectUrl",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Consent Authorization",
    "typeScriptTag": "consentAuthorization",
    "description": "Get Authorization Redirect URL for a Consent",
    "parameters": [
      {
        "name": "consentId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "148c9187-e52b-431f-9b24-7225e75ca2be"
      },
      {
        "name": "state",
        "schema": "string",
        "required": false,
        "description": "A state is generated by the consent user-agent (https://developer.adatree.com.au/docs/api/consent/ and is used to bind the redirection response from a Data Holder with a user session as per https://openid.net/specs/openid-financial-api-part-1-1_0-final.html#public-client. It is sent in the authentication request, and is then also included redirect from the ADH to the ADR. This allows the ADR client application prevent CSRF attacks. Must be unique per authorization request."
      },
      {
        "name": "redirectUri",
        "schema": "string",
        "required": false,
        "description": "The URI to redirect to from the data holder when the consumer has finished data holder authentication. Must be from the list of redirect URIs configured at the ACCC register."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Authorization link for a Consent"
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
      }
    ]
  },
  {
    "url": "/consents/events",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Get consent events",
    "typeScriptTag": "getConsentEvents",
    "description": "Retrieve consent events",
    "parameters": [
      {
        "name": "oldest",
        "schema": "string",
        "required": false,
        "description": "Constrain the consent event result list with timestamp at or after this date/time. Format is aligned to DateTimeString common type",
        "example": "2022-02-06T08:17:26Z"
      },
      {
        "name": "newest",
        "schema": "string",
        "required": false,
        "description": "Constrain the consent event result list with timestamp at or before this date/time. Format is aligned to DateTimeString common type",
        "example": "2022-02-01T15:43:00.121Z"
      },
      {
        "name": "consentId",
        "schema": "string",
        "required": false,
        "description": "consent id",
        "example": "148c9187-e52b-431f-9b24-7225e75ca2be"
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "Page of results to request (standard pagination)",
        "example": 1,
        "default": 1
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "description": "Page size to request. Default is 25 (standard pagination)",
        "example": 25,
        "default": 25
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/software-products/{softwareProductId}/data-holders",
    "method": "listAvailable",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Data Holders",
    "typeScriptTag": "dataHolders",
    "description": "Get Data Holders",
    "parameters": [
      {
        "name": "softwareProductId",
        "schema": "string",
        "required": true,
        "description": "The identifier of the software product registered at the ACCC registry. <br/>\nThe list of data holders returned is the list where dynamic client reigstration has been peformed at each data holder for this software product. <br/>\nThe list of data holders for a use case can be restricted by management API at Use Case or Software Product level\n",
        "example": "SOFTWAREPRODUCTID"
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
    "url": "/tokens",
    "method": "establishDataAccess",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Tokens",
    "typeScriptTag": "tokens",
    "description": "Create Tokens",
    "parameters": [
      {
        "name": "code",
        "schema": "string",
        "description": "",
        "example": "lFDNAS-JVITGzvba3yXfrPR8hWZlCKy6nutbzrmXKop56\""
      },
      {
        "name": "state",
        "schema": "string",
        "description": "",
        "example": "f99953a5-49a5-497c-91b6-4bd14cdace74"
      },
      {
        "name": "id_token",
        "schema": "string",
        "description": "",
        "example": "eyJraWQiOiIxZTlnZGs3IiwiYWxnIjoiUl..."
      },
      {
        "name": "response",
        "schema": "string",
        "description": "",
        "example": "eyJraWQiOiIxZTlnZGs3IiwiYWxnIjoiUl..."
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
    "url": "/use-cases",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "UseCase",
    "typeScriptTag": "useCase",
    "description": "Get Use-cases",
    "parameters": [
      {
        "name": "combineScopes",
        "schema": "boolean",
        "required": false,
        "description": "Combine scopes that can be combined according to the CDR Consumer Experience Standards",
        "example": true
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
        "statusCode": "429",
        "description": ""
      }
    ]
  }
]
    }
      language="TypeScript"
      apiTitle="Adatree ADR Platform Consent API"
      apiBaseUrl="https://cdr-insights-prod.api.adatree.com.au"
      apiVersion="1.3.0"
      endpoints={7}
      sdkMethods={10}
      schemas={35}
      parameters={45}
      difficulty="Easy"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/adatree/consent/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/adatree/consent/openapi.yaml"
      developerDocumentation="developer.adatree.com.au/docs/api/consent/"
    />
  );
}
  