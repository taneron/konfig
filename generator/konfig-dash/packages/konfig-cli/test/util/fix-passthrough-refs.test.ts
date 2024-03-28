import { Spec, parseSpec, recurseObject } from 'konfig-lib'
import { fixPassthroughRefs } from '../../src/util/fix-passthrough-refs'

describe('fixPassthroughRefs', () => {
  it(`request body shouldn't be shortened`, async () => {
    const openapi: Spec['spec'] = {
      openapi: '3.0.0',
      info: {
        title: 'Test API',
        version: '1.0.0',
      },
      paths: {
        '/test': {
          post: {
            requestBody: {
              $ref: '#/components/requestBodies/RequestBody',
            },
            responses: {
              '200': {
                description: 'Successful response',
              },
            },
          },
        },
      },
      components: {
        requestBodies: {
          TestRequestBody: {
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/RequestBody',
                },
              },
            },
          },
        },
        schemas: {
          RequestBody: {
            $ref: '#/components/schemas/PassthroughSchema',
          },
          PassthroughSchema: {
            type: 'object',
            properties: {
              test: {
                type: 'string',
              },
            },
          },
        },
      },
    }

    const spec = await parseSpec(JSON.stringify(openapi))

    const fixedSpec = await fixPassthroughRefs({ spec })

    // snapshot expect
    expect(spec.spec).toMatchSnapshot()
  })
})
