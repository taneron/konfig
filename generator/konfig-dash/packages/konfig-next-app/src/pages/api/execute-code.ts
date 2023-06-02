// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkDirective from 'remark-directive'
import remarkDirectiveRehype from 'remark-directive-rehype'
import remarkRehype from 'remark-rehype'
import { snapTradeGettingStartedMarkdown } from 'konfig-lib/dist/snaptrade-demo'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const processor = unified()
    .use(remarkParse)
    .use(remarkDirective)
    .use(remarkDirectiveRehype)
    .use(remarkRehype)

  const hast = processor.runSync(
    processor.parse(snapTradeGettingStartedMarkdown),
    snapTradeGettingStartedMarkdown
  )

  res.status(200).json(hast)
}
