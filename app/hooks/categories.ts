import { CategoryDetails } from '@/hooks/categoryForm'
import { apiService } from '@/services/api'

export interface Category {
  name: string;
  href: string;
};

interface ResponseMessage {
  message: string,
  category?: Category
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
  ): Promise<ResponseMessage> => {
    try {
      const endpoint = "/api/newCategory";
      const response: ResponseMessage = await apiService.post(endpoint, categoryDetails)
      return response;
    } catch (error: any) {
      console.log("Error creating new category:", error);
    }
  };

  const updateCategory = async (
    categoryId: string,
    categoryDetails: CategoryDetails
  ): Promise<ResponseMessage> => {
    try {
      const endpoint = `/api/updateCategory?id=${categoryId}`;
      const response: ResponseMessage = await apiService.put(endpoint, categoryDetails)
      return response;
    } catch (error: any) {
      console.log("Error updating category:", error);
    }
  };

  const deleteCategory = async (
    categoryId: string
  ): Promise<ResponseMessage> => {
    try {
      const endpoint = `/api/deleteCategory?id=${categoryId}`;
      const response: ResponseMessage = await apiService.delete(endpoint)
      return response;
    } catch (error: any) {
      console.log("Error deleting category:", error);
    }
  };

  return { fetchCategories, fetchCategory, fetchCategoryFromId, newCategory, updateCategory, deleteCategory };
}
