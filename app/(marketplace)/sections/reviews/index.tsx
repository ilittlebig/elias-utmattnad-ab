"use client"
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Card from './card'
import Scroller from '@/(marketplace)/components/scroller'

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

  return (
    <div className="relative flex flex-col py-36 gap-y-8">
      <div className="absolute w-[35px] h-[35px] top-[18%] left-[-5%]">
	<Image
	  src="/decorations/Star2.svg"
	  fill
	  style={{ objectFit: "contain" }}
	  alt="Star"
	/>
      </div>

      <div className="absolute w-[25px] h-[25px] top-[35%] right-[-8%]">
	<Image
	  src="/decorations/Star1.svg"
	  fill
	  style={{ objectFit: "contain" }}
	  alt="Star"
	/>
      </div>

      <div className="flex flex-col text-black items-center text-center mx-auto px-4 lg-px:0 gap-y-6">
	<label className="font-semibold lg:text-lg text-lg text-center text-primary">
	  VÄGG AV KÄRLEK
	</label>

	<h1 className="relative font-rockwell lg:text-5xl text-4xl font-bold w-fit">
	  <div className="absolute left-[-14px] w-12 h-12 -mt-3 -z-10 bg-orange-200 rounded-full" />
	  Vad kunder säger om oss
	</h1>
      </div>

      <div className="flex flex-col gap-y-4 overflow-hidden">
	<Scroller direction="left">
	  {reviews.map((review, index) => (
	    <Card
	      key={index}
	      author={review.author}
	      paragraph={review.paragraph}
	      rating={review.rating}
	    />
	  ))}
	</Scroller>

	<Scroller>
	  {reviews.map((review, index) => (
	    <Card
	      key={index}
	      author={review.author}
	      paragraph={review.paragraph}
	      rating={review.rating}
	    />
	  ))}
	</Scroller>
      </div>
    </div>
  )
}

export default ReviewsSection;
