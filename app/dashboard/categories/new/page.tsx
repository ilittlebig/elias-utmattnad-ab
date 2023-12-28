"use client"
import { useState } from 'react'
import { useCategories } from '@/hooks/categories'
import { useNotification } from '@/contexts/notificationContext'
import useCategoryForm from '@/hooks/categoryForm'

import Button from '@/components/button'
import CategoryForm from '@/dashboard/components/categories/categoryForm'
import FormHeader from '@/dashboard/components/formHeader'

const NewCategoryPage = () => {
  const [isLoading, setLoading] = useState<boolean>(false);
  const { newCategory } = useCategories();
  const { categoryDetails, resetForm, handleFormChange, handleDropdownChange, isFormValid } = useCategoryForm();
  const { showNotification } = useNotification();

  const handleNewCategory = async () => {
    setLoading(true);
    try {
      await newCategory(categoryDetails);
      resetForm();

      showNotification({
	message: "Successfully created category",
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
	  title="Lägg Till Kategori"
	  buttonText="Lägg Till"
	  buttonDisabled={!isFormValid}
	  href="/dashboard/categories"
	  isLoading={isLoading}
	  onClick={handleNewCategory}
	/>
      </div>

      <div className="flex flex-col gap-y-4 p-12">
	<div>
	  <CategoryForm
	    onFormChange={handleFormChange}
	    onDropdownChange={handleDropdownChange}
	    categoryDetails={categoryDetails}
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
	      onClick={handleNewCategory}
	    />
	  </div>
	</div>
      </div>
    </div>
  )
}

export default NewCategoryPage;
