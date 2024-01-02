"use client"
import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import { useCategories } from '@/hooks/categories'
import { useProducts } from '@/hooks/products'

import Link from 'next/link'
import ProductCard from './productCard'

const ProductsContainer = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setLoading] = useState<boolean>(true);
  const [categoryData, setCategoryData] = useState<string>(null);

  const { category } = useParams();
  const { fetchCategory } = useCategories();
  const { fetchProducts } = useProducts();

  useEffect(() => {
    fetchProducts(category, setLoading, setProducts);
    fetchCategory(category, setCategoryData);
  }, [category]);

  return (
    <div className="flex flex-col gap-y-3">
      <h1 className="text-4xl font-bold px-6 lg:px-0">
        {categoryData ? categoryData.name : ""}
      </h1>
      <div className="flex flex-wrap lg:gap-2 justify-between lg:justify-start w-full h-full">
      	{isLoading ? (
	  <div></div>
	) : (
	  products.map((product, index) => (
	    <Link
	      key={product._id}
	      href={`/products/${category}/${encodeURIComponent(product._id)}`}
	    >
	      <ProductCard
		productName={product.name}
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
