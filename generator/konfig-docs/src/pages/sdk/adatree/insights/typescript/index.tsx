import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function AdatreeInsightsTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="adatree-insights-typescript-sdk"
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
      serviceName="Insights"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/adatree/insights/logo.jpg"
      companyKebabCase="adatree"
      clientNameCamelCase="adatreeInsights"
      homepage="adatree.com.au/"
      lastUpdated={new Date("2024-03-27T23:42:08.390Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/adatree/insights/favicon.jpg"
      contactUrl="https://adatree.com.au"
      contactEmail="engineering@adatree.com.au"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/adatree/insights/imagePreview.png"
      GettingStarted={GettingStarted}
      FirstRequest={FirstRequest}
      categories={["open_banking","fintech","financial_services","data_management","compliance"]}
      methods={[
  {
    "url": "/insights/banking/account",
    "method": "getInsights",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Banking",
    "typeScriptTag": "banking",
    "description": "Get Account Insights",
    "parameters": [
      {
        "name": "useCaseIds",
        "schema": "array",
        "description": "Used to filter results on the useCaseId field."
      },
      {
        "name": "cdrArrangementIds",
        "schema": "array",
        "description": "Used to filter results on the cdrArrangementId field."
      },
      {
        "name": "consentIds",
        "schema": "array",
        "description": "Used to filter results on the consentId field."
      },
      {
        "name": "consumerIds",
        "schema": "array",
        "description": "Used to filter results on the consumerId field."
      },
      {
        "name": "dataHolderBrandIds",
        "schema": "array",
        "description": "Used to filter results on the dataHolderBrandId field."
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
        "description": "Page size to request",
        "example": 25
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
    "url": "/insights/energy/account",
    "method": "getInsights",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Energy",
    "typeScriptTag": "energy",
    "description": "Get Account Insights",
    "parameters": [
      {
        "name": "useCaseIds",
        "schema": "array",
        "description": "Used to filter results on the useCaseId field."
      },
      {
        "name": "cdrArrangementIds",
        "schema": "array",
        "description": "Used to filter results on the cdrArrangementId field."
      },
      {
        "name": "consentIds",
        "schema": "array",
        "description": "Used to filter results on the consentId field."
      },
      {
        "name": "consumerIds",
        "schema": "array",
        "description": "Used to filter results on the consumerId field."
      },
      {
        "name": "dataHolderBrandIds",
        "schema": "array",
        "description": "Used to filter results on the dataHolderBrandId field."
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
        "description": "Page size to request",
        "example": 25
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
  }
]
    }
      language="TypeScript"
      apiTitle="Adatree Insights API"
      apiBaseUrl="https://cdr-insights-prod.api.adatree.com.au"
      apiVersion="1.0.0"
      endpoints={2}
      sdkMethods={2}
      schemas={15}
      parameters={14}
      difficulty="Very Easy"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/adatree/insights/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/adatree/insights/openapi.yaml"
      developerDocumentation="developer.adatree.com.au/docs/api/insights/"
    />
  );
}
  