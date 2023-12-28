"use client"
import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import { useCategories } from '@/hooks/categories'
import { useProducts } from '@/hooks/products'

import Image from 'next/image'
import Link from 'next/link'

import MainProductImage from '@/(marketplace)/components/product/productImage'
import ProductInformation from '@/(marketplace)/components/product/productInformation/index'
import ProductImages from '@/(marketplace)/components/product/productImages'

const ProductPage = () => {
  const [product, setProduct] = useState(null);
  const [categoryLabel, setCategoryLabel] = useState(null);
  const { productId, category } = useParams();
  const { fetchCategory } = useCategories();
  const { fetchProduct } = useProducts();

  const currentCategory = product ? product.category : "";

  useEffect(() => {
    if (!currentCategory) return;
    fetchCategory(currentCategory, setCategoryLabel);
  }, [currentCategory]);

  useEffect(() => {
    fetchProduct(category, productId, null, setProduct);
  }, [productId]);

  return (
    <div className="flex flex-col justify-between lg:pt-12 h-full">
      <div className="flex flex-col lg:gap-y-12">
	<div className="justify-center gap-x-2 px-4 py-2 hidden lg:flex font-rockwell">
	  <Link href="/products/all" className="text-lg hover:underline">
	    Produkter
	  </Link>
	  <div className="text-lg">/</div>
	  <Link href={`/products/${currentCategory}`} className="text-lg hover:underline">
	    {categoryLabel}
	  </Link>
	  <div className="text-lg">/</div>
	  <Link href={`/products/${currentCategory}/${productId}`} className="text-lg text-primary hover:underline">
	    {product ? product.name : ""}
	  </Link>
	</div>

	<div className="flex lg:flex-row flex-col">
	  <MainProductImage />
	  <ProductInformation
	    product={product}
	  />
	</div>
      </div>

      <div className="font-rockwell lg:text-left text-center text-3xl font-bold pt-12">
      	Fler Produktbilder
      </div>
      <ProductImages />
    </div>
  )
}

export default ProductPage;
