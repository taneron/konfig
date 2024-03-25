import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import Description from "./_description.mdx";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function XyteTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="xyte-typescript-sdk"
      metaDescription={`Xyte's Device Cloud is the first all-in-one servitization platform designed for device and hardware manufacturers to cloudify, operate, support, and commercialize their connected devices in a unified platform.

We enable OEMs across different industries to navigate their digital journey, transforming their devices into integrated business solutions that combine hardware, software and services. The only business and commerce platform designed specifically for IoT device manufacturers, our fully-federated Device Cloud empowers OEMs to manage the complete lifecycle of their devices, from the minute they leave the warehouse through aftermarket sales to end customers.

Our out-of-the-box applications for asset management, remote support, ecommerce and subscription management, financing, and a powerful and secure back office suite help OEMs boost revenue and market growth, optimize operational efficiencies, gain instant insights into equipment and device performance, and develop sustainable customer relationships.`}
      company="Xyte"
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/xyte/logo.png"
      companyKebabCase="xyte"
      clientNameCamelCase="xyte"
      homepage="xyte.io"
      lastUpdated={new Date("2024-03-25T20:47:15.965Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/xyte/favicon.png"
      // Missing contactUrl
      // Missing contactEmail
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/xyte/imagePreview.jpg"
      GettingStarted={GettingStarted}
      Description={Description}
      FirstRequest={FirstRequest}
      categories={["iot","asset_management","remote_support","ecommerce","subscription_management","hardware"]}
      methods={[
  {
    "url": "/v1/devices",
    "method": "createRegistration",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Device",
    "typeScriptTag": "device",
    "description": "Register Device",
    "parameters": [
      {
        "name": "mac",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "sn",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SN"
      },
      {
        "name": "cloud_id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "firmware_version",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FIRMWARE_VERSION",
        "default": "1.0.0"
      },
      {
        "name": "hardware_key",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "HARDWARE_KEY"
      },
      {
        "name": "name",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "details",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "sub_model",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "parent_id",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "2XX",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/devices/{parent_id}/children",
    "method": "getChildDevices",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Device",
    "typeScriptTag": "device",
    "description": "Get Child Devices",
    "parameters": [
      {
        "name": "parentId",
        "schema": "string",
        "required": true,
        "description": "The ID of the parent device",
        "example": "PARENT_ID"
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
    "url": "/v1/devices/{parent_id}/children",
    "method": "registerChildDevice",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Device",
    "typeScriptTag": "device",
    "description": "Register Child Device",
    "parameters": [
      {
        "name": "parentId",
        "schema": "string",
        "required": true,
        "description": "The ID of the parent device",
        "example": "PARENT_ID"
      },
      {
        "name": "firmware_version",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FIRMWARE_VERSION"
      },
      {
        "name": "model_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "MODEL_ID"
      },
      {
        "name": "sub_model",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "sn",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "mac",
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
        "name": "details",
        "schema": "object",
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/devices/{deviceId}",
    "method": "getInfo",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Device",
    "typeScriptTag": "device",
    "description": "Get Device Info",
    "parameters": [
      {
        "name": "deviceId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DEVICEID"
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
    "url": "/v1/devices/{deviceId}",
    "method": "updateDevice",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Device",
    "typeScriptTag": "device",
    "description": "Update Device",
    "parameters": [
      {
        "name": "deviceId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DEVICEID"
      },
      {
        "name": "firmware_version",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "space_version",
        "schema": "string",
        "description": ""
      },
      {
        "name": "config_version",
        "schema": "string",
        "description": ""
      },
      {
        "name": "details",
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
    "url": "/v1/devices/{deviceId}/cloud_settings",
    "method": "updateCloudSettings",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Device",
    "typeScriptTag": "device",
    "description": "Set Cloud Settings",
    "parameters": [
      {
        "name": "deviceId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DEVICEID"
      },
      {
        "name": "property",
        "schema": "string",
        "description": ""
      },
      {
        "name": "value",
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
      }
    ]
  },
  {
    "url": "/v1/devices/{deviceId}/telemetry",
    "method": "sendTelemetry",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Device",
    "typeScriptTag": "device",
    "description": "Send Telemetry",
    "parameters": [
      {
        "name": "deviceId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DEVICEID"
      },
      {
        "name": "status",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "STATUS",
        "default": "online"
      },
      {
        "name": "timestamp",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "telemetries",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "override",
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
    "url": "/v1/devices/{deviceId}/children/telemetries",
    "method": "sendChildTelemetries",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Device",
    "typeScriptTag": "device",
    "description": "Send Child Telemetries",
    "parameters": [
      {
        "name": "deviceId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DEVICEID"
      },
      {
        "name": "RAW_BODY",
        "schema": "object",
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
    "url": "/v1/devices/{deviceId}/config",
    "method": "getConfig",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Device",
    "typeScriptTag": "device",
    "description": "Get Config",
    "parameters": [
      {
        "name": "deviceId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DEVICEID"
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
    "url": "/v1/devices/{deviceId}/config",
    "method": "setConfig",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Device",
    "typeScriptTag": "device",
    "description": "Set Config",
    "parameters": [
      {
        "name": "deviceId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DEVICEID"
      },
      {
        "name": "RAW_BODY",
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
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/devices/{deviceId}/command",
    "method": "getCommand",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Device",
    "typeScriptTag": "device",
    "description": "Get Command",
    "parameters": [
      {
        "name": "deviceId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DEVICEID"
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
    "url": "/v1/devices/{deviceId}/command",
    "method": "sendCommand",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Device",
    "typeScriptTag": "device",
    "description": "Update Command",
    "parameters": [
      {
        "name": "deviceId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DEVICEID"
      },
      {
        "name": "status",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "STATUS",
        "default": "done"
      },
      {
        "name": "message",
        "schema": "string",
        "required": false,
        "description": ""
      },
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
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/devices/{deviceId}/dumps/{mime-type}/{filename}",
    "method": "sendDumpFile",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Device",
    "typeScriptTag": "device",
    "description": "Send Dump",
    "parameters": [
      {
        "name": "deviceId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DEVICEID"
      },
      {
        "name": "mimeType",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "MIME-TYPE",
        "default": "text/plain"
      },
      {
        "name": "filename",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FILENAME",
        "default": "filename"
      },
      {
        "name": "RAW_BODY",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "RAW_BODY"
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
    "url": "/v1/devices/{deviceId}/dumps/{dumpId}",
    "method": "appendDumpFile",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Device",
    "typeScriptTag": "device",
    "description": "Append Dump File",
    "parameters": [
      {
        "name": "deviceId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DEVICEID"
      },
      {
        "name": "dumpId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DUMPID"
      },
      {
        "name": "RAW_BODY",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "RAW_BODY"
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
    "url": "/v1/devices/{deviceId}/licenses",
    "method": "getLicenses",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Device",
    "typeScriptTag": "device",
    "description": "Get Licenses",
    "parameters": [
      {
        "name": "deviceId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DEVICEID"
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
    "url": "/v1/devices/{deviceId}/licenses",
    "method": "updateLicense",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Device",
    "typeScriptTag": "device",
    "description": "Update License",
    "parameters": [
      {
        "name": "deviceId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DEVICEID"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "state",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "STATE"
      },
      {
        "name": "error",
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
    "url": "/v1/devices/{deviceId}/license",
    "method": "getLicense",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Device",
    "typeScriptTag": "device",
    "description": "Get License",
    "parameters": [
      {
        "name": "deviceId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DEVICEID"
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
    "url": "/v1/devices/{deviceId}/space",
    "method": "getSpaceInfo",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Device",
    "typeScriptTag": "device",
    "description": "Get Space Info",
    "parameters": [
      {
        "name": "deviceId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DEVICEID"
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
    "url": "/v1/devices/{deviceId}/files/{fileUuid}",
    "method": "getFile",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Device",
    "typeScriptTag": "device",
    "description": "Get File",
    "parameters": [
      {
        "name": "deviceId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DEVICEID"
      },
      {
        "name": "fileUuid",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FILEUUID"
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
    "url": "/v1/devices/{deviceId}/files",
    "method": "getFiles",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Device",
    "typeScriptTag": "device",
    "description": "Get Files",
    "parameters": [
      {
        "name": "deviceId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DEVICEID"
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
    "url": "/v1/devices/{deviceId}/incidents",
    "method": "getIncidents",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Device",
    "typeScriptTag": "device",
    "description": "Get Incidents",
    "parameters": [
      {
        "name": "deviceId",
        "schema": "string",
        "required": true,
        "description": "Device's unique ID",
        "example": "DEVICEID"
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/devices/{deviceId}/incidents",
    "method": "openIncident",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Device",
    "typeScriptTag": "device",
    "description": "Open Incident",
    "parameters": [
      {
        "name": "deviceId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DEVICEID"
      },
      {
        "name": "title",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TITLE"
      },
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "priority",
        "schema": "string",
        "required": false,
        "description": "",
        "default": "3"
      },
      {
        "name": "issue",
        "schema": "string",
        "required": false,
        "description": "",
        "default": "Randomly generated tag"
      },
      {
        "name": "RAW_BODY",
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
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/devices/{deviceId}/incidents/{incidentId}",
    "method": "closeIncident",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Device",
    "typeScriptTag": "device",
    "description": "Close Incident",
    "parameters": [
      {
        "name": "deviceId",
        "schema": "string",
        "required": true,
        "description": "Unique Device ID",
        "example": "DEVICEID"
      },
      {
        "name": "incidentId",
        "schema": "string",
        "required": true,
        "description": "The unique id of the incident to close",
        "example": "INCIDENTID"
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
    "url": "/core/v1/partner/devices",
    "method": "listDevices",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Device",
    "typeScriptTag": "device",
    "description": "List Devices",
    "parameters": [
      {
        "name": "modelId",
        "schema": "string",
        "description": "Filter by model id"
      },
      {
        "name": "sn",
        "schema": "string",
        "description": "Filter by Serial Number"
      },
      {
        "name": "mac",
        "schema": "string",
        "description": "Filter by MAC address"
      },
      {
        "name": "page",
        "schema": "string",
        "description": "Pagination selector"
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
    "url": "/core/v1/partner/devices/{device_id}",
    "method": "deleteDevice",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Device",
    "typeScriptTag": "device",
    "description": "Delete Device",
    "parameters": [
      {
        "name": "deviceId",
        "schema": "string",
        "required": true,
        "description": "Device's unique ID",
        "example": "DEVICE_ID"
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
    "url": "/core/v1/partner/devices/{device_id}",
    "method": "getInfo",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Device",
    "typeScriptTag": "device",
    "description": "Get Device Info",
    "parameters": [
      {
        "name": "deviceId",
        "schema": "string",
        "required": true,
        "description": "Device's unique ID",
        "example": "DEVICE_ID"
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
    "url": "/core/v1/partner/devices/{device_id}/telemetries",
    "method": "getTelemetries",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Device",
    "typeScriptTag": "device",
    "description": "Get Device Telemetries",
    "parameters": [
      {
        "name": "deviceId",
        "schema": "string",
        "required": true,
        "description": "Unique Device ID",
        "example": "DEVICE_ID"
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
    "url": "/core/v1/partner/devices/{device_id}/config",
    "method": "getConfig",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Device",
    "typeScriptTag": "device",
    "description": "Get Device Configuration",
    "parameters": [
      {
        "name": "deviceId",
        "schema": "string",
        "required": true,
        "description": "Unique Device ID",
        "example": "DEVICE_ID"
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
    "url": "/core/v1/partner/devices/{device_id}/commands",
    "method": "listCommands",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Device",
    "typeScriptTag": "device",
    "description": "Get Device Commands",
    "parameters": [
      {
        "name": "deviceId",
        "schema": "string",
        "required": true,
        "description": "Unique Device ID",
        "example": "DEVICE_ID"
      },
      {
        "name": "status",
        "schema": "string",
        "description": "Filter by command status: scheduled, pending, done, failed, aborted, in_progress"
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
    "url": "/core/v1/partner/devices/{device_id}/history",
    "method": "getStateHistory",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Device",
    "typeScriptTag": "device",
    "description": "Get Device State History",
    "parameters": [
      {
        "name": "deviceId",
        "schema": "string",
        "required": true,
        "description": "Unique Device ID",
        "example": "DEVICE_ID"
      },
      {
        "name": "status",
        "schema": "string",
        "description": "Filter by state: online, offline, unavailable, error"
      },
      {
        "name": "from",
        "schema": "string",
        "description": "Query range",
        "default": "beginning of current month"
      },
      {
        "name": "to",
        "schema": "string",
        "description": "Query range",
        "default": "Current time"
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "Pagination (500 records per page)"
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
    "url": "/core/v1/partner/devices/histories",
    "method": "getAllDeviceStateHistories",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Device",
    "typeScriptTag": "device",
    "description": "Get All Device's State History",
    "parameters": [
      {
        "name": "status",
        "schema": "string",
        "description": "Filter by state: online, offline, unavailable, error"
      },
      {
        "name": "from",
        "schema": "string",
        "description": "Query range",
        "default": "beginning of current month"
      },
      {
        "name": "to",
        "schema": "string",
        "description": "Query range",
        "default": "Current time"
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "Pagination (500 records per page)"
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
    "url": "/core/v1/partner/tickets",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Ticket",
    "typeScriptTag": "ticket",
    "description": "List Tickets",
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
  },
  {
    "url": "/core/v1/partner/tickets/{ticket_id} (COPY)",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Ticket",
    "typeScriptTag": "ticket",
    "description": "Get Ticket",
    "parameters": [
      {
        "name": "ticketId",
        "schema": "string",
        "required": true,
        "description": "Unique ticket ID",
        "example": "TICKET_ID"
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
    "url": "/core/v1/partner/tickets/{ticket_id}",
    "method": "updateTicketById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Ticket",
    "typeScriptTag": "ticket",
    "description": "Update Ticket",
    "parameters": [
      {
        "name": "ticketId",
        "schema": "string",
        "required": true,
        "description": "Unique ticket ID",
        "example": "TICKET_ID"
      },
      {
        "name": "title",
        "schema": "string",
        "description": ""
      },
      {
        "name": "description",
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
      }
    ]
  },
  {
    "url": "/core/v1/partner/tickets/{ticket_id}/resolved",
    "method": "close",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Ticket",
    "typeScriptTag": "ticket",
    "description": "Close Ticket",
    "parameters": [
      {
        "name": "ticketId",
        "schema": "string",
        "required": true,
        "description": "Unique ticket ID",
        "example": "TICKET_ID"
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
      }
    ]
  },
  {
    "url": "/core/v1/partner/tickets/{ticket_id}/message",
    "method": "addComment",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Ticket",
    "typeScriptTag": "ticket",
    "description": "Add Comment",
    "parameters": [
      {
        "name": "ticketId",
        "schema": "string",
        "required": true,
        "description": "Unique ticket ID",
        "example": "TICKET_ID"
      },
      {
        "name": "message",
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
      }
    ]
  }
]
    }
      language="TypeScript"
      apiTitle="Testing API"
      apiBaseUrl="{url}"
      apiVersion="1"
      endpoints={29}
      sdkMethods={36}
      schemas={104}
      parameters={109}
      difficulty="Easy"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/xyte/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/xyte/openapi.yaml"
      developerDocumentation="dev.xyte.io/reference/api-endpoints-1"
    />
  );
}
  