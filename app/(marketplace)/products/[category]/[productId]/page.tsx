"use client"
import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import { useCategories, Category } from '@/hooks/categories'
import { useProducts, Product } from '@/hooks/products'
import { useCartContext } from '@/contexts/cartContext'

import ProductImage from '@/(marketplace)/components/product/productImage'
import ProductInformation from '@/(marketplace)/components/product/productInformation'
import Breadcrumbs from '@/(marketplace)/components/product/breadcrumbs'
import ProductPerks from '@/(marketplace)/components/product/productPerks'
import Accordion from '@/(marketplace)/components/product/accordion'
import AcceptedPayments from '@/(marketplace)/components/acceptedPayments'
import Button from '@/components/button'

const ProductPage = () => {
  const [product, setProduct] = useState<Product | null>(null);
  const [categoryData, setCategoryData] = useState<Category | null>(null);
  const [currentCategory, setCurrentCategory] = useState<string>("");

  const { productId, category } = useParams();
  const { fetchCategory } = useCategories();
  const { fetchProduct } = useProducts();
  const { handleAddToCart } = useCartContext();

  useEffect(() => {
    if (!product) return;
    setCurrentCategory(product.category)
  }, [product])

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
    <div className="flex flex-col justify-between lg:pb-6 h-full">
      <div className="flex lg:flex-row gap-x-6 flex-col">
        <div className="flex flex-wrap gap-2 h-full">
	  {[...Array(5)].map((_, index) => (
	    <ProductImage
	      key={index}
	      src="/ProductImage1.png"
	    />
	  ))}
	</div>

	<div className="flex flex-col max-w-[420px] min-w-[420px] gap-y-1">
	  <Breadcrumbs
	    category={categoryData}
	    product={product}
	    currentCategory={currentCategory}
	  />

	  <div className="flex flex-col gap-y-5">
	    <ProductInformation
	      product={product}
	    />

	    <div className="flex flex-col gap-y-2">
	      <div className="px-4 py-3 lg:px-0">
		<Button
		  actionText="Lägg Till"
		  onClick={() => handleAddToCart(product)}
		  fill
		/>
	      </div>
	      <ProductPerks />
	    </div>

	    <div className="flex flex-col gap-y-4 w-full bg-gray-100 lg:rounded-md px-4 py-4">
	      <label className="text-black text-md font-medium">
		Säker betalning genom
	      </label>
	      <AcceptedPayments />
	    </div>

	    <div className="flex flex-col gap-y-6 pb-6 pt-3 px-4 lg:px-0">
	      <Accordion
		title="Produktbeskrivning"
		content={product?.description || ""}
	      />

	      <Accordion
		title="Material"
		content={product?.material || ""}
	      />

	      <Accordion
		title="Mått"
		content={product?.dimensions || ""}
	      />

	      <Accordion
		title="Mer Info"
		content={product?.moreInfo || ""}
	      />
	    </div>
	  </div>
	</div>
      </div>
    </div>
  )
}

export default ProductPage;
