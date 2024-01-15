import CompanyCard from '@/(marketplace)/components/companyCard'
import Scroller from '@/(marketplace)/components/scroller'
import Image from 'next/image'

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

  return (
    <div className="relative max-w-6xl text-center items-center flex justify-center flex-col gap-y-4">
      <label className="font-semibold text-base text-center text-primary">
	Varför Elias Mattor?
      </label>

      <label className="max-w-[480px] gap-y-1 px-4 font-bold lg:text-h1 text-3xl text-center text-black">
	Tillsammans bygger vi framtidens mattor
      </label>

      <label className="max-w-[480px] px-4 font-semibold text-base text-center text-black text-opacity-60">
	Med stöd från branschledare, förnyar vi ständigt våra handtuftade mattor för framtiden.
      </label>

      <div className="w-full overflow-hidden pt-12">
	<Scroller direction="left">
	  {companyImages.map((image, index) => (
	    <CompanyCard key={index} image={image} />
	  ))}
	</Scroller>
      </div>
    </div>
  );
};

export default TrustedBySection;
