import Image from 'next/image'
import Button from '@/components/button'

const HeroSection = () => {
  return (
    <div className="pointer-events-none relative">
      {/* Right Side */}
      <div className="absolute w-[300px] h-[300px] top-[10%] right-[-20%] -z-10 lg:block hidden">
	<Image
	  src="/HeroRug1.png"
	  fill
	  style={{ objectFit: "contain" }}
	  alt="Rug"
	/>
      </div>

      <div className="absolute w-[300px] h-[300px] top-[100%] right-[-30%] -z-10 lg:block hidden">
	<Image
	  src="/HeroRug1.png"
	  fill
	  style={{ objectFit: "contain" }}
	  alt="Rug"
	/>
      </div>

      <div className="absolute w-[200px] h-[200px] top-[75%] right-[5%] -z-10 lg:block hidden">
	<Image
	  src="/HeroRug1.png"
	  fill
	  style={{ objectFit: "contain" }}
	  alt="Rug"
	/>
      </div>

      {/* Left Side */}
      <div className="absolute w-[300px] h-[300px] top-[10%] left-[-20%] -z-10 lg:block hidden">
	<Image
	  src="/HeroRug1.png"
	  fill
	  style={{ objectFit: "contain" }}
	  alt="Rug"
	/>
      </div>

      <div className="absolute w-[300px] h-[300px] top-[100%] left-[-30%] -z-10 lg:block hidden">
	<Image
	  src="/HeroRug1.png"
	  fill
	  style={{ objectFit: "contain" }}
	  alt="Rug"
	/>
      </div>

      <div className="absolute w-[200px] h-[200px] top-[75%] left-[5%] -z-10 lg:block hidden">
	<Image
	  src="/HeroRug1.png"
	  fill
	  style={{ objectFit: "contain" }}
	  alt="Rug"
	/>
      </div>

      <div className="flex items-center pt-[82px]">
        <div className="flex flex-col items-center text-center mx-auto gap-y-4">
	  <label className="font-semibold lg:text-base text-base text-center text-primary">
	    Välkommen till Elias Mattor
	  </label>

	  <div className="max-w-[585px] lg:text-h1 text-h1-small font-bold text-black mx-auto">
	    {/* Large Screens */}
	    <div className="lg:flex flex-wrap justify-center gap-x-1.5 gap-y-1 hidden">
	      Stil möter funktion, ge

	      <div className="relative">
		<div className="absolute lg:right-[-25%] right-[-37%] w-[38px] h-[38px] -mt-[11px] -z-10">
		  <Image
		    src="/Spark.svg"
		    width={38}
		    height={38}
		    style={{ objectFit: "contain" }}
		    alt="Spark"
		  />
		</div>
		ditt
	      </div>

	      hem värme

	      <div className="flex relative items-center justify-center">
		<div className="flex items-center justify-center absolute lg:w-[200px] w-[80px] h-[50px] -z-10">
		  <Image
		    src="/decorations/TextHighlight.svg"
		    fill
		    style={{ objectFit: "contain" }}
		    alt="Text Border"
		  />
		</div>
		med
	      </div>

	      våra mattor
	    </div>

	    {/* Small Screens */}
	    <div className="lg:hidden flex flex-col justify-center items-center gap-y-1">
	      <div className="flex gap-x-1.5">
		Stil &

		<div className="relative">
		  <div className="absolute right-[-22%] w-[38px] h-[38px] -mt-[8px] -z-10">
		    <Image
		      src="/Spark.svg"
		      width={38}
		      height={38}
		      style={{ objectFit: "contain" }}
		      alt="Spark"
		    />
		  </div>
		  värme
		</div>
	      </div>

	      <div className="flex gap-x-1.5">
		med

		<div className="flex relative items-center justify-center">
		  <div className="flex items-center justify-center absolute w-[75px] h-[50px] -z-10">
		    <Image
		      src="/decorations/TextHighlight.svg"
		      fill
		      style={{ objectFit: "contain" }}
		      alt="Text Border"
		    />
		  </div>
		  våra
		</div>

		mattor
	      </div>
	    </div>
	  </div>

	  <p className="text-base font-semibold text-black text-opacity-60 lg:max-w-[480px] max-w-[382px]">
	    Upptäck en värld där varje matta är ett mästerverk - Handgjorda, unika, och med en personlig prägel.
	  </p>

	  <div className="flex justify-center w-full pointer-events-auto">
	    <Button
	      actionText="Gör Din Egen Design"
	      href="/"
	    />
	  </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection;
