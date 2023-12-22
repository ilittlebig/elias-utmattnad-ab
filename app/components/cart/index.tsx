import { IoCloseOutline } from 'react-icons/io5'
import { CartPropss } from '@/components/product/productInformation/index'
import { useCart } from '@/hooks/cart'
import currencyFormatter from '@/utils/currencyFormatter'

import Button from '@/components/button'
import ProductCard from '@/components/cart/productCard'

const FREE_DELIVERY = 499

type CartProps = {
  toggled: boolean,
  onToggle: () => void
}

function clamp(value, min, max): number {
  return Math.min(Math.max(value, min), max);
}

const Cart = ({ toggled, onToggle }: CartProps) => {
  const { getProducts, getOrderValue, getTotalItemCount } = useCart();
  const isCartEmpty = getTotalItemCount() === 0;

  const orderValue = getOrderValue();
  const formattedOrderValue = currencyFormatter(orderValue, "SEK");

  const untilFreeDelivery = clamp(FREE_DELIVERY - orderValue, 0, FREE_DELIVERY);
  const formattedUntilFreeDelivery = currencyFormatter(untilFreeDelivery, "SEK");

  let deliveryFee = untilFreeDelivery <= 0 ? 0 : 79;
  const formattedDeliveryFee = currencyFormatter(deliveryFee, "SEK");

  const totalPrice = orderValue + deliveryFee;
  const formattedTotalPrice = currencyFormatter(totalPrice, "SEK");

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
	bg-black/50
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
	      className="flex w-full px-6 font-rockwell text-3xl justify-between"
	      onClick={() => onToggle(!toggled)}
	    >
	      <h1 className="font-rockwell font-bold lg:text-3xl text-2xl pt-3">Kundvagn</h1>
	      <IoCloseOutline className="w-12 h-12" />
	    </div>

	  <div className="flex flex-col px-2 h-full py-6 gap-y-3 font-rockwell overflow-scroll">
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

	  <div className="flex flex-col gap-y-3 px-6">
	    <div className="w-full h-0.5 bg-gray-200" />
	    <div className="flex justify-between">
	      <h2 className="font-rockwell text-lg pt-3">Beställningsvärde:</h2>
	      <h2 className="font-rockwell text-lg pt-3">{formattedOrderValue}</h2>
	    </div>
	    <div className="flex justify-between">
	      <h2 className="font-rockwell text-lg pt-3">Leverans:</h2>
	      <h2 className="font-rockwell text-lg pt-3">{formattedDeliveryFee}</h2>
	    </div>
	    <div className="w-full h-0.5 bg-gray-200" />
	    <div className="flex justify-between">
	      <h2 className="font-rockwell text-xl pt-3 font-bold">Summa:</h2>
	      <h2 className="font-rockwell text-xl pt-3 font-bold">{formattedTotalPrice}</h2>
	    </div>

	    <Button
	      actionText="Till Kassan"
	      href="/"
	      disabled={isCartEmpty}
	      fill
	    />

	    <h2 className="font-rockwell text-center text-lg py-6">{formattedUntilFreeDelivery} kvar till fri leverans</h2>
	  </div>
	</div>
      </div>
    </>
  )
}

export default Cart;
