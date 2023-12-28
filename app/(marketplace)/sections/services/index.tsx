"use client"
import { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import Service from './service'

const ServicesSection = () => {
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

  const serviceVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: i => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
    }),
  };

  const services = [
    {
      title: "Skapa Din Design",
      description: "Anpassa din matta efter din stil och dina önskemål.",
      image: "/rugService.png"
    },
    {
      title: "Hantverk av Kvalitet",
      description: "Varje matta är ett mästerverk, skapat med precision och omsorg.",
      image: "/qualityService.png"
    },
    {
      title: "Personlig Service",
      description: "Individuell kundservice för att uppfylla dina specifika behov.",
      image: "/supportService.png"
    },
    {
      title: "Snabb Leverans",
      description: "Effektiv och pålitlig leverans av din anpassade matta.",
      image: "/deliveryService.png"
    }
  ]

  return (
    <>
      <div className="flex py-32">
	<div className="flex flex-col text-center mx-auto font-rockwell px-4 lg-px0 gap-y-6">
	  <h1 className="lg:text-5xl text-4xl font-bold">
	    Våra Tjänster
	  </h1>

	  <h2 className="max-w-4xl lg:text-2xl text-xl">
	    Elias Omattnad AB specialiserar sig på premiumtjänster för skräddarsydda mattor, med fokus på kvalitet och kundanpassning.
	  </h2>
	</div>
      </div>

      <div className="h-[650px]">
	<div className="absolute left-0 w-screen h-[457px]">
	  <Image
	    src="/services.png"
	    layout="fill"
	    objectFit="cover"
	    alt="Hero"
	  />
	</div>

	<motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          className="flex flex-col lg:flex-row relative top-[60%] left-0 right-0 rounded-xl bg-white w-full pt-6 font-rockwell gap-y-32 lg:justify-between px-4 z-10"
        >
          {services.map((service, index) => (
            <motion.div key={service.title} custom={index} variants={serviceVariants}>
              <Service
                title={service.title}
                description={service.description}
                path={service.image}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  )
}

export default ServicesSection;
