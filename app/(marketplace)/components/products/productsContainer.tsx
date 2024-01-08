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
	    <div
	      key={index}
	      className="animate-pulse bg-gray-200 w-[299px] h-[349px]"
	    />
	  ))}
	</>
      ) : (
	products.map((product, index) => (
	  <Link
	    key={product._id}
	    href={`/products/${category}/${encodeURIComponent(product._id)}`}
	  >
	    <ProductCard
	      name={product.name}
	      price={product.price}
	      dimensions={product.dimensions}
	    />
	  </Link>
	))
      )}
    </div>
  )
}

export default ProductsContainer;
