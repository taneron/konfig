import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function SpotDraftTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="spot-draft-typescript-sdk"
      metaDescription={`Businesses like Notion, ChargeBee, Turing, Airbnb, CRED, and more trust SpotDraft to help:

- their in-house legal team automate repetitive, mind-numbing aspects of contracting and free up time so they can focus on high-leverage work.
- their business teams close more contracts on their own without depending on legal for every small edit and review.
- bring more speed, visibility, efficiency & structure to the entire contracting process, and more.

Founded by a Harvard Law School lawyer and two Carnegie Mellon computer scientists, SpotDraft is the perfect co-pilot for your legal team that democratizes legal paperwork and speeds up the contract lifecycle.`}
      company="SpotDraft"
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/spotdraft/logo.png"
      companyKebabCase="spot-draft"
      clientNameCamelCase="spotDraft"
      homepage="spotdraft.com"
      lastUpdated={new Date("2024-03-27T22:43:37.147Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/spotdraft/favicon.png"
      // Missing contactUrl
      contactEmail="help@spotdraft.com"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/spotdraft/imagePreview.png"
      GettingStarted={GettingStarted}
      FirstRequest={FirstRequest}
      categories={["doc_management","legal","contract_management_software","contract_lifecycle_management","clm"]}
      methods={[
  {
    "url": "/v1/public/auth/roles",
    "method": "getRoles",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "V1 User APIs",
    "typeScriptTag": "v1UserApIs",
    "description": "Get Roles",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/public/auth/users",
    "method": "getUserList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "V1 User APIs",
    "typeScriptTag": "v1UserApIs",
    "description": "Get User List",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "description": "The page to return. Page numbers start at 1.",
        "default": 1
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The number of items to return per page.",
        "default": 10
      },
      {
        "name": "userEmail",
        "schema": "string",
        "required": false,
        "description": "User email address for which that user list should be filtered. Please make sure that the value is url encoded. So for example, if the email address is `abc+123@xyz.com` the value passed should be `abc%2B123%40xyz.com`."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Invalid page number or page limit too big"
      }
    ]
  },
  {
    "url": "/v1/public/auth/users",
    "method": "createUser",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "V1 User APIs",
    "typeScriptTag": "v1UserApIs",
    "description": "Create User",
    "parameters": [
      {
        "name": "username",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERNAME"
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
        "name": "password",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "roles",
        "schema": "array",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "The actual results."
      },
      {
        "statusCode": "400",
        "description": "Invalid Request body or User already exists"
      }
    ]
  },
  {
    "url": "/v1/public/auth/users/{user_id}",
    "method": "deactivateUser",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "V1 User APIs",
    "typeScriptTag": "v1UserApIs",
    "description": "Deactivate a User",
    "parameters": [
      {
        "name": "userId",
        "schema": "integer",
        "required": true,
        "description": "ID of the user as returned by the List Users API.",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "User deactivated"
      },
      {
        "statusCode": "400",
        "description": "User already deactivated"
      }
    ]
  },
  {
    "url": "/v1/public/auth/users/{user_id}",
    "method": "updateUserRoles",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "V1 User APIs",
    "typeScriptTag": "v1UserApIs",
    "description": "Update User roles",
    "parameters": [
      {
        "name": "userId",
        "schema": "integer",
        "required": true,
        "description": "ID of the user as returned by the List Users API.",
        "example": 0
      },
      {
        "name": "roles",
        "schema": "array",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The actual results."
      },
      {
        "statusCode": "400",
        "description": "Invalid Role ID"
      }
    ]
  },
  {
    "url": "/v1/public/contracts",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "V1 Contract APIs",
    "typeScriptTag": "v1ContractApIs",
    "description": "Get Contract List",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "description": "The page to return. Page numbers start at 1.",
        "default": 1
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The number of items to return per page.",
        "default": 10
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
    "url": "/v1/public/contracts",
    "method": "createContract",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "V1 Contract APIs",
    "typeScriptTag": "v1ContractApIs",
    "description": "Create Contract",
    "parameters": [
      {
        "name": "contract_template_id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "contract_data",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "counter_party_details",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "external_metadata",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "entity_reference_id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "workflow_config",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "send_to_counterparty_config",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "contract_name",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "signatories",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "is_embedded_contract",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "The list of Contracts"
      }
    ]
  },
  {
    "url": "/v1/public/contracts/by_external_metadata/{external_metadata_id}",
    "method": "getByExternalMetadataId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "V1 Contract APIs",
    "typeScriptTag": "v1ContractApIs",
    "description": "Get Contract by External Metadata ID",
    "parameters": [
      {
        "name": "externalMetadataId",
        "schema": "string",
        "required": true,
        "description": "External Metadata ID of the Contract. This can be used to search for contracts based on an ID specified when creating the contract using the external API.",
        "example": "EXTERNAL_METADATA_ID"
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
    "url": "/v1/public/contracts/{contract_id}/download",
    "method": "downloadContractFile",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "V1 Contract APIs",
    "typeScriptTag": "v1ContractApIs",
    "description": "Download Contract File",
    "parameters": [
      {
        "name": "contractId",
        "schema": "integer",
        "required": true,
        "description": "ID of the Contract.",
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
    "url": "/v1/public/contracts/{contract_id}/download_link",
    "method": "createDownloadLink",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "V1 Contract APIs",
    "typeScriptTag": "v1ContractApIs",
    "description": "Get Contract Download Link",
    "parameters": [
      {
        "name": "contractId",
        "schema": "integer",
        "required": true,
        "description": "ID of the Contract.",
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
    "url": "/v1/public/contracts/{contract_id}/send_to_counterparties",
    "method": "sendToCounterparties",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "V1 Contract APIs",
    "typeScriptTag": "v1ContractApIs",
    "description": "Send Contract to Counterparties",
    "parameters": [
      {
        "name": "contractId",
        "schema": "integer",
        "required": true,
        "description": "ID of the Contract.",
        "example": 0
      },
      {
        "name": "to_emails",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "cc_emails",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "bcc_emails",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "attachment_formats",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "extra_attachments",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "custom_message",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "subject",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      }
    ]
  },
  {
    "url": "/v1/public/contracts/{contract_id}/status",
    "method": "getStatus",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "V1 Contract APIs",
    "typeScriptTag": "v1ContractApIs",
    "description": "Get Contract Status",
    "parameters": [
      {
        "name": "contractId",
        "schema": "integer",
        "required": true,
        "description": "ID of the Contract.",
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
    "url": "/v1/public/templates/{template_id}/metadata",
    "method": "getMetadata",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "V1 Template APIs",
    "typeScriptTag": "v1TemplateApIs",
    "description": "Get Template Metadata",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "SD Base Model from which all other Models should inherit"
      }
    ]
  },
  {
    "url": "/v2.1/public/auth/roles/{role_id}/members",
    "method": "deleteRoleMember",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "V2.1 User APIs",
    "typeScriptTag": "v21UserApIs",
    "description": "Delete Role Member",
    "parameters": [
      {
        "name": "roleId",
        "schema": "integer",
        "required": true,
        "description": "Use the [Get Active Roles](#tag/V2.1-User-APIs/operation/v2.1_public_auth_roles_list) API to get the role ID.",
        "example": 0
      },
      {
        "name": "user_ids_to_remove",
        "schema": "array",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Delete Role Member"
      }
    ]
  },
  {
    "url": "/v2.1/public/auth/roles/{role_id}/members",
    "method": "addRoleMember",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "V2.1 User APIs",
    "typeScriptTag": "v21UserApIs",
    "description": "Add Role Member",
    "parameters": [
      {
        "name": "roleId",
        "schema": "integer",
        "required": true,
        "description": "Use the [Get Active Roles](#tag/V2.1-User-APIs/operation/v2.1_public_auth_roles_list) API to get the role ID.",
        "example": 0
      },
      {
        "name": "user_ids_to_add",
        "schema": "array",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The updated members of the role."
      }
    ]
  },
  {
    "url": "/v2.1/public/contract_types/{contract_type_id}/entities",
    "method": "listEntities",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "V2.1 Contract Type APIs",
    "typeScriptTag": "v21ContractTypeApIs",
    "description": "List Contract Type Entities",
    "parameters": [
      {
        "name": "contractTypeId",
        "schema": "integer",
        "required": true,
        "description": "ID of the Contract Type.",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The list of entities for the contract type"
      }
    ]
  },
  {
    "url": "/v2.1/public/contracts/by_external_metadata/{external_metadata_id}",
    "method": "getByExternalMetadataId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "V2.1 Contract APIs",
    "typeScriptTag": "v21ContractApIs",
    "description": "Get Contract by External Metadata ID",
    "parameters": [
      {
        "name": "externalMetadataId",
        "schema": "string",
        "required": true,
        "description": "External Metadata ID of the Contract. This can be used to search for contracts based on an ID specified when creating the contract using the external API.",
        "example": "EXTERNAL_METADATA_ID"
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
    "url": "/v2.1/public/contracts/{composite_id}/download",
    "method": "downloadContractFile",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "V2.1 Contract APIs",
    "typeScriptTag": "v21ContractApIs",
    "description": "Download Contract File",
    "parameters": [
      {
        "name": "compositeId",
        "schema": "string",
        "required": true,
        "description": "ID of the Contract. Should be of the form T-123 or H-123. T stands for Template contracts and H stands for Historical contracts.",
        "example": "COMPOSITE_ID"
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
    "url": "/v2.1/public/contracts/{composite_id}/download_link",
    "method": "getDownloadLink",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "V2.1 Contract APIs",
    "typeScriptTag": "v21ContractApIs",
    "description": "Get Contract Download Link",
    "parameters": [
      {
        "name": "contractId",
        "schema": "string",
        "required": true,
        "description": "ID of the Contract. Should be of the form T-123 or H-123. T stands for Template contracts and H stands for Historical contracts.",
        "example": "CONTRACT_ID"
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
    "url": "/v2.1/public/contracts/{composite_id}/key_pointers/bulk",
    "method": "bulkUpdateKeyPointers",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "V2.1 Contract APIs",
    "typeScriptTag": "v21ContractApIs",
    "description": "Bulk Update Key Pointer Value",
    "parameters": [
      {
        "name": "contractId",
        "schema": "string",
        "required": true,
        "description": "ID of the Contract. Should be of the form T-123 or H-123. T stands for Template contracts and H stands for Historical contracts.",
        "example": "CONTRACT_ID"
      },
      {
        "name": "key_pointers",
        "schema": "array",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "SD Base Model from which all other Models should inherit"
      }
    ]
  },
  {
    "url": "/v2.1/public/contracts/{composite_id}/send_to_counterparties",
    "method": "sendToCounterparties",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "V2.1 Contract APIs",
    "typeScriptTag": "v21ContractApIs",
    "description": "Send Contract to Counterparties",
    "parameters": [
      {
        "name": "contractId",
        "schema": "string",
        "required": true,
        "description": "ID of the Contract. Should be of the form T-123 or H-123. T stands for Template contracts and H stands for Historical contracts.",
        "example": "CONTRACT_ID"
      },
      {
        "name": "to_emails",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "cc_emails",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "bcc_emails",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "attachment_formats",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "extra_attachments",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "custom_message",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "subject",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      }
    ]
  },
  {
    "url": "/v2.1/public/contracts/{composite_id}/unmark_for_execution",
    "method": "unmarkForExecution",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "V2.1 Contract APIs",
    "typeScriptTag": "v21ContractApIs",
    "description": "Unmarks the contract for execution",
    "parameters": [
      {
        "name": "compositeId",
        "schema": "string",
        "required": true,
        "description": "ID of the Contract. Should be of the form T-123 or H-123. T stands for Template contracts and H stands for Historical contracts.",
        "example": "COMPOSITE_ID"
      },
      {
        "name": "note",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      }
    ]
  },
  {
    "url": "/v2.1/public/contracts/{contract_id}/contract_data",
    "method": "updateContractData",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "V2.1 Contract APIs",
    "typeScriptTag": "v21ContractApIs",
    "description": "Update Contract Data",
    "parameters": [
      {
        "name": "userEmail",
        "schema": "string",
        "required": false,
        "description": "The email address of the user to act as (when using client-secret authentication). This header attributes actions taken using the API to the given user."
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
        "description": "SD Base Model from which all other Models should inherit"
      },
      {
        "statusCode": "400",
        "description": "body"
      }
    ]
  },
  {
    "url": "/v2.1/public/contracts/{contract_id}/external_metadata",
    "method": "createOrUpdateExternalMetadata",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "V2.1 Contract APIs",
    "typeScriptTag": "v21ContractApIs",
    "description": "Create or Update Contract External Metadata",
    "parameters": [
      {
        "name": "external_metadata",
        "schema": "object",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "body"
      }
    ]
  },
  {
    "url": "/v2.1/public/contracts/{contract_id}/key_pointers",
    "method": "getKeyPointers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "V2.1 Contract APIs",
    "typeScriptTag": "v21ContractApIs",
    "description": "Get Key Pointers",
    "parameters": [
      {
        "name": "contractId",
        "schema": "string",
        "required": true,
        "description": "ID of the Contract. Should be of the form T-123 or H-123. T stands for Template contracts and H stands for Historical contracts.",
        "example": "CONTRACT_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "SD Base Model from which all other Models should inherit"
      }
    ]
  },
  {
    "url": "/v2.1/public/contracts/{contract_id}/key_pointers/{contract_key_pointer_id}",
    "method": "updateKeyPointerValue",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "V2.1 Contract APIs",
    "typeScriptTag": "v21ContractApIs",
    "description": "Update Key Pointer Value",
    "parameters": [
      {
        "name": "contractId",
        "schema": "string",
        "required": true,
        "description": "ID of the Contract. Should be of the form T-123 or H-123. T stands for Template contracts and H stands for Historical contracts.",
        "example": "CONTRACT_ID"
      },
      {
        "name": "contractKeyPointerId",
        "schema": "string",
        "required": true,
        "description": "ID of the contract key pointer value.",
        "example": "CONTRACT_KEY_POINTER_ID"
      },
      {
        "name": "value",
        "schema": "object",
        "required": true,
        "description": "",
        "example": {
          "type": "MONTHS",
          "value": 6
        }
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "SD Base Model from which all other Models should inherit"
      }
    ]
  },
  {
    "url": "/v2.1/public/contracts/{contract_id}/notes",
    "method": "getContractNotes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "V2.1 Contract APIs",
    "typeScriptTag": "v21ContractApIs",
    "description": "Get Contract Notes",
    "parameters": [
      {
        "name": "contractId",
        "schema": "string",
        "required": true,
        "description": "ID of the Contract. Should be of the form T-123 or H-123. T stands for Template contracts and H stands for Historical contracts.",
        "example": "CONTRACT_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "SD Base Model from which all other Models should inherit"
      }
    ]
  },
  {
    "url": "/v2.1/public/contracts/{contract_id}/notes/{note_id}",
    "method": "updateContractNote",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "V2.1 Contract APIs",
    "typeScriptTag": "v21ContractApIs",
    "description": "Update Contract Note",
    "parameters": [
      {
        "name": "contractId",
        "schema": "string",
        "required": true,
        "description": "ID of the Contract. Should be of the form T-123 or H-123. T stands for Template contracts and H stands for Historical contracts.",
        "example": "CONTRACT_ID"
      },
      {
        "name": "keyPointerId",
        "schema": "string",
        "required": true,
        "description": "ID of the key pointer value.",
        "example": "KEY_POINTER_ID"
      },
      {
        "name": "userEmail",
        "schema": "string",
        "required": false,
        "description": "The email address of the user to act as (when using client-secret authentication). This header attributes actions taken using the API to the given user."
      },
      {
        "name": "note_tag",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "text",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TEXT"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "SD Base Model from which all other Models should inherit"
      }
    ]
  },
  {
    "url": "/v2.1/public/contracts/{contract_id}/status",
    "method": "getStatus",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "V2.1 Contract APIs",
    "typeScriptTag": "v21ContractApIs",
    "description": "Get Contract Status",
    "parameters": [
      {
        "name": "contractId",
        "schema": "string",
        "required": true,
        "description": "ID of the Contract. Should be of the form T-123 or H-123. T stands for Template contracts and H stands for Historical contracts.",
        "example": "CONTRACT_ID"
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
    "url": "/v2.1/public/counter_parties/{counterparty_id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "V2.1 Counterparty APIs",
    "typeScriptTag": "v21CounterpartyApIs",
    "description": "Get Counterparty",
    "parameters": [
      {
        "name": "counterpartyId",
        "schema": "integer",
        "required": true,
        "description": "ID of the Counterparty.",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "SD Base Model from which all other Models should inherit"
      }
    ]
  },
  {
    "url": "/v2.1/public/counter_parties/{counterparty_id}",
    "method": "updateCounterpartyDetails",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "V2.1 Counterparty APIs",
    "typeScriptTag": "v21CounterpartyApIs",
    "description": "Update Counterparty",
    "parameters": [
      {
        "name": "counterpartyId",
        "schema": "integer",
        "required": true,
        "description": "ID of the Counterparty.",
        "example": 0
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "brand_name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "custom_fields",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "SD Base Model from which all other Models should inherit"
      }
    ]
  },
  {
    "url": "/v2.1/public/counter_parties/{counterparty_id}/contacts",
    "method": "listCounterpartyContacts",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "V2.1 Counterparty APIs",
    "typeScriptTag": "v21CounterpartyApIs",
    "description": "List Counterparty Contacts",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "description": "The page to return. Page numbers start at 1.",
        "default": 1
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The number of items to return per page.",
        "default": 10
      },
      {
        "name": "counterpartyId",
        "schema": "integer",
        "required": true,
        "description": "ID of the Counterparty.",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "SD Base Model from which all other Models should inherit"
      }
    ]
  },
  {
    "url": "/v2.1/public/counter_parties/{counterparty_id}/contacts",
    "method": "createContact",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "V2.1 Counterparty APIs",
    "typeScriptTag": "v21CounterpartyApIs",
    "description": "Create Counterparty Contact",
    "parameters": [
      {
        "name": "counterpartyId",
        "schema": "integer",
        "required": true,
        "description": "ID of the Counterparty.",
        "example": 0
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "email",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EMAIL"
      },
      {
        "name": "is_primary",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "SD Base Model from which all other Models should inherit"
      }
    ]
  },
  {
    "url": "/v2.1/public/templates/{template_id}/metadata",
    "method": "getTemplateMetadata",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "V2.1 Template APIs",
    "typeScriptTag": "v21TemplateApIs",
    "description": "Get Template Metadata",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "SD Base Model from which all other Models should inherit"
      }
    ]
  },
  {
    "url": "/v2/public/auth/roles/{role_id}/members",
    "method": "deleteRoleMember",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "V2 User APIs",
    "typeScriptTag": "v2UserApIs",
    "description": "Delete Role Member",
    "parameters": [
      {
        "name": "roleId",
        "schema": "integer",
        "required": true,
        "description": "Use the [Get Active Roles](#tag/V2.1-User-APIs/operation/v2.1_public_auth_roles_list) API to get the role ID.",
        "example": 0
      },
      {
        "name": "user_ids_to_remove",
        "schema": "array",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Delete Role Member"
      }
    ]
  },
  {
    "url": "/v2/public/auth/roles/{role_id}/members",
    "method": "addRoleMember",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "V2 User APIs",
    "typeScriptTag": "v2UserApIs",
    "description": "Add Role Member",
    "parameters": [
      {
        "name": "roleId",
        "schema": "integer",
        "required": true,
        "description": "Use the [Get Active Roles](#tag/V2.1-User-APIs/operation/v2.1_public_auth_roles_list) API to get the role ID.",
        "example": 0
      },
      {
        "name": "user_ids_to_add",
        "schema": "array",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The updated members of the role."
      }
    ]
  },
  {
    "url": "/v2/public/contract_types/{contract_type_id}/entities",
    "method": "listEntities",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "V2 Contract Type APIs",
    "typeScriptTag": "v2ContractTypeApIs",
    "description": "List Contract Type Entities",
    "parameters": [
      {
        "name": "contractTypeId",
        "schema": "integer",
        "required": true,
        "description": "ID of the Contract Type.",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The list of entities for the contract type"
      }
    ]
  },
  {
    "url": "/v2/public/contracts/by_external_metadata/{external_metadata_id}",
    "method": "getByExternalMetadataId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "V2 Contract APIs",
    "typeScriptTag": "v2ContractApIs",
    "description": "Get Contract by External Metadata ID",
    "parameters": [
      {
        "name": "externalMetadataId",
        "schema": "string",
        "required": true,
        "description": "External Metadata ID of the Contract. This can be used to search for contracts based on an ID specified when creating the contract using the external API.",
        "example": "EXTERNAL_METADATA_ID"
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
    "url": "/v2/public/contracts/{composite_id}/download",
    "method": "downloadContractFile",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "V2 Contract APIs",
    "typeScriptTag": "v2ContractApIs",
    "description": "Download Contract File",
    "parameters": [
      {
        "name": "compositeId",
        "schema": "string",
        "required": true,
        "description": "ID of the Contract. Should be of the form T-123 or H-123. T stands for Template contracts and H stands for Historical contracts.",
        "example": "COMPOSITE_ID"
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
    "url": "/v2/public/contracts/{composite_id}/download_link",
    "method": "getDownloadLink",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "V2 Contract APIs",
    "typeScriptTag": "v2ContractApIs",
    "description": "Get Contract Download Link",
    "parameters": [
      {
        "name": "contractId",
        "schema": "string",
        "required": true,
        "description": "ID of the Contract. Should be of the form T-123 or H-123. T stands for Template contracts and H stands for Historical contracts.",
        "example": "CONTRACT_ID"
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
    "url": "/v2/public/contracts/{composite_id}/send_to_counterparties",
    "method": "sendToCounterparties",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "V2 Contract APIs",
    "typeScriptTag": "v2ContractApIs",
    "description": "Send Contract to Counterparties",
    "parameters": [
      {
        "name": "contractId",
        "schema": "string",
        "required": true,
        "description": "ID of the Contract. Should be of the form T-123 or H-123. T stands for Template contracts and H stands for Historical contracts.",
        "example": "CONTRACT_ID"
      },
      {
        "name": "to_emails",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "cc_emails",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "bcc_emails",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "attachment_formats",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "extra_attachments",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "custom_message",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "subject",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      }
    ]
  },
  {
    "url": "/v2/public/contracts/{contract_id}/contract_data",
    "method": "updateContractData",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "V2 Contract APIs",
    "typeScriptTag": "v2ContractApIs",
    "description": "Update Contract Data",
    "parameters": [
      {
        "name": "userEmail",
        "schema": "string",
        "required": false,
        "description": "The email address of the user to act as (when using client-secret authentication). This header attributes actions taken using the API to the given user."
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
        "description": "SD Base Model from which all other Models should inherit"
      },
      {
        "statusCode": "400",
        "description": "body"
      }
    ]
  },
  {
    "url": "/v2/public/contracts/{contract_id}/key_pointers",
    "method": "getKeyPointers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "V2 Contract APIs",
    "typeScriptTag": "v2ContractApIs",
    "description": "Get Key Pointers",
    "parameters": [
      {
        "name": "contractId",
        "schema": "string",
        "required": true,
        "description": "ID of the Contract. Should be of the form T-123 or H-123. T stands for Template contracts and H stands for Historical contracts.",
        "example": "CONTRACT_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "SD Base Model from which all other Models should inherit"
      }
    ]
  },
  {
    "url": "/v2/public/contracts/{contract_id}/key_pointers/{contract_key_pointer_id}",
    "method": "updateKeyPointerValue",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "V2 Contract APIs",
    "typeScriptTag": "v2ContractApIs",
    "description": "Update Key Pointer Value",
    "parameters": [
      {
        "name": "contractId",
        "schema": "string",
        "required": true,
        "description": "ID of the Contract. Should be of the form T-123 or H-123. T stands for Template contracts and H stands for Historical contracts.",
        "example": "CONTRACT_ID"
      },
      {
        "name": "contractKeyPointerId",
        "schema": "string",
        "required": true,
        "description": "ID of the contract key pointer value.",
        "example": "CONTRACT_KEY_POINTER_ID"
      },
      {
        "name": "value",
        "schema": "object",
        "required": true,
        "description": "",
        "example": {
          "type": "MONTHS",
          "value": 6
        }
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "SD Base Model from which all other Models should inherit"
      }
    ]
  },
  {
    "url": "/v2/public/contracts/{contract_id}/notes",
    "method": "getContractNotes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "V2 Contract APIs",
    "typeScriptTag": "v2ContractApIs",
    "description": "Get Contract Notes",
    "parameters": [
      {
        "name": "contractId",
        "schema": "string",
        "required": true,
        "description": "ID of the Contract. Should be of the form T-123 or H-123. T stands for Template contracts and H stands for Historical contracts.",
        "example": "CONTRACT_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "SD Base Model from which all other Models should inherit"
      }
    ]
  },
  {
    "url": "/v2/public/contracts/{contract_id}/notes/{note_id}",
    "method": "updateContractNote",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "V2 Contract APIs",
    "typeScriptTag": "v2ContractApIs",
    "description": "Update Contract Note",
    "parameters": [
      {
        "name": "contractId",
        "schema": "string",
        "required": true,
        "description": "ID of the Contract. Should be of the form T-123 or H-123. T stands for Template contracts and H stands for Historical contracts.",
        "example": "CONTRACT_ID"
      },
      {
        "name": "keyPointerId",
        "schema": "string",
        "required": true,
        "description": "ID of the key pointer value.",
        "example": "KEY_POINTER_ID"
      },
      {
        "name": "userEmail",
        "schema": "string",
        "required": false,
        "description": "The email address of the user to act as (when using client-secret authentication). This header attributes actions taken using the API to the given user."
      },
      {
        "name": "note_tag",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "text",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TEXT"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "SD Base Model from which all other Models should inherit"
      }
    ]
  },
  {
    "url": "/v2/public/contracts/{contract_id}/status",
    "method": "getStatus",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "V2 Contract APIs",
    "typeScriptTag": "v2ContractApIs",
    "description": "Get Contract Status",
    "parameters": [
      {
        "name": "contractId",
        "schema": "string",
        "required": true,
        "description": "ID of the Contract. Should be of the form T-123 or H-123. T stands for Template contracts and H stands for Historical contracts.",
        "example": "CONTRACT_ID"
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
    "url": "/v2/public/counter_parties/{counterparty_id}",
    "method": "getCounterpartyById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "V2 Counterparty APIs",
    "typeScriptTag": "v2CounterpartyApIs",
    "description": "Get Counterparty",
    "parameters": [
      {
        "name": "counterpartyId",
        "schema": "integer",
        "required": true,
        "description": "ID of the Counterparty.",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "SD Base Model from which all other Models should inherit"
      }
    ]
  },
  {
    "url": "/v2/public/counter_parties/{counterparty_id}",
    "method": "updateDetails",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "V2 Counterparty APIs",
    "typeScriptTag": "v2CounterpartyApIs",
    "description": "Update Counterparty",
    "parameters": [
      {
        "name": "counterpartyId",
        "schema": "integer",
        "required": true,
        "description": "ID of the Counterparty.",
        "example": 0
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "brand_name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "custom_fields",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "SD Base Model from which all other Models should inherit"
      }
    ]
  },
  {
    "url": "/v2/public/counter_parties/{counterparty_id}/contacts",
    "method": "listCounterpartyContacts",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "V2 Counterparty APIs",
    "typeScriptTag": "v2CounterpartyApIs",
    "description": "List Counterparty Contacts",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "description": "The page to return. Page numbers start at 1.",
        "default": 1
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The number of items to return per page.",
        "default": 10
      },
      {
        "name": "counterpartyId",
        "schema": "integer",
        "required": true,
        "description": "ID of the Counterparty.",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "SD Base Model from which all other Models should inherit"
      }
    ]
  },
  {
    "url": "/v2/public/counter_parties/{counterparty_id}/contacts",
    "method": "createContact",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "V2 Counterparty APIs",
    "typeScriptTag": "v2CounterpartyApIs",
    "description": "Create Counterparty Contact",
    "parameters": [
      {
        "name": "counterpartyId",
        "schema": "integer",
        "required": true,
        "description": "ID of the Counterparty.",
        "example": 0
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "email",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EMAIL"
      },
      {
        "name": "is_primary",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "SD Base Model from which all other Models should inherit"
      }
    ]
  },
  {
    "url": "/v2/public/templates/{template_id}/metadata",
    "method": "getMetadata",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "V2 Template APIs",
    "typeScriptTag": "v2TemplateApIs",
    "description": "Get Template Metadata",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "SD Base Model from which all other Models should inherit"
      }
    ]
  },
  {
    "url": "/v1/public/templates",
    "method": "getTemplateList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "V1 Template APIs",
    "typeScriptTag": "v1TemplateApIs",
    "description": "Get Template List",
    "parameters": [
      {
        "name": "tags",
        "schema": "array",
        "required": false,
        "description": "The tags (if any) to filter the templates by.\n\nMultiple tags can be specified by specifying the query param multiple times. Only templates where the Template tags are a subset of the tags passed will be returned."
      },
      {
        "name": "tagsAll",
        "schema": "array",
        "required": false,
        "description": "The tags (if any) to filter the templates by.\n\nMultiple tags can be specified by specifying the query param multiple times. Only templates where the tags passed are a subset of the Template tags will be returned."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A list of template as returned by the public API"
      }
    ]
  },
  {
    "url": "/v1/public/webhook-sample",
    "method": "createWebhookSample",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "V1 Webhooks",
    "typeScriptTag": "v1Webhooks",
    "description": "Sample Webhook Request",
    "parameters": [
      {
        "name": "activity_data",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "activity",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACTIVITY"
      },
      {
        "name": "contract_id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "contract_title",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CONTRACT_TITLE"
      },
      {
        "name": "contract_type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CONTRACT_TYPE"
      },
      {
        "name": "contract_type_name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CONTRACT_TYPE_NAME"
      },
      {
        "name": "contract_type_id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "contract_status",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CONTRACT_STATUS"
      },
      {
        "name": "contract_kind",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CONTRACT_KIND"
      },
      {
        "name": "business_user",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "created_at",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CREATED_AT"
      },
      {
        "name": "counterparties",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "external_metadata",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "entity",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "contract_reference_id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "contract_template_id",
        "schema": "integer",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "SD Base Model from which all other Models should inherit"
      }
    ]
  },
  {
    "url": "/v2.1/public/auth/roles",
    "method": "listActiveRoles",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "V2.1 User APIs",
    "typeScriptTag": "v21UserApIs",
    "description": "Get active roles for a workspace",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "Pydantic Model that takes in the list if active\nroles pydantic response"
      }
    ]
  },
  {
    "url": "/v2.1/public/auth/users",
    "method": "getUserList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "V2.1 User APIs",
    "typeScriptTag": "v21UserApIs",
    "description": "Get User List",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "description": "The page to return. Page numbers start at 1.",
        "default": 1
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The number of items to return per page.",
        "default": 10
      },
      {
        "name": "userEmail",
        "schema": "string",
        "required": false,
        "description": "User email address for which that user list should be filtered. Please make sure that the value is url encoded. So for example, if the email address is `abc+123@xyz.com` the value passed should be `abc%2B123%40xyz.com`."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "SD Generic Model from which all other Generic Models should inherit"
      }
    ]
  },
  {
    "url": "/v2.1/public/clickwrap/{clickwrap_public_id}/consent_status",
    "method": "getUserConsentStatus",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "V2.1 Clickwrap APIs",
    "typeScriptTag": "v21ClickwrapApIs",
    "description": "Get consent status",
    "parameters": [
      {
        "name": "clickwrapPublicId",
        "schema": "uuid",
        "required": true,
        "description": "Public Id of Clickwrap"
      },
      {
        "name": "user_identifier",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USER_IDENTIFIER"
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
    "url": "/v2.1/public/contract_types",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "V2.1 Contract Type APIs",
    "typeScriptTag": "v21ContractTypeApIs",
    "description": "Get Contract Type List",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "SD Base Model from which all other Models should inherit"
      }
    ]
  },
  {
    "url": "/v2.1/public/contract_types/{contract_type_id}/intake_form/questionnaire",
    "method": "getIntakeFormQuestionnaireDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "V2.1 Contract Type APIs",
    "typeScriptTag": "v21ContractTypeApIs",
    "description": "Get Intake Form Questionnaire Details",
    "parameters": [
      {
        "name": "contractTypeId",
        "schema": "integer",
        "required": true,
        "description": "ID of the Contract Type.",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The list of attributes for this contract template."
      }
    ]
  },
  {
    "url": "/v2.1/public/contracts",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "V2.1 Contract APIs",
    "typeScriptTag": "v21ContractApIs",
    "description": "Get Contract List",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "description": "The page to return. Page numbers start at 1.",
        "default": 1
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The number of items to return per page.",
        "default": 10
      },
      {
        "name": "filterClientEmailAddress",
        "schema": "string",
        "description": "Filters on the counter party email. Does an exact match."
      },
      {
        "name": "filterClientName",
        "schema": "string",
        "description": "Filters on the counter party name. Does an exact match."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "SD Base Model from which all other Models should inherit"
      }
    ]
  },
  {
    "url": "/v2.1/public/contracts",
    "method": "createNewContract",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "V2.1 Contract APIs",
    "typeScriptTag": "v21ContractApIs",
    "description": "Create Contract",
    "parameters": [
      {
        "name": "userEmail",
        "schema": "string",
        "required": false,
        "description": "The email address of the user to act as (when using client-secret authentication). This header attributes actions taken using the API to the given user."
      },
      {
        "name": "contract_template_id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "contract_data",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "counter_party_details",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "external_metadata",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "entity_reference_id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "workflow_config",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "send_to_counterparty_config",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "contract_name",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "signatories",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "is_embedded_contract",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "The list of Contracts"
      }
    ]
  },
  {
    "url": "/v2.1/public/contracts/approvals/{contract_id}",
    "method": "getApprovals",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "V2.1 Contract APIs",
    "typeScriptTag": "v21ContractApIs",
    "description": "Get contract approvals",
    "parameters": [
      {
        "name": "contractId",
        "schema": "string",
        "required": true,
        "description": "ID of the Contract. Should be of the form T-123 or H-123. T stands for Template contracts and H stands for Historical contracts.",
        "example": "CONTRACT_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "SD Base Model from which all other Models should inherit"
      }
    ]
  },
  {
    "url": "/v2.1/public/contracts/approvals/{contract_id}",
    "method": "createAdhocApprovals",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "V2.1 Contract APIs",
    "typeScriptTag": "v21ContractApIs",
    "description": "Create and send adhoc approvals",
    "parameters": [
      {
        "name": "contractId",
        "schema": "string",
        "required": true,
        "description": "ID of the Contract. Should be of the form T-123 or H-123. T stands for Template contracts and H stands for Historical contracts.",
        "example": "CONTRACT_ID"
      },
      {
        "name": "approvals",
        "schema": "array",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "SD Base Model from which all other Models should inherit"
      }
    ]
  },
  {
    "url": "/v2.1/public/contracts/embedded/contracts/{contract_id}/counter_party",
    "method": "getCounterpartyEmbeddedUrl",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "V2.1 Contract APIs",
    "typeScriptTag": "v21ContractApIs",
    "description": "Get CounterParty Embedded Url",
    "parameters": [
      {
        "name": "cpEmailId",
        "schema": "string",
        "description": "Email address of the CP for which the url needs to be returned."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "SD Base Model from which all other Models should inherit"
      }
    ]
  },
  {
    "url": "/v2.1/public/contracts/executed_contracts",
    "method": "uploadExecutedContract",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "V2.1 Contract APIs",
    "typeScriptTag": "v21ContractApIs",
    "description": "Upload Executed Contract Api",
    "parameters": [
      {
        "name": "contract_name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CONTRACT_NAME"
      },
      {
        "name": "file_name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FILE_NAME"
      },
      {
        "name": "file_content",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FILE_CONTENT"
      },
      {
        "name": "contract_type_id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "organization_entity_id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "counterparty_details",
        "schema": "array",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Must be kept in sync with ExternalContractV3Serializer"
      }
    ]
  },
  {
    "url": "/v2.1/public/contracts/preview",
    "method": "generateContractPreview",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "V2.1 Contract APIs",
    "typeScriptTag": "v21ContractApIs",
    "description": "Generate Contract Preview",
    "parameters": [
      {
        "name": "contract_template_id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "contract_data",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "organization_entity_id",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "cp_role_label",
        "schema": "string",
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
    "url": "/v2.1/public/contracts/upload_review_contracts",
    "method": "uploadContractForReview",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "V2.1 Contract APIs",
    "typeScriptTag": "v21ContractApIs",
    "description": "Upload Contract For Review",
    "parameters": [
      {
        "name": "contract_name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CONTRACT_NAME"
      },
      {
        "name": "contract_type_id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "file_name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FILE_NAME"
      },
      {
        "name": "file_base64",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FILE_BASE64"
      },
      {
        "name": "creator_organization_entity_id",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "external_metadata",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "reviewer",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "counterparty_workspace_id",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "counterparty_organization_name",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "counterparty_is_individual",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "counterparty_poc_details",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "intake_form_data",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "business_user_email",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "creator_signatories",
        "schema": "array",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Must be kept in sync with ExternalContractV3Serializer"
      }
    ]
  },
  {
    "url": "/v2.1/public/contracts/upload_sign_contracts",
    "method": "uploadContractForSignature",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "V2.1 Contract APIs",
    "typeScriptTag": "v21ContractApIs",
    "description": "Upload Contract For Signature",
    "parameters": [
      {
        "name": "contract_name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CONTRACT_NAME"
      },
      {
        "name": "contract_type_id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "file_name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FILE_NAME"
      },
      {
        "name": "file_base64",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FILE_BASE64"
      },
      {
        "name": "creator_organization_entity_id",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "counterparty_organization_name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "COUNTERPARTY_ORGANIZATION_NAME"
      },
      {
        "name": "external_metadata",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "counterparty_is_individual",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "counterparty_poc_details",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "intake_form_data",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "business_user_email",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "creator_signatories",
        "schema": "array",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Must be kept in sync with ExternalContractV3Serializer"
      }
    ]
  },
  {
    "url": "/v2.1/public/contracts/webhooks/re_trigger_latest",
    "method": "reTriggerLatestContractsWebhooks",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "V2.1 Contract APIs",
    "typeScriptTag": "v21ContractApIs",
    "description": "Re-trigger Contract Webhooks",
    "parameters": [
      {
        "name": "contract_ids",
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
      }
    ]
  },
  {
    "url": "/v2.1/public/contracts/{composite_id}/mark_for_execution",
    "method": "markForExecution",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "V2.1 Contract APIs",
    "typeScriptTag": "v21ContractApIs",
    "description": "Marks the contract for execution",
    "parameters": [
      {
        "name": "contractId",
        "schema": "string",
        "required": true,
        "description": "ID of the Contract. Should be of the form T-123 or H-123. T stands for Template contracts and H stands for Historical contracts.",
        "example": "CONTRACT_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Successfully Marked for Execution"
      }
    ]
  },
  {
    "url": "/v2.1/public/contracts/{composite_id}/signatories/resend_email",
    "method": "resendEmailToSignatory",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "V2.1 Contract APIs",
    "typeScriptTag": "v21ContractApIs",
    "description": "Resend Email to the signatory of a Contract.",
    "parameters": [
      {
        "name": "compositeId",
        "schema": "string",
        "required": true,
        "description": "ID of the Contract. Should be of the form T-123 or H-123. T stands for Template contracts and H stands for Historical contracts.",
        "example": "COMPOSITE_ID"
      },
      {
        "name": "email_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EMAIL_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      }
    ]
  },
  {
    "url": "/v2.1/public/contracts/{contract_id}/comments",
    "method": "getComments",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "V2.1 Contract APIs",
    "typeScriptTag": "v21ContractApIs",
    "description": "Get comments in contract activity log.",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "description": "The page to return. Page numbers start at 1.",
        "default": 1
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The number of items to return per page.",
        "default": 10
      },
      {
        "name": "contractId",
        "schema": "integer",
        "required": true,
        "description": "ID of the Contract.",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "SD Base Model from which all other Models should inherit"
      }
    ]
  },
  {
    "url": "/v2.1/public/contracts/{contract_id}/comments",
    "method": "addCommentToActivityLog",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "V2.1 Contract APIs",
    "typeScriptTag": "v21ContractApIs",
    "description": "Add comment to contract activity log.",
    "parameters": [
      {
        "name": "contractId",
        "schema": "integer",
        "required": true,
        "description": "ID of the Contract.",
        "example": 0
      },
      {
        "name": "comment",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "COMMENT"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "SD Base Model from which all other Models should inherit"
      }
    ]
  },
  {
    "url": "/v2.1/public/contracts/{contract_id}/contract_relation",
    "method": "createContractRelation",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "V2.1 Contract APIs",
    "typeScriptTag": "v21ContractApIs",
    "description": "Create Contract relations",
    "parameters": [
      {
        "name": "contractId",
        "schema": "integer",
        "required": true,
        "description": "ID of the Contract.",
        "example": 0
      },
      {
        "name": "related_contract_id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "relation_type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "RELATION_TYPE"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "SD Base Model from which all other Models should inherit"
      },
      {
        "statusCode": "400",
        "description": "body"
      }
    ]
  },
  {
    "url": "/v2.1/public/contracts/{contract_id}/contract_version",
    "method": "uploadVersion",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "V2.1 Contract Version APIs",
    "typeScriptTag": "v21ContractVersionApIs",
    "description": "Upload Contract Version.",
    "parameters": [
      {
        "name": "contractId",
        "schema": "integer",
        "required": true,
        "description": "ID of the Contract.",
        "example": 0
      },
      {
        "name": "document_name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DOCUMENT_NAME"
      },
      {
        "name": "document_base_64",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DOCUMENT_BASE_64"
      },
      {
        "name": "collect_approvals",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": true
      },
      {
        "name": "is_executed_version",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Success"
      }
    ]
  },
  {
    "url": "/v2.1/public/contracts/{contract_id}/invite",
    "method": "inviteUsersRoles",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "V2.1 Contract APIs",
    "typeScriptTag": "v21ContractApIs",
    "description": "Invite Users & Roles",
    "parameters": [
      {
        "name": "contractId",
        "schema": "integer",
        "required": true,
        "description": "ID of the Contract.",
        "example": 0
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
        "description": "SD Base Model from which all other Models should inherit"
      }
    ]
  },
  {
    "url": "/v2.1/public/contracts/{contract_id}/questionnaire/responses",
    "method": "getQuestionnaireResponses",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "V2.1 Contract APIs",
    "typeScriptTag": "v21ContractApIs",
    "description": "Get Questionnaire Response",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "A page number within the paginated result set."
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Number of results to return per page."
      },
      {
        "name": "contractId",
        "schema": "integer",
        "required": true,
        "description": "ID of the Contract.",
        "example": 0
      },
      {
        "name": "questionnaireType",
        "schema": "string",
        "required": true,
        "description": "Enum: `INTAKE_FORM/TEMPLATE`. Type of the questionnaire for which response needs to be returned.",
        "example": "QUESTIONNAIRE_TYPE"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "SD Base Model from which all other Models should inherit"
      }
    ]
  },
  {
    "url": "/v2.1/public/contracts/{contract_id}/recipients/recipient_link",
    "method": "getRecipientLink",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "V2.1 Contract APIs",
    "typeScriptTag": "v21ContractApIs",
    "description": "Get Recipient Link",
    "parameters": [
      {
        "name": "contractId",
        "schema": "integer",
        "required": true,
        "description": "ID of the Contract.",
        "example": 0
      },
      {
        "name": "recipientEmail",
        "schema": "string",
        "required": true,
        "description": "Email of the recipient for whom the link needs to be generated.",
        "example": "RECIPIENT_EMAIL"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "SD Base Model from which all other Models should inherit"
      }
    ]
  },
  {
    "url": "/v2.1/public/contracts/{contract_id}/review_request",
    "method": "createLegalReviewTask",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "V2.1 Contract APIs",
    "typeScriptTag": "v21ContractApIs",
    "description": "Create and assign a legal review task",
    "parameters": [
      {
        "name": "contractId",
        "schema": "integer",
        "required": true,
        "description": "ID of the Contract.",
        "example": 0
      },
      {
        "name": "description",
        "schema": "string",
        "description": "",
        "default": ""
      },
      {
        "name": "assignee_user_id",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "assignee_role_id",
        "schema": "integer",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      }
    ]
  },
  {
    "url": "/v2.1/public/contracts/{contract_id}/uninvite",
    "method": "uninviteUserOrRole",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "V2.1 Contract APIs",
    "typeScriptTag": "v21ContractApIs",
    "description": "Un-Invite a User or Role",
    "parameters": [
      {
        "name": "contractId",
        "schema": "integer",
        "required": true,
        "description": "ID of the Contract.",
        "example": 0
      },
      {
        "name": "user_id",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "role_id",
        "schema": "integer",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      }
    ]
  },
  {
    "url": "/v2.1/public/contracts/{contract_id}/uninvite_all",
    "method": "uninviteAllUsersRoles",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "V2.1 Contract APIs",
    "typeScriptTag": "v21ContractApIs",
    "description": "Un-Invite all Users & Roles",
    "parameters": [
      {
        "name": "contractId",
        "schema": "integer",
        "required": true,
        "description": "ID of the Contract.",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      }
    ]
  },
  {
    "url": "/v2.1/public/counter_parties",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "V2.1 Counterparty APIs",
    "typeScriptTag": "v21CounterpartyApIs",
    "description": "List Counterparties",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "description": "The page to return. Page numbers start at 1.",
        "default": 1
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The number of items to return per page.",
        "default": 10
      },
      {
        "name": "filterClientEmailAddress",
        "schema": "string",
        "description": "Filters on the counter party email. Does an exact match."
      },
      {
        "name": "filterCustom_<customFieldName>",
        "schema": "string",
        "description": "Filters all the counterparties which have the custom field values present."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "SD Base Model from which all other Models should inherit"
      }
    ]
  },
  {
    "url": "/v2.1/public/counter_parties",
    "method": "createCounterParty",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "V2.1 Counterparty APIs",
    "typeScriptTag": "v21CounterpartyApIs",
    "description": "Create Counter Party",
    "parameters": [
      {
        "name": "is_individual",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "organization_type",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "organization_name",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "contact_name",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "contact_email",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "primary_address",
        "schema": "object",
        "required": false,
        "description": "",
        "example": {
          "line_one": "st: 3, block: 2, Jenkins Road",
          "city_name": "Cincinnati",
          "state_name": "Ohio",
          "zipcode": "513",
          "country_name": "USA",
          "email": "test@yopmail.com",
          "phone": "1234567890",
          "country_iso_code": "US"
        }
      },
      {
        "name": "custom_fields",
        "schema": "object",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "SD Base Model from which all other Models should inherit"
      }
    ]
  },
  {
    "url": "/v2.1/public/counter_parties/{counterparty_id}/addresses",
    "method": "listAddresses",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "V2.1 Counterparty APIs",
    "typeScriptTag": "v21CounterpartyApIs",
    "description": "List Counterparty Addresses",
    "parameters": [
      {
        "name": "counterpartyId",
        "schema": "integer",
        "required": true,
        "description": "ID of the Counterparty.",
        "example": 0
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "The page to return. Page numbers start at 1.",
        "default": 1
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The number of items to return per page.",
        "default": 10
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "SD Base Model from which all other Models should inherit"
      }
    ]
  },
  {
    "url": "/v2.1/public/counter_parties/{counterparty_id}/addresses",
    "method": "createAddress",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "V2.1 Counterparty APIs",
    "typeScriptTag": "v21CounterpartyApIs",
    "description": "Create Counterparty Address",
    "parameters": [
      {
        "name": "counterpartyId",
        "schema": "integer",
        "required": true,
        "description": "ID of the Counterparty.",
        "example": 0
      },
      {
        "name": "line_one",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "LINE_ONE"
      },
      {
        "name": "city_name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CITY_NAME"
      },
      {
        "name": "state_name",
        "schema": "string",
        "required": false,
        "description": "",
        "default": ""
      },
      {
        "name": "zipcode",
        "schema": "string",
        "required": false,
        "description": "",
        "default": ""
      },
      {
        "name": "email",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "phone",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "country_name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "COUNTRY_NAME"
      },
      {
        "name": "country_iso_code",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "SD Base Model from which all other Models should inherit"
      }
    ]
  },
  {
    "url": "/v2.1/public/counter_parties/{counterparty_id}/addresses/{address_id}",
    "method": "updateAddress",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "V2.1 Counterparty APIs",
    "typeScriptTag": "v21CounterpartyApIs",
    "description": "Update Counterparty Address",
    "parameters": [
      {
        "name": "counterpartyId",
        "schema": "integer",
        "required": true,
        "description": "ID of the Counterparty.",
        "example": 0
      },
      {
        "name": "addressId",
        "schema": "integer",
        "required": true,
        "description": "ID of the Counterparty address.",
        "example": 0
      },
      {
        "name": "city_name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "state_name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "country_iso_code",
        "schema": "string",
        "description": ""
      },
      {
        "name": "zipcode",
        "schema": "string",
        "description": ""
      },
      {
        "name": "line_one",
        "schema": "string",
        "description": ""
      },
      {
        "name": "is_primary",
        "schema": "boolean",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "SD Base Model from which all other Models should inherit"
      }
    ]
  },
  {
    "url": "/v2.1/public/counter_parties/{counterparty_id}/contacts/bulk",
    "method": "bulkUpdateContacts",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "V2.1 Counterparty APIs",
    "typeScriptTag": "v21CounterpartyApIs",
    "description": "Bulk Update Counterparty Contacts",
    "parameters": [
      {
        "name": "counterpartyId",
        "schema": "integer",
        "required": true,
        "description": "ID of the Counterparty.",
        "example": 0
      },
      {
        "name": "contacts",
        "schema": "array",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "SD Base Model from which all other Models should inherit"
      }
    ]
  },
  {
    "url": "/v2.1/public/counter_parties/{counterparty_id}/contacts/{contact_id}",
    "method": "deleteContact",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "V2.1 Counterparty APIs",
    "typeScriptTag": "v21CounterpartyApIs",
    "description": "Delete Counterparty Contact",
    "parameters": [
      {
        "name": "counterpartyId",
        "schema": "integer",
        "required": true,
        "description": "ID of the Counterparty.",
        "example": 0
      },
      {
        "name": "contactId",
        "schema": "integer",
        "required": true,
        "description": "ID of the Counterparty contact.",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Delete Counterparty Contact"
      }
    ]
  },
  {
    "url": "/v2.1/public/counter_parties/{counterparty_id}/contacts/{contact_id}",
    "method": "updateContact",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "V2.1 Counterparty APIs",
    "typeScriptTag": "v21CounterpartyApIs",
    "description": "Update Counterparty Contact",
    "parameters": [
      {
        "name": "counterpartyId",
        "schema": "integer",
        "required": true,
        "description": "ID of the Counterparty.",
        "example": 0
      },
      {
        "name": "contactId",
        "schema": "integer",
        "required": true,
        "description": "ID of the Counterparty contact.",
        "example": 0
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "email",
        "schema": "string",
        "description": ""
      },
      {
        "name": "is_primary",
        "schema": "boolean",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "SD Base Model from which all other Models should inherit"
      }
    ]
  },
  {
    "url": "/v2.1/public/key_pointers",
    "method": "getKeyPointers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "V2.1 KeyPointer APIs",
    "typeScriptTag": "v21KeyPointerApIs",
    "description": "Get KeyPointers",
    "parameters": [
      {
        "name": "contractTypeId",
        "schema": "integer",
        "required": true,
        "description": "ID of the Contract type.",
        "example": 0
      },
      {
        "name": "isExternal",
        "schema": "boolean",
        "required": false,
        "description": "Set to True to get only key pointers from external sections."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "SD Base Model from which all other Models should inherit"
      }
    ]
  },
  {
    "url": "/v2.1/public/organizations/entities",
    "method": "getAllEntity",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "V2.1 Organization APIs",
    "typeScriptTag": "v21OrganizationApIs",
    "description": "Get Organization Entities",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "SD Base Model from which all other Models should inherit"
      }
    ]
  },
  {
    "url": "/v2.1/public/organizations/entities",
    "method": "createEntity",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "V2.1 Organization APIs",
    "typeScriptTag": "v21OrganizationApIs",
    "description": "Create Entity",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "reference_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "REFERENCE_ID"
      },
      {
        "name": "jurisdiction_iso_code",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "JURISDICTION_ISO_CODE"
      },
      {
        "name": "organization_type_id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "is_primary",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "primary_address",
        "schema": "object",
        "required": true,
        "description": "",
        "example": {
          "city_name": "Houston",
          "state_name": "Texas",
          "zipcode": "77020",
          "line_one": "3659 Burwell Heights Road",
          "country_iso_code": "US"
        }
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "SD Base Model from which all other Models should inherit"
      }
    ]
  },
  {
    "url": "/v2.1/public/organizations/types",
    "method": "getTypes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "V2.1 Organization APIs",
    "typeScriptTag": "v21OrganizationApIs",
    "description": "Get Organization Types",
    "parameters": [
      {
        "name": "jurisdictionIsoCode",
        "schema": "string",
        "required": false,
        "description": "The ISO-3166-1 Alpha-2 code of the jurisdiction associated with this organization. Any value passed here is overrides `jurisdiction`. Valid values can be found [here](https://en.wikipedia.org/wiki/List_of_ISO_3166_country_codes)."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "SD Base Model from which all other Models should inherit"
      }
    ]
  },
  {
    "url": "/v2.1/public/supported_documents/{contract_id}",
    "method": "uploadSupportedDocuments",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "V2.1 Contract APIs",
    "typeScriptTag": "v21ContractApIs",
    "description": "Upload supported documents for a given contract",
    "parameters": [
      {
        "name": "contractId",
        "schema": "string",
        "required": true,
        "description": "ID of the Contract. Should be of the form T-123 or H-123. T stands for Template contracts and H stands for Historical contracts.",
        "example": "CONTRACT_ID"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "file_name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FILE_NAME"
      },
      {
        "name": "file_base64",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FILE_BASE64"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "SD Base Model from which all other Models should inherit"
      }
    ]
  },
  {
    "url": "/v2.1/public/templates",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "V2.1 Template APIs",
    "typeScriptTag": "v21TemplateApIs",
    "description": "Get Template List",
    "parameters": [
      {
        "name": "tags",
        "schema": "array",
        "required": false,
        "description": "The tags (if any) to filter the templates by.\n\nMultiple tags can be specified by specifying the query param multiple times. Only templates where the Template tags are a subset of the tags passed will be returned."
      },
      {
        "name": "tagsAll",
        "schema": "array",
        "required": false,
        "description": "The tags (if any) to filter the templates by.\n\nMultiple tags can be specified by specifying the query param multiple times. Only templates where the tags passed are a subset of the Template tags will be returned."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A list of template as returned by the public API"
      }
    ]
  },
  {
    "url": "/v2.1/public/templates/{template_id}",
    "method": "getDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "V2.1 Template APIs",
    "typeScriptTag": "v21TemplateApIs",
    "description": "Get Template Details",
    "parameters": [
      {
        "name": "templateId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the template.",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A template along with the updated data as updated by the public API."
      }
    ]
  },
  {
    "url": "/v2.1/public/templates/{template_id}",
    "method": "updateTemplateData",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "V2.1 Template APIs",
    "typeScriptTag": "v21TemplateApIs",
    "description": "Update Template Data",
    "parameters": [
      {
        "name": "templateId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the template.",
        "example": 0
      },
      {
        "name": "tags",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A template along with the updated data as updated by the public API."
      }
    ]
  },
  {
    "url": "/v2.1/public/user_tasks",
    "method": "createUserTasksList",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "V2.1 Tasks and Reminders APIs",
    "typeScriptTag": "v21TasksAndRemindersApIs",
    "description": "V2.1 Create User Tasks List",
    "parameters": [
      {
        "name": "title",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TITLE"
      },
      {
        "name": "notes",
        "schema": "string",
        "required": false,
        "description": "",
        "default": ""
      },
      {
        "name": "contract_id",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "due_date",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "due_date_key_pointer_id",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "assignees",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "reminders",
        "schema": "array",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "SD Base Model from which all other Models should inherit"
      }
    ]
  },
  {
    "url": "/v2/public/auth/roles",
    "method": "getActiveRoles",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "V2 User APIs",
    "typeScriptTag": "v2UserApIs",
    "description": "Get active roles for a workspace",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "Pydantic Model that takes in the list if active\nroles pydantic response"
      }
    ]
  },
  {
    "url": "/v2/public/auth/users",
    "method": "getUserList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "V2 User APIs",
    "typeScriptTag": "v2UserApIs",
    "description": "Get User List",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "description": "The page to return. Page numbers start at 1.",
        "default": 1
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The number of items to return per page.",
        "default": 10
      },
      {
        "name": "userEmail",
        "schema": "string",
        "required": false,
        "description": "User email address for which that user list should be filtered. Please make sure that the value is url encoded. So for example, if the email address is `abc+123@xyz.com` the value passed should be `abc%2B123%40xyz.com`."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "SD Generic Model from which all other Generic Models should inherit"
      }
    ]
  },
  {
    "url": "/v2/public/contract_types",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "V2 Contract Type APIs",
    "typeScriptTag": "v2ContractTypeApIs",
    "description": "Get Contract Type List",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "SD Base Model from which all other Models should inherit"
      }
    ]
  },
  {
    "url": "/v2/public/contract_types/{contract_type_id}/intake_form/questionnaire",
    "method": "getIntakeFormQuestionnaireDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "V2 Contract Type APIs",
    "typeScriptTag": "v2ContractTypeApIs",
    "description": "Get Intake Form Questionnaire Details",
    "parameters": [
      {
        "name": "contractTypeId",
        "schema": "integer",
        "required": true,
        "description": "ID of the Contract Type.",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The list of attributes for this contract template."
      }
    ]
  },
  {
    "url": "/v2/public/contracts",
    "method": "getContractList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "V2 Contract APIs",
    "typeScriptTag": "v2ContractApIs",
    "description": "Get Contract List",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "description": "The page to return. Page numbers start at 1.",
        "default": 1
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The number of items to return per page.",
        "default": 10
      },
      {
        "name": "filterClientEmailAddress",
        "schema": "string",
        "description": "Filters on the counter party email. Does an exact match."
      },
      {
        "name": "filterClientName",
        "schema": "string",
        "description": "Filters on the counter party name. Does an exact match."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "SD Base Model from which all other Models should inherit"
      }
    ]
  },
  {
    "url": "/v2/public/contracts",
    "method": "createNewContract",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "V2 Contract APIs",
    "typeScriptTag": "v2ContractApIs",
    "description": "Create Contract",
    "parameters": [
      {
        "name": "userEmail",
        "schema": "string",
        "required": false,
        "description": "The email address of the user to act as (when using client-secret authentication). This header attributes actions taken using the API to the given user."
      },
      {
        "name": "contract_template_id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "contract_data",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "counter_party_details",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "external_metadata",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "entity_reference_id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "workflow_config",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "send_to_counterparty_config",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "contract_name",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "signatories",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "is_embedded_contract",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "The list of Contracts"
      }
    ]
  },
  {
    "url": "/v2/public/contracts/approvals/{contract_id}",
    "method": "getApprovals",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "V2 Contract APIs",
    "typeScriptTag": "v2ContractApIs",
    "description": "Get contract approvals",
    "parameters": [
      {
        "name": "contractId",
        "schema": "string",
        "required": true,
        "description": "ID of the Contract. Should be of the form T-123 or H-123. T stands for Template contracts and H stands for Historical contracts.",
        "example": "CONTRACT_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "SD Base Model from which all other Models should inherit"
      }
    ]
  },
  {
    "url": "/v2/public/contracts/approvals/{contract_id}",
    "method": "createAdhocApprovals",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "V2 Contract APIs",
    "typeScriptTag": "v2ContractApIs",
    "description": "Create and send adhoc approvals",
    "parameters": [
      {
        "name": "contractId",
        "schema": "string",
        "required": true,
        "description": "ID of the Contract. Should be of the form T-123 or H-123. T stands for Template contracts and H stands for Historical contracts.",
        "example": "CONTRACT_ID"
      },
      {
        "name": "approvals",
        "schema": "array",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "SD Base Model from which all other Models should inherit"
      }
    ]
  },
  {
    "url": "/v2/public/contracts/embedded/contracts/{contract_id}/counter_party",
    "method": "getCounterPartyEmbeddedUrl",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "V2 Contract APIs",
    "typeScriptTag": "v2ContractApIs",
    "description": "Get CounterParty Embedded Url",
    "parameters": [
      {
        "name": "cpEmailId",
        "schema": "string",
        "description": "Email address of the CP for which the url needs to be returned."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "SD Base Model from which all other Models should inherit"
      }
    ]
  },
  {
    "url": "/v2/public/contracts/preview",
    "method": "generateContractPreview",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "V2 Contract APIs",
    "typeScriptTag": "v2ContractApIs",
    "description": "Generate Contract Preview",
    "parameters": [
      {
        "name": "contract_template_id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "contract_data",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "organization_entity_id",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "cp_role_label",
        "schema": "string",
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
    "url": "/v2/public/contracts/upload_review_contracts",
    "method": "uploadReviewContracts",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "V2 Contract APIs",
    "typeScriptTag": "v2ContractApIs",
    "description": "Upload Contract For Review",
    "parameters": [
      {
        "name": "contract_name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CONTRACT_NAME"
      },
      {
        "name": "contract_type_id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "file_name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FILE_NAME"
      },
      {
        "name": "file_base64",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FILE_BASE64"
      },
      {
        "name": "creator_organization_entity_id",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "external_metadata",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "reviewer",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "counterparty_workspace_id",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "counterparty_organization_name",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "counterparty_is_individual",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "counterparty_poc_details",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "intake_form_data",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "business_user_email",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "creator_signatories",
        "schema": "array",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Must be kept in sync with ExternalContractV3Serializer"
      }
    ]
  },
  {
    "url": "/v2/public/contracts/upload_sign_contracts",
    "method": "uploadSignContracts",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "V2 Contract APIs",
    "typeScriptTag": "v2ContractApIs",
    "description": "Upload Contract For Signature",
    "parameters": [
      {
        "name": "contract_name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CONTRACT_NAME"
      },
      {
        "name": "contract_type_id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "file_name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FILE_NAME"
      },
      {
        "name": "file_base64",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FILE_BASE64"
      },
      {
        "name": "creator_organization_entity_id",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "counterparty_organization_name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "COUNTERPARTY_ORGANIZATION_NAME"
      },
      {
        "name": "external_metadata",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "counterparty_is_individual",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "counterparty_poc_details",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "intake_form_data",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "business_user_email",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "creator_signatories",
        "schema": "array",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Must be kept in sync with ExternalContractV3Serializer"
      }
    ]
  },
  {
    "url": "/v2/public/contracts/webhooks/re_trigger_latest",
    "method": "reTriggerLatest",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "V2 Contract APIs",
    "typeScriptTag": "v2ContractApIs",
    "description": "Re-trigger Contract Webhooks",
    "parameters": [
      {
        "name": "contract_ids",
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
      }
    ]
  },
  {
    "url": "/v2/public/contracts/{contract_id}/comments",
    "method": "getCommentsInActivityLog",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "V2 Contract APIs",
    "typeScriptTag": "v2ContractApIs",
    "description": "Get comments in contract activity log.",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "description": "The page to return. Page numbers start at 1.",
        "default": 1
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The number of items to return per page.",
        "default": 10
      },
      {
        "name": "contractId",
        "schema": "integer",
        "required": true,
        "description": "ID of the Contract.",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "SD Base Model from which all other Models should inherit"
      }
    ]
  },
  {
    "url": "/v2/public/contracts/{contract_id}/comments",
    "method": "addCommentToActivityLog",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "V2 Contract APIs",
    "typeScriptTag": "v2ContractApIs",
    "description": "Add comment to contract activity log.",
    "parameters": [
      {
        "name": "contractId",
        "schema": "integer",
        "required": true,
        "description": "ID of the Contract.",
        "example": 0
      },
      {
        "name": "comment",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "COMMENT"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "SD Base Model from which all other Models should inherit"
      }
    ]
  },
  {
    "url": "/v2/public/contracts/{contract_id}/contract_version",
    "method": "uploadVersion",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "V2 Contract Version APIs",
    "typeScriptTag": "v2ContractVersionApIs",
    "description": "Upload Contract Version.",
    "parameters": [
      {
        "name": "contractId",
        "schema": "integer",
        "required": true,
        "description": "ID of the Contract.",
        "example": 0
      },
      {
        "name": "document_name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DOCUMENT_NAME"
      },
      {
        "name": "document_base_64",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DOCUMENT_BASE_64"
      },
      {
        "name": "collect_approvals",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": true
      },
      {
        "name": "is_executed_version",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Success"
      }
    ]
  },
  {
    "url": "/v2/public/contracts/{contract_id}/invite",
    "method": "inviteUsersRoles",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "V2 Contract APIs",
    "typeScriptTag": "v2ContractApIs",
    "description": "Invite Users & Roles",
    "parameters": [
      {
        "name": "contractId",
        "schema": "integer",
        "required": true,
        "description": "ID of the Contract.",
        "example": 0
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
        "description": "SD Base Model from which all other Models should inherit"
      }
    ]
  },
  {
    "url": "/v2/public/contracts/{contract_id}/questionnaire/responses",
    "method": "getQuestionnaireResponses",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "V2 Contract APIs",
    "typeScriptTag": "v2ContractApIs",
    "description": "Get Questionnaire Response",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "A page number within the paginated result set."
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Number of results to return per page."
      },
      {
        "name": "contractId",
        "schema": "integer",
        "required": true,
        "description": "ID of the Contract.",
        "example": 0
      },
      {
        "name": "questionnaireType",
        "schema": "string",
        "required": true,
        "description": "Enum: `INTAKE_FORM/TEMPLATE`. Type of the questionnaire for which response needs to be returned.",
        "example": "QUESTIONNAIRE_TYPE"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "SD Base Model from which all other Models should inherit"
      }
    ]
  },
  {
    "url": "/v2/public/contracts/{contract_id}/recipients/recipient_link",
    "method": "getRecipientLink",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "V2 Contract APIs",
    "typeScriptTag": "v2ContractApIs",
    "description": "Get Recipient Link",
    "parameters": [
      {
        "name": "contractId",
        "schema": "integer",
        "required": true,
        "description": "ID of the Contract.",
        "example": 0
      },
      {
        "name": "recipientEmail",
        "schema": "string",
        "required": true,
        "description": "Email of the recipient for whom the link needs to be generated.",
        "example": "RECIPIENT_EMAIL"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "SD Base Model from which all other Models should inherit"
      }
    ]
  },
  {
    "url": "/v2/public/counter_parties",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "V2 Counterparty APIs",
    "typeScriptTag": "v2CounterpartyApIs",
    "description": "List Counterparties",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "description": "The page to return. Page numbers start at 1.",
        "default": 1
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The number of items to return per page.",
        "default": 10
      },
      {
        "name": "filterClientEmailAddress",
        "schema": "string",
        "description": "Filters on the counter party email. Does an exact match."
      },
      {
        "name": "filterCustom_<customFieldName>",
        "schema": "string",
        "description": "Filters all the counterparties which have the custom field values present."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "SD Base Model from which all other Models should inherit"
      }
    ]
  },
  {
    "url": "/v2/public/counter_parties",
    "method": "createCounterparty",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "V2 Counterparty APIs",
    "typeScriptTag": "v2CounterpartyApIs",
    "description": "Create Counterparty",
    "parameters": [
      {
        "name": "is_individual",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "organization_type",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "organization_name",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "contact_name",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "contact_email",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "primary_address",
        "schema": "object",
        "required": false,
        "description": "",
        "example": {
          "line_one": "st: 3, block: 2, Jenkins Road",
          "city_name": "Cincinnati",
          "state_name": "Ohio",
          "zipcode": "513",
          "country_name": "USA",
          "email": "test@yopmail.com",
          "phone": "1234567890",
          "country_iso_code": "US"
        }
      },
      {
        "name": "custom_fields",
        "schema": "object",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "SD Base Model from which all other Models should inherit"
      }
    ]
  },
  {
    "url": "/v2/public/counter_parties/{counterparty_id}/addresses",
    "method": "listAddresses",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "V2 Counterparty APIs",
    "typeScriptTag": "v2CounterpartyApIs",
    "description": "List Counterparty Addresses",
    "parameters": [
      {
        "name": "counterpartyId",
        "schema": "integer",
        "required": true,
        "description": "ID of the Counterparty.",
        "example": 0
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "The page to return. Page numbers start at 1.",
        "default": 1
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The number of items to return per page.",
        "default": 10
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "SD Base Model from which all other Models should inherit"
      }
    ]
  },
  {
    "url": "/v2/public/counter_parties/{counterparty_id}/addresses",
    "method": "createAddress",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "V2 Counterparty APIs",
    "typeScriptTag": "v2CounterpartyApIs",
    "description": "Create Counterparty Address",
    "parameters": [
      {
        "name": "counterpartyId",
        "schema": "integer",
        "required": true,
        "description": "ID of the Counterparty.",
        "example": 0
      },
      {
        "name": "line_one",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "LINE_ONE"
      },
      {
        "name": "city_name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CITY_NAME"
      },
      {
        "name": "state_name",
        "schema": "string",
        "required": false,
        "description": "",
        "default": ""
      },
      {
        "name": "zipcode",
        "schema": "string",
        "required": false,
        "description": "",
        "default": ""
      },
      {
        "name": "email",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "phone",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "country_name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "COUNTRY_NAME"
      },
      {
        "name": "country_iso_code",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "SD Base Model from which all other Models should inherit"
      }
    ]
  },
  {
    "url": "/v2/public/counter_parties/{counterparty_id}/addresses/{address_id}",
    "method": "updateAddress",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "V2 Counterparty APIs",
    "typeScriptTag": "v2CounterpartyApIs",
    "description": "Update Counterparty Address",
    "parameters": [
      {
        "name": "counterpartyId",
        "schema": "integer",
        "required": true,
        "description": "ID of the Counterparty.",
        "example": 0
      },
      {
        "name": "addressId",
        "schema": "integer",
        "required": true,
        "description": "ID of the Counterparty address.",
        "example": 0
      },
      {
        "name": "city_name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "state_name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "country_iso_code",
        "schema": "string",
        "description": ""
      },
      {
        "name": "zipcode",
        "schema": "string",
        "description": ""
      },
      {
        "name": "line_one",
        "schema": "string",
        "description": ""
      },
      {
        "name": "is_primary",
        "schema": "boolean",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "SD Base Model from which all other Models should inherit"
      }
    ]
  },
  {
    "url": "/v2/public/counter_parties/{counterparty_id}/contacts/bulk",
    "method": "bulkUpdateContacts",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "V2 Counterparty APIs",
    "typeScriptTag": "v2CounterpartyApIs",
    "description": "Bulk Update Counterparty Contacts",
    "parameters": [
      {
        "name": "counterpartyId",
        "schema": "integer",
        "required": true,
        "description": "ID of the Counterparty.",
        "example": 0
      },
      {
        "name": "contacts",
        "schema": "array",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "SD Base Model from which all other Models should inherit"
      }
    ]
  },
  {
    "url": "/v2/public/counter_parties/{counterparty_id}/contacts/{contact_id}",
    "method": "deleteCounterpartyContact",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "V2 Counterparty APIs",
    "typeScriptTag": "v2CounterpartyApIs",
    "description": "Delete Counterparty Contact",
    "parameters": [
      {
        "name": "counterpartyId",
        "schema": "integer",
        "required": true,
        "description": "ID of the Counterparty.",
        "example": 0
      },
      {
        "name": "contactId",
        "schema": "integer",
        "required": true,
        "description": "ID of the Counterparty contact.",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Delete Counterparty Contact"
      }
    ]
  },
  {
    "url": "/v2/public/counter_parties/{counterparty_id}/contacts/{contact_id}",
    "method": "updateCounterpartyContact",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "V2 Counterparty APIs",
    "typeScriptTag": "v2CounterpartyApIs",
    "description": "Update Counterparty Contact",
    "parameters": [
      {
        "name": "counterpartyId",
        "schema": "integer",
        "required": true,
        "description": "ID of the Counterparty.",
        "example": 0
      },
      {
        "name": "contactId",
        "schema": "integer",
        "required": true,
        "description": "ID of the Counterparty contact.",
        "example": 0
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "email",
        "schema": "string",
        "description": ""
      },
      {
        "name": "is_primary",
        "schema": "boolean",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "SD Base Model from which all other Models should inherit"
      }
    ]
  },
  {
    "url": "/v2/public/key_pointers",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "V2 KeyPointer APIs",
    "typeScriptTag": "v2KeyPointerApIs",
    "description": "Get KeyPointers",
    "parameters": [
      {
        "name": "contractTypeId",
        "schema": "integer",
        "required": true,
        "description": "ID of the Contract type.",
        "example": 0
      },
      {
        "name": "isExternal",
        "schema": "boolean",
        "required": false,
        "description": "Set to True to get only key pointers from external sections."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "SD Base Model from which all other Models should inherit"
      }
    ]
  },
  {
    "url": "/v2/public/organizations/entities",
    "method": "getAllEntities",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "V2 Organization APIs",
    "typeScriptTag": "v2OrganizationApIs",
    "description": "Get Organization Entities",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "SD Base Model from which all other Models should inherit"
      }
    ]
  },
  {
    "url": "/v2/public/organizations/entities",
    "method": "createEntity",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "V2 Organization APIs",
    "typeScriptTag": "v2OrganizationApIs",
    "description": "Create Entity",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "reference_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "REFERENCE_ID"
      },
      {
        "name": "jurisdiction_iso_code",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "JURISDICTION_ISO_CODE"
      },
      {
        "name": "organization_type_id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "is_primary",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "primary_address",
        "schema": "object",
        "required": true,
        "description": "",
        "example": {
          "city_name": "Houston",
          "state_name": "Texas",
          "zipcode": "77020",
          "line_one": "3659 Burwell Heights Road",
          "country_iso_code": "US"
        }
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "SD Base Model from which all other Models should inherit"
      }
    ]
  },
  {
    "url": "/v2/public/organizations/types",
    "method": "listOrganizationTypes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "V2 Organization APIs",
    "typeScriptTag": "v2OrganizationApIs",
    "description": "Get Organization Types",
    "parameters": [
      {
        "name": "jurisdictionIsoCode",
        "schema": "string",
        "required": false,
        "description": "The ISO-3166-1 Alpha-2 code of the jurisdiction associated with this organization. Any value passed here is overrides `jurisdiction`. Valid values can be found [here](https://en.wikipedia.org/wiki/List_of_ISO_3166_country_codes)."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "SD Base Model from which all other Models should inherit"
      }
    ]
  },
  {
    "url": "/v2/public/supported_documents/{contract_id}",
    "method": "uploadSupportedDocuments",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "V2 Contract APIs",
    "typeScriptTag": "v2ContractApIs",
    "description": "Upload supported documents for a given contract",
    "parameters": [
      {
        "name": "contractId",
        "schema": "string",
        "required": true,
        "description": "ID of the Contract. Should be of the form T-123 or H-123. T stands for Template contracts and H stands for Historical contracts.",
        "example": "CONTRACT_ID"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "file_name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FILE_NAME"
      },
      {
        "name": "file_base64",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FILE_BASE64"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "SD Base Model from which all other Models should inherit"
      }
    ]
  },
  {
    "url": "/v2/public/templates",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "V2 Template APIs",
    "typeScriptTag": "v2TemplateApIs",
    "description": "Get Template List",
    "parameters": [
      {
        "name": "tags",
        "schema": "array",
        "required": false,
        "description": "The tags (if any) to filter the templates by.\n\nMultiple tags can be specified by specifying the query param multiple times. Only templates where the Template tags are a subset of the tags passed will be returned."
      },
      {
        "name": "tagsAll",
        "schema": "array",
        "required": false,
        "description": "The tags (if any) to filter the templates by.\n\nMultiple tags can be specified by specifying the query param multiple times. Only templates where the tags passed are a subset of the Template tags will be returned."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A list of template as returned by the public API"
      }
    ]
  },
  {
    "url": "/v2/public/templates/{template_id}",
    "method": "getDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "V2 Template APIs",
    "typeScriptTag": "v2TemplateApIs",
    "description": "Get Template Details",
    "parameters": [
      {
        "name": "templateId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the template.",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A template along with the updated data as updated by the public API."
      }
    ]
  },
  {
    "url": "/v2/public/templates/{template_id}",
    "method": "updateContractData",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "V2 Template APIs",
    "typeScriptTag": "v2TemplateApIs",
    "description": "Update Template Data",
    "parameters": [
      {
        "name": "templateId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the template.",
        "example": 0
      },
      {
        "name": "tags",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A template along with the updated data as updated by the public API."
      }
    ]
  },
  {
    "url": "/v2/public/user_tasks",
    "method": "createUserTasksList",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "V2 Tasks and Reminders APIs",
    "typeScriptTag": "v2TasksAndRemindersApIs",
    "description": "V2 Create User Tasks List",
    "parameters": [
      {
        "name": "title",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TITLE"
      },
      {
        "name": "notes",
        "schema": "string",
        "required": false,
        "description": "",
        "default": ""
      },
      {
        "name": "contract_id",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "due_date",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "due_date_key_pointer_id",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "assignees",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "reminders",
        "schema": "array",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "SD Base Model from which all other Models should inherit"
      }
    ]
  }
]
    }
      language="TypeScript"
      apiTitle="SpotDraft API"
      apiBaseUrl="https://api.spotdraft.com/api"
      apiVersion="v1"
      endpoints={109}
      sdkMethods={243}
      schemas={237}
      parameters={436}
      difficulty="Hard"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/spotdraft/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/spotdraft/openapi.yaml"
      developerDocumentation="api.spotdraft.com/api/docs"
    />
  );
}
  