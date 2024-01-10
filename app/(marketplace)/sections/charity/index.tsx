"use client"
import { useEffect, useState, useRef } from 'react'
import { useInView } from 'react-intersection-observer'
import gsap from 'gsap'
import Image from 'next/image'

const CharitySection = () => {
  const targetNumber = 241566;
  const numDigits = targetNumber.toString().length;
  const digitContainers = useRef<HTMLDivElement[]>([]);

  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "-100px 0px"
  });

  const animateDigits = () => {
    const targetDigits = String(targetNumber).padStart(numDigits, "0").split("").map(Number);

    digitContainers.current.forEach((container, index) => {
      const digits = Array.from(container.children) as HTMLElement[];
      const numStackHeight = digits[0].offsetHeight;

      const finalDigit = targetDigits[index];
      const finalYPosition = -(10 + finalDigit) * numStackHeight;
      const centerDigitIndex = 10 + finalDigit;

      gsap.to(container, {
	y: finalYPosition,
	duration: 2.5,
	ease: "power1.out",
      });

      digits.forEach((digit, digitIndex) => {
	const isCenterDigit = digitIndex === centerDigitIndex;
	const opacity = isCenterDigit ? 1 : 0.1;

	gsap.to(digit, {
	  opacity: opacity,
	  duration: 2.5,
	  ease: "power1.out",
	});
      });
    });
  };

  useEffect(() => {
    if (inView) animateDigits();
  }, [inView]);

  return (
    <div ref={ref} className="py-36">
      <div className="flex">
	<div className="flex flex-col text-black items-center text-center mx-auto px-4 lg-px:0 gap-y-6">
	  <label className="font-semibold lg:text-lg text-lg text-center text-primary">
	    HJÄLP ATT HJÄLPA
	  </label>

	  <h1 className="flex gap-x-2.5 relative lg:text-h1 font-rockwell text-3xl font-bold w-fit">
	    Ditt
	    <div className="flex relative items-center justify-center">
	      Köp
	      <div className="absolute w-[105px] h-[70px] -mt-[17px] -z-10">
		<Image
		  src="/decorations/TextHighlight.svg"
		  fill
		  alt="Text Highlight"
		/>
	      </div>
	    </div>
	    Stödjer Diabetesforskning
	  </h1>

	  <h2 className="max-w-3xl lg:text-lg text-lg font-medium">
	    Varje designad matta bär ett löfte – 10% av ditt köp hjälper till att finansiera banbrytande diabetesforskning, för en värld med bättre hälsa. Tillsammans kan vi stödja hjälpmedel för diabetes.
	  </h2>
	</div>
      </div>

	<div className="flex flex-col items-center gap-y-10 pt-10">
	  <div className="flex gap-x-12 font-medium">
	    {Array.from({ length: numDigits }).map((_, index) => (
	      <div key={index} className="relative flex bg-white drop-shadow-card transition-border duration-300 border-2 border-transparent hover:border-primary text-7xl w-24 h-32 items-center justify-center text-center rounded-xl overflow-hidden">
		<div
		  ref={el => {
		    if (el) digitContainers.current[index] = el
		  }}
		  className="absolute top-[25%] left-0 h-full w-full flex flex-col items-center justify-start"
		>
		  {Array.from({ length: 20 }).map((_, numIndex) => (
		    <div key={numIndex} className="h-full w-full flex items-center justify-center text-black">{numIndex % 10}</div>
		  ))}
		</div>
	      </div>
	    ))}
	  </div>

	  <label className="text-lg text-black font-medium">
	    Kronor donerade till diabetesforskning
	  </label>
	</div>
    </div>
  )
}

export default CharitySection;
