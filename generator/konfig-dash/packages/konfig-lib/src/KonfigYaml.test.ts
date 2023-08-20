import { generatorGitConfig } from './KonfigYaml'
import { primaryColor } from './KonfigYamlCommon'

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
  it('primaryColor - valid', () => {
    expect(() => primaryColor.parse('000000')).not.toThrowError()
    expect(() => primaryColor.parse('#000000')).not.toThrowError()
    expect(() => primaryColor.parse('rgb(0,0,0)')).not.toThrowError()
    expect(() => primaryColor.parse('hsl(0,0%,0%)')).not.toThrowError()
  })
  it('primaryColor - invalid', () => {
    expect(() => primaryColor.parse('invalid')).toThrowError()
  })
})
