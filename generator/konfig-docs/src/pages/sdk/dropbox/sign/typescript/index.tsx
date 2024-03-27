import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function DropboxSignTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="dropbox-sign-typescript-sdk"
      metaDescription={`Dropbox is the one place to keep life organized and keep work moving. With more than 700 million registered users across 180 countries, we're on a mission to design a more enlightened way of working. Dropbox is headquartered in San Francisco, CA, and has offices around the world.

To learn more about working at Dropbox, visit dropbox.com/jobs

We also have a few simple guidelines to keep this space respectful and productive. Please avoid:
- Harassing other people or using language that's hateful, offensive, vulgar, or advocates violence
- Trolling, fraud and spamming
- Violating someone else's rights or privacy
- Advertising or soliciting donations
- Link baiting
- Posting off topic comments or thread hijacking

We may remove comments that violate these guidelines.`}
      company="Dropbox"
      serviceName="Sign"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/dropbox/sign/logo.png"
      companyKebabCase="dropbox"
      clientNameCamelCase="dropboxSign"
      homepage="sign.dropbox.com"
      lastUpdated={new Date("2024-03-27T23:19:50.208Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/dropbox/sign/favicon.png"
      // Missing contactUrl
      contactEmail="apisupport@hellosign.com"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/dropbox/sign/imagePreview.jpg"
      GettingStarted={GettingStarted}
      FirstRequest={FirstRequest}
      categories={["document_management","sign"]}
      methods={[
  {
    "url": "/account/create",
    "method": "createNew",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Account",
    "typeScriptTag": "account",
    "description": "Create Account",
    "parameters": [
      {
        "name": "client_id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "client_secret",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "email_address",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EMAIL_ADDRESS"
      },
      {
        "name": "locale",
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
        "statusCode": "4XX",
        "description": ""
      }
    ]
  },
  {
    "url": "/account",
    "method": "propertiesGet",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Account",
    "typeScriptTag": "account",
    "description": "Get Account",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": false,
        "description": "`account_id` or `email_address` is required. If both are provided, the account id prevails.\n\nThe ID of the Account."
      },
      {
        "name": "emailAddress",
        "schema": "string",
        "required": false,
        "description": "`account_id` or `email_address` is required, If both are provided, the account id prevails.\n\nThe email address of the Account."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "4XX",
        "description": ""
      }
    ]
  },
  {
    "url": "/account",
    "method": "updateProperties",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Account",
    "typeScriptTag": "account",
    "description": "Update Account",
    "parameters": [
      {
        "name": "account_id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "callback_url",
        "schema": "string",
        "description": ""
      },
      {
        "name": "locale",
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
        "statusCode": "4XX",
        "description": ""
      }
    ]
  },
  {
    "url": "/account/verify",
    "method": "verifyEmailExists",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Account",
    "typeScriptTag": "account",
    "description": "Verify Account",
    "parameters": [
      {
        "name": "email_address",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EMAIL_ADDRESS"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "4XX",
        "description": ""
      }
    ]
  },
  {
    "url": "/api_app",
    "method": "createNew",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Api App",
    "typeScriptTag": "apiApp",
    "description": "Create API App",
    "parameters": [
      {
        "name": "callback_url",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "custom_logo_file",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "domains",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "oauth",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "options",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "white_labeling_options",
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
        "statusCode": "4XX",
        "description": ""
      }
    ]
  },
  {
    "url": "/api_app/{client_id}",
    "method": "delete",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Api App",
    "typeScriptTag": "apiApp",
    "description": "Delete API App",
    "parameters": [
      {
        "name": "clientId",
        "schema": "string",
        "required": true,
        "description": "The client id of the API App to delete.",
        "example": "0dd3b823a682527788c4e40cb7b6f7e9"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "successful operation"
      },
      {
        "statusCode": "4XX",
        "description": ""
      }
    ]
  },
  {
    "url": "/api_app/{client_id}",
    "method": "infoRetrieval",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Api App",
    "typeScriptTag": "apiApp",
    "description": "Get API App",
    "parameters": [
      {
        "name": "clientId",
        "schema": "string",
        "required": true,
        "description": "The client id of the API App to retrieve.",
        "example": "0dd3b823a682527788c4e40cb7b6f7e9"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "4XX",
        "description": ""
      }
    ]
  },
  {
    "url": "/api_app/{client_id}",
    "method": "updateExisting",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Api App",
    "typeScriptTag": "apiApp",
    "description": "Update API App",
    "parameters": [
      {
        "name": "clientId",
        "schema": "string",
        "required": true,
        "description": "The client id of the API App to update.",
        "example": "0dd3b823a682527788c4e40cb7b6f7e9"
      },
      {
        "name": "callback_url",
        "schema": "string",
        "description": ""
      },
      {
        "name": "custom_logo_file",
        "schema": "string",
        "description": ""
      },
      {
        "name": "domains",
        "schema": "array",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "oauth",
        "schema": "object",
        "description": ""
      },
      {
        "name": "options",
        "schema": "object",
        "description": ""
      },
      {
        "name": "white_labeling_options",
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
        "statusCode": "4XX",
        "description": ""
      }
    ]
  },
  {
    "url": "/api_app/list",
    "method": "listApps",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Api App",
    "typeScriptTag": "apiApp",
    "description": "List API Apps",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "description": "Which page number of the API App List to return. Defaults to `1`.",
        "default": 1
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "description": "Number of objects to be returned per page. Must be between `1` and `100`. Default is `20`.",
        "default": 20
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "4XX",
        "description": ""
      }
    ]
  },
  {
    "url": "/bulk_send_job/{bulk_send_job_id}",
    "method": "getStatusById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Bulk Send Job",
    "typeScriptTag": "bulkSendJob",
    "description": "Get Bulk Send Job",
    "parameters": [
      {
        "name": "bulkSendJobId",
        "schema": "string",
        "required": true,
        "description": "The id of the BulkSendJob to retrieve.",
        "example": "6e683bc0369ba3d5b6f43c2c22a8031dbf6bd174"
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "Which page number of the BulkSendJob list to return. Defaults to `1`.",
        "default": 1
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "description": "Number of objects to be returned per page. Must be between `1` and `100`. Default is 20.",
        "default": 20
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "4XX",
        "description": ""
      }
    ]
  },
  {
    "url": "/bulk_send_job/list",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Bulk Send Job",
    "typeScriptTag": "bulkSendJob",
    "description": "List Bulk Send Jobs",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "description": "Which page number of the BulkSendJob List to return. Defaults to `1`.",
        "default": 1
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "description": "Number of objects to be returned per page. Must be between `1` and `100`. Default is 20.",
        "default": 20
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "4XX",
        "description": ""
      }
    ]
  },
  {
    "url": "/embedded/edit_url/{template_id}",
    "method": "templateEditUrl",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Embedded",
    "typeScriptTag": "embedded",
    "description": "Get Embedded Template Edit URL",
    "parameters": [
      {
        "name": "templateId",
        "schema": "string",
        "required": true,
        "description": "The id of the template to edit.",
        "example": "f57db65d3f933b5316d398057a36176831451a35"
      },
      {
        "name": "allow_edit_ccs",
        "schema": "boolean",
        "description": "",
        "default": false
      },
      {
        "name": "cc_roles",
        "schema": "array",
        "description": ""
      },
      {
        "name": "editor_options",
        "schema": "object",
        "description": ""
      },
      {
        "name": "force_signer_roles",
        "schema": "boolean",
        "description": "",
        "default": false
      },
      {
        "name": "force_subject_message",
        "schema": "boolean",
        "description": "",
        "default": false
      },
      {
        "name": "merge_fields",
        "schema": "array",
        "description": ""
      },
      {
        "name": "preview_only",
        "schema": "boolean",
        "description": "",
        "default": false
      },
      {
        "name": "show_preview",
        "schema": "boolean",
        "description": "",
        "default": false
      },
      {
        "name": "show_progress_stepper",
        "schema": "boolean",
        "description": "",
        "default": true
      },
      {
        "name": "test_mode",
        "schema": "boolean",
        "description": "",
        "default": false
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "4XX",
        "description": ""
      }
    ]
  },
  {
    "url": "/embedded/sign_url/{signature_id}",
    "method": "getSignUrl",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Embedded",
    "typeScriptTag": "embedded",
    "description": "Get Embedded Sign URL",
    "parameters": [
      {
        "name": "signatureId",
        "schema": "string",
        "required": true,
        "description": "The id of the signature to get a signature url for.",
        "example": "50e3542f738adfa7ddd4cbd4c00d2a8ab6e4194b"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "4XX",
        "description": ""
      }
    ]
  },
  {
    "url": "/oauth/token",
    "method": "exchangeCodeForToken",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "OAuth",
    "typeScriptTag": "oAuth",
    "description": "OAuth Token Generate",
    "parameters": [
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
        "name": "code",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CODE"
      },
      {
        "name": "grant_type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "GRANT_TYPE",
        "default": "authorization_code"
      },
      {
        "name": "state",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "STATE"
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
    "url": "/oauth/token?refresh",
    "method": "tokenRefreshPost",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "OAuth",
    "typeScriptTag": "oAuth",
    "description": "OAuth Token Refresh",
    "parameters": [
      {
        "name": "grant_type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "GRANT_TYPE",
        "default": "refresh_token"
      },
      {
        "name": "refresh_token",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "REFRESH_TOKEN"
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
    "url": "/report/create",
    "method": "generateEmailLink",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Report",
    "typeScriptTag": "report",
    "description": "Create Report",
    "parameters": [
      {
        "name": "end_date",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "END_DATE"
      },
      {
        "name": "report_type",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "start_date",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "START_DATE"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "4XX",
        "description": ""
      }
    ]
  },
  {
    "url": "/signature_request/bulk_create_embedded_with_template",
    "method": "bulkCreateEmbeddedWithTemplate",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Signature Request",
    "typeScriptTag": "signatureRequest",
    "description": "Embedded Bulk Send with Template",
    "parameters": [
      {
        "name": "title",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "template_ids",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "signer_file",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "signer_list",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "allow_decline",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "ccs",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "client_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CLIENT_ID"
      },
      {
        "name": "custom_fields",
        "schema": "array",
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
        "name": "metadata",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "signing_redirect_url",
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
        "name": "test_mode",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "4XX",
        "description": ""
      }
    ]
  },
  {
    "url": "/signature_request/bulk_send_with_template",
    "method": "bulkSendWithTemplate",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Signature Request",
    "typeScriptTag": "signatureRequest",
    "description": "Bulk Send with Template",
    "parameters": [
      {
        "name": "title",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "template_ids",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "signer_file",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "signer_list",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "allow_decline",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "ccs",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "client_id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "custom_fields",
        "schema": "array",
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
        "name": "metadata",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "signing_redirect_url",
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
        "name": "test_mode",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "4XX",
        "description": ""
      }
    ]
  },
  {
    "url": "/signature_request/cancel/{signature_request_id}",
    "method": "cancelIncomplete",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Signature Request",
    "typeScriptTag": "signatureRequest",
    "description": "Cancel Incomplete Signature Request",
    "parameters": [
      {
        "name": "signatureRequestId",
        "schema": "string",
        "required": true,
        "description": "The id of the incomplete SignatureRequest to cancel.",
        "example": "fa5c8a0b0f492d768749333ad6fcc214c111e967"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "4XX",
        "description": ""
      }
    ]
  },
  {
    "url": "/signature_request/create_embedded",
    "method": "createEmbedded",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Signature Request",
    "typeScriptTag": "signatureRequest",
    "description": "Create Embedded Signature Request",
    "parameters": [
      {
        "name": "title",
        "schema": "string",
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
        "name": "file_urls",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "signers",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "grouped_signers",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "allow_decline",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "allow_reassign",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "attachments",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "cc_email_addresses",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "client_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CLIENT_ID"
      },
      {
        "name": "custom_fields",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "field_options",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "form_field_groups",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "form_field_rules",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "form_fields_per_document",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "hide_text_tags",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "message",
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
        "name": "signing_options",
        "schema": "object",
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
        "name": "test_mode",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "use_text_tags",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "populate_auto_fill_fields",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "expires_at",
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
        "statusCode": "4XX",
        "description": ""
      }
    ]
  },
  {
    "url": "/signature_request/create_embedded_with_template",
    "method": "createEmbeddedWithTemplate",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Signature Request",
    "typeScriptTag": "signatureRequest",
    "description": "Create Embedded Signature Request with Template",
    "parameters": [
      {
        "name": "title",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "template_ids",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "allow_decline",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "ccs",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "client_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CLIENT_ID"
      },
      {
        "name": "custom_fields",
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
        "name": "file_urls",
        "schema": "array",
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
        "name": "metadata",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "signers",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "signing_options",
        "schema": "object",
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
        "name": "test_mode",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "populate_auto_fill_fields",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "4XX",
        "description": ""
      }
    ]
  },
  {
    "url": "/signature_request/files/{signature_request_id}",
    "method": "downloadFiles",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Signature Request",
    "typeScriptTag": "signatureRequest",
    "description": "Download Files",
    "parameters": [
      {
        "name": "signatureRequestId",
        "schema": "string",
        "required": true,
        "description": "The id of the SignatureRequest to retrieve.",
        "example": "fa5c8a0b0f492d768749333ad6fcc214c111e967"
      },
      {
        "name": "fileType",
        "schema": "string",
        "description": "Set to `pdf` for a single merged document or `zip` for a collection of individual documents.",
        "default": "pdf"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "4XX",
        "description": ""
      }
    ]
  },
  {
    "url": "/signature_request/files_as_data_uri/{signature_request_id}",
    "method": "downloadFilesAsDataUri",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Signature Request",
    "typeScriptTag": "signatureRequest",
    "description": "Download Files as Data Uri",
    "parameters": [
      {
        "name": "signatureRequestId",
        "schema": "string",
        "required": true,
        "description": "The id of the SignatureRequest to retrieve.",
        "example": "fa5c8a0b0f492d768749333ad6fcc214c111e967"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "4XX",
        "description": ""
      }
    ]
  },
  {
    "url": "/signature_request/files_as_file_url/{signature_request_id}",
    "method": "downloadAsFileUrl",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Signature Request",
    "typeScriptTag": "signatureRequest",
    "description": "Download Files as File Url",
    "parameters": [
      {
        "name": "signatureRequestId",
        "schema": "string",
        "required": true,
        "description": "The id of the SignatureRequest to retrieve.",
        "example": "fa5c8a0b0f492d768749333ad6fcc214c111e967"
      },
      {
        "name": "forceDownload",
        "schema": "integer",
        "description": "By default when opening the `file_url` a browser will download the PDF and save it locally. When set to `0` the PDF file will be displayed in the browser.",
        "default": 1
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "4XX",
        "description": ""
      }
    ]
  },
  {
    "url": "/signature_request/{signature_request_id}",
    "method": "getStatus",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Signature Request",
    "typeScriptTag": "signatureRequest",
    "description": "Get Signature Request",
    "parameters": [
      {
        "name": "signatureRequestId",
        "schema": "string",
        "required": true,
        "description": "The id of the SignatureRequest to retrieve.",
        "example": "fa5c8a0b0f492d768749333ad6fcc214c111e967"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "4XX",
        "description": ""
      }
    ]
  },
  {
    "url": "/signature_request/list",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Signature Request",
    "typeScriptTag": "signatureRequest",
    "description": "List Signature Requests",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "description": "Which account to return SignatureRequests for. Must be a team member. Use `all` to indicate all team members. Defaults to your account."
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "Which page number of the SignatureRequest List to return. Defaults to `1`.",
        "example": 1,
        "default": 1
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "description": "Number of objects to be returned per page. Must be between `1` and `100`. Default is `20`.",
        "default": 20
      },
      {
        "name": "query",
        "schema": "string",
        "description": "String that includes search terms and/or fields to be used to filter the SignatureRequest objects."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "4XX",
        "description": ""
      }
    ]
  },
  {
    "url": "/signature_request/release_hold/{signature_request_id}",
    "method": "releaseHold",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Signature Request",
    "typeScriptTag": "signatureRequest",
    "description": "Release On-Hold Signature Request",
    "parameters": [
      {
        "name": "signatureRequestId",
        "schema": "string",
        "required": true,
        "description": "The id of the SignatureRequest to release.",
        "example": "fa5c8a0b0f492d768749333ad6fcc214c111e967"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "4XX",
        "description": ""
      }
    ]
  },
  {
    "url": "/signature_request/remind/{signature_request_id}",
    "method": "sendReminder",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Signature Request",
    "typeScriptTag": "signatureRequest",
    "description": "Send Request Reminder",
    "parameters": [
      {
        "name": "signatureRequestId",
        "schema": "string",
        "required": true,
        "description": "The id of the SignatureRequest to send a reminder for.",
        "example": "fa5c8a0b0f492d768749333ad6fcc214c111e967"
      },
      {
        "name": "email_address",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EMAIL_ADDRESS"
      },
      {
        "name": "name",
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
        "statusCode": "4XX",
        "description": ""
      }
    ]
  },
  {
    "url": "/signature_request/remove/{signature_request_id}",
    "method": "removeAccess",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Signature Request",
    "typeScriptTag": "signatureRequest",
    "description": "Remove Signature Request Access",
    "parameters": [
      {
        "name": "signatureRequestId",
        "schema": "string",
        "required": true,
        "description": "The id of the SignatureRequest to remove.",
        "example": "fa5c8a0b0f492d768749333ad6fcc214c111e967"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "4XX",
        "description": ""
      }
    ]
  },
  {
    "url": "/signature_request/send",
    "method": "createAndSend",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Signature Request",
    "typeScriptTag": "signatureRequest",
    "description": "Send Signature Request",
    "parameters": [
      {
        "name": "title",
        "schema": "string",
        "description": ""
      },
      {
        "name": "files",
        "schema": "array",
        "description": ""
      },
      {
        "name": "file_urls",
        "schema": "array",
        "description": ""
      },
      {
        "name": "signers",
        "schema": "array",
        "description": ""
      },
      {
        "name": "grouped_signers",
        "schema": "array",
        "description": ""
      },
      {
        "name": "allow_decline",
        "schema": "boolean",
        "description": "",
        "default": false
      },
      {
        "name": "allow_reassign",
        "schema": "boolean",
        "description": "",
        "default": false
      },
      {
        "name": "attachments",
        "schema": "array",
        "description": ""
      },
      {
        "name": "cc_email_addresses",
        "schema": "array",
        "description": ""
      },
      {
        "name": "client_id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "custom_fields",
        "schema": "array",
        "description": ""
      },
      {
        "name": "field_options",
        "schema": "object",
        "description": ""
      },
      {
        "name": "form_field_groups",
        "schema": "array",
        "description": ""
      },
      {
        "name": "form_field_rules",
        "schema": "array",
        "description": ""
      },
      {
        "name": "form_fields_per_document",
        "schema": "array",
        "description": ""
      },
      {
        "name": "hide_text_tags",
        "schema": "boolean",
        "description": "",
        "default": false
      },
      {
        "name": "is_eid",
        "schema": "boolean",
        "description": "",
        "default": false
      },
      {
        "name": "message",
        "schema": "string",
        "description": ""
      },
      {
        "name": "metadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "signing_options",
        "schema": "object",
        "description": ""
      },
      {
        "name": "signing_redirect_url",
        "schema": "string",
        "description": ""
      },
      {
        "name": "subject",
        "schema": "string",
        "description": ""
      },
      {
        "name": "test_mode",
        "schema": "boolean",
        "description": "",
        "default": false
      },
      {
        "name": "use_text_tags",
        "schema": "boolean",
        "description": "",
        "default": false
      },
      {
        "name": "expires_at",
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
        "statusCode": "4XX",
        "description": ""
      }
    ]
  },
  {
    "url": "/signature_request/send_with_template",
    "method": "createAndSendWithTemplate",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Signature Request",
    "typeScriptTag": "signatureRequest",
    "description": "Send with Template",
    "parameters": [
      {
        "name": "title",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "template_ids",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "allow_decline",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "ccs",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "client_id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "custom_fields",
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
        "name": "file_urls",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "is_eid",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "message",
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
        "name": "signers",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "signing_options",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "signing_redirect_url",
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
        "name": "test_mode",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "4XX",
        "description": ""
      }
    ]
  },
  {
    "url": "/signature_request/update/{signature_request_id}",
    "method": "updateSignerDetails",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Signature Request",
    "typeScriptTag": "signatureRequest",
    "description": "Update Signature Request",
    "parameters": [
      {
        "name": "signatureRequestId",
        "schema": "string",
        "required": true,
        "description": "The id of the SignatureRequest to update.",
        "example": "fa5c8a0b0f492d768749333ad6fcc214c111e967"
      },
      {
        "name": "email_address",
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
        "name": "signature_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SIGNATURE_ID"
      },
      {
        "name": "expires_at",
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
        "statusCode": "4XX",
        "description": ""
      }
    ]
  },
  {
    "url": "/team/add_member",
    "method": "addMember",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Team",
    "typeScriptTag": "team",
    "description": "Add User to Team",
    "parameters": [
      {
        "name": "teamId",
        "schema": "string",
        "required": false,
        "description": "The id of the team.",
        "example": "4fea99bfcf2b26bfccf6cea3e127fb8bb74d8d9c"
      },
      {
        "name": "account_id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "email_address",
        "schema": "string",
        "description": ""
      },
      {
        "name": "role",
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
        "statusCode": "4XX",
        "description": ""
      }
    ]
  },
  {
    "url": "/team/create",
    "method": "createNewTeam",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Team",
    "typeScriptTag": "team",
    "description": "Create Team",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "description": "",
        "default": "Untitled Team"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "4XX",
        "description": ""
      }
    ]
  },
  {
    "url": "/team/destroy",
    "method": "deleteTeam",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Team",
    "typeScriptTag": "team",
    "description": "Delete Team",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "successful operation"
      },
      {
        "statusCode": "4XX",
        "description": ""
      }
    ]
  },
  {
    "url": "/team",
    "method": "getInfo",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Team",
    "typeScriptTag": "team",
    "description": "Get Team",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "4XX",
        "description": ""
      }
    ]
  },
  {
    "url": "/team",
    "method": "updateName",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Team",
    "typeScriptTag": "team",
    "description": "Update Team",
    "parameters": [
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
        "statusCode": "4XX",
        "description": ""
      }
    ]
  },
  {
    "url": "/team/info",
    "method": "getInfo",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Team",
    "typeScriptTag": "team",
    "description": "Get Team Info",
    "parameters": [
      {
        "name": "teamId",
        "schema": "string",
        "required": false,
        "description": "The id of the team.",
        "example": "4fea99bfcf2b26bfccf6cea3e127fb8bb74d8d9c"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "4XX",
        "description": ""
      }
    ]
  },
  {
    "url": "/team/invites",
    "method": "listInvites",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Team",
    "typeScriptTag": "team",
    "description": "List Team Invites",
    "parameters": [
      {
        "name": "emailAddress",
        "schema": "string",
        "required": false,
        "description": "The email address for which to display the team invites."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "4XX",
        "description": ""
      }
    ]
  },
  {
    "url": "/team/members/{team_id}",
    "method": "listMembers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Team",
    "typeScriptTag": "team",
    "description": "List Team Members",
    "parameters": [
      {
        "name": "teamId",
        "schema": "string",
        "required": true,
        "description": "The id of the team that a member list is being requested from.",
        "example": "4fea99bfcf2b26bfccf6cea3e127fb8bb74d8d9c"
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "Which page number of the team member list to return. Defaults to `1`.",
        "default": 1
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "description": "Number of objects to be returned per page. Must be between `1` and `100`. Default is `20`.",
        "default": 20
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "4XX",
        "description": ""
      }
    ]
  },
  {
    "url": "/team/remove_member",
    "method": "removeMember",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Team",
    "typeScriptTag": "team",
    "description": "Remove User from Team",
    "parameters": [
      {
        "name": "account_id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "email_address",
        "schema": "string",
        "description": ""
      },
      {
        "name": "new_owner_email_address",
        "schema": "string",
        "description": ""
      },
      {
        "name": "new_team_id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "new_role",
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
        "statusCode": "4XX",
        "description": ""
      }
    ]
  },
  {
    "url": "/team/sub_teams/{team_id}",
    "method": "listSubTeams",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Team",
    "typeScriptTag": "team",
    "description": "List Sub Teams",
    "parameters": [
      {
        "name": "teamId",
        "schema": "string",
        "required": true,
        "description": "The id of the parent Team.",
        "example": "4fea99bfcf2b26bfccf6cea3e127fb8bb74d8d9c"
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "Which page number of the SubTeam List to return. Defaults to `1`.",
        "default": 1
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "description": "Number of objects to be returned per page. Must be between `1` and `100`. Default is `20`.",
        "default": 20
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "4XX",
        "description": ""
      }
    ]
  },
  {
    "url": "/template/add_user/{template_id}",
    "method": "addUserToTemplate",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Template",
    "typeScriptTag": "template",
    "description": "Add User to Template",
    "parameters": [
      {
        "name": "templateId",
        "schema": "string",
        "required": true,
        "description": "The id of the Template to give the Account access to.",
        "example": "f57db65d3f933b5316d398057a36176831451a35"
      },
      {
        "name": "account_id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "email_address",
        "schema": "string",
        "description": ""
      },
      {
        "name": "skip_notification",
        "schema": "boolean",
        "description": "",
        "default": false
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "4XX",
        "description": ""
      }
    ]
  },
  {
    "url": "/template/create",
    "method": "createTemplate",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Template",
    "typeScriptTag": "template",
    "description": "Create  Template",
    "parameters": [
      {
        "name": "title",
        "schema": "string",
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
        "name": "file_urls",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "allow_reassign",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "attachments",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "cc_roles",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "client_id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "field_options",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "form_field_groups",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "form_field_rules",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "form_fields_per_document",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "merge_fields",
        "schema": "array",
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
        "name": "metadata",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "signer_roles",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "subject",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "test_mode",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "use_preexisting_fields",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "4XX",
        "description": ""
      }
    ]
  },
  {
    "url": "/template/create_embedded_draft",
    "method": "createEmbeddedDraft",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Template",
    "typeScriptTag": "template",
    "description": "Create Embedded Template Draft",
    "parameters": [
      {
        "name": "title",
        "schema": "string",
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
        "name": "file_urls",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "allow_ccs",
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
        "default": false
      },
      {
        "name": "attachments",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "cc_roles",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "client_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CLIENT_ID"
      },
      {
        "name": "editor_options",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "field_options",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "force_signer_roles",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "force_subject_message",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "form_field_groups",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "form_field_rules",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "form_fields_per_document",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "merge_fields",
        "schema": "array",
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
        "name": "metadata",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "show_preview",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "show_progress_stepper",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": true
      },
      {
        "name": "signer_roles",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "skip_me_now",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "subject",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "test_mode",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "use_preexisting_fields",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "4XX",
        "description": ""
      }
    ]
  },
  {
    "url": "/template/delete/{template_id}",
    "method": "completelyDelete",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Template",
    "typeScriptTag": "template",
    "description": "Delete Template",
    "parameters": [
      {
        "name": "templateId",
        "schema": "string",
        "required": true,
        "description": "The id of the Template to delete.",
        "example": "f57db65d3f933b5316d398057a36176831451a35"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "4XX",
        "description": ""
      }
    ]
  },
  {
    "url": "/template/files/{template_id}",
    "method": "getFiles",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Template",
    "typeScriptTag": "template",
    "description": "Get Template Files",
    "parameters": [
      {
        "name": "templateId",
        "schema": "string",
        "required": true,
        "description": "The id of the template files to retrieve.",
        "example": "f57db65d3f933b5316d398057a36176831451a35"
      },
      {
        "name": "fileType",
        "schema": "string",
        "description": "Set to `pdf` for a single merged document or `zip` for a collection of individual documents."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "4XX",
        "description": ""
      }
    ]
  },
  {
    "url": "/template/files_as_data_uri/{template_id}",
    "method": "getDataUri",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Template",
    "typeScriptTag": "template",
    "description": "Get Template Files as Data Uri",
    "parameters": [
      {
        "name": "templateId",
        "schema": "string",
        "required": true,
        "description": "The id of the template files to retrieve.",
        "example": "f57db65d3f933b5316d398057a36176831451a35"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "4XX",
        "description": ""
      }
    ]
  },
  {
    "url": "/template/files_as_file_url/{template_id}",
    "method": "getFilesAsUrl",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Template",
    "typeScriptTag": "template",
    "description": "Get Template Files as File Url",
    "parameters": [
      {
        "name": "templateId",
        "schema": "string",
        "required": true,
        "description": "The id of the template files to retrieve.",
        "example": "f57db65d3f933b5316d398057a36176831451a35"
      },
      {
        "name": "forceDownload",
        "schema": "integer",
        "description": "By default when opening the `file_url` a browser will download the PDF and save it locally. When set to `0` the PDF file will be displayed in the browser.",
        "default": 1
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "4XX",
        "description": ""
      }
    ]
  },
  {
    "url": "/template/{template_id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Template",
    "typeScriptTag": "template",
    "description": "Get Template",
    "parameters": [
      {
        "name": "templateId",
        "schema": "string",
        "required": true,
        "description": "The id of the Template to retrieve.",
        "example": "f57db65d3f933b5316d398057a36176831451a35"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "4XX",
        "description": ""
      }
    ]
  },
  {
    "url": "/template/list",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Template",
    "typeScriptTag": "template",
    "description": "List Templates",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "description": "Which account to return Templates for. Must be a team member. Use `all` to indicate all team members. Defaults to your account."
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "Which page number of the Template List to return. Defaults to `1`.",
        "default": 1
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "description": "Number of objects to be returned per page. Must be between `1` and `100`. Default is `20`.",
        "default": 20
      },
      {
        "name": "query",
        "schema": "string",
        "description": "String that includes search terms and/or fields to be used to filter the Template objects."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "4XX",
        "description": ""
      }
    ]
  },
  {
    "url": "/template/remove_user/{template_id}",
    "method": "removeUser",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Template",
    "typeScriptTag": "template",
    "description": "Remove User from Template",
    "parameters": [
      {
        "name": "templateId",
        "schema": "string",
        "required": true,
        "description": "The id of the Template to remove the Account's access to.",
        "example": "f57db65d3f933b5316d398057a36176831451a35"
      },
      {
        "name": "account_id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "email_address",
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
        "statusCode": "4XX",
        "description": ""
      }
    ]
  },
  {
    "url": "/template/update_files/{template_id}",
    "method": "updateFiles",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Template",
    "typeScriptTag": "template",
    "description": "Update Template Files",
    "parameters": [
      {
        "name": "templateId",
        "schema": "string",
        "required": true,
        "description": "The ID of the template whose files to update.",
        "example": "f57db65d3f933b5316d398057a36176831451a35"
      },
      {
        "name": "client_id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "files",
        "schema": "array",
        "description": ""
      },
      {
        "name": "file_urls",
        "schema": "array",
        "description": ""
      },
      {
        "name": "message",
        "schema": "string",
        "description": ""
      },
      {
        "name": "subject",
        "schema": "string",
        "description": ""
      },
      {
        "name": "test_mode",
        "schema": "boolean",
        "description": "",
        "default": false
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "4XX",
        "description": ""
      }
    ]
  },
  {
    "url": "/unclaimed_draft/create",
    "method": "createNewDraft",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Unclaimed Draft",
    "typeScriptTag": "unclaimedDraft",
    "description": "Create Unclaimed Draft",
    "parameters": [
      {
        "name": "files",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "file_urls",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "allow_decline",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "attachments",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "cc_email_addresses",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "client_id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "custom_fields",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "field_options",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "form_field_groups",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "form_field_rules",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "form_fields_per_document",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "hide_text_tags",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "message",
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
        "name": "show_progress_stepper",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": true
      },
      {
        "name": "signers",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "signing_options",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "signing_redirect_url",
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
        "name": "test_mode",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TYPE"
      },
      {
        "name": "use_preexisting_fields",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "use_text_tags",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "expires_at",
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
        "statusCode": "4XX",
        "description": ""
      }
    ]
  },
  {
    "url": "/unclaimed_draft/create_embedded",
    "method": "createEmbedded",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Unclaimed Draft",
    "typeScriptTag": "unclaimedDraft",
    "description": "Create Embedded Unclaimed Draft",
    "parameters": [
      {
        "name": "files",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "file_urls",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "allow_ccs",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": true
      },
      {
        "name": "allow_decline",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "allow_reassign",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "attachments",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "cc_email_addresses",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "client_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CLIENT_ID"
      },
      {
        "name": "custom_fields",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "editor_options",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "field_options",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "force_signer_page",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "force_subject_message",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "form_field_groups",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "form_field_rules",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "form_fields_per_document",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "hide_text_tags",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "hold_request",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "is_for_embedded_signing",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "message",
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
        "name": "requester_email_address",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "REQUESTER_EMAIL_ADDRESS"
      },
      {
        "name": "requesting_redirect_url",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "show_preview",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "show_progress_stepper",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": true
      },
      {
        "name": "signers",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "signing_options",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "signing_redirect_url",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "skip_me_now",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "subject",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "test_mode",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "type",
        "schema": "string",
        "required": false,
        "description": "",
        "default": "request_signature"
      },
      {
        "name": "use_preexisting_fields",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "use_text_tags",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "populate_auto_fill_fields",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "expires_at",
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
        "statusCode": "4XX",
        "description": ""
      }
    ]
  },
  {
    "url": "/unclaimed_draft/create_embedded_with_template",
    "method": "createEmbeddedWithTemplate",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Unclaimed Draft",
    "typeScriptTag": "unclaimedDraft",
    "description": "Create Embedded Unclaimed Draft with Template",
    "parameters": [
      {
        "name": "title",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "allow_decline",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "allow_reassign",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "ccs",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "client_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CLIENT_ID"
      },
      {
        "name": "custom_fields",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "editor_options",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "field_options",
        "schema": "object",
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
        "name": "file_urls",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "force_signer_roles",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "force_subject_message",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "hold_request",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "is_for_embedded_signing",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "message",
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
        "name": "preview_only",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "requester_email_address",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "REQUESTER_EMAIL_ADDRESS"
      },
      {
        "name": "requesting_redirect_url",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "show_preview",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "show_progress_stepper",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": true
      },
      {
        "name": "signers",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "signing_options",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "signing_redirect_url",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "skip_me_now",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "subject",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "template_ids",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "test_mode",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "populate_auto_fill_fields",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "allow_ccs",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "4XX",
        "description": ""
      }
    ]
  },
  {
    "url": "/unclaimed_draft/edit_and_resend/{signature_request_id}",
    "method": "editResend",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Unclaimed Draft",
    "typeScriptTag": "unclaimedDraft",
    "description": "Edit and Resend Unclaimed Draft",
    "parameters": [
      {
        "name": "signatureRequestId",
        "schema": "string",
        "required": true,
        "description": "The ID of the signature request to edit and resend.",
        "example": "fa5c8a0b0f492d768749333ad6fcc214c111e967"
      },
      {
        "name": "client_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CLIENT_ID"
      },
      {
        "name": "editor_options",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "is_for_embedded_signing",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "requester_email_address",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "requesting_redirect_url",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "show_progress_stepper",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": true
      },
      {
        "name": "signing_redirect_url",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "test_mode",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "4XX",
        "description": ""
      }
    ]
  }
]
    }
      language="TypeScript"
      apiTitle="Dropbox Sign API"
      apiBaseUrl="https://api.hellosign.com/v3"
      apiVersion="3.0.0"
      endpoints={53}
      sdkMethods={57}
      schemas={182}
      parameters={369}
      difficulty="Hard"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/dropbox/sign/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/dropbox/sign/openapi.yaml"
      developerDocumentation="developers.hellosign.com/"
    />
  );
}
  