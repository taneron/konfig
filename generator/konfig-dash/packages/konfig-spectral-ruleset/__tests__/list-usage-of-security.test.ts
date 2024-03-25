import { DiagnosticSeverity } from '@stoplight/types'
import testRule from './__helpers__/helper'

testRule('list-usage-of-security', [
  {
    name: 'valid case',
    document: {
      openapi: '3.0.0',
      info: { title: 'Example API', version: '1.0.0' },
      paths: {
        '/': {
          get: {
            security: [
              {
                petstore_auth: ['write:pets', 'read:pets'],
              },
            ],
            responses: {},
          },
        },
      },
      security: [{ bearerAuth: [] }],
      components: {
        securitySchemes: {
          bearerAuth: {
            type: 'http',
            scheme: 'bearer',
          },
          petstore_auth: {
            type: 'oauth2',
            flows: {
              implicit: {
                authorizationUrl: 'http://api.example.com/api/oauth/dialog',
                scopes: {
                  'write:pets': 'modify pets in your account',
                  'read:pets': 'read your pets',
                },
              },
            },
          },
        },
      },
      servers: [{ url: 'https://api.example.com/' }],
    },
    errors: [],
  },

  {
    name: 'potentially invalid case top-level security',
    document: {
      openapi: '3.0.0',
      info: { title: 'Example API', version: '1.0.0' },
      paths: {
        '/': {},
      },
      security: [{ bearerAuth: [] }, { client_id: [] }],
      components: {
        securitySchemes: {
          bearerAuth: {
            type: 'http',
            scheme: 'bearer',
          },
          client_id: {
            name: 'client_id',
            type: 'apiKey',
            in: 'query',
          },
        },
      },
      servers: [{ url: 'http://api.example.com/' }],
    },
    errors: [
      {
        message:
          'Potential misuse of the security field. Only use list when you have multiple security strategies. (i.e. list vs map is significant https://swagger.io/docs/specification/authentication/)',
        path: ['security'],
        severity: DiagnosticSeverity.Information,
      },
    ],
  },
  {
    name: 'potentially invalid case operation-level security',
    document: {
      openapi: '3.0.0',
      info: { title: 'Example API', version: '1.0.0' },
      paths: {
        '/': {
          get: {
            security: [{ bearerAuth: [] }, { client_id: [] }],
            responses: {},
          },
        },
      },
      components: {
        securitySchemes: {
          bearerAuth: {
            type: 'http',
            scheme: 'bearer',
          },
          client_id: {
            name: 'client_id',
            type: 'apiKey',
            in: 'query',
          },
        },
      },
    },
    errors: [
      {
        message:
          'Potential misuse of the security field. Only use list when you have multiple security strategies. (i.e. list vs map is significant https://swagger.io/docs/specification/authentication/)',
        path: ['paths', '/', 'get', 'security'],
        severity: DiagnosticSeverity.Information,
      },
    ],
  },
  {
    name: 'list of length 0 should not throw warning',
    document: {
      openapi: '3.0.0',
      info: { title: 'Example API', version: '1.0.0' },
      paths: {
        '/': {
          get: {
            security: [],
            responses: {},
          },
        },
      },
      components: {
        securitySchemes: {
          bearerAuth: {
            type: 'http',
            scheme: 'bearer',
          },
          client_id: {
            name: 'client_id',
            type: 'apiKey',
            in: 'query',
          },
        },
      },
    },
    errors: [],
  },
])
