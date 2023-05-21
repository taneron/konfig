import { render } from '@redwoodjs/testing/web'

import SnaptradePage from './SnaptradePage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('SnaptradePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SnaptradePage />)
    }).not.toThrow()
  })
})
