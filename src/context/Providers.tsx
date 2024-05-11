'use client'

import { ReactNode } from 'react'
import AuthContextProvider from './AuthContext'
import GlobalContextProvider from './GlobalContext'
import TripsContextProvider from './TripsContext'
import ThemeProvider from '@/components/ThemeProvider'
import { TRPCReactProvider } from '@/trpc/react'

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      <TRPCReactProvider>
        <GlobalContextProvider>
          <AuthContextProvider>
            <TripsContextProvider>{children}</TripsContextProvider>
          </AuthContextProvider>
        </GlobalContextProvider>
      </TRPCReactProvider>
    </ThemeProvider>
  )
}
