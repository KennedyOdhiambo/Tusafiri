import AvailableTripCard from './AvailableTripCard';

export default function AvailableTrips() {
  return (
    <div className="flex w-full flex-col items-center gap-8">
      <AvailableTripCard />
      <AvailableTripCard />
      <AvailableTripCard />
      <AvailableTripCard />
      <AvailableTripCard />
    </div>
  );
}
