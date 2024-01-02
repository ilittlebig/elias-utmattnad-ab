import Image from 'next/image'
import Link from 'next/link'
import currencyFormatter from '@/utils/currencyFormatter'

type ProductProps = {
  id: string,
  price: string,
  productName: string,
  rating: number,
  imagePath: string,
}

const ProductCard = ({
  id,
  price,
  productName,
  rating,
  imagePath
}: ProductProps) => {
  const formattedPrice = currencyFormatter(price, "SEK");

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
	  {productName}
	</div>
	<div className="text-lg">
	  {formattedPrice}
	</div>

	<div className="flex gap-x-3">
	  {[...Array(5)].map((_, index) => (
	    <Image
	      key={index}
	      src="/star.png"
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
