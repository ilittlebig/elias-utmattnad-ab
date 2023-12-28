import Image from 'next/image'

const MainProductImage = () => {
  return (
    <div className="flex flex-col px-4 gap-y-4 h-full">
      <div className="flex relative lg:w-[600px] h-screen items-center max-h-[600px]">
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

export default MainProductImage;
