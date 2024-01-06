"use client"
import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import { useProducts, Product } from '@/hooks/products'

import Link from 'next/link'
import ProductCard from './productCard'
import Dropdown from '@/components/dropdown'
import Categories from '@/(marketplace)/components/categories/index'

const ProductsContainer = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setLoading] = useState<boolean>(true);
  const { category } = useParams();
  const { fetchProducts } = useProducts();

  useEffect(() => {
    const categoryValue = Array.isArray(category) ? category[0] : category;
    if (categoryValue) {
      fetchProducts(categoryValue, setLoading, setProducts);
    }
  }, [category]);

  return (
    <div className="flex flex-col gap-y-4 pb-12 pt-4 h-full">
      <div className="flex lg:flex-row flex-col justify-between lg:items-center">
	<div className="flex justify-center">
	  <Categories />
	</div>

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

      <div className="flex flex-wrap gap-2 lg:gap-2 w-full h-full px-2 lg:px-0">
      	{isLoading ? (
	  <>
	    {[...Array(14)].map((_, index) => (
	      <div key={index} className="animate-pulse bg-gray-200 lg:w-[282px] lg:h-[350px]">
	      </div>
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
		rating={product.rating}
		imagePath="/rug1.png"
	      />
	    </Link>
	  ))
	)}
      </div>
    </div>
  )
}

export default ProductsContainer;
