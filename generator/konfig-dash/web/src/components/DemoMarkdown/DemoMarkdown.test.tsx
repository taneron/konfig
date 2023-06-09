import { render } from '@redwoodjs/testing/web'

import DemoMarkdown from './DemoMarkdown'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('DemoMarkdown', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<DemoMarkdown />)
    }).not.toThrow()
  })
})
