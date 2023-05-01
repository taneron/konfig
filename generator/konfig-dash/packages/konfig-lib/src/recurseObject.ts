// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type RescurseObjectHandler = (context: {
  key: string | null
  value: any
  path: Path
  parent?: object
}) => void

export const recurseObject = (obj: object, handler: RescurseObjectHandler) => {
  if (obj === null) return
  recurseObjectHelper(null, obj, handler, [])
}

export type Path = string[]
const recurseObjectHelper = (
  key: string | null,
  obj: object,
  handler: RescurseObjectHandler,
  path: Path,
  parent?: object
) => {
  if (obj === null) return
  handler({ key, value: obj, path, parent })
  if (typeof obj !== 'object') return
  Object.entries(obj).forEach(([key, value]) => {
    const copiedPath = [...path, key]
    recurseObjectHelper(key, value, handler, copiedPath, obj)
  })
}
