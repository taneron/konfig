import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function MelodieMusicTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="melodie-music-typescript-sdk"
      metaDescription={`Melodie Music (www.melod.ie) is an Australian company that provides a simple solution for content creators seeking to find and license high-quality music for their projects.

With Creator, Pro and Enterprise subscription options, their exclusive and meticulously curated catalogue of original music is accessible through an online search platform equipped with AI-powered search tools.

Founded by composers, musicians and sound designers with first-hand experience of the crucial role music plays in storytelling, Melodie delivers an intuitive, user-friendly music licensing platform that caters to the needs of content creators, while supporting the growth of the music creators themselves.

Learn more at www.melod.ie

2023 Acquisition International Awarded: *Best Music Platform Australia*
2022 Startup City Awarded: *Top 10 Startups in Australia*
2021 TMN Nominated: "Music Publisher of the Year", "Sync/ Licensing Biz of the Year", "Music Tech Platform of the Year".`}
      company="Melodie Music"
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/melodie-music/logo.png"
      companyKebabCase="melodie-music"
      clientNameCamelCase="melodieMusic"
      homepage="melod.ie"
      lastUpdated={new Date("2024-03-29T23:25:02.951Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/melodie-music/favicon.png"
      // Missing contactUrl
      contactEmail="api@melod.ie"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/melodie-music/imagePreview.jpg"
      GettingStarted={GettingStarted}
      FirstRequest={FirstRequest}
      categories={["entertainment","music","media"]}
      methods={[
  {
    "url": "/api/v1/collections",
    "method": "getListAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Collections",
    "typeScriptTag": "collections",
    "description": "Get list of all available collections",
    "parameters": [
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Your API token.",
        "example": "AUTHORIZATION"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/collections/{collection_safename}",
    "method": "getTracks",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Collections",
    "typeScriptTag": "collections",
    "description": "Get tracks from a collection",
    "parameters": [
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Your API token.",
        "example": "AUTHORIZATION"
      },
      {
        "name": "collectionSafename",
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
    "url": "/api/v1/tracks/search",
    "method": "tracks",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Search",
    "typeScriptTag": "search",
    "description": "Perform track search",
    "parameters": [
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Your API token.",
        "example": "AUTHORIZATION"
      },
      {
        "name": "page",
        "schema": "string",
        "required": false,
        "description": "Page of the results you want to retrieve."
      },
      {
        "name": "sort",
        "schema": "string",
        "required": false,
        "description": "Sorting of results, possible values are “latest”, “shuffle” and “featured” (used by default)."
      },
      {
        "name": "q",
        "schema": "string",
        "required": false,
        "description": "General string query to search for (mostly to use for track names, composers)."
      },
      {
        "name": "genreGroup[]",
        "schema": "string",
        "required": false,
        "description": "Array of genre groups to search for."
      },
      {
        "name": "genreGroupOperator",
        "schema": "string",
        "required": false,
        "description": "Logic operator for genre groups, can be AND or OR (default, also selected if invalid value is provided). Operator is case sensitive!"
      },
      {
        "name": "notGenreGroup[]",
        "schema": "string",
        "required": false,
        "description": "Array of genre groups to exclude from the search."
      },
      {
        "name": "genre[]",
        "schema": "string",
        "required": false,
        "description": "Array of genres to search for."
      },
      {
        "name": "genreOperator",
        "schema": "string",
        "required": false,
        "description": "Logic operator for genres, can be AND or OR (default, also selected if invalid value is provided). Operator is case sensitive!"
      },
      {
        "name": "notGenre[]",
        "schema": "string",
        "required": false,
        "description": "Array of genres to exclude from the search."
      },
      {
        "name": "mood[]",
        "schema": "string",
        "required": false,
        "description": "Array of moods to search for."
      },
      {
        "name": "notMood[]",
        "schema": "string",
        "required": false,
        "description": "Array of moods to exclude from the search."
      },
      {
        "name": "instrument[]",
        "schema": "string",
        "required": false,
        "description": "Array of instruments to search for."
      },
      {
        "name": "notInstrument[]",
        "schema": "string",
        "required": false,
        "description": "Array of instruments to exclude from the search."
      },
      {
        "name": "purpose[]",
        "schema": "string",
        "required": false,
        "description": "Array of purposes to search for. Purposes are like 'TV production genres'."
      },
      {
        "name": "notPurpose[]",
        "schema": "string",
        "required": false,
        "description": "Array of purposes to exclude from the search."
      },
      {
        "name": "variableTempo",
        "schema": "string",
        "required": false,
        "description": "True/false; Should return tracks with variable tempo or not."
      },
      {
        "name": "minTempo",
        "schema": "string",
        "required": false,
        "description": "Minimal tempo in BPM for searched tracks (must be used together with max_tempo)."
      },
      {
        "name": "maxTempo",
        "schema": "string",
        "required": false,
        "description": "Maximal tempo in BPM for searched tracks (must be used together with min_tempo)."
      },
      {
        "name": "minDuration",
        "schema": "string",
        "required": false,
        "description": "Minimal duration in seconds for searched tracks (must be used together with max_duration)."
      },
      {
        "name": "maxDuration",
        "schema": "string",
        "required": false,
        "description": "Maximal duration in seconds for searched tracks (must be used together with min_duration)."
      },
      {
        "name": "key[]",
        "schema": "string",
        "required": false,
        "description": "Array of desired keys of the tracks."
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "Amount of results per page (default is 15, max is 200)"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/tracks/simplified_search",
    "method": "mainTracksInfoGet",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Search",
    "typeScriptTag": "search",
    "description": "Perform track search - with main tracks info only",
    "parameters": [
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Your API token.",
        "example": "AUTHORIZATION"
      },
      {
        "name": "page",
        "schema": "string",
        "required": false,
        "description": "Page of the results you want to retrieve."
      },
      {
        "name": "sort",
        "schema": "string",
        "required": false,
        "description": "Sorting of results, possible values are “latest”, “shuffle” and “featured” (used by default)."
      },
      {
        "name": "q",
        "schema": "string",
        "required": false,
        "description": "General string query to search for (mostly to use for track names, composers)."
      },
      {
        "name": "genreGroup[]",
        "schema": "string",
        "required": false,
        "description": "Array of genre groups to search for."
      },
      {
        "name": "genreGroupOperator",
        "schema": "string",
        "required": false,
        "description": "Logic operator for genre groups, can be AND or OR (default, also selected if invalid value is provided). Operator is case sensitive!"
      },
      {
        "name": "notGenreGroup[]",
        "schema": "string",
        "required": false,
        "description": "Array of genre groups to exclude from the search."
      },
      {
        "name": "genre[]",
        "schema": "string",
        "required": false,
        "description": "Array of genres to search for."
      },
      {
        "name": "genreOperator",
        "schema": "string",
        "required": false,
        "description": "Logic operator for genres, can be AND or OR (default, also selected if invalid value is provided). Operator is case sensitive!"
      },
      {
        "name": "notGenre[]",
        "schema": "string",
        "required": false,
        "description": "Array of genres to exclude from the search."
      },
      {
        "name": "mood[]",
        "schema": "string",
        "required": false,
        "description": "Array of moods to search for."
      },
      {
        "name": "notMood[]",
        "schema": "string",
        "required": false,
        "description": "Array of moods to exclude from the search."
      },
      {
        "name": "instrument[]",
        "schema": "string",
        "required": false,
        "description": "Array of instruments to search for."
      },
      {
        "name": "notInstrument[]",
        "schema": "string",
        "required": false,
        "description": "Array of instruments to exclude from the search."
      },
      {
        "name": "purpose[]",
        "schema": "string",
        "required": false,
        "description": "Array of purposes to search for. Purposes are like 'TV production genres'."
      },
      {
        "name": "notPurpose[]",
        "schema": "string",
        "required": false,
        "description": "Array of purposes to exclude from the search."
      },
      {
        "name": "variableTempo",
        "schema": "string",
        "required": false,
        "description": "True/false; Should return tracks with variable tempo or not."
      },
      {
        "name": "minTempo",
        "schema": "string",
        "required": false,
        "description": "Minimal tempo in BPM for searched tracks (must be used together with max_tempo)."
      },
      {
        "name": "maxTempo",
        "schema": "string",
        "required": false,
        "description": "Maximal tempo in BPM for searched tracks (must be used together with min_tempo)."
      },
      {
        "name": "minDuration",
        "schema": "string",
        "required": false,
        "description": "Minimal duration in seconds for searched tracks (must be used together with max_duration)."
      },
      {
        "name": "maxDuration",
        "schema": "string",
        "required": false,
        "description": "Maximal duration in seconds for searched tracks (must be used together with min_duration)."
      },
      {
        "name": "key[]",
        "schema": "string",
        "required": false,
        "description": "Array of desired keys of the tracks."
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "Amount of results per page (default is 15, max is 200)"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/tracks/genres",
    "method": "getAllGenres",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Genres",
    "typeScriptTag": "genres",
    "description": "Get list of all current genres",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/tracks/genre_groups",
    "method": "getAllGenreGroups",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Genre groups",
    "typeScriptTag": "genreGroups",
    "description": "Get list of all current genre groups",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/tracks/moods",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Moods",
    "typeScriptTag": "moods",
    "description": "Get list of all current moods",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/tracks/instruments",
    "method": "getAllInstruments",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Instruments",
    "typeScriptTag": "instruments",
    "description": "Get list of all current instruments",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/tracks/purposes",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Purposes",
    "typeScriptTag": "purposes",
    "description": "Get list of all current purposes",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/tracks/trending",
    "method": "getPopularTracks",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Trending",
    "typeScriptTag": "trending",
    "description": "Get 25 most popular tracks currently",
    "parameters": [
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Your API token.",
        "example": "AUTHORIZATION"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/tracks/simplified_trending",
    "method": "getPopularTracks",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Trending",
    "typeScriptTag": "trending",
    "description": "Get 25 most popular tracks currently - with main tracks info only",
    "parameters": [
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Your API token.",
        "example": "AUTHORIZATION"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/tracks/{track_id}/info",
    "method": "trackInfoGet",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Info",
    "typeScriptTag": "info",
    "description": "Get info about the specific track id",
    "parameters": [
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Your API token.",
        "example": "AUTHORIZATION"
      },
      {
        "name": "trackId",
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
    "url": "/api/v1/tracks/{track_id}/download",
    "method": "trackFile",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Download",
    "typeScriptTag": "download",
    "description": "Download a track",
    "parameters": [
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Your API token.",
        "example": "AUTHORIZATION"
      },
      {
        "name": "trackId",
        "schema": "undefined",
        "required": true,
        "description": ""
      },
      {
        "name": "version",
        "schema": "string",
        "required": false,
        "description": "Version of the track to be retrived, can be \"wav\" or \"mp3\" (\"wav\" is default)"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/tracks/{track_version_id}/download_version",
    "method": "getVersionDownload",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Download track version",
    "typeScriptTag": "downloadTrackVersion",
    "description": "Download a track version",
    "parameters": [
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Your API token.",
        "example": "AUTHORIZATION"
      },
      {
        "name": "trackVersionId",
        "schema": "undefined",
        "required": true,
        "description": ""
      },
      {
        "name": "version",
        "schema": "string",
        "required": false,
        "description": "Version of the track to be retrived, can be \"wav\" or \"mp3\" (\"wav\" is default)"
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
      apiTitle="Melodie API"
      apiBaseUrl="https://api.melod.ie"
      apiVersion="1.0.0"
      endpoints={14}
      sdkMethods={14}
      schemas={16}
      parameters={59}
      difficulty="Very Easy"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/melodie-music/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/melodie-music/openapi.yaml"
      developerDocumentation="api.melod.ie/openapi"
    />
  );
}
  