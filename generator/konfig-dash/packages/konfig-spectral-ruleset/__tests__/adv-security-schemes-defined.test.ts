import { DiagnosticSeverity } from '@stoplight/types'
import testRule from './__helpers__/helper'

testRule('adv-security-schemes-defined', [
  {
    name: 'valid case',
    document: {
      openapi: '3.1.0',
      info: { title: 'Example API', version: '1.0' },
      components: {
        securitySchemes: {
          oauth2: {
            type: 'oauth2',
            flows: {},
          },
        },
      },
    },
    errors: [],
  },

  {
    name: 'invalid case',
    document: {
      openapi: '3.1.0',
      info: { title: 'Example API', version: '1.0' },
      components: {},
    },
    errors: [
      {
        message:
          'This API definition does not have any security scheme defined.',
        path: ['components'],
        severity: DiagnosticSeverity.Error,
      },
    ],
  },
  {
    name: 'invalid case - empty obj',
    document: {
      openapi: '3.1.0',
      info: { title: 'Example API', version: '1.0' },
      components: { securitySchemes: {} },
    },
    errors: [
      {
        message:
          'This API definition does not have any security scheme defined.',
        path: ['components', 'securitySchemes'],
        severity: DiagnosticSeverity.Error,
      },
    ],
  },
])
