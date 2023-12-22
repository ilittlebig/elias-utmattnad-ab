import Image from 'next/image'

const VisionSection = () => {
  return (
    <div className="h-[1851px] lg:h-[1011px]">
      <div className="absolute left-0 w-screen h-[1011px]">
	<Image
	  src="/vision.png"
	  layout="fill"
	  objectFit="cover"
	  alt="Vision"
	/>
      </div>

      <div className="relative flex pt-64 pb-48 z-10">
	<div className="flex flex-col mx-auto text-white text-center px-8 lg:px-0 gap-y-4 font-rockwell">
	  <h1 className="lg:text-5xl text-4xl font-bold">
	    Vår Vision:
	  </h1>

	  <h2 className="lg:text-4xl text-3xl max-w-sm">
	    Skapa unika mattor för varje hem
	  </h2>
	</div>
      </div>

      {/* Featured Rugs */}
      <div className="relative z-10">
	<div className="flex flex-col gap-y-12 lg:flex-row items-center justify-between">
	  <Image
	    src="/rug1.png"
	    width={316}
	    height={403}
	    alt="Rug1"
	  />

	  <Image
	    src="/rug2.png"
	    width={316}
	    height={403}
	    alt="Rug2"
	  />

	  <Image
	    src="/rug3.png"
	    width={316}
	    height={403}
	    alt="Rug3"
	  />
	</div>
      </div>
    </div>
  )
}

export default VisionSection
