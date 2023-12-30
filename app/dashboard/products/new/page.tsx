"use client"
import { useState } from 'react'
import { useProducts } from '@/hooks/products'
import { useNotification } from '@/contexts/notificationContext'
import { useProductsContext } from '@/contexts/productsContext'
import useProductForm from '@/hooks/productForm'

import FormActionButtons from '@/dashboard/components/formActionButtons'
import ProductForm from '@/dashboard/components/products/productForm'
import FormHeader from '@/dashboard/components/formHeader'

const NewProductPage = () => {
  const [isLoading, setLoading] = useState<boolean>(false);
  const { newProduct } = useProducts();
  const { showNotification } = useNotification();
  const { addProductToList } = useProductsContext();

  const {
    productDetails,
    resetForm,
    handleFormChange,
    handleDropdownChange,
    isFormValid
  } = useProductForm();

  const handleNewProduct = async () => {
    setLoading(true);
    try {
      const response = await newProduct(productDetails);
      addProductToList(response.product);
      resetForm();

      showNotification({
	message: response.message,
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
	  href="/dashboard/products"
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
	  <FormActionButtons
	    buttonText="Lägg Till"
	    href="/dashboard/products"
	    disabled={!isFormValid}
	    isLoading={isLoading}
	    onClick={handleNewProduct}
	  />
	</div>
      </div>
    </div>
  )
}

export default NewProductPage;
