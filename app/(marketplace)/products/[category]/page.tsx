"use client"
import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import { useCategories, Category } from '@/hooks/categories'
import Image from 'next/image'

import Button from '@/components/button'
import Dropdown from '@/components/dropdown'
import SearchBar from '@/components/searchBar'
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
    <div className="flex flex-col">
      <div className="lg:h-[250px] h-[200px]">
	<div className="absolute bg-[#F7F7F7] left-0 w-full lg:h-[250px] h-[200px]">
	  <div className="flex flex-col items-center gap-y-3 justify-center mx-auto z-10 h-full">
	    {categoryData ? (
	      <h1 className="lg:text-h1 text-h1-small text-black text-center font-semibold">
		{categoryData.name}
	      </h1>
	    ) : (
	      <div className="animate-pulse flex flex-col items-center gap-y-2 w-[600px]">
		<div className="w-64 h-7 bg-gray-200 rounded-full" />
	      </div>
	    )}
	  </div>
	</div>
      </div>

      <div className="flex pt-4 pb-[70px] px-4 lg:px-0">
	<Categories />
	<div className="flex flex-col gap-y-4 w-full">
	  <div className="flex lg:justify-between gap-x-6">
	    <SearchBar />

	    <div className="flex gap-x-3 items-center w-1/2 lg:w-auto">
	      <label className="text-xs flex-shrink-0 text-black text-opacity-60 font-semibold lg:block hidden">
		31 produkter sorterade
	      </label>

	      <Dropdown
		label="Mest Populär"
		children={[]}
	      />
	    </div>
	  </div>
	  <ProductsContainer />
	</div>
      </div>
    </div>
  )
}

export default ProductsPage;
