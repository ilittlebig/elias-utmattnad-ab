import { FaArrowRight } from 'react-icons/fa6'
import Image from 'next/image'
import Button from '@/components/button'

type ReadMoreProps = {
   title: string,
   description: string,
   rightDecoration?: boolean
};

const ReadMoreSection = ({ title, description, rightDecoration }: ReadMoreProps) => {
  return (
    <div className="relative h-[310px]">
      <div className="absolute h-[310px] bg-[#FCFCFE] z-10"
	style={{
	  left: "50%",
	  right: "50%",
	  transform: "translateX(-50%)",
	  width: "100vw"
	}}
      />

      <div className="flex h-full items-center">
        {!rightDecoration ? (
	  <div className="absolute -scale-x-100 left-[-8%] top-[-2%] w-[150px] h-[150px] -mt-[11px] z-40">
	    <Image
	      src="/Spark.svg"
	      width={150}
	      height={150}
	      style={{ objectFit: "contain" }}
	      alt="Spark"
	    />
	  </div>
	) : (
	  <div className="absolute right-[-7.25%] top-[0%] w-[150px] h-[150px] -mt-[11px] z-40">
	    <Image
	      src="/Spark.svg"
	      width={150}
	      height={150}
	      style={{ objectFit: "contain" }}
	      alt="Spark"
	    />
	  </div>
	)}

	<div className="relative overflow-hidden bg-white pt-7 pb-10 px-10 rounded-3xl drop-shadow-card relative flex w-full items-center z-20">
	  <div className="flex flex-col gap-y-6 w-full">
	    <label className="text-2xl font-semibold text-black">
	      {title}
	    </label>

	    <div className="flex justify-between pr-1">
	      <label className="text-lg max-w-xl opacity-40 font-medium">
	        {description}
	      </label>

	      <Button
		actionText="Läs Mer"
		noBackground
		className="border-2 px-8 py-2 shadow-sm z-20"
		icon={<FaArrowRight className="text-primary" />}
	      />
	    </div>

	    <div className="absolute right-0">
	      <Image
		src="/IceTexture.svg"
		width={293}
		height={179}
		alt="Ice Texture"
	      />
	    </div>

	    <div className="absolute right-[23%] top-[20%] flex flex-col gap-y-3">
	      <div className="flex gap-x-3">
		{[...Array(5)].map((_, index) => (
		  <div className="w-[5px] h-[5px] bg-primary rounded-full" />
		))}
	      </div>

	      <div className="flex gap-x-3">
		{[...Array(5)].map((_, index) => (
		  <div className="w-[5px] h-[5px] bg-primary rounded-full" />
		))}
	      </div>
	    </div>
	  </div>
	</div>
      </div>
    </div>
  )
}

export default ReadMoreSection;
