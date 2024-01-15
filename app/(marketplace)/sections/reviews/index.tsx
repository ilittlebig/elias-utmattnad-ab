"use client"
import { useState, useEffect } from 'react'
import Image from 'next/image'
import Card from './card'
import Scroller from '@/(marketplace)/components/scroller'

const ReviewsSection = () => {
  const reviews = [
    { author: "Emma Larsson", paragraph: "Otroligt nöjd med produkten, kvaliteten gick över förväntan!", rating: 4 },
    { author: "Johan Bergström", paragraph: "Fantastisk service och leverans i tid, jag är helnöjd!", rating: 4 },
    { author: "Sara Jonsson", paragraph: "Ett unikt hantverk som verkligen speglar kvalitet och omsorg.", rating: 4 },
    { author: "Daniel Persson", paragraph: "Jag blev positivt överraskad av den personliga servicen och snabba leveransen.", rating: 4 },
    { author: "Maria Andersson", paragraph: "Enastående kvalitet! Produkten motsvarade verkligen alla mina förväntningar.", rating: 5 },
    { author: "Oskar Karlsson", paragraph: "Kundservicen var utöver det vanliga – vänlig, snabb och hjälpsam.", rating: 5 },
    { author: "Linda Gustafsson", paragraph: "Hantverket är fantastiskt, riktigt imponerad av detaljrikedomen.", rating: 4 },
    { author: "Erik Svensson", paragraph: "Mycket nöjd med mitt köp, produkten var precis som beskriven.", rating: 4 },
    { author: "Anna Nilsson", paragraph: "Jag uppskattar verkligen den miljövänliga aspekten och hållbarheten.", rating: 5 },
    { author: "Peter Lindberg", paragraph: "Produkten överträffade mina förväntningar, både i design och kvalitet.", rating: 5 },
    { author: "Sofie Johansson", paragraph: "Hög kvalitet till ett rimligt pris, jag rekommenderar definitivt!", rating: 4 },
    { author: "Mikael Öberg", paragraph: "En riktigt bra köpupplevelse från början till slut, kommer köpa igen!", rating: 5 },
    { author: "Karin Eriksson", paragraph: "Fantastisk matta, förhöjer verkligen rummets karaktär!", rating: 5 },
    { author: "Lars Nilsson", paragraph: "Mycket nöjd, kvaliteten är toppen!", rating: 4 },
    { author: "Eva Lund", paragraph: "Högsta kvalitet, mattan passar perfekt hemma.", rating: 5 },
    { author: "Henrik Jonsson", paragraph: "Utmärkt hantverk och design, rekommenderar starkt!", rating: 4 },
    { author: "Sofia Karlsson", paragraph: "Matta av hög kvalitet, mycket nöjd!", rating: 4 },
    { author: "Nils Gustafsson", paragraph: "Elegant design, höjer rummets hela utseende.", rating: 5 },
    { author: "Alice Sandberg", paragraph: "Underbar matta, fantastiskt hantverk och kvalitet.", rating: 5 },
    { author: "Gustav Pettersson", paragraph: "Kvaliteten och servicen är utmärkt, supernöjd!", rating: 4 },
    { author: "Maja Olofsson", paragraph: "Perfektion i varje detalj, rekommenderas varmt.", rating: 5 },
    { author: "Oscar Berglund", paragraph: "Matta med högsta kvalitet och komfort.", rating: 4 },
    { author: "Ida Jansson", paragraph: "Lyfter hela rummet, kvalitet som imponerar.", rating: 5 },
    { author: "Leo Åkesson", paragraph: "Enastående design och kvalitet, älskar min matta!", rating: 4 },
    { author: "Emma Sjögren", paragraph: "Prisvärd och hållbar, en riktig pärla!", rating: 5 },
    { author: "Axel Lind", paragraph: "Enastående kundservice och vacker produkt.", rating: 4 },
    { author: "Vera Holm", paragraph: "Imponerad av både kvalitet och design!", rating: 5 },
    { author: "Björn Falk", paragraph: "Designen är unik och kvaliteten håller.", rating: 4 },
  ];

  return (
    <div className="relative flex flex-col pt-[130px] gap-y-16">
      <div className="flex flex-col text-black items-center text-center mx-auto px-4 lg-px:0 gap-y-4">
	<label className="font-semibold text-base text-center text-primary">
	  Vägg av kärlek
	</label>

	<h1 className="flex gap-x-1.5 relative lg:text-h1 text-4xl font-bold w-fit">
	  <div className="absolute left-[-14px] w-12 h-12 -mt-1 -z-10 bg-orange-200 rounded-full" />
	  Vad <p className="underline">kunder</p> säger om oss
	</h1>
      </div>

      <div className="flex flex-col gap-y-8 overflow-hidden">
	<Scroller direction="left" speed={240} hoverSpeed={500}>
	  {reviews.map((review, index) => (
	    <Card
	      key={index}
	      author={review.author}
	      paragraph={review.paragraph}
	      rating={review.rating}
	    />
	  ))}
	</Scroller>

	<Scroller direction="right" speed={240} hoverSpeed={500}>
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

      <label className="font-semibold text-base text-center text-black text-opacity-60">
        Vill du synas här?
      </label>
    </div>
  )
}

export default ReviewsSection;
