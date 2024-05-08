import { db } from '@/db/connect'
import { travelRoutes } from '@/db/schema/travelRoute'
import { and, eq } from 'drizzle-orm'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
  const params = req.nextUrl.searchParams

  const departure = params.get('departure')
  const destination = params.get('destination')
  const travelDate = params.get('travelDate')

  const availableTrips = await db
    .select()
    .from(travelRoutes)
    .where(
      and(
        eq(travelRoutes.departure, departure as string),
        eq(travelRoutes.destination, destination as string),
        eq(travelRoutes.travelDate, travelDate as string),
      ),
    )

  return NextResponse.json({ availableTrips })
}
