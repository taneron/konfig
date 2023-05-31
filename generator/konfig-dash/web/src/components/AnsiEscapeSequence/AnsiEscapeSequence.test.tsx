import { render } from '@redwoodjs/testing/web'

import AnsiEscapeSequence from './AnsiEscapeSequence'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('AnsiEscapeSequence', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AnsiEscapeSequence />)
    }).not.toThrow()
  })
})
