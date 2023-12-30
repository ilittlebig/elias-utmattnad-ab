import Image from 'next/image'

type ServiceProps = {
  title: string,
  description: string,
  path: string
}

const Service = ({ title, description, path }: ServiceProps) => {
  return (
    <div className="flex flex-col px-3 text-center gap-y-6 items-center -mt-20 ">
      <div className="flex bg-white h-32 w-32 rounded-full border-2 border-black">
        <div className="flex flex-col mx-auto my-auto relative h-[80px] w-[80px]">
	  <Image
	    src={path}
	    fill
	    style={{ objectFit: "contain" }}
	    className="object-contain mx-auto"
	    alt="Service"
	  />
	</div>
      </div>

      <h1 className="text-2xl font-bold">{title}</h1>
      <h2 className="text-lg">{description}</h2>
    </div>
  )
}

export default Service;
