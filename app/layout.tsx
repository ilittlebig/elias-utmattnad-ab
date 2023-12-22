import type { Metadata } from 'next'
import './globals.css'

import Navbar from './components/navbar'
import Footer from './components/footer'

import { ToastProvider } from '@/contexts/toastContext'

export const metadata: Metadata = {
  title: 'Elias Utmattnad AB',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="lg:max-w-6xl mx-auto">
        <ToastProvider>
	  <Navbar />
	  <main>{children}</main>
	  <Footer />
	</ToastProvider>
      </body>
    </html>
  )
}
