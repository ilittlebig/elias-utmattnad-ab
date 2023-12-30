import { Inter } from 'next/font/google'
import { DeletionDialogProvider } from '@/contexts/deletionContext'
import { ProductsProvider } from '@/contexts/productsContext'
import { CategoriesProvider } from '@/contexts/categoriesContext'
import Sidebar from '@/dashboard/components/sidebar/sidebar'

const inter = Inter({ subsets: ['latin'] });

export default function Layout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <div className={`flex bg-[#F9FAFB] h-screen ${inter.className}`}>
      <CategoriesProvider>
	<ProductsProvider>
	  <DeletionDialogProvider>
	    <Sidebar />
	    {children}
	  </DeletionDialogProvider>
	</ProductsProvider>
      </CategoriesProvider>
    </div>
  )
}
