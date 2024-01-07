"use client"
import { useState, useEffect } from 'react'
import { Category, useCategories } from '@/hooks/categories'
import Link from 'next/link'
import CategoryLabel from './categoryLabel'

const Categories = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [isLoading, setLoading] = useState<boolean>(true);
  const { fetchCategories } = useCategories();

  useEffect(() => {
    fetchCategories(setCategories, setLoading);
  }, []);

  return (
    <div className="min-w-[215px] h-[350px]">
      {isLoading ? (
	<div className="animate-pulse flex flex-col gap-y-6 w-full">
	  {[...Array(5)].map((_, index) => (
	    <div key={index} className="w-16 h-3 bg-gray-200 rounded-full" />
	  ))}
	</div>
      ) : (
	<div className="flex flex-col gap-y-3">
	  <Link href="/products/all">
	    <CategoryLabel label="Se Alla" href="all" />
	  </Link>

	  {categories.map((category, index) => (
	    <Link key={index} href={`/products/${encodeURIComponent(category.href)}`}>
	      <CategoryLabel label={category.name} href={category.href} />
	    </Link>
	  ))}
	</div>
      )}
    </div>
  )
}

export default Categories;
