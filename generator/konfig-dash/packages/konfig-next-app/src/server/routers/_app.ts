import { procedure, router } from '../trpc'
import axios from 'axios'
import { urlForPythonRceApi } from '@/utils/urlForPythonRceApi'
import remarkDirective from 'remark-directive'
import remarkDirectiveRehype from 'remark-directive-rehype'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import { visit } from 'unist-util-visit'
import { position } from 'unist-util-position'
import { stringifyPosition } from 'unist-util-stringify-position'
import { Node } from 'unist'
import { toText } from 'hast-util-to-text'
import { unified } from 'unified'
import {
  StartSessionResponse,
  ExecuteCodeRequest,
  ExecuteCodeResponse,
  PingSessionRequest,
  PingSessionResponse,
} from '@/utils/schemas'
import { demos } from '@/utils/demos'

export const appRouter = router({
  startSession: procedure.output(StartSessionResponse).query(async () => {
    const url = `${urlForPythonRceApi()}/sessions/create`

    const { data } = await axios.post(url)
    return StartSessionResponse.parse(data)
  }),
  pingSessions: procedure.input(PingSessionRequest).query(async ({ input }) => {
    const url = `${urlForPythonRceApi()}/sessions/ping`
    const { data } = await axios.post(url, { session_ids: input.sessionIds })
    return PingSessionResponse.parse(data)
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

      const organization = demos.find(({ id }) => id === input.organizationId)

      const portal = organization?.portals.find(
        ({ id }) => id === input.portalId
      )

      const demo = portal?.demos.find(({ id }) => id === input.demoId)
      if (demo === undefined)
        return {
          result: 'Could not find demo',
        }

      const hast = processor.runSync(processor.parse(demo.markdown))

      // Find the node with the same position and convert to code
      let matchingNode: Node | null = null
      visit(
        hast,
        (node) => {
          const id = stringifyPosition(position(node))
          const positionQuery = stringifyPosition(input.codePosition)
          return id === positionQuery
        },
        (node) => {
          matchingNode = node
        }
      )

      if (matchingNode === null) {
        return {
          result: 'Could not find code',
        }
      }
      const code = toText(matchingNode, { whitespace: 'pre' })

      const { data } = await axios.post(url, {
        session_id: input.sessionId,
        code: code,
        environment_variables: input.environmentVariables,
        local_variables: input.localVariables,
      })

      return ExecuteCodeResponse.parse(data)
    }),
})

// export type definition of API
export type AppRouter = typeof appRouter
