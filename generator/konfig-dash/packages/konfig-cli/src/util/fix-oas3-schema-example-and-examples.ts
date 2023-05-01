import { Spec } from 'konfig-lib'
import { findMediaObjects } from './find-media-objects'

export async function fixOas3SchemaExampleAndExamples({
  spec,
}: {
  spec: Spec
}): Promise<number> {
  let numberOfOas3ExampleAndExamplesFixed = 0
  const mediaObjects = findMediaObjects({ spec })

  for (const { media } of mediaObjects) {
    if (media.example === undefined) continue
    if (media.examples === undefined) continue

    let newExampleName = 0
    const exampleName = () => `example-${newExampleName}`
    while (exampleName() in media.examples) newExampleName++

    media.examples[exampleName()] = { value: media.example }
    delete media.example
  }

  return numberOfOas3ExampleAndExamplesFixed
}
