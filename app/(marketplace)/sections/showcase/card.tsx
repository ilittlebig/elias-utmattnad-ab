"use client"
import { useEffect, useRef } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { IoIosCheckmarkCircle } from 'react-icons/io'
import gsap from 'gsap'
import Image from 'next/image'

gsap.registerPlugin(ScrollTrigger);

type CardProps = {
  title: string,
  description: string,
  imagePath: string,
  subTexts?: string[],
  way?: string
}

const Card = ({
  title,
  description,
  imagePath,
  subTexts,
  way = "right"
}: CardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isRight = way === "right";

  useEffect(() => {
    if (ref.current) {
      gsap.fromTo(ref.current,
        { opacity: 0, x: isRight ? 50 : -50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.75,
          scrollTrigger: {
            trigger: ref.current,
            start: "top bottom-=100",
            toggleActions: "play none none none"
          }
        }
      );
    }
  }, [isRight]);

  return (
    <div ref={ref} className={`flex flex-col gap-y-12 lg:flex-row px-6 lg:px-0 justify-between flex-col-reverse ${isRight ? '' : 'lg:flex-row-reverse'}`}>
      <div className="flex-col max-w-lg flex justify-center gap-y-8">
	<div className="flex flex-col gap-y-4">
	  <h1 className="relative lg:text-h1 text-h1-small text-black font-bold w-fit">
	    <div className="absolute lg:-scale-x-100 lg:left-[-9%] right-[-9%] top-[-30%] lg:top-[-18%] lg:w-[50px] lg:h-[50px] w-[45px] h-[45px] lg:-mt-[11px] -z-10">
	      <Image
		src="/Spark.svg"
		width={50}
		height={50}
		style={{ objectFit: "contain" }}
		alt="Spark"
	      />
	    </div>

	    {title}
	  </h1>

	  <h2 className="lg:max-w-2xl max-w-[382px] text-base font-semibold text-black text-opacity-60">
	    {description}
	  </h2>
	</div>

	<div className="flex flex-col gap-y-2">
	  {subTexts?.map((text, index) => (
	    <div key={index} className="flex gap-x-4 items-center">
	      <IoIosCheckmarkCircle className="text-primary w-8 h-8" />
	      <label className="font-semibold text-base text-black text-opacity-60">
	        {text}
	      </label>
	    </div>
	  ))}
	</div>
      </div>

      <div className="relative lg:w-1/2 h-64 lg:h-[480px]">
        <div className={`lg:absolute ${isRight ? "left-[15%]" : "right-[15%]"} lg:w-[720px] lg:h-[480px] w-full h-full`}>
          <Image
            src={imagePath}
            fill
            style={{ objectFit: "cover" }}
            className="rounded-md"
            alt="Content Description"
          />
        </div>
      </div>
    </div>
  )
}

export default Card;
