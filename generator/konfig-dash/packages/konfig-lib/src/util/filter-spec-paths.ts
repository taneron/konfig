import { OpenAPIV3_XDocument } from '../parseSpec'

export function filterSpecPaths({
  spec,
  filter,
}: {
  spec: OpenAPIV3_XDocument
  filter: { path: string; method?: string }[]
}): void {
  if (spec.paths) {
    for (const f of filter) {
      if (f.method === undefined) {
        delete spec.paths[f.path]
      } else if (spec.paths[f.path]) {
        delete (spec.paths[f.path] as any)[f.method]
      }
    }
  }
}
