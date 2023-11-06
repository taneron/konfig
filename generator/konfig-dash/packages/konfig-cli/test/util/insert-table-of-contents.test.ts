import { applyReferenceLinkFix } from '../../src/util/insert-table-of-contents'

it('apply reference link fix', () => {
  expect(applyReferenceLinkFix(`# Heading 1`)).toMatchInlineSnapshot(
    `"# Heading 1<a id="heading-1"></a>"`
  )
  expect(applyReferenceLinkFix(`\`\`\`python\n#comment\n\`\`\``))
    .toMatchInlineSnapshot(`
    "\`\`\`python
    #comment
    \`\`\`"
  `)
})
