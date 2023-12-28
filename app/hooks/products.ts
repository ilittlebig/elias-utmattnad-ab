import { ProductDetails } from '@/hooks/productForm'
import { apiService } from '@/services/api'

export interface Product {
  name: string;
  description: string;
  dimensions: string;
  material: string;
  category: string;
  price: number;
  inventory: number;
  rating: number;
};

export const useProducts = () => {
  const fetchProducts = async (
    category: string,
    setLoading: () => void,
    setProducts: () => void
  ): Promise<void> => {
    setLoading(true);
    try {
      const endpoint = `/products/api?collection=products&category=${encodeURIComponent(category)}`
      const data: Product[] = await apiService.fetch(endpoint);
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchProduct = async (
    category: string,
    productId: string,
    setProduct: () => void,
    setLoading?: () => void,
  ): Promise<void> => {
    if (setLoading) setLoading(true);
    try {
      const endpoint = `/products/${category}/${productId}/api`;
      const data: Product = await apiService.fetch(endpoint);
      setProduct(data);
    } catch (error) {
      console.error("Error fetching product:", error);
    } finally {
      if (setLoading) setLoading(false);
    }
  };

  const fetchProductCount = async (
    setProductCount: () => void
  ): Promise<void> => {
    try {
      const endpoint = "/dashboard/products/api";
      const data: { count: number } = await apiService.fetch(endpoint);
      setProductCount(data.count);
    } catch (error: any) {
      console.log("Error fetching product count:", error);
    }
  };

  const newProduct = async (
    productDetails: ProductDetails
  ): Promise<void> => {
    try {
      const endpoint = "/dashboard/products/new/api";
      await apiService.post(endpoint, productDetails);
    } catch (error: any) {
      console.log("Error creating new product:", error);
    }
  };

  const updateProduct = async (
    productId: string,
    productDetails: ProductDetails
  ): Promise<Product> => {
    try {
      const endpoint = `/dashboard/products/edit/api?id=${productId}`;
      const updatedProduct = await apiService.put(endpoint, productDetails)
      return updatedProduct;
    } catch (error: any) {
      console.log("Error updating product:", error);
    }
  };

  return { fetchProducts, fetchProduct, fetchProductCount, newProduct, updateProduct };
}
