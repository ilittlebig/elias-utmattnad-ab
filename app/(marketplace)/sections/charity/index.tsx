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
    rootMargin: "0px 0px"
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
	const opacity = isCenterDigit ? 1 : 0.05;

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
    <div className="relative flex flex-col gap-y-16 pt-[130px]">
      <div className="absolute w-[500px] h-[500px] top-[25%] left-[-45%] -z-10 hidden lg:block">
	<Image
	  src="/HeroRug1.png"
	  fill
	  style={{ objectFit: "contain" }}
	  alt="Rug"
	/>
      </div>

      <div className="flex flex-col text-black items-center text-center mx-auto px-4 lg-px:0 gap-y-4">
	<label className="font-semibold text-md text-center text-primary">
	  Hjälp att hjälpa
	</label>

	<div className="flex flex-col items-center gap-y-4">
	  <h1 className="max-w-[480px] flex gap-x-1.5 relative lg:text-h1 text-h1-small font-bold w-fit">
	    Ditt köp stödjer diabetesforskning
	  </h1>

	  <h2  className="max-w-[480px] max-w-[382px] text-md font-semibold text-black text-opacity-60">
	    Varje designad matta bär ett löfte – 10% av ditt köp hjälper till att finansiera banbrytande diabetesforskning.
	  </h2>
	</div>
      </div>

      <div ref={ref} className="flex justify-center">
	<div className="flex gap-x-12 font-medium">
	  {Array.from({ length: numDigits }).map((_, index) => (
	    <div key={index} className="relative flex bg-white drop-shadow-card hover:scale-110 transition-all duration-300 border hover:border-primary text-7xl w-24 h-32 items-center justify-center text-center rounded-xl overflow-hidden">
	      <div
		ref={el => {
		  if (el) digitContainers.current[index] = el
		}}
		className="absolute top-[22.5%] left-0 h-full w-full flex flex-col items-center justify-start"
	      >
		{Array.from({ length: 20 }).map((_, numIndex) => (
		  <div key={numIndex} className="h-full w-full flex items-center justify-center text-black">{numIndex % 10}</div>
		))}
	      </div>
	    </div>
	  ))}
	</div>
      </div>

      <label className="text-base text-black font-semibold text-center text-opacity-60">
	Kronor donerade till diabetesforskning
      </label>
    </div>
  )
}

export default CharitySection;
