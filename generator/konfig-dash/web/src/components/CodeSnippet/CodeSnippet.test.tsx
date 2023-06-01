import { render } from '@redwoodjs/testing/web'

import CodeSnippet from './CodeSnippet'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('CodeSnippet', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CodeSnippet />)
    }).not.toThrow()
  })
})
