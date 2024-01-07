"use client"
import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import { useCategories, Category } from '@/hooks/categories'
import Image from 'next/image'

import Button from '@/components/button'
import Dropdown from '@/components/dropdown'
import Categories from '@/(marketplace)/components/categories/index'
import ProductsContainer from '@/(marketplace)/components/products/productsContainer'

const ProductsPage = () => {
  const [categoryData, setCategoryData] = useState<Category | null>(null);
  const { fetchCategory } = useCategories();
  const { category } = useParams();

  useEffect(() => {
    const categoryValue = Array.isArray(category) ? category[0] : category;
    if (categoryValue) {
      fetchCategory(categoryValue, setCategoryData);
    }
  }, [category]);

  return (
    <div className="flex">
      <Categories />
      <div className="flex flex-col gap-y-4">
	{categoryData ? (
	  <div className="flex justify-between">
	    <h1 className="text-3xl font-medium text-black">
	      {categoryData.name}
	    </h1>

	    <div className="flex gap-x-3 items-center">
	      <label className="text-sm flex-shrink-0 text-black">
		31 produkter sorterade
	      </label>

	      <Dropdown
		label="Mest Populär"
		children={[]}
	      />
	    </div>
	  </div>
	) : (
	  <div className="animate-pulse flex flex-col items-center gap-y-2 w-[600px]">
	    <div className="w-64 h-6 bg-gray-200 rounded-full" />
	    {[...Array(3)].map((_, index) => (
	      <div key={index} className="w-full h-4 bg-gray-200 rounded-full" />
	    ))}
	  </div>
	)}
	<ProductsContainer />
      </div>
    </div>
  )
}

export default ProductsPage;
