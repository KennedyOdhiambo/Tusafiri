'use client'

import { useContext, useEffect, useState } from 'react'
import AvailableTripCard from './AvailableTripCard'
import { formatDate } from '@/lib/utils'
import { TripsContext } from '@/context/TripsContext'
import { api } from '@/trpc/react'

export default function AvailableTrips() {
  const tripsContext = useContext(TripsContext)
  const departure = tripsContext?.departure
  const destination = tripsContext?.destination
  const travelDate = formatDate(tripsContext?.travelDate ?? new Date())

  const { data: availableTrips } = api.trip.availableTrips.useQuery({
    departure: 'Nairobi',
    destination: 'Kisumu',
    travelDate: '2024-05-01',
  })

  console.log(availableTrips)

  return (
    <div className="flex w-full flex-col items-center gap-8">
      {/* {availableTrips.map((trip) => (
        <AvailableTripCard departure={trip.} />
      ))} */}
    </div>
  )
}
