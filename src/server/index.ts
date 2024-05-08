import { db } from '@/db/connect'
import { publicProcedure, router } from './trpc'
import { travelRoutes } from '@/db/schema/travelRoute'
import { and, eq } from 'drizzle-orm'
import { z } from 'zod'

export const appRouter = router({
  availableTrips: publicProcedure
    .input(
      z.object({
        departure: z.string(),
        destination: z.string(),
        travelDate: z.string(),
      }),
    )
    .query(async (opts) => {
      const { departure, destination, travelDate } = opts.input

      const availableTrips = db
        .select()
        .from(travelRoutes)
        .where(
          and(
            eq(travelRoutes.departure, departure),
            eq(travelRoutes.destination, destination),
            eq(travelRoutes.travelDate, travelDate),
          ),
        )

      return availableTrips
    }),
})

export type Approuter = typeof appRouter
