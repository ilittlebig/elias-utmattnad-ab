import Image from 'next/image'
import Button from '@/components/button'

const CollectionSection = () => {
  return (
    <div className="h-[950px] px-4 pt-[130px]">
      <div className="absolute left-0 w-full h-[950px]">
	<Image
	  src="/collection.png"
	  priority
	  fill
	  style={{ objectFit: "cover" }}
	  alt="Vision"
	/>
      </div>

      <div className="relative flex items-center h-[950px] z-10">
	<div className="absolute w-[500px] h-[500px] bottom-[-30%] right-[-45%] -z-10 hidden lg:block z-30">
	  <Image
	    src="/HeroRug1.png"
	    fill
	    style={{ objectFit: "contain" }}
	    alt="Rug"
	  />
	</div>

	<div className="flex items-center flex-col mx-auto text-white text-center gap-y-4">
	  <h1 className="relative flex flex-wrap lg:flex-nowrap justify-center gap-x-1.5 lg:text-h1 text-h1-small font-bold">
	    Upptäck Vår

	    <div className="flex items-center justify-center">
	      Mattkollektion
	      <div className="absolute lg:right-[-4%] right-[17.5%] w-[38px] h-[38px] lg:top-[-12%] top-[40%] -z-10">
		<Image
		  src="/Spark.svg"
		  width={38}
		  height={38}
		  style={{ objectFit: "contain" }}
		  alt="Spark"
		/>
	      </div>
	    </div>
	  </h1>

	  <p className="text-base max-w-[480px] max-w-[382px] font-semibold text-white text-opacity-70">
	    Är du redo att ta steget mot att inreda ditt hem med en vacker och bekväm matta, samtidigt som du bidrar till samhället?
	  </p>

	  <Button
	    actionText="Se Kollektionen"
	    href="/products/all"
	  />
	</div>
      </div>
    </div>
  )
}

export default CollectionSection;
