'use client';
import DropdownSelect from '@/components/DropdownSelect';
import { DatePicker } from '@/components/ui/datepicker';
import { TripsContext } from '@/context/TripsContext';
import { useContext } from 'react';

type Props = {
  departures: Array<string>;
  destinations: Array<string>;
};

export default function AvailableTripsDropdown({ departures, destinations }: Props) {
  const tripsContext = useContext(TripsContext);

  const uniqueDepartures = Array.from(new Set(departures));
  const departureDropdownOptions = uniqueDepartures.map((departure) => ({
    value: departure,
    text: departure,
  }));

  const uniqueDestinations = Array.from(new Set(destinations));
  const destinationDropdownOptions = uniqueDestinations.map((destination) => ({
    value: destination,
    text: destination,
  }));

  const handleDepartureChange = (departure: string) => {
    tripsContext?.setDeparture(departure);
  };

  const handleDestinationChange = (destination: string) => {
    tripsContext?.setDestination(destination);
  };

  return (
    <div className="flex w-fit flex-col items-center gap-3 md:grid md:grid-cols-3 md:items-end xl:col-span-3">
      <DropdownSelect handleSelect={handleDepartureChange} label="Travelling From" options={departureDropdownOptions} />
      <DropdownSelect
        handleSelect={handleDestinationChange}
        label="Travelling To"
        options={destinationDropdownOptions}
      />
      <DatePicker />
    </div>
  );
}
