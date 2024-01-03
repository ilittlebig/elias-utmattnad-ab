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
      transition: { delay: custom * 0.25 }
    })
  };

  return (
    <div className="h-[1030px]">
      <div className="w-full relative">
	<div className="bg-[#F2796A] lg:flex hidden items-center justify-center absolute -right-[120px] rotate-[15deg] mt-[150px] w-[450px] h-[300px] rounded-[75px]">
	  <div className="relative w-[400px] h-[225px]">
	    <Image
	      src="/Illustration1.svg"
	      fill
	      style={{ objectFit: "contain" }}
	      alt="Vision"
	    />
	  </div>
	</div>
      </div>

      <div className="w-full relative">
	<div className="bg-[#7FB482] lg:flex hidden items-center justify-center absolute -left-[30px] -rotate-[15deg] mt-[190px] w-[350px] h-[220px] rounded-[50px]">
	  <div className="relative w-[400px] h-[175px]">
	    <Image
	      src="/Illustration3.svg"
	      fill
	      style={{ objectFit: "contain" }}
	      alt="Vision"
	    />
	  </div>
	</div>
      </div>

      <div className="w-full relative">
	<div className="bg-[#FFBB55] lg:flex hidden items-center justify-center absolute -left-[90px] rotate-[15deg] top-[550px] w-[450px] h-[300px] rounded-[75px]">
	  <div className="relative w-[400px] h-[225px]">
	    <Image
	      src="/Illustration4.svg"
	      fill
	      style={{ objectFit: "contain" }}
	      alt="Vision"
	    />
	  </div>
	</div>
      </div>

      <div className="w-full relative">
	<div className="bg-[#5D2B0E] lg:flex hidden items-center justify-center absolute -right-[-20px] -rotate-[15deg] top-[570px] w-[350px] h-[220px] rounded-[50px]">
	  <div className="relative w-[400px] h-[175px]">
	    <Image
	      src="/Illustration2.svg"
	      fill
	      style={{ objectFit: "contain" }}
	      alt="Vision"
	    />
	  </div>
	</div>
      </div>

      <motion.div
        className="flex px-4 -mt-[64px] h-full items-center lg:px-0"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="flex flex-col text-black items-center text-center mx-auto gap-y-8">
	  <div className="flex relative max-w-xl flex-wrap lg:flex-row font-rockwell justify-center lg:text-h1 text-3xl font-bold gap-x-3 mx-auto">
	    <motion.h1
	      variants={itemVariants}
	      custom={1}
	    >
	      <div className="absolute lg:left-[85px] left-[60px] lg:w-12 lg:h-12 w-10 h-10 lg:-mt-3 -mt-4 -z-10 bg-green-200 rounded-full" />
	      Tuftade
	    </motion.h1>

	    <motion.h2
	      variants={itemVariants}
	      custom={2}
	      className="relative"
	    >
	      <div className="absolute right-[-5%] w-[38px] h-[38px] -mt-[11px] -z-10">
		<Image
		  src="/Spark.svg"
		  width={38}
		  height={38}
		  style={{ objectFit: "contain" }}
		  alt="Spark"
		/>
	      </div>
	      Mattor,
	    </motion.h2>

	    <motion.h3
	      variants={itemVariants}
	      custom={3}
	    >
 	      Oändliga
	    </motion.h3>

	    <motion.h4
	      variants={itemVariants}
	      custom={4}
	      className="flex relative justify-center"
	    >
	      <div className="absolute w-[295px] h-[50px] -mt-[11px] -z-10">
		<Image
		  src="/TextBorder.svg"
		  width={295}
		  height={50}
		  style={{ objectFit: "fill" }}
		  alt="Vision"
		/>
	      </div>
	      Möjligheter
	    </motion.h4>
	  </div>

          <motion.p
            className="max-w-xl lg:text-lg text-lg font-medium"
            variants={itemVariants}
            custom={5}
          >
            Upptäck en värld där varje matta är ett mästerverk - Handgjorda, unika, och med en personlig prägel. Välkommen till en plats där design möter passion.
          </motion.p>

	  <div className="flex justify-center w-full">
	    <motion.div variants={itemVariants} custom={6}>
	      <Button
		actionText="Gör Din Egen Design"
		href="/"
	      />
	    </motion.div>
	  </div>
        </div>
      </motion.div>
    </div>
  )
}

export default HeroSection;
