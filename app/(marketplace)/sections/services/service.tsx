import Image from 'next/image'

type ServiceProps = {
  title: string,
  description: string,
  path: string,
  index: number
}

const Service = ({ title, description, path, index }: ServiceProps) => {
  return (
    <div className="relative flex flex-col gap-y-8 hover:scale-105 border lg:w-[268px] w-full p-6 rounded-xl drop-shadow-card bg-white hover:border-primary transition-all duration-300">
      <div className="relative flex flex-col mx-auto w-full lg:h-[150px] h-[250px]">
	<Image
	  src={path}
	  fill
	  style={{ objectFit: "contain" }}
	  className="object-contain mx-auto"
	  alt="Service"
	/>
      </div>

      <div className="flex flex-col text-black gap-y-2">
        <div className="flex gap-x-2 items-center">
	  <div className="flex items-center justify-center rounded-full w-6 h-6 bg-black hidden">
	    <div className="text-white font-semibold text-sm">
	      {index}
	    </div>
	  </div>

	  <h1 className="text-md font-semibold">
	    {title}
	  </h1>
	</div>

	<h2 className="text-md font-semibold text-black text-opacity-60">
	  {description}
	</h2>
      </div>
    </div>
  )
}

export default Service;
