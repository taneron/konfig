import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function SignWellTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="sign-well-typescript-sdk"
      metaDescription={`When I started SignWell in 2019, I saw there was a need for an alternative to the hard-to-use and expensive e-signature software already out there. Documents can be complicated enough, but getting a document signed shouldn't be complicated too.

At SignWell, we pride ourselves not only on the ease and affordability of our e-signature process but also on our personalized and industry-leading customer support — whether it's for individual use or larger team accounts, SignWell is here to help you feel comfortable and confident getting your documents signed.

The SignWell mission? Simplify how documents get signed for millions of people and businesses. We're excited to help you continue to move toward the future of paperless document signing.

Ruben Gamez
Founder, SignWell`}
      company="SignWell"
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/signwell/logo.png"
      companyKebabCase="sign-well"
      clientNameCamelCase="signWell"
      homepage="signwell.com"
      lastUpdated={new Date("2024-03-27T04:52:35.159Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/signwell/favicon.png"
      // Missing contactUrl
      // Missing contactEmail
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/signwell/imagePreview.png"
      GettingStarted={GettingStarted}
      FirstRequest={FirstRequest}
      categories={["electronic_signature"]}
      methods={[
  {
    "url": "/api/v1/documents/{id}/remind",
    "method": "sendReminder",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Document",
    "typeScriptTag": "document",
    "description": "Send Reminder",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "recipients",
        "schema": "array",
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
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/bulk_sends/{id}",
    "method": "getInformation",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Bulk Send",
    "typeScriptTag": "bulkSend",
    "description": "Get Bulk Send",
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
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/bulk_sends",
    "method": "listBulkSendings",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Bulk Send",
    "typeScriptTag": "bulkSend",
    "description": "List Bulk Sendings",
    "parameters": [
      {
        "name": "userEmail",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "",
        "default": 10
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "",
        "default": 1
      },
      {
        "name": "apiApplicationId",
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
        "statusCode": "401",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/bulk_sends",
    "method": "createValidationCsv",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Bulk Send",
    "typeScriptTag": "bulkSend",
    "description": "Create Bulk Send",
    "parameters": [
      {
        "name": "template_ids",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "bulk_send_csv",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "BULK_SEND_CSV"
      },
      {
        "name": "skip_row_errors",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "api_application_id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "subject",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "message",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "apply_signing_order",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "custom_requester_name",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "custom_requester_email",
        "schema": "string",
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
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/bulk_sends/csv_template",
    "method": "getCsvTemplate",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Bulk Send",
    "typeScriptTag": "bulkSend",
    "description": "Get Bulk Send CSV Template",
    "parameters": [
      {
        "name": "templateIds[]",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "base64",
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
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/bulk_sends/validate_csv",
    "method": "validateCsv",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Bulk Send",
    "typeScriptTag": "bulkSend",
    "description": "Validate Bulk Send CSV",
    "parameters": [
      {
        "name": "template_ids",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "bulk_send_csv",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "BULK_SEND_CSV"
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
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/bulk_sends/{id}/documents",
    "method": "getDocuments",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Bulk Send",
    "typeScriptTag": "bulkSend",
    "description": "Get Bulk Send Documents",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "",
        "default": 10
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "",
        "default": 1
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
      }
    ]
  },
  {
    "url": "/api/v1/documents/{id}",
    "method": "deleteDocument",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Document",
    "typeScriptTag": "document",
    "description": "Delete Document",
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
        "statusCode": "204",
        "description": "no content"
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/documents/{id}",
    "method": "getDocumentData",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Document",
    "typeScriptTag": "document",
    "description": "Get Document",
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/documents",
    "method": "createNewDocument",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Document",
    "typeScriptTag": "document",
    "description": "Create Document",
    "parameters": [
      {
        "name": "test_mode",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "files",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "subject",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "message",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "recipients",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "draft",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "with_signature_page",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "expires_in",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "reminders",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": true
      },
      {
        "name": "apply_signing_order",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "api_application_id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "embedded_signing",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "embedded_signing_notifications",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "text_tags",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "custom_requester_name",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "custom_requester_email",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "redirect_url",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "allow_decline",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": true
      },
      {
        "name": "allow_reassign",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": true
      },
      {
        "name": "decline_redirect_url",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "metadata",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "fields",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "attachment_requests",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "copied_contacts",
        "schema": "array",
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
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/document_templates/documents",
    "method": "createFromTemplate",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Document",
    "typeScriptTag": "document",
    "description": "Create Document from Template",
    "parameters": [
      {
        "name": "test_mode",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "template_id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "template_ids",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "subject",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "message",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "recipients",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "draft",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "with_signature_page",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "expires_in",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "reminders",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": true
      },
      {
        "name": "apply_signing_order",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "api_application_id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "embedded_signing",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "embedded_signing_notifications",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "text_tags",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "custom_requester_name",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "custom_requester_email",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "redirect_url",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "allow_decline",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": true
      },
      {
        "name": "allow_reassign",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": true
      },
      {
        "name": "decline_redirect_url",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "metadata",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "template_fields",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "files",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "fields",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "attachment_requests",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "copied_contacts",
        "schema": "array",
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
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/documents/{id}/send",
    "method": "updateAndSend",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Document",
    "typeScriptTag": "document",
    "description": "Update and Send Document",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "test_mode",
        "schema": "boolean",
        "description": "",
        "default": false
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "subject",
        "schema": "string",
        "description": ""
      },
      {
        "name": "message",
        "schema": "string",
        "description": ""
      },
      {
        "name": "expires_in",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "reminders",
        "schema": "boolean",
        "description": "",
        "default": true
      },
      {
        "name": "apply_signing_order",
        "schema": "boolean",
        "description": "",
        "default": false
      },
      {
        "name": "api_application_id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "embedded_signing",
        "schema": "boolean",
        "description": "",
        "default": false
      },
      {
        "name": "embedded_signing_notifications",
        "schema": "boolean",
        "description": "",
        "default": false
      },
      {
        "name": "custom_requester_name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "custom_requester_email",
        "schema": "string",
        "description": ""
      },
      {
        "name": "redirect_url",
        "schema": "string",
        "description": ""
      },
      {
        "name": "allow_decline",
        "schema": "boolean",
        "description": "",
        "default": true
      },
      {
        "name": "allow_reassign",
        "schema": "boolean",
        "description": "",
        "default": true
      },
      {
        "name": "decline_redirect_url",
        "schema": "string",
        "description": ""
      },
      {
        "name": "metadata",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/documents/{id}/completed_pdf",
    "method": "getCompletedPdf",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Document",
    "typeScriptTag": "document",
    "description": "Completed PDF",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "urlOnly",
        "schema": "boolean",
        "description": "",
        "default": false
      },
      {
        "name": "auditPage",
        "schema": "boolean",
        "description": "",
        "default": true
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
    "url": "/api/v1/document_templates/{id}",
    "method": "deleteDocumentTemplate",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Template",
    "typeScriptTag": "template",
    "description": "Delete Template",
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
        "statusCode": "204",
        "description": "no content"
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/document_templates/{id}",
    "method": "getTemplateData",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Template",
    "typeScriptTag": "template",
    "description": "Get Template",
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/document_templates/{id}",
    "method": "updateExistingTemplate",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Template",
    "typeScriptTag": "template",
    "description": "Update Template",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "name",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "subject",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "message",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "draft",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "expires_in",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "reminders",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": true
      },
      {
        "name": "apply_signing_order",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "api_application_id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "redirect_url",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "allow_decline",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": true
      },
      {
        "name": "allow_reassign",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": true
      },
      {
        "name": "decline_redirect_url",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "metadata",
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
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/document_templates",
    "method": "createNew",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Template",
    "typeScriptTag": "template",
    "description": "Create Template",
    "parameters": [
      {
        "name": "files",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "subject",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "message",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "placeholders",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "copied_placeholders",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "draft",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "expires_in",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "reminders",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": true
      },
      {
        "name": "apply_signing_order",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "api_application_id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "text_tags",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "redirect_url",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "allow_decline",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": true
      },
      {
        "name": "allow_reassign",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": true
      },
      {
        "name": "decline_redirect_url",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "metadata",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "fields",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "attachment_requests",
        "schema": "array",
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
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/api_applications/{id}",
    "method": "deleteById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "API Application",
    "typeScriptTag": "apiApplication",
    "description": "Delete API Application",
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
        "statusCode": "204",
        "description": "no content"
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/api_applications/{id}",
    "method": "getDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "API Application",
    "typeScriptTag": "apiApplication",
    "description": "Get API Application",
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/hooks",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Webhooks",
    "typeScriptTag": "webhooks",
    "description": "List Webhooks",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/hooks",
    "method": "registerCallbackUrl",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Webhooks",
    "typeScriptTag": "webhooks",
    "description": "Create Webhook",
    "parameters": [
      {
        "name": "callback_url",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CALLBACK_URL"
      },
      {
        "name": "api_application_id",
        "schema": "string",
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
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/hooks/{id}",
    "method": "deleteCallbackUrl",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Webhooks",
    "typeScriptTag": "webhooks",
    "description": "Delete Webhook",
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
        "statusCode": "204",
        "description": "no content"
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/me",
    "method": "getAccountInfo",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Me",
    "typeScriptTag": "me",
    "description": "Get credentials",
    "parameters": [],
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
  }
]
    }
      language="TypeScript"
      apiTitle="Resources and endpoints"
      apiBaseUrl="https://{defaultHost}"
      apiVersion="1"
      endpoints={17}
      sdkMethods={23}
      schemas={127}
      parameters={140}
      difficulty="Easy"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/signwell/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/signwell/openapi.yaml"
      developerDocumentation="developers.signwell.com/reference"
    />
  );
}
  