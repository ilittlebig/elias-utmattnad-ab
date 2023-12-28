"use client"
import { useState, useEffect } from 'react'
import { useCategories } from '@/hooks/categories'
import CategoriesHeader from '@/dashboard/components/categories/categoriesHeader'
import CategoryEntry from '@/dashboard/components/categories/categoryEntry'

const CategoriesList = () => {
  const [isLoading, setLoading] = useState<boolean>(true);
  const [categories, setCategories] = useState([]);
  const { fetchCategories } = useCategories();

  useEffect(() => {
    fetchCategories(setLoading, setCategories);
  }, []);

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
