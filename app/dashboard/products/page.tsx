"use client"
import { useEffect, useState } from 'react'
import { useProductsContext } from '@/contexts/productsContext'
import currencyFormatter from '@/utils/currencyFormatter'

import Button from '@/components/button'
import StatisticWidget from '@/dashboard/components/statisticWidget'
import ProductsList from '@/dashboard/components/products/productsList'

const DashboardProductsPage = () => {
  const [productCount, setProductCount] = useState<number>(0);
  const { products } = useProductsContext();

  useEffect(() => {
    setProductCount(products.length);
  }, [products]);

  return (
    <div className="flex flex-col w-full p-12 gap-y-6">
      <div className="flex items-center w-full justify-between">
	<h1 className="text-3xl font-bold">
	  Produkter
	</h1>

	<Button
	  actionText="Lägg Till"
	  className="text-lg px-6 py-3"
	  href="/dashboard/products/new"
	/>
      </div>

      <div className="flex justify-between">
        <StatisticWidget
	  title="Antal Produkter"
	  value={productCount}
	/>

        <StatisticWidget
	  title="Sålda Produkter"
	  value={0}
	/>

        <StatisticWidget
	  title="Total Försäljning"
	  value={currencyFormatter(0, "SEK")}
	/>

        <StatisticWidget
	  title="Returnerade Produkter"
	  value={0}
	/>
      </div>

      <div className="flex flex-col pt-3">
        <label className="font-bold text-2xl">Alla Produkter</label>
        <label className="text-xl font-medium text-gray-600">Du tittar på alla produkter</label>
      </div>

      <ProductsList />
    </div>
  )
}

export default DashboardProductsPage;
