import { getOperations, OpenAPIV3_XDocument, TagObject } from 'konfig-lib'

export async function fixDuplicateTagNames({
  spec,
}: {
  spec: OpenAPIV3_XDocument
}): Promise<number> {
  if (spec.tags === undefined) return 0

  const operations = getOperations({ spec })
  // Create a mapping of tag name to # of operations under that tag
  const counts: Record<string, number> = {}
  spec.tags.forEach(({ name }) => (counts[name] = 0)) // Initialize map to counts of 0
  operations.forEach(({ operation }) => {
    if (operation.tags === undefined) return
    operation.tags.forEach(
      (tag) => (counts[tag] = tag in counts ? counts[tag] + 1 : 1)
    )
  })

  // Sort the tags by # of operations under that tag from greatest to least
  spec.tags.sort((a, b) => counts[b.name] - counts[a.name])

  // Iterate over sorted tags and create new TagObject list
  const newTags: TagObject[] = []
  spec.tags.forEach((tag) => {
    if (
      newTags.find(
        (existingTag) =>
          existingTag.name.toLowerCase() === tag.name.toLowerCase()
      )
    )
      return
    newTags.push(tag)
  })

  const numberOfDuplicateTagsRemoved = spec.tags.length - newTags.length
  spec.tags = newTags

  // Replace tags in operations that were removed
  operations.forEach(({ operation }) => {
    if (operation.tags === undefined) return
    operation.tags = [
      ...new Set(
        operation.tags?.map((tag) => {
          if (spec.tags === undefined) throw Error()
          const equalTag = spec.tags.find(
            ({ name }) => tag.toLowerCase() === name.toLowerCase()
          )
          if (equalTag === undefined) throw Error()
          return equalTag.name
        })
      ),
    ]
  })

  return numberOfDuplicateTagsRemoved
}
