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

interface ResponseMessage {
  message: string,
  product?: Product
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

  const newProduct = async (
    productDetails: ProductDetails
  ): Promise<void> => {
    try {
      const endpoint = "/api/newProduct";
      const response: ResponseMessage = await apiService.post(endpoint, productDetails);
      return response;
    } catch (error: any) {
      console.log("Error creating new product:", error);
    }
  };

  const updateProduct = async (
    productId: string,
    productDetails: ProductDetails
  ): Promise<ResponseMessage> => {
    try {
      const endpoint = `/api/updateProduct?id=${productId}`;
      const response: ResponseMessage = await apiService.put(endpoint, productDetails)
      return response;
    } catch (error: any) {
      console.log("Error updating product:", error);
    }
  };

  const deleteProduct = async (
    productId: string
  ): Promise<ResponseMessage> => {
    try {
      const endpoint = `/api/deleteProduct?id=${productId}`;
      const response: ResponseMessage = await apiService.delete(endpoint)
      return response;
    } catch (error: any) {
      console.log("Error deleting product:", error);
    }
  };

  return { fetchProducts, fetchProduct, newProduct, updateProduct, deleteProduct };
}
