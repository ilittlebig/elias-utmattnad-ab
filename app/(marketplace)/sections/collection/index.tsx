import Image from 'next/image'
import Button from '@/components/button'

const CollectionSection = () => {
  return (
    <div className="h-[950px] px-4 pt-[130px]">
      <div className="absolute left-0 w-screen h-[950px]">
	<Image
	  src="/collection.png"
	  priority
	  fill
	  style={{ objectFit: "cover" }}
	  alt="Vision"
	/>
      </div>

      <div className="relative flex items-center h-[950px] z-10">
	<div className="flex items-center flex-col mx-auto text-white text-center gap-y-4">
	  <h1 className="relative flex gap-x-1.5 text-h1 font-bold">
	    Upptäck Vår

	    <div className="flex items-center justify-center">
	      Mattkollektion
	      <div className="absolute right-[-3.7%] w-[38px] h-[38px] top-[-12%] -z-10">
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

	  <p className="text-base max-w-[480px] font-semibold text-white text-opacity-60">
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
