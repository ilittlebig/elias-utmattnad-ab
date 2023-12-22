"use client"
import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import Image from 'next/image'

import MainProductImage from '@/components/product/productImage'
import ProductInformation from '@/components/product/productInformation/index'
import ProductImages from '@/components/product/productImages'

const ProductPage = () => {
  const [product, setProduct] = useState(null);
  const { productId, category } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`/products/${category}/${productId}/api`);
        if (!response.ok) {
          throw new Error("Failed to fetch product");
        }

        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchProduct();
  }, [productId]);

  return (
    <div className="flex flex-col justify-between lg:pt-12 h-full">
      <div className="flex lg:flex-row flex-col">
	<MainProductImage />
	<ProductInformation
	  product={product}
	/>
      </div>

      <div className="font-rockwell lg:text-left text-center text-3xl font-bold pt-12">
      	Fler Produktbilder
      </div>
      <ProductImages />
    </div>
  )
}

export default ProductPage;
