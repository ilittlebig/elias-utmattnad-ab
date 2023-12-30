"use client"
import { useState, useEffect, useMemo } from 'react'
import { useSearchParams } from 'next/navigation'
import { useProductsContext } from '@/contexts/productsContext'
import { Product, useProducts } from '@/hooks/products'
import { useNotification } from '@/contexts/notificationContext'
import useProductForm from '@/hooks/productForm'

import FormActionButtons from '@/dashboard/components/formActionButtons'
import ProductForm from '@/dashboard/components/products/productForm'
import FormHeader from '@/dashboard/components/formHeader'

const EditProductPage = () => {
  const [isLoading, setLoading] = useState<boolean>(true);
  const [isSaving, setSaving] = useState<boolean>(false);
  const [product, setProduct] = useState<Product | null>(null);
  const { fetchProduct, updateProduct } = useProducts();
  const { updateProductInList } = useProductsContext();
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
      const response = await updateProduct(productId, productDetails);
      updateProductInList(response.updatedProduct);
      resetIsChanged();

      showNotification({
	message: response.message,
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
	  <FormActionButtons
	    buttonText="Spara Ändringar"
	    href="/dashboard/products"
	    disabled={!isFormValid || !isChanged}
	    isLoading={isSaving}
	    onClick={handleUpdateProduct}
	  />
	</div>
      </div>
    </div>
  )
}

export default EditProductPage;
