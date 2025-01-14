import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/header'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import EnquiryForm from '@/components/enquiry-form'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'BSR Forex Tours & Travels Pvt. Ltd.',
  description: 'RBI Approved Money Changer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <Navigation />
        <div className="flex flex-col lg:flex-row">
          <main className="flex-1">
            {children}
          </main>
        </div>
        <Footer />
      </body>
    </html>
  )
}

