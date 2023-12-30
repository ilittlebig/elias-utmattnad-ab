import { ProductDetails } from '@/hooks/productForm'
import { apiCall } from '@/services/api'

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
  success: boolean,
  item?: Product,
};

export const useProducts = () => {
  const fetchProducts = async (
    category: string,
    setLoading: () => void,
    setProducts: () => void
  ): Promise<void> => {
    setLoading(true);

    const endpoint = `/api/getCollection?collection=products&category=${encodeURIComponent(category)}`
    const data: Product[] = await apiCall<Product[]>("GET", endpoint);
    setProducts(data);

    setLoading(false);
  };

  const fetchProduct = async (
    category: string,
    productId: string,
    setProduct: () => void,
    setLoading?: () => void,
  ): Promise<void> => {
    if (setLoading) setLoading(true);

    const endpoint = `/api/getItemFromId?id=${productId}&type=product`;
    const data: Product = await apiCall<Product>("GET", endpoint);
    setProduct(data);

    if (setLoading) setLoading(false);
  };

  const newProduct = async (
    productDetails: ProductDetails
  ): Promise<void> => {
    const endpoint = "/api/new?type=product";
    const response: ResponseMessage = await apiCall<ResponseMessage>("POST", endpoint, productDetails);
    return response;
  };

  const updateProduct = async (
    productId: string,
    productDetails: ProductDetails
  ): Promise<ResponseMessage> => {
    const endpoint = `/api/update?id=${productId}&type=product`;
    const response: ResponseMessage = await apiCall<ResponseMessage>("PUT", endpoint, productDetails)
    return response;
  };

  const deleteProduct = async (
    productId: string
  ): Promise<ResponseMessage> => {
    const endpoint = `/api/delete?id=${productId}&type=product`;
    const response: ResponseMessage = await apiCall<ResponseMessage>("DELETE", endpoint)
    return response;
  };

  return {
    fetchProducts,
    fetchProduct,
    newProduct,
    updateProduct,
    deleteProduct
  };
}
