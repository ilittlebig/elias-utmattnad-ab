import { FaCircle } from 'react-icons/fa'
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
	<div className="lg:flex flex-col gap-y-6 hidden">
	  <div className="flex items-center gap-x-3 text-sm font-medium">
	    <Link href="/products/all" className="hover:underline">
	      Produkter
	    </Link>

 	    <FaCircle className="w-1 h-1 text-black" />

	    <Link href={`/products/${currentCategory}`} className="hover:underline">
	      {category.name}
	    </Link>

 	    <FaCircle className="w-1 h-1 text-black" />

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
