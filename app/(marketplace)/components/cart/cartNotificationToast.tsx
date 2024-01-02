import Image from 'next/image'
import currencyFormatter from '@/utils/currencyFormatter'
import { Toast } from '@/contexts/toastContext'
import { useCart } from '@/hooks/cart'
import { useState, useEffect } from 'react'

const CartNotificationToast = ({name, price, image, className }: Toast) => {
  const { getTotalItemCount } = useCart();
  const formattedPrice = currencyFormatter(price, "SEK");
  const totalItems = getTotalItemCount();

  return (
    <div className="fixed w-full top-0 left-0 z-40 pointer-events-none">
      <div className="flex justify-center w-full">
        <div className="flex justify-end w-full max-w-6xl mr-5 lg:mr-0">
	  <div className={`bg-white drop-shadow-card p-4 rounded-md mt-2 z-20 ease-in-out transition-opacity duration-300 ${className}`}>
	    <div className="flex flex-col gap-y-4 pt-2 mr-12">
	      <div className="font-bold text-lg px-2">
		Kundvagn ({totalItems})
	      </div>
	      <div className="flex gap-x-2">
		<div className="relative w-24 h-24">
		  <Image
		    src={image}
		    layout="fill"
		    objectFit="contain"
		    alt="Product Image"
		  />
		</div>

		<div className="flex flex-col justify-between">
		  <div className="flex flex-col">
		    <div className="w-full text-lg font-bold">
		      {name}
		    </div>

		    <div className="w-full text-md">
		      Antal: 1
		    </div>
		    <div className="w-full text-md">
		      Pris: {formattedPrice}
		    </div>
		  </div>
		</div>
	      </div>
	    </div>
	  </div>
	</div>
      </div>
    </div>
  )
}

export default CartNotificationToast;
