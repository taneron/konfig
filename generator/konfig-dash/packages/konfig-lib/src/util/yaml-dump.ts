import * as yaml from 'js-yaml'

export function yamlDump({ obj, order }: { obj: any; order: string[] }) {
  return yaml.dump(obj, {
    sortKeys(a, b) {
      const aIndex = order.findIndex((key) => key === a)
      const bIndex = order.findIndex((key) => key === b)
      if (aIndex !== -1 && bIndex !== -1) return aIndex - bIndex
      if (aIndex !== -1) return -1
      if (bIndex !== -1) return 1
      return 0
    },
  })
}
