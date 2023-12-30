"use client"
import Image from 'next/image'
import Button from '@/components/button'
import { motion } from 'framer-motion'

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: { delay: custom * 0.25 }
    })
  };

  return (
    <>
      <div className="h-[250px] lg:h-[384px]">
	<div className="absolute left-0 w-screen h-[250px] lg:h-[384px]">
	  <Image
	    src="/hero.png"
	    layout="fill"
	    objectFit="cover"
	    alt="Hero"
	  />
	</div>

	{/* This is unused */}
	<div className="flex h-[384px] items-center hidden">
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

      <motion.div
        className="flex py-32 px-4 lg:px-0"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="flex flex-col text-center mx-auto font-rockwell gap-y-4">
	  <div className="flex flex-wrap lg:flex-row justify-center lg:text-5xl text-4xl font-bold gap-x-3 mx-auto">
	    <motion.h1
	      variants={itemVariants}
	      custom={1}
	    >
	      Handgjort.
	    </motion.h1>

	    <motion.h2
	      variants={itemVariants}
	      custom={2}
	    >
	      Hållbart.
	    </motion.h2>

	    <motion.h3
	      variants={itemVariants}
	      custom={3}
	    >
	      Hemtrevligt
	    </motion.h3>
	  </div>

          <motion.p
            className="max-w-4xl lg:text-2xl text-xl"
            variants={itemVariants}
            custom={4}
          >
            Upptäck en värld där varje matta är ett mästerverk - Handgjorda, unika, och med en personlig prägel. Välkommen till en plats där design möter passion.
          </motion.p>

	  <div className="flex justify-center w-full">
	    <motion.div variants={itemVariants} custom={5}>
	      <Button
		actionText="Gör Din Egen Design"
		href="/"
	      />
	    </motion.div>
	  </div>
        </div>
      </motion.div>
    </>
  )
}

export default HeroSection;
