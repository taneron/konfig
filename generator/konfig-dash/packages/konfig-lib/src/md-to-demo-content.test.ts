import { mdToDemoContent } from './md-to-demo-content'

describe('md-to-demo-content', () => {
  it('simple', async () => {
    const test = await mdToDemoContent({
      markdown: '# Test \`clientId\`\n\n```python\nprint("test")```',
    })
  })
})
