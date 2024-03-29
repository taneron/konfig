import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function MisoTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="miso-typescript-sdk"
      metaDescription={`Miso’s simple APIs empower product teams to realize unlimited personalization opportunities. Leading brands are using Miso’s semantic intelligence and real-time clickstream analysis to drive a new generation of personalized experiences and lift revenues sitewide. And unlike traditional solutions, Miso can personalize 100% anonymously — no tracking users or mining data.`}
      company="Miso"
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/miso/logo.svg"
      companyKebabCase="miso"
      clientNameCamelCase="miso"
      homepage="miso.ai"
      lastUpdated={new Date("2024-03-29T20:45:46.288Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/miso/favicon.png"
      // Missing contactUrl
      // Missing contactEmail
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/miso/imagePreview.png"
      GettingStarted={GettingStarted}
      FirstRequest={FirstRequest}
      categories={["ai","search"]}
      methods={[
  {
    "url": "/v1/experiments/{experiment_id_or_slug}/events",
    "method": "sendEvent",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Experiment APIs",
    "typeScriptTag": "experimentApIs",
    "description": "Send Experiment Event",
    "parameters": [
      {
        "name": "user_id",
        "schema": "string",
        "description": "",
        "example": "2179873"
      },
      {
        "name": "anonymous_id",
        "schema": "string",
        "description": "",
        "example": "403fb18e-98ff-434d-8585-726fabf5ed37"
      },
      {
        "name": "variant_name",
        "schema": "string",
        "description": "",
        "example": "Treatment_Group"
      },
      {
        "name": "timestamp",
        "schema": "string",
        "description": "",
        "example": "2022-01-23T12:34:56-08:00"
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
    "url": "/v1/interactions",
    "method": "removeData",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Interaction APIs",
    "typeScriptTag": "interactionApIs",
    "description": "Interaction Delete API",
    "parameters": [
      {
        "name": "user_ids",
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
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/interactions",
    "method": "insertRecords",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Interaction APIs",
    "typeScriptTag": "interactionApIs",
    "description": "Interaction Upload API",
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
      }
    ]
  },
  {
    "url": "/v1/products",
    "method": "bulkInsert",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Product / Content APIs",
    "typeScriptTag": "productContentApIs",
    "description": "Product / Content Upload API",
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
    "url": "/v1/products/{product_id}",
    "method": "deleteProductContent",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Product / Content APIs",
    "typeScriptTag": "productContentApIs",
    "description": "Product / Content Delete API",
    "parameters": [
      {
        "name": "productId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PRODUCT_ID"
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
    "url": "/v1/products/{product_id}",
    "method": "getProductDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Product / Content APIs",
    "typeScriptTag": "productContentApIs",
    "description": "Product / Content Read API",
    "parameters": [
      {
        "name": "productId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PRODUCT_ID"
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
    "url": "/v1/products/_ids",
    "method": "getProductIds",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Product / Content APIs",
    "typeScriptTag": "productContentApIs",
    "description": "Product / Content ID List API",
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/products/_delete",
    "method": "bulkDelete",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Product / Content APIs",
    "typeScriptTag": "productContentApIs",
    "description": "Product / Content Bulk Delete API",
    "parameters": [
      {
        "name": "data",
        "schema": "object",
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
    "url": "/v1/users",
    "method": "bulkUpload",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "User APIs",
    "typeScriptTag": "userApIs",
    "description": "User Upload API",
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
    "url": "/v1/users/{user_id}",
    "method": "deleteUser",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "User APIs",
    "typeScriptTag": "userApIs",
    "description": "User Delete API",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USER_ID"
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
    "url": "/v1/users/{user_id}",
    "method": "getUserDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "User APIs",
    "typeScriptTag": "userApIs",
    "description": "User Read API",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERID"
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
    "url": "/v1/users/_delete",
    "method": "bulkUserDelete",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "User APIs",
    "typeScriptTag": "userApIs",
    "description": "User Bulk Delete API",
    "parameters": [
      {
        "name": "data",
        "schema": "object",
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
    "url": "/v1/search/search",
    "method": "searchRequest",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Search APIs",
    "typeScriptTag": "searchApIs",
    "description": "Search API",
    "parameters": [
      {
        "name": "engine_id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "user_id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "anonymous_id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "user_hash",
        "schema": "string",
        "description": ""
      },
      {
        "name": "user_cohort",
        "schema": "object",
        "description": ""
      },
      {
        "name": "rows",
        "schema": "integer",
        "description": "",
        "default": 5
      },
      {
        "name": "type",
        "schema": "string",
        "description": ""
      },
      {
        "name": "dedupe_product_group_id",
        "schema": "boolean",
        "description": "",
        "default": true
      },
      {
        "name": "additional_interactions",
        "schema": "array",
        "description": "",
        "default": []
      },
      {
        "name": "fl",
        "schema": "array",
        "description": "",
        "default": []
      },
      {
        "name": "exclude",
        "schema": "array",
        "description": ""
      },
      {
        "name": "q",
        "schema": "string",
        "description": ""
      },
      {
        "name": "advanced_q",
        "schema": "string",
        "description": ""
      },
      {
        "name": "boosting_tags",
        "schema": "array",
        "description": "",
        "example": [
          "tag-1",
          "quetag-2"
        ],
        "default": []
      },
      {
        "name": "enable_boosting_campaigns",
        "schema": "boolean",
        "description": "",
        "default": true
      },
      {
        "name": "custom_context",
        "schema": "object",
        "description": "",
        "example": {
          "session_variable_1": [
            "value_1",
            "value_2"
          ]
        }
      },
      {
        "name": "language",
        "schema": "string",
        "description": ""
      },
      {
        "name": "like",
        "schema": "string",
        "description": ""
      },
      {
        "name": "category",
        "schema": "array",
        "description": ""
      },
      {
        "name": "spellcheck",
        "schema": "object",
        "description": ""
      },
      {
        "name": "start",
        "schema": "integer",
        "description": "",
        "default": 0
      },
      {
        "name": "order_by",
        "schema": "array",
        "description": "",
        "default": []
      },
      {
        "name": "facets",
        "schema": "array",
        "description": "",
        "default": []
      },
      {
        "name": "facet_filters",
        "schema": "object",
        "description": "",
        "default": {}
      },
      {
        "name": "anchoring_settings",
        "schema": "array",
        "description": "",
        "default": []
      },
      {
        "name": "enable_partial_match",
        "schema": "boolean",
        "description": "",
        "default": false
      },
      {
        "name": "partial_match_mode",
        "schema": "string",
        "description": "",
        "default": "blended"
      },
      {
        "name": "enable_partial_match_threshold",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "enable_semantic_search",
        "schema": "boolean",
        "description": "",
        "default": false
      },
      {
        "name": "semantic_search_threshold",
        "schema": "number",
        "description": "",
        "default": 0.5
      },
      {
        "name": "enable_matched_fields",
        "schema": "boolean",
        "description": "",
        "default": false
      },
      {
        "name": "query_product_existence",
        "schema": "object",
        "description": ""
      },
      {
        "name": "personalization_weight",
        "schema": "integer",
        "description": "",
        "default": 5
      },
      {
        "name": "fq",
        "schema": "string",
        "description": ""
      },
      {
        "name": "boost_fq",
        "schema": "string",
        "description": ""
      },
      {
        "name": "boost_positions",
        "schema": "array",
        "description": ""
      },
      {
        "name": "boost_rules",
        "schema": "array",
        "description": "",
        "default": []
      },
      {
        "name": "geo",
        "schema": "object",
        "description": ""
      },
      {
        "name": "diversification",
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
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/search/autocomplete",
    "method": "autocompleteRequest",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Search APIs",
    "typeScriptTag": "searchApIs",
    "description": "Autocomplete API",
    "parameters": [
      {
        "name": "engine_id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "user_id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "anonymous_id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "user_hash",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "user_cohort",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "rows",
        "schema": "integer",
        "required": false,
        "description": "",
        "default": 5
      },
      {
        "name": "type",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "dedupe_product_group_id",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": true
      },
      {
        "name": "additional_interactions",
        "schema": "array",
        "required": false,
        "description": "",
        "default": []
      },
      {
        "name": "fq",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "boost_fq",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "boost_positions",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "boost_rules",
        "schema": "array",
        "required": false,
        "description": "",
        "default": []
      },
      {
        "name": "geo",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "q",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Q"
      },
      {
        "name": "language",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "min_query_users",
        "schema": "integer",
        "required": false,
        "description": "",
        "default": 5
      },
      {
        "name": "completion_fields",
        "schema": "array",
        "required": false,
        "description": "",
        "default": [
          "title"
        ]
      },
      {
        "name": "fl",
        "schema": "array",
        "required": false,
        "description": "",
        "default": []
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/search/mget",
    "method": "multipleGetProducts",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Search APIs",
    "typeScriptTag": "searchApIs",
    "description": "Multiple Get API",
    "parameters": [
      {
        "name": "engine_id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "user_id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "anonymous_id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "user_hash",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "product_ids",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "fl",
        "schema": "array",
        "required": false,
        "description": "",
        "default": [
          "*"
        ]
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/ask/questions",
    "method": "submitQuestion",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Ask APIs",
    "typeScriptTag": "askApIs",
    "description": "Create a new qestion",
    "parameters": [
      {
        "name": "user_id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "anonymous_id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "fq",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "question",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "QUESTION"
      },
      {
        "name": "parent_question_id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "yearly_decay",
        "schema": "number",
        "required": false,
        "description": "",
        "default": 0.93
      },
      {
        "name": "source_fl",
        "schema": "array",
        "required": false,
        "description": "",
        "default": [
          "title"
        ]
      },
      {
        "name": "related_resource_fl",
        "schema": "array",
        "required": false,
        "description": "",
        "default": [
          "title"
        ]
      },
      {
        "name": "cite_start",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "cite_end",
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
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/ask/questions/{question_id}/answer",
    "method": "getAnswerStage",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Ask APIs",
    "typeScriptTag": "askApIs",
    "description": "Get latest answer of asked question",
    "parameters": [
      {
        "name": "questionId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "QUESTION_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/recommendation/user_to_products",
    "method": "getRecommendedProducts",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Recommendation APIs",
    "typeScriptTag": "recommendationApIs",
    "description": "User to Products API",
    "parameters": [
      {
        "name": "engine_id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "user_id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "anonymous_id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "user_hash",
        "schema": "string",
        "description": ""
      },
      {
        "name": "user_cohort",
        "schema": "object",
        "description": ""
      },
      {
        "name": "rows",
        "schema": "integer",
        "description": "",
        "default": 5
      },
      {
        "name": "type",
        "schema": "string",
        "description": ""
      },
      {
        "name": "dedupe_product_group_id",
        "schema": "boolean",
        "description": "",
        "default": true
      },
      {
        "name": "additional_interactions",
        "schema": "array",
        "description": "",
        "default": []
      },
      {
        "name": "fl",
        "schema": "array",
        "description": "",
        "default": []
      },
      {
        "name": "exclude",
        "schema": "array",
        "description": ""
      },
      {
        "name": "boosting_tags",
        "schema": "array",
        "description": "",
        "example": [
          "tag-1",
          "quetag-2"
        ],
        "default": []
      },
      {
        "name": "fq",
        "schema": "string",
        "description": ""
      },
      {
        "name": "boost_fq",
        "schema": "string",
        "description": ""
      },
      {
        "name": "boost_positions",
        "schema": "array",
        "description": ""
      },
      {
        "name": "boost_rules",
        "schema": "array",
        "description": "",
        "default": []
      },
      {
        "name": "geo",
        "schema": "object",
        "description": ""
      },
      {
        "name": "diversification",
        "schema": "object",
        "description": ""
      },
      {
        "name": "pagination_id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "start",
        "schema": "integer",
        "description": "",
        "default": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/recommendation/user_to_categories",
    "method": "getUserCategories",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Recommendation APIs",
    "typeScriptTag": "recommendationApIs",
    "description": "User to Categories API",
    "parameters": [
      {
        "name": "engine_id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "user_id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "anonymous_id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "user_hash",
        "schema": "string",
        "description": ""
      },
      {
        "name": "user_cohort",
        "schema": "object",
        "description": ""
      },
      {
        "name": "rows",
        "schema": "integer",
        "description": "",
        "default": 5
      },
      {
        "name": "type",
        "schema": "string",
        "description": ""
      },
      {
        "name": "dedupe_product_group_id",
        "schema": "boolean",
        "description": "",
        "default": true
      },
      {
        "name": "additional_interactions",
        "schema": "array",
        "description": "",
        "default": []
      },
      {
        "name": "fl",
        "schema": "array",
        "description": "",
        "default": []
      },
      {
        "name": "exclude",
        "schema": "array",
        "description": ""
      },
      {
        "name": "boosting_tags",
        "schema": "array",
        "description": "",
        "example": [
          "tag-1",
          "quetag-2"
        ],
        "default": []
      },
      {
        "name": "products_per_category",
        "schema": "integer",
        "description": "",
        "default": 5
      },
      {
        "name": "root_category",
        "schema": "array",
        "description": "",
        "default": []
      },
      {
        "name": "fq",
        "schema": "string",
        "description": ""
      },
      {
        "name": "boost_fq",
        "schema": "string",
        "description": ""
      },
      {
        "name": "boost_positions",
        "schema": "array",
        "description": ""
      },
      {
        "name": "boost_rules",
        "schema": "array",
        "description": "",
        "default": []
      },
      {
        "name": "geo",
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
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/recommendation/user_to_attributes",
    "method": "getUserAttributes",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Recommendation APIs",
    "typeScriptTag": "recommendationApIs",
    "description": "User to Attributes API",
    "parameters": [
      {
        "name": "boosting_tags",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "tag-1",
          "quetag-2"
        ],
        "default": []
      },
      {
        "name": "field",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FIELD"
      },
      {
        "name": "boost_attributes",
        "schema": "array",
        "required": false,
        "description": "",
        "default": []
      },
      {
        "name": "exclude_attributes",
        "schema": "array",
        "required": false,
        "description": "",
        "default": []
      },
      {
        "name": "rows",
        "schema": "integer",
        "required": false,
        "description": "",
        "default": 5
      },
      {
        "name": "products_per_attribute",
        "schema": "integer",
        "required": false,
        "description": "",
        "default": 2
      },
      {
        "name": "engine_id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "user_id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "anonymous_id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "user_hash",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "user_cohort",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "type",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "dedupe_product_group_id",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": true
      },
      {
        "name": "additional_interactions",
        "schema": "array",
        "required": false,
        "description": "",
        "default": []
      },
      {
        "name": "fl",
        "schema": "array",
        "required": false,
        "description": "",
        "default": []
      },
      {
        "name": "exclude",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "fq",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "boost_fq",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "boost_positions",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "boost_rules",
        "schema": "array",
        "required": false,
        "description": "",
        "default": []
      },
      {
        "name": "geo",
        "schema": "object",
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
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/recommendation/user_to_trending",
    "method": "getUserTrending",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Recommendation APIs",
    "typeScriptTag": "recommendationApIs",
    "description": "User to Trending API",
    "parameters": [
      {
        "name": "engine_id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "user_id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "anonymous_id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "user_hash",
        "schema": "string",
        "description": ""
      },
      {
        "name": "user_cohort",
        "schema": "object",
        "description": ""
      },
      {
        "name": "rows",
        "schema": "integer",
        "description": "",
        "default": 5
      },
      {
        "name": "type",
        "schema": "string",
        "description": ""
      },
      {
        "name": "dedupe_product_group_id",
        "schema": "boolean",
        "description": "",
        "default": true
      },
      {
        "name": "additional_interactions",
        "schema": "array",
        "description": "",
        "default": []
      },
      {
        "name": "fl",
        "schema": "array",
        "description": "",
        "default": []
      },
      {
        "name": "exclude",
        "schema": "array",
        "description": ""
      },
      {
        "name": "boosting_tags",
        "schema": "array",
        "description": "",
        "example": [
          "tag-1",
          "quetag-2"
        ],
        "default": []
      },
      {
        "name": "fq",
        "schema": "string",
        "description": ""
      },
      {
        "name": "boost_fq",
        "schema": "string",
        "description": ""
      },
      {
        "name": "boost_positions",
        "schema": "array",
        "description": ""
      },
      {
        "name": "boost_rules",
        "schema": "array",
        "description": "",
        "default": []
      },
      {
        "name": "geo",
        "schema": "object",
        "description": ""
      },
      {
        "name": "diversification",
        "schema": "object",
        "description": ""
      },
      {
        "name": "pagination_id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "start",
        "schema": "integer",
        "description": "",
        "default": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/recommendation/product_to_products",
    "method": "getRelatedProducts",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Recommendation APIs",
    "typeScriptTag": "recommendationApIs",
    "description": "Product to Products API",
    "parameters": [
      {
        "name": "product_id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "product_ids",
        "schema": "array",
        "description": ""
      },
      {
        "name": "product_group_id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "product_group_ids",
        "schema": "array",
        "description": ""
      },
      {
        "name": "buy_together",
        "schema": "boolean",
        "description": "",
        "default": false
      },
      {
        "name": "engine_id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "user_id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "anonymous_id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "user_hash",
        "schema": "string",
        "description": ""
      },
      {
        "name": "user_cohort",
        "schema": "object",
        "description": ""
      },
      {
        "name": "rows",
        "schema": "integer",
        "description": "",
        "default": 5
      },
      {
        "name": "type",
        "schema": "string",
        "description": ""
      },
      {
        "name": "dedupe_product_group_id",
        "schema": "boolean",
        "description": "",
        "default": true
      },
      {
        "name": "additional_interactions",
        "schema": "array",
        "description": "",
        "default": []
      },
      {
        "name": "fl",
        "schema": "array",
        "description": "",
        "default": []
      },
      {
        "name": "exclude",
        "schema": "array",
        "description": ""
      },
      {
        "name": "boosting_tags",
        "schema": "array",
        "description": "",
        "example": [
          "tag-1",
          "quetag-2"
        ],
        "default": []
      },
      {
        "name": "fq",
        "schema": "string",
        "description": ""
      },
      {
        "name": "boost_fq",
        "schema": "string",
        "description": ""
      },
      {
        "name": "boost_positions",
        "schema": "array",
        "description": ""
      },
      {
        "name": "boost_rules",
        "schema": "array",
        "description": "",
        "default": []
      },
      {
        "name": "geo",
        "schema": "object",
        "description": ""
      },
      {
        "name": "diversification",
        "schema": "object",
        "description": ""
      },
      {
        "name": "pagination_id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "start",
        "schema": "integer",
        "description": "",
        "default": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/qa/question_answering",
    "method": "extractAnswer",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Q&A APIs",
    "typeScriptTag": "q&aApIs",
    "description": "Q&A API",
    "parameters": [
      {
        "name": "version",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "v1.2",
        "default": "v1.2"
      },
      {
        "name": "q",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "what is gradient descent"
      },
      {
        "name": "min_probability",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 0.7
      },
      {
        "name": "rows",
        "schema": "integer",
        "required": false,
        "description": "",
        "default": 1
      },
      {
        "name": "fl",
        "schema": "array",
        "required": false,
        "description": "",
        "default": []
      },
      {
        "name": "spellcheck",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "enable_answer_html",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "enable_answer_block",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "fq",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "boost_fq",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "boost_positions",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "boost_rules",
        "schema": "array",
        "required": false,
        "description": "",
        "default": []
      },
      {
        "name": "geo",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "boost_probability_threshold",
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
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/qa/questions",
    "method": "uploadQuestionBank",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Q&A APIs",
    "typeScriptTag": "q&aApIs",
    "description": "Upload Question Bank API",
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
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/qa/question_autocomplete",
    "method": "getAutocomplete",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Q&A APIs",
    "typeScriptTag": "q&aApIs",
    "description": "Question Autocomplete API",
    "parameters": [
      {
        "name": "q",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "what is g"
      },
      {
        "name": "rows",
        "schema": "integer",
        "required": false,
        "description": "",
        "default": 5
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Autocomplete Response"
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/bulk",
    "method": "requestPost",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Bulk API",
    "typeScriptTag": "bulkApi",
    "description": "Bulk Request API",
    "parameters": [
      {
        "name": "requests",
        "schema": "array",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Bulk API response "
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  }
]
    }
      language="TypeScript"
      apiTitle="Miso API"
      apiBaseUrl="https://api.askmiso.com"
      apiVersion="1.1.4"
      endpoints={23}
      sdkMethods={26}
      schemas={175}
      parameters={212}
      difficulty="Medium"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/miso/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/miso/openapi.yaml"
      developerDocumentation="docs.miso.ai/"
    />
  );
}
  