import NavigationBreadCrumbs from '@/components/NavigationBreadCrumbs';
import BusOperators from '@/features/shuttles/BusOperators';
import BusTypes from '@/features/shuttles/BusTypes';
import Facilities from '@/features/shuttles/Facilities';
import SearchAvailableTripsBooking from '@/features/trips/SearchAvailableTripsBooking';

export default function Booking() {
  return (
    <div className="mt-12 min-h-screen p-6 md:px-8">
      <NavigationBreadCrumbs />
      <div className="mt-12 flex flex-col items-center gap-10 px-2">
        <SearchAvailableTripsBooking />
        <div className=" w-[1000px]">
          <div className="flex flex-col">
            <BusTypes />
            <Facilities />
            <BusOperators />
          </div>
        </div>
      </div>
    </div>
  );
}
