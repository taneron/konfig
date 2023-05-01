import { OpenAPIV3_XDocument } from './parseSpec'

export type PathObject = NonNullable<
  NonNullable<OpenAPIV3_XDocument['paths']>[string]
>

export const forEachPath = (
  spec: OpenAPIV3_XDocument,
  handler: (path: { pathObject: PathObject; path: string }) => void
) => {
  if (!spec.paths) return
  for (const path in spec.paths) {
    const pathObject = spec.paths[path]
    if (!pathObject) throw Error('Path with missing PathObject')
    handler({ pathObject, path })
  }
}
