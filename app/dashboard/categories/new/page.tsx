"use client"
import { useState } from 'react'
import { useCategories } from '@/hooks/categories'
import { useNotification } from '@/contexts/notificationContext'
import { useCategoriesContext } from '@/contexts/categoriesContext'
import useCategoryForm from '@/hooks/categoryForm'

import FormActionButtons from '@/dashboard/components/formActionButtons'
import CategoryForm from '@/dashboard/components/categories/categoryForm'
import FormHeader from '@/dashboard/components/formHeader'

const NewCategoryPage = () => {
  const [isLoading, setLoading] = useState<boolean>(false);
  const { newCategory } = useCategories();
  const { showNotification } = useNotification();
  const { addCategoryToList } = useCategoriesContext();

  const {
    formDetails,
    resetForm,
    handleFormChange,
    handleDropdownChange,
    isFormValid
  } = useCategoryForm();

  const handleNewCategory = async () => {
    setLoading(true);

    const response = await newCategory(formDetails);
    if (response.success) {
      addCategoryToList(response.item)
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
	    categoryDetails={formDetails}
	  />
	</div>

	<div className="flex w-full justify-end">
	  <FormActionButtons
	    buttonText="Lägg Till"
	    href="/dashboard/categories"
	    disabled={!isFormValid}
	    isLoading={isLoading}
	    onClick={handleNewCategory}
	  />
	</div>
      </div>
    </div>
  )
}

export default NewCategoryPage;
