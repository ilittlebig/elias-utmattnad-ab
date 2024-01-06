"use client"
import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import { useCategories, Category } from '@/hooks/categories'
import Image from 'next/image'

import ProductsContainer from '@/(marketplace)/components/products/productsContainer'
import Button from '@/components/button'

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
    <div>
      <div className="h-[250px] lg:h-[300px]">
	<div className="absolute bg-[#F7F7F7] left-0 w-screen h-[250px] lg:h-[300px]">
	  <div className="flex flex-col items-center gap-y-3 justify-center mx-auto z-10 h-full">
	    {categoryData ? (
	      <>
		<h1 className="text-4xl font-rockwell font-bold text-black text-center">
		  {categoryData.name}
		</h1>

		<p className="text-lg max-w-2xl text-black text-center">
		  {categoryData.description}
		</p>
	      </>
	    ) : (
	      <div className="animate-pulse flex flex-col items-center gap-y-2 w-[600px]">
		<div className="w-64 h-6 bg-gray-200 rounded-full" />
		{[...Array(3)].map((_, index) => (
		  <div key={index} className="w-full h-4 bg-gray-200 rounded-full" />
		))}
	      </div>
	    )}
	  </div>
	</div>
      </div>

      <ProductsContainer />
    </div>
  )
}

export default ProductsPage;
