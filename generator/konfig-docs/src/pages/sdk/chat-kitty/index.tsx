import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "ChatKitty",
    "numberOfMethods": 68,
    "categories": [
      "communications_software",
      "messaging",
      "chat_platforms",
      "chat_sdks"
    ],
    "index": "chat-kitty/typescript",
    "language": "TypeScript",
    "link": "/sdk/chat-kitty/typescript/",
    "developerDocumentation": "chatkitty.com/docs/api/reference",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/chatkitty/openapi.yaml"
  },
  {
    "name": "ChatKitty",
    "numberOfMethods": 68,
    "categories": [
      "communications_software",
      "messaging",
      "chat_platforms",
      "chat_sdks"
    ],
    "index": "chat-kitty/python",
    "language": "Python",
    "link": "/sdk/chat-kitty/python/",
    "developerDocumentation": "chatkitty.com/docs/api/reference",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/chatkitty/openapi.yaml"
  },
  {
    "name": "ChatKitty",
    "numberOfMethods": 68,
    "categories": [
      "communications_software",
      "messaging",
      "chat_platforms",
      "chat_sdks"
    ],
    "index": "chat-kitty/java",
    "language": "Java",
    "link": "/sdk/chat-kitty/java/",
    "developerDocumentation": "chatkitty.com/docs/api/reference",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/chatkitty/openapi.yaml"
  }
];

export default function ChatKitty() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="ChatKitty"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/chatkitty/imagePreview.png"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/chatkitty/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/chatkitty/favicon.png"
      sdks={sdks}
      homepage="chatkitty.com"
      companyKebabCase="chat-kitty"
      categories={allCategories}
      metaDescription={`ChatKitty gives you the tools to build real-time chat for web and mobile apps, complete with advanced features like moderation, offline messaging and analytics.`}
    />
  )
}