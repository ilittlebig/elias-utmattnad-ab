import Image from 'next/image'
import Button from '@/components/button'

const CollectionSection = () => {
  return (
    <div className="h-[988px] px-4">
      <div className="absolute left-0 w-screen h-[988px]">
	<Image
	  src="/collection.png"
	  priority
	  fill
	  style={{ objectFit: "cover" }}
	  alt="Vision"
	/>
      </div>

      <div className="relative flex items-center h-[988px] z-10">
	<div className="flex items-center flex-col mx-auto text-white text-center gap-y-6">
	  <h1 className="relative flex gap-x-2.5 lg:text-5xl text-4xl font-bold">
	    Upptäck Vår

	    <div className="flex items-center justify-center">
	      Mattkollektion
	      <div className="absolute right-[-3.5%] w-[38px] h-[38px] top-[-20%] -z-10">
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

	  <h2 className="lg:text-4xl text-2xl max-w-4xl">
	    Bläddra bland unika, handgjorda mattor. Skapade med passion, redo att berika ditt hem.
	  </h2>

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
