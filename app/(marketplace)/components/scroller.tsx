"use client"
import React, { useRef, useEffect, ReactNode } from 'react';
import gsap from 'gsap';

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
    const container = containerRef.current;

    const clearClones = () => {
      if (!container)
	return;

      const childNodes = Array.from(container.childNodes);
      childNodes.forEach(node => {
	if (node instanceof Element && node.classList.contains("clone")) {
	  container.removeChild(node);
	}
      });
    };

    if (container && container.firstChild) {
      clearClones();

      const childNodes = Array.from(container.childNodes);
      childNodes.forEach(node => {
	const clone = node.cloneNode(true);
	if (clone instanceof Element) {
	  clone.classList.add("clone");
	  if (direction === "right") {
	    container.prepend(clone);
	  } else {
	    container.appendChild(clone);
	  }
	}
      });

      const contentWidth = container.scrollWidth / 2;
      const initialX = direction === "right" ? -contentWidth : 0;
      gsap.set(container, { x: initialX });

      animationRef.current = gsap.to(container, {
        x: () => direction === "right" ? `+=${contentWidth}` : `-=${contentWidth}`,
        ease: "none",
        duration: speed,
        repeat: -1,
        onRepeat: () => {
          gsap.set(container, { x: 0 });
        }
      });
    }

    return () => {
      animationRef.current?.kill();
    };
  }, [children, direction, speed]);

  const handleMouseEnter = () => {
    if (animationRef.current) {
      animationRef.current.timeScale(speed / hoverSpeed);
    }
  };

  const handleMouseLeave = () => {
    if (animationRef.current) {
      animationRef.current.timeScale(1);
    }
  };

  return (
    <div className="relative">
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
