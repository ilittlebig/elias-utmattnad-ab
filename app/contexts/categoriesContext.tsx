"use client"
import React, { createContext, useState, useEffect, useContext } from 'react'
import { Category, useCategories } from '@/hooks/categories'

interface CategoriesProviderProps {
  children: React.ReactNode;
}

interface CategoriesContextType {
  categories: Category[];
  isLoading: boolean;
  addCategoryToList: (newCategory: Category) => void;
  updateCategoryInList: (updatedCategory: Category) => void;
  removeCategoryFromList: (categoryId: string) => void;
};

const defaultContextValue: CategoriesContextType = {
  categories: [],
  isLoading: true,
  addCategoryToList: () => {},
  updateCategoryInList: () => {},
  removeCategoryFromList: () => {}
};

const CategoriesContext = createContext<CategoriesContextType>(defaultContextValue);

export const CategoriesProvider = ({ children }: CategoriesProviderProps) => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [isLoading, setLoading] = useState<boolean>(true);
  const { fetchCategories } = useCategories();

  useEffect(() => {
    fetchCategories(setCategories, setLoading);
  }, []);

  const addCategoryToList = (newCategory: Category) => {
    setCategories(currentCategories => [...currentCategories, newCategory]);
  };

  const updateCategoryInList = (updatedCategory: Category) => {
    setCategories(currentCategories =>
      currentCategories.map(category =>
        category._id === updatedCategory._id ? updatedCategory : category
      )
    );
  };

  const removeCategoryFromList = (categoryId: string) => {
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
