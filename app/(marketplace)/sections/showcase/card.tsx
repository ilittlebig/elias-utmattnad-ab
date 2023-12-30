import Image from 'next/image'

type CardProps = {
  title: string,
  description: string,
  imagePath: string,
  way?: string
}

const Card = ({ title, description, imagePath, way = "right" }: CardProps) => {
  const isRight = way == "right";

  return (
    <div className={`flex flex-col lg:gap-y-0 gap-y-12 lg:flex-row ${isRight ? '' : 'lg:flex-row-reverse'}`}>
      <div className="flex justify-center w-full lg:hidden">
	<div className="flex flex-col max-w-xl justify-center gap-y-6 text-center lg:text-left lg:px-0 px-4">
	  <h1 className="lg:text-5xl text-4xl font-bold">{title}</h1>
	  <h2 className="max-w-4xl lg:text-2xl text-xl">{description}</h2>
	</div>
      </div>

      <div className="flex-col max-w-xl hidden lg:flex justify-center gap-y-6 text-center lg:text-left lg:px-0 px-4">
	<h1 className="lg:text-5xl text-4xl font-bold">{title}</h1>
	<h2 className="max-w-4xl lg:text-2xl text-xl">{description}</h2>
      </div>

      <div className="relative lg:w-1/2 relative h-64 lg:h-[480px] lg:w-[720px]">
	<div className={`
	    lg:absolute ${isRight ? 'lg:right-[-50%]' : 'lg:left-[-50%]'}
	    lg:top-1/2
	    lg:transform
	    lg:-translate-y-1/2
	    lg:w-[720px]
	    lg:h-[480px]
	  `}>
	  <Image
	    src={imagePath}
	    fill
	    style={{ objectFit: "cover" }}
	    className="rounded-md"
	    alt="Content Description"
	  />
	</div>
      </div>
    </div>
  )
}

export default Card;
