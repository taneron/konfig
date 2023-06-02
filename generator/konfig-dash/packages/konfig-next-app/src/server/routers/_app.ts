import { z } from 'zod'
import { procedure, router } from '../trpc'
import axios from 'axios'
import { urlForPythonRceApi } from '@/utils/urlForPythonRceApi'
import { snapTradeGettingStartedMarkdown } from 'konfig-lib'
import remarkDirective from 'remark-directive'
import remarkDirectiveRehype from 'remark-directive-rehype'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import { unified } from 'unified'

const StartSessionResponse = z.object({ session_id: z.string() })

const Point = z.object({
  /**
   * Line in a source file (1-indexed integer).
   */
  line: z.number(),

  /**
   * Column in a source file (1-indexed integer).
   */
  column: z.number(),
  /**
   * Character in a source file (0-indexed integer).
   */
  offset: z.number().optional(),
})

const Position = z.object({
  /**
   * Place of the first character of the parsed source region.
   */
  start: Point,

  /**
   * Place of the first character after the parsed source region.
   */
  end: Point,

  /**
   * Start column at each index (plus start line) in the source region,
   * for elements that span multiple lines.
   */
  indent: z.number().optional(),
})

const ExecuteCodeRequest = z.object({
  demoId: z.literal('snaptrade'),
  sessionId: z.string(),
  codePosition: Position,
  environmentVariables: z.record(z.string(), z.string()),
})
const ExecuteCodeResponse = z.object({
  result: z.union([z.literal('Success'), z.literal('Error')]),
  output: z.string(),
  error: z.string(),
})

export const appRouter = router({
  startSession: procedure.output(StartSessionResponse).query(async () => {
    const url = `${urlForPythonRceApi()}/sessions/create`

    const { data } = await axios.post(url)
    return StartSessionResponse.parse(data)
  }),
  executeCode: procedure
    .input(ExecuteCodeRequest)
    .output(ExecuteCodeResponse)
    .query(async ({ input }) => {
      const url = `${urlForPythonRceApi()}/sessions/execute`

      const processor = unified()
        .use(remarkParse)
        .use(remarkDirective)
        .use(remarkDirectiveRehype)
        .use(remarkRehype)

      const hast = processor.runSync(
        processor.parse(snapTradeGettingStartedMarkdown),
        snapTradeGettingStartedMarkdown
      )

      const { data } = await axios.post(url, {
        session_id: input.sessionId,
        code: '',
        environment_variables: input.environmentVariables,
      })

      return ExecuteCodeResponse.parse(data)
    }),
})

// export type definition of API
export type AppRouter = typeof appRouter
