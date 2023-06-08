import { unified } from 'unified'
import remarkDirective from 'remark-directive'
import remarkDirectiveRehype from 'remark-directive-rehype'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import { visit } from 'unist-util-visit'

export function getTitlesFromMarkdown({
  markdown,
}: {
  markdown: string
}): string[] {
  const processor = unified()
    .use(remarkParse)
    .use(remarkDirective)
    .use(remarkDirectiveRehype)
    .use(remarkRehype)
  const hast = processor.runSync(processor.parse(markdown))

  visit(
    hast,
    (node) => {
      if (node.type === 'element') return true
      const headingRegex = /h[1-6]/g
      if ('tagName' in node && node.tagName.match(headingRegex)) return true
      return false
    },
    (node) => {
      console.log(node)
    }
  )

  return []
}
