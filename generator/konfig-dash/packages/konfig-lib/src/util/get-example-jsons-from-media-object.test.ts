import { parseSpec, Spec } from '../parseSpec'
import { MediaObject } from './get-example-json-from-media-object'
import { getExampleJsonsFromMediaObject } from './get-example-jsons-from-media-object'

describe('get-example-jsons-from-media-object', () => {
  it('example from schema ref', async () => {
    const oas = {
      openapi: '3.0.0',
      info: {
        title: 'Test API',
        description: 'Test',
        version: '1.0.0',
      },
      paths: {
        '/': {
          get: {
            requestBody: {
              content: {
                'application/json': {
                  schema: {
                    $ref: '#/components/schemas/Example',
                  },
                },
              },
            },
            responses: {},
          },
        },
      },
      components: {
        schemas: {
          Example: {
            type: 'object',
            example: {
              hello: 'world',
            },
          },
        },
      },
    } as const
    const spec = await parseSpec(JSON.stringify(oas))
    const examples = await getExampleJsonsFromMediaObject({
      mediaObject: oas.paths['/'].get.requestBody.content[
        'application/json'
      ] as MediaObject,
      spec,
    })
    expect(examples).toEqual([{ hello: 'world' }])
  })
})
