import Image from 'next/image'
import Link from 'next/link'
import useLocale from '@/hooks/locale'
import currencyFormatter from '@/utils/currencyFormatter'

type ProductProps = {
  price: number,
  name: string,
  dimensions: string,
}

const ProductCard = ({
  price,
  name,
  dimensions,
}: ProductProps) => {
  const locale = useLocale();
  const formattedPrice = currencyFormatter(price, "SEK", locale);

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
	  </div>
	</div>
      </div>

      <div className="flex flex-col gap-y-1">
	<div className="flex justify-between">
	  <div className="text-xs hover:underline truncate">
	    {name}
	  </div>
	  <div className="text-xs font-medium">
	    {formattedPrice}
	  </div>
	</div>

	<div className="text-xs text-sub-gray">
	  {dimensions}
	</div>
      </div>
    </div>
  )
}

export default ProductCard;
