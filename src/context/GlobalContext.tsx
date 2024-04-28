'use client';
import { Dispatch, ReactNode, SetStateAction, createContext, useEffect, useState } from 'react';

type User = { userId: string; name: string; contact: string; role: 'admin' | 'customer' | null };
export type GlobalContext = {
  user: User | null;
  setUser: Dispatch<SetStateAction<User | null>>;
  isLoggedIn: boolean;
  setIsLoggedIn: Dispatch<SetStateAction<boolean>>;
  resetUserState: () => void;
};

export const GlobalContext = createContext<GlobalContext | null>(null);

export default function GlobalContextProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(() => {
    const storedUser = localStorage.getItem('user');
    return storedUser ? JSON.parse(storedUser) : null;
  });
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(() => {
    const storedState = localStorage.getItem('userState');
    return storedState ? JSON.parse(storedState) : null;
  });

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('userState', JSON.stringify(isLoggedIn));
  }, [user, isLoggedIn]);

  const resetUserState = () => {
    setUser(null);
    setIsLoggedIn(false);
  };

  const values = { user, setUser, isLoggedIn, setIsLoggedIn, resetUserState };

  return <GlobalContext.Provider value={values}>{children}</GlobalContext.Provider>;
}
