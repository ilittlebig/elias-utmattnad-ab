import Image from 'next/image'

const CharitySection = () => {
  return (
    <div className="py-36">
      <div className="flex">
	<div className="flex flex-col text-black items-center text-center mx-auto px-4 lg-px:0 gap-y-6">
	  <label className="font-semibold lg:text-lg text-lg text-center text-primary">
	    HJÄLP ATT HJÄLPA
	  </label>

	  <h1 className="flex gap-x-2.5 relative lg:text-h1 font-rockwell text-3xl font-bold w-fit">
	    Ditt
	    <div className="flex relative items-center justify-center">
	      Köp
	      <div className="absolute w-[105px] h-[70px] -mt-[17px] -z-10">
		<Image
		  src="/decorations/TextHighlight.svg"
		  fill
		  alt="Text Highlight"
		/>
	      </div>
	    </div>
	    Stödjer Diabetesforskning
	  </h1>

	  <h2 className="max-w-3xl lg:text-lg text-lg font-medium">
	    Varje designad matta bär ett löfte – 10% av ditt köp hjälper till att finansiera banbrytande diabetesforskning, för en värld med bättre hälsa. Tillsammans kan vi stödja hjälpmedel för diabetes.
	  </h2>
	</div>
      </div>

      <div className="flex flex-col items-center gap-y-10 pt-10">
        <div className="flex gap-x-12 font-medium">
	  <div className="relative flex bg-white drop-shadow-card text-7xl w-24 h-32 items-center justify-center text-center rounded-xl overflow-hidden">
	    <label className="absolute top-[-42%] opacity-20">0</label>
	    <label className="absolute">1</label>
	    <label className="absolute bottom-[-42%] opacity-20">2</label>
	  </div>

	  <div className="relative flex bg-white drop-shadow-card text-7xl w-24 h-32 items-center justify-center text-center rounded-xl overflow-hidden">
	    <label className="absolute top-[-42%] opacity-20">7</label>
	    <label className="absolute">8</label>
	    <label className="absolute bottom-[-42%] opacity-20">9</label>
	  </div>

	  <div className="relative flex bg-white drop-shadow-card text-7xl w-24 h-32 items-center justify-center text-center rounded-xl overflow-hidden">
	    <label className="absolute top-[-42%] opacity-20">4</label>
	    <label className="absolute">5</label>
	    <label className="absolute bottom-[-42%] opacity-20">6</label>
	  </div>

	  <div className="relative flex bg-white drop-shadow-card text-7xl w-24 h-32 items-center justify-center text-center rounded-xl overflow-hidden">
	    <label className="absolute top-[-42%] opacity-20">3</label>
	    <label className="absolute">4</label>
	    <label className="absolute bottom-[-42%] opacity-20">5</label>
	  </div>

	  <div className="relative flex bg-white drop-shadow-card text-7xl w-24 h-32 items-center justify-center text-center rounded-xl overflow-hidden">
	    <label className="absolute top-[-42%] opacity-20">9</label>
	    <label className="absolute">0</label>
	    <label className="absolute bottom-[-42%] opacity-20">1</label>
	  </div>

	  <div className="relative flex bg-white drop-shadow-card text-7xl w-24 h-32 items-center justify-center text-center rounded-xl overflow-hidden">
	    <label className="absolute top-[-42%] opacity-20">8</label>
	    <label className="absolute">9</label>
	    <label className="absolute bottom-[-42%] opacity-20">0</label>
	  </div>
	</div>

	<label className="text-lg text-black font-medium">
	  Kronor donerade till diabetesforskning
	</label>
      </div>
    </div>
  )
}

export default CharitySection;
