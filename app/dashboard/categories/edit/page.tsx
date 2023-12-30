"use client"
import { useState, useEffect, useMemo } from 'react'
import { useSearchParams } from 'next/navigation'
import { Category, useCategories } from '@/hooks/categories'
import { useCategoriesContext } from '@/contexts/categoriesContext'
import { useNotification } from '@/contexts/notificationContext'
import useCategoryForm from '@/hooks/categoryForm'

import FormActionButtons from '@/dashboard/components/formActionButtons'
import CategoryForm from '@/dashboard/components/categories/categoryForm'
import FormHeader from '@/dashboard/components/formHeader'

const EditCategoryPage = () => {
  const [isLoading, setLoading] = useState<boolean>(true);
  const [isSaving, setSaving] = useState<boolean>(false);
  const [category, setCategory] = useState<Category | null>(null);
  const { fetchCategoryFromId, updateCategory } = useCategories();
  const { updateCategoryInList } = useCategoriesContext();
  const { showNotification } = useNotification();

  const searchParams = useSearchParams();
  const categoryId = searchParams.get("id");

  useEffect(() => {
    if (!categoryId) return;
    fetchCategoryFromId(categoryId, setCategory, setLoading);
  }, [categoryId]);

  const formInitialState = useMemo(() => category || null, [category]);
  const {
    categoryDetails,
    resetIsChanged,
    handleFormChange,
    isFormValid,
    isChanged
  } = useCategoryForm(formInitialState);

  const handleUpdateCategory = async () => {
    setSaving(true);
    try {
      const response = await updateCategory(categoryId, categoryDetails);
      updateCategoryInList(response.updatedCategory);
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
	  title="Redigera Kategori"
	  buttonText="Spara Ändringar"
	  buttonDisabled={!isFormValid || !isChanged}
	  href="/dashboard/categories"
	  isLoading={isSaving}
	  onClick={handleUpdateCategory}
	/>
      </div>

      <div className="flex flex-col gap-y-4 p-12">
	<div>
	  {isLoading ? (
	    <div></div>
	  ) : (
	    <CategoryForm
	      onFormChange={handleFormChange}
	      categoryDetails={categoryDetails || {}}
	    />
	  )}
	</div>

	<div className="flex w-full justify-end">
	  <FormActionButtons
	    buttonText="Spara Ändringar"
	    href="/dashboard/categories"
	    disabled={!isFormValid || !isChanged}
	    isLoading={isSaving}
	    onClick={handleUpdateCategory}
	  />
	</div>
      </div>
    </div>
  )
}

export default EditCategoryPage;
