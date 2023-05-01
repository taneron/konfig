import { Spec } from './parseSpec'
import { Path, recurseObject } from './recurseObject'
import { resolveRef } from './resolveRef'

export const forEachReferenceUntyped = ({
  object,
  spec,
  handler,
}: {
  object: object
  spec: Spec
  handler: ({
    ref,
    path,
    depth,
  }: {
    ref: string
    path: Path
    depth: number
  }) => void
}) => {
  forEachReferenceUntypedHelper({ object, spec, handler, depth: 0 })
}

const forEachReferenceUntypedHelper = ({
  object,
  spec,
  handler,
  depth,
}: {
  object: object
  spec: Spec
  handler: ({
    ref,
    path,
    depth,
  }: {
    ref: string
    path: Path
    depth: number
  }) => void
  depth: number
}) => {
  recurseObject(object, ({ value, path }) => {
    if (!(typeof value === 'object')) return
    if ('$ref' in value) {
      handler({ ref: value['$ref'], path, depth })
      forEachReferenceUntypedHelper({
        object: resolveRef({ refOrObject: value, $ref: spec.$ref }),
        spec,
        handler,
        depth: depth + 1,
      })
    }
  })
}
