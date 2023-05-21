import { render } from '@redwoodjs/testing/web'

import SnapTradeDemo from './SnapTradeDemo'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('SnapTradeDemo', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SnapTradeDemo />)
    }).not.toThrow()
  })
})
