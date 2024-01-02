import { CategoryDetails } from '@/hooks/categoryForm'
import { apiCall } from '@/services/api'

export interface Category {
  _id: string;
  name: string;
  href: string;
};

interface ResponseMessage {
  message: string;
  item?: Category;
  success: boolean;
};

export const useCategories = () => {
  const fetchCategories = async (
    setCategories: (categories: Category[]) => void,
    setLoading?: (value: boolean) => void
  ): Promise<void> => {
    if (setLoading) setLoading(true);

    const endpoint = "/api/getCollection?collection=categories";
    const data: Category[] = await apiCall<Category[]>("GET", endpoint);
    setCategories(data);

    if (setLoading) setLoading(false);
  };

  const fetchCategory = async (
    category: string,
    setCategory: (category: Category) => void
  ): Promise<void> => {
    if (category == "all") {
      setCategory({
	_id: "",
	name: "Alla Produkter",
	href: "all"
      });
    } else {
      const endpoint = `/api/getCategory?category=${encodeURIComponent(category)}`
      const data: Category = await apiCall<Category>("GET", endpoint);
      //setCategory(data[0]);
    }
  };

  const fetchCategoryFromId = async (
    categoryId: string,
    setCategory: (category: Category) => void,
    setLoading?: (value: boolean) => void
  ): Promise<void> => {
    if (setLoading) setLoading(true);

    const endpoint = `/api/getItemFromId?id=${encodeURIComponent(categoryId)}&type=category`
    const data: Category = await apiCall<Category>("GET", endpoint);
    setCategory(data);

    if (setLoading) setLoading(false);
  };

  const newCategory = async (
    categoryDetails: CategoryDetails
  ): Promise<ResponseMessage> => {
    const endpoint = "/api/new?type=category";
    const response: ResponseMessage = await apiCall<ResponseMessage>("POST", endpoint, categoryDetails)
    return response;
  };

  const updateCategory = async (
    categoryId: string,
    categoryDetails: CategoryDetails
  ): Promise<ResponseMessage> => {
    const endpoint = `/api/update?id=${categoryId}&type=category`;
    const response: ResponseMessage = await apiCall<ResponseMessage>("PUT", endpoint, categoryDetails)
    return response;
  };

  const deleteCategory = async (
    categoryId: string
  ): Promise<ResponseMessage> => {
    const endpoint = `/api/delete?id=${categoryId}&type=category`;
    const response: ResponseMessage = await apiCall<ResponseMessage>("DELETE", endpoint)
    return response;
  };

  return {
    fetchCategories,
    fetchCategory,
    fetchCategoryFromId,
    newCategory,
    updateCategory,
    deleteCategory
  };
}
