import { Category } from '@/hooks/categories'
import { Product } from '@/hooks/products'
import Link from 'next/link'

type BreadcrumbsProps = {
  category: Category | null,
  product: Product | null,
  currentCategory: string
};

const Breadcrumbs = ({
  category,
  product,
  currentCategory
}: BreadcrumbsProps) => {
  return (
    <>
      {category && product ? (
	<div className="flex flex-col gap-y-6 px-4 lg:px-0">
	  <div className="flex font-semibold items-center gap-x-2 text-xs text-black text-opacity-60">
	    <Link href="/products/all" className="hover:underline">
	      Produkter
	    </Link>

	    <div>/</div>

	    <Link href={`/products/${currentCategory}`} className="hover:underline">
	      {category.name}
	    </Link>

	    <div>/</div>

	    <Link href={`/products/${currentCategory}/${product._id}`} className="text-primary hover:underline">
	      {product.name}
	    </Link>
	  </div>
	</div>
      ) : (
	<div className="animate-pulse w-1/2 h-5 bg-gray-100 rounded-full hidden lg:block" />
      )}
    </>
  )
}

export default Breadcrumbs;
