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
      <div className="pr-5">
	<div className="flex flex-col divide-y gap-y-4">
	  <label className="text-xs text-sub-gray">
	    521 produkter
	  </label>
	  <label className="text-sm font-semibold text-black pt-4">
	    Kategorier
	  </label>
	</div>

	{isLoading ? (
	  <div className="animate-pulse flex flex-col gap-y-2 pt-2 w-full">
	    {[...Array(5)].map((_, index) => (
	      <div key={index} className="w-16 h-2 bg-gray-200 rounded-full" />
	    ))}
	  </div>
	) : (
	  <div className="flex flex-col gap-y-0">
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
    </div>
  )
}

export default Categories;
