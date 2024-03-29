import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function LocalizelyTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="localizely-typescript-sdk"
      metaDescription={`Localizely is a translation management system for agile teams that streamlines software localization.

We believe translation management for apps should be easy, so the team can focus on things that bring business value.

Developers can easily integrate translations into the apps build process, and managers can easily collaborate with translators.

We built Localizely from our experience by working on software projects with 2 to 100 languages.`}
      company="Localizely"
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/localizely/logo.png"
      companyKebabCase="localizely"
      clientNameCamelCase="localizely"
      homepage="localizely.com"
      lastUpdated={new Date("2024-03-29T22:42:59.082Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/localizely/favicon.png"
      // Missing contactUrl
      // Missing contactEmail
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/localizely/imagePreview.png"
      GettingStarted={GettingStarted}
      FirstRequest={FirstRequest}
      categories={["language","translation"]}
      methods={[
  {
    "url": "/v1/projects/{project_id}/files/upload",
    "method": "languageTranslationsUpload",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Upload API",
    "typeScriptTag": "uploadApi",
    "description": "Upload translations for a language",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID - Can be found on 'My projects' page",
        "example": "PROJECT_ID"
      },
      {
        "name": "branch",
        "schema": "string",
        "required": false,
        "description": "Name of the branch to upload file into. Only in case of activated branching feature."
      },
      {
        "name": "langCode",
        "schema": "string",
        "required": true,
        "description": "Language to upload, specified as language code. e.g. `en`, `en_GB` or `en-GB`",
        "example": "LANG_CODE"
      },
      {
        "name": "overwrite",
        "schema": "boolean",
        "required": false,
        "description": "If translation in given language should be overwritten with modified translation from uploading file.",
        "default": false
      },
      {
        "name": "reviewed",
        "schema": "boolean",
        "required": false,
        "description": "If uploading translations, that are added, should be marked as Reviewed. For uploading translations that are only modified it will have effect only if `overwrite` is set to `true`.",
        "default": false
      },
      {
        "name": "tagAdded",
        "schema": "array",
        "required": false,
        "description": "Optional list of tags to add to new translations from uploading file. <br><br>Multiple tags can be defined in a following way: `&tag_added_keys=NEW&tag_added_keys=NEW_SPRINT05`"
      },
      {
        "name": "tagUpdated",
        "schema": "array",
        "required": false,
        "description": "Optional list of tags to add to updated translations from uploading file. <br><br>Multiple tags can be defined in a following way: `&tag_updated_keys=UPDATED&tag_updated_keys=UPDATED_SPRINT05`"
      },
      {
        "name": "tagRemoved",
        "schema": "array",
        "required": false,
        "description": "Optional list of tags to add to removed translations from uploading file. <br><br>Multiple tags can be defined in a following way: `&tag_removed_keys=REMOVED&tag_removed_keys=REMOVED_SPRINT05`"
      },
      {
        "name": "file",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FILE"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK, file uploaded"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/projects/{project_id}/branches/{branch}",
    "method": "createNewBranch",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Branch API",
    "typeScriptTag": "branchApi",
    "description": "Create a new branch",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID - Can be found on 'My projects' page",
        "example": "PROJECT_ID"
      },
      {
        "name": "branch",
        "schema": "string",
        "required": true,
        "description": "Name of the branch to be created",
        "example": "BRANCH"
      },
      {
        "name": "sourceBranch",
        "schema": "string",
        "required": true,
        "description": "Name of the source branch from which new branch will be created",
        "example": "SOURCE_BRANCH"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK, created"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/projects/{project_id}/status",
    "method": "getProjectStatus",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Translation Status API",
    "typeScriptTag": "translationStatusApi",
    "description": "Get Translation Status for the project",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID - Can be found on 'My projects' page",
        "example": "PROJECT_ID"
      },
      {
        "name": "branch",
        "schema": "string",
        "required": false,
        "description": "Name of the branch to get translation status for. Only in case of activated branching feature."
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/projects/{project_id}/files/download",
    "method": "translationsDownload",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Download API",
    "typeScriptTag": "downloadApi",
    "description": "Download translations for a language in a specified file format",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID - Can be found on 'My projects' page",
        "example": "PROJECT_ID"
      },
      {
        "name": "branch",
        "schema": "string",
        "required": false,
        "description": "Name of the branch to download file from. Only in case of activated branching feature."
      },
      {
        "name": "langCodes",
        "schema": "string",
        "required": false,
        "description": "Language to download, specified as language code. e.g. `en`, `en_GB` or `en-GB`. For multiple languages use comma separator. If omitted, all languages are downloaded."
      },
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "File format",
        "example": "TYPE"
      },
      {
        "name": "javaPropertiesEncoding",
        "schema": "string",
        "required": false,
        "description": "(Only for Java .properties files download) Character encoding. Default is `latin_1`."
      },
      {
        "name": "includeTags",
        "schema": "array",
        "required": false,
        "description": "Optional list of tags to be downloaded. <br>If not set, all string keys will be considered for download. <br><br>Multiple tags can be defined in a following way: `&include_tags=ANDROID&include_tags=ANDROID_SPRINT05`."
      },
      {
        "name": "excludeTags",
        "schema": "array",
        "required": false,
        "description": "Optional list of tags to be excluded from download. <br>If not set, all string keys will be considered for download. <br><br> Multiple tags can be defined in a following way: `&exclude_tags=REMOVED&exclude_tags=REMOVED_SPRINT05`."
      },
      {
        "name": "exportEmptyAs",
        "schema": "string",
        "required": false,
        "description": "Optional. How you would like empty translations to be exported. Allowed values are `empty` to keep empty, `main` to replace with the main language value, or `skip` to omit.",
        "default": "empty"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK, file returned"
      },
      {
        "statusCode": "400",
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
      apiTitle="Localizely API"
      apiBaseUrl="https://api.localizely.com"
      apiVersion="1.2.1"
      endpoints={4}
      sdkMethods={4}
      schemas={6}
      parameters={22}
      difficulty="Very Easy"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/localizely/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/localizely/openapi.yaml"
      developerDocumentation="api.localizely.com/swagger-ui/index.html"
    />
  );
}
  