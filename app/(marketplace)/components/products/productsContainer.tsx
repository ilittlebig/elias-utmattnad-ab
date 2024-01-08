"use client"
import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import { useProductsContext } from '@/contexts/productsContext'

import Link from 'next/link'
import ProductCard from './productCard'

const ProductsContainer = () => {
  const { products, setCategory, isLoading } = useProductsContext();
  const { category } = useParams();

  useEffect(() => {
    const categoryValue = Array.isArray(category) ? category[0] : category;
    if (categoryValue) {
      setCategory(categoryValue);
    }
  }, [category]);

  return (
    <div className="flex flex-wrap gap-5 w-full h-full px-2 lg:px-0">
      {isLoading ? (
	<>
	  {[...Array(14)].map((_, index) => (
	    <div key={index} className="flex flex-col gap-y-4 animate-pulse">
	      <div className="bg-gray-200 w-[299px] h-[297px]" />
	      <div className="flex flex-col gap-y-1">
		<div className="flex justify-between">
		  <div className="bg-gray-200 rounded-full w-1/2 h-5" />
		  <div className="bg-gray-200 rounded-full w-16 h-5" />
		</div>
		<div className="bg-gray-200 rounded-full w-1/3 h-3" />
	      </div>
	    </div>
	  ))}
	</>
      ) : (
	products.map((product, index) => (
	  <Link
	    key={product._id}
	    href={`/products/${category}/${encodeURIComponent(product._id)}`}
	  >
	    <ProductCard product={product} />
	  </Link>
	))
      )}
    </div>
  )
}

export default ProductsContainer;
