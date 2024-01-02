import Image from 'next/image'

type ServiceProps = {
  title: string,
  description: string,
  path: string,
  bgColor: string
}

const Service = ({ title, description, path, bgColor }: ServiceProps) => {
  return (
    <div className={`flex flex-col text-center gap-y-6`}>
      <div className="relative flex flex-col mx-auto w-full h-[150px]">
	<Image
	  src={path}
	  fill
	  style={{ objectFit: "contain" }}
	  className="object-contain mx-auto"
	  alt="Service"
	/>
      </div>

      <div className="flex flex-col text-black gap-y-4 justify-center">
	<h1 className="text-2xl font-bold">{title}</h1>
	<h2 className="text-lg font-medium text-zinc-600">{description}</h2>
      </div>
    </div>
  )
}

export default Service;
