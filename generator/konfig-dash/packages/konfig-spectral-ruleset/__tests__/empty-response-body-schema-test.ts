import { DiagnosticSeverity } from '@stoplight/types'
import testRule from './__helpers__/helper'

testRule('empty-response-body-schema', [
  {
    name: 'valid case',
    document: {
      openapi: '3.0.0',
      info: { title: 'Example API', version: '1.0.0' },
      paths: {
        '/': {
          get: {
            tags: ['Example'],
            description: '',
            responses: {
              '200': {
                description: 'Successful response',
                content: { 'application/json': { schema: { type: 'string' } } },
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
            tags: ['Example'],
            description: '',
            responses: {
              '200': {
                description: 'Successful response',
                content: { 'application/json': {} },
              },
            },
          },
        },
      },
    },
    errors: [
      {
        message:
          'Provide a response body schema to provide helpful information regarding the operation.',
        path: [
          'paths',
          '/',
          'get',
          'responses',
          '200',
          'content',
          'application/json',
        ],
        severity: DiagnosticSeverity.Warning,
      },
    ],
  },
  {
    name: 'invalid case - empty object',
    document: {
      openapi: '3.0.0',
      info: { title: 'Example API', version: '1.0.0' },
      paths: {
        '/': {
          get: {
            tags: ['Example'],
            description: '',
            responses: {
              '200': {
                description: 'Successful response',
                content: { 'application/json': { schema: {} } },
              },
            },
          },
        },
      },
    },
    errors: [
      {
        message:
          'Provide a response body schema to provide helpful information regarding the operation.',
        path: [
          'paths',
          '/',
          'get',
          'responses',
          '200',
          'content',
          'application/json',
          'schema',
        ],
        severity: DiagnosticSeverity.Warning,
      },
    ],
  },
])
