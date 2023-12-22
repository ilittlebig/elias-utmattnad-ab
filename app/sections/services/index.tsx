import Image from 'next/image'
import Service from './service'

const ServicesSection = () => {
  return (
    <>
      <div className="flex py-32">
	<div className="flex flex-col text-center mx-auto font-rockwell px-4 lg-px0 gap-y-6">
	  <h1 className="lg:text-5xl text-4xl font-bold">
	    Våra Tjänster
	  </h1>

	  <h2 className="max-w-4xl lg:text-2xl text-xl">
	    Elias Omattnad AB specialiserar sig på premiumtjänster för skräddarsydda mattor, med fokus på kvalitet och kundanpassning.
	  </h2>
	</div>
      </div>

      <div className="h-[650px]">
	<div className="absolute left-0 w-screen h-[457px]">
	  <Image
	    src="/services.png"
	    layout="fill"
	    objectFit="cover"
	    alt="Hero"
	  />
	</div>

	<div className="flex flex-col lg:flex-row relative top-[60%] left-0 right-0 rounded-xl bg-white w-full pt-6 font-rockwell gap-y-32 lg:justify-between px-4 z-10" >
	  <Service
	    title="Skapa Din Design"
	    description="Anpassa din matta efter din stil och dina önskemål."
	    path="/rugService.png"
	  />

	  <Service
	    title="Hantverk av Kvalitet"
	    description="Varje matta är ett mästerverk, skapat med precision och omsorg."
	    path="/qualityService.png"
	  />

	  <Service
	    title="Personlig Service"
	    description="Individuell kundservice för att uppfylla dina specifika behov."
	    path="/supportService.png"
	  />

	  <Service
	    title="Snabb Leverans"
	    description="Effektiv och pålitlig leverans av din anpassade matta."
	    path="/deliveryService.png"
	  />
	</div>
      </div>
    </>
  )
}

export default ServicesSection;
