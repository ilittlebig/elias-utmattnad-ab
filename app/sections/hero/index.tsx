import Image from 'next/image'
import Button from '@/components/button'

const HeroSection = () => {
  return (
    <>
      <div className="h-[384px]">
	<div className="absolute left-0 w-screen h-[384px]">

	  <Image
	    src="/hero.png"
	    layout="fill"
	    objectFit="cover"
	    alt="Hero"
	  />
	</div>

	<div className="flex h-[384px] items-center">
	  <div className="flex z-50 h-[200px] mx-auto justify-center">
	    <Image
	      src="/logoWhite.svg"
	      width={400}
	      height={50}
	      className="z-50 rounded-md px-6"
	      alt="Logo"
	    />
	  </div>
	</div>
      </div>

      <div className="flex py-32 px-4 lg:px-0">
	<div className="flex flex-col text-center mx-auto font-rockwell gap-y-6">
	  <h1 className="lg:text-5xl text-4xl font-bold">
	    Handgjort. Hållbart. Hemtrevligt
	  </h1>

	  <h2 className="max-w-4xl lg:text-2xl text-xl">
	    Upptäck en värld där varje matta är ett mästerverk - Handgjorda, unika, och med en personlig prägel. Välkommen till en plats där design möter passion.
	  </h2>

	  <Button
	    actionText="Gör Din Egen Design"
	    href="/"
	  />
	</div>
      </div>
    </>
  )
}

export default HeroSection;
