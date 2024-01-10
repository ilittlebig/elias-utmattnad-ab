"use client"
import { Toast } from '@/contexts/toastContext'
import { useCart } from '@/hooks/cart'
import { useState, useEffect } from 'react'
import useLocale from '@/hooks/locale'
import currencyFormatter from '@/utils/currencyFormatter'
import Image from 'next/image'

const CartNotificationToast = ({
  name,
  dimensions,
  price,
  image,
  className
}: Toast) => {
  const { getTotalItemCount } = useCart();

  const locale = useLocale();
  const formattedPrice = currencyFormatter(price, "SEK", locale);
  const totalItems = getTotalItemCount();

  return (
    <div className="fixed w-full top-[7%] left-0 z-50 pointer-events-none">
      <div className="flex justify-center w-full">
        <div className="flex justify-end w-full max-w-6xl mr-5 lg:mr-0">
	  <div className={`bg-white drop-shadow-card p-4 rounded-md mt-2 z-20 ease-in-out transition-opacity duration-300 ${className}`}>
	    <div className="flex flex-col gap-y-4 mr-12">
	      <div className="font-semibold text-md px-2">
		Kundvagn ({totalItems})
	      </div>

	      <div className="flex gap-x-2">
		<div className="relative w-20 h-20">
		  <Image
		    src={image}
		    fill
		    style={{ objectFit: "contain" }}
		    alt="Product Image"
		  />
		</div>

		<div className="flex flex-col justify-between">
		  <div className="flex flex-col">
		    <div className="w-full text-sm font-semibold">
		      {name}
		    </div>

		    <div className="w-full text-sub-gray text-sm">
		      {dimensions}
		    </div>
		  </div>

		  <div className="w-full text-sm font-semibold">
		    {formattedPrice}
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
