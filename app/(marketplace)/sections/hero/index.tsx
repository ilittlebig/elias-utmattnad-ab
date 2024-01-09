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
    <div className="h-[1030px] pointer-events-none relative">
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

      <div className="absolute w-[150px] h-[45px] top-[86%] right-[-12%] -z-10">
        <div className="flex flex-col gap-y-2 relative items-center">
	  <label className="absolute text-[#000000] font-semibold rotate-[30deg] text-lg right-[-3%] bottom-[5px]">
	    Skrolla Ner
	  </label>

	  <div className="absolute top-0 rotate-[-6deg]">
	    <Image
	      src="/SquigglyArrow.svg"
	      width={45}
	      height={45}
	      style={{ objectFit: "contain" }}
	      alt="Squiggly Arrow"
	    />
	  </div>
	</div>
      </div>

      <div className="absolute w-[38px] h-[38px] top-[70%] right-[35%] -z-10">
	<Image
	  src="/decorations/OrangeSwirl.svg"
	  width={38}
	  height={38}
	  style={{ objectFit: "contain" }}
	  alt="Orange Swirl"
	/>
      </div>

      <div className="absolute w-[38px] h-[38px] top-[25%] right-[108%] -z-10 rotate-90">
	<Image
	  src="/decorations/PurpleCircle.svg"
	  width={38}
	  height={38}
	  style={{ objectFit: "contain" }}
	  alt="Purple Circle"
	/>
      </div>

      <div className="absolute w-[70px] h-[70px] top-[13%] right-[-10%] -z-10">
	<Image
	  src="/decorations/OrangeArrow.svg"
	  width={70}
	  height={70}
	  style={{ objectFit: "contain" }}
	  alt="Orange Arrow"
	/>
      </div>

      <div className="absolute w-[20px] h-[20px] top-[26%] right-[40%] -z-10">
	<Image
	  src="/decorations/RedPlus.svg"
	  width={20}
	  height={20}
	  style={{ objectFit: "contain" }}
	  alt="Red Plus"
	/>
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
		  alt="Text Border"
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

	  <div className="flex justify-center w-full pointer-events-auto">
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
