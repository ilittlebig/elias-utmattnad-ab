"use client"
import { useState, useEffect } from 'react'
import { useProductsContext } from '@/contexts/productsContext'
import ProductsHeader from '@/dashboard/components/products/productsHeader'
import ProductEntry from '@/dashboard/components/products/productEntry'

const ProductsList = () => {
  const { products, isLoading } = useProductsContext();

  return (
    <div className="flex flex-col w-full overflow-auto">
      <ProductsHeader />

      <div className="flex flex-col py-2">
      	{isLoading ? (
	  <div></div>
	) : (
	  products.map((product, index) => (
	    <ProductEntry
	      key={index}
	      id={product._id}
	      name={product.name}
	      description={product.description}
	      category={product.category}
	      inventory={product.inventory}
	    />
	  ))
	)}
      </div>
    </div>
  );
};

export default ProductsList;
