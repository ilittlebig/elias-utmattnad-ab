"use client"
import { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'

type CardProps = {
  title: string,
  description: string,
  imagePath: string,
  way?: string
}

const Card = ({
  title,
  description,
  imagePath,
  way = "right"
}: CardProps) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-100px 0px"
  });
  const isRight = way === "right";

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const variants = {
    hidden: { opacity: 0, x: 0 }, // isRight ? 50 : -50 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <div ref={ref} className={`flex flex-col lg:gap-y-0 gap-y-12 lg:flex-row ${isRight ? '' : 'lg:flex-row-reverse'}`}>
      <div className="flex justify-center w-full lg:hidden">
	<div className="flex flex-col text-black max-w-xl justify-center items-center gap-y-6 text-center px-4">
	  <h1 className="relative text-3xl font-rockwell font-bold w-fit">
	    <div className="absolute left-[-15px] w-12 h-12 lg:-mt-4 -mt-3 -z-10 bg-blue-200 rounded-full" />
	    {title}
	  </h1>
	  <h2 className="max-w-4xl text-lg font-medium">
	    {description}
	  </h2>
	</div>
      </div>

      <div className="flex-col max-w-xl text-black hidden lg:flex justify-center gap-y-6">
	<h1 className="relative lg:text-h1 font-rockwell font-bold">
	  <div className="absolute left-[-14px] w-12 h-12 -mt-3 -z-10 bg-purple-200 rounded-full" />
	  {title}
	</h1>
	<h2 className="max-w-4xl lg:text-lg text-lg font-medium">
	  {description}
	</h2>
      </div>

      <motion.div
        className="relative lg:w-1/2 h-64 lg:h-[480px] lg:w-[720px]"
        initial="hidden"
        animate={controls}
        variants={variants}
        transition={{ duration: 0.75 }}
      >
        <div className={`lg:absolute ${isRight ? 'lg:right-[-50%]' : 'lg:left-[-50%]'} lg:top-1/2 lg:transform lg:-translate-y-1/2 lg:w-[720px] lg:h-[480px]`}>
          <Image
            src={imagePath}
            fill
            style={{ objectFit: "cover" }}
            className="rounded-md"
            alt="Content Description"
          />
        </div>
      </motion.div>
    </div>
  )
}

export default Card;
