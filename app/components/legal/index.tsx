import Image from 'next/image'
import Term from './term'

type LegalProps = {
  title: string,
  legalities: Legality[],
  imagePath: string
}

const Legal = ({ title, legalities, imagePath}: LegalProps) => {
  return (
    <>
      <div className="h-[384px]">
	<div className="absolute left-0 w-screen h-[384px]">
	  <Image
	    src={imagePath}
	    layout="fill"
	    objectFit="cover"
	    alt="Hero"
	  />
	</div>
      </div>

      <div className="flex py-32 px-4 lg:px-0 max-w-3xl mx-auto">
	<div className="flex flex-col text-center lg:text-left mx-auto font-rockwell gap-y-12">
	  <h1 className="lg:text-5xl text-4xl font-bold text-center">
	    {title}
	  </h1>

	  {legalities.map((term) => (
	    <Term
	      title={term.title}
	      description={term.description}
	    />
	  ))}
	</div>
      </div>
    </>
  )
}

export default Legal;
