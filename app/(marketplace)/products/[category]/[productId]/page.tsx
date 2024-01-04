"use client"
import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import { useCategories, Category } from '@/hooks/categories'
import { useProducts, Product } from '@/hooks/products'

import Image from 'next/image'
import Link from 'next/link'

import MainProductImage from '@/(marketplace)/components/product/productImage'
import ProductInformation from '@/(marketplace)/components/product/productInformation/index'
import ProductImages from '@/(marketplace)/components/product/productImages'
import AcceptedPayments from '@/(marketplace)/components/acceptedPayments'

const ProductPage = () => {
  const [product, setProduct] = useState<Product | null>(null);
  const [categoryData, setCategoryData] = useState<Category | null>(null);
  const { productId, category } = useParams();
  const { fetchCategory } = useCategories();
  const { fetchProduct } = useProducts();

  const currentCategory = product ? product.category : "";

  useEffect(() => {
    if (!currentCategory) return;
    fetchCategory(currentCategory, setCategoryData);
  }, [currentCategory]);

  useEffect(() => {
    const categoryValue = Array.isArray(category) ? category[0] : category;
    const productIdValue = Array.isArray(productId) ? productId[0] : productId;

    if (categoryValue && productIdValue) {
      fetchProduct(categoryValue, productIdValue, setProduct);
    }
  }, [productId]);

  return (
    <div className="flex flex-col justify-between lg:pt-6 h-full">
      <div className="flex flex-col lg:gap-y-12">
	<div className="justify-center gap-x-2 px-4 py-2 font-medium hidden lg:flex">
	  <Link href="/products/all" className="text-lg hover:underline">
	    Produkter
	  </Link>
	  <div className="text-lg">/</div>
	  <Link href={`/products/${currentCategory}`} className="text-lg hover:underline">
	    {categoryData ? categoryData.name : ""}
	  </Link>
	  <div className="text-lg">/</div>
	  <Link href={`/products/${currentCategory}/${productId}`} className="text-lg text-primary hover:underline">
	    {product ? product.name : ""}
	  </Link>
	</div>

	<div className="flex lg:flex-row flex-col">
	  <MainProductImage />
	  <div className="flex flex-col w-full">
	    <ProductInformation
	      product={product}
	    />

	    <div className="flex flex-col gap-y-4 w-full bg-gray-100 rounded-lg px-6 py-6">
	      <label className="text-black text-lg font-medium">
	        Godkända Betalningssätt
    	      </label>
	      <AcceptedPayments />
	    </div>
	  </div>
	</div>
      </div>

      <div className="lg:text-left text-center text-3xl font-bold pt-12">
      	Fler Produktbilder
      </div>
      <ProductImages />
    </div>
  )
}

export default ProductPage;
