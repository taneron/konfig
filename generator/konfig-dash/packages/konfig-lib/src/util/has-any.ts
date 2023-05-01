export const hasAny = <A, B>({
  a: aa,
  b: bb,
  comparator,
}: {
  a: A[]
  b: B[]
  comparator: (a: A, b: B) => boolean
}) => {
  return (
    aa.filter((a) => bb.filter((b) => comparator(a, b)).length > 0).length > 0
  )
}
