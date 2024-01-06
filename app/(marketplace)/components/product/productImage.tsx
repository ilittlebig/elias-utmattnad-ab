import { IoIosArrowBack } from 'react-icons/io'
import Image from 'next/image'

const MainProductImage = () => {
  return (
    <div className="flex flex-col lg:px-4 gap-y-4 w-full lg:w-auto">
      <div className="flex lg:justify-between justify-center border px-2 items-center lg:w-[550px] h-screen max-h-[510px]">
	<div className="cursor-pointer hidden lg:block">
	  <IoIosArrowBack className="w-8 h-8 text-zinc-300 hover:text-primary" />
	</div>

        <div className="relative lg:w-[350px] w-[90%] h-full">
	  <Image
	    src="/rug1.png"
	    layout="fill"
	    objectFit="contain"
	    alt="Product Image"
	  />
	</div>

	<div className="cursor-pointer hidden lg:block">
	  <IoIosArrowBack className="w-8 h-8 text-zinc-300 hover:text-primary rotate-180" />
	</div>
      </div>
    </div>
  )
}

export default MainProductImage;
