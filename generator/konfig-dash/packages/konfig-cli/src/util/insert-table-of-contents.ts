import * as path from 'path'
import * as fs from 'fs'

export function insertTableOfContents({
  outputDirectory,
}: {
  outputDirectory: string
}) {
  const toc = require('markdown-toc')
  const readmePath = path.join(outputDirectory, 'README.md')
  const readme = fs.readFileSync(readmePath, 'utf-8')
  const withToc = toc.insert(readme, {
    filter: (str: string) => {
      return !str.startsWith('[Author]')
    },
    maxdepth: 3,
  })
  const withTocAndReferenceLinkFix = applyReferenceLinkFix(withToc)
  fs.writeFileSync(readmePath, withTocAndReferenceLinkFix)
}

const { slugify } = require('markdown-toc/lib/utils')

// https://github.com/pypa/readme_renderer/issues/169#issuecomment-808577486
/**
 * Turns all headings into links by adding <a id="..."></a> after them with no space.
 * Uses regex to avoid parsing the markdown AST.
 */
/**
 * Applies reference link fix to markdown text, excluding code blocks.
 *
 * @param markdown - The markdown text.
 * @returns The fixed markdown text.
 */
export function applyReferenceLinkFix(markdown: string): string {
  // This regex matches code blocks.
  const codeBlockRegex = /```[\s\S]*?```/g
  // This regex matches headings outside code blocks.
  const headingRegex = /^#+\s+(.*)$/gm

  // Function to replace headings with slugified anchors.
  function replaceHeadings(match: string, p1: string): string {
    const slug = slugify(p1)
    return `${match}<a id="${slug}"></a>`
  }

  // Split the content by code blocks and process non-code sections.
  const parts = markdown.split(codeBlockRegex)
  const codeBlocks = markdown.match(codeBlockRegex) || []

  let fixedMarkdown = ''
  let codeBlockIndex = 0

  parts.forEach((part, index) => {
    // Apply fix to non-code parts.
    fixedMarkdown += part.replace(headingRegex, replaceHeadings)
    // Re-insert code blocks where they were.
    if (codeBlockIndex < codeBlocks.length) {
      fixedMarkdown += codeBlocks[codeBlockIndex++]
    }
  })

  return fixedMarkdown
}
