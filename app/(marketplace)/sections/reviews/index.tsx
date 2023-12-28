"use client"
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Card from './card'

const ReviewsSection = () => {
  const reviews = [
    {
      author: "Emma Larsson",
      paragraph: "Otroligt nöjd med produkten, kvaliteten gick verkligen över förväntan!",
      rating: 4
    },
    {
      author: "Johan Bergström",
      paragraph: "Fantastisk service och leverans i tid, jag är helnöjd!",
      rating: 4
    },
    {
      author: "Sara Jonsson",
      paragraph: "Ett unikt hantverk som verkligen speglar kvalitet och omsorg.",
      rating: 4
    },
    {
      author: "Daniel Persson",
      paragraph: "Jag blev positivt överraskad av den personliga servicen och snabba leveransen.",
      rating: 4
    },
    {
      author: "Maria Andersson",
      paragraph: "Enastående kvalitet! Produkten motsvarade verkligen alla mina förväntningar.",
      rating: 5
    },
    {
      author: "Oskar Karlsson",
      paragraph: "Kundservicen var utöver det vanliga – vänlig, snabb och hjälpsam.",
      rating: 5
    },
    {
      author: "Linda Gustafsson",
      paragraph: "Hantverket är fantastiskt, riktigt imponerad av detaljrikedomen.",
      rating: 4
    },
    {
      author: "Erik Svensson",
      paragraph: "Mycket nöjd med mitt köp, produkten var precis som beskriven.",
      rating: 4
    },
    {
      author: "Anna Nilsson",
      paragraph: "Jag uppskattar verkligen den miljövänliga aspekten och hållbarheten.",
      rating: 5
    },
    {
      author: "Peter Lindberg",
      paragraph: "Produkten överträffade mina förväntningar, både i design och kvalitet.",
      rating: 5
    },
    {
      author: "Sofie Johansson",
      paragraph: "Hög kvalitet till ett rimligt pris, jag rekommenderar definitivt!",
      rating: 4
    },
    {
      author: "Mikael Öberg",
      paragraph: "En riktigt bra köpupplevelse från början till slut, kommer köpa igen!",
      rating: 5
    },
  ];

  const variants = {
    enter: {
      opacity: 0,
      x: 500,
      transition: { duration: 1.0 },
    },
    center: {
      opacity: 1,
      x: 0,
      transition: { delay: 0.55, duration: 0.75 }
    },
    exit: {
      opacity: 0,
      x: -500,
      transition: { duration: 0.75 }
    },
  };

  const [currentIndex, setCurrentIndex] = useState(0);
  const setsCount = Math.ceil(reviews.length / 3);
  const [userInteracted, setUserInteracted] = useState(false);

  const cardSets = new Array(setsCount).fill(null).map((_, i) =>
    reviews.slice(i * 3, i * 3 + 3)
  );

  useEffect(() => {
    const interval = setInterval(() => {
      if (!userInteracted) {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % setsCount);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [userInteracted, setsCount]);

  useEffect(() => {
    if (userInteracted) {
      setUserInteracted(false);
    }
  }, [currentIndex]);

  return (
    <div className="flex flex-col py-32 gap-y-8">
      <div className="flex flex-col text-center mx-auto font-rockwell gap-y-6">
	<div className="flex items-center gap-x-3">
	  <div className="w-32 bg-black hidden lg:block rounded-full h-1"></div>

	  <h1 className="lg:text-5xl text-4xl font-bold">
	    Kundomdömen
	  </h1>

	  <div className="w-32 bg-black hidden lg:block rounded-full h-1"></div>
	</div>
      </div>

      <div className="relative lg:min-h-[200px] min-h-[500px] overflow-hidden py-8">
        <AnimatePresence>
          <motion.div
            key={currentIndex}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute inset-0 flex lg:flex-row flex-col gap-y-6 px-4 lg:px-4 justify-between"
          >
            {cardSets[currentIndex].map((review, index) => (
              <Card
                key={index}
                author={review.author}
                paragraph={review.paragraph}
                rating={review.rating}
              />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex gap-x-6 items-center mx-auto">
	{new Array(setsCount).fill(null).map((_, index) => (
          <div
            key={index}
            className={`cursor-pointer ${currentIndex === index ? 'w-3 h-3 bg-primary' : 'w-2 h-2 bg-gray-500'} rounded-full`}
            onClick={() => {
	      setCurrentIndex(index);
	      setUserInteracted(true);
	    }}
          />
        ))}
      </div>
    </div>
  )
}

export default ReviewsSection;
