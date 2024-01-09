import { Inter } from 'next/font/google'
import { CartProvider } from '@/contexts/cartContext'
import Navbar from '@/(marketplace)/components/navbar'
import Footer from '@/(marketplace)/components/footer'

const inter = Inter({ subsets: ['latin'] });

export default function Layout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <div className={`lg:max-w-6xl mx-auto lg:px-16 xl:px-0 ${inter.className}`}>
      <CartProvider>
	<Navbar />
	{children}
      </CartProvider>
      <Footer />
    </div>
  )
}
