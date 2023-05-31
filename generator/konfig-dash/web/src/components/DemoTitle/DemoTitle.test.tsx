import { render } from '@redwoodjs/testing/web'

import DemoTitle from './DemoTitle'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('DemoTitle', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<DemoTitle />)
    }).not.toThrow()
  })
})
