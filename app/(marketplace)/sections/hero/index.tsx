"use client"
import { motion } from 'framer-motion'
import Image from 'next/image'
import Button from '@/components/button'

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: custom * 0.1 }
    })
  };

  return (
    <div className="pointer-events-none relative">
      {/* Right Side */}
      <div className="absolute w-[300px] h-[300px] top-[10%] right-[-20%] -z-10">
	<Image
	  src="/HeroRug1.png"
	  fill
	  style={{ objectFit: "contain" }}
	  alt="Rug"
	/>
      </div>

      <div className="absolute w-[300px] h-[300px] top-[100%] right-[-30%] -z-10">
	<Image
	  src="/HeroRug1.png"
	  fill
	  style={{ objectFit: "contain" }}
	  alt="Rug"
	/>
      </div>

      <div className="absolute w-[200px] h-[200px] top-[75%] right-[5%] -z-10">
	<Image
	  src="/HeroRug1.png"
	  fill
	  style={{ objectFit: "contain" }}
	  alt="Rug"
	/>
      </div>

      {/* Left Side */}
      <div className="absolute w-[300px] h-[300px] top-[10%] left-[-20%] -z-10">
	<Image
	  src="/HeroRug1.png"
	  fill
	  style={{ objectFit: "contain" }}
	  alt="Rug"
	/>
      </div>

      <div className="absolute w-[300px] h-[300px] top-[100%] left-[-30%] -z-10">
	<Image
	  src="/HeroRug1.png"
	  fill
	  style={{ objectFit: "contain" }}
	  alt="Rug"
	/>
      </div>

      <div className="absolute w-[200px] h-[200px] top-[75%] left-[5%] -z-10">
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

	  <div className="flex max-w-[585px] flex-wrap lg:flex-row justify-center lg:text-h1 text-3xl font-bold gap-x-1.5 gap-y-1 text-black mx-auto">
	    Stil möter funktion, ge

	    <div className="relative">
	      <div className="absolute right-[-25%] w-[38px] h-[38px] -mt-[11px] -z-10">
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

	    <div className="flex relative justify-center">
	      <div className="flex items-center justify-center absolute w-[200px] h-[50px] -z-10">
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

	  <p className="lg:text-base text-base font-semibold text-black text-opacity-60 max-w-[480px]">
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
