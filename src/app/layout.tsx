import { Poppins } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import ThemeProvider from '@/components/ThemeProvider';
import Footer from '@/components/Footer';
import { Toaster } from '@/components/ui/toaster';
import GlobalContextProvider from '@/context/GlobalContext';

const poppins = Poppins({
  subsets: ['latin'],
  weight: '400',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={poppins.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <GlobalContextProvider>
            <Header />
            <div className="mt-12 min-h-screen">
              {children}
              <Toaster />
            </div>
            <Footer />
          </GlobalContextProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
