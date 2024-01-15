"use client"
import { useEffect, useRef, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { gsap } from 'gsap'

interface AchievementProps {
  title: string;
  number: number;
  suffix: string;
};

const Achievement = ({ title, number, suffix }: AchievementProps) => {
  const [displayNumber, setDisplayNumber] = useState<number>(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-100px 0px"
  });
  const numberRef = useRef<HTMLLabelElement>(null);

  useEffect(() => {
    if (!inView || !numberRef.current)
      return;

    const element = numberRef.current as HTMLElement;

    gsap.to(element, {
      duration: 2,
      ease: "power3.out",
      innerHTML: number,
      snap: { innerHTML: 1 },
      onUpdate: () => {
	if (!element) return;
	const numericValue = parseInt(element.innerHTML, 10);
	setDisplayNumber(numericValue);
      }
    });
  }, [number, inView]);

  return (
    <div ref={ref} className="flex flex-col">
      <div className="flex">
	<label ref={numberRef} className="text-4xl text-black font-semibold">
	  {displayNumber}
	</label>
	<label className="text-4xl text-black font-semibold">
	  {suffix}
	</label>
      </div>

      <label className="text-md text-black font-semibold">
        {title}
      </label>
    </div>
  )
}

export default Achievement;
