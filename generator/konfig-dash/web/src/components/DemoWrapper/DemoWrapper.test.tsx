import { render } from '@redwoodjs/testing/web'

import DemoWrapper from './DemoWrapper'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('DemoWrapper', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<DemoWrapper />)
    }).not.toThrow()
  })
})
