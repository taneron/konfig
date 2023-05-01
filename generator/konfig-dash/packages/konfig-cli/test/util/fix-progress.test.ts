import { Progress } from '../../src/util/fix-progress'

describe('fix-progress', () => {
  it('no duplicate response schema names', () => {
    const invalidProgress = {
      responseSchemaNames: {
        '/v2/payments/upi/link': {
          post: {
            '200': {
              'application/json': 'GeneratePaymentLinkResponse',
            },
            '400': {
              'application/json': 'GeneratePaymentLinkResponse',
            },
          },
        },
      },
    }
    expect(
      () => new Progress({ progress: invalidProgress, noSave: true })
    ).toThrow()
  })
})
