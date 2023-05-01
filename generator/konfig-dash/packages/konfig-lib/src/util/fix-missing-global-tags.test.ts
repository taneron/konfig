import { fixMissingGlobalTags } from './fix-missing-global-tags'

describe('fix-missing-global-tags', () => {
  it('no duplicate tags', () => {
    const spec = {
      openapi: '3.0.0',
      info: {
        title: 'Test',
        version: '1.0.0',
      },
      tags: [{ name: 'A' }],
      paths: {
        '/': {
          get: {
            tags: ['B'],
            responses: {},
          },
          post: {
            tags: ['B'],
            responses: {},
          },
        },
      },
    }
    fixMissingGlobalTags({
      spec,
    })
    expect(spec).toStrictEqual({
      openapi: '3.0.0',
      info: {
        title: 'Test',
        version: '1.0.0',
      },
      tags: [{ name: 'A' }, { name: 'B' }],
      paths: {
        '/': {
          get: {
            tags: ['B'],
            responses: {},
          },
          post: {
            tags: ['B'],
            responses: {},
          },
        },
      },
    })
  })
  it('missing tags field', () => {
    const spec = {
      openapi: '3.0.0',
      info: {
        title: 'Test',
        version: '1.0.0',
      },
      paths: {
        '/': {
          get: {
            tags: ['B'],
            responses: {},
          },
        },
      },
    }
    fixMissingGlobalTags({ spec })
    expect(spec).toStrictEqual({
      openapi: '3.0.0',
      info: {
        title: 'Test',
        version: '1.0.0',
      },
      tags: [{ name: 'B' }],
      paths: {
        '/': {
          get: {
            tags: ['B'],
            responses: {},
          },
        },
      },
    })
  })
  it('missing tags field', () => {
    const spec = {
      openapi: '3.0.0',
      info: {
        title: 'Test',
        version: '1.0.0',
      },
      paths: {
        '/': {
          get: {
            tags: ['B'],
            responses: {},
          },
        },
      },
    }
    fixMissingGlobalTags({ spec })
    expect(spec).toStrictEqual({
      openapi: '3.0.0',
      info: {
        title: 'Test',
        version: '1.0.0',
      },
      tags: [{ name: 'B' }],
      paths: {
        '/': {
          get: {
            tags: ['B'],
            responses: {},
          },
        },
      },
    })
  })
})
