import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function GlobalPredictionsIncTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="global-predictions-inc-typescript-sdk"
      metaDescription={`Global Predictions is building an AI-powered WealthOS, a full-stack solution for financial advice and personalized recommendations built on top of our proprietary Economic Insights Engine. We power fintech solutions for millions of people through the GP API and customized insights. Our flagship product is PortfolioPilot for individuals, the world's best financial advisor, with over $6.2B assets on platform.

Please read our important disclosures: https://www.globalpredictions.com/disclosures`}
      company="Global Predictions Inc"
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/global-predictions-inc/logo.png"
      companyKebabCase="global-predictions-inc"
      clientNameCamelCase="globalPredictionsInc"
      homepage="www.globalpredictions.com/"
      lastUpdated={new Date("2024-03-28T23:24:57.727Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/global-predictions-inc/favicon.jpg"
      // Missing contactUrl
      contactEmail="support@globalpredictions.com"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/global-predictions-inc/imagePreview.png"
      GettingStarted={GettingStarted}
      FirstRequest={FirstRequest}
      categories={["ai","financial_services","fintech","financial_technology"]}
      methods={[
  {
    "url": "/v1/influential_drivers",
    "method": "getTopDriversBySeries",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Knowledge Graph",
    "typeScriptTag": "knowledgeGraph",
    "description": "Influential Drivers",
    "parameters": [
      {
        "name": "seriesName",
        "schema": "string",
        "required": true,
        "description": "Series name for which the most influential drivers will be returned",
        "example": "SERIES_NAME"
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
      }
    ]
  },
  {
    "url": "/v1/history",
    "method": "getFullHistory",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Data Series",
    "typeScriptTag": "dataSeries",
    "description": "History",
    "parameters": [
      {
        "name": "seriesName",
        "schema": "string",
        "description": "The series name to get the history"
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
      }
    ]
  },
  {
    "url": "/v1/forecast",
    "method": "getForecastData",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Data Series",
    "typeScriptTag": "dataSeries",
    "description": "Forecast",
    "parameters": [
      {
        "name": "seriesName",
        "schema": "string",
        "description": "The series name to get the forecast"
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
      }
    ]
  },
  {
    "url": "/v1/anomalies",
    "method": "listEconomicAnomalies",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "World Monitoring",
    "typeScriptTag": "worldMonitoring",
    "description": "Anomalies",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad Request"
      }
    ]
  },
  {
    "url": "/v1/all_series_types",
    "method": "getAllTypes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Data Series",
    "typeScriptTag": "dataSeries",
    "description": "Series Types",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad Request"
      }
    ]
  },
  {
    "url": "/v1/all_series_names",
    "method": "getAllNames",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Data Series",
    "typeScriptTag": "dataSeries",
    "description": "Series Names",
    "parameters": [
      {
        "name": "seriesType",
        "schema": "string",
        "description": "The series type for which the series names are returned"
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
      }
    ]
  },
  {
    "url": "/v1/get_portfolio",
    "method": "getSecuritiesAmounts",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Portfolio Management",
    "typeScriptTag": "portfolioManagement",
    "description": "Get Portfolio",
    "parameters": [
      {
        "name": "portfolioId",
        "schema": "integer",
        "required": true,
        "description": "The portfolio id for the portfolio to retrieve",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "portfolio for the user"
      },
      {
        "statusCode": "400",
        "description": "Bad Request"
      }
    ]
  },
  {
    "url": "/v1/update_portfolio",
    "method": "updatePortfolio",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Portfolio Management",
    "typeScriptTag": "portfolioManagement",
    "description": "Update portfolio",
    "parameters": [
      {
        "name": "portfolio",
        "schema": "array",
        "description": ""
      },
      {
        "name": "portfolio_id",
        "schema": "number",
        "description": ""
      },
      {
        "name": "investor_preference",
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
        "statusCode": "400",
        "description": "Bad Request"
      }
    ]
  },
  {
    "url": "/v1/get_recommendations",
    "method": "computeRecommendations",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Portfolio Management",
    "typeScriptTag": "portfolioManagement",
    "description": "Portfolio Recommendations",
    "parameters": [
      {
        "name": "portfolioId",
        "schema": "integer",
        "required": true,
        "description": "The portfolio id for the portfolio to get recommendations for",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Recommendations"
      },
      {
        "statusCode": "400",
        "description": "Bad Request"
      }
    ]
  },
  {
    "url": "/v1/get_portfolio_score",
    "method": "computePortfolioScore",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Portfolio Management",
    "typeScriptTag": "portfolioManagement",
    "description": "Portfolio Score",
    "parameters": [
      {
        "name": "portfolioDict",
        "schema": "string",
        "required": true,
        "description": "A stringified (https://portfoliopilot.com/static/external_api/documentation.html portfolio dict (key=ticker, value=amount) to calculate the portfolio score for",
        "example": "PORTFOLIO_DICT"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Portfolio Score"
      },
      {
        "statusCode": "400",
        "description": "Bad Request"
      }
    ]
  },
  {
    "url": "/v1/get_portfolio_performance_stats",
    "method": "computePerformanceStats",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Portfolio Management",
    "typeScriptTag": "portfolioManagement",
    "description": "Portfolio Performance Stats",
    "parameters": [
      {
        "name": "portfolioDict",
        "schema": "string",
        "required": true,
        "description": "A stringified (https://portfoliopilot.com/static/external_api/documentation.html portfolio dict (key=ticker, value=amount) to calculate the portfolio score for",
        "example": "PORTFOLIO_DICT"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Portfolio Performance Stats"
      },
      {
        "statusCode": "400",
        "description": "Bad Request"
      }
    ]
  },
  {
    "url": "/v1/get_portfolio_assessment",
    "method": "getAssessmentData",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Portfolio Management",
    "typeScriptTag": "portfolioManagement",
    "description": "Get Portfolio Assessment",
    "parameters": [
      {
        "name": "portfolioDict",
        "schema": "string",
        "required": true,
        "description": "A stringified (https://portfoliopilot.com/static/external_api/documentation.html portfolio dict (key=ticker, value=amount) to calculate the portfolio score for",
        "example": "PORTFOLIO_DICT"
      },
      {
        "name": "targetRisk",
        "schema": "string",
        "required": false,
        "description": "The target risk level for the portfolio."
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
      }
    ]
  },
  {
    "url": "/v1/get_portfolio_insights",
    "method": "getInsights",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Portfolio Management",
    "typeScriptTag": "portfolioManagement",
    "description": "Get Portfolio Insights",
    "parameters": [
      {
        "name": "portfolioDict",
        "schema": "string",
        "required": true,
        "description": "A stringified (https://portfoliopilot.com/static/external_api/documentation.html portfolio dict (key=ticker, value=amount) to generate insights",
        "example": "PORTFOLIO_DICT"
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
      }
    ]
  }
]
    }
      language="TypeScript"
      apiTitle="Global Predictions API"
      apiBaseUrl="https://portfoliopilot.com/api"
      apiVersion="1.0.0"
      endpoints={13}
      sdkMethods={14}
      schemas={24}
      parameters={27}
      difficulty="Very Easy"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/global-predictions-inc/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/global-predictions-inc/openapi.yaml"
      developerDocumentation="portfoliopilot.com/static/external_api/documentation.html"
    />
  );
}
  