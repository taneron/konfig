import { Spec } from 'konfig-lib'

export async function fixPathsWithoutLeadingSlash({
  spec,
}: {
  spec: Spec
}): Promise<number> {
  let numberOfPathsWithoutLeadingSlashFixed = 0

  if (spec.spec.paths === undefined) return 0

  // remove all paths that don't start with "/"
  spec.spec.paths = Object.fromEntries(
    Object.entries(spec.spec.paths).filter(([path]) => path.startsWith('/'))
  )

  return numberOfPathsWithoutLeadingSlashFixed
}
