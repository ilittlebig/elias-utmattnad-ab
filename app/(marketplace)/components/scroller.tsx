"use client"
import { useRef, useEffect, ReactNode } from 'react'
import gsap from 'gsap'

interface ScrollerProps {
  children: ReactNode;
  speed?: number;
  hoverSpeed?: number;
  direction?: string;
}

const Scroller = ({
  children,
  speed = 60,
  hoverSpeed = 120,
  direction = "right"
}: ScrollerProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<gsap.core.Tween>();

  useEffect(() => {
    if (containerRef.current) {
      const totalWidth = containerRef.current.scrollWidth / 2;
      animationRef.current = gsap.to(containerRef.current, {
        x: () => direction === "right" ? totalWidth : -totalWidth,
        ease: "none",
        duration: speed,
        repeat: -1
      });
    }

    return () => {
      animationRef.current?.kill();
    };
  }, [direction, speed]);

  const handleMouseEnter = () => {
    animationRef.current?.timeScale(speed / hoverSpeed);
  };

  const handleMouseLeave = () => {
    animationRef.current?.timeScale(1);
  };

  return (
    <div className="relative flex flex-col items-center gap-y-2">
      <div
	ref={containerRef}
	className="flex gap-x-2"
	onMouseEnter={handleMouseEnter}
	onMouseLeave={handleMouseLeave}
      >
	{children}
      </div>

      {/* Gradient Overlays */}
      <div className="pointer-events-none">
	<div className="absolute left-0 top-0 bottom-0 w-44 bg-gradient-to-r from-white to-transparent z-30" />
	<div className="absolute right-0 top-0 bottom-0 w-44 bg-gradient-to-l from-white to-transparent z-30" />
      </div>
    </div>
  );
};

export default Scroller;
