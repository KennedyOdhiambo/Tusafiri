import NavigationBreadCrumbs from '@/components/NavigationBreadCrumbs';
import BusOperators from '@/features/shuttles/BusOperators';
import BusTypes from '@/features/shuttles/BusTypes';
import Facilities from '@/features/shuttles/Facilities';
import AvailableTripCard from '@/features/trips/AvailableTripCard';
import SearchAvailableTripsBooking from '@/features/trips/SearchAvailableTripsBooking';

export default function Booking() {
  return (
    <div className="flex min-h-screen flex-col gap-10 p-6 lg:items-center">
      <div className="lg:w-[1012px]">
        <NavigationBreadCrumbs />
      </div>

      <SearchAvailableTripsBooking />

      <div className="flex flex-row gap-20 lg:w-[1010px]">
        <div className="hidden lg:flex lg:flex-col">
          <BusTypes />
          <Facilities />
          <BusOperators />
        </div>

        <AvailableTripCard />

        <div className="hidden lg:flex lg:flex-col">
          <BusTypes />
          <Facilities />
          <BusOperators />
        </div>
      </div>
    </div>
  );
}
