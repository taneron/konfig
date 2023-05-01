import stringify from 'json-stable-stringify'
import { order } from './oas-yaml-dump'
export function oasJsonDump(obj: any) {
  return stringify(obj, {
    space: 2,
    cmp: ({ key: a }, { key: b }) => {
      const aIndex = order.findIndex((key) => key === a)
      const bIndex = order.findIndex((key) => key === b)
      if (aIndex !== -1 && bIndex !== -1) return aIndex - bIndex
      if (aIndex !== -1) return -1
      if (bIndex !== -1) return 1
      return 0
    },
  })
}
