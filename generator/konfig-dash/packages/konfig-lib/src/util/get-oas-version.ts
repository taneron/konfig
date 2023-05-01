import { Spec } from '../parseSpec'

export const openApiVersion30Regex = new RegExp(/3\.0\.\d/)
export const openApiVersion31Regex = new RegExp(/3\.1\.\d/)

export type OpenApiVersion = ReturnType<typeof getOasVersion>

export function getOasVersion({ spec }: { spec: Spec['spec'] }) {
  if (openApiVersion30Regex.test(spec.openapi)) return '3.0.x'
  if (openApiVersion31Regex.test(spec.openapi)) return '3.1.x'
  throw Error(
    `OpenApi Version should match 3.0.x or 3.1.x but got "${spec.openapi}"`
  )
}
