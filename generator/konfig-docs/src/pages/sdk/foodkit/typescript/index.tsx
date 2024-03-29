import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function FoodkitTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="foodkit-typescript-sdk"
      metaDescription={`Foodkit is an end-to-end white-label restaurant platform, and API - Including iOS and Android e-commerce apps, websites and kiosks, enterprise customer service and CRM, delivery logistics optimization, omnichannel marketing and loyalty programs, POS integration and more.

One powerful platform, complete flexibility, less cost - so you can focus on growing your brand, instead of worrying about backend technology and code.

We believe in building exceptional technology,  empowering restaurants and removing the expense of building and maintaining complicated technology infrastructure.

WHY FOODKIT?
✔ We power the world's best restaurant brands from the cloud 
✔ We provide a best-in-class platform and open API  
✔ We eliminate the complexity and high costs associated with developing and maintaining a digital restaurant business
✔ We offer outstanding customer service 24/7 

Contact us at:
✎ https://www.foodkit.io/`}
      company="Foodkit"
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/foodkit/logo.png"
      companyKebabCase="foodkit"
      clientNameCamelCase="foodkit"
      homepage="foodkit.io"
      lastUpdated={new Date("2024-03-29T17:59:37.016Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/foodkit/favicon.png"
      // Missing contactUrl
      // Missing contactEmail
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/foodkit/imagePreview.jpg"
      GettingStarted={GettingStarted}
      FirstRequest={FirstRequest}
      categories={["restaurant","food_beverages"]}
      methods={[
  {
    "url": "/v1/storefront/customers",
    "method": "registerCustomer",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Customers",
    "typeScriptTag": "customers",
    "description": "Register customer",
    "parameters": [
      {
        "name": "title",
        "schema": "string",
        "description": ""
      },
      {
        "name": "email",
        "schema": "string",
        "description": "",
        "example": "customer@gmail.com"
      },
      {
        "name": "phone_number",
        "schema": "string",
        "description": "",
        "example": "+0666555444"
      },
      {
        "name": "name",
        "schema": "string",
        "description": "",
        "example": "John Doe"
      },
      {
        "name": "first_name",
        "schema": "string",
        "description": "",
        "example": "John"
      },
      {
        "name": "last_name",
        "schema": "string",
        "description": "",
        "example": "Doe"
      },
      {
        "name": "password",
        "schema": "string",
        "description": "",
        "example": "12345678"
      },
      {
        "name": "date_of_birth",
        "schema": "string",
        "description": "",
        "example": "1990-01-01"
      },
      {
        "name": "gender",
        "schema": "string",
        "description": "",
        "example": "male"
      },
      {
        "name": "accepts_terms_and_conditions",
        "schema": "boolean",
        "description": "",
        "example": true
      },
      {
        "name": "accepts_marketing_notifications",
        "schema": "boolean",
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
    "url": "/v1/storefront/customers/me",
    "method": "getDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Customers",
    "typeScriptTag": "customers",
    "description": "Get current customer",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/storefront/customers/me",
    "method": "updateDetails",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Customers",
    "typeScriptTag": "customers",
    "description": "Update customer",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "description": "",
        "example": "John Smith"
      },
      {
        "name": "email",
        "schema": "string",
        "description": "",
        "example": "john@smith.com"
      },
      {
        "name": "password",
        "schema": "string",
        "description": "",
        "example": "password1"
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
    "url": "/v2/storefront/customers/me/addresses",
    "method": "getAddresses",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Customers",
    "typeScriptTag": "customers",
    "description": "Get customer addresses",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v3/storefront/brands",
    "method": "getBrandContext",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Brands",
    "typeScriptTag": "brands",
    "description": "Get brand",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v3/storefront/customers/me/orders",
    "method": "getCustomerOrders",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Customers",
    "typeScriptTag": "customers",
    "description": "Get customer orders",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v3/storefront/vendors/{vendor}/promotions",
    "method": "getPromotions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Marketing",
    "typeScriptTag": "marketing",
    "description": "Get promotions",
    "parameters": [
      {
        "name": "vendor",
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
      }
    ]
  },
  {
    "url": "/v4/storefront/customers/brands/{brand}/customers/{customer}/orders/{id}/track",
    "method": "trackStatus",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Orders",
    "typeScriptTag": "orders",
    "description": "Track order",
    "parameters": [
      {
        "name": "brand",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 2043
      },
      {
        "name": "customer",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 332091
      },
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 1021011
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
    "url": "/v4/storefront/customers/brands/{brand}/customers/{customer}/tax-ids",
    "method": "getTaxIds",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Customers",
    "typeScriptTag": "customers",
    "description": "Get customer tax IDs",
    "parameters": [
      {
        "name": "brand",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "customer",
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
      }
    ]
  },
  {
    "url": "/v4/storefront/customers/brands/{brand}/customers/{customer}/tax-ids",
    "method": "storeTaxId",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Customers",
    "typeScriptTag": "customers",
    "description": "Store customer tax ID",
    "parameters": [
      {
        "name": "brand",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "customer",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "customer_id",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "tax_id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "company_name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "company_address",
        "schema": "string",
        "description": ""
      },
      {
        "name": "company_district",
        "schema": "string",
        "description": ""
      },
      {
        "name": "company_area",
        "schema": "string",
        "description": ""
      },
      {
        "name": "company_province",
        "schema": "string",
        "description": ""
      },
      {
        "name": "company_postcode",
        "schema": "string",
        "description": ""
      },
      {
        "name": "company_phone",
        "schema": "string",
        "description": ""
      },
      {
        "name": "is_headoffice",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "branch_no",
        "schema": "string",
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
    "url": "/v5/storefront/content/tenants/{tenant}/branch-list",
    "method": "content",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Branch List",
    "typeScriptTag": "branchList",
    "description": "Branch list content",
    "parameters": [
      {
        "name": "tenant",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 101
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
    "url": "/v5/storefront/content/tenants/{tenant}/branch-list/timestamp",
    "method": "getTimestampedLink",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Branch List",
    "typeScriptTag": "branchList",
    "description": "Timestamped branch list link",
    "parameters": [
      {
        "name": "tenant",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 522
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
    "url": "/v5/storefront/content/tenants/{tenant}/menu",
    "method": "getTenantMenu",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Menu",
    "typeScriptTag": "menu",
    "description": "Menu content",
    "parameters": [
      {
        "name": "tenant",
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
      }
    ]
  },
  {
    "url": "/v5/storefront/content/tenants/{tenant}/menu/timestamp",
    "method": "getTimestampedLink",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Menu",
    "typeScriptTag": "menu",
    "description": "Timestamped menu link",
    "parameters": [
      {
        "name": "tenant",
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
      }
    ]
  },
  {
    "url": "/v5/storefront/content/tenants/{tenant}/publications-cached",
    "method": "getCachedPublications",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Publications",
    "typeScriptTag": "publications",
    "description": "Get publications",
    "parameters": [
      {
        "name": "tenant",
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
      }
    ]
  },
  {
    "url": "/v5/storefront/content/tenants/{tenant}/publications/timestamp",
    "method": "getTenantPublicationsTimestamp",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Publications",
    "typeScriptTag": "publications",
    "description": "Get publications timestamp",
    "parameters": [
      {
        "name": "tenant",
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
      }
    ]
  },
  {
    "url": "/v5/storefront/customers/tenants/{tenant}/customers/{customer}/contact-form",
    "method": "submitContactForm",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Branches",
    "typeScriptTag": "branches",
    "description": "Submit contact form",
    "parameters": [
      {
        "name": "tenant",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 92
      },
      {
        "name": "customer",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 981
      },
      {
        "name": "message",
        "schema": "string",
        "description": "",
        "example": "My order is running late, please check on it"
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": ""
      }
    ]
  },
  {
    "url": "/v5/storefront/inventory/brands/{brand}/branches/{branch}/upsells",
    "method": "createUpsellRecommendations",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Marketing",
    "typeScriptTag": "marketing",
    "description": "Upsell recommendations",
    "parameters": [
      {
        "name": "brand",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 801
      },
      {
        "name": "branch",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 984
      },
      {
        "name": "products",
        "schema": "array",
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
    "url": "/v5/storefront/tenants/{tenant}/branch-capabilities",
    "method": "listBranchCapabilities",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Branches",
    "typeScriptTag": "branches",
    "description": "Branch capabilities (by tenant)",
    "parameters": [
      {
        "name": "tenant",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 432
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
    "url": "/v5/storefront/tenants/{tenant}/branch-closures",
    "method": "getClosures",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Branches",
    "typeScriptTag": "branches",
    "description": "Branch closures (by tenant)",
    "parameters": [
      {
        "name": "tenant",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 432
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
    "url": "/v5/storefront/tenants/{tenant}/brands/{brand}/branch-capabilities",
    "method": "getBranchCapabilities",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Branches",
    "typeScriptTag": "branches",
    "description": "Branch capabilities (by brand)",
    "parameters": [
      {
        "name": "tenant",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 92
      },
      {
        "name": "brand",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 981
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
    "url": "/v5/storefront/tenants/{tenant}/brands/{brand}/branch-closures",
    "method": "getClosedBranches",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Branches",
    "typeScriptTag": "branches",
    "description": "Branch closures (by brand)",
    "parameters": [
      {
        "name": "tenant",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 92
      },
      {
        "name": "brand",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 981
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
    "url": "/v5/storefront/tenants/{tenant}/brands/{brand}/branches/{branch}/inventory-closures",
    "method": "getBranchInventoryClosures",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Menu",
    "typeScriptTag": "menu",
    "description": "Inventory closures",
    "parameters": [
      {
        "name": "tenant",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "brand",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "branch",
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
      }
    ]
  },
  {
    "url": "/v5/storefront/tenants/{tenant}/brands/{brand}/deliverable-branches",
    "method": "findDeliverableBranches",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Branches",
    "typeScriptTag": "branches",
    "description": "Deliverable branches (by brand)",
    "parameters": [
      {
        "name": "tenant",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "brand",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "latitude",
        "schema": "number",
        "required": true,
        "description": "Latitude of the delivery address",
        "example": 0
      },
      {
        "name": "longitude",
        "schema": "number",
        "required": true,
        "description": "Longitude of the delivery address",
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
    "url": "/v5/storefront/tenants/{tenant}/deliverable-branches",
    "method": "listDeliverableBranches",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Branches",
    "typeScriptTag": "branches",
    "description": "Deliverable branches (by tenant)",
    "parameters": [
      {
        "name": "tenant",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "latitude",
        "schema": "number",
        "required": true,
        "description": "Latitude of the delivery address",
        "example": 0
      },
      {
        "name": "longitude",
        "schema": "number",
        "required": true,
        "description": "Longitude of the delivery address",
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
    "url": "/v5/storefront/tenants/{tenant}/orders",
    "method": "createOrder",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Orders",
    "typeScriptTag": "orders",
    "description": "Store an order",
    "parameters": [
      {
        "name": "tenant",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TENANT"
      },
      {
        "name": "branch_id",
        "schema": "integer",
        "description": "",
        "example": 102
      },
      {
        "name": "order_type",
        "schema": "string",
        "description": ""
      },
      {
        "name": "payment_type",
        "schema": "string",
        "description": "",
        "example": "card_on_file"
      },
      {
        "name": "card",
        "schema": "object",
        "description": ""
      },
      {
        "name": "store_card_info",
        "schema": "boolean",
        "description": "",
        "example": true
      },
      {
        "name": "products",
        "schema": "array",
        "description": ""
      },
      {
        "name": "latitude",
        "schema": "string",
        "description": "",
        "example": -33.874116
      },
      {
        "name": "longitude",
        "schema": "number",
        "description": "",
        "example": 151.220547
      },
      {
        "name": "address",
        "schema": "object",
        "description": ""
      },
      {
        "name": "is_realtime",
        "schema": "boolean",
        "description": "",
        "example": false
      },
      {
        "name": "scheduled_date",
        "schema": "string",
        "description": "",
        "example": "2022-01-07"
      },
      {
        "name": "scheduled_time",
        "schema": "string",
        "description": "",
        "example": "20:00"
      },
      {
        "name": "comments",
        "schema": "string",
        "description": "",
        "example": "Please provide utensils."
      },
      {
        "name": "customer_tax_id",
        "schema": "integer",
        "description": "",
        "example": 1082
      },
      {
        "name": "3ds_callback_url",
        "schema": "string",
        "description": "",
        "example": "https://acmecorp.com/payments/complete"
      },
      {
        "name": "exceeds_cart_limit",
        "schema": "boolean",
        "description": "",
        "example": false
      },
      {
        "name": "phone_number",
        "schema": "string",
        "description": ""
      },
      {
        "name": "coupon_code",
        "schema": "string",
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
    "url": "/v5/storefront/tenants/{tenant}/quotes",
    "method": "getQuotation",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Orders",
    "typeScriptTag": "orders",
    "description": "Retrieve a quotation",
    "parameters": [
      {
        "name": "tenant",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TENANT"
      },
      {
        "name": "branch_id",
        "schema": "integer",
        "description": "",
        "example": 102
      },
      {
        "name": "order_type",
        "schema": "string",
        "description": ""
      },
      {
        "name": "payment_type",
        "schema": "string",
        "description": "",
        "example": "card_on_file"
      },
      {
        "name": "card",
        "schema": "object",
        "description": ""
      },
      {
        "name": "store_card_info",
        "schema": "boolean",
        "description": "",
        "example": true
      },
      {
        "name": "products",
        "schema": "array",
        "description": ""
      },
      {
        "name": "latitude",
        "schema": "string",
        "description": "",
        "example": -33.874116
      },
      {
        "name": "longitude",
        "schema": "number",
        "description": "",
        "example": 151.220547
      },
      {
        "name": "address",
        "schema": "object",
        "description": ""
      },
      {
        "name": "is_realtime",
        "schema": "boolean",
        "description": "",
        "example": false
      },
      {
        "name": "scheduled_date",
        "schema": "string",
        "description": "",
        "example": "2022-01-07"
      },
      {
        "name": "scheduled_time",
        "schema": "string",
        "description": "",
        "example": "20:00"
      },
      {
        "name": "comments",
        "schema": "string",
        "description": "",
        "example": "Please provide utensils."
      },
      {
        "name": "customer_tax_id",
        "schema": "integer",
        "description": "",
        "example": 1082
      },
      {
        "name": "3ds_callback_url",
        "schema": "string",
        "description": "",
        "example": "https://acmecorp.com/payments/complete"
      },
      {
        "name": "exceeds_cart_limit",
        "schema": "boolean",
        "description": "",
        "example": false
      },
      {
        "name": "phone_number",
        "schema": "string",
        "description": ""
      },
      {
        "name": "coupon_code",
        "schema": "string",
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
    "url": "/v5/storefront/tenants/{tenant}/service-area-email",
    "method": "optInServiceAreaEmail",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Customers",
    "typeScriptTag": "customers",
    "description": "Opt-in for service area change email",
    "parameters": [
      {
        "name": "tenant",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "email",
        "schema": "string",
        "description": ""
      },
      {
        "name": "latitude",
        "schema": "number",
        "description": "",
        "example": 51.511925
      },
      {
        "name": "longitude",
        "schema": "number",
        "description": "",
        "example": -0.08665
      },
      {
        "name": "address1",
        "schema": "string",
        "description": "",
        "example": "King William Street / Monument Stn"
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": ""
      }
    ]
  },
  {
    "url": "/v6/storefront/customers/tenants/{tenant}/customers/gdpr-preferences",
    "method": "storeGdprPreferences",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Customers",
    "typeScriptTag": "customers",
    "description": "Store customer's GDPR preferences",
    "parameters": [
      {
        "name": "tenant",
        "schema": "integer",
        "required": true,
        "description": "Tenant ID for the account.",
        "example": 9801
      },
      {
        "name": "customer",
        "schema": "integer",
        "required": true,
        "description": "ID of the associated customer.",
        "example": 22104
      },
      {
        "name": "device_uuid",
        "schema": "string",
        "description": "",
        "example": "0377c046-0108-4b7d-8b0e-25f4ed06bac1"
      },
      {
        "name": "accept_all",
        "schema": "boolean",
        "description": "",
        "example": true
      },
      {
        "name": "accept_performance",
        "schema": "boolean",
        "description": "",
        "example": true
      },
      {
        "name": "accept_marketing",
        "schema": "boolean",
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
    "url": "/v6/storefront/customers/tenants/{tenant}/customers/{customer}/intercom-hmacs",
    "method": "generateIntercomHmac",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Customers",
    "typeScriptTag": "customers",
    "description": "Generate Intercom HMAC",
    "parameters": [
      {
        "name": "tenant",
        "schema": "integer",
        "required": true,
        "description": "Tenant ID for the account.",
        "example": 9801
      },
      {
        "name": "customer",
        "schema": "integer",
        "required": true,
        "description": "ID of the associated customer.",
        "example": 22104
      },
      {
        "name": "channel",
        "schema": "string",
        "description": "",
        "example": "ios"
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
    "url": "/v6/storefront/loyalty/tenants/{tenant}/customers/{customer}/punch-card",
    "method": "getPunchcard",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Loyalty Punch Card",
    "typeScriptTag": "loyaltyPunchCard",
    "description": "Get punchcard for customer",
    "parameters": [
      {
        "name": "tenant",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 999
      },
      {
        "name": "customer",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 10001
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
    "url": "/v6/storefront/loyalty/tenants/{tenant}/punch-card",
    "method": "getDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Loyalty Punch Card",
    "typeScriptTag": "loyaltyPunchCard",
    "description": "Get punchcard for guest",
    "parameters": [
      {
        "name": "tenant",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 999
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
    "url": "/v6/storefront/referrals/tenants/{tenant}/customers/{customer}",
    "method": "getReferralCodesForCustomer",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Referrals",
    "typeScriptTag": "referrals",
    "description": "Get referral codes for customer",
    "parameters": [
      {
        "name": "tenant",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 999
      },
      {
        "name": "customer",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 10001
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
    "url": "/v6/storefront/tenants/{tenant}/delivery-zones",
    "method": "listDeliveryZones",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Branches",
    "typeScriptTag": "branches",
    "description": "Delivery zones",
    "parameters": [
      {
        "name": "tenant",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "latitude",
        "schema": "number",
        "required": true,
        "description": "Latitude of the delivery address",
        "example": 0
      },
      {
        "name": "longitude",
        "schema": "number",
        "required": true,
        "description": "Longitude of the delivery address",
        "example": 0
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
      apiTitle="Foodkit API"
      apiBaseUrl="https://dev.foodkit.io/api"
      apiVersion="6.0"
      endpoints={32}
      sdkMethods={34}
      schemas={44}
      parameters={121}
      difficulty="Easy"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/foodkit/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/foodkit/openapi.yaml"
      developerDocumentation="docs.foodkit.dev/"
    />
  );
}
  