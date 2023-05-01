import { getOperations } from '../get-operations'
import { Spec } from '../parseSpec'
import { pushIfUnique } from './array'

export function fixMissingGlobalTags({ spec }: { spec: Spec['spec'] }): number {
  const operations = getOperations({ spec })
  let numberOfMissingTags = 0
  for (const { operation } of operations) {
    if (operation.tags === undefined) continue
    if (spec.tags === undefined) spec.tags = []
    for (const tag of operation.tags) {
      numberOfMissingTags += pushIfUnique({
        arr: spec.tags,
        e: { name: tag },
        isSame(a, b) {
          return a.name === b.name
        },
      })
    }
  }
  return numberOfMissingTags
}
