import { Inter } from 'next/font/google'
import Sidebar from '@/dashboard/components/sidebar/sidebar'

const inter = Inter({ subsets: ['latin'] });

export default function Layout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <div className={`flex bg-[#F9FAFB] h-screen ${inter.className}`}>
      <Sidebar />
      {children}
    </div>
  )
}
