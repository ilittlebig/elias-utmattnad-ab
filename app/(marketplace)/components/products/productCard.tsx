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
    <div className="flex flex-col p-4 w-[203px] h-[280px] lg:w-[282px] lg:h-[350px] gap-y-4 bg-[#F6F7F9] hover:border hover:border-black">
      <div className="flex items-center justify-center w-full h-full">
	<div className="relative w-[65%] h-full">
	  <Image
	    src={imagePath}
	    fill
	    style={{ objectFit: "contain" }}
	    alt="Product Image"
	  />
	</div>
      </div>

      <div className="flex flex-col gap-y-1">
	<div className="flex flex-col">
	  <div className="text-sm hover:underline truncate">
	    {name}
	  </div>
	  <div className="text-sm">
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
