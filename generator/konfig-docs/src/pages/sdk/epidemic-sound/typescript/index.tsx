import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function EpidemicSoundTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="epidemic-sound-typescript-sdk"
      metaDescription={`Epidemic Sound has transformed the soundtracking experience for global brands and professional creators, with an expansive catalog of world-class music and sound effects that's seen and heard over 2.5 billion times a day around the globe.

Providing a direct license model that comes with all rights included and next-generation soundtracking tools, Epidemic Sound empowers creators to unlock more feeling in everything they create and share their stories with the world. Epidemic Sound continuously enriches its world-class catalog of music by teaming up with artists, composers, and producers to create tracks spanning all genres, while supporting them financially and creatively.`}
      company="Epidemic Sound"
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/epidemic-sound/logo.png"
      companyKebabCase="epidemic-sound"
      clientNameCamelCase="epidemicSound"
      homepage="www.epidemicsound.com/"
      lastUpdated={new Date("2024-03-29T17:12:48.443Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/epidemic-sound/favicon.png"
      // Missing contactUrl
      // Missing contactEmail
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/epidemic-sound/imagePreview.png"
      GettingStarted={GettingStarted}
      FirstRequest={FirstRequest}
      categories={["audio_generation","music","sound_effects","media","entertainment","royalty_free_music"]}
      methods={[
  {
    "url": "/v0/collections",
    "method": "collections",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Browse & search",
    "typeScriptTag": "browse &Search",
    "description": "List collections with tracks",
    "parameters": [
      {
        "name": "excludeField",
        "schema": "string",
        "required": false,
        "description": "Add parameter if tracks should be excluded in the response"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Max number of entries returned in the response, default 10 and max 20"
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "Index of the entry track in the response"
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/v0/collections/{collectionId}",
    "method": "collection",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Browse & search",
    "typeScriptTag": "browse &Search",
    "description": "List all tracks in a collection",
    "parameters": [
      {
        "name": "collectionId",
        "schema": "string",
        "required": true,
        "description": "Collection id",
        "example": "COLLECTIONID"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Max number of entries returned in the response, default 50 and max 100"
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "Index of the entry track in the response"
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
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/v0/tracks",
    "method": "tracks",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Tracks",
    "typeScriptTag": "tracks",
    "description": "List tracks based on mood, genre or BPM",
    "parameters": [
      {
        "name": "genre",
        "schema": "array",
        "required": false,
        "description": "Id for genre"
      },
      {
        "name": "mood",
        "schema": "array",
        "required": false,
        "description": "Id for mood"
      },
      {
        "name": "bpmMin",
        "schema": "integer",
        "required": false,
        "description": "BPM Min"
      },
      {
        "name": "bpmMax",
        "schema": "integer",
        "required": false,
        "description": "BPM Max"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Max number of entries returned in the response, default 50 and max 100"
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "Index of the entry track in the response"
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
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/v0/tracks/search",
    "method": "tracksSearchList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Browse & search",
    "typeScriptTag": "browse &Search",
    "description": "Search for tracks",
    "parameters": [
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "Index of the entry track in the response"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Max number of entries returned in the response, default 50 and max 100"
      },
      {
        "name": "term",
        "schema": "string",
        "required": false,
        "description": "Term for search"
      },
      {
        "name": "genre",
        "schema": "array",
        "required": false,
        "description": "Id for genre"
      },
      {
        "name": "mood",
        "schema": "array",
        "required": false,
        "description": "Id for mood"
      },
      {
        "name": "sort",
        "schema": "string",
        "required": false,
        "description": "Sort for search",
        "default": "Relevance"
      },
      {
        "name": "order",
        "schema": "string",
        "required": false,
        "description": "Order",
        "default": "Asc"
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
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "503",
        "description": ""
      }
    ]
  },
  {
    "url": "/v0/tracks/search/suggestions",
    "method": "trackSuggestionsGet",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Browse & search",
    "typeScriptTag": "browse &Search",
    "description": "Search tracks suggestions",
    "parameters": [
      {
        "name": "term",
        "schema": "string",
        "required": false,
        "description": "Term for search"
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
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "503",
        "description": ""
      }
    ]
  },
  {
    "url": "/v0/tracks/parameters",
    "method": "listParameters",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Tracks",
    "typeScriptTag": "tracks",
    "description": "List track parameters",
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/v0/moods",
    "method": "moodsList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Browse & search",
    "typeScriptTag": "browse &Search",
    "description": "List moods",
    "parameters": [
      {
        "name": "sort",
        "schema": "string",
        "required": false,
        "description": "Sorting options. Available values: alphabetic, relevance",
        "default": "relevance"
      },
      {
        "name": "order",
        "schema": "string",
        "required": false,
        "description": "Order options. Available values: asc, desc",
        "default": "asc"
      },
      {
        "name": "type",
        "schema": "string",
        "required": false,
        "description": "Types to filter by:\n  * `all` - all the objects in the Epidemic Sound library\n  * `partner-tier` - objects available to the partner within their tier\n  * `featured` - only objects featured and curated by Epidemic Sound",
        "default": "all"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Max number of entries returned in the response, default 20 and max 20"
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "Index of the entry track in the response"
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/v0/moods/{moodId}",
    "method": "moodDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Browse & search",
    "typeScriptTag": "browse &Search",
    "description": "Mood by ID",
    "parameters": [
      {
        "name": "moodId",
        "schema": "string",
        "required": true,
        "description": "Mood id",
        "example": "MOODID"
      },
      {
        "name": "expand",
        "schema": "string",
        "required": false,
        "description": "Add parameter if tracks should be included in the response"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Max number of entries returned in the response, default 50 and max 100"
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "Index of the entry track in the response"
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/v0/genres",
    "method": "genreCatalog",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Browse & search",
    "typeScriptTag": "browse &Search",
    "description": "List genres",
    "parameters": [
      {
        "name": "sort",
        "schema": "string",
        "required": false,
        "description": "Sorting options. Available values: alphabetic, relevance",
        "default": "relevance"
      },
      {
        "name": "order",
        "schema": "string",
        "required": false,
        "description": "Order options. Available values: asc, desc",
        "default": "asc"
      },
      {
        "name": "type",
        "schema": "string",
        "required": false,
        "description": "Types to filter by:\n  * `all` - all the objects in the Epidemic Sound library\n  * `partner-tier` - objects available to the partner within their tier\n  * `featured` - only objects featured and curated by Epidemic Sound",
        "default": "all"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Max number of entries returned in the response, default 20 and max 20"
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "Index of the entry track in the response"
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/v0/genres/{genreId}",
    "method": "genreDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Browse & search",
    "typeScriptTag": "browse &Search",
    "description": "Genre details",
    "parameters": [
      {
        "name": "genreId",
        "schema": "string",
        "required": true,
        "description": "Genre id",
        "example": "GENREID"
      },
      {
        "name": "expand",
        "schema": "string",
        "required": false,
        "description": "Add parameter if tracks should be included in the response"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Max number of entries returned in the response, default 50 and max 100"
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "Index of the entry track in the response"
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/v0/tracks/{trackId}/download",
    "method": "download",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Tracks",
    "typeScriptTag": "tracks",
    "description": "Download track",
    "parameters": [
      {
        "name": "trackId",
        "schema": "string",
        "required": true,
        "description": "Track id",
        "example": "TRACKID"
      },
      {
        "name": "format",
        "schema": "string",
        "required": false,
        "description": "Track format"
      },
      {
        "name": "quality",
        "schema": "string",
        "required": false,
        "description": "Track quality, normal is used as the default if not specified",
        "default": "normal"
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
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/v0/tracks/{trackId}/beats",
    "method": "getBeatsData",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Tracks",
    "typeScriptTag": "tracks",
    "description": "Beats",
    "parameters": [
      {
        "name": "trackId",
        "schema": "string",
        "required": true,
        "description": "Track id",
        "example": "TRACKID"
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
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/v0/tracks/{trackId}/hls",
    "method": "previewUsingCookies",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Tracks",
    "typeScriptTag": "tracks",
    "description": "Preview track using cookies",
    "parameters": [
      {
        "name": "trackId",
        "schema": "string",
        "required": true,
        "description": "Track id",
        "example": "TRACKID"
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
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/v0/tracks/{trackId}/similar",
    "method": "getSimilar",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Tracks",
    "typeScriptTag": "tracks",
    "description": "Similar tracks",
    "parameters": [
      {
        "name": "trackId",
        "schema": "string",
        "required": true,
        "description": "Track id",
        "example": "TRACKID"
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "Index of the entry track in the response"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Max number of entries returned in the response, default 50 and max 100"
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
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/v0/tracks/similar-sections",
    "method": "getSimilarSegments",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Tracks",
    "typeScriptTag": "tracks",
    "description": "Similar track segment based on audio file",
    "parameters": [
      {
        "name": "audioUploadId",
        "schema": "string",
        "required": true,
        "description": "Reference to the uploaded audio file",
        "example": "AUDIOUPLOADID"
      },
      {
        "name": "start",
        "schema": "integer",
        "required": true,
        "description": "Start of the section in milliseconds",
        "example": 0
      },
      {
        "name": "end",
        "schema": "integer",
        "required": true,
        "description": "End of the section in milliseconds",
        "example": 0
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "Index of the entry track in the response"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Max number of entries returned in the response, default 50 and max 100"
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
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/v0/tracks/{trackId}/similar-sections",
    "method": "findSimilarSegments",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Tracks",
    "typeScriptTag": "tracks",
    "description": "Similar track segment based on trackID",
    "parameters": [
      {
        "name": "trackId",
        "schema": "string",
        "required": true,
        "description": "Track id",
        "example": "TRACKID"
      },
      {
        "name": "start",
        "schema": "integer",
        "required": true,
        "description": "Start of the section in milliseconds",
        "example": 0
      },
      {
        "name": "end",
        "schema": "integer",
        "required": true,
        "description": "End of the section in milliseconds",
        "example": 0
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "Index of the entry track in the response"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Max number of entries returned in the response, default 50 and max 100"
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
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/v0/tracks/{trackId}/stream",
    "method": "stream",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Tracks",
    "typeScriptTag": "tracks",
    "description": "Preview track",
    "parameters": [
      {
        "name": "trackId",
        "schema": "string",
        "required": true,
        "description": "Track id",
        "example": "TRACKID"
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
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/v0/tracks/{trackId}/highlights",
    "method": "recommendSection",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Tracks",
    "typeScriptTag": "tracks",
    "description": "Recommend section of a track",
    "parameters": [
      {
        "name": "trackId",
        "schema": "string",
        "required": true,
        "description": "Track id",
        "example": "TRACKID"
      },
      {
        "name": "duration",
        "schema": "array",
        "required": false,
        "description": "The highlight duration in seconds"
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
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/v0/uploads/audio/{checksum}",
    "method": "byChecksumGet",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Assets",
    "typeScriptTag": "assets",
    "description": "Get audio asset by the checksum",
    "parameters": [
      {
        "name": "checksum",
        "schema": "string",
        "required": true,
        "description": "File checksum",
        "example": "CHECKSUM"
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
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/v0/uploads/audio/{audioIdOrChecksum}",
    "method": "deleteAudioFile",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Assets",
    "typeScriptTag": "assets",
    "description": "Delete a single audio file",
    "parameters": [
      {
        "name": "audioIdOrChecksum",
        "schema": "string",
        "required": true,
        "description": "Audio upload id or checksum of audio file",
        "example": "AUDIOIDORCHECKSUM"
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
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/v0/uploads/audio",
    "method": "uploadAudioFile",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Assets",
    "typeScriptTag": "assets",
    "description": "Uploads an audio file",
    "parameters": [
      {
        "name": "file",
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
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/v0/uploads/images/{imageId}",
    "method": "deleteImage",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Assets",
    "typeScriptTag": "assets",
    "description": "Delete uploaded image",
    "parameters": [
      {
        "name": "imageId",
        "schema": "string",
        "required": true,
        "description": "Image id",
        "example": "IMAGEID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Image was deleted"
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
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/v0/uploads/images",
    "method": "removeAllImages",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Assets",
    "typeScriptTag": "assets",
    "description": "Delete all the uploaded images by the user",
    "parameters": [],
    "responses": [
      {
        "statusCode": "202",
        "description": "Images were marked for deletion"
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/v0/uploads/images",
    "method": "uploadImageForRecommendation",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Assets",
    "typeScriptTag": "assets",
    "description": "Upload image for recommendation",
    "parameters": [
      {
        "name": "file",
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
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/v0/tracks/matching-image/{imageId}",
    "method": "matchingImageGet",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Tracks",
    "typeScriptTag": "tracks",
    "description": "Get tracks matching an image",
    "parameters": [
      {
        "name": "imageId",
        "schema": "string",
        "required": true,
        "description": "Image id",
        "example": "IMAGEID"
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "Index of the entry track in the response"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Max number of entries returned in the response, default 50 and max 100"
      },
      {
        "name": "genre",
        "schema": "array",
        "required": false,
        "description": "Id for genre"
      },
      {
        "name": "mood",
        "schema": "array",
        "required": false,
        "description": "Id for mood"
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
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/v0/sound-effects/categories",
    "method": "listCategories",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Sound effects",
    "typeScriptTag": "soundEffects",
    "description": "Get a list of all sound effects categories",
    "parameters": [
      {
        "name": "type",
        "schema": "string",
        "required": false,
        "description": "Category type",
        "default": "all"
      },
      {
        "name": "sort",
        "schema": "string",
        "required": false,
        "description": "Sorting options",
        "default": "title"
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "Index of the entry track in the response"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Max number of entries returned in the response, default 50 and max 100"
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
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/v0/sound-effects/categories/{categoryId}",
    "method": "getCategoryById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Sound effects",
    "typeScriptTag": "soundEffects",
    "description": "Get a sound effects category by id",
    "parameters": [
      {
        "name": "categoryId",
        "schema": "string",
        "required": true,
        "description": "Category id",
        "example": "CATEGORYID"
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
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/v0/sound-effects/categories/{categoryId}/tracks",
    "method": "getByCategoryTracks",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Sound effects",
    "typeScriptTag": "soundEffects",
    "description": "Get sound effects by category",
    "parameters": [
      {
        "name": "categoryId",
        "schema": "string",
        "required": true,
        "description": "Category id",
        "example": "CATEGORYID"
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "Index of the entry track in the response"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Max number of entries returned in the response, default 50 and max 100"
      },
      {
        "name": "sort",
        "schema": "string",
        "required": false,
        "description": "Sort",
        "default": "newest"
      },
      {
        "name": "order",
        "schema": "string",
        "required": false,
        "description": "Order",
        "default": "asc"
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
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/v0/sound-effects/{trackId}/download",
    "method": "downloadSoundEffect",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Sound effects",
    "typeScriptTag": "soundEffects",
    "description": "Download sound effect",
    "parameters": [
      {
        "name": "trackId",
        "schema": "string",
        "required": true,
        "description": "Track id",
        "example": "TRACKID"
      },
      {
        "name": "format",
        "schema": "string",
        "required": false,
        "description": "Track format"
      },
      {
        "name": "quality",
        "schema": "string",
        "required": false,
        "description": "Track quality, normal is used as the default if not specified",
        "default": "normal"
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
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/v0/sound-effects/search",
    "method": "searchSoundEffects",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Sound effects",
    "typeScriptTag": "soundEffects",
    "description": "Search sound effects",
    "parameters": [
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "Index of the entry track in the response"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Max number of entries returned in the response, default 50 and max 100"
      },
      {
        "name": "term",
        "schema": "string",
        "required": false,
        "description": "Term for search"
      },
      {
        "name": "sort",
        "schema": "string",
        "required": false,
        "description": "Sort for search",
        "default": "best-match"
      },
      {
        "name": "order",
        "schema": "string",
        "required": false,
        "description": "Order",
        "default": "asc"
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
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/v0/analytics/report",
    "method": "epidemicEventSubmission",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Reporting",
    "typeScriptTag": "reporting",
    "description": "Report events to Epidemic Sound",
    "parameters": [
      {
        "name": "events",
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
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/v0/usage",
    "method": "use",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Reporting",
    "typeScriptTag": "reporting",
    "description": "Report usage",
    "parameters": [
      {
        "name": "eventType",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "platform",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PLATFORM"
      },
      {
        "name": "trackIds",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "other",
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
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/v0/partner-token",
    "method": "requestPartnerToken",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Authentication",
    "typeScriptTag": "authentication",
    "description": "Request a partner token",
    "parameters": [
      {
        "name": "accessKeyId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACCESSKEYID"
      },
      {
        "name": "accessKeySecret",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACCESSKEYSECRET"
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
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/v0/token",
    "method": "requestUserToken",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Authentication",
    "typeScriptTag": "authentication",
    "description": "Request a user token",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "4fbd5793-efcd-4545-b4e9-807c8ed9e2a3"
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
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/v0/users/me",
    "method": "getDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "User details",
    "parameters": [],
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
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/v0/users/me/subscription",
    "method": "getSubscriptionDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "User subscription details",
    "parameters": [],
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
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/v0/users/me/liked/tracks",
    "method": "listLikedTracks",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "List users’ liked tracks",
    "parameters": [
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "Offset for the pagination. For this endpoint the number of results is fixed at 25, so the offset needs to be evenly divisible by 25."
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
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  }
]
    }
      language="TypeScript"
      apiTitle="Partner Content API"
      apiBaseUrl="https://partner-content-api.epidemicsound.com"
      apiVersion="0.1.17"
      endpoints={36}
      sdkMethods={37}
      schemas={65}
      parameters={96}
      difficulty="Easy"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/epidemic-sound/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/epidemic-sound/openapi.yaml"
      developerDocumentation="partner-content-api.epidemicsound.com/swagger"
    />
  );
}
  