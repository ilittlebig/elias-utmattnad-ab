import Image from 'next/image'

const ProductImages = () => {
  return (
    <div className="lg:flex flex-col gap-y-2 w-full max-w-[370px] hidden">
      {[...Array(5)].map((_, index) => (
	<div key={index} className="flex items-center justify-center border cursor-pointer w-[90px] h-[90px]">
	  <div key={index} className="relative w-[80px] h-[80px]">
	    <Image
	      src="/rug1.png"
	      fill
	      style={{ objectFit: "contain" }}
	      className="opacity-50 hover:opacity-100"
	      alt="Product Image"
	    />
	  </div>
	</div>
      ))}
    </div>
  )
}

export default ProductImages;
