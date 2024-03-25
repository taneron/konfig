import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import Description from "./_description.mdx";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function UnitTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="unit-typescript-sdk"
      metaDescription={`Unit is the leading financial infrastructure platform that helps tech companies, store, move, and lend money. Unlock new revenue streams and delight your customers.`}
      company="Unit"
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/unit/logo.png"
      companyKebabCase="unit"
      clientNameCamelCase="unit"
      homepage="unit.co"
      lastUpdated={new Date("2024-03-25T20:42:11.924Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/unit/favicon.png"
      // Missing contactUrl
      // Missing contactEmail
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/unit/imagePreview.png"
      GettingStarted={GettingStarted}
      Description={Description}
      FirstRequest={FirstRequest}
      categories={["financial_services","fintech","payments","financial_technology","money_movement","banking","fintech_infrastructure","banking_as_a_service","card_issuing","lending","compliance"]}
      methods={[
  {
    "url": "/applications/{applicationId}",
    "method": "byId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Get Application",
    "typeScriptTag": "getApplication",
    "description": "Get Application by Id",
    "parameters": [
      {
        "name": "applicationId",
        "schema": "string",
        "required": true,
        "description": "ID of the application to get",
        "example": "APPLICATIONID"
      },
      {
        "name": "included",
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
    "url": "/applications/{applicationId}",
    "method": "viaApi",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Update Application",
    "typeScriptTag": "updateApplication",
    "description": "Update Application",
    "parameters": [
      {
        "name": "applicationId",
        "schema": "string",
        "required": true,
        "description": "ID of the application to update",
        "example": "APPLICATIONID"
      },
      {
        "name": "data",
        "schema": "undefined",
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
    "url": "/applications/{applicationId}/cancel",
    "method": "byId",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Cancel Application",
    "typeScriptTag": "cancelApplication",
    "description": "Cancel Application by Id",
    "parameters": [
      {
        "name": "applicationId",
        "schema": "string",
        "required": true,
        "description": "ID of the application to get",
        "example": "APPLICATIONID"
      },
      {
        "name": "data",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/applications",
    "method": "fromApi",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Get List Applications",
    "typeScriptTag": "getListApplications",
    "description": "Get List Application",
    "parameters": [
      {
        "name": "page",
        "schema": "object",
        "description": ""
      },
      {
        "name": "filter",
        "schema": "object",
        "description": ""
      },
      {
        "name": "sort",
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
        "description": ""
      }
    ]
  },
  {
    "url": "/applications",
    "method": "viaApi",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Create Application",
    "typeScriptTag": "createApplication",
    "description": "Create Application",
    "parameters": [
      {
        "name": "data",
        "schema": "undefined",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/application-forms",
    "method": "viaApi",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Get List Application Forms",
    "typeScriptTag": "getListApplicationForms",
    "description": "Get List Application Forms",
    "parameters": [
      {
        "name": "page",
        "schema": "object",
        "description": ""
      },
      {
        "name": "filter",
        "schema": "object",
        "description": ""
      },
      {
        "name": "sort",
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
    "url": "/application-forms",
    "method": "viaApi",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Create ApplicationForm",
    "typeScriptTag": "createApplicationForm",
    "description": "Create Application Form",
    "parameters": [
      {
        "name": "data",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/applications/{applicationId}/documents/{documentId}",
    "method": "byId",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Upload a PNG Document for an Application",
    "typeScriptTag": "uploadAPngDocumentForAnApplication",
    "description": "Upload a PNG document",
    "parameters": [
      {
        "name": "applicationId",
        "schema": "string",
        "required": true,
        "description": "ID of the application to upload a file to",
        "example": "APPLICATIONID"
      },
      {
        "name": "documentId",
        "schema": "string",
        "required": true,
        "description": "ID of the document to upload a file for",
        "example": "DOCUMENTID"
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
    "url": "/applications/{applicationId}/documents/{documentId}/?",
    "method": "viaApi",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Upload a JPEG Document for an Application",
    "typeScriptTag": "uploadAJpegDocumentForAnApplication",
    "description": "Upload a JPEG document",
    "parameters": [
      {
        "name": "applicationId",
        "schema": "string",
        "required": true,
        "description": "ID of the application to upload a file to",
        "example": "APPLICATIONID"
      },
      {
        "name": "documentId",
        "schema": "string",
        "required": true,
        "description": "ID of the document to upload a file for",
        "example": "DOCUMENTID"
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
    "url": "/applications/{applicationId}/documents/{documentId}/back",
    "method": "put",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Upload a PNG Document for an Application - Back Side",
    "typeScriptTag": "uploadAPngDocumentForAnApplicationBackSide",
    "description": "Upload a PNG document - Back Side",
    "parameters": [
      {
        "name": "applicationId",
        "schema": "string",
        "required": true,
        "description": "ID of the application to upload a file to",
        "example": "APPLICATIONID"
      },
      {
        "name": "documentId",
        "schema": "string",
        "required": true,
        "description": "ID of the document to upload a file for",
        "example": "DOCUMENTID"
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
    "url": "/applications/{applicationId}/documents/{documentId}/back/?",
    "method": "put",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Upload a JPEG Document for an Application - Back Side",
    "typeScriptTag": "uploadAJpegDocumentForAnApplicationBackSide",
    "description": "Upload a JPEG document - Back Side",
    "parameters": [
      {
        "name": "applicationId",
        "schema": "string",
        "required": true,
        "description": "ID of the application to upload a file to",
        "example": "APPLICATIONID"
      },
      {
        "name": "documentId",
        "schema": "string",
        "required": true,
        "description": "ID of the document to upload a file for",
        "example": "DOCUMENTID"
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
    "url": "/applications/{applicationId}/documents",
    "method": "viaApi",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Get List of Documents",
    "typeScriptTag": "getListOfDocuments",
    "description": "Get List of Documents",
    "parameters": [
      {
        "name": "applicationId",
        "schema": "string",
        "required": true,
        "description": "ID of the application to get documents for",
        "example": "APPLICATIONID"
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
    "url": "/applications/{applicationId}/documents",
    "method": "viaApi",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Create a Document for an Application",
    "typeScriptTag": "createADocumentForAnApplication",
    "description": "Create a document",
    "parameters": [
      {
        "name": "applicationId",
        "schema": "string",
        "required": true,
        "description": "ID of the application to create a file for",
        "example": "APPLICATIONID"
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
    "url": "/applications/{applicationId}/documents/{documentId}/verify",
    "method": "put",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Verify a Document for an Application",
    "typeScriptTag": "verifyADocumentForAnApplication",
    "description": "Verify a document",
    "parameters": [
      {
        "name": "applicationId",
        "schema": "string",
        "required": true,
        "description": "ID of the application to verify a file for",
        "example": "APPLICATIONID"
      },
      {
        "name": "documentId",
        "schema": "string",
        "required": true,
        "description": "ID of the document to verify",
        "example": "DOCUMENTID"
      },
      {
        "name": "jobId",
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
    "url": "/applications/{applicationId}/documents/{documentId}/download",
    "method": "viaApi",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Download a Document",
    "typeScriptTag": "downloadADocument",
    "description": "Download a Document",
    "parameters": [
      {
        "name": "applicationId",
        "schema": "string",
        "required": true,
        "description": "ID of the application",
        "example": "APPLICATIONID"
      },
      {
        "name": "documentId",
        "schema": "string",
        "required": true,
        "description": "ID of the document to download",
        "example": "DOCUMENTID"
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
    "url": "/applications/{applicationId}/documents/{documentId}/download/back",
    "method": "viaApi",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Download a Document - Back Side",
    "typeScriptTag": "downloadADocumentBackSide",
    "description": "Download a Document - Back Side",
    "parameters": [
      {
        "name": "applicationId",
        "schema": "string",
        "required": true,
        "description": "ID of the application",
        "example": "APPLICATIONID"
      },
      {
        "name": "documentId",
        "schema": "string",
        "required": true,
        "description": "ID of the document to download",
        "example": "DOCUMENTID"
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
    "url": "/application-forms/{applicationFormId}",
    "method": "byId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Get Application Form",
    "typeScriptTag": "getApplicationForm",
    "description": "Get ApplicationForm by Id",
    "parameters": [
      {
        "name": "applicationFormId",
        "schema": "string",
        "required": true,
        "description": "ID of the application form to get",
        "example": "APPLICATIONFORMID"
      },
      {
        "name": "included",
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
    "url": "/accounts",
    "method": "fromApi",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Get List Accounts",
    "typeScriptTag": "getListAccounts",
    "description": "Get List Accounts",
    "parameters": [
      {
        "name": "page",
        "schema": "object",
        "description": ""
      },
      {
        "name": "filter",
        "schema": "object",
        "description": ""
      },
      {
        "name": "include",
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
        "statusCode": "401",
        "description": "UnitError"
      }
    ]
  },
  {
    "url": "/accounts",
    "method": "viaApi",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Create Account",
    "typeScriptTag": "createAccount",
    "description": "Create Account",
    "parameters": [
      {
        "name": "data",
        "schema": "undefined",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/accounts/{accountId}",
    "method": "byId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Get Account",
    "typeScriptTag": "getAccount",
    "description": "Get Account by Id",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "ID of the account to get",
        "example": "ACCOUNTID"
      },
      {
        "name": "include",
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
    "url": "/accounts/{accountId}",
    "method": "viaApi",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Update Account",
    "typeScriptTag": "updateAccount",
    "description": "Update Account",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "ID of the account to update",
        "example": "ACCOUNTID"
      },
      {
        "name": "data",
        "schema": "undefined",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/accounts/{accountId}/limits",
    "method": "byId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Get Account Limits",
    "typeScriptTag": "getAccountLimits",
    "description": "Get Account Limits by Id",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "ID of the account to get",
        "example": "ACCOUNTID"
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
    "url": "/accounts/{accountId}/unfreeze",
    "method": "byId",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Unfreeze Account",
    "typeScriptTag": "unfreezeAccount",
    "description": "Unfreeze Account by Id",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "ID of the account to get",
        "example": "ACCOUNTID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/accounts/{accountId}/freeze",
    "method": "byId",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Freeze an Account",
    "typeScriptTag": "freezeAnAccount",
    "description": "Freeze Account by Id",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "ID of the account to freeze",
        "example": "ACCOUNTID"
      },
      {
        "name": "data",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/accounts/{accountId}/close",
    "method": "byId",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Close an Account",
    "typeScriptTag": "closeAnAccount",
    "description": "Close an Account by Id",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "ID of the account to close",
        "example": "ACCOUNTID"
      },
      {
        "name": "data",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/accounts/{accountId}/reopen",
    "method": "byId",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Reopen an Account",
    "typeScriptTag": "reopenAnAccount",
    "description": "Reopen an Account by Id",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "ID of the account to close",
        "example": "ACCOUNTID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/accounts/{accountId}/enter-daca",
    "method": "byId",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Enter Control Agreement for Account",
    "typeScriptTag": "enterControlAgreementForAccount",
    "description": "Enter Account Control Agreement by Id",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "ID of the account",
        "example": "ACCOUNTID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/accounts/{accountId}/activate-daca",
    "method": "byId",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Activate Control Agreement for Account",
    "typeScriptTag": "activateControlAgreementForAccount",
    "description": "Activate Account Control Agreement by Id",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "ID of the account",
        "example": "ACCOUNTID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/accounts/{accountId}/deactivate-daca",
    "method": "byId",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Deactivate Control Agreement for Account",
    "typeScriptTag": "deactivateControlAgreementForAccount",
    "description": "Deactivate Account Control Agreement by Id",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "ID of the account",
        "example": "ACCOUNTID"
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
    "url": "/account-end-of-day",
    "method": "fromApi",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Get list account end-of-day balances history",
    "typeScriptTag": "getListAccountEndOfDayBalancesHistory",
    "description": "Get AccountEndOfDay List",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/customers/{customerId}",
    "method": "byId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Get Customer",
    "typeScriptTag": "getCustomer",
    "description": "Get Customer by Id",
    "parameters": [
      {
        "name": "customerId",
        "schema": "string",
        "required": true,
        "description": "ID of the customer to get",
        "example": "CUSTOMERID"
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
    "url": "/customers/{customerId}",
    "method": "viaApi",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Update Customer",
    "typeScriptTag": "updateCustomer",
    "description": "Update Customer",
    "parameters": [
      {
        "name": "customerId",
        "schema": "string",
        "required": true,
        "description": "ID of the customer to update",
        "example": "CUSTOMERID"
      },
      {
        "name": "data",
        "schema": "undefined",
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
    "url": "/customers",
    "method": "apiList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Get List Customers",
    "typeScriptTag": "getListCustomers",
    "description": "Get Customers List",
    "parameters": [
      {
        "name": "page",
        "schema": "object",
        "description": ""
      },
      {
        "name": "filter",
        "schema": "object",
        "description": ""
      },
      {
        "name": "sort",
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
    "url": "/customers/{customerId}/archive",
    "method": "byId",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Archive Customer",
    "typeScriptTag": "archiveCustomer",
    "description": "Archive Customer by Id",
    "parameters": [
      {
        "name": "customerId",
        "schema": "string",
        "required": true,
        "description": "ID of the customer to archive",
        "example": "CUSTOMERID"
      },
      {
        "name": "type",
        "schema": "string",
        "description": ""
      },
      {
        "name": "attributes",
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
    "url": "/payments",
    "method": "fromApi",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Get List Payments",
    "typeScriptTag": "getListPayments",
    "description": "Get List Payments",
    "parameters": [
      {
        "name": "page",
        "schema": "object",
        "description": ""
      },
      {
        "name": "filter",
        "schema": "object",
        "description": ""
      },
      {
        "name": "include",
        "schema": "string",
        "description": ""
      },
      {
        "name": "sort",
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
    "url": "/payments",
    "method": "viaApi",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Create a Payment",
    "typeScriptTag": "createAPayment",
    "description": "Create a Payment",
    "parameters": [
      {
        "name": "data",
        "schema": "undefined",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/payments/{paymentId}",
    "method": "byId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Get Payment",
    "typeScriptTag": "getPayment",
    "description": "Get Payment by Id",
    "parameters": [
      {
        "name": "paymentId",
        "schema": "string",
        "required": true,
        "description": "ID of the payment to get",
        "example": "PAYMENTID"
      },
      {
        "name": "included",
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
    "url": "/payments/{paymentId}",
    "method": "viaApi",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Update Payment",
    "typeScriptTag": "updatePayment",
    "description": "Update Payment",
    "parameters": [
      {
        "name": "paymentId",
        "schema": "string",
        "required": true,
        "description": "ID of the payment to update",
        "example": "PAYMENTID"
      },
      {
        "name": "data",
        "schema": "undefined",
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
    "url": "/payments/{paymentId}/cancel",
    "method": "byId",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Cancel Payment",
    "typeScriptTag": "cancelPayment",
    "description": "Cancel a Payment by Id",
    "parameters": [
      {
        "name": "paymentId",
        "schema": "string",
        "required": true,
        "description": "ID of the payment to cancel",
        "example": "PAYMENTID"
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
    "url": "/received-payments",
    "method": "fromApi",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Get Received Payments List",
    "typeScriptTag": "getReceivedPaymentsList",
    "description": "Get Received Payments List",
    "parameters": [
      {
        "name": "included",
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
    "url": "/received-payments/{paymentId}",
    "method": "byId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Get Received Payment",
    "typeScriptTag": "getReceivedPayment",
    "description": "Get Received Payment by Id",
    "parameters": [
      {
        "name": "paymentId",
        "schema": "string",
        "required": true,
        "description": "ID of the payment to get",
        "example": "PAYMENTID"
      },
      {
        "name": "included",
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
    "url": "/received-payments/{paymentId}",
    "method": "viaApi",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Update Received Payment",
    "typeScriptTag": "updateReceivedPayment",
    "description": "Update Received Payment",
    "parameters": [
      {
        "name": "paymentId",
        "schema": "string",
        "required": true,
        "description": "ID of the payment to update",
        "example": "PAYMENTID"
      },
      {
        "name": "data",
        "schema": "undefined",
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
    "url": "/received-payments/{paymentId}/advance",
    "method": "byId",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Advance Received Payment",
    "typeScriptTag": "advanceReceivedPayment",
    "description": "Advance Received Payment by Id",
    "parameters": [
      {
        "name": "paymentId",
        "schema": "string",
        "required": true,
        "description": "ID of the payment to advance",
        "example": "PAYMENTID"
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
    "url": "/counterparties",
    "method": "fromApi",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Get List Counterparties",
    "typeScriptTag": "getListCounterparties",
    "description": "Get Counterparties List",
    "parameters": [
      {
        "name": "page",
        "schema": "object",
        "description": ""
      },
      {
        "name": "filter",
        "schema": "object",
        "description": ""
      },
      {
        "name": "sort",
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
    "url": "/counterparties",
    "method": "viaApi",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Create Counterparty",
    "typeScriptTag": "createCounterparty",
    "description": "Create Counterparty",
    "parameters": [
      {
        "name": "data",
        "schema": "undefined",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/counterparties/{counterpartyId}",
    "method": "byId",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Delete Counterparty",
    "typeScriptTag": "deleteCounterparty",
    "description": "Delete Counterparty by Id",
    "parameters": [
      {
        "name": "counterpartyId",
        "schema": "string",
        "required": true,
        "description": "ID of the counterparty to delete",
        "example": "COUNTERPARTYID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Successful Response"
      }
    ]
  },
  {
    "url": "/counterparties/{counterpartyId}",
    "method": "byId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Get Counterparty",
    "typeScriptTag": "getCounterparty",
    "description": "Get Counterparty by Id",
    "parameters": [
      {
        "name": "counterpartyId",
        "schema": "string",
        "required": true,
        "description": "ID of the counterparty to get",
        "example": "COUNTERPARTYID"
      },
      {
        "name": "included",
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
    "url": "/counterparties/{counterpartyId}",
    "method": "viaApi",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Update Counterparty",
    "typeScriptTag": "updateCounterparty",
    "description": "Update Counterparty",
    "parameters": [
      {
        "name": "counterpartyId",
        "schema": "string",
        "required": true,
        "description": "ID of the counterparty to update",
        "example": "COUNTERPARTYID"
      },
      {
        "name": "data",
        "schema": "undefined",
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
    "url": "/counterparties/{counterpartyId}/balance",
    "method": "recurringPaymentFromApi",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Get Counterparty Balance",
    "typeScriptTag": "getCounterpartyBalance",
    "description": "Get Counterparty Balance",
    "parameters": [
      {
        "name": "counterpartyId",
        "schema": "string",
        "required": true,
        "description": "ID of the counterparty to get",
        "example": "COUNTERPARTYID"
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
    "url": "/recurring-payments",
    "method": "fromApi",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Get List Recurring Payments",
    "typeScriptTag": "getListRecurringPayments",
    "description": "Get Recurring Payments List",
    "parameters": [
      {
        "name": "page",
        "schema": "object",
        "description": ""
      },
      {
        "name": "filter",
        "schema": "object",
        "description": ""
      },
      {
        "name": "sort",
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
    "url": "/recurring-payments",
    "method": "viaApi",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Create Recurring Payment",
    "typeScriptTag": "createRecurringPayment",
    "description": "Create Recurring Payment",
    "parameters": [
      {
        "name": "data",
        "schema": "undefined",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/recurring-payments/{paymentId}",
    "method": "byId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Get Recurring Payment",
    "typeScriptTag": "getRecurringPayment",
    "description": "Get Recurring Payment",
    "parameters": [
      {
        "name": "paymentId",
        "schema": "string",
        "required": true,
        "description": "ID of the payment to get",
        "example": "PAYMENTID"
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
    "url": "/recurring-payments/{paymentId}/disable",
    "method": "viaApi",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Disable Recurring Payment",
    "typeScriptTag": "disableRecurringPayment",
    "description": "Disable Recurring Payment",
    "parameters": [
      {
        "name": "paymentId",
        "schema": "string",
        "required": true,
        "description": "ID of the payment to disable",
        "example": "PAYMENTID"
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
    "url": "/recurring-payments/{paymentId}/enable",
    "method": "viaApi",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Enable Recurring Payment",
    "typeScriptTag": "enableRecurringPayment",
    "description": "Enable Recurring Payment",
    "parameters": [
      {
        "name": "paymentId",
        "schema": "string",
        "required": true,
        "description": "ID of the payment to enable",
        "example": "PAYMENTID"
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
    "url": "/cards",
    "method": "fromApi",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Get List of Cards",
    "typeScriptTag": "getListOfCards",
    "description": "Get List of Cards",
    "parameters": [
      {
        "name": "page",
        "schema": "object",
        "description": ""
      },
      {
        "name": "filter",
        "schema": "object",
        "description": ""
      },
      {
        "name": "include",
        "schema": "string",
        "description": ""
      },
      {
        "name": "sort",
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
    "url": "/cards",
    "method": "viaApi",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Create a Card",
    "typeScriptTag": "createACard",
    "description": "Create a Card",
    "parameters": [
      {
        "name": "data",
        "schema": "undefined",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/cards/{cardId}",
    "method": "byId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Get Card",
    "typeScriptTag": "getCard",
    "description": "Get Card by Id",
    "parameters": [
      {
        "name": "cardId",
        "schema": "string",
        "required": true,
        "description": "ID of the card to get",
        "example": "CARDID"
      },
      {
        "name": "included",
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
    "url": "/cards/{cardId}",
    "method": "viaApi",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Update Card",
    "typeScriptTag": "updateCard",
    "description": "Update Card",
    "parameters": [
      {
        "name": "cardId",
        "schema": "string",
        "required": true,
        "description": "ID of the card to update",
        "example": "CARDID"
      },
      {
        "name": "data",
        "schema": "undefined",
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
    "url": "/cards/{cardId}/secure-data/pin/status",
    "method": "pinStatus",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Get Card PIN Status",
    "typeScriptTag": "getCardPinStatus",
    "description": "Get Card PIN Status",
    "parameters": [
      {
        "name": "cardId",
        "schema": "string",
        "required": true,
        "description": "ID of the card to get PIN status",
        "example": "CARDID"
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
    "url": "/cards/{cardId}/report-stolen",
    "method": "viaApi",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Report Card as Stolen",
    "typeScriptTag": "reportCardAsStolen",
    "description": "Report card as stolen",
    "parameters": [
      {
        "name": "cardId",
        "schema": "string",
        "required": true,
        "description": "ID of the card",
        "example": "CARDID"
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
    "url": "/cards/{cardId}/report-lost",
    "method": "viaApi",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Report Card as Lost",
    "typeScriptTag": "reportCardAsLost",
    "description": "Report lost as stolen",
    "parameters": [
      {
        "name": "cardId",
        "schema": "string",
        "required": true,
        "description": "ID of the card",
        "example": "CARDID"
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
    "url": "/cards/{cardId}/close",
    "method": "viaApi",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Close a Card",
    "typeScriptTag": "closeACard",
    "description": "Close a Card",
    "parameters": [
      {
        "name": "cardId",
        "schema": "string",
        "required": true,
        "description": "ID of the card to close",
        "example": "CARDID"
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
    "url": "/cards/{cardId}/freeze",
    "method": "viaApi",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Freeze a Card",
    "typeScriptTag": "freezeACard",
    "description": "Freeze a Card",
    "parameters": [
      {
        "name": "cardId",
        "schema": "string",
        "required": true,
        "description": "ID of the card to freeze",
        "example": "CARDID"
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
    "url": "/cards/{cardId}/unfreeze",
    "method": "byId",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Unfreeze a Card",
    "typeScriptTag": "unfreezeACard",
    "description": "Unfreeze a Card",
    "parameters": [
      {
        "name": "cardId",
        "schema": "string",
        "required": true,
        "description": "ID of the card to unfreeze",
        "example": "CARDID"
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
    "url": "/cards/{cardId}/limits",
    "method": "byId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Get Card Limits",
    "typeScriptTag": "getCardLimits",
    "description": "Get Card Limit by Id",
    "parameters": [
      {
        "name": "cardId",
        "schema": "string",
        "required": true,
        "description": "ID of the card to get",
        "example": "CARDID"
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
    "url": "/authorizations",
    "method": "fromApi",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Get List Authorizations",
    "typeScriptTag": "getListAuthorizations",
    "description": "Get List authorizations",
    "parameters": [
      {
        "name": "page",
        "schema": "object",
        "description": ""
      },
      {
        "name": "filter",
        "schema": "object",
        "description": ""
      },
      {
        "name": "sort",
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
    "url": "/authorizations/{authorizationId}",
    "method": "byId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Get Authorization",
    "typeScriptTag": "getAuthorization",
    "description": "Get Authorization by Id",
    "parameters": [
      {
        "name": "authorizationId",
        "schema": "string",
        "required": true,
        "description": "ID of the authorization to get",
        "example": "AUTHORIZATIONID"
      },
      {
        "name": "includeNoneAuthorized",
        "schema": "boolean",
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
    "url": "/authorization-requests",
    "method": "fromApi",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Get List Authorization Requests",
    "typeScriptTag": "getListAuthorizationRequests",
    "description": "Get List Authorization Requests",
    "parameters": [
      {
        "name": "page",
        "schema": "object",
        "description": ""
      },
      {
        "name": "filter",
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
    "url": "/authorization-requests/{authorizationId}",
    "method": "byId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Get Authorization Request",
    "typeScriptTag": "getAuthorizationRequest",
    "description": "Get Authorization Request by Id",
    "parameters": [
      {
        "name": "authorizationId",
        "schema": "string",
        "required": true,
        "description": "ID of the authorization request to get",
        "example": "AUTHORIZATIONID"
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
    "url": "/authorization-requests/{authorizationId}/approve",
    "method": "byId",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Approve Authorization Request",
    "typeScriptTag": "approveAuthorizationRequest",
    "description": "Approve Authorization Request by Id",
    "parameters": [
      {
        "name": "authorizationId",
        "schema": "string",
        "required": true,
        "description": "ID of the authorization request to approve",
        "example": "AUTHORIZATIONID"
      },
      {
        "name": "data",
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
    "url": "/authorization-requests/{authorizationId}/decline",
    "method": "viaApi",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Decline Authorization Request",
    "typeScriptTag": "declineAuthorizationRequest",
    "description": "Decline Authorization Request",
    "parameters": [
      {
        "name": "authorizationId",
        "schema": "string",
        "required": true,
        "description": "ID of the authorization request to decline",
        "example": "AUTHORIZATIONID"
      },
      {
        "name": "data",
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
    "url": "/statements",
    "method": "fromApi",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Get List Statements",
    "typeScriptTag": "getListStatements",
    "description": "Get List Statements",
    "parameters": [
      {
        "name": "page",
        "schema": "object",
        "description": ""
      },
      {
        "name": "filter",
        "schema": "object",
        "description": ""
      },
      {
        "name": "sort",
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
    "url": "/statements/{statementId}/html",
    "method": "byId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Get Statement HTML",
    "typeScriptTag": "getStatementHtml",
    "description": "Get HTML Statement by Id",
    "parameters": [
      {
        "name": "statementId",
        "schema": "string",
        "required": true,
        "description": "ID of the statement to get",
        "example": "STATEMENTID"
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
    "url": "/statements/{statementId}/pdf",
    "method": "byId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Get Statement PDF",
    "typeScriptTag": "getStatementPdf",
    "description": "Get PDF Statement by Id",
    "parameters": [
      {
        "name": "statementId",
        "schema": "string",
        "required": true,
        "description": "ID of the statement to get",
        "example": "STATEMENTID"
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
    "url": "/statements/{accountId}/bank/pdf",
    "method": "fromApi",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Get Bank verification PDF",
    "typeScriptTag": "getBankVerificationPdf",
    "description": "Get Bank verification PDF",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "ID of the account to get",
        "example": "ACCOUNTID"
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
    "url": "/rewards",
    "method": "fromApi",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Get List Rewards",
    "typeScriptTag": "getListRewards",
    "description": "Get Rewards List",
    "parameters": [
      {
        "name": "page",
        "schema": "object",
        "description": ""
      },
      {
        "name": "filter",
        "schema": "object",
        "description": ""
      },
      {
        "name": "sort",
        "schema": "string",
        "description": ""
      },
      {
        "name": "include",
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
    "url": "/rewards",
    "method": "viaApi",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Create Reward",
    "typeScriptTag": "createReward",
    "description": "Create Reward",
    "parameters": [
      {
        "name": "data",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/rewards/{rewardId}",
    "method": "byId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Get Reward",
    "typeScriptTag": "getReward",
    "description": "Get Reward by Id",
    "parameters": [
      {
        "name": "rewardId",
        "schema": "string",
        "required": true,
        "description": "ID of the reward to get",
        "example": "REWARDID"
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
    "url": "/events",
    "method": "fromApi",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Get List Events",
    "typeScriptTag": "getListEvents",
    "description": "Get Events List",
    "parameters": [
      {
        "name": "page",
        "schema": "object",
        "description": ""
      },
      {
        "name": "filter",
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
    "url": "/events/{eventId}",
    "method": "byId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Get Event",
    "typeScriptTag": "getEvent",
    "description": "Get Event by Id",
    "parameters": [
      {
        "name": "eventId",
        "schema": "string",
        "required": true,
        "description": "ID of the event to get",
        "example": "EVENTID"
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
    "url": "/events/{eventId}",
    "method": "byId",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Fire Event",
    "typeScriptTag": "fireEvent",
    "description": "Fire Event by Id",
    "parameters": [
      {
        "name": "eventId",
        "schema": "string",
        "required": true,
        "description": "ID of the event to fire",
        "example": "EVENTID"
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
    "url": "/institutions/{routingNumber}",
    "method": "byRoutingNumber",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Get Institution",
    "typeScriptTag": "getInstitution",
    "description": "Get Institution by Routing Number",
    "parameters": [
      {
        "name": "routingNumber",
        "schema": "string",
        "required": true,
        "description": "routingNumber of the institution to get",
        "example": "ROUTINGNUMBER"
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
    "url": "/fees",
    "method": "viaApi",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Create Fee",
    "typeScriptTag": "createFee",
    "description": "Create Fee",
    "parameters": [],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/check-deposits",
    "method": "fromApi",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Get List Check Deposits",
    "typeScriptTag": "getListCheckDeposits",
    "description": "Get List Check Deposits",
    "parameters": [
      {
        "name": "page",
        "schema": "object",
        "description": ""
      },
      {
        "name": "filter",
        "schema": "object",
        "description": ""
      },
      {
        "name": "sort",
        "schema": "string",
        "description": ""
      },
      {
        "name": "include",
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
    "url": "/check-deposits",
    "method": "viaApi",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Create Check Deposit",
    "typeScriptTag": "createCheckDeposit",
    "description": "Create Check Deposit",
    "parameters": [
      {
        "name": "data",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/check-deposits/{checkDepositId}",
    "method": "byId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Get Check Deposit",
    "typeScriptTag": "getCheckDeposit",
    "description": "Get Check Deposit by Id",
    "parameters": [
      {
        "name": "checkDepositId",
        "schema": "string",
        "required": true,
        "description": "ID of the check deposit to get",
        "example": "CHECKDEPOSITID"
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
    "url": "/check-deposits/{checkDepositId}",
    "method": "byId",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Update Check Deposit",
    "typeScriptTag": "updateCheckDeposit",
    "description": "Update Check Deposit",
    "parameters": [
      {
        "name": "checkDepositId",
        "schema": "string",
        "required": true,
        "description": "ID of the check deposit to update",
        "example": "CHECKDEPOSITID"
      },
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
      }
    ]
  },
  {
    "url": "/check-deposits/{checkDepositId}/confirm",
    "method": "byId",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Confirm Check Deposit",
    "typeScriptTag": "confirmCheckDeposit",
    "description": "Confirm by Id",
    "parameters": [
      {
        "name": "checkDepositId",
        "schema": "string",
        "required": true,
        "description": "ID of the check deposit to confirm",
        "example": "CHECKDEPOSITID"
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
    "url": "/check-deposits/{checkDepositId}/front",
    "method": "byId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Get Check Deposit Front Image",
    "typeScriptTag": "getCheckDepositFrontImage",
    "description": "Get Front Check Deposit Image by Id",
    "parameters": [
      {
        "name": "checkDepositId",
        "schema": "string",
        "required": true,
        "description": "ID of the check deposit to get",
        "example": "CHECKDEPOSITID"
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
    "url": "/check-deposits/{checkDepositId}/back",
    "method": "byId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Get Check Deposit Back Image",
    "typeScriptTag": "getCheckDepositBackImage",
    "description": "Get Back Check Deposit Image by Id",
    "parameters": [
      {
        "name": "checkDepositId",
        "schema": "string",
        "required": true,
        "description": "ID of the check deposit to get",
        "example": "CHECKDEPOSITID"
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
    "url": "/users/{userId}/api-tokens",
    "method": "fromApi",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Get List Org API Tokens",
    "typeScriptTag": "getListOrgApiTokens",
    "description": "Get List Org API Tokens",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "ID of the user to revoke token",
        "example": "USERID"
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
    "url": "/users/{userId}/api-tokens",
    "method": "viaApi",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Create Org Api Token",
    "typeScriptTag": "createOrgApiToken",
    "description": "Create Org API Token",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "ID of the user to create token for",
        "example": "USERID"
      },
      {
        "name": "data",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/users/{userId}/api-tokens/{tokenId}",
    "method": "rewardById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Revoke Org API Token",
    "typeScriptTag": "revokeOrgApiToken",
    "description": "Get Reward by Id",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "ID of the user to revoke token",
        "example": "USERID"
      },
      {
        "name": "tokenId",
        "schema": "string",
        "required": true,
        "description": "ID of the token to revoke",
        "example": "TOKENID"
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
    "url": "/customers/{customerId}/token",
    "method": "viaApi",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Create Customer Token",
    "typeScriptTag": "createCustomerToken",
    "description": "Create Customer Token",
    "parameters": [
      {
        "name": "customerId",
        "schema": "string",
        "required": true,
        "description": "ID of the customer to create token for",
        "example": "CUSTOMERID"
      },
      {
        "name": "data",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/customers/{customerId}/token/verification",
    "method": "viaApi",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Create Customer Token Verification",
    "typeScriptTag": "createCustomerTokenVerification",
    "description": "Create Customer Token Verification",
    "parameters": [
      {
        "name": "customerId",
        "schema": "string",
        "required": true,
        "description": "ID of the customer to create token for",
        "example": "CUSTOMERID"
      },
      {
        "name": "data",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/webhooks",
    "method": "fromApi",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Get List Webhooks",
    "typeScriptTag": "getListWebhooks",
    "description": "Get List Webhooks",
    "parameters": [
      {
        "name": "page",
        "schema": "object",
        "description": ""
      },
      {
        "name": "filter",
        "schema": "object",
        "description": ""
      },
      {
        "name": "sort",
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
    "url": "/webhooks",
    "method": "viaApi",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Create Webhook",
    "typeScriptTag": "createWebhook",
    "description": "Create Webhook",
    "parameters": [
      {
        "name": "data",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/webhooks/{webhookId}",
    "method": "byId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Get Webhook",
    "typeScriptTag": "getWebhook",
    "description": "Get Webhook Id",
    "parameters": [
      {
        "name": "webhookId",
        "schema": "string",
        "required": true,
        "description": "ID of the webhook to get",
        "example": "WEBHOOKID"
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
    "url": "/webhooks/{webhookId}",
    "method": "viaApi",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Update Webhook",
    "typeScriptTag": "updateWebhook",
    "description": "Update Webhook",
    "parameters": [
      {
        "name": "webhookId",
        "schema": "string",
        "required": true,
        "description": "ID of the Webhook to update",
        "example": "WEBHOOKID"
      },
      {
        "name": "data",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/webhooks/{webhookId}/enable",
    "method": "viaApi",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Enable Webhook",
    "typeScriptTag": "enableWebhook",
    "description": "Enable Webhook",
    "parameters": [
      {
        "name": "webhookId",
        "schema": "string",
        "required": true,
        "description": "ID of the webhook to enable",
        "example": "WEBHOOKID"
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
    "url": "/webhooks/{webhookId}/disable",
    "method": "viaApi",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Disable Webhook",
    "typeScriptTag": "disableWebhook",
    "description": "Disable a Webhook",
    "parameters": [
      {
        "name": "webhookId",
        "schema": "string",
        "required": true,
        "description": "ID of the webhook to disable",
        "example": "WEBHOOKID"
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
    "url": "/atm-locations",
    "method": "fromApi",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Get ATM Locations List",
    "typeScriptTag": "getAtmLocationsList",
    "description": "Get List ATM Locations",
    "parameters": [
      {
        "name": "filter",
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
    "url": "/accounts/{accountId}/transactions/{transactionId}",
    "method": "byId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Get Transaction",
    "typeScriptTag": "getTransaction",
    "description": "Get Transaction by Id",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "ID of the account to get transaction from",
        "example": "ACCOUNTID"
      },
      {
        "name": "transactionId",
        "schema": "string",
        "required": true,
        "description": "ID of the transaction",
        "example": "TRANSACTIONID"
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
    "url": "/accounts/{accountId}/transactions/{transactionId}",
    "method": "viaApi",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Update Transaction",
    "typeScriptTag": "updateTransaction",
    "description": "Update Transaction",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "ID of the account to update transaction from",
        "example": "ACCOUNTID"
      },
      {
        "name": "transactionId",
        "schema": "string",
        "required": true,
        "description": "ID of the transaction to update",
        "example": "TRANSACTIONID"
      },
      {
        "name": "data",
        "schema": "undefined",
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
    "url": "/transactions",
    "method": "fromApi",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Get List Transactions",
    "typeScriptTag": "getListTransactions",
    "description": "Get List Transactions",
    "parameters": [
      {
        "name": "page",
        "schema": "object",
        "description": ""
      },
      {
        "name": "filter",
        "schema": "object",
        "description": ""
      },
      {
        "name": "sort",
        "schema": "string",
        "description": ""
      },
      {
        "name": "include",
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
    "url": "/disputes",
    "method": "fromApi",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Get List Disputes",
    "typeScriptTag": "getListDisputes",
    "description": "Get List Disputes",
    "parameters": [
      {
        "name": "page",
        "schema": "object",
        "description": ""
      },
      {
        "name": "filter",
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
    "url": "/disputes/{disputeId}",
    "method": "byId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Get Dispute",
    "typeScriptTag": "getDispute",
    "description": "Get Dispute by Id",
    "parameters": [
      {
        "name": "disputeId",
        "schema": "string",
        "required": true,
        "description": "ID of the dispute to get",
        "example": "DISPUTEID"
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
    "url": "/repayments",
    "method": "fromApi",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Get List Repayments",
    "typeScriptTag": "getListRepayments",
    "description": "Get List Repayments",
    "parameters": [
      {
        "name": "page",
        "schema": "object",
        "description": ""
      },
      {
        "name": "filter",
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
        "statusCode": "401",
        "description": ""
      }
    ]
  },
  {
    "url": "/repayments",
    "method": "viaApi",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Create a Repayment",
    "typeScriptTag": "createARepayment",
    "description": "Create a Repayment",
    "parameters": [
      {
        "name": "data",
        "schema": "undefined",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/repayments/{repaymentId}",
    "method": "byId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Get Repayment",
    "typeScriptTag": "getRepayment",
    "description": "Get Repayment by Id",
    "parameters": [
      {
        "name": "repaymentId",
        "schema": "string",
        "required": true,
        "description": "ID of the repayment to get",
        "example": "REPAYMENTID"
      },
      {
        "name": "include",
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
    "url": "/check-payments",
    "method": "fromApi",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Get List Check Payments",
    "typeScriptTag": "getListCheckPayments",
    "description": "Get List Check Payments",
    "parameters": [
      {
        "name": "page",
        "schema": "object",
        "description": ""
      },
      {
        "name": "filter",
        "schema": "object",
        "description": ""
      },
      {
        "name": "sort",
        "schema": "string",
        "description": ""
      },
      {
        "name": "include",
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
    "url": "/check-payments",
    "method": "viaApi",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Create Check Payment",
    "typeScriptTag": "createCheckPayment",
    "description": "Create Check Payment",
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
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/check-payments/{checkPaymentId}",
    "method": "byId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Get Check Payment",
    "typeScriptTag": "getCheckPayment",
    "description": "Get Check Payment by Id",
    "parameters": [
      {
        "name": "checkPaymentId",
        "schema": "string",
        "required": true,
        "description": "ID of the check payment to get",
        "example": "CHECKPAYMENTID"
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
    "url": "/check-payments/{checkPaymentId}/approve",
    "method": "byId",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Approve Check Payment",
    "typeScriptTag": "approveCheckPayment",
    "description": "Approve Check Payment by Id",
    "parameters": [
      {
        "name": "checkPaymentId",
        "schema": "string",
        "required": true,
        "description": "ID of the check payment to approve",
        "example": "CHECKPAYMENTID"
      },
      {
        "name": "data",
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
    "url": "/check-payments/{checkPaymentId}/cancel",
    "method": "byId",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Cancel Check Payment",
    "typeScriptTag": "cancelCheckPayment",
    "description": "Cancel Check Payment by Id",
    "parameters": [
      {
        "name": "checkPaymentId",
        "schema": "string",
        "required": true,
        "description": "ID of the check payment to cancel",
        "example": "CHECKPAYMENTID"
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
    "url": "/check-payments/{checkPaymentId}/return",
    "method": "byId",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Return Check Payment",
    "typeScriptTag": "returnCheckPayment",
    "description": "Return Check Payment by Id",
    "parameters": [
      {
        "name": "checkPaymentId",
        "schema": "string",
        "required": true,
        "description": "ID of the check payment to return",
        "example": "CHECKPAYMENTID"
      },
      {
        "name": "data",
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
    "url": "/check-payments/{checkPaymentId}/front",
    "method": "viaApi",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Get a front image",
    "typeScriptTag": "getAFrontImage",
    "description": "Get front image",
    "parameters": [
      {
        "name": "checkPaymentId",
        "schema": "string",
        "required": true,
        "description": "ID of the check payment",
        "example": "CHECKPAYMENTID"
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
    "url": "/check-payments/{checkPaymentId}/back",
    "method": "byApi",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Get a back image",
    "typeScriptTag": "getABackImage",
    "description": "Get back image",
    "parameters": [
      {
        "name": "checkPaymentId",
        "schema": "string",
        "required": true,
        "description": "ID of the check payment",
        "example": "CHECKPAYMENTID"
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
    "url": "/stop-payments",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "StopPayment",
    "typeScriptTag": "stopPayment",
    "description": "Get a list of stop payments",
    "parameters": [
      {
        "name": "page",
        "schema": "object",
        "description": ""
      },
      {
        "name": "filter",
        "schema": "object",
        "description": ""
      },
      {
        "name": "sort",
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
    "url": "/stop-payments",
    "method": "create",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "StopPayment",
    "typeScriptTag": "stopPayment",
    "description": "Create Stop Payment",
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
      }
    ]
  },
  {
    "url": "/stop-payments/{stop_payment_id}",
    "method": "cancel",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "StopPayment",
    "typeScriptTag": "stopPayment",
    "description": "Cancel a stop payment",
    "parameters": [
      {
        "name": "stopPaymentId",
        "schema": "string",
        "required": true,
        "description": "ID of the stop payment",
        "example": "STOP_PAYMENT_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Stop payment successfully canceled"
      },
      {
        "statusCode": "404",
        "description": "Stop payment not found"
      }
    ]
  },
  {
    "url": "/stop-payments/{stop_payment_id}",
    "method": "getDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "StopPayment",
    "typeScriptTag": "stopPayment",
    "description": "Get details of a specific stop payment",
    "parameters": [
      {
        "name": "stopPaymentId",
        "schema": "string",
        "required": true,
        "description": "ID of the stop payment",
        "example": "STOP_PAYMENT_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Stop payment not found"
      }
    ]
  },
  {
    "url": "/stop-payments/{stop_payment_id}/disable",
    "method": "disableStopPayment",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "StopPayment",
    "typeScriptTag": "stopPayment",
    "description": "Disable a stop payment",
    "parameters": [
      {
        "name": "stopPaymentId",
        "schema": "string",
        "required": true,
        "description": "ID of the stop payment",
        "example": "STOP_PAYMENT_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Stop payment not found"
      }
    ]
  }
]
    }
      language="TypeScript"
      apiTitle="Unit OpenAPI specifications"
      apiBaseUrl="https://api.s.unit.sh"
      apiVersion="0.0.2"
      endpoints={97}
      sdkMethods={125}
      schemas={133}
      parameters={209}
      difficulty="Medium"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/unit/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/unit/openapi.yaml"
      developerDocumentation="www.unit.co/docs/api/"
    />
  );
}
  