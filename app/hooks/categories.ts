import { CategoryDetails } from '@/hooks/categoryForm'

export interface Category {
  name: string;
  href: string;
};

export const useCategories = () => {
  const fetchCategories = async (setLoading?: () => void, setCategories: () => void) => {
    const response = await fetch("/products/api?collection=categories");
    const data = await response.json();
    if (setLoading) {
      setLoading(false);
    }
    setCategories(data);
  };

  const fetchCategory = async (category: string, setCategory: () => void): Promise<void> => {
    if (category == "all") {
      setCategory({
	name: "Alla Produkter",
	href: "all"
      });
    } else {
      const response = await fetch(`
	/products/${encodeURIComponent(category)}/api?category=${encodeURIComponent(category)}
      `);

      const data: Category = await response.json();
      setCategory(data[0]);
    }
  };

  const fetchCategoryFromId = async (categoryId: string, setCategory: () => void, setLoading?: () => void) => {
    if (setLoading)
      setLoading(true);

    const response = await fetch(`
      /dashboard/categories/api?id=${encodeURIComponent(categoryId)}
    `);

    const data = await response.json();
    setCategory(data);

    if (setLoading)
      setLoading(false);
  };

  const newCategory = async (
    categoryDetails: CategoryDetails
  ) => {
    const response = await fetch("/dashboard/categories/new/api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(categoryDetails)
    });

    if (!response.ok) {
      throw new Error(response.statusText);
    }
  };

  const updateCategory = async (
    categoryId: string,
    categoryDetails: CategoryDetails
  ) => {
    const response = await fetch(`/dashboard/categories/edit/api?id=${categoryId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(categoryDetails)
    });

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const updatedCategory = await response.json();
    return updatedCategory;
  };

  return { fetchCategories, fetchCategory, fetchCategoryFromId, newCategory, updateCategory };
}
