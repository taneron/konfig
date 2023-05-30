import { mdToDemoContent } from './md-to-demo-content'

describe('md-to-demo-content', () => {
  it('simple', async () => {
    const test = mdToDemoContent({
      markdown: '# Test\n\n```python\nprint("test")```',
    })
    console.log(test)
  })
})
