"use client"
import React, { createContext, useState, useEffect, useContext } from 'react'
import { Product, useProducts } from '@/hooks/products'

const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setLoading] = useState<boolean>(true);
  const { fetchProducts } = useProducts();

  useEffect(() => {
    fetchProducts("all", setLoading, setProducts);
  }, []);

  const addProductToList = (newProduct) => {
    setProducts(currentProducts => [...currentProducts, newProduct]);
  };

  const updateProductInList = (updatedProduct) => {
    setProducts(currentProducts =>
      currentProducts.map(product =>
        product._id === updatedProduct._id ? updatedProduct : product
      )
    );
  };

  const removeProductFromList = (productId) => {
    setProducts(currentProducts =>
      currentProducts.filter(product => product._id !== productId)
    );
  };

  return (
    <ProductsContext.Provider value={{
      products,
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
}
