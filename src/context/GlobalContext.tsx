'use client';
import { Dispatch, ReactNode, SetStateAction, createContext, useEffect, useState } from 'react';

export type GlobalContext = {
  departure: string;
  setDeparture: Dispatch<SetStateAction<string>>;
  destination: string;
  setDestination: Dispatch<SetStateAction<string>>;
  travelDate: string;
  setTravelDate: Dispatch<SetStateAction<string>>;
};

export const GlobalContext = createContext<GlobalContext | null>(null);

export default function GlobalContextProvider({ children }: { children: ReactNode }) {
  const [departure, setDeparture] = useState('');
  const [destination, setDestination] = useState('');
  const [travelDate, setTravelDate] = useState('');

  const values = {
    departure,
    setDeparture,
    destination,
    setDestination,
    travelDate,
    setTravelDate,
  };

  return <GlobalContext.Provider value={values}>{children}</GlobalContext.Provider>;
}
