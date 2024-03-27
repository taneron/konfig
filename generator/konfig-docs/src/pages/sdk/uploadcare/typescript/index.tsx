import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function UploadcareTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="uploadcare-typescript-sdk"
      metaDescription={`Uploadcare is file management platform and a CDN for user-generated content. It is a robust file API for uploading, managing, processing, rendering, optimizing, and delivering users' content.`}
      company="Uploadcare"
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/uploadcare/logo.png"
      companyKebabCase="uploadcare"
      clientNameCamelCase="uploadcare"
      homepage="uploadcare.com/"
      lastUpdated={new Date("2024-03-27T22:25:13.064Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/uploadcare/favicon.png"
      // Missing contactUrl
      contactEmail="help@uploadcare.com"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/uploadcare/imagePreview.png"
      GettingStarted={GettingStarted}
      FirstRequest={FirstRequest}
      categories={["file_sharing","cdn","developer_tools","file_management","digital_media","content_delivery_network"]}
      methods={[
  {
    "url": "/<presigned-url-x>",
    "method": "individualFilePartsPut",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Upload",
    "typeScriptTag": "upload",
    "description": "Upload individual file parts",
    "parameters": [],
    "responses": [
      {
        "statusCode": "2XX",
        "description": "A file part has been uploaded successfully"
      }
    ]
  },
  {
    "url": "/base",
    "method": "directUpload",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Upload",
    "typeScriptTag": "upload",
    "description": "Direct uploads",
    "parameters": [
      {
        "name": "UPLOADCARE_PUB_KEY",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "caa9d29da887ee88ffe6"
      },
      {
        "name": "UPLOADCARE_STORE",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "1",
        "default": "auto"
      },
      {
        "name": "{filename}",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "metadata[{key}]",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "#/components/examples/metadataValue/value"
      },
      {
        "name": "signature",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "04b29480233f4def5c875875b6bdc3b1"
      },
      {
        "name": "expire",
        "schema": "number",
        "required": false,
        "description": "",
        "example": 1454902434
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "JSON object where the key is the file name of the uploaded file and\nthe value is the unique ID of the file on our systems.\n"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "413",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/multipart/start",
    "method": "startMultipart",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Upload",
    "typeScriptTag": "upload",
    "description": "Start multipart upload",
    "parameters": [
      {
        "name": "UPLOADCARE_PUB_KEY",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "caa9d29da887ee88ffe6"
      },
      {
        "name": "UPLOADCARE_STORE",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "1",
        "default": "auto"
      },
      {
        "name": "filename",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "myfile.mp4"
      },
      {
        "name": "size",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 27796904
      },
      {
        "name": "part_size",
        "schema": "integer",
        "required": false,
        "description": "",
        "example": 10485760,
        "default": 5242880
      },
      {
        "name": "content_type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "video/mp4"
      },
      {
        "name": "metadata[{key}]",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "#/components/examples/metadataValue/value"
      },
      {
        "name": "signature",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "04b29480233f4def5c875875b6bdc3b1"
      },
      {
        "name": "expire",
        "schema": "number",
        "required": false,
        "description": "",
        "example": 1454902434
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/multipart/complete",
    "method": "completeMultipartUpload",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Upload",
    "typeScriptTag": "upload",
    "description": "Complete multipart upload",
    "parameters": [
      {
        "name": "UPLOADCARE_PUB_KEY",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "caa9d29da887ee88ffe6"
      },
      {
        "name": "uuid",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "67947755-1584-4e3f-902b-d4e2bf76a841"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Information about an uploaded file."
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/from_url",
    "method": "fromUrlFiles",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Upload",
    "typeScriptTag": "upload",
    "description": "Upload files from URLs",
    "parameters": [
      {
        "name": "pub_key",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "caa9d29da887ee88ffe6"
      },
      {
        "name": "source_url",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "https://source.unsplash.com/featured"
      },
      {
        "name": "store",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "1",
        "default": "auto"
      },
      {
        "name": "filename",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "googlelogo_color_272x92dp.png"
      },
      {
        "name": "check_URL_duplicates",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "1",
        "default": "0"
      },
      {
        "name": "save_URL_duplicates",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "1"
      },
      {
        "name": "metadata[{key}]",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "#/components/examples/metadataValue/value"
      },
      {
        "name": "signature",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "04b29480233f4def5c875875b6bdc3b1"
      },
      {
        "name": "expire",
        "schema": "number",
        "required": false,
        "description": "",
        "example": 1454902434
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/from_url/status",
    "method": "urlStatusGet",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Upload",
    "typeScriptTag": "upload",
    "description": "Check the status of a task to fetch/upload a file from a URL",
    "parameters": [
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "Token returned by the `/from_url/` endpoint that identifies a request to fetch/upload a file from a URL.",
        "example": "945ebb27-1fd6-46c6-a859-b9893712d650"
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
    "url": "/info",
    "method": "fileInfo",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Upload",
    "typeScriptTag": "upload",
    "description": "Get information about an uploaded file",
    "parameters": [
      {
        "name": "pubKey",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "YOUR_PUBLIC_KEY"
      },
      {
        "name": "fileId",
        "schema": "string",
        "required": true,
        "description": "File's unique ID.",
        "example": "67947755-1584-4e3f-902b-d4e2bf76a841"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Information about an uploaded file."
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/group",
    "method": "createFileGroup",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Groups",
    "typeScriptTag": "groups",
    "description": "Create a file group",
    "parameters": [
      {
        "name": "pub_key",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "caa9d29da887ee88ffe6"
      },
      {
        "name": "files[]",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "signature",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "04b29480233f4def5c875875b6bdc3b1"
      },
      {
        "name": "expire",
        "schema": "number",
        "required": false,
        "description": "",
        "example": 1454902434
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "File group information object."
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      }
    ]
  },
  {
    "url": "/group/info",
    "method": "getInfo",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Groups",
    "typeScriptTag": "groups",
    "description": "Get information about a file group",
    "parameters": [
      {
        "name": "pubKey",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "YOUR_PUBLIC_KEY"
      },
      {
        "name": "groupId",
        "schema": "string",
        "required": true,
        "description": "Group's unique ID. Group IDs look like `UUID~N`, where the `~N` part reflects the number of the files in the group.\n",
        "example": "d52d7136-a2e5-4338-9f45-affbf83b857d~2"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "File group information object."
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "403",
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
      apiTitle="Upload API Reference"
      apiBaseUrl="https://upload.uploadcare.com"
      apiVersion="2024-02-12"
      endpoints={9}
      sdkMethods={9}
      schemas={106}
      parameters={35}
      difficulty="Easy"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/uploadcare/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/uploadcare/openapi.yaml"
      developerDocumentation="uploadcare.com/api-refs/upload-api/"
    />
  );
}
  