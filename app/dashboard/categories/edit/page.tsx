"use client"
import { useState, useEffect, useMemo } from 'react'
import { useSearchParams } from 'next/navigation'
import { Category, useCategories } from '@/hooks/categories'
import { useCategoriesContext } from '@/contexts/categoriesContext'
import { useNotification } from '@/contexts/notificationContext'
import useCategoryForm, { CategoryDetails } from '@/hooks/categoryForm'

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

  const defaultCategoryDetails: CategoryDetails = {
    name: "", href: "", description: ""
  };
  const formInitialState = useMemo(() => category || defaultCategoryDetails, [category]);

  const {
    formDetails,
    resetIsChanged,
    handleFormChange,
    isFormValid,
    isChanged
  } = useCategoryForm(formInitialState);

  const handleUpdateCategory = async () => {
    setSaving(true);
    if (!categoryId) return;

    const response = await updateCategory(categoryId, formDetails);
    if (response.success && response.item) {
      updateCategoryInList(response.item);
      resetIsChanged();
    }

    showNotification({
      message: response.message,
      type: response.success ? "success" : "error"
    });
    setSaving(false);
  }

  useEffect(() => {
    if (!categoryId) return;
    fetchCategoryFromId(categoryId, setCategory, setLoading);
  }, [categoryId]);

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
	      categoryDetails={formDetails || {}}
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
