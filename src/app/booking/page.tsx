import NavigationBreadCrumbs from '@/components/NavigationBreadCrumbs';
import SearchAvailableTripsBooking from '@/features/trips/SearchAvailableTripsBooking';

export default function Booking() {
  return (
    <div className="mt-12 min-h-screen p-6 md:px-8">
      <NavigationBreadCrumbs />
      <div className="mt-12 px-24">
        <SearchAvailableTripsBooking />
      </div>
    </div>
  );
}
