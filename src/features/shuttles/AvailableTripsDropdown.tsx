'use client';

import DropdownSelect from '@/components/DropdownSelect';
import { DatePicker } from '@/components/ui/datepicker';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

type Props = {
  departures: Array<string>;
  destinations: Array<string>;
};

export default function AvailableTripsDropdown({ departures, destinations }: Props) {
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const router = useRouter();

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

  const params = new URLSearchParams(searchParams.toString());
  const handleDepartureChange = (departure: string) => {
    if (departure) {
      params.set('departure', departure);
    } else {
      params.delete('departure');
    }

    router.push(pathName + '?' + params.toString());
  };

  const handleDestinationChange = (destination: string) => {
    if (destination) {
      params.set('destination', destination);
    } else {
      params.delete('destination');
    }

    router.push(`${pathName}?${params.toString()}`);
  };

  return (
    <Suspense>
      <div className="flex w-fit flex-col items-center gap-3 md:grid md:grid-cols-3 md:items-end xl:col-span-3">
        <DropdownSelect
          handleSelect={handleDepartureChange}
          label="Travelling From"
          options={departureDropdownOptions}
        />
        <DropdownSelect
          handleSelect={handleDestinationChange}
          label="Travelling To"
          options={destinationDropdownOptions}
        />
        <DatePicker />
      </div>
    </Suspense>
  );
}
