import { render } from '@redwoodjs/testing/web'

import NavbarLinks from './NavbarLinks'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('NavbarLinks', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<NavbarLinks />)
    }).not.toThrow()
  })
})
