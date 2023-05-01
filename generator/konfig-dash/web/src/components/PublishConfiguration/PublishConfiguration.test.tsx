import { render } from '@redwoodjs/testing/web'

import PublishConfiguration from './PublishConfiguration'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('PublishConfiguration', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PublishConfiguration />)
    }).not.toThrow()
  })
})
