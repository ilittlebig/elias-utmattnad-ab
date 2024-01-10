"use client"
import { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'

type StoryProps = {
  image: string,
  title: string,
  description: string,
  leftSideText?: boolean
};

const Story = ({ image, title, description, leftSideText }: StoryProps) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-150px 0px"
  });

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

  const variants = {
    hidden: { x: leftSideText ? 200 : -200, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.8 } }
  };

  return (
    <div className={`flex ${leftSideText ? "flex-row-reverse" : ""} justify-center gap-x-28`}>
      <motion.div
        ref={ref}
	animate={controls}
	initial="hidden"
	variants={variants}
        className="relative w-[450px] h-[450px]"
       >
	<Image
	  src={image}
	  fill
	  style={{ objectFit: "contain" }}
	  className="rounded-md"
	  alt="Image"
	/>
      </motion.div>

      <div className="flex flex-col gap-y-12 w-[450px] text-black">
	<label className="relative text-[22px] font-semibold w-fit">
	  <div className="absolute right-[-22px] w-[38px] h-[38px] -mt-[14px]">
	    <Image
	      src="/Spark.svg"
	      width={38}
	      height={38}
	      style={{ objectFit: "contain" }}
	      alt="Spark"
	    />
	  </div>
	  {title}
	</label>

	<label className="text-lg leading-8">
	  {description}
	</label>
      </div>
    </div>
  )
}

export default Story;
