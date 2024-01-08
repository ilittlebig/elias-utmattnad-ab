import { IoCloseOutline } from 'react-icons/io5'
import { useCartContext } from '@/contexts/cartContext'
import useLocale from '@/hooks/locale'
import currencyFormatter from '@/utils/currencyFormatter'

import Image from 'next/image'
import Button from '@/components/button'
import ProductCard from '@/(marketplace)/components/cart/productCard'

const Cart = () => {
  const {
    isCartToggled,
    toggleCart,
    getProducts,
    getOrderValue,
    getTotalItemCount
  } = useCartContext();

  const totalItemCount = getTotalItemCount();
  const isCartEmpty = totalItemCount === 0;

  const locale = useLocale();
  const orderValue = getOrderValue();
  const formattedTotalPrice = currencyFormatter(orderValue, "SEK", locale);

  return (
    <>
      <div onClick={toggleCart} className={`
	${isCartToggled ? 'opacity-100 visible' : 'opacity-0 invisible'}
	fixed
	left-0
	top-0
	w-full
	transition-opacity
	duration-300
	ease-in-out
	bg-[#000000]/30
	h-full
	z-40`
      }/>

      <div className={`
	${isCartToggled ? 'translate-x-0' : 'translate-x-full'}
	bg-white
	fixed
	right-0
	top-0
	transition-transform
	duration-300
	ease-in-out
	shadow-2xl
	lg:w-[400px]
	w-[90%]
	h-full
	z-50`
      }>
        <div className="absolute w-full flex justify-end p-3">
	  <IoCloseOutline
	    onClick={toggleCart}
	    className="cursor-pointer w-7 h-7"
	  />
	</div>

	<div className="flex flex-col pt-16 h-full justify-between">
	  <h1 className="font-semibold px-6 text-2xl text-black">
	    Din Kundvagn
	  </h1>

	  <div className="flex flex-col h-full py-4 gap-y-3 overflow-scroll">
	    {!isCartEmpty ? (
	      getProducts().map((cartItem, index) => (
		<ProductCard
		  key={index}
		  id={cartItem.product._id}
		  name={cartItem.product.name}
		  dimensions={cartItem.product.dimensions}
		  price={cartItem.product.price * cartItem.quantity}
		  quantity={cartItem.quantity}
		/>
	      ))
	    ) : (
	      <div className="flex flex-col w-full h-full justify-center">
	        <div className="relative flex flex-col h-[400px] items-center">
		  <div className="absolute top-[-9%]">
		    <div className="relative w-[400px] h-[400px]">
		      <Image
			src="/customers.svg"
			fill
			style={{ objectFit: "contain" }}
			alt="Empty Cart Image"
		      />
		    </div>
		  </div>

		  <label className="text-lg text-black absolute bottom-[20%]">
		    Din kundvagn är tom
		  </label>
		</div>
	      </div>
	    )}
	  </div>

	  <div className="flex flex-col gap-y-6 px-6 bg-white shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]">
	    <div className="flex justify-between text-md pt-6">
	      <div className="flex gap-x-1 items-end">
		<h2 className="font-semibold text-md">
		  Summa
		</h2>
		<p className="text-xs">
		  ({totalItemCount} {totalItemCount == 1 ? "sak" : "saker"})
		</p>
	      </div>

	      <h2 className="font-semibold">
	        {formattedTotalPrice}
	      </h2>
	    </div>

	    <Button
	      actionText="Till Kassan"
	      href="/"
	      disabled={isCartEmpty}
	      onClick={toggleCart}
	      fill
	    />

	    <h2 className="text-center text-sm font-medium pb-6">
	      Psst, köp nu innan det är för sent.
	    </h2>
	  </div>
	</div>
      </div>
    </>
  )
}

export default Cart;
