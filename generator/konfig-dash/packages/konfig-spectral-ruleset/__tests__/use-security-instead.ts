import { DiagnosticSeverity } from '@stoplight/types'
import testRule from './__helpers__/helper'

testRule('use-security-instead', [
  {
    name: 'valid case',
    document: {
      openapi: '3.0.0',
      info: { title: 'Example API', version: '1.0.0' },
      paths: {
        '/': {
          get: {
            operationId: 'rootGet',
            security: [
              {
                petstore_auth: ['write:pets', 'read:pets'],
              },
            ],
            parameters: [{ name: 'id', in: 'query' }],
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
    },
    errors: [],
  },
  {
    name: 'invalid case',
    document: {
      openapi: '3.0.0',
      info: { title: 'Example API', version: '1.0.0' },
      paths: {
        '/': {
          get: {
            parameters: [{ name: 'client_id', in: 'query' }],
            responses: {},
          },
        },
      },
      components: {
        securitySchemes: {
          clientId: {
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
          'Use security requirement "clientId" instead of parameter with name "client_id"',
        path: ['paths', '/', 'get'],
        severity: DiagnosticSeverity.Warning,
      },
    ],
  },
  {
    name: 'invalid case - case insensitive',
    document: {
      openapi: '3.0.0',
      info: { title: 'Example API', version: '1.0.0' },
      paths: {
        '/': {
          get: {
            parameters: [{ name: 'Appid', in: 'query' }],
            responses: {},
          },
        },
      },
      components: {
        securitySchemes: {
          appId: {
            name: 'AppId',
            type: 'apiKey',
            in: 'query',
          },
        },
      },
    },
    errors: [
      {
        message:
          'Use security requirement "appId" instead of parameter with name "AppId"',
        path: ['paths', '/', 'get'],
        severity: DiagnosticSeverity.Warning,
      },
    ],
  },
  {
    name: 'invalid case multiple',
    document: {
      openapi: '3.0.0',
      info: { title: 'Example API', version: '1.0.0' },
      paths: {
        '/': {
          get: {
            parameters: [
              { name: 'client_id', in: 'query' },
              { name: 'app_id', in: 'query' },
            ],
            responses: {},
          },
        },
      },
      components: {
        securitySchemes: {
          clientId: {
            name: 'client_id',
            type: 'apiKey',
            in: 'query',
          },
          appId: {
            name: 'app_id',
            type: 'apiKey',
            in: 'query',
          },
        },
      },
    },
    errors: [
      {
        message:
          'Use security requirements "clientId", "appId" instead of parameters with names "client_id", "app_id"',
        path: ['paths', '/', 'get'],
        severity: DiagnosticSeverity.Warning,
      },
    ],
  },
])
