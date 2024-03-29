import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function SeOmonitorTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="seo-monitor-typescript-sdk"
      metaDescription={`SEOmonitor is the platform that empowers SEO agencies to plan and track keyword performance with high accuracy, connect organic keywords with conversions and sessions, forecast SEO with high precision & algorithm transparency, and research keywords and websites with no restrictions to data. All of that is connected in a specifically designed dashboard that gathers all critical customer data in one place. API, Google Sheets, and Data Studio are included in a dynamic subscription — where users pay only for what they use.`}
      company="SEOmonitor"
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/seomonitor/logo.png"
      companyKebabCase="se-omonitor"
      clientNameCamelCase="seoMonitor"
      homepage="seomonitor.com"
      lastUpdated={new Date("2024-03-29T23:26:36.999Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/seomonitor/favicon.png"
      // Missing contactUrl
      // Missing contactEmail
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/seomonitor/imagePreview.png"
      GettingStarted={GettingStarted}
      FirstRequest={FirstRequest}
      categories={["seo","analytics"]}
      methods={[
  {
    "url": "/keyword_canibalization/{site_id}/{group_id}",
    "method": "listCanibalizationKeywords",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Keyword Data",
    "typeScriptTag": "keywordData",
    "description": "Keyword Canibalization",
    "parameters": [
      {
        "name": "siteId",
        "schema": "undefined",
        "required": true,
        "description": "The unique site identifier"
      },
      {
        "name": "groupId",
        "schema": "undefined",
        "required": true,
        "description": "The unique group identifier. 0 for 'All keywords'"
      },
      {
        "name": "startDate",
        "schema": "undefined",
        "required": false,
        "description": "Start Date"
      },
      {
        "name": "endDate",
        "schema": "undefined",
        "required": false,
        "description": "End Date"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "An array of keywords"
      },
      {
        "statusCode": "default",
        "description": "Unexpected error"
      }
    ]
  },
  {
    "url": "/sites",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Sites",
    "typeScriptTag": "sites",
    "description": "Sites",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "An array of sites"
      },
      {
        "statusCode": "default",
        "description": "Unexpected error"
      }
    ]
  },
  {
    "url": "/on_target/{site_id}",
    "method": "trafficForecastStatus",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Forecast",
    "typeScriptTag": "forecast",
    "description": "Forecast",
    "parameters": [
      {
        "name": "siteId",
        "schema": "undefined",
        "required": true,
        "description": "The unique site identifier"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": "Unexpected error"
      }
    ]
  },
  {
    "url": "/on_target/by_dates/{site_id}",
    "method": "objectiveData",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Forecast",
    "typeScriptTag": "forecast",
    "description": "Objective/Forecast",
    "parameters": [
      {
        "name": "siteId",
        "schema": "undefined",
        "required": true,
        "description": "The unique site identifier"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "It returns the traffic forecast data for the last 12 months for the selected website, such as: month, search volume, real traffic, estimated traffic and visibility score."
      },
      {
        "statusCode": "default",
        "description": "Unexpected error"
      }
    ]
  },
  {
    "url": "/keyword_groups/{site_id}/{date_start}/{date_end}",
    "method": "getKeywordGroups",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Groups",
    "typeScriptTag": "groups",
    "description": "Keyword Groups",
    "parameters": [
      {
        "name": "siteId",
        "schema": "undefined",
        "required": true,
        "description": "The unique site identifier"
      },
      {
        "name": "dateStart",
        "schema": "undefined",
        "required": true,
        "description": "The start of the period. (Accepts date format as YYYY-mm-dd or relative like \"1 week ago\", \"3 months ago\", etc.)"
      },
      {
        "name": "dateEnd",
        "schema": "undefined",
        "required": true,
        "description": "The end of the period. (Accepts date format as YYYY-mm-dd or relative like \"now\", \"today\", etc.)"
      },
      {
        "name": "offset",
        "schema": "undefined",
        "description": "By default, a request is limited to 1000 groups (or 10 if load_keywords_ids is active), if you want more you can set the offset"
      },
      {
        "name": "limit",
        "schema": "undefined",
        "description": "By default, a request is limited to 1000 groups (or 10 if load_keywords_ids is active). Use the limit parameter to change the number of results per request (max. 10 if load_keyword_ids is active)"
      },
      {
        "name": "loadKeywordIds",
        "schema": "undefined",
        "description": "Loads Keyword IDs in the keywords array if set to 1. When active, the response is limited to 10 groups"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "An array of groups"
      },
      {
        "statusCode": "default",
        "description": "Unexpected error"
      }
    ]
  },
  {
    "url": "/groups_list/{site_id}",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Groups",
    "typeScriptTag": "groups",
    "description": "Groups List",
    "parameters": [
      {
        "name": "siteId",
        "schema": "undefined",
        "required": true,
        "description": "The unique site identifier"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "It returns Group ID, Group name and Group type (normal or smart) for the selected website."
      },
      {
        "statusCode": "default",
        "description": "Unexpected error"
      }
    ]
  },
  {
    "url": "/group_details/{site_id}/{group_id}/{date_start}/{date_end}",
    "method": "getPerformanceData",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Groups",
    "typeScriptTag": "groups",
    "description": "Group Performance",
    "parameters": [
      {
        "name": "siteId",
        "schema": "undefined",
        "required": true,
        "description": "The unique site identifier"
      },
      {
        "name": "groupId",
        "schema": "undefined",
        "required": true,
        "description": "The group identifier"
      },
      {
        "name": "dateStart",
        "schema": "undefined",
        "required": true,
        "description": "The start of the period. (Accepts date format as YYYY-mm-dd or relative like \"1 week ago\", \"3 months ago\", etc.)"
      },
      {
        "name": "dateEnd",
        "schema": "undefined",
        "required": true,
        "description": "The end of the period. (Accepts date format as YYYY-mm-dd or relative like \"now\", \"today\", etc.)"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "An array of groups"
      },
      {
        "statusCode": "default",
        "description": "Unexpected error"
      }
    ]
  },
  {
    "url": "/all_group_details/{site_id}/{date_start}/{date_end}",
    "method": "getKeywordsDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Groups",
    "typeScriptTag": "groups",
    "description": "Group performance",
    "parameters": [
      {
        "name": "siteId",
        "schema": "undefined",
        "required": true,
        "description": "The unique site identifier"
      },
      {
        "name": "dateStart",
        "schema": "undefined",
        "required": true,
        "description": "The start of the period. (Accepts date format as YYYY-mm-dd or relative like \"1 week ago\", \"3 months ago\", etc.)"
      },
      {
        "name": "dateEnd",
        "schema": "undefined",
        "required": true,
        "description": "The end of the period. (Accepts date format as YYYY-mm-dd or relative like \"now\", \"today\", etc.)"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "An array of groups"
      },
      {
        "statusCode": "default",
        "description": "Unexpected error"
      }
    ]
  },
  {
    "url": "/keyword_data/{site_id}/{date_start}/{date_end}",
    "method": "getDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Keyword Data",
    "typeScriptTag": "keywordData",
    "description": "Keyword Data",
    "parameters": [
      {
        "name": "siteId",
        "schema": "undefined",
        "required": true,
        "description": "The unique site identifier"
      },
      {
        "name": "dateStart",
        "schema": "undefined",
        "required": true,
        "description": "The start of the period. (Accepts date format as YYYY-mm-dd or relative like \"1 week ago\", \"3 months ago\", etc.)"
      },
      {
        "name": "dateEnd",
        "schema": "undefined",
        "required": true,
        "description": "The end of the period. (Accepts date format as YYYY-mm-dd or relative like \"now\", \"today\", etc.)"
      },
      {
        "name": "offset",
        "schema": "undefined",
        "description": "By default a  request is limited to 1000 rows, if you want more you can set the offset"
      },
      {
        "name": "keywordName",
        "schema": "undefined",
        "required": false,
        "description": "The keyword name you wish to retrieve data for"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "An array of keywords details"
      },
      {
        "statusCode": "default",
        "description": "Unexpected error"
      }
    ]
  },
  {
    "url": "/keyword_data/{site_id}/{group_id}/{date_start}/{date_end}",
    "method": "getPerformance",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Keyword Data",
    "typeScriptTag": "keywordData",
    "description": "Keyword Performance",
    "parameters": [
      {
        "name": "siteId",
        "schema": "undefined",
        "required": true,
        "description": "The unique site identifier"
      },
      {
        "name": "groupId",
        "schema": "undefined",
        "required": true,
        "description": "Group id. For Brand folder you can use `brand` as value for group id"
      },
      {
        "name": "dateStart",
        "schema": "undefined",
        "required": true,
        "description": "The start of the period. (Accepts date format as YYYY-mm-dd or relative like \"1 week ago\", \"3 months ago\", etc.)"
      },
      {
        "name": "dateEnd",
        "schema": "undefined",
        "required": true,
        "description": "The end of the period. (Accepts date format as YYYY-mm-dd or relative like \"now\", \"today\", etc.)"
      },
      {
        "name": "offset",
        "schema": "undefined",
        "description": "By default, a request is limited to 1000 rows. If you need to get more, you can set an offset, accordingly (an offset of 1000 will provide the following 1000 rows). \n For example, if you need rows 3000-4000, you would set the offset at 3000."
      },
      {
        "name": "keywordName",
        "schema": "undefined",
        "required": false,
        "description": "The keyword (name, not ID) you need data for."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Keyword details for a specific group."
      },
      {
        "statusCode": "default",
        "description": "Unexpected error"
      }
    ]
  },
  {
    "url": "/ranks/{site_id}/{date_start}/{date_end}",
    "method": "getDesktopMobileRanks",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Ranks",
    "typeScriptTag": "ranks",
    "description": "Ranks",
    "parameters": [
      {
        "name": "siteId",
        "schema": "undefined",
        "required": true,
        "description": "The unique site identifier"
      },
      {
        "name": "dateStart",
        "schema": "undefined",
        "required": true,
        "description": "The start of the period. (Accepts date format as YYYY-mm-dd or relative like \"1 week ago\", \"3 months ago\", etc.)"
      },
      {
        "name": "dateEnd",
        "schema": "undefined",
        "required": true,
        "description": "The end of the period. (Accepts date format as YYYY-mm-dd or relative like \"now\", \"today\", etc.)"
      },
      {
        "name": "offset",
        "schema": "undefined",
        "description": "By default a rank request is limited to 100 keywords, if you want the next 100 keywords you can set the offset"
      },
      {
        "name": "limit",
        "schema": "undefined",
        "description": "If this field is not set, default value is 100.If this field is set, allowed values are between 100 and 1000"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "An array of positions grouped by keyword"
      },
      {
        "statusCode": "default",
        "description": "Unexpected error"
      }
    ]
  },
  {
    "url": "/ranks/{site_id}/{date_start}/{date_end}/{group_id}",
    "method": "getGroupRanks",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Ranks",
    "typeScriptTag": "ranks",
    "description": "Keywords Ranks",
    "parameters": [
      {
        "name": "siteId",
        "schema": "undefined",
        "required": true,
        "description": "The unique site identifier"
      },
      {
        "name": "groupId",
        "schema": "undefined",
        "required": true,
        "description": "The unique group identifier"
      },
      {
        "name": "dateStart",
        "schema": "undefined",
        "required": true,
        "description": "The start of the period. (Accepts date format as YYYY-mm-dd or relative like \"1 week ago\", \"3 months ago\", etc.)"
      },
      {
        "name": "dateEnd",
        "schema": "undefined",
        "required": true,
        "description": "The end of the period. (Accepts date format as YYYY-mm-dd or relative like \"now\", \"today\", etc.)"
      },
      {
        "name": "offset",
        "schema": "undefined",
        "description": "By default, a rank request is limited to 100 keywords. If you need to get more, you can set an offset, accordingly (an offset of 100 will provide the following 100 keywords). \n For example, if you need keywords 300-400, you would set the offset at 300."
      },
      {
        "name": "limit",
        "schema": "undefined",
        "description": "If this field is not set, default value is 100.If this field is set, allowed values are between 100 and 1000"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "An array of positions grouped by keyword"
      },
      {
        "statusCode": "default",
        "description": "Unexpected error"
      }
    ]
  },
  {
    "url": "/organic_traffic/{site_id}/{date_start}/{date_end}",
    "method": "getPerformanceData",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Organic Traffic",
    "typeScriptTag": "organicTraffic",
    "description": "Organic Traffic Performance",
    "parameters": [
      {
        "name": "siteId",
        "schema": "undefined",
        "required": true,
        "description": "The unique site identifier"
      },
      {
        "name": "dateStart",
        "schema": "undefined",
        "required": true,
        "description": "The start of the period. (Accepts date format as YYYY-mm-dd or relative like \"1 week ago\", \"3 months ago\", etc.)"
      },
      {
        "name": "dateEnd",
        "schema": "undefined",
        "required": true,
        "description": "The end of the period. (Accepts date format as YYYY-mm-dd or relative like \"now\", \"today\", etc.)"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "An array of Organic Traffic statistics grouped by date"
      },
      {
        "statusCode": "default",
        "description": "Unexpected error"
      }
    ]
  },
  {
    "url": "/organic_traffic/split/{site_id}/{date_start}/{date_end}",
    "method": "splitByDates",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Organic Traffic",
    "typeScriptTag": "organicTraffic",
    "description": "Organic Traffic",
    "parameters": [
      {
        "name": "siteId",
        "schema": "undefined",
        "required": true,
        "description": "The unique site identifier"
      },
      {
        "name": "dateStart",
        "schema": "undefined",
        "required": true,
        "description": "The start of the period. (Accepts date format as YYYY-mm-dd or relative like \"1 week ago\", \"3 months ago\", etc.)"
      },
      {
        "name": "dateEnd",
        "schema": "undefined",
        "required": true,
        "description": "The end of the period. (Accepts date format as YYYY-mm-dd or relative like \"now\", \"today\", etc.)"
      },
      {
        "name": "type",
        "schema": "undefined",
        "description": "Possible values: brand | non-brand."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "An array of Organic Traffic statistics grouped by date"
      },
      {
        "statusCode": "default",
        "description": "Unexpected error"
      }
    ]
  },
  {
    "url": "/content/{site_id}/{date_start}/{date_end}",
    "method": "getPerformanceData",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Content Performance",
    "typeScriptTag": "contentPerformance",
    "description": "Content Performance",
    "parameters": [
      {
        "name": "siteId",
        "schema": "undefined",
        "required": true,
        "description": "The unique site identifier"
      },
      {
        "name": "dateStart",
        "schema": "undefined",
        "required": true,
        "description": "The start of the period. (Accepts date format as YYYY-mm-dd or relative like \"1 week ago\", \"3 months ago\", etc.)"
      },
      {
        "name": "dateEnd",
        "schema": "undefined",
        "required": true,
        "description": "The end of the period. (Accepts date format as YYYY-mm-dd or relative like \"now\", \"today\", etc.)"
      },
      {
        "name": "offset",
        "schema": "undefined",
        "required": false,
        "description": "By default, a request is limited to 1000 rows. If you need to get more, you can set an offset, accordingly (an offset of 1000 will provide the following 1000 rows). \n For example, if you need rows 3000-4000, you would set the offset at 3000."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "List of articles associated to your site"
      },
      {
        "statusCode": "default",
        "description": "Unexpected error"
      }
    ]
  },
  {
    "url": "/keyword_serp/{site_id}",
    "method": "getCompetitors",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Keyword SERP",
    "typeScriptTag": "keywordSerp",
    "description": "Keyword Competitors",
    "parameters": [
      {
        "name": "siteId",
        "schema": "undefined",
        "required": true,
        "description": "The unique site identifier"
      },
      {
        "name": "keywordName",
        "schema": "undefined",
        "required": true,
        "description": "The keyword name"
      },
      {
        "name": "queryEndDate",
        "schema": "undefined",
        "required": true,
        "description": "The end of the period. (Accepts date format as YYYY-mm-dd or relative like \"now\", \"today\", etc.)"
      },
      {
        "name": "mobile",
        "schema": "undefined",
        "description": "Check to retrieve mobile landing pages."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "An array of landing pages"
      },
      {
        "statusCode": "default",
        "description": "Unexpected error"
      }
    ]
  },
  {
    "url": "/visibility_score_data/{site_id}/{group_id}/{date_start}/{date_end}",
    "method": "dailyVisibilityData",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Visibility Score",
    "typeScriptTag": "visibilityScore",
    "description": "Daily Visibility",
    "parameters": [
      {
        "name": "siteId",
        "schema": "undefined",
        "required": true,
        "description": "The unique site identifier"
      },
      {
        "name": "groupId",
        "schema": "undefined",
        "required": true,
        "description": "The unique group identifier"
      },
      {
        "name": "dateStart",
        "schema": "undefined",
        "required": true,
        "description": "The start of the period. (Accepts date format as YYYY-mm-dd or relative like \"1 week ago\", \"3 months ago\", etc.)"
      },
      {
        "name": "dateEnd",
        "schema": "undefined",
        "required": true,
        "description": "The end of the period. (Accepts date format as YYYY-mm-dd or relative like \"now\", \"today\", etc.)"
      },
      {
        "name": "device",
        "schema": "undefined",
        "required": false,
        "description": "Device value. If it's not provided, default value is 1 (https://api.seomonitor.com/api-docs. Get all devices from &quot;/devices&quot; endpoint. Possible values: 1 or 2"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "An array containing dates and visibility scores for each date"
      },
      {
        "statusCode": "default",
        "description": "Unexpected error"
      }
    ]
  },
  {
    "url": "/visibility_score/{site_id}/{group_id}/{date_start}/{date_end}",
    "method": "getByDateRange",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Visibility Score",
    "typeScriptTag": "visibilityScore",
    "description": "Visibility scores",
    "parameters": [
      {
        "name": "siteId",
        "schema": "undefined",
        "required": true,
        "description": "The unique site identifier"
      },
      {
        "name": "groupId",
        "schema": "undefined",
        "required": true,
        "description": "The unique group identifier"
      },
      {
        "name": "dateStart",
        "schema": "undefined",
        "required": true,
        "description": "The start of the period. (Accepts date format as YYYY-mm-dd or relative like \"1 week ago\", \"3 months ago\", etc.)"
      },
      {
        "name": "dateEnd",
        "schema": "undefined",
        "required": true,
        "description": "The end of the period. (Accepts date format as YYYY-mm-dd or relative like \"now\", \"today\", etc.)"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "An array of visibility scores"
      },
      {
        "statusCode": "default",
        "description": "Unexpected error"
      }
    ]
  },
  {
    "url": "/compare/keywords/{site_id}/{start_date}/{end_date}/{competitors}",
    "method": "competitorKeywords",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Compare",
    "typeScriptTag": "compare",
    "description": "Get competitors keywords",
    "parameters": [
      {
        "name": "siteId",
        "schema": "undefined",
        "required": true,
        "description": "The unique site identifier"
      },
      {
        "name": "startDate",
        "schema": "undefined",
        "required": true,
        "description": "The start of the period. (Relative date)"
      },
      {
        "name": "endDate",
        "schema": "undefined",
        "required": true,
        "description": "The end of the period. (Relative date)"
      },
      {
        "name": "competitors",
        "schema": "undefined",
        "required": true,
        "description": "Maximum 10 competitors, separated by comma."
      },
      {
        "name": "offset",
        "schema": "undefined",
        "description": "By default a  request is limited to 1000 rows, if you want more you can set the offset"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Competition data for keywords"
      },
      {
        "statusCode": "default",
        "description": "Unexpected error"
      }
    ]
  },
  {
    "url": "/compare/keywords/{site_id}/{start_date}/{end_date}/{competitors}/{group_id}",
    "method": "competitorRankings",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Compare",
    "typeScriptTag": "compare",
    "description": "Competitors' Rankings",
    "parameters": [
      {
        "name": "siteId",
        "schema": "undefined",
        "required": true,
        "description": "The unique site identifier"
      },
      {
        "name": "startDate",
        "schema": "undefined",
        "required": true,
        "description": "The start of the period. (Relative date)"
      },
      {
        "name": "endDate",
        "schema": "undefined",
        "required": true,
        "description": "The end of the period. (Relative date)"
      },
      {
        "name": "competitors",
        "schema": "undefined",
        "required": true,
        "description": "Maximum 10 competitors, separated by comma."
      },
      {
        "name": "groupId",
        "schema": "undefined",
        "required": false,
        "description": "Group id from /groups_list/{site_id}. If it's not provided, default group is 'All keywords'"
      },
      {
        "name": "device",
        "schema": "undefined",
        "description": "Check to retrieve mobile data."
      },
      {
        "name": "offset",
        "schema": "undefined",
        "description": "By default, a request is limited to 1000 rows. If you need to get more, you can set an offset, accordingly (an offset of 1000 will provide the following 1000 rows). \n For example, if you need rows 3000-4000, you would set the offset at 3000."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Competition data for keywords"
      },
      {
        "statusCode": "default",
        "description": "Unexpected error"
      }
    ]
  },
  {
    "url": "/compare/competitors/visibility_score/{site_id}/{start_date}/{end_date}",
    "method": "competitorsVisibilityScore",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Compare",
    "typeScriptTag": "compare",
    "description": "Get competitors visibility score",
    "parameters": [
      {
        "name": "siteId",
        "schema": "undefined",
        "required": true,
        "description": "The unique site identifier"
      },
      {
        "name": "startDate",
        "schema": "undefined",
        "required": true,
        "description": "The start of the period. (Relative date)"
      },
      {
        "name": "endDate",
        "schema": "undefined",
        "required": true,
        "description": "The end of the period. (Relative date)"
      },
      {
        "name": "groupId",
        "schema": "undefined",
        "required": false,
        "description": "Group id from /groups_list/{site_id}. If it's not provided, default group is &quotAll keywords&quot.  Use comma for multiple groups (Eg: group_id_1,group_id_2) "
      },
      {
        "name": "competitors",
        "schema": "undefined",
        "required": false,
        "description": "Maximum 10 competitors, separated by comma."
      },
      {
        "name": "device",
        "schema": "undefined",
        "required": false,
        "description": "Device value. If it's not provided, default value is 1 (https://api.seomonitor.com/api-docs. Get all devices from &quot;/devices&quot; endpoint. Possible values: 1 or 2"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "An array with all marked as \"default over all groups\" in competitors and their visibility score on interval [startDate - endDate ]"
      },
      {
        "statusCode": "default",
        "description": "Unexpected error"
      }
    ]
  },
  {
    "url": "/compare/competitors/visibility_score/{site_id}/{start_date}/{end_date}/{competitors}/{group_id}",
    "method": "dailyVisibility",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Compare",
    "typeScriptTag": "compare",
    "description": "Competitors' Daily visibility",
    "parameters": [
      {
        "name": "siteId",
        "schema": "undefined",
        "required": true,
        "description": "The unique site identifier"
      },
      {
        "name": "startDate",
        "schema": "undefined",
        "required": true,
        "description": "The start of the period. (Relative date)"
      },
      {
        "name": "endDate",
        "schema": "undefined",
        "required": true,
        "description": "The end of the period. (Relative date)"
      },
      {
        "name": "competitors",
        "schema": "undefined",
        "required": true,
        "description": "Maximum 10 competitors, separated by comma."
      },
      {
        "name": "groupId",
        "schema": "undefined",
        "required": false,
        "description": "Group id from /groups_list/{site_id}. If it's not provided, default group is &quotAll keywords&quot "
      },
      {
        "name": "device",
        "schema": "undefined",
        "required": false,
        "description": "Device value. If it's not provided, default value is 1 (https://api.seomonitor.com/api-docs. Get all devices from &quot;/devices&quot; endpoint. Possible values: 1 or 2"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "An array with all competitors and their visibility score on interval [startDate - endDate ]"
      },
      {
        "statusCode": "default",
        "description": "Unexpected error"
      }
    ]
  },
  {
    "url": "/devices",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Devices",
    "typeScriptTag": "devices",
    "description": "Get all devices",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "Result with all devices"
      }
    ]
  }
]
    }
      language="TypeScript"
      apiTitle="SEOmonitor API"
      apiBaseUrl="https://api.internal.seomonitor.com/api/v1.2"
      apiVersion="1.2"
      endpoints={23}
      sdkMethods={23}
      schemas={0}
      parameters={90}
      difficulty="Easy"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/seomonitor/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/seomonitor/openapi.yaml"
      developerDocumentation="api.seomonitor.com/api-docs"
    />
  );
}
  