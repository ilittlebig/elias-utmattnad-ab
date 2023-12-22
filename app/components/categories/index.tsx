"use client"
import { useState, useEffect } from 'react'
import Link from 'next/link'
import CategoryLabel from './categoryLabel'

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await fetch("/products/api?collection=categories");
      const data = await response.json();
      setLoading(false);
      setCategories(data);
    };

    fetchCategories();
  }, []);

  return (
    <div className={`flex w-48 flex-col gap-y-8 pb-12 lg:py-12 w-full lg:w-auto`}>
      <div className="flex flex-col font-rockwell gap-y-2 px-6 lg:px-0">
	<h1 className="text-xl font-bold">Kategorier</h1>
	{isLoading ? (
	  <div></div>
	) : (
	  <div className="flex flex-wrap lg:block gap-x-6 gap-y-1">
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
