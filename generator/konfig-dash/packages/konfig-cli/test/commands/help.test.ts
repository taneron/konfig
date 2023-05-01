import { test } from '@oclif/test'

describe('help', () => {
  test
    .stdout()
    .command(['help'])
    .it('runs', () => {})
})
