import type { OpenAPIV3, OpenAPIV3_1 } from 'openapi-types'
const stringify = require('json-stable-stringify')

export const deref = <T extends object>(
  obj: OpenAPIV3.ReferenceObject | OpenAPIV3_1.ReferenceObject | T | undefined
): NonNullable<T> => {
  if (obj === undefined || obj === null)
    throw Error('All references should be dereferenced and non-empty')
  if ('$ref' in obj)
    throw Error('All references should be dereferenced by Spectral already')
  return obj
}

export const arrayEqualsUnordered = (a: object[], b: object[]): boolean => {
  if (a.length !== b.length) return false
  const aa = a.map((a) => stringify(a))
  const bb = b.map((b) => stringify(b))
  return aa.filter((a) => bb.includes(a)).length === aa.length
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type RescurseObjectHandler = (key: string, value: any, path: Path) => void

export const recurseObject = (obj: object, handler: RescurseObjectHandler) => {
  if (obj === null) return
  recurseObjectHelper(obj, handler, [])
}

type Path = string[]
const recurseObjectHelper = (
  obj: object,
  handler: RescurseObjectHandler,
  path: Path
) => {
  if (obj === null) return
  Object.entries(obj).forEach(([key, value]) => {
    const copiedPath = [...path]
    copiedPath.push(key)
    handler(key, value, copiedPath)
    if (typeof value === 'object') {
      recurseObjectHelper(value, handler, copiedPath)
    } else {
      handler(key, value, copiedPath)
    }
  })
}
