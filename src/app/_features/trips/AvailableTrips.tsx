'use client'

import { useContext, useEffect, useState } from 'react'
import AvailableTripCard from './AvailableTripCard'
import { formatDate } from '@/lib/utils'
import { TripsContext } from '@/context/TripsContext'
import { api } from '@/trpc/react'

export default function AvailableTrips() {
  const tripsContext = useContext(TripsContext)

  const travelDate = formatDate(tripsContext?.travelDate ?? new Date())
  const filterParams = {
    departure: tripsContext?.departure ?? '',
    destination: tripsContext?.destination ?? '',
    travelDate: travelDate,
  }

  const { data: availableTrips } = api.trip.availableTrips.useQuery(filterParams)

  return (
    <div className="flex w-full flex-col items-center gap-8">
      {availableTrips?.map((trip) => (
        <AvailableTripCard
          departure={trip.departure}
          destination={trip.destination}
          seats={trip.availableSeats ?? 0}
          ticketPrice={trip.ticketPrice ?? ''}
          key={trip.routeId}
        />
      ))}
    </div>
  )
}
