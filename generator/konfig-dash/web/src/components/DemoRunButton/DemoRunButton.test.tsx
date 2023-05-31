import { render } from '@redwoodjs/testing/web'

import DemoRunButton from './DemoRunButton'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('DemoRunButton', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<DemoRunButton />)
    }).not.toThrow()
  })
})
