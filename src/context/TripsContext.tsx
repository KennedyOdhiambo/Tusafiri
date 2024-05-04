'use client';
import { Dispatch, ReactNode, SetStateAction, createContext, useState } from 'react';

type TripsContext = {
  departure: string;
  setDeparture: Dispatch<SetStateAction<string>>;
  destination: string;
  setDestination: Dispatch<SetStateAction<string>>;
  travelDate: Date | undefined;
  setTravelDate: Dispatch<SetStateAction<Date | undefined>>;
};

export const TripsContext = createContext<TripsContext | null>(null);

export default function TripsContextProvider({ children }: { children: ReactNode }) {
  const [departure, setDeparture] = useState('');
  const [destination, setDestination] = useState('');
  const [travelDate, setTravelDate] = useState<Date>();

  const values = { departure, setDeparture, destination, setDestination, travelDate, setTravelDate };

  return <TripsContext.Provider value={values}>{children}</TripsContext.Provider>;
}
