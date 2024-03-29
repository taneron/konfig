import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function ButtondownTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="buttondown-typescript-sdk"
      metaDescription={`Buttondown is a small, elegant tool for producing newsletters.

The minimalist interface makes it easy for you to write great emails; the automation acts like the editorial assistant you wish you had, by checking for typos, broken links, or malformed images; the portable subscription widget makes it really easy to grow your audience from wherever you host your site.`}
      company="Buttondown"
      doesNotHaveApiDescription={true}
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/buttondown/logo.png"
      companyKebabCase="buttondown"
      clientNameCamelCase="buttondown"
      homepage="buttondown.email/"
      lastUpdated={new Date("2024-03-29T19:17:09.884Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/buttondown/favicon.png"
      // Missing contactUrl
      // Missing contactEmail
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/buttondown/imagePreview.png"
      GettingStarted={GettingStarted}
      FirstRequest={FirstRequest}
      categories={["newsletter","communication","email","marketing"]}
      methods={[
  {
    "url": "/exports",
    "method": "listExports",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Export",
    "typeScriptTag": "export",
    "description": "List Exports",
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
        "statusCode": "403",
        "description": ""
      }
    ]
  },
  {
    "url": "/exports",
    "method": "createNewExport",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Export",
    "typeScriptTag": "export",
    "description": "Create Export",
    "parameters": [
      {
        "name": "collections",
        "schema": "array",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Some software applications may want programmatic access to their newsletter exports.\nThis assists with a few niche use cases, such as regular backups or data ingestion\n(into a data warehouse), or post-publishing processes that hinge on email events.\n\nIn general, you probably won't _need_ to use this endpoint unless you\n _absolutely_ need to use this endpoint."
      },
      {
        "statusCode": "403",
        "description": ""
      }
    ]
  },
  {
    "url": "/exports/{pk}",
    "method": "getExport",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Export",
    "typeScriptTag": "export",
    "description": "Retrieve Export",
    "parameters": [
      {
        "name": "pk",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PK"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Some software applications may want programmatic access to their newsletter exports.\nThis assists with a few niche use cases, such as regular backups or data ingestion\n(into a data warehouse), or post-publishing processes that hinge on email events.\n\nIn general, you probably won't _need_ to use this endpoint unless you\n _absolutely_ need to use this endpoint."
      },
      {
        "statusCode": "403",
        "description": ""
      }
    ]
  },
  {
    "url": "/tags",
    "method": "listTags",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Tag",
    "typeScriptTag": "tag",
    "description": "List Tags",
    "parameters": [],
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
    "tag": "Tag",
    "typeScriptTag": "tag",
    "description": "Create Tag",
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
        "name": "color",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "COLOR"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Tags are a way to organize your subscribers. You can create, update, and\ndelete tags via the API. You can also list all tags for a given newsletter.\n\nTags don't have any strict functionality on their own, but you can send emails\nto subscribers with a given tag (or to all subscribers _without_ a given tag.)"
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
    "url": "/tags/{tag_id}",
    "method": "removeTag",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Tag",
    "typeScriptTag": "tag",
    "description": "Delete Tag",
    "parameters": [
      {
        "name": "tagId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TAG_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
      }
    ]
  },
  {
    "url": "/tags/{tag_id}",
    "method": "getTag",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Tag",
    "typeScriptTag": "tag",
    "description": "Retrieve Tag",
    "parameters": [
      {
        "name": "tagId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TAG_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Tags are a way to organize your subscribers. You can create, update, and\ndelete tags via the API. You can also list all tags for a given newsletter.\n\nTags don't have any strict functionality on their own, but you can send emails\nto subscribers with a given tag (or to all subscribers _without_ a given tag.)"
      }
    ]
  },
  {
    "url": "/tags/{tag_id}",
    "method": "updateTag",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Tag",
    "typeScriptTag": "tag",
    "description": "Update Tag",
    "parameters": [
      {
        "name": "tagId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TAG_ID"
      },
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "color",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Tags are a way to organize your subscribers. You can create, update, and\ndelete tags via the API. You can also list all tags for a given newsletter.\n\nTags don't have any strict functionality on their own, but you can send emails\nto subscribers with a given tag (or to all subscribers _without_ a given tag.)"
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/ping",
    "method": "pingHealthCheck",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "HealthCheck",
    "typeScriptTag": "healthCheck",
    "description": "Ping",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      }
    ]
  },
  {
    "url": "/images",
    "method": "createNewImage",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Image",
    "typeScriptTag": "image",
    "description": "Create Image",
    "parameters": [
      {
        "name": "image",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "IMAGE"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Images are, well, images! Buttondown allows you to upload images to its secure\nS3 bucket and do with them what you will. This is sort of an odd duck of an\nAPI, to be sure, but if you want to be able to do things like draft\nand send emails completely on your iPad you need a surefire way of creating images."
      }
    ]
  },
  {
    "url": "/images/{image_id}",
    "method": "deleteImage",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Image",
    "typeScriptTag": "image",
    "description": "Delete Image",
    "parameters": [
      {
        "name": "imageId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "IMAGE_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
      }
    ]
  },
  {
    "url": "/emails",
    "method": "listEmails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Email",
    "typeScriptTag": "email",
    "description": "List Emails",
    "parameters": [
      {
        "name": "status",
        "schema": "array",
        "required": false,
        "description": "",
        "default": [
          "about_to_send",
          "in_flight",
          "sent"
        ]
      },
      {
        "name": "includedTags",
        "schema": "array",
        "required": false,
        "description": "",
        "default": []
      },
      {
        "name": "excludedTags",
        "schema": "array",
        "required": false,
        "description": "",
        "default": []
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
      }
    ]
  },
  {
    "url": "/emails",
    "method": "createNewEmail",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Email",
    "typeScriptTag": "email",
    "description": "Create Email",
    "parameters": [
      {
        "name": "included_tags",
        "schema": "array",
        "required": false,
        "description": "",
        "default": []
      },
      {
        "name": "excluded_tags",
        "schema": "array",
        "required": false,
        "description": "",
        "default": []
      },
      {
        "name": "publish_date",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "subject",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SUBJECT"
      },
      {
        "name": "body",
        "schema": "string",
        "required": false,
        "description": "",
        "default": ""
      },
      {
        "name": "email_type",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "status",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "metadata",
        "schema": "object",
        "required": false,
        "description": "",
        "default": {}
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Emails are what you're for here on Buttondown at the end of the day, right?\nCreating an email via the API is just like creating one in the interface;\nit will instantly trigger sending actual emails,\nbased on the tags and email type you provide."
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
    "url": "/emails/{pk}",
    "method": "getEmail",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Email",
    "typeScriptTag": "email",
    "description": "Retrieve Email",
    "parameters": [
      {
        "name": "pk",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PK"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Emails are what you're for here on Buttondown at the end of the day, right?\nCreating an email via the API is just like creating one in the interface;\nit will instantly trigger sending actual emails,\nbased on the tags and email type you provide."
      },
      {
        "statusCode": "403",
        "description": ""
      }
    ]
  },
  {
    "url": "/emails/{pk}/analytics",
    "method": "getAnalytics",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Email",
    "typeScriptTag": "email",
    "description": "Retrieve Email Analytics",
    "parameters": [
      {
        "name": "pk",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PK"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      }
    ]
  },
  {
    "url": "/subscribers",
    "method": "listSubscribers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Subscriber",
    "typeScriptTag": "subscriber",
    "description": "List Subscribers",
    "parameters": [
      {
        "name": "type",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "email",
        "schema": "string",
        "required": false,
        "description": "",
        "default": ""
      },
      {
        "name": "tag",
        "schema": "string",
        "required": false,
        "description": "",
        "default": ""
      },
      {
        "name": "tag",
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
        "statusCode": "403",
        "description": ""
      }
    ]
  },
  {
    "url": "/subscribers",
    "method": "createNewSubscriber",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Subscriber",
    "typeScriptTag": "subscriber",
    "description": "Create Subscriber",
    "parameters": [
      {
        "name": "tags",
        "schema": "array",
        "required": false,
        "description": "",
        "default": []
      },
      {
        "name": "email",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EMAIL"
      },
      {
        "name": "notes",
        "schema": "string",
        "required": false,
        "description": "",
        "default": ""
      },
      {
        "name": "metadata",
        "schema": "object",
        "required": false,
        "description": "",
        "default": {}
      },
      {
        "name": "referrer_url",
        "schema": "string",
        "required": false,
        "description": "",
        "default": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Subscribers are the main way you collect email addresses and\nrecipients on Buttondown. They're what you see on your\n[subscribers page](https://buttondown.email/subscribers)."
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
    "url": "/subscribers/{pk}",
    "method": "removeSubscriber",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Subscriber",
    "typeScriptTag": "subscriber",
    "description": "Delete Subscriber",
    "parameters": [
      {
        "name": "pk",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PK"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
      },
      {
        "statusCode": "403",
        "description": ""
      }
    ]
  },
  {
    "url": "/subscribers/{pk}",
    "method": "getSubscriber",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Subscriber",
    "typeScriptTag": "subscriber",
    "description": "Retrieve Subscriber",
    "parameters": [
      {
        "name": "pk",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PK"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Subscribers are the main way you collect email addresses and\nrecipients on Buttondown. They're what you see on your\n[subscribers page](https://buttondown.email/subscribers)."
      }
    ]
  },
  {
    "url": "/subscribers/{pk}",
    "method": "updateDetails",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Subscriber",
    "typeScriptTag": "subscriber",
    "description": "Update Subscriber",
    "parameters": [
      {
        "name": "pk",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PK"
      },
      {
        "name": "tags",
        "schema": "array",
        "description": ""
      },
      {
        "name": "email",
        "schema": "string",
        "description": ""
      },
      {
        "name": "notes",
        "schema": "string",
        "description": ""
      },
      {
        "name": "metadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "referrer_url",
        "schema": "string",
        "description": "",
        "default": ""
      },
      {
        "name": "subscriber_type",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Subscribers are the main way you collect email addresses and\nrecipients on Buttondown. They're what you see on your\n[subscribers page](https://buttondown.email/subscribers)."
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
    "url": "/subscribers/{pk}/send-reminder",
    "method": "sendReminder",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Subscriber",
    "typeScriptTag": "subscriber",
    "description": "Send Reminder",
    "parameters": [
      {
        "name": "pk",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PK"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      },
      {
        "statusCode": "403",
        "description": ""
      }
    ]
  },
  {
    "url": "/subscribers/{pk}/emails/{email_pk}",
    "method": "sendTo",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Email",
    "typeScriptTag": "email",
    "description": "Send Email To",
    "parameters": [
      {
        "name": "pk",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PK"
      },
      {
        "name": "emailPk",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EMAIL_PK"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
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
    "url": "/newsletters",
    "method": "listNewsletters",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Newsletter",
    "typeScriptTag": "newsletter",
    "description": "List Newsletters",
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
        "statusCode": "403",
        "description": ""
      }
    ]
  },
  {
    "url": "/newsletters",
    "method": "createNewNewsletter",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Newsletter",
    "typeScriptTag": "newsletter",
    "description": "Create Newsletter",
    "parameters": [
      {
        "name": "description",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DESCRIPTION"
      },
      {
        "name": "username",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERNAME"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "You will likely not need to interact with your newsletter settings\nprogrammatically, but if you do, this is the endpoint for you. You can\ncreate, update, and list newsletters via the API; this is ideal for\nintegrating with Buttondown as a headless email or newsletter provider\n(e.g. for a SaaS product.)"
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
    "url": "/newsletters/{pk}",
    "method": "deleteById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Newsletter",
    "typeScriptTag": "newsletter",
    "description": "Delete Newsletter",
    "parameters": [
      {
        "name": "pk",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PK"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
      },
      {
        "statusCode": "403",
        "description": ""
      }
    ]
  },
  {
    "url": "/newsletters/{pk}",
    "method": "updateContent",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Newsletter",
    "typeScriptTag": "newsletter",
    "description": "Update Newsletter",
    "parameters": [
      {
        "name": "pk",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PK"
      },
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "username",
        "schema": "string",
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
        "description": "You will likely not need to interact with your newsletter settings\nprogrammatically, but if you do, this is the endpoint for you. You can\ncreate, update, and list newsletters via the API; this is ideal for\nintegrating with Buttondown as a headless email or newsletter provider\n(e.g. for a SaaS product.)"
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
    "url": "/bulk_actions",
    "method": "createBulkAction",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Action",
    "typeScriptTag": "action",
    "description": "Create Bulk Action",
    "parameters": [
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TYPE"
      },
      {
        "name": "metadata",
        "schema": "object",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "A bulk action represents, well, a bulk action. It is used to perform\nactions on a large number of objects at once. For example, you can\nuse it to delete a large number of emails, or to unsubscribe a large\nnumber of subscribers. The actions within a bulk action are processed\nserially by Buttondown; this should be considered an ergonomic way to\nbatch API calls across the network rather than a net-new piece of functionality\nin of itself."
      },
      {
        "statusCode": "403",
        "description": ""
      }
    ]
  },
  {
    "url": "/bulk_actions/{pk}",
    "method": "getBulkAction",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Action",
    "typeScriptTag": "action",
    "description": "Retrieve Bulk Action",
    "parameters": [
      {
        "name": "pk",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PK"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A bulk action represents, well, a bulk action. It is used to perform\nactions on a large number of objects at once. For example, you can\nuse it to delete a large number of emails, or to unsubscribe a large\nnumber of subscribers. The actions within a bulk action are processed\nserially by Buttondown; this should be considered an ergonomic way to\nbatch API calls across the network rather than a net-new piece of functionality\nin of itself."
      },
      {
        "statusCode": "403",
        "description": ""
      }
    ]
  }
]
    }
      language="TypeScript"
      apiTitle="NinjaAPI"
      apiBaseUrl="https://api.buttondown.email/v1/"
      apiVersion="1.0.0"
      endpoints={18}
      sdkMethods={28}
      schemas={42}
      parameters={57}
      difficulty="Easy"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/buttondown/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/buttondown/openapi.yaml"
      developerDocumentation="docs.buttondown.email/"
    />
  );
}
  