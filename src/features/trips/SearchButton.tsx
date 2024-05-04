'use client';
import { Button } from '@/components/ui/button';
import { TripsContext } from '@/context/TripsContext';
import React, { useContext } from 'react';

export default function SearchButton() {
  const tripsContext = useContext(TripsContext);
  const departure = tripsContext?.departure;
  const destination = tripsContext?.destination;
  const travelDate = tripsContext?.travelDate;

  const handleButtonClick = () => {
    const tripParams = { departure, destination, travelDate };
    console.log(tripParams);
  };

  return (
    <Button
      onClick={handleButtonClick}
      variant={'default'}
      className="mt-2 w-[240px] self-end xl:w-[180px] xl:justify-self-end"
    >
      Find Bus
    </Button>
  );
}
