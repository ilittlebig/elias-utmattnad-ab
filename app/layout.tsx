import type { Metadata } from 'next'
import './globals.css'

import { ToastProvider } from '@/contexts/toastContext'
import { NotificationProvider } from '@/contexts/notificationContext'

export const metadata: Metadata = {
  title: "Elias Mattor: Unika Handtuftade Designmattor",
  description: "Utforska våra unika handtuftade mattor, perfekta för varje hem. Stil, kvalitet och ett bidrag till diabetesforskning i varje köp.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
	<NotificationProvider>
	  <ToastProvider>
	    <main>{children}</main>
	  </ToastProvider>
	</NotificationProvider>
      </body>
    </html>
  )
}
