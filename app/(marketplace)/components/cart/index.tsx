import { IoCloseOutline } from 'react-icons/io5'
import { useCart } from '@/hooks/cart'
import useLocale from '@/hooks/locale'
import currencyFormatter from '@/utils/currencyFormatter'

import CartPropss from '@/(marketplace)/components/product/productInformation/index'
import Button from '@/components/button'
import ProductCard from '@/(marketplace)/components/cart/productCard'

type CartProps = {
  toggled: boolean,
  onToggle: (value: boolean) => void
}

function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

const Cart = ({ toggled, onToggle }: CartProps) => {
  const { getProducts, getOrderValue, getTotalItemCount } = useCart();
  const isCartEmpty = getTotalItemCount() === 0;
  const FREE_DELIVERY = 499

  const locale = useLocale();
  const orderValue = getOrderValue();
  const formattedOrderValue = currencyFormatter(orderValue, "SEK", locale);

  const untilFreeDelivery = clamp(FREE_DELIVERY - orderValue, 0, FREE_DELIVERY);
  const formattedUntilFreeDelivery = currencyFormatter(untilFreeDelivery, "SEK", locale);

  let deliveryFee = untilFreeDelivery <= 0 ? 0 : 79;
  const formattedDeliveryFee = currencyFormatter(deliveryFee, "SEK", locale);

  const totalPrice = orderValue + deliveryFee;
  const formattedTotalPrice = currencyFormatter(totalPrice, "SEK", locale);

  /* Disables scrolling */
  onToggle(true);

  return (
    <>
      <div onClick={() => onToggle(!toggled)} className={`
	${toggled ? 'opacity-100 visible' : 'opacity-0 invisible'}
	absolute
	left-0
	top-0
	w-full
	transition-opacity
	duration-300
	ease-in-out
	backdrop-blur-md
	bg-[#000000]/50
	h-full
	z-40`
      }/>

      <div className={`
	${toggled ? 'translate-x-0' : 'translate-x-full hidden'}
	bg-white
	absolute
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
	<div className="flex flex-col py-6 h-full justify-between">
	    <div
	      className="flex w-full px-6 text-3xl justify-between"
	      onClick={() => onToggle(!toggled)}
	    >
	      <h1 className="font-bold lg:text-3xl text-2xl pt-3">
	        Kundvagn
	      </h1>
	      <IoCloseOutline className="cursor-pointer w-12 h-12" />
	    </div>

	  <div className="flex flex-col px-2 h-full py-6 gap-y-3 overflow-scroll">
	    {getProducts().map((cartItem, index) => (
	      <ProductCard
	        key={index}
	        id={cartItem.product._id}
	        name={cartItem.product.name}
		price={cartItem.product.price}
		quantity={cartItem.quantity}
	      />
	    ))}
	  </div>

	  <div className="flex flex-col gap-y-3 px-6 font-medium">
	    <div className="w-full h-0.5 bg-gray-200" />
	    <div className="flex justify-between">
	      <h2 className="text-lg pt-3">Beställningsvärde:</h2>
	      <h2 className="text-lg pt-3">{formattedOrderValue}</h2>
	    </div>
	    <div className="flex justify-between">
	      <h2 className="text-lg pt-3">Leverans:</h2>
	      <h2 className="text-lg pt-3">{formattedDeliveryFee}</h2>
	    </div>
	    <div className="w-full h-0.5 bg-gray-200" />
	    <div className="flex justify-between">
	      <h2 className="text-xl pt-3 font-bold">Summa:</h2>
	      <h2 className="text-xl pt-3 font-bold">{formattedTotalPrice}</h2>
	    </div>

	    <Button
	      actionText="Till Kassan"
	      href="/"
	      disabled={isCartEmpty}
	      fill
	    />

	    <h2 className="text-center text-lg py-6 font-medium">
	      {formattedUntilFreeDelivery} kvar till fri leverans
	    </h2>
	  </div>
	</div>
      </div>
    </>
  )
}

export default Cart;
