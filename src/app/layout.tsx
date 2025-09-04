import type { Metadata } from 'next'
import { EB_Garamond } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'

const garamond = EB_Garamond({ 
  subsets: ['latin'],
  variable: '--font-garamond',
  display: 'swap',
  fallback: ['serif']
})

export const metadata: Metadata = {
  title: 'Nora Chambers - Leading Law Firm in India',
  description: 'Nora Chambers is a leading law firm in India providing expert legal services across various practice areas.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${garamond.variable} min-h-screen`} suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
            <Navigation />
            {children}
            <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}