import Image from 'next/image'
import Link from 'next/link'

import { FaRegTrashCan } from 'react-icons/fa6'
import { FaPlus } from 'react-icons/fa6'
import { FaMinus } from 'react-icons/fa'
import { useCart } from '@/hooks/cart'

import currencyFormatter from '@/utils/currencyFormatter'

type ProductCardProps = {
  id: string,
  name: string,
  price: number,
  quantity: quantity,
}

const ProductCard = ({ id, name, price, quantity }: ProductCardProps) => {
  const { removeProduct, incrementQuantity, decrementQuantity } = useCart();

  return (
    <div className="flex drop-shadow-card bg-white p-4 justify-between rounded-md">
      <div className="flex gap-x-2">
	<div className="relative w-24 h-24">
	  <Image
	    src="/rug1.png"
	    layout="fill"
	    objectFit="contain"
	    alt="Product Image"
	  />
	</div>

	<div className="flex flex-col justify-between">
	  <div className="flex flex-col">
	    <Link href={`/products/all/${id}`} className="w-full text-lg font-bold hover:underline">
	      {name}
	    </Link>

	    <div className="w-full text-lg">
	      {currencyFormatter(price, "SEK")}
	    </div>
	  </div>

	  <div className="flex gap-x-3 select-none">
	    <div onClick={() => decrementQuantity(id)} className="bg-gray-200 hover:bg-gray-400 rounded-md px-2 py-2 text-xl">
	      <FaMinus className="w-4 h-4" />
	    </div>
	    <div className="flex px-3 text-lg pt-1">
	      {quantity}
	    </div>
	    <div onClick={() => incrementQuantity(id)} className="bg-gray-200 hover:bg-gray-400 rounded-md px-2 py-2 text-xl">
	      <FaPlus className="w-4 h-4" />
	    </div>
	  </div>
	</div>
      </div>

      <FaRegTrashCan
        onClick={() => removeProduct(id)}
	className="w-5 h-5 hover:text-red-500"
      />
    </div>
  )
}

export default ProductCard;
