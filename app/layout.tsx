import type { Metadata } from 'next'
import Script from 'next/script'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Providers } from './providers'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Pink Panther Window Cleaning | Mississauga',
  description: 'Professional window cleaning, gutter cleaning, and home improvement services in Mississauga & GTA. Get a free quote today!',
  generator: 'v0.app',
  icons: {
    icon: '/pink-panther-icon.svg',
    apple: '/apple-icon.png',
  },
  openGraph: {
    title: 'Pink Panther Window Cleaning | Mississauga',
    description: 'Professional window cleaning & home services',
    images: [
      {
        url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pink-d700CpGuV8SmrdpRwR6Zxk3fANZ18a.jpg',
        width: 1200,
        height: 630,
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Comic+Neue:wght@400;700&family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className={`font-sans antialiased bg-white`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
