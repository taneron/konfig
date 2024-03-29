import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function IlertTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="ilert-typescript-sdk"
      metaDescription={`ilert is a SaaS company for alerting, on-call management and incident communication and helps companies to increase their digital uptime. B2C and B2B companies from across the globe, including well-known brands such as Bertelsmann, TeamViewer and REWE, trust ilert to empower their operations teams and ensure everything is running smoothly.`}
      company="ilert"
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/ilert/logo.png"
      companyKebabCase="ilert"
      clientNameCamelCase="ilert"
      homepage="ilert.com"
      lastUpdated={new Date("2024-03-29T22:11:39.095Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/ilert/favicon.png"
      // Missing contactUrl
      // Missing contactEmail
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/ilert/imagePreview.png"
      GettingStarted={GettingStarted}
      FirstRequest={FirstRequest}
      categories={["alerting","on_call_management","incident_communication"]}
      methods={[
  {
    "url": "/users/{user-id}",
    "method": "deleteUser",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Delete the specified user.",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "numeric user id",
        "example": "USER-ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "if deletion was successful"
      }
    ]
  },
  {
    "url": "/users/{user-id}",
    "method": "getUserById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Get the specified user.",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "numeric user id",
        "example": "USER-ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/users/{user-id}",
    "method": "updateExistingUser",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Update an existing user.",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "numeric user id",
        "example": "USER-ID"
      },
      {
        "name": "id",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "firstName",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FIRSTNAME"
      },
      {
        "name": "lastName",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "LASTNAME"
      },
      {
        "name": "email",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EMAIL"
      },
      {
        "name": "timezone",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "position",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "department",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "avatarUrl",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "language",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "role",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "shiftColor",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "mutedUntil",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "createdAt",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "updatedAt",
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
    "url": "/users/{user-id}/contacts/emails",
    "method": "getUserEmails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Contacts",
    "typeScriptTag": "contacts",
    "description": "Get a user's emails",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "numeric user id",
        "example": "USER-ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/users/{user-id}/contacts/emails",
    "method": "addNewEmail",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Contacts",
    "typeScriptTag": "contacts",
    "description": "Create a new email",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "numeric user id",
        "example": "USER-ID"
      },
      {
        "name": "target",
        "schema": "string",
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
    "url": "/users/{user-id}/contacts/emails/{id}",
    "method": "deleteUserEmail",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Contacts",
    "typeScriptTag": "contacts",
    "description": "Delete the user's specified email",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "numeric user id",
        "example": "USER-ID"
      },
      {
        "name": "id",
        "schema": "number",
        "required": true,
        "description": "entity ID",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "if deletion was successful"
      }
    ]
  },
  {
    "url": "/users/{user-id}/contacts/emails/{id}",
    "method": "getEmail",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Contacts",
    "typeScriptTag": "contacts",
    "description": "Get a specific email",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "numeric user id",
        "example": "USER-ID"
      },
      {
        "name": "id",
        "schema": "number",
        "required": true,
        "description": "entity ID",
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
    "url": "/users/{user-id}/contacts/emails/{id}",
    "method": "updateUserEmail",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Contacts",
    "typeScriptTag": "contacts",
    "description": "Update a user's email",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "numeric user id",
        "example": "USER-ID"
      },
      {
        "name": "id",
        "schema": "number",
        "required": true,
        "description": "entity ID",
        "example": 0
      },
      {
        "name": "target",
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
    "url": "/users/{user-id}/contacts/phone-numbers",
    "method": "getUserPhoneNumbers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Contacts",
    "typeScriptTag": "contacts",
    "description": "Get a user's phone numbers",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "numeric user id",
        "example": "USER-ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/users/{user-id}/contacts/phone-numbers",
    "method": "createPhoneNumber",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Contacts",
    "typeScriptTag": "contacts",
    "description": "Create a phone number",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "numeric user id",
        "example": "USER-ID"
      },
      {
        "name": "regionCode",
        "schema": "string",
        "description": ""
      },
      {
        "name": "target",
        "schema": "string",
        "description": ""
      },
      {
        "name": "primary",
        "schema": "boolean",
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
    "url": "/users/{user-id}/contacts/phone-numbers/{id}",
    "method": "deletePhoneNumber",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Contacts",
    "typeScriptTag": "contacts",
    "description": "Delete the user's specified phone number",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "numeric user id",
        "example": "USER-ID"
      },
      {
        "name": "id",
        "schema": "number",
        "required": true,
        "description": "entity ID",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "if deletion was successful"
      }
    ]
  },
  {
    "url": "/users/{user-id}/contacts/phone-numbers/{id}",
    "method": "getPhoneNumber",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Contacts",
    "typeScriptTag": "contacts",
    "description": "Get specific phone number",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "numeric user id",
        "example": "USER-ID"
      },
      {
        "name": "id",
        "schema": "number",
        "required": true,
        "description": "entity ID",
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
    "url": "/users/{user-id}/contacts/phone-numbers/{id}",
    "method": "updateUserPhoneNumber",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Contacts",
    "typeScriptTag": "contacts",
    "description": "Update a user's phone number",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "numeric user id",
        "example": "USER-ID"
      },
      {
        "name": "id",
        "schema": "number",
        "required": true,
        "description": "entity ID",
        "example": 0
      },
      {
        "name": "regionCode",
        "schema": "string",
        "description": ""
      },
      {
        "name": "target",
        "schema": "string",
        "description": ""
      },
      {
        "name": "primary",
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
    "url": "/users/{user-id}/notification-preferences/alerts",
    "method": "getUserAlerts",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Notification Preferences",
    "typeScriptTag": "notificationPreferences",
    "description": "Get alert notification preferences of a user",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "numeric user id",
        "example": "USER-ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/users/{user-id}/notification-preferences/alerts",
    "method": "createAlertPreference",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Notification Preferences",
    "typeScriptTag": "notificationPreferences",
    "description": "Create an alert notification preference",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "numeric user id",
        "example": "USER-ID"
      },
      {
        "name": "method",
        "schema": "string",
        "description": ""
      },
      {
        "name": "contact",
        "schema": "undefined",
        "description": ""
      },
      {
        "name": "delayMin",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "type",
        "schema": "string",
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
    "url": "/users/{user-id}/notification-preferences/alerts/{id}",
    "method": "deleteUserNotificationPreferencesAlert",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Notification Preferences",
    "typeScriptTag": "notificationPreferences",
    "description": "Delete the user's specified notification preferences alert",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "numeric user id",
        "example": "USER-ID"
      },
      {
        "name": "id",
        "schema": "number",
        "required": true,
        "description": "entity ID",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "if deletion was successful"
      }
    ]
  },
  {
    "url": "/users/{user-id}/notification-preferences/alerts/{id}",
    "method": "getSpecificAlert",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Notification Preferences",
    "typeScriptTag": "notificationPreferences",
    "description": "Get specific notification preferences alert",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "numeric user id",
        "example": "USER-ID"
      },
      {
        "name": "id",
        "schema": "number",
        "required": true,
        "description": "entity ID",
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
    "url": "/users/{user-id}/notification-preferences/alerts/{id}",
    "method": "updateAlertPreference",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Notification Preferences",
    "typeScriptTag": "notificationPreferences",
    "description": "Update a user's alert notification preference",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "numeric user id",
        "example": "USER-ID"
      },
      {
        "name": "id",
        "schema": "number",
        "required": true,
        "description": "entity ID",
        "example": 0
      },
      {
        "name": "method",
        "schema": "string",
        "description": ""
      },
      {
        "name": "contact",
        "schema": "undefined",
        "description": ""
      },
      {
        "name": "delayMin",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "type",
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
    "url": "/users/{user-id}/notification-preferences/duties",
    "method": "getUserDutyPreferences",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Notification Preferences",
    "typeScriptTag": "notificationPreferences",
    "description": "Get duty notification preferences of a user",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "numeric user id",
        "example": "USER-ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/users/{user-id}/notification-preferences/duties",
    "method": "createDuty",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Notification Preferences",
    "typeScriptTag": "notificationPreferences",
    "description": "Create a duty notification preference",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "numeric user id",
        "example": "USER-ID"
      },
      {
        "name": "beforeMin",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "contact",
        "schema": "undefined",
        "description": ""
      },
      {
        "name": "method",
        "schema": "string",
        "description": ""
      },
      {
        "name": "type",
        "schema": "string",
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
    "url": "/users/{user-id}/notification-preferences/duties/{id}",
    "method": "deleteUserNotificationDuty",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Notification Preferences",
    "typeScriptTag": "notificationPreferences",
    "description": "Delete the user's specified notification preferences duty",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "numeric user id",
        "example": "USER-ID"
      },
      {
        "name": "id",
        "schema": "number",
        "required": true,
        "description": "entity ID",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "if deletion was successful"
      }
    ]
  },
  {
    "url": "/users/{user-id}/notification-preferences/duties/{id}",
    "method": "getSpecificDuty",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Notification Preferences",
    "typeScriptTag": "notificationPreferences",
    "description": "Get specific notification preferences duty",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "numeric user id",
        "example": "USER-ID"
      },
      {
        "name": "id",
        "schema": "number",
        "required": true,
        "description": "entity ID",
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
    "url": "/users/{user-id}/notification-preferences/duties/{id}",
    "method": "updateDutyNotificationPreference",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Notification Preferences",
    "typeScriptTag": "notificationPreferences",
    "description": "Update a user's duty notification preference",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "numeric user id",
        "example": "USER-ID"
      },
      {
        "name": "id",
        "schema": "number",
        "required": true,
        "description": "entity ID",
        "example": 0
      },
      {
        "name": "beforeMin",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "contact",
        "schema": "undefined",
        "description": ""
      },
      {
        "name": "method",
        "schema": "string",
        "description": ""
      },
      {
        "name": "type",
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
    "url": "/users/{user-id}/notification-preferences/updates",
    "method": "getUserUpdatePreferences",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Notification Preferences",
    "typeScriptTag": "notificationPreferences",
    "description": "Get update notification preferences of a user",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "numeric user id",
        "example": "USER-ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/users/{user-id}/notification-preferences/updates",
    "method": "createUpdatePreference",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Notification Preferences",
    "typeScriptTag": "notificationPreferences",
    "description": "Create an update notification preference",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "numeric user id",
        "example": "USER-ID"
      },
      {
        "name": "contact",
        "schema": "undefined",
        "description": ""
      },
      {
        "name": "method",
        "schema": "string",
        "description": ""
      },
      {
        "name": "type",
        "schema": "string",
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
    "url": "/users/{user-id}/notification-preferences/updates/{id}",
    "method": "deleteUpdate",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Notification Preferences",
    "typeScriptTag": "notificationPreferences",
    "description": "Delete the user's specified notification preferences update",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "numeric user id",
        "example": "USER-ID"
      },
      {
        "name": "id",
        "schema": "number",
        "required": true,
        "description": "entity ID",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "if deletion was successful"
      }
    ]
  },
  {
    "url": "/users/{user-id}/notification-preferences/updates/{id}",
    "method": "getSpecificUpdate",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Notification Preferences",
    "typeScriptTag": "notificationPreferences",
    "description": "Get specific notification preferences update",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "numeric user id",
        "example": "USER-ID"
      },
      {
        "name": "id",
        "schema": "number",
        "required": true,
        "description": "entity ID",
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
    "url": "/users/{user-id}/notification-preferences/updates/{id}",
    "method": "updateUserUpdateNotificationPreference",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Notification Preferences",
    "typeScriptTag": "notificationPreferences",
    "description": "Update a user's update notification preference",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "numeric user id",
        "example": "USER-ID"
      },
      {
        "name": "id",
        "schema": "number",
        "required": true,
        "description": "entity ID",
        "example": 0
      },
      {
        "name": "contact",
        "schema": "undefined",
        "description": ""
      },
      {
        "name": "method",
        "schema": "string",
        "description": ""
      },
      {
        "name": "type",
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
    "url": "/users/{user-id}/notification-preferences/subscriptions",
    "method": "getUserSubscriptions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Notification Preferences",
    "typeScriptTag": "notificationPreferences",
    "description": "Get subscription notification preferences of a user",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "numeric user id",
        "example": "USER-ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/users/{user-id}/notification-preferences/subscriptions",
    "method": "createSubscriptionNotificationPreference",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Notification Preferences",
    "typeScriptTag": "notificationPreferences",
    "description": "Create a subscription notification preference",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "numeric user id",
        "example": "USER-ID"
      },
      {
        "name": "contact",
        "schema": "undefined",
        "description": ""
      },
      {
        "name": "method",
        "schema": "string",
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
    "url": "/users/{user-id}/notification-preferences/subscriptions/{id}",
    "method": "deleteSubscription",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Notification Preferences",
    "typeScriptTag": "notificationPreferences",
    "description": "Delete the user's specified notification preferences subscription",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "numeric user id",
        "example": "USER-ID"
      },
      {
        "name": "id",
        "schema": "number",
        "required": true,
        "description": "entity ID",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "if deletion was successful"
      }
    ]
  },
  {
    "url": "/users/{user-id}/notification-preferences/subscriptions/{id}",
    "method": "getSpecificSubscription",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Notification Preferences",
    "typeScriptTag": "notificationPreferences",
    "description": "Get specific notification preferences subscription",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "numeric user id",
        "example": "USER-ID"
      },
      {
        "name": "id",
        "schema": "number",
        "required": true,
        "description": "entity ID",
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
    "url": "/users/{user-id}/notification-preferences/subscriptions/{id}",
    "method": "updateSubscriptionPreference",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Notification Preferences",
    "typeScriptTag": "notificationPreferences",
    "description": "Update a user's subscription notification preference",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "numeric user id",
        "example": "USER-ID"
      },
      {
        "name": "id",
        "schema": "number",
        "required": true,
        "description": "entity ID",
        "example": 0
      },
      {
        "name": "contact",
        "schema": "undefined",
        "description": ""
      },
      {
        "name": "method",
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
    "url": "/numbers",
    "method": "listAvailableNumbers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Numbers",
    "typeScriptTag": "numbers",
    "description": "List available phone numbers that ilert uses to send voice and SMS notifications",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/integrations",
    "method": "listAvailable",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Integrations",
    "typeScriptTag": "integrations",
    "description": "List available inbound and outbound integrations. Note: this resource is paginated.",
    "parameters": [
      {
        "name": "startIndex",
        "schema": "integer",
        "required": false,
        "description": "an integer specifying the starting point (beginning with 0) when paging through a list of entities",
        "default": 0
      },
      {
        "name": "maxResults",
        "schema": "integer",
        "required": false,
        "description": "the maximum number of results when paging through a list of entities.",
        "default": 50
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/users",
    "method": "listExistingUsers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "List existing users.",
    "parameters": [
      {
        "name": "startIndex",
        "schema": "integer",
        "required": false,
        "description": "an integer specifying the starting point (beginning with 0) when paging through a list of entities",
        "default": 0
      },
      {
        "name": "maxResults",
        "schema": "integer",
        "required": false,
        "description": "the maximum number of results when paging through a list of entities.",
        "default": 50
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/users",
    "method": "createNewUser",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Create a new user. Requires ADMIN privileges.",
    "parameters": [
      {
        "name": "firstName",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FIRSTNAME"
      },
      {
        "name": "lastName",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "LASTNAME"
      },
      {
        "name": "email",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EMAIL"
      },
      {
        "name": "timezone",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "position",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "department",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "avatarUrl",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "language",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "role",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "shiftColor",
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
    "url": "/users/current",
    "method": "getCurrentUser",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Get the currently authenticated user.",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/users/current",
    "method": "updateCurrentUser",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Update the current user.",
    "parameters": [
      {
        "name": "firstName",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FIRSTNAME"
      },
      {
        "name": "lastName",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "LASTNAME"
      },
      {
        "name": "email",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EMAIL"
      },
      {
        "name": "timezone",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "position",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "department",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "avatarUrl",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "language",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "role",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "shiftColor",
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
    "url": "/alerts",
    "method": "listMatchingCriteria",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Alerts",
    "typeScriptTag": "alerts",
    "description": "List alerts (optionally matching certain criteria that are specified by query parameters).",
    "parameters": [
      {
        "name": "startIndex",
        "schema": "integer",
        "required": false,
        "description": "an integer specifying the starting point (beginning with 0) when paging through a list of entities",
        "default": 0
      },
      {
        "name": "maxResults",
        "schema": "integer",
        "required": false,
        "description": "the maximum number of results when paging through a list of entities.",
        "default": 50
      },
      {
        "name": "include",
        "schema": "array",
        "required": false,
        "description": "Describes optional properties that should be included in the response. You may declare multiple. (https://api.ilert.com/api-docs"
      },
      {
        "name": "states",
        "schema": "array",
        "description": "state of the alert"
      },
      {
        "name": "sources",
        "schema": "array",
        "description": "alert source IDs of the alert's alert source"
      },
      {
        "name": "policies",
        "schema": "array",
        "description": "escalation policy IDs of the alert's escalation policy"
      },
      {
        "name": "responders",
        "schema": "array",
        "description": "user ids of the user that is a responder of the alert"
      },
      {
        "name": "from",
        "schema": "string",
        "description": "from date, ISO-UTC e.g. 2021-05-25T21:24:56.771Z, based on reportTime"
      },
      {
        "name": "until",
        "schema": "string",
        "description": "until date, ISO-UTC e.g. 2021-05-26T21:24:56.771Z, based on reportTime"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/alerts",
    "method": "createCustomizedAlert",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Alerts",
    "typeScriptTag": "alerts",
    "description": "Create alerts with customised parameters without requiring events from monitoring tools that use our Events API.",
    "parameters": [
      {
        "name": "summary",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SUMMARY"
      },
      {
        "name": "details",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "alertSource",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "escalationPolicy",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "priority",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "assignedTo",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "images",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "links",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "responders",
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
    "url": "/alerts/count",
    "method": "getAlertCountMatchingCriteria",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Alerts",
    "typeScriptTag": "alerts",
    "description": "Get the alert count matching the specified criteria.",
    "parameters": [
      {
        "name": "states",
        "schema": "array",
        "description": "state of the alert"
      },
      {
        "name": "sources",
        "schema": "array",
        "description": "alert source IDs of the alert's alert source"
      },
      {
        "name": "responders",
        "schema": "array",
        "description": "user ids of the user that is a responder of the alert"
      },
      {
        "name": "from",
        "schema": "string",
        "description": "from date"
      },
      {
        "name": "until",
        "schema": "string",
        "description": "until date"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/alerts/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Alerts",
    "typeScriptTag": "alerts",
    "description": "Get the alert with the specified id.",
    "parameters": [
      {
        "name": "id",
        "schema": "number",
        "required": true,
        "description": "entity ID",
        "example": 0
      },
      {
        "name": "include",
        "schema": "array",
        "required": false,
        "description": "Describes optional properties that should be included in the response. You may declare multiple. (escalationRules, nextEscalationUser)"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/alerts/{id}/suggested-responders",
    "method": "getAssignableResponders",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Alerts",
    "typeScriptTag": "alerts",
    "description": "Get available (https://api.ilert.com/api-docs responders for the alert with the specified id.",
    "parameters": [
      {
        "name": "id",
        "schema": "number",
        "required": true,
        "description": "entity ID",
        "example": 0
      },
      {
        "name": "lang",
        "schema": "string",
        "description": "locale for response text eg. 'en' or 'de'"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/alerts/{id}/responders",
    "method": "addResponder",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Alerts",
    "typeScriptTag": "alerts",
    "description": "Add an additional responder to the alert.",
    "parameters": [
      {
        "name": "id",
        "schema": "number",
        "required": true,
        "description": "entity ID",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Responder did not exist"
      },
      {
        "statusCode": "405",
        "description": "Responder is already present on the alert"
      }
    ]
  },
  {
    "url": "/alerts/{id}/responders/{user-id}",
    "method": "removeResponder",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Alerts",
    "typeScriptTag": "alerts",
    "description": "Remove a responder from the alert.",
    "parameters": [
      {
        "name": "id",
        "schema": "number",
        "required": true,
        "description": "entity ID",
        "example": 0
      },
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "numeric user id",
        "example": "USER-ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Responder has been removed"
      },
      {
        "statusCode": "404",
        "description": "Responder did not exist"
      }
    ]
  },
  {
    "url": "/alerts/{id}/assign",
    "method": "assignAlertTo",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Alerts",
    "typeScriptTag": "alerts",
    "description": "Assign the alert.",
    "parameters": [
      {
        "name": "id",
        "schema": "number",
        "required": true,
        "description": "entity ID",
        "example": 0
      },
      {
        "name": "user",
        "schema": "string",
        "description": "numeric user id"
      },
      {
        "name": "policy",
        "schema": "string",
        "description": "numeric policy id"
      },
      {
        "name": "schedule",
        "schema": "string",
        "description": "numeric schedule id"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/alerts/{id}/accept",
    "method": "acceptAlert",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Alerts",
    "typeScriptTag": "alerts",
    "description": "Accept the Alert.",
    "parameters": [
      {
        "name": "id",
        "schema": "number",
        "required": true,
        "description": "entity ID",
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
    "url": "/alerts/{id}/resolve",
    "method": "resolveAlert",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Alerts",
    "typeScriptTag": "alerts",
    "description": "Resolve the alert.",
    "parameters": [
      {
        "name": "id",
        "schema": "number",
        "required": true,
        "description": "entity ID",
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
    "url": "/alerts/{id}/notifications",
    "method": "getNotifications",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Alerts",
    "typeScriptTag": "alerts",
    "description": "Get notifications for the specified alert.",
    "parameters": [
      {
        "name": "id",
        "schema": "number",
        "required": true,
        "description": "entity ID",
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
    "url": "/alerts/{id}/log-entries",
    "method": "getLogEntries",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Alerts",
    "typeScriptTag": "alerts",
    "description": "Get log entries for the specified alert.",
    "parameters": [
      {
        "name": "id",
        "schema": "number",
        "required": true,
        "description": "entity ID",
        "example": 0
      },
      {
        "name": "lang",
        "schema": "string",
        "description": "log entry language"
      },
      {
        "name": "startIndex",
        "schema": "integer",
        "required": false,
        "description": "an integer specifying the starting point (beginning with 0) when paging through a list of entities",
        "default": 0
      },
      {
        "name": "maxResults",
        "schema": "integer",
        "required": false,
        "description": "the maximum number of results when paging through a list of entities.",
        "default": 50
      },
      {
        "name": "include",
        "schema": "array",
        "required": false,
        "description": "Describes optional properties that should be included in the response. You may declare multiple. (https://api.ilert.com/api-docs"
      },
      {
        "name": "filterTypes",
        "schema": "array",
        "description": "filter-type (https://api.ilert.com/api-docs of the log"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/alerts/{id}/actions",
    "method": "getAvailableActions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Alert Actions",
    "typeScriptTag": "alertActions",
    "description": "Get available actions for specified alert.",
    "parameters": [
      {
        "name": "id",
        "schema": "number",
        "required": true,
        "description": "entity ID",
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
    "url": "/alerts/{id}/actions",
    "method": "invokeSpecificAction",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Alert Actions",
    "typeScriptTag": "alertActions",
    "description": "Invoke a specific alert action.",
    "parameters": [
      {
        "name": "id",
        "schema": "number",
        "required": true,
        "description": "entity ID",
        "example": 0
      },
      {
        "name": "alertActionId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "connectorId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "type",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "iconUrl",
        "schema": "string",
        "description": ""
      },
      {
        "name": "history",
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
    "url": "/schedules",
    "method": "listOnCallSchedules",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Schedules",
    "typeScriptTag": "schedules",
    "description": "List on-call schedules.",
    "parameters": [
      {
        "name": "include",
        "schema": "array",
        "required": false,
        "description": "Describes optional properties that should be included in the response. You may declare multiple. (currentShift, nextShift, scheduleLayers [only available for RECURRING schedules], shifts [only available for STATIC schedules], past [show shifts in the past, only for STATIC])"
      },
      {
        "name": "startIndex",
        "schema": "integer",
        "required": false,
        "description": "an integer specifying the starting point (beginning with 0) when paging through a list of entities",
        "default": 0
      },
      {
        "name": "maxResults",
        "schema": "integer",
        "required": false,
        "description": "the maximum number of results when paging through a list of schedules.",
        "default": 20
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/schedules",
    "method": "createNewOnCallSchedule",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Schedules",
    "typeScriptTag": "schedules",
    "description": "Create a new on-call schedule.",
    "parameters": [
      {
        "name": "abortOnGaps",
        "schema": "boolean",
        "required": false,
        "description": "Used for static schedules to prevent creating schedules with gaps"
      },
      {
        "name": "id",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "timezone",
        "schema": "string",
        "description": ""
      },
      {
        "name": "type",
        "schema": "string",
        "description": ""
      },
      {
        "name": "scheduleLayers",
        "schema": "array",
        "description": ""
      },
      {
        "name": "shifts",
        "schema": "array",
        "description": ""
      },
      {
        "name": "showGaps",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "defaultShiftDuration",
        "schema": "string",
        "description": ""
      },
      {
        "name": "currentShift",
        "schema": "object",
        "description": ""
      },
      {
        "name": "nextShift",
        "schema": "object",
        "description": ""
      },
      {
        "name": "teams",
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
    "url": "/schedules/{id}",
    "method": "deleteScheduleById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Schedules",
    "typeScriptTag": "schedules",
    "description": "Delete the on-call schedule with the specified id.",
    "parameters": [
      {
        "name": "id",
        "schema": "number",
        "required": true,
        "description": "entity ID",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "empty response"
      }
    ]
  },
  {
    "url": "/schedules/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Schedules",
    "typeScriptTag": "schedules",
    "description": "Get the on-call schedule with the specified id.",
    "parameters": [
      {
        "name": "id",
        "schema": "number",
        "required": true,
        "description": "entity ID",
        "example": 0
      },
      {
        "name": "include",
        "schema": "array",
        "required": false,
        "description": "Describes optional properties that should be included in the response. You may declare multiple. (currentShift, nextShift, scheduleLayers [only available for RECURRING schedules], shifts [only available for STATIC schedules], past [show shifts in the past, only for STATIC])"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/schedules/{id}",
    "method": "updateOnCallSchedule",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Schedules",
    "typeScriptTag": "schedules",
    "description": "Update an on-call schedule.",
    "parameters": [
      {
        "name": "id",
        "schema": "number",
        "required": true,
        "description": "entity ID",
        "example": 0
      },
      {
        "name": "abortOnGaps",
        "schema": "boolean",
        "required": false,
        "description": "Used for static schedules to prevent updating schedules with gaps"
      },
      {
        "name": "id",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "timezone",
        "schema": "string",
        "description": ""
      },
      {
        "name": "type",
        "schema": "string",
        "description": ""
      },
      {
        "name": "scheduleLayers",
        "schema": "array",
        "description": ""
      },
      {
        "name": "shifts",
        "schema": "array",
        "description": ""
      },
      {
        "name": "showGaps",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "defaultShiftDuration",
        "schema": "string",
        "description": ""
      },
      {
        "name": "currentShift",
        "schema": "object",
        "description": ""
      },
      {
        "name": "nextShift",
        "schema": "object",
        "description": ""
      },
      {
        "name": "teams",
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
    "url": "/schedules/{id}/shifts",
    "method": "getShiftsByIdAndDateRange",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Schedules",
    "typeScriptTag": "schedules",
    "description": "Get shifts for the specified schedule and date range.",
    "parameters": [
      {
        "name": "id",
        "schema": "number",
        "required": true,
        "description": "entity ID",
        "example": 0
      },
      {
        "name": "from",
        "schema": "string",
        "description": "from date, default is start of last month"
      },
      {
        "name": "until",
        "schema": "string",
        "description": "until date, default is from date plus 3 months"
      },
      {
        "name": "excludeOverrides",
        "schema": "boolean",
        "description": "if true, shifts won't include overrides",
        "default": false
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/schedules/{id}/overrides",
    "method": "getOverridesById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Schedules",
    "typeScriptTag": "schedules",
    "description": "Get overrides for the specified schedule.",
    "parameters": [
      {
        "name": "id",
        "schema": "number",
        "required": true,
        "description": "entity ID",
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
    "url": "/schedules/{id}/overrides",
    "method": "addOverrideShift",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Schedules",
    "typeScriptTag": "schedules",
    "description": "Add an override shift to a schedule.",
    "parameters": [
      {
        "name": "id",
        "schema": "number",
        "required": true,
        "description": "entity ID",
        "example": 0
      },
      {
        "name": "user",
        "schema": "object",
        "description": ""
      },
      {
        "name": "end",
        "schema": "string",
        "description": ""
      },
      {
        "name": "start",
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
    "url": "/schedules/{id}/user-on-call",
    "method": "getUserOnCall",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Schedules",
    "typeScriptTag": "schedules",
    "description": "Get the user (wrapped in a shift object) on-call for the specified schedule.",
    "parameters": [
      {
        "name": "id",
        "schema": "number",
        "required": true,
        "description": "entity ID",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "204",
        "description": "if no user is on-call"
      }
    ]
  },
  {
    "url": "/on-calls",
    "method": "listWithFilters",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "On-Calls",
    "typeScriptTag": "onCalls",
    "description": "List on-calls with flexible filters",
    "parameters": [
      {
        "name": "policies",
        "schema": "number",
        "required": false,
        "description": "escalation policy ids to filter on call duties for"
      },
      {
        "name": "policyLevels",
        "schema": "string",
        "required": false,
        "description": "can be provided instead of 'policies', must be a serialised and urlencoded JSON object e.g. ?policy-levels=\"{ \"id\": 12, \"level\": 1 }\" where id is the policy id and level is the escalation level that should be included"
      },
      {
        "name": "schedules",
        "schema": "number",
        "required": false,
        "description": "on call schedule ids to filter on call duties for"
      },
      {
        "name": "users",
        "schema": "number",
        "required": false,
        "description": "user ids to filter on call duties for"
      },
      {
        "name": "expand",
        "schema": "string",
        "required": false,
        "description": "include full entities for: policy, escalationPolicy or user"
      },
      {
        "name": "from",
        "schema": "string",
        "required": false,
        "description": "date-time ISO-UTC e.g. 2021-05-25T21:24:56.771Z, start of the time range, may not exceed 3 months in total span, defaults to current time"
      },
      {
        "name": "until",
        "schema": "string",
        "required": false,
        "description": "date-time ISO-UTC e.g. 2021-05-25T21:24:56.771Z, end of the time range, must be after 'from', defaults to current time"
      },
      {
        "name": "timezone",
        "schema": "string",
        "required": false,
        "description": "Time zone in which the results will be rendered, defaults to UTC"
      },
      {
        "name": "startIndex",
        "schema": "number",
        "required": false,
        "description": "offset for the search results, defaults to 0"
      },
      {
        "name": "maxResults",
        "schema": "number",
        "required": false,
        "description": "limit for the search results, defaults to 50, may not exceed 250"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/alert-sources",
    "method": "listSources",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Alert Sources",
    "typeScriptTag": "alertSources",
    "description": "List alert sources.",
    "parameters": [
      {
        "name": "startIndex",
        "schema": "integer",
        "required": false,
        "description": "an integer specifying the starting point (beginning with 0) when paging through a list of entities",
        "default": 0
      },
      {
        "name": "maxResults",
        "schema": "integer",
        "required": false,
        "description": "the maximum number of results when paging through a list of alert sources.",
        "default": 50
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/alert-sources",
    "method": "createNewSource",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Alert Sources",
    "typeScriptTag": "alertSources",
    "description": "Create a new alert source.",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "teams",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "iconUrl",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "lightIconUrl",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "darkIconUrl",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "escalationPolicy",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "integrationType",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "INTEGRATIONTYPE"
      },
      {
        "name": "integrationKey",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "integrationUrl",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "autoResolutionTimeout",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "alertGroupingWindow",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "alertCreation",
        "schema": "string",
        "required": false,
        "description": "",
        "default": "ONE_ALERT_PER_EMAIL"
      },
      {
        "name": "status",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "emailFiltered",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "emailResolveFiltered",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "active",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": true
      },
      {
        "name": "emailPredicates",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "emailResolvePredicates",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "resolveKeyExtractor",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "filterOperator",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "resolveFilterOperator",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "alertPriorityRule",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "supportHours",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "heartbeat",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "bidirectional",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "summaryTemplate",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "detailsTemplate",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "routingTemplate",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "linkTemplates",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "priorityTemplate",
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
    "url": "/alert-sources/{id}",
    "method": "deleteSpecifiedSource",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Alert Sources",
    "typeScriptTag": "alertSources",
    "description": "Delete the specified alert source.",
    "parameters": [
      {
        "name": "id",
        "schema": "number",
        "required": true,
        "description": "entity ID",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "if deletion was successful"
      }
    ]
  },
  {
    "url": "/alert-sources/{id}",
    "method": "getByIdOrApiKey",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Alert Sources",
    "typeScriptTag": "alertSources",
    "description": "Get the alert source with specified id or alternatively api key.",
    "parameters": [
      {
        "name": "sourceId",
        "schema": "string",
        "required": true,
        "description": "numeric source id or api key",
        "example": "SOURCE-ID"
      },
      {
        "name": "include",
        "schema": "array",
        "required": false,
        "description": "Describes optional properties that should be included in the response. You may declare multiple. (detailsTemplate, summaryTemplate, routingTemplate, linkTemplates, priorityTemplate, textTemplate)"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/alert-sources/{id}",
    "method": "updateExistingSource",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Alert Sources",
    "typeScriptTag": "alertSources",
    "description": "Update an existing alert source.",
    "parameters": [
      {
        "name": "id",
        "schema": "number",
        "required": true,
        "description": "entity ID",
        "example": 0
      },
      {
        "name": "id",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "teams",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "iconUrl",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "lightIconUrl",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "darkIconUrl",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "escalationPolicy",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "integrationType",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "INTEGRATIONTYPE"
      },
      {
        "name": "integrationKey",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "integrationUrl",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "autoResolutionTimeout",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "alertGroupingWindow",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "alertCreation",
        "schema": "string",
        "required": false,
        "description": "",
        "default": "ONE_ALERT_PER_EMAIL"
      },
      {
        "name": "status",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "emailFiltered",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "emailResolveFiltered",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "active",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": true
      },
      {
        "name": "emailPredicates",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "emailResolvePredicates",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "resolveKeyExtractor",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "filterOperator",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "resolveFilterOperator",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "alertPriorityRule",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "supportHours",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "heartbeat",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "bidirectional",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "summaryTemplate",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "detailsTemplate",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "routingTemplate",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "linkTemplates",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "priorityTemplate",
        "schema": "object",
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
    "url": "/support-hours",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Support Hours",
    "typeScriptTag": "supportHours",
    "description": "List support hours.",
    "parameters": [
      {
        "name": "startIndex",
        "schema": "integer",
        "required": false,
        "description": "an integer specifying the starting point (beginning with 0) when paging through a list of entities",
        "default": 0
      },
      {
        "name": "maxResults",
        "schema": "integer",
        "required": false,
        "description": "the maximum number of results when paging through a list of support hours.",
        "default": 50
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/support-hours",
    "method": "createNewSupportHour",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Support Hours",
    "typeScriptTag": "supportHours",
    "description": "Create a new support hour.",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "teams",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "timezone",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TIMEZONE"
      },
      {
        "name": "supportDays",
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
    "url": "/support-hours/{id}",
    "method": "deleteSpecifiedSupportHour",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Support Hours",
    "typeScriptTag": "supportHours",
    "description": "Delete the specified support hour.",
    "parameters": [
      {
        "name": "id",
        "schema": "number",
        "required": true,
        "description": "entity ID",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "if deletion was successful"
      }
    ]
  },
  {
    "url": "/support-hours/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Support Hours",
    "typeScriptTag": "supportHours",
    "description": "Get the support hour with specified id.",
    "parameters": [
      {
        "name": "id",
        "schema": "number",
        "required": true,
        "description": "entity ID",
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
    "url": "/support-hours/{id}",
    "method": "updateExistingHour",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Support Hours",
    "typeScriptTag": "supportHours",
    "description": "Update an existing support hour.",
    "parameters": [
      {
        "name": "id",
        "schema": "number",
        "required": true,
        "description": "entity ID",
        "example": 0
      },
      {
        "name": "id",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "teams",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "timezone",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TIMEZONE"
      },
      {
        "name": "supportDays",
        "schema": "object",
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
    "url": "/maintenance-windows",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Maintenance Windows",
    "typeScriptTag": "maintenanceWindows",
    "description": "List maintenance windows.",
    "parameters": [
      {
        "name": "startIndex",
        "schema": "integer",
        "required": false,
        "description": "an integer specifying the starting point (beginning with 0) when paging through a list of entities",
        "default": 0
      },
      {
        "name": "maxResults",
        "schema": "integer",
        "required": false,
        "description": "the maximum number of results when paging through a list of entities.",
        "default": 50
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/maintenance-windows",
    "method": "createNewWindow",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Maintenance Windows",
    "typeScriptTag": "maintenanceWindows",
    "description": "Create a new maintenance window.",
    "parameters": [
      {
        "name": "summary",
        "schema": "string",
        "description": ""
      },
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "timezone",
        "schema": "string",
        "description": ""
      },
      {
        "name": "start",
        "schema": "string",
        "description": ""
      },
      {
        "name": "end",
        "schema": "string",
        "description": ""
      },
      {
        "name": "alertSources",
        "schema": "array",
        "description": ""
      },
      {
        "name": "services",
        "schema": "array",
        "description": ""
      },
      {
        "name": "createdBy",
        "schema": "string",
        "description": ""
      },
      {
        "name": "notifications",
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
    "url": "/maintenance-windows/{id}",
    "method": "removeById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Maintenance Windows",
    "typeScriptTag": "maintenanceWindows",
    "description": "Delete the specified maintenance window.",
    "parameters": [
      {
        "name": "id",
        "schema": "number",
        "required": true,
        "description": "entity ID",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "if deletion was successful"
      }
    ]
  },
  {
    "url": "/maintenance-windows/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Maintenance Windows",
    "typeScriptTag": "maintenanceWindows",
    "description": "Get the maintenance window with specified id.",
    "parameters": [
      {
        "name": "id",
        "schema": "number",
        "required": true,
        "description": "entity ID",
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
    "url": "/maintenance-windows/{id}",
    "method": "updateExistingWindow",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Maintenance Windows",
    "typeScriptTag": "maintenanceWindows",
    "description": "Update an existing maintenance window.",
    "parameters": [
      {
        "name": "id",
        "schema": "number",
        "required": true,
        "description": "entity ID",
        "example": 0
      },
      {
        "name": "summary",
        "schema": "string",
        "description": ""
      },
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "timezone",
        "schema": "string",
        "description": ""
      },
      {
        "name": "start",
        "schema": "string",
        "description": ""
      },
      {
        "name": "end",
        "schema": "string",
        "description": ""
      },
      {
        "name": "alertSources",
        "schema": "array",
        "description": ""
      },
      {
        "name": "services",
        "schema": "array",
        "description": ""
      },
      {
        "name": "createdBy",
        "schema": "string",
        "description": ""
      },
      {
        "name": "notifications",
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
    "url": "/escalation-policies",
    "method": "listPolicies",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Escalation Policies",
    "typeScriptTag": "escalationPolicies",
    "description": "List escalation policies.",
    "parameters": [
      {
        "name": "startIndex",
        "schema": "integer",
        "required": false,
        "description": "an integer specifying the starting point (beginning with 0) when paging through a list of entities",
        "default": 0
      },
      {
        "name": "maxResults",
        "schema": "integer",
        "required": false,
        "description": "the maximum number of results when paging through a list of escalation policies.",
        "default": 50
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/escalation-policies",
    "method": "createNewPolicy",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Escalation Policies",
    "typeScriptTag": "escalationPolicies",
    "description": "Create a new escalation policy.",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "escalationRules",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "teams",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "repeating",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "frequency",
        "schema": "integer",
        "required": false,
        "description": "",
        "default": 1
      },
      {
        "name": "delayMin",
        "schema": "integer",
        "required": false,
        "description": "",
        "default": 0
      },
      {
        "name": "routingKey",
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
    "url": "/escalation-policies/{id}",
    "method": "deleteSpecificPolicy",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Escalation Policies",
    "typeScriptTag": "escalationPolicies",
    "description": "Delete the specified escalation policy.",
    "parameters": [
      {
        "name": "id",
        "schema": "number",
        "required": true,
        "description": "entity ID",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "if deletion was successful"
      }
    ]
  },
  {
    "url": "/escalation-policies/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Escalation Policies",
    "typeScriptTag": "escalationPolicies",
    "description": "Get escalation policy with the specified id.",
    "parameters": [
      {
        "name": "id",
        "schema": "number",
        "required": true,
        "description": "entity ID",
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
    "url": "/escalation-policies/{id}",
    "method": "updateExistingPolicy",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Escalation Policies",
    "typeScriptTag": "escalationPolicies",
    "description": "Update an existing escalation policy.",
    "parameters": [
      {
        "name": "id",
        "schema": "number",
        "required": true,
        "description": "entity ID",
        "example": 0
      },
      {
        "name": "id",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "escalationRules",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "teams",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "repeating",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "frequency",
        "schema": "integer",
        "required": false,
        "description": "",
        "default": 1
      },
      {
        "name": "delayMin",
        "schema": "integer",
        "required": false,
        "description": "",
        "default": 0
      },
      {
        "name": "routingKey",
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
    "url": "/series/{key}",
    "method": "ingestMetricSeries",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Series",
    "typeScriptTag": "series",
    "description": "Ingest a series for a metric",
    "parameters": [
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "api key of resource",
        "example": "KEY"
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "The time points have been accepted"
      }
    ]
  },
  {
    "url": "/events",
    "method": "postEventToIlert",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Events",
    "typeScriptTag": "events",
    "description": "Post an event to ilert.",
    "parameters": [
      {
        "name": "summary",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SUMMARY"
      },
      {
        "name": "apiKey",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "APIKEY"
      },
      {
        "name": "eventType",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EVENTTYPE"
      },
      {
        "name": "details",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "alertKey",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "priority",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "images",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "links",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "comments",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "customDetails",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "routingKey",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "The event has been accepted"
      }
    ]
  },
  {
    "url": "/heartbeats/{key}",
    "method": "pingAlertSource",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Heartbeats",
    "typeScriptTag": "heartbeats",
    "description": "Ping heartbeat alert source.",
    "parameters": [
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "api key of resource",
        "example": "KEY"
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "Arbitrary accept response"
      }
    ]
  },
  {
    "url": "/heartbeats/{key}",
    "method": "pingAlertSource",
    "httpMethod": HttpMethodsEnum.HEAD,
    "tag": "Heartbeats",
    "typeScriptTag": "heartbeats",
    "description": "Ping heartbeat alert source.",
    "parameters": [
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "api key of resource",
        "example": "KEY"
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "Arbitrary accept response"
      }
    ]
  },
  {
    "url": "/heartbeats/{key}",
    "method": "pingAlertSource",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Heartbeats",
    "typeScriptTag": "heartbeats",
    "description": "Ping heartbeat alert source.",
    "parameters": [
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "api key of resource",
        "example": "KEY"
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "Arbitrary accept response"
      }
    ]
  },
  {
    "url": "/alert-actions",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Alert Actions",
    "typeScriptTag": "alertActions",
    "description": "Get alert actions.",
    "parameters": [
      {
        "name": "source",
        "schema": "number",
        "description": "alert source id"
      },
      {
        "name": "connector",
        "schema": "string",
        "description": "connector id"
      },
      {
        "name": "startIndex",
        "schema": "integer",
        "required": false,
        "description": "an integer specifying the starting point (beginning with 0) when paging through a list of entities",
        "default": 0
      },
      {
        "name": "maxResults",
        "schema": "integer",
        "required": false,
        "description": "the maximum number of results when paging through a list of alert actions.",
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
    "url": "/alert-actions",
    "method": "createNewAction",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Alert Actions",
    "typeScriptTag": "alertActions",
    "description": "Create a new alert action.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "alertSources",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "connectorId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "connectorType",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CONNECTORTYPE"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "createdAt",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "updatedAt",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "triggerMode",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "bidirectional",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "delaySec",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "triggerTypes",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "alertFilter",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "params",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "teams",
        "schema": "array",
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
    "url": "/alert-actions/{id}",
    "method": "removeSpecificAction",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Alert Actions",
    "typeScriptTag": "alertActions",
    "description": "Remove a specific alert action.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "entity ID",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Empty body delete response"
      }
    ]
  },
  {
    "url": "/alert-actions/{id}",
    "method": "getSpecificAction",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Alert Actions",
    "typeScriptTag": "alertActions",
    "description": "Get a specific alert action.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "entity ID",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/alert-actions/{id}",
    "method": "updateSpecificAlertAction",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Alert Actions",
    "typeScriptTag": "alertActions",
    "description": "Update the specific alert action. (note: type cannot be changed)",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "entity ID",
        "example": "ID"
      },
      {
        "name": "id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "alertSources",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "connectorId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "connectorType",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CONNECTORTYPE"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "createdAt",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "updatedAt",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "triggerMode",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "bidirectional",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "delaySec",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "triggerTypes",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "alertFilter",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "params",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "teams",
        "schema": "array",
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
    "url": "/connectors",
    "method": "getAvailableConnectors",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Connectors",
    "typeScriptTag": "connectors",
    "description": "Get connectors.",
    "parameters": [
      {
        "name": "startIndex",
        "schema": "integer",
        "required": false,
        "description": "an integer specifying the starting point (beginning with 0) when paging through a list of entities",
        "default": 0
      },
      {
        "name": "maxResults",
        "schema": "integer",
        "required": false,
        "description": "the maximum number of results when paging through a list of entities.",
        "default": 50
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/connectors",
    "method": "createNewConnector",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Connectors",
    "typeScriptTag": "connectors",
    "description": "Create a new connector.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TYPE"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "createdAt",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "updatedAt",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "params",
        "schema": "object",
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
    "url": "/connectors/{id}",
    "method": "removeSpecificConnector",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Connectors",
    "typeScriptTag": "connectors",
    "description": "Remove a specific connector.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "entity ID",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Empty body delete response"
      }
    ]
  },
  {
    "url": "/connectors/{id}",
    "method": "getSpecificConnector",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Connectors",
    "typeScriptTag": "connectors",
    "description": "Get a specific connector.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "entity ID",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/connectors/{id}",
    "method": "updateSpecificConnector",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Connectors",
    "typeScriptTag": "connectors",
    "description": "Update the specific connector. (note: type cannot be changed)",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "entity ID",
        "example": "ID"
      },
      {
        "name": "id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TYPE"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "createdAt",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "updatedAt",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "params",
        "schema": "object",
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
    "url": "/teams",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Teams",
    "typeScriptTag": "teams",
    "description": "Get teams.",
    "parameters": [
      {
        "name": "startIndex",
        "schema": "integer",
        "required": false,
        "description": "an integer specifying the starting point (beginning with 0) when paging through a list of entities",
        "default": 0
      },
      {
        "name": "maxResults",
        "schema": "integer",
        "required": false,
        "description": "the maximum number of results when paging through a list of entities.",
        "default": 50
      },
      {
        "name": "members",
        "schema": "number",
        "required": false,
        "description": "optional, filter teams for specific members (currently only a single occurrence of this param is allowed)"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/teams",
    "method": "createNewTeam",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Teams",
    "typeScriptTag": "teams",
    "description": "Create a new team.",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "visibility",
        "schema": "string",
        "description": ""
      },
      {
        "name": "members",
        "schema": "array",
        "description": ""
      },
      {
        "name": "createdAt",
        "schema": "string",
        "description": ""
      },
      {
        "name": "updatedAt",
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
    "url": "/teams/{id}",
    "method": "removeSpecificTeam",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Teams",
    "typeScriptTag": "teams",
    "description": "Remove a specific team.",
    "parameters": [
      {
        "name": "id",
        "schema": "number",
        "required": true,
        "description": "entity ID",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Empty body delete response"
      }
    ]
  },
  {
    "url": "/teams/{id}",
    "method": "getDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Teams",
    "typeScriptTag": "teams",
    "description": "Get a specific team.",
    "parameters": [
      {
        "name": "id",
        "schema": "number",
        "required": true,
        "description": "entity ID",
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
    "url": "/teams/{id}",
    "method": "updateSpecificTeam",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Teams",
    "typeScriptTag": "teams",
    "description": "Update the specific team",
    "parameters": [
      {
        "name": "id",
        "schema": "number",
        "required": true,
        "description": "entity ID",
        "example": 0
      },
      {
        "name": "id",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "visibility",
        "schema": "string",
        "description": ""
      },
      {
        "name": "members",
        "schema": "array",
        "description": ""
      },
      {
        "name": "createdAt",
        "schema": "string",
        "description": ""
      },
      {
        "name": "updatedAt",
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
    "url": "/teams/{id}/members",
    "method": "addNewMember",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Teams",
    "typeScriptTag": "teams",
    "description": "Add a new team member to specific team",
    "parameters": [
      {
        "name": "id",
        "schema": "number",
        "required": true,
        "description": "entity ID",
        "example": 0
      },
      {
        "name": "user",
        "schema": "object",
        "description": ""
      },
      {
        "name": "role",
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
    "url": "/teams/{id}/members/{id}",
    "method": "removeSpecificMember",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Teams",
    "typeScriptTag": "teams",
    "description": "Remove a specific member of a specific team.",
    "parameters": [
      {
        "name": "id",
        "schema": "number",
        "required": true,
        "description": "entity ID",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Empty body delete response"
      }
    ]
  },
  {
    "url": "/reports/alerts",
    "method": "listAlertMetrics",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Reports",
    "typeScriptTag": "reports",
    "description": "List alert metrics for the requested resources",
    "parameters": [
      {
        "name": "sources",
        "schema": "number",
        "required": false,
        "description": "alert source ids to filter metrics for"
      },
      {
        "name": "policies",
        "schema": "number",
        "required": false,
        "description": "escalation policy ids to filter metrics for"
      },
      {
        "name": "numbers",
        "schema": "string",
        "required": false,
        "description": "phone numbers of call routing numbers to filter metrics for"
      },
      {
        "name": "from",
        "schema": "string",
        "required": true,
        "description": "date-time ISO-UTC e.g. 2021-05-25T21:24:56.771Z, start of the time range, may not exceed 1 year in total span",
        "example": "FROM"
      },
      {
        "name": "until",
        "schema": "string",
        "required": true,
        "description": "date-time ISO-UTC e.g. 2021-05-25T21:24:56.771Z, end of the time range, must be after 'from', must not be in the future",
        "example": "UNTIL"
      },
      {
        "name": "timezone",
        "schema": "string",
        "required": false,
        "description": "Time zone in which the results will be rendered, defaults to tenant's configured default timezone"
      },
      {
        "name": "metric",
        "schema": "string",
        "required": false,
        "description": "Describes the metric that should be fetched choose one of: COUNT, MTTA or MTTR - defaults to COUNT"
      },
      {
        "name": "groupBy",
        "schema": "string",
        "required": false,
        "description": "Defines the grouping of metrics, choose one of: DAY, WEEK or MONTH - defaults to WEEK"
      },
      {
        "name": "priority",
        "schema": "string",
        "required": false,
        "description": "Sets the priority filter that should be applied, choose one of: LOW, HIGH or ALL - defaults to ALL"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/reports/alerts/summary",
    "method": "summarizeAlertMetrics",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Reports",
    "typeScriptTag": "reports",
    "description": "Summarize a list of alert metrics",
    "parameters": [
      {
        "name": "sources",
        "schema": "number",
        "required": false,
        "description": "alert source ids to filter metrics for"
      },
      {
        "name": "policies",
        "schema": "number",
        "required": false,
        "description": "escalation policy ids to filter metrics for"
      },
      {
        "name": "numbers",
        "schema": "string",
        "required": false,
        "description": "phone numbers of call routing numbers to filter metrics for"
      },
      {
        "name": "from",
        "schema": "string",
        "required": true,
        "description": "date-time ISO-UTC e.g. 2021-05-25T21:24:56.771Z, start of the time range, may not exceed 1 year in total span",
        "example": "FROM"
      },
      {
        "name": "until",
        "schema": "string",
        "required": true,
        "description": "date-time ISO-UTC e.g. 2021-05-25T21:24:56.771Z, end of the time range, must be after 'from', must not be in the future",
        "example": "UNTIL"
      },
      {
        "name": "timezone",
        "schema": "string",
        "required": false,
        "description": "Time zone in which the results will be rendered, defaults to tenant's configured default timezone"
      },
      {
        "name": "metric",
        "schema": "string",
        "required": false,
        "description": "Describes the metric that should be fetched choose one of: COUNT, MTTA or MTTR - defaults to COUNT"
      },
      {
        "name": "groupBy",
        "schema": "string",
        "required": false,
        "description": "Defines the grouping of metrics, choose one of: DAY, WEEK or MONTH - defaults to WEEK"
      },
      {
        "name": "priority",
        "schema": "string",
        "required": false,
        "description": "Sets the priority filter that should be applied, choose one of: LOW, HIGH or ALL - defaults to ALL"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/reports/api-keys/usage",
    "method": "listApiKeyUsageMetrics",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Reports",
    "typeScriptTag": "reports",
    "description": "List API key usage metrics for the requested resources",
    "parameters": [
      {
        "name": "scopes",
        "schema": "string",
        "required": false,
        "description": "scopes of our API resources e.g. alert see https://docs.ilert.com/rest-api/developing-ilert-apps/token-lifetimes-error-codes-app-verification-etc.#ilert-oauth2-scopes"
      },
      {
        "name": "from",
        "schema": "string",
        "required": true,
        "description": "date-time ISO-UTC e.g. 2021-05-25T21:24:56.771Z, start of the time range, may not exceed 1 month (31 days) in total span (use this to paginate)",
        "example": "FROM"
      },
      {
        "name": "until",
        "schema": "string",
        "required": true,
        "description": "date-time ISO-UTC e.g. 2021-05-25T21:24:56.771Z, end of the time range, must be after 'from', must not be in the future (use this to paginate)",
        "example": "UNTIL"
      },
      {
        "name": "timezone",
        "schema": "string",
        "required": false,
        "description": "Time zone in which the results will be rendered, defaults to tenant's configured default timezone"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/incident-templates",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Incident Templates",
    "typeScriptTag": "incidentTemplates",
    "description": "Get incident templates.",
    "parameters": [
      {
        "name": "startIndex",
        "schema": "integer",
        "required": false,
        "description": "an integer specifying the starting point (beginning with 0) when paging through a list of entities",
        "default": 0
      },
      {
        "name": "maxResults",
        "schema": "integer",
        "required": false,
        "description": "the maximum number of results when paging through a list of entities.",
        "default": 50
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/incident-templates",
    "method": "createNewTemplate",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Incident Templates",
    "typeScriptTag": "incidentTemplates",
    "description": "Create a new incident template.",
    "parameters": [
      {
        "name": "summary",
        "schema": "string",
        "description": ""
      },
      {
        "name": "id",
        "schema": "number",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "status",
        "schema": "string",
        "description": ""
      },
      {
        "name": "message",
        "schema": "string",
        "description": ""
      },
      {
        "name": "sendNotification",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "teams",
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
    "url": "/incident-templates/{id}",
    "method": "removeSpecificTemplate",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Incident Templates",
    "typeScriptTag": "incidentTemplates",
    "description": "Remove a specific incident template.",
    "parameters": [
      {
        "name": "id",
        "schema": "number",
        "required": true,
        "description": "entity ID",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Empty body delete response"
      }
    ]
  },
  {
    "url": "/incident-templates/{id}",
    "method": "getSpecificTemplate",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Incident Templates",
    "typeScriptTag": "incidentTemplates",
    "description": "Get a specific incident template.",
    "parameters": [
      {
        "name": "id",
        "schema": "number",
        "required": true,
        "description": "entity ID",
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
    "url": "/incident-templates/{id}",
    "method": "updateSpecificTemplate",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Incident Templates",
    "typeScriptTag": "incidentTemplates",
    "description": "Update the specific incident template",
    "parameters": [
      {
        "name": "id",
        "schema": "number",
        "required": true,
        "description": "entity ID",
        "example": 0
      },
      {
        "name": "summary",
        "schema": "string",
        "description": ""
      },
      {
        "name": "id",
        "schema": "number",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "status",
        "schema": "string",
        "description": ""
      },
      {
        "name": "message",
        "schema": "string",
        "description": ""
      },
      {
        "name": "sendNotification",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "teams",
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
    "url": "/services",
    "method": "listAvailableServices",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Services",
    "typeScriptTag": "services",
    "description": "Get services.",
    "parameters": [
      {
        "name": "startIndex",
        "schema": "integer",
        "required": false,
        "description": "an integer specifying the starting point (beginning with 0) when paging through a list of entities",
        "default": 0
      },
      {
        "name": "maxResults",
        "schema": "integer",
        "required": false,
        "description": "the maximum number of results when paging through a list of services. (Note: when using ?include maximum is reduced to 25)",
        "default": 10
      },
      {
        "name": "include",
        "schema": "array",
        "required": false,
        "description": "Describes optional properties that should be included in the response. You may declare multiple. (subscribed, uptime, incidents)"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/services",
    "method": "createService",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Services",
    "typeScriptTag": "services",
    "description": "Create a new service.",
    "parameters": [
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "id",
        "schema": "number",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "status",
        "schema": "string",
        "description": ""
      },
      {
        "name": "oneOpenIncidentOnly",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "showUptimeHistory",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "teams",
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
    "url": "/services/{id}",
    "method": "removeSpecificService",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Services",
    "typeScriptTag": "services",
    "description": "Remove a specific service.",
    "parameters": [
      {
        "name": "id",
        "schema": "number",
        "required": true,
        "description": "entity ID",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Empty body delete response"
      }
    ]
  },
  {
    "url": "/services/{id}",
    "method": "getSpecificService",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Services",
    "typeScriptTag": "services",
    "description": "Get a specific service.",
    "parameters": [
      {
        "name": "id",
        "schema": "number",
        "required": true,
        "description": "entity ID",
        "example": 0
      },
      {
        "name": "include",
        "schema": "array",
        "required": false,
        "description": "Describes optional properties that should be included in the response. You may declare multiple. (subscribed, uptime, incidents)"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/services/{id}",
    "method": "updateSpecificService",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Services",
    "typeScriptTag": "services",
    "description": "Update the specific service",
    "parameters": [
      {
        "name": "id",
        "schema": "number",
        "required": true,
        "description": "entity ID",
        "example": 0
      },
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "id",
        "schema": "number",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "status",
        "schema": "string",
        "description": ""
      },
      {
        "name": "oneOpenIncidentOnly",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "showUptimeHistory",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "teams",
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
    "url": "/automation-rules",
    "method": "getDeprecatedRules",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Automation Rules",
    "typeScriptTag": "automationRules",
    "description": "Get automation rules.",
    "parameters": [
      {
        "name": "startIndex",
        "schema": "integer",
        "required": false,
        "description": "an integer specifying the starting point (beginning with 0) when paging through a list of entities",
        "default": 0
      },
      {
        "name": "maxResults",
        "schema": "integer",
        "required": false,
        "description": "the maximum number of results when paging through a list of entities.",
        "default": 50
      },
      {
        "name": "service",
        "schema": "number",
        "required": true,
        "description": "The service id for which automation rules are filtered for, this param is required",
        "example": 0
      },
      {
        "name": "source",
        "schema": "number",
        "required": false,
        "description": "The alert source id for which automation rules are filtered for, this param is an alternative to service"
      },
      {
        "name": "statusPage",
        "schema": "number",
        "required": false,
        "description": "The status page id for which automation rules are filtered for, this param is an alternative to service"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/automation-rules",
    "method": "createNewRule",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Automation Rules",
    "typeScriptTag": "automationRules",
    "description": "Create a new automation rule.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "alertType",
        "schema": "string",
        "description": ""
      },
      {
        "name": "resolveIncident",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "resolveService",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "serviceStatus",
        "schema": "string",
        "description": ""
      },
      {
        "name": "template",
        "schema": "object",
        "description": ""
      },
      {
        "name": "service",
        "schema": "object",
        "description": ""
      },
      {
        "name": "alertSource",
        "schema": "object",
        "description": ""
      },
      {
        "name": "sendNotification",
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
    "url": "/automation-rules/{id}",
    "method": "removeSpecificRule",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Automation Rules",
    "typeScriptTag": "automationRules",
    "description": "Remove a specific automation rule.",
    "parameters": [
      {
        "name": "id",
        "schema": "number",
        "required": true,
        "description": "entity ID",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Empty body delete response"
      }
    ]
  },
  {
    "url": "/automation-rules/{id}",
    "method": "getSpecificRule",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Automation Rules",
    "typeScriptTag": "automationRules",
    "description": "Get a specific automation rule.",
    "parameters": [
      {
        "name": "id",
        "schema": "number",
        "required": true,
        "description": "entity ID",
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
    "url": "/automation-rules/{id}",
    "method": "updateSpecificRule",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Automation Rules",
    "typeScriptTag": "automationRules",
    "description": "Update the specific automation rule",
    "parameters": [
      {
        "name": "id",
        "schema": "number",
        "required": true,
        "description": "entity ID",
        "example": 0
      },
      {
        "name": "id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "alertType",
        "schema": "string",
        "description": ""
      },
      {
        "name": "resolveIncident",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "resolveService",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "serviceStatus",
        "schema": "string",
        "description": ""
      },
      {
        "name": "template",
        "schema": "object",
        "description": ""
      },
      {
        "name": "service",
        "schema": "object",
        "description": ""
      },
      {
        "name": "alertSource",
        "schema": "object",
        "description": ""
      },
      {
        "name": "sendNotification",
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
    "url": "/incidents",
    "method": "getIncidentList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Incidents",
    "typeScriptTag": "incidents",
    "description": "Get incidents.",
    "parameters": [
      {
        "name": "startIndex",
        "schema": "integer",
        "required": false,
        "description": "an integer specifying the starting point (beginning with 0) when paging through a list of entities",
        "default": 0
      },
      {
        "name": "maxResults",
        "schema": "integer",
        "required": false,
        "description": "the maximum number of results when paging through a list of incidents. (Note: when using ?include maximum is reduced to 25)",
        "default": 10
      },
      {
        "name": "include",
        "schema": "array",
        "required": false,
        "description": "Describes optional properties that should be included in the response. You may declare multiple. (https://api.ilert.com/api-docs"
      },
      {
        "name": "states",
        "schema": "array",
        "description": "state of the alert"
      },
      {
        "name": "services",
        "schema": "array",
        "description": "service IDs of the incident's affected services"
      },
      {
        "name": "from",
        "schema": "string",
        "description": "from date, ISO-UTC e.g. 2021-05-25T21:24:56.771Z, based on reportTime"
      },
      {
        "name": "until",
        "schema": "string",
        "description": "until date, ISO-UTC e.g. 2021-05-26T21:24:56.771Z, based on reportTime"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/incidents",
    "method": "createNewIncident",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Incidents",
    "typeScriptTag": "incidents",
    "description": "Create a new incident.",
    "parameters": [
      {
        "name": "summary",
        "schema": "string",
        "description": ""
      },
      {
        "name": "id",
        "schema": "number",
        "description": ""
      },
      {
        "name": "status",
        "schema": "string",
        "description": ""
      },
      {
        "name": "message",
        "schema": "string",
        "description": ""
      },
      {
        "name": "sendNotification",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "createdAt",
        "schema": "string",
        "description": ""
      },
      {
        "name": "updatedAt",
        "schema": "string",
        "description": ""
      },
      {
        "name": "affectedServices",
        "schema": "array",
        "description": ""
      },
      {
        "name": "resolvedOn",
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
    "url": "/incidents/publish-info",
    "method": "forecastAffectedSubscribersAndStatusPages",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Incidents",
    "typeScriptTag": "incidents",
    "description": "Forecast the affected subscribers and status pages",
    "parameters": [
      {
        "name": "summary",
        "schema": "string",
        "description": ""
      },
      {
        "name": "id",
        "schema": "number",
        "description": ""
      },
      {
        "name": "status",
        "schema": "string",
        "description": ""
      },
      {
        "name": "message",
        "schema": "string",
        "description": ""
      },
      {
        "name": "sendNotification",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "createdAt",
        "schema": "string",
        "description": ""
      },
      {
        "name": "updatedAt",
        "schema": "string",
        "description": ""
      },
      {
        "name": "affectedServices",
        "schema": "array",
        "description": ""
      },
      {
        "name": "resolvedOn",
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
    "url": "/incidents/{id}",
    "method": "getSpecificIncident",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Incidents",
    "typeScriptTag": "incidents",
    "description": "Get a specific incident.",
    "parameters": [
      {
        "name": "id",
        "schema": "number",
        "required": true,
        "description": "entity ID",
        "example": 0
      },
      {
        "name": "include",
        "schema": "array",
        "required": false,
        "description": "Describes optional properties that should be included in the response. You may declare multiple. (subscribed, affectedTeams, history)"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/incidents/{id}",
    "method": "updateSpecificIncident",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Incidents",
    "typeScriptTag": "incidents",
    "description": "Update the specific incident.",
    "parameters": [
      {
        "name": "id",
        "schema": "number",
        "required": true,
        "description": "entity ID",
        "example": 0
      },
      {
        "name": "ifMatch",
        "schema": "string",
        "required": false,
        "description": "Should be the ETag response header retrieved from GET /incidents/{id} to prevent updating the incident based on outdated information. Will return 412 status code in case of conflict."
      },
      {
        "name": "summary",
        "schema": "string",
        "description": ""
      },
      {
        "name": "id",
        "schema": "number",
        "description": ""
      },
      {
        "name": "status",
        "schema": "string",
        "description": ""
      },
      {
        "name": "message",
        "schema": "string",
        "description": ""
      },
      {
        "name": "sendNotification",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "createdAt",
        "schema": "string",
        "description": ""
      },
      {
        "name": "updatedAt",
        "schema": "string",
        "description": ""
      },
      {
        "name": "affectedServices",
        "schema": "array",
        "description": ""
      },
      {
        "name": "resolvedOn",
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
    "url": "/incidents/{id}/private-subscribers",
    "method": "getPrivateSubscribers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Incidents",
    "typeScriptTag": "incidents",
    "description": "Get the subscribers (users and teams) of an incident",
    "parameters": [
      {
        "name": "id",
        "schema": "number",
        "required": true,
        "description": "entity ID",
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
    "url": "/incidents/{id}/private-subscribers",
    "method": "addSubscribers",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Incidents",
    "typeScriptTag": "incidents",
    "description": "Add subscribers (users and teams) to an incident",
    "parameters": [
      {
        "name": "id",
        "schema": "number",
        "required": true,
        "description": "entity ID",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      }
    ]
  },
  {
    "url": "/services/{id}/private-subscribers",
    "method": "getSubscribers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Services",
    "typeScriptTag": "services",
    "description": "Get the subscribers (users and teams) of a service",
    "parameters": [
      {
        "name": "id",
        "schema": "number",
        "required": true,
        "description": "entity ID",
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
    "url": "/services/{id}/private-subscribers",
    "method": "setPrivateSubscribers",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Services",
    "typeScriptTag": "services",
    "description": "Set subscribers (users and teams) of a service",
    "parameters": [
      {
        "name": "id",
        "schema": "number",
        "required": true,
        "description": "entity ID",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      }
    ]
  },
  {
    "url": "/status-pages",
    "method": "getStatusPages",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Status Pages",
    "typeScriptTag": "statusPages",
    "description": "Get status pages.",
    "parameters": [
      {
        "name": "startIndex",
        "schema": "integer",
        "required": false,
        "description": "an integer specifying the starting point (beginning with 0) when paging through a list of entities",
        "default": 0
      },
      {
        "name": "maxResults",
        "schema": "integer",
        "required": false,
        "description": "the maximum number of results when paging through a list of status pages.",
        "default": 25
      },
      {
        "name": "include",
        "schema": "array",
        "required": false,
        "description": "Describes optional properties that should be included in the response. You may declare multiple. (https://api.ilert.com/api-docs"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/status-pages",
    "method": "createNewStatusPage",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Status Pages",
    "typeScriptTag": "statusPages",
    "description": "Create a new status page.",
    "parameters": [
      {
        "name": "id",
        "schema": "number",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "domain",
        "schema": "string",
        "description": ""
      },
      {
        "name": "subdomain",
        "schema": "string",
        "description": ""
      },
      {
        "name": "timezone",
        "schema": "string",
        "description": ""
      },
      {
        "name": "faviconUrl",
        "schema": "string",
        "description": ""
      },
      {
        "name": "logoUrl",
        "schema": "string",
        "description": ""
      },
      {
        "name": "visibility",
        "schema": "string",
        "description": ""
      },
      {
        "name": "hiddenFromSearch",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "showSubscribeAction",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "showIncidentHistoryOption",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "pageTitle",
        "schema": "string",
        "description": ""
      },
      {
        "name": "pageDescription",
        "schema": "string",
        "description": ""
      },
      {
        "name": "pageLayout",
        "schema": "string",
        "description": ""
      },
      {
        "name": "logoRedirectUrl",
        "schema": "string",
        "description": ""
      },
      {
        "name": "activated",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "status",
        "schema": "string",
        "description": ""
      },
      {
        "name": "teams",
        "schema": "array",
        "description": ""
      },
      {
        "name": "services",
        "schema": "array",
        "description": ""
      },
      {
        "name": "metrics",
        "schema": "array",
        "description": ""
      },
      {
        "name": "ipWhitelist",
        "schema": "array",
        "description": ""
      },
      {
        "name": "structure",
        "schema": "object",
        "description": ""
      },
      {
        "name": "appearance",
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
    "url": "/status-pages/{id}",
    "method": "removeSpecificPage",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Status Pages",
    "typeScriptTag": "statusPages",
    "description": "Remove a specific status page.",
    "parameters": [
      {
        "name": "id",
        "schema": "number",
        "required": true,
        "description": "entity ID",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Empty body delete response"
      }
    ]
  },
  {
    "url": "/status-pages/{id}",
    "method": "getPageDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Status Pages",
    "typeScriptTag": "statusPages",
    "description": "Get a specific status page.",
    "parameters": [
      {
        "name": "id",
        "schema": "number",
        "required": true,
        "description": "entity ID",
        "example": 0
      },
      {
        "name": "include",
        "schema": "array",
        "required": false,
        "description": "Describes optional properties that should be included in the response. You may declare multiple. (subscribed, uptime, groups, structure). Note: structure is always included by default."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/status-pages/{id}",
    "method": "updateSpecificPage",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Status Pages",
    "typeScriptTag": "statusPages",
    "description": "Update the specific status page",
    "parameters": [
      {
        "name": "id",
        "schema": "number",
        "required": true,
        "description": "entity ID",
        "example": 0
      },
      {
        "name": "id",
        "schema": "number",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "domain",
        "schema": "string",
        "description": ""
      },
      {
        "name": "subdomain",
        "schema": "string",
        "description": ""
      },
      {
        "name": "timezone",
        "schema": "string",
        "description": ""
      },
      {
        "name": "faviconUrl",
        "schema": "string",
        "description": ""
      },
      {
        "name": "logoUrl",
        "schema": "string",
        "description": ""
      },
      {
        "name": "visibility",
        "schema": "string",
        "description": ""
      },
      {
        "name": "hiddenFromSearch",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "showSubscribeAction",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "showIncidentHistoryOption",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "pageTitle",
        "schema": "string",
        "description": ""
      },
      {
        "name": "pageDescription",
        "schema": "string",
        "description": ""
      },
      {
        "name": "pageLayout",
        "schema": "string",
        "description": ""
      },
      {
        "name": "logoRedirectUrl",
        "schema": "string",
        "description": ""
      },
      {
        "name": "activated",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "status",
        "schema": "string",
        "description": ""
      },
      {
        "name": "teams",
        "schema": "array",
        "description": ""
      },
      {
        "name": "services",
        "schema": "array",
        "description": ""
      },
      {
        "name": "metrics",
        "schema": "array",
        "description": ""
      },
      {
        "name": "ipWhitelist",
        "schema": "array",
        "description": ""
      },
      {
        "name": "structure",
        "schema": "object",
        "description": ""
      },
      {
        "name": "appearance",
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
    "url": "/status-pages/{id}/groups",
    "method": "getGroups",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Status Pages",
    "typeScriptTag": "statusPages",
    "description": "Get the groups of a status page",
    "parameters": [
      {
        "name": "id",
        "schema": "number",
        "required": true,
        "description": "entity ID",
        "example": 0
      },
      {
        "name": "startIndex",
        "schema": "integer",
        "required": false,
        "description": "an integer specifying the starting point (beginning with 0) when paging through a list of entities",
        "default": 0
      },
      {
        "name": "maxResults",
        "schema": "integer",
        "required": false,
        "description": "the maximum number of results when paging through a list of entities.",
        "default": 50
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/status-pages/{id}/groups",
    "method": "addGroupToPage",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Status Pages",
    "typeScriptTag": "statusPages",
    "description": "Add a group to a status page",
    "parameters": [
      {
        "name": "id",
        "schema": "number",
        "required": true,
        "description": "entity ID",
        "example": 0
      },
      {
        "name": "id",
        "schema": "number",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
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
    "url": "/status-pages/{id}/groups/{group-id}",
    "method": "removeGroup",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Status Pages",
    "typeScriptTag": "statusPages",
    "description": "Remove group from a status page",
    "parameters": [
      {
        "name": "id",
        "schema": "number",
        "required": true,
        "description": "entity ID",
        "example": 0
      },
      {
        "name": "groupId",
        "schema": "number",
        "required": true,
        "description": "entity ID",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      }
    ]
  },
  {
    "url": "/status-pages/{id}/groups/{group-id}",
    "method": "getSpecificGroup",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Status Pages",
    "typeScriptTag": "statusPages",
    "description": "Get a specific group of a status page",
    "parameters": [
      {
        "name": "id",
        "schema": "number",
        "required": true,
        "description": "entity ID",
        "example": 0
      },
      {
        "name": "groupId",
        "schema": "number",
        "required": true,
        "description": "entity ID",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/status-pages/{id}/groups/{group-id}",
    "method": "updateGroup",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Status Pages",
    "typeScriptTag": "statusPages",
    "description": "Update a group of a status page",
    "parameters": [
      {
        "name": "id",
        "schema": "number",
        "required": true,
        "description": "entity ID",
        "example": 0
      },
      {
        "name": "groupId",
        "schema": "number",
        "required": true,
        "description": "entity ID",
        "example": 0
      },
      {
        "name": "id",
        "schema": "number",
        "description": ""
      },
      {
        "name": "name",
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
    "url": "/status-pages/{id}/private-subscribers",
    "method": "removeSubscriber",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Status Pages",
    "typeScriptTag": "statusPages",
    "description": "Remove subscriber (user and team) from a status page",
    "parameters": [
      {
        "name": "id",
        "schema": "number",
        "required": true,
        "description": "entity ID",
        "example": 0
      },
      {
        "name": "id",
        "schema": "number",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "type",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      }
    ]
  },
  {
    "url": "/status-pages/{id}/private-subscribers",
    "method": "getPrivateSubscribers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Status Pages",
    "typeScriptTag": "statusPages",
    "description": "Get the subscribers (users and teams) of a status page",
    "parameters": [
      {
        "name": "id",
        "schema": "number",
        "required": true,
        "description": "entity ID",
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
    "url": "/status-pages/{id}/private-subscribers",
    "method": "addSubscriber",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Status Pages",
    "typeScriptTag": "statusPages",
    "description": "Add subscriber (user and team) to a status page",
    "parameters": [
      {
        "name": "id",
        "schema": "number",
        "required": true,
        "description": "entity ID",
        "example": 0
      },
      {
        "name": "id",
        "schema": "number",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "type",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      }
    ]
  },
  {
    "url": "/status-pages/{id}/private-subscribers",
    "method": "setPrivateSubscribers",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Status Pages",
    "typeScriptTag": "statusPages",
    "description": "Set subscribers (users and teams) of a status page",
    "parameters": [
      {
        "name": "id",
        "schema": "number",
        "required": true,
        "description": "entity ID",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      }
    ]
  },
  {
    "url": "/service-outages",
    "method": "getServiceOutages",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Service Outages",
    "typeScriptTag": "serviceOutages",
    "description": "Get the outages (including applied overrides) of a specific service",
    "parameters": [
      {
        "name": "service",
        "schema": "number",
        "description": "the id of the service for which the outages should be fetched"
      },
      {
        "name": "from",
        "schema": "string",
        "description": "from date, ISO-UTC e.g. 2021-05-25T21:24:56.771Z"
      },
      {
        "name": "until",
        "schema": "string",
        "description": "until date, ISO-UTC e.g. 2021-05-26T21:24:56.771Z"
      },
      {
        "name": "ignoreOverrides",
        "schema": "boolean",
        "description": "if the outages should not take overrides into account, default is false"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/service-outages/overrides",
    "method": "getOverrides",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Service Outages",
    "typeScriptTag": "serviceOutages",
    "description": "Get the overrides of a specific service",
    "parameters": [
      {
        "name": "service",
        "schema": "number",
        "description": "the id of the service for which the overrides should be fetched"
      },
      {
        "name": "from",
        "schema": "string",
        "description": "from date, ISO-UTC e.g. 2021-05-25T21:24:56.771Z"
      },
      {
        "name": "until",
        "schema": "string",
        "description": "until date, ISO-UTC e.g. 2021-05-26T21:24:56.771Z"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/service-outages/overrides",
    "method": "overridePartHistory",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Service Outages",
    "typeScriptTag": "serviceOutages",
    "description": "Override a part of a service's outage history",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "service",
        "schema": "object",
        "description": ""
      },
      {
        "name": "status",
        "schema": "string",
        "description": ""
      },
      {
        "name": "from",
        "schema": "string",
        "description": ""
      },
      {
        "name": "until",
        "schema": "string",
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
    "url": "/service-outages/overrides/{id}",
    "method": "removeOverride",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Service Outages",
    "typeScriptTag": "serviceOutages",
    "description": "Remove a service outage override",
    "parameters": [
      {
        "name": "id",
        "schema": "number",
        "required": true,
        "description": "entity ID",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      }
    ]
  },
  {
    "url": "/service-outages/overrides/{id}",
    "method": "getSpecificOverride",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Service Outages",
    "typeScriptTag": "serviceOutages",
    "description": "Get the specific service outage override",
    "parameters": [
      {
        "name": "id",
        "schema": "number",
        "required": true,
        "description": "entity ID",
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
    "url": "/service-outages/overrides/{id}",
    "method": "updateOverride",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Service Outages",
    "typeScriptTag": "serviceOutages",
    "description": "Update an existing service outage override",
    "parameters": [
      {
        "name": "id",
        "schema": "number",
        "required": true,
        "description": "entity ID",
        "example": 0
      },
      {
        "name": "id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "service",
        "schema": "object",
        "description": ""
      },
      {
        "name": "status",
        "schema": "string",
        "description": ""
      },
      {
        "name": "from",
        "schema": "string",
        "description": ""
      },
      {
        "name": "until",
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
    "url": "/metric-data-sources",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Metric Data Sources",
    "typeScriptTag": "metricDataSources",
    "description": "Get Metric Data Sources",
    "parameters": [
      {
        "name": "startIndex",
        "schema": "integer",
        "required": false,
        "description": "an integer specifying the starting point (beginning with 0) when paging through a list of entities",
        "default": 0
      },
      {
        "name": "maxResults",
        "schema": "integer",
        "required": false,
        "description": "the maximum number of results when paging through a list of metric data sources",
        "default": 10
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/metric-data-sources",
    "method": "createNewMetricDataSource",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Metric Data Sources",
    "typeScriptTag": "metricDataSources",
    "description": "Create a new Metric Data Source.",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TYPE"
      },
      {
        "name": "teams",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "metadata",
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
    "url": "/metric-data-sources/{id}",
    "method": "deleteSpecificDataSource",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Metric Data Sources",
    "typeScriptTag": "metricDataSources",
    "description": "Delete a specific Metric Data Source",
    "parameters": [
      {
        "name": "id",
        "schema": "number",
        "required": true,
        "description": "entity ID",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Empty body delete response"
      }
    ]
  },
  {
    "url": "/metric-data-sources/{id}",
    "method": "getSpecificDataSource",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Metric Data Sources",
    "typeScriptTag": "metricDataSources",
    "description": "Get a specific Metric Data Source",
    "parameters": [
      {
        "name": "id",
        "schema": "number",
        "required": true,
        "description": "entity ID",
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
    "url": "/metric-data-sources/{id}",
    "method": "updateSpecificDataSource",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Metric Data Sources",
    "typeScriptTag": "metricDataSources",
    "description": "Update the specific Metric Data Source",
    "parameters": [
      {
        "name": "id",
        "schema": "number",
        "required": true,
        "description": "entity ID",
        "example": 0
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TYPE"
      },
      {
        "name": "teams",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "metadata",
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
    "url": "/metrics",
    "method": "getMetrics",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Metrics",
    "typeScriptTag": "metrics",
    "description": "Get metrics.",
    "parameters": [
      {
        "name": "startIndex",
        "schema": "integer",
        "required": false,
        "description": "an integer specifying the starting point (beginning with 0) when paging through a list of entities",
        "default": 0
      },
      {
        "name": "maxResults",
        "schema": "integer",
        "required": false,
        "description": "the maximum number of results when paging through a list of metrics. (Note: when using ?include maximum is reduced to 25)",
        "default": 10
      },
      {
        "name": "include",
        "schema": "array",
        "required": false,
        "description": "Describes optional properties that should be included in the response. You may declare multiple. (dataSource, integrationKey)"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/metrics",
    "method": "createNewMetric",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Metrics",
    "typeScriptTag": "metrics",
    "description": "Create a new metric.",
    "parameters": [
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "aggregationType",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "AGGREGATIONTYPE"
      },
      {
        "name": "displayType",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DISPLAYTYPE"
      },
      {
        "name": "interpolateGaps",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": "false"
      },
      {
        "name": "lockYAxisMax",
        "schema": "number",
        "required": false,
        "description": "",
        "default": null
      },
      {
        "name": "lockYAxisMin",
        "schema": "number",
        "required": false,
        "description": "",
        "default": null
      },
      {
        "name": "mouseOverDecimal",
        "schema": "number",
        "required": false,
        "description": "",
        "default": 0
      },
      {
        "name": "showValuesOnMouseOver",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "teams",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "unitLabel",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "metadata",
        "schema": "undefined",
        "required": false,
        "description": "",
        "default": null
      },
      {
        "name": "dataSource",
        "schema": "object",
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
    "url": "/metric/{id}",
    "method": "deleteSpecificMetric",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Metrics",
    "typeScriptTag": "metrics",
    "description": "Delete the specific Metric",
    "parameters": [
      {
        "name": "id",
        "schema": "number",
        "required": true,
        "description": "entity ID",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Empty body delete response"
      }
    ]
  },
  {
    "url": "/metric/{id}",
    "method": "getSpecificMetric",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Metrics",
    "typeScriptTag": "metrics",
    "description": "Get a specific Metric",
    "parameters": [
      {
        "name": "id",
        "schema": "number",
        "required": true,
        "description": "entity ID",
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
    "url": "/metric/{id}",
    "method": "updateSpecificMetric",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Metrics",
    "typeScriptTag": "metrics",
    "description": "Update the specific Metric",
    "parameters": [
      {
        "name": "id",
        "schema": "number",
        "required": true,
        "description": "entity ID",
        "example": 0
      },
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "aggregationType",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "AGGREGATIONTYPE"
      },
      {
        "name": "displayType",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DISPLAYTYPE"
      },
      {
        "name": "interpolateGaps",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": "false"
      },
      {
        "name": "lockYAxisMax",
        "schema": "number",
        "required": false,
        "description": "",
        "default": null
      },
      {
        "name": "lockYAxisMin",
        "schema": "number",
        "required": false,
        "description": "",
        "default": null
      },
      {
        "name": "mouseOverDecimal",
        "schema": "number",
        "required": false,
        "description": "",
        "default": 0
      },
      {
        "name": "showValuesOnMouseOver",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "teams",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "unitLabel",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "metadata",
        "schema": "undefined",
        "required": false,
        "description": "",
        "default": null
      },
      {
        "name": "dataSource",
        "schema": "object",
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
  }
]
    }
      language="TypeScript"
      apiTitle="ilert REST API"
      apiBaseUrl="/api"
      apiVersion=""
      endpoints={80}
      sdkMethods={162}
      schemas={207}
      parameters={713}
      difficulty="Hard"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/ilert/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/ilert/openapi.yaml"
      developerDocumentation="api.ilert.com/api-docs"
    />
  );
}
  