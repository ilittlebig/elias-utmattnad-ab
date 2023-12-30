"use client"
import { useState, useEffect } from 'react'
import { useCategoriesContext } from '@/contexts/categoriesContext'
import CategoriesHeader from '@/dashboard/components/categories/categoriesHeader'
import CategoryEntry from '@/dashboard/components/categories/categoryEntry'

const CategoriesList = () => {
  const { categories, isLoading } = useCategoriesContext();

  return (
    <div className="flex flex-col w-full overflow-auto">
      <CategoriesHeader />

      <div className="flex flex-col py-2">
      	{isLoading ? (
	  <div></div>
	) : (
	  categories.map((category, index) => (
	    <CategoryEntry
	      key={index}
	      id={category._id}
	      name={category.name}
	      href={category.href}
	    />
	  ))
	)}
      </div>
    </div>
  );
};

export default CategoriesList;
