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
      const endpoint = `/api/getCollection?collection=products&category=${encodeURIComponent(category)}`
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
      const endpoint = `/api/getProductFromId?id=${productId}`;
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
      const endpoint = "/api/getProductsCount";
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
      const endpoint = "/api/newProduct";
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
      const endpoint = `/api/updateProduct?id=${productId}`;
      const updatedProduct: Product = await apiService.put(endpoint, productDetails)
      return updatedProduct;
    } catch (error: any) {
      console.log("Error updating product:", error);
    }
  };

  return { fetchProducts, fetchProduct, fetchProductCount, newProduct, updateProduct };
}
