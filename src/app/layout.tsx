import { Poppins } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import ThemeProvider from '@/components/ThemeProvider'
import Footer from '@/components/Footer'
import { Toaster } from '@/components/ui/toaster'
import GlobalContextProvider from '@/context/GlobalContext'
import Providers from '@/context/Providers'

const poppins = Poppins({
  subsets: ['latin'],
  weight: '400',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={poppins.className}>
        <Providers>
          <Header />
          <div className="mt-12 min-h-screen">
            {children}
            <Toaster />
          </div>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
