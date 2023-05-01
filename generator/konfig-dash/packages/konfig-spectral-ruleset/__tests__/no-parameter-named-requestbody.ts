import { DiagnosticSeverity } from '@stoplight/types'
import testRule from './__helpers__/helper'

const message = `Parameter's are not allowed to have a name that can be camelcased to "requestBody" as it is a reserved keyword for Konfig's TypeScript SDK`

testRule('no-parameter-named-requestbody', [
  {
    name: 'valid case',
    document: {
      openapi: '3.0.0',
      info: { title: 'Example API', version: '1.0.0' },
      paths: {
        '/': {
          get: {
            parameters: [{ name: 'Test', in: 'query' }],
            responses: {},
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
            parameters: [
              { name: 'requestBody', in: 'query' },
              { name: 'requestBody', in: 'header' },
              { name: 'request_body', in: 'header' },
              { name: '-requestBody', in: 'header' },
              { name: 'requestBody-', in: 'header' },
              { name: 'requestBody ', in: 'header' },
              { name: ' requestBody ', in: 'header' },
              { name: 'request Body', in: 'header' },
            ],
            responses: {},
          },
        },
      },
    },
    errors: [
      {
        message: message,
        path: ['paths', '/', 'get', 'parameters', '0', 'name'],
        severity: DiagnosticSeverity.Error,
      },
      {
        message: message,
        path: ['paths', '/', 'get', 'parameters', '1', 'name'],
        severity: DiagnosticSeverity.Error,
      },
      {
        message: message,
        path: ['paths', '/', 'get', 'parameters', '2', 'name'],
        severity: DiagnosticSeverity.Error,
      },
      {
        message: message,
        path: ['paths', '/', 'get', 'parameters', '3', 'name'],
        severity: DiagnosticSeverity.Error,
      },
      {
        message: message,
        path: ['paths', '/', 'get', 'parameters', '4', 'name'],
        severity: DiagnosticSeverity.Error,
      },
      {
        message: message,
        path: ['paths', '/', 'get', 'parameters', '5', 'name'],
        severity: DiagnosticSeverity.Error,
      },
      {
        message: message,
        path: ['paths', '/', 'get', 'parameters', '6', 'name'],
        severity: DiagnosticSeverity.Error,
      },
      {
        message: message,
        path: ['paths', '/', 'get', 'parameters', '7', 'name'],
        severity: DiagnosticSeverity.Error,
      },
    ],
  },
])
