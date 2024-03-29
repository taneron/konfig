import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "Epidemic Sound",
    "numberOfMethods": 37,
    "categories": [
      "audio_generation",
      "music",
      "sound_effects",
      "media",
      "entertainment",
      "royalty_free_music"
    ],
    "index": "epidemic-sound/typescript",
    "language": "TypeScript",
    "link": "/sdk/epidemic-sound/typescript/",
    "developerDocumentation": "partner-content-api.epidemicsound.com/swagger",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/epidemic-sound/openapi.yaml"
  },
  {
    "name": "Epidemic Sound",
    "numberOfMethods": 37,
    "categories": [
      "audio_generation",
      "music",
      "sound_effects",
      "media",
      "entertainment",
      "royalty_free_music"
    ],
    "index": "epidemic-sound/python",
    "language": "Python",
    "link": "/sdk/epidemic-sound/python/",
    "developerDocumentation": "partner-content-api.epidemicsound.com/swagger",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/epidemic-sound/openapi.yaml"
  },
  {
    "name": "Epidemic Sound",
    "numberOfMethods": 37,
    "categories": [
      "audio_generation",
      "music",
      "sound_effects",
      "media",
      "entertainment",
      "royalty_free_music"
    ],
    "index": "epidemic-sound/java",
    "language": "Java",
    "link": "/sdk/epidemic-sound/java/",
    "developerDocumentation": "partner-content-api.epidemicsound.com/swagger",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/epidemic-sound/openapi.yaml"
  }
];

export default function EpidemicSound() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="Epidemic Sound"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/epidemic-sound/imagePreview.png"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/epidemic-sound/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/epidemic-sound/favicon.png"
      sdks={sdks}
      homepage="www.epidemicsound.com/"
      companyKebabCase="epidemic-sound"
      categories={allCategories}
      metaDescription={`Epidemic Sound has transformed the soundtracking experience for global brands and professional creators, with an expansive catalog of world-class music and sound effects that's seen and heard over 2.5 billion times a day around the globe.

Providing a direct license model that comes with all rights included and next-generation soundtracking tools, Epidemic Sound empowers creators to unlock more feeling in everything they create and share their stories with the world. Epidemic Sound continuously enriches its world-class catalog of music by teaming up with artists, composers, and producers to create tracks spanning all genres, while supporting them financially and creatively.`}
    />
  )
}