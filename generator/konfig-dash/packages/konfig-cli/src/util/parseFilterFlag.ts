export const parseFilterFlag = (
  filter: string | undefined
): string[] | null => {
  if (filter === undefined) return null
  if (filter === '') throw Error('Filter should be non-empty value')
  return filter.split(',').filter((generator) => generator !== '')
}
