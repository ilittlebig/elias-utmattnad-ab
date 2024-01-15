import { FaPlus } from 'react-icons/fa6'
import { FaMinus } from 'react-icons/fa'
import { useCartContext } from '@/contexts/cartContext'

type QuantityAdjusterProps = {
  id: string,
  quantity: number
};

const QuantityAdjuster = ({ id, quantity }: QuantityAdjusterProps) => {
  const {
    incrementQuantity,
    decrementQuantity
  } = useCartContext();

  return (
    <div className="flex gap-x-3 select-none items-center border h-[34px]">
      <div
        role="button"
	onClick={() => decrementQuantity(id)}
	className="flex items-center border border-transparent hover:border-black px-2 h-full text-xl transition-border duration-300"
      >
	<FaMinus className="w-3 h-3 text-black" />
      </div>

      <div className="flex text-xs font-semibold text-black">
	{quantity}
      </div>

      <div
        role="button"
	onClick={() => incrementQuantity(id)}
	className="flex items-center border border-transparent hover:border-black px-2 h-full text-xl transition-border duration-300"
      >
	<FaPlus className="w-3 h-3 text-black" />
      </div>
    </div>
  )
}

export default QuantityAdjuster;
