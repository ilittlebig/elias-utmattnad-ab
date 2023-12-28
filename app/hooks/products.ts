import { ProductDetails } from '@/hooks/productForm'

export interface Product {
  name: string;
  description: string;
  dimensions: string;
  material: string;
  category: string;
  price: number;
  inventory: number;
  rating: number;
}

export const useProducts = () => {
  const fetchProducts = async (category: string, setLoading: () => void, setProducts: () => void) => {
    const response = await fetch(`
      /products/api?collection=products&category=${encodeURIComponent(category)}
    `);

    const data = await response.json();
    setLoading(false);
    setProducts(data);
  };

  const fetchProduct = async (category: string, productId: string, setLoading?: () => void, setProduct: () => void) => {
    try {
      const response = await fetch(`/products/${category}/${productId}/api`);
      if (!response.ok) {
	throw new Error("Failed to fetch product");
      }

      const data = await response.json();
      if (setLoading) {
	setLoading(false);
      }
      setProduct(data);
    } catch (error) {
      console.error("Error fetching product:", error);
    }
  };

  const fetchProductCount = async (setProductCount: () => void) => {
    try {
      const response = await fetch("/dashboard/products/api");
      const data = await response.json();
      setProductCount(data.count);
    } catch (error: any) {
      console.log("Error fetching product count:", error);
    }
  };

  const newProduct = async (
    productDetails: ProductDetails
  ) => {
    const response = await fetch("/dashboard/new-product/api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productDetails)
    });

    if (!response.ok) {
      throw new Error(response.statusText);
    }
  };

  const updateProduct = async (
    productId: string,
    productDetails: ProductDetails
  ) => {
    const response = await fetch(`/dashboard/edit-product/api?id=${productId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productDetails)
    });

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const updatedProduct = await response.json();
    return updatedProduct;
  };

  return { fetchProducts, fetchProduct, fetchProductCount, newProduct, updateProduct };
}
