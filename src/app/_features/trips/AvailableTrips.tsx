'use client'

import { useContext } from 'react'
import AvailableTripCard from './AvailableTripCard'
import { formatDate } from '@/lib/utils'
import { TripsContext } from '@/context/TripsContext'
import { api } from '@/trpc/react'
import CardSkeleton from '@/components/CardSkeleton'

export default function AvailableTrips() {
  const tripsContext = useContext(TripsContext)
  const travelDate = formatDate(tripsContext?.travelDate ?? new Date())
  const filterParams = {
    departure: tripsContext?.departure ?? '',
    destination: tripsContext?.destination ?? '',
    travelDate: travelDate,
  }

  const { data: availableTrips, isPending } = api.trip.availableTrips.useQuery(filterParams)

  if (isPending) return <CardSkeleton count={5} />
  return (
    <div className="flex w-full flex-col items-center gap-8">
      {availableTrips?.map((trip) => (
        <AvailableTripCard
          key={trip.travel_routes.routeId}
          departure={trip.travel_routes.departure}
          destination={trip.travel_routes.destination}
          seats={trip.travel_routes.availableSeats ?? 0}
          ticketPrice={trip.travel_routes.ticketPrice ?? ''}
          company={trip.shuttles?.busOperatos ?? ''}
        />
      ))}
    </div>
  )
}
