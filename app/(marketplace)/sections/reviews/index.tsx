"use client"
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
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
    { author: "Clara Lundqvist", paragraph: "Älskar färgerna och mönstret, så nöjd.", rating: 5 },
    { author: "Fredrik Sandström", paragraph: "Fantastisk känsla och komfort, rekommenderas starkt.", rating: 4 },
    { author: "Emelie Nord", paragraph: "Matta av högsta klass och skönhet.", rating: 5 },
    { author: "Jonas Alm", paragraph: "Kundservice var utmärkt, produkten fantastisk.", rating: 4 },
    { author: "Lisa Berg", paragraph: "Elegant och hållbar matta, mycket nöjd.", rating: 5 },
    { author: "Magnus Frisk", paragraph: "Unik design som verkligen imponerar.", rating: 4 },
    { author: "Sandra Viklund", paragraph: "Mjuk och skön, passar perfekt hemma.", rating: 5 },
    { author: "Karl Holmgren", paragraph: "Överträffade alla mina förväntningar, fantastiskt.", rating: 4 },
    { author: "Amanda Ekström", paragraph: "Kvalitet och design i perfekt balans.", rating: 5 },
    { author: "Mattias Nyström", paragraph: "Helt nöjd, en riktig kvalitetsprodukt.", rating: 4 },
    { author: "Julia Ågren", paragraph: "Underbart hantverk, mattan är perfekt.", rating: 5 },
    { author: "Tobias Ström", paragraph: "Stilren och skön, helt fantastisk!", rating: 4 },
    { author: "Hanna Lindgren", paragraph: "Lyxig känsla, toppkvalitet, stark rekommendation.", rating: 5 },
    { author: "David Söderberg", paragraph: "Utmärkt för hemmet, mycket imponerad.", rating: 4 },
    { author: "Linnéa Forsberg", paragraph: "Skapar en härlig atmosfär i rummet.", rating: 5 },
    { author: "Victor Bergqvist", paragraph: "Gör mitt hem mycket mer inbjudande.", rating: 4 },
    { author: "Elin Holmberg", paragraph: "Fantastisk kvalitet, mattan är underbar!", rating: 5 },
    { author: "Andreas Lundberg", paragraph: "Köpet var enkelt, produkten superb.", rating: 4 },
    { author: "Rebecca Nyberg", paragraph: "Mjuk och hållbar, precis som lovat.", rating: 5 },
    { author: "Simon Andersson", paragraph: "En riktig höjdpunkt i mitt hem.", rating: 4 },
    { author: "Louise Blom", paragraph: "Färgen och textur är helt perfekt.", rating: 5 },
    { author: "Christian Dahl", paragraph: "Ger en lyxig touch till rummet.", rating: 4 }
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
	<Scroller direction="left" speed={120} hoverSpeed={240}>
	  {reviews.map((review, index) => (
	    <Card
	      key={index}
	      author={review.author}
	      paragraph={review.paragraph}
	      rating={review.rating}
	    />
	  ))}
	</Scroller>

	<Scroller speed={120} hoverSpeed={240}>
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

      <label className="font-medium lg:text-lg text-lg text-center text-black">
        Vill du synas här?
      </label>
    </div>
  )
}

export default ReviewsSection;
