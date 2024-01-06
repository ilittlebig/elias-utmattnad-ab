import useGenericForm from '@/hooks/genericForm'

export type ProductDetails = {
  name: string,
  description: string,
  dimensions: string,
  material: string,
  moreInfo: string,
  category: string,
  price: string | number,
  inventory: string | number,
  rating: string | number
};

const useProductForm = (initialState: ProductDetails = {
  name: "",
  description: "",
  dimensions: "",
  material: "",
  moreInfo: "",
  category: "",
  price: "",
  inventory: "",
  rating: ""
}) => {
  return useGenericForm<ProductDetails>(initialState);
}

export default useProductForm;
