import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import Description from "./_description.mdx";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function FastSpringTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="fast-spring-typescript-sdk"
      metaDescription={`FastSpring is how SaaS, software, and digital product companies sell online in more places around the world. We handle all payment needs from checkout to taxes so you can go farther faster. Founded in 2005, we are a privately owned company headquartered in Santa Barbara with offices in Amsterdam, Belfast and Halifax. For more information, please visit https://www.fastspring.com.`}
      company="FastSpring"
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/fastspring/logo.png"
      companyKebabCase="fast-spring"
      clientNameCamelCase="fastSpring"
      homepage="fastspring.com/"
      lastUpdated={new Date("2024-03-24T21:41:22.682Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/fastspring/favicon.png"
      // Missing contactUrl
      // Missing contactEmail
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/fastspring/imagePreview.png"
      GettingStarted={GettingStarted}
      Description={Description}
      FirstRequest={FirstRequest}
      categories={["finance","payments","online_payments","fintech","developer_tools","ecommerce","taxes","saas","subscription_management"]}
      methods={[
  {
    "url": "/accounts/{account_id}",
    "method": "getAccountById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Accounts",
    "typeScriptTag": "accounts",
    "description": "Get an account",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "Account Id",
        "example": "ACCOUNT_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/accounts/{account_id}",
    "method": "updateAccountById",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Accounts",
    "typeScriptTag": "accounts",
    "description": "Update account",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "Account Id",
        "example": "ACCOUNT_ID"
      },
      {
        "name": "contact",
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/accounts/{account_id}/authenticate",
    "method": "getAuthenticatedManagementUrl",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Accounts",
    "typeScriptTag": "accounts",
    "description": "Get authenticated account management URL",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "Account Id",
        "example": "ACCOUNT_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/accounts",
    "method": "getByParameter",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Accounts",
    "typeScriptTag": "accounts",
    "description": "Get all accounts or Search for accounts by parameter",
    "parameters": [
      {
        "name": "email",
        "schema": "string",
        "description": "Account email"
      },
      {
        "name": "custom",
        "schema": "string",
        "description": "Account custom key"
      },
      {
        "name": "global",
        "schema": "string",
        "description": "Account global key"
      },
      {
        "name": "orderId",
        "schema": "string",
        "description": "Order id"
      },
      {
        "name": "orderReference",
        "schema": "string",
        "description": "Order Reference"
      },
      {
        "name": "subscriptionId",
        "schema": "string",
        "description": "Subscription ID"
      },
      {
        "name": "products",
        "schema": "string",
        "description": "Product ID"
      },
      {
        "name": "subscriptions",
        "schema": "string",
        "description": "\"active\", \"ended\", \"canceled\", \"started\" will return accounts with subscriptions in the corresponding state"
      },
      {
        "name": "refunds",
        "schema": "string",
        "description": "true"
      },
      {
        "name": "limit",
        "schema": "number",
        "description": "integer value indicating the maximum number of records to be returned Or, when used together with page, the maximum number of records to be returned per page"
      },
      {
        "name": "page",
        "schema": "number",
        "description": "Integer value that must be used in conjunction with limit to specify which page of results should be returned"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/accounts",
    "method": "createNewAccount",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Accounts",
    "typeScriptTag": "accounts",
    "description": "Create an account",
    "parameters": [
      {
        "name": "contact",
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/coupons",
    "method": "createNewCoupon",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Coupons",
    "typeScriptTag": "coupons",
    "description": "Create a coupon",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/coupons/{coupon_id}",
    "method": "getDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Coupons",
    "typeScriptTag": "coupons",
    "description": "Retrieve coupon details",
    "parameters": [
      {
        "name": "couponId",
        "schema": "string",
        "required": true,
        "description": "Coupon Id",
        "example": "COUPON_ID"
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
    "url": "/coupons/{coupon_id}",
    "method": "assignCodesToCoupon",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Coupons",
    "typeScriptTag": "coupons",
    "description": "Assign codes to a coupon",
    "parameters": [
      {
        "name": "couponId",
        "schema": "string",
        "required": true,
        "description": "Coupon Id",
        "example": "COUPON_ID"
      },
      {
        "name": "codes",
        "schema": "array",
        "required": true,
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
    "url": "/coupons/{coupon_id}/codes",
    "method": "deleteAssociatedCodes",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Coupons",
    "typeScriptTag": "coupons",
    "description": "Delete all codes associated with a coupon",
    "parameters": [
      {
        "name": "couponId",
        "schema": "string",
        "required": true,
        "description": "Coupon Id",
        "example": "COUPON_ID"
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
    "url": "/coupons/{coupon_id}/codes",
    "method": "getCodesAssignedToCoupon",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Coupons",
    "typeScriptTag": "coupons",
    "description": "Get coupon codes assigned to a coupon",
    "parameters": [
      {
        "name": "couponId",
        "schema": "string",
        "required": true,
        "description": "Coupon Id",
        "example": "COUPON_ID"
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
    "url": "/events/processed",
    "method": "getProcessedEvents",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Events",
    "typeScriptTag": "events",
    "description": "Get processed events",
    "parameters": [
      {
        "name": "days",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/events/unprocessed",
    "method": "getUnprocessedEvents",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Events",
    "typeScriptTag": "events",
    "description": "Get unprocessed events",
    "parameters": [
      {
        "name": "begin",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/events/{event_id}",
    "method": "updateEventById",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Events",
    "typeScriptTag": "events",
    "description": "Update an event",
    "parameters": [
      {
        "name": "eventId",
        "schema": "string",
        "required": true,
        "description": "Event Id",
        "example": "EVENT_ID"
      },
      {
        "name": "processed",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
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
    "url": "/orders/{order_id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Orders",
    "typeScriptTag": "orders",
    "description": "Get orders by ID",
    "parameters": [
      {
        "name": "orderId",
        "schema": "string",
        "required": true,
        "description": "Order Id",
        "example": "ORDER_ID"
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
    "url": "/orders?products={product_path}&limit={limit}&page={page}",
    "method": "getByProductPath",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Orders",
    "typeScriptTag": "orders",
    "description": "Get orders by product path",
    "parameters": [
      {
        "name": "productPath",
        "schema": "string",
        "required": true,
        "description": "Product path",
        "example": "PRODUCT_PATH"
      },
      {
        "name": "limit",
        "schema": "number",
        "required": true,
        "description": "integer limits the number of order records returned per page (default is 50 records)",
        "example": 0
      },
      {
        "name": "page",
        "schema": "number",
        "required": true,
        "description": "specifies page number of results to be returned; used together with limit to control pagination",
        "example": 0
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
    "url": "/orders?begin={begin_date}&end={end_date}&limit={limit}&page={page}",
    "method": "getByDateRange",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Orders",
    "typeScriptTag": "orders",
    "description": "Get orders by date range",
    "parameters": [
      {
        "name": "beginDate",
        "schema": "string",
        "required": true,
        "description": "filters results to include transactions after the specified begin date (must be at least one day before the specified end date), the format must be MM/DD/YY",
        "example": "BEGIN_DATE"
      },
      {
        "name": "endDate",
        "schema": "string",
        "required": true,
        "description": "filters results to include transactions before the specified end date, the format must be MM/DD/YY",
        "example": "END_DATE"
      },
      {
        "name": "limit",
        "schema": "number",
        "required": true,
        "description": "integer limits the number of order records returned per page (default is 50 records)",
        "example": 0
      },
      {
        "name": "page",
        "schema": "number",
        "required": true,
        "description": "specifies page number of results to be returned; used together with limit to control pagination",
        "example": 0
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
    "url": "/orders?products={product_path}&begin={begin_date}&end={end_date}",
    "method": "getByProductPathAndDateRange",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Orders",
    "typeScriptTag": "orders",
    "description": "Get orders by product path AND date range",
    "parameters": [
      {
        "name": "productPath",
        "schema": "string",
        "required": true,
        "description": "Product path",
        "example": "PRODUCT_PATH"
      },
      {
        "name": "beginDate",
        "schema": "string",
        "required": true,
        "description": "filters results to include transactions after the specified begin date (must be at least one day before the specified end date), the format must be yyyy-mm-dd",
        "example": "BEGIN_DATE"
      },
      {
        "name": "endDate",
        "schema": "string",
        "required": true,
        "description": "filters results to include transactions before the specified end date, the format must be yyyy-mm-dd",
        "example": "END_DATE"
      },
      {
        "name": "limit",
        "schema": "number",
        "description": "integer limits the number of order records returned per page (default is 50 records)"
      },
      {
        "name": "page",
        "schema": "number",
        "description": "specifies page number of results to be returned; used together with limit to control pagination"
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
    "url": "/orders?end={end_date}",
    "method": "getByEndDate",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Orders",
    "typeScriptTag": "orders",
    "description": "Get orders by end date",
    "parameters": [
      {
        "name": "endDate",
        "schema": "string",
        "required": true,
        "description": "filters results to include transactions before the specified end date, the format must be MM/DD/YY",
        "example": "END_DATE"
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
    "url": "/orders?begin={begin_date}&end={end_date}&returns={return}",
    "method": "getOrdersWithReturns",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Orders",
    "typeScriptTag": "orders",
    "description": "Get orders with returns only",
    "parameters": [
      {
        "name": "beginDate",
        "schema": "string",
        "required": true,
        "description": "filters results to include transactions after the specified begin date (must be at least one day before the specified end date), the format must be MM/DD/YY",
        "example": "BEGIN_DATE"
      },
      {
        "name": "endDate",
        "schema": "string",
        "required": true,
        "description": "filters results to include transactions before the specified end date, the format must be MM/DD/YY",
        "example": "END_DATE"
      },
      {
        "name": "return",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
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
    "url": "/orders",
    "method": "updateTagsAndAttributes",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Orders",
    "typeScriptTag": "orders",
    "description": "Update order tags and attributes",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/products/{product_path}",
    "method": "getByProductPath",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Products",
    "typeScriptTag": "products",
    "description": "Get products by path",
    "parameters": [
      {
        "name": "productPath",
        "schema": "string",
        "required": true,
        "description": "Product path",
        "example": "PRODUCT_PATH"
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
    "url": "/products",
    "method": "getAllProductIds",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Products",
    "typeScriptTag": "products",
    "description": "Get all product IDs",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/products",
    "method": "createAndUpdate",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Products",
    "typeScriptTag": "products",
    "description": "Create and update products",
    "parameters": [
      {
        "name": "products",
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
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/products/offers/{product_path}",
    "method": "getAllOffersByType",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Products",
    "typeScriptTag": "products",
    "description": "Get all offers for a product by offer type",
    "parameters": [
      {
        "name": "productPath",
        "schema": "string",
        "required": true,
        "description": "Product path",
        "example": "PRODUCT_PATH"
      },
      {
        "name": "type",
        "schema": "string",
        "required": false,
        "description": "Offer Type"
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
    "url": "/products/offers/{product_path}",
    "method": "createOrUpdateOffers",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Products",
    "typeScriptTag": "products",
    "description": "Create or Update Product offers",
    "parameters": [
      {
        "name": "productPath",
        "schema": "string",
        "required": true,
        "description": "Product path",
        "example": "PRODUCT_PATH"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/products/price",
    "method": "getAllProductPrices",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Products",
    "typeScriptTag": "products",
    "description": "Get all product prices",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/products/price/{id}",
    "method": "getPriceById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Products",
    "typeScriptTag": "products",
    "description": "Get a product price",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Product Id",
        "example": "ID"
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
    "url": "/products/price?country={country}",
    "method": "getAllProductPricesByCountry",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Products",
    "typeScriptTag": "products",
    "description": "Get all product prices in specified country",
    "parameters": [
      {
        "name": "country",
        "schema": "string",
        "required": true,
        "description": "Country code",
        "example": "COUNTRY"
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
    "url": "/products/price?country={country}&currency={currency}",
    "method": "getAllProductPricesByCountryAndCurrency",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Products",
    "typeScriptTag": "products",
    "description": "Get all product prices in specified country and currency",
    "parameters": [
      {
        "name": "country",
        "schema": "string",
        "required": true,
        "description": "Country code",
        "example": "COUNTRY"
      },
      {
        "name": "currency",
        "schema": "string",
        "required": true,
        "description": "Currency code",
        "example": "CURRENCY"
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
    "url": "/products/price/{id}?country={country}&currency={currency}",
    "method": "getProductPriceByCountryAndCurrency",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Products",
    "typeScriptTag": "products",
    "description": "Get a product price in a specified country and currency",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Product Id",
        "example": "ID"
      },
      {
        "name": "country",
        "schema": "string",
        "required": true,
        "description": "Country code",
        "example": "COUNTRY"
      },
      {
        "name": "currency",
        "schema": "string",
        "required": true,
        "description": "currency code",
        "example": "CURRENCY"
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
    "url": "/products/price/{id}?country={country}",
    "method": "getProductPriceByCountry",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Products",
    "typeScriptTag": "products",
    "description": "Get a product price in a specified country",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Product Id",
        "example": "ID"
      },
      {
        "name": "country",
        "schema": "string",
        "required": true,
        "description": "country code",
        "example": "COUNTRY"
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
    "url": "/products/{id}",
    "method": "deleteProductById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Products",
    "typeScriptTag": "products",
    "description": "Delete products",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Product Id",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/returns/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Returns",
    "typeScriptTag": "returns",
    "description": "Get returns",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
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
    "url": "/returns",
    "method": "createNewReturn",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Returns",
    "typeScriptTag": "returns",
    "description": "Create returns",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/sessions",
    "method": "createNewSession",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Sessions",
    "typeScriptTag": "sessions",
    "description": "Create a session",
    "parameters": [
      {
        "name": "account",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACCOUNT"
      },
      {
        "name": "items",
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
    "url": "/subscriptions",
    "method": "getAllSubscriptions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Subscriptions",
    "typeScriptTag": "subscriptions",
    "description": "Get all subscriptions",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/subscriptions",
    "method": "updateSubscription",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Subscriptions",
    "typeScriptTag": "subscriptions",
    "description": "Update a subscription",
    "parameters": [
      {
        "name": "subscriptions",
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/subscriptions/estimate",
    "method": "previewPlanChange",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Subscriptions",
    "typeScriptTag": "subscriptions",
    "description": "Preview a proposed prorated plan change",
    "parameters": [
      {
        "name": "subscription",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SUBSCRIPTION"
      },
      {
        "name": "product",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "quantity",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "pricing",
        "schema": "object",
        "required": false,
        "description": "",
        "example": {
          "USD": 14.95,
          "EUR": 10.99
        }
      },
      {
        "name": "addons",
        "schema": "array",
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/subscriptions/{subscription_id}",
    "method": "cancelSubscriptionById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Subscriptions",
    "typeScriptTag": "subscriptions",
    "description": "Cancel a subscription",
    "parameters": [
      {
        "name": "subscriptionId",
        "schema": "string",
        "required": true,
        "description": "Subscription Id",
        "example": "SUBSCRIPTION_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/subscriptions/{subscription_id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Subscriptions",
    "typeScriptTag": "subscriptions",
    "description": "Get a subscription",
    "parameters": [
      {
        "name": "subscriptionId",
        "schema": "string",
        "required": true,
        "description": "Subscription Id",
        "example": "SUBSCRIPTION_ID"
      },
      {
        "name": "accountId",
        "schema": "string",
        "description": "specify a specific customer account whose subscriptions you want to retrieve"
      },
      {
        "name": "begin",
        "schema": "string",
        "description": "specify the beginning of a date range in yyyy-mm-dd-format"
      },
      {
        "name": "end",
        "schema": "string",
        "description": "specify the end of a date range in yyyy-mm-dd format"
      },
      {
        "name": "event",
        "schema": "string",
        "description": "In each event, use begin and end to retrieve the corresponding subscriptions"
      },
      {
        "name": "products",
        "schema": "string",
        "description": "enter one or more product ids to filter the response to include only subscriptions for the specified products; use commas to separate multiple values"
      },
      {
        "name": "scope",
        "schema": "string",
        "description": ""
      },
      {
        "name": "status",
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/subscriptions/{subscription_id}",
    "method": "resumeSubscription",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Subscriptions",
    "typeScriptTag": "subscriptions",
    "description": "Resume a canceled subscription",
    "parameters": [
      {
        "name": "subscriptionId",
        "schema": "string",
        "required": true,
        "description": "Subscription Id",
        "example": "SUBSCRIPTION_ID"
      },
      {
        "name": "subscriptions",
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/subscriptions/{subscription_id}/entries",
    "method": "getEntries",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Subscriptions",
    "typeScriptTag": "subscriptions",
    "description": "Get subscription entries",
    "parameters": [
      {
        "name": "subscriptionId",
        "schema": "string",
        "required": true,
        "description": "Subscription Id",
        "example": "SUBSCRIPTION_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/subscriptions/charge",
    "method": "rebillManagedSubscription",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Subscriptions",
    "typeScriptTag": "subscriptions",
    "description": "Rebill a managed subscription",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/subscriptions/{subscription_id}/pause",
    "method": "pauseSubscription",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Subscriptions",
    "typeScriptTag": "subscriptions",
    "description": "Pause a subscription",
    "parameters": [
      {
        "name": "subscriptionId",
        "schema": "string",
        "required": true,
        "description": "Subscription Id",
        "example": "SUBSCRIPTION_ID"
      },
      {
        "name": "pausePeriodCount",
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/subscriptions/{subscription_id}/resume",
    "method": "removeScheduledPause",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Subscriptions",
    "typeScriptTag": "subscriptions",
    "description": "Remove a scheduled pause",
    "parameters": [
      {
        "name": "subscriptionId",
        "schema": "string",
        "required": true,
        "description": "Subscription Id",
        "example": "SUBSCRIPTION_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/subscriptions/{subscription_id}/convert",
    "method": "convertExpiredTrialWithoutPaymentMethod",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Subscriptions",
    "typeScriptTag": "subscriptions",
    "description": "Convert an Expired Trial Subscription without a Payment Method",
    "parameters": [
      {
        "name": "subscriptionId",
        "schema": "string",
        "required": true,
        "description": "Subscription Id",
        "example": "SUBSCRIPTION_ID"
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
    "url": "/subscriptions/{subscription_id}/history",
    "method": "getPlanChangeHistory",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Subscriptions",
    "typeScriptTag": "subscriptions",
    "description": "Get subscription plan change history",
    "parameters": [
      {
        "name": "subscriptionId",
        "schema": "string",
        "required": true,
        "description": "Subscription Id",
        "example": "SUBSCRIPTION_ID"
      },
      {
        "name": "scope",
        "schema": "string",
        "required": false,
        "description": "Type of items to return"
      },
      {
        "name": "order",
        "schema": "string",
        "required": false,
        "description": "Sort Order for the results"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/quotes/{id}",
    "method": "deleteQuoteById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Quotes",
    "typeScriptTag": "quotes",
    "description": "Delete a quote",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "A unique identifier for the quote",
        "example": "ID"
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
    "url": "/quotes/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Quotes",
    "typeScriptTag": "quotes",
    "description": "Get a quote",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
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
    "url": "/quotes/{id}",
    "method": "updateQuoteById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Quotes",
    "typeScriptTag": "quotes",
    "description": "Update a quote",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "A unique identifier for the quote",
        "example": "ID"
      },
      {
        "name": "updateQuoteRequest",
        "schema": "object",
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
    "url": "/quotes/{id}/cancel",
    "method": "cancelQuoteById",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Quotes",
    "typeScriptTag": "quotes",
    "description": "Cancel a quote",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "A unique identifier for the quote",
        "example": "ID"
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
    "url": "/quotes",
    "method": "getAllQuotes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Quotes",
    "typeScriptTag": "quotes",
    "description": "Get all quotes",
    "parameters": [
      {
        "name": "createdBegin",
        "schema": "string",
        "required": false,
        "description": "The format must be YYYY-MM-DD"
      },
      {
        "name": "createdEnd",
        "schema": "string",
        "required": false,
        "description": "The format must be YYYY-MM-DD"
      },
      {
        "name": "createdEmail",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "expiresBegin",
        "schema": "string",
        "required": false,
        "description": "The format must be YYYY-MM-DD"
      },
      {
        "name": "expiresEnd",
        "schema": "string",
        "required": false,
        "description": "The format must be YYYY-MM-DD"
      },
      {
        "name": "searchParam",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "expiredBefore",
        "schema": "string",
        "required": false,
        "description": "The format must be YYYY-MM-DD"
      },
      {
        "name": "onlyQuoteId",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "statuses",
        "schema": "array",
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
  },
  {
    "url": "/quotes",
    "method": "createNewQuote",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Quotes",
    "typeScriptTag": "quotes",
    "description": "Create a quote",
    "parameters": [
      {
        "name": "tags",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "coupon",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "TENOFF"
      },
      {
        "name": "currency",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "USD"
      },
      {
        "name": "expirationDateDays",
        "schema": "integer",
        "required": false,
        "description": "",
        "example": 30
      },
      {
        "name": "fulfillmentTerm",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "items",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Quote for ABC Company"
      },
      {
        "name": "notes",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "This is a Note"
      },
      {
        "name": "netTermsDays",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "recipientAddress",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "recipient",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "taxId",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "BE09999999XX"
      },
      {
        "name": "source",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "MANAGER"
      },
      {
        "name": "sourceIP",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "181.55.25.101"
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
    "url": "/webhooks/keys",
    "method": "updateWebhookKeySecret",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Webhooks",
    "typeScriptTag": "webhooks",
    "description": "Update a webhook key secret",
    "parameters": [
      {
        "name": "url",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "URL"
      },
      {
        "name": "hmacSecret",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "HMACSECRET"
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
    "url": "/data/v1/subscription",
    "method": "generateSubscriptionReport",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Data",
    "typeScriptTag": "data",
    "description": "Generates a subscription report",
    "parameters": [
      {
        "name": "filter",
        "schema": "object",
        "description": ""
      },
      {
        "name": "reportColumns",
        "schema": "array",
        "description": ""
      },
      {
        "name": "groupBy",
        "schema": "array",
        "description": ""
      },
      {
        "name": "pageCount",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "pageNumber",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "async",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "notificationEmails",
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
    "url": "/data/v1/revenue",
    "method": "generateRevenueReport",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Data",
    "typeScriptTag": "data",
    "description": "Generates a revenue report",
    "parameters": [
      {
        "name": "filter",
        "schema": "object",
        "description": ""
      },
      {
        "name": "reportColumns",
        "schema": "array",
        "description": ""
      },
      {
        "name": "groupBy",
        "schema": "array",
        "description": ""
      },
      {
        "name": "pageCount",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "pageNumber",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "async",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "notificationEmails",
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
    "url": "/data/v1/jobs/{id}",
    "method": "getJobInformation",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Data",
    "typeScriptTag": "data",
    "description": "Get job information based on a job ID.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
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
    "url": "/data/v1/jobs",
    "method": "getJobInformation",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Data",
    "typeScriptTag": "data",
    "description": "Get information from a job listing.",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/data/v1/util/cache",
    "method": "resetCacheForServiceEndPoints",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Data",
    "typeScriptTag": "data",
    "description": "Reset cache for data service end points.",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/data/v1/downloads/{id}",
    "method": "downloadReportById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Data",
    "typeScriptTag": "data",
    "description": "Download a report based on job ID.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
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
  }
]
    }
      language="TypeScript"
      apiTitle="FastSpring API"
      apiBaseUrl="https://api.fastspring.com/"
      apiVersion="1.0"
      endpoints={48}
      sdkMethods={60}
      schemas={184}
      parameters={131}
      difficulty="Hard"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/fastspring/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/fastspring/openapi.yaml"
      developerDocumentation="developer.fastspring.com/"
    />
  );
}
  