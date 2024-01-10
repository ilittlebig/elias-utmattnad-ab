import CompanyCard from '@/(marketplace)/components/companyCard'
import Scroller from '@/(marketplace)/components/scroller'

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

  return (
    <div className="h-[430px]">
      <div className="flex flex-col gap-y-12 w-full">
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
	    Med vår skicklighet i att skapa unika, handtuftade mattor, förstår våra kunder värdet av Elias Mattor i att förvandla deras utrymmen med stil och komfort.
	  </label>
	</div>

	<div className="overflow-hidden">
	  <Scroller direction="left">
	    {companyImages.map((image, index) => (
	      <CompanyCard key={index} image={image} />
	    ))}
	  </Scroller>
	</div>
      </div>
    </div>
  );
};

export default TrustedBySection;
