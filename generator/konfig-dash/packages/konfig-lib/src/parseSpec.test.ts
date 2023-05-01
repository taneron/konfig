import { parseSpec } from './parseSpec'
import * as fs from 'fs'
import * as path from 'path'
import { ReferenceObject, resolveRef } from './resolveRef'
import { OpenAPIV3 } from 'openapi-types'

describe('parse-spec', () => {
  it('$ref gives reference equality', async () => {
    const rawSpec = fs.readFileSync(
      path.join(__dirname, 'parse-spec-test', 'oas.json'),
      'utf-8'
    )
    const spec = await parseSpec(rawSpec)
    const infoObject = resolveRef({
      refOrObject: { $ref: '#/info' } as OpenAPIV3.InfoObject | ReferenceObject,
      $ref: spec.$ref,
    })
    infoObject.title = 'New Title'
    expect(spec.spec.info.title).toBe(infoObject.title)
  })

  /**
   * yaml actually natively supports dates which is inconsistent with JSON. So we want to make sure dates are parsed as strings so that:
   * 1. It's consistent with JSON schema
   * 2. We can write algorithms (i.e. "generateAndMergeSchemaObjects" on strongly typed JSON values which are JSON schema compliant)
   */
  it('yaml date is parsed as string', async () => {
    const specString = `
openapi: 3.0.0
info:
  title: Test
  version: 1.0.0
paths:
  "/":
    get:
      parameters:
      - name: hello
        schema:
          type: string
          format: date
          example: 2023-01-27T21:38:48
        in: cookie
      responses: {}
`
    const spec = await parseSpec(specString)
    const parameter = spec?.spec?.paths?.['/']?.get?.parameters?.[0]
    if (parameter === undefined || '$ref' in parameter)
      throw Error('ref should not be ref')
    const schema = parameter.schema
    if (schema === undefined || '$ref' in schema)
      throw Error('schema should not be ref')
    expect(typeof schema.example).toBe('string')
  })

  it('splitit web api does not throw error', async () => {
    const rawSpec = fs.readFileSync(
      path.join(__dirname, 'parse-spec-test', 'splitit-web.json'),
      'utf-8'
    )
    // throws S2OError: (Patchable) parameter.type is mandatory for non-body parameters
    await parseSpec(rawSpec)
  })
})
