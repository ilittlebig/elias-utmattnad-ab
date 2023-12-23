"use client"
import Image from 'next/image'
import { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const VisionSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-100px 0px"
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const rugVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: i => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
    }),
  };

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
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        className="relative z-10"
      >
        <div className="flex flex-col gap-y-12 lg:flex-row items-center justify-between">
          {[...Array(3).keys()].map(i => (
            <motion.div
              key={`rug-${i}`}
              custom={i}
              variants={rugVariants}
            >
              <Image
                src={`/rug${i + 1}.png`}
                width={316}
                height={403}
                alt={`Rug${i + 1}`}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

export default VisionSection
