"use client"
import { useState, useEffect, useMemo } from 'react'
import { useSearchParams } from 'next/navigation'
import { Product, useProducts } from '@/hooks/products'
import { useNotification } from '@/contexts/notificationContext'
import useProductForm from '@/hooks/productForm'

import Button from '@/components/button'
import ProductForm from '@/dashboard/components/products/productForm'
import FormHeader from '@/dashboard/components/formHeader'

const EditProductPage = () => {
  const [isLoading, setLoading] = useState<boolean>(true);
  const [isSaving, setSaving] = useState<boolean>(false);
  const [product, setProduct] = useState<Product | null>(null);
  const { fetchProduct, updateProduct } = useProducts();
  const { showNotification } = useNotification();

  const searchParams = useSearchParams();
  const productId = searchParams.get("id");

  useEffect(() => {
    if (!productId) return;
    fetchProduct("all", productId, setProduct, setLoading);
  }, [productId]);

  const formInitialState = useMemo(() => product || null, [product]);
  const {
    productDetails,
    resetIsChanged,
    handleFormChange,
    handleDropdownChange,
    isFormValid,
    isChanged
  } = useProductForm(formInitialState);

  const handleUpdateProduct = async () => {
    setSaving(true);
    try {
      const updatedProduct = await updateProduct(productId, productDetails);
      setProduct(updatedProduct);
      resetIsChanged();

      showNotification({
	message: "Successfully updated product",
	type: "success"
      });
    } catch (error) {
      const errorMessage = error instanceof Error ?
        error.message :
	"Unknown error";

      showNotification({
	message: errorMessage,
	type: "error"
      });
    }
    setSaving(false);
  }

  return (
    <div className="flex flex-col w-full">
      <div className="flex p-12 bg-white border h-32 w-full">
        <FormHeader
	  title="Redigera Produkt"
	  buttonText="Spara Ändringar"
	  buttonDisabled={!isFormValid || !isChanged}
	  href="/dashboard/products"
	  isLoading={isSaving}
	  onClick={handleUpdateProduct}
	/>
      </div>

      <div className="flex flex-col gap-y-4 p-12">
	<div>
	  {isLoading ? (
	    <div></div>
	  ) : (
	    <ProductForm
	      onFormChange={handleFormChange}
	      onDropdownChange={handleDropdownChange}
	      productDetails={productDetails || {}}
	    />
	  )}
	</div>

	<div className="flex w-full justify-end">
	  <div className="flex gap-x-2">
	    <Button
	      actionText="Avbryt"
	      className="text-lg px-6 py-3"
	      href="/dashboard/products"
	      noBackground
	    />

	    <Button
	      actionText="Spara Ändringar"
	      className="text-lg px-6 py-3"
	      disabled={!isFormValid || !isChanged}
	      isLoading={isSaving}
	      onClick={handleUpdateProduct}
	    />
	  </div>
	</div>
      </div>
    </div>
  )
}

export default EditProductPage;
