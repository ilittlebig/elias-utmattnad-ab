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
    formDetails,
    resetForm,
    handleFormChange,
    handleDropdownChange,
    isFormValid
  } = useProductForm();

  const handleNewProduct = async () => {
    setLoading(true);

    const response = await newProduct(formDetails);
    if (response.success && response.item) {
      addProductToList(response.item);
      resetForm();
    }

    showNotification({
      message: response.message,
      type: response.success ? "success" : "error"
    });
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
//	    onFormChange={handleFormChange}
//	    onDropdownChange={handleDropdownChange}
	    productDetails={formDetails}
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
