"use client"
import { useState, useEffect } from 'react'
import { useProducts } from '@/hooks/products'
import ProductsHeader from '@/dashboard/components/products/header'
import ProductEntry from '@/dashboard/components/products/productEntry'

const ProductsList = () => {
  const [isLoading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const { fetchProducts } = useProducts();

  useEffect(() => {
    fetchProducts("all", setLoading, setProducts);
  }, []);

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
