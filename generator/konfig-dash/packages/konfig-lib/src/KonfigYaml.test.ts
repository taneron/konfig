import { generatorGitConfig } from './KonfigYaml'

describe('KonfigYaml', () => {
  it('generatorGitConfig', () => {
    const parsed = generatorGitConfig.parse({
      userId: 'konfig-dev',
      repoId: 'acme-sdks/tree/main/typescript',
    })
    expect(parsed).toEqual({
      host: 'github.com',
      userId: 'konfig-dev',
      repoId: 'acme-sdks/tree/main/typescript',
      repoName: 'acme-sdks',
    })
  })
})
