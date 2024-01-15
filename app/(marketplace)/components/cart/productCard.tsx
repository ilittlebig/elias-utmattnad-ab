import { FaRegTrashCan } from 'react-icons/fa6'
import { useCartContext } from '@/contexts/cartContext'
import useLocale from '@/hooks/locale'

import Image from 'next/image'
import Link from 'next/link'
import currencyFormatter from '@/utils/currencyFormatter'
import QuantityAdjuster from '@/(marketplace)/components/cart/quantityAdjuster'

type ProductCardProps = {
  id: string,
  name: string,
  dimensions: string,
  price: number,
  quantity: number,
}

const ProductCard = ({
  id,
  name,
  dimensions,
  price,
  quantity
}: ProductCardProps) => {
  const locale = useLocale();
  const {
    toggleCart,
    removeProduct,
  } = useCartContext();

  return (
    <div className="flex px-6 w-full">
      <div className="flex gap-x-4 w-full">
	<div className="relative min-w-[72px] h-24">
	  <Image
	    src="/rug1.png"
	    fill
	    style={{ objectFit: "contain" }}
	    alt="Product Image"
	  />
	</div>

	<div className="flex flex-col justify-between w-full">
	  <div className="flex justify-between items-center font-semibold">
	    <div className="flex flex-col">
	      <Link
	        onClick={toggleCart}
		href={`/products/all/${id}`}
		className="w-full text-sm text-black hover:underline"
	      >
		{name}
	      </Link>

	      <label className="text-xs text-black text-opacity-60">
	        {dimensions}
	      </label>
	    </div>

	    <FaRegTrashCan
	      role="button"
	      onClick={() => removeProduct(id)}
	      className="w-4 h-4 hover:text-red-500 transition-text duration-300"
	    />
	  </div>

          <div className="flex justify-between items-center w-full">
	    <div className="text-xs font-semibold text-black">
	      {currencyFormatter(price, "SEK", locale)}
	    </div>

	    <QuantityAdjuster
	      id={id}
	      quantity={quantity}
	    />
	  </div>
	</div>
      </div>
    </div>
  )
}

export default ProductCard;
