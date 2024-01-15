import { Manrope } from 'next/font/google'
import { CartProvider } from '@/contexts/cartContext'
import Navbar from '@/(marketplace)/components/navbar'
import Footer from '@/(marketplace)/components/footer'

const manrope = Manrope({ subsets: ['latin'] });

export default function Layout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <CartProvider>
      <Navbar />
      <div className="overflow-x-hidden">
	<div className={`lg:max-w-6xl mx-auto lg:px-16 xl:px-0 ${manrope.className}`}>
	  {children}
	  <Footer />
	</div>
      </div>
    </CartProvider>
  )
}
