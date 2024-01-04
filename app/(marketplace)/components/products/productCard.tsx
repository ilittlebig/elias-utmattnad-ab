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
    <div className="flex flex-col p-4 h-[350px] lg:w-[220px] w-[210px] rounded-lg gap-y-4">
      <div className="flex relative w-full h-full">
	<Image
	  src={imagePath}
	  fill
	  style={{ objectFit: "contain" }}
	  className="transition-transform duration-300 hover:scale-105"
	  alt="Product Image"
	/>
      </div>

      <div className="flex flex-col">
	<div className="text-lg hover:underline font-medium truncate">
	  {name}
	</div>
	<div className="text-lg">
	  {formattedPrice}
	</div>

	<div className="flex gap-x-3">
	  {[...Array(5)].map((_, index) => (
	    <Image
	      key={index}
	      src="/Star.svg"
	      width={17}
	      height={17}
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
