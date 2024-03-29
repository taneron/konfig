import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function ModrinthTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="modrinth-typescript-sdk"
      metaDescription={`Modrinth is a modding platform providing gamers a site where they can discover modifications for their favorite games and developers a site where they can upload their projects and share them to the world.`}
      company="Modrinth"
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/modrinth/logo.png"
      companyKebabCase="modrinth"
      clientNameCamelCase="modrinth"
      homepage="modrinth.com/"
      lastUpdated={new Date("2024-03-29T19:02:49.632Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/modrinth/favicon.png"
      contactUrl="https://support.modrinth.com"
      contactEmail="support@modrinth.com"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/modrinth/imagePreview.webp"
      GettingStarted={GettingStarted}
      FirstRequest={FirstRequest}
      categories={["gaming","platform","modding","development_platforms","communities","marketplace"]}
      methods={[
  {
    "url": "/search",
    "method": "find",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "projects",
    "typeScriptTag": "projects",
    "description": "Search projects",
    "parameters": [
      {
        "name": "query",
        "schema": "string",
        "description": "The query to search for",
        "example": "gravestones"
      },
      {
        "name": "facets",
        "schema": "string",
        "description": "Facets are an essential concept for understanding how to filter out results.\n\nThese are the most commonly used facet types:\n- `project_type`\n- `categories` (loaders are lumped in with categories in search)\n- `versions`\n- `client_side`\n- `server_side`\n- `open_source`\n\nSeveral others are also available for use, though these should not be used outside very specific use cases.\n- `title`\n- `author`\n- `follows`\n- `project_id`\n- `license`\n- `downloads`\n- `color`\n- `created_timestamp`\n- `modified_timestamp`\n\nIn order to then use these facets, you need a value to filter by, as well as an operation to perform on this value.\nThe most common operation is `:` (same as `=`), though you can also use `!=`, `>=`, `>`, `<=`, and `<`.\nJoin together the type, operation, and value, and you've got your string.\n```\n{type} {operation} {value}\n```\n\nExamples:\n```\ncategories = adventure\nversions != 1.20.1\ndownloads <= 100\n```\n\nYou then join these strings together in arrays to signal `AND` and `OR` operators.\n\n##### OR\nAll elements in a single array are considered to be joined by OR statements.  \nFor example, the search `[[\"versions:1.16.5\", \"versions:1.17.1\"]]` translates to `Projects that support 1.16.5 OR 1.17.1`.\n\n##### AND\nSeparate arrays are considered to be joined by AND statements.  \nFor example, the search `[[\"versions:1.16.5\"], [\"project_type:modpack\"]]` translates to `Projects that support 1.16.5 AND are modpacks`.\n",
        "example": "[[\"categories:forge\"],[\"versions:1.17.1\"],[\"project_type:mod\"],[\"license:mit\"]]"
      },
      {
        "name": "index",
        "schema": "string",
        "description": "The sorting method used for sorting search results",
        "example": "downloads",
        "default": "relevance"
      },
      {
        "name": "offset",
        "schema": "integer",
        "description": "The offset into the search. Skips this number of results",
        "example": 20,
        "default": 0
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The number of results returned by the search",
        "example": 20,
        "default": 10
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
    "url": "/project/{id|slug}",
    "method": "removeBySlug",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "projects",
    "typeScriptTag": "projects",
    "description": "Delete a project",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "Expected response to a valid request"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      }
    ]
  },
  {
    "url": "/project/{id|slug}",
    "method": "getProjectByIdOrSlug",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "projects",
    "typeScriptTag": "projects",
    "description": "Get a project",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "The requested item(https://docs.modrinth.com/ were not found or no authorization to access the requested item(https://docs.modrinth.com/"
      }
    ]
  },
  {
    "url": "/project/{id|slug}",
    "method": "updateProjectByIdOrSlug",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "projects",
    "typeScriptTag": "projects",
    "description": "Modify a project",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "Expected response to a valid request"
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "The requested item(https://docs.modrinth.com/ were not found or no authorization to access the requested item(https://docs.modrinth.com/"
      }
    ]
  },
  {
    "url": "/projects",
    "method": "listProjects",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "projects",
    "typeScriptTag": "projects",
    "description": "Get multiple projects",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/projects",
    "method": "bulkEdit",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "projects",
    "typeScriptTag": "projects",
    "description": "Bulk-edit multiple projects",
    "parameters": [
      {
        "name": "categories",
        "schema": "array",
        "description": ""
      },
      {
        "name": "add_categories",
        "schema": "array",
        "description": ""
      },
      {
        "name": "remove_categories",
        "schema": "array",
        "description": ""
      },
      {
        "name": "additional_categories",
        "schema": "array",
        "description": ""
      },
      {
        "name": "add_additional_categories",
        "schema": "array",
        "description": ""
      },
      {
        "name": "remove_additional_categories",
        "schema": "array",
        "description": ""
      },
      {
        "name": "donation_urls",
        "schema": "array",
        "description": ""
      },
      {
        "name": "add_donation_urls",
        "schema": "array",
        "description": ""
      },
      {
        "name": "remove_donation_urls",
        "schema": "array",
        "description": ""
      },
      {
        "name": "issues_url",
        "schema": "string",
        "description": "",
        "example": "https://github.com/my_user/my_project/issues"
      },
      {
        "name": "source_url",
        "schema": "string",
        "description": "",
        "example": "https://github.com/my_user/my_project"
      },
      {
        "name": "wiki_url",
        "schema": "string",
        "description": "",
        "example": "https://github.com/my_user/my_project/wiki"
      },
      {
        "name": "discord_url",
        "schema": "string",
        "description": "",
        "example": "https://discord.gg/AaBbCcDd"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Expected response to a valid request"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      }
    ]
  },
  {
    "url": "/projects_random",
    "method": "getRandomList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "projects",
    "typeScriptTag": "projects",
    "description": "Get a list of random projects",
    "parameters": [
      {
        "name": "count",
        "schema": "integer",
        "required": true,
        "description": "The number of random projects to return",
        "example": 70
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
    "url": "/project",
    "method": "createNewProject",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "projects",
    "typeScriptTag": "projects",
    "description": "Create a project",
    "parameters": [
      {
        "name": "data",
        "schema": "undefined",
        "required": true,
        "description": ""
      },
      {
        "name": "icon",
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
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      }
    ]
  },
  {
    "url": "/project/{id|slug}/icon",
    "method": "deleteProjectIcon",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "projects",
    "typeScriptTag": "projects",
    "description": "Delete project's icon",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "Expected response to a valid request"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      }
    ]
  },
  {
    "url": "/project/{id|slug}/icon",
    "method": "changeProjectIcon",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "projects",
    "typeScriptTag": "projects",
    "description": "Change project's icon",
    "parameters": [
      {
        "name": "ext",
        "schema": "string",
        "required": true,
        "description": "Image extension",
        "example": "EXT"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Expected response to a valid request"
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/project/{id|slug}/check",
    "method": "checkValidity",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "projects",
    "typeScriptTag": "projects",
    "description": "Check project slug/ID validity",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "The requested item(https://docs.modrinth.com/ were not found or no authorization to access the requested item(https://docs.modrinth.com/"
      }
    ]
  },
  {
    "url": "/project/{id|slug}/gallery",
    "method": "deleteGalleryImage",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "projects",
    "typeScriptTag": "projects",
    "description": "Delete a gallery image",
    "parameters": [
      {
        "name": "url",
        "schema": "string",
        "required": true,
        "description": "URL link of the image to delete",
        "example": "URL"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Expected response to a valid request"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      }
    ]
  },
  {
    "url": "/project/{id|slug}/gallery",
    "method": "modifyGalleryImage",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "projects",
    "typeScriptTag": "projects",
    "description": "Modify a gallery image",
    "parameters": [
      {
        "name": "url",
        "schema": "string",
        "required": true,
        "description": "URL link of the image to modify",
        "example": "URL"
      },
      {
        "name": "featured",
        "schema": "boolean",
        "description": "Whether the image is featured"
      },
      {
        "name": "title",
        "schema": "string",
        "description": "New title of the image"
      },
      {
        "name": "description",
        "schema": "string",
        "description": "New description of the image"
      },
      {
        "name": "ordering",
        "schema": "integer",
        "description": "New ordering of the image"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Expected response to a valid request"
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "The requested item(https://docs.modrinth.com/ were not found or no authorization to access the requested item(https://docs.modrinth.com/"
      }
    ]
  },
  {
    "url": "/project/{id|slug}/gallery",
    "method": "addGalleryImage",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "projects",
    "typeScriptTag": "projects",
    "description": "Add a gallery image",
    "parameters": [
      {
        "name": "ext",
        "schema": "string",
        "required": true,
        "description": "Image extension",
        "example": "EXT"
      },
      {
        "name": "featured",
        "schema": "boolean",
        "required": true,
        "description": "Whether an image is featured",
        "example": true
      },
      {
        "name": "title",
        "schema": "string",
        "description": "Title of the image"
      },
      {
        "name": "description",
        "schema": "string",
        "description": "Description of the image"
      },
      {
        "name": "ordering",
        "schema": "integer",
        "description": "Ordering of the image"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Expected response to a valid request"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "The requested item(https://docs.modrinth.com/ were not found or no authorization to access the requested item(https://docs.modrinth.com/"
      }
    ]
  },
  {
    "url": "/project/{id|slug}/dependencies",
    "method": "getDependencies",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "projects",
    "typeScriptTag": "projects",
    "description": "Get all of a project's dependencies",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "The requested item(https://docs.modrinth.com/ were not found or no authorization to access the requested item(https://docs.modrinth.com/"
      }
    ]
  },
  {
    "url": "/project/{id|slug}/follow",
    "method": "unfollowProject",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "projects",
    "typeScriptTag": "projects",
    "description": "Unfollow a project",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "Expected response to a valid request"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      }
    ]
  },
  {
    "url": "/project/{id|slug}/follow",
    "method": "followProjectBySlug",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "projects",
    "typeScriptTag": "projects",
    "description": "Follow a project",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "Expected response to a valid request"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      }
    ]
  },
  {
    "url": "/project/{id|slug}/schedule",
    "method": "scheduleProject",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "projects",
    "typeScriptTag": "projects",
    "description": "Schedule a project",
    "parameters": [
      {
        "name": "time",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "2023-02-05T19:39:55.551839Z"
      },
      {
        "name": "requested_status",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "REQUESTED_STATUS"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Expected response to a valid request"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      }
    ]
  },
  {
    "url": "/project/{id|slug}/version",
    "method": "listProjectVersions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "versions",
    "typeScriptTag": "versions",
    "description": "List project's versions",
    "parameters": [
      {
        "name": "loaders",
        "schema": "string",
        "required": false,
        "description": "The types of loaders to filter for",
        "example": "[\"fabric\"]"
      },
      {
        "name": "gameVersions",
        "schema": "string",
        "required": false,
        "description": "The game versions to filter for",
        "example": "[\"1.18.1\"]"
      },
      {
        "name": "featured",
        "schema": "boolean",
        "required": false,
        "description": "Allows to filter for featured or non-featured versions only"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "The requested item(https://docs.modrinth.com/ were not found or no authorization to access the requested item(https://docs.modrinth.com/"
      }
    ]
  },
  {
    "url": "/version/{id}",
    "method": "deleteVersionById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "versions",
    "typeScriptTag": "versions",
    "description": "Delete a version",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "Expected response to a valid request"
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "The requested item(https://docs.modrinth.com/ were not found or no authorization to access the requested item(https://docs.modrinth.com/"
      }
    ]
  },
  {
    "url": "/version/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "versions",
    "typeScriptTag": "versions",
    "description": "Get a version",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "The requested item(https://docs.modrinth.com/ were not found or no authorization to access the requested item(https://docs.modrinth.com/"
      }
    ]
  },
  {
    "url": "/version/{id}",
    "method": "modifyVersionById",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "versions",
    "typeScriptTag": "versions",
    "description": "Modify a version",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "Expected response to a valid request"
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "The requested item(https://docs.modrinth.com/ were not found or no authorization to access the requested item(https://docs.modrinth.com/"
      }
    ]
  },
  {
    "url": "/project/{id|slug}/version/{id|number}",
    "method": "getByVersionIdOrNumber",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "versions",
    "typeScriptTag": "versions",
    "description": "Get a version given a version number or ID",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "The requested item(https://docs.modrinth.com/ were not found or no authorization to access the requested item(https://docs.modrinth.com/"
      }
    ]
  },
  {
    "url": "/version",
    "method": "createNewVersion",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "versions",
    "typeScriptTag": "versions",
    "description": "Create a version",
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
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      }
    ]
  },
  {
    "url": "/version/{id}/schedule",
    "method": "scheduleVersion",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "versions",
    "typeScriptTag": "versions",
    "description": "Schedule a version",
    "parameters": [
      {
        "name": "time",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "2023-02-05T19:39:55.551839Z"
      },
      {
        "name": "requested_status",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "REQUESTED_STATUS"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Expected response to a valid request"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      }
    ]
  },
  {
    "url": "/versions",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "versions",
    "typeScriptTag": "versions",
    "description": "Get multiple versions",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/version/{id}/file",
    "method": "addFilesToVersion",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "versions",
    "typeScriptTag": "versions",
    "description": "Add files to version",
    "parameters": [
      {
        "name": "data",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Expected response to a valid request"
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "The requested item(https://docs.modrinth.com/ were not found or no authorization to access the requested item(https://docs.modrinth.com/"
      }
    ]
  },
  {
    "url": "/version_file/{hash}",
    "method": "deleteByHash",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "version-files",
    "typeScriptTag": "versionFiles",
    "description": "Delete a file from its hash",
    "parameters": [
      {
        "name": "versionId",
        "schema": "string",
        "required": false,
        "description": "Version ID to delete the version from, if multiple files of the same hash exist",
        "example": [
          "IIJJKKLL"
        ]
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Expected response to a valid request"
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "The requested item(https://docs.modrinth.com/ were not found or no authorization to access the requested item(https://docs.modrinth.com/"
      }
    ]
  },
  {
    "url": "/version_file/{hash}",
    "method": "getVersionFromHash",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "version-files",
    "typeScriptTag": "versionFiles",
    "description": "Get version from hash",
    "parameters": [
      {
        "name": "multiple",
        "schema": "boolean",
        "required": false,
        "description": "Whether to return multiple results when looking for this hash",
        "default": false
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "The requested item(https://docs.modrinth.com/ were not found or no authorization to access the requested item(https://docs.modrinth.com/"
      }
    ]
  },
  {
    "url": "/version_file/{hash}/update",
    "method": "updateFromHashes",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "version-files",
    "typeScriptTag": "versionFiles",
    "description": "Latest version of a project from a hash, loader(https://docs.modrinth.com/, and game version(https://docs.modrinth.com/",
    "parameters": [
      {
        "name": "loaders",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "game_versions",
        "schema": "array",
        "required": true,
        "description": "",
        "example": [
          "1.18",
          "1.18.1"
        ]
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Request was invalid, see given error"
      },
      {
        "statusCode": "404",
        "description": "The requested item(https://docs.modrinth.com/ were not found or no authorization to access the requested item(https://docs.modrinth.com/"
      }
    ]
  },
  {
    "url": "/version_files",
    "method": "getVersionsFromHashes",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "version-files",
    "typeScriptTag": "versionFiles",
    "description": "Get versions from hashes",
    "parameters": [
      {
        "name": "hashes",
        "schema": "array",
        "required": true,
        "description": "",
        "example": [
          "ea0f38408102e4d2efd53c2cc11b88b711996b48d8922f76ea6abf731219c5bd1efe39ddf9cce77c54d49a62ff10fb685c00d2e4c524ab99d20f6296677ab2c4",
          "925a5c4899affa4098d997dfa4a4cb52c636d539e94bc489d1fa034218cb96819a70eb8b01647a39316a59fcfe223c1a8c05ed2e2ae5f4c1e75fa48f6af1c960"
        ]
      },
      {
        "name": "algorithm",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "sha512"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A map from hashes to versions"
      },
      {
        "statusCode": "400",
        "description": "Request was invalid, see given error"
      }
    ]
  },
  {
    "url": "/version_files/update",
    "method": "updateMultipleVersions",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "version-files",
    "typeScriptTag": "versionFiles",
    "description": "Latest versions of multiple project from hashes, loader(https://docs.modrinth.com/, and game version(https://docs.modrinth.com/",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "A map from hashes to versions"
      },
      {
        "statusCode": "400",
        "description": "Request was invalid, see given error"
      }
    ]
  },
  {
    "url": "/user/{id|username}",
    "method": "getUserByIdOrUsername",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "users",
    "typeScriptTag": "users",
    "description": "Get a user",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "The requested item(https://docs.modrinth.com/ were not found or no authorization to access the requested item(https://docs.modrinth.com/"
      }
    ]
  },
  {
    "url": "/user/{id|username}",
    "method": "modifyUserPatch",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "users",
    "typeScriptTag": "users",
    "description": "Modify a user",
    "parameters": [
      {
        "name": "username",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "my_user"
      },
      {
        "name": "name",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "My User"
      },
      {
        "name": "email",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "bio",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "My short biography"
      },
      {
        "name": "payout_data",
        "schema": "object",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Expected response to a valid request"
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "The requested item(https://docs.modrinth.com/ were not found or no authorization to access the requested item(https://docs.modrinth.com/"
      }
    ]
  },
  {
    "url": "/user",
    "method": "getUserFromAuthHeader",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "users",
    "typeScriptTag": "users",
    "description": "Get user from authorization header",
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
    "url": "/users",
    "method": "getMultipleUsers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "users",
    "typeScriptTag": "users",
    "description": "Get multiple users",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/user/{id|username}/icon",
    "method": "changeAvatar",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "users",
    "typeScriptTag": "users",
    "description": "Change user's avatar",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "Expected response to a valid request"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "The requested item(https://docs.modrinth.com/ were not found or no authorization to access the requested item(https://docs.modrinth.com/"
      }
    ]
  },
  {
    "url": "/user/{id|username}/projects",
    "method": "getUserProjects",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "users",
    "typeScriptTag": "users",
    "description": "Get user's projects",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "The requested item(https://docs.modrinth.com/ were not found or no authorization to access the requested item(https://docs.modrinth.com/"
      }
    ]
  },
  {
    "url": "/user/{id|username}/follows",
    "method": "getFollowedProjects",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "users",
    "typeScriptTag": "users",
    "description": "Get user's followed projects",
    "parameters": [],
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
        "description": "The requested item(https://docs.modrinth.com/ were not found or no authorization to access the requested item(https://docs.modrinth.com/"
      }
    ]
  },
  {
    "url": "/user/{id|username}/payouts",
    "method": "getPayouts",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "users",
    "typeScriptTag": "users",
    "description": "Get user's payout history",
    "parameters": [],
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
        "description": "The requested item(https://docs.modrinth.com/ were not found or no authorization to access the requested item(https://docs.modrinth.com/"
      }
    ]
  },
  {
    "url": "/user/{id|username}/payouts",
    "method": "withdrawPayoutBalanceToPaypal",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "users",
    "typeScriptTag": "users",
    "description": "Withdraw payout balance to PayPal or Venmo",
    "parameters": [
      {
        "name": "amount",
        "schema": "integer",
        "required": true,
        "description": "Amount to withdraw",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Expected response to a valid request"
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "The requested item(https://docs.modrinth.com/ were not found or no authorization to access the requested item(https://docs.modrinth.com/"
      }
    ]
  },
  {
    "url": "/user/{id|username}/notifications",
    "method": "getUserNotifications",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "notifications",
    "typeScriptTag": "notifications",
    "description": "Get user's notifications",
    "parameters": [],
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
        "description": "The requested item(https://docs.modrinth.com/ were not found or no authorization to access the requested item(https://docs.modrinth.com/"
      }
    ]
  },
  {
    "url": "/notification/{id}",
    "method": "deleteById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "notifications",
    "typeScriptTag": "notifications",
    "description": "Delete notification",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "Expected response to a valid request"
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "The requested item(https://docs.modrinth.com/ were not found or no authorization to access the requested item(https://docs.modrinth.com/"
      }
    ]
  },
  {
    "url": "/notification/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "notifications",
    "typeScriptTag": "notifications",
    "description": "Get notification from ID",
    "parameters": [],
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
        "description": "The requested item(https://docs.modrinth.com/ were not found or no authorization to access the requested item(https://docs.modrinth.com/"
      }
    ]
  },
  {
    "url": "/notification/{id}",
    "method": "markAsRead",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "notifications",
    "typeScriptTag": "notifications",
    "description": "Mark notification as read",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "Expected response to a valid request"
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "The requested item(https://docs.modrinth.com/ were not found or no authorization to access the requested item(https://docs.modrinth.com/"
      }
    ]
  },
  {
    "url": "/notifications",
    "method": "deleteMultiple",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "notifications",
    "typeScriptTag": "notifications",
    "description": "Delete multiple notifications",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "Expected response to a valid request"
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "The requested item(https://docs.modrinth.com/ were not found or no authorization to access the requested item(https://docs.modrinth.com/"
      }
    ]
  },
  {
    "url": "/notifications",
    "method": "getMultiple",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "notifications",
    "typeScriptTag": "notifications",
    "description": "Get multiple notifications",
    "parameters": [],
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
        "description": "The requested item(https://docs.modrinth.com/ were not found or no authorization to access the requested item(https://docs.modrinth.com/"
      }
    ]
  },
  {
    "url": "/notifications",
    "method": "markAsRead",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "notifications",
    "typeScriptTag": "notifications",
    "description": "Mark multiple notifications as read",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "Expected response to a valid request"
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "The requested item(https://docs.modrinth.com/ were not found or no authorization to access the requested item(https://docs.modrinth.com/"
      }
    ]
  },
  {
    "url": "/report",
    "method": "getOpenReports",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "threads",
    "typeScriptTag": "threads",
    "description": "Get your open reports",
    "parameters": [
      {
        "name": "count",
        "schema": "integer",
        "description": "",
        "example": 100
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
        "description": "The requested item(https://docs.modrinth.com/ were not found or no authorization to access the requested item(https://docs.modrinth.com/"
      }
    ]
  },
  {
    "url": "/report",
    "method": "reportProjectUserVersion",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "threads",
    "typeScriptTag": "threads",
    "description": "Report a project, user, or version",
    "parameters": [
      {
        "name": "report_type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "copyright"
      },
      {
        "name": "item_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EEFFGGHH"
      },
      {
        "name": "item_type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "project"
      },
      {
        "name": "body",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "This is a reupload of my mod, AABBCCDD!"
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
        "statusCode": "401",
        "description": ""
      }
    ]
  },
  {
    "url": "/report/{id}",
    "method": "getReportById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "threads",
    "typeScriptTag": "threads",
    "description": "Get report from ID",
    "parameters": [],
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
        "description": "The requested item(https://docs.modrinth.com/ were not found or no authorization to access the requested item(https://docs.modrinth.com/"
      }
    ]
  },
  {
    "url": "/report/{id}",
    "method": "modifyReport",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "threads",
    "typeScriptTag": "threads",
    "description": "Modify a report",
    "parameters": [
      {
        "name": "body",
        "schema": "string",
        "description": "",
        "example": "This is the meat and potatoes of the report!"
      },
      {
        "name": "closed",
        "schema": "boolean",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Expected response to a valid request"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "The requested item(https://docs.modrinth.com/ were not found or no authorization to access the requested item(https://docs.modrinth.com/"
      }
    ]
  },
  {
    "url": "/reports",
    "method": "getMultipleReports",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "threads",
    "typeScriptTag": "threads",
    "description": "Get multiple reports",
    "parameters": [],
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
        "description": "The requested item(https://docs.modrinth.com/ were not found or no authorization to access the requested item(https://docs.modrinth.com/"
      }
    ]
  },
  {
    "url": "/thread/{id}",
    "method": "getThreadById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "threads",
    "typeScriptTag": "threads",
    "description": "Get a thread",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "The requested item(https://docs.modrinth.com/ were not found or no authorization to access the requested item(https://docs.modrinth.com/"
      }
    ]
  },
  {
    "url": "/thread/{id}",
    "method": "sendMessage",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "threads",
    "typeScriptTag": "threads",
    "description": "Send a text message to a thread",
    "parameters": [
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "status_change"
      },
      {
        "name": "body",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "This is the text of the message."
      },
      {
        "name": "private",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": false
      },
      {
        "name": "replying_to",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "SSTTUUVV"
      },
      {
        "name": "old_status",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "processing"
      },
      {
        "name": "new_status",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "approved"
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
        "description": "The requested item(https://docs.modrinth.com/ were not found or no authorization to access the requested item(https://docs.modrinth.com/"
      }
    ]
  },
  {
    "url": "/threads",
    "method": "listThreads",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "threads",
    "typeScriptTag": "threads",
    "description": "Get multiple threads",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "The requested item(https://docs.modrinth.com/ were not found or no authorization to access the requested item(https://docs.modrinth.com/"
      }
    ]
  },
  {
    "url": "/message/{id}",
    "method": "deleteThreadMessage",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "threads",
    "typeScriptTag": "threads",
    "description": "Delete a thread message",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "Expected response to a valid request"
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "The requested item(https://docs.modrinth.com/ were not found or no authorization to access the requested item(https://docs.modrinth.com/"
      }
    ]
  },
  {
    "url": "/project/{id|slug}/members",
    "method": "getProjectMembers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "teams",
    "typeScriptTag": "teams",
    "description": "Get a project's team members",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "An array of team members"
      },
      {
        "statusCode": "404",
        "description": "The requested item(https://docs.modrinth.com/ were not found or no authorization to access the requested item(https://docs.modrinth.com/"
      }
    ]
  },
  {
    "url": "/team/{id}/members",
    "method": "getTeamMembers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "teams",
    "typeScriptTag": "teams",
    "description": "Get a team's members",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "An array of team members"
      }
    ]
  },
  {
    "url": "/team/{id}/members",
    "method": "addUserToTeam",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "teams",
    "typeScriptTag": "teams",
    "description": "Add a user to a team",
    "parameters": [
      {
        "name": "user_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EEFFGGHH"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Expected response to a valid request"
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "The requested item(https://docs.modrinth.com/ were not found or no authorization to access the requested item(https://docs.modrinth.com/"
      }
    ]
  },
  {
    "url": "/teams",
    "method": "getMembers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "teams",
    "typeScriptTag": "teams",
    "description": "Get the members of multiple teams",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/team/{id}/join",
    "method": "joinTeam",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "teams",
    "typeScriptTag": "teams",
    "description": "Join a team",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "Expected response to a valid request"
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "The requested item(https://docs.modrinth.com/ were not found or no authorization to access the requested item(https://docs.modrinth.com/"
      }
    ]
  },
  {
    "url": "/team/{id}/members/{id|username}",
    "method": "removeMember",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "teams",
    "typeScriptTag": "teams",
    "description": "Remove a member from a team",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "Expected response to a valid request"
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "The requested item(https://docs.modrinth.com/ were not found or no authorization to access the requested item(https://docs.modrinth.com/"
      }
    ]
  },
  {
    "url": "/team/{id}/members/{id|username}",
    "method": "modifyMemberInfo",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "teams",
    "typeScriptTag": "teams",
    "description": "Modify a team member's information",
    "parameters": [
      {
        "name": "role",
        "schema": "string",
        "description": "",
        "example": "Contributor"
      },
      {
        "name": "permissions",
        "schema": "integer",
        "description": "",
        "example": 127
      },
      {
        "name": "payouts_split",
        "schema": "integer",
        "description": "",
        "example": 100
      },
      {
        "name": "ordering",
        "schema": "integer",
        "description": "",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Expected response to a valid request"
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "The requested item(https://docs.modrinth.com/ were not found or no authorization to access the requested item(https://docs.modrinth.com/"
      }
    ]
  },
  {
    "url": "/team/{id}/owner",
    "method": "transferOwnership",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "teams",
    "typeScriptTag": "teams",
    "description": "Transfer team's ownership to another user",
    "parameters": [
      {
        "name": "user_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EEFFGGHH"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Expected response to a valid request"
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "The requested item(https://docs.modrinth.com/ were not found or no authorization to access the requested item(https://docs.modrinth.com/"
      }
    ]
  },
  {
    "url": "/tag/category",
    "method": "listCategoriesWithIcons",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "tags",
    "typeScriptTag": "tags",
    "description": "Get a list of categories",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/tag/loader",
    "method": "getLoaderList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "tags",
    "typeScriptTag": "tags",
    "description": "Get a list of loaders",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/tag/game_version",
    "method": "listGameVersions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "tags",
    "typeScriptTag": "tags",
    "description": "Get a list of game versions",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/tag/license",
    "method": "listLicenses",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "tags",
    "typeScriptTag": "tags",
    "description": "Get a list of licenses",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/tag/license/{id}",
    "method": "getLicenseTextTitle",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "tags",
    "typeScriptTag": "tags",
    "description": "Get the text and title of a license",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "A full license"
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/tag/donation_platform",
    "method": "listDonationPlatforms",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "tags",
    "typeScriptTag": "tags",
    "description": "Get a list of donation platforms",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/tag/report_type",
    "method": "listReportTypes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "tags",
    "typeScriptTag": "tags",
    "description": "Get a list of report types",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/tag/project_type",
    "method": "listProjectTypes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "tags",
    "typeScriptTag": "tags",
    "description": "Get a list of project types",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/tag/side_type",
    "method": "listSideTypes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "tags",
    "typeScriptTag": "tags",
    "description": "Get a list of side types",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/updates/{id|slug}/forge_updates.json",
    "method": "getForgeUpdatesJson",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "misc",
    "typeScriptTag": "misc",
    "description": "Forge Updates JSON file",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "Mod version information that can be consumed by Forge's update checker"
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/statistics",
    "method": "instanceStatistics",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "misc",
    "typeScriptTag": "misc",
    "description": "Various statistics about this Modrinth instance",
    "parameters": [],
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
      apiTitle="Labrinth"
      apiBaseUrl="https://api.modrinth.com/v2"
      apiVersion="v2.7.0/15cf3fc"
      endpoints={55}
      sdkMethods={115}
      schemas={91}
      parameters={73}
      difficulty="Medium"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/modrinth/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/modrinth/openapi.yaml"
      developerDocumentation="docs.modrinth.com/"
    />
  );
}
  