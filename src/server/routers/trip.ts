import { travelRoutes } from '@/db/schema/travelRoute'
import { createTRPCRouter, publicProcedure } from '@/server/trpc'
import { and, eq } from 'drizzle-orm'
import { z } from 'zod'

export const tripRouter = createTRPCRouter({
  availableTrips: publicProcedure
    .input(
      z.object({
        departure: z.string(),
        destination: z.string(),
        travelDate: z.string(),
      }),
    )
    .query(async ({ ctx, input }) => {
      const { departure, destination, travelDate } = input
      const availableTrips = await ctx.db
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
