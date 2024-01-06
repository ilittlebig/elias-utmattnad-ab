"use client"
import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import { useCategories, Category } from '@/hooks/categories'
import { useProducts, Product } from '@/hooks/products'
import { useCart } from '@/hooks/cart'
import { useToast } from '@/contexts/toastContext'
import { useNotification } from '@/contexts/notificationContext'

import MainProductImage from '@/(marketplace)/components/product/productImage'
import ProductInformation from '@/(marketplace)/components/product/productInformation/index'
import Breadcrumbs from '@/(marketplace)/components/product/breadcrumbs'
import Accordion from '@/(marketplace)/components/product/accordion'
import ProductImages from '@/(marketplace)/components/product/productImages'
import AcceptedPayments from '@/(marketplace)/components/acceptedPayments'
import Button from '@/components/button'

const ProductPage = () => {
  const [product, setProduct] = useState<Product | null>(null);
  const [categoryData, setCategoryData] = useState<Category | null>(null);
  const [currentCategory, setCurrentCategory] = useState<string>("");

  const { productId, category } = useParams();
  const { fetchCategory } = useCategories();
  const { fetchProduct } = useProducts();
  const { addToCart } = useCart();
  const { showToast } = useToast();
  const { showNotification } = useNotification();

  const handleAddToCart = (product: Product) => {
    if (product) {
      showToast({
	name: product.name,
	price: product.price,
	image: "/rug1.png"
      });
      addToCart(product);
    } else {
      showNotification({
	message: "Something went wrong. Please try again!",
	type: "error"
      });
    }
  };

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
    <div className="flex flex-col justify-between lg:py-6 h-full">
      <div className="flex lg:flex-row gap-x-6 flex-col">
        <div className="flex flex-col gap-y-3">
	  <Breadcrumbs
	    category={categoryData}
	    product={product}
	    currentCategory={currentCategory}
	  />

	  <div className="flex select-none">
	    <ProductImages />
	    <MainProductImage />
	  </div>
	</div>

	<div className="flex flex-col w-full gap-y-3 pt-7">
	  <ProductInformation
	    product={product}
	    category={categoryData}
	    currentCategory={currentCategory ?? ""}
	  />

	  <div className="px-4 py-3 lg:px-0">
	    <Button
	      actionText="Lägg Till"
	      onClick={() => handleAddToCart(product)}
	      fill
	    />
	  </div>

	  <div className="flex flex-col gap-y-4 w-full bg-gray-100 lg:rounded-lg px-6 py-6 lg:-mt-3 mt-0">
	    <label className="text-black text-lg font-medium">
	      Säker betalning genom
	    </label>
	    <AcceptedPayments />
	  </div>

	  <div className="flex flex-col gap-y-6 pb-6 pt-5 px-4 lg:px-0">
	    <Accordion
	      title="Produktbeskrivning"
	      content={product?.description}
	    />

	    <Accordion
	      title="Material"
	      content={product?.material}
	    />

	    <Accordion
	      title="Mått"
	      content={product?.dimensions}
	    />

	    <Accordion
	      title="Mer Info"
	      content={product?.moreInfo}
	    />
	  </div>
	</div>
      </div>
    </div>
  )
}

export default ProductPage;
