export function removeDuplicates<E>(arr: E[]) {
  return arr.filter((item, index) => arr.indexOf(item) === index)
}

export function pushIfUnique<E>({
  arr,
  e,
  isSame,
}: {
  arr: E[]
  e: E
  isSame: (a: E, b: E) => boolean
}): number {
  if (arr.findIndex((ee) => isSame(ee, e)) !== -1) return 0
  arr.push(e)
  return 1
}
