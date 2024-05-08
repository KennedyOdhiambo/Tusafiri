import { Approuter } from '@/server'
import { httpBatchLink } from '@trpc/client'
import { createTRPCNext } from '@trpc/next'
import { ssrPrepass } from '@trpc/next/ssrPrepass'

function getBaseUrl() {
  if (typeof window !== 'undefined') {
    return ''
  }

  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`
  }

  return `https://localhost:${process.env.PORT ?? 3000}`
}

export const trpc = createTRPCNext<Approuter>({
  config() {
    return {
      links: [
        httpBatchLink({
          url: getBaseUrl() + '/api/trpc',
        }),
      ],
    }
  },

  ssr: true,
  ssrPrepass,
})
