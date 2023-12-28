"use client"
import { useState } from 'react'
import { useProducts } from '@/hooks/products'
import { useNotification } from '@/contexts/notificationContext'
import useProductForm from '@/hooks/productForm'

import Button from '@/components/button'
import ProductForm from '@/dashboard/components/productForm'
import FormHeader from '@/dashboard/components/formHeader'

const NewProductPage = () => {
  const [isLoading, setLoading] = useState<boolean>(false);
  const { newProduct } = useProducts();
  const { productDetails, resetForm, handleFormChange, handleDropdownChange, isFormValid } = useProductForm();
  const { showNotification } = useNotification();

  const handleNewProduct = async () => {
    setLoading(true);
    try {
      await newProduct(productDetails);
      resetForm();

      showNotification({
	message: "Successfully created product",
	type: "success"
      });
    } catch (error: any) {
      const errorMessage = error instanceof Error ?
        error.message :
	"Unknown error";

      showNotification({
	message: errorMessage,
	type: "error"
      });
    }
    setLoading(false);
  }

  return (
    <div className="flex flex-col w-full">
      <div className="flex p-12 bg-white border h-32 w-full">
        <FormHeader
	  title="Lägg Till Produkt"
	  buttonText="Lägg Till"
	  buttonDisabled={!isFormValid}
	  isLoading={isLoading}
	  onClick={handleNewProduct}
	/>
      </div>

      <div className="flex flex-col gap-y-4 p-12">
	<div>
	  <ProductForm
	    onFormChange={handleFormChange}
	    onDropdownChange={handleDropdownChange}
	    productDetails={productDetails}
	  />
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
	      actionText="Lägg Till"
	      className="text-lg px-6 py-3"
	      disabled={!isFormValid}
	      isLoading={isLoading}
	      onClick={handleNewProduct}
	    />
	  </div>
	</div>
      </div>
    </div>
  )
}

export default NewProductPage;
