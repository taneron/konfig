import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function SeelTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="seel-typescript-sdk"
      metaDescription={`Seel is building a new category of insurance to help merchants offer risk-free shopping experience.`}
      company="Seel"
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/seel/logo.png"
      companyKebabCase="seel"
      clientNameCamelCase="seel"
      homepage="seel.com"
      lastUpdated={new Date("2024-03-27T16:32:49.329Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/seel/favicon.png"
      // Missing contactUrl
      // Missing contactEmail
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/seel/imagePreview.png"
      GettingStarted={GettingStarted}
      FirstRequest={FirstRequest}
      categories={["insurance","commerce_protection","fintech","risk_free_shopping_experience"]}
      methods={[
  {
    "url": "/{partner}/merchants",
    "method": "listAllMerchants",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Merchant",
    "typeScriptTag": "merchant",
    "description": "List merchants",
    "parameters": [
      {
        "name": "xSeelApiKey",
        "schema": "string",
        "required": true,
        "description": "Your Seel API key",
        "example": "e2b4f9c8d3a7e6d2f5b0c4a1d8e9b6",
        "default": "e2b4f9c8d3a7e6d2f5b0c4a1d8e9b6"
      },
      {
        "name": "xSeelApiVersion",
        "schema": "string",
        "required": true,
        "description": "Version of the Seel API to use",
        "example": "1.3.0",
        "default": "1.3.0"
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Query by page, default 0",
        "example": 0,
        "default": 0
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "required": false,
        "description": "Query by page_size, default 100",
        "example": 100,
        "default": 100
      },
      {
        "name": "partner",
        "schema": "string",
        "required": true,
        "description": "partner name",
        "example": "seel",
        "default": "seel"
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
    "url": "/{partner}/merchants",
    "method": "createNewMerchant",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Merchant",
    "typeScriptTag": "merchant",
    "description": "Create a merchant",
    "parameters": [
      {
        "name": "xSeelApiKey",
        "schema": "string",
        "required": true,
        "description": "Your Seel API key",
        "example": "e2b4f9c8d3a7e6d2f5b0c4a1d8e9b6",
        "default": "e2b4f9c8d3a7e6d2f5b0c4a1d8e9b6"
      },
      {
        "name": "xSeelApiVersion",
        "schema": "string",
        "required": true,
        "description": "Version of the Seel API to use",
        "example": "1.3.0",
        "default": "1.3.0"
      },
      {
        "name": "partner",
        "schema": "string",
        "required": true,
        "description": "partner name",
        "example": "seel",
        "default": "seel"
      },
      {
        "name": "shop_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "shop123"
      },
      {
        "name": "admin_domain",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "shop.myshopify.com"
      },
      {
        "name": "shop_domain",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "www.myshop.com"
      },
      {
        "name": "shop_platform",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Shopify"
      },
      {
        "name": "shop_currency",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USD"
      },
      {
        "name": "shop_name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "My Shop"
      },
      {
        "name": "contact_name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "My Shop"
      },
      {
        "name": "contact_email",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "contact@myshop.com"
      },
      {
        "name": "contact_phone_number",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "555-1234"
      },
      {
        "name": "seel_services",
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
    "url": "/{partner}/merchants/{merchant_id}",
    "method": "getMerchantDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Merchant",
    "typeScriptTag": "merchant",
    "description": "Get a merchant",
    "parameters": [
      {
        "name": "merchantId",
        "schema": "string",
        "required": true,
        "description": "ID of the merchant",
        "example": "MERCHANT_ID"
      },
      {
        "name": "xSeelApiKey",
        "schema": "string",
        "required": true,
        "description": "Your Seel API key",
        "example": "e2b4f9c8d3a7e6d2f5b0c4a1d8e9b6",
        "default": "e2b4f9c8d3a7e6d2f5b0c4a1d8e9b6"
      },
      {
        "name": "xSeelApiVersion",
        "schema": "string",
        "required": true,
        "description": "Version of the Seel API to use",
        "example": "1.3.0",
        "default": "1.3.0"
      },
      {
        "name": "partner",
        "schema": "string",
        "required": true,
        "description": "partner name",
        "example": "seel",
        "default": "seel"
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
    "url": "/{partner}/merchants/{merchant_id}",
    "method": "updateMerchantDetails",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Merchant",
    "typeScriptTag": "merchant",
    "description": "Update a merchant",
    "parameters": [
      {
        "name": "merchantId",
        "schema": "string",
        "required": true,
        "description": "ID of the merchant",
        "example": "MERCHANT_ID"
      },
      {
        "name": "xSeelApiKey",
        "schema": "string",
        "required": true,
        "description": "Your Seel API key",
        "example": "e2b4f9c8d3a7e6d2f5b0c4a1d8e9b6",
        "default": "e2b4f9c8d3a7e6d2f5b0c4a1d8e9b6"
      },
      {
        "name": "xSeelApiVersion",
        "schema": "string",
        "required": true,
        "description": "Version of the Seel API to use",
        "example": "1.3.0",
        "default": "1.3.0"
      },
      {
        "name": "partner",
        "schema": "string",
        "required": true,
        "description": "partner name",
        "example": "seel",
        "default": "seel"
      },
      {
        "name": "shop_id",
        "schema": "string",
        "description": "",
        "example": "shop123"
      },
      {
        "name": "admin_domain",
        "schema": "string",
        "description": "",
        "example": "shop.myshopify.com"
      },
      {
        "name": "shop_domain",
        "schema": "string",
        "description": "",
        "example": "www.myshop.com"
      },
      {
        "name": "shop_platform",
        "schema": "string",
        "description": "",
        "example": "Shopify"
      },
      {
        "name": "shop_currency",
        "schema": "string",
        "description": "",
        "example": "USD"
      },
      {
        "name": "shop_name",
        "schema": "string",
        "description": "",
        "example": "My Shop"
      },
      {
        "name": "contact_name",
        "schema": "string",
        "description": "",
        "example": "My Shop"
      },
      {
        "name": "contact_email",
        "schema": "string",
        "description": "",
        "example": "contact@myshop.com"
      },
      {
        "name": "contact_phone_number",
        "schema": "string",
        "description": "",
        "example": "555-1234"
      },
      {
        "name": "seel_services",
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
    "url": "/{partner}/quotes",
    "method": "generateQuote",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Quote",
    "typeScriptTag": "quote",
    "description": "Create a quote",
    "parameters": [
      {
        "name": "partner",
        "schema": "string",
        "required": true,
        "description": "partner name",
        "example": "seel",
        "default": "seel"
      },
      {
        "name": "xSeelApiKey",
        "schema": "string",
        "required": true,
        "description": "Your Seel API key",
        "example": "e2b4f9c8d3a7e6d2f5b0c4a1d8e9b6",
        "default": "e2b4f9c8d3a7e6d2f5b0c4a1d8e9b6"
      },
      {
        "name": "xSeelApiVersion",
        "schema": "string",
        "required": true,
        "description": "Version of the Seel API to use",
        "example": "1.3.0",
        "default": "1.3.0"
      },
      {
        "name": "cart_id",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "223128"
      },
      {
        "name": "merchant_id",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "223128"
      },
      {
        "name": "session_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "223128"
      },
      {
        "name": "device_id",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "device123"
      },
      {
        "name": "client_ip",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "127.0.0.1"
      },
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "seel-ra"
      },
      {
        "name": "line_items",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "shipping_address",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "customer",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "extra_info",
        "schema": "object",
        "required": false,
        "description": "",
        "example": {}
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
    "url": "/{partner}/quotes/{quote_id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Quote",
    "typeScriptTag": "quote",
    "description": "Get a quote",
    "parameters": [
      {
        "name": "quoteId",
        "schema": "string",
        "required": true,
        "description": "ID of the quote",
        "example": "QUOTE_ID",
        "default": "2023051501242226386401725266"
      },
      {
        "name": "xSeelApiKey",
        "schema": "string",
        "required": true,
        "description": "Your Seel API key",
        "example": "e2b4f9c8d3a7e6d2f5b0c4a1d8e9b6",
        "default": "e2b4f9c8d3a7e6d2f5b0c4a1d8e9b6"
      },
      {
        "name": "xSeelApiVersion",
        "schema": "string",
        "required": true,
        "description": "Version of the Seel API to use",
        "example": "1.3.0",
        "default": "1.3.0"
      },
      {
        "name": "partner",
        "schema": "string",
        "required": true,
        "description": "partner name",
        "example": "seel",
        "default": "seel"
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
    "url": "/{partner}/products",
    "method": "addNewProduct",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Product",
    "typeScriptTag": "product",
    "description": "Create a product",
    "parameters": [
      {
        "name": "partner",
        "schema": "string",
        "required": true,
        "description": "partner name",
        "example": "seel",
        "default": "seel"
      },
      {
        "name": "xSeelApiKey",
        "schema": "string",
        "required": true,
        "description": "Your Seel API key",
        "example": "e2b4f9c8d3a7e6d2f5b0c4a1d8e9b6",
        "default": "e2b4f9c8d3a7e6d2f5b0c4a1d8e9b6"
      },
      {
        "name": "xSeelApiVersion",
        "schema": "string",
        "required": true,
        "description": "Version of the Seel API to use",
        "example": "1.3.0",
        "default": "1.3.0"
      },
      {
        "name": "merchant_id",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "M12345"
      },
      {
        "name": "variant_id",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "V789"
      },
      {
        "name": "product_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "P001"
      },
      {
        "name": "product_title",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Example Product"
      },
      {
        "name": "variant_title",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Variant A"
      },
      {
        "name": "brand_name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Acme"
      },
      {
        "name": "manufacturer",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Acme Corp"
      },
      {
        "name": "category_1",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Electronics"
      },
      {
        "name": "category_2",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Gadgets"
      },
      {
        "name": "category_3",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Smartphones"
      },
      {
        "name": "category_4",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Android"
      },
      {
        "name": "product_description",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "This is an example product."
      },
      {
        "name": "image_url",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "https://example.com/product.jpg"
      },
      {
        "name": "price",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 199.99
      },
      {
        "name": "currency",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USD"
      },
      {
        "name": "requires_shipping",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": true
      },
      {
        "name": "model_number",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "123XYZ"
      },
      {
        "name": "condition",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "new"
      },
      {
        "name": "sku",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "SKU123"
      },
      {
        "name": "identifiers",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "manufacturer_warranty",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "dimensions",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "weight",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "product_attributes",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "created_ts",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "2023-08-28T10:00:00Z"
      },
      {
        "name": "updated_ts",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "2023-08-28T12:30:00Z"
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
    "url": "/{partner}/products/batch",
    "method": "batchCreateProducts",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Product",
    "typeScriptTag": "product",
    "description": "Batch create products",
    "parameters": [
      {
        "name": "xSeelApiKey",
        "schema": "string",
        "required": true,
        "description": "Your Seel API key",
        "example": "e2b4f9c8d3a7e6d2f5b0c4a1d8e9b6",
        "default": "e2b4f9c8d3a7e6d2f5b0c4a1d8e9b6"
      },
      {
        "name": "xSeelApiVersion",
        "schema": "string",
        "required": true,
        "description": "Version of the Seel API to use",
        "example": "1.3.0",
        "default": "1.3.0"
      },
      {
        "name": "partner",
        "schema": "string",
        "required": true,
        "description": "partner name",
        "example": "seel",
        "default": "seel"
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
    "url": "/{partner}/products/{product_id}",
    "method": "removeProductById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Product",
    "typeScriptTag": "product",
    "description": "Delete a product",
    "parameters": [
      {
        "name": "productId",
        "schema": "string",
        "required": true,
        "description": "ID of the product",
        "example": "PRODUCT_ID"
      },
      {
        "name": "xSeelApiKey",
        "schema": "string",
        "required": true,
        "description": "Your Seel API key",
        "example": "e2b4f9c8d3a7e6d2f5b0c4a1d8e9b6",
        "default": "e2b4f9c8d3a7e6d2f5b0c4a1d8e9b6"
      },
      {
        "name": "xSeelApiVersion",
        "schema": "string",
        "required": true,
        "description": "Version of the Seel API to use",
        "example": "1.3.0",
        "default": "1.3.0"
      },
      {
        "name": "partner",
        "schema": "string",
        "required": true,
        "description": "partner name",
        "example": "seel",
        "default": "seel"
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
    "url": "/{partner}/products/{product_id}",
    "method": "getProductById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Product",
    "typeScriptTag": "product",
    "description": "Get a product",
    "parameters": [
      {
        "name": "productId",
        "schema": "string",
        "required": true,
        "description": "ID of the product",
        "example": "PRODUCT_ID",
        "default": "2023051501242226386401725266"
      },
      {
        "name": "xSeelApiKey",
        "schema": "string",
        "required": true,
        "description": "Your Seel API key",
        "example": "e2b4f9c8d3a7e6d2f5b0c4a1d8e9b6",
        "default": "e2b4f9c8d3a7e6d2f5b0c4a1d8e9b6"
      },
      {
        "name": "xSeelApiVersion",
        "schema": "string",
        "required": true,
        "description": "Version of the Seel API to use",
        "example": "1.3.0",
        "default": "1.3.0"
      },
      {
        "name": "partner",
        "schema": "string",
        "required": true,
        "description": "partner name",
        "example": "seel",
        "default": "seel"
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
    "url": "/{partner}/products/{product_id}",
    "method": "updateProductDetails",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Product",
    "typeScriptTag": "product",
    "description": "Update a product",
    "parameters": [
      {
        "name": "productId",
        "schema": "string",
        "required": true,
        "description": "ID of the product",
        "example": "PRODUCT_ID",
        "default": "2023051501242226386401725266"
      },
      {
        "name": "partner",
        "schema": "string",
        "required": true,
        "description": "partner name",
        "example": "seel",
        "default": "seel"
      },
      {
        "name": "xSeelApiKey",
        "schema": "string",
        "required": true,
        "description": "Your Seel API key",
        "example": "e2b4f9c8d3a7e6d2f5b0c4a1d8e9b6",
        "default": "e2b4f9c8d3a7e6d2f5b0c4a1d8e9b6"
      },
      {
        "name": "xSeelApiVersion",
        "schema": "string",
        "required": true,
        "description": "Version of the Seel API to use",
        "example": "1.3.0",
        "default": "1.3.0"
      },
      {
        "name": "merchant_id",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "M12345"
      },
      {
        "name": "variant_id",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "V789"
      },
      {
        "name": "product_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "P001"
      },
      {
        "name": "product_title",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Example Product"
      },
      {
        "name": "variant_title",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Variant A"
      },
      {
        "name": "brand_name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Acme"
      },
      {
        "name": "manufacturer",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Acme Corp"
      },
      {
        "name": "category_1",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Electronics"
      },
      {
        "name": "category_2",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Gadgets"
      },
      {
        "name": "category_3",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Smartphones"
      },
      {
        "name": "category_4",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Android"
      },
      {
        "name": "product_description",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "This is an example product."
      },
      {
        "name": "image_url",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "https://example.com/product.jpg"
      },
      {
        "name": "price",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 199.99
      },
      {
        "name": "currency",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USD"
      },
      {
        "name": "requires_shipping",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": true
      },
      {
        "name": "model_number",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "123XYZ"
      },
      {
        "name": "condition",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "new"
      },
      {
        "name": "sku",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "SKU123"
      },
      {
        "name": "identifiers",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "manufacturer_warranty",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "dimensions",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "weight",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "product_attributes",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "created_ts",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "2023-08-28T10:00:00Z"
      },
      {
        "name": "updated_ts",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "2023-08-28T12:30:00Z"
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
    "url": "/{partner}/products/{product_id}/plans",
    "method": "listPlans",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Product",
    "typeScriptTag": "product",
    "description": "Get product plans",
    "parameters": [
      {
        "name": "productId",
        "schema": "string",
        "required": true,
        "description": "ID of the product",
        "example": "PRODUCT_ID",
        "default": "2023051501242226386401725266"
      },
      {
        "name": "xSeelApiKey",
        "schema": "string",
        "required": true,
        "description": "Your Seel API key",
        "example": "e2b4f9c8d3a7e6d2f5b0c4a1d8e9b6",
        "default": "e2b4f9c8d3a7e6d2f5b0c4a1d8e9b6"
      },
      {
        "name": "xSeelApiVersion",
        "schema": "string",
        "required": true,
        "description": "Version of the Seel API to use",
        "example": "1.3.0",
        "default": "1.3.0"
      },
      {
        "name": "partner",
        "schema": "string",
        "required": true,
        "description": "partner name",
        "example": "seel",
        "default": "seel"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "List of product plans."
      }
    ]
  },
  {
    "url": "/{partner}/orders",
    "method": "createNewOrder",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Order",
    "typeScriptTag": "order",
    "description": "Create an order",
    "parameters": [
      {
        "name": "xSeelApiKey",
        "schema": "string",
        "required": true,
        "description": "Your Seel API key",
        "example": "e2b4f9c8d3a7e6d2f5b0c4a1d8e9b6",
        "default": "e2b4f9c8d3a7e6d2f5b0c4a1d8e9b6"
      },
      {
        "name": "xSeelApiVersion",
        "schema": "string",
        "required": true,
        "description": "Version of the Seel API to use",
        "example": "1.3.0",
        "default": "1.3.0"
      },
      {
        "name": "partner",
        "schema": "string",
        "required": true,
        "description": "partner name",
        "example": "seel",
        "default": "seel"
      },
      {
        "name": "order_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "order12345"
      },
      {
        "name": "order_number",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "#12345"
      },
      {
        "name": "session_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "12345678"
      },
      {
        "name": "cart_id",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "cart_000001"
      },
      {
        "name": "merchant_id",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "merchant_000001"
      },
      {
        "name": "device_id",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "device123"
      },
      {
        "name": "client_ip",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "127.0.0.1"
      },
      {
        "name": "created_ts",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "1686049398000"
      },
      {
        "name": "line_items",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "shipping_address",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "customer",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "seel_services",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "extra_info",
        "schema": "object",
        "required": false,
        "description": "",
        "example": {}
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
    "url": "/{partner}/orders/batch",
    "method": "batchCreateOrders",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Order",
    "typeScriptTag": "order",
    "description": "Batch create orders",
    "parameters": [
      {
        "name": "xSeelApiKey",
        "schema": "string",
        "required": true,
        "description": "Your Seel API key",
        "example": "e2b4f9c8d3a7e6d2f5b0c4a1d8e9b6",
        "default": "e2b4f9c8d3a7e6d2f5b0c4a1d8e9b6"
      },
      {
        "name": "xSeelApiVersion",
        "schema": "string",
        "required": true,
        "description": "Version of the Seel API to use",
        "example": "1.3.0",
        "default": "1.3.0"
      },
      {
        "name": "partner",
        "schema": "string",
        "required": true,
        "description": "partner name",
        "example": "seel",
        "default": "seel"
      },
      {
        "name": "orders",
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
    "url": "/{partner}/orders/{order_id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Order",
    "typeScriptTag": "order",
    "description": "Get an order",
    "parameters": [
      {
        "name": "orderId",
        "schema": "string",
        "required": true,
        "description": "ID of the order",
        "example": "ORDER_ID"
      },
      {
        "name": "xSeelApiKey",
        "schema": "string",
        "required": true,
        "description": "Your Seel API key",
        "example": "e2b4f9c8d3a7e6d2f5b0c4a1d8e9b6",
        "default": "e2b4f9c8d3a7e6d2f5b0c4a1d8e9b6"
      },
      {
        "name": "xSeelApiVersion",
        "schema": "string",
        "required": true,
        "description": "Version of the Seel API to use",
        "example": "1.3.0",
        "default": "1.3.0"
      },
      {
        "name": "partner",
        "schema": "string",
        "required": true,
        "description": "partner name",
        "example": "seel",
        "default": "seel"
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
    "url": "/{partner}/orders/{order_id}",
    "method": "updateOrderDetails",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Order",
    "typeScriptTag": "order",
    "description": "Update an order",
    "parameters": [
      {
        "name": "orderId",
        "schema": "string",
        "required": true,
        "description": "ID of the order",
        "example": "ORDER_ID"
      },
      {
        "name": "xSeelApiKey",
        "schema": "string",
        "required": true,
        "description": "Your Seel API key",
        "example": "e2b4f9c8d3a7e6d2f5b0c4a1d8e9b6",
        "default": "e2b4f9c8d3a7e6d2f5b0c4a1d8e9b6"
      },
      {
        "name": "xSeelApiVersion",
        "schema": "string",
        "required": true,
        "description": "Version of the Seel API to use",
        "example": "1.3.0",
        "default": "1.3.0"
      },
      {
        "name": "partner",
        "schema": "string",
        "required": true,
        "description": "partner name",
        "example": "seel",
        "default": "seel"
      },
      {
        "name": "updated_ts",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "1680749645592"
      },
      {
        "name": "line_items",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "shipping_address",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "customer",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "extra_info",
        "schema": "object",
        "required": false,
        "description": "",
        "example": {}
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
    "url": "/{partner}/orders/{order_id}/cancel",
    "method": "cancelOrderById",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Order",
    "typeScriptTag": "order",
    "description": "Cancel an order",
    "parameters": [
      {
        "name": "orderId",
        "schema": "string",
        "required": true,
        "description": "ID of the order",
        "example": "ORDER_ID"
      },
      {
        "name": "xSeelApiKey",
        "schema": "string",
        "required": true,
        "description": "Your Seel API key",
        "example": "e2b4f9c8d3a7e6d2f5b0c4a1d8e9b6",
        "default": "e2b4f9c8d3a7e6d2f5b0c4a1d8e9b6"
      },
      {
        "name": "xSeelApiVersion",
        "schema": "string",
        "required": true,
        "description": "Version of the Seel API to use",
        "example": "1.3.0",
        "default": "1.3.0"
      },
      {
        "name": "partner",
        "schema": "string",
        "required": true,
        "description": "partner name",
        "example": "seel",
        "default": "seel"
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
    "url": "/{partner}/orders/{order_id}/fulfillments",
    "method": "listFulfillments",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Fulfillment",
    "typeScriptTag": "fulfillment",
    "description": "List fulfillments",
    "parameters": [
      {
        "name": "orderId",
        "schema": "string",
        "required": true,
        "description": "ID of the order",
        "example": "ORDER_ID"
      },
      {
        "name": "xSeelApiKey",
        "schema": "string",
        "required": true,
        "description": "Your Seel API key",
        "example": "e2b4f9c8d3a7e6d2f5b0c4a1d8e9b6",
        "default": "e2b4f9c8d3a7e6d2f5b0c4a1d8e9b6"
      },
      {
        "name": "xSeelApiVersion",
        "schema": "string",
        "required": true,
        "description": "Version of the Seel API to use",
        "example": "1.3.0",
        "default": "1.3.0"
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Query by page, default 0",
        "example": 0,
        "default": 0
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "required": false,
        "description": "Query by page_size, default 100",
        "example": 100,
        "default": 100
      },
      {
        "name": "partner",
        "schema": "string",
        "required": true,
        "description": "partner name",
        "example": "seel",
        "default": "seel"
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
    "url": "/{partner}/orders/{order_id}/fulfillments",
    "method": "createNewFulfillment",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Fulfillment",
    "typeScriptTag": "fulfillment",
    "description": "Create a fulfillment",
    "parameters": [
      {
        "name": "orderId",
        "schema": "string",
        "required": true,
        "description": "ID of the order",
        "example": "ORDER_ID"
      },
      {
        "name": "xSeelApiKey",
        "schema": "string",
        "required": true,
        "description": "Your Seel API key",
        "example": "e2b4f9c8d3a7e6d2f5b0c4a1d8e9b6",
        "default": "e2b4f9c8d3a7e6d2f5b0c4a1d8e9b6"
      },
      {
        "name": "xSeelApiVersion",
        "schema": "string",
        "required": true,
        "description": "Version of the Seel API to use",
        "example": "1.3.0",
        "default": "1.3.0"
      },
      {
        "name": "partner",
        "schema": "string",
        "required": true,
        "description": "partner name",
        "example": "seel",
        "default": "seel"
      },
      {
        "name": "fulfillment_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "fulfillment_id"
      },
      {
        "name": "created_ts",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "1686049398000"
      },
      {
        "name": "updated_ts",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "1686049398000"
      },
      {
        "name": "tracking_number",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "YT1231232113"
      },
      {
        "name": "carrier",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USPS"
      },
      {
        "name": "tracking_url",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "https://tools.usps.com/go/TrackConfirmAction_input"
      },
      {
        "name": "shipment_status",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "delivered"
      },
      {
        "name": "line_items",
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
    "url": "/{partner}/orders/{order_id}/fulfillments/{fulfillment_id}",
    "method": "getDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Fulfillment",
    "typeScriptTag": "fulfillment",
    "description": "Get a fulfillment",
    "parameters": [
      {
        "name": "orderId",
        "schema": "string",
        "required": true,
        "description": "ID of the order",
        "example": "ORDER_ID"
      },
      {
        "name": "fulfillmentId",
        "schema": "string",
        "required": true,
        "description": "ID of the fulfillment",
        "example": "FULFILLMENT_ID"
      },
      {
        "name": "xSeelApiKey",
        "schema": "string",
        "required": true,
        "description": "Your Seel API key",
        "example": "e2b4f9c8d3a7e6d2f5b0c4a1d8e9b6",
        "default": "e2b4f9c8d3a7e6d2f5b0c4a1d8e9b6"
      },
      {
        "name": "xSeelApiVersion",
        "schema": "string",
        "required": true,
        "description": "Version of the Seel API to use",
        "example": "1.3.0",
        "default": "1.3.0"
      },
      {
        "name": "partner",
        "schema": "string",
        "required": true,
        "description": "partner name",
        "example": "seel",
        "default": "seel"
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
    "url": "/{partner}/orders/{order_id}/fulfillments/{fulfillment_id}",
    "method": "updateFulfillmentDetails",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Fulfillment",
    "typeScriptTag": "fulfillment",
    "description": "Update a fulfillment",
    "parameters": [
      {
        "name": "orderId",
        "schema": "string",
        "required": true,
        "description": "ID of the order",
        "example": "ORDER_ID"
      },
      {
        "name": "fulfillmentId",
        "schema": "string",
        "required": true,
        "description": "ID of the fulfillment",
        "example": "FULFILLMENT_ID"
      },
      {
        "name": "xSeelApiKey",
        "schema": "string",
        "required": true,
        "description": "Your Seel API key",
        "example": "e2b4f9c8d3a7e6d2f5b0c4a1d8e9b6",
        "default": "e2b4f9c8d3a7e6d2f5b0c4a1d8e9b6"
      },
      {
        "name": "xSeelApiVersion",
        "schema": "string",
        "required": true,
        "description": "Version of the Seel API to use",
        "example": "1.3.0",
        "default": "1.3.0"
      },
      {
        "name": "partner",
        "schema": "string",
        "required": true,
        "description": "partner name",
        "example": "seel",
        "default": "seel"
      },
      {
        "name": "updated_ts",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "1686049398000"
      },
      {
        "name": "tracking_number",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "YT1231232113"
      },
      {
        "name": "carrier",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USPS"
      },
      {
        "name": "tracking_url",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "https://tools.usps.com/go/TrackConfirmAction_input"
      },
      {
        "name": "shipment_status",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "delivered"
      },
      {
        "name": "line_items",
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
    "url": "/{partner}/orders/{order_id}/fulfillments/{fulfillment_id}/cancel",
    "method": "cancelFulfillment",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Fulfillment",
    "typeScriptTag": "fulfillment",
    "description": "Cancel a fulfillment",
    "parameters": [
      {
        "name": "orderId",
        "schema": "string",
        "required": true,
        "description": "ID of the order",
        "example": "ORDER_ID"
      },
      {
        "name": "fulfillmentId",
        "schema": "string",
        "required": true,
        "description": "ID of the fulfillment",
        "example": "FULFILLMENT_ID"
      },
      {
        "name": "xSeelApiKey",
        "schema": "string",
        "required": true,
        "description": "Your Seel API key",
        "example": "e2b4f9c8d3a7e6d2f5b0c4a1d8e9b6",
        "default": "e2b4f9c8d3a7e6d2f5b0c4a1d8e9b6"
      },
      {
        "name": "xSeelApiVersion",
        "schema": "string",
        "required": true,
        "description": "Version of the Seel API to use",
        "example": "1.3.0",
        "default": "1.3.0"
      },
      {
        "name": "partner",
        "schema": "string",
        "required": true,
        "description": "partner name",
        "example": "seel",
        "default": "seel"
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
    "url": "/{partner}/contracts",
    "method": "listContracts",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Contract",
    "typeScriptTag": "contract",
    "description": "List contracts",
    "parameters": [
      {
        "name": "xSeelApiKey",
        "schema": "string",
        "required": true,
        "description": "Your Seel API key",
        "example": "e2b4f9c8d3a7e6d2f5b0c4a1d8e9b6",
        "default": "e2b4f9c8d3a7e6d2f5b0c4a1d8e9b6"
      },
      {
        "name": "xSeelApiVersion",
        "schema": "string",
        "required": true,
        "description": "Version of the Seel API to use",
        "example": "1.3.0",
        "default": "1.3.0"
      },
      {
        "name": "orderId",
        "schema": "string",
        "required": false,
        "description": "Query by order ID"
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Query by page, default 0",
        "example": 0,
        "default": 0
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "required": false,
        "description": "Query by page_size, default 100",
        "example": 100,
        "default": 100
      },
      {
        "name": "partner",
        "schema": "string",
        "required": true,
        "description": "partner name",
        "example": "seel",
        "default": "seel"
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
    "url": "/{partner}/contracts/{contract_id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Contract",
    "typeScriptTag": "contract",
    "description": "Get a contract",
    "parameters": [
      {
        "name": "contractId",
        "schema": "string",
        "required": true,
        "description": "ID of the contract",
        "example": "CONTRACT_ID"
      },
      {
        "name": "xSeelApiKey",
        "schema": "string",
        "required": true,
        "description": "Your Seel API key",
        "example": "e2b4f9c8d3a7e6d2f5b0c4a1d8e9b6",
        "default": "e2b4f9c8d3a7e6d2f5b0c4a1d8e9b6"
      },
      {
        "name": "xSeelApiVersion",
        "schema": "string",
        "required": true,
        "description": "Version of the Seel API to use",
        "example": "1.3.0",
        "default": "1.3.0"
      },
      {
        "name": "partner",
        "schema": "string",
        "required": true,
        "description": "partner name",
        "example": "seel",
        "default": "seel"
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
    "url": "/{partner}/claims",
    "method": "getAllClaims",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Claim",
    "typeScriptTag": "claim",
    "description": "List claims",
    "parameters": [
      {
        "name": "xSeelApiKey",
        "schema": "string",
        "required": true,
        "description": "Your Seel API key",
        "example": "e2b4f9c8d3a7e6d2f5b0c4a1d8e9b6",
        "default": "e2b4f9c8d3a7e6d2f5b0c4a1d8e9b6"
      },
      {
        "name": "xSeelApiVersion",
        "schema": "string",
        "required": true,
        "description": "Version of the Seel API to use",
        "example": "1.3.0",
        "default": "1.3.0"
      },
      {
        "name": "orderId",
        "schema": "string",
        "required": false,
        "description": "Query by order ID"
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Query by page, default 0",
        "example": 0,
        "default": 0
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "required": false,
        "description": "Query by page_size, default 100",
        "example": 100,
        "default": 100
      },
      {
        "name": "partner",
        "schema": "string",
        "required": true,
        "description": "partner name",
        "example": "seel",
        "default": "seel"
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
    "url": "/{partner}/claims/{claim_id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Claim",
    "typeScriptTag": "claim",
    "description": "Get a claim",
    "parameters": [
      {
        "name": "claimId",
        "schema": "string",
        "required": true,
        "description": "ID of the claim",
        "example": "CLAIM_ID"
      },
      {
        "name": "xSeelApiKey",
        "schema": "string",
        "required": true,
        "description": "Your Seel API key",
        "example": "e2b4f9c8d3a7e6d2f5b0c4a1d8e9b6",
        "default": "e2b4f9c8d3a7e6d2f5b0c4a1d8e9b6"
      },
      {
        "name": "xSeelApiVersion",
        "schema": "string",
        "required": true,
        "description": "Version of the Seel API to use",
        "example": "1.3.0",
        "default": "1.3.0"
      },
      {
        "name": "partner",
        "schema": "string",
        "required": true,
        "description": "partner name",
        "example": "seel",
        "default": "seel"
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
    "url": "/{partner}/invoices",
    "method": "listInvoices",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Invoice",
    "typeScriptTag": "invoice",
    "description": "List invoices",
    "parameters": [
      {
        "name": "xSeelApiKey",
        "schema": "string",
        "required": true,
        "description": "Your Seel API key",
        "example": "e2b4f9c8d3a7e6d2f5b0c4a1d8e9b6",
        "default": "e2b4f9c8d3a7e6d2f5b0c4a1d8e9b6"
      },
      {
        "name": "xSeelApiVersion",
        "schema": "string",
        "required": true,
        "description": "Version of the Seel API to use",
        "example": "1.3.0",
        "default": "1.3.0"
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Query by page, default 0",
        "example": 0,
        "default": 0
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "required": false,
        "description": "Query by page_size, default 100",
        "example": 100,
        "default": 100
      },
      {
        "name": "partner",
        "schema": "string",
        "required": true,
        "description": "partner name",
        "example": "seel",
        "default": "seel"
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
    "url": "/{partner}/invoices/{invoice_id}",
    "method": "getInvoiceById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Invoice",
    "typeScriptTag": "invoice",
    "description": "Get an invoice",
    "parameters": [
      {
        "name": "invoiceId",
        "schema": "string",
        "required": true,
        "description": "ID of the invoice",
        "example": "12345"
      },
      {
        "name": "xSeelApiKey",
        "schema": "string",
        "required": true,
        "description": "Your Seel API key",
        "example": "e2b4f9c8d3a7e6d2f5b0c4a1d8e9b6",
        "default": "e2b4f9c8d3a7e6d2f5b0c4a1d8e9b6"
      },
      {
        "name": "xSeelApiVersion",
        "schema": "string",
        "required": true,
        "description": "Version of the Seel API to use",
        "example": "1.3.0",
        "default": "1.3.0"
      },
      {
        "name": "partner",
        "schema": "string",
        "required": true,
        "description": "partner name",
        "example": "seel",
        "default": "seel"
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
    "url": "/{partner}/events",
    "method": "createNewEvent",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Event",
    "typeScriptTag": "event",
    "description": "Create events",
    "parameters": [
      {
        "name": "xSeelApiKey",
        "schema": "string",
        "required": true,
        "description": "Your Seel API key",
        "example": "e2b4f9c8d3a7e6d2f5b0c4a1d8e9b6",
        "default": "e2b4f9c8d3a7e6d2f5b0c4a1d8e9b6"
      },
      {
        "name": "xSeelApiVersion",
        "schema": "string",
        "required": true,
        "description": "Version of the Seel API to use",
        "example": "1.3.0",
        "default": "1.3.0"
      },
      {
        "name": "partner",
        "schema": "string",
        "required": true,
        "description": "partner name",
        "example": "seel",
        "default": "seel"
      },
      {
        "name": "session_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "1680749645592"
      },
      {
        "name": "event_ts",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "1680749645592"
      },
      {
        "name": "customer_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "229413056"
      },
      {
        "name": "device_id",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "3kGv6F1i8L"
      },
      {
        "name": "client_ip",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "64.64.230.190"
      },
      {
        "name": "event_source",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "web"
      },
      {
        "name": "event_type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "cart_add"
      },
      {
        "name": "event_info",
        "schema": "object",
        "required": true,
        "description": "",
        "example": {}
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
      apiTitle="Seel API"
      apiBaseUrl="https://api-test.seel.com/v1"
      apiVersion="1.3.0"
      endpoints={22}
      sdkMethods={29}
      schemas={37}
      parameters={261}
      difficulty="Easy"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/seel/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/seel/openapi.yaml"
      developerDocumentation="developer.seel.com/reference/introduction"
    />
  );
}
  