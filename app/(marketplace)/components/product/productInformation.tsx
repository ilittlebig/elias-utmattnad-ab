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
	    <div className="flex flex-col gap-y-0">
	      <h1 className="text-md font-bold text-black">
		{product.name}
	      </h1>

	      <h2 className="text-md font-semibold text-black text-opacity-60">
		{product.dimensions}
	      </h2>
	    </div>

	    <h3 className="text-2xl font-semibold text-black">
	      {formattedPrice}
	    </h3>
	  </div>
	</>
      ) : (
	<div className="animate-pulse">
	  <div className="flex flex-col gap-y-3">
	    <div className="w-full h-8 bg-gray-100 rounded-full" />
	    <div className="w-full mt-4 h-10 bg-gray-100 rounded-full" />
	  </div>
	</div>
      )}
    </div>
  )
}

export default ProductInformation;
