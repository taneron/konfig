import { z } from 'zod'
import { procedure, router } from '../trpc'
import axios from 'axios'
import { urlForPythonRceApi } from '@/utils/urlForPythonRceApi'

const StartSessionResponse = z.object({ session_id: z.string() })

export const appRouter = router({
  hello: procedure
    .input(
      z.object({
        text: z.string(),
      })
    )
    .query((opts) => {
      return {
        greeting: `hello ${opts.input.text}`,
      }
    }),
  startSession: procedure.output(StartSessionResponse).query(async () => {
    const url = `${urlForPythonRceApi()}/sessions/create`

    const { data } = await axios.post(url)
    return StartSessionResponse.parse(data)
  }),
})

// export type definition of API
export type AppRouter = typeof appRouter
