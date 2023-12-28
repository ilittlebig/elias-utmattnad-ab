export const useCategories = () => {
  const fetchCategories = async (setLoading?: () => void, setCategories: () => void) => {
    const response = await fetch("/products/api?collection=categories");
    const data = await response.json();
    if (setLoading) {
      setLoading(false);
    }
    setCategories(data);
  };

  const fetchCategory = async (category: string, setCategoryLabel: () => void) => {
    if (category == "all") {
      setCategoryLabel("Alla Produkter");
    } else {
      const response = await fetch(`
	/products/${category}/api?category=${encodeURIComponent(category)}
      `);

      const data = await response.json();
      setCategoryLabel(data[0].name);
    }
  };

  return { fetchCategories, fetchCategory };
}
