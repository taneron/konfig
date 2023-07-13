'use strict'

const { describe, it, afterEach } = require('mocha')
const postmanToOpenApi = require('../lib')
const path = require('path')
const { equal: strictEqual, ok, rejects } = require('assert').strict
const { readFileSync, existsSync, unlinkSync, writeFileSync } = require('fs')
const { version } = require('../package.json')
const {
  promises: { readFile },
} = require('fs')

const OUTPUT_PATH = path.join(__dirname, 'openAPIRes.yml')
const TEST_RESOURCES_PATH = path.join(__dirname, 'resources')

const COLLECTION_NO_OPTIONS = path.join(TEST_RESOURCES_PATH, 'input', 'NoOptionsInBody.json')
const COLLECTION_NULL_HEADERS = path.join(TEST_RESOURCES_PATH, 'input', 'NullHeaders.json')

const EXPECTED_BASIC = {
  expectation: readFileSync(path.join(TEST_RESOURCES_PATH, 'output', 'Basic.yml'), 'utf8'),
  path: path.join(TEST_RESOURCES_PATH, 'output', 'Basic.yml'),
}
const EXPECTED_ARRAY_TYPE_RETURN = {
  expectation: () =>
    readFileSync(path.join(TEST_RESOURCES_PATH, 'output', 'ArrayTypeResponse.yml'), 'utf8'),
  path: path.join(TEST_RESOURCES_PATH, 'output', 'ArrayTypeResponse.yml'),
}
const EXPECTED_DECENTRO_INFER_REQUIRED = {
  expectation: () =>
    readFileSync(path.join(TEST_RESOURCES_PATH, 'output', 'DecentroInferRequired.yml'), 'utf8'),
  path: path.join(TEST_RESOURCES_PATH, 'output', 'DecentroInferRequired.yml'),
}
const EXPECTED_DECENTRO_NO_BODY_IN_RESPONSE = {
  expectation: () =>
    readFileSync(path.join(TEST_RESOURCES_PATH, 'output', 'DecentroNoBodyInResponse.yml'), 'utf8'),
  path: path.join(TEST_RESOURCES_PATH, 'output', 'DecentroNoBodyInResponse.yml'),
}
const EXPECTED_BASIC_JSON = {
  expectation: readFileSync(path.join(TEST_RESOURCES_PATH, 'output', 'Basic.json'), 'utf8'),
  path: path.join(TEST_RESOURCES_PATH, 'output', 'Basic.json'),
}
const EXPECTED_BASIC_NO_OPTS = {
  expectation: readFileSync(path.join(TEST_RESOURCES_PATH, 'output', 'BasicNoOptions.yml'), 'utf8'),
  path: path.join(TEST_RESOURCES_PATH, 'output', 'BasicNoOptions.yml'),
}
const EXPECTED_INFO_OPTS = {
  expectation: readFileSync(path.join(TEST_RESOURCES_PATH, 'output', 'InfoOpts.yml'), 'utf8'),
  path: path.join(TEST_RESOURCES_PATH, 'output', 'InfoOpts.yml'),
}
const EXPECTED_NO_VERSION = {
  expectation: readFileSync(path.join(TEST_RESOURCES_PATH, 'output', 'NoVersion.yml'), 'utf8'),
  path: path.join(TEST_RESOURCES_PATH, 'output', 'NoVersion.yml'),
}
const EXPECTED_CUSTOM_TAG = {
  expectation: readFileSync(path.join(TEST_RESOURCES_PATH, 'output', 'CustomTag.yml'), 'utf8'),
  path: path.join(TEST_RESOURCES_PATH, 'output', 'CustomTag.yml'),
}
const EXPECTED_FOLDERS = {
  expectation: readFileSync(path.join(TEST_RESOURCES_PATH, 'output', 'Folders.yml'), 'utf8'),
  path: path.join(TEST_RESOURCES_PATH, 'output', 'Folders.yml'),
}
const EXPECTED_FOLDERS_NO_CONCAT = {
  expectation: readFileSync(
    path.join(TEST_RESOURCES_PATH, 'output', 'FoldersNoConcat.yml'),
    'utf8'
  ),
  path: path.join(TEST_RESOURCES_PATH, 'output', 'FoldersNoConcat.yml'),
}
const EXPECTED_FOLDERS_SEPARATOR = {
  expectation: readFileSync(
    path.join(TEST_RESOURCES_PATH, 'output', 'FoldersSeparator.yml'),
    'utf8'
  ),
  path: path.join(TEST_RESOURCES_PATH, 'output', 'FoldersSeparator.yml'),
}
const EXPECTED_GET_METHODS = {
  expectation: readFileSync(path.join(TEST_RESOURCES_PATH, 'output', 'GetMethods.yml'), 'utf8'),
  path: path.join(TEST_RESOURCES_PATH, 'output', 'GetMethods.yml'),
}
const EXPECTED_HEADERS = {
  expectation: readFileSync(path.join(TEST_RESOURCES_PATH, 'output', 'Headers.yml'), 'utf8'),
  path: path.join(TEST_RESOURCES_PATH, 'output', 'Headers.yml'),
}
const EXPECTED_AUTH_BEARER = {
  expectation: readFileSync(path.join(TEST_RESOURCES_PATH, 'output', 'AuthBearer.yml'), 'utf8'),
  path: path.join(TEST_RESOURCES_PATH, 'output', 'AuthBearer.yml'),
}
const EXPECTED_AUTH_BASIC = {
  expectation: readFileSync(path.join(TEST_RESOURCES_PATH, 'output', 'AuthBasic.yml'), 'utf8'),
  path: path.join(TEST_RESOURCES_PATH, 'output', 'AuthBasic.yml'),
}
const EXPECTED_BASIC_WITH_AUTH = {
  expectation: readFileSync(path.join(TEST_RESOURCES_PATH, 'output', 'BasicWithAuth.yml'), 'utf8'),
  path: path.join(TEST_RESOURCES_PATH, 'output', 'BasicWithAuth.yml'),
}
const EXPECTED_AUTH_MULTIPLE = {
  expectation: readFileSync(path.join(TEST_RESOURCES_PATH, 'output', 'AuthMultiple.yml'), 'utf8'),
  path: path.join(TEST_RESOURCES_PATH, 'output', 'AuthMultiple.yml'),
}
const EXPECTED_PATH_PARAMS = {
  expectation: readFileSync(path.join(TEST_RESOURCES_PATH, 'output', 'PathParams.yml'), 'utf8'),
  path: path.join(TEST_RESOURCES_PATH, 'output', 'PathParams.yml'),
}
const EXPECTED_MULTIPLE_SERVERS = {
  expectation: readFileSync(
    path.join(TEST_RESOURCES_PATH, 'output', 'MultipleServers.yml'),
    'utf8'
  ),
  path: path.join(TEST_RESOURCES_PATH, 'output', 'MultipleServers.yml'),
}
const EXPECTED_SERVERS_OPTIONS = {
  expectation: readFileSync(path.join(TEST_RESOURCES_PATH, 'output', 'ServersOpts.yml'), 'utf8'),
  path: path.join(TEST_RESOURCES_PATH, 'output', 'ServersOpts.yml'),
}
const EXPECTED_NO_SERVERS = {
  expectation: readFileSync(path.join(TEST_RESOURCES_PATH, 'output', 'NoServers.yml'), 'utf8'),
  path: path.join(TEST_RESOURCES_PATH, 'output', 'NoServers.yml'),
}
const EXPECTED_LICENSE_CONTACT = {
  expectation: readFileSync(path.join(TEST_RESOURCES_PATH, 'output', 'LicenseContact.yml'), 'utf8'),
  path: path.join(TEST_RESOURCES_PATH, 'output', 'LicenseContact.yml'),
}
const EXPECTED_LICENSE_CONTACT_OPT = {
  expectation: readFileSync(
    path.join(TEST_RESOURCES_PATH, 'output', 'LicenseContactOpts.yml'),
    'utf8'
  ),
  path: path.join(TEST_RESOURCES_PATH, 'output', 'LicenseContactOpts.yml'),
}
const EXPECTED_LICENSE_CONTACT_PARTIAL = {
  expectation: readFileSync(
    path.join(TEST_RESOURCES_PATH, 'output', 'LicenseContactPartial.yml'),
    'utf8'
  ),
  path: path.join(TEST_RESOURCES_PATH, 'output', 'LicenseContactPartial.yml'),
}
const EXPECTED_LICENSE_CONTACT_PARTIAL_2 = {
  expectation: readFileSync(
    path.join(TEST_RESOURCES_PATH, 'output', 'LicenseContactPartial2.yml'),
    'utf8'
  ),
  path: path.join(TEST_RESOURCES_PATH, 'output', 'LicenseContactPartial2.yml'),
}
const EXPECTED_DEPTH_PATH_PARAMS = {
  expectation: readFileSync(
    path.join(TEST_RESOURCES_PATH, 'output', 'DepthPathParams.yml'),
    'utf8'
  ),
  path: path.join(TEST_RESOURCES_PATH, 'output', 'DepthPathParams.yml'),
}
const EXPECTED_PARSE_STATUS_CODE = {
  expectation: readFileSync(path.join(TEST_RESOURCES_PATH, 'output', 'ParseStatus.yml'), 'utf8'),
  path: path.join(TEST_RESOURCES_PATH, 'output', 'ParseStatus.yml'),
}
const EXPECTED_NO_PATH = {
  expectation: readFileSync(path.join(TEST_RESOURCES_PATH, 'output', 'NoPath.yml'), 'utf8'),
  path: path.join(TEST_RESOURCES_PATH, 'output', 'NoPath.yml'),
}
const EXPECTED_DELETE = {
  expectation: readFileSync(
    path.join(TEST_RESOURCES_PATH, 'output', 'DeleteOperation.yml'),
    'utf8'
  ),
  path: path.join(TEST_RESOURCES_PATH, 'output', 'DeleteOperation.yml'),
}
const EXPECTED_URL_WITH_PORT = {
  expectation: readFileSync(path.join(TEST_RESOURCES_PATH, 'output', 'UrlWithPort.yml'), 'utf8'),
  path: path.join(TEST_RESOURCES_PATH, 'output', 'UrlWithPort.yml'),
}
const EXPECTED_EXTERNAL_DOCS = {
  expectation: readFileSync(path.join(TEST_RESOURCES_PATH, 'output', 'ExternalDocs.yml'), 'utf8'),
  path: path.join(TEST_RESOURCES_PATH, 'output', 'ExternalDocs.yml'),
}
const EXPECTED_EXTERNAL_DOCS_OPTS = {
  expectation: readFileSync(
    path.join(TEST_RESOURCES_PATH, 'output', 'ExternalDocsOpts.yml'),
    'utf8'
  ),
  path: path.join(TEST_RESOURCES_PATH, 'output', 'ExternalDocsOpts.yml'),
}
const EXPECTED_EXTERNAL_DOCS_OPTS_PARTIAL = {
  expectation: readFileSync(
    path.join(TEST_RESOURCES_PATH, 'output', 'ExternalDocsOptsPartial.yml'),
    'utf8'
  ),
  path: path.join(TEST_RESOURCES_PATH, 'output', 'ExternalDocsOptsPartial.yml'),
}
const EXPECTED_EMPTY_URL = {
  expectation: readFileSync(path.join(TEST_RESOURCES_PATH, 'output', 'EmptyUrl.yml'), 'utf8'),
  path: path.join(TEST_RESOURCES_PATH, 'output', 'EmptyUrl.yml'),
}
const EXPECTED_X_LOGO = {
  expectation: readFileSync(path.join(TEST_RESOURCES_PATH, 'output', 'XLogo.yml'), 'utf8'),
  path: path.join(TEST_RESOURCES_PATH, 'output', 'XLogo.yml'),
}
const EXPECTED_X_LOGO_VAR = {
  expectation: readFileSync(path.join(TEST_RESOURCES_PATH, 'output', 'XLogoVar.yml'), 'utf8'),
  path: path.join(TEST_RESOURCES_PATH, 'output', 'XLogoVar.yml'),
}
const EXPECTED_AUTH_OPTIONS = {
  expectation: readFileSync(path.join(TEST_RESOURCES_PATH, 'output', 'AuthOptions.yml'), 'utf8'),
  path: path.join(TEST_RESOURCES_PATH, 'output', 'AuthOptions.yml'),
}
const EXPECTED_RESPONSES = {
  expectation: readFileSync(path.join(TEST_RESOURCES_PATH, 'output', 'Responses.yml'), 'utf8'),
  path: path.join(TEST_RESOURCES_PATH, 'output', 'Responses.yml'),
}
const EXPECTED_EMPTY_RESPONSES = {
  expectation: readFileSync(path.join(TEST_RESOURCES_PATH, 'output', 'ResponsesEmpty.yml'), 'utf8'),
  path: path.join(TEST_RESOURCES_PATH, 'output', 'ResponsesEmpty.yml'),
}
const EXPECTED_RESPONSES_MULTI_LANG = {
  expectation: readFileSync(
    path.join(TEST_RESOURCES_PATH, 'output', 'ResponsesMultiLang.yml'),
    'utf8'
  ),
  path: path.join(TEST_RESOURCES_PATH, 'output', 'ResponsesMultiLang.yml'),
}
const EXPECTED_AUTH_REQUEST = {
  expectation: readFileSync(path.join(TEST_RESOURCES_PATH, 'output', 'AuthRequest.yml'), 'utf8'),
  path: path.join(TEST_RESOURCES_PATH, 'output', 'AuthRequest.yml'),
}
const EXPECTED_RESPONSES_NO_HEADERS = {
  expectation: readFileSync(
    path.join(TEST_RESOURCES_PATH, 'output', 'ResponsesNoHeaders.yml'),
    'utf8'
  ),
  path: path.join(TEST_RESOURCES_PATH, 'output', 'ResponsesNoHeaders.yml'),
}
const EXPECTED_FORM_DATA = {
  expectation: readFileSync(path.join(TEST_RESOURCES_PATH, 'output', 'FormData.yml'), 'utf8'),
  path: path.join(TEST_RESOURCES_PATH, 'output', 'FormData.yml'),
}
const EXPECTED_FORM_URLENCODED = {
  expectation: readFileSync(path.join(TEST_RESOURCES_PATH, 'output', 'FormUrlencoded.yml'), 'utf8'),
  path: path.join(TEST_RESOURCES_PATH, 'output', 'FormUrlencoded.yml'),
}
const EXPECTED_VARIABLES = {
  expectation: readFileSync(path.join(TEST_RESOURCES_PATH, 'output', 'Variables.yml'), 'utf8'),
  path: path.join(TEST_RESOURCES_PATH, 'output', 'Variables.yml'),
}
const EXPECTED_VARIABLES_ADDITIONAL = {
  expectation: readFileSync(
    path.join(TEST_RESOURCES_PATH, 'output', 'VariablesAdditional.yml'),
    'utf8'
  ),
  path: path.join(TEST_RESOURCES_PATH, 'output', 'VariablesAdditional.yml'),
}
const EXPECTED_BASEPATH_VAR = {
  expectation: readFileSync(path.join(TEST_RESOURCES_PATH, 'output', 'BasepathVar.yml'), 'utf8'),
  path: path.join(TEST_RESOURCES_PATH, 'output', 'BasepathVar.yml'),
}
const EXPECTED_RAW_BODY = {
  expectation: readFileSync(path.join(TEST_RESOURCES_PATH, 'output', 'RawBody.yml'), 'utf8'),
  path: path.join(TEST_RESOURCES_PATH, 'output', 'RawBody.yml'),
}
const EXPECTED_NULL_HEADER = {
  expectation: readFileSync(path.join(TEST_RESOURCES_PATH, 'output', 'NullHeader.yml'), 'utf8'),
  path: path.join(TEST_RESOURCES_PATH, 'output', 'NullHeader.yml'),
}
const EXPECTED_COLLECTION_WRAPPER = {
  expectation: readFileSync(
    path.join(TEST_RESOURCES_PATH, 'output', 'CollectionWrapper.yml'),
    'utf8'
  ),
  path: path.join(TEST_RESOURCES_PATH, 'output', 'CollectionWrapper.yml'),
}
const EXPECTED_COLLECTION_JSON_COMMENTS = {
  expectation: readFileSync(path.join(TEST_RESOURCES_PATH, 'output', 'JsonComments.yml'), 'utf8'),
  path: path.join(TEST_RESOURCES_PATH, 'output', 'JsonComments.yml'),
}
const EXPECTED_DISABLED_PARAMS_DEFAULT = {
  expectation: readFileSync(
    path.join(TEST_RESOURCES_PATH, 'output', 'DisabledParamsDefault.yml'),
    'utf8'
  ),
  path: path.join(TEST_RESOURCES_PATH, 'output', 'DisabledParamsDefault.yml'),
}
const EXPECTED_DISABLED_PARAMS_ALL = {
  expectation: readFileSync(
    path.join(TEST_RESOURCES_PATH, 'output', 'DisabledParamsAll.yml'),
    'utf8'
  ),
  path: path.join(TEST_RESOURCES_PATH, 'output', 'DisabledParamsAll.yml'),
}
const EXPECTED_DISABLED_PARAMS_QUERY = {
  expectation: readFileSync(
    path.join(TEST_RESOURCES_PATH, 'output', 'DisabledParamsQuery.yml'),
    'utf8'
  ),
  path: path.join(TEST_RESOURCES_PATH, 'output', 'DisabledParamsQuery.yml'),
}
const EXPECTED_DISABLED_PARAMS_HEADER = {
  expectation: readFileSync(
    path.join(TEST_RESOURCES_PATH, 'output', 'DisabledParamsHeader.yml'),
    'utf8'
  ),
  path: path.join(TEST_RESOURCES_PATH, 'output', 'DisabledParamsHeader.yml'),
}
const EXPECTED_OPERATIONS_IDS = {
  expectation: readFileSync(path.join(TEST_RESOURCES_PATH, 'output', 'OperationIds.yml'), 'utf8'),
  path: path.join(TEST_RESOURCES_PATH, 'output', 'OperationIds.yml'),
}
const EXPECTED_OPERATIONS_IDS_AUTO = {
  expectation: readFileSync(
    path.join(TEST_RESOURCES_PATH, 'output', 'OperationIdsAuto.yml'),
    'utf8'
  ),
  path: path.join(TEST_RESOURCES_PATH, 'output', 'OperationIdsAuto.yml'),
}
const EXPECTED_OPERATIONS_IDS_BRACKETS = {
  expectation: readFileSync(
    path.join(TEST_RESOURCES_PATH, 'output', 'OperationIdsBrackets.yml'),
    'utf8'
  ),
  path: path.join(TEST_RESOURCES_PATH, 'output', 'OperationIdsBrackets.yml'),
}

const AUTH_DEFINITIONS = {
  myCustomAuth: {
    type: 'http',
    scheme: 'bearer',
    bearerFormat: 'A resource owner JWT',
    description: 'My awesome authentication using bearer',
  },
  myCustomAuth2: {
    type: 'http',
    scheme: 'basic',
    description: 'My awesome authentication using user and password',
  },
  notSupported: {
    type: 'http',
    scheme: 'digest',
    description: 'Not supported security',
  },
}

function equal(result, { expectation, path }) {
  if (process.env.REWRITE_ASSERTIONS) {
    writeFileSync(path, result)
  } else {
    if (typeof expectation === 'function') expectation = expectation()
    strictEqual(result, expectation)
  }
}

describe('Library specs', function () {
  afterEach('remove file', function () {
    if (existsSync(OUTPUT_PATH)) {
      unlinkSync(OUTPUT_PATH)
    }
  })

  const TEST_VERSIONS = ['v2', 'v21']

  TEST_VERSIONS.forEach(function (version) {
    describe(`Postman Collection ${version}`, function () {
      const COLLECTION_BASIC = path.join(
        TEST_RESOURCES_PATH,
        'input',
        `${version}/PostmantoOpenAPI.json`
      )
      const COLLECTION_SIMPLE = path.join(
        TEST_RESOURCES_PATH,
        'input',
        `${version}/SimplePost.json`
      )
      const COLLECTION_NO_VERSION = path.join(
        TEST_RESOURCES_PATH,
        'input',
        `${version}/NoVersion.json`
      )
      const COLLECTION_FOLDERS = path.join(
        TEST_RESOURCES_PATH,
        'input',
        `${version}/FolderCollection.json`
      )
      const COLLECTION_GET = path.join(TEST_RESOURCES_PATH, 'input', `${version}/GetMethods.json`)
      const COLLECTION_HEADERS = path.join(TEST_RESOURCES_PATH, 'input', `${version}/Headers.json`)
      const COLLECTION_PATH_PARAMS = path.join(
        TEST_RESOURCES_PATH,
        'input',
        `${version}/PathParams.json`
      )
      const COLLECTION_MULTIPLE_SERVERS = path.join(
        TEST_RESOURCES_PATH,
        'input',
        `${version}/MultipleServers.json`
      )
      const COLLECTION_LICENSE_CONTACT = path.join(
        TEST_RESOURCES_PATH,
        'input',
        `${version}/LicenseContact.json`
      )
      const COLLECTION_DEPTH_PATH_PARAMS = path.join(
        TEST_RESOURCES_PATH,
        'input',
        `${version}/DepthPathParams.json`
      )
      const COLLECTION_PARSE_STATUS_CODE = path.join(
        TEST_RESOURCES_PATH,
        'input',
        `${version}/ParseStatusCode.json`
      )
      const COLLECTION_NO_PATH = path.join(TEST_RESOURCES_PATH, 'input', `${version}/NoPath.json`)
      const COLLECTION_DELETE = path.join(
        TEST_RESOURCES_PATH,
        'input',
        `${version}/DeleteOperation.json`
      )
      const COLLECTION_AUTH_BEARER = path.join(
        TEST_RESOURCES_PATH,
        'input',
        `${version}/AuthBearer.json`
      )
      const COLLECTION_AUTH_BASIC = path.join(
        TEST_RESOURCES_PATH,
        'input',
        `${version}/AuthBasic.json`
      )
      const COLLECTION_URL_WITH_PORT = path.join(
        TEST_RESOURCES_PATH,
        'input',
        `${version}/UrlWithPort.json`
      )
      const COLLECTION_EXTERNAL_DOCS = path.join(
        TEST_RESOURCES_PATH,
        'input',
        `${version}/ExternalDocs.json`
      )
      const COLLECTION_EMPTY_URL = path.join(
        TEST_RESOURCES_PATH,
        'input',
        `${version}/EmptyUrl.json`
      )
      const COLLECTION_XLOGO = path.join(TEST_RESOURCES_PATH, 'input', `${version}/XLogo.json`)
      const COLLECTION_MULTI_AUTH = path.join(
        TEST_RESOURCES_PATH,
        'input',
        `${version}/AuthMultiple.json`
      )
      const COLLECTION_RESPONSES = path.join(
        TEST_RESOURCES_PATH,
        'input',
        `${version}/Responses.json`
      )
      const COLLECTION_RESPONSES_MULTI_LANG = path.join(
        TEST_RESOURCES_PATH,
        'input',
        `${version}/ResponsesMultiLang.json`
      )
      const COLLECTION_AUTH_REQUEST = path.join(
        TEST_RESOURCES_PATH,
        'input',
        `${version}/AuthRequest.json`
      )
      const COLLECTION_FORM_DATA = path.join(
        TEST_RESOURCES_PATH,
        'input',
        `${version}/FormData.json`
      )
      const COLLECTION_FORM_URLENCODED = path.join(
        TEST_RESOURCES_PATH,
        'input',
        `${version}/FormUrlencoded.json`
      )
      const COLLECTION_VARIABLES = path.join(
        TEST_RESOURCES_PATH,
        'input',
        `${version}/Variables.json`
      )
      const COLLECTION_BASEURL_VAR = path.join(
        TEST_RESOURCES_PATH,
        'input',
        `${version}/BasepathVar.json`
      )
      const COLLECTION_RAW_BODY = path.join(TEST_RESOURCES_PATH, 'input', `${version}/RawBody.json`)
      const COLLECTION_COLLECTION_WRAPPER = path.join(
        TEST_RESOURCES_PATH,
        'input',
        `${version}/CollectionWrapper.json`
      )
      const COLLECTION_RESPONSES_JSON_ERROR = path.join(
        TEST_RESOURCES_PATH,
        'input',
        `${version}/ResponsesJsonError.json`
      )
      const COLLECTION_RESPONSES_EMPTY = path.join(
        TEST_RESOURCES_PATH,
        'input',
        `${version}/ResponsesEmpty.json`
      )
      const COLLECTION_JSON_COMMENTS = path.join(
        TEST_RESOURCES_PATH,
        'input',
        `${version}/JsonComments.json`
      )
      const COLLECTION_DISABLED = path.join(
        TEST_RESOURCES_PATH,
        'input',
        `${version}/DisabledParams.json`
      )
      const COLLECTION_OPERATION_IDS = path.join(
        TEST_RESOURCES_PATH,
        'input',
        `${version}/OperationIds.json`
      )

      if (version === TEST_VERSIONS[1]) {
        const COLLECTION_ARRAY_TYPE_RESPONSE = path.join(
          TEST_RESOURCES_PATH,
          'input',
          `${version}/ArrayTypeResponse.json`
        )

        const COLLECTION_DECENTRO_NO_BODY_IN_RESPONSE = path.join(
          TEST_RESOURCES_PATH,
          'input',
          `${version}/DecentroNoBodyInResponse.json`
        )

        const COLLECTION_DECENTRO_INFER_REQUIRED = path.join(
          TEST_RESOURCES_PATH,
          'input',
          `${version}/DecentroInferRequired.json`
        )

        it('array type response', async function () {
          const result = await postmanToOpenApi(COLLECTION_ARRAY_TYPE_RESPONSE, OUTPUT_PATH, {})
          equal(result, EXPECTED_ARRAY_TYPE_RETURN)
          ok(existsSync(OUTPUT_PATH))
        })

        it('should not fail when response does not have body', async function () {
          const result = await postmanToOpenApi(
            COLLECTION_DECENTRO_NO_BODY_IN_RESPONSE,
            OUTPUT_PATH,
            {}
          )
          equal(result, EXPECTED_DECENTRO_NO_BODY_IN_RESPONSE)
          ok(existsSync(OUTPUT_PATH))
        })

        it('request body should be inferred as required if all examples include a body', async function () {
          const result = await postmanToOpenApi(COLLECTION_DECENTRO_INFER_REQUIRED, OUTPUT_PATH, {})
          equal(result, EXPECTED_DECENTRO_INFER_REQUIRED)
          ok(existsSync(OUTPUT_PATH))
        })
      }

      it('should work with a basic transform', async function () {
        const result = await postmanToOpenApi(COLLECTION_BASIC, OUTPUT_PATH, {})
        equal(result, EXPECTED_BASIC)
        ok(existsSync(OUTPUT_PATH))
      })

      it('should work when no save', async function () {
        await postmanToOpenApi(COLLECTION_BASIC, null)
      })

      it('should work if info is passed as parameter', async function () {
        const result = await postmanToOpenApi(COLLECTION_SIMPLE, OUTPUT_PATH, {
          info: {
            title: 'Options title',
            version: '6.0.7-beta',
            description: 'Description from options',
            termsOfService: 'http://tos.myweb.com',
          },
        })
        equal(result, EXPECTED_INFO_OPTS)
      })

      it('should use "defaultTag" provided by config', async function () {
        const result = await postmanToOpenApi(COLLECTION_SIMPLE, OUTPUT_PATH, {
          defaultTag: 'Custom Tag',
        })
        equal(result, EXPECTED_CUSTOM_TAG)
      })

      it('should use default version if not informed and not in postman variables', async function () {
        const result = await postmanToOpenApi(COLLECTION_NO_VERSION, OUTPUT_PATH, {})
        equal(result, EXPECTED_NO_VERSION)
      })

      it('should work with folders and use as tags', async function () {
        const result = await postmanToOpenApi(COLLECTION_FOLDERS, OUTPUT_PATH)
        equal(result, EXPECTED_FOLDERS)
      })

      it('should use "folders.separator" options for customize tags separators ', async function () {
        const result = await postmanToOpenApi(COLLECTION_FOLDERS, OUTPUT_PATH, {
          folders: { separator: '-' },
        })
        equal(result, EXPECTED_FOLDERS_SEPARATOR)
      })

      it('should use "folders.concat" options for not concatenate folder names as tags ', async function () {
        const result = await postmanToOpenApi(COLLECTION_FOLDERS, OUTPUT_PATH, {
          folders: { concat: false },
        })
        equal(result, EXPECTED_FOLDERS_NO_CONCAT)
      })

      it('should parse GET methods with query string', async function () {
        const result = await postmanToOpenApi(COLLECTION_GET, OUTPUT_PATH)
        equal(result, EXPECTED_GET_METHODS)
      })

      it('should parse HEADERS parameters', async function () {
        const result = await postmanToOpenApi(COLLECTION_HEADERS, OUTPUT_PATH)
        equal(result, EXPECTED_HEADERS)
      })

      it('should parse path params', async function () {
        const result = await postmanToOpenApi(COLLECTION_PATH_PARAMS, OUTPUT_PATH)
        equal(result, EXPECTED_PATH_PARAMS)
      })

      it('should parse servers from existing host in postman collection', async function () {
        const result = await postmanToOpenApi(COLLECTION_MULTIPLE_SERVERS, OUTPUT_PATH)
        equal(result, EXPECTED_MULTIPLE_SERVERS)
      })

      it('should use servers from options', async function () {
        const result = await postmanToOpenApi(COLLECTION_MULTIPLE_SERVERS, OUTPUT_PATH, {
          servers: [
            {
              url: 'https://awesome.api.sandbox.io',
              description: 'Sandbox environment server',
            },
            {
              url: 'https://awesome.api.io',
              description: 'Production env',
            },
          ],
        })
        equal(result, EXPECTED_SERVERS_OPTIONS)
      })

      it('should allow empty servers from options', async function () {
        const result = await postmanToOpenApi(COLLECTION_MULTIPLE_SERVERS, OUTPUT_PATH, {
          servers: [],
        })
        equal(result, EXPECTED_NO_SERVERS)
      })

      it('should parse license and contact from variables', async function () {
        const result = await postmanToOpenApi(COLLECTION_LICENSE_CONTACT, OUTPUT_PATH)
        equal(result, EXPECTED_LICENSE_CONTACT)
      })

      it('should use "additional info" from options', async function () {
        const result = await postmanToOpenApi(COLLECTION_LICENSE_CONTACT, OUTPUT_PATH, {
          info: {
            license: {
              name: 'MIT',
              url: 'https://es.wikipedia.org/wiki/Licencia_MIT',
            },
            contact: {
              name: 'My Support',
              url: 'http://www.api.com/support',
              email: 'support@api.com',
            },
          },
        })
        equal(result, EXPECTED_LICENSE_CONTACT_OPT)
      })

      it('should support optional params in license and contact options', async function () {
        const result = await postmanToOpenApi(COLLECTION_BASIC, OUTPUT_PATH, {
          info: {
            license: {
              name: 'MIT',
            },
            contact: {
              name: 'My Support',
            },
          },
        })
        equal(result, EXPECTED_LICENSE_CONTACT_PARTIAL)
      })

      it('should support optional params in license and contact options (2)', async function () {
        const result = await postmanToOpenApi(COLLECTION_BASIC, OUTPUT_PATH, {
          info: {
            license: {
              name: 'MIT',
            },
            contact: {
              url: 'http://www.api.com/support',
            },
          },
        })
        equal(result, EXPECTED_LICENSE_CONTACT_PARTIAL_2)
      })

      it('should not fail if license and/or contact are empty', async function () {
        const result = await postmanToOpenApi(COLLECTION_BASIC, OUTPUT_PATH, {
          info: {
            license: {},
            contact: {},
          },
        })
        equal(result, EXPECTED_BASIC)
      })

      it('should not fail if auth is empty object', async function () {
        const result = await postmanToOpenApi(COLLECTION_BASIC, OUTPUT_PATH, {
          auth: {},
        })
        equal(result, EXPECTED_BASIC)
      })

      it('should use depth configuration for parse paths', async function () {
        const result = await postmanToOpenApi(COLLECTION_DEPTH_PATH_PARAMS, OUTPUT_PATH, {
          pathDepth: 1,
        })
        equal(result, EXPECTED_DEPTH_PATH_PARAMS)
      })

      it('should parse status codes from test', async function () {
        const result = await postmanToOpenApi(COLLECTION_PARSE_STATUS_CODE)
        equal(result, EXPECTED_PARSE_STATUS_CODE)
      })

      it('should parse operation when no path (only domain)', async function () {
        const result = await postmanToOpenApi(COLLECTION_NO_PATH)
        equal(result, EXPECTED_NO_PATH)
      })

      it('should support "DELETE" operations', async function () {
        const result = await postmanToOpenApi(COLLECTION_DELETE)
        equal(result, EXPECTED_DELETE)
      })

      it('should parse global authorization (Bearer)', async function () {
        const result = await postmanToOpenApi(COLLECTION_AUTH_BEARER, OUTPUT_PATH)
        equal(result, EXPECTED_AUTH_BEARER)
      })

      it('should parse global authorization (Basic)', async function () {
        const result = await postmanToOpenApi(COLLECTION_AUTH_BASIC, OUTPUT_PATH)
        equal(result, EXPECTED_AUTH_BASIC)
      })

      it('should use global authorization by configuration', async function () {
        const result = await postmanToOpenApi(COLLECTION_BASIC, OUTPUT_PATH, {
          auth: AUTH_DEFINITIONS,
        })
        equal(result, EXPECTED_BASIC_WITH_AUTH)
      })

      it('should parse url with port', async function () {
        const result = await postmanToOpenApi(COLLECTION_URL_WITH_PORT, OUTPUT_PATH)
        equal(result, EXPECTED_URL_WITH_PORT)
      })

      it('should parse external docs info from variables', async function () {
        const result = await postmanToOpenApi(COLLECTION_EXTERNAL_DOCS, OUTPUT_PATH)
        equal(result, EXPECTED_EXTERNAL_DOCS)
      })

      it('should parse external docs info from variables', async function () {
        const result = await postmanToOpenApi(COLLECTION_EXTERNAL_DOCS, OUTPUT_PATH, {
          externalDocs: {
            url: 'https://docs2.example.com',
            description: 'Find more info here or there',
          },
        })
        equal(result, EXPECTED_EXTERNAL_DOCS_OPTS)
      })

      it('should parse external docs info from variables', async function () {
        const result = await postmanToOpenApi(COLLECTION_BASIC, OUTPUT_PATH, {
          externalDocs: {
            url: 'https://docs2.example.com',
          },
        })
        equal(result, EXPECTED_EXTERNAL_DOCS_OPTS_PARTIAL)
      })

      it('should not transform empty url request', async function () {
        const result = await postmanToOpenApi(COLLECTION_EMPTY_URL, OUTPUT_PATH)
        equal(result, EXPECTED_EMPTY_URL)
      })

      it('should accept "x-logo" extension by option', async function () {
        const result = await postmanToOpenApi(COLLECTION_XLOGO, OUTPUT_PATH, {
          info: {
            xLogo: {
              url: 'https://github.com/joolfe/logoBanner.png',
              backgroundColor: '#FFFFFF',
              altText: 'Example logo',
            },
          },
        })
        equal(result, EXPECTED_X_LOGO)
      })

      it('should use only "x-logo" standard fields', async function () {
        const result = await postmanToOpenApi(COLLECTION_XLOGO, OUTPUT_PATH, {
          info: {
            xLogo: {
              url: 'https://github.com/joolfe/logoBanner.png',
              backgroundColor: '#FFFFFF',
              altText: 'Example logo',
              incorrect: 'field',
            },
          },
        })
        equal(result, EXPECTED_X_LOGO)
      })

      it('should use "x-logo" from variables', async function () {
        const result = await postmanToOpenApi(COLLECTION_XLOGO, OUTPUT_PATH, {})
        equal(result, EXPECTED_X_LOGO_VAR)
      })

      it('should support auth definition at request level', async function () {
        const result = await postmanToOpenApi(COLLECTION_MULTI_AUTH, OUTPUT_PATH, {})
        equal(result, EXPECTED_AUTH_MULTIPLE)
      })

      it('should ignore operational auth when auth options are provided', async function () {
        const result = await postmanToOpenApi(COLLECTION_MULTI_AUTH, OUTPUT_PATH, {
          auth: AUTH_DEFINITIONS,
        })
        equal(result, EXPECTED_AUTH_OPTIONS)
      })

      it('should add responses from postman examples', async function () {
        const result = await postmanToOpenApi(COLLECTION_RESPONSES, OUTPUT_PATH, { pathDepth: 2 })
        equal(result, EXPECTED_RESPONSES)
      })

      it('should add responses from multiple format for the same status code (text and json)', async function () {
        const result = await postmanToOpenApi(COLLECTION_RESPONSES_MULTI_LANG, OUTPUT_PATH, {
          pathDepth: 2,
        })
        equal(result, EXPECTED_RESPONSES_MULTI_LANG)
      })

      it('should work if auth only defined at request level', async function () {
        const result = await postmanToOpenApi(COLLECTION_AUTH_REQUEST, OUTPUT_PATH, {})
        equal(result, EXPECTED_AUTH_REQUEST)
      })

      it('should avoid headers in response', async function () {
        const result = await postmanToOpenApi(COLLECTION_RESPONSES, OUTPUT_PATH, {
          pathDepth: 2,
          responseHeaders: false,
        })
        equal(result, EXPECTED_RESPONSES_NO_HEADERS)
      })

      it('should parse POST methods with form data', async function () {
        const result = await postmanToOpenApi(COLLECTION_FORM_DATA, OUTPUT_PATH, {})
        equal(result, EXPECTED_FORM_DATA)
      })

      it('should parse POST methods with www form urlencoded', async function () {
        const result = await postmanToOpenApi(COLLECTION_FORM_URLENCODED, OUTPUT_PATH, {})
        equal(result, EXPECTED_FORM_URLENCODED)
      })

      it('should replace postman variables if feature activated', async function () {
        const result = await postmanToOpenApi(COLLECTION_VARIABLES, OUTPUT_PATH, {
          replaceVars: true,
        })
        equal(result, EXPECTED_VARIABLES)
      })

      it('should use additional variables for replace', async function () {
        const result = await postmanToOpenApi(COLLECTION_VARIABLES, OUTPUT_PATH, {
          replaceVars: true,
          additionalVars: {
            company: 'myCompany',
            service: 'myService',
          },
        })
        equal(result, EXPECTED_VARIABLES_ADDITIONAL)
      })

      it('should not fail if no variable are defined and want to replace', async function () {
        const result = await postmanToOpenApi(COLLECTION_FORM_DATA, OUTPUT_PATH, {
          replaceVars: true,
        })
        equal(result, EXPECTED_FORM_DATA)
      })

      it('should not fail if url has a base path but is not replaced', async function () {
        const result = await postmanToOpenApi(COLLECTION_BASEURL_VAR, OUTPUT_PATH, {
          servers: [
            {
              url: 'https://awesome.api.sandbox.io',
              description: 'Sandbox environment server',
            },
            {
              url: 'https://awesome.api.io',
              description: 'Production env',
            },
          ],
        })
        equal(result, EXPECTED_BASEPATH_VAR)
      })

      it('should try to parse raw body as json but fallback to text', async function () {
        const result = await postmanToOpenApi(COLLECTION_RAW_BODY, OUTPUT_PATH, {})
        equal(result, EXPECTED_RAW_BODY)
      })

      it('should work with collection wrapper attribute', async function () {
        const result = await postmanToOpenApi(COLLECTION_COLLECTION_WRAPPER, OUTPUT_PATH, {})
        equal(result, EXPECTED_COLLECTION_WRAPPER)
      })

      it('should return friendly error message when a response sample body has an error in JSON', async function () {
        await rejects(postmanToOpenApi(COLLECTION_RESPONSES_JSON_ERROR, OUTPUT_PATH, {}), {
          name: 'Error',
          message: 'Error parsing response example "Create new User automatic id"',
        })
      })

      it('should not fail if response body is json but empty', async function () {
        const result = await postmanToOpenApi(COLLECTION_RESPONSES_EMPTY, OUTPUT_PATH, {
          pathDepth: 2,
        })
        equal(result, EXPECTED_EMPTY_RESPONSES)
      })

      it('should not fail if request body and response body have json with comments', async function () {
        const result = await postmanToOpenApi(COLLECTION_JSON_COMMENTS, OUTPUT_PATH, {
          pathDepth: 2,
        })
        equal(result, EXPECTED_COLLECTION_JSON_COMMENTS)
      })

      it('should return "json" format is requested', async function () {
        const result = await postmanToOpenApi(COLLECTION_BASIC, OUTPUT_PATH, {
          outputFormat: 'json',
        })
        equal(result, EXPECTED_BASIC_JSON)
      })

      it('should not parse `disabled` parameters', async function () {
        const result = await postmanToOpenApi(COLLECTION_DISABLED, OUTPUT_PATH)
        equal(result, EXPECTED_DISABLED_PARAMS_DEFAULT)
      })

      it('should parse `disabled` parameters if option is used', async function () {
        const result = await postmanToOpenApi(COLLECTION_DISABLED, OUTPUT_PATH, {
          disabledParams: {
            includeQuery: true,
            includeHeader: true,
          },
        })
        equal(result, EXPECTED_DISABLED_PARAMS_ALL)
      })

      it('should include `disable` query but not header', async function () {
        const result = await postmanToOpenApi(COLLECTION_DISABLED, OUTPUT_PATH, {
          disabledParams: {
            includeQuery: true,
          },
        })
        equal(result, EXPECTED_DISABLED_PARAMS_QUERY)
      })

      it('should include `disable` headers but not query', async function () {
        const result = await postmanToOpenApi(COLLECTION_DISABLED, OUTPUT_PATH, {
          disabledParams: {
            includeHeader: true,
          },
        })
        equal(result, EXPECTED_DISABLED_PARAMS_HEADER)
      })

      it('should not add `operationId` by default', async function () {
        const result = await postmanToOpenApi(COLLECTION_OPERATION_IDS, OUTPUT_PATH)
        equal(result, EXPECTED_OPERATIONS_IDS)
      })

      it('should include `operationId` when `auto` is selected', async function () {
        const result = await postmanToOpenApi(COLLECTION_OPERATION_IDS, OUTPUT_PATH, {
          operationId: 'auto',
        })
        equal(result, EXPECTED_OPERATIONS_IDS_AUTO)
      })

      it('should include `operationId` when `brackets` is selected', async function () {
        const result = await postmanToOpenApi(COLLECTION_OPERATION_IDS, OUTPUT_PATH, {
          operationId: 'brackets',
        })
        equal(result, EXPECTED_OPERATIONS_IDS_BRACKETS)
      })

      it('should not add `operationId` if option is unknown', async function () {
        const result = await postmanToOpenApi(COLLECTION_OPERATION_IDS, OUTPUT_PATH, {
          operationId: 'banana',
        })
        equal(result, EXPECTED_OPERATIONS_IDS)
      })
    })
  })

  it('should work if no options in request body', async function () {
    const result = await postmanToOpenApi(COLLECTION_NO_OPTIONS, OUTPUT_PATH, {})
    equal(result, EXPECTED_BASIC_NO_OPTS)
  })

  it('should expose the version of the library', async function () {
    strictEqual(postmanToOpenApi.version, version)
  })

  it('should work if header is equals to "null" in response', async function () {
    const result = await postmanToOpenApi(COLLECTION_NULL_HEADERS, OUTPUT_PATH, {})
    equal(result, EXPECTED_NULL_HEADER)
  })

  it('should work with string as input (instead of a file path)', async function () {
    const collectionString = await readFile(COLLECTION_NO_OPTIONS, 'utf8')
    const result = await postmanToOpenApi(collectionString, OUTPUT_PATH, {})
    equal(result, EXPECTED_BASIC_NO_OPTS)
  })

  /* we keep this because im using all the time to resolve issues
  it('issue233', async function () {
    const collectionString = await readFile(path.join(TEST_RESOURCES_PATH, input/issue233.json', 'utf8')
    const result = await postmanToOpenApi(collectionString, OUTPUT_PATH, {})
    console.log(result)
    // equal(result, EXPECTED_BASIC_NO_OPTS)
  })
  */
})
