"use client"
import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'

import ProductCard from './productCard'

const ProductsContainer = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [categoryLabel, setCategoryLabel] = useState(null);
  const { category } = useParams();

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(`
        /products/api?collection=products&category=${encodeURIComponent(category)}
      `);

      const data = await response.json();
      setLoading(false);
      setProducts(data);
    };

    const fetchCategory = async () => {
      if (category == "all") {
	setCategoryLabel("Alla Produkter");
      } else {
	const response = await fetch(`
	  /products/${category}/api?category=${encodeURIComponent(category)}
	`);

	const data = await response.json();
	setCategoryLabel(data[0].name);
      }
    };

    fetchProducts();
    fetchCategory();
  }, [category]);

  return (
    <div className="flex flex-col gap-y-3">
      <h1 className="text-4xl font-bold font-rockwell px-6 lg:px-0">{categoryLabel}</h1>
      <div className="flex flex-wrap lg:gap-6 justify-between lg:justify-start w-full h-full">
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
