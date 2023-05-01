import { OpenAPIV3_XDocument } from 'konfig-lib'

export function fixTrailingSlashes({
  spec,
}: {
  spec: OpenAPIV3_XDocument
}): number {
  let numberOfTrailingSlashesFixed = 0

  if (spec.paths === undefined) return 0
  for (const path of Object.keys(spec.paths)) {
    if (path === '/' || !path.endsWith('/')) continue
    spec.paths[path.substring(0, path.length - 1)] = spec.paths[path]
    delete spec.paths[path]
    numberOfTrailingSlashesFixed++
  }
  return numberOfTrailingSlashesFixed
}
