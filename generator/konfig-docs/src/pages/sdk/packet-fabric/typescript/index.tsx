import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function PacketFabricTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="packet-fabric-typescript-sdk"
      metaDescription={`PacketFabric is the Connectivity Cloud, designed from the ground up for scale, performance, programmability, elasticity, and security without compromise, enabling enterprises to build an agile cloud core that delivers optimal digital business outcomes. PacketFabric's Network-as-a-Service (NaaS) platform leverages a massively scalable private optical network, the latest in packet switching technology, and end-to-end automation. PacketFabric delivers on-demand, private, and secure connectivity services between hundreds of premier colocation facilities and cloud providers across the globe. IT, network, and DevOps teams can deploy cloud-scale connectivity in minutes via an advanced Application Program Interface (API) and web portal. PacketFabric was recognized as the "2020 Fierce Telecom Innovation Award for Cloud Services," named one of the "10 Hottest Networking Startups of 2020" by CRN, a Futuriom 40 Top Private Company, and a "2020 Cool Vendor in Enhanced Internet Services and Cloud Connectivity" by Gartner. PacketFabric investors include NantWorks and Digital Alpha Advisors. For more information, visit packetfabric.com.`}
      company="PacketFabric"
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/packetfabric/logo.png"
      companyKebabCase="packet-fabric"
      clientNameCamelCase="packetFabric"
      homepage="packetfabric.com"
      lastUpdated={new Date("2024-03-29T22:59:11.252Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/packetfabric/favicon.png"
      // Missing contactUrl
      // Missing contactEmail
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/packetfabric/imagePreview.svg"
      GettingStarted={GettingStarted}
      FirstRequest={FirstRequest}
      categories={["network"]}
      methods={[
  {
    "url": "/v2/activity-logs/{log_uuid}",
    "method": "getEntry",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Activity Logs",
    "typeScriptTag": "activityLogs",
    "description": "Get activity log entry",
    "parameters": [
      {
        "name": "logUuid",
        "schema": "string",
        "required": true,
        "description": "UUID of Activity Log entry",
        "example": "LOG_UUID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Holds an information about important events"
      }
    ]
  },
  {
    "url": "/v2/activity-logs",
    "method": "getActivityLogList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Activity Logs",
    "typeScriptTag": "activityLogs",
    "description": "Get activity log entries",
    "parameters": [
      {
        "name": "level",
        "schema": "integer",
        "required": false,
        "description": "Filter by [the level](https://tools.ietf.org/html/rfc5424#page-11)",
        "example": 3
      },
      {
        "name": "category",
        "schema": "string",
        "required": false,
        "description": "Filter by category"
      },
      {
        "name": "circuitId",
        "schema": "string",
        "required": false,
        "description": "Unified circuit_id filter, supports filtering by:\n- Port - port_circuit_id (eg. PF-AP-SFO1-58)\n- VirtualCircuit - vc_circuit_id (eg. PF-BC-NYC-NYC-12345)\n- Cloud - cloud_circuit_id (eg. PF-CC-GOG-GOG-12345)\n- Point to Point - ptp_circuit_id (eg. PF-PD-LAX-NYC-12345)\n- Cloud Router - cloud_router_circuit_id (eg. PF-L3-CUST-12345)\n- Cloud Router Connection - connection_circuit_id (eg. PF-L3-CON-12345)\n- High Performance Internet - hpi_circuit_id (eg. PF-L3-TRAN-12345)\n",
        "example": "PF-BC-NYC-NYC-12345"
      },
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": "The description of the port to be queried",
        "example": "The user description"
      },
      {
        "name": "event",
        "schema": "string",
        "required": false,
        "description": "Filter by event",
        "example": "login"
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "Number of records to skip",
        "example": 20
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "required": false,
        "description": "Number of records to show",
        "example": 10
      },
      {
        "name": "sortColumn",
        "schema": "string",
        "required": false,
        "description": "Column to sort results on",
        "example": "time_created"
      },
      {
        "name": "sortOrder",
        "schema": "string",
        "required": false,
        "description": "Sort order"
      },
      {
        "name": "timeFrom",
        "schema": "string",
        "required": false,
        "description": "Filter by time_created greater than (https://docs.packetfabric.com/api/v2/ or equal to this time.",
        "example": "2020-04-01T19:14:42.642Z"
      },
      {
        "name": "timeTo",
        "schema": "string",
        "required": false,
        "description": "Filter by time_created less than (https://docs.packetfabric.com/api/v2/ or equal to this time.",
        "example": "2020-04-30T19:14:42.642Z"
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
    "url": "/v2/api-keys",
    "method": "getUserList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "API keys",
    "typeScriptTag": "apiKeys",
    "description": "Get the list of user's API keys",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/api-keys",
    "method": "createNewKey",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "API keys",
    "typeScriptTag": "apiKeys",
    "description": "Add the new API key",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Silver key"
      },
      {
        "name": "expiration",
        "schema": "integer",
        "required": false,
        "description": "",
        "example": 100500
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Information about API key"
      }
    ]
  },
  {
    "url": "/v2/api-keys/{uuid}",
    "method": "deleteByKey",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "API keys",
    "typeScriptTag": "apiKeys",
    "description": "Deletes API key by UUID",
    "parameters": [
      {
        "name": "uuid",
        "schema": "string",
        "required": true,
        "description": "Target API key UUID",
        "example": "UUID"
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
    "url": "/v2/auth/login",
    "method": "login",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Authentication",
    "typeScriptTag": "authentication",
    "description": "Login",
    "parameters": [
      {
        "name": "sessionToken",
        "schema": "string",
        "required": true,
        "description": "A valid session_token for the user",
        "example": "SESSION_TOKEN"
      },
      {
        "name": "timeout",
        "schema": "integer",
        "required": false,
        "description": "Timeout in minutes to set the session expiration"
      }
    ],
    "responses": [
      {
        "statusCode": "default",
        "description": "Redirect to the PacketFabric Portal dashboard"
      }
    ]
  },
  {
    "url": "/v2/auth/login",
    "method": "startSession",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Authentication",
    "typeScriptTag": "authentication",
    "description": "Login",
    "parameters": [
      {
        "name": "login",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "LOGIN"
      },
      {
        "name": "password",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PASSWORD"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "User session information"
      }
    ]
  },
  {
    "url": "/v2/auth/login/mfa",
    "method": "mfa",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Multi-Factor Authentication",
    "typeScriptTag": "multiFactorAuthentication",
    "description": "Login into the application using a multi-factor authentication code",
    "parameters": [
      {
        "name": "authentication_code",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "AUTHENTICATION_CODE"
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
    "url": "/v2/auth/logout",
    "method": "invalidateSession",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Authentication",
    "typeScriptTag": "authentication",
    "description": "Logout",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/auth/sessions",
    "method": "removeAllSessions",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Authentication",
    "typeScriptTag": "authentication",
    "description": "Deletes all user sessions",
    "parameters": [
      {
        "name": "userUuid",
        "schema": "string",
        "description": "User UUID to delete sessions for (for Admin only)"
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
    "url": "/v2/auth/sessions",
    "method": "getAllActiveUserSessions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Authentication",
    "typeScriptTag": "authentication",
    "description": "Get all active user sessions",
    "parameters": [
      {
        "name": "userUuid",
        "schema": "string",
        "description": "User UUID to get sessions for (for Admin only)"
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
    "url": "/v2/bgp-settings",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Cloud Router BGP Session Settings",
    "typeScriptTag": "cloudRouterBgpSessionSettings",
    "description": "Returns a list of BGP settings instances associated with the current account.",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/bgp-settings/{bgp_settings_uuid}/prefixes",
    "method": "listPrefixes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Cloud Router BGP Session Settings",
    "typeScriptTag": "cloudRouterBgpSessionSettings",
    "description": "Returns a list of prefixes associated with a BGP settings instance.",
    "parameters": [
      {
        "name": "bgpSettingsUuid",
        "schema": "string",
        "required": true,
        "description": "UUID of BGP settings to fetch prefixes for.",
        "example": "BGP_SETTINGS_UUID"
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
    "url": "/v2/bgp-settings/{bgp_settings_uuid}/l3",
    "method": "getL3IflData",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Cloud Router BGP Session Settings",
    "typeScriptTag": "cloudRouterBgpSessionSettings",
    "description": "Returns the L3 IFL data associated with a BGP Session.",
    "parameters": [
      {
        "name": "bgpSettingsUuid",
        "schema": "string",
        "required": true,
        "description": "UUID of BGP settings to fetch prefixes for.",
        "example": "BGP_SETTINGS_UUID"
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
    "url": "/v2/billing/services/{circuit_id}",
    "method": "order",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Billing",
    "typeScriptTag": "billing",
    "description": "Returns billing details for the given circuit (Port, Cloud, or Virtual Circuit)",
    "parameters": [
      {
        "name": "circuitId",
        "schema": "string",
        "required": true,
        "description": "ID of Port, Cloud, or Virtual Circuit to fetch billing data for",
        "example": "CIRCUIT_ID"
      },
      {
        "name": "serviceType",
        "schema": "string",
        "required": false,
        "description": "(https://docs.packetfabric.com/api/v2/ You can specify the type of the product to fetch the order for",
        "example": "cross-connect"
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
    "url": "/v2/billing/services/{circuit_id}/modify",
    "method": "order",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Billing",
    "typeScriptTag": "billing",
    "description": "Modify an existing order",
    "parameters": [
      {
        "name": "circuitId",
        "schema": "string",
        "required": true,
        "description": "Circuit ID of the order to modify",
        "example": "CIRCUIT_ID"
      },
      {
        "name": "subscription_term",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "speed",
        "schema": "string",
        "description": "",
        "example": "100Gbps"
      },
      {
        "name": "billing_product_type",
        "schema": "string",
        "description": ""
      },
      {
        "name": "service_class",
        "schema": "string",
        "description": "",
        "example": "longhaul"
      },
      {
        "name": "capacity",
        "schema": "string",
        "description": "",
        "example": "100Gbps"
      },
      {
        "name": "regions",
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
        "statusCode": "202",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/billing/services/{circuit_id}/modify/preview",
    "method": "modifyOrderPreview",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Billing",
    "typeScriptTag": "billing",
    "description": "Preview the price of modifying an existing order. Currently only supports renewals without speed upgrades.",
    "parameters": [
      {
        "name": "circuitId",
        "schema": "string",
        "required": true,
        "description": "Circuit ID of the order to modify",
        "example": "CIRCUIT_ID"
      },
      {
        "name": "subscription_term",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "speed",
        "schema": "string",
        "description": "",
        "example": "100Gbps"
      },
      {
        "name": "billing_product_type",
        "schema": "string",
        "description": ""
      },
      {
        "name": "service_class",
        "schema": "string",
        "description": "",
        "example": "longhaul"
      },
      {
        "name": "capacity",
        "schema": "string",
        "description": "",
        "example": "100Gbps"
      },
      {
        "name": "regions",
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
    "url": "/v2/billing/services/{account_uuid}",
    "method": "accountOrdersGet",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Billing",
    "typeScriptTag": "billing",
    "description": "Returns all orders for the given billing account",
    "parameters": [
      {
        "name": "accountUuid",
        "schema": "string",
        "required": true,
        "description": "UUID of the billing account",
        "example": "ACCOUNT_UUID"
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
    "url": "/v2/billing/pricing",
    "method": "pricing",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Billing",
    "typeScriptTag": "billing",
    "description": "Get pricing for specific services",
    "parameters": [
      {
        "name": "productType",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PRODUCT_TYPE"
      },
      {
        "name": "subscriptionTerm",
        "schema": "integer",
        "required": false,
        "description": "The subscription term, in months, to retrieve pricing for"
      },
      {
        "name": "locationType",
        "schema": "string",
        "required": true,
        "description": "Filter pricing info by location type. If no pricing is found, the service will attempt to search by a broader location type. eg. site -> pop",
        "example": "pop"
      },
      {
        "name": "sideA",
        "schema": "string",
        "required": false,
        "description": "Code for the a-side location eg. SFO1.  When using this paramater to filter results, ensure location_type is also set.",
        "example": "SFO1"
      },
      {
        "name": "sideZ",
        "schema": "string",
        "required": false,
        "description": "Code for the z-side location eg. NYC1.  When using this paramater to filter results, ensure location_type is also set.",
        "example": "NYC1"
      },
      {
        "name": "networkProviderA",
        "schema": "string",
        "required": false,
        "description": "Limit results to pricing for a specific network provider on the a side. Valid for location_type of market or region."
      },
      {
        "name": "networkProviderZ",
        "schema": "string",
        "required": false,
        "description": "Limit results to pricing for a specific network provider on the z side. Valid for location_type of market or region."
      },
      {
        "name": "media",
        "schema": "string",
        "required": false,
        "description": "Optic media type",
        "example": "LX"
      },
      {
        "name": "provider",
        "schema": "string",
        "required": false,
        "description": "Filter pricing by provider type",
        "example": "aws"
      },
      {
        "name": "bandwidthType",
        "schema": "string",
        "required": false,
        "description": "Filter by dedicated or usage-base pricing",
        "example": "usage"
      },
      {
        "name": "serviceClass",
        "schema": "string",
        "required": false,
        "description": "Filter by metro or longhaul connections",
        "example": "metro"
      },
      {
        "name": "speed",
        "schema": "string",
        "required": false,
        "description": "Filter by connection speed"
      },
      {
        "name": "accountUuid",
        "schema": "string",
        "required": false,
        "description": "Filter for account specific pricing",
        "example": "c25e0c64-6da7-487e-8f47-f5e744813976"
      },
      {
        "name": "addOnFeeKey",
        "schema": "string",
        "required": false,
        "description": "Filter by the add-on fee key - this is only used for add_on_fee product types"
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
    "url": "/v2/billing/services/early-termination-liability/{circuit_id}",
    "method": "earlyTerminationCost",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Billing",
    "typeScriptTag": "billing",
    "description": "Returns cost for stopping service on a circuit with a subscription term early",
    "parameters": [
      {
        "name": "circuitId",
        "schema": "string",
        "required": true,
        "description": "ID of circuit to get early termination liability for",
        "example": "CIRCUIT_ID"
      },
      {
        "name": "terminationDate",
        "schema": "string",
        "required": false,
        "description": "Datetime (ISO-8601 format) for which to fetch the early termination liability. Defaults to right now. User's timezone will be used if timestamp is not timezone aware. Examples: `2020-04-01T19:14:42.642+00:00`, `2020-04-01T19:14:42.642`",
        "example": "2020-04-01T19:14:42"
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
    "url": "/v2/billing/accounts/{account_uuid}/invoices",
    "method": "invoices",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Billing",
    "typeScriptTag": "billing",
    "description": "Returns list of invoices",
    "parameters": [
      {
        "name": "accountUuid",
        "schema": "string",
        "required": true,
        "description": "uuid of the billing account to get the list of invoices for",
        "example": "ACCOUNT_UUID"
      },
      {
        "name": "startDate",
        "schema": "string",
        "required": false,
        "description": "Filter invoices which created after the start_date (https://docs.packetfabric.com/api/v2/",
        "example": "2020-04-01"
      },
      {
        "name": "endDate",
        "schema": "string",
        "required": false,
        "description": "Filter invoices which created before the end_date (https://docs.packetfabric.com/api/v2/",
        "example": "2020-04-01"
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
    "url": "/v2/billing/accounts/{account_uuid}/invoices/{invoice_id}.pdf",
    "method": "pdf",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Billing",
    "typeScriptTag": "billing",
    "description": "Returns invoice as PDF",
    "parameters": [
      {
        "name": "accountUuid",
        "schema": "string",
        "required": true,
        "description": "uuid of the billing account to get the list of invoices for",
        "example": "ACCOUNT_UUID"
      },
      {
        "name": "invoiceId",
        "schema": "integer",
        "required": true,
        "description": "Filter invoices which created after the start_date",
        "example": 1
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
    "url": "/v2/billing/accounts/{account_uuid}/invoices/{invoice_id}.csv",
    "method": "csv",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Billing",
    "typeScriptTag": "billing",
    "description": "Returns invoice as CSV",
    "parameters": [
      {
        "name": "accountUuid",
        "schema": "string",
        "required": true,
        "description": "uuid of the billing account to get the list of invoices for",
        "example": "ACCOUNT_UUID"
      },
      {
        "name": "invoiceId",
        "schema": "integer",
        "required": true,
        "description": "Filter invoices which created after the start_date",
        "example": 1
      },
      {
        "name": "condensed",
        "schema": "boolean",
        "required": false,
        "description": "Get condensed CSV output",
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
    "url": "/v2/billing/stripe/{account_uuid}/stripe_customer_session",
    "method": "getStripeCustomerSessionUrl",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Billing",
    "typeScriptTag": "billing",
    "description": "Returns stripe customer portal session url",
    "parameters": [
      {
        "name": "accountUuid",
        "schema": "string",
        "required": true,
        "description": "uuid of the billing account to get the stripe customer portal session for",
        "example": "ACCOUNT_UUID"
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
    "url": "/v2/contacts",
    "method": "getCurrentCustomerList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Contacts",
    "typeScriptTag": "contacts",
    "description": "Get the contacts associated with the current customer",
    "parameters": [
      {
        "name": "billing",
        "schema": "boolean",
        "required": false,
        "description": "Filter for billing contacts (`true`) or non-billing contacts (`false`)"
      },
      {
        "name": "contactUuid",
        "schema": "string",
        "required": false,
        "description": "Filter contact by UUID"
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
    "url": "/v2/contacts",
    "method": "post",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Contacts",
    "typeScriptTag": "contacts",
    "description": "Add the contact for the current customer",
    "parameters": [
      {
        "name": "first_name",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "James"
      },
      {
        "name": "last_name",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Bond"
      },
      {
        "name": "email",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "email@example.com"
      },
      {
        "name": "phone",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "111-111-1111"
      },
      {
        "name": "address_1",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "1 Fake Road"
      },
      {
        "name": "address_2",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Suite 112"
      },
      {
        "name": "city",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Chicago"
      },
      {
        "name": "state",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "IL"
      },
      {
        "name": "postal",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "12345"
      },
      {
        "name": "country",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "US"
      },
      {
        "name": "po_number",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "PO-1234"
      },
      {
        "name": "admin",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "billing",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "tech",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "default_billing",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "automatic_payments_enabled",
        "schema": "boolean",
        "required": false,
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
    "url": "/v2/contacts/{contact_uuid}",
    "method": "delete",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Contacts",
    "typeScriptTag": "contacts",
    "description": "Delete a single contact",
    "parameters": [
      {
        "name": "contactUuid",
        "schema": "string",
        "required": true,
        "description": "UUID of the contact to delete",
        "example": "CONTACT_UUID"
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
    "url": "/v2/contacts/{contact_uuid}",
    "method": "get",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Contacts",
    "typeScriptTag": "contacts",
    "description": "Get a single contact",
    "parameters": [
      {
        "name": "contactUuid",
        "schema": "string",
        "required": true,
        "description": "UUID of the contact to fetch",
        "example": "CONTACT_UUID"
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
    "url": "/v2/contacts/{contact_uuid}",
    "method": "update",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Contacts",
    "typeScriptTag": "contacts",
    "description": "Update contact",
    "parameters": [
      {
        "name": "contactUuid",
        "schema": "string",
        "required": true,
        "description": "UUID of the contact to update",
        "example": "CONTACT_UUID"
      },
      {
        "name": "first_name",
        "schema": "string",
        "description": "",
        "example": "James"
      },
      {
        "name": "last_name",
        "schema": "string",
        "description": "",
        "example": "Bond"
      },
      {
        "name": "email",
        "schema": "string",
        "description": "",
        "example": "user@example.com"
      },
      {
        "name": "phone",
        "schema": "string",
        "description": "",
        "example": "111-111-1111"
      },
      {
        "name": "address_1",
        "schema": "string",
        "description": "",
        "example": "1 Fake Road"
      },
      {
        "name": "address_2",
        "schema": "string",
        "description": "",
        "example": "Suite 112"
      },
      {
        "name": "city",
        "schema": "string",
        "description": "",
        "example": "Chicago"
      },
      {
        "name": "state",
        "schema": "string",
        "description": "",
        "example": "IL"
      },
      {
        "name": "postal",
        "schema": "string",
        "description": "",
        "example": "12345"
      },
      {
        "name": "country",
        "schema": "string",
        "description": "",
        "example": "US"
      },
      {
        "name": "po_number",
        "schema": "string",
        "description": "",
        "example": "PO-1234"
      },
      {
        "name": "admin",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "billing",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "tech",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "default_billing",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "automatic_payments_enabled",
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
    "url": "/v2/contacts/{contact_uuid}/links/{circuit_id}",
    "method": "deleteLink",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Contacts",
    "typeScriptTag": "contacts",
    "description": "Delete a link between a technical contact and a circuit",
    "parameters": [
      {
        "name": "contactUuid",
        "schema": "string",
        "required": true,
        "description": "UUID of the contact to unlink.",
        "example": "CONTACT_UUID"
      },
      {
        "name": "circuitId",
        "schema": "string",
        "required": true,
        "description": "Circuit to unlink.",
        "example": "PF-AP-WDC1-1234"
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
    "url": "/v2/contacts/{contact_uuid}/links/{circuit_id}",
    "method": "linkCircuit",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Contacts",
    "typeScriptTag": "contacts",
    "description": "Link a technical contact to a circuit",
    "parameters": [
      {
        "name": "contactUuid",
        "schema": "string",
        "required": true,
        "description": "UUID of the contact to link. Must be a technical contact.",
        "example": "CONTACT_UUID"
      },
      {
        "name": "circuitId",
        "schema": "string",
        "required": true,
        "description": "Circuit to link.",
        "example": "PF-AP-WDC1-1234"
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
    "url": "/v2/contacts/links",
    "method": "getContactCircuitLinks",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Contacts",
    "typeScriptTag": "contacts",
    "description": "Retrieve list of contact-circuit links",
    "parameters": [
      {
        "name": "contactUuid",
        "schema": "string",
        "required": false,
        "description": "Only retrieve links associated with this contact"
      },
      {
        "name": "circuitId",
        "schema": "string",
        "required": false,
        "description": "Only retrieve links associated with this circuit",
        "example": "PF-AP-WDC1-1234"
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
    "url": "/v2/customers/company-types",
    "method": "getCompanyTypes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Customers",
    "typeScriptTag": "customers",
    "description": "Get list of company types",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/customers/current",
    "method": "get",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Customers",
    "typeScriptTag": "customers",
    "description": "Get current customer data",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/customers/current",
    "method": "update",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Customers",
    "typeScriptTag": "customers",
    "description": "Update current customer data",
    "parameters": [
      {
        "name": "description",
        "schema": "string",
        "description": "",
        "example": "Importer/exporter"
      },
      {
        "name": "name",
        "schema": "string",
        "description": "",
        "example": "Vandelay Industries"
      },
      {
        "name": "website",
        "schema": "string",
        "description": "",
        "example": "vandelayindustries.com"
      },
      {
        "name": "aliases",
        "schema": "string",
        "description": "",
        "example": "DM Scranton"
      },
      {
        "name": "notes",
        "schema": "string",
        "description": "",
        "example": "Cloud services via Amazon Direct Connect"
      },
      {
        "name": "searchable",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "customer_wide_mfa",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "password",
        "schema": "string",
        "description": "",
        "example": "password111"
      },
      {
        "name": "company_type_code",
        "schema": "string",
        "description": "",
        "example": "LLC"
      },
      {
        "name": "service_provider_types",
        "schema": "array",
        "description": ""
      },
      {
        "name": "industries",
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
    "url": "/v2/customers/images/{uuid}",
    "method": "getLogoByUuid",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Customers",
    "typeScriptTag": "customers",
    "description": "Return customer logo for provided customer's UUID",
    "parameters": [
      {
        "name": "uuid",
        "schema": "string",
        "required": true,
        "description": "Customer UUID",
        "example": "UUID"
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
    "url": "/v2/customers/current/image",
    "method": "uploadLogoImage",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Customers",
    "typeScriptTag": "customers",
    "description": "Upload image file with a company logo. Supported formats are PNG, JPEG or BMP",
    "parameters": [
      {
        "name": "image",
        "schema": "string",
        "description": "",
        "example": "JPEG, PNG or BMP image file"
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
    "url": "/v2/customers/current/locations",
    "method": "getLocationList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Customers",
    "typeScriptTag": "customers",
    "description": "Get location list for the current customer",
    "parameters": [
      {
        "name": "pop",
        "schema": "string",
        "required": false,
        "description": "Filter locations by the POP name",
        "example": "LAX1"
      },
      {
        "name": "city",
        "schema": "string",
        "required": false,
        "description": "Filter locations by the city name",
        "example": "Los Angeles"
      },
      {
        "name": "state",
        "schema": "string",
        "required": false,
        "description": "Filter locations by the state",
        "example": "CA"
      },
      {
        "name": "market",
        "schema": "string",
        "required": false,
        "description": "Filter locations by the market code",
        "example": "LAX"
      },
      {
        "name": "region",
        "schema": "string",
        "required": false,
        "description": "Filter locations by the region's short name",
        "example": "US"
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
    "url": "/v2/customers/current/account-managers",
    "method": "getCurrentAccountManagers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Customers",
    "typeScriptTag": "customers",
    "description": "Get all customer account managers for the current customer",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/customers/current/sales-team",
    "method": "getCurrentSalesTeam",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Customers",
    "typeScriptTag": "customers",
    "description": "Get the sales team details for the current customer",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/customers",
    "method": "customers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Customers",
    "typeScriptTag": "customers",
    "description": "Get customer list by filter params",
    "parameters": [
      {
        "name": "q",
        "schema": "string",
        "required": false,
        "description": "Search query string used to filter customers by name or description"
      },
      {
        "name": "name",
        "schema": "string",
        "required": false,
        "description": "Filter customers by exact name"
      },
      {
        "name": "routingId",
        "schema": "string",
        "required": false,
        "description": "Filter customers by Customer Routing ID"
      },
      {
        "name": "market",
        "schema": "string",
        "required": false,
        "description": "Filter customers by the market operated in"
      },
      {
        "name": "pop",
        "schema": "string",
        "required": false,
        "description": "Filter customers by POP name"
      },
      {
        "name": "type",
        "schema": "array",
        "required": false,
        "description": "Filter customers by type. Accepts either a single value or an array of values."
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
    "url": "/v2/customers/{customer_uuid}/industries",
    "method": "getIndustriesByUuid",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Customers",
    "typeScriptTag": "customers",
    "description": "Return customer industries by UUID",
    "parameters": [
      {
        "name": "customerUuid",
        "schema": "string",
        "required": true,
        "description": "UUID of chosen customer",
        "example": "CUSTOMER_UUID"
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
    "url": "/v2/customers/{customer_uuid}/locations",
    "method": "getLocationsByUuid",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Customers",
    "typeScriptTag": "customers",
    "description": "Return customer locations by UUID",
    "parameters": [
      {
        "name": "customerUuid",
        "schema": "string",
        "required": true,
        "description": "UUID of chosen customer",
        "example": "CUSTOMER_UUID"
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
    "url": "/v2/customers/{customer_uuid}/service-provider-types",
    "method": "getServiceProviderTypesByUuid",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Customers",
    "typeScriptTag": "customers",
    "description": "Return customer service_provider_types by UUID",
    "parameters": [
      {
        "name": "customerUuid",
        "schema": "string",
        "required": true,
        "description": "UUID of chosen customer",
        "example": "CUSTOMER_UUID"
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
    "url": "/v2/customers/current/ix-details",
    "method": "updateIxDetails",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Customers",
    "typeScriptTag": "customers",
    "description": "Update IX details for the current customer",
    "parameters": [
      {
        "name": "pricing_url",
        "schema": "string",
        "description": "",
        "example": "https://ix-example.pf/connect/guide"
      },
      {
        "name": "redirect_url",
        "schema": "string",
        "description": "",
        "example": "https://ix-example.pf/connect/provision"
      },
      {
        "name": "tiers",
        "schema": "array",
        "description": ""
      },
      {
        "name": "order_completion_method",
        "schema": "string",
        "description": "",
        "example": "email"
      },
      {
        "name": "email",
        "schema": "string",
        "description": "",
        "example": "contacts@ix-example.pf"
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
    "url": "/v2/customers/{customer_uuid}/ix-details",
    "method": "ixDetailsGet",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Customers",
    "typeScriptTag": "customers",
    "description": "Return IX details by IX customer UUID",
    "parameters": [
      {
        "name": "customerUuid",
        "schema": "string",
        "required": true,
        "description": "UUID of chosen customer",
        "example": "CUSTOMER_UUID"
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
    "url": "/v2/diagnostic-reports",
    "method": "reports",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Diagnostic Reports",
    "typeScriptTag": "diagnosticReports",
    "description": "Get diagnostic reports",
    "parameters": [
      {
        "name": "pageSize",
        "schema": "integer",
        "required": false,
        "description": "The number of results to return per page"
      },
      {
        "name": "reason",
        "schema": "string",
        "required": false,
        "description": "The reason to filter by"
      },
      {
        "name": "userLogin",
        "schema": "string",
        "required": false,
        "description": "The user login to filter by"
      },
      {
        "name": "circuitId",
        "schema": "string",
        "required": false,
        "description": "Circuit ID of the service to get the reports"
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "The offset of results for this page"
      },
      {
        "name": "q",
        "schema": "string",
        "required": false,
        "description": "Search query string used to filter reports"
      },
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": "The user provided description of the report"
      },
      {
        "name": "sortColumn",
        "schema": "string",
        "required": false,
        "description": "Column to sort results on"
      },
      {
        "name": "sortOrder",
        "schema": "string",
        "required": false,
        "description": "The offset of results for this page"
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
    "url": "/v2/diagnostic-reports",
    "method": "createReport",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Diagnostic Reports",
    "typeScriptTag": "diagnosticReports",
    "description": "Create a diagnostic report",
    "parameters": [
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "User provided description"
      },
      {
        "name": "circuit_ids",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "start_time",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "START_TIME"
      },
      {
        "name": "include_related",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": false
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
    "url": "/v2/diagnostic-reports/{report_uuid}",
    "method": "report",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Diagnostic Reports",
    "typeScriptTag": "diagnosticReports",
    "description": "Delete diagnostic report",
    "parameters": [
      {
        "name": "reportUuid",
        "schema": "string",
        "required": true,
        "description": "UUID of the diagnostic report to delete",
        "example": "REPORT_UUID"
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
    "url": "/v2/diagnostic-reports/{report_uuid}",
    "method": "report",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Diagnostic Reports",
    "typeScriptTag": "diagnosticReports",
    "description": "Get diagnostic report details by UUID",
    "parameters": [
      {
        "name": "reportUuid",
        "schema": "string",
        "required": true,
        "description": "UUID of the diagnostic report to fetch",
        "example": "REPORT_UUID"
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
    "url": "/v2/documents",
    "method": "listFilteredByParams",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Documents",
    "typeScriptTag": "documents",
    "description": "Get documents list filtered by params",
    "parameters": [
      {
        "name": "uuid",
        "schema": "string",
        "description": "Search documents by UUID",
        "example": "12a30d30-20c0-4f62-a982-eb1424631094"
      },
      {
        "name": "name",
        "schema": "string",
        "required": false,
        "description": "Search document by name",
        "example": "loa.pdf"
      },
      {
        "name": "type",
        "schema": "string",
        "description": "Search document by type",
        "example": "loa"
      },
      {
        "name": "portCircuitId",
        "schema": "string",
        "description": "Search LOA by port id",
        "example": "PF-AP-WDC1-1000"
      },
      {
        "name": "pop",
        "schema": "string",
        "description": "Search LOA by pop",
        "example": "WDC1"
      },
      {
        "name": "vcCircuitId",
        "schema": "string",
        "description": "Search service orders by Virtual Circuit ID",
        "example": "PF-DC-SMF-PDX-12345"
      },
      {
        "name": "cloudRouterCircuitId",
        "schema": "string",
        "description": "Search service orders by Cloud Router Circuit ID",
        "example": "PF-L3-CUST-1400"
      },
      {
        "name": "cloudRouterConnectionCircuitId",
        "schema": "string",
        "description": "Search service orders by Cloud Router Connection Circuit ID",
        "example": "PF-L3-CON-12345"
      },
      {
        "name": "hpiCircuitId",
        "schema": "string",
        "description": "Search service orders by High Performance Internet Circuit ID",
        "example": "PF-L3-TRAN-1400"
      },
      {
        "name": "aggregateCapacityId",
        "schema": "string",
        "description": "Search service orders by Flex Bandwidth Container ID",
        "example": "PF-AB-12345"
      },
      {
        "name": "flexBandwidthId",
        "schema": "string",
        "description": "Search service orders by Flex Bandwidth Container ID",
        "example": "PF-AB-12345"
      },
      {
        "name": "q",
        "schema": "string",
        "required": false,
        "description": "Search documents by partial name",
        "example": "loa"
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "Number of records to skip",
        "example": 20
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "required": false,
        "description": "Number of records to show",
        "example": 10
      },
      {
        "name": "sortColumn",
        "schema": "string",
        "required": false,
        "description": "Column to sort results on"
      },
      {
        "name": "sortOrder",
        "schema": "string",
        "required": false,
        "description": "Sort order"
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
    "url": "/v2/documents",
    "method": "upload",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Documents",
    "typeScriptTag": "documents",
    "description": "Create/Upload a document",
    "parameters": [
      {
        "name": "description",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "description example"
      },
      {
        "name": "document",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DOCUMENT"
      },
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "loa"
      },
      {
        "name": "port_circuit_id",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "PF-AP-WDC1-1000"
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
    "url": "/v2/documents/{uuid}",
    "method": "download",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Documents",
    "typeScriptTag": "documents",
    "description": "Download the document",
    "parameters": [
      {
        "name": "uuid",
        "schema": "string",
        "required": true,
        "description": "UUID of the document to download",
        "example": "UUID"
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
    "url": "/v2/events",
    "method": "createSubscription",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Streaming Events - Beta",
    "typeScriptTag": "streamingEventsBeta",
    "description": "Create event subscription",
    "parameters": [
      {
        "name": "streams",
        "schema": "array",
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
    "url": "/v2/events/{uuid}",
    "method": "events",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Streaming Events - Beta",
    "typeScriptTag": "streamingEventsBeta",
    "description": "Stream events",
    "parameters": [
      {
        "name": "uuid",
        "schema": "string",
        "required": true,
        "description": "UUID of the subscription bundle",
        "example": "UUID"
      }
    ],
    "responses": [
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/flex-bandwidth",
    "method": "getAllContainers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Flex Bandwidth",
    "typeScriptTag": "flexBandwidth",
    "description": "Get all flex bandwidth containers for the current customer",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/flex-bandwidth",
    "method": "createContainer",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Flex Bandwidth",
    "typeScriptTag": "flexBandwidth",
    "description": "Create a flex bandwidth container",
    "parameters": [
      {
        "name": "description",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Flex bandwidth container description"
      },
      {
        "name": "account_uuid",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACCOUNT_UUID"
      },
      {
        "name": "subscription_term",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 12
      },
      {
        "name": "capacity",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "100Gbps"
      },
      {
        "name": "po_number",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "PO-1234"
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
    "url": "/v2/flex-bandwidth/{flex_bandwidth_id}",
    "method": "deleteContainer",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Flex Bandwidth",
    "typeScriptTag": "flexBandwidth",
    "description": "Delete a flex bandwidth container",
    "parameters": [
      {
        "name": "flexBandwidthId",
        "schema": "string",
        "required": true,
        "description": "The ID of the flex bandwidth container",
        "example": "PF-AB-1234"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Aggregate Capacity deleted successfully"
      }
    ]
  },
  {
    "url": "/v2/flex-bandwidth/{flex_bandwidth_id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Flex Bandwidth",
    "typeScriptTag": "flexBandwidth",
    "description": "Get a flex bandwidth container by ID",
    "parameters": [
      {
        "name": "flexBandwidthId",
        "schema": "string",
        "required": true,
        "description": "The ID of the flex bandwidth container",
        "example": "PF-AB-1234"
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
    "url": "/v2/groups",
    "method": "get",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Groups",
    "typeScriptTag": "groups",
    "description": "Get the current customer's groups",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/groups/{group_name}/users",
    "method": "getUserList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Groups",
    "typeScriptTag": "groups",
    "description": "Get the list of users in the group",
    "parameters": [
      {
        "name": "groupName",
        "schema": "string",
        "required": true,
        "description": "Name of the group to get the list of users in",
        "example": "regular"
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
    "url": "/v2/groups/{group_name}/permissions",
    "method": "listPermissions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Groups",
    "typeScriptTag": "groups",
    "description": "Get the list of permissions granted for the group",
    "parameters": [
      {
        "name": "groupName",
        "schema": "string",
        "required": true,
        "description": "Name of the group to get the list of permissions in",
        "example": "regular"
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
    "url": "/v2/locations/{site_code}",
    "method": "location",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Locations",
    "typeScriptTag": "locations",
    "description": "Get location data for specified location",
    "parameters": [
      {
        "name": "siteCode",
        "schema": "string",
        "required": true,
        "description": "Site code of the target location",
        "example": "CS-LA1"
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
    "url": "/v2/locations",
    "method": "filterParamsList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Locations",
    "typeScriptTag": "locations",
    "description": "Get location list by filter params",
    "parameters": [
      {
        "name": "pop",
        "schema": "string",
        "required": false,
        "description": "Filter locations by the POP name",
        "example": "LAX1"
      },
      {
        "name": "city",
        "schema": "string",
        "required": false,
        "description": "Filter locations by the city name",
        "example": "Los Angeles"
      },
      {
        "name": "state",
        "schema": "string",
        "required": false,
        "description": "Filter locations by the state",
        "example": "CA"
      },
      {
        "name": "market",
        "schema": "string",
        "required": false,
        "description": "Filter locations by the market code",
        "example": "LAX"
      },
      {
        "name": "region",
        "schema": "string",
        "required": false,
        "description": "Filter locations by the region's short name",
        "example": "US"
      },
      {
        "name": "anyType",
        "schema": "boolean",
        "required": false,
        "description": "Flag specifying should only primary locations or locations of any type be returned",
        "default": false
      },
      {
        "name": "ipsecCapable",
        "schema": "boolean",
        "required": false,
        "description": "Flag specifying that only locations capable of IPSec should be returned",
        "default": false
      },
      {
        "name": "natCapable",
        "schema": "boolean",
        "required": false,
        "description": "Flag specifying that only locations capable of NAT should be returned",
        "default": false
      },
      {
        "name": "nearCloudRouter",
        "schema": "boolean",
        "required": false,
        "description": "Flag specifying that only locations with a proximity to a Cloud Router port should be returned",
        "default": false
      },
      {
        "name": "singleArmed",
        "schema": "boolean",
        "required": false,
        "description": "Filter locations by whether or not they are single armed",
        "default": false
      },
      {
        "name": "devicePortType",
        "schema": "string",
        "required": false,
        "description": "Filter locations by the device port type. device_port_type can be specified multiple times with different values.",
        "example": "blue"
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
    "url": "/v2.1/locations",
    "method": "filterParamsList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Locations",
    "typeScriptTag": "locations",
    "description": "Get location list by filter params",
    "parameters": [
      {
        "name": "pop",
        "schema": "string",
        "required": false,
        "description": "Filter locations by the POP name",
        "example": "LAX1"
      },
      {
        "name": "city",
        "schema": "string",
        "required": false,
        "description": "Filter locations by the city name",
        "example": "Los Angeles"
      },
      {
        "name": "state",
        "schema": "string",
        "required": false,
        "description": "Filter locations by the state",
        "example": "CA"
      },
      {
        "name": "market",
        "schema": "string",
        "required": false,
        "description": "Filter locations by the market code",
        "example": "LAX"
      },
      {
        "name": "region",
        "schema": "string",
        "required": false,
        "description": "Filter locations by the region's short name",
        "example": "US"
      },
      {
        "name": "anyType",
        "schema": "boolean",
        "required": false,
        "description": "Flag specifying should only primary locations or locations of any type be returned",
        "default": false
      },
      {
        "name": "ipsecCapable",
        "schema": "boolean",
        "required": false,
        "description": "Flag specifying that only locations capable of IPSec should be returned",
        "default": false
      },
      {
        "name": "natCapable",
        "schema": "boolean",
        "required": false,
        "description": "Flag specifying that only locations capable of NAT should be returned",
        "default": false
      },
      {
        "name": "nearCloudRouter",
        "schema": "boolean",
        "required": false,
        "description": "Flag specifying that only locations with a proximity to a Cloud Router port should be returned",
        "default": false
      },
      {
        "name": "cloudProvider",
        "schema": "string",
        "required": false,
        "description": "Filter locations by the cloud provider"
      },
      {
        "name": "cloudConnectionType",
        "schema": "string",
        "required": false,
        "description": "Filter locations by the cloud connection type"
      },
      {
        "name": "networkProvider",
        "schema": "string",
        "required": false,
        "description": "Filter locations by the network provider",
        "example": "PacketFabric"
      },
      {
        "name": "singleArmed",
        "schema": "boolean",
        "required": false,
        "description": "Filter locations by whether or not they are single armed"
      },
      {
        "name": "export",
        "schema": "string",
        "required": false,
        "description": "Export the data as a CSV file",
        "example": "csv"
      },
      {
        "name": "enni",
        "schema": "boolean",
        "required": false,
        "description": "Filter locations by whether or not they support ENNI"
      },
      {
        "name": "devicePortType",
        "schema": "string",
        "required": false,
        "description": "Filter locations by the device port type. device_port_type can be specified multiple times with different values.",
        "example": "blue"
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
    "url": "/v2/locations/cloud",
    "method": "listCloudLocations",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Locations",
    "typeScriptTag": "locations",
    "description": "Get a list of cloud locations filtered by query params",
    "parameters": [
      {
        "name": "pop",
        "schema": "string",
        "required": false,
        "description": "Filter locations by the POP name",
        "example": "LAX1"
      },
      {
        "name": "city",
        "schema": "string",
        "required": false,
        "description": "Filter locations by the city name",
        "example": "Los Angeles"
      },
      {
        "name": "state",
        "schema": "string",
        "required": false,
        "description": "Filter locations by the state",
        "example": "CA"
      },
      {
        "name": "market",
        "schema": "string",
        "required": false,
        "description": "Filter locations by the market code",
        "example": "LAX"
      },
      {
        "name": "region",
        "schema": "string",
        "required": false,
        "description": "Filter locations by the region's short name",
        "example": "US"
      },
      {
        "name": "anyType",
        "schema": "boolean",
        "required": false,
        "description": "Flag specifying should only primary locations or locations of any type be returned",
        "default": false
      },
      {
        "name": "hasCloudRouter",
        "schema": "boolean",
        "required": false,
        "description": "Flag to look for only cloud-router capable locations",
        "default": false
      },
      {
        "name": "cloudProvider",
        "schema": "string",
        "required": true,
        "description": "Filter locations by the cloud provider key",
        "example": "CLOUD_PROVIDER"
      },
      {
        "name": "cloudConnectionType",
        "schema": "string",
        "required": true,
        "description": "Filter locations by the cloud connection type",
        "example": "CLOUD_CONNECTION_TYPE"
      },
      {
        "name": "natCapable",
        "schema": "boolean",
        "required": false,
        "description": "Flag specifying that only locations capable of NAT should be returned",
        "default": false
      },
      {
        "name": "devicePortType",
        "schema": "string",
        "required": false,
        "description": "Filter locations by the device port type. device_port_type can be specified multiple times with different values.",
        "example": "blue"
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
    "url": "/v2/locations/extrametro",
    "method": "listExtrametro",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Locations",
    "typeScriptTag": "locations",
    "description": "Get a list of extrametro locations",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/locations/regions",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Locations",
    "typeScriptTag": "locations",
    "description": "Get region list",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/locations/markets",
    "method": "getMarketList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Locations",
    "typeScriptTag": "locations",
    "description": "Get market list",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/locations/{pop}/port-availability",
    "method": "getPortAvailabilityDataForPop",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Locations",
    "typeScriptTag": "locations",
    "description": "Get port availability data for a POP",
    "parameters": [
      {
        "name": "pop",
        "schema": "string",
        "required": true,
        "description": "POP name of the target port",
        "example": "POP"
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
    "url": "/v2/locations/{pop}/zones",
    "method": "getZonesForPop",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Locations",
    "typeScriptTag": "locations",
    "description": "Get zones for a POP.",
    "parameters": [
      {
        "name": "pop",
        "schema": "string",
        "required": true,
        "description": "POP name of the target port",
        "example": "POP"
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
    "url": "/v2/locations/{pop}/image",
    "method": "getImage",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Locations",
    "typeScriptTag": "locations",
    "description": "Get image for a specified location",
    "parameters": [
      {
        "name": "pop",
        "schema": "string",
        "required": true,
        "description": "POP name of the target location",
        "example": "POP"
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
    "url": "/v2/labels/{value}",
    "method": "associatedObjectsGet",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Labels",
    "typeScriptTag": "labels",
    "description": "Get a list of objects associated with a label",
    "parameters": [
      {
        "name": "value",
        "schema": "string",
        "required": true,
        "description": "Label value",
        "example": "VALUE"
      },
      {
        "name": "labelType",
        "schema": "string",
        "required": false,
        "description": "Label type. customer_ref by default. reseller_ref is only for the reseller customers"
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
    "url": "/v2/labels/{value}",
    "method": "label",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Labels",
    "typeScriptTag": "labels",
    "description": "Add to a label's circuit_ids",
    "parameters": [
      {
        "name": "value",
        "schema": "string",
        "required": true,
        "description": "Label value",
        "example": "VALUE"
      },
      {
        "name": "label_type",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "objects",
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
    "url": "/v2/labels/{value}",
    "method": "label",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Labels",
    "typeScriptTag": "labels",
    "description": "Update a label",
    "parameters": [
      {
        "name": "value",
        "schema": "string",
        "required": true,
        "description": "Label value",
        "example": "VALUE"
      },
      {
        "name": "label_type",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "objects",
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
    "url": "/v2/labels",
    "method": "labels",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Labels",
    "typeScriptTag": "labels",
    "description": "Get a list of labels associated with a customer",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/lags",
    "method": "post",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "LAGs",
    "typeScriptTag": "laGs",
    "description": "Create a LAG Interface",
    "parameters": [
      {
        "name": "description",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DESCRIPTION"
      },
      {
        "name": "interval",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "INTERVAL"
      },
      {
        "name": "pop",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "LAX1"
      },
      {
        "name": "members",
        "schema": "array",
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
    "url": "/v2/lags/{port_circuit_id}",
    "method": "delete",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "LAGs",
    "typeScriptTag": "laGs",
    "description": "Deletes a LAG Interface",
    "parameters": [
      {
        "name": "portCircuitId",
        "schema": "string",
        "required": true,
        "description": "Port identifier",
        "example": "PF-AE-LAX1-1234"
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
    "url": "/v2/lags/{port_circuit_id}",
    "method": "patch",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "LAGs",
    "typeScriptTag": "laGs",
    "description": "Updates a LAG Interface",
    "parameters": [
      {
        "name": "portCircuitId",
        "schema": "string",
        "required": true,
        "description": "Port identifier",
        "example": "PF-AE-LAX1-1234"
      },
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "interval",
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
    "url": "/v2/lags/{port_circuit_id}/enable",
    "method": "enableTargetInterface",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "LAGs",
    "typeScriptTag": "laGs",
    "description": "Enables a target LAG Interface",
    "parameters": [
      {
        "name": "portCircuitId",
        "schema": "string",
        "required": true,
        "description": "Port identifier",
        "example": "PF-AE-LAX1-1234"
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
    "url": "/v2/lags/{port_circuit_id}/disable",
    "method": "disableTargetInterface",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "LAGs",
    "typeScriptTag": "laGs",
    "description": "Disables a target LAG Interface",
    "parameters": [
      {
        "name": "portCircuitId",
        "schema": "string",
        "required": true,
        "description": "Port identifier",
        "example": "PF-AE-LAX1-1234"
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
    "url": "/v2/lags/{lag_port_circuit_id}/members",
    "method": "listMembers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "LAGs",
    "typeScriptTag": "laGs",
    "description": "Lists member interfaces for a LAG",
    "parameters": [
      {
        "name": "lagPortCircuitId",
        "schema": "string",
        "required": true,
        "description": "ID of a LAG",
        "example": "PF-AE-LAX1-1234"
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
    "url": "/v2/lags/{lag_port_circuit_id}/members",
    "method": "addMemberInterface",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "LAGs",
    "typeScriptTag": "laGs",
    "description": "Adds a member interface to a target LAG. All members must have the same speed and media.",
    "parameters": [
      {
        "name": "lagPortCircuitId",
        "schema": "string",
        "required": true,
        "description": "ID of a target LAG",
        "example": "PF-AE-LAX1-1234"
      },
      {
        "name": "member_port_circuit_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PF-AE-LAX1-1234"
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
    "url": "/v2/lags/{lag_port_circuit_id}/members/{member_port_circuit_id}",
    "method": "removeMemberInterface",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "LAGs",
    "typeScriptTag": "laGs",
    "description": "Remove a member interface from a target LAG",
    "parameters": [
      {
        "name": "lagPortCircuitId",
        "schema": "string",
        "required": true,
        "description": "ID of a target LAG",
        "example": "PF-AE-LAX1-1234"
      },
      {
        "name": "memberPortCircuitId",
        "schema": "string",
        "required": true,
        "description": "ID of the member to remove",
        "example": "PF-AE-LAX1-7890"
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
    "url": "/v2/marketplace/services",
    "method": "customerServicesGet",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Marketplace",
    "typeScriptTag": "marketplace",
    "description": "Get the collection of customers with services offered in the marketplace",
    "parameters": [
      {
        "name": "routingId",
        "schema": "string",
        "required": false,
        "description": "Filters the service list to a specific service-provider customer. Allows multiple comma-separated values.",
        "example": "GAL-OHR-I9MM"
      },
      {
        "name": "pop",
        "schema": "string",
        "required": false,
        "description": "Filters the service list to a specific location. Allows multiple comma-separated values.",
        "example": "SAC1"
      },
      {
        "name": "market",
        "schema": "string",
        "required": false,
        "description": "Filters the service list to a specific market. Allows multiple comma-separated values.",
        "example": "SAC"
      },
      {
        "name": "category",
        "schema": "string",
        "required": false,
        "description": "Filters the service list to a specific category",
        "example": "cloud-computing"
      },
      {
        "name": "industry",
        "schema": "string",
        "required": false,
        "description": "Filters the service list to a specific industry. Allows multiple comma-separated values.",
        "example": "telecommunications"
      },
      {
        "name": "serviceProviderType",
        "schema": "string",
        "required": false,
        "description": "Filters the service list by service provider type. Allows multiple comma-separated values.",
        "example": "Cloud Computing Providers"
      },
      {
        "name": "serviceType",
        "schema": "string",
        "required": false,
        "description": "Filters the service list by service type. Allows multiple comma-separated values. Defaults to port-service.",
        "example": "Port Service"
      },
      {
        "name": "showUnpublished",
        "schema": "boolean",
        "required": false,
        "description": "Show unpublished services. Only returns results for the current customer. Defaults to false.",
        "example": true
      },
      {
        "name": "q",
        "schema": "string",
        "required": false,
        "description": "Filters services by partial name, description, service uuid, or customer name",
        "example": "2ab4-948d-6954-2ab4"
      },
      {
        "name": "showEmpty",
        "schema": "boolean",
        "required": false,
        "description": "Show cloud-router services with no prefixes.",
        "example": true,
        "default": false
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "Number of records to skip",
        "example": 20
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "required": false,
        "description": "Number of records to show",
        "example": 10
      },
      {
        "name": "sortColumn",
        "schema": "string",
        "required": false,
        "description": "Column to sort results on"
      },
      {
        "name": "sortOrder",
        "schema": "string",
        "required": false,
        "description": "Pagination sort order."
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
    "url": "/v2/marketplace/services",
    "method": "createService",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Marketplace",
    "typeScriptTag": "marketplace",
    "description": "Create a new service",
    "parameters": [
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Example description"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Example Service"
      },
      {
        "name": "state",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Active"
      },
      {
        "name": "sku",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "ddos-prot"
      },
      {
        "name": "locations",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "categories",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "published",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "service_type",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "port-service"
      },
      {
        "name": "cloud_router_circuit_id",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "PF-L3-CUST-2001"
      },
      {
        "name": "route_set",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "max_speed",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "10Gbps"
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
    "url": "/v2/marketplace/services/quick-connect",
    "method": "quickConnectList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Marketplace",
    "typeScriptTag": "marketplace",
    "description": "Get the collection of Quick Connect services",
    "parameters": [
      {
        "name": "routingId",
        "schema": "string",
        "required": false,
        "description": "Filters the service list to a specific service-provider customer.",
        "example": "GAL-OHR-I9MM"
      },
      {
        "name": "published",
        "schema": "boolean",
        "required": false,
        "description": "Indicates whether to return published services or unpublished services, used with routing_id param.",
        "example": true
      },
      {
        "name": "category",
        "schema": "string",
        "required": false,
        "description": "Filters the service list to a specific category. Allows multiple comma-separated values.",
        "example": "cloud-computing"
      },
      {
        "name": "industry",
        "schema": "string",
        "required": false,
        "description": "Filters the service list to a specific industry. Allows multiple comma-separated values.",
        "example": "telecommunications"
      },
      {
        "name": "serviceProviderType",
        "schema": "string",
        "required": false,
        "description": "Filters the service list by service provider type. Allows multiple comma-separated values.",
        "example": "Cloud Computing Providers"
      },
      {
        "name": "l3NfId",
        "schema": "integer",
        "required": false,
        "description": "Filters the service list by the attached cloud router id.",
        "example": 1000
      },
      {
        "name": "q",
        "schema": "string",
        "required": false,
        "description": "Filters services by partial name, description or service uuid",
        "example": "2ab4-948d-6954-2ab4"
      },
      {
        "name": "showEmpty",
        "schema": "boolean",
        "required": false,
        "description": "Show cloud-router services with no prefixes.",
        "example": true,
        "default": false
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "Number of records to skip",
        "example": 20
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "required": false,
        "description": "Number of records to show",
        "example": 10
      },
      {
        "name": "sortColumn",
        "schema": "string",
        "required": false,
        "description": "Column to sort results on"
      },
      {
        "name": "sortOrder",
        "schema": "string",
        "required": false,
        "description": "Pagination sort order."
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
    "url": "/v2/marketplace/services/{service_uuid}",
    "method": "deleteService",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Marketplace",
    "typeScriptTag": "marketplace",
    "description": "Delete a marketplace service",
    "parameters": [
      {
        "name": "serviceUuid",
        "schema": "string",
        "required": true,
        "description": "Service UUID",
        "example": "SERVICE_UUID"
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
    "url": "/v2/marketplace/services/{service_uuid}",
    "method": "getServiceObject",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Marketplace",
    "typeScriptTag": "marketplace",
    "description": "Get a single service object",
    "parameters": [
      {
        "name": "serviceUuid",
        "schema": "string",
        "required": true,
        "description": "UUID by which to filter",
        "example": "SERVICE_UUID"
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
    "url": "/v2/marketplace/services/{service_uuid}",
    "method": "updateService",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Marketplace",
    "typeScriptTag": "marketplace",
    "description": "Update a service",
    "parameters": [
      {
        "name": "serviceUuid",
        "schema": "string",
        "required": true,
        "description": "Service UUID",
        "example": "SERVICE_UUID"
      },
      {
        "name": "description",
        "schema": "string",
        "description": "",
        "example": "Example description"
      },
      {
        "name": "name",
        "schema": "string",
        "description": "",
        "example": "Example Service"
      },
      {
        "name": "state",
        "schema": "string",
        "description": "",
        "example": "Active"
      },
      {
        "name": "sku",
        "schema": "string",
        "description": "",
        "example": "ddos-prot"
      },
      {
        "name": "locations",
        "schema": "array",
        "description": ""
      },
      {
        "name": "categories",
        "schema": "array",
        "description": ""
      },
      {
        "name": "published",
        "schema": "boolean",
        "description": "",
        "example": true
      },
      {
        "name": "max_speed",
        "schema": "string",
        "description": "",
        "example": "10Gbps"
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
    "url": "/v2/marketplace/services/{service_uuid}/image",
    "method": "deleteServiceImage",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Marketplace",
    "typeScriptTag": "marketplace",
    "description": "Delete a service's image",
    "parameters": [
      {
        "name": "serviceUuid",
        "schema": "string",
        "required": true,
        "description": "Service UUID",
        "example": "SERVICE_UUID"
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
    "url": "/v2/marketplace/services/{service_uuid}/image",
    "method": "serviceImageGet",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Marketplace",
    "typeScriptTag": "marketplace",
    "description": "Get a service's image",
    "parameters": [
      {
        "name": "serviceUuid",
        "schema": "string",
        "required": true,
        "description": "Service UUID",
        "example": "SERVICE_UUID"
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
    "url": "/v2/marketplace/services/{service_uuid}/image",
    "method": "updateServiceImage",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Marketplace",
    "typeScriptTag": "marketplace",
    "description": "Update a service's image",
    "parameters": [
      {
        "name": "serviceUuid",
        "schema": "string",
        "required": true,
        "description": "Service UUID",
        "example": "SERVICE_UUID"
      },
      {
        "name": "image",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "IMAGE"
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
    "url": "/v2/marketplace/services/{service_uuid}/thumbnail",
    "method": "serviceThumbnailGet",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Marketplace",
    "typeScriptTag": "marketplace",
    "description": "Get a service's thumbnail",
    "parameters": [
      {
        "name": "serviceUuid",
        "schema": "string",
        "required": true,
        "description": "Service UUID",
        "example": "SERVICE_UUID"
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
    "url": "/v2/marketplace/services/{service_uuid}/thumbnail",
    "method": "updateServiceThumbnail",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Marketplace",
    "typeScriptTag": "marketplace",
    "description": "Update a service's thumbnail",
    "parameters": [
      {
        "name": "serviceUuid",
        "schema": "string",
        "required": true,
        "description": "Service UUID",
        "example": "SERVICE_UUID"
      },
      {
        "name": "image",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "IMAGE"
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
    "url": "/v2/marketplace/services/{service_uuid}/route-set",
    "method": "serviceRouteSetGet",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Marketplace",
    "typeScriptTag": "marketplace",
    "description": "Returns the Route Set associated with the Marketplace Service.",
    "parameters": [
      {
        "name": "serviceUuid",
        "schema": "string",
        "required": true,
        "description": "UUID by which to filter",
        "example": "SERVICE_UUID"
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
    "url": "/v2/marketplace/industries",
    "method": "get",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Marketplace",
    "typeScriptTag": "marketplace",
    "description": "Return a list of all possible industries",
    "parameters": [
      {
        "name": "active",
        "schema": "boolean",
        "required": false,
        "description": "Only return items that are in use by at least one customer",
        "example": true,
        "default": true
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
    "url": "/v2/marketplace/service-provider-types",
    "method": "getServiceProviderTypes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Marketplace",
    "typeScriptTag": "marketplace",
    "description": "Return a list of all possible service provider types",
    "parameters": [
      {
        "name": "active",
        "schema": "boolean",
        "required": false,
        "description": "Only return items that are in use by at least one customer",
        "example": true,
        "default": true
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
    "url": "/v2/marketplace/service-categories",
    "method": "getServiceCategories",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Marketplace",
    "typeScriptTag": "marketplace",
    "description": "Return a list of all possible service categories",
    "parameters": [
      {
        "name": "active",
        "schema": "boolean",
        "required": false,
        "description": "Only return items that are in use by at least one customer",
        "example": true,
        "default": true
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
    "url": "/v2/maintenances/history",
    "method": "getListIndividualHistories",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Maintenance Notifications",
    "typeScriptTag": "maintenanceNotifications",
    "description": "Get list of individual maintenance histories",
    "parameters": [
      {
        "name": "uuid",
        "schema": "string",
        "required": false,
        "description": "The UUID of the target maintenance"
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
    "url": "/v2/maintenances/notifications",
    "method": "filterByUuidActionOrType",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Maintenance Notifications",
    "typeScriptTag": "maintenanceNotifications",
    "description": "Get maintenance notifications list filtered by uuid, action or type",
    "parameters": [
      {
        "name": "uuid",
        "schema": "string",
        "required": false,
        "description": "The UUID of the maintenance details object that notifications were sent in relation to."
      },
      {
        "name": "action",
        "schema": "string",
        "required": false,
        "description": "Maintenance action"
      },
      {
        "name": "type",
        "schema": "string",
        "required": false,
        "description": "Type of maintenance"
      },
      {
        "name": "start",
        "schema": "string",
        "required": false,
        "description": "Filter by maintenance start date/time.",
        "example": "2020-01-01T12:30:00.000Z"
      },
      {
        "name": "end",
        "schema": "string",
        "required": false,
        "description": "Filter by maintenance end date/time.",
        "example": "2020-01-01T14:30:00.000Z"
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
    "url": "/v2/maintenances/by-location",
    "method": "getCurrentFutureByPopNameAndMarketCode",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Maintenance Notifications",
    "typeScriptTag": "maintenanceNotifications",
    "description": "Get current and future maintenances by pop name and/or market code",
    "parameters": [
      {
        "name": "popNamesList",
        "schema": "string",
        "required": false,
        "description": "Filter to maintenances that affect this pop, or the market that contains this pop. Can be specified multiple times to filter by multiple pops.",
        "example": "WDC1"
      },
      {
        "name": "marketCodesList",
        "schema": "string",
        "required": false,
        "description": "Filter to maintenances that affect this market. Can be specified multiple times to filter by multiple markets",
        "example": "WDC"
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
    "url": "/v2/maintenances/by-service/{circuit_id}",
    "method": "getAffectedServiceMaintenances",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Maintenance Notifications",
    "typeScriptTag": "maintenanceNotifications",
    "description": "Get current and future maintenances that affect a given service",
    "parameters": [
      {
        "name": "circuitId",
        "schema": "string",
        "required": true,
        "description": "Circuit ID of the service for which to fetch maintenances",
        "example": "PF-AP-WDC1-1234"
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
    "url": "/v2/metrics/ifd/errors/{port_circuit_id}",
    "method": "errors",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Metrics",
    "typeScriptTag": "metrics",
    "description": "List of IFD errors",
    "parameters": [
      {
        "name": "portCircuitId",
        "schema": "string",
        "required": true,
        "description": "Port identifier",
        "example": "PF-AP-DAL1-12345"
      },
      {
        "name": "since",
        "schema": "string",
        "description": "A relative time, such as \"12 hours ago\" or \"1 day ago\". Maximum date range is 366 days. If you want a more exact range use `start` and `end` instead.\n",
        "example": "24 hours ago"
      },
      {
        "name": "until",
        "schema": "string",
        "description": "A relative time, such as \"now\" or \"1 day ago\". Maximum date range is 366 days. If you want a more exact range use `start` and `end` instead.\n",
        "example": "1 hour ago",
        "default": "now"
      },
      {
        "name": "start",
        "schema": "string",
        "description": "An explicit datetime with optional timezone information, such as \"2020-05-23 00:00:00\", \"2020-05-23T00:00:00.000\", or \"2020-05-23T00:00:00.000Z+02:00\". Timezone defaults to UTC. Maximum date range is 366 days.\n",
        "example": "2020-05-23 00:00:00"
      },
      {
        "name": "end",
        "schema": "string",
        "description": "An explicit datetime with optional timezone information, such as \"2020-05-23 00:00:00\", \"2020-05-23T00:00:00.000\", or \"2020-05-23T00:00:00.000Z+02:00\". Timezone defaults to UTC. Maximum date range is 366 days.\n",
        "example": "2020-05-23 00:00:00"
      },
      {
        "name": "interval",
        "schema": "integer",
        "description": "Time in seconds used to group the response data",
        "example": 3600
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
    "url": "/v2/metrics/ifd/temperature/{port_circuit_id}",
    "method": "temperature",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Metrics",
    "typeScriptTag": "metrics",
    "description": "Optic temperature",
    "parameters": [
      {
        "name": "portCircuitId",
        "schema": "string",
        "required": true,
        "description": "Port identifier",
        "example": "PF-AP-DAL1-12345"
      },
      {
        "name": "since",
        "schema": "string",
        "description": "A relative time, such as \"12 hours ago\" or \"1 day ago\". Maximum date range is 366 days. If you want a more exact range use `start` and `end` instead.\n",
        "example": "24 hours ago"
      },
      {
        "name": "until",
        "schema": "string",
        "description": "A relative time, such as \"now\" or \"1 day ago\". Maximum date range is 366 days. If you want a more exact range use `start` and `end` instead.\n",
        "example": "1 hour ago",
        "default": "now"
      },
      {
        "name": "start",
        "schema": "string",
        "description": "An explicit datetime with optional timezone information, such as \"2020-05-23 00:00:00\", \"2020-05-23T00:00:00.000\", or \"2020-05-23T00:00:00.000Z+02:00\". Timezone defaults to UTC. Maximum date range is 366 days.\n",
        "example": "2020-05-23 00:00:00"
      },
      {
        "name": "end",
        "schema": "string",
        "description": "An explicit datetime with optional timezone information, such as \"2020-05-23 00:00:00\", \"2020-05-23T00:00:00.000\", or \"2020-05-23T00:00:00.000Z+02:00\". Timezone defaults to UTC. Maximum date range is 366 days.\n",
        "example": "2020-05-23 00:00:00"
      },
      {
        "name": "interval",
        "schema": "integer",
        "description": "Time in seconds used to group the response data",
        "example": 3600
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
    "url": "/v2/metrics/ifd/optic-data/{port_circuit_id}",
    "method": "getOpticDataByPortCircuitId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Metrics",
    "typeScriptTag": "metrics",
    "description": "Optics light level data",
    "parameters": [
      {
        "name": "portCircuitId",
        "schema": "string",
        "required": true,
        "description": "Port identifier",
        "example": "PF-AP-DAL1-12345"
      },
      {
        "name": "since",
        "schema": "string",
        "description": "A relative time, such as \"12 hours ago\" or \"1 day ago\". Maximum date range is 366 days. If you want a more exact range use `start` and `end` instead.\n",
        "example": "24 hours ago"
      },
      {
        "name": "until",
        "schema": "string",
        "description": "A relative time, such as \"now\" or \"1 day ago\". Maximum date range is 366 days. If you want a more exact range use `start` and `end` instead.\n",
        "example": "1 hour ago",
        "default": "now"
      },
      {
        "name": "start",
        "schema": "string",
        "description": "An explicit datetime with optional timezone information, such as \"2020-05-23 00:00:00\", \"2020-05-23T00:00:00.000\", or \"2020-05-23T00:00:00.000Z+02:00\". Timezone defaults to UTC. Maximum date range is 366 days.\n",
        "example": "2020-05-23 00:00:00"
      },
      {
        "name": "end",
        "schema": "string",
        "description": "An explicit datetime with optional timezone information, such as \"2020-05-23 00:00:00\", \"2020-05-23T00:00:00.000\", or \"2020-05-23T00:00:00.000Z+02:00\". Timezone defaults to UTC. Maximum date range is 366 days.\n",
        "example": "2020-05-23 00:00:00"
      },
      {
        "name": "interval",
        "schema": "integer",
        "description": "Time in seconds used to group the response data",
        "example": 3600
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
    "url": "/v2/metrics/ifd/whatcast/{port_circuit_id}",
    "method": "whatcast",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Metrics",
    "typeScriptTag": "metrics",
    "description": "Broadcast, Multicast and Unicast data for a given IFD",
    "parameters": [
      {
        "name": "portCircuitId",
        "schema": "string",
        "required": true,
        "description": "Port identifier",
        "example": "PF-AP-DAL1-12345"
      },
      {
        "name": "since",
        "schema": "string",
        "description": "A relative time, such as \"12 hours ago\" or \"1 day ago\". Maximum date range is 366 days. If you want a more exact range use `start` and `end` instead.\n",
        "example": "24 hours ago"
      },
      {
        "name": "until",
        "schema": "string",
        "description": "A relative time, such as \"now\" or \"1 day ago\". Maximum date range is 366 days. If you want a more exact range use `start` and `end` instead.\n",
        "example": "1 hour ago",
        "default": "now"
      },
      {
        "name": "start",
        "schema": "string",
        "description": "An explicit datetime with optional timezone information, such as \"2020-05-23 00:00:00\", \"2020-05-23T00:00:00.000\", or \"2020-05-23T00:00:00.000Z+02:00\". Timezone defaults to UTC. Maximum date range is 366 days.\n",
        "example": "2020-05-23 00:00:00"
      },
      {
        "name": "end",
        "schema": "string",
        "description": "An explicit datetime with optional timezone information, such as \"2020-05-23 00:00:00\", \"2020-05-23T00:00:00.000\", or \"2020-05-23T00:00:00.000Z+02:00\". Timezone defaults to UTC. Maximum date range is 366 days.\n",
        "example": "2020-05-23 00:00:00"
      },
      {
        "name": "interval",
        "schema": "integer",
        "description": "Time in seconds used to group the response data",
        "example": 3600
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
    "url": "/v2/metrics/ifd/rate/{type}/{port_circuit_id}",
    "method": "rate",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Metrics",
    "typeScriptTag": "metrics",
    "description": "Traffic rate (https://docs.packetfabric.com/api/v2/ by IFD",
    "parameters": [
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "Type of data being returned (in rate form)",
        "example": "TYPE"
      },
      {
        "name": "portCircuitId",
        "schema": "string",
        "required": true,
        "description": "Port identifier",
        "example": "PF-AP-DAL1-12345"
      },
      {
        "name": "since",
        "schema": "string",
        "description": "A relative time, such as \"12 hours ago\" or \"1 day ago\". Maximum date range is 366 days. If you want a more exact range use `start` and `end` instead.\n",
        "example": "24 hours ago"
      },
      {
        "name": "until",
        "schema": "string",
        "description": "A relative time, such as \"now\" or \"1 day ago\". Maximum date range is 366 days. If you want a more exact range use `start` and `end` instead.\n",
        "example": "1 hour ago",
        "default": "now"
      },
      {
        "name": "start",
        "schema": "string",
        "description": "An explicit datetime with optional timezone information, such as \"2020-05-23 00:00:00\", \"2020-05-23T00:00:00.000\", or \"2020-05-23T00:00:00.000Z+02:00\". Timezone defaults to UTC. Maximum date range is 366 days.\n",
        "example": "2020-05-23 00:00:00"
      },
      {
        "name": "end",
        "schema": "string",
        "description": "An explicit datetime with optional timezone information, such as \"2020-05-23 00:00:00\", \"2020-05-23T00:00:00.000\", or \"2020-05-23T00:00:00.000Z+02:00\". Timezone defaults to UTC. Maximum date range is 366 days.\n",
        "example": "2020-05-23 00:00:00"
      },
      {
        "name": "interval",
        "schema": "integer",
        "description": "Time in seconds used to group the response data",
        "example": 3600
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
    "url": "/v2/metrics/virtual-circuits/{vc_circuit_id}/interfaces/{port_circuit_id}/rate/{type}",
    "method": "rate",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Metrics",
    "typeScriptTag": "metrics",
    "description": "Traffic rate (https://docs.packetfabric.com/api/v2/ by port circuit id",
    "parameters": [
      {
        "name": "vcCircuitId",
        "schema": "string",
        "required": true,
        "description": "VC circuit id",
        "example": "PF-BC-DA1-DA1-1234567"
      },
      {
        "name": "portCircuitId",
        "schema": "string",
        "required": true,
        "description": "Port circuit id",
        "example": "PF-AP-DAL1-12345"
      },
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "Type of data being returned (in rate form)",
        "example": "TYPE"
      },
      {
        "name": "since",
        "schema": "string",
        "description": "A relative time, such as \"12 hours ago\" or \"1 day ago\". Maximum date range is 366 days. If you want a more exact range use `start` and `end` instead.\n",
        "example": "24 hours ago"
      },
      {
        "name": "until",
        "schema": "string",
        "description": "A relative time, such as \"now\" or \"1 day ago\". Maximum date range is 366 days. If you want a more exact range use `start` and `end` instead.\n",
        "example": "1 hour ago",
        "default": "now"
      },
      {
        "name": "start",
        "schema": "string",
        "description": "An explicit datetime with optional timezone information, such as \"2020-05-23 00:00:00\", \"2020-05-23T00:00:00.000\", or \"2020-05-23T00:00:00.000Z+02:00\". Timezone defaults to UTC. Maximum date range is 366 days.\n",
        "example": "2020-05-23 00:00:00"
      },
      {
        "name": "end",
        "schema": "string",
        "description": "An explicit datetime with optional timezone information, such as \"2020-05-23 00:00:00\", \"2020-05-23T00:00:00.000\", or \"2020-05-23T00:00:00.000Z+02:00\". Timezone defaults to UTC. Maximum date range is 366 days.\n",
        "example": "2020-05-23 00:00:00"
      },
      {
        "name": "interval",
        "schema": "integer",
        "description": "Time in seconds used to group the response data",
        "example": 3600
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
    "url": "/v2/metrics/customer/ifl/rate/{type}",
    "method": "customerRateByIfTypeGet",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Metrics",
    "typeScriptTag": "metrics",
    "description": "Traffic rate (https://docs.packetfabric.com/api/v2/ of the current customer by IFL",
    "parameters": [
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "Type of data being returned (in rate form)",
        "example": "TYPE"
      },
      {
        "name": "since",
        "schema": "string",
        "description": "A relative time, such as \"12 hours ago\" or \"1 day ago\". Maximum date range is 366 days. If you want a more exact range use `start` and `end` instead.\n",
        "example": "24 hours ago"
      },
      {
        "name": "until",
        "schema": "string",
        "description": "A relative time, such as \"now\" or \"1 day ago\". Maximum date range is 366 days. If you want a more exact range use `start` and `end` instead.\n",
        "example": "1 hour ago",
        "default": "now"
      },
      {
        "name": "start",
        "schema": "string",
        "description": "An explicit datetime with optional timezone information, such as \"2020-05-23 00:00:00\", \"2020-05-23T00:00:00.000\", or \"2020-05-23T00:00:00.000Z+02:00\". Timezone defaults to UTC. Maximum date range is 366 days.\n",
        "example": "2020-05-23 00:00:00"
      },
      {
        "name": "end",
        "schema": "string",
        "description": "An explicit datetime with optional timezone information, such as \"2020-05-23 00:00:00\", \"2020-05-23T00:00:00.000\", or \"2020-05-23T00:00:00.000Z+02:00\". Timezone defaults to UTC. Maximum date range is 366 days.\n",
        "example": "2020-05-23 00:00:00"
      },
      {
        "name": "interval",
        "schema": "integer",
        "description": "Time in seconds used to group the response data",
        "example": 3600
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
    "url": "/v2/metrics/customer/ifl/summary/{type}",
    "method": "customerIflSummaryGet",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Metrics",
    "typeScriptTag": "metrics",
    "description": "Summary of all IFL traffic rate (https://docs.packetfabric.com/api/v2/ for the current customer",
    "parameters": [
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "Type of data being returned (in rate form)",
        "example": "TYPE"
      },
      {
        "name": "since",
        "schema": "string",
        "description": "A relative time, such as \"12 hours ago\" or \"1 day ago\". Maximum date range is 366 days. If you want a more exact range use `start` and `end` instead.\n",
        "example": "24 hours ago"
      },
      {
        "name": "until",
        "schema": "string",
        "description": "A relative time, such as \"now\" or \"1 day ago\". Maximum date range is 366 days. If you want a more exact range use `start` and `end` instead.\n",
        "example": "1 hour ago",
        "default": "now"
      },
      {
        "name": "start",
        "schema": "string",
        "description": "An explicit datetime with optional timezone information, such as \"2020-05-23 00:00:00\", \"2020-05-23T00:00:00.000\", or \"2020-05-23T00:00:00.000Z+02:00\". Timezone defaults to UTC. Maximum date range is 366 days.\n",
        "example": "2020-05-23 00:00:00"
      },
      {
        "name": "end",
        "schema": "string",
        "description": "An explicit datetime with optional timezone information, such as \"2020-05-23 00:00:00\", \"2020-05-23T00:00:00.000\", or \"2020-05-23T00:00:00.000Z+02:00\". Timezone defaults to UTC. Maximum date range is 366 days.\n",
        "example": "2020-05-23 00:00:00"
      },
      {
        "name": "interval",
        "schema": "integer",
        "description": "Time in seconds used to group the response data",
        "example": 3600
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
    "url": "/v2/metrics/customer/ifd/rate/{type}",
    "method": "customerIfdRateData",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Metrics",
    "typeScriptTag": "metrics",
    "description": "Traffic rate (https://docs.packetfabric.com/api/v2/ of the current customer by IFD",
    "parameters": [
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "Type of data being returned (in rate form)",
        "example": "TYPE"
      },
      {
        "name": "since",
        "schema": "string",
        "description": "A relative time, such as \"12 hours ago\" or \"1 day ago\". Maximum date range is 366 days. If you want a more exact range use `start` and `end` instead.\n",
        "example": "24 hours ago"
      },
      {
        "name": "until",
        "schema": "string",
        "description": "A relative time, such as \"now\" or \"1 day ago\". Maximum date range is 366 days. If you want a more exact range use `start` and `end` instead.\n",
        "example": "1 hour ago",
        "default": "now"
      },
      {
        "name": "start",
        "schema": "string",
        "description": "An explicit datetime with optional timezone information, such as \"2020-05-23 00:00:00\", \"2020-05-23T00:00:00.000\", or \"2020-05-23T00:00:00.000Z+02:00\". Timezone defaults to UTC. Maximum date range is 366 days.\n",
        "example": "2020-05-23 00:00:00"
      },
      {
        "name": "end",
        "schema": "string",
        "description": "An explicit datetime with optional timezone information, such as \"2020-05-23 00:00:00\", \"2020-05-23T00:00:00.000\", or \"2020-05-23T00:00:00.000Z+02:00\". Timezone defaults to UTC. Maximum date range is 366 days.\n",
        "example": "2020-05-23 00:00:00"
      },
      {
        "name": "interval",
        "schema": "integer",
        "description": "Time in seconds used to group the response data",
        "example": 3600
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
    "url": "/v2/metrics/customer/ifd/summary/{type}",
    "method": "customerIfdSummaryGet",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Metrics",
    "typeScriptTag": "metrics",
    "description": "Summary of all IFD traffic rate (https://docs.packetfabric.com/api/v2/ for the current customer",
    "parameters": [
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "Type of data being returned (in rate form)",
        "example": "TYPE"
      },
      {
        "name": "since",
        "schema": "string",
        "description": "A relative time, such as \"12 hours ago\" or \"1 day ago\". Maximum date range is 366 days. If you want a more exact range use `start` and `end` instead.\n",
        "example": "24 hours ago"
      },
      {
        "name": "until",
        "schema": "string",
        "description": "A relative time, such as \"now\" or \"1 day ago\". Maximum date range is 366 days. If you want a more exact range use `start` and `end` instead.\n",
        "example": "1 hour ago",
        "default": "now"
      },
      {
        "name": "start",
        "schema": "string",
        "description": "An explicit datetime with optional timezone information, such as \"2020-05-23 00:00:00\", \"2020-05-23T00:00:00.000\", or \"2020-05-23T00:00:00.000Z+02:00\". Timezone defaults to UTC. Maximum date range is 366 days.\n",
        "example": "2020-05-23 00:00:00"
      },
      {
        "name": "end",
        "schema": "string",
        "description": "An explicit datetime with optional timezone information, such as \"2020-05-23 00:00:00\", \"2020-05-23T00:00:00.000\", or \"2020-05-23T00:00:00.000Z+02:00\". Timezone defaults to UTC. Maximum date range is 366 days.\n",
        "example": "2020-05-23 00:00:00"
      },
      {
        "name": "interval",
        "schema": "integer",
        "description": "Time in seconds used to group the response data",
        "example": 3600
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
    "url": "/v2/metrics/customer/longhaul-usage",
    "method": "customerLonghaulUsageGet",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Metrics",
    "typeScriptTag": "metrics",
    "description": "Summary of all traffic per day for the current customer",
    "parameters": [
      {
        "name": "vcCircuitId",
        "schema": "string",
        "required": false,
        "description": "Virtual Circuit (https://docs.packetfabric.com/api/v2/ identifier"
      },
      {
        "name": "vcCircuitIdList",
        "schema": "array",
        "required": false,
        "description": "List of Virtual Circuit (https://docs.packetfabric.com/api/v2/ identifiers"
      },
      {
        "name": "includeIflData",
        "schema": "boolean",
        "required": false,
        "description": "Boolean to indicate whether more information on the logical interface (https://docs.packetfabric.com/api/v2/ should be returned",
        "default": false
      },
      {
        "name": "includeVcData",
        "schema": "boolean",
        "required": false,
        "description": "Boolean to indicate whether more information on the Virtual Circuit (https://docs.packetfabric.com/api/v2/ should be returned.",
        "default": false
      },
      {
        "name": "start",
        "schema": "string",
        "description": "An explicit datetime with optional timezone information, such as \"2020-05-23 00:00:00\", \"2020-05-23T00:00:00.000\", or \"2020-05-23T00:00:00.000Z+02:00\". Timezone defaults to UTC. Maximum date range is 366 days.\n",
        "example": "2020-05-23 00:00:00"
      },
      {
        "name": "end",
        "schema": "string",
        "description": "An explicit datetime with optional timezone information, such as \"2020-05-23 00:00:00\", \"2020-05-23T00:00:00.000\", or \"2020-05-23T00:00:00.000Z+02:00\". Timezone defaults to UTC. Maximum date range is 366 days.\n",
        "example": "2020-05-23 00:00:00"
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
    "url": "/v2/metrics/cloud-router-connections/{cloud_connection_circuit_id}/rate/{type}",
    "method": "cloudRouterConnectionRateGet",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Metrics",
    "typeScriptTag": "metrics",
    "description": "Traffic rate (https://docs.packetfabric.com/api/v2/ of a Layer 3 Interface by cloud router connection",
    "parameters": [
      {
        "name": "cloudConnectionCircuitId",
        "schema": "string",
        "required": true,
        "description": "Cloud Router connection circuit id",
        "example": "PF-CC-GOG-NYC-1234567"
      },
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "Type of data being returned (in rate form)",
        "example": "TYPE"
      },
      {
        "name": "since",
        "schema": "string",
        "description": "A relative time, such as \"12 hours ago\" or \"1 day ago\". Maximum date range is 366 days. If you want a more exact range use `start` and `end` instead.\n",
        "example": "24 hours ago"
      },
      {
        "name": "until",
        "schema": "string",
        "description": "A relative time, such as \"now\" or \"1 day ago\". Maximum date range is 366 days. If you want a more exact range use `start` and `end` instead.\n",
        "example": "1 hour ago",
        "default": "now"
      },
      {
        "name": "start",
        "schema": "string",
        "description": "An explicit datetime with optional timezone information, such as \"2020-05-23 00:00:00\", \"2020-05-23T00:00:00.000\", or \"2020-05-23T00:00:00.000Z+02:00\". Timezone defaults to UTC. Maximum date range is 366 days.\n",
        "example": "2020-05-23 00:00:00"
      },
      {
        "name": "end",
        "schema": "string",
        "description": "An explicit datetime with optional timezone information, such as \"2020-05-23 00:00:00\", \"2020-05-23T00:00:00.000\", or \"2020-05-23T00:00:00.000Z+02:00\". Timezone defaults to UTC. Maximum date range is 366 days.\n",
        "example": "2020-05-23 00:00:00"
      },
      {
        "name": "interval",
        "schema": "integer",
        "description": "Time in seconds used to group the response data",
        "example": 3600
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
    "url": "/v2/metrics/cloud-router-connections/{cloud_connection_circuit_id}/ipsec",
    "method": "getIpsecStatisticsByCloudRouterConnectionCircuitId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Metrics",
    "typeScriptTag": "metrics",
    "description": "Get IPSec statistics by cloud router connection circuit id",
    "parameters": [
      {
        "name": "cloudConnectionCircuitId",
        "schema": "string",
        "required": true,
        "description": "Cloud Router connection circuit id",
        "example": "PF-CC-GOG-NYC-1234567"
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
    "url": "/v2/metrics/cloud-router-connections/{cloud_connection_circuit_id}/nat",
    "method": "getNatStatisticsByCloudRouterConnectionCircuitId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Metrics",
    "typeScriptTag": "metrics",
    "description": "Get NAT statistics by cloud router connection circuit id",
    "parameters": [
      {
        "name": "cloudConnectionCircuitId",
        "schema": "string",
        "required": true,
        "description": "Cloud Router connection circuit id",
        "example": "PF-CC-GOG-NYC-1234567"
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
    "url": "/v2/ports/{port_circuit_id}",
    "method": "port",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Ports",
    "typeScriptTag": "ports",
    "description": "Delete port",
    "parameters": [
      {
        "name": "portCircuitId",
        "schema": "string",
        "required": true,
        "description": "Port to delete",
        "example": "PF-AP-LAX1-1234"
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
    "url": "/v2/ports/{port_circuit_id}",
    "method": "port",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Ports",
    "typeScriptTag": "ports",
    "description": "Get port info",
    "parameters": [
      {
        "name": "portCircuitId",
        "schema": "string",
        "required": true,
        "description": "Port identifier",
        "example": "PF-AP-LAX1-1234"
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
    "url": "/v2/ports/{port_circuit_id}",
    "method": "port",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Ports",
    "typeScriptTag": "ports",
    "description": "Update a port",
    "parameters": [
      {
        "name": "portCircuitId",
        "schema": "string",
        "required": true,
        "description": "Identifier of the port to update",
        "example": "PF-AP-LAX1-1234"
      },
      {
        "name": "description",
        "schema": "string",
        "description": "",
        "example": "User provided description"
      },
      {
        "name": "autoneg",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "po_number",
        "schema": "string",
        "description": "",
        "example": "PO-1234"
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
    "url": "/v2/ports/{port_circuit_id}/device-info",
    "method": "getDeviceInfo",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Ports",
    "typeScriptTag": "ports",
    "description": "Get port device info",
    "parameters": [
      {
        "name": "portCircuitId",
        "schema": "string",
        "required": true,
        "description": "Port identifier",
        "example": "PF-AP-DAL1-12345"
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
    "url": "/v2/ports/{port_circuit_id}/letter-of-authorization",
    "method": "generateLoa",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Ports",
    "typeScriptTag": "ports",
    "description": "Generate and email the LOA for this port",
    "parameters": [
      {
        "name": "portCircuitId",
        "schema": "string",
        "required": true,
        "description": "Port identifier",
        "example": "PF-AP-DAL1-12345"
      },
      {
        "name": "loa_customer_name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Not The Umbrella Corp."
      },
      {
        "name": "destination_email",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "destination_emails",
        "schema": "array",
        "required": false,
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
    "url": "/v2/ports/{port_circuit_id}/vlan-summary",
    "method": "getVlanSummary",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Ports",
    "typeScriptTag": "ports",
    "description": "Get a summary of VLANs for a specific port",
    "parameters": [
      {
        "name": "portCircuitId",
        "schema": "string",
        "required": true,
        "description": "Port identifier",
        "example": "PF-AP-DAL1-12345"
      },
      {
        "name": "includeLogicalInterfaces",
        "schema": "boolean",
        "required": false,
        "description": "Include list of logical interfaces for this port"
      },
      {
        "name": "minVlan",
        "schema": "integer",
        "required": false,
        "description": "Minimum VLAN ID to include in the summary"
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
    "url": "/v2/ports/{port_circuit_id}/enable",
    "method": "port",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Ports",
    "typeScriptTag": "ports",
    "description": "Enable this port",
    "parameters": [
      {
        "name": "portCircuitId",
        "schema": "string",
        "required": true,
        "description": "Identifier of the port to update",
        "example": "PF-AP-LAX1-1234"
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
    "url": "/v2/ports/{port_circuit_id}/disable",
    "method": "port",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Ports",
    "typeScriptTag": "ports",
    "description": "Disable this port",
    "parameters": [
      {
        "name": "portCircuitId",
        "schema": "string",
        "required": true,
        "description": "Identifier of the port to update",
        "example": "PF-AP-LAX1-1234"
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
    "url": "/v2/ports/{port_circuit_id}/upgrade",
    "method": "upgradeSubscriptionTerm",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Ports",
    "typeScriptTag": "ports",
    "description": "Upgrade subscription term on port",
    "parameters": [
      {
        "name": "portCircuitId",
        "schema": "string",
        "required": true,
        "description": "Identifier of the port to upgrade",
        "example": "PF-AP-LAX1-1234"
      },
      {
        "name": "subscription_term",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
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
    "url": "/v2/ports/{port_circuit_id}/router-logs",
    "method": "getRouterLogs",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Ports",
    "typeScriptTag": "ports",
    "description": "Get logs for this port's router",
    "parameters": [
      {
        "name": "portCircuitId",
        "schema": "string",
        "required": true,
        "description": "Port identifier",
        "example": "PF-AP-DAL1-12345"
      },
      {
        "name": "timeFrom",
        "schema": "string",
        "required": true,
        "description": "The ISO 8601 formatted datetime with optional timezone information, to filter from. Timezone defaults to UTC.\n",
        "example": "2020-05-23 00:00:00"
      },
      {
        "name": "timeTo",
        "schema": "string",
        "required": true,
        "description": "The ISO 8601 formatted datetime with optional timezone information, to filter up to. Timezone defaults to UTC.\n",
        "example": "2020-05-23 00:00:00"
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
    "url": "/v2.1/ports/{port_circuit_id}/status",
    "method": "getServiceStatus",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Ports",
    "typeScriptTag": "ports",
    "description": "Get Port service status",
    "parameters": [
      {
        "name": "portCircuitId",
        "schema": "string",
        "required": true,
        "description": "Target's Circuit ID.",
        "example": "PF-AP-LAX1-1002"
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
    "url": "/v2/ports",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Ports",
    "typeScriptTag": "ports",
    "description": "Get port list",
    "parameters": [
      {
        "name": "q",
        "schema": "string",
        "required": false,
        "description": "Filter ports by description/circuit id/pop/region",
        "example": "LAX"
      },
      {
        "name": "networkProvider",
        "schema": "string",
        "required": false,
        "description": "Filter ports by network provider. Use \"extended-network\" to filter all non-PacketFabric ports"
      },
      {
        "name": "pop",
        "schema": "string",
        "required": false,
        "description": "Filter ports by point of presence",
        "example": "LAX1"
      },
      {
        "name": "market",
        "schema": "string",
        "required": false,
        "description": "Filter ports by market code",
        "example": "LAX"
      },
      {
        "name": "nearCloudRouter",
        "schema": "boolean",
        "required": false,
        "description": "Filter ports by in-market proximity to a Cloud Router port",
        "example": true
      },
      {
        "name": "natCapable",
        "schema": "boolean",
        "required": false,
        "description": "Filter ports that are NAT capable",
        "example": true
      },
      {
        "name": "isLag",
        "schema": "boolean",
        "required": false,
        "description": "Filter LAG ports",
        "example": true
      },
      {
        "name": "isLagMember",
        "schema": "boolean",
        "required": false,
        "description": "Filter LAG member ports",
        "example": true
      },
      {
        "name": "isPtp",
        "schema": "boolean",
        "required": false,
        "description": "Filter PTP ports",
        "example": true
      },
      {
        "name": "isCloud",
        "schema": "boolean",
        "required": false,
        "description": "Filter cloud ports",
        "example": true
      },
      {
        "name": "isNni",
        "schema": "boolean",
        "required": false,
        "description": "Filter NNI ports",
        "example": true
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "required": false,
        "description": "The number of results to return per page"
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "The offset of results for this page"
      },
      {
        "name": "sortColumn",
        "schema": "string",
        "required": false,
        "description": "Sort the results"
      },
      {
        "name": "sortOrder",
        "schema": "string",
        "required": false,
        "description": "Order the results"
      },
      {
        "name": "devicePortType",
        "schema": "string",
        "required": false,
        "description": "Filter ports by the device port type. device_port_type can be specified multiple times with different values.",
        "example": "blue"
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
    "url": "/v2/ports",
    "method": "post",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Ports",
    "typeScriptTag": "ports",
    "description": "Create a port",
    "parameters": [
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "User provided description"
      },
      {
        "name": "account_uuid",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACCOUNT_UUID"
      },
      {
        "name": "pop",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "LAX1"
      },
      {
        "name": "customer_site_code",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "CS-LA2"
      },
      {
        "name": "speed",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SPEED"
      },
      {
        "name": "media",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "MEDIA"
      },
      {
        "name": "subscription_term",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "zone",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "A"
      },
      {
        "name": "autoneg",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "nni",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "published_quote_line_uuid",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "po_number",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "PO-1234"
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
    "url": "/v2/ports/export.csv",
    "method": "exportCsv",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Ports",
    "typeScriptTag": "ports",
    "description": "Export port list to CSV",
    "parameters": [
      {
        "name": "q",
        "schema": "string",
        "required": false,
        "description": "Filter ports by description/circuit id/pop/region",
        "example": "LAX"
      },
      {
        "name": "networkProvider",
        "schema": "string",
        "required": false,
        "description": "Filter ports by network provider. Use \"extended-network\" to filter all non-PacketFabric ports"
      },
      {
        "name": "pop",
        "schema": "string",
        "required": false,
        "description": "Filter ports by point of presence",
        "example": "LAX1"
      },
      {
        "name": "market",
        "schema": "string",
        "required": false,
        "description": "Filter ports by market code",
        "example": "LAX"
      },
      {
        "name": "nearCloudRouter",
        "schema": "boolean",
        "required": false,
        "description": "Filter ports by in-market proximity to a Cloud Router port",
        "example": true
      },
      {
        "name": "natCapable",
        "schema": "boolean",
        "required": false,
        "description": "Filter ports that are NAT capable",
        "example": true
      },
      {
        "name": "isLag",
        "schema": "boolean",
        "required": false,
        "description": "Filter LAG ports",
        "example": true
      },
      {
        "name": "isLagMember",
        "schema": "boolean",
        "required": false,
        "description": "Filter LAG member ports",
        "example": true
      },
      {
        "name": "isPtp",
        "schema": "boolean",
        "required": false,
        "description": "Filter PTP ports",
        "example": true
      },
      {
        "name": "isCloud",
        "schema": "boolean",
        "required": false,
        "description": "Filter cloud ports",
        "example": true
      },
      {
        "name": "isCloudRouter",
        "schema": "boolean",
        "required": false,
        "description": "Filter cloud router ports",
        "example": true
      },
      {
        "name": "isNni",
        "schema": "boolean",
        "required": false,
        "description": "Filter NNI ports",
        "example": true
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "required": false,
        "description": "The number of results to return per page"
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "The offset of results for this page"
      },
      {
        "name": "sortColumn",
        "schema": "string",
        "required": false,
        "description": "Sort the results"
      },
      {
        "name": "sortOrder",
        "schema": "string",
        "required": false,
        "description": "Order the results"
      },
      {
        "name": "devicePortType",
        "schema": "string",
        "required": false,
        "description": "Filter ports by the device port type. device_port_type can be specified multiple times with different values.",
        "example": "blue"
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
    "url": "/v2/quotes",
    "method": "getCustomerQuotes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Portal Quotes",
    "typeScriptTag": "portalQuotes",
    "description": "Get quotes for this customer",
    "parameters": [
      {
        "name": "statuses",
        "schema": "array",
        "required": false,
        "description": "Only include quotes with the given statuses",
        "default": [
          "open",
          "updating"
        ]
      },
      {
        "name": "quoteUuid",
        "schema": "string",
        "required": false,
        "description": "Only include the quote with this UUID"
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
    "url": "/v2/quotes",
    "method": "createNewQuote",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Portal Quotes",
    "typeScriptTag": "portalQuotes",
    "description": "Create a quote",
    "parameters": [
      {
        "name": "title",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TITLE"
      },
      {
        "name": "custom_terms",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "billing_contact_uuid",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "BILLING_CONTACT_UUID"
      },
      {
        "name": "selected_term",
        "schema": "integer",
        "required": false,
        "description": "",
        "example": 12
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "A quote"
      }
    ]
  },
  {
    "url": "/v2/quotes/{quote_uuid}/duplicate",
    "method": "duplicateQuote",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Portal Quotes",
    "typeScriptTag": "portalQuotes",
    "description": "Duplicate a quote",
    "parameters": [
      {
        "name": "quoteUuid",
        "schema": "string",
        "required": true,
        "description": "UUID of the quote to duplicate",
        "example": "QUOTE_UUID"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "A quote"
      }
    ]
  },
  {
    "url": "/v2/quotes/{quote_uuid}",
    "method": "getDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Portal Quotes",
    "typeScriptTag": "portalQuotes",
    "description": "Get a quote's details",
    "parameters": [
      {
        "name": "quoteUuid",
        "schema": "string",
        "required": true,
        "description": "UUID of the quote",
        "example": "QUOTE_UUID"
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
    "url": "/v2/quotes/{quote_uuid}",
    "method": "updateQuote",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Portal Quotes",
    "typeScriptTag": "portalQuotes",
    "description": "Update a quote",
    "parameters": [
      {
        "name": "quoteUuid",
        "schema": "string",
        "required": true,
        "description": "UUID of the quote to update",
        "example": "QUOTE_UUID"
      },
      {
        "name": "title",
        "schema": "string",
        "description": ""
      },
      {
        "name": "custom_terms",
        "schema": "string",
        "description": ""
      },
      {
        "name": "status",
        "schema": "string",
        "description": ""
      },
      {
        "name": "selected_term",
        "schema": "integer",
        "description": "",
        "example": 12
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A quote"
      }
    ]
  },
  {
    "url": "/v2/quotes/{quote_uuid}",
    "method": "addQuoteLine",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Portal Quotes",
    "typeScriptTag": "portalQuotes",
    "description": "Add a quote line to a quote",
    "parameters": [
      {
        "name": "quoteUuid",
        "schema": "string",
        "required": true,
        "description": "the UUID of the quote to add a line to",
        "example": "QUOTE_UUID"
      },
      {
        "name": "selected_term",
        "schema": "integer",
        "required": false,
        "description": "",
        "example": 12
      },
      {
        "name": "product_type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PRODUCT_TYPE"
      },
      {
        "name": "product_definition",
        "schema": "undefined",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "a single product in a quote"
      }
    ]
  },
  {
    "url": "/v2/quotes/{quote_uuid}/{quote_line_uuid}",
    "method": "deleteQuoteLine",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Portal Quotes",
    "typeScriptTag": "portalQuotes",
    "description": "Delete a quote line",
    "parameters": [
      {
        "name": "quoteUuid",
        "schema": "string",
        "required": true,
        "description": "the UUID of the quote",
        "example": "QUOTE_UUID"
      },
      {
        "name": "quoteLineUuid",
        "schema": "string",
        "required": true,
        "description": "the UUID of the quote line to delete",
        "example": "QUOTE_LINE_UUID"
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
    "url": "/v2/quotes/{quote_uuid}/pdf",
    "method": "getPdf",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Portal Quotes",
    "typeScriptTag": "portalQuotes",
    "description": "Get quote PDF",
    "parameters": [
      {
        "name": "quoteUuid",
        "schema": "string",
        "required": true,
        "description": "Get the PDF of the quote with this UUID",
        "example": "QUOTE_UUID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "PDF of the quote"
      }
    ]
  },
  {
    "url": "/v2/quotes/{quote_uuid}/csv",
    "method": "getCsv",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Portal Quotes",
    "typeScriptTag": "portalQuotes",
    "description": "Get quote CSV",
    "parameters": [
      {
        "name": "quoteUuid",
        "schema": "string",
        "required": true,
        "description": "Get the CSV of the quote with this UUID",
        "example": "QUOTE_UUID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "CSV of the quote"
      }
    ]
  },
  {
    "url": "/v2/quotes/{quote_uuid}/publish",
    "method": "publishQuote",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Portal Quotes",
    "typeScriptTag": "portalQuotes",
    "description": "Publish a quote",
    "parameters": [
      {
        "name": "quoteUuid",
        "schema": "string",
        "required": true,
        "description": "UUID of the quote to duplicate",
        "example": "QUOTE_UUID"
      },
      {
        "name": "customer_uuid",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CUSTOMER_UUID"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "A published quote"
      }
    ]
  },
  {
    "url": "/v2/quotes/published",
    "method": "getPublishedQuotes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Portal Quotes",
    "typeScriptTag": "portalQuotes",
    "description": "Get published quotes created by this customer",
    "parameters": [
      {
        "name": "quoteUuid",
        "schema": "string",
        "required": false,
        "description": "Only include published quotes created from the quote with this UUID"
      },
      {
        "name": "assignedCustomerUuid",
        "schema": "string",
        "required": false,
        "description": "Only include published quotes assigned to the customer with this UUID"
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
    "url": "/v2/quotes/published/assigned",
    "method": "getAssignedQuotes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Portal Quotes",
    "typeScriptTag": "portalQuotes",
    "description": "Get published quotes assigned to this customer",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/quotes/published/{published_quote_uuid}",
    "method": "getPublishedQuoteDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Portal Quotes",
    "typeScriptTag": "portalQuotes",
    "description": "Get a published quote's details",
    "parameters": [
      {
        "name": "publishedQuoteUuid",
        "schema": "string",
        "required": true,
        "description": "UUID of the published quote",
        "example": "PUBLISHED_QUOTE_UUID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Published quote details"
      }
    ]
  },
  {
    "url": "/v2/request-aliases",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Request Aliases",
    "typeScriptTag": "requestAliases",
    "description": "Get request aliases associated with your account",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/request-aliases",
    "method": "addNewAlias",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Request Aliases",
    "typeScriptTag": "requestAliases",
    "description": "Add a new request alias to your account",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "mappings",
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
    "url": "/v2/request-aliases/{request_alias_uuid}",
    "method": "deleteAlias",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Request Aliases",
    "typeScriptTag": "requestAliases",
    "description": "Delete a request alias from your account",
    "parameters": [
      {
        "name": "requestAliasUuid",
        "schema": "string",
        "required": true,
        "description": "The UUID of the target request alias.",
        "example": "REQUEST_ALIAS_UUID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A message confirming the deletion of the request alias."
      }
    ]
  },
  {
    "url": "/v2/request-aliases/{request_alias_uuid}",
    "method": "byUuid",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Request Aliases",
    "typeScriptTag": "requestAliases",
    "description": "Get a request alias by UUID",
    "parameters": [
      {
        "name": "requestAliasUuid",
        "schema": "string",
        "required": true,
        "description": "The UUID of the target request alias.",
        "example": "REQUEST_ALIAS_UUID"
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
    "url": "/v2/request-aliases/{request_alias_uuid}",
    "method": "updateAlias",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Request Aliases",
    "typeScriptTag": "requestAliases",
    "description": "Update a request alias",
    "parameters": [
      {
        "name": "requestAliasUuid",
        "schema": "string",
        "required": true,
        "description": "The UUID of the target request alias.",
        "example": "REQUEST_ALIAS_UUID"
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "mappings",
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
    "url": "/v2/request-aliases/{request_alias_uuid}/contacts",
    "method": "disassociateContacts",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Request Aliases",
    "typeScriptTag": "requestAliases",
    "description": "Disassociates several contacts from a request alias",
    "parameters": [
      {
        "name": "requestAliasUuid",
        "schema": "string",
        "required": true,
        "description": "The UUID of the target request alias.",
        "example": "REQUEST_ALIAS_UUID"
      },
      {
        "name": "contact_uuids",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Successful disassociation of the contacts from the request alias."
      }
    ]
  },
  {
    "url": "/v2/request-aliases/{request_alias_uuid}/contacts",
    "method": "getAllContacts",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Request Aliases",
    "typeScriptTag": "requestAliases",
    "description": "Get all contacts associated with a request alias",
    "parameters": [
      {
        "name": "requestAliasUuid",
        "schema": "string",
        "required": true,
        "description": "The UUID of the target request alias.",
        "example": "REQUEST_ALIAS_UUID"
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
    "url": "/v2/request-aliases/{request_alias_uuid}/contacts",
    "method": "associateContacts",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Request Aliases",
    "typeScriptTag": "requestAliases",
    "description": "Associate several contacts with a single request alias.",
    "parameters": [
      {
        "name": "requestAliasUuid",
        "schema": "string",
        "required": true,
        "description": "The UUID of the target request alias.",
        "example": "REQUEST_ALIAS_UUID"
      },
      {
        "name": "contact_uuids",
        "schema": "array",
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
    "url": "/v2/request-aliases/{request_alias_uuid}/contacts/{contact_uuid}",
    "method": "disassociateContact",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Request Aliases",
    "typeScriptTag": "requestAliases",
    "description": "Disassociates a contact from a request alias",
    "parameters": [
      {
        "name": "requestAliasUuid",
        "schema": "string",
        "required": true,
        "description": "The UUID of the target request alias.",
        "example": "REQUEST_ALIAS_UUID"
      },
      {
        "name": "contactUuid",
        "schema": "string",
        "required": true,
        "description": "The UUID of the contact you want to associate with the request alias.",
        "example": "CONTACT_UUID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Successful disassociation of the contact from the request alias."
      }
    ]
  },
  {
    "url": "/v2/services",
    "method": "getCurrentCustomerServicesList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Services",
    "typeScriptTag": "services",
    "description": "Get list of current customer's services",
    "parameters": [
      {
        "name": "q",
        "schema": "string",
        "required": false,
        "description": "Filter VCs by description, circuit id, POP/circuit id of the interface, or aggregate capacity container",
        "example": "lax"
      },
      {
        "name": "portCircuitId",
        "schema": "string",
        "required": false,
        "description": "Filter by port",
        "example": "PF-AP-SFO1-58"
      },
      {
        "name": "serviceType",
        "schema": "string",
        "required": false,
        "description": "Filter service type. service_type can be specificed multiple times with different values.",
        "example": "ptp&service_type=ix"
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "required": false,
        "description": "The number of results to return per page"
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "The offset of results for this page"
      },
      {
        "name": "sortColumn",
        "schema": "string",
        "required": false,
        "description": "Sort the results"
      },
      {
        "name": "sortOrder",
        "schema": "string",
        "required": false,
        "description": "Order the results"
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
    "url": "/v2/services/export.csv",
    "method": "exportCsvList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Services",
    "typeScriptTag": "services",
    "description": "Get list of current customer's services exported in CSV",
    "parameters": [
      {
        "name": "q",
        "schema": "string",
        "required": false,
        "description": "Filter VCs by description, circuit id, or POP/circuit id of the interface",
        "example": "lax"
      },
      {
        "name": "portCircuitId",
        "schema": "string",
        "required": false,
        "description": "Filter by port",
        "example": "PF-AP-SFO1-58"
      },
      {
        "name": "serviceType",
        "schema": "string",
        "required": false,
        "description": "Filter service type. service_type can be specificed multiple times with different values.",
        "example": "ptp&service_type=ix"
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "required": false,
        "description": "The number of results to return per page"
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "The offset of results for this page"
      },
      {
        "name": "sortColumn",
        "schema": "string",
        "required": false,
        "description": "Sort the results"
      },
      {
        "name": "sortOrder",
        "schema": "string",
        "required": false,
        "description": "Order the results"
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
    "url": "/v2/services/{vc_circuit_id}",
    "method": "service",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Services",
    "typeScriptTag": "services",
    "description": "Delete a service",
    "parameters": [
      {
        "name": "vcCircuitId",
        "schema": "string",
        "required": true,
        "description": "Target's Circuit ID.",
        "example": "PF-AP-LAX1-1002"
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
    "url": "/v2/services/{vc_circuit_id}",
    "method": "service",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Services",
    "typeScriptTag": "services",
    "description": "Get service info",
    "parameters": [
      {
        "name": "vcCircuitId",
        "schema": "string",
        "required": true,
        "description": "Target's Circuit ID.",
        "example": "PF-AP-LAX1-1002"
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
    "url": "/v2/services/{vc_circuit_id}",
    "method": "service",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Services",
    "typeScriptTag": "services",
    "description": "Update service settings",
    "parameters": [
      {
        "name": "vcCircuitId",
        "schema": "string",
        "required": true,
        "description": "Target's Circuit ID.",
        "example": "PF-AP-LAX1-1002"
      },
      {
        "name": "description",
        "schema": "string",
        "description": "",
        "example": "DA1 to DA1 (https://docs.packetfabric.com/api/v2/"
      },
      {
        "name": "rate_limit_in",
        "schema": "integer",
        "description": "",
        "example": 1000
      },
      {
        "name": "rate_limit_out",
        "schema": "integer",
        "description": "",
        "example": 1000
      },
      {
        "name": "po_number",
        "schema": "string",
        "description": "",
        "example": "PO-1234"
      },
      {
        "name": "interfaces",
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
    "url": "/v2/services/{vc_circuit_id}/status",
    "method": "vcCircuitStatusGet",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Services",
    "typeScriptTag": "services",
    "description": "Get VC service status (https://docs.packetfabric.com/api/v2/",
    "parameters": [
      {
        "name": "vcCircuitId",
        "schema": "string",
        "required": true,
        "description": "Target's Circuit ID.",
        "example": "PF-AP-LAX1-1002"
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
    "url": "/v2.1/services/{vc_circuit_id}/status",
    "method": "getStatus",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Services",
    "typeScriptTag": "services",
    "description": "Get VC service status",
    "parameters": [
      {
        "name": "vcCircuitId",
        "schema": "string",
        "required": true,
        "description": "Target's Circuit ID.",
        "example": "PF-AP-LAX1-1002"
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
    "url": "/v2/services/{vc_circuit_id}/upgrade",
    "method": "upgradeBillingTerms",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Services",
    "typeScriptTag": "services",
    "description": "Upgrade service billing terms or speed",
    "parameters": [
      {
        "name": "vcCircuitId",
        "schema": "string",
        "required": true,
        "description": "Target's Circuit ID.",
        "example": "PF-AP-LAX1-1002"
      },
      {
        "name": "billing_product_type",
        "schema": "string",
        "description": ""
      },
      {
        "name": "subscription_term",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "speed",
        "schema": "string",
        "description": ""
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
    "url": "/v2/services/{vc_circuit_id}/upgrade/options",
    "method": "getUpgradeOptions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Services",
    "typeScriptTag": "services",
    "description": "Get available upgrade options for a specific service",
    "parameters": [
      {
        "name": "vcCircuitId",
        "schema": "string",
        "required": true,
        "description": "Target's Circuit ID.",
        "example": "PF-AP-LAX1-1002"
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
    "url": "/v2/services/{vc_circuit_id}/burst",
    "method": "deleteBurst",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Services",
    "typeScriptTag": "services",
    "description": "Delete a speed burst, returning circuit to originally configured speed.",
    "parameters": [
      {
        "name": "vcCircuitId",
        "schema": "string",
        "required": true,
        "description": "Target's Circuit ID.",
        "example": "PF-AP-LAX1-1002"
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
    "url": "/v2/services/{vc_circuit_id}/burst",
    "method": "addSpeedBurst",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Services",
    "typeScriptTag": "services",
    "description": "Add speed burst, billed hourly, to your circuit.",
    "parameters": [
      {
        "name": "vcCircuitId",
        "schema": "string",
        "required": true,
        "description": "Target's Circuit ID.",
        "example": "PF-AP-LAX1-1002"
      },
      {
        "name": "speed",
        "schema": "string",
        "description": "",
        "example": "500Mbps"
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
    "url": "/v2/services/backbone",
    "method": "createBackboneVc",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Services",
    "typeScriptTag": "services",
    "description": "Create a backbone or dedicated cloud virtual circuit",
    "parameters": [
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "bandwidth",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "interfaces",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "rate_limit_in",
        "schema": "integer",
        "required": false,
        "description": "",
        "example": 1000
      },
      {
        "name": "rate_limit_out",
        "schema": "integer",
        "required": false,
        "description": "",
        "example": 1000
      },
      {
        "name": "epl",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "published_quote_line_uuid",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "aggregate_capacity_id",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "PF-AB-3653"
      },
      {
        "name": "flex_bandwidth_id",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "PF-AB-3653"
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
    "url": "/v2/services/third-party",
    "method": "create3RdPartyVc",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Services",
    "typeScriptTag": "services",
    "description": "Create a 3rd-party virtual circuit",
    "parameters": [
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "My Third-party VC"
      },
      {
        "name": "routing_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PF-1RI-OQ85"
      },
      {
        "name": "market",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ATL"
      },
      {
        "name": "rate_limit_in",
        "schema": "integer",
        "required": false,
        "description": "",
        "example": 1000
      },
      {
        "name": "rate_limit_out",
        "schema": "integer",
        "required": false,
        "description": "",
        "example": 1000
      },
      {
        "name": "bandwidth",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "interface",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "service_uuid",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "aggregate_capacity_id",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "PF-AB-1234"
      },
      {
        "name": "flex_bandwidth_id",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "PF-AB-3653"
      },
      {
        "name": "po_number",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "PO-1234"
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
    "url": "/v2/services/third-party/hosted/aws",
    "method": "requestCloudConnection",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Cloud Services - AWS",
    "typeScriptTag": "cloudServicesAws",
    "description": "Request a hosted AWS Marketplace Cloud connection with a third party",
    "parameters": [
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "My AWS Marketplace Cloud connection"
      },
      {
        "name": "routing_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PF-1RI-OQ85"
      },
      {
        "name": "market",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ATL"
      },
      {
        "name": "aws_account_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": 2345678910
      },
      {
        "name": "account_uuid",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "a2115890-ed02-4795-a6dd-c485bec3529c"
      },
      {
        "name": "pop",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DAL1"
      },
      {
        "name": "zone",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "A"
      },
      {
        "name": "speed",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "100Mbps"
      },
      {
        "name": "subscription_term",
        "schema": "integer",
        "required": false,
        "description": "",
        "default": 1
      },
      {
        "name": "service_uuid",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "cloud_settings",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "po_number",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "PO-1234"
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
    "url": "/v2/services/third-party/hosted/azure",
    "method": "requestHostedConnection",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Cloud Services - Azure",
    "typeScriptTag": "cloudServicesAzure",
    "description": "Request a hosted Azure Marketplace Cloud connection with a third party",
    "parameters": [
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "My Azure Marketplace Cloud connection"
      },
      {
        "name": "routing_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PF-1RI-OQ85"
      },
      {
        "name": "market",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ATL"
      },
      {
        "name": "azure_service_key",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "aaaa0000-a0a0-a0a0-a0a0-aaaa0000aaaa"
      },
      {
        "name": "account_uuid",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "a2115890-ed02-4795-a6dd-c485bec3529c"
      },
      {
        "name": "speed",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "100Mbps"
      },
      {
        "name": "subscription_term",
        "schema": "integer",
        "required": false,
        "description": "",
        "default": 1
      },
      {
        "name": "service_uuid",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "po_number",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "PO-1234"
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
    "url": "/v2/services/third-party/hosted/google",
    "method": "requestHostedConnection",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Cloud Services - Google Cloud",
    "typeScriptTag": "cloudServicesGoogleCloud",
    "description": "Request a hosted Google Marketplace Cloud connection with a third party",
    "parameters": [
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "My Google Marketplace Cloud connection"
      },
      {
        "name": "routing_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PF-1RI-OQ85"
      },
      {
        "name": "market",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ATL"
      },
      {
        "name": "google_pairing_key",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "7e51371e-72a3-40b5-b844-2e3efefaee59/us-central1/2"
      },
      {
        "name": "google_vlan_attachment_name",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "rrv-nms-dev-1a2b-vl1-us-west1-1"
      },
      {
        "name": "account_uuid",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "a2115890-ed02-4795-a6dd-c485bec3529c"
      },
      {
        "name": "pop",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DAL1"
      },
      {
        "name": "speed",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "100Mbps"
      },
      {
        "name": "subscription_term",
        "schema": "integer",
        "required": false,
        "description": "",
        "default": 1
      },
      {
        "name": "service_uuid",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "cloud_settings",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "po_number",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "PO-1234"
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
    "url": "/v2/services/third-party/hosted/oracle",
    "method": "requestHostedConnection",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Cloud Services - Oracle",
    "typeScriptTag": "cloudServicesOracle",
    "description": "Request a hosted Oracle Marketplace Cloud connection with a third party",
    "parameters": [
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "My Oracle Marketplace Cloud connection"
      },
      {
        "name": "routing_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PF-1RI-OQ85"
      },
      {
        "name": "market",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ATL"
      },
      {
        "name": "account_uuid",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "a2115890-ed02-4795-a6dd-c485bec3529c"
      },
      {
        "name": "vc_ocid",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ocid1.virtualcircuit.oc1.iad.aaaaaaaa7fvcq4rff7yz4ey3p7wu3lenezvl34757c2cxh7jigxbjc7bgzjq"
      },
      {
        "name": "region",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "REGION"
      },
      {
        "name": "pop",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "WDC2"
      },
      {
        "name": "service_uuid",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "po_number",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "PO-1234"
      },
      {
        "name": "subscription_term",
        "schema": "integer",
        "required": false,
        "description": "",
        "default": 1
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
    "url": "/v2/services/ipsec/{circuit_id}",
    "method": "get",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Cloud Router IPsec",
    "typeScriptTag": "cloudRouterIPsec",
    "description": "Gets IPsec-specific details for a connection.",
    "parameters": [
      {
        "name": "circuitId",
        "schema": "string",
        "required": true,
        "description": "IPsec circuit ID or its associated VC.",
        "example": "PF-IPSEC-2000"
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
    "url": "/v2/services/ipsec/{circuit_id}",
    "method": "patch",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Cloud Router IPsec",
    "typeScriptTag": "cloudRouterIPsec",
    "description": "Updates IPsec-specific details for a connection.",
    "parameters": [
      {
        "name": "circuitId",
        "schema": "string",
        "required": true,
        "description": "IPsec circuit ID or its associated VC.",
        "example": "PF-IPSEC-2000"
      },
      {
        "name": "customer_gateway_address",
        "schema": "string",
        "description": ""
      },
      {
        "name": "ike_version",
        "schema": "integer",
        "description": "",
        "example": 1
      },
      {
        "name": "phase1_authentication_method",
        "schema": "string",
        "description": "",
        "example": "pre-shared-key"
      },
      {
        "name": "phase1_group",
        "schema": "string",
        "description": "",
        "example": "group14"
      },
      {
        "name": "phase1_encryption_algo",
        "schema": "string",
        "description": "",
        "example": "aes-156-cbc"
      },
      {
        "name": "phase1_authentication_algo",
        "schema": "string",
        "description": "",
        "example": "sha-384"
      },
      {
        "name": "phase1_lifetime",
        "schema": "integer",
        "description": "",
        "example": 10800
      },
      {
        "name": "phase2_pfs_group",
        "schema": "string",
        "description": "",
        "example": "group14"
      },
      {
        "name": "phase2_encryption_algo",
        "schema": "string",
        "description": "",
        "example": "aes-156-cbc"
      },
      {
        "name": "phase2_authentication_algo",
        "schema": "string",
        "description": "",
        "example": "sha-384"
      },
      {
        "name": "phase2_lifetime",
        "schema": "integer",
        "description": "",
        "example": 28800
      },
      {
        "name": "pre_shared_key",
        "schema": "string",
        "description": ""
      },
      {
        "name": "po_number",
        "schema": "string",
        "description": "",
        "example": "PO-1234"
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
    "url": "/v2/services/ipsec/gateway_address/uniqueness",
    "method": "checkGatewayAddressUniqueness",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Cloud Router IPsec",
    "typeScriptTag": "cloudRouterIPsec",
    "description": "Checks if IPsec gateway address is unique",
    "parameters": [
      {
        "name": "gatewayAddress",
        "schema": "string",
        "required": true,
        "description": "The gateway address we want to check for uniqueness.",
        "example": "192.0.10.1"
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
    "url": "/v2/services/ix",
    "method": "createIxVc",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Services",
    "typeScriptTag": "services",
    "description": "Create a IX VC",
    "parameters": [
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "My IX VC"
      },
      {
        "name": "routing_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "IX-Z76-YH87"
      },
      {
        "name": "market",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ATL"
      },
      {
        "name": "asn",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 4556
      },
      {
        "name": "rate_limit_in",
        "schema": "integer",
        "required": false,
        "description": "",
        "example": 50
      },
      {
        "name": "rate_limit_out",
        "schema": "integer",
        "required": false,
        "description": "",
        "example": 50
      },
      {
        "name": "bandwidth",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "interface",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "aggregate_capacity_id",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "PF-AB-3653"
      },
      {
        "name": "flex_bandwidth_id",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "PF-AB-3653"
      },
      {
        "name": "po_number",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "PO-1234"
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
    "url": "/v2/services/requests",
    "method": "listVcRequests",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Services",
    "typeScriptTag": "services",
    "description": "Get list of VC requests",
    "parameters": [
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "Search requests by type",
        "example": "TYPE"
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
    "url": "/v2/services/requests/{vc_request_uuid}",
    "method": "deleteRequest",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Services",
    "typeScriptTag": "services",
    "description": "Delete service request",
    "parameters": [
      {
        "name": "vcRequestUuid",
        "schema": "string",
        "required": true,
        "description": "UUID of the service request",
        "example": "VC_REQUEST_UUID"
      },
      {
        "name": "delete_reason",
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
    "url": "/v2/services/requests/{vc_request_uuid}",
    "method": "getByUuid",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Services",
    "typeScriptTag": "services",
    "description": "Get VC request by uuid",
    "parameters": [
      {
        "name": "vcRequestUuid",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "VC_REQUEST_UUID"
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
    "url": "/v2/services/requests/{vc_request_uuid}/provision",
    "method": "service",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Services",
    "typeScriptTag": "services",
    "description": "Provision requested service",
    "parameters": [
      {
        "name": "vcRequestUuid",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "VC_REQUEST_UUID"
      },
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "500Mbps connection to Vandelay Industries in SAC1"
      },
      {
        "name": "interface",
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
    "url": "/v2/services/requests/{vc_request_uuid}/provision/hosted",
    "method": "provisionHosted",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Cloud Services - AWS",
    "typeScriptTag": "cloudServicesAws",
    "description": "Provision requested Marketplace cloud connection",
    "parameters": [
      {
        "name": "vcRequestUuid",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "VC_REQUEST_UUID"
      },
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "500Mbps connection to Vandelay Industries in SAC1"
      },
      {
        "name": "provider",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PROVIDER"
      },
      {
        "name": "interface",
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
    "url": "/v2/services/requests/{vc_request_uuid}/provision/cloud-router-connection",
    "method": "provisionMarketplaceCloudRouterConnection",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Cloud Router Third Party",
    "typeScriptTag": "cloudRouterThirdParty",
    "description": "Provision requested Marketplace cloud router connection",
    "parameters": [
      {
        "name": "vcRequestUuid",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "VC_REQUEST_UUID"
      },
      {
        "name": "interface",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "bgp_settings",
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
    "url": "/v2/services/requests/{vc_request_uuid}/reject",
    "method": "rejectRequest",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Services",
    "typeScriptTag": "services",
    "description": "Reject service request",
    "parameters": [
      {
        "name": "vcRequestUuid",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "VC_REQUEST_UUID"
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
    "url": "/v2/svlan-labels",
    "method": "createLabel",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "SVlan Labels",
    "typeScriptTag": "sVlanLabels",
    "description": "Create SVlan label",
    "parameters": [
      {
        "name": "description",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DESCRIPTION"
      },
      {
        "name": "svlan_id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 1357
      },
      {
        "name": "port_circuit_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PF-AP-WDC1-10000"
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
    "url": "/v2/svlan-labels/{port_circuit_id}",
    "method": "getLabelsForPort",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "SVlan Labels",
    "typeScriptTag": "sVlanLabels",
    "description": "Get SVlan labels for port",
    "parameters": [
      {
        "name": "portCircuitId",
        "schema": "string",
        "required": true,
        "description": "Get the SVlan labels for this port",
        "example": "PF-AP-LAX1-1002"
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
    "url": "/v2/svlan-labels/mappings",
    "method": "getLabels",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "SVlan Labels",
    "typeScriptTag": "sVlanLabels",
    "description": "Get SVlan labels for the logged-in customer",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/svlan-labels/{svlan_label_uuid}",
    "method": "deleteLabel",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "SVlan Labels",
    "typeScriptTag": "sVlanLabels",
    "description": "Delete this SVlan label",
    "parameters": [
      {
        "name": "svlanLabelUuid",
        "schema": "string",
        "required": true,
        "description": "SVlan label to delete",
        "example": "SVLAN_LABEL_UUID"
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
    "url": "/v2/svlan-labels/{svlan_label_uuid}",
    "method": "updateLabelByUuid",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "SVlan Labels",
    "typeScriptTag": "sVlanLabels",
    "description": "Update this SVlan label",
    "parameters": [
      {
        "name": "svlanLabelUuid",
        "schema": "string",
        "required": true,
        "description": "SVlan label to update",
        "example": "SVLAN_LABEL_UUID"
      },
      {
        "name": "description",
        "schema": "string",
        "description": "",
        "example": "a label for my SVlan"
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
    "url": "/v2/users",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Get list of users",
    "parameters": [
      {
        "name": "q",
        "schema": "string",
        "description": "Searches for this string in the user name or e-mail"
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
    "url": "/v2/users",
    "method": "post",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Create new user",
    "parameters": [
      {
        "name": "first_name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "John"
      },
      {
        "name": "last_name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Galt"
      },
      {
        "name": "email",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "user@example.com"
      },
      {
        "name": "phone",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "111-111-1111"
      },
      {
        "name": "login",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "john"
      },
      {
        "name": "password",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "*****"
      },
      {
        "name": "timezone",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "MST"
      },
      {
        "name": "group",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "admin"
      },
      {
        "name": "groups",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "admin"
        ]
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
    "url": "/v2/users/{user_login}",
    "method": "deleteUser",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Deletes a user",
    "parameters": [
      {
        "name": "userLogin",
        "schema": "string",
        "required": true,
        "description": "Login of the user to delete",
        "example": "USER_LOGIN"
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
    "url": "/v2/users/{user_login}",
    "method": "getUserDetailsByLogin",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Fetch user details by a user login",
    "parameters": [
      {
        "name": "userLogin",
        "schema": "string",
        "required": true,
        "description": "Login of the user to fetch",
        "example": "USER_LOGIN"
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
    "url": "/v2/users/{user_login}",
    "method": "patch",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Modify a user",
    "parameters": [
      {
        "name": "userLogin",
        "schema": "string",
        "required": true,
        "description": "The user with this login will be modified",
        "example": "USER_LOGIN"
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
        "example": "Galt"
      },
      {
        "name": "email",
        "schema": "string",
        "description": "",
        "example": "user@example.com"
      },
      {
        "name": "password",
        "schema": "string",
        "description": "",
        "example": "p4ssw0rd"
      },
      {
        "name": "phone",
        "schema": "string",
        "description": "",
        "example": "111-111-1111"
      },
      {
        "name": "login",
        "schema": "string",
        "description": "",
        "example": "john"
      },
      {
        "name": "timezone",
        "schema": "string",
        "description": "",
        "example": "MST"
      },
      {
        "name": "disabled",
        "schema": "boolean",
        "description": "",
        "example": false
      },
      {
        "name": "group",
        "schema": "string",
        "description": "",
        "example": "admin"
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
    "url": "/v2/users/{uuid}",
    "method": "getDetailsByUuid",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Fetch user details by a UUID",
    "parameters": [
      {
        "name": "uuid",
        "schema": "string",
        "required": true,
        "description": "UUID of the user to fetch",
        "example": "UUID"
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
    "url": "/v2/users/{user_login}/groups",
    "method": "listUserGroups",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Get the list of groups of a given user",
    "parameters": [
      {
        "name": "userLogin",
        "schema": "string",
        "required": true,
        "description": "Login of the user to fetch groups for",
        "example": "USER_LOGIN"
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
    "url": "/v2/users/{user_login}/groups/{group_name}",
    "method": "deleteFromGroup",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Delete a user from a given group",
    "parameters": [
      {
        "name": "userLogin",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USER_LOGIN"
      },
      {
        "name": "groupName",
        "schema": "string",
        "required": true,
        "description": "Group name to delete user from. Check the list and the meaning of\nthe default groups here: https://docs.packetfabric.com/admin/user/groups/\n",
        "example": "GROUP_NAME"
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
    "url": "/v2/users/{user_login}/groups/{group_name}",
    "method": "addToGroup",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Add user to group",
    "parameters": [
      {
        "name": "userLogin",
        "schema": "string",
        "required": true,
        "description": "User login",
        "example": "USER_LOGIN"
      },
      {
        "name": "groupName",
        "schema": "string",
        "required": true,
        "description": "Group name to add user to. Check the list and the meaning of\nthe default groups here: https://docs.packetfabric.com/admin/user/groups/\n",
        "example": "GROUP_NAME"
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
    "url": "/v2/users/request-password-reset",
    "method": "requestPasswordReset",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Sends the user an email with a link to reset a forgotten password",
    "parameters": [
      {
        "name": "user_login",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USER_LOGIN"
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
    "url": "/v2/users/reset-password",
    "method": "setNewPassword",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Sets a new password for a user",
    "parameters": [
      {
        "name": "new_password",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "p4ssw0rd"
      },
      {
        "name": "rt",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "RT"
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
    "url": "/v2/users/{user_login}/password",
    "method": "updatePassword",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Sets a new password for a user",
    "parameters": [
      {
        "name": "userLogin",
        "schema": "string",
        "required": true,
        "description": "Password of the user with this login will be modified",
        "example": "USER_LOGIN"
      },
      {
        "name": "new_password",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "p4ssw0rd"
      },
      {
        "name": "old_password",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "p4ssw0rd"
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
    "url": "/v2/users/mfa/setup",
    "method": "generateSecretScratchCodes",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Multi-Factor Authentication",
    "typeScriptTag": "multiFactorAuthentication",
    "description": "Generate a user secret and scratch codes",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/users/mfa/enable",
    "method": "enableUserAuth",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Multi-Factor Authentication",
    "typeScriptTag": "multiFactorAuthentication",
    "description": "Enable multi-factor authentication for the user",
    "parameters": [
      {
        "name": "authentication_code",
        "schema": "string",
        "required": true,
        "description": "",
        "example": 123456
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
    "url": "/v2/users/mfa/disable",
    "method": "disableUserMfa",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Multi-Factor Authentication",
    "typeScriptTag": "multiFactorAuthentication",
    "description": "Disable multi-factor authentication for the user",
    "parameters": [
      {
        "name": "password",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "p4ssw0rd"
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
    "url": "/v2/users/mfa/qrcode",
    "method": "generateQrCodeImage",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Multi-Factor Authentication",
    "typeScriptTag": "multiFactorAuthentication",
    "description": "Return a QR code image used for setup",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/team-invites",
    "method": "listInvitedUsers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "TeamSignup",
    "typeScriptTag": "teamSignup",
    "description": "Get list of team signup invitations",
    "parameters": [],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/team-invites",
    "method": "sendInvitationEmails",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "TeamSignup",
    "typeScriptTag": "teamSignup",
    "description": "Sign-up and send invitation emails to a list of new users, assigned to current customer",
    "parameters": [],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/team-invites/{signup_uuid}",
    "method": "getDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "TeamSignup",
    "typeScriptTag": "teamSignup",
    "description": "Get details of a team signup invitation",
    "parameters": [
      {
        "name": "signupUuid",
        "schema": "string",
        "required": true,
        "description": "UUID of the invitation",
        "example": "SIGNUP_UUID"
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
    "url": "/v2/team-invites/{signup_uuid}/resend",
    "method": "resendInvitation",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "TeamSignup",
    "typeScriptTag": "teamSignup",
    "description": "Resend team invitation",
    "parameters": [
      {
        "name": "signupUuid",
        "schema": "string",
        "required": true,
        "description": "UUID of the invitation",
        "example": "SIGNUP_UUID"
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
    "url": "/v2/team-invites/{signup_uuid}/user",
    "method": "createUserBasedOnInvitation",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "TeamSignup",
    "typeScriptTag": "teamSignup",
    "description": "Create a new user based on team signup invitation",
    "parameters": [
      {
        "name": "signupUuid",
        "schema": "string",
        "required": true,
        "description": "UUID of the invitation",
        "example": "SIGNUP_UUID"
      },
      {
        "name": "first_name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "John"
      },
      {
        "name": "last_name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Galt"
      },
      {
        "name": "phone",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "111-111-1111"
      },
      {
        "name": "password",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "*****"
      },
      {
        "name": "timezone",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "MST"
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
    "url": "/v2/objects/{circuit_id}/labels",
    "method": "getLabels",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Objects",
    "typeScriptTag": "objects",
    "description": "Get the Labels associated with an object",
    "parameters": [
      {
        "name": "circuitId",
        "schema": "string",
        "required": true,
        "description": "The circuit ID of the object",
        "example": "CIRCUIT_ID"
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
    "url": "/v2/objects/{circuit_id}/labels",
    "method": "object",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Objects",
    "typeScriptTag": "objects",
    "description": "Add to an object's labels",
    "parameters": [
      {
        "name": "circuitId",
        "schema": "string",
        "required": true,
        "description": "The circuit ID of the object to be updated",
        "example": "CIRCUIT_ID"
      },
      {
        "name": "label_type",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "labels",
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
    "url": "/v2/objects/{circuit_id}/labels",
    "method": "object",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Objects",
    "typeScriptTag": "objects",
    "description": "Update an object label",
    "parameters": [
      {
        "name": "circuitId",
        "schema": "string",
        "required": true,
        "description": "The circuit ID of the object to be updated",
        "example": "CIRCUIT_ID"
      },
      {
        "name": "label_type",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "labels",
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
    "url": "/v2/outbound-cross-connects",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Outbound Cross Connects",
    "typeScriptTag": "outboundCrossConnects",
    "description": "Get the outbound cross connects associated with the current customer",
    "parameters": [
      {
        "name": "port",
        "schema": "string",
        "required": false,
        "description": "List OBCC by port_circuit_id",
        "example": "port-circuit-id"
      },
      {
        "name": "showDeleted",
        "schema": "boolean",
        "required": false,
        "description": "Include deleted OBCCs in list",
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
    "url": "/v2/outbound-cross-connects",
    "method": "createNew",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Outbound Cross Connects",
    "typeScriptTag": "outboundCrossConnects",
    "description": "Create a new outbound cross connect",
    "parameters": [
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Cross connect for a demo"
      },
      {
        "name": "port",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PF-SO-ME-111"
      },
      {
        "name": "site",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DR-ATL1"
      },
      {
        "name": "document_uuid",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "55A7A654-4C3C-4C69-BCBE-755790F0417C"
      },
      {
        "name": "destination_name",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Destination company name"
      },
      {
        "name": "destination_circuit_id",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Destination circuit id"
      },
      {
        "name": "panel",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Panel"
      },
      {
        "name": "module",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Module"
      },
      {
        "name": "position",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Position"
      },
      {
        "name": "data_center_cross_connect_id",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "SUPER-COOL-NAME"
      },
      {
        "name": "published_quote_line_uuid",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "po_number",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "PO-1234"
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
    "url": "/v2/outbound-cross-connects/{outbound_cross_connect_id}",
    "method": "deleteCrossConnect",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Outbound Cross Connects",
    "typeScriptTag": "outboundCrossConnects",
    "description": "Delete an outbound cross connect",
    "parameters": [
      {
        "name": "outboundCrossConnectId",
        "schema": "string",
        "required": true,
        "description": "id of the cross connect",
        "example": "OUTBOUND_CROSS_CONNECT_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Outbound Cross Connect successfully deleted"
      }
    ]
  },
  {
    "url": "/v2/outbound-cross-connects/{outbound_cross_connect_id}",
    "method": "getOne",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Outbound Cross Connects",
    "typeScriptTag": "outboundCrossConnects",
    "description": "Get a single outbound cross connect",
    "parameters": [
      {
        "name": "outboundCrossConnectId",
        "schema": "string",
        "required": true,
        "description": "id of the cross connect",
        "example": "OUTBOUND_CROSS_CONNECT_ID"
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
    "url": "/v2/outbound-cross-connects/{outbound_cross_connect_id}",
    "method": "updateSingle",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Outbound Cross Connects",
    "typeScriptTag": "outboundCrossConnects",
    "description": "Patch a single outbound cross connect",
    "parameters": [
      {
        "name": "outboundCrossConnectId",
        "schema": "string",
        "required": true,
        "description": "id of the cross connect",
        "example": "OUTBOUND_CROSS_CONNECT_ID"
      },
      {
        "name": "user_description",
        "schema": "string",
        "description": "",
        "example": "description for the cross connect"
      },
      {
        "name": "po_number",
        "schema": "string",
        "description": "",
        "example": "PO-1234"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Outbound Cross Connect object"
      }
    ]
  },
  {
    "url": "/v2/services/point-to-point/{ptp_uuid}",
    "method": "deletePointToPoint",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "PTP Services",
    "typeScriptTag": "ptpServices",
    "description": "Delete a point-to-point service",
    "parameters": [
      {
        "name": "ptpUuid",
        "schema": "string",
        "required": true,
        "description": "UUID of the point-to-point service to delete",
        "example": "PTP_UUID"
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
    "url": "/v2/services/point-to-point/{ptp_uuid}",
    "method": "getServiceInfo",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "PTP Services",
    "typeScriptTag": "ptpServices",
    "description": "Get point-to-point service info",
    "parameters": [
      {
        "name": "ptpUuid",
        "schema": "string",
        "required": true,
        "description": "UUID or Circuit ID of the point-to-point service to fetch",
        "example": "PTP_UUID"
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
    "url": "/v2/services/point-to-point/{ptp_uuid}",
    "method": "updateDescription",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "PTP Services",
    "typeScriptTag": "ptpServices",
    "description": "Update a point-to-point service",
    "parameters": [
      {
        "name": "ptpUuid",
        "schema": "string",
        "required": true,
        "description": "UUID of the point-to-point service to update",
        "example": "PTP_UUID"
      },
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "po_number",
        "schema": "string",
        "description": "",
        "example": "PO-1234"
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
    "url": "/v2/services/point-to-point",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "PTP Services",
    "typeScriptTag": "ptpServices",
    "description": "Get all point-to-point services",
    "parameters": [
      {
        "name": "q",
        "schema": "string",
        "required": false,
        "description": "Filter PTPs by description, circuit id, or POP/circuit id/market of the interfaces",
        "example": "LAX"
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
    "url": "/v2/services/point-to-point",
    "method": "createService",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "PTP Services",
    "typeScriptTag": "ptpServices",
    "description": "Create a point-to-point service",
    "parameters": [
      {
        "name": "description",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DESCRIPTION"
      },
      {
        "name": "speed",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SPEED"
      },
      {
        "name": "media",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "MEDIA"
      },
      {
        "name": "endpoints",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "account_uuid",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACCOUNT_UUID"
      },
      {
        "name": "subscription_term",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "published_quote_line_uuid",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "po_number",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "PO-1234"
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
    "url": "/v2/services/point-to-point/{ptp_uuid}/status",
    "method": "getServiceStatus",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "PTP Services",
    "typeScriptTag": "ptpServices",
    "description": "Get point-to-point service status (https://docs.packetfabric.com/api/v2/",
    "parameters": [
      {
        "name": "ptpUuid",
        "schema": "string",
        "required": true,
        "description": "UUID of the point-to-point service to fetch status for",
        "example": "PTP_UUID"
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
    "url": "/v2.1/services/point-to-point/{ptp_circuit_id}/status",
    "method": "getServiceStatus",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "PTP Services",
    "typeScriptTag": "ptpServices",
    "description": "Get point-to-point service status",
    "parameters": [
      {
        "name": "ptpCircuitId",
        "schema": "string",
        "required": true,
        "description": "Circuit ID of the point-to-point service to fetch status for",
        "example": "PF-PD-NYC-AUS-1734406"
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
    "url": "/v2/services/point-to-point/{ptp_uuid}/upgrade",
    "method": "upgradePtpUuid",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "PTP Services",
    "typeScriptTag": "ptpServices",
    "description": "Upgrade a point-to-point service to a new subscription term",
    "parameters": [
      {
        "name": "ptpUuid",
        "schema": "string",
        "required": true,
        "description": "UUID of the point-to-point service to upgrade",
        "example": "PTP_UUID"
      },
      {
        "name": "subscription_term",
        "schema": "integer",
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
    "url": "/v2/services/point-to-point/{ptp_uuid}/upgrade/options",
    "method": "getUpgradeOptions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "PTP Services",
    "typeScriptTag": "ptpServices",
    "description": "Get upgrade options for a point-to-point service upgrade to a new subscription term",
    "parameters": [
      {
        "name": "ptpUuid",
        "schema": "string",
        "required": true,
        "description": "UUID of the point-to-point service to fetch upgrade options for",
        "example": "PTP_UUID"
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
    "url": "/v2/services/cloud-routers",
    "method": "listAssociated",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Cloud Routers",
    "typeScriptTag": "cloudRouters",
    "description": "Returns a list of cloud routers associated with the current account.",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/services/cloud-routers",
    "method": "createNew",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Cloud Routers",
    "typeScriptTag": "cloudRouters",
    "description": "Creates a new Cloud Router and then returns it.",
    "parameters": [
      {
        "name": "scope",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "private"
      },
      {
        "name": "asn",
        "schema": "integer",
        "required": false,
        "description": "",
        "example": 4556,
        "default": 4556
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Super Cool Cloud router"
      },
      {
        "name": "account_uuid",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACCOUNT_UUID"
      },
      {
        "name": "regions",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "capacity",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "10Gbps"
      },
      {
        "name": "published_quote_line_uuid",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "po_number",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "PO-1234"
      },
      {
        "name": "subscription_term",
        "schema": "integer",
        "required": false,
        "description": "",
        "example": 12,
        "default": 1
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
    "url": "/v2/services/cloud-routers/export.csv",
    "method": "downloadAsCsv",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Cloud Routers",
    "typeScriptTag": "cloudRouters",
    "description": "Download customer cloud routers as csv",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/services/cloud-routers/{circuit_id}",
    "method": "deleteRouter",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Cloud Routers",
    "typeScriptTag": "cloudRouters",
    "description": "Deletes a cloud router. Note that all connections must be deleted first.",
    "parameters": [
      {
        "name": "circuitId",
        "schema": "string",
        "required": true,
        "description": "Circuit ID of the target cloud router.",
        "example": "PF-L3-CUST-2"
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
    "url": "/v2/services/cloud-routers/{circuit_id}",
    "method": "getByCircuitId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Cloud Routers",
    "typeScriptTag": "cloudRouters",
    "description": "Returns a cloud router associated with the circuit id.",
    "parameters": [
      {
        "name": "circuitId",
        "schema": "string",
        "required": true,
        "description": "Circuit ID of the target cloud router.",
        "example": "PF-L3-CUST-2"
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
    "url": "/v2/services/cloud-routers/{circuit_id}",
    "method": "updateExisting",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Cloud Routers",
    "typeScriptTag": "cloudRouters",
    "description": "Update an existing Cloud Router.",
    "parameters": [
      {
        "name": "circuitId",
        "schema": "string",
        "required": true,
        "description": "Circuit ID of the target cloud router.",
        "example": "PF-L3-CUST-2"
      },
      {
        "name": "name",
        "schema": "string",
        "description": "",
        "example": "New Super Cool Cloud router"
      },
      {
        "name": "regions",
        "schema": "array",
        "description": ""
      },
      {
        "name": "capacity",
        "schema": "string",
        "description": "",
        "example": "10Gbps"
      },
      {
        "name": "po_number",
        "schema": "string",
        "description": "",
        "example": "PO-1234"
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
    "url": "/v2/services/cloud-routers/requests",
    "method": "listImportRequests",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Cloud Router Third Party",
    "typeScriptTag": "cloudRouterThirdParty",
    "description": "Returns a list of Cloud Router Imports Requests.",
    "parameters": [
      {
        "name": "requestType",
        "schema": "array",
        "required": true,
        "description": "Type of the Cloud Router Import Request."
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
    "url": "/v2/services/cloud-routers/requests/{import_circuit_id}",
    "method": "deleteRequest",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Cloud Router Third Party",
    "typeScriptTag": "cloudRouterThirdParty",
    "description": "Deletes a Cloud Router Imports Request associated with the circuit id.",
    "parameters": [
      {
        "name": "importCircuitId",
        "schema": "string",
        "required": true,
        "description": "Circuit ID of the Cloud Router third-party service import.",
        "example": "PF-L3-IMP-15626"
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
    "url": "/v2/services/cloud-routers/requests/{import_circuit_id}",
    "method": "importsRequestGet",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Cloud Router Third Party",
    "typeScriptTag": "cloudRouterThirdParty",
    "description": "Returns a single Cloud Router Imports Request associated with the circuit id.",
    "parameters": [
      {
        "name": "importCircuitId",
        "schema": "string",
        "required": true,
        "description": "Circuit ID of the Cloud Router third-party service import.",
        "example": "PF-L3-IMP-15626"
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
    "url": "/v2/services/cloud-routers/requests/{import_circuit_id}/accept",
    "method": "acceptImportCircuit",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Cloud Router Third Party",
    "typeScriptTag": "cloudRouterThirdParty",
    "description": "Accepts a single Cloud Router Imports Request associated with the circuit id.",
    "parameters": [
      {
        "name": "importCircuitId",
        "schema": "string",
        "required": true,
        "description": "Circuit ID of the Cloud Router third-party service import.",
        "example": "PF-L3-IMP-15626"
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
    "url": "/v2/services/cloud-routers/requests/{import_circuit_id}/reject",
    "method": "rejectImportCircuit",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Cloud Router Third Party",
    "typeScriptTag": "cloudRouterThirdParty",
    "description": "Rejects a single Cloud Router Imports Request associated with the circuit id.",
    "parameters": [
      {
        "name": "importCircuitId",
        "schema": "string",
        "required": true,
        "description": "Circuit ID of the Cloud Router third-party service import.",
        "example": "PF-L3-IMP-15626"
      },
      {
        "name": "rejection_reason",
        "schema": "string",
        "description": "",
        "example": "Return filters are too broad."
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
    "url": "/v2/services/cloud-routers/{circuit_id}/connections/{cloud_connection_circuit_id}/bgp",
    "method": "listBgpSessions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Cloud Router BGP Session Settings",
    "typeScriptTag": "cloudRouterBgpSessionSettings",
    "description": "List BGP sessions associated with a Cloud Router connection.",
    "parameters": [
      {
        "name": "circuitId",
        "schema": "string",
        "required": true,
        "description": "Circuit ID of the target cloud router.",
        "example": "PF-L3-CUST-2"
      },
      {
        "name": "cloudConnectionCircuitId",
        "schema": "string",
        "required": true,
        "description": "The circuit ID of the connection to update.",
        "example": "PF-AE-1234"
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
    "url": "/v2/services/cloud-routers/{circuit_id}/connections/{cloud_connection_circuit_id}/bgp",
    "method": "createL3Info",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Cloud Router BGP Session Settings",
    "typeScriptTag": "cloudRouterBgpSessionSettings",
    "description": "Creates a new BGP session and associated L3 information on a cloud router connection and returns it.",
    "parameters": [
      {
        "name": "circuitId",
        "schema": "string",
        "required": true,
        "description": "Circuit ID of the target cloud router.",
        "example": "PF-L3-CUST-2"
      },
      {
        "name": "cloudConnectionCircuitId",
        "schema": "string",
        "required": true,
        "description": "The circuit ID of the connection to update.",
        "example": "PF-AE-1234"
      },
      {
        "name": "md5",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "$9$oeJZjqmTn9Af5RhylMW-VwgJDHqfFnCZU.5QFAt"
      },
      {
        "name": "l3_address",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "10.0.0.1/30"
      },
      {
        "name": "primary_subnet",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "10.0.0.1/30"
      },
      {
        "name": "secondary_subnet",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "10.0.0.1/30"
      },
      {
        "name": "address_family",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "v4"
      },
      {
        "name": "remote_address",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "10.0.0.1"
      },
      {
        "name": "remote_asn",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 4556
      },
      {
        "name": "multihop_ttl",
        "schema": "integer",
        "required": false,
        "description": "",
        "example": 1,
        "default": 1
      },
      {
        "name": "local_preference",
        "schema": "integer",
        "required": false,
        "description": "",
        "example": 1
      },
      {
        "name": "med",
        "schema": "integer",
        "required": false,
        "description": "",
        "example": 1
      },
      {
        "name": "community",
        "schema": "integer",
        "required": false,
        "description": "",
        "example": 1
      },
      {
        "name": "as_prepend",
        "schema": "integer",
        "required": false,
        "description": "",
        "example": 1
      },
      {
        "name": "orlonger",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "bfd_interval",
        "schema": "integer",
        "required": false,
        "description": "",
        "example": 300
      },
      {
        "name": "bfd_multiplier",
        "schema": "integer",
        "required": false,
        "description": "",
        "example": 3
      },
      {
        "name": "disabled",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "prefixes",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "nat",
        "schema": "undefined",
        "required": false,
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
    "url": "/v2/services/cloud-routers/{circuit_id}/connections/{cloud_connection_circuit_id}/bgp",
    "method": "updateSessionInfo",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Cloud Router BGP Session Settings",
    "typeScriptTag": "cloudRouterBgpSessionSettings",
    "description": "Updates an existing BGP session and associated L3 information.",
    "parameters": [
      {
        "name": "circuitId",
        "schema": "string",
        "required": true,
        "description": "Circuit ID of the target cloud router.",
        "example": "PF-L3-CUST-2"
      },
      {
        "name": "cloudConnectionCircuitId",
        "schema": "string",
        "required": true,
        "description": "The circuit ID of the connection to update.",
        "example": "PF-AE-1234"
      },
      {
        "name": "prefixes",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "md5",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "$9$oeJZjqmTn9Af5RhylMW-VwgJDHqfFnCZU.5QFAt"
      },
      {
        "name": "l3_address",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "10.0.0.1/30"
      },
      {
        "name": "address_family",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "v4"
      },
      {
        "name": "remote_address",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "10.0.0.1"
      },
      {
        "name": "remote_asn",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 4556
      },
      {
        "name": "multihop_ttl",
        "schema": "integer",
        "required": false,
        "description": "",
        "example": 1
      },
      {
        "name": "local_preference",
        "schema": "integer",
        "required": false,
        "description": "",
        "example": 1
      },
      {
        "name": "med",
        "schema": "integer",
        "required": false,
        "description": "",
        "example": 1
      },
      {
        "name": "community",
        "schema": "integer",
        "required": false,
        "description": "",
        "example": 1
      },
      {
        "name": "as_prepend",
        "schema": "integer",
        "required": false,
        "description": "",
        "example": 1
      },
      {
        "name": "orlonger",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "bfd_interval",
        "schema": "integer",
        "required": false,
        "description": "",
        "example": 300
      },
      {
        "name": "bfd_multiplier",
        "schema": "integer",
        "required": false,
        "description": "",
        "example": 3
      },
      {
        "name": "disabled",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "bgp_settings_uuid",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "862386eb-df01-436b-8346-e16c8023e4d1"
      },
      {
        "name": "nat",
        "schema": "undefined",
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
    "url": "/v2/services/cloud-routers/{circuit_id}/connections/{cloud_connection_circuit_id}/bgp/{bgp_settings_uuid}",
    "method": "deleteSingleSession",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Cloud Router BGP Session Settings",
    "typeScriptTag": "cloudRouterBgpSessionSettings",
    "description": "Delete a single BGP session from a cloud router connection.",
    "parameters": [
      {
        "name": "circuitId",
        "schema": "string",
        "required": true,
        "description": "Circuit ID of the target cloud router.",
        "example": "PF-L3-CUST-2"
      },
      {
        "name": "cloudConnectionCircuitId",
        "schema": "string",
        "required": true,
        "description": "The circuit ID of the connection to update.",
        "example": "PF-AE-1234"
      },
      {
        "name": "bgpSettingsUuid",
        "schema": "string",
        "required": true,
        "description": "The UUID of the specific BGP session you want to get.",
        "example": "a2115890-ed02-4795-a6dd-c485bec3529c"
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
    "url": "/v2/services/cloud-routers/{circuit_id}/connections/{cloud_connection_circuit_id}/bgp/{bgp_settings_uuid}",
    "method": "getSingleSession",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Cloud Router BGP Session Settings",
    "typeScriptTag": "cloudRouterBgpSessionSettings",
    "description": "Get a single BGP session associated with a Cloud Router connection.",
    "parameters": [
      {
        "name": "circuitId",
        "schema": "string",
        "required": true,
        "description": "Circuit ID of the target cloud router.",
        "example": "PF-L3-CUST-2"
      },
      {
        "name": "cloudConnectionCircuitId",
        "schema": "string",
        "required": true,
        "description": "The circuit ID of the connection to update.",
        "example": "PF-AE-1234"
      },
      {
        "name": "bgpSettingsUuid",
        "schema": "string",
        "required": true,
        "description": "The UUID of the specific BGP session you want to get.",
        "example": "a2115890-ed02-4795-a6dd-c485bec3529c"
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
    "url": "/v2/services/cloud-routers/{circuit_id}/connections",
    "method": "listForCircuit",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Cloud Router Connections",
    "typeScriptTag": "cloudRouterConnections",
    "description": "Lists all cloud router connections for a given router.",
    "parameters": [
      {
        "name": "circuitId",
        "schema": "string",
        "required": true,
        "description": "Circuit ID of the target cloud router.",
        "example": "PF-L3-CUST-2"
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
    "url": "/v2/services/cloud-routers/connections/export.csv",
    "method": "downloadCsv",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Cloud Router Connections",
    "typeScriptTag": "cloudRouterConnections",
    "description": "Download cloud routers connections as csv",
    "parameters": [
      {
        "name": "cloudRouterCircuitId",
        "schema": "string",
        "required": false,
        "description": "Circuit ID of the target cloud router.",
        "example": "PF-L3-CUST-1400"
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
    "url": "/v2/services/cloud-routers/{circuit_id}/address_is_unique",
    "method": "checkBgpAddressUnique",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Cloud Router Connections",
    "typeScriptTag": "cloudRouterConnections",
    "description": "Checks to make sure the bgp addresses are unique",
    "parameters": [
      {
        "name": "circuitId",
        "schema": "string",
        "required": true,
        "description": "Circuit ID of the target cloud router.",
        "example": "PF-L3-CUST-2"
      },
      {
        "name": "l3_address",
        "schema": "string",
        "description": "",
        "example": "10.0.0.1/32"
      },
      {
        "name": "remote_address",
        "schema": "string",
        "description": "",
        "example": "10.0.0.1"
      },
      {
        "name": "pool_prefix",
        "schema": "string",
        "description": "",
        "example": "10.0.0.0/32"
      },
      {
        "name": "cloud_circuit_id",
        "schema": "string",
        "description": "",
        "example": "PF-L3-CON-2843831"
      },
      {
        "name": "bgp_settings_uuid",
        "schema": "string",
        "description": "",
        "example": "3d78949f-1396-4163-b0ca-3eba3592efef"
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
    "url": "/v2/services/cloud-routers/connections",
    "method": "listAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Cloud Router Connections",
    "typeScriptTag": "cloudRouterConnections",
    "description": "Lists all of the customer's cloud router connections.",
    "parameters": [
      {
        "name": "portCircuitId",
        "schema": "string",
        "required": false,
        "description": "Filter Dedicated Port connections by their Port Cicuit ID.",
        "example": "PF-AP-LAB1-123456"
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "Number of records to skip",
        "example": 20
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "required": false,
        "description": "Number of records to show",
        "example": 10
      },
      {
        "name": "sortColumn",
        "schema": "string",
        "required": false,
        "description": "Column to sort results on"
      },
      {
        "name": "sortOrder",
        "schema": "string",
        "required": false,
        "description": "Pagination sort order."
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
    "url": "/v2/services/cloud-routers/{circuit_id}/connections/{cloud_connection_circuit_id}",
    "method": "deleteByCircuitConnectionId",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Cloud Router Connections",
    "typeScriptTag": "cloudRouterConnections",
    "description": "Delete a cloud router connection by circuit id.",
    "parameters": [
      {
        "name": "circuitId",
        "schema": "string",
        "required": true,
        "description": "Circuit ID of the target cloud router.",
        "example": "PF-L3-CUST-2"
      },
      {
        "name": "cloudConnectionCircuitId",
        "schema": "string",
        "required": true,
        "description": "The circuit ID of the connection.",
        "example": "PF-CC-1234"
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
    "url": "/v2/services/cloud-routers/{circuit_id}/connections/{cloud_connection_circuit_id}",
    "method": "getSingleByCircuitId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Cloud Router Connections",
    "typeScriptTag": "cloudRouterConnections",
    "description": "Get a single cloud router connection by circuit id.",
    "parameters": [
      {
        "name": "circuitId",
        "schema": "string",
        "required": true,
        "description": "Circuit ID of the target cloud router.",
        "example": "PF-L3-CUST-2"
      },
      {
        "name": "cloudConnectionCircuitId",
        "schema": "string",
        "required": true,
        "description": "The circuit ID of the connection.",
        "example": "PF-CC-1234"
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
    "url": "/v2/services/cloud-routers/{circuit_id}/connections/{cloud_connection_circuit_id}",
    "method": "updateConnection",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Cloud Router Connections",
    "typeScriptTag": "cloudRouterConnections",
    "description": "Update a Cloud Router Connection",
    "parameters": [
      {
        "name": "circuitId",
        "schema": "string",
        "required": true,
        "description": "Circuit ID of the target cloud router.",
        "example": "PF-L3-CUST-2"
      },
      {
        "name": "cloudConnectionCircuitId",
        "schema": "string",
        "required": true,
        "description": "The circuit ID of the connection to update.",
        "example": "PF-CC-1234"
      },
      {
        "name": "description",
        "schema": "string",
        "description": "",
        "example": "New Super Cool Cloud Router Connection"
      },
      {
        "name": "cloud_settings",
        "schema": "undefined",
        "description": ""
      },
      {
        "name": "po_number",
        "schema": "string",
        "description": "",
        "example": "PO-1234"
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
    "url": "/v2/services/cloud-routers/connections/{circuit_id}",
    "method": "getByCircuitId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Cloud Router Connections",
    "typeScriptTag": "cloudRouterConnections",
    "description": "Get a single cloud router connection by circuit id.",
    "parameters": [
      {
        "name": "circuitId",
        "schema": "string",
        "required": true,
        "description": "The circuit ID of the connection.",
        "example": "PF-CC-1234"
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
    "url": "/v2/services/cloud-routers/{circuit_id}/connections/{cloud_connection_uuid}",
    "method": "deleteConnection",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Cloud Router Connections",
    "typeScriptTag": "cloudRouterConnections",
    "description": "Delete a cloud router connection.",
    "parameters": [
      {
        "name": "circuitId",
        "schema": "string",
        "required": true,
        "description": "Circuit ID of the target cloud router.",
        "example": "PF-L3-CUST-2"
      },
      {
        "name": "cloudConnectionUuid",
        "schema": "string",
        "required": true,
        "description": "Target cloud connection's UUID.",
        "example": "a2115890-ed02-4795-a6dd-c485bec3529c"
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
    "url": "/v2/services/cloud-routers/{circuit_id}/connections/third-party",
    "method": "createRequest",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Cloud Router Third Party",
    "typeScriptTag": "cloudRouterThirdParty",
    "description": "Creates a new Marketplace Cloud Router Connection request and returns it.",
    "parameters": [
      {
        "name": "circuitId",
        "schema": "string",
        "required": true,
        "description": "Circuit ID of the target cloud router.",
        "example": "PF-L3-CUST-2"
      },
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "My Marketplace Cloud Router connection"
      },
      {
        "name": "prefixes",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "account_uuid",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "a2115890-ed02-4795-a6dd-c485bec3529c"
      },
      {
        "name": "service_uuid",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SERVICE_UUID"
      },
      {
        "name": "maybe_nat",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": false,
        "default": false
      },
      {
        "name": "maybe_dnat",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": false,
        "default": false
      },
      {
        "name": "pop",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DAL1"
      },
      {
        "name": "speed",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "100Mbps"
      },
      {
        "name": "po_number",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "PO-1234"
      },
      {
        "name": "subscription_term",
        "schema": "integer",
        "required": false,
        "description": "",
        "example": 12,
        "default": 1
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
    "url": "/v2/services/cloud-routers/{circuit_id}/connections/aws",
    "method": "createAwsConnection",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Cloud Router Connections",
    "typeScriptTag": "cloudRouterConnections",
    "description": "Creates a new AWS connection on a cloud router and returns it.",
    "parameters": [
      {
        "name": "circuitId",
        "schema": "string",
        "required": true,
        "description": "Circuit ID of the target cloud router.",
        "example": "PF-L3-CUST-2"
      },
      {
        "name": "description",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "AWS Hosted connection for Foo Corp"
      },
      {
        "name": "aws_account_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": 2345678910
      },
      {
        "name": "account_uuid",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "a2115890-ed02-4795-a6dd-c485bec3529c"
      },
      {
        "name": "maybe_nat",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": false,
        "default": false
      },
      {
        "name": "maybe_dnat",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": false,
        "default": false
      },
      {
        "name": "pop",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DAL1"
      },
      {
        "name": "zone",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "A"
      },
      {
        "name": "is_public",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": true,
        "default": false
      },
      {
        "name": "public_nat_pool",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": true,
        "default": false
      },
      {
        "name": "speed",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "100Mbps"
      },
      {
        "name": "published_quote_line_uuid",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "cloud_settings",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "po_number",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "PO-1234"
      },
      {
        "name": "subscription_term",
        "schema": "integer",
        "required": false,
        "description": "",
        "example": 12
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
    "url": "/v2.1/services/cloud-routers/{circuit_id}/connections/aws",
    "method": "createAwsConnection",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Cloud Router Connections",
    "typeScriptTag": "cloudRouterConnections",
    "description": "Creates a new AWS connection on a cloud router and returns it.",
    "parameters": [
      {
        "name": "circuitId",
        "schema": "string",
        "required": true,
        "description": "Circuit ID of the target cloud router.",
        "example": "PF-L3-CUST-2"
      },
      {
        "name": "description",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "AWS Hosted connection for Foo Corp"
      },
      {
        "name": "aws_account_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": 2345678910
      },
      {
        "name": "account_uuid",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "a2115890-ed02-4795-a6dd-c485bec3529c"
      },
      {
        "name": "maybe_nat",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": false,
        "default": false
      },
      {
        "name": "maybe_dnat",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": false,
        "default": false
      },
      {
        "name": "pop",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DAL1"
      },
      {
        "name": "zone",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "A"
      },
      {
        "name": "is_public",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": true,
        "default": false
      },
      {
        "name": "public_nat_pool",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": true,
        "default": false
      },
      {
        "name": "speed",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "100Mbps"
      },
      {
        "name": "published_quote_line_uuid",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "cloud_settings",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "po_number",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "PO-1234"
      },
      {
        "name": "subscription_term",
        "schema": "integer",
        "required": false,
        "description": "",
        "example": 12
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
    "url": "/v2/services/cloud-routers/{circuit_id}/connections/azure",
    "method": "createAzureConnection",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Cloud Router Connections",
    "typeScriptTag": "cloudRouterConnections",
    "description": "Creates a new Azure ExpressRoute connection on a cloud router and returns it.",
    "parameters": [
      {
        "name": "circuitId",
        "schema": "string",
        "required": true,
        "description": "Circuit ID of the target cloud router.",
        "example": "PF-L3-CUST-2"
      },
      {
        "name": "description",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Azure ExpressRoute Hosted connection for Foo Corp"
      },
      {
        "name": "maybe_nat",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": false,
        "default": false
      },
      {
        "name": "maybe_dnat",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": false,
        "default": false
      },
      {
        "name": "azure_service_key",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "aaaa0000-a0a0-a0a0-a0a0-aaaa0000aaaa"
      },
      {
        "name": "account_uuid",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "a2115890-ed02-4795-a6dd-c485bec3529c"
      },
      {
        "name": "speed",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "100Mbps"
      },
      {
        "name": "is_public",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": true,
        "default": false
      },
      {
        "name": "public_nat_pool",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": true,
        "default": false
      },
      {
        "name": "published_quote_line_uuid",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "po_number",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "PO-1234"
      },
      {
        "name": "subscription_term",
        "schema": "integer",
        "required": false,
        "description": "",
        "example": 12
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
    "url": "/v2.1/services/cloud-routers/{circuit_id}/connections/azure",
    "method": "createAzureExpressRouteConnection",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Cloud Router Connections",
    "typeScriptTag": "cloudRouterConnections",
    "description": "Creates a new Azure ExpressRoute connection on a cloud router and returns it.",
    "parameters": [
      {
        "name": "circuitId",
        "schema": "string",
        "required": true,
        "description": "Circuit ID of the target cloud router.",
        "example": "PF-L3-CUST-2"
      },
      {
        "name": "description",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Azure ExpressRoute Hosted connection for Foo Corp"
      },
      {
        "name": "maybe_nat",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": false,
        "default": false
      },
      {
        "name": "maybe_dnat",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": false,
        "default": false
      },
      {
        "name": "azure_service_key",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "aaaa0000-a0a0-a0a0-a0a0-aaaa0000aaaa"
      },
      {
        "name": "account_uuid",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "a2115890-ed02-4795-a6dd-c485bec3529c"
      },
      {
        "name": "speed",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "100Mbps"
      },
      {
        "name": "is_public",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": true,
        "default": false
      },
      {
        "name": "public_nat_pool",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": true,
        "default": false
      },
      {
        "name": "published_quote_line_uuid",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "po_number",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "PO-1234"
      },
      {
        "name": "subscription_term",
        "schema": "integer",
        "required": false,
        "description": "",
        "example": 12
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
    "url": "/v2/services/cloud-routers/{circuit_id}/connections/google",
    "method": "createGoogleConnection",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Cloud Router Connections",
    "typeScriptTag": "cloudRouterConnections",
    "description": "Creates a new Google connection on a cloud router and returns it.",
    "parameters": [
      {
        "name": "circuitId",
        "schema": "string",
        "required": true,
        "description": "Circuit ID of the target cloud router.",
        "example": "PF-L3-CUST-2"
      },
      {
        "name": "description",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Test description"
      },
      {
        "name": "account_uuid",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "a2115890-ed02-4795-a6dd-c485bec3529c"
      },
      {
        "name": "maybe_nat",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": false,
        "default": false
      },
      {
        "name": "maybe_dnat",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": false,
        "default": false
      },
      {
        "name": "public_nat_pool",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": true,
        "default": false
      },
      {
        "name": "google_pairing_key",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "7e51371e-72a3-40b5-b844-2e3efefaee59/us-central1/2"
      },
      {
        "name": "google_vlan_attachment_name",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "rrv-nms-dev-1a2b-vl1-us-west1-1"
      },
      {
        "name": "pop",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DAL1"
      },
      {
        "name": "speed",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "100Mbps"
      },
      {
        "name": "published_quote_line_uuid",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "po_number",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "PO-1234"
      },
      {
        "name": "subscription_term",
        "schema": "integer",
        "required": false,
        "description": "",
        "example": 12
      },
      {
        "name": "cloud_settings",
        "schema": "object",
        "required": false,
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
    "url": "/v2.1/services/cloud-routers/{circuit_id}/connections/google",
    "method": "createGoogleConnection",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Cloud Router Connections",
    "typeScriptTag": "cloudRouterConnections",
    "description": "Creates a new Google connection on a cloud router and returns it.",
    "parameters": [
      {
        "name": "circuitId",
        "schema": "string",
        "required": true,
        "description": "Circuit ID of the target cloud router.",
        "example": "PF-L3-CUST-2"
      },
      {
        "name": "description",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Test description"
      },
      {
        "name": "account_uuid",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "a2115890-ed02-4795-a6dd-c485bec3529c"
      },
      {
        "name": "maybe_nat",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": false,
        "default": false
      },
      {
        "name": "maybe_dnat",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": false,
        "default": false
      },
      {
        "name": "public_nat_pool",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": true,
        "default": false
      },
      {
        "name": "google_pairing_key",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "7e51371e-72a3-40b5-b844-2e3efefaee59/us-central1/2"
      },
      {
        "name": "google_vlan_attachment_name",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "rrv-nms-dev-1a2b-vl1-us-west1-1"
      },
      {
        "name": "pop",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DAL1"
      },
      {
        "name": "speed",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "100Mbps"
      },
      {
        "name": "published_quote_line_uuid",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "po_number",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "PO-1234"
      },
      {
        "name": "subscription_term",
        "schema": "integer",
        "required": false,
        "description": "",
        "example": 12
      },
      {
        "name": "cloud_settings",
        "schema": "object",
        "required": false,
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
    "url": "/v2/services/cloud-routers/{circuit_id}/connections/ibm",
    "method": "createIbmConnection",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Cloud Router Connections",
    "typeScriptTag": "cloudRouterConnections",
    "description": "Creates a new IBM connection on a cloud router and returns it.",
    "parameters": [
      {
        "name": "circuitId",
        "schema": "string",
        "required": true,
        "description": "Circuit ID of the target cloud router.",
        "example": "PF-L3-CUST-2"
      },
      {
        "name": "description",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Hosted-connection-Foo_Corp"
      },
      {
        "name": "maybe_nat",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": false,
        "default": false
      },
      {
        "name": "maybe_dnat",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": false,
        "default": false
      },
      {
        "name": "ibm_account_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "57a7d05f36894e3cb9b46a43556d903e"
      },
      {
        "name": "ibm_bgp_asn",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 64999
      },
      {
        "name": "ibm_bgp_cer_cidr",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "10.254.30.78/30"
      },
      {
        "name": "ibm_bgp_ibm_cidr",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "10.254.30.77/30"
      },
      {
        "name": "account_uuid",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "a2115890-ed02-4795-a6dd-c485bec3529c"
      },
      {
        "name": "pop",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DAL1"
      },
      {
        "name": "zone",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "A"
      },
      {
        "name": "speed",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "1Gbps"
      },
      {
        "name": "published_quote_line_uuid",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "po_number",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "PO-1234"
      },
      {
        "name": "subscription_term",
        "schema": "integer",
        "required": false,
        "description": "",
        "example": 12
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
    "url": "/v2.1/services/cloud-routers/{circuit_id}/connections/ibm",
    "method": "createIbmConnection",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Cloud Router Connections",
    "typeScriptTag": "cloudRouterConnections",
    "description": "Creates a new IBM connection on a cloud router and returns it.",
    "parameters": [
      {
        "name": "circuitId",
        "schema": "string",
        "required": true,
        "description": "Circuit ID of the target cloud router.",
        "example": "PF-L3-CUST-2"
      },
      {
        "name": "description",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Hosted-connection-Foo_Corp"
      },
      {
        "name": "maybe_nat",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": false,
        "default": false
      },
      {
        "name": "maybe_dnat",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": false,
        "default": false
      },
      {
        "name": "ibm_account_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "57a7d05f36894e3cb9b46a43556d903e"
      },
      {
        "name": "ibm_bgp_asn",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 64999
      },
      {
        "name": "ibm_bgp_cer_cidr",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "10.254.30.78/30"
      },
      {
        "name": "ibm_bgp_ibm_cidr",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "10.254.30.77/30"
      },
      {
        "name": "account_uuid",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "a2115890-ed02-4795-a6dd-c485bec3529c"
      },
      {
        "name": "pop",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DAL1"
      },
      {
        "name": "zone",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "A"
      },
      {
        "name": "speed",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "1Gbps"
      },
      {
        "name": "published_quote_line_uuid",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "po_number",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "PO-1234"
      },
      {
        "name": "subscription_term",
        "schema": "integer",
        "required": false,
        "description": "",
        "example": 12
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
    "url": "/v2/services/cloud-routers/{circuit_id}/connections/ipsec",
    "method": "createIpsecConnection",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Cloud Router Connections",
    "typeScriptTag": "cloudRouterConnections",
    "description": "Creates a new IPSec connection on a cloud router.",
    "parameters": [
      {
        "name": "circuitId",
        "schema": "string",
        "required": true,
        "description": "Circuit ID of the target cloud router.",
        "example": "PF-L3-CUST-2"
      },
      {
        "name": "description",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Test description"
      },
      {
        "name": "account_uuid",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "a2115890-ed02-4795-a6dd-c485bec3529c"
      },
      {
        "name": "pop",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DAL1"
      },
      {
        "name": "speed",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "100Mbps"
      },
      {
        "name": "ike_version",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 1
      },
      {
        "name": "phase1_authentication_method",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "pre-shared-key"
      },
      {
        "name": "phase1_group",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "group14"
      },
      {
        "name": "phase1_encryption_algo",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "aes-156-cbc"
      },
      {
        "name": "phase1_authentication_algo",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "sha-384"
      },
      {
        "name": "phase1_lifetime",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 10800
      },
      {
        "name": "phase2_pfs_group",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "group14"
      },
      {
        "name": "phase2_encryption_algo",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "3des-cbc"
      },
      {
        "name": "phase2_authentication_algo",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "hmac-sha-256-128"
      },
      {
        "name": "phase2_lifetime",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 28800
      },
      {
        "name": "gateway_address",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "127.0.0.1"
      },
      {
        "name": "shared_key",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "superCoolKey"
      },
      {
        "name": "published_quote_line_uuid",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "po_number",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "PO-1234"
      },
      {
        "name": "subscription_term",
        "schema": "integer",
        "required": false,
        "description": "",
        "example": 12
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
    "url": "/v2/services/cloud-routers/{circuit_id}/connections/oracle",
    "method": "createOracleConnection",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Cloud Router Connections",
    "typeScriptTag": "cloudRouterConnections",
    "description": "Creates a new Oracle connection on a cloud router and returns it.",
    "parameters": [
      {
        "name": "circuitId",
        "schema": "string",
        "required": true,
        "description": "Circuit ID of the target cloud router.",
        "example": "PF-L3-CUST-2"
      },
      {
        "name": "description",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Hosted-connection-Foo_Corp"
      },
      {
        "name": "maybe_nat",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": false,
        "default": false
      },
      {
        "name": "maybe_dnat",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": false,
        "default": false
      },
      {
        "name": "vc_ocid",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ocid1.virtualcircuit.oc1.iad.aaaaaaaa7fvcq4rff7yz4ey3p7wu3lenezvl34757c2cxh7jigxbjc7bgzjq"
      },
      {
        "name": "region",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "REGION"
      },
      {
        "name": "account_uuid",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "a2115890-ed02-4795-a6dd-c485bec3529c"
      },
      {
        "name": "pop",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DAL1"
      },
      {
        "name": "zone",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "A"
      },
      {
        "name": "published_quote_line_uuid",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "po_number",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "PO-1234"
      },
      {
        "name": "subscription_term",
        "schema": "integer",
        "required": false,
        "description": "",
        "example": 12
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
    "url": "/v2.1/services/cloud-routers/{circuit_id}/connections/oracle",
    "method": "createOracleConnection",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Cloud Router Connections",
    "typeScriptTag": "cloudRouterConnections",
    "description": "Creates a new Oracle connection on a cloud router and returns it.",
    "parameters": [
      {
        "name": "circuitId",
        "schema": "string",
        "required": true,
        "description": "Circuit ID of the target cloud router.",
        "example": "PF-L3-CUST-2"
      },
      {
        "name": "description",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Hosted-connection-Foo_Corp"
      },
      {
        "name": "maybe_nat",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": false,
        "default": false
      },
      {
        "name": "maybe_dnat",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": false,
        "default": false
      },
      {
        "name": "vc_ocid",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ocid1.virtualcircuit.oc1.iad.aaaaaaaa7fvcq4rff7yz4ey3p7wu3lenezvl34757c2cxh7jigxbjc7bgzjq"
      },
      {
        "name": "region",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "REGION"
      },
      {
        "name": "account_uuid",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "a2115890-ed02-4795-a6dd-c485bec3529c"
      },
      {
        "name": "pop",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DAL1"
      },
      {
        "name": "zone",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "A"
      },
      {
        "name": "published_quote_line_uuid",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "po_number",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "PO-1234"
      },
      {
        "name": "subscription_term",
        "schema": "integer",
        "required": false,
        "description": "",
        "example": 12
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
    "url": "/v2/services/cloud-routers/{circuit_id}/connections/packetfabric",
    "method": "attachPort",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Cloud Router Connections",
    "typeScriptTag": "cloudRouterConnections",
    "description": "Attaches a customer-owned port to a Cloud Router.",
    "parameters": [
      {
        "name": "circuitId",
        "schema": "string",
        "required": true,
        "description": "Circuit ID of the target cloud router.",
        "example": "PF-L3-CUST-2"
      },
      {
        "name": "description",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Test description"
      },
      {
        "name": "account_uuid",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "a2115890-ed02-4795-a6dd-c485bec3529c"
      },
      {
        "name": "maybe_nat",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": false,
        "default": false
      },
      {
        "name": "maybe_dnat",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": false,
        "default": false
      },
      {
        "name": "port_circuit_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PF-AE-1234"
      },
      {
        "name": "untagged",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": true
      },
      {
        "name": "vlan",
        "schema": "integer",
        "required": false,
        "description": "",
        "example": 6
      },
      {
        "name": "speed",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "100Mbps"
      },
      {
        "name": "is_public",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": true,
        "default": false
      },
      {
        "name": "public_nat_pool",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": true,
        "default": false
      },
      {
        "name": "published_quote_line_uuid",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "po_number",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "PO-1234"
      },
      {
        "name": "subscription_term",
        "schema": "integer",
        "required": false,
        "description": "",
        "example": 12
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
    "url": "/v2/services/cloud-routers/{circuit_id}/connections/{connection_circuit_id}/status",
    "method": "getInstanceStatus",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Cloud Router Connections",
    "typeScriptTag": "cloudRouterConnections",
    "description": "Get cloud connection instance status",
    "parameters": [
      {
        "name": "circuitId",
        "schema": "string",
        "required": true,
        "description": "Circuit ID of the target cloud router.",
        "example": "PF-L3-CUST-2"
      },
      {
        "name": "connectionCircuitId",
        "schema": "string",
        "required": true,
        "description": "Target cloud connection's Circuit ID.",
        "example": "PF-CC-GOG-NYC-1234567"
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
    "url": "/v2/services/cloud-routers/{circuit_id}/connections/{connection_circuit_id}/upgrade/options",
    "method": "getUpgradeOptions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Cloud Router Connections",
    "typeScriptTag": "cloudRouterConnections",
    "description": "Get cloud connection upgrade options",
    "parameters": [
      {
        "name": "circuitId",
        "schema": "string",
        "required": true,
        "description": "Circuit ID of the target cloud router.",
        "example": "PF-L3-CUST-2"
      },
      {
        "name": "connectionCircuitId",
        "schema": "string",
        "required": true,
        "description": "Target cloud connection's Circuit ID.",
        "example": "PF-CC-GOG-NYC-1234567"
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
    "url": "/v2/services/cloud-routers/{circuit_id}/connections/{connection_circuit_id}/bgp-routes",
    "method": "getConnectionBgpRoutes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Cloud Router BGP Session Settings",
    "typeScriptTag": "cloudRouterBgpSessionSettings",
    "description": "Get routes for the BGP session of a specific connection.",
    "parameters": [
      {
        "name": "circuitId",
        "schema": "string",
        "required": true,
        "description": "Circuit ID of the target cloud router.",
        "example": "PF-L3-CUST-2"
      },
      {
        "name": "connectionCircuitId",
        "schema": "string",
        "required": true,
        "description": "Target connection's Cloud Circuit ID.",
        "example": "PF-CC-GOG-NYC-1234567"
      },
      {
        "name": "routeType",
        "schema": "array",
        "required": true,
        "description": "Type of the bgp routes"
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
    "url": "/v2.1/services/cloud-routers/{circuit_id}/connections/{connection_circuit_id}/status",
    "method": "getStatus",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Cloud Router Connections",
    "typeScriptTag": "cloudRouterConnections",
    "description": "Get CR connection status",
    "parameters": [
      {
        "name": "circuitId",
        "schema": "string",
        "required": true,
        "description": "Target's CR Circuit ID.",
        "example": "PF-AP-LAX1-1002"
      },
      {
        "name": "connectionCircuitId",
        "schema": "string",
        "required": true,
        "description": "Target's CR Connection Circuit ID.",
        "example": "PF-AP-LAX1-1002"
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
    "url": "/v2/services/cloud-routers/{circuit_id}/bgp-routes",
    "method": "getBgpRoutes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Cloud Routers",
    "typeScriptTag": "cloudRouters",
    "description": "Get routes for this cloud router's bgp sessions",
    "parameters": [
      {
        "name": "circuitId",
        "schema": "string",
        "required": true,
        "description": "Circuit ID of the target cloud router.",
        "example": "PF-L3-CUST-2"
      },
      {
        "name": "routeType",
        "schema": "array",
        "required": true,
        "description": "Type of the bgp routes"
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
    "url": "/v2/services/cloud-routers/{circuit_id}/all-routes",
    "method": "getAllRoutes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Cloud Routers",
    "typeScriptTag": "cloudRouters",
    "description": "Get all routes for this cloud router",
    "parameters": [
      {
        "name": "circuitId",
        "schema": "string",
        "required": true,
        "description": "Circuit ID of the target cloud router.",
        "example": "PF-L3-CUST-2"
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
    "url": "/v2/services/cloud-routers/{circuit_id}/bgp-logs",
    "method": "getBgpLogs",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Cloud Routers",
    "typeScriptTag": "cloudRouters",
    "description": "Get logs for this cloud router's bgp sessions",
    "parameters": [
      {
        "name": "circuitId",
        "schema": "string",
        "required": true,
        "description": "Circuit ID of the target cloud router.",
        "example": "PF-L3-CUST-2"
      },
      {
        "name": "cloudCircuitId",
        "schema": "string",
        "required": false,
        "description": "Target connection's Cloud Circuit ID.",
        "example": "PF-CC-GOG-NYC-1234567"
      },
      {
        "name": "timeFrom",
        "schema": "string",
        "required": true,
        "description": "Get BGP logs starting from this time",
        "example": "2020-04-01T19:14:42.642Z"
      },
      {
        "name": "timeTo",
        "schema": "string",
        "required": true,
        "description": "Get BGP logs up until this time",
        "example": "2020-04-01T19:14:42.642Z"
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
    "url": "/v2/services/cloud-routers/{cr_circuit_id}/connections/{connection_circuit_id}/third-party",
    "method": "listImports",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Cloud Router Third Party",
    "typeScriptTag": "cloudRouterThirdParty",
    "description": "Returns a list of Cloud Router Imports applied on a Connection.",
    "parameters": [
      {
        "name": "crCircuitId",
        "schema": "string",
        "required": true,
        "description": "Circuit ID of the target Cloud Router.",
        "example": "PF-L3-CUST-2"
      },
      {
        "name": "connectionCircuitId",
        "schema": "string",
        "required": true,
        "description": "Circuit ID of the target Cloud Router Connection.",
        "example": "PF-CC-123456"
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
    "url": "/v2/services/cloud-routers/{cr_circuit_id}/connections/{connection_circuit_id}/third-party",
    "method": "importToConnection",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Cloud Router Third Party",
    "typeScriptTag": "cloudRouterThirdParty",
    "description": "Apply a new Cloud Router Import to this Cloud Router Connection.",
    "parameters": [
      {
        "name": "crCircuitId",
        "schema": "string",
        "required": true,
        "description": "Circuit ID of the target Cloud Router.",
        "example": "PF-L3-CUST-2"
      },
      {
        "name": "connectionCircuitId",
        "schema": "string",
        "required": true,
        "description": "Circuit ID of the target Cloud Router Connection.",
        "example": "PF-CC-123456"
      },
      {
        "name": "service_uuid",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SERVICE_UUID"
      },
      {
        "name": "import_filters",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "return_filters",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "subscription_term",
        "schema": "integer",
        "required": false,
        "description": "",
        "example": 12
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
    "url": "/v2/services/cloud-routers/{cr_circuit_id}/connections/{connection_circuit_id}/third-party/{import_circuit_id}",
    "method": "removeConnectionImport",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Cloud Router Third Party",
    "typeScriptTag": "cloudRouterThirdParty",
    "description": "Remove a Cloud Router Import from this Connection.",
    "parameters": [
      {
        "name": "crCircuitId",
        "schema": "string",
        "required": true,
        "description": "Circuit ID of the target Cloud Router.",
        "example": "PF-L3-CUST-2"
      },
      {
        "name": "connectionCircuitId",
        "schema": "string",
        "required": true,
        "description": "Circuit ID of the target Cloud Router Connection.",
        "example": "PF-CC-123456"
      },
      {
        "name": "importCircuitId",
        "schema": "string",
        "required": true,
        "description": "Circuit ID of the Cloud Router third-party service import.",
        "example": "IMPORT_CIRCUIT_ID"
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
    "url": "/v2/services/cloud-routers/{cr_circuit_id}/connections/{connection_circuit_id}/third-party/{import_circuit_id}",
    "method": "getSingleImport",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Cloud Router Third Party",
    "typeScriptTag": "cloudRouterThirdParty",
    "description": "Returns a single Cloud Router Import associated with the circuit id.",
    "parameters": [
      {
        "name": "crCircuitId",
        "schema": "string",
        "required": true,
        "description": "Circuit ID of the target Cloud Router.",
        "example": "PF-L3-CUST-2"
      },
      {
        "name": "connectionCircuitId",
        "schema": "string",
        "required": true,
        "description": "Circuit ID of the target Cloud Router Connection.",
        "example": "PF-CC-123456"
      },
      {
        "name": "importCircuitId",
        "schema": "string",
        "required": true,
        "description": "Circuit ID of the Cloud Router third-party service import.",
        "example": "IMPORT_CIRCUIT_ID"
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
    "url": "/v2/services/cloud-routers/{cr_circuit_id}/connections/{connection_circuit_id}/third-party/{import_circuit_id}",
    "method": "updateImportById",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Cloud Router Third Party",
    "typeScriptTag": "cloudRouterThirdParty",
    "description": "Updates a Cloud Router Import associated with this circuit id.",
    "parameters": [
      {
        "name": "crCircuitId",
        "schema": "string",
        "required": true,
        "description": "Circuit ID of the target Cloud Router.",
        "example": "PF-L3-CUST-2"
      },
      {
        "name": "connectionCircuitId",
        "schema": "string",
        "required": true,
        "description": "Circuit ID of the target Cloud Router Connection.",
        "example": "PF-CC-123456"
      },
      {
        "name": "importCircuitId",
        "schema": "string",
        "required": true,
        "description": "Circuit ID of the Cloud Router third-party service import.",
        "example": "IMPORT_CIRCUIT_ID"
      },
      {
        "name": "import_filters",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "return_filters",
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
    "url": "/v2/services/cloud-routers/{cr_circuit_id}/connections/{connection_circuit_id}/third-party/delete-multiple",
    "method": "removeMultiple",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Cloud Router Third Party",
    "typeScriptTag": "cloudRouterThirdParty",
    "description": "Remove multiple Cloud Router Imports by Circuit Id.",
    "parameters": [
      {
        "name": "crCircuitId",
        "schema": "string",
        "required": true,
        "description": "Circuit ID of the target Cloud Router.",
        "example": "PF-L3-CUST-2"
      },
      {
        "name": "connectionCircuitId",
        "schema": "string",
        "required": true,
        "description": "Circuit ID of the target Cloud Router Connection.",
        "example": "PF-CC-123456"
      },
      {
        "name": "import_circuit_ids",
        "schema": "array",
        "description": ""
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
    "url": "/v2/services/cloud-routers/{cr_circuit_id}/route-sets",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Cloud Router Route Sets",
    "typeScriptTag": "cloudRouterRouteSets",
    "description": "Returns a list of Route Sets on this Cloud Router.",
    "parameters": [
      {
        "name": "crCircuitId",
        "schema": "string",
        "required": true,
        "description": "Circuit ID of the target Cloud Router.",
        "example": "PF-L3-CUST-2"
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
    "url": "/v2/services/cloud-routers/{cr_circuit_id}/route-sets/{route_set_circuit_id}",
    "method": "getSingleRouteSet",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Cloud Router Route Sets",
    "typeScriptTag": "cloudRouterRouteSets",
    "description": "Returns a single Route Set associated with the circuit id.",
    "parameters": [
      {
        "name": "crCircuitId",
        "schema": "string",
        "required": true,
        "description": "Circuit ID of the target Cloud Router.",
        "example": "PF-L3-CUST-2"
      },
      {
        "name": "routeSetCircuitId",
        "schema": "string",
        "required": true,
        "description": "Circuit ID of the Route Set.",
        "example": "PF-L3-RS-123456"
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
    "url": "/v2/services/cloud-routers/{cr_circuit_id}/route-sets/{route_set_circuit_id}",
    "method": "updateRouteSet",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Cloud Router Route Sets",
    "typeScriptTag": "cloudRouterRouteSets",
    "description": "Updates a Route Set associated with this circuit id.",
    "parameters": [
      {
        "name": "crCircuitId",
        "schema": "string",
        "required": true,
        "description": "Circuit ID of the target Cloud Router.",
        "example": "PF-L3-CUST-2"
      },
      {
        "name": "routeSetCircuitId",
        "schema": "string",
        "required": true,
        "description": "Circuit ID of the Route Set.",
        "example": "PF-L3-RS-123456"
      },
      {
        "name": "description",
        "schema": "string",
        "description": "",
        "example": "User entered description"
      },
      {
        "name": "prefixes",
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
    "url": "/v2/services/cloud-routers/{cr_circuit_id}/route-sets/{route_set_circuit_id}/connections",
    "method": "getConnections",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Cloud Router Route Sets",
    "typeScriptTag": "cloudRouterRouteSets",
    "description": "Returns the list of connections this Route Set is defined from.",
    "parameters": [
      {
        "name": "crCircuitId",
        "schema": "string",
        "required": true,
        "description": "Circuit ID of the target Cloud Router.",
        "example": "PF-L3-CUST-2"
      },
      {
        "name": "routeSetCircuitId",
        "schema": "string",
        "required": true,
        "description": "Circuit ID of the Route Set.",
        "example": "PF-L3-RS-9087"
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
    "url": "/v2/services/cloud-routers/{cr_circuit_id}/route-sets/{route_set_circuit_id}/connections",
    "method": "updateConnections",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Cloud Router Route Sets",
    "typeScriptTag": "cloudRouterRouteSets",
    "description": "Updates the list of connections this Route Set is defined from.",
    "parameters": [
      {
        "name": "crCircuitId",
        "schema": "string",
        "required": true,
        "description": "Circuit ID of the target Cloud Router.",
        "example": "PF-L3-CUST-2"
      },
      {
        "name": "routeSetCircuitId",
        "schema": "string",
        "required": true,
        "description": "Circuit ID of the Route Set.",
        "example": "PF-L3-RS-9087"
      },
      {
        "name": "connection_circuit_ids",
        "schema": "array",
        "description": ""
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
    "url": "/v2/services/cloud/hosted/aws",
    "method": "requestHostedConnection",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Cloud Services - AWS",
    "typeScriptTag": "cloudServicesAws",
    "description": "Request a new hosted AWS connection.",
    "parameters": [
      {
        "name": "description",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "AWS Hosted connection for Foo Corp"
      },
      {
        "name": "aws_account_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": 2345678910
      },
      {
        "name": "account_uuid",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "a2115890-ed02-4795-a6dd-c485bec3529c"
      },
      {
        "name": "pop",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DAL1"
      },
      {
        "name": "port",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PF-AP-LAX1-1002"
      },
      {
        "name": "vlan",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 6
      },
      {
        "name": "src_svlan",
        "schema": "integer",
        "required": false,
        "description": "",
        "example": 100
      },
      {
        "name": "zone",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "A"
      },
      {
        "name": "speed",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "100Mbps"
      },
      {
        "name": "subscription_term",
        "schema": "integer",
        "required": false,
        "description": "",
        "default": 1
      },
      {
        "name": "published_quote_line_uuid",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "po_number",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "PO-1234"
      },
      {
        "name": "cloud_settings",
        "schema": "object",
        "required": false,
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
    "url": "/v2/services/cloud/dedicated/aws",
    "method": "requestConnection",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Cloud Services - AWS",
    "typeScriptTag": "cloudServicesAws",
    "description": "Request a new dedicated AWS connection.",
    "parameters": [
      {
        "name": "description",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "AWS Hosted connection for Foo Corp"
      },
      {
        "name": "aws_region",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "us-west-1"
      },
      {
        "name": "account_uuid",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "a2115890-ed02-4795-a6dd-c485bec3529c"
      },
      {
        "name": "zone",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "A"
      },
      {
        "name": "pop",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DAL1"
      },
      {
        "name": "customer_site_code",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "SW-LAS8"
      },
      {
        "name": "subscription_term",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 1
      },
      {
        "name": "service_class",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "longhaul"
      },
      {
        "name": "autoneg",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": false
      },
      {
        "name": "speed",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "1Gbps"
      },
      {
        "name": "should_create_lag",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": true
      },
      {
        "name": "loa",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "SSBhbSBhIFBERg=="
      },
      {
        "name": "published_quote_line_uuid",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "po_number",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "PO-1234"
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
    "url": "/v2/services/cloud/hosted/azure/service-key-validation/{azure_service_key}",
    "method": "validateServiceKey",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Cloud Services - Azure",
    "typeScriptTag": "cloudServicesAzure",
    "description": "Validate an Azure service key.",
    "parameters": [
      {
        "name": "azureServiceKey",
        "schema": "string",
        "required": true,
        "description": "The Service Key provided by Microsoft Azure.",
        "example": "aaaa0000-a0a0-a0a0-a0a0-aaaa0000aaaa"
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
    "url": "/v2/services/cloud/hosted/azure",
    "method": "requestNewExpressRoute",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Cloud Services - Azure",
    "typeScriptTag": "cloudServicesAzure",
    "description": "Request a new AzureExpressRoute hosted connection.",
    "parameters": [
      {
        "name": "description",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Azure ExpressRoute Hosted connection for Foo Corp."
      },
      {
        "name": "azure_service_key",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "aaaa0000-a0a0-a0a0-a0a0-aaaa0000aaaa"
      },
      {
        "name": "account_uuid",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "a2115890-ed02-4795-a6dd-c485bec3529c"
      },
      {
        "name": "port",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PF-AP-LAX1-1002"
      },
      {
        "name": "vlan_private",
        "schema": "integer",
        "required": false,
        "description": "",
        "example": 6
      },
      {
        "name": "vlan_microsoft",
        "schema": "integer",
        "required": false,
        "description": "",
        "example": 7
      },
      {
        "name": "src_svlan",
        "schema": "integer",
        "required": false,
        "description": "",
        "example": 100
      },
      {
        "name": "speed",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "100Mbps"
      },
      {
        "name": "subscription_term",
        "schema": "integer",
        "required": false,
        "description": "",
        "default": 1
      },
      {
        "name": "published_quote_line_uuid",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "po_number",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "PO-1234"
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
    "url": "/v2/services/cloud/dedicated/azure",
    "method": "requestNewDedicatedConnection",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Cloud Services - Azure",
    "typeScriptTag": "cloudServicesAzure",
    "description": "Request a new AzureExpressRoute dedicated connection.",
    "parameters": [
      {
        "name": "description",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Azure Dedicated connection for Foo Corp"
      },
      {
        "name": "account_uuid",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "a2115890-ed02-4795-a6dd-c485bec3529c"
      },
      {
        "name": "zone",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "A"
      },
      {
        "name": "pop",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DAL1"
      },
      {
        "name": "customer_site_code",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "SW-LAS8"
      },
      {
        "name": "subscription_term",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 1
      },
      {
        "name": "service_class",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "longhaul"
      },
      {
        "name": "speed",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "10Gbps"
      },
      {
        "name": "loa",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "SSBhbSBhIFBERg=="
      },
      {
        "name": "encapsulation",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ENCAPSULATION"
      },
      {
        "name": "port_category",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PORT_CATEGORY"
      },
      {
        "name": "published_quote_line_uuid",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "po_number",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "PO-1234"
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
    "url": "/v2/services/cloud/hosted/google",
    "method": "requestNewConnection",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Cloud Services - Google Cloud",
    "typeScriptTag": "cloudServicesGoogleCloud",
    "description": "Request a new hosted Google connection.",
    "parameters": [
      {
        "name": "description",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Test description"
      },
      {
        "name": "account_uuid",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "a2115890-ed02-4795-a6dd-c485bec3529c"
      },
      {
        "name": "google_pairing_key",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "7e51371e-72a3-40b5-b844-2e3efefaee59/us-central1/2"
      },
      {
        "name": "google_vlan_attachment_name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "rrv-nms-dev-1a2b-vl1-us-west1-1"
      },
      {
        "name": "port",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PF-AP-LAX1-1002"
      },
      {
        "name": "vlan",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 6
      },
      {
        "name": "src_svlan",
        "schema": "integer",
        "required": false,
        "description": "",
        "example": 100
      },
      {
        "name": "pop",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DAL1"
      },
      {
        "name": "speed",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "100Mbps"
      },
      {
        "name": "subscription_term",
        "schema": "integer",
        "required": false,
        "description": "",
        "default": 1
      },
      {
        "name": "published_quote_line_uuid",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "po_number",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "PO-1234"
      },
      {
        "name": "cloud_settings",
        "schema": "object",
        "required": false,
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
    "url": "/v2/services/cloud/dedicated/google",
    "method": "requestDedicatedConnection",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Cloud Services - Google Cloud",
    "typeScriptTag": "cloudServicesGoogleCloud",
    "description": "Request a new dedicated Google connection.",
    "parameters": [
      {
        "name": "description",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Google Dedicated connection for Foo Corp"
      },
      {
        "name": "account_uuid",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "a2115890-ed02-4795-a6dd-c485bec3529c"
      },
      {
        "name": "zone",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "A"
      },
      {
        "name": "pop",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DAL1"
      },
      {
        "name": "customer_site_code",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "SW-LAS8"
      },
      {
        "name": "subscription_term",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 1
      },
      {
        "name": "service_class",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "longhaul"
      },
      {
        "name": "autoneg",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": false
      },
      {
        "name": "speed",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "10Gbps"
      },
      {
        "name": "loa",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "SSBhbSBhIFBERg=="
      },
      {
        "name": "published_quote_line_uuid",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "po_number",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "PO-1234"
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
    "url": "/v2/services/cloud/hosted/ibm",
    "method": "requestNewConnection",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Cloud Services - IBM",
    "typeScriptTag": "cloudServicesIbm",
    "description": "Request a new hosted IBM connection.",
    "parameters": [
      {
        "name": "description",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Hosted-connection-Foo_Corp"
      },
      {
        "name": "ibm_account_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "57a7d05f36894e3cb9b46a43556d903e"
      },
      {
        "name": "ibm_bgp_asn",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 64999
      },
      {
        "name": "ibm_bgp_cer_cidr",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "10.254.30.78/30"
      },
      {
        "name": "ibm_bgp_ibm_cidr",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "10.254.30.77/30"
      },
      {
        "name": "account_uuid",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "a2115890-ed02-4795-a6dd-c485bec3529c"
      },
      {
        "name": "pop",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DAL1"
      },
      {
        "name": "port",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PF-AP-LAX1-1002"
      },
      {
        "name": "vlan",
        "schema": "integer",
        "required": false,
        "description": "",
        "example": 6
      },
      {
        "name": "src_svlan",
        "schema": "integer",
        "required": false,
        "description": "",
        "example": 100
      },
      {
        "name": "zone",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "A"
      },
      {
        "name": "speed",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "1Gbps"
      },
      {
        "name": "subscription_term",
        "schema": "integer",
        "required": false,
        "description": "",
        "default": 1
      },
      {
        "name": "published_quote_line_uuid",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "po_number",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "PO-1234"
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
    "url": "/v2/services/cloud/hosted/oracle",
    "method": "requestConnection",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Cloud Services - Oracle",
    "typeScriptTag": "cloudServicesOracle",
    "description": "Request a new hosted Oracle connection.",
    "parameters": [
      {
        "name": "description",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Hosted-connection-Foo_Corp"
      },
      {
        "name": "vc_ocid",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ocid1.virtualcircuit.oc1.iad.aaaaaaaa7fvcq4rff7yz4ey3p7wu3lenezvl34757c2cxh7jigxbjc7bgzjq"
      },
      {
        "name": "region",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "REGION"
      },
      {
        "name": "account_uuid",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "a2115890-ed02-4795-a6dd-c485bec3529c"
      },
      {
        "name": "pop",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "WDC2"
      },
      {
        "name": "port",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PF-AP-LAX1-1002"
      },
      {
        "name": "zone",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "A"
      },
      {
        "name": "vlan",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 6
      },
      {
        "name": "src_svlan",
        "schema": "integer",
        "required": false,
        "description": "",
        "example": 100
      },
      {
        "name": "published_quote_line_uuid",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "po_number",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "PO-1234"
      },
      {
        "name": "subscription_term",
        "schema": "integer",
        "required": false,
        "description": "",
        "default": 1
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
    "url": "/v2/services/cloud/hosted/oracle/vc-ocid-status/{vc_ocid}",
    "method": "getStatus",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Cloud Services - Oracle",
    "typeScriptTag": "cloudServicesOracle",
    "description": "Get current status of Oracle side VC",
    "parameters": [
      {
        "name": "vcOcid",
        "schema": "string",
        "required": true,
        "description": "Oracle side VC identifier",
        "example": "ocid1.virtualcircuit.oc1.iad.aaaaaaaa7fvcq4rff7yz4ey3p7wu3lenezvl34757c2cxh7jigxbjc7bgzjq"
      },
      {
        "name": "region",
        "schema": "string",
        "required": false,
        "description": "Oracle region for this VC OCID"
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
    "url": "/v2/services/cloud/hosted/oracle/{cloud_circuit_id}/sync",
    "method": "syncChanges",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Cloud Services - Oracle",
    "typeScriptTag": "cloudServicesOracle",
    "description": "Sync changes to speed/bandwidth on Oracle VC to PacketFabric hosted connection.",
    "parameters": [
      {
        "name": "cloudCircuitId",
        "schema": "string",
        "required": true,
        "description": "The unique PF circuit ID for this connection.",
        "example": "PF-CC-DAL-NYC-2009-PF"
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
    "url": "/v2/services/cloud/{cloud_circuit_id}",
    "method": "deleteConnection",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Cloud Services - AWS",
    "typeScriptTag": "cloudServicesAws",
    "description": "Delete a cloud connection",
    "parameters": [
      {
        "name": "cloudCircuitId",
        "schema": "string",
        "required": true,
        "description": "The unique PF circuit ID for this connection.",
        "example": "PF-AP-LAX1-1002"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Cloud connection successfully deleted"
      }
    ]
  },
  {
    "url": "/v2/services/cloud/hosted/{cloud_circuit_id}",
    "method": "updateHostedConnection",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Cloud Services - AWS",
    "typeScriptTag": "cloudServicesAws",
    "description": "Update a hosted cloud connection",
    "parameters": [
      {
        "name": "cloudCircuitId",
        "schema": "string",
        "required": true,
        "description": "The unique PF circuit ID for this connection.",
        "example": "PF-AP-LAX1-1002"
      },
      {
        "name": "description",
        "schema": "string",
        "description": "",
        "example": "Cloud Connection Foo Corp"
      },
      {
        "name": "cloud_settings",
        "schema": "undefined",
        "description": ""
      },
      {
        "name": "po_number",
        "schema": "string",
        "description": "",
        "example": "PO-1234"
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
    "url": "/v2/services/cloud/hosted/{cloud_circuit_id}/upgrade",
    "method": "upgradeHostedConnection",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Cloud Services - AWS",
    "typeScriptTag": "cloudServicesAws",
    "description": "Upgrade a hosted cloud connection",
    "parameters": [
      {
        "name": "cloudCircuitId",
        "schema": "string",
        "required": true,
        "description": "The unique PF circuit ID for this connection.",
        "example": "PF-AP-LAX1-1002"
      },
      {
        "name": "speed",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "100Mbps"
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
    "url": "/v2/services/cloud/dedicated/{cloud_circuit_id}",
    "method": "updateDedicatedCloudConnection",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Cloud Services - AWS",
    "typeScriptTag": "cloudServicesAws",
    "description": "Update a dedicated cloud connection",
    "parameters": [
      {
        "name": "cloudCircuitId",
        "schema": "string",
        "required": true,
        "description": "The unique PF circuit ID for this connection.",
        "example": "PF-AP-LAX1-1002"
      },
      {
        "name": "po_number",
        "schema": "string",
        "description": "",
        "example": "PO-1234"
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
    "url": "/v2/services/cloud/dedicated/{cloud_circuit_id}/upgrade",
    "method": "upgradeDedicatedCloudConnection",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Cloud Services - AWS",
    "typeScriptTag": "cloudServicesAws",
    "description": "Upgrade a dedicated cloud connection",
    "parameters": [
      {
        "name": "cloudCircuitId",
        "schema": "string",
        "required": true,
        "description": "The unique PF circuit ID for this connection.",
        "example": "PF-AP-LAX1-1002"
      },
      {
        "name": "subscription_term",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "service_class",
        "schema": "string",
        "description": "",
        "example": "longhaul"
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
    "url": "/v2/services/cloud/ibm/{cloud_circuit_id}",
    "method": "updateIbmCloudConnection",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Cloud Services - IBM",
    "typeScriptTag": "cloudServicesIbm",
    "description": "Update an IBM hosted cloud connection",
    "parameters": [
      {
        "name": "cloudCircuitId",
        "schema": "string",
        "required": true,
        "description": "The unique PF circuit ID for this connection.",
        "example": "PF-AP-LAX1-1002"
      },
      {
        "name": "description",
        "schema": "string",
        "description": "",
        "example": "Hosted-connection-Foo_Corp"
      },
      {
        "name": "po_number",
        "schema": "string",
        "description": "",
        "example": "PO-1234"
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
    "url": "/v2/services/cloud/connections/{cloud_circuit_id}",
    "method": "connection",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Cloud Services - AWS",
    "typeScriptTag": "cloudServicesAws",
    "description": "Get cloud connection info",
    "parameters": [
      {
        "name": "cloudCircuitId",
        "schema": "string",
        "required": true,
        "description": "Target connection's Cloud Circuit ID.",
        "example": "PF-CC-GOG-NYC-1234567"
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
    "url": "/v2/services/cloud/connections/{cloud_circuit_id}/status",
    "method": "getConnectionStatus",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Cloud Services - AWS",
    "typeScriptTag": "cloudServicesAws",
    "description": "Get cloud connection instance status (https://docs.packetfabric.com/api/v2/",
    "parameters": [
      {
        "name": "cloudCircuitId",
        "schema": "string",
        "required": true,
        "description": "Target connection's Cloud Circuit ID.",
        "example": "PF-CC-GOG-NYC-1234567"
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
    "url": "/v2/services/cloud/connections/{cloud_circuit_id}/upgrade/options",
    "method": "getConnectionUpgradeOptions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Cloud Services - AWS",
    "typeScriptTag": "cloudServicesAws",
    "description": "Get cloud connection instance upgrade options",
    "parameters": [
      {
        "name": "cloudCircuitId",
        "schema": "string",
        "required": true,
        "description": "Target connection's Cloud Circuit ID.",
        "example": "PF-CC-GOG-NYC-1234567"
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
    "url": "/v2/services/cloud/connections/hosted",
    "method": "listHostedConnections",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Cloud Services - AWS",
    "typeScriptTag": "cloudServicesAws",
    "description": "Get list of current customer's hosted cloud connections. Output is only paginated if at least one pagination argument is given.",
    "parameters": [
      {
        "name": "q",
        "schema": "string",
        "description": "Filter by circuit id or description"
      },
      {
        "name": "sortColumn",
        "schema": "string",
        "description": ""
      },
      {
        "name": "sortOrder",
        "schema": "string",
        "description": "",
        "default": "asc"
      },
      {
        "name": "offset",
        "schema": "integer",
        "description": "",
        "default": 0
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "description": "",
        "default": 100
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
    "url": "/v2/services/cloud/connections/hosted/export.csv",
    "method": "listHostedConnectionsCsv",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Cloud Services - AWS",
    "typeScriptTag": "cloudServicesAws",
    "description": "Get CSV with the list of current customer's hosted cloud connections. Output is only paginated if at least one pagination argument is given.",
    "parameters": [
      {
        "name": "q",
        "schema": "string",
        "description": "Filter by circuit id or description"
      },
      {
        "name": "sortColumn",
        "schema": "string",
        "description": ""
      },
      {
        "name": "sortOrder",
        "schema": "string",
        "description": "",
        "default": "asc"
      },
      {
        "name": "offset",
        "schema": "integer",
        "description": "",
        "default": 0
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "description": "",
        "default": 100
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
    "url": "/v2/services/cloud/connections/dedicated",
    "method": "getCurrentDedicatedConnections",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Cloud Services - AWS",
    "typeScriptTag": "cloudServicesAws",
    "description": "Get list of current customer's dedicated cloud connections",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/services/cloud/connections/dedicated/export.csv",
    "method": "getCurrentCustomerDedicatedConnectionsCsv",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Cloud Services - AWS",
    "typeScriptTag": "cloudServicesAws",
    "description": "Get CSV with the list of current customer's dedicated cloud connections",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2.1/services/cloud/connections/{ident}/status",
    "method": "getStatus",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Cloud Services - AWS",
    "typeScriptTag": "cloudServicesAws",
    "description": "Get Cloud status",
    "parameters": [
      {
        "name": "ident",
        "schema": "string",
        "required": true,
        "description": "Cloud UUID",
        "example": "2c6f2b26-1cb8-4a85-b70b-f71e909ca3e6"
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
    "url": "/v2/services/cloud/connections/{cloud_circuit_id}/router-config",
    "method": "getRouterConfig",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Cloud Services - AWS",
    "typeScriptTag": "cloudServicesAws",
    "description": "Get router configuration",
    "parameters": [
      {
        "name": "cloudCircuitId",
        "schema": "string",
        "required": true,
        "description": "Target connection's Cloud Circuit ID.",
        "example": "PF-CC-GOG-NYC-1234567"
      },
      {
        "name": "routerType",
        "schema": "string",
        "required": true,
        "description": "Router Type Identifier.",
        "example": "CiscoSystemsInc-2900SeriesRouters-IOS124"
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
    "url": "/v2/services/cloud/aws/resources/{credentials_uuid}/regions",
    "method": "getAvailableRegions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Cloud Services - AWS",
    "typeScriptTag": "cloudServicesAws",
    "description": "Get available AWS regions",
    "parameters": [
      {
        "name": "credentialsUuid",
        "schema": "string",
        "required": true,
        "description": "The UUID of the credentials that should be used for this request.",
        "example": "95ee5b4e-0174-437b-8e24-61f4d726acad"
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
    "url": "/v2/services/cloud/aws/resources/{credentials_uuid}/{region_name}",
    "method": "getResourcesInRegion",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Cloud Services - AWS",
    "typeScriptTag": "cloudServicesAws",
    "description": "Get AWS resources in the given region",
    "parameters": [
      {
        "name": "credentialsUuid",
        "schema": "string",
        "required": true,
        "description": "The UUID of the credentials that should be used for this request.",
        "example": "95ee5b4e-0174-437b-8e24-61f4d726acad"
      },
      {
        "name": "regionName",
        "schema": "string",
        "required": true,
        "description": "Name of the chosen AWS region.",
        "example": "us-east-1"
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
    "url": "/v2/services/cloud/google/resources/{credentials_uuid}/regions",
    "method": "availableRegionsGet",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Cloud Services - Google Cloud",
    "typeScriptTag": "cloudServicesGoogleCloud",
    "description": "Get available Google regions",
    "parameters": [
      {
        "name": "credentialsUuid",
        "schema": "string",
        "required": true,
        "description": "The UUID of the credentials that should be used for this request.",
        "example": "95ee5b4e-0174-437b-8e24-61f4d726acad"
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
    "url": "/v2/services/cloud/google/resources/{credentials_uuid}/{region_name}",
    "method": "getResourcesByRegion",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Cloud Services - Google Cloud",
    "typeScriptTag": "cloudServicesGoogleCloud",
    "description": "Get Google resources in the given region",
    "parameters": [
      {
        "name": "credentialsUuid",
        "schema": "string",
        "required": true,
        "description": "The UUID of the credentials that should be used for this request.",
        "example": "95ee5b4e-0174-437b-8e24-61f4d726acad"
      },
      {
        "name": "regionName",
        "schema": "string",
        "required": true,
        "description": "Name of the chosen AWS region.",
        "example": "us-east1"
      },
      {
        "name": "projectId",
        "schema": "string",
        "required": false,
        "description": "Name of the chosen project_id. Defaults to the project_id of the credentials.",
        "example": "example-project"
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
    "url": "/v2/services/cloud/credentials",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Cloud Provider Credentials",
    "typeScriptTag": "cloudProviderCredentials",
    "description": "Get all cloud provider credentials",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/services/cloud/credentials",
    "method": "createNewCredential",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Cloud Provider Credentials",
    "typeScriptTag": "cloudProviderCredentials",
    "description": "Create a new Cloud Provider Credential.",
    "parameters": [
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Example Description"
      },
      {
        "name": "cloud_provider",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CLOUD_PROVIDER"
      },
      {
        "name": "cloud_credentials",
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
    "url": "/v2/services/cloud/credentials/{credential_uuid}",
    "method": "deleteCredential",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Cloud Provider Credentials",
    "typeScriptTag": "cloudProviderCredentials",
    "description": "Delete a Cloud Provider Credential.",
    "parameters": [
      {
        "name": "credentialUuid",
        "schema": "string",
        "required": true,
        "description": "UUID of the target Cloud Provider Credential.",
        "example": "0379ef74-c326-4f0d-a906-c56da712e536"
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
    "url": "/v2/services/cloud/credentials/{credential_uuid}",
    "method": "updateCredential",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Cloud Provider Credentials",
    "typeScriptTag": "cloudProviderCredentials",
    "description": "Update a Cloud Provider Credential.",
    "parameters": [
      {
        "name": "credentialUuid",
        "schema": "string",
        "required": true,
        "description": "UUID of the target Cloud Provider Credential.",
        "example": "0379ef74-c326-4f0d-a906-c56da712e536"
      },
      {
        "name": "description",
        "schema": "string",
        "description": "",
        "example": "Example Description"
      },
      {
        "name": "cloud_credentials",
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
    "url": "/v2/services/cloud/credentials/{credential_uuid}/connections",
    "method": "getAllConnections",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Cloud Provider Credentials",
    "typeScriptTag": "cloudProviderCredentials",
    "description": "Get all connections tied to this cloud provider credential",
    "parameters": [
      {
        "name": "credentialUuid",
        "schema": "string",
        "required": true,
        "description": "UUID of the target Cloud Provider Credential.",
        "example": "0379ef74-c326-4f0d-a906-c56da712e536"
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
    "url": "/v2/signup/email-validation",
    "method": "emailValidationCheck",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Signup",
    "typeScriptTag": "signup",
    "description": "Check email address",
    "parameters": [
      {
        "name": "email",
        "schema": "string",
        "required": true,
        "description": "The email address to be checked",
        "example": "email@email.com"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A valid email address was checked"
      },
      {
        "statusCode": "400",
        "description": "The email address was either missing or invalid"
      }
    ]
  },
  {
    "url": "/v2/aggregated-capacity",
    "method": "getAllContainers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Flex Bandwidth",
    "typeScriptTag": "flexBandwidth",
    "description": "Get all flex bandwidth containers for the current customer",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/aggregated-capacity",
    "method": "createFlexContainer",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Flex Bandwidth",
    "typeScriptTag": "flexBandwidth",
    "description": "Create a flex bandwidth container",
    "parameters": [
      {
        "name": "description",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Flex bandwidth container description"
      },
      {
        "name": "account_uuid",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACCOUNT_UUID"
      },
      {
        "name": "subscription_term",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 12
      },
      {
        "name": "capacity",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "100Gbps"
      },
      {
        "name": "po_number",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "PO-1234"
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
    "url": "/v2/aggregated-capacity/{aggregate_capacity_id}",
    "method": "deleteContainer",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Flex Bandwidth",
    "typeScriptTag": "flexBandwidth",
    "description": "Delete a flex bandwidth container",
    "parameters": [
      {
        "name": "aggregateCapacityId",
        "schema": "string",
        "required": true,
        "description": "The ID of the flex bandwidth container",
        "example": "PF-AB-1234"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Aggregate Capacity deleted successfully"
      }
    ]
  },
  {
    "url": "/v2/aggregated-capacity/{aggregate_capacity_id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Flex Bandwidth",
    "typeScriptTag": "flexBandwidth",
    "description": "Get a flex bandwidth container by ID",
    "parameters": [
      {
        "name": "aggregateCapacityId",
        "schema": "string",
        "required": true,
        "description": "The ID of the flex bandwidth container",
        "example": "PF-AB-1234"
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
    "url": "/v2/announcements",
    "method": "getCurrentCustomerList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Announcements",
    "typeScriptTag": "announcements",
    "description": "Get all active announcements for the current customer",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/services/ipam/contacts",
    "method": "getCurrentCustomerContacts",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "IPAM",
    "typeScriptTag": "ipam",
    "description": "Get the IPAM contacts associated with the current customer",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/services/ipam/contacts",
    "method": "addContact",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "IPAM",
    "typeScriptTag": "ipam",
    "description": "Add the contact for the current customer",
    "parameters": [
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
        "name": "phone",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PHONE"
      },
      {
        "name": "address",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ADDRESS"
      },
      {
        "name": "country_code",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "US"
      },
      {
        "name": "apnic_org_id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "ripe_org_id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "apnic_ref",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "ripe_ref",
        "schema": "string",
        "required": false,
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
    "url": "/v2/services/ipam/contacts/{ipam_contact_uuid}",
    "method": "deleteByUuid",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "IPAM",
    "typeScriptTag": "ipam",
    "description": "Delete an IPAM contact by UUID",
    "parameters": [
      {
        "name": "ipamContactUuid",
        "schema": "string",
        "required": true,
        "description": "The UUID of the IPAM contact.",
        "example": "a2115890-ed02-4795-a6dd-c485bec3529c"
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
    "url": "/v2/services/ipam/contacts/{ipam_contact_uuid}",
    "method": "getByUuid",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "IPAM",
    "typeScriptTag": "ipam",
    "description": "Get an IPAM contact by UUID",
    "parameters": [
      {
        "name": "ipamContactUuid",
        "schema": "string",
        "required": true,
        "description": "The UUID of the IPAM contact.",
        "example": "a2115890-ed02-4795-a6dd-c485bec3529c"
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
    "url": "/v2/services/ipam/prefixes",
    "method": "getPrefixes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "IPAM",
    "typeScriptTag": "ipam",
    "description": "Get the IPAM prefixes associated with the current customer",
    "parameters": [
      {
        "name": "market",
        "schema": "string",
        "required": false,
        "description": "The market code to filter by.",
        "example": "NYC"
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
    "url": "/v2/services/ipam/prefixes",
    "method": "allocatePrefix",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "IPAM",
    "typeScriptTag": "ipam",
    "description": "Allocate a new IPAM prefix",
    "parameters": [
      {
        "name": "length",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "market",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "address_family",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "admin_ipam_contact_uuid",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "tech_ipam_contact_uuid",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "address",
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
        "name": "postal_code",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "org_id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "ipj_details",
        "schema": "object",
        "required": false,
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
    "url": "/v2/services/ipam/prefixes/{prefix_circuit_id}",
    "method": "deleteByCircuitId",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "IPAM",
    "typeScriptTag": "ipam",
    "description": "Delete an IPAM prefix by Circuit Id",
    "parameters": [
      {
        "name": "prefixCircuitId",
        "schema": "string",
        "required": true,
        "description": "The Circuit Id of the IPAM Prefix.",
        "example": "PF-IP-12345"
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
    "url": "/v2/services/ipam/prefixes/{prefix_circuit_id}",
    "method": "getByCircuitId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "IPAM",
    "typeScriptTag": "ipam",
    "description": "Get an IPAM Prefix by Circuit Id",
    "parameters": [
      {
        "name": "prefixCircuitId",
        "schema": "string",
        "required": true,
        "description": "The Circuit Id of the IPAM Prefix.",
        "example": "PF-IP-12345"
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
    "url": "/v2/services/ipam/asns",
    "method": "getAsns",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "IPAM",
    "typeScriptTag": "ipam",
    "description": "Get the IPAM ASNs associated with the current customer",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/services/ipam/asns",
    "method": "allocateNewAsn",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "IPAM",
    "typeScriptTag": "ipam",
    "description": "Allocate a new IPAM ASN",
    "parameters": [
      {
        "name": "asn_byte_type",
        "schema": "integer",
        "description": "",
        "default": 2
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
    "url": "/v2/services/ipam/asns/{asn}",
    "method": "deleteAsnByAsn",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "IPAM",
    "typeScriptTag": "ipam",
    "description": "Delete an IPAM ASN by the ASN",
    "parameters": [
      {
        "name": "asn",
        "schema": "integer",
        "required": true,
        "description": "The ASN.",
        "example": 65367
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
    "url": "/v2/services/ipam/asns/{asn}",
    "method": "getAsnById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "IPAM",
    "typeScriptTag": "ipam",
    "description": "Get an IPAM ASN by the ASN",
    "parameters": [
      {
        "name": "asn",
        "schema": "integer",
        "required": true,
        "description": "The ASN.",
        "example": 65367
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
    "url": "/v2/services/high-performance-internet",
    "method": "getCurrentCustomerHpIs",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "High Performance Internet",
    "typeScriptTag": "highPerformanceInternet",
    "description": "Get HPIs associated with the current customer",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/services/high-performance-internet",
    "method": "post",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "High Performance Internet",
    "typeScriptTag": "highPerformanceInternet",
    "description": "Create a new HPI",
    "parameters": [
      {
        "name": "description",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "HPI for customer A"
      },
      {
        "name": "port_circuit_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PF-AP-12345"
      },
      {
        "name": "speed",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "1Gbps"
      },
      {
        "name": "vlan",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 4
      },
      {
        "name": "account_uuid",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "12345678-1234-1234-1234-123456789012"
      },
      {
        "name": "routing_configuration",
        "schema": "object",
        "required": true,
        "description": ""
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
    "url": "/v2/services/high-performance-internet/{hpi_circuit_id}",
    "method": "delete",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "High Performance Internet",
    "typeScriptTag": "highPerformanceInternet",
    "description": "Delete a HPI by hpi_circuit_id",
    "parameters": [
      {
        "name": "hpiCircuitId",
        "schema": "string",
        "required": true,
        "description": "The circuit id of the HPI.",
        "example": "HPI_CIRCUIT_ID"
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
    "url": "/v2/services/high-performance-internet/{hpi_circuit_id}",
    "method": "get",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "High Performance Internet",
    "typeScriptTag": "highPerformanceInternet",
    "description": "Get a HPI by hpi_circuit_id",
    "parameters": [
      {
        "name": "hpiCircuitId",
        "schema": "string",
        "required": true,
        "description": "The circuit id of the HPI.",
        "example": "HPI_CIRCUIT_ID"
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
    "url": "/v2/services/high-performance-internet/{hpi_circuit_id}",
    "method": "put",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "High Performance Internet",
    "typeScriptTag": "highPerformanceInternet",
    "description": "Update a HPI",
    "parameters": [
      {
        "name": "hpiCircuitId",
        "schema": "string",
        "required": true,
        "description": "The circuit id of the HPI.",
        "example": "HPI_CIRCUIT_ID"
      },
      {
        "name": "description",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "HPI for customer A"
      },
      {
        "name": "routing_configuration",
        "schema": "object",
        "required": true,
        "description": ""
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
    "url": "/v2/services/high-performance-internet/{hpi_circuit_id}/bgp",
    "method": "getBgpConfig",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "High Performance Internet",
    "typeScriptTag": "highPerformanceInternet",
    "description": "Get the bgp routing configurations for this HPI",
    "parameters": [
      {
        "name": "hpiCircuitId",
        "schema": "string",
        "required": true,
        "description": "The circuit id of the HPI.",
        "example": "HPI_CIRCUIT_ID"
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
    "url": "/v2/services/high-performance-internet/{hpi_circuit_id}/static",
    "method": "getStaticConfigurations",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "High Performance Internet",
    "typeScriptTag": "highPerformanceInternet",
    "description": "Get the static routing configurations for this HPI",
    "parameters": [
      {
        "name": "hpiCircuitId",
        "schema": "string",
        "required": true,
        "description": "The circuit id of the HPI.",
        "example": "HPI_CIRCUIT_ID"
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
    "url": "/v2/services/high-performance-internet/{hpi_circuit_id}/status",
    "method": "getStatus",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "High Performance Internet",
    "typeScriptTag": "highPerformanceInternet",
    "description": "Get HPI status",
    "parameters": [
      {
        "name": "hpiCircuitId",
        "schema": "string",
        "required": true,
        "description": "The circuit id of the HPI.",
        "example": "HPI_CIRCUIT_ID"
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
      apiTitle="PacketFabric API"
      apiBaseUrl="https://api.packetfabric.com"
      apiVersion="2.0.0"
      endpoints={261}
      sdkMethods={341}
      schemas={452}
      parameters={1267}
      difficulty="Very Hard"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/packetfabric/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/packetfabric/openapi.yaml"
      developerDocumentation="docs.packetfabric.com/api/v2/"
    />
  );
}
  