import { useCartContext } from '@/contexts/cartContext'
import { Product } from '@/hooks/products'

import Image from 'next/image'
import Link from 'next/link'
import useLocale from '@/hooks/locale'
import currencyFormatter from '@/utils/currencyFormatter'
import Button from '@/components/button'

type ProductProps = {
  product: Product
}

const ProductCard = ({
  product
}: ProductProps) => {
  const { handleAddToCart } = useCartContext();
  const locale = useLocale();
  const formattedPrice = currencyFormatter(product.price, "SEK", locale);

  return (
    <div className="flex flex-col lg:w-[299px] gap-y-4">
      <div className="relative flex items-center justify-center w-full h-full group">
        <div className="h-[297px] transition-opacity duration-300 group-hover:opacity-0">
	  <div className="absolute inset-0 w-full h-[297px]">
	    <Image
	      src="/ProductImage1.png"
	      fill
	      style={{ objectFit: "contain" }}
	      alt="Product Image1"
	    />
	  </div>
	</div>

        <div className="h-[297px]">
	  <div className="absolute inset-0 w-full h-[297px] transition-opacity duration-300 opacity-0 group-hover:opacity-100">
	    <Image
	      src="/ProductImage2.png"
	      fill
	      style={{ objectFit: "contain" }}
	      alt="Product Image1"
	    />

	    <div className="flex items-end w-full h-full px-2 py-2">
	      <Button
		actionText="Lägg Till"
		fill
		className="text-sm py-3"
		onClick={() => handleAddToCart(product)}
	      />
	    </div>
	  </div>
	</div>
      </div>

      <div className="flex flex-col gap-y-1">
	<div className="flex justify-between">
	  <div className="text-xs hover:underline truncate">
	    {product.name}
	  </div>
	  <div className="text-xs font-medium">
	    {formattedPrice}
	  </div>
	</div>

	<div className="text-xs text-sub-gray">
	  {product.dimensions}
	</div>
      </div>
    </div>
  )
}

export default ProductCard;
