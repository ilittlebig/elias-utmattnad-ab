import { Category } from '@/hooks/category'
import { Product } from '@/hooks/product'
import useLocale from '@/hooks/locale'
import Link from 'next/link'

import currencyFormatter from '@/utils/currencyFormatter'
import LoadingInformation from './loading'

type ProductInformationProps = {
  product: Product | null,
}

const ProductInformation = ({
  product,
}: ProductInformationProps) => {
  const locale = useLocale();
  const formattedPrice = currencyFormatter(product ? product.price : 0, "SEK", locale);

  return (
    <div className="flex flex-col gap-y-8 w-full">
      {product ? (
        <>
	  <div className="flex flex-col gap-y-5 lg:px-0 px-4">
	    <div className="flex flex-col gap-y-0">
	      <h1 className="text-md font-bold text-black">
		{product.name}
	      </h1>

	      <h2 className="text-md text-black underline">
		{product.dimensions}
	      </h2>
	    </div>

	    <h3 className="text-[28px] font-semibold text-black">
	      {formattedPrice}
	    </h3>
	  </div>
	</>
      ) : (
        <LoadingInformation />
      )}
    </div>
  )
}

export default ProductInformation;
