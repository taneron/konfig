import { render } from '@redwoodjs/testing/web'

import CellOutput from './CellOutput'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('CellOutput', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CellOutput />)
    }).not.toThrow()
  })
})
