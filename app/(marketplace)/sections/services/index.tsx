"use client"
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'
import Service from './service'

gsap.registerPlugin(ScrollTrigger);

const ServicesSection = () => {
  const services = [
    {
      title: "Egen Design",
      description: "Anpassa din matta efter din stil och dina önskemål.",
      image: "/designIllustration.svg",
    },
    {
      title: "Hantverk av Kvalitet",
      description: "Varje matta är ett mästerve, skapat med karakt.",
      image: "/Illustration3.svg",
    },
    {
      title: "Personlig Service",
      description: "Individuell kundservice för att uppfylla dina specifika.",
      image: "/supportIllustration.svg",
    },
    {
      title: "Snabb Leverans",
      description: "Effektiv och pålitlig leverans av din anpassade matta.",
      image: "/Illustration2.svg",
    }
  ];

  const sectionRef = useRef(null);
  const serviceRefs = useRef<HTMLDivElement[] | null>([]);
  serviceRefs.current = [];

  const addToRefs = (el: HTMLDivElement | null) => {
    const serviceRef = serviceRefs.current;
    if (!serviceRef)
      return;

    if (el && !serviceRef.includes(el)) {
      serviceRef.push(el);
    }
  };

  useEffect(() => {
    serviceRefs.current?.forEach((el, index) => {
      gsap.fromTo(el,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "easeOut",
          delay: index * 0.2,
          scrollTrigger: {
            trigger: el,
            start: "top bottom-=100",
            toggleActions: "play none none none",
          },
        }
      );
    });
  }, []);

  return (
    <div className="pt-[60px] min-h-[640px]">
      <div className="absolute left-0 right-0 bg-gray-50 lg:h-[680px] h-[2085px]" />
      <div className="relative flex flex-col gap-y-16 pt-[100px]">
	<div className="absolute w-[70px] h-[70px] top-[16%] left-[26%] -scale-x-100 -z-10">
	  <Image
	    src="/decorations/OrangeArrow.svg"
	    fill
	    style={{ objectFit: "contain" }}
	    alt="Orange Arrow"
	  />
	</div>

	<div className="flex flex-col text-black items-center text-center mx-auto px-6 lg-px:0 gap-y-4">
	  <label className="font-semibold lg:text-base text-base text-center text-primary">
	    Våra tjänster
	  </label>

	  <h1 className="flex gap-x-1.5 relative lg:text-h1 text-h1-small font-bold max-w-xs lg:max-w-full flex-wrap z-20 lg:flex-nowrap justify-center lg:justify-start w-fit">
	    Service <p className="underline">utöver</p> det

	    <div className="flex relative justify-center items-center">
	      vanliga
	      <div className="absolute lg:w-[160px] w-[130px] h-[45px] -z-10">
		<Image
		  src="/TextBorder4.svg"
		  fill
		  style={{ objectFit: "contain" }}
		  alt="Text Border"
		/>
	      </div>
	    </div>
	  </h1>
	</div>

	<div ref={sectionRef} className="flex lg:flex-row flex-col items-center justify-center relative left-0 right-0 rounded-xl w-full gap-4 px-6 lg:px-4 z-10">
	  {services.map((service, index) => (
	    <div key={service.title} ref={addToRefs}>
	      <Service
		title={service.title}
		description={service.description}
		path={service.image}
		index={index + 1}
	      />
	    </div>
	  ))}
	</div>
      </div>
    </div>
  )
}

export default ServicesSection;
