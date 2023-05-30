import { DemoContent, Text } from 'konfig-openapi-spec'
import fromMarkdown from 'mdast-util-from-markdown'
import { Root, Heading, Code, InlineCode } from 'mdast'

export async function mdToDemoContent({
  markdown,
}: {
  markdown: string
}): Promise<DemoContent> {
  const node = fromMarkdown(markdown)
  const demoContent: DemoContent = []
  new HeadingVisitor({ demoContent }).visit({ node })
  return demoContent
}

abstract class MarkdownAstVisitor {
  demoContent: DemoContent

  visit({ node }: { node: Root | Heading | Code }) {
    if (node.type === 'root') {
      this.root({ node })
    } else if (node.type === 'code') {
      this.code({ node })
    } else if (node.type === 'heading') {
      this.heading({ node })
    }
    throw Error(`Unexpected node type "${node.type}"`)
  }

  constructor({ demoContent }: { demoContent: DemoContent }) {
    this.demoContent = demoContent
  }

  inlineCode({ node }: { node: InlineCode }): Text | undefined {
    return
  }
  heading({ node }: { node: Heading }): void {}
  root({ node }: { node: Root }): void {}
  code({ node }: { node: Code }): void {}
}

class HeadingVisitor extends MarkdownAstVisitor {
  heading({ node }: { node: Heading }): void {
    this.demoContent.push({
      type: 'header_1',
      header_1: { rich_text: [] },
    })
  }
}
