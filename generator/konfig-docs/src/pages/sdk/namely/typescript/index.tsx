import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function NamelyTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="namely-typescript-sdk"
      metaDescription={`Namely is the HR, Payroll, and Benefits platform your employees will love. Finally, there's HR software that employees actually use—built to fit your company culture. Manage all of your HR data in one place, with personalized service to help your company get better, faster. Namely is used by some of the world's most innovative and exciting companies in media, technology, commerce, and more.`}
      company="Namely"
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/namely/logo.png"
      companyKebabCase="namely"
      clientNameCamelCase="namely"
      homepage="namely.com"
      lastUpdated={new Date("2024-03-26T20:08:08.101Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/namely/favicon.png"
      // Missing contactUrl
      // Missing contactEmail
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/namely/imagePreview.png"
      GettingStarted={GettingStarted}
      FirstRequest={FirstRequest}
      categories={["hr","payroll","benefits","compliance","hr_analytics","talent"]}
      methods={[
  {
    "url": "/companies/info",
    "method": "getInfo",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Company Info",
    "typeScriptTag": "companyInfo",
    "description": "Company Info",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/folders",
    "method": "folders",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Company Resources",
    "typeScriptTag": "companyResources",
    "description": "Get all Folders",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/folders",
    "method": "folders",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Company Resources",
    "typeScriptTag": "companyResources",
    "description": "Create Folder",
    "parameters": [
      {
        "name": "folders",
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
    "url": "/resources/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Company Resources",
    "typeScriptTag": "companyResources",
    "description": "Get a Resource",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/folders/{id}/resources",
    "method": "deleteResourceById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Company Resources",
    "typeScriptTag": "companyResources",
    "description": "Delete Resource",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "Successful Response"
      }
    ]
  },
  {
    "url": "/folders/{id}/resources",
    "method": "getFolderResources",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Company Resources",
    "typeScriptTag": "companyResources",
    "description": "Get Resources in a Folder",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/resources",
    "method": "resources",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Company Resources",
    "typeScriptTag": "companyResources",
    "description": "Get Resources not in a Folder",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/folders/{id}",
    "method": "deleteFolderById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Company Resources",
    "typeScriptTag": "companyResources",
    "description": "Delete Folder",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "Successful Response"
      }
    ]
  },
  {
    "url": "/folders/{id}",
    "method": "updateFolderName",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Company Resources",
    "typeScriptTag": "companyResources",
    "description": "Update Folder",
    "parameters": [
      {
        "name": "folders",
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
    "url": "/groups",
    "method": "groups",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Groups & Teams",
    "typeScriptTag": "groups &Teams",
    "description": "Get all Groups",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/groups/{id}",
    "method": "getGroupDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Groups & Teams",
    "typeScriptTag": "groups &Teams",
    "description": "Get a Group",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/group_types",
    "method": "getAllGroupTypes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Groups & Teams",
    "typeScriptTag": "groups &Teams",
    "description": "Get all Group Types",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/group_types/{id}",
    "method": "getGroupTypeDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Groups & Teams",
    "typeScriptTag": "groups &Teams",
    "description": "Get a Group Type",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/group_types/{id}/groups",
    "method": "getGroupTypeGroups",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Groups & Teams",
    "typeScriptTag": "groups &Teams",
    "description": "Get Groups from Group Type",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/teams",
    "method": "teams",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Groups & Teams",
    "typeScriptTag": "groups &Teams",
    "description": "Get all Teams",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/teams/{id}",
    "method": "get",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Groups & Teams",
    "typeScriptTag": "groups &Teams",
    "description": "Get a Team",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/events",
    "method": "events",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Home Feed",
    "typeScriptTag": "homeFeed",
    "description": "Get all Events",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "description": "Limit of records to be retrieved",
        "default": ""
      },
      {
        "name": "after",
        "schema": "string",
        "description": "<code>id</code> of the first record BEFORE the events you want to retrieve"
      },
      {
        "name": "filter[type]",
        "schema": "string",
        "description": "The type of event you want to retrieve; examples include `birthday`, `announcement`, `recent_arrival` or `anniversary`"
      },
      {
        "name": "profileId",
        "schema": "string",
        "description": "<code>id</code> of the profile that you wish to pull all associated events from"
      },
      {
        "name": "order",
        "schema": "string",
        "description": "This parameter allows you to change how results are ordered. Valid values are `asc` and `desc` - It defaults to `desc`"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/events",
    "method": "events",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Home Feed",
    "typeScriptTag": "homeFeed",
    "description": "Create an Announcement",
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
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/events/{id}",
    "method": "deleteAnnouncement",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Home Feed",
    "typeScriptTag": "homeFeed",
    "description": "Delete an Announcement",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/events/{id}",
    "method": "getEvent",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Home Feed",
    "typeScriptTag": "homeFeed",
    "description": "Get an Event",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/events/{event-id}/comments",
    "method": "getEventComments",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Home Feed",
    "typeScriptTag": "homeFeed",
    "description": "Get an Event's Comments",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/likes/event/{event-id}/recent",
    "method": "getEventLikes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Home Feed",
    "typeScriptTag": "homeFeed",
    "description": "Get an Event's Likes",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/likes/event_comment/{comment-id}/recent",
    "method": "getEventCommentLikes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Home Feed",
    "typeScriptTag": "homeFeed",
    "description": "Get an Event's Comment's Likes",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/events/{id}/comments",
    "method": "createEventComment",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Home Feed",
    "typeScriptTag": "homeFeed",
    "description": "Create an Event's Comment",
    "parameters": [
      {
        "name": "comments",
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
    "url": "/likes/event/{id}",
    "method": "createEventLike",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Home Feed",
    "typeScriptTag": "homeFeed",
    "description": "Create an Event's Like",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/likes/event_comment/{comment-id}",
    "method": "deleteEventCommentLike",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Home Feed",
    "typeScriptTag": "homeFeed",
    "description": "Delete an Event's Comment's Like",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/likes/event_comment/{comment-id}",
    "method": "likeEventComment",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Home Feed",
    "typeScriptTag": "homeFeed",
    "description": "Create an Event's Comment's Like",
    "parameters": [],
    "responses": [
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/events/{event-id}/comments/{comment-id}",
    "method": "removeEventComment",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Home Feed",
    "typeScriptTag": "homeFeed",
    "description": "Delete an Event's Comment",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/likes/event/{event-id}",
    "method": "removeEventLike",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Home Feed",
    "typeScriptTag": "homeFeed",
    "description": "Delete an Event's Like",
    "parameters": [
      {
        "name": "message",
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
    "url": "/job_tiers",
    "method": "getAllJobTiers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Jobs Info",
    "typeScriptTag": "jobsInfo",
    "description": "Get all Job Tiers",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/job_tiers",
    "method": "createJobTier",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Jobs Info",
    "typeScriptTag": "jobsInfo",
    "description": "Create a Job Tier",
    "parameters": [
      {
        "name": "job_tiers",
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
    "url": "/job_tiers/{id}",
    "method": "getJobTier",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Jobs Info",
    "typeScriptTag": "jobsInfo",
    "description": "Get a Job Tier",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/job_tiers/{id}",
    "method": "updateLabel",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Jobs Info",
    "typeScriptTag": "jobsInfo",
    "description": "Update a Job Tier",
    "parameters": [
      {
        "name": "job_tiers",
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
    "url": "/job_titles",
    "method": "getAllJobTitles",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Jobs Info",
    "typeScriptTag": "jobsInfo",
    "description": "Get all Job Titles",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/job_titles",
    "method": "createJobTitle",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Jobs Info",
    "typeScriptTag": "jobsInfo",
    "description": "Create a Job Title",
    "parameters": [
      {
        "name": "job_titles",
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
    "url": "/job_titles/{id}",
    "method": "getJobTitleById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Jobs Info",
    "typeScriptTag": "jobsInfo",
    "description": "Get a Job Title",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/job_titles/{id}",
    "method": "updateJobTitle",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Jobs Info",
    "typeScriptTag": "jobsInfo",
    "description": "Update a Job Title",
    "parameters": [
      {
        "name": "job_titles",
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
    "url": "/countries",
    "method": "countries",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Namely System Info",
    "typeScriptTag": "namelySystemInfo",
    "description": "Get all Countries",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/countries/{id}",
    "method": "getCountryDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Namely System Info",
    "typeScriptTag": "namelySystemInfo",
    "description": "Get a Country",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/notifications",
    "method": "notifications",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Notifications",
    "typeScriptTag": "notifications",
    "description": "Get all Notifications",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/profiles/{id}/notifications",
    "method": "getProfileNotifications",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Notifications",
    "typeScriptTag": "notifications",
    "description": "Get a Profile's Notifications",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "the page of information you'd like to receive."
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "the number of employees to retrieve when using pagination; default is 30 and the limit is 50."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/profiles/fields",
    "method": "getAllFields",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Profile Fields",
    "typeScriptTag": "profileFields",
    "description": "Get all Profile Fields",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/profiles/fields",
    "method": "createProfileField",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Profile Fields",
    "typeScriptTag": "profileFields",
    "description": "Create a Profile Field",
    "parameters": [
      {
        "name": "fields",
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
    "url": "/profiles/fields/{id}",
    "method": "getFieldInformation",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Profile Fields",
    "typeScriptTag": "profileFields",
    "description": "Get a Profile Field",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/profiles/fields/{id}",
    "method": "updateFieldInSection",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Profile Fields",
    "typeScriptTag": "profileFields",
    "description": "Update a Profile Field",
    "parameters": [
      {
        "name": "fields",
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
    "url": "/profiles/fields/sections",
    "method": "getAllFieldSections",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Profile Fields",
    "typeScriptTag": "profileFields",
    "description": "Get all Profile Field Sections",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/profiles/fields/sections/{id}",
    "method": "getFieldSection",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Profile Fields",
    "typeScriptTag": "profileFields",
    "description": "Get a Profile Field Section",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/profiles/fields/sections/{id}",
    "method": "updateFieldInSection",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Profile Fields",
    "typeScriptTag": "profileFields",
    "description": "Update a Profile Field Section",
    "parameters": [
      {
        "name": "sections",
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
    "url": "/profiles",
    "method": "profiles",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Profiles",
    "typeScriptTag": "profiles",
    "description": "Get all Profiles",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "the page of information you'd like to receive."
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "the number of employees to retrieve when using pagination; default is 30 and the limit is 50."
      },
      {
        "name": "profileFormat",
        "schema": "string",
        "required": false,
        "description": "format of the profile object; only <code>short</code> is supported - returns a truncated version of the profile object"
      },
      {
        "name": "sort",
        "schema": "string",
        "required": false,
        "description": "sort order of profiles; valid values - <code>first_name</code>, <code>last_name</code>, <code>created_at</code>, <code>updated_at</code>; prepend with a - (minus) sign to reverse the order"
      },
      {
        "name": "filter[firstName]",
        "schema": "string",
        "required": false,
        "description": "returns only profiles with the defined first name"
      },
      {
        "name": "filter[lastName]",
        "schema": "string",
        "required": false,
        "description": "returns only profiles with the defined last name"
      },
      {
        "name": "filter[email]",
        "schema": "string",
        "required": false,
        "description": "returns only profiles with the defined (company) email"
      },
      {
        "name": "filter[personalEmail]",
        "schema": "string",
        "required": false,
        "description": "returns only profiles with the defined personal email"
      },
      {
        "name": "filter[jobTitle]",
        "schema": "string",
        "required": false,
        "description": "returns only profiles with the defined job title; must be the job_title's <code>title</code>"
      },
      {
        "name": "filter[reportsTo]",
        "schema": "string",
        "required": false,
        "description": "<code>id</code> of the profile for whose direct reports you to view; returns only those profiles"
      },
      {
        "name": "filter[userStatus]",
        "schema": "string",
        "required": false,
        "description": "returns only profiles with the defined <code>user_status</code>; <code>active</code>, <code>pending</code>, and <code>inactive</code> are supported"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/profiles",
    "method": "profiles",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Profiles",
    "typeScriptTag": "profiles",
    "description": "Create a Profile",
    "parameters": [
      {
        "name": "profiles",
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
    "url": "/profiles/{id}",
    "method": "getProfileById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Profiles",
    "typeScriptTag": "profiles",
    "description": "Get a Profile",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/profiles/{id}",
    "method": "updateProfileWithNewJobTitle",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Profiles",
    "typeScriptTag": "profiles",
    "description": "Update a Profile",
    "parameters": [
      {
        "name": "profiles",
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
    "url": "/profiles/me",
    "method": "getCurrentUserProfile",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Profiles",
    "typeScriptTag": "profiles",
    "description": "Get Current User's Profile",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/reports/{id}",
    "method": "getReportData",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Reports",
    "typeScriptTag": "reports",
    "description": "Get a Report",
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
      apiTitle="Namely API"
      apiBaseUrl="https://{company}.namely.com/api/v1"
      apiVersion=""
      endpoints={39}
      sdkMethods={78}
      schemas={147}
      parameters={32}
      difficulty="Medium"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/namely/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/namely/openapi.yaml"
      developerDocumentation="developers.namely.com/"
    />
  );
}
  