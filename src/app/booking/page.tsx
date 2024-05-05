import NavigationBreadCrumbs from '@/components/NavigationBreadCrumbs'
import { db } from '@/db/connect'
import { travelRoutes } from '@/db/schema/travelRoute'
import BusOperators from '@/features/shuttles/BusOperators'
import BusTypes from '@/features/shuttles/BusTypes'
import Facilities from '@/features/shuttles/Facilities'

import AvailableTrips from '@/features/trips/AvailableTrips'
import SearchAvailableTripsBooking from '@/features/trips/SearchAvailableTripsBooking'

export default async function Booking() {
  const routes = await db.select().from(travelRoutes)
  const departures = routes.map((route) => route.departure)
  const destinations = routes.map((route) => route.destination)
  return (
    <div className="flex flex-col gap-10 p-6 lg:items-center">
      <div className="lg:w-[1012px]">
        <NavigationBreadCrumbs path={['booking']} />
      </div>
      <SearchAvailableTripsBooking departure={departures} destinations={destinations} />
      <div className="flex flex-row gap-20 lg:mt-8 lg:w-[1010px]">
        <div className="hidden lg:flex lg:flex-col">
          <BusTypes />
          <Facilities />
          <BusOperators />
        </div>

        <AvailableTrips />
      </div>
    </div>
  )
}
