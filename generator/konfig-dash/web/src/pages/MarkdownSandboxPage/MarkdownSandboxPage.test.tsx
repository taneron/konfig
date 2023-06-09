import { render } from '@redwoodjs/testing/web'

import MarkdownSandboxPage from './MarkdownSandboxPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('MarkdownSandboxPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<MarkdownSandboxPage />)
    }).not.toThrow()
  })
})
