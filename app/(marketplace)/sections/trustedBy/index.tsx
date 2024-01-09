"use client"
import { motion } from 'framer-motion'
import Image from 'next/image'
import CompanyCard from '@/(marketplace)/components/companyCard'

const TrustedBySection = () => {
  const companyImages = [
    "MIO.svg",
    "ikea.svg",
    "ICA.svg",
    "Coop.svg",
    "Hemkop.svg",
    "Amazon.svg",
    "ikea.svg"
  ];

  const repeatedImages = Array(5).fill(companyImages).flat();
  const initialOffset = -3 * (244 + 8);

  const scrollVariants = {
    animate: {
      x: [3000, -1000 * 5],
      transition: {
        duration: 120,
        ease: "linear",
        repeat: Infinity
      }
    }
  };

  return (
    <div className="h-[430px]">
      <div className="absolute left-0 overflow-hidden items-center flex flex-col gap-y-12 w-screen">
        <div className="max-w-6xl text-center items-center flex justify-center flex-col gap-y-6">
	  <label className="font-semibold lg:text-lg text-lg text-center text-primary">
	    VARFÖR ELIAS MATTOR?
	  </label>

	  <label className="max-w-4xl px-4 font-rockwell font-bold lg:text-h1 text-3xl text-center text-black">
	    <p className="break-after-column">
	      Tusentals Unika Mattor,
	    </p>
	    <p>
	      Skapade för Mångsidiga Utrymmen
	    </p>
	  </label>

	  <label className="max-w-3xl px-4 font-medium lg:text-lg text-lg text-center text-black">
	    Med vår skicklighet i att skapa unika, handtuftade mattor, förstår våra kunder värdet av Elias Utmattad AB i att förvandla deras utrymmen med stil och komfort.
	  </label>
	</div>

	<div className="flex flex-col items-center gap-y-2">
	  <motion.div
	    className="flex gap-x-2"
	    variants={scrollVariants}
	    animate="animate"
	  >
	    {repeatedImages.map((image, index) => (
	      <CompanyCard key={index} image={image} />
	    ))}
	  </motion.div>
	</div>
      </div>
    </div>
  );
};

export default TrustedBySection;
