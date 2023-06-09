import type { AppRouter } from '@/server/routers/_app'
import { createTRPCProxyClient, httpBatchLink } from '@trpc/client'
import { getBaseUrl } from './trpc'

export const api = createTRPCProxyClient<AppRouter>({
  links: [
    httpBatchLink({
      /**
       * If you want to use SSR, you need to use the server's full URL
       * @link https://trpc.io/docs/ssr
       **/
      url: `${getBaseUrl()}/api/trpc`,

      // You can pass any HTTP headers you wish here
      async headers() {
        return {
          // authorization: getAuthCookie(),
        }
      },
    }),
  ],
})
