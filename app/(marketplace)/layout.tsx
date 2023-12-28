import Navbar from '@/(marketplace)/components/navbar'
import Footer from '@/(marketplace)/components/footer'

export default function Layout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <div className="lg:max-w-6xl mx-auto lg:px-16 xl:px-0">
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}
