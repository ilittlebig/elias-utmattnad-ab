"use client"
import React, { createContext, useState, useEffect, useContext } from 'react'
import { Category, useCategories } from '@/hooks/categories'

const CategoriesContext = createContext();

export const CategoriesProvider = ({ children }) => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [isLoading, setLoading] = useState<boolean>(true);
  const { fetchCategories } = useCategories();

  useEffect(() => {
    fetchCategories(setLoading, setCategories);
  }, []);

  const addCategoryToList = (newCategory) => {
    setCategories(currentCategories => [...currentCategories, newCategory]);
  };

  const updateCategoryInList = (updatedCategory) => {
    setCategories(currentCategories =>
      currentCategories.map(category =>
        category._id === updatedCategory._id ? updatedCategory : category
      )
    );
  };

  const removeCategoryFromList = (categoryId) => {
    setCategories(currentCategories =>
      currentCategories.filter(category => category._id !== categoryId)
    );
  };

  return (
    <CategoriesContext.Provider value={{
      categories,
      isLoading,
      addCategoryToList,
      updateCategoryInList,
      removeCategoryFromList
    }}>
      {children}
    </CategoriesContext.Provider>
  );
};

export const useCategoriesContext = () => {
  const context = useContext(CategoriesContext);
  if (!context) {
    throw new Error("useCategoriesContext must be used within a 'CategoriesProvider'");
  }
  return context;
}
