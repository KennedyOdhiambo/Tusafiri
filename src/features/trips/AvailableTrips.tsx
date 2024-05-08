'use client'

import { useContext, useEffect, useState } from 'react'
import AvailableTripCard from './AvailableTripCard'
import { formatDate } from '@/lib/utils'
import { TripsContext } from '@/context/TripsContext'

export default function AvailableTrips() {
  const [availableTrips, setAvailableTrips] = useState([])

  const tripsContext = useContext(TripsContext)
  const departure = tripsContext?.departure
  const destination = tripsContext?.destination
  const travelDate = formatDate(tripsContext?.travelDate ?? new Date())

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`/api/trips?departure=${departure}&destination=${destination}&travelDate=${travelDate}`)
      const data = await res.json()
      setAvailableTrips(data.availableTrips)
    }

    fetchData()
  }, [departure, destination, travelDate])

  return (
    <div className="flex w-full flex-col items-center gap-8">
      {/* {availableTrips.map((trip) => (
        <AvailableTripCard departure={trip.} />
      ))} */}
    </div>
  )
}
