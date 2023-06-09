import { unified } from 'unified'
import remarkDirective from 'remark-directive'
import remarkParse from 'remark-parse'
import { toString } from 'mdast-util-to-string'
import { visit } from 'unist-util-visit'

export function getTitlesFromMarkdown({
  markdown,
}: {
  markdown: string
}): string[] {
  const processor = unified().use(remarkParse).use(remarkDirective)
  const mdast = processor.parse(markdown)

  const titles: string[] = []

  visit(
    mdast,
    (node) => {
      return node.type === 'heading'
    },
    (node) => {
      titles.push(toString(node))
    }
  )

  return titles
}
