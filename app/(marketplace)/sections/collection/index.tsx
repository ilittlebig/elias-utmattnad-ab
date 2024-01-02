import Image from 'next/image'
import Button from '@/components/button'

const CollectionSection = () => {
  return (
    <div className="h-[988px] px-4 lg:pt-12">
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
	  <h1 className="lg:text-5xl text-4xl font-bold">
	    Upptäck Vår Mattkollektion
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
