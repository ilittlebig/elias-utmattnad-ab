import { Category } from '@/hooks/categories'
import { Product } from '@/hooks/products'
import useLocale from '@/hooks/locale'
import Link from 'next/link'

import currencyFormatter from '@/utils/currencyFormatter'

type ProductInformationProps = {
  product: Product | null,
}

const ProductInformation = ({
  product,
}: ProductInformationProps) => {
  const locale = useLocale();
  const formattedPrice = currencyFormatter(product?.price || 0, "SEK", locale);

  return (
    <div className="flex flex-col gap-y-8">
      {product ? (
        <>
	  <div className="flex flex-col gap-y-5 lg:px-0 px-4">
	    <div className="flex justify-between items-center">
	      <div className="flex flex-col gap-y-0">
		<h1 className="lg:text-2xl text-xl font-semibold text-black">
		  {product.name}
		</h1>

		<h1 className="lg:text-base text-sm font-semibold text-black text-opacity-60">
		  {product.dimensions}
		</h1>
	      </div>

	      <h3 className="lg:text-2xl text-xl font-semibold text-black">
		{formattedPrice}
	      </h3>
	    </div>

	  </div>
	</>
      ) : (
	<div className="animate-pulse mt-2 lg:px-0 px-4 lg:mt-0">
	  <div className="flex-col gap-y-3 hidden lg:flex">
	    <div className="w-full h-8 bg-gray-100 rounded-full" />
	    <div className="w-full mt-4 h-10 bg-gray-100 rounded-full" />
	  </div>

	  <div className="flex justify-between lg:hidden items-center">
	    <div className="flex flex-col gap-y-0 w-full">
	      <div className="w-[70%] h-8 bg-gray-100 rounded-full" />
	      <div className="w-[40%] mt-1 h-4 bg-gray-100 rounded-full" />
	    </div>
	    <div className="w-[40%] h-8 bg-gray-100 rounded-full" />
	  </div>
	</div>
      )}
    </div>
  )
}

export default ProductInformation;
