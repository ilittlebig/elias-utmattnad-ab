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
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
    }),
  };

  const services = [
    {
      title: "Skapa Din Design",
      description: "Anpassa din matta efter din stil och dina önskemål.",
      image: "/designIllustration.svg",
      bgColor: "bg-green-200"
    },
    {
      title: "Hantverk av Kvalitet",
      description: "Varje matta är ett mästerverk, skapat med precision och omsorg.",
      image: "/Illustration3.svg",
      bgColor: "bg-purple-200"
    },
    {
      title: "Personlig Service",
      description: "Individuell kundservice för att uppfylla dina specifika behov.",
      image: "/supportIllustration.svg",
      bgColor: "bg-blue-200"
    },
    {
      title: "Snabb Leverans",
      description: "Effektiv och pålitlig leverans av din anpassade matta.",
      image: "/Illustration2.svg",
      bgColor: "bg-red-200"
    }
  ]

  return (
    <>
      <div className="flex pb-0 lg:pt-32 pt-44">
	<div className="flex flex-col text-black items-center text-center mx-auto px-4 lg-px:0 gap-y-6">
	  <h1 className="relative lg:text-h1 font-rockwell text-3xl font-bold w-fit">
	    <div className="absolute left-[-14px] w-12 h-12 -mt-3 -z-10 bg-blue-200 rounded-full" />
	    Utforska Våra Tjänster
	  </h1>

	  <h2 className="max-w-3xl lg:text-lg text-lg font-medium">
	    Utforska våra tjänster och upptäck en värld av skräddarsydda mattlösningar. Varje design är unik, skapad med hantverksskicklighet för att förhöja och personifiera ditt hem eller arbetsplats.
	  </h2>
	</div>
      </div>

      <div>
	<motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          className="flex lg:flex-row flex-col justify-center pt-24 relative left-0 right-0 rounded-xl bg-white w-full pt-6 gap-y-16 gap-x-8 px-4 z-10"
        >
          {services.map((service, index) => (
            <motion.div key={service.title} custom={index} variants={serviceVariants}>
              <Service
                title={service.title}
                description={service.description}
                path={service.image}
                bgColor={service.bgColor}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  )
}

export default ServicesSection;
