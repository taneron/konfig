import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "Melodie Music",
    "numberOfMethods": 14,
    "categories": [
      "entertainment",
      "music",
      "media"
    ],
    "index": "melodie-music/typescript",
    "language": "TypeScript",
    "link": "/sdk/melodie-music/typescript/",
    "developerDocumentation": "api.melod.ie/openapi",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/melodie-music/openapi.yaml"
  },
  {
    "name": "Melodie Music",
    "numberOfMethods": 14,
    "categories": [
      "entertainment",
      "music",
      "media"
    ],
    "index": "melodie-music/python",
    "language": "Python",
    "link": "/sdk/melodie-music/python/",
    "developerDocumentation": "api.melod.ie/openapi",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/melodie-music/openapi.yaml"
  },
  {
    "name": "Melodie Music",
    "numberOfMethods": 14,
    "categories": [
      "entertainment",
      "music",
      "media"
    ],
    "index": "melodie-music/java",
    "language": "Java",
    "link": "/sdk/melodie-music/java/",
    "developerDocumentation": "api.melod.ie/openapi",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/melodie-music/openapi.yaml"
  }
];

export default function MelodieMusic() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="Melodie Music"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/melodie-music/imagePreview.jpg"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/melodie-music/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/melodie-music/favicon.png"
      sdks={sdks}
      homepage="melod.ie"
      companyKebabCase="melodie-music"
      categories={allCategories}
      metaDescription={`Melodie Music (www.melod.ie) is an Australian company that provides a simple solution for content creators seeking to find and license high-quality music for their projects.

With Creator, Pro and Enterprise subscription options, their exclusive and meticulously curated catalogue of original music is accessible through an online search platform equipped with AI-powered search tools.

Founded by composers, musicians and sound designers with first-hand experience of the crucial role music plays in storytelling, Melodie delivers an intuitive, user-friendly music licensing platform that caters to the needs of content creators, while supporting the growth of the music creators themselves.

Learn more at www.melod.ie

2023 Acquisition International Awarded: *Best Music Platform Australia*
2022 Startup City Awarded: *Top 10 Startups in Australia*
2021 TMN Nominated: "Music Publisher of the Year", "Sync/ Licensing Biz of the Year", "Music Tech Platform of the Year".`}
    />
  )
}