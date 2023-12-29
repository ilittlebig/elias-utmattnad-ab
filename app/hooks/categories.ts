import { CategoryDetails } from '@/hooks/categoryForm'
import { apiService } from '@/services/api'

export interface Category {
  name: string;
  href: string;
};

export const useCategories = () => {
  const fetchCategories = async (
    setLoading?: () => void,
    setCategories: () => void
  ): Promise<void> => {
    if (setLoading) setLoading(true);
    try {
      const endpoint = "/api/getCollection?collection=categories";
      const data: Category[] = await apiService.fetch(endpoint);
      setCategories(data);
    } catch (error: any) {
      console.error("Error fetching categories:", error);
    } finally {
      if (setLoading) setLoading(false);
    }
  };

  const fetchCategory = async (
    category: string,
    setCategory: () => void
  ): Promise<void> => {
    try {
      if (category == "all") {
	setCategory({ name: "Alla Produkter", href: "all" });
      } else {
	const endpoint = `/api/getCategory?category=${encodeURIComponent(category)}`
	const data: Category = await apiService.fetch(endpoint);
	setCategory(data[0]);
      }
    } catch (error: any) {
      console.error("Error fetching category:", error);
    }
  };

  const fetchCategoryFromId = async (
    categoryId: string,
    setCategory: () => void,
    setLoading?: () => void
  ): Promise<void> => {
    if (setLoading) setLoading(true);
    try {
      const endpoint = `/api/getCategoryFromId?id=${encodeURIComponent(categoryId)}`
      const data: Category = await apiService.fetch(endpoint);
      setCategory(data);
    } catch (error: any) {
      console.error("Error fetching category from id:", error);
    } finally {
      if (setLoading) setLoading(false);
    }
  };

  const newCategory = async (
    categoryDetails: CategoryDetails
  ): Promise<void> => {
    try {
      const endpoint = "/api/newCategory";
      await apiService.post(endpoint, categoryDetails)
    } catch (error: any) {
      console.log("Error creating new category:", error);
    }
  };

  const updateCategory = async (
    categoryId: string,
    categoryDetails: CategoryDetails
  ): Promise<Category> => {
    try {
      const endpoint = `/api/updateCategory?id=${categoryId}`;
      const updatedCategory: Category = await apiService.put(endpoint, categoryDetails)
      return updatedCategory;
    } catch (error: any) {
      console.log("Error updating category:", error);
    }
  };

  return { fetchCategories, fetchCategory, fetchCategoryFromId, newCategory, updateCategory };
}
