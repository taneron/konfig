import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function GustoEmbeddedPayrollTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="gusto-embedded-payroll-typescript-sdk"
      metaDescription={`Launched in 2011 as ZenPayroll, Gusto serves more than 300,000 businesses nationwide. Each year we process tens of billions of dollars of payroll and provide employee benefits—like health insurance and 401(k) accounts—while helping companies create incredible work places.

Through one refreshingly easy, integrated platform, we automate and simplify your payroll, benefits, and HR, all while providing expert support. You and your employees will get the peace of mind you need to do your best work.`}
      company="Gusto"
      serviceName="Embedded Payroll"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/gusto/embedded-payroll/logo.png"
      companyKebabCase="gusto"
      clientNameCamelCase="gustoEmbeddedPayroll"
      homepage="gusto.com"
      lastUpdated={new Date("2024-03-26T00:52:31.854Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/gusto/embedded-payroll/favicon.png"
      // Missing contactUrl
      contactEmail="developer@gusto.com"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/gusto/embedded-payroll/imagePreview.png"
      GettingStarted={GettingStarted}
      FirstRequest={FirstRequest}
      categories={["payroll","hr","benefits","employee_engagement","hr_platform","hr_softwares","hr_management_system","human_resources"]}
      methods={[
  {
    "url": "/v1/token_info",
    "method": "getCurrentAccessTokenInfo",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Introspection",
    "typeScriptTag": "introspection",
    "description": "Get info about the current access token",
    "parameters": [
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
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
    "url": "/oauth/token",
    "method": "exchangeRefreshToken",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Introspection",
    "typeScriptTag": "introspection",
    "description": "Refresh access token",
    "parameters": [
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
      },
      {
        "name": "client_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CLIENT_ID"
      },
      {
        "name": "client_secret",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CLIENT_SECRET"
      },
      {
        "name": "redirect_uri",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "refresh_token",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "REFRESH_TOKEN"
      },
      {
        "name": "grant_type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "GRANT_TYPE"
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
    "url": "/v1/partner_managed_companies",
    "method": "createPartnerManagedCompany",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Companies",
    "typeScriptTag": "companies",
    "description": "Create a partner managed company",
    "parameters": [
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
      },
      {
        "name": "user",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "company",
        "schema": "object",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Object returned when creating a partner managed company"
      },
      {
        "statusCode": "401",
        "description": "Authorization information is missing or invalid."
      },
      {
        "statusCode": "422",
        "description": "Unprocessable Entity\n  \nThis may happen when the body of your request contains errors such as `invalid_attribute_value`, or the request fails due to an `invalid_operation`. See the [Errors Categories](https://docs.gusto.com/embedded-payroll/docs/error-categories) guide for more details.\n"
      }
    ]
  },
  {
    "url": "/v1/companies/{company_id}",
    "method": "getCompany",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Companies",
    "typeScriptTag": "companies",
    "description": "Get a company",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The UUID of the company",
        "example": "COMPANY_ID"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The representation of a company in Gusto."
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/partner_managed_companies/{company_uuid}/migrate",
    "method": "migrateToEmbeddedPayroll",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Companies",
    "typeScriptTag": "companies",
    "description": "Migrate company to embedded payroll",
    "parameters": [
      {
        "name": "companyUuid",
        "schema": "string",
        "required": true,
        "description": "The UUID of the company",
        "example": "COMPANY_UUID"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
      },
      {
        "name": "email",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EMAIL"
      },
      {
        "name": "ip_address",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "IP_ADDRESS"
      },
      {
        "name": "external_user_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EXTERNAL_USER_ID"
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
      },
      {
        "statusCode": "422",
        "description": "Unprocessable Entity\n  \nThis may happen when the body of your request contains errors such as `invalid_attribute_value`, or the request fails due to an `invalid_operation`. See the [Errors Categories](https://docs.gusto.com/embedded-payroll/docs/error-categories) guide for more details.\n"
      }
    ]
  },
  {
    "url": "/v1/partner_managed_companies/{company_uuid}/accept_terms_of_service",
    "method": "acceptTermsOfService",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Companies",
    "typeScriptTag": "companies",
    "description": "Accept terms of service for a company user",
    "parameters": [
      {
        "name": "companyUuid",
        "schema": "string",
        "required": true,
        "description": "The UUID of the company",
        "example": "COMPANY_UUID"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
      },
      {
        "name": "email",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EMAIL"
      },
      {
        "name": "ip_address",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "IP_ADDRESS"
      },
      {
        "name": "external_user_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EXTERNAL_USER_ID"
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
      },
      {
        "statusCode": "422",
        "description": "Unprocessable Entity\n  \nThis may happen when the body of your request contains errors such as `invalid_attribute_value`, or the request fails due to an `invalid_operation`. See the [Errors Categories](https://docs.gusto.com/embedded-payroll/docs/error-categories) guide for more details.\n"
      }
    ]
  },
  {
    "url": "/v1/partner_managed_companies/{company_uuid}/retrieve_terms_of_service",
    "method": "getTermsOfServiceStatus",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Companies",
    "typeScriptTag": "companies",
    "description": "Retrieve terms of service status for a company user",
    "parameters": [
      {
        "name": "companyUuid",
        "schema": "string",
        "required": true,
        "description": "The UUID of the company",
        "example": "COMPANY_UUID"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
      },
      {
        "name": "email",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EMAIL"
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
      },
      {
        "statusCode": "422",
        "description": "Unprocessable Entity\n  \nThis may happen when the body of your request contains errors such as `invalid_attribute_value`, or the request fails due to an `invalid_operation`. See the [Errors Categories](https://docs.gusto.com/embedded-payroll/docs/error-categories) guide for more details.\n"
      }
    ]
  },
  {
    "url": "/v1/invoices/{invoice_period}",
    "method": "getInvoicingDataForCompanies",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Invoices",
    "typeScriptTag": "invoices",
    "description": "Retrieve invoicing data for companies",
    "parameters": [
      {
        "name": "invoicePeriod",
        "schema": "string",
        "required": true,
        "description": "The month we are calculating the invoice for. Must be in YYYY-MM format",
        "example": "2020-01"
      },
      {
        "name": "page",
        "schema": "number",
        "description": "The page that is requested. When unspecified, will load all objects unless endpoint forces pagination."
      },
      {
        "name": "per",
        "schema": "number",
        "description": "Number of objects per page. For majority of endpoints will default to 25"
      },
      {
        "name": "companyUuids",
        "schema": "string",
        "description": "Filter companies returned in the active_companies response, will return an error if company not active during provided invoice period. i.e. `?company_uuids=781922d8-e780-4b6b-bf74-ee303166d022,bbbca930-7322-491c-ba7f-98707a52a9c5`"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Representation of a partners invoice data"
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": "Unprocessable Entity\n  \nThis may happen when the body of your request contains errors such as `invalid_attribute_value`, or the request fails due to an `invalid_operation`. See the [Errors Categories](https://docs.gusto.com/embedded-payroll/docs/error-categories) guide for more details.\n"
      }
    ]
  },
  {
    "url": "/v1/companies/{company_id}/federal_tax_details",
    "method": "getAttributes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Federal Tax Details",
    "typeScriptTag": "federalTaxDetails",
    "description": "Get Federal Tax Details",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The UUID of the company",
        "example": "COMPANY_ID"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
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
    "url": "/v1/companies/{company_id}/federal_tax_details",
    "method": "updateAttributes",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Federal Tax Details",
    "typeScriptTag": "federalTaxDetails",
    "description": "Update Federal Tax Details",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The UUID of the company",
        "example": "COMPANY_ID"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
      },
      {
        "name": "version",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "VERSION"
      },
      {
        "name": "legal_name",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "ein",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "tax_payer_type",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "filing_form",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "taxable_as_scorp",
        "schema": "boolean",
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
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": "Unprocessable Entity\n  \nThis may happen when the body of your request contains errors such as `invalid_attribute_value`, or the request fails due to an `invalid_operation`. See the [Errors Categories](https://docs.gusto.com/embedded-payroll/docs/error-categories) guide for more details.\n"
      }
    ]
  },
  {
    "url": "/v1/companies/{company_id}/industry_selection",
    "method": "getCompanyIndustrySelection",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Industry Selection",
    "typeScriptTag": "industrySelection",
    "description": "Get a company industry selection",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The UUID of the company",
        "example": "COMPANY_ID"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
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
    "url": "/v1/companies/{company_id}/industry_selection",
    "method": "updateCompanyIndustrySelection",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Industry Selection",
    "typeScriptTag": "industrySelection",
    "description": "Update a company industry selection",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The UUID of the company",
        "example": "COMPANY_ID"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
      },
      {
        "name": "title",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TITLE"
      },
      {
        "name": "naics_code",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAICS_CODE"
      },
      {
        "name": "sic_codes",
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
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": "Unprocessable Entity\n  \nThis may happen when the body of your request contains errors such as `invalid_attribute_value`, or the request fails due to an `invalid_operation`. See the [Errors Categories](https://docs.gusto.com/embedded-payroll/docs/error-categories) guide for more details.\n"
      }
    ]
  },
  {
    "url": "/v1/companies/{company_id}/admins",
    "method": "getAllAdmins",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Companies",
    "typeScriptTag": "companies",
    "description": "Get all the admins at a company",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The UUID of the company",
        "example": "COMPANY_ID"
      },
      {
        "name": "page",
        "schema": "number",
        "description": "The page that is requested. When unspecified, will load all objects unless endpoint forces pagination."
      },
      {
        "name": "per",
        "schema": "number",
        "description": "Number of objects per page. For majority of endpoints will default to 25"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
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
    "url": "/v1/companies/{company_id}/admins",
    "method": "createAdmin",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Companies",
    "typeScriptTag": "companies",
    "description": "Create an admin for the company",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The UUID of the company",
        "example": "COMPANY_ID"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
      },
      {
        "name": "first_name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FIRST_NAME"
      },
      {
        "name": "last_name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "LAST_NAME"
      },
      {
        "name": "email",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EMAIL"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The representation of an admin user in Gusto."
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": "Unprocessable Entity\n  \nThis may happen when the body of your request contains errors such as `invalid_attribute_value`, or the request fails due to an `invalid_operation`. See the [Errors Categories](https://docs.gusto.com/embedded-payroll/docs/error-categories) guide for more details.\n"
      }
    ]
  },
  {
    "url": "/v1/companies/{company_uuid}/signatories",
    "method": "getCompanySignatories",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Signatories",
    "typeScriptTag": "signatories",
    "description": "Get all company signatories",
    "parameters": [
      {
        "name": "companyUuid",
        "schema": "string",
        "required": true,
        "description": "The UUID of the company",
        "example": "COMPANY_UUID"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
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
    "url": "/v1/companies/{company_uuid}/signatories",
    "method": "createSignatoryWithCompleteInformation",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Signatories",
    "typeScriptTag": "signatories",
    "description": "Create a signatory",
    "parameters": [
      {
        "name": "companyUuid",
        "schema": "string",
        "required": true,
        "description": "The UUID of the company",
        "example": "COMPANY_UUID"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
      },
      {
        "name": "title",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TITLE"
      },
      {
        "name": "ssn",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SSN"
      },
      {
        "name": "first_name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FIRST_NAME"
      },
      {
        "name": "middle_initial",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "last_name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "LAST_NAME"
      },
      {
        "name": "email",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EMAIL"
      },
      {
        "name": "phone",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PHONE"
      },
      {
        "name": "birthday",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "BIRTHDAY"
      },
      {
        "name": "home_address",
        "schema": "object",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "The representation of a company's signatory"
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": "Unprocessable Entity\n  \nThis may happen when the body of your request contains errors such as `invalid_attribute_value`, or the request fails due to an `invalid_operation`. See the [Errors Categories](https://docs.gusto.com/embedded-payroll/docs/error-categories) guide for more details.\n"
      }
    ]
  },
  {
    "url": "/v1/companies/{company_uuid}/signatories/invite",
    "method": "createInvite",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Signatories",
    "typeScriptTag": "signatories",
    "description": "Invite a signatory",
    "parameters": [
      {
        "name": "companyUuid",
        "schema": "string",
        "required": true,
        "description": "The UUID of the company",
        "example": "COMPANY_UUID"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
      },
      {
        "name": "title",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "first_name",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "last_name",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "email",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EMAIL"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "The representation of a company's signatory"
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": "Unprocessable Entity\n  \nThis may happen when the body of your request contains errors such as `invalid_attribute_value`, or the request fails due to an `invalid_operation`. See the [Errors Categories](https://docs.gusto.com/embedded-payroll/docs/error-categories) guide for more details.\n"
      }
    ]
  },
  {
    "url": "/v1/companies/{company_uuid}/signatories/{signatory_uuid}",
    "method": "deleteSignatory",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Signatories",
    "typeScriptTag": "signatories",
    "description": "Delete a signatory",
    "parameters": [
      {
        "name": "companyUuid",
        "schema": "string",
        "required": true,
        "description": "The UUID of the company",
        "example": "COMPANY_UUID"
      },
      {
        "name": "signatoryUuid",
        "schema": "string",
        "required": true,
        "description": "The UUID of the signatory",
        "example": "SIGNATORY_UUID"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/companies/{company_uuid}/signatories/{signatory_uuid}",
    "method": "update",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Signatories",
    "typeScriptTag": "signatories",
    "description": "Update a signatory",
    "parameters": [
      {
        "name": "companyUuid",
        "schema": "string",
        "required": true,
        "description": "The UUID of the company",
        "example": "COMPANY_UUID"
      },
      {
        "name": "signatoryUuid",
        "schema": "string",
        "required": true,
        "description": "The UUID of the signatory",
        "example": "SIGNATORY_UUID"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
      },
      {
        "name": "title",
        "schema": "string",
        "description": ""
      },
      {
        "name": "version",
        "schema": "string",
        "description": ""
      },
      {
        "name": "first_name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "middle_initial",
        "schema": "string",
        "description": ""
      },
      {
        "name": "last_name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "phone",
        "schema": "string",
        "description": ""
      },
      {
        "name": "birthday",
        "schema": "string",
        "description": ""
      },
      {
        "name": "ssn",
        "schema": "string",
        "description": ""
      },
      {
        "name": "home_address",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The representation of a company's signatory"
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": "Unprocessable Entity\n  \nThis may happen when the body of your request contains errors such as `invalid_attribute_value`, or the request fails due to an `invalid_operation`. See the [Errors Categories](https://docs.gusto.com/embedded-payroll/docs/error-categories) guide for more details.\n"
      }
    ]
  },
  {
    "url": "/v1/companies/{company_uuid}/onboarding_status",
    "method": "getOnboardingStatus",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Companies",
    "typeScriptTag": "companies",
    "description": "Get the company's onboarding status",
    "parameters": [
      {
        "name": "companyUuid",
        "schema": "string",
        "required": true,
        "description": "The UUID of the company",
        "example": "COMPANY_UUID"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The representation of a company's onboarding status"
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/companies/{company_uuid}/finish_onboarding",
    "method": "finishOnboarding",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Companies",
    "typeScriptTag": "companies",
    "description": "Finish company onboarding",
    "parameters": [
      {
        "name": "companyUuid",
        "schema": "string",
        "required": true,
        "description": "The UUID of the company",
        "example": "COMPANY_UUID"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The representation of a company's onboarding status"
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": "Unprocessable Entity\n  \nThis may happen when the body of your request contains errors such as `invalid_attribute_value`, or the request fails due to an `invalid_operation`. See the [Errors Categories](https://docs.gusto.com/embedded-payroll/docs/error-categories) guide for more details.\n"
      }
    ]
  },
  {
    "url": "/v1/companies/{company_id}/custom_fields",
    "method": "getCustomFields",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Companies",
    "typeScriptTag": "companies",
    "description": "Get the custom fields of a company",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The UUID of the company",
        "example": "COMPANY_ID"
      },
      {
        "name": "page",
        "schema": "number",
        "description": "The page that is requested. When unspecified, will load all objects unless endpoint forces pagination."
      },
      {
        "name": "per",
        "schema": "number",
        "description": "Number of objects per page. For majority of endpoints will default to 25"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
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
    "url": "/v1/companies/{company_uuid}/flows",
    "method": "generateLink",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Flows",
    "typeScriptTag": "flows",
    "description": "Create a flow",
    "parameters": [
      {
        "name": "companyUuid",
        "schema": "string",
        "required": true,
        "description": "The UUID of the company",
        "example": "COMPANY_UUID"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
      },
      {
        "name": "flow_type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FLOW_TYPE"
      },
      {
        "name": "entity_uuid",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "entity_type",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "The representation of a flow in Gusto white-label UI."
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": "Unprocessable Entity\n  \nThis may happen when the body of your request contains errors such as `invalid_attribute_value`, or the request fails due to an `invalid_operation`. See the [Errors Categories](https://docs.gusto.com/embedded-payroll/docs/error-categories) guide for more details.\n"
      }
    ]
  },
  {
    "url": "/v1/companies/{company_id}/locations",
    "method": "getCompanyLocations",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Locations",
    "typeScriptTag": "locations",
    "description": "Get company locations",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The UUID of the company",
        "example": "COMPANY_ID"
      },
      {
        "name": "page",
        "schema": "number",
        "description": "The page that is requested. When unspecified, will load all objects unless endpoint forces pagination."
      },
      {
        "name": "per",
        "schema": "number",
        "description": "Number of objects per page. For majority of endpoints will default to 25"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
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
    "url": "/v1/companies/{company_id}/locations",
    "method": "createCompanyLocation",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Locations",
    "typeScriptTag": "locations",
    "description": "Create a company location",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The UUID of the company",
        "example": "COMPANY_ID"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
      },
      {
        "name": "phone_number",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PHONE_NUMBER"
      },
      {
        "name": "street_1",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "STREET_1"
      },
      {
        "name": "street_2",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "city",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CITY"
      },
      {
        "name": "state",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "STATE"
      },
      {
        "name": "zip",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ZIP"
      },
      {
        "name": "country",
        "schema": "string",
        "required": false,
        "description": "",
        "default": "USA"
      },
      {
        "name": "mailing_address",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "filing_address",
        "schema": "boolean",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "The representation of an address in Gusto."
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": "Unprocessable Entity\n  \nThis may happen when the body of your request contains errors such as `invalid_attribute_value`, or the request fails due to an `invalid_operation`. See the [Errors Categories](https://docs.gusto.com/embedded-payroll/docs/error-categories) guide for more details.\n"
      }
    ]
  },
  {
    "url": "/v1/locations/{location_id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Locations",
    "typeScriptTag": "locations",
    "description": "Get a location",
    "parameters": [
      {
        "name": "locationId",
        "schema": "string",
        "required": true,
        "description": "The UUID of the location",
        "example": "LOCATION_ID"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The representation of an address in Gusto."
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/locations/{location_id}",
    "method": "updateLocation",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Locations",
    "typeScriptTag": "locations",
    "description": "Update a location",
    "parameters": [
      {
        "name": "locationId",
        "schema": "string",
        "required": true,
        "description": "The UUID of the location",
        "example": "LOCATION_ID"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The representation of an address in Gusto."
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": "Unprocessable Entity\n  \nThis may happen when the body of your request contains errors such as `invalid_attribute_value`, or the request fails due to an `invalid_operation`. See the [Errors Categories](https://docs.gusto.com/embedded-payroll/docs/error-categories) guide for more details.\n"
      }
    ]
  },
  {
    "url": "/v1/locations/{location_uuid}/minimum_wages",
    "method": "getMinimumWages",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Locations",
    "typeScriptTag": "locations",
    "description": "Get minimum wages for a location",
    "parameters": [
      {
        "name": "locationUuid",
        "schema": "string",
        "required": true,
        "description": "The UUID of the location",
        "example": "LOCATION_UUID"
      },
      {
        "name": "effectiveDate",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "2020-01-31"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
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
    "url": "/v1/companies/{company_id}/bank_accounts",
    "method": "listCompanyBankAccounts",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Bank Accounts",
    "typeScriptTag": "bankAccounts",
    "description": "Get all company bank accounts",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The UUID of the company",
        "example": "COMPANY_ID"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
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
    "url": "/v1/companies/{company_id}/bank_accounts",
    "method": "createVerificationDeposits",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Bank Accounts",
    "typeScriptTag": "bankAccounts",
    "description": "Create a company bank account",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The UUID of the company",
        "example": "COMPANY_ID"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
      },
      {
        "name": "routing_number",
        "schema": "string",
        "description": ""
      },
      {
        "name": "account_number",
        "schema": "string",
        "description": ""
      },
      {
        "name": "account_type",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "The company bank account"
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": "Unprocessable Entity\n  \nThis may happen when the body of your request contains errors such as `invalid_attribute_value`, or the request fails due to an `invalid_operation`. See the [Errors Categories](https://docs.gusto.com/embedded-payroll/docs/error-categories) guide for more details.\n"
      }
    ]
  },
  {
    "url": "/v1/companies/{company_id}/bank_accounts/{bank_account_uuid}/verify",
    "method": "verifyMicroDeposits",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Bank Accounts",
    "typeScriptTag": "bankAccounts",
    "description": "Verify a company bank account",
    "parameters": [
      {
        "name": "bankAccountUuid",
        "schema": "string",
        "required": true,
        "description": "The UUID of the bank account",
        "example": "BANK_ACCOUNT_UUID"
      },
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The UUID of the company",
        "example": "COMPANY_ID"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
      },
      {
        "name": "deposit_1",
        "schema": "number",
        "description": ""
      },
      {
        "name": "deposit_2",
        "schema": "number",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The company bank account"
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": "Unprocessable Entity\n  \nThis may happen when the body of your request contains errors such as `invalid_attribute_value`, or the request fails due to an `invalid_operation`. See the [Errors Categories](https://docs.gusto.com/embedded-payroll/docs/error-categories) guide for more details.\n"
      }
    ]
  },
  {
    "url": "/v1/companies/{company_uuid}/external_payrolls",
    "method": "listForCompany",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "External Payrolls",
    "typeScriptTag": "externalPayrolls",
    "description": "Get external payrolls for a company",
    "parameters": [
      {
        "name": "companyUuid",
        "schema": "string",
        "required": true,
        "description": "The UUID of the company",
        "example": "COMPANY_UUID"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
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
    "url": "/v1/companies/{company_uuid}/external_payrolls",
    "method": "createNewPayroll",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "External Payrolls",
    "typeScriptTag": "externalPayrolls",
    "description": "Create a new external payroll for a company",
    "parameters": [
      {
        "name": "companyUuid",
        "schema": "string",
        "required": true,
        "description": "The UUID of the company",
        "example": "COMPANY_UUID"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
      },
      {
        "name": "check_date",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CHECK_DATE"
      },
      {
        "name": "payment_period_start_date",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PAYMENT_PERIOD_START_DATE"
      },
      {
        "name": "payment_period_end_date",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PAYMENT_PERIOD_END_DATE"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The representation of an external payroll."
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": "Unprocessable Entity\n  \nThis may happen when the body of your request contains errors such as `invalid_attribute_value`, or the request fails due to an `invalid_operation`. See the [Errors Categories](https://docs.gusto.com/embedded-payroll/docs/error-categories) guide for more details.\n"
      }
    ]
  },
  {
    "url": "/v1/companies/{company_uuid}/external_payrolls/{external_payroll_id}",
    "method": "deletePayroll",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "External Payrolls",
    "typeScriptTag": "externalPayrolls",
    "description": "Delete an external payroll",
    "parameters": [
      {
        "name": "companyUuid",
        "schema": "string",
        "required": true,
        "description": "The UUID of the company",
        "example": "COMPANY_UUID"
      },
      {
        "name": "externalPayrollId",
        "schema": "string",
        "required": true,
        "description": "The UUID of the external payroll",
        "example": "EXTERNAL_PAYROLL_ID"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/companies/{company_uuid}/external_payrolls/{external_payroll_id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "External Payrolls",
    "typeScriptTag": "externalPayrolls",
    "description": "Get an external payroll",
    "parameters": [
      {
        "name": "companyUuid",
        "schema": "string",
        "required": true,
        "description": "The UUID of the company",
        "example": "COMPANY_UUID"
      },
      {
        "name": "externalPayrollId",
        "schema": "string",
        "required": true,
        "description": "The UUID of the external payroll",
        "example": "EXTERNAL_PAYROLL_ID"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The representation of an external payroll."
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/companies/{company_uuid}/external_payrolls/{external_payroll_id}",
    "method": "updatePayrollItems",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "External Payrolls",
    "typeScriptTag": "externalPayrolls",
    "description": "Update an external payroll",
    "parameters": [
      {
        "name": "companyUuid",
        "schema": "string",
        "required": true,
        "description": "The UUID of the company",
        "example": "COMPANY_UUID"
      },
      {
        "name": "externalPayrollId",
        "schema": "string",
        "required": true,
        "description": "The UUID of the external payroll",
        "example": "EXTERNAL_PAYROLL_ID"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
      },
      {
        "name": "replace_fields",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "external_payroll_items",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The representation of an external payroll."
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": "Unprocessable Entity\n  \nThis may happen when the body of your request contains errors such as `invalid_attribute_value`, or the request fails due to an `invalid_operation`. See the [Errors Categories](https://docs.gusto.com/embedded-payroll/docs/error-categories) guide for more details.\n"
      }
    ]
  },
  {
    "url": "/v1/companies/{company_uuid}/external_payrolls/{external_payroll_id}/calculate_taxes",
    "method": "getTaxSuggestions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "External Payrolls",
    "typeScriptTag": "externalPayrolls",
    "description": "Get tax suggestions for an external payroll",
    "parameters": [
      {
        "name": "companyUuid",
        "schema": "string",
        "required": true,
        "description": "The UUID of the company",
        "example": "COMPANY_UUID"
      },
      {
        "name": "externalPayrollId",
        "schema": "string",
        "required": true,
        "description": "The UUID of the external payroll",
        "example": "EXTERNAL_PAYROLL_ID"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
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
    "url": "/v1/companies/{company_uuid}/external_payrolls/tax_liabilities",
    "method": "getTaxLiabilities",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "External Payrolls",
    "typeScriptTag": "externalPayrolls",
    "description": "Get tax liabilities",
    "parameters": [
      {
        "name": "companyUuid",
        "schema": "string",
        "required": true,
        "description": "The UUID of the company",
        "example": "COMPANY_UUID"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
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
    "url": "/v1/companies/{company_uuid}/external_payrolls/tax_liabilities",
    "method": "updateTaxLiabilities",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "External Payrolls",
    "typeScriptTag": "externalPayrolls",
    "description": "Update tax liabilities",
    "parameters": [
      {
        "name": "companyUuid",
        "schema": "string",
        "required": true,
        "description": "The UUID of the company",
        "example": "COMPANY_UUID"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
      },
      {
        "name": "liability_selections",
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
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": "Unprocessable Entity\n  \nThis may happen when the body of your request contains errors such as `invalid_attribute_value`, or the request fails due to an `invalid_operation`. See the [Errors Categories](https://docs.gusto.com/embedded-payroll/docs/error-categories) guide for more details.\n"
      }
    ]
  },
  {
    "url": "/v1/companies/{company_uuid}/external_payrolls/tax_liabilities/finish",
    "method": "finalizeTaxLiabilities",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "External Payrolls",
    "typeScriptTag": "externalPayrolls",
    "description": "Finalize tax liabilities options and convert into processed payrolls",
    "parameters": [
      {
        "name": "companyUuid",
        "schema": "string",
        "required": true,
        "description": "The UUID of the company",
        "example": "COMPANY_UUID"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "Accepted"
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": "Unprocessable Entity\n  \nThis may happen when the body of your request contains errors such as `invalid_attribute_value`, or the request fails due to an `invalid_operation`. See the [Errors Categories](https://docs.gusto.com/embedded-payroll/docs/error-categories) guide for more details.\n"
      }
    ]
  },
  {
    "url": "/v1/companies/{company_uuid}/payment_configs",
    "method": "getCompanyPaymentConfigs",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Payment Configs",
    "typeScriptTag": "paymentConfigs",
    "description": "Get a company's payment configs",
    "parameters": [
      {
        "name": "companyUuid",
        "schema": "string",
        "required": true,
        "description": "The UUID of the company",
        "example": "COMPANY_UUID"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
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
    "url": "/v1/companies/{company_uuid}/payment_configs",
    "method": "updateCompanyPaymentConfigs",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Payment Configs",
    "typeScriptTag": "paymentConfigs",
    "description": "Update a company's payment configs",
    "parameters": [
      {
        "name": "companyUuid",
        "schema": "string",
        "required": true,
        "description": "The UUID of the company",
        "example": "COMPANY_UUID"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
      },
      {
        "name": "fast_payment_limit",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FAST_PAYMENT_LIMIT"
      },
      {
        "name": "payment_speed",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PAYMENT_SPEED"
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
      },
      {
        "statusCode": "422",
        "description": "Unprocessable Entity\n  \nThis may happen when the body of your request contains errors such as `invalid_attribute_value`, or the request fails due to an `invalid_operation`. See the [Errors Categories](https://docs.gusto.com/embedded-payroll/docs/error-categories) guide for more details.\n"
      }
    ]
  },
  {
    "url": "/v1/companies/{company_id}/pay_schedules",
    "method": "listForCompany",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Pay Schedules",
    "typeScriptTag": "paySchedules",
    "description": "Get the pay schedules for a company",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The UUID of the company",
        "example": "COMPANY_ID"
      },
      {
        "name": "page",
        "schema": "number",
        "description": "The page that is requested. When unspecified, will load all objects unless endpoint forces pagination."
      },
      {
        "name": "per",
        "schema": "number",
        "description": "Number of objects per page. For majority of endpoints will default to 25"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
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
    "url": "/v1/companies/{company_id}/pay_schedules",
    "method": "createNew",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Pay Schedules",
    "typeScriptTag": "paySchedules",
    "description": "Create a new pay schedule",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The UUID of the company",
        "example": "COMPANY_ID"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
      },
      {
        "name": "frequency",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FREQUENCY"
      },
      {
        "name": "anchor_pay_date",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "2020-05-15"
      },
      {
        "name": "anchor_end_of_pay_period",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "2020-05-08"
      },
      {
        "name": "day_1",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "day_2",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "custom_name",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The representation of a pay schedule."
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": "Unprocessable Entity\n  \nThis may happen when the body of your request contains errors such as `invalid_attribute_value`, or the request fails due to an `invalid_operation`. See the [Errors Categories](https://docs.gusto.com/embedded-payroll/docs/error-categories) guide for more details.\n"
      }
    ]
  },
  {
    "url": "/v1/companies/{company_id}/pay_schedules/preview",
    "method": "previewPayScheduleDates",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Pay Schedules",
    "typeScriptTag": "paySchedules",
    "description": "Preview pay schedule dates",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The UUID of the company",
        "example": "COMPANY_ID"
      },
      {
        "name": "frequency",
        "schema": "string",
        "description": "The frequency that employees on this pay schedule are paid with Gusto."
      },
      {
        "name": "anchorPayDate",
        "schema": "string",
        "description": "The first date that employees on this pay schedule are paid with Gusto.",
        "example": "2020-05-15"
      },
      {
        "name": "anchorEndOfPayPeriod",
        "schema": "string",
        "description": "The last date of the first pay period. This can be the same date as the anchor pay date.",
        "example": "2020-05-08"
      },
      {
        "name": "day1",
        "schema": "integer",
        "required": false,
        "description": "An integer between 1 and 31 indicating the first day of the month that employees are paid. This field is only relevant for pay schedules with the “Twice per month” and “Monthly” frequencies. It will be null for pay schedules with other frequencies."
      },
      {
        "name": "day2",
        "schema": "integer",
        "required": false,
        "description": "An integer between 1 and 31 indicating the second day of the month that employees are paid. This field is the second pay date for pay schedules with the \"Twice per month\" frequency. For semi-monthly pay schedules, set this field to 31. For months shorter than 31 days, we will set the second pay date to the last day of the month. It will be null for pay schedules with other frequencies."
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Pay schedule preview"
      }
    ]
  },
  {
    "url": "/v1/companies/{company_id}/pay_schedules/{pay_schedule_id}",
    "method": "getDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Pay Schedules",
    "typeScriptTag": "paySchedules",
    "description": "Get a pay schedule",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The UUID of the company",
        "example": "COMPANY_ID"
      },
      {
        "name": "payScheduleId",
        "schema": "string",
        "required": true,
        "description": "The UUID of the pay schedule",
        "example": "PAY_SCHEDULE_ID"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The representation of a pay schedule."
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/companies/{company_id}/pay_schedules/{pay_schedule_id}",
    "method": "updatePaySchedule",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Pay Schedules",
    "typeScriptTag": "paySchedules",
    "description": "Update a pay schedule",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The UUID of the company",
        "example": "COMPANY_ID"
      },
      {
        "name": "payScheduleId",
        "schema": "string",
        "required": true,
        "description": "The UUID of the pay schedule",
        "example": "PAY_SCHEDULE_ID"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
      },
      {
        "name": "version",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "VERSION"
      },
      {
        "name": "frequency",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "anchor_pay_date",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "2020-05-15"
      },
      {
        "name": "anchor_end_of_pay_period",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "2020-05-08"
      },
      {
        "name": "day_1",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "day_2",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "custom_name",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "auto_pilot",
        "schema": "boolean",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The representation of a pay schedule."
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": "Unprocessable Entity\n  \nThis may happen when the body of your request contains errors such as `invalid_attribute_value`, or the request fails due to an `invalid_operation`. See the [Errors Categories](https://docs.gusto.com/embedded-payroll/docs/error-categories) guide for more details.\n"
      }
    ]
  },
  {
    "url": "/v1/companies/{company_id}/pay_periods",
    "method": "getPayPeriods",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Pay Schedules",
    "typeScriptTag": "paySchedules",
    "description": "Get pay periods for a company",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The UUID of the company",
        "example": "COMPANY_ID"
      },
      {
        "name": "startDate",
        "schema": "string",
        "description": "",
        "example": "2020-01-01"
      },
      {
        "name": "endDate",
        "schema": "string",
        "description": "",
        "example": "2020-01-31"
      },
      {
        "name": "payrollTypes",
        "schema": "string",
        "required": false,
        "description": "regular and/or transition. Multiple options are comma separated. The default is regular pay periods if nothing is passed in."
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
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
    "url": "/v1/companies/{company_id}/pay_periods/unprocessed_termination_pay_periods",
    "method": "getUnprocessedTerminationPayPeriods",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Pay Schedules",
    "typeScriptTag": "paySchedules",
    "description": "Get termination pay periods for a company",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The UUID of the company",
        "example": "COMPANY_ID"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
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
    "url": "/v1/companies/{company_id}/pay_schedules/assignments",
    "method": "getAssignments",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Pay Schedules",
    "typeScriptTag": "paySchedules",
    "description": "Get pay schedule assignments for a company",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The UUID of the company",
        "example": "COMPANY_ID"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The representation of a pay schedule assignment."
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/companies/{company_id}/pay_schedules/assignment_preview",
    "method": "previewAssignmentsForCompany",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Pay Schedules",
    "typeScriptTag": "paySchedules",
    "description": "Preview pay schedule assignments for a company",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The UUID of the company",
        "example": "COMPANY_ID"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
      },
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TYPE"
      },
      {
        "name": "hourly_pay_schedule_uuid",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "salaried_pay_schedule_uuid",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "default_pay_schedule_uuid",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "employees",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "departments",
        "schema": "array",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The representation of a pay schedule assignment preview."
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": "Unprocessable Entity\n  \nThis may happen when the body of your request contains errors such as `invalid_attribute_value`, or the request fails due to an `invalid_operation`. See the [Errors Categories](https://docs.gusto.com/embedded-payroll/docs/error-categories) guide for more details.\n"
      }
    ]
  },
  {
    "url": "/v1/companies/{company_id}/pay_schedules/assign",
    "method": "assignEmployeesToSchedules",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Pay Schedules",
    "typeScriptTag": "paySchedules",
    "description": "Assign pay schedules for a company",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The UUID of the company",
        "example": "COMPANY_ID"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
      },
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TYPE"
      },
      {
        "name": "hourly_pay_schedule_uuid",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "salaried_pay_schedule_uuid",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "default_pay_schedule_uuid",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "employees",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "departments",
        "schema": "array",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "No Content"
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": "Unprocessable Entity\n  \nThis may happen when the body of your request contains errors such as `invalid_attribute_value`, or the request fails due to an `invalid_operation`. See the [Errors Categories](https://docs.gusto.com/embedded-payroll/docs/error-categories) guide for more details.\n"
      }
    ]
  },
  {
    "url": "/v1/companies/{company_id}/employees",
    "method": "listCompanyEmployees",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Employees",
    "typeScriptTag": "employees",
    "description": "Get employees of a company",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The UUID of the company",
        "example": "COMPANY_ID"
      },
      {
        "name": "terminated",
        "schema": "boolean",
        "description": "Filters employees by the provided boolean"
      },
      {
        "name": "include",
        "schema": "string",
        "description": "Include the requested attribute(s) in each employee response, multiple options are comma separated. Available options:\n- all_compensations: Include all effective dated compensations for each job instead of only the current compensation\n- custom_fields: Include employees' custom fields"
      },
      {
        "name": "page",
        "schema": "number",
        "description": "The page that is requested. When unspecified, will load all objects unless endpoint forces pagination."
      },
      {
        "name": "per",
        "schema": "number",
        "description": "Number of objects per page. For majority of endpoints will default to 25"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
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
    "url": "/v1/companies/{company_id}/employees",
    "method": "createEmployee",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Employees",
    "typeScriptTag": "employees",
    "description": "Create an employee",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The UUID of the company",
        "example": "COMPANY_ID"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
      },
      {
        "name": "first_name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FIRST_NAME"
      },
      {
        "name": "middle_initial",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "last_name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "LAST_NAME"
      },
      {
        "name": "date_of_birth",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "email",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "ssn",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "self_onboarding",
        "schema": "boolean",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "The representation of an employee in Gusto."
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": "Unprocessable Entity\n  \nThis may happen when the body of your request contains errors such as `invalid_attribute_value`, or the request fails due to an `invalid_operation`. See the [Errors Categories](https://docs.gusto.com/embedded-payroll/docs/error-categories) guide for more details.\n"
      }
    ]
  },
  {
    "url": "/v1/companies/{company_uuid}/departments",
    "method": "getAllWithEmployees",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Departments",
    "typeScriptTag": "departments",
    "description": "Get all departments of a company",
    "parameters": [
      {
        "name": "companyUuid",
        "schema": "string",
        "required": true,
        "description": "The UUID of the company",
        "example": "COMPANY_UUID"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
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
    "url": "/v1/companies/{company_uuid}/departments",
    "method": "createDepartment",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Departments",
    "typeScriptTag": "departments",
    "description": "Create a department",
    "parameters": [
      {
        "name": "companyUuid",
        "schema": "string",
        "required": true,
        "description": "The UUID of the company",
        "example": "COMPANY_UUID"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
      },
      {
        "name": "title",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": "Unprocessable Entity\n  \nThis may happen when the body of your request contains errors such as `invalid_attribute_value`, or the request fails due to an `invalid_operation`. See the [Errors Categories](https://docs.gusto.com/embedded-payroll/docs/error-categories) guide for more details.\n"
      }
    ]
  },
  {
    "url": "/v1/departments/{department_uuid}",
    "method": "deleteDepartment",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Departments",
    "typeScriptTag": "departments",
    "description": "Delete a department",
    "parameters": [
      {
        "name": "departmentUuid",
        "schema": "string",
        "required": true,
        "description": "The UUID of the department",
        "example": "DEPARTMENT_UUID"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": "Unprocessable Entity\n  \nThis may happen when the body of your request contains errors such as `invalid_attribute_value`, or the request fails due to an `invalid_operation`. See the [Errors Categories](https://docs.gusto.com/embedded-payroll/docs/error-categories) guide for more details.\n"
      }
    ]
  },
  {
    "url": "/v1/departments/{department_uuid}",
    "method": "getDepartmentByUuid",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Departments",
    "typeScriptTag": "departments",
    "description": "Get a department",
    "parameters": [
      {
        "name": "departmentUuid",
        "schema": "string",
        "required": true,
        "description": "The UUID of the department",
        "example": "DEPARTMENT_UUID"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
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
    "url": "/v1/departments/{department_uuid}",
    "method": "updateDepartment",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Departments",
    "typeScriptTag": "departments",
    "description": "Update a department",
    "parameters": [
      {
        "name": "departmentUuid",
        "schema": "string",
        "required": true,
        "description": "The UUID of the department",
        "example": "DEPARTMENT_UUID"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
      },
      {
        "name": "title",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "version",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "VERSION"
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
      },
      {
        "statusCode": "422",
        "description": "Unprocessable Entity\n  \nThis may happen when the body of your request contains errors such as `invalid_attribute_value`, or the request fails due to an `invalid_operation`. See the [Errors Categories](https://docs.gusto.com/embedded-payroll/docs/error-categories) guide for more details.\n"
      }
    ]
  },
  {
    "url": "/v1/departments/{department_uuid}/add",
    "method": "addPeopleToDepartment",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Departments",
    "typeScriptTag": "departments",
    "description": "Add people to a department",
    "parameters": [
      {
        "name": "departmentUuid",
        "schema": "string",
        "required": true,
        "description": "The UUID of the department",
        "example": "DEPARTMENT_UUID"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
      },
      {
        "name": "version",
        "schema": "string",
        "description": ""
      },
      {
        "name": "employees",
        "schema": "array",
        "description": ""
      },
      {
        "name": "contractors",
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/departments/{department_uuid}/remove",
    "method": "removePeopleFromDepartment",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Departments",
    "typeScriptTag": "departments",
    "description": "Remove people from a department",
    "parameters": [
      {
        "name": "departmentUuid",
        "schema": "string",
        "required": true,
        "description": "The UUID of the department",
        "example": "DEPARTMENT_UUID"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
      },
      {
        "name": "version",
        "schema": "string",
        "description": ""
      },
      {
        "name": "employees",
        "schema": "array",
        "description": ""
      },
      {
        "name": "contractors",
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/employees/{employee_id}",
    "method": "deleteOnboardingEmployee",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Employees",
    "typeScriptTag": "employees",
    "description": "Delete an onboarding employee",
    "parameters": [
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "The UUID of the employee",
        "example": "EMPLOYEE_ID"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/employees/{employee_id}",
    "method": "getEmployeeById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Employees",
    "typeScriptTag": "employees",
    "description": "Get an employee",
    "parameters": [
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "The UUID of the employee",
        "example": "EMPLOYEE_ID"
      },
      {
        "name": "include",
        "schema": "string",
        "description": "Include the requested attribute(s) in each employee response, multiple options are comma separated. Available options:\n- all_compensations: Include all effective dated compensations for each job instead of only the current compensation\n- custom_fields: Include employees' custom fields"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The representation of an employee in Gusto."
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/employees/{employee_id}",
    "method": "updateEmployee",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Employees",
    "typeScriptTag": "employees",
    "description": "Update an employee",
    "parameters": [
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "The UUID of the employee",
        "example": "EMPLOYEE_ID"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
      },
      {
        "name": "version",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "VERSION"
      },
      {
        "name": "first_name",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "middle_initial",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "last_name",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "date_of_birth",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "email",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "ssn",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "two_percent_shareholder",
        "schema": "boolean",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The representation of an employee in Gusto."
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": "Unprocessable Entity\n  \nThis may happen when the body of your request contains errors such as `invalid_attribute_value`, or the request fails due to an `invalid_operation`. See the [Errors Categories](https://docs.gusto.com/embedded-payroll/docs/error-categories) guide for more details.\n"
      }
    ]
  },
  {
    "url": "/v1/employees/{employee_id}/terminations",
    "method": "deleteTermination",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Employee Employments",
    "typeScriptTag": "employeeEmployments",
    "description": "Delete an employee termination",
    "parameters": [
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "The UUID of the employee",
        "example": "EMPLOYEE_ID"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
      },
      {
        "statusCode": "404",
        "description": "Unprocessable Entity\n  \nThis may happen when the body of your request contains errors such as `invalid_attribute_value`, or the request fails due to an `invalid_operation`. See the [Errors Categories](https://docs.gusto.com/embedded-payroll/docs/error-categories) guide for more details.\n"
      }
    ]
  },
  {
    "url": "/v1/employees/{employee_id}/terminations",
    "method": "listEmployeeTerminations",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Employee Employments",
    "typeScriptTag": "employeeEmployments",
    "description": "Get terminations for an employee",
    "parameters": [
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "The UUID of the employee",
        "example": "EMPLOYEE_ID"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
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
    "url": "/v1/employees/{employee_id}/terminations",
    "method": "createTermination",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Employee Employments",
    "typeScriptTag": "employeeEmployments",
    "description": "Create an employee termination",
    "parameters": [
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "The UUID of the employee",
        "example": "EMPLOYEE_ID"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
      },
      {
        "name": "effective_date",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EFFECTIVE_DATE"
      },
      {
        "name": "run_termination_payroll",
        "schema": "boolean",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "The representation of a termination in Gusto."
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": "Unprocessable Entity\n  \nThis may happen when the body of your request contains errors such as `invalid_attribute_value`, or the request fails due to an `invalid_operation`. See the [Errors Categories](https://docs.gusto.com/embedded-payroll/docs/error-categories) guide for more details.\n"
      }
    ]
  },
  {
    "url": "/v1/terminations/{employee_id}",
    "method": "updateTermination",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Employee Employments",
    "typeScriptTag": "employeeEmployments",
    "description": "Update an employee termination",
    "parameters": [
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "The UUID of the employee",
        "example": "EMPLOYEE_ID"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The representation of a termination in Gusto."
      },
      {
        "statusCode": "404",
        "description": "Unprocessable Entity\n  \nThis may happen when the body of your request contains errors such as `invalid_attribute_value`, or the request fails due to an `invalid_operation`. See the [Errors Categories](https://docs.gusto.com/embedded-payroll/docs/error-categories) guide for more details.\n"
      },
      {
        "statusCode": "422",
        "description": "Unprocessable Entity\n  \nThis may happen when the body of your request contains errors such as `invalid_attribute_value`, or the request fails due to an `invalid_operation`. See the [Errors Categories](https://docs.gusto.com/embedded-payroll/docs/error-categories) guide for more details.\n"
      }
    ]
  },
  {
    "url": "/v1/employees/{employee_id}/rehire",
    "method": "removeRehire",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Employee Employments",
    "typeScriptTag": "employeeEmployments",
    "description": "Delete an employee rehire",
    "parameters": [
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "The UUID of the employee",
        "example": "EMPLOYEE_ID"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
      },
      {
        "statusCode": "404",
        "description": "Unprocessable Entity\n  \nThis may happen when the body of your request contains errors such as `invalid_attribute_value`, or the request fails due to an `invalid_operation`. See the [Errors Categories](https://docs.gusto.com/embedded-payroll/docs/error-categories) guide for more details.\n"
      }
    ]
  },
  {
    "url": "/v1/employees/{employee_id}/rehire",
    "method": "getRehire",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Employee Employments",
    "typeScriptTag": "employeeEmployments",
    "description": "Get an employee rehire",
    "parameters": [
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "The UUID of the employee",
        "example": "EMPLOYEE_ID"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Unprocessable Entity\n  \nThis may happen when the body of your request contains errors such as `invalid_attribute_value`, or the request fails due to an `invalid_operation`. See the [Errors Categories](https://docs.gusto.com/embedded-payroll/docs/error-categories) guide for more details.\n"
      }
    ]
  },
  {
    "url": "/v1/employees/{employee_id}/rehire",
    "method": "createRehire",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Employee Employments",
    "typeScriptTag": "employeeEmployments",
    "description": "Create an employee rehire",
    "parameters": [
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "The UUID of the employee",
        "example": "EMPLOYEE_ID"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
      },
      {
        "name": "effective_date",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EFFECTIVE_DATE"
      },
      {
        "name": "file_new_hire_report",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "work_location_uuid",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "WORK_LOCATION_UUID"
      },
      {
        "name": "employment_status",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "two_percent_shareholder",
        "schema": "boolean",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": "Unprocessable Entity\n  \nThis may happen when the body of your request contains errors such as `invalid_attribute_value`, or the request fails due to an `invalid_operation`. See the [Errors Categories](https://docs.gusto.com/embedded-payroll/docs/error-categories) guide for more details.\n"
      }
    ]
  },
  {
    "url": "/v1/employees/{employee_id}/rehire",
    "method": "updateRehire",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Employee Employments",
    "typeScriptTag": "employeeEmployments",
    "description": "Update an employee rehire",
    "parameters": [
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "The UUID of the employee",
        "example": "EMPLOYEE_ID"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Unprocessable Entity\n  \nThis may happen when the body of your request contains errors such as `invalid_attribute_value`, or the request fails due to an `invalid_operation`. See the [Errors Categories](https://docs.gusto.com/embedded-payroll/docs/error-categories) guide for more details.\n"
      },
      {
        "statusCode": "422",
        "description": "Unprocessable Entity\n  \nThis may happen when the body of your request contains errors such as `invalid_attribute_value`, or the request fails due to an `invalid_operation`. See the [Errors Categories](https://docs.gusto.com/embedded-payroll/docs/error-categories) guide for more details.\n"
      }
    ]
  },
  {
    "url": "/v1/employees/{employee_id}/employment_history",
    "method": "getHistory",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Employee Employments",
    "typeScriptTag": "employeeEmployments",
    "description": "Get employment history for an employee",
    "parameters": [
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "The UUID of the employee",
        "example": "EMPLOYEE_ID"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
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
    "url": "/v1/employees/{employee_id}/home_addresses",
    "method": "getHomeAddresses",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Employee Addresses",
    "typeScriptTag": "employeeAddresses",
    "description": "Get an employee's home addresses",
    "parameters": [
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "The UUID of the employee",
        "example": "EMPLOYEE_ID"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
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
    "url": "/v1/employees/{employee_id}/home_addresses",
    "method": "createHomeAddress",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Employee Addresses",
    "typeScriptTag": "employeeAddresses",
    "description": "Create an employee's home address",
    "parameters": [
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "The UUID of the employee",
        "example": "EMPLOYEE_ID"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
      },
      {
        "name": "street_1",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "street_2",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "city",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "state",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "zip",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "effective_date",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "courtesy_withholding",
        "schema": "boolean",
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
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": "Unprocessable Entity\n  \nThis may happen when the body of your request contains errors such as `invalid_attribute_value`, or the request fails due to an `invalid_operation`. See the [Errors Categories](https://docs.gusto.com/embedded-payroll/docs/error-categories) guide for more details.\n"
      }
    ]
  },
  {
    "url": "/v1/home_addresses/{home_address_uuid}",
    "method": "deleteHome",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Employee Addresses",
    "typeScriptTag": "employeeAddresses",
    "description": "Delete an employee's home address",
    "parameters": [
      {
        "name": "homeAddressUuid",
        "schema": "string",
        "required": true,
        "description": "The UUID of the home address",
        "example": "HOME_ADDRESS_UUID"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": "Unprocessable Entity\n  \nThis may happen when the body of your request contains errors such as `invalid_attribute_value`, or the request fails due to an `invalid_operation`. See the [Errors Categories](https://docs.gusto.com/embedded-payroll/docs/error-categories) guide for more details.\n"
      }
    ]
  },
  {
    "url": "/v1/home_addresses/{home_address_uuid}",
    "method": "getHomeAddress",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Employee Addresses",
    "typeScriptTag": "employeeAddresses",
    "description": "Get an employee's home address",
    "parameters": [
      {
        "name": "homeAddressUuid",
        "schema": "string",
        "required": true,
        "description": "The UUID of the home address",
        "example": "HOME_ADDRESS_UUID"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
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
    "url": "/v1/home_addresses/{home_address_uuid}",
    "method": "updateHomeAddress",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Employee Addresses",
    "typeScriptTag": "employeeAddresses",
    "description": "Update an employee's home address",
    "parameters": [
      {
        "name": "homeAddressUuid",
        "schema": "string",
        "required": true,
        "description": "The UUID of the home address",
        "example": "HOME_ADDRESS_UUID"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
      },
      {
        "name": "version",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "VERSION"
      },
      {
        "name": "street_1",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "street_2",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "city",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "state",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "zip",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "effective_date",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "courtesy_withholding",
        "schema": "boolean",
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
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": "Unprocessable Entity\n  \nThis may happen when the body of your request contains errors such as `invalid_attribute_value`, or the request fails due to an `invalid_operation`. See the [Errors Categories](https://docs.gusto.com/embedded-payroll/docs/error-categories) guide for more details.\n"
      }
    ]
  },
  {
    "url": "/v1/employees/{employee_id}/work_addresses",
    "method": "listWorkAddresses",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Employee Addresses",
    "typeScriptTag": "employeeAddresses",
    "description": "Get an employee's work addresses",
    "parameters": [
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "The UUID of the employee",
        "example": "EMPLOYEE_ID"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
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
    "url": "/v1/employees/{employee_id}/work_addresses",
    "method": "createWorkAddress",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Employee Addresses",
    "typeScriptTag": "employeeAddresses",
    "description": "Create an employee work address",
    "parameters": [
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "The UUID of the employee",
        "example": "EMPLOYEE_ID"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
      },
      {
        "name": "location_uuid",
        "schema": "string",
        "description": ""
      },
      {
        "name": "effective_date",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": "Unprocessable Entity\n  \nThis may happen when the body of your request contains errors such as `invalid_attribute_value`, or the request fails due to an `invalid_operation`. See the [Errors Categories](https://docs.gusto.com/embedded-payroll/docs/error-categories) guide for more details.\n"
      }
    ]
  },
  {
    "url": "/v1/work_addresses/{work_address_uuid}",
    "method": "deleteWorkAddress",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Employee Addresses",
    "typeScriptTag": "employeeAddresses",
    "description": "Delete an employee's work address",
    "parameters": [
      {
        "name": "workAddressUuid",
        "schema": "string",
        "required": true,
        "description": "The UUID of the work address",
        "example": "WORK_ADDRESS_UUID"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": "Unprocessable Entity\n  \nThis may happen when the body of your request contains errors such as `invalid_attribute_value`, or the request fails due to an `invalid_operation`. See the [Errors Categories](https://docs.gusto.com/embedded-payroll/docs/error-categories) guide for more details.\n"
      }
    ]
  },
  {
    "url": "/v1/work_addresses/{work_address_uuid}",
    "method": "getWorkAddress",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Employee Addresses",
    "typeScriptTag": "employeeAddresses",
    "description": "Get an employee work address",
    "parameters": [
      {
        "name": "workAddressUuid",
        "schema": "string",
        "required": true,
        "description": "The UUID of the work address",
        "example": "WORK_ADDRESS_UUID"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
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
    "url": "/v1/work_addresses/{work_address_uuid}",
    "method": "updateWorkAddress",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Employee Addresses",
    "typeScriptTag": "employeeAddresses",
    "description": "Update an employee work address",
    "parameters": [
      {
        "name": "workAddressUuid",
        "schema": "string",
        "required": true,
        "description": "The UUID of the work address",
        "example": "WORK_ADDRESS_UUID"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
      },
      {
        "name": "version",
        "schema": "string",
        "description": ""
      },
      {
        "name": "location_uuid",
        "schema": "string",
        "description": ""
      },
      {
        "name": "effective_date",
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
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": "Unprocessable Entity\n  \nThis may happen when the body of your request contains errors such as `invalid_attribute_value`, or the request fails due to an `invalid_operation`. See the [Errors Categories](https://docs.gusto.com/embedded-payroll/docs/error-categories) guide for more details.\n"
      }
    ]
  },
  {
    "url": "/v1/employees/{employee_id}/custom_fields",
    "method": "getCustomFields",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Employees",
    "typeScriptTag": "employees",
    "description": "Get an employee's custom fields",
    "parameters": [
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "The UUID of the employee",
        "example": "EMPLOYEE_ID"
      },
      {
        "name": "page",
        "schema": "number",
        "description": "The page that is requested. When unspecified, will load all objects unless endpoint forces pagination."
      },
      {
        "name": "per",
        "schema": "number",
        "description": "Number of objects per page. For majority of endpoints will default to 25"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
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
    "url": "/v1/employees/{employee_id}/onboarding_status",
    "method": "getOnboardingStatus",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Employees",
    "typeScriptTag": "employees",
    "description": "Get the employee's onboarding status",
    "parameters": [
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "The UUID of the employee",
        "example": "EMPLOYEE_ID"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The representation of an employee's onboarding status."
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/employees/{employee_id}/onboarding_status",
    "method": "updateOnboardingStatus",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Employees",
    "typeScriptTag": "employees",
    "description": "Update the employee's onboarding status",
    "parameters": [
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "The UUID of the employee",
        "example": "EMPLOYEE_ID"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
      },
      {
        "name": "onboarding_status",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ONBOARDING_STATUS"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The representation of an employee's onboarding status."
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": "Unprocessable Entity\n  \nThis may happen when the body of your request contains errors such as `invalid_attribute_value`, or the request fails due to an `invalid_operation`. See the [Errors Categories](https://docs.gusto.com/embedded-payroll/docs/error-categories) guide for more details.\n"
      }
    ]
  },
  {
    "url": "/v1/employees/{employee_id}/finish_onboarding",
    "method": "completeOnboarding",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Employees",
    "typeScriptTag": "employees",
    "description": "Finish onboarding an employee",
    "parameters": [
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "The UUID of the employee",
        "example": "EMPLOYEE_ID"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The representation of an employee in Gusto."
      }
    ]
  },
  {
    "url": "/v1/employees/{employee_uuid}/federal_taxes",
    "method": "getFederalTaxesById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Employee Tax Setup",
    "typeScriptTag": "employeeTaxSetup",
    "description": "Get an employee's federal taxes",
    "parameters": [
      {
        "name": "employeeUuid",
        "schema": "string",
        "required": true,
        "description": "The UUID of the employee",
        "example": "EMPLOYEE_UUID"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
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
    "url": "/v1/employees/{employee_uuid}/federal_taxes",
    "method": "updateFederalTaxes",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Employee Tax Setup",
    "typeScriptTag": "employeeTaxSetup",
    "description": "Update an employee's federal taxes",
    "parameters": [
      {
        "name": "employeeUuid",
        "schema": "string",
        "required": true,
        "description": "The UUID of the employee",
        "example": "EMPLOYEE_UUID"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
      },
      {
        "name": "version",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "VERSION"
      },
      {
        "name": "filing_status",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "extra_withholding",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "two_jobs",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "dependents_amount",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "other_income",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "deductions",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "w4_data_type",
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
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": "Unprocessable Entity\n  \nThis may happen when the body of your request contains errors such as `invalid_attribute_value`, or the request fails due to an `invalid_operation`. See the [Errors Categories](https://docs.gusto.com/embedded-payroll/docs/error-categories) guide for more details.\n"
      }
    ]
  },
  {
    "url": "/v1/employees/{employee_uuid}/state_taxes",
    "method": "getStateTaxes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Employee Tax Setup",
    "typeScriptTag": "employeeTaxSetup",
    "description": "Get an employee's state taxes",
    "parameters": [
      {
        "name": "employeeUuid",
        "schema": "string",
        "required": true,
        "description": "The UUID of the employee",
        "example": "EMPLOYEE_UUID"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
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
    "url": "/v1/employees/{employee_uuid}/state_taxes",
    "method": "updateStateTaxes",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Employee Tax Setup",
    "typeScriptTag": "employeeTaxSetup",
    "description": "Update an employee's state taxes",
    "parameters": [
      {
        "name": "employeeUuid",
        "schema": "string",
        "required": true,
        "description": "The UUID of the employee",
        "example": "EMPLOYEE_UUID"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
      },
      {
        "name": "states",
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
    "url": "/v1/employees/{employee_id}/bank_accounts",
    "method": "listBankAccounts",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Employee Payment Method",
    "typeScriptTag": "employeePaymentMethod",
    "description": "Get all employee bank accounts",
    "parameters": [
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "The UUID of the employee",
        "example": "EMPLOYEE_ID"
      },
      {
        "name": "page",
        "schema": "number",
        "description": "The page that is requested. When unspecified, will load all objects unless endpoint forces pagination."
      },
      {
        "name": "per",
        "schema": "number",
        "description": "Number of objects per page. For majority of endpoints will default to 25"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
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
    "url": "/v1/employees/{employee_id}/bank_accounts",
    "method": "createBankAccount",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Employee Payment Method",
    "typeScriptTag": "employeePaymentMethod",
    "description": "Create an employee bank account",
    "parameters": [
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "The UUID of the employee",
        "example": "EMPLOYEE_ID"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "routing_number",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ROUTING_NUMBER"
      },
      {
        "name": "account_number",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACCOUNT_NUMBER"
      },
      {
        "name": "account_type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACCOUNT_TYPE"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": "Unprocessable Entity\n  \nThis may happen when the body of your request contains errors such as `invalid_attribute_value`, or the request fails due to an `invalid_operation`. See the [Errors Categories](https://docs.gusto.com/embedded-payroll/docs/error-categories) guide for more details.\n"
      }
    ]
  },
  {
    "url": "/v1/employees/{employee_id}/bank_accounts/{bank_account_uuid}",
    "method": "deleteBankAccount",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Employee Payment Method",
    "typeScriptTag": "employeePaymentMethod",
    "description": "Delete an employee bank account",
    "parameters": [
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "The UUID of the employee",
        "example": "EMPLOYEE_ID"
      },
      {
        "name": "bankAccountUuid",
        "schema": "string",
        "required": true,
        "description": "The UUID of the bank account",
        "example": "BANK_ACCOUNT_UUID"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/employees/{employee_id}/payment_method",
    "method": "getBankAccounts",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Employee Payment Method",
    "typeScriptTag": "employeePaymentMethod",
    "description": "Get an employee's payment method",
    "parameters": [
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "The UUID of the employee",
        "example": "EMPLOYEE_ID"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
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
    "url": "/v1/employees/{employee_id}/payment_method",
    "method": "updatePaymentMethod",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Employee Payment Method",
    "typeScriptTag": "employeePaymentMethod",
    "description": "Update an employee's payment method",
    "parameters": [
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "The UUID of the employee",
        "example": "EMPLOYEE_ID"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
      },
      {
        "name": "version",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "VERSION"
      },
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TYPE"
      },
      {
        "name": "split_by",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "splits",
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
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": "Unprocessable Entity\n  \nThis may happen when the body of your request contains errors such as `invalid_attribute_value`, or the request fails due to an `invalid_operation`. See the [Errors Categories](https://docs.gusto.com/embedded-payroll/docs/error-categories) guide for more details.\n"
      }
    ]
  },
  {
    "url": "/v1/employees/{employee_id}/jobs",
    "method": "getEmployeeJobs",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Jobs and Compensations",
    "typeScriptTag": "jobsAndCompensations",
    "description": "Get jobs for an employee",
    "parameters": [
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "The UUID of the employee",
        "example": "EMPLOYEE_ID"
      },
      {
        "name": "page",
        "schema": "number",
        "description": "The page that is requested. When unspecified, will load all objects unless endpoint forces pagination."
      },
      {
        "name": "per",
        "schema": "number",
        "description": "Number of objects per page. For majority of endpoints will default to 25"
      },
      {
        "name": "include",
        "schema": "string",
        "description": "Available options:\n- all_compensations: Include all effective dated compensations for each job instead of only the current compensation"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
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
    "url": "/v1/employees/{employee_id}/jobs",
    "method": "createJob",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Jobs and Compensations",
    "typeScriptTag": "jobsAndCompensations",
    "description": "Create a job",
    "parameters": [
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "The UUID of the employee",
        "example": "EMPLOYEE_ID"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
      },
      {
        "name": "title",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TITLE"
      },
      {
        "name": "hire_date",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "HIRE_DATE"
      },
      {
        "name": "two_percent_shareholder",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "state_wc_covered",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "state_wc_class_code",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "The representation of a job in Gusto."
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": "Unprocessable Entity\n  \nThis may happen when the body of your request contains errors such as `invalid_attribute_value`, or the request fails due to an `invalid_operation`. See the [Errors Categories](https://docs.gusto.com/embedded-payroll/docs/error-categories) guide for more details.\n"
      }
    ]
  },
  {
    "url": "/v1/employees/{employee_uuid}/time_off_activities",
    "method": "getTimeOffActivities",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Employees",
    "typeScriptTag": "employees",
    "description": "Get employee time off activities",
    "parameters": [
      {
        "name": "employeeUuid",
        "schema": "string",
        "required": true,
        "description": "The UUID of the employee",
        "example": "EMPLOYEE_UUID"
      },
      {
        "name": "timeOffType",
        "schema": "string",
        "required": true,
        "description": "The time off type name you want to query data for. ex: 'sick' or 'vacation'",
        "example": "TIME_OFF_TYPE"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Representation of a Time Off Activity"
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/jobs/{job_id}",
    "method": "deleteJobById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Jobs and Compensations",
    "typeScriptTag": "jobsAndCompensations",
    "description": "Delete an individual job",
    "parameters": [
      {
        "name": "jobId",
        "schema": "string",
        "required": true,
        "description": "The UUID of the job",
        "example": "JOB_ID"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/jobs/{job_id}",
    "method": "getJobDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Jobs and Compensations",
    "typeScriptTag": "jobsAndCompensations",
    "description": "Get a job",
    "parameters": [
      {
        "name": "jobId",
        "schema": "string",
        "required": true,
        "description": "The UUID of the job",
        "example": "JOB_ID"
      },
      {
        "name": "include",
        "schema": "string",
        "description": "Available options:\n- all_compensations: Include all effective dated compensations for the job instead of only the current compensation"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The representation of a job in Gusto."
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/jobs/{job_id}",
    "method": "updateJob",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Jobs and Compensations",
    "typeScriptTag": "jobsAndCompensations",
    "description": "Update a job",
    "parameters": [
      {
        "name": "jobId",
        "schema": "string",
        "required": true,
        "description": "The UUID of the job",
        "example": "JOB_ID"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
      },
      {
        "name": "title",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "version",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "VERSION"
      },
      {
        "name": "hire_date",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "two_percent_shareholder",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "state_wc_covered",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "state_wc_class_code",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The representation of a job in Gusto."
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": "Unprocessable Entity\n  \nThis may happen when the body of your request contains errors such as `invalid_attribute_value`, or the request fails due to an `invalid_operation`. See the [Errors Categories](https://docs.gusto.com/embedded-payroll/docs/error-categories) guide for more details.\n"
      }
    ]
  },
  {
    "url": "/v1/jobs/{job_id}/compensations",
    "method": "getJobCompensations",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Jobs and Compensations",
    "typeScriptTag": "jobsAndCompensations",
    "description": "Get compensations for a job",
    "parameters": [
      {
        "name": "jobId",
        "schema": "string",
        "required": true,
        "description": "The UUID of the job",
        "example": "JOB_ID"
      },
      {
        "name": "page",
        "schema": "number",
        "description": "The page that is requested. When unspecified, will load all objects unless endpoint forces pagination."
      },
      {
        "name": "per",
        "schema": "number",
        "description": "Number of objects per page. For majority of endpoints will default to 25"
      },
      {
        "name": "include",
        "schema": "string",
        "description": "Available options:\n- all_compensations: Include all effective dated compensations for each job instead of only the current compensation"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
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
    "url": "/v1/jobs/{job_id}/compensations",
    "method": "createCompensation",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Jobs and Compensations",
    "typeScriptTag": "jobsAndCompensations",
    "description": "Create a compensation",
    "parameters": [
      {
        "name": "jobId",
        "schema": "string",
        "required": true,
        "description": "The UUID of the job",
        "example": "JOB_ID"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
      },
      {
        "name": "rate",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "payment_unit",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PAYMENT_UNIT"
      },
      {
        "name": "effective_date",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "flsa_status",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FLSA_STATUS"
      },
      {
        "name": "adjust_for_minimum_wage",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "minimum_wages",
        "schema": "array",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "The representation of compensation in Gusto."
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": "Unprocessable Entity\n  \nThis may happen when the body of your request contains errors such as `invalid_attribute_value`, or the request fails due to an `invalid_operation`. See the [Errors Categories](https://docs.gusto.com/embedded-payroll/docs/error-categories) guide for more details.\n"
      }
    ]
  },
  {
    "url": "/v1/compensations/{compensation_id}",
    "method": "removeCompensation",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Jobs and Compensations",
    "typeScriptTag": "jobsAndCompensations",
    "description": "Delete a compensation",
    "parameters": [
      {
        "name": "compensationId",
        "schema": "string",
        "required": true,
        "description": "The UUID of the compensation",
        "example": "COMPENSATION_ID"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/compensations/{compensation_id}",
    "method": "getCompensationById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Jobs and Compensations",
    "typeScriptTag": "jobsAndCompensations",
    "description": "Get a compensation",
    "parameters": [
      {
        "name": "compensationId",
        "schema": "string",
        "required": true,
        "description": "The UUID of the compensation",
        "example": "COMPENSATION_ID"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The representation of compensation in Gusto."
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/compensations/{compensation_id}",
    "method": "updateCompensation",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Jobs and Compensations",
    "typeScriptTag": "jobsAndCompensations",
    "description": "Update a compensation",
    "parameters": [
      {
        "name": "compensationId",
        "schema": "string",
        "required": true,
        "description": "The UUID of the compensation",
        "example": "COMPENSATION_ID"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
      },
      {
        "name": "version",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "VERSION"
      },
      {
        "name": "rate",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "payment_unit",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "flsa_status",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "adjust_for_minimum_wage",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "minimum_wages",
        "schema": "array",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The representation of compensation in Gusto."
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": "Unprocessable Entity\n  \nThis may happen when the body of your request contains errors such as `invalid_attribute_value`, or the request fails due to an `invalid_operation`. See the [Errors Categories](https://docs.gusto.com/embedded-payroll/docs/error-categories) guide for more details.\n"
      }
    ]
  },
  {
    "url": "/v1/companies/{company_id}/earning_types",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Earning Types",
    "typeScriptTag": "earningTypes",
    "description": "Get all earning types for a company",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The UUID of the company",
        "example": "COMPANY_ID"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
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
    "url": "/v1/companies/{company_id}/earning_types",
    "method": "createCustomEarningType",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Earning Types",
    "typeScriptTag": "earningTypes",
    "description": "Create a custom earning type",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The UUID of the company",
        "example": "COMPANY_ID"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": "Unprocessable Entity\n  \nThis may happen when the body of your request contains errors such as `invalid_attribute_value`, or the request fails due to an `invalid_operation`. See the [Errors Categories](https://docs.gusto.com/embedded-payroll/docs/error-categories) guide for more details.\n"
      }
    ]
  },
  {
    "url": "/v1/companies/{company_id}/earning_types/{earning_type_uuid}",
    "method": "deactivateType",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Earning Types",
    "typeScriptTag": "earningTypes",
    "description": "Deactivate an earning type",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The UUID of the company",
        "example": "COMPANY_ID"
      },
      {
        "name": "earningTypeUuid",
        "schema": "string",
        "required": true,
        "description": "The UUID of the earning type",
        "example": "EARNING_TYPE_UUID"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/companies/{company_id}/earning_types/{earning_type_uuid}",
    "method": "updateType",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Earning Types",
    "typeScriptTag": "earningTypes",
    "description": "Update an earning type",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The UUID of the company",
        "example": "COMPANY_ID"
      },
      {
        "name": "earningTypeUuid",
        "schema": "string",
        "required": true,
        "description": "The UUID of the earning type",
        "example": "EARNING_TYPE_UUID"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
      },
      {
        "name": "name",
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
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": "Unprocessable Entity\n  \nThis may happen when the body of your request contains errors such as `invalid_attribute_value`, or the request fails due to an `invalid_operation`. See the [Errors Categories](https://docs.gusto.com/embedded-payroll/docs/error-categories) guide for more details.\n"
      }
    ]
  },
  {
    "url": "/v1/companies/{company_id}/contractors",
    "method": "getCompanyContractors",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Contractors",
    "typeScriptTag": "contractors",
    "description": "Get contractors of a company",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The UUID of the company",
        "example": "COMPANY_ID"
      },
      {
        "name": "page",
        "schema": "number",
        "description": "The page that is requested. When unspecified, will load all objects unless endpoint forces pagination."
      },
      {
        "name": "per",
        "schema": "number",
        "description": "Number of objects per page. For majority of endpoints will default to 25"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
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
    "url": "/v1/companies/{company_id}/contractors",
    "method": "createNewContractor",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Contractors",
    "typeScriptTag": "contractors",
    "description": "Create a contractor",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The UUID of the company",
        "example": "COMPANY_ID"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "The representation of a contractor (individual or business) in Gusto."
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": "Unprocessable Entity\n  \nThis may happen when the body of your request contains errors such as `invalid_attribute_value`, or the request fails due to an `invalid_operation`. See the [Errors Categories](https://docs.gusto.com/embedded-payroll/docs/error-categories) guide for more details.\n"
      }
    ]
  },
  {
    "url": "/v1/contractors/{contractor_id}",
    "method": "deleteContractor",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Contractors",
    "typeScriptTag": "contractors",
    "description": "Delete a contractor",
    "parameters": [
      {
        "name": "contractorId",
        "schema": "string",
        "required": true,
        "description": "The UUID of the contractor",
        "example": "CONTRACTOR_ID"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/contractors/{contractor_id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Contractors",
    "typeScriptTag": "contractors",
    "description": "Get a contractor",
    "parameters": [
      {
        "name": "contractorId",
        "schema": "string",
        "required": true,
        "description": "The UUID of the contractor",
        "example": "CONTRACTOR_ID"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The representation of a contractor (individual or business) in Gusto."
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/contractors/{contractor_id}",
    "method": "updateContractor",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Contractors",
    "typeScriptTag": "contractors",
    "description": "Update a contractor",
    "parameters": [
      {
        "name": "contractorId",
        "schema": "string",
        "required": true,
        "description": "The UUID of the contractor",
        "example": "CONTRACTOR_ID"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The representation of a contractor (individual or business) in Gusto."
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": "Unprocessable Entity\n  \nThis may happen when the body of your request contains errors such as `invalid_attribute_value`, or the request fails due to an `invalid_operation`. See the [Errors Categories](https://docs.gusto.com/embedded-payroll/docs/error-categories) guide for more details.\n"
      }
    ]
  },
  {
    "url": "/v1/contractors/{contractor_uuid}/bank_accounts",
    "method": "listBankAccounts",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Contractor Payment Method",
    "typeScriptTag": "contractorPaymentMethod",
    "description": "Get all contractor bank accounts",
    "parameters": [
      {
        "name": "contractorUuid",
        "schema": "string",
        "required": true,
        "description": "The UUID of the contractor",
        "example": "CONTRACTOR_UUID"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
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
    "url": "/v1/contractors/{contractor_uuid}/bank_accounts",
    "method": "createBankAccount",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Contractor Payment Method",
    "typeScriptTag": "contractorPaymentMethod",
    "description": "Create an contractor bank account",
    "parameters": [
      {
        "name": "contractorUuid",
        "schema": "string",
        "required": true,
        "description": "The UUID of the contractor",
        "example": "CONTRACTOR_UUID"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "routing_number",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ROUTING_NUMBER"
      },
      {
        "name": "account_number",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACCOUNT_NUMBER"
      },
      {
        "name": "account_type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACCOUNT_TYPE"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": "Unprocessable Entity\n  \nThis may happen when the body of your request contains errors such as `invalid_attribute_value`, or the request fails due to an `invalid_operation`. See the [Errors Categories](https://docs.gusto.com/embedded-payroll/docs/error-categories) guide for more details.\n"
      }
    ]
  },
  {
    "url": "/v1/webhook_subscriptions",
    "method": "listSubscriptions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Webhooks",
    "typeScriptTag": "webhooks",
    "description": "List webhook subscriptions",
    "parameters": [
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
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
    "url": "/v1/webhook_subscriptions",
    "method": "createSubscription",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Webhooks",
    "typeScriptTag": "webhooks",
    "description": "Create a webhook subscription",
    "parameters": [
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
      },
      {
        "name": "url",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "URL"
      },
      {
        "name": "subscription_types",
        "schema": "array",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "The representation of webhook subscription."
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": "Unprocessable Entity\n  \nThis may happen when the body of your request contains errors such as `invalid_attribute_value`, or the request fails due to an `invalid_operation`. See the [Errors Categories](https://docs.gusto.com/embedded-payroll/docs/error-categories) guide for more details.\n"
      }
    ]
  },
  {
    "url": "/v1/webhook_subscriptions/{webhook_subscription_uuid}",
    "method": "deleteSubscriptionByUuid",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Webhooks",
    "typeScriptTag": "webhooks",
    "description": "Delete a webhook subscription",
    "parameters": [
      {
        "name": "webhookSubscriptionUuid",
        "schema": "string",
        "required": true,
        "description": "The webhook subscription UUID.",
        "example": "WEBHOOK_SUBSCRIPTION_UUID"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "The resource was deleted successfully."
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/webhook_subscriptions/{webhook_subscription_uuid}",
    "method": "getSubscription",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Webhooks",
    "typeScriptTag": "webhooks",
    "description": "Get a webhook subscription",
    "parameters": [
      {
        "name": "webhookSubscriptionUuid",
        "schema": "string",
        "required": true,
        "description": "The webhook subscription UUID.",
        "example": "WEBHOOK_SUBSCRIPTION_UUID"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The representation of webhook subscription."
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/webhook_subscriptions/{webhook_subscription_uuid}",
    "method": "updateSubscription",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Webhooks",
    "typeScriptTag": "webhooks",
    "description": "Update a webhook subscription",
    "parameters": [
      {
        "name": "webhookSubscriptionUuid",
        "schema": "string",
        "required": true,
        "description": "The webhook subscription UUID.",
        "example": "WEBHOOK_SUBSCRIPTION_UUID"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
      },
      {
        "name": "subscription_types",
        "schema": "array",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The representation of webhook subscription."
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": "Unprocessable Entity\n  \nThis may happen when the body of your request contains errors such as `invalid_attribute_value`, or the request fails due to an `invalid_operation`. See the [Errors Categories](https://docs.gusto.com/embedded-payroll/docs/error-categories) guide for more details.\n"
      }
    ]
  },
  {
    "url": "/v1/webhook_subscriptions/{webhook_subscription_uuid}/verify",
    "method": "verifySubscriptionToken",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Webhooks",
    "typeScriptTag": "webhooks",
    "description": "Verify the webhook subscription",
    "parameters": [
      {
        "name": "webhookSubscriptionUuid",
        "schema": "string",
        "required": true,
        "description": "The webhook subscription UUID.",
        "example": "WEBHOOK_SUBSCRIPTION_UUID"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
      },
      {
        "name": "verification_token",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "VERIFICATION_TOKEN"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The representation of webhook subscription."
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": "Unprocessable Entity\n  \nThis may happen when the body of your request contains errors such as `invalid_attribute_value`, or the request fails due to an `invalid_operation`. See the [Errors Categories](https://docs.gusto.com/embedded-payroll/docs/error-categories) guide for more details.\n"
      }
    ]
  },
  {
    "url": "/v1/webhook_subscriptions/{webhook_subscription_uuid}/request_verification_token",
    "method": "requestVerificationToken",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Webhooks",
    "typeScriptTag": "webhooks",
    "description": "Request the webhook subscription verification_token",
    "parameters": [
      {
        "name": "webhookSubscriptionUuid",
        "schema": "string",
        "required": true,
        "description": "The webhook subscription UUID.",
        "example": "WEBHOOK_SUBSCRIPTION_UUID"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "No Content. The `verification_token` is POSTed to the Subscription URL."
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/contractors/{contractor_uuid}/forms",
    "method": "listAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Contractor Forms",
    "typeScriptTag": "contractorForms",
    "description": "Get all contractor forms",
    "parameters": [
      {
        "name": "contractorUuid",
        "schema": "string",
        "required": true,
        "description": "The UUID of the contractor",
        "example": "CONTRACTOR_UUID"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
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
    "url": "/v1/contractors/{contractor_uuid}/forms/{form_id}",
    "method": "getByIdForm",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Contractor Forms",
    "typeScriptTag": "contractorForms",
    "description": "Get a contractor form",
    "parameters": [
      {
        "name": "contractorUuid",
        "schema": "string",
        "required": true,
        "description": "The UUID of the contractor",
        "example": "CONTRACTOR_UUID"
      },
      {
        "name": "formId",
        "schema": "string",
        "required": true,
        "description": "The UUID of the form",
        "example": "FORM_ID"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
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
    "url": "/v1/contractors/{contractor_uuid}/forms/{form_id}/pdf",
    "method": "getPdfLink",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Contractor Forms",
    "typeScriptTag": "contractorForms",
    "description": "Get the contractor form pdf",
    "parameters": [
      {
        "name": "contractorUuid",
        "schema": "string",
        "required": true,
        "description": "The UUID of the contractor",
        "example": "CONTRACTOR_UUID"
      },
      {
        "name": "formId",
        "schema": "string",
        "required": true,
        "description": "The UUID of the form",
        "example": "FORM_ID"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
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
    "url": "/v1/sandbox/generate_1099",
    "method": "create1099Form",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Contractor Forms",
    "typeScriptTag": "contractorForms",
    "description": "Generate a 1099 form [DEMO]",
    "parameters": [
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
      },
      {
        "name": "contractor_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CONTRACTOR_ID"
      },
      {
        "name": "year",
        "schema": "integer",
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
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": "Unprocessable Entity\n  \nThis may happen when the body of your request contains errors such as `invalid_attribute_value`, or the request fails due to an `invalid_operation`. See the [Errors Categories](https://docs.gusto.com/embedded-payroll/docs/error-categories) guide for more details.\n"
      }
    ]
  },
  {
    "url": "/v1/sandbox/generate_w2",
    "method": "generateW2Document",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Employee Forms",
    "typeScriptTag": "employeeForms",
    "description": "Generate a W2 form [DEMO]",
    "parameters": [
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
      },
      {
        "name": "employee_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EMPLOYEE_ID"
      },
      {
        "name": "year",
        "schema": "integer",
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
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": "Unprocessable Entity\n  \nThis may happen when the body of your request contains errors such as `invalid_attribute_value`, or the request fails due to an `invalid_operation`. See the [Errors Categories](https://docs.gusto.com/embedded-payroll/docs/error-categories) guide for more details.\n"
      }
    ]
  },
  {
    "url": "/v1/contractors/{contractor_uuid}/payment_method",
    "method": "getContractorPaymentMethod",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Contractor Payment Method",
    "typeScriptTag": "contractorPaymentMethod",
    "description": "Get a contractor's payment method",
    "parameters": [
      {
        "name": "contractorUuid",
        "schema": "string",
        "required": true,
        "description": "The UUID of the contractor",
        "example": "CONTRACTOR_UUID"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
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
    "url": "/v1/contractors/{contractor_uuid}/payment_method",
    "method": "updateBankAccount",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Contractor Payment Method",
    "typeScriptTag": "contractorPaymentMethod",
    "description": "Update a contractor's payment method",
    "parameters": [
      {
        "name": "contractorUuid",
        "schema": "string",
        "required": true,
        "description": "The UUID of the contractor",
        "example": "CONTRACTOR_UUID"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
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
      },
      {
        "statusCode": "422",
        "description": "Unprocessable Entity\n  \nThis may happen when the body of your request contains errors such as `invalid_attribute_value`, or the request fails due to an `invalid_operation`. See the [Errors Categories](https://docs.gusto.com/embedded-payroll/docs/error-categories) guide for more details.\n"
      }
    ]
  },
  {
    "url": "/v1/contractors/{contractor_uuid}/onboarding_status",
    "method": "getOnboardingStatus",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Contractors",
    "typeScriptTag": "contractors",
    "description": "Get the contractor's onboarding status",
    "parameters": [
      {
        "name": "contractorUuid",
        "schema": "string",
        "required": true,
        "description": "The UUID of the contractor",
        "example": "CONTRACTOR_UUID"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The representation of an contractor's onboarding status."
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/contractors/{contractor_uuid}/onboarding_status",
    "method": "changeOnboardingStatus",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Contractors",
    "typeScriptTag": "contractors",
    "description": "Change the contractor's onboarding status",
    "parameters": [
      {
        "name": "contractorUuid",
        "schema": "string",
        "required": true,
        "description": "The UUID of the contractor",
        "example": "CONTRACTOR_UUID"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
      },
      {
        "name": "onboarding_status",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ONBOARDING_STATUS",
        "default": "onboarding_completed"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The representation of an contractor's onboarding status."
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": "Unprocessable Entity\n  \nThis may happen when the body of your request contains errors such as `invalid_attribute_value`, or the request fails due to an `invalid_operation`. See the [Errors Categories](https://docs.gusto.com/embedded-payroll/docs/error-categories) guide for more details.\n"
      }
    ]
  },
  {
    "url": "/v1/contractors/{contractor_uuid}/address",
    "method": "getAddress",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Contractors",
    "typeScriptTag": "contractors",
    "description": "Get a contractor address",
    "parameters": [
      {
        "name": "contractorUuid",
        "schema": "string",
        "required": true,
        "description": "The UUID of the contractor",
        "example": "CONTRACTOR_UUID"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
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
    "url": "/v1/contractors/{contractor_uuid}/address",
    "method": "updateAddress",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Contractors",
    "typeScriptTag": "contractors",
    "description": "Update a contractor's address",
    "parameters": [
      {
        "name": "contractorUuid",
        "schema": "string",
        "required": true,
        "description": "The UUID of the contractor",
        "example": "CONTRACTOR_UUID"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
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
      },
      {
        "statusCode": "422",
        "description": "Unprocessable Entity\n  \nThis may happen when the body of your request contains errors such as `invalid_attribute_value`, or the request fails due to an `invalid_operation`. See the [Errors Categories](https://docs.gusto.com/embedded-payroll/docs/error-categories) guide for more details.\n"
      }
    ]
  },
  {
    "url": "/v1/companies/{company_id}/payrolls",
    "method": "getCompanyPayrolls",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Payrolls",
    "typeScriptTag": "payrolls",
    "description": "Get all payrolls for a company",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The UUID of the company",
        "example": "COMPANY_ID"
      },
      {
        "name": "processingStatuses",
        "schema": "string",
        "description": "Whether to include processed and/or unprocessed payrolls in the response, defaults to processed, for multiple attributes comma separate the values, i.e. `?processing_statuses=processed,unprocessed`"
      },
      {
        "name": "payrollTypes",
        "schema": "string",
        "description": "Whether to include regular and/or off_cycle payrolls in the response, defaults to regular, for multiple attributes comma separate the values, i.e. `?payroll_types=regular,off_cycle`"
      },
      {
        "name": "include",
        "schema": "string",
        "description": "Include the requested attribute in the response. In v2023-04-01 totals are no longer included by default. For multiple attributes comma separate the values, i.e. `?include=totals,payroll_status_meta`"
      },
      {
        "name": "startDate",
        "schema": "string",
        "description": "Return payrolls whose pay period is after the start date"
      },
      {
        "name": "endDate",
        "schema": "string",
        "description": "Return payrolls whose pay period is before the end date"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
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
    "url": "/v1/companies/{company_id}/payrolls",
    "method": "createOffCyclePayroll",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Payrolls",
    "typeScriptTag": "payrolls",
    "description": "Create an off-cycle payroll",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The UUID of the company",
        "example": "COMPANY_ID"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
      },
      {
        "name": "off_cycle",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "off_cycle_reason",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "OFF_CYCLE_REASON"
      },
      {
        "name": "start_date",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "START_DATE"
      },
      {
        "name": "end_date",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "END_DATE"
      },
      {
        "name": "pay_schedule_uuid",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "employee_uuids",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "check_date",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "withholding_pay_period",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "skip_regular_deductions",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "fixed_withholding_rate",
        "schema": "boolean",
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
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": "Unprocessable Entity\n  \nThis may happen when the body of your request contains errors such as `invalid_attribute_value`, or the request fails due to an `invalid_operation`. See the [Errors Categories](https://docs.gusto.com/embedded-payroll/docs/error-categories) guide for more details.\n"
      }
    ]
  },
  {
    "url": "/v1/companies/{company_id}/payroll_reversals",
    "method": "approvedReversals",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Payrolls",
    "typeScriptTag": "payrolls",
    "description": "Get approved payroll reversals",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The UUID of the company",
        "example": "COMPANY_ID"
      },
      {
        "name": "page",
        "schema": "number",
        "description": "The page that is requested. When unspecified, will load all objects unless endpoint forces pagination."
      },
      {
        "name": "per",
        "schema": "number",
        "description": "Number of objects per page. For majority of endpoints will default to 25"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
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
    "url": "/v1/companies/{company_id}/payrolls/{payroll_id}",
    "method": "deleteUnprocessedPayroll",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Payrolls",
    "typeScriptTag": "payrolls",
    "description": "Delete a payroll",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The UUID of the company",
        "example": "COMPANY_ID"
      },
      {
        "name": "payrollId",
        "schema": "string",
        "required": true,
        "description": "The UUID of the payroll",
        "example": "PAYROLL_ID"
      },
      {
        "name": "async",
        "schema": "boolean",
        "description": "When true, request an asynchronous delete of the payroll."
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "Accepted"
      },
      {
        "statusCode": "204",
        "description": "No Content"
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": "Unprocessable Entity"
      }
    ]
  },
  {
    "url": "/v1/companies/{company_id}/payrolls/{payroll_id}",
    "method": "getSinglePayroll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Payrolls",
    "typeScriptTag": "payrolls",
    "description": "Get a single payroll",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The UUID of the company",
        "example": "COMPANY_ID"
      },
      {
        "name": "payrollId",
        "schema": "string",
        "required": true,
        "description": "The UUID of the payroll",
        "example": "PAYROLL_ID"
      },
      {
        "name": "include",
        "schema": "string",
        "description": "Include the requested attribute in the response, for multiple attributes comma separate the values, i.e. `?include=benefits,deductions,taxes`"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
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
    "url": "/v1/companies/{company_id}/payrolls/{payroll_id}",
    "method": "updatePayrollById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Payrolls",
    "typeScriptTag": "payrolls",
    "description": "Update a payroll by ID",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The UUID of the company",
        "example": "COMPANY_ID"
      },
      {
        "name": "payrollId",
        "schema": "string",
        "required": true,
        "description": "The UUID of the payroll",
        "example": "PAYROLL_ID"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
      },
      {
        "name": "employee_compensations",
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
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": "Unprocessable Entity\n  \nThis may happen when the body of your request contains errors such as `invalid_attribute_value`, or the request fails due to an `invalid_operation`. See the [Errors Categories](https://docs.gusto.com/embedded-payroll/docs/error-categories) guide for more details.\n"
      }
    ]
  },
  {
    "url": "/v1/companies/{company_id}/payrolls/{payroll_id}/prepare",
    "method": "prepareForUpdate",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Payrolls",
    "typeScriptTag": "payrolls",
    "description": "Prepare a payroll for update",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The UUID of the company",
        "example": "COMPANY_ID"
      },
      {
        "name": "payrollId",
        "schema": "string",
        "required": true,
        "description": "The UUID of the payroll",
        "example": "PAYROLL_ID"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
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
    "url": "/v1/payrolls/{payroll_uuid}/receipt",
    "method": "getSingleReceipt",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Payrolls",
    "typeScriptTag": "payrolls",
    "description": "Get a single payroll receipt",
    "parameters": [
      {
        "name": "payrollUuid",
        "schema": "string",
        "required": true,
        "description": "The UUID of the payroll",
        "example": "PAYROLL_UUID"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
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
    "url": "/v1/payrolls/{payroll_id}/employees/{employee_id}/calculate_accruing_time_off_hours",
    "method": "calculateAccruingTimeOffHours",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Time Off Policies",
    "typeScriptTag": "timeOffPolicies",
    "description": "Calculate accruing time off hours",
    "parameters": [
      {
        "name": "payrollId",
        "schema": "string",
        "required": true,
        "description": "The UUID of the payroll",
        "example": "PAYROLL_ID"
      },
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "The UUID of the employee",
        "example": "EMPLOYEE_ID"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
      },
      {
        "name": "regular_hours_worked",
        "schema": "number",
        "description": ""
      },
      {
        "name": "overtime_hours_worked",
        "schema": "number",
        "description": ""
      },
      {
        "name": "double_overtime_hours_worked",
        "schema": "number",
        "description": ""
      },
      {
        "name": "pto_hours_used",
        "schema": "number",
        "description": ""
      },
      {
        "name": "sick_hours_used",
        "schema": "number",
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
        "description": "Unprocessable Entity\n  \nThis may happen when the body of your request contains errors such as `invalid_attribute_value`, or the request fails due to an `invalid_operation`. See the [Errors Categories](https://docs.gusto.com/embedded-payroll/docs/error-categories) guide for more details.\n"
      }
    ]
  },
  {
    "url": "/v1/companies/{company_uuid}/payrolls/blockers",
    "method": "getAllPayrollBlockers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Payrolls",
    "typeScriptTag": "payrolls",
    "description": "Get all payroll blockers for a company",
    "parameters": [
      {
        "name": "companyUuid",
        "schema": "string",
        "required": true,
        "description": "The UUID of the company",
        "example": "COMPANY_UUID"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
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
    "url": "/v1/companies/{company_uuid}/payrolls/skip",
    "method": "skipPayroll",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Payrolls",
    "typeScriptTag": "payrolls",
    "description": "Skip a payroll",
    "parameters": [
      {
        "name": "companyUuid",
        "schema": "string",
        "required": true,
        "description": "The UUID of the company",
        "example": "COMPANY_UUID"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
      },
      {
        "name": "payroll_type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PAYROLL_TYPE"
      },
      {
        "name": "start_date",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "end_date",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "pay_schedule_uuid",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "employee_uuids",
        "schema": "array",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "Accepted"
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
    "url": "/v1/payrolls/{payroll_uuid}/gross_up",
    "method": "calculateGrossUp",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Payrolls",
    "typeScriptTag": "payrolls",
    "description": "Calculate gross up",
    "parameters": [
      {
        "name": "payrollUuid",
        "schema": "string",
        "required": true,
        "description": "The UUID of the payroll",
        "example": "PAYROLL_UUID"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
      },
      {
        "name": "employee_uuid",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EMPLOYEE_UUID"
      },
      {
        "name": "net_pay",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NET_PAY"
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
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/contractor_payments/{contractor_payment_uuid}/receipt",
    "method": "getSingleReceipt",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Contractor Payments",
    "typeScriptTag": "contractorPayments",
    "description": "Get a single contractor payment receipt",
    "parameters": [
      {
        "name": "contractorPaymentUuid",
        "schema": "string",
        "required": true,
        "description": "The UUID of the contractor payment",
        "example": "CONTRACTOR_PAYMENT_UUID"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
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
    "url": "/v1/contractor_payments/{contractor_payment_uuid}/fund",
    "method": "fundContractorPayment",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Contractor Payments",
    "typeScriptTag": "contractorPayments",
    "description": "Fund a contractor payment [DEMO]",
    "parameters": [
      {
        "name": "contractorPaymentUuid",
        "schema": "string",
        "required": true,
        "description": "The UUID of the contractor payment",
        "example": "CONTRACTOR_PAYMENT_UUID"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The representation of a single contractor payment."
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": "Unprocessable Entity\n  \nThis may happen when the body of your request contains errors such as `invalid_attribute_value`, or the request fails due to an `invalid_operation`. See the [Errors Categories](https://docs.gusto.com/embedded-payroll/docs/error-categories) guide for more details.\n"
      }
    ]
  },
  {
    "url": "/v1/companies/{company_id}/payrolls/{payroll_id}/calculate",
    "method": "calculateGrossUp",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Payrolls",
    "typeScriptTag": "payrolls",
    "description": "Calculate a payroll",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The UUID of the company",
        "example": "COMPANY_ID"
      },
      {
        "name": "payrollId",
        "schema": "string",
        "required": true,
        "description": "The UUID of the payroll",
        "example": "PAYROLL_ID"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "Accepted"
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
    "url": "/v1/companies/{company_id}/payrolls/{payroll_id}/submit",
    "method": "submitPayroll",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Payrolls",
    "typeScriptTag": "payrolls",
    "description": "Submit payroll",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The UUID of the company",
        "example": "COMPANY_ID"
      },
      {
        "name": "payrollId",
        "schema": "string",
        "required": true,
        "description": "The UUID of the payroll",
        "example": "PAYROLL_ID"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "Accepted"
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
    "url": "/v1/companies/{company_id}/payrolls/{payroll_id}/cancel",
    "method": "cancelPayrollTransition",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Payrolls",
    "typeScriptTag": "payrolls",
    "description": "Cancel a payroll",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The UUID of the company",
        "example": "COMPANY_ID"
      },
      {
        "name": "payrollId",
        "schema": "string",
        "required": true,
        "description": "The UUID of the payroll",
        "example": "PAYROLL_ID"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
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
      },
      {
        "statusCode": "422",
        "description": "Unprocessable Entity\n  \nThis may happen when the body of your request contains errors such as `invalid_attribute_value`, or the request fails due to an `invalid_operation`. See the [Errors Categories](https://docs.gusto.com/embedded-payroll/docs/error-categories) guide for more details.\n"
      }
    ]
  },
  {
    "url": "/v1/companies/{company_id}/contractor_payments",
    "method": "getWithinTimePeriodTotals",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Contractor Payments",
    "typeScriptTag": "contractorPayments",
    "description": "Get contractor payments for a company",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The UUID of the company",
        "example": "COMPANY_ID"
      },
      {
        "name": "startDate",
        "schema": "string",
        "required": true,
        "description": "The time period for which to retrieve contractor payments",
        "example": "2020-01-01"
      },
      {
        "name": "endDate",
        "schema": "string",
        "required": true,
        "description": "The time period for which to retrieve contractor payments",
        "example": "2020-12-31"
      },
      {
        "name": "contractorUuid",
        "schema": "string",
        "description": "The UUID of the contractor. When specified, will load all payments for that contractor."
      },
      {
        "name": "groupByDate",
        "schema": "boolean",
        "description": "Display contractor payments results group by check date if set to true."
      },
      {
        "name": "page",
        "schema": "number",
        "description": "The page that is requested. When unspecified, will load all objects unless endpoint forces pagination."
      },
      {
        "name": "per",
        "schema": "number",
        "description": "Number of objects per page. For majority of endpoints will default to 25"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
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
    "url": "/v1/companies/{company_id}/contractor_payments",
    "method": "createPayment",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Contractor Payments",
    "typeScriptTag": "contractorPayments",
    "description": "Create a contractor payment",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The UUID of the company",
        "example": "COMPANY_ID"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
      },
      {
        "name": "contractor_uuid",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CONTRACTOR_UUID"
      },
      {
        "name": "date",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "2020-01-01"
      },
      {
        "name": "payment_method",
        "schema": "string",
        "required": false,
        "description": "",
        "default": "Direct Deposit"
      },
      {
        "name": "wage",
        "schema": "number",
        "required": false,
        "description": "",
        "example": 5000
      },
      {
        "name": "hours",
        "schema": "number",
        "required": false,
        "description": "",
        "example": 40
      },
      {
        "name": "bonus",
        "schema": "number",
        "required": false,
        "description": "",
        "example": 500
      },
      {
        "name": "reimbursement",
        "schema": "number",
        "required": false,
        "description": "",
        "example": 20
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The representation of a single contractor payment."
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": "Unprocessable Entity\n  \nThis may happen when the body of your request contains errors such as `invalid_attribute_value`, or the request fails due to an `invalid_operation`. See the [Errors Categories](https://docs.gusto.com/embedded-payroll/docs/error-categories) guide for more details.\n"
      }
    ]
  },
  {
    "url": "/v1/companies/{company_id}/contractor_payments/{contractor_payment_id}",
    "method": "cancelPayment",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Contractor Payments",
    "typeScriptTag": "contractorPayments",
    "description": "Cancel a contractor payment",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The UUID of the company",
        "example": "COMPANY_ID"
      },
      {
        "name": "contractorPaymentId",
        "schema": "string",
        "required": true,
        "description": "The UUID of the contractor payment",
        "example": "CONTRACTOR_PAYMENT_ID"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/companies/{company_id}/contractor_payments/{contractor_payment_id}",
    "method": "getSinglePayment",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Contractor Payments",
    "typeScriptTag": "contractorPayments",
    "description": "Get a single contractor payment",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The UUID of the company",
        "example": "COMPANY_ID"
      },
      {
        "name": "contractorPaymentId",
        "schema": "string",
        "required": true,
        "description": "The UUID of the contractor payment",
        "example": "CONTRACTOR_PAYMENT_ID"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The representation of a single contractor payment."
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/companies/{company_id}/forms",
    "method": "getAllForms",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Company Forms",
    "typeScriptTag": "companyForms",
    "description": "Get all company forms",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The UUID of the company",
        "example": "COMPANY_ID"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
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
    "url": "/v1/forms/{form_id}",
    "method": "getFormById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Company Forms",
    "typeScriptTag": "companyForms",
    "description": "Get a company form",
    "parameters": [
      {
        "name": "formId",
        "schema": "string",
        "required": true,
        "description": "The UUID of the form",
        "example": "FORM_ID"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
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
    "url": "/v1/forms/{form_id}/pdf",
    "method": "getPdfLink",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Company Forms",
    "typeScriptTag": "companyForms",
    "description": "Get a company form pdf",
    "parameters": [
      {
        "name": "formId",
        "schema": "string",
        "required": true,
        "description": "The UUID of the form",
        "example": "FORM_ID"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
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
    "url": "/v1/forms/{form_id}/sign",
    "method": "signForm",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Company Forms",
    "typeScriptTag": "companyForms",
    "description": "Sign a company form",
    "parameters": [
      {
        "name": "formId",
        "schema": "string",
        "required": true,
        "description": "The UUID of the form",
        "example": "FORM_ID"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
      },
      {
        "name": "signature_text",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SIGNATURE_TEXT"
      },
      {
        "name": "agree",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "signed_by_ip_address",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SIGNED_BY_IP_ADDRESS"
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
      },
      {
        "statusCode": "422",
        "description": "Unprocessable Entity\n  \nThis may happen when the body of your request contains errors such as `invalid_attribute_value`, or the request fails due to an `invalid_operation`. See the [Errors Categories](https://docs.gusto.com/embedded-payroll/docs/error-categories) guide for more details.\n"
      }
    ]
  },
  {
    "url": "/v1/employees/{employee_id}/forms",
    "method": "getAllEmployeeForms",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Employee Forms",
    "typeScriptTag": "employeeForms",
    "description": "Get all employee forms",
    "parameters": [
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "The UUID of the employee",
        "example": "EMPLOYEE_ID"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
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
    "url": "/v1/employees/{employee_id}/forms/{form_id}",
    "method": "getFormById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Employee Forms",
    "typeScriptTag": "employeeForms",
    "description": "Get an employee form",
    "parameters": [
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "The UUID of the employee",
        "example": "EMPLOYEE_ID"
      },
      {
        "name": "formId",
        "schema": "string",
        "required": true,
        "description": "The UUID of the form",
        "example": "FORM_ID"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
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
    "url": "/v1/employees/{employee_id}/forms/{form_id}/pdf",
    "method": "getPdfLink",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Employee Forms",
    "typeScriptTag": "employeeForms",
    "description": "Get the employee form pdf",
    "parameters": [
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "The UUID of the employee",
        "example": "EMPLOYEE_ID"
      },
      {
        "name": "formId",
        "schema": "string",
        "required": true,
        "description": "The UUID of the form",
        "example": "FORM_ID"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
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
    "url": "/v1/employees/{employee_id}/forms/{form_id}/sign",
    "method": "signForm",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Employee Forms",
    "typeScriptTag": "employeeForms",
    "description": "Sign an employee form",
    "parameters": [
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "The UUID of the employee",
        "example": "EMPLOYEE_ID"
      },
      {
        "name": "formId",
        "schema": "string",
        "required": true,
        "description": "The UUID of the form",
        "example": "FORM_ID"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
      },
      {
        "name": "signature_text",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SIGNATURE_TEXT"
      },
      {
        "name": "agree",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "signed_by_ip_address",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SIGNED_BY_IP_ADDRESS"
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
      },
      {
        "statusCode": "422",
        "description": "Unprocessable Entity\n  \nThis may happen when the body of your request contains errors such as `invalid_attribute_value`, or the request fails due to an `invalid_operation`. See the [Errors Categories](https://docs.gusto.com/embedded-payroll/docs/error-categories) guide for more details.\n"
      }
    ]
  },
  {
    "url": "/v1/payrolls/{payroll_id}/employees/{employee_id}/pay_stub",
    "method": "getEmployeePayStub",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Payrolls",
    "typeScriptTag": "payrolls",
    "description": "Get an employee pay stub (pdf)",
    "parameters": [
      {
        "name": "payrollId",
        "schema": "string",
        "required": true,
        "description": "The UUID of the payroll",
        "example": "PAYROLL_ID"
      },
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "The UUID of the employee",
        "example": "EMPLOYEE_ID"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/employees/{employee_id}/pay_stubs",
    "method": "getEmployeePayStubs",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Payrolls",
    "typeScriptTag": "payrolls",
    "description": "Get an employee's pay stubs",
    "parameters": [
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "The UUID of the employee",
        "example": "EMPLOYEE_ID"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
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
    "url": "/v1/generated_documents/{document_type}/{request_uuid}",
    "method": "getDocumentByRequestUuid",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Generated Documents",
    "typeScriptTag": "generatedDocuments",
    "description": "Get a generated document",
    "parameters": [
      {
        "name": "documentType",
        "schema": "string",
        "required": true,
        "description": "the type of document being generated",
        "example": "DOCUMENT_TYPE"
      },
      {
        "name": "requestUuid",
        "schema": "string",
        "required": true,
        "description": "The UUID of the Generated Document Request",
        "example": "REQUEST_UUID"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
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
    "url": "/v1/payrolls/{payroll_id}/generated_documents/printable_payroll_checks",
    "method": "generatePrintableChecks",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Payrolls",
    "typeScriptTag": "payrolls",
    "description": "Generate payroll printable checks (pdf)",
    "parameters": [
      {
        "name": "payrollId",
        "schema": "string",
        "required": true,
        "description": "The UUID of the payroll",
        "example": "PAYROLL_ID"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
      },
      {
        "name": "printing_format",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PRINTING_FORMAT"
      },
      {
        "name": "starting_check_number",
        "schema": "integer",
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
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": "Unprocessable Entity\n  \nThis may happen when the body of your request contains errors such as `invalid_attribute_value`, or the request fails due to an `invalid_operation`. See the [Errors Categories](https://docs.gusto.com/embedded-payroll/docs/error-categories) guide for more details.\n"
      }
    ]
  },
  {
    "url": "/v1/companies/{company_id}/company_benefits",
    "method": "getBenefitsForCompany",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Company Benefits",
    "typeScriptTag": "companyBenefits",
    "description": "Get benefits for a company",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The UUID of the company",
        "example": "COMPANY_ID"
      },
      {
        "name": "enrollmentCount",
        "schema": "boolean",
        "description": "Whether to return employee enrollment count"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
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
    "url": "/v1/companies/{company_id}/company_benefits",
    "method": "createBenefit",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Company Benefits",
    "typeScriptTag": "companyBenefits",
    "description": "Create a company benefit",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The UUID of the company",
        "example": "COMPANY_ID"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
      },
      {
        "name": "description",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DESCRIPTION"
      },
      {
        "name": "benefit_type",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "active",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": true
      },
      {
        "name": "responsible_for_employer_taxes",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "responsible_for_employee_w2",
        "schema": "boolean",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "The representation of a company benefit."
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": "Unprocessable Entity\n  \nThis may happen when the body of your request contains errors such as `invalid_attribute_value`, or the request fails due to an `invalid_operation`. See the [Errors Categories](https://docs.gusto.com/embedded-payroll/docs/error-categories) guide for more details.\n"
      }
    ]
  },
  {
    "url": "/v1/company_benefits/{company_benefit_id}",
    "method": "deleteBenefit",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Company Benefits",
    "typeScriptTag": "companyBenefits",
    "description": "Delete a company benefit",
    "parameters": [
      {
        "name": "companyBenefitId",
        "schema": "string",
        "required": true,
        "description": "The UUID of the company benefit",
        "example": "COMPANY_BENEFIT_ID"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No content"
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
    "url": "/v1/company_benefits/{company_benefit_id}",
    "method": "getBenefitById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Company Benefits",
    "typeScriptTag": "companyBenefits",
    "description": "Get a company benefit",
    "parameters": [
      {
        "name": "companyBenefitId",
        "schema": "string",
        "required": true,
        "description": "The UUID of the company benefit",
        "example": "COMPANY_BENEFIT_ID"
      },
      {
        "name": "withEmployeeBenefits",
        "schema": "boolean",
        "description": "Whether to return employee benefits associated with the benefit"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The representation of a company benefit."
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/company_benefits/{company_benefit_id}",
    "method": "updateBenefit",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Company Benefits",
    "typeScriptTag": "companyBenefits",
    "description": "Update a company benefit",
    "parameters": [
      {
        "name": "companyBenefitId",
        "schema": "string",
        "required": true,
        "description": "The UUID of the company benefit",
        "example": "COMPANY_BENEFIT_ID"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
      },
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "version",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "VERSION"
      },
      {
        "name": "active",
        "schema": "boolean",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The representation of a company benefit."
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": "Unprocessable Entity\n  \nThis may happen when the body of your request contains errors such as `invalid_attribute_value`, or the request fails due to an `invalid_operation`. See the [Errors Categories](https://docs.gusto.com/embedded-payroll/docs/error-categories) guide for more details.\n"
      }
    ]
  },
  {
    "url": "/v1/benefits",
    "method": "listSupportedBenefits",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Company Benefits",
    "typeScriptTag": "companyBenefits",
    "description": "Get all benefits supported by Gusto",
    "parameters": [
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
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
    "url": "/v1/benefits/{benefit_id}",
    "method": "getSupportedBenefitById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Company Benefits",
    "typeScriptTag": "companyBenefits",
    "description": "Get a supported benefit by ID",
    "parameters": [
      {
        "name": "benefitId",
        "schema": "string",
        "required": true,
        "description": "The benefit type in Gusto.",
        "example": "BENEFIT_ID"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
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
    "url": "/v1/company_benefits/{company_benefit_id}/summary",
    "method": "getBenefitSummaryById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Company Benefits",
    "typeScriptTag": "companyBenefits",
    "description": "Get company benefit summary by company benefit id.",
    "parameters": [
      {
        "name": "companyBenefitId",
        "schema": "string",
        "required": true,
        "description": "The UUID of the company benefit",
        "example": "COMPANY_BENEFIT_ID"
      },
      {
        "name": "startDate",
        "schema": "string",
        "description": "The start date for which to retrieve company benefit summary",
        "example": "2022-01-01"
      },
      {
        "name": "endDate",
        "schema": "string",
        "description": "The end date for which to retrieve company benefit summary",
        "example": "2022-12-31"
      },
      {
        "name": "detailed",
        "schema": "boolean",
        "description": "Display employee payroll item summary"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
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
    "url": "/v1/benefits/{benefit_id}/requirements",
    "method": "getBenefitFieldsRequirementsById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Company Benefits",
    "typeScriptTag": "companyBenefits",
    "description": "Get benefit fields requirements by ID",
    "parameters": [
      {
        "name": "benefitId",
        "schema": "string",
        "required": true,
        "description": "The benefit type in Gusto.",
        "example": "BENEFIT_ID"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
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
    "url": "/v1/employees/{employee_id}/employee_benefits",
    "method": "getAllForEmployee",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Employee Benefits",
    "typeScriptTag": "employeeBenefits",
    "description": "Get all benefits for an employee",
    "parameters": [
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "The UUID of the employee",
        "example": "EMPLOYEE_ID"
      },
      {
        "name": "page",
        "schema": "number",
        "description": "The page that is requested. When unspecified, will load all objects unless endpoint forces pagination."
      },
      {
        "name": "per",
        "schema": "number",
        "description": "Number of objects per page. For majority of endpoints will default to 25"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
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
    "url": "/v1/employees/{employee_id}/employee_benefits",
    "method": "createBenefitRecord",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Employee Benefits",
    "typeScriptTag": "employeeBenefits",
    "description": "Create an employee benefit",
    "parameters": [
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "The UUID of the employee",
        "example": "EMPLOYEE_ID"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
      },
      {
        "name": "company_benefit_uuid",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "COMPANY_BENEFIT_UUID"
      },
      {
        "name": "active",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": true
      },
      {
        "name": "employee_deduction",
        "schema": "string",
        "required": false,
        "description": "",
        "default": "0.00"
      },
      {
        "name": "deduct_as_percentage",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "employee_deduction_annual_maximum",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "contribution",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "elective",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "company_contribution_annual_maximum",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "limit_option",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "catch_up",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "coverage_amount",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "coverage_salary_multiplier",
        "schema": "string",
        "required": false,
        "description": "",
        "default": "0.00"
      },
      {
        "name": "deduction_reduces_taxable_income",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "company_contribution",
        "schema": "string",
        "required": false,
        "description": "",
        "default": "0.00"
      },
      {
        "name": "contribute_as_percentage",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "The representation of an employee benefit."
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": "Unprocessable Entity\n  \nThis may happen when the body of your request contains errors such as `invalid_attribute_value`, or the request fails due to an `invalid_operation`. See the [Errors Categories](https://docs.gusto.com/embedded-payroll/docs/error-categories) guide for more details.\n"
      }
    ]
  },
  {
    "url": "/v1/employee_benefits/{employee_benefit_id}",
    "method": "deleteById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Employee Benefits",
    "typeScriptTag": "employeeBenefits",
    "description": "Delete an employee benefit",
    "parameters": [
      {
        "name": "employeeBenefitId",
        "schema": "string",
        "required": true,
        "description": "The UUID of the employee benefit.",
        "example": "EMPLOYEE_BENEFIT_ID"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/employee_benefits/{employee_benefit_id}",
    "method": "getEmployeeBenefitById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Employee Benefits",
    "typeScriptTag": "employeeBenefits",
    "description": "Get an employee benefit",
    "parameters": [
      {
        "name": "employeeBenefitId",
        "schema": "string",
        "required": true,
        "description": "The UUID of the employee benefit.",
        "example": "EMPLOYEE_BENEFIT_ID"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The representation of an employee benefit."
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/employee_benefits/{employee_benefit_id}",
    "method": "updateBenefitRecord",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Employee Benefits",
    "typeScriptTag": "employeeBenefits",
    "description": "Update an employee benefit",
    "parameters": [
      {
        "name": "employeeBenefitId",
        "schema": "string",
        "required": true,
        "description": "The UUID of the employee benefit.",
        "example": "EMPLOYEE_BENEFIT_ID"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
      },
      {
        "name": "version",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "VERSION"
      },
      {
        "name": "active",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "employee_deduction",
        "schema": "string",
        "required": false,
        "description": "",
        "default": "0.00"
      },
      {
        "name": "deduct_as_percentage",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "employee_deduction_annual_maximum",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "contribution",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "elective",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "company_contribution_annual_maximum",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "limit_option",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "catch_up",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "coverage_amount",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "deduction_reduces_taxable_income",
        "schema": "string",
        "required": false,
        "description": "",
        "default": "unset"
      },
      {
        "name": "coverage_salary_multiplier",
        "schema": "string",
        "required": false,
        "description": "",
        "default": "0.00"
      },
      {
        "name": "company_contribution",
        "schema": "string",
        "required": false,
        "description": "",
        "default": "0.00"
      },
      {
        "name": "contribute_as_percentage",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The representation of an employee benefit."
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": "Unprocessable Entity\n  \nThis may happen when the body of your request contains errors such as `invalid_attribute_value`, or the request fails due to an `invalid_operation`. See the [Errors Categories](https://docs.gusto.com/embedded-payroll/docs/error-categories) guide for more details.\n"
      }
    ]
  },
  {
    "url": "/v1/employees/{employee_id}/ytd_benefit_amounts_from_different_company",
    "method": "createYtdBenefitAmountsFromDifferentCompany",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Employee Benefits",
    "typeScriptTag": "employeeBenefits",
    "description": "Create year-to-date benefit amounts from a different company",
    "parameters": [
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "The UUID of the employee",
        "example": "EMPLOYEE_ID"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
      },
      {
        "name": "benefit_type",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "tax_year",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "ytd_employee_deduction_amount",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "YTD_EMPLOYEE_DEDUCTION_AMOUNT",
        "default": "0.00"
      },
      {
        "name": "ytd_company_contribution_amount",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "YTD_COMPANY_CONTRIBUTION_AMOUNT",
        "default": "0.00"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": "Unprocessable Entity\n  \nThis may happen when the body of your request contains errors such as `invalid_attribute_value`, or the request fails due to an `invalid_operation`. See the [Errors Categories](https://docs.gusto.com/embedded-payroll/docs/error-categories) guide for more details.\n"
      }
    ]
  },
  {
    "url": "/v1/employees/{employee_id}/garnishments",
    "method": "getEmployeeGarnishments",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Garnishments",
    "typeScriptTag": "garnishments",
    "description": "Get garnishments for an employee",
    "parameters": [
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "The UUID of the employee",
        "example": "EMPLOYEE_ID"
      },
      {
        "name": "page",
        "schema": "number",
        "description": "The page that is requested. When unspecified, will load all objects unless endpoint forces pagination."
      },
      {
        "name": "per",
        "schema": "number",
        "description": "Number of objects per page. For majority of endpoints will default to 25"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
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
    "url": "/v1/employees/{employee_id}/garnishments",
    "method": "createGarnishment",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Garnishments",
    "typeScriptTag": "garnishments",
    "description": "Create a garnishment",
    "parameters": [
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "The UUID of the employee",
        "example": "EMPLOYEE_ID"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
      },
      {
        "name": "description",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DESCRIPTION"
      },
      {
        "name": "active",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": true
      },
      {
        "name": "amount",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "AMOUNT"
      },
      {
        "name": "court_ordered",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "times",
        "schema": "integer",
        "required": false,
        "description": "",
        "default": null
      },
      {
        "name": "recurring",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "annual_maximum",
        "schema": "string",
        "required": false,
        "description": "",
        "default": null
      },
      {
        "name": "pay_period_maximum",
        "schema": "string",
        "required": false,
        "description": "",
        "default": null
      },
      {
        "name": "deduct_as_percentage",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Garnishments, or employee deductions, are fixed amounts or percentages deducted from an employee’s pay. They can be deducted a specific number of times or on a recurring basis. Garnishments can also have maximum deductions on a yearly or per-pay-period bases. Common uses for garnishments are court-ordered payments for child support or back taxes. Some companies provide loans to their employees that are repaid via garnishments."
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": "Unprocessable Entity\n  \nThis may happen when the body of your request contains errors such as `invalid_attribute_value`, or the request fails due to an `invalid_operation`. See the [Errors Categories](https://docs.gusto.com/embedded-payroll/docs/error-categories) guide for more details.\n"
      }
    ]
  },
  {
    "url": "/v1/garnishments/{garnishment_id}",
    "method": "getGarnishment",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Garnishments",
    "typeScriptTag": "garnishments",
    "description": "Get a garnishment",
    "parameters": [
      {
        "name": "garnishmentId",
        "schema": "string",
        "required": true,
        "description": "The UUID of the garnishment",
        "example": "GARNISHMENT_ID"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Garnishments, or employee deductions, are fixed amounts or percentages deducted from an employee’s pay. They can be deducted a specific number of times or on a recurring basis. Garnishments can also have maximum deductions on a yearly or per-pay-period bases. Common uses for garnishments are court-ordered payments for child support or back taxes. Some companies provide loans to their employees that are repaid via garnishments."
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/garnishments/{garnishment_id}",
    "method": "updateGarnishment",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Garnishments",
    "typeScriptTag": "garnishments",
    "description": "Update a garnishment",
    "parameters": [
      {
        "name": "garnishmentId",
        "schema": "string",
        "required": true,
        "description": "The UUID of the garnishment",
        "example": "GARNISHMENT_ID"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
      },
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "version",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "VERSION"
      },
      {
        "name": "active",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": true
      },
      {
        "name": "amount",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "court_ordered",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "times",
        "schema": "integer",
        "required": false,
        "description": "",
        "default": null
      },
      {
        "name": "recurring",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "annual_maximum",
        "schema": "string",
        "required": false,
        "description": "",
        "default": null
      },
      {
        "name": "pay_period_maximum",
        "schema": "string",
        "required": false,
        "description": "",
        "default": null
      },
      {
        "name": "deduct_as_percentage",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Garnishments, or employee deductions, are fixed amounts or percentages deducted from an employee’s pay. They can be deducted a specific number of times or on a recurring basis. Garnishments can also have maximum deductions on a yearly or per-pay-period bases. Common uses for garnishments are court-ordered payments for child support or back taxes. Some companies provide loans to their employees that are repaid via garnishments."
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": "Unprocessable Entity\n  \nThis may happen when the body of your request contains errors such as `invalid_attribute_value`, or the request fails due to an `invalid_operation`. See the [Errors Categories](https://docs.gusto.com/embedded-payroll/docs/error-categories) guide for more details.\n"
      }
    ]
  },
  {
    "url": "/v1/plaid/processor_token",
    "method": "createFromPlaidToken",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Bank Accounts",
    "typeScriptTag": "bankAccounts",
    "description": "Create a bank account from a plaid processor token",
    "parameters": [
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
      },
      {
        "name": "owner_type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "OWNER_TYPE"
      },
      {
        "name": "owner_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "OWNER_ID"
      },
      {
        "name": "processor_token",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PROCESSOR_TOKEN"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": "Unprocessable Entity\n  \nThis may happen when the body of your request contains errors such as `invalid_attribute_value`, or the request fails due to an `invalid_operation`. See the [Errors Categories](https://docs.gusto.com/embedded-payroll/docs/error-categories) guide for more details.\n"
      }
    ]
  },
  {
    "url": "/v1/companies/{company_uuid}/tax_requirements/{state}",
    "method": "getStateRequirements",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Tax Requirements",
    "typeScriptTag": "taxRequirements",
    "description": "Get State Tax Requirements",
    "parameters": [
      {
        "name": "companyUuid",
        "schema": "string",
        "required": true,
        "description": "The UUID of the company",
        "example": "COMPANY_UUID"
      },
      {
        "name": "state",
        "schema": "string",
        "required": true,
        "description": "2-letter US state abbreviation",
        "example": "STATE"
      },
      {
        "name": "scheduling",
        "schema": "boolean",
        "description": "When true, return \"new\" requirement sets with valid `effective_from` dates that are available to save new effective dated values."
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
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
    "url": "/v1/companies/{company_uuid}/tax_requirements/{state}",
    "method": "updateStateTaxes",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Tax Requirements",
    "typeScriptTag": "taxRequirements",
    "description": "Update State Tax Requirements",
    "parameters": [
      {
        "name": "companyUuid",
        "schema": "string",
        "required": true,
        "description": "The UUID of the company",
        "example": "COMPANY_UUID"
      },
      {
        "name": "state",
        "schema": "string",
        "required": true,
        "description": "2-letter US state abbreviation",
        "example": "STATE"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
      },
      {
        "name": "requirement_sets",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": "Unprocessable Entity\n  \nThis may happen when the body of your request contains errors such as `invalid_attribute_value`, or the request fails due to an `invalid_operation`. See the [Errors Categories](https://docs.gusto.com/embedded-payroll/docs/error-categories) guide for more details.\n"
      }
    ]
  },
  {
    "url": "/v1/companies/{company_uuid}/tax_requirements",
    "method": "getStates",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Tax Requirements",
    "typeScriptTag": "taxRequirements",
    "description": "Get All Tax Requirement States",
    "parameters": [
      {
        "name": "companyUuid",
        "schema": "string",
        "required": true,
        "description": "The UUID of the company",
        "example": "COMPANY_UUID"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
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
    "url": "/v1/companies/{company_uuid}/contractor_payments/preview",
    "method": "previewDebitDate",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Contractor Payments",
    "typeScriptTag": "contractorPayments",
    "description": "Preview contractor payment debit date",
    "parameters": [
      {
        "name": "companyUuid",
        "schema": "string",
        "required": true,
        "description": "The UUID of the company",
        "example": "COMPANY_UUID"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
      },
      {
        "name": "contractor_payments",
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
    "url": "/v1/time_off_policies/{time_off_policy_uuid}",
    "method": "getPolicy",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Time Off Policies",
    "typeScriptTag": "timeOffPolicies",
    "description": "Get a time off policy",
    "parameters": [
      {
        "name": "timeOffPolicyUuid",
        "schema": "string",
        "required": true,
        "description": "The UUID of the company time off policy",
        "example": "TIME_OFF_POLICY_UUID"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Representation of a Time Off Policy"
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/time_off_policies/{time_off_policy_uuid}",
    "method": "updatePolicy",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Time Off Policies",
    "typeScriptTag": "timeOffPolicies",
    "description": "Update a time off policy",
    "parameters": [
      {
        "name": "timeOffPolicyUuid",
        "schema": "string",
        "required": true,
        "description": "The UUID of the company time off policy",
        "example": "TIME_OFF_POLICY_UUID"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "accrual_method",
        "schema": "string",
        "description": ""
      },
      {
        "name": "accrual_rate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "accrual_rate_unit",
        "schema": "string",
        "description": ""
      },
      {
        "name": "paid_out_on_termination",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "accrual_waiting_period_days",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "carryover_limit_hours",
        "schema": "string",
        "description": ""
      },
      {
        "name": "max_accrual_hours_per_year",
        "schema": "string",
        "description": ""
      },
      {
        "name": "max_hours",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Representation of a Time Off Policy"
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": "Unprocessable Entity\n  \nThis may happen when the body of your request contains errors such as `invalid_attribute_value`, or the request fails due to an `invalid_operation`. See the [Errors Categories](https://docs.gusto.com/embedded-payroll/docs/error-categories) guide for more details.\n"
      }
    ]
  },
  {
    "url": "/v1/companies/{company_uuid}/time_off_policies",
    "method": "getAllPolicies",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Time Off Policies",
    "typeScriptTag": "timeOffPolicies",
    "description": "Get all time off policies",
    "parameters": [
      {
        "name": "companyUuid",
        "schema": "string",
        "required": true,
        "description": "The UUID of the company",
        "example": "COMPANY_UUID"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
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
    "url": "/v1/companies/{company_uuid}/time_off_policies",
    "method": "createPolicy",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Time Off Policies",
    "typeScriptTag": "timeOffPolicies",
    "description": "Create a time off policy",
    "parameters": [
      {
        "name": "companyUuid",
        "schema": "string",
        "required": true,
        "description": "The UUID of the company",
        "example": "COMPANY_UUID"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "policy_type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "POLICY_TYPE"
      },
      {
        "name": "accrual_method",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACCRUAL_METHOD"
      },
      {
        "name": "accrual_rate",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "accrual_rate_unit",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "paid_out_on_termination",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "accrual_waiting_period_days",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "carryover_limit_hours",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "max_accrual_hours_per_year",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "max_hours",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Representation of a Time Off Policy"
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": "Unprocessable Entity\n  \nThis may happen when the body of your request contains errors such as `invalid_attribute_value`, or the request fails due to an `invalid_operation`. See the [Errors Categories](https://docs.gusto.com/embedded-payroll/docs/error-categories) guide for more details.\n"
      }
    ]
  },
  {
    "url": "/v1/time_off_policies/{time_off_policy_uuid}/add_employees",
    "method": "addEmployeesToPolicy",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Time Off Policies",
    "typeScriptTag": "timeOffPolicies",
    "description": "Add employees to a time off policy",
    "parameters": [
      {
        "name": "timeOffPolicyUuid",
        "schema": "string",
        "required": true,
        "description": "The UUID of the company time off policy",
        "example": "TIME_OFF_POLICY_UUID"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
      },
      {
        "name": "employees",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Representation of a Time Off Policy"
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": "Unprocessable Entity\n  \nThis may happen when the body of your request contains errors such as `invalid_attribute_value`, or the request fails due to an `invalid_operation`. See the [Errors Categories](https://docs.gusto.com/embedded-payroll/docs/error-categories) guide for more details.\n"
      }
    ]
  },
  {
    "url": "/v1/time_off_policies/{time_off_policy_uuid}/remove_employees",
    "method": "removeEmployees",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Time Off Policies",
    "typeScriptTag": "timeOffPolicies",
    "description": "Remove employees from a time off policy",
    "parameters": [
      {
        "name": "timeOffPolicyUuid",
        "schema": "string",
        "required": true,
        "description": "The UUID of the company time off policy",
        "example": "TIME_OFF_POLICY_UUID"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
      },
      {
        "name": "employees",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Representation of a Time Off Policy"
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": "Unprocessable Entity\n  \nThis may happen when the body of your request contains errors such as `invalid_attribute_value`, or the request fails due to an `invalid_operation`. See the [Errors Categories](https://docs.gusto.com/embedded-payroll/docs/error-categories) guide for more details.\n"
      }
    ]
  },
  {
    "url": "/v1/companies/{company_uuid}/holiday_pay_policy",
    "method": "deletePolicy",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Holiday Pay Policies",
    "typeScriptTag": "holidayPayPolicies",
    "description": "Delete a company's holiday pay policy",
    "parameters": [
      {
        "name": "companyUuid",
        "schema": "string",
        "required": true,
        "description": "The UUID of the company",
        "example": "COMPANY_UUID"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": "Unprocessable Entity\n  \nThis may happen when the body of your request contains errors such as `invalid_attribute_value`, or the request fails due to an `invalid_operation`. See the [Errors Categories](https://docs.gusto.com/embedded-payroll/docs/error-categories) guide for more details.\n"
      }
    ]
  },
  {
    "url": "/v1/companies/{company_uuid}/holiday_pay_policy",
    "method": "getCompanyPolicy",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Holiday Pay Policies",
    "typeScriptTag": "holidayPayPolicies",
    "description": "Get a company's holiday pay policy",
    "parameters": [
      {
        "name": "companyUuid",
        "schema": "string",
        "required": true,
        "description": "The UUID of the company",
        "example": "COMPANY_UUID"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Representation of a Holiday Pay Policy"
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/companies/{company_uuid}/holiday_pay_policy",
    "method": "createCompanyPolicy",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Holiday Pay Policies",
    "typeScriptTag": "holidayPayPolicies",
    "description": "Create a holiday pay policy for a company",
    "parameters": [
      {
        "name": "companyUuid",
        "schema": "string",
        "required": true,
        "description": "The UUID of the company",
        "example": "COMPANY_UUID"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
      },
      {
        "name": "federal_holidays",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Representation of a Holiday Pay Policy"
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": "Unprocessable Entity\n  \nThis may happen when the body of your request contains errors such as `invalid_attribute_value`, or the request fails due to an `invalid_operation`. See the [Errors Categories](https://docs.gusto.com/embedded-payroll/docs/error-categories) guide for more details.\n"
      }
    ]
  },
  {
    "url": "/v1/companies/{company_uuid}/holiday_pay_policy",
    "method": "updatePolicy",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Holiday Pay Policies",
    "typeScriptTag": "holidayPayPolicies",
    "description": "Update a company's holiday pay policy",
    "parameters": [
      {
        "name": "companyUuid",
        "schema": "string",
        "required": true,
        "description": "The UUID of the company",
        "example": "COMPANY_UUID"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
      },
      {
        "name": "version",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "VERSION"
      },
      {
        "name": "federal_holidays",
        "schema": "object",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Representation of a Holiday Pay Policy"
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": "Unprocessable Entity\n  \nThis may happen when the body of your request contains errors such as `invalid_attribute_value`, or the request fails due to an `invalid_operation`. See the [Errors Categories](https://docs.gusto.com/embedded-payroll/docs/error-categories) guide for more details.\n"
      }
    ]
  },
  {
    "url": "/v1/companies/{company_uuid}/holiday_pay_policy/add",
    "method": "addEmployeesToPolicy",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Holiday Pay Policies",
    "typeScriptTag": "holidayPayPolicies",
    "description": "Add employees to a company's holiday pay policy",
    "parameters": [
      {
        "name": "companyUuid",
        "schema": "string",
        "required": true,
        "description": "The UUID of the company",
        "example": "COMPANY_UUID"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
      },
      {
        "name": "version",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "VERSION"
      },
      {
        "name": "employees",
        "schema": "array",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Representation of a Holiday Pay Policy"
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": "Unprocessable Entity\n  \nThis may happen when the body of your request contains errors such as `invalid_attribute_value`, or the request fails due to an `invalid_operation`. See the [Errors Categories](https://docs.gusto.com/embedded-payroll/docs/error-categories) guide for more details.\n"
      }
    ]
  },
  {
    "url": "/v1/companies/{company_uuid}/holiday_pay_policy/remove",
    "method": "removeEmployees",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Holiday Pay Policies",
    "typeScriptTag": "holidayPayPolicies",
    "description": "Remove employees from a company's holiday pay policy",
    "parameters": [
      {
        "name": "companyUuid",
        "schema": "string",
        "required": true,
        "description": "The UUID of the company",
        "example": "COMPANY_UUID"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
      },
      {
        "name": "version",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "VERSION"
      },
      {
        "name": "employees",
        "schema": "array",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Representation of a Holiday Pay Policy"
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": "Unprocessable Entity\n  \nThis may happen when the body of your request contains errors such as `invalid_attribute_value`, or the request fails due to an `invalid_operation`. See the [Errors Categories](https://docs.gusto.com/embedded-payroll/docs/error-categories) guide for more details.\n"
      }
    ]
  },
  {
    "url": "/v1/companies/{company_uuid}/paid_holidays",
    "method": "previewCompanyPaidHolidays",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Holiday Pay Policies",
    "typeScriptTag": "holidayPayPolicies",
    "description": "Preview a company's paid holidays",
    "parameters": [
      {
        "name": "companyUuid",
        "schema": "string",
        "required": true,
        "description": "The UUID of the company",
        "example": "COMPANY_UUID"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
      },
      {
        "name": "year",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Representation of a company's paid holidays as descibed by their Holiday Pay Policy"
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": "Unprocessable Entity\n  \nThis may happen when the body of your request contains errors such as `invalid_attribute_value`, or the request fails due to an `invalid_operation`. See the [Errors Categories](https://docs.gusto.com/embedded-payroll/docs/error-categories) guide for more details.\n"
      }
    ]
  },
  {
    "url": "/v1/time_off_policies/{time_off_policy_uuid}/balance",
    "method": "updateEmployeeBalance",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Time Off Policies",
    "typeScriptTag": "timeOffPolicies",
    "description": "Update employee time off hour balances",
    "parameters": [
      {
        "name": "timeOffPolicyUuid",
        "schema": "string",
        "required": true,
        "description": "The UUID of the company time off policy",
        "example": "TIME_OFF_POLICY_UUID"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
      },
      {
        "name": "employees",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Representation of a Time Off Policy"
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": "Unprocessable Entity\n  \nThis may happen when the body of your request contains errors such as `invalid_attribute_value`, or the request fails due to an `invalid_operation`. See the [Errors Categories](https://docs.gusto.com/embedded-payroll/docs/error-categories) guide for more details.\n"
      }
    ]
  },
  {
    "url": "/v1/time_off_policies/{time_off_policy_uuid}/deactivate",
    "method": "deactivatePolicy",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Time Off Policies",
    "typeScriptTag": "timeOffPolicies",
    "description": "Deactivate a time off policy",
    "parameters": [
      {
        "name": "timeOffPolicyUuid",
        "schema": "string",
        "required": true,
        "description": "The UUID of the company time off policy",
        "example": "TIME_OFF_POLICY_UUID"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Representation of a Time Off Policy"
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": "Unprocessable Entity\n  \nThis may happen when the body of your request contains errors such as `invalid_attribute_value`, or the request fails due to an `invalid_operation`. See the [Errors Categories](https://docs.gusto.com/embedded-payroll/docs/error-categories) guide for more details.\n"
      }
    ]
  },
  {
    "url": "/v1/notifications/{notification_uuid}",
    "method": "getDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Notifications",
    "typeScriptTag": "notifications",
    "description": "Get a notification's details",
    "parameters": [
      {
        "name": "notificationUuid",
        "schema": "string",
        "required": true,
        "description": "The UUID of the notification",
        "example": "NOTIFICATION_UUID"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Representation of a notification"
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": "Unprocessable Entity\n  \nThis may happen when the body of your request contains errors such as `invalid_attribute_value`, or the request fails due to an `invalid_operation`. See the [Errors Categories](https://docs.gusto.com/embedded-payroll/docs/error-categories) guide for more details.\n"
      }
    ]
  },
  {
    "url": "/v1/events",
    "method": "get30DayEvents",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Events",
    "typeScriptTag": "events",
    "description": "Get all events",
    "parameters": [
      {
        "name": "startingAfterUuid",
        "schema": "string",
        "required": false,
        "description": "A cursor for pagination. Returns all events occuring after the specified UUID (exclusive)"
      },
      {
        "name": "resourceUuid",
        "schema": "string",
        "required": false,
        "description": "The UUID of the company. If not specified, will return all events for all companies."
      },
      {
        "name": "limit",
        "schema": "string",
        "required": false,
        "description": "Limits the number of objects returned in a single response, between 1 and 100. The default is 25"
      },
      {
        "name": "eventType",
        "schema": "string",
        "required": false,
        "description": "A string containing the exact event name (e.g. `employee.created`), or use a wildcard match to filter for a group of events (e.g. `employee.*`, `*.created`, `notification.*.created` etc.)"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
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
    "url": "/v1/companies/{company_uuid}/recovery_cases",
    "method": "listForCompany",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Recovery Cases",
    "typeScriptTag": "recoveryCases",
    "description": "Get all recovery cases for a company",
    "parameters": [
      {
        "name": "companyUuid",
        "schema": "string",
        "required": true,
        "description": "The UUID of the company",
        "example": "COMPANY_UUID"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
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
    "url": "/v1/recovery_cases/{recovery_case_uuid}/redebit",
    "method": "initiateRedebit",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Recovery Cases",
    "typeScriptTag": "recoveryCases",
    "description": "Initiate a redebit for a recovery case",
    "parameters": [
      {
        "name": "recoveryCaseUuid",
        "schema": "string",
        "required": true,
        "description": "The UUID of the recovery case",
        "example": "RECOVERY_CASE_UUID"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "Accepted"
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": "Unprocessable Entity\n  \nThis may happen when the body of your request contains errors such as `invalid_attribute_value`, or the request fails due to an `invalid_operation`. See the [Errors Categories](https://docs.gusto.com/embedded-payroll/docs/error-categories) guide for more details.\n"
      }
    ]
  },
  {
    "url": "/v1/companies/{company_uuid}/ach_transactions",
    "method": "getAllForCompany",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "ACH Transactions",
    "typeScriptTag": "achTransactions",
    "description": "Get all ACH transactions for a company",
    "parameters": [
      {
        "name": "companyUuid",
        "schema": "string",
        "required": true,
        "description": "The UUID of the company",
        "example": "COMPANY_UUID"
      },
      {
        "name": "contractorPaymentUuid",
        "schema": "string",
        "required": false,
        "description": "The UUID of the contractor payment"
      },
      {
        "name": "payrollUuid",
        "schema": "string",
        "required": false,
        "description": "The UUID of the payroll"
      },
      {
        "name": "transactionType",
        "schema": "string",
        "required": false,
        "description": "Used to filter the ACH transactions to only include those with a specific transaction type, such as \"Credit employee pay\"."
      },
      {
        "name": "paymentDirection",
        "schema": "string",
        "required": false,
        "description": "Used to filter the ACH transactions to only include those with a specific payment direction, either \"credit\" or \"debit\"."
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
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
  }
]
    }
      language="TypeScript"
      apiTitle="Gusto API"
      apiBaseUrl="https://api.gusto-demo.com"
      apiVersion="2024-03-01"
      endpoints={139}
      sdkMethods={213}
      schemas={282}
      parameters={859}
      difficulty="Hard"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/gusto/embedded-payroll/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/gusto/embedded-payroll/openapi.yaml"
      developerDocumentation="docs.gusto.com/embedded-payroll/docs/introduction"
    />
  );
}
  