import { parseFilterFlag } from '../../src/util/parseFilterFlag'
import { expect } from 'chai'

describe('parseFilterFlag', () => {
  it('simple', () => {
    expect(parseFilterFlag('java')).to.eql(['java'])
    expect(parseFilterFlag('java,python')).to.eql(['java', 'python'])
    expect(parseFilterFlag(',python')).to.eql(['python'])
    expect(parseFilterFlag('python,')).to.eql(['python'])
    expect(() => parseFilterFlag('')).throw()
  })
})
