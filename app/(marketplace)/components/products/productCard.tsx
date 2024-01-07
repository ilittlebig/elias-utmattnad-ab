import Image from 'next/image'
import Link from 'next/link'
import useLocale from '@/hooks/locale'
import currencyFormatter from '@/utils/currencyFormatter'

type ProductProps = {
  price: number,
  name: string,
  rating: number,
  imagePath: string,
}

const ProductCard = ({
  price,
  name,
  rating,
  imagePath
}: ProductProps) => {
  const locale = useLocale();
  const formattedPrice = currencyFormatter(price, "SEK", locale);

  return (
    <div className="flex flex-col lg:w-[299px] gap-y-4">
      <div className="flex items-center justify-center w-full h-full">
	<div className="relative w-full h-[297px]">
	  <Image
	    src={imagePath}
	    fill
	    style={{ objectFit: "contain" }}
	    alt="Product Image"
	  />
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

	<div className="flex gap-x-1">
	  {[...Array(5)].map((_, index) => (
	    <Image
	      key={index}
	      src="/Star.svg"
	      width={14}
	      height={14}
	      className={`object-contain ${index < rating ? 'opacity-100' : 'opacity-25'}`}
	      alt="Star"
	    />
	  ))}
	</div>
      </div>
    </div>
  )
}

export default ProductCard;
