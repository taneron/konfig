import { unified } from 'unified'
import remarkParse from 'remark-parse'

export async function mdToDemoContent({
  markdown,
}: {
  markdown: string
}): Promise<any> {
  const file = await unified().use(remarkParse).process(markdown)
  return file
}
