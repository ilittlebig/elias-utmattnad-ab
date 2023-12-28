import Image from 'next/image'

const ProductImages = () => {
  return (
    <div className="flex flex-wrap justify-center gap-y-12 lg:justify-between w-full py-8 pb-24">
      <div className="relative w-[370px] h-[370px]">
	<Image
	  src="/rug1.png"
	  layout="fill"
	  objectFit="contain"
	  alt="Product Image"
	/>
      </div>
      <div className="relative w-[370px] h-[370px]">
	<Image
	  src="/rug1.png"
	  layout="fill"
	  objectFit="contain"
	  alt="Product Image"
	/>
      </div>
      <div className="relative w-[370px] h-[370px]">
	<Image
	  src="/rug1.png"
	  layout="fill"
	  objectFit="contain"
	  alt="Product Image"
	/>
      </div>
      <div className="relative w-[370px] h-[370px]">
	<Image
	  src="/rug1.png"
	  layout="fill"
	  objectFit="contain"
	  alt="Product Image"
	/>
      </div>
    </div>
  )
}

export default ProductImages;
