"use client"
import React, { createContext, useState, useEffect, useContext } from 'react'
import { Product, useProducts } from '@/hooks/products'

interface ProductsContextType {
  products: Product[];
  isLoading: boolean;
  category: string,
  setCategory: (category: string) => void;
  addProductToList: (newProduct: Product) => void;
  updateProductInList: (updatedProduct: Product) => void;
  removeProductFromList: (productId: string) => void;
}

const ProductsContext = createContext<ProductsContextType>({
  products: [],
  isLoading: true,
  category: "all",
  setCategory: () => {},
  addProductToList: () => {},
  updateProductInList: () => {},
  removeProductFromList: () => {}
});

interface ProductsProviderProps {
  children: React.ReactNode;
}

export const ProductsProvider = ({ children }: ProductsProviderProps) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [category, setCategory] = useState<string>("all");
  const [isLoading, setLoading] = useState<boolean>(true);
  const { fetchProducts } = useProducts();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      await fetchProducts(category, setProducts);
      setLoading(false);
    };
    fetchData();
  }, [category]);

  const addProductToList = (newProduct: Product) => {
    setProducts(currentProducts => [...currentProducts, newProduct]);
  };

  const updateProductInList = (updatedProduct: Product) => {
    setProducts(currentProducts =>
      currentProducts.map(product =>
        product._id === updatedProduct._id ? updatedProduct : product
      )
    );
  };

  const removeProductFromList = (productId: string) => {
    setProducts(currentProducts =>
      currentProducts.filter(product => product._id !== productId)
    );
  };

  return (
    <ProductsContext.Provider value={{
      products,
      category,
      setCategory,
      isLoading,
      addProductToList,
      updateProductInList,
      removeProductFromList
    }}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProductsContext = () => {
  const context = useContext(ProductsContext);
  if (!context) {
    throw new Error("useProductsContext must be used within a 'ProductsProvider'");
  }
  return context;
};
