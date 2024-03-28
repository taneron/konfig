import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function BlInkTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="bl-ink-typescript-sdk"
      metaDescription={`BL.INK powers shortened URLs and QR codes with unlimited data and flexibility. 

With BL.INK, you'll create thousands of custom links that capture unlimited data points so you can measure every user touchpoint and perfect every interaction. 

Everyone on your team can create perfect data to accurately measure every element of marketing attribution. Every customer than visits your link gets the information they need, every time, with no broken links. 

Need to change the link when a contest ends, or show the page in the user's own language? It's easy with BL.INK. 

No other URL shortener or QR code creator integrates with your existing tools, helps you avoid broken links, enables zero down-time when updating links, and has a platform built based on how enterprise companies work. Only BL.INK. Trusted by demanding global brands since 2008.`}
      company="BL.INK"
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/bl-ink/logo.png"
      companyKebabCase="bl-ink"
      clientNameCamelCase="blInk"
      homepage="www.bl.ink/"
      lastUpdated={new Date("2024-03-28T00:16:38.181Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/bl-ink/favicon.png"
      contactUrl="https://help.bl.ink"
      contactEmail="help@bl.ink"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/bl-ink/imagePreview.png"
      GettingStarted={GettingStarted}
      FirstRequest={FirstRequest}
      categories={["url_shortener","link_management","qr_codes","branded_short_links","short_links"]}
      methods={[
  {
    "url": "/validate_login",
    "method": "information",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Validate Login",
    "typeScriptTag": "validateLogin",
    "description": "Validates login information",
    "parameters": [
      {
        "name": "email",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "bud@smartlinker.email"
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
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      }
    ]
  },
  {
    "url": "/access_token",
    "method": "generateToken",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Access Token",
    "typeScriptTag": "accessToken",
    "description": "Returns a valid authentication token",
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
    "method": "byAccountAdmin",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "List Users",
    "typeScriptTag": "listUsers",
    "description": "Returns the users in an account for those who have account admin authorization.",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/{domain_id}/links",
    "method": "byQueryParams",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "List Links",
    "typeScriptTag": "listLinks",
    "description": "Returns a list of user's links filtering by query params",
    "parameters": [
      {
        "name": "fromUnix",
        "schema": "integer",
        "required": false,
        "description": "The UTC unix timestamp, query returns values after this date."
      },
      {
        "name": "toUnix",
        "schema": "integer",
        "required": false,
        "description": "The UTC unix timestamp, query returns values before this date. Required if from_unix is specified."
      },
      {
        "name": "tag",
        "schema": "string",
        "required": false,
        "description": "Search links by tag"
      },
      {
        "name": "keyword",
        "schema": "string",
        "description": "Search link alias, notes, and redirect url for keyword"
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "Page number"
      },
      {
        "name": "url",
        "schema": "string",
        "description": "long URL to search links by"
      },
      {
        "name": "order",
        "schema": "string",
        "description": "Orders results differently. Possible values 'oldest' or 'latest'.  Defaults to 'oldest'"
      },
      {
        "name": "groupId",
        "schema": "integer",
        "description": "Search links by group_id"
      },
      {
        "name": "users",
        "schema": "string",
        "description": "A flag for privileged users (domain admins or account admins) to specify returning all links  from corresponding domain instead of just links they created. Example users=all"
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
    "url": "/{domain_id}/links",
    "method": "shortenedUrl",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Create Link",
    "typeScriptTag": "createLink",
    "description": "Will take the passed in URL and create a new shortened link.",
    "parameters": [
      {
        "name": "tags",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "url",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "URL"
      },
      {
        "name": "alias",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "rand_alias_length",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "dupe_check",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "notes",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "notify_on_click",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "override_404_check",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "utm_template_id",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "utm_fields",
        "schema": "object",
        "required": false,
        "description": "",
        "example": {
          "field_1": "value1",
          "field_2": "value2",
          "field_3": "value c"
        }
      },
      {
        "name": "archive_on",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "delete_on",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "redirect_type",
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
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/{domain_id}/links/clicked?tag={tag}",
    "method": "withinTimeframe",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "List Clicked Links",
    "typeScriptTag": "listClickedLinks",
    "description": "Returns links clicked on within a specified time range as well as the number of clicks (lifetime and within range)",
    "parameters": [
      {
        "name": "domainId",
        "schema": "integer",
        "required": true,
        "description": "The unique domain identifier.",
        "example": 0
      },
      {
        "name": "fromUnix",
        "schema": "integer",
        "required": false,
        "description": "The UTC unix timestamp, query returns values after this date."
      },
      {
        "name": "toUnix",
        "schema": "integer",
        "required": false,
        "description": "The UTC unix timestamp, query returns values before this date. Required if from_unix is specified."
      },
      {
        "name": "fromUser",
        "schema": "undefined",
        "required": false,
        "description": "An optional parameter. Valid value 'me' is allowed to only query for your links."
      },
      {
        "name": "keyword",
        "schema": "string",
        "description": "Search link alias, notes, and redirect url for keyword"
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "The page of to query the values from the paginated results. Defaults to 1."
      },
      {
        "name": "tag",
        "schema": "string",
        "required": false,
        "description": "Search links by tag"
      },
      {
        "name": "groupId",
        "schema": "integer",
        "required": false,
        "description": "Search links by group_id"
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
    "url": "/links/validate",
    "method": "url",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Validate Link",
    "typeScriptTag": "validateLink",
    "description": "Will take the passed in URL and validate it.",
    "parameters": [
      {
        "name": "url",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "URL"
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
    "url": "/{domain_id}/links/{link_id}",
    "method": "shortenedLink",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Get Link",
    "typeScriptTag": "getLink",
    "description": "Returns a short link",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/{domain_id}/links/{link_id}",
    "method": "withChanges",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Update Link",
    "typeScriptTag": "updateLink",
    "description": "Takes a series of change operations and applies them to the link",
    "parameters": [],
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
    "url": "/{domain_id}/links/exists?alias={alias}",
    "method": "shortenedUrl",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Get Link By Alias",
    "typeScriptTag": "getLinkByAlias",
    "description": "Returns a short link by the given alias",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/{domain_id}/links/{link_id}/qr",
    "method": "forLink",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Retrieve QR Code",
    "typeScriptTag": "retrieveQrCode",
    "description": "Retrieve link in QR form",
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
      }
    ]
  },
  {
    "url": "/{domain_id}/clicks/daily",
    "method": "getCountByDay",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Domain Click Count Per Day",
    "typeScriptTag": "domainClickCountPerDay",
    "description": "Returns the domain click count for each day.",
    "parameters": [
      {
        "name": "domainId",
        "schema": "integer",
        "required": true,
        "description": "The unique domain identifier.",
        "example": 0
      },
      {
        "name": "fromUnix",
        "schema": "integer",
        "required": false,
        "description": "The UTC unix timestamp, query returns values after this date."
      },
      {
        "name": "toUnix",
        "schema": "integer",
        "required": false,
        "description": "The UTC unix timestamp, query returns values before this date. Required if from_unix is specified."
      },
      {
        "name": "userId",
        "schema": "undefined",
        "required": false,
        "description": "An optional parameter containing the user's ID to query. Elevated privileges are required to specify another. Defaults to current user. Valid value 'all' is allowed for users of elevated privileges."
      },
      {
        "name": "labelId",
        "schema": "undefined",
        "required": false,
        "description": "An optional parameter containing the label's ID to query."
      },
      {
        "name": "keyword",
        "schema": "string",
        "description": "Search link alias, notes, and redirect url for keyword"
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "The page of to query the values from the paginated results."
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
    "url": "/{domain_id}/clicks/country",
    "method": "getTotalCountsByCountry",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Domain Click Count Per Country",
    "typeScriptTag": "domainClickCountPerCountry",
    "description": "Returns the total click count per country.",
    "parameters": [
      {
        "name": "domainId",
        "schema": "integer",
        "required": true,
        "description": "The unique domain identifier.",
        "example": 0
      },
      {
        "name": "fromUnix",
        "schema": "integer",
        "required": false,
        "description": "The UTC unix timestamp, query returns values after this date."
      },
      {
        "name": "toUnix",
        "schema": "integer",
        "required": false,
        "description": "The UTC unix timestamp, query returns values before this date. Required if from_unix is specified."
      },
      {
        "name": "userId",
        "schema": "undefined",
        "required": false,
        "description": "An optional parameter containing the user's ID to query. Elevated privileges are required to specify another. Defaults to current user. Valid value 'all' is allowed for users of elevated privileges."
      },
      {
        "name": "labelId",
        "schema": "undefined",
        "required": false,
        "description": "An optional parameter containing the label's ID to query."
      },
      {
        "name": "keyword",
        "schema": "string",
        "description": "Search link alias, notes, and redirect url for keyword"
      },
      {
        "name": "country",
        "schema": "string",
        "required": false,
        "description": "The country to query the values"
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "The page of to query the values from the paginated results."
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
    "url": "/{domain_id}/clicks/region",
    "method": "getByRegion",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Domain Click Count Per Region",
    "typeScriptTag": "domainClickCountPerRegion",
    "description": "Returns the total click count per region.",
    "parameters": [
      {
        "name": "domainId",
        "schema": "integer",
        "required": true,
        "description": "The unique domain identifier.",
        "example": 0
      },
      {
        "name": "fromUnix",
        "schema": "integer",
        "required": false,
        "description": "The UTC unix timestamp, query returns values after this date."
      },
      {
        "name": "toUnix",
        "schema": "integer",
        "required": false,
        "description": "The UTC unix timestamp, query returns values before this date. Required if from_unix is specified."
      },
      {
        "name": "userId",
        "schema": "undefined",
        "required": false,
        "description": "An optional parameter containing the user's ID to query. Elevated privileges are required to specify another. Defaults to current user. Valid value 'all' is allowed for users of elevated privileges."
      },
      {
        "name": "labelId",
        "schema": "undefined",
        "required": false,
        "description": "An optional parameter containing the label's ID to query."
      },
      {
        "name": "keyword",
        "schema": "string",
        "description": "Search link alias, notes, and redirect url for keyword"
      },
      {
        "name": "country",
        "schema": "string",
        "required": false,
        "description": "The country to query the values"
      },
      {
        "name": "region",
        "schema": "string",
        "required": false,
        "description": "The region to query the values"
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "The page of to query the values from the paginated results."
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
    "url": "/{domain_id}/clicks/city",
    "method": "getTotalClickCountPerCity",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Domain Click Count Per City",
    "typeScriptTag": "domainClickCountPerCity",
    "description": "Returns the total click count per city.",
    "parameters": [
      {
        "name": "domainId",
        "schema": "integer",
        "required": true,
        "description": "The unique domain identifier.",
        "example": 0
      },
      {
        "name": "fromUnix",
        "schema": "integer",
        "required": false,
        "description": "The UTC unix timestamp, query returns values after this date."
      },
      {
        "name": "toUnix",
        "schema": "integer",
        "required": false,
        "description": "The UTC unix timestamp, query returns values before this date. Required if from_unix is specified."
      },
      {
        "name": "userId",
        "schema": "undefined",
        "required": false,
        "description": "An optional parameter containing the user's ID to query. Elevated privileges are required to specify another. Defaults to current user. Valid value 'all' is allowed for users of elevated privileges."
      },
      {
        "name": "labelId",
        "schema": "undefined",
        "required": false,
        "description": "An optional parameter containing the label's ID to query."
      },
      {
        "name": "keyword",
        "schema": "string",
        "description": "Search link alias, notes, and redirect url for keyword"
      },
      {
        "name": "country",
        "schema": "string",
        "required": false,
        "description": "The country to query the values"
      },
      {
        "name": "region",
        "schema": "string",
        "required": false,
        "description": "The region to query the values"
      },
      {
        "name": "city",
        "schema": "string",
        "required": false,
        "description": "The city to query the values"
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "The page of to query the values from the paginated results."
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
    "url": "/{domain_id}/clicks/device",
    "method": "getTotalClicksPerDevice",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Domain Click Count Per Device",
    "typeScriptTag": "domainClickCountPerDevice",
    "description": "Returns the total click count per device.",
    "parameters": [
      {
        "name": "domainId",
        "schema": "integer",
        "required": true,
        "description": "The unique domain identifier.",
        "example": 0
      },
      {
        "name": "fromUnix",
        "schema": "integer",
        "required": false,
        "description": "The UTC unix timestamp, query returns values after this date."
      },
      {
        "name": "toUnix",
        "schema": "integer",
        "required": false,
        "description": "The UTC unix timestamp, query returns values before this date. Required if from_unix is specified."
      },
      {
        "name": "userId",
        "schema": "undefined",
        "required": false,
        "description": "An optional parameter containing the user's ID to query. Elevated privileges are required to specify another. Defaults to current user. Valid value 'all' is allowed for users of elevated privileges."
      },
      {
        "name": "labelId",
        "schema": "undefined",
        "required": false,
        "description": "An optional parameter containing the label's ID to query."
      },
      {
        "name": "keyword",
        "schema": "string",
        "description": "Search link alias, notes, and redirect url for keyword"
      },
      {
        "name": "device",
        "schema": "string",
        "required": false,
        "description": "The device to query the values"
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "The page of to query the values from the paginated results."
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
    "url": "/{domain_id}/clicks/referrer",
    "method": "totalClickPerReferrer",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Domain Click Count Per Referrer",
    "typeScriptTag": "domainClickCountPerReferrer",
    "description": "Returns the total click count per referrer.",
    "parameters": [
      {
        "name": "domainId",
        "schema": "integer",
        "required": true,
        "description": "The unique domain identifier.",
        "example": 0
      },
      {
        "name": "linkId",
        "schema": "integer",
        "required": true,
        "description": "The unique link identifier.",
        "example": 0
      },
      {
        "name": "fromUnix",
        "schema": "integer",
        "required": false,
        "description": "The UTC unix timestamp, query returns values after this date."
      },
      {
        "name": "toUnix",
        "schema": "integer",
        "required": false,
        "description": "The UTC unix timestamp, query returns values before this date. Required if from_unix is specified."
      },
      {
        "name": "userId",
        "schema": "undefined",
        "required": false,
        "description": "An optional parameter containing the user's ID to query. Elevated privileges are required to specify another. Defaults to current user. Valid value 'all' is allowed for users of elevated privileges."
      },
      {
        "name": "labelId",
        "schema": "undefined",
        "required": false,
        "description": "An optional parameter containing the label's ID to query."
      },
      {
        "name": "keyword",
        "schema": "string",
        "description": "Search link alias, notes, and redirect url for keyword"
      },
      {
        "name": "referrer",
        "schema": "string",
        "required": false,
        "description": "The referrer to query the values"
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "The page of to query the values from the paginated results. Defaults to 1."
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
    "url": "/{domain_id}/links/{link_id}/clicks",
    "method": "getTotalClickCounts",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Link Click Count",
    "typeScriptTag": "linkClickCount",
    "description": "Returns the total and total unique click counts without filters or the time-based filtered count.",
    "parameters": [
      {
        "name": "domainId",
        "schema": "integer",
        "required": true,
        "description": "The unique domain identifier.",
        "example": 0
      },
      {
        "name": "linkId",
        "schema": "integer",
        "required": true,
        "description": "The unique link identifier.",
        "example": 0
      },
      {
        "name": "fromUnix",
        "schema": "integer",
        "required": false,
        "description": "The UTC unix timestamp, query returns values after this date."
      },
      {
        "name": "toUnix",
        "schema": "integer",
        "required": false,
        "description": "The UTC unix timestamp, query returns values before this date. Required if from_unix is specified."
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
    "url": "/{domain_id}/links/{link_id}/clicks/daily",
    "method": "getTotalCountsByDay",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Link Click Count Per Day",
    "typeScriptTag": "linkClickCountPerDay",
    "description": "Returns the link click count for each day.",
    "parameters": [
      {
        "name": "domainId",
        "schema": "integer",
        "required": true,
        "description": "The unique domain identifier.",
        "example": 0
      },
      {
        "name": "linkId",
        "schema": "integer",
        "required": true,
        "description": "The unique link identifier.",
        "example": 0
      },
      {
        "name": "fromUnix",
        "schema": "integer",
        "required": false,
        "description": "The UTC unix timestamp, query returns values after this date."
      },
      {
        "name": "toUnix",
        "schema": "integer",
        "required": false,
        "description": "The UTC unix timestamp, query returns values before this date. Required if from_unix is specified."
      },
      {
        "name": "userId",
        "schema": "undefined",
        "required": false,
        "description": "An optional parameter containing the user's ID to query. Elevated privileges are required to specify another. Defaults to current user. Valid value 'all' is allowed for users of elevated privileges."
      },
      {
        "name": "labelId",
        "schema": "undefined",
        "required": false,
        "description": "An optional parameter containing the label's ID to query."
      },
      {
        "name": "keyword",
        "schema": "string",
        "description": "Search link alias, notes, and redirect url for keyword"
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "The page of to query the values from the paginated results."
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
    "url": "/{domain_id}/links/{link_id}/clicks/hourly",
    "method": "getTotalClicksByHour",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Link Click Count Per Hour",
    "typeScriptTag": "linkClickCountPerHour",
    "description": "Returns the link click count for each hour.",
    "parameters": [
      {
        "name": "domainId",
        "schema": "integer",
        "required": true,
        "description": "The unique domain identifier.",
        "example": 0
      },
      {
        "name": "linkId",
        "schema": "integer",
        "required": true,
        "description": "The unique link identifier.",
        "example": 0
      },
      {
        "name": "fromUnix",
        "schema": "integer",
        "required": false,
        "description": "The UTC unix timestamp, query returns values after this date."
      },
      {
        "name": "toUnix",
        "schema": "integer",
        "required": false,
        "description": "The UTC unix timestamp, query returns values before this date. Required if from_unix is specified."
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
    "url": "/{domain_id}/links/{link_id}/clicks/country",
    "method": "totalClicksByCountry",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Link Click Count Per Country",
    "typeScriptTag": "linkClickCountPerCountry",
    "description": "Returns the total click count per country.",
    "parameters": [
      {
        "name": "domainId",
        "schema": "integer",
        "required": true,
        "description": "The unique domain identifier.",
        "example": 0
      },
      {
        "name": "linkId",
        "schema": "integer",
        "required": true,
        "description": "The unique link identifier.",
        "example": 0
      },
      {
        "name": "fromUnix",
        "schema": "integer",
        "required": false,
        "description": "The UTC unix timestamp, query returns values after this date."
      },
      {
        "name": "toUnix",
        "schema": "integer",
        "required": false,
        "description": "The UTC unix timestamp, query returns values before this date. Required if from_unix is specified."
      },
      {
        "name": "userId",
        "schema": "undefined",
        "required": false,
        "description": "An optional parameter containing the user's ID to query. Elevated privileges are required to specify another. Defaults to current user. Valid value 'all' is allowed for users of elevated privileges."
      },
      {
        "name": "labelId",
        "schema": "undefined",
        "required": false,
        "description": "An optional parameter containing the label's ID to query."
      },
      {
        "name": "keyword",
        "schema": "string",
        "description": "Search link alias, notes, and redirect url for keyword"
      },
      {
        "name": "country",
        "schema": "string",
        "required": false,
        "description": "The country to query the values"
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "The page of to query the values from the paginated results."
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
    "url": "/{domain_id}/links/{link_id}/clicks/region",
    "method": "totalByRegion",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Link Click Count Per Region",
    "typeScriptTag": "linkClickCountPerRegion",
    "description": "Returns the total click count per region.",
    "parameters": [
      {
        "name": "domainId",
        "schema": "integer",
        "required": true,
        "description": "The unique domain identifier.",
        "example": 0
      },
      {
        "name": "linkId",
        "schema": "integer",
        "required": true,
        "description": "The unique link identifier.",
        "example": 0
      },
      {
        "name": "fromUnix",
        "schema": "integer",
        "required": false,
        "description": "The UTC unix timestamp, query returns values after this date."
      },
      {
        "name": "toUnix",
        "schema": "integer",
        "required": false,
        "description": "The UTC unix timestamp, query returns values before this date. Required if from_unix is specified."
      },
      {
        "name": "userId",
        "schema": "undefined",
        "required": false,
        "description": "An optional parameter containing the user's ID to query. Elevated privileges are required to specify another. Defaults to current user. Valid value 'all' is allowed for users of elevated privileges."
      },
      {
        "name": "labelId",
        "schema": "undefined",
        "required": false,
        "description": "An optional parameter containing the label's ID to query."
      },
      {
        "name": "keyword",
        "schema": "string",
        "description": "Search link alias, notes, and redirect url for keyword"
      },
      {
        "name": "country",
        "schema": "string",
        "required": false,
        "description": "The country to query the values"
      },
      {
        "name": "region",
        "schema": "string",
        "required": false,
        "description": "The region to query the values"
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "The page of to query the values from the paginated results."
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
    "url": "/{domain_id}/links/{link_id}/clicks/city",
    "method": "totalCountByCity",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Link Click Count Per City",
    "typeScriptTag": "linkClickCountPerCity",
    "description": "Returns the total click count per city.",
    "parameters": [
      {
        "name": "domainId",
        "schema": "integer",
        "required": true,
        "description": "The unique domain identifier.",
        "example": 0
      },
      {
        "name": "linkId",
        "schema": "integer",
        "required": true,
        "description": "The unique link identifier.",
        "example": 0
      },
      {
        "name": "fromUnix",
        "schema": "integer",
        "required": false,
        "description": "The UTC unix timestamp, query returns values after this date."
      },
      {
        "name": "toUnix",
        "schema": "integer",
        "required": false,
        "description": "The UTC unix timestamp, query returns values before this date. Required if from_unix is specified."
      },
      {
        "name": "userId",
        "schema": "undefined",
        "required": false,
        "description": "An optional parameter containing the user's ID to query. Elevated privileges are required to specify another. Defaults to current user. Valid value 'all' is allowed for users of elevated privileges."
      },
      {
        "name": "labelId",
        "schema": "undefined",
        "required": false,
        "description": "An optional parameter containing the label's ID to query."
      },
      {
        "name": "keyword",
        "schema": "string",
        "description": "Search link alias, notes, and redirect url for keyword"
      },
      {
        "name": "country",
        "schema": "string",
        "required": false,
        "description": "The country to query the values"
      },
      {
        "name": "region",
        "schema": "string",
        "required": false,
        "description": "The region to query the values"
      },
      {
        "name": "city",
        "schema": "string",
        "required": false,
        "description": "The city to query the values"
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "The page of to query the values from the paginated results."
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
    "url": "/{domain_id}/links/{link_id}/clicks/device",
    "method": "getTotalClicksByDevice",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Link Click Count Per Device",
    "typeScriptTag": "linkClickCountPerDevice",
    "description": "Returns the total click count per device.",
    "parameters": [
      {
        "name": "domainId",
        "schema": "integer",
        "required": true,
        "description": "The unique domain identifier.",
        "example": 0
      },
      {
        "name": "linkId",
        "schema": "integer",
        "required": true,
        "description": "The unique link identifier.",
        "example": 0
      },
      {
        "name": "fromUnix",
        "schema": "integer",
        "required": false,
        "description": "The UTC unix timestamp, query returns values after this date."
      },
      {
        "name": "toUnix",
        "schema": "integer",
        "required": false,
        "description": "The UTC unix timestamp, query returns values before this date. Required if from_unix is specified."
      },
      {
        "name": "userId",
        "schema": "undefined",
        "required": false,
        "description": "An optional parameter containing the user's ID to query. Elevated privileges are required to specify another. Defaults to current user. Valid value 'all' is allowed for users of elevated privileges."
      },
      {
        "name": "labelId",
        "schema": "undefined",
        "required": false,
        "description": "An optional parameter containing the label's ID to query."
      },
      {
        "name": "keyword",
        "schema": "string",
        "description": "Search link alias, notes, and redirect url for keyword"
      },
      {
        "name": "device",
        "schema": "string",
        "required": false,
        "description": "The device to query the values"
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "The page of to query the values from the paginated results."
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
    "url": "/{domain_id}/links/{link_id}/clicks/referrer",
    "method": "totalClicksByReferrer",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Link Click Count Per Referrer",
    "typeScriptTag": "linkClickCountPerReferrer",
    "description": "Returns the total click count per referrer.",
    "parameters": [
      {
        "name": "domainId",
        "schema": "integer",
        "required": true,
        "description": "The unique domain identifier.",
        "example": 0
      },
      {
        "name": "linkId",
        "schema": "integer",
        "required": true,
        "description": "The unique link identifier.",
        "example": 0
      },
      {
        "name": "fromUnix",
        "schema": "integer",
        "required": false,
        "description": "The UTC unix timestamp, query returns values after this date."
      },
      {
        "name": "toUnix",
        "schema": "integer",
        "required": false,
        "description": "The UTC unix timestamp, query returns values before this date. Required if from_unix is specified."
      },
      {
        "name": "userId",
        "schema": "undefined",
        "required": false,
        "description": "An optional parameter containing the user's ID to query. Elevated privileges are required to specify another. Defaults to current user. Valid value 'all' is allowed for users of elevated privileges."
      },
      {
        "name": "labelId",
        "schema": "undefined",
        "required": false,
        "description": "An optional parameter containing the label's ID to query."
      },
      {
        "name": "keyword",
        "schema": "string",
        "description": "Search link alias, notes, and redirect url for keyword"
      },
      {
        "name": "referrer",
        "schema": "string",
        "required": false,
        "description": "The referrer to query the values"
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "The page of to query the values from the paginated results. Defaults to 1."
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
    "url": "/{domain_id}/links/{link_id}/rawclicks",
    "method": "getClicksInfo",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Link Raw Clicks",
    "typeScriptTag": "linkRawClicks",
    "description": "Returns a list of clicks and their information based on the parameters.",
    "parameters": [
      {
        "name": "domainId",
        "schema": "integer",
        "required": true,
        "description": "The unique domain identifier.",
        "example": 0
      },
      {
        "name": "linkId",
        "schema": "integer",
        "required": true,
        "description": "The unique link identifier.",
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
    "url": "/tags",
    "method": "listByDomainId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Tags",
    "typeScriptTag": "tags",
    "description": "Returns a list of tags.",
    "parameters": [
      {
        "name": "domainId",
        "schema": "integer",
        "required": true,
        "description": "Domain ID to query by",
        "example": 0
      },
      {
        "name": "search",
        "schema": "string",
        "description": "Tag name to query by"
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
    "url": "/tags",
    "method": "createNewTag",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Tags",
    "typeScriptTag": "tags",
    "description": "Creates a new tag",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "domain_id",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "shared",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "notes",
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
      }
    ]
  },
  {
    "url": "/domains",
    "method": "getActiveList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "List Domains",
    "typeScriptTag": "listDomains",
    "description": "Returns a list of the user's active domains",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "description": "Page number"
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
    "url": "/domains",
    "method": "newDomain",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Create Domain",
    "typeScriptTag": "createDomain",
    "description": "Creates a new domain on the user's account",
    "parameters": [
      {
        "name": "domain",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DOMAIN"
      },
      {
        "name": "default",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "url_404",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "homepage",
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
    "url": "/domains?domain_name={domain_name}",
    "method": "userRequestedDomainList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Get Domain by Domain Name",
    "typeScriptTag": "getDomainByDomainName",
    "description": "Returns a list of the user's requested domain",
    "parameters": [
      {
        "name": "domainName",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DOMAIN_NAME"
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
    "url": "/domains/{domain_id}",
    "method": "andLinks",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Delete Domain",
    "typeScriptTag": "deleteDomain",
    "description": "Delete the domain in question including all its links",
    "parameters": [
      {
        "name": "domainId",
        "schema": "integer",
        "required": true,
        "description": "",
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
    "url": "/domains/{domain_id}",
    "method": "userRequestedDomain",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Get Domain by ID",
    "typeScriptTag": "getDomainById",
    "description": "Returns a list of the user's requested domain",
    "parameters": [
      {
        "name": "domainId",
        "schema": "integer",
        "required": true,
        "description": "",
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
    "url": "/domains/{domain_id}",
    "method": "objectAsPartOfResponse",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Update Domain",
    "typeScriptTag": "updateDomain",
    "description": "Updates the domain in question",
    "parameters": [
      {
        "name": "domainId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "op",
        "schema": "string",
        "description": ""
      },
      {
        "name": "path",
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
      }
    ]
  },
  {
    "url": "/utm_templates",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "List UTM Templates",
    "typeScriptTag": "listUtmTemplates",
    "description": "Returns a list of available UTM templates",
    "parameters": [
      {
        "name": "domainId",
        "schema": "integer",
        "required": true,
        "description": "Domain ID to query by",
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
    "url": "/groups",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "List Groups",
    "typeScriptTag": "listGroups",
    "description": "Returns a list of available groups",
    "parameters": [
      {
        "name": "domainId",
        "schema": "integer",
        "required": true,
        "description": "Domain ID to query by",
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
    "url": "/error_codes",
    "method": "listErrorCodes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Error Codes",
    "typeScriptTag": "errorCodes",
    "description": "List Error Codes",
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
      apiTitle="Version 4 of the BL.INK API"
      apiBaseUrl="https://{instance}.bl.ink/api/v4"
      apiVersion="4.0.0"
      endpoints={31}
      sdkMethods={41}
      schemas={46}
      parameters={170}
      difficulty="Easy"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/bl-ink/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/bl-ink/openapi.yaml"
      developerDocumentation="developers.bl.ink/"
    />
  );
}
  