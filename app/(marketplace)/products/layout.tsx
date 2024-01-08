import { ProductsProvider } from '@/contexts/productsContext'

export default function Layout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <ProductsProvider>
      {children}
    </ProductsProvider>
  )
}
